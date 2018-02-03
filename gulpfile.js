const gulp = require ('gulp');
const webserver = require ('gulp-webserver');
const sass = require ('gulp-sass');
const autoprefixes = require ('gulp-autoprefixes');
const watch = require ('gulp-whatch');
const concat = require ('gulp-concat');
const uglify = require ('gulp-uglify');
const pug = require ('gulp-pug');



const rutas = {
	scss: {
		main: './app/scss/main.scss',
		watch: './app/scss/**/*.*',
		output: './dist/css/'
	},

	pug:{
		main: './app/views/*.pug',
      	watch: './app/views/**/*.pug',
      	output: './dist/'
	},

	js:{
		main: './app/js/main.js',
     	watch: './app/js/**/*.js',
    	output: './dist/js/'
	}
}



gulp.task('pug', function(){
	gulp.src(rutas.pug.watch)
	.pipe(pug({
		pretty: true
	}))
	.pipe(gulp.dest(rutas.pug.output))
});



gulp.task('js', function(){
	gulp.src(rutas.js.watch)
	.pipe(gulp.dest(rutas.js.output))
});



gulp.task('concatenar', ['js'], function(){
	gulp.src(rutas.js.watch)
	.pipe(concat(rutas.js.main))
	//.pipe(uglify()) // minificado de js
	.pipe(gul.dest(rutas.js.output))
});



gulp.task('imagenes', function(){
   gulp.src('./app/img/*.{png,jpg,gif,jpeg,svg}')
   .pipe(imagemin({
        interlaced: true,
        progressive: true,
        optimizationLevel: 2,
        svgoPlugins: [{removeViewBox: true}]
   }))
   .pipe(gulp.dest('./dist/img/'))
});



gulp.task('server', function(){
	gulp.src('./dist/')
	.pipe(webserver({
		host:'0.0.0.0',
		port:9000,
		livereload:true
	}));
});


gulp.task('sass', function(){
	gulp.src(rutas.scss.main)
	.pipe(sass({
		outputStyle: 'nested',
		// outputStyle: 'compressed',
    	sourceComments: true
	}))
	.pipe(autoprefixes({
		versions:['last 2 browsers']
	}))
	.pipe(gulp.dest(rutas.scss.output))
});


gulp.task('fonts', function(){
   gulp.src('./app/fonts' + '/**' + '/*.*')
   .pipe(gulp.dest('./dist/fonts/'));

});


gulp.watch('watch', function(){
	gulp.watch(rutas.scss.watch, ['sass']);
  	gulp.watch(rutas.pug.watch, ['pug']);
  	gulp.watch(rutas.js.watch, ['concatenar']);
});


gulp.task('acambio', [

	'server',
	'sass',
	'pug',
	'concatenar',
	'font',
	'imagenes',
	'watch'

]);





