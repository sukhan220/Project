export default class Control{
    constructor(sliderObject,game){
        // this.sliderObject= sliderObject;
        this.game = game;
        document.addEventListener("mousemove",event =>{
            sliderObject.position.y = event.offsetY;
            // console.log(`mouse postion is ${event.offsetY}, slider position is ${sliderObject.position.y}`)
            if(event.offsetY> 350 ){
                sliderObject.position.y = 300;
            }
            if(event.pageY<= 100 ){
                sliderObject.position.y = 0;
            }
            
            });
    }
}
