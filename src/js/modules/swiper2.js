import Swiper2 from 'swiper/bundle';
// import styles bundle
import 'swiper/css/bundle';

let swiper = new Swiper2(".mySwiper", {
  slidesPerView: 6,
  loop: true,
  speed: 3000,
  autoplay: true,
  breakpoints: {
    850: {
      slidesPerView: 2,
    },
    1201: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
  }
});
export default Swiper2;