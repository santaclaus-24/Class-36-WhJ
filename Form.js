class Form {
  constructor() {
    
  }

  display(){
    var title = createElement('h2')
    title.html("Car Racing Game");
    title.position(130, 0);
    
    var input = createInput("Name");
    var button = createButton('Play');
    
    input.position(130, 160);
    button.position(250, 200);
    
    //when we press the "button", the "input" and the "button" will be hidden
    button.mousePressed(function(){
      input.hide();
      button.hide();
      
      //the name will be the input entered by the player
      var name = input.value();
      
      //each time a player logs in, the player count will increase by 1
      playerCount+=1;
      player.update(name)
      player.updateCount(playerCount);

      //creating the "greeting" element ; saying hello to the player
      var greeting = createElement('h3');
      //if the name is "1", the input will be "Hello 1"
      greeting.html("Hello " + name)
      //setting the position where the greeting/s should be displayed 
      greeting.position(130, 160);
    });

  }
}
