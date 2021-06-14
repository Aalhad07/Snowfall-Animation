var Engine = Matter.Engine;
  const World = Matter.World;
  const Events = Matter.Events;
  const Bodies = Matter.Bodies;
 
var particles = [];

function preload() {
  bg = loadImage ("snow2.jpg")
}

function setup() {
  createCanvas(1000, 600);
  engine = Engine.create();
  world = engine.world;
  
}

function draw() {
  background(bg);
  Engine.update(engine)
  if(frameCount%10===0){
    particles.push(new Snow(Math.round(random(50,950)),0))
  }  

  for (var j = 0; j < particles.length; j++) {
    particles[j].display();
  }
  drawSprites();
}