var page = require('webpage').create();

var system = require('system');
var url = system.args[1];
var output = system.args[2];
var viewportSizeWXH = system.args[3];
var cliptRectSizeTLWH = system.args[4];

if ( viewportSizeWXH ) {
  viewportSizeW = parseInt(viewportSizeWXH.split("x")[0]);
  viewportSizeH = parseInt(viewportSizeWXH.split("x")[1]);

  page.viewportSize = { width: viewportSizeW, height: viewportSizeH };
}

if ( cliptRectSizeTLWH ) {
  cliptRectParts = cliptRectSizeTLWH.split(",");

  page.clipRect = {
    left: parseInt(cliptRectParts[0]),
    top: parseInt(cliptRectParts[1]),
    width: parseInt(cliptRectParts[2]),
    height: parseInt(cliptRectParts[3])
  };
};

page.open(url, function () {
  page.render(output, { format: "png" });
  phantom.exit();
});
