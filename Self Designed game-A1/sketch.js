var canvas;
var backgroundImage;

function preload() {
  backgroundImage = loadImage("Images/gm1.jpg");
  
}

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  
}

function draw() {
  background(backgroundImage);
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
