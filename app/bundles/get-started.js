import CopyToClipboard from '../components/CopyToClipboard';

window.addEventListener('load', () => {
  for (codeSnippet of document.querySelectorAll('pre')) {
    new CopyToClipboard(codeSnippet);
  }
});
