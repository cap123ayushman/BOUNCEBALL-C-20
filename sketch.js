
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine,world,ground,ball;



function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;
  

var ground_options={
  isStatic:true
}

  ground = Bodies.rectangle(200,380,400,20,ground_options);
  World.add(world,ground);

  var ball_options={
  restitution:1.0  
  }

  ball = Bodies.circle(100,10,40,ball_options);
  World.add(world,ball);
  
  
  console.log(ground)
  console.log(ball)

  
}


function draw() 
{
  background("green");
  Engine.update(engine);
  
 rectMode(CENTER) 
  ellipseMode(RADIUS)
fill("red")
ellipse(ball.position.x,ball.position.y,40);
fill("blue")
rect(ground.position.x,ground.position.y,400,20);
 


  
  
}

