// https://oeis.org/search?q=recaman&language=english&go=Search
var recamanSequence = [
  0, 1, 3, 6, 2, 7, 13, 20, 12, 21, 11, 22, 10, 23, 9, 24, 8, 25, 43, 62, 42,
  63, 41, 18, 42, 17, 43, 16, 44, 15, 45, 14, 46, 79, 113, 78, 114, 77, 39, 78,
  38, 79, 37, 80, 36, 81, 35, 82, 34, 83, 33, 84, 32, 85, 31, 86, 30, 87, 29,
  88, 28, 89, 27, 90, 26, 91, 157, 224, 156, 225, 155, 226, 154, 227, 153, 228,
  152, 75, 153, 74, 154, 73, 155, 72, 156, 71, 157, 70, 158, 69, 159, 68, 160,
  67, 161, 66, 162, 65, 163, 64, 164, 265, 367, 264, 368, 263, 369, 262, 370,
  261, 151, 40, 152, 265, 379, 494, 378, 495, 377, 258, 138, 259, 137, 260,
  136, 261, 135, 262, 134, 5, 135, 4, 136, 269, 403, 268, 132, 269, 131, 270,
  130, 271, 129, 272, 128, 273, 127, 274, 126, 275, 125, 276, 124, 277, 123,
  278, 122, 279, 121, 280, 120, 281, 119, 282, 118, 283, 117, 284, 116, 285
]

var canvasWidth      = 1000,
    canvasHeight     = 1440,
    xMargin          = 75,
    recamanMaxNumber = Math.max(...recamanSequence),
    graphLength      = canvasWidth - (2 * xMargin);

function setup() {
  createCanvas(canvasWidth, canvasHeight);
  background(0);
  frameRate(30);
  strokeWeight(0.75);
  stroke('hotpink');
  line(0, canvasHeight/2, canvasWidth, canvasHeight/2)
}

var up = true;
var i = 0;

function draw() {
  if (i < recamanSequence.length) {
  // for (i = 0; i < recamanSequence.length - 1; i++ ) {

    noFill();
    stroke(255);
    y = canvasHeight / 2;

    x1 = map(
      recamanSequence[i],
      0, recamanMaxNumber,
      xMargin, canvasWidth - xMargin
    );

    x2 = map(
      recamanSequence[i + 1],
      0, recamanMaxNumber,
      xMargin, canvasWidth - xMargin
    );

    arcSize = dist(x1, 0, x2, 0);

    var r = map(arcSize, 0, graphLength, 0, 100)
    var g = map(arcSize, 0, graphLength, 150, 0)
    var b = map(arcSize, 0, graphLength, 0, 255)
    var c = color(r,g,b);

    strokeWeight(2);
    stroke(c);

    var arcArgs;
    var arcX;
    if (x1 < x2) {
      arcX = x1 + arcSize/2;
      if (up) {
        arcArgs = [arcX, y, arcSize, arcSize, PI, 0]
      } else {
        arcArgs = [arcX, y, arcSize, arcSize, 0, PI]
      }
    } else {
      arcX = x1 - arcSize/2;
      if (up) {
        arcArgs = [arcX, y, arcSize, arcSize, PI, 0]
      } else {
        arcArgs = [arcX, y, arcSize, arcSize, 0, PI]
      }
    }

    arc(...arcArgs)
    up = !up;
    i++
  }
}
