// ・src →参照元を指定するときに使う
// ・dest →出力先を指定するときに使う
// ・watch →ファイルを監視するときに使う
// ・series（直列処理）とparallel（並列処理） →タスクを設定するときに使う
const { src, dest, watch, series, parallel } = require( "gulp" );
const sass = require( "gulp-sass" );
const plumber = require( "gulp-plumber" );
const notify = require( "gulp-notify" );
const postcss = require( "gulp-postcss" );
const cssnext = require( "postcss-cssnext")
const cleanCSS = require( "gulp-clean-css" );
const rename = require( "gulp-rename" );
const sourcemaps = require( "gulp-sourcemaps" );

const babel = require( "gulp-babel" );
const uglify = require( "gulp-uglify" );

const imagemin = require( "gulp-imagemin" );
const imageminMozjpeg = require( "imagemin-mozjpeg" );
const imageminPngquant = require( "imagemin-pngquant" );
const imageminSvgo = require( "imagemin-svgo" );

const browsers = [
  'last 2 versions',
  '> 5%',
  'ie = 11',
  'not ie <= 10',
  'ios >= 8',
  'and_chr >= 5',
  'Android >= 5',
]

const srcPath = {
  html: 'src/html/**/*',
  css: 'src/css/**/*.scss',
  js: 'src/js/*.js',
  img: 'src/images/**/*',
  html: './**/*.html',
}

const destPath = {
  css: 'dist/css/',
  js: 'dist/js/',
  img: 'dist/images/'
}


const cssSass = () => {
  return src( srcPath.css )
  .pipe( sourcemaps.init() ) //gulp-sourcemapsを初期化
  .pipe(
    plumber( //エラーが発生しても処理は止めず
      {
          errorHandler: notify.onError( 'Error: <%= error.message %>' )
          // エラー出力設定
      }
    )
  )
  .pipe( sass() )
  .pipe( postcss( [cssnext(browsers)] ) ) //PostCSS
  .pipe( dest( destPath.css ) ) //CSSを出力
  .pipe( cleanCSS() ) //CSSを圧縮
  .pipe(
    rename(
      { extname: '.min.css' } //ファイル名に min.css をつける
    )
  )
  .pipe( sourcemaps.write( '/maps' ) ) //ソースマップを mapsディレクトリに出力
.pipe( dest( destPath.css ) ) //圧縮したCSSを出力
 }

 const jsBabel = () => {
  return src( srcPath.js )
  .pipe(
    plumber(
      {
        errorHandler: notify.onError( 'Error: <%= error.message %>' )
      }
    )
  )
  .pipe( babel( {
    presets: [ '@babel/preset-env' ]
  } ) )
  .pipe( dest( destPath.js ) )
  .pipe( uglify() )
  .pipe(
    rename(
      { extname: '.min.js' }
    )
  )
  .pipe( dest( destPath.js ) )
}

const imgImagemin = () => {
  return src(srcPath.img)
  .pipe(
    imagemin(
      [
        imageminMozjpeg({
          quality: 80
        }),
        imageminPngquant(),
        imageminSvgo({
          plugins: [
            {
              removeViewbox: false
            }
          ]
        })
      ],
      {
        verbose: true
      }
    )
  )
  .pipe( dest( destPath.img ) )
}

exports.default = series( cssSass, jsBabel, imgImagemin )
