function text () {
	let text = document.getElementById('text');
	text.innerHTML = 'Пример паттерна одиночки';
}
function text1 () {
	let text = document.getElementById('text1');
	text.innerHTML = 'Методы перебора массива';
}
var array = document.getElementsByClassName('answ');
console.log(array);
for (i=0; i<array.length; i++) {
	array[i].addEventListener('click', function () {
		var basket = document.getElementById('thisBasket');
		basket.appendChild(this);
	});
}

var tab = document.getElementsByClassName('tab');
console.log(tab);
for (i=0; i<tab.length; i++) {
	tab[i].addEventListener('click', function () {
		var content = this.nextElementSibling;
		content.classList.toggle('active');
		content.style.maxHeight = '150px';
		content.style.backgroundColor = '#C0D0C5';
		content.style.color = 'white';
	});
} 
var array = document.getElementsByClassName('answ1');
console.log(array);
for (i=0; i<array.length; i++) {
	array[i].addEventListener('click', function () {
		var basket = document.getElementById('thisBasket1');
		basket.appendChild(this);
	});
}

var tab = document.getElementsByClassName('tab1');
console.log(tab);
for (i=0; i<tab.length; i++) {
	tab[i].addEventListener('click', function () {
		var content = this.nextElementSibling;
		content.classList.toggle('active');
		content.style.maxHeight = '150px';
		content.style.backgroundColor = '#C0D0C5';
		content.style.color = 'white';
	});
} 