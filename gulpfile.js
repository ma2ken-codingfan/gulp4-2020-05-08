// ・src →参照元を指定するときに使う
// ・dest →出力先を指定するときに使う
// ・watch →ファイルを監視するときに使う
// ・series（直列処理）とparallel（並列処理） →タスクを設定するときに使う
const { src, dest, watch, series, parallel } = require( "gulp" );
const sass = require( "gulp-sass" );


const cssSass = () => {
    return src( 'src/css/**/*.scss' )
        .pipe( sass() )
        .pipe( dest( 'dist/css/' ) )
 }