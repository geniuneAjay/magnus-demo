(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["user-vacancy-user-vacancy-module"],{

/***/ "./src/app/user-vacancy/user-vacancy-form/user-vacancy-form.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/user-vacancy/user-vacancy-form/user-vacancy-form.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h2 mat-dialog-title class=\"uvf-title\">\r\n    <i class=\"material-icons\">location_city</i>\r\n    <span *ngIf=\"mode === 'add'\">Add Base Station</span>\r\n    <span *ngIf=\"mode === 'edit'\">Edit Base Station</span>\r\n</h2>\r\n\r\n<mat-dialog-content class=\"uvf-content\">\r\n    <div class=\"uvf-grid\">\r\n\r\n        <mat-form-field appearance=\"outline\" class=\"span-1\">\r\n            <mat-label>Station / Location *</mat-label>\r\n            <input matInput [(ngModel)]=\"form.station_name\" placeholder=\"DELHI\">\r\n        </mat-form-field>\r\n\r\n        <mat-form-field appearance=\"outline\" class=\"span-1\">\r\n            <mat-label>State</mat-label>\r\n            <input matInput [(ngModel)]=\"form.state_name\" placeholder=\"Delhi NCR\">\r\n        </mat-form-field>\r\n\r\n        <mat-form-field appearance=\"outline\" class=\"span-1\">\r\n            <mat-label>Designation</mat-label>\r\n            <mat-select [(ngModel)]=\"form.designation_ids\" multiple>\r\n                <mat-option *ngFor=\"let d of designations\" [value]=\"d.id\">{{ d.role_name }}</mat-option>\r\n            </mat-select>\r\n        </mat-form-field>\r\n\r\n        <mat-form-field appearance=\"outline\" class=\"span-1\">\r\n            <mat-label>Assigned User (optional)</mat-label>\r\n            <mat-select [(ngModel)]=\"form.assigned_user_id\" (selectionChange)=\"onAssignedChange()\">\r\n                <mat-option [value]=\"''\">&mdash; Vacant &mdash;</mat-option>\r\n                <mat-option *ngFor=\"let u of users\" [value]=\"u.id\">\r\n                    {{ u.name }}<span *ngIf=\"u.employee_id\"> ({{ u.employee_id }})</span>\r\n                </mat-option>\r\n            </mat-select>\r\n        </mat-form-field>\r\n\r\n        <div class=\"span-2\">\r\n            <mat-form-field appearance=\"outline\" class=\"full\">\r\n                <mat-label>Owner / Senior *</mat-label>\r\n                <mat-select [(ngModel)]=\"form.owner_id\">\r\n                    <mat-option *ngFor=\"let u of users\" [value]=\"u.id\">\r\n                        {{ u.name }}<span *ngIf=\"u.employee_id\"> ({{ u.employee_id }})</span>\r\n                    </mat-option>\r\n                </mat-select>\r\n            </mat-form-field>\r\n            <p class=\"uvf-hint\" [class.auto]=\"ownerAuto\">\r\n                <ng-container *ngIf=\"ownerAuto\">\r\n                    <i class=\"material-icons\">auto_awesome</i>\r\n                    Auto-set from the assigned user's direct senior. You can change it if needed.\r\n                </ng-container>\r\n                <ng-container *ngIf=\"!ownerAuto\">\r\n                    Vacant station &rarr; choose the owner (senior) manually.\r\n                </ng-container>\r\n            </p>\r\n        </div>\r\n\r\n        <mat-form-field appearance=\"outline\" class=\"span-1\">\r\n            <mat-label>Status</mat-label>\r\n            <mat-select [(ngModel)]=\"form.status\">\r\n                <mat-option value=\"OPEN\">Vacant (Open)</mat-option>\r\n                <mat-option value=\"CLOSED\">Filled (Closed)</mat-option>\r\n            </mat-select>\r\n        </mat-form-field>\r\n\r\n        <div class=\"span-1 uvf-repl\">\r\n            <mat-checkbox [(ngModel)]=\"form.replacement_needed\" color=\"warn\">\r\n                Replacement Needed\r\n            </mat-checkbox>\r\n            <p class=\"uvf-hint\">Post is currently filled but a new person is required.</p>\r\n        </div>\r\n\r\n        <mat-form-field appearance=\"outline\" class=\"span-2 full\">\r\n            <mat-label>Remarks</mat-label>\r\n            <input matInput [(ngModel)]=\"form.remarks\" placeholder=\"Optional note\">\r\n        </mat-form-field>\r\n\r\n    </div>\r\n</mat-dialog-content>\r\n\r\n<mat-dialog-actions align=\"end\" class=\"uvf-actions\">\r\n    <button mat-button (click)=\"cancel()\" [disabled]=\"isSaving\">Cancel</button>\r\n    <button mat-raised-button color=\"accent\" (click)=\"save()\" [disabled]=\"isSaving\">\r\n        {{ isSaving ? 'Saving...' : (mode === 'add' ? 'Add Station' : 'Update') }}\r\n    </button>\r\n</mat-dialog-actions>\r\n"

/***/ }),

/***/ "./src/app/user-vacancy/user-vacancy-form/user-vacancy-form.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/user-vacancy/user-vacancy-form/user-vacancy-form.component.scss ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".uvf-title {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  margin: 0;\n  padding: 18px 20px 6px;\n  font-size: 18px;\n  font-weight: 600;\n  color: #1a237e;\n}\n.uvf-title i {\n  font-size: 22px;\n}\n.uvf-content {\n  padding: 8px 20px 0 !important;\n  max-height: 70vh;\n}\n.uvf-content .uvf-grid {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 4px 16px;\n}\n.uvf-content .uvf-grid .span-1 {\n  grid-column: span 1;\n}\n.uvf-content .uvf-grid .span-2 {\n  grid-column: span 2;\n}\n.uvf-content .uvf-grid mat-form-field {\n  width: 100%;\n}\n.uvf-content .uvf-grid mat-form-field.full {\n  width: 100%;\n}\n.uvf-content .uvf-repl {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  padding-bottom: 14px;\n}\n.uvf-content .uvf-repl .uvf-hint {\n  margin: 4px 0 0;\n}\n.uvf-content .uvf-hint {\n  display: flex;\n  align-items: center;\n  gap: 5px;\n  font-size: 11.5px;\n  line-height: 1.4;\n  color: #8a8a8a;\n  margin: -10px 0 10px;\n}\n.uvf-content .uvf-hint i {\n  font-size: 15px;\n}\n.uvf-content .uvf-hint.auto {\n  color: #2e7d32;\n  font-weight: 500;\n}\n.uvf-content .uvf-hint.auto i {\n  color: #2e7d32;\n}\n.uvf-actions {\n  padding: 6px 20px 18px !important;\n}"

/***/ }),

/***/ "./src/app/user-vacancy/user-vacancy-form/user-vacancy-form.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/user-vacancy/user-vacancy-form/user-vacancy-form.component.ts ***!
  \*******************************************************************************/
/*! exports provided: UserVacancyFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserVacancyFormComponent", function() { return UserVacancyFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var src_services_DatabaseService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/_services/DatabaseService */ "./src/_services/DatabaseService.ts");
/* harmony import */ var ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng6-toastr-notifications */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/ng6-toastr-notifications/fesm5/ng6-toastr-notifications.js");





var UserVacancyFormComponent = /** @class */ (function () {
    function UserVacancyFormComponent(dialogRef, data, serve, toast) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.serve = serve;
        this.toast = toast;
        this.mode = 'add'; // 'add' | 'edit'
        this.isSaving = false;
        this.users = [];
        this.designations = []; // roles list (multi-select source)
        this.ownerAuto = false; // true jab owner assigned-user se auto-fill hua ho
        this.parentOf = {}; // asm_id -> rsm_id (direct senior)
        this.form = {
            id: '',
            station_name: '',
            state_name: '',
            designation_ids: [],
            owner_id: '',
            assigned_user_id: '',
            status: 'OPEN',
            replacement_needed: false,
            remarks: ''
        };
    }
    UserVacancyFormComponent.prototype.ngOnInit = function () {
        this.mode = this.data.mode || 'add';
        this.loadUsers();
        this.loadDesignations();
        if (this.mode === 'edit' && this.data.station) {
            var s = this.data.station;
            this.form = {
                id: s.id,
                station_name: s.station_name || '',
                state_name: s.state_name || '',
                // comma-separated ids ("5,8") -> array of string ids for mat-select pre-select
                designation_ids: s.designation_id
                    ? String(s.designation_id).split(',').map(function (x) { return x.trim(); }).filter(function (x) { return x; })
                    : [],
                owner_id: s.owner_id || '',
                assigned_user_id: s.assigned_user_id || '',
                status: s.status || (s.assigned_user_id ? 'CLOSED' : 'OPEN'),
                replacement_needed: (s.replacement_needed == 1 || s.replacement_needed === true),
                remarks: s.remarks || ''
            };
        }
    };
    UserVacancyFormComponent.prototype.loadDesignations = function () {
        var _this = this;
        this.serve.post_rqst({ search: '' }, 'Master/designationList').subscribe(function (result) {
            if (result['statusCode'] == 200) {
                _this.designations = result['data'] || [];
            }
        });
    };
    UserVacancyFormComponent.prototype.loadUsers = function () {
        var _this = this;
        this.serve.post_rqst({}, 'Master/baseStationUserList').subscribe(function (result) {
            if (result['statusCode'] == 200) {
                _this.users = result['result'] || [];
                var assignments = result['assignments'] || [];
                _this.parentOf = {};
                for (var _i = 0, assignments_1 = assignments; _i < assignments_1.length; _i++) {
                    var a = assignments_1[_i];
                    _this.parentOf[a.asm_id] = a.rsm_id; // junior -> direct senior
                }
            }
        });
    };
    // Assigned user badalne par owner auto-fill + status sync
    UserVacancyFormComponent.prototype.onAssignedChange = function () {
        // status: assigned user hai -> Filled (CLOSED), warna Vacant (OPEN)
        this.form.status = this.form.assigned_user_id ? 'CLOSED' : 'OPEN';
        if (this.form.assigned_user_id) {
            var seniorId = this.parentOf[this.form.assigned_user_id];
            if (seniorId) {
                this.form.owner_id = seniorId;
                this.ownerAuto = true;
                return;
            }
        }
        // vacant ya senior nahi mila -> owner manual chunne do
        this.ownerAuto = false;
    };
    UserVacancyFormComponent.prototype.save = function () {
        var _this = this;
        if (!this.form.station_name) {
            this.toast.warningToastr('Station name is required.');
            return;
        }
        if (!this.form.owner_id) {
            this.toast.warningToastr('Owner (senior) is required. Select an assigned user or choose an owner manually.');
            return;
        }
        this.isSaving = true;
        var endpoint = this.mode === 'add' ? 'Master/baseStationMasterAdd' : 'Master/baseStationMasterEdit';
        this.serve.post_rqst({ data: this.form }, endpoint).subscribe(function (result) {
            _this.isSaving = false;
            if (result['statusCode'] == 200) {
                _this.toast.successToastr(_this.mode === 'add' ? 'Base station added.' : 'Base station updated.');
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
    UserVacancyFormComponent.prototype.cancel = function () {
        this.dialogRef.close();
    };
    UserVacancyFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user-vacancy-form',
            template: __webpack_require__(/*! ./user-vacancy-form.component.html */ "./src/app/user-vacancy/user-vacancy-form/user-vacancy-form.component.html"),
            styles: [__webpack_require__(/*! ./user-vacancy-form.component.scss */ "./src/app/user-vacancy/user-vacancy-form/user-vacancy-form.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"], Object, src_services_DatabaseService__WEBPACK_IMPORTED_MODULE_3__["DatabaseService"],
            ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_4__["ToastrManager"]])
    ], UserVacancyFormComponent);
    return UserVacancyFormComponent;
}());



/***/ }),

/***/ "./src/app/user-vacancy/user-vacancy-list/user-vacancy-list.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/user-vacancy/user-vacancy-list/user-vacancy-list.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-container\">\r\n<div class=\"uv-wrap\">\r\n\r\n    <div class=\"uv-header\">\r\n        <div class=\"uv-title\">\r\n            <i class=\"material-icons\">location_city</i>\r\n            <span>User Vacancy &mdash; Base Station Master</span>\r\n        </div>\r\n        <div class=\"uv-actions\">\r\n            <div class=\"uv-viewtoggle\">\r\n                <button [class.active]=\"viewMode === 'list'\" (click)=\"setView('list')\">\r\n                    <i class=\"material-icons\">view_list</i> List\r\n                </button>\r\n                <button [class.active]=\"viewMode === 'tree'\" (click)=\"setView('tree')\">\r\n                    <i class=\"material-icons\">account_tree</i> Tree\r\n                </button>\r\n            </div>\r\n            <button mat-raised-button color=\"accent\" (click)=\"openAddForm()\">\r\n                <i class=\"material-icons\">add</i> Add Base Station\r\n            </button>\r\n        </div>\r\n    </div>\r\n\r\n    <!-- ===================== LIST VIEW ===================== -->\r\n    <ng-container *ngIf=\"viewMode === 'list'\">\r\n\r\n    <div class=\"uv-stats\">\r\n        <span class=\"chip total\">Total: {{ totalStations }}</span>\r\n        <span class=\"chip filled\">Filled: {{ filledCount }}</span>\r\n        <span class=\"chip vacant\">Vacant: {{ vacantCount }}</span>\r\n        <span class=\"chip replacement\">Replacement: {{ replacementCount }}</span>\r\n    </div>\r\n\r\n    <!-- ===== TEMPLATE BAR ===== -->\r\n    <div class=\"tmpl-bar\">\r\n        <span class=\"tmpl-bar-label\"><i class=\"material-icons\">bookmark</i> Templates:</span>\r\n        <div class=\"tmpl-bar-chips\" *ngIf=\"!loadingTemplates\">\r\n            <div class=\"tmpl-bar-chip\"\r\n                *ngFor=\"let tmpl of templates\"\r\n                [class.tmpl-bar-chip--active]=\"activeTemplateId === tmpl.id\"\r\n                (click)=\"applyTemplate(tmpl)\"\r\n                matTooltip=\"{{tmpl.user_ids?.length}} user(s)\">\r\n                <i class=\"material-icons\">people</i>\r\n                {{tmpl.template_name}}\r\n                <span class=\"tmpl-bar-count\">{{tmpl.user_ids?.length}}</span>\r\n                <i class=\"material-icons tmpl-edit-icon\"\r\n                    (click)=\"$event.stopPropagation(); openTemplateEditor(tmpl)\"\r\n                    matTooltip=\"Edit template\">edit</i>\r\n            </div>\r\n            <button class=\"tmpl-bar-clear\" *ngIf=\"activeTemplateId\" (click)=\"clearTemplate()\" matTooltip=\"Clear template\">\r\n                <i class=\"material-icons\">close</i> Clear\r\n            </button>\r\n            <button class=\"tmpl-bar-new\" (click)=\"openTemplateEditor()\" matTooltip=\"Create new template\">\r\n                <i class=\"material-icons\">add</i> New\r\n            </button>\r\n        </div>\r\n        <div class=\"tmpl-bar-skeleton\" *ngIf=\"loadingTemplates\">\r\n            <div class=\"sk-tmpl\" *ngFor=\"let i of [1,2,3]\">&nbsp;</div>\r\n        </div>\r\n    </div>\r\n\r\n    <div *ngIf=\"isLoading\" class=\"uv-loading\">Loading...</div>\r\n\r\n    <div *ngIf=\"!isLoading && datanotfound\" class=\"uv-empty\">\r\n        <p>No base stations found.</p>\r\n        <button mat-stroked-button (click)=\"clearFilters()\">\r\n            <i class=\"material-icons\" style=\"font-size:16px;vertical-align:middle;\">clear</i> Clear Filters\r\n        </button>\r\n    </div>\r\n\r\n    <table *ngIf=\"!isLoading && !datanotfound\" class=\"uv-table\">\r\n        <thead>\r\n            <tr>\r\n                <th style=\"width:34%\">Owner / Base Station</th>\r\n                <th style=\"width:18%\">Designation</th>\r\n                <th style=\"width:22%\">Assigned User (Candidate)</th>\r\n                <th style=\"width:12%\">Status</th>\r\n                <th style=\"width:14%\">Action</th>\r\n            </tr>\r\n            <tr class=\"uv-filter-row\">\r\n                <th>\r\n                    <div class=\"dual-filter\">\r\n                        <input class=\"col-filter\" [(ngModel)]=\"filterOwner\" (keyup.enter)=\"getList()\"\r\n                            placeholder=\"Owner name...\">\r\n                        <input class=\"col-filter\" [(ngModel)]=\"filterStation\" (keyup.enter)=\"getList()\"\r\n                            placeholder=\"Station...\">\r\n                    </div>\r\n                </th>\r\n                <th>\r\n                    <input class=\"col-filter\" [(ngModel)]=\"filterDesignation\" (keyup.enter)=\"getList()\"\r\n                        placeholder=\"Designation...\">\r\n                </th>\r\n                <th>\r\n                    <input class=\"col-filter\" [(ngModel)]=\"filterAssigned\" (keyup.enter)=\"getList()\"\r\n                        placeholder=\"User name...\">\r\n                </th>\r\n                <th>\r\n                    <select class=\"col-filter\" [(ngModel)]=\"filterStatus\" (change)=\"getList()\">\r\n                        <option value=\"\">All</option>\r\n                        <option value=\"OPEN\">Vacant</option>\r\n                        <option value=\"CLOSED\">Filled</option>\r\n                        <option value=\"REPLACEMENT\">Replacement Needed</option>\r\n                        <option value=\"VACANT_OR_REPLACEMENT\">Vacant + Replacement</option>\r\n                    </select>\r\n                </th>\r\n                <th class=\"filter-actions\">\r\n                    <button mat-stroked-button class=\"sm-btn\" (click)=\"getList()\" title=\"Search\">\r\n                        <i class=\"material-icons\">search</i>\r\n                    </button>\r\n                    <button mat-stroked-button class=\"sm-btn\" (click)=\"clearFilters()\" title=\"Clear\">\r\n                        <i class=\"material-icons\">clear</i>\r\n                    </button>\r\n                </th>\r\n            </tr>\r\n        </thead>\r\n        <tbody>\r\n            <ng-container *ngFor=\"let row of rows\">\r\n\r\n                <!-- Owner / Senior header row -->\r\n                <tr *ngIf=\"row.type === 'owner'\" class=\"uv-owner-row\" [ngClass]=\"'depth-' + (row.depth > 4 ? 4 : row.depth)\">\r\n                    <td class=\"name-td\" [style.paddingLeft.px]=\"10 + row.depth * 24\">\r\n                        <span class=\"tree-accent\"></span>\r\n                        <span class=\"lvl-badge\">L{{ row.depth + 1 }}</span>\r\n                        <i class=\"material-icons owner-ic\">account_circle</i>\r\n                        <strong class=\"owner-name\">{{ row.ownerName }}</strong>\r\n                        <span class=\"owner-code\" *ngIf=\"row.ownerCode\">{{ row.ownerCode }}</span>\r\n                    </td>\r\n                    <td class=\"muted\">{{ row.ownerDesignation }}</td>\r\n                    <td colspan=\"3\"></td>\r\n                </tr>\r\n\r\n                <!-- Base station row -->\r\n                <tr *ngIf=\"row.type === 'station'\"\r\n                    class=\"uv-station-row\"\r\n                    [class.vacant]=\"!row.station.assigned_user_id || row.station.status === 'OPEN'\"\r\n                    [class.senior]=\"row.isSenior\">\r\n                    <td class=\"name-td\" [style.paddingLeft.px]=\"10 + row.depth * 24\">\r\n                        <span class=\"tree-accent station\"></span>\r\n                        <i class=\"material-icons station-ic\">place</i>\r\n                        <span class=\"station-name\">{{ row.station.station_name }}</span>\r\n                        <span class=\"state-tag\" *ngIf=\"row.station.state_name\">{{ row.station.state_name }}</span>\r\n                        <span class=\"senior-badge\" *ngIf=\"row.isSenior\" matTooltip=\"Has {{ row.juniorCount }} junior post(s)\">\r\n                            <i class=\"material-icons\">supervisor_account</i>{{ row.juniorCount }}\r\n                        </span>\r\n                    </td>\r\n                    <td class=\"muted\">{{ row.station.designation_name || '&mdash;' }}</td>\r\n                    <td>\r\n                        <span class=\"assigned-user\" *ngIf=\"row.station.assigned_user_id\">\r\n                            <i class=\"material-icons\">person</i>{{ row.station.assigned_user_name }}\r\n                        </span>\r\n                        <span *ngIf=\"!row.station.assigned_user_id\" class=\"blank-cell\">&mdash; vacant &mdash;</span>\r\n                    </td>\r\n                    <td>\r\n                        <span class=\"status-badge\"\r\n                            [class.open]=\"row.station.status === 'OPEN'\"\r\n                            [class.closed]=\"row.station.status === 'CLOSED'\">\r\n                            {{ row.station.status === 'CLOSED' ? 'CLOSED' : 'OPEN' }}\r\n                        </span>\r\n                        <span class=\"repl-badge\" *ngIf=\"row.station.replacement_needed == 1\"\r\n                            matTooltip=\"Replacement needed\">\r\n                            <i class=\"material-icons\">sync_problem</i>REPL\r\n                        </span>\r\n                    </td>\r\n                    <td class=\"action-td\">\r\n                        <button mat-icon-button color=\"primary\" (click)=\"openEditForm(row.station)\" title=\"Edit\">\r\n                            <i class=\"material-icons\">edit</i>\r\n                        </button>\r\n                        <button mat-icon-button color=\"warn\" (click)=\"deleteStation(row.station)\" title=\"Delete\">\r\n                            <i class=\"material-icons\">delete</i>\r\n                        </button>\r\n                    </td>\r\n                </tr>\r\n\r\n            </ng-container>\r\n        </tbody>\r\n    </table>\r\n\r\n    </ng-container>\r\n    <!-- ===================== /LIST VIEW ===================== -->\r\n\r\n    <!-- ===================== TREE VIEW ===================== -->\r\n    <ng-container *ngIf=\"viewMode === 'tree'\">\r\n        <div class=\"uv-tree-search\">\r\n            <div class=\"uv-tree-input\">\r\n                <i class=\"material-icons\">search</i>\r\n                <input [(ngModel)]=\"treeSearch\" (input)=\"onTreeSearch()\" (focus)=\"onTreeSearch()\"\r\n                    placeholder=\"Type a person's name or emp code...\">\r\n                <i class=\"material-icons clear-ic\" *ngIf=\"treeSearch\" (click)=\"clearTree()\">close</i>\r\n\r\n                <div class=\"uv-tree-options\" *ngIf=\"showTreeOptions && treeOptions.length\">\r\n                    <div class=\"opt\" *ngFor=\"let u of treeOptions\" (click)=\"selectTreeUser(u)\">\r\n                        <i class=\"material-icons\">person</i>\r\n                        <span>{{ u.name }}</span>\r\n                        <span class=\"opt-code\" *ngIf=\"u.employee_id\">{{ u.employee_id }}</span>\r\n                        <span class=\"opt-desig\" *ngIf=\"u.designation_name\">{{ u.designation_name }}</span>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"uv-tree-controls\" *ngIf=\"treeRoot\">\r\n                <span class=\"subs-chip\">{{ treeTotalSubs }} subordinate(s)</span>\r\n                <button mat-stroked-button (click)=\"expandAllTree()\">Expand All</button>\r\n                <button mat-stroked-button (click)=\"collapseAllTree()\">Collapse All</button>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"uv-tree-empty\" *ngIf=\"!treeRoot\">\r\n            <i class=\"material-icons\">account_tree</i>\r\n            <p>Search and select a person to view their full downstream hierarchy.</p>\r\n        </div>\r\n\r\n        <div class=\"uv-tree\" *ngIf=\"treeRoot\">\r\n            <ul class=\"org-tree\">\r\n                <ng-container *ngTemplateOutlet=\"treeNode; context: { $implicit: treeRoot, root: true }\"></ng-container>\r\n            </ul>\r\n        </div>\r\n    </ng-container>\r\n    <!-- ===================== /TREE VIEW ===================== -->\r\n\r\n</div>\r\n</div>\r\n\r\n<!-- Recursive org-chart node template -->\r\n<ng-template #treeNode let-node let-root=\"root\">\r\n    <li>\r\n        <div class=\"org-node\"\r\n            [class.org-root]=\"root\"\r\n            [class.org-vacant]=\"node.stations.length && node.stations[0].status === 'OPEN'\">\r\n            <div class=\"org-node-head\">\r\n                <i class=\"material-icons\">{{ root ? 'account_circle' : 'person' }}</i>\r\n                <span class=\"org-name\">{{ node.name }}</span>\r\n                <span class=\"org-code\" *ngIf=\"node.code\">{{ node.code }}</span>\r\n            </div>\r\n\r\n            <div class=\"org-node-station\" *ngIf=\"node.stations.length; else noStation\">\r\n                <span *ngFor=\"let s of node.stations\">\r\n                    <i class=\"material-icons\">place</i>{{ s.station_name }}\r\n                    <span class=\"org-status\" [class.open]=\"s.status === 'OPEN'\" [class.closed]=\"s.status === 'CLOSED'\">\r\n                        {{ s.status === 'CLOSED' ? 'CLOSED' : 'OPEN' }}\r\n                    </span>\r\n                </span>\r\n            </div>\r\n            <ng-template #noStation><div class=\"org-node-nostation\">no base station</div></ng-template>\r\n\r\n            <span class=\"org-toggle\" *ngIf=\"node.children.length\" (click)=\"toggleNode(node)\"\r\n                matTooltip=\"{{ node.children.length }} junior(s)\">\r\n                <i class=\"material-icons\">{{ node.collapsed ? 'add' : 'remove' }}</i>\r\n                {{ node.children.length }}\r\n            </span>\r\n        </div>\r\n\r\n        <ul *ngIf=\"node.children.length && !node.collapsed\">\r\n            <ng-container *ngFor=\"let child of node.children\">\r\n                <ng-container *ngTemplateOutlet=\"treeNode; context: { $implicit: child, root: false }\"></ng-container>\r\n            </ng-container>\r\n        </ul>\r\n    </li>\r\n</ng-template>\r\n"

/***/ }),

/***/ "./src/app/user-vacancy/user-vacancy-list/user-vacancy-list.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/user-vacancy/user-vacancy-list/user-vacancy-list.component.scss ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".uv-wrap {\n  padding: 18px 20px;\n  height: calc(100vh - 56px);\n  overflow-y: auto;\n  box-sizing: border-box;\n  background: #f4f6fb;\n}\n.uv-wrap .uv-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 14px;\n}\n.uv-wrap .uv-header .uv-title {\n  display: flex;\n  align-items: center;\n  font-size: 19px;\n  font-weight: 700;\n  color: #1a237e;\n}\n.uv-wrap .uv-header .uv-title i {\n  margin-right: 8px;\n}\n.uv-wrap .uv-actions {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.uv-wrap .uv-viewtoggle {\n  display: inline-flex;\n  border: 1px solid #c5cae9;\n  border-radius: 8px;\n  overflow: hidden;\n}\n.uv-wrap .uv-viewtoggle button {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  border: none;\n  background: #fff;\n  color: #3949ab;\n  font-size: 12.5px;\n  font-weight: 600;\n  padding: 7px 14px;\n  cursor: pointer;\n  transition: all 0.15s;\n}\n.uv-wrap .uv-viewtoggle button i {\n  font-size: 16px;\n}\n.uv-wrap .uv-viewtoggle button:hover {\n  background: #eef2fb;\n}\n.uv-wrap .uv-viewtoggle button.active {\n  background: #3949ab;\n  color: #fff;\n}\n.uv-wrap {\n  /* ===== tree view ===== */\n}\n.uv-wrap .uv-tree-search {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  flex-wrap: wrap;\n  margin-bottom: 14px;\n}\n.uv-wrap .uv-tree-input {\n  position: relative;\n  flex: 1;\n  min-width: 280px;\n  max-width: 460px;\n  display: flex;\n  align-items: center;\n  background: #fff;\n  border: 1px solid #cfd8e3;\n  border-radius: 10px;\n  padding: 0 10px;\n  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.05);\n}\n.uv-wrap .uv-tree-input > i {\n  color: #90a4ae;\n  font-size: 19px;\n}\n.uv-wrap .uv-tree-input input {\n  flex: 1;\n  border: none;\n  outline: none;\n  padding: 11px 8px;\n  font-size: 13.5px;\n  background: transparent;\n}\n.uv-wrap .uv-tree-input .clear-ic {\n  cursor: pointer;\n  color: #b0bec5;\n  font-size: 18px;\n}\n.uv-wrap .uv-tree-input .clear-ic:hover {\n  color: #607d8b;\n}\n.uv-wrap .uv-tree-options {\n  position: absolute;\n  top: calc(100% + 4px);\n  left: 0;\n  right: 0;\n  background: #fff;\n  border: 1px solid #e0e0e0;\n  border-radius: 10px;\n  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.12);\n  max-height: 320px;\n  overflow-y: auto;\n  z-index: 20;\n}\n.uv-wrap .uv-tree-options .opt {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 9px 12px;\n  cursor: pointer;\n  font-size: 13px;\n  border-bottom: 1px solid #f2f4f8;\n}\n.uv-wrap .uv-tree-options .opt:hover {\n  background: #eef2fb;\n}\n.uv-wrap .uv-tree-options .opt i {\n  font-size: 16px;\n  color: #5c6bc0;\n}\n.uv-wrap .uv-tree-options .opt .opt-code {\n  color: #90a4ae;\n  font-size: 11.5px;\n}\n.uv-wrap .uv-tree-options .opt .opt-desig {\n  margin-left: auto;\n  color: #78909c;\n  font-size: 11.5px;\n}\n.uv-wrap .uv-tree-controls {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.uv-wrap .uv-tree-controls .subs-chip {\n  background: #3949ab;\n  color: #fff;\n  font-size: 11.5px;\n  font-weight: 600;\n  padding: 4px 12px;\n  border-radius: 14px;\n}\n.uv-wrap .uv-tree-empty {\n  text-align: center;\n  color: #b0bec5;\n  padding: 60px 20px;\n  background: #fff;\n  border-radius: 12px;\n}\n.uv-wrap .uv-tree-empty i {\n  font-size: 46px;\n}\n.uv-wrap .uv-tree-empty p {\n  margin-top: 10px;\n  font-size: 14px;\n}\n.uv-wrap .uv-tree {\n  background: #fff;\n  border-radius: 12px;\n  padding: 14px 12px;\n  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.06);\n  overflow-x: auto; /* badi team ke liye horizontal scroll */\n  text-align: center; /* inline-block lis center */\n}\n.uv-wrap {\n  /* ===== top-down org chart (compact) ===== */\n  /* connector color (orange) */\n}\n.uv-wrap .org-tree, .uv-wrap .org-tree ul {\n  position: relative;\n  padding-top: 15px;\n  white-space: nowrap;\n  list-style: none;\n  margin: 0;\n}\n.uv-wrap .org-tree li {\n  display: inline-block;\n  vertical-align: top;\n  text-align: center;\n  list-style: none;\n  position: relative;\n  padding: 15px 4px 0;\n  white-space: nowrap;\n}\n.uv-wrap {\n  /* connectors: top horizontal halves */\n}\n.uv-wrap .org-tree li::before,\n.uv-wrap .org-tree li::after {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  right: 50%;\n  width: 50%;\n  height: 15px;\n  border-top: 2px solid #e0832a;\n}\n.uv-wrap .org-tree li::after {\n  right: auto;\n  left: 50%;\n  border-left: 2px solid #e0832a;\n}\n.uv-wrap .org-tree li:only-child::before,\n.uv-wrap .org-tree li:only-child::after {\n  display: none;\n}\n.uv-wrap .org-tree li:only-child {\n  padding-top: 0;\n}\n.uv-wrap .org-tree li:first-child::before,\n.uv-wrap .org-tree li:last-child::after {\n  border: 0 none;\n}\n.uv-wrap .org-tree li:last-child::before {\n  border-right: 2px solid #e0832a;\n  border-radius: 0 6px 0 0;\n}\n.uv-wrap .org-tree li:first-child::after {\n  border-radius: 6px 0 0 0;\n}\n.uv-wrap {\n  /* vertical drop from a parent down to its children's bus */\n}\n.uv-wrap .org-tree ul::before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 50%;\n  border-left: 2px solid #e0832a;\n  width: 0;\n  height: 15px;\n}\n.uv-wrap {\n  /* node box */\n}\n.uv-wrap .org-node {\n  display: inline-block;\n  position: relative;\n  text-align: left;\n  min-width: 104px;\n  max-width: 168px;\n  white-space: normal;\n  border: 1.5px solid #e0832a;\n  border-radius: 7px;\n  background: #fff;\n  padding: 4px 8px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);\n  transition: box-shadow 0.15s;\n}\n.uv-wrap .org-node:hover {\n  box-shadow: 0 3px 9px rgba(224, 131, 42, 0.25);\n}\n.uv-wrap .org-node.org-root {\n  border-color: #1a237e;\n  background: #eef2fb;\n}\n.uv-wrap .org-node.org-vacant {\n  border-color: #c62828;\n  background: #fff7f7;\n}\n.uv-wrap .org-node .org-node-head {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n}\n.uv-wrap .org-node .org-node-head i {\n  font-size: 14px;\n  color: #3949ab;\n}\n.uv-wrap .org-node .org-name {\n  font-weight: 700;\n  color: #1a237e;\n  font-size: 11.5px;\n}\n.uv-wrap .org-node .org-code {\n  color: #90a4ae;\n  font-size: 9.5px;\n  margin-left: auto;\n}\n.uv-wrap .org-node .org-node-station {\n  margin-top: 2px;\n  font-size: 10.5px;\n  color: #37474f;\n}\n.uv-wrap .org-node .org-node-station span {\n  display: inline-flex;\n  align-items: center;\n  gap: 2px;\n}\n.uv-wrap .org-node .org-node-station i {\n  font-size: 12px;\n  color: #1565c0;\n}\n.uv-wrap .org-node .org-node-nostation {\n  margin-top: 2px;\n  font-size: 10px;\n  font-style: italic;\n  color: #c62828;\n}\n.uv-wrap .org-node .org-status {\n  margin-left: 4px;\n  padding: 0 5px;\n  border-radius: 8px;\n  font-size: 8.5px;\n  font-weight: 700;\n}\n.uv-wrap .org-node .org-status.open {\n  background: #ffebee;\n  color: #c62828;\n}\n.uv-wrap .org-node .org-status.closed {\n  background: #e8f5e9;\n  color: #2e7d32;\n}\n.uv-wrap .org-node .org-toggle {\n  position: absolute;\n  bottom: -9px;\n  left: 50%;\n  transform: translateX(-50%);\n  display: inline-flex;\n  align-items: center;\n  gap: 1px;\n  background: #e0832a;\n  color: #fff;\n  font-size: 9px;\n  font-weight: 700;\n  border-radius: 9px;\n  padding: 0 5px 0 3px;\n  cursor: pointer;\n  z-index: 2;\n}\n.uv-wrap .org-node .org-toggle i {\n  font-size: 11px;\n}\n.uv-wrap .org-node .org-toggle:hover {\n  background: #c4701f;\n}\n.uv-wrap .uv-stats {\n  margin-bottom: 14px;\n}\n.uv-wrap .uv-stats .chip {\n  display: inline-block;\n  padding: 5px 14px;\n  border-radius: 16px;\n  font-size: 12px;\n  font-weight: 600;\n  margin-right: 8px;\n  color: #fff;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12);\n}\n.uv-wrap .uv-stats .chip.total {\n  background: #455a64;\n}\n.uv-wrap .uv-stats .chip.filled {\n  background: #2e7d32;\n}\n.uv-wrap .uv-stats .chip.vacant {\n  background: #c62828;\n}\n.uv-wrap .uv-stats .chip.replacement {\n  background: #e0832a;\n}\n.uv-wrap {\n  /* ===== template bar ===== */\n}\n.uv-wrap .tmpl-bar {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 9px 14px;\n  background: #faf5ff;\n  border: 1px solid #ede9fe;\n  border-radius: 10px;\n  margin-bottom: 14px;\n  flex-wrap: wrap;\n}\n.uv-wrap .tmpl-bar-label {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  font-size: 12px;\n  font-weight: 700;\n  color: #7c3aed;\n  white-space: nowrap;\n}\n.uv-wrap .tmpl-bar-label i {\n  font-size: 16px;\n}\n.uv-wrap .tmpl-bar-chips {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px;\n  align-items: center;\n}\n.uv-wrap .tmpl-bar-chip {\n  display: flex;\n  align-items: center;\n  gap: 5px;\n  background: #ede9fe;\n  border: 1.5px solid #ddd6fe;\n  border-radius: 99px;\n  padding: 4px 12px;\n  font-size: 12px;\n  font-weight: 600;\n  color: #5b21b6;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.uv-wrap .tmpl-bar-chip i {\n  font-size: 14px;\n}\n.uv-wrap .tmpl-bar-chip:hover {\n  background: #ddd6fe;\n  border-color: #7c3aed;\n}\n.uv-wrap .tmpl-bar-chip--active {\n  background: #7c3aed;\n  border-color: #7c3aed;\n  color: #fff;\n  box-shadow: 0 2px 8px rgba(124, 58, 237, 0.3);\n}\n.uv-wrap .tmpl-bar-count {\n  background: rgba(255, 255, 255, 0.3);\n  border-radius: 99px;\n  padding: 0 6px;\n  font-size: 11px;\n  font-weight: 700;\n}\n.uv-wrap .tmpl-edit-icon {\n  font-size: 14px !important;\n  opacity: 0.6;\n  margin-left: 2px;\n  transition: opacity 0.15s;\n}\n.uv-wrap .tmpl-edit-icon:hover {\n  opacity: 1;\n}\n.uv-wrap .tmpl-bar-new, .uv-wrap .tmpl-bar-clear {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  background: none;\n  border-radius: 99px;\n  padding: 4px 10px;\n  font-size: 12px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.uv-wrap .tmpl-bar-new i, .uv-wrap .tmpl-bar-clear i {\n  font-size: 14px;\n}\n.uv-wrap .tmpl-bar-new {\n  border: 1.5px dashed #a78bfa;\n  color: #7c3aed;\n}\n.uv-wrap .tmpl-bar-new:hover {\n  background: #ede9fe;\n  border-style: solid;\n  border-color: #7c3aed;\n}\n.uv-wrap .tmpl-bar-clear {\n  border: 1.5px solid #fca5a5;\n  color: #dc2626;\n}\n.uv-wrap .tmpl-bar-clear:hover {\n  background: #fee2e2;\n  border-color: #dc2626;\n}\n.uv-wrap .tmpl-bar-skeleton {\n  display: flex;\n  gap: 8px;\n}\n.uv-wrap .sk-tmpl {\n  height: 28px;\n  width: 110px;\n  border-radius: 99px;\n  background: linear-gradient(90deg, #ede9fe 25%, #ddd6fe 50%, #ede9fe 75%);\n  background-size: 200% 100%;\n  animation: uv-shimmer 1.5s infinite;\n}\n@keyframes uv-shimmer {\n  0% {\n    background-position: 200% 0;\n  }\n  100% {\n    background-position: -200% 0;\n  }\n}\n.uv-wrap .uv-loading, .uv-wrap .uv-empty {\n  padding: 40px;\n  text-align: center;\n  color: #90a4ae;\n  background: #fff;\n  border-radius: 10px;\n}\n.uv-wrap .uv-table {\n  width: 100%;\n  border-collapse: separate;\n  border-spacing: 0;\n  font-size: 13px;\n  background: #fff;\n  border-radius: 12px;\n  overflow: hidden;\n  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.06);\n}\n.uv-wrap .uv-table thead th {\n  background: linear-gradient(180deg, #1e63c4, #1551a8);\n  color: #fff;\n  text-align: left;\n  padding: 13px 14px;\n  font-weight: 600;\n  font-size: 12.5px;\n  letter-spacing: 0.3px;\n  position: sticky;\n  top: 0;\n  z-index: 3;\n}\n.uv-wrap .uv-table {\n  /* inline column filter row */\n}\n.uv-wrap .uv-table .uv-filter-row th {\n  background: #eef2f8;\n  padding: 7px 10px;\n  top: 44px; /* stick just below the title header */\n  z-index: 2;\n  border-bottom: 1px solid #d7dee8;\n}\n.uv-wrap .uv-table .uv-filter-row th .col-filter {\n  width: 100%;\n  box-sizing: border-box;\n  border: 1px solid #cfd8e3;\n  border-radius: 6px;\n  padding: 6px 9px;\n  font-size: 12.5px;\n  background: #fff;\n  color: #263238;\n  outline: none;\n  transition: border-color 0.15s, box-shadow 0.15s;\n}\n.uv-wrap .uv-table .uv-filter-row th .col-filter:focus {\n  border-color: #1e63c4;\n  box-shadow: 0 0 0 2px rgba(30, 99, 196, 0.15);\n}\n.uv-wrap .uv-table .uv-filter-row th .dual-filter {\n  display: flex;\n  gap: 6px;\n}\n.uv-wrap .uv-table .uv-filter-row th .dual-filter .col-filter {\n  width: 50%;\n}\n.uv-wrap .uv-table .uv-filter-row th select.col-filter {\n  cursor: pointer;\n  height: 31px;\n}\n.uv-wrap .uv-table .uv-filter-row th.filter-actions {\n  white-space: nowrap;\n}\n.uv-wrap .uv-table .uv-filter-row th.filter-actions .sm-btn {\n  min-width: 36px;\n  width: 36px;\n  height: 31px;\n  line-height: 31px;\n  padding: 0;\n  margin-right: 6px;\n  background: #fff;\n}\n.uv-wrap .uv-table .uv-filter-row th.filter-actions .sm-btn i {\n  font-size: 17px;\n  vertical-align: middle;\n}\n.uv-wrap .uv-table td {\n  padding: 9px 14px;\n  border-bottom: 1px solid #eef1f6;\n  vertical-align: middle;\n}\n.uv-wrap .uv-table .muted {\n  color: #5b6b7c;\n}\n.uv-wrap .uv-table {\n  /* ---- name cell with tree accent ---- */\n}\n.uv-wrap .uv-table .name-td {\n  position: relative;\n  white-space: nowrap;\n}\n.uv-wrap .uv-table .name-td .tree-accent {\n  display: inline-block;\n  width: 3px;\n  height: 16px;\n  border-radius: 2px;\n  margin-right: 8px;\n  vertical-align: middle;\n  background: #cfd8dc;\n}\n.uv-wrap .uv-table .name-td .tree-accent.station {\n  background: #90caf9;\n}\n.uv-wrap .uv-table {\n  /* ---- owner / senior rows ---- */\n}\n.uv-wrap .uv-table .uv-owner-row {\n  background: #eef2fb;\n}\n.uv-wrap .uv-table .uv-owner-row:hover {\n  background: #e6ecf9;\n}\n.uv-wrap .uv-table .uv-owner-row .lvl-badge {\n  display: inline-block;\n  min-width: 22px;\n  text-align: center;\n  font-size: 10px;\n  font-weight: 700;\n  color: #3949ab;\n  background: #e8eaf6;\n  border: 1px solid #c5cae9;\n  border-radius: 6px;\n  padding: 1px 4px;\n  margin-right: 7px;\n  vertical-align: middle;\n}\n.uv-wrap .uv-table .uv-owner-row .owner-ic {\n  font-size: 18px;\n  vertical-align: middle;\n  margin-right: 6px;\n  color: #303f9f;\n}\n.uv-wrap .uv-table .uv-owner-row .owner-name {\n  color: #1a237e;\n  font-size: 13.5px;\n}\n.uv-wrap .uv-table .uv-owner-row .owner-code {\n  color: #7986cb;\n  font-weight: 500;\n  margin-left: 5px;\n}\n.uv-wrap .uv-table .uv-owner-row {\n  /* depth color accents */\n}\n.uv-wrap .uv-table .uv-owner-row.depth-0 .tree-accent {\n  background: #1a237e;\n}\n.uv-wrap .uv-table .uv-owner-row.depth-1 .tree-accent {\n  background: #3949ab;\n}\n.uv-wrap .uv-table .uv-owner-row.depth-2 .tree-accent {\n  background: #5c6bc0;\n}\n.uv-wrap .uv-table .uv-owner-row.depth-3 .tree-accent {\n  background: #7986cb;\n}\n.uv-wrap .uv-table .uv-owner-row.depth-4 .tree-accent {\n  background: #9fa8da;\n}\n.uv-wrap .uv-table {\n  /* ---- base station rows ---- */\n}\n.uv-wrap .uv-table .uv-station-row {\n  transition: background 0.12s;\n}\n.uv-wrap .uv-table .uv-station-row:hover {\n  background: #f5f9ff;\n}\n.uv-wrap .uv-table .uv-station-row .station-ic {\n  font-size: 16px;\n  vertical-align: middle;\n  margin-right: 5px;\n  color: #1565c0;\n}\n.uv-wrap .uv-table .uv-station-row .station-name {\n  font-weight: 500;\n  color: #263238;\n}\n.uv-wrap .uv-table .uv-station-row .state-tag {\n  display: inline-block;\n  margin-left: 8px;\n  padding: 1px 8px;\n  font-size: 11px;\n  color: #546e7a;\n  background: #eceff1;\n  border-radius: 10px;\n}\n.uv-wrap .uv-table .uv-station-row .assigned-user {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  color: #2e7d32;\n  font-weight: 500;\n}\n.uv-wrap .uv-table .uv-station-row .assigned-user i {\n  font-size: 15px;\n}\n.uv-wrap .uv-table .uv-station-row.vacant {\n  background: #fff7f7;\n}\n.uv-wrap .uv-table .uv-station-row.vacant:hover {\n  background: #fff0f0;\n}\n.uv-wrap .uv-table .uv-station-row.vacant .blank-cell {\n  color: #c62828;\n  font-style: italic;\n  font-weight: 500;\n}\n.uv-wrap .uv-table .uv-station-row {\n  /* senior = occupant ke apne juniors hain */\n}\n.uv-wrap .uv-table .uv-station-row.senior {\n  background: #fffdf3;\n}\n.uv-wrap .uv-table .uv-station-row.senior:hover {\n  background: #fff9e6;\n}\n.uv-wrap .uv-table .uv-station-row.senior .tree-accent.station {\n  background: #f5a623;\n  width: 4px;\n}\n.uv-wrap .uv-table .uv-station-row.senior .station-name {\n  font-weight: 700;\n  color: #1a237e;\n}\n.uv-wrap .uv-table .uv-station-row.senior .station-ic {\n  color: #f5a623;\n}\n.uv-wrap .uv-table .uv-station-row .senior-badge {\n  display: inline-flex;\n  align-items: center;\n  gap: 2px;\n  margin-left: 8px;\n  padding: 1px 8px;\n  font-size: 10.5px;\n  font-weight: 700;\n  color: #b26a00;\n  background: #fff3d6;\n  border: 1px solid #ffe0a3;\n  border-radius: 10px;\n  vertical-align: middle;\n}\n.uv-wrap .uv-table .uv-station-row .senior-badge i {\n  font-size: 13px;\n}\n.uv-wrap .uv-table .uv-station-row .action-td {\n  white-space: nowrap;\n}\n.uv-wrap .uv-table .status-badge {\n  display: inline-block;\n  padding: 3px 11px;\n  border-radius: 11px;\n  font-size: 10.5px;\n  font-weight: 700;\n  letter-spacing: 0.4px;\n}\n.uv-wrap .uv-table .status-badge.open {\n  background: #ffebee;\n  color: #c62828;\n  border: 1px solid #ffcdd2;\n}\n.uv-wrap .uv-table .status-badge.closed {\n  background: #e8f5e9;\n  color: #2e7d32;\n  border: 1px solid #c8e6c9;\n}\n.uv-wrap .uv-table .repl-badge {\n  display: inline-flex;\n  align-items: center;\n  gap: 2px;\n  margin-left: 6px;\n  padding: 2px 7px;\n  border-radius: 10px;\n  font-size: 9.5px;\n  font-weight: 700;\n  color: #b26a00;\n  background: #fff3d6;\n  border: 1px solid #ffe0a3;\n  vertical-align: middle;\n}\n.uv-wrap .uv-table .repl-badge i {\n  font-size: 12px;\n}"

/***/ }),

/***/ "./src/app/user-vacancy/user-vacancy-list/user-vacancy-list.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/user-vacancy/user-vacancy-list/user-vacancy-list.component.ts ***!
  \*******************************************************************************/
/*! exports provided: UserVacancyListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserVacancyListComponent", function() { return UserVacancyListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_services_DatabaseService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/_services/DatabaseService */ "./src/_services/DatabaseService.ts");
/* harmony import */ var ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng6-toastr-notifications */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/ng6-toastr-notifications/fesm5/ng6-toastr-notifications.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _user_vacancy_form_user_vacancy_form_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../user-vacancy-form/user-vacancy-form.component */ "./src/app/user-vacancy/user-vacancy-form/user-vacancy-form.component.ts");
/* harmony import */ var _reports_template_editor_dialog_template_editor_dialog_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../reports/template-editor-dialog/template-editor-dialog.component */ "./src/app/reports/template-editor-dialog/template-editor-dialog.component.ts");







var UserVacancyListComponent = /** @class */ (function () {
    function UserVacancyListComponent(serve, toast, dialog) {
        this.serve = serve;
        this.toast = toast;
        this.dialog = dialog;
        this.isLoading = false;
        this.datanotfound = false;
        this.rows = [];
        this.totalStations = 0;
        this.vacantCount = 0;
        this.filledCount = 0;
        this.replacementCount = 0;
        // filters
        this.filterStation = '';
        this.filterOwner = '';
        this.filterState = '';
        this.filterDesignation = '';
        this.filterAssigned = '';
        this.filterStatus = ''; // '' | 'OPEN' | 'CLOSED'
        // ---- Templates (reuse bulk_report_templates) ----
        this.templates = [];
        this.loadingTemplates = false;
        this.activeTemplateId = null;
        this.activeTemplate = null;
        // last fetched raw data (rebuild without re-fetch when template toggles)
        this.rawStations = [];
        this.rawAssignments = [];
        this.rawUsers = [];
        // ---- Tree view ----
        this.viewMode = 'list';
        this.treeSearch = '';
        this.treeOptions = [];
        this.showTreeOptions = false;
        this.treeRoot = null;
        this.treeTotalSubs = 0;
    }
    UserVacancyListComponent.prototype.ngOnInit = function () {
        this.getList();
        this.loadTemplates();
    };
    // =====================  TEMPLATES  =====================
    UserVacancyListComponent.prototype.loadTemplates = function () {
        var _this = this;
        this.loadingTemplates = true;
        this.serve.post_rqst({}, 'Master/getBulkTemplates').subscribe(function (res) {
            _this.loadingTemplates = false;
            _this.templates = (res && res['statusCode'] == 200) ? (res['templates'] || []) : [];
        }, function () {
            _this.loadingTemplates = false;
            _this.templates = [];
        });
    };
    UserVacancyListComponent.prototype.applyTemplate = function (tmpl) {
        this.activeTemplateId = tmpl.id;
        this.activeTemplate = tmpl;
        this.buildHierarchyRows(this.rawStations, this.rawAssignments, this.rawUsers);
        this.datanotfound = this.rows.length === 0;
        var cnt = (tmpl.user_ids || []).length;
        this.toast.successToastr("\"" + tmpl.template_name + "\" applied \u2014 " + cnt + " user(s)");
    };
    UserVacancyListComponent.prototype.clearTemplate = function () {
        this.activeTemplateId = null;
        this.activeTemplate = null;
        this.buildHierarchyRows(this.rawStations, this.rawAssignments, this.rawUsers);
        this.datanotfound = this.rows.length === 0;
    };
    UserVacancyListComponent.prototype.openTemplateEditor = function (tmpl) {
        var _this = this;
        if (tmpl === void 0) { tmpl = null; }
        var ref = this.dialog.open(_reports_template_editor_dialog_template_editor_dialog_component__WEBPACK_IMPORTED_MODULE_6__["TemplateEditorDialogComponent"], {
            data: { template: tmpl },
            panelClass: 'padding0',
            width: '800px'
        });
        ref.afterClosed().subscribe(function (result) {
            if (result && result.saved) {
                _this.loadTemplates();
            }
        });
    };
    // =====================  TREE VIEW  =====================
    UserVacancyListComponent.prototype.setView = function (mode) {
        this.viewMode = mode;
    };
    UserVacancyListComponent.prototype.onTreeSearch = function () {
        var q = (this.treeSearch || '').toLowerCase().trim();
        if (!q) {
            this.treeOptions = [];
            this.showTreeOptions = false;
            return;
        }
        this.treeOptions = this.rawUsers.filter(function (u) {
            return (u.name && u.name.toLowerCase().includes(q)) ||
                (u.employee_id && String(u.employee_id).toLowerCase().includes(q));
        }).slice(0, 25);
        this.showTreeOptions = true;
    };
    UserVacancyListComponent.prototype.selectTreeUser = function (u) {
        this.treeSearch = u.name + (u.employee_id ? " (" + u.employee_id + ")" : '');
        this.showTreeOptions = false;
        this.buildTree(String(u.id));
    };
    UserVacancyListComponent.prototype.clearTree = function () {
        this.treeSearch = '';
        this.treeOptions = [];
        this.showTreeOptions = false;
        this.treeRoot = null;
        this.treeTotalSubs = 0;
    };
    // selected user ka pura downstream subtree (sfa_asm_assign edges se)
    UserVacancyListComponent.prototype.buildTree = function (rootId) {
        var userMap = {};
        for (var _i = 0, _a = this.rawUsers; _i < _a.length; _i++) {
            var u = _a[_i];
            userMap[u.id] = u;
        }
        // childrenOf: rsm_id (senior) -> [asm_id (junior)...]
        var childrenOf = {};
        for (var _b = 0, _c = this.rawAssignments; _b < _c.length; _b++) {
            var a = _c[_b];
            if (!childrenOf[a.rsm_id]) {
                childrenOf[a.rsm_id] = [];
            }
            childrenOf[a.rsm_id].push(a.asm_id);
        }
        // station(s) occupied by a user
        var stationByUser = {};
        for (var _d = 0, _e = this.rawStations; _d < _e.length; _d++) {
            var s = _e[_d];
            if (+s.assigned_user_id > 0) {
                var k = String(s.assigned_user_id);
                if (!stationByUser[k]) {
                    stationByUser[k] = [];
                }
                stationByUser[k].push(s);
            }
        }
        var count = 0;
        var make = function (id, visiting) {
            var u = userMap[id];
            // sirf active users (userMap me maujood) + cycle guard
            var kids = (childrenOf[id] || []).filter(function (c) { return userMap[c] && !visiting.has(String(c)); });
            var children = [];
            for (var _i = 0, kids_1 = kids; _i < kids_1.length; _i++) {
                var c = kids_1[_i];
                visiting.add(String(c));
                count++;
                children.push(make(String(c), visiting));
            }
            return {
                id: id,
                name: u ? (u.name || '') : '',
                code: u ? (u.employee_id || '') : '',
                stations: stationByUser[id] || [],
                children: children,
                collapsed: false
            };
        };
        var visiting = new Set([rootId]);
        this.treeRoot = make(rootId, visiting);
        this.treeTotalSubs = count;
    };
    UserVacancyListComponent.prototype.toggleNode = function (node) {
        node.collapsed = !node.collapsed;
    };
    UserVacancyListComponent.prototype.walkTree = function (node, fn) {
        if (!node) {
            return;
        }
        fn(node);
        for (var _i = 0, _a = (node.children || []); _i < _a.length; _i++) {
            var c = _a[_i];
            this.walkTree(c, fn);
        }
    };
    UserVacancyListComponent.prototype.expandAllTree = function () {
        this.walkTree(this.treeRoot, function (n) { return n.collapsed = false; });
    };
    UserVacancyListComponent.prototype.collapseAllTree = function () {
        var _this = this;
        this.walkTree(this.treeRoot, function (n) { if (n !== _this.treeRoot) {
            n.collapsed = true;
        } });
    };
    UserVacancyListComponent.prototype.refresh = function () {
        this.getList();
    };
    UserVacancyListComponent.prototype.clearFilters = function () {
        this.filterStation = '';
        this.filterOwner = '';
        this.filterState = '';
        this.filterDesignation = '';
        this.filterAssigned = '';
        this.filterStatus = '';
        this.getList();
    };
    UserVacancyListComponent.prototype.getList = function () {
        var _this = this;
        this.isLoading = true;
        this.datanotfound = false;
        var payload = {
            filter: {
                station_name: this.filterStation,
                owner_name: this.filterOwner,
                state_name: this.filterState,
                designation_name: this.filterDesignation,
                assigned_user_name: this.filterAssigned,
                status: this.filterStatus
            }
        };
        this.serve.post_rqst(payload, 'Master/baseStationMasterList').subscribe(function (result) {
            _this.isLoading = false;
            if (result['statusCode'] == 200) {
                _this.rawStations = result['stations'] || [];
                _this.rawAssignments = result['assignments'] || [];
                _this.rawUsers = result['users'] || [];
                _this.buildHierarchyRows(_this.rawStations, _this.rawAssignments, _this.rawUsers);
                _this.datanotfound = _this.rows.length === 0;
            }
            else {
                _this.toast.errorToastr(result['message'] || 'Failed to load base stations.');
            }
        }, function () {
            _this.isLoading = false;
            _this.toast.errorToastr('Network error.');
        });
    };
    // Build owner-hierarchy-wise display rows (senior -> juniors -> junior's junior)
    UserVacancyListComponent.prototype.buildHierarchyRows = function (stations, assignments, users) {
        var _this = this;
        this.rows = [];
        this.totalStations = stations.length;
        this.vacantCount = stations.filter(function (s) { return !s.assigned_user_id || s.status === 'OPEN'; }).length;
        this.filledCount = this.totalStations - this.vacantCount;
        this.replacementCount = stations.filter(function (s) { return s.replacement_needed == 1; }).length;
        // user map
        var userMap = {};
        for (var _i = 0, users_1 = users; _i < users_1.length; _i++) {
            var u = users_1[_i];
            userMap[u.id] = u;
        }
        // parent map (asm_id -> rsm_id) — template hierarchy ke liye
        var parentOf = {};
        for (var _a = 0, assignments_1 = assignments; _a < assignments_1.length; _a++) {
            var a = assignments_1[_a];
            parentOf[a.asm_id] = a.rsm_id;
        }
        // stations grouped by owner
        var stationsByOwner = {};
        for (var _b = 0, stations_1 = stations; _b < stations_1.length; _b++) {
            var s = stations_1[_b];
            var oid = s.owner_id || '0';
            if (!stationsByOwner[oid]) {
                stationsByOwner[oid] = [];
            }
            stationsByOwner[oid].push(s);
        }
        // ---- Template active: template users ko unki hierarchy ke saath (har level) dikhao ----
        if (this.activeTemplate) {
            var order = (this.activeTemplate.user_ids || []).map(function (x) { return String(x); });
            var orderIndex_1 = {};
            order.forEach(function (id, idx) { orderIndex_1[id] = idx; });
            var templateSet_1 = new Set(order);
            // har template user ka nearest ancestor jo bhi template me ho (beech ke non-template levels skip)
            var nearestTmplAncestor = function (id) {
                var p = parentOf[id];
                var guard = new Set();
                while (p !== undefined && p !== null && !guard.has(String(p))) {
                    guard.add(String(p));
                    if (templateSet_1.has(String(p))) {
                        return String(p);
                    }
                    p = parentOf[p];
                }
                return null;
            };
            // template users ko unke template-parent ke neeche group karo
            var tChildren_1 = {};
            var tRoots = [];
            for (var _c = 0, order_1 = order; _c < order_1.length; _c++) {
                var uid = order_1[_c];
                var tp = nearestTmplAncestor(uid);
                if (tp && templateSet_1.has(tp)) {
                    if (!tChildren_1[tp]) {
                        tChildren_1[tp] = [];
                    }
                    tChildren_1[tp].push(uid);
                }
                else {
                    tRoots.push(uid);
                }
            }
            var emitted_1 = new Set();
            var dfsTmpl_1 = function (uid, depth) {
                if (emitted_1.has(uid)) {
                    return;
                }
                emitted_1.add(uid);
                var u = userMap[uid];
                var ownStations = stationsByOwner[uid] || [];
                _this.rows.push({
                    type: 'owner',
                    depth: depth,
                    ownerName: u ? (u.name || '') : (ownStations.length ? (ownStations[0].owner_name || '') : ''),
                    ownerCode: u ? (u.employee_id || '') : '',
                    ownerDesignation: u ? (u.designation_name || '') : ''
                });
                for (var _i = 0, ownStations_1 = ownStations; _i < ownStations_1.length; _i++) {
                    var s = ownStations_1[_i];
                    _this.rows.push({ type: 'station', depth: depth + 1, station: s });
                }
                var kids = (tChildren_1[uid] || []).slice().sort(function (a, b) { return (orderIndex_1[a] || 0) - (orderIndex_1[b] || 0); });
                for (var _a = 0, kids_2 = kids; _a < kids_2.length; _a++) {
                    var c = kids_2[_a];
                    dfsTmpl_1(c, depth + 1);
                }
            };
            tRoots.sort(function (a, b) { return (orderIndex_1[a] || 0) - (orderIndex_1[b] || 0); });
            for (var _d = 0, tRoots_1 = tRoots; _d < tRoots_1.length; _d++) {
                var r = tRoots_1[_d];
                dfsTmpl_1(r, 0);
            }
            return;
        }
        // ---- Interleaved hierarchy ----
        // Har station row ke occupant (assigned user) ke apne juniors (jinki stations ka owner = wahi occupant)
        // usi row ke turant neeche nest hote hain.
        var occupantSet = new Set(stations.filter(function (s) { return +s.assigned_user_id > 0; }).map(function (s) { return String(s.assigned_user_id); }));
        var renderedStations = new Set();
        var visitedOwner = new Set();
        var renderOwnerStations = function (ownerId, depth) {
            var list = stationsByOwner[ownerId] || [];
            for (var _i = 0, list_1 = list; _i < list_1.length; _i++) {
                var s = list_1[_i];
                if (renderedStations.has(s.id)) {
                    continue;
                }
                renderedStations.add(s.id);
                // occupant ke juniors hain? -> ye senior hai
                var occ = +s.assigned_user_id > 0 ? String(s.assigned_user_id) : '';
                var juniors = (occ && stationsByOwner[occ]) ? stationsByOwner[occ].length : 0;
                _this.rows.push({
                    type: 'station',
                    depth: depth,
                    station: s,
                    isSenior: juniors > 0,
                    juniorCount: juniors
                });
                // occupant ke juniors usi ke neeche nest
                if (occ && stationsByOwner[occ] && !visitedOwner.has(occ)) {
                    visitedOwner.add(occ);
                    renderOwnerStations(occ, depth + 1);
                }
            }
        };
        var pushOwnerHeader = function (ownerId, depth) {
            var u = userMap[ownerId];
            var grp = stationsByOwner[ownerId] || [];
            _this.rows.push({
                type: 'owner',
                depth: depth,
                ownerName: u ? (u.name || '') : (grp.length ? (grp[0].owner_name || 'Unknown Owner') : 'Unknown Owner'),
                ownerCode: u ? (u.employee_id || '') : '',
                ownerDesignation: u ? (u.designation_name || '') : ''
            });
        };
        // root owners = jo kisi station ke occupant nahi (tree ke top), '0' chhod ke
        var rootOwnerIds = Object.keys(stationsByOwner)
            .filter(function (oid) { return oid !== '0' && !occupantSet.has(oid); })
            .sort(function (a, b) {
            var an = (userMap[a] && userMap[a].name) || '';
            var bn = (userMap[b] && userMap[b].name) || '';
            return an.localeCompare(bn);
        });
        for (var _e = 0, rootOwnerIds_1 = rootOwnerIds; _e < rootOwnerIds_1.length; _e++) {
            var oid = rootOwnerIds_1[_e];
            if (visitedOwner.has(oid)) {
                continue;
            }
            visitedOwner.add(oid);
            pushOwnerHeader(oid, 0);
            renderOwnerStations(oid, 1);
        }
        // fallback: koi owner group jo tree me reach nahi hua (cycle/missing chain)
        for (var _f = 0, _g = Object.keys(stationsByOwner); _f < _g.length; _f++) {
            var oid = _g[_f];
            if (oid === '0' || visitedOwner.has(oid)) {
                continue;
            }
            visitedOwner.add(oid);
            pushOwnerHeader(oid, 0);
            renderOwnerStations(oid, 1);
        }
        // owner_id = 0 -> bilkul vacant / no owner -> Unassigned group
        if (stationsByOwner['0'] && stationsByOwner['0'].length) {
            this.rows.push({
                type: 'owner',
                depth: 0,
                ownerName: '— Unassigned / No Owner —',
                ownerCode: '',
                ownerDesignation: ''
            });
            for (var _h = 0, _j = stationsByOwner['0']; _h < _j.length; _h++) {
                var s = _j[_h];
                if (renderedStations.has(s.id)) {
                    continue;
                }
                renderedStations.add(s.id);
                this.rows.push({ type: 'station', depth: 1, station: s });
            }
        }
    };
    UserVacancyListComponent.prototype.openAddForm = function () {
        var _this = this;
        var ref = this.dialog.open(_user_vacancy_form_user_vacancy_form_component__WEBPACK_IMPORTED_MODULE_5__["UserVacancyFormComponent"], {
            width: '560px',
            data: { mode: 'add' }
        });
        ref.afterClosed().subscribe(function (result) {
            if (result === 'saved') {
                _this.refresh();
            }
        });
    };
    UserVacancyListComponent.prototype.openEditForm = function (station) {
        var _this = this;
        var ref = this.dialog.open(_user_vacancy_form_user_vacancy_form_component__WEBPACK_IMPORTED_MODULE_5__["UserVacancyFormComponent"], {
            width: '560px',
            data: { mode: 'edit', station: station }
        });
        ref.afterClosed().subscribe(function (result) {
            if (result === 'saved') {
                _this.refresh();
            }
        });
    };
    UserVacancyListComponent.prototype.deleteStation = function (station) {
        var _this = this;
        if (!confirm("Delete base station \"" + station.station_name + "\"?")) {
            return;
        }
        this.serve.post_rqst({ id: station.id }, 'Master/baseStationMasterDelete').subscribe(function (result) {
            if (result['statusCode'] == 200) {
                _this.toast.successToastr('Base station deleted.');
                _this.refresh();
            }
            else {
                _this.toast.errorToastr(result['message'] || 'Failed.');
            }
        });
    };
    UserVacancyListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user-vacancy-list',
            template: __webpack_require__(/*! ./user-vacancy-list.component.html */ "./src/app/user-vacancy/user-vacancy-list/user-vacancy-list.component.html"),
            styles: [__webpack_require__(/*! ./user-vacancy-list.component.scss */ "./src/app/user-vacancy/user-vacancy-list/user-vacancy-list.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_services_DatabaseService__WEBPACK_IMPORTED_MODULE_2__["DatabaseService"],
            ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_3__["ToastrManager"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialog"]])
    ], UserVacancyListComponent);
    return UserVacancyListComponent;
}());



/***/ }),

/***/ "./src/app/user-vacancy/user-vacancy-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/user-vacancy/user-vacancy-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: UserVacancyRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserVacancyRoutingModule", function() { return UserVacancyRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _user_vacancy_list_user_vacancy_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user-vacancy-list/user-vacancy-list.component */ "./src/app/user-vacancy/user-vacancy-list/user-vacancy-list.component.ts");
/* harmony import */ var _auth_component_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../auth-component.guard */ "./src/app/auth-component.guard.ts");





var routes = [
    { path: '', component: _user_vacancy_list_user_vacancy_list_component__WEBPACK_IMPORTED_MODULE_3__["UserVacancyListComponent"], canActivate: [_auth_component_guard__WEBPACK_IMPORTED_MODULE_4__["AuthComponentGuard"]], data: { expectedRole: ['1'] } }
];
var UserVacancyRoutingModule = /** @class */ (function () {
    function UserVacancyRoutingModule() {
    }
    UserVacancyRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], UserVacancyRoutingModule);
    return UserVacancyRoutingModule;
}());



/***/ }),

/***/ "./src/app/user-vacancy/user-vacancy.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/user-vacancy/user-vacancy.module.ts ***!
  \*****************************************************/
/*! exports provided: UserVacancyModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserVacancyModule", function() { return UserVacancyModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _user_vacancy_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./user-vacancy-routing.module */ "./src/app/user-vacancy/user-vacancy-routing.module.ts");
/* harmony import */ var _user_vacancy_list_user_vacancy_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./user-vacancy-list/user-vacancy-list.component */ "./src/app/user-vacancy/user-vacancy-list/user-vacancy-list.component.ts");
/* harmony import */ var _user_vacancy_form_user_vacancy_form_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./user-vacancy-form/user-vacancy-form.component */ "./src/app/user-vacancy/user-vacancy-form/user-vacancy-form.component.ts");
/* harmony import */ var _material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../material */ "./src/app/material.ts");
/* harmony import */ var _app_utility_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../app-utility.module */ "./src/app/app-utility.module.ts");
/* harmony import */ var _shared_template_shared_template_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../shared-template/shared-template.module */ "./src/app/shared-template/shared-template.module.ts");










var UserVacancyModule = /** @class */ (function () {
    function UserVacancyModule() {
    }
    UserVacancyModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _user_vacancy_list_user_vacancy_list_component__WEBPACK_IMPORTED_MODULE_5__["UserVacancyListComponent"],
                _user_vacancy_form_user_vacancy_form_component__WEBPACK_IMPORTED_MODULE_6__["UserVacancyFormComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _user_vacancy_routing_module__WEBPACK_IMPORTED_MODULE_4__["UserVacancyRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _material__WEBPACK_IMPORTED_MODULE_7__["MaterialModule"],
                _app_utility_module__WEBPACK_IMPORTED_MODULE_8__["AppUtilityModule"],
                _shared_template_shared_template_module__WEBPACK_IMPORTED_MODULE_9__["SharedTemplateModule"]
            ],
            entryComponents: [
                _user_vacancy_form_user_vacancy_form_component__WEBPACK_IMPORTED_MODULE_6__["UserVacancyFormComponent"]
            ]
        })
    ], UserVacancyModule);
    return UserVacancyModule;
}());



/***/ })

}]);