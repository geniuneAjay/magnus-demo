(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["attendance-sync-attendance-sync-module-attendance-sync-module"],{

/***/ "./src/app/attendance-sync/attendance-sync-module/attendance-sync.module.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/attendance-sync/attendance-sync-module/attendance-sync.module.ts ***!
  \**********************************************************************************/
/*! exports provided: AttendanceSyncModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AttendanceSyncModule", function() { return AttendanceSyncModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/material */ "./src/app/material.ts");
/* harmony import */ var src_app_app_utility_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/app-utility.module */ "./src/app/app-utility.module.ts");
/* harmony import */ var src_app_auth_component_guard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/auth-component.guard */ "./src/app/auth-component.guard.ts");
/* harmony import */ var _attendance_sync_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../attendance-sync.component */ "./src/app/attendance-sync/attendance-sync.component.ts");









var routes = [
    {
        path: '',
        component: _attendance_sync_component__WEBPACK_IMPORTED_MODULE_8__["AttendanceSyncComponent"],
        canActivate: [src_app_auth_component_guard__WEBPACK_IMPORTED_MODULE_7__["AuthComponentGuard"]],
        data: { expectedRole: ['1'] }
    }
];
var AttendanceSyncModule = /** @class */ (function () {
    function AttendanceSyncModule() {
    }
    AttendanceSyncModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _attendance_sync_component__WEBPACK_IMPORTED_MODULE_8__["AttendanceSyncComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                src_app_material__WEBPACK_IMPORTED_MODULE_5__["MaterialModule"],
                src_app_app_utility_module__WEBPACK_IMPORTED_MODULE_6__["AppUtilityModule"],
            ]
        })
    ], AttendanceSyncModule);
    return AttendanceSyncModule;
}());



/***/ }),

/***/ "./src/app/attendance-sync/attendance-sync.component.html":
/*!****************************************************************!*\
  !*** ./src/app/attendance-sync/attendance-sync.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-container\">\r\n  <div class=\"tools-container\">\r\n    <h2>Attendance Sync to HRMS</h2>\r\n  </div>\r\n\r\n  <div class=\"container container-scroll\">\r\n\r\n    <!-- Filter -->\r\n    <div class=\"sync-form-card\">\r\n      <div class=\"form-row\">\r\n        <div class=\"form-field\">\r\n          <label>Date</label>\r\n          <input type=\"date\" [(ngModel)]=\"date\">\r\n        </div>\r\n        <div class=\"form-field grow\">\r\n          <label>Search</label>\r\n          <input type=\"text\" [(ngModel)]=\"search\" placeholder=\"Name / Emp ID\">\r\n        </div>\r\n        <div class=\"form-field form-action\">\r\n          <button class=\"btn-search\" (click)=\"fetch()\" [disabled]=\"loader\">\r\n            <i class=\"material-icons\">search</i> Fetch\r\n          </button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <!-- Loader -->\r\n    <div class=\"sync-loader\" *ngIf=\"loader\">\r\n      <i class=\"material-icons spin\">autorenew</i>\r\n      <span>Loading marked users...</span>\r\n    </div>\r\n\r\n    <!-- Empty -->\r\n    <div class=\"sync-empty\" *ngIf=\"!loader && fetched && users.length === 0\">\r\n      <i class=\"material-icons\">event_busy</i>\r\n      <p>Nothing pending to sync for this date.</p>\r\n    </div>\r\n\r\n    <!-- User table -->\r\n    <div class=\"sync-table\" *ngIf=\"!loader && users.length > 0\">\r\n\r\n      <div class=\"tbl-toolbar\">\r\n        <span class=\"cnt\">{{ filteredUsers.length }} employee(s) to sync &middot; {{ date }}</span>\r\n        <button class=\"btn-sync-all\" [disabled]=\"syncingAll\" (click)=\"syncAll()\">\r\n          <i class=\"material-icons\">{{ syncingAll ? 'hourglass_top' : 'sync' }}</i>\r\n          {{ syncingAll ? 'Syncing all...' : 'Sync All' }}\r\n        </button>\r\n      </div>\r\n\r\n      <div class=\"tbl-row tbl-head\">\r\n        <span class=\"c-no\">#</span>\r\n        <span class=\"c-name\">Employee</span>\r\n        <span class=\"c-emp\">Emp ID</span>\r\n        <span class=\"c-t\">In</span>\r\n        <span class=\"c-t\">Out</span>\r\n        <span class=\"c-half\">1st Half</span>\r\n        <span class=\"c-half\">2nd Half</span>\r\n        <span class=\"c-act\">Action</span>\r\n      </div>\r\n\r\n      <div class=\"tbl-row\" *ngFor=\"let u of filteredUsers; let i = index\">\r\n        <span class=\"c-no\">{{ i + 1 }}</span>\r\n        <span class=\"c-name\">\r\n          {{ u.name }}\r\n          <small>{{ u.designation }}</small>\r\n        </span>\r\n        <span class=\"c-emp\">{{ u.employee_id }}</span>\r\n        <span class=\"c-t\">{{ u.from_time || '—' }}</span>\r\n        <span class=\"c-t\">{{ u.to_time || '—' }}</span>\r\n        <span class=\"c-half\"><i class=\"pill\">{{ u.first_half || '—' }}</i></span>\r\n        <span class=\"c-half\"><i class=\"pill\">{{ u.second_half || '—' }}</i></span>\r\n        <span class=\"c-act\">\r\n          <button class=\"btn-sync\"\r\n                  [class.fail]=\"u.failed\"\r\n                  [disabled]=\"u.syncing\"\r\n                  (click)=\"sync(u)\">\r\n            <ng-container *ngIf=\"u.syncing\">Syncing...</ng-container>\r\n            <ng-container *ngIf=\"!u.syncing && u.failed\"><i class=\"material-icons\">refresh</i> Retry</ng-container>\r\n            <ng-container *ngIf=\"!u.syncing && !u.failed\"><i class=\"material-icons\">sync</i> Sync</ng-container>\r\n          </button>\r\n          <span class=\"fail-msg\" *ngIf=\"u.failed && u.msg\">{{ u.msg }}</span>\r\n        </span>\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/attendance-sync/attendance-sync.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/attendance-sync/attendance-sync.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".main-container {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n}\n\n.tools-container {\n  padding: 14px 20px;\n  border-bottom: 1px solid #e5e7eb;\n}\n\n.tools-container h2 {\n  margin: 0;\n  font-size: 20px;\n  font-weight: 600;\n  color: #111827;\n}\n\n.container-scroll {\n  flex: 1;\n  overflow-y: auto;\n  padding: 20px;\n}\n\n.sync-form-card {\n  background: #fff;\n  border: 1px solid #e5e7eb;\n  border-radius: 10px;\n  padding: 18px 20px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);\n}\n\n.sync-form-card .form-row {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: flex-end;\n  gap: 16px;\n}\n\n.sync-form-card .form-field {\n  display: flex;\n  flex-direction: column;\n  min-width: 160px;\n}\n\n.sync-form-card .form-field.grow {\n  flex: 1;\n}\n\n.sync-form-card .form-field label {\n  font-size: 12px;\n  font-weight: 600;\n  color: #6b7280;\n  margin-bottom: 6px;\n  text-transform: uppercase;\n  letter-spacing: 0.3px;\n}\n\n.sync-form-card .form-field input {\n  height: 40px;\n  border: 1px solid #d1d5db;\n  border-radius: 8px;\n  padding: 0 12px;\n  font-size: 14px;\n  color: #111827;\n  background: #fff;\n  outline: none;\n}\n\n.sync-form-card .form-field input:focus {\n  border-color: #3b82f6;\n  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.15);\n}\n\n.sync-form-card .form-action {\n  min-width: auto;\n}\n\n.btn-search {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  height: 40px;\n  padding: 0 18px;\n  border: none;\n  border-radius: 8px;\n  background: #3b82f6;\n  color: #fff;\n  font-size: 14px;\n  font-weight: 600;\n  cursor: pointer;\n}\n\n.btn-search i {\n  font-size: 18px;\n}\n\n.btn-search:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n\n.sync-loader, .sync-empty {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 10px;\n  padding: 60px 0;\n  color: #9ca3af;\n  text-align: center;\n}\n\n.sync-loader i, .sync-empty i {\n  font-size: 48px;\n}\n\n.sync-loader .spin, .sync-empty .spin {\n  animation: sync-spin 1s linear infinite;\n  font-size: 30px;\n}\n\n.sync-loader p, .sync-empty p {\n  margin: 0;\n}\n\n@keyframes sync-spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n\n.sync-table {\n  margin-top: 18px;\n  background: #fff;\n  border: 1px solid #e5e7eb;\n  border-radius: 12px;\n  overflow: hidden;\n  box-shadow: 0 1px 3px rgba(16, 24, 40, 0.05);\n}\n\n.sync-table .tbl-toolbar {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 12px 16px;\n  background: #f8fafc;\n  border-bottom: 1px solid #eef2f7;\n}\n\n.sync-table .tbl-toolbar .cnt {\n  font-size: 13px;\n  font-weight: 600;\n  color: #475569;\n}\n\n.sync-table .btn-sync-all {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  height: 36px;\n  padding: 0 16px;\n  border: none;\n  border-radius: 8px;\n  background: #10b981;\n  color: #fff;\n  font-size: 13px;\n  font-weight: 700;\n  cursor: pointer;\n}\n\n.sync-table .btn-sync-all i {\n  font-size: 18px;\n}\n\n.sync-table .btn-sync-all:disabled {\n  opacity: 0.7;\n  cursor: default;\n}\n\n.sync-table .tbl-row {\n  display: grid;\n  grid-template-columns: 36px 1.8fr 0.9fr 0.65fr 0.65fr 0.8fr 0.8fr 1.3fr;\n  align-items: center;\n  padding: 11px 16px;\n  border-top: 1px solid #f1f5f9;\n  font-size: 13.5px;\n  color: #334155;\n}\n\n.sync-table .tbl-row.tbl-head {\n  border-top: none;\n  background: #f8fafc;\n  font-size: 11px;\n  font-weight: 700;\n  color: #94a3b8;\n  text-transform: uppercase;\n  letter-spacing: 0.4px;\n}\n\n.sync-table .tbl-row .c-name {\n  font-weight: 600;\n  color: #111827;\n  display: flex;\n  flex-direction: column;\n}\n\n.sync-table .tbl-row .c-name small {\n  font-weight: 400;\n  color: #94a3b8;\n  font-size: 11.5px;\n}\n\n.sync-table .tbl-row .pill {\n  display: inline-block;\n  padding: 2px 10px;\n  border-radius: 20px;\n  background: #eef2f7;\n  color: #475569;\n  font-style: normal;\n  font-size: 12px;\n  font-weight: 600;\n}\n\n.sync-table .c-act {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n\n.sync-table .btn-sync {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  height: 34px;\n  padding: 0 14px;\n  border: none;\n  border-radius: 8px;\n  background: #3b5bdb;\n  color: #fff;\n  font-size: 13px;\n  font-weight: 600;\n  cursor: pointer;\n}\n\n.sync-table .btn-sync i {\n  font-size: 17px;\n}\n\n.sync-table .btn-sync:disabled {\n  opacity: 0.85;\n  cursor: default;\n}\n\n.sync-table .btn-sync.done {\n  background: #10b981;\n}\n\n.sync-table .btn-sync.fail {\n  background: #ef4444;\n}\n\n.sync-table .fail-msg {\n  font-size: 11.5px;\n  color: #ef4444;\n}"

/***/ }),

/***/ "./src/app/attendance-sync/attendance-sync.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/attendance-sync/attendance-sync.component.ts ***!
  \**************************************************************/
/*! exports provided: AttendanceSyncComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AttendanceSyncComponent", function() { return AttendanceSyncComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_services_DatabaseService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/_services/DatabaseService */ "./src/_services/DatabaseService.ts");
/* harmony import */ var ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng6-toastr-notifications */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/ng6-toastr-notifications/fesm5/ng6-toastr-notifications.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! moment */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);





var AttendanceSyncComponent = /** @class */ (function () {
    function AttendanceSyncComponent(service, toast) {
        this.service = service;
        this.toast = toast;
        this.loader = false;
        this.fetched = false;
        this.syncingAll = false;
        this.date = moment__WEBPACK_IMPORTED_MODULE_4__().format('YYYY-MM-DD');
        this.search = '';
        this.users = [];
    }
    AttendanceSyncComponent.prototype.fetch = function () {
        var _this = this;
        if (!this.date) {
            this.toast.errorToastr('Please select a date.');
            return;
        }
        this.loader = true;
        this.fetched = false;
        this.users = [];
        this.service.post_rqst({ date: this.date }, 'Attendance/getMarkedUsersByDate').subscribe(function (res) {
            _this.loader = false;
            _this.fetched = true;
            if (res['statusCode'] == 200) {
                _this.users = (res['users'] || []).map(function (u) { return (tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, u, { syncing: false, synced: false, failed: false, msg: '' })); });
            }
            else {
                _this.toast.errorToastr(res['statusMsg'] || 'Failed to load users.');
            }
        }, function () {
            _this.loader = false;
            _this.fetched = true;
            _this.toast.errorToastr('Something went wrong. Please try again.');
        });
    };
    Object.defineProperty(AttendanceSyncComponent.prototype, "filteredUsers", {
        get: function () {
            var q = this.search.toLowerCase().trim();
            if (!q) {
                return this.users;
            }
            return this.users.filter(function (u) {
                return (u.name || '').toLowerCase().includes(q) ||
                    (u.employee_id || '').toLowerCase().includes(q);
            });
        },
        enumerable: true,
        configurable: true
    });
    AttendanceSyncComponent.prototype.sync = function (u) {
        var _this = this;
        this.syncOne(u).then(function (ok) {
            if (ok) {
                _this.toast.successToastr(u.name + ' synced.');
            }
            else if (u.msg) {
                _this.toast.errorToastr(u.name + ': ' + u.msg);
            }
        });
    };
    // Sync a single user; resolves true on success (and removes the row).
    AttendanceSyncComponent.prototype.syncOne = function (u) {
        var _this = this;
        if (u.syncing) {
            return Promise.resolve(false);
        }
        u.syncing = true;
        u.failed = false;
        u.msg = '';
        return this.service.post_rqst({ user_id: u.user_id, date: this.date }, 'Attendance/syncUserAttendanceToBiometric').toPromise().then(function (res) {
            u.syncing = false;
            if (res && res['statusCode'] == 200 && res['synced']) {
                _this.removeUser(u);
                return true;
            }
            u.failed = true;
            u.msg = (res && res['statusMsg']) ? res['statusMsg'] : 'Failed';
            return false;
        }).catch(function () {
            u.syncing = false;
            u.failed = true;
            u.msg = 'Error';
            return false;
        });
    };
    // Sync every listed user at once (in parallel); each success drops from the list.
    AttendanceSyncComponent.prototype.syncAll = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var list, results, ok, fail;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (this.syncingAll || this.users.length === 0) {
                            return [2 /*return*/];
                        }
                        this.syncingAll = true;
                        list = this.users.slice();
                        return [4 /*yield*/, Promise.all(list.map(function (u) { return _this.syncOne(u); }))];
                    case 1:
                        results = _a.sent();
                        ok = results.filter(function (r) { return r; }).length;
                        fail = results.length - ok;
                        this.syncingAll = false;
                        if (fail === 0) {
                            this.toast.successToastr('All ' + ok + ' synced successfully.');
                        }
                        else {
                            this.toast.warningToastr(ok + ' synced, ' + fail + ' failed.');
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    AttendanceSyncComponent.prototype.removeUser = function (u) {
        this.users = this.users.filter(function (x) { return x.user_id !== u.user_id; });
    };
    AttendanceSyncComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-attendance-sync',
            template: __webpack_require__(/*! ./attendance-sync.component.html */ "./src/app/attendance-sync/attendance-sync.component.html"),
            styles: [__webpack_require__(/*! ./attendance-sync.component.scss */ "./src/app/attendance-sync/attendance-sync.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_services_DatabaseService__WEBPACK_IMPORTED_MODULE_2__["DatabaseService"],
            ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_3__["ToastrManager"]])
    ], AttendanceSyncComponent);
    return AttendanceSyncComponent;
}());



/***/ })

}]);