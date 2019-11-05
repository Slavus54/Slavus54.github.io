$(document).ready(function($) {
	var button = $('#but1');

	button.on('click', function () {
	alert('Посмотрите рейтинг, прежде чем узрить трейлер');
	var x,y,rating1,rating2;
	var x = (Math.random()*10);
	var x = x.toFixed();
	var x = parseInt(x);
	var y = x + 1;
	console.log(x);
	rating1 = "Рейтинг : "+x+" из 10";
	rating2 = "Рейтинг : "+y+" из 10";
	document.getElementById('rate1').innerHTML = rating1;
	document.getElementById('rate2').innerHTML = rating2;
	document.getElementById('rate3').innerHTML = rating1;
	document.getElementById('rate4').innerHTML = rating2;
	document.getElementById('rate5').innerHTML = rating1;
	document.getElementById('rate6').innerHTML = rating2;
	}) 
});
