function Point(x, y) {
  this.x = x;
  this.y = y;
}

const rectSide = 5;
const h = 300;
const w = 300;
const fr = 60; // framerate
transitionDuration = fr;

const pointPoints = [
  new Point(0,0),
  new Point(0,0),
  new Point(0,0),
  new Point(0,0),
]

const linePoints = [
  new Point(w/4, 0),
  new Point(w/4, 0),
  new Point(-w/4, 0),
  new Point(-w/4, 0),
]

const trianglePoints = [
  new Point(w/4, h/4),
  new Point(w/4, -h/4),
  new Point(-w/4, h/4),
  new Point(-w/4, h/4),
]

const squarePoints = [
  new Point(w/4, h/4),
  new Point(w/4, -h/4),
  new Point(-w/4, h/4),
  new Point(-w/4, -h/4),
]

const lines = [
  [0,1],
  [0,2],
  [0,3],
  [1,2],
  [1,3],
  [2,3]
]
const order = [  pointPoints, linePoints, trianglePoints, squarePoints ]

function setup() {
  createCanvas(w, h)
  frameRate(fr);
  fill('hotpink');
  stroke('hotpink');
  rectMode(CENTER);
}

var c = 1;
var pIndex = 0;
var up = true;

function draw() {
  // handle the loop to decide which to render
  if (c % transitionDuration === 0) {
    // console.log('up, pindex: ', up, pIndex)
    if (up == true && pIndex === order.length - 1 || up == false && pIndex === 0) {
      up = !up;
    }
    if (up) {
      pIndex++
    } else {
      pIndex--
    }
    c = 0;
  }
  background(0);
  translate(h/2, w/2)
  let currentShape = order[pIndex];
  let nextShape;
  if (up) {
    if (pIndex === order.length -1 ) {
      nextShape = order[pIndex - 1]
    } else {
      nextShape = order[pIndex + 1]
    }
  } else {
    if (pIndex == 0 ) {
      nextShape = order[pIndex + 1]
    } else {
      nextShape = order[pIndex - 1]
    }
  }
  let workingPoints = [];
  for (var i=0; i < currentShape.length; i++){
    let p = currentShape[i];
    let p2 = nextShape[i];

    let x = map(c, 0, transitionDuration, p.x, p2.x)
    let y = map(c, 0, transitionDuration, p.y, p2.y)

    workingPoints.push(new Point(x,y))

    rect(x, y,rectSide,rectSide)
    // text(i, p.x + 10, p.y + 10)
  }

  for (var i=0; i < lines.length; i++){
    let l = lines[i];

    let p1 = workingPoints[l[0]];
    let p2 = workingPoints[l[1]];

    line(p1.x, p1.y, p2.x, p2.y);
  }

  // text(c, w/4, h/4 + 35);
  // text(pIndex, w/4, h/4 + 55);
  // text(up, w/4, h/4 + 75);

  c++
}
