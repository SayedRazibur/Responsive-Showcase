const mnt = document.querySelector('.mobile-nav-toggle');
const nav = document.querySelector('.primary-nav');
const iconnav = document.querySelector('.icon-close');
const iconb = document.querySelector('.icon-hamburger');
const gr = document.querySelector('.gr');

mnt.addEventListener('click', () => {
    nav.classList.toggle('opened');
    iconnav.classList.toggle('blocking');
    iconb.classList.toggle('none');
    gr.classList.toggle('gg');
});

// swiper
var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 30,
    autoplay:{
        delay:2500
    },
    
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
        640: {
          slidesPerView: 2,
          spaceBetween: 0,
        },
        750: {
          slidesPerView: 3,
          spaceBetween: 40,
        },
        1500: {
          slidesPerView: 4,
          spaceBetween: 50,}
        }
  });