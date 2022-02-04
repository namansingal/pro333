const Engine=Matter.Engine
const World=Matter.World
const Bodies=Matter.Bodies

var snow,boyimg,engine,world,boy
function preload(){
   snow=loadImage("snow1.jpg")
  boyimg=loadImage("boy img.jpg")  

} 
 
 
 
 
 
 
 
 
 function setup() {
  createCanvas(800,400);
engine=Engine.cerate()
world=engine.world
 var boy= createSprite(400, 200, 20, 20);
 boy.addImage(boyimg)
 boy.scale=0.2
}

function draw() {
  background(snow);  
  drawSprites();
}