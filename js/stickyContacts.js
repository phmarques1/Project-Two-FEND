$(document).ready(function(){
  var stick = $("#topContacts");
  var pos = stick.position();  

$(window).scroll(function() {
    var windowPosition = $(window).scrollTop();

    if (windowPosition >= pos.top) {
       stick.addClass("sticky");
    } else {
       stick.removeClass("sticky");  
    }
  });

});