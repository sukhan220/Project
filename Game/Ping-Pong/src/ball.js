import { Collision } from "./collision.js";

export default class Ball{
    constructor(game){
        this.game = game;
        this.gameWidth= game.gameWidth;
        this.gameHeight = game.gameHeight;
        this.radius = 15;
        this.side ="left";
        this.position = {
            x : this.gameWidth/2,
            y : this.gameHeight/2
        }
        this.speed={
            x: 2,
            y: 2
        }
    }
    draw(context){
        context.beginPath();
        context.fillStyle="white";
        context.arc(this.position.x,this.position.y,this.radius,0,Math.PI*2);
        context.fill();
    }
    update(){
        if(this.position.x-this.radius <= 0 || this.position.x+this.radius >= this.gameWidth)
            this.speed.x = -this.speed.x;
        
        if(this.position.y-this.radius <=0 || this.position.y+this.radius >= this.gameHeight )
            this.speed.y = -this.speed.y;
        if(this.game.sliderObject.position.y){

        }
        // if( Collision(this, this.game.sliderObject,this.side))
        // {
        //     this.speed.x = - this.speed.x;
        //     this.speed.y= -this.speed.y;
        //     // set touch the slider
        //     // this will be ball position
        //this.postion.x = this.game.sliderObject.position.x-this.radius;
          
        
        // }
            


        this.position.x +=this.speed.x;
        this.position.y +=this.speed.y;
    }
}