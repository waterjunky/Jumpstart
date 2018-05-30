$(document).ready(function() {

// Jumbotron slider
  $('.carousel').slick({
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: false,
    draggable: false,
    pauseOnFocus: false,
    pauseOnHover: false
  });

// Hide the nav when user scrolls down
  var userScrollDistance = 0;
  $(window).scroll(function(){
  var scrollTop = $(this).scrollTop();
  if (scrollTop - userScrollDistance > 50) {
    var navBarHeight = $('.navbar').css('height');
    $('.navbar').animate({top: '-' + navBarHeight}, 150);
    userScrollDistance = scrollTop;
    } else if (userScrollDistance - scrollTop > 50){
      $('.navbar').animate({top: '0px'}, 150);
      userScrollDistance = scrollTop;
    }
  });
});
