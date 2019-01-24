export default function (p) {
  p.setup = function() {
    p.createCanvas(1000, 1000);
    p.ellipseMode(p.CENTER)
    p.spiralColors = [];
    let colors = [
      'LightCoral',
      'Moccasin',
      'PaleTurquoise',
      'OldLace',
      'Cornsilk',
      'PaleGreen',
      'Azure',
    ]

    for (var i = 0; i < colors.length; i++) {
      let c1 = p.color(colors[i]);
      p.spiralColors[i] = p.color(c1.levels[0],c1.levels[1], c1.levels[2], 75)
    }
  }

  p.theta = 0;
  p.colorIndex = 0;
  p.radius = 1;
  p.shapes = [];
  p.thetaShapeStep = p.PI / 180;
  p.radiusStep = 0.1
  p.c = 0
  p.last = p.createVector(0,0)

  p.draw = function() {
    p.translate(p.width/2, p.height/2);
    p.background(0)
    // p.noStroke();
    p.stroke(255);
    p.strokeWeight(0.2);

    let current = p.createVector(p.sin(p.theta) * p.radius, p.cos(p.theta) * p.radius)
    let workingShape = {
      a: p.createVector(p.last.x, p.last.y),
      b: p.createVector(current.x, current.y),
      c: p.colorIndex
    };

    if (p.c % 12 == 0) {
      p.shapes.push(workingShape);
      p.last = current;
      if (p.colorIndex == p.spiralColors.length -1) {
        p.colorIndex = 0;
      } else {
        p.colorIndex = Math.floor(p.random(p.spiralColors.length))
      }
    } else {
      p.beginShape()
        p.fill(p.spiralColors[workingShape.c])
        p.vertex(0, 0);
        p.vertex(workingShape.a.x, workingShape.a.y)
        p.vertex(workingShape.b.x, workingShape.b.y)
      p.endShape(p.CLOSE)
    }

    for (var i = p.shapes.length - 1; i>0; i--){
      let shape = p.shapes[i];
      p.beginShape()
        p.fill(p.spiralColors[shape.c])
        p.vertex(0, 0);
        p.vertex(shape.a.x, shape.a.y)
        p.vertex(shape.b.x, shape.b.y)
      p.endShape(p.CLOSE)
    }

    p.c++
    p.theta +=  p.thetaShapeStep
    p.radius += p.radiusStep
  }
}
