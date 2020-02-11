$(document).ready(function($) {
	let link1 = $('#first-but');
	let close1 = $('#first-close');
	let overlay1 = $('#first-back');
	let popup1 = $('.popup1');
	link1.on('click', function () {
		overlay1.show();
		popup1.toggleClass('popup1_active');
	});
	close1.click(function () {
		overlay1.hide();
		popup1.toggleClass('popup1_active');
	})
	overlay1.click(function () {
		overlay1.hide();
		popup1.toggleClass('popup1_active');
	})
});
	function onSubmit () {
		let name1 = document.getElementById('name1').value;
		let tel1 = document.getElementById('tel1').value;
		let name2 = document.getElementById('name2').value;
		let tel2 = document.getElementById('tel2').value;
		let arrayFirst = {}, arraySecond = {};
		arrayFirst.name = name1;
		arrayFirst.tel = tel1;
		arraySecond.name = name2;
		arraySecond.tel = tel2;
		arrayFirst = JSON.stringify(arrayFirst);
		arraySecond = JSON.stringify(arraySecond);
		if (event.target.getAttribute('data-log') == 1) {
			console.log(arrayFirst);
		} else {
			console.log(arraySecond);
		}	
	}
$(document).ready(function($) {
	let tab = $('.market-tab');
	let close = $('.content-close');

	tab.on('click', function () {
		$('.market-content_active').show();
		$('.market-content').removeClass('market-content_active')
		$('.market-content[data-tab='+$(this).attr('data-tab')+']')
		.toggleClass('market-content_active');
	});
	close.on('click', function () {
		$('.market-content_active').hide();
	})
});
$(document).ready(function($) {
	let link2 = $('#second-but');
	let close2 = $('#second-close');
	let overlay2 = $('#second-back');
	let popup2 = $('.popup2');

	link2.on('click', function () {
		overlay2.show();
		popup2.toggleClass('popup2_active');
	})
	close2.click(function () {
		overlay2.hide();
		popup2.toggleClass('popup2_active');
	})
	overlay2.click(function () {
		overlay2.hide();
		popup2.toggleClass('popup2_active');
	})
});