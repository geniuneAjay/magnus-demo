(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["userview-target-userview-target-module-userview-target-module"],{

/***/ "./src/app/userview-target/userview-target-module/userview-target.module.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/userview-target/userview-target-module/userview-target.module.ts ***!
  \**********************************************************************************/
/*! exports provided: UserviewTargetModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserviewTargetModule", function() { return UserviewTargetModule; });
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
/* harmony import */ var _userview_target_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../userview-target.component */ "./src/app/userview-target/userview-target.component.ts");













var targetRoutes = [
    { path: "", component: _userview_target_component__WEBPACK_IMPORTED_MODULE_12__["UserviewTargetComponent"], canActivate: [src_app_auth_component_guard__WEBPACK_IMPORTED_MODULE_11__["AuthComponentGuard"]], data: { expectedRole: ['1'] } },
];
var UserviewTargetModule = /** @class */ (function () {
    function UserviewTargetModule() {
    }
    UserviewTargetModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _userview_target_component__WEBPACK_IMPORTED_MODULE_12__["UserviewTargetComponent"]
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
    ], UserviewTargetModule);
    return UserviewTargetModule;
}());



/***/ }),

/***/ "./src/app/userview-target/userview-target.component.html":
/*!****************************************************************!*\
  !*** ./src/app/userview-target/userview-target.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-container\">\r\n  <div class=\"tools-container\">\r\n    <!-- <h2>Employee Target</h2> -->\r\n    <h2>{{ \r\n      targetType == 'Employee' ? 'Employee Target' : \r\n      targetType == 'Employee_Projection' ? 'Monthly Projection Vs. Achievement' :\r\n      targetType == 'EmployeeQuartelyTarget' ? 'Quarterly Target Vs. Achievement' : \r\n      'Secondary Visit Projections' \r\n    }}\r\n    \r\n      <ng-container *ngIf=\"targetType == 'Employee' && value.date_from && value.date_to\">\r\n        {{value.date_from ? (value.date_from | date : 'd MMM yyyy') : ''}} to {{value.date_to ? (value.date_to | date\r\n        : 'd MMM yyyy') : ''}}\r\n      </ng-container>\r\n    </h2>\r\n\r\n\r\n    <div class=\"left-auto df ac flex-gap-10\">\r\n      <ng-container\r\n        *ngIf=\"(active_tab == 'secondary' || active_tab == 'stock') && pageType.pageType != 'Employee' && pageType.pageType != 'Employee_Projection' \">\r\n        <button mat-raised-button color=\"primary\" *ngIf=\"btnFlag == true\" (click)=\"openDialog()\">\r\n          Change Status\r\n        </button>\r\n      </ng-container>\r\n\r\n      <ng-container *ngIf=\"targetType == 'Employee'\">\r\n\r\n        <button mat-icon-button matTooltip=\"Filter\" (click)=\"openBottomSheet()\">\r\n          <i class=\"material-icons\">filter_alt</i>\r\n        </button>\r\n\r\n        <button mat-raised-button color=\"accent\" matTooltip=\"Download Achievement Bifurcation\" (click)=\"achievementBifurcationExportAsXLSX()\">\r\n          <i class=\"material-icons\">bar_chart</i> Achievement Bifurcation\r\n        </button>\r\n\r\n        <button mat-raised-button color=\"primary\" matTooltip=\"Download State-Wise Achievement Hierarchy\" (click)=\"downloadAchievementHierarchyExcel()\">\r\n          <i class=\"material-icons\">map</i> State Hierarchy Excel\r\n        </button>\r\n      </ng-container>\r\n      <ng-container *ngIf=\"targetType == 'Employee_Projection' || targetType == 'EmployeeQuartelyTarget'\">\r\n        <button color=\"primary\" mat-raised-button (click)=\"DownloadReport('monthly')\">\r\n          Monthly Report\r\n        </button>\r\n        <button color=\"primary\" mat-raised-button (click)=\"DownloadReport('Quartely')\">\r\n          Target Report\r\n        </button>\r\n        <button color=\"primary\" mat-raised-button (click)=\"DownloadReport('chart')\">\r\n          Projection Chart\r\n        </button>\r\n\r\n      </ng-container>\r\n\r\n      <a mat-icon-button matTooltip=\"Refresh\" (click)=\"refresh1()\">\r\n        <i class=\"material-icons\">refresh</i>\r\n      </a>\r\n\r\n      <div class=\"pagination\" *ngIf=\"target_list.length > 0 && targetType != 'EmployeeQuartelyTarget'\">\r\n        <div class=\"pagination-content\">\r\n          Pages\r\n          <span>{{pagenumber}}</span>\r\n          of\r\n          <span>{{total_page}}</span>\r\n        </div>\r\n        <div class=\"page-nav\">\r\n          <button mat-icon-button matTooltip=\"Older\" (click)=\"pervious()\" [disabled]=\"start == 0\">\r\n            <i class=\"material-icons\">navigate_before</i>\r\n          </button>\r\n          <button mat-icon-button matTooltip=\"Newer\" (click)=\"nextPage()\" [disabled]=\"pagenumber == total_page \">\r\n            <i class=\"material-icons\">navigate_next</i>\r\n          </button>\r\n        </div>\r\n      </div>\r\n\r\n\r\n      <!-- <div class=\"mat-tabbar\" *ngIf=\"pageType.pageType == 'Employee'\">\r\n        <button mat-button [ngClass]=\"active_tab == 'Sale' ? 'active' : ''\"\r\n          (click)=\"active_tab = 'Sale';get_user_data()\"><i class=\"material-icons\">moving</i>Primary Sales\r\n          Target</button>\r\n\r\n        <button mat-button [ngClass]=\"active_tab == 'secondary_projection' ? 'active' : ''\" (click)=\"active_tab = 'secondary_projection';get_user_data()\r\n        \"><i class=\"material-icons\">moving</i>Secondary Sales Target</button>\r\n\r\n        <button mat-button [ngClass]=\"active_tab == 'stock' ? 'active' : ''\"\r\n          (click)=\"active_tab = 'stock';get_user_data()\"><i class=\"material-icons\">moving</i>Stock Transfer\r\n          Target</button>\r\n\r\n        <button mat-button [ngClass]=\"active_tab == 'secondary' ? 'active' : ''\" (click)=\"active_tab = 'secondary';get_user_data()\r\n        \"><i class=\"material-icons\">person_pin_circle</i>Secondary Visit Target</button>\r\n\r\n      </div> -->\r\n\r\n      <ng-container *ngIf=\"(active_tab == 'secondary' || active_tab == 'stock') && pageType.pageType != 'Employee'\">\r\n        <div class=\"mat-tabbar\">\r\n          <!-- <button mat-button [ngClass]=\"sub_active_tab == 'Pending' ? 'active' : ''\"\r\n            (click)=\"sub_active_tab = 'Pending'; get_user_data()\"><i class=\"material-icons\">pending_actions</i>Pendingijhj\r\n          </button> -->\r\n          <!-- <button mat-button [ngClass]=\"sub_active_tab == 'Approved' ? 'active' : ''\"\r\n            (click)=\"sub_active_tab = 'Approved';get_user_data(); checked.allID = false; btnFlag = false\"><i\r\n              class=\"material-icons\">verified</i>Approved\r\n          </button> -->\r\n        </div>\r\n      </ng-container>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"container container-scroll \">\r\n\r\n    <ng-container *ngIf=\"targetType != 'Employee' && targetType != 'Employee_Projection' && targetType != 'EmployeeQuartelyTarget'\">\r\n      <div class=\"cs-table horizontal-scroll mb70\">\r\n        <div class=\"sticky-head border-top\">\r\n          <div class=\"table-head\">\r\n            <table>\r\n              <tr>\r\n                <th class=\"w50 text-center\"\r\n                  *ngIf=\"(sub_active_tab == 'Pending' && (active_tab == 'secondary' || active_tab == 'stock'))  && target_list.length > 0\">\r\n                  <mat-checkbox (change)=\"selectAll($event)\" name=\"allID\" [(ngModel)]=\"checked.allID\"></mat-checkbox>\r\n                </th>\r\n                <th class=\"w45 text-center\">Sr.No</th>\r\n                <th class=\"w180\">Employee Name</th>\r\n                <th class=\"w120\">Employee Code</th>\r\n                <th class=\"w180\">Reporting Manager</th>\r\n                <th class=\"w160\">Month</th>\r\n                <th class=\"w160\">Year</th>\r\n                <ng-container\r\n                  *ngIf=\"active_tab == 'Sale' || active_tab == 'secondary_projection' || active_tab == 'stock'\">\r\n                  <th class=\"w100 text-right\">Target {{active_tab == 'Sale' ? '(Tons)' : '(No Of Sheet)'}}</th>\r\n                  <th class=\"w140 text-right\">Achievement {{active_tab == 'Sale' ? '(Tons)' : '(No Of Sheet)'}}</th>\r\n                </ng-container>\r\n                <ng-container *ngIf=\"active_tab == 'secondary'\">\r\n                  <!-- <th class=\"w180 text-center\">Lead</th>\r\n                  <th class=\"w180 text-center\">Ply Expert</th>\r\n                  <th class=\"w180 text-center\">Ambassador</th>\r\n                  <th class=\"w180 text-center\">OEM</th> -->\r\n                  <th class=\"w180 text-center\">BTL</th>\r\n                  <!-- <th class=\"w180 text-center\">Projected Unit</th> -->\r\n                </ng-container>\r\n\r\n                <ng-container\r\n                  *ngIf=\"sub_active_tab == 'Pending' && (active_tab == 'secondary' || active_tab == 'stock')\">\r\n                  <th class=\"w60 text-center\">Action</th>\r\n                </ng-container>\r\n              </tr>\r\n            </table>\r\n          </div>\r\n          <div class=\"table-head border-top\">\r\n            <table>\r\n              <tr>\r\n                <th class=\"w50 text-center\"\r\n                  *ngIf=\"(sub_active_tab == 'Pending' && (active_tab == 'secondary' || active_tab == 'stock') )  && target_list.length > 0\">\r\n                </th>\r\n                <th class=\"w45 text-center\"></th>\r\n\r\n                <th class=\"w180\">\r\n                  <div class=\"th-search-acmt\">\r\n                    <mat-form-field class=\"example-full-width cs-input select-input\">\r\n                      <input matInput placeholder=\"Search...\" (keyup.enter)=\"get_user_data()\" #name=\"ngModel\"\r\n                        [(ngModel)]=\"value.name\">\r\n\r\n                    </mat-form-field>\r\n                  </div>\r\n                </th>\r\n                <th class=\"w120\">\r\n                  <div class=\"th-search-acmt\">\r\n                    <mat-form-field class=\"example-full-width cs-input select-input\">\r\n                      <input matInput placeholder=\"Search...\" (keyup.enter)=\"get_user_data()\" #employee_id=\"ngModel\"\r\n                        [(ngModel)]=\"value.employee_id\">\r\n                    </mat-form-field>\r\n                  </div>\r\n                </th>\r\n                <th class=\"w180\">\r\n                  <!-- <div class=\"th-search-acmt\">\r\n                  <mat-form-field>\r\n                    <input type=\"text\"  matInput placeholder=\"Search...\" (keyup.enter)=\"get_user_data()\" #reporting=\"ngModel\" [(ngModel)]=\"value.reporting\">\r\n\r\n                  </mat-form-field>\r\n                </div> -->\r\n                </th>\r\n                <th class=\"w160\">\r\n                  <div class=\"th-search-acmt\">\r\n                    <mat-form-field>\r\n                      <mat-label>Select Month</mat-label>\r\n                      <mat-select name=\"month\" #month=\"ngModel\" [(ngModel)]=\"value.month\"\r\n                        (ngModelChange)=\"get_user_data()\">\r\n                        <mat-option value=\"1\">January</mat-option>\r\n                        <mat-option value=\"2\">February</mat-option>\r\n                        <mat-option value=\"3\">March</mat-option>\r\n                        <mat-option value=\"4\">April</mat-option>\r\n                        <mat-option value=\"5\">May</mat-option>\r\n                        <mat-option value=\"6\">June</mat-option>\r\n                        <mat-option value=\"7\">July</mat-option>\r\n                        <mat-option value=\"8\">August</mat-option>\r\n                        <mat-option value=\"9\">September</mat-option>\r\n                        <mat-option value=\"10\">October</mat-option>\r\n                        <mat-option value=\"11\">November</mat-option>\r\n                        <mat-option value=\"12\">December</mat-option>\r\n                      </mat-select>\r\n                    </mat-form-field>\r\n                  </div>\r\n\r\n                </th>\r\n                <th class=\"w160\">\r\n                  <div class=\"th-search-acmt\">\r\n                    <mat-form-field>\r\n                      <input type=\"text\" matInput placeholder=\"Search...\" (keyup.enter)=\"get_user_data()\"\r\n                        #mobile=\"ngModel\" [(ngModel)]=\"value.year\">\r\n                    </mat-form-field>\r\n                  </div>\r\n                </th>\r\n                <ng-container\r\n                  *ngIf=\"active_tab == 'Sale' || active_tab == 'secondary_projection' || active_tab == 'stock'\">\r\n                  <th class=\"w100\"></th>\r\n                  <th class=\"w140\"></th>\r\n                </ng-container>\r\n\r\n                <ng-container *ngIf=\"active_tab == 'secondary'\">\r\n                  <!-- <th class=\"w180 padding0 in-table\">\r\n                    <table>\r\n                      <tr>\r\n                        <th class=\"text-center border-top\">Target</th>\r\n                        <th class=\"text-center border-top\" *ngIf=\"sub_active_tab == 'Approved'\">Achievement</th>\r\n                      </tr>\r\n                    </table>\r\n                  </th>\r\n                  <th class=\"w180 padding0 in-table\">\r\n                    <table>\r\n                      <tr>\r\n                        <th class=\"text-center border-top\">Target</th>\r\n                        <th class=\"text-center border-top\" *ngIf=\"sub_active_tab == 'Approved'\">Achievement</th>\r\n                      </tr>\r\n                    </table>\r\n                  </th>\r\n                  <th class=\"w180 padding0 in-table\">\r\n                    <table>\r\n                      <tr>\r\n                        <th class=\"text-center border-top\">Target</th>\r\n                        <th class=\"text-center border-top\" *ngIf=\"sub_active_tab == 'Approved'\">Achievement</th>\r\n                      </tr>\r\n                    </table>\r\n                  </th>\r\n                  <th class=\"w180 padding0 in-table\">\r\n                    <table>\r\n                      <tr>\r\n                        <th class=\"text-center border-top\">Target</th>\r\n                        <th class=\"text-center border-top\" *ngIf=\"sub_active_tab == 'Approved'\">Achievement</th>\r\n                      </tr>\r\n                    </table>\r\n                  </th>-->\r\n                  <th class=\"w180 padding0 in-table\">\r\n                    <table>\r\n                      <tr>\r\n                        <th class=\"text-center border-top\">Target</th>\r\n                        <th class=\"text-center border-top\" *ngIf=\"sub_active_tab == 'Approved'\">Achievement</th>\r\n                      </tr>\r\n                    </table>\r\n                  </th>\r\n                  <!-- <th class=\"w180 padding0 in-table\">\r\n                  <table>\r\n                    <tr>\r\n                      <th class=\"text-center border-top\">Target</th>\r\n                      <th class=\"text-center border-top\" *ngIf=\"sub_active_tab == 'Approved'\">Achievement</th>\r\n                    </tr>\r\n                  </table>\r\n                </th> -->\r\n                </ng-container>\r\n\r\n                <ng-container\r\n                  *ngIf=\"sub_active_tab == 'Pending' && (active_tab == 'secondary' || active_tab == 'stock')\">\r\n                  <th class=\"w60 text-center\"></th>\r\n                </ng-container>\r\n              </tr>\r\n            </table>\r\n\r\n\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"table-container\">\r\n          <div class=\"table-content\">\r\n            <table>\r\n\r\n              <ng-container *ngIf=\"!loader\">\r\n                <tr *ngFor=\"let row of target_list;let i=index \">\r\n                  <td class=\"w50 text-center\"\r\n                    *ngIf=\"(sub_active_tab == 'Pending' && (active_tab == 'secondary' || active_tab == 'stock'))\">\r\n                    <mat-checkbox name=\"checked\" [(ngModel)]=\"row.checked\"\r\n                      (change)=\"selectIds($event,i)\"></mat-checkbox>\r\n                  </td>\r\n                  <td class=\"w45 text-center\">{{i + 1 + sr_no}}</td>\r\n                  <td class=\"w180\">{{row.name | titlecase}}</td>\r\n                  <td class=\"w120\">{{row.employee_id ? row.employee_id:'--' }}</td>\r\n                  <td class=\"w180\">{{row.repoting_manager_name}}</td>\r\n                  <td class=\"w160\">{{row.month}}</td>\r\n                  <td class=\"w160\">{{row.year}}</td>\r\n                  <ng-container\r\n                    *ngIf=\"active_tab == 'Sale' || active_tab == 'secondary_projection' || active_tab == 'stock'\">\r\n                    <td class=\"w100 text-right\">\r\n                      <strong *ngIf=\"active_tab == 'Sale' || active_tab == 'secondary_projection'\">\r\n                        {{row.value ? row.value : '0'}}\r\n                      </strong>\r\n\r\n                      <strong *ngIf=\"sub_active_tab == 'Approved' && active_tab == 'stock'\">\r\n                        {{row.value ? row.value : '0'}}\r\n                      </strong>\r\n                      <ng-container *ngIf=\"sub_active_tab == 'Pending' && active_tab == 'stock'\">\r\n                        <div class=\"th-search-acmt\">\r\n                          <mat-form-field>\r\n                            <input type=\"text\" class=\"text-right\" matInput\r\n                              onkeypress=\"return event.charCode>=48 && event.charCode<=57\" [name]=\"'value'+i\"\r\n                              #value=\"ngModel\" [(ngModel)]=\"row.value\">\r\n                          </mat-form-field>\r\n                        </div>\r\n                      </ng-container>\r\n                    </td>\r\n                    <td class=\"w140 text-right\">\r\n                      <strong>{{row.achieve ? row.achieve : '0'}}</strong>\r\n                    </td>\r\n                  </ng-container>\r\n                  <ng-container *ngIf=\"active_tab == 'secondary'\">\r\n                    <!-- <td class=\"w180 padding0\">\r\n                      <table class=\"in-table\">\r\n                        <tr>\r\n                          <td class=\"text-center\">\r\n                            <strong *ngIf=\"sub_active_tab == 'Approved' && active_tab == 'secondary'\">{{row.target_lead\r\n                              ?\r\n                              row.target_lead : '0'}}</strong>\r\n                            <ng-container *ngIf=\"sub_active_tab == 'Pending' && active_tab == 'secondary'\">\r\n                              <div class=\"th-search-acmt\">\r\n                                <mat-form-field>\r\n                                  <input type=\"text\" class=\"text-right\" matInput\r\n                                    onkeypress=\"return event.charCode>=48 && event.charCode<=57\"\r\n                                    [name]=\"'target_lead'+i\" #target_lead=\"ngModel\" [(ngModel)]=\"row.target_lead\">\r\n                                </mat-form-field>\r\n                              </div>\r\n                            </ng-container>\r\n                          </td>\r\n                          <td class=\"text-center\" *ngIf=\"sub_active_tab == 'Approved'\"><strong>{{row.achv_enquiry ?\r\n                              row.achv_enquiry : '0'}}</strong></td>\r\n                        </tr>\r\n                      </table>\r\n                    </td>\r\n                    <td class=\"w180 padding0\">\r\n                      <table class=\"in-table\">\r\n                        <tr>\r\n                          <td class=\"text-center\">\r\n                            <strong\r\n                              *ngIf=\"sub_active_tab == 'Approved' && active_tab == 'secondary'\">{{row.target_plyexpert ?\r\n                              row.target_plyexpert : '0'}}</strong>\r\n                            <ng-container *ngIf=\"sub_active_tab == 'Pending' && active_tab == 'secondary'\">\r\n                              <div class=\"th-search-acmt\">\r\n                                <mat-form-field>\r\n                                  <input type=\"text\" class=\"text-right\" matInput\r\n                                    onkeypress=\"return event.charCode>=48 && event.charCode<=57\"\r\n                                    [name]=\"'target_plyexpert'+i\" #target_plyexpert=\"ngModel\"\r\n                                    [(ngModel)]=\"row.target_plyexpert\">\r\n                                </mat-form-field>\r\n                              </div>\r\n                            </ng-container>\r\n                          </td>\r\n                          <td class=\"text-center\" *ngIf=\"sub_active_tab == 'Approved'\"><strong>{{row.achv_ply_expert ?\r\n                              row.achv_ply_expert : '0'}}</strong></td>\r\n                        </tr>\r\n                      </table>\r\n                    </td>\r\n                    <td class=\"w180 padding0\">\r\n                      <table class=\"in-table\">\r\n                        <tr>\r\n                          <td class=\"text-center\">\r\n                            <strong\r\n                              *ngIf=\"sub_active_tab == 'Approved' && active_tab == 'secondary'\">{{row.target_ambassador\r\n                              ?\r\n                              row.target_ambassador : '0'}}</strong>\r\n                            <ng-container *ngIf=\"sub_active_tab == 'Pending' && active_tab == 'secondary'\">\r\n                              <div class=\"th-search-acmt\">\r\n                                <mat-form-field>\r\n                                  <input type=\"text\" class=\"text-right\" matInput\r\n                                    onkeypress=\"return event.charCode>=48 && event.charCode<=57\"\r\n                                    [name]=\"'target_ambassador'+i\" #target_ambassador=\"ngModel\"\r\n                                    [(ngModel)]=\"row.target_ambassador\">\r\n                                </mat-form-field>\r\n                              </div>\r\n                            </ng-container>\r\n                          </td>\r\n                          <td class=\"text-center\" *ngIf=\"sub_active_tab == 'Approved'\"><strong>{{row.achv_ambassador ?\r\n                              row.achv_ambassador : '0'}}</strong>\r\n                          </td>\r\n                        </tr>\r\n                      </table>\r\n                    </td>\r\n                    <td class=\"w180 padding0\">\r\n                      <table class=\"in-table\">\r\n                        <tr>\r\n                          <td class=\"text-center\">\r\n\r\n                            <strong *ngIf=\"sub_active_tab == 'Approved' && active_tab == 'secondary'\">{{row.target_oem ?\r\n                              row.target_oem : '0'}}</strong>\r\n                            <ng-container *ngIf=\"sub_active_tab == 'Pending' && active_tab == 'secondary'\">\r\n                              <div class=\"th-search-acmt\">\r\n                                <mat-form-field>\r\n                                  <input type=\"text\" class=\"text-right\" matInput\r\n                                    onkeypress=\"return event.charCode>=48 && event.charCode<=57\" [name]=\"'target_oem'+i\"\r\n                                    #target_oem=\"ngModel\" [(ngModel)]=\"row.target_oem\">\r\n                                </mat-form-field>\r\n                              </div>\r\n                            </ng-container>\r\n\r\n                          </td>\r\n                          <td class=\"text-center\" *ngIf=\"sub_active_tab == 'Approved'\"><strong>{{row.achv_oem ?\r\n                              row.achv_oem : '0'}}</strong></td>\r\n                        </tr>\r\n                      </table>\r\n                    </td> -->\r\n                    <td class=\"w180 padding0\">\r\n                      <table class=\"in-table\">\r\n                        <tr>\r\n                          <td class=\"text-center\">\r\n\r\n                            <strong *ngIf=\"sub_active_tab == 'Approved' && active_tab == 'secondary'\">{{row.btl_target\r\n                              ?\r\n                              row.btl_target : '0'}}</strong>\r\n                            <ng-container *ngIf=\"sub_active_tab == 'Pending' && active_tab == 'secondary'\">\r\n                              <div class=\"th-search-acmt\">\r\n                                <mat-form-field>\r\n                                  <input type=\"text\" class=\"text-right\" matInput\r\n                                    onkeypress=\"return event.charCode>=48 && event.charCode<=57\"\r\n                                    [name]=\"'target_builder'+i\" #target_builder=\"ngModel\"\r\n                                    [(ngModel)]=\"row.target_builder\">\r\n                                </mat-form-field>\r\n                              </div>\r\n                            </ng-container>\r\n                          </td>\r\n                          <td class=\"text-center\" *ngIf=\"sub_active_tab == 'Approved'\"><strong>{{row.btl_ach ?\r\n                              row.btl_ach : '0'}}</strong></td>\r\n                        </tr>\r\n                      </table>\r\n                    </td>\r\n                    <!--\r\n                  <td class=\"w180 padding0\">\r\n                    <table class=\"in-table\">\r\n                      <tr>\r\n                        <td class=\"text-center\">\r\n\r\n\r\n                          <strong *ngIf=\"sub_active_tab == 'Approved' && active_tab == 'secondary'\">{{row.value ?\r\n                            row.value : '0'}}</strong>\r\n                          <ng-container *ngIf=\"sub_active_tab == 'Pending' && active_tab == 'secondary'\">\r\n                            <div class=\"th-search-acmt\">\r\n                              <mat-form-field>\r\n                                <input type=\"text\" class=\"text-right\" matInput\r\n                                  onkeypress=\"return event.charCode>=48 && event.charCode<=57\" [name]=\"'value'+i\"\r\n                                  #value=\"ngModel\" [(ngModel)]=\"row.value\">\r\n                              </mat-form-field>\r\n                            </div>\r\n                          </ng-container>\r\n\r\n                        </td>\r\n                        <td class=\"text-center\" *ngIf=\"sub_active_tab == 'Approved'\"><strong>{{row.achievements ?\r\n                            row.achievements : '0'}}</strong></td>\r\n                      </tr>\r\n                    </table>\r\n                  </td> -->\r\n                  </ng-container>\r\n\r\n                  <ng-container\r\n                    *ngIf=\"sub_active_tab == 'Pending' && (active_tab == 'secondary' || active_tab == 'stock')\">\r\n                    <td class=\"w60 text-center\">\r\n                      <!-- <ng-container *ngIf=\"active_tab != 'secondary'\">\r\n                      <div class=\"action-button\" *ngIf=\"assign_login_data2.delete_employee_target=='1'\">\r\n                        <button mat-icon-button matTooltip=\"Delete\" (click)=\"delete(active_tab, row.id)\">\r\n                          <i class=\"material-icons del\">delete</i>\r\n                        </button>\r\n                      </div>\r\n                    </ng-container> -->\r\n                      <ng-container\r\n                        *ngIf=\"sub_active_tab == 'Pending' && (active_tab == 'secondary' || active_tab == 'stock')\">\r\n                        <div class=\"action-button\">\r\n                          <button mat-icon-button matTooltip=\"Save\"\r\n                            (click)=\"confirmationAlert(row.id, row.target_lead, row.target_plyexpert, row.target_ambassador, row.target_oem, row.target_builder)\">\r\n                            <i class=\"material-icons edit\">save</i>\r\n                          </button>\r\n                        </div>\r\n                      </ng-container>\r\n                    </td>\r\n                  </ng-container>\r\n                </tr>\r\n              </ng-container>\r\n\r\n              <ng-container *ngIf=\"loader\">\r\n                <tr class=\"sk-loading\" *ngFor=\"let row of [].constructor(10)\">\r\n\r\n                  <td class=\"w50\"\r\n                    *ngIf=\"(sub_active_tab == 'Pending' && (active_tab == 'secondary' || active_tab == 'stock'))\">\r\n                    <div>&nbsp;</div>\r\n                  </td>\r\n                  <td class=\"w45 text-center\">\r\n                    <div>&nbsp;</div>\r\n                  </td>\r\n                  <td class=\"w180\">\r\n                    <div>&nbsp;</div>\r\n                  </td>\r\n                  <td class=\"w120\">\r\n                    <div>&nbsp;</div>\r\n                  </td>\r\n                  <td class=\"w180\">\r\n                    <div>&nbsp;</div>\r\n                  </td>\r\n                  <td class=\"w160\">\r\n                    <div>&nbsp;</div>\r\n                  </td>\r\n                  <td class=\"w160\">\r\n                    <div>&nbsp;</div>\r\n                  </td>\r\n                  <ng-container\r\n                    *ngIf=\"active_tab == 'Sale' || active_tab == 'secondary_projection' || active_tab == 'stock'\">\r\n\r\n                    <td class=\"w100 text-right\">\r\n                      <div>&nbsp;</div>\r\n                    </td>\r\n                    <td class=\"w140 text-right\">\r\n                      <div>&nbsp;</div>\r\n                    </td>\r\n                  </ng-container>\r\n                  <ng-container *ngIf=\"active_tab == 'secondary'\">\r\n                    <td class=\"w180 padding0\">\r\n                      <table class=\"in-table\">\r\n                        <tr>\r\n                          <td class=\"text-center\">\r\n                            <div>&nbsp;</div>\r\n                          </td>\r\n                          <td class=\"text-center\" *ngIf=\"sub_active_tab == 'Approved'\">\r\n                            <div>&nbsp;</div>\r\n                          </td>\r\n                        </tr>\r\n                      </table>\r\n                    </td>\r\n                    <td class=\"w180 padding0\">\r\n                      <table class=\"in-table\">\r\n                        <tr>\r\n                          <td class=\"text-center\">\r\n                            <div>&nbsp;</div>\r\n                          </td>\r\n                          <td class=\"text-center\" *ngIf=\"sub_active_tab == 'Approved'\">\r\n                            <div>&nbsp;</div>\r\n                          </td>\r\n                        </tr>\r\n                      </table>\r\n                    </td>\r\n                    <td class=\"w180 padding0\">\r\n                      <table class=\"in-table\">\r\n                        <tr>\r\n                          <td class=\"text-center\">\r\n                            <div>&nbsp;</div>\r\n                          </td>\r\n                          <td class=\"text-center\" *ngIf=\"sub_active_tab == 'Approved'\">\r\n                            <div>&nbsp;</div>\r\n                          </td>\r\n                        </tr>\r\n                      </table>\r\n                    </td>\r\n                    <td class=\"w180 padding0\">\r\n                      <table class=\"in-table\">\r\n                        <tr>\r\n                          <td class=\"text-center\">\r\n                            <div>&nbsp;</div>\r\n                          </td>\r\n                          <td class=\"text-center\" *ngIf=\"sub_active_tab == 'Approved'\">\r\n                            <div>&nbsp;</div>\r\n                          </td>\r\n                        </tr>\r\n                      </table>\r\n                    </td>\r\n                    <td class=\"w180 padding0\">\r\n                      <table class=\"in-table\">\r\n                        <tr>\r\n                          <td class=\"text-center\">\r\n                            <div>&nbsp;</div>\r\n                          </td>\r\n                          <td class=\"text-center\" *ngIf=\"sub_active_tab == 'Approved'\">\r\n                            <div>&nbsp;</div>\r\n                          </td>\r\n                        </tr>\r\n                      </table>\r\n                    </td>\r\n\r\n                    <td class=\"w180 padding0\">\r\n                      <table class=\"in-table\">\r\n                        <tr>\r\n                          <td class=\"text-center\">\r\n                            <div>&nbsp;</div>\r\n                          </td>\r\n                          <td class=\"text-center\" *ngIf=\"sub_active_tab == 'Approved'\">\r\n                            <div>&nbsp;</div>\r\n                          </td>\r\n                        </tr>\r\n                      </table>\r\n                    </td>\r\n                  </ng-container>\r\n\r\n                  <ng-container\r\n                    *ngIf=\"sub_active_tab == 'Pending' && (active_tab == 'secondary' || active_tab == 'stock')\">\r\n                    <td class=\"w60 text-center\">\r\n                      <div>&nbsp;</div>\r\n                    </td>\r\n                  </ng-container>\r\n                </tr>\r\n              </ng-container>\r\n            </table>\r\n          </div>\r\n        </div>\r\n\r\n      </div>\r\n      <ng-container *ngIf=\"target_list.length == 0 && datanotfound == true\">\r\n        <app-not-result-found></app-not-result-found>\r\n      </ng-container>\r\n    </ng-container>\r\n\r\n\r\n    <ng-container *ngIf=\"targetType == 'Employee'\">\r\n      <div class=\"padding10\">\r\n        <div class=\"scroll-tables\">\r\n            <table>\r\n              <tr>\r\n                <td class=\"w660\">\r\n                  <table>\r\n                    <tr>\r\n              \r\n                      <th class=\"w120\">Employee Code</th>\r\n                      <th class=\"w180\">Employee Name</th>\r\n                      <th class=\"w180\">Base Station</th>\r\n                      <th class=\"w180\">Working State</th>\r\n                      </tr>\r\n                      <tr>\r\n               \r\n                        <th class=\"w120\">\r\n                          <div class=\"th-search-acmt\">\r\n                            <mat-form-field class=\"example-full-width cs-input select-input\">\r\n                              <input matInput placeholder=\"Search...\" (keyup.enter)=\"get_user_data()\" #employee_id=\"ngModel\"\r\n                                [(ngModel)]=\"value.employee_id\">\r\n                            </mat-form-field>\r\n                          </div>\r\n                        </th>\r\n        \r\n                        <th class=\"w180\">\r\n                          <div class=\"th-search-acmt\">\r\n                            <mat-form-field class=\"example-full-width cs-input select-input\">\r\n                              <input matInput placeholder=\"Search...\" (keyup.enter)=\"get_user_data()\" #name=\"ngModel\"\r\n                                [(ngModel)]=\"value.name\">\r\n        \r\n                            </mat-form-field>\r\n                          </div>\r\n                        </th>\r\n                       \r\n                       \r\n                        <th class=\"w180\">\r\n                          <div class=\"th-search-acmt\">\r\n                            <mat-form-field class=\"example-full-width cs-input select-input\">\r\n                              <input matInput placeholder=\"Search...\" (keyup.enter)=\"get_user_data()\" #baseStation=\"ngModel\"\r\n                                [(ngModel)]=\"value.baseStation\">\r\n        \r\n                            </mat-form-field>\r\n                          </div>\r\n                        </th>\r\n                        <th class=\"w180\">\r\n                          <div class=\"th-search-acmt\">\r\n                            <mat-form-field class=\"example-full-width cs-input select-input\">\r\n                              <input matInput placeholder=\"Search...\" (keyup.enter)=\"get_user_data()\"\r\n                                #working_state_name=\"ngModel\" [(ngModel)]=\"value.working_state_name\">\r\n        \r\n                            </mat-form-field>\r\n                          </div>\r\n                        </th>\r\n                        </tr>\r\n                        <ng-container *ngIf=\"!loader\">\r\n                          <tr *ngFor=\"let row of target_list;let i=index \" [ngClass]=\"{'inactive-user-row': row.user_status == 0 || row.user_status == '0'}\">\r\n\r\n                            <td class=\"w120\">{{row.employee_id ? row.employee_id:'--' }}</td>\r\n                            <td class=\"w180\">{{row.user_name ? (row.user_name | titlecase) : '---'}}</td>\r\n                           \r\n                            \r\n                            <td class=\"w180\">{{row.baseStation ? (row.baseStation | titlecase) : '---'}}</td>\r\n                            <td class=\"w180\" style=\"max-width: 110px; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;\"\r\n                            [matTooltip]=\"row.working_state_name \">{{row.working_state_name ? (row.working_state_name | titlecase) : '---'}}</td>\r\n                            </tr>\r\n                            </ng-container>\r\n                            <ng-container *ngIf=\"loader\">\r\n                              <tr class=\"sk-loading\" *ngFor=\"let row of [].constructor(10)\">\r\n              \r\n                               \r\n                                \r\n                                <td class=\"w120\">\r\n                                  <div>&nbsp;</div>\r\n                                </td>\r\n                                <td class=\"w180\">\r\n                                  <div>&nbsp;</div>\r\n                                </td>\r\n                                <td class=\"w180\">\r\n                                  <div>&nbsp;</div>\r\n                                </td>\r\n                                <td class=\"w180\">\r\n                                  <div>&nbsp;</div>\r\n                                </td>\r\n                                </tr>\r\n                                </ng-container>\r\n\r\n                  </table>\r\n\r\n                </td>\r\n                <td style=\"overflow-x: auto;overflow-y: hidden;\">\r\n                  <table>\r\n                    <tr>\r\n              \r\n                     \r\n                      <th class=\"w200\">Duration</th>\r\n                      <th class=\"w270 text-center\" colspan=\"2\">Primary</th>\r\n                      <th class=\"w270 text-center\" colspan=\"2\">Secondary</th>\r\n                      <th class=\"w270 text-center\" colspan=\"2\">Stock</th>\r\n                      <th class=\"w100 text-center\">Action</th>\r\n                    </tr>\r\n                    <tr>\r\n               \r\n                      <th class=\"w200\" style=\"padding: 11px;\">&nbsp;</th>\r\n                     \r\n                            <th class=\"w135 text-center\">Target</th>\r\n                          \r\n                            <th class=\"w135 text-center \">Achievement</th>\r\n                         \r\n                      \r\n                            <th class=\"w135 text-center\">Target</th>\r\n                          \r\n                            <th class=\"w135 text-center \">Achievement</th>\r\n                          \r\n                            <th class=\"w135 text-center\">Target</th>\r\n                          \r\n                            <th class=\"w135 text-center \">Achievement</th>\r\n                      <th class=\"w100\">&nbsp;</th>\r\n                    </tr>\r\n                    <ng-container *ngIf=\"!loader\">\r\n                      <tr *ngFor=\"let row of target_list;let i=index \" [ngClass]=\"{'inactive-user-row': row.user_status == 0 || row.user_status == '0'}\">\r\n\r\n                        <td class=\"w200\">\r\n                          {{row.date_from ? (row.date_from | date : 'MMM yyyy') : ''}} to {{row.date_to ? (row.date_to | date\r\n                          : 'MMM yyyy') : ''}}\r\n                        </td>\r\n                       \r\n                              <td class=\"w135 text-center\">\r\n                                {{row.primary_target ? row.primary_target: '0'}}\r\n                              </td>\r\n                            \r\n                              <td class=\"w135 text-center\">\r\n                                {{row.projection_achv.primary_achv ? row.projection_achv.primary_achv: '0'}}\r\n                              </td>\r\n                            \r\n                       \r\n                              <td class=\"w135 text-center\">\r\n                                {{row.secondary_target ? row.secondary_target: '0'}}\r\n                              </td>\r\n                             \r\n      \r\n                            \r\n                              <td class=\"w135 text-center\">\r\n                                <a class=\"link-btn flat\" (click)=\"IncentiveDetail(row.id)\"\r\n                                  style=\"text-decoration: none; color: inherit;\">\r\n                                  <strong class=\"link-clr\">{{row.projection_achv.secondary_achv}}</strong>\r\n                                </a>\r\n                              </td>\r\n                            \r\n                        \r\n                              <td class=\"w135 text-center\">\r\n                                {{row.stock_target ? row.stock_target: '0'}}\r\n                              </td>\r\n                            \r\n                              <td class=\"w135 text-center\">\r\n                                {{row.projection_achv.stock_achv ? row.projection_achv.stock_achv: '0'}}\r\n                              </td>\r\n                            \r\n                        <td class=\"w100\">\r\n                         \r\n                          <div class=\"action-button text-right\">\r\n                            <a mat-icon-button matTooltip=\"Change Status\" (click)=\"changeStatus(row.id,row.primary_target,row.secondary_target,row.stock_target)\">\r\n                              <i class=\"material-icons edit\">edit</i>\r\n                            </a>\r\n                          </div>\r\n                        </td>\r\n                      </tr>\r\n                    </ng-container>\r\n                    <ng-container *ngIf=\"loader\">\r\n                      <tr class=\"sk-loading\" *ngFor=\"let row of [].constructor(10)\">\r\n      \r\n   \r\n                        <td class=\"w200\">\r\n                          <div>&nbsp;</div>\r\n                        </td>\r\n                        <td class=\"w270 padding0\">\r\n                          <table class=\"in-table\">\r\n                            <tr>\r\n                              <td class=\"text-center\">\r\n                                <div>&nbsp;</div>\r\n                              </td>\r\n                              <td class=\"text-center\">\r\n                                <div>&nbsp;</div>\r\n                              </td>\r\n                              <td class=\"text-center\">\r\n                                <div>&nbsp;</div>\r\n                              </td>\r\n                            </tr>\r\n                          </table>\r\n                        </td>\r\n                        <td class=\"w270 padding0\">\r\n                          <table class=\"in-table\">\r\n                            <tr>\r\n                              <td class=\"text-center\">\r\n                                <div>&nbsp;</div>\r\n                              </td>\r\n                              <td class=\"text-center\">\r\n                                <div>&nbsp;</div>\r\n                              </td>\r\n                              <td class=\"text-center\">\r\n                                <div>&nbsp;</div>\r\n                              </td>\r\n                            </tr>\r\n                          </table>\r\n                        </td>\r\n                        <td class=\"w270 padding0\">\r\n                          <table class=\"in-table\">\r\n                            <tr>\r\n                              <td class=\"text-center\">\r\n                                <div>&nbsp;</div>\r\n                              </td>\r\n                              <td class=\"text-center\">\r\n                                <div>&nbsp;</div>\r\n                              </td>\r\n                              <td class=\"text-center\">\r\n                                <div>&nbsp;</div>\r\n                              </td>\r\n                            </tr>\r\n                          </table>\r\n                        </td>\r\n                      </tr>\r\n                    </ng-container>\r\n\r\n                  </table>\r\n                </td>\r\n              </tr>\r\n              </table>\r\n              </div>\r\n              </div>\r\n      \r\n      <ng-container *ngIf=\"target_list.length == 0 && datanotfound == true\">\r\n        <app-not-result-found></app-not-result-found>\r\n      </ng-container>\r\n    </ng-container>\r\n\r\n    <ng-container *ngIf=\"targetType == 'Employee_Projection'\">\r\n      <div class=\"cs-table horizontal-scroll left-right-10\">\r\n        <div class=\"table-head \">\r\n          <div class=\"scroll-tables\">\r\n            <table>\r\n              <tr>\r\n                <td class=\"w250\">\r\n                  <table>\r\n                    <tr class=\"sticky\">\r\n                      <th class=\" w45 text-center\">Sr.No</th>\r\n                      <th >Employee Name</th>\r\n\r\n                    </tr>\r\n                    <tr>\r\n                      <th class=\" w45text-center\">&nbsp;</th>\r\n                      <th >\r\n                        <div class=\"th-search-acmt\">\r\n                          <mat-form-field class=\"example-full-width cs-input select-input\">\r\n                            <input matInput placeholder=\"Search...\" (keyup.enter)=\"get_user_data()\" #name=\"ngModel\"\r\n                              [(ngModel)]=\"value.name\">\r\n\r\n                          </mat-form-field>\r\n                        </div>\r\n                      </th>\r\n                    </tr>\r\n                    <ng-container *ngIf=\"!loader\">\r\n                      <tr *ngFor=\"let row of target_list; let i = index\">\r\n                        <td class=\"w45 text-center\">{{i + 1 + sr_no}}</td>\r\n                        <td style=\"padding:9px\" class=\"one-line\" matTooltip=\"{{row.user_name}}\">{{row.user_name ? (row.user_name | titlecase) : '---'}}</td>\r\n                      </tr>\r\n                    </ng-container>\r\n\r\n                    <ng-container *ngIf=\"loader\">\r\n                      <tr class=\"sk-loading\" *ngFor=\"let row of [].constructor(10); let i = index\">\r\n                        <td class=\"w45\">\r\n                          <div>&nbsp;</div>\r\n                        </td>\r\n                        <td class=\"w180\">\r\n                          <div>&nbsp;</div>\r\n                        </td>\r\n                      </tr>\r\n                    </ng-container>\r\n\r\n                  </table>\r\n                </td>\r\n\r\n                <td style=\"overflow-x: auto; overflow-y: hidden;\">\r\n                  <table>\r\n                    <tr>\r\n                      <th class=\"w120\">Employee Code</th>\r\n                      <th class=\"w180\">State</th>\r\n                      <th class=\"w150\">Month</th>\r\n                      <th class=\"w150\">Year</th>\r\n                      <th class=\"w270 text-center\">Primary</th>\r\n                      <th class=\"w270 text-center\">Secondary</th>\r\n                      <th class=\"w270 text-center\">Stock</th>\r\n                      <!-- <th class=\"w100 text-center\">Action</th> -->\r\n                    </tr>\r\n                    <tr>\r\n\r\n                      <th class=\"w120\">\r\n                        <div class=\"th-search-acmt\">\r\n                          <mat-form-field class=\"example-full-width cs-input select-input\">\r\n                            <input matInput placeholder=\"Search...\" (keyup.enter)=\"get_user_data()\" #employee_id=\"ngModel\"\r\n                              [(ngModel)]=\"value.employee_id\">\r\n                          </mat-form-field>\r\n                        </div>\r\n                      </th>\r\n                      <th class=\"w180\"> <div class=\"th-search-acmt\">\r\n                          <mat-form-field class=\"example-full-width cs-input select-input\">\r\n                            <input matInput placeholder=\"Search...\" (keyup.enter)=\"get_user_data()\" #state=\"ngModel\"\r\n                              [(ngModel)]=\"value.state\">\r\n\r\n                          </mat-form-field>\r\n                        </div></th>\r\n                        <th class=\"w150\">\r\n                          <div class=\"th-search-acmt\">\r\n                            <mat-form-field class=\"cs-input select-input\">\r\n                              <mat-label>Select Month</mat-label>\r\n                              <mat-select name=\"month\" [(ngModel)]=\"value.month\" (selectionChange)=\"get_user_data()\">\r\n                                <mat-option value=\"01\">January</mat-option>\r\n                                <mat-option value=\"02\">February</mat-option>\r\n                                <mat-option value=\"03\">March</mat-option>\r\n                                <mat-option value=\"04\">April</mat-option>\r\n                                <mat-option value=\"05\">May</mat-option>\r\n                                <mat-option value=\"06\">June</mat-option>\r\n                                <mat-option value=\"07\">July</mat-option>\r\n                                <mat-option value=\"08\">August</mat-option>\r\n                                <mat-option value=\"09\">September</mat-option>\r\n                                <mat-option value=\"10\">October</mat-option>\r\n                                <mat-option value=\"11\">November</mat-option>\r\n                                <mat-option value=\"12\">December</mat-option>\r\n                              </mat-select>\r\n                            </mat-form-field>\r\n                          </div>\r\n                        </th>\r\n\r\n                      <th class=\"w150\">  <div class=\"th-search-acmt\">\r\n                          <mat-form-field class=\"example-full-width cs-input select-input\">\r\n                            <input matInput placeholder=\"Search...\" (keyup.enter)=\"get_user_data()\" #year=\"ngModel\"\r\n                              [(ngModel)]=\"value.year\">\r\n                          </mat-form-field>\r\n                        </div></th>\r\n                      <th class=\"w270 padding0 in-table\">\r\n                        <table>\r\n                          <tr>\r\n                            <th class=\"text-center border-top\">Projection</th>\r\n                            <th class=\"text-center border-top\">Achievement</th>\r\n                          </tr>\r\n                        </table>\r\n                      </th>\r\n                      <th class=\"w270 padding0 in-table\">\r\n                        <table>\r\n                          <tr>\r\n                            <th class=\"text-center border-top\">Projection</th>\r\n                            <th class=\"text-center border-top\">Achievement</th>\r\n                          </tr>\r\n                        </table>\r\n                      </th>\r\n                      <th class=\"w270 padding0 in-table\">\r\n                        <table>\r\n                          <tr>\r\n                            <th class=\"text-center border-top\">Projection</th>\r\n                            <th class=\"text-center border-top\">Achievement</th>\r\n                          </tr>\r\n                        </table>\r\n                      </th>\r\n                      <!-- <th class=\"w100\">&nbsp;</th> -->\r\n                    </tr>\r\n\r\n                    <ng-container *ngIf=\"!loader\">\r\n                      <tr *ngFor=\"let row of target_list;let i=index \">\r\n                        <td class=\"w120\" style=\"padding:9px\">{{row.user_code ? row.user_code:'--' }}</td>\r\n                        <td class=\"w180\" style=\"padding:9px\">{{row.state_name ? (row.state_name | titlecase) : '---'}}</td>\r\n                        <td class=\"w150\" style=\"padding:9px\">\r\n                          {{row.month_name}}\r\n                        </td>\r\n                        <td class=\"w150\" style=\"padding:9px\">\r\n                          {{row.year}}\r\n                        </td>\r\n                        <td class=\"w270 padding0\">\r\n                          <table class=\"in-table\">\r\n                            <tr>\r\n                              <td class=\"text-center\">\r\n                               {{row.pri_projection ? row.pri_projection: '0'}}\r\n                              </td>\r\n                              <td class=\"text-center\">\r\n                                {{row.pri_achievement ? row.pri_achievement: '0'}}\r\n                              </td>\r\n                            </tr>\r\n                          </table>\r\n                        </td>\r\n                        <td class=\"w270 padding0\">\r\n                          <table class=\"in-table\">\r\n                            <tr>\r\n                              <td class=\"text-center\">\r\n                             {{row.sec_projection ? row.sec_projection: '0'}}\r\n                              </td>\r\n                              <td class=\"text-center\">\r\n                             {{row.sec_projection ? row.sec_achievement: '0'}}\r\n                              </td>\r\n\r\n                            </tr>\r\n                          </table>\r\n                        </td>\r\n                        <td class=\"w270 padding0\">\r\n                          <table class=\"in-table\">\r\n                            <tr>\r\n                              <td class=\"text-center\">\r\n                               {{row.stock_projection ? row.stock_projection: '0'}}\r\n                              </td>\r\n                              <td class=\"text-center\">\r\n                               {{row.stock_achievement ? row.stock_achievement: '0'}}\r\n                              </td>\r\n                            </tr>\r\n                          </table>\r\n                        </td>\r\n                        <!-- <td class=\"w100\">\r\n                          <button mat-icon-button matTooltip=\"Change Status\"\r\n                          (click)=\"changeProjectioinStatus(row)\">\r\n                          <i class=\"material-icons edit\">save</i>\r\n                        </button>\r\n                        </td> -->\r\n                      </tr>\r\n                    </ng-container>\r\n\r\n                    <ng-container *ngIf=\"loader\">\r\n                      <tr class=\"sk-loading\" *ngFor=\"let row of [].constructor(10)\">\r\n                        <td class=\"w50\"\r\n                          *ngIf=\"(sub_active_tab == 'Pending' && (active_tab == 'secondary' || active_tab == 'stock'))\">\r\n                          <div>&nbsp;</div>\r\n                        </td>\r\n                        <td class=\"w45 text-center\">\r\n                          <div>&nbsp;</div>\r\n                        </td>\r\n                        <td class=\"w180\">\r\n                          <div>&nbsp;</div>\r\n                        </td>\r\n                        <td class=\"w120\">\r\n                          <div>&nbsp;</div>\r\n                        </td>\r\n                        <td class=\"w180\">\r\n                          <div>&nbsp;</div>\r\n                        </td>\r\n                        <td class=\"w200\">\r\n                          <div>&nbsp;</div>\r\n                        </td>\r\n                        <td class=\"w270 padding0\">\r\n                          <table class=\"in-table\">\r\n                            <tr>\r\n                              <td class=\"text-center\">\r\n                                <div>&nbsp;</div>\r\n                              </td>\r\n                              <td class=\"text-center\">\r\n                                <div>&nbsp;</div>\r\n                              </td>\r\n                              <td class=\"text-center\">\r\n                                <div>&nbsp;</div>\r\n                              </td>\r\n                            </tr>\r\n                          </table>\r\n                        </td>\r\n                        <td class=\"w270 padding0\">\r\n                          <table class=\"in-table\">\r\n                            <tr>\r\n                              <td class=\"text-center\">\r\n                                <div>&nbsp;</div>\r\n                              </td>\r\n                              <td class=\"text-center\">\r\n                                <div>&nbsp;</div>\r\n                              </td>\r\n                              <td class=\"text-center\">\r\n                                <div>&nbsp;</div>\r\n                              </td>\r\n                            </tr>\r\n                          </table>\r\n                        </td>\r\n                        <td class=\"w270 padding0\">\r\n                          <table class=\"in-table\">\r\n                            <tr>\r\n                              <td class=\"text-center\">\r\n                                <div>&nbsp;</div>\r\n                              </td>\r\n                              <td class=\"text-center\">\r\n                                <div>&nbsp;</div>\r\n                              </td>\r\n                              <td class=\"text-center\">\r\n                                <div>&nbsp;</div>\r\n                              </td>\r\n                            </tr>\r\n                          </table>\r\n                        </td>\r\n                      </tr>\r\n                    </ng-container>\r\n\r\n\r\n\r\n                  </table>\r\n                </td>\r\n              </tr>\r\n            </table>\r\n            \r\n\r\n          </div>\r\n          <ng-container *ngIf=\"target_list.length == 0 && datanotfound == true\">\r\n            <app-not-result-found></app-not-result-found>\r\n          </ng-container>\r\n        </div>\r\n      </div>\r\n    </ng-container>\r\n\r\n    <ng-container *ngIf=\"targetType == 'EmployeeQuartelyTarget'\">\r\n      <div class=\"cs-table horizontal-scroll mb70\">\r\n        <div class=\"sticky-head border-top\">\r\n          <div class=\"table-head\">\r\n            <table>\r\n              <tr>\r\n                <th class=\"w50 text-center\"\r\n                  *ngIf=\"(sub_active_tab == 'Pending' && (active_tab == 'secondary' || active_tab == 'stock'))  && target_list.length > 0\">\r\n                  <mat-checkbox (change)=\"selectAll($event)\" name=\"allID\" [(ngModel)]=\"checked.allID\"></mat-checkbox>\r\n                </th>\r\n                <th class=\"w45 text-center\">Sr.No</th>\r\n                <th class=\"w180\">Employee Name</th>\r\n                <th class=\"w120\">Employee Code</th>\r\n                \r\n                <th class=\"w200\">Duration</th>\r\n                <th class=\"w150\">Working State</th>\r\n                <th class=\"w270 text-center\">Primary</th>\r\n                <th class=\"w270 text-center\">Secondary</th>\r\n                <th class=\"w270 text-center\">Stock</th>\r\n               \r\n              </tr>\r\n            </table>\r\n          </div>\r\n          <div class=\"table-head border-top\">\r\n            <table>\r\n              <tr>\r\n                <th class=\"w50 text-center\"\r\n                  *ngIf=\"(sub_active_tab == 'Pending' && (active_tab == 'secondary' || active_tab == 'stock') )  && target_list.length > 0\">\r\n                </th>\r\n                <th class=\"w45 text-center\"></th>\r\n\r\n                <th class=\"w180\">\r\n                  <div class=\"th-search-acmt\">\r\n                    <mat-form-field class=\"example-full-width cs-input select-input\">\r\n                      <input matInput placeholder=\"Search...\" (keyup.enter)=\"get_user_data()\" #name=\"ngModel\"\r\n                        [(ngModel)]=\"value.name\">\r\n\r\n                    </mat-form-field>\r\n                  </div>\r\n                </th>\r\n                <th class=\"w120\">\r\n                  <div class=\"th-search-acmt\">\r\n                    <mat-form-field class=\"example-full-width cs-input select-input\">\r\n                      <input matInput placeholder=\"Search...\" (keyup.enter)=\"get_user_data()\" #employee_id=\"ngModel\"\r\n                        [(ngModel)]=\"value.employee_id\">\r\n                    </mat-form-field>\r\n                  </div>\r\n                </th>\r\n                \r\n                \r\n                \r\n                <th class=\"w200\">&nbsp;</th>\r\n                <th class=\"w150\"> <div class=\"th-search-acmt\">\r\n                  <mat-form-field class=\"example-full-width cs-input select-input\">\r\n                    <input matInput placeholder=\"Search...\" (keyup.enter)=\"get_user_data()\" #working_state=\"ngModel\"\r\n                      [(ngModel)]=\"value.working_state\">\r\n\r\n                  </mat-form-field>\r\n                </div></th>\r\n                <th class=\"w270 padding0 in-table\">\r\n                  <table>\r\n                    <tr>\r\n                      <th class=\"text-center border-top\">Target</th>\r\n                      <!-- <th class=\"text-center border-top\">Projections</th> -->\r\n                      <th class=\"text-center border-top\">Achievement</th>\r\n                    </tr>\r\n                  </table>\r\n                </th>\r\n                <th class=\"w270 padding0 in-table\">\r\n                  <table>\r\n                    <tr>\r\n                      <th class=\"text-center border-top\">Target</th>\r\n                      <!-- <th class=\"text-center border-top\">Projections</th> -->\r\n                      <th class=\"text-center border-top\">Achievement</th>\r\n                    </tr>\r\n                  </table>\r\n                </th>\r\n                <th class=\"w270 padding0 in-table\">\r\n                  <table>\r\n                    <tr>\r\n                      <th class=\"text-center border-top\">Target</th>\r\n                      <!-- <th class=\"text-center border-top\">Projections</th> -->\r\n                      <th class=\"text-center border-top\">Achievement</th>\r\n                    </tr>\r\n                  </table>\r\n                </th>\r\n               \r\n              </tr>\r\n            </table>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"table-container\">\r\n          <div class=\"table-content\">\r\n            <table>\r\n\r\n              <ng-container *ngIf=\"!loader\">\r\n                <tr *ngFor=\"let row of target_list;let i=index \">\r\n                  <td class=\"w50 text-center\"\r\n                    *ngIf=\"(sub_active_tab == 'Pending' && (active_tab == 'secondary' || active_tab == 'stock'))\">\r\n                    <mat-checkbox name=\"checked\" [(ngModel)]=\"row.checked\"\r\n                      (change)=\"selectIds($event,i)\"></mat-checkbox>\r\n                  </td>\r\n                  <td class=\"w45 text-center\">{{i + 1 + sr_no}}</td>\r\n                  <td class=\"w180\">{{row.empName ? (row.empName | titlecase) : '---'}}</td>\r\n                  <td class=\"w120\">{{row.empCode ? row.empCode:'--' }}</td>\r\n                  \r\n                  <td class=\"w200\">\r\n                    {{filter.date_from ? (filter.date_from | date : 'MMM yyyy') : ''}} to {{filter.date_to ? (filter.date_to | date\r\n                      : 'MMM yyyy') : ''}}\r\n                  </td>\r\n                  <td class=\"w150\">{{row.working_state}}</td>\r\n                  <td class=\"w270 padding0\">\r\n                    <table class=\"in-table\">\r\n                      <tr>\r\n                        <td class=\"text-center\">\r\n                          {{row.primaryTarget ? row.primaryTarget: '0'}}\r\n                        </td>\r\n                        <!-- <td class=\"text-center\">\r\n                          {{row.projection_achv.primary_projection ? row.projection_achv.primary_projection:\r\n                          '0'}}\r\n                        </td> -->\r\n                        <td class=\"text-center\">\r\n                          {{row.primaryAchievements ? row.primaryAchievements: '0'}}\r\n                        </td>\r\n                      </tr>\r\n                    </table>\r\n                  </td>\r\n                  <td class=\"w270 padding0\">\r\n                    <table class=\"in-table\">\r\n                      <tr>\r\n                        <td class=\"text-center\">\r\n                          {{row.secondaryTarget ? row.secondaryTarget: '0'}}\r\n                        </td>\r\n                        <!-- <td class=\"text-center\">\r\n                          {{row.projection_achv.secondary_projection ? row.projection_achv.secondary_projection:\r\n                          '0'}}\r\n                        </td> -->\r\n\r\n                        <!-- <td class=\"text-center\">\r\n                          {{row.projection_achv.secondary_achv ? row.projection_achv.secondary_achv: '0'}}\r\n                        </td> -->\r\n                        <td class=\"text-center\">\r\n                          \r\n                           {{row.secondaryAchievements}}\r\n                          \r\n                        </td>\r\n                      </tr>\r\n                    </table>\r\n                  </td>\r\n                  <td class=\"w270 padding0\">\r\n                    <table class=\"in-table\">\r\n                      <tr>\r\n                        <td class=\"text-center\">\r\n                          {{row.stockTarget ? row.stockTarget: '0'}}\r\n                        </td>\r\n                        <!-- <td class=\"text-center\">\r\n                          {{row.projection_achv.stock_projection ? row.projection_achv.stock_projection: '0'}}\r\n                        </td> -->\r\n                        <td class=\"text-center\">\r\n                          {{row.stockAchievements ? row.stockAchievements: '0'}}\r\n                        </td>\r\n                      </tr>\r\n                    </table>\r\n                  </td>\r\n                \r\n                </tr>\r\n              </ng-container>\r\n\r\n              <ng-container *ngIf=\"loader\">\r\n                <tr class=\"sk-loading\" *ngFor=\"let row of [].constructor(10)\">\r\n\r\n                  <td class=\"w50\"\r\n                    *ngIf=\"(sub_active_tab == 'Pending' && (active_tab == 'secondary' || active_tab == 'stock'))\">\r\n                    <div>&nbsp;</div>\r\n                  </td>\r\n                  <td class=\"w45 text-center\">\r\n                    <div>&nbsp;</div>\r\n                  </td>\r\n                  <td class=\"w180\">\r\n                    <div>&nbsp;</div>\r\n                  </td>\r\n                  <td class=\"w120\">\r\n                    <div>&nbsp;</div>\r\n                  </td>\r\n                  <td class=\"w180\">\r\n                    <div>&nbsp;</div>\r\n                  </td>\r\n                  <td class=\"w200\">\r\n                    <div>&nbsp;</div>\r\n                  </td>\r\n                  <td class=\"w270 padding0\">\r\n                    <table class=\"in-table\">\r\n                      <tr>\r\n                        <td class=\"text-center\">\r\n                          <div>&nbsp;</div>\r\n                        </td>\r\n                        <td class=\"text-center\">\r\n                          <div>&nbsp;</div>\r\n                        </td>\r\n                        <td class=\"text-center\">\r\n                          <div>&nbsp;</div>\r\n                        </td>\r\n                      </tr>\r\n                    </table>\r\n                  </td>\r\n                  <td class=\"w270 padding0\">\r\n                    <table class=\"in-table\">\r\n                      <tr>\r\n                        <td class=\"text-center\">\r\n                          <div>&nbsp;</div>\r\n                        </td>\r\n                        <td class=\"text-center\">\r\n                          <div>&nbsp;</div>\r\n                        </td>\r\n                        <td class=\"text-center\">\r\n                          <div>&nbsp;</div>\r\n                        </td>\r\n                      </tr>\r\n                    </table>\r\n                  </td>\r\n                  <td class=\"w270 padding0\">\r\n                    <table class=\"in-table\">\r\n                      <tr>\r\n                        <td class=\"text-center\">\r\n                          <div>&nbsp;</div>\r\n                        </td>\r\n                        <td class=\"text-center\">\r\n                          <div>&nbsp;</div>\r\n                        </td>\r\n                        <td class=\"text-center\">\r\n                          <div>&nbsp;</div>\r\n                        </td>\r\n                      </tr>\r\n                    </table>\r\n                  </td>\r\n                </tr>\r\n              </ng-container>\r\n            </table>\r\n          </div>\r\n        </div>\r\n\r\n      </div>\r\n      <ng-container *ngIf=\"target_list.length == 0 && datanotfound == true\">\r\n        <app-not-result-found></app-not-result-found>\r\n      </ng-container>\r\n    </ng-container>\r\n  </div>\r\n  <div class=\"fab-btns\">\r\n    <!-- <button mat-fab color=\"accent\" (click)=\"updateProjectionStatus()\">\r\n  <i class=\"material-icons\">update</i>\r\n  Update\r\n</button> -->\r\n    <button class=\"pulse excel\"\r\n      *ngIf=\"assign_login_data2.export_employee_target=='1' || assign_login_data2.import_employee_target=='1'\" mat-fab\r\n      color=\"primary\" [ngClass]=\"{'pulse': fabBtnValue=='add'}\" [matMenuTriggerFor]=\"menu\">\r\n      <i class=\"material-icons\">apps</i>\r\n      Action\r\n    </button>\r\n    <mat-menu #menu=\"matMenu\">\r\n\r\n      <!-- <ng-container *ngIf=\"targetType == 'Secondary Visit Projections'\">\r\n        <button mat-menu-item (click)=\"uploadData('visit add');\"\r\n          *ngIf=\"active_tab == 'secondary' && assign_login_data2.import_employee_target=='1'\">\r\n          <mat-icon>cloud_upload</mat-icon>\r\n          <span>Upload New Data</span>\r\n        </button>\r\n      </ng-container> -->\r\n\r\n      <ng-container *ngIf=\"targetType == 'Employee'\">\r\n        <button mat-menu-item (click)=\"uploadData('employee_target');\"\r\n          *ngIf=\" assign_login_data2.import_employee_target=='1'\">\r\n          <mat-icon>cloud_upload</mat-icon>\r\n          <span>Upload New Data</span>\r\n        </button>\r\n\r\n        <button mat-menu-item (click)=\"EmployeexportAsXLSX();\">\r\n          <mat-icon>download</mat-icon>\r\n          <span>Download in excel</span>\r\n        </button>\r\n\r\n        <button mat-menu-item (click)=\"achievementBifurcationExportAsXLSX();\">\r\n          <mat-icon>bar_chart</mat-icon>\r\n          <span>Download Achievement Bifurcation</span>\r\n        </button>\r\n      </ng-container>\r\n      <ng-container *ngIf=\"targetType == 'Employee_Projection'\">\r\n\r\n        <!-- <button mat-menu-item (click)=\"uploadData('employee_target_projection');\"\r\n          *ngIf=\" assign_login_data2.import_employee_target=='1'\">\r\n          <mat-icon>cloud_upload</mat-icon>\r\n          <span>Upload Projection</span>\r\n        </button>\r\n        <button mat-menu-item (click)=\"updateData('employee_target_projection_upload');\"\r\n          *ngIf=\" assign_login_data2.import_employee_target=='1'\">\r\n          <mat-icon>cloud_upload</mat-icon>\r\n          <span>Update Projection</span>\r\n        </button> -->\r\n        <button mat-menu-item (click)=\"downloademployeProjection();\">\r\n          <mat-icon>download</mat-icon>\r\n          <span>Download in excel</span>\r\n        </button>\r\n      </ng-container>\r\n      <ng-container *ngIf=\"targetType == 'EmployeeQuartelyTarget'\">\r\n\r\n        <button mat-menu-item (click)=\"downloadQuarterlyReport();\">\r\n          <mat-icon>download</mat-icon>\r\n          <span>Download in excel</span>\r\n        </button>\r\n        </ng-container>\r\n      <!-- <button mat-menu-item (click)=\"visit_upload_excel('visit update');\"\r\n        *ngIf=\"active_tab == 'secondary' && target_list.length > 0 && assign_login_data2.import_employee_target=='1'\">\r\n        <mat-icon>update</mat-icon>\r\n        <span>Update</span>\r\n      </button> -->\r\n\r\n      <button mat-menu-item (click)=\"upload_excel('secondary sale');\"\r\n        *ngIf=\"active_tab == 'stock' && assign_login_data2.import_employee_target=='1'\">\r\n        <mat-icon>cloud_upload</mat-icon>\r\n        <span>Upload New Data Test 2</span>\r\n      </button>\r\n\r\n      <!-- <button mat-menu-item (click)=\"upload_excel('secondary sale Update');\"\r\n        *ngIf=\"active_tab == 'stock' && target_list.length > 0 && assign_login_data2.import_employee_target=='1'\">\r\n        <mat-icon>update</mat-icon>\r\n        <span>Update</span>\r\n      </button> -->\r\n\r\n\r\n\r\n      <button mat-menu-item\r\n        *ngIf=\"active_tab == 'Sale' && target_list.length > 0 && assign_login_data2.export_employee_target=='1'\"\r\n        (click)=\"exportAsXLSX();\">\r\n        <mat-icon>download</mat-icon>\r\n        <span>Download in excel</span>\r\n      </button>\r\n      <button mat-menu-item\r\n        *ngIf=\"active_tab == 'secondary' && target_list.length > 0 && assign_login_data2.export_employee_target=='1'\"\r\n        (click)=\"exportAsXLSX1();\">\r\n        <mat-icon>download</mat-icon>\r\n        <span>Download in excel</span>\r\n      </button>\r\n      <button mat-menu-item\r\n        *ngIf=\"active_tab == 'stock' && target_list.length > 0 && assign_login_data2.export_employee_target=='1'\"\r\n        (click)=\"exportAsXLSX2();\">\r\n        <mat-icon>download</mat-icon>\r\n        <span>Download in excel</span>\r\n      </button>\r\n    </mat-menu>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/userview-target/userview-target.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/userview-target/userview-target.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "tr:nth-child(even) {\n  background-color: #ffeb99; /* Light Yellow */\n}\n\ntr:nth-child(odd) {\n  background-color: #fff5cc; /* Pale Cream */\n}\n\ntr.inactive-user-row,\ntr.inactive-user-row:nth-child(even),\ntr.inactive-user-row:nth-child(odd) {\n  background-color: #ffcccc !important;\n  color: #b00000;\n}"

/***/ }),

/***/ "./src/app/userview-target/userview-target.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/userview-target/userview-target.component.ts ***!
  \**************************************************************/
/*! exports provided: UserviewTargetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserviewTargetComponent", function() { return UserviewTargetComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_services_DatabaseService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/_services/DatabaseService */ "./src/_services/DatabaseService.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var src_app_upload_file_modal_upload_file_modal_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/upload-file-modal/upload-file-modal.component */ "./src/app/upload-file-modal/upload-file-modal.component.ts");
/* harmony import */ var src_app_localstorage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/localstorage.service */ "./src/app/localstorage.service.ts");
/* harmony import */ var ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng6-toastr-notifications */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/ng6-toastr-notifications/fesm5/ng6-toastr-notifications.js");
/* harmony import */ var _dialog_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../dialog.component */ "./src/app/dialog.component.ts");
/* harmony import */ var _order_status_modal_status_modal_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../order/status-modal/status-modal.component */ "./src/app/order/status-modal/status-modal.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _bottom_sheet_bottom_sheet_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../bottom-sheet/bottom-sheet.component */ "./src/app/bottom-sheet/bottom-sheet.component.ts");
/* harmony import */ var _lead_change_enquiry_status_change_enquiry_status_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../lead/change-enquiry-status/change-enquiry-status.component */ "./src/app/lead/change-enquiry-status/change-enquiry-status.component.ts");
/* harmony import */ var _incentive_view_component_incentive_view_component_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../incentive-view-component/incentive-view-component.component */ "./src/app/incentive-view-component/incentive-view-component.component.ts");













var UserviewTargetComponent = /** @class */ (function () {
    function UserviewTargetComponent(serve, bottomSheet, route, alrt, dialog, session, toast) {
        this.serve = serve;
        this.bottomSheet = bottomSheet;
        this.route = route;
        this.alrt = alrt;
        this.dialog = dialog;
        this.session = session;
        this.toast = toast;
        this.assign_login_data = [];
        this.assign_login_data2 = [];
        this.fabBtnValue = 'excel';
        this.view_edit = true;
        this.view_add = true;
        this.view_delete = true;
        this.value = {};
        this.target_list = [];
        this.active_tab = 'secondary';
        this.sub_active_tab = 'Pending';
        this.loader = false;
        this.datanotfound = false;
        this.sr_no = 0;
        this.pagenumber = 1;
        this.start = 0;
        this.data = {};
        this.filter = {};
        this.exp_data = [];
        this.excel_data = [];
        this.checked = {};
        this.btnFlag = false;
        this.page_limit = serve.pageLimit;
        this.downurl = serve.downloadUrl;
        this.assign_login_data = this.session.getSession();
        this.assign_login_data = this.assign_login_data.value;
        this.assign_login_data2 = this.assign_login_data.data;
        this.assign_login_data = this.assign_login_data.assignModule;
    }
    UserviewTargetComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            console.log(_this.route.queryParams['_value'], "line 58");
            _this.pageType = _this.route.queryParams['_value'];
            if (_this.pageType != '') {
                console.log(_this.pageType, "line 60");
                _this.btnFlag = false;
                _this.checked.allID = false;
                _this.targetType = _this.pageType.pageType ? _this.pageType.pageType.replaceAll('%20', ' ') : '';
                _this.filter.date_from = _this.pageType.date_from;
                _this.filter.date_to = _this.pageType.date_to;
                _this.filter.name = _this.pageType.user_id;
                console.log(_this.filter);
                _this.get_user_data();
            }
        });
    };
    UserviewTargetComponent.prototype.refresh1 = function () {
        this.value = {};
        this.get_user_data();
    };
    UserviewTargetComponent.prototype.lastBtnValue = function (value) {
        this.fabBtnValue = value;
    };
    UserviewTargetComponent.prototype.pervious = function () {
        this.start = this.start - this.page_limit;
        this.get_user_data();
    };
    UserviewTargetComponent.prototype.nextPage = function () {
        this.start = this.start + this.page_limit;
        this.get_user_data();
    };
    UserviewTargetComponent.prototype.get_user_data = function () {
        var _this = this;
        if (this.pagenumber > this.total_page) {
            this.pagenumber = this.total_page;
            this.start = this.pageCount - this.page_limit;
        }
        if (this.start < 0) {
            this.start = 0;
        }
        if (this.targetType == 'Employee') {
            this.active_tab = 'Employee';
            this.sub_active_tab = 'Approved';
        }
        if (this.targetType == 'Employee_Projection') {
            this.active_tab = 'Employee_Projection';
            this.sub_active_tab = 'Approved';
        }
        if (this.targetType == 'EmployeeQuartelyTarget') {
            this.active_tab = 'EmployeeQuartelyTarget';
            this.sub_active_tab = 'Approved';
        }
        if (this.targetType == 'Secondary Visit Projections') {
            this.active_tab = 'secondary';
            this.sub_active_tab = 'Approved';
        }
        if (this.targetType == 'Stock Transfer Projections') {
            this.active_tab = 'stock';
        }
        this.loader = true;
        if (this.active_tab == 'Employee') {
            this.target_list = [];
            // this.active_tab == 'Sale' ? "Target/userTargetList" : "Target/secondaryUserTargetList
            // 'type': this.active_tab == 'secondary_projection' ? 'order' : 'stock'
            this.serve.post_rqst({ 'user_id': this.assign_login_data2.id, 'start': this.start, 'pagelimit': this.page_limit, 'search': this.value, }, "Target/targetList").subscribe((function (result) {
                if (result['statusCode'] == 200) {
                    _this.target_list = result['target_list'];
                    _this.pageCount = result['count'];
                    if (_this.target_list.length == 0) {
                        _this.datanotfound = true;
                    }
                    else {
                        _this.datanotfound = false;
                    }
                    _this.loader = false;
                    // for (let i = 0; i < this.target_list.length; i++) {
                    //   this.target_list[i].achieve = parseFloat(this.target_list[i].achieve)
                    //   this.target_list[i].achieve = this.target_list[i].achieve.toFixed(2)
                    // }
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
                }
                else {
                    _this.toast.errorToastr(result['statusMsg']);
                }
            }));
        }
        else if (this.active_tab == 'Employee_Projection') {
            this.target_list = [];
            this.serve.post_rqst({ 'user_id': this.assign_login_data2.id, 'start': this.start, 'pagelimit': this.page_limit, 'search': this.value, }, "Target/projection_achievement_list").subscribe((function (result) {
                if (result['statusCode'] == 200) {
                    _this.target_list = result['result'];
                    _this.pageCount = result['count'];
                    if (_this.target_list.length == 0) {
                        _this.datanotfound = true;
                    }
                    else {
                        _this.datanotfound = false;
                    }
                    _this.loader = false;
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
                }
                else {
                    _this.toast.errorToastr(result['statusMsg']);
                }
            }));
        }
        else if (this.active_tab == 'EmployeeQuartelyTarget') {
            this.target_list = [];
            this.serve.post_rqst({ 'data': this.filter, 'search': this.value }, "Reports/quarterlyTargetReport").subscribe((function (result) {
                if (result['statusCode'] == 200) {
                    _this.target_list = result['result'];
                    _this.pageCount = result['count'];
                    if (_this.target_list.length == 0) {
                        _this.datanotfound = true;
                    }
                    else {
                        _this.datanotfound = false;
                    }
                    _this.loader = false;
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
                }
                else {
                    _this.toast.errorToastr(result['statusMsg']);
                }
            }));
        }
        // else {
        //   this.serve.post_rqst({ 'user_id': this.assign_login_data2.id, 'start': this.start, 'pagelimit': this.page_limit, 'search': this.value, }, "Target/userTargetList").subscribe((result => {
        //     if (result['statusCode'] == 200) {
        //       this.target_list = result['target_list'];
        //       this.pageCount = result['count'];
        //       if (this.target_list.length == 0) {
        //         this.datanotfound = true
        //       } else {
        //         this.datanotfound = false
        //       }
        //       this.loader = false;
        //       if (this.pagenumber > this.total_page) {
        //         this.pagenumber = this.total_page;
        //         this.start = this.pageCount - this.page_limit;
        //       }
        //       else {
        //         this.pagenumber = Math.ceil(this.start / this.page_limit) + 1;
        //       }
        //       this.total_page = Math.ceil(this.pageCount / this.page_limit);
        //       this.sr_no = this.pagenumber - 1;
        //       this.sr_no = this.sr_no * this.page_limit;
        //     }
        //     else {
        //       this.toast.errorToastr(result['statusMsg']);
        //     }
        //   }));
        // }
        else
            this.serve.post_rqst({ 'user_id': this.assign_login_data2.id, 'start': this.start, 'status': this.sub_active_tab, 'pagelimit': this.page_limit, 'search': this.value }, "Target/visitTargetList").subscribe((function (result) {
                if (result['statusCode'] == 200) {
                    _this.target_list = result['target_list'];
                    _this.pageCount = result['count'];
                    _this.loader = false;
                    if (_this.target_list.length == 0) {
                        _this.datanotfound = true;
                    }
                    else {
                        _this.datanotfound = false;
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
                }
                else {
                    _this.toast.errorToastr(result['statusMsg']);
                }
            }));
    };
    UserviewTargetComponent.prototype.exportAsXLSX = function () {
        var _this = this;
        // Excel/user_visit_target_list
        this.serve.FileData({ 'search': this.value }, "Excel/employee_primary_sale_target_list_for_export").subscribe(function (resp) {
            if (resp['msg'] == true) {
                window.open(_this.downurl + resp['filename']);
                _this.get_user_data();
            }
            else {
            }
        });
    };
    UserviewTargetComponent.prototype.exportAsXLSX1 = function () {
        var _this = this;
        this.serve.FileData({ 'search': this.value }, "Excel/user_visit_target_list").subscribe(function (resp) {
            if (resp['msg'] == true) {
                window.open(_this.downurl + resp['filename']);
                _this.get_user_data();
            }
            else {
            }
        });
    };
    UserviewTargetComponent.prototype.exportAsXLSX2 = function () {
        var _this = this;
        this.serve.FileData({ 'search': this.value }, "Excel/employee_secondary_sale_target_list_for_export").subscribe(function (resp) {
            if (resp['msg'] == true) {
                window.open(_this.downurl + resp['filename']);
                _this.get_user_data();
            }
            else {
            }
        });
    };
    UserviewTargetComponent.prototype.upload_excel = function (type) {
        var _this = this;
        var dialogRef = this.alrt.open(src_app_upload_file_modal_upload_file_modal_component__WEBPACK_IMPORTED_MODULE_4__["UploadFileModalComponent"], {
            width: '500px',
            panelClass: 'cs-modal',
            disableClose: true,
            data: {
                'from': 'secondary_target',
                'modal_type': type
            }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result != false) {
                _this.get_user_data();
            }
        });
    };
    UserviewTargetComponent.prototype.uploadData = function (type) {
        var _this = this;
        var dialogRef = this.alrt.open(src_app_upload_file_modal_upload_file_modal_component__WEBPACK_IMPORTED_MODULE_4__["UploadFileModalComponent"], {
            width: '500px',
            panelClass: 'cs-modal',
            disableClose: true,
            data: {
                'from': 'user_visit_target',
                'modal_type': type
            }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result != false) {
                _this.get_user_data();
            }
        });
    };
    UserviewTargetComponent.prototype.updateData = function (type) {
        var _this = this;
        var dialogRef = this.alrt.open(src_app_upload_file_modal_upload_file_modal_component__WEBPACK_IMPORTED_MODULE_4__["UploadFileModalComponent"], {
            width: '500px',
            panelClass: 'cs-modal',
            disableClose: true,
            data: {
                'from': 'user_visit_target',
                'modal_type': type
            }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result != false) {
                _this.get_user_data();
            }
        });
    };
    UserviewTargetComponent.prototype.RoundOffNumber = function (achieve) {
        return Math.ceil(achieve);
    };
    UserviewTargetComponent.prototype.delete = function (active_tab, id) {
        var _this = this;
        var func = '';
        if (active_tab == 'Secondary_Sale') {
            func = 'Target/deleteSecondaryTarget';
        }
        else {
            func = 'Target/deleteVisitTarget';
        }
        this.dialog.delete("Orders ?").then(function (result) {
            if (result) {
                _this.serve.post_rqst({ "id": id }, func).subscribe((function (result) {
                    if (result['statusCode'] == 200) {
                        _this.toast.successToastr(result['statusMsg']);
                        _this.get_user_data();
                    }
                    else {
                        _this.toast.errorToastr(result['statusMsg']);
                    }
                }));
            }
        });
    };
    UserviewTargetComponent.prototype.selectIds = function (event, index) {
        if (event.checked == true) {
            this.target_list[index]['checked'] = true;
            this.btnFlag = true;
            this.updateCheck();
        }
        if (event.checked == false) {
            this.target_list[index]['checked'] = false;
            this.updateCheck();
        }
    };
    UserviewTargetComponent.prototype.selectAll = function (event) {
        if (event.checked == true) {
            for (var i = 0; i < this.target_list.length; i++) {
                this.target_list[i]['checked'] = true;
            }
            this.checked.allID = true;
            this.btnFlag = true;
        }
        if (event.checked == false) {
            for (var i = 0; i < this.target_list.length; i++) {
                this.target_list[i]['checked'] = false;
            }
            this.checked.allID = false;
            this.btnFlag = false;
        }
    };
    UserviewTargetComponent.prototype.updateCheck = function () {
        for (var i = 0; i < this.target_list.length; i++) {
            if (this.target_list[i]['checked'] != true) {
                this.checked.allID = false;
                return;
            }
            else {
                this.checked.allID = true;
            }
        }
    };
    UserviewTargetComponent.prototype.openDialog = function () {
        var _this = this;
        var uniqueArray = [];
        if (this.target_list.length > 0) {
            for (var i = 0; i < this.target_list.length; i++) {
                if (this.target_list[i]['checked'] == true) {
                    uniqueArray.push(this.target_list[i]);
                }
            }
        }
        var dialogRef = this.alrt.open(_order_status_modal_status_modal_component__WEBPACK_IMPORTED_MODULE_8__["StatusModalComponent"], {
            width: '400px',
            data: {
                'from': this.active_tab == 'stock' ? 'target_status_stock' : this.active_tab == 'secondary' ? 'target_status_secondary' : '',
                'partyId': uniqueArray,
                'allStatus': this.checked.allID,
                'target_type': this.targetType,
            }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result == true) {
                _this.checked.allID = false;
                _this.btnFlag = false;
                _this.get_user_data();
            }
        });
    };
    UserviewTargetComponent.prototype.confirmationAlert = function (id, target_lead, target_plyexpert, target_ambassador, target_oem, target_builder) {
        var _this = this;
        this.dialog.confirm("Do you want to update this target ?").then(function (result) {
            if (result) {
                _this.updateTarget(id, target_lead, target_plyexpert, target_ambassador, target_oem, target_builder);
            }
        });
    };
    UserviewTargetComponent.prototype.updateTarget = function (id, target_lead, target_plyexpert, target_ambassador, target_oem, target_builder) {
        var _this = this;
        var payload = { 'target_lead': target_lead, 'target_plyexpert': target_plyexpert, 'target_ambassador': target_ambassador, 'target_oem': target_oem, 'target_builder': target_builder, 'id': id, 'created_by_id': this.assign_login_data2.id, 'created_by_name': this.assign_login_data2.id.name, 'type': this.active_tab == 'stock' ? 'stock' : this.active_tab == 'secondary' ? 'secondary' : '' };
        this.serve.post_rqst({ "data": payload }, "Target/updateVisitTarget").subscribe(function (result) {
            if (result['statusCode'] == 200) {
                _this.toast.successToastr(result['statusMsg']);
                _this.get_user_data();
            }
            else {
                _this.dialog.error(result['statusMsg']);
                _this.toast.errorToastr(result['statusMsg']);
            }
        });
    };
    UserviewTargetComponent.prototype.openBottomSheet = function () {
        var _this = this;
        this.bottomSheet.open(_bottom_sheet_bottom_sheet_component__WEBPACK_IMPORTED_MODULE_10__["BottomSheetComponent"], {
            data: {
                'filterPage': 'target',
            }
        });
        this.bottomSheet._openedBottomSheetRef.afterDismissed().subscribe(function (data) {
            if (data) {
                _this.value.date_from = data.date_from;
                _this.value.date_to = data.date_to;
                _this.get_user_data();
            }
        });
    };
    UserviewTargetComponent.prototype.DownloadReport = function (type) {
        var _this = this;
        this.bottomSheet.open(_bottom_sheet_bottom_sheet_component__WEBPACK_IMPORTED_MODULE_10__["BottomSheetComponent"], {
            data: {
                'filterPage': type,
            }
        });
        this.bottomSheet._openedBottomSheetRef.afterDismissed().subscribe(function (data) {
            if (data) {
                _this.data = data;
                _this.reportDownload(type);
            }
        });
    };
    UserviewTargetComponent.prototype.reportDownload = function (type) {
        var _this = this;
        var apiName;
        if (type == 'chart') {
            apiName = "Excel/Projectionchart";
        }
        if (type == 'Quartely') {
            this.filter = this.data;
            apiName = "Excel/QuarterlyTarget";
        }
        if (type == 'monthly') {
            apiName = "Excel/Monthlyprojection";
        }
        this.serve.FileData({ 'data': this.data }, apiName).subscribe(function (resp) {
            if (resp['msg'] == true) {
                window.open(_this.downurl + resp['filename']);
                _this.get_user_data();
            }
            else {
            }
        });
    };
    UserviewTargetComponent.prototype.downloadQuarterlyReport = function () {
        var _this = this;
        this.serve.FileData({ 'data': this.filter, 'search': this.value }, "Excel/QuarterlyTarget").subscribe(function (resp) {
            if (resp['msg'] == true) {
                window.open(_this.downurl + resp['filename']);
                _this.get_user_data();
            }
            else {
            }
        });
    };
    UserviewTargetComponent.prototype.downloademployeProjection = function () {
        var _this = this;
        this.serve.FileData({ 'search': this.value }, "Excel/EmployeeProjection").subscribe(function (resp) {
            if (resp['msg'] == true) {
                window.open(_this.downurl + resp['filename']);
                _this.get_user_data();
            }
            else {
            }
        });
    };
    UserviewTargetComponent.prototype.changeStatus = function (enqid, primary_target, secondary_target, stock_target) {
        var _this = this;
        var dialogRef = this.alrt.open(_lead_change_enquiry_status_change_enquiry_status_component__WEBPACK_IMPORTED_MODULE_11__["ChangeEnquiryStatusComponent"], {
            width: '600px',
            panelClass: 'cs-modal',
            data: {
                'id': enqid,
                'tab': this.active_tab,
                'from': 'target_list',
                'primary_target': primary_target,
                'secondary_target': secondary_target,
                'stock_target': stock_target
            }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result != false) {
                _this.get_user_data();
            }
        });
    };
    UserviewTargetComponent.prototype.changeProjectioinStatus = function (data) {
        var _this = this;
        this.serve.post_rqst(data, "Target/update_projection_achievement").subscribe((function (result) {
            if (result['statusCode'] == 200) {
                // {'data':this.target_list}
                _this.get_user_data();
                _this.toast.successToastr(result['statusMsg']);
            }
            else {
                _this.toast.errorToastr(result['statusMsg']);
            }
        }));
    };
    UserviewTargetComponent.prototype.updateProjectionStatus = function () {
        var _this = this;
        this.serve.post_rqst({ data: this.target_list }, "Target/update_projection_achievement_bulk").subscribe(function (result) {
            if (result.statusCode === 200) {
                _this.get_user_data();
                _this.toast.successToastr(result.statusMsg);
            }
            else {
                _this.toast.errorToastr(result.statusMsg);
            }
        });
    };
    UserviewTargetComponent.prototype.EmployeexportAsXLSX = function () {
        var _this = this;
        this.serve.post_rqst({ 'user_id': this.assign_login_data2.id, 'start': this.start, 'pagelimit': this.page_limit, 'search': this.value, }, "Target/targetListExcel").subscribe(function (result) {
            if (result['statusCode'] == 200) {
                _this.target_list = result['target_list'];
                _this.excel_data = _this.target_list.map(function (detail, index) { return ({
                    'Sr No.': index + 1,
                    'Employee Code': detail['employee_id'] || '---',
                    'Employee Name': detail['user_name'] || '---',
                    'Reporting Manager': detail['repoting_manager_name'] || '---',
                    'Base Station': detail['baseStation'] || '---',
                    'Working State': detail['working_state_name'] || '---',
                    'Duration': detail['date_from']
                        ? new Date(detail['date_from']).toLocaleString('default', { month: 'short', year: 'numeric' }) + " to " + (detail['date_to']
                            ? new Date(detail['date_to']).toLocaleString('default', { month: 'short', year: 'numeric' })
                            : '')
                        : '---',
                    'Primary Target': detail['primary_target'] || '0',
                    'Primary Achievement': detail['projection_achv']['primary_achv'] || '0',
                    'Secondary Target': detail['secondary_target'] || '0',
                    'Secondary Achievement': detail['projection_achv']['secondary_achv'] || '0',
                    'Stock Target': detail['stock_target'] || '0',
                    'Stock Achievement': detail['projection_achv']['stock_achv'] || '0',
                }); });
                _this.serve.exportAsExcelFile(_this.excel_data, "Employee Target Report");
                _this.excel_data = [];
            }
            else {
                // Handle the case where statusCode is not 200 if needed
                _this.get_user_data();
            }
            _this.get_user_data();
        }, function (error) {
            // Handle error if needed
            console.error('Error occurred:', error);
            // this.excelFlag = false;
        });
    };
    UserviewTargetComponent.prototype.achievementBifurcationExportAsXLSX = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                this.serve.post_rqst({ 'user_id': this.assign_login_data2.id, 'start': this.start, 'pagelimit': this.page_limit, 'search': this.value }, "Target/achievementBifurcationExcel").subscribe(function (result) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                    var list, monthlyData0, months_1, headers, ExcelJS, workbook, worksheet_1, buffer, blob, url, a;
                    return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                        switch (_a.label) {
                            case 0:
                                if (!(result['statusCode'] == 200)) return [3 /*break*/, 3];
                                list = result['target_list'];
                                if (!list || list.length === 0) {
                                    return [2 /*return*/];
                                }
                                monthlyData0 = list[0]['monthly_achievements'] || {};
                                months_1 = Object.keys(monthlyData0);
                                headers = [
                                    'Sr No.', 'Employee Code', 'Employee Name', 'Reporting Manager', 'Base Station', 'Working State', 'Duration',
                                    'Primary Target'
                                ].concat(months_1.map(function (m) { return m + " Ach (Primary)"; }), [
                                    'Secondary Target'
                                ], months_1.map(function (m) { return m + " Ach (Secondary)"; }), [
                                    'Stock Target'
                                ], months_1.map(function (m) { return m + " Ach (Stock)"; }));
                                return [4 /*yield*/, Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e("common")]).then(__webpack_require__.t.bind(null, /*! exceljs */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/exceljs/dist/exceljs.min.js", 7))];
                            case 1:
                                ExcelJS = _a.sent();
                                workbook = new ExcelJS.Workbook();
                                worksheet_1 = workbook.addWorksheet('Achievement Bifurcation');
                                worksheet_1.addRow(headers);
                                worksheet_1.getRow(1).eachCell(function (cell) {
                                    cell.font = { bold: true, color: { argb: 'FFFFFFFF' } };
                                    cell.alignment = { vertical: 'middle', horizontal: 'center' };
                                    cell.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FF4F81BD' } };
                                    cell.border = { top: { style: 'thin' }, bottom: { style: 'thin' }, left: { style: 'thin' }, right: { style: 'thin' } };
                                });
                                list.forEach(function (detail, index) {
                                    var isInactive = detail['user_status'] == 0 || detail['user_status'] === '0';
                                    var monthly = detail['monthly_achievements'] || {};
                                    var duration = detail['date_from']
                                        ? new Date(detail['date_from']).toLocaleString('default', { month: 'short', year: 'numeric' }) + " to " + (detail['date_to'] ? new Date(detail['date_to']).toLocaleString('default', { month: 'short', year: 'numeric' }) : '')
                                        : '---';
                                    var rowData = [
                                        index + 1,
                                        detail['employee_id'] || '---',
                                        detail['user_name'] || '---',
                                        detail['repoting_manager_name'] || '---',
                                        detail['baseStation'] || '---',
                                        detail['working_state_name'] || '---',
                                        duration,
                                        detail['primary_target'] || 0
                                    ].concat(months_1.map(function (m) { return (monthly[m] && monthly[m].primary_achv) || 0; }), [
                                        detail['secondary_target'] || 0
                                    ], months_1.map(function (m) { return (monthly[m] && monthly[m].secondary_achv) || 0; }), [
                                        detail['stock_target'] || 0
                                    ], months_1.map(function (m) { return (monthly[m] && monthly[m].stock_achv) || 0; }));
                                    var row = worksheet_1.addRow(rowData);
                                    var rowBgColor = isInactive ? 'FFFFCCCC' : (index % 2 === 0 ? 'FFFFEB99' : 'FFFFF5CC');
                                    var rowTextColor = isInactive ? 'FFB00000' : 'FF000000';
                                    row.eachCell({ includeEmpty: true }, function (cell) {
                                        cell.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: rowBgColor } };
                                        cell.font = { color: { argb: rowTextColor }, bold: isInactive };
                                        cell.border = { top: { style: 'thin' }, bottom: { style: 'thin' }, left: { style: 'thin' }, right: { style: 'thin' } };
                                        cell.alignment = { vertical: 'middle', horizontal: 'center' };
                                    });
                                });
                                worksheet_1.columns.forEach(function (col) {
                                    var maxLen = 12;
                                    col.eachCell({ includeEmpty: true }, function (cell) {
                                        var len = cell.value ? String(cell.value).length : 0;
                                        if (len > maxLen) {
                                            maxLen = len;
                                        }
                                    });
                                    col.width = maxLen + 2;
                                });
                                return [4 /*yield*/, workbook.xlsx.writeBuffer()];
                            case 2:
                                buffer = _a.sent();
                                blob = new Blob([buffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
                                url = window.URL.createObjectURL(blob);
                                a = document.createElement('a');
                                a.href = url;
                                a.download = 'Achievement_Bifurcation_Report.xlsx';
                                a.click();
                                window.URL.revokeObjectURL(url);
                                return [3 /*break*/, 4];
                            case 3:
                                this.get_user_data();
                                _a.label = 4;
                            case 4: return [2 /*return*/];
                        }
                    });
                }); }, function (error) {
                    console.error('Error occurred:', error);
                });
                return [2 /*return*/];
            });
        });
    };
    UserviewTargetComponent.prototype.downloadAchievementHierarchyExcel = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var result, users, assignments, monthLabels_1, parentOf_1, childrenOf_1, _i, assignments_1, a_1, userMap_1, _a, users_1, u, roots, sizeCache_1, subtreeSize_1, sortedRoots, reportingOf_1, _b, assignments_2, a_2, mgr, stateSet_1, _c, users_2, u, allStates, dfsForState_1, stateColors, ExcelJS, wb, ws_1, fixedCols_1, secCols_1, priCols, allCols, totalCols, colorIdx, _d, allStates_1, state, stateRow, stCell, secGrpRow, colRow, visited, stateRows, _e, sortedRoots_1, rootId, fixedWidths, i, buffer, blob, url, a, err_1;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_f) {
                switch (_f.label) {
                    case 0:
                        this.loader = true;
                        _f.label = 1;
                    case 1:
                        _f.trys.push([1, 5, , 6]);
                        return [4 /*yield*/, this.serve
                                .post_rqst({}, 'Excel/achievement_hierarchy_excel_data')
                                .toPromise()];
                    case 2:
                        result = _f.sent();
                        users = result['users'] || [];
                        assignments = result['assignments'] || [];
                        monthLabels_1 = result['month_labels'] || [];
                        if (!users.length) {
                            this.loader = false;
                            return [2 /*return*/];
                        }
                        parentOf_1 = {};
                        childrenOf_1 = {};
                        for (_i = 0, assignments_1 = assignments; _i < assignments_1.length; _i++) {
                            a_1 = assignments_1[_i];
                            parentOf_1[a_1.asm_id] = a_1.rsm_id;
                            if (!childrenOf_1[a_1.rsm_id]) {
                                childrenOf_1[a_1.rsm_id] = [];
                            }
                            childrenOf_1[a_1.rsm_id].push(a_1.asm_id);
                        }
                        userMap_1 = {};
                        for (_a = 0, users_1 = users; _a < users_1.length; _a++) {
                            u = users_1[_a];
                            userMap_1[u.id] = u;
                        }
                        roots = users
                            .filter(function (u) { return !parentOf_1[u.id] || !userMap_1[parentOf_1[u.id]]; })
                            .map(function (u) { return u.id; });
                        sizeCache_1 = {};
                        subtreeSize_1 = function (id, visiting) {
                            if (visiting === void 0) { visiting = new Set(); }
                            if (sizeCache_1[id] !== undefined) {
                                return sizeCache_1[id];
                            }
                            if (visiting.has(id)) {
                                return 0;
                            }
                            visiting.add(id);
                            var ch = childrenOf_1[id] || [];
                            var sz = 1 + ch.reduce(function (s, c) { return s + subtreeSize_1(c, visiting); }, 0);
                            sizeCache_1[id] = sz;
                            return sz;
                        };
                        users.forEach(function (u) { return subtreeSize_1(u.id); });
                        sortedRoots = roots.slice().sort(function (a, b) { return (sizeCache_1[b] || 0) - (sizeCache_1[a] || 0); });
                        reportingOf_1 = {};
                        for (_b = 0, assignments_2 = assignments; _b < assignments_2.length; _b++) {
                            a_2 = assignments_2[_b];
                            mgr = userMap_1[a_2.rsm_id];
                            reportingOf_1[a_2.asm_id] = mgr ? mgr.name + (mgr.employee_id ? " (" + mgr.employee_id + ")" : '') : '';
                        }
                        stateSet_1 = new Set();
                        for (_c = 0, users_2 = users; _c < users_2.length; _c++) {
                            u = users_2[_c];
                            (u.working_state_name || '').split(',').map(function (s) { return s.trim(); }).filter(function (s) { return s; })
                                .forEach(function (s) { return stateSet_1.add(s); });
                        }
                        allStates = Array.from(stateSet_1).sort();
                        dfsForState_1 = function (id, state, depth, visited) {
                            if (visited.has(id)) {
                                return [];
                            }
                            visited.add(id);
                            var u = userMap_1[id];
                            if (!u) {
                                return [];
                            }
                            var rows = [];
                            var uStates = (u.working_state_name || '').split(',').map(function (s) { return s.trim(); });
                            var children = (childrenOf_1[id] || []).slice().sort(function (a, b) { return (sizeCache_1[a] || 0) - (sizeCache_1[b] || 0); });
                            for (var _i = 0, children_1 = children; _i < children_1.length; _i++) {
                                var cId = children_1[_i];
                                rows.push.apply(rows, dfsForState_1(cId, state, depth + 1, visited));
                            }
                            if (uStates.includes(state)) {
                                rows.push({ user: u, depth: depth, rm: reportingOf_1[id] || '' });
                            }
                            return rows;
                        };
                        stateColors = ['1a237e', '1b5e20', '4a148c', '880e4f', '004d40', 'bf360c', '37474f', '006064'];
                        return [4 /*yield*/, Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e("common")]).then(__webpack_require__.t.bind(null, /*! exceljs */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/exceljs/dist/exceljs.min.js", 7))];
                    case 3:
                        ExcelJS = _f.sent();
                        wb = new ExcelJS.Workbook();
                        ws_1 = wb.addWorksheet('Achievement Hierarchy');
                        fixedCols_1 = ['Sr No.', 'Emp Code', 'Designation', 'Name', 'Date of Joining', 'Base Station', 'Reporting Manager'];
                        secCols_1 = monthLabels_1.map(function (m) { return "Sec: " + m; });
                        priCols = monthLabels_1.map(function (m) { return "Pri: " + m; });
                        allCols = fixedCols_1.concat(secCols_1, priCols);
                        totalCols = allCols.length;
                        colorIdx = 0;
                        for (_d = 0, allStates_1 = allStates; _d < allStates_1.length; _d++) {
                            state = allStates_1[_d];
                            stateRow = ws_1.addRow([state.toUpperCase()]);
                            ws_1.mergeCells(stateRow.number, 1, stateRow.number, totalCols);
                            stateRow.height = 22;
                            stCell = stateRow.getCell(1);
                            stCell.value = '  ' + state.toUpperCase();
                            stCell.font = { bold: true, color: { argb: 'FFFFFFFF' }, size: 12 };
                            stCell.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FF' + stateColors[colorIdx++ % stateColors.length] } };
                            stCell.alignment = { vertical: 'middle', horizontal: 'left' };
                            secGrpRow = ws_1.addRow([]);
                            ws_1.mergeCells(secGrpRow.number, fixedCols_1.length + 1, secGrpRow.number, fixedCols_1.length + secCols_1.length);
                            secGrpRow.getCell(fixedCols_1.length + 1).value = 'Secondary Achievement (Last 12 Months)';
                            secGrpRow.getCell(fixedCols_1.length + 1).font = { bold: true, color: { argb: 'FFFFFFFF' } };
                            secGrpRow.getCell(fixedCols_1.length + 1).fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FF1B5E20' } };
                            secGrpRow.getCell(fixedCols_1.length + 1).alignment = { horizontal: 'center', vertical: 'middle' };
                            ws_1.mergeCells(secGrpRow.number, fixedCols_1.length + secCols_1.length + 1, secGrpRow.number, totalCols);
                            secGrpRow.getCell(fixedCols_1.length + secCols_1.length + 1).value = 'Primary Achievement (Last 12 Months)';
                            secGrpRow.getCell(fixedCols_1.length + secCols_1.length + 1).font = { bold: true, color: { argb: 'FFFFFFFF' } };
                            secGrpRow.getCell(fixedCols_1.length + secCols_1.length + 1).fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FF0D47A1' } };
                            secGrpRow.getCell(fixedCols_1.length + secCols_1.length + 1).alignment = { horizontal: 'center', vertical: 'middle' };
                            colRow = ws_1.addRow(allCols);
                            colRow.height = 18;
                            colRow.eachCell(function (cell, colNum) {
                                var isSecCol = colNum > fixedCols_1.length && colNum <= fixedCols_1.length + secCols_1.length;
                                var isPriCol = colNum > fixedCols_1.length + secCols_1.length;
                                cell.font = { bold: true, color: { argb: 'FFFFFFFF' }, size: 9 };
                                cell.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: isSecCol ? 'FF2E7D32' : isPriCol ? 'FF1565C0' : 'FF37474F' } };
                                cell.alignment = { vertical: 'middle', horizontal: 'center', wrapText: true };
                                cell.border = { top: { style: 'thin' }, left: { style: 'thin' }, bottom: { style: 'thin' }, right: { style: 'thin' } };
                            });
                            visited = new Set();
                            stateRows = [];
                            for (_e = 0, sortedRoots_1 = sortedRoots; _e < sortedRoots_1.length; _e++) {
                                rootId = sortedRoots_1[_e];
                                stateRows.push.apply(stateRows, dfsForState_1(rootId, state, 0, visited));
                            }
                            stateRows.forEach(function (item, idx) {
                                var u = item.user;
                                var indent = '  '.repeat(item.depth);
                                var secData = monthLabels_1.map(function (m) { return (u.secondary_monthly && u.secondary_monthly[m]) || 0; });
                                var priData = monthLabels_1.map(function (m) { return (u.primary_monthly && u.primary_monthly[m]) || 0; });
                                var rowData = [
                                    idx + 1,
                                    u.employee_id || '',
                                    u.designation_name || '',
                                    indent + (u.name || ''),
                                    u.date_of_joining || '',
                                    u.baseStation || '',
                                    item.rm
                                ].concat(secData, priData);
                                var dr = ws_1.addRow(rowData);
                                dr.height = 15;
                                var bg = idx % 2 === 0 ? 'FFE3F2FD' : 'FFFFFFFF';
                                dr.eachCell({ includeEmpty: true }, function (cell, colNum) {
                                    var isSecCol = colNum > fixedCols_1.length && colNum <= fixedCols_1.length + secCols_1.length;
                                    var isPriCol = colNum > fixedCols_1.length + secCols_1.length;
                                    cell.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: isSecCol ? (idx % 2 === 0 ? 'FFE8F5E9' : 'FFF1F8E9') : isPriCol ? (idx % 2 === 0 ? 'FFE3F2FD' : 'FFEFF8FF') : bg } };
                                    cell.border = { top: { style: 'thin', color: { argb: 'FFE0E0E0' } }, left: { style: 'thin', color: { argb: 'FFE0E0E0' } }, bottom: { style: 'thin', color: { argb: 'FFE0E0E0' } }, right: { style: 'thin', color: { argb: 'FFE0E0E0' } } };
                                    cell.alignment = { vertical: 'middle', horizontal: colNum <= fixedCols_1.length ? 'left' : 'center' };
                                });
                                if (item.depth === 0) {
                                    dr.getCell(4).font = { bold: true };
                                }
                            });
                            ws_1.addRow([]);
                        }
                        fixedWidths = [6, 12, 20, 28, 14, 16, 28];
                        fixedWidths.forEach(function (w, i) { ws_1.getColumn(i + 1).width = w; });
                        for (i = fixedCols_1.length + 1; i <= totalCols; i++) {
                            ws_1.getColumn(i).width = 11;
                        }
                        return [4 /*yield*/, wb.xlsx.writeBuffer()];
                    case 4:
                        buffer = _f.sent();
                        blob = new Blob([buffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
                        url = window.URL.createObjectURL(blob);
                        a = document.createElement('a');
                        a.href = url;
                        a.download = "Achievement_Hierarchy_" + new Date().toISOString().slice(0, 10) + ".xlsx";
                        a.click();
                        window.URL.revokeObjectURL(url);
                        return [3 /*break*/, 6];
                    case 5:
                        err_1 = _f.sent();
                        console.error('Achievement Hierarchy Excel error:', err_1);
                        return [3 /*break*/, 6];
                    case 6:
                        this.loader = false;
                        return [2 /*return*/];
                }
            });
        });
    };
    UserviewTargetComponent.prototype.IncentiveDetail = function (id) {
        var dialogRef = this.alrt.open(_incentive_view_component_incentive_view_component_component__WEBPACK_IMPORTED_MODULE_12__["IncentiveViewComponentComponent"], {
            panelClass: 'full-width-modal',
            data: {
                'id': id
            }
        });
        dialogRef.afterClosed().subscribe(function (result) {
        });
    };
    UserviewTargetComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-userview-target',
            template: __webpack_require__(/*! ./userview-target.component.html */ "./src/app/userview-target/userview-target.component.html"),
            styles: [__webpack_require__(/*! ./userview-target.component.scss */ "./src/app/userview-target/userview-target.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_services_DatabaseService__WEBPACK_IMPORTED_MODULE_2__["DatabaseService"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatBottomSheet"], _angular_router__WEBPACK_IMPORTED_MODULE_9__["ActivatedRoute"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"], _dialog_component__WEBPACK_IMPORTED_MODULE_7__["DialogComponent"], src_app_localstorage_service__WEBPACK_IMPORTED_MODULE_5__["sessionStorage"], ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_6__["ToastrManager"]])
    ], UserviewTargetComponent);
    return UserviewTargetComponent;
}());



/***/ })

}]);