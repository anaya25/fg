var foodie , Food = 0 ;
var path , pathImg , endImg;
var Sf , SfImg ;
var donut , donutImg;
var burger , burgerImg;
var donutG , burgerG , swordG;



// Game State
var PLAY=1;
var END=0;
var gameState=1;



function preload(){
foodieImg = loadAnimation("fatty.jpg","fatty2.jpg","fatty3.jpg","fatty4.jpg");
pathImg = loadImage("path.jpg");
Sf = loadImage("Sf.jpg");
donutImg = loadImage("donut-float.png");
burgerImg = loadImage("burger.png");
endImg = loadImage("gameOver.png");
}

function setup() {
    createCanvas(windowWidth,windowHeight);

    // Moving background
    path=createSprite( width/2 , 900);
    path.addImage(pathImg);
    path.velocityY = 5;
    path.scale = 4.5;

foodie = createSprite( width/2,height-20,20,20);
foodie.addAnimation("fatty",foodieImg);
foodie.scale= 0.5;

donutG = new Group;
burgerG = new Group;
swordG = new Group;
 
}

function draw() {

    if(gameState===PLAY){
        background(0);
        foodie.x = World.mouseX;
        
        edges= createEdgeSprites();
        foodie.collide(edges);
        
        //code to reset the background
        if(path.y > height ){
          path.y = height/2;
        }
         

    donut();
    burger();
    Sword();

    if (donutG.isTouching(foodie)) {
        donutG.destroyEach();
        Food=Food+1;
      }
      else if (burgerG.isTouching(foodie)) {
        foodieG.destroyEach();
        Food=Food+1;
}
else{
    if(swordG.isTouching(foodie)) {
      gameState=END;
      
      foodie.addAnimation("fattyrunning",endImg);
      foodie.x=200;
      foodie.y=300;
      foodie.scale=0.6;
      
      donutG.destroyEach();
      burgerG.destroyEach();
      
      
      donutG.setVelocityYEach(0);
      burgerG.setVelocityYEach(0);

   }
}

drawSprites()
textSize(28);
  fill(255);
  text("Food: "+ Food,150,30);
 }


}

function donut(){
    if (World.frameCount % 200 == 0) {
        var donut = createSprite(Math.round(random(50,width-50),40, 10, 10));
        donut.addImage(donutImg);
        donut.scale=0.12;
        donut.velocityY = 3;
        donut.lifetime = 230;
        donutG.add(donut);
        }
}

function burger(){
    if (World.frameCount % 300 == 0) {
        var burger = createSprite(Math.round(random(50, width-50),40, 10, 10));
        burger.addImage(diamondsImg);
        burger.scale=0.03;
        burger.velocityY = 3;
        burger.lifetime = 220;
        burgerG.add(burger);
      }

}

function Sword(){
    if (World.frameCount % 530 == 0) {
    var sword = createSprite(Math.round(random(50,width-50),40, 10, 10));
    sword.addImage(SwordImg);
    sword.scale=0.1;
    sword.velocityY = 3;
    sword.lifetime = 350;
    swordGroup.add(sword);
    }
  }