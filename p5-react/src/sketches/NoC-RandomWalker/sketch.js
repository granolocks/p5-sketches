
function Walker(p, color, stepFn) {
  this.x = p.width/2;
  this.y = p.height/2;
  this.step = stepFn;
  this.display = function(){
    p.fill(color);
    p.ellipse(this.x, this.y, 5, 5)
  }
  this.edges = function() {
    if (this.x < 0) {
      this.x = p.width;
    } else if (this.x > p.width) {
      this.x = 0;
    }

    if (this.y < 0) {
      this.y = p.height;
    } else if (this.y > p.height) {
      this.y = 0;
    }
  }
  this.doGo = function() {
    this.step();
    this.edges();
    this.display();
  }
}

export default function (p) {
  p.setup = function() {
    p.createCanvas(1000, 500);
    p.background(222);
    p.noStroke()


    p.random = new Walker(p, 'red', function() {
        switch (Math.floor(Math.random() * Math.floor(4))) {
          case 0:
            this.y++
            break;
          case 1:
            this.y--
            break;
          case 2:
            this.x++
            break;
          case 3:
            this.x--
            break;
        }
      }
    );

    p.perlinMeta = {tx:0,ty:10000};
    p.perlinWalker = new Walker(p, 'hotpink', function() {
      this.x = p.map(p.noise(p.perlinMeta.tx), 0, 1, 0, p.width);
      this.y = p.map(p.noise(p.perlinMeta.ty), 0, 1, 0, p.height);
      p.perlinMeta.tx += 0.01
      p.perlinMeta.ty += 0.01
      }
    );

    p.leftLeaning = new Walker(p, 'green', function() {
      let s = Math.random(1);
      if  (0 < s && s <= 0.2) {
        this.y++
      } else if (0.2 < s && s <= 0.4) {
         this.y--
      } else if (0.4 < s && s <= 0.6) {
        this.x++
      } else{
        this.x--
    }
  }
  );

  p.threeWay = new Walker(p, 'blue', function() {
    let stepX = Math.floor(Math.random() * Math.floor(3)) -1;
    let stepY = Math.floor(Math.random() * Math.floor(3)) -1;
    this.x += stepX;
    this.y += stepY;
  }
);
}

  p.draw = function() {
    p.random.doGo()
    p.leftLeaning.doGo()
    p.threeWay.doGo()
    p.perlinWalker.doGo()
  }
}
