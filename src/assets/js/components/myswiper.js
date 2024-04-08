'use strict';

import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const vacancytop = new Swiper('.s-vacancytop', {
  modules: [Navigation, Pagination],
  loop: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  breakpoints: {
    550: {
      slidesPerView: 1,
    },
    800: {
      slidesPerView: 2,
    },
    1100: {
      slidesPerView: 3,
    },
    1400: {
      slidesPerView: 4,
    }
  },
  pagination: {
    el: ".vacancy-pagination",
    type: "fraction",
  },
  navigation: {
    nextEl: '.button-nav-next',
    prevEl: '.button-nav-prev'
  },
});

