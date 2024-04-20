let x, y;

let stepSize = 20;
let num = 1;
let numSteps = 1;
let state = 0;
let turnCounter = 0;
let maxSteps;
function setup() {
  createCanvas(600, 600);
  // normalMaterial();
  x = width / 2;
  y = height / 2;
  const rows = width / stepSize;
  const cols = height / stepSize;
  maxSteps = rows * cols;
  px = x;
  py = y;
  background(41, 98, 255);
}

const isPrime = (num) => {
  if (num == 1) return false;
  for (let i = 2; i < num / 2; i++) {
    if (num % i == 0) return false;
  }
  return true;
};
function draw() {
  // orbitControl();

  // textSize(stepSize);
  // textAlign(CENTER, CENTER);
  fill(255);
  stroke(255);

  if (isPrime(num)) {
    circle(x, y, stepSize * 0.5);
  }
  line(x, y, px, py);

  px = x;
  py = y;

  switch (state) {
    case 0:
      x += stepSize;
      break;
    case 1:
      y -= stepSize;
      break;
    case 2:
      x -= stepSize;
      break;
    case 3:
      y += stepSize;
      break;

    default:
      break;
  }

  if (num % numSteps == 0) {
    state = (state + 1) % 4;
    turnCounter++;
    if (turnCounter % 2 == 0) {
      numSteps++;
    }
  }

  num++;
  // console.log();
  if (num == maxSteps) {
    noLoop();
  }
  // frameRate(1);
}
