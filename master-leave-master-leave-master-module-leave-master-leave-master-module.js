(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["master-leave-master-leave-master-module-leave-master-leave-master-module"],{

/***/ "./src/app/master/leave-master/leave-master-add/leave-master-add.component.html":
/*!**************************************************************************************!*\
  !*** ./src/app/master/leave-master/leave-master-add/leave-master-add.component.html ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"edit-modal\">\r\n  <form name=\"detail\" #f=\"ngForm\" (ngSubmit)=\" f.valid && submitDetail(type)\">\r\n    <p class=\"heading\">Add New Designation</p>\r\n    <div mat-dialog-content>\r\n      <div class=\"cs-form\">\r\n        <div class=\"row\">\r\n          <div class=\"col s12 l6 m6\">\r\n            <mat-form-field appearance=\"outline\">\r\n              <mat-label>Title</mat-label>\r\n              <input matInput placeholder=\"Type Here ...\" name=\"title\" #title=\"ngModel\" [(ngModel)]=\"info.title\"\r\n                required>\r\n            </mat-form-field>\r\n            <div class=\"alert alert-danger\" *ngIf=\"title.touched || f.submitted\">\r\n              <p *ngIf=\"title.errors?.required\">This field is required</p>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"col s12 l6 m6\">\r\n            <mat-form-field appearance=\"outline\">\r\n              <mat-label>Count</mat-label>\r\n              <input type=\"number\" matInput placeholder=\"Type Here ...\" name=\"count\" #count=\"ngModel\"\r\n                [(ngModel)]=\"info.count\" required>\r\n            </mat-form-field>\r\n            <div class=\"alert alert-danger\" *ngIf=\"count.touched || f.submitted\">\r\n              <p *ngIf=\"count.errors?.required\">This field is required</p>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div mat-dialog-actions>\r\n      <button mat-stroked-button color=\"warn\" [mat-dialog-close]=\"false\">Cancel</button>\r\n      <button [ngClass]=\"{'loading': savingFlag == true}\" mat-raised-button color=\"accent\" type=\"submit\"\r\n        [disabled]=\"savingFlag == true\">{{savingFlag == true ? 'Saving' : 'Save'}}</button>\r\n    </div>\r\n  </form>\r\n</div>"

/***/ }),

/***/ "./src/app/master/leave-master/leave-master-add/leave-master-add.component.scss":
/*!**************************************************************************************!*\
  !*** ./src/app/master/leave-master/leave-master-add/leave-master-add.component.scss ***!
  \**************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/master/leave-master/leave-master-add/leave-master-add.component.ts":
/*!************************************************************************************!*\
  !*** ./src/app/master/leave-master/leave-master-add/leave-master-add.component.ts ***!
  \************************************************************************************/
/*! exports provided: LeaveMasterAddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeaveMasterAddComponent", function() { return LeaveMasterAddComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng6-toastr-notifications */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/ng6-toastr-notifications/fesm5/ng6-toastr-notifications.js");
/* harmony import */ var src_app_dialog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/dialog.component */ "./src/app/dialog.component.ts");
/* harmony import */ var src_app_localstorage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/localstorage.service */ "./src/app/localstorage.service.ts");
/* harmony import */ var src_services_DatabaseService__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/_services/DatabaseService */ "./src/_services/DatabaseService.ts");







var LeaveMasterAddComponent = /** @class */ (function () {
    function LeaveMasterAddComponent(modelData, dialog, session, serve, toast, alert, dialogRef) {
        this.modelData = modelData;
        this.dialog = dialog;
        this.session = session;
        this.serve = serve;
        this.toast = toast;
        this.alert = alert;
        this.dialogRef = dialogRef;
        this.info = {};
        this.savingFlag = false;
        this.assign_login_data = {};
        this.logined_user_data = {};
        this.assign_login_data = this.session.getSession();
        this.logined_user_data = this.assign_login_data.value.data;
        this.type = modelData.type;
        if (this.type == 'edit') {
            this.info.title = this.modelData.data.title;
            this.info.count = this.modelData.data.count;
            this.info.id = this.modelData.data.id;
        }
    }
    LeaveMasterAddComponent.prototype.ngOnInit = function () {
    };
    LeaveMasterAddComponent.prototype.submitDetail = function (type) {
        var _this = this;
        this.savingFlag = true;
        this.info.created_by_name = this.logined_user_data.name;
        this.info.created_by_id = this.logined_user_data.id;
        var header;
        if (type == 'add') {
            header = this.serve.post_rqst({ 'data': this.info }, "Master/leaveMasterAdd");
        }
        if (type == 'edit') {
            header = this.serve.post_rqst({ 'data': this.info }, "Master/leaveMasterEdit");
        }
        header.subscribe(function (response) {
            if (response['statusCode'] == 200) {
                _this.toast.successToastr(response['statusMsg']);
                // this.rout.navigate(['/user-add']);
                _this.dialogRef.close(true);
                _this.savingFlag = false;
            }
            else {
                _this.toast.errorToastr(response['statusMsg']);
                _this.savingFlag = false;
            }
        }, function (err) {
            _this.savingFlag = false;
        });
    };
    LeaveMasterAddComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-leave-master-add',
            template: __webpack_require__(/*! ./leave-master-add.component.html */ "./src/app/master/leave-master/leave-master-add/leave-master-add.component.html"),
            styles: [__webpack_require__(/*! ./leave-master-add.component.scss */ "./src/app/master/leave-master/leave-master-add/leave-master-add.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object, _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"], src_app_localstorage_service__WEBPACK_IMPORTED_MODULE_5__["sessionStorage"], src_services_DatabaseService__WEBPACK_IMPORTED_MODULE_6__["DatabaseService"], ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_3__["ToastrManager"], src_app_dialog_component__WEBPACK_IMPORTED_MODULE_4__["DialogComponent"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]])
    ], LeaveMasterAddComponent);
    return LeaveMasterAddComponent;
}());



/***/ }),

/***/ "./src/app/master/leave-master/leave-master-list/leave-master-list.component.html":
/*!****************************************************************************************!*\
  !*** ./src/app/master/leave-master/leave-master-list/leave-master-list.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-container\">\r\n\r\n  <div class=\"tools-container\">\r\n    <h2>Leave Master</h2>\r\n\r\n    <div class=\"left-auto left-auto df ac flex-gap-10\">\r\n      <button mat-icon-button matTooltip=\"Refresh\" (click)=\"refresh() \">\r\n        <i class=\"material-icons\">refresh</i>\r\n      </button>\r\n    </div>\r\n  </div>\r\n\r\n\r\n  <div class=\"container pb100\">\r\n    <div class=\"cs-table\">\r\n      <div class=\"sticky-head\">\r\n        <div class=\"table-head\">\r\n          <table>\r\n            <tr>\r\n              <th class=\"w60\">S.No.</th>\r\n              <th>User Name</th>\r\n              <th class=\"w150\">Employee Code</th>\r\n              <th class=\"w100\">EL</th>\r\n              <th class=\"w100\">CL</th>\r\n              <th class=\"w100\">SL</th>\r\n              <th class=\"w100\">COMP OFF</th>\r\n            </tr>\r\n          </table>\r\n        </div>\r\n        <div class=\"table-head border-top\">\r\n          <table>\r\n            <tr>\r\n              <th class=\"w60\"></th>\r\n              <th>\r\n                <div class=\"th-search-acmt\">\r\n                  <mat-form-field class=\"example-full-width cs-input\">\r\n                    <input matInput placeholder=\"Search\" name=\"name\" [(ngModel)]=\"filter.name\"\r\n                      (keyup.enter)=\"getLeaveMasterList()\">\r\n                  </mat-form-field>\r\n                </div>\r\n              </th>\r\n              <th class=\"w150\"></th>\r\n              <th class=\"w100\"></th>\r\n              <th class=\"w100\"></th>\r\n              <th class=\"w100\"></th>\r\n              <th class=\"w100\"></th>\r\n            </tr>\r\n          </table>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"table-container\">\r\n        <div class=\"table-content\">\r\n          <table>\r\n            <ng-container *ngIf=\"!loader\">\r\n              <tr *ngFor=\"let row of leaveMasterList; let i = index;\">\r\n                <td class=\"w60\">{{i+1}}</td>\r\n                <td>{{row.name}}</td>\r\n                <td class=\"w150\">{{row.emp_code}}</td>\r\n                <td class=\"w100\">\r\n                  <div class=\"fix-input\">\r\n                    <input type=\"text\" name=\"el{{i}}\" [(ngModel)]=\"row.el\" value=\"{{row.el}}\">\r\n                  </div>\r\n                </td>\r\n                <td class=\"w100\">\r\n                  <div class=\"fix-input\">\r\n                    <input type=\"text\" name=\"cl{{i}}\" [(ngModel)]=\"row.cl\" value=\" {{row.cl}}\">\r\n                  </div>\r\n                </td>\r\n                <td class=\"w100\">\r\n                  <div class=\"fix-input\">\r\n                    <input type=\"text\" name=\"sl{{i}}\" [(ngModel)]=\"row.sl\" value=\"{{row.sl}}\">\r\n                  </div>\r\n                </td>\r\n                <td class=\"w100\">\r\n                  <div class=\"fix-input\">\r\n                    <input type=\"text\" name=\"comp_off{{i}}\" [(ngModel)]=\"row.comp_off\" value=\"{{row.comp_off}}\">\r\n                  </div>\r\n                </td>\r\n              </tr>\r\n            </ng-container>\r\n\r\n            <ng-container *ngIf=\"loader\">\r\n              <tr class=\"sk-loading\" *ngFor=\"let row of [].constructor(10)\">\r\n                <td class=\"w60\">\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n                <td>\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n                <td class=\"w150\">\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n                <td class=\"w100\">\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n                <td class=\"w100\">\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n                <td class=\"w100\">\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n                <td class=\"w100\">\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n              </tr>\r\n            </ng-container>\r\n\r\n          </table>\r\n        </div>\r\n\r\n\r\n      </div>\r\n    </div>\r\n\r\n    <ng-container *ngIf=\"leaveMasterList.length == 0 && noResult\">\r\n      <app-not-result-found></app-not-result-found>\r\n    </ng-container>\r\n  </div>\r\n\r\n\r\n\r\n  <div class=\"fab-btns\" *ngIf=\"logined_user_data.add_leave_master=='1' || logined_user_data.edit_leave_master=='1' || logined_user_data.export_leave_master=='1'\">\r\n    <button mat-fab class=\"pulse\" color=\"accent\" (click)=\"updateLeaveMaster()\">\r\n      <i class=\"material-icons\">update</i>\r\n      Update\r\n    </button>\r\n    <button class=\"pulse excel\" mat-fab color=\"primary\" (click)=\"getLeaveMasterExcel()\"  *ngIf=\"leaveMasterList.length > 0 && logined_user_data.export_leave_master=='1'\">\r\n\t\t\t<mat-icon>download</mat-icon>\r\n\t\t\tDownload in excel\r\n\t\t</button>\r\n  </div>\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/master/leave-master/leave-master-list/leave-master-list.component.scss":
/*!****************************************************************************************!*\
  !*** ./src/app/master/leave-master/leave-master-list/leave-master-list.component.scss ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/master/leave-master/leave-master-list/leave-master-list.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/master/leave-master/leave-master-list/leave-master-list.component.ts ***!
  \**************************************************************************************/
/*! exports provided: LeaveMasterListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeaveMasterListComponent", function() { return LeaveMasterListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng6-toastr-notifications */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/ng6-toastr-notifications/fesm5/ng6-toastr-notifications.js");
/* harmony import */ var src_app_dialog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/dialog.component */ "./src/app/dialog.component.ts");
/* harmony import */ var src_app_localstorage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/localstorage.service */ "./src/app/localstorage.service.ts");
/* harmony import */ var src_services_DatabaseService__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/_services/DatabaseService */ "./src/_services/DatabaseService.ts");
/* harmony import */ var _leave_master_add_leave_master_add_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../leave-master-add/leave-master-add.component */ "./src/app/master/leave-master/leave-master-add/leave-master-add.component.ts");








var LeaveMasterListComponent = /** @class */ (function () {
    function LeaveMasterListComponent(service, dialog1, toast, dialog, alert, session) {
        this.service = service;
        this.dialog1 = dialog1;
        this.toast = toast;
        this.dialog = dialog;
        this.alert = alert;
        this.session = session;
        this.leaveMasterList = [];
        this.filter = {};
        this.loader = false;
        this.fabBtnValue = 'add';
        this.noResult = false;
        this.assign_login_data = {};
        this.logined_user_data = {};
        this.downurl = service.downloadUrl;
        this.assign_login_data = this.session.getSession();
        this.logined_user_data = this.assign_login_data.value.data;
    }
    LeaveMasterListComponent.prototype.ngOnInit = function () {
        this.getLeaveMasterList();
    };
    LeaveMasterListComponent.prototype.getLeaveMasterList = function () {
        var _this = this;
        this.loader = true;
        this.service.post_rqst({ 'filter': this.filter }, 'Master/leaveMasterList').subscribe(function (resp) {
            if (resp['statusCode'] == 200) {
                _this.leaveMasterList = resp['result'];
                _this.loader = false;
                if (_this.leaveMasterList.length == 0) {
                    _this.noResult = true;
                }
            }
            else {
                _this.toast.errorToastr(resp['statusMsg']);
            }
        }, function (err) {
            _this.loader = false;
        });
    };
    LeaveMasterListComponent.prototype.refresh = function () {
        this.filter = {};
        this.service.setData(this.filter);
        this.service.currentUserID = '';
        this.getLeaveMasterList();
    };
    LeaveMasterListComponent.prototype.openDialog = function (type, data) {
        var _this = this;
        var dialogRef = this.dialog.open(_leave_master_add_leave_master_add_component__WEBPACK_IMPORTED_MODULE_7__["LeaveMasterAddComponent"], {
            width: '400px',
            panelClass: 'padding0',
            data: {
                'type': type,
                'data': data
            }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result != false) {
                _this.getLeaveMasterList();
            }
        });
    };
    LeaveMasterListComponent.prototype.deleteLeaveMaster = function (id) {
        var _this = this;
        this.dialog1.delete('Leave Master Data!').then(function (result) {
            if (result) {
                _this.loader = true;
                _this.service.post_rqst({ "id": id }, "Master/leaveMasterDelete").subscribe(function (result) {
                    if (result['statusCode'] == 200) {
                        _this.loader = false;
                        _this.toast.successToastr(result['statusMsg']);
                        _this.getLeaveMasterList();
                    }
                    else {
                        _this.loader = false;
                        _this.toast.errorToastr(result['statusMsg']);
                    }
                }, function (err) {
                    _this.loader = false;
                    _this.toast.errorToastr('Something went wrong');
                });
            }
        });
    };
    LeaveMasterListComponent.prototype.updateLeaveMaster = function () {
        var _this = this;
        this.dialog1.confirm("You Want To Update Leave Master ?").then(function (result) {
            if (result) {
                _this.service.post_rqst({ 'data': _this.leaveMasterList, 'created_by_name': _this.logined_user_data.name, 'created_by_id': _this.logined_user_data.id }, 'Master/updateLeave').subscribe(function (resp) {
                    if (resp['statusCode'] == 200) {
                        _this.loader = false;
                        _this.toast.successToastr(resp['statusMsg']);
                        _this.getLeaveMasterList();
                    }
                    else {
                        _this.toast.errorToastr(resp['statusMsg']);
                    }
                });
            }
        });
    };
    LeaveMasterListComponent.prototype.getLeaveMasterExcel = function () {
        var _this = this;
        this.loader = true;
        this.service.post_rqst({}, "Excel/leaveMaster").subscribe(function (result) {
            if (result['msg'] == true) {
                _this.loader = false;
                window.open(_this.downurl + result['filename']);
                _this.getLeaveMasterList();
            }
        });
    };
    LeaveMasterListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-leave-master-list',
            template: __webpack_require__(/*! ./leave-master-list.component.html */ "./src/app/master/leave-master/leave-master-list/leave-master-list.component.html"),
            styles: [__webpack_require__(/*! ./leave-master-list.component.scss */ "./src/app/master/leave-master/leave-master-list/leave-master-list.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_services_DatabaseService__WEBPACK_IMPORTED_MODULE_6__["DatabaseService"], src_app_dialog_component__WEBPACK_IMPORTED_MODULE_4__["DialogComponent"], ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_3__["ToastrManager"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"], src_app_dialog_component__WEBPACK_IMPORTED_MODULE_4__["DialogComponent"], src_app_localstorage_service__WEBPACK_IMPORTED_MODULE_5__["sessionStorage"]])
    ], LeaveMasterListComponent);
    return LeaveMasterListComponent;
}());



/***/ }),

/***/ "./src/app/master/leave-master/leave-master-module/leave-master/leave-master.module.ts":
/*!*********************************************************************************************!*\
  !*** ./src/app/master/leave-master/leave-master-module/leave-master/leave-master.module.ts ***!
  \*********************************************************************************************/
/*! exports provided: LeaveMasterModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeaveMasterModule", function() { return LeaveMasterModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _leave_master_list_leave_master_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../leave-master-list/leave-master-list.component */ "./src/app/master/leave-master/leave-master-list/leave-master-list.component.ts");
/* harmony import */ var src_app_auth_component_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/auth-component.guard */ "./src/app/auth-component.guard.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-multiselect-dropdown */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/ng-multiselect-dropdown/fesm5/ng-multiselect-dropdown.js");
/* harmony import */ var src_app_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/material */ "./src/app/material.ts");
/* harmony import */ var angular_ng_autocomplete__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! angular-ng-autocomplete */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/angular-ng-autocomplete/fesm5/angular-ng-autocomplete.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var ngx_mat_select_search__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-mat-select-search */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/ngx-mat-select-search/fesm5/ngx-mat-select-search.js");
/* harmony import */ var src_app_app_utility_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/app-utility.module */ "./src/app/app-utility.module.ts");
/* harmony import */ var _leave_master_add_leave_master_add_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../leave-master-add/leave-master-add.component */ "./src/app/master/leave-master/leave-master-add/leave-master-add.component.ts");














var LeaveMasterRoutes = [
    { path: "", children: [
            { path: "", component: _leave_master_list_leave_master_list_component__WEBPACK_IMPORTED_MODULE_3__["LeaveMasterListComponent"], canActivate: [src_app_auth_component_guard__WEBPACK_IMPORTED_MODULE_4__["AuthComponentGuard"]], data: { expectedRole: ['1'] } },
        ] }
];
var LeaveMasterModule = /** @class */ (function () {
    function LeaveMasterModule() {
    }
    LeaveMasterModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_leave_master_list_leave_master_list_component__WEBPACK_IMPORTED_MODULE_3__["LeaveMasterListComponent"], _leave_master_add_leave_master_add_component__WEBPACK_IMPORTED_MODULE_13__["LeaveMasterAddComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild(LeaveMasterRoutes),
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
                ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_7__["NgMultiSelectDropDownModule"],
                src_app_material__WEBPACK_IMPORTED_MODULE_8__["MaterialModule"],
                angular_ng_autocomplete__WEBPACK_IMPORTED_MODULE_9__["AutocompleteLibModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatDialogModule"],
                ngx_mat_select_search__WEBPACK_IMPORTED_MODULE_11__["NgxMatSelectSearchModule"],
                src_app_app_utility_module__WEBPACK_IMPORTED_MODULE_12__["AppUtilityModule"]
            ],
            entryComponents: [
                _leave_master_add_leave_master_add_component__WEBPACK_IMPORTED_MODULE_13__["LeaveMasterAddComponent"]
            ]
        })
    ], LeaveMasterModule);
    return LeaveMasterModule;
}());



/***/ })

}]);