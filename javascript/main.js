//"use strict"

  $('.slider').slick({
	  dots:true,
  });

$('.slider2').slick({
  });

$('.seven-block__content__slider').slick({
	dots:true,
	arrows: false,
  });

$(".accordeon dd").hide().prev().click(function() {
	$(this).parents(".accordeon").find("dd").not(this).slideUp().prev().removeClass("active");
	$(this).next().not(":visible").slideDown().prev().addClass("active");
});