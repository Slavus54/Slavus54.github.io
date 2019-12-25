$(document).ready(function($) {
	var tab = $('.tab');

	tab.on('click', function () {
		$('.content').removeClass('content_active');
		$('.content[data-tab='+$(this).attr('data-tab')+']')
		.toggleClass('content_active');
		$('.tab').removeClass('tab_active');
		$('.tab[data-tab='+$(this).attr('data-tab')+']').toggleClass('tab_active');
	})	
});