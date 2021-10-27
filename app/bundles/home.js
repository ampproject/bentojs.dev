import HomeDemo from '../components/HomeDemo';

(() => {
  new HomeDemo(
    document.getElementById('bd-button-carousel'),
    document.querySelectorAll('.bd-demo-carousel')
  );
  new HomeDemo(
    document.getElementById('bd-button-accordion'),
    document.querySelectorAll('.bd-demo-accordion')
  );
  new HomeDemo(
    document.getElementById('bd-button-sidebar'),
    document.querySelectorAll('.bd-demo-sidebar')
  );
  new HomeDemo(
    document.getElementById('bd-button-social-share'),
    document.querySelectorAll('.bd-demo-social-share')
  );
})();
