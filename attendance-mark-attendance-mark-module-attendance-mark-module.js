(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["attendance-mark-attendance-mark-module-attendance-mark-module"],{

/***/ "./src/app/attendance-mark/attendance-mark-module/attendance-mark.module.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/attendance-mark/attendance-mark-module/attendance-mark.module.ts ***!
  \**********************************************************************************/
/*! exports provided: AttendanceMarkModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AttendanceMarkModule", function() { return AttendanceMarkModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/material */ "./src/app/material.ts");
/* harmony import */ var src_app_app_utility_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/app-utility.module */ "./src/app/app-utility.module.ts");
/* harmony import */ var src_app_auth_component_guard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/auth-component.guard */ "./src/app/auth-component.guard.ts");
/* harmony import */ var _attendance_mark_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../attendance-mark.component */ "./src/app/attendance-mark/attendance-mark.component.ts");
/* harmony import */ var src_app_shared_template_shared_template_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/shared-template/shared-template.module */ "./src/app/shared-template/shared-template.module.ts");










var routes = [
    {
        path: '',
        component: _attendance_mark_component__WEBPACK_IMPORTED_MODULE_8__["AttendanceMarkComponent"],
        canActivate: [src_app_auth_component_guard__WEBPACK_IMPORTED_MODULE_7__["AuthComponentGuard"]],
        data: { expectedRole: ['1'] }
    }
];
var AttendanceMarkModule = /** @class */ (function () {
    function AttendanceMarkModule() {
    }
    AttendanceMarkModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _attendance_mark_component__WEBPACK_IMPORTED_MODULE_8__["AttendanceMarkComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                src_app_material__WEBPACK_IMPORTED_MODULE_5__["MaterialModule"],
                src_app_app_utility_module__WEBPACK_IMPORTED_MODULE_6__["AppUtilityModule"],
                src_app_shared_template_shared_template_module__WEBPACK_IMPORTED_MODULE_9__["SharedTemplateModule"],
            ]
        })
    ], AttendanceMarkModule);
    return AttendanceMarkModule;
}());



/***/ }),

/***/ "./src/app/attendance-mark/attendance-mark.component.html":
/*!****************************************************************!*\
  !*** ./src/app/attendance-mark/attendance-mark.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-container\">\r\n\r\n  <!-- ===== HEADER ===== -->\r\n  <div class=\"tools-container\">\r\n    <h2>Attendance Marking</h2>\r\n    <div class=\"left-auto df ac flex-gap-10\">\r\n      <ng-container *ngIf=\"activeTab === 'mark'\">\r\n        <span *ngIf=\"saveLoader\" style=\"color:#888; font-size:13px;\">\r\n          Saving {{saveProgress.current}} / {{saveProgress.total}}...\r\n        </span>\r\n        <button mat-raised-button color=\"accent\"\r\n          [disabled]=\"dirtyCount === 0 || saveLoader\"\r\n          (click)=\"saveAllAttendance()\">\r\n          <i class=\"material-icons\" style=\"vertical-align:middle; margin-right:4px; font-size:18px;\">save</i>\r\n          {{saveLoader ? 'Saving...' : 'Save All (' + dirtyCount + ')'}}\r\n        </button>\r\n      </ng-container>\r\n      <ng-container *ngIf=\"activeTab === 'report'\">\r\n        <button mat-icon-button matTooltip=\"Refresh\" (click)=\"refreshReport()\">\r\n          <i class=\"material-icons\">refresh</i>\r\n        </button>\r\n      </ng-container>\r\n    </div>\r\n  </div>\r\n\r\n  <!-- ===== TABS ===== -->\r\n  <div class=\"tools-container\" style=\"padding-top:4px; padding-bottom:0;\">\r\n    <div class=\"mat-tabbar\">\r\n      <button mat-button [ngClass]=\"activeTab === 'mark' ? 'active' : ''\" (click)=\"switchTab('mark')\">\r\n        <i class=\"material-icons\">edit_calendar</i> Mark Attendance\r\n      </button>\r\n      <button mat-button [ngClass]=\"activeTab === 'report' ? 'active' : ''\" (click)=\"switchTab('report')\">\r\n        <i class=\"material-icons\">assessment</i> Attendance Report\r\n      </button>\r\n      <button mat-button [ngClass]=\"activeTab === 'pending' ? 'active' : ''\" (click)=\"switchTab('pending')\">\r\n        <i class=\"material-icons\">pending_actions</i> Pending Attendance\r\n      </button>\r\n      <button mat-button [ngClass]=\"activeTab === 'compare' ? 'active' : ''\" (click)=\"switchTab('compare')\">\r\n        <i class=\"material-icons\">compare_arrows</i> Compare (Biometric)\r\n      </button>\r\n    </div>\r\n  </div>\r\n\r\n\r\n  <!-- ===== TEMPLATE BAR (always visible) ===== -->\r\n  <div class=\"tmpl-bar\">\r\n    <span class=\"tmpl-bar-label\"><i class=\"material-icons\">bookmark</i> Templates:</span>\r\n    <div class=\"tmpl-bar-chips\" *ngIf=\"!loadingTemplates\">\r\n      <div class=\"tmpl-bar-chip\"\r\n        *ngFor=\"let tmpl of templates\"\r\n        [class.tmpl-bar-chip--active]=\"activeTemplateId === tmpl.id\"\r\n        (click)=\"applyTemplate(tmpl)\"\r\n        matTooltip=\"{{tmpl.user_ids?.length}} user(s)\">\r\n        <i class=\"material-icons\">people</i>\r\n        {{tmpl.template_name}}\r\n        <span class=\"tmpl-bar-count\">{{tmpl.user_ids?.length}}</span>\r\n        <i class=\"material-icons tmpl-edit-icon\"\r\n          (click)=\"$event.stopPropagation(); openTemplateEditor(tmpl)\"\r\n          matTooltip=\"Edit template\">edit</i>\r\n      </div>\r\n      <button class=\"tmpl-bar-clear\" *ngIf=\"activeTemplateId\" (click)=\"clearTemplate()\" matTooltip=\"Clear filter\">\r\n        <i class=\"material-icons\">close</i> Clear\r\n      </button>\r\n      <button class=\"tmpl-bar-new\" (click)=\"openTemplateEditor()\" matTooltip=\"Create new template\">\r\n        <i class=\"material-icons\">add</i> New\r\n      </button>\r\n    </div>\r\n    <div class=\"tmpl-bar-skeleton\" *ngIf=\"loadingTemplates\">\r\n      <div class=\"sk-tmpl\" *ngFor=\"let i of [1,2,3]\">&nbsp;</div>\r\n    </div>\r\n  </div>\r\n\r\n  <!-- Scrollable content wrapper -->\r\n  <div class=\"container\" style=\"height: calc(100% - 96px);\">\r\n\r\n  <!-- ================================================================ -->\r\n  <!-- TAB 1: MARK ATTENDANCE -->\r\n  <!-- ================================================================ -->\r\n  <ng-container *ngIf=\"activeTab === 'mark'\">\r\n\r\n    <!-- Filter + Stats Bar -->\r\n    <div class=\"am-filter-bar\">\r\n      <div class=\"am-filter-left\">\r\n        <div class=\"am-field\">\r\n          <label>Date</label>\r\n          <input type=\"date\" class=\"am-date-input\" [(ngModel)]=\"selectedDate\"\r\n            [max]=\"today\" (change)=\"loadUsersForMarking()\">\r\n        </div>\r\n        <div class=\"am-field\">\r\n          <label>Search</label>\r\n          <div class=\"am-search-wrap\">\r\n            <i class=\"material-icons\">search</i>\r\n            <input type=\"text\" class=\"am-search-input\" [(ngModel)]=\"nameSearch\"\r\n              (ngModelChange)=\"applyNameFilter()\" placeholder=\"Name / Emp ID...\">\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"am-stats\">\r\n        <div class=\"am-stat-card am-stat-green\">\r\n          <span class=\"am-stat-val\">{{markedCount}}</span>\r\n          <span class=\"am-stat-lbl\">Marked</span>\r\n        </div>\r\n        <div class=\"am-stat-card am-stat-red\">\r\n          <span class=\"am-stat-val\">{{pendingMarkCount}}</span>\r\n          <span class=\"am-stat-lbl\">Pending</span>\r\n        </div>\r\n        <div class=\"am-stat-card am-stat-blue\">\r\n          <span class=\"am-stat-val\">{{userList.length}}</span>\r\n          <span class=\"am-stat-lbl\">Total</span>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <!-- Loader -->\r\n    <div *ngIf=\"userLoader\" class=\"am-center-msg\">\r\n      <mat-spinner diameter=\"36\"></mat-spinner>\r\n      <span>Loading users...</span>\r\n    </div>\r\n\r\n    <!-- No data -->\r\n    <div *ngIf=\"!userLoader && filteredUserList.length === 0\" class=\"am-center-msg\">\r\n      <i class=\"material-icons\" style=\"font-size:48px; color:#ddd;\">people_outline</i>\r\n      <span style=\"color:#aaa;\">No users found</span>\r\n    </div>\r\n\r\n    <!-- Users Table -->\r\n    <div class=\"am-table-wrap\" *ngIf=\"!userLoader && filteredUserList.length > 0\">\r\n      <table class=\"am-table\">\r\n        <thead>\r\n          <tr>\r\n            <th class=\"col-sr\">#</th>\r\n            <th class=\"col-name\">Employee Name</th>\r\n            <th class=\"col-empid\">Emp ID</th>\r\n            <th class=\"col-desig\">Designation</th>\r\n            <th class=\"col-half-btns\">\r\n              <div class=\"th-bulk\">\r\n                <span>First Half</span>\r\n                <select class=\"am-bulk-select\" #fhBulk\r\n                  (change)=\"setAllHalf('fh', fhBulk.value); fhBulk.value = '';\"\r\n                  matTooltip=\"Apply to all listed users\">\r\n                  <option value=\"\">Set all...</option>\r\n                  <option *ngFor=\"let st of statusOptions\" [value]=\"st\">{{st}}</option>\r\n                </select>\r\n              </div>\r\n            </th>\r\n            <th class=\"col-half-btns\">\r\n              <div class=\"th-bulk\">\r\n                <span>Second Half</span>\r\n                <select class=\"am-bulk-select\" #shBulk\r\n                  (change)=\"setAllHalf('sh', shBulk.value); shBulk.value = '';\"\r\n                  matTooltip=\"Apply to all listed users\">\r\n                  <option value=\"\">Set all...</option>\r\n                  <option *ngFor=\"let st of statusOptions\" [value]=\"st\">{{st}}</option>\r\n                </select>\r\n              </div>\r\n            </th>\r\n            <th class=\"col-remarks\">Remarks</th>\r\n          </tr>\r\n        </thead>\r\n        <tbody>\r\n          <tr *ngFor=\"let user of filteredUserList; let i = index\"\r\n            [ngClass]=\"{'tr-dirty': user.isDirty}\">\r\n            <td class=\"col-sr td-sr\">{{i + 1}}</td>\r\n            <td class=\"col-name\">\r\n              <div class=\"am-user-cell\">\r\n                <div class=\"am-avatar\"\r\n                  [style.background]=\"getStatusColor(user.fh_status) || (getStatusColor(user.sh_status) || '#c0c0c0')\">\r\n                  {{user.name ? user.name[0].toUpperCase() : 'U'}}\r\n                </div>\r\n                <span class=\"am-user-name\">{{user.name | titlecase}}</span>\r\n              </div>\r\n            </td>\r\n            <td class=\"col-empid td-empid\">{{user.employee_id || '-'}}</td>\r\n            <td class=\"col-desig td-desig\">{{user.designation_name || '-'}}</td>\r\n\r\n            <!-- First Half -->\r\n            <td class=\"col-half-btns\">\r\n              <div class=\"half-input-row\">\r\n                <button class=\"half-btn\"\r\n                  [class.half-btn-active]=\"user.fh_status === 'Present'\"\r\n                  [style.--hbtn-color]=\"getStatusColor('Present')\"\r\n                  (click)=\"setHalf(user, 'fh', user.fh_status === 'Present' ? '' : 'Present')\">P</button>\r\n                <button class=\"half-btn\"\r\n                  [class.half-btn-active]=\"user.fh_status === 'Absent'\"\r\n                  [style.--hbtn-color]=\"getStatusColor('Absent')\"\r\n                  (click)=\"setHalf(user, 'fh', user.fh_status === 'Absent' ? '' : 'Absent')\">A</button>\r\n                <select class=\"am-status-select am-status-select--sm\"\r\n                  [(ngModel)]=\"user.fh_status\"\r\n                  (ngModelChange)=\"setHalf(user, 'fh', user.fh_status)\"\r\n                  [ngClass]=\"getStatusClass(user.fh_status)\">\r\n                  <option value=\"\">Other</option>\r\n                  <option *ngFor=\"let st of statusOptions\" [value]=\"st\">{{st}}</option>\r\n                </select>\r\n              </div>\r\n            </td>\r\n\r\n            <!-- Second Half -->\r\n            <td class=\"col-half-btns\">\r\n              <div class=\"half-input-row\">\r\n                <button class=\"half-btn\"\r\n                  [class.half-btn-active]=\"user.sh_status === 'Present'\"\r\n                  [style.--hbtn-color]=\"getStatusColor('Present')\"\r\n                  (click)=\"setHalf(user, 'sh', user.sh_status === 'Present' ? '' : 'Present')\">P</button>\r\n                <button class=\"half-btn\"\r\n                  [class.half-btn-active]=\"user.sh_status === 'Absent'\"\r\n                  [style.--hbtn-color]=\"getStatusColor('Absent')\"\r\n                  (click)=\"setHalf(user, 'sh', user.sh_status === 'Absent' ? '' : 'Absent')\">A</button>\r\n                <select class=\"am-status-select am-status-select--sm\"\r\n                  [(ngModel)]=\"user.sh_status\"\r\n                  (ngModelChange)=\"setHalf(user, 'sh', user.sh_status)\"\r\n                  [ngClass]=\"getStatusClass(user.sh_status)\">\r\n                  <option value=\"\">Other</option>\r\n                  <option *ngFor=\"let st of statusOptions\" [value]=\"st\">{{st}}</option>\r\n                </select>\r\n              </div>\r\n            </td>\r\n\r\n            <td class=\"col-remarks\">\r\n              <input class=\"am-remarks-input\" type=\"text\"\r\n                [(ngModel)]=\"user.remarks\"\r\n                (ngModelChange)=\"user.isDirty = true\"\r\n                placeholder=\"Add note...\">\r\n            </td>\r\n          </tr>\r\n        </tbody>\r\n      </table>\r\n    </div>\r\n\r\n    <!-- Sticky Save Bar -->\r\n    <div class=\"am-save-bar\" *ngIf=\"dirtyCount > 0\">\r\n      <span>\r\n        <i class=\"material-icons\">check_circle</i>\r\n        <strong>{{dirtyCount}}</strong> records ready to save for <strong>{{formatDate(selectedDate)}}</strong>\r\n      </span>\r\n      <button mat-raised-button [disabled]=\"saveLoader\" (click)=\"saveAllAttendance()\">\r\n        <i class=\"material-icons\">save</i>\r\n        {{saveLoader ? 'Saving...' : 'Save All'}}\r\n      </button>\r\n    </div>\r\n\r\n  </ng-container>\r\n\r\n\r\n  <!-- ================================================================ -->\r\n  <!-- TAB 2: ATTENDANCE REPORT -->\r\n  <!-- ================================================================ -->\r\n  <ng-container *ngIf=\"activeTab === 'report'\">\r\n\r\n    <div class=\"am-filter-bar\">\r\n      <div class=\"am-filter-left\" style=\"flex-wrap:wrap; gap:12px;\">\r\n        <div class=\"am-field\">\r\n          <label>Date From</label>\r\n          <input type=\"date\" class=\"am-date-input\" [(ngModel)]=\"reportDateFrom\">\r\n        </div>\r\n        <div class=\"am-field\">\r\n          <label>Date To</label>\r\n          <input type=\"date\" class=\"am-date-input\" [(ngModel)]=\"reportDateTo\">\r\n        </div>\r\n        <div class=\"am-field\">\r\n          <label>Search</label>\r\n          <div class=\"am-search-wrap\">\r\n            <i class=\"material-icons\">search</i>\r\n            <input type=\"text\" class=\"am-search-input\" [(ngModel)]=\"reportSearch\" placeholder=\"Name / Emp ID...\">\r\n          </div>\r\n        </div>\r\n        <div class=\"am-field\">\r\n          <label>Status</label>\r\n          <select class=\"am-date-input\" [(ngModel)]=\"reportStatusFilter\" style=\"width:140px;\">\r\n            <option value=\"\">All Status</option>\r\n            <option *ngFor=\"let st of statusOptions\" [value]=\"st\">{{st}}</option>\r\n          </select>\r\n        </div>\r\n        <div class=\"am-field\" style=\"justify-content:flex-end;\">\r\n          <label>&nbsp;</label>\r\n          <div class=\"df ac flex-gap-10\">\r\n            <button mat-raised-button color=\"primary\" style=\"height:38px;\" (click)=\"refreshReport()\">\r\n              <i class=\"material-icons\" style=\"font-size:16px; vertical-align:middle; margin-right:4px;\">search</i>Search\r\n            </button>\r\n            <button mat-raised-button style=\"height:38px; background:#27ae60; color:#fff;\"\r\n              [disabled]=\"excelDownloading || !reportDateFrom || !reportDateTo\"\r\n              (click)=\"downloadAttendanceExcel()\">\r\n              <i class=\"material-icons\" style=\"font-size:16px; vertical-align:middle; margin-right:4px;\">\r\n                {{excelDownloading ? 'hourglass_empty' : 'file_download'}}\r\n              </i>{{excelDownloading ? 'Generating...' : 'Download Excel'}}\r\n            </button>\r\n\r\n            <button mat-raised-button style=\"height:38px; background:#1565c0; color:#fff;\"\r\n              [disabled]=\"hrmsDownloading || !reportDateFrom || !reportDateTo\"\r\n              (click)=\"downloadHRMSReport()\">\r\n              <i class=\"material-icons\" style=\"font-size:16px; vertical-align:middle; margin-right:4px;\">\r\n                {{hrmsDownloading ? 'hourglass_empty' : 'description'}}\r\n              </i>{{hrmsDownloading ? 'Generating...' : 'HRMS Report'}}\r\n            </button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"am-stats\" *ngIf=\"reportCount > 0\">\r\n        <div class=\"am-stat-card am-stat-blue\">\r\n          <span class=\"am-stat-val\">{{reportCount}}</span>\r\n          <span class=\"am-stat-lbl\">Records</span>\r\n        </div>\r\n        <div class=\"am-stat-card am-stat-blue\" style=\"background:#f5f0ff; color:#7777eb;\">\r\n          <span class=\"am-stat-val\">{{reportPageNumber}}/{{reportTotalPage || 1}}</span>\r\n          <span class=\"am-stat-lbl\">Page</span>\r\n        </div>\r\n        <div class=\"df ac\" style=\"gap:4px;\">\r\n          <button mat-icon-button matTooltip=\"Previous\" (click)=\"reportPrev()\"\r\n            [disabled]=\"reportStart === 0 || reportLoader\">\r\n            <i class=\"material-icons\">navigate_before</i>\r\n          </button>\r\n          <button mat-icon-button matTooltip=\"Next\" (click)=\"reportNext()\"\r\n            [disabled]=\"reportPageNumber >= reportTotalPage || reportLoader\">\r\n            <i class=\"material-icons\">navigate_next</i>\r\n          </button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div *ngIf=\"reportLoader\" class=\"am-center-msg\">\r\n      <mat-spinner diameter=\"36\"></mat-spinner>\r\n      <span>Loading report...</span>\r\n    </div>\r\n\r\n    <div *ngIf=\"!reportLoader && reportList.length === 0\" class=\"am-center-msg\">\r\n      <i class=\"material-icons\" style=\"font-size:48px; color:#ddd;\">inbox</i>\r\n      <span style=\"color:#aaa;\">No records found. Select date range and click Search.</span>\r\n    </div>\r\n\r\n    <div class=\"am-table-wrap\" *ngIf=\"!reportLoader && reportList.length > 0\">\r\n      <table class=\"am-table\">\r\n        <thead>\r\n          <tr>\r\n            <th class=\"col-sr\">#</th>\r\n            <th class=\"col-name\">Employee Name</th>\r\n            <th class=\"col-empid\">Emp ID</th>\r\n            <th class=\"col-desig\">Designation</th>\r\n            <th style=\"width:100px;\">Date</th>\r\n            <th style=\"width:50px;\">Day</th>\r\n            <th style=\"width:130px;\">First Half</th>\r\n            <th style=\"width:130px;\">Second Half</th>\r\n            <th>Remarks</th>\r\n            <th style=\"width:110px;\">Marked By</th>\r\n            <th style=\"width:80px;\">Action</th>\r\n          </tr>\r\n        </thead>\r\n        <tbody>\r\n          <tr *ngFor=\"let row of reportList; let i = index\"\r\n            [ngClass]=\"{'tr-editing': row._editMode}\">\r\n            <td class=\"col-sr td-sr\">{{reportSrNo + i + 1}}</td>\r\n            <td class=\"col-name\" style=\"font-weight:500;\">{{row.name | titlecase}}</td>\r\n            <td class=\"col-empid td-empid\">{{row.employee_id || '-'}}</td>\r\n            <td class=\"col-desig td-desig\">{{row.designation_name || '-'}}</td>\r\n            <td style=\"font-size:12px; white-space:nowrap;\">{{formatDate(row.attendance_date)}}</td>\r\n            <td style=\"font-size:12px; color:#888;\">{{formatDay(row.attendance_date)}}</td>\r\n\r\n            <!-- First Half — view -->\r\n            <td *ngIf=\"!row._editMode\">\r\n              <span class=\"am-status-badge\"\r\n                [style.background]=\"getStatusColor(row.first_half_status) + '18'\"\r\n                [style.color]=\"getStatusColor(row.first_half_status)\"\r\n                [style.border-color]=\"getStatusColor(row.first_half_status)\"\r\n                *ngIf=\"row.first_half_status\">{{row.first_half_status}}</span>\r\n              <span *ngIf=\"!row.first_half_status\" style=\"color:#ccc; font-size:12px;\">-</span>\r\n            </td>\r\n            <!-- First Half — edit -->\r\n            <td *ngIf=\"row._editMode\">\r\n              <select class=\"am-status-select\" [(ngModel)]=\"row._editFH\" [ngClass]=\"getStatusClass(row._editFH)\">\r\n                <option value=\"\">-- FH --</option>\r\n                <option *ngFor=\"let st of statusOptions\" [value]=\"st\">{{st}}</option>\r\n              </select>\r\n            </td>\r\n\r\n            <!-- Second Half — view -->\r\n            <td *ngIf=\"!row._editMode\">\r\n              <span class=\"am-status-badge\"\r\n                [style.background]=\"getStatusColor(row.second_half_status) + '18'\"\r\n                [style.color]=\"getStatusColor(row.second_half_status)\"\r\n                [style.border-color]=\"getStatusColor(row.second_half_status)\"\r\n                *ngIf=\"row.second_half_status\">{{row.second_half_status}}</span>\r\n              <span *ngIf=\"!row.second_half_status\" style=\"color:#ccc; font-size:12px;\">-</span>\r\n            </td>\r\n            <!-- Second Half — edit -->\r\n            <td *ngIf=\"row._editMode\">\r\n              <select class=\"am-status-select\" [(ngModel)]=\"row._editSH\"\r\n                [ngClass]=\"getStatusClass(row._editSH)\">\r\n                <option value=\"\">-- SH --</option>\r\n                <option *ngFor=\"let st of statusOptions\" [value]=\"st\">{{st}}</option>\r\n              </select>\r\n            </td>\r\n\r\n            <!-- Remarks view -->\r\n            <td *ngIf=\"!row._editMode\" style=\"font-size:12px; color:#666;\">{{row.remarks || '-'}}</td>\r\n            <!-- Remarks edit -->\r\n            <td *ngIf=\"row._editMode\">\r\n              <input class=\"am-remarks-input\" type=\"text\" [(ngModel)]=\"row._editRemarks\" placeholder=\"Remarks...\">\r\n            </td>\r\n\r\n            <td style=\"font-size:12px; color:#888;\">{{row.marked_by_name || '-'}}</td>\r\n            <td>\r\n              <button *ngIf=\"!row._editMode\" mat-icon-button matTooltip=\"Edit\" style=\"color:#7777eb;\" (click)=\"openInlineEdit(row)\">\r\n                <i class=\"material-icons\" style=\"font-size:18px;\">edit</i>\r\n              </button>\r\n              <ng-container *ngIf=\"row._editMode\">\r\n                <button mat-icon-button matTooltip=\"Save\" style=\"color:#27ae60;\" [disabled]=\"row._saving\" (click)=\"saveInlineEdit(row)\">\r\n                  <i class=\"material-icons\" style=\"font-size:18px;\">{{row._saving ? 'hourglass_empty' : 'check_circle'}}</i>\r\n                </button>\r\n                <button mat-icon-button matTooltip=\"Cancel\" style=\"color:#e74c3c;\" [disabled]=\"row._saving\" (click)=\"cancelInlineEdit(row)\">\r\n                  <i class=\"material-icons\" style=\"font-size:18px;\">cancel</i>\r\n                </button>\r\n              </ng-container>\r\n            </td>\r\n          </tr>\r\n        </tbody>\r\n      </table>\r\n    </div>\r\n\r\n  </ng-container>\r\n\r\n\r\n  <!-- ================================================================ -->\r\n  <!-- TAB 3: PENDING ATTENDANCE -->\r\n  <!-- ================================================================ -->\r\n  <ng-container *ngIf=\"activeTab === 'pending'\">\r\n\r\n    <div class=\"am-filter-bar\">\r\n      <div class=\"am-filter-left\">\r\n        <div class=\"am-field\">\r\n          <label>Select Date</label>\r\n          <input type=\"date\" class=\"am-date-input\" [(ngModel)]=\"pendingDate\">\r\n        </div>\r\n        <div class=\"am-field\">\r\n          <label>Search</label>\r\n          <div class=\"am-search-wrap\">\r\n            <i class=\"material-icons\">search</i>\r\n            <input type=\"text\" class=\"am-search-input\" [(ngModel)]=\"pendingSearch\" placeholder=\"Name / Emp ID...\">\r\n          </div>\r\n        </div>\r\n        <div class=\"am-field\" style=\"justify-content:flex-end;\">\r\n          <label>&nbsp;</label>\r\n          <button mat-raised-button color=\"warn\" style=\"height:38px;\" (click)=\"loadPendingUsers()\">\r\n            <i class=\"material-icons\" style=\"font-size:16px; vertical-align:middle; margin-right:4px;\">pending_actions</i>Check Pending\r\n          </button>\r\n        </div>\r\n      </div>\r\n      <div class=\"am-stats\" *ngIf=\"!pendingLoader && pendingList.length > 0\">\r\n        <div class=\"am-stat-card am-stat-red\">\r\n          <span class=\"am-stat-val\">{{filteredPendingList.length}}</span>\r\n          <span class=\"am-stat-lbl\">Pending</span>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <!-- Banners -->\r\n    <div class=\"am-alert am-alert-warn\" *ngIf=\"!pendingLoader && pendingList.length > 0\">\r\n      <i class=\"material-icons\">warning_amber</i>\r\n      <strong>{{filteredPendingList.length}}</strong> users have pending attendance for <strong>{{formatDate(pendingDate)}}</strong>\r\n    </div>\r\n    <div class=\"am-alert am-alert-success\" *ngIf=\"!pendingLoader && pendingList.length === 0 && pendingDate\">\r\n      <i class=\"material-icons\">check_circle</i>\r\n      All users' attendance marked for <strong>{{formatDate(pendingDate)}}</strong>\r\n    </div>\r\n\r\n    <div *ngIf=\"pendingLoader\" class=\"am-center-msg\">\r\n      <mat-spinner diameter=\"36\"></mat-spinner>\r\n      <span>Loading...</span>\r\n    </div>\r\n\r\n    <div class=\"am-table-wrap\" *ngIf=\"!pendingLoader && filteredPendingList.length > 0\">\r\n      <table class=\"am-table\">\r\n        <thead>\r\n          <tr>\r\n            <th class=\"col-sr\">#</th>\r\n            <th class=\"col-name\">Employee Name</th>\r\n            <th class=\"col-empid\">Emp ID</th>\r\n            <th class=\"col-desig\">Designation</th>\r\n            <th style=\"width:130px;\">Contact</th>\r\n            <th style=\"width:110px;\">Action</th>\r\n          </tr>\r\n        </thead>\r\n        <tbody>\r\n          <tr *ngFor=\"let user of filteredPendingList; let i = index\">\r\n            <td class=\"col-sr td-sr\">{{i + 1}}</td>\r\n            <td class=\"col-name\">\r\n              <div class=\"am-user-cell\">\r\n                <div class=\"am-avatar\" style=\"background:#e74c3c;\">\r\n                  {{user.name ? user.name[0].toUpperCase() : 'U'}}\r\n                </div>\r\n                <span class=\"am-user-name\">{{user.name | titlecase}}</span>\r\n              </div>\r\n            </td>\r\n            <td class=\"col-empid td-empid\">{{user.employee_id || '-'}}</td>\r\n            <td class=\"col-desig td-desig\">{{user.designation_name || '-'}}</td>\r\n            <td style=\"font-size:12px;\">{{user.contact_01 || '-'}}</td>\r\n            <td>\r\n              <button mat-stroked-button color=\"primary\" style=\"font-size:11px; height:30px; line-height:30px;\"\r\n                (click)=\"switchTab('mark'); selectedDate = pendingDate; loadUsersForMarking();\">\r\n                <i class=\"material-icons\" style=\"font-size:14px; vertical-align:middle;\">edit</i> Mark Now\r\n              </button>\r\n            </td>\r\n          </tr>\r\n        </tbody>\r\n      </table>\r\n    </div>\r\n\r\n  </ng-container>\r\n\r\n  <!-- ================================================================ -->\r\n  <!-- ================= COMPARE (BIOMETRIC) TAB ========================= -->\r\n  <!-- ================================================================ -->\r\n  <ng-container *ngIf=\"activeTab === 'compare'\">\r\n\r\n    <div class=\"am-toolbar cmp-toolbar\">\r\n      <div class=\"cmp-field\">\r\n        <label>From</label>\r\n        <input type=\"date\" [(ngModel)]=\"compareDateFrom\" [max]=\"today\">\r\n      </div>\r\n      <div class=\"cmp-field\">\r\n        <label>To</label>\r\n        <input type=\"date\" [(ngModel)]=\"compareDateTo\" [max]=\"today\">\r\n      </div>\r\n      <div class=\"cmp-field\">\r\n        <label>Employee (optional)</label>\r\n        <input type=\"text\" [(ngModel)]=\"compareSearch\" placeholder=\"Name / Emp ID — blank = all\">\r\n      </div>\r\n      <button class=\"cmp-run-btn\" (click)=\"runCompare()\" [disabled]=\"compareLoader\">\r\n        <i class=\"material-icons\">compare_arrows</i>\r\n        {{ compareLoader ? 'Comparing...' : 'Compare All' }}\r\n      </button>\r\n      <button class=\"cmp-export-btn\" *ngIf=\"compareList.length > 0\" (click)=\"exportCompare()\">\r\n        <i class=\"material-icons\">download</i> Excel\r\n      </button>\r\n    </div>\r\n\r\n    <!-- Active template scope -->\r\n    <div class=\"am-alert am-alert-info cmp-scope\" *ngIf=\"activeTemplate\">\r\n      <i class=\"material-icons\">people</i>\r\n      Comparing only template <strong>{{activeTemplate.template_name}}</strong>\r\n      ({{activeTemplate.user_ids?.length || 0}} user(s)) — clear the template above to compare all users.\r\n    </div>\r\n\r\n    <!-- Loader -->\r\n    <div *ngIf=\"compareLoader\" class=\"am-center-msg\">\r\n      <i class=\"material-icons spin\">autorenew</i>\r\n      <p>Comparing all users with Biometric... this can take a few seconds.</p>\r\n    </div>\r\n\r\n    <!-- Summary -->\r\n    <div class=\"cmp-summary\" *ngIf=\"!compareLoader && compareRan\">\r\n      <div class=\"cmp-stat\"><span class=\"n\">{{ compareSummary.users_checked || 0 }}</span><span class=\"l\">Users Checked</span></div>\r\n      <div class=\"cmp-stat warn\"><span class=\"n\">{{ compareSummary.users_with_mismatch || 0 }}</span><span class=\"l\">Users with Mismatch</span></div>\r\n      <div class=\"cmp-stat bad\"><span class=\"n\">{{ compareSummary.total_mismatches || 0 }}</span><span class=\"l\">Total Mismatches</span></div>\r\n    </div>\r\n\r\n    <!-- No mismatch -->\r\n    <div class=\"am-alert am-alert-success\" *ngIf=\"!compareLoader && compareRan && compareList.length === 0\">\r\n      <i class=\"material-icons\">check_circle</i>\r\n      No mismatches found — Magnus and Biometric attendance match for the selected range.\r\n    </div>\r\n\r\n    <!-- Mismatch table -->\r\n    <div class=\"am-table-wrap\" *ngIf=\"!compareLoader && compareList.length > 0\">\r\n      <table class=\"am-table cmp-table\">\r\n        <thead>\r\n          <tr>\r\n            <th>Employee</th>\r\n            <th>Emp ID</th>\r\n            <th>Date</th>\r\n            <th>Half</th>\r\n            <th>Magnus</th>\r\n            <th>Biometric</th>\r\n            <th>Type</th>\r\n          </tr>\r\n        </thead>\r\n        <tbody>\r\n          <tr *ngFor=\"let r of compareList\">\r\n            <td>\r\n              <div class=\"cmp-emp\">{{ r.name }}</div>\r\n              <small>{{ r.designation }}</small>\r\n            </td>\r\n            <td>{{ r.employee_id }}</td>\r\n            <td>{{ r.date }} <small>{{ r.day }}</small></td>\r\n            <td>{{ r.half }}</td>\r\n            <td><span class=\"cmp-pill wig\">{{ r.wigwam }}</span></td>\r\n            <td><span class=\"cmp-pill sav\">{{ r.savitri }}</span></td>\r\n            <td>\r\n              <span class=\"cmp-type\"\r\n                [class.t-mismatch]=\"r.type === 'Status mismatch'\"\r\n                [class.t-notmarked]=\"r.type === 'Not marked in Magnus'\"\r\n                [class.t-missing]=\"r.type === 'Missing in Biometric'\">{{ r.type }}</span>\r\n            </td>\r\n          </tr>\r\n        </tbody>\r\n      </table>\r\n    </div>\r\n\r\n  </ng-container>\r\n\r\n  </div><!-- end .container -->\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/attendance-mark/attendance-mark.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/attendance-mark/attendance-mark.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".am-filter-bar {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: 16px;\n  padding: 16px 20px;\n  background: #fff;\n  border-bottom: 1px solid #eef0f3;\n  flex-wrap: wrap;\n}\n\n.am-filter-left {\n  display: flex;\n  align-items: flex-end;\n  gap: 12px;\n  flex-wrap: wrap;\n}\n\n.am-field {\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n}\n\n.am-field label {\n  font-size: 11px;\n  font-weight: 600;\n  color: #9aa3af;\n  text-transform: uppercase;\n  letter-spacing: 0.4px;\n}\n\n.am-date-input {\n  height: 38px;\n  padding: 0 12px;\n  border: 1.5px solid #e2e6ea;\n  border-radius: 8px;\n  font-size: 13px;\n  color: #333;\n  background: #fafbfc;\n  outline: none;\n  width: 160px;\n  transition: border-color 0.2s;\n}\n\n.am-date-input:focus {\n  border-color: #7777eb;\n  background: #fff;\n}\n\n.am-search-wrap {\n  display: flex;\n  align-items: center;\n  height: 38px;\n  border: 1.5px solid #e2e6ea;\n  border-radius: 8px;\n  background: #fafbfc;\n  padding: 0 10px;\n  gap: 6px;\n  width: 220px;\n  transition: border-color 0.2s;\n}\n\n.am-search-wrap:focus-within {\n  border-color: #7777eb;\n  background: #fff;\n}\n\n.am-search-wrap .material-icons {\n  font-size: 18px;\n  color: #b0b8c1;\n}\n\n.am-search-input {\n  border: none;\n  outline: none;\n  background: transparent;\n  font-size: 13px;\n  color: #333;\n  width: 100%;\n}\n\n.am-search-input::-moz-placeholder {\n  color: #b0b8c1;\n}\n\n.am-search-input::placeholder {\n  color: #b0b8c1;\n}\n\n.am-mark-all {\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n}\n\n.am-mark-all label {\n  font-size: 11px;\n  font-weight: 600;\n  color: #9aa3af;\n  text-transform: uppercase;\n  letter-spacing: 0.4px;\n}\n\n.am-quick-btns {\n  display: flex;\n  gap: 6px;\n  align-items: center;\n}\n\n.am-quick-btn {\n  height: 32px;\n  padding: 0 12px;\n  border: none;\n  border-radius: 6px;\n  color: #fff;\n  font-size: 12px;\n  font-weight: 600;\n  cursor: pointer;\n  opacity: 0.85;\n  transition: opacity 0.15s, transform 0.1s;\n}\n\n.am-quick-btn:hover {\n  opacity: 1;\n  transform: translateY(-1px);\n}\n\n.am-stats {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n\n.am-stat-card {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  min-width: 72px;\n  padding: 8px 14px;\n  border-radius: 10px;\n}\n\n.am-stat-card .am-stat-val {\n  font-size: 20px;\n  font-weight: 700;\n  line-height: 1.1;\n}\n\n.am-stat-card .am-stat-lbl {\n  font-size: 11px;\n  font-weight: 600;\n  opacity: 0.75;\n  margin-top: 2px;\n}\n\n.am-stat-green {\n  background: #eafaf1;\n  color: #27ae60;\n}\n\n.am-stat-red {\n  background: #fdf0f0;\n  color: #e74c3c;\n}\n\n.am-stat-blue {\n  background: #eef2ff;\n  color: #7777eb;\n}\n\n.am-table-wrap {\n  padding: 0 20px 100px;\n  overflow-x: auto;\n  overflow-y: visible;\n}\n\n.am-table {\n  width: 100%;\n  border-collapse: separate;\n  border-spacing: 0;\n  border: 1px solid #e8ecf0;\n  border-radius: 10px;\n  overflow: hidden;\n  background: #fff;\n  margin-top: 16px;\n}\n\n.am-table thead tr {\n  background: #f7f8fa;\n}\n\n.am-table thead tr th {\n  padding: 13px 16px;\n  text-align: left;\n  font-size: 12px;\n  font-weight: 700;\n  color: #5a6475;\n  text-transform: uppercase;\n  letter-spacing: 0.4px;\n  border-bottom: 2px solid #e8ecf0;\n  white-space: nowrap;\n}\n\n.am-table thead tr th:first-child {\n  border-radius: 0;\n}\n\n.am-table tbody tr {\n  transition: background 0.12s;\n}\n\n.am-table tbody tr:hover {\n  background: #f9faff;\n}\n\n.am-table tbody tr:not(:last-child) td {\n  border-bottom: 1px solid #f0f2f5;\n}\n\n.am-table tbody tr td {\n  padding: 12px 16px;\n  font-size: 13px;\n  color: #333;\n  vertical-align: middle;\n}\n\n.am-table tbody tr.tr-present td:first-child {\n  border-left: 4px solid #27ae60;\n}\n\n.am-table tbody tr.tr-absent td:first-child {\n  border-left: 4px solid #e74c3c;\n}\n\n.am-table tbody tr.tr-halfday td:first-child {\n  border-left: 4px solid #f39c12;\n}\n\n.am-table tbody tr.tr-shortleave td:first-child {\n  border-left: 4px solid #e67e22;\n}\n\n.am-table tbody tr.tr-holiday td:first-child {\n  border-left: 4px solid #2980b9;\n}\n\n.am-table tbody tr.tr-sunday td:first-child {\n  border-left: 4px solid #7f8c8d;\n}\n\n.am-table tbody tr.tr-editing {\n  background: #fffde7 !important;\n}\n\n.am-table tbody tr.tr-dirty td:first-child {\n  border-left: 4px solid #f39c12;\n}\n\n.th-bulk {\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  gap: 4px;\n}\n\n.am-bulk-select {\n  width: 100px;\n  height: 24px;\n  padding: 0 4px;\n  border: 1.5px solid #d8dee6;\n  border-radius: 6px;\n  background: #fff;\n  font-size: 10px;\n  font-weight: 600;\n  color: #555;\n  text-transform: none;\n  letter-spacing: 0;\n  cursor: pointer;\n  outline: none;\n}\n\n.am-bulk-select:hover {\n  border-color: #7777eb;\n  color: #7777eb;\n}\n\n.am-bulk-select:focus {\n  border-color: #7777eb;\n}\n\n.col-sr {\n  width: 48px;\n  text-align: center;\n}\n\n.col-name {\n  min-width: 180px;\n}\n\n.col-empid {\n  width: 90px;\n}\n\n.col-desig {\n  width: 180px;\n}\n\n.col-half {\n  width: 145px;\n}\n\n.col-half-btns {\n  width: 175px;\n}\n\n.col-status {\n  width: 145px;\n}\n\n.col-remarks {\n  width: 150px;\n}\n\n.td-sr {\n  text-align: center;\n  color: #aaa;\n  font-size: 12px;\n}\n\n.td-empid {\n  color: #888;\n  font-size: 12px;\n}\n\n.td-desig {\n  color: #888;\n  font-size: 12px;\n}\n\n.am-user-cell {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n\n.am-avatar {\n  width: 34px;\n  height: 34px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #fff;\n  font-weight: 700;\n  font-size: 13px;\n  flex-shrink: 0;\n}\n\n.am-user-name {\n  font-weight: 600;\n  font-size: 13px;\n  color: #2c3345;\n}\n\n.half-input-row {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n}\n\n.half-btn-group {\n  display: flex;\n  gap: 3px;\n  flex-wrap: nowrap;\n  align-items: center;\n}\n\n.half-btn {\n  width: 26px;\n  height: 26px;\n  border: 1.5px solid var(--hbtn-color, #ccc);\n  border-radius: 5px;\n  background: transparent;\n  color: var(--hbtn-color, #888);\n  font-size: 10px;\n  font-weight: 700;\n  cursor: pointer;\n  padding: 0;\n  line-height: 1;\n  transition: background 0.15s, color 0.15s, transform 0.1s;\n  opacity: 0.75;\n}\n\n.half-btn:hover {\n  opacity: 1;\n  transform: translateY(-1px);\n}\n\n.half-btn-active {\n  background: var(--hbtn-color, #888) !important;\n  color: #fff !important;\n  opacity: 1 !important;\n  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);\n}\n\n.am-status-select--sm {\n  width: 76px !important;\n  font-size: 11px !important;\n  height: 28px !important;\n  padding: 0 4px !important;\n}\n\n.am-status-select {\n  width: 138px;\n  height: 34px;\n  padding: 0 8px;\n  border: 1.5px solid #e2e6ea;\n  border-radius: 8px;\n  font-size: 12px;\n  font-weight: 600;\n  background: #fafbfc;\n  cursor: pointer;\n  outline: none;\n  transition: border-color 0.15s;\n}\n\n.am-status-select:focus {\n  border-color: #7777eb;\n}\n\n.sel-present {\n  border-color: #27ae60 !important;\n  color: #27ae60 !important;\n  background: #eafaf1 !important;\n}\n\n.sel-absent {\n  border-color: #e74c3c !important;\n  color: #e74c3c !important;\n  background: #fdf0f0 !important;\n}\n\n.sel-leave {\n  border-color: #c0392b !important;\n  color: #c0392b !important;\n  background: #fdf0ef !important;\n}\n\n.sel-holiday {\n  border-color: #2980b9 !important;\n  color: #2980b9 !important;\n  background: #eaf4fc !important;\n}\n\n.sel-sunday {\n  border-color: #7f8c8d !important;\n  color: #7f8c8d !important;\n  background: #f5f6f7 !important;\n}\n\n.am-status-badge {\n  display: inline-block;\n  padding: 4px 12px;\n  border-radius: 20px;\n  border: 1.5px solid;\n  font-size: 11px;\n  font-weight: 700;\n  white-space: nowrap;\n}\n\n.am-remarks-input {\n  width: 140px;\n  height: 32px;\n  padding: 0 10px;\n  border: 1.5px solid #e2e6ea;\n  border-radius: 8px;\n  font-size: 12px;\n  outline: none;\n  background: #fafbfc;\n  transition: border-color 0.15s;\n}\n\n.am-remarks-input:focus {\n  border-color: #7777eb;\n  background: #fff;\n}\n\n.am-remarks-input::-moz-placeholder {\n  color: #c0c8d0;\n}\n\n.am-remarks-input::placeholder {\n  color: #c0c8d0;\n}\n\n.am-save-bar {\n  position: sticky;\n  bottom: 0;\n  left: 0;\n  right: 0;\n  background: #7777eb;\n  color: #fff;\n  padding: 14px 24px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  box-shadow: 0 -4px 16px rgba(119, 119, 235, 0.25);\n  z-index: 50;\n}\n\n.am-save-bar span {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 14px;\n}\n\n.am-save-bar span .material-icons {\n  font-size: 20px;\n}\n\n.am-save-bar button {\n  background: #fff !important;\n  color: #7777eb !important;\n  font-weight: 700;\n  height: 38px;\n}\n\n.am-save-bar button .material-icons {\n  vertical-align: middle;\n  margin-right: 4px;\n  font-size: 18px;\n}\n\n.am-alert {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 12px 20px;\n  font-size: 13px;\n  border-left: 4px solid;\n}\n\n.am-alert .material-icons {\n  font-size: 20px;\n}\n\n.am-alert-warn {\n  background: #fffbea;\n  border-color: #f39c12;\n  color: #7d5a00;\n}\n\n.am-alert-success {\n  background: #edfaf3;\n  border-color: #27ae60;\n  color: #155a30;\n}\n\n.am-alert-info {\n  background: #f2f4ff;\n  border-color: #7777eb;\n  color: #3a3a8c;\n}\n\n.cmp-scope {\n  margin: 0 0 10px;\n}\n\n.am-center-msg {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 12px;\n  padding: 60px 20px;\n  color: #aaa;\n  font-size: 14px;\n}\n\n.tmpl-bar {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 8px 16px;\n  background: #FAF5FF;\n  border-bottom: 1px solid #EDE9FE;\n  flex-wrap: wrap;\n}\n\n.tmpl-bar-label {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  font-size: 12px;\n  font-weight: 700;\n  color: #7C3AED;\n  white-space: nowrap;\n}\n\n.tmpl-bar-label i {\n  font-size: 16px;\n}\n\n.tmpl-bar-chips {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px;\n  align-items: center;\n}\n\n.tmpl-bar-chip {\n  display: flex;\n  align-items: center;\n  gap: 5px;\n  background: #EDE9FE;\n  border: 1.5px solid #DDD6FE;\n  border-radius: 99px;\n  padding: 4px 12px;\n  font-size: 12px;\n  font-weight: 600;\n  color: #5B21B6;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n\n.tmpl-bar-chip i {\n  font-size: 14px;\n}\n\n.tmpl-bar-chip:hover {\n  background: #DDD6FE;\n  border-color: #7C3AED;\n}\n\n.tmpl-bar-chip--active {\n  background: #7C3AED;\n  border-color: #7C3AED;\n  color: #fff;\n  box-shadow: 0 2px 8px rgba(124, 58, 237, 0.3);\n}\n\n.tmpl-bar-count {\n  background: rgba(255, 255, 255, 0.3);\n  border-radius: 99px;\n  padding: 0 6px;\n  font-size: 11px;\n  font-weight: 700;\n}\n\n.tmpl-edit-icon {\n  font-size: 14px !important;\n  opacity: 0.6;\n  margin-left: 2px;\n  transition: opacity 0.15s;\n}\n\n.tmpl-edit-icon:hover {\n  opacity: 1;\n}\n\n.tmpl-bar-new {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  background: none;\n  border: 1.5px dashed #a78bfa;\n  border-radius: 99px;\n  padding: 4px 10px;\n  font-size: 12px;\n  font-weight: 600;\n  color: #7C3AED;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n\n.tmpl-bar-new i {\n  font-size: 14px;\n}\n\n.tmpl-bar-new:hover {\n  background: #EDE9FE;\n  border-style: solid;\n  border-color: #7C3AED;\n}\n\n.tmpl-bar-clear {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  background: none;\n  border: 1.5px solid #fca5a5;\n  border-radius: 99px;\n  padding: 4px 10px;\n  font-size: 12px;\n  font-weight: 600;\n  color: #dc2626;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n\n.tmpl-bar-clear i {\n  font-size: 14px;\n}\n\n.tmpl-bar-clear:hover {\n  background: #fee2e2;\n  border-color: #dc2626;\n}\n\n.tmpl-bar-skeleton {\n  display: flex;\n  gap: 8px;\n  padding: 8px 0;\n}\n\n.sk-tmpl {\n  height: 28px;\n  width: 110px;\n  border-radius: 99px;\n  background: linear-gradient(90deg, #ede9fe 25%, #ddd6fe 50%, #ede9fe 75%);\n  background-size: 200% 100%;\n  animation: shimmer 1.5s infinite;\n}\n\n@keyframes shimmer {\n  0% {\n    background-position: 200% 0;\n  }\n  100% {\n    background-position: -200% 0;\n  }\n}\n\n/* ===================== Compare (Biometric) tab ===================== */\n\n.cmp-toolbar {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: flex-end;\n  gap: 14px;\n}\n\n.cmp-toolbar .cmp-field {\n  display: flex;\n  flex-direction: column;\n}\n\n.cmp-toolbar .cmp-field label {\n  font-size: 11px;\n  font-weight: 600;\n  color: #6b7280;\n  margin-bottom: 5px;\n  text-transform: uppercase;\n  letter-spacing: 0.3px;\n}\n\n.cmp-toolbar .cmp-field input {\n  height: 38px;\n  border: 1px solid #d1d5db;\n  border-radius: 8px;\n  padding: 0 12px;\n  font-size: 14px;\n  outline: none;\n  min-width: 180px;\n}\n\n.cmp-toolbar .cmp-field input:focus {\n  border-color: #6d5bd0;\n  box-shadow: 0 0 0 3px rgba(109, 91, 208, 0.15);\n}\n\n.cmp-run-btn {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  height: 38px;\n  padding: 0 18px;\n  border: none;\n  border-radius: 8px;\n  background: #6d5bd0;\n  color: #fff;\n  font-size: 14px;\n  font-weight: 600;\n  cursor: pointer;\n}\n\n.cmp-run-btn i {\n  font-size: 18px;\n}\n\n.cmp-run-btn:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n\n.cmp-export-btn {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  height: 38px;\n  padding: 0 16px;\n  border: 1px solid #10b981;\n  border-radius: 8px;\n  background: #fff;\n  color: #059669;\n  font-size: 13px;\n  font-weight: 600;\n  cursor: pointer;\n}\n\n.cmp-export-btn i {\n  font-size: 18px;\n}\n\n.cmp-summary {\n  display: flex;\n  gap: 14px;\n  flex-wrap: wrap;\n  margin: 18px 0 6px;\n}\n\n.cmp-summary .cmp-stat {\n  flex: 1;\n  min-width: 150px;\n  background: #fff;\n  border: 1px solid #e5e7eb;\n  border-radius: 12px;\n  padding: 16px;\n  text-align: center;\n  box-shadow: 0 1px 3px rgba(16, 24, 40, 0.05);\n}\n\n.cmp-summary .cmp-stat .n {\n  display: block;\n  font-size: 28px;\n  font-weight: 700;\n  color: #111827;\n  line-height: 1.1;\n}\n\n.cmp-summary .cmp-stat .l {\n  font-size: 12px;\n  color: #6b7280;\n}\n\n.cmp-summary .cmp-stat.warn .n {\n  color: #b45309;\n}\n\n.cmp-summary .cmp-stat.bad .n {\n  color: #b91c1c;\n}\n\n.cmp-table small {\n  color: #94a3b8;\n  font-size: 11px;\n  margin-left: 4px;\n}\n\n.cmp-table .cmp-emp {\n  font-weight: 600;\n  color: #111827;\n}\n\n.cmp-table .cmp-pill {\n  display: inline-block;\n  padding: 3px 9px;\n  border-radius: 999px;\n  font-size: 12px;\n  font-weight: 600;\n}\n\n.cmp-table .cmp-pill.wig {\n  background: #eef2ff;\n  color: #3730a3;\n}\n\n.cmp-table .cmp-pill.sav {\n  background: #f0fdf4;\n  color: #166534;\n}\n\n.cmp-table .cmp-type {\n  display: inline-block;\n  padding: 3px 9px;\n  border-radius: 6px;\n  font-size: 12px;\n  font-weight: 600;\n}\n\n.cmp-table .cmp-type.t-mismatch {\n  background: #fee2e2;\n  color: #b91c1c;\n}\n\n.cmp-table .cmp-type.t-notmarked {\n  background: #fef3c7;\n  color: #b45309;\n}\n\n.cmp-table .cmp-type.t-missing {\n  background: #e0e7ff;\n  color: #4338ca;\n}\n\n.spin {\n  animation: cmp-spin 1s linear infinite;\n}\n\n@keyframes cmp-spin {\n  to {\n    transform: rotate(360deg);\n  }\n}"

/***/ }),

/***/ "./src/app/attendance-mark/attendance-mark.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/attendance-mark/attendance-mark.component.ts ***!
  \**************************************************************/
/*! exports provided: AttendanceMarkComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AttendanceMarkComponent", function() { return AttendanceMarkComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_services_DatabaseService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/_services/DatabaseService */ "./src/_services/DatabaseService.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! file-saver */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/file-saver/dist/FileSaver.min.js");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng6-toastr-notifications */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/ng6-toastr-notifications/fesm5/ng6-toastr-notifications.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _reports_template_editor_dialog_template_editor_dialog_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../reports/template-editor-dialog/template-editor-dialog.component */ "./src/app/reports/template-editor-dialog/template-editor-dialog.component.ts");








var AttendanceMarkComponent = /** @class */ (function () {
    function AttendanceMarkComponent(serve, toast, dialog) {
        this.serve = serve;
        this.toast = toast;
        this.dialog = dialog;
        this.activeTab = 'mark'; // 'mark' | 'report' | 'pending'
        this.loggedInUser = {};
        // ---- Mark Attendance ----
        this.selectedDate = '';
        this.nameSearch = '';
        this.userList = [];
        this.filteredUserList = [];
        this.userLoader = false;
        this.saveLoader = false;
        this.saveProgress = { current: 0, total: 0 };
        // ---- Report Tab ----
        this.reportDateFrom = '';
        this.reportDateTo = '';
        this.reportSearch = '';
        this.reportStatusFilter = '';
        this.reportList = [];
        this.reportLoader = false;
        this.reportStart = 0;
        this.reportPageLimit = 50;
        this.reportPageNumber = 1;
        this.reportTotalPage = 0;
        this.reportCount = 0;
        this.reportSrNo = 0;
        // ---- Pending Tab ----
        this.pendingDate = '';
        this.pendingSearch = '';
        this.pendingList = [];
        this.pendingLoader = false;
        // ---- Compare (Biometric) Tab ----
        this.compareDateFrom = '';
        this.compareDateTo = '';
        this.compareSearch = '';
        this.compareList = [];
        this.compareSummary = {};
        this.compareLoader = false;
        this.compareRan = false;
        this.today = moment__WEBPACK_IMPORTED_MODULE_3__().format('YYYY-MM-DD');
        this.excelDownloading = false;
        this.statusOptions = ['Present', 'Absent', 'Leave', 'Holiday', 'Sunday'];
        this.statusColorMap = {
            'Present': '#27ae60',
            'Absent': '#e74c3c',
            'Leave': '#c0392b',
            'Holiday': '#2980b9',
            'Sunday': '#7f8c8d'
        };
        // ---- Templates ----
        this.templates = [];
        this.loadingTemplates = false;
        this.activeTemplateId = null;
        this.activeTemplate = null;
        // =========================================================
        // HRMS REPORT
        // =========================================================
        this.hrmsDownloading = false;
        this.loggedInUser = JSON.parse(localStorage.getItem('st_user') || '{}');
        this.uid = this.loggedInUser['data']['id'];
        this.uname = this.loggedInUser['data']['name'];
        this.selectedDate = moment__WEBPACK_IMPORTED_MODULE_3__().format('YYYY-MM-DD');
        this.reportDateFrom = moment__WEBPACK_IMPORTED_MODULE_3__().startOf('month').format('YYYY-MM-DD');
        this.reportDateTo = moment__WEBPACK_IMPORTED_MODULE_3__().format('YYYY-MM-DD');
        this.pendingDate = moment__WEBPACK_IMPORTED_MODULE_3__().format('YYYY-MM-DD');
        this.compareDateFrom = moment__WEBPACK_IMPORTED_MODULE_3__().startOf('month').format('YYYY-MM-DD');
        this.compareDateTo = moment__WEBPACK_IMPORTED_MODULE_3__().format('YYYY-MM-DD');
    }
    AttendanceMarkComponent.prototype.ngOnInit = function () {
        this.loadUsersForMarking();
        this.loadTemplates();
    };
    // =========================================================
    // TEMPLATES
    // =========================================================
    AttendanceMarkComponent.prototype.loadTemplates = function () {
        var _this = this;
        this.loadingTemplates = true;
        this.serve.post_rqst({}, 'Master/getBulkTemplates').subscribe(function (res) {
            _this.loadingTemplates = false;
            if (res['statusCode'] == 200) {
                _this.templates = res['templates'] || [];
            }
            else {
                _this.templates = [];
            }
        }, function (err) {
            console.error('loadTemplates error:', err);
            _this.loadingTemplates = false;
            _this.templates = [];
        });
    };
    AttendanceMarkComponent.prototype.applyTemplate = function (tmpl) {
        this.activeTemplateId = tmpl.id;
        this.activeTemplate = tmpl;
        var userIds = tmpl.user_ids || [];
        // Filter userList to template users only, then sort by template order
        var orderMap = new Map(userIds.map(function (id, idx) { return [+id, idx]; }));
        this.filteredUserList = this.userList
            .filter(function (u) { return orderMap.has(+u.id); })
            .sort(function (a, b) { return (orderMap.get(+a.id) || 0) - (orderMap.get(+b.id) || 0); });
        this.nameSearch = '';
        this.toast.successToastr("\"" + tmpl.template_name + "\" applied \u2014 " + userIds.length + " user(s)");
        this.resetCompareOnTemplateChange();
    };
    AttendanceMarkComponent.prototype.clearTemplate = function () {
        this.activeTemplateId = null;
        this.activeTemplate = null;
        this.nameSearch = '';
        this.filteredUserList = this.userList.slice();
        this.resetCompareOnTemplateChange();
    };
    // Compare results belong to the previous template — drop them (re-run if the tab is open).
    AttendanceMarkComponent.prototype.resetCompareOnTemplateChange = function () {
        if (!this.compareRan && !this.compareList.length) {
            return;
        }
        this.compareList = [];
        this.compareSummary = {};
        this.compareRan = false;
        if (this.activeTab === 'compare') {
            this.runCompare();
        }
    };
    AttendanceMarkComponent.prototype.openTemplateEditor = function (tmpl) {
        var _this = this;
        if (tmpl === void 0) { tmpl = null; }
        var ref = this.dialog.open(_reports_template_editor_dialog_template_editor_dialog_component__WEBPACK_IMPORTED_MODULE_7__["TemplateEditorDialogComponent"], {
            data: { template: tmpl },
            panelClass: 'padding0',
            disableClose: false,
            width: '800px'
        });
        ref.afterClosed().subscribe(function (result) {
            if (result && result.saved) {
                _this.loadTemplates();
            }
        });
    };
    AttendanceMarkComponent.prototype.sortByTemplateOrder = function (data, userIds) {
        if (!userIds || userIds.length === 0)
            return data;
        var orderMap = new Map(userIds.map(function (id, idx) { return [+id, idx]; }));
        return data.slice().sort(function (a, b) {
            var ai = orderMap.has(+a.id) ? orderMap.get(+a.id) : 9999;
            var bi = orderMap.has(+b.id) ? orderMap.get(+b.id) : 9999;
            return ai - bi;
        });
    };
    AttendanceMarkComponent.prototype.switchTab = function (tab) {
        this.activeTab = tab;
        if (tab === 'report' && this.reportList.length === 0) {
            this.loadReport();
        }
        if (tab === 'pending' && this.pendingList.length === 0) {
            this.loadPendingUsers();
        }
    };
    // =========================================================
    // TAB 4 — COMPARE WITH BIOMETRIC
    // =========================================================
    AttendanceMarkComponent.prototype.runCompare = function () {
        var _this = this;
        if (!this.compareDateFrom || !this.compareDateTo) {
            this.toast.errorToastr('Please select From and To dates.');
            return;
        }
        if (this.compareDateFrom > this.compareDateTo) {
            this.toast.errorToastr('From date cannot be after To date.');
            return;
        }
        this.compareLoader = true;
        this.compareRan = false;
        this.compareList = [];
        this.compareSummary = {};
        // Only compare the template's users when a template is applied
        var userIds = this.activeTemplate ? (this.activeTemplate.user_ids || []) : [];
        this.serve.post_rqst({
            date_from: this.compareDateFrom,
            date_to: this.compareDateTo,
            search: this.compareSearch || '',
            user_ids: userIds
        }, 'Attendance/compareAttendanceWithBiometric').subscribe(function (res) {
            _this.compareLoader = false;
            _this.compareRan = true;
            if (res && res['statusCode'] == 200) {
                var rows = res['mismatches'] || [];
                _this.compareList = _this.sortCompareByTemplateOrder(rows, userIds);
                _this.compareSummary = res['summary'] || {};
            }
            else {
                _this.toast.errorToastr((res && res['statusMsg']) ? res['statusMsg'] : 'Comparison failed.');
            }
        }, function () {
            _this.compareLoader = false;
            _this.compareRan = true;
            _this.toast.errorToastr('Something went wrong. Please try again.');
        });
    };
    // Compare rows carry user_id (not id), so they need their own sorter.
    AttendanceMarkComponent.prototype.sortCompareByTemplateOrder = function (rows, userIds) {
        if (!userIds || userIds.length === 0) {
            return rows;
        }
        var orderMap = new Map(userIds.map(function (id, idx) { return [+id, idx]; }));
        return rows.slice().sort(function (a, b) {
            var ai = orderMap.has(+a.user_id) ? orderMap.get(+a.user_id) : 9999;
            var bi = orderMap.has(+b.user_id) ? orderMap.get(+b.user_id) : 9999;
            if (ai !== bi) {
                return ai - bi;
            }
            return String(a.date).localeCompare(String(b.date));
        });
    };
    AttendanceMarkComponent.prototype.exportCompare = function () {
        if (!this.compareList.length) {
            return;
        }
        var header = ['Employee', 'Emp ID', 'Designation', 'Date', 'Day', 'Half', 'Magnus', 'Biometric', 'Type'];
        var esc = function (v) { return '"' + String(v == null ? '' : v).replace(/"/g, '""') + '"'; };
        var rows = this.compareList.map(function (r) {
            return [r.name, r.employee_id, r.designation, r.date, r.day, r.half, r.wigwam, r.savitri, r.type].map(esc).join(',');
        });
        var csv = header.map(esc).join(',') + '\n' + rows.join('\n');
        var blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
        Object(file_saver__WEBPACK_IMPORTED_MODULE_4__["saveAs"])(blob, 'attendance_compare_' + this.compareDateFrom + '_to_' + this.compareDateTo + '.csv');
    };
    // =========================================================
    // TAB 1 — MARK ATTENDANCE
    // =========================================================
    AttendanceMarkComponent.prototype.loadUsersForMarking = function () {
        var _this = this;
        if (!this.selectedDate) {
            this.toast.errorToastr('Please select a date');
            return;
        }
        this.userLoader = true;
        this.userList = [];
        this.filteredUserList = [];
        this.serve.post_rqst({ date: this.selectedDate }, 'Attendance/getSalesUsersForMark').subscribe(function (result) {
            _this.userLoader = false;
            if (result['statusCode'] == 200) {
                _this.userList = result['users'].map(function (u) { return (tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, u, { fh_status: u.first_half_status || '', sh_status: u.second_half_status || '', remarks: u.remarks || '', isDirty: false })); });
                _this.applyNameFilter();
            }
            else {
                _this.toast.errorToastr(result['statusMsg']);
            }
        }, function () { _this.userLoader = false; });
    };
    // Bulk set one half (FH / SH) for every user currently listed in the table.
    AttendanceMarkComponent.prototype.setAllHalf = function (half, status) {
        var _this = this;
        if (!status) {
            return;
        }
        if (!this.filteredUserList.length) {
            this.toast.warningToastr('No users in the list');
            return;
        }
        this.filteredUserList.forEach(function (u) { return _this.setHalf(u, half, status); });
        var label = half === 'fh' ? 'First Half' : 'Second Half';
        this.toast.successToastr(label + " set to \"" + status + "\" for " + this.filteredUserList.length + " user(s)");
    };
    AttendanceMarkComponent.prototype.markAllAs = function (status) {
        var _this = this;
        this.filteredUserList.forEach(function (u) {
            _this.setHalf(u, 'fh', status);
            _this.setHalf(u, 'sh', status);
        });
    };
    AttendanceMarkComponent.prototype.applyNameFilter = function () {
        var search = (this.nameSearch || '').toLowerCase().trim();
        // Base list: template-filtered OR all users
        var base = this.userList;
        if (this.activeTemplate) {
            var userIds_1 = this.activeTemplate.user_ids || [];
            base = this.sortByTemplateOrder(this.userList.filter(function (u) { return userIds_1.includes(+u.id); }), userIds_1);
        }
        if (!search) {
            this.filteredUserList = base.slice();
        }
        else {
            this.filteredUserList = base.filter(function (u) {
                return (u.name && u.name.toLowerCase().includes(search)) ||
                    (u.employee_id && String(u.employee_id).toLowerCase().includes(search));
            });
        }
    };
    AttendanceMarkComponent.prototype.setHalf = function (user, half, status) {
        var field = half === 'fh' ? 'fh_status' : 'sh_status';
        var master = this.userList.find(function (u) { return u.id === user.id; });
        if (master) {
            master[field] = status;
            master.isDirty = true;
        }
        user[field] = status;
        user.isDirty = true;
    };
    Object.defineProperty(AttendanceMarkComponent.prototype, "markedCount", {
        get: function () {
            return this.userList.filter(function (u) { return u.fh_status || u.sh_status; }).length;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AttendanceMarkComponent.prototype, "dirtyCount", {
        get: function () {
            return this.userList.filter(function (u) { return u.isDirty; }).length;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AttendanceMarkComponent.prototype, "pendingMarkCount", {
        get: function () {
            return this.userList.filter(function (u) { return !u.fh_status && !u.sh_status; }).length;
        },
        enumerable: true,
        configurable: true
    });
    AttendanceMarkComponent.prototype.saveAllAttendance = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var toSave, successCount, failCount, _i, toSave_1, user, result, e_1;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        toSave = this.userList.filter(function (u) { return u.isDirty; });
                        if (toSave.length === 0) {
                            this.toast.errorToastr('Koi naya attendance mark nahi kiya');
                            return [2 /*return*/];
                        }
                        this.saveLoader = true;
                        this.saveProgress = { current: 0, total: toSave.length };
                        successCount = 0;
                        failCount = 0;
                        _i = 0, toSave_1 = toSave;
                        _a.label = 1;
                    case 1:
                        if (!(_i < toSave_1.length)) return [3 /*break*/, 7];
                        user = toSave_1[_i];
                        _a.label = 2;
                    case 2:
                        _a.trys.push([2, 4, , 5]);
                        return [4 /*yield*/, this.serve.post_rqst({
                                user_id: user.id,
                                attendance_date: this.selectedDate,
                                first_half_status: user.fh_status || '',
                                second_half_status: user.sh_status || '',
                                remarks: user.remarks || '',
                                marked_by: this.uid
                            }, 'Attendance/saveAttendanceMark').toPromise()];
                    case 3:
                        result = _a.sent();
                        if (result['statusCode'] == 200) {
                            user.isDirty = false;
                            user.first_half_status = user.fh_status;
                            user.second_half_status = user.sh_status;
                            successCount++;
                        }
                        else {
                            failCount++;
                        }
                        return [3 /*break*/, 5];
                    case 4:
                        e_1 = _a.sent();
                        failCount++;
                        return [3 /*break*/, 5];
                    case 5:
                        this.saveProgress.current++;
                        _a.label = 6;
                    case 6:
                        _i++;
                        return [3 /*break*/, 1];
                    case 7:
                        this.saveLoader = false;
                        this.saveProgress = { current: 0, total: 0 };
                        if (successCount > 0)
                            this.toast.successToastr(successCount + ' attendance saved successfully');
                        if (failCount > 0)
                            this.toast.errorToastr(failCount + ' records failed');
                        return [2 /*return*/];
                }
            });
        });
    };
    // =========================================================
    // INLINE EDIT — single record from Report tab
    // =========================================================
    AttendanceMarkComponent.prototype.openInlineEdit = function (row) {
        row._editMode = true;
        row._editFH = row.first_half_status || '';
        row._editSH = row.second_half_status || '';
        row._editRemarks = row.remarks || '';
        row._saving = false;
    };
    AttendanceMarkComponent.prototype.cancelInlineEdit = function (row) {
        row._editMode = false;
    };
    AttendanceMarkComponent.prototype.saveInlineEdit = function (row) {
        var _this = this;
        if (!row._editFH && !row._editSH) {
            this.toast.errorToastr('Status select karo');
            return;
        }
        row._saving = true;
        this.serve.post_rqst({
            user_id: row.user_id || row.id,
            attendance_date: row.attendance_date,
            first_half_status: row._editFH || '',
            second_half_status: row._editSH || '',
            remarks: row._editRemarks || '',
            marked_by: this.uid
        }, 'Attendance/saveAttendanceMark').subscribe(function (result) {
            row._saving = false;
            if (result['statusCode'] == 200) {
                row.first_half_status = row._editFH;
                row.second_half_status = row._editSH;
                row.remarks = row._editRemarks;
                row._editMode = false;
                _this.toast.successToastr('Attendance updated');
            }
            else {
                _this.toast.errorToastr(result['statusMsg']);
            }
        }, function () { row._saving = false; });
    };
    // =========================================================
    // TAB 2 — ATTENDANCE REPORT
    // =========================================================
    AttendanceMarkComponent.prototype.loadReport = function () {
        var _this = this;
        if (!this.reportDateFrom || !this.reportDateTo) {
            this.toast.errorToastr('Please select date range');
            return;
        }
        var userIds = this.activeTemplate ? (this.activeTemplate.user_ids || []) : [];
        this.reportLoader = true;
        this.reportList = [];
        this.serve.post_rqst({
            date_from: this.reportDateFrom,
            date_to: this.reportDateTo,
            search: this.reportSearch,
            status: this.reportStatusFilter,
            user_ids: userIds,
            start: this.reportStart,
            pagelimit: this.reportPageLimit
        }, 'Attendance/getAttendanceMarkReport').subscribe(function (result) {
            _this.reportLoader = false;
            if (result['statusCode'] == 200) {
                var data = result['data'] || [];
                _this.reportList = _this.sortByTemplateOrder(data, userIds);
                _this.reportCount = result['count'];
                _this.reportTotalPage = Math.ceil(_this.reportCount / _this.reportPageLimit);
                _this.reportPageNumber = Math.ceil(_this.reportStart / _this.reportPageLimit) + 1;
                _this.reportSrNo = _this.reportStart;
                if (_this.reportList.length === 0) {
                    _this.toast.warningToastr('No records found');
                }
            }
            else {
                _this.toast.errorToastr(result['statusMsg']);
            }
        }, function () { _this.reportLoader = false; });
    };
    AttendanceMarkComponent.prototype.reportPrev = function () {
        this.reportStart -= this.reportPageLimit;
        if (this.reportStart < 0)
            this.reportStart = 0;
        this.loadReport();
    };
    AttendanceMarkComponent.prototype.reportNext = function () {
        this.reportStart += this.reportPageLimit;
        this.loadReport();
    };
    AttendanceMarkComponent.prototype.refreshReport = function () {
        this.reportStart = 0;
        this.reportList = [];
        this.loadReport();
    };
    // =========================================================
    // TAB 3 — PENDING ATTENDANCE
    // =========================================================
    AttendanceMarkComponent.prototype.loadPendingUsers = function () {
        var _this = this;
        if (!this.pendingDate) {
            this.toast.errorToastr('Please select a date');
            return;
        }
        this.pendingLoader = true;
        this.pendingList = [];
        this.serve.post_rqst({ date: this.pendingDate }, 'Attendance/getPendingAttendance').subscribe(function (result) {
            _this.pendingLoader = false;
            if (result['statusCode'] == 200) {
                _this.pendingList = result['users'];
            }
            else {
                _this.toast.errorToastr(result['statusMsg']);
            }
        }, function () { _this.pendingLoader = false; });
    };
    Object.defineProperty(AttendanceMarkComponent.prototype, "filteredPendingList", {
        get: function () {
            var s = (this.pendingSearch || '').toLowerCase().trim();
            if (!s)
                return this.pendingList;
            return this.pendingList.filter(function (u) {
                return (u.name && u.name.toLowerCase().includes(s)) ||
                    (u.employee_id && String(u.employee_id).toLowerCase().includes(s));
            });
        },
        enumerable: true,
        configurable: true
    });
    // =========================================================
    // EXCEL DOWNLOAD
    // =========================================================
    AttendanceMarkComponent.prototype.downloadAttendanceExcel = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var userIds, result, teams, dates, adminName, statusCfg_1, SUNDAY_ARGB_1, TEAM_BG, HEADER_BG_1, totalCols, ExcelJS, workbook, ws_1, thinBlack_1, thinGrey_1, applyStatusCell_1, styleHeader_1, row1_1, SUB_BG_1, row2_1, globalSrNo, _i, teams_1, team, _loop_1, _a, _b, user, i, buffer, blob, e_2;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_c) {
                switch (_c.label) {
                    case 0:
                        if (!this.reportDateFrom || !this.reportDateTo) {
                            this.toast.errorToastr('Please select date range first');
                            return [2 /*return*/];
                        }
                        this.excelDownloading = true;
                        _c.label = 1;
                    case 1:
                        _c.trys.push([1, 5, , 6]);
                        userIds = this.activeTemplate ? (this.activeTemplate.user_ids || []) : [];
                        return [4 /*yield*/, this.serve.post_rqst({
                                date_from: this.reportDateFrom,
                                date_to: this.reportDateTo,
                                user_ids: userIds
                            }, 'Attendance/getAttendanceMarkForExcel').toPromise()];
                    case 2:
                        result = _c.sent();
                        if (result['statusCode'] != 200) {
                            this.toast.errorToastr(result['statusMsg']);
                            this.excelDownloading = false;
                            return [2 /*return*/];
                        }
                        teams = result['teams'];
                        dates = result['dates'];
                        adminName = result['admin_name'];
                        statusCfg_1 = {
                            'Present': { label: 'P', argb: 'FF27AE60' },
                            'Absent': { label: 'A', argb: 'FFE74C3C' },
                            'Leave': { label: 'L', argb: 'FFC0392B' },
                            'Holiday': { label: 'H', argb: 'FF2980B9' },
                            'Sunday': { label: 'R', argb: 'FF7F8C8D' },
                        };
                        SUNDAY_ARGB_1 = 'FF7F8C8D';
                        TEAM_BG = 'FFFFC107';
                        HEADER_BG_1 = 'FF1A237E';
                        totalCols = 3 + dates.length * 2;
                        return [4 /*yield*/, Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e("common")]).then(__webpack_require__.t.bind(null, /*! exceljs */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/exceljs/dist/exceljs.min.js", 7))];
                    case 3:
                        ExcelJS = _c.sent();
                        workbook = new ExcelJS.Workbook();
                        ws_1 = workbook.addWorksheet('Attendance Report');
                        thinBlack_1 = { style: 'thin', color: { argb: 'FF000000' } };
                        thinGrey_1 = { style: 'thin', color: { argb: 'FFE0E0E0' } };
                        applyStatusCell_1 = function (cell, status, date) {
                            var isSunday = moment__WEBPACK_IMPORTED_MODULE_3__(date).day() === 0;
                            var argb = 'FFFFFFFF';
                            var hasColor = false;
                            if (status && statusCfg_1[status]) {
                                argb = statusCfg_1[status].argb;
                                hasColor = true;
                            }
                            else if (isSunday) {
                                argb = SUNDAY_ARGB_1;
                                hasColor = true;
                            }
                            cell.value = status ? (statusCfg_1[status] ? statusCfg_1[status].label : status) : (isSunday ? 'R' : '');
                            cell.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: argb } };
                            cell.font = { color: { argb: hasColor ? 'FFFFFFFF' : 'FF888888' }, size: 9, bold: hasColor };
                            cell.alignment = { vertical: 'middle', horizontal: 'center' };
                            cell.border = { top: thinGrey_1, left: thinGrey_1, bottom: thinGrey_1, right: thinGrey_1 };
                        };
                        styleHeader_1 = function (cell, bg) {
                            if (bg === void 0) { bg = HEADER_BG_1; }
                            cell.font = { bold: true, color: { argb: 'FFFFFFFF' }, size: 9 };
                            cell.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: bg } };
                            cell.alignment = { vertical: 'middle', horizontal: 'center' };
                            cell.border = { top: thinBlack_1, left: thinBlack_1, bottom: thinBlack_1, right: thinBlack_1 };
                        };
                        row1_1 = ws_1.addRow([]);
                        row1_1.height = 16;
                        // Fixed columns — merge vertically (rows 1-2)
                        ['S.NO', 'Code', 'Name'].forEach(function (h, i) {
                            var cell = row1_1.getCell(i + 1);
                            cell.value = h;
                            styleHeader_1(cell);
                        });
                        // Date headers — each spans 2 columns
                        dates.forEach(function (d, idx) {
                            var colStart = 4 + idx * 2;
                            var cell = row1_1.getCell(colStart);
                            cell.value = moment__WEBPACK_IMPORTED_MODULE_3__(d).format('D-MMM');
                            styleHeader_1(cell, moment__WEBPACK_IMPORTED_MODULE_3__(d).day() === 0 ? 'FF7F8C8D' : HEADER_BG_1);
                            ws_1.mergeCells(1, colStart, 1, colStart + 1);
                        });
                        SUB_BG_1 = 'FF283593';
                        row2_1 = ws_1.addRow([]);
                        row2_1.height = 14;
                        [1, 2, 3].forEach(function (col) {
                            var cell = row2_1.getCell(col);
                            styleHeader_1(cell);
                            cell.value = '';
                            // Merge row1 and row2 for fixed columns
                            ws_1.mergeCells(1, col, 2, col);
                        });
                        dates.forEach(function (_d, idx) {
                            var colFH = 4 + idx * 2;
                            var colSH = colFH + 1;
                            var fhCell = row2_1.getCell(colFH);
                            var shCell = row2_1.getCell(colSH);
                            fhCell.value = 'FH';
                            styleHeader_1(fhCell, SUB_BG_1);
                            shCell.value = 'SH';
                            styleHeader_1(shCell, SUB_BG_1);
                        });
                        globalSrNo = 1;
                        for (_i = 0, teams_1 = teams; _i < teams_1.length; _i++) {
                            team = teams_1[_i];
                            _loop_1 = function (user) {
                                var dataRow = ws_1.addRow([globalSrNo++, user.employee_id, user.name]);
                                dataRow.height = 16;
                                // S.NO, Code, Name cols
                                [1, 2, 3].forEach(function (col) {
                                    var cell = dataRow.getCell(col);
                                    cell.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FFF5F5F5' } };
                                    cell.border = { top: thinGrey_1, left: thinGrey_1, bottom: thinGrey_1, right: thinGrey_1 };
                                    cell.alignment = { vertical: 'middle', horizontal: col === 3 ? 'left' : 'center' };
                                    cell.font = col === 3 ? { bold: true, size: 9 } : { size: 9 };
                                });
                                // 2 cells per date (FH + SH)
                                dates.forEach(function (date, idx) {
                                    var att = user.attendance && user.attendance[date] ? user.attendance[date] : { fh: '', sh: '' };
                                    applyStatusCell_1(dataRow.getCell(4 + idx * 2), att.fh || '', date);
                                    applyStatusCell_1(dataRow.getCell(4 + idx * 2 + 1), att.sh || '', date);
                                });
                            };
                            for (_a = 0, _b = team.users; _a < _b.length; _a++) {
                                user = _b[_a];
                                _loop_1(user);
                            }
                        }
                        // Column widths
                        ws_1.getColumn(1).width = 6;
                        ws_1.getColumn(2).width = 12;
                        ws_1.getColumn(3).width = 28;
                        for (i = 4; i <= totalCols; i++) {
                            ws_1.getColumn(i).width = 6;
                        }
                        // Freeze first 3 columns
                        ws_1.views = [{ state: 'frozen', xSplit: 3, ySplit: 2 }];
                        return [4 /*yield*/, workbook.xlsx.writeBuffer()];
                    case 4:
                        buffer = _c.sent();
                        blob = new Blob([buffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
                        Object(file_saver__WEBPACK_IMPORTED_MODULE_4__["saveAs"])(blob, "Attendance_" + this.reportDateFrom + "_to_" + this.reportDateTo + ".xlsx");
                        this.toast.successToastr('Excel downloaded successfully');
                        return [3 /*break*/, 6];
                    case 5:
                        e_2 = _c.sent();
                        console.error(e_2);
                        this.toast.errorToastr('Excel generation failed');
                        return [3 /*break*/, 6];
                    case 6:
                        this.excelDownloading = false;
                        return [2 /*return*/];
                }
            });
        });
    };
    AttendanceMarkComponent.prototype.downloadHRMSReport = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var userIds, result, teams, dates, hrmsMap_1, toHRMS, ExcelJS, workbook, ws_2, HEADER_BG_2, thinBlack_2, thinGrey_2, headers, headerRow, rowCount, _i, teams_2, team, _a, _b, user, _c, dates_1, date, att, fh, sh, inTime, outTime, fhPresent, shPresent, dataRow, widths, buffer, blob, e_3;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_e) {
                switch (_e.label) {
                    case 0:
                        if (!this.reportDateFrom || !this.reportDateTo) {
                            this.toast.errorToastr('Please select date range first');
                            return [2 /*return*/];
                        }
                        this.hrmsDownloading = true;
                        _e.label = 1;
                    case 1:
                        _e.trys.push([1, 5, , 6]);
                        userIds = this.activeTemplate ? (this.activeTemplate.user_ids || []) : [];
                        return [4 /*yield*/, this.serve.post_rqst({
                                date_from: this.reportDateFrom,
                                date_to: this.reportDateTo,
                                user_ids: userIds
                            }, 'Attendance/getAttendanceMarkForExcel').toPromise()];
                    case 2:
                        result = _e.sent();
                        if (result['statusCode'] != 200) {
                            this.toast.errorToastr(result['statusMsg']);
                            this.hrmsDownloading = false;
                            return [2 /*return*/];
                        }
                        teams = result['teams'];
                        dates = result['dates'];
                        hrmsMap_1 = {
                            'Present': 'P',
                            'Absent': 'A',
                            'Leave': 'L',
                            'Holiday': 'H',
                            'Sunday': 'R',
                        };
                        toHRMS = function (s) { return s ? (hrmsMap_1[s] || '') : ''; };
                        return [4 /*yield*/, Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e("common")]).then(__webpack_require__.t.bind(null, /*! exceljs */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/exceljs/dist/exceljs.min.js", 7))];
                    case 3:
                        ExcelJS = _e.sent();
                        workbook = new ExcelJS.Workbook();
                        ws_2 = workbook.addWorksheet('HRMS Report');
                        HEADER_BG_2 = 'FF1A237E';
                        thinBlack_2 = { style: 'thin', color: { argb: 'FF000000' } };
                        thinGrey_2 = { style: 'thin', color: { argb: 'FFE0E0E0' } };
                        headers = ['Date', 'EmpID', 'In Time', 'Out Time',
                            'First Half', 'Second Half',
                            'Over Time', 'Grace', 'Short Leave', 'Deduction', 'Comments'];
                        headerRow = ws_2.addRow(headers);
                        headerRow.height = 18;
                        headerRow.eachCell(function (cell) {
                            cell.font = { bold: true, color: { argb: 'FFFFFFFF' }, size: 10 };
                            cell.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: HEADER_BG_2 } };
                            cell.alignment = { vertical: 'middle', horizontal: 'center' };
                            cell.border = { top: thinBlack_2, left: thinBlack_2, bottom: thinBlack_2, right: thinBlack_2 };
                        });
                        rowCount = 0;
                        for (_i = 0, teams_2 = teams; _i < teams_2.length; _i++) {
                            team = teams_2[_i];
                            for (_a = 0, _b = team.users; _a < _b.length; _a++) {
                                user = _b[_a];
                                for (_c = 0, dates_1 = dates; _c < dates_1.length; _c++) {
                                    date = dates_1[_c];
                                    att = (user.attendance && user.attendance[date]) ? user.attendance[date] : null;
                                    fh = toHRMS(att ? att.fh : '');
                                    sh = toHRMS(att ? att.sh : '');
                                    // Skip rows with no attendance data
                                    if (!fh && !sh)
                                        continue;
                                    inTime = '';
                                    outTime = '';
                                    fhPresent = fh === 'P';
                                    shPresent = sh === 'P';
                                    if (fhPresent && shPresent) {
                                        inTime = '09:00';
                                        outTime = '18:00';
                                    }
                                    else if (fhPresent) {
                                        inTime = '09:00';
                                        outTime = '13:30';
                                    }
                                    else if (shPresent) {
                                        inTime = '13:30';
                                        outTime = '18:00';
                                    }
                                    dataRow = ws_2.addRow([
                                        moment__WEBPACK_IMPORTED_MODULE_3__(date).format('DD/MM/YYYY'),
                                        user.employee_id || '',
                                        inTime,
                                        outTime,
                                        fh,
                                        sh,
                                        '',
                                        '',
                                        '',
                                        '',
                                        '',
                                    ]);
                                    dataRow.height = 15;
                                    dataRow.eachCell({ includeEmpty: true }, function (cell) {
                                        cell.font = { size: 10 };
                                        cell.alignment = { vertical: 'middle', horizontal: 'center' };
                                        cell.border = { top: thinGrey_2, left: thinGrey_2, bottom: thinGrey_2, right: thinGrey_2 };
                                    });
                                    rowCount++;
                                }
                            }
                        }
                        if (rowCount === 0) {
                            this.toast.warningToastr('No attendance data found for selected range');
                            this.hrmsDownloading = false;
                            return [2 /*return*/];
                        }
                        widths = [14, 10, 10, 10, 12, 13, 12, 10, 13, 12, 14];
                        widths.forEach(function (w, i) { ws_2.getColumn(i + 1).width = w; });
                        ws_2.views = [{ state: 'frozen', xSplit: 0, ySplit: 1 }];
                        return [4 /*yield*/, workbook.xlsx.writeBuffer()];
                    case 4:
                        buffer = _e.sent();
                        blob = new Blob([buffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
                        Object(file_saver__WEBPACK_IMPORTED_MODULE_4__["saveAs"])(blob, "HRMS_Report_" + this.reportDateFrom + "_to_" + this.reportDateTo + ".xlsx");
                        this.toast.successToastr('HRMS Report downloaded');
                        return [3 /*break*/, 6];
                    case 5:
                        e_3 = _e.sent();
                        console.error(e_3);
                        this.toast.errorToastr('HRMS report generation failed');
                        return [3 /*break*/, 6];
                    case 6:
                        this.hrmsDownloading = false;
                        return [2 /*return*/];
                }
            });
        });
    };
    // =========================================================
    // UTILS
    // =========================================================
    AttendanceMarkComponent.prototype.getStatusColor = function (status) {
        return this.statusColorMap[status] || '#888';
    };
    AttendanceMarkComponent.prototype.getStatusShort = function (status) {
        var map = {
            'Present': 'P',
            'Absent': 'A',
            'Leave': 'L',
            'Holiday': 'H',
            'Sunday': 'S',
        };
        return map[status] || (status ? status[0] : '');
    };
    AttendanceMarkComponent.prototype.getStatusClass = function (status) {
        var map = {
            'Present': 'sel-present',
            'Absent': 'sel-absent',
            'Half Day': 'sel-half-day',
            'Leave': 'sel-leave',
            'Holiday': 'sel-holiday',
            'Sunday': 'sel-sunday',
        };
        return map[status] || '';
    };
    AttendanceMarkComponent.prototype.formatDate = function (d) {
        return d ? moment__WEBPACK_IMPORTED_MODULE_3__(d).format('DD MMM YYYY') : '-';
    };
    AttendanceMarkComponent.prototype.formatDay = function (d) {
        return d ? moment__WEBPACK_IMPORTED_MODULE_3__(d).format('ddd') : '';
    };
    AttendanceMarkComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-attendance-mark',
            template: __webpack_require__(/*! ./attendance-mark.component.html */ "./src/app/attendance-mark/attendance-mark.component.html"),
            styles: [__webpack_require__(/*! ./attendance-mark.component.scss */ "./src/app/attendance-mark/attendance-mark.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_services_DatabaseService__WEBPACK_IMPORTED_MODULE_2__["DatabaseService"],
            ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_5__["ToastrManager"],
            _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatDialog"]])
    ], AttendanceMarkComponent);
    return AttendanceMarkComponent;
}());



/***/ })

}]);