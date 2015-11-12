var   gulp    = require('gulp')
    , plumber = require('gulp-plumber')
    , notify  = require("gulp-notify")
    , jasmine = require('gulp-jasmine-phantom')
    , jshint  = require('gulp-jshint')

    , folder = {
        assets : 'public/assets',
    }
    , filesForTest = [ folder.assets + '/javascripts/**/*.js', folder.assets + '/_spec/**/*Spec.js' ]
;
 
gulp.task('test', function()
{
    return gulp.src(filesForTest)

        // notify errors
        .pipe(plumber({errorHandler: notify.onError("<%= error.message %>")}))

        // js hint
        .pipe(jshint())
        .pipe(jshint.reporter('jshint-stylish'))
        .pipe(jshint.reporter('fail'))

        // jasmine
        .pipe(jasmine({
            integration : true,
            abortOnFail : true,
            vendor : [
                folder.assets + '/vendor/jquery/dist/jquery.min.js',
                folder.assets + '/vendor/uikit/js/uikit.min.js',
            ],
        }));
});

gulp.task("test:watch", function () {
    gulp.watch(filesForTest, ["test"]);
});

gulp.task("default", ["test:watch"]);
