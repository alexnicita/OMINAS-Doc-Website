

/* home image fade away as you scroll down */
$(window).scroll(function () {
  var scrollTop = $(window).scrollTop();
  var height = $(window).height();
  $('#saturn-pic').css({
    /* messing around with timing here, added 2* */
    'opacity':((height - 2*scrollTop) /(height))
  })
})

/* welcome div fade in as you scroll down */

/* this ain't working though */
// $(document).ready(function () {
//   $('.welcome').css({
//     'opacity': 0
//   })
// })

/* neither is this */
// $(window).scroll(function () {
//   if ($(window).scrollTop = 0) {
//     'opacity': 0
//   }
// })

$(window).scroll(function () {
    var bottom_of_welcome = $('.welcome').offset().top + $('.welcome').outerHeight();
    var bottom_of_window = $(window).scrollTop() + $(window).height();
    $('.welcome').css({
      'opacity': (4*(bottom_of_window - bottom_of_welcome))/(bottom_of_welcome)
    })
})

// $(window).scroll(function () {
//     var bottom_of_obj = $(this).offset().top + $(this).outerHeight(;
//     var bottom_of_window = $(window).scrollTop() + $(window).height();
//     if (bottom_of_window > bottom_of_obj) {
//         $('#welcome-title').animate({'opacity': '1'}, 750)
//         $('#welcome-subtitle').animate({'opacity': '1'}, 750)
//     }
// })

// $(window).scroll(function () {
//   var bottomOfObj = $(this).offset().top + $(this).outerHeight(true);
//   /* bottom of window is distance from top of screen plus the height of the current window */
//   var bottomOfWindow = $(window).scrollTop() + $(window).height();
//   /* if window's bottom is further from the top of the page than the object's bottom, start fading in */
//   if (bottomOfWindow > bottomOfObj) {
//     $('.welcome').css({
//
//     })
//   }
// })



/* experimenting */

/* hides #overview-title on click */
// $(document).ready(function() {
//   $('#overview-title').click(function(){
//     $('#overview-title').hide()
//   })
// })
