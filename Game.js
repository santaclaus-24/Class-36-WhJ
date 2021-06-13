class Game {
  constructor(){}
  
  getState(){
    //referring to the gameState value in the database
    var gameStateRef  = database.ref('gameState');
    //reading the value 
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })
  }

  update(state){
    database.ref('/').update({
      gameState: state
    })
  }

  start(){
    if(gameState === 0){
      player = new Player();
      player.getCount();
      form = new Form()
      form.display();
    }
  }
}
