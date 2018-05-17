var images = {};


var totalResources = 2;
var numResourcesLoaded = 0;
var fps = 30;

function loadImage(name) {

  images[name] = new Image();
  images[name].onload = function() { 
	  resourceLoaded();
  }
  images[name].src = "images/" + name + ".png";
}

var loading;

function resourceLoaded() {

  numResourcesLoaded += 1;
  if(numResourcesLoaded === totalResources) {
  
	loading = setInterval(redraw, 1000 / fps);
  }
}

var x0 = 0;
var x0 = 0;
var x1 = 0;
var x2 = 0;
var y1 = 0;
var y2 = 0;

var circle = 2*Math.PI;
var rot1 = circle / 500;
var angleInRadians = 0;
var wave = 0

function redraw() {

	
					
	context.drawImage(images["ocean"], -(1 * x1), 0, x0 + (3 * x1), y0 + y1);
	context.translate(0-wave, 0-wave/4)
	context.rotate(angleInRadians);
	context.drawImage(images["vessel_transp"], x1 , y1, x2, y2);
	context.rotate(-angleInRadians);
}

function prepareCanvas(canvasDiv, canvasWidth, canvasHeight)
{
	/**
	canvas = document.createElement('canvas');
	canvas.setAttribute('width', canvasWidth);
	canvas.setAttribute('height', canvasHeight);
	canvas.setAttribute('id', 'canvas');
	canvasDiv.appendChild(canvas);
	
	if(typeof G_vmlCanvasManager != 'undefined') {
		canvas = G_vmlCanvasManager.initElement(canvas);
	}
	*/
	document.body.style.backgroundColor = "#0085C6"
	
	context = canvasDiv.getContext("2d"); 
	
	loadImage("ocean");
	loadImage("vessel_transp");
	x1 = canvasWidth/9;
	x2 = canvasWidth*2/3;
	y1 = canvasHeight/8;
	y2 = canvasHeight/2;
	x0 = canvasWidth;
	y0 = canvasHeight;
}

var rippleInterval = setInterval(updateRipple, 8000 / fps);

var dir = -1;
function updateRipple() { 
	angleInRadians = angleInRadians + (dir * rot1);
	wave = dir * ( x1 / 100 * 1.2);
	if(Math.abs(angleInRadians ) > Math.abs(rot1 * 7)) {
		//angleInRadians = 0;
		dir = -dir;
	}
}


function stopNav() {
	if (rippleInterval != null) {
      clearInterval(rippleInterval);
      rippleInterval = null
      clearInterval(loading);
      loading = null;
	}
};
	
function startNav() {
	if (rippleInterval == null) {
      loading = setInterval(redraw, 1000 / fps);
	  rippleInterval = setInterval(updateRipple, 8000 / fps);
	}
};

	
/**
  this works
  
window.onload = function() {
    var c=document.getElementById("simpleCanvas");
    var ctx=c.getContext("2d");
    ctx.drawImage(images["ocean"],0,0,900,800);
    ctx.drawImage(images["vessel_transp"],100,100,600,400);
};
*/

/**
  this looks nice
  https://stackoverflow.com/questions/3793397/html5-canvas-drawimage-with-at-an-angle

	var x = canvas.width / 2;
	var y = canvas.height / 2;
	var width = image.width;
	var height = image.height;

	context.translate(x, y);
	context.rotate(angleInRadians);
	context.drawImage(image, -width / 2, -height / 2, width, height);
	context.rotate(-angleInRadians);
	context.translate(-x, -y);
  
*/