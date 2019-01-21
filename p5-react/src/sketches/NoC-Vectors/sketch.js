export default function (p) {
  p.setup = function() {
    p.createCanvas(1000, 600);

  }
  // draw an arrow for a vector at a given base position
  p.drawArrow = function(base, vec, myColor) {
    p.push();
    p.stroke(myColor);
    p.strokeWeight(5);
    p.fill(myColor);
    // p.translate(base.x, base.y);
    p.line(0, 0, vec.x, vec.y);
    p.rotate(vec.heading());
    let arrowSize = 8;
    p.translate(vec.mag() - arrowSize, 0);
    p.triangle(0, arrowSize / 2, 0, -arrowSize / 2, arrowSize, 0);
    p.pop();
  }

  p.draw = function() {
    let center = p.createVector(p.width/2,p.height/2);

    p.background(0)
    p.stroke(151);
    p.translate(center.x,center.y);
    p.line(-center.x,0,center.x, 0);
    p.line(0,-center.y, 0, center.y);

    let mouse = p.createVector(p.mouseX, p.mouseY);
    let newV = p.createVector(mouse.x, mouse.y);
    newV.sub(center)


    let v1 = p.createVector(100,-50);
    let v3 = p.createVector(v1.x, v1.y);
    v3.sub(newV)

    p.drawArrow(center, v1, 'Chartreuse')
    p.drawArrow(center, newV, 'DarkOrange')
    p.push()
    p.translate(newV.x, newV.y)
    p.drawArrow(newV,v3,'MediumTurquoise')
    p.pop()
  }
}
