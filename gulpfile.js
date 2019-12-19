const gulp = require('gulp');
//const webshot = require('gulp-webshot');
//const screenshot = require('url-to-screenshot');
const fs = require('fs');
const frontMatter = require('gulp-front-matter');
//const gutil = require('gulp-util');
//const transform = require('gulp-transform');
const log = require('fancy-log');
const exec = require('gulp-exec');
const through = require('through2');

fileExists = function() {
  return through.obj(function(file, encoding, callback) {
      var exists = fs.existsSync('./img/talkScreenshots/' + file.frontmatter.externallink + '.png');
      if (!exists) {
          log("Starting screenshot for " + file.frontmatter.previewimage);
          var command = 'docker run --rm  -v   /Users/xluo/Personal/Computing/MyGitHubWeb/rluo.github.io:/mnt rossiluo/ubuntu bash -c  "/root/decktape/phantomjs /mnt/screenshot.js ' + file.frontmatter.previewimage + ' ' + file.frontmatter.externallink + '.png" ';
          file.command = command;
          callback(null, file);
      } else {
          log("Image already exists for " + file.frontmatter.previewimage);
          file.command = 'echo "' + 'phantomjs screenshot.js ' + file.frontmatter.previewimage + ' ' + file.frontmatter.externallink + '.png "';
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
                log(data.command)
            }
        });
});



