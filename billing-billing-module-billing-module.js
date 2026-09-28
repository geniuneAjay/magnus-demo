(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["billing-billing-module-billing-module"],{

/***/ "./src/app/billing/billing-module/billing.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/billing/billing-module/billing.module.ts ***!
  \**********************************************************/
/*! exports provided: BillingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BillingModule", function() { return BillingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _billing_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../billing.component */ "./src/app/billing/billing.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angular_ng_autocomplete__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! angular-ng-autocomplete */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/angular-ng-autocomplete/fesm5/angular-ng-autocomplete.js");
/* harmony import */ var ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-multiselect-dropdown */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/ng-multiselect-dropdown/fesm5/ng-multiselect-dropdown.js");
/* harmony import */ var ngx_mat_select_search__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-mat-select-search */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/ngx-mat-select-search/fesm5/ngx-mat-select-search.js");
/* harmony import */ var src_app_app_utility_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/app-utility.module */ "./src/app/app-utility.module.ts");
/* harmony import */ var src_app_auth_component_guard__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/auth-component.guard */ "./src/app/auth-component.guard.ts");
/* harmony import */ var src_app_billing_detail_billing_detail_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/billing-detail/billing-detail.component */ "./src/app/billing-detail/billing-detail.component.ts");
/* harmony import */ var src_app_material__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/material */ "./src/app/material.ts");














var attendenceRoutes = [
    { path: "", children: [
            { path: '', component: _billing_component__WEBPACK_IMPORTED_MODULE_3__["BillingComponent"], canActivate: [src_app_auth_component_guard__WEBPACK_IMPORTED_MODULE_11__["AuthComponentGuard"]], data: { expectedRole: ['1'] } },
            { path: 'billing-details/:id', component: src_app_billing_detail_billing_detail_component__WEBPACK_IMPORTED_MODULE_12__["BillingDetailComponent"], canActivate: [src_app_auth_component_guard__WEBPACK_IMPORTED_MODULE_11__["AuthComponentGuard"]], data: { expectedRole: ['1'] } },
        ] },
];
var BillingModule = /** @class */ (function () {
    function BillingModule() {
    }
    BillingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_billing_component__WEBPACK_IMPORTED_MODULE_3__["BillingComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forChild(attendenceRoutes),
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_8__["NgMultiSelectDropDownModule"],
                src_app_material__WEBPACK_IMPORTED_MODULE_13__["MaterialModule"],
                angular_ng_autocomplete__WEBPACK_IMPORTED_MODULE_7__["AutocompleteLibModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialogModule"],
                ngx_mat_select_search__WEBPACK_IMPORTED_MODULE_9__["NgxMatSelectSearchModule"],
                src_app_app_utility_module__WEBPACK_IMPORTED_MODULE_10__["AppUtilityModule"]
            ]
        })
    ], BillingModule);
    return BillingModule;
}());



/***/ }),

/***/ "./src/app/billing/billing.component.html":
/*!************************************************!*\
  !*** ./src/app/billing/billing.component.html ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-container\">\r\n  <div class=\"tab-surface\">\r\n    <button *ngFor=\"let row of calenderInfo; let i =index;\" mat-button\r\n      [ngClass]=\"OrderMonth == row.month && OrderYear == row.year ? 'active' : ''\"\r\n      (click)=\"billData('',row.month,row.year);\">{{row.month_name}} {{row.year}}<span class=\"order-value\">&#x20B9;\r\n        {{row.total_billing_amount ? (row.total_billing_amount | number:'1.1-2') : '0'}}</span></button>\r\n  </div>\r\n  <div class=\"tools-container\">\r\n    <h2>Invoice List</h2>\r\n\r\n    <div class=\"left-auto left-auto df ac flex-gap-10\">\r\n      <button mat-icon-button matTooltip=\"Refresh\" (click)=\"refresh('refresh',OrderMonth,OrderYear)\">\r\n        <i class=\"material-icons\">refresh</i>\r\n      </button>\r\n      <div class=\"pagination\" *ngIf=\"distributor_list.length > 0\">\r\n        <div class=\"pagination-content\">\r\n          Pages\r\n          <span>{{pagenumber}}</span>\r\n          of\r\n          <span>{{total_page}}</span>\r\n        </div>\r\n        <div class=\"page-nav\">\r\n          <button mat-icon-button matTooltip=\"Older\" (click)=\"pervious('',OrderMonth,OrderYear)\"\r\n            [disabled]=\"start == 0\">\r\n            <i class=\"material-icons\">navigate_before</i>\r\n          </button>\r\n          <button mat-icon-button matTooltip=\"Newer\" (click)=\"nextPage('',OrderMonth,OrderYear)\"\r\n            [disabled]=\"pagenumber == total_page \">\r\n            <i class=\"material-icons\">navigate_next</i>\r\n          </button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"container pb100\">\r\n    <div class=\"cs-table\">\r\n      <div class=\"sticky-head\">\r\n        <div class=\"table-head\">\r\n          <table>\r\n            <tr>\r\n              <th class=\"w40\">S.no.</th>\r\n              <th class=\"w100\">Date Created </th>\r\n              <th class=\"w100\">Document Date</th>\r\n              <th class=\"w100\">Invoice Number</th>\r\n              <th class=\"w200\">Customer Details</th>\r\n              <th class=\"w100\">Account Code</th>\r\n              <th class=\"w80 text-center\">Total Item</th>\r\n              <th class=\"w80 text-center\">Total QTY.</th>\r\n              <th class=\"w100 text-right\">Invoice Amount</th>\r\n              <th class=\"w100 text-right\">Payment</th>\r\n              <th class=\"w100 text-right\">Balance Amount</th>\r\n            </tr>\r\n          </table>\r\n        </div>\r\n\r\n        <div class=\"table-head border-top\">\r\n          <table>\r\n            <tr>\r\n              <th class=\"w40\">&nbsp;</th>\r\n              <th class=\"w100\">\r\n                <div class=\"th-search-acmt\">\r\n                  <mat-form-field class=\"example-full-width cs-input\">\r\n                    <input matInput [matDatepicker]=\"picker2\" placeholder=\"Date\" name=\"date_created\"\r\n                      [(ngModel)]=\"filter.date_created\" (ngModelChange)=\"date_format($event,OrderMonth,OrderYear)\"\r\n                      readonly>\r\n                    <mat-datepicker-toggle matSuffix [for]=\"picker2\"></mat-datepicker-toggle>\r\n                    <mat-datepicker #picker2></mat-datepicker>\r\n                  </mat-form-field>\r\n                </div>\r\n              </th>\r\n              <th class=\"w100\">\r\n                <div class=\"th-search-acmt\">\r\n                  <mat-form-field class=\"example-full-width cs-input\">\r\n                    <input matInput [matDatepicker]=\"picker3\" placeholder=\"Date\" name=\"billing_date\"\r\n                      [(ngModel)]=\"filter.billing_date\" (ngModelChange)=\"date_format($event,OrderMonth,OrderYear)\"\r\n                      readonly>\r\n                    <mat-datepicker-toggle matSuffix [for]=\"picker3\"></mat-datepicker-toggle>\r\n                    <mat-datepicker #picker3></mat-datepicker>\r\n                  </mat-form-field>\r\n                </div>\r\n              </th>\r\n              <th class=\"w100\">\r\n                <div class=\"th-search-acmt\">\r\n                  <mat-form-field class=\"example-full-width cs-input\">\r\n                    <input matInput placeholder=\"Search\" name=\"bill_number\" [(ngModel)]=\"filter.bill_number\"\r\n                      (keyup)=\"billData('',OrderMonth,OrderYear)\">\r\n                  </mat-form-field>\r\n                </div>\r\n              </th>\r\n              <th class=\"w200\">\r\n                <div class=\"th-search-acmt\">\r\n                  <mat-form-field class=\"example-full-width cs-input\">\r\n                    <input matInput placeholder=\"Search\" name=\"customer_name\" [(ngModel)]=\"filter.customer_name\"\r\n                      (keyup)=\"billData('',OrderMonth,OrderYear)\">\r\n                  </mat-form-field>\r\n                </div>\r\n              </th>\r\n              <th class=\"w100\">\r\n                <div class=\"th-search-acmt\">\r\n                  <mat-form-field class=\"example-full-width cs-input\">\r\n                    <input matInput placeholder=\"Search\" name=\"customer_code\" [(ngModel)]=\"filter.customer_code2\"\r\n                      (keyup)=\"billData('',OrderMonth,OrderYear)\">\r\n                  </mat-form-field>\r\n                </div>\r\n              </th>\r\n              <th class=\"w80 text-center\">&nbsp;</th>\r\n              <th class=\"w80 text-center\">&nbsp;</th>\r\n              <th class=\"w100 text-right\">&nbsp;</th>\r\n              <th class=\"w100 text-right\">&nbsp;</th>\r\n              <th class=\"w100 text-right\">&nbsp;</th>\r\n            </tr>\r\n          </table>\r\n        </div>\r\n      </div>\r\n\r\n\r\n      <div class=\"table-container\">\r\n        <div class=\"table-content\" *ngIf=\"distributor_list.length > 0\">\r\n          <table>\r\n            <ng-container *ngIf=\"loader == false\">\r\n              <tr *ngFor=\"let row of distributor_list;let i=index\"\r\n                [ngClass]=\"{'Current': serve.currentUserID == row.id}\">\r\n                <td class=\"w40\">{{ i + 1 + sr_no }}</td>\r\n                <td class=\"w100\">{{row.date_created | date:'dd MMM yyyy , h:mm a'}}</td>\r\n                <td class=\"w100\">{{row.billing_date | date:'dd MMM yyyy'}}</td>\r\n                <td class=\"w100\"><a class=\"link-btn\" (click)=\"serve.setData(filter)\"\r\n                    [routerLink]=\"[ 'billing-details/', row.id ]\" [queryParams]=\"{'id':row.id}\">{{row.bill_number}}</a>\r\n                </td>\r\n                <td class=\"w200\">{{row.customer_name | titlecase}} - {{row.contact_person_name | titlecase}}\r\n                  <strong>({{row.mobile}})</strong> </td>\r\n                <td class=\"w100\">{{row.customer_code}}</td>\r\n                <td class=\"w80 text-center\">{{row.total_billing_item}}</td>\r\n                <td class=\"w80 text-center\">{{row.total_billing_item_qty}}</td>\r\n                <td class=\"w100 text-right\"><strong>&#x20B9; {{row.net_amount}}</strong></td>\r\n                <td class=\"w100 text-right\"><strong>&#x20B9; {{row.billing_receive_amount}}</strong></td>\r\n                <td class=\"w100 text-right\"><strong>&#x20B9; {{row.pending_balance}}</strong></td>\r\n              </tr>\r\n            </ng-container>\r\n            <ng-container *ngIf=\"loader == true\">\r\n              <tr class=\"sk-loading\" *ngFor=\"let row of [].constructor(10)\">\r\n                <td class=\"w40\">\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n                <td class=\"w100\">\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n                <td class=\"w100\">\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n                <td class=\"w200\">\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n                <td class=\"w100\">\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n                <td class=\"w80 text-center\">\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n                <td class=\"w80 text-center\">\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n                <td class=\"w100 text-right\">\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n                <td class=\"w100 text-right\">\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n                <td class=\"w100 text-right\">\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n              </tr>\r\n            </ng-container>\r\n          </table>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n\r\n    <ng-container *ngIf=\"distributor_list.length == 0 && datanotfound == true\">\r\n      <app-not-result-found></app-not-result-found>\r\n    </ng-container>\r\n\r\n  </div>\r\n  <div class=\"fab-btns\"\r\n    *ngIf=\"assign_login_data2.import_accounts=='1' || assign_login_data2.import_invoice=='1'  || assign_login_data2.export_invoice=='1'  || assign_login_data2.export_accounts=='1'\">\r\n    <button class=\"excel pulse \" mat-fab color=\"primary\" [ngClass]=\"{'pulse': fabBtnValue=='add'}\"\r\n      [matMenuTriggerFor]=\"menu\">\r\n      <i class=\"material-icons\">apps</i>\r\n      Action\r\n    </button>\r\n    <mat-menu #menu=\"matMenu\">\r\n      <button mat-menu-item (click)=\"upload_excel('invoice');\"\r\n      *ngIf=\"assign_login_data2.import_accounts=='1' || assign_login_data2.import_invoice=='1' \">\r\n      <mat-icon>cloud_upload</mat-icon>\r\n      <span>Upload Invoice</span>\r\n    </button>\r\n      <button mat-menu-item (click)=\"upload_excel('ledger');\"\r\n        *ngIf=\"assign_login_data2.import_accounts=='1' || assign_login_data2.import_invoice=='1' \">\r\n        <mat-icon>cloud_upload</mat-icon>\r\n        <span>Upload Ledger</span>\r\n      </button>\r\n      <button mat-menu-item (click)=\"upload_excel('pending_bill');\"\r\n      *ngIf=\"assign_login_data2.import_accounts=='1' || assign_login_data2.import_invoice=='1' \">\r\n      <mat-icon>cloud_upload</mat-icon>\r\n      <span>Upload Pending Bills</span>\r\n    </button>\r\n      <button mat-menu-item (click)=\"exportAsXLSX(OrderMonth, OrderYear)\"\r\n        *ngIf=\"distributor_list.length > 0 && (assign_login_data2.export_invoice=='1'  || assign_login_data2.export_accounts=='1')\">\r\n        <mat-icon>download</mat-icon>\r\n        <span>Download in excel</span>\r\n      </button>\r\n    </mat-menu>\r\n    <!-- <div class=\"fab-btns\" -->\r\n\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/billing/billing.component.scss":
/*!************************************************!*\
  !*** ./src/app/billing/billing.component.scss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".update-block {\n  display: flex;\n  align-items: center;\n  padding: 6px 8px;\n  background: #e8e8e8;\n  position: absolute;\n  top: 50%;\n  right: 10px;\n  height: calc(100% - 10px);\n  transform: translateY(-50%);\n  border: 1px solid #989898;\n  border-radius: 6px;\n}\n.update-block p {\n  font-size: 12px;\n  font-weight: 500;\n}\n.update-block input, .update-block select {\n  width: 100px;\n  min-width: 100px;\n  height: 34px;\n  margin: 0px 10px;\n  background: white;\n  border-radius: 6px;\n  border: 1px solid rgba(204, 204, 204, 0.8);\n  padding: 0px 5px;\n  box-sizing: border-box;\n  font-size: 12px;\n}\n.update-block select {\n  width: 150px;\n}\n.update-block.flat {\n  border: 0px;\n  padding: 0px;\n}\n.update-block.flat-block {\n  position: relative;\n  top: inherit;\n  transform: inherit;\n}"

/***/ }),

/***/ "./src/app/billing/billing.component.ts":
/*!**********************************************!*\
  !*** ./src/app/billing/billing.component.ts ***!
  \**********************************************/
/*! exports provided: BillingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BillingComponent", function() { return BillingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! moment */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var src_services_DatabaseService__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/_services/DatabaseService */ "./src/_services/DatabaseService.ts");
/* harmony import */ var _dialog_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../dialog.component */ "./src/app/dialog.component.ts");
/* harmony import */ var _upload_file_modal_upload_file_modal_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../upload-file-modal/upload-file-modal.component */ "./src/app/upload-file-modal/upload-file-modal.component.ts");
/* harmony import */ var src_app_localstorage_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/localstorage.service */ "./src/app/localstorage.service.ts");
/* harmony import */ var ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng6-toastr-notifications */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/ng6-toastr-notifications/fesm5/ng6-toastr-notifications.js");










var BillingComponent = /** @class */ (function () {
    function BillingComponent(serve, route, ActivatedRoute, dialog, session, alrt, toast) {
        this.serve = serve;
        this.route = route;
        this.ActivatedRoute = ActivatedRoute;
        this.dialog = dialog;
        this.session = session;
        this.alrt = alrt;
        this.toast = toast;
        this.excelLoader = false;
        this.value = {};
        this.dr_list_temp = [];
        this.distributor_list = [];
        this.sr_no = 0;
        this.pagenumber = 1;
        this.start = 0;
        this.loader = false;
        this.fabBtnValue = 'add';
        this.data = [];
        this.datanotfound = false;
        this.filter = {};
        this.login_data = [];
        this.skelton = {};
        this.assign_login_data2 = [];
        this.assign_login_data = [];
        this.downurl = '';
        this.calenderInfo = [];
        this.downurl = serve.downloadUrl;
        this.page_limit = serve.pageLimit;
        this.today_date = new Date();
        this.assign_login_data = this.session.getSession();
        this.assign_login_data = this.assign_login_data.value;
        this.assign_login_data2 = this.assign_login_data.data;
        this.date = new Date();
        this.monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
        this.currentMonth = this.monthNames[this.date.getMonth()];
        this.currentYear = this.date.getFullYear();
        this.currentMonth_no = this.date.getMonth() + 1;
        this.assign_login_data = this.assign_login_data.assignModule;
        var flag = 0;
    }
    BillingComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.filter = this.serve.getData();
        if (this.filter.year && this.filter.month) {
            this.currentYear = this.filter.year;
            this.currentMonth_no = this.filter.month;
        }
        this.login_data = this.session.getSession();
        this.login_data = this.login_data.value.data;
        this.skelton = new Array(10);
        if (this.login_data.access_level != '1') {
            this.login_dr_id = this.login_data.id;
        }
        this.ActivatedRoute.params.subscribe(function (params) {
            _this.type_id = params.id;
            _this.type = params.type;
            _this.billData('', _this.currentMonth_no, _this.currentYear);
        });
    };
    BillingComponent.prototype.pervious = function (blnk, month, year) {
        this.start = this.start - this.page_limit;
        this.billData(blnk, month, year);
    };
    BillingComponent.prototype.nextPage = function (blnk, month, year) {
        this.start = this.start + this.page_limit;
        this.billData(blnk, month, year);
    };
    BillingComponent.prototype.date_format = function (event, month, year) {
        this.filter.date_created = moment__WEBPACK_IMPORTED_MODULE_4__(event.value).format('YYYY-MM-DD');
        this.billData('', month, year);
    };
    BillingComponent.prototype.billData = function (action, month, year) {
        var _this = this;
        if (action === void 0) { action = ''; }
        if (action == "refresh") {
            this.filter = {};
            this.distributor_list = [];
            this.start = 0;
        }
        if (this.pagenumber > this.total_page) {
            this.pagenumber = this.total_page;
            this.start = this.pageCount - this.page_limit;
        }
        if (this.start < 0) {
            this.start = 0;
        }
        this.OrderMonth = month;
        this.OrderYear = year;
        this.filter.month = this.OrderMonth;
        this.filter.year = this.OrderYear;
        this.loader = true;
        this.serve.post_rqst({ 'filter': this.filter, 'start': this.start, 'pagelimit': this.page_limit, 'month': month, 'year': year }, "Account/tallyInvoiceCreditBillingListing")
            .subscribe((function (result) {
            if (result['statusCode'] == 200) {
                _this.distributor_list = (result['credit_billing_list']);
                _this.calenderInfo = (result['calenderInfo']);
                if (_this.distributor_list.length == 0) {
                    _this.datanotfound = true;
                }
                else {
                    _this.datanotfound = false;
                }
                for (var index = 0; index < _this.calenderInfo.length; index++) {
                    var date = new Date();
                    date.setMonth(_this.calenderInfo[index].month - 1);
                    var MonthName = '';
                    MonthName = date.toLocaleString('en-US', { month: 'short' });
                    _this.calenderInfo[index].month_name = MonthName;
                }
                _this.loader = false;
                _this.pageCount = result['count'];
                _this.total_list = (result['overall_total_sum']);
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
                // this.serve.count_list();
            }
            else {
                _this.loader = false;
                _this.toast.errorToastr(result['statusMsg']);
            }
        }));
    };
    BillingComponent.prototype.exportAsXLSX = function (month, year) {
        var _this = this;
        this.loader = true;
        this.serve.post_rqst({ 'filter': this.filter, 'start': this.start, 'pagelimit': this.page_limit, 'month': month, 'year': year }, "Excel/tally_invoice_credit_billing_listing")
            .subscribe(function (result) {
            if (result['msg'] == true) {
                _this.loader = false;
                window.open(_this.downurl + result['filename']);
                _this.billData('', month, year);
            }
            else {
                _this.loader = false;
            }
        }, function (err) {
            _this.loader = false;
        });
    };
    BillingComponent.prototype.upload_excel = function (type) {
        var _this = this;
        var dialogRef = this.alrt.open(_upload_file_modal_upload_file_modal_component__WEBPACK_IMPORTED_MODULE_7__["UploadFileModalComponent"], {
            width: '500px',
            panelClass: 'cs-modal',
            disableClose: true,
            data: {
                // 'from': 'invoice',
                'from': type,
            }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            _this.billData('', _this.OrderMonth, _this.OrderYear);
        });
    };
    BillingComponent.prototype.refresh = function (blnk, month, year) {
        this.filter = {};
        this.serve.setData(this.filter);
        this.serve.currentUserID = '';
        this.billData(blnk, month, year);
    };
    BillingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-billing',
            template: __webpack_require__(/*! ./billing.component.html */ "./src/app/billing/billing.component.html"),
            styles: [__webpack_require__(/*! ./billing.component.scss */ "./src/app/billing/billing.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_services_DatabaseService__WEBPACK_IMPORTED_MODULE_5__["DatabaseService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _dialog_component__WEBPACK_IMPORTED_MODULE_6__["DialogComponent"], src_app_localstorage_service__WEBPACK_IMPORTED_MODULE_8__["sessionStorage"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"], ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_9__["ToastrManager"]])
    ], BillingComponent);
    return BillingComponent;
}());



/***/ })

}]);