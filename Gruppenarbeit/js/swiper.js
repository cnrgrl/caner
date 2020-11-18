/**
 * SLIDER WITH SWIPERJS
 * 1. Read the get started guide at https://swiperjs.com/get-started/
 * 2. Initialize the swiper element with the class ".swiper-container" with pagination as type fraction
 
 https://swiperjs.com/api/
 https://swiperjs.com/demos/
 
 */

//1. link zum index importiert.

document.addEventListener('DOMContentLoaded', init);
console.log('DOM ready');

//2. swiper initializiert
function init() {
  // console.log('DOM ready');
  document.querySelector(".swiper-button-next").style.color="#718096";
  document.querySelector(".swiper-button-prev").style.color="#718096";
  
  
  
  var mySwiper = new Swiper('.swiper-container', {
    speed: 400,
    spaceBetween: 100,
    loop: true,
    pagination: {
      el: '.swiper-pagination',
    },
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }
  });
  
  mySwiper.slideNext();
}











//document.querySelector(".swiper-pagination-bullet-active").style.color="#718096";
/**
 
document.addEventListener('DOMContentLoaded', function() {
  console.log('DOM ready');
});


var mySwiper = new Swiper('.swiper-container', {
  speed: 400,
  spaceBetween: 100
});


var mySwiper = document.querySelector('.swiper-container').swiper

// Now you can use all slider methods like
mySwiper.slideNext(400,true);
//mySwiper.slidePrev(400,true);*/