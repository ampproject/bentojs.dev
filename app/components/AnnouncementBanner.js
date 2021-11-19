/*
 * Based on https://github.com/zachleat/herald-of-the-dog/blob/main/herald.js with modifications
 */
class Banner extends HTMLElement {
  connectedCallback() {
    // No matter when this runs, the close button will not be visible
    // until after this class is added—prevents ghost clicks on the button
    // before the event listener is added.
    this.classList.add('banner--show-close');

    this.addEventListener('click', (e) => {
      if (e.target.closest('[data-banner-close]')) {
        this.savePreference();
        this.close();
      }
    });
  }

  getButton() {
    return this.querySelector('[data-banner-close]');
  }

  savePreference() {
    let storageKey = this.getAttribute('data-banner-key');
    if (!storageKey) {
      const cta = this.querySelector('a[href]');
      if (cta) {
        storageKey = cta.getAttribute('href');
      }
    }

    if (storageKey) {
      localStorage.setItem('banner--cta-url', storageKey);
    }
  }

  close() {
    this.setAttribute('hidden', true);
  }
}

window.customElements.define('announcement-banner', Banner);
