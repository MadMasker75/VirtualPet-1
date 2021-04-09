//Create variables here
var database;
var dog, happyDog, foodS, foodStock;

function preload()
{
	//load images here
  normDog = loadImage("images/dogImg.png");
  happyDog = loadImage("images/dogImg1.png");
}

function setup() {
	createCanvas(500, 500);

  database = firebase.database;

  dog = createSprite(250,250,150,200);
  dog.addImage(normDog); 
  dog.scale = 0.25;
  
  sfoodStock = database.ref('Food');
  foodStock.on("value",readStock);
}


function draw() {  

  background(46,139,87);

  drawSprites();
  //add styles here


}



