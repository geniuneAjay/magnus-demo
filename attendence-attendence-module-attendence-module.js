(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["attendence-attendence-module-attendence-module"],{

/***/ "./src/app/attendence/attendence-module/attendence.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/attendence/attendence-module/attendence.module.ts ***!
  \*******************************************************************/
/*! exports provided: AttendenceModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AttendenceModule", function() { return AttendenceModule; });
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
/* harmony import */ var _attendence_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../attendence.component */ "./src/app/attendence/attendence.component.ts");
/* harmony import */ var src_app_attendancemodal_attendancemodal_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/attendancemodal/attendancemodal.component */ "./src/app/attendancemodal/attendancemodal.component.ts");
/* harmony import */ var src_app_attendance_detail_attendance_detail_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/attendance-detail/attendance-detail.component */ "./src/app/attendance-detail/attendance-detail.component.ts");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @agm/core */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@agm/core/fesm5/agm-core.js");
/* harmony import */ var _tracker_tracker_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../tracker/tracker.component */ "./src/app/attendence/tracker/tracker.component.ts");
/* harmony import */ var zingchart_angular__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! zingchart-angular */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/zingchart-angular/fesm5/zingchart-angular.js");
















// import { AgmDirectionModule } from 'agm-direction';


var attendenceRoutes = [
    { path: "", component: _attendence_component__WEBPACK_IMPORTED_MODULE_12__["AttendenceComponent"], canActivate: [src_app_auth_component_guard__WEBPACK_IMPORTED_MODULE_11__["AuthComponentGuard"]], data: { expectedRole: ['1'] } },
    { path: "tracker", component: _tracker_tracker_component__WEBPACK_IMPORTED_MODULE_16__["TrackerComponent"], canActivate: [src_app_auth_component_guard__WEBPACK_IMPORTED_MODULE_11__["AuthComponentGuard"]], data: { expectedRole: ['1'] } },
    { path: "attendance-detail/:attendance_id/:user_id/:date", component: src_app_attendance_detail_attendance_detail_component__WEBPACK_IMPORTED_MODULE_14__["AttendanceDetailComponent"], canActivate: [src_app_auth_component_guard__WEBPACK_IMPORTED_MODULE_11__["AuthComponentGuard"]], data: { expectedRole: ['1'] } },
];
var AttendenceModule = /** @class */ (function () {
    function AttendenceModule() {
    }
    AttendenceModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [src_app_attendancemodal_attendancemodal_component__WEBPACK_IMPORTED_MODULE_13__["AttendancemodalComponent"],
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild(attendenceRoutes),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_7__["NgMultiSelectDropDownModule"],
                src_app_material__WEBPACK_IMPORTED_MODULE_10__["MaterialModule"],
                angular_ng_autocomplete__WEBPACK_IMPORTED_MODULE_6__["AutocompleteLibModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialogModule"],
                ngx_mat_select_search__WEBPACK_IMPORTED_MODULE_8__["NgxMatSelectSearchModule"],
                src_app_app_utility_module__WEBPACK_IMPORTED_MODULE_9__["AppUtilityModule"],
                _agm_core__WEBPACK_IMPORTED_MODULE_15__["AgmCoreModule"],
                // AgmDirectionModule,
                zingchart_angular__WEBPACK_IMPORTED_MODULE_17__["ZingchartAngularModule"],
            ],
            entryComponents: [
                src_app_attendancemodal_attendancemodal_component__WEBPACK_IMPORTED_MODULE_13__["AttendancemodalComponent"],
                src_app_attendance_detail_attendance_detail_component__WEBPACK_IMPORTED_MODULE_14__["AttendanceDetailComponent"],
            ]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AttendenceModule);
    return AttendenceModule;
}());



/***/ })

}]);