(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["expense-expense-module-expense-module"],{

/***/ "./src/app/expense/expense-module/expense.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/expense/expense-module/expense.module.ts ***!
  \**********************************************************/
/*! exports provided: ExpenseModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExpenseModule", function() { return ExpenseModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angular_ng_autocomplete__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angular-ng-autocomplete */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/angular-ng-autocomplete/fesm5/angular-ng-autocomplete.js");
/* harmony import */ var ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-multiselect-dropdown */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/ng-multiselect-dropdown/fesm5/ng-multiselect-dropdown.js");
/* harmony import */ var ngx_mat_select_search__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-mat-select-search */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/ngx-mat-select-search/fesm5/ngx-mat-select-search.js");
/* harmony import */ var src_app_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/material */ "./src/app/material.ts");
/* harmony import */ var src_app_auth_component_guard__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/auth-component.guard */ "./src/app/auth-component.guard.ts");
/* harmony import */ var _detail_expense_detail_expense_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../detail-expense/detail-expense.component */ "./src/app/expense/detail-expense/detail-expense.component.ts");
/* harmony import */ var _list_expense_list_expense_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../list-expense/list-expense.component */ "./src/app/expense/list-expense/list-expense.component.ts");
/* harmony import */ var src_app_app_utility_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/app-utility.module */ "./src/app/app-utility.module.ts");
/* harmony import */ var _expesne_edit_expesne_edit_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../expesne-edit/expesne-edit.component */ "./src/app/expense/expesne-edit/expesne-edit.component.ts");
/* harmony import */ var mat_timepicker__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! mat-timepicker */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/mat-timepicker/fesm2015/mat-timepicker.js");
/* harmony import */ var src_app_contractor_meet_contractor_meet_detail_contractor_meet_detail_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! src/app/contractor-meet/contractor-meet-detail/contractor-meet-detail.component */ "./src/app/contractor-meet/contractor-meet-detail/contractor-meet-detail.component.ts");
/* harmony import */ var src_app_contractor_meet_contractor_meet_list_contractor_meet_list_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! src/app/contractor-meet/contractor-meet-list/contractor-meet-list.component */ "./src/app/contractor-meet/contractor-meet-list/contractor-meet-list.component.ts");


















var expenseRoutes = [
    {
        path: "", children: [
            { path: "", component: _list_expense_list_expense_component__WEBPACK_IMPORTED_MODULE_12__["ListExpenseComponent"], canActivate: [src_app_auth_component_guard__WEBPACK_IMPORTED_MODULE_10__["AuthComponentGuard"]], data: { expectedRole: ['1'] } },
            { path: "expense-detail/:id", component: _detail_expense_detail_expense_component__WEBPACK_IMPORTED_MODULE_11__["DetailExpenseComponent"], canActivate: [src_app_auth_component_guard__WEBPACK_IMPORTED_MODULE_10__["AuthComponentGuard"]], data: { expectedRole: ['1'] } },
            {
                path: "expense-detail/:id", children: [
                    { path: "", component: src_app_contractor_meet_contractor_meet_list_contractor_meet_list_component__WEBPACK_IMPORTED_MODULE_17__["ContractorMeetListComponent"], canActivate: [src_app_auth_component_guard__WEBPACK_IMPORTED_MODULE_10__["AuthComponentGuard"]], data: { expectedRole: ['1'] } },
                    { path: "btl-detail/:id", component: src_app_contractor_meet_contractor_meet_detail_contractor_meet_detail_component__WEBPACK_IMPORTED_MODULE_16__["ContractorMeetDetailComponent"], canActivate: [src_app_auth_component_guard__WEBPACK_IMPORTED_MODULE_10__["AuthComponentGuard"]], data: { expectedRole: ['1'] } },
                ]
            }
        ]
    },
];
var ExpenseModule = /** @class */ (function () {
    function ExpenseModule() {
    }
    ExpenseModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                // DetailExpenseComponent,
                // ListExpenseComponent,
                // ExpenseModalComponent,
                _expesne_edit_expesne_edit_component__WEBPACK_IMPORTED_MODULE_14__["ExpesneEditComponent"],
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild(expenseRoutes),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_7__["NgMultiSelectDropDownModule"],
                src_app_material__WEBPACK_IMPORTED_MODULE_9__["MaterialModule"],
                angular_ng_autocomplete__WEBPACK_IMPORTED_MODULE_6__["AutocompleteLibModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialogModule"],
                ngx_mat_select_search__WEBPACK_IMPORTED_MODULE_8__["NgxMatSelectSearchModule"],
                src_app_app_utility_module__WEBPACK_IMPORTED_MODULE_13__["AppUtilityModule"],
                mat_timepicker__WEBPACK_IMPORTED_MODULE_15__["MatTimepickerModule"],
            ],
            entryComponents: [_expesne_edit_expesne_edit_component__WEBPACK_IMPORTED_MODULE_14__["ExpesneEditComponent"],]
        })
    ], ExpenseModule);
    return ExpenseModule;
}());



/***/ })

}]);