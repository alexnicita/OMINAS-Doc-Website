

/* home image fade away as you scroll down */
$(window).scroll(function () {
  var scrollTop = $(window).scrollTop();
  var height = $(window).height();
  $('#saturn-pic').css({
    'opacity':((height - 2*scrollTop) /(height))
  })
})

/* welcome div fade in as you scroll down */
/* this ain't working though */
  $(window).scroll(function () {
      var bottom_of_obj = $(this).offset().top + $(this).outerHeight();
      var bottom_of_window = $(window).scrollTop() + $(window).height();
      if (bottom_of_window > bottom_of_obj) {
          $('#welcome-title').animate({'opacity': '1'}, 750)
          $('#welcome-subtitle').animate({'opacity': '1'}, 750)
      }
  })

/* experimenting */
$(document).ready(function() {
  $('#overview-title').click(function(){
    $('#overview-title').hide()
  })
})
