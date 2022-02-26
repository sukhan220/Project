
export default class InputHandler {
    constructor(sliderObject,screen){
        document.addEventListener("keydown", event =>{
            switch(event.keyCode){
                case 37:
                    sliderObject.moveLeft();
                    break;
                
                case 39 :
                    sliderObject.moveRight();
                    break;

                case 27:
                    screen.pause();
                    break;

                case 32:
                    screen.start();
                    break;
            }

        })

        document.addEventListener("keyup",event=>{
            switch(event.keyCode){
                case 37:
                    //less than zero or if it traveling left 
                    //and keyup stop slider left
                    if(sliderObject.speed<0)
                        sliderObject.stop();
                    break;
                
                case 39 :
                    //less than zero or if it traveling rigth 
                    // and keyup of slide right
                    if(sliderObject.speed>0)
                        sliderObject.stop();
                    break;
            }

        })
    }
}