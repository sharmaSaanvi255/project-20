var car,wall;
var speed,weight;


function setup() {
  createCanvas(1600,400);
  
 car= createSprite(1000, 350, 50, 50);
 car.velocityX=speed;
 speed = -2;
 car.shapeColor="green";

 wall=createSprite(1000,200,60,height/2);
 wall.shapeColor="red";

  speed=random(55,90);
  weight=random(400,1500);
}

function draw() {
  background(200); 
  
   
  drawSprites();
}