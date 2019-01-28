export default function (p) {
  p.setup = function() {
    p.createCanvas(500, 500);
    p.background(0)
    p.translate(p.width/2, p.height/2)
    p.stroke(255)
    p.noFill()
    p.ellipse(0,0, 380,380)

    p.points = [
      ['pi/4', p.PI/4],
      ['7pi/4', 7*p.PI/4],
      ['5pi/4', 5*p.PI/4],
      ['3pi/4', 3*p.PI/4]
    ]

    for (var i = 0; i < p.points.length; i++) {
      let pt = p.points[i]
      let px1 = p.cos(pt[1]) * 190
      let py1 = p.sin(pt[1]) * 190
      let px2 = p.cos(pt[1]) * 210
      let py2 = p.sin(pt[1]) * 210
      p.ellipse(px1,py1,10,10)
      p.text(`${pt[0]}: ${pt[1]}`,px2,py2)

    }
  }
}
