import Game from "./game.js";

const canvas = document.getElementById("gameScreen");
const context = canvas.getContext("2d");

let GAMESCREENWIDTH= 600;
let GAMESCREENHEIHT= 400;

let game = new Game(GAMESCREENWIDTH,GAMESCREENHEIHT);

let lastTime = 0;

setInterval(() => {
    context.clearRect(0,0,GAMESCREENWIDTH,GAMESCREENHEIHT);
    game.update();
    game.draw(context);
},10);