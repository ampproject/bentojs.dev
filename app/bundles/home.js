import HomeDemo from '../components/HomeDemo';

window.addEventListener('load', () => {
  new HomeDemo(
    document.getElementById('bd-demo-selector'),
    document.getElementById('bd-demo-source-selector'),
    document.getElementById('bd-demo-iframe')
  );
});
