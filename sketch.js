var car,wall;
var speed,weight;
var touras,cyclap,zenia;
var deformation;


function setup() {
  createCanvas(1600,400);
  
 car= createSprite(1000, 350, 50, 50);

 speed=random(55,90);
 weight=random(400,1500);
 car.velocityX = speed;

 car.shapeColor="green";

 wall=createSprite(1000,200,60,height/2);
 wall.shapeColor="red";
}

function draw() {
  background(200);
  
  if(wall.x-car.x < (wall.width+ car.width)/2){
  car.velocityX=0;
  deformation=0.5*weight*speed*speed/2250;
  }

  if (deformation>180) {
    car.shapeColor="magenta";
  } else if (deformation>100 && deformation<180)
   {
    car.shapeColor="purple";
  } else (deformation<100)
   {
    car.shapeColor="pink";
  }
  drawSprites();
  }
  
   
  