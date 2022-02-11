---
id: bento-twitter
title: Bento Twitter
permalink: "/ja/components/bento-twitter/"
short_title: Twitter
layout: layouts/component.njk
description: ツイートやモーメントなどの <a href="https://twitter.com">Twitter</a> コンテンツを埋め込みます。
---

# Bento Twitter

{% heroexample 'bento-twitter' %}

ツイートやモーメントなどの [Twitter](https://twitter.com) コンテンツを埋め込みます。

<div class="bd-usage bd-card bd-card--light-sea-green">
<p>bento-twitter をウェブコンポーネントまたは React 関数コンポーネントとして使用します。</p> <a href="#web-component" class="">↓ ウェブコンポーネント</a> <a href="#preact%2Freact-component">↓ React / Preact</a>
</div>

## ウェブコンポーネント

適切な読み込みを保証するには、Bento コンポーネントの必須 CSS ライブラリをカスタムスタイルを追加する前にインクルードする必要があります。または、インラインで使用可能な軽量のアップグレード前のスタイルを使用することも可能です。[レイアウトとスタイル](#layout-and-style)を参照してください。

### npm によるインポート

```bash
npm install @bentoproject/twitter
```

```javascript
import {defineElement as defineBentoTwitters} from '@bentoproject/twitter';
defineBentoTwitters();
```

### `<script>` によるインクルード

```html
<script type="module" src="https://cdn.ampproject.org/bento.mjs" crossorigin="anonymous"></script>
<script nomodule src="https://cdn.ampproject.org/bento.js" crossorigin="anonymous"></script>
<script type="module" src="https://cdn.ampproject.org/v0/bento-twitter-1.0.mjs" crossorigin="anonymous"></script>
<script nomodule src="https://cdn.ampproject.org/v0/bento-twitter-1.0.js" crossorigin="anonymous"></script>
<link rel="stylesheet" href="https://cdn.ampproject.org/v0/bento-twitter-1.0.css" crossorigin="anonymous">
```

### 例

{% example %}

```html
<!DOCTYPE html>
<html>
  <head>
    <script
      type="module"
      async
      src="https://cdn.ampproject.org/bento.mjs"
    ></script>
    <script nomodule src="https://cdn.ampproject.org/bento.js"></script>
    <script
      type="module"
      async
      src="https://cdn.ampproject.org/v0/bento-twitter-1.0.mjs"
    ></script>
    <script
      nomodule
      async
      src="https://cdn.ampproject.org/v0/bento-twitter-1.0.js"
    ></script>
    <link
      rel="stylesheet"
      type="text/css"
      href="https://cdn.ampproject.org/v0/bento-twitter-1.0.css"
    />
    <style>
      bento-twitter {
        width: 375px;
        height: 472px;
      }
    </style>
  </head>
  <body>
    <bento-twitter id="my-tweet" data-tweetid="885634330868850689"></bento-twitter>
  </body>
</html>
```

{% endexample %}

### レイアウトとスタイル

各 Bento コンポーネントには、[コンテンツシフト](https://web.dev/cls/)を発生させずに適切に読み込まれることを保証するために含める必要のある小さな CSS ライブラリがあります。読み取り順が重要であるため、カスタムスタイルの前にスタイルシートがインクルードされていることを手動で確認する必要があります。

```html
<link
  rel="stylesheet"
  type="text/css"
  href="https://cdn.ampproject.org/v0/bento-twitter-1.0.css"
/>
```

または、軽量のアップグレード前のスタイルをインラインで使用可能にすることもできます。

```html
<style>
  bento-twitter {
    display: block;
    overflow: hidden;
    position: relative;
  }
</style>
```

#### コンテナタイプ

`bento-twitter` コンポーネントには、定義済みのレイアウトサイズタイプがあります。コンポーネントが正しくレンダリングされるようにするには、目的の CSS レイアウト（`height`、`width`、`aspect-ratio`、またはその他の該当するプロパティで定義されたもの）を使って、コンポーネントとその直下の子コンポーネント（スライド）にサイズを必ず適用してください。

```css
bento-twitter {
  height: 100px;
  width: 100%;
}
```

### 属性

<table>
  <tr>
    <td width="40%"><strong>data-tweetid / data-momentid / data-timeline-source-type（必須）</strong></td>
    <td>ツイートまたはモーメントの ID、またはタイムラインを表示する場合はソースタイプ。https://twitter.com/joemccann/status/640300967154597888 のような URL がある場合、<code>640300967154597888</code> がツイート ID です。https://twitter.com/i/moments/1009149991452135424 のような URL の場合は、<code>1009149991452135424</code> がモーメント ID となります。有効なタイムラインのソースタイプには、<code>profile</code>、<code>likes</code>、<code>list</code>、<code>collection</code>、<code>url</code>、<code>widget</code> が含まれます。</td>
  </tr>
  <tr>
    <td width="40%"><strong>data-timeline-*（オプション）</strong></td>
    <td>タイムラインを表示する場合、<code>timeline-source-type</code> の他にも引数を指定する必要があります。たとえば、<code>data-timeline-screen-name="amphtml"</code> は、<code>data-timeline-source-type="profile"</code> と合わせると、AMP Twitter アカウントのタイムラインを表示します。使用可能な引数の詳細については、<a href="https://developer.twitter.com/en/docs/twitter-for-websites/javascript-api/guides/scripting-factory-functions">Twitter's JavaScript Factory Functions Guide</a> の「Timelines」セクションをご覧ください。</td>
  </tr>
  <tr>
    <td width="40%"><strong>data-*（オプション）</strong></td>
    <td>
<code>data-</code> 属性を設定して、ツイート、モーメント、またはタイムラインの外観に関するオプションを指定できます。たとえば、<code>data-cards="hidden"</code> はツイッターカードを無効にします。使用可能なオプションの詳細については、Twitter ドキュメントの「<a href="https://developer.twitter.com/en/docs/twitter-for-websites/embedded-tweets/guides/embedded-tweet-parameter-reference">for tweets</a>」、「<a href="https://developer.twitter.com/en/docs/twitter-for-websites/moments/guides/parameter-reference0">for moments</a>」、および「<a href="https://developer.twitter.com/en/docs/twitter-for-websites/timelines/guides/parameter-reference">for timelines</a>」をご覧ください。</td>
  </tr>
   <tr>
    <td width="40%"><strong>title（オプション）</strong></td>
    <td>コンポーネントの <code>title</code> 属性を定義します。デフォルトは <code>Twitter</code> です。</td>
  </tr>
</table>

### インタラクティビティと API の使用

プログラムによって属性値を変更すると、要素を自動的に更新できます。たとえば、`data-tweetid` によってツイート ID を変更すると、新しいツイートが自動的に読みこまれます。

{% example %}

```html
<!DOCTYPE html>
<html>
  <head>
    <script
      type="module"
      async
      src="https://cdn.ampproject.org/bento.mjs"
    ></script>
    <script nomodule src="https://cdn.ampproject.org/bento.js"></script>
    <script
      type="module"
      async
      src="https://cdn.ampproject.org/v0/bento-twitter-1.0.mjs"
    ></script>
    <script
      nomodule
      async
      src="https://cdn.ampproject.org/v0/bento-twitter-1.0.js"
    ></script>
    <link
      rel="stylesheet"
      type="text/css"
      href="https://cdn.ampproject.org/v0/bento-twitter-1.0.css"
    />
    <style>
      bento-twitter {
        width: 375px;
        height: 472px;
      }
    </style>
  </head>
  <body>
    <bento-twitter id="my-tweet" data-tweetid="885634330868850689">
    </bento-twitter>
    <div class="buttons" style="margin-top: 8px">
      <button id="change-tweet">Change tweet</button>
    </div>

    <script>
      (async () => {
        const twitter = document.querySelector('#my-tweet');

        // set up button actions
        document.querySelector('#change-tweet').onclick = () => {
          twitter.setAttribute('data-tweetid', '495719809695621121');
        };
      })();
    </script>
  </body>
</html>
```

{% endexample %}

---

## Preact/React コンポーネント

### npm によるインポート

```bash
npm install @bentoproject/twitter
```

```javascript
import React from 'react';
import {BentoTwitter} from '@bentoproject/twitter/react';
import '@bentoproject/twitter/styles.css';

function App() {
  return <BentoTwitter tweetid="1356304203044499462"></BentoTwitter>;
}
```

### レイアウトとスタイル

#### コンテナタイプ

`BentoTwitter` コンポーネントには、定義済みのレイアウトサイズタイプがあります。コンポーネントが正しくレンダリングされるようにするには、目的の CSS レイアウト（`height`、`width`、`aspect-ratio`、またはその他の該当するプロパティで定義されたもの）を使って、コンポーネントとその直下の子コンポーネント（スライド）にサイズを必ず適用してください。これらはインラインで適用できます。

```jsx
<BentoTwitter
  style={% raw %}{{width: 300, height: 100}}{% endraw %}
  tweetid="1356304203044499462"
></BentoTwitter>
```

または `className` を使用します。

```jsx
<BentoTwitter
  className="custom-styles"
  tweetid="1356304203044499462"
></BentoTwitter>
```

```css
.custom-styles {
  height: 100px;
  width: 100%;
}
```

## プロップ

<table>
  <tr>
    <td width="40%"><strong>tweetid / momentid / timelineSourceType（必須）</strong></td>
    <td>ツイートまたはモーメントの ID、またはタイムラインを表示する場合はソースタイプ。https://twitter.com/joemccann/status/640300967154597888 のような URL がある場合、<code>640300967154597888</code> がツイート ID です。https://twitter.com/i/moments/1009149991452135424 のような URL の場合は、<code>1009149991452135424</code> がモーメント ID となります。有効なタイムラインのソースタイプには、<code>profile</code>、<code>likes</code>、<code>list</code>、<code>collection</code>、<code>url</code>、<code>widget</code> が含まれます。</td>
  </tr>
  <tr>
    <td width="40%"><strong>card / conversations（オプション）</strong></td>
    <td>ツイートを表示する場合、<code>tweetid</code> の他にも引数を指定する必要があります。たとえば、<code>cards="hidden"</code> は、<code>conversation="none"</code> と合わせると、追加のサムネイルやコメントを含めずにツイートを表示します。</td>
  </tr>
  <tr>
    <td width="40%"><strong>limit（オプション）</strong></td>
    <td>モーメントを表示する場合、<code>moment</code> の他にも引数を指定する必要があります。たとえば、<code>limit="5"</code> は埋め込みモーメントに最大 5 つのカードを表示します。</td>
  </tr>
  <tr>
    <td width="40%"><strong>timelineScreenName / timelineUserId（オプション）</strong></td>
    <td>タイムラインを表示する場合、<code>timelineSourceType</code> の他にも引数を指定する必要があります。たとえば、<code>timelineScreenName="amphtml"</code> は、<code>timelineSourceType="profile"</code> と合わせると、AMP Twitter アカウントのタイムラインを表示します。</td>
  </tr>
  <tr>
    <td width="40%"><strong>options（オプション）</strong></td>
    <td>
<code>options</code> プロップにオブジェクトを渡して、ツイート、モーメント、またはタイムラインの外観のオプションを指定できます。使用可能なオプションの詳細については、Twitter のドキュメントの「<a href="https://developer.twitter.com/en/docs/twitter-for-websites/embedded-tweets/guides/embedded-tweet-parameter-reference">for tweets</a>」、「<a href="https://developer.twitter.com/en/docs/twitter-for-websites/moments/guides/parameter-reference0">for moments</a>’、および「<a href="https://developer.twitter.com/en/docs/twitter-for-websites/timelines/guides/parameter-reference">for timelines</a>」をご覧ください。注意: `options` プロップに渡す際は、オブジェクトを最適化するか記憶するようにしてください。<pre>const TWITTER_OPTIONS = {
  // make sure to define these once globally!
};
function MyComponent() {
  // etc
  return (
    &amp;ltTwitter optionsProps={TWITTER_OPTIONS} /&gt;
  );
}</pre>
</td>
  </tr>
   <tr>
    <td width="40%"><strong>title（オプション）</strong></td>
    <td>コンポーネント iframe の <code>title</code> 属性を定義します。デフォルトは <code>Twitter</code> です。</td>
  </tr>
</table>
