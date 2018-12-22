$(document).scroll(function() {
  var y = $(this).scrollTop();
  if (y > 500) {
    $('.head').fadeIn();
  } else {
    $('.head').fadeOut();
  }
});


