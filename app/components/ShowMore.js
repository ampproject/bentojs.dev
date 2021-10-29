class ShowMore {
  constructor(root) {
    this.moreContent = root.querySelector('section.--more');
    this.showMoreButton = root.querySelector('button.--show-more');
    this.showMoreButton.addEventListener('click', this.showMore.bind(this));
  }

  showMore(e) {
    e.preventDefault();
    this.moreContent.classList.add('--active');
    this.moreContent.classList.remove('--hidden');
    this.showMoreButton.classList.add('--hidden');
  }
}

export default ShowMore;
