function Accelerator(p, xOffset, color, acceleration=false){
  this.spacing = 100;
  this.size = 50;
  this.xOffset = xOffset;
  this.color = color;

  this.offset = function() {
    return this.spacing*this.xOffset
  }

  this.location = p.createVector(0, this.offset()-this.size);
  this.velocity = p.createVector(0,0);

  if (acceleration) {
    this.acceleration = acceleration;
  } else {
    this.acceleration = p.createVector(0.01,0);
  }


  this.display = function(){
    p.stroke(151);
    p.line(0,this.offset(),p.width,this.offset());
    p.fill(this.color);
    p.rect(this.location.x, this.location.y, this.size, this.size);
  }

  this.step = function(){
    this.velocity.add(this.acceleration);
    this.location.add(this.velocity)
  }

  this.edges = function() {
    if (this.location.x > p.width) {
      this.location.x = -this.size;
    } else if (this.location.x < -this.size) {
      this.location.x = p.width;
    }
  }

  this.doGo = function(){
    this.step();
    this.edges()
    this.display();
  }
}
var keyVal = 0;
function LeftRightKeys(p, xOffset, color, acceleration=false) {
  // Chain constructor with call
  Accelerator.call(this, p, xOffset, color, acceleration);

  // Add a new property
  this.step = function(){
    if (keyVal === -1) {
      this.velocity.sub(this.acceleration);
    } else if (keyVal === 1) {
      this.velocity.add(this.acceleration);
    }
    this.location.add(this.velocity)
  }
}

function MouseChaser(p, xOffset, color, acceleration=false) {
  // Chain constructor with call
  Accelerator.call(this, p, xOffset, color, acceleration);

  // Add a new property
  this.step = function(){
    let currentV = p.createVector(this.location.x, this.location.y);
    let targetV = p.createVector(p.mouseX, this.location.y);
    targetV.sub(currentV)
    if (targetV.mag() > 10) {
      let m = targetV.mag()
      targetV.normalize()
      targetV.mult(0.001 * m)
      this.acceleration = targetV;
    } else {
      this.accelleration = p.createVector(0,0)
      if (this.velocity.mag() < 5){
        this.velocity = p.createVector(0,0)
      }
    }
    this.velocity.add(this.acceleration);
    this.location.add(this.velocity)
  }

  // dont wrap edges on this one
  this.edges = function() {}
}

export default function (p) {
  p.accelerators = [
    new Accelerator(p, 1, 'MediumTurquoise'),
    new Accelerator(p, 2, 'Coral', p.createVector(0.001,0)),
    new LeftRightKeys(p, 3, 'hotpink', p.createVector(0.1,0)),
    new MouseChaser(p, 4, 'Gainsboro')
  ];

  p.setup = function() {
    p.createCanvas(1000, 600);
  }

  p.keyPressed = function() {
    if (p.keyCode === p.LEFT_ARROW) {
      keyVal = -1;
    } else if (p.keyCode === p.RIGHT_ARROW) {
      keyVal = 1;
    }
  }

  p.keyReleased = function() {
    keyVal = 0;
  }

  p.draw = function() {
    p.background(0);
    for (var i = 0; i < p.accelerators.length; i++) {
      p.accelerators[i].doGo();
    }
  }
}
