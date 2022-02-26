export function Collision(ball, slider, side) {
    let leftSideOfTheBall = ball.position.x - ball.radius;
    let rightSideOfTheBal = ball.position.x + ball.radius;

    let sliderTopPosition = slider.position.y;
    //slider bottom position is y+ slider height
    let sliderBottomPosition = slider.position.y + slider.height;
    let slideLeftPosition = slider.position.x;
    //slider right position is x+ slider width
    let sliderRightPosition = slider.position.x + slider.width;
    if (side === "left") {
        // then ball speed will be reversed or negative direction
        if (leftSideOfTheBall>= sliderRightPosition)
            return true;
        else
            return false;
    }
    else{
        // then ball speed will be reversed or negative direction
        if (rightSideOfTheBal>= slideLeftPosition)
            return true;
        else
            return false;
    }





}