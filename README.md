# gulp4-2020-05-08

## 参考 url

[【制作過程実況動画付】npm script と Gulp4 で簡単な Web 制作向けタスクランナーを作る方法](https://olein-design.com/blog/build-task-runner-for-web-developing)

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
・gulp-postcss（PostCSS 利用）
・postcss-cssnext（CSSNext 利用）
・gulp-clean-css（圧縮）
・gulp-rename（ファイル名変更）

```
 $ npm install --save-dev gulp-sourcemaps gulp-notify gulp-plumber gulp-postcss postcss-cssnext gulp-clean-css gulp-rename
```

- js

gulp-babel と gulp-uglify

前者は先ほどお話した Babel ってくれるもの。gulp-uglify は JavaScript を圧縮

```
 $ npm install --save-dev @babel/core @babel/preset-env gulp-babel gulp-uglify
```

gulp-imagemin JPEG・PNG・SVG それぞれを圧縮するために、imagemin-mozjpeg・imagemin-pngquant・imagemin-svgo

```
 $ npm install --save-dev gulp-imagemin imagemin-mozjpeg imagemin-pngquant imagemin-svgo
```

## gulp command

```
npx gulp

```

- stop gulp

ctrl + c

## git clone

```
npm install

npx gulp
```
