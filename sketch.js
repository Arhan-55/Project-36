var dog,sadDog,happyDog;
var database;
var feed,addFood;
var foodObj,foodS,FoodImg;
var fedTime,feed,addFood,lastFed;

function preload(){
  sadDog=loadImage("Images/Dog.png");
  happyDog=loadImage("Images/happy dog.png");
  FoodImg = loadImage("Images/Milk.png");
}

function setup() {
  database = firebase.database();
  createCanvas(1200,590);
  
  dog=createSprite(1010,220,150,150);
  dog.addImage(sadDog);
  dog.scale=0.20;

  foodObj = new Food();

  foodStock = database.ref('Food');
  foodStock.on("value",readStock);

  feed = createButton("Feed the dog - Tiger");
  feed.position(680,95);
  feed.mousePressed(feedDog);

  addFood = createButton("Add Food");
  addFood.position(815,95);
  addFood.mousePressed(addFoods)
}

function draw() {
  background("green");
  
  
  stroke("Orange");
  fill("Orange");
  textSize(28);
  textFont("Lucida Console");
  text("TIGER",970,330);

  noFill();
  strokeWeight(4);
  stroke("Orange");
  rect(964,307,95,30);

  fedTime = database.ref('FeedTime');
  fedTime.on("value",function(data){
    lastFed=data.val();
  });

  fill(255,255,254);
  strokeWeight(1);
  stroke("White")
  textSize(16);
  if(lastFed>=12){
    text("Last Feed : "+ lastFed%12 + "PM",330,30);
  }
  else if(lastFed==0){
    text("Last Feed : 12 AM",330,30);
  }
  else{
    text("Last Feed : "+ lastFed + "AM",330,30)
  }

  
  foodObj.display();

  drawSprites();
}

//function to read foodObj Stock
function readStock(data){
    foodS = data.val();
    foodObj.updateFoodStock(foodS);
}


//function to update foodObj stock and last fed time
function feedDog(){
  dog.addImage(happyDog);

  bottle = createSprite(920,250,80,80);
  bottle.addImage(FoodImg);
  bottle.scale = 0.1;
  bottle.lifetime = 15;

  foodObj.updateFoodStock(foodObj.getFoodStock()-1);
  database.ref('/').update({
    Food:foodObj.getFoodStock(),
    FeedTime:hour()
  });
  drawSprites();  
}

function addFoods(){
    
  foodObj.updateFoodStock(foodObj.getFoodStock()+1);
    database.ref('/').update({
      Food:foodObj.getFoodStock()
    })
}
