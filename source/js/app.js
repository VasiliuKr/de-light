
$(document).ready(function() {
	$('body').restive({
		breakpoints: ['769', '10000'],
		classes: ['mobile', 'desktop']
	});
});

/*************** Page rebuilding (start) ****************/
$(document).ready(function() {
	if($('body').hasClass('desktop')) {
		$('h1.main-heading').prependTo('.features .container');
		$('.top-products-wrap').find('.section-title').prependTo('.top-products-wrap');
		$('.social-galleries-wrap').find('.section-title').prependTo('.social-galleries-wrap');
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
				breakpoint: 481,
				settings: {
					slidesToShow: 3
				}
			},
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
		mobileFirst: true,
		slidesToScroll: 2,
		responsive: [
			{
				breakpoint: 769,
				settings: {
					slidesToShow: 6,
				}
			}
		]
	});
});
/**************** Slick sliders (end) *****************/

/*************** Mobile menu (start) ****************/
$(document).on('click', '.js-menu-link', function(event) {
	event.preventDefault();
	$(this).toggleClass('active');
	$('.header-nav-wrap').toggle();
});

$(document).on('click', '.js-nav-link', function(event) {
	event.preventDefault();
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
			break;
	}
	
});
/**************** Mobile menu (end) *****************/

/**************** Desktop menu (start) *****************/
function setEqualHeight(columns) {
	var tallestcolumn = 0;
	columns.each(
		function() {
			currentHeight = $(this).height();
			if(currentHeight > tallestcolumn) {
				tallestcolumn = currentHeight;
			}
		}
	);
	columns.height(tallestcolumn);
}
$(document).on('mouseenter', 'body.desktop .js-nav-link', function(event) {
	event.preventDefault();
	var $this = $(this),
			menuButton = $this.attr('href'),
			menuWrap = $('.header-nav-wrap'),
			menuList = menuWrap.find('.header-nav'),
			menuLight = menuWrap.find('.header-nav_light'),
			menuFurniture = menuWrap.find('.header-nav_furniture'),
			menuDecor = menuWrap.find('.header-nav_decor'),
			menuBrands = menuWrap.find('.header-nav_brands');
	
	switch(menuButton) {
		case "light":
			menuList.removeClass('active');
			menuLight.addClass('active');
			break;
		case "furniture":
			menuList.removeClass('active');
			menuFurniture.addClass('active');
			break;
		case "decor":
			menuList.removeClass('active');
			menuDecor.addClass('active');
			break;
		case "brands":
			menuList.removeClass('active');

			menuBrands.addClass('active').jScrollPane({
				showArrows: true,
				verticalDragMaxHeight: 140
			});
			setEqualHeight($(".header-nav_brands .header-nav-column"));
			break;
	}
});

/*$(document).on('mouseleave', 'body.desktop .js-nav-link', function(event) {
	event.preventDefault();
	var $this = $(this),
			menuButton = $this.attr('href'),
			menuWrap = $('.header-nav-wrap'),
			menuList = menuWrap.find('.header-nav'),
			menuLight = menuWrap.find('.header-nav_light'),
			menuFurniture = menuWrap.find('.header-nav_furniture'),
			menuDecor = menuWrap.find('.header-nav_decor'),
			menuBrands = menuWrap.find('.header-nav_brands');
	
	switch(menuButton) {
		case "light":
			menuLight.removeClass('active');
			break;
		case "furniture":
			menuFurniture.removeClass('active');
			break;
		case "decor":
			menuDecor.removeClass('active');
			break;
		case "brands":
			menuBrands.removeClass('active');
			break;
	}
});
/**************** Desktop menu (end) *****************/

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

/*************** Tabs (start) ****************/

$(document).on('click', '.js-tab-btn', function(event) {
	if ($('body').hasClass('desktop')) {
		event.preventDefault();
		var tabButton = $(this),
				tabContainer = tabButton.parent('.tabs-wrap'),
				tabBtns = tabButton.siblings('.section-title'),
				tabContent = tabContainer.find('.tab-content');
		tabContent.removeClass('active');
		tabContent.eq(tabButton.index()).addClass('active');
		
		tabBtns.removeClass('active');
		tabButton.addClass('active');
		// if (tabContainer.hasClass('social-galleries-wrap')) {
		// 	$('#eicholtz-tab').slick('getSlick');
		// }
	}
});
/*************** Tabs (end) ****************/

/*************** Header search (start) ****************/
$(document).on('click', '.js-search-modal', function(event) {
	event.preventDefault();
	var searchContainer = $('.search.search_top'),
			searchInput = searchContainer.find('.search-field');
	searchContainer.toggleClass('active');
	searchInput.focus();
});
/*************** Header search (end) ****************/
