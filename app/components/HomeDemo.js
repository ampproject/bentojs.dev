class HomeDemo {
  constructor(buttonSelector, sourceSelector, previewEl) {
    this.buttonSelector = buttonSelector;
    this.sourceSelector = sourceSelector;
    this.preview = previewEl;
    this.init();
  }

  async init() {
    await customElements.whenDefined('bento-selector');
    this.buttonSelector.addEventListener('select', this.toggleDemo.bind(this));
  }

  async toggleDemo(event) {
    const previewId = event.data.targetOption;

    (await this.sourceSelector.getApi()).toggle(previewId, true);
    this.preview.setAttribute(
      'src',
      `assets/iframes/homepage-examples/${previewId}.html`
    );
  }
}

export default HomeDemo;
