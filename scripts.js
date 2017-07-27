/* defaults when page is loaded */
$(document).ready(function () {
  $('.all-buttons').hide()
  $('.overview-text, #overview-text-title, #overview-text-body, .reasons, #overview-example-button').hide()
  $('.navigation, .unique-list').hide()
  $('#reason-1, #reason-2, #reason-3, #reason-4, #reason-5').hide()
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
          percentage = $(window).height()/10
          $("html, body").animate({
            scrollTop: $(this).offset().top - percentage
          }, 1000)
          $('.overview-text, #overview-text-title, #overview-text-body').delay(2000).fadeIn(1000) // fade in overview-text
          $('.unique-list').delay(1500).fadeIn(2000)
          action_state = 1;
          console.log(action_state);
        } else {
          action_state = 0;
          console.log(action_state);
          $('#overview-text-title, #overview-text-body').fadeOut(750)
          $('.navigation, .unique-list').fadeOut(750)
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

// clicking the nav brings it to the top but includes the ominas overview description
$(document).ready(function () {
  $('.unique-list').click(function() {
    var percentage = $(window).height()/25
    $("html, body").animate({
      scrollTop: $(this).offset().top - percentage
    }, 1000)
  })
})

// clicking on a li element in the nav brings in that sections text-decoration
$(document).ready(function() {
  current = '';
  $('#1').click(function () {
    $(current).fadeOut(1000)
    current = '#reason-1';
    $(current).delay(1000).fadeIn(1000)
    $('.unique-list').each(function () {
      $(this).removeClass('.active')
      $('#1').addClass('.active')
    })
  })
  $('#2').click(function () {
    $(current).fadeOut(1000)
    current = '#reason-2';
    $(current).delay(1000).fadeIn(1000)
    $('.unique-list').each(function () {
      $(this).removeClass('.active')
      $('#2').addClass('.active')
    })
  })
  $('#3').click(function () {
    $(current).fadeOut(1000)
    current = '#reason-3';
    $(current).delay(1000).fadeIn(1000)
    $('.unique-list').each(function () {
      $(this).removeClass('.active')
      $('#3').addClass('.active')
    })
  })
  $('#4').click(function () {
    $(current).fadeOut(1000)
    current = '#reason-4';
    $(current).delay(1000).fadeIn(1000)
    $('.unique-list').each(function () {
      $(this).removeClass('.active')
      $('#4').addClass('.active')
    })
  })
  $('#5').click(function () {
    $(current).fadeOut(1000)
    current = '#reason-5';
    $(current).delay(1000).fadeIn(1000)
    $('.unique-list').each(function () {
      $(this).removeClass('.active')
      $('#5').addClass('.active')
    })
  })
})

// sloppy implementation of function to change color of current li



$(document).ready(function () {
  var headerAnchors = $('li').click(function () {
    headerAnchors.removeClass('active');
    $(this).addClass('active');
  })
})




// $(document).ready(function () {
//   $('li').each(function() {
//     // $('li').click(function (
//       $('li').click(function() {
//         $(this).animate({color: red})
//     // ))
//       }
//   })
// })

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
