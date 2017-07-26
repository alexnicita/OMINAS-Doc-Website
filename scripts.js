/* defaults when page is loaded */
$(document).ready(function () {
  $('.all-buttons').hide()
  $('#overview-text-title, #overview-text-body, .reasons, #overview-example-button').hide()
  $('.reasons-nav').hide()
  $('#grim-batch').hide()
  $('#toc-old-buttons').hide()
  $('#demo-body').hide()
  $('#demo-header').hide()
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
var action_state = 0;
var action_state_ex = 0;

$(document).ready(function () {

      $('#overview-button').click(function () {
        if (action_state === 0) {
          $('#nonoverview-buttons').fadeOut(750) // fade out other buttons
          $("html, body").animate({
            scrollTop: $(this).offset().top - 10
          }, 1000)
          $('#overview-text-title, #overview-text-body').delay(1000).fadeIn(750) // fade in overview-text
          $('.reasons-nav').delay(2000).fadeIn(750)
          action_state = 1;
          console.log(action_state);
        } else {
          action_state = 0;
          console.log(action_state);
          $('#overview-text-title, #overview-text-body').fadeOut(750)
          $('.reasons-nav').fadeOut(750)
          $('html,body').animate({
            scrollTop: $(this).offset().top - ( $(window).height() - $(this).outerHeight(true) ) / 2}, 1000);
          $('#nonoverview-buttons').delay(1000).fadeIn(750)

        }
      })

      $('#examples-button').click(function () {
        if (action_state_ex === 0) {
          $('#github-button').fadeOut(750) // fade out other buttons
          $('#documentation-button').fadeOut(750)

          $("html, body").animate({
            scrollTop: $(this).offset().top - 10
          }, 1000)
          $('#demo-body').delay(1000).fadeIn(750)
          action_state_ex = 1;
          console.log(action_state);
        } else {
          action_state_ex = 0;
          $('#demo-body').fadeOut(750)

          console.log(action_state);
          $('html,body').animate({
            scrollTop: $(this).offset().top - ( $(window).height() - $(this).outerHeight(true) ) / 2}, 1000);
          //$('#nonoverview-buttons').delay(1000).fadeIn(750)
          $('#github-button').delay(1000).fadeIn(750) // fade out other buttons
          $('#documentation-button').delay(1000).fadeIn(750)
        }
      })

})

// clicking the nav brings it to the top and dipslays the section you clicked on
$(document).ready(function () {
  $('#nav').click(function() {
    $("html, body").animate({
      scrollTop: $(this).offset().top - 50
    }, 1000)

  })
})



// // fade in reasons class as you scroll down -- wasn't working though
// $(window).scroll(function () {
//     var bottom_of_reasons = $('.reasons').offset().top + $('.reasons').outerHeight();
//     var bottom_of_window = $(window).scrollTop() + $(window).height();
//
//     var bottom_of_overviewText = $('.overview-text').offest().top + $('.overview-text').outerHeight();
//     var windowHeight = $(window).height();
//
//     if (bottom_of_overviewText > (windowHeight/2)) {
//       $('.reasons').css({
//         'opacity': (10*(bottom_of_window - bottom_of_reasons))/(bottom_of_reasons)
//       })
//     }
// })

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
