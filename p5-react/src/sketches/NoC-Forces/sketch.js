
var Mover = function(p, mass=5){
  this.location = p.createVector(p.random() * p.width/2, p.random() * p.height/2);
  this.velocity = p.createVector(0,0);
  this.acceleration = p.createVector(0,0);

  this.mass = mass;
  this.size = mass*5;

  this.x = function() {return this.location.x};
  this.y = function() {return this.location.y};

  this.display = function() {
    p.strokeWeight(2)
    p.stroke('lightblue')
    p.fill('green')
    p.ellipse(this.x(), this.y(), this.size)
  }

  this.applyForce = function(forceV){
    let tempV = p.createVector(forceV.x, forceV.y);
    tempV.div(this.mass);
    this.velocity.add(tempV)
  }

  this.checkEdges = function(x_low, x_high, y_low, y_high) {
    if (this.x() >= x_high - (this.size/2 + 1) ) {
      this.velocity.x *= -0.9;
      this.location.x = x_high - (this.size / 2);
    }

    if (this.y() >= y_high - (this.size/2 + 1)) {
      this.velocity.y *= -0.9
      this.location.y = y_high - (this.size / 2);
    }
  }

  this.update = function() {
    this.velocity.add(this.acceleration);
    this.location.add(this.velocity);
    this.acceleration.mult(0);
  }

}

export default function (p) {
  p.setup = function() {
    p.createCanvas(1920/2, 1080/2);
    p.ellipseMode(p.CENTER)
    p.movers = [
      new Mover(p,35),
      new Mover(p),
      new Mover(p,10),
      new Mover(p,15),
      new Mover(p,10),
      new Mover(p,9),
      new Mover(p,25)
    ]
  }

  p.floorHeight = 25;

  p.drawFloor = function() {
    p.stroke(255)
    p.fill(151)
    p.rect(-2, p.height - p.floorHeight, p.width + 4, p.floorHeight + 1)
  }

  p.draw = function() {
    p.background(0,0,0,75)
    p.drawFloor()
    let wind = p.createVector(0.2,0);
    for (var i = 0; i<p.movers.length; i++) {
      let m = p.movers[i];
      let gravity = p.createVector(0, 0.2 * m.mass)
      m.applyForce(wind)
      m.applyForce(gravity)
      m.update();
      m.display();
      m.checkEdges(-50, p.width, -50, p.height - p.floorHeight)
    }
  }
}
