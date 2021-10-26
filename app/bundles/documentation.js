import DocumentationSidebar from '../components/DocumentationSidebar';
import Example from '../components/Example';

window.addEventListener('load', () => {
  new DocumentationSidebar(
    document.getElementById('bd-components'),
    document.getElementById('bd-button-components')
  );
  new DocumentationSidebar(
    document.getElementById('bd-toc'),
    document.getElementById('bd-button-toc')
  );

  for ($example of document.querySelectorAll('.bd-example')) {
    new Example($example);
  }
});
