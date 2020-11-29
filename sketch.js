var bullite,thikness;
var wall;
var speed;
var weght;
function setup() {
  createCanvas(800,400);

   weight = random(55,90);
   speed = random(0,200);

   thikness = random(12,83);
  bullite = createSprite(50, 200, 50, 10);
  bullite.velocityX = speed;

  wall = createSprite(750,200,thikness,height/2);
  //wall.shapeColor=(250);  
  console.log(wall.height);
  
}

function draw() {
  background(0);  
  
  /*wall.shapeColor = (225);
  if(wall.x-car.x < (car.width + wall.width)/2){
    car.velocityX=0;
    var deformation=0.5 * weight * speed * speed / 22509;
  if(deformation>180){
    car.shapeColor = color (225,0,0);
  }
  if(deformation<100){
    car.shapeColor = color (0,255,0);
  }
  if(deformation<180 && deformation>100 ){
    car.shapeColor = color (230,230,0);
  } 
}**/

if (hasCollid(bullite,wall)){
  bullite.velocityX=0;
  var damage=0.5*weight*speed*speed/(thikness*thikness*thikness);

  if(damage>10){
    wall.shapeColor=color(255,0,0);
  }

  if(damage<10){
    wall.shapeColor=color(0,255,0);
  }
}
hasCollid(bullite,wall);

  drawSprites();
}
function hasCollid(lbullet,lwall){
   bulletRightEdge=lbullet.x+lbullet.width;
   wallLeftEdge=lwall.x;
   if(bulletRightEdge>=wallLeftEdge){
     return true;
   }
   return false;
}