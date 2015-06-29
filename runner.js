var page = require('webpage').create();

var system = require('system');
var url = system.args[1];
var output = system.args[2];
var viewportSizeWXH = system.args[3];

viewportSizeW = viewportSizeWXH.split("x")[0];
viewportSizeH = viewportSizeWXH.split("x")[1];

page.viewportSize = { width: viewportSizeW, height: viewportSizeH };

page.open(url, function () {
  page.render(output, { format: "png" });
  phantom.exit();
});
