export default function (p) {
  p.setup = function() {
    p.createCanvas(800,400, 200);
    p.ellipseMode(p.CENTER)
  }
  p.polarToCartesian = function (radius, theta) {
    let x = radius * p.cos(p.theta);
    let y = radius * p.sin(p.theta);
    return p.createVector(x,y);
  }

  p.radius = 190;
  p.theta = 0;
  p.thetaVel = 0.02
  p.pts = []
  p.draw = function() {
    p.strokeWeight(1)
    p.background(0);
    p.stroke('lightblue');
    p.line(0,p.height/2, p.width,p.height/2)
    p.translate(p.radius + 10, p.height/2)
    p.noFill()
    p.ellipse(0,0, p.radius,p.radius)
    p.line( p.radius / 2 + 10, -p.height/2, p.radius / 2 + 10, p.height/2)
    p.line( 0, -p.height/2, 0, p.height/2)
    let xy = p.polarToCartesian(p.radius/2, p.theta)
    p.pts.unshift(xy)
    p.pts = p.pts.filter(function(pt){return pt.x < p.width})
    p.line(0,0, xy.x, xy.y)
    p.fill('lightblue')
    p.ellipse(xy.x, xy.y, 5, 5)
    p.ellipse(p.radius / 2 + 10, xy.y, 5, 5)
    p.ellipse(p.radius / 2 + 10, xy.x, 5, 5)
    p.strokeWeight(3);
    p.stroke('orange')
    p.line(xy.x,0, xy.x,xy.y)

    p.beginShape()
      p.noFill()
      // p.fill(0,0,255,50)
      p.stroke('orange')
      // p.vertex(xy.x, xy.y);
      for (var i = 0; i < p.pts.length; i ++) {
        p.vertex(i + p.radius /2 + 10, p.pts[i].y)
      }
    p.endShape()

    p.stroke('hotpink')
    p.line(0,0, xy.x,0)

    p.beginShape()
      p.noFill()
      // p.fill(0,0,255,50)
      // p.vertex(xy.x, xy.y);
      for (var i = 0; i < p.pts.length; i ++) {
        p.vertex(i + p.radius /2 + 10, p.pts[i].x)
      }
    p.endShape()
    p.stroke('lightblue')
    p.strokeWeight(1)
    p.fill('lightblue')
    p.ellipse(xy.x, 0, 5, 5)
    p.ellipse(0, 0, 5, 5)

    p.theta -= p.thetaVel
  }
}
