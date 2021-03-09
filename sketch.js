var PLAY = 1;
var END = 0;
var gameState = PLAY;

var boy1, goldCoinImg, copImg;
var magnetImg, obstacleImg, trophyImg;
var germImg, goldBarImg;
var bg, bgImg;
var ground;

function preload(){
boy1 = loadAnimation("animation 1 boy.png","animation 2 boy.png","animation 3 boy.png","animation 4 boy.png");
copImg = loadImage("cop.jpg");
magnetImg = loadImage("magnet edited.jpg");
obstacleImg = loadImage("obstacle 1.png");
trophyImg = loadImage("trophy.png");
germImg = loadImage("warning germ.png");
goldBarImg = loadImage("goldbar.png");
bgImg = loadImage("bg img.jpg");
obstacleImg = loadImage("obstacle 1.png");
}

function setup(){
createCanvas(1000,650);
bg = createSprite(400,300,1200,600);
bg.addImage("bgImg",bgImg);
bg.scale = 3;
bg.velocityX = -4;
ground = createSprite(400,600,2400,20);
ground.shapeColor = "brown";
ground.velocityX = -8;
jake = createSprite(50,580,20,250);
jake.addAnimation("jakeImg",boy1);
jake.scale = 0.5;
//console.log(bg.x);
}

function draw()
{
        background('cyan');
        if(ground.x === 200){
            ground.x = ground.width/2;
        }

        if(bg.x === 200){
            bg.x = 600;
        }

        if(keyDown("space")&& jake.y>=455) {
            jake.velocityY = -15;
        }

        jake.velocityY+=0.5;

        jake.collide(ground);

        console.log(bg.x);
        spawnObstacles();
        drawSprites();
}

function spawnObstacles(){
    if(frameCount%250 === 0){
        obstacle = createSprite(500,550,10,60);
        obstacle.velocityX = -2;
        obstacle = addImage("obstacle 1.png",obstacleImg);
    }
}