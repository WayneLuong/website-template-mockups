$(window).load(function(){

	console.log("loading");
	$('.preloader').fadeOut();
	$('#status').delay(300).fadeOut();
});

$(document).ready(function(){
	console.log("hello");
	$('#hover').on('mouseenter', function(){

		$('.sideMenu').fadeIn(300);
		console.log('hi')
	});
	$('.sideMenu').on('mouseleave', function(){

		$('.sideMenu').fadeOut(300);
		console.log('hi')
	});
});