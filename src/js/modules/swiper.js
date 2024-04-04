import Swiper from 'swiper/bundle';
// import styles bundle
import 'swiper/css/bundle';

const swiper = new Swiper('.swiper', {
	// Optional parameters
	direction: 'horizontal',
	loop: true,

	slidesPerView: 5,
	slidesPerView: 'auto',
	spaceBetween: 12,
  
	// If we need pagination
	pagination: {
	  el: '.swiper-pagination',
	},
  
	// Navigation arrows
	navigation: {
	  nextEl: '.swiper-button-next',
	  prevEl: '.swiper-button-prev',
	},
  
	// And if we need scrollbar
	scrollbar: {
	  el: '.swiper-scrollbar',
	},
  });

export default swiper;
