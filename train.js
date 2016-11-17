var width = 1000;
var height = 400;
var x;
var bgCanvas = document.getElementById('tutoriel1');
var bgCtx = bgCanvas.getContext('2d');
var fgCanvas = document.getElementById('tutoriel2');
var fgCtx = fgCanvas.getContext('2d');

function draw() {
  x = 0;
  background(bgCtx);
  bridge(bgCtx, height / 10);

  window.requestAnimationFrame(train);
}

function train() {
  var y = height - (height / 10) - 10;
  fgCtx.clearRect(0, 0, width, height);
  fgCtx.beginPath();
  fgCtx.rect(x, y, 30, 10);
  fgCtx.fillStyle = "black";
  fgCtx.fill();
  ++x;
  if (x > width) draw();
  else window.requestAnimationFrame(train);
}

function background(ctx) {
  bgCtx.clearRect(0, 0, width, height);
  var nbLayers = getRandomInt(1, 11);
  debugger;
  for (var i = nbLayers; i > 0; --i) {
    ctx.fillStyle = "hsl(0, 0%, " +  i * 10 + "%)";
    drawMountainLine(ctx, height - (i * (height / nbLayers) - (nbLayers / 10)));
  }
}

function drawSlope(ctx, x, y) {
  ctx.lineTo(x, y);
  return {
    x: getRandomInt(x, x + 5),
    y: getRandomInt(y + 6, y - 5)
  };
}

function drawMountainLine(ctx, startY) {
  var x = 0;
  var y = startY;
  ctx.beginPath();
  ctx.moveTo(x, y);
  while(x < width) {
    var ret = drawSlope(ctx, x, y);
    x = ret.x;
    y = ret.y;
  }
  ctx.lineTo(x, width);
  ctx.lineTo(0, width);
  ctx.lineTo(0, startY);
  ctx.fill();
}

function bridge(ctx, bridgeHeight) {
	var x = getRandomInt(0, 10) % 2 === 0 ? getRandomInt(0, 10) : getRandomInt(0, 50) * -1;
	var archWidth = bridgeHeight * 1.5;
	ctx.beginPath();
	ctx.moveTo(0, height - bridgeHeight);
	ctx.lineTo(0, height);
	while ( x < width) {
		arch(ctx, x, bridgeHeight, archWidth);
		x += archWidth + 10;
	}
	ctx.lineTo(width, height - bridgeHeight);
	ctx.closePath();
	ctx.stroke();
	ctx.fillStyle = "#fff";
	ctx.fill();
}

function arch(ctx, startX, bridgeHeight, archWidth) {
	ctx.lineTo(startX, height);
	ctx.bezierCurveTo(startX, height - bridgeHeight, startX + archWidth, height - bridgeHeight, startX + archWidth, height);
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

draw();

