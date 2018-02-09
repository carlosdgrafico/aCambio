$(document).ready(function(){

  	$('.banner__scroll, .header__link').click(function(){
  	  if(location.pathname.replace(/^\//,'')==this.pathname.replace(/^\//,'')||location.hostname==this.hostname){
  	    var
  	    target=$(this.hash);
  	    target=target.length?target:$('[name='+this.hash.slice(1)+']');
  	    if(target.length){
  	      $('html,body').animate({
  	          scrollTop:target.offset().top+20
  	      },1000);
  	      return false;
  	    }
  	  }
  	});


   $(window).on('scroll', function(){
     var $window = $(this);
     var $altura = $('.banner').height();

     $window.scrollTop() > 200
       ? $('.banner__scroll').fadeOut(300)
       : $('.banner__scroll').fadeIn(300);

       $window.scrollTop() > $altura
         ? $('.header').css('background-color', 'rgba(0,0,0,.3)')
         : $('.header').css('background-color', 'transparent');

         console.log($altura);
   });





	$('.header__link').click(function(){
		$(".header__link").removeClass('header__link--active');
		$(".burger").removeClass('on');
		$(".header__menu").removeClass('onActive');
		$(this).addClass('header__link--active');

	});


   $(".burger").click(function() {
	  $(this).toggleClass("on");
   });


   // despliega el menu lateral
	$('.burger').on('click', function() {
      $(".header__menu").toggleClass('onActive');
	});


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
