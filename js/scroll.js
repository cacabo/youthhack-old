$(window).scroll(function() {
  if ($(this).scrollTop() < 10) {
    $('.navbar').addClass('top');
  } else {
    $('.navbar').removeClass('top');
  }
});
