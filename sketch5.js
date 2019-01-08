
var diameter = 300

var data = [
  { state: "Growing", count: 100 },
  { state: "Harvested", count: 250 },
  { state: "Extracting", count: 124 },
  { state: "Extracted", count: 7 },
  { state: "Testing", count: 99 },
  { state: "Tested", count: 300 },
];

var totalCount = 0;
for (var i=0; i < data.length; i++){
  totalCount += data[i].count;
}

for (var i=0; i < data.length; i++){
  data[i].angle = Math.ceil(data[i].count / totalCount * 360);
}

function setup() {
  createCanvas(640, 480);
  background(200);
}

function draw() {
  fill(255)
  var lastAngle = 0;
  for (var i=0; i < data.length; i++){
    var gray = map(i, 0, data.length, 0, 255);
    fill(gray);
    arc(width/2, height/2, diameter, diameter, lastAngle, lastAngle + radians(data[i].angle));
    lastAngle += radians(data[i].angle);
  }
}
