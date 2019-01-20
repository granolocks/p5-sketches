export default function (p) {
  p.setup = function() {
    let xSize = 500;
    let ySize = 250;
    p.createCanvas(xSize*2, ySize);
    for (var i = 0; i < xSize; i++) {
      for (var j = 0; j < ySize; j++) {
        let val = Math.floor(p.map(p.noise(i*0.01,j*0.01), 0, 1, 0, 255))
        p.stroke(val);
        p.point(i, j)
        p.stroke(p.color('hsb(' + val +', 65%, 75%)'));
        p.point(i+xSize, j)
      }
    }
  }
}
