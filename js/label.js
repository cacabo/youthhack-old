$(document).ready(function() {

    'use strict';

    // Apply the transform effect on focus
    $('input').focus(function() {
        $(this).next('label').addClass('hasVal');
    });

    $('textarea').focus(function() {
        $('#messageLabel').addClass('hasVal');
    });

    // check if the input has a value
    $('input').blur(function() {
        if ($(this).val().length > 0) {
            $(this).next('label').addClass('hasVal');
        } else {
            $(this).next('label').removeClass('hasVal');
        }
    });

    $('textarea').blur(function() {
        if ($(this).val().length > 0) {
            $('#messageLabel').addClass('hasVal');
        } else {
            $('#messageLabel').removeClass('hasVal');
        }
    });

});
