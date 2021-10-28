class DocumentationSidebar {
  constructor($sidebar, $button) {
    this.$sidebar = $sidebar;
    this.$button = $button;

    this.init();
  }

  async init() {
    await customElements.whenDefined('bento-sidebar');
    const api = await this.$sidebar.getApi();

    this.$button.addEventListener('click', () => {
      api.toggle();
    });
  }
}

export default DocumentationSidebar;
