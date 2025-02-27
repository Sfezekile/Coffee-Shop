!function(e, t, a, n) {
    e[n] = e[n] || [],
    e[n].push({
        "gtm.start": (new Date).getTime(),
        event: "gtm.js"
    });
    var m = t.getElementsByTagName(a)[0]
      , r = t.createElement(a);
    r.async = !0,
    r.src = "https://www.googletagmanager.com/gtm.js?id=GTM-M2W8JBX",
    m.parentNode.insertBefore(r, m)
}(window, document, "script", "dataLayer")

// Initialize Swiper
var swiper = new Swiper('.swiper', {
  slidesPerView: 1,
  spaceBetween: 10,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 40,
    },
  },
});

// Add a barrier to prevent swiping too far
swiper.on('reachEnd', function () {
  swiper.slideTo(swiper.slides.length - swiper.params.slidesPerView);
});

swiper.on('reachBeginning', function () {
  swiper.slideTo(0);
});