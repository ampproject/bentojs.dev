const iframe = (src, title) => {
  return `
<div class="bd-iframe-container">
  <iframe src="${src}" title="${title}" loading="lazy"></iframe>
</div>
  `;
};

module.exports = iframe;
