$(document).ready(function() {
	var tab = $('.tab');
   	//var content = $('.container-contents');
	tab.on('mouseenter', function () {
		//$('content_active').show();
		$('.content').removeClass('content_active');  
    	$('.content[data-tab='+$(this).attr('data-tab')+']')
    	.toggleClass('content_active');
	});
	//content.on('mouseleave', function () {
		//$('content_active').hide();
	//});
});
