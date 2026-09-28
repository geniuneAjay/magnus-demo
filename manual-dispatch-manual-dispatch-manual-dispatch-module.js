(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["manual-dispatch-manual-dispatch-manual-dispatch-module"],{

/***/ "./src/app/manual-dispatch/manual-dispatch-list/manual-dispatch-list.component.html":
/*!******************************************************************************************!*\
  !*** ./src/app/manual-dispatch/manual-dispatch-list/manual-dispatch-list.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-container\" >\r\n  <div class=\"tools-container\">\r\n    <a mat-icon-button matTooltip=\"Back\" (click)=\"active_tab = 'Manual List'\" *ngIf=\"active_tab == 'Manual Add'\">\r\n      <i class=\"material-icons\">arrow_back</i>\r\n    </a>\r\n    <h2>{{active_tab == 'Manual List' ? 'Manual' :'Add Manual'}}  Dispatch</h2>\r\n    <div class=\"left-auto left-auto df ac flex-gap-10\" *ngIf=\"active_tab == 'Manual List'\">\r\n      <button mat-icon-button  matTooltip=\"Refresh\" (click)=\"refresh('refresh',active_tab)\">\r\n        <i class=\"material-icons\">refresh</i>\r\n      </button>\r\n      <!-- <div class=\"pagination\" *ngIf=\"returnData.length > 0\">\r\n        <div class=\"pagination-content\">\r\n          Pages\r\n          <span>{{pagenumber}}</span>\r\n          of\r\n          <span>{{total_page}}</span>\r\n        </div>\r\n        <div class=\"page-nav\">\r\n          <button mat-icon-button  matTooltip=\"Older\" (click)=\"pervious(active_tab)\"  [disabled]=\"start == 0\">\r\n            <i class=\"material-icons\">navigate_before</i>\r\n          </button>\r\n          <button mat-icon-button  matTooltip=\"Newer\" (click)=\"nextPage(active_tab)\" [disabled]=\"pagenumber == total_page \">\r\n            <i class=\"material-icons\">navigate_next</i>\r\n          </button>\r\n          \r\n        </div>\r\n      </div> -->\r\n    </div>\r\n    \r\n  </div>\r\n  \r\n  <div class=\"container pl10 pr10 pb50\" [ngClass]=\"{'pt10': active_tab== 'Manual Add'}\">\r\n    \r\n    <div class=\"cs-table left-right-10\" *ngIf=\"active_tab== 'Manual List'\">\r\n      <div class=\"sticky-head\">\r\n        <div class=\"table-head\">\r\n          <table>\r\n            <tr>\r\n              <th class=\"w60\">Sr.No</th>\r\n              <th class=\"w100\">Date Created</th>\r\n              <th class=\"w120\">Created By</th>\r\n              <th class=\"w100\">Coupon Code</th>\r\n              <th class=\"w120\">Coupon Type</th>\r\n              <th class=\"w200\">Product Detail</th>\r\n              <th class=\"w100\">Invoice Number</th>\r\n              <th class=\"w200\">Distributor/Dealer Detail</th>\r\n            </tr>\r\n          </table>\r\n        </div>\r\n        \r\n        <div class=\"table-head border-top\">\r\n          <table>\r\n            <tr>\r\n              <th class=\"w60\">&nbsp;</th>\r\n              <th class=\"w100\">\r\n                <div class=\"th-search-acmt\">\r\n                  <mat-form-field class=\"example-full-width cs-input\"  >\r\n                    <input matInput [matDatepicker]=\"picker3\" placeholder=\"Date\" name=\"date_created\" [(ngModel)]=\"filter.date_created\" (ngModelChange)=\"getManualList()\" readonly>\r\n                    <mat-datepicker-toggle matSuffix [for]=\"picker3\"></mat-datepicker-toggle>\r\n                    <mat-datepicker #picker3></mat-datepicker>\r\n                  </mat-form-field>\r\n                </div>\r\n              </th>\r\n              <th class=\"w120\">\r\n                <div class=\"th-search-acmt\">\r\n                  <mat-form-field class=\"example-full-width cs-input\">\r\n                    <input matInput placeholder=\"Search\" name=\"created_by_name\" [(ngModel)]=\"filter.created_by_name\" (keyup.enter)=\"getManualList()\" >\r\n                  </mat-form-field>\r\n                </div>\r\n              </th>\r\n              <th class=\"w100\">\r\n                <div class=\"th-search-acmt\">\r\n                  <mat-form-field class=\"example-full-width cs-input\">\r\n                    <input matInput placeholder=\"Search\" name=\"coupon_code\" [(ngModel)]=\"filter.coupon_code\" (keyup.enter)=\"getManualList()\" >\r\n                  </mat-form-field>\r\n                </div>\r\n              </th>\r\n              <th class=\"w120\">\r\n                <div class=\"th-search-acmt\">\r\n                  <mat-form-field class=\"example-full-width cs-input\">\r\n                    <input matInput placeholder=\"Search\" name=\"coupon_type\" [(ngModel)]=\"filter.coupon_type\" (keyup.enter)=\"getManualList()\" >\r\n                  </mat-form-field>\r\n                </div>\r\n              </th>\r\n              <th class=\"w200\">\r\n                <div class=\"th-search-acmt\">\r\n                  <mat-form-field class=\"example-full-width cs-input\">\r\n                    <input matInput placeholder=\"Search\" name=\"product_detail\" [(ngModel)]=\"filter.product_detail\" (keyup.enter)=\"getManualList()\" >\r\n                  </mat-form-field>\r\n                </div>\r\n              </th>\r\n              <th class=\"w100\">\r\n                <div class=\"th-search-acmt\">\r\n                  <mat-form-field class=\"example-full-width cs-input\">\r\n                    <input matInput placeholder=\"Search\" name=\"invoice_number\" [(ngModel)]=\"filter.invoice_number\" (keyup.enter)=\"getManualList()\" >\r\n                  </mat-form-field>\r\n                </div>\r\n              </th>\r\n              <th class=\"w200\">\r\n                <div class=\"th-search-acmt\">\r\n                  <mat-form-field class=\"example-full-width cs-input\">\r\n                    <input matInput placeholder=\"Search\" name=\"dr_detail\" [(ngModel)]=\"filter.dr_detail\" (keyup.enter)=\"getManualList()\" >\r\n                  </mat-form-field>\r\n                </div>\r\n              </th>\r\n            </tr>\r\n          </table>\r\n        </div>\r\n      </div>\r\n      \r\n      <div class=\"table-container\">\r\n        <div class=\"table-content\">\r\n          <table>\r\n            <ng-container *ngIf=\"!loader\">\r\n              <tr *ngFor=\"let row of returnData; let i = index;\">\r\n                <td class=\"w60\">{{ i + 1 + sr_no }}</td>\r\n                <td class=\"w100\">{{row.date_created | date:'dd MMM yyyy'}}</td>\r\n                <td class=\"w120\">{{row.created_by_name}}</td>\r\n                <td class=\"w100\">{{row.coupon_code}}</td>\r\n                <td class=\"w120\">{{row.coupon_type}}</td>\r\n                <td class=\"w200\">{{row.product_detail}}</td>\r\n                <td class=\"w100\">{{row.invoice_number}}</td>\r\n                <td class=\"w200\">{{row.dr_detail ? row.dr_detail : '---'}}</td>\r\n              </tr>\r\n            </ng-container>\r\n            \r\n            <ng-container *ngIf=\"loader\">\r\n              <tr class=\"sk-loading\" *ngFor=\"let row of [].constructor(10)\">\r\n                <td class=\"w60\"><div>&nbsp;</div></td>\r\n                <td class=\"w100\"><div>&nbsp;</div></td>\r\n                <td class=\"w120\"><div>&nbsp;</div></td>\r\n                <td class=\"w100\"><div>&nbsp;</div></td>\r\n                <td class=\"w120\"><div>&nbsp;</div></td>\r\n                <td class=\"w200\"><div>&nbsp;</div></td>\r\n                <td class=\"w100\"><div>&nbsp;</div></td>\r\n                <td class=\"w200\"><div>&nbsp;</div></td>\r\n              </tr>\r\n            </ng-container>\r\n           \r\n          </table>\r\n        </div>\r\n      </div>\r\n      <ng-container *ngIf=\"returnData.length == 0\">\r\n        <app-not-result-found></app-not-result-found>\r\n    </ng-container>\r\n    </div>\r\n    \r\n    \r\n    \r\n    \r\n    <ng-container *ngIf=\"active_tab== 'Manual Add'\">\r\n      <div class=\"row \">\r\n        <div class=\"col s12\">\r\n          <div class=\"card pb0\">\r\n            <div class=\"card-body cs-form\">\r\n              <div class=\"row\">\r\n                <div class=\"col s12 m6 l6\">\r\n                  <mat-form-field  appearance=\"outline\">\r\n                    <mat-label>Coupon Number</mat-label>\r\n                    <input matInput placeholder=\"Type Here ...\"  name=\"coupon_number\" #coupon_number=\"ngModel\" [(ngModel)]=\"couponNumber.coupon_number\"   minlength=\"16\" maxlength=\"16\" min=\"0\" #focusInput  (ngModelChange)=\"checkCoupon(couponNumber.coupon_number)\">\r\n                  </mat-form-field>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      \r\n      \r\n      <form #f=\"ngForm\" (ngSubmit)=\" f.valid && submitDetail()\">\r\n        <ng-container  *ngIf=\"couponList.length > 0;\">\r\n          <div class=\"row\">\r\n            <div class=\"col s12\">\r\n              <div class=\"card pb0\">\r\n                <div class=\"card-head\">\r\n                  <h2>Basic Information</h2>\r\n                </div>\r\n                <div class=\"card-body cs-form\">\r\n                  <div class=\"row\">\r\n                    <div class=\"col s12 m4 l4\">\r\n                      <mat-form-field  appearance=\"outline\">\r\n                        <mat-label>Distributor/Dealer</mat-label>\r\n                        <mat-select  name=\"dr_id\" [(ngModel)]=\"data.dr_id\" #dr_id=\"ngModel\" required  (ngModelChange)=\"findDr(data.dr_id)\">\r\n                          <mat-option >\r\n                            <ngx-mat-select-search noEntriesFoundLabel=\"'no data found'\" placeholderLabel=\"Search..\" (keyup)=\"getDistributor($event.target.value)\"></ngx-mat-select-search>\r\n                          </mat-option>\r\n                          <mat-option *ngFor=\"let row of distributorData\" value=\"{{row.id}}\">{{row.company_name | titlecase}} -{{row.dr_code}}</mat-option>\r\n                        </mat-select>\r\n                      </mat-form-field>\r\n                      <div class=\"alert alert-danger\" *ngIf=\"dr_id.touched || f.submitted\">\r\n                        <p *ngIf=\"dr_id.errors?.required\">This field is required</p>\r\n                      </div>\r\n                    </div>\r\n                    \r\n                    <div class=\"col s12 m4 l4\">\r\n                      <mat-form-field  appearance=\"outline\">\r\n                        <mat-label>Dispatch Type</mat-label>\r\n                        <mat-select  name=\"bill_dispatch_type\" [(ngModel)]=\"data.bill_dispatch_type\" #bill_dispatch_type=\"ngModel\" required>\r\n                          <mat-option value=\"Warehouse\">Warehouse</mat-option>\r\n                          <mat-option value=\"Customer\">Customer</mat-option>\r\n                        </mat-select>\r\n                      </mat-form-field>\r\n                      <div class=\"alert alert-danger\" *ngIf=\"bill_dispatch_type.touched || f.submitted\">\r\n                        <p *ngIf=\"bill_dispatch_type.errors?.required\">This field is required</p>\r\n                      </div>\r\n                    </div>\r\n                    \r\n                    <div class=\"col s12 m2 l2\">\r\n                      <mat-form-field  appearance=\"outline\">\r\n                        <mat-label>Invoice Number</mat-label>\r\n                        <input matInput placeholder=\"Type Here ...\"  name=\"invoice_no\" #invoice_no=\"ngModel\"\r\n                        [(ngModel)]=\"data.invoice_no\" required>\r\n                      </mat-form-field>\r\n                      <div class=\"alert alert-danger\" *ngIf=\"invoice_no.touched || f.submitted\">\r\n                        <p *ngIf=\"invoice_no.errors?.required\">This field is required</p>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          \r\n          <div class=\"cs-table\">\r\n            <div class=\"sticky-head\">\r\n              <div class=\"table-head\">\r\n                <table>\r\n                  <tr>\r\n                    <th class=\"w60\">Sr.No</th>\r\n                    <th>Coupon Code</th>\r\n                    <th class=\"w150\">Coupon Type</th>\r\n                    <th class=\"w150\">Packing Size</th>\r\n                    <th class=\"w70 text-center\">Action</th>\r\n                  </tr>\r\n                </table>\r\n              </div>\r\n            </div>\r\n            \r\n            <div class=\"table-container\">\r\n              <div class=\"table-content\">\r\n                <table>\r\n                  <tr *ngFor=\"let row of couponList; let i = index;\">\r\n                    <td class=\"w60\">{{i+1}}</td>\r\n                    <td>{{row.coupon_code}}</td>\r\n                    <td class=\"w150\">{{row.coupon_type == 'Master Box' ? 'Box' :'Product'}}</td>\r\n                    <td class=\"w150\">{{row.master_packing_size}}</td>\r\n                    <td class=\"w70 text-center\">\r\n                      <div class=\"action-button\">\r\n                        <ng-container *ngIf=\"row.coupon_type == 'Master Box'\"> \r\n                          <button  mat-icon-button  matTooltip=\"View\"  (click)=\"openDialog(row.id)\">\r\n                            <i class=\"material-icons edit\">visibility</i>\r\n                          </button>\r\n                        </ng-container>\r\n                        \r\n                        <button  mat-icon-button  matTooltip=\"Delete\"  (click)=\"deleteCoupon(i)\">\r\n                          <i class=\"material-icons del\">delete</i>\r\n                        </button>\r\n                      </div>\r\n                    </td>\r\n                  </tr>\r\n                </table>\r\n              </div>\r\n            </div>\r\n            <ng-container *ngIf=\"returnData.length == 0 && datanotfound == true \">\r\n              <app-not-result-found></app-not-result-found>\r\n            </ng-container>\r\n          </div>\r\n           \r\n          \r\n          <div class=\"row\">\r\n            <div class=\"col s12\">\r\n              <div class=\"text-right\">\r\n                <button [ngClass]=\"{'loading': savingFlag == true}\" mat-raised-button color=\"accent\" type=\"submit\" [disabled]=\"savingFlag == true\">\r\n                  {{savingFlag == true ? 'Please Wait' : 'Save'}}\r\n                </button>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </ng-container>\r\n      </form>\r\n    </ng-container>\r\n    \r\n    \r\n    \r\n    <div class=\"fab-btns\" *ngIf=\"active_tab == 'Manual List'\">\r\n      <button class=\"pulse excel\" mat-fab color=\"primary\" [matMenuTriggerFor]=\"menu\" *ngIf=\"loginData.add_manual_dispatch == 1 || loginData.download_manual_dispatch == 1\">\r\n        <i class=\"material-icons\">apps</i>\r\n        Action\r\n      </button>\r\n      <mat-menu #menu=\"matMenu\">\r\n        <button mat-menu-item (click)=\"active_tab = 'Manual Add'\" *ngIf=\"loginData.add_manual_dispatch == 1\">\r\n          <mat-icon>update</mat-icon>\r\n          <span>Add Manual</span>\r\n        </button>\r\n        \r\n        \r\n        <button mat-menu-item (click)=\"downloadExcel();\" *ngIf=\"(returnData.length > 0 && active_tab == 'Manual List')  && loginData.download_manual_dispatch == 1\">\r\n          <mat-icon>download</mat-icon>\r\n          <span>Download excel</span>\r\n        </button>\r\n      </mat-menu>\r\n    </div>\r\n    \r\n    \r\n    \r\n  </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/manual-dispatch/manual-dispatch-list/manual-dispatch-list.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/manual-dispatch/manual-dispatch-list/manual-dispatch-list.component.ts ***!
  \****************************************************************************************/
/*! exports provided: ManualDispatchListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManualDispatchListComponent", function() { return ManualDispatchListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_services_DatabaseService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/_services/DatabaseService */ "./src/_services/DatabaseService.ts");
/* harmony import */ var ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng6-toastr-notifications */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/ng6-toastr-notifications/fesm5/ng6-toastr-notifications.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_localstorage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/localstorage.service */ "./src/app/localstorage.service.ts");
/* harmony import */ var _coupon_coupon_detail_modal_coupon_detail_modal_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../coupon/coupon-detail-modal/coupon-detail-modal.component */ "./src/app/coupon/coupon-detail-modal/coupon-detail-modal.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! moment */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_9__);










var ManualDispatchListComponent = /** @class */ (function () {
    function ManualDispatchListComponent(location, service, dialog, route, session, rout, toast) {
        this.location = location;
        this.service = service;
        this.dialog = dialog;
        this.route = route;
        this.session = session;
        this.rout = rout;
        this.toast = toast;
        this.data = {};
        this.couponNumber = {};
        this.savingFlag = false;
        this.filter = {};
        this.distributorData = [];
        this.returnData = [];
        this.loader = false;
        this.sr_no = 0;
        this.pagenumber = 1;
        this.start = 0;
        this.active_tab = 'Manual List';
        this.datanotfound = false;
        this.downurl = '';
        this.couponList = [];
        this.loginData = this.session.getSession();
        this.loginData = this.loginData.value;
        this.loginData = this.loginData.data;
        this.userData = JSON.parse(localStorage.getItem('st_user'));
        this.data.created_by_id = this.userData['data']['id'];
        this.data.created_by_name = this.userData['data']['name'];
        this.page_limit = service.pageLimit;
        this.getDistributor('');
        this.getManualList('');
    }
    ManualDispatchListComponent.prototype.ngOnInit = function () {
    };
    ManualDispatchListComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        setTimeout(function () { return _this.inputEl.nativeElement.focus(); });
    };
    ManualDispatchListComponent.prototype.pervious = function (active_tab) {
        this.start = this.start - this.page_limit;
        if (active_tab == 'Manual List') {
            this.getManualList('');
        }
    };
    ManualDispatchListComponent.prototype.nextPage = function (active_tab) {
        this.start = this.start + this.page_limit;
        if (active_tab == 'Manual List') {
            this.getManualList('');
        }
    };
    ManualDispatchListComponent.prototype.getDistributor = function (searcValue) {
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
    ManualDispatchListComponent.prototype.findDr = function (id) {
        var index = this.distributorData.findIndex(function (row) { return row.id == id; });
        if (index != -1) {
            this.data.company_name = this.distributorData[index].company_name;
            this.data.dr_code = this.distributorData[index].dr_code;
        }
    };
    ManualDispatchListComponent.prototype.openDialog = function (id, type) {
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
    ManualDispatchListComponent.prototype.checkCoupon = function (number) {
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
            this.service.post_rqst({ 'coupon_code': number }, 'CouponCode/checkCouponCodeCheck').subscribe(function (result) {
                if (result['statusCode'] == 200) {
                    _this.couponNumber.coupon_number = '';
                    var temData_1 = result['data'];
                    if (_this.couponList != '') {
                        var index = _this.couponList.findIndex(function (row) { return row.coupon_code == temData_1.coupon_code; });
                        if (index != -1) {
                            if (_this.couponList[index].coupon_code === temData_1.coupon_code) {
                                _this.toast.errorToastr('Coupon code already exists');
                                return;
                            }
                        }
                    }
                    _this.couponList.push({ 'id': temData_1.id, 'coupon_code': temData_1.coupon_code, 'coupon_type': temData_1.coupon_type, 'master_packing_size': temData_1.master_packing_size });
                }
                else {
                    _this.couponNumber.coupon_number = '';
                    _this.toast.errorToastr(result['statusMsg']);
                }
            }, function (error) {
            });
        }
    };
    ManualDispatchListComponent.prototype.deleteCoupon = function (i) {
        this.couponList.splice(i, 1);
        this.toast.successToastr('Coupon code delete successfully');
    };
    ManualDispatchListComponent.prototype.submitDetail = function () {
        var _this = this;
        this.data.couponData = this.couponList;
        this.savingFlag = true;
        this.service.post_rqst({ 'data': this.data }, 'CouponCode/updateDispatch').subscribe(function (result) {
            if (result['statusCode'] == 200) {
                _this.toast.successToastr(result['statusMsg']);
                _this.active_tab = 'Manual List';
                _this.savingFlag = false;
            }
            else {
                _this.toast.errorToastr(result['statusMsg']);
                _this.savingFlag = false;
            }
        });
    };
    ManualDispatchListComponent.prototype.back = function () {
        this.location.back();
    };
    ManualDispatchListComponent.prototype.getManualList = function (action) {
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
            this.filter.date_created = moment__WEBPACK_IMPORTED_MODULE_9__(this.filter.date_created).format('YYYY-MM-DD');
        }
        this.loader = true;
        this.filter.active_tab = this.active_tab;
        this.service.post_rqst({ 'branch_code': this.loginData.branch_code, 'filter': this.filter, 'start': this.start, 'pagelimit': this.page_limit }, "Dispatch/getManualDispatchList")
            .subscribe((function (result) {
            if (result['statusCode'] == 200) {
                _this.returnData = result['result'];
                _this.loader = false;
                _this.pageCount = result['count'];
                _this.total_list = (result['overall_total_sum']);
                if (_this.returnData.length == 0) {
                    _this.datanotfound = true;
                }
                else {
                    _this.datanotfound = false;
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
            }
            else {
                _this.loader = false;
                _this.toast.errorToastr(result['statusMsg']);
            }
        }));
    };
    ManualDispatchListComponent.prototype.refresh = function (any, active_tab) {
        this.start = 0;
        this.filter = {};
        if (active_tab == 'Manual List') {
            this.getManualList('');
        }
    };
    ManualDispatchListComponent.prototype.downloadExcel = function () {
        var _this = this;
        this.service.post_rqst({ 'branch_code': this.loginData.branch_code, 'filter': this.filter, }, "Excel/manualDispatchCsv").subscribe((function (result) {
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
    ], ManualDispatchListComponent.prototype, "inputEl", void 0);
    ManualDispatchListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-manual-dispatch-list',
            template: __webpack_require__(/*! ./manual-dispatch-list.component.html */ "./src/app/manual-dispatch/manual-dispatch-list/manual-dispatch-list.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_8__["Location"], src_services_DatabaseService__WEBPACK_IMPORTED_MODULE_2__["DatabaseService"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatDialog"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], src_app_localstorage_service__WEBPACK_IMPORTED_MODULE_5__["sessionStorage"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_3__["ToastrManager"]])
    ], ManualDispatchListComponent);
    return ManualDispatchListComponent;
}());



/***/ }),

/***/ "./src/app/manual-dispatch/manual-dispatch/manual-dispatch.module.ts":
/*!***************************************************************************!*\
  !*** ./src/app/manual-dispatch/manual-dispatch/manual-dispatch.module.ts ***!
  \***************************************************************************/
/*! exports provided: ManualDispatchModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ManualDispatchModule", function() { return ManualDispatchModule; });
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
/* harmony import */ var _manual_dispatch_list_manual_dispatch_list_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../manual-dispatch-list/manual-dispatch-list.component */ "./src/app/manual-dispatch/manual-dispatch-list/manual-dispatch-list.component.ts");













var dispatchRoutes = [
    { path: "", children: [
            { path: "", component: _manual_dispatch_list_manual_dispatch_list_component__WEBPACK_IMPORTED_MODULE_12__["ManualDispatchListComponent"], canActivate: [src_app_auth_component_guard__WEBPACK_IMPORTED_MODULE_4__["AuthComponentGuard"]], data: { expectedRole: ['1'] } }
        ] },
];
var ManualDispatchModule = /** @class */ (function () {
    function ManualDispatchModule() {
    }
    ManualDispatchModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_manual_dispatch_list_manual_dispatch_list_component__WEBPACK_IMPORTED_MODULE_12__["ManualDispatchListComponent"]],
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
            entryComponents: []
        })
    ], ManualDispatchModule);
    return ManualDispatchModule;
}());



/***/ })

}]);