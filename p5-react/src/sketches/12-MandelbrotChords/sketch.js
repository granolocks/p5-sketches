export default function (p) {
  p.circleSegments = 200;
  p.pts = [];
  p.radius = 290;
  p.timesTable = 53;

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

  p.current=0;
  p.done = false;
  p.draw = function() {
    if(!p.done){
      p.translate(p.width/2,p.height/2)
      p.noFill()
      p.stroke(255)
      p.ellipse(0,0,p.radius*2,p.radius*2)
      p.fill(255)
      for (var i = 0; i < p.circleSegments-1; i++) {
        let xy = p.pts[i];
        p.ellipse(xy.x,xy.y,5,5)
      }

      if(p.current < p.circleSegments){
        let p1 = p.pts[p.current]
        let p2 = p.pts[p.calcConnection(p.current)]
        let h = p.map(p.current, 0, p.circleSegments, 0, 100)
        p.stroke(h, 100, 50)
        p.line(p1.x, p1.y, p2.x, p2.y)
        p.current++
      } else { p.done = !p.done}

    }
  }
}
