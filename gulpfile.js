"use strict";

var gulp = require("gulp");
var plumber = require("gulp-plumber");
var sourcemap = require("gulp-sourcemaps");
var sass = require("gulp-sass");
var postcss = require("gulp-postcss");
var autoprefixer = require("autoprefixer");
var server = require("browser-sync").create();
var del = require("del");

gulp.task("css", function () {
  return gulp.src("source/sass/style.scss")
    .pipe(plumber())
    .pipe(sourcemap.init())
    .pipe(sass())
    .pipe(postcss([
      autoprefixer()
    ]))
    .pipe(sourcemap.write("."))
    .pipe(gulp.dest("source/css"))
    .pipe(server.stream());
});

gulp.task("server", function () {
  server.init({
    server: "source/",
    notify: false,
    open: true,
    cors: true,
    ui: false
  });

  gulp.watch("source/sass/**/*.{scss,sass}", gulp.series("css"));
  gulp.watch("source/*.html").on("change", server.reload);
});

gulp.task("remove", function () {
  return del(["source/js/lib"]);
});

gulp.task("modules", function () {
  return gulp.src(
    ["node_modules/picturefill/dist/picturefill.min.js", "node_modules/svg4everybody/dist/svg4everybody.min.js"]
  )
  .pipe(gulp.dest("source/js/lib"))
  .pipe(server.stream());
});

gulp.task("js", gulp.series(
  "remove",
  "modules"
));

gulp.task("start", gulp.series("css", "server"));
