export default function (p) {

  // https://oeis.org/search?q=recaman&language=english&go=Search
  p.recamanSequence = [
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

  p.canvasWidth      = 2000;
  p.canvasHeight     = 1440;
  p.xMargin          = 75;
  p.recamanMaxNumber = Math.max(...p.recamanSequence);
  p.graphLength      = p.canvasWidth - (2 * p.xMargin);

  p.setup = function() {
    p.createCanvas(p.canvasWidth, p.canvasHeight);
    p.background(0);
    p.frameRate(30);
    p.strokeWeight(0.75);
    p.stroke('hotpink');
    p.line(0, p.canvasHeight/2, p.canvasWidth, p.canvasHeight/2)
  }

  p.up = true;
  p.i = 0;

  p.draw = function() {
    if (p.i < p.recamanSequence.length) {
    // for (i = 0; i < recamanSequence.length - 1; i++ ) {

      p.noFill();
      p.stroke(255);
      let y = p.canvasHeight / 2;

      let x1 = p.map(
        p.recamanSequence[p.i],
        0, p.recamanMaxNumber,
        p.xMargin, p.canvasWidth - p.xMargin
      );

      let x2 = p.map(
        p.recamanSequence[p.i + 1],
        0, p.recamanMaxNumber,
        p.xMargin, p.canvasWidth - p.xMargin
      );

      let arcSize = p.dist(x1, 0, x2, 0);

      var r = p.map(arcSize, 0, p.graphLength, 0, 100)
      var g = p.map(arcSize, 0, p.graphLength, 150, 0)
      var b = p.map(arcSize, 0, p.graphLength, 0, 255)
      var c = p.color(r,g,b);

      p.strokeWeight(2);
      p.stroke(c);

      var arcArgs;
      var arcX;
      if (x1 < x2) {
        arcX = x1 + arcSize/2;
        if (p.up) {
          arcArgs = [arcX, y, arcSize, arcSize, p.PI, 0]
        } else {
          arcArgs = [arcX, y, arcSize, arcSize, 0, p.PI]
        }
      } else {
        arcX = x1 - arcSize/2;
        if (p.up) {
          arcArgs = [arcX, y, arcSize, arcSize, p.PI, 0]
        } else {
          arcArgs = [arcX, y, arcSize, arcSize, 0, p.PI]
        }
      }

      p.arc(...arcArgs)
      p.up = !p.up;
      p.i++
    }
  }
}
