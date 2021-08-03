/**
 * Copyright 2021 The AMP HTML Authors. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS-IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import octonode from 'octonode';
import PQueue from 'p-queue';

const LOCAL_AMPHTML = process.env.AMP_LOCAL_AMPHTML;
const CLIENT_TOKEN = process.env.AMP_DOC_TOKEN;
const CLIENT_SECRET = process.env.AMP_DOC_SECRET;
const CLIENT_ID = process.env.AMP_DOC_ID;

/* The GitHub organisation where the repositories imported from are located */
const DEFAULT_ORGANISATION = 'ampproject';
const DEFAULT_REPOSITORY = `${DEFAULT_ORGANISATION}/amphtml`;

const MAX_CONCURRENT_OPS = 6;

function checkCredentials() {
  if (!CLIENT_TOKEN && !(CLIENT_SECRET && CLIENT_ID)) {
    console.error(
      'Please provide either a GitHub personal access token (AMP_DOC_TOKEN) or ' +
      'GitHub application id/secret (AMP_DOC_ID and AMP_DOC_SECRET). See README.md for more ' +
      'information.'
    );

    throw new Error('Error: No GitHub credentials provided.');
  }
}

class GitHubImporter {
  constructor() {
    checkCredentials();
    this._queue = new PQueue({ concurrency: MAX_CONCURRENT_OPS });
    this._github = octonode.client(
      CLIENT_TOKEN || {
        'id': CLIENT_ID,
        'secret': CLIENT_SECRET,
      }
    );
  }

  /**
   * Downloads a path/document from GitHub and returns its contents
   * @param  {String} path Path to the file
   * @param  {Boolean} master true if document should be fetched from master
   * @return {Object} A object containing all information
   */
  async fetchJson(filePath, repo = DEFAULT_REPOSITORY, master = false) {
    return this.fetchContents_(filePath, repo, master);
  }

  /**
   * Fetches all files contained in a directory flattened down to
   * a simple array
   * @param  {String} path Path to the file
   * @param  {Boolean} master true if document should be fetched from master
   * @return {Object} A object containing all information
   * @return {Array}
   */
  async listDirectory(filePath, repo = DEFAULT_REPOSITORY, master = false) {
    const data = await this.fetchJson(filePath, repo, master);
    return data[0].map((file) => {
      return file.path;
    });
  }

  /**
   * Downloads a file from Github and returns its contents.
   * @param  {String} path Path to the file
   * @param  {Boolean} master true if document should be fetched from master
   * @return {String} A string containing the file
   */
  async fetchFile(filePath, repo = DEFAULT_REPOSITORY, master = false) {
    const data = await this.fetchContents_(
      filePath,
      repo,
      master,
      LOCAL_AMPHTML
    );
    const str = Buffer.from(data[0].content || data, 'base64').toString();
    return str;
  }

  async fetchContents_(
    filePath,
    repo = DEFAULT_REPOSITORY,
    master = false,
    local = false
  ) {
    let request = Promise.resolve();

    if (!filePath) {
      request = Promise.reject(
        new Error('Can not download from undefined path.')
      );
    } else if (local) {
      // TODO: https://github.com/ampproject/amp.dev/issues/2965
      request = Promise.reject(
        new Error('Importing from a local path is currently not implemented.')
      );
    } else if (master || repo !== DEFAULT_REPOSITORY) {
      request = await this._queue.add(() => {
        console.log(`Downloading ${filePath} from remote master...`);
        return this._github.repo(repo).contentsAsync(filePath);
      });
    } else {
      const tag = await this._fetchLatestReleaseTag();
      request = await this._queue.add(() => {
        console.log(`Downloading ${filePath} from remote [${tag}]...`);
        return this._github.repo(repo).contentsAsync(filePath, tag);
      });
    }

    return request;
  }

  _fetchLatestReleaseTag() {
    if (this.latestReleaseTag_) {
      return this.latestReleaseTag_;
    }
    console.log('Fetching latest release tag ...');

    this.latestReleaseTag_ = new Promise((resolve, reject) => {
      this._github.get(
        '/repos/ampproject/amphtml/releases/latest',
        {},
        (err, status, body) => {
          if (body.tag_name) {
            resolve(body.tag_name);
          } else {
            console.error(
              'Was not able to retrieve latest AMP release from GitHub.'
            );
            reject(err);
          }
        }
      );
    })
      .then((latestReleaseTag) => {
        console.log(`Fetched latest release tag: ${latestReleaseTag}`);
        return latestReleaseTag;
      })
      .catch((err) => {
        console.error(err);
        return null;
      });
    return this.latestReleaseTag_;
  }
}

export {
  CLIENT_TOKEN,
  CLIENT_SECRET,
  CLIENT_ID,
  checkCredentials,
  GitHubImporter,
  DEFAULT_ORGANISATION,
  DEFAULT_REPOSITORY,
};
