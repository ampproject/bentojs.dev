class Example {
  constructor($example) {
    this.$example = $example;
    this.$button = {
      code: $example.querySelector('button.--code'),
      preview: $example.querySelector('button.--preview'),
    }

    this.$code = $example.querySelector('.bd-example-code');
    this.$preview = $example.querySelector('.bd-example-preview');

    this.$button.code.addEventListener('click', (e) => {
      this.toggle(e, false);
    })
    this.$button.preview.addEventListener('click', (e) => {
      this.toggle(e, true);
    })
  }

  toggle(e, force) {
    e.preventDefault();
    this.$button.code.classList.toggle('--active', !force);
    this.$button.preview.classList.toggle('--active', force);

    this.$code.classList.toggle('--hidden', force);
    this.$preview.classList.toggle('--hidden', !force);
  }
}

export default Example;