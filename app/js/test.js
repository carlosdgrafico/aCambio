$(document).ready(function(){

  	$('.banner__scroll').click(function(){
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
