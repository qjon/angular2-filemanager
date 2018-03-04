const vfs = require('vinyl-fs');
const inlineNg2Template = require('gulp-inline-ng2-template');
const less = require('less');

const src = './src';
const dest = './tmp/src';


vfs
  .src([`${src}/**/*.ts`, `!${src}/**/*.spec.ts`])
  .pipe(
    inlineNg2Template({
      base: `${src}`,
      useRelativePaths: true,
      styleProcessor: function (path, ext, file, cb) {
        less.render(file, (e, out) => {
          cb(null, out.css);
        });
      }
    })
  )
  .pipe(
    vfs.dest(`${dest}`)
  );
