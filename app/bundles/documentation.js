import DocumentationSidebar from '../components/DocumentationSidebar';
import Example from '../components/Example';
import ShowMore from '../components/ShowMore';

window.addEventListener('load', () => {
  new DocumentationSidebar(
    document.getElementById('bd-components'),
    document.getElementById('bd-button-components')
  );
  new DocumentationSidebar(
    document.getElementById('bd-toc'),
    document.getElementById('bd-button-toc')
  );

  for (const example of document.querySelectorAll('.bd-example')) {
    new Example(example);
  }
  for (const componentImport of document.querySelectorAll('.bd-show-more')) {
    new ShowMore(componentImport);
  }
});
