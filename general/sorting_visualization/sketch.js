// Daniel Shiffman
// http://youtube.com/thecodingtrain
// http://codingtra.in

// Coding Challenge #114: Bubble Sort Visualization
// https://youtu.be/67k3I2GxTH8

let values = [];

let i = 0;
let j = 0;
let barWidth = 5;
function setup() {
  let w = parseInt(windowWidth / barWidth);
  console.log();
  createCanvas(windowWidth, windowHeight - 50);

  values = new Array(w);
  console.log(values);
  for (let i = 0; i < values.length; i++) {
    values[i] = random(height);
    // values[i] = noise(i / 100.0) * height;
  }
}

function draw() {
  background(0);

  if (i < values.length) {
    for (let j = 0; j < values.length - i - 1; j++) {
      let a = values[j];
      let b = values[j + 1];
      if (a > b) {
        // fill(0, 128, 0);
        // rect(j * barWidth, height - values[j], 3, values[j]);
        // stroke(255, 0, 0);
        // rect((j + 1) * barWidth, height - values[j + 1], 3, values[j + 1]);
        swap(values, j, j + 1);
      } else {
        stroke(255);
        rect(i * barWidth, height - values[i], 3, values[i]);
      }
    }
  } else {
    console.log("finished");
    noLoop();
  }

  for (let k = 0; k < values.length; k++) {
    if (k > values.length - i - 1) stroke(0, 0, 255);
    else stroke(255);
    rect(k * barWidth, height - values[k], 3, values[k]);
  }
  i++;
  // frameRate(3);
}

function swap(arr, a, b) {
  let temp = arr[a];
  arr[a] = arr[b];
  arr[b] = temp;
}
