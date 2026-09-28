(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["master-customer-category-module-customer-category-module"],{

/***/ "./src/app/master/customer-category-list/customer-category-list.component.html":
/*!*************************************************************************************!*\
  !*** ./src/app/master/customer-category-list/customer-category-list.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-container\">\r\n  <div class=\"tools-container\">\r\n    <h2>Customer Category</h2>\r\n    <div class=\"left-auto df ac flex-gap-10\">\r\n      <button mat-icon-button matTooltip=\"Refresh\" (click)=\"refresh()\">\r\n        <i class=\"material-icons\">refresh</i>\r\n      </button>\r\n      <div class=\"pagination\" *ngIf=\"datanotfound\">\r\n        <div class=\"pagination-content\">\r\n          Pages\r\n          <span>{{pagenumber}}</span>\r\n          of\r\n          <span>{{total_page}}</span>\r\n        </div>\r\n        <div class=\"page-nav\">\r\n          <button mat-icon-button matTooltip=\"Older\" (click)=\"pervious()\" [disabled]=\"start == 0\">\r\n            <i class=\"material-icons\">navigate_before</i>\r\n          </button>\r\n          <!-- <input type=\"text\" placeholder=\"GO TO\" name=\"pagenumber\" (keyup.enter)=\"inputValue(pagenumber);\" onkeypress=\"return event.charCode>=48 && event.charCode<=57\" [(ngModel)]=\"pagenumber\" min=\"1\" max={{total_page}}> -->\r\n          <button mat-icon-button matTooltip=\"Newer\" (click)=\"nextPage()\" [disabled]=\"pagenumber == total_page \">\r\n            <i class=\"material-icons\">navigate_next</i>\r\n          </button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"container table-container\">\r\n    <div class=\"cs-table\">\r\n      <div class=\"sticky-head\">\r\n        <div class=\"table-head\">\r\n          <table>\r\n            <tr>\r\n              <th class=\"w50\">S.No</th>\r\n              <th class=\"w100\">Date Created</th>\r\n              <th class=\"w100\">Created By</th>\r\n              <th>Category Title</th>\r\n              <th class=\"w130\">Customer Type</th>\r\n              <th class=\"w100  text-right\">Range Start</th>\r\n              <th class=\"w100  text-right\">Range End</th>\r\n              <th class=\"w100  text-right\">Branding Budget</th>\r\n              <th class=\"w60   text-center\"\r\n                *ngIf=\"login_data.edit_customer_master=='1' || login_data.delete_customer_master=='1'\">Action</th>\r\n            </tr>\r\n          </table>\r\n        </div>\r\n        <div class=\"table-head border-top\">\r\n          <table>\r\n            <tr>\r\n              <th class=\"w50\"></th>\r\n              <th class=\"w100\">\r\n                <div class=\"th-search-acmt\">\r\n                  <mat-form-field class=\"cs-input date-column infix-bodr\">\r\n                    <input matInput [matDatepicker]=\"picker\" placeholder=\"Date\" name=\"date_created\"\r\n                      #date_created=\"ngModel\" [(ngModel)]=\"filter.date_created\" (ngModelChange)=\"date_format()\"\r\n                      [max]=\"today_date\" readonly>\r\n                    <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\r\n                    <mat-datepicker #picker></mat-datepicker>\r\n                  </mat-form-field>\r\n                </div>\r\n              </th>\r\n              <th class=\"w100\">\r\n                <div class=\"th-search-acmt\">\r\n                  <mat-form-field class=\"example-full-width cs-input select-input\">\r\n                    <input matInput placeholder=\"Search...\" (keyup.enter)=\"getCustomerCategory()\"\r\n                      #created_by_name=\"ngModel\" [(ngModel)]=\"filter.created_by_name\">\r\n                  </mat-form-field>\r\n                </div>\r\n              </th>\r\n              <th>\r\n                <div class=\"th-search-acmt\">\r\n                  <mat-form-field class=\"example-full-width cs-input select-input\">\r\n                    <input matInput placeholder=\"Search...\" (keyup.enter)=\"getCustomerCategory()\" #title=\"ngModel\"\r\n                      [(ngModel)]=\"filter.title\">\r\n                  </mat-form-field>\r\n                </div>\r\n              </th>\r\n              <th class=\"w130  text-center\">\r\n                <div class=\"th-search-acmt\">\r\n                  <mat-form-field class=\"cs-input select-input\">\r\n                    <mat-select name=\"customer_type\" #customer_type=\"ngModel\" [(ngModel)]=\"filter.customer_type\"\r\n                      (selectionChange)=\"getCustomerCategory()\">\r\n                      <mat-option value=\"\">All</mat-option>\r\n                      <mat-option value=\"1\">Distributor</mat-option>\r\n                      <mat-option value=\"7\">Direct Dealer </mat-option>\r\n                      <mat-option value=\"3\">Retailer</mat-option>\r\n                    </mat-select>\r\n                  </mat-form-field>\r\n                </div>\r\n              </th>\r\n              <th class=\"w100  text-center\">&nbsp;</th>\r\n              <th class=\"w100  text-center\">&nbsp;</th>\r\n              <th class=\"w100\"></th>\r\n              <th class=\"w60\" *ngIf=\"login_data.edit_customer_master=='1' || login_data.delete_customer_master=='1'\">\r\n              </th>\r\n            </tr>\r\n          </table>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"table-container\" *ngIf=\"categoryList.length > 0\">\r\n        <div class=\"table-content\">\r\n          <table>\r\n            <ng-container *ngIf=\"!loader\">\r\n              <tr *ngFor=\"let row of categoryList; let i = index;\">\r\n                <td class=\"w50\">{{ i + 1 + sr_no }}</td>\r\n                <td class=\"w100\">{{row.date_created | date}}</td>\r\n                <td class=\"w100\">{{row.created_by_name}}</td>\r\n                <td>{{row.title | titlecase}}</td>\r\n                <td class=\"w130\">{{row.customer_type== 1 ? 'Distributor' : (row.customer_type== 3 ? 'Retailer' : 'Direct\r\n                  Dealer')}}</td>\r\n                <td class=\"w100  text-right\">&#x20B9; {{row.range_start}}</td>\r\n                <td class=\"w100  text-right\">&#x20B9; {{row.range_end}}</td>\r\n                <td class=\"w100  text-right\">&#x20B9; {{row.branding_budget}}</td>\r\n                <td class=\"w60 text-center\"\r\n                  *ngIf=\"login_data.edit_customer_master=='1' || login_data.delete_customer_master=='1'\">\r\n                  <div class=\"action-button\">\r\n                    <button *ngIf=\"login_data.edit_customer_master=='1'\" mat-icon-button matTooltip=\"Edit\"\r\n                      [routerLink]=\"[ 'add-customer-category', row.id ]\">\r\n                      <i class=\"material-icons edit\">edit</i>\r\n                    </button>\r\n                    <button *ngIf=\"login_data.delete_customer_master=='1'\" mat-icon-button matTooltip=\"Delete\"\r\n                      (click)=\"delete(row.id)\">\r\n                      <i class=\"material-icons del\">delete</i>\r\n                    </button>\r\n                  </div>\r\n                </td>\r\n              </tr>\r\n            </ng-container>\r\n\r\n            <ng-container *ngIf=\"loader\">\r\n              <tr class=\"sk-loading\" *ngFor=\"let row of categoryList\">\r\n                <td class=\"w50\">\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n                <td class=\"w100\">\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n                <td class=\"w100\">\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n                <td>\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n                <td class=\"w130\">\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n                <td class=\"w100\">\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n                <td class=\"w100\">\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n                <td class=\"w100\">\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n                <td class=\"w60\" *ngIf=\"login_data.edit_customer_master=='1' || login_data.delete_customer_master=='1'\">\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n              </tr>\r\n            </ng-container>\r\n          </table>\r\n        </div>\r\n      </div>\r\n\r\n\r\n      <ng-container *ngIf=\"categoryList.length == 0\">\r\n        <app-not-result-found></app-not-result-found>\r\n      </ng-container>\r\n\r\n    </div>\r\n\r\n  </div>\r\n\r\n\r\n\r\n\r\n  <div class=\"fab-btns\"\r\n    *ngIf=\"login_data.add_customer_master=='1' || login_data.export_customer_master=='1' || login_data.import_customer_master=='1'\">\r\n    <button class=\"pulse\" mat-fab color=\"accent\" [ngClass]=\"{'pulse': fabBtnValue=='add'}\" [matMenuTriggerFor]=\"menu\">\r\n      <i class=\"material-icons\">apps</i>\r\n      Action\r\n    </button>\r\n  </div>\r\n  <mat-menu #menu=\"matMenu\">\r\n    <button mat-menu-item *ngIf=\"categoryList.length > 0 && login_data.export_customer_master=='1'\"\r\n      (click)=\"downloadExcel();\">\r\n      <mat-icon>download</mat-icon>\r\n      <span>Download excel</span>\r\n    </button>\r\n    <button mat-menu-item routerLink=\"add-customer-category\" *ngIf=\"login_data.add_customer_master=='1'\">\r\n      <mat-icon>add</mat-icon>\r\n      <span>Add New</span>\r\n    </button>\r\n  </mat-menu>\r\n</div>"

/***/ }),

/***/ "./src/app/master/customer-category-list/customer-category-list.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/master/customer-category-list/customer-category-list.component.ts ***!
  \***********************************************************************************/
/*! exports provided: CustomerCategoryListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerCategoryListComponent", function() { return CustomerCategoryListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var src_app_dialog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/dialog.component */ "./src/app/dialog.component.ts");
/* harmony import */ var src_services_DatabaseService__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/_services/DatabaseService */ "./src/_services/DatabaseService.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var src_app_upload_file_modal_upload_file_modal_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/upload-file-modal/upload-file-modal.component */ "./src/app/upload-file-modal/upload-file-modal.component.ts");
/* harmony import */ var src_app_localstorage_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/localstorage.service */ "./src/app/localstorage.service.ts");
/* harmony import */ var ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng6-toastr-notifications */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/ng6-toastr-notifications/fesm5/ng6-toastr-notifications.js");










var CustomerCategoryListComponent = /** @class */ (function () {
    function CustomerCategoryListComponent(dialog, toast, service, alert, router, session) {
        this.dialog = dialog;
        this.toast = toast;
        this.service = service;
        this.alert = alert;
        this.router = router;
        this.session = session;
        this.filter = {};
        this.categoryList = [];
        this.loader = false;
        this.start = 0;
        this.pagenumber = 1;
        this.assign_login_data = {};
        this.login_data = {};
        this.sr_no = 0;
        this.fabBtnValue = 'add';
        this.datanotfound = true;
        this.downurl = '';
        this.page_limit = service.pageLimit;
        this.downurl = service.downloadUrl;
        this.assign_login_data = this.session.getSession();
        this.login_data = this.assign_login_data.value.data;
        this.getCustomerCategory();
        this.today_date = new Date();
    }
    CustomerCategoryListComponent.prototype.ngOnInit = function () {
    };
    CustomerCategoryListComponent.prototype.upload_excel = function (type) {
        var _this = this;
        var dialogRef = this.dialog.open(src_app_upload_file_modal_upload_file_modal_component__WEBPACK_IMPORTED_MODULE_7__["UploadFileModalComponent"], {
            width: '500px',
            panelClass: 'cs-modal',
            disableClose: true,
            data: {
                'from': 'customerCategoryList',
                'modal_type': type
            }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            _this.getCustomerCategory();
        });
    };
    CustomerCategoryListComponent.prototype.inputValue = function (value) {
        if (value > this.total_page) {
            this.start = this.total_page;
        }
        else if (value == '' || value <= 0) {
            this.start = 0;
        }
        else {
            this.start = (this.pagenumber * this.page_limit) - this.page_limit;
        }
        this.getCustomerCategory();
    };
    CustomerCategoryListComponent.prototype.pervious = function () {
        this.start = this.start - this.page_limit;
        this.getCustomerCategory();
    };
    CustomerCategoryListComponent.prototype.nextPage = function () {
        this.start = this.start + this.page_limit;
        this.getCustomerCategory();
    };
    CustomerCategoryListComponent.prototype.date_format = function () {
        this.filter.date_created = moment__WEBPACK_IMPORTED_MODULE_3__(this.filter.date_created).format('YYYY-MM-DD');
        this.getCustomerCategory();
    };
    CustomerCategoryListComponent.prototype.getCustomerCategory = function () {
        var _this = this;
        this.loader = true;
        if (this.pagenumber > this.total_page) {
            this.pagenumber = this.total_page;
            this.start = this.pageCount - this.page_limit;
        }
        if (this.start < 0) {
            this.start = 0;
        }
        this.service.post_rqst({ 'filter': this.filter, 'start': this.start, 'pagelimit': this.page_limit }, "Master/customerCategoryMasterList").subscribe((function (result) {
            if (result['statusCode'] == 200) {
                _this.categoryList = result['customer_category_list'];
                _this.pageCount = result['count'];
                if (_this.categoryList.length == 0) {
                    _this.datanotfound = false;
                }
                else {
                    _this.datanotfound = true;
                }
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
                _this.loader = false;
            }
            else {
                _this.toast.errorToastr(result['statusMsg']);
            }
        }));
    };
    CustomerCategoryListComponent.prototype.delete = function (id) {
        var _this = this;
        this.alert.delete('Customer Category !').then(function (result) {
            if (result) {
                _this.service.post_rqst({ 'id': id }, "Master/deleteCustomerCategory").subscribe(function (result) {
                    if (result['statusCode'] == 200) {
                        _this.toast.successToastr(result['statusMsg']);
                        _this.getCustomerCategory();
                    }
                    else {
                        _this.toast.errorToastr(result['statusMsg']);
                    }
                });
            }
        });
    };
    CustomerCategoryListComponent.prototype.refresh = function () {
        this.filter = {};
        this.getCustomerCategory();
    };
    CustomerCategoryListComponent.prototype.downloadExcel = function () {
        var _this = this;
        this.service.post_rqst({ 'filter': this.filter }, "Excel/customer_category_master_list_for_export").subscribe((function (result) {
            if (result['msg'] == true) {
                window.open(_this.downurl + result['filename']);
                _this.getCustomerCategory();
            }
            else {
            }
        }));
    };
    CustomerCategoryListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-customer-category-list',
            template: __webpack_require__(/*! ./customer-category-list.component.html */ "./src/app/master/customer-category-list/customer-category-list.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_6__["MatDialog"], ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_9__["ToastrManager"], src_services_DatabaseService__WEBPACK_IMPORTED_MODULE_5__["DatabaseService"], src_app_dialog_component__WEBPACK_IMPORTED_MODULE_4__["DialogComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], src_app_localstorage_service__WEBPACK_IMPORTED_MODULE_8__["sessionStorage"]])
    ], CustomerCategoryListComponent);
    return CustomerCategoryListComponent;
}());



/***/ }),

/***/ "./src/app/master/customer-category-module/customer-category.module.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/master/customer-category-module/customer-category.module.ts ***!
  \*****************************************************************************/
/*! exports provided: CustomerCategoryModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerCategoryModule", function() { return CustomerCategoryModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angular_ng_autocomplete__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angular-ng-autocomplete */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/angular-ng-autocomplete/fesm5/angular-ng-autocomplete.js");
/* harmony import */ var ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-multiselect-dropdown */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/ng-multiselect-dropdown/fesm5/ng-multiselect-dropdown.js");
/* harmony import */ var ngx_mat_select_search__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-mat-select-search */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/ngx-mat-select-search/fesm5/ngx-mat-select-search.js");
/* harmony import */ var src_app_app_utility_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/app-utility.module */ "./src/app/app-utility.module.ts");
/* harmony import */ var src_app_auth_component_guard__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/auth-component.guard */ "./src/app/auth-component.guard.ts");
/* harmony import */ var src_app_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/material */ "./src/app/material.ts");
/* harmony import */ var _customer_category_list_customer_category_list_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../customer-category-list/customer-category-list.component */ "./src/app/master/customer-category-list/customer-category-list.component.ts");
/* harmony import */ var _customer_category_customer_category_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../customer-category/customer-category.component */ "./src/app/master/customer-category/customer-category.component.ts");














var customerCategoryRoutes = [
    { path: "", children: [
            { path: "", component: _customer_category_list_customer_category_list_component__WEBPACK_IMPORTED_MODULE_12__["CustomerCategoryListComponent"], canActivate: [src_app_auth_component_guard__WEBPACK_IMPORTED_MODULE_10__["AuthComponentGuard"]], data: { expectedRole: ['1'] } },
            { path: "add-customer-category", component: _customer_category_customer_category_component__WEBPACK_IMPORTED_MODULE_13__["CustomerCategoryComponent"], canActivate: [src_app_auth_component_guard__WEBPACK_IMPORTED_MODULE_10__["AuthComponentGuard"]], data: { expectedRole: ['1'] } },
            { path: "add-customer-category/:id", component: _customer_category_customer_category_component__WEBPACK_IMPORTED_MODULE_13__["CustomerCategoryComponent"], canActivate: [src_app_auth_component_guard__WEBPACK_IMPORTED_MODULE_10__["AuthComponentGuard"]], data: { expectedRole: ['1'] } },
        ] },
];
var CustomerCategoryModule = /** @class */ (function () {
    function CustomerCategoryModule() {
    }
    CustomerCategoryModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _customer_category_list_customer_category_list_component__WEBPACK_IMPORTED_MODULE_12__["CustomerCategoryListComponent"],
                _customer_category_customer_category_component__WEBPACK_IMPORTED_MODULE_13__["CustomerCategoryComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild(customerCategoryRoutes),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_7__["NgMultiSelectDropDownModule"],
                src_app_material__WEBPACK_IMPORTED_MODULE_11__["MaterialModule"],
                angular_ng_autocomplete__WEBPACK_IMPORTED_MODULE_6__["AutocompleteLibModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialogModule"],
                ngx_mat_select_search__WEBPACK_IMPORTED_MODULE_8__["NgxMatSelectSearchModule"],
                src_app_app_utility_module__WEBPACK_IMPORTED_MODULE_9__["AppUtilityModule"]
            ]
        })
    ], CustomerCategoryModule);
    return CustomerCategoryModule;
}());



/***/ }),

/***/ "./src/app/master/customer-category/customer-category.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/master/customer-category/customer-category.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div  class=\"main-container\">\r\n  <div class=\"tools-container\">\r\n    <a mat-icon-button  matTooltip=\"Back\" routerLink=\"/customer-category\">\r\n      <i class=\"material-icons\">arrow_back</i>\r\n    </a>\r\n    <h2>{{customer_category_id ? 'Edit' : 'Add'}} Customer Category</h2>\r\n  </div>\r\n  \r\n  <div class=\"container pt10 pl10 pr10 pb50\" >\r\n    <form name=\"detail\" #f=\"ngForm\" (ngSubmit)=\" f.valid && submitDetail()\">\r\n      \r\n      <div class=\"row\">\r\n        <div class=\"col s12\">\r\n          <div class=\"card pb0\">\r\n            <div class=\"card-head\">\r\n              <h2>Basic Information</h2>\r\n            </div>\r\n            <div class=\"card-body cs-form\">\r\n              <div class=\"row\">\r\n                <div class=\"col s12 m3 l3\">\r\n                  <mat-form-field appearance=\"outline\">\r\n                    <mat-label>Customer Type</mat-label>\r\n                    <mat-select name=\"customer_type\" [(ngModel)]=\"data.customer_type\" #customer_type=\"ngModel\" [ngClass]=\"{'has-error' : customer_type.invalid } \" required>\r\n                      <mat-option value=\"\" disabled>Select</mat-option>\r\n                      <mat-option value=\"1\" >Distributor</mat-option>\r\n                      <mat-option value=\"7\" >Direct Dealer</mat-option>\r\n                      <mat-option value=\"3\" >Retailer</mat-option>\r\n                    </mat-select>\r\n                  </mat-form-field>\r\n                  <div class=\"alert alert-danger\" *ngIf=\"customer_type.touched || f.submitted\">\r\n                    <p *ngIf=\"customer_type.errors?.required\">This field is required</p>\r\n                  </div>\r\n                </div>\r\n                <div class=\"col s12 m3 l3\">\r\n                  <mat-form-field  appearance=\"outline\">\r\n                    <mat-label>Category Title</mat-label>\r\n                    <input matInput placeholder=\"Type Here ...\"  name=\"title\" #title=\"ngModel\" [(ngModel)]=\"data.title\"  required>\r\n                  </mat-form-field>\r\n                  <div class=\"alert alert-danger\" *ngIf=\"title.touched || f.submitted\">\r\n                    <p *ngIf=\"title.errors?.required\">This field is required</p>\r\n                  </div>\r\n                </div>\r\n\r\n                <div class=\"col s12 m3 l3\">\r\n                  <mat-form-field  appearance=\"outline\" >\r\n                    <mat-label>Range Start</mat-label>\r\n                    <input matInput  placeholder=\"Type Here ...\" name=\"range_start\" #range_start=\"ngModel\" onkeypress=\"return event.charCode>=48 && event.charCode<=57\" [(ngModel)]=\"data.range_start\" required>\r\n                  </mat-form-field>\r\n                  <div class=\"alert alert-danger\" *ngIf=\"range_start.touched || f.submitted\">\r\n                    <p *ngIf=\"range_start.errors?.required\">This field is required</p>\r\n                  </div>\r\n                </div>\r\n                \r\n                <div class=\"col s12 m3 l3\">\r\n                  <mat-form-field  appearance=\"outline\" >\r\n                    <mat-label>Range End</mat-label>\r\n                    <input matInput placeholder=\"Type Here ...\" name=\"range_end\" #range_end=\"ngModel\" onkeypress=\"return event.charCode>=48 && event.charCode<=57\" [(ngModel)]=\"data.range_end\" required>\r\n                  </mat-form-field>\r\n                  <div class=\"alert alert-danger\" >\r\n                    <ng-container *ngIf=\"range_end.touched || f.submitted\">\r\n                      <p *ngIf=\"range_end.errors?.required\">This field is required</p>\r\n                    </ng-container>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              \r\n              <div class=\"row\">\r\n                <!-- <div class=\"col s12 m3 l3\">\r\n                  <mat-form-field  appearance=\"outline\" >\r\n                    <mat-label>Branding Budget</mat-label>\r\n                    <input matInput placeholder=\"Type Here ...\" name=\"branding_budget\" #branding_budget=\"ngModel\" [(ngModel)]=\"data.branding_budget\" onkeypress=\"return event.charCode>=48 && event.charCode<=57\" required>\r\n                  </mat-form-field>\r\n                  <div class=\"alert alert-danger\" *ngIf=\"branding_budget.touched || f.submitted\">\r\n                    <p *ngIf=\"branding_budget.errors?.required\">This field is required</p>\r\n                  </div>\r\n                </div> -->\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      \r\n      <div class=\"row\">\r\n        <div class=\"col s12\">\r\n          <div class=\"text-right\">\r\n            <button [ngClass]=\"{'loading': savingFlag == true}\" mat-raised-button color=\"accent\" type=\"submit\" [disabled]=\"savingFlag == true\">\r\n              {{(savingFlag == true || customer_category_id) ? (customer_category_id ? 'Update' : 'Saving') : 'Save'}}\r\n            </button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </form>\r\n  </div>\r\n  <div>\r\n  </div>\r\n</div>\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/master/customer-category/customer-category.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/master/customer-category/customer-category.component.ts ***!
  \*************************************************************************/
/*! exports provided: CustomerCategoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerCategoryComponent", function() { return CustomerCategoryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_services_DatabaseService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/_services/DatabaseService */ "./src/_services/DatabaseService.ts");
/* harmony import */ var ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng6-toastr-notifications */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/ng6-toastr-notifications/fesm5/ng6-toastr-notifications.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/router/fesm5/router.js");





var CustomerCategoryComponent = /** @class */ (function () {
    function CustomerCategoryComponent(service, rout, toast, router, route) {
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
    CustomerCategoryComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.customer_category_id = params['id'];
            if (_this.customer_category_id) {
                // this.loader = true;
                _this.getCategoryDetail();
            }
        });
    };
    CustomerCategoryComponent.prototype.MobileNumber = function (event) {
        var pattern = /[0-9\+\-\ ]/;
        var inputChar = String.fromCharCode(event.charCode);
        if (event.keyCode != 8 && !pattern.test(inputChar)) {
            event.preventDefault();
        }
    };
    CustomerCategoryComponent.prototype.getCategoryDetail = function () {
        var _this = this;
        this.service.post_rqst({ 'id': this.customer_category_id }, 'Master/customerCategoryMasterDetail').subscribe(function (resp) {
            _this.data = resp['customer_category_detail'];
        });
    };
    CustomerCategoryComponent.prototype.submitDetail = function () {
        var _this = this;
        if (parseInt(this.data.range_end) <= parseInt(this.data.range_start)) {
            this.toast.errorToastr('The range end value should be greater than the range start value');
            return;
        }
        this.savingFlag = true;
        this.data.created_by_id = this.userId;
        this.data.created_by_name = this.userName;
        var header;
        if (this.customer_category_id) {
            header = this.service.post_rqst(this.data, 'Master/editCustomerCategory');
        }
        else {
            header = this.service.post_rqst(this.data, 'Master/addCustomerCategory');
        }
        header.subscribe(function (resp) {
            if (resp['statusCode'] == 200) {
                _this.toast.successToastr(resp['statusMsg']);
                _this.savingFlag = false;
                _this.rout.navigate(['/customer-category']);
            }
            else {
                _this.toast.errorToastr(resp['statusMsg']);
                _this.savingFlag = false;
            }
        });
    };
    CustomerCategoryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-customer-category',
            template: __webpack_require__(/*! ./customer-category.component.html */ "./src/app/master/customer-category/customer-category.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_services_DatabaseService__WEBPACK_IMPORTED_MODULE_2__["DatabaseService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_3__["ToastrManager"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])
    ], CustomerCategoryComponent);
    return CustomerCategoryComponent;
}());



/***/ })

}]);