$(document).ready(function() {

  'use strict';

  // Apply the transform effect on focus
  $('input').focus(function() {
    $(this).addClass('active');
    $(this).next('label').addClass('hasVal active');
  });

  $('textarea').focus(function() {
    $(this).addClass('active');
    $('#messageLabel').addClass('hasVal active');
  });

  // check if the input has a value
  $('input').blur(function() {
    $(this).removeClass('active');
    if ($(this).val().length > 0) {
      $(this).next('label').addClass('hasVal').removeClass('active');
    } else {
      $(this).next('label').removeClass('hasVal active');
    }
  });

  $('textarea').blur(function() {
    $(this).removeClass('active');
    if ($(this).val().length > 0) {
      $('#messageLabel').addClass('hasVal').removeClass('active');
    } else {
      $('#messageLabel').removeClass('hasVal active');
    }
  });

});
