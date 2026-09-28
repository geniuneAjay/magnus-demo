(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pop-requisition-pop-requisition-pop-requisition-module"],{

/***/ "./src/app/pop-requisition/pop-requisition/pop-requisition.module.ts":
/*!***************************************************************************!*\
  !*** ./src/app/pop-requisition/pop-requisition/pop-requisition.module.ts ***!
  \***************************************************************************/
/*! exports provided: PopRequisitionModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopRequisitionModule", function() { return PopRequisitionModule; });
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
/* harmony import */ var _pop_requisition_pop_requisition_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pop-requisition/pop-requisition.component */ "./src/app/pop-requisition/pop-requisition/pop-requisition/pop-requisition.component.ts");













var routes = [
    {
        path: "", children: [
            { path: "", component: _pop_requisition_pop_requisition_component__WEBPACK_IMPORTED_MODULE_12__["PopRequisitionComponent"], canActivate: [src_app_auth_component_guard__WEBPACK_IMPORTED_MODULE_10__["AuthComponentGuard"]], data: { expectedRole: ['1'] } },
        ]
    },
];
var PopRequisitionModule = /** @class */ (function () {
    function PopRequisitionModule() {
    }
    PopRequisitionModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _pop_requisition_pop_requisition_component__WEBPACK_IMPORTED_MODULE_12__["PopRequisitionComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild(routes),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_7__["NgMultiSelectDropDownModule"],
                src_app_material__WEBPACK_IMPORTED_MODULE_11__["MaterialModule"],
                angular_ng_autocomplete__WEBPACK_IMPORTED_MODULE_6__["AutocompleteLibModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialogModule"],
                ngx_mat_select_search__WEBPACK_IMPORTED_MODULE_8__["NgxMatSelectSearchModule"],
                src_app_app_utility_module__WEBPACK_IMPORTED_MODULE_9__["AppUtilityModule"]
            ],
            entryComponents: []
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PopRequisitionModule);
    return PopRequisitionModule;
}());



/***/ }),

/***/ "./src/app/pop-requisition/pop-requisition/pop-requisition/pop-requisition.component.html":
/*!************************************************************************************************!*\
  !*** ./src/app/pop-requisition/pop-requisition/pop-requisition/pop-requisition.component.html ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-container\">\r\n\r\n  <div class=\"tools-container\">\r\n    <h2>Pop Requisition Req.</h2>\r\n    <div class=\"left-auto df flex-gap-10\">\r\n      <button mat-icon-button matTooltip=\"Refresh\" (click)=\"refresh()\">\r\n        <i class=\"material-icons\">refresh</i>\r\n      </button>\r\n      <div class=\"pagination\" *ngIf=\"popList.length > 0\">\r\n        <div class=\"pagination-content\">\r\n          Pages\r\n          <span>{{pagenumber}}</span>\r\n          of\r\n          <span>{{total_page}}</span>\r\n        </div>\r\n        <div class=\"page-nav\">\r\n          <button mat-icon-button matTooltip=\"Older\" (click)=\"pervious()\" [disabled]=\"start == 0\">\r\n            <i class=\"material-icons\">navigate_before</i>\r\n          </button>\r\n          <button mat-icon-button matTooltip=\"Newer\" (click)=\"nextPage()\" [disabled]=\"pagenumber == total_page\">\r\n            <i class=\"material-icons\">navigate_next</i>\r\n          </button>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"mat-tabbar\">\r\n        <button mat-button [ngClass]=\"active_tab == 'Pending' ? 'active' : ''\"\r\n          (click)=\"active_tab = 'Pending';transactionData();\"><i class=\"material-icons\">pending_actions</i>Pending\r\n          ({{tabCount.pending ? tabCount.pending : '0'}})</button>\r\n        <button mat-button [ngClass]=\"active_tab == 'Approved' ? 'active' : ''\"\r\n          (click)=\"active_tab = 'Approved'; transactionData();\"><i class=\"material-icons\">task_alt</i>Approved\r\n          ({{tabCount.approved ? tabCount.approved : '0'}})</button>\r\n        <button mat-button [ngClass]=\"active_tab == 'Reject' ? 'active' : ''\"\r\n          (click)=\"active_tab = 'Reject'; transactionData();\"><i class=\"material-icons\">unpublished</i>Reject\r\n          ({{tabCount.reject ? tabCount.reject : '0'}})</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n\r\n\r\n\r\n  <div class=\"container pb100\">\r\n    <div class=\"cs-table\">\r\n      <div class=\"sticky-head\">\r\n        <div class=\"table-head\">\r\n          <table class=\"sno-border\">\r\n            <tr>\r\n              <th class=\"w55\">Sr No.</th>\r\n              <th class=\"w120\">Date Created</th>\r\n              <th class=\"w200\">Created By</th>\r\n              <th class=\"w120\">Gift Type</th>\r\n              <th class=\"w120\">Gift Item</th>\r\n              <th class=\"w120 text-center\">QTY.</th>\r\n              <th class=\"w120 text-center\" *ngIf=\"active_tab == 'Approved'\">Approved QTY</th>\r\n              <th>Remark</th>\r\n              <th *ngIf=\"active_tab == 'Reject'\">Reason</th>\r\n\r\n              <th class=\"w100 text-center\" *ngIf=\"active_tab == 'Pending'\">\r\n                Action\r\n              </th>\r\n            </tr>\r\n          </table>\r\n        </div>\r\n        <div class=\"table-head  border-top\">\r\n          <table class=\"sno-border\">\r\n            <tr>\r\n              <th class=\"w55\">&nbsp;</th>\r\n              <th class=\"w120\">\r\n                <div class=\"th-search-acmt\">\r\n                  <mat-form-field class=\"cs-input date-column infix-bodr\">\r\n                    <input matInput [matDatepicker]=\"picker\" placeholder=\"Date\" name=\"date_created\"\r\n                      #date_created=\"ngModel\" [(ngModel)]=\"filter.date_created\" (ngModelChange)=\"date_format()\"\r\n                      [max]=\"today\" readonly>\r\n                    <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\r\n                    <mat-datepicker #picker></mat-datepicker>\r\n                  </mat-form-field>\r\n                </div>\r\n              </th>\r\n              <th class=\"w200\">\r\n                <div class=\"th-search-acmt\">\r\n                  <mat-form-field class=\"example-full-width cs-input select-input\">\r\n                    <input matInput placeholder=\"Search...\" (keyup.enter)=\"transactionData()\" #created_by_name=\"ngModel\"\r\n                      [(ngModel)]=\"filter.created_by_name\">\r\n                  </mat-form-field>\r\n                </div>\r\n              </th>\r\n              <th class=\"w120\">\r\n                <div class=\"th-search-acmt\">\r\n                  <mat-form-field class=\"cs-input select-input\">\r\n                      <mat-select (selectionChange)=\"transactionData()\" name=\"gift_type\"\r\n                          #gift_type=\"ngModel\" [(ngModel)]=\"filter.gift_type\">\r\n                          <mat-option value=\"\">All</mat-option>\r\n                          <mat-option value=\"POP Material\" color=\"accent\">POP\r\n                              Material</mat-option>\r\n                          <mat-option value=\"BTL\" color=\"accent\">BTL</mat-option>\r\n                      </mat-select>\r\n                  </mat-form-field>\r\n              </div>\r\n              </th>\r\n              <th class=\"w120 text-center\">&nbsp;</th>\r\n              <th class=\"w120 text-center\">&nbsp;</th>\r\n              <th class=\"w120 text-center\" *ngIf=\"active_tab == 'Approved'\">&nbsp;</th>\r\n              <th>&nbsp;</th>\r\n              <th *ngIf=\"active_tab == 'Reject'\">&nbsp;</th>\r\n\r\n              <th class=\"w100 text-center\" *ngIf=\"active_tab == 'Pending'\">\r\n                &nbsp;\r\n              </th>\r\n            </tr>\r\n          </table>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"table-container\">\r\n        <div class=\"table-content\" *ngIf=\"popList.length > 0\">\r\n          <table class=\"sno-border\">\r\n            <ng-container *ngIf=\"!loader\">\r\n              <tr *ngFor=\" let row of popList, let i = index;\" [ngClass]=\"{'Current': serve.currentUserID == row.id}\">\r\n                <td class=\"w55\">{{i + 1 + sr_no}}</td>\r\n                <td class=\"w120\">{{row.date_created ? (row.date_created | date : 'dd MMM yyy') : '---'}}</td>\r\n                <td class=\"w200\">{{row.created_by_name ? (row.created_by_name | titlecase) : '---'}}</td>\r\n                <td class=\"w120\">{{row.gift_type}}</td>\r\n                <td class=\"w120\">{{row.item_name}}</td>\r\n                <td class=\"w120 text-center\">{{row.qty ? row.qty : '0'}}</td>\r\n                <td class=\"w120 text-center\" *ngIf=\"active_tab == 'Approved'\">{{row.approved_qty ? row.approved_qty :\r\n                  '0'}}</td>\r\n                <td>{{row.remark ? row.remark : '---'}}</td>\r\n                <td *ngIf=\"active_tab == 'Reject'\">{{row.remark ? row.remark : '---'}}</td>\r\n                <td class=\"w100 text-center\" *ngIf=\"active_tab == 'Pending'\">\r\n                  <div class=\"action-button\">\r\n                    <button mat-icon-button matTooltip=\"Update\" (click)=\"openModal(row.id, row.qty, row.status)\">\r\n                      <i class=\"material-icons edit\">update</i>\r\n                    </button>\r\n                  </div>\r\n                </td>\r\n              </tr>\r\n            </ng-container>\r\n\r\n            <ng-container *ngIf=\"loader\">\r\n              <tr class=\"sk-loading\" *ngFor=\"let row of [].constructor(10)\">\r\n                <td class=\"w55\">\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n                <td class=\"w120\">\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n                <td class=\"w200\">\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n                <td class=\"w120\">\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n                <td class=\"w120 text-center\">\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n                <td class=\"w120 text-center\" *ngIf=\"active_tab == 'Approved'\">\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n                <td>\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n                <td *ngIf=\"active_tab == 'Reject'\">\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n                <td class=\"w100 text-center\" *ngIf=\"active_tab == 'Pending'\">\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n              </tr>\r\n            </ng-container>\r\n          </table>\r\n        </div>\r\n      </div>\r\n\r\n\r\n      <ng-container *ngIf=\"popList.length == 0\">\r\n        <app-not-result-found></app-not-result-found>\r\n      </ng-container>\r\n    </div>\r\n    <div class=\"fab-btns\">\r\n\r\n      <button mat-fab class=\"excel pulse\" (click)=\"exportAsXLSX();\"> \r\n          <img src=\"assets/img/excel.svg\">\r\n          Download Excel\r\n      </button>\r\n  </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/pop-requisition/pop-requisition/pop-requisition/pop-requisition.component.ts":
/*!**********************************************************************************************!*\
  !*** ./src/app/pop-requisition/pop-requisition/pop-requisition/pop-requisition.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: PopRequisitionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopRequisitionComponent", function() { return PopRequisitionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_dialog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/dialog.component */ "./src/app/dialog.component.ts");
/* harmony import */ var src_app_localstorage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/localstorage.service */ "./src/app/localstorage.service.ts");
/* harmony import */ var src_services_DatabaseService__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/_services/DatabaseService */ "./src/_services/DatabaseService.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! moment */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng6-toastr-notifications */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/ng6-toastr-notifications/fesm5/ng6-toastr-notifications.js");
/* harmony import */ var src_app_order_status_modal_status_modal_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/order/status-modal/status-modal.component */ "./src/app/order/status-modal/status-modal.component.ts");










var PopRequisitionComponent = /** @class */ (function () {
    function PopRequisitionComponent(toast, serve, dialog, dialog1, route, session) {
        this.toast = toast;
        this.serve = serve;
        this.dialog = dialog;
        this.dialog1 = dialog1;
        this.route = route;
        this.session = session;
        this.active_tab = 'Pending';
        this.data = {};
        this.PopData = [];
        this.result = [];
        this.datanotfound = false;
        this.loader = true;
        this.filter = {};
        this.assign_login_data = [];
        this.assign_login_data2 = [];
        this.excel_data = [];
        this.exp_data = [];
        this.pagenumber = 1;
        this.start = 0;
        this.popList = [];
        this.page_limit = this.serve.pageLimit;
        this.downurl = serve.downloadUrl;
        this.assign_login_data = this.session.getSession();
        this.assign_login_data = this.assign_login_data.value;
        this.assign_login_data2 = this.assign_login_data.data;
        this.today = new Date();
    }
    PopRequisitionComponent.prototype.ngOnInit = function () {
        this.filter = this.serve.getData();
        this.transactionData();
    };
    PopRequisitionComponent.prototype.refresh = function () {
        this.filter = {};
        if (this.start < 0) {
            this.start = 0;
        }
        this.serve.setData(this.filter);
        this.serve.currentUserID = '';
        this.transactionData();
    };
    PopRequisitionComponent.prototype.date_format = function () {
        this.filter.date_created = moment__WEBPACK_IMPORTED_MODULE_7__(this.filter.date_created).format('YYYY-MM-DD');
        this.transactionData();
    };
    PopRequisitionComponent.prototype.pervious = function () {
        this.start = this.start - this.page_limit;
        this.transactionData();
    };
    PopRequisitionComponent.prototype.nextPage = function () {
        this.start = this.start + this.page_limit;
        this.transactionData();
    };
    PopRequisitionComponent.prototype.transactionData = function () {
        var _this = this;
        this.loader = true;
        var count;
        if (this.pagenumber > this.total_page) {
            this.pagenumber = this.total_page;
            this.start = this.pageCount - this.page_limit;
        }
        if (this.start < 0) {
            this.start = 0;
        }
        this.serve.post_rqst({ 'filter': this.filter, 'status': this.active_tab }, "PopGift/popRequestList").subscribe(function (result) {
            if (result['statusCode'] == 200) {
                _this.popList = result['data'];
                setTimeout(function () {
                    _this.loader = false;
                }, 500);
                if (_this.popList.length == 0) {
                    _this.datanotfound = true;
                }
                else {
                    _this.datanotfound = false;
                    _this.loader = false;
                }
                _this.loader = false;
                _this.tabCount = result['count'];
                if (_this.active_tab == 'Pending') {
                    _this.pageCount = result['count']['pending'];
                }
                if (_this.active_tab == 'Approved') {
                    _this.pageCount = result['count']['approved'];
                }
                if (_this.active_tab == 'Reject') {
                    _this.pageCount = result['count']['reject'];
                }
                if (_this.pagenumber > _this.total_page) {
                    _this.pagenumber = _this.total_page;
                    _this.start = count - _this.page_limit;
                }
                else {
                    _this.pagenumber = Math.ceil(_this.start / _this.page_limit) + 1;
                }
                _this.total_page = Math.ceil(_this.pageCount / _this.page_limit);
                _this.sr_no = _this.pagenumber - 1;
                _this.sr_no = _this.sr_no * _this.page_limit;
            }
            else {
                _this.toast.errorToastr(result['statusMsg']);
            }
        }, function (err) {
            _this.loader = false;
            _this.toast.errorToastr('Something went wrong');
        });
    };
    PopRequisitionComponent.prototype.exportAsXLSX = function () {
        var _this = this;
        this.loader = true;
        this.serve.post_rqst({ 'filter': this.filter, 'status': this.active_tab }, 'Excel/popRequisitionExcel').subscribe(function (result) {
            if (result['msg'] == true) {
                _this.loader = false;
                window.open(_this.downurl + result['filename']);
                _this.transactionData();
            }
            else {
                _this.loader = false;
            }
        });
    };
    PopRequisitionComponent.prototype.openModal = function (id, qty, status) {
        var _this = this;
        var dialogRef = this.dialog.open(src_app_order_status_modal_status_modal_component__WEBPACK_IMPORTED_MODULE_9__["StatusModalComponent"], {
            width: '500px',
            panelClass: 'cs-modal',
            disableClose: true,
            data: {
                'delivery_from': 'pop-req',
                'id': id,
                'qty': qty,
                'status': status,
            }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result == true) {
                _this.transactionData();
            }
        });
    };
    PopRequisitionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-pop-requisition',
            template: __webpack_require__(/*! ./pop-requisition.component.html */ "./src/app/pop-requisition/pop-requisition/pop-requisition/pop-requisition.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_8__["ToastrManager"], src_services_DatabaseService__WEBPACK_IMPORTED_MODULE_6__["DatabaseService"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"], src_app_dialog_component__WEBPACK_IMPORTED_MODULE_4__["DialogComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], src_app_localstorage_service__WEBPACK_IMPORTED_MODULE_5__["sessionStorage"]])
    ], PopRequisitionComponent);
    return PopRequisitionComponent;
}());



/***/ })

}]);