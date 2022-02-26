// this function for detecing collision ball and slider
// ball and stone 
export function Collision(ballObject,gameObject){
        // check the ball and the slider position
        // for mapping collision with ball and slider 
        let bottomBallPosition = ballObject.postion.y + ballObject.radius;
        let topBallPosition = ballObject.postion.y;

        // slider and stone position top
        let topPosition = gameObject.position.y;
        //slider and stone positon left 
        let leftPosition = gameObject.position.x;
        //slider and stone position ==> x+ width
        let rightPosition = gameObject.position.x+gameObject.width;
        //slider and stone position Bottom ==> y+ height 
        let bottomPosition = gameObject.position.y+gameObject.height;
        
        // check collision with ball and slider
        // if both postion are same
        // or slider and stone left position is x
        // AND slider and stone right position is x+ width
        // AND slider and stone top position is slider anb stone y position
        // or ball y postion + ball radius  same means collision
        // then ball speed will be reversed or negative direction
        if(bottomBallPosition >= topPosition  && topBallPosition <= bottomPosition && ballObject.postion.x >= leftPosition && ballObject.postion.x+ballObject.radius <= rightPosition )
            return 1;         
        else
            return 0;
            
}