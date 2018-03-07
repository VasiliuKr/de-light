'use strict';
// This module doesn't complete task

/*module.exports = function() {
  $.gulp.task('sprite:png', function() {
    // Generate our spritesheet 
    var spriteData = $.gulp.src('./source/sprite/*.png').pipe($.gp.spritesmith({
        imgName: 'sprite.png',
        cssName: 'sprite-png.css'
      }));

    // Pipe image stream through image optimizer and onto disk 
    var imgStream = spriteData.img

    // DEV: We must buffer our stream into a Buffer for `imagemin`
      .pipe($.gp.buffer())
      .pipe($.gp.imagemin())
      .pipe($.gulp.dest($.config.root + '/assets/img'));

    // Pipe CSS stream through CSS optimizer and onto disk
    var cssStream = spriteData.css
      .pipe($.gp.csso())
      .pipe($.gulp.dest($.config.root + '/assets/css'));

    // Return a merged stream to handle both `end` events
    return $.gp.merge(imgStream, cssStream);
  });
};*/

// So I try this one

module.exports = function() {
  $.gulp.task('sprite:png', function () {
    var spriteData = $.gulp.src('./source/sprite/*.png').pipe($.gp.spritesmith({
      imgName: 'sprite.png',
      cssName: 'sprite-png.css'
    }));
    return spriteData.pipe($.gulp.dest($.config.root + '/assets/img'));
  });
};