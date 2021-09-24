function setup() {
createCanvas(1000, 1000);
background("blue");
frameRate(60);

//Sonne
fill(255, 255,0);
strokeWeight(0);
ellipse(0,0,300,300);

//Wolke
fill("grey");
 ellipse(700,100,100,100);
 ellipse(610,125,100,100);
 ellipse(790,125,100,100);
 rect(610,125,190,50);
 
  //Boden
 fill("green")
 rect(0,800, 1000,200);
 
 //Blitz
 fill("white");
 quad(380,150, 420,150, 380,230, 360,230);
 quad(355,245, 360,230, 425,210, 420,225);
 quad(421,220,  380,340, 380,330, 400,230);
 
 
 //Wolke B
fill("grey");
 ellipse(400,100,100,100);
 ellipse(310,125,100,100);
 ellipse(490,125,100,100);
 rect(310,125,190,50);
 
//Pfütze
fill(0,100,255);
ellipse(700,810,400,100);
fill("blue");
rect(500,750,400,50);

 //Sonnenstrahlen
strokeWeight(10);
stroke(255,255,0);
for(let i = 0; i<=16; i++) {
    line(50, 0, 250, 0);
    rotate(2 * PI / 16 * i);
  }
 
}


function draw() {
 //Regen
  stroke(100, 100, 255);
  strokeWeight(2);
  
  let x = random(550,850);
  let y = random(180,750);
  
   line(x,y,x,y + 40);

  stroke(0, 0, 255, 200);
  strokeWeight(10);
  
  let x2 = random(550,850);
  let y2 = random(180,750);
  
   line(x2,y2,x2,y2 + 40);

}
