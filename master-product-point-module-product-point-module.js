(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["master-product-point-module-product-point-module"],{

/***/ "./src/app/master/product-point-list/product-point-list.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/master/product-point-list/product-point-list.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-container\">\r\n  <div class=\"tools-container\">\r\n    <h2>Product Point</h2>\r\n    <div class=\"left-auto df ac flex-gap-10\">\r\n      <mat-form-field class=\"example-full-width cs-input select-input\" style=\"width:240px;\">\r\n        <input matInput placeholder=\"Search product / code\" type=\"text\" name=\"search\"\r\n          [(ngModel)]=\"filter.search\" (keyup.enter)=\"search()\">\r\n      </mat-form-field>\r\n      <button mat-stroked-button (click)=\"search()\">Search</button>\r\n      <button mat-icon-button matTooltip=\"Reset\" (click)=\"refresh()\">\r\n        <i class=\"material-icons\">refresh</i>\r\n      </button>\r\n      <div class=\"pagination\" *ngIf=\"products.length > 0\">\r\n        <div class=\"pagination-content\">\r\n          Pages <span>{{pagenumber}}</span> of <span>{{total_page}}</span>\r\n        </div>\r\n        <div class=\"page-nav\">\r\n          <button mat-icon-button matTooltip=\"Older\" (click)=\"previous()\" [disabled]=\"start == 0\">\r\n            <i class=\"material-icons\">navigate_before</i>\r\n          </button>\r\n          <button mat-icon-button matTooltip=\"Newer\" (click)=\"nextPage()\" [disabled]=\"pagenumber == total_page\">\r\n            <i class=\"material-icons\">navigate_next</i>\r\n          </button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"container pb100\">\r\n    <div class=\"cs-table\">\r\n      <div class=\"sticky-head\">\r\n        <div class=\"table-head\">\r\n          <table>\r\n            <tr>\r\n              <th class=\"w60\">Sr.No</th>\r\n              <th>Product</th>\r\n              <th class=\"w120\">Code</th>\r\n              <th class=\"w120\">Thickness / Size</th>\r\n              <th>Category</th>\r\n              <th class=\"w120 text-center\">Ply Expert *</th>\r\n              <th class=\"w120 text-center\">Ambassador *</th>\r\n              <th class=\"w120 text-center\">Fabricator *</th>\r\n              <th class=\"w90 text-center\">Periods</th>\r\n              <th class=\"w100 text-center\">Action</th>\r\n            </tr>\r\n          </table>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"table-container\">\r\n        <div class=\"table-content\" *ngIf=\"products.length > 0\">\r\n          <table>\r\n            <ng-container *ngIf=\"!loader\">\r\n              <tr *ngFor=\"let p of products; let i = index\">\r\n                <td class=\"w60\">{{sr_no + i + 1}}</td>\r\n                <td>{{p.product_name}}</td>\r\n                <td class=\"w120\">{{p.product_code}}</td>\r\n                <td class=\"w120\">{{p.thickness}} / {{p.size}}</td>\r\n                <td>{{p.category}}</td>\r\n                <td class=\"w120 text-center\"><strong>{{p.ply_expert_point}}</strong></td>\r\n                <td class=\"w120 text-center\"><strong>{{p.ambassador_point}}</strong></td>\r\n                <td class=\"w120 text-center\"><strong>{{p.fabricator_point}}</strong></td>\r\n                <td class=\"w90 text-center\">{{p.period_count}}</td>\r\n                <td class=\"w100 text-center\">\r\n                  <div class=\"action-button\">\r\n                    <button mat-icon-button matTooltip=\"Manage Points\" (click)=\"manage(p.id)\">\r\n                      <i class=\"material-icons edit\">tune</i>\r\n                    </button>\r\n                  </div>\r\n                </td>\r\n              </tr>\r\n            </ng-container>\r\n\r\n            <ng-container *ngIf=\"loader\">\r\n              <tr class=\"sk-loading\" *ngFor=\"let row of [].constructor(10)\">\r\n                <td class=\"w60\"><div>&nbsp;</div></td>\r\n                <td><div>&nbsp;</div></td>\r\n                <td class=\"w120\"><div>&nbsp;</div></td>\r\n                <td class=\"w120\"><div>&nbsp;</div></td>\r\n                <td><div>&nbsp;</div></td>\r\n                <td class=\"w120\"><div>&nbsp;</div></td>\r\n                <td class=\"w120\"><div>&nbsp;</div></td>\r\n                <td class=\"w120\"><div>&nbsp;</div></td>\r\n                <td class=\"w90\"><div>&nbsp;</div></td>\r\n                <td class=\"w100\"><div>&nbsp;</div></td>\r\n              </tr>\r\n            </ng-container>\r\n          </table>\r\n        </div>\r\n\r\n        <div *ngIf=\"products.length == 0 && !loader\">\r\n          <app-not-result-found></app-not-result-found>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <p class=\"text-muted\" style=\"padding:8px 16px;font-size:12px;\">\r\n      * Ply Expert / Ambassador / Fabricator columns show the currently-active period's points (today).\r\n    </p>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/master/product-point-list/product-point-list.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/master/product-point-list/product-point-list.component.ts ***!
  \***************************************************************************/
/*! exports provided: ProductPointListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductPointListComponent", function() { return ProductPointListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_services_DatabaseService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/_services/DatabaseService */ "./src/_services/DatabaseService.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng6-toastr-notifications */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/ng6-toastr-notifications/fesm5/ng6-toastr-notifications.js");
/* harmony import */ var src_app_localstorage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/localstorage.service */ "./src/app/localstorage.service.ts");






var ProductPointListComponent = /** @class */ (function () {
    function ProductPointListComponent(service, toast, router, session) {
        this.service = service;
        this.toast = toast;
        this.router = router;
        this.session = session;
        this.products = [];
        this.loader = false;
        this.filter = {};
        this.start = 0;
        this.pagenumber = 1;
        this.pageCount = 0;
        this.total_page = 0;
        this.sr_no = 0;
        this.logined_user_data = {};
        this.page_limit = service.pageLimit;
        var s = this.session.getSession();
        this.logined_user_data = s.value.data;
        this.getProducts();
    }
    ProductPointListComponent.prototype.ngOnInit = function () { };
    ProductPointListComponent.prototype.getProducts = function () {
        var _this = this;
        this.loader = true;
        this.service.post_rqst({ filter: { search: this.filter.search || '', limit: this.page_limit, start: this.start } }, 'ProductPoint/products').subscribe(function (resp) {
            if (resp.statusCode == 200) {
                _this.products = resp.result || [];
                _this.pageCount = resp.total || 0;
                _this.total_page = Math.ceil(_this.pageCount / _this.page_limit);
                _this.pagenumber = Math.floor(_this.start / _this.page_limit) + 1;
                _this.sr_no = (_this.pagenumber - 1) * _this.page_limit;
                setTimeout(function () { _this.loader = false; }, 400);
            }
            else {
                _this.loader = false;
                _this.toast.errorToastr(resp.statusMsg);
            }
        }, function () { _this.loader = false; });
    };
    ProductPointListComponent.prototype.search = function () { this.start = 0; this.getProducts(); };
    ProductPointListComponent.prototype.refresh = function () { this.filter = {}; this.start = 0; this.getProducts(); };
    ProductPointListComponent.prototype.previous = function () {
        if (this.start > 0) {
            this.start -= this.page_limit;
            this.getProducts();
        }
    };
    ProductPointListComponent.prototype.nextPage = function () {
        if (this.start + this.page_limit < this.pageCount) {
            this.start += this.page_limit;
            this.getProducts();
        }
    };
    ProductPointListComponent.prototype.manage = function (id) {
        this.router.navigate(['/product-point/manage/' + id]);
    };
    ProductPointListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-product-point-list',
            template: __webpack_require__(/*! ./product-point-list.component.html */ "./src/app/master/product-point-list/product-point-list.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_services_DatabaseService__WEBPACK_IMPORTED_MODULE_2__["DatabaseService"],
            ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_4__["ToastrManager"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            src_app_localstorage_service__WEBPACK_IMPORTED_MODULE_5__["sessionStorage"]])
    ], ProductPointListComponent);
    return ProductPointListComponent;
}());



/***/ }),

/***/ "./src/app/master/product-point-manage/product-point-manage.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/master/product-point-manage/product-point-manage.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-container\">\r\n  <div class=\"tools-container\">\r\n    <h2>Manage Product Points</h2>\r\n    <div class=\"left-auto df ac flex-gap-10\">\r\n      <button mat-stroked-button (click)=\"back()\">\r\n        <i class=\"material-icons\">arrow_back</i> Back to list\r\n      </button>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"container pb100\">\r\n    <div style=\"display:flex; gap:20px; flex-wrap:wrap; align-items:flex-start;\">\r\n\r\n      <!-- Add / Edit period form -->\r\n      <div style=\"flex:1 1 300px; min-width:280px; background:#fff; border:1px solid #eee; border-radius:8px; padding:16px;\">\r\n        <h3 style=\"margin-top:0;\">{{ form.id ? 'Edit Period' : 'Add New Period' }}</h3>\r\n        <p class=\"text-muted\" style=\"font-size:12px;\">\r\n          Each period applies from its date until the next period starts. A purchase uses the period its invoice date falls in.\r\n        </p>\r\n\r\n        <mat-form-field class=\"cs-input\" style=\"width:100%;\">\r\n          <input matInput type=\"date\" placeholder=\"Effective From\" name=\"effective_from\"\r\n            [max]=\"today_date\" [(ngModel)]=\"form.effective_from\" required>\r\n        </mat-form-field>\r\n\r\n        <mat-form-field class=\"cs-input\" style=\"width:100%;\">\r\n          <input matInput type=\"number\" min=\"0\" placeholder=\"Ply Expert Point\"\r\n            name=\"ply_expert_point\" [(ngModel)]=\"form.ply_expert_point\">\r\n        </mat-form-field>\r\n\r\n        <mat-form-field class=\"cs-input\" style=\"width:100%;\">\r\n          <input matInput type=\"number\" min=\"0\" placeholder=\"Ambassador Point\"\r\n            name=\"ambassador_point\" [(ngModel)]=\"form.ambassador_point\">\r\n        </mat-form-field>\r\n\r\n        <mat-form-field class=\"cs-input\" style=\"width:100%;\">\r\n          <input matInput type=\"number\" min=\"0\" placeholder=\"Fabricator Point\"\r\n            name=\"fabricator_point\" [(ngModel)]=\"form.fabricator_point\">\r\n        </mat-form-field>\r\n\r\n        <div class=\"text-right\" style=\"margin-top:8px;\">\r\n          <button *ngIf=\"form.id\" mat-stroked-button (click)=\"cancelEdit()\">Cancel</button>\r\n          &nbsp;\r\n          <button mat-raised-button color=\"primary\" (click)=\"save()\" [disabled]=\"savingFlag\">\r\n            {{ form.id ? 'Update Period' : 'Add Period' }}\r\n          </button>\r\n        </div>\r\n      </div>\r\n\r\n      <!-- Period history -->\r\n      <div style=\"flex:2 1 520px; min-width:320px;\">\r\n        <div class=\"cs-table\">\r\n          <div class=\"sticky-head\">\r\n            <div class=\"table-head\">\r\n              <table>\r\n                <tr>\r\n                  <th>Effective From</th>\r\n                  <th>Effective To</th>\r\n                  <th class=\"w120 text-center\">Ply Expert</th>\r\n                  <th class=\"w120 text-center\">Ambassador</th>\r\n                  <th class=\"w120 text-center\">Fabricator</th>\r\n                  <th class=\"w100 text-center\">Action</th>\r\n                </tr>\r\n              </table>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"table-container\">\r\n            <div class=\"table-content\" *ngIf=\"periods.length > 0 && !loader\">\r\n              <table>\r\n                <tr *ngFor=\"let row of periods\">\r\n                  <td>{{ row.effective_from | date:'d MMM y' }}</td>\r\n                  <td>\r\n                    <span *ngIf=\"row.effective_to\">{{ row.effective_to | date:'d MMM y' }}</span>\r\n                    <strong *ngIf=\"!row.effective_to\" style=\"color:#2e7d32;\">Current</strong>\r\n                  </td>\r\n                  <td class=\"w120 text-center\"><strong>{{ row.ply_expert_point }}</strong></td>\r\n                  <td class=\"w120 text-center\"><strong>{{ row.ambassador_point }}</strong></td>\r\n                  <td class=\"w120 text-center\"><strong>{{ row.fabricator_point }}</strong></td>\r\n                  <td class=\"w100 text-center\">\r\n                    <div class=\"action-button\">\r\n                      <button mat-icon-button matTooltip=\"Edit\" (click)=\"editPeriod(row)\">\r\n                        <i class=\"material-icons edit\">edit</i>\r\n                      </button>\r\n                      <button mat-icon-button matTooltip=\"Delete\" (click)=\"deletePeriod(row.id)\">\r\n                        <i class=\"material-icons del\">delete</i>\r\n                      </button>\r\n                    </div>\r\n                  </td>\r\n                </tr>\r\n              </table>\r\n            </div>\r\n\r\n            <div *ngIf=\"periods.length == 0 && !loader\">\r\n              <app-not-result-found></app-not-result-found>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/master/product-point-manage/product-point-manage.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/master/product-point-manage/product-point-manage.component.ts ***!
  \*******************************************************************************/
/*! exports provided: ProductPointManageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductPointManageComponent", function() { return ProductPointManageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_services_DatabaseService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/_services/DatabaseService */ "./src/_services/DatabaseService.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng6-toastr-notifications */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/ng6-toastr-notifications/fesm5/ng6-toastr-notifications.js");
/* harmony import */ var src_app_dialog_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/dialog.component */ "./src/app/dialog.component.ts");






var ProductPointManageComponent = /** @class */ (function () {
    function ProductPointManageComponent(service, route, router, toast, dialog) {
        this.service = service;
        this.route = route;
        this.router = router;
        this.toast = toast;
        this.dialog = dialog;
        this.periods = [];
        this.form = {};
        this.savingFlag = false;
        this.loader = false;
        this.today_date = new Date().toISOString().slice(0, 10);
    }
    ProductPointManageComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (p) {
            _this.productId = p['productId'];
            _this.resetForm();
            _this.loadPeriods();
        });
    };
    ProductPointManageComponent.prototype.resetForm = function () {
        this.form = { effective_from: '', ply_expert_point: 0, ambassador_point: 0, fabricator_point: 0 };
    };
    ProductPointManageComponent.prototype.loadPeriods = function () {
        var _this = this;
        this.loader = true;
        this.service.post_rqst({ product_id: this.productId }, 'ProductPoint/periods').subscribe(function (resp) {
            _this.loader = false;
            if (resp.statusCode == 200) {
                _this.periods = resp.result || [];
            }
            else {
                _this.toast.errorToastr(resp.statusMsg);
            }
        }, function () { _this.loader = false; });
    };
    ProductPointManageComponent.prototype.editPeriod = function (row) {
        this.form = {
            id: row.id,
            effective_from: row.effective_from,
            ply_expert_point: row.ply_expert_point,
            ambassador_point: row.ambassador_point,
            fabricator_point: row.fabricator_point
        };
    };
    ProductPointManageComponent.prototype.cancelEdit = function () { this.resetForm(); };
    ProductPointManageComponent.prototype.save = function () {
        var _this = this;
        if (!this.form.effective_from) {
            this.toast.errorToastr('Effective From date is required');
            return;
        }
        this.savingFlag = true;
        var payload = { data: Object.assign({ product_id: this.productId }, this.form) };
        this.service.post_rqst(payload, 'ProductPoint/save_period').subscribe(function (resp) {
            _this.savingFlag = false;
            if (resp.statusCode == 200) {
                _this.toast.successToastr('Saved successfully');
                _this.resetForm();
                _this.loadPeriods();
            }
            else {
                _this.toast.errorToastr((resp.case && resp.case.msg) ? resp.case.msg : (resp.statusMsg || 'Failed to save'));
            }
        }, function () { _this.savingFlag = false; });
    };
    ProductPointManageComponent.prototype.deletePeriod = function (id) {
        var _this = this;
        this.dialog.delete('Point Period !').then(function (ok) {
            if (ok) {
                _this.service.post_rqst({ id: id }, 'ProductPoint/delete_period').subscribe(function (resp) {
                    if (resp.statusCode == 200) {
                        _this.toast.successToastr('Deleted');
                        _this.loadPeriods();
                    }
                    else {
                        _this.toast.errorToastr(resp.statusMsg);
                    }
                });
            }
        });
    };
    ProductPointManageComponent.prototype.back = function () { this.router.navigate(['/product-point']); };
    ProductPointManageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-product-point-manage',
            template: __webpack_require__(/*! ./product-point-manage.component.html */ "./src/app/master/product-point-manage/product-point-manage.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_services_DatabaseService__WEBPACK_IMPORTED_MODULE_2__["DatabaseService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_4__["ToastrManager"],
            src_app_dialog_component__WEBPACK_IMPORTED_MODULE_5__["DialogComponent"]])
    ], ProductPointManageComponent);
    return ProductPointManageComponent;
}());



/***/ }),

/***/ "./src/app/master/product-point-module/product-point.module.ts":
/*!*********************************************************************!*\
  !*** ./src/app/master/product-point-module/product-point.module.ts ***!
  \*********************************************************************/
/*! exports provided: ProductPointModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductPointModule", function() { return ProductPointModule; });
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
/* harmony import */ var _product_point_list_product_point_list_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../product-point-list/product-point-list.component */ "./src/app/master/product-point-list/product-point-list.component.ts");
/* harmony import */ var _product_point_manage_product_point_manage_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../product-point-manage/product-point-manage.component */ "./src/app/master/product-point-manage/product-point-manage.component.ts");














var productPointRoutes = [
    {
        path: "", children: [
            { path: "", component: _product_point_list_product_point_list_component__WEBPACK_IMPORTED_MODULE_12__["ProductPointListComponent"], canActivate: [src_app_auth_component_guard__WEBPACK_IMPORTED_MODULE_11__["AuthComponentGuard"]], data: { expectedRole: ['1'] } },
            { path: "manage/:productId", component: _product_point_manage_product_point_manage_component__WEBPACK_IMPORTED_MODULE_13__["ProductPointManageComponent"], canActivate: [src_app_auth_component_guard__WEBPACK_IMPORTED_MODULE_11__["AuthComponentGuard"]], data: { expectedRole: ['1'] } },
        ]
    }
];
var ProductPointModule = /** @class */ (function () {
    function ProductPointModule() {
    }
    ProductPointModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_product_point_list_product_point_list_component__WEBPACK_IMPORTED_MODULE_12__["ProductPointListComponent"], _product_point_manage_product_point_manage_component__WEBPACK_IMPORTED_MODULE_13__["ProductPointManageComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild(productPointRoutes),
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
    ], ProductPointModule);
    return ProductPointModule;
}());



/***/ })

}]);