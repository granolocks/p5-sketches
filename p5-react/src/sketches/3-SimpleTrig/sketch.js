export default function (p) {
  p.x = 0;
  p.ycos = 0;
  p.ysin = 0;
  p.ytan = 0;
  p.yatan = 0;
  p.maxHeight = 480;
  p.maxWidth = 1080;

  p.scaleFactor = 10;

  p.cosWave = [];
  p.sinWave = [];
  p.tanWave = [];
  p.atanWave = [];

  p.yLower =  p.maxHeight/2 - 100;
  p.yUpper =  p.maxHeight/2 + 100;

  p.setup = function() {
    p.createCanvas(p.maxWidth,p.maxHeight)
    p.background(0);
    p.stroke(255);
    p.strokeWeight(.5);
    p.line(0,p.maxHeight/2, p.maxWidth, p.maxHeight/2)
    p.line(p.maxWidth/2,0, p.maxWidth/2, p.maxHeight)
    p.strokeWeight(0.25)
    p.stroke('hotpink')
    var oneLineHeight = ((p.maxHeight / 2) - (p.scaleFactor * 10));
    p.line(0, oneLineHeight, p.maxWidth, p.oneLineHeight)
    p.line(0, p.maxHeight - oneLineHeight, p.maxWidth, p.maxHeight - oneLineHeight)
    p.stroke(255);
    p.strokeWeight(.5);
    for (var i = 0; i < p.maxWidth / p.scaleFactor; i++) {
      p.line(i*p.scaleFactor, p.maxHeight/2, i*p.scaleFactor, (p.maxHeight/2) + 5)
      p.line(p.maxWidth/2, i*p.scaleFactor, (p.maxWidth/2) + 5, i*p.scaleFactor)
      p.fill(255);
      var yDist = p.dist(p.maxWidth/2, p.maxHeight/2, p.maxWidth/2, i*p.scaleFactor);
      if (yDist % 100 === 0) {
        var yPrintVal = yDist / 100 ; // map(i, 0, maxHeight, 10, -10)
        if (i * p.scaleFactor > p.maxHeight/2) { yPrintVal = yPrintVal * -1}
        p.text(yPrintVal, p.maxWidth/2+ 10, i*p.scaleFactor + 5)
      }

      var xDist = p.dist(p.maxWidth/2, p.maxHeight/2, i* p.scaleFactor, p.maxHeight/2);
      if (xDist % 100 === 0) {
        var xPrintVal = xDist / 100 ; // map(i, 0, maxHeight, 10, -10)
        if (i * p.scaleFactor < p.maxWidth/2) { xPrintVal = xPrintVal * -1}
        p.text(xPrintVal, i*p.scaleFactor - 5, p.maxHeight / 2 + 20)
      }
    }

    p.noStroke();

    p.fill('red');
    p.rect(0, 0, 35, 15)
    p.fill(0);
    p.text('cos', 5, 10);

    p.fill('lightblue');
    p.rect(0, 15, 35, 15);
    p.fill(0);
    p.text('sine', 5, 25);

    p.fill('yellow');
    p.rect(0, 30, 35, 15);
    p.fill(0);
    p.text('tan', 5, 40);

    p.fill('hotpink');
    p.rect(0, 45, 35, 15);
    p.fill(0);
    p.text('atan', 5, 55);

  }

  p.draw = function() {
    for (var i = 0; i <= 20; i ++){

      if (p.cosWave.length >=  p.maxWidth) {
        console.log('done');
        p.noLoop()
      }

      p.stroke(255);
      p.strokeWeight(.5);

      var calcX =  p.map(p.x, 0, p.maxWidth, -1 * p.scaleFactor, p.scaleFactor )

      p.cosWave.push( p.map( p.cos(calcX), -1, 1, p.yUpper, p.yLower));
      p.sinWave.push( p.map( p.sin(calcX), -1, 1, p.yUpper, p.yLower));
      p.tanWave.push( p.map( p.tan(calcX), -1, 1, p.yUpper, p.yLower));
      p.atanWave.push( p.map( p.atan(calcX), -1, 1, p.yUpper, p.yLower  ));

      p.noFill();

      var waves = [ p.cosWave, p.sinWave, p.tanWave, p.atanWave ]

      var colors = [ 'red', 'lightblue', 'yellow', 'hotpink' ]

      for (var n = 0; n < waves.length; n++) {
        p.stroke(colors[n]);
        p.beginShape();
        p.noFill();
        for (let i = 0; i < waves[n].length; i++) {
          p.vertex(i, waves[n][i]);
        }
        p.endShape();
      }

       p.x += 1
    }
  }
}
