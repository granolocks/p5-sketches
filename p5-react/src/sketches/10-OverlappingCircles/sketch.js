export default function (p) {
  p.rad = 250;
  p.setup = function() {
    p.createCanvas(600, 600);
    p.translate(p.width/2,p.height/2);
    p.background(0);
    p.ellipseMode(p.CENTER)

  }

  p.colors = [
        p.color(220,20,60,30),
        p.color(255,165,0,30),
        p.color(255,215,0,30),
        p.color(152,251,152,30),
        p.color(0,191,255,30),
        p.color(238,130,238,30),

      ]
  p.theta = 0;
  p.theta2 = 0;
  p.draw = function(){
    p.translate(p.width/2,p.height/2);
    p.rotate(p.theta2)
    p.noFill()
    p.ellipse(0,0,p.rad ,p.rad )
    p.stroke('LavenderBlush')
    p.fill('LavenderBlush')
    p.ellipse(0,0,p.rad*2.1 ,p.rad*2.1 )
    p.stroke(0)
    p.fill(255)
    p.ellipse(0,0,p.rad*2 ,p.rad*2 )
    p.ellipse(0,0,p.rad/2 ,p.rad/2 )
    p.ellipse(0,0,p.rad*3/2 ,p.rad*3/2 )
    let pts = [];

    for (var i = 0; i<6; i++){
      let tVec = p.createVector(
        p.sin(p.theta) * p.rad * 0.5,
        p.cos(p.theta) * p.rad * 0.5
      )
      pts.push(tVec);
      p.fill(p.colors[i])
      p.ellipse(tVec.x,tVec.y,p.rad ,p.rad )
      p.theta = p.theta + p.TWO_PI / 6
    }

    let lineIdx = [
      [0,2], [2,4], [4,0],
      [1,3], [3,5], [5,1],
    ]

    for(var i = 0; i < lineIdx.length; i++){
       let ids = lineIdx[i]
       let v1 = pts[ids[0]];
       let v2 = pts[ids[1]];
       p.stroke(0)
       p.line(v1.x, v1.y, v2.x, v2.y)
    }

    p.rotate(p.PI/2)
    for (var i = 0; i<pts.length; i++){
      p.fill(p.colors[i])
      p.ellipse(pts[i].x,pts[i].y,p.rad ,p.rad )
      p.theta = p.theta + p.TWO_PI / 6
    }
    for(var i = 0; i < lineIdx.length; i++){
       let ids = lineIdx[i]
       let v1 = pts[ids[0]];
       let v2 = pts[ids[1]];
       p.stroke(0)
       p.line(v1.x, v1.y, v2.x, v2.y)
    }
    p.rotate(-p.PI/2)

    p.noFill()
    p.ellipse(0,0,p.rad ,p.rad)
    for(var i = 0; i < pts.length; i++){
       let v1 = pts[i];
       let v2;
       if (i == pts.length - 1){
         v2 = pts[0]
       } else {
         v2 = pts[i+1];
       }
       p.stroke(0)
       let origin = p.createVector(0,0)
       v1.sub(origin);
       v1.normalize()
       v1.mult(p.rad)
       v2.sub(origin);
       v2.normalize()
       v2.mult(p.rad)
       p.line(v1.x, v1.y, -v2.x, -v2.y)
       p.line(v1.x, v1.y, v2.x, v2.y)
    }
    p.rotate(p.PI/2)
    for(var i = 0; i < pts.length; i++){
       let v1 = pts[i];
       let v2;
       if (i == pts.length - 1){
         v2 = pts[0]
       } else {
         v2 = pts[i+1];
       }
       p.stroke(0)
       p.line(v1.x, v1.y, v2.x, v2.y)
       let origin = p.createVector(0,0)
       v1.sub(origin);
       v1.normalize()
       v1.mult(p.rad)
       v2.sub(origin);
       v2.normalize()
       v2.mult(p.rad)
       p.line(v1.x, v1.y, -v2.x, -v2.y)
       p.line(v1.x, v1.y, v2.x, v2.y)
    }

    p.theta2 += 0.0075;
  }
}
