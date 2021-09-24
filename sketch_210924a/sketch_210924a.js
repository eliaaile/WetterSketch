function setup() {
createCanvas(1000, 1000);
background("blue");
frameRate(1);

fill(255, 255,0);
strokeWeight(0);
ellipse(0,0,300,300);

fill("grey");
 ellipse(700,100,100,100);
 ellipse(610,125,100,100);
 ellipse(790,125,100,100);
 rect(610,125,190,50);
 

 
strokeWeight(10);
stroke(255,255,0);

for(let i = 0; i<=16; i++) {
    line(50, 0, 250, 0);
    rotate(2 * PI / 16 * i);
  }
 






}
function draw() {
  stroke(100, 100, 255)
  strokeWeight(2);
  
  let x = random(600,900);
  let y = random(200,800);
  
   line(x,y,x,y + 40);


}
