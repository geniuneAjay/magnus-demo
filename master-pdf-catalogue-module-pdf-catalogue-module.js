(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["master-pdf-catalogue-module-pdf-catalogue-module"],{

/***/ "./src/app/master/pdf-catalogue-module/pdf-catalogue.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/master/pdf-catalogue-module/pdf-catalogue.module.ts ***!
  \*********************************************************************/
/*! exports provided: PdfCatalogueModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PdfCatalogueModule", function() { return PdfCatalogueModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angular_ng_autocomplete__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angular-ng-autocomplete */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/angular-ng-autocomplete/fesm5/angular-ng-autocomplete.js");
/* harmony import */ var ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-multiselect-dropdown */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/ng-multiselect-dropdown/fesm5/ng-multiselect-dropdown.js");
/* harmony import */ var ngx_mat_select_search__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-mat-select-search */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/ngx-mat-select-search/fesm5/ngx-mat-select-search.js");
/* harmony import */ var src_app_auth_component_guard__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/auth-component.guard */ "./src/app/auth-component.guard.ts");
/* harmony import */ var src_app_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/material */ "./src/app/material.ts");
/* harmony import */ var src_app_pdf_catalogue_add_pdf_catalogue_add_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/pdf-catalogue-add/pdf-catalogue-add.component */ "./src/app/pdf-catalogue-add/pdf-catalogue-add.component.ts");
/* harmony import */ var _pdf_catalouge_pdf_catalouge_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../pdf-catalouge/pdf-catalouge.component */ "./src/app/master/pdf-catalouge/pdf-catalouge.component.ts");
/* harmony import */ var src_app_app_utility_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/app-utility.module */ "./src/app/app-utility.module.ts");














var catalogueRoutes = [
    {
        path: "", children: [
            { path: "", component: _pdf_catalouge_pdf_catalouge_component__WEBPACK_IMPORTED_MODULE_12__["PdfCatalougeComponent"], canActivate: [src_app_auth_component_guard__WEBPACK_IMPORTED_MODULE_9__["AuthComponentGuard"]], data: { expectedRole: ['1'] } },
            { path: 'pdf-catalogue-add', component: src_app_pdf_catalogue_add_pdf_catalogue_add_component__WEBPACK_IMPORTED_MODULE_11__["PdfCatalogueAddComponent"], canActivate: [src_app_auth_component_guard__WEBPACK_IMPORTED_MODULE_9__["AuthComponentGuard"]], data: { expectedRole: ['1'] } },
        ]
    },
];
var PdfCatalogueModule = /** @class */ (function () {
    function PdfCatalogueModule() {
    }
    PdfCatalogueModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _pdf_catalouge_pdf_catalouge_component__WEBPACK_IMPORTED_MODULE_12__["PdfCatalougeComponent"],
                src_app_pdf_catalogue_add_pdf_catalogue_add_component__WEBPACK_IMPORTED_MODULE_11__["PdfCatalogueAddComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild(catalogueRoutes),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_7__["NgMultiSelectDropDownModule"],
                src_app_material__WEBPACK_IMPORTED_MODULE_10__["MaterialModule"],
                angular_ng_autocomplete__WEBPACK_IMPORTED_MODULE_6__["AutocompleteLibModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialogModule"],
                ngx_mat_select_search__WEBPACK_IMPORTED_MODULE_8__["NgxMatSelectSearchModule"],
                src_app_app_utility_module__WEBPACK_IMPORTED_MODULE_13__["AppUtilityModule"]
            ]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PdfCatalogueModule);
    return PdfCatalogueModule;
}());



/***/ }),

/***/ "./src/app/master/pdf-catalouge/pdf-catalouge.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/master/pdf-catalouge/pdf-catalouge.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-container\">\r\n  <div class=\"tools-container\">\r\n    <h2>PDF Catalogue</h2>\r\n\r\n    <div class=\"left-auto left-auto df ac flex-gap-10\">\r\n      <button mat-icon-button matTooltip=\"Refresh\" (click)=\"refresh() \">\r\n        <i class=\"material-icons\">refresh</i>\r\n      </button>\r\n\r\n      <div class=\"pagination\">\r\n        <div class=\"mat-tabbar\">\r\n\r\n          <button mat-button [ngClass]=\"catalogue_type == 'Brochures' ? 'active' : ''\"\r\n            (click)=\"catalogue_type = 'Brochures';getPdfList();\">\r\n            Brochures ({{pageCount.Brochures ? pageCount.Brochures : '0'}})\r\n          </button>\r\n\r\n          <button mat-button [ngClass]=\"catalogue_type == 'Business Understanding' ? 'active' : ''\"\r\n            (click)=\"catalogue_type = 'Business Understanding';getPdfList();\">\r\n            Business Understanding ({{pageCount.Business_Understanding ? pageCount.Business_Understanding :\r\n            '0'}})</button>\r\n\r\n          <button mat-button [ngClass]=\"catalogue_type == 'Price List' ? 'active' : ''\"\r\n            (click)=\"catalogue_type = 'Price List';getPdfList();\">\r\n            Price List ({{pageCount.Price_List ? pageCount.Price_List : '0'}})</button>\r\n\r\n          <button mat-button [ngClass]=\"catalogue_type == 'Product Range' ? 'active' : ''\"\r\n            (click)=\"catalogue_type = 'Product Range';getPdfList();\">\r\n            Product Range ({{pageCount.Product_Range ? pageCount.Product_Range : '0'}})</button>\r\n\r\n          <button mat-button [ngClass]=\"catalogue_type == 'Schemes' ? 'active' : ''\"\r\n            (click)=\"catalogue_type = 'Schemes';getPdfList();\">\r\n            Schemes ({{pageCount.Schemes ? pageCount.Schemes : '0'}})</button>\r\n\r\n            <button mat-button [ngClass]=\"catalogue_type == 'Influencer' ? 'active' : ''\"\r\n            (click)=\"catalogue_type = 'Influencer';getPdfList();\">\r\n            PE/AMB ({{pageCount.Influencer ? pageCount.Influencer : '0'}})</button>\r\n<button mat-button [ngClass]=\"catalogue_type == 'TADAPolicy' ? 'active' : ''\"\r\n            (click)=\"catalogue_type = 'TADAPolicy';getPdfList();\">\r\n            TADA policy ({{pageCount.TADAPolicy ? pageCount.TADAPolicy : '0'}})</button>\r\n             <button mat-button [ngClass]=\"catalogue_type == 'HRMannual' ? 'active' : ''\"\r\n            (click)=\"catalogue_type = 'HRMannual';getPdfList();\">\r\n            HR Mannual ({{pageCount.HRMannual ? pageCount.HRMannual : '0'}})</button>\r\n\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"container pb100\">\r\n    <div class=\"padding16\">\r\n      <div class=\"pdf-container\">\r\n        <ng-container *ngIf=\"!loader\">\r\n          <div class=\"pdf-block\" *ngFor=\"let row of document; let i = index;\">\r\n            <img src=\"assets/img/icons/pdf.png\">\r\n            <a target=\"_blank\" href=\"{{url+row.doc}}\">{{row.title| titlecase }}- ({{row.type | titlecase}})</a>\r\n            <div class=\"action-button right-action-btn\">\r\n              <button mat-icon-button matTooltip=\"Delete\" (click)=\"delete(row.id)\">\r\n                <i class=\"material-icons del\">delete</i>\r\n              </button>\r\n            </div>\r\n          </div>\r\n        </ng-container>\r\n\r\n        <ng-container *ngIf=\"loader\">\r\n          <div class=\"pdf-block skeleton\" *ngFor=\"let row of [].constructor(8);\">\r\n            <div></div>\r\n          </div>\r\n        </ng-container>\r\n\r\n\r\n      </div>\r\n    </div>\r\n    <ng-container class=\"left-auto\" *ngIf=\"document.length == 0\">\r\n      <app-not-result-found></app-not-result-found>\r\n    </ng-container>\r\n  </div>\r\n  <div>\r\n  </div>\r\n  <div class=\"fab-btns\">\r\n    <button mat-fab color=\"accent\"\r\n      *ngIf=\"logined_user_data.add_pdf_master=='1' || logined_user_data.edit_pdf_master=='1' \"\r\n      routerLink=\"pdf-catalogue-add\" (click)=\"lastBtnValue('add');\" [ngClass]=\"{'pulse': fabBtnValue=='add'}\">\r\n      <i class=\"material-icons mr10\">cloud_upload</i>\r\n      Upload PDF\r\n    </button>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/master/pdf-catalouge/pdf-catalouge.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/master/pdf-catalouge/pdf-catalouge.component.ts ***!
  \*****************************************************************/
/*! exports provided: PdfCatalougeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PdfCatalougeComponent", function() { return PdfCatalougeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_services_DatabaseService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/_services/DatabaseService */ "./src/_services/DatabaseService.ts");
/* harmony import */ var src_app_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/dialog.component */ "./src/app/dialog.component.ts");
/* harmony import */ var src_app_localstorage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/localstorage.service */ "./src/app/localstorage.service.ts");
/* harmony import */ var ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng6-toastr-notifications */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/ng6-toastr-notifications/fesm5/ng6-toastr-notifications.js");






var PdfCatalougeComponent = /** @class */ (function () {
    function PdfCatalougeComponent(service, toast, dialog, session) {
        this.service = service;
        this.toast = toast;
        this.dialog = dialog;
        this.session = session;
        this.fabBtnValue = 'add';
        this.skLoading = false;
        this.pdfCatalouge_data = [];
        this.loader = false;
        this.document = [];
        this.catalogue_type = 'Brochures';
        this.pagenumber = 1;
        this.logined_user_data = {};
        this.assign_login_data = {};
        this.start = 0;
        this.page_limit = this.service.pageLimit;
        this.assign_login_data = this.session.getSession();
        this.logined_user_data = this.assign_login_data.value.data;
        this.url = service.uploadUrl + 'doc_catalogue/';
        this.getPdfList();
    }
    PdfCatalougeComponent.prototype.ngOnInit = function () {
    };
    PdfCatalougeComponent.prototype.pervious = function () {
        this.start = this.start - this.page_limit;
        this.getPdfList();
    };
    PdfCatalougeComponent.prototype.nextPage = function () {
        this.start = this.start + this.page_limit;
        this.getPdfList();
    };
    PdfCatalougeComponent.prototype.lastBtnValue = function (value) {
        this.fabBtnValue = value;
    };
    PdfCatalougeComponent.prototype.getPdfList = function () {
        var _this = this;
        this.loader = true;
        if (this.pagenumber > this.total_page) {
            this.pagenumber = this.total_page;
            this.start = this.pageCount - this.page_limit;
        }
        if (this.start < 0) {
            this.start = 0;
        }
        this.service.post_rqst({ 'start': this.start, 'pagelimit': this.page_limit, "catalogue_type": this.catalogue_type }, "Master/documentCatalogueList").subscribe((function (result) {
            if (result['statusCode'] == 200) {
                _this.document = result['doc_list'];
                _this.pageCount = result['count'];
                if (_this.pagenumber > _this.total_page) {
                    _this.pagenumber = _this.total_page;
                    _this.start = _this.pageCount - _this.page_limit;
                }
                else {
                    _this.pagenumber = Math.ceil(_this.start / _this.page_limit) + 1;
                }
                _this.total_page = Math.ceil(_this.pageCount / _this.page_limit);
                _this.sr_no = _this.pagenumber - 1;
                _this.sr_no = _this.sr_no * _this.page_limit;
                setTimeout(function () {
                    _this.loader = false;
                }, 700);
            }
            else {
                _this.toast.errorToastr(result['statusMsg']);
            }
        }));
    };
    PdfCatalougeComponent.prototype.refresh = function () {
        this.filter = {};
        console.log('====================================');
        console.log(this.catalogue_type, 'this.catalogue_type');
        console.log('====================================');
        this.catalogue_type = 'Brochures';
        this.getPdfList();
    };
    PdfCatalougeComponent.prototype.delete = function (id) {
        var _this = this;
        this.dialog.delete('PDF Catalogue!').then(function (result) {
            if (result) {
                _this.service.post_rqst({ 'doc_id': id }, "Master/deleteDoc").subscribe(function (result) {
                    if (result['statusCode'] == 200) {
                        _this.toast.successToastr(result['statusMsg']);
                        _this.getPdfList();
                    }
                    else {
                        _this.toast.errorToastr(result['statusMsg']);
                    }
                });
            }
        });
    };
    PdfCatalougeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-pdf-catalouge',
            template: __webpack_require__(/*! ./pdf-catalouge.component.html */ "./src/app/master/pdf-catalouge/pdf-catalouge.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_services_DatabaseService__WEBPACK_IMPORTED_MODULE_2__["DatabaseService"], ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_5__["ToastrManager"], src_app_dialog_component__WEBPACK_IMPORTED_MODULE_3__["DialogComponent"], src_app_localstorage_service__WEBPACK_IMPORTED_MODULE_4__["sessionStorage"]])
    ], PdfCatalougeComponent);
    return PdfCatalougeComponent;
}());



/***/ }),

/***/ "./src/app/pdf-catalogue-add/pdf-catalogue-add.component.html":
/*!********************************************************************!*\
  !*** ./src/app/pdf-catalogue-add/pdf-catalogue-add.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-container\">\r\n\t<div class=\"tools-container\">\r\n\t\t<a mat-icon-button matTooltip=\"Back\" routerLink=\"/catalogue\">\r\n\t\t\t<i class=\"material-icons\">arrow_back</i>\r\n\t\t</a>\r\n\t\t<h2>Add New Pdf</h2>\r\n\t</div>\r\n\r\n\t<div class=\"container pt10 pl10 pr10 pb50\">\r\n\t\t<form #f=\"ngForm\" (ngSubmit)=\" f.valid && submitDetail()\">\r\n\t\t\t<div class=\"row\">\r\n\t\t\t\t<div class=\"col s12\">\r\n\t\t\t\t\t<div class=\"card pb0\">\r\n\t\t\t\t\t\t<div class=\"card-head\">\r\n\t\t\t\t\t\t\t<h2>Basic Information</h2>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class=\"card-body cs-form\">\r\n\t\t\t\t\t\t\t<div class=\"row\">\r\n\t\t\t\t\t\t\t\t<div class=\"col s12 m3 l3\">\r\n\t\t\t\t\t\t\t\t\t<mat-form-field appearance=\"outline\">\r\n\t\t\t\t\t\t\t\t\t\t<mat-label>User Type</mat-label>\r\n\t\t\t\t\t\t\t\t\t\t<mat-select name=\"catalogue_user_type\" #catalogue_user_type=\"ngModel\"\r\n\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"data.catalogue_user_type\" required >\r\n\t\t\t\t\t\t\t\t\t\t\t<mat-option disabled=\"\">Select</mat-option>\r\n\t\t\t\t\t\t\t\t\t\t\t<!-- <mat-option value=\"distributor\">Distributor</mat-option>\r\n\t\t\t\t\t\t\t\t\t\t\t<mat-option value=\"direct_dealer\">Direct Dealer</mat-option>\r\n\t\t\t\t\t\t\t\t\t\t\t<mat-option value=\"retailer\">Dealer</mat-option> -->\r\n\t\t\t\t\t\t\t\t\t\t\t<mat-option value=\"sales_user\">Sales Executive</mat-option>\r\n\t\t\t\t\t\t\t\t\t\t\t<mat-option value=\"Ply Expert\">Ply Expert</mat-option>\r\n\t\t\t\t\t\t\t\t\t\t\t<mat-option value=\"Ambassador\">Ambassador</mat-option>\r\n\r\n\r\n\r\n\r\n\r\n\t\t\t\t\t\t\t\t\t\t</mat-select>\r\n\t\t\t\t\t\t\t\t\t</mat-form-field>\r\n\r\n\t\t\t\t\t\t\t\t\t<div class=\"alert alert-danger\" *ngIf=\"catalogue_user_type.touched || f.submitted\">\r\n\t\t\t\t\t\t\t\t\t\t<p *ngIf=\"catalogue_user_type.errors?.required\">This field is required</p>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t\t<div class=\"col s12 m3 l3\">\r\n\t\t\t\t\t\t\t\t\t<mat-form-field appearance=\"outline\">\r\n\t\t\t\t\t\t\t\t\t\t<mat-label>Catalogue Type</mat-label>\r\n\t\t\t\t\t\t\t\t\t\t<mat-select name=\"catalogue_type\" #catalogue_type=\"ngModel\"\r\n\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"data.catalogue_type\" (ngModelChange)=\"getDesignation('')\" required>\r\n\t\t\t\t\t\t\t\t\t\t\t<mat-option disabled=\"\">Select</mat-option>\r\n\t\t\t\t\t\t\t\t\t\t\t<mat-option value=\"Brochures\">Brochures</mat-option>\r\n\t\t\t\t\t\t\t\t\t\t\t<mat-option value=\"Business Understanding\">Business\r\n\t\t\t\t\t\t\t\t\t\t\t\tUnderstanding</mat-option>\r\n\t\t\t\t\t\t\t\t\t\t\t<mat-option value=\"Price List\">Price List</mat-option>\r\n\t\t\t\t\t\t\t\t\t\t\t<mat-option value=\"Product Range\">Product Range</mat-option>\r\n\t\t\t\t\t\t\t\t\t\t\t<mat-option value=\"Schemes\">Schemes</mat-option>\r\n\t\t\t\t\t\t\t\t\t\t\t<mat-option value=\"HRMannual\">HR Mannual</mat-option>\r\n\t\t\t\t\t\t\t\t\t\t\t<mat-option value=\"TADAPolicy\">TADA policy</mat-option>\r\n\t\t\t\t\t\t\t\t\t\t</mat-select>\r\n\t\t\t\t\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t\t\t\t\t\t<div class=\"alert alert-danger\" *ngIf=\"catalogue_type.touched || f.submitted\">\r\n\t\t\t\t\t\t\t\t\t\t<p *ngIf=\"catalogue_type.errors?.required\">This field is required</p>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t\t<div class=\"col s12 m3 l3\" *ngIf=\"data.catalogue_type=='TADAPolicy'\">\r\n\t\t\t\t\t\t\t\t\t<mat-form-field appearance=\"outline\">\r\n\t\t\t\t\t\t\t\t\t\t<mat-label>Designation</mat-label>\r\n\t\t\t\t\t\t\t\t\t\t<mat-select name=\"designation\" #designation=\"ngModel\"\r\n\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"data.designation\" required multiple>\r\n\t\t\t\t\t\t\t\t\t\t    <mat-option>\r\n                                                <ngx-mat-select-search noEntriesFoundLabel=\"'no data found'\"\r\n                                                    placeholderLabel=\"Search..\"\r\n                                                    (keyup)=\"getDesignation($event.target.value)\"></ngx-mat-select-search>\r\n                                            </mat-option>\r\n\t\t\t\t\t\t\t\t\t\t\t<mat-option *ngFor=\"let row of AllDesignation\"  value=\"{{row.id}}\">{{row.role_name}}</mat-option>\r\n\t\t\t\t\t\t\t\t\t\t</mat-select>\r\n\t\t\t\t\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t\t\t\t\t\t<div class=\"alert alert-danger\" *ngIf=\"designation.touched || f.submitted\">\r\n\t\t\t\t\t\t\t\t\t\t<p *ngIf=\"designation.errors?.required\">This field is required</p>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\r\n\t\t\t\t\t\t\t\t<div class=\"col s12 m3 l3\">\r\n\t\t\t\t\t\t\t\t\t<mat-form-field appearance=\"outline\">\r\n\t\t\t\t\t\t\t\t\t\t<mat-label>Title</mat-label>\r\n\t\t\t\t\t\t\t\t\t\t<input matInput placeholder=\"Type Here ...\" name=\"title\" #title=\"ngModel\"\r\n\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"data.title\" required>\r\n\t\t\t\t\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t\t\t\t\t\t<div class=\"alert alert-danger\" *ngIf=\"title.touched || f.submitted\">\r\n\t\t\t\t\t\t\t\t\t\t<p *ngIf=\"title.errors?.required\">This field is required</p>\r\n\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t<div class=\"col s12 m3 l3\">\r\n\t\t\t\t\t\t\t\t\t<label class=\"upload-file-input\">\r\n\t\t\t\t\t\t\t\t\t\t<i class=\"material-icons\">cloud_upload</i>\r\n\t\t\t\t\t\t\t\t\t\t<input type=\"file\" placeholder=\"{{file_name}}\" name=\"\"\r\n\t\t\t\t\t\t\t\t\t\t\t(change)=\"onUploadChange1($event,f)\" accept=\".pdf\"\r\n\t\t\t\t\t\t\t\t\t\t\t(click)=\"$event.target.value=null\" style=\"display: none;\">\r\n\t\t\t\t\t\t\t\t\t\t<p *ngIf=\"file_name == null || file_name == ''\">Upload .PDF File</p>\r\n\t\t\t\t\t\t\t\t\t\t<p *ngIf=\"file_name != null \">{{file_name}}</p>\r\n\t\t\t\t\t\t\t\t\t</label>\r\n\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\r\n\t\t\t<div class=\"row\">\r\n\t\t\t\t<div class=\"col s12\">\r\n\t\t\t\t\t<div class=\"text-right\">\r\n\t\t\t\t\t\t<button [ngClass]=\"{'loading': savingFlag == true}\" mat-raised-button color=\"accent\"\r\n\t\t\t\t\t\t\ttype=\"submit\" [disabled]=\"savingFlag == true\">\r\n\t\t\t\t\t\t\t{{savingFlag == true ? 'Saving' : 'Save'}}\r\n\t\t\t\t\t\t</button>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\r\n\t\t</form>\r\n\t</div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/pdf-catalogue-add/pdf-catalogue-add.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/pdf-catalogue-add/pdf-catalogue-add.component.ts ***!
  \******************************************************************/
/*! exports provided: PdfCatalogueAddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PdfCatalogueAddComponent", function() { return PdfCatalogueAddComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_services_DatabaseService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/_services/DatabaseService */ "./src/_services/DatabaseService.ts");
/* harmony import */ var ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng6-toastr-notifications */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/ng6-toastr-notifications/fesm5/ng6-toastr-notifications.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/lodash/dist/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_5__);






var PdfCatalogueAddComponent = /** @class */ (function () {
    function PdfCatalogueAddComponent(serve, route, router, toast) {
        this.serve = serve;
        this.route = route;
        this.router = router;
        this.toast = toast;
        this.data = {};
        this.savingFlag = false;
        this.urls = [];
        this.imageError = '';
        this.AllDesignation = [];
        this.typecheck = '';
        this.istrue = false;
        this.selectedFile = [];
        this.file = {};
        this.formData = new FormData();
        this.userData = JSON.parse(localStorage.getItem('st_user'));
        this.userId = this.userData['data']['id'];
        this.userName = this.userData['data']['name'];
        this.data.catalogue_user_type = ['sales_user'];
    }
    PdfCatalogueAddComponent.prototype.ngOnInit = function () {
    };
    PdfCatalogueAddComponent.prototype.onUploadChange1 = function (evt, f) {
        this.imageError = null;
        this.file = evt.target.files[0];
        this.file_name = this.file.name;
        var allowed_types = ['application/pdf'];
        this.typecheck = !lodash__WEBPACK_IMPORTED_MODULE_5__["includes"]("application/pdf", this.file.type);
        if (!lodash__WEBPACK_IMPORTED_MODULE_5__["includes"](allowed_types, this.file.type)) {
            this.toast.errorToastr('Only Pdf File Accepted');
            this.file_name = '';
            this.istrue = false;
            return;
        }
        var byte = 1000000; // equal to 1mb
        if (this.file.size > (byte * 20)) {
            this.toast.errorToastr('PDF file size is too large, maximum file size is 20 MB.');
            this.file_name = '';
            this.istrue = false;
            return;
        }
        else {
            this.istrue = true;
        }
    };
    PdfCatalogueAddComponent.prototype.delete_img = function (index) {
        this.urls.splice(index, 1);
        this.selectedFile = [];
    };
    PdfCatalogueAddComponent.prototype.getDesignation = function (search) {
        var _this = this;
        this.serve.post_rqst({ 'search': search }, "Master/designationList").subscribe((function (result) {
            if (result['statusCode'] == 200) {
                _this.AllDesignation = result['data'];
            }
            else {
                _this.toast.errorToastr(result['statusMsg']);
            }
        }));
    };
    PdfCatalogueAddComponent.prototype.submitDetail = function () {
        var _this = this;
        this.data.created_by_name = this.userName;
        this.data.created_by_id = this.userId;
        if (this.data.catalogue_user_type != 'sales_user') {
            this.data.catalogue_type = 'Influencer';
        }
        this.savingFlag = true;
        this.serve.post_rqst(this.data, 'Master/addDocumentCatalogue').subscribe(function (resp) {
            if (resp['statusCode'] == 200) {
                if (_this.formData) {
                    _this.formData.append('category', _this.file, _this.file.name);
                    _this.formData.append('id', resp['last_id']);
                    _this.serve.FileData((_this.formData), "Master/insertDocumentCatalogueDocFile").subscribe(function (resp) {
                        _this.savingFlag = false;
                        if (resp['statusCode'] == 200) {
                            _this.toast.successToastr(resp['statusMsg']);
                            _this.savingFlag = false;
                            _this.router.navigate(['/catalogue']);
                        }
                        else {
                            _this.toast.errorToastr(resp['statusMsg']);
                            _this.savingFlag = false;
                        }
                    });
                }
            }
            else {
                _this.toast.errorToastr(resp['statusMsg']);
                _this.savingFlag = false;
            }
        });
    };
    PdfCatalogueAddComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-pdf-catalogue-add',
            template: __webpack_require__(/*! ./pdf-catalogue-add.component.html */ "./src/app/pdf-catalogue-add/pdf-catalogue-add.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_services_DatabaseService__WEBPACK_IMPORTED_MODULE_2__["DatabaseService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_3__["ToastrManager"]])
    ], PdfCatalogueAddComponent);
    return PdfCatalogueAddComponent;
}());



/***/ })

}]);