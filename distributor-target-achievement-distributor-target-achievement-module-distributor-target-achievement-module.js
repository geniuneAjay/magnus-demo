(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["distributor-target-achievement-distributor-target-achievement-module-distributor-target-achievement-module"],{

/***/ "./src/app/distributor-target-achievement/distributor-target-achievement-module/distributor-target-achievement.module.ts":
/*!*******************************************************************************************************************************!*\
  !*** ./src/app/distributor-target-achievement/distributor-target-achievement-module/distributor-target-achievement.module.ts ***!
  \*******************************************************************************************************************************/
/*! exports provided: DistributorTargetAchievementModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DistributorTargetAchievementModule", function() { return DistributorTargetAchievementModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var src_app_auth_component_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/auth-component.guard */ "./src/app/auth-component.guard.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng-multiselect-dropdown */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/ng-multiselect-dropdown/fesm5/ng-multiselect-dropdown.js");
/* harmony import */ var src_app_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/material */ "./src/app/material.ts");
/* harmony import */ var angular_ng_autocomplete__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! angular-ng-autocomplete */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/angular-ng-autocomplete/fesm5/angular-ng-autocomplete.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var ngx_mat_select_search__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-mat-select-search */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/ngx-mat-select-search/fesm5/ngx-mat-select-search.js");
/* harmony import */ var src_app_app_utility_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/app-utility.module */ "./src/app/app-utility.module.ts");
/* harmony import */ var _distributor_target_achievement_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../distributor-target-achievement.component */ "./src/app/distributor-target-achievement/distributor-target-achievement.component.ts");












// import { DistributorTargetAchievementComponent } from '../../distributor-target-achievement.component';

var targetRoutes = [
    { path: "", component: _distributor_target_achievement_component__WEBPACK_IMPORTED_MODULE_12__["DistributorTargetAchievementComponent"], canActivate: [src_app_auth_component_guard__WEBPACK_IMPORTED_MODULE_3__["AuthComponentGuard"]], data: { expectedRole: ['1'] } },
];
var DistributorTargetAchievementModule = /** @class */ (function () {
    function DistributorTargetAchievementModule() {
    }
    DistributorTargetAchievementModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _distributor_target_achievement_component__WEBPACK_IMPORTED_MODULE_12__["DistributorTargetAchievementComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(targetRoutes),
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
                ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_6__["NgMultiSelectDropDownModule"],
                src_app_material__WEBPACK_IMPORTED_MODULE_7__["MaterialModule"],
                angular_ng_autocomplete__WEBPACK_IMPORTED_MODULE_8__["AutocompleteLibModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatDialogModule"],
                ngx_mat_select_search__WEBPACK_IMPORTED_MODULE_10__["NgxMatSelectSearchModule"],
                src_app_app_utility_module__WEBPACK_IMPORTED_MODULE_11__["AppUtilityModule"]
            ]
        })
    ], DistributorTargetAchievementModule);
    return DistributorTargetAchievementModule;
}());



/***/ }),

/***/ "./src/app/distributor-target-achievement/distributor-target-achievement.component.html":
/*!**********************************************************************************************!*\
  !*** ./src/app/distributor-target-achievement/distributor-target-achievement.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-container\">\r\n  <div class=\"tools-container\">\r\n    <h2>Distributor Target Achievement List</h2>\r\n\r\n    <div class=\"left-auto df ac flex-gap-10\">\r\n      <ng-container *ngIf=\"distributor_list.length > 0\">\r\n        <div class=\"group-btn\">\r\n          <button mat-button  [ngClass]=\"{'loading': loader == true}\" class=\"ouline-btns whatsapp\" (click)=\"sendMail()\"><img src=\"assets/img/icons/whatsapp.png\">\r\n            Send Whatsapp</button>\r\n        </div>\r\n      </ng-container>\r\n      <a mat-icon-button matTooltip=\"Refresh\" (click)=\"refresh1()\">\r\n        <i class=\"material-icons\">refresh</i>\r\n      </a>\r\n      <div class=\"pagination\" *ngIf=\"distributor_list.length > 0\">\r\n        <div class=\"pagination-content\">\r\n          Pages\r\n          <span>{{pagenumber}}</span>\r\n          of\r\n          <span>{{total_page}}</span>\r\n        </div>\r\n        <div class=\"page-nav\">\r\n          <button mat-icon-button matTooltip=\"Older\" (click)=\"pervious()\" [disabled]=\"start == 0\">\r\n            <i class=\"material-icons\">navigate_before</i>\r\n          </button>\r\n          <button mat-icon-button matTooltip=\"Newer\" (click)=\"nextPage()\" [disabled]=\"pagenumber == total_page \">\r\n            <i class=\"material-icons\">navigate_next</i>\r\n          </button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"container pb100\">\r\n    <div class=\"cs-table horizontal-scroll\">\r\n      <div class=\"sticky-head\">\r\n        <div class=\"table-head\">\r\n          <table>\r\n            <tr>\r\n              <th class=\"w40\">Sr.No.</th>\r\n              <th class=\"w100\">Date Created</th>\r\n              <th class=\"w100\">PARTY CODE</th>\r\n              <th class=\"w150\">PARTY NAME</th>\r\n              <th class=\"w100\">YEARLY TARGET</th>\r\n              <th class=\"w80\">YEARLY ACH</th>\r\n              <th class=\"w80\">TOD</th>\r\n              <th class=\"w100\">MONTHLY TARGET</th>\r\n              <th class=\"w150\">MONTHLY ACH</th>\r\n              <th class=\"w100 text-right\">BALANCE ORDER </th>\r\n              <th class=\"w120 text-right\">MONTHLY PENDING ORDER </th>\r\n            </tr>\r\n          </table>\r\n        </div>\r\n\r\n        <div class=\"table-head border-top\">\r\n          <table>\r\n            <tr>\r\n              <th class=\"w40\">&nbsp;</th>\r\n              <th class=\"w100\"></th>\r\n              <th class=\"w100\">\r\n                <div class=\"th-search-acmt\">\r\n                  <mat-form-field class=\"example-full-width cs-input select-input\">\r\n                    <input matInput placeholder=\"Search...\" (keyup.enter)=\"get_distributor_list()\" #dr_id=\"ngModel\"\r\n                      [(ngModel)]=\"value.dr_id\">\r\n                  </mat-form-field>\r\n                </div>\r\n              </th>\r\n              <th class=\"w150\">\r\n                <div class=\"th-search-acmt\">\r\n                  <mat-form-field class=\"example-full-width cs-input select-input\">\r\n                    <input matInput placeholder=\"Search...\" (keyup.enter)=\"get_distributor_list()\" #dr_name=\"ngModel\"\r\n                      [(ngModel)]=\"value.dr_name\">\r\n                  </mat-form-field>\r\n                </div>\r\n              </th>\r\n              <th class=\"w100\">\r\n                <!-- <div class=\"th-search-acmt\">\r\n                  <mat-form-field>\r\n                    <mat-select name=\"month\" #month=\"ngModel\" [(ngModel)]=\"value.month\"\r\n                      (ngModelChange)=\"get_distributor_list()\">\r\n                      <mat-option value=\"\">All</mat-option>\r\n                      <mat-option value=\"01\">January</mat-option>\r\n                      <mat-option value=\"02\">February</mat-option>\r\n                      <mat-option value=\"03\">March</mat-option>\r\n                      <mat-option value=\"04\">April</mat-option>\r\n                      <mat-option value=\"05\">May</mat-option>\r\n                      <mat-option value=\"06\">June</mat-option>\r\n                      <mat-option value=\"07\">July</mat-option>\r\n                      <mat-option value=\"08\">August</mat-option>\r\n                      <mat-option value=\"09\">September</mat-option>\r\n                      <mat-option value=\"10\">October</mat-option>\r\n                      <mat-option value=\"11\">November</mat-option>\r\n                      <mat-option value=\"12\">December</mat-option>\r\n                    </mat-select>\r\n                  </mat-form-field>\r\n                </div> -->\r\n              </th>\r\n              <th class=\"w80\">\r\n                <!-- <div class=\"th-search-acmt\">\r\n                  <mat-form-field class=\"example-full-width cs-input select-input\">\r\n                    <input matInput placeholder=\"Search...\" (keyup.enter)=\"get_distributor_list()\" #year=\"ngModel\"\r\n                      [(ngModel)]=\"value.year\">\r\n                  </mat-form-field>\r\n                </div> -->\r\n              </th>\r\n              <th class=\"w80\">\r\n                <!-- <div class=\"th-search-acmt\">\r\n                  <mat-form-field class=\"example-full-width cs-input select-input\">\r\n                    <input matInput placeholder=\"Search...\" (keyup.enter)=\"get_distributor_list()\" #year=\"ngModel\"\r\n                      [(ngModel)]=\"value.year\">\r\n                  </mat-form-field>\r\n                </div> -->\r\n              </th>\r\n              <th class=\"w100 text-center\">\r\n                <!-- <div class=\"th-search-acmt\">\r\n                  <mat-form-field class=\"example-full-width cs-input select-input\">\r\n                    <input matInput placeholder=\"Search...\" (keyup.enter)=\"get_distributor_list()\"\r\n                      #segment_name=\"ngModel\" [(ngModel)]=\"value.segment_name\">\r\n                  </mat-form-field>\r\n                </div> -->\r\n              </th>\r\n              <th class=\"w150 text-center\">\r\n                <!-- <div class=\"th-search-acmt\">\r\n                  <mat-form-field class=\"example-full-width cs-input select-input\">\r\n                    <input matInput placeholder=\"Search...\" (keyup.enter)=\"get_distributor_list()\"\r\n                      #assign_user=\"ngModel\" [(ngModel)]=\"value.assign_user\">\r\n                  </mat-form-field>\r\n                </div> -->\r\n              </th>\r\n              <th class=\"w100 text-right\">&nbsp;</th>\r\n              <th class=\"w120 text-right\">&nbsp;</th>\r\n            </tr>\r\n          </table>\r\n        </div>\r\n      </div>\r\n\r\n\r\n      <div class=\"table-container\">\r\n        <div class=\"table-content\" *ngIf=\"distributor_list.length > 0\">\r\n          <table>\r\n            <ng-container *ngIf=\"!loader\">\r\n              <tr *ngFor=\"let row of distributor_list;let i=index \">\r\n                <td class=\"w40\">{{i + 1 + sr_no}}</td>\r\n                <td class=\"w100\">{{row.date_created | date : 'd MMM y'}}</td>\r\n                <td class=\"w100\">{{row.dr_id}}</td>\r\n                <td class=\"w150\">{{row.dr_name}}</td>\r\n                <td class=\"w100\">{{row.yearly_target}}</td>\r\n                <td class=\"w80\">{{row.yearly_achievements}}</td>\r\n                <td class=\"w80\">{{row.tod}}</td>\r\n                <td class=\"w100\">{{row.monthly_target}}</td>\r\n                <td class=\"w150 text-right\"><strong>\r\n                    {{row.monthly_achievements?row.monthly_achievements:'--' }} </strong></td>\r\n                <td class=\"w100 text-right\">\r\n                  <strong>&#x20B9; {{row.balance_order}} </strong>\r\n                </td>\r\n                <td class=\"w120 text-right\">\r\n                  <strong>&#x20B9; {{row.monthly_pending_order}}</strong>\r\n                </td>\r\n              </tr>\r\n            </ng-container>\r\n            <ng-container *ngIf=\"loader\">\r\n              <tr class=\"sk-loading\" *ngFor=\"let row of [].constructor(10)\">\r\n                <td class=\"w40\">\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n                <td class=\"w100\">\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n                <td class=\"w250\">\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n                <td class=\"w100\">\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n                <td class=\"w100\">\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n                <td class=\"w80\">\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n                <td class=\"w80\">\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n                <td class=\"w100 text-center\">\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n                <td class=\"w150 text-center\">\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n                <td class=\"w100 text-right\">\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n                <td class=\"w120 text-right\">\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n              </tr>\r\n            </ng-container>\r\n          </table>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <ng-container *ngIf=\"distributor_list.length == 0 && datanotfound == true\">\r\n      <app-not-result-found></app-not-result-found>\r\n    </ng-container>\r\n  </div>\r\n  <div>\r\n  </div>\r\n  <div class=\"fab-btns\"\r\n    *ngIf=\"assign_login_data2.export_distributor_target=='1' || assign_login_data2.import_distributor_target=='1'\">\r\n    <button mat-fab color=\"accent\" class=\"pulse\" [matMenuTriggerFor]=\"menu\">\r\n      <i class=\"material-icons\">apps</i>\r\n      Action\r\n    </button>\r\n    <mat-menu #menu=\"matMenu\">\r\n      <button mat-menu-item (click)=\"exportAsXLSX();\"\r\n        *ngIf=\"distributor_list.length > 0 && assign_login_data2.export_distributor_target=='1'\">\r\n        <mat-icon>download</mat-icon>\r\n        <span>Download in excel</span>\r\n      </button>\r\n      <button mat-menu-item (click)=\"upload_excel('add new');\"\r\n        *ngIf=\" assign_login_data2.import_distributor_target=='1'\">\r\n        <mat-icon>cloud_upload</mat-icon>\r\n        <span>Upload New Data</span>\r\n      </button>\r\n      <!-- <button mat-menu-item (click)=\"upload_excel('update');\"\r\n        *ngIf=\"distributor_list.length > 0 && assign_login_data2.import_distributor_target=='1'\">\r\n        <mat-icon>update</mat-icon>\r\n        <span>Update Existing Data</span>\r\n      </button> -->\r\n    </mat-menu>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/distributor-target-achievement/distributor-target-achievement.component.scss":
/*!**********************************************************************************************!*\
  !*** ./src/app/distributor-target-achievement/distributor-target-achievement.component.scss ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/distributor-target-achievement/distributor-target-achievement.component.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/distributor-target-achievement/distributor-target-achievement.component.ts ***!
  \********************************************************************************************/
/*! exports provided: DistributorTargetAchievementComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DistributorTargetAchievementComponent", function() { return DistributorTargetAchievementComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_services_DatabaseService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/_services/DatabaseService */ "./src/_services/DatabaseService.ts");
/* harmony import */ var src_app_upload_file_modal_upload_file_modal_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/upload-file-modal/upload-file-modal.component */ "./src/app/upload-file-modal/upload-file-modal.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var src_app_localstorage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/localstorage.service */ "./src/app/localstorage.service.ts");
/* harmony import */ var ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng6-toastr-notifications */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/ng6-toastr-notifications/fesm5/ng6-toastr-notifications.js");
/* harmony import */ var _dialog_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../dialog.component */ "./src/app/dialog.component.ts");








var DistributorTargetAchievementComponent = /** @class */ (function () {
    function DistributorTargetAchievementComponent(serve, toast, alrt, dialog, session) {
        this.serve = serve;
        this.toast = toast;
        this.alrt = alrt;
        this.dialog = dialog;
        this.session = session;
        this.come_from = '';
        this.exp_data = [];
        this.excel_data = [];
        this.fabBtnValue = 'excel';
        this.loader = false;
        this.datanotfound = false;
        this.sr_no = 0;
        this.pagenumber = 1;
        this.start = 0;
        this.value = {};
        this.distributor_list = [];
        this.assign_login_data = [];
        this.assign_login_data2 = [];
        this.page_limit = serve.pageLimit;
        this.downurl = serve.downloadUrl;
        this.assign_login_data = this.session.getSession();
        this.assign_login_data = this.assign_login_data.value;
        this.assign_login_data2 = this.assign_login_data.data;
        this.assign_login_data = this.assign_login_data.assignModule;
        this.get_distributor_list();
    }
    DistributorTargetAchievementComponent.prototype.ngOnInit = function () {
    };
    DistributorTargetAchievementComponent.prototype.pervious = function () {
        this.start = this.start - this.page_limit;
        this.get_distributor_list();
    };
    DistributorTargetAchievementComponent.prototype.nextPage = function () {
        this.start = this.start + this.page_limit;
        this.get_distributor_list();
    };
    DistributorTargetAchievementComponent.prototype.lastBtnValue = function (value) {
        this.fabBtnValue = value;
    };
    DistributorTargetAchievementComponent.prototype.refresh1 = function () {
        this.value = {};
        this.get_distributor_list();
    };
    DistributorTargetAchievementComponent.prototype.get_distributor_list = function () {
        var _this = this;
        if (this.pagenumber > this.total_page) {
            this.pagenumber = this.total_page;
            this.start = this.pageCount - this.page_limit;
        }
        if (this.start < 0) {
            this.start = 0;
        }
        this.loader = true;
        this.serve.post_rqst({ 'user_id': this.assign_login_data2.id, 'start': this.start, 'pagelimit': this.page_limit, 'filter': this.value }, "Target/distributorTargetAchievementList").subscribe((function (result) {
            if (result['statusCode'] == 200) {
                _this.distributor_list = result['target_list'];
                _this.pageCount = result['count'];
                if (_this.distributor_list.length == 0) {
                    _this.datanotfound = true;
                }
                else {
                    _this.datanotfound = false;
                }
                if (_this.pagenumber > _this.total_page) {
                    _this.pagenumber = _this.total_page;
                    _this.start = _this.pageCount - _this.page_limit;
                }
                else {
                    _this.pagenumber = Math.ceil(_this.start / _this.page_limit) + 1;
                }
                _this.total_page = Math.ceil(_this.pageCount / _this.page_limit);
                _this.sr_no = _this.pagenumber - 1;
                _this.sr_no = _this.sr_no * _this.page_limit;
                setTimeout(function () {
                    _this.loader = false;
                }, 200);
            }
            else {
                _this.toast.errorToastr(result['statusMsg']);
            }
        }));
    };
    DistributorTargetAchievementComponent.prototype.upload_excel = function (type) {
        var _this = this;
        var dialogRef = this.alrt.open(src_app_upload_file_modal_upload_file_modal_component__WEBPACK_IMPORTED_MODULE_3__["UploadFileModalComponent"], {
            width: '500px',
            panelClass: 'cs-modal',
            disableClose: true,
            data: {
                'from': 'distributor_target_achievement',
                'modal_type': type
            }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            _this.get_distributor_list();
        });
    };
    DistributorTargetAchievementComponent.prototype.exportAsXLSX = function () {
        var _this = this;
        this.loader = true;
        this.serve.FileData({ 'search': this.value }, "Excel/distributorTargetAchievementList")
            .subscribe(function (resp) {
            if (resp['msg'] == true) {
                _this.loader = false;
                window.open(_this.downurl + resp['filename']);
                _this.get_distributor_list();
            }
            else {
            }
        });
    };
    DistributorTargetAchievementComponent.prototype.sendMail = function () {
        var _this = this;
        this.dialog.confirm("You Want To Send Msg ?").then(function (result) {
            if (result) {
                _this.loader = true;
                _this.serve.post_rqst({}, "Target/sendDisWhatsapp").subscribe(function (result) {
                    if (result['statusCode'] == 200) {
                        _this.loader = false;
                        _this.toast.successToastr(result['statusMsg']);
                        _this.get_distributor_list();
                    }
                    else {
                        _this.loader = false;
                        _this.toast.errorToastr(result['statusMsg']);
                    }
                }, function (err) {
                    _this.loader = false;
                    _this.toast.errorToastr("Something Went Wrong");
                });
            }
        });
    };
    DistributorTargetAchievementComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-distributor-target-achievement',
            template: __webpack_require__(/*! ./distributor-target-achievement.component.html */ "./src/app/distributor-target-achievement/distributor-target-achievement.component.html"),
            styles: [__webpack_require__(/*! ./distributor-target-achievement.component.scss */ "./src/app/distributor-target-achievement/distributor-target-achievement.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_services_DatabaseService__WEBPACK_IMPORTED_MODULE_2__["DatabaseService"], ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_6__["ToastrManager"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialog"], _dialog_component__WEBPACK_IMPORTED_MODULE_7__["DialogComponent"], src_app_localstorage_service__WEBPACK_IMPORTED_MODULE_5__["sessionStorage"]])
    ], DistributorTargetAchievementComponent);
    return DistributorTargetAchievementComponent;
}());



/***/ })

}]);