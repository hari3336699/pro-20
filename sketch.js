function preload(){
  bg=loadImage("images/iss.png");
  sleep=loadImage("images/sleep.png");
  brush=loadAnimation("images/brush.png");
  gym=loadAnimation("images/gym1.png","images/gym2.png");
  eat=loadAnimation("images/eat1.png","images/eat2.png");
  bath=loadAnimation("images/bath1.png","images/bath2.png");
  drink=loadAnimation("images/drink1.png","images/drink2.png");
  move=loadAnimation("images/move.png","images/move2.png");



}





function setup() {
  createCanvas(800,400);
 createSprite(400, 200, 50, 50);

  astronaut=createSprite(300,230);
  astronaut.addAnimation("sleeping",sleep);
  astronaut.scale=0.1;




}

function draw() {
  background(bg);  
  drawSprites();

  if(keyDown("UP_ARROW")){
    astronaut.addAnimation("brushing",brush);
    astronaut.changeAnimation("brushing")
    astronaut.y=320;
    astronaut.x=125;

    astronaut.velocityX=0;
    astronaut.velocityY=0;
  }

  if(keyDown("DOWN_ARROW")){
    astronaut.addAnimation("gymming",gym);
    astronaut.changeAnimation("gymming")
    astronaut.y=290;
    astronaut.x=425;
    astronaut.velocityX=0;
    astronaut.velocityY=0;
  }

  if(keyDown("LEFT_ARROW")){
    astronaut.addAnimation("eating",eat);
    astronaut.changeAnimation("eating")
    astronaut.y=290;
    astronaut.x=205;
    astronaut.velocityX=0;
    astronaut.velocityY=0;
}
if(keyDown("RIGHT_ARROW")){
  astronaut.addAnimation("bathing",bath);
  astronaut.changeAnimation("bathing")
  astronaut.y=290;
  astronaut.x=205;
  astronaut.velocityX=0;
  astronaut.velocityY=0;
}
if(keyDown("M")){
  astronaut.addAnimation("moving",move);
  astronaut.changeAnimation("moving")
  astronaut.y=290;
  astronaut.x=205;
  astronaut.velocityX=0;
  astronaut.velocityY=0;
}
}
