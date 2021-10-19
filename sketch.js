
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

let engine;
let world;
var ground;

function setup(){
  createCanvas(1350,650);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground();
 
    //0 
    block1 = new Block(900,610);
    block2 = new Block(900,560);
    block3 = new Block(900,510);
    block4 = new Block(900,460);
    block5 = new Block(900,410);
    block6 = new Block(900,360);
    block7 = new Block(900,310);
    block8 = new Block(900,260);
    block9 = new Block(900,210);
    block10 = new Block(900,160);
    block11 = new Block(900,110);

    //1
    block1o1 = new Block(950,610);
    block2o1 = new Block(950,560);
    block3o1 = new Block(950,510);
    block4o1 = new Block(950,460);
    block5o1 = new Block(950,410);
    block6o1 = new Block(950,360);
    block7o1 = new Block(950,310);
    block8o1 = new Block(950,260);
    block9o1 = new Block(950,210);

    //2
    block1o2 = new Block(1000,610);
    block2o2 = new Block(1000,560);
    block3o2 = new Block(1000,510);
    block4o2 = new Block(1000,460);
    block5o2 = new Block(1000,410);
    block6o2 = new Block(1000,360);
    block7o2 = new Block(1000,310);

    //3
    block1o3 = new Block(1050,610);
    block2o3 = new Block(1050,560);
    block3o3 = new Block(1050,510);
    block4o3 = new Block(1050,460);
    block5o3 = new Block(1050,410);

    //-1 (oo1....)
    block1oo1 = new Block(850,610);
    block2oo1 = new Block(850,560);
    block3oo1 = new Block(850,510);
    block4oo1 = new Block(850,460);
    block5oo1 = new Block(850,410);
    block6oo1 = new Block(850,360);
    block7oo1 = new Block(850,310);
    block8oo1 = new Block(850,260);
    block9oo1 = new Block(850,210);

    //-2 (oo2....)
    block1oo2 = new Block(800,610);
    block2oo2 = new Block(800,560);
    block3oo2 = new Block(800,510);
    block4oo2 = new Block(800,460);
    block5oo2 = new Block(800,410);
    block6oo2 = new Block(800,360);
    block7oo2 = new Block(800,310);

    //-3 (oo3....)
    block1oo3 = new Block(750,610);
    block2oo3 = new Block(750,560);
    block3oo3 = new Block(750,510);
    block4oo3 = new Block(750,460);
    block5oo3 = new Block(750,410);

    ball = new Ball();
    chain = new Chain({x:400,y: 90},ball.body)

  Engine.update(engine);

}

function draw() {
  background(51);
  // mouseDragged();
  ground.display();

  //0
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();

  //1
  block1o1.display();
  block2o1.display();
  block3o1.display();
  block4o1.display();
  block5o1.display();
  block6o1.display();
  block7o1.display();
  block8o1.display();
  block9o1.display();

  //2
  block1o2.display();
  block2o2.display();
  block3o2.display();
  block4o2.display();
  block5o2.display();
  block6o2.display();
  block7o2.display();

  //3
  block1o3.display();
  block2o3.display();
  block3o3.display();
  block4o3.display();
  block5o3.display();

  //-1
  block1oo1.display();
  block2oo1.display();
  block3oo1.display();
  block4oo1.display();
  block5oo1.display();
  block6oo1.display();
  block7oo1.display();
  block8oo1.display();
  block9oo1.display();

  //-2
  block1oo2.display();
  block2oo2.display();
  block3oo2.display();
  block4oo2.display();
  block5oo2.display();
  block6oo2.display();
  block7oo2.display();

  //-3
  block1oo3.display();
  block2oo3.display();
  block3oo3.display();
  block4oo3.display();
  block5oo3.display();

  ball.display();
  chain.display();
}

function mouseDragged(){
  Matter.Body.setPosition(ball.body,{x:mouseX, y:mouseY})
}

