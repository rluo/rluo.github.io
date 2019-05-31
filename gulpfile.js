var gulp = require('gulp');
//var webshot = require('gulp-webshot');
//var screenshot = require('url-to-screenshot');
var fs = require('fs');
var frontMatter = require('gulp-front-matter');
//var gutil = require('gulp-util');
//var transform = require('gulp-transform');
var log = require('fancy-log');
var exec = require('gulp-exec');
var through = require('through2');

fileExists = function() {
  return through.obj(function(file, encoding, callback) {
      var exists = fs.existsSync('./img/talkScreenshots/' + file.frontmatter.externallink + '.png');
      if (!exists) {
          log("Starting screenshot for " + file.frontmatter.previewimage);
          var command = 'phantomjs screenshot.js ' + file.frontmatter.previewimage + ' ' + file.frontmatter.externallink + ".png";
          file.command = command;
          callback(null, file);
      } else {
          log("Image already exists for " + file.frontmatter.previewimage);
          file.command = 'echo haha';
          callback(null, file);
      }
  });
};

gulp.task('screenshot', async function() {
    gulp.src('./talks/_posts/*.markdown')
        .pipe(frontMatter({property: 'frontmatter'}))
        .pipe(fileExists())
        .pipe(exec('<%= file.command %>'))
        .on('data', function(data) {
            if (data.command !== '') {
                log("Finished screenshot for " + data.frontmatter.previewimage);
            }
        });
});
