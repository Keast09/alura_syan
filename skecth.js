let velocidadeX = 5
let velocidadeY = 2
let posX = 300
let posY = 250
let velocidadePlr_1 = 10
let velocidadePlr_2 = 5
let posPlayer_1 = 100
let posPlayer_2 = 100


let pontos_1 = 0
let pontos_2 = 0

let music
let touched
let pointed


function setup() {
  createCanvas(600, 500);
  velocidadeX *= 1//random(-1,1)
  velocidadeY *= 1//random(-1,1)
  
}

function draw() {
  background(0);
  textSize(40)
  fill(color(255,0,0))
  rect(80,65,75,50)
  
  fill(255)
  text(pontos_2,100,100)
  
  fill(color(0,0,255))
  rect(470,65,75,50)
  fill(255)
  text(pontos_1,width - 100,100)
  
  circle(posX,posY,20)
  let player_2 = rect(0,posPlayer_2,10,150)
  let player_1 = rect(590,posPlayer_1,10,150)
  
  
    if (keyIsDown(UP_ARROW) && posPlayer_1 > 0){
      posPlayer_1 -= velocidadePlr_1
    }
    else if (keyIsDown(DOWN_ARROW) && posPlayer_1 < height - 150){
      posPlayer_1 +=velocidadePlr_1
    }
  
  posPlayer_2 += velocidadePlr_2
  if (posPlayer_2 == 350 || posPlayer_2 == 0) {
    velocidadePlr_2 *=  -1
  }
  
  //bolinha
  posX += velocidadeX
  posY += velocidadeY
  
  
  if ((posX == 590 && posY <= posPlayer_1+155 &&  posY >= posPlayer_1-5) || (posX == 20 && posY <= posPlayer_2+155 &&  posY >= posPlayer_2-5)){
    velocidadeX *= -1
  }
  
 
  
  if (posY == 0 || posY == height){
    velocidadeY = velocidadeY * -1
  }
  if (posX >= width){
    posX = 300
    velocidadeX = 5
    velocidadeY = 1
    velocidadeX *= -1 
    velocidadeY *= -1
    posY = 250
    pontos_2 += 1 
      
  }
  
  if (posX <= 0){
    posX = 300
    velocidadeX = 5
    velocidadeY = 1
    velocidadeX *= -1 
    velocidadeY *= -1
    posY = 250
    pontos_1 += 1 
      
  }
}
