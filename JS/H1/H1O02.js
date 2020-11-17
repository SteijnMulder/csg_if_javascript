function setup() {
  canvas = createCanvas(450,450);
  background('darkred');
  canvas.parent('processing');
  noLoop();
}

function draw() {
  noStroke();
  fill('pink');
  triangle(0,225,450,0,450,450);
  fill('purple');
  triangle(450,225,0,0,0,450);
}