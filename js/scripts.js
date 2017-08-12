// global variables
current = ''

/* ------------------------------------------------------------------------- */
/* defaults when page is loaded */
$(document).ready(function () {
  $('.all-buttons').hide()

  $('.unique-list, .text-container').hide()
  $('#home, #reason-1, #reason-2, #reason-3, #reason-4, #reason-5').hide()

  // $('.overview-container').hide()

  $('#grim-batch').hide()
  $('#toc-old-buttons').hide()
  $('#demo-body').hide()
  $('#demo-header').hide()
  $('.extra-text-container').hide()
  $('#my_carousel_ct').hide()
  $('.slider-container').hide()

  slider();
})
/* ------------------------------------------------------------------------- */

/* ------------------------------------------------------------------------- */
/* home image fade away as you scroll down */
$(window).scroll(function () {
  var scrollTop = $(window).scrollTop();
  var height = $(window).height();
  $('#saturn-pic').css({
    /* messing around with timing here, added 2* */
    'opacity':((height - 2*scrollTop) /(height))
  })
})
/* ------------------------------------------------------------------------- */

/* ------------------------------------------------------------------------- */
// welcome fade in as you scroll down
$(window).scroll(function () {
    var bottom_of_welcome = $('.welcome').offset().top + $('.welcome').outerHeight();
    var bottom_of_window = $(window).scrollTop() + $(window).height();

    if ((bottom_of_window - bottom_of_welcome) < (($(window).height())/(2.5))) {
      $('.welcome').css({
        'opacity': (4*(bottom_of_window - bottom_of_welcome))/(bottom_of_welcome)
      })
    }
})
/* ------------------------------------------------------------------------- */

/* ------------------------------------------------------------------------- */
// click to enter
$(document).ready(function () {
  $('#enter-button').click(function () {
    $('.welcome').fadeOut(750)
    $('.all-buttons').delay(1000).fadeIn(750)
  })
})
var action_state = 0;
var action_state_ex = 0;
/* ------------------------------------------------------------------------- */

/* ------------------------------------------------------------------------- */
// overview click
$(document).ready(function () {
  $('#overview-button').click(function () {
    // overview in
    if (action_state === 0) {
      if (action_state_ex === 1) {
        $('.slider-container').fadeOut(750);
      }
      $('#nonoverview-buttons').fadeOut(750)
      $("html, body").animate({
        scrollTop: $(this).offset().top - 20
      }, 1000)

      // initial overview
      $('.unique-list, .text-container, #home').delay(1000).fadeIn(2000)
      current = '#home'
      $('#0').addClass('active')

      action_state = 1;
      console.log(action_state);
    }
    // overview out
    else {
      if (action_state_ex === 1) {
        $('.slider-container').fadeOut(750);
      }
      $('.unique-list, .text-container, #home').fadeOut(750)

      $(tabs).removeClass('active').delay(1000)
      $('html,body').animate({
        scrollTop: $(this).offset().top - ( $(window).height() - $(this).outerHeight(true) ) / 2
      }, 1000);
      $('#nonoverview-buttons').delay(1000).fadeIn(750)

      action_state = 0; // reset action state
      console.log(action_state);
    }
  })
})
/* ------------------------------------------------------------------------- */

/* ------------------------------------------------------------------------- */
// examples click
$(document).ready(function () {
  $('#examples-button').click(function () {
    if (action_state_ex === 0) {
      // examples in
      $('#github-button').fadeOut(750) // fade out other buttons
      $('#documentation-button').fadeOut(750)
      $("html, body").animate({
        scrollTop: $(this).offset().top + 200
      }, 1000)
      // $('#demo-body').delay(1000).fadeIn(750)
      $('.slider-container').delay(1000).fadeIn(750)
      action_state_ex = 1;
      console.log(action_state);
    }
    // examples out
    else {
      action_state_ex = 0;
      console.log(action_state);
      $('.slider-container').fadeOut(750)
      $('html,body').animate({
        scrollTop: $(this).offset().top - ( $(window).height() - $(this).outerHeight(true) ) / 2
      }, 1000);
      $('#github-button').delay(1000).fadeIn(750) // fade out other buttons
      $('#documentation-button').delay(1000).fadeIn(750)
    }
  })
})

/* ------------------------------------------------------------------------- */
// removed

// clicking the nav brings it to the top but includes the ominas overview description
// $(document).ready(function () {
//   $('.unique-list').click(function() {
//     var percentage = $(window).height()/25
//     $("html, body").animate({
//       scrollTop: $(this).offset().top - percentage
//     }, 1000)
//   })
// })
/* ------------------------------------------------------------------------- */

/* ------------------------------------------------------------------------- */
// clicking overview nav bar
var tabs = '#0, #1, #2, #3, #4, #5'
$(document).ready(function() {

  $('#0').click(function () {
    $(current).fadeOut(575)
    current = '#home';
    $(current).delay(600).fadeIn(1000)
    $(tabs).removeClass('active')
    $('#0').addClass('active')
  })

  $('#1').click(function () {
    $(current).fadeOut(575)
    current = '#reason-1';
    $(current).delay(600).fadeIn(1000)
    $(tabs).removeClass('active')
    $('#1').addClass('active')
  })

  $('#2').click(function () {
    $(current).fadeOut(575)
    current = '#reason-2';
    $(current).delay(600).fadeIn(1000)
    $(tabs).removeClass('active')
    $('#2').addClass('active')
  })

  $('#3').click(function () {
    $(current).fadeOut(575)
    current = '#reason-3';
    $(current).delay(600).fadeIn(1000)
    $(tabs).removeClass('active')
    $('#3').addClass('active')
  })

  $('#4').click(function () {
    $(current).fadeOut(575)
    current = '#reason-4';
    $(current).delay(600).fadeIn(1000)
    $(tabs).removeClass('active')
    $('#4').addClass('active')
  })

  $('#5').click(function () {
    $(current).fadeOut(575)
    current = '#reason-5';
    $(current).delay(600).fadeIn(1000)
    $(tabs).removeClass('active')
    $('#5').addClass('active')
  })
})
/* ------------------------------------------------------------------------- */

/* ------------------------------------------------------------------------- */
function slider() {
    var slides = $('.slide');
    var i = 0;
    $('#previous').hide();
    $('#next').click(function () {
        if (i == 0) {
            $('#previous').show();
        }
        if (i == slides.length - 2) {
            $('#next').hide();
        }
        i = ++i % slides.length;
        $('.slider-wrapper').animate({
            'left': -(slides.eq(i).position().left)
        }, 600, "swing");
    });
    $('#previous').click(function () {
        if (i == 1) {
            $('#previous').hide();
        }
        if (i == slides.length - 1) {
            $('#next').show();
        }
        i = --i % slides.length;
        $('.slider-wrapper').animate({
            'left': -(slides.eq(i).position().left)
        }, 600, "swing");
    });
}
/* ------------------------------------------------------------------------- */
