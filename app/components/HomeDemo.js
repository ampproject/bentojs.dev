class HomeDemo {
  constructor($buttons, $code, $previewEl) {
    this.$buttons = Array.from($buttons);
    this.$code = Array.from($code);
    this.$previewEl = $previewEl;

    this.$buttons.map((btn) => {
      btn.addEventListener('click', this.toggleDemo.bind(this));
    });
  }

  toggleDemo(e) {
    e.preventDefault();
    const button = e.target;
    const previewId = button.getAttribute('aria-controls');
    this.selectButton(button);
    this.changePreview(previewId);
  }

  selectButton(button) {
    const invertedClass = '--inverted';
    this.$buttons.map((btn) => {
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
