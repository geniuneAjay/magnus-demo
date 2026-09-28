(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["complaint-visit-complanit-visit-module-complanit-visit-module-module"],{

/***/ "./src/app/complaint-visit/complaint-visit-list/complaint-visit-list.component.html":
/*!******************************************************************************************!*\
  !*** ./src/app/complaint-visit/complaint-visit-list/complaint-visit-list.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-container\">\r\n  <app-loader *ngIf=\"excelLoader\"></app-loader>\r\n  <div class=\"tools-container\">\r\n    <h2>Complaint Visits </h2>\r\n\r\n\r\n    <div class=\"left-auto df ac flex-gap-10\">\r\n      <a mat-icon-button matTooltip=\"Refresh\" (click)=\"refresh()\">\r\n        <i class=\"material-icons\">refresh</i>\r\n      </a>\r\n\r\n      <div class=\"pagination\" *ngIf=\"complaintVisitList.length > 0\">\r\n        <div class=\"pagination-content\">\r\n          Pages\r\n          <span>{{pagenumber}}</span>\r\n          of\r\n          <span>{{total_page}}</span>\r\n        </div>\r\n        <div class=\"page-nav\">\r\n          <button mat-icon-button matTooltip=\"Older\" (click)=\"pervious()\" [disabled]=\"start == 0\">\r\n            <i class=\"material-icons\">navigate_before</i>\r\n          </button>\r\n          <button mat-icon-button matTooltip=\"Newer\" (click)=\"nextPage()\" [disabled]=\"pagenumber == total_page \">\r\n            <i class=\"material-icons\">navigate_next</i>\r\n          </button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n\r\n  <div class=\"container container-scroll\">\r\n    <div class=\"cs-table horizontal-scroll\">\r\n      <div class=\"sticky-head\">\r\n        <div class=\"table-head\">\r\n          <table>\r\n            <tr>\r\n              <th class=\"w50\">Sr.No</th>\r\n              <th class=\"w150\">Date Created</th>\r\n              <th class=\"w180\">Visitor Details</th>\r\n              <th class=\"w100\">Compliant No.</th>\r\n              <th class=\"w80\">Start Time</th>\r\n              <th class=\"w180\">Start Adddress</th>\r\n              <th class=\"w100\">Start latitude </th>\r\n              <th class=\"w110\">Start longitude</th>\r\n              <th class=\"w80\">Stop Time</th>\r\n              <th class=\"w180\">Stop Adddress</th>\r\n              <th class=\"w100\">Stop latitude </th>\r\n              <th class=\"w100\">Stop longitude</th>\r\n              <th class=\"w100\">Stop By</th>\r\n              <th class=\"w100 text-center\">Total Time</th>\r\n            </tr>\r\n          </table>\r\n        </div>\r\n\r\n        <div class=\"table-head bdrt\">\r\n          <table>\r\n            <tr>\r\n              <th class=\"w50\"></th>\r\n              <th class=\"w150\">\r\n                <div class=\"th-search-acmt\">\r\n                  <mat-form-field class=\"cs-input date-column infix-bodr\">\r\n                    <input matInput [matDatepicker]=\"picker\" placeholder=\"Date\" name=\"date_created\"\r\n                      #date_created=\"ngModel\" [(ngModel)]=\"filter_data.date_created\" (ngModelChange)=\"date_format()\"\r\n                      [max]=\"today_date\" readonly>\r\n                    <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\r\n                    <mat-datepicker #picker></mat-datepicker>\r\n                  </mat-form-field>\r\n                </div>\r\n              </th>\r\n              <th class=\"w180\">\r\n                <div class=\"th-search-acmt\">\r\n                  <mat-form-field>\r\n                    <input type=\"text\" matInput placeholder=\"Search ...\" name=\"visitor_detail\"\r\n                      (keyup.enter)=\"getComplaintVisitList('')\" #visitor_detail=\"ngModel\"\r\n                      [(ngModel)]=\"filter_data.visitor_detail\">\r\n                  </mat-form-field>\r\n                </div>\r\n              </th>\r\n              <th class=\"w100\">\r\n                <div class=\"th-search-acmt\">\r\n                  <mat-form-field>\r\n                    <input type=\"text\" matInput placeholder=\"Search ...\" name=\"complaint_no\"\r\n                      (keyup.enter)=\"getComplaintVisitList('')\" #complaint_no=\"ngModel\"\r\n                      [(ngModel)]=\"filter_data.complaint_no\">\r\n                  </mat-form-field>\r\n                </div>\r\n              </th>\r\n              <th class=\"w80\"></th>\r\n              <th class=\"w180\">\r\n                <div class=\"th-search-acmt\">\r\n                  <mat-form-field>\r\n                    <input type=\"text\" matInput placeholder=\"Search ...\" name=\"visit_start_address\"\r\n                      (keyup.enter)=\"getComplaintVisitList('')\" #visit_start_address=\"ngModel\"\r\n                      [(ngModel)]=\"filter_data.visit_start_address\" />\r\n                  </mat-form-field>\r\n                </div>\r\n              </th>\r\n              <th class=\"w100\"></th>\r\n              <th class=\"w110\"></th>\r\n              <th class=\"w80\"></th>\r\n              <th class=\"w180\">\r\n                <div class=\"th-search-acmt\">\r\n                  <mat-form-field>\r\n                    <input type=\"text\" matInput placeholder=\"Search ...\" name=\"visit_stop_address\"\r\n                      (keyup.enter)=\"getComplaintVisitList('')\" #visit_stop_address=\"ngModel\"\r\n                      [(ngModel)]=\"filter_data.visit_stop_address\" />\r\n                  </mat-form-field>\r\n                </div>\r\n              </th>\r\n              <th class=\"w100\"></th>\r\n              <th class=\"w100\"></th>\r\n              <th class=\"w100\">\r\n                <div class=\"th-search-acmt\">\r\n                  <mat-form-field>\r\n                    <input type=\"text\" matInput placeholder=\"Search ...\" name=\"visit_stop_by_name\"\r\n                      (keyup.enter)=\"getComplaintVisitList('')\" #visit_stop_by_name=\"ngModel\"\r\n                      [(ngModel)]=\"filter_data.visit_stop_by_name\">\r\n                  </mat-form-field>\r\n                </div>\r\n              </th>\r\n              <th class=\"w100 text-center\"></th>\r\n            </tr>\r\n          </table>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"table-container\">\r\n        <div class=\"table-content\">\r\n          <table>\r\n            <ng-container *ngIf=\"!loader\">\r\n              <tr *ngFor=\"let row of complaintVisitList; let i = index \"\r\n                [ngClass]=\"{'Current': service.currentUserID == row.id}\">\r\n                <td class=\"w50\">{{i + 1 + sr_no}}</td>\r\n                <td class=\"w150\">{{row.date_created ? (row.date_created | date : 'dd MMM yyy ,h:mm a') : '--'}}</td>\r\n                <td class=\"w180\">{{row.created_by_name? (row.created_by_name |\r\n                  titlecase):'--'}}-{{row.created_by_mobile}}</td>\r\n                <td class=\"w100\">{{row.complaint_no}}</td>\r\n                <td class=\"w80\">{{row.visit_start_time ? (row.visit_start_time | date : 'shortTime') : '--'}}</td>\r\n                <td class=\"w180\">{{row.visit_start_address? (row.visit_start_address | titlecase):'--'}}</td>\r\n                <td class=\"w100\">{{row.visit_start_lat? (row.visit_start_lat):'--'}}</td>\r\n                <td class=\"w110\">{{row.visit_start_lng? (row.visit_start_lng):'--'}}</td>\r\n                <td class=\"w80\">{{row.visit_stop_time ? (row.visit_stop_time | date : 'shortTime') : '--'}}</td>\r\n                <td class=\"w180\">{{row.visit_stop_address? (row.visit_stop_address | titlecase):'--'}}</td>\r\n                <td class=\"w100\">{{row.visit_stop_lat? (row.visit_stop_lat):'--'}}</td>\r\n                <td class=\"w100\">{{row.visit_stop_lng? (row.visit_stop_lng):'--'}}</td>\r\n                <td class=\"w100\">{{row.visit_stop_by_name? (row.visit_stop_by_name):'--'}}</td>\r\n                <td class=\"w100 text-center\" *ngIf=\"row.visit_stop_time=='0000-00-00 00:00:00'\">\r\n                  <button mat-raised-button color=\"accent\" (click)=\"endVisit(row.id)\"\r\n                    [ngClass]=\"{'pulse': fabBtnValue=='activity'}\">End Visit</button>\r\n                </td>\r\n                <td class=\"w100 text-center\" *ngIf=\"row.visit_stop_time!='0000-00-00 00:00:00'\">{{row.total_time ?\r\n                  row.total_time : '--'}}</td>\r\n              </tr>\r\n            </ng-container>\r\n            <ng-container *ngIf=\"loader\">\r\n              <tr class=\"sk-loading\" *ngFor=\"let row of [].constructor(10)\">\r\n                <td class=\"w50\">\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n                <td class=\"w150\">\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n                <td class=\"w180\">\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n                <td class=\"w100\">\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n                <td class=\"w80\">\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n                <td class=\"w180\">\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n                <td class=\"w100\">\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n                <td class=\"w110\">\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n                <td class=\"w80\">\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n                <td class=\"w180\">\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n                <td class=\"w100\">\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n                <td class=\"w100\">\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n                <td class=\"w100\">\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n                <td class=\"w100\">\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n              </tr>\r\n            </ng-container>\r\n          </table>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <ng-container *ngIf=\"datanotofound==true && complaintVisitList.length == 0;\">\r\n      <app-not-result-found></app-not-result-found>\r\n    </ng-container>\r\n  </div>\r\n  <div>\r\n  </div>\r\n\r\n  <div class=\"fab-btns\">\r\n    <button mat-fab class=\"excel pulse\" (click)=\"downloadExcel()\" *ngIf=\"complaintVisitList.length > 0\">\r\n      <img src=\"assets/img/excel.svg\">\r\n      Download Excel\r\n    </button>\r\n  </div>\r\n\r\n\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/complaint-visit/complaint-visit-list/complaint-visit-list.component.scss":
/*!******************************************************************************************!*\
  !*** ./src/app/complaint-visit/complaint-visit-list/complaint-visit-list.component.scss ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/complaint-visit/complaint-visit-list/complaint-visit-list.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/complaint-visit/complaint-visit-list/complaint-visit-list.component.ts ***!
  \****************************************************************************************/
/*! exports provided: ComplaintVisitListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComplaintVisitListComponent", function() { return ComplaintVisitListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! moment */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng6-toastr-notifications */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/ng6-toastr-notifications/fesm5/ng6-toastr-notifications.js");
/* harmony import */ var src_services_DatabaseService__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/_services/DatabaseService */ "./src/_services/DatabaseService.ts");
/* harmony import */ var src_app_dialog_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/dialog.component */ "./src/app/dialog.component.ts");
/* harmony import */ var src_app_dialog_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/dialog.service */ "./src/app/dialog.service.ts");
/* harmony import */ var src_app_localstorage_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/localstorage.service */ "./src/app/localstorage.service.ts");
/* harmony import */ var src_app_service_exportexcel_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/service/exportexcel.service */ "./src/app/service/exportexcel.service.ts");











var ComplaintVisitListComponent = /** @class */ (function () {
    function ComplaintVisitListComponent(session, router, alert, service, editdialog, dialog, route, toast, excelservice, dialog1) {
        this.session = session;
        this.router = router;
        this.alert = alert;
        this.service = service;
        this.editdialog = editdialog;
        this.dialog = dialog;
        this.route = route;
        this.toast = toast;
        this.excelservice = excelservice;
        this.dialog1 = dialog1;
        this.fabBtnValue = 'add';
        this.complaintVisitList = [];
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
        this.url = this.service.uploadUrl + 'service_task/';
        this.downurl = service.downloadUrl;
        this.page_limit = service.pageLimit;
    }
    ComplaintVisitListComponent.prototype.ngOnInit = function () {
        this.filter_data = this.service.getData();
        this.getComplaintVisitList('');
    };
    ComplaintVisitListComponent.prototype.pervious = function () {
        this.start = this.start - this.page_limit;
        this.getComplaintVisitList('');
    };
    ComplaintVisitListComponent.prototype.nextPage = function () {
        this.start = this.start + this.page_limit;
        this.getComplaintVisitList('');
    };
    ComplaintVisitListComponent.prototype.refresh = function () {
        this.start = 0;
        this.filter_data = {};
        this.getComplaintVisitList('');
    };
    ComplaintVisitListComponent.prototype.clear = function () {
        this.refresh();
    };
    ComplaintVisitListComponent.prototype.goToDetailHandler = function (id) {
        window.open("/customer-detail/" + id);
    };
    ComplaintVisitListComponent.prototype.date_format = function () {
        this.filter_data.date_created = moment__WEBPACK_IMPORTED_MODULE_4__(this.filter_data.date_created).format('YYYY-MM-DD');
        this.getComplaintVisitList('');
    };
    ComplaintVisitListComponent.prototype.lastBtnValue = function (value) {
        this.fabBtnValue = value;
    };
    ComplaintVisitListComponent.prototype.getComplaintVisitList = function (data) {
        var _this = this;
        if (this.pagenumber > this.total_page) {
            this.pagenumber = this.total_page;
            this.start = this.pageCount - this.page_limit;
        }
        if (this.start < 0) {
            this.start = 0;
        }
        var header = this.service.post_rqst({ 'filter': this.filter_data, 'start': this.start, 'pagelimit': this.page_limit }, "ServiceTask/complaintVisitList");
        this.loader = true;
        header.subscribe(function (result) {
            if (result['statusCode'] == 200) {
                _this.complaintVisitList = result['result'];
                _this.pageCount = result['count'];
                _this.scheme_active_count = result['scheme_active_count'];
                _this.loader = false;
                if (_this.complaintVisitList.length == 0) {
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
                for (var i = 0; i < _this.complaintVisitList.length; i++) {
                    if (_this.complaintVisitList[i].status == '1') {
                        _this.complaintVisitList[i].newStatus = true;
                    }
                    else if (_this.complaintVisitList[i].status == '0') {
                        _this.complaintVisitList[i].newStatus = false;
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
    ComplaintVisitListComponent.prototype.endVisit = function (id) {
        var _this = this;
        this.dialog1.visit('visit!').then(function (result) {
            if (result) {
                _this.service.post_rqst({ 'visit_id': id }, "ServiceTask/stopComplaintVisit").subscribe(function (result) {
                    if (result['statusCode'] == 200) {
                        _this.toast.successToastr(result['statusMsg']);
                        _this.getComplaintVisitList('');
                    }
                    else {
                        _this.toast.errorToastr(result['statusMsg']);
                    }
                });
            }
        });
    };
    ComplaintVisitListComponent.prototype.downloadExcel = function () {
        var _this = this;
        this.excelLoader = true;
        this.service.post_rqst({ 'filter': this.filter_data }, "Excel/complaint_visit_list").subscribe((function (result) {
            if (result['msg'] == true) {
                window.open(_this.downurl + result['filename']);
                _this.getComplaintVisitList('');
                _this.excelLoader = false;
            }
            else {
            }
        }));
    };
    ComplaintVisitListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-complaint-visit-list',
            template: __webpack_require__(/*! ./complaint-visit-list.component.html */ "./src/app/complaint-visit/complaint-visit-list/complaint-visit-list.component.html"),
            styles: [__webpack_require__(/*! ./complaint-visit-list.component.scss */ "./src/app/complaint-visit/complaint-visit-list/complaint-visit-list.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_localstorage_service__WEBPACK_IMPORTED_MODULE_9__["sessionStorage"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], src_app_dialog_component__WEBPACK_IMPORTED_MODULE_7__["DialogComponent"], src_services_DatabaseService__WEBPACK_IMPORTED_MODULE_6__["DatabaseService"], src_app_dialog_service__WEBPACK_IMPORTED_MODULE_8__["DialogService"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_5__["ToastrManager"], src_app_service_exportexcel_service__WEBPACK_IMPORTED_MODULE_10__["ExportexcelService"], src_app_dialog_component__WEBPACK_IMPORTED_MODULE_7__["DialogComponent"]])
    ], ComplaintVisitListComponent);
    return ComplaintVisitListComponent;
}());



/***/ }),

/***/ "./src/app/complaint-visit/complanit-visit-module/complanit-visit-module.module.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/complaint-visit/complanit-visit-module/complanit-visit-module.module.ts ***!
  \*****************************************************************************************/
/*! exports provided: ComplanitVisitModuleModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComplanitVisitModuleModule", function() { return ComplanitVisitModuleModule; });
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
/* harmony import */ var _complaint_visit_list_complaint_visit_list_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../complaint-visit-list/complaint-visit-list.component */ "./src/app/complaint-visit/complaint-visit-list/complaint-visit-list.component.ts");













var complaintVisitRoutes = [
    { path: "", children: [
            { path: "", component: _complaint_visit_list_complaint_visit_list_component__WEBPACK_IMPORTED_MODULE_12__["ComplaintVisitListComponent"], canActivate: [src_app_auth_component_guard__WEBPACK_IMPORTED_MODULE_3__["AuthComponentGuard"]], data: { expectedRole: ['1'] } },
        ] },
];
var ComplanitVisitModuleModule = /** @class */ (function () {
    function ComplanitVisitModuleModule() {
    }
    ComplanitVisitModuleModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_complaint_visit_list_complaint_visit_list_component__WEBPACK_IMPORTED_MODULE_12__["ComplaintVisitListComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(complaintVisitRoutes),
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
    ], ComplanitVisitModuleModule);
    return ComplanitVisitModuleModule;
}());



/***/ })

}]);