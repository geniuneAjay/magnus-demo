(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["point-master-point-master-point-master-module"],{

/***/ "./src/app/point-master/point-master.component.html":
/*!**********************************************************!*\
  !*** ./src/app/point-master/point-master.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<div class=\"main-container\" >\r\n  <div class=\"tools-container\">\r\n    <h2>Point Master Details</h2>\r\n  </div>\r\n\r\n  <div class=\"container pt10 pl10 pr10 pb50\" >\r\n    <form #f=\"ngForm\" (ngSubmit)=\" f.valid && submitDetail()\">\r\n      <div class=\"row\">\r\n        <div class=\"col s12\">\r\n          <div class=\"card pb0\">\r\n            <div class=\"card-head\">\r\n              <h2>Update Point</h2>\r\n            </div>\r\n            <div class=\"card-body cs-form\">\r\n              <div class=\"row\">\r\n                <div class=\"col s12 m3 l3\" >\r\n                  <mat-form-field  appearance=\"outline\">\r\n                    <mat-label>Welcome Point</mat-label>\r\n                    <input matInput placeholder=\"Type Here ...\"  name=\"welcome_point\" #welcome_point=\"ngModel\"\r\n                    [(ngModel)]=\"data.welcome_point\"  (keypress)=\"MobileNumber($event)\" required>\r\n                  </mat-form-field>\r\n                  <div class=\"alert alert-danger\" *ngIf=\"welcome_point.touched || f.submitted\">\r\n                    <p *ngIf=\"welcome_point.errors?.required\">This field is required</p>\r\n                  </div>\r\n                </div>\r\n                <div class=\"col s12 m3 l3\" >\r\n                  <mat-form-field  appearance=\"outline\">\r\n                    <mat-label>Birthday Point</mat-label>\r\n                    <input matInput placeholder=\"Type Here ...\"  name=\"birthday_point\" #birthday_point=\"ngModel\"\r\n                    [(ngModel)]=\"data.birthday_point\"  (keypress)=\"MobileNumber($event)\" required>\r\n                  </mat-form-field>\r\n                  <div class=\"alert alert-danger\" *ngIf=\"birthday_point.touched || f.submitted\">\r\n                    <p *ngIf=\"birthday_point.errors?.required\">This field is required</p>\r\n                  </div>\r\n                </div>\r\n                <div class=\"col s12 m3 l3\" >\r\n                  <mat-form-field  appearance=\"outline\">\r\n                    <mat-label>Anniversary Point</mat-label>\r\n                    <input matInput placeholder=\"Type Here ...\"  name=\"anniversary_point\" #anniversary_point=\"ngModel\"\r\n                    [(ngModel)]=\"data.anniversary_point\"  (keypress)=\"MobileNumber($event)\" required>\r\n                  </mat-form-field>\r\n                  <div class=\"alert alert-danger\" *ngIf=\"anniversary_point.touched || f.submitted\">\r\n                    <p *ngIf=\"anniversary_point.errors?.required\">This field is required</p>\r\n                  </div>\r\n                </div>\r\n\r\n                <div class=\"col s12 m3 l3\" >\r\n                  <mat-form-field  appearance=\"outline\">\r\n                    <mat-label>Registration Referral Point</mat-label>\r\n                    <input matInput placeholder=\"Type Here ...\"  name=\"registration_refferal\" #registration_refferal=\"ngModel\"\r\n                    [(ngModel)]=\"data.registration_refferal\"  (keypress)=\"MobileNumber($event)\" required>\r\n                  </mat-form-field>\r\n                  <div class=\"alert alert-danger\" *ngIf=\"registration_refferal.touched || f.submitted\">\r\n                    <p *ngIf=\"registration_refferal.errors?.required\">This field is required</p>\r\n                  </div>\r\n                </div>\r\n\r\n              </div>\r\n              <div class=\"row\">\r\n                <div class=\"col s12 m3 l3\" >\r\n                  <mat-form-field  appearance=\"outline\">\r\n                    <mat-label>Transaction incentive Point</mat-label>\r\n                    <input matInput placeholder=\"Type Here ...\"  name=\"transaction_incentive\" #transaction_incentive=\"ngModel\"\r\n                    [(ngModel)]=\"data.transaction_incentive\"  (keypress)=\"MobileNumber($event)\" required>\r\n                  </mat-form-field>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"row\">\r\n        <div class=\"col s12\">\r\n          <div class=\"text-right\">\r\n            <button [ngClass]=\"{'loading': savingFlag == true}\" mat-raised-button color=\"accent\" type=\"submit\" [disabled]=\"savingFlag == true\">\r\n              {{savingFlag == true ? 'Saving' : (data.id ? 'Update' : 'Save')}}\r\n            </button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n    </form>\r\n  </div>\r\n</div>\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/point-master/point-master.component.ts":
/*!********************************************************!*\
  !*** ./src/app/point-master/point-master.component.ts ***!
  \********************************************************/
/*! exports provided: PointMasterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PointMasterComponent", function() { return PointMasterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_services_DatabaseService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/_services/DatabaseService */ "./src/_services/DatabaseService.ts");
/* harmony import */ var ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng6-toastr-notifications */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/ng6-toastr-notifications/fesm5/ng6-toastr-notifications.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/router/fesm5/router.js");





var PointMasterComponent = /** @class */ (function () {
    function PointMasterComponent(service, rout, toast) {
        this.service = service;
        this.rout = rout;
        this.toast = toast;
        this.data = {};
        this.savingFlag = false;
        this.userData = JSON.parse(localStorage.getItem('st_user'));
        this.userId = this.userData['data']['id'];
        this.userName = this.userData['data']['name'];
        this.pointCategory_data();
    }
    PointMasterComponent.prototype.ngOnInit = function () {
    };
    PointMasterComponent.prototype.pointCategory_data = function () {
        var _this = this;
        this.service.post_rqst({}, 'Master/pointMasterDetail').subscribe(function (resp) {
            if (resp['statusCode'] == 200) {
                _this.data.welcome_point = resp['point_master_detail']['welcome_point'];
                _this.data.id = resp['point_master_detail']['id'];
                _this.data.anniversary_point = resp['point_master_detail']['anniversary_point'];
                _this.data.birthday_point = resp['point_master_detail']['birthday_point'];
                _this.data.registration_refferal = resp['point_master_detail']['registration_refferal'];
                _this.data.transaction_incentive = resp['point_master_detail']['transaction_incentive'];
            }
            else {
                _this.toast.errorToastr(resp['statusMsg']);
            }
        });
    };
    PointMasterComponent.prototype.MobileNumber = function (event) {
        var pattern = /[0-9\+\-\ ]/;
        var inputChar = String.fromCharCode(event.charCode);
        if (event.keyCode != 8 && !pattern.test(inputChar)) {
            event.preventDefault();
        }
    };
    PointMasterComponent.prototype.submitDetail = function () {
        var _this = this;
        this.data.created_by_name = this.userName;
        this.data.created_by_id = this.userId;
        this.savingFlag = true;
        this.service.post_rqst(this.data, 'Master/pointMasterAdd').subscribe(function (resp) {
            if (resp['statusCode'] == 200) {
                _this.toast.successToastr(resp['statusMsg']);
                _this.savingFlag = false;
            }
            else {
                _this.toast.errorToastr(resp['statusMsg']);
                _this.savingFlag = false;
            }
        });
    };
    PointMasterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-point-master',
            template: __webpack_require__(/*! ./point-master.component.html */ "./src/app/point-master/point-master.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_services_DatabaseService__WEBPACK_IMPORTED_MODULE_2__["DatabaseService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_3__["ToastrManager"]])
    ], PointMasterComponent);
    return PointMasterComponent;
}());



/***/ }),

/***/ "./src/app/point-master/point-master/point-master.module.ts":
/*!******************************************************************!*\
  !*** ./src/app/point-master/point-master/point-master.module.ts ***!
  \******************************************************************/
/*! exports provided: PointMasterModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PointMasterModule", function() { return PointMasterModule; });
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
/* harmony import */ var _point_master_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../point-master.component */ "./src/app/point-master/point-master.component.ts");













var pointMasterRoutes = [
    { path: "", component: _point_master_component__WEBPACK_IMPORTED_MODULE_12__["PointMasterComponent"], canActivate: [src_app_auth_component_guard__WEBPACK_IMPORTED_MODULE_11__["AuthComponentGuard"]], data: { expectedRole: ['1'] } },
];
var PointMasterModule = /** @class */ (function () {
    function PointMasterModule() {
    }
    PointMasterModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_point_master_component__WEBPACK_IMPORTED_MODULE_12__["PointMasterComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild(pointMasterRoutes),
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
    ], PointMasterModule);
    return PointMasterModule;
}());



/***/ })

}]);