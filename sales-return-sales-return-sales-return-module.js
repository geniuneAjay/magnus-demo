(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["sales-return-sales-return-sales-return-module"],{

/***/ "./src/app/sales-return/sales-return-list/sales-return-list.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/sales-return/sales-return-list/sales-return-list.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-container\" >\r\n  <div class=\"tools-container\">\r\n    \r\n    <a mat-icon-button matTooltip=\"Back\" (click)=\"active_tab = 'Sales Return'\" *ngIf=\"active_tab== 'Add Sales Return'\">\r\n      <i class=\"material-icons\">arrow_back</i>\r\n    </a>\r\n    \r\n    <h2>{{active_tab == 'Sales Return' ? 'Sales' :'Add Sales'}} Return</h2>\r\n    \r\n    <div class=\"left-auto left-auto df ac flex-gap-10\" *ngIf=\"active_tab != 'Add Sales Return'\">\r\n      <button mat-icon-button  matTooltip=\"Refresh\" (click)=\"refresh('refresh',active_tab)\">\r\n        <i class=\"material-icons\">refresh</i>\r\n      </button>\r\n      <div class=\"pagination\" *ngIf=\"returnData.length > 0\">\r\n        <div class=\"pagination-content\">\r\n          Pages\r\n          <span>{{pagenumber}}</span>\r\n          of\r\n          <span>{{total_page}}</span>\r\n        </div>\r\n        <div class=\"page-nav\">\r\n          <button mat-icon-button  matTooltip=\"Older\" (click)=\"pervious(active_tab)\"  [disabled]=\"start == 0\">\r\n            <i class=\"material-icons\">navigate_before</i>\r\n          </button>\r\n          <button mat-icon-button  matTooltip=\"Newer\" (click)=\"nextPage(active_tab)\" [disabled]=\"pagenumber == total_page \">\r\n            <i class=\"material-icons\">navigate_next</i>\r\n          </button>\r\n          \r\n        </div>\r\n      </div>\r\n      \r\n      <div class=\"mat-tabbar\">\r\n        <button mat-button [ngClass]=\"{'active' :status== 'scan'}\" (click)=\" status= 'scan';  getSalesReturn('');\">\r\n          <i class=\"material-icons\">qr_code_scanner</i>Scan \r\n          <!-- {{pendingDispatcCount > 0 ? '(' + pendingDispatchCount + ')' : ''}} -->\r\n        </button>\r\n        <button mat-button [ngClass]=\"{'active' :status== 'transfer'}\" (click)=\"status= 'transfer'; getSalesReturn('');\">\r\n          <i class=\"material-icons\">fact_check</i>Transfer\r\n        </button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  \r\n  <div class=\"container pl10 pr10 pb50\" [ngClass]=\"{'pt10': active_tab== 'Add Sales Return'}\">\r\n    <div class=\"cs-table left-right-10\" *ngIf=\"active_tab== 'Sales Return'\">\r\n      \r\n        <div class=\"sticky-head\">\r\n          <div class=\"table-head\">\r\n            <table>\r\n              <tr>\r\n                <th class=\"w60\">Sr.No</th>\r\n                <th class=\"w140\">Date Created</th>\r\n                <th class=\"w160\">Created By</th>\r\n                <th class=\"w130\">Invoice Number</th>\r\n                <th>Distributor/Dealer Detail</th>\r\n                <th class=\"w100 text-center\">Total Item</th>\r\n              </tr>\r\n            </table>\r\n          </div>\r\n          \r\n          <div class=\"table-head border-top\">\r\n            <table>\r\n              <tr>\r\n                <th class=\"w60\">&nbsp;</th>\r\n                <th class=\"w140\">\r\n                  <div class=\"th-search-acmt\">\r\n                    <mat-form-field class=\"example-full-width cs-input\"  >\r\n                      <input matInput [matDatepicker]=\"picker3\" placeholder=\"Date\" name=\"date_created\" [(ngModel)]=\"filter.date_created\" (ngModelChange)=\"getSalesReturn()\" readonly>\r\n                      <mat-datepicker-toggle matSuffix [for]=\"picker3\"></mat-datepicker-toggle>\r\n                      <mat-datepicker #picker3></mat-datepicker>\r\n                    </mat-form-field>\r\n                  </div>\r\n                </th>\r\n                <th class=\"w160\">\r\n                  <div class=\"th-search-acmt\">\r\n                    <mat-form-field class=\"example-full-width cs-input\">\r\n                      <input matInput placeholder=\"Search\" name=\"created_by_name\" [(ngModel)]=\"filter.created_by_name\" (keyup.enter)=\"getSalesReturn()\" >\r\n                    </mat-form-field>\r\n                  </div>\r\n                </th>\r\n                <th class=\"w130\">\r\n                  <div class=\"th-search-acmt\">\r\n                    <mat-form-field class=\"example-full-width cs-input\">\r\n                      <input matInput placeholder=\"Search\" name=\"invoice_number\" [(ngModel)]=\"filter.invoice_number\" (keyup.enter)=\"getSalesReturn()\" >\r\n                    </mat-form-field>\r\n                  </div>\r\n                </th>\r\n                <th>\r\n                  <div class=\"th-search-acmt\">\r\n                    <mat-form-field class=\"example-full-width cs-input\">\r\n                      <input matInput placeholder=\"Search\" name=\"dr_detail\" [(ngModel)]=\"filter.dr_detail\" (keyup.enter)=\"getSalesReturn()\" >\r\n                    </mat-form-field>\r\n                  </div>\r\n                </th>\r\n                <th class=\"w100 text-center\">&nbsp;</th>\r\n              </tr>\r\n            </table>\r\n          </div>\r\n        </div>\r\n        \r\n        <div class=\"table-container\">\r\n          <div class=\"table-content\">\r\n            <table>\r\n              <ng-container *ngIf=\"!loader\">\r\n                <tr *ngFor=\"let row of returnData; let i = index;\">\r\n                  <td class=\"w60\">{{ i + 1 + sr_no }}</td>\r\n                  <td class=\"w140\">{{row.date_created | date:'d MMM y hh:mm a'}}</td>\r\n                  <td class=\"w160\">{{row.created_by_name}}</td>\r\n                  <td class=\"w130\">{{row.invoice_number}}</td>\r\n                  <td>{{row.dr_detail ? row.dr_detail : '---'}}</td>\r\n                  <td class=\"w100 text-center\">\r\n                    <a class=\"link-btn\" (click)=\"openDialog1('sales_return', row.invoice_number, status)\">View Details</a>\r\n                  </td>\r\n                </tr>\r\n              </ng-container>\r\n              \r\n              <ng-container *ngIf=\"loader\">\r\n                <tr class=\"sk-loading\" *ngFor=\"let row of [].constructor(10)\">\r\n                  <td class=\"w60\"><div>&nbsp;</div></td>\r\n                  <td class=\"w140\"><div>&nbsp;</div></td>\r\n                  <td class=\"w160\"><div>&nbsp;</div></td>\r\n                  <td class=\"w130\"><div>&nbsp;</div></td>\r\n                  <td><div>&nbsp;</div></td>\r\n                  <td class=\"w100\"><div>&nbsp;</div></td>\r\n                </tr>\r\n              </ng-container>\r\n            </table>\r\n          </div>\r\n        </div>\r\n        <ng-container *ngIf=\"returnData.length <= 0 && datanotfound == true \">\r\n          <app-not-result-found></app-not-result-found>\r\n        </ng-container>\r\n    </div>\r\n    \r\n    \r\n    <ng-container *ngIf=\"active_tab== 'Add Sales Return'\">\r\n      <div class=\"row \">\r\n        <div class=\"col s12\">\r\n          <div class=\"card pb0\">\r\n            <div class=\"card-body cs-form\">\r\n              <div class=\"row\">\r\n                <div class=\"col s12 m3 l3\">\r\n                  <mat-form-field appearance=\"outline\">\r\n                    <mat-label>Type</mat-label>\r\n                    <mat-select name=\"return_type\" #return_type=\"ngModel\" [(ngModel)]=\"couponNumber.return_type\" [disabled]=\"productList.length > 0\" (selectionChange)=\"couponNumber.return_type == 'Transfer' ? distributorList(''): ''\" required>\r\n                      <mat-option  value=\"Scanning\">Scanning</mat-option>\r\n                      <mat-option  value=\"Transfer\">Transfer</mat-option>\r\n                    </mat-select>\r\n                  </mat-form-field>\r\n                </div>\r\n                \r\n                <div class=\"col s12 m3 l3\" *ngIf=\"couponNumber.return_type == 'Scanning'\">\r\n                  <mat-form-field  appearance=\"outline\">\r\n                    <mat-label>Coupon Number</mat-label>\r\n                    <input matInput placeholder=\"Type Here ...\"  name=\"coupon_number\" #coupon_number=\"ngModel\" [(ngModel)]=\"couponNumber.coupon_number\"  minlength=\"16\" maxlength=\"16\" min=\"0\"  appPrefixFocusAndSelect #focusInput   (ngModelChange)=\"checkCoupon(couponNumber.coupon_number)\" required>\r\n                  </mat-form-field>\r\n                </div>\r\n                <ng-container  *ngIf=\"couponNumber.return_type == 'Transfer'\">\r\n                  <div class=\"col s12 m3 l3\">\r\n                    <mat-form-field appearance=\"outline\">\r\n                      <mat-label>Distributor</mat-label>\r\n                      <mat-select name=\"distributor_id\" [(ngModel)]=\"couponNumber.distributor_id\" #distributor_id=\"ngModel\" required [disabled]=\"productList.length > 0\" (ngModelChange)=\"findDistributor(couponNumber.distributor_id)\" required>\r\n                        <mat-option>\r\n                          <ngx-mat-select-search noEntriesFoundLabel=\"'no data found'\" placeholderLabel=\"Search..\"\r\n                          (keyup)=\"distributorList($event.target.value)\"></ngx-mat-select-search>\r\n                        </mat-option>\r\n                        <mat-option *ngFor=\"let row of drlist\" value=\"{{row.id}}\">{{row.company_name | titlecase}} {{row.dr_code}}</mat-option>\r\n                      </mat-select>\r\n                    </mat-form-field>\r\n                  </div>\r\n                  \r\n                  \r\n                  <div class=\"col s12  m3 l3\">\r\n                    <mat-form-field  appearance=\"outline\">\r\n                      <mat-label>Product</mat-label>\r\n                      <mat-select  name=\"product_code\" [(ngModel)]=\"couponNumber.product_code\" #product_code=\"ngModel\" required (ngModelChange)=\"findProductId(couponNumber.product_code)\" required>\r\n                        <mat-option >\r\n                          <ngx-mat-select-search noEntriesFoundLabel=\"'no data found'\" placeholderLabel=\"Search..\" (keyup)=\"getProduct($event.target.value)\"></ngx-mat-select-search>\r\n                        </mat-option>\r\n                        <mat-option *ngFor=\"let row of product_data\" value=\"{{row.product_code}}\">{{row.product_name}} -{{row.product_code}}</mat-option>\r\n                      </mat-select>\r\n                    </mat-form-field>\r\n                    \r\n                  </div>\r\n                  \r\n                  <div class=\"col s12 m3 l3\">\r\n                    <mat-form-field  appearance=\"outline\">\r\n                      <mat-label>QTY.</mat-label>\r\n                      <input matInput placeholder=\"Type Here ...\"  name=\"qty\" #qty=\"ngModel\"  [(ngModel)]=\"couponNumber.qty\" onkeypress=\"return event.charCode>=48 && event.charCode<=57\" required>\r\n                    </mat-form-field>\r\n                  </div>\r\n                </ng-container>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      \r\n      <div class=\"row\" *ngIf=\"couponNumber.return_type == 'Transfer'\">\r\n        <div class=\"col s12\">\r\n          <div class=\"text-right\">\r\n            <button (click)=\"addToList()\"  mat-raised-button color=\"accent\" type=\"text\">{{savingFlag == true ? 'Please Wait' : 'Add To List'}}</button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      \r\n      \r\n      <form #f=\"ngForm\" (ngSubmit)=\" f.valid && submitDetail(couponNumber.return_type)\">\r\n        <ng-container *ngIf=\"couponList.length > 0;\">\r\n          \r\n          \r\n          <div class=\"cs-table\" >\r\n            <div class=\"sticky-head\">\r\n              <div class=\"table-head\">\r\n                <table>\r\n                  <tr>\r\n                    <th class=\"w60\">Sr.No</th>\r\n                    <th class=\"w140\">Coupon Code</th>\r\n                    <th class=\"w100\">Coupon Type</th>\r\n                    <th class=\"w100\">Packing Size</th>\r\n                    <th class=\"w120\">Dispatch Date</th>\r\n                    <th class=\"w130\">Dispatch Type</th>\r\n                    <th class=\"w130\">Invoice Number</th>\r\n                    <th>Distributor/Dealer Detail</th>\r\n                    <th class=\"w120 text-center\">Scanning Status</th>\r\n                    <th class=\"w70 text-center\">Action</th>\r\n                  </tr>\r\n                </table>\r\n              </div>\r\n            </div>\r\n            \r\n            <div class=\"table-container\">\r\n              <div class=\"table-content\">\r\n                <table>\r\n                  <tr *ngFor=\"let row of couponList; let i = index;\">\r\n                    <td class=\"w60\">{{i+1}}</td>\r\n                    <td class=\"w140\">{{row.coupon_code}}</td>\r\n                    <td class=\"w100\">{{row.coupon_type == 'Master Box' ? 'Box' :'Product'}}</td>\r\n                    <td class=\"w100\">{{row.master_packing_size}}</td>\r\n                    <td class=\"w120\">{{row.dispatch_date | date:'d MMM y'}}</td>\r\n                    <td class=\"w130\">{{row.dispatch_type}}</td>\r\n                    <td class=\"w130\">{{row.invoice_number}}</td>\r\n                    <td>{{row.dr_detail}}</td>\r\n                    <td class=\"w120 text-center\">{{row.scan_status}}</td>\r\n                    <td class=\"w70 text-center\">\r\n                      <div class=\"action-button\">\r\n                        <ng-container *ngIf=\"row.coupon_type == 'Master Box'\"> \r\n                          <button  mat-icon-button  matTooltip=\"View\"  (click)=\"openDialog(row.id)\">\r\n                            <i class=\"material-icons edit\">visibility</i>\r\n                          </button>\r\n                        </ng-container>\r\n                        <button  mat-icon-button  matTooltip=\"Delete\"  (click)=\"deleteCoupon(i, 'coupon')\">\r\n                          <i class=\"material-icons del\">delete</i>\r\n                        </button>\r\n                      </div>\r\n                    </td>\r\n                  </tr>\r\n                </table>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          \r\n          <div class=\"row\">\r\n            <div class=\"col s12\">\r\n              <div class=\"text-right\">\r\n                <button [ngClass]=\"{'loading': savingFlag == true}\" mat-raised-button color=\"accent\" type=\"submit\" [disabled]=\"savingFlag == true\">\r\n                  {{savingFlag == true ? 'Please Wait' : 'Save'}}\r\n                </button>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </ng-container>\r\n        \r\n        <ng-container *ngIf=\"productList.length > 0;\">\r\n          <div class=\"cs-table\" >\r\n            <div class=\"sticky-head\">\r\n              <div class=\"table-head\">\r\n                <table>\r\n                  <tr>\r\n                    <th class=\"w60\">Sr.No</th>\r\n                    <th class=\"w100\">Type</th>\r\n                    <th>Distributor</th>\r\n                    <th>Product Details</th>\r\n                    <th class=\"w120\">QTY.</th>\r\n                    <th class=\"w70 text-center\">Action</th>\r\n                  </tr>\r\n                </table>\r\n              </div>\r\n            </div>\r\n            \r\n            <div class=\"table-container\">\r\n              <div class=\"table-content\">\r\n                <table>\r\n                  <tr *ngFor=\"let row of productList; let i = index;\">\r\n                    <td class=\"w60\">{{i+1}}</td>\r\n                    <td class=\"w100\">{{row.return_type}}</td>\r\n                    <td>{{row.company_name}} - {{row.dr_code}}</td>\r\n                    <td>{{row.product_name}} - {{row.product_code}}</td>\r\n                    <td class=\"w120\">{{row.qty}}</td>\r\n                    <td class=\"w70 text-center\">\r\n                      <div class=\"action-button\">\r\n                        <button  mat-icon-button  matTooltip=\"Delete\"  (click)=\"deleteCoupon(i , 'product')\">\r\n                          <i class=\"material-icons del\">delete</i>\r\n                        </button>\r\n                      </div>\r\n                    </td>\r\n                  </tr>\r\n                </table>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          \r\n          <div class=\"row\">\r\n            <div class=\"col s2 offset-s10\">\r\n              <mat-form-field  appearance=\"outline\">\r\n                <mat-label>Invoice Number</mat-label>\r\n                <input matInput placeholder=\"Type Here ...\"  name=\"invoice_number\" #invoice_number=\"ngModel\"  [(ngModel)]=\"couponNumber.invoice_number\" required>\r\n              </mat-form-field>\r\n\r\n              <div class=\"alert alert-danger\" *ngIf=\"invoice_number.touched || f.submitted\">\r\n                <p *ngIf=\"invoice_number.errors?.required\">This field is required</p>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          \r\n          <div class=\"row\">\r\n            <div class=\"col s12\">\r\n              <div class=\"text-right\">\r\n                <button [ngClass]=\"{'loading': savingFlag == true}\" mat-raised-button color=\"accent\" type=\"submit\" [disabled]=\"savingFlag == true\">\r\n                  {{savingFlag == true ? 'Please Wait' : 'Save'}}\r\n                </button>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </ng-container>\r\n      </form>\r\n    </ng-container>\r\n    \r\n    \r\n    \r\n    <div class=\"fab-btns\" *ngIf=\"active_tab == 'Sales Return'\">\r\n      <button class=\"pulse excel\" mat-fab color=\"primary\" [matMenuTriggerFor]=\"menu\" *ngIf=\"loginData.add_sales_return == 1 || loginData.download_sales_return == 1\">\r\n        <i class=\"material-icons\">apps</i>\r\n        Action\r\n      </button>\r\n      <mat-menu #menu=\"matMenu\">\r\n        <button mat-menu-item (click)=\"active_tab = 'Add Sales Return'; clearFilter()\" *ngIf=\"loginData.add_sales_return == 1\">\r\n          <mat-icon>update</mat-icon>\r\n          <span>Add Sales Return</span>\r\n        </button>\r\n        \r\n        \r\n        <button mat-menu-item (click)=\"downloadExcel();\" *ngIf=\"(returnData.length > 0 && active_tab == 'Sales Return') && loginData.download_sales_return == 1\">\r\n          <mat-icon>download</mat-icon>\r\n          <span>Download excel</span>\r\n        </button>\r\n      </mat-menu>\r\n    </div>\r\n    \r\n    \r\n    \r\n    \r\n  </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/sales-return/sales-return-list/sales-return-list.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/sales-return/sales-return-list/sales-return-list.component.ts ***!
  \*******************************************************************************/
/*! exports provided: SalesReturnListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SalesReturnListComponent", function() { return SalesReturnListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_services_DatabaseService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/_services/DatabaseService */ "./src/_services/DatabaseService.ts");
/* harmony import */ var ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng6-toastr-notifications */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/ng6-toastr-notifications/fesm5/ng6-toastr-notifications.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _coupon_coupon_detail_modal_coupon_detail_modal_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../coupon/coupon-detail-modal/coupon-detail-modal.component */ "./src/app/coupon/coupon-detail-modal/coupon-detail-modal.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! moment */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var src_app_localstorage_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/localstorage.service */ "./src/app/localstorage.service.ts");
/* harmony import */ var src_app_company_dispatch_gatepass_add_gatepass_add_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/company-dispatch/gatepass-add/gatepass-add.component */ "./src/app/company-dispatch/gatepass-add/gatepass-add.component.ts");











var SalesReturnListComponent = /** @class */ (function () {
    function SalesReturnListComponent(location, session, service, dialog, route, rout, toast) {
        this.location = location;
        this.session = session;
        this.service = service;
        this.dialog = dialog;
        this.route = route;
        this.rout = rout;
        this.toast = toast;
        this.data = {};
        this.couponNumber = {};
        this.savingFlag = false;
        this.filter = {};
        this.distributorData = [];
        this.returnData = [];
        this.datanotfound = false;
        this.loader = false;
        this.sr_no = 0;
        this.pagenumber = 1;
        this.start = 0;
        this.active_tab = 'Sales Return';
        this.downurl = '';
        this.couponList = [];
        this.downurl = service.downloadUrl;
        this.loginData = this.session.getSession();
        this.loginData = this.loginData.value;
        this.loginData = this.loginData.data;
        this.userData = JSON.parse(localStorage.getItem('st_user'));
        this.data.created_by_id = this.userData['data']['id'];
        this.data.created_by_name = this.userData['data']['name'];
        this.page_limit = service.pageLimit;
        this.getSalesReturn('');
        this.getDistributor('');
    }
    SalesReturnListComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        setTimeout(function () { return _this.inputEl.nativeElement.focus(); });
    };
    SalesReturnListComponent.prototype.ngOnInit = function () {
    };
    SalesReturnListComponent.prototype.pervious = function (active_tab) {
        this.start = this.start - this.page_limit;
        if (active_tab == 'Sales Return') {
            this.getSalesReturn('');
        }
    };
    SalesReturnListComponent.prototype.nextPage = function (active_tab) {
        this.start = this.start + this.page_limit;
        if (active_tab == 'Sales Return') {
            this.getSalesReturn('');
        }
    };
    SalesReturnListComponent.prototype.getDistributor = function (searcValue) {
        var _this = this;
        this.filter.search = searcValue;
        this.service.post_rqst({ 'filter': this.filter }, 'CouponCode/allDr').subscribe(function (result) {
            if (result['statusCode'] == 200) {
                _this.distributorData = result['result'];
            }
            else {
                _this.toast.errorToastr(result['statusMsg']);
            }
        }, function (error) {
        });
    };
    SalesReturnListComponent.prototype.findDr = function (id) {
        var index = this.distributorData.findIndex(function (row) { return row.id == id; });
        if (index != -1) {
            this.data.company_name = this.distributorData[index].company_name;
            this.data.dr_code = this.distributorData[index].dr_code;
        }
    };
    SalesReturnListComponent.prototype.checkCoupon = function (number) {
        var _this = this;
        if (number.length == 16) {
            if (number == undefined) {
                this.toast.errorToastr("Enter coupon code number");
                return;
            }
            if (number == '') {
                this.toast.errorToastr("Enter coupon code number");
                return;
            }
            this.service.post_rqst({ 'coupon_code': number }, 'CouponCode/checkCouponCodeForSalesReturn').subscribe(function (result) {
                if (result['statusCode'] == 200) {
                    _this.couponNumber.coupon_number = '';
                    var temData_1 = result['data'];
                    if (_this.returnData.length == 0) {
                        _this.datanotfound = true;
                    }
                    else {
                        _this.datanotfound = false;
                    }
                    if (_this.couponList != '') {
                        var index = _this.couponList.findIndex(function (row) { return row.coupon_code == temData_1.coupon_code; });
                        if (index != -1) {
                            if (_this.couponList[index].coupon_code === temData_1.coupon_code) {
                                _this.toast.errorToastr('Coupon code already exists');
                                return;
                            }
                        }
                    }
                    _this.couponList.push({ 'id': temData_1.id, 'coupon_code': temData_1.coupon_code, 'coupon_type': temData_1.coupon_type, 'dispatch_date': temData_1.dispatch_date, 'dispatch_type': temData_1.dispatch_type, 'invoice_number': temData_1.invoice_number, 'dr_detail': temData_1.dr_detail, 'scan_status': temData_1.scan_status, 'master_packing_size': temData_1.master_packing_size });
                }
                else {
                    _this.couponNumber.coupon_number = '';
                    _this.toast.errorToastr(result['statusMsg']);
                }
            }, function (error) {
            });
        }
    };
    SalesReturnListComponent.prototype.deleteCoupon = function (i) {
        this.couponList.splice(i, 1);
        this.toast.successToastr('Coupon code delete successfully');
    };
    SalesReturnListComponent.prototype.openDialog = function (id, type) {
        var dialogRef = this.dialog.open(_coupon_coupon_detail_modal_coupon_detail_modal_component__WEBPACK_IMPORTED_MODULE_6__["CouponDetailModalComponent"], {
            width: '1024px',
            panelClass: 'cs-modal',
            data: {
                // 'from':'sales-return',
                'id': id,
            }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result == true) {
            }
        });
    };
    SalesReturnListComponent.prototype.openDialog1 = function (type, number) {
        var _this = this;
        var dialogRef = this.dialog.open(src_app_company_dispatch_gatepass_add_gatepass_add_component__WEBPACK_IMPORTED_MODULE_10__["GatepassAddComponent"], {
            width: '1024px',
            panelClass: 'cs-modal',
            disableClose: true,
            data: {
                'model_type': type,
                'invoice_number': number,
            }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result != false) {
                _this.getSalesReturn('');
            }
        });
    };
    SalesReturnListComponent.prototype.submitDetail = function () {
        var _this = this;
        this.data.couponData = this.couponList;
        this.savingFlag = true;
        this.service.post_rqst({ 'data': this.data }, 'CouponCode/salesReturn').subscribe(function (result) {
            if (result['statusCode'] == 200) {
                _this.toast.successToastr(result['statusMsg']);
                _this.active_tab = 'Sales Return';
                _this.getSalesReturn('');
                _this.savingFlag = false;
            }
            else {
                _this.toast.errorToastr(result['statusMsg']);
                _this.savingFlag = false;
            }
        });
    };
    SalesReturnListComponent.prototype.back = function () {
        this.location.back();
    };
    SalesReturnListComponent.prototype.getSalesReturn = function (action) {
        var _this = this;
        if (action === void 0) { action = ''; }
        if (action == "refresh") {
            this.filter = {};
            this.start = 0;
        }
        if (this.pagenumber > this.total_page) {
            this.pagenumber = this.total_page;
            this.start = this.pageCount - this.page_limit;
        }
        if (this.start < 0) {
            this.start = 0;
        }
        if (this.filter.date_created) {
            this.filter.date_created = moment__WEBPACK_IMPORTED_MODULE_8__(this.filter.date_created).format('YYYY-MM-DD');
        }
        this.loader = true;
        this.filter.active_tab = this.active_tab;
        setTimeout(function () {
            _this.service.post_rqst({ 'branch_code': _this.loginData.branch_code, 'filter': _this.filter, 'start': _this.start, 'pagelimit': _this.page_limit }, "Dispatch/getSalesReturnList")
                .subscribe((function (result) {
                if (result['statusCode'] == 200) {
                    _this.returnData = result['result'];
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
                    if (_this.returnData.length < 1) {
                        _this.datanotfound = true;
                    }
                }
                else {
                    _this.loader = false;
                    _this.toast.errorToastr(result['statusMsg']);
                }
            }));
        }, 3000);
    };
    SalesReturnListComponent.prototype.refresh = function (any, active_tab) {
        this.start = 0;
        this.filter = {};
        if (active_tab == 'Sales Return') {
            this.getSalesReturn('');
        }
    };
    SalesReturnListComponent.prototype.downloadExcel = function () {
        var _this = this;
        this.service.post_rqst({ 'branch_code': this.loginData.branch_code, 'filter': this.filter, }, "Excel/salesReturnCsv").subscribe((function (result) {
            if (result['msg'] == true) {
                window.open(_this.downurl + result['filename']);
            }
            else {
            }
        }));
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('focusInput'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], SalesReturnListComponent.prototype, "inputEl", void 0);
    SalesReturnListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sales-return-list',
            template: __webpack_require__(/*! ./sales-return-list.component.html */ "./src/app/sales-return/sales-return-list/sales-return-list.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_7__["Location"], src_app_localstorage_service__WEBPACK_IMPORTED_MODULE_9__["sessionStorage"], src_services_DatabaseService__WEBPACK_IMPORTED_MODULE_2__["DatabaseService"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialog"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_3__["ToastrManager"]])
    ], SalesReturnListComponent);
    return SalesReturnListComponent;
}());



/***/ }),

/***/ "./src/app/sales-return/sales-return/sales-return.module.ts":
/*!******************************************************************!*\
  !*** ./src/app/sales-return/sales-return/sales-return.module.ts ***!
  \******************************************************************/
/*! exports provided: SalesReturnModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SalesReturnModule", function() { return SalesReturnModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_auth_component_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/auth-component.guard */ "./src/app/auth-component.guard.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var angular_ng_autocomplete__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! angular-ng-autocomplete */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/angular-ng-autocomplete/fesm5/angular-ng-autocomplete.js");
/* harmony import */ var ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-multiselect-dropdown */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/ng-multiselect-dropdown/fesm5/ng-multiselect-dropdown.js");
/* harmony import */ var ngx_mat_select_search__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-mat-select-search */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/ngx-mat-select-search/fesm5/ngx-mat-select-search.js");
/* harmony import */ var src_app_app_utility_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/app-utility.module */ "./src/app/app-utility.module.ts");
/* harmony import */ var src_app_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/material */ "./src/app/material.ts");
/* harmony import */ var _sales_return_list_sales_return_list_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../sales-return-list/sales-return-list.component */ "./src/app/sales-return/sales-return-list/sales-return-list.component.ts");
/* harmony import */ var src_app_company_dispatch_gatepass_add_gatepass_add_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/company-dispatch/gatepass-add/gatepass-add.component */ "./src/app/company-dispatch/gatepass-add/gatepass-add.component.ts");














var dispatchRoutes = [
    { path: "", children: [
            { path: "", component: _sales_return_list_sales_return_list_component__WEBPACK_IMPORTED_MODULE_12__["SalesReturnListComponent"], canActivate: [src_app_auth_component_guard__WEBPACK_IMPORTED_MODULE_4__["AuthComponentGuard"]], data: { expectedRole: ['1'] } }
        ] },
];
var SalesReturnModule = /** @class */ (function () {
    function SalesReturnModule() {
    }
    SalesReturnModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_sales_return_list_sales_return_list_component__WEBPACK_IMPORTED_MODULE_12__["SalesReturnListComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(dispatchRoutes),
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
                ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_8__["NgMultiSelectDropDownModule"],
                src_app_material__WEBPACK_IMPORTED_MODULE_11__["MaterialModule"],
                angular_ng_autocomplete__WEBPACK_IMPORTED_MODULE_7__["AutocompleteLibModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatDialogModule"],
                ngx_mat_select_search__WEBPACK_IMPORTED_MODULE_9__["NgxMatSelectSearchModule"],
                src_app_app_utility_module__WEBPACK_IMPORTED_MODULE_10__["AppUtilityModule"],
            ],
            entryComponents: [src_app_company_dispatch_gatepass_add_gatepass_add_component__WEBPACK_IMPORTED_MODULE_13__["GatepassAddComponent"]]
        })
    ], SalesReturnModule);
    return SalesReturnModule;
}());



/***/ })

}]);