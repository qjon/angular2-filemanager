webpackJsonp([1],{

/***/ "../../../../../demo/src async recursive":
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = "../../../../../demo/src async recursive";

/***/ }),

/***/ "../../../../../demo/src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n    <h1>Filemanager</h1>\r\n    <div class=\"configuration-bar\">\r\n        <button class=\"btn btn-primary\" (click)=\"toggleMultiSelection()\">\r\n            <i class=\"fa\" [ngClass]=\"{'fa-check-square': this.fileManagerConfiguration.isMultiSelection, 'fa-square': !this.fileManagerConfiguration.isMultiSelection}\"></i>\r\n            <span>Use multiselection</span>\r\n        </button>\r\n    </div>\r\n    <ri-filemanager>Loading...</ri-filemanager>\r\n</div>\r\n"

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__main__ = __webpack_require__("../../../../../main.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AppComponent = (function () {
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
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'app-root',
        template: __webpack_require__("../../../../../demo/src/app/app.component.html"),
        styles: [__webpack_require__("../../../../../demo/src/app/app.component.less")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__main__["b" /* FileManagerConfiguration */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__main__["b" /* FileManagerConfiguration */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__main__["c" /* FileManagerDispatcherService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__main__["c" /* FileManagerDispatcherService */]) === "function" && _b || Object])
], AppComponent);

var _a, _b;
//# sourceMappingURL=C:/ECTSP/angular2-filemanager/demo/src/app.component.js.map

/***/ }),

/***/ "../../../../../demo/src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_component__ = __webpack_require__("../../../../../demo/src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__main__ = __webpack_require__("../../../../../main.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
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
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["BrowserModule"],
            __WEBPACK_IMPORTED_MODULE_5__main__["a" /* FileManagerModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */]
        ],
        providers: [
            { provide: 'fileManagerConfiguration', useValue: fileManagerConfiguration }
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_4__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=C:/ECTSP/angular2-filemanager/demo/src/app.module.js.map

/***/ }),

/***/ "../../../../../demo/src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=C:/ECTSP/angular2-filemanager/demo/src/environment.js.map

/***/ }),

/***/ "../../../../../demo/src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/@angular/platform-browser-dynamic.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__("../../../../../demo/src/environments/environment.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__("../../../../../demo/src/app/app.module.ts");




if (__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=C:/ECTSP/angular2-filemanager/demo/src/main.js.map

/***/ }),

/***/ "../../../../../main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__src_store_fileManagerActions_service__ = __webpack_require__("../../../../../src/store/fileManagerActions.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__src_store_fileManagerApi_service__ = __webpack_require__("../../../../../src/store/fileManagerApi.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__src_store_fileManagerBackendApi_service__ = __webpack_require__("../../../../../src/store/fileManagerBackendApi.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__src_filemanager_component__ = __webpack_require__("../../../../../src/filemanager.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__src_configuration_fileManagerConfiguration_service__ = __webpack_require__("../../../../../src/configuration/fileManagerConfiguration.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__src_store_fileManagerDispatcher_service__ = __webpack_require__("../../../../../src/store/fileManagerDispatcher.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__src_filemanager_module__ = __webpack_require__("../../../../../src/filemanager.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__src_services_FilemanagerNotifcations__ = __webpack_require__("../../../../../src/services/FilemanagerNotifcations.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__src_filesList_fileManagerUploader_service__ = __webpack_require__("../../../../../src/filesList/fileManagerUploader.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__src_filesList_interface_ISelectFile__ = __webpack_require__("../../../../../src/filesList/interface/ISelectFile.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__src_filesList_interface_ISelectFile___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9__src_filesList_interface_ISelectFile__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__src_filesList_interface_IOuterFile__ = __webpack_require__("../../../../../src/filesList/interface/IOuterFile.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__src_filesList_interface_IOuterFile___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10__src_filesList_interface_IOuterFile__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__src_services_imageDataConverter_service__ = __webpack_require__("../../../../../src/services/imageDataConverter.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__src_store_IFileManagerApi__ = __webpack_require__("../../../../../src/store/IFileManagerApi.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__src_store_IFileManagerApi___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12__src_store_IFileManagerApi__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__src_configuration_IFileManagerConfiguration__ = __webpack_require__("../../../../../src/configuration/IFileManagerConfiguration.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__src_configuration_IFileManagerConfiguration___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13__src_configuration_IFileManagerConfiguration__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__src_crop_ICropBounds__ = __webpack_require__("../../../../../src/crop/ICropBounds.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__src_crop_ICropBounds___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14__src_crop_ICropBounds__);
/* unused harmony reexport FileManagerActionsService */
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return __WEBPACK_IMPORTED_MODULE_6__src_filemanager_module__["a"]; });
/* unused harmony reexport FileManagerBackendApiService */
/* unused harmony reexport FileManagerComponent */
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return __WEBPACK_IMPORTED_MODULE_4__src_configuration_fileManagerConfiguration_service__["a"]; });
/* harmony reexport (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return __WEBPACK_IMPORTED_MODULE_5__src_store_fileManagerDispatcher_service__["a"]; });
/* unused harmony reexport FileManagerUploader */
/* unused harmony reexport FilemanagerNotifcations */
/* unused harmony reexport FileManagerApiService */
/* unused harmony reexport ICropBounds */
/* unused harmony reexport IFileDataProperties */
/* unused harmony reexport IFileManagerApi */
/* unused harmony reexport IFileManagerConfiguration */
/* unused harmony reexport IOuterFile */
/* unused harmony reexport ISelectFile */
















//# sourceMappingURL=C:/ECTSP/angular2-filemanager/demo/src/main.js.map

/***/ }),

/***/ "../../../../../src/configuration/IFileManagerConfiguration.ts":
/***/ (function(module, exports) {

//# sourceMappingURL=C:/ECTSP/angular2-filemanager/demo/src/IFileManagerConfiguration.js.map

/***/ }),

/***/ "../../../../../src/configuration/fileManagerConfiguration.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__IFileManagerConfiguration__ = __webpack_require__("../../../../../src/configuration/IFileManagerConfiguration.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__IFileManagerConfiguration___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__IFileManagerConfiguration__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FileManagerConfiguration; });
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


var FileManagerConfiguration = (function () {
    function FileManagerConfiguration(configuration) {
        this.allowedCropSize = [
            {
                name: 'Landscape',
                width: 300,
                height: 100
            },
            {
                name: 'Portrait',
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
    return FileManagerConfiguration;
}());
FileManagerConfiguration = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __param(0, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])('fileManagerConfiguration')),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__IFileManagerConfiguration__["IFileManagerConfiguration"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__IFileManagerConfiguration__["IFileManagerConfiguration"]) === "function" && _a || Object])
], FileManagerConfiguration);

var _a;
//# sourceMappingURL=C:/ECTSP/angular2-filemanager/demo/src/fileManagerConfiguration.service.js.map

/***/ }),

/***/ "../../../../../src/configuration/tree.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__rign_angular2_tree__ = __webpack_require__("../../../../@rign/angular2-tree/main.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__IFileManagerConfiguration__ = __webpack_require__("../../../../../src/configuration/IFileManagerConfiguration.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__IFileManagerConfiguration___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__IFileManagerConfiguration__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TreeService; });
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




var TreeService = (function (_super) {
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
    return TreeService;
}(__WEBPACK_IMPORTED_MODULE_1__rign_angular2_tree__["c" /* NodeService */]));
TreeService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __param(1, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])('fileManagerConfiguration')),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__IFileManagerConfiguration__["IFileManagerConfiguration"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__IFileManagerConfiguration__["IFileManagerConfiguration"]) === "function" && _b || Object])
], TreeService);

var _a, _b;
//# sourceMappingURL=C:/ECTSP/angular2-filemanager/demo/src/tree.service.js.map

/***/ }),

/***/ "../../../../../src/crop/ICropBounds.ts":
/***/ (function(module, exports) {

//# sourceMappingURL=C:/ECTSP/angular2-filemanager/demo/src/ICropBounds.js.map

/***/ }),

/***/ "../../../../../src/crop/crop.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__filesList_file_model__ = __webpack_require__("../../../../../src/filesList/file.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ng2_img_cropper_src_cropperSettings__ = __webpack_require__("../../../../ng2-img-cropper/src/cropperSettings.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_img_cropper_src_imageCropperComponent__ = __webpack_require__("../../../../ng2-img-cropper/src/imageCropperComponent.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__configuration_fileManagerConfiguration_service__ = __webpack_require__("../../../../../src/configuration/fileManagerConfiguration.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__store_fileManagerDispatcher_service__ = __webpack_require__("../../../../../src/store/fileManagerDispatcher.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CropComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var CropComponent = (function () {
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
    return CropComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__filesList_file_model__["a" /* FileModel */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__filesList_file_model__["a" /* FileModel */]) === "function" && _a || Object)
], CropComponent.prototype, "file", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], CropComponent.prototype, "onCrop", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('container', { read: __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"] }),
    __metadata("design:type", typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewContainerRef"]) === "function" && _b || Object)
], CropComponent.prototype, "container", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('cropper'),
    __metadata("design:type", typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_ng2_img_cropper_src_imageCropperComponent__["a" /* ImageCropperComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_ng2_img_cropper_src_imageCropperComponent__["a" /* ImageCropperComponent */]) === "function" && _c || Object)
], CropComponent.prototype, "cropper", void 0);
CropComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'crop-image',
        styles: [__webpack_require__("../../../../../src/crop/crop.less")],
        template: "\n    <div class=\"crop-image\">\n      <div class=\"crop-workbench\">\n        <div #container></div>\n      </div>\n      <div class=\"btn-toolbar\">\n        <div class=\"btn-group\">\n          <button class=\"btn btn-primary\" *ngFor=\"let cropSize of cropSizeList\" (click)=\"updateCropSize(cropSize)\"\n                  [ngClass]=\"{'active': cropSize == currentCropSize}\">{{cropSize.name}}\n          </button>\n        </div>\n        <div class=\"btn-group pull-right\">\n          <button class=\"btn btn-success btn-icon\" (click)=\"cropImage()\">\n            <i class=\"fa fa-check\"></i>\n            <span>Save</span>\n          </button>\n        </div>\n      </div>\n    </div>\n  "
    }),
    __metadata("design:paramtypes", [typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_0__angular_core__["ComponentFactoryResolver"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_0__angular_core__["ComponentFactoryResolver"]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_4__configuration_fileManagerConfiguration_service__["a" /* FileManagerConfiguration */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__configuration_fileManagerConfiguration_service__["a" /* FileManagerConfiguration */]) === "function" && _e || Object, typeof (_f = typeof __WEBPACK_IMPORTED_MODULE_5__store_fileManagerDispatcher_service__["a" /* FileManagerDispatcherService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__store_fileManagerDispatcher_service__["a" /* FileManagerDispatcherService */]) === "function" && _f || Object])
], CropComponent);

var _a, _b, _c, _d, _e, _f;
//# sourceMappingURL=C:/ECTSP/angular2-filemanager/demo/src/crop.component.js.map

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__demo_src_environments_environment__ = __webpack_require__("../../../../../demo/src/environments/environment.ts");
/* harmony export (immutable) */ __webpack_exports__["a"] = log;

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
//# sourceMappingURL=C:/ECTSP/angular2-filemanager/demo/src/logFunction.decorator.js.map

/***/ }),

/***/ "../../../../../src/dropdown/IButton.ts":
/***/ (function(module, exports) {

//# sourceMappingURL=C:/ECTSP/angular2-filemanager/demo/src/IButton.js.map

/***/ }),

/***/ "../../../../../src/dropdown/dropdown.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__IButton__ = __webpack_require__("../../../../../src/dropdown/IButton.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__IButton___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__IButton__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DropdownComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var DropdownComponent = (function () {
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
    return DropdownComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__IButton__["IButton"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__IButton__["IButton"]) === "function" && _a || Object)
], DropdownComponent.prototype, "mainButton", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Array)
], DropdownComponent.prototype, "buttons", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], DropdownComponent.prototype, "onClick", void 0);
DropdownComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'ri-dropdown',
        styles: [__webpack_require__("../../../../../src/dropdown/dropdown.less")],
        template: __webpack_require__("../../../../../src/dropdown/dropdown.html")
    })
], DropdownComponent);

var _a;
//# sourceMappingURL=C:/ECTSP/angular2-filemanager/demo/src/dropdown.component.js.map

/***/ }),

/***/ "../../../../../src/dropdown/dropdown.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"btn-group dropdown\" [ngClass]=\"{'open': isOpen}\">\r\n  <button class=\"btn btn-default\" (click)=\"selectButton(mainButton)\">\r\n    <span *ngIf=\"mainButton.label\">{{mainButton.name}}</span>\r\n    <i *ngIf=\"mainButton.icon\" class=\"{{mainButton.iconCssClass}}\"></i>\r\n  </button>\r\n  <button class=\"btn btn-default dropdown-toggle\" (click)=\"toggleOpen()\">\r\n    <span class=\"caret\"></span>\r\n    <span class=\"sr-only\">Split button!</span>\r\n  </button>\r\n  <ul class=\"dropdown-menu\" role=\"menu\" aria-labelledby=\"single-button\" (mouseleave)=\"hide()\">\r\n    <!--<li class=\"divider\"></li>-->\r\n    <li role=\"menuitem\" *ngFor=\"let button of buttons\">\r\n      <a (click)=\"selectButton(button)\">\r\n        <span *ngIf=\"button.icon\" class=\"{{button.iconCssClass}}\"></span>\r\n        <span *ngIf=\"button.label\">{{button.name}}</span>\r\n      </a>\r\n    </li>\r\n  </ul>\r\n</div>\r\n"

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__services_fileTypeFilter_service__ = __webpack_require__("../../../../../src/services/fileTypeFilter.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__services_searchFilter_service__ = __webpack_require__("../../../../../src/services/searchFilter.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__store_fileManagerDispatcher_service__ = __webpack_require__("../../../../../src/store/fileManagerDispatcher.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__store_fileManagerEffects_service__ = __webpack_require__("../../../../../src/store/fileManagerEffects.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__store_fileManagerApi_service__ = __webpack_require__("../../../../../src/store/fileManagerApi.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__services_FilemanagerNotifcations__ = __webpack_require__("../../../../../src/services/FilemanagerNotifcations.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FileManagerComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


















var FileManagerComponent = (function () {
    function FileManagerComponent(store, treeActions, nodeDispatcherService, treeService, notifications, configuration, fileManagerDispatcher, fileTypeFilter, searchFilterService, fileManagerEffects, filemanagerNotifcations) {
        var _this = this;
        this.store = store;
        this.treeActions = treeActions;
        this.nodeDispatcherService = nodeDispatcherService;
        this.treeService = treeService;
        this.notifications = notifications;
        this.configuration = configuration;
        this.fileManagerDispatcher = fileManagerDispatcher;
        this.fileTypeFilter = fileTypeFilter;
        this.searchFilterService = searchFilterService;
        this.fileManagerEffects = fileManagerEffects;
        this.filemanagerNotifcations = filemanagerNotifcations;
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
        /**
         * Current folder all files
         * @typeObserv {Array}
         */
        this.currentFolderFilesList = [];
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
    }
    FileManagerComponent.prototype.ngOnInit = function () {
        var _this = this;
        /*** START - init TREE ***/
        var treeId = this.treeConfiguration.treeId;
        this.nodeDispatcherService.register(treeId, this.treeService);
        this.store.dispatch(this.treeActions.registerTree(treeId));
        this.folders = this.store.select('trees')
            .map(function (data) {
            return data[treeId];
        })
            .filter(function (data) { return !!data; });
        this.treeModel = new __WEBPACK_IMPORTED_MODULE_1__rign_angular2_tree__["d" /* TreeModel */](this.folders, this.treeConfiguration);
        /*** END - init TREE ***/
        /*** START - init files ***/
        this.files$ = this.store.select('files')
            .map(function (data) {
            return data.map(function (file) { return new __WEBPACK_IMPORTED_MODULE_2__filesList_file_model__["a" /* FileModel */](file); });
        });
        this.filteredFiles$ = __WEBPACK_IMPORTED_MODULE_10_rxjs_Observable__["Observable"].combineLatest(this.files$, this.fileTypeFilter.filter$, this.searchFilterService.filter$)
            .map(function (data) {
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
        });
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
                // this.files.forEach((file: IFileModel) => {
                //   if (file.selected) {
                //     this.removeSingleFile(file);
                //   }
                // });
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
    return FileManagerComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], FileManagerComponent.prototype, "onSingleFileSelect", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_1__rign_angular2_tree__["e" /* TreeComponent */]),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__rign_angular2_tree__["e" /* TreeComponent */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__rign_angular2_tree__["e" /* TreeComponent */]) === "function" && _a || Object)
], FileManagerComponent.prototype, "treeComponent", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])(__WEBPACK_IMPORTED_MODULE_7__filesList_filesList_component__["a" /* FilesListComponent */]),
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('window:keydown', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], FileManagerComponent.prototype, "keyEvents", null);
FileManagerComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'ri-filemanager',
        providers: [__WEBPACK_IMPORTED_MODULE_1__rign_angular2_tree__["c" /* NodeService */], __WEBPACK_IMPORTED_MODULE_4_angular2_notifications__["NotificationsService"]],
        styles: [__webpack_require__("../../../../../src/main.less")],
        template: __webpack_require__("../../../../../src/filemanager.html")
    }),
    __metadata("design:paramtypes", [typeof (_g = typeof __WEBPACK_IMPORTED_MODULE_11__ngrx_store__["b" /* Store */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_11__ngrx_store__["b" /* Store */]) === "function" && _g || Object, typeof (_h = typeof __WEBPACK_IMPORTED_MODULE_1__rign_angular2_tree__["f" /* TreeActionsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__rign_angular2_tree__["f" /* TreeActionsService */]) === "function" && _h || Object, typeof (_j = typeof __WEBPACK_IMPORTED_MODULE_1__rign_angular2_tree__["g" /* NodeDispatcherService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__rign_angular2_tree__["g" /* NodeDispatcherService */]) === "function" && _j || Object, typeof (_k = typeof __WEBPACK_IMPORTED_MODULE_16__store_fileManagerApi_service__["a" /* FileManagerApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_16__store_fileManagerApi_service__["a" /* FileManagerApiService */]) === "function" && _k || Object, typeof (_l = typeof __WEBPACK_IMPORTED_MODULE_4_angular2_notifications__["NotificationsService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4_angular2_notifications__["NotificationsService"]) === "function" && _l || Object, typeof (_m = typeof __WEBPACK_IMPORTED_MODULE_9__configuration_fileManagerConfiguration_service__["a" /* FileManagerConfiguration */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_9__configuration_fileManagerConfiguration_service__["a" /* FileManagerConfiguration */]) === "function" && _m || Object, typeof (_o = typeof __WEBPACK_IMPORTED_MODULE_14__store_fileManagerDispatcher_service__["a" /* FileManagerDispatcherService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_14__store_fileManagerDispatcher_service__["a" /* FileManagerDispatcherService */]) === "function" && _o || Object, typeof (_p = typeof __WEBPACK_IMPORTED_MODULE_12__services_fileTypeFilter_service__["a" /* FileTypeFilterService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_12__services_fileTypeFilter_service__["a" /* FileTypeFilterService */]) === "function" && _p || Object, typeof (_q = typeof __WEBPACK_IMPORTED_MODULE_13__services_searchFilter_service__["a" /* SearchFilterService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_13__services_searchFilter_service__["a" /* SearchFilterService */]) === "function" && _q || Object, typeof (_r = typeof __WEBPACK_IMPORTED_MODULE_15__store_fileManagerEffects_service__["a" /* FileManagerEffectsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_15__store_fileManagerEffects_service__["a" /* FileManagerEffectsService */]) === "function" && _r || Object, typeof (_s = typeof __WEBPACK_IMPORTED_MODULE_17__services_FilemanagerNotifcations__["a" /* FilemanagerNotifcations */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_17__services_FilemanagerNotifcations__["a" /* FilemanagerNotifcations */]) === "function" && _s || Object])
], FileManagerComponent);

var _a, _b, _c, _d, _e, _f, _g, _h, _j, _k, _l, _m, _o, _p, _q, _r, _s;
//# sourceMappingURL=C:/ECTSP/angular2-filemanager/demo/src/filemanager.component.js.map

/***/ }),

/***/ "../../../../../src/filemanager.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"filemanager-container\">\r\n  <div class=\"fm-header\">\r\n    <toolbar\r\n      #toolbar\r\n      [currentFolderId]=\"currentSelectedFolderId\"\r\n      (onAddFolderClick)=\"onAddFolder($event)\"\r\n      (onUpload)=\"onUpload($event)\"\r\n      (onMenuButtonClick)=\"onMenuButtonClick($event)\"\r\n    ></toolbar>\r\n  </div>\r\n  <div class=\"fm-main-box\">\r\n    <rign-tree class=\"folders-box\" [treeModel]=\"treeModel\"></rign-tree>\r\n    <ri-files-list class=\"files-box\" [files]=\"filteredFiles$ | async\"\r\n                (onPreviewFile)=\"onPreviewFile($event)\"\r\n                (onCropFile)=\"onOpenCropFileEditor($event)\"\r\n                (onSelectFile)=\"onSelectFile($event)\"\r\n    ></ri-files-list>\r\n  </div>\r\n  <div *ngIf=\"isPreviewMode || isCropMode\" class=\"backdrop\">\r\n    <div class=\"modal-view\">\r\n      <div class=\"modal-close\">\r\n        <i class=\"fa fa-2x fa-times\" (click)=\"closeModal()\"></i>\r\n      </div>\r\n      <ri-file-preview *ngIf=\"isPreviewMode\" [files]=\"filteredFiles$ | async\" [file]=\"currentSelectedFile\"></ri-file-preview>\r\n      <crop-image *ngIf=\"isCropMode\" [file]=\"currentSelectedFile\"></crop-image>\r\n    </div>\r\n  </div>\r\n  <simple-notifications [options]=\"notificationOptions\"></simple-notifications>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/filemanager.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__("../../../platform-browser/@angular/platform-browser.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__rign_angular2_tree__ = __webpack_require__("../../../../@rign/angular2-tree/main.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_notifications__ = __webpack_require__("../../../../angular2-notifications/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_angular2_notifications___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_angular2_notifications__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__filemanager_component__ = __webpack_require__("../../../../../src/filemanager.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__toolbar_toolbar_component__ = __webpack_require__("../../../../../src/toolbar/toolbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__filesList_filesList_component__ = __webpack_require__("../../../../../src/filesList/filesList.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_ng2_img_cropper__ = __webpack_require__("../../../../ng2-img-cropper/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__crop_crop_component__ = __webpack_require__("../../../../../src/crop/crop.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__preview_preview_component__ = __webpack_require__("../../../../../src/preview/preview.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__dropdown_dropdown_component__ = __webpack_require__("../../../../../src/dropdown/dropdown.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_ng2_file_upload__ = __webpack_require__("../../../../ng2-file-upload/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13_ng2_file_upload___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13_ng2_file_upload__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__configuration_fileManagerConfiguration_service__ = __webpack_require__("../../../../../src/configuration/fileManagerConfiguration.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__filesList_fileManagerUploader_service__ = __webpack_require__("../../../../../src/filesList/fileManagerUploader.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__configuration_tree_service__ = __webpack_require__("../../../../../src/configuration/tree.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ngrx_effects__ = __webpack_require__("../../../../@ngrx/effects/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__store_fileManagerEffects_service__ = __webpack_require__("../../../../../src/store/fileManagerEffects.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__store_fileManagerReducer__ = __webpack_require__("../../../../../src/store/fileManagerReducer.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__store_fileManagerActions_service__ = __webpack_require__("../../../../../src/store/fileManagerActions.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__ngrx_store_devtools__ = __webpack_require__("../../../../@ngrx/store-devtools/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__services_fileTypeFilter_service__ = __webpack_require__("../../../../../src/services/fileTypeFilter.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__services_searchFilter_service__ = __webpack_require__("../../../../../src/services/searchFilter.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__store_fileManagerDispatcher_service__ = __webpack_require__("../../../../../src/store/fileManagerDispatcher.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__toolbar_fileTypeFilter_fileTypeFilter_component__ = __webpack_require__("../../../../../src/toolbar/fileTypeFilter/fileTypeFilter.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__toolbar_searchFile_searchFile_component__ = __webpack_require__("../../../../../src/toolbar/searchFile/searchFile.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__store_fileManagerApi_service__ = __webpack_require__("../../../../../src/store/fileManagerApi.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__services_imageDataConverter_service__ = __webpack_require__("../../../../../src/services/imageDataConverter.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/@angular/platform-browser/animations.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__services_FilemanagerNotifcations__ = __webpack_require__("../../../../../src/services/FilemanagerNotifcations.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32_angular_confirmation_popover__ = __webpack_require__("../../../../angular-confirmation-popover/dist/esm/src/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__store_fileManagerBackendApi_service__ = __webpack_require__("../../../../../src/store/fileManagerBackendApi.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FileManagerModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


































var FileManagerModule = (function () {
    function FileManagerModule() {
    }
    return FileManagerModule;
}());
FileManagerModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["BrowserModule"],
            __WEBPACK_IMPORTED_MODULE_30__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
            __WEBPACK_IMPORTED_MODULE_32_angular_confirmation_popover__["a" /* ConfirmationPopoverModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_17__ngrx_effects__["a" /* EffectsModule */].run(__WEBPACK_IMPORTED_MODULE_18__store_fileManagerEffects_service__["a" /* FileManagerEffectsService */]),
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_13_ng2_file_upload__["FileUploadModule"],
            __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_forms__["b" /* ReactiveFormsModule */],
            __WEBPACK_IMPORTED_MODULE_5_angular2_notifications__["SimpleNotificationsModule"],
            __WEBPACK_IMPORTED_MODULE_19__ngrx_store__["a" /* StoreModule */].provideStore({ files: __WEBPACK_IMPORTED_MODULE_20__store_fileManagerReducer__["a" /* fileManagerReducer */], trees: __WEBPACK_IMPORTED_MODULE_4__rign_angular2_tree__["a" /* treeReducer */] }),
            __WEBPACK_IMPORTED_MODULE_22__ngrx_store_devtools__["a" /* StoreDevtoolsModule */].instrumentOnlyWithExtension({}),
            __WEBPACK_IMPORTED_MODULE_4__rign_angular2_tree__["b" /* TreeModule */]
        ],
        declarations: [
            __WEBPACK_IMPORTED_MODULE_6__filemanager_component__["a" /* FileManagerComponent */],
            __WEBPACK_IMPORTED_MODULE_26__toolbar_fileTypeFilter_fileTypeFilter_component__["a" /* FileTypeFilterComponent */],
            __WEBPACK_IMPORTED_MODULE_7__toolbar_toolbar_component__["a" /* ToolbarComponent */],
            __WEBPACK_IMPORTED_MODULE_8__filesList_filesList_component__["a" /* FilesListComponent */],
            __WEBPACK_IMPORTED_MODULE_12__dropdown_dropdown_component__["a" /* DropdownComponent */],
            __WEBPACK_IMPORTED_MODULE_11__preview_preview_component__["a" /* PreviewComponent */],
            __WEBPACK_IMPORTED_MODULE_10__crop_crop_component__["a" /* CropComponent */],
            __WEBPACK_IMPORTED_MODULE_9_ng2_img_cropper__["a" /* ImageCropperComponent */],
            __WEBPACK_IMPORTED_MODULE_27__toolbar_searchFile_searchFile_component__["a" /* SearchFileComponent */]
        ],
        entryComponents: [__WEBPACK_IMPORTED_MODULE_9_ng2_img_cropper__["a" /* ImageCropperComponent */]],
        providers: [
            __WEBPACK_IMPORTED_MODULE_21__store_fileManagerActions_service__["a" /* FileManagerActionsService */],
            __WEBPACK_IMPORTED_MODULE_28__store_fileManagerApi_service__["a" /* FileManagerApiService */],
            __WEBPACK_IMPORTED_MODULE_33__store_fileManagerBackendApi_service__["a" /* FileManagerBackendApiService */],
            __WEBPACK_IMPORTED_MODULE_14__configuration_fileManagerConfiguration_service__["a" /* FileManagerConfiguration */],
            __WEBPACK_IMPORTED_MODULE_25__store_fileManagerDispatcher_service__["a" /* FileManagerDispatcherService */],
            __WEBPACK_IMPORTED_MODULE_18__store_fileManagerEffects_service__["a" /* FileManagerEffectsService */],
            __WEBPACK_IMPORTED_MODULE_31__services_FilemanagerNotifcations__["a" /* FilemanagerNotifcations */],
            __WEBPACK_IMPORTED_MODULE_15__filesList_fileManagerUploader_service__["a" /* FileManagerUploader */],
            __WEBPACK_IMPORTED_MODULE_23__services_fileTypeFilter_service__["a" /* FileTypeFilterService */],
            __WEBPACK_IMPORTED_MODULE_29__services_imageDataConverter_service__["a" /* ImageDataConverter */],
            __WEBPACK_IMPORTED_MODULE_5_angular2_notifications__["NotificationsService"],
            __WEBPACK_IMPORTED_MODULE_24__services_searchFilter_service__["a" /* SearchFilterService */],
            __WEBPACK_IMPORTED_MODULE_16__configuration_tree_service__["a" /* TreeService */]
        ],
        exports: [__WEBPACK_IMPORTED_MODULE_6__filemanager_component__["a" /* FileManagerComponent */]],
        schemas: [__WEBPACK_IMPORTED_MODULE_0__angular_core__["CUSTOM_ELEMENTS_SCHEMA"]]
    })
], FileManagerModule);

//# sourceMappingURL=C:/ECTSP/angular2-filemanager/demo/src/filemanager.module.js.map

/***/ }),

/***/ "../../../../../src/filesList/file.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FileModel; });
var FileModel = (function () {
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
    return FileModel;
}());

FileModel.smallIconsFolder = '/icons/128px/';
FileModel.bigIconsFolder = '/icons/512px/';
//# sourceMappingURL=C:/ECTSP/angular2-filemanager/demo/src/file.model.js.map

/***/ }),

/***/ "../../../../../src/filesList/fileManagerUploader.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_extendedFileUplaoder_service__ = __webpack_require__("../../../../../src/services/extendedFileUplaoder.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__configuration_IFileManagerConfiguration__ = __webpack_require__("../../../../../src/configuration/IFileManagerConfiguration.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__configuration_IFileManagerConfiguration___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__configuration_IFileManagerConfiguration__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_FilemanagerNotifcations__ = __webpack_require__("../../../../../src/services/FilemanagerNotifcations.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FileManagerUploader; });
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




var FileManagerUploader = (function () {
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
    return FileManagerUploader;
}());
FileManagerUploader = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __param(0, __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Inject"])('fileManagerConfiguration')),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__configuration_IFileManagerConfiguration__["IFileManagerConfiguration"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__configuration_IFileManagerConfiguration__["IFileManagerConfiguration"]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__services_FilemanagerNotifcations__["a" /* FilemanagerNotifcations */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_FilemanagerNotifcations__["a" /* FilemanagerNotifcations */]) === "function" && _b || Object])
], FileManagerUploader);

var _a, _b;
//# sourceMappingURL=C:/ECTSP/angular2-filemanager/demo/src/fileManagerUploader.service.js.map

/***/ }),

/***/ "../../../../../src/filesList/files-list.less":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".files-list .file {\n  display: inline-block;\n  position: relative;\n  cursor: pointer;\n  text-align: center;\n  width: 140px;\n  height: 110px;\n  padding: 5px;\n  border: 1px solid #cccccc;\n  background-color: #eee;\n  border-radius: 10px;\n  margin: 0 0 20px 20px;\n}\n.files-list .file .file-img {\n  width: 128px;\n  height: 98px;\n  background-size: cover;\n  background-repeat: no-repeat;\n}\n.files-list .file .file-img.file-img-symbol {\n  background-size: contain;\n  background-position-x: 50%;\n}\n.files-list .file .file-name {\n  display: none;\n  position: absolute;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  text-align: center;\n  background-color: rgba(238, 238, 238, 0.5);\n}\n.files-list .file .file-menu {\n  display: none;\n  position: absolute;\n  top: 30%;\n  left: 0;\n  right: 0;\n  text-align: center;\n}\n.files-list .file .file-selection-input {\n  display: none;\n  position: absolute;\n  top: 3px;\n  left: 3px;\n  cursor: pointer;\n  z-index: 10;\n}\n.files-list .file:hover .file-img {\n  opacity: 0.3;\n}\n.files-list .file:hover .file-name,\n.files-list .file:hover .file-menu,\n.files-list .file:hover .file-selection-input {\n  display: block;\n}\n.files-list .file.selected {\n  border-color: #fff33a;\n  background-color: rgba(255, 243, 58, 0.5);\n}\n.files-list .file.selected .file-name {\n  background-color: rgba(255, 243, 58, 0.5);\n}\n.files-list .file.selected .file-menu,\n.files-list .file.selected .file-selection-input {\n  display: none;\n}\n.files-list .file.selected:hover .file-selection-input {\n  display: block;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/filesList/files.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"files-list\">\r\n  <div class=\"file\" *ngFor=\"let file of files\" [ngClass]=\"{'selected': file.selected}\" >\r\n    <div *ngIf=\"configuration.isMultiSelection\" class=\"file-selection-input\">\r\n      <i class=\"fa fa-2x\" [ngClass]=\"{'fa-check-square-o': file.selected, 'fa-square-o': !file.selected}\" (click)=\"toggleSelection(file)\"></i>\r\n    </div>\r\n    <div class=\"img-rounded file-img\" [ngClass]=\"{'file-img-symbol': !file.isImage()}\"\r\n         [style.background-image]=\"'url(' + file.thumbnailUrl + ')'\"></div>\r\n    <span class=\"file-name\">{{file.name}}</span>\r\n    <div class=\"file-menu\">\r\n      <button mwlConfirmationPopover [title]=\"removeTitle\" [message]=\"getRemoveMessage(file)\" [appendToBody]=\"true\"\r\n              [confirmText]=\"'Yes'\" [cancelText]=\"'No'\" placement=\"bottom\" (confirm)=\"deleteFile(file)\"\r\n              class=\"btn btn-danger btn-icon\">\r\n        <i class=\"fa fa-trash\"></i>\r\n      </button>\r\n      <button (click)=\"openPreview(file)\" class=\"btn btn-default btn-icon\">\r\n        <i class=\"fa fa-search\"></i>\r\n      </button>\r\n      <button (click)=\"openCrop(file)\" class=\"btn btn-default btn-icon\">\r\n        <i class=\"fa fa-crop\"></i>\r\n      </button>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/filesList/filesList.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__configuration_fileManagerConfiguration_service__ = __webpack_require__("../../../../../src/configuration/fileManagerConfiguration.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__store_fileManagerDispatcher_service__ = __webpack_require__("../../../../../src/store/fileManagerDispatcher.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_notifications__ = __webpack_require__("../../../../angular2-notifications/dist/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angular2_notifications___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_angular2_notifications__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__store_fileManagerEffects_service__ = __webpack_require__("../../../../../src/store/fileManagerEffects.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilesListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var FilesListComponent = (function () {
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
    /**
     * Select or unselect all files
     *
     * @param selected
     */
    FilesListComponent.prototype.allFilesSelection = function (selected) {
        if (selected === void 0) { selected = true; }
        this.files.map(function (file) { return file.selected = selected; });
    };
    /**
     * Select inversion
     */
    FilesListComponent.prototype.selectInversion = function () {
        this.files.map(function (file) { return file.selected = !file.selected; });
    };
    FilesListComponent.prototype.openPreview = function (file) {
        var fileEvent = {
            eventName: 'onPreviewFile',
            file: file
        };
        this.onPreviewFile.emit(fileEvent);
    };
    FilesListComponent.prototype.openCrop = function (file) {
        var fileEvent = {
            eventName: 'onCropFile',
            file: file
        };
        this.onCropFile.emit(fileEvent);
    };
    FilesListComponent.prototype.toggleSelection = function (file) {
        if (file.selected) {
            this.fileManagerDispatcher.unSelectFile(file);
        }
        else {
            this.fileManagerDispatcher.selectFile(file);
        }
    };
    return FilesListComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Array)
], FilesListComponent.prototype, "files", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], FilesListComponent.prototype, "onPreviewFile", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], FilesListComponent.prototype, "onCropFile", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], FilesListComponent.prototype, "onSelectFile", void 0);
FilesListComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'ri-files-list',
        template: __webpack_require__("../../../../../src/filesList/files.html"),
        styles: [__webpack_require__("../../../../../src/filesList/files-list.less")]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__configuration_fileManagerConfiguration_service__["a" /* FileManagerConfiguration */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__configuration_fileManagerConfiguration_service__["a" /* FileManagerConfiguration */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__store_fileManagerDispatcher_service__["a" /* FileManagerDispatcherService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__store_fileManagerDispatcher_service__["a" /* FileManagerDispatcherService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_3_angular2_notifications__["NotificationsService"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angular2_notifications__["NotificationsService"]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__store_fileManagerEffects_service__["a" /* FileManagerEffectsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__store_fileManagerEffects_service__["a" /* FileManagerEffectsService */]) === "function" && _d || Object])
], FilesListComponent);

var _a, _b, _c, _d;
//# sourceMappingURL=C:/ECTSP/angular2-filemanager/demo/src/filesList.component.js.map

/***/ }),

/***/ "../../../../../src/filesList/interface/IFileEvent.ts":
/***/ (function(module, exports) {

//# sourceMappingURL=C:/ECTSP/angular2-filemanager/demo/src/IFileEvent.js.map

/***/ }),

/***/ "../../../../../src/filesList/interface/IFileModel.ts":
/***/ (function(module, exports) {

//# sourceMappingURL=C:/ECTSP/angular2-filemanager/demo/src/IFileModel.js.map

/***/ }),

/***/ "../../../../../src/filesList/interface/IOuterFile.ts":
/***/ (function(module, exports) {

//# sourceMappingURL=C:/ECTSP/angular2-filemanager/demo/src/IOuterFile.js.map

/***/ }),

/***/ "../../../../../src/filesList/interface/ISelectFile.ts":
/***/ (function(module, exports) {

//# sourceMappingURL=C:/ECTSP/angular2-filemanager/demo/src/ISelectFile.js.map

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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__filesList_interface_IFileModel__ = __webpack_require__("../../../../../src/filesList/interface/IFileModel.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__filesList_interface_IFileModel___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__filesList_interface_IFileModel__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PreviewComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var PreviewComponent = (function () {
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
    return PreviewComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Array)
], PreviewComponent.prototype, "files", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__filesList_interface_IFileModel__["IFileModel"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__filesList_interface_IFileModel__["IFileModel"]) === "function" && _a || Object)
], PreviewComponent.prototype, "file", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["HostListener"])('window:keydown', ['$event']),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], PreviewComponent.prototype, "keyEvent", null);
PreviewComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'ri-file-preview',
        template: __webpack_require__("../../../../../src/preview/preview.html")
    })
], PreviewComponent);

var _a;
//# sourceMappingURL=C:/ECTSP/angular2-filemanager/demo/src/preview.component.js.map

/***/ }),

/***/ "../../../../../src/preview/preview.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"filemanager-preview\">\r\n  <div class=\"carousel slide\">\r\n    <div class=\"carousel-inner\" role=\"listbox\">\r\n      <div class=\"item\" *ngFor=\"let file of files; let i = index;\" [ngClass]=\"{'active': i == currentIndex}\">\r\n        <img class=\"img-rounded\" src=\"{{file.url}}\" alt=\"{{file.name}}\" style=\"margin: 0 auto;\">\r\n        <div class=\"carousel-caption\">{{file.name}}</div>\r\n      </div>\r\n    </div>\r\n    <a class=\"left carousel-control\" role=\"button\" (click)=\"prev()\" *ngIf=\"currentIndex != 0\">\r\n      <span class=\"glyphicon glyphicon-chevron-left\" aria-hidden=\"true\"></span>\r\n    </a>\r\n    <a class=\"right carousel-control\"role=\"button\" (click)=\"next()\" *ngIf=\"currentIndex + 1 < length\">\r\n      <span class=\"glyphicon glyphicon-chevron-right\" aria-hidden=\"true\"></span>\r\n    </a>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/services/FilemanagerNotifcations.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Subject__ = __webpack_require__("../../../../rxjs/Subject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Subject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_Subject__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FilemanagerNotifcations; });

var FilemanagerNotifcations = (function () {
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

//# sourceMappingURL=C:/ECTSP/angular2-filemanager/demo/src/FilemanagerNotifcations.js.map

/***/ }),

/***/ "../../../../../src/services/extendedFileUplaoder.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ng2_file_upload__ = __webpack_require__("../../../../ng2-file-upload/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_ng2_file_upload___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_ng2_file_upload__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__imageDataConverter_service__ = __webpack_require__("../../../../../src/services/imageDataConverter.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ExtendedFileUploader; });
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


var ExtendedFileUploader = (function (_super) {
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

//# sourceMappingURL=C:/ECTSP/angular2-filemanager/demo/src/extendedFileUplaoder.service.js.map

/***/ }),

/***/ "../../../../../src/services/fileTypeFilter.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__ = __webpack_require__("../../../../rxjs/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FileTypeFilterService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var FileTypeFilterService = (function () {
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
    return FileTypeFilterService;
}());
FileTypeFilterService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
], FileTypeFilterService);

//# sourceMappingURL=C:/ECTSP/angular2-filemanager/demo/src/fileTypeFilter.service.js.map

/***/ }),

/***/ "../../../../../src/services/imageDataConverter.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_uuid__ = __webpack_require__("../../../../angular2-uuid/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_angular2_uuid___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_angular2_uuid__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ImageDataConverter; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var ImageDataConverter = (function () {
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
            .concatMap(function (data) {
            properties.data = data;
            if (properties.type.indexOf('image') === 0) {
                return _this.getImageDimensions(data);
            }
            else {
                return __WEBPACK_IMPORTED_MODULE_0_rxjs_Observable__["Observable"].of({ width: 0, height: 0 });
            }
        })
            .map(function (dimensions) {
            properties.width = dimensions.width;
            properties.height = dimensions.height;
            return properties;
        });
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
        return __WEBPACK_IMPORTED_MODULE_0_rxjs_Observable__["Observable"].fromEvent(reader, 'load')
            .map(function () {
            return reader.result;
        });
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
    return ImageDataConverter;
}());
ImageDataConverter = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["Injectable"])()
], ImageDataConverter);

//# sourceMappingURL=C:/ECTSP/angular2-filemanager/demo/src/imageDataConverter.service.js.map

/***/ }),

/***/ "../../../../../src/services/searchFilter.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__ = __webpack_require__("../../../../rxjs/BehaviorSubject.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_BehaviorSubject__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchFilterService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var SearchFilterService = (function () {
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
    return SearchFilterService;
}());
SearchFilterService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
], SearchFilterService);

//# sourceMappingURL=C:/ECTSP/angular2-filemanager/demo/src/searchFilter.service.js.map

/***/ }),

/***/ "../../../../../src/store/IFileManagerApi.ts":
/***/ (function(module, exports) {

//# sourceMappingURL=C:/ECTSP/angular2-filemanager/demo/src/IFileManagerApi.js.map

/***/ }),

/***/ "../../../../../src/store/fileManagerActions.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FileManagerActionsService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var FileManagerActionsService = FileManagerActionsService_1 = (function () {
    function FileManagerActionsService() {
    }
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
    FileManagerActionsService.prototype.deleteSelectedFiles = function () {
        return {
            type: FileManagerActionsService_1.FILEMANAGER_DELETE_FILE_SELECTION,
            payload: {}
        };
    };
    FileManagerActionsService.prototype.deleteSelectedFilesSuccess = function (files) {
        return {
            type: FileManagerActionsService_1.FILEMANAGER_DELETE_FILE_SELECTION,
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
    return FileManagerActionsService;
}());
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
FileManagerActionsService.FILEMANAGER_SELECT_ALL = 'FILEMANAGER_SELECT_ALL';
FileManagerActionsService.FILEMANAGER_SELECT_FILE = 'FILEMANAGER_SELECT_FILE';
FileManagerActionsService.FILEMANAGER_UNSELECT_FILE = 'FILEMANAGER_UNSELECT_FILE';
FileManagerActionsService.FILEMANAGER_UNSELECT_ALL = 'FILEMANAGER_UNSELECT_ALL';
FileManagerActionsService.FILEMANAGER_UPLOAD_FILE = 'FILEMANAGER_UPLOAD_FILE';
FileManagerActionsService.FILEMANAGER_UPLOAD_FILE_ERROR = 'FILEMANAGER_UPLOAD_FILE_ERROR';
FileManagerActionsService.FILEMANAGER_UPLOAD_FILE_SUCCESS = 'FILEMANAGER_UPLOAD_FILE_SUCCESS';
FileManagerActionsService = FileManagerActionsService_1 = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])()
], FileManagerActionsService);

var FileManagerActionsService_1;
//# sourceMappingURL=C:/ECTSP/angular2-filemanager/demo/src/fileManagerActions.service.js.map

/***/ }),

/***/ "../../../../../src/store/fileManagerApi.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_uuid__ = __webpack_require__("../../../../angular2-uuid/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angular2_uuid___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_angular2_uuid__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_FilemanagerNotifcations__ = __webpack_require__("../../../../../src/services/FilemanagerNotifcations.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FileManagerApiService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FileManagerApiService = (function () {
    function FileManagerApiService(filemanagerNotfication) {
        this.filemanagerNotfication = filemanagerNotfication;
        this.treeName = 'fileManagerTree';
        this.fileManagerName = 'fileManagerFiles';
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
        var targetId = targetNode ? targetNode.id : null;
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
    return FileManagerApiService;
}());
FileManagerApiService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__services_FilemanagerNotifcations__["a" /* FilemanagerNotifcations */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__services_FilemanagerNotifcations__["a" /* FilemanagerNotifcations */]) === "function" && _a || Object])
], FileManagerApiService);

var _a;
//# sourceMappingURL=C:/ECTSP/angular2-filemanager/demo/src/fileManagerApi.service.js.map

/***/ }),

/***/ "../../../../../src/store/fileManagerBackendApi.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__("../../../http/@angular/http.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__configuration_fileManagerConfiguration_service__ = __webpack_require__("../../../../../src/configuration/fileManagerConfiguration.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FileManagerBackendApiService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var FileManagerBackendApiService = (function () {
    function FileManagerBackendApiService($http, configuration) {
        this.$http = $http;
        this.configuration = configuration;
        this.nodes = [];
        this.files = [];
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
        var params = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* URLSearchParams */]();
        params.append('nodeId', nodeId);
        return this.$http.get(this.configuration.folderUrls.foldersUrl, { search: params })
            .map(function (response) {
            return response.json();
        })
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
            .map(function (res) {
            return res.json();
        })
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
            .map(function (res) {
            return res.json();
        })
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
            .map(function (res) {
            var newNode = res.json();
            var index = _this.findIndexByNodeId(node.id);
            _this.nodes[index] = newNode.name;
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
            return this.$http.delete(this.configuration.folderUrls.foldersUrl, { body: { nodeId: nodeId } })
                .map(function (res) {
                var removedNode = res.json();
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
        return this.$http.put(this.configuration.fileUrl, { id: file.id, bounds: bounds })
            .map(function (res) {
            return res.json();
        });
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
        var params = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* URLSearchParams */]();
        params.append('dirId', nodeId);
        // return Observable.of([]);
        return this.$http.get(this.configuration.fileUrl, { search: params })
            .map(function (response) {
            return response.json();
        })
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
        var params = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["c" /* URLSearchParams */]();
        params.set('id', file.id.toString());
        return this.$http.delete(this.configuration.fileUrl, { search: params })
            .map(function (res) {
            _this.files.splice(index, 1);
            return true;
        });
    };
    /**
     * This method is success method, real upload is done in ExtendedFileUploader
     * @param {IOuterFile} file
     * @returns {Observable<IOuterFile>}
     */
    FileManagerBackendApiService.prototype.uploadFile = function (file) {
        var fileData = this.convertIOuterFile2LocalData(file);
        this.files.push(fileData);
        return __WEBPACK_IMPORTED_MODULE_1_rxjs_Observable__["Observable"].of(this.convertLocalData2IOuterFile(fileData));
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
    return FileManagerBackendApiService;
}());
FileManagerBackendApiService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_3__configuration_fileManagerConfiguration_service__["a" /* FileManagerConfiguration */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__configuration_fileManagerConfiguration_service__["a" /* FileManagerConfiguration */]) === "function" && _b || Object])
], FileManagerBackendApiService);

var _a, _b;
//# sourceMappingURL=C:/ECTSP/angular2-filemanager/demo/src/fileManagerBackendApi.service.js.map

/***/ }),

/***/ "../../../../../src/store/fileManagerDispatcher.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_store__ = __webpack_require__("../../../../@ngrx/store/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__fileManagerActions_service__ = __webpack_require__("../../../../../src/store/fileManagerActions.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FileManagerDispatcherService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FileManagerDispatcherService = (function () {
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
    FileManagerDispatcherService.prototype.deleteSelectedFiles = function () {
        this.store.dispatch(this.fileManagerActions.deleteSelectedFiles());
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
    return FileManagerDispatcherService;
}());
FileManagerDispatcherService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__ngrx_store__["b" /* Store */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ngrx_store__["b" /* Store */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__fileManagerActions_service__["a" /* FileManagerActionsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__fileManagerActions_service__["a" /* FileManagerActionsService */]) === "function" && _b || Object])
], FileManagerDispatcherService);

var _a, _b;
//# sourceMappingURL=C:/ECTSP/angular2-filemanager/demo/src/fileManagerDispatcher.service.js.map

/***/ }),

/***/ "../../../../../src/store/fileManagerEffects.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ngrx_effects__ = __webpack_require__("../../../../@ngrx/effects/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__fileManagerActions_service__ = __webpack_require__("../../../../../src/store/fileManagerActions.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__ = __webpack_require__("../../../../rxjs/Observable.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__fileManagerApi_service__ = __webpack_require__("../../../../../src/store/fileManagerApi.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__services_FilemanagerNotifcations__ = __webpack_require__("../../../../../src/services/FilemanagerNotifcations.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FileManagerEffectsService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var FileManagerEffectsService = (function () {
    function FileManagerEffectsService(actions$, fileManagerActions, filemanagerNotfication, fileManagerApiService) {
        var _this = this;
        this.actions$ = actions$;
        this.fileManagerActions = fileManagerActions;
        this.filemanagerNotfication = filemanagerNotfication;
        this.fileManagerApiService = fileManagerApiService;
        this.loadFiles$ = this.actions$
            .ofType(__WEBPACK_IMPORTED_MODULE_2__fileManagerActions_service__["a" /* FileManagerActionsService */].FILEMANAGER_LOAD_FILES)
            .switchMap(function (action) { return _this.loadFiles(action.payload.folderId)
            .map(function (files) {
            return _this.fileManagerActions.loadFilesSuccess(action.payload.folderId, files);
        })
            .catch(function () { return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"].of(_this.onLoadFilesError(action.payload.folderId)); }); });
        this.cropFile$ = this.actions$
            .ofType(__WEBPACK_IMPORTED_MODULE_2__fileManagerActions_service__["a" /* FileManagerActionsService */].FILEMANAGER_CROP_FILE)
            .switchMap(function (action) { return _this.cropFile(action.payload.file, action.payload.bounds)
            .map(function (result) {
            _this.filemanagerNotfication.sendNotification({
                type: 'success',
                title: 'Crop Image.',
                message: 'Image has been cropped.'
            });
            return _this.fileManagerActions.cropFileSuccess(action.payload.file);
        })
            .catch(function () { return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"].of(_this.fileManagerActions.cropFileError(action.payload.file)); }); });
        this.deleteFile$ = this.actions$
            .ofType(__WEBPACK_IMPORTED_MODULE_2__fileManagerActions_service__["a" /* FileManagerActionsService */].FILEMANAGER_DELETE_FILE)
            .switchMap(function (action) { return _this.deleteFile(action.payload.file)
            .map(function (result) {
            return _this.fileManagerActions.deleteFileSuccess(action.payload.file);
        })
            .catch(function () { return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"].of(_this.onDeleteFileError(action.payload.file)); }); });
        this.uploadFile$ = this.actions$
            .ofType(__WEBPACK_IMPORTED_MODULE_2__fileManagerActions_service__["a" /* FileManagerActionsService */].FILEMANAGER_UPLOAD_FILE)
            .switchMap(function (action) { return _this.uploadFile(action.payload.files[0])
            .map(function (result) {
            return _this.fileManagerActions.uploadSuccess(result);
        })
            .catch(function () {
            return __WEBPACK_IMPORTED_MODULE_3_rxjs_Observable__["Observable"].empty();
        }); });
        this.uploadError$ = this.actions$
            .ofType(__WEBPACK_IMPORTED_MODULE_2__fileManagerActions_service__["a" /* FileManagerActionsService */].FILEMANAGER_UPLOAD_FILE_ERROR)
            .map(function (action) {
            _this.filemanagerNotfication.sendNotification({
                type: 'alert',
                title: 'File upload',
                message: action.payload.file.name + " exists on the server in this directory"
            });
        });
        this.cropFileSuccess$ = this.actions$
            .ofType(__WEBPACK_IMPORTED_MODULE_2__fileManagerActions_service__["a" /* FileManagerActionsService */].FILEMANAGER_CROP_FILE_SUCCESS);
        this.cropFileError$ = this.actions$
            .ofType(__WEBPACK_IMPORTED_MODULE_2__fileManagerActions_service__["a" /* FileManagerActionsService */].FILEMANAGER_CROP_FILE_ERROR)
            .subscribe(function (action) {
            _this.onCropFileError(action.payload.file);
        });
        this.deleteFileSuccess$ = this.actions$
            .ofType(__WEBPACK_IMPORTED_MODULE_2__fileManagerActions_service__["a" /* FileManagerActionsService */].FILEMANAGER_DELETE_FILE_SUCCESS);
    }
    FileManagerEffectsService.prototype.cropFile = function (file, bounds) {
        return this.fileManagerApiService.cropFile(file.toJSON(), bounds);
    };
    FileManagerEffectsService.prototype.deleteFile = function (file) {
        return this.fileManagerApiService.removeFile(file.toJSON());
    };
    FileManagerEffectsService.prototype.loadFiles = function (folderId) {
        return this.fileManagerApiService.loadFiles(folderId);
    };
    FileManagerEffectsService.prototype.uploadFile = function (file) {
        return this.fileManagerApiService.uploadFile(file);
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
    FileManagerEffectsService.prototype.onLoadFilesError = function (folderId) {
        this.filemanagerNotfication.sendNotification({
            type: 'error',
            title: 'Load files',
            message: '[FILEMANAGER] Can not load files for folder ' + folderId
        });
    };
    return FileManagerEffectsService;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ngrx_effects__["c" /* Effect */])(),
    __metadata("design:type", Object)
], FileManagerEffectsService.prototype, "loadFiles$", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ngrx_effects__["c" /* Effect */])(),
    __metadata("design:type", Object)
], FileManagerEffectsService.prototype, "cropFile$", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ngrx_effects__["c" /* Effect */])(),
    __metadata("design:type", Object)
], FileManagerEffectsService.prototype, "deleteFile$", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__ngrx_effects__["c" /* Effect */])(),
    __metadata("design:type", Object)
], FileManagerEffectsService.prototype, "uploadFile$", void 0);
FileManagerEffectsService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__ngrx_effects__["b" /* Actions */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__ngrx_effects__["b" /* Actions */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__fileManagerActions_service__["a" /* FileManagerActionsService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__fileManagerActions_service__["a" /* FileManagerActionsService */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__services_FilemanagerNotifcations__["a" /* FilemanagerNotifcations */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__services_FilemanagerNotifcations__["a" /* FilemanagerNotifcations */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_4__fileManagerApi_service__["a" /* FileManagerApiService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__fileManagerApi_service__["a" /* FileManagerApiService */]) === "function" && _d || Object])
], FileManagerEffectsService);

var _a, _b, _c, _d;
//# sourceMappingURL=C:/ECTSP/angular2-filemanager/demo/src/fileManagerEffects.service.js.map

/***/ }),

/***/ "../../../../../src/store/fileManagerReducer.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__fileManagerActions_service__ = __webpack_require__("../../../../../src/store/fileManagerActions.service.ts");
/* harmony export (immutable) */ __webpack_exports__["a"] = fileManagerReducer;

function cropFile(state, action) {
    var newState = state.slice();
    for (var i in state) {
        if (newState[i].id === action.payload.file.getId()) {
            newState[i] = action.payload.file.toJSON();
        }
    }
    return newState;
}
function inverseFilesSelection(state) {
    return state.map(function (file) {
        file.selected = !file.selected;
        return file;
    });
}
function loadFiles(state, action) {
    return action.payload.files.slice();
}
function removeFile(state, action) {
    var id = action.payload.file.getId();
    return state.filter(function (file) { return file.id !== id; }).slice();
}
function removeSelectedFiles(state) {
    return state.filter(function (file) { return !file.selected; }).slice();
}
function selectFile(state, action) {
    return state.map(function (file) {
        if (file.id === action.payload.file.getId()) {
            file.selected = true;
            return copyOuterFile(file);
        }
        return file;
    });
}
function selectAllFiles(state) {
    var newState = state.slice();
    return newState.map(function (file) {
        file.selected = true;
        return file;
    });
}
function uploadFiles(state, action) {
    return state.concat(action.payload.files);
}
function unSelectAllFiles(state) {
    return state.map(function (file) {
        file.selected = false;
        return file;
    });
}
function unSelectFile(state, action) {
    var file = getFileById(state, action.payload.file.getId());
    file.selected = false;
    return state.slice();
}
function getFileById(state, id) {
    var files = state.filter(function (file) { return file.id === id; });
    return files.length > 0 ? files[0] : null;
}
function copyOuterFile(inputFile) {
    var id = inputFile.id, folderId = inputFile.folderId, name = inputFile.name, thumbnailUrl = inputFile.thumbnailUrl, url = inputFile.url, width = inputFile.width, height = inputFile.height, type = inputFile.type, data = inputFile.data, size = inputFile.size, selected = inputFile.selected;
    return { id: id, folderId: folderId, name: name, thumbnailUrl: thumbnailUrl, url: url, width: width, height: height, type: type, data: data, size: size, selected: selected };
}
function fileManagerReducer(state, action) {
    if (state === void 0) { state = []; }
    switch (action.type) {
        case __WEBPACK_IMPORTED_MODULE_0__fileManagerActions_service__["a" /* FileManagerActionsService */].FILEMANAGER_CROP_FILE_SUCCESS:
            return cropFile(state, action);
        case __WEBPACK_IMPORTED_MODULE_0__fileManagerActions_service__["a" /* FileManagerActionsService */].FILEMANAGER_INVERSE_FILE_SELECTION:
            return inverseFilesSelection(state);
        case __WEBPACK_IMPORTED_MODULE_0__fileManagerActions_service__["a" /* FileManagerActionsService */].FILEMANAGER_DELETE_FILE_SELECTION:
            return removeSelectedFiles(state);
        case __WEBPACK_IMPORTED_MODULE_0__fileManagerActions_service__["a" /* FileManagerActionsService */].FILEMANAGER_DELETE_FILE_SUCCESS:
            return removeFile(state, action);
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
        case __WEBPACK_IMPORTED_MODULE_0__fileManagerActions_service__["a" /* FileManagerActionsService */].FILEMANAGER_DELETE_FILE_SELECTION_SUCCESS:
        case __WEBPACK_IMPORTED_MODULE_0__fileManagerActions_service__["a" /* FileManagerActionsService */].FILEMANAGER_CROP_FILE:
        case __WEBPACK_IMPORTED_MODULE_0__fileManagerActions_service__["a" /* FileManagerActionsService */].FILEMANAGER_DELETE_FILE:
        case __WEBPACK_IMPORTED_MODULE_0__fileManagerActions_service__["a" /* FileManagerActionsService */].FILEMANAGER_LOAD_FILES:
            return state;
        default:
            return state;
    }
}
//# sourceMappingURL=C:/ECTSP/angular2-filemanager/demo/src/fileManagerReducer.js.map

/***/ }),

/***/ "../../../../../src/toolbar/fileTypeFilter/fileTypeFilter.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"btn-group\">\r\n  <button *ngFor=\"let type of typeFilterList\" class=\"btn btn-default\" [ngClass]=\"{'active': type === selectedType}\"\r\n          (click)=\"setFilterType(type)\">\r\n    <i class=\"{{type.iconCls}}\"></i>\r\n  </button>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/toolbar/fileTypeFilter/fileTypeFilter.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_fileTypeFilter_service__ = __webpack_require__("../../../../../src/services/fileTypeFilter.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FileTypeFilterComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FileTypeFilterComponent = (function () {
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
    return FileTypeFilterComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", Array)
], FileTypeFilterComponent.prototype, "typeFilterList", void 0);
FileTypeFilterComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'ri-file-type-filter',
        template: __webpack_require__("../../../../../src/toolbar/fileTypeFilter/fileTypeFilter.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__services_fileTypeFilter_service__["a" /* FileTypeFilterService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__services_fileTypeFilter_service__["a" /* FileTypeFilterService */]) === "function" && _a || Object])
], FileTypeFilterComponent);

var _a;
//# sourceMappingURL=C:/ECTSP/angular2-filemanager/demo/src/fileTypeFilter.component.js.map

/***/ }),

/***/ "../../../../../src/toolbar/interface/IToolbarEvent.ts":
/***/ (function(module, exports) {

//# sourceMappingURL=C:/ECTSP/angular2-filemanager/demo/src/IToolbarEvent.js.map

/***/ }),

/***/ "../../../../../src/toolbar/models/button.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Button; });
var Button = (function () {
    function Button() {
    }
    return Button;
}());

Button.ADD_FOLDER = 'ADD_FOLDER';
Button.DELETE_SELECTION = 'DELETE_SELECTION';
Button.INVERSE_SELECTION = 'INVERSE_SELECTION';
Button.REFRESH_FILES_LIST = 'REFRESH_FILES_LIST';
Button.SELECT_ALL = 'SELECT_ALL';
Button.UNSELECT_ALL = 'UNSELECT_ALL';
//# sourceMappingURL=C:/ECTSP/angular2-filemanager/demo/src/button.model.js.map

/***/ }),

/***/ "../../../../../src/toolbar/models/toolbarEvent.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToolbarEventModel; });
var ToolbarEventModel = (function () {
    function ToolbarEventModel(name, value) {
        if (value === void 0) { value = null; }
        this.name = name;
        this.value = value;
    }
    return ToolbarEventModel;
}());

//# sourceMappingURL=C:/ECTSP/angular2-filemanager/demo/src/toolbarEvent.model.js.map

/***/ }),

/***/ "../../../../../src/toolbar/searchFile/searchFile.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"input-group\">\r\n  <input [formControl]=\"searchField\" type=\"text\" class=\"form-control\" placeholder=\"Search for...\">\r\n  <span class=\"input-group-btn\">\r\n      <button (click)=\"searchField.reset('')\" class=\"btn btn-default\" type=\"button\">\r\n          <i class=\"fa fa-times\"></i>\r\n      </button>\r\n  </span>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/toolbar/searchFile/searchFile.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/@angular/forms.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_searchFilter_service__ = __webpack_require__("../../../../../src/services/searchFilter.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchFileComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var SearchFileComponent = (function () {
    function SearchFileComponent(searchFilterService) {
        this.searchFilterService = searchFilterService;
        this.searchField = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["c" /* FormControl */]();
    }
    SearchFileComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.searchField.valueChanges
            .debounceTime(250)
            .subscribe(function (value) { return _this.searchFilterService.setValue(value); });
    };
    return SearchFileComponent;
}());
SearchFileComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'ri-search-file',
        template: __webpack_require__("../../../../../src/toolbar/searchFile/searchFile.component.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__services_searchFilter_service__["a" /* SearchFilterService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__services_searchFilter_service__["a" /* SearchFilterService */]) === "function" && _a || Object])
], SearchFileComponent);

var _a;
//# sourceMappingURL=C:/ECTSP/angular2-filemanager/demo/src/searchFile.component.js.map

/***/ }),

/***/ "../../../../../src/toolbar/toolbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/@angular/core.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__models_button_model__ = __webpack_require__("../../../../../src/toolbar/models/button.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__models_toolbarEvent_model__ = __webpack_require__("../../../../../src/toolbar/models/toolbarEvent.model.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__configuration_fileManagerConfiguration_service__ = __webpack_require__("../../../../../src/configuration/fileManagerConfiguration.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__filesList_fileManagerUploader_service__ = __webpack_require__("../../../../../src/filesList/fileManagerUploader.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__store_fileManagerDispatcher_service__ = __webpack_require__("../../../../../src/store/fileManagerDispatcher.service.ts");
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ToolbarComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var ToolbarComponent = (function () {
    function ToolbarComponent(configuration, fileManagerUploader, fileManagerDispatcher) {
        var _this = this;
        this.configuration = configuration;
        this.fileManagerUploader = fileManagerUploader;
        this.fileManagerDispatcher = fileManagerDispatcher;
        this.onAddFolderClick = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.onUpload = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.onMenuButtonClick = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.selectAllButton = {
            symbol: __WEBPACK_IMPORTED_MODULE_1__models_button_model__["a" /* Button */].SELECT_ALL,
            name: 'Select all',
            label: false,
            icon: true,
            iconCssClass: 'fa fa-check-square-o'
        };
        this.selectButtonsList = [
            { symbol: __WEBPACK_IMPORTED_MODULE_1__models_button_model__["a" /* Button */].SELECT_ALL, name: 'Select all', label: true, icon: true, iconCssClass: 'fa fa-check-square-o' },
            { symbol: __WEBPACK_IMPORTED_MODULE_1__models_button_model__["a" /* Button */].UNSELECT_ALL, name: 'Unselect all', label: true, icon: true, iconCssClass: 'fa fa-square-o' },
            {
                symbol: __WEBPACK_IMPORTED_MODULE_1__models_button_model__["a" /* Button */].INVERSE_SELECTION,
                name: 'Inverse selection',
                label: true,
                icon: true,
                iconCssClass: 'fa fa-check-square'
            }
        ];
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
    ToolbarComponent.prototype.onSelectDropdownClick = function (button) {
        var event = new __WEBPACK_IMPORTED_MODULE_2__models_toolbarEvent_model__["a" /* ToolbarEventModel */](button.symbol);
        this.onMenuButtonClick.emit(event);
    };
    ToolbarComponent.prototype.onRefreshFilesList = function () {
        var event = new __WEBPACK_IMPORTED_MODULE_2__models_toolbarEvent_model__["a" /* ToolbarEventModel */](__WEBPACK_IMPORTED_MODULE_1__models_button_model__["a" /* Button */].REFRESH_FILES_LIST);
        this.onMenuButtonClick.emit(event);
    };
    return ToolbarComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Input"])(),
    __metadata("design:type", String)
], ToolbarComponent.prototype, "currentFolderId", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], ToolbarComponent.prototype, "onAddFolderClick", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], ToolbarComponent.prototype, "onUpload", void 0);
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(),
    __metadata("design:type", Object)
], ToolbarComponent.prototype, "onMenuButtonClick", void 0);
ToolbarComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
        selector: 'toolbar',
        styles: [__webpack_require__("../../../../../src/toolbar/toolbar.less")],
        template: __webpack_require__("../../../../../src/toolbar/toolbar.html")
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_3__configuration_fileManagerConfiguration_service__["a" /* FileManagerConfiguration */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3__configuration_fileManagerConfiguration_service__["a" /* FileManagerConfiguration */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_4__filesList_fileManagerUploader_service__["a" /* FileManagerUploader */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_4__filesList_fileManagerUploader_service__["a" /* FileManagerUploader */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_5__store_fileManagerDispatcher_service__["a" /* FileManagerDispatcherService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_5__store_fileManagerDispatcher_service__["a" /* FileManagerDispatcherService */]) === "function" && _c || Object])
], ToolbarComponent);

var _a, _b, _c;
//# sourceMappingURL=C:/ECTSP/angular2-filemanager/demo/src/toolbar.component.js.map

/***/ }),

/***/ "../../../../../src/toolbar/toolbar.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"toolbar row\">\r\n  <div class=\"col-md-6\">\r\n    <div class=\"btn-group\">\r\n      <button class=\"btn btn-default\" (click)=\"addFolder()\">\r\n        <i class=\"fa fa-plus\"></i>\r\n        <i class=\"fa fa-folder-o\"></i>\r\n      </button>\r\n      <button class=\"btn btn-default\" (click)=\"fileInput.click()\">\r\n        <i class=\"fa fa-plus\"></i>\r\n        <i class=\"fa fa-file-o\"></i>\r\n      </button>\r\n      <span class=\"hidden-input-file\">\r\n        <input #fileInput type=\"file\" ng2FileSelect [uploader]=\"fileManagerUploader.uploader\" (onCompleteAll)=\"onUpload()\" (onCompleteItem)=\"onUploadItem()\" multiple/>\r\n      </span>\r\n    </div>\r\n    <ri-dropdown *ngIf=\"configuration.isMultiSelection\" [mainButton]=\"selectAllButton\" [buttons]=\"selectButtonsList\"\r\n              (onClick)=\"onSelectDropdownClick($event)\"></ri-dropdown>\r\n    <div class=\"btn-group\">\r\n      <button class=\"btn btn-default\" (click)=\"onRefreshFilesList()\">\r\n        <i class=\"fa fa-refresh\"></i>\r\n      </button>\r\n    </div>\r\n  </div>\r\n  <div class=\"col-md-3\">\r\n    <ri-file-type-filter [typeFilterList]=\"configuration.fileTypesFilter\"></ri-file-type-filter>\r\n  </div>\r\n  <div class=\"col-md-3\">\r\n    <ri-search-file></ri-search-file>\r\n  </div>\r\n</div>\r\n"

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