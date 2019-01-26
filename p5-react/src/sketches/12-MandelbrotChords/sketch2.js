export default function (p) {
  p.circleSegments = 200;
  p.pts = [];
  p.radius = 290;
  p.timesTable = 2;

  p.calcConnection = function(i) {
    return (p.timesTable*i)%p.circleSegments
  }

  p.polarToCartesian = function (radius, theta) {
    let x = radius * p.cos(theta);
    let y = radius * p.sin(theta);

    return p.createVector(x,y);
  }

  p.setup = function() {
    p.createCanvas(600, 600);
    p.background(0);
    p.ellipseMode(p.CENTER)
    p.colorMode(p.HSB, 100);
    for (var i = 0; i < p.circleSegments; i++) {
      let t = p.TWO_PI / p.circleSegments * i;
      p.pts.push(p.polarToCartesian(p.radius,t));
    }
  }


  p.current = 0;
  p.lines = []
  p.draw = function() {
    p.background(0)
    p.fill(255)
    p.stroke(255)
    p.text(`${p.timesTable} * n`, 10, 20)
    p.translate(p.width/2,p.height/2)
    p.noFill()
    p.stroke(255)
    p.ellipse(0,0,p.radius*2,p.radius*2)
    p.fill(255)

    for (var i = 0; i < p.circleSegments-1; i++) {
      let xy = p.pts[i];
      p.ellipse(xy.x,xy.y,2,2)
    }

    if(p.current < p.circleSegments){
      let p1 = p.pts[p.current]
      let p2 = p.pts[p.calcConnection(p.current)]
      p.lines[p.current] = [p1, p2]
      for (var i = 0; i < p.lines.length; i++ ) {
        let h = p.map(i, 0, p.circleSegments, 0, 100)
        p.stroke(h, 100, 50)
        let pp1 = p.lines[i][0]
        let pp2 = p.lines[i][1]
        p.line(pp1.x, pp1.y, pp2.x, pp2.y)
      }
      p.current++
    } else {
      p.current = 0;
      p.timesTable++
    }
  }
}
