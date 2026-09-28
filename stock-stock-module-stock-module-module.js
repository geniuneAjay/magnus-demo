(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["stock-stock-module-stock-module-module"],{

/***/ "./src/app/stock/stock-list/stock-list.component.html":
/*!************************************************************!*\
  !*** ./src/app/stock/stock-list/stock-list.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-container\" >\r\n    <!-- <app-loader *ngIf=\"excelLoader\"></app-loader> -->\r\n    <div class=\"tools-container\">\r\n        <h2>Stock</h2>\r\n        <div class=\"left-auto left-auto df ac flex-gap-10\">\r\n            <button mat-icon-button matTooltip=\"Refresh\" (click)=\"refresh()\">\r\n                <i class=\"material-icons\">refresh</i>\r\n            </button>\r\n            <div class=\"pagination\" *ngIf=\"stock_list.length > 0\">\r\n                <div class=\"pagination-content\">\r\n                    Pages\r\n                    <span>{{pagenumber}}</span>\r\n                    of\r\n                    <span>{{total_page}}</span>\r\n                </div>\r\n                <div class=\"page-nav\">\r\n                    <button mat-icon-button matTooltip=\"Older\" (click)=\"previousPage()\" [disabled]=\"start == 0\">\r\n                        <i class=\"material-icons\">navigate_before</i>\r\n                    </button>\r\n                    <button mat-icon-button matTooltip=\"Newer\" (click)=\"nextPage()\" [disabled]=\"pagenumber == total_page \">\r\n                        <i class=\"material-icons\">navigate_next</i>\r\n                    </button>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    \r\n    \r\n    \r\n    \r\n    <div class=\"container pb100\"> \r\n        <ng-container>\r\n            <div class=\"cs-table\">\r\n                <div class=\"sticky-head\">\r\n                    <div class=\"table-head\">\r\n                        <table>\r\n                            <tr>\r\n                                <th class=\"w40\">S.no.</th>\r\n                                <th>Product Details</th>\r\n                                <th class=\"w100 text-center\">Company Stock</th>\r\n                                <th class=\"w100 text-center\">Warehouse Stock</th>\r\n                                <th class=\"w100 text-center\">Distributor Stock</th>\r\n                                <th class=\"w100 text-center\">Dealer Stock</th>\r\n                            </tr>\r\n                        </table>\r\n                    </div>\r\n                    <div class=\"table-head border-top\">\r\n                        <table>\r\n                            <tr>\r\n                                <th class=\"w40\">&nbsp;</th>\r\n                                <th>\r\n                                    <div class=\"th-search-acmt\">\r\n                                        <mat-form-field class=\"example-full-width cs-input\">\r\n                                            <input matInput placeholder=\"Search\" name=\"product_details\" [(ngModel)]=\"filter.product_details\"  (keyup.enter)=\"stockdata('')\" >\r\n                                        </mat-form-field>\r\n                                    </div>\r\n                                </th>\r\n                                <th class=\"w100\"> </th>\r\n                                <th class=\"w100\"></th>\r\n                                <th class=\"w100\"></th>\r\n                                <th class=\"w100\"></th>\r\n                              \r\n                            </tr>\r\n                        </table>    \r\n                    </div>\r\n                </div>\r\n                \r\n                <div class=\"table-container\" >\r\n                    <div class=\"table-content\">\r\n                        <table>\r\n                            <ng-container *ngIf=\"!loader\">\r\n                                <tr *ngFor=\"let row of stock_list; let i=index\"\r\n                                [ngClass]=\"{'Current': service.currentUserID == row.id}\">\r\n                                <td class=\"w40 text-center\">{{ i+1+sr_no}}</td>\r\n                            \r\n                                <td>{{row.product_name}} {{row.product_code}}</td>\r\n                                <td class=\"w100 text-center\">\r\n                                    {{row.company_stock ? row.company_stock :'0'}}\r\n                                </td>\r\n                                <td class=\"w100 text-center\">\r\n                                    {{row.warehouse_stock ? row.warehouse_stock :'0'}}\r\n                                </td>\r\n                                <td class=\"w100 text-center\">\r\n                                    {{row.distributor_stock ? row.distributor_stock :'0'}}\r\n                                </td>\r\n                                <td class=\"w100 text-center\">\r\n                                    {{row.dealer_stock ? row.dealer_stock : '0'}}\r\n                                </td>\r\n                              \r\n                            </tr>\r\n                        </ng-container>\r\n                        <ng-container *ngIf=\"loader\">\r\n                            <tr class=\"sk-loading\" *ngFor=\"let row of [].constructor(10)\" >\r\n                                <td class=\"w40\"><div>&nbsp;</div></td>\r\n                                <td><div>&nbsp;</div></td>\r\n                                <td class=\"w100\"><div>&nbsp;</div></td>\r\n                                <td class=\"w100\"><div>&nbsp;</div></td>\r\n                                <td class=\"w100\"><div>&nbsp;</div></td>\r\n                                <td class=\"w100\"><div>&nbsp;</div></td>\r\n                            </tr>\r\n                        </ng-container>\r\n                    </table>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <ng-container *ngIf=\"stock_list.length == 0\">\r\n            <app-not-result-found></app-not-result-found>\r\n        </ng-container>\r\n    </ng-container>\r\n    \r\n  \r\n</div>\r\n<div class=\"fab-btns\">\r\n    <button mat-fab class=\"excel pulse\" *ngIf=\"stock_list.length != 0 \" (click)=\"exportAsXLSX()\">\r\n      <img src=\"assets/img/excel.svg\">\r\n      Download Excel\r\n    </button>\r\n  </div>\r\n</div>\r\n\r\n<!-- link button on tabs which opens a modal -->\r\n<!-- \r\n    class=\"link-btn\" (click)=\"openDialog()\"\r\n-->\r\n\r\n\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/stock/stock-list/stock-list.component.scss":
/*!************************************************************!*\
  !*** ./src/app/stock/stock-list/stock-list.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".waves {\n  width: 16px;\n  height: 16px;\n  border-radius: 100%;\n  display: block;\n  background: #cccccc;\n  position: absolute;\n  top: 0px;\n  left: -27.5px;\n  z-index: 2;\n  display: inline-block;\n}"

/***/ }),

/***/ "./src/app/stock/stock-list/stock-list.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/stock/stock-list/stock-list.component.ts ***!
  \**********************************************************/
/*! exports provided: StockListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StockListComponent", function() { return StockListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/dialog.component */ "./src/app/dialog.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var src_services_DatabaseService__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/_services/DatabaseService */ "./src/_services/DatabaseService.ts");
/* harmony import */ var ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng6-toastr-notifications */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/ng6-toastr-notifications/fesm5/ng6-toastr-notifications.js");







var StockListComponent = /** @class */ (function () {
    function StockListComponent(service, apiHit, Router, ActivatedRoute, dialog, alert, toast) {
        this.service = service;
        this.apiHit = apiHit;
        this.Router = Router;
        this.ActivatedRoute = ActivatedRoute;
        this.dialog = dialog;
        this.alert = alert;
        this.toast = toast;
        this.stock_list = [];
        this.loader = false;
        this.excelLoader = false;
        this.filter = {};
        this.start = 0;
        this.pagenumber = 1;
        this.sr_no = 0;
        // data: any = {};
        this.product_details = [];
        this.downurl = '';
        this.page_limit = service.pageLimit;
        this.stockdata();
        this.downurl = service.uploadUrl;
    }
    StockListComponent.prototype.ngOnInit = function () {
    };
    StockListComponent.prototype.previousPage = function () {
        this.start = this.start - this.page_limit;
        this.stockdata();
    };
    StockListComponent.prototype.nextPage = function () {
        this.start = this.start + this.page_limit;
        this.stockdata();
    };
    StockListComponent.prototype.stockdata = function (action) {
        var _this = this;
        if (action === void 0) { action = ''; }
        this.loader = true;
        if (action == "refresh") {
            this.filter = {};
            this.stock_list = [];
            this.start = 0;
        }
        if (this.pagenumber > this.total_page) {
            this.pagenumber = this.total_page;
            this.start = this.pageCount - this.page_limit;
        }
        if (this.start < 0) {
            this.start = 0;
        }
        this.apiHit.post_rqst({ 'filter': this.filter, 'start': this.start, 'pagelimit': this.page_limit }, "Stock/stock_details")
            .subscribe((function (result) {
            if (result['statusCode'] == 200) {
                _this.stock_list = result['result'];
                _this.loader = false;
                _this.pageCount = result['count'];
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
            }
            else {
                _this.loader = false;
                _this.toast.errorToastr(result['statusMsg']);
            }
        }));
    };
    StockListComponent.prototype.refresh = function () {
        this.start = 0;
        this.value = {};
        this.filter = {};
        this.service.currentUserID = '';
        this.stockdata();
    };
    StockListComponent.prototype.exportAsXLSX = function () {
        var _this = this;
        this.loader = true;
        this.apiHit.post_rqst({ 'filter': this.filter, 'start': this.start, 'pagelimit': this.page_limit }, "Stock/downloadAllStockExcel").subscribe((function (result) {
            if (result['statusCode'] == 200) {
                _this.loader = false;
                window.open(_this.downurl + result['filename']);
            }
            else {
                _this.loader = false;
                _this.toast.errorToastr('Data not found');
            }
        }));
    };
    StockListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-stock-list',
            template: __webpack_require__(/*! ./stock-list.component.html */ "./src/app/stock/stock-list/stock-list.component.html"),
            styles: [__webpack_require__(/*! ./stock-list.component.scss */ "./src/app/stock/stock-list/stock-list.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_services_DatabaseService__WEBPACK_IMPORTED_MODULE_5__["DatabaseService"],
            src_services_DatabaseService__WEBPACK_IMPORTED_MODULE_5__["DatabaseService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialog"], src_app_dialog_component__WEBPACK_IMPORTED_MODULE_3__["DialogComponent"],
            ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_6__["ToastrManager"]])
    ], StockListComponent);
    return StockListComponent;
}());

// https://devcrm.abacusdesk.com/pearlnew/api/index.php/Work/stockDetails
// https://devcrm.abacusdesk.com/pearlnew/api/index.php/Stock/stockDetails


/***/ }),

/***/ "./src/app/stock/stock-module/stock-module.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/stock/stock-module/stock-module.module.ts ***!
  \***********************************************************/
/*! exports provided: StockModuleModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StockModuleModule", function() { return StockModuleModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_auth_component_guard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/auth-component.guard */ "./src/app/auth-component.guard.ts");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/input */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/material/esm5/input.es5.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _stock_list_stock_list_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../stock-list/stock-list.component */ "./src/app/stock/stock-list/stock-list.component.ts");
/* harmony import */ var src_app_app_utility_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/app-utility.module */ "./src/app/app-utility.module.ts");
/* harmony import */ var src_app_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/material */ "./src/app/material.ts");





// import { StockListComponent } from '../stock-list/stock-list.component';






var stockRoutes = [
    { path: "", children: [
            { path: "", component: _stock_list_stock_list_component__WEBPACK_IMPORTED_MODULE_8__["StockListComponent"], canActivate: [src_app_auth_component_guard__WEBPACK_IMPORTED_MODULE_5__["AuthComponentGuard"]], data: { expectedRole: ['1'] } }
        ] },
];
var StockModuleModule = /** @class */ (function () {
    function StockModuleModule() {
    }
    StockModuleModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _stock_list_stock_list_component__WEBPACK_IMPORTED_MODULE_8__["StockListComponent"],
            ],
            imports: [
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatFormFieldModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_6__["MatInputModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(stockRoutes),
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                src_app_app_utility_module__WEBPACK_IMPORTED_MODULE_9__["AppUtilityModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatDialogModule"],
                src_app_material__WEBPACK_IMPORTED_MODULE_10__["MaterialModule"],
            ],
            entryComponents: []
        })
    ], StockModuleModule);
    return StockModuleModule;
}());



/***/ })

}]);