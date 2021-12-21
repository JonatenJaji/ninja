var player1 
var player2
var canvas
var bullets
var bulletsGroup
var naruto_img
var sasuke_img

var knife_img
function preload(){
  naruto_img = loadImage("assets/th__2_-removebg-preview.png");
  sasuke_img = loadImage("assets/th__1_-removebg-preview.png");
  knife_img = loadImage("assets/kisspng-sasuke-uchiha-throwing-knife-shuriken-ninja-naruto-ninja-darts-5a6dec8c69e058.8534632515171534204337.jpg");


}
function setup(){
  canvas = createCanvas(800,600)
  database = firebase.database()
  player1 = createSprite(100,300,10,10)
  player2 = createSprite(730,300,10,70)
  player1.addImage(naruto_img)
  player2.addImage(sasuke_img)
  player2.scale = 0.5
  bulletsGroup = new Group()
}
function draw(){
  background("orange")
  player1.y = mouseY
  player2.y = mouseY
  player1.display();
  player2.display();
  
}
function spawnBullets(){
  if(frameCount%50===0){
  bullets.lifetime=15
  
  bullets = createSprite(20,300,40,40)
  bullets.addImage(knife_img)
  bullets.velocityX = -2
  bulletsGroup.add(bullets)
  }
}