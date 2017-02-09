_KSM = {
  draw: function (left, top, width, height) {
    // stub of more enhanced version.  this now calls drawNew with default
    // values
    _KSM.drawNew(left, top, width, height, 'black', 'silver');
  },
  // stub function
  drawNew: function (left, top, width, height, stroke, fill) {
    // Draw something on the canvas
    var canvas = document.getElementById('theCanvas');
    if (canvas.getContext) {
      var context = canvas.getContext('2d');
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
_KSM.draw(120, 120, 400, 240, 'burlywood', 'blue');
// introducing function stubs
_KSM.drawNew(120, 120, 400, 240, 'burlywood', 'blue');
