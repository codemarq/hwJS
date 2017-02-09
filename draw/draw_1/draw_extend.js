_KSM = {
  draw: function (left, top, width, height, stroke, fill) {
    // Draw something on the canvas
    var canvas = document.getElementById('theCanvas');
    if (canvas.getContext) {
      var context = canvas.getContext('2d');
      if (typeof left === 'undefined') {
        left = 10;
      };
      if (typeof top === 'undefined') {
        top = 10;
      };
      if (typeof fill === 'undefined') {
        fill = 'silver';
      };
      if (typeof stroke === 'undefined') {
        stroke = 'black';
      };

      context.strokeStyle = stroke;
      context.fillStyle = fill;
      context.fillRect(left, top, width, height);
      context.strokeRect(left, top, width, height);
    }
  }
}
// legacy draw code
_KSM.draw();
// 2 parameters draw code--Legacy code broken
_KSM.draw(530, 370);
// 4 parameters draw code--Legacy code still broken
_KSM.draw(100, 100, 440, 280);
// unweildy function with too many parameters (6)--Legacy code still broken
_KSM.draw(120, 120, 400, 240, 'burlywood', 'lemonchiffon');
// new code--draw has default values.  all legacy code works
_KSM.draw(530, 10, 100, 100, 'red', 'teal');
_KSM.draw(10, 310, 160, 160, 'red');
