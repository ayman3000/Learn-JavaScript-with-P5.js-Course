let theta = 0;
let r = 200;
let flag = true;

function setup() {
  createCanvas(600, 600);
  angleMode(DEGREES);
}

function draw() {
  background(220);
  
  // Draw nucleus circle
  translate(width/2, height/2);
  fill('black');
  noStroke();
  circle(0,0,40);
  
  
  // Draw the orbit circle
  noFill();
  stroke('green');
  strokeWeight(4);
  circle(0,0,2 * r);
  
  // Draw electron circle
  
  x = r * cos(theta);
  y = r * sin(theta);
  
  line(0,0,x,y);
  noStroke();
  fill('red');
  circle(x,y,20);
  theta++;
}

function mousePressed() {

  if(flag) noLoop();
  else loop();
  flag = !flag;
}