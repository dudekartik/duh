const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
var engine, world
var particles=[]
var plinkos=[]
var divisions=[]
var div,plin,part

function setup() {
  createCanvas(810,800);

  engine = Engine.create();
  world = engine.world;

 for(var x=0; x<=800; x=x+80 ){
  div=new Ground(x,650,10,300)
  divisions.push(div)
 }
  ground=new Ground(400,795,8000,10)
}

function draw() {
  background("black");  
  drawSprites();

  if(frameCount%60===0){
    particles.push(new Particle(random(width/2-30, height/2+10), 10,10));
   
  }

 for (var j = 0; j < particles.length; j++) {
  
    particles[j].display();
  }
  
  for(var k=0; k<divisions.length; k++){
    divisions[k].display()
  }
  ground.display()
}
