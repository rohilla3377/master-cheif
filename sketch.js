
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject	
var world;

function preload(){
	binImg = loadimage("Images/dustbin.green.png");
}
function setup() {
	var canvas = createCanvas(1200,600);
	engine = Engine.create();
	world = engine.world;
	
	ground = new Ground();
	crumpledPaper = new Paper();
	bin = createSprite(964,520,20,20);
	bin.addImage(binImg);
	bin.scale = 0.45;

	binPart1 = new Dustbin(902,505,10,120);
	binPart2 = new Dustbin(962,565,130,120);
	binPart3 = new Dustbin(1024,505,10,120);

	groundObject=new ground(width/2,670,width,20);
	dustbinObj=new dustbin(1200,650);

	Engine.run(engine);
  
}


function draw() {
background(0);
engine.update(engine);
//text(mouseX+","+mouseY,200,200);


ground.display();
crumpledPaper.display();
bin.part1.display();
bin.part2.display();
bin.part3.display();

drowSprites();
}
function keyPressed() {
	if(keyCode ===UP_ARROW){
		Matter.body.applyForce(crumpledPaper.body,crumpledPaper.body.position)
	}
	}
	