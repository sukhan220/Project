import Game from './manage.js';


let canvas = document.getElementById("gameScreen");
let cotx= canvas.getContext("2d");

const gameScreenWidth=600;
const gameScreenHeight=400;


let game = new Game(gameScreenWidth,gameScreenHeight);
// game.start();


let lastTime = 0;
function gameLoop(timestamp){
     
   let deltaTime = timestamp -lastTime;
   lastTime =timestamp;
   cotx.clearRect(0,0,gameScreenWidth, gameScreenHeight);
   game.update(deltaTime);
   game.draw(cotx);

   requestAnimationFrame(gameLoop);


 }

 gameLoop();