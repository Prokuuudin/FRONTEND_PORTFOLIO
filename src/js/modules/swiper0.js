import Swiper0 from 'swiper/bundle';
// import styles bundle
import 'swiper/css/bundle';

let swiper = new Swiper0(".mySwiper", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "auto",
  coverflowEffect: {
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
  },
  pagination: {
    el: ".swiper-pagination",
  },
});
export default Swiper0;
