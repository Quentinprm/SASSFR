$(document).ready(function(){
	var $navbar = $('<div class="navbar-header"></div>');
	var $button = $("<button></button>");
	var $span = $('<span class="icon-bar"></span>');
	for (var i = 0; i < 3; i++) {
	  $button.append($span.clone());
	}
	$button.addClass('navbar-toggle');
	$navbar.append($button);
	$("#menu .container").prepend($navbar);
	$('.navbar-toggle').on('click', function(){
				$('#navbar').toggle();
	});
function display(){
      var win = $(this); //this = window
      if (win.width() >= 768) { 
		$('#navbar').css('display', 'block');
  		}
  	if(win.width()< 768){
  		$('#navbar').css('display', 'none');
  	}
  }
$(window).on('resize', _.debounce(display, 0));
});