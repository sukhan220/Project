var canvas = document.getElementById('canvas'),
ctx = canvas.getContext('2d'),
// ctx.globalAlpha = 0.5;
rect = {},
drag = false;
var rectStartXArray = new Array() ;
var rectStartYArray = new Array() ;
var rectWArray = new Array() ;
var rectHArray = new Array() ;

function init() {
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
    rectStartXArray[rectStartXArray.length] = rect.startX;
    rectStartYArray[rectStartYArray.length] = rect.startY;
    rectWArray[rectWArray.length] = rect.w;
    rectHArray[rectHArray.length] = rect.h;
    drag = false;
}

function mouseMove(e) {
  if (drag) {
    console.log("mouse move");
    rect.w = (e.pageX - this.offsetLeft) - rect.startX;
    rect.h = (e.pageY - this.offsetTop) - rect.startY;
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    draw();
    }
    drawOldShapes();
}
function draw() {
    ctx.beginPath();
    ctx.rect(rect.startX, rect.startY, rect.w, rect.h);
    ctx.stroke();
}
function drawOldShapes(){
    for(var i=0;i<rectStartXArray.length;i++)
    {
        if(rectStartXArray[i]!= rect.startX && rectStartYArray[i] != rect.startY && rectWArray[i] != rect.w && rectHArray[i] != rect.h)
        {
            ctx.beginPath();
            ctx.rect(rectStartXArray[i], rectStartYArray[i], rectWArray[i], rectHArray[i]);
            ctx.stroke();
        }
    }
}
init();