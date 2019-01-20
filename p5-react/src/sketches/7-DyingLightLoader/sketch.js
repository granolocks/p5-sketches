
function Point(x, y) {
  this.x = x;
  this.y = y;
}

const rectSide = 5;
const h = 300;
const w = 300;
const fr = 60; // framerate
const transitionDuration = fr/2;

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

export default function (p) {
  p.setup = function() {
    p.createCanvas(w, h)
    p.frameRate(fr);
    p.fill('hotpink');
    p.stroke('hotpink');
    p.rectMode(p.CENTER);
  }

  p.c = 0;
  p.pIndex = 0;
  p.up = true;
  p.hold = false;
  p.showRect = false;

  p.draw = function() {
    // handle the loop to decide which to render
    if (p.c % transitionDuration === 0 && !(p.c === 0 && p.up)) {

      // flash special rect
      if( p.pIndex === order.length - 2 && p.up ) {
        p.hold = !p.hold
      }

      // console.log('up, pindex: ', up, pIndex)
      if(!p.hold) {
        p.showRect = false;
        if (p.up == true && p.pIndex === order.length - 1 || p.up == false && p.pIndex === 0) {
          p.up = !p.up;
        }
        if (p.up) {
          p.pIndex++
        } else {
          p.pIndex--
          }
      }
      p.c = 0;
    }

    if (p.hold && p.c % 4 === 0) {
      p.showRect = !p.showRect;
    }

    p.background(0);
    p.translate(h/2, w/2)
    if (p.showRect) {
      p.rect(0, 0, 80, 80);
    }

    if(p.hold) {
      let shape = squarePoints;
      for (var i=0; i < shape.length; i++){
        let ps = shape[i];

        p.rect(ps.x, ps.y,rectSide,rectSide)
        // text(i, p.x + 10, p.y + 10)
      }
      for (var i=0; i < lines.length; i++){
        let l = lines[i];

        let p1 = shape[l[0]];
        let p2 = shape[l[1]];

        p.line(p1.x, p1.y, p2.x, p2.y);
      }
    } else {
      let currentShape = order[p.pIndex];
      let nextShape;
      if (p.up) {
        if (p.pIndex === order.length -1 ) {
          nextShape = order[p.pIndex - 1]
        } else {
          nextShape = order[p.pIndex + 1]
        }
      } else {
        if (p.pIndex == 0 ) {
          nextShape = order[p.pIndex + 1]
        } else {
          nextShape = order[p.pIndex - 1]
        }
      }
      let workingPoints = [];
      for (var i=0; i < currentShape.length; i++){
        let p1 = currentShape[i];
        let p2 = nextShape[i];

        let x = p.map(p.c, 0, transitionDuration, p1.x, p2.x)
        let y = p.map(p.c, 0, transitionDuration, p1.y, p2.y)

        workingPoints.push(new Point(x,y))

        p.rect(x, y,rectSide,rectSide)
        // text(i, p.x + 10, p.y + 10)
      }

      for (var i=0; i < lines.length; i++){
        let l = lines[i];

        let p1 = workingPoints[l[0]];
        let p2 = workingPoints[l[1]];

        p.line(p1.x, p1.y, p2.x, p2.y);
      }
    }


    // text(c, w/4, h/4 + 35);
    // text(pIndex, w/4, h/4 + 55);
    // text(up, w/4, h/4 + 75);

    p.c++
  }
}
