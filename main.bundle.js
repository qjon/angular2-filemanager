webpackJsonp(["main"],{

/***/ "../../../../../demo/src/$$_gendir lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../demo/src/$$_gendir lazy recursive";

/***/ }),

/***/ "../../../../../demo/src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <h1>Filemanager</h1>\n    <div class=\"configuration-bar\">\n        <button class=\"btn btn-primary\" (click)=\"toggleMultiSelection()\">\n            <i class=\"fa\" [ngClass]=\"{'fa-check-square': this.fileManagerConfiguration.isMultiSelection, 'fa-square': !this.fileManagerConfiguration.isMultiSelection}\"></i>\n            <span>Use multiselection</span>\n        </button>\n    </div>\n    <ri-filemanager>Loading...</ri-filemanager>\n</div>\n"

/***/ }),

/***/ "../../../../../demo/src/app/app.component.less":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".configuration-bar {\n  margin: 10px 0;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../demo/src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__main__ = __webpack_require__("../../../../../main.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = /** @class */ (function () {
    function AppComponent(fileManagerConfiguration, fileManagerDispatcher) {
        this.fileManagerConfiguration = fileManagerConfiguration;
        this.fileManagerDispatcher = fileManagerDispatcher;
    }
    AppComponent.prototype.toggleMultiSelection = function () {
        this.fileManagerConfiguration.isMultiSelection = !this.fileManagerConfiguration.isMultiSelection;
        if (!this.fileManagerConfiguration.isMultiSelection) {
            this.fileManagerDispatcher.unSelectAllFiles();
        }
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../demo/src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../demo/src/app/app.component.less")]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__main__["a" /* FileManagerConfiguration */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__main__["a" /* FileManagerConfiguration */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__main__["b" /* FileManagerDispatcherService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__main__["b" /* FileManagerDispatcherService */]) === "function" && _b || Object])
    ], AppComponent);
    return AppComponent;
    var _a, _b;
}());

//# sourceMappingURL=/home/www/projects/angular2-filemanager/demo/src/app.component.js.map

/***/ }),

/***/ "../../../../../demo/src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("../../../../../demo/src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__main__ = __webpack_require__("../../../../../main.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ng2_translate__ = __webpack_require__("../../../../ng2-translate/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ngrx_effects__ = __webpack_require__("../../../../@ngrx/effects/@ngrx/effects.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__rign_angular2_tree__ = __webpack_require__("../../../../@rign/angular2-tree/main.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var fileManagerConfiguration = {
    urls: {
        foldersUrl: '/api/folder',
        filesUrl: null,
        folderMoveUrl: '/api/folder/move'
    },
    isMultiSelection: true,
    mimeTypes: ['image/jpg', 'image/jpeg', 'image/png'],
    maxFileSize: 50 * 1024
};
var AppModule = /** @class */ (function () {
    function AppModule(translate) {
        translate.use('en');
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_8__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_6__ngrx_effects__["c" /* EffectsModule */].forRoot([]),
                __WEBPACK_IMPORTED_MODULE_3__main__["c" /* FileManagerModule */].forRoot(fileManagerConfiguration),
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_7__ngrx_store__["i" /* StoreModule */].forRoot({}),
                __WEBPACK_IMPORTED_MODULE_9__rign_angular2_tree__["f" /* TreeModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_4_ng2_translate__["a" /* TranslateModule */].forRoot(),
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4_ng2_translate__["b" /* TranslateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_ng2_translate__["b" /* TranslateService */]) === "function" && _a || Object])
    ], AppModule);
    return AppModule;
    var _a;
}());

//# sourceMappingURL=/home/www/projects/angular2-filemanager/demo/src/app.module.js.map

/***/ }),

/***/ "../../../../../demo/src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: true
};
//# sourceMappingURL=/home/www/projects/angular2-filemanager/demo/src/environment.js.map

/***/ }),

/***/ "../../../../../demo/src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("../../../../../demo/src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__("../../../../../demo/src/app/app.module.ts");




if (__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=/home/www/projects/angular2-filemanager/demo/src/main.js.map

/***/ }),

/***/ "../../../../../main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_store_fileManagerApiAbstract_class__ = __webpack_require__("../../../../../src/store/fileManagerApiAbstract.class.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_store_fileManagerActions_service__ = __webpack_require__("../../../../../src/store/fileManagerActions.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src_store_fileManagerApi_service__ = __webpack_require__("../../../../../src/store/fileManagerApi.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__src_store_fileManagerBackendApi_service__ = __webpack_require__("../../../../../src/store/fileManagerBackendApi.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__src_filemanager_component__ = __webpack_require__("../../../../../src/filemanager.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__src_configuration_fileManagerConfiguration_service__ = __webpack_require__("../../../../../src/configuration/fileManagerConfiguration.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__src_store_fileManagerDispatcher_service__ = __webpack_require__("../../../../../src/store/fileManagerDispatcher.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__src_filemanager_module__ = __webpack_require__("../../../../../src/filemanager.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__src_services_FilemanagerNotifcations__ = __webpack_require__("../../../../../src/services/FilemanagerNotifcations.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__src_filesList_fileManagerUploader_service__ = __webpack_require__("../../../../../src/filesList/fileManagerUploader.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__src_filesList_interface_ISelectFile__ = __webpack_require__("../../../../../src/filesList/interface/ISelectFile.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__src_filesList_interface_ISelectFile___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10__src_filesList_interface_ISelectFile__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__src_filesList_interface_IOuterFile__ = __webpack_require__("../../../../../src/filesList/interface/IOuterFile.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__src_filesList_interface_IOuterFile___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11__src_filesList_interface_IOuterFile__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__src_services_imageDataConverter_service__ = __webpack_require__("../../../../../src/services/imageDataConverter.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__src_store_IFileManagerApi__ = __webpack_require__("../../../../../src/store/IFileManagerApi.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__src_store_IFileManagerApi___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13__src_store_IFileManagerApi__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__src_configuration_IFileManagerConfiguration__ = __webpack_require__("../../../../../src/configuration/IFileManagerConfiguration.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__src_configuration_IFileManagerConfiguration___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14__src_configuration_IFileManagerConfiguration__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__src_crop_ICropBounds__ = __webpack_require__("../../../../../src/crop/ICropBounds.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__src_crop_ICropBounds___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15__src_crop_ICropBounds__);
/* unused harmony reexport AbstractFileManagerApiService */
/* unused harmony reexport FileManagerActionsService */
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_7__src_filemanager_module__["a"]; });
/* unused harmony reexport FileManagerBackendApiService */
/* unused harmony reexport FileManagerComponent */
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_5__src_configuration_fileManagerConfiguration_service__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_6__src_store_fileManagerDispatcher_service__["a"]; });
/* unused harmony reexport FileManagerUploader */
/* unused harmony reexport FilemanagerNotifcations */
/* unused harmony reexport FileManagerApiService */
/* unused harmony reexport ICropBounds */
/* unused harmony reexport IFileDataProperties */
/* unused harmony reexport IFileManagerApi */
/* unused harmony reexport IFileManagerConfiguration */
/* unused harmony reexport IOuterFile */
/* unused harmony reexport ISelectFile */

















//# sourceMappingURL=/home/www/projects/angular2-filemanager/demo/src/main.js.map

/***/ }),

/***/ "../../../../../src/configuration/IFileManagerConfiguration.ts":
/***/ (function(module, exports) {

//# sourceMappingURL=/home/www/projects/angular2-filemanager/demo/src/IFileManagerConfiguration.js.map

/***/ }),

/***/ "../../../../../src/configuration/fileManagerConfiguration.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FileManagerConfiguration; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__IFileManagerConfiguration__ = __webpack_require__("../../../../../src/configuration/IFileManagerConfiguration.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__IFileManagerConfiguration___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__IFileManagerConfiguration__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};


var FileManagerConfiguration = /** @class */ (function () {
    function FileManagerConfiguration(configuration) {
        this.allowedCropSize = [
            {
                name: 'RI_FM_BTN_LANDSCAPE',
                width: 300,
                height: 100
            },
            {
                name: 'RI_FM_BTN_PORTRAIT',
                width: 200,
                height: 300
            }
        ];
        this.contextMenuItems = [];
        this.fileTypesFilter = [
            {
                name: 'ALL',
                mimes: [],
                iconCls: 'fa fa-file-o',
                text: 'All files',
                defaultSelected: true
            },
            {
                name: 'IMAGES',
                mimes: ['image/jpg', 'image/jpeg', 'image/png', 'image/gif', 'image/png'],
                iconCls: 'fa fa-picture-o',
                text: 'Images'
            },
            {
                name: 'AUDIO',
                mimes: ['audio/mpeg', 'audio/x-ms-wma', 'audio/vnd.rn-realaudio', 'audio/x-wav', 'audio/mp3'],
                iconCls: 'fa fa-file-audio-o',
                text: 'Audio'
            },
            {
                name: 'VIDEO',
                mimes: ['video/mpeg', 'video/mp4', 'video/quicktime', 'video/x-ms-wmv'],
                iconCls: 'fa fa-file-video-o',
                text: 'Video'
            },
            {
                name: 'ARCHIVE',
                mimes: ['application/zip'],
                iconCls: 'fa fa-file-archive-o',
                text: 'Archive'
            }
        ];
        this.fileUrl = '/api/files';
        var _a = configuration.urls, foldersUrl = _a.foldersUrl, folderMoveUrl = _a.folderMoveUrl;
        this.folderUrls = { foldersUrl: foldersUrl, folderMoveUrl: folderMoveUrl };
        this.fileUrl = configuration.urls.filesUrl;
        this.isMultiSelection = configuration.isMultiSelection || false;
        this.maxFileSize = configuration.maxFileSize || 0;
        this.mimeTypes = configuration.mimeTypes || null;
    }
    FileManagerConfiguration = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])('fileManagerConfiguration')),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__IFileManagerConfiguration__["IFileManagerConfiguration"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__IFileManagerConfiguration__["IFileManagerConfiguration"]) === "function" && _a || Object])
    ], FileManagerConfiguration);
    return FileManagerConfiguration;
    var _a;
}());

//# sourceMappingURL=/home/www/projects/angular2-filemanager/demo/src/fileManagerConfiguration.service.js.map

/***/ }),

/***/ "../../../../../src/configuration/tree.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TreeService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__rign_angular2_tree__ = __webpack_require__("../../../../@rign/angular2-tree/main.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__IFileManagerConfiguration__ = __webpack_require__("../../../../../src/configuration/IFileManagerConfiguration.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__IFileManagerConfiguration___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__IFileManagerConfiguration__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};




var TreeService = /** @class */ (function (_super) {
    __extends(TreeService, _super);
    function TreeService(http, configuration) {
        var _this = _super.call(this, http) || this;
        _this.http = http;
        _this.apiConfig = {
            addUrl: configuration.urls.foldersUrl,
            getUrl: configuration.urls.foldersUrl,
            updateUrl: configuration.urls.foldersUrl,
            removeUrl: configuration.urls.foldersUrl,
            moveUrl: configuration.urls.folderMoveUrl
        };
        return _this;
    }
    TreeService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __param(1, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])('fileManagerConfiguration')),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__angular_common_http__["a" /* HttpClient */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__IFileManagerConfiguration__["IFileManagerConfiguration"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__IFileManagerConfiguration__["IFileManagerConfiguration"]) === "function" && _b || Object])
    ], TreeService);
    return TreeService;
    var _a, _b;
}(__WEBPACK_IMPORTED_MODULE_1__rign_angular2_tree__["b" /* NodeService */]));

//# sourceMappingURL=/home/www/projects/angular2-filemanager/demo/src/tree.service.js.map

/***/ }),

/***/ "../../../../../src/crop/ICropBounds.ts":
/***/ (function(module, exports) {

//# sourceMappingURL=/home/www/projects/angular2-filemanager/demo/src/ICropBounds.js.map

/***/ }),

/***/ "../../../../../src/crop/crop.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CropComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__filesList_file_model__ = __webpack_require__("../../../../../src/filesList/file.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_img_cropper_src_cropperSettings__ = __webpack_require__("../../../../ng2-img-cropper/src/cropperSettings.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_img_cropper_src_imageCropperComponent__ = __webpack_require__("../../../../ng2-img-cropper/src/imageCropperComponent.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__configuration_fileManagerConfiguration_service__ = __webpack_require__("../../../../../src/configuration/fileManagerConfiguration.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__store_fileManagerDispatcher_service__ = __webpack_require__("../../../../../src/store/fileManagerDispatcher.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var CropComponent = /** @class */ (function () {
    function CropComponent(resolver, configuration, fileManagerDispatcher) {
        this.resolver = resolver;
        this.configuration = configuration;
        this.fileManagerDispatcher = fileManagerDispatcher;
        this.onCrop = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.cropSizeList = configuration.allowedCropSize;
    }
    CropComponent.prototype.updateCropSize = function (cropSize) {
        var _this = this;
        var image = new Image();
        var cropperComponent = this.resolver.resolveComponentFactory(__WEBPACK_IMPORTED_MODULE_3_ng2_img_cropper_src_imageCropperComponent__["a" /* ImageCropperComponent */]);
        var cropperComponentRef = this.container.createComponent(cropperComponent);
        if (this.container.length > 1) {
            this.container.detach(0);
        }
        this.currentCropSize = cropSize;
        cropperComponentRef.instance.settings = this.getCropperSettings();
        cropperComponentRef.instance.image = {};
        cropperComponentRef.instance.onCrop
            .subscribe(function (bounds) { return _this.bounds = bounds; });
        setTimeout(function () {
            image.src = _this.file.url;
            cropperComponentRef.instance.setImage(image);
        });
    };
    CropComponent.prototype.ngAfterContentInit = function () {
        this.updateCropSize(this.cropSizeList[0]);
    };
    ;
    CropComponent.prototype.cropImage = function () {
        var bounds = {
            x: this.bounds.left,
            y: this.bounds.top,
            width: this.bounds.width,
            height: this.bounds.height
        };
        this.fileManagerDispatcher.cropFile(this.file, bounds);
    };
    CropComponent.prototype.getCropperSettings = function () {
        var cropperSettings = new __WEBPACK_IMPORTED_MODULE_2_ng2_img_cropper_src_cropperSettings__["a" /* CropperSettings */]();
        var scale = this.calculateScale();
        var width = scale * this.file.getWidth();
        var height = scale * this.file.getHeight();
        cropperSettings.noFileInput = true;
        cropperSettings.width = this.currentCropSize.width;
        cropperSettings.height = this.currentCropSize.height;
        cropperSettings.canvasWidth = width;
        cropperSettings.canvasHeight = height;
        return cropperSettings;
    };
    /**
     * Calculates scale between current file dimensions and box 600x600
     * @returns {number}
     */
    CropComponent.prototype.calculateScale = function () {
        var scale = this.file.getWidth() / this.file.getHeight();
        if (scale > 1) {
            if (this.file.getWidth() > 600) {
                return 600 / this.file.getWidth();
            }
        }
        else {
            if (this.file.getHeight() > 600) {
                return 600 / this.file.getHeight();
            }
        }
        return 1;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__filesList_file_model__["a" /* FileModel */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__filesList_file_model__["a" /* FileModel */]) === "function" && _a || Object)
    ], CropComponent.prototype, "file", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], CropComponent.prototype, "onCrop", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('container', { read: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"] }),
        __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"]) === "function" && _b || Object)
    ], CropComponent.prototype, "container", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('cropper'),
        __metadata("design:type", typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_ng2_img_cropper_src_imageCropperComponent__["a" /* ImageCropperComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_ng2_img_cropper_src_imageCropperComponent__["a" /* ImageCropperComponent */]) === "function" && _c || Object)
    ], CropComponent.prototype, "cropper", void 0);
    CropComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'crop-image',
            styles: [__webpack_require__("../../../../../src/crop/crop.less")],
            template: "\n    <div class=\"crop-image\">\n      <div class=\"crop-workbench\">\n        <div #container></div>\n      </div>\n      <div class=\"btn-toolbar\">\n        <div class=\"btn-group\">\n          <button class=\"btn btn-primary\" *ngFor=\"let cropSize of cropSizeList\" (click)=\"updateCropSize(cropSize)\"\n                  [ngClass]=\"{'active': cropSize == currentCropSize}\">{{cropSize.name | translate}}\n          </button>\n        </div>\n        <div class=\"btn-group pull-right\">\n          <button class=\"btn btn-success btn-icon\" (click)=\"cropImage()\">\n            <i class=\"fa fa-check\"></i>\n            <span>{{'RI_FM_BTN_SAVE' | translate}}</span>\n          </button>\n        </div>\n      </div>\n    </div>\n  "
        }),
        __metadata("design:paramtypes", [typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ComponentFactoryResolver"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ComponentFactoryResolver"]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__configuration_fileManagerConfiguration_service__["a" /* FileManagerConfiguration */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__configuration_fileManagerConfiguration_service__["a" /* FileManagerConfiguration */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_5__store_fileManagerDispatcher_service__["a" /* FileManagerDispatcherService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__store_fileManagerDispatcher_service__["a" /* FileManagerDispatcherService */]) === "function" && _f || Object])
    ], CropComponent);
    return CropComponent;
    var _a, _b, _c, _d, _e, _f;
}());

//# sourceMappingURL=/home/www/projects/angular2-filemanager/demo/src/crop.component.js.map

/***/ }),

/***/ "../../../../../src/crop/crop.less":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".btn-toolbar {\n  margin: 5px 0;\n}\n.btn-toolbar .btn-group {\n  margin: 0;\n}\n.crop-workbench {\n  width: 600px;\n  height: 400px;\n  text-align: center;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/decorators/logFunction.decorator.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = log;
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__demo_src_environments_environment__ = __webpack_require__("../../../../../demo/src/environments/environment.ts");

function log(target, propertyKey, descriptor) {
    var originalMethod = descriptor.value;
    descriptor.value = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var eventObject = args[0];
        if (!__WEBPACK_IMPORTED_MODULE_0__demo_src_environments_environment__["a" /* environment */].production) {
            console.log(eventObject);
        }
        return originalMethod.apply(this, args);
    };
    return descriptor;
}
//# sourceMappingURL=/home/www/projects/angular2-filemanager/demo/src/logFunction.decorator.js.map

/***/ }),

/***/ "../../../../../src/dropdown/AbstractButton.class.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AbstractButtonClass; });
var AbstractButtonClass = /** @class */ (function () {
    function AbstractButtonClass(data) {
        this.symbol = data.symbol;
        this.name = data.name;
        this.label = data.label;
        this.icon = data.icon;
        this.iconCssClass = data.iconCssClass;
        this.disabled = data.disabled;
    }
    return AbstractButtonClass;
}());

//# sourceMappingURL=/home/www/projects/angular2-filemanager/demo/src/AbstractButton.class.js.map

/***/ }),

/***/ "../../../../../src/dropdown/Button.class.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ButtonClass; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__AbstractButton_class__ = __webpack_require__("../../../../../src/dropdown/AbstractButton.class.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var ButtonClass = /** @class */ (function (_super) {
    __extends(ButtonClass, _super);
    function ButtonClass() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ButtonClass.prototype.isDivider = function () {
        return false;
    };
    return ButtonClass;
}(__WEBPACK_IMPORTED_MODULE_0__AbstractButton_class__["a" /* AbstractButtonClass */]));

//# sourceMappingURL=/home/www/projects/angular2-filemanager/demo/src/Button.class.js.map

/***/ }),

/***/ "../../../../../src/dropdown/ButtonDivider.class.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ButtonDividerClass; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__AbstractButton_class__ = __webpack_require__("../../../../../src/dropdown/AbstractButton.class.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();

var ButtonDividerClass = /** @class */ (function (_super) {
    __extends(ButtonDividerClass, _super);
    function ButtonDividerClass() {
        return _super.call(this, {
            symbol: '',
            name: '',
            label: false,
            icon: false,
            iconCssClass: ''
        }) || this;
    }
    ButtonDividerClass.prototype.isDivider = function () {
        return true;
    };
    return ButtonDividerClass;
}(__WEBPACK_IMPORTED_MODULE_0__AbstractButton_class__["a" /* AbstractButtonClass */]));

//# sourceMappingURL=/home/www/projects/angular2-filemanager/demo/src/ButtonDivider.class.js.map

/***/ }),

/***/ "../../../../../src/dropdown/IButton.ts":
/***/ (function(module, exports) {

//# sourceMappingURL=/home/www/projects/angular2-filemanager/demo/src/IButton.js.map

/***/ }),

/***/ "../../../../../src/dropdown/dropdown.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DropdownComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__IButton__ = __webpack_require__("../../../../../src/dropdown/IButton.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__IButton___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__IButton__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DropdownComponent = /** @class */ (function () {
    function DropdownComponent() {
        this.onClick = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.isOpen = false;
    }
    DropdownComponent.prototype.hide = function () {
        this.isOpen = false;
    };
    DropdownComponent.prototype.selectButton = function (button) {
        this.hide();
        this.onClick.emit(button);
    };
    DropdownComponent.prototype.toggleOpen = function () {
        this.isOpen = !this.isOpen;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__IButton__["IButtonData"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__IButton__["IButtonData"]) === "function" && _a || Object)
    ], DropdownComponent.prototype, "mainButton", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Array)
    ], DropdownComponent.prototype, "buttons", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Boolean)
    ], DropdownComponent.prototype, "displayMainButtonLabel", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], DropdownComponent.prototype, "onClick", void 0);
    DropdownComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'ri-dropdown',
            styles: [__webpack_require__("../../../../../src/dropdown/dropdown.less")],
            template: __webpack_require__("../../../../../src/dropdown/dropdown.html")
        })
    ], DropdownComponent);
    return DropdownComponent;
    var _a;
}());

//# sourceMappingURL=/home/www/projects/angular2-filemanager/demo/src/dropdown.component.js.map

/***/ }),

/***/ "../../../../../src/dropdown/dropdown.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"btn-group dropdown\" [ngClass]=\"{'open': isOpen}\">\n  <button class=\"btn btn-default\" [ngClass]=\"{disabled: mainButton.disabled}\" (click)=\"selectButton(mainButton)\">\n    <span *ngIf=\"displayMainButtonLabel\">{{mainButton.name}}</span>\n    <i *ngIf=\"mainButton.icon\" class=\"{{mainButton.iconCssClass}}\"></i>\n  </button>\n  <button class=\"btn btn-default dropdown-toggle\" [ngClass]=\"{disabled: mainButton.disabled}\" (click)=\"toggleOpen()\">\n    <span class=\"caret\"></span>\n  </button>\n  <ul class=\"dropdown-menu\" role=\"menu\" aria-labelledby=\"single-button\" (mouseleave)=\"hide()\">\n    <li role=\"menuitem\" [ngClass]=\"{divider: button.isDivider(), disabled: button.disabled}\" *ngFor=\"let button of buttons\">\n      <a (click)=\"selectButton(button)\" *ngIf=\"!button.isDivider()\">\n        <span *ngIf=\"button.icon\" class=\"{{button.iconCssClass}}\"></span>\n        <span *ngIf=\"button.label\">{{button.name | translate}}</span>\n      </a>\n    </li>\n  </ul>\n</div>\n"

/***/ }),

/***/ "../../../../../src/dropdown/dropdown.less":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".dropdown {\n  display: inline-block;\n  height: 34px;\n}\n.dropdown .btn {\n  height: 34px;\n}\n.dropdown a {\n  cursor: pointer;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/filemanager.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FileManagerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__rign_angular2_tree__ = __webpack_require__("../../../../@rign/angular2-tree/main.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__filesList_file_model__ = __webpack_require__("../../../../../src/filesList/file.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__decorators_logFunction_decorator__ = __webpack_require__("../../../../../src/decorators/logFunction.decorator.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_notifications__ = __webpack_require__("../../../../angular2-notifications/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angular2_notifications___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_angular2_notifications__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__filesList_interface_IFileEvent__ = __webpack_require__("../../../../../src/filesList/interface/IFileEvent.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__filesList_interface_IFileEvent___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5__filesList_interface_IFileEvent__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__toolbar_models_button_model__ = __webpack_require__("../../../../../src/toolbar/models/button.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__filesList_filesList_component__ = __webpack_require__("../../../../../src/filesList/filesList.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__toolbar_interface_IToolbarEvent__ = __webpack_require__("../../../../../src/toolbar/interface/IToolbarEvent.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__toolbar_interface_IToolbarEvent___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8__toolbar_interface_IToolbarEvent__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__configuration_fileManagerConfiguration_service__ = __webpack_require__("../../../../../src/configuration/fileManagerConfiguration.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__store_fileManagerDispatcher_service__ = __webpack_require__("../../../../../src/store/fileManagerDispatcher.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__store_fileManagerEffects_service__ = __webpack_require__("../../../../../src/store/fileManagerEffects.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__store_fileManagerApi_service__ = __webpack_require__("../../../../../src/store/fileManagerApi.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__services_FilemanagerNotifcations__ = __webpack_require__("../../../../../src/services/FilemanagerNotifcations.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__services_currentDirectoryFiles_service__ = __webpack_require__("../../../../../src/services/currentDirectoryFiles.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_rxjs_operators__ = __webpack_require__("../../../../rxjs/operators.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16_rxjs_operators___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_16_rxjs_operators__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

















var FileManagerComponent = /** @class */ (function () {
    function FileManagerComponent(store, treeActions, nodeDispatcherService, treeService, notifications, configuration, fileManagerDispatcher, fileManagerEffects, filemanagerNotifcations, currentDirectoryFilesService) {
        var _this = this;
        this.store = store;
        this.treeActions = treeActions;
        this.nodeDispatcherService = nodeDispatcherService;
        this.treeService = treeService;
        this.notifications = notifications;
        this.configuration = configuration;
        this.fileManagerDispatcher = fileManagerDispatcher;
        this.fileManagerEffects = fileManagerEffects;
        this.filemanagerNotifcations = filemanagerNotifcations;
        this.currentDirectoryFilesService = currentDirectoryFilesService;
        this.onSingleFileSelect = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.treeConfiguration = {
            showAddButton: false,
            disableMoveNodes: false,
            treeId: 'tree',
            dragZone: 'tree',
            dropZone: ['tree']
        };
        /** UNSED **/
        this.contextMenu = [];
        this.currentSelectedFiles = [];
        this.isPreviewMode = false;
        this.isCropMode = false;
        this.notificationOptions = {
            position: ['bottom', 'right'],
            timeOut: 3000,
            lastOnBottom: false,
            preventDuplicates: true,
            rtl: false,
            showProgressBar: true,
            pauseOnHover: true
        };
        this.menu = configuration.contextMenuItems;
        this.filemanagerNotifcations.getNotificationStream()
            .subscribe(function (notification) {
            var type = notification.type, title = notification.title, message = notification.message;
            _this.notifications[type](title, message);
        });
        this.currentDirectoryFilesService.selectedFiles$
            .subscribe(function (data) {
            _this.currentSelectedFiles = data;
        });
    }
    FileManagerComponent.prototype.ngOnInit = function () {
        var _this = this;
        /*** START - init TREE ***/
        var treeId = this.treeConfiguration.treeId;
        this.nodeDispatcherService.register(treeId, this.treeService);
        this.store.dispatch(this.treeActions.registerTree(treeId));
        this.folders = this.store.select(__WEBPACK_IMPORTED_MODULE_1__rign_angular2_tree__["g" /* treeStateSelector */])
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_16_rxjs_operators__["map"])(function (data) {
            return data[treeId];
        }), Object(__WEBPACK_IMPORTED_MODULE_16_rxjs_operators__["filter"])(function (data) { return !!data; }));
        this.treeModel = new __WEBPACK_IMPORTED_MODULE_1__rign_angular2_tree__["e" /* TreeModel */](this.folders, this.treeConfiguration);
        /*** END - init TREE ***/
        /*** START - init files ***/
        this.files$ = this.currentDirectoryFilesService.files$;
        this.filteredFiles$ = this.currentDirectoryFilesService.filteredFiles$;
        this.selectedFiles$ = this.currentDirectoryFilesService.selectedFiles$;
        this.treeModel.currentSelectedNode$
            .subscribe(function (node) {
            _this.loadFiles(node ? node.id : '');
        });
        /*** END - init files ***/
        this.fileManagerEffects.cropFileSuccess$
            .subscribe(function () {
            _this.closeModal();
        });
    };
    Object.defineProperty(FileManagerComponent.prototype, "currentSelectedFolderId", {
        get: function () {
            var value = this.treeModel.currentSelectedNode$.getValue();
            return value ? value.id : null;
        },
        enumerable: true,
        configurable: true
    });
    FileManagerComponent.prototype.onAddFolder = function () {
        this.treeComponent.onAdd();
    };
    /***********************************************************************
     * FILE EVENTS
     **********************************************************************/
    /**
     * Run when all files are uploaded
     * @param folderId
     */
    FileManagerComponent.prototype.onUpload = function (folderId) {
        this.notifications.success('File upload', 'Upload complete');
    };
    FileManagerComponent.prototype.onPreviewFile = function (fileEventData) {
        this.isPreviewMode = true;
        this.currentSelectedFile = fileEventData.file;
    };
    FileManagerComponent.prototype.onOpenCropFileEditor = function (fileEventData) {
        this.isCropMode = true;
        this.currentSelectedFile = fileEventData.file;
    };
    FileManagerComponent.prototype.onSelectFile = function (event) {
        this.onSingleFileSelect.next(event.getSelectData());
    };
    /***********************************************************************
     * TOOLBAR EVENTS
     **********************************************************************/
    FileManagerComponent.prototype.onMenuButtonClick = function (event) {
        switch (event.name) {
            case __WEBPACK_IMPORTED_MODULE_6__toolbar_models_button_model__["a" /* Button */].DELETE_SELECTION:
                this.fileManagerDispatcher.deleteSelectedFiles(this.currentSelectedFiles);
                break;
            case __WEBPACK_IMPORTED_MODULE_6__toolbar_models_button_model__["a" /* Button */].SELECT_ALL:
                this.fileManagerDispatcher.selectAllFiles();
                break;
            case __WEBPACK_IMPORTED_MODULE_6__toolbar_models_button_model__["a" /* Button */].UNSELECT_ALL:
                this.fileManagerDispatcher.unSelectAllFiles();
                break;
            case __WEBPACK_IMPORTED_MODULE_6__toolbar_models_button_model__["a" /* Button */].INVERSE_SELECTION:
                this.fileManagerDispatcher.inverseSelection();
                break;
            case __WEBPACK_IMPORTED_MODULE_6__toolbar_models_button_model__["a" /* Button */].REFRESH_FILES_LIST:
                this.reloadFiles();
                break;
        }
    };
    /***********************************************************************
     * OTHER FUNCTIONS
     **********************************************************************/
    FileManagerComponent.prototype.keyEvents = function (event) {
        if (this.isPreviewMode || this.isCropMode) {
            if (event.keyCode === 27) {
                this.closeModal();
            }
        }
    };
    FileManagerComponent.prototype.closeModal = function () {
        this.isPreviewMode = false;
        this.isCropMode = false;
    };
    FileManagerComponent.prototype.loadFiles = function (folderId) {
        this.fileManagerDispatcher.loadFiles(folderId || '');
    };
    FileManagerComponent.prototype.reloadFiles = function () {
        var node = this.treeModel.currentSelectedNode$.getValue();
        var id = node ? node.id : '';
        this.loadFiles(id);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], FileManagerComponent.prototype, "onSingleFileSelect", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1__rign_angular2_tree__["d" /* TreeComponent */]),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__rign_angular2_tree__["d" /* TreeComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__rign_angular2_tree__["d" /* TreeComponent */]) === "function" && _a || Object)
    ], FileManagerComponent.prototype, "treeComponent", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_7__filesList_filesList_component__["a" /* FilesListComponent */]),
        __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_7__filesList_filesList_component__["a" /* FilesListComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_7__filesList_filesList_component__["a" /* FilesListComponent */]) === "function" && _b || Object)
    ], FileManagerComponent.prototype, "filesList", void 0);
    __decorate([
        __WEBPACK_IMPORTED_MODULE_3__decorators_logFunction_decorator__["a" /* log */],
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], FileManagerComponent.prototype, "onAddFolder", null);
    __decorate([
        __WEBPACK_IMPORTED_MODULE_3__decorators_logFunction_decorator__["a" /* log */],
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__filesList_interface_IFileEvent__["IFileEvent"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__filesList_interface_IFileEvent__["IFileEvent"]) === "function" && _c || Object]),
        __metadata("design:returntype", void 0)
    ], FileManagerComponent.prototype, "onPreviewFile", null);
    __decorate([
        __WEBPACK_IMPORTED_MODULE_3__decorators_logFunction_decorator__["a" /* log */],
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__filesList_interface_IFileEvent__["IFileEvent"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__filesList_interface_IFileEvent__["IFileEvent"]) === "function" && _d || Object]),
        __metadata("design:returntype", void 0)
    ], FileManagerComponent.prototype, "onOpenCropFileEditor", null);
    __decorate([
        __WEBPACK_IMPORTED_MODULE_3__decorators_logFunction_decorator__["a" /* log */],
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_2__filesList_file_model__["a" /* FileModel */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__filesList_file_model__["a" /* FileModel */]) === "function" && _e || Object]),
        __metadata("design:returntype", void 0)
    ], FileManagerComponent.prototype, "onSelectFile", null);
    __decorate([
        __WEBPACK_IMPORTED_MODULE_3__decorators_logFunction_decorator__["a" /* log */],
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_8__toolbar_interface_IToolbarEvent__["IToolbarEvent"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_8__toolbar_interface_IToolbarEvent__["IToolbarEvent"]) === "function" && _f || Object]),
        __metadata("design:returntype", void 0)
    ], FileManagerComponent.prototype, "onMenuButtonClick", null);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('window:keydown', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], FileManagerComponent.prototype, "keyEvents", null);
    FileManagerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'ri-filemanager',
            providers: [__WEBPACK_IMPORTED_MODULE_1__rign_angular2_tree__["b" /* NodeService */], __WEBPACK_IMPORTED_MODULE_4_angular2_notifications__["NotificationsService"]],
            styles: [__webpack_require__("../../../../../src/main.less")],
            template: __webpack_require__("../../../../../src/filemanager.html")
        }),
        __metadata("design:paramtypes", [typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_10__ngrx_store__["h" /* Store */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_10__ngrx_store__["h" /* Store */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_1__rign_angular2_tree__["c" /* TreeActionsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__rign_angular2_tree__["c" /* TreeActionsService */]) === "function" && _h || Object, typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_1__rign_angular2_tree__["a" /* NodeDispatcherService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__rign_angular2_tree__["a" /* NodeDispatcherService */]) === "function" && _j || Object, typeof (_k = typeof __WEBPACK_IMPORTED_MODULE_13__store_fileManagerApi_service__["a" /* FileManagerApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_13__store_fileManagerApi_service__["a" /* FileManagerApiService */]) === "function" && _k || Object, typeof (_l = typeof __WEBPACK_IMPORTED_MODULE_4_angular2_notifications__["NotificationsService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_angular2_notifications__["NotificationsService"]) === "function" && _l || Object, typeof (_m = typeof __WEBPACK_IMPORTED_MODULE_9__configuration_fileManagerConfiguration_service__["a" /* FileManagerConfiguration */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_9__configuration_fileManagerConfiguration_service__["a" /* FileManagerConfiguration */]) === "function" && _m || Object, typeof (_o = typeof __WEBPACK_IMPORTED_MODULE_11__store_fileManagerDispatcher_service__["a" /* FileManagerDispatcherService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_11__store_fileManagerDispatcher_service__["a" /* FileManagerDispatcherService */]) === "function" && _o || Object, typeof (_p = typeof __WEBPACK_IMPORTED_MODULE_12__store_fileManagerEffects_service__["a" /* FileManagerEffectsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_12__store_fileManagerEffects_service__["a" /* FileManagerEffectsService */]) === "function" && _p || Object, typeof (_q = typeof __WEBPACK_IMPORTED_MODULE_14__services_FilemanagerNotifcations__["a" /* FilemanagerNotifcations */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_14__services_FilemanagerNotifcations__["a" /* FilemanagerNotifcations */]) === "function" && _q || Object, typeof (_r = typeof __WEBPACK_IMPORTED_MODULE_15__services_currentDirectoryFiles_service__["a" /* CurrentDirectoryFilesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_15__services_currentDirectoryFiles_service__["a" /* CurrentDirectoryFilesService */]) === "function" && _r || Object])
    ], FileManagerComponent);
    return FileManagerComponent;
    var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r;
}());

//# sourceMappingURL=/home/www/projects/angular2-filemanager/demo/src/filemanager.component.js.map

/***/ }),

/***/ "../../../../../src/filemanager.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"filemanager-container\">\n  <div class=\"fm-header\">\n    <ri-toolbar\n      #toolbar\n      [currentFolderId]=\"currentSelectedFolderId\"\n      (onAddFolderClick)=\"onAddFolder($event)\"\n      (onUpload)=\"onUpload($event)\"\n      (onMenuButtonClick)=\"onMenuButtonClick($event)\"\n    ></ri-toolbar>\n  </div>\n  <div class=\"fm-main-box\">\n    <ri-tree class=\"folders-box\" [treeModel]=\"treeModel\"></ri-tree>\n    <ri-files-list class=\"files-box\" [files]=\"filteredFiles$ | async\"\n                   [selectedFiles]=\"selectedFiles$ | async\"\n                (onPreviewFile)=\"onPreviewFile($event)\"\n                (onCropFile)=\"onOpenCropFileEditor($event)\"\n                (onSelectFile)=\"onSelectFile($event)\"\n    ></ri-files-list>\n  </div>\n  <div *ngIf=\"isPreviewMode || isCropMode\" class=\"backdrop\">\n    <div class=\"modal-view\">\n      <div class=\"modal-close\">\n        <i class=\"fa fa-2x fa-times\" (click)=\"closeModal()\"></i>\n      </div>\n      <ri-file-preview *ngIf=\"isPreviewMode\" [files]=\"filteredFiles$ | async\" [file]=\"currentSelectedFile\"></ri-file-preview>\n      <crop-image *ngIf=\"isCropMode\" [file]=\"currentSelectedFile\"></crop-image>\n    </div>\n  </div>\n  <simple-notifications [options]=\"notificationOptions\"></simple-notifications>\n</div>\n"

/***/ }),

/***/ "../../../../../src/filemanager.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FileManagerModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__rign_angular2_tree__ = __webpack_require__("../../../../@rign/angular2-tree/main.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_notifications__ = __webpack_require__("../../../../angular2-notifications/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_notifications___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_notifications__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__filemanager_component__ = __webpack_require__("../../../../../src/filemanager.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__toolbar_toolbar_component__ = __webpack_require__("../../../../../src/toolbar/toolbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__filesList_filesList_component__ = __webpack_require__("../../../../../src/filesList/filesList.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_ng2_img_cropper__ = __webpack_require__("../../../../ng2-img-cropper/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__crop_crop_component__ = __webpack_require__("../../../../../src/crop/crop.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__preview_preview_component__ = __webpack_require__("../../../../../src/preview/preview.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__dropdown_dropdown_component__ = __webpack_require__("../../../../../src/dropdown/dropdown.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_ng2_file_upload__ = __webpack_require__("../../../../ng2-file-upload/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_ng2_file_upload___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_ng2_file_upload__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__configuration_fileManagerConfiguration_service__ = __webpack_require__("../../../../../src/configuration/fileManagerConfiguration.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__filesList_fileManagerUploader_service__ = __webpack_require__("../../../../../src/filesList/fileManagerUploader.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__configuration_tree_service__ = __webpack_require__("../../../../../src/configuration/tree.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ngrx_effects__ = __webpack_require__("../../../../@ngrx/effects/@ngrx/effects.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__store_fileManagerEffects_service__ = __webpack_require__("../../../../../src/store/fileManagerEffects.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__store_fileManagerReducer__ = __webpack_require__("../../../../../src/store/fileManagerReducer.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__store_fileManagerActions_service__ = __webpack_require__("../../../../../src/store/fileManagerActions.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__ngrx_store_devtools__ = __webpack_require__("../../../../@ngrx/store-devtools/@ngrx/store-devtools.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__services_fileTypeFilter_service__ = __webpack_require__("../../../../../src/services/fileTypeFilter.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__services_searchFilter_service__ = __webpack_require__("../../../../../src/services/searchFilter.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__store_fileManagerDispatcher_service__ = __webpack_require__("../../../../../src/store/fileManagerDispatcher.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__toolbar_fileTypeFilter_fileTypeFilter_component__ = __webpack_require__("../../../../../src/toolbar/fileTypeFilter/fileTypeFilter.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__toolbar_searchFile_searchFile_component__ = __webpack_require__("../../../../../src/toolbar/searchFile/searchFile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__store_fileManagerApi_service__ = __webpack_require__("../../../../../src/store/fileManagerApi.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__services_imageDataConverter_service__ = __webpack_require__("../../../../../src/services/imageDataConverter.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__services_FilemanagerNotifcations__ = __webpack_require__("../../../../../src/services/FilemanagerNotifcations.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29_angular_confirmation_popover__ = __webpack_require__("../../../../angular-confirmation-popover/dist/esm/src/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__store_fileManagerBackendApi_service__ = __webpack_require__("../../../../../src/store/fileManagerBackendApi.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__services_currentDirectoryFiles_service__ = __webpack_require__("../../../../../src/services/currentDirectoryFiles.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__toolbar_selectionDropDown_selection_component__ = __webpack_require__("../../../../../src/toolbar/selectionDropDown/selection.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__filesList_file_file_component__ = __webpack_require__("../../../../../src/filesList/file/file.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34_ng2_translate__ = __webpack_require__("../../../../ng2-translate/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





































var FileManagerModule = /** @class */ (function () {
    function FileManagerModule(translate) {
        this.translate = translate;
        this.setTranslationForEN();
        this.setTranslationForPL();
        this.translate.use('en');
    }
    FileManagerModule_1 = FileManagerModule;
    FileManagerModule.forRoot = function (config, apiProvider) {
        if (apiProvider === void 0) { apiProvider = null; }
        return {
            ngModule: FileManagerModule_1,
            providers: [
                __WEBPACK_IMPORTED_MODULE_31__services_currentDirectoryFiles_service__["a" /* CurrentDirectoryFilesService */],
                __WEBPACK_IMPORTED_MODULE_19__store_fileManagerActions_service__["a" /* FileManagerActionsService */],
                __WEBPACK_IMPORTED_MODULE_26__store_fileManagerApi_service__["a" /* FileManagerApiService */],
                __WEBPACK_IMPORTED_MODULE_30__store_fileManagerBackendApi_service__["a" /* FileManagerBackendApiService */],
                __WEBPACK_IMPORTED_MODULE_12__configuration_fileManagerConfiguration_service__["a" /* FileManagerConfiguration */],
                __WEBPACK_IMPORTED_MODULE_23__store_fileManagerDispatcher_service__["a" /* FileManagerDispatcherService */],
                __WEBPACK_IMPORTED_MODULE_16__store_fileManagerEffects_service__["a" /* FileManagerEffectsService */],
                __WEBPACK_IMPORTED_MODULE_28__services_FilemanagerNotifcations__["a" /* FilemanagerNotifcations */],
                __WEBPACK_IMPORTED_MODULE_13__filesList_fileManagerUploader_service__["a" /* FileManagerUploader */],
                __WEBPACK_IMPORTED_MODULE_21__services_fileTypeFilter_service__["a" /* FileTypeFilterService */],
                __WEBPACK_IMPORTED_MODULE_27__services_imageDataConverter_service__["a" /* ImageDataConverter */],
                __WEBPACK_IMPORTED_MODULE_3_angular2_notifications__["NotificationsService"],
                __WEBPACK_IMPORTED_MODULE_22__services_searchFilter_service__["a" /* SearchFilterService */],
                __WEBPACK_IMPORTED_MODULE_14__configuration_tree_service__["a" /* TreeService */],
                { provide: 'fileManagerConfiguration', useValue: config },
                apiProvider ? apiProvider : __WEBPACK_IMPORTED_MODULE_26__store_fileManagerApi_service__["a" /* FileManagerApiService */]
            ]
        };
    };
    FileManagerModule.forChild = function (config, apiProvider) {
        if (apiProvider === void 0) { apiProvider = null; }
        return {
            ngModule: FileManagerModule_1,
            providers: [
                __WEBPACK_IMPORTED_MODULE_31__services_currentDirectoryFiles_service__["a" /* CurrentDirectoryFilesService */],
                __WEBPACK_IMPORTED_MODULE_19__store_fileManagerActions_service__["a" /* FileManagerActionsService */],
                __WEBPACK_IMPORTED_MODULE_26__store_fileManagerApi_service__["a" /* FileManagerApiService */],
                __WEBPACK_IMPORTED_MODULE_30__store_fileManagerBackendApi_service__["a" /* FileManagerBackendApiService */],
                __WEBPACK_IMPORTED_MODULE_12__configuration_fileManagerConfiguration_service__["a" /* FileManagerConfiguration */],
                __WEBPACK_IMPORTED_MODULE_23__store_fileManagerDispatcher_service__["a" /* FileManagerDispatcherService */],
                __WEBPACK_IMPORTED_MODULE_16__store_fileManagerEffects_service__["a" /* FileManagerEffectsService */],
                __WEBPACK_IMPORTED_MODULE_28__services_FilemanagerNotifcations__["a" /* FilemanagerNotifcations */],
                __WEBPACK_IMPORTED_MODULE_13__filesList_fileManagerUploader_service__["a" /* FileManagerUploader */],
                __WEBPACK_IMPORTED_MODULE_21__services_fileTypeFilter_service__["a" /* FileTypeFilterService */],
                __WEBPACK_IMPORTED_MODULE_27__services_imageDataConverter_service__["a" /* ImageDataConverter */],
                __WEBPACK_IMPORTED_MODULE_3_angular2_notifications__["NotificationsService"],
                __WEBPACK_IMPORTED_MODULE_22__services_searchFilter_service__["a" /* SearchFilterService */],
                __WEBPACK_IMPORTED_MODULE_14__configuration_tree_service__["a" /* TreeService */],
                { provide: 'fileManagerConfiguration', useValue: config },
                apiProvider ? apiProvider : __WEBPACK_IMPORTED_MODULE_26__store_fileManagerApi_service__["a" /* FileManagerApiService */]
            ]
        };
    };
    FileManagerModule.prototype.setTranslationForPL = function () {
        this.translate.setTranslation('pl', {
            RI_TREE_LBL_ADD_NODE: 'Dodaj',
            RI_TREE_LBL_EDIT_NODE: 'Edytuj',
            RI_TREE_LBL_REMOVE_NODE: 'Usuń',
            RI_TREE_LBL_DROP_ZONE: 'Upuść tutaj',
            RI_FM_BTN_LANDSCAPE: 'Poziomo',
            RI_FM_BTN_PORTRAIT: 'Pionowo',
            RI_FM_BTN_SAVE: 'Zapisz',
            RI_FM_LBL_DELETE_SELECTION: 'Usuń wybrane pliki',
            RI_FM_LBL_INVERSE_SELECTION: 'Odróć zaznaczenie',
            RI_FM_LBL_SEARCH_FOR: 'Szukaj...',
            RI_FM_LBL_SELECT_ALL: 'Zaznacz wszystkie',
            RI_FM_LBL_UNSELECT_ALL: 'Odznacz wszystkie',
        });
    };
    FileManagerModule.prototype.setTranslationForEN = function () {
        this.translate.setTranslation('en', {
            RI_TREE_LBL_ADD_NODE: 'Add data',
            RI_TREE_LBL_EDIT_NODE: 'Edit data',
            RI_TREE_LBL_REMOVE_NODE: 'Delete data',
            RI_TREE_LBL_DROP_ZONE: 'Drop here to move data to root level',
            RI_FM_BTN_LANDSCAPE: 'Landscape',
            RI_FM_BTN_PORTRAIT: 'Portrait',
            RI_FM_BTN_SAVE: 'Save',
            RI_FM_LBL_DELETE_SELECTION: 'Delete selection',
            RI_FM_LBL_INVERSE_SELECTION: 'Inverse selection',
            RI_FM_LBL_SEARCH_FOR: 'Search for...',
            RI_FM_LBL_SELECT_ALL: 'Select all',
            RI_FM_LBL_UNSELECT_ALL: 'Unselect all',
        });
    };
    FileManagerModule = FileManagerModule_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [
                __WEBPACK_IMPORTED_MODULE_36__angular_common__["CommonModule"],
                __WEBPACK_IMPORTED_MODULE_29_angular_confirmation_popover__["a" /* ConfirmationPopoverModule */].forRoot(),
                __WEBPACK_IMPORTED_MODULE_15__ngrx_effects__["c" /* EffectsModule */].forFeature([__WEBPACK_IMPORTED_MODULE_16__store_fileManagerEffects_service__["a" /* FileManagerEffectsService */]]),
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_11_ng2_file_upload__["FileUploadModule"],
                __WEBPACK_IMPORTED_MODULE_35__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_3_angular2_notifications__["SimpleNotificationsModule"],
                __WEBPACK_IMPORTED_MODULE_17__ngrx_store__["i" /* StoreModule */].forFeature('files', __WEBPACK_IMPORTED_MODULE_18__store_fileManagerReducer__["a" /* fileManagerReducer */]),
                __WEBPACK_IMPORTED_MODULE_20__ngrx_store_devtools__["a" /* StoreDevtoolsModule */].instrument({}),
                __WEBPACK_IMPORTED_MODULE_34_ng2_translate__["a" /* TranslateModule */],
                __WEBPACK_IMPORTED_MODULE_2__rign_angular2_tree__["f" /* TreeModule */]
            ],
            declarations: [
                __WEBPACK_IMPORTED_MODULE_4__filemanager_component__["a" /* FileManagerComponent */],
                __WEBPACK_IMPORTED_MODULE_33__filesList_file_file_component__["a" /* FileComponent */],
                __WEBPACK_IMPORTED_MODULE_24__toolbar_fileTypeFilter_fileTypeFilter_component__["a" /* FileTypeFilterComponent */],
                __WEBPACK_IMPORTED_MODULE_5__toolbar_toolbar_component__["a" /* ToolbarComponent */],
                __WEBPACK_IMPORTED_MODULE_6__filesList_filesList_component__["a" /* FilesListComponent */],
                __WEBPACK_IMPORTED_MODULE_10__dropdown_dropdown_component__["a" /* DropdownComponent */],
                __WEBPACK_IMPORTED_MODULE_9__preview_preview_component__["a" /* PreviewComponent */],
                __WEBPACK_IMPORTED_MODULE_8__crop_crop_component__["a" /* CropComponent */],
                __WEBPACK_IMPORTED_MODULE_7_ng2_img_cropper__["a" /* ImageCropperComponent */],
                __WEBPACK_IMPORTED_MODULE_25__toolbar_searchFile_searchFile_component__["a" /* SearchFileComponent */],
                __WEBPACK_IMPORTED_MODULE_32__toolbar_selectionDropDown_selection_component__["a" /* SelectionComponent */],
            ],
            entryComponents: [__WEBPACK_IMPORTED_MODULE_7_ng2_img_cropper__["a" /* ImageCropperComponent */]],
            exports: [__WEBPACK_IMPORTED_MODULE_4__filemanager_component__["a" /* FileManagerComponent */]],
            schemas: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["CUSTOM_ELEMENTS_SCHEMA"]]
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_34_ng2_translate__["b" /* TranslateService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_34_ng2_translate__["b" /* TranslateService */]) === "function" && _a || Object])
    ], FileManagerModule);
    return FileManagerModule;
    var FileManagerModule_1, _a;
}());

//# sourceMappingURL=/home/www/projects/angular2-filemanager/demo/src/filemanager.module.js.map

/***/ }),

/***/ "../../../../../src/filesList/file.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FileModel; });
var FileModel = /** @class */ (function () {
    function FileModel(data) {
        this._iconsFolder = FileModel.smallIconsFolder;
        this.selected = false;
        this.fromJSON(data);
    }
    Object.defineProperty(FileModel.prototype, "name", {
        get: function () {
            return this._name;
        },
        set: function (name) {
            this._name = name;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FileModel.prototype, "thumbnailUrl", {
        get: function () {
            return this.isImage() ? this._orgData.thumbnailUrl : "" + FileModel.smallIconsFolder + this.getFileExt() + ".png";
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(FileModel.prototype, "url", {
        get: function () {
            return this.isImage() ? this._orgData.url : "" + FileModel.bigIconsFolder + this.getFileExt() + ".png";
        },
        enumerable: true,
        configurable: true
    });
    FileModel.prototype.fromJSON = function (data) {
        this._orgData = data;
        this.name = data.name;
        this.selected = data.selected || false;
    };
    FileModel.prototype.toJSON = function () {
        return this._orgData;
    };
    FileModel.prototype.getId = function () {
        return this._orgData.id;
    };
    FileModel.prototype.getHeight = function () {
        return this._orgData.height || 0;
    };
    FileModel.prototype.getFileExt = function () {
        return this.name.split('.').pop();
    };
    FileModel.prototype.getMime = function () {
        return this._orgData.type;
    };
    FileModel.prototype.getWidth = function () {
        return this._orgData.width || 0;
    };
    FileModel.prototype.isImage = function () {
        return ['image/jpg', 'image/jpeg', 'image/png', 'image/gif', 'image/png'].indexOf(this.getMime()) > -1;
    };
    FileModel.prototype.getSelectData = function () {
        return {
            id: this.getId(),
            name: this.name,
            url: this.url,
            width: this.getWidth(),
            height: this.getHeight(),
            mime: this.getMime()
        };
    };
    FileModel.smallIconsFolder = '/icons/128px/';
    FileModel.bigIconsFolder = '/icons/512px/';
    return FileModel;
}());

//# sourceMappingURL=/home/www/projects/angular2-filemanager/demo/src/file.model.js.map

/***/ }),

/***/ "../../../../../src/filesList/file/file.component.html":
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"configuration.isMultiSelection\" class=\"file-selection-input\">\n  <i class=\"fa fa-2x checked fa-check-square-o\" (click)=\"unSelectFile()\"></i>\n  <i class=\"fa fa-2x unchecked fa-square-o\" (click)=\"selectFile()\"></i>\n</div>\n<div class=\"img-rounded file-img\" [ngClass]=\"{'file-img-symbol': !file.isImage()}\"\n     [style.background-image]=\"'url(' + file.thumbnailUrl + ')'\"></div>\n<span class=\"file-name\">{{file.name}}</span>\n<div class=\"file-menu\">\n  <button mwlConfirmationPopover [title]=\"removeTitle\" [message]=\"getRemoveMessage(file)\" [appendToBody]=\"true\"\n          [confirmText]=\"'Yes'\" [cancelText]=\"'No'\" placement=\"bottom\" (confirm)=\"deleteFile(file)\"\n          class=\"btn btn-danger btn-icon\">\n    <i class=\"fa fa-trash\"></i>\n  </button>\n  <button (click)=\"openPreview(file)\" class=\"btn btn-default btn-icon\">\n    <i class=\"fa fa-search\"></i>\n  </button>\n  <button (click)=\"openCrop(file)\" class=\"btn btn-default btn-icon\">\n    <i class=\"fa fa-crop\"></i>\n  </button>\n</div>\n"

/***/ }),

/***/ "../../../../../src/filesList/file/file.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__interface_IFileModel__ = __webpack_require__("../../../../../src/filesList/interface/IFileModel.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__interface_IFileModel___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__interface_IFileModel__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__configuration_fileManagerConfiguration_service__ = __webpack_require__("../../../../../src/configuration/fileManagerConfiguration.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__store_fileManagerDispatcher_service__ = __webpack_require__("../../../../../src/store/fileManagerDispatcher.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FileComponent = /** @class */ (function () {
    function FileComponent(configuration, fileManagerDispatcher) {
        this.configuration = configuration;
        this.fileManagerDispatcher = fileManagerDispatcher;
        this.onPreviewFile = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.onCropFile = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.onSelectFile = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    /**
     * Fired when clicked on button "delete file"
     *
     * @param file
     */
    FileComponent.prototype.deleteFile = function (file) {
        this.fileManagerDispatcher.deleteFile(file);
    };
    FileComponent.prototype.getRemoveMessage = function (file) {
        return 'You are try to delete <b>' + file.name + '</b>. Are you sure?';
    };
    FileComponent.prototype.openPreview = function () {
        var fileEvent = {
            eventName: 'onPreviewFile',
            file: this.file
        };
        this.onPreviewFile.emit(fileEvent);
    };
    FileComponent.prototype.openCrop = function () {
        var fileEvent = {
            eventName: 'onCropFile',
            file: this.file
        };
        this.onCropFile.emit(fileEvent);
    };
    FileComponent.prototype.selectFile = function () {
        this.fileManagerDispatcher.selectFile(this.file);
    };
    FileComponent.prototype.unSelectFile = function () {
        this.fileManagerDispatcher.unSelectFile(this.file);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__interface_IFileModel__["IFileModel"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__interface_IFileModel__["IFileModel"]) === "function" && _a || Object)
    ], FileComponent.prototype, "file", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], FileComponent.prototype, "onPreviewFile", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], FileComponent.prototype, "onCropFile", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], FileComponent.prototype, "onSelectFile", void 0);
    FileComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'ri-file-component',
            template: __webpack_require__("../../../../../src/filesList/file/file.component.html"),
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__configuration_fileManagerConfiguration_service__["a" /* FileManagerConfiguration */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__configuration_fileManagerConfiguration_service__["a" /* FileManagerConfiguration */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3__store_fileManagerDispatcher_service__["a" /* FileManagerDispatcherService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__store_fileManagerDispatcher_service__["a" /* FileManagerDispatcherService */]) === "function" && _c || Object])
    ], FileComponent);
    return FileComponent;
    var _a, _b, _c;
}());

//# sourceMappingURL=/home/www/projects/angular2-filemanager/demo/src/file.component.js.map

/***/ }),

/***/ "../../../../../src/filesList/fileManagerUploader.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FileManagerUploader; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_extendedFileUplaoder_service__ = __webpack_require__("../../../../../src/services/extendedFileUplaoder.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__configuration_IFileManagerConfiguration__ = __webpack_require__("../../../../../src/configuration/IFileManagerConfiguration.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__configuration_IFileManagerConfiguration___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__configuration_IFileManagerConfiguration__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_FilemanagerNotifcations__ = __webpack_require__("../../../../../src/services/FilemanagerNotifcations.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};




var FileManagerUploader = /** @class */ (function () {
    function FileManagerUploader(configuration, filemanagerNotification) {
        var options = {
            allowedMimeType: configuration.mimeTypes,
            url: configuration.urls.filesUrl,
            maxFileSize: configuration.maxFileSize
        };
        this.uploader = new __WEBPACK_IMPORTED_MODULE_1__services_extendedFileUplaoder_service__["a" /* ExtendedFileUploader */](options, filemanagerNotification);
    }
    FileManagerUploader.prototype.clear = function () {
        this.uploader.authToken = null;
        this.uploader.setOptions(this.getDefaultOptions());
    };
    FileManagerUploader.prototype.getDefaultOptions = function () {
        var options = {};
        options['removeAfterUpload'] = true;
        options['autoUpload'] = true;
        options['method'] = 'POST';
        return options;
    };
    FileManagerUploader.prototype.setAuthorizationToken = function (token) {
        this.uploader.authToken = token;
    };
    FileManagerUploader.prototype.setDirectoryId = function (directoryId) {
        var options = this.getDefaultOptions();
        options['headers'] = [{ name: 'folderId', value: directoryId.toString() }];
        this.uploader.setOptions(options);
        return this;
    };
    FileManagerUploader = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __param(0, Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])('fileManagerConfiguration')),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__configuration_IFileManagerConfiguration__["IFileManagerConfiguration"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__configuration_IFileManagerConfiguration__["IFileManagerConfiguration"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_FilemanagerNotifcations__["a" /* FilemanagerNotifcations */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_FilemanagerNotifcations__["a" /* FilemanagerNotifcations */]) === "function" && _b || Object])
    ], FileManagerUploader);
    return FileManagerUploader;
    var _a, _b;
}());

//# sourceMappingURL=/home/www/projects/angular2-filemanager/demo/src/fileManagerUploader.service.js.map

/***/ }),

/***/ "../../../../../src/filesList/files-list.less":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".files-list .file {\n  display: inline-block;\n  position: relative;\n  cursor: pointer;\n  text-align: center;\n  width: 140px;\n  height: 110px;\n  padding: 5px;\n  border: 1px solid #cccccc;\n  background-color: #eee;\n  border-radius: 10px;\n  margin: 0 0 20px 20px;\n}\n.files-list .file .file-img {\n  width: 128px;\n  height: 98px;\n  background-size: cover;\n  background-repeat: no-repeat;\n}\n.files-list .file .file-img.file-img-symbol {\n  background-size: contain;\n  background-position-x: 50%;\n}\n.files-list .file .file-name {\n  display: none;\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  text-align: center;\n  background-color: rgba(238, 238, 238, 0.5);\n}\n.files-list .file .file-menu {\n  display: none;\n  position: absolute;\n  top: 30%;\n  left: 0;\n  right: 0;\n  text-align: center;\n}\n.files-list .file .file-selection-input {\n  display: none;\n  position: absolute;\n  top: 3px;\n  left: 3px;\n  cursor: pointer;\n  z-index: 10;\n}\n.files-list .file .file-selection-input .checked {\n  display: none;\n}\n.files-list .file .file-selection-input .unchecked {\n  display: block;\n}\n.files-list .file:hover .file-img {\n  opacity: 0.3;\n}\n.files-list .file:hover .file-name,\n.files-list .file:hover .file-menu,\n.files-list .file:hover .file-selection-input {\n  display: block;\n}\n.files-list .file.selected {\n  border-color: #fff33a;\n  background-color: rgba(255, 243, 58, 0.5);\n}\n.files-list .file.selected .file-name {\n  background-color: rgba(255, 243, 58, 0.5);\n}\n.files-list .file.selected .file-menu,\n.files-list .file.selected .file-selection-input {\n  display: none;\n}\n.files-list .file.selected .file-selection-input .checked {\n  display: block;\n}\n.files-list .file.selected .file-selection-input .unchecked {\n  display: none;\n}\n.files-list .file.selected:hover .file-selection-input {\n  display: block;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/filesList/files.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"files-list\">\n  <div class=\"file\" *ngFor=\"let file of files\" [ngClass]=\"{'selected': isSelected(file)}\"  riDraggable [data]=\"file.toJSON()\" [sourceType]=\"'FILE'\" [dragZone]=\"'tree'\">\n    <ri-file-component [file]=\"file\" (onPreviewFile)=\"openPreview($event)\" (onCropFile)=\"openCrop($event)\"></ri-file-component>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/filesList/filesList.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilesListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__configuration_fileManagerConfiguration_service__ = __webpack_require__("../../../../../src/configuration/fileManagerConfiguration.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__store_fileManagerDispatcher_service__ = __webpack_require__("../../../../../src/store/fileManagerDispatcher.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_notifications__ = __webpack_require__("../../../../angular2-notifications/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_notifications___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_notifications__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__store_fileManagerEffects_service__ = __webpack_require__("../../../../../src/store/fileManagerEffects.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var FilesListComponent = /** @class */ (function () {
    function FilesListComponent(configuration, fileManagerDispatcher, notifications, fileManagerEffects) {
        this.configuration = configuration;
        this.fileManagerDispatcher = fileManagerDispatcher;
        this.onPreviewFile = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.onCropFile = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.onSelectFile = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.removeTitle = 'Remove file';
        fileManagerEffects.deleteFileSuccess$
            .subscribe(function (action) {
            notifications.success('File delete', action.payload.file.name + " has been deleted");
        });
    }
    /**
     * Fired when clicked on button "delete file"
     *
     * @param file
     */
    FilesListComponent.prototype.deleteFile = function (file) {
        this.fileManagerDispatcher.deleteFile(file);
    };
    FilesListComponent.prototype.getRemoveMessage = function (file) {
        return 'You are try to delete <b>' + file.name + '</b>. Are you sure?';
    };
    FilesListComponent.prototype.openPreview = function (fileEvent) {
        this.onPreviewFile.emit(fileEvent);
    };
    FilesListComponent.prototype.openCrop = function (fileEvent) {
        this.onCropFile.emit(fileEvent);
    };
    FilesListComponent.prototype.toggleSelection = function (file) {
        console.log(file);
        if (file.selected) {
            this.fileManagerDispatcher.unSelectFile(file);
        }
        else {
            this.fileManagerDispatcher.selectFile(file);
        }
    };
    FilesListComponent.prototype.isSelected = function (file) {
        return this.selectedFiles.indexOf(file.getId().toString()) > -1;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Array)
    ], FilesListComponent.prototype, "files", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Array)
    ], FilesListComponent.prototype, "selectedFiles", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], FilesListComponent.prototype, "onPreviewFile", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], FilesListComponent.prototype, "onCropFile", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], FilesListComponent.prototype, "onSelectFile", void 0);
    FilesListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'ri-files-list',
            template: __webpack_require__("../../../../../src/filesList/files.html"),
            styles: [__webpack_require__("../../../../../src/filesList/files-list.less")],
            changeDetection: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ChangeDetectionStrategy"].OnPush,
            encapsulation: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewEncapsulation"].None
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__configuration_fileManagerConfiguration_service__["a" /* FileManagerConfiguration */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__configuration_fileManagerConfiguration_service__["a" /* FileManagerConfiguration */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__store_fileManagerDispatcher_service__["a" /* FileManagerDispatcherService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__store_fileManagerDispatcher_service__["a" /* FileManagerDispatcherService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_notifications__["NotificationsService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angular2_notifications__["NotificationsService"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__store_fileManagerEffects_service__["a" /* FileManagerEffectsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__store_fileManagerEffects_service__["a" /* FileManagerEffectsService */]) === "function" && _d || Object])
    ], FilesListComponent);
    return FilesListComponent;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=/home/www/projects/angular2-filemanager/demo/src/filesList.component.js.map

/***/ }),

/***/ "../../../../../src/filesList/interface/IFileEvent.ts":
/***/ (function(module, exports) {

//# sourceMappingURL=/home/www/projects/angular2-filemanager/demo/src/IFileEvent.js.map

/***/ }),

/***/ "../../../../../src/filesList/interface/IFileModel.ts":
/***/ (function(module, exports) {

//# sourceMappingURL=/home/www/projects/angular2-filemanager/demo/src/IFileModel.js.map

/***/ }),

/***/ "../../../../../src/filesList/interface/IOuterFile.ts":
/***/ (function(module, exports) {

//# sourceMappingURL=/home/www/projects/angular2-filemanager/demo/src/IOuterFile.js.map

/***/ }),

/***/ "../../../../../src/filesList/interface/ISelectFile.ts":
/***/ (function(module, exports) {

//# sourceMappingURL=/home/www/projects/angular2-filemanager/demo/src/ISelectFile.js.map

/***/ }),

/***/ "../../../../../src/main.less":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".filemanager-container {\n  width: 990px;\n  height: 700px;\n}\n.filemanager-container .tree .dropdown {\n  position: relative;\n}\n.filemanager-container .tree .dropdown-menu {\n  position: fixed !important;\n}\n.fm-main-box {\n  position: relative;\n  height: 100%;\n}\n.fm-main-box .folders-box {\n  display: block;\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  width: 300px;\n  overflow: hidden;\n  overflow-y: auto;\n}\n.fm-main-box .files-box {\n  display: block;\n  position: absolute;\n  left: 300px;\n  top: 0;\n  bottom: 0;\n  overflow: hidden;\n  overflow-y: auto;\n}\n.backdrop {\n  position: fixed;\n  left: 0;\n  right: 0;\n  top: 0;\n  bottom: 0;\n  background-color: rgba(0, 0, 0, 0.7);\n  z-index: 1000;\n}\n.modal-view {\n  margin: 50px auto;\n  max-width: 600px;\n}\n.modal-view .modal-close {\n  text-align: right;\n  margin: 5px 0;\n  color: #fff;\n}\n.modal-view .modal-close .fa {\n  cursor: pointer;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/preview/preview.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PreviewComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__filesList_interface_IFileModel__ = __webpack_require__("../../../../../src/filesList/interface/IFileModel.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__filesList_interface_IFileModel___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__filesList_interface_IFileModel__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PreviewComponent = /** @class */ (function () {
    function PreviewComponent() {
        /**
         * Current index
         * @type {number}
         */
        this.currentIndex = 0;
        this.length = 0;
    }
    PreviewComponent.prototype.ngOnChanges = function () {
        var _this = this;
        this.length = this.files.length;
        var selectedFiles = this.files
            .filter(function (file) { return file.getId() === _this.file.getId(); });
        this.currentIndex = selectedFiles.length === 1 ? this.files.indexOf(selectedFiles[0]) : -1;
    };
    PreviewComponent.prototype.next = function () {
        if (this.currentIndex < this.length - 1) {
            this.currentIndex++;
        }
    };
    PreviewComponent.prototype.prev = function () {
        if (this.currentIndex > 0) {
            this.currentIndex--;
        }
    };
    PreviewComponent.prototype.keyEvent = function (event) {
        if (event.keyCode === 37 || event.keyCode === 74) {
            this.prev();
        }
        if (event.keyCode === 39 || event.keyCode === 75) {
            this.next();
        }
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Array)
    ], PreviewComponent.prototype, "files", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__filesList_interface_IFileModel__["IFileModel"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__filesList_interface_IFileModel__["IFileModel"]) === "function" && _a || Object)
    ], PreviewComponent.prototype, "file", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('window:keydown', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], PreviewComponent.prototype, "keyEvent", null);
    PreviewComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'ri-file-preview',
            template: __webpack_require__("../../../../../src/preview/preview.html")
        })
    ], PreviewComponent);
    return PreviewComponent;
    var _a;
}());

//# sourceMappingURL=/home/www/projects/angular2-filemanager/demo/src/preview.component.js.map

/***/ }),

/***/ "../../../../../src/preview/preview.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"filemanager-preview\">\n  <div class=\"carousel slide\">\n    <div class=\"carousel-inner\" role=\"listbox\">\n      <div class=\"item\" *ngFor=\"let file of files; let i = index;\" [ngClass]=\"{'active': i == currentIndex}\">\n        <img class=\"img-rounded\" src=\"{{file.url}}\" alt=\"{{file.name}}\" style=\"margin: 0 auto;\">\n        <div class=\"carousel-caption\">{{file.name}}</div>\n      </div>\n    </div>\n    <a class=\"left carousel-control\" role=\"button\" (click)=\"prev()\" *ngIf=\"currentIndex != 0\">\n      <span class=\"glyphicon glyphicon-chevron-left\" aria-hidden=\"true\"></span>\n    </a>\n    <a class=\"right carousel-control\"role=\"button\" (click)=\"next()\" *ngIf=\"currentIndex + 1 < length\">\n      <span class=\"glyphicon glyphicon-chevron-right\" aria-hidden=\"true\"></span>\n    </a>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/services/FilemanagerNotifcations.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilemanagerNotifcations; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Subject__ = __webpack_require__("../../../../rxjs/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_Subject__);

var FilemanagerNotifcations = /** @class */ (function () {
    function FilemanagerNotifcations() {
        this.notifciation$ = new __WEBPACK_IMPORTED_MODULE_0_rxjs_Subject__["Subject"]();
    }
    FilemanagerNotifcations.prototype.sendNotification = function (notification) {
        this.notifciation$.next(notification);
    };
    FilemanagerNotifcations.prototype.getNotificationStream = function () {
        return this.notifciation$;
    };
    return FilemanagerNotifcations;
}());

//# sourceMappingURL=/home/www/projects/angular2-filemanager/demo/src/FilemanagerNotifcations.js.map

/***/ }),

/***/ "../../../../../src/services/currentDirectoryFiles.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CurrentDirectoryFilesService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__searchFilter_service__ = __webpack_require__("../../../../../src/services/searchFilter.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__fileTypeFilter_service__ = __webpack_require__("../../../../../src/services/fileTypeFilter.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__filesList_file_model__ = __webpack_require__("../../../../../src/filesList/file.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__store_fileManagerReducer__ = __webpack_require__("../../../../../src/store/fileManagerReducer.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_operators__ = __webpack_require__("../../../../rxjs/operators.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_operators___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_operators__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_observable_combineLatest__ = __webpack_require__("../../../../rxjs/add/observable/combineLatest.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_observable_combineLatest___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_rxjs_add_observable_combineLatest__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var CurrentDirectoryFilesService = /** @class */ (function () {
    /**
     * @param {Store<ITreeState>} store
     * @param {FileTypeFilterService} fileTypeFilter
     * @param {SearchFilterService} searchFilterService
     */
    function CurrentDirectoryFilesService(store, fileTypeFilter, searchFilterService) {
        this.store = store;
        this.fileTypeFilter = fileTypeFilter;
        this.searchFilterService = searchFilterService;
        var store$ = this.store.select(__WEBPACK_IMPORTED_MODULE_5__store_fileManagerReducer__["b" /* filemanagerStateSelector */]);
        var observable$ = store$;
        this.entities$ = observable$
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_7_rxjs_operators__["map"])(function (state) { return state.entities; }), Object(__WEBPACK_IMPORTED_MODULE_7_rxjs_operators__["distinctUntilChanged"])());
        this.currentDirectoryFileIds$ = observable$
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_7_rxjs_operators__["map"])(function (state) { return state.files; }), Object(__WEBPACK_IMPORTED_MODULE_7_rxjs_operators__["distinctUntilChanged"])());
        this.selectedFiles$ = store$
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_7_rxjs_operators__["map"])(function (state) { return state.selectedFiles; }));
        this.files$ = this.getFilesStream();
        this.filteredFiles$ = this.getCurrentDirectoryFilesStream();
    }
    /**
     * Return stream of files
     *
     * @returns {Observable<FileModel[]>}
     */
    CurrentDirectoryFilesService.prototype.getFilesStream = function () {
        return this.currentDirectoryFileIds$
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_7_rxjs_operators__["withLatestFrom"])(this.entities$), Object(__WEBPACK_IMPORTED_MODULE_7_rxjs_operators__["map"])(function (ar) {
            return {
                entities: ar[1],
                files: ar[0]
            };
        }), Object(__WEBPACK_IMPORTED_MODULE_7_rxjs_operators__["map"])(function (state) {
            return Object(__WEBPACK_IMPORTED_MODULE_5__store_fileManagerReducer__["c" /* getAll */])(state)
                .map(function (file) {
                return new __WEBPACK_IMPORTED_MODULE_4__filesList_file_model__["a" /* FileModel */](file);
            });
        }));
    };
    /**
     * Return stream of current directory filtered files
     *
     * @returns {Observable<FileModel[]>}
     */
    CurrentDirectoryFilesService.prototype.getCurrentDirectoryFilesStream = function () {
        return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"].combineLatest(this.files$, this.fileTypeFilter.filter$, this.searchFilterService.filter$)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_7_rxjs_operators__["map"])(function (data) {
            var files = data[0];
            var fileTypeFilter = data[1];
            var search = data[2].toLocaleLowerCase();
            if (search !== '') {
                files = files.filter(function (file) {
                    return file.name.toLocaleLowerCase().indexOf(search) > -1;
                });
            }
            if (fileTypeFilter && fileTypeFilter.mimes.length > 0) {
                files = files.filter(function (file) {
                    return fileTypeFilter.mimes.indexOf(file.getMime()) > -1;
                });
            }
            return files;
        }));
    };
    CurrentDirectoryFilesService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_6__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__ngrx_store__["h" /* Store */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__ngrx_store__["h" /* Store */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__fileTypeFilter_service__["a" /* FileTypeFilterService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__fileTypeFilter_service__["a" /* FileTypeFilterService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_0__searchFilter_service__["a" /* SearchFilterService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__searchFilter_service__["a" /* SearchFilterService */]) === "function" && _c || Object])
    ], CurrentDirectoryFilesService);
    return CurrentDirectoryFilesService;
    var _a, _b, _c;
}());

//# sourceMappingURL=/home/www/projects/angular2-filemanager/demo/src/currentDirectoryFiles.service.js.map

/***/ }),

/***/ "../../../../../src/services/extendedFileUplaoder.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExtendedFileUploader; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ng2_file_upload__ = __webpack_require__("../../../../ng2-file-upload/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ng2_file_upload___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_ng2_file_upload__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__imageDataConverter_service__ = __webpack_require__("../../../../../src/services/imageDataConverter.service.ts");
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();


var ExtendedFileUploader = /** @class */ (function (_super) {
    __extends(ExtendedFileUploader, _super);
    function ExtendedFileUploader(options, filemanagerNotification) {
        var _this = _super.call(this, options) || this;
        _this.filemanagerNotification = filemanagerNotification;
        return _this;
    }
    ExtendedFileUploader.prototype.onWhenAddingFileFailed = function (item, filter, options) {
        var notification = {
            type: 'alert',
            title: 'Add file to queue',
            message: "File not add to queue"
        };
        if (filter.name === 'fileSize') {
            notification.message = "File size is too large - max size  is " + options.maxFileSize / 1024 + " KB";
        }
        else {
            notification.message = "File mime type \"" + item.type + "\" is not allowed";
        }
        this.filemanagerNotification.sendNotification(notification);
    };
    ExtendedFileUploader.prototype.uploadItem = function (value) {
        var _this = this;
        if (this.options.url) {
            _super.prototype.uploadItem.call(this, value);
        }
        else {
            var imageDataConverter = new __WEBPACK_IMPORTED_MODULE_1__imageDataConverter_service__["a" /* ImageDataConverter */]();
            this._onProgressItem(value, 0);
            if (this.isUploading) {
                return;
            }
            this.isUploading = true;
            var header = this.options.headers.find(function (object) { return object.name === 'folderId'; });
            this._onProgressItem(value, 50);
            imageDataConverter.getProperties(value._file, header.value)
                .subscribe(function (file) {
                _this.isUploading = false;
                _this._onProgressItem(value, 100);
                _this._onCompleteItem(value, JSON.stringify(file), 200, {});
            });
        }
    };
    return ExtendedFileUploader;
}(__WEBPACK_IMPORTED_MODULE_0_ng2_file_upload__["FileUploader"]));

//# sourceMappingURL=/home/www/projects/angular2-filemanager/demo/src/extendedFileUplaoder.service.js.map

/***/ }),

/***/ "../../../../../src/services/fileTypeFilter.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FileTypeFilterService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__ = __webpack_require__("../../../../rxjs/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var FileTypeFilterService = /** @class */ (function () {
    function FileTypeFilterService() {
        /**
         * File type filter
         * @type {BehaviorSubject}
         */
        this.filter$ = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["BehaviorSubject"](null);
    }
    FileTypeFilterService.prototype.getValue = function () {
        return this.filter$.getValue();
    };
    FileTypeFilterService.prototype.setValue = function (value) {
        this.filter$.next(value);
    };
    FileTypeFilterService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
    ], FileTypeFilterService);
    return FileTypeFilterService;
}());

//# sourceMappingURL=/home/www/projects/angular2-filemanager/demo/src/fileTypeFilter.service.js.map

/***/ }),

/***/ "../../../../../src/services/imageDataConverter.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImageDataConverter; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_uuid__ = __webpack_require__("../../../../angular2-uuid/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_uuid___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angular2_uuid__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operators__ = __webpack_require__("../../../../rxjs/operators.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operators___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_fromEvent__ = __webpack_require__("../../../../rxjs/add/observable/fromEvent.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_fromEvent___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_observable_fromEvent__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_of__ = __webpack_require__("../../../../rxjs/add/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_of__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var ImageDataConverter = /** @class */ (function () {
    function ImageDataConverter() {
    }
    /**
     * @param {File} file
     * @param {string} folderId
     * @returns {Observable<IFileDataProperties>}
     */
    ImageDataConverter.prototype.getProperties = function (file, folderId) {
        var _this = this;
        var properties = {
            id: __WEBPACK_IMPORTED_MODULE_1_angular2_uuid__["UUID"].UUID(),
            folderId: folderId,
            name: file.name,
            size: file.size,
            type: file.type,
            data: ''
        };
        var reader = this.getBase64FromFile(file);
        return reader
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["concatMap"])(function (data) {
            properties.data = data;
            if (properties.type.indexOf('image') === 0) {
                return _this.getImageDimensions(data);
            }
            else {
                return __WEBPACK_IMPORTED_MODULE_0_rxjs_Observable__["Observable"].of({ width: 0, height: 0 });
            }
        }), Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["map"])(function (dimensions) {
            properties.width = dimensions.width;
            properties.height = dimensions.height;
            return properties;
        }));
    };
    /**
     * Create observable which return image as base64 data
     *
     * @param file
     * @return Observable<string>
     */
    ImageDataConverter.prototype.getBase64FromFile = function (file) {
        var reader = new FileReader();
        reader.readAsDataURL(file);
        return __WEBPACK_IMPORTED_MODULE_0_rxjs_Observable__["Observable"]
            .fromEvent(reader, 'load')
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["map"])(function () {
            return reader.result;
        }));
    };
    ;
    /**
     * Create observable which return dimensions of the image
     *
     * @param data
     * @returns {Observable<IImageDimensions>}
     */
    ImageDataConverter.prototype.getImageDimensions = function (data) {
        var image = new Image();
        image.src = data;
        image.style.display = 'none';
        var loadImage = __WEBPACK_IMPORTED_MODULE_0_rxjs_Observable__["Observable"].fromEvent(image, 'load')
            .map(function () {
            return {
                width: image.naturalWidth,
                height: image.naturalHeight
            };
        });
        document.body.appendChild(image);
        return loadImage;
    };
    ImageDataConverter = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Injectable"])()
    ], ImageDataConverter);
    return ImageDataConverter;
}());

//# sourceMappingURL=/home/www/projects/angular2-filemanager/demo/src/imageDataConverter.service.js.map

/***/ }),

/***/ "../../../../../src/services/searchFilter.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchFilterService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__ = __webpack_require__("../../../../rxjs/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var SearchFilterService = /** @class */ (function () {
    function SearchFilterService() {
        /**
         * File type filter
         * @type {BehaviorSubject}
         */
        this.filter$ = new __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__["BehaviorSubject"]('');
    }
    SearchFilterService.prototype.getValue = function () {
        return this.filter$.getValue();
    };
    SearchFilterService.prototype.setValue = function (value) {
        this.filter$.next(value);
    };
    SearchFilterService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
    ], SearchFilterService);
    return SearchFilterService;
}());

//# sourceMappingURL=/home/www/projects/angular2-filemanager/demo/src/searchFilter.service.js.map

/***/ }),

/***/ "../../../../../src/store/IFileManagerApi.ts":
/***/ (function(module, exports) {

//# sourceMappingURL=/home/www/projects/angular2-filemanager/demo/src/IFileManagerApi.js.map

/***/ }),

/***/ "../../../../../src/store/fileManagerActions.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FileManagerActionsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FileManagerActionsService = /** @class */ (function () {
    function FileManagerActionsService() {
    }
    FileManagerActionsService_1 = FileManagerActionsService;
    FileManagerActionsService.prototype.cropFile = function (file, bounds) {
        return {
            type: FileManagerActionsService_1.FILEMANAGER_CROP_FILE,
            payload: {
                file: file,
                bounds: bounds
            }
        };
    };
    FileManagerActionsService.prototype.cropFileSuccess = function (file) {
        return {
            type: FileManagerActionsService_1.FILEMANAGER_CROP_FILE_SUCCESS,
            payload: {
                file: file
            }
        };
    };
    FileManagerActionsService.prototype.cropFileError = function (file) {
        return {
            type: FileManagerActionsService_1.FILEMANAGER_CROP_FILE_ERROR,
            payload: {
                file: file
            }
        };
    };
    FileManagerActionsService.prototype.deleteFile = function (file) {
        return {
            type: FileManagerActionsService_1.FILEMANAGER_DELETE_FILE,
            payload: {
                file: file
            }
        };
    };
    FileManagerActionsService.prototype.deleteFileSuccess = function (file) {
        return {
            type: FileManagerActionsService_1.FILEMANAGER_DELETE_FILE_SUCCESS,
            payload: {
                file: file
            }
        };
    };
    FileManagerActionsService.prototype.deleteSelectedFiles = function (fileIds) {
        return {
            type: FileManagerActionsService_1.FILEMANAGER_DELETE_FILE_SELECTION,
            payload: { fileIds: fileIds }
        };
    };
    FileManagerActionsService.prototype.deleteSelectedFilesSuccess = function (files) {
        return {
            type: FileManagerActionsService_1.FILEMANAGER_DELETE_FILE_SELECTION_SUCCESS,
            payload: { files: files }
        };
    };
    FileManagerActionsService.prototype.loadFiles = function (folderId) {
        return {
            type: FileManagerActionsService_1.FILEMANAGER_LOAD_FILES,
            payload: {
                folderId: folderId
            }
        };
    };
    FileManagerActionsService.prototype.inverseFileSelection = function () {
        return {
            type: FileManagerActionsService_1.FILEMANAGER_INVERSE_FILE_SELECTION,
            payload: {}
        };
    };
    FileManagerActionsService.prototype.loadFilesSuccess = function (folderId, files) {
        return {
            type: FileManagerActionsService_1.FILEMANAGER_LOAD_FILES_SUCCESS,
            payload: {
                folderId: folderId,
                files: files
            }
        };
    };
    FileManagerActionsService.prototype.moveFileSuccess = function (files, folderId) {
        return {
            type: FileManagerActionsService_1.FILEMANAGER_MOVE_FILES_SUCCESS,
            payload: { folderId: folderId, files: files }
        };
    };
    FileManagerActionsService.prototype.moveFileError = function (files) {
        return {
            type: FileManagerActionsService_1.FILEMANAGER_MOVE_FILES_ERROR,
            payload: { files: files }
        };
    };
    FileManagerActionsService.prototype.selectAllFiles = function () {
        return {
            type: FileManagerActionsService_1.FILEMANAGER_SELECT_ALL,
            payload: {}
        };
    };
    FileManagerActionsService.prototype.selectFile = function (file) {
        return {
            type: FileManagerActionsService_1.FILEMANAGER_SELECT_FILE,
            payload: {
                file: file
            }
        };
    };
    FileManagerActionsService.prototype.unSelectAll = function () {
        return {
            type: FileManagerActionsService_1.FILEMANAGER_UNSELECT_ALL,
            payload: {}
        };
    };
    FileManagerActionsService.prototype.unSelectFile = function (file) {
        return {
            type: FileManagerActionsService_1.FILEMANAGER_UNSELECT_FILE,
            payload: {
                file: file
            }
        };
    };
    FileManagerActionsService.prototype.upload = function (file) {
        return {
            type: FileManagerActionsService_1.FILEMANAGER_UPLOAD_FILE,
            payload: {
                files: [file]
            }
        };
    };
    FileManagerActionsService.prototype.uploadSuccess = function (file) {
        return {
            type: FileManagerActionsService_1.FILEMANAGER_UPLOAD_FILE_SUCCESS,
            payload: {
                files: [file]
            }
        };
    };
    FileManagerActionsService.prototype.uploadError = function (file) {
        return {
            type: FileManagerActionsService_1.FILEMANAGER_UPLOAD_FILE_ERROR,
            payload: {
                files: [file]
            }
        };
    };
    FileManagerActionsService.FILEMANAGER_CROP_FILE = 'FILEMANAGER_CROP_FILE';
    FileManagerActionsService.FILEMANAGER_CROP_FILE_SUCCESS = 'FILEMANAGER_CROP_FILE_SUCCESS';
    FileManagerActionsService.FILEMANAGER_CROP_FILE_ERROR = 'FILEMANAGER_CROP_FILE_ERROR';
    FileManagerActionsService.FILEMANAGER_DELETE_FILE = 'FILEMANAGER_DELETE_FILE';
    FileManagerActionsService.FILEMANAGER_DELETE_FILE_SUCCESS = 'FILEMANAGER_DELETE_FILE_SUCCESS';
    FileManagerActionsService.FILEMANAGER_DELETE_FILE_SELECTION = 'FILEMANAGER_DELETE_FILE_SELECTION';
    FileManagerActionsService.FILEMANAGER_DELETE_FILE_SELECTION_SUCCESS = 'FILEMANAGER_DELETE_FILE_SELECTION_SUCCESS';
    FileManagerActionsService.FILEMANAGER_INVERSE_FILE_SELECTION = 'FILEMANAGER_INVERSE_FILE_SELECTION';
    FileManagerActionsService.FILEMANAGER_LOAD_FILES = 'FILEMANAGER_LOAD_FILES';
    FileManagerActionsService.FILEMANAGER_LOAD_FILES_SUCCESS = 'FILEMANAGER_LOAD_FILES_SUCCESS';
    FileManagerActionsService.FILEMANAGER_MOVE_FILES_SUCCESS = 'FILEMANAGER_MOVE_FILES_SUCCESS';
    FileManagerActionsService.FILEMANAGER_MOVE_FILES_ERROR = 'FILEMANAGER_MOVE_FILES_ERROR';
    FileManagerActionsService.FILEMANAGER_SELECT_ALL = 'FILEMANAGER_SELECT_ALL';
    FileManagerActionsService.FILEMANAGER_SELECT_FILE = 'FILEMANAGER_SELECT_FILE';
    FileManagerActionsService.FILEMANAGER_UNSELECT_FILE = 'FILEMANAGER_UNSELECT_FILE';
    FileManagerActionsService.FILEMANAGER_UNSELECT_ALL = 'FILEMANAGER_UNSELECT_ALL';
    FileManagerActionsService.FILEMANAGER_UPLOAD_FILE = 'FILEMANAGER_UPLOAD_FILE';
    FileManagerActionsService.FILEMANAGER_UPLOAD_FILE_ERROR = 'FILEMANAGER_UPLOAD_FILE_ERROR';
    FileManagerActionsService.FILEMANAGER_UPLOAD_FILE_SUCCESS = 'FILEMANAGER_UPLOAD_FILE_SUCCESS';
    FileManagerActionsService = FileManagerActionsService_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
    ], FileManagerActionsService);
    return FileManagerActionsService;
    var FileManagerActionsService_1;
}());

//# sourceMappingURL=/home/www/projects/angular2-filemanager/demo/src/fileManagerActions.service.js.map

/***/ }),

/***/ "../../../../../src/store/fileManagerApi.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FileManagerApiService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_uuid__ = __webpack_require__("../../../../angular2-uuid/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_uuid___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_uuid__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_FilemanagerNotifcations__ = __webpack_require__("../../../../../src/services/FilemanagerNotifcations.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__fileManagerApiAbstract_class__ = __webpack_require__("../../../../../src/store/fileManagerApiAbstract.class.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_of__ = __webpack_require__("../../../../rxjs/add/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_empty__ = __webpack_require__("../../../../rxjs/add/observable/empty.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_empty___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_empty__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_observable_throw__ = __webpack_require__("../../../../rxjs/add/observable/throw.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_add_observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_add_observable_throw__);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var FileManagerApiService = /** @class */ (function (_super) {
    __extends(FileManagerApiService, _super);
    function FileManagerApiService(filemanagerNotfication) {
        var _this = _super.call(this) || this;
        _this.filemanagerNotfication = filemanagerNotfication;
        return _this;
    }
    FileManagerApiService.prototype.load = function (nodeId) {
        if (nodeId === void 0) { nodeId = ''; }
        if (!this.nodes) {
            this.nodes = this.getAllDataFromLocalStorage();
        }
        var nodes = this.getChildren(nodeId);
        return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].of(nodes);
    };
    FileManagerApiService.prototype.add = function (node, parentNodeId) {
        if (parentNodeId === void 0) { parentNodeId = null; }
        node.parentId = parentNodeId;
        node.id = __WEBPACK_IMPORTED_MODULE_2_angular2_uuid__["UUID"].UUID();
        this.nodes.push(node);
        if (this.saveNodes()) {
            return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].of(node);
        }
        else {
            return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].empty();
        }
    };
    FileManagerApiService.prototype.move = function (srcNode, targetNode) {
        var srcId = srcNode.id;
        var targetId = targetNode ? targetNode.id : '';
        var index = this.findIndexByNodeId(srcId);
        this.nodes[index].parentId = targetId;
        if (this.saveNodes()) {
            return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].of(this.nodes[index]);
        }
        else {
            return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].empty();
        }
    };
    FileManagerApiService.prototype.update = function (node) {
        var index = this.findIndexByNodeId(node.id);
        this.nodes[index] = node;
        if (this.saveNodes()) {
            return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].of(node);
        }
        else {
            return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].empty();
        }
    };
    FileManagerApiService.prototype.remove = function (nodeId) {
        var index = this.findIndexByNodeId(nodeId);
        var node = this.nodes[index];
        var hasChildren = this.getChildren(nodeId).length > 0;
        if (!hasChildren) {
            this.nodes.splice(index, 1);
            this.saveNodes();
            return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].of(node);
        }
        else {
            return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].throw('Node is not empty');
        }
    };
    /**
     * Crop file
     *
     * @param {IOuterFile} file
     * @param {ICropBounds} bounds
     * @returns {Observable<IOuterFile>}
     */
    FileManagerApiService.prototype.cropFile = function (file, bounds) {
        return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].throw('This functionality is not available with LocalStorage');
    };
    /**
     * Load files from directory
     *
     * @param {string} nodeId
     * @returns {Observable<IOuterFile[]>}
     */
    FileManagerApiService.prototype.loadFiles = function (nodeId) {
        var _this = this;
        if (nodeId === void 0) { nodeId = ''; }
        this.currentNodeId = nodeId;
        if (!this.files) {
            this.files = this.getAllFileDataFromLocalStorage();
        }
        var files = this.getFilesFromFolder(nodeId);
        var newFiles = files.map(function (file) {
            return _this.convertLocalData2IOuterFile(file);
        });
        return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].of(newFiles);
    };
    FileManagerApiService.prototype.removeFile = function (file) {
        var index = this.findIndexByFileId(file.id.toString());
        if (index === -1) {
            return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].of(false);
        }
        this.files.splice(index, 1);
        this.saveFiles();
        return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].of(true);
    };
    FileManagerApiService.prototype.removeSelectedFiles = function (selectedFiles) {
        var _this = this;
        var numberOfFiles = this.files.length;
        selectedFiles.forEach(function (fileId) {
            var index = _this.findIndexByFileId(fileId);
            if (index > -1) {
                _this.files.splice(index, 1);
            }
        });
        this.saveFiles();
        return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].of((this.files.length + selectedFiles.length === numberOfFiles));
    };
    FileManagerApiService.prototype.uploadFile = function (file) {
        var fileData = this.convertIOuterFile2LocalData(file);
        this.files.push(fileData);
        if (this.saveFiles()) {
            return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].of(this.convertLocalData2IOuterFile(fileData));
        }
        else {
            return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].throw('Upload error');
        }
    };
    /**
     * @param {IOuterFile[]} files
     * @param {IOuterNode} node
     * @returns {Observable<IOuterFile[]>}
     */
    FileManagerApiService.prototype.moveFile = function (files, node) {
        var _this = this;
        if (node === void 0) { node = null; }
        var ids = files.map(function (file) { return file.id.toString(); });
        var folderId = node ? node.id.toString() : '';
        var movedFiles = this.files.filter(function (file) { return ids.indexOf(file.id.toString()) > -1; });
        var errorMsg = 'Can not move file to the same folder';
        var isMovedToSameFolder = false;
        movedFiles.forEach(function (file) {
            if (node) {
                if (node.id === file.folderId) {
                }
            }
            else {
                if (file.folderId === '' || file.folderId === null) {
                    return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].throw(errorMsg);
                }
            }
            file.folderId = folderId;
        });
        if (isMovedToSameFolder) {
            return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].throw(errorMsg);
        }
        if (this.saveFiles()) {
            return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].of(movedFiles.map(function (file) { return _this.convertLocalData2IOuterFile(file); }));
        }
        else {
            return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].throw('Move files error');
        }
    };
    FileManagerApiService.prototype.findIndexByNodeId = function (nodeId) {
        return this.nodes.findIndex(function (node) {
            return node.id === nodeId;
        });
    };
    FileManagerApiService.prototype.findIndexByFileId = function (fileId) {
        return this.files.findIndex(function (file) { return file.id === fileId; });
    };
    FileManagerApiService.prototype.getChildren = function (nodeId) {
        return this.nodes.filter(function (node) { return node.parentId === nodeId; });
    };
    FileManagerApiService.prototype.getFilesFromFolder = function (nodeId) {
        return this.files.filter(function (file) { return file.folderId === nodeId; });
    };
    FileManagerApiService.prototype.getAllDataFromLocalStorage = function () {
        try {
            var data = localStorage.getItem(this.treeName);
            if (data) {
                return JSON.parse(data);
            }
            return [];
        }
        catch (e) {
            return [];
        }
    };
    FileManagerApiService.prototype.getAllFileDataFromLocalStorage = function () {
        try {
            var data = localStorage.getItem(this.fileManagerName);
            if (data) {
                return JSON.parse(data);
            }
            return [];
        }
        catch (e) {
            return [];
        }
    };
    FileManagerApiService.prototype.saveNodes = function () {
        try {
            localStorage.setItem(this.treeName, JSON.stringify(this.nodes));
            return true;
        }
        catch (e) {
            this.filemanagerNotfication.sendNotification({
                type: 'error',
                title: 'State is not saved.',
                message: 'Reload previous state.'
            });
            this.files = null;
            this.nodes = null;
            this.load();
            return false;
        }
    };
    FileManagerApiService.prototype.saveFiles = function () {
        try {
            localStorage.setItem(this.fileManagerName, JSON.stringify(this.files));
            return true;
        }
        catch (e) {
            this.filemanagerNotfication.sendNotification({
                type: 'error',
                title: 'State is not saved.',
                message: 'Reload previous state.'
            });
            var nodeId = this.files[(this.files.length - 1)].folderId || null;
            this.files = null;
            this.load(nodeId);
            return false;
        }
    };
    /**
     *
     * @param file
     * @returns {{id: string, folderId: string, name: string, thumbnailUrl: string, url: string, width: number, height: number, mime: string}}
     */
    FileManagerApiService.prototype.convertLocalData2IOuterFile = function (file) {
        return {
            id: file.id,
            folderId: file.folderId,
            name: file.name,
            thumbnailUrl: file.data,
            url: file.data,
            width: file.width,
            height: file.height,
            type: file.type,
            size: file.size
        };
    };
    /**
     *
     * @param file
     * @returns {{id: (any|string), folderId: string, name: string, type: string, data: string, size: number}}
     */
    FileManagerApiService.prototype.convertIOuterFile2LocalData = function (file) {
        return {
            id: file.id.toString(),
            folderId: file.folderId,
            name: file.name,
            type: file.type,
            data: file.data,
            size: file.size,
            width: file.width,
            height: file.height
        };
    };
    FileManagerApiService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__services_FilemanagerNotifcations__["a" /* FilemanagerNotifcations */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_FilemanagerNotifcations__["a" /* FilemanagerNotifcations */]) === "function" && _a || Object])
    ], FileManagerApiService);
    return FileManagerApiService;
    var _a;
}(__WEBPACK_IMPORTED_MODULE_4__fileManagerApiAbstract_class__["a" /* AbstractFileManagerApiService */]));

//# sourceMappingURL=/home/www/projects/angular2-filemanager/demo/src/fileManagerApi.service.js.map

/***/ }),

/***/ "../../../../../src/store/fileManagerApiAbstract.class.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AbstractFileManagerApiService; });
var AbstractFileManagerApiService = /** @class */ (function () {
    function AbstractFileManagerApiService() {
        this.treeName = 'fileManagerTree';
        this.fileManagerName = 'fileManagerFiles';
        this.currentNodeId = '';
    }
    return AbstractFileManagerApiService;
}());

//# sourceMappingURL=/home/www/projects/angular2-filemanager/demo/src/fileManagerApiAbstract.class.js.map

/***/ }),

/***/ "../../../../../src/store/fileManagerBackendApi.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FileManagerBackendApiService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__configuration_fileManagerConfiguration_service__ = __webpack_require__("../../../../../src/configuration/fileManagerConfiguration.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__fileManagerApiAbstract_class__ = __webpack_require__("../../../../../src/store/fileManagerApiAbstract.class.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_of__ = __webpack_require__("../../../../rxjs/add/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_observable_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_throw__ = __webpack_require__("../../../../rxjs/add/observable/throw.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_throw__);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var FileManagerBackendApiService = /** @class */ (function (_super) {
    __extends(FileManagerBackendApiService, _super);
    function FileManagerBackendApiService($http, configuration) {
        var _this = _super.call(this) || this;
        _this.$http = $http;
        _this.configuration = configuration;
        _this.nodes = [];
        _this.files = [];
        return _this;
    }
    /**
     * Load folder chidls for given folder id
     *
     * @param {string} nodeId
     * @returns {Observable<IOuterNode[]>}
     */
    FileManagerBackendApiService.prototype.load = function (nodeId) {
        var _this = this;
        if (nodeId === void 0) { nodeId = ''; }
        var nodeIds = this.nodes.map(function (node) { return node.id; });
        var params = new __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["c" /* HttpParams */]().set('nodeId', nodeId || '');
        return this.$http.get(this.configuration.folderUrls.foldersUrl, { params: params })
            .map(function (nodes) {
            nodes.forEach(function (node) {
                if (nodeIds.indexOf(node.id) === -1) {
                    _this.nodes.push(node);
                }
                else {
                    var index = _this.nodes.findIndex(function (item) { return node.id === item.id; });
                    _this.nodes[index] = node;
                }
            });
            return nodes;
        });
    };
    /**
     * Create new folder
     *
     * @param {IOuterNode} node
     * @param {string} parentNodeId
     * @returns {Observable<IOuterNode>}
     */
    FileManagerBackendApiService.prototype.add = function (node, parentNodeId) {
        var _this = this;
        if (parentNodeId === void 0) { parentNodeId = null; }
        var data = {
            node: node,
            parentNodeId: parentNodeId
        };
        return this.$http.post(this.configuration.folderUrls.foldersUrl, data)
            .map(function (newNode) {
            _this.nodes.push(newNode);
            return newNode;
        });
    };
    /**
     * Move folder from source parent to target parent
     *
     * @param {IOuterNode} srcNode
     * @param {IOuterNode} targetNode
     * @returns {Observable<IOuterNode>}
     */
    FileManagerBackendApiService.prototype.move = function (srcNode, targetNode) {
        var _this = this;
        var srcId = srcNode.id;
        var targetId = targetNode ? targetNode.id : null;
        return this.$http.put(this.configuration.folderUrls.folderMoveUrl, { source: srcId, target: targetId })
            .map(function (movedNode) {
            var index = _this.findIndexByNodeId(srcId);
            _this.nodes[index].parentId = targetId;
            return movedNode;
        });
    };
    /**
     * Update folder name
     *
     * @param {IOuterNode} node
     * @returns {Observable<IOuterNode>}
     */
    FileManagerBackendApiService.prototype.update = function (node) {
        var _this = this;
        return this.$http.put(this.configuration.folderUrls.foldersUrl, node)
            .map(function (newNode) {
            var index = _this.findIndexByNodeId(node.id);
            _this.nodes[index] = newNode;
            return newNode;
        });
    };
    /**
     * Remove node by given id
     *
     * @param {string} nodeId
     * @returns {Observable<IOuterNode>}
     */
    FileManagerBackendApiService.prototype.remove = function (nodeId) {
        var _this = this;
        var index = this.findIndexByNodeId(nodeId);
        var hasChildren = this.getChildren(nodeId).length > 0;
        if (!hasChildren) {
            var params = new __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["c" /* HttpParams */]().set('nodeId', nodeId);
            return this.$http.delete(this.configuration.folderUrls.foldersUrl, { params: params })
                .map(function (removedNode) {
                _this.nodes.splice(index, 1);
                return removedNode;
            });
        }
        else {
            return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].throw('Node is not empty');
        }
    };
    /**
     * Crop file
     *
     * @param {IOuterFile} file
     * @param {ICropBounds} bounds
     * @returns {Observable<IOuterFile>}
     */
    FileManagerBackendApiService.prototype.cropFile = function (file, bounds) {
        return this.$http.put(this.configuration.fileUrl, { id: file.id, bounds: bounds });
    };
    /**
     * Load files from directory
     *
     * @param {string} nodeId
     * @returns {Observable<IOuterFile[]>}
     */
    FileManagerBackendApiService.prototype.loadFiles = function (nodeId) {
        var _this = this;
        if (nodeId === void 0) { nodeId = ''; }
        this.currentNodeId = nodeId;
        var params = new __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["c" /* HttpParams */]().set('dirId', nodeId);
        return this.$http.get(this.configuration.fileUrl, { params: params })
            .map(function (files) {
            _this.files = files.map(function (file) { return file; });
            return files;
        });
    };
    /**
     * Remove file from folder
     *
     * @param {IOuterFile} file
     * @returns {Observable<boolean>}
     */
    FileManagerBackendApiService.prototype.removeFile = function (file) {
        var _this = this;
        var index = this.findIndexByFileId(file.id.toString());
        if (index === -1) {
            return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].of(false);
        }
        var params = new __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["c" /* HttpParams */]().set('id', file.id.toString());
        return this.$http.delete(this.configuration.fileUrl, { params: params })
            .map(function () {
            _this.files.splice(index, 1);
            return true;
        });
    };
    FileManagerBackendApiService.prototype.removeSelectedFiles = function (selectedFiles) {
        var _this = this;
        var params = new __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["c" /* HttpParams */]().set('id', selectedFiles.join('|'));
        return this.$http.delete(this.configuration.fileUrl, { params: params })
            .map(function () {
            selectedFiles.forEach(function (fileId) {
                var index = _this.findIndexByFileId(fileId);
                if (index > -1) {
                    _this.files.splice(index, 1);
                }
            });
            return true;
        });
    };
    /**
     * This method is success method, real upload is done in ExtendedFileUploader
     * @param {IOuterFile} file
     * @returns {Observable<IOuterFile>}
     */
    FileManagerBackendApiService.prototype.uploadFile = function (file) {
        var fileData = file;
        this.files.push(fileData);
        return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].of(file);
    };
    /**
     * @param {IOuterFile[]} files
     * @param {IOuterNode} node
     * @returns {Observable<IOuterFile[]>}
     */
    FileManagerBackendApiService.prototype.moveFile = function (files, node) {
        var ids = files.map(function (file) { return file.id.toString(); });
        return this.$http.put(this.configuration.fileUrl, { files: ids, folderId: node ? node.id : '' });
    };
    /**
     * @param {string} nodeId
     * @returns {number}
     */
    FileManagerBackendApiService.prototype.findIndexByNodeId = function (nodeId) {
        return this.nodes.findIndex(function (node) {
            return node.id === nodeId;
        });
    };
    /**
     * @param {string} fileId
     * @returns {number}
     */
    FileManagerBackendApiService.prototype.findIndexByFileId = function (fileId) {
        return this.files.findIndex(function (file) { return file.id === fileId; });
    };
    /**
     * @param {string} nodeId
     * @returns {IOuterNode[]}
     */
    FileManagerBackendApiService.prototype.getChildren = function (nodeId) {
        return this.nodes.filter(function (node) { return node.parentId === nodeId; });
    };
    /**
     * @param file
     * @returns {{id: string, folderId: string, name: string, thumbnailUrl: string, url: string, width: number, height: number, mime: string}}
     */
    FileManagerBackendApiService.prototype.convertLocalData2IOuterFile = function (file) {
        return {
            id: file.id,
            folderId: file.folderId,
            name: file.name,
            thumbnailUrl: file.data,
            url: file.data,
            width: file.width,
            height: file.height,
            type: file.type,
            size: file.size
        };
    };
    /**
     * @param file
     * @returns {{id: (any|string), folderId: string, name: string, type: string, data: string, size: number}}
     */
    FileManagerBackendApiService.prototype.convertIOuterFile2LocalData = function (file) {
        return {
            id: file.id.toString(),
            folderId: file.folderId,
            name: file.name,
            type: file.type,
            data: file.data,
            size: file.size,
            width: file.width,
            height: file.height
        };
    };
    FileManagerBackendApiService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["a" /* HttpClient */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__angular_common_http__["a" /* HttpClient */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__configuration_fileManagerConfiguration_service__["a" /* FileManagerConfiguration */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__configuration_fileManagerConfiguration_service__["a" /* FileManagerConfiguration */]) === "function" && _b || Object])
    ], FileManagerBackendApiService);
    return FileManagerBackendApiService;
    var _a, _b;
}(__WEBPACK_IMPORTED_MODULE_3__fileManagerApiAbstract_class__["a" /* AbstractFileManagerApiService */]));

//# sourceMappingURL=/home/www/projects/angular2-filemanager/demo/src/fileManagerBackendApi.service.js.map

/***/ }),

/***/ "../../../../../src/store/fileManagerDispatcher.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FileManagerDispatcherService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/@ngrx/store.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__fileManagerActions_service__ = __webpack_require__("../../../../../src/store/fileManagerActions.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FileManagerDispatcherService = /** @class */ (function () {
    function FileManagerDispatcherService(store, fileManagerActions) {
        this.store = store;
        this.fileManagerActions = fileManagerActions;
    }
    FileManagerDispatcherService.prototype.cropFile = function (file, bounds) {
        this.store.dispatch(this.fileManagerActions.cropFile(file, bounds));
    };
    FileManagerDispatcherService.prototype.deleteFile = function (file) {
        this.store.dispatch(this.fileManagerActions.deleteFile(file));
    };
    FileManagerDispatcherService.prototype.deleteSelectedFiles = function (files) {
        this.store.dispatch(this.fileManagerActions.deleteSelectedFiles(files));
    };
    FileManagerDispatcherService.prototype.inverseSelection = function () {
        this.store.dispatch(this.fileManagerActions.inverseFileSelection());
    };
    FileManagerDispatcherService.prototype.loadFiles = function (folderId) {
        this.store.dispatch(this.fileManagerActions.loadFiles(folderId));
    };
    FileManagerDispatcherService.prototype.selectAllFiles = function () {
        this.store.dispatch(this.fileManagerActions.selectAllFiles());
    };
    FileManagerDispatcherService.prototype.selectFile = function (file) {
        this.store.dispatch(this.fileManagerActions.selectFile(file));
    };
    FileManagerDispatcherService.prototype.unSelectAllFiles = function () {
        this.store.dispatch(this.fileManagerActions.unSelectAll());
    };
    FileManagerDispatcherService.prototype.unSelectFile = function (file) {
        this.store.dispatch(this.fileManagerActions.unSelectFile(file));
    };
    FileManagerDispatcherService.prototype.uploadError = function (file) {
        this.store.dispatch(this.fileManagerActions.uploadError(file));
    };
    FileManagerDispatcherService.prototype.upload = function (file) {
        this.store.dispatch(this.fileManagerActions.upload(file));
    };
    FileManagerDispatcherService.prototype.uploadSuccess = function (file) {
        this.store.dispatch(this.fileManagerActions.uploadSuccess(file));
    };
    FileManagerDispatcherService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__ngrx_store__["h" /* Store */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ngrx_store__["h" /* Store */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__fileManagerActions_service__["a" /* FileManagerActionsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__fileManagerActions_service__["a" /* FileManagerActionsService */]) === "function" && _b || Object])
    ], FileManagerDispatcherService);
    return FileManagerDispatcherService;
    var _a, _b;
}());

//# sourceMappingURL=/home/www/projects/angular2-filemanager/demo/src/fileManagerDispatcher.service.js.map

/***/ }),

/***/ "../../../../../src/store/fileManagerEffects.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FileManagerEffectsService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_effects__ = __webpack_require__("../../../../@ngrx/effects/@ngrx/effects.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__rign_angular2_tree__ = __webpack_require__("../../../../@rign/angular2-tree/main.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__fileManagerActions_service__ = __webpack_require__("../../../../../src/store/fileManagerActions.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__fileManagerApi_service__ = __webpack_require__("../../../../../src/store/fileManagerApi.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_FilemanagerNotifcations__ = __webpack_require__("../../../../../src/services/FilemanagerNotifcations.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_operators__ = __webpack_require__("../../../../rxjs/operators.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_operators___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_operators__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_observable_empty__ = __webpack_require__("../../../../rxjs/add/observable/empty.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_observable_empty___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_rxjs_add_observable_empty__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_add_observable_of__ = __webpack_require__("../../../../rxjs/add/observable/of.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_add_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_rxjs_add_observable_of__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var FileManagerEffectsService = /** @class */ (function () {
    function FileManagerEffectsService(actions$, fileManagerActions, filemanagerNotfication, fileManagerApiService) {
        var _this = this;
        this.actions$ = actions$;
        this.fileManagerActions = fileManagerActions;
        this.filemanagerNotfication = filemanagerNotfication;
        this.fileManagerApiService = fileManagerApiService;
        this.loadFiles$ = this.actions$
            .ofType(__WEBPACK_IMPORTED_MODULE_3__fileManagerActions_service__["a" /* FileManagerActionsService */].FILEMANAGER_LOAD_FILES)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_7_rxjs_operators__["switchMap"])(function (action) { return _this.loadFiles(action.payload.folderId)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_7_rxjs_operators__["map"])(function (files) {
            return _this.fileManagerActions.loadFilesSuccess(action.payload.folderId, files);
        }), Object(__WEBPACK_IMPORTED_MODULE_7_rxjs_operators__["catchError"])(function (e) {
            return __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["Observable"].of(_this.onLoadFilesError(action.payload.folderId));
        })); }));
        this.cropFile$ = this.actions$
            .ofType(__WEBPACK_IMPORTED_MODULE_3__fileManagerActions_service__["a" /* FileManagerActionsService */].FILEMANAGER_CROP_FILE)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_7_rxjs_operators__["switchMap"])(function (action) { return _this.cropFile(action.payload.file, action.payload.bounds)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_7_rxjs_operators__["map"])(function (result) {
            _this.filemanagerNotfication.sendNotification({
                type: 'success',
                title: 'Crop Image.',
                message: 'Image has been cropped.'
            });
            return _this.fileManagerActions.cropFileSuccess(action.payload.file);
        }), Object(__WEBPACK_IMPORTED_MODULE_7_rxjs_operators__["catchError"])(function () { return __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["Observable"].of(_this.fileManagerActions.cropFileError(action.payload.file)); })); }));
        this.deleteFile$ = this.actions$
            .ofType(__WEBPACK_IMPORTED_MODULE_3__fileManagerActions_service__["a" /* FileManagerActionsService */].FILEMANAGER_DELETE_FILE)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_7_rxjs_operators__["switchMap"])(function (action) { return _this.deleteFile(action.payload.file)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_7_rxjs_operators__["map"])(function (result) {
            return _this.fileManagerActions.deleteFileSuccess(action.payload.file);
        }), Object(__WEBPACK_IMPORTED_MODULE_7_rxjs_operators__["catchError"])(function () { return __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["Observable"].of(_this.onDeleteFileError(action.payload.file)); })); }));
        this.deleteFilesSelection$ = this.actions$
            .ofType(__WEBPACK_IMPORTED_MODULE_3__fileManagerActions_service__["a" /* FileManagerActionsService */].FILEMANAGER_DELETE_FILE_SELECTION)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_7_rxjs_operators__["switchMap"])(function (action) { return _this.deleteFilesSelection(action.payload.fileIds)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_7_rxjs_operators__["map"])(function (result) {
            return _this.fileManagerActions.deleteSelectedFilesSuccess(action.payload.files);
        }), Object(__WEBPACK_IMPORTED_MODULE_7_rxjs_operators__["catchError"])(function () { return __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["Observable"].of(_this.onDeleteFilesSelectionError(action.payload.files)); })); }));
        this.uploadFile$ = this.actions$
            .ofType(__WEBPACK_IMPORTED_MODULE_3__fileManagerActions_service__["a" /* FileManagerActionsService */].FILEMANAGER_UPLOAD_FILE)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_7_rxjs_operators__["switchMap"])(function (action) { return _this.uploadFile(action.payload.files[0])
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_7_rxjs_operators__["map"])(function (result) {
            return _this.fileManagerActions.uploadSuccess(result);
        }), Object(__WEBPACK_IMPORTED_MODULE_7_rxjs_operators__["catchError"])(function () {
            return __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["Observable"].empty();
        })); }));
        this.moveFile$ = this.actions$
            .ofType(__WEBPACK_IMPORTED_MODULE_2__rign_angular2_tree__["c" /* TreeActionsService */].TREE_MOVE_NODE)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_7_rxjs_operators__["filter"])(function (action) {
            return action.payload.sourceOfDroppedData === 'FILE';
        }), Object(__WEBPACK_IMPORTED_MODULE_7_rxjs_operators__["switchMap"])(function (action) { return _this.moveFiles([action.payload.oldNode], action.payload.node)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_7_rxjs_operators__["map"])(function (result) {
            var folderId = action.payload.oldNode.folderId;
            return _this.fileManagerActions.moveFileSuccess(result, folderId);
        }), Object(__WEBPACK_IMPORTED_MODULE_7_rxjs_operators__["catchError"])(function () {
            return __WEBPACK_IMPORTED_MODULE_4_rxjs_Observable__["Observable"].of(_this.fileManagerActions.moveFileError([action.payload.oldNode]));
        })); }));
        this.filesMoveSuccess$ = this.actions$
            .ofType(__WEBPACK_IMPORTED_MODULE_3__fileManagerActions_service__["a" /* FileManagerActionsService */].FILEMANAGER_MOVE_FILES_SUCCESS)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_7_rxjs_operators__["map"])(function (action) {
            _this.onMoveFilesSuccess();
            return _this.fileManagerActions.loadFiles(action.payload.folderId);
        }));
        this.uploadError$ = this.actions$
            .ofType(__WEBPACK_IMPORTED_MODULE_3__fileManagerActions_service__["a" /* FileManagerActionsService */].FILEMANAGER_UPLOAD_FILE_ERROR)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_7_rxjs_operators__["map"])(function (action) {
            _this.filemanagerNotfication.sendNotification({
                type: 'alert',
                title: 'File upload',
                message: action.payload.file.name + " exists on the server in this directory"
            });
        }));
        this.cropFileSuccess$ = this.actions$
            .ofType(__WEBPACK_IMPORTED_MODULE_3__fileManagerActions_service__["a" /* FileManagerActionsService */].FILEMANAGER_CROP_FILE_SUCCESS);
        this.cropFileError$ = this.actions$
            .ofType(__WEBPACK_IMPORTED_MODULE_3__fileManagerActions_service__["a" /* FileManagerActionsService */].FILEMANAGER_CROP_FILE_ERROR)
            .subscribe(function (action) {
            _this.onCropFileError(action.payload.file);
        });
        this.deleteFileSuccess$ = this.actions$
            .ofType(__WEBPACK_IMPORTED_MODULE_3__fileManagerActions_service__["a" /* FileManagerActionsService */].FILEMANAGER_DELETE_FILE_SUCCESS);
        this.filesMoveError$ = this.actions$
            .ofType(__WEBPACK_IMPORTED_MODULE_3__fileManagerActions_service__["a" /* FileManagerActionsService */].FILEMANAGER_MOVE_FILES_ERROR)
            .subscribe(function (action) {
            _this.onMoveFilesError();
        });
    }
    FileManagerEffectsService.prototype.cropFile = function (file, bounds) {
        return this.fileManagerApiService.cropFile(file.toJSON(), bounds);
    };
    FileManagerEffectsService.prototype.deleteFile = function (file) {
        return this.fileManagerApiService.removeFile(file.toJSON());
    };
    FileManagerEffectsService.prototype.deleteFilesSelection = function (files) {
        return this.fileManagerApiService.removeSelectedFiles(files);
    };
    FileManagerEffectsService.prototype.loadFiles = function (folderId) {
        return this.fileManagerApiService.loadFiles(folderId);
    };
    FileManagerEffectsService.prototype.uploadFile = function (file) {
        return this.fileManagerApiService.uploadFile(file);
    };
    FileManagerEffectsService.prototype.moveFiles = function (files, folder) {
        if (folder === void 0) { folder = null; }
        return this.fileManagerApiService.moveFile(files, folder);
    };
    FileManagerEffectsService.prototype.onCropFileError = function (file) {
        this.filemanagerNotfication.sendNotification({
            type: 'alert',
            title: 'Crop Image',
            message: '[FILEMANAGER] Can not crop file'
        });
    };
    FileManagerEffectsService.prototype.onDeleteFileError = function (file) {
        this.filemanagerNotfication.sendNotification({
            type: 'error',
            title: 'Delete file',
            message: '[FILEMANAGER] Can not delete file' + file.name
        });
    };
    FileManagerEffectsService.prototype.onDeleteFilesSelectionError = function (files) {
        this.filemanagerNotfication.sendNotification({
            type: 'error',
            title: 'Delete selected files',
            message: '[FILEMANAGER] Not all files were deleted'
        });
    };
    FileManagerEffectsService.prototype.onLoadFilesError = function (folderId) {
        this.filemanagerNotfication.sendNotification({
            type: 'error',
            title: 'Load files',
            message: '[FILEMANAGER] Can not load files for folder ' + folderId
        });
    };
    FileManagerEffectsService.prototype.onMoveFilesSuccess = function () {
        this.filemanagerNotfication.sendNotification({
            type: 'success',
            title: 'Move files',
            message: 'File was successfully moved to folder'
        });
    };
    FileManagerEffectsService.prototype.onMoveFilesError = function () {
        this.filemanagerNotfication.sendNotification({
            type: 'error',
            title: 'Move files',
            message: 'File was not successfully moved to new folder'
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ngrx_effects__["b" /* Effect */])(),
        __metadata("design:type", Object)
    ], FileManagerEffectsService.prototype, "loadFiles$", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ngrx_effects__["b" /* Effect */])(),
        __metadata("design:type", Object)
    ], FileManagerEffectsService.prototype, "cropFile$", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ngrx_effects__["b" /* Effect */])(),
        __metadata("design:type", Object)
    ], FileManagerEffectsService.prototype, "deleteFile$", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ngrx_effects__["b" /* Effect */])(),
        __metadata("design:type", Object)
    ], FileManagerEffectsService.prototype, "deleteFilesSelection$", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ngrx_effects__["b" /* Effect */])(),
        __metadata("design:type", Object)
    ], FileManagerEffectsService.prototype, "uploadFile$", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ngrx_effects__["b" /* Effect */])(),
        __metadata("design:type", Object)
    ], FileManagerEffectsService.prototype, "moveFile$", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__ngrx_effects__["b" /* Effect */])(),
        __metadata("design:type", Object)
    ], FileManagerEffectsService.prototype, "filesMoveSuccess$", void 0);
    FileManagerEffectsService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__ngrx_effects__["a" /* Actions */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ngrx_effects__["a" /* Actions */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__fileManagerActions_service__["a" /* FileManagerActionsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__fileManagerActions_service__["a" /* FileManagerActionsService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_6__services_FilemanagerNotifcations__["a" /* FilemanagerNotifcations */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_6__services_FilemanagerNotifcations__["a" /* FilemanagerNotifcations */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_5__fileManagerApi_service__["a" /* FileManagerApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__fileManagerApi_service__["a" /* FileManagerApiService */]) === "function" && _d || Object])
    ], FileManagerEffectsService);
    return FileManagerEffectsService;
    var _a, _b, _c, _d;
}());

//# sourceMappingURL=/home/www/projects/angular2-filemanager/demo/src/fileManagerEffects.service.js.map

/***/ }),

/***/ "../../../../../src/store/fileManagerReducer.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (immutable) */ __webpack_exports__["a"] = fileManagerReducer;
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return filemanagerStateSelector; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return getAll; });
/* unused harmony export isChangeStateFiles */
/* unused harmony export isChangeStateSelectedFiles */
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__fileManagerActions_service__ = __webpack_require__("../../../../../src/store/fileManagerActions.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/@ngrx/store.es5.js");


function cropFile(state, action) {
    var file = action.payload.file;
    var id = file.getId().toString();
    state.entities[id] = Object.assign({}, file.toJSON());
    return {
        entities: state.entities,
        files: state.files,
        selectedFiles: state.selectedFiles
    };
}
function inverseFilesSelection(state) {
    return {
        entities: state.entities,
        files: state.files,
        selectedFiles: state.files.filter(function (i) { return state.selectedFiles.indexOf(i) === -1; })
    };
}
function loadFiles(state, action) {
    var entities = {};
    var files = [];
    action.payload.files.map(function (file) {
        var id = file.id.toString();
        entities[id] = file;
        files.push(id);
    });
    return {
        entities: entities,
        files: files,
        selectedFiles: []
    };
}
function moveFiles(state, action) {
    var files = action.payload.files;
    var ids = files.map(function (file) { return file.id.toString(); });
    var folderId = action.payload.folderId ? action.payload.folderId.toString() : '';
    var entities = Object.assign({}, state.entities);
    ids.forEach(function (id) {
        var oldEntity = Object.assign({}, entities[id]);
        oldEntity.folderId = folderId;
        entities[id] = oldEntity;
    });
    return {
        entities: entities,
        files: state.files.filter(function (i) { return ids.indexOf(i) === -1; }),
        selectedFiles: state.selectedFiles.filter(function (i) { return ids.indexOf(i) === -1; })
    };
}
function removeFile(state, action) {
    var id = action.payload.file.getId();
    delete state.entities[id];
    return {
        entities: state.entities,
        files: state.files.filter(function (i) { return i !== id; }),
        selectedFiles: state.selectedFiles
    };
}
function removeSelectedFiles(state) {
    var files = state.files.filter(function (i) { return state.selectedFiles.indexOf(i) === -1; });
    var entities = {};
    files.forEach(function (fileId) {
        entities[fileId] = state.entities[fileId];
    });
    return {
        entities: entities,
        files: files,
        selectedFiles: []
    };
}
function selectFile(state, action) {
    return {
        entities: state.entities,
        files: state.files,
        selectedFiles: state.selectedFiles.concat([action.payload.file.getId().toString()])
    };
}
function selectAllFiles(state) {
    return {
        entities: state.entities,
        files: state.files,
        selectedFiles: state.files.slice()
    };
}
function uploadFiles(state, action) {
    var newState = {
        entities: Object.assign({}, state.entities),
        files: state.files.slice(),
        selectedFiles: []
    };
    action.payload.files.forEach(function (file) {
        var id = file.id.toString();
        newState.entities[id] = file;
        newState.files.push(id);
    });
    return newState;
}
function unSelectAllFiles(state) {
    return {
        entities: state.entities,
        files: state.files,
        selectedFiles: []
    };
}
function unSelectFile(state, action) {
    var fileId = action.payload.file.getId().toString();
    return {
        entities: state.entities,
        files: state.files,
        selectedFiles: state.selectedFiles.filter(function (id) { return id !== fileId; })
    };
}
function fileManagerReducer(state, action) {
    if (state === void 0) { state = {
        entities: {},
        files: [],
        selectedFiles: []
    }; }
    switch (action.type) {
        case __WEBPACK_IMPORTED_MODULE_0__fileManagerActions_service__["a" /* FileManagerActionsService */].FILEMANAGER_CROP_FILE_SUCCESS:
            return cropFile(state, action);
        case __WEBPACK_IMPORTED_MODULE_0__fileManagerActions_service__["a" /* FileManagerActionsService */].FILEMANAGER_INVERSE_FILE_SELECTION:
            return inverseFilesSelection(state);
        case __WEBPACK_IMPORTED_MODULE_0__fileManagerActions_service__["a" /* FileManagerActionsService */].FILEMANAGER_DELETE_FILE_SELECTION_SUCCESS:
            return removeSelectedFiles(state);
        case __WEBPACK_IMPORTED_MODULE_0__fileManagerActions_service__["a" /* FileManagerActionsService */].FILEMANAGER_DELETE_FILE_SUCCESS:
            return removeFile(state, action);
        case __WEBPACK_IMPORTED_MODULE_0__fileManagerActions_service__["a" /* FileManagerActionsService */].FILEMANAGER_MOVE_FILES_SUCCESS:
            return moveFiles(state, action);
        case __WEBPACK_IMPORTED_MODULE_0__fileManagerActions_service__["a" /* FileManagerActionsService */].FILEMANAGER_LOAD_FILES_SUCCESS:
            return loadFiles(state, action);
        case __WEBPACK_IMPORTED_MODULE_0__fileManagerActions_service__["a" /* FileManagerActionsService */].FILEMANAGER_SELECT_ALL:
            return selectAllFiles(state);
        case __WEBPACK_IMPORTED_MODULE_0__fileManagerActions_service__["a" /* FileManagerActionsService */].FILEMANAGER_SELECT_FILE:
            return selectFile(state, action);
        case __WEBPACK_IMPORTED_MODULE_0__fileManagerActions_service__["a" /* FileManagerActionsService */].FILEMANAGER_UNSELECT_ALL:
            return unSelectAllFiles(state);
        case __WEBPACK_IMPORTED_MODULE_0__fileManagerActions_service__["a" /* FileManagerActionsService */].FILEMANAGER_UNSELECT_FILE:
            return unSelectFile(state, action);
        case __WEBPACK_IMPORTED_MODULE_0__fileManagerActions_service__["a" /* FileManagerActionsService */].FILEMANAGER_UPLOAD_FILE_SUCCESS:
            return uploadFiles(state, action);
        case __WEBPACK_IMPORTED_MODULE_0__fileManagerActions_service__["a" /* FileManagerActionsService */].FILEMANAGER_DELETE_FILE_SELECTION:
        case __WEBPACK_IMPORTED_MODULE_0__fileManagerActions_service__["a" /* FileManagerActionsService */].FILEMANAGER_CROP_FILE:
        case __WEBPACK_IMPORTED_MODULE_0__fileManagerActions_service__["a" /* FileManagerActionsService */].FILEMANAGER_DELETE_FILE:
        case __WEBPACK_IMPORTED_MODULE_0__fileManagerActions_service__["a" /* FileManagerActionsService */].FILEMANAGER_LOAD_FILES:
        case __WEBPACK_IMPORTED_MODULE_0__fileManagerActions_service__["a" /* FileManagerActionsService */].FILEMANAGER_MOVE_FILES_ERROR:
            return state;
        default:
            return state;
    }
}
var filemanagerStateSelector = Object(__WEBPACK_IMPORTED_MODULE_1__ngrx_store__["l" /* createFeatureSelector */])('files');
var getAll = function (state) {
    return state.files.map(function (id) { return state.entities[id]; });
};
var isChangeStateFiles = function (newState, prevState) {
    return prevState.files.length !== newState.files.length || prevState.files.filter(function (i) { return newState.files.indexOf(i) === -1; }).length > 0;
};
var isChangeStateSelectedFiles = function (newState, prevState) {
    return prevState.selectedFiles.length !== newState.selectedFiles.length || prevState.selectedFiles.filter(function (i) { return newState.selectedFiles.indexOf(i) === -1; }).length > 0;
};
//# sourceMappingURL=/home/www/projects/angular2-filemanager/demo/src/fileManagerReducer.js.map

/***/ }),

/***/ "../../../../../src/toolbar/fileTypeFilter/fileTypeFilter.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"btn-group\">\n  <button *ngFor=\"let type of typeFilterList\" class=\"btn btn-default\" [ngClass]=\"{'active': type === selectedType}\"\n          (click)=\"setFilterType(type)\">\n    <i class=\"{{type.iconCls}}\"></i>\n  </button>\n</div>\n"

/***/ }),

/***/ "../../../../../src/toolbar/fileTypeFilter/fileTypeFilter.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FileTypeFilterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_fileTypeFilter_service__ = __webpack_require__("../../../../../src/services/fileTypeFilter.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FileTypeFilterComponent = /** @class */ (function () {
    function FileTypeFilterComponent(fileTypeFilter) {
        var _this = this;
        this.fileTypeFilter = fileTypeFilter;
        this.typeFilterList = [];
        this.selectedType = null;
        this.fileTypeFilter.filter$
            .subscribe(function (type) {
            _this.selectedType = type;
        });
    }
    FileTypeFilterComponent.prototype.ngOnInit = function () {
        var _this = this;
        /** init file type filter **/
        this.typeFilterList
            .filter(function (type) {
            return type.defaultSelected;
        })
            .forEach(function (type) {
            _this.fileTypeFilter.setValue(type);
        });
    };
    /**
     * Set current filter and fire event
     * @param type
     */
    FileTypeFilterComponent.prototype.setFilterType = function (type) {
        this.fileTypeFilter.setValue(type);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", Array)
    ], FileTypeFilterComponent.prototype, "typeFilterList", void 0);
    FileTypeFilterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'ri-file-type-filter',
            template: __webpack_require__("../../../../../src/toolbar/fileTypeFilter/fileTypeFilter.component.html")
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_fileTypeFilter_service__["a" /* FileTypeFilterService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_fileTypeFilter_service__["a" /* FileTypeFilterService */]) === "function" && _a || Object])
    ], FileTypeFilterComponent);
    return FileTypeFilterComponent;
    var _a;
}());

//# sourceMappingURL=/home/www/projects/angular2-filemanager/demo/src/fileTypeFilter.component.js.map

/***/ }),

/***/ "../../../../../src/toolbar/interface/IToolbarEvent.ts":
/***/ (function(module, exports) {

//# sourceMappingURL=/home/www/projects/angular2-filemanager/demo/src/IToolbarEvent.js.map

/***/ }),

/***/ "../../../../../src/toolbar/models/button.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Button; });
var Button = /** @class */ (function () {
    function Button() {
    }
    Button.ADD_FOLDER = 'ADD_FOLDER';
    Button.DELETE_SELECTION = 'DELETE_SELECTION';
    Button.INVERSE_SELECTION = 'INVERSE_SELECTION';
    Button.REFRESH_FILES_LIST = 'REFRESH_FILES_LIST';
    Button.SELECT_ALL = 'SELECT_ALL';
    Button.UNSELECT_ALL = 'UNSELECT_ALL';
    return Button;
}());

//# sourceMappingURL=/home/www/projects/angular2-filemanager/demo/src/button.model.js.map

/***/ }),

/***/ "../../../../../src/toolbar/models/toolbarEvent.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToolbarEventModel; });
var ToolbarEventModel = /** @class */ (function () {
    function ToolbarEventModel(name, value) {
        if (value === void 0) { value = null; }
        this.name = name;
        this.value = value;
    }
    return ToolbarEventModel;
}());

//# sourceMappingURL=/home/www/projects/angular2-filemanager/demo/src/toolbarEvent.model.js.map

/***/ }),

/***/ "../../../../../src/toolbar/searchFile/searchFile.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"input-group\">\n  <input [formControl]=\"searchField\" type=\"text\" class=\"form-control\" placeholder=\"{{'RI_FM_LBL_SEARCH_FOR' | translate}}\">\n  <span class=\"input-group-btn\">\n      <button (click)=\"searchField.reset('')\" class=\"btn btn-default\" type=\"button\">\n          <i class=\"fa fa-times\"></i>\n      </button>\n  </span>\n</div>\n"

/***/ }),

/***/ "../../../../../src/toolbar/searchFile/searchFile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchFileComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_searchFilter_service__ = __webpack_require__("../../../../../src/services/searchFilter.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operators__ = __webpack_require__("../../../../rxjs/operators.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_operators___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SearchFileComponent = /** @class */ (function () {
    function SearchFileComponent(searchFilterService) {
        this.searchFilterService = searchFilterService;
        this.searchField = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]();
    }
    SearchFileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.searchField.valueChanges
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_3_rxjs_operators__["debounceTime"])(250))
            .subscribe(function (value) { return _this.searchFilterService.setValue(value); });
    };
    SearchFileComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'ri-search-file',
            template: __webpack_require__("../../../../../src/toolbar/searchFile/searchFile.component.html")
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_searchFilter_service__["a" /* SearchFilterService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_searchFilter_service__["a" /* SearchFilterService */]) === "function" && _a || Object])
    ], SearchFileComponent);
    return SearchFileComponent;
    var _a;
}());

//# sourceMappingURL=/home/www/projects/angular2-filemanager/demo/src/searchFile.component.js.map

/***/ }),

/***/ "../../../../../src/toolbar/selectionDropDown/selection.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SelectionComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__dropdown_Button_class__ = __webpack_require__("../../../../../src/dropdown/Button.class.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_button_model__ = __webpack_require__("../../../../../src/toolbar/models/button.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__dropdown_ButtonDivider_class__ = __webpack_require__("../../../../../src/dropdown/ButtonDivider.class.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__services_currentDirectoryFiles_service__ = __webpack_require__("../../../../../src/services/currentDirectoryFiles.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__configuration_fileManagerConfiguration_service__ = __webpack_require__("../../../../../src/configuration/fileManagerConfiguration.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__models_toolbarEvent_model__ = __webpack_require__("../../../../../src/toolbar/models/toolbarEvent.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_observable_combineLatest__ = __webpack_require__("../../../../rxjs/add/observable/combineLatest.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_rxjs_add_observable_combineLatest___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_rxjs_add_observable_combineLatest__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_operators__ = __webpack_require__("../../../../rxjs/operators.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_rxjs_operators___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_rxjs_operators__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var SelectionComponent = /** @class */ (function () {
    function SelectionComponent(configuration, currentDirectoryFilesService) {
        this.configuration = configuration;
        this.currentDirectoryFilesService = currentDirectoryFilesService;
        this.onMenuButtonClick = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.selectAllButton = new __WEBPACK_IMPORTED_MODULE_1__dropdown_Button_class__["a" /* ButtonClass */]({
            symbol: __WEBPACK_IMPORTED_MODULE_2__models_button_model__["a" /* Button */].SELECT_ALL,
            name: 'RI_FM_LBL_SELECT_ALL',
            label: true,
            icon: true,
            iconCssClass: 'fa fa-check-square-o'
        });
        this.unselectAllButton = new __WEBPACK_IMPORTED_MODULE_1__dropdown_Button_class__["a" /* ButtonClass */]({
            symbol: __WEBPACK_IMPORTED_MODULE_2__models_button_model__["a" /* Button */].UNSELECT_ALL,
            name: 'RI_FM_LBL_UNSELECT_ALL',
            label: true,
            icon: true,
            iconCssClass: 'fa fa-square-o'
        });
        this.inverseSelectionButton = new __WEBPACK_IMPORTED_MODULE_1__dropdown_Button_class__["a" /* ButtonClass */]({
            symbol: __WEBPACK_IMPORTED_MODULE_2__models_button_model__["a" /* Button */].INVERSE_SELECTION,
            name: 'RI_FM_LBL_INVERSE_SELECTION',
            label: true,
            icon: true,
            iconCssClass: 'fa fa-check-square'
        });
        this.deleteSelectionButton = new __WEBPACK_IMPORTED_MODULE_1__dropdown_Button_class__["a" /* ButtonClass */]({
            symbol: __WEBPACK_IMPORTED_MODULE_2__models_button_model__["a" /* Button */].DELETE_SELECTION,
            name: 'RI_FM_LBL_DELETE_SELECTION',
            label: true,
            icon: true,
            iconCssClass: 'fa fa-trash'
        });
        this.selectButtonsList = this.createBasicButtons();
        this.initListenOnLoadFiles();
    }
    SelectionComponent.prototype.ngOnDestroy = function () {
        this.onLoadFilesSubscriber.unsubscribe();
    };
    /**
     * Initialize listener on load files
     */
    SelectionComponent.prototype.initListenOnLoadFiles = function () {
        var _this = this;
        this.onLoadFilesSubscriber = __WEBPACK_IMPORTED_MODULE_7_rxjs_Observable__["Observable"].combineLatest(this.currentDirectoryFilesService.currentDirectoryFileIds$, this.currentDirectoryFilesService.selectedFiles$)
            .pipe(Object(__WEBPACK_IMPORTED_MODULE_9_rxjs_operators__["distinctUntilChanged"])())
            .subscribe(function (data) {
            var numberOfFiles = data[0].length;
            var numberOfSelectedFiles = data[1].length;
            _this.disableAllButtons();
            if (numberOfFiles > 0) {
                if (numberOfSelectedFiles > 0) {
                    _this.enableAllButtons();
                }
                else {
                    _this.enableSelectAllButton();
                }
            }
        });
    };
    SelectionComponent.prototype.onSelectDropdownClick = function (button) {
        var event = new __WEBPACK_IMPORTED_MODULE_6__models_toolbarEvent_model__["a" /* ToolbarEventModel */](button.symbol);
        this.onMenuButtonClick.emit(event);
    };
    /**
     * Disable all dropdown buttons and main button
     */
    SelectionComponent.prototype.disableAllButtons = function () {
        this.selectAllButton.disabled = true;
        this.selectButtonsList
            .filter(function (button) {
            return !button.isDivider();
        })
            .forEach(function (button) {
            button.disabled = true;
        });
    };
    /**
     * Enable all dropdown buttons and main button
     */
    SelectionComponent.prototype.enableAllButtons = function () {
        this.selectAllButton.disabled = false;
        this.selectButtonsList
            .forEach(function (button) {
            button.disabled = false;
        });
    };
    /**
     * Create list of buttons
     * @returns {IButton[]}
     */
    SelectionComponent.prototype.createBasicButtons = function () {
        return [
            this.selectAllButton,
            this.unselectAllButton,
            this.inverseSelectionButton,
            new __WEBPACK_IMPORTED_MODULE_3__dropdown_ButtonDivider_class__["a" /* ButtonDividerClass */](),
            this.deleteSelectionButton
        ];
    };
    /**
     * Enable only select button
     */
    SelectionComponent.prototype.enableSelectAllButton = function () {
        this.selectAllButton.disabled = false;
        this.inverseSelectionButton.disabled = false;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], SelectionComponent.prototype, "onMenuButtonClick", void 0);
    SelectionComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'ri-selection-dropdown',
            template: __webpack_require__("../../../../../src/toolbar/selectionDropDown/selection.dropdown.html")
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_5__configuration_fileManagerConfiguration_service__["a" /* FileManagerConfiguration */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__configuration_fileManagerConfiguration_service__["a" /* FileManagerConfiguration */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__services_currentDirectoryFiles_service__["a" /* CurrentDirectoryFilesService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__services_currentDirectoryFiles_service__["a" /* CurrentDirectoryFilesService */]) === "function" && _b || Object])
    ], SelectionComponent);
    return SelectionComponent;
    var _a, _b;
}());

//# sourceMappingURL=/home/www/projects/angular2-filemanager/demo/src/selection.component.js.map

/***/ }),

/***/ "../../../../../src/toolbar/selectionDropDown/selection.dropdown.html":
/***/ (function(module, exports) {

module.exports = "<ri-dropdown *ngIf=\"configuration.isMultiSelection\" [mainButton]=\"selectAllButton\" [buttons]=\"selectButtonsList\"\n             (onClick)=\"onSelectDropdownClick($event)\"></ri-dropdown>\n"

/***/ }),

/***/ "../../../../../src/toolbar/toolbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToolbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_button_model__ = __webpack_require__("../../../../../src/toolbar/models/button.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_toolbarEvent_model__ = __webpack_require__("../../../../../src/toolbar/models/toolbarEvent.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__configuration_fileManagerConfiguration_service__ = __webpack_require__("../../../../../src/configuration/fileManagerConfiguration.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__filesList_fileManagerUploader_service__ = __webpack_require__("../../../../../src/filesList/fileManagerUploader.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__store_fileManagerDispatcher_service__ = __webpack_require__("../../../../../src/store/fileManagerDispatcher.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ToolbarComponent = /** @class */ (function () {
    function ToolbarComponent(configuration, fileManagerUploader, fileManagerDispatcher) {
        var _this = this;
        this.configuration = configuration;
        this.fileManagerUploader = fileManagerUploader;
        this.fileManagerDispatcher = fileManagerDispatcher;
        this.onAddFolderClick = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.onUpload = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.onMenuButtonClick = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.fileManagerUploader.clear();
        this.fileManagerUploader.uploader.onCompleteAll = function () {
            _this.onUpload.emit(_this.currentFolderId || '');
        };
        this.fileManagerUploader.uploader.onCompleteItem = function (item, response, status, headers) {
            if (status === 200) {
                _this.fileManagerDispatcher.upload(JSON.parse(response));
            }
            else {
                _this.fileManagerDispatcher.uploadError(JSON.parse(response));
            }
        };
    }
    ToolbarComponent.prototype.ngOnChanges = function () {
        this.fileManagerUploader.setDirectoryId(this.currentFolderId || '');
    };
    ToolbarComponent.prototype.addFolder = function () {
        var event = new __WEBPACK_IMPORTED_MODULE_2__models_toolbarEvent_model__["a" /* ToolbarEventModel */](__WEBPACK_IMPORTED_MODULE_1__models_button_model__["a" /* Button */].ADD_FOLDER, 'Nowy folder');
        this.onAddFolderClick.emit(event);
    };
    ToolbarComponent.prototype.onRefreshFilesList = function () {
        var event = new __WEBPACK_IMPORTED_MODULE_2__models_toolbarEvent_model__["a" /* ToolbarEventModel */](__WEBPACK_IMPORTED_MODULE_1__models_button_model__["a" /* Button */].REFRESH_FILES_LIST);
        this.onMenuButtonClick.emit(event);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
        __metadata("design:type", String)
    ], ToolbarComponent.prototype, "currentFolderId", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], ToolbarComponent.prototype, "onAddFolderClick", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], ToolbarComponent.prototype, "onUpload", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
        __metadata("design:type", Object)
    ], ToolbarComponent.prototype, "onMenuButtonClick", void 0);
    ToolbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'ri-toolbar',
            styles: [__webpack_require__("../../../../../src/toolbar/toolbar.less")],
            template: __webpack_require__("../../../../../src/toolbar/toolbar.html")
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__configuration_fileManagerConfiguration_service__["a" /* FileManagerConfiguration */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__configuration_fileManagerConfiguration_service__["a" /* FileManagerConfiguration */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__filesList_fileManagerUploader_service__["a" /* FileManagerUploader */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__filesList_fileManagerUploader_service__["a" /* FileManagerUploader */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__store_fileManagerDispatcher_service__["a" /* FileManagerDispatcherService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__store_fileManagerDispatcher_service__["a" /* FileManagerDispatcherService */]) === "function" && _c || Object])
    ], ToolbarComponent);
    return ToolbarComponent;
    var _a, _b, _c;
}());

//# sourceMappingURL=/home/www/projects/angular2-filemanager/demo/src/toolbar.component.js.map

/***/ }),

/***/ "../../../../../src/toolbar/toolbar.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"toolbar row\">\n  <div class=\"col-md-6\">\n    <div class=\"btn-group\">\n      <button class=\"btn btn-default\" (click)=\"addFolder()\">\n        <i class=\"fa fa-plus\"></i>\n        <i class=\"fa fa-folder-o\"></i>\n      </button>\n      <button class=\"btn btn-default\" (click)=\"fileInput.click()\">\n        <i class=\"fa fa-plus\"></i>\n        <i class=\"fa fa-file-o\"></i>\n      </button>\n      <span class=\"hidden-input-file\">\n        <input #fileInput type=\"file\" ng2FileSelect [uploader]=\"fileManagerUploader.uploader\" (onCompleteAll)=\"onUpload()\" (onCompleteItem)=\"onUploadItem()\" multiple/>\n      </span>\n    </div>\n    <ri-selection-dropdown (onMenuButtonClick)=\"onMenuButtonClick.next($event)\"></ri-selection-dropdown>\n    <div class=\"btn-group\">\n      <button class=\"btn btn-default\" (click)=\"onRefreshFilesList()\">\n        <i class=\"fa fa-refresh\"></i>\n      </button>\n    </div>\n  </div>\n  <div class=\"col-md-3\">\n    <ri-file-type-filter [typeFilterList]=\"configuration.fileTypesFilter\"></ri-file-type-filter>\n  </div>\n  <div class=\"col-md-3\">\n    <ri-search-file></ri-search-file>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/toolbar/toolbar.less":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".toolbar {\n  margin-bottom: 10px;\n}\n.btn {\n  height: 34px;\n}\n.btn-file {\n  position: relative;\n  overflow: hidden;\n}\n.hidden-input-file {\n  visibility: hidden;\n  position: absolute;\n  overflow: hidden;\n  width: 0;\n  height: 0;\n  border: none;\n  margin: 0;\n  padding: 0;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../demo/src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map