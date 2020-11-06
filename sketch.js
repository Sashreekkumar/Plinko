
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
var engine, world; 
var arr1= []


function setup() {
	createCanvas(480, 600);

	engine = Engine.create();
	world = engine.world;

	division1= new Ground(5,450, 10, 300)
	division2= new Ground(90,450, 10, 300)
	division3= new Ground(175,450, 10, 300)
	division4= new Ground(300,450, 10, 300)
	division5= new Ground(375,450, 10, 300)
	division6= new Ground(280,450, 10, 300)
	division7= new Ground(430,450, 10, 300)
	division8= new Ground(475,450, 10, 300)
	
	base= new Ground(240, 595, 600, 10)

	plinko1= new Plinko(40, 50, 10, 10)
	plinko2= new Plinko(120, 50, 10, 10)
	plinko3= new Plinko(200, 50, 10, 10)
	plinko4= new Plinko(280, 50, 10, 10)
	plinko6= new Plinko(360, 50, 10, 10)
	plinko7= new Plinko(440, 50, 10, 10)

	plinko11= new Plinko(80, 100, 10, 10)
	plinko12= new Plinko(160, 100, 10, 10)
	plinko13= new Plinko(240, 100, 10, 10)
	plinko14= new Plinko(320, 100, 10, 10)
	plinko15= new Plinko(400, 100, 10, 10)

	plinko111= new Plinko(40, 150, 10, 10)
	plinko112= new Plinko(120, 150, 10, 10)
	plinko113= new Plinko(200, 150, 10, 10)
	plinko114= new Plinko(280, 150, 10, 10)
	plinko116= new Plinko(360, 150, 10, 10)
	plinko117= new Plinko(440, 150, 10, 10)
	
	plinko011= new Plinko(80, 200, 10, 10)
	plinko012= new Plinko(160, 200, 10, 10)
	plinko013= new Plinko(240, 200, 10, 10)
	plinko014= new Plinko(320, 200, 10, 10)
	plinko015= new Plinko(400, 200, 10, 10)

	plinko1110= new Plinko(40, 250, 10, 10)
	plinko1120= new Plinko(120, 250, 10, 10)
	plinko1130= new Plinko(200, 250, 10, 10)
	plinko1140= new Plinko(280, 250, 10, 10)
	plinko1160= new Plinko(360, 250, 10, 10)
	plinko1170= new Plinko(440, 250, 10, 10)

	particle =new Particle(random(width/2+10, width/2-10),20,  10, 10)
	
	
	Engine.run(engine);
  
}


function draw() {
Engine.update(engine);
  rectMode(CENTER);
  strokeWeight(1)
  background(211,211,211);

 base.display();
 //division7.display();
 division8.display();
 division6.display();
 division5.display();
 //division4.display();
 division3.display();
 division2.display();
 division1.display();

plinko1.display()
plinko2.display()
plinko3.display()
plinko4.display()
plinko6.display()
plinko7.display()

plinko11.display()
plinko15.display()
plinko13.display()
plinko14.display()
plinko12.display()

plinko111.display()
plinko117.display()
plinko113.display()
plinko114.display()
plinko112.display()
plinko116.display()

plinko011.display()
plinko015.display()
plinko013.display()
plinko014.display()
plinko012.display()

plinko1110.display()
plinko1170.display()
plinko1130.display()
plinko1140.display()
plinko1120.display()
plinko1160.display()

console.log(arr1)

plinkopegs();

drawSprites();
}

function plinkopegs(){
	
	if (frameCount % 60===0){
		arr1.push(new Particle(random(180,300), 10, 10)) 
			}

			
		
	for (var j=  0; j < arr1.length; j++){
		arr1[j].display();
	}	
}
	


