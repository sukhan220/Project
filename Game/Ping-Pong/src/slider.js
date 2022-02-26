// import { collision } from "./collision.js";

export default class Slider{
    constructor(game){
        this.gameWidth = game.gameWidth;
        this.gameHeight = game.gameHeight;
        this.game = game;
        this.width=20;
        this.height=100;
        this.changeAxis=5;
        this.speed =10;
        this.position={
            x: 10,
            y: this.gameHeight/2-this.height/2
        }
   
    }
    draw(context){
        context.fillStyle="#0f0";
        context.fillRect(this.position.x, this.position.y,this.width,this.height);
    }

    update(){
      }
}


export class ComputerSlider extends Slider{
    constructor(game){
        super(game);
        this.position={
            x: 570,
            y: this.gameHeight/2-this.height/2
        }
    }
    draw(context){
        context.fillStyle="red";
        context.fillRect(this.position.x, this.position.y,this.width,this.height);

    }
    update(){
        this.position.y = this.game.ballObject.position.y-this.height/2;
    }

}