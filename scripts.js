

/* trying to make home image fade away as you scroll down */
$(document).scroll(function () {
  var scrollTop = $(document).scrollTop();
  var height = $(document).height();
  $('.home_image').css({
    'opacity':((height - scrollTop) / height)
  })
})

/* experimenting */
$(document).ready(function() {
  $('p').click(function(){
    $(this).hide()
  })
})

$(document).ready(function() {
  $('#overview-title').click(function(){
    $('#overview-title').hide()
  })
})
