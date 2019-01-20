// NOTE in a lot of this code I had to invert the Y axis and sin values that I
// am printing because p5.js uses an inverted y axis where the default 0,0 is
// the upper left corner of the screen and it goes up as it moves towards the
// bottom
//
// TL;DR in p5 moving odwn the screen is going up in y value. look for negative
// numbers being randomly inserted in weird places


export default function (p5object) {
  p5object.canvasY = 800;
  p5object.canvasX = 800;
  p5object.radius = 300;
  p5object.pointSize = 6;
  p5object.theta_vel = 0.2; // degrees / frame
  p5object.theta = 0;

  p5object.roundFloat = function (i){
     return +(Math.round(i + "e+5")  + "e-5");
  }

  p5object.polarToCartesian = function (radius, theta) {
    let x = p5object.radius * p5object.cos(p5object.theta);
    let y = p5object.radius * p5object.sin(p5object.theta);
    return p5object.createVector(x,y);
  }

  p5object.setup = function() {
    p5object.createCanvas(p5object.canvasX, p5object.canvasY);
    p5object.ellipseMode(p5object.CENTER);
    p5object.angleMode(p5object.DEGREES);
    p5object.strokeWeight(1);
  }

  p5object.draw = function() {
    p5object.background(0);

    let rad = p5object.radius;
    // set up some helpful variables for drawing the current angle, triangle and cord
    let p = p5object.polarToCartesian(rad, p5object.theta);
    let t_base = p5object.dist(0,0, p.x, 0);
    let t_height = p5object.dist(0,0, 0, p.y);
    let cordEnd;
    if (p5object.cos(p5object.theta) > 0) {
      cordEnd = p5object.createVector(rad, 0);
    } else {
      cordEnd = p5object.createVector(-rad, 0);
    }

    // draw text in the upper corner before translating
    p5object.noStroke()

    p5object.fill('255');
    p5object.text('θ: ' + p5object.roundFloat(p5object.abs(p5object.theta))+"°", 10, 20); // abs() is used because we are using an inverted Y and using a negative angle to move counterclockwise
    p5object.fill('pink');
    p5object.text('sin(θ): ' + p5object.roundFloat(-p5object.sin(p5object.theta)), 10,40); // inverted
    p5object.fill('green');
    p5object.text('cos(θ): ' + p5object.roundFloat(p5object.cos(p5object.theta)), 10,60);
    p5object.fill('yellow');
    p5object.text('tan(θ): ' + p5object.roundFloat(p5object.tan(p5object.theta)), 10,80);
    p5object.fill('rgb(255,204,0)');
    p5object.text('triangle area: ' + p5object.roundFloat(((t_base/rad) * (t_height/rad) ) / 2) + "r^2" , 10, 100);
    p5object.fill('red');
    p5object.text('cord length: ' + p5object.roundFloat(p5object.dist(p.x, p.y, cordEnd.x, cordEnd.y)/rad) + "r", 10,120);

    //  move to the center of the canvas
    p5object.translate(p5object.canvasX/2, p5object.canvasY/2);
    p5object.stroke(51);

    // draw x/y axes
    p5object.line(-p5object.canvasX/2, 0, p5object.canvasX/2, 0);
    p5object.line(0, -p5object.canvasY/2, 0, p5object.canvasY/2);

    // write lables around circle
    p5object.fill(255);
    p5object.text("[1, 0]", rad + 10, 10);
    p5object.text("0", rad + 10, -5);

    p5object.text("[0, -1]", -20, rad + 35);
    p5object.text("3π / 2", -20, rad + 20);

    p5object.text("[-1, 0]", -rad - 45, 10);
    p5object.text("π", -rad - 45, -5);

    p5object.text("[0, 1]", -15, -rad - 10);
    p5object.text("π / 2", -15, -rad - 25);

    // upper right (y inverted)
    p5object.line(0,0,rad*(1/2),-rad*(p5object.sqrt(3)/2));
    p5object.text("π / 3 (60°)", rad*(1/2) + 10, -rad*(p5object.sqrt(3)/2) - 15);
    p5object.line(0,0,rad*(p5object.sqrt(2)/2),-rad*(p5object.sqrt(2)/2));
    p5object.text("π / 4 (45°)", rad*(p5object.sqrt(2)/2) + 10,-rad*(p5object.sqrt(2)/2) - 15);
    p5object.line(0,0,rad*(p5object.sqrt(3)/2),-rad*(1/2));
    p5object.text("π / 6 (30°)", rad*(p5object.sqrt(3)/2) + 10,-rad*(1/2) - 15);

    // lower right (y inverted)
    p5object.line(0,0,rad*(p5object.sqrt(3)/2),rad*(1/2));
    p5object.text("11π / 6 (330°)", rad*(p5object.sqrt(3)/2) + 10,rad*(1/2) + 15);
    p5object.line(0,0,rad*(p5object.sqrt(2)/2),rad*(p5object.sqrt(2)/2));
    p5object.text("7π / 4 (315°)", rad*(p5object.sqrt(2)/2) + 10,rad*(p5object.sqrt(2)/2) + 15);
    p5object.line(0,0,rad*(1/2),rad*(p5object.sqrt(3)/2));
    p5object.text("5π / 3 (300°)", rad*(1/2) + 10, rad*(p5object.sqrt(3)/2) + 15);

    // lower left (y inverted)
    p5object.line(0,0,-rad*(1/2),rad*(p5object.sqrt(3)/2));
    p5object.text("4π / 3 (240°)", -rad*(1/2) - 80, rad*(p5object.sqrt(3)/2) + 20);
    p5object.line(0,0,-rad*(p5object.sqrt(2)/2),rad*(p5object.sqrt(2)/2));
    p5object.text("3π / 4 (225°)", -rad*(p5object.sqrt(2)/2) - 80, rad*(p5object.sqrt(2)/2) + 20);
    p5object.line(0,0,-rad*(p5object.sqrt(3)/2),rad*(1/2));
    p5object.text("7π / 6 (210°)", -rad*(p5object.sqrt(3)/2) - 80,rad*(1/2) + 20);

    // upper left (y inverted)
    p5object.line(0,0,-rad*(p5object.sqrt(3)/2),-rad*(1/2));
    p5object.text("5π / (150°)", -rad*(p5object.sqrt(3)/2) - 72,-rad*(1/2));
    p5object.line(0,0,-rad*(p5object.sqrt(2)/2),-rad*(p5object.sqrt(2)/2));
    p5object.text("3π / (135°)", -rad*(p5object.sqrt(2)/2) - 72,-rad*(p5object.sqrt(2)/2));
    p5object.line(0,0,-rad*(1/2),-rad*(p5object.sqrt(3)/2));
    p5object.text("2π / (120°)", -rad*(1/2) - 72, -rad*(p5object.sqrt(3)/2) );

    // draw the triangle
    p5object.fill('rgba(255,204,0,0.5)');
    p5object.triangle(0,0, p.x, p.y, p.x, 0);

    // draw the cord line
    p5object.noFill();
    p5object.stroke('red');
    p5object.line(p.x, p.y, cordEnd.x, cordEnd.y);


    // draw the (fake)tangent line
    p5object.stroke('yellow');
    p5object.translate(p.x,p.y)
    p5object.rotate(p5object.theta + 90)
    p5object.line(-p5object.canvasX, 0, p5object.canvasX, 0)
    // console.log(p5object.theta)
    // // console.log(p.normalize())
    p5object.resetMatrix()
    p5object.translate(p5object.canvasX/2, p5object.canvasY/2)

    // draw the unit circle
    p5object.stroke(255);
    p5object.ellipse(0,0,rad*2);


    // draw the point
    p5object.fill(255);
    p5object.ellipse(p.x, p.y, p5object.pointSize);
    p5object.line(0,0, p.x, p.y);

    // sin line
    p5object.stroke('pink');
    p5object.line(p.x, 0, p.x, p.y)

    // cos line
    p5object.stroke('green');
    p5object.line(0, 0, p.x, 0)

    // reset if we have come full circle other wise decrease angle to move counter
    // clockwise
    if (360 + p5object.theta <= p5object.theta_vel) {
      p5object.theta = 0
    } else {
      p5object.theta -= p5object.theta_vel
    }
  }
}
