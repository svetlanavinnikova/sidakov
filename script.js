$(document).ready(function(){
    $('.testimonials').slick({
      autoplay: true,
      arrows: false,
      dots: true,
      adaptiveHeight: true
    });
});

var swiper = new Swiper('.courses', {
    loop: true,
    autoplay: 6000,
    pagination: '.swiper-pagination',
    paginationType: 'fraction',
    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
});


const header = document.querySelector('.header');
const modal = document.querySelector('.modal');
const formBtn = document.querySelector('.form__btn')

const headerHeight = header.offSetHeight;

let lastScrollTop = 0;



window.addEventListener('scroll', () => {
  let scrollDistance = window.scrollY;

  if (scrollDistance > lastScrollTop) {
    header.classList.remove('header--fixed');
  } else {
    header.classList.add('header--fixed');
  }
  lastScrollTop = scrollDistance;

});

let menuBtn = document.querySelector('.header__menu');
let menu = document.querySelector('.menu');
let close = document.querySelector('.menu-close');
let body = document.querySelector('body');
let navItems = document.querySelectorAll('.menu__item');
let bodyWrapper = document.querySelector('.body-wrapper')
menuBtn.addEventListener('click', function(){
  menu.classList.remove('hidden');
	menu.classList.add('active');
  header.classList.add('hidden');
  body.classList.add('noScroll')
  bodyWrapper.classList.add('hidden');
  close.addEventListener('click', function(){
    bodyWrapper.classList.remove('hidden');
	  menu.classList.remove('active');
    header.classList.remove('hidden');
    body.classList.remove('noScroll')
  })
  navItems.forEach((item) => {
    item.addEventListener('click', () => {
      bodyWrapper.classList.remove('hidden');
      menu.classList.remove('active');
      header.classList.remove('hidden');
      body.classList.remove('noScroll')
    })
  })
})