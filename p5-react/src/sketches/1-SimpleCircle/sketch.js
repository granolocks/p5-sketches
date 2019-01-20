export default function (p) {
  p.setup = function() {
    p.createCanvas(200, 200);
  }

  p.draw = function() {
    p.background(151);
    p.fill('red');
    p.ellipse(50, 50, 80, 80);
    p.fill('blue');
    p.ellipse(80, 50, 100, 60);
  }
}
