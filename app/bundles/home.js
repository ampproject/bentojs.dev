import HomeDemo from '../components/HomeDemo';

window.addEventListener('load', () => {
  new HomeDemo(
    document.querySelectorAll('.--demo-trigger'),
    document.querySelectorAll('.bd-demo-code-sample'),
    document.getElementById('bd-demo-iframe')
  );
});
