
// NOTE in a lot of this code I had to invert the Y axis and sin values that I
// am printing because p5.js uses an inverted y axis where the default 0,0 is
// the upper left corner of the screen and it goes up as it moves towards the
// bottom
//
// TL;DR in p5 moving odwn the screen is going up in y value. look for negative
// numbers being randomly inserted in weird places

const canvasY = 800;
const canvasX = 800;
const radius = 300;
const pointSize = 6;

const theta_vel = 0.2; // degrees / frame
var theta = 0;

function roundFloat(i){
   return +(Math.round(i + "e+5")  + "e-5");
}

function polarToCartesian(radius, theta) {
  let x = radius * cos(theta);
  let y = radius * sin(theta);
  return createVector(x,y);
}

function setup() {
  createCanvas(canvasX, canvasY);
  ellipseMode(CENTER);
  angleMode(DEGREES);
  strokeWeight(1);
}

function draw() {
  background(0);

  // set up some helpful variables for drawing the current angle, triangle and cord
  let p = polarToCartesian(radius, theta);
  let t_base = dist(0,0, p.x, 0);
  let t_height = dist(0,0, 0, p.y);
  let cordEnd;
  if (cos(theta) > 0) {
    cordEnd = createVector(radius, 0);
  } else {
    cordEnd = createVector(-radius, 0);
  }

  // draw text in the upper corner before translating
  noStroke()

  fill('255');
  text('θ: ' + roundFloat(abs(theta))+"°", 10, 20); // abs() is used because we are using an inverted Y and using a negative angle to move counterclockwise
  fill('pink');
  text('sin(θ): ' + roundFloat(-sin(theta)), 10,40); // inverted
  fill('green');
  text('cos(θ): ' + roundFloat(cos(theta)), 10,60);
  fill('yellow');
  text('tan(θ): ' + roundFloat(tan(theta)), 10,80);
  fill('rgb(255,204,0)');
  text('triangle area: ' + roundFloat(((t_base/radius) * (t_height/radius) ) / 2) + "r^2" , 10, 100);
  fill('red');
  text('cord length: ' + roundFloat(dist(p.x, p.y, cordEnd.x, cordEnd.y)/radius) + "r", 10,120);

  //  move to the center of the canvas
  translate(canvasX/2, canvasY/2);
  stroke(51);

  // draw x/y axes
  line(-canvasX/2, 0, canvasX/2, 0);
  line(0, -canvasY/2, 0, canvasY/2);

  // write lables around circle
  fill(255);
  text("[1, 0]", radius + 10, 10);
  text("0", radius + 10, -5);

  text("[0, -1]", -20, radius + 35);
  text("3π / 2", -20, radius + 20);

  text("[-1, 0]", -radius - 45, 10);
  text("π", -radius - 45, -5);

  text("[0, 1]", -15, -radius - 10);
  text("π / 2", -15, -radius - 25);

  // upper right (y inverted)
  line(0,0,radius*(1/2),-radius*(sqrt(3)/2));
  text("π / 3 (60°)", radius*(1/2) + 10, -radius*(sqrt(3)/2) - 15);
  line(0,0,radius*(sqrt(2)/2),-radius*(sqrt(2)/2));
  text("π / 4 (45°)", radius*(sqrt(2)/2) + 10,-radius*(sqrt(2)/2) - 15);
  line(0,0,radius*(sqrt(3)/2),-radius*(1/2));
  text("π / 6 (30°)", radius*(sqrt(3)/2) + 10,-radius*(1/2) - 15);

  // lower right (y inverted)
  line(0,0,radius*(sqrt(3)/2),radius*(1/2));
  text("11π / 6 (330°)", radius*(sqrt(3)/2) + 10,radius*(1/2) + 15);
  line(0,0,radius*(sqrt(2)/2),radius*(sqrt(2)/2));
  text("7π / 4 (315°)", radius*(sqrt(2)/2) + 10,radius*(sqrt(2)/2) + 15);
  line(0,0,radius*(1/2),radius*(sqrt(3)/2));
  text("5π / 3 (300°)", radius*(1/2) + 10, radius*(sqrt(3)/2) + 15);

  // lower left (y inverted)
  line(0,0,-radius*(1/2),radius*(sqrt(3)/2));
  text("4π / 3 (240°)", -radius*(1/2) - 80, radius*(sqrt(3)/2) + 20);
  line(0,0,-radius*(sqrt(2)/2),radius*(sqrt(2)/2));
  text("3π / 4 (225°)", -radius*(sqrt(2)/2) - 80, radius*(sqrt(2)/2) + 20);
  line(0,0,-radius*(sqrt(3)/2),radius*(1/2));
  text("7π / 6 (210°)", -radius*(sqrt(3)/2) - 80,radius*(1/2) + 20);

  // upper left (y inverted)
  line(0,0,-radius*(sqrt(3)/2),-radius*(1/2));
  text("5π / (150°)", -radius*(sqrt(3)/2) - 72,-radius*(1/2));
  line(0,0,-radius*(sqrt(2)/2),-radius*(sqrt(2)/2));
  text("3π / (135°)", -radius*(sqrt(2)/2) - 72,-radius*(sqrt(2)/2));
  line(0,0,-radius*(1/2),-radius*(sqrt(3)/2));
  text("2π / (120°)", -radius*(1/2) - 72, -radius*(sqrt(3)/2) );

  // draw the triangle
  fill('rgba(255,204,0,0.5)');
  triangle(0,0, p.x, p.y, p.x, 0);

  // draw the cord line
  noFill();
  stroke('red');
  line(p.x, p.y, cordEnd.x, cordEnd.y);


  // draw the (fake)tangent line
  stroke('yellow');
  translate(p.x,p.y)
  rotate(theta + 90)
  line(-canvasX, 0, canvasX, 0)
  console.log(theta)
  // // console.log(p.normalize())
  resetMatrix()
  translate(canvasX/2, canvasY/2)

  // draw the unit circle
  stroke(255);
  ellipse(0,0,radius*2);

  // draw the point
  fill(255);
  ellipse(p.x, p.y, pointSize);
  line(0,0, p.x, p.y);

  // sin line
  stroke('pink');
  line(p.x, 0, p.x, p.y)

  // cos line
  stroke('green');
  line(0, 0, p.x, 0)

  // reset if we have come full circle other wise decrease angle to move counter
  // clockwise
  if (360 + theta <= theta_vel) {
    theta = 0
  } else {
    theta -= theta_vel
  }
}