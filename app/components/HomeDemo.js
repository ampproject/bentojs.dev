class HomeDemo {
  constructor($selector, $code, $previewEl) {
    this.$selector = $selector;
    this.$code = Array.from($code);
    this.$previewEl = $previewEl;

    this.$selector.addEventListener('select', this.toggleDemo.bind(this));
  }

  toggleDemo(e) {
    e.preventDefault();
    const previewId = e.data.targetOption;
    const button = this.$selector.querySelector(
      `button[option='${previewId}']`
    );
    this.selectButton(button);
    this.changePreview(previewId);
  }

  selectButton(button) {
    const invertedClass = '--inverted';
    const buttons = Array.from(this.$selector.querySelectorAll('button'));
    buttons.map((btn) => {
      btn.classList.add(invertedClass);
    });
    button.classList.remove(invertedClass);
  }

  changePreview(previewId) {
    const hideClass = '--hide';
    const iframeSrc = `assets/iframes/homepage-examples/${previewId}.html`;
    this.$previewEl.setAttribute('src', iframeSrc);

    this.$code.map((code) => {
      code.classList.add(hideClass);
    });
    const currentCode = document.getElementById(previewId);
    currentCode.classList.remove(hideClass);
  }
}

export default HomeDemo;
