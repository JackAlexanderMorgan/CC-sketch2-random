let r = random(1,5);
let x = 0;

function setup() {
  // 900 divided by 5 buildings = 200x4 =100x1
  createCanvas(900,900);
  background(0,0,200);
}

function draw() {
  // put drawing code here
  
  building1();
  building2();
  building3();
  building4();
  building5(position5);
  
  


}

function position5 (){
  x=x+700;
}
function building1 (x,y,height,width){
  fill(55);
  noStroke();
  rect(0,400,200,500);
  }
function building2 (){
  fill(15);
  noStroke();
  rect(200,300,200,600);
}
function building3 (){
  fill(255);
  noStroke();
  rect(400,700,100,200);
}
function building4 (){
  fill(155);
  noStroke();
  rect(500,500,200,400);
}
function building5 (){
  fill(85);
  noStroke();
  rect(x,200,200,700);
}