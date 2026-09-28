(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["master-point-category-module-point-category-module"],{

/***/ "./src/app/master/point-category-add/point-category-add.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/master/point-category-add/point-category-add.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-container\">\r\n  <!-- <app-loader *ngIf=\"loader\"></app-loader> -->\r\n  <div class=\"tools-container\">\r\n    <a mat-icon-button matTooltip=\"Back\" routerLink=\"/point-list\">\r\n      <i class=\"material-icons\">arrow_back</i>\r\n    </a>\r\n    <h2>{{point_category_id ? 'Edit' : 'Add New'}} Point Category</h2>\r\n  </div>\r\n  <div class=\"container pt10 pl10 pr10 pb50\">\r\n    <form #f=\"ngForm\" (ngSubmit)=\" f.valid && submitDetail()\">\r\n      <div class=\"row\">\r\n        <div class=\"col s12\">\r\n          <div class=\"card pb0\">\r\n            <div class=\"card-head\">\r\n              <h2>Basic Information</h2>\r\n            </div>\r\n            <div class=\"card-body cs-form\">\r\n              <div class=\"row\">\r\n                <div class=\"col s12 m3 l3\">\r\n                  <mat-form-field appearance=\"outline\">\r\n                    <mat-label>Category Type</mat-label>\r\n                    <mat-select name=\"point_type\" [(ngModel)]=\"data.point_type\" #point_type=\"ngModel\"\r\n                      [ngClass]=\"{'has-error' : point_type.invalid } \" required>\r\n                      <mat-option value=\"\" disabled>Select</mat-option>\r\n                      <!-- <mat-option value=\"Master Box\">Box</mat-option> -->\r\n                      <mat-option value=\"Item Box\">Product</mat-option>\r\n                    </mat-select>\r\n                  </mat-form-field>\r\n                  <div class=\"alert alert-danger\" *ngIf=\"point_type.touched || f.submitted\">\r\n                    <p *ngIf=\"point_type.errors?.required\">This field is required</p>\r\n                  </div>\r\n                </div>\r\n                <div class=\"col s12 m3 l3\">\r\n                  <mat-form-field appearance=\"outline\">\r\n                    <mat-label>Category Name</mat-label>\r\n                    <input matInput placeholder=\"Type Here ...\" name=\"point_category_name\"\r\n                      #point_category_name=\"ngModel\" [(ngModel)]=\"data.point_category_name\" required>\r\n                  </mat-form-field>\r\n                  <div class=\"alert alert-danger\" *ngIf=\"point_category_name.touched || f.submitted\">\r\n                    <p *ngIf=\"point_category_name.errors?.required\">This field is required</p>\r\n                  </div>\r\n                </div>\r\n                <ng-container *ngIf=\"data.point_type == 'Master Box'\">\r\n                  <div class=\"col s12 m3 l3\">\r\n                    <mat-form-field appearance=\"outline\">\r\n                      <mat-label>Scanning Point</mat-label>\r\n                      <input matInput placeholder=\"Type Here ...\" name=\"master_point\" #master_point=\"ngModel\"\r\n                        [(ngModel)]=\"data.master_point\" onkeypress=\"return event.charCode>=48 && event.charCode<=57\"\r\n                        required>\r\n                    </mat-form-field>\r\n                    <div class=\"alert alert-danger\" *ngIf=\"master_point.touched || f.submitted\">\r\n                      <p *ngIf=\"master_point.errors?.required\">This field is required</p>\r\n                    </div>\r\n                  </div>\r\n                </ng-container>\r\n\r\n                <ng-container *ngIf=\"data.point_type == 'Item Box'\">\r\n                  <div class=\"col s12 m3 l3\">\r\n                    <mat-form-field appearance=\"outline\">\r\n                      <mat-label>Ply Expert Point</mat-label>\r\n                      <input matInput placeholder=\"Type Here ...\" name=\"ply_expert_point\" #ply_expert_point=\"ngModel\"\r\n                        [(ngModel)]=\"data.ply_expert_point\"\r\n                        onkeypress=\"return event.charCode>=48 && event.charCode<=57\">\r\n                    </mat-form-field>\r\n                    <div class=\"alert alert-danger\" *ngIf=\"ply_expert_point.touched || f.submitted\">\r\n                      <p *ngIf=\"ply_expert_point.errors?.required\">This field is required</p>\r\n                    </div>\r\n                  </div>\r\n\r\n                  <div class=\"col s12 m3 l3\">\r\n                    <mat-form-field appearance=\"outline\">\r\n                      <mat-label>Ambassador Point</mat-label>\r\n                      <input matInput placeholder=\"Type Here ...\" name=\"ambassador_point\" #ambassador_point=\"ngModel\"\r\n                        [(ngModel)]=\"data.ambassador_point\"\r\n                        onkeypress=\"return event.charCode>=48 && event.charCode<=57\">\r\n                    </mat-form-field>\r\n                    <div class=\"alert alert-danger\" *ngIf=\"ambassador_point.touched || f.submitted\">\r\n                      <p *ngIf=\"ambassador_point.errors?.required\">This field is required</p>\r\n                    </div>\r\n                  </div>\r\n\r\n                  <div class=\"col s12 m3 l3\">\r\n                    <mat-form-field appearance=\"outline\">\r\n                      <mat-label>Fabricator Point</mat-label>\r\n                      <input matInput placeholder=\"Type Here ...\" name=\"fabricator_point\" #fabricator_point=\"ngModel\"\r\n                        [(ngModel)]=\"data.fabricator_point\"\r\n                        onkeypress=\"return event.charCode>=48 && event.charCode<=57\">\r\n                    </mat-form-field>\r\n                    <div class=\"alert alert-danger\" *ngIf=\"fabricator_point.touched || f.submitted\">\r\n                      <p *ngIf=\"fabricator_point.errors?.required\">This field is required</p>\r\n                    </div>\r\n                  </div>\r\n\r\n                  <!-- <div class=\"col s12 m3 l3\">\r\n                    <mat-form-field appearance=\"outline\">\r\n                      <mat-label>Dealer Point</mat-label>\r\n                      <input matInput placeholder=\"Type Here ...\" name=\"influencer_transfer_point\"\r\n                        #influencer_transfer_point=\"ngModel\" [(ngModel)]=\"data.influencer_transfer_point\"\r\n                        onkeypress=\"return event.charCode>=48 && event.charCode<=57\">\r\n                    </mat-form-field>\r\n                    <div class=\"alert alert-danger\" *ngIf=\"influencer_transfer_point.touched || f.submitted\">\r\n                      <p *ngIf=\"influencer_transfer_point.errors?.required\">This field is required</p>\r\n                    </div>\r\n                  </div> -->\r\n                </ng-container>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"row\">\r\n        <div class=\"col s12\">\r\n          <div class=\"text-right\">\r\n            <button [ngClass]=\"{'loading': savingFlag == true}\" mat-raised-button color=\"accent\" type=\"submit\"\r\n              [disabled]=\"savingFlag == true\">\r\n              {{(savingFlag == true || point_category_id) ? (point_category_id ? 'Update' : 'Saving') : 'Save'}}\r\n\r\n            </button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </form>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/master/point-category-add/point-category-add.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/master/point-category-add/point-category-add.component.ts ***!
  \***************************************************************************/
/*! exports provided: PointCategoryAddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PointCategoryAddComponent", function() { return PointCategoryAddComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_services_DatabaseService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/_services/DatabaseService */ "./src/_services/DatabaseService.ts");
/* harmony import */ var ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng6-toastr-notifications */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/ng6-toastr-notifications/fesm5/ng6-toastr-notifications.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/router/fesm5/router.js");





var PointCategoryAddComponent = /** @class */ (function () {
    function PointCategoryAddComponent(service, rout, toast, route) {
        this.service = service;
        this.rout = rout;
        this.toast = toast;
        this.route = route;
        this.data = {};
        this.savingFlag = false;
        this.userData = JSON.parse(localStorage.getItem('st_user'));
        this.userId = this.userData['data']['id'];
        this.userName = this.userData['data']['name'];
        this.data.point_type = 'Item Box';
    }
    PointCategoryAddComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.point_category_id = params['id'];
            if (_this.point_category_id) {
                _this.pointCategory_data();
            }
        });
    };
    PointCategoryAddComponent.prototype.pointCategory_data = function () {
        var _this = this;
        this.service.post_rqst({ 'id': this.point_category_id }, 'Master/pointCategoryMasterDetail').subscribe(function (resp) {
            _this.data = resp['point_category_detail'];
        });
    };
    PointCategoryAddComponent.prototype.MobileNumber = function (event) {
        var pattern = /[0-9\+\-\ ]/;
        var inputChar = String.fromCharCode(event.charCode);
        if (event.keyCode != 8 && !pattern.test(inputChar)) {
            event.preventDefault();
        }
    };
    PointCategoryAddComponent.prototype.submitDetail = function () {
        var _this = this;
        this.data.created_by_name = this.userName;
        this.data.created_by_id = this.userId;
        this.savingFlag = true;
        var header;
        if (this.point_category_id) {
            if (this.data.point_type == 'Master Box') {
                this.data.influencer_point = '';
                this.data.scanning_point = '';
            }
            else {
                this.data.master_point = '';
            }
            header = this.service.post_rqst(this.data, 'Master/editPointCategory');
        }
        else {
            header = this.service.post_rqst(this.data, 'Master/addPointCategory');
        }
        header.subscribe(function (resp) {
            if (resp['statusCode'] == 200) {
                _this.toast.successToastr(resp['statusMsg']);
                _this.savingFlag = false;
                _this.rout.navigate(['/point-list']);
            }
            else {
                _this.toast.errorToastr(resp['statusMsg']);
                _this.savingFlag = false;
            }
        }, function (error) {
        });
    };
    PointCategoryAddComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-point-category-add',
            template: __webpack_require__(/*! ./point-category-add.component.html */ "./src/app/master/point-category-add/point-category-add.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_services_DatabaseService__WEBPACK_IMPORTED_MODULE_2__["DatabaseService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_3__["ToastrManager"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]])
    ], PointCategoryAddComponent);
    return PointCategoryAddComponent;
}());



/***/ }),

/***/ "./src/app/master/point-category-list/point-category-list.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/master/point-category-list/point-category-list.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-container\">\r\n  <div class=\"tools-container\">\r\n    <h2>Point Category List</h2>\r\n    <div class=\"left-auto left-auto df ac flex-gap-10\">\r\n      <button mat-icon-button matTooltip=\"Refresh\" (click)=\"refresh() \">\r\n        <i class=\"material-icons\">refresh</i>\r\n      </button>\r\n      <div class=\"pagination\" *ngIf=\"pointCategories_data.length > 0\">\r\n        <div class=\"pagination-content\">\r\n          Pages\r\n          <span>{{pagenumber}}</span>\r\n          of\r\n          <span>{{total_page}}</span>\r\n        </div>\r\n        <div class=\"page-nav\">\r\n          <button mat-icon-button matTooltip=\"Older\" (click)=\"pervious()\" [disabled]=\"start == 0\">\r\n            <i class=\"material-icons\">navigate_before</i>\r\n          </button>\r\n          <button mat-icon-button matTooltip=\"Newer\" (click)=\"nextPage()\" [disabled]=\"pagenumber == total_page \">\r\n            <i class=\"material-icons\">navigate_next</i>\r\n          </button>\r\n        </div>\r\n      </div>\r\n      <!-- <div class=\"mat-tabbar\">\r\n        <button mat-button [ngClass]=\"active_tab == 'Master Box' ? 'active' : ''\"\r\n          (click)=\"active_tab = 'Master Box'; pointCategory_data(active_tab);\"><i\r\n            class=\"material-icons\">all_inbox</i>Box</button>\r\n        <button mat-button [ngClass]=\"active_tab == 'Item Box' ? 'active' : ''\"\r\n          (click)=\"active_tab = 'Item Box'; pointCategory_data(active_tab);\"><i\r\n            class=\"material-icons\">category</i>Product</button>\r\n      </div> -->\r\n    </div>\r\n  </div>\r\n  <div class=\"container pb100\">\r\n    <div class=\"cs-table\">\r\n      <div class=\"sticky-head\">\r\n        <div class=\"table-head\">\r\n          <table>\r\n            <tr>\r\n              <th class=\"w60\">Sr.No</th>\r\n              <th class=\"w90\">Date</th>\r\n              <th>Category Name</th>\r\n              <th class=\"w120 text-center\">\r\n                <ng-container *ngIf=\"active_tab == 'Master Box'\">\r\n                  Scanning Point\r\n                </ng-container>\r\n                <ng-container *ngIf=\"active_tab == 'Item Box'\">\r\n                  Ply Expert Point\r\n                </ng-container>\r\n\r\n              </th>\r\n              <th class=\"w120 text-center\">\r\n\r\n                <ng-container *ngIf=\"active_tab == 'Item Box'\">\r\n                  Ambassador Point\r\n                </ng-container>\r\n              </th>\r\n              <!-- <th class=\"w120 text-center\" *ngIf=\"active_tab == 'Item Box'\">Dealer Point</th> -->\r\n              <th class=\"w100   text-center\"\r\n                *ngIf=\"logined_user_data.edit_point_master=='1' || logined_user_data.delete_point_master=='1'\">Action\r\n              </th>\r\n            </tr>\r\n          </table>\r\n        </div>\r\n\r\n        <div class=\"table-head border-top\">\r\n          <table>\r\n            <tr>\r\n              <th class=\"w60\">&nbsp;</th>\r\n              <th class=\"w90\">\r\n                <div class=\"th-search-acmt\">\r\n                  <mat-form-field class=\"cs-input date-column infix-bodr\">\r\n                    <input matInput [matDatepicker]=\"picker\" placeholder=\"Date\" name=\"date_created\"\r\n                      [(ngModel)]=\"filter.date_created\" (ngModelChange)=\"date_format()\" [max]=\"today_date\" disabled>\r\n                    <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\r\n                    <mat-datepicker #picker disabled=\"false\"></mat-datepicker>\r\n                  </mat-form-field>\r\n                </div>\r\n              </th>\r\n              <th>\r\n                <div class=\"th-search-acmt\">\r\n                  <mat-form-field class=\"example-full-width cs-input select-input\">\r\n                    <input matInput placeholder=\"Search...\" type=\"text\" name=\"point_category_name\"\r\n                      [(ngModel)]=\"filter.point_category_name\" (keyup.enter)=\"pointCategory_data(active_tab)\">\r\n                  </mat-form-field>\r\n                </div>\r\n              </th>\r\n              <th class=\"w120\">&nbsp;</th>\r\n              <th class=\"w120\">&nbsp;</th>\r\n\r\n              <!-- <th class=\"w120\" *ngIf=\"active_tab == 'Item Box'\">&nbsp;</th> -->\r\n              <th class=\"w100\"\r\n                *ngIf=\"logined_user_data.edit_point_master=='1' || logined_user_data.delete_point_master=='1'\">&nbsp;\r\n              </th>\r\n            </tr>\r\n          </table>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"table-container\">\r\n        <div class=\"table-content\" *ngIf=\"pointCategories_data.length > 0\">\r\n          <table>\r\n            <ng-container *ngIf=\"!loader\">\r\n              <tr *ngFor=\"let row of pointCategories_data; let i = index;\">\r\n                <td class=\"w60\">{{i+1+sr_no}}</td>\r\n                <td class=\"w90\">{{row.date_created | date : 'd MMM y'}}</td>\r\n                <td>{{row.point_category_name}}</td>\r\n                <td class=\"w120 text-center\">\r\n                  <strong *ngIf=\"active_tab == 'Master Box'\">{{row.master_point}}</strong>\r\n                  <ng-container *ngIf=\"active_tab == 'Item Box'\">\r\n                    <strong>{{row.ply_expert_point}}</strong>\r\n                  </ng-container>\r\n                </td>\r\n                <td class=\"w120 text-center\">\r\n                  <ng-container *ngIf=\"active_tab == 'Item Box'\">\r\n                    <strong>{{row.ambassador_point}}</strong>\r\n                  </ng-container>\r\n                </td>\r\n\r\n                <!-- <td class=\"w120 text-center\" *ngIf=\"active_tab == 'Item Box'\">\r\n                  <strong>{{row.influencer_transfer_point}}</strong>\r\n                </td> -->\r\n                <td class=\"w100 text-center\"\r\n                  *ngIf=\"logined_user_data.edit_point_master=='1' || logined_user_data.delete_point_master=='1'\">\r\n                  <div class=\"action-button\">\r\n                    <button mat-icon-button *ngIf=\"logined_user_data.edit_point_master=='1'\" matTooltip=\"Edit\"\r\n                      [routerLink]=\"[ 'point-add/', row.id ]\">\r\n                      <i class=\"material-icons edit\">edit</i>\r\n                    </button>\r\n                    <button mat-icon-button matTooltip=\"Delete\" (click)=\"delete(row.id)\"\r\n                      *ngIf=\"logined_user_data.delete_point_master=='1'\">\r\n                      <i class=\"material-icons del\">delete</i>\r\n                    </button>\r\n                  </div>\r\n                </td>\r\n              </tr>\r\n            </ng-container>\r\n\r\n\r\n\r\n            <ng-container *ngIf=\"loader\">\r\n              <tr class=\"sk-loading\" *ngFor=\"let row of [].constructor(10)\">\r\n                <td class=\"w60\">\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n                <td class=\"w90\">\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n                <td>\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n                <td class=\"w120\">\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n\r\n                <td class=\"w120\">\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n                <!-- <td class=\"w120\" *ngIf=\"active_tab == 'Item Box'\">\r\n                  <div>&nbsp;</div>\r\n                </td> -->\r\n                <td class=\"w100\"\r\n                  *ngIf=\"logined_user_data.edit_point_master=='1' || logined_user_data.delete_point_master=='1'\">\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n              </tr>\r\n            </ng-container>\r\n\r\n          </table>\r\n        </div>\r\n\r\n        <div *ngIf=\"pointCategories_data.length == 0\">\r\n          <app-not-result-found></app-not-result-found>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n\r\n  </div>\r\n\r\n\r\n\r\n\r\n  <div class=\"fab-btns\" *ngIf=\" logined_user_data.export_point_master=='1' || logined_user_data.add_point_master=='1'\">\r\n    <button class=\"pulse excel\" mat-fab color=\"primary\" [ngClass]=\"{'pulse': fabBtnValue=='add'}\"\r\n      [matMenuTriggerFor]=\"menu\">\r\n      <i class=\"material-icons\">apps</i>\r\n      Action\r\n    </button>\r\n  </div>\r\n  <mat-menu #menu=\"matMenu\">\r\n    <button mat-menu-item (click)=\"lastBtnValue('excel'); getpointCategoryExcel('')\"\r\n      *ngIf=\"pointCategories_data.length > 0 &&  logined_user_data.export_point_master=='1' \">\r\n      <mat-icon>download</mat-icon>\r\n      <span>Download excel</span>\r\n    </button>\r\n\r\n    <button mat-menu-item routerLink=\"point-add\" *ngIf=\"logined_user_data.add_point_master=='1'\">\r\n      <mat-icon>add</mat-icon>\r\n      <span>Add New</span>\r\n    </button>\r\n  </mat-menu>\r\n"

/***/ }),

/***/ "./src/app/master/point-category-list/point-category-list.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/master/point-category-list/point-category-list.component.ts ***!
  \*****************************************************************************/
/*! exports provided: PointCategoryListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PointCategoryListComponent", function() { return PointCategoryListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_services_DatabaseService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/_services/DatabaseService */ "./src/_services/DatabaseService.ts");
/* harmony import */ var src_app_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/dialog.component */ "./src/app/dialog.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! moment */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var src_app_localstorage_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/localstorage.service */ "./src/app/localstorage.service.ts");
/* harmony import */ var ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng6-toastr-notifications */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/ng6-toastr-notifications/fesm5/ng6-toastr-notifications.js");


// import { MyserviceService } from 'src/app/myservice.service';






var PointCategoryListComponent = /** @class */ (function () {
    function PointCategoryListComponent(service, toast, alert, dialog, router, session) {
        this.service = service;
        this.toast = toast;
        this.alert = alert;
        this.dialog = dialog;
        this.router = router;
        this.session = session;
        this.fabBtnValue = 'add';
        this.active_tab = 'Item Box';
        this.no_found = false;
        this.pointCategories_data = [];
        this.loader = false;
        this.filter = {};
        this.sr_no = 0;
        this.pagenumber = 1;
        this.start = 0;
        this.assign_login_data = {};
        this.logined_user_data = {};
        this.page_limit = service.pageLimit;
        this.downurl = service.downloadUrl;
        this.pointCategory_data(this.active_tab);
        this.assign_login_data = this.session.getSession();
        this.logined_user_data = this.assign_login_data.value.data;
        this.today_date = new Date();
    }
    PointCategoryListComponent.prototype.ngOnInit = function () {
    };
    PointCategoryListComponent.prototype.pervious = function () {
        this.start = this.start - this.page_limit;
        this.pointCategory_data(this.active_tab);
    };
    PointCategoryListComponent.prototype.nextPage = function () {
        this.start = this.start + this.page_limit;
        this.pointCategory_data(this.active_tab);
    };
    PointCategoryListComponent.prototype.date_format = function () {
        this.filter.date_created = moment__WEBPACK_IMPORTED_MODULE_5__(this.filter.date_created).format('YYYY-MM-DD');
        this.pointCategory_data(this.active_tab);
    };
    PointCategoryListComponent.prototype.pointCategory_data = function (tab) {
        var _this = this;
        this.loader = true;
        if (this.pagenumber > this.total_page) {
            this.pagenumber = this.total_page;
            this.start = this.pageCount - this.page_limit;
        }
        if (this.start < 0) {
            this.start = 0;
        }
        this.filter.point_type = tab;
        this.service.post_rqst({ 'filter': this.filter, 'start': this.start, 'pagelimit': this.page_limit }, 'Master/pointCategoryMasterListForPointCategory').subscribe(function (resp) {
            if (resp['statusCode'] == 200) {
                _this.pointCategories_data = resp['point_category_list'];
                _this.pageCount = resp['count'];
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
                }, 700);
            }
            else {
                _this.toast.errorToastr(resp['statusMsg']);
            }
        }, function (error) {
        });
    };
    PointCategoryListComponent.prototype.getpointCategoryExcel = function (user_type) {
        var _this = this;
        this.service.post_rqst({ 'filter': this.filter }, "Excel/point_category_master_list_for_export").subscribe(function (result) {
            if (result['msg'] == true) {
                window.open(_this.downurl + result['filename']);
                _this.pointCategory_data(_this.active_tab);
            }
            else {
            }
        });
    };
    PointCategoryListComponent.prototype.lastBtnValue = function (value) {
        this.fabBtnValue = value;
    };
    PointCategoryListComponent.prototype.refresh = function () {
        this.filter = {};
        this.pointCategory_data(this.active_tab);
    };
    PointCategoryListComponent.prototype.edit = function (id) {
        this.router.navigate(['/point-add/' + id]);
    };
    PointCategoryListComponent.prototype.delete = function (id) {
        var _this = this;
        this.alert.delete('Point Category !').then(function (result) {
            if (result) {
                _this.service.post_rqst({ 'id': id }, "Master/deletePointCategoryMaster").subscribe(function (result) {
                    if (result['statusCode'] == 200) {
                        _this.toast.successToastr(result['statusMsg']);
                        _this.pointCategory_data(_this.active_tab);
                    }
                    else {
                        _this.toast.errorToastr(result['statusMsg']);
                    }
                });
            }
        });
    };
    PointCategoryListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-point-category-list',
            template: __webpack_require__(/*! ./point-category-list.component.html */ "./src/app/master/point-category-list/point-category-list.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_services_DatabaseService__WEBPACK_IMPORTED_MODULE_2__["DatabaseService"], ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_7__["ToastrManager"], src_app_dialog_component__WEBPACK_IMPORTED_MODULE_3__["DialogComponent"], src_app_dialog_component__WEBPACK_IMPORTED_MODULE_3__["DialogComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], src_app_localstorage_service__WEBPACK_IMPORTED_MODULE_6__["sessionStorage"]])
    ], PointCategoryListComponent);
    return PointCategoryListComponent;
}());



/***/ }),

/***/ "./src/app/master/point-category-module/point-category.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/master/point-category-module/point-category.module.ts ***!
  \***********************************************************************/
/*! exports provided: PointCategoryModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PointCategoryModule", function() { return PointCategoryModule; });
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
/* harmony import */ var _point_category_add_point_category_add_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../point-category-add/point-category-add.component */ "./src/app/master/point-category-add/point-category-add.component.ts");
/* harmony import */ var _point_category_list_point_category_list_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../point-category-list/point-category-list.component */ "./src/app/master/point-category-list/point-category-list.component.ts");














var pointCategoryRoutes = [
    {
        path: "", children: [
            { path: "", component: _point_category_list_point_category_list_component__WEBPACK_IMPORTED_MODULE_13__["PointCategoryListComponent"], canActivate: [src_app_auth_component_guard__WEBPACK_IMPORTED_MODULE_11__["AuthComponentGuard"]], data: { expectedRole: ['1'] } },
            { path: "point-add", component: _point_category_add_point_category_add_component__WEBPACK_IMPORTED_MODULE_12__["PointCategoryAddComponent"], canActivate: [src_app_auth_component_guard__WEBPACK_IMPORTED_MODULE_11__["AuthComponentGuard"]], data: { expectedRole: ['1'] } },
            { path: "point-add/:id", component: _point_category_add_point_category_add_component__WEBPACK_IMPORTED_MODULE_12__["PointCategoryAddComponent"], canActivate: [src_app_auth_component_guard__WEBPACK_IMPORTED_MODULE_11__["AuthComponentGuard"]], data: { expectedRole: ['1'] } },
        ]
    }
];
var PointCategoryModule = /** @class */ (function () {
    function PointCategoryModule() {
    }
    PointCategoryModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_point_category_list_point_category_list_component__WEBPACK_IMPORTED_MODULE_13__["PointCategoryListComponent"], _point_category_add_point_category_add_component__WEBPACK_IMPORTED_MODULE_12__["PointCategoryAddComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild(pointCategoryRoutes),
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
    ], PointCategoryModule);
    return PointCategoryModule;
}());



/***/ })

}]);