import Slider from './slider.js';
import InputHandler from './controler.js';
import Ball from './ball.js';
import { makeLevel, levelOne, removeElement, leveltwo } from './level.js';


const screen = {
    screenPause: 0,
    screenRun: 1,
    menuBar: 2,
    gameOver: 3,
    nextLevel: 4
};
export default class Game {
    constructor(gameScreenWidth, gameScreenHeight) {

        this.gameWidth = gameScreenWidth;
        this.gameHeight = gameScreenHeight;
        this.display = screen.menuBar;

        //create a all  object from slider.js
        //and pass the game object
        this.sliderObject = new Slider(this);
        this.ballObject = new Ball(this);
        this.controler = new InputHandler(this.sliderObject, this);
        this.gameObject = [];
        this.lives = 3;
        this.stone = [];
        this.tempLevel = [levelOne, leveltwo];
        this.preIndex = 0;
    }


    start() {
        if (this.display !== screen.menuBar &&
            this.display !==screen.nextLevel)
            return;

        let levelArray = this.tempLevel[this.preIndex];

        this.stone = makeLevel(this, levelArray);
        this.ballObject.ballPositionReload();

        // create a object array
        // stone object added using javascript Spread syntax(...stone)
        this.gameObject = [this.sliderObject, this.ballObject, ...this.stone];

        this.display = screen.screenRun;

    }


    update(deltaTime) {
        // this.sliderObject.update(deltaTime);
        // this.ballObject.update(deltaTime);
        if (this.lives === 0)
            this.display = screen.gameOver;


        // diplay 
        if (this.display === screen.screenPause ||
            this.display === screen.menuBar ||
            this.display === screen.gameOver)
            return;


        if (this.gameObject.length <= 2 ) {
            this.preIndex++;
            this.display= screen.nextLevel;
            this.lives = 3;
            this.start();

        }

        // this.lenGameObject = this.gameObject.length;
        // //upadte all object from array
        for (let objectIndex = 0; objectIndex < this.lenGameObject; objectIndex++) {
            this.gameObject[objectIndex].update(deltaTime);
        }



        this.gameObject = this.gameObject.filter(stone => !stone.stoneBreak);
        
    }


    draw(cotx) {
        // this.sliderObject.draw(cotx);
        // this.ballObject.draw(cotx);
        //draw all object from array
        this.lenGameObject = this.gameObject.length;
        for (let i = 0; i < this.lenGameObject; i++) {
            this.gameObject[i].draw(cotx);
        }
        cotx.font = "16px optional";
        cotx.fillStyle = "black";
        cotx.textAlign = "center";
        cotx.fillText(` Lives: ${this.lives}`, 25, 25);

        if (this.display === screen.screenPause) {
            cotx.rect(0, 0, this.gameWidth, this.gameHeight);
            cotx.fillStyle = "rgba(0,0,0,0.4)";
            cotx.fill();
            cotx.font = "50px optional";
            cotx.fillStyle = " brown";
            cotx.textAlign = "center";
            cotx.fillText("Paused", this.gameWidth / 2, this.gameHeight / 2);
        }

        if (this.display === screen.menuBar) {
            cotx.rect(0, 0, this.gameWidth, this.gameHeight);
            cotx.fillStyle = "darkslateblue";
            cotx.fill();
            cotx.font = "50px optional";
            cotx.fillStyle = " brown";
            cotx.textAlign = "center";
            cotx.fillText("Start Game", this.gameWidth / 2, this.gameHeight / 2);
        }

        if (this.display === screen.gameOver) {
            cotx.rect(0, 0, this.gameWidth, this.gameHeight);
            cotx.fillStyle = "darkslateblue";
            cotx.fill();
            cotx.font = "50px optional";
            cotx.fillStyle = " brown";
            cotx.textAlign = "center";
            cotx.fillText("Game Over", this.gameWidth / 2, this.gameHeight / 2);
        }
    }
    pause() {
        if (this.display == screen.screenPause)
            this.display = screen.screenRun;
        else this.display = screen.screenPause;
    }



}