(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["banner-banner-module-banner-module"],{

/***/ "./src/_Pipes/VideoSafe.pipe.ts":
/*!**************************************!*\
  !*** ./src/_Pipes/VideoSafe.pipe.ts ***!
  \**************************************/
/*! exports provided: VideoSafe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoSafe", function() { return VideoSafe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/platform-browser/fesm5/platform-browser.js");



var VideoSafe = /** @class */ (function () {
    function VideoSafe(sanitizer) {
        this.sanitizer = sanitizer;
    }
    VideoSafe.prototype.transform = function (url) {
        return this.sanitizer.bypassSecurityTrustResourceUrl(url);
    };
    VideoSafe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({ name: 'safe' }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"]])
    ], VideoSafe);
    return VideoSafe;
}());



/***/ }),

/***/ "./src/app/about-us/about-us.component.html":
/*!**************************************************!*\
  !*** ./src/app/about-us/about-us.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\t<div class=\"container pt10 pl10 pr10 pb50\" >\r\n    <form #f=\"ngForm\" (ngSubmit)=\" f.valid && submitDetail()\">\r\n      <div class=\"row\">\r\n        <div class=\"col s12\">\r\n          <div class=\"card pb0\">\r\n            <div class=\"card-head\">\r\n              <h2>About Us Information</h2>\r\n            </div>\r\n            <div class=\"card-body cs-form\">\r\n              <div class=\"row\">\r\n                <div class=\"col s12 m2 l2\" >\r\n                  <div class=\"edit-picture\">\r\n                    <label>\r\n                      <input type=\"file\" [disabled]=\"logined_user_data.edit_gallery_master!='1'\" (change)=\"onUploadChange1($event)\" #fileInput style=\"display:none;\" accept=\".png, .jpg, .jpeg\" required />\r\n                      <img  [src]=\"img_id ? url+data.profile_img : data.profile_img\" alt=\"\" id=\"img\" *ngIf=\"data.profile_img != null\">\r\n                      <i class=\"material-icons add-file-icon\" matRipple *ngIf=\"logined_user_data.edit_gallery_master=='1'\">create</i>\r\n                    </label>\r\n                  </div>\r\n                </div>\r\n                <div class=\"col s12 m10 l10\">\r\n                  <app-ngx-editor height=\"200px\" minHeight=\"50px\" [config]=\"editorConfig\"  [placeholder]=\"'Type Here'\" [spellcheck]=\"true\" name=\"about_us\" [(ngModel)]=\"data.about_us\"></app-ngx-editor>\r\n                  \r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      \r\n      <div class=\"row\">\r\n        <div class=\"col s12\">\r\n          <div class=\"text-right\">\r\n            <button [ngClass]=\"{'loading': savingFlag == true}\" *ngIf=\"logined_user_data.edit_gallery_master=='1'\" mat-raised-button color=\"accent\" type=\"submit\" [disabled]=\"savingFlag == true\">\r\n              {{savingFlag == true ? 'Saving' : (data.id ? 'Update' : 'Save')}}\r\n            </button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      \r\n    </form>\r\n  </div>\r\n  \r\n  \r\n  "

/***/ }),

/***/ "./src/app/about-us/about-us.component.ts":
/*!************************************************!*\
  !*** ./src/app/about-us/about-us.component.ts ***!
  \************************************************/
/*! exports provided: AboutUsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutUsComponent", function() { return AboutUsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng6-toastr-notifications */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/ng6-toastr-notifications/fesm5/ng6-toastr-notifications.js");
/* harmony import */ var src_services_DatabaseService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/_services/DatabaseService */ "./src/_services/DatabaseService.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _localstorage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../localstorage.service */ "./src/app/localstorage.service.ts");






var AboutUsComponent = /** @class */ (function () {
    function AboutUsComponent(service, session, toast, router, route) {
        this.service = service;
        this.session = session;
        this.toast = toast;
        this.router = router;
        this.route = route;
        this.savingFlag = false;
        this.data = {};
        this.assign_login_data = {};
        this.logined_user_data = {};
        this.editorConfig = {
            editable: true,
            spellcheck: false,
            height: '10rem',
            minHeight: '5rem',
            placeholder: '',
            translate: 'no',
            "toolbar": [
                ["bold", "italic", "underline", "strikeThrough", "superscript", "subscript"],
                ["fontName", "fontSize", "color"],
                ["justifyLeft", "justifyCenter", "justifyRight", "justifyFull", "indent", "outdent"],
                ["cut", "copy", "delete", "removeFormat", "undo", "redo"],
                ["paragraph", "blockquote", "removeBlockquote", "horizontalLine", "orderedList", "unorderedList"],
            ]
        };
        this.assign_login_data = this.session.getSession();
        this.logined_user_data = this.assign_login_data.value.data;
        this.url = this.service.uploadUrl + 'about/';
    }
    AboutUsComponent.prototype.ngOnInit = function () {
        this.profileDetail();
    };
    AboutUsComponent.prototype.profileDetail = function () {
        var _this = this;
        // this.savingFlag = true;
        this.service.post_rqst({}, 'Master/aboutDetail').subscribe(function (resp) {
            if (resp['statusCode'] == 200) {
                _this.data.about_us = resp['about_detail']['about_us'];
                _this.data.profile_img = resp['about_detail']['profile_img'];
                _this.data.id = resp['about_detail']['id'];
                _this.img_id = _this.data.id;
            }
            else {
                _this.toast.errorToastr(resp['statusMsg']);
            }
        });
    };
    AboutUsComponent.prototype.onUploadChange1 = function (evt) {
        var file = evt.target.files[0];
        if (file) {
            this.img_id = '';
            var reader = new FileReader();
            reader.onload = this.handleReaderLoaded1.bind(this);
            reader.readAsBinaryString(file);
        }
        else {
            this.img_id = this.data.id;
        }
    };
    AboutUsComponent.prototype.handleReaderLoaded1 = function (e) {
        this.data.profile_img = 'data:image/png;base64,' + btoa(e.target.result);
    };
    AboutUsComponent.prototype.submitDetail = function () {
        var _this = this;
        this.data.created_by_id = this.logined_user_data.id;
        this.data.created_by_name = this.logined_user_data.name;
        this.savingFlag = true;
        this.service.post_rqst(this.data, 'Master/companyProfile')
            .subscribe(function (resp) {
            _this.savingFlag = false;
            if (resp['statusCode'] == 200) {
                _this.toast.successToastr(resp['statusMsg']);
                _this.savingFlag = false;
            }
            else {
                _this.toast.errorToastr(resp['statusMsg']);
                _this.savingFlag = false;
            }
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('fileInput'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], AboutUsComponent.prototype, "fileInput", void 0);
    AboutUsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-about-us',
            template: __webpack_require__(/*! ./about-us.component.html */ "./src/app/about-us/about-us.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_services_DatabaseService__WEBPACK_IMPORTED_MODULE_3__["DatabaseService"], _localstorage_service__WEBPACK_IMPORTED_MODULE_5__["sessionStorage"], ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_2__["ToastrManager"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])
    ], AboutUsComponent);
    return AboutUsComponent;
}());



/***/ }),

/***/ "./src/app/banner/banner-add/banner-add.component.html":
/*!*************************************************************!*\
  !*** ./src/app/banner/banner-add/banner-add.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-container\" >\r\n\t<!-- <app-loader *ngIf=\"loader\"></app-loader> -->\r\n\t<div class=\"tools-container\">\r\n\t\t<a mat-icon-button  matTooltip=\"Back\" routerLink=\"/banner-list\" >\r\n\t\t\t<i class=\"material-icons\">arrow_back</i>\r\n\t\t</a>\r\n\t\t<h2>Add New Banner</h2>\r\n\t</div>\r\n\r\n\t<div class=\"container pt10 pl10 pr10 pb50\" >\r\n\t\t<form #f=\"ngForm\" (ngSubmit)=\" f.valid && submitDetail()\">\r\n\t\t\t<div class=\"row\">\r\n\t\t\t\t<div class=\"col s12\">\r\n\t\t\t\t\t<div class=\"card pb0\">\r\n\t\t\t\t\t\t<div class=\"card-head\">\r\n\t\t\t\t\t\t\t<h2>Basic Information</h2>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"card-body cs-form\">\r\n\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t\t<div class=\"col s12 m3 l3\" >\r\n\t\t\t\t\t\t\t\t\t<mat-form-field appearance=\"outline\">\r\n\t\t\t\t\t\t\t\t\t\t<mat-label>User Type</mat-label>\r\n\t\t\t\t\t\t\t\t\t\t<mat-select multiple name=\"user_type\" [(ngModel)]=\"data.user_type\" #user_type=\"ngModel\" required>\r\n\t\t\t\t\t\t\t\t\t\t\t<mat-option  value=\"Distributor\">Distributor</mat-option>\r\n\t\t\t\t\t\t\t\t\t\t\t<mat-option  value=\"Direct Dealer\">Direct Dealer</mat-option>\r\n\t\t\t\t\t\t\t\t\t\t\t<mat-option  value=\"Retailer\">Retailer</mat-option>\r\n\t\t\t\t\t\t\t\t\t\t\t<mat-option  value=\"Sales User\">Sales User</mat-option>\r\n\t\t\t\t\t\t\t\t\t\t\t<mat-option  value=\"Ply Expert\">Ply Expert</mat-option>\r\n\t\t\t\t\t\t\t\t\t\t\t<mat-option  value=\"Ambassador\">Ambassador</mat-option>\r\n\t\t\t\t\t\t\t\t\t\t\t<mat-option  value=\"Fabricator\">Fabricator</mat-option>\r\n\r\n\t\t\t\t\t\t\t\t\t\t</mat-select>\r\n\t\t\t\t\t\t\t\t\t</mat-form-field>\r\n\r\n\t\t\t\t\t\t\t\t\t<div class=\"alert alert-danger\" *ngIf=\"user_type.touched || f.submitted\">\r\n\t\t\t\t\t\t\t\t\t\t<p *ngIf=\"user_type.errors?.required\">This field is required</p>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t\t<div class=\"col s12\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"uploade-image\">\r\n\t\t\t\t\t\t\t\t\t\t<ul>\r\n\t\t\t\t\t\t\t\t\t\t  <!-- <li *ngFor=\"let row of selected_image; let i=index\">\r\n\t\t\t\t\t\t\t\t\t\t\t<img src=\"{{row.img_id ? url+row.image : row.image}}\">\r\n\t\t\t\t\t\t\t\t\t\t\t<span class=\"cancel-icon\">\r\n\t\t\t\t\t\t\t\t\t\t\t  <i class=\"material-icons crose-icon\" (click)=\"delete_img(i,row.img_id, row.image)\">clear</i>\r\n\t\t\t\t\t\t\t\t\t\t\t</span>\r\n\t\t\t\t\t\t\t\t\t\t  </li> -->\r\n\t\t\t\t\t\t\t\t\t\t  <li class=\"add-bg-1\" [ngClass]=\"{'error': errorMsg == true}\">\r\n\t\t\t\t\t\t\t\t\t\t\t<img src=\"{{selected_image}}\" *ngIf=\"selected_image != null\">\r\n\t\t\t\t\t\t\t\t\t\t\t<label class=\"fix-label\">\r\n\t\t\t\t\t\t\t\t\t\t\t  <input type=\"file\" (change)=\"onUploadChange($event)\" style=\"display:none;\" accept=\".png, .jpg, .jpeg,\" multiple required />\r\n\t\t\t\t\t\t\t\t\t\t\t  <div class=\"other\" *ngIf=\"selected_image == null \">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<i class=\"material-icons\">cloud_upload</i>\r\n\t\t\t\t\t\t\t\t\t\t\t\t<p>Upload Images</p>\r\n\t\t\t\t\t\t\t\t\t\t\t  </div>\r\n\t\t\t\t\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t\t\t\t\t  </li>\r\n\t\t\t\t\t\t\t\t\t\t</ul>\r\n\t\t\t\t\t\t\t\t\t  </div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\r\n\t\t\t<div class=\"row\">\r\n\t\t\t\t<div class=\"col s12\">\r\n\t\t\t\t\t<div class=\"text-right\">\r\n\t\t\t\t\t\t<button [ngClass]=\"{'loading': savingFlag == true}\" mat-raised-button color=\"accent\" type=\"submit\" [disabled]=\"savingFlag == true\">\r\n\t\t\t\t\t\t\t{{savingFlag == true ? 'Saving' : 'Save'}}\r\n\t\t\t\t\t\t</button>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\r\n\t\t</form>\r\n\t</div>\r\n</div>\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/banner/banner-add/banner-add.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/banner/banner-add/banner-add.component.ts ***!
  \***********************************************************/
/*! exports provided: BannerAddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BannerAddComponent", function() { return BannerAddComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_services_DatabaseService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/_services/DatabaseService */ "./src/_services/DatabaseService.ts");
/* harmony import */ var ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng6-toastr-notifications */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/ng6-toastr-notifications/fesm5/ng6-toastr-notifications.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/router/fesm5/router.js");





var BannerAddComponent = /** @class */ (function () {
    function BannerAddComponent(service, route, router, toast) {
        this.service = service;
        this.route = route;
        this.router = router;
        this.toast = toast;
        this.data = {};
        this.image = new FormData();
        this.savingFlag = false;
        this.errorMsg = false;
        this.userData = JSON.parse(localStorage.getItem('st_user'));
        this.userId = this.userData['data']['id'];
        this.userName = this.userData['data']['name'];
    }
    BannerAddComponent.prototype.ngOnInit = function () {
    };
    BannerAddComponent.prototype.onUploadChange = function (data) {
        var _this = this;
        this.errorMsg = false;
        this.image_id = '';
        for (var i = 0; i < data.target.files.length; i++) {
            var files = data.target.files[i];
            if (files) {
                var reader = new FileReader();
                reader.onload = function (e) {
                    _this.selected_image = e.target.result;
                };
                reader.readAsDataURL(files);
            }
            this.image.append("" + i, data.target.files[i], data.target.files[i].name);
        }
    };
    BannerAddComponent.prototype.submitDetail = function () {
        var _this = this;
        if (!this.selected_image) {
            this.toast.errorToastr('Banner images required');
            return;
        }
        this.savingFlag = true;
        this.data.created_by_id = this.userId;
        this.data.created_by_name = this.userName;
        this.data.banner = this.selected_image;
        this.service.post_rqst(this.data, 'Master/addBanner').subscribe(function (resp) {
            if (resp['statusCode'] == 200) {
                _this.toast.successToastr(resp['statusMsg']);
                _this.savingFlag = false;
                _this.router.navigate(['/banner-list']);
            }
            else {
                _this.toast.errorToastr(resp['statusMsg']);
                _this.savingFlag = false;
            }
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('fileInput'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], BannerAddComponent.prototype, "fileInput", void 0);
    BannerAddComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-banner-add',
            template: __webpack_require__(/*! ./banner-add.component.html */ "./src/app/banner/banner-add/banner-add.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_services_DatabaseService__WEBPACK_IMPORTED_MODULE_2__["DatabaseService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_3__["ToastrManager"]])
    ], BannerAddComponent);
    return BannerAddComponent;
}());



/***/ }),

/***/ "./src/app/banner/banner-list/banner-list.component.html":
/*!***************************************************************!*\
  !*** ./src/app/banner/banner-list/banner-list.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-container\">\r\n\t<div class=\"tools-container\">\r\n\t\t<h2>{{active_tab | titlecase}}</h2>\r\n\r\n\t\t<div class=\"left-auto left-auto df ac flex-gap-10\">\r\n\t\t\t<button mat-icon-button matTooltip=\"Refresh\" (click)=\"refresh(active_tab)\">\r\n\t\t\t\t<i class=\"material-icons\">refresh</i>\r\n\t\t\t</button>\r\n\r\n\t\t\t<div class=\"pagination\" *ngIf=\"active_tab == 'Video List' && video_list.length > 0\">\r\n\t\t\t\t<div class=\"pagination-content\">\r\n\t\t\t\t\tPages\r\n\t\t\t\t\t<span>{{pagenumber}}</span>\r\n\t\t\t\t\tof\r\n\t\t\t\t\t<span>{{total_page}}</span>\r\n\t\t\t\t</div>\r\n\t\t\t\t<div class=\"page-nav\">\r\n\t\t\t\t\t<button mat-icon-button matTooltip=\"Older\" (click)=\"pervious()\" [disabled]=\"start == 0\">\r\n\t\t\t\t\t\t<i class=\"material-icons\">navigate_before</i>\r\n\t\t\t\t\t</button>\r\n\t\t\t\t\t<button mat-icon-button matTooltip=\"Newer\" (click)=\"nextPage()\"\r\n\t\t\t\t\t\t[disabled]=\"pagenumber == total_page \">\r\n\t\t\t\t\t\t<i class=\"material-icons\">navigate_next</i>\r\n\t\t\t\t\t</button>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\r\n\t\t\t<div class=\"mat-tabbar\">\r\n\t\t\t\t<button mat-button [ngClass]=\"active_tab == 'Banner List' ? 'active' : ''\"\r\n\t\t\t\t\t(click)=\"active_tab = 'Banner List'; getbannerList();\"><i\r\n\t\t\t\t\t\tclass=\"material-icons\">collections</i>Banner ({{banner_count}})</button>\r\n\t\t\t\t<button mat-button [ngClass]=\"active_tab == 'Video List' ? 'active' : ''\"\r\n\t\t\t\t\t(click)=\"active_tab = 'Video List'; videoList();\"><i class=\"material-icons\">smart_display</i>Video\r\n\t\t\t\t\t({{video_count}})</button>\r\n\t\t\t\t<button mat-button [ngClass]=\"active_tab == 'About Us' ? 'active' : ''\"\r\n\t\t\t\t\t(click)=\"active_tab = 'About Us';\"><i class=\"material-icons\">info</i>About Us</button>\r\n\t\t\t\t<button mat-button [ngClass]=\"active_tab == 'Contact Us' ? 'active' : ''\"\r\n\t\t\t\t\t(click)=\"active_tab = 'Contact Us';\"><i class=\"material-icons\">location_city</i>Contact Us</button>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n\r\n\r\n\t<ng-container *ngIf=\"active_tab == 'Banner List'\">\r\n\t\t<div class=\"container pb100\">\r\n\t\t\t<div class=\"card-container\" *ngIf=\"!loader\">\r\n\t\t\t\t<!-- <div class=\"card-image banner_img db\" *ngFor=\"let row of banner_list;\"> -->\r\n\t\t\t\t<div class=\"card-image db\" *ngFor=\"let row of banner_list; let i=index\">\r\n\t\t\t\t\t<img src=\"{{bannerUlr+row.banner}}\">\r\n\t\t\t\t\t<div *ngIf=\"logined_user_data.delete_gallery_master=='1'\"\r\n\t\t\t\t\t\tclass=\"action-button right-action-circel text-right\">\r\n\t\t\t\t\t\t<button mat-icon-button matTooltip=\"Delete\" (click)=\"delete(row.id)\">\r\n\t\t\t\t\t\t\t<i class=\"material-icons del\">delete</i>\r\n\t\t\t\t\t\t</button>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class=\"video-content\">\r\n\t\t\t\t\t\t<div class=\"status-bar pb5\">\r\n\t\t\t\t\t\t\tUser Type\r\n\t\t\t\t\t\t\t<div>\r\n\t\t\t\t\t\t\t\t<strong *ngFor=\"let items of row.item\">{{items.user_type | titlecase}}\r\n\t\t\t\t\t\t\t\t\t&nbsp;&nbsp;</strong>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"status-bar\">\r\n\t\t\t\t\t\t\tSequence\r\n\t\t\t\t\t\t\t<ng-container *ngFor=\"let items of row.item\">\r\n\t\t\t\t\t\t\t\t<ng-container *ngIf=\"items.editSequenceNo == true\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"th-search-acmt mr30 wp15\">\r\n\t\t\t\t\t\t\t\t\t\t<mat-form-field>\r\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" matInput class=\"text-right\"\r\n\t\t\t\t\t\t\t\t\t\t\t\tonkeypress=\"return event.charCode>=48 && event.charCode<=57\"\r\n\t\t\t\t\t\t\t\t\t\t\t\tplaceholder=\"Enter Sequence No.\" [name]=\"'sequence_no'+i\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t#sequence_no=\"ngModel\" [(ngModel)]=\"items.sequence_no\">\r\n\t\t\t\t\t\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t<div class=\"action-button text-right pt10\"\r\n\t\t\t\t\t\t\t\t\t\t*ngIf=\"logined_user_data.edit_gallery_master=='1'\">\r\n\t\t\t\t\t\t\t\t\t\t<a mat-icon-button matTooltip=\"Save\"\r\n\t\t\t\t\t\t\t\t\t\t\t(click)=\"Update_sequence_no(i, items.id, items.sequence_no)\">\r\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"material-icons edit\">save</i>\r\n\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t\t\t\t<ng-container *ngIf=\"items.editSequenceNo == ''\">\r\n\t\t\t\t\t\t\t\t\t<div class=\"action-button text-right pt10\"\r\n\t\t\t\t\t\t\t\t\t\t*ngIf=\"logined_user_data.edit_gallery_master=='1'\">\r\n\t\t\t\t\t\t\t\t\t\t<a mat-icon-button matTooltip=\"Edit Sequence No\" (click)=\"edit_sequence_no(items)\">\r\n\t\t\t\t\t\t\t\t\t\t\t<strong>{{items.sequence_no}} &nbsp;</strong>\r\n\t\t\t\t\t\t\t\t\t\t\t<i class=\"material-icons edit\">edit</i>\r\n\t\t\t\t\t\t\t\t\t\t</a>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</ng-container>\r\n\t\t\t\t\t\t\t</ng-container>\r\n\r\n\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\r\n\t\t\t<div class=\"card-container\" *ngIf=\"loader\">\r\n\t\t\t\t<div class=\"card-image skeleton\" *ngFor=\"let row of [].constructor(10)\">\r\n\t\t\t\t\t<div>&nbsp;</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\r\n\t\t\t<ng-container *ngIf=\"banner_list== 0\">\r\n\t\t\t\t<app-not-result-found></app-not-result-found>\r\n\t\t\t</ng-container>\r\n\t\t</div>\r\n\t\t<div class=\"fab-btns\" *ngIf=\"logined_user_data.add_master=='1' || logined_user_data.add_gallery_master=='1'\">\r\n\t\t\t<button class=\"pulse\" mat-fab [ngClass]=\"{'pulse': fabBtnValue=='add'}\" color=\"accent\"\r\n\t\t\t\trouterLink=\"banner-add\">\r\n\t\t\t\t<i class=\"material-icons\">add</i>\r\n\t\t\t\tAdd New\r\n\t\t\t</button>\r\n\t\t</div>\r\n\t</ng-container>\r\n\r\n\t<ng-container *ngIf=\"active_tab == 'Video List'\">\r\n\t\t<div class=\"container pb100\">\r\n\r\n\t\t\t<div class=\"card-container\" *ngIf=\"!videoloader\">\r\n\t\t\t\t<div class=\"card-image db\" *ngFor=\"let row of video_list; let i = index;\">\r\n\t\t\t\t\t<iframe width=\"100%\" height=\"250px\" [src]=\"row.video | safe\" frameborder=\"0\"\r\n\t\t\t\t\t\tallow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\r\n\t\t\t\t\t\tallowfullscreen></iframe>\r\n\t\t\t\t\t<div class=\"video-content\">\r\n\t\t\t\t\t\t<p>{{row.desc}}</p>\r\n\t\t\t\t\t\t<div class=\"status-bar pb5\">\r\n\t\t\t\t\t\t\tUser Type\r\n\t\t\t\t\t\t\t<div>\r\n\t\t\t\t\t\t\t\t<strong *ngFor=\"let items of row.item\">{{items.user_type | titlecase}}\r\n\t\t\t\t\t\t\t\t\t&nbsp;&nbsp;</strong>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"status-bar\" *ngIf=\"logined_user_data.edit_gallery_master=='1' \">\r\n\t\t\t\t\t\t\tStatus\r\n\t\t\t\t\t\t\t<mat-slide-toggle color=\"accent\" [name]=\"'status'+i\" [(ngModel)]=\"row.newStatus\"\r\n\t\t\t\t\t\t\t\t(change)=\"updateStatus(i,$event,row.id)\">\r\n\t\t\t\t\t\t\t</mat-slide-toggle>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\r\n\t\t\t<div class=\"card-container\" *ngIf=\"videoloader\">\r\n\t\t\t\t<div class=\"card-image skeleton\" *ngFor=\"let row of [].constructor(10)\">\r\n\t\t\t\t\t<div>&nbsp;</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\r\n\t\t\t<ng-container *ngIf=\"video_list== 0\">\r\n\t\t\t\t<app-not-result-found></app-not-result-found>\r\n\t\t\t</ng-container>\r\n\t\t\t<div class=\"fab-btns\" *ngIf=\"logined_user_data.add_gallery_master=='1' \">\r\n\t\t\t\t<button class=\"pulse\" mat-fab color=\"accent\" routerLink=\"video-add\">\r\n\t\t\t\t\t<i class=\"material-icons\">add</i>\r\n\t\t\t\t\tAdd New\r\n\t\t\t\t</button>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</ng-container>\r\n\t<ng-container *ngIf=\"active_tab == 'About Us'\">\r\n\t\t<app-about-us></app-about-us>\r\n\t</ng-container>\r\n\r\n\t<ng-container *ngIf=\"active_tab == 'Contact Us'\">\r\n\t\t<app-contact-us></app-contact-us>\r\n\t</ng-container>\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/banner/banner-list/banner-list.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/banner/banner-list/banner-list.component.ts ***!
  \*************************************************************/
/*! exports provided: BannerListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BannerListComponent", function() { return BannerListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_services_DatabaseService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/_services/DatabaseService */ "./src/_services/DatabaseService.ts");
/* harmony import */ var src_app_dialog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/dialog.component */ "./src/app/dialog.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng6-toastr-notifications */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/ng6-toastr-notifications/fesm5/ng6-toastr-notifications.js");
/* harmony import */ var src_app_localstorage_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/localstorage.service */ "./src/app/localstorage.service.ts");








var BannerListComponent = /** @class */ (function () {
    // editSequenceNo: boolean = false;
    function BannerListComponent(rout, service, toast, dialog, session, dialog2) {
        this.rout = rout;
        this.service = service;
        this.toast = toast;
        this.dialog = dialog;
        this.session = session;
        this.dialog2 = dialog2;
        this.loader = false;
        this.videoloader = false;
        this.active_tab = 'Banner List';
        this.banner_list = [];
        this.video_list = [];
        this.assign_login_data = {};
        this.logined_user_data = {};
        this.fabBtnValue = 'add';
        this.pagenumber = 1;
        this.start = 0;
        this.count = 0;
        this.page_limit = this.service.pageLimit;
        this.bannerUlr = service.uploadUrl + 'banner/';
        this.assign_login_data = this.session.getSession();
        this.logined_user_data = this.assign_login_data.value.data;
        this.getbannerList();
        this.videoList();
    }
    BannerListComponent.prototype.ngOnInit = function () {
    };
    BannerListComponent.prototype.pervious = function () {
        this.start = this.start - this.page_limit;
        this.videoList();
    };
    BannerListComponent.prototype.nextPage = function () {
        this.start = this.start + this.page_limit;
        this.videoList();
    };
    BannerListComponent.prototype.edit_banner = function (id) {
        this.rout.navigate(['/banner-banner-detail/' + id]);
    };
    BannerListComponent.prototype.refresh = function (type) {
        this.start = 0;
        if (type == 'Banner List') {
            this.getbannerList();
        }
        else {
            this.videoList();
        }
    };
    // Banner List Start
    BannerListComponent.prototype.getbannerList = function () {
        var _this = this;
        this.loader = true;
        this.service.post_rqst({}, "Master/bannerList").subscribe((function (result) {
            if (result['statusCode'] == 200) {
                _this.banner_list = result['banner_list'];
                _this.banner_count = result['count'];
                _this.loader = false;
            }
            else {
                _this.toast.errorToastr(result['statusMsg']);
            }
        }));
    };
    BannerListComponent.prototype.delete = function (id) {
        var _this = this;
        this.dialog.delete('Banner!').then(function (result) {
            if (result) {
                _this.service.post_rqst({ 'banner_id': id }, "Master/deleteBanner").subscribe(function (result) {
                    if (result['statusCode'] == 200) {
                        _this.toast.successToastr(result['statusMsg']);
                        _this.getbannerList();
                    }
                    else {
                        _this.toast.errorToastr(result['statusMsg']);
                    }
                });
            }
        });
    };
    // Banner List End
    // Video List Start
    BannerListComponent.prototype.videoList = function () {
        var _this = this;
        this.videoloader = true;
        if (this.pagenumber > this.total_page) {
            this.pagenumber = this.total_page;
            this.start = this.pageCount - this.page_limit;
        }
        if (this.start < 0) {
            this.start = 0;
        }
        this.service.post_rqst({ 'start': this.start, 'pagelimit': this.page_limit }, "Master/videoList").subscribe((function (result) {
            if (result['statusCode'] == 200) {
                _this.video_list = result['video_list'];
                _this.video_count = result['count'];
                _this.videoloader = false;
                if (_this.pagenumber > _this.total_page) {
                    _this.pagenumber = _this.total_page;
                    _this.start = _this.video_count - _this.page_limit;
                }
                else {
                    _this.pagenumber = Math.ceil(_this.start / _this.page_limit) + 1;
                }
                _this.total_page = Math.ceil(_this.video_count / _this.page_limit);
                _this.sr_no = _this.pagenumber - 1;
                _this.sr_no = _this.sr_no * _this.page_limit;
                for (var i = 0; i < _this.video_list.length; i++) {
                    if (_this.video_list[i].status == '1') {
                        _this.video_list[i].newStatus = true;
                    }
                    else if (_this.video_list[i].status == '0') {
                        _this.video_list[i].newStatus = false;
                    }
                }
            }
            else {
                _this.toast.errorToastr(result['statusMsg']);
            }
        }));
    };
    BannerListComponent.prototype.updateStatus = function (i, event, id) {
        var _this = this;
        if (event.checked == false) {
            this.dialog.confirm("You Want To Change Status !").then(function (result) {
                if (result) {
                    if (event.checked == false) {
                        _this.video_list[i].status = "0";
                    }
                    else {
                        _this.video_list[i].status = "1";
                    }
                    var value = _this.video_list[i].status;
                    _this.service.post_rqst({ 'video_id': id, 'status': value, 'status_changed_by': _this.logined_user_data.id, 'status_changed_by_name': _this.logined_user_data.name }, "Master/videoStatusChange")
                        .subscribe(function (resp) {
                        if (resp['statusCode'] == 200) {
                            _this.toast.successToastr(resp['statusMsg']);
                            _this.videoList();
                        }
                        else {
                            _this.toast.errorToastr(resp['statusMsg']);
                        }
                    });
                }
            });
        }
        else if (event.checked == true) {
            this.dialog.confirm("You Want To Change Status !").then(function (result) {
                if (result) {
                    if (event.checked == false) {
                        _this.video_list[i].status = "0";
                    }
                    else {
                        _this.video_list[i].status = "1";
                    }
                    var value = _this.video_list[i].status;
                    _this.service.post_rqst({ 'video_id': id, 'status': value, 'status_changed_by': _this.logined_user_data.id, 'status_changed_by_name': _this.logined_user_data.name }, "Master/videoStatusChange")
                        .subscribe(function (resp) {
                        if (resp['statusCode'] == 200) {
                            _this.toast.successToastr(resp['statusMsg']);
                            _this.videoList();
                        }
                        else {
                            _this.toast.errorToastr(resp['statusMsg']);
                        }
                    });
                }
            });
        }
    };
    BannerListComponent.prototype.Update_sequence_no = function (i, id, sequenceNo) {
        var _this = this;
        this.dialog.confirm("You Want To Change Sequence !").then(function (result) {
            if (result) {
                _this.service.post_rqst({ 'banner_id': id, 'sequenceNo': sequenceNo, 'status_changed_by': _this.logined_user_data.id, 'status_changed_by_name': _this.logined_user_data.name }, "Master/changeSequenceNo")
                    .subscribe(function (resp) {
                    if (resp['statusCode'] == 200) {
                        _this.toast.successToastr(resp['statusMsg']);
                        // this.editSequenceNo = false
                        _this.getbannerList();
                    }
                    else {
                        _this.getbannerList();
                        _this.toast.errorToastr(resp['statusMsg']);
                    }
                });
            }
        });
    };
    BannerListComponent.prototype.edit_sequence_no = function (item) {
        // this.editSequenceNo = true
        item.editSequenceNo = true;
    };
    BannerListComponent.prototype.formatLabel = function (value) {
        if (value >= 1000) {
            return Math.round(value / 1000) + 'k';
        }
        return "" + value;
    };
    BannerListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-banner-list',
            template: __webpack_require__(/*! ./banner-list.component.html */ "./src/app/banner/banner-list/banner-list.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], src_services_DatabaseService__WEBPACK_IMPORTED_MODULE_3__["DatabaseService"], ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_6__["ToastrManager"], src_app_dialog_component__WEBPACK_IMPORTED_MODULE_4__["DialogComponent"], src_app_localstorage_service__WEBPACK_IMPORTED_MODULE_7__["sessionStorage"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialog"]])
    ], BannerListComponent);
    return BannerListComponent;
}());



/***/ }),

/***/ "./src/app/banner/banner-module/banner.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/banner/banner-module/banner.module.ts ***!
  \*******************************************************/
/*! exports provided: BannerModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BannerModule", function() { return BannerModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angular_ng_autocomplete__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angular-ng-autocomplete */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/angular-ng-autocomplete/fesm5/angular-ng-autocomplete.js");
/* harmony import */ var ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-multiselect-dropdown */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/ng-multiselect-dropdown/fesm5/ng-multiselect-dropdown.js");
/* harmony import */ var ngx_mat_select_search__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-mat-select-search */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/ngx-mat-select-search/fesm5/ngx-mat-select-search.js");
/* harmony import */ var src_app_app_utility_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/app-utility.module */ "./src/app/app-utility.module.ts");
/* harmony import */ var src_app_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/material */ "./src/app/material.ts");
/* harmony import */ var src_app_auth_component_guard__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/auth-component.guard */ "./src/app/auth-component.guard.ts");
/* harmony import */ var _banner_list_banner_list_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../banner-list/banner-list.component */ "./src/app/banner/banner-list/banner-list.component.ts");
/* harmony import */ var _banner_add_banner_add_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../banner-add/banner-add.component */ "./src/app/banner/banner-add/banner-add.component.ts");
/* harmony import */ var src_app_video_video_list_video_list_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/video/video-list/video-list.component */ "./src/app/video/video-list/video-list.component.ts");
/* harmony import */ var src_app_about_us_about_us_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/app/about-us/about-us.component */ "./src/app/about-us/about-us.component.ts");
/* harmony import */ var src_app_contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! src/app/contact-us/contact-us.component */ "./src/app/contact-us/contact-us.component.ts");
/* harmony import */ var src_Pipes_VideoSafe_pipe__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! src/_Pipes/VideoSafe.pipe */ "./src/_Pipes/VideoSafe.pipe.ts");
/* harmony import */ var ngx_editor__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ngx-editor */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/ngx-editor/fesm5/ngx-editor.js");
/* harmony import */ var src_app_video_video_add_video_add_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! src/app/video/video-add/video-add.component */ "./src/app/video/video-add/video-add.component.ts");




















var bannerRoute = [
    { path: "", component: _banner_list_banner_list_component__WEBPACK_IMPORTED_MODULE_12__["BannerListComponent"], canActivate: [src_app_auth_component_guard__WEBPACK_IMPORTED_MODULE_11__["AuthComponentGuard"]], data: { expectedRole: ['1'] } },
    { path: "banner-add", component: _banner_add_banner_add_component__WEBPACK_IMPORTED_MODULE_13__["BannerAddComponent"], canActivate: [src_app_auth_component_guard__WEBPACK_IMPORTED_MODULE_11__["AuthComponentGuard"]], data: { expectedRole: ['1'] } },
    { path: "video-add", component: src_app_video_video_add_video_add_component__WEBPACK_IMPORTED_MODULE_19__["VideoAddComponent"], canActivate: [src_app_auth_component_guard__WEBPACK_IMPORTED_MODULE_11__["AuthComponentGuard"]], data: { expectedRole: ['1'] } },
];
var BannerModule = /** @class */ (function () {
    function BannerModule() {
    }
    BannerModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _banner_list_banner_list_component__WEBPACK_IMPORTED_MODULE_12__["BannerListComponent"],
                _banner_add_banner_add_component__WEBPACK_IMPORTED_MODULE_13__["BannerAddComponent"],
                src_app_video_video_list_video_list_component__WEBPACK_IMPORTED_MODULE_14__["VideoListComponent"],
                src_app_about_us_about_us_component__WEBPACK_IMPORTED_MODULE_15__["AboutUsComponent"],
                src_app_contact_us_contact_us_component__WEBPACK_IMPORTED_MODULE_16__["ContactUsComponent"],
                src_Pipes_VideoSafe_pipe__WEBPACK_IMPORTED_MODULE_17__["VideoSafe"],
                src_app_video_video_add_video_add_component__WEBPACK_IMPORTED_MODULE_19__["VideoAddComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild(bannerRoute),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_7__["NgMultiSelectDropDownModule"],
                src_app_material__WEBPACK_IMPORTED_MODULE_10__["MaterialModule"],
                angular_ng_autocomplete__WEBPACK_IMPORTED_MODULE_6__["AutocompleteLibModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialogModule"],
                ngx_mat_select_search__WEBPACK_IMPORTED_MODULE_8__["NgxMatSelectSearchModule"],
                src_app_app_utility_module__WEBPACK_IMPORTED_MODULE_9__["AppUtilityModule"],
                ngx_editor__WEBPACK_IMPORTED_MODULE_18__["NgxEditorModule"],
            ]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], BannerModule);
    return BannerModule;
}());



/***/ }),

/***/ "./src/app/contact-us/contact-us.component.html":
/*!******************************************************!*\
  !*** ./src/app/contact-us/contact-us.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\t<div class=\"container pt10 pl10 pr10 pb50\" >\r\n    <form #f=\"ngForm\" (ngSubmit)=\" f.valid && submitDetail()\">\r\n      <div class=\"row\">\r\n        <div class=\"col s12\">\r\n          <div class=\"card pb0\">\r\n            <div class=\"card-head\">\r\n              <h2>Basic Information</h2>\r\n            </div>\r\n            <div class=\"card-body cs-form\">\r\n              <div class=\"row\">\r\n                <div class=\"col s12 m3 l3\">\r\n                  <mat-form-field  appearance=\"outline\">\r\n                    <mat-label>Contact Number 1</mat-label>\r\n                    <input [disabled]=\"logined_user_data.edit_gallery_master!='1'\" matInput placeholder=\"Type Here ...\" name=\"contact_number\"  #contact_number=\"ngModel\" (keypress)=\"MobileNumber($event)\" [(ngModel)]=\"data.contact_number\" required>\r\n                  </mat-form-field>\r\n                  <div class=\"alert alert-danger\" *ngIf=\"contact_number.touched || f.submitted\">\r\n                    <p *ngIf=\"contact_number.errors?.required\">This field is required</p>\r\n                  </div>\r\n                </div>\r\n                \r\n                <div class=\"col s12 m3 l3\">\r\n                  <mat-form-field  appearance=\"outline\">\r\n                    <mat-label>Contact Number 2</mat-label>\r\n                    <input [disabled]=\"logined_user_data.edit_gallery_master!='1'\" matInput placeholder=\"Type Here ...\" name=\"contact_number_2\" #contact_number_2=\"ngModel\" (keypress)=\"MobileNumber($event)\" [(ngModel)]=\"data.contact_number_2\">\r\n                  </mat-form-field>\r\n                  \r\n                </div>\r\n                \r\n                <div class=\"col s12 m3 l3\">\r\n                  <mat-form-field  appearance=\"outline\">\r\n                    <mat-label>Email ID</mat-label>\r\n                    <input [disabled]=\"logined_user_data.edit_gallery_master!='1'\" matInput placeholder=\"Type Here ...\" type=\"email\" name=\"email\" #email=\"ngModel\"\r\n                    [(ngModel)]=\"data.email\"  pattern=\"[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$\" required>\r\n                  </mat-form-field>\r\n                  <div class=\"alert alert-danger\" *ngIf=\"email.touched || f.submitted\">\r\n                    <p *ngIf=\"email.errors?.required\">This field is required</p>\r\n                    <p *ngIf=\"email.errors?.pattern\">This is not a valid Email ID !</p>\r\n                  </div>\r\n                </div>\r\n                \r\n                <div class=\"col s12 m3 l3\">\r\n                  <mat-form-field  appearance=\"outline\">\r\n                    <mat-label>Website URl</mat-label>\r\n                    <input [disabled]=\"logined_user_data.edit_gallery_master!='1'\" matInput placeholder=\"Type Here ...\" name=\"url\" #url=\"ngModel\" [(ngModel)]=\"data.url\" required>\r\n                  </mat-form-field>\r\n                  <div class=\"alert alert-danger\" *ngIf=\"url.touched || f.submitted\">\r\n                    <p *ngIf=\"url.errors?.required\">This field is required</p>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"row\">\r\n                <div class=\"col s6\">\r\n                  <mat-form-field  appearance=\"outline\">\r\n                    <mat-label>Opening Hours</mat-label>\r\n                    <textarea [disabled]=\"logined_user_data.edit_gallery_master!='1'\" matInput placeholder=\"Type Here ...\" name=\"daily_address\" #daily_address=\"ngModel\"\r\n                    [(ngModel)]=\"data.daily_address\" class=\"h80\" required></textarea>\r\n                  </mat-form-field>\r\n                  <div class=\"alert alert-danger\" *ngIf=\"daily_address.touched || f.submitted\">\r\n                    <p *ngIf=\"daily_address.errors?.required\">This field is required</p>\r\n                  </div>\r\n                </div>\r\n                <div class=\"col s6\">\r\n                  <mat-form-field  appearance=\"outline\">\r\n                    <mat-label>Address</mat-label>\r\n                    <textarea [disabled]=\"logined_user_data.edit_gallery_master!='1'\" matInput placeholder=\"Type Here ...\" name=\"address\" #address=\"ngModel\"\r\n                    [(ngModel)]=\"data.address\" class=\"h80\" required></textarea>\r\n                  </mat-form-field>\r\n                  <div class=\"alert alert-danger\" *ngIf=\"address.touched || f.submitted\">\r\n                    <p *ngIf=\"address.errors?.required\">This field is required</p>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              \r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      \r\n      <div class=\"row\" *ngIf=\"logined_user_data.edit_gallery_master=='1' || logined_user_data.add_gallery_master=='1'\">\r\n        <div class=\"col s12\">\r\n          <div class=\"text-right\">\r\n            <button  *ngIf=\"logined_user_data.edit_gallery_master=='1' || logined_user_data.add_gallery_master=='1'\" [ngClass]=\"{'loading': savingFlag == true}\" mat-raised-button color=\"accent\" type=\"submit\" [disabled]=\"savingFlag == true\">\r\n              {{savingFlag == true ? 'Saving' : (data.id ? 'Update' : 'Save')}}\r\n            </button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      \r\n    </form>\r\n  </div>\r\n  \r\n  \r\n  "

/***/ }),

/***/ "./src/app/contact-us/contact-us.component.ts":
/*!****************************************************!*\
  !*** ./src/app/contact-us/contact-us.component.ts ***!
  \****************************************************/
/*! exports provided: ContactUsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactUsComponent", function() { return ContactUsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng6-toastr-notifications */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/ng6-toastr-notifications/fesm5/ng6-toastr-notifications.js");
/* harmony import */ var src_services_DatabaseService__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/_services/DatabaseService */ "./src/_services/DatabaseService.ts");
/* harmony import */ var src_app_localstorage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/localstorage.service */ "./src/app/localstorage.service.ts");






var ContactUsComponent = /** @class */ (function () {
    function ContactUsComponent(service, rout, toast, session) {
        this.service = service;
        this.rout = rout;
        this.toast = toast;
        this.session = session;
        this.data = {};
        this.savingFlag = false;
        this.userData = JSON.parse(localStorage.getItem('st_user'));
        this.userId = this.userData['data']['id'];
        this.userName = this.userData['data']['name'];
        this.assign_login_data = this.session.getSession();
        this.logined_user_data = this.assign_login_data.value.data;
    }
    ContactUsComponent.prototype.ngOnInit = function () {
        this.contactDetail();
    };
    ContactUsComponent.prototype.MobileNumber = function (event) {
        var pattern = /[0-9\+\-\ ]/;
        var inputChar = String.fromCharCode(event.charCode);
        if (event.keyCode != 8 && !pattern.test(inputChar)) {
            event.preventDefault();
        }
    };
    ContactUsComponent.prototype.contactDetail = function () {
        var _this = this;
        // this.savingFlag = true;
        this.data.created_by_id = this.userId;
        this.data.created_by_name = this.userName;
        this.service.post_rqst({}, 'Master/contactDetail').subscribe(function (resp) {
            if (resp['statusCode'] == 200) {
                _this.data.contact_number = resp['contact_detail']['contact_number'];
                _this.data.id = resp['contact_detail']['id'];
                _this.data.contact_number_2 = resp['contact_detail']['contact_number_2'];
                _this.data.email = resp['contact_detail']['email'];
                _this.data.url = resp['contact_detail']['url'];
                _this.data.address = resp['contact_detail']['address'];
                _this.data.daily_address = resp['contact_detail']['daily_address'];
            }
            else {
                _this.toast.errorToastr(resp['statusMsg']);
            }
        });
    };
    ContactUsComponent.prototype.submitDetail = function () {
        var _this = this;
        this.savingFlag = true;
        this.data.created_by_id = this.userId;
        this.data.created_by_name = this.userName;
        this.service.post_rqst(this.data, 'Master/addContact').subscribe(function (resp) {
            if (resp['statusCode'] == 200) {
                _this.toast.successToastr(resp['statusMsg']);
                _this.contact_id = resp['last_id'];
                _this.savingFlag = false;
            }
            else {
                _this.toast.errorToastr(resp['statusMsg']);
                _this.savingFlag = false;
            }
        });
    };
    ContactUsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-contact-us',
            template: __webpack_require__(/*! ./contact-us.component.html */ "./src/app/contact-us/contact-us.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_services_DatabaseService__WEBPACK_IMPORTED_MODULE_4__["DatabaseService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_3__["ToastrManager"], src_app_localstorage_service__WEBPACK_IMPORTED_MODULE_5__["sessionStorage"]])
    ], ContactUsComponent);
    return ContactUsComponent;
}());



/***/ }),

/***/ "./src/app/video/video-add/video-add.component.html":
/*!**********************************************************!*\
  !*** ./src/app/video/video-add/video-add.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"main-container\" >\r\n\t<!-- <app-loader *ngIf=\"loader\"></app-loader> -->\r\n\t<div class=\"tools-container\">\r\n\t\t<a mat-icon-button  matTooltip=\"Back\" routerLink=\"/banner-list\" >\r\n\t\t\t<i class=\"material-icons\">arrow_back</i>\r\n\t\t</a>\r\n\t\t<h2>Add New Video</h2>\r\n\t</div>\r\n\t\r\n\t<div class=\"container pt10 pl10 pr10 pb50\" >\r\n\t\t<form #f=\"ngForm\" (ngSubmit)=\" f.valid && submitDetail()\">\r\n\t\t\t<div class=\"row\">\r\n\t\t\t\t<div class=\"col s12\">\r\n\t\t\t\t\t<div class=\"card pb0\">\r\n\t\t\t\t\t\t<div class=\"card-head\">\r\n\t\t\t\t\t\t\t<h2>Basic Information</h2>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"card-body cs-form\">\r\n\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t\t<div class=\"col s12 m6 l6\" >\r\n\t\t\t\t\t\t\t\t\t<mat-form-field appearance=\"outline\">\r\n\t\t\t\t\t\t\t\t\t\t<mat-label>User Type</mat-label>\r\n\t\t\t\t\t\t\t\t\t\t<mat-select multiple name=\"user_type\" [(ngModel)]=\"data.user_type\" #user_type=\"ngModel\" required>\r\n\t\t\t\t\t\t\t\t\t\t\t<mat-option  value=\"Distributor\">Distributor</mat-option>\r\n\t\t\t\t\t\t\t\t\t\t\t<mat-option  value=\"Direct Dealer\">Direct Dealer</mat-option>\r\n\t\t\t\t\t\t\t\t\t\t\t<mat-option  value=\"Retailer\">Retailer</mat-option>\r\n\t\t\t\t\t\t\t\t\t\t\t<mat-option  value=\"Influencer\">Influencer</mat-option>\r\n\t\t\t\t\t\t\t\t\t\t</mat-select>\r\n\t\t\t\t\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t\t\t\t<div class=\"alert alert-danger\" *ngIf=\"user_type.touched || f.submitted\">\r\n\t\t\t\t\t\t\t\t\t\t<p *ngIf=\"user_type.errors?.required\">This field is required</p>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"col s12 m6 l6\">\r\n\t\t\t\t\t\t\t\t\t<mat-form-field  appearance=\"outline\">\r\n\t\t\t\t\t\t\t\t\t\t<mat-label>URL</mat-label>\r\n\t\t\t\t\t\t\t\t\t\t<input matInput placeholder=\"Type Here ...\" name=\"url\" #url=\"ngModel\" [(ngModel)]=\"data.url\" pattern=\"^(https?\\:\\/\\/)?(www\\.youtube\\.com|youtu\\.be)\\/.+$\" required>\r\n\t\t\t\t\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t\t\t\t\t\t<div class=\"alert alert-danger\" *ngIf=\"url.touched || f.submitted\">\r\n\t\t\t\t\t\t\t\t\t\t<p *ngIf=\"url.errors?.pattern\">Invalid Url</p>\r\n\t\t\t\t\t\t\t\t\t\t<p *ngIf=\"url.errors?.required\">This field is required</p>\r\n\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t\t<div class=\"col s12\">\r\n\t\t\t\t\t\t\t\t\t<mat-form-field  appearance=\"outline\">\r\n\t\t\t\t\t\t\t\t\t\t<mat-label>Description</mat-label>\r\n\t\t\t\t\t\t\t\t\t\t<textarea matInput placeholder=\"Type Here ...\" name=\"description\" #description=\"ngModel\"\r\n\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"data.description\" class=\"h80\"></textarea>\r\n\t\t\t\t\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t\t\t\t\t\t<!-- <div class=\"alert alert-danger\" *ngIf=\"description.touched || f.submitted\">\r\n\t\t\t\t\t\t\t\t\t\t<p *ngIf=\"description.errors?.required\">This field is required</p>\r\n\t\t\t\t\t\t\t\t\t</div> -->\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t\r\n\t\t\t<div class=\"row\">\r\n\t\t\t\t<div class=\"col s12\">\r\n\t\t\t\t\t<div class=\"text-right\">\r\n\t\t\t\t\t\t<button [ngClass]=\"{'loading': savingFlag == true}\" mat-raised-button color=\"accent\" type=\"submit\" [disabled]=\"savingFlag == true\">\r\n\t\t\t\t\t\t\t{{savingFlag == true ? 'Saving' : 'Save'}}\r\n\t\t\t\t\t\t</button>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\t\t\t\r\n\t\t</form>\r\n\t</div>\r\n</div>\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/video/video-add/video-add.component.ts":
/*!********************************************************!*\
  !*** ./src/app/video/video-add/video-add.component.ts ***!
  \********************************************************/
/*! exports provided: VideoAddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoAddComponent", function() { return VideoAddComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng6-toastr-notifications */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/ng6-toastr-notifications/fesm5/ng6-toastr-notifications.js");
/* harmony import */ var src_services_DatabaseService__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/_services/DatabaseService */ "./src/_services/DatabaseService.ts");





var VideoAddComponent = /** @class */ (function () {
    function VideoAddComponent(service, rout, toast, router, route) {
        this.service = service;
        this.rout = rout;
        this.toast = toast;
        this.router = router;
        this.route = route;
        this.data = {};
        this.savingFlag = false;
        this.userData = JSON.parse(localStorage.getItem('st_user'));
        this.userId = this.userData['data']['id'];
        this.userName = this.userData['data']['name'];
    }
    VideoAddComponent.prototype.ngOnInit = function () {
    };
    VideoAddComponent.prototype.submitDetail = function () {
        var _this = this;
        this.savingFlag = true;
        this.data.created_by_id = this.userId;
        this.data.created_by_name = this.userName;
        this.service.post_rqst(this.data, 'Master/addVideo').subscribe(function (resp) {
            if (resp['statusCode'] == 200) {
                _this.toast.successToastr(resp['statusMsg']);
                _this.savingFlag = false;
                _this.router.navigate(['/banner-list']);
            }
            else {
                _this.toast.errorToastr(resp['statusMsg']);
                _this.savingFlag = false;
            }
        });
    };
    VideoAddComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-video-add',
            template: __webpack_require__(/*! ./video-add.component.html */ "./src/app/video/video-add/video-add.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_services_DatabaseService__WEBPACK_IMPORTED_MODULE_4__["DatabaseService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_3__["ToastrManager"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]])
    ], VideoAddComponent);
    return VideoAddComponent;
}());



/***/ }),

/***/ "./src/app/video/video-list/video-list.component.html":
/*!************************************************************!*\
  !*** ./src/app/video/video-list/video-list.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container pb100\" >\r\n  <div class=\"card-container\">\r\n    <div class=\"card-image db\" *ngFor=\"let row of [].constructor(2)\">\r\n      <iframe width=\"100%\" height=\"300\" src=\"https://www.youtube.com/embed/eRif6UPzoVI\" title=\"YouTube video player\" frameborder=\"0\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe>\r\n      <div class=\"video-content\">\r\n        <h2>Glitch Effect Green Logo Animation</h2>\r\n        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus similique quia nulla! Unde, dignissimos numquam?</p>\r\n        <div class=\"status-bar\">\r\n          User Type\r\n          <span>Dealer, Direct Dealer</span>\r\n        </div>\r\n        <div class=\"status-bar\">\r\n          Status\r\n          <mat-slide-toggle color=\"accent\" checked=\"true\"></mat-slide-toggle>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"card-container\">\r\n    <div class=\"card-image skeleton\" *ngFor=\"let row of [].constructor(10)\">\r\n      <div>&nbsp;</div>\r\n    </div>\r\n  </div>\r\n</div>\r\n<div class=\"fab-btns\">\r\n  <button class=\"pulse\" mat-fab   color=\"primary\"  routerLink=\"/video-add\">\r\n    <i class=\"material-icons\">add</i>\r\n    Add New\r\n  </button>\r\n</div>"

/***/ }),

/***/ "./src/app/video/video-list/video-list.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/video/video-list/video-list.component.ts ***!
  \**********************************************************/
/*! exports provided: VideoListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VideoListComponent", function() { return VideoListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/core/fesm5/core.js");


var VideoListComponent = /** @class */ (function () {
    function VideoListComponent() {
    }
    VideoListComponent.prototype.ngOnInit = function () {
    };
    VideoListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-video-list',
            template: __webpack_require__(/*! ./video-list.component.html */ "./src/app/video/video-list/video-list.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], VideoListComponent);
    return VideoListComponent;
}());



/***/ })

}]);