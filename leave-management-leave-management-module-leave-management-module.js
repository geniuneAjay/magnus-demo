(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["leave-management-leave-management-module-leave-management-module"],{

/***/ "./src/app/leave-management/leave-balance-edit/leave-balance-edit.component.html":
/*!***************************************************************************************!*\
  !*** ./src/app/leave-management/leave-balance-edit/leave-balance-edit.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"eb-header\">\r\n  <div class=\"eb-header-left\">\r\n    <i class=\"material-icons eb-icon\">edit_calendar</i>\r\n    <div>\r\n      <div class=\"eb-title\">Edit Leaves Used</div>\r\n      <div class=\"eb-subtitle\">{{row.name}} &nbsp;·&nbsp; {{row.employee_id}}</div>\r\n    </div>\r\n  </div>\r\n  <button mat-icon-button (click)=\"cancel()\" style=\"color:#fff\">\r\n    <i class=\"material-icons\">close</i>\r\n  </button>\r\n</div>\r\n\r\n<mat-dialog-content class=\"eb-content\">\r\n\r\n  <!-- Info Cards Row -->\r\n  <div class=\"eb-cards\">\r\n\r\n    <div class=\"eb-card eb-card-blue\">\r\n      <div class=\"eb-card-label\">Month / Year</div>\r\n      <div class=\"eb-card-value\">{{months[row.month]}} {{row.year}}</div>\r\n    </div>\r\n\r\n    <div class=\"eb-card eb-card-teal\">\r\n      <div class=\"eb-card-label\">Working Days</div>\r\n      <div class=\"eb-card-value\">{{row.total_working_days}}</div>\r\n    </div>\r\n\r\n    <div class=\"eb-card eb-card-purple\">\r\n      <div class=\"eb-card-label\">Carry Forward</div>\r\n      <div class=\"eb-card-value\">{{row.carry_forward || 0}}</div>\r\n      <div class=\"eb-card-hint\">Pichle month se</div>\r\n    </div>\r\n\r\n    <div class=\"eb-card eb-card-green\">\r\n      <div class=\"eb-card-label\">Leave Earned</div>\r\n      <div class=\"eb-card-value\">{{row.calculated_leave}}</div>\r\n    </div>\r\n\r\n    <div class=\"eb-card\" [ngClass]=\"row.leave_balance >= 0 ? 'eb-card-info' : 'eb-card-red'\">\r\n      <div class=\"eb-card-label\">Current Balance</div>\r\n      <div class=\"eb-card-value\">{{row.leave_balance}}</div>\r\n    </div>\r\n\r\n  </div>\r\n\r\n  <!-- Previous Month Card -->\r\n  <div class=\"eb-prev-month\">\r\n    <div class=\"eb-prev-header\">\r\n      <i class=\"material-icons\" style=\"font-size:16px;vertical-align:middle\">history</i>\r\n      Last Month — <strong>{{prev_month_label}}</strong>\r\n    </div>\r\n\r\n    <div class=\"eb-prev-loader\" *ngIf=\"loading\">\r\n      <i class=\"material-icons spin\">refresh</i> Loading...\r\n    </div>\r\n\r\n    <div class=\"eb-prev-data\" *ngIf=\"!loading && prev_leave\">\r\n      <div class=\"eb-prev-item\">\r\n        <span class=\"eb-prev-lbl\">Working Days</span>\r\n        <span class=\"eb-prev-val\">{{prev_leave.total_working_days}}</span>\r\n      </div>\r\n      <div class=\"eb-prev-divider\"></div>\r\n      <div class=\"eb-prev-item\">\r\n        <span class=\"eb-prev-lbl\">Leave Earned</span>\r\n        <span class=\"eb-prev-val\" style=\"color:#2e7d32;font-weight:700\">{{prev_leave.calculated_leave}}</span>\r\n      </div>\r\n      <div class=\"eb-prev-divider\"></div>\r\n      <div class=\"eb-prev-item\">\r\n        <span class=\"eb-prev-lbl\">Leaves Used</span>\r\n        <span class=\"eb-prev-val\" style=\"color:#e65100\">{{prev_leave.leaves_used}}</span>\r\n      </div>\r\n      <div class=\"eb-prev-divider\"></div>\r\n      <div class=\"eb-prev-item\">\r\n        <span class=\"eb-prev-lbl\">Balance</span>\r\n        <span class=\"eb-prev-val\" [style.color]=\"prev_leave.leave_balance >= 0 ? '#0d47a1' : '#b71c1c'\">\r\n          {{prev_leave.leave_balance}}\r\n        </span>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"eb-prev-empty\" *ngIf=\"!loading && !prev_leave\">\r\n      No data found for {{prev_month_label}}\r\n    </div>\r\n  </div>\r\n\r\n  <!-- Input Section -->\r\n  <div class=\"eb-form-section\">\r\n    <div class=\"eb-form-label\">\r\n      <i class=\"material-icons\" style=\"font-size:16px;vertical-align:middle;color:#5c6bc0\">edit</i>\r\n      Update Leaves Used\r\n    </div>\r\n\r\n    <mat-form-field appearance=\"outline\" class=\"eb-full-width\">\r\n      <mat-label>Leaves Used</mat-label>\r\n      <input matInput type=\"number\" min=\"0\" step=\"0.5\"\r\n             [(ngModel)]=\"leaves_used\" placeholder=\"e.g. 1.5\">\r\n      <mat-hint>0.5 = half day &nbsp;|&nbsp; 1 = full day</mat-hint>\r\n    </mat-form-field>\r\n\r\n    <mat-form-field appearance=\"outline\" class=\"eb-full-width\" style=\"margin-top:14px\">\r\n      <mat-label>Remarks (optional)</mat-label>\r\n      <textarea matInput rows=\"2\" [(ngModel)]=\"remarks\"\r\n                placeholder=\"Reason for leave deduction\"></textarea>\r\n    </mat-form-field>\r\n  </div>\r\n\r\n  <!-- Live Balance Preview -->\r\n  <div class=\"eb-balance-preview\" *ngIf=\"leaves_used !== '' && leaves_used !== null\">\r\n    <div class=\"eb-preview-row\">\r\n      <span>Carry Forward (pichla)</span>\r\n      <span class=\"eb-preview-val\" style=\"color:#7b1fa2\">+ {{row.carry_forward || 0}}</span>\r\n    </div>\r\n    <div class=\"eb-preview-row\">\r\n      <span>Leave Earned (is month)</span>\r\n      <span class=\"eb-preview-val green\">+ {{row.calculated_leave}}</span>\r\n    </div>\r\n    <div class=\"eb-preview-row\">\r\n      <span>Leaves Used</span>\r\n      <span class=\"eb-preview-val orange\">− {{leaves_used}}</span>\r\n    </div>\r\n    <div class=\"eb-preview-divider\"></div>\r\n    <div class=\"eb-preview-row eb-preview-total\">\r\n      <span>New Balance</span>\r\n      <span class=\"eb-preview-val\" [ngClass]=\"newBalance >= 0 ? 'green' : 'red'\">\r\n        <strong>{{newBalance | number:'1.2-2'}}</strong>\r\n      </span>\r\n    </div>\r\n  </div>\r\n\r\n</mat-dialog-content>\r\n\r\n<mat-dialog-actions class=\"eb-actions\">\r\n  <button mat-stroked-button (click)=\"cancel()\">Cancel</button>\r\n  <button mat-raised-button color=\"primary\"\r\n    [ngClass]=\"{'loading': saving}\"\r\n    [disabled]=\"saving\"\r\n    (click)=\"save()\">\r\n    <i class=\"material-icons\" style=\"font-size:16px;vertical-align:middle\">save</i>\r\n    {{saving ? 'Saving...' : 'Save'}}\r\n  </button>\r\n</mat-dialog-actions>\r\n"

/***/ }),

/***/ "./src/app/leave-management/leave-balance-edit/leave-balance-edit.component.scss":
/*!***************************************************************************************!*\
  !*** ./src/app/leave-management/leave-balance-edit/leave-balance-edit.component.scss ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* ---- Header ---- */\n.eb-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  background: linear-gradient(135deg, #1a237e, #283593);\n  color: #fff;\n  padding: 14px 20px;\n  border-radius: 4px 4px 0 0;\n}\n.eb-header-left {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.eb-icon {\n  font-size: 28px;\n  opacity: 0.85;\n}\n.eb-title {\n  font-size: 15px;\n  font-weight: 700;\n}\n.eb-subtitle {\n  font-size: 12px;\n  opacity: 0.75;\n}\n/* ---- Content ---- */\n.eb-content {\n  padding: 16px 20px !important;\n}\n/* ---- Info Cards ---- */\n.eb-cards {\n  display: grid;\n  grid-template-columns: repeat(5, 1fr);\n  gap: 8px;\n  margin-bottom: 14px;\n}\n.eb-card {\n  padding: 10px 14px;\n  border-radius: 8px;\n  border-left: 4px solid transparent;\n}\n.eb-card-label {\n  font-size: 11px;\n  color: #888;\n  margin-bottom: 3px;\n}\n.eb-card-value {\n  font-size: 18px;\n  font-weight: 700;\n}\n.eb-card-blue {\n  background: #e8eaf6;\n  border-color: #3949ab;\n}\n.eb-card-blue .eb-card-value {\n  color: #3949ab;\n}\n.eb-card-teal {\n  background: #e0f2f1;\n  border-color: #00695c;\n}\n.eb-card-teal .eb-card-value {\n  color: #00695c;\n}\n.eb-card-purple {\n  background: #f3e5f5;\n  border-color: #7b1fa2;\n}\n.eb-card-purple .eb-card-value {\n  color: #7b1fa2;\n}\n.eb-card-green {\n  background: #e8f5e9;\n  border-color: #2e7d32;\n}\n.eb-card-green .eb-card-value {\n  color: #2e7d32;\n}\n.eb-card-info {\n  background: #e3f2fd;\n  border-color: #1565c0;\n}\n.eb-card-info .eb-card-value {\n  color: #1565c0;\n}\n.eb-card-red {\n  background: #ffebee;\n  border-color: #c62828;\n}\n.eb-card-red .eb-card-value {\n  color: #c62828;\n}\n.eb-card-hint {\n  font-size: 10px;\n  color: #aaa;\n  margin-top: 2px;\n}\n/* ---- Previous Month Block ---- */\n.eb-prev-month {\n  background: #f8f9ff;\n  border: 1px solid #c5cae9;\n  border-radius: 8px;\n  padding: 12px 14px;\n  margin-bottom: 14px;\n}\n.eb-prev-header {\n  font-size: 12px;\n  color: #5c6bc0;\n  font-weight: 600;\n  margin-bottom: 10px;\n}\n.eb-prev-loader {\n  font-size: 12px;\n  color: #aaa;\n  text-align: center;\n  padding: 6px 0;\n}\n.eb-prev-loader .spin {\n  animation: spin 1s linear infinite;\n  font-size: 16px;\n  vertical-align: middle;\n}\n@keyframes spin {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n.eb-prev-data {\n  display: flex;\n  align-items: center;\n  gap: 0;\n}\n.eb-prev-item {\n  flex: 1;\n  text-align: center;\n}\n.eb-prev-lbl {\n  display: block;\n  font-size: 10px;\n  color: #888;\n  margin-bottom: 2px;\n}\n.eb-prev-val {\n  display: block;\n  font-size: 15px;\n  font-weight: 600;\n  color: #333;\n}\n.eb-prev-divider {\n  width: 1px;\n  height: 36px;\n  background: #c5cae9;\n  margin: 0 4px;\n}\n.eb-prev-empty {\n  font-size: 12px;\n  color: #aaa;\n  text-align: center;\n}\n/* ---- Form Section ---- */\n.eb-form-section {\n  margin-bottom: 14px;\n}\n.eb-form-label {\n  font-size: 12px;\n  color: #5c6bc0;\n  font-weight: 600;\n  margin-bottom: 10px;\n}\n.eb-full-width {\n  width: 100%;\n}\n/* ---- Balance Preview ---- */\n.eb-balance-preview {\n  background: #f5f5f5;\n  border-radius: 8px;\n  padding: 12px 16px;\n  margin-bottom: 4px;\n}\n.eb-preview-row {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  font-size: 13px;\n  padding: 3px 0;\n  color: #555;\n}\n.eb-preview-total {\n  font-size: 14px;\n  font-weight: 600;\n  color: #333;\n}\n.eb-preview-divider {\n  border-top: 1px dashed #ccc;\n  margin: 6px 0;\n}\n.eb-preview-val {\n  font-size: 15px;\n}\n.eb-preview-val.green {\n  color: #2e7d32;\n}\n.eb-preview-val.orange {\n  color: #e65100;\n}\n.eb-preview-val.red {\n  color: #b71c1c;\n}\n/* ---- Actions ---- */\n.eb-actions {\n  padding: 8px 20px 16px !important;\n  justify-content: flex-end;\n  gap: 8px;\n}"

/***/ }),

/***/ "./src/app/leave-management/leave-balance-edit/leave-balance-edit.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/leave-management/leave-balance-edit/leave-balance-edit.component.ts ***!
  \*************************************************************************************/
/*! exports provided: LeaveBalanceEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeaveBalanceEditComponent", function() { return LeaveBalanceEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng6-toastr-notifications */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/ng6-toastr-notifications/fesm5/ng6-toastr-notifications.js");
/* harmony import */ var src_services_DatabaseService__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/_services/DatabaseService */ "./src/_services/DatabaseService.ts");





var LeaveBalanceEditComponent = /** @class */ (function () {
    function LeaveBalanceEditComponent(dialogRef, data, serve, toast) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.serve = serve;
        this.toast = toast;
        this.saving = false;
        this.loading = false;
        this.remarks = '';
        this.prev_leave = null; // previous month's leave data
        this.prev_month_label = '';
        this.months = ['', 'January', 'February', 'March', 'April', 'May', 'June',
            'July', 'August', 'September', 'October', 'November', 'December'];
        this.row = data.row;
        this.leaves_used = this.row.leaves_used;
    }
    LeaveBalanceEditComponent.prototype.ngOnInit = function () {
        this.fetchPrevMonth();
    };
    LeaveBalanceEditComponent.prototype.fetchPrevMonth = function () {
        var _this = this;
        var pm = parseInt(this.row.month) - 1;
        var py = parseInt(this.row.year);
        if (pm === 0) {
            pm = 12;
            py--;
        }
        this.prev_month_label = this.months[pm] + ' ' + py;
        this.loading = true;
        this.serve.post_rqst({
            month: pm, year: py,
            start: 0, pagelimit: 500,
            search: { employee_id: this.row.employee_id }
        }, 'LeaveManagement/getLeaveBalance').subscribe(function (result) {
            _this.loading = false;
            if (result['statusCode'] == 200) {
                var list = result['result']['data'] || [];
                _this.prev_leave = list.find(function (r) { return r.user_id == _this.row.user_id; }) || null;
            }
        }, function () { _this.loading = false; });
    };
    Object.defineProperty(LeaveBalanceEditComponent.prototype, "newBalance", {
        get: function () {
            var cf = parseFloat(this.row.carry_forward || 0);
            return cf + parseFloat(this.row.calculated_leave) - parseFloat(this.leaves_used || 0);
        },
        enumerable: true,
        configurable: true
    });
    LeaveBalanceEditComponent.prototype.save = function () {
        var _this = this;
        if (this.leaves_used === '' || this.leaves_used === null || this.leaves_used === undefined) {
            this.toast.errorToastr('Please enter leaves used');
            return;
        }
        if (parseFloat(this.leaves_used) < 0) {
            this.toast.errorToastr('Leaves used cannot be negative');
            return;
        }
        this.saving = true;
        this.serve.post_rqst({
            id: this.row.id,
            leaves_used: this.leaves_used,
            remarks: this.remarks
        }, 'LeaveManagement/updateLeavesUsed').subscribe(function (result) {
            _this.saving = false;
            if (result['statusCode'] == 200) {
                _this.toast.successToastr(result['statusMsg'] || 'Updated successfully');
                _this.dialogRef.close(true);
            }
            else {
                _this.toast.errorToastr(result['statusMsg'] || 'Update failed');
            }
        }, function () {
            _this.saving = false;
            _this.toast.errorToastr('Something went wrong');
        });
    };
    LeaveBalanceEditComponent.prototype.cancel = function () { this.dialogRef.close(false); };
    LeaveBalanceEditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-leave-balance-edit',
            template: __webpack_require__(/*! ./leave-balance-edit.component.html */ "./src/app/leave-management/leave-balance-edit/leave-balance-edit.component.html"),
            styles: [__webpack_require__(/*! ./leave-balance-edit.component.scss */ "./src/app/leave-management/leave-balance-edit/leave-balance-edit.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"], Object, src_services_DatabaseService__WEBPACK_IMPORTED_MODULE_4__["DatabaseService"],
            ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_3__["ToastrManager"]])
    ], LeaveBalanceEditComponent);
    return LeaveBalanceEditComponent;
}());



/***/ }),

/***/ "./src/app/leave-management/leave-detail/leave-detail.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/leave-management/leave-detail/leave-detail.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"ld-header\">\r\n  <div class=\"ld-header-left\">\r\n    <i class=\"material-icons ld-icon\">calculate</i>\r\n    <div>\r\n      <div class=\"ld-title\">Leave Calculation Detail</div>\r\n      <div class=\"ld-subtitle\">{{row.name}} &nbsp;·&nbsp; {{row.employee_id}} &nbsp;·&nbsp; {{months[month]}} {{year}}</div>\r\n    </div>\r\n  </div>\r\n  <button mat-icon-button (click)=\"close()\"><i class=\"material-icons\">close</i></button>\r\n</div>\r\n\r\n<mat-dialog-content class=\"ld-content\">\r\n\r\n  <!-- Loader -->\r\n  <div class=\"ld-loader\" *ngIf=\"loader\">\r\n    <i class=\"material-icons spin\">refresh</i> Loading...\r\n  </div>\r\n\r\n  <ng-container *ngIf=\"!loader && !datanotfound\">\r\n\r\n    <!-- Summary Cards -->\r\n    <div class=\"ld-summary-cards\">\r\n      <div class=\"ld-card ld-card-blue\">\r\n        <div class=\"ldc-label\">Date of Joining</div>\r\n        <div class=\"ldc-value\">{{summary.date_of_joining || '—'}}</div>\r\n      </div>\r\n      <div class=\"ld-card ld-card-purple\">\r\n        <div class=\"ldc-label\">Service Years</div>\r\n        <div class=\"ldc-value\">{{summary.years_of_service}} yr</div>\r\n      </div>\r\n      <div class=\"ld-card\" [ngClass]=\"summary.multiplier >= 2 ? 'ld-card-green' : 'ld-card-orange'\">\r\n        <div class=\"ldc-label\">Multiplier</div>\r\n        <div class=\"ldc-value\">× {{summary.multiplier}}</div>\r\n        <div class=\"ldc-hint\">{{summary.years_of_service >= 3 ? '3+ years service' : 'Less than 3 years'}}</div>\r\n      </div>\r\n      <div class=\"ld-card ld-card-teal\">\r\n        <div class=\"ldc-label\">Total Working Days</div>\r\n        <div class=\"ldc-value\">{{summary.total_working_days}}</div>\r\n      </div>\r\n      <div class=\"ld-card ld-card-dark\">\r\n        <div class=\"ldc-label\">Month Days</div>\r\n        <div class=\"ldc-value\">{{summary.month_days}} days</div>\r\n        <div class=\"ldc-hint\">Divisor = {{summary.divisor}}</div>\r\n      </div>\r\n      <div class=\"ld-card ld-card-success\">\r\n        <div class=\"ldc-label\">Leave Earned</div>\r\n        <div class=\"ldc-value\">{{summary.calculated_leave}}</div>\r\n      </div>\r\n    </div>\r\n\r\n    <!-- Formula Box -->\r\n    <div class=\"ld-formula-box\">\r\n      <i class=\"material-icons\" style=\"font-size:18px;vertical-align:middle;margin-right:6px;color:#5c6bc0\">functions</i>\r\n      <span class=\"ld-formula-label\">Formula:</span>\r\n      <span class=\"ld-formula-text\">\r\n        ( Working Days / Divisor ) × Multiplier\r\n        &nbsp;=&nbsp;\r\n        ( {{summary.total_working_days}} / {{summary.divisor}} ) × {{summary.multiplier}}\r\n        &nbsp;=&nbsp;\r\n        <strong style=\"color:#2e7d32\">{{summary.calculated_leave}}</strong>\r\n      </span>\r\n    </div>\r\n\r\n    <!-- Legend -->\r\n    <div class=\"ld-legend\">\r\n      <span class=\"legend-dot present\"></span>Present (1.0)\r\n      <span class=\"legend-dot halfday\"></span>Half Day (0.5)\r\n      <span class=\"legend-dot holiday\"></span>Holiday (1.0)\r\n      <span class=\"legend-dot sun-yes\"></span>Sunday Counted (1.0)\r\n      <span class=\"legend-dot sun-no\"></span>Sunday Not Counted (0)\r\n      <span class=\"legend-dot absent\"></span>Absent (0)\r\n      <span class=\"legend-dot nomark\"></span>No Mark (0)\r\n    </div>\r\n\r\n    <!-- Bulk Upload Notice -->\r\n    <div class=\"ld-upload-notice\" *ngIf=\"summary.data_source === 'bulk_upload'\">\r\n      <i class=\"material-icons\">upload_file</i>\r\n      Working days <strong>{{summary.total_working_days}}</strong> directly uploaded via bulk data —\r\n      day-wise attendance breakdown available nahi hai.\r\n    </div>\r\n\r\n    <!-- Day-by-Day Table -->\r\n    <div class=\"ld-table-wrap\" *ngIf=\"summary.data_source !== 'bulk_upload'\">\r\n      <table class=\"ld-table\">\r\n        <thead>\r\n          <tr>\r\n            <th style=\"width:40px\">#</th>\r\n            <th style=\"width:100px\">Date</th>\r\n            <th style=\"width:90px\">Day</th>\r\n            <th style=\"width:100px\">Status</th>\r\n            <th style=\"width:70px;text-align:center\">Days Added</th>\r\n            <th>Note</th>\r\n          </tr>\r\n        </thead>\r\n        <tbody>\r\n          <tr *ngFor=\"let day of days_detail; let i = index\" [ngClass]=\"getRowClass(day)\">\r\n            <td>{{i + 1}}</td>\r\n            <td>{{day.date | date:'dd MMM'}}</td>\r\n            <td>\r\n              <strong *ngIf=\"day.day_name === 'Sunday'\" style=\"color:#7b1fa2\">{{day.day_name}}</strong>\r\n              <span *ngIf=\"day.day_name !== 'Sunday'\">{{day.day_name}}</span>\r\n            </td>\r\n            <td>\r\n              <span class=\"status-chip\" [ngClass]=\"getChipClass(day.status, day.day_name)\">\r\n                <i class=\"material-icons\" style=\"font-size:13px;vertical-align:middle\">{{getStatusIcon(day)}}</i>\r\n                {{day.day_name === 'Sunday' ? 'Sunday' : day.status}}\r\n              </span>\r\n            </td>\r\n            <td style=\"text-align:center;font-weight:700\"\r\n                [style.color]=\"day.days_added > 0 ? '#1b5e20' : '#9e9e9e'\">\r\n              {{day.days_added > 0 ? '+' + day.days_added : '0'}}\r\n            </td>\r\n            <td class=\"note-cell\">{{day.note}}</td>\r\n          </tr>\r\n        </tbody>\r\n        <tfoot>\r\n          <tr class=\"total-row\">\r\n            <td colspan=\"4\" style=\"text-align:right;font-weight:700\">Total Working Days →</td>\r\n            <td style=\"text-align:center;font-weight:700;color:#1b5e20;font-size:15px\">\r\n              {{summary.total_working_days}}\r\n            </td>\r\n            <td style=\"color:#555;font-size:12px\">\r\n              ( {{summary.total_working_days}} / {{summary.divisor}} ) × {{summary.multiplier}} =\r\n              <strong style=\"color:#1b5e20\">{{summary.calculated_leave}} leaves</strong>\r\n            </td>\r\n          </tr>\r\n        </tfoot>\r\n      </table>\r\n    </div>\r\n\r\n  </ng-container>\r\n\r\n  <div class=\"ld-loader\" *ngIf=\"!loader && datanotfound\">\r\n    No data found.\r\n  </div>\r\n\r\n</mat-dialog-content>\r\n"

/***/ }),

/***/ "./src/app/leave-management/leave-detail/leave-detail.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/leave-management/leave-detail/leave-detail.component.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* Header */\n.ld-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 12px 20px;\n  background: #1a237e;\n  color: #fff;\n  border-radius: 4px 4px 0 0;\n}\n.ld-header-left {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.ld-icon {\n  font-size: 28px;\n  opacity: 0.8;\n}\n.ld-title {\n  font-size: 15px;\n  font-weight: 700;\n}\n.ld-subtitle {\n  font-size: 12px;\n  opacity: 0.75;\n}\n/* Content */\n.ld-content {\n  padding: 16px 20px !important;\n  max-height: 78vh;\n  overflow-y: auto;\n}\n/* Loader */\n.ld-loader {\n  text-align: center;\n  padding: 40px;\n  color: #888;\n  font-size: 14px;\n}\n.ld-loader .spin {\n  animation: spin 1s linear infinite;\n  display: block;\n  font-size: 32px;\n  color: #ccc;\n}\n@keyframes spin {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n/* Summary Cards */\n.ld-summary-cards {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 10px;\n  margin-bottom: 14px;\n}\n.ld-card {\n  flex: 1;\n  min-width: 110px;\n  padding: 10px 14px;\n  border-radius: 8px;\n  border-left: 4px solid transparent;\n}\n.ldc-label {\n  font-size: 11px;\n  color: #888;\n  margin-bottom: 2px;\n}\n.ldc-value {\n  font-size: 20px;\n  font-weight: 700;\n}\n.ldc-hint {\n  font-size: 10px;\n  color: #aaa;\n  margin-top: 2px;\n}\n.ld-card-blue {\n  background: #e8eaf6;\n  border-color: #3949ab;\n}\n.ld-card-blue .ldc-value {\n  color: #3949ab;\n}\n.ld-card-purple {\n  background: #f3e5f5;\n  border-color: #7b1fa2;\n}\n.ld-card-purple .ldc-value {\n  color: #7b1fa2;\n}\n.ld-card-green {\n  background: #e8f5e9;\n  border-color: #2e7d32;\n}\n.ld-card-green .ldc-value {\n  color: #2e7d32;\n}\n.ld-card-orange {\n  background: #fff3e0;\n  border-color: #e65100;\n}\n.ld-card-orange .ldc-value {\n  color: #e65100;\n}\n.ld-card-teal {\n  background: #e0f2f1;\n  border-color: #00695c;\n}\n.ld-card-teal .ldc-value {\n  color: #00695c;\n}\n.ld-card-dark {\n  background: #f5f5f5;\n  border-color: #424242;\n}\n.ld-card-dark .ldc-value {\n  color: #424242;\n}\n.ld-card-success {\n  background: #e8f5e9;\n  border-color: #1b5e20;\n}\n.ld-card-success .ldc-value {\n  color: #1b5e20;\n  font-size: 24px;\n}\n/* Formula box */\n.ld-formula-box {\n  background: #ede7f6;\n  border-left: 4px solid #5c6bc0;\n  padding: 10px 14px;\n  border-radius: 6px;\n  margin-bottom: 12px;\n  font-size: 13px;\n}\n.ld-formula-label {\n  font-weight: 700;\n  color: #5c6bc0;\n  margin-right: 6px;\n}\n.ld-formula-text {\n  color: #333;\n}\n/* Legend */\n.ld-legend {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 12px;\n  font-size: 11px;\n  color: #555;\n  margin-bottom: 10px;\n  align-items: center;\n}\n.legend-dot {\n  display: inline-block;\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n  margin-right: 3px;\n  vertical-align: middle;\n}\n.legend-dot.present {\n  background: #c8e6c9;\n}\n.legend-dot.halfday {\n  background: #fff9c4;\n}\n.legend-dot.holiday {\n  background: #bbdefb;\n}\n.legend-dot.sun-yes {\n  background: #e1bee7;\n}\n.legend-dot.sun-no {\n  background: #f8bbd0;\n}\n.legend-dot.absent {\n  background: #ffcdd2;\n}\n.legend-dot.nomark {\n  background: #e0e0e0;\n}\n/* Table */\n.ld-table-wrap {\n  overflow-x: auto;\n}\n.ld-table {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 12px;\n}\n.ld-table thead tr th {\n  background: #1a237e;\n  color: #fff;\n  padding: 8px 10px;\n  text-align: left;\n  font-weight: 600;\n  white-space: nowrap;\n  border-right: 1px solid rgba(255, 255, 255, 0.15);\n}\n.ld-table thead tr th:last-child {\n  border-right: none;\n}\n.ld-table tbody tr td {\n  padding: 6px 10px;\n  border-bottom: 1px solid #f0f0f0;\n  border-right: 1px solid #f0f0f0;\n  vertical-align: middle;\n}\n.ld-table tbody tr td:last-child {\n  border-right: none;\n}\n.ld-table tfoot tr.total-row td {\n  padding: 10px;\n  background: #f5f5f5;\n  border-top: 2px solid #1a237e;\n  font-size: 13px;\n}\n/* Row colors */\n.row-present td {\n  background: #f1f8e9;\n}\n.row-halfday td {\n  background: #fffde7;\n}\n.row-holiday td {\n  background: #e3f2fd;\n}\n.row-sunday-yes td {\n  background: #f3e5f5;\n}\n.row-sunday-no td {\n  background: #fce4ec;\n}\n.row-absent td {\n  background: #ffebee;\n}\n.row-weekoff td {\n  background: #fafafa;\n  color: #aaa;\n}\n.row-nomark td {\n  background: #fafafa;\n  color: #bbb;\n}\n/* Status chips */\n.status-chip {\n  display: inline-flex;\n  align-items: center;\n  gap: 3px;\n  padding: 2px 8px;\n  border-radius: 10px;\n  font-size: 11px;\n  font-weight: 600;\n}\n.chip-present {\n  background: #dcedc8;\n  color: #33691e;\n}\n.chip-half-day {\n  background: #fff9c4;\n  color: #f57f17;\n}\n.chip-holiday {\n  background: #bbdefb;\n  color: #0d47a1;\n}\n.chip-sunday {\n  background: #e1bee7;\n  color: #6a1b9a;\n}\n.chip-absent {\n  background: #ffcdd2;\n  color: #b71c1c;\n}\n.chip-weekly-off {\n  background: #eeeeee;\n  color: #757575;\n}\n.chip-no-mark {\n  background: #e0e0e0;\n  color: #757575;\n}\n.note-cell {\n  color: #555;\n  font-size: 11px;\n}\n.ld-upload-notice {\n  background: #e8f4fd;\n  border-left: 4px solid #1565c0;\n  padding: 12px 16px;\n  border-radius: 6px;\n  margin-bottom: 12px;\n  font-size: 13px;\n  color: #1565c0;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}"

/***/ }),

/***/ "./src/app/leave-management/leave-detail/leave-detail.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/leave-management/leave-detail/leave-detail.component.ts ***!
  \*************************************************************************/
/*! exports provided: LeaveDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeaveDetailComponent", function() { return LeaveDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var src_services_DatabaseService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/_services/DatabaseService */ "./src/_services/DatabaseService.ts");




var LeaveDetailComponent = /** @class */ (function () {
    function LeaveDetailComponent(dialogRef, data, serve) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.serve = serve;
        this.loader = false;
        this.user = {};
        this.summary = {};
        this.days_detail = [];
        this.datanotfound = false;
        this.months = ['', 'January', 'February', 'March', 'April', 'May', 'June',
            'July', 'August', 'September', 'October', 'November', 'December'];
        this.row = data.row;
        this.month = data.month;
        this.year = data.year;
    }
    LeaveDetailComponent.prototype.ngOnInit = function () {
        this.loadDetail();
    };
    LeaveDetailComponent.prototype.loadDetail = function () {
        var _this = this;
        this.loader = true;
        this.serve.post_rqst({
            user_id: this.row.user_id,
            month: this.month,
            year: this.year
        }, 'LeaveManagement/getLeaveDetail').subscribe(function (result) {
            _this.loader = false;
            if (result['statusCode'] == 200) {
                _this.user = result['result']['user'];
                _this.summary = result['result']['summary'];
                _this.days_detail = result['result']['days_detail'];
                _this.datanotfound = false;
            }
            else {
                _this.datanotfound = true;
            }
        }, function () {
            _this.loader = false;
            _this.datanotfound = true;
        });
    };
    LeaveDetailComponent.prototype.getRowClass = function (day) {
        if (day.day_name === 'Sunday') {
            return day.sunday_counted ? 'row-sunday-yes' : 'row-sunday-no';
        }
        if (day.status === 'Present')
            return 'row-present';
        if (day.status === 'Half Day')
            return 'row-halfday';
        if (day.status === 'Holiday')
            return 'row-holiday';
        if (day.status === 'Absent')
            return 'row-absent';
        if (day.status === 'Weekly Off')
            return 'row-weekoff';
        return 'row-nomark';
    };
    LeaveDetailComponent.prototype.getChipClass = function (status, dayName) {
        if (dayName === 'Sunday')
            return 'chip-sunday';
        var map = {
            'Present': 'chip-present', 'Half Day': 'chip-half-day',
            'Holiday': 'chip-holiday', 'Absent': 'chip-absent',
            'Weekly Off': 'chip-weekly-off', 'No Mark': 'chip-no-mark'
        };
        return map[status] || 'chip-no-mark';
    };
    LeaveDetailComponent.prototype.getStatusIcon = function (day) {
        if (day.day_name === 'Sunday') {
            return day.sunday_counted ? 'check_circle' : 'cancel';
        }
        if (day.status === 'Present')
            return 'check_circle';
        if (day.status === 'Half Day')
            return 'timelapse';
        if (day.status === 'Holiday')
            return 'event';
        if (day.status === 'Absent')
            return 'cancel';
        if (day.status === 'Weekly Off')
            return 'weekend';
        return 'radio_button_unchecked';
    };
    LeaveDetailComponent.prototype.close = function () {
        this.dialogRef.close();
    };
    LeaveDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-leave-detail',
            template: __webpack_require__(/*! ./leave-detail.component.html */ "./src/app/leave-management/leave-detail/leave-detail.component.html"),
            styles: [__webpack_require__(/*! ./leave-detail.component.scss */ "./src/app/leave-management/leave-detail/leave-detail.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"], Object, src_services_DatabaseService__WEBPACK_IMPORTED_MODULE_3__["DatabaseService"]])
    ], LeaveDetailComponent);
    return LeaveDetailComponent;
}());



/***/ }),

/***/ "./src/app/leave-management/leave-ledger/leave-ledger.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/leave-management/leave-ledger/leave-ledger.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"dialog-header\">\r\n  <div>\r\n    <h2 mat-dialog-title style=\"margin:0\">Leave Ledger — {{row.name}}</h2>\r\n    <span style=\"font-size:12px;color:#888\">{{row.employee_id}}</span>\r\n  </div>\r\n  <div class=\"df ac flex-gap-10\">\r\n    <button mat-stroked-button (click)=\"showAll()\" *ngIf=\"filter_month\">\r\n      <i class=\"material-icons\" style=\"font-size:16px\">all_inclusive</i> All Months\r\n    </button>\r\n    <div class=\"pagination-content\" *ngIf=\"total_page > 1\">\r\n      <button mat-icon-button (click)=\"previous()\" [disabled]=\"start == 0\">\r\n        <i class=\"material-icons\">navigate_before</i>\r\n      </button>\r\n      {{pagenumber}} / {{total_page}}\r\n      <button mat-icon-button (click)=\"nextPage()\" [disabled]=\"pagenumber == total_page\">\r\n        <i class=\"material-icons\">navigate_next</i>\r\n      </button>\r\n    </div>\r\n    <button mat-icon-button (click)=\"close()\"><i class=\"material-icons\">close</i></button>\r\n  </div>\r\n</div>\r\n\r\n<mat-dialog-content style=\"padding:0 16px 16px\">\r\n\r\n  <div *ngIf=\"loader\" style=\"padding:30px;text-align:center\">\r\n    <i class=\"material-icons spin\" style=\"font-size:32px;color:#ccc\">refresh</i>\r\n  </div>\r\n\r\n  <table class=\"ledger-table\" *ngIf=\"!loader && ledger_list.length > 0\">\r\n    <thead>\r\n      <tr>\r\n        <th>S.No</th>\r\n        <th>Month / Year</th>\r\n        <th>Type</th>\r\n        <th class=\"text-right\">Days</th>\r\n        <th>Remarks</th>\r\n        <th class=\"text-right\">Balance</th>\r\n        <th>Date</th>\r\n      </tr>\r\n    </thead>\r\n    <tbody>\r\n      <tr *ngFor=\"let l of ledger_list; let i = index\"\r\n          [ngClass]=\"l.is_carry_forward ? 'row-carry' : (l.transaction_type === 'Credit' ? 'row-credit' : 'row-debit')\">\r\n        <td>{{sr_no + i + 1}}</td>\r\n        <td>{{l.month}} / {{l.year}}</td>\r\n        <td>\r\n          <span class=\"type-badge\"\r\n            [ngClass]=\"l.is_carry_forward ? 'carry' : (l.transaction_type === 'Credit' ? 'credit' : 'debit')\">\r\n            {{l.is_carry_forward ? 'Carry Fwd' : l.transaction_type}}\r\n          </span>\r\n        </td>\r\n        <td class=\"text-right\">\r\n          <strong [style.color]=\"l.transaction_type === 'Credit' ? '#1e7e34' : '#b30000'\">\r\n            {{l.transaction_type === 'Credit' ? '+' : '-'}}{{l.days}}\r\n          </strong>\r\n        </td>\r\n        <td>{{l.remarks || '—'}}</td>\r\n        <td class=\"text-right\">\r\n          <strong [style.color]=\"l.balance_after >= 0 ? '#0d47a1' : '#b71c1c'\">\r\n            {{l.balance_after}}\r\n          </strong>\r\n        </td>\r\n        <td style=\"font-size:11px;color:#888\">{{l.created_at | date:'dd MMM yy'}}</td>\r\n      </tr>\r\n    </tbody>\r\n  </table>\r\n\r\n  <div *ngIf=\"!loader && datanotfound\" style=\"padding:30px;text-align:center;color:#888\">\r\n    No ledger entries found.\r\n  </div>\r\n\r\n</mat-dialog-content>\r\n"

/***/ }),

/***/ "./src/app/leave-management/leave-ledger/leave-ledger.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/leave-management/leave-ledger/leave-ledger.component.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".dialog-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-start;\n  padding: 12px 16px 8px;\n  border-bottom: 1px solid #eee;\n}\n\n.ledger-table {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 13px;\n  margin-top: 8px;\n}\n\n.ledger-table th {\n  background: #f5f5f5;\n  padding: 8px 12px;\n  text-align: left;\n  font-weight: 600;\n  color: #444;\n  border-bottom: 2px solid #ddd;\n}\n\n.ledger-table td {\n  padding: 8px 12px;\n  border-bottom: 1px solid #f0f0f0;\n}\n\n.ledger-table .text-right {\n  text-align: right;\n}\n\n.ledger-table .row-credit td {\n  background: #f9fff9;\n}\n\n.ledger-table .row-debit td {\n  background: #fff9f9;\n}\n\n.type-badge {\n  display: inline-block;\n  padding: 2px 8px;\n  border-radius: 10px;\n  font-size: 11px;\n  font-weight: 600;\n}\n\n.type-badge.credit {\n  background: #e6f4ea;\n  color: #1e7e34;\n}\n\n.type-badge.debit {\n  background: #ffe0e0;\n  color: #b30000;\n}\n\n.type-badge.carry {\n  background: #ede7f6;\n  color: #6a1b9a;\n}\n\n.row-carry td {\n  background: #f8f0ff !important;\n}\n\n.text-right {\n  text-align: right;\n}\n\n@keyframes spin {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n\n.spin {\n  animation: spin 1s linear infinite;\n}"

/***/ }),

/***/ "./src/app/leave-management/leave-ledger/leave-ledger.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/leave-management/leave-ledger/leave-ledger.component.ts ***!
  \*************************************************************************/
/*! exports provided: LeaveLedgerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeaveLedgerComponent", function() { return LeaveLedgerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng6-toastr-notifications */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/ng6-toastr-notifications/fesm5/ng6-toastr-notifications.js");
/* harmony import */ var src_services_DatabaseService__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/_services/DatabaseService */ "./src/_services/DatabaseService.ts");





var LeaveLedgerComponent = /** @class */ (function () {
    function LeaveLedgerComponent(dialogRef, data, serve, toast) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.serve = serve;
        this.toast = toast;
        this.ledger_list = [];
        this.loader = false;
        this.datanotfound = false;
        this.start = 0;
        this.pagenumber = 1;
        this.total_page = 0;
        this.pageCount = 0;
        this.page_limit = 20;
        this.sr_no = 0;
        this.filter_month = '';
        this.filter_year = '';
        this.row = data.row;
        this.filter_month = ''; // all months by default
        this.filter_year = data.year || '';
    }
    LeaveLedgerComponent.prototype.ngOnInit = function () {
        this.getLedger();
    };
    LeaveLedgerComponent.prototype.getLedger = function () {
        var _this = this;
        this.loader = true;
        this.datanotfound = false;
        this.serve.post_rqst({
            user_id: this.row.user_id,
            month: this.filter_month,
            year: this.filter_year,
            start: this.start,
            pagelimit: this.page_limit
        }, 'LeaveManagement/getLedger').subscribe(function (result) {
            _this.loader = false;
            if (result['statusCode'] == 200) {
                _this.ledger_list = result['result']['data'] || [];
                _this.pageCount = result['result']['count'];
                _this.pagenumber = Math.ceil(_this.start / _this.page_limit) + 1;
                _this.total_page = Math.ceil(_this.pageCount / _this.page_limit);
                _this.sr_no = (_this.pagenumber - 1) * _this.page_limit;
                _this.datanotfound = _this.ledger_list.length === 0;
            }
            else {
                _this.datanotfound = true;
            }
        }, function () {
            _this.loader = false;
            _this.datanotfound = true;
        });
    };
    LeaveLedgerComponent.prototype.previous = function () {
        this.start = Math.max(0, this.start - this.page_limit);
        this.getLedger();
    };
    LeaveLedgerComponent.prototype.nextPage = function () {
        this.start += this.page_limit;
        this.getLedger();
    };
    LeaveLedgerComponent.prototype.showAll = function () {
        this.filter_month = '';
        this.filter_year = '';
        this.start = 0;
        this.getLedger();
    };
    LeaveLedgerComponent.prototype.close = function () {
        this.dialogRef.close();
    };
    LeaveLedgerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-leave-ledger',
            template: __webpack_require__(/*! ./leave-ledger.component.html */ "./src/app/leave-management/leave-ledger/leave-ledger.component.html"),
            styles: [__webpack_require__(/*! ./leave-ledger.component.scss */ "./src/app/leave-management/leave-ledger/leave-ledger.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"], Object, src_services_DatabaseService__WEBPACK_IMPORTED_MODULE_4__["DatabaseService"],
            ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_3__["ToastrManager"]])
    ], LeaveLedgerComponent);
    return LeaveLedgerComponent;
}());



/***/ }),

/***/ "./src/app/leave-management/leave-management-list/leave-management-list.component.html":
/*!*********************************************************************************************!*\
  !*** ./src/app/leave-management/leave-management-list/leave-management-list.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-container\">\r\n\r\n  <!-- Tools Bar -->\r\n  <div class=\"tools-container\">\r\n    <h2>Leave Management</h2>\r\n    <div class=\"left-auto df ac flex-gap-10\">\r\n\r\n      <button mat-icon-button matTooltip=\"Refresh\" (click)=\"refresh()\">\r\n        <i class=\"material-icons\">refresh</i>\r\n      </button>\r\n\r\n      <!-- Pagination -->\r\n      <div class=\"pagination\" *ngIf=\"total_page > 1\">\r\n        <div class=\"pagination-content\">\r\n          Pages <span>{{pagenumber}}</span> of <span>{{total_page}}</span>\r\n        </div>\r\n        <div class=\"page-nav\">\r\n          <button mat-icon-button matTooltip=\"Previous\" (click)=\"previous()\" [disabled]=\"start == 0\">\r\n            <i class=\"material-icons\">navigate_before</i>\r\n          </button>\r\n          <button mat-icon-button matTooltip=\"Next\" (click)=\"nextPage()\" [disabled]=\"pagenumber == total_page\">\r\n            <i class=\"material-icons\">navigate_next</i>\r\n          </button>\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n\r\n  <!-- Filter + Calculate Bar -->\r\n  <div class=\"lm-filter-bar\">\r\n\r\n    <!-- Search inputs -->\r\n    <mat-form-field appearance=\"outline\" class=\"lm-field\">\r\n      <mat-label>Search Name</mat-label>\r\n      <input matInput [(ngModel)]=\"search.name\" (ngModelChange)=\"getLeaveBalance()\" placeholder=\"Employee name\">\r\n    </mat-form-field>\r\n\r\n    <mat-form-field appearance=\"outline\" class=\"lm-field-sm\">\r\n      <mat-label>Employee ID</mat-label>\r\n      <input matInput [(ngModel)]=\"search.employee_id\" (ngModelChange)=\"getLeaveBalance()\" placeholder=\"Emp ID\">\r\n    </mat-form-field>\r\n\r\n    <div class=\"lm-spacer\"></div>\r\n\r\n    <!-- Month & Year Selectors -->\r\n    <mat-form-field appearance=\"outline\" class=\"lm-field-sm\">\r\n      <mat-label>Month</mat-label>\r\n      <mat-select [(ngModel)]=\"selected_month\" (ngModelChange)=\"onMonthYearChange()\">\r\n        <mat-option *ngFor=\"let m of months\" [value]=\"m.value\">{{m.label}}</mat-option>\r\n      </mat-select>\r\n    </mat-form-field>\r\n\r\n    <mat-form-field appearance=\"outline\" style=\"width:90px\">\r\n      <mat-label>Year</mat-label>\r\n      <mat-select [(ngModel)]=\"selected_year\" (ngModelChange)=\"onMonthYearChange()\">\r\n        <mat-option *ngFor=\"let y of years\" [value]=\"y\">{{y}}</mat-option>\r\n      </mat-select>\r\n    </mat-form-field>\r\n\r\n    <!-- Calculate Button -->\r\n    <button mat-raised-button color=\"primary\"\r\n      [ngClass]=\"{'loading': calculating}\"\r\n      [disabled]=\"calculating\"\r\n      (click)=\"calculateLeave()\"\r\n      style=\"height:40px\">\r\n      <i class=\"material-icons\">calculate</i>\r\n      {{calculating ? 'Calculating...' : 'Calculate Leave'}}\r\n    </button>\r\n\r\n    <span class=\"lm-count\" *ngIf=\"!loader && pageCount > 0\">\r\n      {{pageCount}} record(s) — {{getMonthName(selected_month)}} {{selected_year}}\r\n    </span>\r\n\r\n  </div>\r\n\r\n  <!-- Table -->\r\n  <div class=\"container container-scroll\">\r\n    <div class=\"cs-table horizontal-scroll\">\r\n      <div class=\"sticky-head\">\r\n        <div class=\"table-head\">\r\n          <table>\r\n            <tr>\r\n              <th class=\"w50\">S.No</th>\r\n              <th class=\"w150\">Employee Name</th>\r\n              <th class=\"w110\">Emp Code</th>\r\n              <th class=\"w130\">Designation</th>\r\n              <th class=\"w120 text-center\">Working Days</th>\r\n              <th class=\"w90 text-center\">Service Yrs</th>\r\n              <th class=\"w110 text-center\">Carry Forward</th>\r\n              <th class=\"w150 text-center\">Leave Earned</th>\r\n              <th class=\"w110 text-center\">Leaves Used</th>\r\n              <th class=\"w110 text-center\">Balance</th>\r\n              <th class=\"w80 text-center\">Last Updated</th>\r\n              <th class=\"w120 text-center\">Action</th>\r\n            </tr>\r\n          </table>\r\n        </div>\r\n      </div>\r\n\r\n      <!-- Skeleton Loader -->\r\n      <div class=\"table-body\" *ngIf=\"loader\">\r\n        <table>\r\n          <tr *ngFor=\"let s of [1,2,3,4,5,6,7,8]\">\r\n            <td class=\"w50\"><div class=\"skeleton-loader\"></div></td>\r\n            <td class=\"w150\"><div class=\"skeleton-loader\"></div></td>\r\n            <td class=\"w110\"><div class=\"skeleton-loader\"></div></td>\r\n            <td class=\"w130\"><div class=\"skeleton-loader\"></div></td>\r\n            <td class=\"w120\"><div class=\"skeleton-loader\"></div></td>\r\n            <td class=\"w90\"><div class=\"skeleton-loader\"></div></td>\r\n            <td class=\"w110\"><div class=\"skeleton-loader\"></div></td>\r\n            <td class=\"w150\"><div class=\"skeleton-loader\"></div></td>\r\n            <td class=\"w110\"><div class=\"skeleton-loader\"></div></td>\r\n            <td class=\"w110\"><div class=\"skeleton-loader\"></div></td>\r\n            <td class=\"w80\"><div class=\"skeleton-loader\"></div></td>\r\n            <td class=\"w120\"><div class=\"skeleton-loader\"></div></td>\r\n          </tr>\r\n        </table>\r\n      </div>\r\n\r\n      <!-- Data Rows -->\r\n      <div class=\"table-body\" *ngIf=\"!loader\">\r\n        <table>\r\n          <tr *ngFor=\"let row of leave_list; let i = index\">\r\n            <td class=\"w50\">{{sr_no + i + 1}}</td>\r\n            <td class=\"w150\">{{row.name}}</td>\r\n            <td class=\"w110\">{{row.employee_id}}</td>\r\n            <td class=\"w130\">{{row.designation_name || '—'}}</td>\r\n            <td class=\"w120 text-center\">{{row.total_working_days}}</td>\r\n            <td class=\"w90 text-center\">\r\n              <span class=\"badge\" [ngClass]=\"row.years_of_service >= 3 ? 'badge-success' : 'badge-warning'\">\r\n                {{row.years_of_service >= 0 ? row.years_of_service : '—'}} yr\r\n              </span>\r\n            </td>\r\n            <td class=\"w110 text-center\">\r\n              <span class=\"badge\" [ngClass]=\"row.carry_forward < 0 ? 'badge-danger' : 'badge-info'\">\r\n                {{row.carry_forward || 0}}\r\n              </span>\r\n            </td>\r\n            <td class=\"w150 text-center\">\r\n              <span class=\"leave-earned-cell\" (click)=\"openDetail(row)\" matTooltip=\"Click to see calculation detail\">\r\n                <span class=\"badge badge-success\">{{row.calculated_leave}}</span>\r\n              </span>\r\n            </td>\r\n            <td class=\"w110 text-center\">\r\n              <span class=\"badge badge-warning\">{{row.leaves_used}}</span>\r\n            </td>\r\n            <td class=\"w110 text-center\">\r\n              <span [ngClass]=\"row.leave_balance >= 0 ? 'badge badge-info' : 'badge badge-danger'\">\r\n                {{row.leave_balance}}\r\n              </span>\r\n            </td>\r\n            <td class=\"w80 text-center\" style=\"font-size:11px;\">\r\n              {{row.updated_at ? (row.updated_at | date:'dd MMM') : '—'}}\r\n            </td>\r\n            <td class=\"w120 text-center\">\r\n              <button mat-icon-button matTooltip=\"Edit Leaves Used\" color=\"primary\" (click)=\"openEditDialog(row)\">\r\n                <i class=\"material-icons\" style=\"font-size:18px;\">edit</i>\r\n              </button>\r\n              <button mat-icon-button matTooltip=\"View Ledger\" color=\"accent\" (click)=\"openLedger(row)\">\r\n                <i class=\"material-icons\" style=\"font-size:18px;\">receipt_long</i>\r\n              </button>\r\n            </td>\r\n          </tr>\r\n        </table>\r\n      </div>\r\n\r\n      <!-- No Data -->\r\n      <div class=\"no-data-found\" *ngIf=\"!loader && datanotfound\">\r\n        <img src=\"assets/img/no-data.png\" alt=\"No data\" onerror=\"this.style.display='none'\">\r\n        <p>No leave data found for {{getMonthName(selected_month)}} {{selected_year}}.</p>\r\n        <p style=\"color:#888;font-size:12px;\">Click \"Calculate Leave\" to generate records.</p>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/leave-management/leave-management-list/leave-management-list.component.scss":
/*!*********************************************************************************************!*\
  !*** ./src/app/leave-management/leave-management-list/leave-management-list.component.scss ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "/* ---- Filter / Calculate Bar ---- */\n.lm-filter-bar {\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 10px;\n  padding: 8px 16px 4px;\n  background: #fafafa;\n  border-bottom: 1px solid #e0e0e0;\n}\n.lm-field {\n  width: 180px;\n}\n.lm-field-sm {\n  width: 130px;\n}\n.lm-spacer {\n  flex: 1;\n}\n.lm-count {\n  font-size: 12px;\n  color: #888;\n  white-space: nowrap;\n}\n/* ---- Table header override ---- */\n.cs-table .table-head {\n  background: #1a237e !important;\n}\n.cs-table .table-head table tr th {\n  background: #1a237e !important;\n  color: #fff !important;\n  font-size: 12px !important;\n  font-weight: 600 !important;\n  padding: 10px 10px !important;\n  border-right: 1px solid rgba(255, 255, 255, 0.2) !important;\n  border-bottom: 3px solid #283593 !important;\n  white-space: nowrap;\n}\n.cs-table .table-head table tr th:last-child {\n  border-right: none !important;\n}\n/* ---- Table body row borders ---- */\n.cs-table .table-body table tr td {\n  border-right: 1px solid #e8e8e8;\n  border-bottom: 1px solid #e8e8e8;\n  padding: 8px 10px;\n  font-size: 12px;\n  color: #333;\n  vertical-align: middle;\n}\n.cs-table .table-body table tr td:last-child {\n  border-right: none;\n}\n.cs-table .table-body table tr:nth-child(even) td {\n  background: #f9fbff;\n}\n.cs-table .table-body table tr:hover td {\n  background: #eef2ff !important;\n}\n/* ---- Leave Earned clickable cell ---- */\n.leave-earned-cell {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  cursor: pointer;\n}\n.leave-earned-cell:hover .badge {\n  opacity: 0.8;\n}\n.formula-tag {\n  font-size: 10px;\n  color: #888;\n  background: #f0f0f0;\n  padding: 1px 5px;\n  border-radius: 8px;\n  font-weight: 600;\n}\n/* ---- Badges ---- */\n.badge {\n  display: inline-block;\n  padding: 2px 10px;\n  border-radius: 12px;\n  font-size: 13px;\n  font-weight: 600;\n}\n.badge-success {\n  background: #e6f4ea;\n  color: #1e7e34;\n}\n.badge-warning {\n  background: #fff3cd;\n  color: #856404;\n}\n.badge-info {\n  background: #e0f0ff;\n  color: #0056b3;\n}\n.badge-danger {\n  background: #ffe0e0;\n  color: #b30000;\n}\n/* ---- No data ---- */\n.no-data-found {\n  text-align: center;\n  padding: 40px;\n  color: #666;\n}"

/***/ }),

/***/ "./src/app/leave-management/leave-management-list/leave-management-list.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/leave-management/leave-management-list/leave-management-list.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: LeaveManagementListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeaveManagementListComponent", function() { return LeaveManagementListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng6-toastr-notifications */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/ng6-toastr-notifications/fesm5/ng6-toastr-notifications.js");
/* harmony import */ var src_services_DatabaseService__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/_services/DatabaseService */ "./src/_services/DatabaseService.ts");
/* harmony import */ var src_app_localstorage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/localstorage.service */ "./src/app/localstorage.service.ts");
/* harmony import */ var _leave_balance_edit_leave_balance_edit_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../leave-balance-edit/leave-balance-edit.component */ "./src/app/leave-management/leave-balance-edit/leave-balance-edit.component.ts");
/* harmony import */ var _leave_ledger_leave_ledger_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../leave-ledger/leave-ledger.component */ "./src/app/leave-management/leave-ledger/leave-ledger.component.ts");
/* harmony import */ var _leave_detail_leave_detail_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../leave-detail/leave-detail.component */ "./src/app/leave-management/leave-detail/leave-detail.component.ts");









var LeaveManagementListComponent = /** @class */ (function () {
    function LeaveManagementListComponent(serve, toast, dialogs, session) {
        this.serve = serve;
        this.toast = toast;
        this.dialogs = dialogs;
        this.session = session;
        this.login_data = {};
        this.leave_list = [];
        this.loader = false;
        this.calculating = false;
        this.datanotfound = false;
        this.search = {};
        this.months = [
            { value: 1, label: 'January' }, { value: 2, label: 'February' },
            { value: 3, label: 'March' }, { value: 4, label: 'April' },
            { value: 5, label: 'May' }, { value: 6, label: 'June' },
            { value: 7, label: 'July' }, { value: 8, label: 'August' },
            { value: 9, label: 'September' }, { value: 10, label: 'October' },
            { value: 11, label: 'November' }, { value: 12, label: 'December' }
        ];
        this.years = [];
        this.pagenumber = 1;
        this.start = 0;
        this.total_page = 0;
        this.pageCount = 0;
        this.sr_no = 0;
        this.page_limit = serve.pageLimit;
        var s = this.session.getSession();
        s = s.value;
        this.login_data = s ? s.data : {};
        var now = new Date();
        this.selected_month = now.getMonth() + 1;
        this.selected_year = now.getFullYear();
        var startYear = 2023;
        for (var y = now.getFullYear(); y >= startYear; y--) {
            this.years.push(y);
        }
    }
    LeaveManagementListComponent.prototype.ngOnInit = function () {
        this.getLeaveBalance();
    };
    LeaveManagementListComponent.prototype.getLeaveBalance = function () {
        var _this = this;
        this.loader = true;
        this.datanotfound = false;
        this.serve.post_rqst({
            month: this.selected_month,
            year: this.selected_year,
            start: this.start,
            pagelimit: this.page_limit,
            search: this.search
        }, 'LeaveManagement/getLeaveBalance').subscribe(function (result) {
            _this.loader = false;
            if (result['statusCode'] == 200) {
                _this.leave_list = result['result']['data'] || [];
                _this.pageCount = result['result']['count'];
                _this.pagenumber = Math.ceil(_this.start / _this.page_limit) + 1;
                _this.total_page = Math.ceil(_this.pageCount / _this.page_limit);
                _this.sr_no = (_this.pagenumber - 1) * _this.page_limit;
                _this.datanotfound = _this.leave_list.length === 0;
            }
            else {
                _this.datanotfound = true;
                _this.toast.errorToastr(result['statusMsg'] || 'Something went wrong');
            }
        }, function () {
            _this.loader = false;
            _this.datanotfound = true;
            _this.toast.errorToastr('Something went wrong');
        });
    };
    LeaveManagementListComponent.prototype.calculateLeave = function () {
        var _this = this;
        this.calculating = true;
        this.serve.post_rqst({
            month: this.selected_month,
            year: this.selected_year
        }, 'LeaveManagement/calculateLeave').subscribe(function (result) {
            _this.calculating = false;
            if (result['statusCode'] == 200) {
                _this.toast.successToastr(result['statusMsg'] || 'Leave calculated successfully');
                _this.start = 0;
                _this.getLeaveBalance();
            }
            else {
                _this.toast.errorToastr(result['statusMsg'] || 'Calculation failed');
            }
        }, function () {
            _this.calculating = false;
            _this.toast.errorToastr('Something went wrong');
        });
    };
    LeaveManagementListComponent.prototype.onMonthYearChange = function () {
        this.start = 0;
        this.getLeaveBalance();
    };
    LeaveManagementListComponent.prototype.previous = function () {
        this.start = Math.max(0, this.start - this.page_limit);
        this.getLeaveBalance();
    };
    LeaveManagementListComponent.prototype.nextPage = function () {
        this.start += this.page_limit;
        this.getLeaveBalance();
    };
    LeaveManagementListComponent.prototype.refresh = function () {
        this.search = {};
        this.start = 0;
        this.getLeaveBalance();
    };
    LeaveManagementListComponent.prototype.openDetail = function (row) {
        this.dialogs.open(_leave_detail_leave_detail_component__WEBPACK_IMPORTED_MODULE_8__["LeaveDetailComponent"], {
            width: '900px',
            maxWidth: '98vw',
            panelClass: 'cs-modal',
            disableClose: false,
            data: { row: row, month: this.selected_month, year: this.selected_year }
        });
    };
    LeaveManagementListComponent.prototype.openEditDialog = function (row) {
        var _this = this;
        var ref = this.dialogs.open(_leave_balance_edit_leave_balance_edit_component__WEBPACK_IMPORTED_MODULE_6__["LeaveBalanceEditComponent"], {
            width: '420px',
            panelClass: 'cs-modal',
            disableClose: true,
            data: { row: row }
        });
        ref.afterClosed().subscribe(function (res) {
            if (res) {
                _this.getLeaveBalance();
            }
        });
    };
    LeaveManagementListComponent.prototype.openLedger = function (row) {
        this.dialogs.open(_leave_ledger_leave_ledger_component__WEBPACK_IMPORTED_MODULE_7__["LeaveLedgerComponent"], {
            width: '700px',
            panelClass: 'cs-modal',
            disableClose: false,
            data: { row: row, month: this.selected_month, year: this.selected_year }
        });
    };
    LeaveManagementListComponent.prototype.getMonthName = function (m) {
        var found = this.months.find(function (x) { return x.value === m; });
        return found ? found.label : '';
    };
    LeaveManagementListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-leave-management-list',
            template: __webpack_require__(/*! ./leave-management-list.component.html */ "./src/app/leave-management/leave-management-list/leave-management-list.component.html"),
            styles: [__webpack_require__(/*! ./leave-management-list.component.scss */ "./src/app/leave-management/leave-management-list/leave-management-list.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_services_DatabaseService__WEBPACK_IMPORTED_MODULE_4__["DatabaseService"],
            ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_3__["ToastrManager"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"],
            src_app_localstorage_service__WEBPACK_IMPORTED_MODULE_5__["sessionStorage"]])
    ], LeaveManagementListComponent);
    return LeaveManagementListComponent;
}());



/***/ }),

/***/ "./src/app/leave-management/leave-management-module/leave-management.module.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/leave-management/leave-management-module/leave-management.module.ts ***!
  \*************************************************************************************/
/*! exports provided: LeaveManagementModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeaveManagementModule", function() { return LeaveManagementModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/material */ "./src/app/material.ts");
/* harmony import */ var src_app_app_utility_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/app-utility.module */ "./src/app/app-utility.module.ts");
/* harmony import */ var src_app_auth_component_guard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/auth-component.guard */ "./src/app/auth-component.guard.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _leave_management_list_leave_management_list_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../leave-management-list/leave-management-list.component */ "./src/app/leave-management/leave-management-list/leave-management-list.component.ts");
/* harmony import */ var _leave_balance_edit_leave_balance_edit_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../leave-balance-edit/leave-balance-edit.component */ "./src/app/leave-management/leave-balance-edit/leave-balance-edit.component.ts");
/* harmony import */ var _leave_ledger_leave_ledger_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../leave-ledger/leave-ledger.component */ "./src/app/leave-management/leave-ledger/leave-ledger.component.ts");
/* harmony import */ var _leave_detail_leave_detail_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../leave-detail/leave-detail.component */ "./src/app/leave-management/leave-detail/leave-detail.component.ts");













var routes = [
    {
        path: '',
        component: _leave_management_list_leave_management_list_component__WEBPACK_IMPORTED_MODULE_9__["LeaveManagementListComponent"],
        canActivate: [src_app_auth_component_guard__WEBPACK_IMPORTED_MODULE_7__["AuthComponentGuard"]],
        data: { expectedRole: ['1'] }
    }
];
var LeaveManagementModule = /** @class */ (function () {
    function LeaveManagementModule() {
    }
    LeaveManagementModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _leave_management_list_leave_management_list_component__WEBPACK_IMPORTED_MODULE_9__["LeaveManagementListComponent"],
                _leave_balance_edit_leave_balance_edit_component__WEBPACK_IMPORTED_MODULE_10__["LeaveBalanceEditComponent"],
                _leave_ledger_leave_ledger_component__WEBPACK_IMPORTED_MODULE_11__["LeaveLedgerComponent"],
                _leave_detail_leave_detail_component__WEBPACK_IMPORTED_MODULE_12__["LeaveDetailComponent"],
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                src_app_material__WEBPACK_IMPORTED_MODULE_5__["MaterialModule"],
                src_app_app_utility_module__WEBPACK_IMPORTED_MODULE_6__["AppUtilityModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatDatepickerModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatNativeDateModule"],
            ],
            entryComponents: [
                _leave_balance_edit_leave_balance_edit_component__WEBPACK_IMPORTED_MODULE_10__["LeaveBalanceEditComponent"],
                _leave_ledger_leave_ledger_component__WEBPACK_IMPORTED_MODULE_11__["LeaveLedgerComponent"],
                _leave_detail_leave_detail_component__WEBPACK_IMPORTED_MODULE_12__["LeaveDetailComponent"],
            ]
        })
    ], LeaveManagementModule);
    return LeaveManagementModule;
}());



/***/ })

}]);