var frect,mrect

function setup() {
  createCanvas(800,400);
  frect = createSprite(400, 200, 50, 50);
  mrect = createSprite(200,400,100,50);
}

function draw() {
  background("blue");  
  rectMode (CENTER)
  mrect.x = World.mouseX
  mrect.y = World.mouseY
  if(frect.x-mrect.x < mrect.width/2 + frect.width/2 &&
    mrect.x - frect.x < mrect.width/2 + frect.width/2 &&
    frect.y - mrect.y < mrect.height/2 + frect.height/2 &&
    mrect.y - frect.y < mrect.height/2 + frect.height/2) {
    frect.shapeColor = "red"
    mrect.shapeColor = "red"
  }
  else{frect.shapeColor = "grey"
mrect.shapeColor = "grey"}
  drawSprites();
}