import '../components/AnnouncementBanner';
import CopyToClipboard from '../components/CopyToClipboard';
import Header from '../components/Header';

window.addEventListener('load', () => {
  new Header(document.querySelector('.bd-header'));

  for (codeSnippet of document.querySelectorAll('.bd-copy-pasteable > pre')) {
    new CopyToClipboard(codeSnippet);
  }
});
