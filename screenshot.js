var system = require('system');
var fs = require('fs');
var args = system.args;

var shotfolder = './img/talkScreenshots/';


var filename = shotfolder + args[2];
console.log("In screenshot");

var page = require('webpage').create();
page.open('http://bigcomplexdata.com/slides/' + args[1], function() {
	setTimeout(function() {
		page.render(shotfolder + args[2]);
		console.log("Done screenshot: " + args[2]);
		phantom.exit();
	}, 60000);
});
