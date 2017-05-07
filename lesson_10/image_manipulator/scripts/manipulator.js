var canvas = $('<canvas>').get(0);
var ctx = canvas.getContext('2d');

var manipulator = {
  drawToCanvas: function($img) {
    canvas.width = $img.width();
    canvas.height = $img.height();
    ctx.drawImage($img[0], 0, 0, canvas.width, canvas.height);
  },
  greyScale: function() {
    var imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    var red, green, blue, grey;

    for (var i = 0, len = imageData.data.length; i < len; i += 4) {
      red = imageData.data[i];
      green = imageData.data[i + 1];
      blue = imageData.data[i + 2];
      grey = (red * .3086 + green * .6094 + blue * .0820);
      imageData.data[i] = imageData.data[i + 1] = imageData.data[i + 2] = grey;
    }

    ctx.putImageData(imageData, 0, 0);
  },
  createImage: function() {
    var imgSrc = canvas.toDataURL('png');
    $('<img>', {src: imgSrc}).appendTo($('#after'));
  },
  init: function() {
    var $images = $('#before img');
    $images.each(function(i, img) {
      this.drawToCanvas($(img));
      this.greyScale();
      this.createImage();
    }.bind(this));
  }
};

$(window).load(manipulator.init.bind(manipulator));