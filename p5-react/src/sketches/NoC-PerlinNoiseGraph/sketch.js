export default function (p) {
  p.setup = function() {
    let xSize = 500;
    let ySize = 250;
    p.createCanvas(xSize*2, ySize);
    for (var i = 0; i < p.width; i++) {
      for (var j = 0; j < p.height; j++) {
        let stroke = p.map(p.noise(i*0.01,j*0.01), 0, 1, 0, 255);
        p.stroke(stroke);
        p.point(i, j)
      }
    }
    for (var i = 0; i < p.width; i++) {
      for (var j = 0; j < p.height; j++) {
        let stroke = p.color('hsb(' + Math.floor(p.map(p.noise(i*0.01,j*0.01), 0, 1, 0, 255)) +', 100%, 100%)')

        // console.log(stroke.levels)
        p.stroke(stroke);
        p.point(i+xSize, j)
      }
    }
  }
}
