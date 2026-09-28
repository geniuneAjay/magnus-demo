(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["contractor-meet-contractor-meet-module-contractor-meet-module"],{

/***/ "./src/app/contractor-meet/contractor-meet-module/contractor-meet.module.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/contractor-meet/contractor-meet-module/contractor-meet.module.ts ***!
  \**********************************************************************************/
/*! exports provided: ContractorMeetModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContractorMeetModule", function() { return ContractorMeetModule; });
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
/* harmony import */ var _contractor_meet_list_contractor_meet_list_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../contractor-meet-list/contractor-meet-list.component */ "./src/app/contractor-meet/contractor-meet-list/contractor-meet-list.component.ts");
/* harmony import */ var _contractor_meet_detail_contractor_meet_detail_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../contractor-meet-detail/contractor-meet-detail.component */ "./src/app/contractor-meet/contractor-meet-detail/contractor-meet-detail.component.ts");
/* harmony import */ var _contractor_meet_status_modal_contractor_meet_status_modal_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../contractor-meet-status-modal/contractor-meet-status-modal.component */ "./src/app/contractor-meet/contractor-meet-status-modal/contractor-meet-status-modal.component.ts");
/* harmony import */ var _btl_expense_modal_btl_expense_modal_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../btl-expense-modal/btl-expense-modal.component */ "./src/app/contractor-meet/btl-expense-modal/btl-expense-modal.component.ts");
/* harmony import */ var _btl_approve_history_modal_btl_approve_history_modal_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../btl-approve-history-modal/btl-approve-history-modal.component */ "./src/app/contractor-meet/btl-approve-history-modal/btl-approve-history-modal.component.ts");

















var eventRoutes = [
    {
        path: "", children: [
            { path: "", component: _contractor_meet_list_contractor_meet_list_component__WEBPACK_IMPORTED_MODULE_12__["ContractorMeetListComponent"], canActivate: [src_app_auth_component_guard__WEBPACK_IMPORTED_MODULE_11__["AuthComponentGuard"]], data: { expectedRole: ['1'] } },
            { path: "btl-detail/:id", component: _contractor_meet_detail_contractor_meet_detail_component__WEBPACK_IMPORTED_MODULE_13__["ContractorMeetDetailComponent"], canActivate: [src_app_auth_component_guard__WEBPACK_IMPORTED_MODULE_11__["AuthComponentGuard"]], data: { expectedRole: ['1'] } },
        ]
    },
];
var ContractorMeetModule = /** @class */ (function () {
    function ContractorMeetModule() {
        console.log('this is event module');
    }
    ContractorMeetModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                // ContractorMeetDetailComponent,
                _contractor_meet_status_modal_contractor_meet_status_modal_component__WEBPACK_IMPORTED_MODULE_14__["ContractorMeetStatusModalComponent"],
                _btl_expense_modal_btl_expense_modal_component__WEBPACK_IMPORTED_MODULE_15__["BtlExpenseModalComponent"],
                _btl_approve_history_modal_btl_approve_history_modal_component__WEBPACK_IMPORTED_MODULE_16__["BtlApproveHistoryModalComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild(eventRoutes),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_7__["NgMultiSelectDropDownModule"],
                src_app_material__WEBPACK_IMPORTED_MODULE_10__["MaterialModule"],
                angular_ng_autocomplete__WEBPACK_IMPORTED_MODULE_6__["AutocompleteLibModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialogModule"],
                ngx_mat_select_search__WEBPACK_IMPORTED_MODULE_8__["NgxMatSelectSearchModule"],
                src_app_app_utility_module__WEBPACK_IMPORTED_MODULE_9__["AppUtilityModule"]
            ],
            entryComponents: [_contractor_meet_status_modal_contractor_meet_status_modal_component__WEBPACK_IMPORTED_MODULE_14__["ContractorMeetStatusModalComponent"], _btl_expense_modal_btl_expense_modal_component__WEBPACK_IMPORTED_MODULE_15__["BtlExpenseModalComponent"], _btl_approve_history_modal_btl_approve_history_modal_component__WEBPACK_IMPORTED_MODULE_16__["BtlApproveHistoryModalComponent"]]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ContractorMeetModule);
    return ContractorMeetModule;
}());



/***/ })

}]);