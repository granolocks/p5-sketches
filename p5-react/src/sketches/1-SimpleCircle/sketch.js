export default function (p) {
  p.setup = function() {
    p.createCanvas(640, 480)
  }

  p.draw = function() {
    p.fill('red')
    p.ellipse(50, 50, 80, 80);
    p.fill('blue')
    p.ellipse(80, 50, 100, 60);
  }
}
