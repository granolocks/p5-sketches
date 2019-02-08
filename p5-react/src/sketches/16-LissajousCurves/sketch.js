const size = 100; // px
const circleRadius = 45; //p

var vertices = {
  x: [
    null, [], [], [], [],
    [], [], [], [], [],
    []
  ],
  y: [
    null, [], [], [], [],
    [], [], [], [], [],
    []
  ]
}

var anglesX = [
  null, 0, 0, 0, 0,
  0, 0, 0, 0, 0,
]

var anglesY = [
  null, 0, 0, 0, 0,
  0, 0, 0, 0, 0,
]

var anglesV = [
  0, 0.02, 0.03, 0.04, 0.05,
  0.06, 0.07, 0.08, 0.09, 0.1
]

var polarToCartesian = function(p, radius, theta) {
  let x = radius * p.cos(theta);
  let y = radius * p.sin(theta);

  return p.createVector(x,y);
}


export default function (p) {
  p.setup = function() {
    p.createCanvas(1000, 1000);
    p.ellipseMode(p.CENTER);
    p.colorMode(p.HSB, 100);
  }

  p.draw = function() {
    p.background(0)
    p.strokeWeight(1);
    p.stroke(121)
    for (var i=1; i<=10; i++){
      p.line(i*size, 0, i*size, p.height)
      p.line(0,i*size, p.width, i*size)

      p.noFill()
      let pts;
      p.push()
        p.translate((i*size)+(size/2), size/2);
        pts = polarToCartesian(p, circleRadius, anglesX[i]);
        vertices.x[i].push(pts.x)
        p.ellipse(pts.x, pts.y, 5,5)
        p.ellipse(0,0,circleRadius*2, circleRadius*2)
        p.translate(size/2,(i+1)*(size/2));
        anglesX[i] += anglesV[i]*2
      p.pop()

      p.push()
        p.translate(size/2, (i*size)+(size/2));
        pts = polarToCartesian(p, circleRadius, anglesY[i]);
        vertices.y[i].push(pts.y)
        p.ellipse(pts.x, pts.y, 5,5)
        p.ellipse(0,0,circleRadius*2, circleRadius*2)
        anglesY[i] += anglesV[i]*2
      p.pop()
    }
    let ellipseX;
    let ellipseY;
    for (var i=1; i<10; i++){
      for (var j=1; j<10; j++) {
        ellipseX = vertices.x[i].slice(-1)[0]
        ellipseY = vertices.y[j].slice(-1)[0]
        p.stroke(50)
        p.strokeWeight(.5)
        p.line((i*size)+(size/2) + ellipseX, 0, (i*size)+(size/2) + ellipseX, p.height);
        p.line(0, (j*size)+(size/2) + ellipseY, p.width, (j*size)+(size/2) + ellipseY,);

        p.push()
        p.translate((i*size)+(size/2), (j*size)+(size/2));
        let h = p.map(i+j, 2, 22, 0, 100)
        p.stroke(h, 100, 50)
        p.strokeWeight(2);
        p.beginShape();
        for (var xi=0; xi<=vertices.x[i].length; xi++) {
          p.vertex(vertices.x[i][xi], vertices.y[j][xi])
        }
        p.endShape();
        p.ellipse(ellipseX, ellipseY, 5,5)
        p.pop()

      }
    }

    // max 10 rotations
    if (anglesX[9] >= p.TWO_PI * 10) {
      console.log("DONE")
      p.noLoop()
    }
  }
}
