
/*************** Slick sliders (start) ****************/
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
/*************** Slick sliders (end) ****************/

/*************** Mobile menu (start) ****************/
$(document).on('click', '.js-menu-link', function(event) {
	event.preventDefault();
	/* Act on the event */
	$(this).toggleClass('active');
	$('.header-nav-wrap').toggle();
});

$(document).on('click', '.js-nav-link', function(event) {
	event.preventDefault();
	/* Act on the event */
	var $this = $(this),
			menuButton = $this.attr('href'),
			menuMain = $('.header-nav_main'),
			menuLight = menuMain.siblings('.header-nav_light'),
			menuFurniture = menuMain.siblings('.header-nav_furniture'),
			menuDecor = menuMain.siblings('.header-nav_decor'),
			menuBrands = menuMain.siblings('.header-nav_brands'),
			btnBack = menuMain.siblings('.header-nav-menu').find('.nav-back-link');

	switch(menuButton) {
		case "light":
			menuMain.toggleClass('active');
			menuLight.toggleClass('active');
			btnBack.toggleClass('active');
			break;
		case "furniture":
			menuMain.toggleClass('active');
			menuFurniture.toggleClass('active');
			btnBack.toggleClass('active');
			break;
		case "decor":
			menuMain.toggleClass('active');
			menuDecor.toggleClass('active');
			btnBack.toggleClass('active');
			break;
		case "brands":
			menuMain.toggleClass('active');
			menuBrands.toggleClass('active');
			btnBack.toggleClass('active');
			break;
		case "back":
			menuMain.parent('.header-nav-wrap').find('.header-nav.active').toggleClass('active');
			menuMain.toggleClass('active');
			btnBack.toggleClass('active');
	}
	
});
/*************** Mobile menu (end) ****************/