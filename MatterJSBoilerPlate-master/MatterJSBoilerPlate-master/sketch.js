
var box1,box2,box3;
var paperBody,ground,paperImage,dustbinImage;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);
	



	

	//groundSprite=createSprite(width/2, height-35, width,10);
	//groundSprite.shapeColor=color(255)

	//box1=createSprite(540, 649, 200,20);
	//box2=createSprite(450, 600, 20,100);
	//box3=createSprite(630, 600, 20,100);
	
	//box1.shapeColor="red"
	//box2.shapeColor="red"
	//box3.shapeColor="red"


	engine = Engine.create();
	world = engine.world;
	
	
	

	 paperBody= Bodies.circle(100 , 10 , 40, {restitution:0.7,isStatic:false});
	World.add(world, paperBody);
	
	
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 20 , {isStatic:true} );
 	World.add(world, ground);

	 box1 = Bodies.rectangle(690, 649, 200, 20 , {isStatic:true} );
	 World.add(world, box1);
	 box2 = Bodies.rectangle(600, 600, 20, 100 , {isStatic:true} );
 	World.add(world, box2);

	 box3 = Bodies.rectangle(790, 600, 20, 100 , {isStatic:true} );
 	World.add(world, box3);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  rect(box1.position.x,box1.position.y,200,20)
  rect(ground.position.x,ground.position.y,width,10)
  rect(box2.position.x,box2.position.y,20,100)
  rect(box3.position.x,box3.position.y,20,100)
  ellipseMode(RADIUS);

  ellipse(paperBody.position.x,paperBody.position.y,30,30);
  drawSprites();
 
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
		// Look at the hints in the document and understand how to make the package body fall only on
  Matter.Body.applyForce(paperBody.body,paperBody.body.position,{x:85,y:-85});
	
 }
} 

