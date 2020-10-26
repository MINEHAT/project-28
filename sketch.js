
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var tree,ground;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	tree = new Tree(670,500,20,400);
	ground = new Ground(800,700,1000,20);




	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  var x = mouseX;
  var y = mouseY;
  text(x + "," + y,x,y);

  tree.display();
  ground.display();
  
  drawSprites();
 
}



