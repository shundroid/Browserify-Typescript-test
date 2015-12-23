var gulp = require("gulp");
var browserify = require("browserify");
var tsify = require("tsify");
var source = require("vinyl-source-stream");
gulp.task("build", function() {
  browserify().add("js/b.ts").add("js/a.ts").plugin("tsify", {
    noImplicitAny: true,
    declaration: true
  }).bundle().pipe(source("bundle.js")).pipe(gulp.dest("js/"));
});