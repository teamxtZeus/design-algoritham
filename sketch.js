var fixedRect, movingRect,gameObj1,gameObj2,gameObj3;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  gameObj1=createSprite(100,100,50,50)
  gameObj1.shapeColor="green"
  gameObj2=createSprite(300,100,50,50)
  gameObj2.shapeColor="green"
  gameObj3=createSprite(500,100,50,50)
  gameObj3.shapeColor="green"





}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  isTouching(gameObj1,movingRect);
  isTouching(fixedRect,movingRect);
  isTouching(movingRect,gameObj3);
isTouching(movingRect,gameObj2)
  drawSprites();
}

function isTouching(object1,object2){
  if (object1.x - object2.x < object2.width/2 + object1.width/2
    && object2.x - object1.x < object2.width/2 + object1.width/2
    && object1.y - object2.y < object2.height/2 + object1.height/2
    && object2.y - object1.y < object2.height/2 + object1.height/2) {

      object1.shapeColor="blue";
      object2.shapeColor="blue";
      
  }
  else {
    object2.shapeColor="green";
    object1.shapeColor="green";
     

  }


}