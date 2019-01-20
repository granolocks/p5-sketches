export default function (p) {
  p.colorV = 1;
  p.h = 100;
  p.up = false;
  p.setup = function() {
    p.createCanvas(640, 480);
    p.noStroke();
    p.background(151);
    p.wSlider = p.createSlider(0, 255, 50);
    p.wSlider.position(20, 20);
  }

  p.draw = function() {
    if (p.h <= 0 || p.h >= 100) {
       p.up = !p.up
    }

    if (p.mouseIsPressed) {
      if (p.up){
        p.h += p.colorV
      } else {
        p.h -= p.colorV
      }

      let c = p.color('hsb(' + Math.floor(p.map(p.h, 0, 100, 0, 255)) +', 80%, 75%)')

      // console.log(c.levels)
      // console.log(p.h)
      p.fill(c);
      p.ellipse(p.mouseX, p.mouseY, p.wSlider.value(), p.wSlider.value());
    }
  }
}
