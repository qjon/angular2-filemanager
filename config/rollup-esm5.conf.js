//rollup.config.ts

import alias from 'rollup-plugin-alias';
import resolve from 'rollup-plugin-node-resolve';
import typescript from 'rollup-plugin-typescript2';
import angular from 'rollup-plugin-angular-aot';

export default {
  input: 'tmp/esm5/main.js',
  output: {
    format: 'es',
    file: 'dist/esm5/angular2-filemanager.es5.js',
    name: 'angular2filemanager',
    sourcemap: false,
    globals: {}
  },
  context: 'this',
  plugins: [
    angular(),
    typescript(),
    alias({
      rxjs: __dirname + '/node_modules/rxjs-es'
    }),
    resolve({
      jsnext: true,
      main: true,
      browser: true,
      modulesOnly: true
    })
  ],
  external: [
    '@angular/animations',
    '@angular/animations/browser',
    '@angular/cdk',
    '@angular/core',
    '@angular/core/testing',
    '@angular/common',
    '@angular/common/http',
    '@angular/compiler',
    '@angular/http',
    '@angular/forms',
    '@angular/platform-browser',
    '@angular/platform-browser/animations',
    '@angular/platform-browser-dynamic',
    '@angular/router',
    '@angular/router-deprecated',
    '@ngrx/core',
    '@ngrx/store',
    '@ngrx/store/src/selector',
    '@ngrx/effects',
    '@ngrx/store-devtools',
    '@rign/angular2-tree',
    'angular-confirmation-popover',
    'angular2-uuid',
    'angular2-notifications',
    'ng2-file-upload',
    'ng2-img-cropper',
    'ng2-translate',
    'ng2-dnd',
    'ngx-contextmenu',
    'rxjs/add/operator/withLatestFrom',
    'rxjs/add/observable/combineLatest',
    'rxjs/add/observable/fromEvent',
    'rxjs/add/observable/empty',
    'rxjs/add/observable/merge',
    'rxjs/add/observable/of',
    'rxjs/add/observable/throw',
    'rxjs/observable/merge',
    'rxjs/observable/of',
    'rxjs/operators',
    'rxjs/BehaviorSubject',
    'rxjs/Subject',
    'rxjs/Observable',
    'rxjs/Subscription'
  ],
}
