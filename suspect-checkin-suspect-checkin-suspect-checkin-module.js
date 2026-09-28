(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["suspect-checkin-suspect-checkin-suspect-checkin-module"],{

/***/ "./src/app/suspect-checkin/suspect-checkin/suspect-checkin.component.html":
/*!********************************************************************************!*\
  !*** ./src/app/suspect-checkin/suspect-checkin/suspect-checkin.component.html ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-container\">\r\n  <app-loader *ngIf=\"excelLoader\"></app-loader>\r\n  <div class=\"tools-container\">\r\n    <h2>Suspect Checkin</h2>\r\n    <div class=\"left-auto df ac flex-gap-10\">\r\n      <button mat-icon-button matTooltip=\"Refresh\" (click)=\"refresh()\">\r\n        <i class=\"material-icons\">refresh</i>\r\n      </button>\r\n      <!-- <div class=\"pagination\" *ngIf=\"suspectCheckin.length > 0\">\r\n        <div class=\"pagination-content\">\r\n          Pages\r\n          <span>{{pagenumber}}</span>\r\n          of\r\n          <span>{{total_page}}</span>\r\n        </div>\r\n        <div class=\"page-nav\">\r\n          <button mat-icon-button matTooltip=\"Older\" (click)=\"previousPage()\" [disabled]=\"start == 0\">\r\n            <i class=\"material-icons\">navigate_before</i>\r\n          </button>\r\n          <button mat-icon-button matTooltip=\"Newer\" (click)=\"nextPage()\" [disabled]=\"pagenumber == total_page \">\r\n            <i class=\"material-icons\">navigate_next</i>\r\n          </button>\r\n        </div>\r\n      </div> -->\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"container table-container\">\r\n    <div class=\"cs-table horizontal-scroll\">\r\n      <div class=\"sticky-head\">\r\n        <div class=\"table-head\">\r\n          <table>\r\n            <tr>\r\n              <th class=\"w50\">S.No</th>\r\n\r\n              <th class=\"w150\">Remainder Type</th>\r\n              <th class=\"w150\">Created By</th>\r\n              <th class=\"w150\">Designation</th>\r\n              <th class=\"w150\">Mobile</th>\r\n\r\n              <th class=\"w150\">State</th>\r\n\r\n              <th class=\"w250\">Party Name</th>\r\n              <th class=\"w150\">Type</th>\r\n              <th class=\"w150\">Visit Start</th>\r\n              <th class=\"w150\">Visit End</th>\r\n              <th class=\"w150\">Lunch Start</th>\r\n              <th class=\"w150\">Lunch End</th> \r\n\r\n            </tr>\r\n          </table>\r\n        </div>\r\n        <div class=\"table-head bdrt\">\r\n          <table>\r\n            <tr>\r\n              <th class=\"w50\"></th>\r\n\r\n              <th class=\"w150\"></th>\r\n              <th class=\"w150\"></th>\r\n              <th class=\"w150\"></th>\r\n              <th class=\"w150\">\r\n\r\n\r\n\r\n              </th>\r\n              <th class=\"w150\">\r\n <div class=\"th-search-acmt\">\r\n                  <mat-form-field class=\"example-full-width cs-input select-input\">\r\n                    <input matInput placeholder=\"Search...\" (keyup.enter)=\"getSuspectCheckin('')\" #segment=\"ngModel\"\r\n                      [(ngModel)]=\"value.working_state\">\r\n                  </mat-form-field>\r\n                </div>\r\n               \r\n              </th>\r\n\r\n\r\n              <th class=\"w250\">\r\n\r\n                <div class=\"th-search-acmt\">\r\n                  <mat-form-field class=\"example-full-width cs-input select-input\">\r\n                    <input matInput placeholder=\"Search...\" (keyup.enter)=\"getSuspectCheckin('')\" #segment=\"ngModel\"\r\n                      [(ngModel)]=\"value.segment\">\r\n                  </mat-form-field>\r\n                </div>\r\n              </th>\r\n           \r\n\r\n              <th class=\"w150\"></th>\r\n              <th class=\"w150\"></th>\r\n              <th class=\"w150\"></th>\r\n              <th class=\"w150\"></th>\r\n              <th class=\"w150\"></th>\r\n\r\n\r\n            </tr>\r\n          </table>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"table-container\">\r\n        <div class=\"table-content\">\r\n          <table>\r\n            <ng-container *ngIf=\"!loader\">\r\n              <tr *ngFor=\"let dist of suspectCheckin; let i = index;\">\r\n                <td class=\"w50\">{{i + 1 + sr_no}}</td>\r\n\r\n                <td class=\"w150\" style=\"color:red\" >{{dist.reminderType}}</td>\r\n             \r\n                <td class=\"w150\">\r\n                     <a class=\"link-btn\" [routerLink]=\"[ 'tracker/']\"\r\n                                                [queryParams]=\"{'user_id':(dist.created_by ? dist.created_by : dist.created_by), 'start_date': dist.visit_start | date:'yyyy-MM-dd'}\">\r\n                                                {{dist.created_by_name | titlecase}}\r\n                                            </a>\r\n                </td>\r\n                <td class=\"w150\">{{dist.designation_name && dist.designation_name != '' ? dist.designation_name : '--'}}</td>\r\n                 <td class=\"w150\">{{dist.contact_01 && dist.contact_01 != '' ? dist.contact_01 : '--'}}\r\n                </td>\r\n\r\n                  <td class=\"w150 one-line\" matTooltip=\"{{dist.working_state}}\">{{dist.working_state && dist.working_state != '' ? dist.working_state : '--'}}\r\n                </td>\r\n\r\n                <td class=\"w250\">{{dist.dr_name}}</td>\r\n                <td class=\"w150\">{{dist.dr_type_name}}</td>\r\n                <td class=\"w150\">{{dist.visit_start != '0000-00-00 00:00:00' ? (dist.visit_start | date: 'h:mm a') : '--'}}</td>\r\n                <td class=\"w150\"> {{dist.visit_end != '0000-00-00 00:00:00' ? (dist.visit_end | date: 'h:mm a') : '--'}}</td>\r\n                <td class=\"w150\">{{dist.lunch_start && dist.lunch_start != '0000-00-00 00:00:00' ? (dist.lunch_start | date: 'h:mm a') : '--'}}</td>\r\n                <td class=\"w150\">{{dist.lunch_stop && dist.lunch_stop != '0000-00-00 00:00:00' ? (dist.lunch_stop | date: 'h:mm a') : '--'}}</td>\r\n\r\n              </tr>\r\n            </ng-container>\r\n\r\n            <ng-container *ngIf=\"loader\">\r\n              <tr class=\"sk-loading\" *ngFor=\"let row of [].constructor(10);\">\r\n                <td class=\"w50\">\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n                <td class=\"w100\">\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n                <td class=\"w100\">\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n                <td>\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n               \r\n                <td class=\"w140 text-right\">\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n                <td class=\"w100 text-center\" *ngIf=\"logined_user_data.edit_category_master=='1'\">\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n                <td class=\"w60 text-center\" *ngIf=\"logined_user_data.edit_category_master=='1'\">\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n              </tr>\r\n            </ng-container>\r\n          </table>\r\n        </div>\r\n      </div>\r\n\r\n      <ng-container *ngIf=\"suspectCheckin.length == 0 &&  datanotfound == true;\">\r\n        <app-not-result-found></app-not-result-found>\r\n      </ng-container>\r\n\r\n    </div>\r\n\r\n  </div>\r\n\r\n<div class=\"fab-btns\" >\r\n    <button mat-fab class=\"excel pulse\" (click)=\"downloadExcelSuspectCheckin()\">\r\n      <img src=\"assets/img/excel.svg\">\r\n      Download Excel\r\n    </button>\r\n  </div>\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/suspect-checkin/suspect-checkin/suspect-checkin.component.scss":
/*!********************************************************************************!*\
  !*** ./src/app/suspect-checkin/suspect-checkin/suspect-checkin.component.scss ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/suspect-checkin/suspect-checkin/suspect-checkin.component.ts":
/*!******************************************************************************!*\
  !*** ./src/app/suspect-checkin/suspect-checkin/suspect-checkin.component.ts ***!
  \******************************************************************************/
/*! exports provided: SuspectCheckinComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SuspectCheckinComponent", function() { return SuspectCheckinComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! file-saver */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/file-saver/dist/FileSaver.min.js");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_services_DatabaseService__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/_services/DatabaseService */ "./src/_services/DatabaseService.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var src_app_dialog_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/dialog.component */ "./src/app/dialog.component.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! moment */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var src_app_localstorage_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/localstorage.service */ "./src/app/localstorage.service.ts");
/* harmony import */ var ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng6-toastr-notifications */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/ng6-toastr-notifications/fesm5/ng6-toastr-notifications.js");


// import * as ExcelJS from 'exceljs';








var SuspectCheckinComponent = /** @class */ (function () {
    function SuspectCheckinComponent(rout, service, dialog, dialogs, session, alert, toast) {
        this.rout = rout;
        this.service = service;
        this.dialog = dialog;
        this.dialogs = dialogs;
        this.session = session;
        this.alert = alert;
        this.toast = toast;
        this.tabValue = 'Pending';
        this.fabBtnValue = 'add';
        this.suspectCheckin = [];
        this.segment_status = {};
        this.value = {};
        this.start = 0;
        this.total_page = 0;
        this.pagenumber = 0;
        this.endPage = 0;
        this.excel_data = [];
        this.excelLoader = false;
        this.loader = false;
        this.assign_login_data = {};
        this.logined_user_data = {};
        this.sr_no = 0;
        this.datanotfound = false;
        this.downurl = '';
        this.downurl = service.downloadUrl;
        this.page_limit = service.pageLimit;
        this.today_date = new Date();
        this.assign_login_data = this.session.getSession();
        this.logined_user_data = this.assign_login_data.value.data;
        this.getSuspectCheckin('');
    }
    SuspectCheckinComponent.prototype.ngOnInit = function () {
    };
    SuspectCheckinComponent.prototype.lastBtnValue = function (value) {
        this.fabBtnValue = value;
    };
    SuspectCheckinComponent.prototype.previousPage = function () {
        this.start = this.start - this.page_limit;
        this.getSuspectCheckin('');
    };
    SuspectCheckinComponent.prototype.nextPage = function () {
        this.start = this.start + this.page_limit;
        this.getSuspectCheckin('');
    };
    SuspectCheckinComponent.prototype.clearFilter = function () {
        this.value = {};
        this.getSuspectCheckin('');
    };
    SuspectCheckinComponent.prototype.getSuspectCheckin = function (data) {
        var _this = this;
        if (data.pageIndex > data.previousPageIndex) {
            this.nextPage();
        }
        this.sr_no = data.previousPageIndex;
        if (this.pagenumber > this.total_page) {
            this.pagenumber = this.total_page;
            this.start = this.pageCount - this.page_limit;
        }
        if (this.start < 0) {
            this.start = 0;
        }
        this.loader = true;
        var header = this.service.post_rqst({ 'start': this.start, 'pagelimit': this.page_limit, 'search': this.value }, "Checkin/getCombinedCheckoutReminderData");
        header.subscribe((function (result) {
            if (result['statusCode'] == 200) {
                _this.suspectCheckin = result.result;
                _this.loader = false;
                if (_this.suspectCheckin.length == 0) {
                    _this.datanotfound = true;
                }
                else {
                    _this.datanotfound = false;
                }
                for (var i = 0; i < _this.suspectCheckin.length; i++) {
                    if (_this.suspectCheckin[i].status == '1') {
                        _this.suspectCheckin[i].segment_status = true;
                    }
                    else if (_this.suspectCheckin[i].status == '0') {
                        _this.suspectCheckin[i].segment_status = false;
                    }
                }
                _this.total_page = Math.ceil(_this.pageCount / _this.page_limit);
                _this.pagenumber = Math.ceil(_this.start / _this.page_limit) + 1;
                if (_this.start + _this.page_limit >= _this.pageCount) {
                    _this.endPage = Math.ceil(_this.start + _this.page_limit - (_this.pageCount / _this.page_limit));
                }
                else if (_this.pageCount == 1) {
                    _this.endPage = '1';
                }
                else if (_this.pageCount != 1 && _this.pageCount < _this.page_limit) {
                    _this.endPage = _this.pageCount;
                }
                else {
                    _this.endPage = _this.start + _this.page_limit;
                }
                _this.sr_no = _this.pagenumber - 1;
                _this.sr_no = _this.sr_no * _this.page_limit;
            }
            else {
                _this.toast.errorToastr(result['statusMsg']);
                _this.loader = false;
            }
        }));
    };
    SuspectCheckinComponent.prototype.date_format = function () {
        this.value.date_created = moment__WEBPACK_IMPORTED_MODULE_7__(this.value.date_created).format('YYYY-MM-DD');
        this.getSuspectCheckin('');
    };
    SuspectCheckinComponent.prototype.refresh = function () {
        this.start = 0;
        this.value = {};
        this.getSuspectCheckin('');
    };
    SuspectCheckinComponent.prototype.downloadExcelSuspectCheckin = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var ExcelJS, workbook, worksheet_1, currentDate, header, totalRows, i, i, fileName_1, error_1;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e("common")]).then(__webpack_require__.t.bind(null, /*! exceljs */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/exceljs/dist/exceljs.min.js", 7))];
                    case 1:
                        ExcelJS = _a.sent();
                        workbook = new ExcelJS.Workbook();
                        worksheet_1 = workbook.addWorksheet('Suspect Checkin Report');
                        // Title Row
                        worksheet_1.addRow(['Suspect Checkin Report']);
                        worksheet_1.mergeCells('A1:I1');
                        worksheet_1.getCell('A1').font = { bold: true, size: 14 };
                        worksheet_1.getCell('A1').alignment = { horizontal: 'center' };
                        currentDate = new Date().toLocaleDateString();
                        worksheet_1.addRow(["Generated on: " + currentDate]);
                        worksheet_1.mergeCells('A2:I2');
                        worksheet_1.getCell('A2').alignment = { horizontal: 'center' };
                        worksheet_1.addRow([]); // Empty row
                        header = ['S.No', 'Remainder Type', 'Created By', 'Party Name', 'Type', 'Visit Start', 'Visit End', 'Lunch Start', 'Lunch End'];
                        worksheet_1.addRow(header);
                        worksheet_1.getRow(4).font = { bold: true };
                        // Apply header styling
                        worksheet_1.getRow(4).eachCell(function (cell) {
                            cell.fill = {
                                type: 'pattern',
                                pattern: 'solid',
                                fgColor: { argb: 'FFE0E0E0' }
                            };
                            cell.border = {
                                top: { style: 'thin' },
                                left: { style: 'thin' },
                                bottom: { style: 'thin' },
                                right: { style: 'thin' }
                            };
                            cell.alignment = { horizontal: 'center' };
                        });
                        // Data Rows
                        this.suspectCheckin.forEach(function (dist, index) {
                            var visitStart = dist.visit_start && dist.visit_start !== '0000-00-00 00:00:00'
                                ? new Date(dist.visit_start).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
                                : '--';
                            var visitEnd = dist.visit_end && dist.visit_end !== '0000-00-00 00:00:00'
                                ? new Date(dist.visit_end).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
                                : '--';
                            var lunchStart = dist.lunch_start && dist.lunch_start !== '0000-00-00 00:00:00'
                                ? new Date(dist.lunch_start).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
                                : '--';
                            var lunchEnd = dist.lunch_stop && dist.lunch_stop !== '0000-00-00 00:00:00'
                                ? new Date(dist.lunch_stop).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
                                : '--';
                            worksheet_1.addRow([
                                index + 1 + _this.sr_no,
                                dist.reminderType || '--',
                                (dist.created_by_name && dist.created_by_name !== '') ? dist.created_by_name : '--',
                                dist.dr_name || '--',
                                dist.dr_type_name || '--',
                                visitStart,
                                visitEnd,
                                lunchStart,
                                lunchEnd
                            ]);
                        });
                        totalRows = worksheet_1.rowCount;
                        for (i = 4; i <= totalRows; i++) {
                            worksheet_1.getRow(i).eachCell(function (cell) {
                                cell.border = {
                                    top: { style: 'thin' },
                                    left: { style: 'thin' },
                                    bottom: { style: 'thin' },
                                    right: { style: 'thin' }
                                };
                            });
                        }
                        // Set column widths based on your table classes
                        worksheet_1.getColumn(1).width = 8; // S.No (w50)
                        worksheet_1.getColumn(2).width = 18; // Remainder Type (w150)
                        worksheet_1.getColumn(3).width = 18; // Created By (w150)
                        worksheet_1.getColumn(4).width = 30; // Party Name (w250)
                        worksheet_1.getColumn(5).width = 18; // Type (w150)
                        worksheet_1.getColumn(6).width = 18; // Visit Start (w150)
                        worksheet_1.getColumn(7).width = 18; // Visit End (w150)
                        worksheet_1.getColumn(8).width = 18; // Lunch Start (w150)
                        worksheet_1.getColumn(9).width = 18; // Lunch End (w150)
                        // Style the remainder type column to be red (similar to your HTML style)
                        for (i = 5; i <= totalRows; i++) {
                            worksheet_1.getCell("B" + i).font = { color: { argb: 'FFFF0000' } };
                        }
                        fileName_1 = "Suspect_Checkin_Report_" + new Date().toISOString().split('T')[0] + ".xlsx";
                        workbook.xlsx.writeBuffer().then(function (buffer) {
                            var blob = new Blob([buffer], {
                                type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
                            });
                            Object(file_saver__WEBPACK_IMPORTED_MODULE_2__["saveAs"])(blob, fileName_1);
                        });
                        return [3 /*break*/, 3];
                    case 2:
                        error_1 = _a.sent();
                        console.error('Error generating Excel file:', error_1);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    SuspectCheckinComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-suspect-checkin',
            template: __webpack_require__(/*! ./suspect-checkin.component.html */ "./src/app/suspect-checkin/suspect-checkin/suspect-checkin.component.html"),
            styles: [__webpack_require__(/*! ./suspect-checkin.component.scss */ "./src/app/suspect-checkin/suspect-checkin/suspect-checkin.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            src_services_DatabaseService__WEBPACK_IMPORTED_MODULE_4__["DatabaseService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialog"],
            src_app_dialog_component__WEBPACK_IMPORTED_MODULE_6__["DialogComponent"],
            src_app_localstorage_service__WEBPACK_IMPORTED_MODULE_8__["sessionStorage"],
            src_app_dialog_component__WEBPACK_IMPORTED_MODULE_6__["DialogComponent"],
            ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_9__["ToastrManager"]])
    ], SuspectCheckinComponent);
    return SuspectCheckinComponent;
}());



/***/ }),

/***/ "./src/app/suspect-checkin/suspect-checkin/suspect-checkin.module.ts":
/*!***************************************************************************!*\
  !*** ./src/app/suspect-checkin/suspect-checkin/suspect-checkin.module.ts ***!
  \***************************************************************************/
/*! exports provided: SuspectCheckinModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SuspectCheckinModule", function() { return SuspectCheckinModule; });
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
/* harmony import */ var src_app_auth_component_guard__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/auth-component.guard */ "./src/app/auth-component.guard.ts");
/* harmony import */ var src_app_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/material */ "./src/app/material.ts");
/* harmony import */ var _suspect_checkin_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./suspect-checkin.component */ "./src/app/suspect-checkin/suspect-checkin/suspect-checkin.component.ts");
/* harmony import */ var src_app_attendence_tracker_tracker_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/attendence/tracker/tracker.component */ "./src/app/attendence/tracker/tracker.component.ts");














var checkinRoutes = [
    { path: "", component: _suspect_checkin_component__WEBPACK_IMPORTED_MODULE_12__["SuspectCheckinComponent"], canActivate: [src_app_auth_component_guard__WEBPACK_IMPORTED_MODULE_10__["AuthComponentGuard"]], data: { expectedRole: ['1'] }, },
    { path: "tracker", component: src_app_attendence_tracker_tracker_component__WEBPACK_IMPORTED_MODULE_13__["TrackerComponent"], canActivate: [src_app_auth_component_guard__WEBPACK_IMPORTED_MODULE_10__["AuthComponentGuard"]], data: { expectedRole: ['1'] } },
];
var SuspectCheckinModule = /** @class */ (function () {
    function SuspectCheckinModule() {
    }
    SuspectCheckinModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _suspect_checkin_component__WEBPACK_IMPORTED_MODULE_12__["SuspectCheckinComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild(checkinRoutes),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_7__["NgMultiSelectDropDownModule"],
                src_app_material__WEBPACK_IMPORTED_MODULE_11__["MaterialModule"],
                angular_ng_autocomplete__WEBPACK_IMPORTED_MODULE_6__["AutocompleteLibModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialogModule"],
                ngx_mat_select_search__WEBPACK_IMPORTED_MODULE_8__["NgxMatSelectSearchModule"],
                src_app_app_utility_module__WEBPACK_IMPORTED_MODULE_9__["AppUtilityModule"],
            ],
            entryComponents: []
        })
    ], SuspectCheckinModule);
    return SuspectCheckinModule;
}());



/***/ })

}]);