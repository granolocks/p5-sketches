export default function (p) {
  p.totalLines = 300;
  p.multiplier = 0;
  p.pts = [];
  p.radius = 290;
  // p.current = 0;
  p.lines = [];

  p.calcConnection = function(i) {
    return (p.multiplier*i)%p.totalLines
  }

  p.polarToCartesian = function (radius, theta) {
    let x = radius * p.cos(theta);
    let y = radius * p.sin(theta);
    return p.createVector(x,y);
  }

  p.setup = function() {
    p.createCanvas(600, 600);
    p.frameRate(60);
    p.background(0);
    p.ellipseMode(p.CENTER)
    p.colorMode(p.HSB, 100);
    p.nSlider = p.createSlider(p.multiplier, 300, 0, 0.25);
    p.nSlider.position(5, 20);
    p.nSlider.style('width', '200px');
    for (var i = 0; i < p.totalLines; i++) {
      let t = p.TWO_PI / p.totalLines * i;
      p.pts[i] = p.polarToCartesian(p.radius,t);
    }
  }

  p.draw = function() {
    p.multiplier = p.nSlider.value()
    p.background(0)
    p.fill(255)
    p.stroke(255)
    p.text(`${p.multiplier} * n`, 10, 20)
    p.translate(p.width/2,p.height/2)
    p.noFill()
    p.stroke(255)
    p.ellipse(0,0,p.radius*2,p.radius*2)
    p.fill(255)
    //
    // if (p.current >= p.totalLines) {
    //   p.current = 0;
    //   p.multiplier += 0.087
    // }

    for (var i = 0; i < p.totalLines; i++ ) {
      let p1 = p.pts[i]
      let p2theta = p.TWO_PI / p.totalLines * p.calcConnection(i)
      let p2 = p.polarToCartesian(p.radius,p2theta);
      p.lines[i] = [p1, p2]
    }

    for (var i = 0; i < p.lines.length; i++ ) {
      let h = p.map(i, 0, p.totalLines, 0, 100)
      let w = p.map(i, 0, p.totalLines, 0, 3)
      p.stroke(h, 100, 50)
      let pp1 = p.lines[i][0]
      let pp2 = p.lines[i][1]
      p.line(pp1.x, pp1.y, pp2.x, pp2.y)

    }


    for (var i = 0; i < p.totalLines-1; i++) {
      let xy = p.polarToCartesian(p.radius, p.TWO_PI / p.totalLines * i)
      p.ellipse(xy.x,xy.y,3,3)
    }
    p.multiplier += 0 //0.0087
  }
}
