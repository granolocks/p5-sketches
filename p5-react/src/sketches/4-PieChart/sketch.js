export default function (p) {
  p.diameter = 300;

  p.data = [
    { count: 100 },
    { count: 250 },
    { count: 124 },
    { count: 7 },
    { count: 99 },
    { count: 300 }
  ];


  p.setup = function() {
    p.totalCount = 0;
    for (var i=0; i < p.data.length; i++){
      p.totalCount += p.data[i].count;
    }

    for (var i=0; i < p.data.length; i++){
      p.data[i].angle = Math.ceil(p.data[i].count / p.totalCount * 360);
    }

    p.createCanvas(640, 480);
    p.background(200);
  }

  p.draw = function() {
    p.fill(255)
    var lastAngle = 0;
    for (var i=0; i < p.data.length; i++){
      var gray = p.map(i, 0, p.data.length, 0, 255);
      p.fill(gray);
      p.arc(p.width/2, p.height/2, p.diameter, p.diameter, lastAngle, lastAngle + p.radians(p.data[i].angle));
      lastAngle += p.radians(p.data[i].angle);
    }
  }
}
