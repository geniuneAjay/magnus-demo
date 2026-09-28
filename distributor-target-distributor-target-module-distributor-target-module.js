(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["distributor-target-distributor-target-module-distributor-target-module"],{

/***/ "./src/app/distributor-target/distributor-target-module/distributor-target.module.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/distributor-target/distributor-target-module/distributor-target.module.ts ***!
  \*******************************************************************************************/
/*! exports provided: DistributorTargetModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DistributorTargetModule", function() { return DistributorTargetModule; });
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
/* harmony import */ var _distributor_target_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../distributor-target.component */ "./src/app/distributor-target/distributor-target.component.ts");













var targetRoutes = [
    { path: "", component: _distributor_target_component__WEBPACK_IMPORTED_MODULE_12__["DistributorTargetComponent"], canActivate: [src_app_auth_component_guard__WEBPACK_IMPORTED_MODULE_11__["AuthComponentGuard"]], data: { expectedRole: ['1'] } },
];
var DistributorTargetModule = /** @class */ (function () {
    function DistributorTargetModule() {
    }
    DistributorTargetModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _distributor_target_component__WEBPACK_IMPORTED_MODULE_12__["DistributorTargetComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild(targetRoutes),
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
    ], DistributorTargetModule);
    return DistributorTargetModule;
}());



/***/ }),

/***/ "./src/app/distributor-target/distributor-target.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/distributor-target/distributor-target.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-container\">\r\n    <div class=\"tools-container\">\r\n        <h2 *ngIf=\"targetType != 'Monthly Sales Projections'\">{{targetType}}</h2>\r\n        <h2 *ngIf=\"targetType == 'Monthly Sales Projections'\">Primary sales projections</h2>\r\n\r\n        <div class=\"left-auto df ac flex-gap-10\">\r\n\r\n            <button mat-raised-button color=\"primary\" *ngIf=\"btnFlag == true && assign_login_data2.edit_employee_target =='1' \" (click)=\"openDialog()\">Change\r\n                Status</button>\r\n\r\n\r\n            <a mat-icon-button matTooltip=\"Refresh\" (click)=\"refresh1()\">\r\n                <i class=\"material-icons\">refresh</i>\r\n            </a>\r\n            <div class=\"pagination\" *ngIf=\"distributor_list.length > 0\">\r\n                <div class=\"pagination-content\">\r\n                    Pages\r\n                    <span>{{pagenumber}}</span>\r\n                    of\r\n                    <span>{{total_page}}</span>\r\n                </div>\r\n                <div class=\"page-nav\">\r\n                    <button mat-icon-button matTooltip=\"Older\" (click)=\"pervious()\" [disabled]=\"start == 0\">\r\n                        <i class=\"material-icons\">navigate_before</i>\r\n                    </button>\r\n                    <button mat-icon-button matTooltip=\"Newer\" (click)=\"nextPage()\"\r\n                        [disabled]=\"pagenumber == total_page \">\r\n                        <i class=\"material-icons\">navigate_next</i>\r\n                    </button>\r\n                </div>\r\n            </div>\r\n\r\n\r\n            <div class=\"mat-tabbar\">\r\n                <button mat-button [ngClass]=\"active_tab == 'Pending' ? 'active' : ''\"\r\n                    (click)=\"active_tab = 'Pending'; getTargetList()\"><i\r\n                        class=\"material-icons\">pending_actions</i>Pending ({{tabCount.count_pending ?\r\n                    tabCount.count_pending :\r\n                    '0'}})</button>\r\n                <button mat-button [ngClass]=\"active_tab == 'Approved' ? 'active' : ''\"\r\n                    (click)=\"active_tab = 'Approved'; btnFlag = false;  getTargetList()\"><i\r\n                        class=\"material-icons\">verified</i>Approved\r\n                    ({{tabCount.count_approved ? tabCount.count_approved\r\n                    :\r\n                    '0'}})</button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"container pb100\">\r\n        <div class=\"cs-table horizontal-scroll\">\r\n            <div class=\"sticky-head\">\r\n                <div class=\"table-head\">\r\n                    <table>\r\n                        <tr>\r\n                            <th class=\"w50 text-center\" *ngIf=\"active_tab == 'Pending' && distributor_list.length > 0\">\r\n                                <mat-checkbox (change)=\"selectAll($event)\" name=\"allID\" *ngIf=\"assign_login_data2.edit_employee_target =='1'\"\r\n                                    [(ngModel)]=\"checked.allID\"></mat-checkbox>\r\n                            </th>\r\n                            <th class=\"w50\">Sr.No.</th>\r\n                            <th class=\"w100\">Date Created</th>\r\n                            <th class=\"w140\">Created By</th>\r\n                            <th class=\"w120\">Customer Type</th>\r\n                            <th class=\"w250\">Customer Detail</th>\r\n                            <th class=\"w100\" *ngIf=\"targetType == 'Monthly Sales Projections'\">Account Code</th>\r\n                            <th class=\"w100\">Month</th>\r\n                            <th class=\"w80\">Year</th>\r\n                            <th class=\"w150\">Assign Users</th>\r\n                            <th class=\"w100 text-right\">\r\n                                <ng-container *ngIf=\"targetType == 'Monthly Sales Projections'\">\r\n                                    {{active_tab == 'Pending' ? 'Projections' : 'Target (Tons)'}}\r\n                                </ng-container>\r\n                                <ng-container *ngIf=\"targetType == 'Secondary Sales Projections'\">\r\n                                    {{active_tab == 'Pending' ? 'Projected Sheets' : 'No Of Sheets'}}\r\n                                </ng-container>\r\n                            </th>\r\n                            <th class=\"w60 text-center\" *ngIf=\"active_tab == 'Pending'\">Action</th>\r\n                            <th class=\"w60 text-center\" *ngIf=\"active_tab == 'Pending'\">Senior Status</th>\r\n                            <th class=\"w120 text-right\" *ngIf=\"active_tab == 'Approved'\">Achievement {{targetType ==\r\n                                'Monthly Sales Projections' ? ( '('+ 'Tons' + ')'): ''}} </th>\r\n                        </tr>\r\n                    </table>\r\n                </div>\r\n\r\n                <div class=\"table-head border-top\">\r\n                    <table>\r\n                        <tr>\r\n                            <th class=\"w50\" *ngIf=\"active_tab == 'Pending' && distributor_list.length > 0\">&nbsp;</th>\r\n                            <th class=\"w50\">&nbsp;</th>\r\n\r\n                            <th class=\"w100\">\r\n\r\n                            </th>\r\n                            <th class=\"w140\">\r\n                                <div class=\"th-search-acmt\">\r\n                                    <mat-form-field class=\"example-full-width cs-input select-input\">\r\n                                        <input matInput placeholder=\"Search...\" (keyup.enter)=\"getTargetList()\"\r\n                                            #created_by_name=\"ngModel\" [(ngModel)]=\"value.created_by_name\">\r\n                                    </mat-form-field>\r\n                                </div>\r\n                            </th>\r\n\r\n                            <th class=\"w120\">\r\n                                <div class=\"th-search-acmt\">\r\n                                    <mat-form-field>\r\n                                        <mat-select name=\"network_type\" #network_type=\"ngModel\"\r\n                                            [(ngModel)]=\"value.network_type\" (ngModelChange)=\"getTargetList()\">\r\n                                            <mat-option value=\"\">All</mat-option>\r\n                                            <mat-option value=\"Prospect CP\" *ngIf=\"targetType == 'Monthly Sales Projections'\">Prospect CP</mat-option>\r\n                                            <mat-option value=\"Lead\" *ngIf=\"targetType == 'Secondary Sales Projections'\">Lead</mat-option>\r\n                                            <ng-container *ngFor=\"let row of serve.drArray\">\r\n                                                <mat-option\r\n                                                    *ngIf=\"((row.type != '3' && row.type != '8' && row.type != '13' && row.type != '14' && row.type != '16') && targetType == 'Monthly Sales Projections') || ((row.type != '3' && row.type != '1' && row.type != '7') && targetType == 'Secondary Sales Projections') || (row.type == '3' && targetType == 'Stock Sales Projections')\"\r\n                                                    value=\"{{row.module_name}}\">\r\n                                                    {{row.module_name}}</mat-option>\r\n                                            </ng-container>\r\n                                        </mat-select>\r\n                                    </mat-form-field>\r\n                                </div>\r\n                            </th>\r\n                            <th class=\"w250\">\r\n                                <div class=\"th-search-acmt\">\r\n                                    <mat-form-field class=\"example-full-width cs-input select-input\">\r\n                                        <input matInput placeholder=\"Search...\" (keyup.enter)=\"getTargetList()\"\r\n                                            #company_name=\"ngModel\" [(ngModel)]=\"value.company_name\">\r\n                                    </mat-form-field>\r\n                                </div>\r\n                            </th>\r\n                            <th class=\"w100\" *ngIf=\"targetType == 'Monthly Sales Projections'\">\r\n                                <div class=\"th-search-acmt\">\r\n                                    <mat-form-field class=\"example-full-width cs-input select-input\">\r\n                                        <input matInput placeholder=\"Search...\" (keyup.enter)=\"getTargetList()\"\r\n                                            #dr_code=\"ngModel\" [(ngModel)]=\"value.dr_code\">\r\n                                    </mat-form-field>\r\n                                </div>\r\n                            </th>\r\n                            <th class=\"w100\">\r\n                                <div class=\"th-search-acmt\">\r\n                                    <mat-form-field>\r\n                                        <mat-select name=\"month\" #month=\"ngModel\" [(ngModel)]=\"value.month\"\r\n                                            (ngModelChange)=\"getTargetList()\">\r\n                                            <mat-option value=\"\">All</mat-option>\r\n                                            <mat-option value=\"01\">January</mat-option>\r\n                                            <mat-option value=\"02\">February</mat-option>\r\n                                            <mat-option value=\"03\">March</mat-option>\r\n                                            <mat-option value=\"04\">April</mat-option>\r\n                                            <mat-option value=\"05\">May</mat-option>\r\n                                            <mat-option value=\"06\">June</mat-option>\r\n                                            <mat-option value=\"07\">July</mat-option>\r\n                                            <mat-option value=\"08\">August</mat-option>\r\n                                            <mat-option value=\"09\">September</mat-option>\r\n                                            <mat-option value=\"10\">October</mat-option>\r\n                                            <mat-option value=\"11\">November</mat-option>\r\n                                            <mat-option value=\"12\">December</mat-option>\r\n                                        </mat-select>\r\n                                    </mat-form-field>\r\n                                </div>\r\n                            </th>\r\n                            <th class=\"w80\">\r\n                                <div class=\"th-search-acmt\">\r\n                                    <mat-form-field class=\"example-full-width cs-input select-input\">\r\n                                        <input matInput placeholder=\"Search...\" (keyup.enter)=\"getTargetList()\"\r\n                                            #year=\"ngModel\" [(ngModel)]=\"value.year\">\r\n                                    </mat-form-field>\r\n                                </div>\r\n                            </th>\r\n\r\n                            <th class=\"w150 text-center\">\r\n                                <div class=\"th-search-acmt\">\r\n                                    <mat-form-field class=\"example-full-width cs-input select-input\">\r\n                                        <input matInput placeholder=\"Search...\" (keyup.enter)=\"getTargetList()\"\r\n                                            #assign_user=\"ngModel\" [(ngModel)]=\"value.assign_user\">\r\n                                    </mat-form-field>\r\n                                </div>\r\n                            </th>\r\n                            <th class=\"w100 text-right\">&nbsp;</th>\r\n                            <th class=\"w60 text-right\" *ngIf=\"active_tab == 'Pending'\">&nbsp;</th>\r\n                            <th class=\"w60 text-right\" *ngIf=\"active_tab == 'Pending'\">&nbsp;</th>\r\n                            <th class=\"w120 text-right\" *ngIf=\"active_tab == 'Approved'\">&nbsp;</th>\r\n                        </tr>\r\n                    </table>\r\n                </div>\r\n            </div>\r\n\r\n\r\n            <div class=\"table-container\">\r\n                <div class=\"table-content\" *ngIf=\"distributor_list.length > 0\">\r\n                    <table>\r\n                        <ng-container *ngIf=\"!loader\">\r\n                            <tr *ngFor=\"let row of distributor_list;let i=index \">\r\n                                <td class=\"w50 text-center\" *ngIf=\"active_tab == 'Pending'\">\r\n                                    <mat-checkbox name=\"checked\" [(ngModel)]=\"row.checked\" *ngIf=\"assign_login_data2.edit_employee_target =='1'\"\r\n                                        (change)=\"selectIds($event,i)\"></mat-checkbox>\r\n                                </td>\r\n                                <td class=\"w50\">{{i + 1 + sr_no}}</td>\r\n\r\n                                <td class=\"w100\">{{row.date_created ? (row.date_created | date:'dd-MMM-yyyy') : ''}}\r\n                                </td>\r\n                                <td class=\"w140\">{{row.created_by_name ? (row.created_by_name | titlecase) : '---'}}\r\n                                </td>\r\n                                <td class=\"w120\">{{row.network_type ? row.network_type : '---'}}</td>\r\n                                <td class=\"w250\">{{row.company_name}} {{row.mobile}}</td>\r\n                                <td class=\"w100\" *ngIf=\"targetType == 'Monthly Sales Projections'\">{{row.dr_code}}</td>\r\n                                <td class=\"w100\">{{row.month}}</td>\r\n                                <td class=\"w80\">{{row.year}}</td>\r\n                                <td class=\"w150 text-right\">\r\n                                    <strong> {{row.assign_user?row.assign_user:'--' }} </strong>\r\n                                </td>\r\n                                <td class=\"w100 text-right\">\r\n\r\n                                    <ng-container *ngIf=\"active_tab == 'Pending'\">\r\n                                        <div class=\"th-search-acmt\">\r\n                                            <mat-form-field>\r\n                                                <input type=\"text\" class=\"text-right\" matInput \r\n                                                    onkeypress=\"return event.charCode>=48 && event.charCode<=57\"\r\n                                                    [name]=\"'value'+i\" #value=\"ngModel\" [(ngModel)]=\"row.value\">\r\n                                            </mat-form-field>\r\n                                        </div>\r\n                                    </ng-container>\r\n                                    <ng-container *ngIf=\"active_tab == 'Approved'\">\r\n                                        <strong>{{row.value ? row.value: '0'}}</strong>\r\n                                    </ng-container>\r\n                                </td>\r\n                                <td class=\"w60 text-center\" *ngIf=\"active_tab == 'Pending'\">\r\n                                    <div class=\"action-button\">\r\n                                        <button mat-icon-button matTooltip=\"Save\" *ngIf=\"assign_login_data2.edit_employee_target =='1'\"\r\n                                            (click)=\"confirmationAlert(row.id, row.value)\">\r\n                                            <i class=\"material-icons edit\">save</i>\r\n                                        </button>\r\n                                    </div>\r\n                                </td>\r\n                                <td class=\"w60 text-center\" *ngIf=\"active_tab == 'Pending'\">\r\n                                    <div class=\"action-button\" *ngIf=\"row.senior_status == 'Pending'\">\r\n                                        <button mat-icon-button matTooltip=\"Save\" *ngIf=\"assign_login_data2.edit_employee_target =='1'\"\r\n                                            (click)=\"confirmationAlertStaus(row.id)\">\r\n                                            <i class=\"material-icons edit\">edit</i>\r\n                                        </button>\r\n                                    </div>\r\n                                    <span *ngIf=\"row.senior_status != 'Pending'\">{{row.senior_status}}</span>\r\n                                </td>\r\n                                <td class=\"w120 text-right\" *ngIf=\"active_tab == 'Approved'\">\r\n                                    <strong class=\"Approve\">{{row.achievements ? row.achievements : '0'}}</strong>\r\n                                </td>\r\n                            </tr>\r\n                        </ng-container>\r\n                        <ng-container *ngIf=\"loader\">\r\n                            <tr class=\"sk-loading\" *ngFor=\"let row of [].constructor(10)\">\r\n                                <td class=\"w50\">\r\n                                    <div>&nbsp;</div>\r\n                                </td>\r\n                                <td class=\"w50\" *ngIf=\"active_tab == 'Pending'\">\r\n                                    <div>&nbsp;</div>\r\n                                </td>\r\n                                <td class=\"w100\">\r\n                                    <div>&nbsp;</div>\r\n                                </td>\r\n                                <td class=\"w140\">\r\n                                    <div>&nbsp;</div>\r\n                                </td>\r\n                                <td class=\"w120\">\r\n                                    <div>&nbsp;</div>\r\n                                </td>\r\n                                <td class=\"w250\">\r\n                                    <div>&nbsp;</div>\r\n                                </td>\r\n                                <td class=\"w100\" *ngIf=\"targetType == 'Monthly Sales Projections'\">\r\n                                    <div>&nbsp;</div>\r\n                                </td>\r\n                                <td class=\"w100\">\r\n                                    <div>&nbsp;</div>\r\n                                </td>\r\n                                <td class=\"w80\">\r\n                                    <div>&nbsp;</div>\r\n                                </td>\r\n                                <td class=\"w150 text-right\">\r\n                                    <div>&nbsp;</div>\r\n                                </td>\r\n                                <td class=\"w100 text-right\">\r\n                                    <div>&nbsp;</div>\r\n                                </td>\r\n                                <td class=\"w60 text-right\" *ngIf=\"active_tab == 'Pending'\">\r\n                                    <div>&nbsp;</div>\r\n                                </td>\r\n                                <td class=\"w120 text-right\" *ngIf=\"active_tab == 'Approved'\">\r\n                                    <div>&nbsp;</div>\r\n                                </td>\r\n                            </tr>\r\n                        </ng-container>\r\n                    </table>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <ng-container *ngIf=\"distributor_list.length == 0 && datanotfound == true\">\r\n            <app-not-result-found></app-not-result-found>\r\n        </ng-container>\r\n    </div>\r\n    <div>\r\n    </div>\r\n    <div class=\"fab-btns\"\r\n        *ngIf=\"assign_login_data2.export_employee_target=='1' || assign_login_data2.import_employee_target=='1'\">\r\n        <button mat-fab color=\"accent\" class=\"pulse\" [matMenuTriggerFor]=\"menu\">\r\n            <i class=\"material-icons\">apps</i>\r\n            Action\r\n        </button>\r\n        <mat-menu #menu=\"matMenu\">\r\n            <button mat-menu-item (click)=\"exportAsXLSX();\"\r\n                *ngIf=\"distributor_list.length > 0 && assign_login_data2.export_employee_target=='1' && targetType == 'Monthly Sales Projections'\">\r\n                <mat-icon>download</mat-icon>\r\n                <span>Download in excel</span>\r\n            </button>\r\n\r\n            <button mat-menu-item (click)=\"exportAsXLSX1();\"\r\n            *ngIf=\"distributor_list.length > 0 && assign_login_data2.export_employee_target=='1' && targetType == 'Secondary Sales Projections'\">\r\n            <mat-icon>download</mat-icon>\r\n            <span>Download in excel</span>\r\n        </button>\r\n        <button mat-menu-item (click)=\"exportAsXLSX2();\"\r\n            *ngIf=\"distributor_list.length > 0 && assign_login_data2.export_employee_target=='1' && targetType == 'Stock Sales Projections'\">\r\n            <mat-icon>download</mat-icon>\r\n            <span>Download in excel</span>\r\n        </button>\r\n            <!-- <button mat-menu-item (click)=\"upload_excel('add new');\"\r\n                *ngIf=\" assign_login_data2.import_distributor_target=='1'\">\r\n                <mat-icon>cloud_upload</mat-icon>\r\n                <span>Upload New Data</span>\r\n            </button> -->\r\n            <!-- <button mat-menu-item (click)=\"upload_excel('update');\"\r\n                *ngIf=\"distributor_list.length > 0 && assign_login_data2.import_distributor_target=='1'\">\r\n                <mat-icon>update</mat-icon>\r\n                <span>Update Existing Data</span>\r\n            </button> -->\r\n        </mat-menu>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/distributor-target/distributor-target.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/distributor-target/distributor-target.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/distributor-target/distributor-target.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/distributor-target/distributor-target.component.ts ***!
  \********************************************************************/
/*! exports provided: DistributorTargetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DistributorTargetComponent", function() { return DistributorTargetComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_services_DatabaseService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/_services/DatabaseService */ "./src/_services/DatabaseService.ts");
/* harmony import */ var src_app_upload_file_modal_upload_file_modal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/upload-file-modal/upload-file-modal.component */ "./src/app/upload-file-modal/upload-file-modal.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var src_app_localstorage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/localstorage.service */ "./src/app/localstorage.service.ts");
/* harmony import */ var ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng6-toastr-notifications */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/ng6-toastr-notifications/fesm5/ng6-toastr-notifications.js");
/* harmony import */ var _order_status_modal_status_modal_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../order/status-modal/status-modal.component */ "./src/app/order/status-modal/status-modal.component.ts");
/* harmony import */ var _dialog_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../dialog.component */ "./src/app/dialog.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/router/fesm5/router.js");










var DistributorTargetComponent = /** @class */ (function () {
    function DistributorTargetComponent(serve, route, toast, dialog, alrt, session) {
        this.serve = serve;
        this.route = route;
        this.toast = toast;
        this.dialog = dialog;
        this.alrt = alrt;
        this.session = session;
        this.come_from = '';
        this.exp_data = [];
        this.excel_data = [];
        this.fabBtnValue = 'excel';
        this.loader = false;
        this.datanotfound = false;
        this.sr_no = 0;
        this.pagenumber = 1;
        this.start = 0;
        this.value = {};
        this.distributor_list = [];
        this.assign_login_data = [];
        this.assign_login_data2 = [];
        this.active_tab = 'Pending';
        this.checked = {};
        this.btnFlag = false;
        this.page_limit = serve.pageLimit;
        this.downurl = serve.downloadUrl;
        this.assign_login_data = this.session.getSession();
        this.assign_login_data = this.assign_login_data.value;
        this.assign_login_data2 = this.assign_login_data.data;
        this.assign_login_data = this.assign_login_data.assignModule;
    }
    DistributorTargetComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.pageType = _this.route.queryParams['_value'];
            if (_this.pageType != '') {
                _this.btnFlag = false;
                _this.checked.allID = false;
                _this.targetType = _this.pageType.pageType ? _this.pageType.pageType.replaceAll('%20', ' ') : '';
                _this.getTargetList();
            }
        });
    };
    DistributorTargetComponent.prototype.ngAfterViewInit = function () {
    };
    DistributorTargetComponent.prototype.pervious = function () {
        this.start = this.start - this.page_limit;
        this.getTargetList();
    };
    DistributorTargetComponent.prototype.nextPage = function () {
        this.start = this.start + this.page_limit;
        this.getTargetList();
    };
    DistributorTargetComponent.prototype.lastBtnValue = function (value) {
        this.fabBtnValue = value;
    };
    DistributorTargetComponent.prototype.refresh1 = function () {
        this.value = {};
        this.getTargetList();
    };
    DistributorTargetComponent.prototype.getTargetList = function () {
        var _this = this;
        if (this.pagenumber > this.total_page) {
            this.pagenumber = this.total_page;
            this.start = this.pageCount - this.page_limit;
        }
        if (this.start < 0) {
            this.start = 0;
        }
        this.loader = true;
        var header;
        if (this.targetType == 'Monthly Sales Projections') {
            header = this.serve.post_rqst({ 'user_id': this.assign_login_data2.id, 'active_tab': this.active_tab, 'start': this.start, 'pagelimit': this.page_limit, 'filter': this.value }, "Target/distributorsTargetList");
        }
        if (this.targetType == 'Secondary Sales Projections' || this.targetType == 'Stock Sales Projections') {
            header = this.serve.post_rqst({ 'user_id': this.assign_login_data2.id, 'active_tab': this.active_tab, 'start': this.start, 'type': this.targetType == 'Secondary Sales Projections' ? 'order' : 'stock', 'pagelimit': this.page_limit, 'filter': this.value }, "Target/secondaryTargetList");
        }
        header.subscribe((function (result) {
            if (result['statusCode'] == 200) {
                _this.distributor_list = result['target_list'];
                _this.tabCount = result['count'];
                if (_this.distributor_list.length == 0) {
                    _this.datanotfound = true;
                }
                else {
                    _this.datanotfound = false;
                }
                if (_this.active_tab == 'Pending') {
                    _this.pageCount = result['count']['count_pending'] ? result['count']['count_pending'] : 0;
                }
                if (_this.active_tab == 'Approved') {
                    _this.pageCount = result['count']['count_approved'] ? result['count']['count_approved'] : 0;
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
                setTimeout(function () {
                    _this.loader = false;
                }, 200);
            }
            else {
                _this.toast.errorToastr(result['statusMsg']);
            }
        }));
    };
    DistributorTargetComponent.prototype.upload_excel = function (type) {
        var _this = this;
        var dialogRef = this.alrt.open(src_app_upload_file_modal_upload_file_modal_component__WEBPACK_IMPORTED_MODULE_3__["UploadFileModalComponent"], {
            width: '500px',
            panelClass: 'cs-modal',
            disableClose: true,
            data: {
                'from': 'distributor_target',
                'modal_type': type,
                'page_type': this.targetType,
            }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            _this.getTargetList();
        });
    };
    DistributorTargetComponent.prototype.exportAsXLSX = function () {
        var _this = this;
        this.loader = true;
        this.serve.FileData({ 'filter': this.value }, "Excel/distributors_target_list")
            .subscribe(function (resp) {
            if (resp['msg'] == true) {
                _this.loader = false;
                window.open(_this.downurl + resp['filename']);
                _this.getTargetList();
            }
            else {
            }
        });
    };
    DistributorTargetComponent.prototype.exportAsXLSX1 = function () {
        var _this = this;
        this.loader = true;
        this.serve.FileData({ 'search': this.value }, "Excel/Secondary_Sales_Projections")
            .subscribe(function (resp) {
            if (resp['msg'] == true) {
                _this.loader = false;
                window.open(_this.downurl + resp['filename']);
                _this.getTargetList();
            }
            else {
            }
        });
    };
    DistributorTargetComponent.prototype.exportAsXLSX2 = function () {
        var _this = this;
        this.loader = true;
        this.serve.FileData({ 'search': this.value }, "Excel/Stock_Sales_Projections")
            .subscribe(function (resp) {
            if (resp['msg'] == true) {
                _this.loader = false;
                window.open(_this.downurl + resp['filename']);
                _this.getTargetList();
            }
            else {
            }
        });
    };
    DistributorTargetComponent.prototype.selectIds = function (event, index) {
        if (event.checked == true) {
            this.distributor_list[index]['checked'] = true;
            this.btnFlag = true;
            this.updateCheck();
        }
        if (event.checked == false) {
            this.distributor_list[index]['checked'] = false;
            this.updateCheck();
        }
    };
    DistributorTargetComponent.prototype.selectAll = function (event) {
        if (event.checked == true) {
            for (var i = 0; i < this.distributor_list.length; i++) {
                this.distributor_list[i]['checked'] = true;
            }
            this.checked.allID = true;
            this.btnFlag = true;
        }
        if (event.checked == false) {
            for (var i = 0; i < this.distributor_list.length; i++) {
                this.distributor_list[i]['checked'] = false;
            }
            this.checked.allID = false;
            this.btnFlag = false;
        }
    };
    DistributorTargetComponent.prototype.updateCheck = function () {
        for (var i = 0; i < this.distributor_list.length; i++) {
            if (this.distributor_list[i]['checked'] != true) {
                this.checked.allID = false;
                return;
            }
            else {
                this.checked.allID = true;
            }
        }
    };
    DistributorTargetComponent.prototype.openDialog = function () {
        var _this = this;
        var uniqueArray = [];
        if (this.distributor_list.length > 0) {
            for (var i = 0; i < this.distributor_list.length; i++) {
                if (this.distributor_list[i]['checked'] == true) {
                    uniqueArray.push(this.distributor_list[i]);
                }
            }
        }
        var dialogRef = this.alrt.open(_order_status_modal_status_modal_component__WEBPACK_IMPORTED_MODULE_7__["StatusModalComponent"], {
            width: '400px',
            data: {
                'from': 'target_status',
                'target_type': this.targetType,
                'partyId': uniqueArray,
                'allStatus': this.checked.allID,
            }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result == true) {
                _this.checked.allID = false;
                _this.btnFlag = false;
                _this.getTargetList();
            }
        });
    };
    DistributorTargetComponent.prototype.confirmationAlert = function (id, value) {
        var _this = this;
        this.dialog.confirm("Do you want to update this target ?").then(function (result) {
            if (result) {
                _this.updateTarget(id, value);
            }
        });
    };
    DistributorTargetComponent.prototype.updateTarget = function (id, value) {
        var _this = this;
        var payload = { 'value': value, 'id': id, 'created_by_id': this.assign_login_data2.id, 'created_by_name': this.assign_login_data2.id.name };
        this.serve.post_rqst({ "data": payload }, this.targetType == 'Monthly Sales Projections' ? "Target/updatePrimaryTarget" : 'Target/updateSecondaryTarget').subscribe(function (result) {
            if (result['statusCode'] == 200) {
                _this.toast.successToastr(result['statusMsg']);
                _this.getTargetList();
            }
            else {
                _this.dialog.error(result['statusMsg']);
                _this.toast.errorToastr(result['statusMsg']);
            }
        });
    };
    DistributorTargetComponent.prototype.confirmationAlertStaus = function (id) {
        var _this = this;
        this.dialog.confirm("Do you want to update Senior Staus ?").then(function (result) {
            if (result) {
                _this.updateTargetSeniorStatus(id);
            }
        });
    };
    DistributorTargetComponent.prototype.updateTargetSeniorStatus = function (id) {
        var _this = this;
        var payload = { 'id': id, 'senior_status': 'Approved', 'created_by_id': this.assign_login_data2.id, 'created_by_name': this.assign_login_data2.id.name };
        this.serve.post_rqst({ "data": payload }, this.targetType == 'Monthly Sales Projections' ? "Target/primaryTargetSeniorStatusChange" : 'Target/secondaryTargetSeniorStatusChange').subscribe(function (result) {
            if (result['statusCode'] == 200) {
                _this.toast.successToastr(result['statusMsg']);
                _this.getTargetList();
            }
            else {
                _this.dialog.error(result['statusMsg']);
                _this.toast.errorToastr(result['statusMsg']);
            }
        });
    };
    DistributorTargetComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-distributor-target',
            template: __webpack_require__(/*! ./distributor-target.component.html */ "./src/app/distributor-target/distributor-target.component.html"),
            styles: [__webpack_require__(/*! ./distributor-target.component.scss */ "./src/app/distributor-target/distributor-target.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_services_DatabaseService__WEBPACK_IMPORTED_MODULE_2__["DatabaseService"], _angular_router__WEBPACK_IMPORTED_MODULE_9__["ActivatedRoute"], ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_6__["ToastrManager"], _dialog_component__WEBPACK_IMPORTED_MODULE_8__["DialogComponent"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialog"], src_app_localstorage_service__WEBPACK_IMPORTED_MODULE_5__["sessionStorage"]])
    ], DistributorTargetComponent);
    return DistributorTargetComponent;
}());



/***/ })

}]);