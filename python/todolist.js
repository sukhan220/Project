let object = [];
let canvas = document.getElementById('canvas');
let ctx = canvas.getContext('2d');
let isDrawCircle = false;
let isDrawLine = false;
let isDrawRectangle = false;

//circle Draw
class Circle {
    constructor(x = 200, y = 200, radius = 50, color = '#ff0000') {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color;
    }
    draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        ctx.fillStyle = this.color;
        ctx.fill();
        ctx.closePath();
    }

}

//rectangle Draw
class Rectangle {
    constructor(x = 0, y = 0, width = 100, height = 100, color = 'blue') {
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.color = color;
    }
    draw() {
        ctx.beginPath();
        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.width, this.height);
        ctx.closePath();
    }

}
// Line class
class Line {
    constructor(x1 = 20, y1 = 20, x2 = 200, y2 = 200, color = "red") {
        this.x1 = x1;
        this.y1 = y1;
        this.x2 = x2;
        this.y2 = y2;
        this.color = color;
    }
    draw() {
        ctx.beginPath();
        ctx.moveTo(this.x1, this.y1);
        ctx.lineTo(this.x2, this.y2);
        ctx.strokeStyle = this.color;
        ctx.stroke();
        ctx.closePath();
    }
}



function circleDraw() {
    isDrawCircle = true;
    isDrawLine = false;
    isDrawRectangle = false;
    let draw = 0;
    let mouseX = 0;
    let mouseY = 0;
    canvas.addEventListener('click', function (evt) {
        if (isDrawCircle) {
            let bound = canvas.getBoundingClientRect();
            let x = evt.clientX - bound.left - canvas.clientLeft;
            let y = evt.clientY - bound.top - canvas.clientTop;
            let circle = new Circle(x, y, 20);
            circle.draw();
            object.push(circle);
        }

    });
}


// function circleDraw() {
//     let circle = new Circle();
//     circle.draw();
//     object.push(circle);
// }

//line Draw
function lineDraw() {
    isDrawCircle = false;
    isDrawLine = true;
    isDrawRectangle = false;
    canvas.addEventListener('click', function (evt) {
        if (isDrawLine) {
            let bound = canvas.getBoundingClientRect();
            let x = evt.clientX - bound.left - canvas.clientLeft;
            let y = evt.clientY - bound.top - canvas.clientTop;
            let line = new Line(x, y, x + 100, y + 100);
            line.draw();
            object.push(line);
        }

    });
}

//rectangle Draw

function rectangleDraw() {
    isDrawCircle = false;
    isDrawLine = false;
    isDrawRectangle = true;

    if (isDrawRectangle) {


        let rect = {
            startX: 0,
            startY: 0,
            w:0,
            h:0
        };
        let drag = false;
        function inti(){
            console.log('hello')
            canvas.addEventListener('mousedown', mouseDown, false);
            canvas.addEventListener('mouseup', mouseUp, false);
            canvas.addEventListener('mousemove', mouseMove, false);
        }

        function mouseDown(e) {
            rect.startX = e.pageX - this.offsetLeft;
            rect.startY = e.pageY - this.offsetTop;
            drag = true;
        }

        function mouseUp() {
            drag = false;
            // ctx.clearRect(0, 0, canvas.width, canvas.height);
        }
        function mouseMove(e) {
            if (drag) {
                rect.w = (e.pageX - this.offsetLeft) - rect.startX;
                rect.h = (e.pageY - this.offsetTop) - rect.startY;
                let rectangle = new Rectangle(rect.startX , rect.startY, rect.w, rect.h);
                rectangle.draw();
                object.push(rectangle);
                console.log(rectangle);
            }
        }

        // function draw() {
        //     ctx.setLineDash([6]);
        //     ctx.strokeRect(rect.startX, rect.startY, rect.w, rect.h);
        // }
        inti();



    }
    // canvas.addEventListener('click', function(evt) {
    //     if(isDrawRectangle){ 
    //         let bound = canvas.getBoundingClientRect();
    //         let x = evt.clientX - bound.left - canvas.clientLeft;
    //         let y = evt.clientY - bound.top - canvas.clientTop;
    //         console.log(canvas.offsetLeft,canvas.offsetTop);
    //         mousex = parseInt(evt.clientX-canvas.offsetLeft);
    //         mousey = parseInt(evt.clientY-canvas.offsetTop);
    //         console.log(mousex,mousey);
    //         let rectangle = new Rectangle(x,y,20,20);
    //         rectangle.draw();
    //         object.push(rectangle);
    //     }
    // });

}


// function rectangleDraw() {
//     let rectangle = new Rectangle();
//     rectangle.draw();
//     object.push(rectangle);
// }

//clear canvas
function clearCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

//create a whiteboard
function createWhiteboard(width = 100, height = 100) {
    let can = document.createElement('canvas');
    can.width = width;
    can.height = height;
    can.style.border = '1px solid black';
    can.style.backgroundColor = 'aliceblue';
    return can;
}

function copyCanvas() {
    let destCanvas = createWhiteboard(100, 100);
    let destinationContext = destCanvas.getContext("2d");
    document.body.appendChild(destCanvas);
    destinationContext.drawImage(canvas, 0, 0, 100, 100);
    clearCanvas();
    object = [];
}












// mouse position in canvas
// function getMousePos(canvas, evt) {
//     let rect = canvas.getBoundingClientRect();
//     return {
//       x: evt.clientX - rect.left,
//       y: evt.clientY - rect.top
//     };
//   }
//   canvas.addEventListener('click', function(evt) {

//         // let mousePos = getMousePos(canvas, evt);
//         // let message = 'Mouse position: ' + mousePos.x + ',' + mousePos.y;
//         // console.log(message);
//         let bound = canvas.getBoundingClientRect();

//         let x = evt.clientX - bound.left - canvas.clientLeft;
//         let y = evt.clientY - bound.top - canvas.clientTop;

//         ctx.fillRect(x, y, 16, 16);
//     });

// canvas.addEventListener('mousemove', function(evt) {

//     // let mousePos = getMousePos(canvas, evt);
//     // let message = 'Mouse position: ' + mousePos.x + ',' + mousePos.y;
//     // console.log(message);
//     let bound = canvas.getBoundingClientRect();

//     let x = evt.clientX - bound.left - canvas.clientLeft;
//     let y = evt.clientY - bound.top - canvas.clientTop;

//     ctx.fillRect(x, y, 16, 16);
// });
// // mouse move
// function mouseMove(e){
//     let mousePos = getMousePos(canvas, e);
//     let message = 'Mouse position: ' + mousePos.x + ',' + mousePos.y;
//     console.log(message);
// }

// // mouse click
// function mouseClick(e){
//     let mousePos = getMousePos(canvas, e);
//     let message = 'Mouse position: ' + mousePos.x + ',' + mousePos.y;
//     console.log(message);
// }

// //mouse down
// function mouseDown(e){
//     let mousePos = getMousePos(canvas, e);
//     let message = 'Mouse position: ' + mousePos.x + ',' + mousePos.y;
//     console.log(message);
// }

// //mouse up
// function mouseUp(e){
//     let mousePos = getMousePos(canvas, e);
//     let message = 'Mouse position: ' + mousePos.x + ',' + mousePos.y;
//     console.log(message);
// }

// //mouse out
// function mouseOut(e){
//     let mousePos = getMousePos(canvas, e);
//     let message = 'Mouse position: ' + mousePos.x + ',' + mousePos.y;
//     console.log(message);
// }

// //mouse over
// function mouseOver(e){
//     let mousePos = getMousePos(canvas, e);
//     let message = 'Mouse position: ' + mousePos.x + ',' + mousePos.y;
//     console.log(message);
// }

// //mouse double click
// function mouseDoubleClick(e){
//     let mousePos = getMousePos(canvas, e);
// }
// mouseDoubleClick();