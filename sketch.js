function setup() {

    function draw() {
      
      stroke ("red");
      fill ("purple");
     
      
      // console.log(mouseIsPressed);
      
      if (mouseIsPressed){
        rect(mouseX, mouseY, 20, 35);
      }
    }
      createCanvas(600, 600);
       background("gray");
    }
    