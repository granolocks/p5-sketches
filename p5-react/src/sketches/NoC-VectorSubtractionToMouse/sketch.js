export default function (p) {
  p.setup = function() {
    p.createCanvas(1000, 600);

  }

  p.draw = function() {
    let center = p.createVector(p.width/2,p.height/2);
    let mouse = p.createVector(p.mouseX, p.mouseY);
    p.background(0);

    let newVector = p.createVector(mouse.x, mouse.y);
    newVector.sub(center);

    // TODO p5 is undefined, need this to work.
    // let newVector = p5.Vector.sub(mouse, center);

    p.translate(center.x,center.y);
    p.stroke(151);
    p.line(-center.x,0,center.x, 0);
    p.line(0,-center.y, 0, center.y);
    p.line(0,0, newVector.x, newVector.y);
    p.stroke('Crimson');
    p.line(newVector.x, 0, newVector.x, newVector.y);
    p.stroke('SlateBlue');
    p.line(0, 0, newVector.x, 0);
  }
}
