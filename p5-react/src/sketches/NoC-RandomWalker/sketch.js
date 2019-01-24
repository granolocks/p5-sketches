
function Walker(p, color, stepFn) {
  this.x = p.width/2;
  this.y = p.height/2;
  this.step = stepFn;
  this.display = function(){
    p.fill(color);
    p.ellipse(this.x, this.y, 10, 10)
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
    for (var i=0; i < 5; i++) {
      this.step();
      this.edges();
      this.display();
    }
  }
}

export default function (p) {
  p.setup = function() {
    p.createCanvas(1920, 1080);
    p.background(0);
    p.stroke(1);
    p.strokeWeight(0.5);

    p.random = new Walker(p, 'DarkOrange', function() {
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

    p.perlinMeta = { tx:0, ty:100 };
    p.perlinWalker = new Walker(p, 'PapayaWhip', function() {
      this.x = p.map(p.noise(p.perlinMeta.tx), 0, 1, 0, p.width);
      this.y = p.map(p.noise(p.perlinMeta.ty), 0, 1, 0, p.height);
      p.perlinMeta.tx += 0.01
      p.perlinMeta.ty += 0.01
      }
    );
    p.perlinMeta2 = { tx:0, ty:10000 };
    p.perlinWalker2 = new Walker(p, 'Crimson', function() {
      this.x = p.map(p.noise(p.perlinMeta2.tx), 0, 1, p.width/4, p.width/4*3);
      this.y = p.map(p.noise(p.perlinMeta2.ty), 0, 1, p.height/4, p.height/4*3);
      p.perlinMeta2.tx += 0.01
      p.perlinMeta2.ty += 0.01
      }
    );

    p.leftLeaning = new Walker(p, 'SpringGreen', function() {
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
  p.mouseHunter = new Walker(p, 'skyblue', function() {
    let s = Math.random(1);
    if  (0 < s && s <= 0.20) {
      this.y++
    } else if (0.2 < s && s <= 0.40) {
       this.y--
    } else if (0.40 < s && s <= 0.6) {
      this.x++
    } else if (0.6 < s && s <= 0.8) {
      this.x--
    } else {
      let old = p.createVector(this.x, this.y);
      let mouse = p.createVector(p.mouseX, p.mouseY);
      mouse.sub(old);
      mouse.normalize()
      mouse.mult(1);

      let next = p.createVector(this.x, this.y);
      next.add(mouse);

      this.x = next.x
      this.y = next.y

  }
}
);
  p.upLeaning = new Walker(p, 'yellow', function() {
    let s = Math.random(1);
    if  (0 < s && s <= 0.2) {
      this.x--
    } else if (0.2 < s && s <= 0.4) {
       this.x++
    } else if (0.4 < s && s <= 0.6) {
      this.y++
    } else{
      this.y--
  }
}
);
p.slanty = new Walker(p, 'Magenta', function() {
  let s = Math.random(1);
  if  (0 < s && s <= 0.4) {
    this.y--
  } else if (0.4 < s && s <= 0.8) {
     this.x--
  } else if (0.8 < s && s <= 0.9) {
    this.y++
  } else{
    this.x++
}
}
);

  p.threeWay = new Walker(p, 'LightYellow', function() {
    let stepX = Math.floor(Math.random() * Math.floor(3)) -1;
    let stepY = Math.floor(Math.random() * Math.floor(3)) -1;
    this.x += stepX;
    this.y += stepY;
  }
);
}

  p.draw = function() {
    p.background(0,5);
    p.random.doGo()
    p.leftLeaning.doGo()
    p.threeWay.doGo()
    // p.perlinWalker.doGo()
    // p.perlinWalker2.doGo()
    p.mouseHunter.doGo()
    p.upLeaning.doGo()
    p.slanty.doGo()
  }
}
