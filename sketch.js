var canvas;
var playerCount;
var gameState=0;
var PaddleBasedWall,PaddleBasedWallButton1,PaddleBasedWallButton2;
var backgroundIMG;
var WaterCircleDoor,FireCircleDoor;
var greenGoose;
var waterCircle,FireCircle;
var levelCounter =0;
function preload(){
backgroundIMG = loadImage("background.jpg");
}
function setup(){
    canvas = createCanvas(1200,800);
    background(backgroundIMG);
    fill("brown")
  rect(0,770,1200,30)
  rect(1200,570,-1000,30)
  rect(0,370,1000,30)
  rect(1200,170,-1000,30)
  waterCircle=createSprite(1100,750,20,20);
  FireCircle=createSprite(1140,750,20,20);
  waterCircle.shapeColor="blue";
  FireCircle.shapeColor="red";
  drawObstacles(1000,770,100,10,"red")
  drawObstacles(500,770,100,10,"blue");
  drawBalancersAndAdaptiviters(200,770,20,10,"orange");
  drawBalancersAndAdaptiviters(50,770,100,10,"orange");
  drawBalancersAndAdaptiviters(250,570,20,10,"orange")
  drawObstacles(500,570,100,10,"green")
  drawBalancersAndAdaptiviters(800,550,50,50,"grey")
  drawObstacles(800,370,150,10,"red")
  drawObstacles(500,370,150,10,"blue")
  drawBalancersAndAdaptiviters(50,340,100,120,"brown")
  drawObstacles(300,170,150,10,"red")
  drawObstacles(675,170,350,10,"blue")
  drawBalancersAndAdaptiviters(800,160,99,10,"red")
  drawGoals(1000,120,88,100,"red")
  drawGoals(1100,120,88,100,"blue")
}
function draw(){
drawSprites()
}
function drawObstacles(x,y,width,height,shapeColor){
this.obstacle=createSprite(x,y,width,height);
this.obstacle.shapeColor=shapeColor;
}
function drawBalancersAndAdaptiviters(x,y,width,height,shapeColor){
  this.Balancers=createSprite(x,y,width,height);
  this.Balancers.shapeColor=shapeColor;
  }
  function drawDiamonds(x,y,width,height,shapeColor){
    this.diamonds=createSprite(x,y,width,height);
    this.diamonds.shapeColor=shapeColor;
    }
    function drawGoals(x,y,width,height,shapeColor){
      this.obstacle=createSprite(x,y,width,height);
      this.obstacle.shapeColor=shapeColor;
      }