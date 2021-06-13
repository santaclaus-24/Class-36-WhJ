//creating the variables
var canvas, backgroundImage;

//the gameState of any game is 0 at the beginning 
var gameState = 0;
var playerCount;

var database;

////creating the variables of the 3 objects of the class
var form, player, game;

function setup(){
  //creating the canvas and setting the length and width
  canvas = createCanvas(400,400);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
}
