export default class Slider{
    
    constructor(game){
        this.width=150;// slider width
        this.height=20; // slider height
        this.gameWidth=game.gameWidth// pass the game object and use the game width
        this.maxSpeed=5;//slider moveing 5 per unit
        this.speed=0;// slider speed;
        this.game= game;// Declares properties of game object 
        this.position = {
            //x mid point gameScreenWidth/2 - this.width/2
            // we want to center it between 0 and 600 px 
            // 600/2 which is gameScreenWidth/2 (game.gameWidth)
            // but the rectangle is built from the top-letf corner
            // so we need to move it to the left
            // by half of the slider width--> this.width/2 
            x: game.gameWidth/2 - this.width/2,
            // how much we want to see that slider 
            // 400px - 20px-10px= 370px which is y value
            // so gameScreenHeight(gameHeight)-this.height- n
            y: game.gameHeight-this.height-10
        };
    }


    draw(cotx){
        cotx.fillStyle="#0f0";
        cotx.fillRect(this.position.x,this.position.y, this.width,this.height);

    }

    moveLeft(){
        //speed incresing 5 unit
        // but negative side(left)
        this.speed= -this.maxSpeed;
    }

    moveRight(){
        //speed incresing 5 unit
        this.speed = this.maxSpeed;
    }

    stop(){
        // method for player control slider 
        this.speed=0;
    }

    update(deltaTime){
        if( !deltaTime) return;
        // console.log(this.game.sliderObject.position.x);

        // moving slider x postion 
        //so x = x+speed
        this.position.x += this.speed;

        // if x postion is less than 0 or outside of left screen
        // then x postion set zero
        if (this.position.x<0)
            this.position.x=0;
        
        // if x postion plus the width of the slider 
        // is greater than game screen means slider past 
        // the edge of the game screen
        // then x postion of slider set the edge of game screen
        // gameScreenWidth- slideWidth 
        if(this.position.x+this.width> this.gameWidth)
            this.position.x=this.gameWidth-this.width;
    }

}