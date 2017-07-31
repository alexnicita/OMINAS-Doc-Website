// global variables
current = ''

/* ------------------------------------------------------------------------- */
/* defaults when page is loaded */
$(document).ready(function () {
  $('.all-buttons').hide()

  $('#home').hide()
  $('.unique-list').hide()
  $('#reason-1, #reason-2, #reason-3, #reason-4, #reason-5').hide()

  // $('.overview-container').hide()

  $('#grim-batch').hide()
  $('#toc-old-buttons').hide()
  $('#demo-body').hide()
  $('#demo-header').hide()
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
      $('#nonoverview-buttons').fadeOut(750)
      percentage = $(window).height()/10
      $("html, body").animate({
        scrollTop: $(this).offset().top - percentage
      }, 1000)
      action_state = 1;
      console.log(action_state);

      // initial overview
      $('.unique-list, #home').delay(1000).fadeIn(2000)
    }
    // overview out
    else {
      action_state = 0; // reset action state
      console.log(action_state);
      $('.overview-container').fadeOut(750)
      $('html,body').animate({
        scrollTop: $(this).offset().top - ( $(window).height() - $(this).outerHeight(true) ) / 2
      }, 1000);
      $('#nonoverview-buttons').delay(1000).fadeIn(750)
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
        scrollTop: $(this).offset().top - 10
      }, 1000)
      $('#demo-body').delay(1000).fadeIn(750)
      action_state_ex = 1;
      console.log(action_state);
    }
    // examples out
    else {
      action_state_ex = 0;
      console.log(action_state);
      $('#demo-body').fadeOut(750)
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
$(document).ready(function() {

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
/* ------------------------------------------------------------------------- */
