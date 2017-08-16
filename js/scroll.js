$(window).scroll(function() {
  if ($(this).scrollTop() < 36) {
    $('.navbar').addClass('top');
  } else {
    $('.navbar').removeClass('top');
  }
});
