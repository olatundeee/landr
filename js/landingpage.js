$('.carousel.carousel-slider').carousel({
  fullWidth: true,
  indicators: true
});

var newNavClass = "menu-scrolled"
$('.main-body-content').scroll(function() {
  $('.menu').addClass(newNavClass);
});