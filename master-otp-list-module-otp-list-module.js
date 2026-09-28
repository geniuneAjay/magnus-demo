(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["master-otp-list-module-otp-list-module"],{

/***/ "./src/app/master/otp-list-module/otp-list.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/master/otp-list-module/otp-list.module.ts ***!
  \***********************************************************/
/*! exports provided: OtpListModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OtpListModule", function() { return OtpListModule; });
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
/* harmony import */ var _otp_list_otp_list_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../otp-list/otp-list.component */ "./src/app/master/otp-list/otp-list.component.ts");













var otpRoutes = [
    {
        path: "", children: [
            { path: "", component: _otp_list_otp_list_component__WEBPACK_IMPORTED_MODULE_12__["OtpListComponent"], canActivate: [src_app_auth_component_guard__WEBPACK_IMPORTED_MODULE_11__["AuthComponentGuard"]], data: { expectedRole: ['1'] } },
        ]
    }
];
var OtpListModule = /** @class */ (function () {
    function OtpListModule() {
    }
    OtpListModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_otp_list_otp_list_component__WEBPACK_IMPORTED_MODULE_12__["OtpListComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild(otpRoutes),
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
        })
    ], OtpListModule);
    return OtpListModule;
}());



/***/ }),

/***/ "./src/app/master/otp-list/otp-list.component.html":
/*!*********************************************************!*\
  !*** ./src/app/master/otp-list/otp-list.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-container\">\r\n  <div class=\"tools-container\">\r\n    <h2>App OTP Log</h2>\r\n    <div class=\"left-auto left-auto df ac flex-gap-10\">\r\n      <button mat-icon-button matTooltip=\"Refresh\" (click)=\"refresh()\">\r\n        <i class=\"material-icons\">refresh</i>\r\n      </button>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"container container-scroll\">\r\n    <div class=\"cs-table\">\r\n      <div class=\"sticky-head\" style=\"top: 0px;\">\r\n        <div class=\"table-head\">\r\n          <table>\r\n            <tr>\r\n              <th class=\"w50\">S.no.</th>\r\n              <th class=\"w150\">Date Created</th>\r\n              <th class=\"w150\">Mobile</th>\r\n              <th class=\"w150\">OTP</th>\r\n            </tr>\r\n          </table>\r\n        </div>\r\n\r\n        <div class=\"table-head bdrt\">\r\n          <table>\r\n            <tr>\r\n              <th class=\"w50\"></th>\r\n              <th class=\"w150\"></th>\r\n              <th class=\"w150\">\r\n                <div class=\"th-search-acmt\">\r\n                  <mat-form-field class=\"example-full-width cs-input select-input\">\r\n                    <input matInput placeholder=\"Mobile No. Search\" name=\"mobile\" [(ngModel)]=\"filter.mobile\"\r\n                      (keyup.enter)=\"getOtpList()\">\r\n                  </mat-form-field>\r\n                </div>\r\n              </th>\r\n              <th class=\"w150\"></th>\r\n            </tr>\r\n          </table>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"table-container\">\r\n        <div class=\"table-content\">\r\n          <table>\r\n            <ng-container *ngIf=\"!loader\">\r\n              <tr *ngFor=\"let row of otp_list; let i = index;\">\r\n                <td class=\"w50\">{{i + 1}}</td>\r\n                <td class=\"w150\">{{row.date_created | date : 'dd MMM yyyy, hh:mm a'}}</td>\r\n                <td class=\"w150\">{{row.mobile}}</td>\r\n                <td class=\"w150\"><strong>{{row.otp}}</strong></td>\r\n              </tr>\r\n            </ng-container>\r\n\r\n            <ng-container *ngIf=\"loader\">\r\n              <tr class=\"sk-loading\" *ngFor=\"let row of [].constructor(10)\">\r\n                <td class=\"w50\">\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n                <td class=\"w150\">\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n                <td class=\"w150\">\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n                <td class=\"w150\">\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n              </tr>\r\n            </ng-container>\r\n          </table>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <ng-container *ngIf=\"data_not_found\">\r\n      <div class=\"app-data-not-found\">\r\n        <div class=\"app-data-not-found-body\">\r\n          <img src=\"assets/img/data-not-found.svg\" alt=\"Data Not Found\">\r\n          <p>No Data Found</p>\r\n        </div>\r\n      </div>\r\n    </ng-container>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/master/otp-list/otp-list.component.scss":
/*!*********************************************************!*\
  !*** ./src/app/master/otp-list/otp-list.component.scss ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/master/otp-list/otp-list.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/master/otp-list/otp-list.component.ts ***!
  \*******************************************************/
/*! exports provided: OtpListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OtpListComponent", function() { return OtpListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_services_DatabaseService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/_services/DatabaseService */ "./src/_services/DatabaseService.ts");
/* harmony import */ var ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng6-toastr-notifications */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/ng6-toastr-notifications/fesm5/ng6-toastr-notifications.js");
/* harmony import */ var src_app_localstorage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/localstorage.service */ "./src/app/localstorage.service.ts");





var OtpListComponent = /** @class */ (function () {
    function OtpListComponent(serve, toast, session) {
        this.serve = serve;
        this.toast = toast;
        this.session = session;
        this.loader = false;
        this.otp_list = [];
        this.start = 0;
        this.pagelimit = 50;
        this.filter = {};
        this.data_not_found = false;
    }
    OtpListComponent.prototype.ngOnInit = function () {
        this.getOtpList();
    };
    OtpListComponent.prototype.getOtpList = function () {
        var _this = this;
        this.loader = true;
        var requestData = {
            "filter": this.filter,
            "start": this.start,
            "pagelimit": this.pagelimit
        };
        this.serve.post_rqst(requestData, "Master/otpList").subscribe((function (result) {
            _this.loader = false;
            if (result['statusCode'] == 200) {
                _this.otp_list = result['otp_list'];
                _this.count = result['count'];
                if (_this.otp_list.length == 0) {
                    _this.data_not_found = true;
                }
                else {
                    _this.data_not_found = false;
                }
            }
            else {
                _this.toast.errorToastr(result['statusMsg']);
            }
        }));
    };
    OtpListComponent.prototype.refresh = function () {
        this.filter = {};
        this.start = 0;
        this.getOtpList();
    };
    OtpListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-otp-list',
            template: __webpack_require__(/*! ./otp-list.component.html */ "./src/app/master/otp-list/otp-list.component.html"),
            styles: [__webpack_require__(/*! ./otp-list.component.scss */ "./src/app/master/otp-list/otp-list.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_services_DatabaseService__WEBPACK_IMPORTED_MODULE_2__["DatabaseService"],
            ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_3__["ToastrManager"],
            src_app_localstorage_service__WEBPACK_IMPORTED_MODULE_4__["sessionStorage"]])
    ], OtpListComponent);
    return OtpListComponent;
}());



/***/ })

}]);