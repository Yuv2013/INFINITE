var PLAY=1
var END=0
var gameState = PLAY;
PLAY =1
END  =0

var distance=0

var car, car_driving, car_collision, carImage
var racetrack,invisibleRace, racetrackImage;
var car3

var cloudsGroup, cloudImage

var score
var buttonImage, restartImage
var checkPointSound, collisionSound 


function preload(){
racetrackImage=loadImage("download.jpg")
carImage=loadImage("car.png")
car3Image=loadImage("car3.png")
}

function setup() {
 createCanvas(windowWidth,windowHeight)
 racetrack=createSprite(width,height/2)
 racetrack.addImage(racetrackImage)
 car=createSprite(80,height/2)
 car.addImage(carImage)
 car.scale=0.2
 racetrack.scale=3
 racetrack.velocityX = -5
 



}

function draw() {

if(gameState===PLAY)

distance = distance + Math.round(getFrameRate()/50)
racetrack.velocityX= -(6 + 2*distance/150)
background("black")
car.y = World.mouseY
edges=createEdgeSprites();
car.collide(edges)

if (racetrack.x < 0)  {
racetrack.x=width/2
}

var select_oppPlayer = Math.round(random(1,3))

if (World.frameCount % 150 == 0)  {
    if(select_oppPlayer == 1)  {
   car3();
    }
    
}


drawSprites()
}


function car3() {
car3=createSprite(300,300)
car3.addImage(car3Image)
car3.velocityX=-4
 car3.scale=0.2
}