// scroll
$('.page-scroll').on('click', function(e){

  var href = $(this).attr('href');

  var elemenHref = $(href);

  $('html,body').animate({
    scrollTop: elemenHref.offset().top
  },1000, 'swing');

  e.preventDefault();

});

// parallax

$(window).scroll(function(){
  var wScroll = $(this).scrollTop();

  $('.jumbotron img').css({
    'transform' : 'translate(0px, '+ wScroll/8 +'%)'
  });

  $('.jumbotron h1').css({
    'transform' : 'translate(0px, '+ wScroll/2.5 +'%)'
  });

  $('.jumbotron p').css({
    'transform' : 'translate(0px, '+ wScroll/1 +'%)'
  });

  // if( wScroll > $('.portfolio').offset().top - 350 ) {
  //   $('.portfolio .thumbnail').each(function(i) {
  //     setTimeout(function() {
  //       $('.portfolio .thumbnail').eq(i).addClass('getout')
  //     }, 200 * (i+1));
  //   });
  // }

  // $('.pleft').addClass('pgetout');
  // $('.pright').addClass('pgetout');        
});