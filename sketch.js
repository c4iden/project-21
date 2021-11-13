
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball;
var groundobj;
var leftside, rightside;
var roof;
var rightwall,leftwall;
function preload()
{
	
}

function setup() {
	createCanvas(1600,700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
var ball_options={
	isStatic:false,
	restitution:0.3,
	friction:0,
	density:1.2
 }

	ball=Bodies.circle(100,100,40,ball_options);
	World.add(world,ball);
	 Engine.run(engine);
  groundobj=new Ground(800,670,1600,20);
  leftside=new Ground(1100,600,20,120);
  rightside=new Ground(1350,600,20,120);
  roof=new Ground(800,30,1600,20);
  rightwall=new Ground(1570,350,20,700);
  leftwall=new Ground(30,350,20,700);
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
  ellipse(ball.position.x, ball.position.y,40);
  groundobj.display()
  leftside.display()
  rightside.display()
  roof.display()
  rightwall.display()
  leftwall.display()
}

function keyPressed(){
	if (keyCode === RIGHT_ARROW) {
		Matter.Body.applyForce(ball,ball.position,{x:100,y:-200})

	}
	if (keyCode === LEFT_ARROW) {
		Matter.Body.applyForce(ball,ball.position,{x:-100,y:-200})

	}
}


