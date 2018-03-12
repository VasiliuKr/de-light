$(document).ready(function() {
	$('.slider-main').slick({
		dots: true,
		autoplay: false,
		autoplaySpeed: 3000,
		adaptiveHeight: true,
		asNavFor: '.slider-text'
	});
	$('.slider-text').slick({
		asNavFor: '.slider-main'
	});
});