(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["order-secondary-order-module-secondary-order-module"],{

/***/ "./src/app/order/secondary-order-module/secondary-order.module.ts":
/*!************************************************************************!*\
  !*** ./src/app/order/secondary-order-module/secondary-order.module.ts ***!
  \************************************************************************/
/*! exports provided: SecondaryOrderModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SecondaryOrderModule", function() { return SecondaryOrderModule; });
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
/* harmony import */ var src_app_auth_component_guard__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/auth-component.guard */ "./src/app/auth-component.guard.ts");
/* harmony import */ var src_app_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/material */ "./src/app/material.ts");
/* harmony import */ var _secondary_order_list_secondary_order_list_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../secondary-order-list/secondary-order-list.component */ "./src/app/order/secondary-order-list/secondary-order-list.component.ts");
/* harmony import */ var _secondary_order_detail_secondary_order_detail_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../secondary-order-detail/secondary-order-detail.component */ "./src/app/order/secondary-order-detail/secondary-order-detail.component.ts");
/* harmony import */ var _secondary_order_add_secondary_order_add_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../secondary-order-add/secondary-order-add.component */ "./src/app/order/secondary-order-add/secondary-order-add.component.ts");
/* harmony import */ var src_app_site_site_detail_site_detail_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/app/site/site-detail/site-detail.component */ "./src/app/site/site-detail/site-detail.component.ts");
















// import { Crypto } from 'src/_Pipes/Crypto.pipe';
var secondaryOrdersRoutes = [
    {
        path: "", children: [
            { path: "", component: _secondary_order_list_secondary_order_list_component__WEBPACK_IMPORTED_MODULE_12__["SecondaryOrderListComponent"], canActivate: [src_app_auth_component_guard__WEBPACK_IMPORTED_MODULE_10__["AuthComponentGuard"]], data: { expectedRole: ['1'] } },
            { path: "secondary-order-detail/:id", component: _secondary_order_detail_secondary_order_detail_component__WEBPACK_IMPORTED_MODULE_13__["SecondaryOrderDetailComponent"], canActivate: [src_app_auth_component_guard__WEBPACK_IMPORTED_MODULE_10__["AuthComponentGuard"]], data: { expectedRole: ['1'] } },
            { path: "stock-order", component: _secondary_order_list_secondary_order_list_component__WEBPACK_IMPORTED_MODULE_12__["SecondaryOrderListComponent"], canActivate: [src_app_auth_component_guard__WEBPACK_IMPORTED_MODULE_10__["AuthComponentGuard"]], data: { expectedRole: ['1'] } },
            { path: "secondary-order-add", component: _secondary_order_add_secondary_order_add_component__WEBPACK_IMPORTED_MODULE_14__["SecondaryOrderAddComponent"], canActivate: [src_app_auth_component_guard__WEBPACK_IMPORTED_MODULE_10__["AuthComponentGuard"]], data: { expectedRole: ['1'] } },
            { path: 'lead-list/lead-detail/:id', component: src_app_site_site_detail_site_detail_component__WEBPACK_IMPORTED_MODULE_15__["SiteDetailComponent"], canActivate: [src_app_auth_component_guard__WEBPACK_IMPORTED_MODULE_10__["AuthComponentGuard"]], data: { expectedRole: ['1'] } },
            {
                path: 'stock-order', children: [
                    { path: 'secondary-order-detail/:id', component: _secondary_order_detail_secondary_order_detail_component__WEBPACK_IMPORTED_MODULE_13__["SecondaryOrderDetailComponent"], canActivate: [src_app_auth_component_guard__WEBPACK_IMPORTED_MODULE_10__["AuthComponentGuard"]], data: { expectedRole: ['1'] } },
                ]
            }
        ]
    },
];
var SecondaryOrderModule = /** @class */ (function () {
    function SecondaryOrderModule() {
    }
    SecondaryOrderModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
            // SecondaryOrderListComponent,
            // SecondaryOrderDetailComponent,
            // SecondaryOrderAddComponent,
            // Crypto
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild(secondaryOrdersRoutes),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_7__["NgMultiSelectDropDownModule"],
                src_app_material__WEBPACK_IMPORTED_MODULE_11__["MaterialModule"],
                angular_ng_autocomplete__WEBPACK_IMPORTED_MODULE_6__["AutocompleteLibModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialogModule"],
                ngx_mat_select_search__WEBPACK_IMPORTED_MODULE_8__["NgxMatSelectSearchModule"],
                src_app_app_utility_module__WEBPACK_IMPORTED_MODULE_9__["AppUtilityModule"]
            ]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SecondaryOrderModule);
    return SecondaryOrderModule;
}());



/***/ })

}]);