class HomeDemo {
  constructor($button, $demo) {
    this.$button = $button;
    this.$currentDemo = $demo;

    this.$sections = [
      '.bd-demo-carousel',
      '.bd-demo-accordion',
      '.bd-demo-sidebar',
      '.bd-demo-social-share',
    ];

    this.$button.addEventListener('click', this.toggleDemo.bind(this));
    this.$buttons = document.querySelectorAll('.bd-demo-button-group button');
  }

  toggleDemo(e) {
    e.preventDefault();
    this.selectButton();
    this.changePreview();
  }

  selectButton() {
    const invertedClass = '--inverted';
    Array.from(this.$buttons).map((el) => {
      el.classList.add(invertedClass);
    });
    this.$button.classList.remove(invertedClass);
  }

  changePreview() {
    const hideClass = '--hide';

    this.$sections.map((sec) => {
      const codePreview = document.querySelectorAll(sec);

      Array.from(codePreview).map((el) => {
        el.classList.add(hideClass);
      });
    });

    Array.from(this.$currentDemo).map((el) => {
      el.classList.remove(hideClass);
    });
  }
}

export default HomeDemo;
