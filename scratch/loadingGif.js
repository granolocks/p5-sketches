const canvasSideLength = 500;
const halfCanvasSideLength = canvasSideLength/2;
const framesPerSide = 36;
const shapeSideLength = 300;
const maxShapeSides = 4; // loop(0, 1, 2, 3, ... maxShapeSides ... 3, 2, 1, 0)
const square

function setup() {
  createCanvas(canvasSideLength, canvasSideLength);
  textSize(25);
}

var frameC = 1;
var up = true;
function draw() {
  background(200);
  translate(halfCanvasSideLength, halfCanvasSideLength);
  var currentSide = Math.floor(frameC / framesPerSide);
  text('currSide ' + currentSide, -20, 0);
  text('frameC ' + frameC, -20, 20)
  if(frameC % framesPerSide == 0){
    fill('red');
  } else {
    fill('black');
  }
  text('modulus ' + frameC % framesPerSide, -20, 40);
  if(up){
    if(frameC % framesPerSide == 0 && currentSide / maxShapeSides == framesPerSide){
      up = !up
      frameC--
    } else {
      frameC++
    }
  } else {
    if(frameC % framesPerSide == 0){
      up = !up
      frameC++
    } else {
      frameC--
    }
  }
}
