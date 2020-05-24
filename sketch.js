var gameState = 0;
var backGround,Button;
var Pointer;


function preload()
{
 backGround = loadImage("sprites/WORLD MAP 2.jpg"); 
}


function setup()
 {
  createCanvas(displayWidth,displayHeight-115);
  Pointer = createSprite(500,450,50,50);
}


function draw() 
{
  background(255,255,255);  

  if(gameState === 0)
  {
    background(backGround);
    StartGame();
  }

  drawSprites();
}


function Createbutton()
{
  Button = createButton('START');
}

function StartGame()
{
  if(mousePressedOver(Pointer))
  {
    gameState = 1; 
    console.log("gameState");
    Pointer.visible = false;
  }
}
