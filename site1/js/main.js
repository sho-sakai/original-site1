'use strict';

// header_top
$(window).on('scroll', function () {
  if ( $(this).scrollTop() < 1 ) {
    $('.header_top').removeClass('scrolled');
  } else {
    $('.header_top').addClass('scrolled');
  }
});

// スムーズスクロール
$(function(){
  $('a[href^="#"]').click(function(){
    $('.page_nav').removeClass('active');
    $('.menu-trigger').removeClass('active');
    let speed = 500;
    let href= $(this).attr("href");
    let target = $(href == "#" || href == "" ? 'html' : href);
    let position = target.offset().top - 100;
    $("html, body").animate({scrollTop:position}, speed, "swing");
    return false;
  });
});

$(function(){
  $('.single-item').slick({
    accessibility: true,
    autoplay: false,
    autoplaySpeed: 1000,
    dots: true,
    fade: true,
    prevArrow: '<div class="slick-prev prev-arrow"><img src="img/arrow_left.png" width="15"></div>',
    nextArrow: '<div class="slick-next next-arrow"><img src="img/arrow_right.png" width="15"></div>'
  });
});

// ハンバーガーメニュー
$('.menu-trigger').on('click', function () {
  $('.menu-trigger').toggleClass('active');
  $('.page_nav').toggleClass('active');
});
