(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["userdesignation-userdesignation-module-userdesignation-module"],{

/***/ "./src/app/incentive-add/incentive-add.component.html":
/*!************************************************************!*\
  !*** ./src/app/incentive-add/incentive-add.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-container\">\r\n  <div class=\"tools-container\">\r\n    <a mat-icon-button matTooltip=\"Back\" (click)=\"back()\">\r\n      <i class=\"material-icons\">arrow_back</i>\r\n    </a>\r\n    <h2>Incentive</h2>\r\n    <div class=\"left-auto left-auto df ac flex-gap-10\">\r\n      <button mat-icon-button matTooltip=\"Refresh\" (click)=\"refresh() \">\r\n        <i class=\"material-icons\">refresh</i>\r\n      </button>\r\n\r\n      <!-- <div class=\"mat-tabbar\">\r\n           <button mat-button [ngClass]=\"{'active' :activeTab== 'S'}\"\r\n          (click)=\"activeTab= 'S'; getSegment()\"><i class=\"material-icons\">shopping_cart</i>S Category</button>\r\n           <button mat-button [ngClass]=\"{'active' :activeTab== 'SS'}\"\r\n          (click)=\"activeTab= 'SS'; getSegmentSS()\"><i class=\"material-icons\">shopping_cart</i>SS Category</button>\r\n      </div> -->\r\n    </div>\r\n  </div>\r\n\r\n  <!-- <div class=\"container container-scroll\">\r\n    <div class=\"cs-table horizontal-scroll\">\r\n      <div class=\"sticky-head\">\r\n        <div class=\"table-head\">\r\n          <table>\r\n            <tr>\r\n              <th class=\"w300\">Brand</th>\r\n              <ng-container *ngFor=\"let row of discountList\">\r\n                <th class=\"w200 text-center\">{{row.brand_name}}</th>\r\n              </ng-container>\r\n            </tr>\r\n          </table>\r\n        </div>\r\n      </div>\r\n  \r\n      <div class=\"table-container\">\r\n        <div class=\"table-content\">\r\n          <table>\r\n            <ng-container *ngIf=\"!loader\">\r\n              <tr>\r\n                <th class=\"w300\">Incentive</th>\r\n                <ng-container *ngFor=\"let row of discountList\">\r\n                  <th class=\"w200 text-center\">\r\n                  \r\n\r\n                    <div class=\"th-search-acmt mr30 ml30 mt15 mb15\">\r\n                      <mat-form-field>\r\n                          <input type=\"number\" matInput\r\n                              name=\"incentive_1{{i}}\"\r\n                              #incentive_1=\"ngModel\"\r\n                              [(ngModel)]=\"row.incentive_1\">\r\n                      </mat-form-field>\r\n                  </div>\r\n                  </th>\r\n                </ng-container>\r\n              </tr>\r\n            </ng-container>\r\n            <ng-container *ngIf=\"loader\">\r\n              <tr class=\"sk-loading\" *ngFor=\"let row of [].constructor(10)\">\r\n                <td class=\"w50\">\r\n                  <div class=\"skeleton-loader\">&nbsp;</div>\r\n                </td>\r\n                <td class=\"w300 text-center\">\r\n                  <div class=\"skeleton-loader\">&nbsp;</div>\r\n                </td>\r\n              \r\n              </tr>\r\n            </ng-container>\r\n          </table>\r\n        </div>\r\n      </div>\r\n      <div *ngIf=\"discountList.length < 1\">\r\n        <app-not-result-found></app-not-result-found>\r\n      </div>\r\n    </div>\r\n  </div> -->\r\n  \r\n  <div class=\"container container-scroll\">\r\n    <div class=\"cs-table horizontal-scroll\">\r\n      <div class=\"sticky-head\">\r\n        <div class=\"table-head\">\r\n          <table>\r\n            <tr>\r\n              <th class=\"text-center\">Brand</th>\r\n              <th  class=\"w300 text-center\" colspan=\"2\">Primary</th>\r\n              <th   class=\"w300 text-center\" colspan=\"2\">Seconadary</th>\r\n             \r\n              \r\n            </tr>\r\n            <tr>\r\n              <th ></th>\r\n              <th  class=\"w150 text-center\">S Incentive %</th>\r\n              <th  class=\"w150 text-center\">SS Incentive %</th>\r\n              <th  class=\"w150 text-center\">S Incentive %</th>   \r\n              <th class=\"w150 text-center\">SS Incentive %</th>\r\n              \r\n            </tr>\r\n            \r\n          </table>\r\n        </div>\r\n      </div>\r\n  \r\n      <div class=\"table-container\">\r\n        <div class=\"table-content\">\r\n          <table>\r\n            <ng-container *ngIf=\"!loader\">\r\n              <tr *ngFor=\"let row of discountList\">\r\n               \r\n                <td >{{row.brand_name}}</td> \r\n                <td  class=\"w150\">\r\n                  \r\n\r\n                  <div class=\"th-search-acmt\">\r\n                    <mat-form-field>\r\n                        <input type=\"number\" matInput\r\n                            name=\"incentive_S_primary{{i}}\"\r\n                            #incentive_S_primary=\"ngModel\"\r\n                            [(ngModel)]=\"row.incentive_S_primary\">\r\n                    </mat-form-field>\r\n                </div>\r\n                </td>\r\n                <td  class=\"w150\">\r\n                  \r\n\r\n                  <div class=\"th-search-acmt\">\r\n                    <mat-form-field>\r\n                        <input type=\"number\" matInput\r\n                            name=\"incentive_SS_primary{{i}}\"\r\n                            #incentive_SS_primary=\"ngModel\" \r\n                            [(ngModel)]=\"row.incentive_SS_primary\">\r\n                    </mat-form-field>\r\n                </div>\r\n                </td>\r\n                  <td  class=\"w150\">\r\n                  \r\n\r\n                    <div class=\"th-search-acmt\">\r\n                      <mat-form-field>\r\n                          <input type=\"number\" matInput\r\n                              name=\"incentive_S{{i}}\"\r\n                              #incentive_S=\"ngModel\"\r\n                              [(ngModel)]=\"row.incentive_S\">\r\n                      </mat-form-field>\r\n                  </div>\r\n                  </td>\r\n                  <td  class=\"w150\">\r\n                  \r\n\r\n                    <div class=\"th-search-acmt\">\r\n                      <mat-form-field>\r\n                          <input type=\"number\" matInput\r\n                              name=\"incentive_SS{{i}}\"\r\n                              #incentive_SS=\"ngModel\"\r\n                              [(ngModel)]=\"row.incentive_SS\">\r\n                      </mat-form-field>\r\n                  </div>\r\n                  </td>\r\n                \r\n              </tr>\r\n            </ng-container>\r\n            <ng-container *ngIf=\"loader\">\r\n              <tr class=\"sk-loading\" *ngFor=\"let row of [].constructor(10)\">\r\n                <td class=\"w50\">\r\n                  <div class=\"skeleton-loader\">&nbsp;</div>\r\n                </td>\r\n                <td class=\"w300 text-center\">\r\n                  <div class=\"skeleton-loader\">&nbsp;</div>\r\n                </td>\r\n              \r\n              </tr>\r\n            </ng-container>\r\n          </table>\r\n        </div>\r\n      </div>\r\n      <div *ngIf=\"discountList.length < 1\">\r\n        <app-not-result-found></app-not-result-found>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"fab-btns\">\r\n\t\t<button mat-fab color=\"accent\" (click)=\"activeTab == 'S' ? updateIncentive() : updateIncentiveSS()\" class=\"pulse\"\r\n\t\t\t[ngClass]=\"{'loading': skLoading == true}\" [disabled]=\"skLoading\">\r\n\t\t\t<i class=\"material-icons\">update</i>\r\n\t\t\tUpdate\r\n\t\t</button>\r\n    </div>\r\n \r\n</div>"

/***/ }),

/***/ "./src/app/incentive-add/incentive-add.component.scss":
/*!************************************************************!*\
  !*** ./src/app/incentive-add/incentive-add.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/incentive-add/incentive-add.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/incentive-add/incentive-add.component.ts ***!
  \**********************************************************/
/*! exports provided: IncentiveAddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "IncentiveAddComponent", function() { return IncentiveAddComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_services_DatabaseService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/_services/DatabaseService */ "./src/_services/DatabaseService.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng6-toastr-notifications */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/ng6-toastr-notifications/fesm5/ng6-toastr-notifications.js");






var IncentiveAddComponent = /** @class */ (function () {
    function IncentiveAddComponent(serve, toast, route, location) {
        var _this = this;
        this.serve = serve;
        this.toast = toast;
        this.route = route;
        this.location = location;
        this.discountList = {};
        this.loader = false;
        this.skLoading = false;
        this.route.params.subscribe(function (params) {
            console.log(params);
            _this.id = _this.route.queryParams['_value'].id;
        });
        this.activeTab = 'S';
        this.getSegment();
    }
    IncentiveAddComponent.prototype.ngOnInit = function () {
    };
    IncentiveAddComponent.prototype.refresh = function () {
        this.getSegment();
    };
    IncentiveAddComponent.prototype.getSegment = function () {
        var _this = this;
        this.segmentLoader = true;
        var payLoad = { 'designation_id': this.id };
        this.serve.post_rqst(payLoad, "Master/drSegmentIncentiveList").subscribe(function (result) {
            if (result['statusCode'] == 200) {
                _this.discountList = result['all_segment_with_discount_list'];
                _this.segmentLoader = false;
            }
            else {
                _this.segmentLoader = false;
                // this.toast.errorToastr(result['statusMsg'])
            }
        });
    };
    IncentiveAddComponent.prototype.getSegmentSS = function () {
        var _this = this;
        this.segmentLoader = true;
        var payLoad = { 'designation_id': this.id };
        this.serve.post_rqst(payLoad, "Master/drSegmentIncentiveListSS").subscribe(function (result) {
            if (result['statusCode'] == 200) {
                _this.discountList = result['all_segment_with_discount_list'];
                _this.segmentLoader = false;
            }
            else {
                _this.segmentLoader = false;
                // this.toast.errorToastr(result['statusMsg'])
            }
        });
    };
    IncentiveAddComponent.prototype.updateIncentive = function () {
        var _this = this;
        var data = this.discountList.map(function (item) { return ({
            brand_name: item.brand_name,
            incentive_S: item.incentive_S,
            incentive_SS: item.incentive_SS,
            incentive_S_primary: item.incentive_S_primary,
            incentive_SS_primary: item.incentive_SS_primary,
            id: item.id
        }); });
        this.serve.post_rqst({ 'designation_id': this.id, 'data': data }, "Master/UpdatedrSegmentIncentive").subscribe(function (result) {
            if (result['statusCode'] == 200) {
                // this.discountList = result['all_segment_with_discount_list'];
                _this.toast.successToastr(result['statusMsg']);
                _this.getSegment();
                _this.segmentLoader = false;
            }
            else {
                _this.segmentLoader = false;
                // this.toast.errorToastr(result['statusMsg'])
            }
        });
    };
    IncentiveAddComponent.prototype.updateIncentiveSS = function () {
        var _this = this;
        var data = this.discountList.map(function (item) { return ({
            brand_name: item.brand_name,
            incentive_1: item.incentive_1,
            id: item.id
        }); });
        this.serve.post_rqst({ 'designation_id': this.id, 'data': data }, "Master/UpdatedrSegmentIncentiveSS").subscribe(function (result) {
            if (result['statusCode'] == 200) {
                // this.discountList = result['all_segment_with_discount_list'];
                _this.toast.successToastr(result['statusMsg']);
                _this.getSegmentSS();
                _this.segmentLoader = false;
            }
            else {
                _this.segmentLoader = false;
                // this.toast.errorToastr(result['statusMsg'])
            }
        });
    };
    IncentiveAddComponent.prototype.back = function () {
        this.location.back();
    };
    IncentiveAddComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-incentive-add',
            template: __webpack_require__(/*! ./incentive-add.component.html */ "./src/app/incentive-add/incentive-add.component.html"),
            styles: [__webpack_require__(/*! ./incentive-add.component.scss */ "./src/app/incentive-add/incentive-add.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_services_DatabaseService__WEBPACK_IMPORTED_MODULE_3__["DatabaseService"], ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_5__["ToastrManager"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"]])
    ], IncentiveAddComponent);
    return IncentiveAddComponent;
}());



/***/ }),

/***/ "./src/app/userdesignation/designation-modal/designation-modal.component.html":
/*!************************************************************************************!*\
  !*** ./src/app/userdesignation/designation-modal/designation-modal.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"edit-modal\">\r\n  <form name=\"detail\" #f=\"ngForm\" (ngSubmit)=\"f.valid && submitDetail()\">\r\n    <p class=\"heading mb0\">Update Module Rights</p>\r\n\r\n    <div mat-dialog-content>\r\n      <div class=\"cs-table left-right-10\">\r\n        <div class=\"stickyHead sticky-head\">\r\n          <div class=\"table-head\">\r\n            <table>\r\n              <tr>\r\n                <th class=\"w50\">S.No.</th>\r\n                <th>Module Name</th>\r\n                <th class=\"w120 text-center\">View</th>\r\n                <th class=\"w120 text-center\">Edit</th>\r\n                <th class=\"w120 text-center\">Delete</th>\r\n                <th class=\"w120 text-center\">Add</th>\r\n                <th class=\"w120 text-center\">Download Excel</th>\r\n                <th class=\"w120 text-center\">Upload Excel</th>\r\n              </tr>\r\n            </table>\r\n          </div>\r\n          <div class=\"table-head border-top\">\r\n            <table>\r\n              <tr>\r\n                <th class=\"w50\"></th>\r\n                <th>\r\n                  <div class=\"th-search-acmt\">\r\n                    <mat-form-field class=\"example-full-width cs-input\">\r\n                      <input matInput placeholder=\"Search\" name=\"moduleName\" [(ngModel)]=\"filter.moduleName\"\r\n                        (keyup)=\"searchModuleName(filter.moduleName)\">\r\n                    </mat-form-field>\r\n                  </div>\r\n                </th>\r\n                <th class=\"w120 text-center\">\r\n                  <mat-checkbox (change)=\"selectAll($event,'View')\" name=\"viewAll\" [(ngModel)]=\"checked.viewAll\"\r\n                    [checked]=\"checked.viewAll == 'true'\"></mat-checkbox>\r\n                </th>\r\n                <th class=\"w120 text-center\">\r\n                  <mat-checkbox (change)=\"selectAll($event,'Edit')\" name=\"editAll\" [(ngModel)]=\"checked.editAll\"\r\n                    [checked]=\"checked.editAll == 'true'\"></mat-checkbox>\r\n                </th>\r\n                <th class=\"w120 text-center\">\r\n                  <mat-checkbox (change)=\"selectAll($event,'Delete')\" name=\"deleteAll\" [(ngModel)]=\"checked.deleteAll\"\r\n                    [checked]=\"checked.deleteAll == 'true'\"></mat-checkbox>\r\n                </th>\r\n                <th class=\"w120 text-center\">\r\n                  <mat-checkbox (change)=\"selectAll($event,'Add')\" name=\"addAll\" [(ngModel)]=\"checked.addAll\"\r\n                    [checked]=\"checked.addAll == 'true'\"></mat-checkbox>\r\n                </th>\r\n                <th class=\"w120 text-center\">\r\n                  <mat-checkbox (change)=\"selectAll($event,'Export')\" name=\"exportAll\" [(ngModel)]=\"checked.exportAll\"\r\n                    [checked]=\"checked.exportAll == 'true'\"></mat-checkbox>\r\n                </th>\r\n                <th class=\"w120 text-center\">\r\n                  <mat-checkbox (change)=\"selectAll($event,'Import')\" name=\"importAll\" [(ngModel)]=\"checked.importAll\"\r\n                    [checked]=\"checked.importAll == 'true'\"></mat-checkbox>\r\n                </th>\r\n              </tr>\r\n            </table>\r\n          </div>\r\n\r\n        </div>\r\n\r\n        <div class=\"table-container\">\r\n          <div class=\"table-content\">\r\n            <table>\r\n              <ng-container *ngIf=\"!skLoading\">\r\n                <tr *ngFor=\"let data of assign_module_data; let i = index\">\r\n                  <td class=\"w50\">{{i+1}}</td>\r\n                  <td>{{data.module_name}}</td>\r\n                  <td class=\"w120 text-center\">\r\n                    <mat-checkbox\r\n                      *ngIf=\"data.view  == false || data.view  == 'false' || data.view  == 'true' || data.view  == true\"\r\n                      [checked]=\"data.view==true || data.view== 'true'\"\r\n                      (change)=\"assign_module('view',$event,i)\"></mat-checkbox>\r\n                    <mat-checkbox *ngIf=\"data.view== 'disable'\" [disabled]=true></mat-checkbox>\r\n                  </td>\r\n                  <td class=\"w120 text-center\">\r\n                    <mat-checkbox\r\n                      *ngIf=\"data.edit  == false || data.edit  == 'false' || data.edit  == 'true' || data.edit  == true\"\r\n                      [checked]=\"data.edit==true || data.edit== 'true'\"\r\n                      (change)=\"assign_module('edit',$event,i)\"></mat-checkbox>\r\n                    <mat-checkbox *ngIf=\"data.edit== 'disable'\" [disabled]=true [indeterminate]=true></mat-checkbox>\r\n                  </td>\r\n                  <td class=\"w120 text-center\">\r\n                    <mat-checkbox\r\n                      *ngIf=\"data.delete  == false || data.delete  == 'false' || data.delete  == 'true' || data.delete  == true\"\r\n                      [checked]=\"data.delete==true || data.delete== 'true'\"\r\n                      (change)=\"assign_module('delete',$event,i)\"></mat-checkbox>\r\n                    <mat-checkbox *ngIf=\"data.delete== 'disable'\" [disabled]=true [indeterminate]=true></mat-checkbox>\r\n                  </td>\r\n                  <td class=\"w120 text-center\">\r\n                    <mat-checkbox\r\n                      *ngIf=\"data.add  == false || data.add  == 'false' || data.add  == 'true' || data.add  == true\"\r\n                      [checked]=\"data.add==true || data.add== 'true'\"\r\n                      (change)=\"assign_module('add',$event,i)\"></mat-checkbox>\r\n                    <mat-checkbox *ngIf=\"data.add== 'disable'\" [disabled]=true [indeterminate]=true></mat-checkbox>\r\n\r\n                  </td>\r\n                  <td class=\"w120 text-center\">\r\n\r\n                    <mat-checkbox\r\n                      *ngIf=\"data.export  == false || data.export  == 'false' || data.export  == 'true' || data.export  == true\"\r\n                      [checked]=\"data.export==true || data.export== 'true'\"\r\n                      (change)=\"assign_module('export',$event,i)\"></mat-checkbox>\r\n                    <mat-checkbox *ngIf=\"data.export== 'disable'\" [disabled]=true [indeterminate]=true></mat-checkbox>\r\n\r\n                  </td>\r\n                  <td class=\"w120 text-center\">\r\n\r\n                    <mat-checkbox\r\n                      *ngIf=\"data.import  == false || data.import  == 'false' || data.import  == 'true' || data.import  == true\"\r\n                      [checked]=\"data.import==true || data.import== 'true'\"\r\n                      (change)=\"assign_module('import',$event,i)\"></mat-checkbox>\r\n                    <mat-checkbox *ngIf=\"data.import== 'disable'\" [disabled]=true [indeterminate]=true></mat-checkbox>\r\n\r\n                  </td>\r\n                </tr>\r\n              </ng-container>\r\n\r\n\r\n              <ng-container *ngIf=\"skLoading\">\r\n                <tr class=\"sk-loading\" *ngFor=\"let row of [].constructor(10);\">\r\n                  <td class=\"w50\">\r\n                    <div>&nbsp;</div>\r\n                  </td>\r\n                  <td>\r\n                    <div>&nbsp;</div>\r\n                  </td>\r\n                  <td class=\"w120\">\r\n                    <div>&nbsp;</div>\r\n                  </td>\r\n                  <td class=\"w120\">\r\n                    <div>&nbsp;</div>\r\n                  </td>\r\n                  <td class=\"w120\">\r\n                    <div>&nbsp;</div>\r\n                  </td>\r\n                  <td class=\"w120\">\r\n                    <div>&nbsp;</div>\r\n                  </td>\r\n                  <td class=\"w120\">\r\n                    <div>&nbsp;</div>\r\n                  </td>\r\n                  <td class=\"w120\">\r\n                    <div>&nbsp;</div>\r\n                  </td>\r\n\r\n                </tr>\r\n              </ng-container>\r\n            </table>\r\n\r\n          </div>\r\n        </div>\r\n\r\n      </div>\r\n    </div>\r\n    <div mat-dialog-actions>\r\n      <button mat-stroked-button color=\"warn\" [mat-dialog-close]=\"false\">Cancel</button>\r\n      <button [ngClass]=\"{'loading': savingFlag == true}\" mat-raised-button color=\"accent\" type=\"submit\"\r\n        [disabled]=\"savingFlag == true\">{{savingFlag == true ? 'Updating' : 'Update'}}</button>\r\n    </div>\r\n  </form>\r\n</div>"

/***/ }),

/***/ "./src/app/userdesignation/designation-modal/designation-modal.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/userdesignation/designation-modal/designation-modal.component.ts ***!
  \**********************************************************************************/
/*! exports provided: DesignationModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DesignationModalComponent", function() { return DesignationModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng6-toastr-notifications */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/ng6-toastr-notifications/fesm5/ng6-toastr-notifications.js");
/* harmony import */ var src_app_localstorage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/localstorage.service */ "./src/app/localstorage.service.ts");
/* harmony import */ var src_services_DatabaseService__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/_services/DatabaseService */ "./src/_services/DatabaseService.ts");







var DesignationModalComponent = /** @class */ (function () {
    function DesignationModalComponent(toast, modelData, rout, session, service, dialogRef) {
        this.toast = toast;
        this.modelData = modelData;
        this.rout = rout;
        this.session = session;
        this.service = service;
        this.dialogRef = dialogRef;
        this.assign_module_data = [];
        this.assign_module_data2 = [];
        this.savingFlag = false;
        this.userData = {};
        this.skLoading = false;
        this.filter = {};
        this.infoId = '';
        this.checked = {};
        this.infoId = modelData.info.id;
        this.getExpenseDetail();
    }
    DesignationModalComponent.prototype.ngOnInit = function () {
    };
    DesignationModalComponent.prototype.updateCheck = function (module_name) {
        for (var i = 0; i < this.assign_module_data.length; i++) {
            if (module_name == 'view') {
                if (this.assign_module_data[i]['view'] == 'false') {
                    this.checked.viewAll = false;
                    return;
                }
                else {
                    this.checked.viewAll = true;
                }
            }
            if (module_name == 'edit') {
                if (this.assign_module_data[i]['edit'] == 'false') {
                    this.checked.editAll = false;
                    return;
                }
                else {
                    this.checked.editAll = true;
                }
            }
            if (module_name == 'delete') {
                if (this.assign_module_data[i]['delete'] == 'false') {
                    this.checked.deleteAll = false;
                    return;
                }
                else {
                    this.checked.deleteAll = true;
                }
            }
            if (module_name == 'add') {
                if (this.assign_module_data[i]['add'] == 'false') {
                    this.checked.addAll = false;
                    return;
                }
                else {
                    this.checked.addAll = true;
                }
            }
            if (module_name == 'export') {
                if (this.assign_module_data[i]['export'] == 'false') {
                    this.checked.exportAll = false;
                    return;
                }
                else {
                    this.checked.exportAll = true;
                }
            }
            if (module_name == 'export') {
                if (this.assign_module_data[i]['export'] == 'false') {
                    this.checked.exportAll = false;
                    return;
                }
                else {
                    this.checked.exportAll = true;
                }
            }
            if (module_name == 'import') {
                if (this.assign_module_data[i]['import'] == 'false') {
                    this.checked.importAll = false;
                    return;
                }
                else {
                    this.checked.importAll = true;
                }
            }
        }
    };
    DesignationModalComponent.prototype.assign_module = function (module_name, event, index) {
        if (event.checked) {
            this.assign_module_data[index][module_name] = 'true';
            this.updateCheck(module_name);
        }
        else {
            this.assign_module_data[index][module_name] = 'false';
            this.updateCheck(module_name);
        }
    };
    DesignationModalComponent.prototype.selectAll = function (event, action) {
        var _this = this;
        var setValues = function (property, value) {
            for (var i = 0; i < _this.assign_module_data.length; i++) {
                if (_this.assign_module_data[i][property] !== "disable") {
                    _this.assign_module_data[i][property] = value;
                }
            }
        };
        if (event.checked === true) {
            switch (action) {
                case 'View':
                    setValues('view', 'true');
                    break;
                case 'Edit':
                    setValues('edit', 'true');
                    break;
                case 'Delete':
                    setValues('delete', 'true');
                    break;
                case 'Add':
                    setValues('add', 'true');
                    break;
                case 'Export':
                    setValues('export', 'true');
                    break;
                case 'Import':
                    setValues('import', 'true');
                    break;
            }
        }
        else {
            switch (action) {
                case 'View':
                    setValues('view', 'false');
                    break;
                case 'Edit':
                    setValues('edit', 'false');
                    break;
                case 'Delete':
                    setValues('delete', 'false');
                    break;
                case 'Add':
                    setValues('add', 'false');
                    break;
                case 'Export':
                    setValues('export', 'false');
                    break;
                case 'Import':
                    setValues('import', 'false');
                    break;
            }
        }
    };
    DesignationModalComponent.prototype.getExpenseDetail = function () {
        var _this = this;
        this.skLoading = true;
        this.service.post_rqst({ 'id': this.infoId }, "Master/designationDetail").subscribe(function (result) {
            if (result['statusCode'] == 200) {
                _this.skLoading = false;
                _this.assign_module_data = result['designation_detail']['assign_module'];
                _this.assign_module_data2 = result['designation_detail']['assign_module'];
            }
            else {
                _this.skLoading = false;
                _this.toast.errorToastr(result['statusMsg']);
            }
        }, function (err) {
            _this.skLoading = false;
            _this.toast.errorToastr('Something went wrong');
        });
    };
    DesignationModalComponent.prototype.submitDetail = function () {
        var _this = this;
        this.userData.assignModule = this.assign_module_data;
        this.userData.id = this.infoId;
        this.savingFlag = true;
        this.service.post_rqst({ 'userData': this.userData }, "Master/updateDesignationRole").subscribe((function (response) {
            if (response['statusCode'] == "200") {
                _this.toast.successToastr(response['statusMsg']);
                _this.dialogRef.close(true);
                _this.savingFlag = false;
            }
            else {
                _this.toast.errorToastr(response['statusMsg']);
                _this.savingFlag = false;
            }
        }));
    };
    DesignationModalComponent.prototype.searchModuleName = function (moduleName) {
        moduleName = moduleName.toLowerCase();
        var tempSearch = '';
        this.assign_module_data = [];
        for (var i = 0; i < this.assign_module_data2.length; i++) {
            tempSearch = this.assign_module_data2[i].module_name.toLowerCase();
            if (tempSearch.includes(moduleName)) {
                this.assign_module_data.push(this.assign_module_data2[i]);
            }
        }
    };
    DesignationModalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-designation-modal',
            template: __webpack_require__(/*! ./designation-modal.component.html */ "./src/app/userdesignation/designation-modal/designation-modal.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_4__["ToastrManager"], Object, _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], src_app_localstorage_service__WEBPACK_IMPORTED_MODULE_5__["sessionStorage"], src_services_DatabaseService__WEBPACK_IMPORTED_MODULE_6__["DatabaseService"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]])
    ], DesignationModalComponent);
    return DesignationModalComponent;
}());



/***/ }),

/***/ "./src/app/userdesignation/userdesignation-module/userdesignation.module.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/userdesignation/userdesignation-module/userdesignation.module.ts ***!
  \**********************************************************************************/
/*! exports provided: UserdesignationModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserdesignationModule", function() { return UserdesignationModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var src_app_auth_component_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/auth-component.guard */ "./src/app/auth-component.guard.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angular_ng_autocomplete__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! angular-ng-autocomplete */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/angular-ng-autocomplete/fesm5/angular-ng-autocomplete.js");
/* harmony import */ var ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-multiselect-dropdown */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/ng-multiselect-dropdown/fesm5/ng-multiselect-dropdown.js");
/* harmony import */ var ngx_mat_select_search__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-mat-select-search */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/ngx-mat-select-search/fesm5/ngx-mat-select-search.js");
/* harmony import */ var src_app_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/material */ "./src/app/material.ts");
/* harmony import */ var src_app_app_utility_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/app-utility.module */ "./src/app/app-utility.module.ts");
/* harmony import */ var _userdesignation_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../userdesignation.component */ "./src/app/userdesignation/userdesignation.component.ts");
/* harmony import */ var _designation_modal_designation_modal_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../designation-modal/designation-modal.component */ "./src/app/userdesignation/designation-modal/designation-modal.component.ts");
/* harmony import */ var src_app_incentive_add_incentive_add_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/incentive-add/incentive-add.component */ "./src/app/incentive-add/incentive-add.component.ts");















var userdesignationRoutes = [
    { path: "", component: _userdesignation_component__WEBPACK_IMPORTED_MODULE_12__["UserdesignationComponent"], canActivate: [src_app_auth_component_guard__WEBPACK_IMPORTED_MODULE_3__["AuthComponentGuard"]], data: { expectedRole: ['1'] } },
    { path: "incentive", component: src_app_incentive_add_incentive_add_component__WEBPACK_IMPORTED_MODULE_14__["IncentiveAddComponent"], canActivate: [src_app_auth_component_guard__WEBPACK_IMPORTED_MODULE_3__["AuthComponentGuard"]], data: { expectedRole: ['1'] } },
];
var UserdesignationModule = /** @class */ (function () {
    function UserdesignationModule() {
    }
    UserdesignationModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _userdesignation_component__WEBPACK_IMPORTED_MODULE_12__["UserdesignationComponent"],
                _designation_modal_designation_modal_component__WEBPACK_IMPORTED_MODULE_13__["DesignationModalComponent"],
                src_app_incentive_add_incentive_add_component__WEBPACK_IMPORTED_MODULE_14__["IncentiveAddComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forChild(userdesignationRoutes),
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_8__["NgMultiSelectDropDownModule"],
                src_app_material__WEBPACK_IMPORTED_MODULE_10__["MaterialModule"],
                angular_ng_autocomplete__WEBPACK_IMPORTED_MODULE_7__["AutocompleteLibModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialogModule"],
                ngx_mat_select_search__WEBPACK_IMPORTED_MODULE_9__["NgxMatSelectSearchModule"],
                src_app_app_utility_module__WEBPACK_IMPORTED_MODULE_11__["AppUtilityModule"]
            ],
            entryComponents: [_designation_modal_designation_modal_component__WEBPACK_IMPORTED_MODULE_13__["DesignationModalComponent"]]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], UserdesignationModule);
    return UserdesignationModule;
}());



/***/ }),

/***/ "./src/app/userdesignation/userdesignation.component.html":
/*!****************************************************************!*\
  !*** ./src/app/userdesignation/userdesignation.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-container\">\r\n\r\n  <div class=\"tools-container\">\r\n    <div class=\"mat-tabbar\">\r\n      <button mat-button [ngClass]=\"userType == 'Sales User' ? 'active' : ''\"\r\n        (click)=\"userType = 'Sales User';get_sales_user_type()\"><i class=\"material-icons\">people_alt</i>Sales\r\n        User</button>\r\n      <button mat-button [ngClass]=\"userType == 'System User' ? 'active' : ''\"\r\n        (click)=\"userType='System User';get_sales_user_type();\"><i class=\"material-icons\">computer</i>System\r\n        User</button>\r\n    </div>\r\n    <div class=\"left-auto df ac flex-gap-10\">\r\n      <button mat-icon-button matTooltip=\"Refresh\" (click)=\"refresh()\">\r\n        <i class=\"material-icons\">refresh</i>\r\n      </button>\r\n\r\n    </div>\r\n\r\n  </div>\r\n\r\n  <div class=\"container table-container\">\r\n    <div class=\"cs-table\">\r\n      <div class=\"sticky-head\">\r\n        <div class=\"table-head\">\r\n          <table>\r\n            <tr>\r\n              <th class=\"w50\">S.No</th>\r\n              <th class=\"w100\">Date Created</th>\r\n              <th class=\"w100\">Created By</th>\r\n              <th class=\"w100\" *ngIf=\"userType == 'Sales User'\">Calls Target</th>\r\n              <th>Name</th>\r\n              <th class=\"w100 text-center\">Sum Insured</th>\r\n              <th class=\"w150 text-center\">Incentives</th>\r\n              <th class=\"w100 text-center\">Action</th>\r\n            </tr>\r\n          </table>\r\n        </div>\r\n        <div class=\"table-head bdrt\">\r\n          <table>\r\n            <tr>\r\n              <th class=\"w50\"></th>\r\n              <th class=\"w100\">\r\n              </th>\r\n              <th class=\"w100\">\r\n              </th>\r\n              <th class=\"w100\"*ngIf=\"userType == 'Sales User'\" >\r\n              </th>\r\n              <th>\r\n              </th>\r\n              <th class=\"w100\"></th>\r\n              <th class=\"w150\"></th>\r\n              <th class=\"w100\"></th>\r\n            </tr>\r\n          </table>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"table-container\">\r\n        <div class=\"table-content\">\r\n          <table>\r\n            <ng-container *ngIf=\"!loader\">\r\n              <tr *ngFor=\"let dist of userlist; let i = index;\">\r\n                <td class=\"w50\">{{i + 1 + sr_no}}</td>\r\n                <td class=\"w100\">{{dist.created_at | date :'dd MMM yyyy'}}</td>\r\n                <td class=\"w100\">{{dist.created_by_name && dist.created_by_name != '' ? dist.created_by_name : '--'}}\r\n                </td>\r\n                <td class=\"w100\" *ngIf=\"userType == 'Sales User'\">{{dist.designation_target}}</td>\r\n                <td>{{dist.role_name}}</td>\r\n                <td class=\"w100 text-center\">{{dist.sum_insured}}</td>\r\n                <td class=\"w150 text-center\">\r\n                  <a class=\"tracker-link\"  [routerLink]=\"['incentive']\"\r\n                  [queryParams]=\"{'id':dist.id}\"\r\n                            style=\"display: flex; align-items: center; color: #0493ec; text-decoration: none; cursor: pointer;\">\r\n                            <i class=\"material-icons\"\r\n                              style=\"margin-right: 5px;\">person_pin_circle</i><span>Incentive Detail</span>\r\n                          </a>\r\n                 \r\n                </td>\r\n\r\n                <td class=\"w100 text-center\">\r\n                  <div class=\"action-button\" *ngIf=\"logined_user_data.edit_users_designation=='1'\">\r\n                    <button mat-icon-button matTooltip=\"View\" (click)=\"openDialog2(dist)\">\r\n                      <i class=\"material-icons edit\">remove_red_eye</i>\r\n                    </button>\r\n                    <button mat-icon-button matTooltip=\"View\" (click)=\"openDesignationModal2(dist)\">\r\n                      <i class=\"material-icons edit\">edit</i>\r\n                    </button>\r\n                  </div>\r\n                </td>\r\n              </tr>\r\n            </ng-container>\r\n\r\n            <ng-container *ngIf=\"loader\">\r\n              <tr class=\"sk-loading\" *ngFor=\"let row of [].constructor(10);\">\r\n                <td class=\"w50\">\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n                <td class=\"w100\">\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n                <td class=\"w100\" *ngIf=\"userType == 'Sales User'\">\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n                <td class=\"w100\">\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n                <td>\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n                <td class=\"w100\">\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n\r\n                <td class=\"w100 text-center\" *ngIf=\"userType=='System User'\">\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n              </tr>\r\n            </ng-container>\r\n          </table>\r\n        </div>\r\n      </div>\r\n\r\n      <ng-container *ngIf=\"userlist.length == 0\">\r\n        <app-not-result-found></app-not-result-found>\r\n      </ng-container>\r\n\r\n    </div>\r\n\r\n  </div>\r\n\r\n\r\n  <div class=\"fab-btns\"\r\n    *ngIf=\"logined_user_data.add_users_designation=='1' || logined_user_data.edit_users_designation=='1'\">\r\n    <button class=\"pulse excel\" mat-fab color=\"primary\" [ngClass]=\"{'pulse': fabBtnfilter=='add'}\"\r\n      [matMenuTriggerFor]=\"menu\">\r\n      <i class=\"material-icons\">apps</i>\r\n      Action\r\n    </button>\r\n    <mat-menu #menu=\"matMenu\">\r\n      <button mat-menu-item *ngIf=\"logined_user_data.add_users_designation=='1'\" (click)=\"openDesignationModal()\">\r\n        <mat-icon>add</mat-icon>\r\n        <span>Add New</span>\r\n      </button>\r\n    </mat-menu>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/userdesignation/userdesignation.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/userdesignation/userdesignation.component.ts ***!
  \**************************************************************/
/*! exports provided: UserdesignationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserdesignationComponent", function() { return UserdesignationComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_services_DatabaseService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/_services/DatabaseService */ "./src/_services/DatabaseService.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var src_app_localstorage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/localstorage.service */ "./src/app/localstorage.service.ts");
/* harmony import */ var ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng6-toastr-notifications */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/ng6-toastr-notifications/fesm5/ng6-toastr-notifications.js");
/* harmony import */ var _user_designation_designation_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../user/designation/designation.component */ "./src/app/user/designation/designation.component.ts");
/* harmony import */ var _designation_modal_designation_modal_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./designation-modal/designation-modal.component */ "./src/app/userdesignation/designation-modal/designation-modal.component.ts");









var UserdesignationComponent = /** @class */ (function () {
    function UserdesignationComponent(rout, service, dialog, session, toast) {
        this.rout = rout;
        this.service = service;
        this.dialog = dialog;
        this.session = session;
        this.toast = toast;
        this.fabBtnValue = 'add';
        this.userlist = [];
        this.fabBtnfilter = 'add';
        this.loader = false;
        this.assign_login_data = {};
        this.logined_user_data = {};
        this.sr_no = 0;
        this.datanotfound = false;
        this.downurl = '';
        this.userType = 'Sales User';
        this.assign_login_data = this.session.getSession();
        this.logined_user_data = this.assign_login_data.value.data;
        this.get_sales_user_type();
    }
    UserdesignationComponent.prototype.ngOnInit = function () {
    };
    UserdesignationComponent.prototype.get_sales_user_type = function () {
        var _this = this;
        this.userlist = [];
        this.loader = true;
        this.service.post_rqst({ 'user_type': this.userType }, "Master/getDesignation").subscribe(function (response) {
            if (response['statusCode'] == 200) {
                _this.loader = false;
                _this.userlist = response['all_designation'];
            }
            else {
                _this.toast.errorToastr(response['statusMsg']);
            }
        }, function (err) {
            _this.loader = false;
        });
    };
    UserdesignationComponent.prototype.refresh = function () {
        this.get_sales_user_type();
    };
    UserdesignationComponent.prototype.openDesignationModal = function () {
        var _this = this;
        var dialogRef = this.dialog.open(_user_designation_designation_component__WEBPACK_IMPORTED_MODULE_7__["DesignationComponent"], {
            width: '500px',
            panelClass: 'cs-modal',
            disableClose: true,
            data: {
                'type': 'designation',
            }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result == true) {
                _this.get_sales_user_type();
            }
        });
    };
    UserdesignationComponent.prototype.openDesignationModal2 = function (allData) {
        var _this = this;
        var dialogRef = this.dialog.open(_user_designation_designation_component__WEBPACK_IMPORTED_MODULE_7__["DesignationComponent"], {
            width: '500px',
            panelClass: 'cs-modal',
            disableClose: true,
            data: {
                'type': 'edit_designation',
                'data': allData
            }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result == true) {
                _this.get_sales_user_type();
            }
        });
    };
    UserdesignationComponent.prototype.openDialog2 = function (roData) {
        var _this = this;
        var dialogRef = this.dialog.open(_designation_modal_designation_modal_component__WEBPACK_IMPORTED_MODULE_8__["DesignationModalComponent"], {
            width: '1000px',
            data: {
                info: roData
            }
        });
        dialogRef.afterClosed().subscribe(function (res) {
            if (res == true) {
                _this.get_sales_user_type();
            }
        });
    };
    UserdesignationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-userdesignation',
            template: __webpack_require__(/*! ./userdesignation.component.html */ "./src/app/userdesignation/userdesignation.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            src_services_DatabaseService__WEBPACK_IMPORTED_MODULE_3__["DatabaseService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialog"],
            src_app_localstorage_service__WEBPACK_IMPORTED_MODULE_5__["sessionStorage"],
            ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_6__["ToastrManager"]])
    ], UserdesignationComponent);
    return UserdesignationComponent;
}());



/***/ })

}]);