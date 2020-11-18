
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var wall1,wall2,wall3,groundSprite,paperObject;




function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	wall1=createSprite(250,620,20,100);
	wall1.shapeColor="red"

	wall2=createSprite(450,620,20,100);
	wall2.shapeColor="red"

	wall3=createSprite(350,650,180,20);
	wall3.shapeColor="red"

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255);

	Matter.Bodies.circle(40,20,10,[paperObject],[4]);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}
function keyPressed(){
	if (keyCode === UP_ARROW){

	Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:85});
}
}