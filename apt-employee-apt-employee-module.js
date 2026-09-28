(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["apt-employee-apt-employee-module"],{

/***/ "./src/app/apt-employee/apt-employee-detail/apt-employee-detail.component.html":
/*!*************************************************************************************!*\
  !*** ./src/app/apt-employee/apt-employee-detail/apt-employee-detail.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-container\">\r\n\r\n    <div class=\"tools-container\">\r\n        <a mat-icon-button matTooltip=\"Back\" (click)=\"goBack()\">\r\n            <i class=\"material-icons\">arrow_back</i>\r\n        </a>\r\n        <h2>Employee History</h2>\r\n        <div class=\"left-auto\">\r\n            <button mat-icon-button matTooltip=\"Refresh\" (click)=\"loadHistory()\">\r\n                <i class=\"material-icons\">refresh</i>\r\n            </button>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"container pt10 pl10 pr10 pb50\" *ngIf=\"!isLoading\">\r\n\r\n        <div class=\"row\" *ngIf=\"employee\">\r\n            <div class=\"col s12\">\r\n                <div class=\"card\">\r\n                    <div class=\"card-head\">\r\n                        <h2>Current Details</h2>\r\n                        <div class=\"left-auto\">\r\n                            <span style=\"padding:3px 12px;border-radius:12px;font-size:13px;font-weight:500;\"\r\n                                [ngStyle]=\"{'background': employee.status==1 ? '#e8f5e9' : '#fce4ec',\r\n                                             'color': employee.status==1 ? '#2e7d32' : '#c62828'}\">\r\n                                {{ employee.status == 1 ? 'Active' : 'Inactive' }}\r\n                            </span>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"card-body cs-form\">\r\n                        <div class=\"row\">\r\n                            <div class=\"col s12 m3 l3\">\r\n                                <label class=\"cs-label\">Mobile No.</label>\r\n                                <p class=\"cs-value\">{{ employee.mobile }}</p>\r\n                            </div>\r\n                            <div class=\"col s12 m3 l3\">\r\n                                <label class=\"cs-label\">Employee Code</label>\r\n                                <p class=\"cs-value\">{{ employee.employee_code || '---' }}</p>\r\n                            </div>\r\n                            <div class=\"col s12 m3 l3\">\r\n                                <label class=\"cs-label\">Name</label>\r\n                                <p class=\"cs-value\">{{ employee.name | titlecase }}</p>\r\n                            </div>\r\n                            <div class=\"col s12 m3 l3\">\r\n                                <label class=\"cs-label\">Designation</label>\r\n                                <p class=\"cs-value\">{{ employee.designation }}</p>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"row\">\r\n                            <div class=\"col s12 m4 l4\">\r\n                                <label class=\"cs-label\">Email</label>\r\n                                <p class=\"cs-value\">{{ employee.email || '---' }}</p>\r\n                            </div>\r\n                            <div class=\"col s12 m4 l4\">\r\n                                <label class=\"cs-label\">Base Station</label>\r\n                                <p class=\"cs-value\">{{ employee.base_station || '---' }}</p>\r\n                            </div>\r\n                            <div class=\"col s12 m4 l4\">\r\n                                <label class=\"cs-label\">Region</label>\r\n                                <p class=\"cs-value\">{{ employee.state_region }}</p>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <!-- History Table -->\r\n        <div class=\"row\">\r\n            <div class=\"col s12\">\r\n                <div class=\"card pb0\">\r\n                    <div class=\"card-head\">\r\n                        <h2><i class=\"material-icons mr5\" style=\"vertical-align:middle;font-size:20px\">history</i>Assignment History</h2>\r\n                        <span class=\"left-auto\" style=\"font-size:13px;color:#666\">{{ history.length }} record(s)</span>\r\n                    </div>\r\n\r\n                    <div class=\"cs-table\">\r\n                        <div class=\"sticky-head\">\r\n                            <div class=\"table-head\">\r\n                                <table>\r\n                                    <tr>\r\n                                        <th class=\"w50 text-center\">Sr.</th>\r\n                                        <th class=\"w80\">Emp Code</th>\r\n                                        <th class=\"w160\">Name</th>\r\n                                        <th class=\"w160\">Designation</th>\r\n                                        <th class=\"w200\">Email</th>\r\n                                        <th class=\"w130\">Base Station</th>\r\n                                        <th class=\"w80\">Region</th>\r\n                                        <th class=\"w130\">Activated On</th>\r\n                                        <th class=\"w130\">Deactivated On</th>\r\n                                    </tr>\r\n                                </table>\r\n                            </div>\r\n                        </div>\r\n\r\n                        <div class=\"table-container mb50\">\r\n                            <div class=\"table-content\">\r\n                                <table>\r\n                                    <tr *ngFor=\"let h of history; let i = index\">\r\n                                        <td class=\"w50 text-center\">{{ i + 1 }}</td>\r\n                                        <td class=\"w80\">{{ h.employee_code || '---' }}</td>\r\n                                        <td class=\"w160\">{{ h.name | titlecase }}</td>\r\n                                        <td class=\"w160\">{{ h.designation }}</td>\r\n                                        <td class=\"w200\">{{ h.email || '---' }}</td>\r\n                                        <td class=\"w130\">{{ h.base_station || '---' }}</td>\r\n                                        <td class=\"w80\">{{ h.state_region }}</td>\r\n                                        <td class=\"w130\">{{ h.activated_on | date:'dd MMM yyyy' }}</td>\r\n                                        <td class=\"w130\">\r\n                                            <span *ngIf=\"h.deactivated_on\">{{ h.deactivated_on | date:'dd MMM yyyy' }}</span>\r\n                                            <span *ngIf=\"!h.deactivated_on\" style=\"color:#2e7d32;font-weight:500\">Current</span>\r\n                                        </td>\r\n                                    </tr>\r\n                                </table>\r\n                            </div>\r\n                        </div>\r\n\r\n                        <div class=\"no-data\" *ngIf=\"history.length == 0\">\r\n                            <img src=\"assets/img/no-data.svg\" alt=\"\">\r\n                            <p>No history <span>found !</span></p>\r\n                        </div>\r\n                    </div>\r\n\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n    </div>\r\n\r\n    <!-- Skeleton loading -->\r\n    <div class=\"container pt10 pl10 pr10\" *ngIf=\"isLoading\">\r\n        <div class=\"row\">\r\n            <div class=\"col s12\">\r\n                <div class=\"card sk-loading\" style=\"height:120px\"></div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/apt-employee/apt-employee-detail/apt-employee-detail.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/apt-employee/apt-employee-detail/apt-employee-detail.component.ts ***!
  \***********************************************************************************/
/*! exports provided: AptEmployeeDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AptEmployeeDetailComponent", function() { return AptEmployeeDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_services_DatabaseService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/_services/DatabaseService */ "./src/_services/DatabaseService.ts");
/* harmony import */ var ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng6-toastr-notifications */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/ng6-toastr-notifications/fesm5/ng6-toastr-notifications.js");





var AptEmployeeDetailComponent = /** @class */ (function () {
    function AptEmployeeDetailComponent(route, router, serve, toast) {
        this.route = route;
        this.router = router;
        this.serve = serve;
        this.toast = toast;
        this.mobile = '';
        this.employee = null;
        this.history = [];
        this.isLoading = false;
    }
    AptEmployeeDetailComponent.prototype.ngOnInit = function () {
        this.mobile = this.route.snapshot.params['mobile'];
        this.loadHistory();
    };
    AptEmployeeDetailComponent.prototype.loadHistory = function () {
        var _this = this;
        this.isLoading = true;
        this.serve.post_rqst({ mobile: this.mobile }, 'Apt_Employee/getEmployeeHistory').subscribe(function (result) {
            _this.isLoading = false;
            if (result['statusCode'] == 200) {
                _this.history = result['history'];
                _this.employee = result['employee'];
            }
            else {
                _this.toast.errorToastr('Failed to load history.');
            }
        }, function () {
            _this.isLoading = false;
            _this.toast.errorToastr('Network error.');
        });
    };
    AptEmployeeDetailComponent.prototype.goBack = function () {
        this.router.navigate(['/apt-employee-list']);
    };
    AptEmployeeDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-apt-employee-detail',
            template: __webpack_require__(/*! ./apt-employee-detail.component.html */ "./src/app/apt-employee/apt-employee-detail/apt-employee-detail.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            src_services_DatabaseService__WEBPACK_IMPORTED_MODULE_3__["DatabaseService"],
            ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_4__["ToastrManager"]])
    ], AptEmployeeDetailComponent);
    return AptEmployeeDetailComponent;
}());



/***/ }),

/***/ "./src/app/apt-employee/apt-employee-form/apt-employee-form.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/apt-employee/apt-employee-form/apt-employee-form.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 mat-dialog-title>\r\n    <span *ngIf=\"mode === 'add'\">Add New Employee</span>\r\n    <span *ngIf=\"mode === 'reactivate'\">Reactivate — {{ form.mobile }}</span>\r\n</h2>\r\n\r\n<mat-dialog-content style=\"padding:0 8px\">\r\n    <div class=\"card-body cs-form pt10\">\r\n        <div class=\"row\">\r\n\r\n            <div class=\"col s12 m6 l6\">\r\n                <mat-form-field appearance=\"outline\">\r\n                    <mat-label>Mobile Number *</mat-label>\r\n                    <input matInput [(ngModel)]=\"form.mobile\"\r\n                        [readonly]=\"mode === 'reactivate'\"\r\n                        [style.background]=\"mode === 'reactivate' ? '#f5f5f5' : ''\"\r\n                        maxlength=\"15\" placeholder=\"9876543210\">\r\n                </mat-form-field>\r\n                <p *ngIf=\"mode === 'reactivate'\" style=\"font-size:11px;color:#888;margin-top:-12px;margin-bottom:8px\">\r\n                    Mobile is fixed and cannot be changed\r\n                </p>\r\n            </div>\r\n\r\n            <div class=\"col s12 m6 l6\">\r\n                <mat-form-field appearance=\"outline\">\r\n                    <mat-label>Employee Code</mat-label>\r\n                    <input matInput [(ngModel)]=\"form.employee_code\" placeholder=\"S1498\">\r\n                </mat-form-field>\r\n            </div>\r\n\r\n            <div class=\"col s12 m6 l6\">\r\n                <mat-form-field appearance=\"outline\">\r\n                    <mat-label>Full Name *</mat-label>\r\n                    <input matInput [(ngModel)]=\"form.name\" placeholder=\"BNV ANIL KUMAR\">\r\n                </mat-form-field>\r\n            </div>\r\n\r\n            <div class=\"col s12 m6 l6\">\r\n                <mat-form-field appearance=\"outline\">\r\n                    <mat-label>Designation *</mat-label>\r\n                    <input matInput [(ngModel)]=\"form.designation\" placeholder=\"AREA SALES MANAGER\">\r\n                </mat-form-field>\r\n            </div>\r\n\r\n            <div class=\"col s12 m12 l12\">\r\n                <mat-form-field appearance=\"outline\">\r\n                    <mat-label>Official Email</mat-label>\r\n                    <input matInput [(ngModel)]=\"form.email\" placeholder=\"name.station@magnusplywood.com\">\r\n                </mat-form-field>\r\n            </div>\r\n\r\n            <div class=\"col s12 m6 l6\">\r\n                <mat-form-field appearance=\"outline\">\r\n                    <mat-label>Base Station</mat-label>\r\n                    <input matInput [(ngModel)]=\"form.base_station\" placeholder=\"VIJAYAWADA\">\r\n                </mat-form-field>\r\n            </div>\r\n\r\n            <div class=\"col s12 m6 l6\">\r\n                <mat-form-field appearance=\"outline\">\r\n                    <mat-label>State / Region</mat-label>\r\n                    <input matInput [(ngModel)]=\"form.state_region\" placeholder=\"APT\">\r\n                </mat-form-field>\r\n            </div>\r\n\r\n            <div class=\"col s12 m6 l6\">\r\n                <mat-form-field appearance=\"outline\">\r\n                    <mat-label>Role *</mat-label>\r\n                    <mat-select [(ngModel)]=\"form.user_role\">\r\n                        <mat-option value=\"Sales Person\">Sales Person</mat-option>\r\n                        <mat-option value=\"Admin\">Admin</mat-option>\r\n                    </mat-select>\r\n                </mat-form-field>\r\n            </div>\r\n\r\n        </div>\r\n    </div>\r\n</mat-dialog-content>\r\n\r\n<mat-dialog-actions align=\"end\" style=\"padding:8px 16px 16px\">\r\n    <button mat-button (click)=\"cancel()\" [disabled]=\"isSaving\">Cancel</button>\r\n    <button mat-raised-button color=\"accent\" (click)=\"save()\" [disabled]=\"isSaving\">\r\n        {{ isSaving ? 'Saving...' : (mode === 'add' ? 'Add Employee' : 'Reactivate') }}\r\n    </button>\r\n</mat-dialog-actions>\r\n"

/***/ }),

/***/ "./src/app/apt-employee/apt-employee-form/apt-employee-form.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/apt-employee/apt-employee-form/apt-employee-form.component.ts ***!
  \*******************************************************************************/
/*! exports provided: AptEmployeeFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AptEmployeeFormComponent", function() { return AptEmployeeFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var src_services_DatabaseService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/_services/DatabaseService */ "./src/_services/DatabaseService.ts");
/* harmony import */ var ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng6-toastr-notifications */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/ng6-toastr-notifications/fesm5/ng6-toastr-notifications.js");





var AptEmployeeFormComponent = /** @class */ (function () {
    function AptEmployeeFormComponent(dialogRef, data, serve, toast) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.serve = serve;
        this.toast = toast;
        this.mode = 'add'; // 'add' | 'reactivate'
        this.isSaving = false;
        this.form = {
            mobile: '',
            employee_code: '',
            name: '',
            designation: '',
            email: '',
            base_station: '',
            state_region: 'APT',
            user_role: 'Sales Person'
        };
    }
    AptEmployeeFormComponent.prototype.ngOnInit = function () {
        this.mode = this.data.mode || 'add';
        if (this.mode === 'reactivate' && this.data.employee) {
            // Pre-fill mobile only (locked), clear other fields for fresh entry
            this.form.mobile = this.data.employee.mobile;
            this.form.state_region = this.data.employee.state_region || 'APT';
        }
    };
    AptEmployeeFormComponent.prototype.save = function () {
        var _this = this;
        if (!this.form.mobile || !this.form.name || !this.form.designation) {
            this.toast.warningToastr('Mobile, Name, and Designation are required.');
            return;
        }
        this.isSaving = true;
        var endpoint = this.mode === 'add' ? 'Apt_Employee/addEmployee' : 'Apt_Employee/reactivateEmployee';
        var payload = this.mode === 'reactivate'
            ? tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, this.form, { id: this.data.employee.id }) : tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, this.form);
        this.serve.post_rqst(payload, endpoint).subscribe(function (result) {
            _this.isSaving = false;
            if (result['statusCode'] == 200) {
                _this.toast.successToastr(result['message'] || 'Saved successfully.');
                _this.dialogRef.close('saved');
            }
            else {
                _this.toast.errorToastr(result['message'] || 'Failed to save.');
            }
        }, function () {
            _this.isSaving = false;
            _this.toast.errorToastr('Network error.');
        });
    };
    AptEmployeeFormComponent.prototype.cancel = function () {
        this.dialogRef.close();
    };
    AptEmployeeFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-apt-employee-form',
            template: __webpack_require__(/*! ./apt-employee-form.component.html */ "./src/app/apt-employee/apt-employee-form/apt-employee-form.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"], Object, src_services_DatabaseService__WEBPACK_IMPORTED_MODULE_3__["DatabaseService"],
            ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_4__["ToastrManager"]])
    ], AptEmployeeFormComponent);
    return AptEmployeeFormComponent;
}());



/***/ }),

/***/ "./src/app/apt-employee/apt-employee-list/apt-employee-list.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/apt-employee/apt-employee-list/apt-employee-list.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-container\">\r\n\r\n    <!-- Role Tabs -->\r\n    <div class=\"tools-container\" style=\"border-bottom: 2px solid #e0e0e0; margin-bottom: 0;\">\r\n        <div class=\"mat-tabbar\">\r\n            <button mat-button [ngClass]=\"activeRole == 'Sales Person' ? 'active' : ''\" (click)=\"changeRole('Sales Person')\">\r\n                <i class=\"material-icons\">people</i>\r\n                Sales Person\r\n                ({{salesPersonActiveCount + salesPersonInactiveCount}})\r\n            </button>\r\n            <button mat-button [ngClass]=\"activeRole == 'Admin' ? 'active' : ''\" (click)=\"changeRole('Admin')\">\r\n                <i class=\"material-icons\">admin_panel_settings</i>\r\n                Admin\r\n                ({{adminActiveCount + adminInactiveCount}})\r\n            </button>\r\n        </div>\r\n    </div>\r\n\r\n    <!-- Active / Inactive Sub-Tabs -->\r\n    <div class=\"tools-container\">\r\n        <div class=\"mat-tabbar\">\r\n            <button mat-button [ngClass]=\"activeTab == 'active' ? 'active' : ''\" (click)=\"changeTab('active')\">\r\n                <i class=\"material-icons\">people_alt</i> Active ({{activeTab == 'active' ? total : (activeRole == 'Sales Person' ? salesPersonActiveCount : adminActiveCount)}})\r\n            </button>\r\n            <button mat-button [ngClass]=\"activeTab == 'inactive' ? 'active' : ''\" (click)=\"changeTab('inactive')\">\r\n                <i class=\"material-icons\">person_off</i> Inactive ({{activeTab == 'inactive' ? total : (activeRole == 'Sales Person' ? salesPersonInactiveCount : adminInactiveCount)}})\r\n            </button>\r\n        </div>\r\n        <div class=\"left-auto df ac flex-gap-10\">\r\n            <button mat-icon-button matTooltip=\"Refresh\" (click)=\"refresh()\">\r\n                <i class=\"material-icons\">refresh</i>\r\n            </button>\r\n            <div class=\"pagination\" *ngIf=\"employees.length > 0\">\r\n                <div class=\"pagination-content\">\r\n                    Pages <span>{{pagenumber}}</span> of <span>{{total_page}}</span>\r\n                </div>\r\n                <div class=\"page-nav\">\r\n                    <button mat-icon-button matTooltip=\"Previous\" (click)=\"previous()\" [disabled]=\"start == 0\">\r\n                        <i class=\"material-icons\">navigate_before</i>\r\n                    </button>\r\n                    <button mat-icon-button matTooltip=\"Next\" (click)=\"nextPage()\" [disabled]=\"pagenumber == total_page\">\r\n                        <i class=\"material-icons\">navigate_next</i>\r\n                    </button>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"container container-scroll\">\r\n        <div class=\"cs-table horizontal-scroll\">\r\n\r\n            <!-- Sticky Header -->\r\n            <div class=\"sticky-head\">\r\n                <div class=\"table-head\">\r\n                    <table>\r\n                        <tr>\r\n                            <th class=\"w50 text-center\"></th>\r\n                            <th class=\"w80\">Emp Code</th>\r\n                            <th class=\"w160\">Name</th>\r\n                            <th class=\"w160\">Designation</th>\r\n                            <th class=\"w120\">Mobile No.</th>\r\n                            <th class=\"w200\">Email</th>\r\n                            <th class=\"w130\">Base Station</th>\r\n                            <th class=\"w80\">Region</th>\r\n                            <th class=\"w120\">{{activeTab === 'active' ? 'Activated On' : 'Deactivated On'}}</th>\r\n                            <th class=\"w130 text-center\">Action</th>\r\n                        </tr>\r\n                    </table>\r\n                </div>\r\n                <!-- Inline column search -->\r\n                <div class=\"table-head border-top\">\r\n                    <table>\r\n                        <tr>\r\n                            <th class=\"w50\"></th>\r\n                            <th class=\"w80\">\r\n                                <div class=\"th-search-acmt\">\r\n                                    <mat-form-field>\r\n                                        <input matInput placeholder=\"Search ...\" (keyup.enter)=\"refresh()\" [(ngModel)]=\"filterCode\">\r\n                                    </mat-form-field>\r\n                                </div>\r\n                            </th>\r\n                            <th class=\"w160\">\r\n                                <div class=\"th-search-acmt\">\r\n                                    <mat-form-field>\r\n                                        <input matInput placeholder=\"Search ...\" (keyup.enter)=\"refresh()\" [(ngModel)]=\"filterName\">\r\n                                    </mat-form-field>\r\n                                </div>\r\n                            </th>\r\n                            <th class=\"w160\">\r\n                                <div class=\"th-search-acmt\">\r\n                                    <mat-form-field>\r\n                                        <input matInput placeholder=\"Search ...\" (keyup.enter)=\"refresh()\" [(ngModel)]=\"filterDesignation\">\r\n                                    </mat-form-field>\r\n                                </div>\r\n                            </th>\r\n                            <th class=\"w120\">\r\n                                <div class=\"th-search-acmt\">\r\n                                    <mat-form-field>\r\n                                        <input matInput placeholder=\"Search ...\" (keyup.enter)=\"refresh()\" [(ngModel)]=\"filterMobile\">\r\n                                    </mat-form-field>\r\n                                </div>\r\n                            </th>\r\n                            <th class=\"w200\"></th>\r\n                            <th class=\"w130\">\r\n                                <div class=\"th-search-acmt\">\r\n                                    <mat-form-field>\r\n                                        <input matInput placeholder=\"Search ...\" (keyup.enter)=\"refresh()\" [(ngModel)]=\"filterBaseStation\">\r\n                                    </mat-form-field>\r\n                                </div>\r\n                            </th>\r\n                            <th class=\"w80\"></th>\r\n                            <th class=\"w120\"></th>\r\n                            <th class=\"w130\"></th>\r\n                        </tr>\r\n                    </table>\r\n                </div>\r\n            </div>\r\n\r\n            <!-- Data rows -->\r\n            <div class=\"table-container mb50\">\r\n                <div class=\"table-content\">\r\n                    <table>\r\n                        <ng-container *ngIf=\"!isLoading\">\r\n                            <tr *ngFor=\"let emp of employees; let i = index\"\r\n                                [ngClass]=\"{'long-inactive': activeTab === 'inactive' && isLongInactive(emp)}\"\r\n                                [matTooltip]=\"activeTab === 'inactive' && isLongInactive(emp) ? '2+ mahine se inactive' : ''\">\r\n                                <td class=\"w50 text-center\">{{ start + i + 1 }}</td>\r\n                                <td class=\"w80\">{{ emp.employee_code || '---' }}</td>\r\n                                <td class=\"w160\">\r\n                                    <a class=\"link-btn\" mat-button (click)=\"viewDetail(emp)\">\r\n                                        {{ emp.name | titlecase }}\r\n                                    </a>\r\n                                </td>\r\n                                <td class=\"w160\">{{ emp.designation }}</td>\r\n                                <td class=\"w120\">{{ emp.mobile }}</td>\r\n                                <td class=\"w200\">{{ emp.email || '---' }}</td>\r\n                                <td class=\"w130\">{{ emp.base_station || '---' }}</td>\r\n                                <td class=\"w80\">{{ emp.state_region }}</td>\r\n                                <td class=\"w120\">\r\n                                    <span *ngIf=\"activeTab === 'active'\">{{ emp.activated_on | date:'dd MMM yyyy' }}</span>\r\n                                    <span *ngIf=\"activeTab === 'inactive'\">{{ emp.deactivated_on | date:'dd MMM yyyy' }}</span>\r\n                                </td>\r\n                                <td class=\"w130 text-center\">\r\n                                    <button *ngIf=\"activeTab === 'active'\"\r\n                                        mat-raised-button color=\"warn\"\r\n                                        style=\"font-size:11px;padding:0 8px;min-height:28px\"\r\n                                        (click)=\"deactivate(emp)\">\r\n                                        Deactivate\r\n                                    </button>\r\n                                    <button *ngIf=\"activeTab === 'inactive'\"\r\n                                        mat-raised-button color=\"primary\"\r\n                                        style=\"font-size:11px;padding:0 8px;min-height:28px\"\r\n                                        (click)=\"openReactivateForm(emp)\">\r\n                                        Activate\r\n                                    </button>\r\n                                    &nbsp;\r\n                                    <button mat-icon-button matTooltip=\"View History\" (click)=\"viewDetail(emp)\">\r\n                                        <i class=\"material-icons\" style=\"font-size:18px\">history</i>\r\n                                    </button>\r\n                                </td>\r\n                            </tr>\r\n                        </ng-container>\r\n\r\n                        <!-- Skeleton loading -->\r\n                        <ng-container *ngFor=\"let row of [].constructor(10);\">\r\n                            <tr class=\"sk-loading\" *ngIf=\"isLoading\">\r\n                                <td class=\"w50 text-center\"><div>&nbsp;</div></td>\r\n                                <td class=\"w80\"><div>&nbsp;</div></td>\r\n                                <td class=\"w160\"><div>&nbsp;</div></td>\r\n                                <td class=\"w160\"><div>&nbsp;</div></td>\r\n                                <td class=\"w120\"><div>&nbsp;</div></td>\r\n                                <td class=\"w200\"><div>&nbsp;</div></td>\r\n                                <td class=\"w130\"><div>&nbsp;</div></td>\r\n                                <td class=\"w80\"><div>&nbsp;</div></td>\r\n                                <td class=\"w120\"><div>&nbsp;</div></td>\r\n                                <td class=\"w130\"><div>&nbsp;</div></td>\r\n                            </tr>\r\n                        </ng-container>\r\n                    </table>\r\n                </div>\r\n            </div>\r\n\r\n        </div>\r\n\r\n        <!-- No data -->\r\n        <div class=\"no-data\" *ngIf=\"employees.length == 0 && datanotfound\">\r\n            <img src=\"assets/img/no-data.svg\" alt=\"\">\r\n            <p>Data not <span>available !</span></p>\r\n        </div>\r\n    </div>\r\n\r\n    <!-- FAB Add Button -->\r\n    <div class=\"fab-btns\">\r\n        <button mat-fab color=\"primary\" matTooltip=\"Add Employee\" (click)=\"openAddForm()\">\r\n            <i class=\"material-icons\">add</i>\r\n        </button>\r\n    </div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/apt-employee/apt-employee-list/apt-employee-list.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/apt-employee/apt-employee-list/apt-employee-list.component.scss ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".status-badge {\n  display: inline-block;\n  padding: 2px 10px;\n  border-radius: 12px;\n  font-size: 12px;\n  font-weight: 500;\n}\n.status-badge.active {\n  background: #e8f5e9;\n  color: #2e7d32;\n}\n.status-badge.inactive {\n  background: #fce4ec;\n  color: #c62828;\n}\n.toggle-btn {\n  min-width: 90px;\n  font-size: 12px;\n}\ntr.long-inactive td {\n  background-color: #fff5f5 !important;\n  border-left: 3px solid #e53935;\n  color: #b71c1c;\n}"

/***/ }),

/***/ "./src/app/apt-employee/apt-employee-list/apt-employee-list.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/apt-employee/apt-employee-list/apt-employee-list.component.ts ***!
  \*******************************************************************************/
/*! exports provided: AptEmployeeListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AptEmployeeListComponent", function() { return AptEmployeeListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_services_DatabaseService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/_services/DatabaseService */ "./src/_services/DatabaseService.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng6-toastr-notifications */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/ng6-toastr-notifications/fesm5/ng6-toastr-notifications.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _apt_employee_form_apt_employee_form_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../apt-employee-form/apt-employee-form.component */ "./src/app/apt-employee/apt-employee-form/apt-employee-form.component.ts");







var AptEmployeeListComponent = /** @class */ (function () {
    function AptEmployeeListComponent(serve, router, toast, dialog) {
        this.serve = serve;
        this.router = router;
        this.toast = toast;
        this.dialog = dialog;
        this.employees = [];
        this.isLoading = false;
        this.datanotfound = false;
        this.activeTab = 'active';
        this.activeRole = 'Sales Person';
        // Role counts
        this.salesPersonActiveCount = 0;
        this.salesPersonInactiveCount = 0;
        this.adminActiveCount = 0;
        this.adminInactiveCount = 0;
        // Per-column filters
        this.filterCode = '';
        this.filterName = '';
        this.filterDesignation = '';
        this.filterMobile = '';
        this.filterBaseStation = '';
        // Tab counts
        this.activeCount = 0;
        this.inactiveCount = 0;
        this.start = 0;
        this.pagenumber = 1;
        this.total_page = 1;
        this.total = 0;
        this.page_limit = this.serve.pageLimit;
    }
    AptEmployeeListComponent.prototype.ngOnInit = function () {
        this.getEmployees();
        this.loadCounts();
    };
    AptEmployeeListComponent.prototype.changeRole = function (role) {
        this.activeRole = role;
        this.activeTab = 'active';
        this.start = 0;
        this.clearFilters();
        this.getEmployees();
        this.loadCounts();
    };
    AptEmployeeListComponent.prototype.changeTab = function (tab) {
        this.activeTab = tab;
        this.start = 0;
        this.clearFilters();
        this.getEmployees();
    };
    AptEmployeeListComponent.prototype.clearFilters = function () {
        this.filterCode = '';
        this.filterName = '';
        this.filterDesignation = '';
        this.filterMobile = '';
        this.filterBaseStation = '';
    };
    AptEmployeeListComponent.prototype.refresh = function () {
        this.start = 0;
        this.getEmployees();
        this.loadCounts();
    };
    AptEmployeeListComponent.prototype.previous = function () {
        this.start = this.start - this.page_limit;
        this.getEmployees();
    };
    AptEmployeeListComponent.prototype.nextPage = function () {
        this.start = this.start + this.page_limit;
        this.getEmployees();
    };
    AptEmployeeListComponent.prototype.loadCounts = function () {
        var _this = this;
        var roles = ['Sales Person', 'Admin'];
        roles.forEach(function (role) {
            _this.serve.post_rqst({ status: 'active', user_role: role, start: 0, pagelimit: 1 }, 'Apt_Employee/getEmployees').subscribe(function (r) {
                if (r['statusCode'] == 200) {
                    if (role === 'Sales Person') {
                        _this.salesPersonActiveCount = r['total'];
                    }
                    else {
                        _this.adminActiveCount = r['total'];
                    }
                }
            });
            _this.serve.post_rqst({ status: 'inactive', user_role: role, start: 0, pagelimit: 1 }, 'Apt_Employee/getEmployees').subscribe(function (r) {
                if (r['statusCode'] == 200) {
                    if (role === 'Sales Person') {
                        _this.salesPersonInactiveCount = r['total'];
                    }
                    else {
                        _this.adminInactiveCount = r['total'];
                    }
                }
            });
        });
        // Keep activeCount / inactiveCount in sync with current role for sub-tabs
        this.activeCount = this.activeRole === 'Sales Person' ? this.salesPersonActiveCount : this.adminActiveCount;
        this.inactiveCount = this.activeRole === 'Sales Person' ? this.salesPersonInactiveCount : this.adminInactiveCount;
    };
    AptEmployeeListComponent.prototype.getEmployees = function () {
        var _this = this;
        this.isLoading = true;
        this.datanotfound = false;
        if (this.start < 0) {
            this.start = 0;
        }
        var payload = {
            status: this.activeTab,
            user_role: this.activeRole,
            search: this.filterName || this.filterMobile || this.filterCode || this.filterDesignation || this.filterBaseStation,
            filter_code: this.filterCode,
            filter_name: this.filterName,
            filter_designation: this.filterDesignation,
            filter_mobile: this.filterMobile,
            filter_base_station: this.filterBaseStation,
            start: this.start,
            pagelimit: this.page_limit
        };
        this.serve.post_rqst(payload, 'Apt_Employee/getEmployees').subscribe(function (result) {
            _this.isLoading = false;
            if (result['statusCode'] == 200) {
                _this.employees = result['list'];
                _this.total = result['total'];
                _this.total_page = result['total_page'];
                _this.pagenumber = result['pagenumber'];
                _this.datanotfound = _this.employees.length === 0;
            }
            else {
                _this.toast.errorToastr('Failed to load employees.');
            }
        }, function () {
            _this.isLoading = false;
            _this.toast.errorToastr('Network error.');
        });
    };
    AptEmployeeListComponent.prototype.openAddForm = function () {
        var _this = this;
        var ref = this.dialog.open(_apt_employee_form_apt_employee_form_component__WEBPACK_IMPORTED_MODULE_6__["AptEmployeeFormComponent"], {
            width: '560px',
            data: { mode: 'add' }
        });
        ref.afterClosed().subscribe(function (result) {
            if (result === 'saved') {
                _this.refresh();
            }
        });
    };
    AptEmployeeListComponent.prototype.openReactivateForm = function (emp) {
        var _this = this;
        var ref = this.dialog.open(_apt_employee_form_apt_employee_form_component__WEBPACK_IMPORTED_MODULE_6__["AptEmployeeFormComponent"], {
            width: '560px',
            data: { mode: 'reactivate', employee: emp }
        });
        ref.afterClosed().subscribe(function (result) {
            if (result === 'saved') {
                _this.refresh();
            }
        });
    };
    AptEmployeeListComponent.prototype.deactivate = function (emp) {
        var _this = this;
        if (!confirm("\"" + emp.name + "\" ko deactivate karna chahte hain?")) {
            return;
        }
        this.serve.post_rqst({ id: emp.id, action: 'deactivate' }, 'Apt_Employee/toggleStatus').subscribe(function (result) {
            if (result['statusCode'] == 200) {
                _this.toast.successToastr('Employee deactivated.');
                _this.refresh();
            }
            else {
                _this.toast.errorToastr(result['message'] || 'Failed.');
            }
        });
    };
    AptEmployeeListComponent.prototype.viewDetail = function (emp) {
        this.router.navigate(['/apt-employee-list/detail', emp.mobile]);
    };
    AptEmployeeListComponent.prototype.isLongInactive = function (emp) {
        if (!emp.deactivated_on) {
            return false;
        }
        var deactivatedDate = new Date(emp.deactivated_on);
        var now = new Date();
        var diffMonths = (now.getFullYear() - deactivatedDate.getFullYear()) * 12
            + (now.getMonth() - deactivatedDate.getMonth());
        return diffMonths >= 2;
    };
    AptEmployeeListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-apt-employee-list',
            template: __webpack_require__(/*! ./apt-employee-list.component.html */ "./src/app/apt-employee/apt-employee-list/apt-employee-list.component.html"),
            styles: [__webpack_require__(/*! ./apt-employee-list.component.scss */ "./src/app/apt-employee/apt-employee-list/apt-employee-list.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_services_DatabaseService__WEBPACK_IMPORTED_MODULE_2__["DatabaseService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_4__["ToastrManager"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialog"]])
    ], AptEmployeeListComponent);
    return AptEmployeeListComponent;
}());



/***/ }),

/***/ "./src/app/apt-employee/apt-employee-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/apt-employee/apt-employee-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: AptEmployeeRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AptEmployeeRoutingModule", function() { return AptEmployeeRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _apt_employee_list_apt_employee_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./apt-employee-list/apt-employee-list.component */ "./src/app/apt-employee/apt-employee-list/apt-employee-list.component.ts");
/* harmony import */ var _apt_employee_detail_apt_employee_detail_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./apt-employee-detail/apt-employee-detail.component */ "./src/app/apt-employee/apt-employee-detail/apt-employee-detail.component.ts");
/* harmony import */ var _auth_component_guard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../auth-component.guard */ "./src/app/auth-component.guard.ts");






var routes = [
    { path: '', component: _apt_employee_list_apt_employee_list_component__WEBPACK_IMPORTED_MODULE_3__["AptEmployeeListComponent"], canActivate: [_auth_component_guard__WEBPACK_IMPORTED_MODULE_5__["AuthComponentGuard"]], data: { expectedRole: ['1'] } },
    { path: 'detail/:mobile', component: _apt_employee_detail_apt_employee_detail_component__WEBPACK_IMPORTED_MODULE_4__["AptEmployeeDetailComponent"], canActivate: [_auth_component_guard__WEBPACK_IMPORTED_MODULE_5__["AuthComponentGuard"]], data: { expectedRole: ['1'] } }
];
var AptEmployeeRoutingModule = /** @class */ (function () {
    function AptEmployeeRoutingModule() {
    }
    AptEmployeeRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AptEmployeeRoutingModule);
    return AptEmployeeRoutingModule;
}());



/***/ }),

/***/ "./src/app/apt-employee/apt-employee.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/apt-employee/apt-employee.module.ts ***!
  \*****************************************************/
/*! exports provided: AptEmployeeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AptEmployeeModule", function() { return AptEmployeeModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _apt_employee_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./apt-employee-routing.module */ "./src/app/apt-employee/apt-employee-routing.module.ts");
/* harmony import */ var _apt_employee_list_apt_employee_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./apt-employee-list/apt-employee-list.component */ "./src/app/apt-employee/apt-employee-list/apt-employee-list.component.ts");
/* harmony import */ var _apt_employee_detail_apt_employee_detail_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./apt-employee-detail/apt-employee-detail.component */ "./src/app/apt-employee/apt-employee-detail/apt-employee-detail.component.ts");
/* harmony import */ var _apt_employee_form_apt_employee_form_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./apt-employee-form/apt-employee-form.component */ "./src/app/apt-employee/apt-employee-form/apt-employee-form.component.ts");
/* harmony import */ var _material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../material */ "./src/app/material.ts");
/* harmony import */ var _app_utility_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../app-utility.module */ "./src/app/app-utility.module.ts");










var AptEmployeeModule = /** @class */ (function () {
    function AptEmployeeModule() {
    }
    AptEmployeeModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _apt_employee_list_apt_employee_list_component__WEBPACK_IMPORTED_MODULE_5__["AptEmployeeListComponent"],
                _apt_employee_detail_apt_employee_detail_component__WEBPACK_IMPORTED_MODULE_6__["AptEmployeeDetailComponent"],
                _apt_employee_form_apt_employee_form_component__WEBPACK_IMPORTED_MODULE_7__["AptEmployeeFormComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _apt_employee_routing_module__WEBPACK_IMPORTED_MODULE_4__["AptEmployeeRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _material__WEBPACK_IMPORTED_MODULE_8__["MaterialModule"],
                _app_utility_module__WEBPACK_IMPORTED_MODULE_9__["AppUtilityModule"]
            ],
            entryComponents: [
                _apt_employee_form_apt_employee_form_component__WEBPACK_IMPORTED_MODULE_7__["AptEmployeeFormComponent"]
            ]
        })
    ], AptEmployeeModule);
    return AptEmployeeModule;
}());



/***/ })

}]);