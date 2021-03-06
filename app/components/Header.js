class Header {
  constructor($header) {
    this.$header = $header;
    this.$button = $header.querySelector('.bd-header-burger');

    this.$button.addEventListener('click', this.toggle.bind(this));
  }

  toggle(e, force) {
    e.preventDefault();
    this.$header.classList.toggle('--mainmenuopen', force);
    document.documentElement.classList.toggle('--main-overflow', force);
  }
}

export default Header;
