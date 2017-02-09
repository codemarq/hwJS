_KSM = {
  draw: function (left, top, width, height, stroke, fill) {
    // Draw something on the canvas
    var canvas = document.getElementById('theCanvas'),
        options = {};

    if (canvas.getContext) {
      var context = canvas.getContext('2d');
      // check first param, if an argument exists then check if object
      if (typeof left !== 'undefined') {
        if (typeof left === 'object') {
          options = left;
        } else {
          options = {
            left: left,
            top: top,
            width: width,
            height: height,
            stroke: stroke,
            fill: fill
          };
        }
      };
      // setup default values for options object if no args passed to draw()
      if (typeof options.left === 'undefined') {
        options.left = 10;
      }
      if (typeof options.top === 'undefined') {
        options.top = 10;
      }
      if (typeof options.width === 'undefined') {
        options.width = 100;
      }
      if (typeof options.height === 'undefined') {
        options.height === 100;
      }
      if (typeof options.stroke === 'undefined') {
        options.stroke = 'black';
      }
      if (typeof options.fill === 'undefined') {
        options.fill = 'silver';
      }

      // apply values to rectangle drawn by draw()
      context.strokeStyle = options.stroke;
      context.fillStyle = options.fill;
      context.fillRect(options.left, options.top, options.width, options.height);
      context.strokeRect(options.left, options.top, options.width, options.height);
    }
  }
}
// legacy draw code
_KSM.draw();
_KSM.draw(530, 370);
_KSM.draw(100, 100, 440, 280);
_KSM.draw(120, 120, 400, 240, 'burlywood', 'lemonchiffon');
_KSM.draw(530, 10, 100, 100, 'red', 'teal');
_KSM.draw(10, 310, 160, 160, 'red');
_KSM.draw(270, undefined, undefined, undefined, undefined, 'green');
// New code-using object as first param. this draws a long grey rectangle at footer
_KSM.draw({ stroke: 'red', left: 140, top: 450, height: 20, width: 360 });
