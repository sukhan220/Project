import { Collision } from "./collision.js";
export default class Ball{
    constructor(game){
        this.gameWidth= game.gameWidth;
        this.gameHeight = game.gameHeight;
        this.game= game;// Declare properties of game object 
        this.radius = 10;
        this.postion={
            x: this.gameWidth/2,
            y: this.gameHeight/2
        }
        this.speed={
            x: 2,
            y: 2
        }
        this.ballPositionReload();

    }
    draw(cotx){
        cotx.beginPath();
        cotx.fillStyle="red";
        cotx.arc(this.postion.x,this.postion.y,this.radius,0,Math.PI*2);
        cotx.fill();
        
        
    }
    ballPositionReload(){
        this.postion={
            x: this.gameWidth/2,
            y: this.gameHeight/2
        }
    }

    update(deltaTime){
       
        // game screen left and right wall position
        if(this.postion.x+ this.radius > this.gameWidth ||
             this.postion.x-this.radius < 0)
            this.speed.x = - this.speed.x;
        
        //game screen uper Wall position
        if (this.postion.y - this.radius< 0)
            this.speed.y = -this.speed.y;

        // game over option
        //if touch the slider 
        // ball Y position will be slider up positon
        // then this position and radius greater than
        // game Screen height
        // this game if condition will be true
        if(this.postion.y+this.radius> this.gameHeight ){
            this.game.lives --;
            this.ballPositionReload();
        }
           

    

       // check stoneColision Function in Collision.js
        if( Collision(this, this.game.sliderObject))
        {
            this.speed.y = - this.speed.y;
            // set touch the slider
            // this will be ball position
            this.postion.y = this.game.sliderObject.position.y-this.radius;
          
        
        }
            

        this.postion.x +=this.speed.x;
        this.postion.y +=this.speed.y;

    }
}