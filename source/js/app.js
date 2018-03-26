
// $(document).ready(function() {
// 	$('body').restive({
// 		breakpoints: ['768', '10000'],
// 		classes: ['mobile', 'desktop']
// 	});
// });

$(document).ready(function() {
	$('body').restive({
		breakpoints: ['768', '10000'],
		classes: ['mobile', 'desktop'],
		turbo_classes: 'is_mobile=r_mobi,is_phone=r_phone,is_tablet=r_tablet,is_landscape=r_landscape',
		force_dip: true
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
				breakpoint: 480,
				settings: {
					slidesToShow: 3
				}
			},
			{
				breakpoint: 768,
				settings: 'unslick'
			}
		]
	});
	$('.slider-collections').slick({
		mobileFirst: true,
		responsive: [
			{
				breakpoint: 768,
				settings: {
					centerMode: true,
					slidesToShow: 1,
					centerPadding: '250px'
				}
			}
		]
	});
	$('#soc-gal-delight').slick({
		slidesToShow: 3,
		mobileFirst: true,
		slidesToScroll: 2,
		responsive: [
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 6,
				}
			}
		]
	});
	$('#eicholtz-tab').slick({
		slidesToShow: 3,
		mobileFirst: true,
		slidesToScroll: 2,
		responsive: [
			{
				breakpoint: 768,
				settings: 'unslick'
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

$(document).on('click', 'body.mobile .js-nav-link', function(event) {
	event.preventDefault();
	var $this = $(this),
			menuItem = $this.parent('.header-nav-item'),
			menuButton = $this.data('section'),
			menuMain = $('.header-nav_main'),
			menuLight = menuMain.find('.header-nav_light'),
			menuFurniture = menuMain.find('.header-nav_furniture'),
			menuDecor = menuMain.find('.header-nav_decor'),
			menuBrands = menuMain.find('.header-nav_brands'),
			btnBack = menuMain.siblings('.header-nav-menu').find('.nav-back-link');

	switch(menuButton) {
		case "light":
			menuMain.toggleClass('active');
			menuItem.toggleClass('active');
			menuLight.toggleClass('active');
			btnBack.toggleClass('active');
			break;
		case "furniture":
			menuMain.toggleClass('active');
			menuItem.toggleClass('active');
			menuFurniture.toggleClass('active');
			btnBack.toggleClass('active');
			break;
		case "decor":
			menuMain.toggleClass('active');
			menuItem.toggleClass('active');
			menuDecor.toggleClass('active');
			btnBack.toggleClass('active');
			break;
		case "brands":
			menuMain.toggleClass('active');
			menuItem.toggleClass('active');
			menuBrands.toggleClass('active');
			btnBack.toggleClass('active');
			break;
		case "back":
			menuMain.parent('.header-nav-wrap').find('.header-nav.active').toggleClass('active');
			menuMain.toggleClass('active');
			btnBack.toggleClass('active');
			$('.header-nav-item').removeClass('active');
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


$(document).on('mouseenter', 'body.desktop .js-nav-item', function(event) {
	event.preventDefault();
	$(this).find('.header-nav').css('z-index', '100').show();
	var columns = $(this).find('.header-nav-column');
	if ($(this).find('js-nav-link').data('section') == 'brands') {
		$('.header-nav_brands').jScrollPane({	
			showArrows: true,	
			verticalDragMaxHeight: 140	
		});
		setEqualHeight(columns);

	}
});
$(document).on('mouseleave', 'body.desktop .js-nav-item', function(event) {
	event.preventDefault();
	$(this).find('.header-nav').css('z-index', '0').hide();
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
			var menuWidth = $('.header-nav-wrap').width();
			$('.js-nav-item').find('.header-nav').width(menuWidth);
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
		if (tabButton.hasClass('js-tab-btn-eichholtz')) {
			$('#eicholtz-tab').slick({
				slidesToShow: 6
			});
		}
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

$(document).ready(function() {
	$('.coll-slide__title').hover(function() {
		$(this).parents('.coll-slide__info').addClass('active');
	}, function() {
		$(this).parents('.coll-slide__info').removeClass('active');
	});
});