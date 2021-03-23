var canvas,box,surfaces1,surfaces2,surfaces3,surfaces4;
var music,box,edges;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(400,400);

    //create 4 different surfaces
    surfaces1 = createSprite(200,10,90,10);
    surfaces1.shapeColor=("orange");
    surfaces2= createSprite(200,390,90,10);
    surfaces2.shapeColor=("pink");
    surfaces3= createSprite(10,200,10,90);
    surfaces3.shapeColor=("green");
    surfaces4= createSprite(390,200,10,90);
    surfaces4.shapeColor=("blue");

    //create box sprite and give velocity
    box = createSprite(random(20,750), 100, 20, 20); 
    box.shapeColor=("white");
    box.velocityY=3;
    box.velocityX=2;

    edges = createEdgeSprites();
}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
    createEdgeSprites();
    box.bounceOff(edges);

    //add condition to check if box touching surface and make it box
    if (box.isTouching(surfaces1) && box.bounceOff(surfaces1) ){
        box.shapeColor=("orange")
        music.play
        box.bounceOff(surfaces1);
    }

    if (box.isTouching(surfaces2) && box.bounceOff(surfaces2) ){
        box.shapeColor=("pink") 
        music.play
        box.bounceOff(surfaces2);
    }

    if (box.isTouching(surfaces3) && box.bounceOff(surfaces3) ){
        box.shapeColor=("green") 
        music.play
        box.bounceOff(surfaces3);
    }

    if (box.isTouching(surfaces4) && box.bounceOff(surfaces4) ){
        box.shapeColor=("blue") 
        music.play
        box.bounceOff(surfaces4);
    }

    drawSprites();
}
