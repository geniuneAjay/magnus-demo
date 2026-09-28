(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["claim-dispatch-dispatch-module-dispatch-module-module"],{

/***/ "./src/app/claim-dispatch/claim-dispatch-detail/claim-dispatch-detail.component.html":
/*!*******************************************************************************************!*\
  !*** ./src/app/claim-dispatch/claim-dispatch-detail/claim-dispatch-detail.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  claim-dispatch-detail works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/claim-dispatch/claim-dispatch-detail/claim-dispatch-detail.component.scss":
/*!*******************************************************************************************!*\
  !*** ./src/app/claim-dispatch/claim-dispatch-detail/claim-dispatch-detail.component.scss ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/claim-dispatch/claim-dispatch-detail/claim-dispatch-detail.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/claim-dispatch/claim-dispatch-detail/claim-dispatch-detail.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: ClaimDispatchDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClaimDispatchDetailComponent", function() { return ClaimDispatchDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/core/fesm5/core.js");


var ClaimDispatchDetailComponent = /** @class */ (function () {
    function ClaimDispatchDetailComponent() {
    }
    ClaimDispatchDetailComponent.prototype.ngOnInit = function () {
    };
    ClaimDispatchDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-claim-dispatch-detail',
            template: __webpack_require__(/*! ./claim-dispatch-detail.component.html */ "./src/app/claim-dispatch/claim-dispatch-detail/claim-dispatch-detail.component.html"),
            styles: [__webpack_require__(/*! ./claim-dispatch-detail.component.scss */ "./src/app/claim-dispatch/claim-dispatch-detail/claim-dispatch-detail.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ClaimDispatchDetailComponent);
    return ClaimDispatchDetailComponent;
}());



/***/ }),

/***/ "./src/app/claim-dispatch/claim-dispatch-list/claim-dispatch-list.component.html":
/*!***************************************************************************************!*\
  !*** ./src/app/claim-dispatch/claim-dispatch-list/claim-dispatch-list.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-container\">\r\n  <app-loader *ngIf=\"excelLoader\"></app-loader>\r\n  <div class=\"tools-container\">\r\n    <h2>Claim Dispatch List</h2>\r\n\r\n\r\n    <div class=\"left-auto df ac flex-gap-10\">\r\n      <a mat-icon-button matTooltip=\"Refresh\" (click)=\"refresh()\">\r\n        <i class=\"material-icons\">refresh</i>\r\n      </a>\r\n\r\n      <div class=\"pagination\" *ngIf=\"customerList.length > 0\">\r\n        <div class=\"pagination-content\">\r\n          Pages\r\n          <span>{{pagenumber}}</span>\r\n          of\r\n          <span>{{total_page}}</span>\r\n        </div>\r\n        <div class=\"page-nav\">\r\n          <button mat-icon-button matTooltip=\"Older\" (click)=\"pervious()\" [disabled]=\"start == 0\">\r\n            <i class=\"material-icons\">navigate_before</i>\r\n          </button>\r\n          <button mat-icon-button matTooltip=\"Newer\" (click)=\"nextPage()\" [disabled]=\"pagenumber == total_page \">\r\n            <i class=\"material-icons\">navigate_next</i>\r\n          </button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n\r\n  <div class=\"container container-scroll\">\r\n    <div class=\"cs-table horizontal-scroll\">\r\n      <div class=\"sticky-head\">\r\n        <div class=\"table-head\">\r\n          <table>\r\n            <tr>\r\n              <th class=\"w60\">Sr.No</th>\r\n              <th class=\"w160\">Date Created</th>\r\n              <th class=\"w100\">Created By</th>\r\n              <th class=\"w100\">Complaint No.</th>\r\n              <th class=\"w150\">Customer Detail</th>\r\n              <th class=\"w70\">Company Name</th>\r\n              <th class=\"w150\">Dealer Detail</th>\r\n              <th class=\"w150\">Product Detail</th>\r\n            </tr>\r\n          </table>\r\n        </div>\r\n\r\n        <div class=\"table-head bdrt\">\r\n          <table>\r\n            <tr>\r\n              <th class=\"w60\"></th>\r\n              <th class=\"w160\">\r\n                <div class=\"th-search-acmt\">\r\n                  <mat-form-field class=\"cs-input date-column infix-bodr\">\r\n                    <input matInput [matDatepicker]=\"picker\" placeholder=\"Date\" name=\"date_created\"\r\n                      #date_created=\"ngModel\" [(ngModel)]=\"filter_data.date_created\" (ngModelChange)=\"date_format()\"\r\n                      [max]=\"today_date\" readonly>\r\n                    <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\r\n                    <mat-datepicker #picker></mat-datepicker>\r\n                  </mat-form-field>\r\n                </div>\r\n              </th>\r\n              <th class=\"w100\">\r\n                <div class=\"th-search-acmt\">\r\n                  <mat-form-field>\r\n                    <input type=\"text\" matInput placeholder=\"Search ...\" name=\"created_name\"\r\n                      (keyup.enter)=\"getCumtomerList('')\" #created_name=\"ngModel\"\r\n                      [(ngModel)]=\"filter_data.created_name\">\r\n                  </mat-form-field>\r\n                </div>\r\n              </th>\r\n              <th class=\"w100\">\r\n                <div class=\"th-search-acmt\">\r\n                  <mat-form-field>\r\n                    <input type=\"text\" matInput placeholder=\"Search ...\" name=\"complain_no\"\r\n                      (keyup.enter)=\"getCumtomerList('')\" #complain_no=\"ngModel\" [(ngModel)]=\"filter_data.complain_no\">\r\n                  </mat-form-field>\r\n                </div>\r\n              </th>\r\n              <th class=\"w150 \">\r\n                <div class=\"th-search-acmt\">\r\n                  <mat-form-field>\r\n                    <input type=\"text\" matInput placeholder=\"Search ...\" name=\"customer_detail\"\r\n                      (keyup.enter)=\"getCumtomerList('')\" #customer_detail=\"ngModel\"\r\n                      [(ngModel)]=\"filter_data.customer_detail\">\r\n                  </mat-form-field>\r\n                </div>\r\n              </th>\r\n              <th class=\"w70\">\r\n                <div class=\"th-search-acmt\">\r\n                  <mat-form-field>\r\n                    <input type=\"text\" matInput placeholder=\"Search ...\" name=\"replaced_by_company_name\"\r\n                      (keyup.enter)=\"getCumtomerList('')\" #replaced_by_company_name=\"ngModel\"\r\n                      [(ngModel)]=\"filter_data.replaced_by_company_name\">\r\n                  </mat-form-field>\r\n                </div>\r\n              </th>\r\n              <th class=\"w150 \">\r\n                <div class=\"th-search-acmt\">\r\n                  <mat-form-field>\r\n                    <input type=\"text\" matInput placeholder=\"Search ...\" name=\"dealer_detail\"\r\n                      (keyup.enter)=\"getCumtomerList('')\" #dealer_detail=\"ngModel\"\r\n                      [(ngModel)]=\"filter_data.dealer_detail\">\r\n                  </mat-form-field>\r\n                </div>\r\n              </th>\r\n              <th class=\"w150 \">\r\n                <div class=\"th-search-acmt\">\r\n                  <mat-form-field>\r\n                    <input type=\"text\" matInput placeholder=\"Search ...\" name=\"product_detail\"\r\n                      (keyup.enter)=\"getCumtomerList('')\" #product_detail=\"ngModel\"\r\n                      [(ngModel)]=\"filter_data.product_detail\">\r\n                  </mat-form-field>\r\n                </div>\r\n              </th>\r\n            </tr>\r\n          </table>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"table-container\">\r\n        <div class=\"table-content\">\r\n          <table>\r\n            <ng-container *ngIf=\"!loader\">\r\n              <tr *ngFor=\"let row of customerList; let i = index \"\r\n                [ngClass]=\"{'Current': service.currentUserID == row.id}\">\r\n                <td class=\"w60 text-center\">{{i + 1 + sr_no}}</td>\r\n                <td class=\"w160\">{{row.date_created | date : 'dd MMM yyy ,h:mm a'}}</td>\r\n                <td class=\"w100\">{{row.created_name | titlecase}}</td>\r\n                <td class=\"w100\"> {{row.complain_no | titlecase}}</td>\r\n                <td class=\"w150 \">{{ row.customer_name ? (row.customer_name | titlecase) : '--'}}-{{ row.customer_mobile\r\n                  ? row.customer_mobile :'--' }}</td>\r\n                <td class=\"w70\">{{row.replaced_by_company_name?(row.replaced_by_company_name | titlecase):'--'}}</td>\r\n                <td class=\"w150 \">{{ row.replaced_by_name ? (row.replaced_by_name | titlecase) : '--'}}-{{\r\n                  row.replaced_by_mobile ? row.replaced_by_mobile :'--' }}</td>\r\n                <td class=\"w150 \">{{ row.product_name | titlecase }}-{{ row.product_code | titlecase }}</td>\r\n              </tr>\r\n            </ng-container>\r\n            <ng-container *ngIf=\"loader\">\r\n              <tr class=\"sk-loading\" *ngFor=\"let row of [].constructor(10)\">\r\n                <td class=\"w60\">\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n                <td class=\"w160\">\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n                <td class=\"w100\">\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n                <td class=\"w100\">\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n                <td class=\"w150\">\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n                <td class=\"w70\">\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n                <td class=\"w150 \">\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n                <td class=\"w150 \">\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n              </tr>\r\n            </ng-container>\r\n          </table>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <ng-container *ngIf=\"datanotofound==true && customerList.length == 0;\">\r\n      <app-not-result-found></app-not-result-found>\r\n    </ng-container>\r\n  </div>\r\n  <div>\r\n  </div>\r\n\r\n  <div class=\"fab-btns\" *ngIf=\"customerList.length > 0\">\r\n    <button class=\"pulse excel\" mat-fab color=\"primary\" [ngClass]=\"{'pulse': fabBtnValue=='add'}\"\r\n      [matMenuTriggerFor]=\"menu\">\r\n      <i class=\"material-icons\">apps</i>\r\n      Action\r\n    </button>\r\n  </div>\r\n  <mat-menu #menu=\"matMenu\">\r\n    <button mat-menu-item (click)=\"downloadExcel();\">\r\n      <mat-icon>download</mat-icon>\r\n      <span>Download excel</span>\r\n    </button>\r\n  </mat-menu>\r\n</div>"

/***/ }),

/***/ "./src/app/claim-dispatch/claim-dispatch-list/claim-dispatch-list.component.scss":
/*!***************************************************************************************!*\
  !*** ./src/app/claim-dispatch/claim-dispatch-list/claim-dispatch-list.component.scss ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/claim-dispatch/claim-dispatch-list/claim-dispatch-list.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/claim-dispatch/claim-dispatch-list/claim-dispatch-list.component.ts ***!
  \*************************************************************************************/
/*! exports provided: ClaimDispatchListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ClaimDispatchListComponent", function() { return ClaimDispatchListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! moment */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng6-toastr-notifications */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/ng6-toastr-notifications/fesm5/ng6-toastr-notifications.js");
/* harmony import */ var src_services_DatabaseService__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/_services/DatabaseService */ "./src/_services/DatabaseService.ts");
/* harmony import */ var src_app_dialog_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/dialog.component */ "./src/app/dialog.component.ts");
/* harmony import */ var src_app_localstorage_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/localstorage.service */ "./src/app/localstorage.service.ts");









var ClaimDispatchListComponent = /** @class */ (function () {
    function ClaimDispatchListComponent(dialog, dialogs, alert, service, rout, toast, session) {
        this.dialog = dialog;
        this.dialogs = dialogs;
        this.alert = alert;
        this.service = service;
        this.rout = rout;
        this.toast = toast;
        this.session = session;
        this.fabBtnValue = 'add';
        this.customerList = [];
        this.filter = false;
        this.data = [];
        this.start = 0;
        this.total_page = 0;
        this.pagenumber = 0;
        this.loader = false;
        this.tab_active = 'all';
        this.filter_data = {};
        this.excelLoader = false;
        this.datanotofound = false;
        this.downurl = '';
        this.downurl = service.downloadUrl;
        this.page_limit = service.pageLimit;
    }
    ClaimDispatchListComponent.prototype.ngOnInit = function () {
        this.filter_data = this.service.getData();
        this.getCumtomerList('');
    };
    ClaimDispatchListComponent.prototype.pervious = function () {
        this.start = this.start - this.page_limit;
        this.getCumtomerList('');
    };
    ClaimDispatchListComponent.prototype.nextPage = function () {
        this.start = this.start + this.page_limit;
        this.getCumtomerList('');
    };
    ClaimDispatchListComponent.prototype.refresh = function () {
        this.start = 0;
        this.filter_data = {};
        this.getCumtomerList('');
    };
    ClaimDispatchListComponent.prototype.clear = function () {
        this.refresh();
    };
    ClaimDispatchListComponent.prototype.goToDetailHandler = function (id) {
        window.open("/customer-detail/" + id);
    };
    ClaimDispatchListComponent.prototype.date_format = function () {
        this.filter_data.date_created = moment__WEBPACK_IMPORTED_MODULE_4__(this.filter_data.date_created).format('YYYY-MM-DD');
        this.getCumtomerList('');
    };
    ClaimDispatchListComponent.prototype.getCumtomerList = function (data) {
        var _this = this;
        if (this.pagenumber > this.total_page) {
            this.pagenumber = this.total_page;
            this.start = this.pageCount - this.page_limit;
        }
        if (this.start < 0) {
            this.start = 0;
        }
        var header = this.service.post_rqst({ 'filter': this.filter_data, 'start': this.start, 'pagelimit': this.page_limit }, "ServiceTask/claimDispatch");
        this.loader = true;
        header.subscribe(function (result) {
            if (result['statusCode'] == 200) {
                console.log('result', result);
                _this.customerList = result['result'];
                console.log(_this.customerList);
                _this.pageCount = result['count'];
                _this.scheme_active_count = result['scheme_active_count'];
                _this.loader = false;
                if (_this.customerList.length == 0) {
                    _this.datanotofound = false;
                }
                else {
                    _this.datanotofound = true;
                    _this.loader = false;
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
                for (var i = 0; i < _this.customerList.length; i++) {
                    if (_this.customerList[i].status == '1') {
                        _this.customerList[i].newStatus = true;
                    }
                    else if (_this.customerList[i].status == '0') {
                        _this.customerList[i].newStatus = false;
                    }
                }
            }
            else {
                _this.toast.errorToastr(result['statusMsg']);
                _this.datanotofound = true;
                _this.loader = false;
            }
        });
    };
    ClaimDispatchListComponent.prototype.lastBtnValue = function (value) {
        this.fabBtnValue = value;
    };
    ClaimDispatchListComponent.prototype.downloadExcel = function () {
        var _this = this;
        this.excelLoader = true;
        this.service.post_rqst({ 'filter': this.filter_data }, "Excel/claim_dispatch_list").subscribe((function (result) {
            if (result['msg'] == true) {
                window.open(_this.downurl + result['filename']);
                _this.getCumtomerList('');
                _this.excelLoader = false;
            }
            else {
            }
        }));
    };
    ClaimDispatchListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-claim-dispatch-list',
            template: __webpack_require__(/*! ./claim-dispatch-list.component.html */ "./src/app/claim-dispatch/claim-dispatch-list/claim-dispatch-list.component.html"),
            styles: [__webpack_require__(/*! ./claim-dispatch-list.component.scss */ "./src/app/claim-dispatch/claim-dispatch-list/claim-dispatch-list.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_dialog_component__WEBPACK_IMPORTED_MODULE_7__["DialogComponent"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"], src_app_dialog_component__WEBPACK_IMPORTED_MODULE_7__["DialogComponent"], src_services_DatabaseService__WEBPACK_IMPORTED_MODULE_6__["DatabaseService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_5__["ToastrManager"], src_app_localstorage_service__WEBPACK_IMPORTED_MODULE_8__["sessionStorage"]])
    ], ClaimDispatchListComponent);
    return ClaimDispatchListComponent;
}());



/***/ }),

/***/ "./src/app/claim-dispatch/dispatch-module/dispatch-module.module.ts":
/*!**************************************************************************!*\
  !*** ./src/app/claim-dispatch/dispatch-module/dispatch-module.module.ts ***!
  \**************************************************************************/
/*! exports provided: DispatchModuleModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DispatchModuleModule", function() { return DispatchModuleModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var src_app_auth_component_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/auth-component.guard */ "./src/app/auth-component.guard.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-multiselect-dropdown */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/ng-multiselect-dropdown/fesm5/ng-multiselect-dropdown.js");
/* harmony import */ var src_app_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/material */ "./src/app/material.ts");
/* harmony import */ var angular_ng_autocomplete__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! angular-ng-autocomplete */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/angular-ng-autocomplete/fesm5/angular-ng-autocomplete.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var ngx_mat_select_search__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-mat-select-search */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/ngx-mat-select-search/fesm5/ngx-mat-select-search.js");
/* harmony import */ var src_app_app_utility_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/app-utility.module */ "./src/app/app-utility.module.ts");
/* harmony import */ var _claim_dispatch_detail_claim_dispatch_detail_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../claim-dispatch-detail/claim-dispatch-detail.component */ "./src/app/claim-dispatch/claim-dispatch-detail/claim-dispatch-detail.component.ts");
/* harmony import */ var _claim_dispatch_list_claim_dispatch_list_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../claim-dispatch-list/claim-dispatch-list.component */ "./src/app/claim-dispatch/claim-dispatch-list/claim-dispatch-list.component.ts");














var dispatchRoutes = [
    { path: "", children: [
            { path: "", component: _claim_dispatch_list_claim_dispatch_list_component__WEBPACK_IMPORTED_MODULE_13__["ClaimDispatchListComponent"], canActivate: [src_app_auth_component_guard__WEBPACK_IMPORTED_MODULE_3__["AuthComponentGuard"]], data: { expectedRole: ['1'] } },
            { path: "complaint-detail", component: _claim_dispatch_detail_claim_dispatch_detail_component__WEBPACK_IMPORTED_MODULE_12__["ClaimDispatchDetailComponent"], canActivate: [src_app_auth_component_guard__WEBPACK_IMPORTED_MODULE_3__["AuthComponentGuard"]], data: { expectedRole: ['1'] } },
        ] },
];
var DispatchModuleModule = /** @class */ (function () {
    function DispatchModuleModule() {
    }
    DispatchModuleModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_claim_dispatch_detail_claim_dispatch_detail_component__WEBPACK_IMPORTED_MODULE_12__["ClaimDispatchDetailComponent"], _claim_dispatch_list_claim_dispatch_list_component__WEBPACK_IMPORTED_MODULE_13__["ClaimDispatchListComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(dispatchRoutes),
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
                ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_6__["NgMultiSelectDropDownModule"],
                src_app_material__WEBPACK_IMPORTED_MODULE_7__["MaterialModule"],
                angular_ng_autocomplete__WEBPACK_IMPORTED_MODULE_8__["AutocompleteLibModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatDialogModule"],
                ngx_mat_select_search__WEBPACK_IMPORTED_MODULE_10__["NgxMatSelectSearchModule"],
                src_app_app_utility_module__WEBPACK_IMPORTED_MODULE_11__["AppUtilityModule"]
            ]
        })
    ], DispatchModuleModule);
    return DispatchModuleModule;
}());



/***/ })

}]);