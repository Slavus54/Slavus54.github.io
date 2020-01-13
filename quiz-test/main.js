function text (a) {
	let text = document.getElementById('text');
	text.innerHTML = a;
}
function text1 (a) {
	let text = document.getElementById('text1');
	text.innerHTML = a;
}
var run = function (fn, x) {
	fn(x);
};
function run1 () {
	run(text, 'Пример паттерна одиночки');
}
function run2 () {
	run(text1, 'Методы перебора массива');
}
var array = document.getElementsByClassName('answ');
console.log(array);
for (i=0; i<array.length; i++) {
	array[i].addEventListener('click', function () {
		var basket = document.getElementById('thisBasket');
		basket.appendChild(this);
		console.log(basket);
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

let result = document.getElementById('first');
result.addEventListener('click', resultHandler);

function resultHandler () {
	var basket = document.getElementById('thisBasket');
	var basketNew = basket.outerHTML;
	var right = document.getElementById('right1');
	var rightNew = right.outerHTML;

	if (rightNew) {
		right.style.backgroundColor = 'green';
		right.style.color = 'white';
		
	}
}

let result1 = document.getElementById('second');
result1.addEventListener('click', resultHandlerRight);

function resultHandlerRight () {
	var basket = document.getElementById('thisBasket1');
	var basketNew = basket.outerHTML;
	var right = document.getElementById('right2');
	var rightNew = right.outerHTML;

	if (rightNew) {
		right.style.backgroundColor = 'green';
		right.style.color = 'white';
		
	}
}
var greetButton = document.getElementById('greetingBut');

greetButton.addEventListener('click', function () {
    var input = document.getElementById('greetingIn');
    var val = input.value;
    greeting(val);
});
var need = "Welcome, ",
	for1 = "how are you",
	for2 = "nice to meet you",
	userX = [];

var greeting = function (num) {
	var greet = need;
	if (userNew(num)) {
		greet += num + " " +for1;
	} else {
		greet += num + " " +for2;
	}
	alert(greet);
}
var userNew = function (num) {
	for (i=0; i<userX.length; i++) {
		if (userX[i] === num) {
			return false;
		}
	}
	userX.push(num);
	return true;	
};