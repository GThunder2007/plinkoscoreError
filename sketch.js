const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var plinkos = [];
var divisions = [];

var score = 0;
var particle = null;

var gameState = "start";

var turn = 0;


var world,engine;

var divisionHeight=300;

function setup() {
	createCanvas(480, 800);

	engine = Engine.create();
	world = engine.world;

	ground = new Ground(600,height,1200,10);



	for(var k = 0; k <=480; k = k + 80)
	{
	   divisions.push(new Divisions(k, height-divisionHeight/2, 5, divisionHeight));
	} 

for (var j = 40; j <=width; j=j+50) 
{
	plinkos.push(new Plinko(j,75));
} 


for (var j = 15; j <=width-10; j=j+50) 
{
	plinkos.push(new Plinko(j,175));
} 


for (var j = 40; j <=width; j=j+50) 
{
	plinkos.push(new Plinko(j,275));
} 

for (var j = 15; j <=width-10; j=j+50) 
{
	plinkos.push(new Plinko(j,375));
} 

}
function draw() {
	Engine.update(engine)
	rectMode(CENTER);
	background(0);
	stroke("white");
	textSize(20); 
	fill("white");

	if(gameState!=="end")
	{
		textSize(20); 
		text("GAME OVER!", 175, 220)
	}	
	
	// Score Texts
	text("500", 23, 600)
	text("500", 104, 600)
	text("100", 180, 600)
	text("100", 259, 600)
	text("200", 339, 600)
	text("200", 420, 600)
	//

	text("SCORE: " + score, 50, 25)
	
	
	 for (var i = 0; i < plinkos.length; i++) {
	   
	   plinkos[i].display();
	   
	 }

	 for (var k = 0; k < divisions.length; k++) {
	   
	   divisions[k].display();
	
	
	   if(particle!=null) {
		if(frameCount%90 === 0)
		particle.display();
	
		if (particle.body.position.y>760){
		  if (particle.body.position.x < 300) {
			score=score+500;
			particle=null;
			if (count>= 5) gameState = "end";
		  }
		  if (particle.body.position.x < 300) {
		  score=score+500;
		  particle=null;
		  if (count>= 5) gameState = "end";
		}
		}
	  }
	 }
	}
	
	function mousePressed() {
	  if(gameState!=="start")
	  {
		  count++;
		  particle=new Particle(mouseX, 10, 10, 10)
	  }
	}
	