let eyes = [];
let numEyes = 20;

function setup() {
  createCanvas(windowWidth,windowHeight);
  angleMode(DEGREES);
  for(let i = 0; i < numEyes; i++) {
    eyes.push(new Eyeball(random(width), random(height)));
  }
}

function draw() {
  background(0);
  for (let i = 0; i < numEyes; i++) {
    eyes[i].display();    
  } 
}
  

class Eyeball {
  constructor(x, y) {
  this.x = x;
  this.y = y;
  this.d = random(60, 150);  
  }
  
  display() {
    
     let overlapping = false;
  for (let i = 0; i < numEyes; i++) {
    let other = eyes[i];
    let distance = dist(this.x, this.y, other.x, other.y);
    if (distance < this.d/2 + other.d/2) {
      overlapping = true;
    }
    if (!overlapping) {
          // Calculate angle between right eye and angle
  let rightAngle = atan2(mouseY - this.y, mouseX - this.x);

  push();
  translate(this.x, this.y); 
  fill(255);
  ellipse(0, 0, this.d);
  rotate(rightAngle);
  fill(0);
  ellipse(12.5, 0, this.d/2);
  pop();
    }
  }
     
  } 
 
}

 function windowResized() {
    resizeCanvas(windowWidth,windowHeight);
  }