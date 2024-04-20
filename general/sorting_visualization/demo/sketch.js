function setup() {
  createCanvas(500, 500, WEBGL);
  normalMaterial();
}
function draw() {
  background(200);
  orbitControl();
  rotateY(0.5);
  box(30, 50);
}
