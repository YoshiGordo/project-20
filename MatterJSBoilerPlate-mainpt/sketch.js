var plane;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{

}

function setup() {
	createCanvas(500, 500);
	engine = Engine.create();
	world = engine.world;

	var block1_options = {
		restitution: 0.5,
		friction:0.02,
		fricitionAir:0
		}
	
		var block2_options = {
		restitution: 0.7,
		friction:0.01,
		fricitionAir:0.1
		}
	  
		var block3_options = {
		restitution: 0.01,
		friction:1,
		fricitionAir:0.3
		}
	
	
	

	//Crie os Corpos Aqui.

	var plane_options={
	isStatic:true
	}
	plane = Bodies.rectangle(250,350,1200,2,plane_options);
	World.add(world,plane);
	
	block1 = Bodies.circle(220,35,35,block1_options);
    World.add(world,block1);

	block2 = Bodies.rectangle(110,50,35,35,block2_options);
    World.add(world,block2);
	
	block3 = Bodies.rectangle(350,50,65,40,block3_options);
    World.add(world,block3);
	
	Engine.run(engine);

}


function draw() {
  rectMode(CENTER);
  ellipseMode(RADIUS);
  background("green");
  Engine.update(engine);
  drawSprites();
 
  ellipse(block1.position.x,block1.position.y,35);
  rect(block2.position.x,block2.position.y,35,35);
  rect(block3.position.x,block3.position.y,65,40);
  rect(plane.position.x,plane.position.y,1200,2);
 

}



