var swiper = new Swiper(".slide-characters", {
    slidesPerView: 3.5,
    spaceBetween: 19,
    freeMode: true, 
    breakpoints: {

      1440: {
        slidesPerView: 3.3,
        spaceBetween: 19
      },
    
      950: {
        slidesPerView: 2.8,
        spaceBetween: 19
      },

      768: {
        slidesPerView: 1.9,
        spaceBetween: 19
      },

      320: {
        slidesPerView: 1.1,
        spaceBetween: 10,
    }
  }
});


var swiper_features = new Swiper(".features", {
  slidesPerView: 4.5,
  spaceBetween: 10,
  freeMode: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {

    1200: {
      slidesPerView: 4,
      spaceBetween: 10,
    },

    600: {
      slidesPerView: 2.5,
      spaceBetween: 10,
      
    },

    0: {
      slidesPerView: 1,
      spaceBetween: 30,
    }
  },

});



AOS.init({
  duration: 1000,
  once: true,
});
