import Header from '../components/Header';
import '../components/AnnouncementBanner';

window.addEventListener('load', () => {
  new Header(document.querySelector('.bd-header'));
});
