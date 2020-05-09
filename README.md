# gulp4-2020-05-08

## 参考 url

[【制作過程実況動画付】npm scriptとGulp4で簡単なWeb制作向けタスクランナーを作る方法](https://olein-design.com/blog/build-task-runner-for-web-developing)


## コマンド

```
 npm init

 npm install --save-dev gulp

 npx gulp
 ```
- css

・gulp-sourcemaps（ソースマップ作成）
・gulp-notify（エラー発生時のアラート出力）
・gulp-plumber（エラーが発生しても強制終了させない）
・gulp-postcss（PostCSS利用）
・postcss-cssnext（CSSNext利用）
・gulp-clean-css（圧縮）
・gulp-rename（ファイル名変更）

```
 $ npm install --save-dev gulp-sourcemaps gulp-notify gulp-plumber gulp-postcss postcss-cssnext gulp-clean-css gulp-rename
```
- js

gulp-babel と gulp-uglify 

前者は先ほどお話したBabelってくれるもの。gulp-uglifyはJavaScriptを圧縮

```
 $ npm install --save-dev @babel/core @babel/preset-env gulp-babel gulp-uglify
```


gulp-imagemin JPEG・PNG・SVGそれぞれを圧縮するために、imagemin-mozjpeg・imagemin-pngquant・imagemin-svgo 

```
 $ npm install --save-dev gulp-imagemin imagemin-mozjpeg imagemin-pngquant imagemin-svgo
 ```
