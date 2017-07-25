/* defaults when page is loaded */
$(document).ready(function () {
  $('.all-buttons').hide()
})

/* home image fade away as you scroll down */
$(window).scroll(function () {
  var scrollTop = $(window).scrollTop();
  var height = $(window).height();
  $('#saturn-pic').css({
    /* messing around with timing here, added 2* */
    'opacity':((height - 2*scrollTop) /(height))
  })
})

// opacity gradually increases as you scroll
$(window).scroll(function () {
    var bottom_of_welcome = $('.welcome').offset().top + $('.welcome').outerHeight();
    var bottom_of_window = $(window).scrollTop() + $(window).height();

    if ((bottom_of_window - bottom_of_welcome) < (($(window).height())/(2.5))) {
      $('.welcome').css({
        'opacity': (4*(bottom_of_window - bottom_of_welcome))/(bottom_of_welcome)
      })
    }
})

// click to fade out welcome and fade in all buttons
$(document).ready(function () {
  $('#enter-button').click(function () {
    $('.welcome').fadeOut(750)
    $('.all-buttons').delay(1000).fadeIn(750)
  })
})

// below is the old home page that didn't have a click to enter on it

// /* welcome fade in, fade out, and button fade in on scroll */
// $(window).scroll(function () {
//     var bottom_of_welcome = $('.welcome').offset().top + $('.welcome').outerHeight();
//     var bottom_of_window = $(window).scrollTop() + $(window).height();
//
//     /* issue: display is glitchy if welcome has faded out, you scroll to the top of the page, and then back down again */
//     if ((bottom_of_window - bottom_of_welcome) > (($(window).height())/(2.5))) {
//       $('.welcome').fadeTo(750, 0)
//       $('.svg-wrapper').delay(1000).fadeTo(750, 1)
//     }
//     else {
//       $('.welcome').css({
//         'opacity': (5*(bottom_of_window - bottom_of_welcome))/(bottom_of_welcome)
//       })
//     }
// })
