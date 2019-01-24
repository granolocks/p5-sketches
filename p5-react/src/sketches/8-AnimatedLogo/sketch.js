export default function (p) {
  p.scale = 10;
  p.logo = [
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
    [0,0,1,1,1,1,1,1,0,0,0,0,1,1,1,1,1,1,0,0],
    [0,0,0,0,0,0,0,1,0,0,0,0,1,0,0,0,0,,0,0],
    [0,0,1,1,1,1,1,1,0,0,0,0,1,1,1,1,1,1,0,0],
    [0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0],
    [0,0,1,1,1,1,1,1,0,0,0,0,1,1,1,1,1,1,0,0],
    [0,0,0,0,0,0,0,1,0,0,0,0,1,0,0,0,0,0,0,0],
    [0,0,1,1,1,1,1,1,0,0,0,0,1,1,1,1,1,1,0,0],
    [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
  ]
  p.setup = function() {
    p.createCanvas(200, 180);
    p.background('SlateBlue');
  }

  p.c = 1;
  p.progress = p.createVector(0,0)
  p.logoColor = 255;
  p.draw = function(){
    if (p.c % 2 === 0) {
      if (p.logo[p.progress.y][p.progress.x] === 1) {
         p.fill(p.logoColor);
         p.stroke(p.logoColor);
         p.rect(p.progress.x*p.scale,p.progress.y*p.scale, p.scale, p.scale);
         p.rect(p.progress.x*p.scale,p.height-(p.progress.y*p.scale)-p.scale, p.scale, p.scale);
      }

      p.progress.x = p.progress.x + 1

      if(p.progress.x === p.logo[0].length) {
        p.progress.x = 0
        p.progress.y = p.progress.y + 1
      }

      if(p.progress.y === p.logo.length) {
        p.progress = p.createVector(0,0)
        let randomColor = p.color(p.random(255),p.random(255),p.random(255));
        p.logoColor = p.color(p.random(255),p.random(255),p.random(255));
        p.background(randomColor);
      }
    }
    p.c++
  }
}
