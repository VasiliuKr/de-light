

$(document).ready(function() {
	$('body').restive({
		breakpoints: ['767', '10000'],
		classes: ['mobile', 'desktop'],
		turbo_classes: 'is_mobile=r_mobi,is_phone=r_phone,is_tablet=r_tablet,is_landscape=r_landscape',
		force_dip: true
	});
});

/*************** Page rebuilding (start) ****************/
$(document).ready(function() {

	screenWidth = window.screen.availWidth;
	if (screenWidth > 767) {
		$('#main-heading_mobile h1').prependTo('#main-heading_desktop');
		$('.top-products-wrap').find('.section-title').prependTo('.prod-titles-wrap');
		$('.social-galleries-wrap').find('.section-title').prependTo('.social-galleries-wrap');
	}
	window.onresize = function () {
		screenWidth = window.screen.availWidth;
		if (screenWidth > 767) {
			$('#main-heading_mobile h1').prependTo('#main-heading_desktop');
			$('.top-products-wrap').find('.section-title').prependTo('.prod-titles-wrap');
			$('.social-galleries-wrap').find('.section-title').prependTo('.social-galleries-wrap');
		} else {
			$('#main-heading_desktop h1').prependTo('#main-heading_mobile');
			$('.prod-titles-wrap .title_hit').prependTo('.title-wrap_hit');
			$('.prod-titles-wrap .title_recom').prependTo('.title-wrap_recom');
			$('.prod-titles-wrap .title_sale').prependTo('.title-wrap_sale');
			$('.social-galleries-wrap .title_lighting').prependTo('.title-wrap_lighting');
			$('.social-galleries-wrap .title_eichprj').prependTo('.title-wrap_eichprj');
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
						breakpoint: 767,
						settings: 'unslick'
					}
				]
			});
		}
	}
});
/*************** Page rebuilding (end) ****************/

/************** Media Query JS (matchMedia) (start) ***************/
if (matchMedia) {
	const mq = window.matchMedia( "(min-width: 768px)" );
	mq.addListener(WidthChange); // media query event handler (workes after changing browser width)

	// workes only after page loading or reloading
	if (!mq.matches) {
		console.log('width is less than 768px');
	} else {
		console.log('width is at least 768px');
	}
}

// media query change
function WidthChange(mq) {
	if (mq.matches) {
		
	} else {
		
	}
}
/*************** Media Query JS (matchMedia) (end) ****************/

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
				breakpoint: 767,
				settings: 'unslick'
			}
		]
	});
	$('.slider-collections').slick({
		mobileFirst: true,
		responsive: [
			{
				breakpoint: 767,
				settings: {
					centerMode: true,
					slidesToShow: 1,
					centerPadding: 'calc((100% - 750px)/2)'
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
				breakpoint: 767,
				settings: {
					slidesToShow: 6,
					centerMode: true,
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
				breakpoint: 767,
				settings: {
					slidesToShow: 6,
					centerMode: true,
				}
			}
		]
	});
	$('.fabric-gallery').slick({
		mobileFirst: true,
		dots: true,
		arrows: false,
		responsive: [
			{
				breakpoint: 767,
				settings: {
					dots: false,
					arrows: true,
					slidesToShow: 2,
					centerMode: true,
					centerPadding: 'calc((100% - 1000px)/2)'
				}
			}
		]
	});
	$('.fabric-carousel').slick({
		dots: false,
		arrows: false,
		slidesToShow: 1,
		autoplay: true
	});
});
/**************** Slick sliders (end) *****************/

/*************** Mobile menu (start) ****************/
$(document).on('click', '.js-menu-link', function(event) {
	event.preventDefault();
	$(this).toggleClass('active');
	$('.header-nav-wrap').toggle();
	$('.wrapper .content').toggleClass('mob-menu-active');
	$('html').toggleClass('ov-hidden');

	//скрытие мобильного меню по тапу вне меню
	$('.content.mob-menu-active').mouseup(function (e){
		if (!$('.header-nav-wrap').is(e.target) && $('.header-nav-wrap').has(e.target).length === 0) {
			$('.header-nav-wrap').hide(); 
			$('.js-menu-link').removeClass('active');
			$('html').removeClass('ov-hidden');
		}
	});
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
	if ($(this).find('.js-nav-link').data('section') == 'brands') {
		$('.header-nav_brands').jScrollPane({	
			showArrows: true,	
			verticalDragMaxHeight: 140	
		});
		setEqualHeight(columns);
	} else if ($(this).find('.js-nav-link').data('section') == 'decor') {
			setEqualHeight(columns);
	}
});
$(document).on('mouseleave', 'body.desktop .js-nav-item', function(event) {
	event.preventDefault();
	
	if ($(this).find('.js-nav-link').data('section') == 'brands') {
		$('.header-nav_brands').jScrollPane({	
			showArrows: true,	
			verticalDragMaxHeight: 140	
		});
		var api = $('.header-nav_brands').data('jsp');
		api.destroy();
	}
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
			var menuWidth = $('.header-nav-wrap').width() - 2;
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
				tabContainer = tabButton.parents('.tabs-wrap'),
				tabBtns = tabButton.siblings('.section-title'),
				tabContent = tabContainer.find('.tab-content');
		tabContent.removeClass('active');
		tabContent.eq(tabButton.index()).addClass('active');
		
		tabBtns.removeClass('active');
		tabButton.addClass('active');
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

	// скрытие окна поиска по клику вне области поиска
	$(document).mouseup(function (e){ 
		if (!searchContainer.is(e.target) && searchContainer.has(e.target).length === 0) {
			searchContainer.removeClass('active');
		}
	});
});




$(document).ready(function() {
	$('.search-field, .subscribe__input').click(function(){
		$(this).data('placeholder',$(this).attr('placeholder'));
		$(this).attr('placeholder','');
	});
	$('.search-field, .subscribe__input').blur(function(){
	$(this).attr('placeholder',$(this).data('placeholder'));
	});
});
/*************** Header search (end) ****************/

/*************** Showcases slider (start) ****************/
$(document).on('mouseenter', '.coll-slide__title', function(event) {
	event.preventDefault();
	$(this).parents('.coll-slide__info').addClass('active');
});
$(document).on('mouseleave', '.coll-slide__info', function(event) {
	event.preventDefault();
	$(this).removeClass('active');
});
/*************** Showcases slider (end) ****************/

/*************** Form validation (start) ****************/
function validateForm(form) {
	var elements = form.find('input, textarea').not('input[type="file"], input[type="hidden"]'),
			valid = true;
		
		// Пройдемся по всем элементам формы
		$.each(elements, function (index, val) {
			var element = $(val),
				val = element.val();

			if(val.length === 0) {
				valid = false;
			}

			if (element.attr('type') == 'email') {
				var rv_email = /^([a-zA-Z0-9_.-])+@([a-zA-Z0-9_.-])+\.([a-zA-Z])+([a-zA-Z])+/;
				if(val != '' && !val.match(rv_email)) {
					valid = false;
				}
			}

		});

		if (valid) {
			form.removeClass('error');
		} else {
			form.addClass('error');
		}
		return valid;
}

$(document).on('click', '.js-submit', function(event) {
	event.preventDefault();
	var form = $(this).parents('form');
	validateForm(form);
});
/*************** Form validation (end) ****************/

/*************** Close authorization and search forms by ESC (start) ****************/
$(document).keydown(function(event) {
	if( event.keyCode === 27 ) {
		$('.search.search_top').removeClass('active');
		$('.authorization').removeClass('active');
	}
});
/*************** Close authorization and search forms by ESC (end) ****************/

/************** Fabric text spoiler (start) ***************/
$(document).on('click', '.js-more-btn', function(event) {
	event.preventDefault();
	var $this = $(this),
			elemExp = $this.parent('div'),
			btnText = $this.find('.more-text');
	if(btnText.text() == "читать дальше") {
		btnText.text("скрыть текст");
	} else {
		btnText.text("читать дальше");
	}		
	elemExp.toggleClass('expanded');
});
/*************** Fabric text spoiler (end) ****************/


/************** Sorting panel (start) ***************/
function formatState (state) {
	if (!state.id) {
		return state.text;
	}
	var $state = $('<span>Показать: ' + state.text + '</span>');
	return $state;
};
function formatState2 (state) {
	if (!state.id) {
		return state.text;
	}
	var $state = $('<span>Сортировать: ' + state.text + '</span>');
	return $state;
};
$(document).ready(function() {
	$('#sort-panel__select_store').select2({
		dropdownParent: $('.sort-panel'),
		placeholder: "Показать:",
		templateSelection: formatState,
		minimumResultsForSearch: Infinity
	});
	$('.sort-panel__select_sort').select2({
		dropdownParent: $('.sort-panel'),
		placeholder: "Сортировать:",
		templateSelection: formatState2,
		minimumResultsForSearch: Infinity
	});
	$(".select2-search, .select2-focusser").remove();
});
/************** Sorting panel (end) ***************/


/************** Filter panel (start) ***************/
$(document).on('click', '.js-mob-filter', function(event) {
	event.preventDefault();
	var $this = $(this),
			filter = $this.siblings('.filter-wrap');
	filter.toggleClass('opened');
	$this.toggleClass('opened');
});

$(document).on('click', '.js-filter-spoil', function(event) {
	event.preventDefault();
	var $this = $(this),
			filterList = $this.siblings('.filter-inner'),
			filterPanel = $this.parents('.filter-panel__field'),
			filterPanels = filterPanel.siblings('.filter-panel__field'),
			filterTitles = filterPanels.find('.filter__title'),
			filterLists = filterPanels.find('.filter-inner'),
			mq = window.matchMedia( "(min-width: 768px)" );
	
	filterTitles.removeClass('opened');
	filterLists.removeClass('opened');
	filterList.toggleClass('opened');
	$this.toggleClass('opened');
	if ($this.hasClass('opened') && mq.matches && filterList.height() > 349) {
		filterList.find('.filter__list').jScrollPane();
	}
});


$(document).on('click', '.js-filter-list-spoil', function(event) {
	event.preventDefault();
	var $this = $(this),
			container = $this.parents('.filter__item_parent'),
			mq = window.matchMedia( "(min-width: 768px)" );
	container.toggleClass('expanded');
	if (mq.matches && $this.parents('.filter-inner').hasClass('opened')) {
		$this.parents('.filter__list').jScrollPane();
	}
	
});

$(document).on('change', '.js-filter-checkbox', function(event) {
	var $this = $(this),
			container = $this.parents('.filter-inner'),
			filterTitle = container.siblings('.filter__title'),
			checkboxes = container.find('input[type="checkbox"]'),
			activeCheck = false,
			checkedCheckboxes = [],
			filterTitleText = filterTitle.find('.filter__title-text'),
			filterTags = filterTitle.find('.filter__title-tags'),
			tagsWidth = filterTitle.width() - filterTitleText.width() - 30,
			availLettersAmount = Math.floor(tagsWidth / 10);
	$.each(checkboxes, function (index, val) {
		var element = $(val),
				label = element.next('label').text();
		if (element.prop('checked')) {
			checkedCheckboxes.push(label);
			tagsText = checkedCheckboxes.join(", ");
			activeCheck = true;
		}
	});
	if (activeCheck) {
		filterTitle.addClass('filtered');
	} else {
		filterTitle.removeClass('filtered');
	}
	if (tagsText.length < availLettersAmount) {
		filterTags.text(tagsText);
	} else {
		filterTags.text('(' + checkedCheckboxes.length + ')');
	}
	tagsText = '';
});

$(document).on('click', '.js-filter-reset', function(event) {
	event.stopPropagation(); // отменяем "всплытие" .js-filter-spoil
	var $this = $(this),
			filterTitle = $this.parents('.filter__title'),
			checkboxes = filterTitle.siblings('.filter-inner').find('input[type="checkbox"]');
	$.each(checkboxes, function(index, el) {
		var element = $(el);
		element.prop('checked', false);
	});
	filterTitle.removeClass('filtered');
});
$(document).on('click', '.js-main-filter-reset', function(event) {
	event.stopPropagation(); // отменяем "всплытие" .js-mob-filter
	$('.filter-panel__form')[0].reset();
	$('.filter__title-tags').text('');
});

/*************** Filter panel (end) ****************/

/************** Fixed buttons (start) ***************/
$(function() {
	$(window).scroll(function() {
		if($(this).scrollTop() != 0 && $('body').hasClass('desktop')) {
			$('.js-btn-up').fadeIn();
		} else {
			$('.js-btn-up').fadeOut();
		}
	});

	$('.js-btn-up').click(function() {
		$('body,html').animate({scrollTop:0},800);
	});
});
/*************** Fixed buttons (end) ****************/