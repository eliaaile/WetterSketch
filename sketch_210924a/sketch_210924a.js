function setup() {
createCanvas(1000, 1000);
background(153);

fill(255, 255,0);
strokeWeight(0);
ellipse(0,0,300,300);


strokeWeight(10);
stroke(255,255,0);

for(let i = 0; i<=16; i++) {
    line(50, 0, 250, 0);
    rotate(2 * PI / 16 * i);
  }






}
