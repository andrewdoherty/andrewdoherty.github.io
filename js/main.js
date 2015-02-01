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



/* Create a new layer and center it */
var layerA, originX, originY;

layerA = new Layer({
  width: 256,
  height: 256
});

layerA.center();

originX = layerA.x;

originY = layerA.y;

layerA.image = "images/duck.png";

layerA.style = {
  borderRadius: '50%',
  boxShadow: 'inset 0 0 0 10px #fff, 0 4px 12px rgba(0,0,0,0.4)'
};

/* Make the layer draggable */

layerA.draggable.enabled = true;

/* Add an animation to the end of a drag */

layerA.on(Events.DragEnd, function(event, layer) {

  /* Snap back to origin */
  var animation;
  return animation = layer.animate({
    properties: {
      x: originX,
      y: originY
    },
    curve: "spring",
    curveOptions: {
      friction: 20,
      tension: 400,
      velocity: 20
    }
  });
});