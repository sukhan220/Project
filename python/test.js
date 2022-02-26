//create a whiteboard
function createWhiteboard(width, height) {
  var canvas = document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;
  canvas.style.border = '1px solid black';
  return canvas;
}
// create geomatrical whiteboard