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