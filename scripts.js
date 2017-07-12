

/* trying to make home image fade away as you scroll down */
$(window).scroll(function () {
  var scrollTop = $(window).scrollTop();
  var height = $(window).height();
  $('#saturn-pic').css({
    'opacity':((height - scrollTop) /(height))
  })
})

/* experimenting */
$(document).ready(function() {
  $('#overview-title').click(function(){
    $('#overview-title').hide()
  })
})
