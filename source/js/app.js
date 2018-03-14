$(document).ready(function() {
	$('.slider-main').slick({
		dots: true,
		arrows: false,
		autoplay: false,
		autoplaySpeed: 3000,
		adaptiveHeight: true,
		asNavFor: '.slider-text'
	});
	$('.slider-text').slick({
		asNavFor: '.slider-main',
		arrows: false
	});
	$('.top-products__list').slick({
		slidesToShow: 2
	});
	$('.slider-collections').slick({

	});
	$('.social-gallery__slider').slick({
		slidesToShow: 3,
		variableWidth: true,
		slidesToScroll: 2
	});
});

$(document).on('click', '.js-menu-link', function(event) {
	event.preventDefault();
	/* Act on the event */
	$(this).toggleClass('active');
	$('.header-nav-wrap').toggle();
});