(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["order-primary-order-module-primary-order-module"],{

/***/ "./src/app/add-item/add-item.component.html":
/*!**************************************************!*\
  !*** ./src/app/add-item/add-item.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-container\">\r\n<div class=\"ai-page\">\r\n  <div class=\"ai-header\">\r\n    <a class=\"ai-back\" matTooltip=\"Back\" (click)=\"goBack()\">\r\n      <i class=\"material-icons\">arrow_back</i>\r\n    </a>\r\n    <span class=\"ai-title\">{{ delivery_from == 'despatched' ? 'Dispatch Order — Add Items' : 'Add Items to Order' }}</span>\r\n  </div>\r\n\r\n  <div class=\"ai-body\">\r\n    <form name=\"detail\" #f=\"ngForm\" (ngSubmit)=\"f.valid && save_order()\">\r\n\r\n      <!-- Filter Card -->\r\n      <div class=\"ai-card\">\r\n        <div class=\"ai-card-head\">\r\n          <i class=\"material-icons\">tune</i>\r\n          <h2>Select Product</h2>\r\n        </div>\r\n        <div class=\"ai-card-body\">\r\n          <div class=\"ai-filter-row\" style=\"margin-bottom:14px;\">\r\n            <mat-form-field appearance=\"outline\" style=\"flex:0 1 200px;\">\r\n              <mat-label>Dispatch Date</mat-label>\r\n              <input name=\"dispatch_date\" matInput [matDatepicker]=\"pickers\"\r\n                [max]=\"today_date\" #disp_date=\"ngModel\" readonly\r\n                [(ngModel)]=\"user_data.dispatch_date\" required>\r\n              <mat-datepicker-toggle matSuffix [for]=\"pickers\"></mat-datepicker-toggle>\r\n              <mat-datepicker #pickers></mat-datepicker>\r\n            </mat-form-field>\r\n          </div>\r\n\r\n          <div class=\"ai-filter-row\">\r\n            <mat-form-field appearance=\"outline\">\r\n              <mat-label>Category Type</mat-label>\r\n              <mat-select name=\"product_type\" [(ngModel)]=\"product_detail.product_type\"\r\n                [disabled]=\"true\" #product_type=\"ngModel\">\r\n                <mat-option value=\"SS\">SS</mat-option>\r\n                <mat-option value=\"S\">S</mat-option>\r\n              </mat-select>\r\n            </mat-form-field>\r\n\r\n            <mat-form-field appearance=\"outline\">\r\n              <mat-label>Brand</mat-label>\r\n              <mat-select name=\"brand\" [(ngModel)]=\"product_detail.brand\" #brand=\"ngModel\"\r\n                (selectionChange)=\"getThickness()\">\r\n                <ngx-mat-select-search noEntriesFoundLabel=\"'no data found'\"\r\n                  placeholderLabel=\"Search..\"\r\n                  (keyup)=\"getBrand($event.target.value)\"></ngx-mat-select-search>\r\n                <mat-option *ngFor=\"let row of brandList\" value=\"{{row.brand_code}}\">\r\n                  {{row.brand_code}}\r\n                </mat-option>\r\n              </mat-select>\r\n            </mat-form-field>\r\n\r\n            <mat-form-field appearance=\"outline\">\r\n              <mat-label>Thickness</mat-label>\r\n              <mat-select name=\"thickness\" [(ngModel)]=\"product_detail.thickness\"\r\n                #thickness=\"ngModel\" (selectionChange)=\"getSize()\"\r\n                [disabled]=\"!product_detail.brand\">\r\n                <ngx-mat-select-search noEntriesFoundLabel=\"'no data found'\"\r\n                  placeholderLabel=\"Search..\"\r\n                  (keyup)=\"filterThickness($event.target.value)\"></ngx-mat-select-search>\r\n                <mat-option *ngFor=\"let row of filteredThicknessList\" value=\"{{row.thickness}}\">\r\n                  {{row.thickness}}\r\n                </mat-option>\r\n              </mat-select>\r\n            </mat-form-field>\r\n\r\n            <mat-form-field appearance=\"outline\">\r\n              <mat-label>Size</mat-label>\r\n              <mat-select name=\"size\" [(ngModel)]=\"product_detail.size\" #size=\"ngModel\"\r\n                (selectionChange)=\"getProductList('')\" [disabled]=\"!product_detail.thickness\">\r\n                <ngx-mat-select-search noEntriesFoundLabel=\"'no data found'\"\r\n                  placeholderLabel=\"Search..\"\r\n                  (keyup)=\"filterSize($event.target.value)\"></ngx-mat-select-search>\r\n                <mat-option *ngFor=\"let row of filteredSizeList\" value=\"{{row.size}}\">\r\n                  {{row.size}}\r\n                </mat-option>\r\n              </mat-select>\r\n            </mat-form-field>\r\n\r\n            <div class=\"ai-qty-add\">\r\n              <mat-form-field appearance=\"outline\">\r\n                <mat-label>QTY</mat-label>\r\n                <input matInput placeholder=\"Enter qty\" name=\"qty\" #qty=\"ngModel\"\r\n                  [(ngModel)]=\"product_detail.qty\"\r\n                  onkeypress=\"return event.charCode>=48 && event.charCode<=57\"\r\n                  maxlength=\"5\">\r\n              </mat-form-field>\r\n              <button type=\"button\" class=\"ai-add-btn\" matTooltip=\"Add to list\" (click)=\"addToList()\">\r\n                <i class=\"material-icons\">add</i>\r\n              </button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <!-- Items Table Card -->\r\n      <div class=\"ai-card\" *ngIf=\"item.length > 0\">\r\n        <div class=\"ai-card-head\">\r\n          <i class=\"material-icons\">inventory_2</i>\r\n          <h2>Items Added <span class=\"item-count-badge\">{{item.length}}</span></h2>\r\n        </div>\r\n        <div class=\"ai-card-body p0\">\r\n          <div class=\"ai-table-wrap\">\r\n            <table class=\"ai-table\">\r\n              <thead>\r\n                <tr>\r\n                  <th>S.No.</th>\r\n                  <th>Brand</th>\r\n                  <th>Thickness</th>\r\n                  <th>Size</th>\r\n                  <th>Product Name</th>\r\n                  <th class=\"center\">QTY.</th>\r\n                  <th class=\"center\">S.E. QTY</th>\r\n                  <th class=\"num\">Landing Price</th>\r\n                  <th class=\"center\">Unit Weight</th>\r\n                  <th class=\"center\">Total Weight</th>\r\n                  <th class=\"center\">Action</th>\r\n                </tr>\r\n              </thead>\r\n              <tbody>\r\n                <ng-container *ngIf=\"!skLoader\">\r\n                  <tr *ngFor=\"let row of item; let i = index\">\r\n                    <td class=\"center\">{{i+1}}</td>\r\n                    <td><strong>{{row.brand}}</strong></td>\r\n                    <td>{{row.thickness}}</td>\r\n                    <td>{{row.size}}</td>\r\n                    <td>{{row.product_name}}</td>\r\n                    <td class=\"center\">\r\n                      <div class=\"row-qty-group\">\r\n                        <button type=\"button\" mat-icon-button class=\"row-qty-btn\"\r\n                          matTooltip=\"Decrease\" [disabled]=\"row.qty <= 1\"\r\n                          (click)=\"updateItemQty(i, -1)\">\r\n                          <i class=\"material-icons\">remove</i>\r\n                        </button>\r\n                        <span class=\"qty-chip\">{{row.qty}}</span>\r\n                        <button type=\"button\" mat-icon-button class=\"row-qty-btn\"\r\n                          matTooltip=\"Increase\" (click)=\"updateItemQty(i, 1)\">\r\n                          <i class=\"material-icons\">add</i>\r\n                        </button>\r\n                      </div>\r\n                    </td>\r\n                    <td class=\"center\" style=\"color:var(--text-muted);\">\r\n                      {{row.qty_by_sales_executive || 0}}\r\n                    </td>\r\n                    <td class=\"num landing-price\">\r\n                      &#x20B9; {{row.total_price_with_freight | number:'1.2-2'}}\r\n                    </td>\r\n                    <td class=\"center\">{{row.weight}} KG</td>\r\n                    <td class=\"center\">\r\n                      <span class=\"wt-chip\">{{row.total_weight | number:'1.2-2'}} KG</span>\r\n                    </td>\r\n                    <td class=\"center\">\r\n                      <button type=\"button\" mat-icon-button class=\"del-btn\"\r\n                        matTooltip=\"Remove\" (click)=\"listdelete(i)\">\r\n                        <i class=\"material-icons\">delete_outline</i>\r\n                      </button>\r\n                    </td>\r\n                  </tr>\r\n                </ng-container>\r\n                <ng-container *ngIf=\"skLoader\">\r\n                  <tr *ngFor=\"let row of [].constructor(5)\">\r\n                    <td colspan=\"11\"><div class=\"wt-chip\" style=\"width:100%;height:14px;\">&nbsp;</div></td>\r\n                  </tr>\r\n                </ng-container>\r\n              </tbody>\r\n            </table>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <!-- Totals Summary -->\r\n      <div class=\"ai-summary-row\" *ngIf=\"item.length > 0\">\r\n        <div class=\"ai-summary-card\">\r\n          <div class=\"ai-summary-row-item\">\r\n            <span>Total QTY</span>\r\n            <span>{{total_qty}}</span>\r\n          </div>\r\n          <div class=\"ai-summary-row-item\">\r\n            <span>Total Weight</span>\r\n            <span>{{totalWeight | number:'1.2-2'}} KG&nbsp;({{tonWeight | number:'1.3-3'}} Ton)</span>\r\n          </div>\r\n          <div class=\"ai-summary-row-item\">\r\n            <span>Total Discount</span>\r\n            <span>&#x20B9; {{totalDiscount | number:'1.2-2'}}</span>\r\n          </div>\r\n          <div class=\"ai-summary-row-item\">\r\n            <span>Total Landing Price</span>\r\n            <span>&#x20B9; {{totalPrice | number:'1.2-2'}}</span>\r\n          </div>\r\n          <div class=\"ai-summary-row-item\">\r\n            <span>GST (18%)</span>\r\n            <span>&#x20B9; {{totalGSTApplied | number:'1.2-2'}}</span>\r\n          </div>\r\n          <div class=\"ai-summary-row-item ai-summary-total\">\r\n            <span>Grand Total</span>\r\n            <span>&#x20B9; {{totalPriceAfterGST | number:'1.2-2'}}</span>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <!-- Action Buttons -->\r\n      <div class=\"ai-actions\">\r\n        <button class=\"ai-btn\" type=\"button\" (click)=\"goBack()\">Cancel</button>\r\n        <button class=\"ai-btn ai-btn-primary\" type=\"submit\"\r\n          [disabled]=\"savingFlag || item.length == 0\">\r\n          {{savingFlag ? 'Saving...' : 'Save Order'}}\r\n        </button>\r\n      </div>\r\n\r\n    </form>\r\n  </div>\r\n</div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/add-item/add-item.component.scss":
/*!**************************************************!*\
  !*** ./src/app/add-item/add-item.component.scss ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: block;\n  height: 100%;\n}\n\n.main-container {\n  overflow: visible;\n}\n\n.ai-page {\n  height: 100%;\n  overflow-y: auto;\n  overflow-x: hidden;\n  background: var(--surface, #f8fafc);\n}\n\n.ai-header {\n  position: sticky;\n  top: 0;\n  z-index: 5;\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  padding: 14px 20px;\n  background: var(--surface-card, #fff);\n  border-bottom: 1px solid var(--bodrColor);\n  box-shadow: var(--shadow-sm);\n}\n\n.ai-back {\n  flex-shrink: 0;\n  width: 36px;\n  height: 36px;\n  border-radius: var(--radius-md);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: var(--text-secondary);\n  cursor: pointer;\n  transition: var(--transition-fast);\n}\n\n.ai-back:hover {\n  background: var(--surface-hover);\n  color: var(--text);\n}\n\n.ai-back i {\n  font-size: 20px;\n}\n\n.ai-title {\n  font-size: var(--text-xl);\n  font-weight: var(--font-semibold);\n  color: var(--text);\n}\n\n.ai-body {\n  padding: 18px 20px 40px;\n  width: 100%;\n}\n\n.ai-card {\n  background: var(--surface-card);\n  border: 1px solid var(--bodrColor);\n  border-radius: var(--radius-lg);\n  box-shadow: var(--shadow-sm);\n  overflow: hidden;\n  margin-bottom: 16px;\n}\n\n.ai-card-head {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 14px 18px;\n  border-bottom: 1px solid var(--border-light);\n}\n\n.ai-card-head i.material-icons {\n  font-size: 18px;\n  color: var(--primary);\n}\n\n.ai-card-head h2 {\n  font-size: var(--text-md);\n  font-weight: var(--font-semibold);\n  color: var(--text);\n}\n\n.ai-card-body {\n  padding: 16px 18px;\n}\n\n.ai-card-body.p0 {\n  padding: 0;\n}\n\n.ai-filter-row {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 14px;\n  align-items: flex-start;\n}\n\n.ai-filter-row mat-form-field {\n  flex: 1 1 160px;\n  min-width: 140px;\n}\n\n.ai-qty-add {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  flex: 1 1 200px;\n}\n\n.ai-qty-add mat-form-field {\n  flex: 1;\n}\n\n.ai-add-btn {\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  border: none;\n  background: var(--primary);\n  color: #fff;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  flex-shrink: 0;\n  margin-bottom: 20px;\n  transition: var(--transition-fast);\n}\n\n.ai-add-btn i.material-icons {\n  font-size: 20px;\n}\n\n.ai-add-btn:hover {\n  background: var(--primary-shade);\n}\n\n.item-count-badge {\n  background: var(--primary);\n  color: #fff;\n  font-size: var(--text-xs);\n  font-weight: var(--font-bold);\n  padding: 2px 10px;\n  border-radius: var(--radius-full);\n  margin-left: 8px;\n  vertical-align: middle;\n}\n\n.ai-table-wrap {\n  overflow-x: auto;\n}\n\n.ai-table {\n  width: 100%;\n  min-width: 900px;\n  table-layout: fixed;\n  border-collapse: collapse;\n}\n\n.ai-table th:nth-child(1), .ai-table td:nth-child(1) {\n  width: 44px;\n}\n\n.ai-table th:nth-child(2), .ai-table td:nth-child(2) {\n  width: 100px;\n}\n\n.ai-table th:nth-child(3), .ai-table td:nth-child(3) {\n  width: 100px;\n}\n\n.ai-table th:nth-child(4), .ai-table td:nth-child(4) {\n  width: 80px;\n}\n\n.ai-table th:nth-child(5), .ai-table td:nth-child(5) {\n  width: auto;\n}\n\n.ai-table th:nth-child(6), .ai-table td:nth-child(6) {\n  width: 120px;\n}\n\n.ai-table th:nth-child(7), .ai-table td:nth-child(7) {\n  width: 80px;\n}\n\n.ai-table th:nth-child(8), .ai-table td:nth-child(8) {\n  width: 130px;\n}\n\n.ai-table th:nth-child(9), .ai-table td:nth-child(9) {\n  width: 100px;\n}\n\n.ai-table th:nth-child(10), .ai-table td:nth-child(10) {\n  width: 110px;\n}\n\n.ai-table th:nth-child(11), .ai-table td:nth-child(11) {\n  width: 60px;\n}\n\n.ai-table thead th {\n  background: var(--surface);\n  text-align: left;\n  font-size: var(--text-xs);\n  font-weight: var(--font-semibold);\n  text-transform: uppercase;\n  letter-spacing: 0.03em;\n  color: var(--text-muted);\n  padding: 10px 14px;\n  border-bottom: 1px solid var(--bodrColor);\n  white-space: nowrap;\n}\n\n.ai-table thead th.num {\n  text-align: right;\n}\n\n.ai-table thead th.center {\n  text-align: center;\n}\n\n.ai-table tbody td {\n  padding: 10px 14px;\n  font-size: var(--text-sm);\n  color: var(--text);\n  border-bottom: 1px solid var(--border-light);\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.ai-table tbody td.num {\n  text-align: right;\n  font-variant-numeric: tabular-nums;\n}\n\n.ai-table tbody td.center {\n  text-align: center;\n}\n\n.ai-table tbody tr:hover td {\n  background: var(--surface-hover);\n}\n\n.qty-chip {\n  background: var(--primary-light);\n  color: var(--primary-dark);\n  padding: 4px 12px;\n  border-radius: var(--radius-md);\n  font-weight: var(--font-bold);\n  font-size: var(--text-sm);\n  display: inline-block;\n  min-width: 28px;\n  text-align: center;\n}\n\n.wt-chip {\n  background: var(--warning-light);\n  color: var(--warning-dark);\n  padding: 4px 8px;\n  border-radius: var(--radius-sm);\n  font-weight: var(--font-semibold);\n  font-size: var(--text-xs);\n  display: inline-block;\n}\n\n.landing-price {\n  color: var(--success-dark);\n  font-weight: var(--font-bold);\n}\n\n.del-btn {\n  color: var(--danger);\n}\n\n.del-btn:hover {\n  background: var(--danger-light);\n  border-radius: 50%;\n}\n\n.row-qty-group {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 2px;\n}\n\n.row-qty-group .row-qty-btn {\n  width: 24px;\n  height: 24px;\n  min-width: 24px;\n  line-height: 24px;\n  color: var(--text-secondary);\n}\n\n.row-qty-group .row-qty-btn .material-icons {\n  font-size: 16px;\n}\n\n.row-qty-group .row-qty-btn:hover:not([disabled]) {\n  background-color: var(--surface-hover);\n  border-radius: 50%;\n}\n\n.row-qty-group .row-qty-btn[disabled] {\n  color: var(--text-muted);\n  opacity: 0.5;\n}\n\n.ai-summary-row {\n  display: flex;\n  justify-content: flex-end;\n  margin-bottom: 16px;\n}\n\n.ai-summary-card {\n  width: 100%;\n  max-width: 380px;\n  background: var(--surface-card);\n  border: 1px solid var(--bodrColor);\n  border-radius: var(--radius-lg);\n  box-shadow: var(--shadow-sm);\n  overflow: hidden;\n}\n\n.ai-summary-row-item {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 10px 16px;\n  font-size: var(--text-sm);\n  border-bottom: 1px solid var(--border-light);\n}\n\n.ai-summary-row-item:last-child {\n  border-bottom: none;\n}\n\n.ai-summary-row-item span:first-child {\n  color: var(--text-secondary);\n}\n\n.ai-summary-row-item span:last-child {\n  color: var(--text);\n  font-weight: var(--font-medium);\n  font-variant-numeric: tabular-nums;\n}\n\n.ai-summary-row-item.ai-summary-total {\n  background: var(--primary-light);\n}\n\n.ai-summary-row-item.ai-summary-total span:first-child, .ai-summary-row-item.ai-summary-total span:last-child {\n  color: var(--primary-dark);\n  font-weight: var(--font-bold);\n  font-size: var(--text-md);\n}\n\n.ai-actions {\n  display: flex;\n  justify-content: flex-end;\n  gap: 10px;\n  padding-bottom: 20px;\n}\n\n.ai-btn {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  height: 38px;\n  padding: 0 18px;\n  border-radius: var(--radius-md);\n  font-size: var(--text-sm);\n  font-weight: var(--font-medium);\n  cursor: pointer;\n  transition: var(--transition-fast);\n  border: 1px solid var(--bodrColor);\n  background: var(--surface-card);\n  color: var(--text-secondary);\n}\n\n.ai-btn:hover:not(:disabled) {\n  border-color: var(--danger);\n  color: var(--danger);\n  background: var(--danger-light);\n}\n\n.ai-btn.ai-btn-primary {\n  background: var(--primary);\n  border-color: var(--primary);\n  color: #fff;\n}\n\n.ai-btn.ai-btn-primary:hover:not(:disabled) {\n  background: var(--primary-shade);\n  border-color: var(--primary-shade);\n  color: #fff;\n}\n\n.ai-btn.ai-btn-primary:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}"

/***/ }),

/***/ "./src/app/add-item/add-item.component.ts":
/*!************************************************!*\
  !*** ./src/app/add-item/add-item.component.ts ***!
  \************************************************/
/*! exports provided: AddItemComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddItemComponent", function() { return AddItemComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_services_DatabaseService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/_services/DatabaseService */ "./src/_services/DatabaseService.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_dialog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/dialog.component */ "./src/app/dialog.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var src_app_localstorage_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/localstorage.service */ "./src/app/localstorage.service.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! moment */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng6-toastr-notifications */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/ng6-toastr-notifications/fesm5/ng6-toastr-notifications.js");












var AddItemComponent = /** @class */ (function () {
    function AddItemComponent(params, dialogRef, serve, route, toast, location, session, rout, dialog, model) {
        var _this = this;
        this.params = params;
        this.dialogRef = dialogRef;
        this.serve = serve;
        this.route = route;
        this.toast = toast;
        this.location = location;
        this.session = session;
        this.rout = rout;
        this.dialog = dialog;
        this.model = model;
        this.userData = {};
        this.orderData = {};
        this.tabActiveType = {};
        this.search = {};
        this.savingFlag = false;
        this.assign_login_data = {};
        this.logined_user_data = {};
        this.type = '';
        this.company_name = '';
        this.name = '';
        this.order_id = '';
        this.dr_id = '';
        this.order_detail = {};
        this.filter = {};
        this.brandList = [];
        this.total_qty = 0;
        this.product_detail = {};
        this.user_data = {};
        this.thicknessList = [];
        this.filteredThicknessList = [];
        this.sizeList = [];
        this.filteredSizeList = [];
        this.item = [];
        this.original_items = [];
        this.totalWeight = 0;
        this.tonWeight = 0;
        this.stateTon = 0;
        this.today_date = new Date();
        this.skLoader = false;
        this.getBrand('');
        if (this.params) {
            this.orderData.state = this.params.state;
            this.dr_id = this.params.dr_id;
            this.delivery_from = this.params.pagetype;
            this.orderData.order_id = this.params.order_id;
            this.orderData.type = this.params.type;
            this.orderData.company_name = this.params.company_name;
            this.orderData.name = this.params.name;
            this.orderData.contact_person = this.params.contact_person;
        }
        else {
            this.route.params.subscribe(function (routeParams) {
                _this.orderData.order_id = _this.route.parent.snapshot.params.id;
                // 'pagetype' (e.g. 'despatched') comes as a queryParam; the route :type is the
                // order type. Prefer pagetype so the dispatch flow is detected on the page route.
                _this.delivery_from = _this.route.snapshot.queryParams['pagetype'] || routeParams.type;
            });
        }
        this.assign_login_data = this.session.getSession();
        this.logined_user_data = this.assign_login_data.value.data;
    }
    AddItemComponent.prototype.goBack = function () {
        this.location.back();
    };
    AddItemComponent.prototype.tabActive = function (tab) {
        this.tabActiveType = {};
        this.tabActiveType[tab] = true;
    };
    AddItemComponent.prototype.ngOnInit = function () {
        this.orderDetail();
    };
    AddItemComponent.prototype.getProductList = function (search) {
        var _this = this;
        this.filter.dr_id = this.order_detail.dr_id;
        this.filter.order_type = 'primary';
        this.serve.post_rqst({ 'data': { 'dr_id': this.dr_id, 'brand': this.product_detail.brand, 'thickness': this.product_detail.thickness, 'size': this.product_detail.size }, 'filter': { 'search': search } }, "Order/segmentItems")
            .subscribe(function (result) {
            if (result['statusCode'] == 200) {
                var detail = void 0;
                detail = result['result'];
                _this.product_detail.product_name = detail.product_name;
                _this.product_detail.id = detail.id;
                _this.product_detail.category_id = detail.category_id;
                _this.product_detail.category = detail.category;
                if (_this.product_detail.product_type == 'S') {
                    _this.product_detail.mrp = detail.mrp;
                    // this.product_detail.mrp = 100;
                }
                else {
                    _this.product_detail.mrp = detail.mrpSS;
                }
                _this.product_detail.product_code = detail.product_code;
                _this.product_detail.weight = detail.weight;
                _this.getProductDiscountList();
            }
            else {
                _this.toast.errorToastr(result['statusMsg']);
            }
        });
    };
    AddItemComponent.prototype.getProductDiscountList = function () {
        var _this = this;
        this.serve.post_rqst({ 'brand': this.product_detail.brand, 'category': this.product_detail.product_type, 'dr_id': this.order_detail.dr_id, 'warehouse_id': this.order_detail.warehouse }, "Order/segmentItemsDiscount")
            .subscribe(function (result) {
            if (result['statusCode'] == 200) {
                _this.master_discount = result['master_discount'];
                _this.all_segment_with_discount_list = result['all_segment_with_discount_list'];
                _this.product_detail.freight = (result['freight'].freight == null || result['freight'].freight === '') ? 0 : result['freight'].freight;
                if (_this.all_segment_with_discount_list[0].discount_1 + _this.all_segment_with_discount_list[0].discount_2 + _this.all_segment_with_discount_list[0].discount_3 + _this.all_segment_with_discount_list[0].discount_4 + _this.all_segment_with_discount_list[0].discount_5 + _this.all_segment_with_discount_list[0].discount_6 + _this.all_segment_with_discount_list[0].discount_7 + _this.all_segment_with_discount_list[0].discount_8 > 0) {
                    _this.discount_percentages = result['all_segment_with_discount_list'][0];
                    _this.product_detail.discount_percentages = [
                        _this.discount_percentages.discount_1,
                        _this.discount_percentages.discount_2,
                        _this.discount_percentages.discount_3,
                        _this.discount_percentages.discount_4,
                        _this.discount_percentages.discount_5,
                        _this.discount_percentages.discount_6,
                        _this.discount_percentages.discount_7,
                        _this.discount_percentages.discount_8
                    ];
                }
                else {
                    _this.discount_percentages = result['master_discount'][0];
                    _this.product_detail.discount_percentages = [
                        _this.discount_percentages.discount_1,
                        _this.discount_percentages.discount_2,
                        _this.discount_percentages.discount_3,
                        _this.discount_percentages.discount_4,
                        _this.discount_percentages.discount_5,
                        _this.discount_percentages.discount_6,
                        _this.discount_percentages.discount_7,
                        _this.discount_percentages.discount_8,
                    ];
                }
            }
            else {
                // this.toast.errorToastr(result['statusMsg'])
            }
        });
    };
    AddItemComponent.prototype.save_order = function () {
        var _this = this;
        this.user_data.state_ton_value = this.stateTon;
        this.user_data.order_ton_value = this.tonWeight;
        this.user_data.order_ton_value = this.tonWeight;
        this.user_data.totalPrice = this.totalPrice;
        this.user_data.totalFreightAmount = this.totalFreightAmount;
        this.user_data.totalDiscountAmount = this.totalDiscount;
        this.user_data.totalGSTApplied = this.totalGSTApplied;
        this.user_data.totalPriceAfterGST = this.totalPriceAfterGST;
        this.user_data.totalPrice = this.totalPrice;
        this.user_data.extra_discount_amount = this.extra_discount_amount;
        this.user_data.priceAfterextraDiscount = this.priceAfterextraDiscount;
        this.user_data.extraDiscountPercentage = this.extraDiscountPercentage;
        this.user_data.order_type = 'WEB ORDER';
        // if (this.tonWeight < this.stateTon) {
        //   this.toast.errorToastr("Minimum order quantity of " + this.stateTon + " tons required")
        //   return;
        // }
        this.savingFlag = true;
        this.serve.post_rqst({ "cart_data": this.item, 'user_data': this.user_data, "orderId": this.orderData.order_id, }, "Order/primaryOrderAddItem").subscribe(function (resp) {
            if (resp['statusCode'] == 200) {
                // if (this.delivery_from == 'despatched') {
                var dispatch_date = _this.user_data.dispatch_date ? moment__WEBPACK_IMPORTED_MODULE_7__(_this.user_data.dispatch_date).format('YYYY-MM-DD') : '';
                var payload = {
                    'reason': '',
                    'status': 'despatched',
                    'warehouse_id': '',
                    'id': _this.orderData.order_id,
                    'organisation_id': '',
                    'action_by': _this.logined_user_data.id,
                    'uid': _this.logined_user_data.id,
                    'uname': _this.logined_user_data.name,
                    'dispatch_date': dispatch_date
                };
                _this.serve.post_rqst(payload, "Order/primaryOrderStatusChange").subscribe((function (result) {
                    if (result['statusCode'] == 200) {
                        _this.savingFlag = false;
                        _this.toast.successToastr("Order Successfully Updated and Despatched");
                        if (_this.dialogRef)
                            _this.dialogRef.close(true);
                        else
                            _this.goBack();
                    }
                    else {
                        _this.savingFlag = false;
                        _this.toast.errorToastr(result['statusMsg']);
                    }
                }), function (err) {
                    _this.savingFlag = false;
                    _this.toast.errorToastr('Failed to update status');
                });
                // } else {
                //   this.toast.successToastr(resp['statusMsg']);
                //   if (this.dialogRef) this.dialogRef.close(true);
                //   else this.goBack();
                //   this.savingFlag = false;
                // }
            }
            else {
                _this.toast.errorToastr(resp['statusMsg']);
                _this.savingFlag = false;
            }
        }, function (err) {
            _this.savingFlag = false;
        });
    };
    AddItemComponent.prototype.orderDetail = function () {
        var _this = this;
        this.skLoader = true;
        var id = { 'id': this.orderData.order_id };
        this.serve.post_rqst(id, "Order/primaryOrderDetail").subscribe((function (result) {
            if (result['statusCode'] == 200) {
                _this.original_items = result['result']['item_info'];
                _this.product_detail.product_type = _this.original_items[0].product_type;
                _this.order_detail = result['result'];
                _this.dr_id = _this.order_detail.dr_id;
                _this.stateTon = _this.order_detail['party_min_weight'];
                _this.original_items.forEach(function (orig) {
                    var discountString = orig.discount_percentages;
                    orig.discount_percentages = discountString.split(',').map(Number);
                });
                // On dispatch, pre-load the order's existing items into the cart so the
                // user starts with the full set (backend replaces all items from cart_data).
                // Clone each item so addToList/updateItemQty don't mutate the original_items baseline.
                if (_this.delivery_from == 'despatched') {
                    _this.item = _this.original_items.map(function (orig) { return (tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, orig, { qty: parseFloat(orig.qty) || 0, total_weight: parseFloat(orig.total_weight) || 0, total_price: parseFloat(orig.total_price) || 0, total_price_qty: parseFloat(orig.total_price_qty) || 0, total_price_with_freight: parseFloat(orig.total_price_with_freight) || 0, discount_amount: parseFloat(orig.discount_amount) || 0, freight_amount: parseFloat(orig.freight_amount) || 0, qty_by_sales_executive: orig.qty_by_sales_executive || orig.qty })); });
                    _this.recalculateTotals();
                }
                else {
                    _this.item = [];
                }
                _this.getProductList('');
                _this.skLoader = false;
            }
            else {
                _this.toast.errorToastr(result['statusMsg']);
                _this.skLoader = false;
            }
        }));
    };
    AddItemComponent.prototype.listdelete = function (i) {
        var _this = this;
        this.dialog.confirm("Delete Item From List?").then(function (result) {
            if (result) {
                _this.deleteConfirm(i);
            }
        });
    };
    // order new
    AddItemComponent.prototype.blankValue = function () {
        this.product_detail.qty = '';
        this.product_detail.size = '';
        this.product_detail.thickness = '';
        this.product_detail.brand = '';
    };
    AddItemComponent.prototype.getBrand = function (search) {
        var _this = this;
        this.serve.post_rqst({ 'search': search }, "Order/brandList").subscribe((function (result) {
            if (result['statusCode'] == 200) {
                _this.brandList = result['result'];
            }
            else {
                _this.toast.errorToastr(result['statusMsg']);
            }
        }));
    };
    AddItemComponent.prototype.getThickness = function () {
        var _this = this;
        this.product_detail.thickness = '';
        this.product_detail.size = '';
        this.serve.post_rqst({ 'brand': this.product_detail.brand }, "Order/productThikness").subscribe((function (result) {
            if (result['statusCode'] == 200) {
                _this.thicknessList = result['result'];
                _this.filteredThicknessList = _this.thicknessList;
            }
            else {
                _this.toast.errorToastr(result['statusMsg']);
            }
        }));
    };
    AddItemComponent.prototype.filterThickness = function (search) {
        if (!search) {
            this.filteredThicknessList = this.thicknessList;
            return;
        }
        this.filteredThicknessList = this.thicknessList.filter(function (x) {
            return x.thickness && x.thickness.toString().toLowerCase().includes(search.toLowerCase());
        });
    };
    AddItemComponent.prototype.getSize = function () {
        var _this = this;
        this.product_detail.size = '';
        this.serve.post_rqst({ 'brand': this.product_detail.brand, 'thickness': this.product_detail.thickness }, "Order/productSize").subscribe((function (result) {
            if (result['statusCode'] == 200) {
                _this.sizeList = result['result'];
                _this.filteredSizeList = _this.sizeList;
            }
            else {
                _this.toast.errorToastr(result['statusMsg']);
            }
        }));
    };
    AddItemComponent.prototype.filterSize = function (search) {
        if (!search) {
            this.filteredSizeList = this.sizeList;
            return;
        }
        this.filteredSizeList = this.sizeList.filter(function (x) {
            return x.size && x.size.toString().toLowerCase().includes(search.toLowerCase());
        });
    };
    AddItemComponent.prototype.addToList = function () {
        var _this = this;
        // Check for mandatory fields
        if (!this.product_detail.brand) {
            this.toast.errorToastr("Please select brand");
            return;
        }
        if (!this.product_detail.thickness) {
            this.toast.errorToastr("Please select thickness");
            return;
        }
        if (!this.product_detail.size) {
            this.toast.errorToastr("Please select size");
            return;
        }
        if (!this.product_detail.qty) {
            this.toast.errorToastr("Please enter qty.");
            return;
        }
        if (parseInt(this.product_detail.qty) <= 0) {
            this.toast.errorToastr("Please enter at least one qty.");
            return;
        }
        // Check if the item already exists in the list
        if (this.item.length > 0) {
            var existIndex = this.item.findIndex(function (row) {
                return row.brand == _this.product_detail.brand &&
                    row.thickness == _this.product_detail.thickness &&
                    row.size == _this.product_detail.size &&
                    row.product_type == _this.product_detail.product_type;
            });
            // If it exists, update the quantity and total weight, and recalculate total price
            if (existIndex != -1) {
                this.item[existIndex]['qty'] += parseFloat(this.product_detail.qty);
                this.item[existIndex]['total_weight'] = parseFloat(this.item[existIndex]['qty']) * parseFloat(this.product_detail.weight);
                var basePriceExist = parseFloat(this.item[existIndex]['qty']) * parseFloat(this.product_detail.mrp);
                this.item[existIndex]['product_price'] = basePriceExist;
                this.item[existIndex]['total_price_qty'] = basePriceExist;
                this.item[existIndex]['total_price'] = this.applyDiscounts(basePriceExist, this.item[existIndex]['discount_percentages']); // Apply discounts to the total price
                this.item[existIndex]['total_price_with_freight'] = this.applyFreight(parseFloat(this.item[existIndex]['total_price'])); // Apply freight charges
                this.blankValue();
            }
            // If it doesn't exist, add a new item to the list
            else {
                var total_price = parseFloat(this.product_detail.mrp) * parseFloat(this.product_detail.qty);
                var origIdx = this.original_items.findIndex(function (o) {
                    return o.brand == _this.product_detail.brand &&
                        o.thickness == _this.product_detail.thickness &&
                        o.size == _this.product_detail.size &&
                        o.product_type == _this.product_detail.product_type;
                });
                this.item.push({
                    'brand': this.product_detail.brand,
                    'segment_name': this.product_detail.category,
                    'segment_id': this.product_detail.category_id,
                    'product_name': this.product_detail.product_name,
                    'weight': this.product_detail.weight,
                    'total_weight': this.product_detail.weight * parseFloat(this.product_detail.qty),
                    'product_code': this.product_detail.product_code,
                    'product_type': this.product_detail.product_type,
                    'thickness': this.product_detail.thickness,
                    'product_id': this.product_detail.id,
                    'size': this.product_detail.size,
                    'qty': parseFloat(this.product_detail.qty),
                    'qty_by_sales_executive': origIdx != -1 ? parseFloat(this.original_items[origIdx]['qty']) : 0,
                    'product_price': total_price,
                    'total_price_qty': total_price,
                    'total_price': this.applyDiscounts(total_price, this.product_detail.discount_percentages),
                    'total_price_with_freight': this.applyFreight(total_price),
                    'discount_amount': 0,
                    'freight_amount': 0,
                    'discount_percentages': this.product_detail.discount_percentages
                });
                this.blankValue();
            }
        }
        // If item list is empty, add the first item
        else {
            var total_price = parseFloat(this.product_detail.mrp) * parseFloat(this.product_detail.qty);
            var origIdx = this.original_items.findIndex(function (o) {
                return o.brand == _this.product_detail.brand &&
                    o.thickness == _this.product_detail.thickness &&
                    o.size == _this.product_detail.size &&
                    o.product_type == _this.product_detail.product_type;
            });
            this.item.push({
                'brand': this.product_detail.brand,
                'segment_name': this.product_detail.category,
                'segment_id': this.product_detail.category_id,
                'product_name': this.product_detail.product_name,
                'weight': this.product_detail.weight,
                'total_weight': this.product_detail.weight * parseFloat(this.product_detail.qty),
                'product_code': this.product_detail.product_code,
                'product_type': this.product_detail.product_type,
                'thickness': this.product_detail.thickness,
                'product_id': this.product_detail.id,
                'size': this.product_detail.size,
                'qty': parseFloat(this.product_detail.qty),
                'qty_by_sales_executive': origIdx != -1 ? parseFloat(this.original_items[origIdx]['qty']) : 0,
                'product_price': total_price,
                'total_price_qty': total_price,
                'total_price': this.applyDiscounts(total_price, this.product_detail.discount_percentages),
                'total_price_with_freight': this.applyFreight(total_price),
                'discount_amount': 0,
                'freight_amount': 0,
                'discount_percentages': this.product_detail.discount_percentages
            });
            this.blankValue();
        }
        this.recalculateTotals();
    };
    // Helper function to apply successive discounts
    AddItemComponent.prototype.applyDiscounts = function (price, discounts) {
        var discountedPrice = price;
        for (var _i = 0, discounts_1 = discounts; _i < discounts_1.length; _i++) {
            var discount = discounts_1[_i];
            if (discount) {
                discountedPrice -= (discountedPrice * (parseFloat(discount) / 100));
            }
        }
        return discountedPrice;
    };
    AddItemComponent.prototype.applyFreight = function (price) {
        var freightAmount = price * (parseFloat(this.product_detail.freight) / 100);
        return price + freightAmount; // Add freight amount to total price
    };
    AddItemComponent.prototype.applyGST = function (price) {
        var gstAmount = price * (18 / 100);
        return gstAmount; // Return the calculated GST amount
    };
    AddItemComponent.prototype.recalculateTotals = function () {
        this.total_qty = 0;
        this.totalWeight = 0;
        this.tonWeight = 0;
        this.totalPrice = 0;
        this.totalDiscount = 0;
        this.totalFreightAmount = 0;
        this.totalGSTApplied = 0;
        this.totalPriceAfterGST = 0;
        for (var i = 0; i < this.item.length; i++) {
            this.total_qty += parseInt(this.item[i]['qty']);
            this.totalWeight += parseFloat(this.item[i]['total_weight']);
            this.totalPrice += parseFloat(this.item[i]['total_price_with_freight']);
            this.totalGSTApplied += this.applyGST(parseFloat(this.item[i]['total_price_with_freight']));
            this.totalDiscount += parseFloat(this.item[i]['discount_amount']);
            this.totalFreightAmount += parseFloat(this.item[i]['freight_amount']);
            this.tonWeight = parseFloat(this.totalWeight) / 1000;
        }
        this.totalPriceAfterGST = this.totalPrice + this.totalGSTApplied;
    };
    AddItemComponent.prototype.updateItemQty = function (i, delta) {
        var currentQty = parseFloat(this.item[i]['qty']);
        var newQty = currentQty + delta;
        if (newQty < 1)
            return;
        var mrpPerUnit = parseFloat(this.item[i]['total_price_qty']) / currentQty;
        var newBasePrice = mrpPerUnit * newQty;
        var freightPerUnit = parseFloat(this.item[i]['freight_amount']) / currentQty;
        var newFreightAmount = freightPerUnit * newQty;
        var newTotalPrice = this.applyDiscounts(newBasePrice, this.item[i]['discount_percentages']);
        this.item[i]['qty'] = newQty;
        this.item[i]['total_weight'] = parseFloat(this.item[i]['weight']) * newQty;
        this.item[i]['total_price_qty'] = newBasePrice;
        this.item[i]['discount_amount'] = newBasePrice - newTotalPrice;
        this.item[i]['total_price'] = newTotalPrice;
        this.item[i]['freight_amount'] = newFreightAmount;
        this.item[i]['total_price_with_freight'] = newTotalPrice + newFreightAmount;
        this.recalculateTotals();
    };
    AddItemComponent.prototype.deleteConfirm = function (i) {
        // Remove the item from the list
        this.item.splice(i, 1);
        this.recalculateTotals();
    };
    // Function to apply extra discount on each product
    AddItemComponent.prototype.applyExtraDiscounts = function (extraDiscount) {
        this.extraDiscountPercentage = extraDiscount;
        this.totalPrice = this.order_detail.order_total;
        console.log(this.totalPrice, "line479");
        var discountAmount = this.totalPrice * (parseFloat(extraDiscount) / 100);
        this.extra_discount_amount = discountAmount;
        console.log(this.extra_discount_amount, "line 486");
        this.priceAfterextraDiscount = this.totalPrice - this.extra_discount_amount;
        console.log(this.priceAfterextraDiscount, "line 489");
        this.totalGSTApplied = this.applyGST(parseFloat(this.priceAfterextraDiscount));
        console.log(this.totalGSTApplied, "line 492");
        this.totalPriceAfterGST = this.priceAfterextraDiscount + this.totalGSTApplied;
        console.log(this.totalPriceAfterGST, "line 494");
        this.totalFreightAmount = 0;
        this.totalDiscount = 0;
        for (var i = 0; i < this.item.length; i++) {
            console.log(parseFloat(this.item[i]['discount_amount']));
            console.log(this.totalDiscount, "line 533");
            this.totalDiscount += parseFloat(this.item[i]['discount_amount']); // Sum the discount amounts for each product
            console.log(this.totalDiscount, "line 535");
            this.totalFreightAmount += parseFloat(this.item[i]['freight_amount']); // Sum the discount amounts for each product
            this.tonWeight = parseFloat(this.totalWeight) / 1000;
        }
        console.log(this.totalFreightAmount, "line539");
        console.log(this.totalDiscount, "line541");
        this.save_order();
    };
    AddItemComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-add-item',
            template: __webpack_require__(/*! ./add-item.component.html */ "./src/app/add-item/add-item.component.html"),
            styles: [__webpack_require__(/*! ./add-item.component.scss */ "./src/app/add-item/add-item.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()), tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_5__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Optional"])()),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object, _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialogRef"],
            src_services_DatabaseService__WEBPACK_IMPORTED_MODULE_2__["DatabaseService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_9__["ToastrManager"],
            _angular_common__WEBPACK_IMPORTED_MODULE_8__["Location"],
            src_app_localstorage_service__WEBPACK_IMPORTED_MODULE_6__["sessionStorage"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            src_app_dialog_component__WEBPACK_IMPORTED_MODULE_4__["DialogComponent"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialog"]])
    ], AddItemComponent);
    return AddItemComponent;
}());



/***/ }),

/***/ "./src/app/distribution/add-primary-order-value/add-primary-order-value.component.html":
/*!*********************************************************************************************!*\
  !*** ./src/app/distribution/add-primary-order-value/add-primary-order-value.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"edit-modal\">\r\n  <form #update_basic=\"ngForm\" name=\"update_basic\" (ngSubmit)=\"submit()\" validate>\r\n    <p class=\"heading\">Add Primary Order</p>\r\n    <div mat-dialog-content>\r\n      <div class=\"cs-form\">\r\n        <div class=\"row\">\r\n          <div class=\"col s6\">\r\n            <mat-form-field class=\"cs-input\"  appearance=\"outline\">\r\n              <mat-label>Select User </mat-label>\r\n              <mat-select name=\"user\" placeholder=\"Select User\" #user=\"ngModel\" [(ngModel)]=\"val.user\" [ngClass]=\"{'has-error' : user.invalid } \" required>\r\n                <mat-option disabled=\"\">Select User</mat-option>\r\n                <mat-option *ngFor=\"let data of sales_user\" value=\"{{data.id}}\">{{data.name}}</mat-option>\r\n              </mat-select>\r\n            </mat-form-field>               \r\n          </div>\r\n          \r\n          <div class=\"col s6\">\r\n            <mat-form-field class=\"cs-input\"  appearance=\"outline\">\r\n              <mat-label>Order Value</mat-label>\r\n              <input matInput placeholder=\"Type Here ...\" name=\"ord_value\" #ord_value=\"ngModel\" [(ngModel)]=\"val.ord_value\"  [ngClass]=\"{'has-error' : ord_value.invalid } \" required>\r\n            </mat-form-field>           \r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div mat-dialog-actions>\r\n      <button mat-button color=\"warn\" [mat-dialog-close]=\"false\">Cancel</button>\r\n      <button mat-button color=\"accent\" type=\"submit\">Save</button>\r\n    </div>\r\n  </form>\r\n  \r\n</div>"

/***/ }),

/***/ "./src/app/distribution/add-primary-order-value/add-primary-order-value.component.scss":
/*!*********************************************************************************************!*\
  !*** ./src/app/distribution/add-primary-order-value/add-primary-order-value.component.scss ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/distribution/add-primary-order-value/add-primary-order-value.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/distribution/add-primary-order-value/add-primary-order-value.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: AddPrimaryOrderValueComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddPrimaryOrderValueComponent", function() { return AddPrimaryOrderValueComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var src_services_DatabaseService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/_services/DatabaseService */ "./src/_services/DatabaseService.ts");
/* harmony import */ var src_app_dialog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/dialog.component */ "./src/app/dialog.component.ts");





var AddPrimaryOrderValueComponent = /** @class */ (function () {
    function AddPrimaryOrderValueComponent(data, serve, dialog2, alrt) {
        this.data = data;
        this.serve = serve;
        this.dialog2 = dialog2;
        this.alrt = alrt;
        this.val = {};
        this.sales_user = [];
        this.get_sales_user();
    }
    AddPrimaryOrderValueComponent.prototype.get_sales_user = function () {
        var _this = this;
        this.serve.post_rqst({}, "Distributors/get_sales_user")
            .subscribe(function (result) {
            _this.sales_user = result['get_sales_user'];
        });
    };
    AddPrimaryOrderValueComponent.prototype.submit = function () {
        var _this = this;
        this.val.dr_id = this.data.id;
        this.alrt.confirm('').then(function (result) {
            if (result) {
                if (_this.val.ord_value != '' && _this.val.user != '') {
                    _this.serve.post_rqst(_this.val, "Distributors/add_primary_ord")
                        .subscribe(function (result) {
                        _this.dialog2.closeAll();
                    });
                }
            }
            else {
                _this.dialog2.closeAll();
            }
        });
    };
    AddPrimaryOrderValueComponent.prototype.ngOnInit = function () {
    };
    AddPrimaryOrderValueComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-add-primary-order-value',
            template: __webpack_require__(/*! ./add-primary-order-value.component.html */ "./src/app/distribution/add-primary-order-value/add-primary-order-value.component.html"),
            styles: [__webpack_require__(/*! ./add-primary-order-value.component.scss */ "./src/app/distribution/add-primary-order-value/add-primary-order-value.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object, src_services_DatabaseService__WEBPACK_IMPORTED_MODULE_3__["DatabaseService"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"], src_app_dialog_component__WEBPACK_IMPORTED_MODULE_4__["DialogComponent"]])
    ], AddPrimaryOrderValueComponent);
    return AddPrimaryOrderValueComponent;
}());



/***/ }),

/***/ "./src/app/order/add-order/add-order.component.html":
/*!**********************************************************!*\
  !*** ./src/app/order/add-order/add-order.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-container\">\r\n  <app-loader *ngIf=\"loader\"></app-loader>\r\n  <div class=\"tools-container\">\r\n    <a mat-icon-button matTooltip=\"Back\" (click)=\"back()\">\r\n      <i class=\"material-icons\">arrow_back</i>\r\n    </a>\r\n    <h2>Add Order</h2>\r\n  </div>\r\n\r\n  <div class=\"container pt10 pl10 pr10 pb50\">\r\n\r\n    <div class=\"row\">\r\n      <div class=\"col s12\">\r\n        <div class=\"card pb0\">\r\n          <div class=\"card-body cs-form\">\r\n            <div class=\"row\">\r\n              <div class=\"col s8\">\r\n                <mat-radio-group class=\"example-section\" name=\"networkType\" [(ngModel)]=\"data.networkType\"\r\n                  [disabled]=\"add_list.length>0\" (ngModelChange)=\"distributors('')\">\r\n                  <mat-radio-button class=\"wp30\" color=\"primary\" value=\"1\" (click)=\"active_tab = 'Active'\">\r\n                    Channel Partner\r\n                  </mat-radio-button>\r\n\r\n                  <mat-radio-button class=\"wp30\" color=\"primary\" value=\"2\" (click)=\"active_tab = 'Inactive'\">\r\n                    Prospect CP\r\n                  </mat-radio-button>\r\n\r\n                  <mat-radio-button class=\"wp30\" color=\"primary\" value=\"7\" (click)=\"active_tab = ''\">\r\n                    Primary OEM\r\n                  </mat-radio-button>\r\n                </mat-radio-group>\r\n              </div>\r\n              <!-- <div class=\"col 4\">\r\n                <div class=\"value\" style=\"font-size: 200px;\" *ngIf=\"tonWeight > 0\">\r\n                  {{stateTon.toFixed(3)}}/{{tonWeight.toFixed(3)}} (Ton)\r\n                </div>\r\n              </div> -->\r\n            </div>\r\n\r\n            <div class=\"row\">\r\n              <div class=\"col s12 m6 l6\" *ngIf=\"data.networkType\">\r\n                <mat-form-field class=\"cs-input\" appearance=\"outline\">\r\n                  <mat-label>{{data.networkType == 1? 'Channel Partner' :\r\n                    data.networkType == 2 ? 'Prospect CP' : 'OEM'}}</mat-label>\r\n                  <mat-select name=\"type_name\" placeholder=\"Type Here ...\" #type_name=\"ngModel\"\r\n                    [disabled]=\"item.length>0\"\r\n                    (selectionChange)=\"get_state_list();getitem('',''); findPartyTon(); findWarehouse()\"\r\n                    [(ngModel)]=\"data.type_name\">\r\n                    <mat-option>\r\n                      <ngx-mat-select-search noEntriesFoundLabel=\"'no data found'\" placeholderLabel=\"Search..\"\r\n                        (keyup)=\"distributors($event.target.value)\"></ngx-mat-select-search>\r\n                    </mat-option>\r\n                    <mat-option *ngFor=\"let row of drList\" value=\"{{row.id}}\">{{row.display_name}}</mat-option>\r\n                  </mat-select>\r\n                </mat-form-field>\r\n              </div>\r\n            </div>\r\n\r\n            <ng-container *ngIf=\"data.type_name\">\r\n              <div class=\"card-head\">\r\n                <h2>Product Information</h2>\r\n              </div>\r\n              <div class=\"row\">\r\n                <div class=\"col s12 m3 3\">\r\n                  <mat-form-field appearance=\"outline\">\r\n                    <mat-label>Category</mat-label>\r\n                    <mat-select name=\"product_type\" [(ngModel)]=\"product_detail.product_type\" #product_type=\"ngModel\">\r\n                      <mat-option\r\n                        value=\"SS\">SS</mat-option>\r\n                        <mat-option\r\n                        value=\"S\">S</mat-option>\r\n                    </mat-select>\r\n                  </mat-form-field>\r\n                </div>\r\n                <div class=\"col s12 m3 3\">\r\n                  <mat-form-field appearance=\"outline\">\r\n                    <mat-label>Brand</mat-label>\r\n                    <mat-select name=\"brand\" [(ngModel)]=\"product_detail.brand\" #brand=\"ngModel\"\r\n                      (selectionChange)=\"getThickness();\">\r\n                      <ngx-mat-select-search noEntriesFoundLabel=\"'no data found'\" placeholderLabel=\"Search..\"\r\n                        (keyup)=\"getBrand($event.target.value)\"></ngx-mat-select-search>\r\n                      <mat-option *ngFor=\"let row of brandList\"\r\n                        value=\"{{row.brand_code}}\">{{row.brand_code}}</mat-option>\r\n                    </mat-select>\r\n                  </mat-form-field>\r\n                </div>\r\n                <div class=\"col s12 m3 3\">\r\n                  <mat-form-field appearance=\"outline\">\r\n                    <mat-label>Thickness</mat-label>\r\n                    <mat-select name=\"thickness\" [(ngModel)]=\"product_detail.thickness\" #thickness=\"ngModel\"\r\n                      (selectionChange)=\"getSize()\" [disabled]=\"!product_detail.brand\">\r\n                      <mat-option *ngFor=\"let row of thicknessList\"\r\n                        value=\"{{row.thickness}}\">{{row.thickness}}</mat-option>\r\n                    </mat-select>\r\n                  </mat-form-field>\r\n                </div>\r\n                <div class=\"col s12 m3 3\">\r\n                  <mat-form-field appearance=\"outline\">\r\n                    <mat-label>Size</mat-label>\r\n                    <mat-select name=\"size\" [(ngModel)]=\"product_detail.size\" #size=\"ngModel\"\r\n                      (selectionChange)=\"getitem()\" [disabled]=\"!product_detail.thickness\">\r\n                      <mat-option *ngFor=\"let row of sizeList\" value=\"{{row.size}}\">{{row.size}}</mat-option>\r\n                    </mat-select>\r\n                  </mat-form-field>\r\n                </div>\r\n\r\n\r\n\r\n                <div class=\"col s12 m3 l3\">\r\n                  <div class=\"wp100 df\">\r\n                    <mat-form-field appearance=\"outline\">\r\n                      <mat-label>QTY</mat-label>\r\n                      <input matInput placeholder=\"Type Here ...\" name=\"qty\" #qty=\"ngModel\"\r\n                        [(ngModel)]=\"product_detail.qty\" onkeypress=\"return event.charCode>=48 && event.charCode<=57\"\r\n                        maxlength=\"5\">\r\n                    </mat-form-field>\r\n\r\n                    <a class=\"add-item ml10 mt3\" mat-raised-button (click)=\"addToList()\">\r\n                      <i class=\"material-icons\">add</i>\r\n                    </a>\r\n                  </div>\r\n                </div>\r\n\r\n              </div>\r\n\r\n\r\n              <div class=\"cs-table\" *ngIf=\"item.length > 0\">\r\n                <div class=\"sticky-head\">\r\n                  <div class=\"table-head\">\r\n                    <table>\r\n                      <tr>\r\n                        <th class=\"w30\">S.no.</th>\r\n                        <th class=\"w100\">Brand</th>\r\n                        <th class=\"w110\">Thickness</th>\r\n                        <th class=\"w70\">Size</th>\r\n                        <th class=\"w200\">Product Name</th>\r\n                        <th class=\"w60 text-right\">QTY.</th>\r\n                        <th class=\"w100 text-center\">Weight per Sheet</th>\r\n                        <th class=\"w100 text-center\">Total Weight</th>\r\n                        <th class=\"w40 text-right\">Action</th>\r\n                      </tr>\r\n                    </table>\r\n                  </div>\r\n                </div>\r\n                <div class=\"table-container\">\r\n                  <div class=\"table-content\">\r\n                    <table>\r\n                      <tr *ngFor=\"let row of item;let i=index\">\r\n                        <td class=\"w30\">{{i+1}}</td>\r\n                        <td class=\"w100\">{{row.brand}}</td>\r\n                        <td class=\"w110\">{{row.thickness}}</td>\r\n                        <td class=\"w70\">{{row.size}}</td>\r\n                        <td class=\"w200\">{{row.product_name}}</td>\r\n                        <td class=\"w60 text-right\">{{row.qty}}</td>\r\n                        <td class=\"w100 text-center\"><strong>{{row.weight}} KG</strong></td>\r\n                        <td class=\"w100 text-center\"><strong>{{row.total_weight | number:'1.2-2'}} KG</strong></td>\r\n                        <td class=\"w40 text-center\">\r\n                          <div class=\"action-button\">\r\n                            <button mat-icon-button matTooltip=\"Delete\" (click)=\"listdelete(i)\">\r\n                              <i class=\"material-icons del\">delete</i>\r\n                            </button>\r\n                          </div>\r\n                        </td>\r\n                      </tr>\r\n                    </table>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </ng-container>\r\n\r\n            <div class=\"row\">\r\n              <div class=\"col s4\" *ngIf=\"item.length\">\r\n                <div class=\"row\">\r\n                  <div class=\"col s12\">\r\n                    <mat-form-field appearance=\"outline\">\r\n                      <mat-label>Estimate Delivery Date</mat-label>\r\n                      <input name=\"estimate_delivery_date\" matInput [matDatepicker]=\"pickers\" placeholder=\"\"\r\n                        [min]=\"minDate\" #estimate_delivery_date=\"ngModel\" readonly\r\n                        [(ngModel)]=\"data.estimate_delivery_date\" required>\r\n                      <mat-datepicker-toggle matSuffix [for]=\"pickers\"></mat-datepicker-toggle>\r\n                      <mat-datepicker #pickers></mat-datepicker>\r\n                    </mat-form-field>\r\n                  </div>\r\n                </div>\r\n\r\n                <div class=\"row\">\r\n                  <div class=\"col s12\">\r\n                    <mat-form-field class=\"cs-input\" appearance=\"outline\">\r\n                      <mat-label>Warehouse</mat-label>\r\n                      <mat-select name=\"warehouse\" placeholder=\"Warehouse\" #warehouse=\"ngModel\"\r\n                        [(ngModel)]=\"data.warehouse\" required>\r\n                        <mat-option *ngFor=\"let row of warehouseList\"\r\n                          value=\"{{row.company_name}}\">{{row.company_name}}</mat-option>\r\n                      </mat-select>\r\n                    </mat-form-field>\r\n                  </div>\r\n                </div>\r\n\r\n                <div class=\"row\">\r\n                  <div class=\"col s12\">\r\n                    <mat-form-field appearance=\"outline\">\r\n                      <mat-label> Remark</mat-label>\r\n                      <textarea matInput placeholder=\"Type Here ...\" name=\"remark\" #remark=\"ngModel\"\r\n                        [(ngModel)]=\"data.remark\" class=\"h100\" required onpaste=\"return false;\"\r\n                        ondrop=\"return false;\"></textarea>\r\n                    </mat-form-field>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n\r\n              <div class=\"col s4 offset-s4\" *ngIf=\"totalWeight > 0\">\r\n                <div class=\"invoice-table\">\r\n                  <table>\r\n                    <tr>\r\n                      <td>Total Item Weight</td>\r\n                      <th>{{totalWeight | number:'1.2-2'}} KG</th>\r\n                    </tr>\r\n                    <tr>\r\n                      <td>Total Item Qty.</td>\r\n                      <th>{{total_qty}}</th>\r\n                    </tr>\r\n                  </table>\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"row\" *ngIf=\"item.length > 0 && dr_detail\">\r\n      <div class=\"col s12\">\r\n        <div class=\"text-right\">\r\n          <button [ngClass]=\"{'loading': savingFlag == true}\" mat-raised-button color=\"accent\" type=\"submit\"\r\n            [disabled]=\"savingFlag == true\" (click)=\"user_data.order_status='Pending';save_orderalert('save');\">\r\n            {{savingFlag == true ? 'Saving' : 'Save'}}\r\n          </button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/order/add-order/add-order.component.ts":
/*!********************************************************!*\
  !*** ./src/app/order/add-order/add-order.component.ts ***!
  \********************************************************/
/*! exports provided: AddOrderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddOrderComponent", function() { return AddOrderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _router_animation_router_animation_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../router-animation/router-animation.component */ "./src/app/router-animation/router-animation.component.ts");
/* harmony import */ var src_services_DatabaseService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/_services/DatabaseService */ "./src/_services/DatabaseService.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _dialog_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../dialog.component */ "./src/app/dialog.component.ts");
/* harmony import */ var src_app_localstorage_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/localstorage.service */ "./src/app/localstorage.service.ts");
/* harmony import */ var ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng6-toastr-notifications */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/ng6-toastr-notifications/fesm5/ng6-toastr-notifications.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! moment */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_8__);










// import { QuillEditorComponent } from 'ngx-quill/src/quill-editor.component';
var AddOrderComponent = /** @class */ (function () {
    function AddOrderComponent(serve, route, toast, dialog, router, session) {
        this.serve = serve;
        this.route = route;
        this.toast = toast;
        this.dialog = dialog;
        this.router = router;
        this.session = session;
        this.data = {};
        this.items = [];
        this.product_list = [];
        this.add_list = [];
        this.special_discount = 0;
        this.product_detail = {};
        this.brandList = [];
        this.total_qty = 0;
        this.savingFlag = false;
        this.user_data = {};
        this.login_data = {};
        this.Dist_state = '';
        this.loader = false;
        this.drList = [];
        this.selectedBrand = '';
        this.networkType = [];
        this.warehouseList = [];
        this.thicknessList = [];
        this.sizeList = [];
        this.item = [];
        this.totalWeight = 0;
        this.tonWeight = 0;
        this.stateTon = 0;
        this.login_data = this.session.getSession();
        this.login_data = this.login_data.value;
        this.login_data = this.login_data.data;
        this.minDate = new Date();
        this.getBrand('');
    }
    AddOrderComponent.prototype.ngOnInit = function () {
    };
    AddOrderComponent.prototype.distributorDetail = function () {
        var _this = this;
        this.loader = true;
        var id = { "id": this.dr_id };
        this.serve.post_rqst(id, "CustomerNetwork/distributorDetail").subscribe(function (result) {
            if (result['statusCode'] == 200) {
                _this.loader = false;
                _this.dr_detail = result['distributor_detail'];
                _this.getitem('', _this.dr_detail.brand);
            }
            else {
                _this.loader = true;
                _this.toast.errorToastr(result['statusMsg']);
            }
        }, function (err) {
            _this.loader = false;
        });
    };
    AddOrderComponent.prototype.distributors = function (masterSearch) {
        var _this = this;
        this.loader = true;
        var type;
        if (this.data.networkType == '1' && this.active_tab == 'Active') {
            type = '1';
        }
        if (this.data.networkType == '2' && this.active_tab == 'Inactive') {
            type = '1';
        }
        if (this.data.networkType == '7') {
            type = '7';
        }
        this.serve.post_rqst({ 'dr_type': type, 'active_tab': this.active_tab, 'master_search': masterSearch }, "Order/followupCustomer").subscribe(function (result) {
            if (result['statusCode'] == 200) {
                _this.loader = false;
                _this.drList = result['result'];
            }
            else {
                _this.loader = true;
                _this.toast.errorToastr(result['statusMsg']);
            }
        }, function (err) {
            _this.loader = false;
        });
    };
    AddOrderComponent.prototype.get_state_list = function (name) {
        var _this = this;
        var index = this.drList.findIndex(function (r) { return r.id == _this.data.type_name; });
        if (index > -1) {
            this.Dist_state = this.drList[index].state;
        }
        this.dr_id = this.data.type_name;
        this.distributorDetail();
    };
    AddOrderComponent.prototype.getitem = function (search, brand) {
        var _this = this;
        this.loader = true;
        this.serve.post_rqst({ 'data': { 'dr_id': this.dr_id, 'brand': this.product_detail.brand, 'thickness': this.product_detail.thickness, 'size': this.product_detail.size }, 'filter': { 'search': search } }, "Order/segmentItems")
            .subscribe(function (resp) {
            if (resp['statusCode'] == 200) {
                _this.loader = false;
                var detail = void 0;
                detail = resp['result'];
                _this.product_detail.product_name = detail.product_name;
                _this.product_detail.id = detail.id;
                _this.product_detail.category_id = detail.category_id;
                _this.product_detail.category = detail.category;
                _this.product_detail.product_code = detail.product_code;
                _this.product_detail.weight = detail.weight;
            }
            else {
                _this.loader = false;
                _this.toast.errorToastr(resp['statusMsg']);
            }
        });
    };
    AddOrderComponent.prototype.get_product_details = function (id) {
        var _this = this;
        this.data.brand = '';
        this.data.color = '';
        this.loader = true;
        this.serve.post_rqst({ 'product_id': id, 'order_type': 'primary', 'brand': this.dr_detail.brand, 'fixed_brand': this.selectedBrand != '' ? [this.selectedBrand] : [] }, "Order/segmentItemsDetails")
            .subscribe(function (resp) {
            if (resp['statusCode'] == 200) {
                _this.loader = false;
                _this.product_detail = resp['result'];
            }
            else {
                _this.toast.errorToastr(resp['statusMsg']);
                _this.loader = false;
            }
        });
    };
    AddOrderComponent.prototype.get_product_Size = function (dr_id, product_id) {
        var _this = this;
        var Index = this.items.findIndex(function (row) { return row.id == product_id; });
        if (Index != -1) {
            this.data.product_name = this.items[Index].product_name;
            this.data.feature_apply = this.items[Index].feature_apply;
            this.data.product_code = this.items[Index].product_code;
        }
        this.loader = true;
        setTimeout(function () {
            _this.serve.post_rqst({ 'state_name': _this.dr_detail.state, 'dr_id': dr_id, 'category_id': _this.product_detail.category_id, 'product_id': product_id }, "Order/segmentItemPriceWithoutFeatures")
                .subscribe(function (resp) {
                if (resp['statusCode'] == 200) {
                    _this.loader = false;
                    _this.product_resp = true;
                    _this.product_list = resp['result'];
                    if (_this.product_list.length > 0) {
                        for (var i = 0; i < _this.product_list.length; i++) {
                            _this.product_list[i].edit_true = false;
                        }
                    }
                }
                else {
                    _this.toast.errorToastr(resp['statusMsg']);
                    _this.product_resp = false;
                    _this.loader = false;
                }
            }, function (err) {
            });
        }, 200);
    };
    AddOrderComponent.prototype.getWarehouse = function () {
        var _this = this;
        this.serve.post_rqst({ 'assigned_warehouse': this.partyWareHouse ? this.partyWareHouse : '' }, "Dispatch/fetchWarehouse").subscribe((function (result) {
            if (result['statusCode'] == 200) {
                _this.warehouseList = result['result'];
            }
            else {
                _this.toast.errorToastr(result['statusMsg']);
            }
        }));
    };
    // Brand 
    AddOrderComponent.prototype.getBrand = function (search) {
        var _this = this;
        this.serve.post_rqst({ 'search': search }, "Order/brandList").subscribe((function (result) {
            if (result['statusCode'] == 200) {
                _this.brandList = result['result'];
            }
            else {
                _this.toast.errorToastr(result['statusMsg']);
            }
        }));
    };
    AddOrderComponent.prototype.getThickness = function () {
        var _this = this;
        this.product_detail.thickness = '';
        this.product_detail.size = '';
        this.serve.post_rqst({ 'brand': this.product_detail.brand }, "Order/productThikness").subscribe((function (result) {
            if (result['statusCode'] == 200) {
                _this.thicknessList = result['result'];
            }
            else {
                _this.toast.errorToastr(result['statusMsg']);
            }
        }));
    };
    AddOrderComponent.prototype.getSize = function () {
        var _this = this;
        this.product_detail.size = '';
        this.serve.post_rqst({ 'brand': this.product_detail.brand, 'thickness': this.product_detail.thickness }, "Order/productSize").subscribe((function (result) {
            if (result['statusCode'] == 200) {
                _this.sizeList = result['result'];
            }
            else {
                _this.toast.errorToastr(result['statusMsg']);
            }
        }));
    };
    AddOrderComponent.prototype.addToList = function () {
        var _this = this;
        if (!this.product_detail.brand) {
            this.toast.errorToastr("Please select brand");
            return;
        }
        if (!this.product_detail.thickness) {
            this.toast.errorToastr("Please select thickness");
            return;
        }
        if (!this.product_detail.size) {
            this.toast.errorToastr("Please select size");
            return;
        }
        if (!this.product_detail.product_type) {
            this.toast.errorToastr("Please select Category");
            return;
        }
        if (!this.product_detail.qty) {
            this.toast.errorToastr("Please enter qty.");
            return;
        }
        if (parseInt(this.product_detail.qty) <= 0) {
            this.toast.errorToastr("Please enter at least one qty.");
            return;
        }
        if (this.item.length > 0) {
            var existIndex = void 0;
            existIndex = this.item.findIndex(function (row) { return row.brand == _this.product_detail.brand && row.thickness == _this.product_detail.thickness && row.size == _this.product_detail.size && row.product_type == _this.product_detail.product_type; });
            if (existIndex != -1) {
                this.item[existIndex]['qty'] += parseFloat(this.product_detail.qty);
                this.item[existIndex]['total_weight'] = parseFloat(this.item[existIndex]['qty']) * this.product_detail.weight;
                this.blankValue();
            }
            else {
                this.item.push({ 'brand': this.product_detail.brand, 'segment_name': this.product_detail.category, 'segment_id': this.product_detail.category_id, 'product_name': this.product_detail.product_name, 'weight': this.product_detail.weight, 'total_weight': this.product_detail.weight * parseFloat(this.product_detail.qty), 'product_code': this.product_detail.product_code, 'thickness': this.product_detail.thickness, 'product_id': this.product_detail.id, 'size': this.product_detail.size, 'qty': parseFloat(this.product_detail.qty), 'product_type': this.product_detail.product_type });
                this.blankValue();
            }
        }
        else {
            this.item.push({ 'brand': this.product_detail.brand, 'segment_name': this.product_detail.category, 'segment_id': this.product_detail.category_id, 'product_name': this.product_detail.product_name, 'weight': this.product_detail.weight, 'total_weight': this.product_detail.weight * parseFloat(this.product_detail.qty), 'product_code': this.product_detail.product_code, 'thickness': this.product_detail.thickness, 'product_id': this.product_detail.id, 'size': this.product_detail.size, 'qty': parseFloat(this.product_detail.qty), 'product_type': this.product_detail.product_type });
            this.blankValue();
        }
        this.total_qty = 0;
        this.tonWeight = 0;
        this.totalWeight = 0;
        for (var i = 0; i < this.item.length; i++) {
            this.total_qty += parseInt(this.item[i]['qty']);
            this.totalWeight += parseFloat(this.item[i]['total_weight']);
            this.tonWeight = parseFloat(this.totalWeight) / 1000;
        }
    };
    AddOrderComponent.prototype.blankValue = function () {
        this.product_detail.qty = '';
        this.product_detail.size = '';
        this.product_detail.thickness = '';
        this.product_detail.brand = '';
        this.product_detail.product_type = '';
    };
    AddOrderComponent.prototype.findPartyTon = function () {
        var _this = this;
        var existIndex;
        existIndex = this.drList.findIndex(function (row) { return row.id == _this.data.type_name; });
        if (existIndex != -1) {
            this.stateTon = this.drList[existIndex]['min_ton'];
        }
    };
    AddOrderComponent.prototype.findWarehouse = function () {
        var _this = this;
        var existIndex;
        existIndex = this.drList.findIndex(function (row) { return row.id == _this.data.type_name; });
        if (existIndex != -1) {
            this.partyWareHouse = this.drList[existIndex]['assigned_warehouse'];
            this.getWarehouse();
        }
        else {
            this.getWarehouse();
        }
    };
    AddOrderComponent.prototype.listdelete = function (i) {
        this.total_qty = 0;
        this.tonWeight = 0;
        this.totalWeight = 0;
        this.item.splice(i, 1);
        for (var i_1 = 0; i_1 < this.item.length; i_1++) {
            this.total_qty += parseInt(this.item[i_1]['qty']);
            this.totalWeight += parseFloat(this.item[i_1]['total_weight']);
            this.tonWeight = parseFloat(this.totalWeight) / 1000;
        }
    };
    AddOrderComponent.prototype.save_orderalert = function () {
        var _this = this;
        this.dialog.confirm("Do you want to submit this order ?").then(function (result) {
            if (result) {
                _this.save_order();
            }
        });
    };
    AddOrderComponent.prototype.save_order = function () {
        // if (this.tonWeight < this.stateTon) {
        //   this.toast.errorToastr("Minimum order quantity of " + this.stateTon + " tons required")
        //   return;
        // }
        var _this = this;
        if (!this.data.estimate_delivery_date) {
            this.toast.errorToastr("Estimate delivery date is required");
            return;
        }
        if (!this.data.warehouse) {
            this.toast.errorToastr("Warehouse is required");
            return;
        }
        // if (!this.data.remark) {
        //   this.toast.errorToastr("Remark is required")
        //   return
        // }
        if (this.data.estimate_delivery_date) {
            this.data.estimate_delivery_date = moment__WEBPACK_IMPORTED_MODULE_8__(this.data.estimate_delivery_date).format('YYYY-MM-DD');
            this.data.estimate_delivery_date = this.data.estimate_delivery_date;
        }
        this.savingFlag = true;
        this.user_data.type = '1';
        this.user_data.dr_id = this.dr_id;
        this.user_data.remark = this.data.remark;
        this.user_data.state_ton_value = this.stateTon;
        this.user_data.order_ton_value = this.tonWeight;
        this.user_data.estimate_delivery_date = this.data.estimate_delivery_date;
        this.user_data.warehouse = this.data.warehouse;
        this.user_data.order_ton_value = this.tonWeight;
        this.user_data.order_type = 'WEB ORDER';
        this.user_data.product_code = this.data.product_code;
        if (this.data.distributor_id && this.data.delivery_from)
            this.user_data.distributor_id = this.data.delivery_from;
        this.serve.post_rqst({ "cart_data": this.item, "user_data": this.user_data, }, "Order/primaryOrdersAdd").subscribe(function (resp) {
            if (resp['statusCode'] == 200) {
                var toastString = '';
                if (_this.user_data.order_status == 'Draft') {
                    _this.dialog.success('', resp['statusMsg']);
                }
                else {
                    _this.dialog.success('', resp['statusMsg']);
                }
                _this.router.navigate(['/order-list']);
            }
            else {
                _this.dialog.error(resp['statusMsg']);
            }
        }, function (error) {
        });
    };
    AddOrderComponent.prototype.back = function () {
        window.history.back();
    };
    AddOrderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-add-order',
            template: __webpack_require__(/*! ./add-order.component.html */ "./src/app/order/add-order/add-order.component.html"),
            animations: [Object(_router_animation_router_animation_component__WEBPACK_IMPORTED_MODULE_2__["slideToTop"])()]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_services_DatabaseService__WEBPACK_IMPORTED_MODULE_3__["DatabaseService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_7__["ToastrManager"], _dialog_component__WEBPACK_IMPORTED_MODULE_5__["DialogComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], src_app_localstorage_service__WEBPACK_IMPORTED_MODULE_6__["sessionStorage"]])
    ], AddOrderComponent);
    return AddOrderComponent;
}());



/***/ }),

/***/ "./src/app/order/order-list/order-list.component.html":
/*!************************************************************!*\
  !*** ./src/app/order/order-list/order-list.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-container\">\r\n<div class=\"ol-page\">\r\n  <div class=\"ol-month-strip\">\r\n    <button class=\"ol-month-btn\" *ngFor=\"let row of calenderInfo; let i =index;\"\r\n      [class.active]=\"OrderMonth == row.month && OrderYear == row.year\"\r\n      (click)=\"orderList('',row.month,row.year);\">{{row.monthYEAR | date :'MMM'}} {{row.year}}</button>\r\n  </div>\r\n\r\n  <div class=\"ol-toolbar\">\r\n    <span class=\"ol-title\">Primary Order &middot; Total Tonnage <strong>{{count.total_weight ? (count.total_weight.toFixed()) : '0'}}</strong></span>\r\n\r\n    <a class=\"ol-new-btn\" routerLink=\"/primary-order\" matTooltip=\"Place a new primary order\">\r\n      <i class=\"material-icons\">add</i> New Order\r\n    </a>\r\n\r\n    <ng-container *ngIf=\"tmp_orderlist.length > 0 && active_tab != 'Insights'\">\r\n      <button class=\"ol-icon-btn\" matTooltip=\"Refresh\" (click)=\"refresh('refresh',OrderMonth,OrderYear)\">\r\n        <i class=\"material-icons\">refresh</i>\r\n      </button>\r\n      <button class=\"ol-icon-btn\" matTooltip=\"Filter\" (click)=\"openBottomSheet()\">\r\n        <i class=\"material-icons\">filter_alt</i>\r\n      </button>\r\n      <button class=\"ol-icon-btn\" matTooltip=\"Sorting\" (click)=\"sortData()\">\r\n        <i class=\"material-icons\">swap_vert</i>\r\n      </button>\r\n      <div class=\"ol-pagination\">\r\n        Page <strong>{{pagenumber}}</strong> of <strong>{{total_page}}</strong>\r\n        <button class=\"ol-icon-btn\" matTooltip=\"Older\" (click)=\"pervious('',OrderMonth,OrderYear)\"\r\n          [disabled]=\"start == 0 || total_page == 0\">\r\n          <i class=\"material-icons\">navigate_before</i>\r\n        </button>\r\n        <button class=\"ol-icon-btn\" matTooltip=\"Newer\" (click)=\"nextPage('',OrderMonth,OrderYear)\"\r\n          [disabled]=\"pagenumber == total_page || total_page == 0 \">\r\n          <i class=\"material-icons\">navigate_next</i>\r\n        </button>\r\n      </div>\r\n    </ng-container>\r\n  </div>\r\n\r\n  <div class=\"ol-tabs\">\r\n    <button class=\"ol-tab\" [class.active]=\"active_tab == 'Insights'\" (click)=\"active_tab = 'Insights';\">\r\n      <i class=\"material-icons\">insights</i> Insights\r\n    </button>\r\n    <button class=\"ol-tab\" [class.active]=\"active_tab == 'Pending'\"\r\n      (click)=\"active_tab = 'Pending';orderList('',OrderMonth,OrderYear);\">\r\n      <i class=\"material-icons\">pending_actions</i> Pending ({{count.Pending ? count.Pending : '0'}})\r\n    </button>\r\n    <button class=\"ol-tab ol-tab-hold\" [class.active]=\"active_tab == 'hold_clubbing'\"\r\n      (click)=\"active_tab = 'hold_clubbing';orderList('',OrderMonth,OrderYear);\">\r\n      <i class=\"material-icons\">pause_circle</i> Hold Clubbing ({{count.hold_clubbing ? count.hold_clubbing : '0'}})\r\n    </button>\r\n    <button class=\"ol-tab ol-tab-hold\" [class.active]=\"active_tab == 'hold_tonnage'\"\r\n      (click)=\"active_tab = 'hold_tonnage';orderList('',OrderMonth,OrderYear);\">\r\n      <i class=\"material-icons\">pause_circle</i> Hold Tonnage ({{count.hold_tonnage ? count.hold_tonnage : '0'}})\r\n    </button>\r\n    <button class=\"ol-tab ol-tab-hold\" [class.active]=\"active_tab == 'hold_outstanding'\"\r\n      (click)=\"active_tab = 'hold_outstanding';orderList('',OrderMonth,OrderYear);\">\r\n      <i class=\"material-icons\">pause_circle</i> Hold Outstanding ({{count.hold_outstanding ? count.hold_outstanding : '0'}})\r\n    </button>\r\n    <button class=\"ol-tab ol-tab-hold\" [class.active]=\"active_tab == 'hold_customer'\"\r\n      (click)=\"active_tab = 'hold_customer';orderList('',OrderMonth,OrderYear);\">\r\n      <i class=\"material-icons\">pause_circle</i> Hold Customer ({{count.hold_customer ? count.hold_customer : '0'}})\r\n    </button>\r\n    <button class=\"ol-tab\" [class.active]=\"active_tab == 'Approved'\"\r\n      (click)=\"active_tab = 'Approved';orderList('',OrderMonth,OrderYear);\">\r\n      <i class=\"material-icons\">sync</i> In process ({{count.Approved ? count.Approved : '0'}})\r\n    </button>\r\n    <button class=\"ol-tab\" [class.active]=\"active_tab == 'in_loading'\"\r\n      (click)=\"active_tab = 'in_loading';orderList('',OrderMonth,OrderYear);\">\r\n      <i class=\"material-icons\">move_to_inbox</i> In loading ({{count.in_loading ? count.in_loading : '0'}})\r\n    </button>\r\n    <button class=\"ol-tab\" [class.active]=\"active_tab == 'despatched'\"\r\n      (click)=\"active_tab = 'despatched';orderList('',OrderMonth,OrderYear);\">\r\n      <i class=\"material-icons\">local_shipping</i> Dispatched ({{count.despatched ? count.despatched : '0'}})\r\n    </button>\r\n    <button class=\"ol-tab\" [class.active]=\"active_tab == 'Reject'\"\r\n      (click)=\"active_tab = 'Reject';orderList('',OrderMonth,OrderYear);\">\r\n      <i class=\"material-icons\">unpublished</i> Reject ({{count.Reject ? count.Reject : '0'}})\r\n    </button>\r\n  </div>\r\n\r\n  <!-- Insights Tab Content -->\r\n  <ng-container *ngIf=\"active_tab == 'Insights'\">\r\n    <div class=\"insights-container\">\r\n      <!-- Summary Cards Row -->\r\n      <div class=\"insights-summary-row\">\r\n        <div class=\"insight-summary-card primary-gradient\">\r\n          <div class=\"summary-icon\">\r\n            <i class=\"material-icons\">inventory_2</i>\r\n          </div>\r\n          <div class=\"summary-content\">\r\n            <span class=\"summary-value\">{{getTotalOrders()}}</span>\r\n            <span class=\"summary-label\">Total Orders</span>\r\n          </div>\r\n        </div>\r\n        <div class=\"insight-summary-card success-gradient\">\r\n          <div class=\"summary-icon\">\r\n            <i class=\"material-icons\">check_circle</i>\r\n          </div>\r\n          <div class=\"summary-content\">\r\n            <span class=\"summary-value\">{{count.despatched || 0}}</span>\r\n            <span class=\"summary-label\">Dispatched</span>\r\n          </div>\r\n        </div>\r\n        <div class=\"insight-summary-card warning-gradient\">\r\n          <div class=\"summary-icon\">\r\n            <i class=\"material-icons\">pending_actions</i>\r\n          </div>\r\n          <div class=\"summary-content\">\r\n            <span class=\"summary-value\">{{count.Pending || 0}}</span>\r\n            <span class=\"summary-label\">Pending</span>\r\n          </div>\r\n        </div>\r\n        <div class=\"insight-summary-card info-gradient\">\r\n          <div class=\"summary-icon\">\r\n            <i class=\"material-icons\">local_shipping</i>\r\n          </div>\r\n          <div class=\"summary-content\">\r\n            <span class=\"summary-value\">{{count.total_weight ? count.total_weight.toFixed(2) : '0'}}</span>\r\n            <span class=\"summary-label\">Total Tonnage</span>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <!-- Charts Row -->\r\n      <div class=\"insights-charts-row\">\r\n        <!-- Donut Chart - Order Status Distribution -->\r\n        <div class=\"insight-card\">\r\n          <div class=\"insight-card-header\">\r\n            <div class=\"header-icon primary-bg\">\r\n              <i class=\"material-icons\">pie_chart</i>\r\n            </div>\r\n            <h3>Order Status Distribution</h3>\r\n          </div>\r\n          <div class=\"insight-card-body\">\r\n            <div class=\"donut-chart-container\">\r\n              <div class=\"donut-chart-wrapper\">\r\n                <svg viewBox=\"0 0 100 100\" class=\"donut-chart\">\r\n                  <circle cx=\"50\" cy=\"50\" r=\"40\" class=\"donut-bg\"></circle>\r\n                  <circle cx=\"50\" cy=\"50\" r=\"40\" class=\"donut-segment pending-segment\"\r\n                    [style.stroke-dasharray]=\"getOrderDonutDash(count.Pending)\"\r\n                    [style.stroke-dashoffset]=\"0\" transform=\"rotate(-90 50 50)\"></circle>\r\n                  <circle cx=\"50\" cy=\"50\" r=\"40\" class=\"donut-segment approved-segment\"\r\n                    [style.stroke-dasharray]=\"getOrderDonutDash(count.Approved)\"\r\n                    [style.stroke-dashoffset]=\"getOrderDonutOffset(count.Pending)\" transform=\"rotate(-90 50 50)\"></circle>\r\n                  <circle cx=\"50\" cy=\"50\" r=\"40\" class=\"donut-segment dispatched-segment\"\r\n                    [style.stroke-dasharray]=\"getOrderDonutDash(count.despatched)\"\r\n                    [style.stroke-dashoffset]=\"getOrderDonutOffset((count.Pending || 0) + (count.Approved || 0))\" transform=\"rotate(-90 50 50)\"></circle>\r\n                  <circle cx=\"50\" cy=\"50\" r=\"40\" class=\"donut-segment reject-segment\"\r\n                    [style.stroke-dasharray]=\"getOrderDonutDash(count.Reject)\"\r\n                    [style.stroke-dashoffset]=\"getOrderDonutOffset((count.Pending || 0) + (count.Approved || 0) + (count.despatched || 0))\" transform=\"rotate(-90 50 50)\"></circle>\r\n                </svg>\r\n                <div class=\"donut-center\">\r\n                  <span class=\"donut-total\">{{getTotalOrders()}}</span>\r\n                  <span class=\"donut-label\">Total</span>\r\n                </div>\r\n              </div>\r\n              <div class=\"chart-legend\">\r\n                <div class=\"legend-item\">\r\n                  <span class=\"legend-dot pending\"></span>\r\n                  <span class=\"legend-name\">Pending</span>\r\n                  <span class=\"legend-value\">{{count.Pending || 0}}</span>\r\n                </div>\r\n                <div class=\"legend-item\">\r\n                  <span class=\"legend-dot approved\"></span>\r\n                  <span class=\"legend-name\">In Process</span>\r\n                  <span class=\"legend-value\">{{count.Approved || 0}}</span>\r\n                </div>\r\n                <div class=\"legend-item\">\r\n                  <span class=\"legend-dot dispatched\"></span>\r\n                  <span class=\"legend-name\">Dispatched</span>\r\n                  <span class=\"legend-value\">{{count.despatched || 0}}</span>\r\n                </div>\r\n                <div class=\"legend-item\">\r\n                  <span class=\"legend-dot reject\"></span>\r\n                  <span class=\"legend-name\">Rejected</span>\r\n                  <span class=\"legend-value\">{{count.Reject || 0}}</span>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <!-- Ring Charts - Hold Status -->\r\n        <div class=\"insight-card\">\r\n          <div class=\"insight-card-header\">\r\n            <div class=\"header-icon warning-bg\">\r\n              <i class=\"material-icons\">pause_circle</i>\r\n            </div>\r\n            <h3>Hold Status Breakdown</h3>\r\n          </div>\r\n          <div class=\"insight-card-body\">\r\n            <div class=\"ring-charts-grid\">\r\n              <div class=\"ring-chart-item\">\r\n                <div class=\"ring-wrapper\">\r\n                  <svg viewBox=\"0 0 36 36\" class=\"ring-chart\">\r\n                    <path class=\"ring-bg\" d=\"M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831\"/>\r\n                    <path class=\"ring-fill clubbing\" [attr.stroke-dasharray]=\"getHoldRingDash(count.hold_clubbing) + ', 100'\" d=\"M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831\"/>\r\n                  </svg>\r\n                  <span class=\"ring-value\">{{count.hold_clubbing || 0}}</span>\r\n                </div>\r\n                <span class=\"ring-label\">Clubbing</span>\r\n              </div>\r\n              <div class=\"ring-chart-item\">\r\n                <div class=\"ring-wrapper\">\r\n                  <svg viewBox=\"0 0 36 36\" class=\"ring-chart\">\r\n                    <path class=\"ring-bg\" d=\"M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831\"/>\r\n                    <path class=\"ring-fill tonnage\" [attr.stroke-dasharray]=\"getHoldRingDash(count.hold_tonnage) + ', 100'\" d=\"M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831\"/>\r\n                  </svg>\r\n                  <span class=\"ring-value\">{{count.hold_tonnage || 0}}</span>\r\n                </div>\r\n                <span class=\"ring-label\">Tonnage</span>\r\n              </div>\r\n              <div class=\"ring-chart-item\">\r\n                <div class=\"ring-wrapper\">\r\n                  <svg viewBox=\"0 0 36 36\" class=\"ring-chart\">\r\n                    <path class=\"ring-bg\" d=\"M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831\"/>\r\n                    <path class=\"ring-fill outstanding\" [attr.stroke-dasharray]=\"getHoldRingDash(count.hold_outstanding) + ', 100'\" d=\"M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831\"/>\r\n                  </svg>\r\n                  <span class=\"ring-value\">{{count.hold_outstanding || 0}}</span>\r\n                </div>\r\n                <span class=\"ring-label\">Outstanding</span>\r\n              </div>\r\n              <div class=\"ring-chart-item\">\r\n                <div class=\"ring-wrapper\">\r\n                  <svg viewBox=\"0 0 36 36\" class=\"ring-chart\">\r\n                    <path class=\"ring-bg\" d=\"M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831\"/>\r\n                    <path class=\"ring-fill customer\" [attr.stroke-dasharray]=\"getHoldRingDash(count.hold_customer) + ', 100'\" d=\"M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831\"/>\r\n                  </svg>\r\n                  <span class=\"ring-value\">{{count.hold_customer || 0}}</span>\r\n                </div>\r\n                <span class=\"ring-label\">Customer</span>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <!-- Bar Chart - Order Progress -->\r\n        <div class=\"insight-card\">\r\n          <div class=\"insight-card-header\">\r\n            <div class=\"header-icon success-bg\">\r\n              <i class=\"material-icons\">bar_chart</i>\r\n            </div>\r\n            <h3>Order Progress</h3>\r\n          </div>\r\n          <div class=\"insight-card-body\">\r\n            <div class=\"progress-bars-container\">\r\n              <div class=\"progress-bar-item\">\r\n                <div class=\"progress-info\">\r\n                  <span class=\"progress-label\">Pending</span>\r\n                  <span class=\"progress-value\">{{count.Pending || 0}}</span>\r\n                </div>\r\n                <div class=\"progress-track\">\r\n                  <div class=\"progress-fill pending\" [style.width.%]=\"getProgressPercentage(count.Pending)\"></div>\r\n                </div>\r\n              </div>\r\n              <div class=\"progress-bar-item\">\r\n                <div class=\"progress-info\">\r\n                  <span class=\"progress-label\">In Process</span>\r\n                  <span class=\"progress-value\">{{count.Approved || 0}}</span>\r\n                </div>\r\n                <div class=\"progress-track\">\r\n                  <div class=\"progress-fill approved\" [style.width.%]=\"getProgressPercentage(count.Approved)\"></div>\r\n                </div>\r\n              </div>\r\n              <div class=\"progress-bar-item\">\r\n                <div class=\"progress-info\">\r\n                  <span class=\"progress-label\">In Loading</span>\r\n                  <span class=\"progress-value\">{{count.in_loading || 0}}</span>\r\n                </div>\r\n                <div class=\"progress-track\">\r\n                  <div class=\"progress-fill loading\" [style.width.%]=\"getProgressPercentage(count.in_loading)\"></div>\r\n                </div>\r\n              </div>\r\n              <div class=\"progress-bar-item\">\r\n                <div class=\"progress-info\">\r\n                  <span class=\"progress-label\">Dispatched</span>\r\n                  <span class=\"progress-value\">{{count.despatched || 0}}</span>\r\n                </div>\r\n                <div class=\"progress-track\">\r\n                  <div class=\"progress-fill dispatched\" [style.width.%]=\"getProgressPercentage(count.despatched)\"></div>\r\n                </div>\r\n              </div>\r\n              <div class=\"progress-bar-item\">\r\n                <div class=\"progress-info\">\r\n                  <span class=\"progress-label\">Rejected</span>\r\n                  <span class=\"progress-value\">{{count.Reject || 0}}</span>\r\n                </div>\r\n                <div class=\"progress-track\">\r\n                  <div class=\"progress-fill reject\" [style.width.%]=\"getProgressPercentage(count.Reject)\"></div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </ng-container>\r\n\r\n  <div class=\"container container-scroll no-tab ol-table-card\" *ngIf=\"active_tab != 'Insights'\">\r\n    <div class=\"cs-table horizontal-scroll\">\r\n      <div class=\"sticky-head\">\r\n        <div class=\"table-head\">\r\n          <table>\r\n            <tr>\r\n              <th class=\"w50\">S NO</th>\r\n              <th class=\"w110\">Date</th>\r\n              <th class=\"w110\" *ngIf=\"active_tab == 'despatched'\">Dispatch Date</th>\r\n              <th class=\"w110\">Created By</th>\r\n              <th class=\"w80\">Order Id</th>\r\n              <th class=\"w80\">Order Type</th>\r\n              <th class=\"w100\">WareHouse</th>\r\n              <th class=\"w100\">Customer Type</th>\r\n              <th class=\"w200\">Company Details</th>\r\n              <th class=\"w150\">Converted from Digital Enquiry</th>\r\n              <th class=\"w250\">Shipping Address</th>\r\n              <th class=\"w150\">Account Code</th>\r\n              <th class=\"w80 text-center\">Total Items</th>\r\n              <th class=\"w90 text-right\">Item QTY.</th>\r\n              <th class=\"w90 text-right\" *ngIf=\"active_tab == 'partialDispatched'\">Dispatch QTY.</th>\r\n              <th class=\"w90 text-right\" *ngIf=\"active_tab == 'partialDispatched'\">Pending QTY.</th>\r\n              <th class=\"w90 text-right\">Order Weight (Ton)</th>\r\n              <th class=\"w90 text-right\">Total Amount</th>\r\n              <th class=\"w120 text-right\">Order Type</th>\r\n              <th class=\"w100 text-right\" *ngIf=\"active_tab == 'Approved'\">Points Transfered</th>\r\n              <th class=\"w200\">Remark</th>\r\n              <th class=\"w200\" *ngIf=\"active_tab == 'Reject' || active_tab == 'Hold'\">Reason</th>\r\n              <th class=\"w100\" *ngIf=\"active_tab == 'All'\">Status</th>\r\n              <th class=\"w80 text-center\" *ngIf=\"active_tab == 'Pending'\">Action</th>\r\n            </tr>\r\n          </table>\r\n        </div>\r\n\r\n        <div class=\"table-head border-top\">\r\n          <table>\r\n            <tr>\r\n              <th class=\"w50\">&nbsp;</th>\r\n              <th class=\"w110\">\r\n                <div class=\"th-search-acmt\">\r\n                  <mat-form-field class=\"example-full-width cs-input\">\r\n                    <input matInput [matDatepicker]=\"picker2\" placeholder=\"Date\" name=\"date_created\"\r\n                      [(ngModel)]=\"search_val.date_created\" (dateChange)=\"onDate($event)\" readonly>\r\n                    <mat-datepicker-toggle matSuffix [for]=\"picker2\"></mat-datepicker-toggle>\r\n                    <mat-datepicker #picker2></mat-datepicker>\r\n                  </mat-form-field>\r\n                </div>\r\n              </th>\r\n              <th class=\"w110\" *ngIf=\"active_tab == 'despatched'\">\r\n                <div class=\"th-search-acmt\">\r\n                  <mat-form-field class=\"example-full-width cs-input\">\r\n                    <input matInput [matDatepicker]=\"picker2\" placeholder=\"Date\" name=\"dispatch_date\"\r\n                      [(ngModel)]=\"search_val.dispatch_date\" (dateChange)=\"onDate1($event)\" readonly>\r\n                    <mat-datepicker-toggle matSuffix [for]=\"picker2\"></mat-datepicker-toggle>\r\n                    <mat-datepicker #picker2></mat-datepicker>\r\n                  </mat-form-field>\r\n                </div>\r\n              </th>\r\n              <th class=\"w110\">\r\n                <div class=\"th-search-acmt\">\r\n                  <mat-form-field class=\"example-full-width cs-input\">\r\n                    <input matInput placeholder=\"Search\" name=\"created_by_name\" [(ngModel)]=\"search_val.created_by_name\"\r\n                      (keyup.enter)=\"orderList('',OrderMonth,OrderYear)\">\r\n                  </mat-form-field>\r\n                </div>\r\n              </th>\r\n              <th class=\"w80\">\r\n                <div class=\"th-search-acmt\">\r\n                  <mat-form-field class=\"example-full-width cs-input\">\r\n                    <input matInput placeholder=\"Search\" name=\"order_id\" [(ngModel)]=\"search_val.order_id\"\r\n                      (keyup.enter)=\"orderList('',OrderMonth,OrderYear)\">\r\n                  </mat-form-field>\r\n                </div>\r\n              </th>\r\n               <th class=\"w80\">\r\n                <div class=\"th-search-acmt\">\r\n                 \r\n                  <mat-form-field class=\"cs-input select-input\">\r\n                    <mat-select  name=\"freshOrdType\" #freshOrdType=\"ngModel\" [(ngModel)]=\"search_val.freshOrdType\"\r\n                      (selectionChange)=\"orderList('',OrderMonth,OrderYear);\">\r\n                      <mat-option value=\"Follow Up Order\">Follow Up Order</mat-option>\r\n                      <mat-option value=\"Fresh Order\">Fresh Order</mat-option>\r\n                     \r\n                      \r\n                        \r\n                    </mat-select>\r\n                  </mat-form-field>\r\n                </div>\r\n              </th>\r\n              <th class=\"w100\"></th>\r\n              <th class=\"w100\">\r\n                <!-- <div class=\"th-search-acmt\">\r\n                  <mat-form-field class=\"example-full-width cs-input\">\r\n                    <input matInput placeholder=\"Search\" name=\"network_type\" [(ngModel)]=\"search_val.network_type\"\r\n                      (keyup.enter)=\"orderList('',OrderMonth,OrderYear)\">\r\n                  </mat-form-field>\r\n                </div> -->\r\n                <div class=\"th-search-acmt\">\r\n                  <mat-form-field class=\"cs-input select-input\">\r\n                    <mat-select  name=\"network_type\" #network_type=\"ngModel\" [(ngModel)]=\"search_val.network_type\"\r\n                      (selectionChange)=\"orderList('',OrderMonth,OrderYear);\">\r\n                      <mat-option value=\"\">All</mat-option>\r\n                      <mat-option value=\"Prospect CP\">Prospect CP</mat-option>\r\n                      <ng-container *ngFor=\"let row of serve.drArray\">\r\n                      <mat-option *ngIf=\"row.type=='1'||row.type =='7'\"\r\n                        value=\"{{row.module_name}}\">{{row.module_name}}</mat-option>\r\n                      </ng-container>\r\n                        \r\n                    </mat-select>\r\n                  </mat-form-field>\r\n                </div>\r\n              </th>\r\n              <th class=\"w200\">\r\n                <div class=\"th-search-acmt\">\r\n                  <mat-form-field class=\"example-full-width cs-input\">\r\n                    <input matInput placeholder=\"Search\" name=\"company_detail\" [(ngModel)]=\"search_val.company_detail\"\r\n                      (keyup.enter)=\"orderList('',OrderMonth,OrderYear)\">\r\n                  </mat-form-field>\r\n                </div>\r\n              </th>\r\n              <th class=\"w150\">&nbsp;</th>\r\n               <th class=\"w250\">\r\n          \r\n              </th>\r\n              <th class=\"w150\">\r\n                <div class=\"th-search-acmt\">\r\n                  <mat-form-field class=\"example-full-width cs-input\">\r\n                    <input matInput placeholder=\"Search\" name=\"account_code\" [(ngModel)]=\"search_val.dr_code\"\r\n                      (keyup.enter)=\"orderList('',OrderMonth,OrderYear)\">\r\n                  </mat-form-field>\r\n                </div>\r\n              </th>\r\n              <th class=\"w80 text-center\">&nbsp; {{totalData.total_item}}</th>\r\n              <th class=\"w90 text-right\">&nbsp; {{totalData.total_order_qty}}</th>\r\n              <th class=\"w90 text-right\" *ngIf=\"active_tab == 'partialDispatched'\">&nbsp;</th>\r\n              <th class=\"w90 text-right\" *ngIf=\"active_tab == 'partialDispatched'\">&nbsp;</th>\r\n              <th class=\"w90 text-right\">&nbsp;</th>\r\n              <th class=\"w90 text-right\">&nbsp;</th>\r\n              <th class=\"w120 text-right\">&nbsp;</th>\r\n              <th class=\"w100 text-right\" *ngIf=\"active_tab == 'Approved'\">&nbsp;</th>\r\n              <th class=\"w200\"></th>\r\n              <th class=\"w200\" *ngIf=\"active_tab == 'Reject' || active_tab == 'Hold'\">&nbsp;</th>\r\n              <th class=\"w100\" *ngIf=\"active_tab == 'All'\"></th>\r\n              <th class=\"w80\" *ngIf=\"active_tab == 'Pending'\">\r\n                <!-- <button mat-icon-button matTooltip=\"Delete\" [(ngModel)]=\"search_val.deleteAll\"\r\n                  (click)=\"delete('deleteAll')\">\r\n                  <i class=\"material-icons del\">delete</i>Delete\r\n                </button> -->\r\n              </th>\r\n            </tr>\r\n          </table>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"table-container\">\r\n        <div class=\"table-content\">\r\n          <table>\r\n            <ng-container *ngIf=\"!loader\">\r\n              <tr *ngFor=\"let row of tmp_orderlist; let i =index;\"\r\n                [ngClass]=\"{'Current': serve.currentUserID == row.id}\">\r\n                <td class=\"w50\">{{ i + 1 + sr_no }}</td>\r\n                <td class=\"w110\">{{row.date_created | date : 'dd MMM yyy ,h:mm a'}}</td>\r\n                <td class=\"w110\" *ngIf=\"active_tab == 'despatched'\">{{row.dispatch_date | date : 'dd MMM yyy'}}</td>\r\n                <td class=\"w110\">{{row.created_by_name}}</td>\r\n                <td class=\"w80\"><a class=\"link-btn\" (click)=\"serve.setData(search_val)\"\r\n                    routerLink=\"order-detail/{{row.id }}\" [queryParams]=\"{'id':row.id, 'status':active_tab}\"\r\n                    routerLinkActive=\"active\">{{row.order_no}}</a></td>\r\n                     <td class=\"w80\" ><strong> {{ row.freshOrdType ? row.freshOrdType : '---' }}</strong>\r\n                 \r\n                </td>  \r\n                    <td class=\"w100\" \r\n                    [ngStyle]=\"{ 'color': row.warehouse == 'Biometric Woods' ? 'green' : 'red' }\"><strong> {{ row.warehouse ? row.warehouse : '---' }}</strong>\r\n                 \r\n                </td>                \r\n                <td class=\"w100\">{{row.network_type ? row.network_type : '---'}}</td>\r\n                <td class=\"w200\">\r\n                  <div class=\"ol-customer-cell\" style=\"display:flex;align-items:center;gap:8px;\">\r\n                    <span class=\"ol-avatar\" style=\"flex-shrink:0;width:28px;height:28px;border-radius:50%;background:var(--primary-light);color:var(--primary-dark);font-size:var(--text-xs);font-weight:var(--font-bold);display:flex;align-items:center;justify-content:center;text-transform:uppercase;\">{{(row.company_name || '?').charAt(0)}}</span>\r\n                    <span>{{row.company_name}}</span>\r\n                  </div>\r\n                </td>\r\n                <td class=\"w150 text-center\">{{row.transfer_from_enquiry == '0' ? 'No' : 'Yes'}}</td>\r\n                <td class=\"w250\">{{row.shipping_address}}</td>\r\n                <td class=\"w150\">{{row.dr_code}}</td>\r\n                <td class=\"w80 text-center\">{{row.order_item}}</td>\r\n                <td class=\"w90 text-right\">{{row.total_order_qty}}</td>\r\n                <td class=\"w90 text-right\" *ngIf=\"active_tab == 'partialDispatched'\">{{row.dispatch_qty}}</td>\r\n                <td class=\"w90 text-right\" *ngIf=\"active_tab == 'partialDispatched'\">{{row.pending_qty}}</td>\r\n                <td class=\"w90 text-right\"><strong> {{row.weight ? (row.weight.toFixed(3)) : '0'}}</strong></td>\r\n                <td class=\"w90 text-right\"><strong>&#x20B9;  {{row.order_total ? (row.order_total.toFixed(3)) : '0'}}</strong></td>\r\n                <td class=\"w120 text-right\"><strong>{{row.order_type}}</strong></td>\r\n                <td class=\"w100 text-right\" *ngIf=\"active_tab == 'Approved'\">\r\n                  <strong class=\"green-clr\">{{row.marketing_points\r\n                    ? row.marketing_points : '0'}}</strong>\r\n                </td>\r\n                <td class=\"w200\">{{row.order_create_remark}}</td>\r\n                <td class=\"w200\" *ngIf=\"active_tab == 'Reject'|| active_tab == 'Hold' \">{{row.reason_reject}}</td>\r\n                <td class=\"w100\" *ngIf=\"active_tab == 'All'\">\r\n                  <span class=\"status-pill\" [ngClass]=\"row.order_status\">{{row.order_status=='partialDispatched'?'In Process':row.order_status}}</span>\r\n                </td>\r\n                <td class=\"w80\" *ngIf=\"active_tab == 'Pending'\">\r\n                  <div class=\"action-button text-center\" *ngIf=\"login_data.delete_secondary_orders=='1'\">\r\n                    <button mat-icon-button matTooltip=\"Delete\" (click)=\"delete('singleDelete', row.id)\">\r\n                      <i class=\"material-icons del\">delete</i>\r\n                    </button>\r\n                    <!-- <mat-checkbox color=\"accent\" [(ngModel)]=\"row.selected_order\" (change)=\"delete(row.id)\"\r\n                      [name]=\"'id'+i\" value=\"true\"></mat-checkbox> -->\r\n                  </div>\r\n                </td>\r\n              </tr>\r\n            </ng-container>\r\n            <ng-container *ngIf=\"loader\">\r\n              <tr class=\"sk-loading\" *ngFor=\"let row of [].constructor(100)\">\r\n                <td class=\"w50\">\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n                <td class=\"w110 text-center\">\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n                <td class=\"w110\">\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n                <td class=\"w80\">\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n                <td class=\"w100\">\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n                <td class=\"w200\">\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n                <td class=\"w100\">\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n                <td class=\"w80\">\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n                <td class=\"w90\">\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n                <td *ngIf=\"active_tab == 'partialDispatched'\" class=\"w90\">\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n                <td *ngIf=\"active_tab == 'partialDispatched'\" class=\"w90\">\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n                <td class=\"w90\">\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n                <td class=\"w120\">\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n                <td class=\"w100 text-right\" *ngIf=\"active_tab == 'Approved'\">\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n                <td class=\"w200\">\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n                <td *ngIf=\"active_tab == 'Reject' || active_tab == 'Hold'\" class=\"w200\">\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n                <td class=\"w100\" *ngIf=\"active_tab == 'All'\">\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n                <td class=\"w80\" *ngIf=\"active_tab == 'Pending'\">\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n              </tr>\r\n            </ng-container>\r\n          </table>\r\n        </div>\r\n      </div>\r\n      <ng-container *ngIf=\"tmp_orderlist.length == 0 && datanotfound == true\">\r\n        <app-not-result-found></app-not-result-found>\r\n      </ng-container>\r\n    </div>\r\n\r\n  </div>\r\n\r\n  <!-- Invoice Excel Download Modal -->\r\n  <div *ngIf=\"showInvoiceExcelModal\"\r\n    style=\"position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0,0,0,0.5);z-index:1050;display:flex;align-items:center;justify-content:center;\">\r\n    <div style=\"background:#fff;border-radius:8px;padding:24px;width:420px;max-width:90vw;box-shadow:0 8px 32px rgba(0,0,0,0.25);\">\r\n      <div style=\"display:flex;justify-content:space-between;align-items:center;margin-bottom:8px;\">\r\n        <h3 style=\"margin:0;font-size:17px;font-weight:600;\">Invoice Excel Download</h3>\r\n        <button mat-icon-button (click)=\"showInvoiceExcelModal = false\">\r\n          <i class=\"material-icons\">close</i>\r\n        </button>\r\n      </div>\r\n      <p style=\"color:#777;font-size:13px;margin-bottom:16px;\">Select dispatch date range to download invoice Excel</p>\r\n      <div style=\"margin-bottom:14px;\">\r\n        <label style=\"display:block;font-size:12px;color:#555;margin-bottom:4px;\">From Date (Dispatch Date)</label>\r\n        <input type=\"date\" [(ngModel)]=\"invoiceExcelFrom\" name=\"invFrom\"\r\n          style=\"width:100%;padding:8px 10px;border:1px solid #ccc;border-radius:4px;font-size:14px;box-sizing:border-box;\">\r\n      </div>\r\n      <div style=\"margin-bottom:8px;\">\r\n        <label style=\"display:block;font-size:12px;color:#555;margin-bottom:4px;\">To Date (Dispatch Date)</label>\r\n        <input type=\"date\" [(ngModel)]=\"invoiceExcelTo\" name=\"invTo\"\r\n          style=\"width:100%;padding:8px 10px;border:1px solid #ccc;border-radius:4px;font-size:14px;box-sizing:border-box;\">\r\n      </div>\r\n      <div style=\"display:flex;justify-content:flex-end;gap:8px;margin-top:16px;\">\r\n        <button mat-button (click)=\"showInvoiceExcelModal = false\" [disabled]=\"invoiceExcelLoader\">Cancel</button>\r\n        <button mat-raised-button color=\"primary\" (click)=\"downloadInvoiceExcel()\"\r\n          [disabled]=\"!invoiceExcelFrom || !invoiceExcelTo || invoiceExcelLoader\">\r\n          <i class=\"material-icons\" style=\"font-size:18px;vertical-align:middle;margin-right:4px;\">file_download</i>\r\n          {{ invoiceExcelLoader ? 'Generating...' : 'Download Excel' }}\r\n        </button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"fab-btns pulse\"\r\n    *ngIf=\"(login_data.export_primary_order=='1' || login_data.export_order=='1') || (login_data.add_order=='1' || login_data.add_primary_order=='1') \">\r\n    <button class=\"excel pulse \" mat-fab color=\"primary\" [matMenuTriggerFor]=\"menu\">\r\n      <i class=\"material-icons\">apps</i>\r\n      Action\r\n    </button>\r\n    <mat-menu #menu=\"matMenu\">\r\n      <button mat-menu-item (click)=\"lastBtnValue('excel'); exportAsXLSX(OrderMonth, OrderYear)\"\r\n        *ngIf=\"tmp_orderlist.length > 0 &&  login_data.export_primary_order=='1'\">\r\n        <mat-icon>download</mat-icon>\r\n        <span>Download in excel</span>\r\n      </button>\r\n      <button mat-menu-item (click)=\"openInvoiceExcelModal()\" *ngIf=\"login_data.export_primary_order=='1'\">\r\n        <mat-icon>file_download</mat-icon>\r\n        <span>Invoice Excel Download</span>\r\n      </button>\r\n      <!-- <button mat-menu-item routerLink=\"add-order/primary\"\r\n        *ngIf=\"login_data.add_primary_order=='1' && login_data.designation_name != 'DISPATCH PLANNING'  \">\r\n        <mat-icon>add</mat-icon>\r\n        <span>Add Order</span>\r\n      </button> -->\r\n    </mat-menu>\r\n  </div>\r\n\r\n</div>\r\n</div>"

/***/ }),

/***/ "./src/app/order/order-list/order-list.component.scss":
/*!************************************************************!*\
  !*** ./src/app/order/order-list/order-list.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  --hold: #7c5cff;\n  --hold-light: #efeaff;\n  display: block;\n  height: 100%;\n}\n\n.main-container {\n  overflow: visible;\n}\n\n.ol-page {\n  height: 100%;\n  overflow-y: auto;\n  overflow-x: hidden;\n  background: var(--surface, #f8fafc);\n}\n\n.ol-month-strip {\n  display: flex;\n  gap: 6px;\n  overflow-x: auto;\n  padding: 10px 20px 0;\n  background: var(--surface-card);\n  border-bottom: 1px solid var(--bodrColor);\n}\n\n.ol-month-btn {\n  flex-shrink: 0;\n  padding: 6px 14px;\n  border-radius: var(--radius-full);\n  font-size: var(--text-sm);\n  font-weight: var(--font-medium);\n  color: var(--text-secondary);\n  background: transparent;\n  border: 1px solid transparent;\n  cursor: pointer;\n  white-space: nowrap;\n  transition: var(--transition-fast);\n}\n\n.ol-month-btn:hover {\n  background: var(--surface-hover);\n}\n\n.ol-month-btn.active {\n  background: var(--primary-light);\n  color: var(--primary-dark);\n  border-color: var(--primary-tint);\n  font-weight: var(--font-semibold);\n}\n\n.ol-toolbar {\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 12px;\n  padding: 14px 20px;\n  background: var(--surface-card);\n  border-bottom: 1px solid var(--bodrColor);\n}\n\n.ol-title {\n  font-size: var(--text-lg);\n  font-weight: var(--font-semibold);\n  color: var(--text);\n  margin-right: auto;\n}\n\n.ol-title strong {\n  color: var(--primary-dark);\n}\n\n.ol-icon-btn {\n  width: 34px;\n  height: 34px;\n  border-radius: var(--radius-md);\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  color: var(--text-secondary);\n  cursor: pointer;\n  border: 1px solid var(--bodrColor);\n  background: var(--surface-card);\n  transition: var(--transition-fast);\n}\n\n.ol-icon-btn i.material-icons {\n  font-size: 18px;\n}\n\n.ol-icon-btn:hover:not(:disabled) {\n  border-color: var(--primary);\n  color: var(--primary);\n  background: var(--primary-light);\n}\n\n.ol-icon-btn:disabled {\n  opacity: 0.4;\n  cursor: not-allowed;\n}\n\n.ol-pagination {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: var(--text-sm);\n  color: var(--text-secondary);\n}\n\n.ol-pagination strong {\n  color: var(--text);\n  font-weight: var(--font-semibold);\n}\n\n.ol-tabs {\n  display: flex;\n  gap: 6px;\n  flex-wrap: wrap;\n  padding: 0 20px 14px;\n  background: var(--surface-card);\n}\n\n.ol-tab {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 7px 14px;\n  border-radius: var(--radius-full);\n  font-size: var(--text-sm);\n  font-weight: var(--font-medium);\n  color: var(--text-secondary);\n  background: var(--surface);\n  border: 1px solid transparent;\n  cursor: pointer;\n  transition: var(--transition-fast);\n  white-space: nowrap;\n}\n\n.ol-tab i.material-icons {\n  font-size: 16px;\n}\n\n.ol-tab:hover {\n  background: var(--surface-hover);\n}\n\n.ol-tab.active {\n  background: var(--primary);\n  color: #fff;\n  box-shadow: var(--shadow-colored);\n}\n\n.ol-tab.ol-tab-hold.active {\n  background: var(--hold);\n  box-shadow: 0 4px 14px 0 rgba(124, 92, 255, 0.35);\n}\n\n.ol-table-card {\n  height: auto !important;\n  overflow-x: auto;\n  overflow-y: visible;\n  margin: 16px 20px;\n  width: calc(100% - 40px);\n  background: var(--surface-card);\n  border: 1px solid var(--bodrColor);\n  border-radius: var(--radius-lg);\n  box-shadow: var(--shadow-sm);\n}\n\n.status-pill {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  padding: 3px 10px;\n  border-radius: var(--radius-full);\n  font-size: var(--text-xs);\n  font-weight: var(--font-semibold);\n  line-height: 1.6;\n  white-space: nowrap;\n}\n\n.status-pill::before {\n  content: \"\";\n  width: 6px;\n  height: 6px;\n  border-radius: 50%;\n  background: currentColor;\n  flex-shrink: 0;\n}\n\n.status-pill.Pending {\n  background: var(--warning-light);\n  color: var(--warning-dark);\n}\n\n.status-pill.Approved {\n  background: var(--info-light);\n  color: var(--info-dark);\n}\n\n.status-pill.Reject {\n  background: var(--danger-light);\n  color: var(--danger-dark);\n}\n\n.status-pill.despatched, .status-pill.Dispatched, .status-pill.completeDispatched {\n  background: var(--success-light);\n  color: var(--success-dark);\n}\n\n.status-pill.in_loading, .status-pill.partialDispatched, .status-pill.dispatchPlanning {\n  background: var(--info-light);\n  color: var(--info-dark);\n}\n\n.status-pill.hold_clubbing, .status-pill.hold_tonnage, .status-pill.hold_outstanding, .status-pill.hold_customer, .status-pill.Hold {\n  background: var(--hold-light);\n  color: var(--hold);\n}\n\n.ol-new-btn {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  margin-left: 12px;\n  padding: 7px 14px;\n  border-radius: 8px;\n  background: var(--primary);\n  color: var(--primary-contrast) !important;\n  font-size: var(--text-sm);\n  font-weight: 700;\n  text-decoration: none;\n  cursor: pointer;\n  white-space: nowrap;\n}\n\n.ol-new-btn i {\n  font-size: 17px;\n}\n\n.ol-new-btn:hover {\n  background: var(--primary-shade);\n}"

/***/ }),

/***/ "./src/app/order/order-list/order-list.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/order/order-list/order-list.component.ts ***!
  \**********************************************************/
/*! exports provided: OrderListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderListComponent", function() { return OrderListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _router_animation_router_animation_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../router-animation/router-animation.component */ "./src/app/router-animation/router-animation.component.ts");
/* harmony import */ var src_services_DatabaseService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/_services/DatabaseService */ "./src/_services/DatabaseService.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_dialog_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/dialog.component */ "./src/app/dialog.component.ts");
/* harmony import */ var src_app_localstorage_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/localstorage.service */ "./src/app/localstorage.service.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! moment */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng6-toastr-notifications */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/ng6-toastr-notifications/fesm5/ng6-toastr-notifications.js");
/* harmony import */ var src_app_bottom_sheet_bottom_sheet_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/bottom-sheet/bottom-sheet.component */ "./src/app/bottom-sheet/bottom-sheet.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/material/esm5/material.es5.js");












var OrderListComponent = /** @class */ (function () {
    function OrderListComponent(serve, location, navparams, route, dialog, session, toast, bottomSheet) {
        this.serve = serve;
        this.location = location;
        this.navparams = navparams;
        this.route = route;
        this.dialog = dialog;
        this.session = session;
        this.toast = toast;
        this.bottomSheet = bottomSheet;
        this.view_tab = 'all';
        this.value = {};
        this.tabStatus = 'all';
        this.fabBtnValue = 'add';
        this.active_tab = 'Insights';
        this.orderlist = [];
        this.excelLoader = false;
        this.showInvoiceExcelModal = false;
        this.invoiceExcelFrom = '';
        this.invoiceExcelTo = '';
        this.invoiceExcelLoader = false;
        this.count = {};
        this.tmp_list = [];
        this.tmp_orderlist = [];
        this.data = [];
        this.search_val = {};
        this.datanotfound = false;
        this.login_data = [];
        this.skelton = {};
        this.backButton = false;
        this.count_list = [];
        this.sr_no = 0;
        this.page_limit = 100;
        this.pagenumber = '';
        this.start = 0;
        this.totalData = {};
        this.downurl = '';
        this.calenderInfo = [];
        this.tmpsearch = {};
        this.tmpsearch1 = {};
        this.downurl = serve.downloadUrl;
        this.page_limit = serve.pageLimit;
        this.today_date = new Date();
        this.login_data = this.session.getSession();
        this.login_data = this.login_data.value.data;
        this.skelton = new Array(10);
        this.date = new Date();
        this.monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
        this.currentMonth = this.monthNames[this.date.getMonth()];
        this.currentYear = this.date.getFullYear();
        this.currentMonth_no = this.date.getMonth() + 1;
        if (this.login_data.access_level != '1') {
            this.login_dr_id = this.login_data.id;
        }
    }
    OrderListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.search_val = this.serve.getData();
        if (this.search_val.order_status) {
            this.active_tab = this.search_val.order_status;
            this.currentMonth_no = this.search_val.month;
            this.currentYear = this.search_val.year;
        }
        this.searchData = (this.navparams['params']['_value']);
        this.navparams.params.subscribe(function (params) {
            _this.type_id = params.id;
            _this.type = params.type;
            _this.orderList('', _this.currentMonth_no, _this.currentYear);
        });
    };
    OrderListComponent.prototype.onDate = function (event) {
        this.search_val.date_created = moment__WEBPACK_IMPORTED_MODULE_7__(event.value).format('YYYY-MM-DD');
        this.orderList('', this.OrderMonth, this.OrderYear);
    };
    OrderListComponent.prototype.onDate1 = function (event) {
        this.search_val.dispatch_date = moment__WEBPACK_IMPORTED_MODULE_7__(event.value).format('YYYY-MM-DD');
        this.orderList('', this.OrderMonth, this.OrderYear);
    };
    OrderListComponent.prototype.inputValue = function (value) {
        if (value > this.total_page) {
            this.start = this.total_page;
        }
        else if (value == '' || value <= 0) {
            this.start = 0;
        }
        else {
            this.start = (this.pagenumber * this.page_limit) - this.page_limit;
        }
        this.orderList('', this.currentMonth_no, this.currentYear);
    };
    OrderListComponent.prototype.pervious = function (blank, month, year) {
        this.start = this.start - this.page_limit;
        this.orderList(blank, month, year);
    };
    OrderListComponent.prototype.nextPage = function (blank, month, year) {
        this.start = this.start + this.page_limit;
        this.orderList(blank, month, year);
    };
    OrderListComponent.prototype.orderList = function (action, month, year) {
        var _this = this;
        if (action === void 0) { action = ''; }
        if (action == "refresh") {
            this.search_val = {};
            this.orderlist = [];
            this.start = 0;
        }
        if (this.pagenumber > this.total_page) {
            this.pagenumber = this.total_page;
            this.start = this.pageCount - this.page_limit;
        }
        if (this.start < 0) {
            this.start = 0;
        }
        this.OrderMonth = month;
        this.OrderYear = year;
        this.search_val.order_status = this.active_tab == 'Insights' ? 'Pending' : this.active_tab;
        this.search_val.month = this.OrderMonth;
        this.search_val.year = this.OrderYear;
        this.loader = 1;
        this.serve.post_rqst({ 'start': this.start, 'pagelimit': this.page_limit, 'search': this.search_val, 'login_user': this.login_dr_id, 'month': month, 'year': year }, "Order/primaryOrderList")
            .subscribe((function (result) {
            if (result['statusCode'] == 200) {
                _this.count = result['count'];
                _this.tmp_orderlist = result['result'];
                _this.calenderInfo = result['calenderInfo'];
                _this.totalData = result['total'];
                setTimeout(function () {
                    _this.loader = '';
                }, 700);
                _this.filter_order_data(_this.tabStatus);
                for (var index = 0; index < _this.calenderInfo.length; index++) {
                    var date = new Date();
                    date.setMonth(_this.calenderInfo[index].month - 1);
                    var MonthName = '';
                    MonthName = date.toLocaleString('en-US', { month: 'short' });
                    _this.calenderInfo[index].month_name = MonthName;
                }
                if (_this.active_tab == 'All') {
                    _this.pageCount = _this.count.all;
                    _this.total_page = Math.ceil(_this.pageCount / _this.page_limit);
                }
                else if (_this.active_tab == 'Pending') {
                    _this.pageCount = _this.count.Pending;
                    _this.total_page = Math.ceil(_this.pageCount / _this.page_limit);
                    console.log(_this.total_page, "line 179");
                }
                else if (_this.active_tab == 'Approved') {
                    _this.pageCount = _this.count.Approved;
                    _this.total_page = Math.ceil(_this.pageCount / _this.page_limit);
                    console.log(_this.total_page, "line 185");
                }
                else if (_this.active_tab == 'Reject') {
                    _this.pageCount = _this.count.Reject;
                    _this.total_page = Math.ceil(_this.pageCount / _this.page_limit);
                    console.log(_this.total_page, "line 191");
                }
                else if (_this.active_tab == 'hold_clubbing') {
                    _this.pageCount = _this.count.hold_clubbing;
                    _this.total_page = Math.ceil(_this.pageCount / _this.page_limit);
                    console.log(_this.total_page, "line 197");
                }
                else if (_this.active_tab == 'hold_tonnage') {
                    _this.pageCount = _this.count.hold_tonnage;
                    _this.total_page = Math.ceil(_this.pageCount / _this.page_limit);
                    console.log(_this.total_page, "line 203");
                }
                else if (_this.active_tab == 'hold_customer') {
                    _this.pageCount = _this.count.hold_customer;
                    _this.total_page = Math.ceil(_this.pageCount / _this.page_limit);
                    console.log(_this.total_page, "line 209");
                }
                else if (_this.active_tab == 'in_loading') {
                    _this.pageCount = _this.count.in_loading;
                    _this.total_page = Math.ceil(_this.pageCount / _this.page_limit);
                    console.log(_this.total_page, "line 215");
                }
                else if (_this.active_tab == 'despatched') {
                    _this.pageCount = _this.count.despatched;
                    _this.total_page = Math.ceil(_this.pageCount / _this.page_limit);
                    console.log(_this.total_page, "line 221");
                }
                else if (_this.active_tab == 'hold_outstanding') {
                    _this.pageCount = _this.count.hold_outstanding;
                    _this.total_page = Math.ceil(_this.pageCount / _this.page_limit);
                    console.log(_this.total_page, "line 228");
                }
                else if (_this.active_tab == 'Hold') {
                    _this.pageCount = _this.count.Hold;
                    _this.total_page = Math.ceil(_this.pageCount / _this.page_limit);
                }
                else if (_this.active_tab == 'dispatchPlanning') {
                    _this.pageCount = _this.count.dispatchPlanning;
                    _this.total_page = Math.ceil(_this.pageCount / _this.page_limit);
                }
                else if (_this.active_tab == 'partialDispatched') {
                    _this.pageCount = _this.count.partialDispatched;
                    _this.total_page = Math.ceil(_this.pageCount / _this.page_limit);
                }
                else if (_this.active_tab == 'Dispatched') {
                    _this.pageCount = _this.count.Dispatched;
                    _this.total_page = Math.ceil(_this.pageCount / _this.page_limit);
                }
                else if (_this.active_tab == 'orderPartial') {
                    _this.pageCount = _this.count.orderPartial;
                    _this.total_page = Math.ceil(_this.pageCount / _this.page_limit);
                }
                else if (_this.active_tab == 'completeDispatched') {
                    _this.pageCount = _this.count.completeDispatched;
                    _this.total_page = Math.ceil(_this.pageCount / _this.page_limit);
                }
                else {
                    _this.pageCount = _this.count.Dispact;
                    _this.total_page = Math.ceil(_this.pageCount / _this.page_limit);
                }
                if (_this.pagenumber > _this.total_page) {
                    _this.pagenumber = _this.total_page;
                    _this.start = _this.pageCount - _this.page_limit;
                }
                else {
                    _this.pagenumber = Math.ceil(_this.start / _this.page_limit) + 1;
                }
                _this.sr_no = _this.pagenumber - 1;
                _this.sr_no = _this.sr_no * _this.page_limit;
                if (_this.orderlist.length == 0) {
                    _this.datanotfound = true;
                }
                else {
                    _this.datanotfound = false;
                }
            }
            else {
                setTimeout(function () {
                    _this.loader = '';
                }, 700);
                _this.toast.errorToastr(result['statusMsg']);
            }
        }));
        this.serve.count_list();
    };
    OrderListComponent.prototype.refresh = function (blank, month, year) {
        this.search_val = {};
        this.serve.setData(this.search_val);
        this.serve.currentUserID = '';
        this.orderList(blank, month, year);
    };
    OrderListComponent.prototype.detailOrder = function (id) {
        this.serve.orderFilterPrimary = this.search_val;
        this.route.navigate(['/order-detail/' + id]);
    };
    OrderListComponent.prototype.filter_order_data = function (status) {
        this.tabStatus = status;
        this.view_tab = status;
        if (status != 'all') {
            this.orderlist = [];
            for (var i = 0; i < this.tmp_orderlist.length; i++) {
                this.tmpsearch = this.tmp_orderlist[i]['order_status'];
                if (this.tmpsearch.includes(status)) {
                    this.orderlist.push(this.tmp_orderlist[i]);
                }
            }
        }
        else if (status == 'all') {
            this.orderlist = this.tmp_orderlist;
        }
    };
    OrderListComponent.prototype.back = function () {
        this.location.back();
    };
    OrderListComponent.prototype.lastBtnValue = function (value) {
        this.fabBtnValue = value;
    };
    OrderListComponent.prototype.goTODetail = function (id, status) {
        this.route.navigate(['/order-detail/' + id], { queryParams: { id: id, status: status } });
    };
    OrderListComponent.prototype.exportAsXLSX = function (month, year) {
        var _this = this;
        this.loader = true;
        if (this.active_tab == 'dispatchPlanning') {
            this.serve.post_rqst({ 'start': this.start, 'pagelimit': this.page_limit, 'search': this.search_val, 'login_user': this.login_dr_id, 'month': month, 'year': year }, "Excel/downladOrderCsv").subscribe(function (result) {
                if (result['msg'] == true) {
                    _this.loader = false;
                    window.open(_this.downurl + result['filename']);
                    _this.orderList('', _this.OrderMonth, _this.OrderYear);
                }
                else {
                    _this.loader = false;
                }
            }, function (err) {
                _this.loader = false;
            });
        }
        else {
            this.serve.post_rqst({ 'start': this.start, 'pagelimit': this.page_limit, 'search': this.search_val, 'login_user': this.login_dr_id, 'month': month, 'year': year }, "Excel/primary_order_list")
                .subscribe(function (result) {
                if (result['msg'] == true) {
                    _this.loader = false;
                    window.open(_this.downurl + result['filename']);
                    _this.orderList('', _this.OrderMonth, _this.OrderYear);
                }
                else {
                    _this.loader = false;
                }
            }, function (err) {
                _this.loader = false;
            });
        }
    };
    OrderListComponent.prototype.openInvoiceExcelModal = function () {
        this.showInvoiceExcelModal = true;
    };
    OrderListComponent.prototype.downloadInvoiceExcel = function () {
        var _this = this;
        if (!this.invoiceExcelFrom || !this.invoiceExcelTo) {
            this.toast.errorToastr('Please select both From and To dates');
            return;
        }
        var fromDate = this.invoiceExcelFrom;
        var toDate = this.invoiceExcelTo;
        this.invoiceExcelLoader = true;
        this.serve.post_rqst({ dispatch_date_from: fromDate, dispatch_date_to: toDate }, "Excel/invoice_excel")
            .subscribe(function (result) {
            _this.invoiceExcelLoader = false;
            if (result['msg'] == true) {
                window.open(_this.downurl + result['filename']);
                _this.showInvoiceExcelModal = false;
                _this.invoiceExcelFrom = '';
                _this.invoiceExcelTo = '';
                _this.toast.successToastr('Invoice Excel downloaded successfully');
            }
            else {
                _this.toast.errorToastr(result['statusMsg'] || 'No data found for the selected date range');
            }
        }, function () {
            _this.invoiceExcelLoader = false;
            _this.toast.errorToastr('Failed to generate Invoice Excel');
        });
    };
    OrderListComponent.prototype.openBottomSheet = function () {
        var _this = this;
        this.bottomSheet.open(src_app_bottom_sheet_bottom_sheet_component__WEBPACK_IMPORTED_MODULE_10__["BottomSheetComponent"], {
            data: {
                'filterPage': 'distribution_list',
            }
        });
        this.bottomSheet._openedBottomSheetRef.afterDismissed().subscribe(function (data) {
            _this.search_val.date_from = data.date_from;
            _this.search_val.date_to = data.date_to;
            // this.search.userId = data.user_id;
            _this.orderList('', _this.currentMonth_no, _this.currentYear);
        });
    };
    OrderListComponent.prototype.sortData = function () {
        this.tmp_orderlist.reverse();
    };
    OrderListComponent.prototype.delete = function (action, id) {
        var _this = this;
        if (action === void 0) { action = ''; }
        if (action == 'deleteAll') {
        }
        this.dialog.delete("Orders ?").then(function (result) {
            if (result) {
                _this.serve.post_rqst({ "id": [id] }, "Order/deletePrimaryOrder").subscribe((function (result) {
                    if (result['statusCode'] == 200) {
                        _this.toast.successToastr(result['statusMsg']);
                        _this.orderList('', _this.currentMonth_no, _this.currentYear);
                    }
                    else {
                        _this.toast.errorToastr(result['statusMsg']);
                    }
                }));
            }
        });
    };
    // Insights Tab Helper Methods
    OrderListComponent.prototype.getTotalOrders = function () {
        if (!this.count)
            return 0;
        return (this.count.Pending || 0) +
            (this.count.Approved || 0) +
            (this.count.despatched || 0) +
            (this.count.Reject || 0) +
            (this.count.hold_clubbing || 0) +
            (this.count.hold_tonnage || 0) +
            (this.count.hold_outstanding || 0) +
            (this.count.hold_customer || 0) +
            (this.count.in_loading || 0);
    };
    OrderListComponent.prototype.getTotalHoldOrders = function () {
        if (!this.count)
            return 0;
        return (this.count.hold_clubbing || 0) +
            (this.count.hold_tonnage || 0) +
            (this.count.hold_outstanding || 0) +
            (this.count.hold_customer || 0);
    };
    OrderListComponent.prototype.getOrderDonutDash = function (value) {
        var total = this.getTotalOrders() || 1;
        var circumference = 2 * Math.PI * 40;
        var percentage = (value || 0) / total;
        var dashLength = circumference * percentage;
        return dashLength + " " + circumference;
    };
    OrderListComponent.prototype.getOrderDonutOffset = function (previousValues) {
        var total = this.getTotalOrders() || 1;
        var circumference = 2 * Math.PI * 40;
        var percentage = (previousValues || 0) / total;
        return -circumference * percentage;
    };
    OrderListComponent.prototype.getHoldRingDash = function (value) {
        var totalHold = this.getTotalHoldOrders() || 1;
        var percentage = ((value || 0) / totalHold) * 100;
        return Math.min(percentage, 100);
    };
    OrderListComponent.prototype.getProgressPercentage = function (value) {
        var total = this.getTotalOrders() || 1;
        return Math.min(((value || 0) / total) * 100, 100);
    };
    OrderListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-order-list',
            template: __webpack_require__(/*! ./order-list.component.html */ "./src/app/order/order-list/order-list.component.html"),
            animations: [Object(_router_animation_router_animation_component__WEBPACK_IMPORTED_MODULE_2__["slideToTop"])()],
            styles: [__webpack_require__(/*! ./order-list.component.scss */ "./src/app/order/order-list/order-list.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_services_DatabaseService__WEBPACK_IMPORTED_MODULE_3__["DatabaseService"],
            _angular_common__WEBPACK_IMPORTED_MODULE_8__["Location"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            src_app_dialog_component__WEBPACK_IMPORTED_MODULE_5__["DialogComponent"],
            src_app_localstorage_service__WEBPACK_IMPORTED_MODULE_6__["sessionStorage"],
            ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_9__["ToastrManager"],
            _angular_material__WEBPACK_IMPORTED_MODULE_11__["MatBottomSheet"]])
    ], OrderListComponent);
    return OrderListComponent;
}());



/***/ }),

/***/ "./src/app/order/primary-order-module/primary-order.module.ts":
/*!********************************************************************!*\
  !*** ./src/app/order/primary-order-module/primary-order.module.ts ***!
  \********************************************************************/
/*! exports provided: PrimaryOrderModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrimaryOrderModule", function() { return PrimaryOrderModule; });
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
/* harmony import */ var _order_list_order_list_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../order-list/order-list.component */ "./src/app/order/order-list/order-list.component.ts");
/* harmony import */ var _order_detail_order_detail_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../order-detail/order-detail.component */ "./src/app/order/order-detail/order-detail.component.ts");
/* harmony import */ var _add_order_add_order_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../add-order/add-order.component */ "./src/app/order/add-order/add-order.component.ts");
/* harmony import */ var src_app_distribution_add_primary_order_value_add_primary_order_value_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/app/distribution/add-primary-order-value/add-primary-order-value.component */ "./src/app/distribution/add-primary-order-value/add-primary-order-value.component.ts");
/* harmony import */ var _order_dispatch_order_dispatch_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../order-dispatch/order-dispatch.component */ "./src/app/order/order-dispatch/order-dispatch.component.ts");
/* harmony import */ var _order_edit_modal_order_edit_modal_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../order-edit-modal/order-edit-modal.component */ "./src/app/order/order-edit-modal/order-edit-modal.component.ts");
/* harmony import */ var src_app_add_item_add_item_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! src/app/add-item/add-item.component */ "./src/app/add-item/add-item.component.ts");



















// import { Crypto } from 'src/_Pipes/Crypto.pipe';
var primaryOrdersRoutes = [
    { path: "", children: [
            { path: "", component: _order_list_order_list_component__WEBPACK_IMPORTED_MODULE_12__["OrderListComponent"], canActivate: [src_app_auth_component_guard__WEBPACK_IMPORTED_MODULE_11__["AuthComponentGuard"]], data: { expectedRole: ['1', '2'] } },
            { path: "order-detail/:id", children: [
                    { path: '', component: _order_detail_order_detail_component__WEBPACK_IMPORTED_MODULE_13__["OrderDetailComponent"], canActivate: [src_app_auth_component_guard__WEBPACK_IMPORTED_MODULE_11__["AuthComponentGuard"]], data: { expectedRole: ['1', '2'] } },
                    { path: "add-item/:type/:id", component: src_app_add_item_add_item_component__WEBPACK_IMPORTED_MODULE_18__["AddItemComponent"], canActivate: [src_app_auth_component_guard__WEBPACK_IMPORTED_MODULE_11__["AuthComponentGuard"]], data: { expectedRole: ['1'] } },
                ] },
            { path: "add-order/:type", component: _add_order_add_order_component__WEBPACK_IMPORTED_MODULE_14__["AddOrderComponent"], canActivate: [src_app_auth_component_guard__WEBPACK_IMPORTED_MODULE_11__["AuthComponentGuard"]], data: { expectedRole: ['1', '2'] } },
        ] },
];
var PrimaryOrderModule = /** @class */ (function () {
    function PrimaryOrderModule() {
    }
    PrimaryOrderModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _add_order_add_order_component__WEBPACK_IMPORTED_MODULE_14__["AddOrderComponent"],
                _order_list_order_list_component__WEBPACK_IMPORTED_MODULE_12__["OrderListComponent"],
                src_app_distribution_add_primary_order_value_add_primary_order_value_component__WEBPACK_IMPORTED_MODULE_15__["AddPrimaryOrderValueComponent"],
                _order_edit_modal_order_edit_modal_component__WEBPACK_IMPORTED_MODULE_17__["OrderEditModalComponent"],
                _order_dispatch_order_dispatch_component__WEBPACK_IMPORTED_MODULE_16__["OrderDispatchComponent"],
                src_app_add_item_add_item_component__WEBPACK_IMPORTED_MODULE_18__["AddItemComponent"],
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild(primaryOrdersRoutes),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_7__["NgMultiSelectDropDownModule"],
                src_app_material__WEBPACK_IMPORTED_MODULE_10__["MaterialModule"],
                angular_ng_autocomplete__WEBPACK_IMPORTED_MODULE_6__["AutocompleteLibModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialogModule"],
                ngx_mat_select_search__WEBPACK_IMPORTED_MODULE_8__["NgxMatSelectSearchModule"],
                src_app_app_utility_module__WEBPACK_IMPORTED_MODULE_9__["AppUtilityModule"],
            ],
            entryComponents: [
                src_app_distribution_add_primary_order_value_add_primary_order_value_component__WEBPACK_IMPORTED_MODULE_15__["AddPrimaryOrderValueComponent"], _order_edit_modal_order_edit_modal_component__WEBPACK_IMPORTED_MODULE_17__["OrderEditModalComponent"], _order_dispatch_order_dispatch_component__WEBPACK_IMPORTED_MODULE_16__["OrderDispatchComponent"],
            ]
        })
    ], PrimaryOrderModule);
    return PrimaryOrderModule;
}());



/***/ })

}]);