class CopyToClipboard {
  constructor(element, textToCopy) {
    this.element = element;
    this.textToCopy = textToCopy;

    this.animationDuration = 1000;
    window.requestAnimationFrame(() => {
      const button = document.createElement('button');
      button.classList.add('bd-copy');
      button.ariaLabel = 'Copy code';
      button.innerHTML = `<svg class="bd-copy-icon-default" xmlns="http://www.w3.org/2000/svg" height="24px" width="24px" fill="#ffffff"><path d="M0 0h24v24H0z" fill="none"/><path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z"/></svg>
       <svg class="bd-copy-icon-success"  xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="#FFFFFF"><path d="M0 0h24v24H0V0z" fill="none"/><path d="M9 16.2L4.8 12l-1.4 1.4L9 19 21 7l-1.4-1.4L9 16.2z"/></svg>`;
      this.element.appendChild(button);
      button.addEventListener('click', this.onClick.bind(this));
    });
  }

  async onClick() {
    const textToCopy =
      this.textToCopy || this.element.querySelector('code').innerText;
    await navigator.clipboard.writeText(textToCopy);
    this.element.classList.add('--success');
    setTimeout(() => {
      this.element.classList.remove('--success');
    }, this.animationDuration);
  }
}

export default CopyToClipboard;
