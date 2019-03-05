


var gulp = require("gulp");

var sass = require("gulp-sass");




// gulp.task("copy-html",function(){
	
// 	gulp.src("./*.html")
// 	.pipe(gulp.dest("D:\\Program Files (x86)\\php\\PHPTutorial\\WWW\\xinxin"));

// });
// gulp.task("copy-js",function(){
	
// 	gulp.src("js/*.js")
// 	.pipe(gulp.dest("D:\\Program Files (x86)\\php\\PHPTutorial\\WWW\\xinxin\\js"));

// });

// gulp.task("copy-img",function(){
	
// 	gulp.src("img/**/*")
// 	.pipe(gulp.dest("D:\\Program Files (x86)\\php\\PHPTutorial\\WWW\\xinxin\\img"));

// });


gulp.task("sass",function(){
	gulp.src("sass/*.scss")
	.pipe(sass())
	.pipe(gulp.dest(".\\css"));

});
gulp.task("watch",function(){
	// gulp.watch("./*.html",["copy-html"]);
	// gulp.watch("js/*.js",["copy-js"]);
	// gulp.watch("img/**/*",["copy-img"]);
	gulp.watch("sass/*.scss",["sass"]);
});