const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');

const cw = canvas.width = 1200;
const ch = canvas.height = 600;

const playerW = 20;
const playerH = 100;
const positionPlayerX = 70 ;
let positionPlayerY = ch/2-playerH/2;
const ballW = 20;
const ballH = 20;
const positionAiW = cw-90;
let positionX = cw/2-ballW/2;
let positionY = ch/2-ballH/2;
let speedY = 1;
let speedX = 10;
canvas.addEventListener('mousemove',playerPosition)

function table(){
    ctx.fillStyle = 'black';
    ctx.fillRect(0,0,cw,ch);
}
function player(){
    ctx.fillStyle = 'white';
    ctx.fillRect(positionPlayerX,positionPlayerY,playerW,playerH);
    
}
function ai(){
    ctx.fillStyle = 'white';
    ctx.fillRect(positionAiW,positionPlayerY,playerW,playerH);

}
function endGame(){
    
    var start = new Date().getTime();
    
    for (var i = 0; i < 1e7; i++) {
      if ((new Date().getTime() - start) > 500){ 
        break;
      }
    
    }
   
    positionX = cw/2-ballW/2;
    positionY = ch/2-ballH/2;
    speedY = 1;
    speedX = 10;
      
}
function speedUp() {
    if (speedX > 0 && speedX < 16) {
        speedX += .2;

      } else if (speedX < 0 && speedX > -16) {
        speedX -= .2;
      }

      if (speedY > 0 && speedY < 16) {
        speedY += .2;

      } else if (speedY < 0 && speedY > -16) {
        speedY -= .2;
      }

  
    }

function ball(){
    ctx.fillStyle = 'white';
    ctx.fillRect(positionX,positionY,ballW,ballH);
    positionX = positionX+ speedX;
    positionY = positionY +  speedY;
    if(positionY <= 0 || positionY >= ch - ballH)
    {
        speedY = -speedY;
        speedUp()
    }
    if(positionX <= 0 || positionX >= cw - ballW)
    {
        endGame()
    }
    if(positionX<=positionPlayerX+playerW && positionX<=positionAiW-ballW && positionY>=positionPlayerY && positionY<=positionPlayerY+playerH)
    {
        speedX = -speedX;
        speedUp()
        
        
    }
    if(positionX>=positionAiW-ballW && positionY>=positionPlayerY && positionY<=positionPlayerY+playerH)
    {
        speedX = -speedX;
        speedUp()
        
    }

}
topCanvas = canvas.offsetTop;


function playerPosition(e){
    positionPlayerY = e.clientY-topCanvas-playerH/2;

    if (positionPlayerY >= ch - playerH) {
        positionPlayerY = ch - playerH
      }

      
      if (positionPlayerY <= 0) {
        positionPlayerY = 0;
      }


}






function game(){


table()
ball()
player()
ai()


}



setInterval(game, 1000/60)