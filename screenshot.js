var system = require('system');
var fs = require('fs');
var args = system.args;

// var shotfolder = './img/talkScreenshots/';
var shotfolder = '/mnt/img/talkScreenshots/';
// var baseurl = 'http://bigcomplexdata.com/slides/'; 
var baseurl = 'file:///mnt/slides/'; // relative to this script 
// baseurl = 'file:///Users/xluo/Personal/Computing/MyGitHubWeb/rluo.github.io/slides/';
//# docker run --rm  -v   /Users/xluo/Personal/Computing/MyGitHubWeb/rluo.github.io:/mnt rossiluo/ubuntu bash -c "/root/decktape/phantomjs  /mnt/screenshot.js CAP_CMStat_2019.html#/7 CAP_CMStat_2019.html.png" 

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

// var donepng = fs.existsSync(shotfolder + args[2]);
// if (donepng) {
// 	console.log("Done screenshot: " + args[2]);
// } else {
// 	console.log("Failed screenshot: " + args[2]);
// }