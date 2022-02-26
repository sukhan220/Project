import Ball from "./ball.js";
import Slider, { ComputerSlider } from "./slider.js";
import Control from "./control.js";

export default class Game{
    constructor(gameScreenWidth,gameScreenHeight){
        this.gameWidth = gameScreenWidth;
        this.gameHeight = gameScreenHeight;
        this.sliderObject = new Slider(this);
        this.comSliderObject = new ComputerSlider(this);
        this.ballObject = new Ball(this);
        this.control = new Control(this.sliderObject,this);
        this.objectArray = [this.sliderObject,this.comSliderObject,this.ballObject];
        
    }
   
    draw(context){
        let arrayLength = this.objectArray.length;
        for(let arrayIndex = 0; arrayIndex<arrayLength; arrayIndex++ ){
            this.objectArray[arrayIndex].draw(context);
        }
      
    }
    update(){
        let arrayLength = this.objectArray.length;
        for(let arrayIndex = 0; arrayIndex<arrayLength; arrayIndex++ ){
            this.objectArray[arrayIndex].update();
        }
      
    }
}