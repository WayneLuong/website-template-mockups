$(document).ready(function(){
	
	$('.footer #contact').on('click','button', function(){
		console.log('ready');
		if ($('input').value != undefined) {
			alert("Submission Accepted!");
			console.log($('input').value);
		} else{
			alert("Please fill in the fields");
		}
	});
});