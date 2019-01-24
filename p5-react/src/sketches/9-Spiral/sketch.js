export default function (p) {
  p.setup = function() {
    p.createCanvas(1000, 1000);
    p.ellipseMode(p.CENTER);
    p.background('LightSteelBlue')
    p.spiralColors = [];
    let colors = [
      'Lavender',
      'Thistle',
      'PaleTurquoise',
      'LightCyan',
      'MintCream',
      'PaleGreen',
      'Azure',
      'Snow',
      'Honeydew',
      'MintCream',
      'Azure',
      'AliceBlue',
      'GhostWhite',
      'WhiteSmoke',
      'Seashell',
      'Beige',
      'OldLace',
      'FloralWhite',
      'Ivory',
      'AntiqueWhite',
      'Linen',
      'LavenderBlush',
      'MistyRose',
      'Violet', //r
      'DodgerBlue', //g
      'MediumSpringGreen' //b
    ]
    for (var i = 0; i < colors.length; i++) {
      let c1 = p.color(colors[i]);
      p.spiralColors[i] = p.color(c1.levels[0],c1.levels[1], c1.levels[2], 130)

    }
  }

  p.theta = 0;
  p.colorIndex = 0;
  p.radius = 0;
  p.shapes = [];
  p.thetaShapeStep = p.PI / p.random(180); // p.PI / 180
  p.radiusStep = p.PI/(Math.floor(p.random(20))) + 0.001; // pi.PI/10
  p.c = 0
  p.last = p.createVector(0,0)
  p.done = false

  p.draw = function() {

    p.background('LightSteelBlue')

    p.fill(0)
    p.stroke(0)
    p.text("Spiral generated with the following characteristics:",25,25)
    p.text(`θ Step: ${p.thetaShapeStep}, Radius Step: ${p.radiusStep}`,25,45)
    p.text("Reload the page to see another random spiral!",25,65)


    p.translate(p.width/2, p.height/2);
    p.rotate(p.theta/12)

    // p.noStroke();
    p.stroke(0);
    p.strokeWeight(0.5);

    if (!p.done) {
      if (p.radius > p.width/2 - 10) {
        p.done = true
      }
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
          // p.fill(0,0,255,50)
          p.stroke(0,0,255,50)
          p.vertex(0, 0);
          p.vertex(workingShape.a.x, workingShape.a.y)
          p.vertex(workingShape.b.x, workingShape.b.y)
        p.endShape(p.CLOSE)
      }
    }

    p.stroke(0);

    for (var i = p.shapes.length - 1; i>0; i--){
      let shape = p.shapes[i];
      p.beginShape()
        // p.noFill()
        // p.fill(255,0,0,50)

        p.stroke(0,0,255,50)
        let c1 = p.spiralColors[shape.c];
        let c2 = p.color(c1.levels[0],c1.levels[1], c1.levels[2], p.map(-p.dist(0,0,shape.a.x,shape.a.y), -p.width/2, 0, 0, 255, true))
        p.fill(c2)

        // p.fill(p.spiralColors[shape.c])
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
