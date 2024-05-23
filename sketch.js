function setup(){
  createCanvas(600,600);
  background("pink");
}

function draw(){
  
  stroke("violet");
  fill("white");
  
  // console.log(mouseIsPressed);
  
  if(mouseIsPressed) {
    circle(mouseX, mouseY, 20, 35);
  }
}
