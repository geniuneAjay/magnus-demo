(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["credit-notes-credit-notes-module-credit-notes-module"],{

/***/ "./src/app/credit-notes/credit-notes-module/credit-notes.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/credit-notes/credit-notes-module/credit-notes.module.ts ***!
  \*************************************************************************/
/*! exports provided: CreditNotesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreditNotesModule", function() { return CreditNotesModule; });
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
/* harmony import */ var _credit_notes_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../credit-notes.component */ "./src/app/credit-notes/credit-notes.component.ts");













var creditNoteRoutes = [
    { path: '', component: _credit_notes_component__WEBPACK_IMPORTED_MODULE_12__["CreditNotesComponent"], canActivate: [src_app_auth_component_guard__WEBPACK_IMPORTED_MODULE_11__["AuthComponentGuard"]], data: { expectedRole: ['1'] } },
];
var CreditNotesModule = /** @class */ (function () {
    function CreditNotesModule() {
    }
    CreditNotesModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_credit_notes_component__WEBPACK_IMPORTED_MODULE_12__["CreditNotesComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild(creditNoteRoutes),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_7__["NgMultiSelectDropDownModule"],
                src_app_material__WEBPACK_IMPORTED_MODULE_10__["MaterialModule"],
                angular_ng_autocomplete__WEBPACK_IMPORTED_MODULE_6__["AutocompleteLibModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialogModule"],
                ngx_mat_select_search__WEBPACK_IMPORTED_MODULE_8__["NgxMatSelectSearchModule"],
                src_app_app_utility_module__WEBPACK_IMPORTED_MODULE_9__["AppUtilityModule"]
            ]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CreditNotesModule);
    return CreditNotesModule;
}());



/***/ }),

/***/ "./src/app/credit-notes/credit-notes.component.html":
/*!**********************************************************!*\
  !*** ./src/app/credit-notes/credit-notes.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-container\">\r\n  <div class=\"tab-surface\">\r\n    <button *ngFor=\"let row of calenderInfo; let i =index;\" mat-button\r\n        [ngClass]=\"OrderMonth == row.month && OrderYear == row.year ? 'active' : ''\"\r\n        (click)=\"creditNote('',row.month,row.year);\">{{row.month_name}} {{row.year}}<span\r\n            class=\"order-value\">&#x20B9;{{row.total_payment_amount ? (row.total_payment_amount | number:'1.1-2') : '0'}}</span></button>\r\n  </div>\r\n  <div class=\"tools-container\">\r\n    <h2>Credit Note List</h2>\r\n    <div class=\"left-auto left-auto df ac flex-gap-10\">\r\n      <a mat-icon-button matTooltip=\"Refresh\" (click)=\"refresh('refresh',OrderMonth,OrderYear)\">\r\n        <i class=\"material-icons\">refresh</i>\r\n      </a>\r\n\r\n      <div class=\"pagination\" *ngIf=\"credit_notes.length > 0\">\r\n        <div class=\"pagination-content\">\r\n          Pages\r\n          <span>{{pagenumber}}</span>\r\n          of\r\n          <span>{{total_page}}</span>\r\n        </div>\r\n        <div class=\"page-nav\">\r\n          <button mat-icon-button matTooltip=\"Older\" (click)=\"pervious('',OrderMonth,OrderYear)\" [disabled]=\"start == 0\">\r\n            <i class=\"material-icons\">navigate_before</i>\r\n          </button>\r\n          <!-- <input type=\"text\" placeholder=\"GO TO\" name=\"pagenumber\" (keyup.enter)=\"inputValue(pagenumber); \" [(ngModel)]=\"pagenumber\" min=\"1\" max={{total_page}}> -->\r\n          <button mat-icon-button matTooltip=\"Newer\" (click)=\"nextPage('',OrderMonth,OrderYear)\" [disabled]=\"pagenumber == total_page \">\r\n            <i class=\"material-icons\">navigate_next</i>\r\n          </button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"container pb100\">\r\n    <div class=\"cs-table\">\r\n      <div class=\"sticky-head\">\r\n        <div class=\"table-head\">\r\n          <table>\r\n            <tr>\r\n              <th class=\"w30\">S.no.</th>\r\n              <th class=\"w100\">Credit Note Date</th>\r\n              <th class=\"w100\">Receipt Number</th>\r\n              <th class=\"w200\">Customer Details</th>\r\n              <th class=\"w100\">Account Code</th>\r\n              <th class=\"w100 text-right\">Amount</th>\r\n              <th class=\"w220\">Remark</th>\r\n            </tr>\r\n          </table>\r\n        </div>\r\n\r\n        <div class=\"table-head border-top\">\r\n          <table class=\"sno-border\">\r\n            <tr>\r\n              <th class=\"w30\">&nbsp;</th>\r\n              <th class=\"w100\">\r\n                <div class=\"th-search-acmt\">\r\n                  <mat-form-field class=\"cs-input date-column infix-bodr\">\r\n                    <input matInput [matDatepicker]=\"picker1\" placeholder=\"Date\" name=\"date_created\"\r\n                      [(ngModel)]=\"filter.date_created\" (ngModelChange)=\"date_format($event,OrderMonth,OrderYear)\" readonly>\r\n                    <mat-datepicker-toggle matSuffix [for]=\"picker1\"></mat-datepicker-toggle>\r\n                    <mat-datepicker #picker1 disabled=\"false\"></mat-datepicker>\r\n                  </mat-form-field>\r\n                </div>\r\n              </th>\r\n              <th class=\"w100\">\r\n                <div class=\"th-search-acmt\">\r\n                  <mat-form-field class=\"example-full-width cs-input select-input\">\r\n                    <input matInput placeholder=\"Search ...\" type=\"text\" name=\"bill_number\"\r\n                      [(ngModel)]=\"filter.bill_number\" (keyup.enter)=\"creditNote('',OrderMonth,OrderYear)\">\r\n                  </mat-form-field>\r\n                </div>\r\n              </th>\r\n              <th class=\"w200\">\r\n                <div class=\"th-search-acmt\">\r\n                  <mat-form-field class=\"example-full-width cs-input select-input\">\r\n                    <input matInput placeholder=\"Search ...\" type=\"text\" name=\"customer_name\"\r\n                      [(ngModel)]=\"filter.customer_name\" (keyup.enter)=\"creditNote('',OrderMonth,OrderYear)\">\r\n                  </mat-form-field>\r\n                </div>\r\n              </th>\r\n              <th class=\"w100\">\r\n                <div class=\"th-search-acmt\">\r\n                  <mat-form-field class=\"example-full-width cs-input select-input\">\r\n                    <input matInput placeholder=\"Search ...\" type=\"text\" name=\"customer_code\"\r\n                      [(ngModel)]=\"filter.customer_code\" (keyup.enter)=\"creditNote('',OrderMonth,OrderYear)\">\r\n                  </mat-form-field>\r\n                </div>\r\n              </th>\r\n              <th class=\"w100 text-right\">&nbsp;</th>\r\n              <th class=\"w220\">&nbsp;</th>\r\n            </tr>\r\n          </table>\r\n        </div>\r\n      </div>\r\n\r\n\r\n      <div class=\"table-container\">\r\n        <div class=\"table-content\">\r\n          <table>\r\n            <ng-container *ngIf=\"!loader\">\r\n              <tr *ngFor=\"let row of credit_notes; let i =index\">\r\n                <td class=\"w30\">{{ i + 1 + sr_no }}</td>\r\n                <td class=\"w100\">{{row.date_created | date:'dd MMM yyyy , h:mm a'}}</td>\r\n                <td class=\"w100\">{{row.payment_id}}</td>\r\n                <td class=\"w200\">{{row.customer_name | titlecase}} - {{row.contact_person_name | titlecase}}\r\n                  <strong>({{row.mobile}})</strong></td>\r\n                <td class=\"w100\">{{row.customer_code}}</td>\r\n                <td class=\"w100 text-right\"><strong>&#x20B9; {{row.payment_amount}}</strong></td>\r\n                <td class=\"w220\">{{row.remarks}}</td>\r\n              </tr>\r\n            </ng-container>\r\n\r\n            <ng-container *ngIf=\"loader\">\r\n              <tr class=\"sk-loading\" *ngFor=\"let row of [].constructor(10)\">\r\n                <td class=\"w30\">\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n                <td class=\"w100\">\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n                <td class=\"w100\">\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n                <td class=\"w200\">\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n                <td class=\"w100\">\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n                <td class=\"w100\">\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n                <td class=\"w220\">\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n              </tr>\r\n            </ng-container>\r\n          </table>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <ng-container *ngIf=\"credit_notes.length == 0 && datanotfound == true \">\r\n      <app-not-result-found></app-not-result-found>\r\n    </ng-container>\r\n  </div>\r\n  <div>\r\n  </div>\r\n  <div class=\"fab-btns\">\r\n    <button class=\"excel pulse\" mat-fab color=\"primary\"  [matMenuTriggerFor]=\"menu\">\r\n      <i class=\"material-icons\">apps</i>\r\n      Action\r\n    </button>\r\n    <mat-menu #menu=\"matMenu\">\r\n\r\n      <button mat-menu-item (click)=\"upload_excel();\">\r\n        <mat-icon>cloud_upload</mat-icon>\r\n        <span>Upload New Data</span>\r\n      </button>\r\n      <button mat-menu-item (click)=\"exportAsXLSX(OrderMonth, OrderYear)\"  *ngIf=\"credit_notes.length > 0\">\r\n        <mat-icon>download</mat-icon>\r\n        <span>Download in excel</span>\r\n        Download Excel\r\n      </button>\r\n      <!-- </div> -->\r\n    </mat-menu>\r\n  </div>\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/credit-notes/credit-notes.component.ts":
/*!********************************************************!*\
  !*** ./src/app/credit-notes/credit-notes.component.ts ***!
  \********************************************************/
/*! exports provided: CreditNotesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CreditNotesComponent", function() { return CreditNotesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_services_DatabaseService__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/_services/DatabaseService */ "./src/_services/DatabaseService.ts");
/* harmony import */ var _dialog_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../dialog.component */ "./src/app/dialog.component.ts");
/* harmony import */ var _localstorage_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../localstorage.service */ "./src/app/localstorage.service.ts");
/* harmony import */ var _upload_file_modal_upload_file_modal_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../upload-file-modal/upload-file-modal.component */ "./src/app/upload-file-modal/upload-file-modal.component.ts");
/* harmony import */ var ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng6-toastr-notifications */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/ng6-toastr-notifications/fesm5/ng6-toastr-notifications.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! moment */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_9__);










var CreditNotesComponent = /** @class */ (function () {
    function CreditNotesComponent(serve, route, ActivatedRoute, dialog, session, alrt, toast) {
        this.serve = serve;
        this.route = route;
        this.ActivatedRoute = ActivatedRoute;
        this.dialog = dialog;
        this.session = session;
        this.alrt = alrt;
        this.toast = toast;
        this.active_tab = 'active';
        this.excelLoader = false;
        this.credit_notes = [];
        this.sr_no = 0;
        this.pagenumber = 1;
        this.start = 0;
        this.loader = false;
        this.datanotfound = false;
        this.filter = {};
        this.login_data = [];
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
        this.assign_login_data = this.assign_login_data.assignModule;
        this.date = new Date();
        this.monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
        this.currentMonth = this.monthNames[this.date.getMonth()];
        this.currentYear = this.date.getFullYear();
        this.currentMonth_no = this.date.getMonth() + 1;
    }
    CreditNotesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.filter = this.serve.getData();
        this.login_data = this.session.getSession();
        this.login_data = this.login_data.value.data;
        if (this.login_data.access_level != '1') {
            this.login_dr_id = this.login_data.id;
        }
        this.ActivatedRoute.params.subscribe(function (params) {
            _this.type_id = params.id;
            _this.type = params.type;
            _this.creditNote('', _this.currentMonth_no, _this.currentYear);
        });
    };
    CreditNotesComponent.prototype.ngOnDestroy = function () {
        this.serve.setData(this.filter);
    };
    CreditNotesComponent.prototype.pervious = function (blnk, month, year) {
        this.start = this.start - this.page_limit;
        this.creditNote(blnk, month, year);
    };
    CreditNotesComponent.prototype.nextPage = function (blnk, month, year) {
        this.start = this.start + this.page_limit;
        this.creditNote(blnk, month, year);
    };
    CreditNotesComponent.prototype.date_format = function (event, month, year) {
        this.filter.date_created = moment__WEBPACK_IMPORTED_MODULE_9__(event.value).format('YYYY-MM-DD');
        this.creditNote('', month, year);
    };
    CreditNotesComponent.prototype.creditNote = function (action, month, year) {
        var _this = this;
        if (action === void 0) { action = ''; }
        if (action == "refresh") {
            this.filter = {};
            this.credit_notes = [];
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
        this.loader = true;
        this.serve.post_rqst({ 'filter': this.filter, 'start': this.start, 'pagelimit': this.page_limit, 'month': month, 'year': year }, "Account/creditNoteListing")
            .subscribe((function (result) {
            if (result['statusCode'] == 200) {
                _this.credit_notes = (result['list']);
                _this.calenderInfo = (result['calenderInfo']);
                _this.pageCount = result['count'];
                if (_this.credit_notes.length == 0) {
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
                _this.serve.count_list();
            }
            else {
                _this.toast.errorToastr(result['statusMsg']);
            }
        }));
    };
    CreditNotesComponent.prototype.refresh = function (blnk, month, year) {
        this.creditNote(blnk, month, year);
    };
    CreditNotesComponent.prototype.upload_excel = function () {
        var _this = this;
        var dialogRef = this.alrt.open(_upload_file_modal_upload_file_modal_component__WEBPACK_IMPORTED_MODULE_7__["UploadFileModalComponent"], {
            width: '500px',
            panelClass: 'cs-modal',
            disableClose: true,
            data: {
                'from': 'credit_note',
            }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            _this.creditNote('', _this.OrderMonth, _this.OrderYear);
        });
    };
    CreditNotesComponent.prototype.tothepage = function (id, state, type) {
        this.route.navigate(['/distribution-detail/' + id], { queryParams: { state: state, id: id, type: type } });
    };
    CreditNotesComponent.prototype.exportAsXLSX = function (month, year) {
        var _this = this;
        this.serve.post_rqst({ 'filter': this.filter, 'start': this.start, 'pagelimit': this.page_limit, 'month': month, 'year': year }, "Excel/credit_note_listing")
            .subscribe((function (result) {
            if (result['msg'] == true) {
                window.open(_this.downurl + result['filename']);
                _this.creditNote('', month, year);
            }
            else {
            }
        }));
    };
    CreditNotesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-credit-notes',
            template: __webpack_require__(/*! ./credit-notes.component.html */ "./src/app/credit-notes/credit-notes.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_services_DatabaseService__WEBPACK_IMPORTED_MODULE_4__["DatabaseService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _dialog_component__WEBPACK_IMPORTED_MODULE_5__["DialogComponent"], _localstorage_service__WEBPACK_IMPORTED_MODULE_6__["sessionStorage"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"], ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_8__["ToastrManager"]])
    ], CreditNotesComponent);
    return CreditNotesComponent;
}());



/***/ })

}]);