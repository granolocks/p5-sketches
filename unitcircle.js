const canvasY = 800;
const canvasX = 800;
const radius = 300;
const pointSize = 6;

const theta_vel = 0.1; // degrees / frame
var theta = 0;

function Point(x,y) {
   this.x = x;
   this.y = y;
}

function roundFloat(i){
   return +(Math.round(i + "e+5")  + "e-5");
}

function polarToCartesian(radius, theta) {
  let x = radius * cos(theta);
  let y = radius * sin(theta)
  return new Point(x,y);
}

function setup() {
  createCanvas(canvasX, canvasY);
  ellipseMode(CENTER);
  angleMode(DEGREES);
}

function draw() {

  p = polarToCartesian(radius, theta)

  background(0);
  strokeWeight(1);

  noStroke()
  text('angle: ' + roundFloat(theta), 10, 20)
  fill('pink');
  text('sine: ' + roundFloat(sin(theta)), 10,40)
  fill('green');
  text('cosine: ' + roundFloat(cos(theta)), 10,60)
  fill('yellow');
  text('tangent: ' + roundFloat(tan(theta)), 10,80)
  fill('rgb(255,204,0)');
  let t_base = dist(0,0, p.x, 0);
  let t_height = dist(0,0, 0, p.y)
  text('triangle area: ' + roundFloat((t_base * t_height / 2) /radius) + "r^2" , 10, 100)

  let cordEnd;
  if (cos(theta) > 0) {
    cordEnd = new Point(radius, 0)
  } else {
    cordEnd = new Point(-radius, 0)
  }
  fill('red');
  text('cord length: ' + roundFloat(dist(p.x, p.y, cordEnd.x, cordEnd.y)/radius) + "r", 10,120)

  stroke(255);
  translate(canvasX/2, canvasY/2);

  stroke(51);
  line(-canvasX/2,0,canvasX/2,0)
  line(0, -radius - 10,0,radius + 10)

  fill(255);
  text("0", radius + 10, 5);
  text("3 * PI / 2", -20, radius + 20)
  text("PI", -radius - 20, 5)
  text("PI / 2", -15, -radius - 10)

  //
  line(0,0,radius*(1/2),radius*(sqrt(3)/2));
  text("PI / 3", radius*(1/2) + 10, radius*(sqrt(3)/2) + 10);
  line(0,0,radius*(sqrt(2)/2),radius*(sqrt(2)/2));
  text("PI / 4", radius*(sqrt(2)/2) + 10,radius*(sqrt(2)/2) + 10);
  line(0,0,radius*(sqrt(3)/2),radius*(1/2));
  text("PI / 6", radius*(sqrt(3)/2) + 10,radius*(1/2) + 10);

  //
  line(0,0,radius*(sqrt(3)/2),-radius*(1/2));
  text("11 * PI / 6", radius*(sqrt(3)/2) + 10,-radius*(1/2) - 10);
  line(0,0,radius*(sqrt(2)/2),-radius*(sqrt(2)/2));
  text("7 * PI / 4", radius*(sqrt(2)/2) + 10,-radius*(sqrt(2)/2) - 10);
  line(0,0,radius*(1/2),-radius*(sqrt(3)/2));
  text("5 * PI / 3", radius*(1/2) + 10, -radius*(sqrt(3)/2) - 10);

  //
  line(0,0,-radius*(sqrt(3)/2),radius*(1/2));
  text("5 * PI / 6", -radius*(sqrt(3)/2) - 60,radius*(1/2) + 10);
  line(0,0,-radius*(sqrt(2)/2),radius*(sqrt(2)/2));
  text("3 * PI / 4", -radius*(sqrt(2)/2) - 60,radius*(sqrt(2)/2) + 10);
  line(0,0,-radius*(1/2),radius*(sqrt(3)/2));
  text("2 * PI / 3", -radius*(1/2) - 60, radius*(sqrt(3)/2) + 10);

  //
  line(0,0,-radius*(1/2),-radius*(sqrt(3)/2));
  text("4 * PI / 3", -radius*(1/2) - 50, -radius*(sqrt(3)/2) - 10);
  line(0,0,-radius*(sqrt(2)/2),-radius*(sqrt(2)/2));
  text("3 * PI / 4", -radius*(sqrt(2)/2) - 50, -radius*(sqrt(2)/2) - 10);
  line(0,0,-radius*(sqrt(3)/2),-radius*(1/2));
  text("PI / 6", -radius*(sqrt(3)/2) - 40,-radius*(1/2) - 5);

  fill('rgba(255,204,0,0.25)');
  triangle(0,0, p.x, p.y, p.x, 0)

  noFill();
  stroke('red');
  line(p.x, p.y, cordEnd.x, cordEnd.y)

  stroke(255);
  ellipse(0,0,radius*2);

  fill(255)
  ellipse(p.x, p.y, pointSize)
  line(0,0, p.x, p.y)

  // sin
  stroke('pink');
  line(p.x, 0, p.x, p.y)

  // cos
  stroke('green');
  line(0, 0, p.x, 0)


  if (360 - theta <= theta_vel) {
    theta = 0
  } else {
    theta += theta_vel
  }



}
