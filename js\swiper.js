const swiper = new Swiper('.swiper', {
  
  loop: true,
  // slidesPerView: 3,
  // spaceBetween: 30,
  
  breakpoints: {
    400: {
      slidesPerView: 1,
      spaceBetween: 15,
    },
    800: {
      slidesPerView: 3,
      spaceBetween: 25,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 50,
    },
  },

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    dynamicBullets: true,
    clickable: true,
  },


  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

});