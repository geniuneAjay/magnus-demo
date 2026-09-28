(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["document-gallery-document-gallery-module-document-gallery-module-module"],{

/***/ "./src/app/document-gallery/document-gallery-module/document-gallery-module.module.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/document-gallery/document-gallery-module/document-gallery-module.module.ts ***!
  \********************************************************************************************/
/*! exports provided: DocumentGalleryModuleModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocumentGalleryModuleModule", function() { return DocumentGalleryModuleModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var src_app_auth_component_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/auth-component.guard */ "./src/app/auth-component.guard.ts");
/* harmony import */ var _document_gallery_document_gallery_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../document-gallery/document-gallery.component */ "./src/app/document-gallery/document-gallery/document-gallery.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-multiselect-dropdown */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/ng-multiselect-dropdown/fesm5/ng-multiselect-dropdown.js");
/* harmony import */ var src_app_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/material */ "./src/app/material.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var ngx_mat_select_search__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-mat-select-search */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/ngx-mat-select-search/fesm5/ngx-mat-select-search.js");











var docRoutes = [
    {
        path: "", children: [
            { path: "", component: _document_gallery_document_gallery_component__WEBPACK_IMPORTED_MODULE_4__["DocumentGalleryComponent"], canActivate: [src_app_auth_component_guard__WEBPACK_IMPORTED_MODULE_3__["AuthComponentGuard"]], data: { expectedRole: ['1'] } },
        ]
    }
];
var DocumentGalleryModuleModule = /** @class */ (function () {
    function DocumentGalleryModuleModule() {
    }
    DocumentGalleryModuleModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_document_gallery_document_gallery_component__WEBPACK_IMPORTED_MODULE_4__["DocumentGalleryComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild(docRoutes),
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
                ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_7__["NgMultiSelectDropDownModule"],
                src_app_material__WEBPACK_IMPORTED_MODULE_8__["MaterialModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatDialogModule"],
                ngx_mat_select_search__WEBPACK_IMPORTED_MODULE_10__["NgxMatSelectSearchModule"],
            ],
            entryComponents: []
        })
    ], DocumentGalleryModuleModule);
    return DocumentGalleryModuleModule;
}());



/***/ }),

/***/ "./src/app/document-gallery/document-gallery/document-gallery.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/document-gallery/document-gallery/document-gallery.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-container\">\r\n  <div class=\"tools-container\">\r\n    <h2>Image Gallary</h2>\r\n  </div>\r\n\r\n  <div class=\"container pt10 pl10 pr10 pb50\">\r\n    <div class=\"row\">\r\n      <div class=\"col s12\">\r\n        <div class=\"card pb0\">\r\n          <div class=\"card-body cs-form\">\r\n            <div class=\"row\">\r\n              <div class=\"col s12 m3 l3\">\r\n                <div class=\"selct-all text-left\" *ngIf=\"states.length > 0\">\r\n                  <mat-checkbox [(ngModel)]=\"data.checkUser\" name=\"checkUser\" color=\"primary\"\r\n                    (click)=\"allSelect('state'); getSalesUser('')\">Select All State</mat-checkbox>\r\n                </div>\r\n\r\n                <mat-form-field appearance=\"outline\">\r\n                  <mat-label>State</mat-label>\r\n                  <mat-select name=\"state\" #state=\"ngModel\" [(ngModel)]=\"data.state\" multiple\r\n                    (selectionChange)=\"getSalesUser('')\">\r\n                    <mat-option>\r\n                      <ngx-mat-select-search noEntriesFoundLabel=\"'no data found'\" placeholderLabel=\"Search..\"\r\n                        (keyup)=\"getAllList($event.target.value,'')\"></ngx-mat-select-search>\r\n                    </mat-option>\r\n                    <mat-option *ngFor=\"let row of states\" value=\"{{row.state_name}}\">\r\n                      {{row.state_name}}\r\n                    </mat-option>\r\n                  </mat-select>\r\n                </mat-form-field>\r\n              </div>\r\n\r\n              <div class=\"col s12 m3 l3\">\r\n                <div class=\"selct-all text-left\" *ngIf=\"reportingOne.length > 0\">\r\n                  <mat-checkbox [(ngModel)]=\"data.rm1\" name=\"rm1\" color=\"primary\"\r\n                    (click)=\"allSelect('rm1'); getSalesUser('')\">Select All Reporting Manager</mat-checkbox>\r\n                </div>\r\n\r\n                <mat-form-field appearance=\"outline\">\r\n                  <mat-label>Reporting Manager</mat-label>\r\n                  <mat-select name=\"rsm1\" #rsm1=\"ngModel\" [(ngModel)]=\"data.rsm1\" multiple\r\n                    (selectionChange)=\"getSalesUser('')\">\r\n                    <mat-option>\r\n                      <ngx-mat-select-search noEntriesFoundLabel=\"'no data found'\" placeholderLabel=\"Search..\"\r\n                        (keyup)=\"getAllList('',$event.target.value)\"></ngx-mat-select-search>\r\n                    </mat-option>\r\n\r\n                    <mat-option *ngFor=\"let list of reportingOne; let index=index\" value=\"{{list.id}}\">\r\n                      {{list.name? (list.name | titlecase) : '---'}}\r\n                    </mat-option>\r\n                  </mat-select>\r\n                </mat-form-field>\r\n              </div>\r\n              <div class=\"col s12 m3 l3\" [ngClass]=\"{'mt24': states.length > 0 || reportingOne.length > 0}\">\r\n                <mat-form-field appearance=\"outline\">\r\n                  <mat-label>Sales User *</mat-label>\r\n                  <mat-select name=\"user_id\" [(ngModel)]=\"data.user_id\" #user_id=\"ngModel\" multiple>\r\n                    <mat-option *ngIf=\"salesUser.length > 0\">\r\n                      <ngx-mat-select-search noEntriesFoundLabel=\"'no data found'\" placeholderLabel=\"Search..\"\r\n                        (keyup)=\"getSalesUser($event.target.value)\"></ngx-mat-select-search>\r\n                    </mat-option>\r\n                    <mat-option class=\"remove-check\" (click)=\"selectAll()\">\r\n                      <mat-checkbox [(ngModel)]=\"data.checkUser\" name=\"checkUser\" color=\"primary\"\r\n                        [checked]=\"allUser.length == salesUser.length && salesUser.length !=0 && allUser.length > 0\">All</mat-checkbox>\r\n                    </mat-option>\r\n                    <mat-option *ngFor=\"let row of salesUser\" value=\"{{row.id}}\">{{row.name ? (row.name | titlecase) :\r\n                      ''}}\r\n                      {{row.role_name}}</mat-option>\r\n\r\n                  </mat-select>\r\n                </mat-form-field>\r\n              </div>\r\n              <div class=\"col s12 m3 l3\"\r\n                [ngClass]=\"{'mt24': states.length > 0 || reportingOne.length > 0 || user.length > 0}\">\r\n                <mat-form-field class=\"cs-input\" appearance=\"outline\">\r\n                  <mat-label>Module *</mat-label>\r\n                  <mat-select name=\"module\" placeholder=\"Type Here ...\" #module=\"ngModel\" [(ngModel)]=\"data.module\">\r\n                    <mat-option value=\"Attendance\">Attendance</mat-option>\r\n                    <mat-option value=\"Checkin\">Checkin</mat-option>\r\n                    <mat-option value=\"Expesne\">Expesne</mat-option>\r\n                    <mat-option value=\"Event\">Event</mat-option>\r\n                  </mat-select>\r\n                </mat-form-field>\r\n              </div>\r\n            </div>\r\n\r\n\r\n            <div class=\"row\">\r\n              <div class=\"col s12 m3 l3\">\r\n                <mat-form-field appearance=\"outline\">\r\n                  <mat-label>Date From *</mat-label>\r\n                  <input matInput [matDatepicker]=\"picker2\" name=\"date_from\" (dateChange)=\"date($event)\"\r\n                    [max]=\"data.date_to||today_date\" [(ngModel)]=\"data.date_from\" readonly>\r\n                  <mat-datepicker-toggle matSuffix [for]=\"picker2\"></mat-datepicker-toggle>\r\n                  <mat-datepicker #picker2></mat-datepicker>\r\n                </mat-form-field>\r\n              </div>\r\n              <div class=\"col s12 m3 l3\">\r\n                <mat-form-field appearance=\"outline\">\r\n                  <mat-label>Date To *</mat-label>\r\n                  <input matInput [matDatepicker]=\"picker3\" name=\"date_to\" [min]=\"data.date_from\" [max]=\"today_date\"\r\n                    (dateChange)=\"date($event)\" [(ngModel)]=\"data.date_to\" readonly>\r\n                  <mat-datepicker-toggle matSuffix [for]=\"picker3\"></mat-datepicker-toggle>\r\n                  <mat-datepicker #picker3></mat-datepicker>\r\n                </mat-form-field>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"row mt10\">\r\n      <div class=\"col s12\">\r\n        <div class=\"text-right\">\r\n          <button [ngClass]=\"{'loading': savingFlag == true}\" mat-raised-button color=\"accent\" (click)=\"filter()\"\r\n            [disabled]=\"savingFlag == true\">\r\n            {{savingFlag == true ? 'Please Wait' : 'Search'}}\r\n          </button>\r\n\r\n          <ng-container\r\n            *ngIf=\"!data.date_from || !data.date_to || !data.state || !data.rsm1 || !data.module || !data.user_id\">\r\n            <a class=\"ml10\" mat-raised-button color=\"warn\" (click)=\"clearFilter()\">\r\n              Clear\r\n            </a>\r\n          </ng-container>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/document-gallery/document-gallery/document-gallery.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/document-gallery/document-gallery/document-gallery.component.ts ***!
  \*********************************************************************************/
/*! exports provided: DocumentGalleryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DocumentGalleryComponent", function() { return DocumentGalleryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng6-toastr-notifications */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/ng6-toastr-notifications/fesm5/ng6-toastr-notifications.js");
/* harmony import */ var src_services_DatabaseService__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/_services/DatabaseService */ "./src/_services/DatabaseService.ts");
/* harmony import */ var src_app_dialog_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/dialog.component */ "./src/app/dialog.component.ts");
/* harmony import */ var src_app_localstorage_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/localstorage.service */ "./src/app/localstorage.service.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! moment */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var src_app_attendance_detail_attendance_detail_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/attendance-detail/attendance-detail.component */ "./src/app/attendance-detail/attendance-detail.component.ts");










var DocumentGalleryComponent = /** @class */ (function () {
    function DocumentGalleryComponent(service, router, dialog2, rout, session, dialog, ActivatedRoute, toast) {
        this.service = service;
        this.router = router;
        this.dialog2 = dialog2;
        this.rout = rout;
        this.session = session;
        this.dialog = dialog;
        this.ActivatedRoute = ActivatedRoute;
        this.toast = toast;
        this.data = {};
        this.savingFlag = false;
        this.skLoading = false;
        this.states = [];
        this.reportingOne = [];
        this.user = [];
        this.salesUser = [];
        this.today_date = new Date();
        this.allUser = [];
        this.filterResult = [];
        this.userData = JSON.parse(localStorage.getItem('st_user'));
        this.userId = this.userData['data']['id'];
        this.userName = this.userData['data']['name'];
        this.allUser = [];
        this.getAllList('', '');
    }
    DocumentGalleryComponent.prototype.ngOnInit = function () {
        this.getSalesUser('');
    };
    DocumentGalleryComponent.prototype.date = function (date) {
        if (this.data.date_from) {
            this.data.date_from = moment__WEBPACK_IMPORTED_MODULE_7__(this.data.date_from).format('YYYY-MM-DD');
        }
        if (this.data.date_to) {
            this.data.date_to = moment__WEBPACK_IMPORTED_MODULE_7__(this.data.date_to).format('YYYY-MM-DD');
        }
    };
    DocumentGalleryComponent.prototype.clearFilter = function () {
        this.data.state = '';
        this.data.rsm1 = '';
        this.data.user_id = '';
        this.data.checkUser = '';
        this.data.date_from = '';
        this.data.date_to = '';
        this.data.module = '';
        this.allUser = [];
        this.getSalesUser('');
    };
    DocumentGalleryComponent.prototype.getSalesUser = function (search) {
        var _this = this;
        this.service.post_rqst({ 'state': this.data.state, 'rm1': this.data.rsm1, 'rm2': this.data.rm2, 'hod': this.data.hod_reporting, 'search': search }, "Master/fetchFilterUserData").subscribe((function (response) {
            if (response['statusCode'] == 200) {
                _this.salesUser = response['result'];
                var userData = [];
                if (_this.data.state || _this.data.rsm1 || _this.data.rm2 || _this.data.hod_reporting) {
                    for (var i = 0; i < _this.salesUser.length; i++) {
                        userData.push(_this.salesUser[i].id);
                    }
                    _this.data.user_id = userData.map(String);
                }
            }
            else {
                _this.toast.errorToastr(response['statusMsg']);
            }
        }));
    };
    DocumentGalleryComponent.prototype.getAllList = function (state, rsm1) {
        var _this = this;
        this.service.post_rqst({ 'state': state, 'rsm1': rsm1 }, "Master/fetchFilterData").subscribe((function (result) {
            if (result['statusCode'] == 200) {
                _this.states = result['result']['state'];
                _this.reportingOne = result['result']['rm1'];
            }
            else {
                _this.toast.errorToastr(result['statusMsg']);
            }
        }));
    };
    DocumentGalleryComponent.prototype.allSelect = function (type) {
        var _this = this;
        if (type == "state") {
            setTimeout(function () {
                if (_this.data.checkUser == true) {
                    var array = [];
                    for (var i = 0; i < _this.states.length; i++) {
                        array.push(_this.states[i].state_name);
                    }
                    _this.data.state = array.map(String);
                }
                else {
                    _this.data.state = '';
                    _this.data.assigned_sales_user_name = '';
                }
            }, 100);
        }
        else if (type == "rm1") {
            setTimeout(function () {
                if (_this.data.rm1 == true) {
                    var array = [];
                    for (var i = 0; i < _this.reportingOne.length; i++) {
                        array.push(_this.reportingOne[i].id);
                    }
                    _this.data.rsm1 = array.map(String);
                }
                else {
                    _this.data.rsm1 = '';
                    _this.data.assigned_sales_user_name = '';
                }
            }, 100);
        }
        else {
            setTimeout(function () {
                if (_this.data.employee == true) {
                    var array = [];
                    for (var i = 0; i < _this.user.length; i++) {
                        array.push(_this.user[i].id);
                    }
                    _this.data.assigned_sales_user_name = array.map(String);
                }
                else {
                    _this.data.assigned_sales_user_name = '';
                }
            }, 100);
        }
    };
    DocumentGalleryComponent.prototype.selectAll = function () {
        var _this = this;
        setTimeout(function () {
            if (_this.data.checkUser == true) {
                var userData = [];
                for (var i = 0; i < _this.salesUser.length; i++) {
                    userData.push(_this.salesUser[i].id);
                }
                _this.allUser = userData;
                _this.data.user_id = _this.allUser.map(String);
            }
            else {
                _this.data.user_id = '';
                _this.allUser = [];
            }
        }, 100);
    };
    DocumentGalleryComponent.prototype.filter = function () {
        var _this = this;
        if (this.allUser.length > 0) {
            this.data.user_id = this.allUser;
        }
        if (!this.data.user_id) {
            this.toast.errorToastr('Select User');
            return;
        }
        if (!this.data.module) {
            this.toast.errorToastr('Select Module');
            return;
        }
        if (!this.data.date_from) {
            this.toast.errorToastr('Select Date From');
            return;
        }
        if (!this.data.date_to) {
            this.toast.errorToastr('Select Date To');
            return;
        }
        if (this.data.date_from) {
            this.data.date_from = moment__WEBPACK_IMPORTED_MODULE_7__(this.data.date_from).format('YYYY-MM-DD');
        }
        if (this.data.date_to) {
            this.data.date_to = moment__WEBPACK_IMPORTED_MODULE_7__(this.data.date_to).format('YYYY-MM-DD');
        }
        this.savingFlag = true;
        this.service.post_rqst({ 'data': this.data }, "Master/getAllImages").subscribe((function (result) {
            if (result['statusCode'] == 200) {
                _this.filterResult = result['result']['result'];
                var dialogRef = _this.dialog2.open(src_app_attendance_detail_attendance_detail_component__WEBPACK_IMPORTED_MODULE_9__["AttendanceDetailComponent"], {
                    panelClass: 'full-width-modal',
                    data: {
                        'from': 'attendence_images',
                        'images_data': _this.filterResult,
                        'header': _this.data
                    }
                });
                _this.savingFlag = false;
            }
            else {
                _this.toast.errorToastr(result['statusMsg']);
                _this.savingFlag = false;
            }
        }));
    };
    DocumentGalleryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-document-gallery',
            template: __webpack_require__(/*! ./document-gallery.component.html */ "./src/app/document-gallery/document-gallery/document-gallery.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_services_DatabaseService__WEBPACK_IMPORTED_MODULE_4__["DatabaseService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatDialog"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], src_app_localstorage_service__WEBPACK_IMPORTED_MODULE_6__["sessionStorage"], src_app_dialog_component__WEBPACK_IMPORTED_MODULE_5__["DialogComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_3__["ToastrManager"]])
    ], DocumentGalleryComponent);
    return DocumentGalleryComponent;
}());



/***/ })

}]);