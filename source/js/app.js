
$(document).ready(function() {
	$('body').restive({
		breakpoints: ['769', '10000'],
		classes: ['mobile', 'desktop']
	});
});

/*************** Page rebuilding (start) ****************/
$(document).ready(function() {
	if($('body').hasClass('desktop')) {
		$('.top-products-wrap').find('.section-title').prependTo('.top-products-wrap');
	}
});
/*************** Page rebuilding (end) ****************/

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
		slidesToShow: 2,
		mobileFirst: true,
		responsive: [
			{
				breakpoint: 769,
				settings: 'unslick'
			}
		]
	});
	$('.slider-collections').slick({
		mobileFirst: true,
		responsive: [
			{
				breakpoint: 769,
				settings: {
					centerMode: true,
					slidesToShow: 1,
					centerPadding: '250px'
				}
			}
		]
		
		
	});
	$('.social-gallery__slider').slick({
		slidesToShow: 3,
		variableWidth: true,
		slidesToScroll: 2
	});
});
/**************** Slick sliders (end) *****************/

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
/**************** Mobile menu (end) *****************/

/*************** User authorization (start) ****************/
$(document).on('click', '.js-user-auth', function(event) {
	if (!$(this).hasClass('authorized')) {
		event.preventDefault();
		$(this).parent('.user-top').siblings('.authorization').toggleClass('active');
	}
});
/**************** User authorization (end) *****************/

/*************** Sticky desktop menu (start) ****************/
$(document).ready(function() {
	if(document.body.offsetWidth > 768) {
		$('.header-nav.header-nav_main').sticky({
			topSpacing: 0
		});
		$('.header-nav.header-nav_main').on('sticky-start', function() {
			$('header.header').toggleClass('sticky_added');
		});
		$('.header-nav.header-nav_main').on('sticky-end', function() {
			$('header.header').toggleClass('sticky_added');
		});
	}
});	
/**************** Sticky desktop menu (end) *****************/

/*************** Products tabs (start) ****************/

$(document).on('click', '.js-products-tab', function(event) {
	if ($('body').hasClass('desktop')) {
		event.preventDefault();
		var tabButton = $(this),
				tabContainer = tabButton.parent('.top-products-wrap'),
				tabBtns = tabButton.siblings('.section-title'),
				tabContent = tabContainer.find('.top-products');
		tabContent.removeClass('active');
		tabContent.eq(tabButton.index()).addClass('active');
		
		tabBtns.removeClass('active');
		tabButton.addClass('active');
	}
});
/*************** Products tabs (end) ****************/