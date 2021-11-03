import HomeDemo from '../components/HomeDemo';

window.addEventListener('load', () => {
  new HomeDemo(
    document.getElementById('bd-demo-selector'),
    document.querySelectorAll('.bd-demo-code-sample'),
    document.getElementById('bd-demo-iframe')
  );
});
