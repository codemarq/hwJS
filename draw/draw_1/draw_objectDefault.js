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
      // setting canvas width will clear its contents
      if (options.clear) {
        canvas.width = canvas.width;
      }

      // default values
      options.left = options.left || _KSM.drawOptions.left;
      options.top = options.top || _KSM.drawOptions.top;
      options.width = options.width || _KSM.drawOptions.width;
      options.height = options.height || _KSM.drawOptions.height;
      options.stroke = options.stroke || _KSM.drawOptions.stroke;
      options.fill = options.fill || _KSM.drawOptions.fill;

      // apply values to rectangle drawn by draw()
      context.strokeStyle = options.stroke;
      context.fillStyle = options.fill;
      context.fillRect(options.left, options.top, options.width, options.height);
      context.strokeRect(options.left, options.top, options.width, options.height);
    }
  },
  drawOptions : {
    left: 10,
    top: 10,
    width: 100,
    height: 100,
    stroke: 'black',
    fill: 'silver',
    clear: false
  }
}
// legacy draw code
_KSM.drawOptions.stroke = '#44f';
_KSM.drawOptions.fill = '#ffe';
_KSM.draw();
_KSM.draw(530, 370);
_KSM.draw(100, 100, 440, 280);
_KSM.draw(120, 120, 400, 240, 'burlywood', 'lemonchiffon');
_KSM.draw(530, 10, 100, 100, 'red', 'teal');
_KSM.draw(10, 310, 160, 160, 'red');
_KSM.draw(270, undefined, undefined, undefined, undefined, 'green');
_KSM.draw({ stroke: 'red', left: 140, top: 450, height: 20, width: 360 });
// new function calls
// _KSM.drawOptions.stroke = '#44f';
// _KSM.drawOptions.fill = '#ffe';
// _KSM.draw({clear:true});
// _KSM.draw(530, 370);
