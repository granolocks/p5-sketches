export default function (p) {
  p.setup = function() {
    p.createCanvas(500, 500);
    p.diameter = 380;
    p.thetaSlider = p.createSlider(0, 360, 0, 1);
    p.thetaSlider.position(5, 20);
  }

  p.polar2CartesianVecMatrix = function(theta) {
    let transformation = [
      [p.cos(theta), -p.sin(theta)],
      [p.sin(theta), p.cos(theta)]
    ];
    // zero degrees to stat
    let output = [0, 0];
    let basis = [1,0];

    for (var i=0; i < transformation.length; i++){
      for (var j=0; j < transformation[0].length; j++){
        output[j] = output[j] + (basis[i] *  transformation[i][j])
      }
    }

    let v = p.createVector(output[0], output[1]);
    v.mult(p.diameter/2);

    return v;
  }

  p.draw = function() {
    p.background(0)

    // convert slider (degrees) into radians
    let theta = p.thetaSlider.value() * p.PI / 180;
    let point = p.polar2CartesianVecMatrix(theta);
    p.text(p.thetaSlider.value(), 10, 60)
    p.translate(p.width/2, p.height/2)
    p.stroke(255)
    p.noFill()
    p.ellipse(0,0, p.diameter, p.diameter)
    p.line(0,0, point.x, point.y)

  }

}
