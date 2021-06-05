
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var gr;
var papper1;
var dust;
var dust1;
var dust2;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

  //Create the Bodies Here.
  gr= new Ground(400,500,900,10);
  papper1= new papper(100,200,10);
  dust= new dustbin(400,500,200,20);
  dust1= new dustbin(310,450,20,100);
	dust2= new dustbin(500,450,20,100);
  
}


function draw() {
  Engine.update(engine);
  background("cyan");
  gr.display();
  papper1.display();
  dust.display();
 dust1.display();
  dust2.display();
  
  drawSprites();

 
}



  function mouseDragged (){
    Matter.Body.setPosition(papper1.body, {x: mouseX , y: mouseY});
  }
  








