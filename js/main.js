jQuery(document).ready(function(){
	$('.menu-item').addClass('menu-trigger');
	$('.menu-trigger').click(function(){
		$('#menu-trigger').toggleClass('clicked');
		$('.container').toggleClass('push');
		$('.menu-type').toggleClass('open');
	});
});

jQuery(document).ready(function(){
	$('.menu-trigger').click(function(){
		$('#menu-logo').hide();
	});
});

jQuery(document).ready(function(){
	$('window').scroll(function(){
		$('#menu-logo').show();
	});
});