function setup() {
  createCanvas(400, 300);
}

function draw() {
  background(255);
  drawFlag();
}

function drawFlag() {
  // Top Blue rectangle
  fill(0, 56, 168);
  rect(0, 0, width, height * 1 / 2);
  
  //Bottom blue rectangle
  rect(0, height * 1 / 2, width, height / 2);

  //Top red rectangle
  fill(206, 17, 38); 
  rect(200, 0, width/2, height * 1 / 2);
  
  
  // Bottom Red rectangle
  fill(206, 17, 38); 
  rect(0, height * 1 / 2, width/2, height / 2);
  

  // White cross
  const crossWidth = width * 5 / 32;
  const crossHeight = height / 5;
  const crossX = width / 2 - crossWidth / 2;
  const crossY = height / 2 - crossHeight / 2;

  fill(255);
  noStroke();
  rect(crossX, 0, crossWidth, height);
  rect(0, crossY, width, crossHeight);
}
