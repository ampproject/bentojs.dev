class DocumentationSidebar {
  constructor($sidebar, $button) {
    this.$sidebar = $sidebar;

    this.$button = $button;
    this.$closeButton = this.$sidebar.querySelector('.bd-modal__close');

    this.$button.addEventListener('click', this.toggle.bind(this));
    this.$closeButton.addEventListener('click', (e) => {
      this.toggle(e, false);
    });
  }

  toggle(e, force) {
    e.preventDefault();
    this.$sidebar.classList.toggle('--open-modal', force);
  }
}

export default DocumentationSidebar;