$(document).ready(function() {
 	var link = $('.form__btn1'),
 	overlay = $('.form__overlay1'),
 	close = $('.close1'),
 	modal = $('.modalen1');
 	link.on('click', function () {
 	overlay.show();
 	modal.toggleClass('modalen1_active');
 	});
	close.click(function() {
	overlay.hide();
	modal.toggleClass('modalen1_active');
	});
});
$(document).ready(function() {
	var tab = $('.tab'),
	close = $('.close');
	tab.on('click', function () {
	$('.content_active').show();
    $('.content').removeClass('content_active');  
    $('.content[data-tab='+$(this).attr('data-tab')+']')
    .toggleClass('content_active');
	});
	close.on('click', function() {
	$('.content_active').hide();	
	} )
});
$(document).ready(function() {
	var link = $('.form__btn2'),
	overlay =  $('.form__overlay2'),
	modal =  $('.modalen2'),
	close = $('.close2');
	link.on('click', function () {
	overlay.show();
	modal.toggleClass('modalen2_active');
 	});
	close.click(function() {
	overlay.hide();
	modal.toggleClass('modalen2_active');
	});
});



