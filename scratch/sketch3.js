var x = 0;
var forward = true;
var maxSize = 1000;
var yLower = maxSize/2 - 20;
var yUpper = maxSize/2 + 20;

function setup() {
  createCanvas(maxSize,maxSize)
  background(240);
}

var y = maxSize / 2;

function draw() {
  if (forward && x >= width) {
    forward = false
  } else if (!forward && x <= 0){
    forward = true
  }

  y = map(tan(x), -1, 1, yLower, yUpper);

  var r = map(x, 0, width, 150, 180);
  var g = map(y, 0, height, 30, 70);
  var b = map((x + y), 0, width+height, 100, 200);
  var c = color(r,g,b);
  fill(c);

  triangle(x, y, x + 5, y + 5, x - 5, y  + 5);

  if (forward) {
    x += 2;
  } else {
    x -= 2
  }
}
