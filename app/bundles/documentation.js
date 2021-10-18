import DocumentationSidebar from "../components/DocumentationSidebar";

window.addEventListener('load', () => {
  new DocumentationSidebar(
    document.getElementById('bd-components'),
    document.getElementById('bd-button-components'));
  new DocumentationSidebar(
    document.getElementById('bd-toc'),
    document.getElementById('bd-button-toc'));
});