$(document).ready(function(){
  $('.menu-toggle').on('click', function(){
    $(this).toggleClass('open');
    $('.top-nav').toggleClass('open');
  });

  $('.top-nav .nav-list-element').on('click', function(){
    $('.menu-toggle').removeClass('open');
    $('.top-nav').removeClass('open');
  });
});