// JavaScript Document

//Show time
function time() {
	console.log("done");
	var showTime = document.getElementById("showTime")
	showTime.innerHTML =Date();
	document.getElementById("time").addEventListener("click", hideTime);
}

function hideTime() {
	var showTime = document.getElementById("showTime")
		showTime.hidden = true;
		if (showTime.hidden == true){
		Showtime.hidden = false;
	}
}

//Change Image
function changeImage() {
	var image = document.getElementById("bulb");
	if (image.src.match("bulbon")) {
		image.src = "images/pic_bulboff.gif";
	} else {
		image.src="images/pic_bulbon.gif";
	}
}

//Number Input
function num() {
	var x, text;
	x = document.getElementById("num").value;
	
	//NaN Not a number
	if (isNaN(x) || x < 1 || x > 10) {
		text = "Input not valid";
	} else {
		text = "Input OK";
	}
	document.getElementById("demo").innerHTML = text;
}

//Search Array
function search(){
	var searchTerm = document.getElementById("search").value;
	if (searchTerm == "")
	{
		document.getElementById("displayArray").innerHTML = "Null";
	} else {
	document.getElementById("displayArray").innerHTML = "Your search term is: "+ searchTerm;
	}
}

//Resize image
function changeLight(){
	document.getElementById("light").style.height ="35%";
	document.getElementById("light").style.width ="35%";
}

//alert function
function alertme() {
	alert("You clicked");
	return true;
}

//Change color
function changeColour() {
	document.getElementById("state").style.color ="red";
	document.getElementById("state").firstChild.nodeValue = "Excited";
}

function changeBack() {
	document.getElementById("state").style.color ="gray";
	document.getElementById("state").firstChild.nodeValue = "Bored";
}

