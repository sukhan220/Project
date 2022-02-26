var canvas = document.getElementById('myCanvasCircle'),
ctx = canvas.getContext('2d'),
circle = {},/*from w ww. d e mo2  s.c o  m*/
drag = false,
circleMade = false;
function draw() {
    ctx.beginPath();
    ctx.arc(circle.X, circle.Y, circle.radius, 0, 2.0 * Math.PI);
    ctx.stroke();
 
}
function mouseDown(e) {
    circle.startX = e.pageX - this.offsetLeft;
    circle.startY = e.pageY - this.offsetTop;
    circle.X = circle.startX;
    circle.Y = circle.startY;
    if (!circleMade) {
        circle.radius = 0;
    }
    drag =true;
}
function mouseUp() {
    drag = false;
    circleMade = true;
}
function mouseMove(e) {
    if (drag) {
        circle.X = e.pageX - this.offsetLeft;
        circle.Y = e.pageY - this.offsetTop;
        if (!circleMade) {
            circle.radius = Math.sqrt(Math.pow((circle.X - circle.startX), 2) + Math.pow((circle.Y - circle.startY), 2));
        }
        // ctx.clearRect(0, 0, canvas.width, canvas.height);
        draw();
    }
}
function init() {
    canvas.addEventListener('mousedown', mouseDown, false);
    canvas.addEventListener('mouseup', mouseUp, false);
    canvas.addEventListener('mousemove', mouseMove, false);
}
init();