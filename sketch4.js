var x = 0;
var ycos, ysin, ytan, yatan;
var maxHeight = 480;
var maxWidth = 1080;

var scaleFactor = 10;

var cosWave = [];
var sinWave = [];
var tanWave = [];
var atanWave = [];

var yLower = maxHeight/2 - 100;
var yUpper = maxHeight/2 + 100;

function setup() {
  createCanvas(maxWidth,maxHeight)
  background(0);
  stroke(255);
  strokeWeight(.5);
  line(0,maxHeight/2, maxWidth, maxHeight/2)
  line(maxWidth/2,0, maxWidth/2, maxHeight)
  strokeWeight(0.25)
  stroke('hotpink')
  var oneLineHeight = ((maxHeight / 2) - (scaleFactor * 10));
  line(0, oneLineHeight, maxWidth, oneLineHeight)
  line(0, maxHeight - oneLineHeight, maxWidth, maxHeight -oneLineHeight)

  stroke(255);
  strokeWeight(.5);
  for (var i = 0; i < maxWidth / scaleFactor; i++) {
    line(i*scaleFactor, maxHeight/2, i*scaleFactor, (maxHeight/2) + 5)
    line(maxWidth/2, i*scaleFactor, (maxWidth/2) + 5, i*scaleFactor)
    fill(255);
    yDist = dist(maxWidth/2, maxHeight/2, maxWidth/2, i*scaleFactor);
    if (yDist % 100 == 0) {
      var yPrintVal = yDist / 100 ; // map(i, 0, maxHeight, 10, -10)
      if (i * scaleFactor > maxHeight/2) { yPrintVal = yPrintVal * -1}
      text(yPrintVal, maxWidth/2+ 10, i*scaleFactor + 5)
    }

    xDist = dist(maxWidth/2, maxHeight/2, i*scaleFactor, maxHeight/2);
    if (xDist % 100 == 0) {
      var xPrintVal = xDist / 100 ; // map(i, 0, maxHeight, 10, -10)
      if (i * scaleFactor < maxWidth/2) { xPrintVal = xPrintVal * -1}
      text(xPrintVal, i*scaleFactor - 5, maxHeight / 2 + 20)
    }
  }

  noStroke();

  fill('red');
  rect(0, 0, 35, 15)
  fill(0);
  text('cos', 5, 10);

  fill('lightblue');
  rect(0, 15, 35, 15);
  fill(0);
  text('sine', 5, 25);

  fill('yellow');
  rect(0, 30, 35, 15);
  fill(0);
  text('tan', 5, 40);

  fill('hotpink');
  rect(0, 45, 35, 15);
  fill(0);
  text('atan', 5, 55);

}

function draw() {
  for (var i = 0; i <= 20; i ++){

    if (cosWave.length >= maxWidth) {
      console.log('done');
      noLoop()
    }

    stroke(255);
    strokeWeight(.5);

    calcX = map(x, 0, maxWidth, -1 * scaleFactor, scaleFactor )

    cosWave.push(map(cos(calcX), -1, 1, yUpper, yLower));
    sinWave.push(map(sin(calcX), -1, 1, yUpper, yLower));
    tanWave.push(map(tan(calcX), -1, 1, yUpper, yLower));
    atanWave.push(map(atan(calcX), -1, 1, yUpper, yLower  ));

    noFill();

    var waves = [ cosWave, sinWave, tanWave, atanWave ]

    var colors = [ 'red', 'lightblue', 'yellow', 'hotpink' ]

    for (var n = 0; n < waves.length; n++) {
      stroke(colors[n]);
      beginShape();
       noFill();
       for (let i = 0; i < waves[n].length; i++) {
         vertex(i, waves[n][i]);
       }
      endShape();
    }

    x += 1
  }
}
