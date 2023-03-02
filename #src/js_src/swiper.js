const swiper = new Swiper('.swiper', {
  
  loop: true,
  // slidesPerView: 3,
  // spaceBetween: 30,
  
  breakpoints: {
    400: {
      slidesPerView: 1,
      spaceBetween: 5,
    },
    844: {
      slidesPerView: 3,
      spaceBetween: 10,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 40,
    },
  },

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

});