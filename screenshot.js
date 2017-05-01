var system = require('system');
var fs = require('fs');
var args = system.args;

var filename = './talk-images/' + args[2];
console.log("In screenshot");

var page = require('webpage').create();
page.open('http://bigcomplexdata.com/slides/' + args[1], function() {
	setTimeout(function() {
		page.render('./talk-images/' + args[2]);
		phantom.exit();
	}, 5000);
});
