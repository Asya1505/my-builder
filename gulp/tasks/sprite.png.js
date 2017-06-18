'use strict';

module.exports = function() {
    $.gulp.task('sprite:png', function () {
        return $.gulp.src('./source/icon/*.{png,gif}').pipe($.gp.spritesmith({
            imgName: 'sprite.png',
            cssName: 'spritepng.css',
            algorithm: 'left-right',
            padding: 20
        })).pipe($.gulp.dest($.config.root + '/assets/sprite'))
    });
};
