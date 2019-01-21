function Bouncer(p, location, velocity, color, size = 30) {
  this.location = location;
  this.velocity = velocity;
  this.color = color;
  this.size = size;

  this.doGo = function() {
    this.step();
    this.edges();
    this.display();
  }
  
  this.display = function(){
    // draw pretty grid lines
    p.stroke(55)
    p.line(0, this.location.y, p.width, this.location.y)
    p.line(this.location.x, 0, this.location.x, p.height )
    p.line(p.width/2, p.height/2, this.location.x, this.location.y)

    // draw directional vector
    p.stroke(151)
    let tempLoc = p.createVector(this.velocity.x, this.velocity.y)
    tempLoc.normalize();
    tempLoc.setMag(45)
    p.line(this.location.x, this.location.y, this.location.x + tempLoc.x, this.location.y + tempLoc.y)

    // draw ellipse
    p.stroke(0)
    p.fill(this.color)
    p.ellipse(this.location.x, this.location.y, this.size, this.size)
  }

  this.step = function(){
    this.location.add(this.velocity)
  }

  this.edges = function() {
    if (this.location.x > p.width || this.location.x < 0) {
       this.velocity.x = this.velocity.x * -1
    }

    if (this.location.y > p.height || this.location.y < 0) {
      this.velocity.y = this.velocity.y * -1
    }
  }
}

export default function (p) {
  p.setup = function() {
    p.createCanvas(1000, 500);
    p.bouncers = [
      new Bouncer(
        p,
        p.createVector(p.width/2, p.height/2),
        p.createVector(1, 2),
        'LightSeaGreen',
        22
      ),
      new Bouncer(
        p,
        p.createVector(p.width/2-60, p.height/2+100),
        p.createVector(3, -2),
        'LavenderBlush',
        12
      ),
      new Bouncer(
        p,
        p.createVector(p.width/2-100, p.height/2+27),
        p.createVector(-5, -2),
        'Wheat',
        25
      ),
      new Bouncer(
        p,
        p.createVector(p.width/2-300, p.height/2+100),
        p.createVector(10, -2),
        'Fuchsia',
        15
      ),
    ]

    p.translate(p.width/2, p.height/2);
    p.ellipseMode(p.CENTER);
  }

  p.draw = function() {
    p.background(0);
    for (var i = 0; i < p.bouncers.length; i++) {
      p.bouncers[i].doGo();

    }
  }
}
