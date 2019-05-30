var system = require('system');
var fs = require('fs');
var args = system.args;

var shotfolder = './img/talkScreenshots/';
var baseurl = 'http://bigcomplexdata.com/slides/'; 
// baseurl = 'file:///Users/xluo/Personal/Computing/MyGitHubWeb/rluo.github.io/slides/';

var filename = shotfolder + args[2];
console.log("In screenshot");

var page = require('webpage').create();
page.settings.resourceTimeout = 100000;
page.open( baseurl + args[1], function() {
	setTimeout(function() {
		page.render(shotfolder + args[2]);
		console.log("Done screenshot: " + args[2]);
		phantom.exit();
	}, 120000);
});
