/* ----------------------------------------------------------------------------------------
* Author        : DevsCart
* Template Name : KODIV | Covid-19 Medical Awareness Template
* File          : Main JS File
* Version       : 1.0
* ----------------------------------------------------------------------------------------*/



$(function () {
  "use strict";


    // Fixed Navbar
    $(document).ready(function(){
      var $navOffset;
      var $scrolling;
      $navOffset=$('#main-menu').offset().top;
      $navOffset=100;

          $(window).scroll(function(){
              $scrolling=$(this).scrollTop();
              
              if($scrolling > $navOffset){
                  $("#main-menu").addClass('navfixed');
              } else{
                  $("#main-menu").removeClass('navfixed');
              }
          });
    });
    // Fixed Navbar


    // Virus Box Rotate
    $(window).on('scroll', function(){
      var theta = $(window).scrollTop() / 300 % Math.PI;
      $('.virus-box').css({ transform: 'rotate(' + theta + 'rad)' });
    });
    // Virus Box Rotate


    //  Scroll to top
    $(document).scroll(function(e){
    var scrollPos = $(this).scrollTop();
    if (scrollPos<500) {
      $('.scroll-top').addClass('hide');
    } else{
      $('.scroll-top').removeClass('hide');
    }
    });
    //  Scroll to top


    // Preloader
    window.addEventListener('load', () => {

      const preload = document.querySelector('#loader');
      preload.classList.add('load-finish');

    });
    // Preloader

    // Wow
    new WOW().init();
    // Wow


    // Slick Slider

    $(document).ready(function() {
      $('.banner-slider').on('init', function(e, slick) {
          var $firstAnimatingElements = $('.banner-content:first-child').find('[data-animation]');
          doAnimations($firstAnimatingElements);    
      });
      $('.banner-slider').on('beforeChange', function(e, slick, currentSlide, nextSlide) {
                var $animatingElements = $('.banner-content[data-slick-index="' + nextSlide + '"]').find('[data-animation]');
                doAnimations($animatingElements);    
      });
      $('.banner-slider').slick({
         autoplay: true,
         autoplaySpeed: 3000,
         dots: false,
         arrows: false,
         fade: true
      });
      function doAnimations(elements) {
          var animationEndEvents = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';
          elements.each(function() {
              var $this = $(this);
              var $animationDelay = $this.data('delay');
              var $animationType = 'animated ' + $this.data('animation');
              $this.css({
                  'animation-delay': $animationDelay,
                  '-webkit-animation-delay': $animationDelay
              });
              $this.addClass($animationType).one(animationEndEvents, function() {
                  $this.removeClass($animationType);
              });
          });
        }
    });


    // Counter Up
    $(document).ready(function(){
      
      $('.counter').counterUp({
        delay: 10,
        time: 1000
      });

    });

});