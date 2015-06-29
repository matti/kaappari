var page = require('webpage').create();
page.viewportSize = { width: 640, height: 480 };

var system = require('system');
var url = system.args[1];
var output = system.args[2];

page.open(url, function () {
  page.render(output, { format: "png" });
  phantom.exit();
});
