let canvas,
    context,
    draging =false,
    dragLocation,
    touchLocation,
    snapshot;

    
function getMousePosition(event){
    let x = event.clientX - canvas.getBoundingClientRect().left;
    let y = event.clientY - canvas.getBoundingClientRect().top;

    return {x:x , y: y};
}

function getTouchPos(touchEvent) {
    let rect = canvas.getBoundingClientRect();
    return {
      x: touchEvent.touches[0].pageX-rect.left,
      y: touchEvent.touches[0].pageY-rect.top
    };
  }

function takeSnapshot(){
    snapshot = context.getImageData(0,0,canvas.width,canvas.height)
}
function restoreSnapeshot(){
    context.putImageData(snapshot,0,0);
}

function lineDraw(position){
    context.beginPath();
    context.moveTo(dragLocation.x, dragLocation.y);
    context.lineTo(position.x, position.y);
    context.stroke();
    context.closePath();
}
function circleDraw(position){
    let radius = Math.sqrt(Math.pow((dragLocation.x - position.x),2), + Math.pow((dragLocation.y-position.y),2));
    context.beginPath();
    context.arc(dragLocation.x, dragLocation.y,radius, 0,2*Math.PI,false);
    // context.fill();
    context.closePath();
}

function draw(position, shape) {

    let fillBox = document.getElementById("fillBox");
    if (shape === "circle") {
        circleDraw(position);
    }
    if (shape === "line") {
        lineDraw(position);
    }

    // if (shape === "polygon") {
    //     drawPolygon(position, 8, Math.PI / 4);
    // }
    if (fillBox.checked) {
        context.fill();
    } else {
        context.stroke();
    }
}

function dragStart(event){
    draging= true;
    dragLocation = getMousePosition(event);
    takeSnapshot();
}

function drag(event){
    let position;
    if(draging){
        restoreSnapeshot();
        position= getMousePosition(event);
        draw(position,"circle");
    };

}
function dragStop(event){
    draging =false;
    restoreSnapeshot();
    let position = getMousePosition(event);
    draw(position,"circle");
}






// //for touch screen;
// let draw = {
//     started: false,
//     lineDraw: function(position){
//         context.beginPath();
//         context.moveTo(touchLocation.x, touchLocation.y);
//         context.lineTo(position.x, position.y);
//         context.strokeStyle = "green";
//         context.lineWidth = 5;
//         context.stroke();
//         context.closePath();
//     }, 
//     start: function(event) {
//         this.started = true;
//         touchLocation = getTouchPos(event);
//         takeSnapshot();

//     },
//     move: function(event) {

//         if (this.started) {
//             restoreSnapeshot();
//             let position = getTouchPos(event);
//             lineDraw(position);
//         }

//     },
//     end: function(event) {
//         //this.started = false;
//         // let position = getTouchPos(event);
//         // // lineDraw(position);
//         // restoreSnapeshot();
//     }
// };



function init(){
    canvas = document.getElementById("canvas");
    context = canvas.getContext('2d');
    context.fillStyle = 'red';
    context.strokeStyle ="purple";
    context.lineWidth = 6;
    context.lineCap = 'round';
    canvas.addEventListener("mousedown",dragStart,false);
    canvas.addEventListener("mousemove",drag,false);
    canvas.addEventListener("mouseup",dragStop,false);
    canvas.addEventListener("touchstart",draw.start,false);
    canvas.addEventListener("touchmove",draw.move,false);
    canvas.addEventListener("touchend",draw.end,false);
    	// Disable Page Move
    document.body.addEventListener('touchmove',function(event){
            event.preventDefault();
        },{passive: false});  
    

}
window.addEventListener("load",init,false);


