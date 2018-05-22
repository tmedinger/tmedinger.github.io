/* Gulp will be used for developent and deployoment tasks,
such a minification of code, translating SCSS into SASS & CSS,
and reloading after a save. See the README.md for gulp commands.
*/
var gulp        = require("gulp");
var browserSync = require("browser-sync").create();
var reload      = browserSync.reload;

gulp.task("serve", function() {
    // Serve files from the root of the project
    browserSync.init({
        server: {
            baseDir: "./"
        }
    });
    gulp.watch("*.html").on("change", reload);
})