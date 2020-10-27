// creating global variables
var back, backImg;
var ground;
var pikachu, pikachuImg;
var cactus, cactusImg, cactusGroup;
var food, foodImg,  foodGroup;
var soda, sodaImg, sodaGroup;
var score = 0;

function preload(){
backImg = loadImage("background.png");
pikachuImg = loadImage("main.png");
cactusImg = loadImage("cactus.png");
foodImg = loadImage("food.png");
sodaImg = loadImage("soda.png");
}

function setup() {
 createCanvas(600, 400);
back = createSprite(200, 200);
back.addImage(backImg);
back.scale = 0.4;
back.velocityX = 5

ground = createSprite(300, 350, 600, 5);
ground.visible = false;

pikachu = createSprite(50, 300, 10, 10)
pikachu.addImage(pikachuImg);
pikachu.scale = 0.2

cactusGroup = createGroup();
foodGroup = createGroup();
sodaGroup = createGroup();
}

function draw() {
background("white");
if(back.x>300){
    back.x = 250
} 
if(ground.x>340){
    ground.x = 300
}
if(touches.length>0 ||keyDown("space")&&pikachu.y>=150){
    pikachu.velocityY = -5;
    touches = []
}
if(cactusGroup.isTouching(pikachu)){
    pikachu.scale = 0.2;
    cactusGroup.destroyEach();
    score = score-1
}
if(foodGroup.isTouching(pikachu)){
    pikachu.scale += 0.01;
    score += 1
    foodGroup.destroyEach();
}
if(sodaGroup.isTouching(pikachu)){
    pikachu.scale += 0.01;
    score += 1
    sodaGroup.destroyEach()
}
pikachu.velocityY = pikachu.velocityY + 0.8;
pikachu.collide(ground);
myCactus();
myFood(); 
mySoda();
drawSprites();

textSize(20);
stroke("black");
fill("black");
text("SCORE : "+score, 470, 40);
}
function myCactus(){
    if(frameCount%200 === 0){
        cactus = createSprite(610, 310, 20, 20);
        cactus.addImage(cactusImg);
        cactus.velocityX = -5
        cactus.lifetime = 300;
        cactusGroup.add(cactus);
    }
}
function myFood(){
    if(frameCount%120 === 0){
      food = createSprite(610, Math.round(random(100, 200)), 20, 20);
    food.addImage(foodImg);
      food.velocityX = -5;
      food.scale = 0.2
      foodGroup.add(food);
    }
}
function mySoda(){
    if(frameCount%180 === 0){
        soda = createSprite(610, Math.round(random(100, 200)), 20, 20);
        soda.addImage(sodaImg);
        soda.scale = 0.5;
        soda.velocityX = -5;
        sodaGroup.add(soda);
    }
}