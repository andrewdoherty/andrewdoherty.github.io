$(document).ready(function() {
    $('#mainContent').fadeIn(2000);
});

var parent, ink, d, x, y;
$("#container>a").click(function(e){
	element = $(this);
	if(element.find(".drop").length === 0)
		element.prepend("<span class='drop'></span>");

	drop = element.find(".drop");
	drop.removeClass("animate");

	if(!drop.height() && !drop.width())
	{
		d = Math.max(element.outerWidth(), element.outerHeight());
		drop.css({height: d, width: d});
	}

	x = e.pageX - element.offset().left - drop.width()/2;
	y = e.pageY - element.offset().top - drop.height()/2;

	//set the position and add class .animate
	drop.css({top: y+'px', left: x+'px'}).addClass("animate");
});



