$(document).ready(function(){


   $('.owl-frases, .owl-testimonios').owlCarousel({
      // animateOut: 'slideOutDown',
      animateIn: 'flipInX',
		loop: true,
		autoplay: true,
		margin: 10,
		nav: true,
		dots: true,
		navText: ["<div class='prev'></div>", "<div class='next'></div>"],
		responsive: {
			0: {
				items: 1
			},
			600: {
				items: 1
			},
			1000: {
				items: 1
			}
		}
	});

});
