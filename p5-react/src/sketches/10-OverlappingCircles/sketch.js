export default function (p) {
  p.rad = 250;
  p.setup = function() {
    p.createCanvas(600, 600);
    p.background(255);
    p.ellipseMode(p.CENTER)
    p.noFill()
    p.translate(p.width/2,p.height/2);
    p.ellipse(0,0,p.rad ,p.rad )

    let colors = [
      p.color(220,20,60,30),
      p.color(255,165,0,30),
      p.color(255,215,0,30),
      p.color(152,251,152,30),
      p.color(0,191,255,30),
      p.color(238,130,238,30),

    ]

    let theta = 0
    for (var i = 0; i<6; i++){
      let tx = p.sin(theta) * p.rad * 0.5
      let ty = p.cos(theta) * p.rad * 0.5
      p.fill(colors[i])
      p.ellipse(tx,ty,p.rad ,p.rad )
      theta = theta + p.TWO_PI / 6
    }
  }
}
