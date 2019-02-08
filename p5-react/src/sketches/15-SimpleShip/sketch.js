 var polarToCartesian = function(p, radius, theta) {
  let x = radius * p.cos(theta);
  let y = radius * p.sin(theta);

  return p.createVector(x,y);
}


var Ship = function(p, mass=5){
  this.location = p.createVector(p.width/2, p.height/2);
  this.velocity = p.createVector(0,0);
  this.acceleration = p.createVector(0,0);

  this.mass = mass;
  this.size = mass*5;
  this.radius = this.size/2;

  this.angle = p.createVector(0,0);

  this.x = function() {return this.location.x};
  this.y = function() {return this.location.y};

  this.display = function() {
    p.strokeWeight(2)
    p.stroke('hotpink')
    p.fill('orange')
    p.push()
      p.translate(this.x(), this.y());
      // p.ellipse(0,0, this.size)
      // p.rotate(this.angle.y/this.angle.x);

      p.rotate(p.atan2(this.angle.x, -this.angle.y));

      p.triangle(
        0, -50,
        -10,-10,
        10,-10
      )
    p.pop()


    // p.fill(this.borderColor)
    // p.stroke(this.borderColor)
    // p.text(this.score,this.x() - 4, this.y()+4)
    // p.text(this.remainingAmmo(),this.x() - 9, this.y()+34)

  }

  this.applyForce = function(forceV){
    let tempV = p.createVector(forceV.x, forceV.y);
    tempV.div(this.mass);
    this.velocity.add(tempV)
  }

  this.checkEdges = function(x_low, x_high, y_low, y_high) {
    if (this.x() >= x_high - (this.size/2 + 1) ) {
      this.velocity.x *= -0.8;
      this.location.x = x_high - (this.size / 2) - 1;
    }

    if (this.x() <= x_low + (this.size/2 - 1) ) {
      this.velocity.x *= -0.8;
      this.location.x = x_low + (this.size / 2) + 1;
    }

    if (this.y() >= y_high - (this.size/2 + 1)) {
      this.velocity.y *= -0.8
      this.location.y = y_high - (this.size / 2) - 1;
    }
    if (this.y() <= y_low + (this.size/2 + 1)) {
      this.velocity.y *= -0.8
      this.location.y = y_low + (this.size / 2) + 1;
    }
  }

  this.lookAtMouse = function() {
    let mouse = p.createVector(p.mouseX, p.mouseY);
    let newVector = p.createVector(mouse.x, mouse.y);
    newVector.sub(this.location);
    newVector.normalize();
    this.angle = newVector;
  }

  this.checkKeys = function() {
    //w
    // if (p.keyIsDown(87)) {
    //   this.applyForce(p.createVector(0,-1))
    // }

    //s
    if (p.keyIsDown(83)) {
      this.applyForce(p.createVector(this.angle.x,this.angle.y))
    }

    // //d
    // if (p.keyIsDown(68)) {
    //   this.applyForce(p.createVector(1,0))
    // }

    // //a
    // if (p.keyIsDown(65)) {
    //   this.applyForce(p.createVector(-1,0))
    // }

    // //space
    // if (p.keyIsDown(32)) {
    //   p.frameCount % 5 == 0 && p.character.shoot()
    // }
  }

  this.update = function() {
    this.velocity.add(this.acceleration);
    this.location.add(this.velocity);
    this.acceleration.mult(0);
  }
}

var ship;

export default function (p) {
  p.setup = function() {
    p.createCanvas(500, 500);
    ship = new Ship(p);
  }

  p.draw = function() {
    p.background(0);
    ship.display();
    ship.update();
    ship.checkKeys()
    ship.lookAtMouse();
    ship.display();
    ship.checkEdges(0, p.width, 0, p.height);
  }

}
