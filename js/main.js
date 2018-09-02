
jQuery(document).ready(function ($) {
// Прилипающее меню
	$(function(){
		var windowHeight = $(window).height();
		$(window).scroll(function() {
			if($(this).scrollTop() >= windowHeight - 190) {
				$('header.header').addClass('fixed');
			}
			else{
				$('header.header').removeClass('fixed');
			}
		});
	});
// Мобильное меню

	$('.mobile-menu-burger').click(function () {
		$('.header').fadeToggle();
	});
// Плавный скролл
	$('.scroll-item').click( function(){
		var scroll_el = $(this).attr('href');
		if ($(scroll_el).length != 0) {
			$('html, body').animate({ scrollTop: $(scroll_el).offset().top - 190 }, 500);
		}
		return false;
	});



// Табы Акордион
	$('.accord-head').on('click', function () {
		$(this)
			.toggleClass('active')
			.next('.accord-content')
			.stop()
			.slideToggle();
		$(this)
			.children('.accord-icon')
			.toggleClass('icon-close');
	});


//Слайдер
	$('.team-slider-inner').slick({

		slidesToShow: 3,
		slidesToScroll: 1,
		prevArrow: '<a href="#" class="slide-arrow slide-arrow-prev"> </a>',
		nextArrow: '<a href="#" class="slide-arrow slide-arrow-next"> </a>',
		responsive: [
			{
				breakpoint: 1200,
				settings: {
					slidesToShow: 2
				}
			},
			{
				breakpoint: 780,
				settings: {
					slidesToShow: 1,
					arrows: false,
					dots: true,
					dotsClass: 'dots-item'
				}
			}
	]

	});
});

