(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["postal-master-postal-master-module-postal-master-module-module"],{

/***/ "./src/app/postal-master/postal-master-list/postal-master-list.component.html":
/*!************************************************************************************!*\
  !*** ./src/app/postal-master/postal-master-list/postal-master-list.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-container\">\r\n  <div class=\"tools-container\">\r\n    <h2>Postal Master</h2>\r\n    <div class=\"left-auto left-auto df ac flex-gap-10\">\r\n      <button mat-icon-button matTooltip=\"Refresh\" (click)=\"refresh()\">\r\n        <i class=\"material-icons\">refresh</i>\r\n      </button>\r\n\r\n      <div class=\"pagination\" *ngIf=\"postal_list.length > 0 \">\r\n        <div class=\"pagination-content\">\r\n          Pages\r\n          <span>{{pagenumber}}</span>\r\n          of\r\n          <span>{{total_page}}</span>\r\n        </div>\r\n        <div class=\"page-nav\">\r\n          <button mat-icon-button matTooltip=\"Older\" (click)=\"pervious()\" [disabled]=\"start == 0 || total_page == 0\">\r\n            <i class=\"material-icons\">navigate_before</i>\r\n          </button>\r\n          <button mat-icon-button matTooltip=\"Newer\" (click)=\"nextPage()\"\r\n            [disabled]=\"pagenumber == total_page || total_page == 0\">\r\n            <i class=\"material-icons\">navigate_next</i>\r\n          </button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"container container-scroll\">\r\n    <div class=\"cs-table\">\r\n      <div class=\"sticky-head\" style=\"top: 0px;\">\r\n        <div class=\"table-head\">\r\n          <table>\r\n            <tr>\r\n              <th class=\"w50\">S.no.</th>\r\n              <th class=\"w150\">Pincode</th>\r\n              <th class=\"w150\">District</th>\r\n              <th class=\"w150\">City</th>\r\n              <th class=\"w150\">Area</th>\r\n              <th class=\"w150\">State</th>\r\n            </tr>\r\n          </table>\r\n        </div>\r\n\r\n        <div class=\"table-head bdrt\">\r\n          <table>\r\n            <tr>\r\n              <th class=\"w50\"></th>\r\n              <th class=\"w150\">\r\n                <div class=\"th-search-acmt\">\r\n                  <mat-form-field class=\"example-full-width cs-input select-input\">\r\n                    <input matInput placeholder=\"Pincode Search\" name=\"pincode\" [(ngModel)]=\"filter.pincode\"\r\n                      (keyup.enter)=\"getPostalList()\">\r\n                  </mat-form-field>\r\n                </div>\r\n              </th>\r\n              <th class=\"w150\">\r\n                <div class=\"th-search-acmt\">\r\n                  <mat-form-field class=\"example-full-width cs-input select-input\">\r\n                    <input matInput placeholder=\"District Search\" name=\"district_name\" [(ngModel)]=\"filter.district_name\"\r\n                      (keyup.enter)=\"getPostalList()\">\r\n                  </mat-form-field>\r\n                </div>\r\n              </th>\r\n              <th class=\"w150\">\r\n                <div class=\"th-search-acmt\">\r\n                  <mat-form-field class=\"example-full-width cs-input select-input\">\r\n                    <input matInput placeholder=\"City Search\" name=\"city\" [(ngModel)]=\"filter.city\"\r\n                      (keyup.enter)=\"getPostalList()\">\r\n                  </mat-form-field>\r\n                </div>\r\n              </th>\r\n              <th class=\"w150\">\r\n                <div class=\"th-search-acmt\">\r\n                  <mat-form-field class=\"example-full-width cs-input select-input\">\r\n                    <input matInput placeholder=\"Area Search\" name=\"area\" [(ngModel)]=\"filter.area\"\r\n                      (keyup.enter)=\"getPostalList()\">\r\n                  </mat-form-field>\r\n                </div>\r\n              </th>\r\n              <th class=\"w150\">\r\n                <div class=\"th-search-acmt\">\r\n                  <mat-form-field class=\"example-full-width cs-input select-input\">\r\n                    <input matInput placeholder=\"State Search\" name=\"state_name\" [(ngModel)]=\"filter.state_name\"\r\n                      (keyup.enter)=\"getPostalList()\">\r\n                  </mat-form-field>\r\n                </div>\r\n              </th>\r\n            </tr>\r\n          </table>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"table-container\">\r\n        <div class=\"table-content\">\r\n          <table>\r\n            <ng-container *ngIf=\"!loader\">\r\n              <tr *ngFor=\"let row of postal_list; let i = index;\">\r\n                <td class=\"w50\">{{i + 1}}</td>\r\n                <td class=\"w150\">{{row.pincode}}</td>\r\n                <td class=\"w150\">{{row.district_name}}</td>\r\n                <td class=\"w150\">{{row.city}}</td>\r\n                <td class=\"w150\">{{row.area}}</td>\r\n                <td class=\"w150\">{{row.state_name}}</td>\r\n              </tr>\r\n            </ng-container>\r\n\r\n            <ng-container *ngIf=\"loader\">\r\n              <tr class=\"sk-loading\" *ngFor=\"let row of [].constructor(10)\">\r\n                <td class=\"w50\">\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n                <td class=\"w150\">\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n                <td class=\"w150\">\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n                <td class=\"w150\">\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n              </tr>\r\n            </ng-container>\r\n          </table>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <ng-container *ngIf=\"data_not_found\">\r\n      <div class=\"app-data-not-found\">\r\n        <div class=\"app-data-not-found-body\">\r\n          <img src=\"assets/img/data-not-found.svg\" alt=\"Data Not Found\">\r\n          <p>No Data Found</p>\r\n        </div>\r\n      </div>\r\n    </ng-container>\r\n  </div>\r\n\r\n  <div class=\"fab-btns\">\r\n        <div class=\"fab-btns\"\r\n           *ngIf=\"login_data5.add_postal_master=='1'\">\r\n            <button class=\"pulse excel\" mat-fab color=\"primary\" [ngClass]=\"{'pulse': fabBtnValue=='add'}\"\r\n                [matMenuTriggerFor]=\"menu\">\r\n                <i class=\"material-icons\">apps</i>\r\n                Action\r\n            </button>\r\n        </div>\r\n        <mat-menu #menu=\"matMenu\">\r\n                <button mat-menu-item (click)=\"upload_postal_master();\"\r\n                    *ngIf=\"(login_data5.import_postal_master=='1')\">\r\n                    <mat-icon>cloud_upload</mat-icon>\r\n                    <span>Upload Postal Master</span>\r\n                </button>\r\n            <button mat-menu-item (click)=\"lastBtnValue('add');openDialog('add');\"\r\n                *ngIf=\"login_data5.add_postal_master=='1'\">\r\n                <mat-icon>add</mat-icon>\r\n                <span>Add New</span>\r\n            </button>\r\n        </mat-menu>\r\n    </div>\r\n  <!-- <div class=\"fab-btns\">\r\n    <button class=\"pulse excel\" mat-fab\r\n      *ngIf=\"login_data5.add_postal_master=='1'\"\r\n      color=\"primary\" [ngClass]=\"{'pulse': fabBtnValue=='add'}\"\r\n      (click)=\"lastBtnValue('add');openDialog('add')\">\r\n      <i class=\"material-icons\">add</i>\r\n      Add New\r\n    </button>\r\n  </div> -->\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/postal-master/postal-master-list/postal-master-list.component.scss":
/*!************************************************************************************!*\
  !*** ./src/app/postal-master/postal-master-list/postal-master-list.component.scss ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/postal-master/postal-master-list/postal-master-list.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/postal-master/postal-master-list/postal-master-list.component.ts ***!
  \**********************************************************************************/
/*! exports provided: PostalMasterListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostalMasterListComponent", function() { return PostalMasterListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng6-toastr-notifications */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/ng6-toastr-notifications/fesm5/ng6-toastr-notifications.js");
/* harmony import */ var src_services_DatabaseService__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/_services/DatabaseService */ "./src/_services/DatabaseService.ts");
/* harmony import */ var src_app_localstorage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/localstorage.service */ "./src/app/localstorage.service.ts");
/* harmony import */ var _postal_modal_postal_modal_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../postal-modal/postal-modal.component */ "./src/app/postal-master/postal-modal/postal-modal.component.ts");
/* harmony import */ var src_app_upload_file_modal_upload_file_modal_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/upload-file-modal/upload-file-modal.component */ "./src/app/upload-file-modal/upload-file-modal.component.ts");








var PostalMasterListComponent = /** @class */ (function () {
    function PostalMasterListComponent(serve, toast, session, alrt) {
        this.serve = serve;
        this.toast = toast;
        this.session = session;
        this.alrt = alrt;
        this.loader = false;
        this.postal_list = [];
        this.start = 0;
        this.pagelimit = 50;
        this.filter = {};
        this.data_not_found = false;
        this.pagenumber = 1;
        this.login_data = {};
        this.login_data5 = {};
        this.fabBtnValue = 'add';
        this.login_data = this.session.getSession();
        this.login_data = this.login_data.value;
        this.login_data5 = this.login_data.data;
    }
    PostalMasterListComponent.prototype.ngOnInit = function () {
        this.getPostalList();
    };
    PostalMasterListComponent.prototype.lastBtnValue = function (value) {
        if (value === void 0) { value = ''; }
        this.fabBtnValue = value;
    };
    PostalMasterListComponent.prototype.getPostalList = function () {
        var _this = this;
        this.loader = true;
        var requestData = {
            "filter": this.filter,
            "start": this.start,
            "pagelimit": this.pagelimit
        };
        if (this.pagenumber > this.total_page) {
            this.pagenumber = this.total_page;
            this.start = this.pageCount - this.pagelimit;
        }
        if (this.start < 0) {
            this.start = 0;
        }
        this.serve.post_rqst(requestData, "Master/postalList").subscribe((function (result) {
            _this.loader = false;
            if (result['statusCode'] == 200) {
                _this.postal_list = result['postal_list'];
                _this.pageCount = result['count'];
                _this.total_page = Math.ceil(parseInt(_this.pageCount) / _this.pagelimit);
                if (_this.pagenumber > _this.total_page) {
                    _this.pagenumber = _this.total_page;
                    _this.start = _this.pageCount - _this.pagelimit;
                }
                else {
                    _this.pagenumber = Math.ceil(_this.start / _this.pagelimit) + 1;
                }
                if (_this.postal_list.length == 0) {
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
    PostalMasterListComponent.prototype.refresh = function () {
        this.filter = {};
        this.start = 0;
        this.getPostalList();
    };
    PostalMasterListComponent.prototype.pervious = function () {
        this.start = this.start - this.pagelimit;
        this.getPostalList();
    };
    PostalMasterListComponent.prototype.nextPage = function () {
        this.start = this.start + this.pagelimit;
        this.getPostalList();
    };
    PostalMasterListComponent.prototype.openDialog = function (type, row) {
        var _this = this;
        if (type === void 0) { type = ''; }
        if (row === void 0) { row = {}; }
        var dialogRef = this.alrt.open(_postal_modal_postal_modal_component__WEBPACK_IMPORTED_MODULE_6__["PostalModalComponent"], {
            width: '900px',
            panelClass: 'cs-modal',
            disableClose: true,
            data: {
                'id': row.id,
                'state_name': row.state_name,
                'district_name': row.district_name,
                'city': row.city,
                'area': row.area,
                'pincode': row.pincode,
                'type': type
            }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result == true) {
                _this.getPostalList();
            }
        });
    };
    PostalMasterListComponent.prototype.upload_postal_master = function () {
        var _this = this;
        var dialogRef = this.alrt.open(src_app_upload_file_modal_upload_file_modal_component__WEBPACK_IMPORTED_MODULE_7__["UploadFileModalComponent"], {
            width: '500px',
            panelClass: 'cs-modal',
            disableClose: true,
            data: {
                'from': 'postalMaster',
                'modal_type': 'insert'
            }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result != false) {
                _this.getPostalList();
            }
        });
    };
    PostalMasterListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-postal-master-list',
            template: __webpack_require__(/*! ./postal-master-list.component.html */ "./src/app/postal-master/postal-master-list/postal-master-list.component.html"),
            styles: [__webpack_require__(/*! ./postal-master-list.component.scss */ "./src/app/postal-master/postal-master-list/postal-master-list.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_services_DatabaseService__WEBPACK_IMPORTED_MODULE_4__["DatabaseService"],
            ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_3__["ToastrManager"],
            src_app_localstorage_service__WEBPACK_IMPORTED_MODULE_5__["sessionStorage"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]])
    ], PostalMasterListComponent);
    return PostalMasterListComponent;
}());



/***/ }),

/***/ "./src/app/postal-master/postal-master-module/postal-master-module.module.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/postal-master/postal-master-module/postal-master-module.module.ts ***!
  \***********************************************************************************/
/*! exports provided: PostalMasterModuleModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostalMasterModuleModule", function() { return PostalMasterModuleModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-multiselect-dropdown */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/ng-multiselect-dropdown/fesm5/ng-multiselect-dropdown.js");
/* harmony import */ var src_app_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/material */ "./src/app/material.ts");
/* harmony import */ var angular_ng_autocomplete__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! angular-ng-autocomplete */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/angular-ng-autocomplete/fesm5/angular-ng-autocomplete.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var ngx_mat_select_search__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-mat-select-search */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/ngx-mat-select-search/fesm5/ngx-mat-select-search.js");
/* harmony import */ var src_app_app_utility_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/app-utility.module */ "./src/app/app-utility.module.ts");
/* harmony import */ var _postal_master_list_postal_master_list_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../postal-master-list/postal-master-list.component */ "./src/app/postal-master/postal-master-list/postal-master-list.component.ts");
/* harmony import */ var src_app_auth_component_guard__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/auth-component.guard */ "./src/app/auth-component.guard.ts");
/* harmony import */ var _postal_modal_postal_modal_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../postal-modal/postal-modal.component */ "./src/app/postal-master/postal-modal/postal-modal.component.ts");














var postalRoutes = [
    { path: "", component: _postal_master_list_postal_master_list_component__WEBPACK_IMPORTED_MODULE_11__["PostalMasterListComponent"], canActivate: [src_app_auth_component_guard__WEBPACK_IMPORTED_MODULE_12__["AuthComponentGuard"]], data: { expectedRole: ['1'] } },
];
var PostalMasterModuleModule = /** @class */ (function () {
    function PostalMasterModuleModule() {
    }
    PostalMasterModuleModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _postal_master_list_postal_master_list_component__WEBPACK_IMPORTED_MODULE_11__["PostalMasterListComponent"],
                _postal_modal_postal_modal_component__WEBPACK_IMPORTED_MODULE_13__["PostalModalComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(postalRoutes),
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_5__["NgMultiSelectDropDownModule"],
                src_app_material__WEBPACK_IMPORTED_MODULE_6__["MaterialModule"],
                angular_ng_autocomplete__WEBPACK_IMPORTED_MODULE_7__["AutocompleteLibModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatDialogModule"],
                ngx_mat_select_search__WEBPACK_IMPORTED_MODULE_9__["NgxMatSelectSearchModule"],
                src_app_app_utility_module__WEBPACK_IMPORTED_MODULE_10__["AppUtilityModule"]
            ],
            entryComponents: [_postal_modal_postal_modal_component__WEBPACK_IMPORTED_MODULE_13__["PostalModalComponent"]]
        })
    ], PostalMasterModuleModule);
    return PostalMasterModuleModule;
}());



/***/ }),

/***/ "./src/app/postal-master/postal-modal/postal-modal.component.html":
/*!************************************************************************!*\
  !*** ./src/app/postal-master/postal-modal/postal-modal.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 mat-dialog-title>Add Postal Code</h1>\r\n<p class=\"text-suggestion\">Note: All fields must be entered in CAPITAL LETTERS.</p>\r\n<form #f=\"ngForm\" (ngSubmit)=\" f.valid && addPostalCode()\">\r\n  <div mat-dialog-content>\r\n    <div class=\"dialog-content\">\r\n      <div class=\"cs-form mt10\">\r\n        <div class=\"row\" >\r\n          <div class=\"col s12 m4 l4\">\r\n                  <mat-form-field appearance=\"outline\">\r\n                        <mat-label> Pincode</mat-label>\r\n                        <input matInput placeholder=\"Type here..\" type=\"tel\" name=\"pincode\" #pincode=\"ngModel\"\r\n                          [(ngModel)]=\"data.pincode\" minlength=\"6\"\r\n                          maxlength=\"6\" required>\r\n\r\n                      </mat-form-field>\r\n                      <div class=\"alert alert-danger\" *ngIf=\"pincode.touched || f.submitted\">\r\n                        <p *ngIf=\"pincode.errors?.required\">This field is required</p>\r\n                      </div>\r\n                </div>\r\n\r\n                 <div class=\" col s12 m4 l4\">\r\n                      <mat-form-field appearance=\"outline\">\r\n                        <mat-label>State</mat-label>\r\n                        <input matInput placeholder=\"Type Here ...\" type=\"text\" name=\"state_name\" #state_name=\"ngModel\"\r\n                          [(ngModel)]=\"data.state_name\" required >\r\n                      </mat-form-field>\r\n                      <div class=\"alert alert-danger\" *ngIf=\"state_name.touched || f.submitted\">\r\n                        <p *ngIf=\"state_name.errors?.required\">This field is required</p>\r\n                      </div>\r\n                    </div>\r\n\r\n                    <div class=\" col s12 m4 l4\">\r\n                      <mat-form-field appearance=\"outline\">\r\n                        <mat-label>District</mat-label>\r\n                        <input matInput placeholder=\"Type Here ...\" type=\"text\" name=\"district_name\" #district_name=\"ngModel\"\r\n                          [(ngModel)]=\"data.district_name\" required >\r\n                      </mat-form-field>\r\n                      <div class=\"alert alert-danger\" *ngIf=\"district_name.touched || f.submitted\">\r\n                        <p *ngIf=\"district_name.errors?.required\">This field is required</p>\r\n                      </div>\r\n                    </div>\r\n        </div>\r\n        <div class=\"row\">\r\n           <div class=\" col s12 m4 l4\">\r\n                      <mat-form-field appearance=\"outline\">\r\n                        <mat-label>City</mat-label>\r\n                        <input matInput placeholder=\"Type Here ...\" type=\"text\" name=\"city\" #city=\"ngModel\"\r\n                          [(ngModel)]=\"data.city\" required >\r\n                      </mat-form-field>\r\n                      <div class=\"alert alert-danger\" *ngIf=\"city.touched || f.submitted\">\r\n                          <p *ngIf=\"city.errors?.required\">This field is required</p>\r\n                      </div>\r\n                  </div>\r\n\r\n                  <div class=\" col s12 m4 l4\">\r\n                      <mat-form-field appearance=\"outline\">\r\n                        <mat-label>Area</mat-label>\r\n                        <input matInput placeholder=\"Type Here ...\" type=\"text\" name=\"area\" #area=\"ngModel\"\r\n                          [(ngModel)]=\"data.area\" required >\r\n                      </mat-form-field>\r\n                      <div class=\"alert alert-danger\" *ngIf=\"area.touched || f.submitted\">\r\n                          <p *ngIf=\"area.errors?.required\">This field is required</p>\r\n                      </div>\r\n                  </div>\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n  <div mat-dialog-actions>\r\n    <div class=\"text-right wp100\">\r\n      <button class=\"mr10\"  mat-stroked-button color=\"warn\" [mat-dialog-close]=\"false\">Cancel</button>\r\n      <button mat-raised-button color=\"accent\"  [ngClass]=\"{'loading': savingFlag == true}\" [disabled]=\"savingFlag == true\">\r\n        Save\r\n      </button>\r\n    </div>\r\n  </div>\r\n</form>\r\n"

/***/ }),

/***/ "./src/app/postal-master/postal-modal/postal-modal.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/postal-master/postal-modal/postal-modal.component.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".text-suggestion {\n  background-color: #ef3535;\n  color: #fff;\n  text-align: center;\n  font-size: 25px;\n  border-radius: 16px;\n  margin-top: 9px;\n}"

/***/ }),

/***/ "./src/app/postal-master/postal-modal/postal-modal.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/postal-master/postal-modal/postal-modal.component.ts ***!
  \**********************************************************************/
/*! exports provided: PostalModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PostalModalComponent", function() { return PostalModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng6-toastr-notifications */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/ng6-toastr-notifications/fesm5/ng6-toastr-notifications.js");
/* harmony import */ var src_services_DatabaseService__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/_services/DatabaseService */ "./src/_services/DatabaseService.ts");





var PostalModalComponent = /** @class */ (function () {
    function PostalModalComponent(modal_data, serve, toast, dialogRef) {
        this.modal_data = modal_data;
        this.serve = serve;
        this.toast = toast;
        this.dialogRef = dialogRef;
        this.data = {};
        this.savingFlag = false;
    }
    PostalModalComponent.prototype.ngOnInit = function () {
    };
    PostalModalComponent.prototype.addPostalCode = function () {
        var _this = this;
        this.savingFlag = true;
        this.serve.post_rqst({ 'data': this.data }, 'Master/addPostalCode').subscribe(function (result) {
            if (result['statusCode'] == 200) {
                _this.savingFlag = false;
                _this.toast.successToastr(result['statusMsg']);
                _this.dialogRef.close(true);
            }
            else {
                _this.savingFlag = false;
                _this.toast.errorToastr(result['statusMsg']);
            }
        });
    };
    PostalModalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-postal-modal',
            template: __webpack_require__(/*! ./postal-modal.component.html */ "./src/app/postal-master/postal-modal/postal-modal.component.html"),
            styles: [__webpack_require__(/*! ./postal-modal.component.scss */ "./src/app/postal-master/postal-modal/postal-modal.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object, src_services_DatabaseService__WEBPACK_IMPORTED_MODULE_4__["DatabaseService"], ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_3__["ToastrManager"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]])
    ], PostalModalComponent);
    return PostalModalComponent;
}());



/***/ })

}]);