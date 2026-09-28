(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["allowances-allowances-module-allowances-module"],{

/***/ "./src/app/allowances/allowances-module/allowances.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/allowances/allowances-module/allowances.module.ts ***!
  \*******************************************************************/
/*! exports provided: AllowancesModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AllowancesModule", function() { return AllowancesModule; });
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
/* harmony import */ var _allowances_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../allowances.component */ "./src/app/allowances/allowances.component.ts");
/* harmony import */ var src_app_auth_component_guard__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/auth-component.guard */ "./src/app/auth-component.guard.ts");













var allowancesRoutes = [
    { path: "", component: _allowances_component__WEBPACK_IMPORTED_MODULE_11__["AllowancesComponent"], canActivate: [src_app_auth_component_guard__WEBPACK_IMPORTED_MODULE_12__["AuthComponentGuard"]], data: { expectedRole: ['1'] } },
];
var AllowancesModule = /** @class */ (function () {
    function AllowancesModule() {
        console.log('this is allowances module');
    }
    AllowancesModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _allowances_component__WEBPACK_IMPORTED_MODULE_11__["AllowancesComponent"],
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild(allowancesRoutes),
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
    ], AllowancesModule);
    return AllowancesModule;
}());



/***/ }),

/***/ "./src/app/allowances/allowances.component.html":
/*!******************************************************!*\
  !*** ./src/app/allowances/allowances.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-container\">\r\n\t<!-- <app-loader *ngIf=\"loader==1\"></app-loader> -->\r\n\t<div class=\"tools-container\">\r\n\t\t<h2>Allowances</h2>\r\n\t\t<div class=\"left-auto df ac flex-gap-10\">\r\n\t\t\t<button mat-icon-button matTooltip=\"Refresh\" (click)=\"refresh()\">\r\n\t\t\t\t<i class=\"material-icons\">refresh</i>\r\n\t\t\t</button>\r\n\t\t</div>\r\n\r\n\t</div>\r\n\r\n\t<div class=\"container table-container\">\r\n\t\t<div class=\"padding10\">\r\n\t\t\t<div class=\"scroll-tables\">\r\n\t\t\t\t<table>\r\n\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t<td class=\"w300\">\r\n\t\t\t\t\t\t\t<table>\r\n\t\t\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t\t\t<th class=\"w50\">S.no</th>\r\n\t\t\t\t\t\t\t\t\t<th>Designation</th>\r\n\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t\t\t<th class=\"w50\">&nbsp;</th>\r\n\t\t\t\t\t\t\t\t\t<th>\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"th-search-acmt\">\r\n\t\t\t\t\t\t\t\t\t\t\t<mat-form-field class=\"example-full-width cs-input select-input\">\r\n\t\t\t\t\t\t\t\t\t\t\t\t<input matInput placeholder=\"Search...\" type=\"text\" name=\"designation\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"designation\" (keyup.enter)=\"get_allowance()\">\r\n\t\t\t\t\t\t\t\t\t\t\t</mat-form-field>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</th>\r\n\t\t\t\t\t\t\t\t</tr>\r\n\r\n\t\t\t\t\t\t\t\t<tr *ngFor=\"let row of allowanceData;let i=index\" [class.row-edited]=\"row._edited\">\r\n\t\t\t\t\t\t\t\t\t<td class=\"w50\">{{i+1}}</td>\r\n\t\t\t\t\t\t\t\t\t<td>{{row.designation_name | titlecase}}</td>\r\n\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t</table>\r\n\t\t\t\t\t\t</td>\r\n\r\n\t\t\t\t\t\t<td>\r\n\t\t\t\t\t\t\t<table>\r\n\t\t\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t\t\t<th class=\"w600 text-center\" colspan=\"9\">Travel Entitlement</th>\r\n\r\n\t\t\t\t\t\t\t\t\t<th class=\"w200 text-center\" colspan=\"2\">Self Conveyance</th>\r\n\t\t\t\t\t\t\t\t\t<th class=\"w250 text-center\" colspan=\"3\">Loadging</th>\r\n\t\t\t\t\t\t\t\t\t<th class=\"w250 text-center\" colspan=\"3\">Boarding</th>\r\n\t\t\t\t\t\t\t\t\t<th class=\"w250 text-center\" colspan=\"3\">OOP</th>\r\n\r\n\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t\t<tr>\r\n\t\t\t\t\t\t\t\t\t<th class=\"text-center w50 lh26\">Flight</th>\r\n\t\t\t\t\t\t\t\t\t<th class=\"text-center  w50\">Train</th>\r\n\t\t\t\t\t\t\t\t\t<th class=\"text-center  w50\">Bus</th>\r\n\r\n\r\n\t\t\t\t\t\t\t\t\t<th class=\"text-center  w50\">Auto/Uber</th>\r\n\t\t\t\t\t\t\t\t\t<th class=\"text-center w50\">Taxi</th>\r\n\t\t\t\t\t\t\t\t\t<th class=\" text-center w50\">Logding</th>\r\n\t\t\t\t\t\t\t\t\t<th class=\"text-center w50\">Boarding</th>\r\n\t\t\t\t\t\t\t\t\t<th class=\"text-center w50\">Toll Tax</th>\r\n\t\t\t\t\t\t\t\t\t<th class=\"text-center w50\">OOP</th>\r\n\t\t\t\t\t\t\t\t\t<th class=\"text-center w50\">Car Per KM</th>\r\n\t\t\t\t\t\t\t\t\t<th class=\"text-center w50\">Bike Per KM</th>\r\n\t\t\t\t\t\t\t\t\t<th class=\"text-center w50\">Metro</th>\r\n\t\t\t\t\t\t\t\t\t<th class=\"text-center w50\">A Class</th>\r\n\t\t\t\t\t\t\t\t\t<th class=\"text-center w50\">Others</th>\r\n\t\t\t\t\t\t\t\t\t<th class=\"text-center w50\">Metro</th>\r\n\t\t\t\t\t\t\t\t\t<th class=\"text-center w50\">A Class</th>\r\n\t\t\t\t\t\t\t\t\t<th class=\"text-center w50\">Others</th>\r\n\t\t\t\t\t\t\t\t\t<th class=\"text-center w50\">Metro</th>\r\n\t\t\t\t\t\t\t\t\t<th class=\"text-center w50\">A Class</th>\r\n\t\t\t\t\t\t\t\t\t<th class=\"text-center w50\">Others</th>\r\n\r\n\t\t\t\t\t\t\t\t\t<th class=\"text-center\">&nbsp;</th>\r\n\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t\t<tr *ngFor=\"let data of allowanceData;let i = index\" class=\"spaceCss\"\r\n\t\t\t\t\t\t\t\t\t\t[class.row-edited]=\"data._edited\" (input)=\"data._edited = true\"\r\n\t\t\t\t\t\t\t\t\t\t(change)=\"data._edited = true\">\r\n\t\t\t\t\t\t\t\t\t<td class=\"text-center w50\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"action-button\">\r\n\t\t\t\t\t\t\t\t\t\t\t<mat-checkbox id=\"flight{{i}}\" name=\"flight{{i}}\" [(ngModel)]=\"data.flight\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t[checked]=\"data.flight == '1' ? true : ''\">&nbsp;</mat-checkbox>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t\t\t<td class=\"text-center w50\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"action-button\">\r\n\r\n\t\t\t\t\t\t\t\t\t\t\t<mat-checkbox name=\"trainSC{{i}}\" [(ngModel)]=\"data.trainSC\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t[checked]=\"data.trainSC == '1' ? true : ''\">&nbsp;</mat-checkbox>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t\t\t<td class=\"text-center w50\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"action-button\">\r\n\t\t\t\t\t\t\t\t\t\t\t<mat-checkbox name=\"busAC{{i}}\" [(ngModel)]=\"data.busAC\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t[checked]=\"data.busAC == '1' ? true : ''\">&nbsp;</mat-checkbox>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</td>\r\n\r\n\r\n\t\t\t\t\t\t\t\t\t<!-- <td class=\"text-center\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"action-button\">\r\n\t\t\t\t\t\t\t\t\t\t\t<mat-checkbox name=\"car_outstation{{i}}\" [(ngModel)]=\"data.car_outstation\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t[checked]=\"data.car_outstation == '1' ? true : ''\">&nbsp;</mat-checkbox>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</td> -->\r\n\r\n\t\t\t\t\t\t\t\t\t<td class=\"text-center\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"action-button\">\r\n\t\t\t\t\t\t\t\t\t\t\t<mat-checkbox name=\"auto{{i}}\" [(ngModel)]=\"data.auto\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t[checked]=\"data.auto == '1' ? true : ''\">&nbsp;</mat-checkbox>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</td>\r\n\r\n\t\t\t\t\t\t\t\t\t<td class=\"text-center\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"action-button\">\r\n\t\t\t\t\t\t\t\t\t\t\t<mat-checkbox name=\"taxi{{i}}\" [(ngModel)]=\"data.taxi\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t[checked]=\"data.taxi == '1' ? true : ''\">&nbsp;</mat-checkbox>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</td>\r\n\r\n\t\t\t\t\t\t\t\t\t<td class=\"text-center\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"action-button\">\r\n\t\t\t\t\t\t\t\t\t\t\t<mat-checkbox id=\"logding{{i}}\" name=\"logding{{i}}\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"data.logding\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t[checked]=\"data.logding == '1' ? true : ''\">&nbsp;</mat-checkbox>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</td>\r\n\r\n\t\t\t\t\t\t\t\t\t<td class=\"text-center\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"action-button\">\r\n\t\t\t\t\t\t\t\t\t\t\t<mat-checkbox id=\"boarding{{i}}\" name=\"boarding{{i}}\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"data.boarding\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t[checked]=\"data.boarding == '1' ? true : ''\">&nbsp;</mat-checkbox>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</td>\r\n\r\n\t\t\t\t\t\t\t\t\t<td class=\"text-center\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"action-button\">\r\n\t\t\t\t\t\t\t\t\t\t\t<mat-checkbox id=\"tolltax{{i}}\" name=\"tolltax{{i}}\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"data.tolltax\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t[checked]=\"data.tolltax == '1' ? true : ''\">&nbsp;</mat-checkbox>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t\t\t<td class=\"text-center\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"action-button\">\r\n\t\t\t\t\t\t\t\t\t\t\t<mat-checkbox id=\"miscellaneous{{i}}\" name=\"miscellaneous{{i}}\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"data.miscellaneous\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t[checked]=\"data.miscellaneous == '1' ? true : ''\">&nbsp;</mat-checkbox>\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</td>\r\n\r\n\r\n\r\n\t\t\t\t\t\t\t\t\t<td class=\"text-center\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"fix-input\">\r\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" name=\"car{{i}}\" [(ngModel)]=\"data.car\"\r\n\t\t\t\t\t\t\t\t\t\t\t\tvalue=\"{{data.car}}\">\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t\t\t<td class=\"text-center\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"fix-input\">\r\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" name=\"bike{{i}}\" [(ngModel)]=\"data.bike\"\r\n\t\t\t\t\t\t\t\t\t\t\t\tvalue=\"{{data.bike}}\">\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</td>\r\n\r\n\t\t\t\t\t\t\t\t\t<td class=\"text-center\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"fix-input\">\r\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" name=\"LoadgingAllowanceMetro{{i}}\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"data.LoadgingAllowanceMetro\" value=\"{{data.LoadgingAllowanceMetro}}\">\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t\t\t<td class=\"text-center\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"fix-input\">\r\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" name=\"LoadgingAllowanceAclass{{i}}\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"data.LoadgingAllowanceAclass\" value=\"{{data.LoadgingAllowanceAclass}}\">\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t\t\t<td class=\"text-center\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"fix-input\">\r\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" name=\"LoadgingAllowance{{i}}\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"data.LoadgingAllowance\" value=\"{{data.LoadgingAllowance}}\">\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</td>\r\n\r\n\t\t\t\t\t\t\t\t\t<td class=\"text-center\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"fix-input\">\r\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" name=\"BoardingAllowanceMetro{{i}}\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"data.BoardingAllowanceMetro\" value=\"{{data.BoardingAllowanceMetro}}\">\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t\t\t<td class=\"text-center\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"fix-input\">\r\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" name=\"BoardingAllowanceAclass{{i}}\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"data.BoardingAllowanceAclass\" value=\"{{data.BoardingAllowanceAclass}}\">\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t\t\t<td class=\"text-center\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"fix-input\">\r\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" name=\"BoardingAllowance{{i}}\"\r\n\t\t\t\t\t\t\t\t\t\t\t\t[(ngModel)]=\"data.BoardingAllowance\" value=\"{{data.BoardingAllowance}}\">\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</td>\r\n\r\n\t\t\t\t\t\t\t\t\t<td class=\"text-center\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"fix-input\">\r\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" name=\"OOPAllowanceMetro{{i}}\" [(ngModel)]=\"data.OOPAllowanceMetro\"\r\n\t\t\t\t\t\t\t\t\t\t\t\tvalue=\"{{data.OOPAllowanceMetro}}\">\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t\t\t<td class=\"text-center\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"fix-input\">\r\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" name=\"OOPAllowanceAclass{{i}}\" [(ngModel)]=\"data.OOPAllowanceAclass\"\r\n\t\t\t\t\t\t\t\t\t\t\t\tvalue=\"{{data.OOPAllowanceAclass}}\">\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t\t\t<td class=\"text-center\">\r\n\t\t\t\t\t\t\t\t\t\t<div class=\"fix-input\">\r\n\t\t\t\t\t\t\t\t\t\t\t<input type=\"text\" name=\"OOPAllowance{{i}}\" [(ngModel)]=\"data.OOPAllowance\"\r\n\t\t\t\t\t\t\t\t\t\t\t\tvalue=\"{{data.OOPAllowance}}\">\r\n\t\t\t\t\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t\t\t\t</td>\r\n\t\t\t\t\t\t\t\t</tr>\r\n\t\t\t\t\t\t\t</table>\r\n\t\t\t\t\t\t</td>\r\n\t\t\t\t\t</tr>\r\n\t\t\t\t</table>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t</div>\r\n\r\n\r\n\t<div class=\"fab-btns\">\r\n\t\t<button mat-fab color=\"accent\" (click)=\"updateAllowance()\" class=\"pulse\"\r\n\t\t\t[ngClass]=\"{'loading': skLoading == true}\" [disabled]=\"skLoading\"\r\n\t\t\t*ngIf=\"allowanceData.length > 0 && logined_user_data2.edit_allowance_master=='1'\">\r\n\t\t\t<i class=\"material-icons\">update</i>\r\n\t\t\tUpdate\r\n\t\t</button>\r\n\t\t<button class=\"pulse excel\" mat-fab color=\"primary\" (click)=\"getAlllowanceExcel()\"\r\n\t\t\t*ngIf=\"allowanceData.length > 0 && logined_user_data2.export_allowance_master=='1'\">\r\n\t\t\t<mat-icon>download</mat-icon>\r\n\t\t\tDownload in excel\r\n\t\t</button>\r\n\t</div>\r\n</div>"

/***/ }),

/***/ "./src/app/allowances/allowances.component.scss":
/*!******************************************************!*\
  !*** ./src/app/allowances/allowances.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".input-check {\n  line-height: 0px;\n}\n\n.padding-tb0 {\n  padding-top: 0 !important;\n  padding-bottom: 0px !important;\n}\n\n.text-center {\n  white-space: nowrap;\n}\n\ninput[type=number] {\n  width: calc(100% - 10px);\n  text-align: left;\n  height: 20px;\n  padding: 0px 5px;\n  background: #f1f1f1;\n  border: 1px solid #ccc;\n  box-sizing: border-box;\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n\n.input-check input[type=checkbox] {\n  width: 15px;\n  height: 15px;\n  margin-top: 0px;\n  cursor: pointer;\n}\n\n.scroll-tables {\n  overflow: auto;\n  max-height: calc(100vh - 220px);\n  border-radius: 4px;\n}\n\n.scroll-tables table table tr:nth-child(1) th,\n.scroll-tables table table tr:nth-child(2) th {\n  position: sticky;\n  background: #fff;\n  z-index: 3;\n}\n\n.scroll-tables table table tr:nth-child(1) th {\n  top: 0;\n  height: 34px;\n}\n\n.scroll-tables table table tr:nth-child(2) th {\n  top: 34px;\n}\n\n.scroll-tables > table > tbody > tr > td:first-child {\n  position: sticky;\n  left: 0;\n  background: #fff;\n  z-index: 2;\n}\n\n.scroll-tables > table > tbody > tr > td:first-child table tr:nth-child(1) th,\n.scroll-tables > table > tbody > tr > td:first-child table tr:nth-child(2) th {\n  z-index: 4;\n}\n\n.spaceCss td {\n  padding: 11px;\n}\n\n.row-edited td {\n  background: #fff3cd !important;\n}"

/***/ }),

/***/ "./src/app/allowances/allowances.component.ts":
/*!****************************************************!*\
  !*** ./src/app/allowances/allowances.component.ts ***!
  \****************************************************/
/*! exports provided: AllowancesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AllowancesComponent", function() { return AllowancesComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_services_DatabaseService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/_services/DatabaseService */ "./src/_services/DatabaseService.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _localstorage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../localstorage.service */ "./src/app/localstorage.service.ts");
/* harmony import */ var _dialog_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../dialog.component */ "./src/app/dialog.component.ts");
/* harmony import */ var ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng6-toastr-notifications */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/ng6-toastr-notifications/fesm5/ng6-toastr-notifications.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/material/esm5/material.es5.js");









var AllowancesComponent = /** @class */ (function () {
    function AllowancesComponent(serve, toast, navparams, dialog2, dialog, location, session) {
        this.serve = serve;
        this.toast = toast;
        this.navparams = navparams;
        this.dialog2 = dialog2;
        this.dialog = dialog;
        this.location = location;
        this.session = session;
        this.userRoleData = [];
        this.allowanceData = [];
        this.skLoading = false;
        this.downurl = '';
        this.fixedAllowance = '';
        this.assign_login_data = this.session.getSession();
        this.logined_user_data = this.assign_login_data.value;
        this.logined_user_data2 = this.logined_user_data.data;
        console.log(this.logined_user_data2);
        this.downurl = serve.downloadUrl;
        this.get_designation();
        this.get_allowance();
    }
    AllowancesComponent.prototype.ngOnInit = function () {
    };
    AllowancesComponent.prototype.get_designation = function () {
        var _this = this;
        this.serve.post_rqst({ 'designation': this.designation }, "Master/salesType").subscribe((function (response) {
            if (response['sales']['statusCode'] == 200) {
                _this.userRoleData = response['sales']['result'];
                _this.get_allowance();
            }
            else {
                _this.toast.errorToastr(response['sales']['statusMsg']);
            }
        }));
    };
    AllowancesComponent.prototype.get_allowance = function () {
        var _this = this;
        this.loader = 1;
        this.serve.post_rqst({ 'designation': this.designation }, "Master/getAllowanceData").subscribe((function (response) {
            if (response['allowance']['statusCode'] == 200) {
                _this.allowanceData = response['allowance']['result'];
                _this.fixedAllowance = _this.allowanceData[0].fixedAllowance;
                console.log(_this.fixedAllowance);
                for (var i = 0; i < _this.userRoleData.length; i++) {
                    for (var j = 0; j < _this.allowanceData.length; j++) {
                        if (_this.userRoleData[i]['id'] == _this.allowanceData[j]['roleId']) {
                            _this.userRoleData[i]['flight'] = _this.allowanceData[j]['flight'];
                            _this.userRoleData[i]['trainSC'] = _this.allowanceData[j]['trainSC'];
                            _this.userRoleData[i]['logding'] = _this.allowanceData[j]['logding'];
                            _this.userRoleData[i]['boarding'] = _this.allowanceData[j]['boarding'];
                            _this.userRoleData[i]['tolltax'] = _this.allowanceData[j]['tolltax'];
                            _this.userRoleData[i]['miscellaneous'] = _this.allowanceData[j]['miscellaneous'];
                            _this.userRoleData[i]['busAC'] = _this.allowanceData[j]['busAC'];
                            _this.userRoleData[i]['auto'] = _this.allowanceData[j]['auto'];
                            _this.userRoleData[i]['taxi'] = _this.allowanceData[j]['taxi'];
                            _this.userRoleData[i]['car'] = _this.allowanceData[j]['car'];
                            _this.userRoleData[i]['bike'] = _this.allowanceData[j]['bike'];
                            _this.userRoleData[i]['LoadgingAllowance'] = _this.allowanceData[j]['LoadgingAllowance'];
                            _this.userRoleData[i]['BoardingAllowance'] = _this.allowanceData[j]['BoardingAllowance'];
                            _this.userRoleData[i]['OOPAllowance'] = _this.allowanceData[j]['OOPAllowance'];
                            _this.userRoleData[i]['OOPAllowanceMetro'] = _this.allowanceData[j]['OOPAllowanceMetro'];
                            _this.userRoleData[i]['OOPAllowanceAclass'] = _this.allowanceData[j]['OOPAllowanceAclass'];
                            _this.userRoleData[i]['LoadgingAllowanceMetro'] = _this.allowanceData[j]['LoadgingAllowanceMetro'];
                            _this.userRoleData[i]['LoadgingAllowanceAclass'] = _this.allowanceData[j]['LoadgingAllowanceAclass'];
                            _this.userRoleData[i]['BoardingAllowanceMetro'] = _this.allowanceData[j]['BoardingAllowanceMetro'];
                            _this.userRoleData[i]['BoardingAllowanceAclass'] = _this.allowanceData[j]['BoardingAllowanceAclass'];
                            _this.userRoleData[i]['hotel'] = _this.allowanceData[j]['hotel'];
                            _this.userRoleData[i]['metro'] = _this.allowanceData[j]['metro'];
                            _this.userRoleData[i]['food'] = _this.allowanceData[j]['food'];
                        }
                    }
                }
                setTimeout(function () {
                    _this.loader = '';
                }, 1000);
            }
            else {
                _this.toast.errorToastr(response['allowance']['statusMsg']);
            }
        }));
    };
    AllowancesComponent.prototype.refresh = function () {
        this.get_allowance();
    };
    AllowancesComponent.prototype.updateAllowance = function () {
        var _this = this;
        for (var i = 0; i < this.userRoleData.length; i++) {
            for (var j = 0; j < this.allowanceData.length; j++) {
                if (this.userRoleData[i]['id'] == this.allowanceData[j]['roleId']) {
                    this.userRoleData[i]['flight'] = this.allowanceData[j]['flight'];
                    this.userRoleData[i]['trainSC'] = this.allowanceData[j]['trainSC'];
                    this.userRoleData[i]['name'] = this.allowanceData[j]['name'];
                    this.userRoleData[i]['logding'] = this.allowanceData[j]['logding'];
                    this.userRoleData[i]['boarding'] = this.allowanceData[j]['boarding'];
                    this.userRoleData[i]['tolltax'] = this.allowanceData[j]['tolltax'];
                    this.userRoleData[i]['miscellaneous'] = this.allowanceData[j]['miscellaneous'];
                    this.userRoleData[i]['busAC'] = this.allowanceData[j]['busAC'];
                    this.userRoleData[i]['auto'] = this.allowanceData[j]['auto'];
                    this.userRoleData[i]['taxi'] = this.allowanceData[j]['taxi'];
                    this.userRoleData[i]['car'] = this.allowanceData[j]['car'];
                    this.userRoleData[i]['bike'] = this.allowanceData[j]['bike'];
                    this.userRoleData[i]['BoardingAllowance'] = this.allowanceData[j]['BoardingAllowance'];
                    this.userRoleData[i]['LoadgingAllowance'] = this.allowanceData[j]['LoadgingAllowance'];
                    this.userRoleData[i]['LoadgingAllowanceMetro'] = this.allowanceData[j]['LoadgingAllowanceMetro'];
                    this.userRoleData[i]['LoadgingAllowanceAclass'] = this.allowanceData[j]['LoadgingAllowanceAclass'];
                    this.userRoleData[i]['BoardingAllowanceMetro'] = this.allowanceData[j]['BoardingAllowanceMetro'];
                    this.userRoleData[i]['BoardingAllowanceAclass'] = this.allowanceData[j]['BoardingAllowanceAclass'];
                    this.userRoleData[i]['OOPAllowance'] = parseFloat(this.allowanceData[j]['OOPAllowance']);
                    this.userRoleData[i]['OOPAllowanceMetro'] = parseFloat(this.allowanceData[j]['OOPAllowanceMetro']);
                    this.userRoleData[i]['OOPAllowanceAclass'] = parseFloat(this.allowanceData[j]['OOPAllowanceAclass']);
                    this.userRoleData[i]['hotel'] = this.allowanceData[j]['hotel'];
                    this.userRoleData[i]['metro'] = this.allowanceData[j]['metro'];
                    this.userRoleData[i]['food'] = this.allowanceData[j]['food'];
                    this.userRoleData[i]['fixedAllowance'] = this.allowanceData[j]['fixedAllowance'];
                }
            }
        }
        this.skLoading = true;
        this.dialog.confirm("Update Allowance !").then(function (result) {
            if (result) {
                _this.serve.post_rqst({ 'data': _this.userRoleData }, "Master/updateAllowance").subscribe(function (response) {
                    if (response['allowance']['statusCode'] == 200) {
                        _this.toast.successToastr(response['allowance']['statusMsg']);
                        _this.skLoading = false;
                        _this.get_allowance();
                    }
                    else {
                        _this.skLoading = false;
                        _this.toast.errorToastr(response['allowance']['statusMsg']);
                    }
                }, function (err) {
                    _this.skLoading = false;
                });
            }
            else {
                _this.skLoading = false;
            }
        });
    };
    AllowancesComponent.prototype.getAlllowanceExcel = function () {
        var _this = this;
        this.loader = true;
        this.serve.post_rqst({ 'designation': this.designation }, "Excel/allownceCsv").subscribe(function (result) {
            if (result['msg'] == true) {
                window.open(_this.downurl + result['filename']);
                _this.get_allowance();
            }
        });
    };
    AllowancesComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-allowances',
            template: __webpack_require__(/*! ./allowances.component.html */ "./src/app/allowances/allowances.component.html"),
            styles: [__webpack_require__(/*! ./allowances.component.scss */ "./src/app/allowances/allowances.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_services_DatabaseService__WEBPACK_IMPORTED_MODULE_2__["DatabaseService"], ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_7__["ToastrManager"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatDialog"], _dialog_component__WEBPACK_IMPORTED_MODULE_6__["DialogComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"], _localstorage_service__WEBPACK_IMPORTED_MODULE_5__["sessionStorage"]])
    ], AllowancesComponent);
    return AllowancesComponent;
}());



/***/ })

}]);