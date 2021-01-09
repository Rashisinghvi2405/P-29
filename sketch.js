const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

function setup(){
    stand = new Ground(200,235,40,5);
    //level 2
    block1 = new Box(330,235,30,40);
    block2 = new Box(360,235,30,40);
    block3 = new Box(390,235,30,40);
    block4 = new Box(420,235,30,40);
    block5 = new Box(450,235,30,40);

    //level 3
    block6 = new Box(360,195,30,40);
    block7 = new Box(390,195,30,40);
    block8 = new Box(420,195,30,40);

    //top
    block9 = new Box(390,155,30,40);

    polygon = Bodies.circle(50,200,20);

    slingshot = new SlingShot(this.polygon,{x:100, y:200});
}

function draw(){
    background("black");
    Engine.update(engine);

    stand.display();

    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();

    block6.display();
    block7.display();
    block8.display();

    block9.display();
}

function mouseDragged(){
    Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}