// Фиксируем шапку при 50% header
$(document).scroll(function() {
  if($(document).width() < 1024)
    return false;

  if($(document).scrollTop() > $('.full-page').height() / 2)
    $("header").addClass("fixed");
  else
    $("header").removeClass("fixed");

});

$(".up-btn").on("click", function() {
	$("html, body").animate({
		scrollTop: 0
	}, 500);
});

// Открыть меню
$("#show-menu").on("click", function() {
  $("#hidden-menu").animate({
    "right": 0,
  }, 500);
})

// Закрыть меню

$("#hidden-menu .close").on("click", function() {
  $("#hidden-menu").animate({
    "right": -300,
  }, 200);
})

//slide
$(document).ready(function() {
  $('#slider').slick({
    dots: false,
    prevArrow: '<div class="arrow-prev"><i class="fas fa-arrow-left"></div>',
    nextArrow: '<div class="arrow-next"><i class="fas fa-arrow-right"></div>',
    inifinite: true,
    slidesToShow: 3,
    slidesToScroll: 2
  })
  });
