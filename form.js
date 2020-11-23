class Form{
    constructor(){

    }
  display(){
      var title = createElement('h2');
      title.html("car racing game");
      title.position(500,100);


      var input = createInput("name");
      var button = createButton("play");

      input.position(500,280);
      button.position(500,320);
      

      button.mousePressed(function(){
          input.hide();
          button.hide();

          var name = input.value();
          playerCount += 1;
          player.update(name);
          player.updateCount(playerCount);
          var greeting = createElement('h3');
          greeting.html("hello" + name);
          greeting.position(130,160);

      });
  }
}