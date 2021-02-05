class Form{
    constructor(){

        this.input = createInput("Name");
        this.input.style('width',"200px");
        this.input.style('height',"30px");
        this.input.style('border',"1px solid black");
        this.input.style("border-radius","10px");
        this.input.style("padding","5px");
        this.input.style("background-color","#ccccff");
        this.input.style("outline","none");
        this.input.style("font-size","23px");
        this.input.style('font-family',"OCR A Std, monospace");

        this.greeting = createElement("h2");
        this.greeting.style('font-family',"OCR A Std, monospace");
        
        this.title = createElement("h2");
        this.title.style('font-size',"35px");
     
        this.reset = createButton("Reset");
        this.reset.style('width',"130px");
        this.reset.style('font-size',"20px");
        this.reset.style('height',"50px");
        this.reset.style('border',"none");
        this.reset.style("border-radius","7px");
        this.reset.style("background-color","#fea834");

        this.button = createButton("Play");
        this.button.style('width',"130px");
        this.button.style('height',"50px");
        this.button.style('font-size',"20px");
        this.button.style('border',"none");
        this.button.style("border-radius","12px");
        this.button.style("background-color","#fea834");

        this.content = createElement('h1');
        this.content.style('color','#660066');
        this.content.html(" A game made by Arabhaya ® !!!");
        this.content.style('font-family',"OCR A Std, monospace");
        this.content.position(10,540);
        

    }

    hide(){

        this.greeting.hide();
        this.button.hide();
        this.input.hide();
        this.title.hide();

    }

    display(){

        this.title.html("Arabhaya's unknown battle ground ");
        this.title.position(displayWidth/2-240,0);
        this.title.style("color","blue");

        this.input.position(displayWidth/2 - 200 , displayHeight/2 - 80);
        this.button.position(displayWidth/2 - 150, displayHeight/2);
        this.reset.position(displayWidth-200,20);

        this.button.mousePressed(()=>{
            this.input.hide();
            this.button.hide();
            khiladi.name = this.input.value();
            playerCount+=1;
            khiladi.index = playerCount;
            khiladi.update();
            khiladi.updateCount(playerCount);
            this.greeting.html("Hello 😃😃 " + khiladi.name)
            this.greeting.position(displayWidth/2 - 200, displayHeight/4);
          });
      
          this.reset.mousePressed(()=>{
            khiladi.updateCount(0);
            game.update(0);
          });
    }
}


