import Swiper2 from 'swiper/bundle';
import 'swiper/css/bundle';

function getSwiper2() {
    new Swiper2(".mySwiper2", {
    slidesPerView: 6,
    spaceBetween: 40,
    loop: true,
    speed: 3000,
    
    autoplay: {
      delay: 0,
      disableOnInteraction: false,
      reverseDirection:	true,
    },
    
    // breakpoints: {
      //   850: {
        //     slidesPerView: 2,
        // },
        //   1201: {
          //     slidesPerView: 3,
          //     spaceBetween: 40,
          //   },
          // }
    });
}
export default getSwiper2;