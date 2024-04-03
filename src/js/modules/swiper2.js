//     var swiper = new Swiper2(".mySwiper", {
//       loop: true,
//       slidesPerView: 5,
// 	    slidesPerView: 'auto',
// 	    spaceBetween: 12,
//       centeredSlides: false,

//        autoplay: {
//         delay: 2500,
//         disableOnInteraction: false,
//         pauseOnMouseEnter: false,
//         reverseDirection:	false,
//         stopOnLastSlide:	false,
//         waitForTransition:	true
//       },
// });

let swiper = new Swiper2(".mySwiper", {
  slidesPerView: 1,
  loop: true,
  speed: 1000,
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