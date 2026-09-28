(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["loyalty-report-loyalty-report-module-loyalty-report-loyalty-report-module"],{

/***/ "./src/app/loyalty-report/loyalty-report-coupon-history/loyalty-report-coupon-history.component.html":
/*!***********************************************************************************************************!*\
  !*** ./src/app/loyalty-report/loyalty-report-coupon-history/loyalty-report-coupon-history.component.html ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  loyalty-report-coupon-history works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/loyalty-report/loyalty-report-coupon-history/loyalty-report-coupon-history.component.scss":
/*!***********************************************************************************************************!*\
  !*** ./src/app/loyalty-report/loyalty-report-coupon-history/loyalty-report-coupon-history.component.scss ***!
  \***********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/loyalty-report/loyalty-report-coupon-history/loyalty-report-coupon-history.component.ts":
/*!*********************************************************************************************************!*\
  !*** ./src/app/loyalty-report/loyalty-report-coupon-history/loyalty-report-coupon-history.component.ts ***!
  \*********************************************************************************************************/
/*! exports provided: LoyaltyReportCouponHistoryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoyaltyReportCouponHistoryComponent", function() { return LoyaltyReportCouponHistoryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/core/fesm5/core.js");


var LoyaltyReportCouponHistoryComponent = /** @class */ (function () {
    function LoyaltyReportCouponHistoryComponent() {
    }
    LoyaltyReportCouponHistoryComponent.prototype.ngOnInit = function () {
    };
    LoyaltyReportCouponHistoryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-loyalty-report-coupon-history',
            template: __webpack_require__(/*! ./loyalty-report-coupon-history.component.html */ "./src/app/loyalty-report/loyalty-report-coupon-history/loyalty-report-coupon-history.component.html"),
            styles: [__webpack_require__(/*! ./loyalty-report-coupon-history.component.scss */ "./src/app/loyalty-report/loyalty-report-coupon-history/loyalty-report-coupon-history.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], LoyaltyReportCouponHistoryComponent);
    return LoyaltyReportCouponHistoryComponent;
}());



/***/ }),

/***/ "./src/app/loyalty-report/loyalty-report-dealer-detail-report/loyalty-report-dealer-detail-report.component.html":
/*!***********************************************************************************************************************!*\
  !*** ./src/app/loyalty-report/loyalty-report-dealer-detail-report/loyalty-report-dealer-detail-report.component.html ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-container\">\r\n\r\n  <div class=\"tools-container\">\r\n    <h2>DEALER DETAIL REPORT</h2>\r\n    <div class=\"left-auto df ac flex-gap-10\">\r\n\r\n      <!-- ── Dealer Searchable Dropdown ── -->\r\n      <div class=\"dealer-select-wrap\" [class.open]=\"dealerDropdownOpen\" style=\"position:relative;min-width:220px;\">\r\n        <div class=\"custom-select-trigger\" (click)=\"toggleDealerDropdown()\"\r\n          style=\"border:1px solid #ccc;border-radius:6px;padding:6px 10px;cursor:pointer;display:flex;align-items:center;justify-content:space-between;background:#fff;min-height:36px;\">\r\n          <ng-container *ngIf=\"selectedDealer; else noDealer\">\r\n            <span style=\"font-size:13px;font-weight:500;color:#333;\">\r\n              <i class=\"material-icons\" style=\"font-size:15px;vertical-align:middle;margin-right:4px;color:#1976d2;\">store</i>\r\n              {{selectedDealer.company_name}}\r\n            </span>\r\n            <i class=\"material-icons\" style=\"font-size:16px;color:#e53935;cursor:pointer;\"\r\n              (click)=\"$event.stopPropagation(); clearDealer()\">close</i>\r\n          </ng-container>\r\n          <ng-template #noDealer>\r\n            <span style=\"font-size:13px;color:#999;\">\r\n              <i class=\"material-icons\" style=\"font-size:15px;vertical-align:middle;margin-right:4px;\">store</i>\r\n              {{dealerLoader ? 'Loading...' : 'Select Dealer'}}\r\n            </span>\r\n            <i class=\"material-icons\" style=\"font-size:16px;color:#888;\">{{dealerDropdownOpen ? 'expand_less' : 'expand_more'}}</i>\r\n          </ng-template>\r\n        </div>\r\n\r\n        <div *ngIf=\"dealerDropdownOpen\"\r\n          style=\"position:absolute;top:100%;left:0;right:0;z-index:999;background:#fff;border:1px solid #ddd;border-radius:6px;box-shadow:0 4px 16px rgba(0,0,0,0.12);min-width:280px;\">\r\n          <div style=\"padding:8px;border-bottom:1px solid #eee;display:flex;align-items:center;gap:6px;\">\r\n            <i class=\"material-icons\" style=\"font-size:18px;color:#888;\">search</i>\r\n            <input type=\"text\" [(ngModel)]=\"dealerSearchText\" (input)=\"filterDealers()\"\r\n              placeholder=\"Search by name / mobile / code...\"\r\n              style=\"border:none;outline:none;width:100%;font-size:13px;\" autocomplete=\"off\">\r\n            <i class=\"material-icons\" *ngIf=\"dealerSearchText\" style=\"font-size:16px;color:#888;cursor:pointer;\"\r\n              (click)=\"dealerSearchText=''; filterDealers()\">close</i>\r\n          </div>\r\n          <div style=\"max-height:240px;overflow-y:auto;\">\r\n            <div *ngFor=\"let d of filteredDealers\" (click)=\"selectDealer(d)\"\r\n              style=\"padding:9px 12px;cursor:pointer;border-bottom:1px solid #f5f5f5;display:flex;align-items:center;gap:8px;\"\r\n              [style.background]=\"selectedDealer && selectedDealer.id == d.id ? '#e3f2fd' : '#fff'\">\r\n              <div style=\"width:30px;height:30px;border-radius:50%;background:#1976d2;color:#fff;display:flex;align-items:center;justify-content:center;font-size:13px;font-weight:600;flex-shrink:0;\">\r\n                {{(d.company_name || 'D').charAt(0).toUpperCase()}}\r\n              </div>\r\n              <div>\r\n                <div style=\"font-size:13px;font-weight:500;color:#333;\">{{d.company_name}}</div>\r\n                <div style=\"font-size:11px;color:#777;\">{{d.mobile}} &bull; {{d.dr_code}}</div>\r\n              </div>\r\n              <i class=\"material-icons\" *ngIf=\"selectedDealer && selectedDealer.id == d.id\"\r\n                style=\"margin-left:auto;font-size:16px;color:#1976d2;\">check</i>\r\n            </div>\r\n            <div *ngIf=\"filteredDealers.length === 0 && !dealerLoader\"\r\n              style=\"padding:16px;text-align:center;color:#999;font-size:13px;\">\r\n              <i class=\"material-icons\" style=\"font-size:20px;display:block;margin-bottom:4px;\">search_off</i>\r\n              No dealers found\r\n            </div>\r\n            <div *ngIf=\"dealerLoader\" style=\"padding:12px;text-align:center;color:#888;font-size:13px;\">\r\n              <i class=\"material-icons\" style=\"font-size:18px;vertical-align:middle;\">sync</i> Loading...\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <!-- ── End Dealer Dropdown ── -->\r\n\r\n      <button mat-icon-button matTooltip=\"Refresh\" (click)=\"refresh()\">\r\n        <i class=\"material-icons\">refresh</i>\r\n      </button>\r\n      <button mat-icon-button matTooltip=\"Filter by Date\" (click)=\"openBottomSheet()\">\r\n        <i class=\"material-icons\">filter_alt</i>\r\n      </button>\r\n\r\n      <div class=\"pagination\" *ngIf=\"reportList.length > 0\">\r\n        <div class=\"pagination-content\">\r\n          Pages\r\n          <span>{{pagenumber}}</span>\r\n          of\r\n          <span>{{total_page}}</span>\r\n        </div>\r\n        <div class=\"page-nav\">\r\n          <button mat-icon-button matTooltip=\"Previous\" (click)=\"pervious()\" [disabled]=\"start == 0 || total_page == 0\">\r\n            <i class=\"material-icons\">navigate_before</i>\r\n          </button>\r\n          <button mat-icon-button matTooltip=\"Next\" (click)=\"nextPage()\" [disabled]=\"pagenumber == total_page\">\r\n            <i class=\"material-icons\">navigate_next</i>\r\n          </button>\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"cs-tabs\" style=\"padding: 0 16px; margin-bottom: 8px;\">\r\n    <button class=\"cs-tab-btn\" [class.active]=\"active_tab == 'Ply Expert'\" (click)=\"setTab('Ply Expert')\">Ply Expert</button>\r\n    <button class=\"cs-tab-btn\" [class.active]=\"active_tab == 'Ambassador'\" (click)=\"setTab('Ambassador')\">Ambassador</button>\r\n  </div>\r\n\r\n  <!-- ── Summary cards ── -->\r\n  <div class=\"report-summary\" *ngIf=\"!loader && reportList.length > 0\">\r\n    <div class=\"summary-card sc-blue\">\r\n      <span class=\"sc-icon\"><i class=\"material-icons\">list_alt</i></span>\r\n      <div class=\"sc-body\">\r\n        <div class=\"sc-value\">{{pageCount || 0}}</div>\r\n        <div class=\"sc-label\">Total Records</div>\r\n      </div>\r\n    </div>\r\n    <div class=\"summary-card sc-gray\">\r\n      <span class=\"sc-icon\"><i class=\"material-icons\">description</i></span>\r\n      <div class=\"sc-body\">\r\n        <div class=\"sc-value\">{{reportList.length}}</div>\r\n        <div class=\"sc-label\">On This Page</div>\r\n      </div>\r\n    </div>\r\n    <div class=\"summary-card sc-green\">\r\n      <span class=\"sc-icon\"><i class=\"material-icons\">inventory_2</i></span>\r\n      <div class=\"sc-body\">\r\n        <div class=\"sc-value\">{{pageQty}}</div>\r\n        <div class=\"sc-label\">Total Qty <em>(this page)</em></div>\r\n      </div>\r\n    </div>\r\n    <div class=\"summary-card sc-purple\" *ngIf=\"selectedDealer\">\r\n      <span class=\"sc-icon\"><i class=\"material-icons\">store</i></span>\r\n      <div class=\"sc-body\">\r\n        <div class=\"sc-value sc-value-sm\">{{selectedDealer.company_name}}</div>\r\n        <div class=\"sc-label\">Selected Dealer</div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"container container-scroll\">\r\n    <div class=\"cs-table horizontal-scroll\">\r\n      <div class=\"sticky-head\">\r\n\r\n        <!-- Header Row 1 – Column Titles -->\r\n        <div class=\"table-head\">\r\n          <table>\r\n            <tr>\r\n              <th class=\"w50\">S.No</th>\r\n              <th class=\"w150\">Generation ID</th>\r\n              <th class=\"w130\">Entry Type</th>\r\n              <th class=\"w120\">State</th>\r\n              <th class=\"w120\">District</th>\r\n              <th class=\"w120\">City</th>\r\n              <th class=\"w130\">Mobile</th>\r\n              <th class=\"w120\">Account Code</th>\r\n              <th class=\"w130\">Influencer Type</th>\r\n              <th class=\"w180\">Influencer Name</th>\r\n              <th class=\"w130\">Influencer No</th>\r\n              <th class=\"w120\">Product Code</th>\r\n              <th class=\"w200\">Product Name</th>\r\n              <th class=\"w100\">Size</th>\r\n              <th class=\"w100\">Thickness</th>\r\n              <th class=\"w80\">Qty</th>\r\n            </tr>\r\n          </table>\r\n        </div>\r\n\r\n        <!-- Header Row 2 – Inline Search Filters -->\r\n        <div class=\"table-head bdrt\">\r\n          <table>\r\n            <tr>\r\n              <th class=\"w50\">&nbsp;</th>\r\n              <th class=\"w150\">\r\n                <div class=\"th-search-acmt\">\r\n                  <mat-form-field class=\"example-full-width cs-input select-input\">\r\n                    <input matInput placeholder=\"Search...\" type=\"text\" name=\"invoice_no\"\r\n                      [(ngModel)]=\"filter.invoice_no\" (keyup.enter)=\"getReport()\">\r\n                  </mat-form-field>\r\n                </div>\r\n              </th>\r\n              <th class=\"w130\">\r\n                <div class=\"th-search-acmt\">\r\n                  <mat-form-field class=\"cs-input select-input\">\r\n                    <mat-select name=\"entry_type\" [(ngModel)]=\"filter.entry_type\" (selectionChange)=\"getReport()\">\r\n                      <mat-option value=\"\">All</mat-option>\r\n                      <mat-option value=\"Add Inventory\">Add Inventory</mat-option>\r\n                      <mat-option value=\"Remove Inventory\">Remove Inventory</mat-option>\r\n                    </mat-select>\r\n                  </mat-form-field>\r\n                </div>\r\n              </th>\r\n              <th class=\"w120\">\r\n                <div class=\"th-search-acmt\">\r\n                  <mat-form-field class=\"example-full-width cs-input select-input\">\r\n                    <input matInput placeholder=\"Search...\" type=\"text\" name=\"state\"\r\n                      [(ngModel)]=\"filter.state\" (keyup.enter)=\"getReport()\">\r\n                  </mat-form-field>\r\n                </div>\r\n              </th>\r\n              <th class=\"w120\">\r\n                <div class=\"th-search-acmt\">\r\n                  <mat-form-field class=\"example-full-width cs-input select-input\">\r\n                    <input matInput placeholder=\"Search...\" type=\"text\" name=\"district\"\r\n                      [(ngModel)]=\"filter.district\" (keyup.enter)=\"getReport()\">\r\n                  </mat-form-field>\r\n                </div>\r\n              </th>\r\n              <th class=\"w120\">\r\n                <div class=\"th-search-acmt\">\r\n                  <mat-form-field class=\"example-full-width cs-input select-input\">\r\n                    <input matInput placeholder=\"Search...\" type=\"text\" name=\"city\"\r\n                      [(ngModel)]=\"filter.city\" (keyup.enter)=\"getReport()\">\r\n                  </mat-form-field>\r\n                </div>\r\n              </th>\r\n              <th class=\"w130\">\r\n                <div class=\"th-search-acmt\">\r\n                  <mat-form-field class=\"example-full-width cs-input select-input\">\r\n                    <input matInput placeholder=\"Search...\" type=\"text\" name=\"mobile\"\r\n                      [(ngModel)]=\"filter.mobile\" (keyup.enter)=\"getReport()\">\r\n                  </mat-form-field>\r\n                </div>\r\n              </th>\r\n              <th class=\"w120\">\r\n                <div class=\"th-search-acmt\">\r\n                  <mat-form-field class=\"example-full-width cs-input select-input\">\r\n                    <input matInput placeholder=\"Search...\" type=\"text\" name=\"account_code\"\r\n                      [(ngModel)]=\"filter.account_code\" (keyup.enter)=\"getReport()\">\r\n                  </mat-form-field>\r\n                </div>\r\n              </th>\r\n              <th class=\"w130\">&nbsp;</th>\r\n              <th class=\"w180\">\r\n                <div class=\"th-search-acmt\">\r\n                  <mat-form-field class=\"example-full-width cs-input select-input\">\r\n                    <input matInput placeholder=\"Search...\" type=\"text\" name=\"influencer_name\"\r\n                      [(ngModel)]=\"filter.influencer_name\" (keyup.enter)=\"getReport()\">\r\n                  </mat-form-field>\r\n                </div>\r\n              </th>\r\n              <th class=\"w130\">&nbsp;</th>\r\n              <th class=\"w120\">\r\n                <div class=\"th-search-acmt\">\r\n                  <mat-form-field class=\"example-full-width cs-input select-input\">\r\n                    <input matInput placeholder=\"Search...\" type=\"text\" name=\"product_code\"\r\n                      [(ngModel)]=\"filter.product_code\" (keyup.enter)=\"getReport()\">\r\n                  </mat-form-field>\r\n                </div>\r\n              </th>\r\n              <th class=\"w200\">\r\n                <div class=\"th-search-acmt\">\r\n                  <mat-form-field class=\"example-full-width cs-input select-input\">\r\n                    <input matInput placeholder=\"Search...\" type=\"text\" name=\"product_name\"\r\n                      [(ngModel)]=\"filter.product_name\" (keyup.enter)=\"getReport()\">\r\n                  </mat-form-field>\r\n                </div>\r\n              </th>\r\n              <th class=\"w100\">&nbsp;</th>\r\n              <th class=\"w100\">&nbsp;</th>\r\n              <th class=\"w80\">&nbsp;</th>\r\n            </tr>\r\n          </table>\r\n        </div>\r\n\r\n      </div>\r\n\r\n      <!-- Data Rows -->\r\n      <div class=\"table-container\">\r\n        <div class=\"table-content\">\r\n          <table>\r\n            <ng-container *ngIf=\"!loader\">\r\n              <tr *ngFor=\"let row of reportList; let i = index\">\r\n                <td class=\"w50\">{{i + 1 + sr_no}}</td>\r\n                <td class=\"w150\">{{row.generation_id || '-'}}</td>\r\n                <td class=\"w130\">\r\n                  <span *ngIf=\"row.entry_type\" class=\"pill\"\r\n                    [ngClass]=\"row.entry_type == 'Add Inventory' ? 'pill-green' : (row.entry_type == 'Remove Inventory' ? 'pill-red' : 'pill-gray')\">\r\n                    {{row.entry_type}}\r\n                  </span>\r\n                  <span *ngIf=\"!row.entry_type\">-</span>\r\n                </td>\r\n                <td class=\"w120\">{{row.state || '-'}}</td>\r\n                <td class=\"w120\">{{row.district || '-'}}</td>\r\n                <td class=\"w120\">{{row.city || '-'}}</td>\r\n                <td class=\"w130\">{{row.mobile || '-'}}</td>\r\n                <td class=\"w120\">{{row.account_code || '-'}}</td>\r\n                <td class=\"w130\">\r\n                  <span *ngIf=\"row.influencer_type\" class=\"pill pill-blue\">{{row.influencer_type}}</span>\r\n                  <span *ngIf=\"!row.influencer_type\">-</span>\r\n                </td>\r\n                <td class=\"w180\">{{row.influencer_name || '-'}}</td>\r\n                <td class=\"w130\">{{row.influencer_mobile || '-'}}</td>\r\n                <td class=\"w120\">{{row.product_code || '-'}}</td>\r\n                <td class=\"w200\">{{row.product_name || '-'}}</td>\r\n                <td class=\"w100\">{{row.size || '-'}}</td>\r\n                <td class=\"w100\">{{row.thickness || '-'}}</td>\r\n                <td class=\"w80 num\">{{row.qty || '-'}}</td>\r\n              </tr>\r\n            </ng-container>\r\n\r\n            <ng-container *ngIf=\"loader\">\r\n              <tr class=\"sk-loading\" *ngFor=\"let row of [].constructor(10);\">\r\n                <td class=\"w50\"><div>&nbsp;</div></td>\r\n                <td class=\"w150\"><div>&nbsp;</div></td>\r\n                <td class=\"w130\"><div>&nbsp;</div></td>\r\n                <td class=\"w120\"><div>&nbsp;</div></td>\r\n                <td class=\"w120\"><div>&nbsp;</div></td>\r\n                <td class=\"w120\"><div>&nbsp;</div></td>\r\n                <td class=\"w130\"><div>&nbsp;</div></td>\r\n                <td class=\"w120\"><div>&nbsp;</div></td>\r\n                <td class=\"w130\"><div>&nbsp;</div></td>\r\n                <td class=\"w180\"><div>&nbsp;</div></td>\r\n                <td class=\"w130\"><div>&nbsp;</div></td>\r\n                <td class=\"w120\"><div>&nbsp;</div></td>\r\n                <td class=\"w200\"><div>&nbsp;</div></td>\r\n                <td class=\"w100\"><div>&nbsp;</div></td>\r\n                <td class=\"w100\"><div>&nbsp;</div></td>\r\n                <td class=\"w80\"><div>&nbsp;</div></td>\r\n              </tr>\r\n            </ng-container>\r\n          </table>\r\n        </div>\r\n      </div>\r\n\r\n      <ng-container *ngIf=\"reportList.length == 0 && !loader\">\r\n        <app-not-result-found></app-not-result-found>\r\n      </ng-container>\r\n\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"fab-btns\">\r\n    <button mat-fab class=\"excel\" *ngIf=\"reportList.length > 0\"\r\n      (click)=\"lastBtnValue('excel'); downloadExcel();\" [ngClass]=\"{'pulse': fabBtnValue == 'excel'}\">\r\n      <img src=\"assets/img/excel.svg\">\r\n      Download Excel\r\n    </button>\r\n  </div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/loyalty-report/loyalty-report-dealer-detail-report/loyalty-report-dealer-detail-report.component.scss":
/*!***********************************************************************************************************************!*\
  !*** ./src/app/loyalty-report/loyalty-report-dealer-detail-report/loyalty-report-dealer-detail-report.component.scss ***!
  \***********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@charset \"UTF-8\";\n.cs-tabs {\n  display: flex;\n  gap: 16px;\n  align-items: center;\n}\n.cs-tabs .cs-tab-btn {\n  font-weight: 700;\n  font-size: 14px;\n  letter-spacing: 0.3px;\n  padding: 9px 26px;\n  border-radius: 8px;\n  border: 2px solid #c5cad3;\n  background: #fff;\n  color: #444;\n  cursor: pointer;\n  transition: all 0.15s ease-in-out;\n}\n.cs-tabs .cs-tab-btn:hover {\n  border-color: #1976d2;\n  color: #1976d2;\n}\n.cs-tabs .cs-tab-btn.active {\n  background: #1976d2;\n  border-color: #1976d2;\n  color: #fff;\n  box-shadow: 0 2px 6px rgba(25, 118, 210, 0.35);\n}\n/* ── Summary cards ── */\n.report-summary {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 12px;\n  padding: 4px 16px 12px;\n}\n.report-summary .summary-card {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  min-width: 170px;\n  padding: 12px 16px;\n  background: #fff;\n  border: 1px solid #e6e9ef;\n  border-radius: 10px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);\n  transition: box-shadow 0.15s ease, transform 0.15s ease;\n}\n.report-summary .summary-card:hover {\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.09);\n  transform: translateY(-1px);\n}\n.report-summary .summary-card .sc-icon {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 40px;\n  height: 40px;\n  border-radius: 10px;\n  flex-shrink: 0;\n}\n.report-summary .summary-card .sc-icon i {\n  font-size: 22px;\n}\n.report-summary .summary-card .sc-body {\n  min-width: 0;\n}\n.report-summary .summary-card .sc-value {\n  font-size: 22px;\n  font-weight: 700;\n  line-height: 1.1;\n  color: #222;\n}\n.report-summary .summary-card .sc-value.sc-value-sm {\n  font-size: 14px;\n  max-width: 160px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.report-summary .summary-card .sc-label {\n  font-size: 12px;\n  color: #7a828e;\n  margin-top: 2px;\n}\n.report-summary .summary-card .sc-label em {\n  font-style: normal;\n  opacity: 0.75;\n  font-size: 11px;\n}\n.report-summary .summary-card.sc-blue .sc-icon {\n  background: #e8f0fe;\n}\n.report-summary .summary-card.sc-blue .sc-icon i {\n  color: #1967d2;\n}\n.report-summary .summary-card.sc-green .sc-icon {\n  background: #e6f4ea;\n}\n.report-summary .summary-card.sc-green .sc-icon i {\n  color: #1e8e3e;\n}\n.report-summary .summary-card.sc-gray .sc-icon {\n  background: #f1f3f4;\n}\n.report-summary .summary-card.sc-gray .sc-icon i {\n  color: #5f6368;\n}\n.report-summary .summary-card.sc-purple .sc-icon {\n  background: #f3e8fd;\n}\n.report-summary .summary-card.sc-purple .sc-icon i {\n  color: #8430ce;\n}\n/* ── Table polish ── */\n.cs-table .table-content table tr {\n  transition: background 0.12s ease;\n}\n.cs-table .table-content table tr td {\n  transition: background 0.12s ease;\n}\n.cs-table .table-content table tr:nth-of-type(even) td {\n  background: #f7f9fc;\n}\n.cs-table .table-content table tr:hover td {\n  background: #eaf2fd;\n}\n.cs-table {\n  /* numeric column alignment + emphasis */\n}\n.cs-table td.num {\n  text-align: right;\n  font-weight: 600;\n  font-variant-numeric: tabular-nums;\n}\n/* ── Status pills ── */\n.pill {\n  display: inline-block;\n  padding: 2px 10px;\n  border-radius: 12px;\n  font-size: 11px;\n  font-weight: 600;\n  line-height: 18px;\n  white-space: nowrap;\n}\n.pill-green {\n  background: #e6f4ea;\n  color: #1e8e3e;\n}\n.pill-red {\n  background: #fce8e6;\n  color: #d93025;\n}\n.pill-blue {\n  background: #e8f0fe;\n  color: #1967d2;\n}\n.pill-gray {\n  background: #f1f3f4;\n  color: #5f6368;\n}"

/***/ }),

/***/ "./src/app/loyalty-report/loyalty-report-dealer-detail-report/loyalty-report-dealer-detail-report.component.ts":
/*!*********************************************************************************************************************!*\
  !*** ./src/app/loyalty-report/loyalty-report-dealer-detail-report/loyalty-report-dealer-detail-report.component.ts ***!
  \*********************************************************************************************************************/
/*! exports provided: LoyaltyReportDealerDetailReportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoyaltyReportDealerDetailReportComponent", function() { return LoyaltyReportDealerDetailReportComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng6-toastr-notifications */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/ng6-toastr-notifications/fesm5/ng6-toastr-notifications.js");
/* harmony import */ var src_app_bottom_sheet_bottom_sheet_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/bottom-sheet/bottom-sheet.component */ "./src/app/bottom-sheet/bottom-sheet.component.ts");
/* harmony import */ var src_app_localstorage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/localstorage.service */ "./src/app/localstorage.service.ts");
/* harmony import */ var src_services_DatabaseService__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/_services/DatabaseService */ "./src/_services/DatabaseService.ts");







var LoyaltyReportDealerDetailReportComponent = /** @class */ (function () {
    function LoyaltyReportDealerDetailReportComponent(bottomSheet, service, toast, session) {
        this.bottomSheet = bottomSheet;
        this.service = service;
        this.toast = toast;
        this.session = session;
        this.loader = false;
        this.reportList = [];
        this.page_limit = 50;
        this.start = 0;
        this.pagenumber = '';
        this.sr_no = 0;
        this.filter = {};
        this.active_tab = 'Ply Expert';
        this.fabBtnValue = 'add';
        // ── Dealer dropdown ──
        this.dealerList = [];
        this.filteredDealers = [];
        this.selectedDealer = null;
        this.dealerDropdownOpen = false;
        this.dealerSearchText = '';
        this.dealerLoader = false;
        var assign_login_data = this.session.getSession();
        this.logined_user_data = assign_login_data.value.data;
    }
    LoyaltyReportDealerDetailReportComponent.prototype.ngOnInit = function () {
        this.filter.warehouse_type = this.active_tab;
        this.loadDealers('');
        this.getReport();
    };
    LoyaltyReportDealerDetailReportComponent.prototype.setTab = function (tab) {
        this.active_tab = tab;
        this.filter.warehouse_type = tab;
        this.start = 0;
        this.getReport();
    };
    LoyaltyReportDealerDetailReportComponent.prototype.onDocumentClick = function (event) {
        var target = event.target;
        if (!target.closest('.dealer-select-wrap')) {
            this.dealerDropdownOpen = false;
        }
    };
    LoyaltyReportDealerDetailReportComponent.prototype.loadDealers = function (search) {
        var _this = this;
        this.dealerLoader = true;
        this.service.post_rqst({ 'search': search }, 'Influencer/get_dealer_list').subscribe(function (resp) {
            if (resp['statusCode'] == 200) {
                _this.dealerList = resp['dealer'] || [];
                _this.filteredDealers = _this.dealerList.slice();
            }
            _this.dealerLoader = false;
        }, function () { _this.dealerLoader = false; });
    };
    LoyaltyReportDealerDetailReportComponent.prototype.toggleDealerDropdown = function () {
        this.dealerDropdownOpen = !this.dealerDropdownOpen;
        if (this.dealerDropdownOpen) {
            this.dealerSearchText = '';
            this.filteredDealers = this.dealerList.slice();
        }
    };
    LoyaltyReportDealerDetailReportComponent.prototype.filterDealers = function () {
        var q = (this.dealerSearchText || '').toLowerCase().trim();
        if (!q) {
            this.filteredDealers = this.dealerList.slice();
        }
        else {
            this.filteredDealers = this.dealerList.filter(function (d) {
                return (d.company_name || '').toLowerCase().includes(q) ||
                    (d.mobile || '').toLowerCase().includes(q) ||
                    (d.dr_code || '').toLowerCase().includes(q);
            });
            if (q.length >= 2) {
                this.loadDealers(q);
            }
        }
    };
    LoyaltyReportDealerDetailReportComponent.prototype.selectDealer = function (dealer) {
        this.selectedDealer = dealer;
        this.filter.dealer_id = dealer.id;
        this.filter.dealer_name = dealer.company_name;
        this.dealerDropdownOpen = false;
        this.dealerSearchText = '';
        this.start = 0;
        this.getReport();
    };
    LoyaltyReportDealerDetailReportComponent.prototype.clearDealer = function () {
        this.selectedDealer = null;
        this.filter.dealer_id = '';
        this.filter.dealer_name = '';
        this.dealerDropdownOpen = false;
        this.dealerSearchText = '';
        this.start = 0;
        this.getReport();
    };
    LoyaltyReportDealerDetailReportComponent.prototype.refresh = function () {
        this.start = 0;
        this.filter = {};
        this.filter.warehouse_type = this.active_tab;
        this.selectedDealer = null;
        this.dealerSearchText = '';
        this.getReport();
    };
    LoyaltyReportDealerDetailReportComponent.prototype.pervious = function () {
        this.start = this.start - this.page_limit;
        this.getReport();
    };
    LoyaltyReportDealerDetailReportComponent.prototype.nextPage = function () {
        this.start = this.start + this.page_limit;
        this.getReport();
    };
    LoyaltyReportDealerDetailReportComponent.prototype.getReport = function () {
        var _this = this;
        this.loader = true;
        if (this.pagenumber > this.total_page) {
            this.pagenumber = this.total_page;
            this.start = this.pageCount - this.page_limit;
        }
        if (this.start < 0) {
            this.start = 0;
        }
        this.service.post_rqst({ 'start': this.start, 'pagelimit': this.page_limit, 'filter': this.filter }, 'LoyaltyReport/dealer_detail_report').subscribe(function (resp) {
            if (resp['statusCode'] == 200) {
                _this.reportList = resp['result'];
                _this.pageCount = resp['count'];
                if (_this.pagenumber > _this.total_page) {
                    _this.pagenumber = _this.total_page;
                    _this.start = _this.pageCount - _this.page_limit;
                }
                else {
                    _this.pagenumber = Math.ceil(_this.start / _this.page_limit) + 1;
                }
                _this.total_page = Math.ceil(_this.pageCount / _this.page_limit);
                _this.sr_no = (_this.pagenumber - 1) * _this.page_limit;
                _this.loader = false;
            }
            else {
                _this.toast.errorToastr(resp['statusMsg']);
                _this.loader = false;
            }
        }, function (err) {
            _this.loader = false;
        });
    };
    LoyaltyReportDealerDetailReportComponent.prototype.openBottomSheet = function () {
        var _this = this;
        this.bottomSheet.open(src_app_bottom_sheet_bottom_sheet_component__WEBPACK_IMPORTED_MODULE_4__["BottomSheetComponent"], {
            data: { 'filterPage': 'inventory_report' }
        });
        this.bottomSheet._openedBottomSheetRef.afterDismissed().subscribe(function (data) {
            if (data) {
                _this.filter.date_from = data.date_from;
                _this.filter.date_to = data.date_to;
                _this.getReport();
            }
        });
    };
    LoyaltyReportDealerDetailReportComponent.prototype.downloadExcel = function () {
        var _this = this;
        this.loader = true;
        this.service.post_rqst({ 'filter': this.filter }, 'LoyaltyReport/excel_dealer_detail_report').subscribe(function (result) {
            if (result['msg'] == true) {
                _this.loader = false;
                window.open(_this.service.downloadUrl + result['filename']);
                _this.getReport();
            }
            else {
                _this.loader = false;
                _this.toast.errorToastr('No records found.');
            }
        }, function (err) {
            _this.loader = false;
        });
    };
    LoyaltyReportDealerDetailReportComponent.prototype.lastBtnValue = function (value) {
        this.fabBtnValue = value;
    };
    Object.defineProperty(LoyaltyReportDealerDetailReportComponent.prototype, "pageQty", {
        // ── Summary helpers (aggregate the currently loaded page) ──
        get: function () {
            return (this.reportList || []).reduce(function (sum, r) { return sum + (Number(r.qty) || 0); }, 0);
        },
        enumerable: true,
        configurable: true
    });
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('document:click', ['$event']),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [MouseEvent]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], LoyaltyReportDealerDetailReportComponent.prototype, "onDocumentClick", null);
    LoyaltyReportDealerDetailReportComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-loyalty-report-dealer-detail-report',
            template: __webpack_require__(/*! ./loyalty-report-dealer-detail-report.component.html */ "./src/app/loyalty-report/loyalty-report-dealer-detail-report/loyalty-report-dealer-detail-report.component.html"),
            styles: [__webpack_require__(/*! ./loyalty-report-dealer-detail-report.component.scss */ "./src/app/loyalty-report/loyalty-report-dealer-detail-report/loyalty-report-dealer-detail-report.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatBottomSheet"],
            src_services_DatabaseService__WEBPACK_IMPORTED_MODULE_6__["DatabaseService"],
            ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_3__["ToastrManager"],
            src_app_localstorage_service__WEBPACK_IMPORTED_MODULE_5__["sessionStorage"]])
    ], LoyaltyReportDealerDetailReportComponent);
    return LoyaltyReportDealerDetailReportComponent;
}());



/***/ }),

/***/ "./src/app/loyalty-report/loyalty-report-dealer-inventory-ledger/loyalty-report-dealer-inventory-ledger.component.html":
/*!*****************************************************************************************************************************!*\
  !*** ./src/app/loyalty-report/loyalty-report-dealer-inventory-ledger/loyalty-report-dealer-inventory-ledger.component.html ***!
  \*****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-container\">\n\n  <div class=\"tools-container\">\n    <h2>DEALER INVENTORY LEDGER</h2>\n    <div class=\"left-auto df ac flex-gap-10\">\n\n      <!-- ── Dealer Searchable Dropdown ── -->\n      <div class=\"dealer-select-wrap\" [class.open]=\"dealerDropdownOpen\" style=\"position:relative;min-width:220px;\">\n        <div class=\"custom-select-trigger\" (click)=\"toggleDealerDropdown()\"\n          style=\"border:1px solid #ccc;border-radius:6px;padding:6px 10px;cursor:pointer;display:flex;align-items:center;justify-content:space-between;background:#fff;min-height:36px;\">\n          <ng-container *ngIf=\"selectedDealer; else noDealer\">\n            <span style=\"font-size:13px;font-weight:500;color:#333;\">\n              <i class=\"material-icons\" style=\"font-size:15px;vertical-align:middle;margin-right:4px;color:#1976d2;\">store</i>\n              {{selectedDealer.company_name}}\n            </span>\n            <i class=\"material-icons\" style=\"font-size:16px;color:#e53935;cursor:pointer;\"\n              (click)=\"$event.stopPropagation(); clearDealer()\">close</i>\n          </ng-container>\n          <ng-template #noDealer>\n            <span style=\"font-size:13px;color:#999;\">\n              <i class=\"material-icons\" style=\"font-size:15px;vertical-align:middle;margin-right:4px;\">store</i>\n              {{dealerLoader ? 'Loading...' : 'Search Dealer to begin'}}\n            </span>\n            <i class=\"material-icons\" style=\"font-size:16px;color:#888;\">{{dealerDropdownOpen ? 'expand_less' : 'expand_more'}}</i>\n          </ng-template>\n        </div>\n\n        <div *ngIf=\"dealerDropdownOpen\"\n          style=\"position:absolute;top:100%;left:0;right:0;z-index:999;background:#fff;border:1px solid #ddd;border-radius:6px;box-shadow:0 4px 16px rgba(0,0,0,0.12);min-width:280px;\">\n          <div style=\"padding:8px;border-bottom:1px solid #eee;display:flex;align-items:center;gap:6px;\">\n            <i class=\"material-icons\" style=\"font-size:18px;color:#888;\">search</i>\n            <input type=\"text\" [(ngModel)]=\"dealerSearchText\" (input)=\"filterDealers()\"\n              placeholder=\"Search by name / mobile / code...\"\n              style=\"border:none;outline:none;width:100%;font-size:13px;\" autocomplete=\"off\">\n            <i class=\"material-icons\" *ngIf=\"dealerSearchText\" style=\"font-size:16px;color:#888;cursor:pointer;\"\n              (click)=\"dealerSearchText=''; filterDealers()\">close</i>\n          </div>\n          <div style=\"max-height:240px;overflow-y:auto;\">\n            <div *ngFor=\"let d of filteredDealers\" (click)=\"selectDealer(d)\"\n              style=\"padding:9px 12px;cursor:pointer;border-bottom:1px solid #f5f5f5;display:flex;align-items:center;gap:8px;\"\n              [style.background]=\"selectedDealer && selectedDealer.id == d.id ? '#e3f2fd' : '#fff'\">\n              <div style=\"width:30px;height:30px;border-radius:50%;background:#1976d2;color:#fff;display:flex;align-items:center;justify-content:center;font-size:13px;font-weight:600;flex-shrink:0;\">\n                {{(d.company_name || 'D').charAt(0).toUpperCase()}}\n              </div>\n              <div>\n                <div style=\"font-size:13px;font-weight:500;color:#333;\">{{d.company_name}}</div>\n                <div style=\"font-size:11px;color:#777;\">{{d.mobile}} &bull; {{d.dr_code}}</div>\n              </div>\n              <i class=\"material-icons\" *ngIf=\"selectedDealer && selectedDealer.id == d.id\"\n                style=\"margin-left:auto;font-size:16px;color:#1976d2;\">check</i>\n            </div>\n            <div *ngIf=\"filteredDealers.length === 0 && !dealerLoader\"\n              style=\"padding:16px;text-align:center;color:#999;font-size:13px;\">\n              <i class=\"material-icons\" style=\"font-size:20px;display:block;margin-bottom:4px;\">search_off</i>\n              No dealers found\n            </div>\n            <div *ngIf=\"dealerLoader\" style=\"padding:12px;text-align:center;color:#888;font-size:13px;\">\n              <i class=\"material-icons\" style=\"font-size:18px;vertical-align:middle;\">sync</i> Loading...\n            </div>\n          </div>\n        </div>\n      </div>\n      <!-- ── End Dealer Dropdown ── -->\n\n      <button mat-icon-button matTooltip=\"Refresh\" (click)=\"refresh()\" *ngIf=\"selectedDealer\">\n        <i class=\"material-icons\">refresh</i>\n      </button>\n\n    </div>\n  </div>\n\n  <!-- ── No dealer selected yet ── -->\n  <ng-container *ngIf=\"!selectedDealer\">\n    <div class=\"empty-state\">\n      <i class=\"material-icons\">store</i>\n      <div>Search and select a dealer above to view their inventory ledger.</div>\n    </div>\n  </ng-container>\n\n  <ng-container *ngIf=\"selectedDealer\">\n\n    <div class=\"cs-tabs\" style=\"padding: 0 16px; margin-bottom: 8px;\">\n      <button class=\"cs-tab-btn\" [class.active]=\"active_tab == 'Ply Expert'\" (click)=\"setTab('Ply Expert')\">Ply Expert</button>\n      <button class=\"cs-tab-btn\" [class.active]=\"active_tab == 'Ambassador'\" (click)=\"setTab('Ambassador')\">Ambassador</button>\n      <button class=\"cs-tab-btn\" [class.active]=\"active_tab == 'Fabricator'\" (click)=\"setTab('Fabricator')\">Fabricator</button>\n    </div>\n\n    <!-- ── Screen 2: product card grid for the active influencer type ── -->\n    <div class=\"product-grid\" *ngIf=\"!loader\">\n      <div class=\"product-card\" *ngFor=\"let p of productList\" (click)=\"openLedger(p)\">\n        <div class=\"pc-name\">{{p.product_name || '-'}}</div>\n        <div class=\"pc-meta\">\n          <span *ngIf=\"p.brand\">{{p.brand}}</span>\n          <span *ngIf=\"p.thickness\"> &bull; {{p.thickness}}</span>\n          <span *ngIf=\"p.size\"> &bull; {{p.size}}</span>\n        </div>\n        <div class=\"pc-balance\">\n          <span class=\"pc-balance-value\">{{p[qtyFieldForTab()] || 0}}</span>\n          <span class=\"pc-balance-label\">Current Balance</span>\n        </div>\n        <div class=\"pc-cta\">View Ledger <i class=\"material-icons\">chevron_right</i></div>\n      </div>\n\n      <ng-container *ngIf=\"productList.length == 0\">\n        <app-not-result-found></app-not-result-found>\n      </ng-container>\n    </div>\n\n    <div class=\"product-grid\" *ngIf=\"loader\">\n      <div class=\"product-card sk-loading\" *ngFor=\"let p of [].constructor(8);\">\n        <div>&nbsp;</div>\n      </div>\n    </div>\n\n  </ng-container>\n\n  <!-- ── Screen 3: product ledger drawer ── -->\n  <div class=\"ledger-backdrop\" *ngIf=\"ledgerOpen\" (click)=\"closeLedger()\"></div>\n  <div class=\"ledger-drawer\" [class.open]=\"ledgerOpen\" *ngIf=\"selectedProduct\">\n    <div class=\"ld-head\">\n      <div>\n        <div class=\"ld-title\">{{selectedProduct.product_name}}</div>\n        <div class=\"ld-sub\">\n          {{selectedDealer.company_name}} &bull; {{active_tab}}\n          <span *ngIf=\"addedOnDate\"> &bull; Added on {{addedOnDate | date:'dd-MMM-yyyy, h:mm a'}}</span>\n        </div>\n      </div>\n      <button mat-icon-button (click)=\"closeLedger()\"><i class=\"material-icons\">close</i></button>\n    </div>\n\n    <div class=\"cs-tabs ld-tabs\">\n      <button class=\"cs-tab-btn sm\" [class.active]=\"drawerTab == 'Ledger'\" (click)=\"setDrawerTab('Ledger')\">Ledger</button>\n      <button class=\"cs-tab-btn sm\" [class.active]=\"drawerTab == 'Purchases'\" (click)=\"setDrawerTab('Purchases')\">Purchase Requests</button>\n    </div>\n\n    <!-- Ledger tab: dynamic running-balance table -->\n    <div class=\"ld-body\" *ngIf=\"drawerTab == 'Ledger'\">\n      <table class=\"ledger-table\" *ngIf=\"!ledgerLoader\">\n        <thead>\n          <tr>\n            <th>Date</th>\n            <th>Particulars</th>\n            <th>Reference</th>\n            <th>Debit</th>\n            <th>Credit</th>\n            <th>Balance</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr *ngFor=\"let row of ledgerList; let i = index\" [class.first-row]=\"i == 0\">\n            <td>{{row.dateTime | date:'dd-MMM-yyyy, h:mm a'}}</td>\n            <td>\n              {{i == 0 ? 'Stock Added (First Entry)' : (row.remark || '-')}}\n              <div class=\"ld-by\" *ngIf=\"row.changesBy\">by {{row.changesBy}}</div>\n            </td>\n            <td class=\"ld-ref\">\n              <ng-container *ngIf=\"row.credit\">\n                <span *ngIf=\"row.document_no\">Doc No: {{row.document_no}}</span>\n                <span *ngIf=\"!row.document_no\">-</span>\n              </ng-container>\n              <ng-container *ngIf=\"row.debit\">\n                <span *ngIf=\"row.purchase_pur_id\">\n                  Purchase ID: {{row.purchase_pur_id}}\n                  <span *ngIf=\"row.purchase_invoice_no\"> ({{row.purchase_invoice_no}})</span>\n                </span>\n                <span *ngIf=\"!row.purchase_pur_id\">-</span>\n              </ng-container>\n            </td>\n            <td class=\"num\" [class.credit-txt]=\"row.debit\">{{row.debit || '-'}}</td>\n            <td class=\"num\" [class.debit-txt]=\"row.credit\">{{row.credit || '-'}}</td>\n            <td class=\"num balance-txt\">{{row.balance}}</td>\n          </tr>\n        </tbody>\n      </table>\n\n      <div class=\"ld-loading\" *ngIf=\"ledgerLoader\">\n        <i class=\"material-icons spin\">sync</i> Loading ledger...\n      </div>\n\n      <ng-container *ngIf=\"!ledgerLoader && ledgerList.length == 0\">\n        <app-not-result-found></app-not-result-found>\n      </ng-container>\n    </div>\n\n    <!-- Purchase Requests tab: raw purchase entries behind this product/type -->\n    <div class=\"ld-body\" *ngIf=\"drawerTab == 'Purchases'\">\n      <div class=\"ld-loading\" *ngIf=\"purchaseLoader\">\n        <i class=\"material-icons spin\">sync</i> Loading purchase requests...\n      </div>\n\n      <div class=\"purchase-card\" *ngFor=\"let pr of purchaseList\">\n        <div class=\"pc-row\">\n          <span class=\"pc-label\">Influencer</span>\n          <span>{{pr.name || '-'}} ({{pr.mobile || '-'}})</span>\n        </div>\n        <div class=\"pc-row\">\n          <span class=\"pc-label\">Company</span>\n          <span>{{pr.company_name || '-'}}</span>\n        </div>\n        <div class=\"pc-row\">\n          <span class=\"pc-label\">Status</span>\n          <span class=\"pill\" [ngClass]=\"pr.status == 'Validated' ? 'pill-green' : 'pill-blue'\">{{pr.status}}</span>\n        </div>\n        <div class=\"pc-row\">\n          <span class=\"pc-label\">Items</span>\n          <span>{{pr.total_items || (pr.total_details ? pr.total_details.length : 0)}}</span>\n        </div>\n        <div class=\"pc-row\">\n          <span class=\"pc-label\">Created By</span>\n          <span>{{pr.created_by || '-'}}</span>\n        </div>\n      </div>\n\n      <ng-container *ngIf=\"!purchaseLoader && purchaseList.length == 0\">\n        <app-not-result-found></app-not-result-found>\n      </ng-container>\n    </div>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/loyalty-report/loyalty-report-dealer-inventory-ledger/loyalty-report-dealer-inventory-ledger.component.scss":
/*!*****************************************************************************************************************************!*\
  !*** ./src/app/loyalty-report/loyalty-report-dealer-inventory-ledger/loyalty-report-dealer-inventory-ledger.component.scss ***!
  \*****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@charset \"UTF-8\";\n.cs-tabs {\n  display: flex;\n  gap: 16px;\n  align-items: center;\n}\n.cs-tabs .cs-tab-btn {\n  font-weight: 700;\n  font-size: 14px;\n  letter-spacing: 0.3px;\n  padding: 9px 26px;\n  border-radius: 8px;\n  border: 2px solid #c5cad3;\n  background: #fff;\n  color: #444;\n  cursor: pointer;\n  transition: all 0.15s ease-in-out;\n}\n.cs-tabs .cs-tab-btn:hover {\n  border-color: #1976d2;\n  color: #1976d2;\n}\n.cs-tabs .cs-tab-btn.active {\n  background: #1976d2;\n  border-color: #1976d2;\n  color: #fff;\n  box-shadow: 0 2px 6px rgba(25, 118, 210, 0.35);\n}\n.cs-tabs .cs-tab-btn.sm {\n  padding: 6px 16px;\n  font-size: 12px;\n}\n/* ── Empty state (no dealer picked yet) ── */\n.empty-state {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 8px;\n  padding: 80px 16px;\n  color: #8a8f98;\n}\n.empty-state i {\n  font-size: 40px;\n  opacity: 0.5;\n}\n/* ── Product card grid (Screen 2) ── */\n.product-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));\n  gap: 14px;\n  padding: 8px 16px 24px;\n}\n.product-grid .product-card {\n  background: #fff;\n  border: 1px solid #e6e9ef;\n  border-radius: 10px;\n  padding: 14px 16px;\n  cursor: pointer;\n  transition: box-shadow 0.15s ease, transform 0.15s ease, border-color 0.15s ease;\n}\n.product-grid .product-card:hover {\n  box-shadow: 0 4px 14px rgba(0, 0, 0, 0.1);\n  transform: translateY(-2px);\n  border-color: #1976d2;\n}\n.product-grid .product-card.sk-loading {\n  height: 118px;\n  background: #f1f3f4;\n  animation: pulse-bg 1.2s ease-in-out infinite;\n  cursor: default;\n}\n.product-grid .product-card .pc-name {\n  font-size: 14px;\n  font-weight: 700;\n  color: #222;\n  margin-bottom: 2px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.product-grid .product-card .pc-meta {\n  font-size: 11px;\n  color: #7a828e;\n  margin-bottom: 10px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.product-grid .product-card .pc-balance {\n  display: flex;\n  align-items: baseline;\n  gap: 6px;\n  margin-bottom: 8px;\n}\n.product-grid .product-card .pc-balance .pc-balance-value {\n  font-size: 22px;\n  font-weight: 700;\n  color: #1967d2;\n}\n.product-grid .product-card .pc-balance .pc-balance-label {\n  font-size: 11px;\n  color: #7a828e;\n}\n.product-grid .product-card .pc-cta {\n  display: flex;\n  align-items: center;\n  font-size: 12px;\n  font-weight: 600;\n  color: #1976d2;\n}\n.product-grid .product-card .pc-cta i {\n  font-size: 16px;\n}\n@keyframes pulse-bg {\n  0%, 100% {\n    opacity: 1;\n  }\n  50% {\n    opacity: 0.6;\n  }\n}\n/* ── Ledger drawer (Screen 3) ── */\n.ledger-backdrop {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.35);\n  z-index: 1000;\n}\n.ledger-drawer {\n  position: fixed;\n  top: 0;\n  right: -520px;\n  width: 520px;\n  max-width: 92vw;\n  height: 100vh;\n  background: #fff;\n  box-shadow: -4px 0 20px rgba(0, 0, 0, 0.15);\n  z-index: 1001;\n  display: flex;\n  flex-direction: column;\n  transition: right 0.22s ease;\n}\n.ledger-drawer.open {\n  right: 0;\n}\n.ledger-drawer .ld-head {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  padding: 16px 16px 8px;\n  border-bottom: 1px solid #eee;\n}\n.ledger-drawer .ld-head .ld-title {\n  font-size: 16px;\n  font-weight: 700;\n  color: #222;\n}\n.ledger-drawer .ld-head .ld-sub {\n  font-size: 12px;\n  color: #7a828e;\n  margin-top: 2px;\n}\n.ledger-drawer .ld-tabs {\n  padding: 10px 16px;\n  gap: 10px;\n  border-bottom: 1px solid #eee;\n}\n.ledger-drawer .ld-body {\n  flex: 1;\n  overflow-y: auto;\n  padding: 12px 16px 24px;\n}\n.ledger-drawer .ld-loading {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  color: #7a828e;\n  font-size: 13px;\n  padding: 24px 0;\n}\n.ledger-drawer .ld-loading .spin {\n  animation: spin 1s linear infinite;\n}\n@keyframes spin {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n.ledger-table {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 12.5px;\n}\n.ledger-table th {\n  text-align: left;\n  padding: 8px 6px;\n  background: #f7f9fc;\n  color: #5f6368;\n  font-weight: 600;\n  border-bottom: 1px solid #e6e9ef;\n  position: sticky;\n  top: 0;\n}\n.ledger-table td {\n  padding: 8px 6px;\n  border-bottom: 1px solid #f1f3f4;\n  vertical-align: top;\n}\n.ledger-table tr.first-row td {\n  background: #e8f0fe;\n  font-weight: 600;\n}\n.ledger-table td.num {\n  text-align: right;\n  font-variant-numeric: tabular-nums;\n}\n.ledger-table .credit-txt {\n  color: #1e8e3e;\n  font-weight: 600;\n}\n.ledger-table .debit-txt {\n  color: #d93025;\n  font-weight: 600;\n}\n.ledger-table .balance-txt {\n  font-weight: 700;\n  color: #1967d2;\n}\n.ledger-table .ld-by {\n  font-size: 10.5px;\n  color: #9aa0a6;\n  margin-top: 1px;\n}\n.ledger-table .ld-ref {\n  font-size: 11.5px;\n  color: #5f6368;\n  white-space: nowrap;\n}\n/* ── Purchase requests tab ── */\n.purchase-card {\n  border: 1px solid #e6e9ef;\n  border-radius: 8px;\n  padding: 10px 12px;\n  margin-bottom: 10px;\n}\n.purchase-card .pc-row {\n  display: flex;\n  justify-content: space-between;\n  font-size: 12.5px;\n  padding: 3px 0;\n}\n.purchase-card .pc-row .pc-label {\n  color: #7a828e;\n}\n/* ── Status pills (reused) ── */\n.pill {\n  display: inline-block;\n  padding: 2px 10px;\n  border-radius: 12px;\n  font-size: 11px;\n  font-weight: 600;\n  line-height: 18px;\n  white-space: nowrap;\n}\n.pill-green {\n  background: #e6f4ea;\n  color: #1e8e3e;\n}\n.pill-red {\n  background: #fce8e6;\n  color: #d93025;\n}\n.pill-blue {\n  background: #e8f0fe;\n  color: #1967d2;\n}\n.pill-gray {\n  background: #f1f3f4;\n  color: #5f6368;\n}"

/***/ }),

/***/ "./src/app/loyalty-report/loyalty-report-dealer-inventory-ledger/loyalty-report-dealer-inventory-ledger.component.ts":
/*!***************************************************************************************************************************!*\
  !*** ./src/app/loyalty-report/loyalty-report-dealer-inventory-ledger/loyalty-report-dealer-inventory-ledger.component.ts ***!
  \***************************************************************************************************************************/
/*! exports provided: LoyaltyReportDealerInventoryLedgerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoyaltyReportDealerInventoryLedgerComponent", function() { return LoyaltyReportDealerInventoryLedgerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng6-toastr-notifications */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/ng6-toastr-notifications/fesm5/ng6-toastr-notifications.js");
/* harmony import */ var src_app_localstorage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/localstorage.service */ "./src/app/localstorage.service.ts");
/* harmony import */ var src_services_DatabaseService__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/_services/DatabaseService */ "./src/_services/DatabaseService.ts");





var LoyaltyReportDealerInventoryLedgerComponent = /** @class */ (function () {
    function LoyaltyReportDealerInventoryLedgerComponent(service, toast, session) {
        this.service = service;
        this.toast = toast;
        this.session = session;
        this.loader = false;
        this.productList = [];
        this.filter = {};
        this.active_tab = 'Ply Expert';
        // ── Dealer dropdown ──
        this.dealerList = [];
        this.filteredDealers = [];
        this.selectedDealer = null;
        this.dealerDropdownOpen = false;
        this.dealerSearchText = '';
        this.dealerLoader = false;
        // ── Ledger drawer ──
        this.ledgerOpen = false;
        this.ledgerLoader = false;
        this.selectedProduct = null;
        this.ledgerList = [];
        this.addedOnDate = null;
        this.drawerTab = 'Ledger'; // 'Ledger' | 'Purchases'
        // ── Purchase requests (inside drawer) ──
        this.purchaseLoader = false;
        this.purchaseList = [];
        var assign_login_data = this.session.getSession();
        this.logined_user_data = assign_login_data.value.data;
    }
    LoyaltyReportDealerInventoryLedgerComponent.prototype.ngOnInit = function () {
        this.filter.warehouse_type = this.active_tab;
        this.loadDealers('');
    };
    LoyaltyReportDealerInventoryLedgerComponent.prototype.setTab = function (tab) {
        this.active_tab = tab;
        this.filter.warehouse_type = tab;
        if (this.selectedDealer) {
            this.getProductList();
        }
    };
    LoyaltyReportDealerInventoryLedgerComponent.prototype.qtyFieldForTab = function () {
        if (this.active_tab == 'Ambassador') {
            return 'quantity_ambassador';
        }
        if (this.active_tab == 'Fabricator') {
            return 'quantity_fabricator';
        }
        return 'quantity_ply_expert';
    };
    // ── Close dealer dropdown on outside click ──
    LoyaltyReportDealerInventoryLedgerComponent.prototype.onDocumentClick = function (event) {
        var target = event.target;
        if (!target.closest('.dealer-select-wrap')) {
            this.dealerDropdownOpen = false;
        }
    };
    // ── Dealer dropdown methods ──
    LoyaltyReportDealerInventoryLedgerComponent.prototype.loadDealers = function (search) {
        var _this = this;
        this.dealerLoader = true;
        this.service.post_rqst({ 'search': search }, 'Influencer/get_dealer_list').subscribe(function (resp) {
            if (resp['statusCode'] == 200) {
                _this.dealerList = resp['dealer'] || [];
                _this.filteredDealers = _this.dealerList.slice();
            }
            _this.dealerLoader = false;
        }, function () { _this.dealerLoader = false; });
    };
    LoyaltyReportDealerInventoryLedgerComponent.prototype.toggleDealerDropdown = function () {
        this.dealerDropdownOpen = !this.dealerDropdownOpen;
        if (this.dealerDropdownOpen) {
            this.dealerSearchText = '';
            this.filteredDealers = this.dealerList.slice();
        }
    };
    LoyaltyReportDealerInventoryLedgerComponent.prototype.filterDealers = function () {
        var q = (this.dealerSearchText || '').toLowerCase().trim();
        if (!q) {
            this.filteredDealers = this.dealerList.slice();
        }
        else {
            this.filteredDealers = this.dealerList.filter(function (d) {
                return (d.company_name || '').toLowerCase().includes(q) ||
                    (d.mobile || '').toLowerCase().includes(q) ||
                    (d.dr_code || '').toLowerCase().includes(q);
            });
            if (q.length >= 2) {
                this.loadDealers(q);
            }
        }
    };
    LoyaltyReportDealerInventoryLedgerComponent.prototype.selectDealer = function (dealer) {
        this.selectedDealer = dealer;
        this.filter.dealer_id = dealer.id;
        this.dealerDropdownOpen = false;
        this.dealerSearchText = '';
        this.getProductList();
    };
    LoyaltyReportDealerInventoryLedgerComponent.prototype.clearDealer = function () {
        this.selectedDealer = null;
        this.filter.dealer_id = '';
        this.dealerDropdownOpen = false;
        this.dealerSearchText = '';
        this.productList = [];
    };
    LoyaltyReportDealerInventoryLedgerComponent.prototype.refresh = function () {
        if (this.selectedDealer) {
            this.getProductList();
        }
    };
    // ── Screen 2: products for the selected dealer, scoped to active influencer-type tab ──
    LoyaltyReportDealerInventoryLedgerComponent.prototype.getProductList = function () {
        var _this = this;
        if (!this.selectedDealer) {
            return;
        }
        this.loader = true;
        this.service.post_rqst({ 'start': 0, 'limit': 200, 'filter': this.filter }, 'Influencer/get_inventory_list_dealer_wise').subscribe(function (resp) {
            _this.loader = false;
            if (resp['statusCode'] == 200) {
                _this.productList = resp['inventory_list'] || [];
            }
            else {
                _this.productList = [];
            }
        }, function () { _this.loader = false; });
    };
    // ── Screen 3: dynamic ledger for one product, under the active influencer-type tab ──
    LoyaltyReportDealerInventoryLedgerComponent.prototype.openLedger = function (product) {
        this.selectedProduct = product;
        this.ledgerOpen = true;
        this.drawerTab = 'Ledger';
        this.getLedger();
    };
    LoyaltyReportDealerInventoryLedgerComponent.prototype.closeLedger = function () {
        this.ledgerOpen = false;
        this.selectedProduct = null;
        this.ledgerList = [];
        this.purchaseList = [];
        this.addedOnDate = null;
    };
    LoyaltyReportDealerInventoryLedgerComponent.prototype.setDrawerTab = function (tab) {
        this.drawerTab = tab;
        if (tab == 'Purchases' && this.purchaseList.length == 0) {
            this.getPurchaseRequests();
        }
    };
    LoyaltyReportDealerInventoryLedgerComponent.prototype.getLedger = function () {
        var _this = this;
        if (!this.selectedProduct) {
            return;
        }
        this.ledgerLoader = true;
        this.service.post_rqst({
            'start': 0,
            'pagelimit': 500,
            'dealer_id': this.selectedDealer.id,
            'product_id': this.selectedProduct.product_id,
            'filter': { 'warehouse_type': [this.active_tab] }
        }, 'LoyaltyReport/get_inventory_ledger_dealer_wise').subscribe(function (resp) {
            _this.ledgerLoader = false;
            if (resp['statusCode'] == 200) {
                // Dedicated endpoint already returns oldest → newest, so the running
                // balance and the first "added" entry read top-to-bottom as-is.
                _this.ledgerList = resp['ledgerLogs'] || [];
                _this.addedOnDate = resp['first_added_date'] || null;
            }
            else {
                _this.ledgerList = [];
                _this.addedOnDate = null;
            }
        }, function () { _this.ledgerLoader = false; });
    };
    // ── Raw purchase requests behind this product/tab (secondary drawer tab) ──
    LoyaltyReportDealerInventoryLedgerComponent.prototype.getPurchaseRequests = function () {
        var _this = this;
        if (!this.selectedProduct) {
            return;
        }
        this.purchaseLoader = true;
        this.service.post_rqst({
            'start': 0,
            'pagelimit': 100,
            'dealer_id': this.selectedDealer.id,
            'product_id': this.selectedProduct.product_id,
            'filter': { 'inventory_type': 'Purchase', 'warehouse_type': [this.active_tab] }
        }, 'Influencer/inventory_transaction_dealer_wise').subscribe(function (resp) {
            _this.purchaseLoader = false;
            if (resp['statusCode'] == 200) {
                _this.purchaseList = resp['purchase_detail'] || [];
            }
            else {
                _this.purchaseList = [];
            }
        }, function () { _this.purchaseLoader = false; });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('document:click', ['$event']),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [MouseEvent]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], LoyaltyReportDealerInventoryLedgerComponent.prototype, "onDocumentClick", null);
    LoyaltyReportDealerInventoryLedgerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-loyalty-report-dealer-inventory-ledger',
            template: __webpack_require__(/*! ./loyalty-report-dealer-inventory-ledger.component.html */ "./src/app/loyalty-report/loyalty-report-dealer-inventory-ledger/loyalty-report-dealer-inventory-ledger.component.html"),
            styles: [__webpack_require__(/*! ./loyalty-report-dealer-inventory-ledger.component.scss */ "./src/app/loyalty-report/loyalty-report-dealer-inventory-ledger/loyalty-report-dealer-inventory-ledger.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_services_DatabaseService__WEBPACK_IMPORTED_MODULE_4__["DatabaseService"],
            ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_2__["ToastrManager"],
            src_app_localstorage_service__WEBPACK_IMPORTED_MODULE_3__["sessionStorage"]])
    ], LoyaltyReportDealerInventoryLedgerComponent);
    return LoyaltyReportDealerInventoryLedgerComponent;
}());



/***/ }),

/***/ "./src/app/loyalty-report/loyalty-report-dr-redemption-decline-modal/loyalty-report-dr-redemption-decline-modal.component.html":
/*!*************************************************************************************************************************************!*\
  !*** ./src/app/loyalty-report/loyalty-report-dr-redemption-decline-modal/loyalty-report-dr-redemption-decline-modal.component.html ***!
  \*************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"decline-modal\">\r\n\r\n  <!-- Header -->\r\n  <div mat-dialog-title class=\"modal-header\">\r\n    <div class=\"modal-header-left\">\r\n      <div class=\"dr-avatar\">{{(data.user_name || 'D').charAt(0).toUpperCase()}}</div>\r\n      <div class=\"dr-info\">\r\n        <h2 class=\"dr-name\">{{data.user_name | titlecase}}</h2>\r\n        <span class=\"dr-mobile\"><i class=\"material-icons\">phone</i> {{data.mobile}}</span>\r\n      </div>\r\n    </div>\r\n    <div class=\"modal-header-right\">\r\n      <div class=\"overall-badge\" [ngClass]=\"data.overall_decline_pct > 0 ? 'badge-red' : data.overall_decline_pct < 0 ? 'badge-green' : 'badge-grey'\">\r\n        <i class=\"material-icons\">\r\n          {{data.overall_decline_pct > 0 ? 'trending_down' : data.overall_decline_pct < 0 ? 'trending_up' : 'trending_flat'}}\r\n        </i>\r\n        <span>\r\n          {{data.overall_decline_pct > 0 ? data.overall_decline_pct + '% Decline' : data.overall_decline_pct < 0 ? abs(data.overall_decline_pct) + '% Growth' : 'No Change'}}\r\n        </span>\r\n      </div>\r\n      <button mat-icon-button (click)=\"close()\" class=\"close-btn\">\r\n        <mat-icon>close</mat-icon>\r\n      </button>\r\n    </div>\r\n  </div>\r\n\r\n  <div mat-dialog-content class=\"modal-body\">\r\n\r\n    <!-- Summary Cards -->\r\n    <div class=\"summary-cards\">\r\n      <div class=\"sum-card\">\r\n        <div class=\"sum-icon bg-blue\"><i class=\"material-icons\">calendar_today</i></div>\r\n        <div class=\"sum-info\">\r\n          <span class=\"sum-val\">{{data.months.length}}</span>\r\n          <span class=\"sum-label\">Total Months</span>\r\n        </div>\r\n      </div>\r\n      <div class=\"sum-card\">\r\n        <div class=\"sum-icon bg-orange\"><i class=\"material-icons\">compare_arrows</i></div>\r\n        <div class=\"sum-info\">\r\n          <span class=\"sum-val\">{{data.changeCount}}</span>\r\n          <span class=\"sum-label\">Months Compared</span>\r\n        </div>\r\n      </div>\r\n      <div class=\"sum-card\">\r\n        <div class=\"sum-icon\" [ngClass]=\"data.overall_decline_pct > 0 ? 'bg-red' : 'bg-green'\">\r\n          <i class=\"material-icons\">{{data.overall_decline_pct > 0 ? 'arrow_downward' : 'arrow_upward'}}</i>\r\n        </div>\r\n        <div class=\"sum-info\">\r\n          <span class=\"sum-val\" [ngClass]=\"data.overall_decline_pct > 0 ? 'clr-red' : 'clr-green'\">\r\n            {{abs(data.overall_decline_pct)}}%\r\n          </span>\r\n          <span class=\"sum-label\">Avg Monthly Change</span>\r\n        </div>\r\n      </div>\r\n      <div class=\"sum-card\">\r\n        <div class=\"sum-icon bg-purple\"><i class=\"material-icons\">functions</i></div>\r\n        <div class=\"sum-info\">\r\n          <span class=\"sum-val\">{{data.total}}</span>\r\n          <span class=\"sum-label\">Total Points</span>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <!-- Calculation Table -->\r\n    <div class=\"calc-section\">\r\n      <div class=\"calc-title\">\r\n        <i class=\"material-icons\">calculate</i>\r\n        Month-wise Calculation Breakdown\r\n      </div>\r\n\r\n      <div class=\"calc-table-wrap\">\r\n        <table class=\"calc-table\">\r\n          <thead>\r\n            <tr>\r\n              <th>Month</th>\r\n              <th>Points</th>\r\n              <th>Formula</th>\r\n              <th>Change</th>\r\n            </tr>\r\n          </thead>\r\n          <tbody>\r\n            <tr *ngFor=\"let row of rows\">\r\n              <td class=\"month-cell\">{{row.month}}</td>\r\n              <td class=\"pts-cell\">\r\n                <strong>{{row.curr_pts}}</strong>\r\n              </td>\r\n              <td class=\"formula-cell\">{{row.formula}}</td>\r\n              <td class=\"change-cell\">\r\n                <span *ngIf=\"row.change !== null && row.change !== undefined\"\r\n                  class=\"change-badge\"\r\n                  [ngClass]=\"row.change > 0 ? 'change-red' : row.change < 0 ? 'change-green' : 'change-grey'\">\r\n                  <i class=\"material-icons\">\r\n                    {{row.change > 0 ? 'arrow_downward' : row.change < 0 ? 'arrow_upward' : 'remove'}}\r\n                  </i>\r\n                  {{abs(row.change)}}%\r\n                </span>\r\n                <span *ngIf=\"row.change === null || row.change === undefined\" class=\"change-badge change-grey\">—</span>\r\n              </td>\r\n            </tr>\r\n          </tbody>\r\n        </table>\r\n      </div>\r\n    </div>\r\n\r\n    <!-- Formula Explanation -->\r\n    <div class=\"formula-box\">\r\n      <div class=\"formula-title\"><i class=\"material-icons\">info_outline</i> How is Overall Decline % calculated?</div>\r\n      <div class=\"formula-steps\">\r\n        <div class=\"formula-step\">\r\n          <span class=\"step-num\">1</span>\r\n          <span>Har consecutive month ka change nikala jata hai: <code>(Prev − Curr) ÷ Prev × 100</code></span>\r\n        </div>\r\n        <div class=\"formula-step\">\r\n          <span class=\"step-num\">2</span>\r\n          <span>Saare changes ka average liya jata hai: <code>Sum of Changes ÷ Count</code></span>\r\n        </div>\r\n        <div class=\"formula-step highlight\" *ngIf=\"data.changeCount > 0\">\r\n          <span class=\"step-num\">3</span>\r\n          <span>\r\n            <code>{{data.changeSum}} ÷ {{data.changeCount}} = <strong>{{data.overall_decline_pct}}%</strong></code>\r\n          </span>\r\n        </div>\r\n        <div class=\"formula-step highlight\" *ngIf=\"data.changeCount === 0\">\r\n          <span class=\"step-num\">3</span>\r\n          <span>Sirf ek month ka data hai — comparison possible nahi.</span>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n\r\n  <div mat-dialog-actions class=\"modal-footer\">\r\n    <button mat-stroked-button (click)=\"close()\">Close</button>\r\n  </div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/loyalty-report/loyalty-report-dr-redemption-decline-modal/loyalty-report-dr-redemption-decline-modal.component.scss":
/*!*************************************************************************************************************************************!*\
  !*** ./src/app/loyalty-report/loyalty-report-dr-redemption-decline-modal/loyalty-report-dr-redemption-decline-modal.component.scss ***!
  \*************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".decline-modal {\n  width: 680px;\n  max-width: 100%;\n}\n\n.modal-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 20px 24px 16px;\n  border-bottom: 1px solid #e2e8f0;\n  gap: 12px;\n}\n\n.modal-header-left {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n}\n\n.dr-avatar {\n  width: 46px;\n  height: 46px;\n  border-radius: 50%;\n  background: linear-gradient(135deg, #667eea, #764ba2);\n  color: #fff;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 18px;\n  font-weight: 700;\n  flex-shrink: 0;\n}\n\n.dr-info {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n\n.dr-name {\n  margin: 0;\n  font-size: 17px;\n  font-weight: 700;\n  color: #1a1a2e;\n}\n\n.dr-mobile {\n  display: flex;\n  align-items: center;\n  gap: 3px;\n  font-size: 12px;\n  color: #667085;\n}\n\n.dr-mobile i {\n  font-size: 13px;\n}\n\n.modal-header-right {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n\n.overall-badge {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  padding: 6px 14px;\n  border-radius: 20px;\n  font-size: 13px;\n  font-weight: 700;\n}\n\n.overall-badge i {\n  font-size: 18px;\n}\n\n.badge-red {\n  background: #FEF2F2;\n  color: #DC2626;\n  border: 1px solid #FECACA;\n}\n\n.badge-green {\n  background: #F0FDF4;\n  color: #16A34A;\n  border: 1px solid #BBF7D0;\n}\n\n.badge-grey {\n  background: #F8FAFC;\n  color: #64748B;\n  border: 1px solid #E2E8F0;\n}\n\n.close-btn {\n  color: #94a3b8;\n}\n\n.modal-body {\n  padding: 20px 24px;\n  max-height: 60vh;\n  overflow-y: auto;\n}\n\n.summary-cards {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 12px;\n  margin-bottom: 22px;\n}\n\n.sum-card {\n  background: #fff;\n  border: 1px solid #e2e8f0;\n  border-radius: 10px;\n  padding: 14px 12px;\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04);\n}\n\n.sum-icon {\n  width: 36px;\n  height: 36px;\n  border-radius: 8px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n\n.sum-icon i {\n  font-size: 18px;\n  color: #fff;\n}\n\n.bg-blue {\n  background: linear-gradient(135deg, #2196F3, #1976D2);\n}\n\n.bg-orange {\n  background: linear-gradient(135deg, #FF9800, #F57C00);\n}\n\n.bg-red {\n  background: linear-gradient(135deg, #F44336, #D32F2F);\n}\n\n.bg-green {\n  background: linear-gradient(135deg, #4CAF50, #388E3C);\n}\n\n.bg-purple {\n  background: linear-gradient(135deg, #9C27B0, #7B1FA2);\n}\n\n.sum-info {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n\n.sum-val {\n  font-size: 18px;\n  font-weight: 800;\n  color: #1a1a2e;\n  line-height: 1;\n}\n\n.sum-label {\n  font-size: 10px;\n  color: #94a3b8;\n  font-weight: 500;\n}\n\n.clr-red {\n  color: #DC2626 !important;\n}\n\n.clr-green {\n  color: #16A34A !important;\n}\n\n.calc-section {\n  margin-bottom: 20px;\n}\n\n.calc-title {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  font-size: 13px;\n  font-weight: 700;\n  color: #475569;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  margin-bottom: 10px;\n}\n\n.calc-title i {\n  font-size: 16px;\n  color: #1976D2;\n}\n\n.calc-table-wrap {\n  border: 1px solid #e2e8f0;\n  border-radius: 10px;\n  overflow: hidden;\n}\n\n.calc-table {\n  width: 100%;\n  border-collapse: collapse;\n}\n\n.calc-table thead tr {\n  background: linear-gradient(180deg, #f8fafc, #f1f5f9);\n}\n\n.calc-table thead tr th {\n  padding: 10px 14px;\n  font-size: 11px;\n  font-weight: 700;\n  color: #475569;\n  text-transform: uppercase;\n  letter-spacing: 0.3px;\n  border-bottom: 2px solid #e2e8f0;\n  border-right: 1px solid #e2e8f0;\n  text-align: left;\n}\n\n.calc-table thead tr th:last-child {\n  border-right: none;\n}\n\n.calc-table tbody tr {\n  border-bottom: 1px solid #f1f5f9;\n  transition: background 0.15s;\n}\n\n.calc-table tbody tr:last-child {\n  border-bottom: none;\n}\n\n.calc-table tbody tr:hover {\n  background: #f8fafc;\n}\n\n.calc-table tbody tr td {\n  padding: 10px 14px;\n  font-size: 13px;\n  color: #334155;\n  border-right: 1px solid #f1f5f9;\n  vertical-align: middle;\n}\n\n.calc-table tbody tr td:last-child {\n  border-right: none;\n}\n\n.month-cell {\n  font-weight: 600;\n  color: #1a1a2e;\n  min-width: 90px;\n}\n\n.pts-cell {\n  min-width: 80px;\n}\n\n.formula-cell {\n  font-family: monospace;\n  font-size: 12px;\n  color: #475569;\n  min-width: 200px;\n}\n\n.change-badge {\n  display: inline-flex;\n  align-items: center;\n  gap: 3px;\n  padding: 3px 10px;\n  border-radius: 12px;\n  font-size: 12px;\n  font-weight: 700;\n}\n\n.change-badge i {\n  font-size: 13px;\n}\n\n.change-red {\n  background: #FEF2F2;\n  color: #DC2626;\n}\n\n.change-green {\n  background: #F0FDF4;\n  color: #16A34A;\n}\n\n.change-grey {\n  background: #F8FAFC;\n  color: #94A3B8;\n}\n\n.formula-box {\n  background: #F8FAFC;\n  border: 1px solid #E2E8F0;\n  border-radius: 10px;\n  padding: 14px 16px;\n}\n\n.formula-title {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  font-size: 12px;\n  font-weight: 700;\n  color: #475569;\n  margin-bottom: 10px;\n}\n\n.formula-title i {\n  font-size: 15px;\n  color: #64748B;\n}\n\n.formula-steps {\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n\n.formula-step {\n  display: flex;\n  align-items: flex-start;\n  gap: 10px;\n  font-size: 12px;\n  color: #475569;\n}\n\n.formula-step code {\n  background: #fff;\n  border: 1px solid #e2e8f0;\n  border-radius: 4px;\n  padding: 1px 6px;\n  font-size: 12px;\n  color: #1976D2;\n}\n\n.formula-step.highlight {\n  background: #EFF6FF;\n  border: 1px solid #BFDBFE;\n  border-radius: 6px;\n  padding: 8px 10px;\n}\n\n.formula-step.highlight code {\n  background: #fff;\n}\n\n.formula-step.highlight strong {\n  color: #1D4ED8;\n}\n\n.step-num {\n  min-width: 20px;\n  height: 20px;\n  background: #1976D2;\n  color: #fff;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 11px;\n  font-weight: 700;\n  flex-shrink: 0;\n}\n\n.modal-footer {\n  padding: 12px 24px;\n  border-top: 1px solid #e2e8f0;\n  justify-content: flex-end;\n}"

/***/ }),

/***/ "./src/app/loyalty-report/loyalty-report-dr-redemption-decline-modal/loyalty-report-dr-redemption-decline-modal.component.ts":
/*!***********************************************************************************************************************************!*\
  !*** ./src/app/loyalty-report/loyalty-report-dr-redemption-decline-modal/loyalty-report-dr-redemption-decline-modal.component.ts ***!
  \***********************************************************************************************************************************/
/*! exports provided: LoyaltyReportDrRedemptionDeclineModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoyaltyReportDrRedemptionDeclineModalComponent", function() { return LoyaltyReportDrRedemptionDeclineModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/material/esm5/material.es5.js");



var LoyaltyReportDrRedemptionDeclineModalComponent = /** @class */ (function () {
    function LoyaltyReportDrRedemptionDeclineModalComponent(dialogRef, data) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.rows = [];
        this.buildRows();
    }
    LoyaltyReportDrRedemptionDeclineModalComponent.prototype.buildRows = function () {
        var months = this.data.months;
        var monthly_data = this.data.monthly_data;
        var prev_pts = 0;
        var changes = [];
        this.rows = months.map(function (month, idx) {
            var curr_pts = monthly_data[month] || 0;
            var change = null;
            var formula = '—';
            if (idx > 0 && prev_pts > 0) {
                change = parseFloat((((prev_pts - curr_pts) / prev_pts) * 100).toFixed(2));
                formula = "(" + prev_pts + " \u2212 " + curr_pts + ") \u00F7 " + prev_pts + " \u00D7 100";
                changes.push(change);
            }
            else if (idx === 0 || prev_pts === 0) {
                formula = curr_pts > 0 ? 'First data point' : '—';
            }
            if (curr_pts > 0)
                prev_pts = curr_pts;
            return { month: month, curr_pts: curr_pts, formula: formula, change: change };
        });
        var validChanges = changes.filter(function (c) { return c !== null; });
        this.data.avg = validChanges.length > 0
            ? parseFloat((validChanges.reduce(function (a, b) { return a + b; }, 0) / validChanges.length).toFixed(2))
            : 0;
        this.data.changeCount = validChanges.length;
        this.data.changeSum = parseFloat(validChanges.reduce(function (a, b) { return a + b; }, 0).toFixed(2));
    };
    LoyaltyReportDrRedemptionDeclineModalComponent.prototype.abs = function (val) {
        return Math.abs(val);
    };
    LoyaltyReportDrRedemptionDeclineModalComponent.prototype.close = function () {
        this.dialogRef.close();
    };
    LoyaltyReportDrRedemptionDeclineModalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-loyalty-report-dr-redemption-decline-modal',
            template: __webpack_require__(/*! ./loyalty-report-dr-redemption-decline-modal.component.html */ "./src/app/loyalty-report/loyalty-report-dr-redemption-decline-modal/loyalty-report-dr-redemption-decline-modal.component.html"),
            styles: [__webpack_require__(/*! ./loyalty-report-dr-redemption-decline-modal.component.scss */ "./src/app/loyalty-report/loyalty-report-dr-redemption-decline-modal/loyalty-report-dr-redemption-decline-modal.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"], Object])
    ], LoyaltyReportDrRedemptionDeclineModalComponent);
    return LoyaltyReportDrRedemptionDeclineModalComponent;
}());



/***/ }),

/***/ "./src/app/loyalty-report/loyalty-report-dr-redemption-wise/loyalty-report-dr-redemption-wise.component.html":
/*!*******************************************************************************************************************!*\
  !*** ./src/app/loyalty-report/loyalty-report-dr-redemption-wise/loyalty-report-dr-redemption-wise.component.html ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-container\">\r\n\r\n  <!-- Page Header -->\r\n  <div class=\"tools-container\">\r\n    <div class=\"page-title-wrap\">\r\n      <div class=\"page-icon-wrap\"><i class=\"material-icons\">bar_chart</i></div>\r\n      <div>\r\n        <h2>Redemption Wise Report</h2>\r\n        <span class=\"page-subtitle\">Month-wise redemption points for DRs under a Sales User</span>\r\n      </div>\r\n    </div>\r\n    <div class=\"header-actions left-auto df ac flex-gap-10\">\r\n      <button class=\"btn-icon\" matTooltip=\"Refresh\" (click)=\"refresh()\">\r\n        <i class=\"material-icons\">refresh</i>\r\n      </button>\r\n      <div class=\"pagination\" *ngIf=\"reportList.length > 0\">\r\n        <span class=\"page-info\">Page <strong>{{pagenumber}}</strong> of <strong>{{total_page}}</strong></span>\r\n        <button class=\"page-btn\" matTooltip=\"Previous\" (click)=\"previous()\" [disabled]=\"start == 0 || total_page == 0\">\r\n          <i class=\"material-icons\">navigate_before</i>\r\n        </button>\r\n        <button class=\"page-btn\" matTooltip=\"Next\" (click)=\"nextPage()\" [disabled]=\"pagenumber == total_page\">\r\n          <i class=\"material-icons\">navigate_next</i>\r\n        </button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <!-- Filter Bar -->\r\n  <div class=\"filter-card\">\r\n    <div class=\"filter-row-inner\">\r\n\r\n      <!-- Sales User Searchable Dropdown -->\r\n      <div class=\"filter-field\" style=\"min-width:240px\">\r\n        <label class=\"filter-label\"><i class=\"material-icons\">person</i> Sales User</label>\r\n        <div class=\"custom-select-wrap\" [class.open]=\"salesDropdownOpen\">\r\n\r\n          <!-- Trigger -->\r\n          <div class=\"custom-select-trigger\" (click)=\"toggleSalesDropdown()\">\r\n            <ng-container *ngIf=\"selectedSalesUser; else noUser\">\r\n              <div class=\"trigger-user\">\r\n                <div class=\"trigger-avatar\">{{selectedSalesUser.name.charAt(0).toUpperCase()}}</div>\r\n                <span class=\"trigger-name\">{{selectedSalesUser.name}}</span>\r\n              </div>\r\n            </ng-container>\r\n            <ng-template #noUser>\r\n              <span class=\"trigger-placeholder\">\r\n                <i class=\"material-icons\" style=\"font-size:15px;margin-right:4px;\">person_search</i>\r\n                {{salesUserLoader ? 'Loading...' : 'Select Sales User'}}\r\n              </span>\r\n            </ng-template>\r\n            <i class=\"material-icons trigger-arrow\">{{salesDropdownOpen ? 'expand_less' : 'expand_more'}}</i>\r\n          </div>\r\n\r\n          <!-- Dropdown Panel -->\r\n          <div class=\"custom-dropdown-panel\" *ngIf=\"salesDropdownOpen\">\r\n            <div class=\"dropdown-search-row\">\r\n              <i class=\"material-icons\">search</i>\r\n              <input #salesSearchInput type=\"text\" class=\"dropdown-search-input\"\r\n                placeholder=\"Search by name or mobile...\" [(ngModel)]=\"salesSearchText\" (input)=\"filterSalesUsers()\"\r\n                autocomplete=\"off\">\r\n              <i class=\"material-icons clear-search\" *ngIf=\"salesSearchText\"\r\n                (click)=\"salesSearchText=''; filterSalesUsers()\">close</i>\r\n            </div>\r\n            <div class=\"dropdown-list\">\r\n              <div class=\"dropdown-item\" *ngFor=\"let u of filteredSalesUsers\" (click)=\"selectSalesUser(u)\">\r\n                <div class=\"item-avatar\">{{u.name.charAt(0).toUpperCase()}}</div>\r\n                <div class=\"item-info\">\r\n                  <span class=\"item-name\">{{u.name}}</span>\r\n                  <span class=\"item-mobile\">{{u.mobile}}</span>\r\n                </div>\r\n                <i class=\"material-icons item-check\" *ngIf=\"selectedSalesUser && selectedSalesUser.id == u.id\">check</i>\r\n              </div>\r\n              <div class=\"dropdown-empty\" *ngIf=\"filteredSalesUsers.length === 0 && !salesUserLoader\">\r\n                <i class=\"material-icons\">search_off</i> No results found\r\n              </div>\r\n              <div class=\"dropdown-loading\" *ngIf=\"salesUserLoader\">\r\n                <i class=\"material-icons spin\">sync</i> Loading...\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n        </div>\r\n        <!-- Clear selection -->\r\n        <span class=\"clear-user-link\" *ngIf=\"selectedSalesUser\" (click)=\"clearSalesUser()\">\r\n          <i class=\"material-icons\">close</i> Clear\r\n        </span>\r\n      </div>\r\n\r\n      <!-- Date From -->\r\n      <div class=\"filter-field\">\r\n        <label class=\"filter-label\"><i class=\"material-icons\">date_range</i> Date From</label>\r\n        <div class=\"date-input-wrap\">\r\n          <input type=\"date\" class=\"date-input\" [(ngModel)]=\"filter.date_from\" (change)=\"onDateFrom($event)\">\r\n        </div>\r\n      </div>\r\n\r\n      <!-- Date To -->\r\n      <div class=\"filter-field\">\r\n        <label class=\"filter-label\"><i class=\"material-icons\">date_range</i> Date To</label>\r\n        <div class=\"date-input-wrap\">\r\n          <input type=\"date\" class=\"date-input\" [(ngModel)]=\"filter.date_to\" (change)=\"onDateTo($event)\">\r\n        </div>\r\n      </div>\r\n\r\n      <!-- Search Button -->\r\n      <div class=\"filter-field filter-action\">\r\n        <button class=\"btn-search\" (click)=\"getReport()\" [disabled]=\"loader\">\r\n          <i class=\"material-icons\">{{loader ? 'hourglass_top' : 'search'}}</i>\r\n          {{loader ? 'Loading...' : 'Search'}}\r\n        </button>\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n\r\n  <!-- Table -->\r\n  <div class=\"table-section\" *ngIf=\"reportList.length > 0 || loader\">\r\n    <div class=\"table-section-title\" *ngIf=\"reportList.length > 0 && !loader\">\r\n      <div class=\"table-title-left\">\r\n        <h3><i class=\"material-icons table-title-icon\">table_chart</i> Report Results</h3>\r\n        <span class=\"section-subtitle\">{{tabIndex === 0 ? plyexpertList.length : (tabIndex === 1 ? ambassadorList.length : fabricatorList.length)}} DRs found ·\r\n          Click \"Overall Decline %\" to see breakdown</span>\r\n      </div>\r\n      <button class=\"btn-download\" (click)=\"exportExcel()\" [disabled]=\"loader\">\r\n        <i class=\"material-icons\">file_download</i> Download Excel\r\n      </button>\r\n    </div>\r\n\r\n    <!-- Tabs -->\r\n    <div class=\"custom-tabs\" *ngIf=\"reportList.length > 0 && !loader\">\r\n      <div class=\"tab\" [class.active]=\"tabIndex === 0\" (click)=\"tabIndex = 0\">Plyexpert ({{plyexpertList.length}})</div>\r\n      <div class=\"tab\" [class.active]=\"tabIndex === 1\" (click)=\"tabIndex = 1\">Ambassador ({{ambassadorList.length}})\r\n      </div>\r\n      <div class=\"tab\" [class.active]=\"tabIndex === 2\" (click)=\"tabIndex = 2\">Fabricator ({{fabricatorList.length}})\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"cs-table horizontal-scroll\">\r\n      <div class=\"sticky-head\">\r\n        <div class=\"table-head\">\r\n          <table>\r\n            <tr>\r\n              <th class=\"w50 text-center\">S.No</th>\r\n              <th class=\"w140\">Overall Decline %</th>\r\n              <th class=\"w200\">DR Name</th>\r\n              <th class=\"w130\">Mobile</th>\r\n              <th class=\"w110\" *ngFor=\"let month of months\">{{month}}</th>\r\n              <th class=\"w110\">Total</th>\r\n            </tr>\r\n          </table>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"table-container\">\r\n        <div class=\"table-content\">\r\n          <table>\r\n\r\n            <ng-container *ngIf=\"!loader\">\r\n              <ng-container *ngIf=\"(tabIndex === 0 ? plyexpertList : (tabIndex === 1 ? ambassadorList : fabricatorList)).length > 0\">\r\n                <tr *ngFor=\"let row of (tabIndex === 0 ? plyexpertList : (tabIndex === 1 ? ambassadorList : fabricatorList)); let i = index\">\r\n                  <td class=\"w50 text-center sno-cell\">{{i + 1 + sr_no}}</td>\r\n\r\n                  <!-- Overall Decline % — clickable -->\r\n                  <td class=\"w140 decline-td\" (click)=\"openDeclineModal(row)\">\r\n                    <span class=\"decline-pill\"\r\n                      [ngClass]=\"row.overall_decline_pct > 0 ? 'pill-red' : row.overall_decline_pct < 0 ? 'pill-green' : 'pill-grey'\">\r\n                      <i class=\"material-icons pill-icon\">\r\n                        {{row.overall_decline_pct > 0 ? 'trending_down' : row.overall_decline_pct < 0 ? 'trending_up'\r\n                          : 'remove' }} </i>\r\n                          <span *ngIf=\"row.overall_decline_pct > 0\">{{row.overall_decline_pct}}%</span>\r\n                          <span *ngIf=\"row.overall_decline_pct < 0\">{{abs(row.overall_decline_pct)}}%</span>\r\n                          <span *ngIf=\"!row.overall_decline_pct\">—</span>\r\n                    </span>\r\n                    <i class=\"material-icons detail-icon\">open_in_new</i>\r\n                  </td>\r\n\r\n                  <td class=\"w200\">\r\n                    <div class=\"user-cell\">\r\n                      <div class=\"user-avatar\">{{(row.user_name || 'D').charAt(0).toUpperCase()}}</div>\r\n                      <span class=\"user-name\">{{row.user_name | titlecase}}</span>\r\n                    </div>\r\n                  </td>\r\n                  <td class=\"w130 mobile-cell\">{{row.mobile}}</td>\r\n\r\n                  <td class=\"w110\" *ngFor=\"let month of months\">\r\n                    <span [ngClass]=\"row.monthly_data[month] > 0 ? 'pts-active' : 'pts-zero'\">\r\n                      {{row.monthly_data[month] || 0}}\r\n                    </span>\r\n                  </td>\r\n\r\n                  <td class=\"w110 total-cell\"><strong>{{row.total}}</strong></td>\r\n                </tr>\r\n              </ng-container>\r\n              <tr *ngIf=\"(tabIndex === 0 ? plyexpertList : (tabIndex === 1 ? ambassadorList : fabricatorList)).length === 0\">\r\n                <td colspan=\"100%\" class=\"text-center\" style=\"padding: 20px;\">\r\n                  <span class=\"section-subtitle\">No DRs found in this category.</span>\r\n                </td>\r\n              </tr>\r\n            </ng-container>\r\n\r\n            <!-- Skeleton Loader -->\r\n            <ng-container *ngIf=\"loader\">\r\n              <tr class=\"sk-loading\" *ngFor=\"let row of [].constructor(8);\">\r\n                <td class=\"w50\">\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n                <td class=\"w140\">\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n                <td class=\"w200\">\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n                <td class=\"w130\">\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n                <td class=\"w110\" *ngFor=\"let m of [1,2,3]\">\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n                <td class=\"w110\">\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n              </tr>\r\n            </ng-container>\r\n\r\n          </table>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <ng-container *ngIf=\"reportList.length == 0 && !loader\">\r\n    <app-not-result-found></app-not-result-found>\r\n  </ng-container>\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/loyalty-report/loyalty-report-dr-redemption-wise/loyalty-report-dr-redemption-wise.component.scss":
/*!*******************************************************************************************************************!*\
  !*** ./src/app/loyalty-report/loyalty-report-dr-redemption-wise/loyalty-report-dr-redemption-wise.component.scss ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".page-title-wrap {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.page-title-wrap h2 {\n  margin: 0;\n  font-size: 18px;\n  font-weight: 700;\n  color: #1a1a2e;\n}\n.page-icon-wrap {\n  width: 42px;\n  height: 42px;\n  background: linear-gradient(135deg, #1976D2, #1565C0);\n  border-radius: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n.page-icon-wrap i {\n  font-size: 22px;\n  color: #fff;\n}\n.page-subtitle {\n  display: block;\n  font-size: 12px;\n  color: #94a3b8;\n  margin-top: 2px;\n}\n.header-actions {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.pagination {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  background: #f8fafc;\n  border: 1px solid #e2e8f0;\n  border-radius: 8px;\n  padding: 4px 8px;\n}\n.page-info {\n  font-size: 12px;\n  color: #475569;\n  padding: 0 6px;\n}\n.page-info strong {\n  color: #1976D2;\n}\n.page-btn {\n  width: 28px;\n  height: 28px;\n  border-radius: 6px;\n  border: none;\n  background: transparent;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  transition: background 0.15s;\n}\n.page-btn i {\n  font-size: 20px;\n  color: #475569;\n}\n.page-btn:hover:not(:disabled) {\n  background: #e2e8f0;\n}\n.page-btn:disabled {\n  opacity: 0.4;\n  cursor: not-allowed;\n}\n.btn-icon {\n  width: 36px;\n  height: 36px;\n  border-radius: 8px;\n  border: 1.5px solid #d0d5dd;\n  background: #fff;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.btn-icon i {\n  font-size: 20px;\n  color: #667085;\n}\n.btn-icon:hover {\n  border-color: #1976D2;\n  background: #f0f7ff;\n}\n.btn-icon:hover i {\n  color: #1976D2;\n}\n.filter-card {\n  background: #fff;\n  border: 1px solid #e2e8f0;\n  border-radius: 12px;\n  padding: 16px 20px;\n  margin: 14px 0;\n  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.05);\n}\n.filter-row-inner {\n  display: flex;\n  align-items: flex-end;\n  gap: 16px;\n  flex-wrap: wrap;\n}\n.filter-field {\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n  flex: 1;\n  min-width: 180px;\n}\n.filter-field.filter-action {\n  flex: 0;\n  min-width: auto;\n  justify-content: flex-end;\n}\n.filter-label {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  font-size: 11px;\n  font-weight: 600;\n  color: #64748b;\n  text-transform: uppercase;\n  letter-spacing: 0.4px;\n}\n.filter-label i {\n  font-size: 14px;\n}\n.custom-select-wrap {\n  position: relative;\n}\n.custom-select-wrap.open .custom-select-trigger {\n  border-color: #1976D2;\n  box-shadow: 0 0 0 3px rgba(25, 118, 210, 0.1);\n}\n.custom-select-trigger {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  height: 38px;\n  padding: 0 10px 0 12px;\n  border: 1.5px solid #d0d5dd;\n  border-radius: 8px;\n  background: #fff;\n  cursor: pointer;\n  transition: border-color 0.2s, box-shadow 0.2s;\n  gap: 8px;\n}\n.custom-select-trigger:hover {\n  border-color: #1976D2;\n}\n.trigger-placeholder {\n  font-size: 13px;\n  color: #94a3b8;\n  display: flex;\n  align-items: center;\n  flex: 1;\n}\n.trigger-user {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  flex: 1;\n  min-width: 0;\n}\n.trigger-avatar {\n  width: 24px;\n  height: 24px;\n  border-radius: 50%;\n  background: linear-gradient(135deg, #667eea, #764ba2);\n  color: #fff;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 11px;\n  font-weight: 700;\n  flex-shrink: 0;\n}\n.trigger-name {\n  font-size: 13px;\n  font-weight: 600;\n  color: #344054;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.trigger-arrow {\n  font-size: 20px;\n  color: #94a3b8;\n  flex-shrink: 0;\n  transition: transform 0.2s;\n}\n.open .trigger-arrow {\n  transform: rotate(180deg);\n}\n.custom-dropdown-panel {\n  position: absolute;\n  top: calc(100% + 4px);\n  left: 0;\n  right: 0;\n  background: #fff;\n  border: 1.5px solid #d0d5dd;\n  border-radius: 10px;\n  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);\n  z-index: 1000;\n  overflow: hidden;\n  min-width: 280px;\n}\n.dropdown-search-row {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  padding: 8px 10px;\n  border-bottom: 1px solid #f1f5f9;\n  background: #f8fafc;\n}\n.dropdown-search-row i {\n  font-size: 16px;\n  color: #94a3b8;\n  flex-shrink: 0;\n}\n.dropdown-search-row .dropdown-search-input {\n  flex: 1;\n  border: none;\n  outline: none;\n  background: transparent;\n  font-size: 13px;\n  color: #344054;\n  font-family: inherit;\n}\n.dropdown-search-row .dropdown-search-input::-moz-placeholder {\n  color: #b0b8c4;\n}\n.dropdown-search-row .dropdown-search-input::placeholder {\n  color: #b0b8c4;\n}\n.dropdown-search-row .clear-search {\n  font-size: 16px;\n  color: #94a3b8;\n  cursor: pointer;\n}\n.dropdown-search-row .clear-search:hover {\n  color: #475569;\n}\n.dropdown-list {\n  max-height: 220px;\n  overflow-y: auto;\n  padding: 4px 0;\n}\n.dropdown-item {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 8px 12px;\n  cursor: pointer;\n  transition: background 0.15s;\n}\n.dropdown-item:hover {\n  background: #f0f7ff;\n}\n.dropdown-item .item-avatar {\n  width: 28px;\n  height: 28px;\n  border-radius: 50%;\n  background: linear-gradient(135deg, #667eea, #764ba2);\n  color: #fff;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 11px;\n  font-weight: 700;\n  flex-shrink: 0;\n}\n.dropdown-item .item-info {\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n  min-width: 0;\n}\n.dropdown-item .item-name {\n  font-size: 13px;\n  font-weight: 600;\n  color: #1a1a2e;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.dropdown-item .item-mobile {\n  font-size: 11px;\n  color: #94a3b8;\n  font-family: monospace;\n}\n.dropdown-item .item-check {\n  font-size: 16px;\n  color: #1976D2;\n  flex-shrink: 0;\n}\n.dropdown-empty {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 6px;\n  padding: 16px;\n  font-size: 13px;\n  color: #94a3b8;\n}\n.dropdown-empty i {\n  font-size: 18px;\n}\n.dropdown-loading {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 6px;\n  padding: 14px;\n  font-size: 13px;\n  color: #94a3b8;\n}\n.dropdown-loading i {\n  font-size: 16px;\n}\n.clear-user-link {\n  display: inline-flex;\n  align-items: center;\n  gap: 2px;\n  font-size: 11px;\n  color: #e53935;\n  cursor: pointer;\n  margin-top: 3px;\n}\n.clear-user-link i {\n  font-size: 13px;\n}\n.clear-user-link:hover {\n  text-decoration: underline;\n}\n@keyframes spin {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n.spin {\n  animation: spin 1s linear infinite;\n}\n.loading-hint {\n  font-size: 11px;\n  color: #94a3b8;\n  margin-top: 2px;\n}\n.date-input-wrap .date-input {\n  width: 100%;\n  height: 38px;\n  padding: 0 12px;\n  border: 1.5px solid #d0d5dd;\n  border-radius: 8px;\n  background: #fff;\n  font-size: 13px;\n  color: #344054;\n  font-family: inherit;\n  box-sizing: border-box;\n  outline: none;\n  transition: border-color 0.2s, box-shadow 0.2s;\n}\n.date-input-wrap .date-input:hover {\n  border-color: #1976D2;\n}\n.date-input-wrap .date-input:focus {\n  border-color: #1976D2;\n  box-shadow: 0 0 0 3px rgba(25, 118, 210, 0.1);\n}\n.btn-search {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  background: linear-gradient(135deg, #1976D2, #1565C0);\n  color: #fff;\n  border: none;\n  border-radius: 8px;\n  padding: 0 22px;\n  height: 38px;\n  font-size: 13px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.2s;\n  white-space: nowrap;\n  box-shadow: 0 2px 6px rgba(25, 118, 210, 0.3);\n}\n.btn-search i {\n  font-size: 18px;\n}\n.btn-search:hover:not(:disabled) {\n  background: linear-gradient(135deg, #1565C0, #0D47A1);\n  box-shadow: 0 4px 12px rgba(25, 118, 210, 0.4);\n  transform: translateY(-1px);\n}\n.btn-search:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n  transform: none;\n}\n.btn-download {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  background: #fff;\n  color: #16A34A;\n  border: 1.5px solid #BBF7D0;\n  border-radius: 8px;\n  padding: 0 14px;\n  height: 34px;\n  font-size: 12px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.2s;\n  white-space: nowrap;\n}\n.btn-download i {\n  font-size: 16px;\n}\n.btn-download:hover:not(:disabled) {\n  background: #F0FDF4;\n  border-color: #16A34A;\n  box-shadow: 0 2px 8px rgba(22, 163, 74, 0.15);\n}\n.btn-download:disabled {\n  opacity: 0.5;\n  cursor: not-allowed;\n}\n.custom-tabs {\n  display: flex;\n  gap: 12px;\n  margin-top: 14px;\n  margin-bottom: 16px;\n}\n.custom-tabs .tab {\n  padding: 8px 18px;\n  border-radius: 20px;\n  background: #f1f5f9;\n  color: #475569;\n  font-size: 13px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.2s;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n          user-select: none;\n  border: 1px solid #e2e8f0;\n}\n.custom-tabs .tab:hover {\n  background: #e2e8f0;\n  color: #334155;\n}\n.custom-tabs .tab.active {\n  background: linear-gradient(135deg, #1976D2, #1565C0);\n  color: #ffffff;\n  border-color: #1565C0;\n  box-shadow: 0 2px 8px rgba(25, 118, 210, 0.3);\n}\n.table-section {\n  margin-bottom: 20px;\n}\n.table-section-title {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  padding: 0 0 10px;\n}\n.table-section-title .table-title-left {\n  display: flex;\n  flex-direction: column;\n}\n.table-section-title h3 {\n  font-size: 15px;\n  font-weight: 700;\n  color: #1a1a2e;\n  margin: 0 0 2px;\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n.table-section-title .table-title-icon {\n  font-size: 18px;\n  color: #1976D2;\n}\n.table-section-title .section-subtitle {\n  font-size: 12px;\n  color: #94a3b8;\n  padding-left: 24px;\n}\n.cs-table {\n  background: #fff;\n  border-radius: 10px;\n  border: 1px solid #e2e8f0;\n  overflow: hidden;\n  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.05);\n}\n.cs-table.horizontal-scroll {\n  overflow-x: auto;\n}\n.table-head table,\n.table-content table {\n  width: 100%;\n  border-collapse: collapse;\n}\n.table-head {\n  background: linear-gradient(180deg, #f8fafc, #f1f5f9);\n  border-bottom: 2px solid #e2e8f0;\n}\n.table-head th {\n  padding: 11px 12px;\n  font-size: 11px;\n  font-weight: 700;\n  color: #475569;\n  text-transform: uppercase;\n  letter-spacing: 0.3px;\n  border-right: 1px solid #e2e8f0;\n  white-space: nowrap;\n}\n.table-head th:last-child {\n  border-right: none;\n}\n.table-content td {\n  padding: 10px 12px;\n  font-size: 13px;\n  color: #334155;\n  border-right: 1px solid #f1f5f9;\n  border-bottom: 1px solid #f1f5f9;\n  vertical-align: middle;\n}\n.table-content td:last-child {\n  border-right: none;\n}\n.table-content tr:last-child td {\n  border-bottom: none;\n}\n.table-content tr:hover td {\n  background: #f8fafc;\n}\n.table-container {\n  max-height: calc(100vh - 330px);\n  overflow-y: auto;\n}\n.text-center {\n  text-align: center;\n}\n.sno-cell {\n  font-size: 12px;\n  color: #94a3b8;\n  font-weight: 600;\n}\n.decline-td {\n  cursor: pointer;\n}\n.decline-td:hover .decline-pill {\n  opacity: 0.85;\n}\n.decline-td:hover .detail-icon {\n  opacity: 0.7;\n}\n.decline-pill {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  padding: 4px 10px;\n  border-radius: 14px;\n  font-size: 12px;\n  font-weight: 700;\n  transition: opacity 0.15s;\n}\n.decline-pill .pill-icon {\n  font-size: 14px;\n}\n.pill-red {\n  background: #FEF2F2;\n  color: #DC2626;\n  border: 1px solid #FECACA;\n}\n.pill-green {\n  background: #F0FDF4;\n  color: #16A34A;\n  border: 1px solid #BBF7D0;\n}\n.pill-grey {\n  background: #F8FAFC;\n  color: #94A3B8;\n  border: 1px solid #E2E8F0;\n}\n.detail-icon {\n  font-size: 13px;\n  color: #94a3b8;\n  margin-left: 4px;\n  opacity: 0.4;\n  vertical-align: middle;\n  transition: opacity 0.15s;\n}\n.user-cell {\n  display: flex;\n  align-items: center;\n  gap: 9px;\n}\n.user-avatar {\n  width: 30px;\n  height: 30px;\n  border-radius: 50%;\n  background: linear-gradient(135deg, #667eea, #764ba2);\n  color: #fff;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 12px;\n  font-weight: 700;\n  flex-shrink: 0;\n}\n.user-name {\n  font-weight: 500;\n  color: #1a1a2e;\n}\n.mobile-cell {\n  font-family: monospace;\n  font-size: 12px;\n  color: #64748b;\n}\n.pts-active {\n  font-weight: 600;\n  color: #1976D2;\n}\n.pts-zero {\n  color: #cbd5e1;\n  font-size: 12px;\n}\n.total-cell strong {\n  font-size: 14px;\n  color: #1a1a2e;\n}"

/***/ }),

/***/ "./src/app/loyalty-report/loyalty-report-dr-redemption-wise/loyalty-report-dr-redemption-wise.component.ts":
/*!*****************************************************************************************************************!*\
  !*** ./src/app/loyalty-report/loyalty-report-dr-redemption-wise/loyalty-report-dr-redemption-wise.component.ts ***!
  \*****************************************************************************************************************/
/*! exports provided: LoyaltyReportDrRedemptionWiseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoyaltyReportDrRedemptionWiseComponent", function() { return LoyaltyReportDrRedemptionWiseComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng6-toastr-notifications */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/ng6-toastr-notifications/fesm5/ng6-toastr-notifications.js");
/* harmony import */ var src_app_localstorage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/localstorage.service */ "./src/app/localstorage.service.ts");
/* harmony import */ var src_services_DatabaseService__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/_services/DatabaseService */ "./src/_services/DatabaseService.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! moment */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! file-saver */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/file-saver/dist/FileSaver.min.js");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _loyalty_report_dr_redemption_decline_modal_loyalty_report_dr_redemption_decline_modal_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../loyalty-report-dr-redemption-decline-modal/loyalty-report-dr-redemption-decline-modal.component */ "./src/app/loyalty-report/loyalty-report-dr-redemption-decline-modal/loyalty-report-dr-redemption-decline-modal.component.ts");
/* harmony import */ var exceljs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! exceljs */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/exceljs/dist/exceljs.min.js");
/* harmony import */ var exceljs__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(exceljs__WEBPACK_IMPORTED_MODULE_9__);










var LoyaltyReportDrRedemptionWiseComponent = /** @class */ (function () {
    function LoyaltyReportDrRedemptionWiseComponent(service, toast, session, dialog) {
        this.service = service;
        this.toast = toast;
        this.session = session;
        this.dialog = dialog;
        this.loader = false;
        this.salesUserLoader = false;
        this.reportList = [];
        this.plyexpertList = [];
        this.ambassadorList = [];
        this.fabricatorList = [];
        this.tabIndex = 0;
        this.months = [];
        this.page_limit = 50;
        this.start = 0;
        this.pagenumber = '';
        this.sr_no = 0;
        this.filter = {};
        this.allSalesUsers = [];
        this.filteredSalesUsers = [];
        this.selectedSalesUser = null;
        this.salesDropdownOpen = false;
        this.salesSearchText = '';
        var assign_login_data = this.session.getSession();
        this.logined_user_data = assign_login_data.value.data;
    }
    LoyaltyReportDrRedemptionWiseComponent.prototype.onDocumentClick = function (event) {
        var target = event.target;
        if (!target.closest('.custom-select-wrap')) {
            this.salesDropdownOpen = false;
        }
    };
    LoyaltyReportDrRedemptionWiseComponent.prototype.ngOnInit = function () {
        this.loadAllSalesUsers();
    };
    LoyaltyReportDrRedemptionWiseComponent.prototype.loadAllSalesUsers = function () {
        var _this = this;
        this.salesUserLoader = true;
        this.service.post_rqst({ search: '' }, 'Influencer/salesUserList').subscribe(function (resp) {
            if (resp['statusCode'] == 200) {
                _this.allSalesUsers = resp['all_sales_user'] || resp['data'] || [];
                _this.filteredSalesUsers = _this.allSalesUsers.slice();
            }
            _this.salesUserLoader = false;
        }, function () { _this.salesUserLoader = false; });
    };
    LoyaltyReportDrRedemptionWiseComponent.prototype.toggleSalesDropdown = function () {
        this.salesDropdownOpen = !this.salesDropdownOpen;
        if (this.salesDropdownOpen) {
            this.salesSearchText = '';
            this.filteredSalesUsers = this.allSalesUsers.slice();
        }
    };
    LoyaltyReportDrRedemptionWiseComponent.prototype.filterSalesUsers = function () {
        var q = (this.salesSearchText || '').toLowerCase().trim();
        if (!q) {
            this.filteredSalesUsers = this.allSalesUsers.slice();
        }
        else {
            this.filteredSalesUsers = this.allSalesUsers.filter(function (u) {
                return (u.name || '').toLowerCase().includes(q) ||
                    (u.mobile || '').toLowerCase().includes(q);
            });
        }
    };
    LoyaltyReportDrRedemptionWiseComponent.prototype.selectSalesUser = function (user) {
        this.selectedSalesUser = user;
        this.filter.sales_user_id = user.id;
        this.salesDropdownOpen = false;
        this.salesSearchText = '';
    };
    LoyaltyReportDrRedemptionWiseComponent.prototype.clearSalesUser = function () {
        this.selectedSalesUser = null;
        this.filter.sales_user_id = '';
        this.salesDropdownOpen = false;
        this.salesSearchText = '';
    };
    LoyaltyReportDrRedemptionWiseComponent.prototype.onSalesUserChange = function (userId) {
        var user = this.allSalesUsers.find(function (u) { return u.id == userId; });
        this.selectedSalesUser = user || null;
        this.filter.sales_user_id = userId;
    };
    LoyaltyReportDrRedemptionWiseComponent.prototype.getReport = function () {
        if (!this.filter.date_from) {
            this.toast.errorToastr('Please select Date From');
            return;
        }
        if (!this.filter.date_to) {
            this.toast.errorToastr('Please select Date To');
            return;
        }
        this.loader = true;
        this.start = 0;
        this._fetchReport();
    };
    LoyaltyReportDrRedemptionWiseComponent.prototype._fetchReport = function () {
        var _this = this;
        var payload = {
            filter: {
                sales_user_id: this.filter.sales_user_id,
                date_from: moment__WEBPACK_IMPORTED_MODULE_6__(this.filter.date_from).format('YYYY-MM-DD'),
                date_to: moment__WEBPACK_IMPORTED_MODULE_6__(this.filter.date_to).format('YYYY-MM-DD')
            },
            start: this.start,
            pagelimit: this.page_limit
        };
        this.service.post_rqst(payload, 'RedeemRequest/drRedemptionWiseReport').subscribe(function (resp) {
            if (resp['statusCode'] == 200) {
                _this.reportList = resp['result'] || [];
                _this.plyexpertList = _this.reportList.filter(function (x) { return x.dr_type == 8; });
                _this.ambassadorList = _this.reportList.filter(function (x) { return x.dr_type == 13; });
                _this.fabricatorList = _this.reportList.filter(function (x) { return x.dr_type == 21; });
                _this.months = resp['months'] || [];
                _this.pageCount = resp['count'];
                _this.pagenumber = Math.ceil(_this.start / _this.page_limit) + 1;
                _this.total_page = Math.ceil(_this.pageCount / _this.page_limit);
                _this.sr_no = (_this.pagenumber - 1) * _this.page_limit;
            }
            else {
                _this.toast.errorToastr(resp['statusMsg']);
            }
            _this.loader = false;
        }, function () { _this.loader = false; });
    };
    LoyaltyReportDrRedemptionWiseComponent.prototype.previous = function () {
        this.start = Math.max(0, this.start - this.page_limit);
        this.loader = true;
        this._fetchReport();
    };
    LoyaltyReportDrRedemptionWiseComponent.prototype.nextPage = function () {
        this.start = this.start + this.page_limit;
        this.loader = true;
        this._fetchReport();
    };
    LoyaltyReportDrRedemptionWiseComponent.prototype.refresh = function () {
        this.filter = {};
        this.selectedSalesUser = null;
        this.reportList = [];
        this.plyexpertList = [];
        this.ambassadorList = [];
        this.fabricatorList = [];
        this.months = [];
        this.start = 0;
    };
    LoyaltyReportDrRedemptionWiseComponent.prototype.onDateFrom = function (event) {
        this.filter.date_from = event.target.value;
    };
    LoyaltyReportDrRedemptionWiseComponent.prototype.onDateTo = function (event) {
        this.filter.date_to = event.target.value;
    };
    LoyaltyReportDrRedemptionWiseComponent.prototype.abs = function (val) {
        return Math.abs(val);
    };
    LoyaltyReportDrRedemptionWiseComponent.prototype.openDeclineModal = function (row) {
        this.dialog.open(_loyalty_report_dr_redemption_decline_modal_loyalty_report_dr_redemption_decline_modal_component__WEBPACK_IMPORTED_MODULE_8__["LoyaltyReportDrRedemptionDeclineModalComponent"], {
            width: '720px',
            panelClass: 'cs-modal',
            data: {
                user_name: row.user_name,
                mobile: row.mobile,
                monthly_data: row.monthly_data,
                months: this.months,
                overall_decline_pct: row.overall_decline_pct,
                total: row.total
            }
        });
    };
    LoyaltyReportDrRedemptionWiseComponent.prototype.exportExcel = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var workbook, generateSheet, buffer, blob, fileName;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!this.plyexpertList.length && !this.ambassadorList.length && !this.fabricatorList.length)
                            return [2 /*return*/];
                        workbook = new exceljs__WEBPACK_IMPORTED_MODULE_9__["Workbook"]();
                        workbook.creator = 'Magnus Loyalty';
                        workbook.created = new Date();
                        generateSheet = function (sheetName, list) {
                            if (!list.length)
                                return;
                            var sheet = workbook.addWorksheet(sheetName, {
                                pageSetup: { fitToPage: true, orientation: 'landscape' }
                            });
                            // ── Title row ──
                            var salesName = _this.selectedSalesUser ? _this.selectedSalesUser.name : '';
                            var dateRange = (_this.filter.date_from || '') + " to " + (_this.filter.date_to || '');
                            var totalCols = 4 + _this.months.length + 1;
                            sheet.mergeCells(1, 1, 1, totalCols);
                            var titleCell = sheet.getCell(1, 1);
                            titleCell.value = "DR REDEMPTION WISE REPORT - " + sheetName.toUpperCase();
                            titleCell.font = { name: 'Calibri', bold: true, size: 14, color: { argb: 'FFFFFFFF' } };
                            titleCell.alignment = { horizontal: 'center', vertical: 'middle' };
                            titleCell.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FF1565C0' } };
                            sheet.getRow(1).height = 32;
                            sheet.mergeCells(2, 1, 2, totalCols);
                            var subCell = sheet.getCell(2, 1);
                            subCell.value = "Sales User: " + salesName + "   |   Period: " + dateRange;
                            subCell.font = { name: 'Calibri', size: 10, color: { argb: 'FF475569' }, italic: true };
                            subCell.alignment = { horizontal: 'center', vertical: 'middle' };
                            subCell.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FFEFF6FF' } };
                            sheet.getRow(2).height = 20;
                            // blank spacer
                            sheet.getRow(3).height = 6;
                            // ── Header row ──
                            var headers = ['S.No', 'Overall Decline %', 'DR Name', 'Mobile'].concat(_this.months, ['Total']);
                            var headerRow = sheet.getRow(4);
                            headers.forEach(function (h, i) {
                                var cell = headerRow.getCell(i + 1);
                                cell.value = h;
                                cell.font = { name: 'Calibri', bold: true, size: 11, color: { argb: 'FFFFFFFF' } };
                                cell.alignment = { horizontal: 'center', vertical: 'middle' };
                                cell.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FF1976D2' } };
                                cell.border = {
                                    top: { style: 'thin', color: { argb: 'FF1565C0' } },
                                    bottom: { style: 'thin', color: { argb: 'FF1565C0' } },
                                    left: { style: 'thin', color: { argb: 'FF1565C0' } },
                                    right: { style: 'thin', color: { argb: 'FF1565C0' } }
                                };
                            });
                            headerRow.height = 24;
                            // ── Data rows ──
                            list.forEach(function (row, idx) {
                                var rowNum = idx + 5;
                                var dataRow = sheet.getRow(rowNum);
                                var isEven = idx % 2 === 0;
                                var rowBg = isEven ? 'FFFFFFFF' : 'FFF0F7FF';
                                var values = [
                                    idx + 1,
                                    row.overall_decline_pct ? row.overall_decline_pct + "%" : '—',
                                    (row.user_name || '').replace(/\b\w/g, function (c) { return c.toUpperCase(); }),
                                    row.mobile
                                ].concat(_this.months.map(function (m) { return row.monthly_data[m] || 0; }), [
                                    row.total
                                ]);
                                values.forEach(function (val, ci) {
                                    var cell = dataRow.getCell(ci + 1);
                                    cell.value = val;
                                    cell.font = { name: 'Calibri', size: 10, color: { argb: 'FF334155' } };
                                    cell.alignment = { vertical: 'middle', horizontal: ci < 2 ? 'center' : ci === 2 ? 'left' : 'center' };
                                    cell.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: rowBg } };
                                    cell.border = {
                                        bottom: { style: 'thin', color: { argb: 'FFE2E8F0' } },
                                        right: { style: 'thin', color: { argb: 'FFE2E8F0' } }
                                    };
                                    // Overall Decline % column — color by value
                                    if (ci === 1 && row.overall_decline_pct !== 0) {
                                        var isDecline = row.overall_decline_pct > 0;
                                        cell.font = { name: 'Calibri', size: 10, bold: true, color: { argb: isDecline ? 'FFDC2626' : 'FF16A34A' } };
                                        cell.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: isDecline ? 'FFFEF2F2' : 'FFF0FDF4' } };
                                    }
                                    // Month columns — highlight active points
                                    if (ci >= 4 && ci < 4 + _this.months.length) {
                                        var pts = _this.months.map(function (m) { return row.monthly_data[m] || 0; })[ci - 4];
                                        if (pts > 0) {
                                            cell.font = { name: 'Calibri', size: 10, bold: true, color: { argb: 'FF1565C0' } };
                                        }
                                        else {
                                            cell.font = { name: 'Calibri', size: 10, color: { argb: 'FFCBD5E1' } };
                                        }
                                    }
                                    // Total column — bold
                                    if (ci === values.length - 1) {
                                        cell.font = { name: 'Calibri', size: 11, bold: true, color: { argb: 'FF1A1A2E' } };
                                        cell.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FFEFF6FF' } };
                                    }
                                });
                                dataRow.height = 20;
                            });
                            // ── Column widths ──
                            sheet.getColumn(1).width = 6;
                            sheet.getColumn(2).width = 18;
                            sheet.getColumn(3).width = 28;
                            sheet.getColumn(4).width = 16;
                            _this.months.forEach(function (_, i) { sheet.getColumn(5 + i).width = 12; });
                            sheet.getColumn(4 + _this.months.length + 1).width = 12;
                        };
                        generateSheet('Plyexpert', this.plyexpertList);
                        generateSheet('Ambassador', this.ambassadorList);
                        generateSheet('Fabricator', this.fabricatorList);
                        return [4 /*yield*/, workbook.xlsx.writeBuffer()];
                    case 1:
                        buffer = _a.sent();
                        blob = new Blob([buffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
                        fileName = "DR_Redemption_Report_" + moment__WEBPACK_IMPORTED_MODULE_6__().format('YYYY-MM-DD_HHmm') + ".xlsx";
                        Object(file_saver__WEBPACK_IMPORTED_MODULE_7__["saveAs"])(blob, fileName);
                        return [2 /*return*/];
                }
            });
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('document:click', ['$event']),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [MouseEvent]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], LoyaltyReportDrRedemptionWiseComponent.prototype, "onDocumentClick", null);
    LoyaltyReportDrRedemptionWiseComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-loyalty-report-dr-redemption-wise',
            template: __webpack_require__(/*! ./loyalty-report-dr-redemption-wise.component.html */ "./src/app/loyalty-report/loyalty-report-dr-redemption-wise/loyalty-report-dr-redemption-wise.component.html"),
            styles: [__webpack_require__(/*! ./loyalty-report-dr-redemption-wise.component.scss */ "./src/app/loyalty-report/loyalty-report-dr-redemption-wise/loyalty-report-dr-redemption-wise.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_services_DatabaseService__WEBPACK_IMPORTED_MODULE_5__["DatabaseService"],
            ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_3__["ToastrManager"],
            src_app_localstorage_service__WEBPACK_IMPORTED_MODULE_4__["sessionStorage"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]])
    ], LoyaltyReportDrRedemptionWiseComponent);
    return LoyaltyReportDrRedemptionWiseComponent;
}());



/***/ }),

/***/ "./src/app/loyalty-report/loyalty-report-influencer-bonus-point/loyalty-report-influencer-bonus-point.component.html":
/*!***************************************************************************************************************************!*\
  !*** ./src/app/loyalty-report/loyalty-report-influencer-bonus-point/loyalty-report-influencer-bonus-point.component.html ***!
  \***************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-container\">\r\n\r\n  <div class=\"tools-container\">\r\n    <h2>INFLUENCER BONUS POINTS</h2>\r\n    <div class=\"left-auto df ac flex-gap-10\">\r\n      <button mat-icon-button matTooltip=\"Refresh\" (click)=\"refresh()\">\r\n        <i class=\"material-icons\">refresh</i>\r\n      </button>\r\n      <button mat-icon-button matTooltip=\"Filter\" (click)=\"openBottomSheet()\">\r\n        <i class=\"material-icons\">filter_alt</i>\r\n      </button>\r\n      <div class=\"pagination\" *ngIf=\"secondaryProductReportList.length > 0\">\r\n        <div class=\"pagination-content\">\r\n          Pages\r\n          <span>{{pagenumber}}</span>\r\n          of\r\n          <span>{{total_page}}</span>\r\n        </div>\r\n        <div class=\"page-nav\">\r\n\r\n          <button mat-icon-button matTooltip=\"Older\" (click)=\"pervious()\" [disabled]=\"start == 0 || total_page == 0\">\r\n            <i class=\"material-icons\">navigate_before</i>\r\n          </button>\r\n          <button mat-icon-button matTooltip=\"Newer\" (click)=\"nextPage()\" [disabled]=\"pagenumber == total_page \">\r\n            <i class=\"material-icons\">navigate_next</i>\r\n          </button>\r\n        </div>\r\n      </div>\r\n\r\n\r\n\r\n\r\n    </div>\r\n  </div>\r\n  <div class=\"container container-scroll\">\r\n    <div class=\"cs-table horizontal-scroll\">\r\n      <div class=\"sticky-head\">\r\n        <div class=\"table-head\">\r\n          <table>\r\n            <tr>\r\n              <th class=\"w50\">S.No</th>\r\n              <th class=\"w150\">Name / Mobile No.</th>\r\n              <th class=\"w200\">State</th>\r\n              <th class=\"w60\">District</th>\r\n              <th class=\"w100\">City</th>\r\n              <th class=\"w150\">Bonus Points\r\n\r\n\r\n              </th>\r\n            </tr>\r\n          </table>\r\n        </div>\r\n        <div class=\"table-head bdrt\">\r\n          <table>\r\n            <tr>\r\n              <th class=\"w50\">&nbsp;</th>\r\n              <th class=\"w150\">\r\n                <div class=\"th-search-acmt\">\r\n                  <mat-form-field class=\"example-full-width cs-input select-input\">\r\n                    <input matInput placeholder=\"Search...\" type=\"text\" name=\"name\" [(ngModel)]=\"filter.name\"\r\n                      (keyup.enter)=\"getSecondaryProductWiseReport('','')\">\r\n                  </mat-form-field>\r\n                </div>\r\n              </th>\r\n              <th class=\"w200\">\r\n                <div class=\"th-search-acmt\">\r\n                  <mat-form-field class=\"cs-input select-input\">\r\n                    <mat-select name=\"state\" [(ngModel)]=\"filter.state\" (selectionChange)=\"getSecondaryProductWiseReport('','')\">\r\n                      <mat-option *ngFor=\"let state of states\"\r\n                        value=\"{{state.state_name}}\">{{state.state_name}}</mat-option>\r\n                    </mat-select>\r\n                  </mat-form-field>\r\n                </div>\r\n\r\n              </th>\r\n              <th class=\"w60\">\r\n                <div class=\"th-search-acmt\">\r\n                  <mat-form-field class=\"example-full-width cs-input select-input\">\r\n                    <input matInput placeholder=\"Search...\" type=\"text\" name=\"district\" [(ngModel)]=\"filter.district\"\r\n                      (keyup.enter)=\"getSecondaryProductWiseReport('','')\">\r\n                  </mat-form-field>\r\n                </div>\r\n              </th>\r\n              <th class=\"w100\"></th>\r\n              <th class=\"w150\"></th>\r\n            </tr>\r\n          </table>\r\n        </div>\r\n      </div>\r\n      <div class=\"table-container\">\r\n        <div class=\"table-content\">\r\n          <table>\r\n            <ng-container *ngIf=\"!loader\">\r\n              <tr *ngFor=\"let report of secondaryProductReportList; let i=index\">\r\n                <td class=\"w50\">{{i + 1 + sr_no}}</td>\r\n                <td class=\"w150\">{{report.name}}/{{report.mobile_no}}</td>\r\n                <td class=\"w200\">{{report.state}}</td>\r\n                <td class=\"w60\">{{report.district}}</td>\r\n                <td class=\"w100\">{{report.city}}</td>\r\n                <td class=\"w150\">{{report.bonus_points}}</td>\r\n\r\n              </tr>\r\n            </ng-container>\r\n            <ng-container *ngIf=\"loader\">\r\n              <tr class=\"sk-loading\" *ngFor=\"let row of [].constructor(10);\">\r\n                <td class=\"w50\">\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n                <td class=\"w150\">\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n                <td class=\"w200\">\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n                <td class=\"w60\">\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n\r\n                <td class=\"w150\">\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n\r\n\r\n              </tr>\r\n            </ng-container>\r\n          </table>\r\n        </div>\r\n      </div>\r\n      <ng-container *ngIf=\"secondaryProductReportList.length == 0\">\r\n        <app-not-result-found></app-not-result-found>\r\n      </ng-container>\r\n    </div>\r\n  </div>\r\n  <div class=\"fab-btns\">\r\n\r\n    <div class=\"fab-btns\">\r\n      <button  mat-fab class=\"excel\"  *ngIf=\"secondaryProductReportList.length > 0 && logined_user_data.download_primary_target_report==1\" (click)=\"lastBtnValue('excel'); getproductWiseSecondaryReportExcel();\"  [ngClass]=\"{'pulse': fabBtnValue=='excel'}\" >\r\n        <img src=\"assets/img/excel.svg\">\r\n        Download Excel\r\n      </button>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/loyalty-report/loyalty-report-influencer-bonus-point/loyalty-report-influencer-bonus-point.component.scss":
/*!***************************************************************************************************************************!*\
  !*** ./src/app/loyalty-report/loyalty-report-influencer-bonus-point/loyalty-report-influencer-bonus-point.component.scss ***!
  \***************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/loyalty-report/loyalty-report-influencer-bonus-point/loyalty-report-influencer-bonus-point.component.ts":
/*!*************************************************************************************************************************!*\
  !*** ./src/app/loyalty-report/loyalty-report-influencer-bonus-point/loyalty-report-influencer-bonus-point.component.ts ***!
  \*************************************************************************************************************************/
/*! exports provided: LoyaltyReportInfluencerBonusPointComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoyaltyReportInfluencerBonusPointComponent", function() { return LoyaltyReportInfluencerBonusPointComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng6-toastr-notifications */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/ng6-toastr-notifications/fesm5/ng6-toastr-notifications.js");
/* harmony import */ var src_app_bottom_sheet_bottom_sheet_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/bottom-sheet/bottom-sheet.component */ "./src/app/bottom-sheet/bottom-sheet.component.ts");
/* harmony import */ var src_app_localstorage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/localstorage.service */ "./src/app/localstorage.service.ts");
/* harmony import */ var src_services_DatabaseService__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/_services/DatabaseService */ "./src/_services/DatabaseService.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! moment */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var src_app_reports_prouct_wise_secondary_report_product_wise_secondary_report_modal_product_wise_secondary_report_modal_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/reports/prouct-wise-secondary-report/product-wise-secondary-report-modal/product-wise-secondary-report-modal.component */ "./src/app/reports/prouct-wise-secondary-report/product-wise-secondary-report-modal/product-wise-secondary-report-modal.component.ts");









var LoyaltyReportInfluencerBonusPointComponent = /** @class */ (function () {
    function LoyaltyReportInfluencerBonusPointComponent(bottomSheet, service, toast, session, dialog) {
        this.bottomSheet = bottomSheet;
        this.service = service;
        this.toast = toast;
        this.session = session;
        this.dialog = dialog;
        this.loader = false;
        this.secondaryProductReportList = [];
        this.search = {};
        this.login_data = [];
        this.page_limit = 50;
        this.start = 0;
        this.pagenumber = '';
        this.filter = {};
        this.filtering = false;
        this.length = 0;
        this.fabBtnValue = 'add';
        this.sorting_type = '';
        this.states = [];
        this.assign_login_data = this.session.getSession();
        this.logined_user_data = this.assign_login_data.value.data;
        this.getStateList();
    }
    LoyaltyReportInfluencerBonusPointComponent.prototype.ngOnInit = function () {
        this.length = 0;
        this.getSecondaryProductWiseReport('', this.length);
    };
    LoyaltyReportInfluencerBonusPointComponent.prototype.refresh = function () {
        this.filter = {};
        this.start = 0;
        this.getSecondaryProductWiseReport('', this.length);
    };
    LoyaltyReportInfluencerBonusPointComponent.prototype.pervious = function () {
        this.start = this.start - this.page_limit;
        this.filter = {};
        this.getSecondaryProductWiseReport('', this.length);
    };
    LoyaltyReportInfluencerBonusPointComponent.prototype.nextPage = function () {
        this.start = this.start + this.page_limit;
        this.getSecondaryProductWiseReport('', this.length);
    };
    LoyaltyReportInfluencerBonusPointComponent.prototype.getSecondaryProductWiseReport = function (action, length) {
        var _this = this;
        this.loader = true;
        if (this.pagenumber > this.total_page) {
            this.pagenumber = this.total_page;
            this.start = this.pageCount - this.page_limit;
        }
        if (this.start < 0) {
            this.start = 0;
        }
        //  if (this.filter.date_from) {
        //       this.filter.date_from = moment(this.filter.date_from).format('YYYY-MM-DD');
        //     }
        //     if (this.filter.date_to) {
        //       this.filter.date_to = moment(this.filter.date_to).format('YYYY-MM-DD');
        //     }
        //     if (this.filter.date) this.filtering = true;
        //     this.filter.mode = 0;
        //     this.filter.limit = length;
        //     if (action == 'refresh') {
        //       this.filter.date_from = '';
        //       this.filter.date_to = '';
        //     }
        this.service.post_rqst({ 'start': this.start, 'pagelimit': this.page_limit, 'filter': this.filter }, 'LoyaltyReport/influencer_bonus_points').subscribe(function (resp) {
            console.log(resp);
            if (resp['statusCode'] == 200) {
                _this.secondaryProductReportList = resp['result'];
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
                _this.loader = false;
            }
            else {
                _this.toast.errorToastr(resp['statusMsg']);
            }
        }, function (err) {
            _this.loader = false;
        });
    };
    LoyaltyReportInfluencerBonusPointComponent.prototype.onDate = function (event) {
        console.log(event);
        this.filter.date_to = moment__WEBPACK_IMPORTED_MODULE_7__(event.target.value).format('YYYY-MM-DD');
        this.filter.date_from = moment__WEBPACK_IMPORTED_MODULE_7__(event.target.value).format('YYYY-MM-DD');
        this.getSecondaryProductWiseReport('', this.length);
    };
    LoyaltyReportInfluencerBonusPointComponent.prototype.openBottomSheet = function () {
        var _this = this;
        this.bottomSheet.open(src_app_bottom_sheet_bottom_sheet_component__WEBPACK_IMPORTED_MODULE_4__["BottomSheetComponent"], {
            data: {
                'filterPage': 'product_wise_secondary',
            }
        });
        this.bottomSheet._openedBottomSheetRef.afterDismissed().subscribe(function (data) {
            _this.filter.date_from = data.date_from;
            _this.filter.date_to = data.date_to;
            // this.search.userId = data.user_id;
            _this.length = 0;
            _this.getSecondaryProductWiseReport(_this.filter.date_to, _this.filter.date_from);
        });
    };
    LoyaltyReportInfluencerBonusPointComponent.prototype.getproductWiseSecondaryReportExcel = function () {
        var _this = this;
        this.loader = true;
        this.service.post_rqst({ 'filter': this.filter }, "LoyaltyReport/excel_influencer_bonus_points").subscribe(function (result) {
            if (result['msg'] == true) {
                _this.loader = false;
                window.open(_this.service.downloadUrl + result['filename']);
                _this.getSecondaryProductWiseReport('', _this.length);
            }
        });
    };
    LoyaltyReportInfluencerBonusPointComponent.prototype.openProductWiseSecondarySubCategoryReport = function (drId, category, startDate, endDate, salesUserId) {
        var dialogRef = this.dialog.open(src_app_reports_prouct_wise_secondary_report_product_wise_secondary_report_modal_product_wise_secondary_report_modal_component__WEBPACK_IMPORTED_MODULE_8__["ProductWiseSecondaryReportModalComponent"], {
            width: '800px',
            panelClass: 'cs-modal',
            data: {
                'from': 'product-wise-sub-category',
                drId: drId,
                category: category,
                startDate: startDate,
                endDate: endDate,
                salesUserId: salesUserId
            }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result != false) {
            }
        });
    };
    LoyaltyReportInfluencerBonusPointComponent.prototype.lastBtnValue = function (value) {
        this.fabBtnValue = value;
    };
    LoyaltyReportInfluencerBonusPointComponent.prototype.getStateList = function () {
        var _this = this;
        this.service.post_rqst(0, "Master/getAllState").subscribe((function (result) {
            if (result['statusCode'] == 200) {
                _this.states = result['all_state'];
            }
            else {
                _this.toast.errorToastr(result['statusMsg']);
            }
        }));
    };
    LoyaltyReportInfluencerBonusPointComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-loyalty-report-influencer-bonus-point',
            template: __webpack_require__(/*! ./loyalty-report-influencer-bonus-point.component.html */ "./src/app/loyalty-report/loyalty-report-influencer-bonus-point/loyalty-report-influencer-bonus-point.component.html"),
            styles: [__webpack_require__(/*! ./loyalty-report-influencer-bonus-point.component.scss */ "./src/app/loyalty-report/loyalty-report-influencer-bonus-point/loyalty-report-influencer-bonus-point.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatBottomSheet"], src_services_DatabaseService__WEBPACK_IMPORTED_MODULE_6__["DatabaseService"], ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_3__["ToastrManager"], src_app_localstorage_service__WEBPACK_IMPORTED_MODULE_5__["sessionStorage"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]])
    ], LoyaltyReportInfluencerBonusPointComponent);
    return LoyaltyReportInfluencerBonusPointComponent;
}());



/***/ }),

/***/ "./src/app/loyalty-report/loyalty-report-influencer-categorywise-scan-point/loyalty-report-influencer-categorywise-scan-point.component.html":
/*!***************************************************************************************************************************************************!*\
  !*** ./src/app/loyalty-report/loyalty-report-influencer-categorywise-scan-point/loyalty-report-influencer-categorywise-scan-point.component.html ***!
  \***************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-container\">\r\n\r\n  <div class=\"tools-container\">\r\n    <a mat-icon-button  matTooltip=\"Back\" (click)=\"back();\" *ngIf=\"filter.category_id\">\r\n      <i class=\"material-icons\">arrow_back</i>\r\n    </a>\r\n    <h2>INFLUENCER POINT CATEGORIES SCAN POINTS REPORT</h2>\r\n              Filter:<h2>{{filter.category_name}}</h2> <h2>{{filter.state}}</h2> <h2>{{filter.date_from}}</h2><h2>{{filter.date_to}}</h2>\r\n    <div class=\"left-auto df ac flex-gap-10\" *ngIf=\"!filter.category_id\">\r\n      <button mat-icon-button matTooltip=\"Refresh\" (click)=\"refresh()\">\r\n        <i class=\"material-icons\">refresh</i>\r\n      </button>\r\n      <button mat-icon-button matTooltip=\"Filter\" (click)=\"openBottomSheet()\" >\r\n        <i class=\"material-icons\">filter_alt</i>\r\n      </button>\r\n\r\n      <div class=\"pagination\" *ngIf=\"secondaryProductReportList.length > 0\">\r\n        <div class=\"pagination-content\">\r\n          Pages\r\n          <span>{{pagenumber}}</span>\r\n          of\r\n          <span>{{total_page}}</span>\r\n        </div>\r\n        <div class=\"page-nav\">\r\n\r\n          <button mat-icon-button matTooltip=\"Older\" (click)=\"pervious()\" [disabled]=\"start == 0  || total_page == 0\">\r\n            <i class=\"material-icons\">navigate_before</i>\r\n          </button>\r\n          <button mat-icon-button matTooltip=\"Newer\" (click)=\"nextPage()\" [disabled]=\"pagenumber == total_page \">\r\n            <i class=\"material-icons\">navigate_next</i>\r\n          </button>\r\n        </div>\r\n      </div>\r\n\r\n\r\n    </div>\r\n  </div>\r\n  <div class=\"container container-scroll\">\r\n    <div class=\"cs-table horizontal-scroll\">\r\n      <div class=\"sticky-head\">\r\n        <div class=\"table-head\">\r\n          <table>\r\n            <tr>\r\n              <th class=\"w50\">S.No</th>\r\n              <th class=\"w150\">Point Category Name</th>\r\n              <th class=\"w60\">Coupon Scan Count\r\n\r\n\r\n              </th>\r\n              <th class=\"w200\">Coupon Scan Point Value\r\n\r\n\r\n              </th>\r\n\r\n            </tr>\r\n          </table>\r\n        </div>\r\n        <div class=\"table-head bdrt\">\r\n          <table>\r\n            <tr>\r\n              <th class=\"w50\">&nbsp;</th>\r\n              <th class=\"w150\"></th>\r\n              <th class=\"w60\"></th>\r\n\r\n              <th class=\"w200\"></th>\r\n            </tr>\r\n          </table>\r\n        </div>\r\n      </div>\r\n      <div class=\"table-container\">\r\n        <div class=\"table-content\">\r\n          <table>\r\n            <ng-container *ngIf=\"!loader\">\r\n              <tr *ngFor=\"let report of secondaryProductReportList; let i=index\">\r\n                <td class=\"w50\">{{i+1+sr_no}}</td>\r\n                <td class=\"w150\">{{report.point_category_name}}</td>\r\n                <td class=\"w60\">{{report.scan_count}}</td>\r\n\r\n                <td class=\"w200\">{{report.scan_point}}</td>\r\n              </tr>\r\n            </ng-container>\r\n            <ng-container *ngIf=\"loader\">\r\n              <tr class=\"sk-loading\" *ngFor=\"let row of [].constructor(10);\">\r\n                <td class=\"w50\">\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n                <td class=\"w150\">\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n                <td class=\"w60\">\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n                <td class=\"w200\">\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n\r\n\r\n\r\n              </tr>\r\n            </ng-container>\r\n          </table>\r\n        </div>\r\n      </div>\r\n      <ng-container *ngIf=\"secondaryProductReportList.length == 0\">\r\n        <app-not-result-found></app-not-result-found>\r\n      </ng-container>\r\n    </div>\r\n  </div>\r\n  <div class=\"fab-btns\">\r\n    <button  mat-fab class=\"excel\"  *ngIf=\"secondaryProductReportList.length > 0 && logined_user_data.download_primary_target_report==1\" (click)=\"lastBtnValue('excel'); getproductWiseSecondaryReportExcel();\"  [ngClass]=\"{'pulse': fabBtnValue=='excel'}\" >\r\n      <img src=\"assets/img/excel.svg\">\r\n      Download Excel\r\n    </button>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/loyalty-report/loyalty-report-influencer-categorywise-scan-point/loyalty-report-influencer-categorywise-scan-point.component.scss":
/*!***************************************************************************************************************************************************!*\
  !*** ./src/app/loyalty-report/loyalty-report-influencer-categorywise-scan-point/loyalty-report-influencer-categorywise-scan-point.component.scss ***!
  \***************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/loyalty-report/loyalty-report-influencer-categorywise-scan-point/loyalty-report-influencer-categorywise-scan-point.component.ts":
/*!*************************************************************************************************************************************************!*\
  !*** ./src/app/loyalty-report/loyalty-report-influencer-categorywise-scan-point/loyalty-report-influencer-categorywise-scan-point.component.ts ***!
  \*************************************************************************************************************************************************/
/*! exports provided: LoyaltyReportInfluencerCategorywiseScanPointComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoyaltyReportInfluencerCategorywiseScanPointComponent", function() { return LoyaltyReportInfluencerCategorywiseScanPointComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng6-toastr-notifications */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/ng6-toastr-notifications/fesm5/ng6-toastr-notifications.js");
/* harmony import */ var src_app_bottom_sheet_bottom_sheet_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/bottom-sheet/bottom-sheet.component */ "./src/app/bottom-sheet/bottom-sheet.component.ts");
/* harmony import */ var src_app_localstorage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/localstorage.service */ "./src/app/localstorage.service.ts");
/* harmony import */ var src_services_DatabaseService__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/_services/DatabaseService */ "./src/_services/DatabaseService.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! moment */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_reports_prouct_wise_secondary_report_product_wise_secondary_report_modal_product_wise_secondary_report_modal_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/reports/prouct-wise-secondary-report/product-wise-secondary-report-modal/product-wise-secondary-report-modal.component */ "./src/app/reports/prouct-wise-secondary-report/product-wise-secondary-report-modal/product-wise-secondary-report-modal.component.ts");











var LoyaltyReportInfluencerCategorywiseScanPointComponent = /** @class */ (function () {
    function LoyaltyReportInfluencerCategorywiseScanPointComponent(bottomSheet, service, toast, session, dialog, route, location) {
        this.bottomSheet = bottomSheet;
        this.service = service;
        this.toast = toast;
        this.session = session;
        this.dialog = dialog;
        this.route = route;
        this.location = location;
        this.loader = false;
        this.secondaryProductReportList = [];
        this.search = {};
        this.login_data = [];
        this.page_limit = 50;
        this.start = 0;
        this.pagenumber = '';
        this.filter = {};
        this.filtering = false;
        this.length = 0;
        this.fabBtnValue = 'add';
        this.sorting_type = '';
        this.sorting_type_count = '';
        this.assign_login_data = this.session.getSession();
        this.logined_user_data = this.assign_login_data.value.data;
    }
    LoyaltyReportInfluencerCategorywiseScanPointComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.queryParams.subscribe(function (params) {
            _this.filter = params;
        });
        this.length = 0;
        this.getSecondaryProductWiseReport('', this.length);
    };
    LoyaltyReportInfluencerCategorywiseScanPointComponent.prototype.refresh = function () {
        this.start = 0;
        this.filter = {};
        this.getSecondaryProductWiseReport('', this.length);
    };
    LoyaltyReportInfluencerCategorywiseScanPointComponent.prototype.pervious = function () {
        this.start = this.start - this.page_limit;
        this.getSecondaryProductWiseReport('', this.length);
    };
    LoyaltyReportInfluencerCategorywiseScanPointComponent.prototype.nextPage = function () {
        this.start = this.start + this.page_limit;
        this.getSecondaryProductWiseReport('', this.length);
    };
    LoyaltyReportInfluencerCategorywiseScanPointComponent.prototype.getSecondaryProductWiseReport = function (action, length) {
        var _this = this;
        this.loader = true;
        if (this.pagenumber > this.total_page) {
            this.pagenumber = this.total_page;
            this.start = this.pageCount - this.page_limit;
        }
        if (this.start < 0) {
            this.start = 0;
        }
        //  if (this.filter.date_from) {
        //       this.filter.date_from = moment(this.filter.date_from).format('YYYY-MM-DD');
        //     }
        //     if (this.filter.date_to) {
        //       this.filter.date_to = moment(this.filter.date_to).format('YYYY-MM-DD');
        //     }
        //     if (this.filter.date) this.filtering = true;
        //     this.filter.mode = 0;
        //     this.filter.limit = length;
        //     if (action == 'refresh') {
        //       this.filter.date_from = '';
        //       this.filter.date_to = '';
        //     }
        this.service.post_rqst({ 'start': this.start, 'pagelimit': this.page_limit, 'filter': this.filter }, 'LoyaltyReport/point_category_wise_scan_report').subscribe(function (resp) {
            console.log(resp);
            if (resp['statusCode'] == 200) {
                _this.secondaryProductReportList = resp['result'];
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
                _this.loader = false;
            }
            else {
                _this.toast.errorToastr(resp['statusMsg']);
            }
        }, function (err) {
            _this.loader = false;
        });
    };
    LoyaltyReportInfluencerCategorywiseScanPointComponent.prototype.onDate = function (event) {
        console.log(event);
        this.filter.date_to = moment__WEBPACK_IMPORTED_MODULE_8__(event.target.value).format('YYYY-MM-DD');
        this.filter.date_from = moment__WEBPACK_IMPORTED_MODULE_8__(event.target.value).format('YYYY-MM-DD');
        this.getSecondaryProductWiseReport('', this.length);
    };
    LoyaltyReportInfluencerCategorywiseScanPointComponent.prototype.openBottomSheet = function () {
        var _this = this;
        this.bottomSheet.open(src_app_bottom_sheet_bottom_sheet_component__WEBPACK_IMPORTED_MODULE_4__["BottomSheetComponent"], {
            data: {
                'filterPage': 'product_wise_secondary',
            }
        });
        this.bottomSheet._openedBottomSheetRef.afterDismissed().subscribe(function (data) {
            _this.filter.date_from = data.date_from;
            _this.filter.date_to = data.date_to;
            // this.search.userId = data.user_id;
            _this.length = 0;
            _this.getSecondaryProductWiseReport(_this.filter.date_to, _this.filter.date_from);
        });
    };
    LoyaltyReportInfluencerCategorywiseScanPointComponent.prototype.getproductWiseSecondaryReportExcel = function () {
        var _this = this;
        this.loader = true;
        this.service.post_rqst({ 'filter': this.filter }, "LoyaltyReport/excel_point_category_wise_scan_report").subscribe(function (result) {
            if (result['msg'] == true) {
                _this.loader = false;
                window.open(_this.service.downloadUrl + result['filename']);
                _this.getSecondaryProductWiseReport('', _this.length);
            }
        });
    };
    LoyaltyReportInfluencerCategorywiseScanPointComponent.prototype.openProductWiseSecondarySubCategoryReport = function (drId, category, startDate, endDate, salesUserId) {
        var dialogRef = this.dialog.open(src_app_reports_prouct_wise_secondary_report_product_wise_secondary_report_modal_product_wise_secondary_report_modal_component__WEBPACK_IMPORTED_MODULE_10__["ProductWiseSecondaryReportModalComponent"], {
            width: '800px',
            panelClass: 'cs-modal',
            data: {
                'from': 'product-wise-sub-category',
                drId: drId,
                category: category,
                startDate: startDate,
                endDate: endDate,
                salesUserId: salesUserId
            }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result != false) {
            }
        });
    };
    LoyaltyReportInfluencerCategorywiseScanPointComponent.prototype.lastBtnValue = function (value) {
        this.fabBtnValue = value;
    };
    LoyaltyReportInfluencerCategorywiseScanPointComponent.prototype.back = function () {
        this.location.back();
    };
    LoyaltyReportInfluencerCategorywiseScanPointComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-loyalty-report-influencer-categorywise-scan-point',
            template: __webpack_require__(/*! ./loyalty-report-influencer-categorywise-scan-point.component.html */ "./src/app/loyalty-report/loyalty-report-influencer-categorywise-scan-point/loyalty-report-influencer-categorywise-scan-point.component.html"),
            styles: [__webpack_require__(/*! ./loyalty-report-influencer-categorywise-scan-point.component.scss */ "./src/app/loyalty-report/loyalty-report-influencer-categorywise-scan-point/loyalty-report-influencer-categorywise-scan-point.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatBottomSheet"], src_services_DatabaseService__WEBPACK_IMPORTED_MODULE_6__["DatabaseService"], ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_3__["ToastrManager"], src_app_localstorage_service__WEBPACK_IMPORTED_MODULE_5__["sessionStorage"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"], _angular_router__WEBPACK_IMPORTED_MODULE_9__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["Location"]])
    ], LoyaltyReportInfluencerCategorywiseScanPointComponent);
    return LoyaltyReportInfluencerCategorywiseScanPointComponent;
}());



/***/ }),

/***/ "./src/app/loyalty-report/loyalty-report-influencer-monthwise-scan/loyalty-report-influencer-monthwise-scan.component.html":
/*!*********************************************************************************************************************************!*\
  !*** ./src/app/loyalty-report/loyalty-report-influencer-monthwise-scan/loyalty-report-influencer-monthwise-scan.component.html ***!
  \*********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-container\">\r\n\r\n  <div class=\"tools-container\">\r\n    <h2>USER MONTHLY SCAN</h2>\r\n    <div class=\"left-auto df ac flex-gap-10\">\r\n      <button mat-icon-button matTooltip=\"Refresh\" (click)=\"refresh()\">\r\n        <i class=\"material-icons\">refresh</i>\r\n      </button>\r\n      <button mat-icon-button matTooltip=\"Filter\" (click)=\"openBottomSheet()\">\r\n        <i class=\"material-icons\">filter_alt</i>\r\n      </button>\r\n\r\n      <div class=\"pagination\" *ngIf=\"secondaryProductReportList.length > 0\">\r\n        <div class=\"pagination-content\">\r\n          Pages\r\n          <span>{{pagenumber}}</span>\r\n          of\r\n          <span>{{total_page}}</span>\r\n        </div>\r\n        <div class=\"page-nav\">\r\n\r\n          <button mat-icon-button matTooltip=\"Older\" (click)=\"pervious()\" [disabled]=\"start == 0 || total_page == 0\">\r\n            <i class=\"material-icons\">navigate_before</i>\r\n          </button>\r\n          <button mat-icon-button matTooltip=\"Newer\" (click)=\"nextPage()\" [disabled]=\"pagenumber == total_page \">\r\n            <i class=\"material-icons\">navigate_next</i>\r\n          </button>\r\n        </div>\r\n      </div>\r\n\r\n\r\n    </div>\r\n  </div>\r\n  <div class=\"container container-scroll\">\r\n    <div class=\"cs-table horizontal-scroll\">\r\n      <div class=\"sticky-head\">\r\n        <div class=\"table-head\">\r\n          <table>\r\n            <tr>\r\n              <th class=\"w50 text-center\" *ngIf=\"header_list[0]\">{{header_list[0]}}</th>\r\n              <th class=\"w100 text-center\" *ngIf=\"header_list[1]\">{{header_list[1]}}</th>\r\n              <th class=\"w100 text-center\" *ngIf=\"header_list[2]\">{{header_list[2]}}</th>\r\n              <th class=\"w100 text-center\" *ngIf=\"header_list[3]\">{{header_list[3]}}</th>\r\n              <th class=\"w100 text-center\" *ngIf=\"header_list[4]\">{{header_list[4]}}</th>\r\n              <th class=\"w100 text-center\" *ngIf=\"header_list[5]\">{{header_list[5]}}</th>\r\n              <th class=\"w100 text-center\" *ngIf=\"header_list[6]\">{{header_list[6]}}</th>\r\n              <th class=\"w100 text-center\" *ngIf=\"header_list[7]\">{{header_list[7]}}</th>\r\n              <th class=\"w100 text-center\" *ngIf=\"header_list[8]\">{{header_list[8]}}</th>\r\n              <th class=\"w100 text-center\" *ngIf=\"header_list[9]\">{{header_list[9]}}</th>\r\n              <th class=\"w100 text-center\" *ngIf=\"header_list[10]\">{{header_list[10]}}</th>\r\n              <th class=\"w100 text-center\" *ngIf=\"header_list[11]\">{{header_list[11]}}</th>\r\n              <th class=\"w100 text-center\" *ngIf=\"header_list[12]\">{{header_list[12]}}</th>\r\n              <th class=\"w100 text-center\" *ngIf=\"header_list[13]\">{{header_list[13]}}</th>\r\n              <th class=\"w100 text-center\" *ngIf=\"header_list[14]\">{{header_list[14]}}</th>\r\n              <th class=\"w100 text-center\" *ngIf=\"header_list[15]\">{{header_list[15]}}</th>\r\n              <th class=\"w100 text-center\" *ngIf=\"header_list[16]\">{{header_list[16]}}</th>\r\n              <th class=\"w100 text-center\" *ngIf=\"header_list[17]\">{{header_list[17]}}</th>\r\n              <th class=\"w100 text-center\" *ngIf=\"header_list[18]\">{{header_list[18]}}</th>\r\n              <th class=\"w100 text-center\" *ngIf=\"header_list[19]\">{{header_list[19]}}</th>\r\n              <th class=\"w100 text-center\" *ngIf=\"header_list[20]\">{{header_list[20]}}</th>\r\n              <th class=\"w100 text-center\" *ngIf=\"header_list[21]\">{{header_list[21]}}</th>\r\n              <th class=\"w100 text-center\" *ngIf=\"header_list[22]\">{{header_list[22]}}</th>\r\n              <th class=\"w100 text-center\" *ngIf=\"header_list[23]\">{{header_list[23]}}</th>\r\n              <th class=\"w100 text-center\" *ngIf=\"header_list[24]\">{{header_list[24]}}</th>\r\n              <th class=\"w100 text-center\" *ngIf=\"header_list[25]\">{{header_list[25]}}</th>\r\n              <th class=\"w100 text-center\" *ngIf=\"header_list[26]\">{{header_list[26]}}</th>\r\n              <th class=\"w100 text-center\" *ngIf=\"header_list[27]\">{{header_list[27]}}</th>\r\n              <th class=\"w100 text-center\" *ngIf=\"header_list[28]\">{{header_list[28]}}</th>\r\n              <th class=\"w100 text-center\" *ngIf=\"header_list[29]\">{{header_list[29]}}</th>\r\n              <th class=\"w100 text-center\" *ngIf=\"header_list[30]\">{{header_list[30]}}</th>\r\n              <th class=\"w100 text-center\" *ngIf=\"header_list[31]\">{{header_list[31]}}</th>\r\n              <th class=\"w100 text-center\" *ngIf=\"header_list[32]\">{{header_list[32]}}</th>\r\n              <th class=\"w100 text-center\" *ngIf=\"header_list[33]\">{{header_list[33]}}</th>\r\n              <th class=\"w100 text-center\" *ngIf=\"header_list[34]\">{{header_list[34]}}</th>\r\n              <th class=\"w100 text-center\" *ngIf=\"header_list[35]\">{{header_list[35]}}</th>\r\n              <th class=\"w100 text-center\" *ngIf=\"header_list[36]\">{{header_list[36]}}</th>\r\n              <th class=\"w100 text-center\" *ngIf=\"header_list[37]\">{{header_list[37]}}</th>\r\n              <th class=\"w100 text-center\" *ngIf=\"header_list[38]\">{{header_list[38]}}</th>\r\n              <th class=\"w100 text-center\" *ngIf=\"header_list[39]\">{{header_list[39]}}</th>\r\n              <th class=\"w100 text-center\" *ngIf=\"header_list[40]\">{{header_list[40]}}</th>\r\n\r\n            </tr>\r\n          </table>\r\n        </div>\r\n        <!-- <div class=\"table-head bdrt\">\r\n          <table>\r\n            <tr>\r\n              <th class=\"w50\">&nbsp;</th>\r\n              <th class=\"w150\"></th>\r\n              <th class=\"w150\"></th>\r\n              <th class=\"w150\"></th>\r\n              <th class=\"w150\"></th>\r\n              <th class=\"w150\"></th>\r\n              <th class=\"w150\"></th>\r\n              <th class=\"w150\"></th>\r\n            </tr>\r\n          </table>\r\n        </div> -->\r\n      </div>\r\n      <div class=\"table-container\" *ngIf=\"secondaryProductReportList.length\">\r\n        <div class=\"table-content\">\r\n          <table>\r\n            <ng-container *ngIf=\"!loader\">\r\n              <tr *ngFor=\"let val of secondaryProductReportList; let i = index\">\r\n                <td class=\"w50\">{{ i + sr_no + 1}}</td>\r\n                <td class=\"w100 text-center\">{{val.state}}</td>\r\n                <td class=\"w100 text-center\">{{val.total_influencer}}</td>\r\n                <td class=\"w100 text-center\" *ngFor=\"let val2 of val.month_wise_coupon_data;\">\r\n                    {{val2.total_coupon}}/{{val2.total_influencer_point}}\r\n                </td>   \r\n              </tr>\r\n            </ng-container>\r\n            <ng-container *ngIf=\"loader\">\r\n              <tr class=\"sk-loading\" *ngFor=\"let row of [].constructor(10);\">\r\n                <td class=\"w50\">\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n                <td class=\"w150\">\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n                <td class=\"w200\">\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n                <td class=\"w60\">\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n                <td class=\"w120\">\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n                <td class=\"w100\">\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n                <td class=\"w100\">\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n                <td class=\"w100\">\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n                <td class=\"w100\">\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n                <td class=\"w220\">\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n                <td class=\"w100\">\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n                <td class=\"padding0 w350\">\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n              </tr>\r\n            </ng-container>\r\n          </table>\r\n        </div>\r\n      </div>\r\n      <ng-container *ngIf=\"secondaryProductReportList.length == 0\">\r\n        <app-not-result-found></app-not-result-found>\r\n      </ng-container>\r\n    </div>\r\n  </div>\r\n  <div class=\"fab-btns\">\r\n    <button class=\"pulse excel\" mat-fab color=\"primary\" [matMenuTriggerFor]=\"menu\"\r\n      *ngIf=\"login_data.download_product_wise_secondary_report=='1'\">\r\n      <i class=\"material-icons\">apps</i>\r\n      Action\r\n    </button>\r\n    <mat-menu #menu=\"matMenu\">\r\n      <button mat-menu-item (click)=\"getproductWiseSecondaryReportExcel();\"\r\n        *ngIf=\"secondaryProductReportList.length > 0 && login_data.download_product_wise_secondary_report=='1'\">\r\n        <mat-icon>download</mat-icon>\r\n        <span>Download in excel</span>\r\n      </button>\r\n    </mat-menu>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/loyalty-report/loyalty-report-influencer-monthwise-scan/loyalty-report-influencer-monthwise-scan.component.scss":
/*!*********************************************************************************************************************************!*\
  !*** ./src/app/loyalty-report/loyalty-report-influencer-monthwise-scan/loyalty-report-influencer-monthwise-scan.component.scss ***!
  \*********************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/loyalty-report/loyalty-report-influencer-monthwise-scan/loyalty-report-influencer-monthwise-scan.component.ts":
/*!*******************************************************************************************************************************!*\
  !*** ./src/app/loyalty-report/loyalty-report-influencer-monthwise-scan/loyalty-report-influencer-monthwise-scan.component.ts ***!
  \*******************************************************************************************************************************/
/*! exports provided: LoyaltyReportInfluencerMonthwiseScanComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoyaltyReportInfluencerMonthwiseScanComponent", function() { return LoyaltyReportInfluencerMonthwiseScanComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng6-toastr-notifications */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/ng6-toastr-notifications/fesm5/ng6-toastr-notifications.js");
/* harmony import */ var src_app_bottom_sheet_bottom_sheet_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/bottom-sheet/bottom-sheet.component */ "./src/app/bottom-sheet/bottom-sheet.component.ts");
/* harmony import */ var src_app_localstorage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/localstorage.service */ "./src/app/localstorage.service.ts");
/* harmony import */ var src_services_DatabaseService__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/_services/DatabaseService */ "./src/_services/DatabaseService.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! moment */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var src_app_reports_prouct_wise_secondary_report_product_wise_secondary_report_modal_product_wise_secondary_report_modal_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/reports/prouct-wise-secondary-report/product-wise-secondary-report-modal/product-wise-secondary-report-modal.component */ "./src/app/reports/prouct-wise-secondary-report/product-wise-secondary-report-modal/product-wise-secondary-report-modal.component.ts");









var LoyaltyReportInfluencerMonthwiseScanComponent = /** @class */ (function () {
    function LoyaltyReportInfluencerMonthwiseScanComponent(bottomSheet, service, toast, session, dialog) {
        this.bottomSheet = bottomSheet;
        this.service = service;
        this.toast = toast;
        this.session = session;
        this.dialog = dialog;
        this.loader = false;
        this.secondaryProductReportList = [];
        this.search = {};
        this.login_data = [];
        this.page_limit = 50;
        this.start = 0;
        this.pagenumber = '';
        this.filter = {};
        this.filtering = false;
        this.length = 0;
        this.header_list = [];
        this.login_data = this.session.getSession();
        this.login_data = this.login_data.value.data;
    }
    LoyaltyReportInfluencerMonthwiseScanComponent.prototype.ngOnInit = function () {
        this.length = 0;
        this.getSecondaryProductWiseReport('', this.length);
    };
    LoyaltyReportInfluencerMonthwiseScanComponent.prototype.refresh = function () {
        this.start = 0;
        this.getSecondaryProductWiseReport('', this.length);
    };
    LoyaltyReportInfluencerMonthwiseScanComponent.prototype.pervious = function () {
        this.start = this.start - this.page_limit;
        this.getSecondaryProductWiseReport('', this.length);
    };
    LoyaltyReportInfluencerMonthwiseScanComponent.prototype.nextPage = function () {
        this.start = this.start + this.page_limit;
        this.getSecondaryProductWiseReport('', this.length);
    };
    LoyaltyReportInfluencerMonthwiseScanComponent.prototype.getSecondaryProductWiseReport = function (action, length) {
        var _this = this;
        this.loader = true;
        if (this.pagenumber > this.total_page) {
            this.pagenumber = this.total_page;
            this.start = this.pageCount - this.page_limit;
        }
        if (this.start < 0) {
            this.start = 0;
        }
        // if (this.filter.date_from) {
        //   this.filter.date_from = moment(this.filter.date_from).format('YYYY-MM-DD');
        // }
        // if (this.filter.date_to) {
        //   this.filter.date_to = moment(this.filter.date_to).format('YYYY-MM-DD');
        // }
        // if (this.filter.date) this.filtering = true;
        // this.filter.mode = 0;
        // this.filter.limit = length;
        // if (action == 'refresh') {
        //   this.filter.date_from = '';
        //   this.filter.date_to = '';
        // }
        this.service.post_rqst({ 'start': this.start, 'pagelimit': this.page_limit, 'filter': this.filter }, 'LoyaltyReport/monthly_scan_report').subscribe(function (resp) {
            console.log(resp);
            if (resp['statusCode'] == 200) {
                _this.secondaryProductReportList = resp['result'];
                _this.header_list = resp.header;
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
                _this.loader = false;
            }
            else {
                _this.toast.errorToastr(resp['statusMsg']);
            }
        }, function (err) {
            _this.loader = false;
        });
    };
    LoyaltyReportInfluencerMonthwiseScanComponent.prototype.onDate = function (event) {
        console.log(event);
        this.filter.date_to = moment__WEBPACK_IMPORTED_MODULE_7__(event.target.value).format('YYYY-MM-DD');
        this.filter.date_from = moment__WEBPACK_IMPORTED_MODULE_7__(event.target.value).format('YYYY-MM-DD');
        this.getSecondaryProductWiseReport('', this.length);
    };
    LoyaltyReportInfluencerMonthwiseScanComponent.prototype.openBottomSheet = function () {
        var _this = this;
        this.bottomSheet.open(src_app_bottom_sheet_bottom_sheet_component__WEBPACK_IMPORTED_MODULE_4__["BottomSheetComponent"], {
            data: {
                'filterPage': 'product_wise_secondary',
            }
        });
        this.bottomSheet._openedBottomSheetRef.afterDismissed().subscribe(function (data) {
            _this.filter.date_from = data.date_from;
            _this.filter.date_to = data.date_to;
            // this.search.userId = data.user_id;
            _this.length = 0;
            _this.getSecondaryProductWiseReport(_this.filter.date_to, _this.filter.date_from);
        });
    };
    LoyaltyReportInfluencerMonthwiseScanComponent.prototype.getproductWiseSecondaryReportExcel = function () {
        var _this = this;
        this.loader = true;
        this.service.post_rqst({ 'search': this.search }, "LoyaltyReport/excel_monthly_scan_report").subscribe(function (result) {
            if (result['msg'] == true) {
                _this.loader = false;
                window.open(_this.service.downloadUrl + result['filename']);
                _this.getSecondaryProductWiseReport('', _this.length);
            }
        });
    };
    LoyaltyReportInfluencerMonthwiseScanComponent.prototype.openProductWiseSecondarySubCategoryReport = function (drId, category, startDate, endDate, salesUserId) {
        var dialogRef = this.dialog.open(src_app_reports_prouct_wise_secondary_report_product_wise_secondary_report_modal_product_wise_secondary_report_modal_component__WEBPACK_IMPORTED_MODULE_8__["ProductWiseSecondaryReportModalComponent"], {
            width: '800px',
            panelClass: 'cs-modal',
            data: {
                'from': 'product-wise-sub-category',
                drId: drId,
                category: category,
                startDate: startDate,
                endDate: endDate,
                salesUserId: salesUserId
            }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result != false) {
            }
        });
    };
    LoyaltyReportInfluencerMonthwiseScanComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-loyalty-report-influencer-monthwise-scan',
            template: __webpack_require__(/*! ./loyalty-report-influencer-monthwise-scan.component.html */ "./src/app/loyalty-report/loyalty-report-influencer-monthwise-scan/loyalty-report-influencer-monthwise-scan.component.html"),
            styles: [__webpack_require__(/*! ./loyalty-report-influencer-monthwise-scan.component.scss */ "./src/app/loyalty-report/loyalty-report-influencer-monthwise-scan/loyalty-report-influencer-monthwise-scan.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatBottomSheet"], src_services_DatabaseService__WEBPACK_IMPORTED_MODULE_6__["DatabaseService"], ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_3__["ToastrManager"], src_app_localstorage_service__WEBPACK_IMPORTED_MODULE_5__["sessionStorage"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]])
    ], LoyaltyReportInfluencerMonthwiseScanComponent);
    return LoyaltyReportInfluencerMonthwiseScanComponent;
}());



/***/ }),

/***/ "./src/app/loyalty-report/loyalty-report-influencer-redemption/loyalty-report-influencer-redemption.component.html":
/*!*************************************************************************************************************************!*\
  !*** ./src/app/loyalty-report/loyalty-report-influencer-redemption/loyalty-report-influencer-redemption.component.html ***!
  \*************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-container\">\r\n\r\n  <div class=\"tools-container\">\r\n    <h2>INFLUENCER REDEMPTION REPORT</h2>\r\n    <div class=\"left-auto df ac flex-gap-10\">\r\n      <button mat-icon-button matTooltip=\"Refresh\" (click)=\"refresh()\">\r\n        <i class=\"material-icons\">refresh</i>\r\n      </button>\r\n      <button mat-icon-button matTooltip=\"Filter\" (click)=\"openBottomSheet()\">\r\n        <i class=\"material-icons\">filter_alt</i>\r\n      </button>\r\n\r\n\r\n\r\n      <div class=\"pagination\" *ngIf=\"secondaryProductReportList.length > 0\">\r\n        <div class=\"pagination-content\">\r\n          Pages\r\n          <span>{{pagenumber}}</span>\r\n          of\r\n          <span>{{total_page}}</span>\r\n        </div>\r\n        <div class=\"page-nav\">\r\n\r\n          <button mat-icon-button matTooltip=\"Older\" (click)=\"pervious()\" [disabled]=\"start == 0 || total_page == 0\">\r\n            <i class=\"material-icons\">navigate_before</i>\r\n          </button>\r\n          <button mat-icon-button matTooltip=\"Newer\" (click)=\"nextPage()\" [disabled]=\"pagenumber == total_page \">\r\n            <i class=\"material-icons\">navigate_next</i>\r\n          </button>\r\n        </div>\r\n      </div>\r\n\r\n\r\n    </div>\r\n  </div>\r\n  <div class=\"container container-scroll\">\r\n    <div class=\"cs-table horizontal-scroll\">\r\n      <div class=\"sticky-head\">\r\n        <div class=\"table-head\">\r\n          <table>\r\n            <tr>\r\n              <th class=\"w50\">S.No</th>\r\n              <th class=\"w150\">Name / Mobile No.</th>\r\n              <th class=\"w200\">State</th>\r\n              <th class=\"w150\">District</th>\r\n              <th class=\"w100\">City</th>\r\n              <th class=\"w100\"> Request of Redeem Points Count\r\n                <div class=\"sorting\">\r\n                  <a class=\"\" (click)=\"this.filter.sorting_column = 'redeem_count';this.filter.sorting_type='ASC';getSecondaryProductWiseReport('','')\">\r\n                    <i class=\"material-icons\">arrow_drop_up</i>\r\n                  </a>\r\n                  <a class=\"\" (click)=\"this.filter.sorting_column = 'redeem_count';this.filter.sorting_type='DESC';getSecondaryProductWiseReport('','')\">\r\n                    <i class=\"material-icons\">arrow_drop_down</i>\r\n                  </a>\r\n                </div>\r\n              </th>\r\n              <th class=\"w100\"> Value of Redeem points.\r\n                <div class=\"sorting\">\r\n                  <a class=\"\" (click)=\"this.filter.sorting_column = 'redeem_point';this.filter.sorting_type='ASC';getSecondaryProductWiseReport('','')\">\r\n                    <i class=\"material-icons\">arrow_drop_up</i>\r\n                  </a>\r\n                  <a class=\"\" (click)=\"this.filter.sorting_column = 'redeem_point';this.filter.sorting_type='DESC';getSecondaryProductWiseReport('','')\">\r\n                    <i class=\"material-icons\">arrow_drop_down</i>\r\n                  </a>\r\n                </div>\r\n\r\n              </th>\r\n              <th class=\"w100\">Redeem Last Date</th>\r\n\r\n\r\n\r\n\r\n            </tr>\r\n          </table>\r\n        </div>\r\n        <div class=\"table-head bdrt\">\r\n          <table>\r\n            <tr>\r\n              <th class=\"w50\">&nbsp;</th>\r\n              <th class=\"w150\">\r\n                <div class=\"th-search-acmt\">\r\n                  <mat-form-field class=\"example-full-width cs-input select-input\">\r\n                    <input matInput placeholder=\"Search...\" type=\"text\" name=\"name\" [(ngModel)]=\"filter.name\"\r\n                      (keyup.enter)=\"getSecondaryProductWiseReport('','')\">\r\n                  </mat-form-field>\r\n                </div>\r\n              </th>\r\n              <th class=\"w200\">\r\n                <div class=\"th-search-acmt\">\r\n                  <mat-form-field class=\"cs-input select-input\">\r\n                    <mat-select name=\"state\" [(ngModel)]=\"filter.state\" (selectionChange)=\"getSecondaryProductWiseReport('','')\">\r\n                      <mat-option *ngFor=\"let state of states\"\r\n                        value=\"{{state.state_name}}\">{{state.state_name}}</mat-option>\r\n                    </mat-select>\r\n                  </mat-form-field>\r\n                </div>\r\n              </th>\r\n              <th class=\"w150\">\r\n                <div class=\"th-search-acmt\">\r\n                  <mat-form-field class=\"example-full-width cs-input select-input\">\r\n                    <input matInput placeholder=\"Search...\" type=\"text\" name=\"district\" [(ngModel)]=\"filter.district\"\r\n                      (keyup.enter)=\"getSecondaryProductWiseReport('','')\">\r\n                  </mat-form-field>\r\n                </div>\r\n              </th>\r\n              <th class=\"w100\"></th>\r\n              <th class=\"w100\"></th>\r\n              <th class=\"w100\"></th>\r\n              <th class=\"w100\"></th>\r\n\r\n\r\n\r\n            </tr>\r\n          </table>\r\n        </div>\r\n      </div>\r\n      <div class=\"table-container\">\r\n        <div class=\"table-content\">\r\n          <table>\r\n            <ng-container *ngIf=\"!loader\">\r\n              <tr *ngFor=\"let report of secondaryProductReportList; let i=index\">\r\n                <td class=\"w50\">{{i+1+sr_no}}</td>\r\n\r\n                <td class=\"w150\">{{report.name | titlecase}}/{{report.mobile_no}}</td>\r\n                <td class=\"w200\">{{report.state}}</td>\r\n                <td class=\"w150\">{{report.district}}</td>\r\n                <td class=\"w100\">{{report.city}}</td>\r\n                <td class=\"w100\">{{report.redeem_count}}</td>\r\n                <td class=\"w100\">{{report.redeem_point}}</td>\r\n                <td class=\"w100\">{{report.redeem_last_date | date : 'dd MMM yyy'}}</td>\r\n\r\n\r\n\r\n              </tr>\r\n            </ng-container>\r\n            <ng-container *ngIf=\"loader\">\r\n              <tr class=\"sk-loading\" *ngFor=\"let row of [].constructor(10);\">\r\n                <td class=\"w50\">\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n                <td class=\"w150\">\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n                <td class=\"w200\">\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n                <td class=\"w150\">\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n\r\n                <td class=\"w100\">\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n                <td class=\"w100\">\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n                <td class=\"w100\">\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n                <td class=\"w100\">\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n\r\n              </tr>\r\n            </ng-container>\r\n          </table>\r\n        </div>\r\n      </div>\r\n      <ng-container *ngIf=\"secondaryProductReportList.length == 0\">\r\n        <app-not-result-found></app-not-result-found>\r\n      </ng-container>\r\n    </div>\r\n  </div>\r\n  <div class=\"fab-btns\">\r\n    <button  mat-fab class=\"excel\"  *ngIf=\"secondaryProductReportList.length > 0 && logined_user_data.download_primary_target_report==1\" (click)=\"lastBtnValue('excel'); getproductWiseSecondaryReportExcel();\"  [ngClass]=\"{'pulse': fabBtnValue=='excel'}\" >\r\n      <img src=\"assets/img/excel.svg\">\r\n      Download Excel\r\n    </button>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/loyalty-report/loyalty-report-influencer-redemption/loyalty-report-influencer-redemption.component.scss":
/*!*************************************************************************************************************************!*\
  !*** ./src/app/loyalty-report/loyalty-report-influencer-redemption/loyalty-report-influencer-redemption.component.scss ***!
  \*************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/loyalty-report/loyalty-report-influencer-redemption/loyalty-report-influencer-redemption.component.ts":
/*!***********************************************************************************************************************!*\
  !*** ./src/app/loyalty-report/loyalty-report-influencer-redemption/loyalty-report-influencer-redemption.component.ts ***!
  \***********************************************************************************************************************/
/*! exports provided: LoyaltyReportInfluencerRedemptionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoyaltyReportInfluencerRedemptionComponent", function() { return LoyaltyReportInfluencerRedemptionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng6-toastr-notifications */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/ng6-toastr-notifications/fesm5/ng6-toastr-notifications.js");
/* harmony import */ var src_app_bottom_sheet_bottom_sheet_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/bottom-sheet/bottom-sheet.component */ "./src/app/bottom-sheet/bottom-sheet.component.ts");
/* harmony import */ var src_app_localstorage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/localstorage.service */ "./src/app/localstorage.service.ts");
/* harmony import */ var src_services_DatabaseService__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/_services/DatabaseService */ "./src/_services/DatabaseService.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! moment */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var src_app_reports_prouct_wise_secondary_report_product_wise_secondary_report_modal_product_wise_secondary_report_modal_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/reports/prouct-wise-secondary-report/product-wise-secondary-report-modal/product-wise-secondary-report-modal.component */ "./src/app/reports/prouct-wise-secondary-report/product-wise-secondary-report-modal/product-wise-secondary-report-modal.component.ts");









var LoyaltyReportInfluencerRedemptionComponent = /** @class */ (function () {
    function LoyaltyReportInfluencerRedemptionComponent(bottomSheet, service, toast, session, dialog) {
        this.bottomSheet = bottomSheet;
        this.service = service;
        this.toast = toast;
        this.session = session;
        this.dialog = dialog;
        this.loader = false;
        this.secondaryProductReportList = [];
        this.search = {};
        this.login_data = [];
        this.page_limit = 50;
        this.start = 0;
        this.pagenumber = '';
        this.filter = {};
        this.filtering = false;
        this.length = 0;
        this.fabBtnValue = 'add';
        this.sorting_type = '';
        this.states = [];
        this.assign_login_data = this.session.getSession();
        this.logined_user_data = this.assign_login_data.value.data;
        this.getStateList();
    }
    LoyaltyReportInfluencerRedemptionComponent.prototype.ngOnInit = function () {
        this.length = 0;
        this.getSecondaryProductWiseReport('', this.length);
    };
    LoyaltyReportInfluencerRedemptionComponent.prototype.refresh = function () {
        this.start = 0;
        this.filter = {};
        this.getSecondaryProductWiseReport('', this.length);
    };
    LoyaltyReportInfluencerRedemptionComponent.prototype.pervious = function () {
        this.start = this.start - this.page_limit;
        this.getSecondaryProductWiseReport('', this.length);
    };
    LoyaltyReportInfluencerRedemptionComponent.prototype.nextPage = function () {
        this.start = this.start + this.page_limit;
        this.getSecondaryProductWiseReport('', this.length);
    };
    LoyaltyReportInfluencerRedemptionComponent.prototype.getSecondaryProductWiseReport = function (action, length) {
        var _this = this;
        this.loader = true;
        if (this.pagenumber > this.total_page) {
            this.pagenumber = this.total_page;
            this.start = this.pageCount - this.page_limit;
        }
        if (this.start < 0) {
            this.start = 0;
        }
        if (this.sorting_type) {
            this.filter.sorting_order = this.sorting_type;
            this.filter.sorting_column = 'redeem_point';
        }
        //  if (this.filter.date_from) {
        //       this.filter.date_from = moment(this.filter.date_from).format('YYYY-MM-DD');
        //     }
        //     if (this.filter.date_to) {
        //       this.filter.date_to = moment(this.filter.date_to).format('YYYY-MM-DD');
        //     }
        //     if (this.filter.date) this.filtering = true;
        //     this.filter.mode = 0;
        //     this.filter.limit = length;
        //     if (action == 'refresh') {
        //       this.filter.date_from = '';
        //       this.filter.date_to = '';
        //     }
        this.service.post_rqst({ 'start': this.start, 'pagelimit': this.page_limit, 'filter': this.filter }, 'LoyaltyReport/influencer_redemption_report').subscribe(function (resp) {
            console.log(resp);
            if (resp['statusCode'] == 200) {
                _this.secondaryProductReportList = resp['result'];
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
                _this.loader = false;
            }
            else {
                _this.toast.errorToastr(resp['statusMsg']);
            }
        }, function (err) {
            _this.loader = false;
        });
    };
    LoyaltyReportInfluencerRedemptionComponent.prototype.onDate = function (event) {
        console.log(event);
        this.filter.date_to = moment__WEBPACK_IMPORTED_MODULE_7__(event.target.value).format('YYYY-MM-DD');
        this.filter.date_from = moment__WEBPACK_IMPORTED_MODULE_7__(event.target.value).format('YYYY-MM-DD');
        this.getSecondaryProductWiseReport('', this.length);
    };
    LoyaltyReportInfluencerRedemptionComponent.prototype.openBottomSheet = function () {
        var _this = this;
        this.bottomSheet.open(src_app_bottom_sheet_bottom_sheet_component__WEBPACK_IMPORTED_MODULE_4__["BottomSheetComponent"], {
            data: {
                'filterPage': 'product_wise_secondary',
            }
        });
        this.bottomSheet._openedBottomSheetRef.afterDismissed().subscribe(function (data) {
            _this.filter.date_from = data.date_from;
            _this.filter.date_to = data.date_to;
            // this.search.userId = data.user_id;
            _this.length = 0;
            _this.getSecondaryProductWiseReport(_this.filter.date_to, _this.filter.date_from);
        });
    };
    LoyaltyReportInfluencerRedemptionComponent.prototype.getproductWiseSecondaryReportExcel = function () {
        var _this = this;
        this.loader = true;
        this.service.post_rqst({ 'filter': this.filter }, "LoyaltyReport/excel_influencer_redemption_report").subscribe(function (result) {
            if (result['msg'] == true) {
                _this.loader = false;
                window.open(_this.service.downloadUrl + result['filename']);
                _this.getSecondaryProductWiseReport('', _this.length);
            }
        });
    };
    LoyaltyReportInfluencerRedemptionComponent.prototype.openProductWiseSecondarySubCategoryReport = function (drId, category, startDate, endDate, salesUserId) {
        var dialogRef = this.dialog.open(src_app_reports_prouct_wise_secondary_report_product_wise_secondary_report_modal_product_wise_secondary_report_modal_component__WEBPACK_IMPORTED_MODULE_8__["ProductWiseSecondaryReportModalComponent"], {
            width: '800px',
            panelClass: 'cs-modal',
            data: {
                'from': 'product-wise-sub-category',
                drId: drId,
                category: category,
                startDate: startDate,
                endDate: endDate,
                salesUserId: salesUserId
            }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result != false) {
            }
        });
    };
    LoyaltyReportInfluencerRedemptionComponent.prototype.lastBtnValue = function (value) {
        this.fabBtnValue = value;
    };
    LoyaltyReportInfluencerRedemptionComponent.prototype.getStateList = function () {
        var _this = this;
        this.service.post_rqst(0, "Master/getAllState").subscribe((function (result) {
            if (result['statusCode'] == 200) {
                _this.states = result['all_state'];
            }
            else {
                _this.toast.errorToastr(result['statusMsg']);
            }
        }));
    };
    LoyaltyReportInfluencerRedemptionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-loyalty-report-influencer-redemption',
            template: __webpack_require__(/*! ./loyalty-report-influencer-redemption.component.html */ "./src/app/loyalty-report/loyalty-report-influencer-redemption/loyalty-report-influencer-redemption.component.html"),
            styles: [__webpack_require__(/*! ./loyalty-report-influencer-redemption.component.scss */ "./src/app/loyalty-report/loyalty-report-influencer-redemption/loyalty-report-influencer-redemption.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatBottomSheet"], src_services_DatabaseService__WEBPACK_IMPORTED_MODULE_6__["DatabaseService"], ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_3__["ToastrManager"], src_app_localstorage_service__WEBPACK_IMPORTED_MODULE_5__["sessionStorage"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]])
    ], LoyaltyReportInfluencerRedemptionComponent);
    return LoyaltyReportInfluencerRedemptionComponent;
}());



/***/ }),

/***/ "./src/app/loyalty-report/loyalty-report-influencer-reward-point/loyalty-report-influencer-reward-point.component.html":
/*!*****************************************************************************************************************************!*\
  !*** ./src/app/loyalty-report/loyalty-report-influencer-reward-point/loyalty-report-influencer-reward-point.component.html ***!
  \*****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-container\">\r\n\r\n  <div class=\"tools-container\">\r\n    <h2>INFLUENCER REWARD POINTS</h2>\r\n    <div class=\"left-auto df ac flex-gap-10\">\r\n      <button mat-icon-button matTooltip=\"Refresh\" (click)=\"refresh()\">\r\n        <i class=\"material-icons\">refresh</i>\r\n      </button>\r\n      <button mat-icon-button matTooltip=\"Filter\" (click)=\"openBottomSheet()\">\r\n        <i class=\"material-icons\">filter_alt</i>\r\n      </button>\r\n\r\n      <div class=\"pagination\" *ngIf=\"secondaryProductReportList.length > 0\">\r\n        <div class=\"pagination-content\">\r\n          Pages\r\n          <span>{{pagenumber}}</span>\r\n          of\r\n          <span>{{total_page}}</span>\r\n        </div>\r\n        <div class=\"page-nav\">\r\n\r\n          <button mat-icon-button matTooltip=\"Older\" (click)=\"pervious()\" [disabled]=\"start == 0 || total_page == 0\">\r\n            <i class=\"material-icons\">navigate_before</i>\r\n          </button>\r\n          <button mat-icon-button matTooltip=\"Newer\" (click)=\"nextPage()\" [disabled]=\"pagenumber == total_page \">\r\n            <i class=\"material-icons\">navigate_next</i>\r\n          </button>\r\n        </div>\r\n      </div>\r\n\r\n\r\n    </div>\r\n  </div>\r\n  <div class=\"container container-scroll\">\r\n    <div class=\"cs-table horizontal-scroll\">\r\n      <div class=\"sticky-head\">\r\n        <div class=\"table-head\">\r\n          <table>\r\n            <tr>\r\n              <th class=\"w50\">S.No</th>\r\n              <th class=\"w150\">Name / Mobile No.</th>\r\n              <th class=\"w150\">State</th>\r\n              <th class=\"w150\">District</th>\r\n              <th class=\"w100\">City</th>\r\n              <th class=\"w100\">Refer Points\r\n\r\n\r\n              </th>\r\n              <th class=\"w100\">Welcome Points\r\n\r\n\r\n              </th>\r\n\r\n\r\n\r\n            </tr>\r\n          </table>\r\n        </div>\r\n        <div class=\"table-head bdrt\">\r\n          <table>\r\n            <tr>\r\n              <th class=\"w50\">&nbsp;</th>\r\n              <th class=\"w150\">\r\n                <div class=\"th-search-acmt\">\r\n                  <mat-form-field class=\"example-full-width cs-input select-input\">\r\n                    <input matInput placeholder=\"Search...\" type=\"text\" name=\"name\" [(ngModel)]=\"filter.name\"\r\n                      (keyup.enter)=\"getSecondaryProductWiseReport('','')\">\r\n                  </mat-form-field>\r\n                </div>\r\n              </th>\r\n              <th class=\"w150\">\r\n                <div class=\"th-search-acmt\">\r\n                  <mat-form-field class=\"cs-input select-input\">\r\n                    <mat-select name=\"state\" [(ngModel)]=\"filter.state\" (selectionChange)=\"getSecondaryProductWiseReport('','')\">\r\n                      <mat-option *ngFor=\"let state of states\"\r\n                        value=\"{{state.state_name}}\">{{state.state_name}}</mat-option>\r\n                    </mat-select>\r\n                  </mat-form-field>\r\n                </div>\r\n              </th>\r\n              <th class=\"w150\">\r\n                <div class=\"th-search-acmt\">\r\n                  <mat-form-field class=\"example-full-width cs-input select-input\">\r\n                    <input matInput placeholder=\"Search...\" type=\"text\" name=\"district\" [(ngModel)]=\"filter.district\"\r\n                      (keyup.enter)=\"getSecondaryProductWiseReport('','')\">\r\n                  </mat-form-field>\r\n                </div>\r\n              </th>\r\n              <th class=\"w100\"></th>\r\n              <!-- <th class=\"w100\">\r\n\r\n              </th>\r\n              <th class=\"w100\">\r\n\r\n              </th> -->\r\n              <th class=\"w100 text-center\">&nbsp;</th>\r\n              <th class=\"w100 text-center\">&nbsp;</th>\r\n\r\n\r\n\r\n\r\n            </tr>\r\n          </table>\r\n        </div>\r\n      </div>\r\n      <div class=\"table-container\">\r\n        <div class=\"table-content\">\r\n          <table>\r\n            <ng-container *ngIf=\"!loader\">\r\n              <tr *ngFor=\"let report of secondaryProductReportList; let i=index\">\r\n                <td class=\"w50\">{{i+1+sr_no}}</td>\r\n                <td class=\"w150\">{{report.name | titlecase}}/{{report.mobile_no}}</td>\r\n                <td class=\"w150\">{{report.state}}</td>\r\n                <td class=\"w150\">{{report.district}}</td>\r\n                <td class=\"w100\">{{report.city}}</td>\r\n                <td class=\"w100\">{{report.referral_point}}</td>\r\n                <td class=\"w100\">{{report.welcome_point}}</td>\r\n\r\n\r\n              </tr>\r\n            </ng-container>\r\n            <ng-container *ngIf=\"loader\">\r\n              <tr class=\"sk-loading\" *ngFor=\"let row of [].constructor(10);\">\r\n                <td class=\"w50\">\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n                <td class=\"w150\">\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n                <td class=\"w200\">\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n                <td class=\"w60\">\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n\r\n                <td class=\"w100\">\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n                <td class=\"w100\">\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n                <td class=\"w100\">\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n\r\n              </tr>\r\n            </ng-container>\r\n          </table>\r\n        </div>\r\n      </div>\r\n      <ng-container *ngIf=\"secondaryProductReportList.length == 0\">\r\n        <app-not-result-found></app-not-result-found>\r\n      </ng-container>\r\n    </div>\r\n  </div>\r\n  <div class=\"fab-btns\" *ngIf=\"secondaryProductReportList.length > 0 && logined_user_data.download_primary_target_report==1 \">\r\n    <button  mat-fab class=\"excel\"  (click)=\"lastBtnValue('excel'); getproductWiseSecondaryReportExcel();\"  [ngClass]=\"{'pulse': fabBtnValue=='excel'}\" >\r\n      <img src=\"assets/img/excel.svg\">\r\n      Download Excel\r\n    </button>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/loyalty-report/loyalty-report-influencer-reward-point/loyalty-report-influencer-reward-point.component.scss":
/*!*****************************************************************************************************************************!*\
  !*** ./src/app/loyalty-report/loyalty-report-influencer-reward-point/loyalty-report-influencer-reward-point.component.scss ***!
  \*****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/loyalty-report/loyalty-report-influencer-reward-point/loyalty-report-influencer-reward-point.component.ts":
/*!***************************************************************************************************************************!*\
  !*** ./src/app/loyalty-report/loyalty-report-influencer-reward-point/loyalty-report-influencer-reward-point.component.ts ***!
  \***************************************************************************************************************************/
/*! exports provided: LoyaltyReportInfluencerRewardPointComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoyaltyReportInfluencerRewardPointComponent", function() { return LoyaltyReportInfluencerRewardPointComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng6-toastr-notifications */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/ng6-toastr-notifications/fesm5/ng6-toastr-notifications.js");
/* harmony import */ var src_app_bottom_sheet_bottom_sheet_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/bottom-sheet/bottom-sheet.component */ "./src/app/bottom-sheet/bottom-sheet.component.ts");
/* harmony import */ var src_app_localstorage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/localstorage.service */ "./src/app/localstorage.service.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! moment */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var src_services_DatabaseService__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/_services/DatabaseService */ "./src/_services/DatabaseService.ts");
/* harmony import */ var src_app_reports_prouct_wise_secondary_report_product_wise_secondary_report_modal_product_wise_secondary_report_modal_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/reports/prouct-wise-secondary-report/product-wise-secondary-report-modal/product-wise-secondary-report-modal.component */ "./src/app/reports/prouct-wise-secondary-report/product-wise-secondary-report-modal/product-wise-secondary-report-modal.component.ts");









var LoyaltyReportInfluencerRewardPointComponent = /** @class */ (function () {
    function LoyaltyReportInfluencerRewardPointComponent(bottomSheet, service, toast, session, dialog) {
        this.bottomSheet = bottomSheet;
        this.service = service;
        this.toast = toast;
        this.session = session;
        this.dialog = dialog;
        this.loader = false;
        this.secondaryProductReportList = [];
        this.search = {};
        this.login_data = [];
        this.page_limit = 50;
        this.start = 0;
        this.pagenumber = '';
        this.filter = {};
        this.filtering = false;
        this.length = 0;
        this.fabBtnValue = 'add';
        this.sorting_type = '';
        this.states = [];
        this.assign_login_data = this.session.getSession();
        this.logined_user_data = this.assign_login_data.value.data;
        this.getStateList();
    }
    LoyaltyReportInfluencerRewardPointComponent.prototype.ngOnInit = function () {
        this.length = 0;
        this.getSecondaryProductWiseReport('', this.length);
    };
    LoyaltyReportInfluencerRewardPointComponent.prototype.refresh = function () {
        this.start = 0;
        this.filter = {};
        this.getSecondaryProductWiseReport('', this.length);
    };
    LoyaltyReportInfluencerRewardPointComponent.prototype.pervious = function () {
        this.start = this.start - this.page_limit;
        this.getSecondaryProductWiseReport('', this.length);
    };
    LoyaltyReportInfluencerRewardPointComponent.prototype.nextPage = function () {
        this.start = this.start + this.page_limit;
        this.getSecondaryProductWiseReport('', this.length);
    };
    LoyaltyReportInfluencerRewardPointComponent.prototype.getSecondaryProductWiseReport = function (action, length) {
        var _this = this;
        this.loader = true;
        if (this.pagenumber > this.total_page) {
            this.pagenumber = this.total_page;
            this.start = this.pageCount - this.page_limit;
        }
        if (this.start < 0) {
            this.start = 0;
        }
        //  if (this.filter.date_from) {
        //       this.filter.date_from = moment(this.filter.date_from).format('YYYY-MM-DD');
        //     }
        //     if (this.filter.date_to) {
        //       this.filter.date_to = moment(this.filter.date_to).format('YYYY-MM-DD');
        //     }
        //     if (this.filter.date) this.filtering = true;
        //     this.filter.mode = 0;
        //     this.filter.limit = length;
        //     if (action == 'refresh') {
        //       this.filter.date_from = '';
        //       this.filter.date_to = '';
        //     }
        this.service.post_rqst({ 'start': this.start, 'pagelimit': this.page_limit, 'filter': this.filter }, 'LoyaltyReport/influencer_reward_points').subscribe(function (resp) {
            console.log(resp);
            if (resp['statusCode'] == 200) {
                _this.secondaryProductReportList = resp['result'];
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
                _this.loader = false;
            }
            else {
                _this.toast.errorToastr(resp['statusMsg']);
            }
        }, function (err) {
            _this.loader = false;
        });
    };
    LoyaltyReportInfluencerRewardPointComponent.prototype.lastBtnValue = function (value) {
        this.fabBtnValue = value;
    };
    LoyaltyReportInfluencerRewardPointComponent.prototype.onDate = function (event) {
        console.log(event);
        this.filter.date_to = moment__WEBPACK_IMPORTED_MODULE_6__(event.target.value).format('YYYY-MM-DD');
        this.filter.date_from = moment__WEBPACK_IMPORTED_MODULE_6__(event.target.value).format('YYYY-MM-DD');
        this.getSecondaryProductWiseReport('', this.length);
    };
    LoyaltyReportInfluencerRewardPointComponent.prototype.openBottomSheet = function () {
        var _this = this;
        this.bottomSheet.open(src_app_bottom_sheet_bottom_sheet_component__WEBPACK_IMPORTED_MODULE_4__["BottomSheetComponent"], {
            data: {
                'filterPage': 'product_wise_secondary',
            }
        });
        this.bottomSheet._openedBottomSheetRef.afterDismissed().subscribe(function (data) {
            _this.filter.date_from = data.date_from;
            _this.filter.date_to = data.date_to;
            // this.search.userId = data.user_id;
            _this.length = 0;
            _this.getSecondaryProductWiseReport(_this.filter.date_to, _this.filter.date_from);
        });
    };
    LoyaltyReportInfluencerRewardPointComponent.prototype.getproductWiseSecondaryReportExcel = function () {
        var _this = this;
        this.loader = true;
        this.service.post_rqst({ 'filter': this.filter }, "LoyaltyReport/excel_influencer_reward_points").subscribe(function (result) {
            if (result['msg'] == true) {
                _this.loader = false;
                window.open(_this.service.downloadUrl + result['filename']);
                _this.getSecondaryProductWiseReport('', _this.length);
            }
        });
    };
    LoyaltyReportInfluencerRewardPointComponent.prototype.openProductWiseSecondarySubCategoryReport = function (drId, category, startDate, endDate, salesUserId) {
        var dialogRef = this.dialog.open(src_app_reports_prouct_wise_secondary_report_product_wise_secondary_report_modal_product_wise_secondary_report_modal_component__WEBPACK_IMPORTED_MODULE_8__["ProductWiseSecondaryReportModalComponent"], {
            width: '800px',
            panelClass: 'cs-modal',
            data: {
                'from': 'product-wise-sub-category',
                drId: drId,
                category: category,
                startDate: startDate,
                endDate: endDate,
                salesUserId: salesUserId
            }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result != false) {
            }
        });
    };
    LoyaltyReportInfluencerRewardPointComponent.prototype.getStateList = function () {
        var _this = this;
        this.service.post_rqst(0, "Master/getAllState").subscribe((function (result) {
            if (result['statusCode'] == 200) {
                _this.states = result['all_state'];
            }
            else {
                _this.toast.errorToastr(result['statusMsg']);
            }
        }));
    };
    LoyaltyReportInfluencerRewardPointComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-loyalty-report-influencer-reward-point',
            template: __webpack_require__(/*! ./loyalty-report-influencer-reward-point.component.html */ "./src/app/loyalty-report/loyalty-report-influencer-reward-point/loyalty-report-influencer-reward-point.component.html"),
            styles: [__webpack_require__(/*! ./loyalty-report-influencer-reward-point.component.scss */ "./src/app/loyalty-report/loyalty-report-influencer-reward-point/loyalty-report-influencer-reward-point.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatBottomSheet"], src_services_DatabaseService__WEBPACK_IMPORTED_MODULE_7__["DatabaseService"], ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_3__["ToastrManager"], src_app_localstorage_service__WEBPACK_IMPORTED_MODULE_5__["sessionStorage"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]])
    ], LoyaltyReportInfluencerRewardPointComponent);
    return LoyaltyReportInfluencerRewardPointComponent;
}());



/***/ }),

/***/ "./src/app/loyalty-report/loyalty-report-influencer-scan-point/loyalty-report-influencer-scan-point.component.html":
/*!*************************************************************************************************************************!*\
  !*** ./src/app/loyalty-report/loyalty-report-influencer-scan-point/loyalty-report-influencer-scan-point.component.html ***!
  \*************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-container\">\r\n\r\n  <div class=\"tools-container\">\r\n    <h2>INFLUENCER SCAN POINTS</h2>\r\n    <div class=\"left-auto df ac flex-gap-10\">\r\n      <button mat-icon-button matTooltip=\"Refresh\" (click)=\"refresh()\">\r\n        <i class=\"material-icons\">refresh</i>\r\n      </button>\r\n      <button mat-icon-button matTooltip=\"Filter\" (click)=\"openBottomSheet()\">\r\n        <i class=\"material-icons\">filter_alt</i>\r\n      </button>\r\n\r\n      <div class=\"pagination\" *ngIf=\"secondaryProductReportList.length > 0\">\r\n        <div class=\"pagination-content\">\r\n          Pages\r\n          <span>{{pagenumber}}</span>\r\n          of\r\n          <span>{{total_page}}</span>\r\n        </div>\r\n        <div class=\"page-nav\">\r\n\r\n          <button mat-icon-button matTooltip=\"Older\" (click)=\"pervious()\" [disabled]=\"start == 0 || total_page == 0\">\r\n            <i class=\"material-icons\">navigate_before</i>\r\n          </button>\r\n          <button mat-icon-button matTooltip=\"Newer\" (click)=\"nextPage()\" [disabled]=\"pagenumber == total_page \">\r\n            <i class=\"material-icons\">navigate_next</i>\r\n          </button>\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n  <div class=\"container container-scroll\">\r\n    <div class=\"cs-table horizontal-scroll\">\r\n      <div class=\"sticky-head\">\r\n        <div class=\"table-head\">\r\n          <table>\r\n            <tr>\r\n              <th class=\"w50\">S.No</th>\r\n              <th class=\"w150\">Name / Mobile No.</th>\r\n              <th class=\"w200\">State</th>\r\n              <th class=\"w150\">District</th>\r\n              <th class=\"w100\">City</th>\r\n              <th class=\"w120\"> Coupon Scan Count\r\n                <div class=\"sorting\">\r\n                  <a class=\"\" (click)=\"this.filter.sorting_column = 'scan_count';this.filter.sorting_type='ASC';getSecondaryProductWiseReport('','')\">\r\n                    <i class=\"material-icons\">arrow_drop_up</i>\r\n                  </a>\r\n                  <a class=\"\" (click)=\"this.filter.sorting_column = 'scan_count';this.filter.sorting_type='DESC';getSecondaryProductWiseReport('','')\">\r\n                    <i class=\"material-icons\">arrow_drop_down</i>\r\n                  </a>\r\n                </div>\r\n              </th>\r\n              <th class=\"w120\">Coupon Scan Point Value\r\n                <div class=\"sorting\">\r\n                  <a class=\"\" (click)=\" this.filter.sorting_column = 'scan_point';this.filter.sorting_type='ASC';getSecondaryProductWiseReport('','')\">\r\n                    <i class=\"material-icons\">arrow_drop_up</i>\r\n                  </a>\r\n                  <a class=\"\" (click)=\"this.filter.sorting_column = 'scan_point';this.filter.sorting_type='DESC';getSecondaryProductWiseReport('','')\">\r\n                    <i class=\"material-icons\">arrow_drop_down</i>\r\n                  </a>\r\n                </div>\r\n              </th>\r\n              <th class=\"w100\">Scan Last Date</th>\r\n\r\n\r\n            </tr>\r\n          </table>\r\n        </div>\r\n        <div class=\"table-head bdrt\">\r\n          <table>\r\n            <tr>\r\n              <th class=\"w50\">&nbsp;</th>\r\n              <th class=\"w150\">\r\n                <div class=\"th-search-acmt\">\r\n                  <mat-form-field class=\"example-full-width cs-input select-input\">\r\n                    <input matInput placeholder=\"Search...\" type=\"text\" name=\"name\" [(ngModel)]=\"filter.name\"\r\n                      (keyup.enter)=\"getSecondaryProductWiseReport('','')\">\r\n                  </mat-form-field>\r\n                </div>\r\n              </th>\r\n              <th class=\"w200\">\r\n                <div class=\"th-search-acmt\">\r\n                  <mat-form-field class=\"cs-input select-input\">\r\n                    <mat-select name=\"state\" [(ngModel)]=\"filter.state\" (selectionChange)=\"getSecondaryProductWiseReport('','')\">\r\n                      <mat-option *ngFor=\"let state of states\"\r\n                        value=\"{{state.state_name}}\">{{state.state_name}}</mat-option>\r\n                    </mat-select>\r\n                  </mat-form-field>\r\n                </div>\r\n              </th>\r\n              <th class=\"w150\">\r\n                <div class=\"th-search-acmt\">\r\n                  <mat-form-field class=\"example-full-width cs-input select-input\">\r\n                    <input matInput placeholder=\"Search...\" type=\"text\" name=\"district\" [(ngModel)]=\"filter.district\"\r\n                      (keyup.enter)=\"getSecondaryProductWiseReport('','')\">\r\n                  </mat-form-field>\r\n                </div>\r\n              </th>\r\n              <th class=\"w100\"></th>\r\n              <th class=\"w120\"></th>\r\n              <th class=\"w120\"></th>\r\n              <th class=\"w100\"></th>\r\n\r\n            </tr>\r\n          </table>\r\n        </div>\r\n      </div>\r\n      <div class=\"table-container\">\r\n        <div class=\"table-content\">\r\n          <table>\r\n            <ng-container *ngIf=\"!loader\">\r\n              <tr *ngFor=\"let report of secondaryProductReportList; let i=index\">\r\n                <td class=\"w50\">{{i+1+sr_no}}</td>\r\n                <td class=\"w150\">{{report.name}}/{{report.mobile_no}}</td>\r\n                <td class=\"w200\">{{report.state}}</td>\r\n                <td class=\"w150\">{{report.district}}</td>\r\n                <td class=\"w100\">{{report.city}}</td>\r\n                <td class=\"w120\">{{report.scan_count}}</td>\r\n                <td class=\"w120\">{{report.scan_point}}</td>\r\n                <td class=\"w100\">{{report.scan_last_date | date :'dd MMM yyyy'}}</td>\r\n\r\n              </tr>\r\n            </ng-container>\r\n            <ng-container *ngIf=\"loader\">\r\n              <tr class=\"sk-loading\" *ngFor=\"let row of [].constructor(10);\">\r\n                <td class=\"w50\">\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n                <td class=\"w150\">\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n                <td class=\"w200\">\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n                <td class=\"w150\">\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n\r\n                <td class=\"w100\">\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n                <td class=\"w100\">\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n                <td class=\"w100\">\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n                <td class=\"w100\">\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n\r\n              </tr>\r\n            </ng-container>\r\n          </table>\r\n        </div>\r\n      </div>\r\n      <ng-container *ngIf=\"secondaryProductReportList.length == 0\">\r\n        <app-not-result-found></app-not-result-found>\r\n      </ng-container>\r\n    </div>\r\n  </div>\r\n    <div class=\"fab-btns\">\r\n      <button  mat-fab class=\"excel\"  *ngIf=\"secondaryProductReportList.length > 0 && logined_user_data.download_primary_target_report==1\" (click)=\"lastBtnValue('excel'); getproductWiseSecondaryReportExcel();\"  [ngClass]=\"{'pulse': fabBtnValue=='excel'}\" >\r\n        <img src=\"assets/img/excel.svg\">\r\n        Download Excel\r\n      </button>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/loyalty-report/loyalty-report-influencer-scan-point/loyalty-report-influencer-scan-point.component.scss":
/*!*************************************************************************************************************************!*\
  !*** ./src/app/loyalty-report/loyalty-report-influencer-scan-point/loyalty-report-influencer-scan-point.component.scss ***!
  \*************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/loyalty-report/loyalty-report-influencer-scan-point/loyalty-report-influencer-scan-point.component.ts":
/*!***********************************************************************************************************************!*\
  !*** ./src/app/loyalty-report/loyalty-report-influencer-scan-point/loyalty-report-influencer-scan-point.component.ts ***!
  \***********************************************************************************************************************/
/*! exports provided: LoyaltyReportInfluencerScanPointComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoyaltyReportInfluencerScanPointComponent", function() { return LoyaltyReportInfluencerScanPointComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng6-toastr-notifications */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/ng6-toastr-notifications/fesm5/ng6-toastr-notifications.js");
/* harmony import */ var src_app_bottom_sheet_bottom_sheet_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/bottom-sheet/bottom-sheet.component */ "./src/app/bottom-sheet/bottom-sheet.component.ts");
/* harmony import */ var src_app_localstorage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/localstorage.service */ "./src/app/localstorage.service.ts");
/* harmony import */ var src_services_DatabaseService__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/_services/DatabaseService */ "./src/_services/DatabaseService.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! moment */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var src_app_reports_prouct_wise_secondary_report_product_wise_secondary_report_modal_product_wise_secondary_report_modal_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/reports/prouct-wise-secondary-report/product-wise-secondary-report-modal/product-wise-secondary-report-modal.component */ "./src/app/reports/prouct-wise-secondary-report/product-wise-secondary-report-modal/product-wise-secondary-report-modal.component.ts");









var LoyaltyReportInfluencerScanPointComponent = /** @class */ (function () {
    function LoyaltyReportInfluencerScanPointComponent(bottomSheet, service, toast, session, dialog) {
        this.bottomSheet = bottomSheet;
        this.service = service;
        this.toast = toast;
        this.session = session;
        this.dialog = dialog;
        this.loader = false;
        this.secondaryProductReportList = [];
        this.search = {};
        this.login_data = [];
        this.page_limit = 50;
        this.start = 0;
        this.pagenumber = '';
        this.filter = {};
        this.filtering = false;
        this.length = 0;
        this.fabBtnValue = 'add';
        this.states = [];
        this.assign_login_data = this.session.getSession();
        this.logined_user_data = this.assign_login_data.value.data;
        this.getStateList();
    }
    LoyaltyReportInfluencerScanPointComponent.prototype.ngOnInit = function () {
        this.length = 0;
        this.getSecondaryProductWiseReport('', this.length);
    };
    LoyaltyReportInfluencerScanPointComponent.prototype.refresh = function () {
        this.start = 0;
        this.filter = {};
        this.getSecondaryProductWiseReport('', this.length);
    };
    LoyaltyReportInfluencerScanPointComponent.prototype.pervious = function () {
        this.start = this.start - this.page_limit;
        this.getSecondaryProductWiseReport('', this.length);
    };
    LoyaltyReportInfluencerScanPointComponent.prototype.nextPage = function () {
        this.start = this.start + this.page_limit;
        this.getSecondaryProductWiseReport('', this.length);
    };
    LoyaltyReportInfluencerScanPointComponent.prototype.getSecondaryProductWiseReport = function (action, length) {
        var _this = this;
        this.loader = true;
        if (this.pagenumber > this.total_page) {
            this.pagenumber = this.total_page;
            this.start = this.pageCount - this.page_limit;
        }
        if (this.start < 0) {
            this.start = 0;
        }
        //  if (this.filter.date_from) {
        //       this.filter.date_from = moment(this.filter.date_from).format('YYYY-MM-DD');
        //     }
        //     if (this.filter.date_to) {
        //       this.filter.date_to = moment(this.filter.date_to).format('YYYY-MM-DD');
        //     }
        //     if (this.filter.date) this.filtering = true;
        //     this.filter.mode = 0;
        //     this.filter.limit = length;
        //     if (action == 'refresh') {
        //       this.filter.date_from = '';
        //       this.filter.date_to = '';
        //     }
        this.service.post_rqst({ 'start': this.start, 'pagelimit': this.page_limit, 'filter': this.filter }, 'LoyaltyReport/influencer_scan_report').subscribe(function (resp) {
            console.log(resp);
            if (resp['statusCode'] == 200) {
                _this.secondaryProductReportList = resp['result'];
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
                _this.loader = false;
            }
            else {
                _this.toast.errorToastr(resp['statusMsg']);
            }
        }, function (err) {
            _this.loader = false;
        });
    };
    LoyaltyReportInfluencerScanPointComponent.prototype.onDate = function (event) {
        console.log(event);
        this.filter.date_to = moment__WEBPACK_IMPORTED_MODULE_7__(event.target.value).format('YYYY-MM-DD');
        this.filter.date_from = moment__WEBPACK_IMPORTED_MODULE_7__(event.target.value).format('YYYY-MM-DD');
        this.getSecondaryProductWiseReport('', this.length);
    };
    LoyaltyReportInfluencerScanPointComponent.prototype.openBottomSheet = function () {
        var _this = this;
        this.bottomSheet.open(src_app_bottom_sheet_bottom_sheet_component__WEBPACK_IMPORTED_MODULE_4__["BottomSheetComponent"], {
            data: {
                'filterPage': 'product_wise_secondary',
            }
        });
        this.bottomSheet._openedBottomSheetRef.afterDismissed().subscribe(function (data) {
            _this.filter.date_from = data.date_from;
            _this.filter.date_to = data.date_to;
            // this.search.userId = data.user_id;
            _this.length = 0;
            _this.getSecondaryProductWiseReport(_this.filter.date_to, _this.filter.date_from);
        });
    };
    LoyaltyReportInfluencerScanPointComponent.prototype.getproductWiseSecondaryReportExcel = function () {
        var _this = this;
        this.loader = true;
        this.service.post_rqst({ 'filter': this.filter }, "LoyaltyReport/excel_influencer_scan_report").subscribe(function (result) {
            if (result['msg'] == true) {
                _this.loader = false;
                window.open(_this.service.downloadUrl + result['filename']);
                _this.getSecondaryProductWiseReport('', _this.length);
            }
        });
    };
    LoyaltyReportInfluencerScanPointComponent.prototype.openProductWiseSecondarySubCategoryReport = function (drId, category, startDate, endDate, salesUserId) {
        var dialogRef = this.dialog.open(src_app_reports_prouct_wise_secondary_report_product_wise_secondary_report_modal_product_wise_secondary_report_modal_component__WEBPACK_IMPORTED_MODULE_8__["ProductWiseSecondaryReportModalComponent"], {
            width: '800px',
            panelClass: 'cs-modal',
            data: {
                'from': 'product-wise-sub-category',
                drId: drId,
                category: category,
                startDate: startDate,
                endDate: endDate,
                salesUserId: salesUserId
            }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result != false) {
            }
        });
    };
    LoyaltyReportInfluencerScanPointComponent.prototype.lastBtnValue = function (value) {
        this.fabBtnValue = value;
    };
    LoyaltyReportInfluencerScanPointComponent.prototype.getStateList = function () {
        var _this = this;
        this.service.post_rqst(0, "Master/getAllState").subscribe((function (result) {
            if (result['statusCode'] == 200) {
                _this.states = result['all_state'];
            }
            else {
                _this.toast.errorToastr(result['statusMsg']);
            }
        }));
    };
    LoyaltyReportInfluencerScanPointComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-loyalty-report-influencer-scan-point',
            template: __webpack_require__(/*! ./loyalty-report-influencer-scan-point.component.html */ "./src/app/loyalty-report/loyalty-report-influencer-scan-point/loyalty-report-influencer-scan-point.component.html"),
            styles: [__webpack_require__(/*! ./loyalty-report-influencer-scan-point.component.scss */ "./src/app/loyalty-report/loyalty-report-influencer-scan-point/loyalty-report-influencer-scan-point.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatBottomSheet"], src_services_DatabaseService__WEBPACK_IMPORTED_MODULE_6__["DatabaseService"], ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_3__["ToastrManager"], src_app_localstorage_service__WEBPACK_IMPORTED_MODULE_5__["sessionStorage"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]])
    ], LoyaltyReportInfluencerScanPointComponent);
    return LoyaltyReportInfluencerScanPointComponent;
}());



/***/ }),

/***/ "./src/app/loyalty-report/loyalty-report-influencer-summary-detail-modal/loyalty-report-influencer-summary-detail-modal.component.html":
/*!*********************************************************************************************************************************************!*\
  !*** ./src/app/loyalty-report/loyalty-report-influencer-summary-detail-modal/loyalty-report-influencer-summary-detail-modal.component.html ***!
  \*********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"detail-modal\">\r\n\r\n  <!-- Header -->\r\n  <div mat-dialog-title class=\"modal-header\">\r\n    <div class=\"modal-header-left\">\r\n      <div class=\"modal-icon\" [ngClass]=\"data.type == 8 ? 'icon-ply' : 'icon-amb'\">\r\n        <i class=\"material-icons\">{{data.type == 8 ? 'construction' : 'star'}}</i>\r\n      </div>\r\n      <div class=\"modal-title-info\">\r\n        <h2>{{data.type_label}} — {{data.col_label}}</h2>\r\n        <span class=\"modal-subtitle\">\r\n          <i class=\"material-icons\">event</i> {{data.period_label}}\r\n        </span>\r\n      </div>\r\n    </div>\r\n    <div class=\"modal-header-right\">\r\n      <div class=\"count-badge\">\r\n        <span class=\"count-num\">{{data.count}}</span>\r\n        <span class=\"count-lbl\">{{data.col_label}}</span>\r\n      </div>\r\n      <button mat-icon-button (click)=\"close()\" class=\"close-btn\">\r\n        <mat-icon>close</mat-icon>\r\n      </button>\r\n    </div>\r\n  </div>\r\n\r\n  <!-- Search -->\r\n  <div class=\"modal-search-bar\">\r\n    <i class=\"material-icons\">search</i>\r\n    <input type=\"text\" placeholder=\"Search by name or mobile...\" [(ngModel)]=\"searchText\" (input)=\"onSearch()\">\r\n    <span class=\"result-count\">{{filteredRows.length}} records</span>\r\n  </div>\r\n\r\n  <!-- Body -->\r\n  <div mat-dialog-content class=\"modal-body\">\r\n\r\n    <!-- Loader -->\r\n    <div class=\"modal-loader\" *ngIf=\"loader\">\r\n      <div class=\"sk-row\" *ngFor=\"let r of [1,2,3,4,5]\">\r\n        <div class=\"sk-cell sk-avatar\"></div>\r\n        <div class=\"sk-cell sk-name\"></div>\r\n        <div class=\"sk-cell sk-mobile\"></div>\r\n        <div class=\"sk-cell sk-extra\"></div>\r\n      </div>\r\n    </div>\r\n\r\n    <!-- Table -->\r\n    <div class=\"detail-table-wrap\" *ngIf=\"!loader\">\r\n      <table class=\"detail-table\">\r\n        <thead>\r\n          <tr>\r\n            <th class=\"w50\">S.No</th>\r\n            <th class=\"w220\">Customer Name</th>\r\n            <th class=\"w140\">Mobile</th>\r\n            <th class=\"w160\">{{extraColLabel}}</th>\r\n          </tr>\r\n        </thead>\r\n        <tbody>\r\n          <tr *ngFor=\"let row of filteredRows; let i = index\">\r\n            <td class=\"w50 sno\">{{i + 1}}</td>\r\n            <td class=\"w220\">\r\n              <div class=\"customer-cell\">\r\n                <div class=\"cust-avatar\" [ngClass]=\"data.type == 8 ? 'av-ply' : 'av-amb'\">\r\n                  {{(row.name || 'U').charAt(0).toUpperCase()}}\r\n                </div>\r\n                <span class=\"cust-name\">{{row.name | titlecase}}</span>\r\n              </div>\r\n            </td>\r\n            <td class=\"w140 mobile-cell\">{{row.mobile}}</td>\r\n            <td class=\"w160 extra-cell\">\r\n              <ng-container *ngIf=\"showDate\">\r\n                <span class=\"date-pill\">{{formatDate(row.extra_date)}}</span>\r\n              </ng-container>\r\n              <ng-container *ngIf=\"showActive\">\r\n                <span class=\"count-pill\">{{row.extra_val}} purchases</span>\r\n              </ng-container>\r\n              <ng-container *ngIf=\"!showDate && !showActive\">\r\n                <span class=\"val-pill\" [ngClass]=\"data.column === 'points' ? 'pill-blue' : 'pill-green'\">\r\n                  {{row.extra_val | number}}\r\n                </span>\r\n              </ng-container>\r\n            </td>\r\n          </tr>\r\n          <tr *ngIf=\"filteredRows.length === 0 && !loader\">\r\n            <td colspan=\"4\" class=\"empty-cell\">\r\n              <i class=\"material-icons\">search_off</i> No records found\r\n            </td>\r\n          </tr>\r\n        </tbody>\r\n      </table>\r\n    </div>\r\n\r\n  </div>\r\n\r\n  <div mat-dialog-actions class=\"modal-footer\">\r\n    <button mat-stroked-button (click)=\"close()\">Close</button>\r\n  </div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/loyalty-report/loyalty-report-influencer-summary-detail-modal/loyalty-report-influencer-summary-detail-modal.component.scss":
/*!*********************************************************************************************************************************************!*\
  !*** ./src/app/loyalty-report/loyalty-report-influencer-summary-detail-modal/loyalty-report-influencer-summary-detail-modal.component.scss ***!
  \*********************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".detail-modal {\n  width: 660px;\n  max-width: 100%;\n}\n\n.modal-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 18px 22px 14px;\n  border-bottom: 1px solid #e2e8f0;\n  gap: 12px;\n}\n\n.modal-header-left {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n\n.modal-icon {\n  width: 44px;\n  height: 44px;\n  border-radius: 10px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n\n.modal-icon i {\n  font-size: 22px;\n  color: #fff;\n}\n\n.icon-ply {\n  background: linear-gradient(135deg, #2E7D32, #388E3C);\n}\n\n.icon-amb {\n  background: linear-gradient(135deg, #1565C0, #1976D2);\n}\n\n.modal-title-info {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n}\n\n.modal-title-info h2 {\n  margin: 0;\n  font-size: 15px;\n  font-weight: 700;\n  color: #1a1a2e;\n}\n\n.modal-subtitle {\n  display: flex;\n  align-items: center;\n  gap: 3px;\n  font-size: 12px;\n  color: #667085;\n}\n\n.modal-subtitle i {\n  font-size: 13px;\n}\n\n.modal-header-right {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n\n.count-badge {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  background: #F3E8FF;\n  border: 1px solid #DDD6FE;\n  padding: 6px 14px;\n  border-radius: 10px;\n}\n\n.count-badge .count-num {\n  font-size: 20px;\n  font-weight: 800;\n  color: #7B1FA2;\n  line-height: 1;\n}\n\n.count-badge .count-lbl {\n  font-size: 10px;\n  color: #9333EA;\n  font-weight: 500;\n  margin-top: 1px;\n}\n\n.close-btn {\n  color: #94a3b8;\n}\n\n.modal-search-bar {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 10px 22px;\n  background: #f8fafc;\n  border-bottom: 1px solid #e2e8f0;\n}\n\n.modal-search-bar i {\n  font-size: 18px;\n  color: #94a3b8;\n}\n\n.modal-search-bar input {\n  flex: 1;\n  border: none;\n  outline: none;\n  background: transparent;\n  font-size: 13px;\n  color: #344054;\n  font-family: inherit;\n}\n\n.modal-search-bar input::-moz-placeholder {\n  color: #b0b8c4;\n}\n\n.modal-search-bar input::placeholder {\n  color: #b0b8c4;\n}\n\n.modal-search-bar .result-count {\n  font-size: 11px;\n  color: #94a3b8;\n  font-weight: 600;\n  white-space: nowrap;\n}\n\n.modal-body {\n  padding: 0;\n  max-height: 55vh;\n  overflow-y: auto;\n}\n\n.detail-table-wrap {\n  overflow-x: auto;\n}\n\n.detail-table {\n  width: 100%;\n  border-collapse: collapse;\n}\n\n.detail-table thead tr {\n  background: linear-gradient(180deg, #f8fafc, #f1f5f9);\n  border-bottom: 2px solid #e2e8f0;\n}\n\n.detail-table thead tr th {\n  padding: 10px 14px;\n  font-size: 11px;\n  font-weight: 700;\n  color: #475569;\n  text-transform: uppercase;\n  letter-spacing: 0.3px;\n  border-right: 1px solid #e2e8f0;\n  text-align: left;\n}\n\n.detail-table thead tr th:last-child {\n  border-right: none;\n}\n\n.detail-table tbody tr {\n  border-bottom: 1px solid #f1f5f9;\n  transition: background 0.12s;\n}\n\n.detail-table tbody tr:hover {\n  background: #f8fafc;\n}\n\n.detail-table tbody tr:last-child {\n  border-bottom: none;\n}\n\n.detail-table tbody tr td {\n  padding: 10px 14px;\n  font-size: 13px;\n  color: #334155;\n  border-right: 1px solid #f1f5f9;\n  vertical-align: middle;\n}\n\n.detail-table tbody tr td:last-child {\n  border-right: none;\n}\n\n.sno {\n  font-size: 12px;\n  color: #94a3b8;\n  font-weight: 600;\n  text-align: center;\n}\n\n.customer-cell {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n\n.cust-avatar {\n  width: 28px;\n  height: 28px;\n  border-radius: 50%;\n  color: #fff;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 11px;\n  font-weight: 700;\n  flex-shrink: 0;\n}\n\n.av-ply {\n  background: linear-gradient(135deg, #2E7D32, #388E3C);\n}\n\n.av-amb {\n  background: linear-gradient(135deg, #1565C0, #1976D2);\n}\n\n.cust-name {\n  font-weight: 500;\n  color: #1a1a2e;\n}\n\n.mobile-cell {\n  font-family: monospace;\n  font-size: 12px;\n  color: #64748b;\n}\n\n.date-pill {\n  display: inline-block;\n  background: #F0FDF4;\n  color: #166534;\n  border: 1px solid #BBF7D0;\n  padding: 3px 10px;\n  border-radius: 12px;\n  font-size: 12px;\n  font-weight: 600;\n}\n\n.count-pill {\n  display: inline-block;\n  background: #FFF7ED;\n  color: #9A3412;\n  border: 1px solid #FED7AA;\n  padding: 3px 10px;\n  border-radius: 12px;\n  font-size: 12px;\n  font-weight: 600;\n}\n\n.val-pill {\n  display: inline-block;\n  padding: 3px 10px;\n  border-radius: 12px;\n  font-size: 12px;\n  font-weight: 700;\n}\n\n.pill-blue {\n  background: #EFF6FF;\n  color: #1E40AF;\n  border: 1px solid #BFDBFE;\n}\n\n.pill-green {\n  background: #F0FDF4;\n  color: #166534;\n  border: 1px solid #BBF7D0;\n}\n\n.empty-cell {\n  text-align: center;\n  padding: 30px;\n  color: #94a3b8;\n  font-size: 13px;\n}\n\n.empty-cell i {\n  vertical-align: middle;\n  margin-right: 4px;\n}\n\n.modal-loader {\n  padding: 8px 0;\n}\n\n.sk-row {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 8px 14px;\n}\n\n.sk-cell {\n  height: 16px;\n  border-radius: 4px;\n  background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);\n  background-size: 200% 100%;\n  animation: shimmer 1.5s infinite;\n}\n\n.sk-avatar {\n  width: 28px;\n  height: 28px;\n  border-radius: 50%;\n  flex-shrink: 0;\n}\n\n.sk-name {\n  flex: 2;\n}\n\n.sk-mobile {\n  flex: 1;\n}\n\n.sk-extra {\n  flex: 1;\n}\n\n@keyframes shimmer {\n  0% {\n    background-position: 200% 0;\n  }\n  100% {\n    background-position: -200% 0;\n  }\n}\n\n.modal-footer {\n  padding: 12px 22px;\n  border-top: 1px solid #e2e8f0;\n  justify-content: flex-end;\n}"

/***/ }),

/***/ "./src/app/loyalty-report/loyalty-report-influencer-summary-detail-modal/loyalty-report-influencer-summary-detail-modal.component.ts":
/*!*******************************************************************************************************************************************!*\
  !*** ./src/app/loyalty-report/loyalty-report-influencer-summary-detail-modal/loyalty-report-influencer-summary-detail-modal.component.ts ***!
  \*******************************************************************************************************************************************/
/*! exports provided: LoyaltyReportInfluencerSummaryDetailModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoyaltyReportInfluencerSummaryDetailModalComponent", function() { return LoyaltyReportInfluencerSummaryDetailModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var src_services_DatabaseService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/_services/DatabaseService */ "./src/_services/DatabaseService.ts");




var LoyaltyReportInfluencerSummaryDetailModalComponent = /** @class */ (function () {
    function LoyaltyReportInfluencerSummaryDetailModalComponent(dialogRef, data, service) {
        this.dialogRef = dialogRef;
        this.data = data;
        this.service = service;
        this.loader = false;
        this.rows = [];
        this.filteredRows = [];
        this.searchText = '';
    }
    LoyaltyReportInfluencerSummaryDetailModalComponent.prototype.ngOnInit = function () {
        this.loadDetail();
    };
    LoyaltyReportInfluencerSummaryDetailModalComponent.prototype.loadDetail = function () {
        var _this = this;
        this.loader = true;
        var payload = {
            employee_id: this.data.employee_id,
            type: this.data.type,
            column: this.data.column
        };
        if (this.data.date_from)
            payload.date_from = this.data.date_from;
        if (this.data.date_to)
            payload.date_to = this.data.date_to;
        this.service.post_rqst(payload, 'Influencer/influencerSummaryReportDetail').subscribe(function (resp) {
            _this.loader = false;
            if (resp['statusCode'] == 200) {
                _this.rows = resp['result'] || [];
                _this.filteredRows = _this.rows.slice();
            }
        }, function () { _this.loader = false; });
    };
    LoyaltyReportInfluencerSummaryDetailModalComponent.prototype.onSearch = function () {
        var q = (this.searchText || '').toLowerCase().trim();
        this.filteredRows = q
            ? this.rows.filter(function (r) { return (r.name || '').toLowerCase().includes(q) || (r.mobile || '').includes(q); })
            : this.rows.slice();
    };
    Object.defineProperty(LoyaltyReportInfluencerSummaryDetailModalComponent.prototype, "extraColLabel", {
        get: function () {
            var map = {
                enrolled: 'Enrolled Date', logged: 'First Login',
                active: 'Purchases', sheets: 'Sheets', points: 'Points'
            };
            return map[this.data.column] || '';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LoyaltyReportInfluencerSummaryDetailModalComponent.prototype, "showDate", {
        get: function () { return this.data.column === 'enrolled' || this.data.column === 'logged'; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LoyaltyReportInfluencerSummaryDetailModalComponent.prototype, "showActive", {
        get: function () { return this.data.column === 'active'; },
        enumerable: true,
        configurable: true
    });
    LoyaltyReportInfluencerSummaryDetailModalComponent.prototype.formatDate = function (val) {
        if (!val)
            return '—';
        var d = new Date(val);
        return d.toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' });
    };
    LoyaltyReportInfluencerSummaryDetailModalComponent.prototype.close = function () { this.dialogRef.close(); };
    LoyaltyReportInfluencerSummaryDetailModalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-loyalty-report-influencer-summary-detail-modal',
            template: __webpack_require__(/*! ./loyalty-report-influencer-summary-detail-modal.component.html */ "./src/app/loyalty-report/loyalty-report-influencer-summary-detail-modal/loyalty-report-influencer-summary-detail-modal.component.html"),
            styles: [__webpack_require__(/*! ./loyalty-report-influencer-summary-detail-modal.component.scss */ "./src/app/loyalty-report/loyalty-report-influencer-summary-detail-modal/loyalty-report-influencer-summary-detail-modal.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](1, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"], Object, src_services_DatabaseService__WEBPACK_IMPORTED_MODULE_3__["DatabaseService"]])
    ], LoyaltyReportInfluencerSummaryDetailModalComponent);
    return LoyaltyReportInfluencerSummaryDetailModalComponent;
}());



/***/ }),

/***/ "./src/app/loyalty-report/loyalty-report-influencer-summary/loyalty-report-influencer-summary.component.html":
/*!*******************************************************************************************************************!*\
  !*** ./src/app/loyalty-report/loyalty-report-influencer-summary/loyalty-report-influencer-summary.component.html ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-container\">\r\n\r\n  <!-- Header -->\r\n  <div class=\"tools-container\">\r\n    <div class=\"page-title-wrap\">\r\n      <div class=\"page-icon-wrap\"><i class=\"material-icons\">people</i></div>\r\n      <div>\r\n        <h2>Influencer Summary Report</h2>\r\n        <span class=\"page-subtitle\">PLY EXPERTS & AMBASSADOR — period-wise summary</span>\r\n      </div>\r\n    </div>\r\n    <div class=\"left-auto df ac flex-gap-10\">\r\n      <button class=\"btn-icon\" matTooltip=\"Refresh\" (click)=\"refresh()\">\r\n        <i class=\"material-icons\">refresh</i>\r\n      </button>\r\n    </div>\r\n  </div>\r\n\r\n  <!-- Filter Card -->\r\n  <div class=\"filter-card\">\r\n    <div class=\"filter-row-inner\">\r\n\r\n      <!-- Sales User -->\r\n      <div class=\"filter-field filter-field-user\">\r\n        <label class=\"filter-label\"><i class=\"material-icons\">person</i> Sales User</label>\r\n        <div class=\"custom-select-wrap\" [class.open]=\"salesDropdownOpen\">\r\n          <div class=\"custom-select-trigger\" (click)=\"toggleSalesDropdown()\">\r\n            <ng-container *ngIf=\"selectedSalesUser; else noUser\">\r\n              <div class=\"trigger-user\">\r\n                <div class=\"trigger-avatar\">{{selectedSalesUser.name.charAt(0).toUpperCase()}}</div>\r\n                <span class=\"trigger-name\">{{selectedSalesUser.name}}</span>\r\n              </div>\r\n            </ng-container>\r\n            <ng-template #noUser>\r\n              <span class=\"trigger-placeholder\">\r\n                <i class=\"material-icons\" style=\"font-size:15px;margin-right:4px\">person_search</i>\r\n                {{salesUserLoader ? 'Loading...' : 'Select Sales User'}}\r\n              </span>\r\n            </ng-template>\r\n            <i class=\"material-icons trigger-arrow\">{{salesDropdownOpen ? 'expand_less' : 'expand_more'}}</i>\r\n          </div>\r\n          <div class=\"custom-dropdown-panel\" *ngIf=\"salesDropdownOpen\">\r\n            <div class=\"dropdown-search-row\">\r\n              <i class=\"material-icons\">search</i>\r\n              <input type=\"text\" class=\"dropdown-search-input\" placeholder=\"Search name or mobile...\"\r\n                [(ngModel)]=\"salesSearchText\" (input)=\"filterSalesUsers()\" autocomplete=\"off\">\r\n              <i class=\"material-icons clear-search\" *ngIf=\"salesSearchText\" (click)=\"salesSearchText=''; filterSalesUsers()\">close</i>\r\n            </div>\r\n            <div class=\"dropdown-list\">\r\n              <div class=\"dropdown-item\" *ngFor=\"let u of filteredSalesUsers\" (click)=\"selectSalesUser(u)\">\r\n                <div class=\"item-avatar\">{{u.name.charAt(0).toUpperCase()}}</div>\r\n                <div class=\"item-info\">\r\n                  <span class=\"item-name\">{{u.name}}</span>\r\n                  <span class=\"item-mobile\">{{u.mobile}}</span>\r\n                </div>\r\n                <i class=\"material-icons item-check\" *ngIf=\"selectedSalesUser && selectedSalesUser.id == u.id\">check</i>\r\n              </div>\r\n              <div class=\"dropdown-empty\" *ngIf=\"filteredSalesUsers.length === 0\">\r\n                <i class=\"material-icons\">search_off</i> No results\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <span class=\"clear-user-link\" *ngIf=\"selectedSalesUser\" (click)=\"clearSalesUser()\">\r\n          <i class=\"material-icons\">close</i> Clear\r\n        </span>\r\n      </div>\r\n\r\n      <!-- Month -->\r\n      <div class=\"filter-field\">\r\n        <label class=\"filter-label\"><i class=\"material-icons\">calendar_today</i> Month</label>\r\n        <div class=\"date-input-wrap\">\r\n          <input type=\"month\" class=\"date-input\" [(ngModel)]=\"selectedMonth\">\r\n        </div>\r\n      </div>\r\n\r\n      <!-- Search -->\r\n      <div class=\"filter-field filter-action\">\r\n        <button class=\"btn-search\" (click)=\"getReport()\" [disabled]=\"loader\">\r\n          <i class=\"material-icons\">{{loader ? 'hourglass_top' : 'search'}}</i>\r\n          {{loader ? 'Loading...' : 'Search'}}\r\n        </button>\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n\r\n  <!-- Report Table -->\r\n  <ng-container *ngIf=\"periods.length > 0 && !loader\">\r\n\r\n    <div class=\"report-header-bar\">\r\n      <div class=\"report-emp-badge\">\r\n        <i class=\"material-icons\">badge</i> {{employeeName}}\r\n      </div>\r\n      <div class=\"report-month-badge\">\r\n        <i class=\"material-icons\">event</i> {{selectedMonth}}\r\n      </div>\r\n      <button class=\"btn-download\" (click)=\"downloadExcel()\" [disabled]=\"excelLoader\" style=\"margin-left:auto\">\r\n        <i class=\"material-icons\">{{excelLoader ? 'hourglass_top' : 'file_download'}}</i>\r\n        {{excelLoader ? 'Generating...' : 'Download Excel'}}\r\n      </button>\r\n    </div>\r\n\r\n    <div class=\"report-table-wrap\">\r\n      <table class=\"summary-table\">\r\n        <thead>\r\n          <tr class=\"type-header-row\">\r\n            <th class=\"period-col\"></th>\r\n            <th colspan=\"5\" class=\"type-header ply-header\">\r\n              <i class=\"material-icons\">construction</i> PLY EXPERTS (Type 8)\r\n            </th>\r\n            <th colspan=\"5\" class=\"type-header amb-header\">\r\n              <i class=\"material-icons\">star</i> AMBASSADOR (Type 13)\r\n            </th>\r\n          </tr>\r\n          <tr class=\"col-header-row\">\r\n            <th class=\"period-col\">Period</th>\r\n            <th class=\"metric-col clickable-hint\" *ngFor=\"let c of ['Enrolled','Logged','Active','Sheets','Points']\">{{c}}</th>\r\n            <th class=\"metric-col clickable-hint\" *ngFor=\"let c of ['Enrolled','Logged','Active','Sheets','Points']\">{{c}}</th>\r\n          </tr>\r\n        </thead>\r\n        <tbody>\r\n          <tr *ngFor=\"let p of periods; let i = index\" [ngClass]=\"'period-row-' + i\">\r\n            <td class=\"period-label-cell\">\r\n              <span class=\"period-badge\" [ngClass]=\"'badge-' + i\">{{p.label}}</span>\r\n            </td>\r\n            <!-- PLY EXPERT cols -->\r\n            <td class=\"metric-cell\" (click)=\"openDetail(p, 8, 'enrolled', p.ply_expert.enrolled)\">\r\n              <span class=\"metric-val\" [class.zero]=\"!p.ply_expert.enrolled\">{{p.ply_expert.enrolled}}</span>\r\n            </td>\r\n            <td class=\"metric-cell\" (click)=\"openDetail(p, 8, 'logged', p.ply_expert.logged)\">\r\n              <span class=\"metric-val\" [class.zero]=\"!p.ply_expert.logged\">{{p.ply_expert.logged}}</span>\r\n            </td>\r\n            <td class=\"metric-cell\" (click)=\"openDetail(p, 8, 'active', p.ply_expert.active)\">\r\n              <span class=\"metric-val active-val\" [class.zero]=\"!p.ply_expert.active\">{{p.ply_expert.active}}</span>\r\n            </td>\r\n            <td class=\"metric-cell\" (click)=\"openDetail(p, 8, 'sheets', p.ply_expert.sheets)\">\r\n              <span class=\"metric-val\" [class.zero]=\"!p.ply_expert.sheets\">{{p.ply_expert.sheets}}</span>\r\n            </td>\r\n            <td class=\"metric-cell\" (click)=\"openDetail(p, 8, 'points', p.ply_expert.points)\">\r\n              <span class=\"metric-val points-val\" [class.zero]=\"!p.ply_expert.points\">{{p.ply_expert.points}}</span>\r\n            </td>\r\n            <!-- AMBASSADOR cols -->\r\n            <td class=\"metric-cell amb-side\" (click)=\"openDetail(p, 13, 'enrolled', p.ambassador.enrolled)\">\r\n              <span class=\"metric-val\" [class.zero]=\"!p.ambassador.enrolled\">{{p.ambassador.enrolled}}</span>\r\n            </td>\r\n            <td class=\"metric-cell amb-side\" (click)=\"openDetail(p, 13, 'logged', p.ambassador.logged)\">\r\n              <span class=\"metric-val\" [class.zero]=\"!p.ambassador.logged\">{{p.ambassador.logged}}</span>\r\n            </td>\r\n            <td class=\"metric-cell amb-side\" (click)=\"openDetail(p, 13, 'active', p.ambassador.active)\">\r\n              <span class=\"metric-val active-val\" [class.zero]=\"!p.ambassador.active\">{{p.ambassador.active}}</span>\r\n            </td>\r\n            <td class=\"metric-cell amb-side\" (click)=\"openDetail(p, 13, 'sheets', p.ambassador.sheets)\">\r\n              <span class=\"metric-val\" [class.zero]=\"!p.ambassador.sheets\">{{p.ambassador.sheets}}</span>\r\n            </td>\r\n            <td class=\"metric-cell amb-side\" (click)=\"openDetail(p, 13, 'points', p.ambassador.points)\">\r\n              <span class=\"metric-val points-val\" [class.zero]=\"!p.ambassador.points\">{{p.ambassador.points}}</span>\r\n            </td>\r\n          </tr>\r\n        </tbody>\r\n      </table>\r\n    </div>\r\n\r\n    <!-- Legend -->\r\n    <div class=\"legend-bar\">\r\n      <i class=\"material-icons\">touch_app</i> Click any number to see customer details\r\n    </div>\r\n\r\n  </ng-container>\r\n\r\n  <!-- Skeleton -->\r\n  <ng-container *ngIf=\"loader\">\r\n    <div class=\"skeleton-wrap\">\r\n      <div class=\"sk-row\" *ngFor=\"let r of [1,2,3,4]\">\r\n        <div class=\"sk-cell sk-period\"></div>\r\n        <div class=\"sk-cell\" *ngFor=\"let c of [1,2,3,4,5,6,7,8,9,10]\"></div>\r\n      </div>\r\n    </div>\r\n  </ng-container>\r\n\r\n  <ng-container *ngIf=\"periods.length === 0 && !loader\">\r\n    <app-not-result-found></app-not-result-found>\r\n  </ng-container>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/loyalty-report/loyalty-report-influencer-summary/loyalty-report-influencer-summary.component.scss":
/*!*******************************************************************************************************************!*\
  !*** ./src/app/loyalty-report/loyalty-report-influencer-summary/loyalty-report-influencer-summary.component.scss ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".page-title-wrap {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n.page-title-wrap h2 {\n  margin: 0;\n  font-size: 18px;\n  font-weight: 700;\n  color: #1a1a2e;\n}\n.page-icon-wrap {\n  width: 42px;\n  height: 42px;\n  border-radius: 10px;\n  background: linear-gradient(135deg, #7B1FA2, #6A1B9A);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.page-icon-wrap i {\n  font-size: 22px;\n  color: #fff;\n}\n.page-subtitle {\n  display: block;\n  font-size: 12px;\n  color: #94a3b8;\n  margin-top: 2px;\n}\n.btn-icon {\n  width: 36px;\n  height: 36px;\n  border-radius: 8px;\n  border: 1.5px solid #d0d5dd;\n  background: #fff;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  transition: all 0.2s;\n}\n.btn-icon i {\n  font-size: 20px;\n  color: #667085;\n}\n.btn-icon:hover {\n  border-color: #7B1FA2;\n  background: #f9f0ff;\n}\n.btn-icon:hover i {\n  color: #7B1FA2;\n}\n.filter-card {\n  background: #fff;\n  border: 1px solid #e2e8f0;\n  border-radius: 12px;\n  padding: 16px 20px;\n  margin: 14px 0;\n  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.05);\n}\n.filter-row-inner {\n  display: flex;\n  align-items: flex-end;\n  gap: 16px;\n  flex-wrap: nowrap;\n}\n.filter-field {\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n}\n.filter-field.filter-field-user {\n  flex: 0 0 280px;\n}\n.filter-field.filter-action {\n  flex: 0 0 auto;\n}\n.filter-field:not(.filter-field-user):not(.filter-action) {\n  flex: 1;\n  min-width: 160px;\n}\n.filter-label {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  font-size: 11px;\n  font-weight: 600;\n  color: #64748b;\n  text-transform: uppercase;\n  letter-spacing: 0.4px;\n}\n.filter-label i {\n  font-size: 14px;\n}\n.custom-select-wrap {\n  position: relative;\n}\n.custom-select-wrap.open .custom-select-trigger {\n  border-color: #7B1FA2;\n  box-shadow: 0 0 0 3px rgba(123, 31, 162, 0.1);\n}\n.custom-select-trigger {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  height: 38px;\n  padding: 0 10px 0 12px;\n  border: 1.5px solid #d0d5dd;\n  border-radius: 8px;\n  background: #fff;\n  cursor: pointer;\n  transition: border-color 0.2s;\n  gap: 8px;\n}\n.custom-select-trigger:hover {\n  border-color: #7B1FA2;\n}\n.trigger-placeholder {\n  font-size: 13px;\n  color: #94a3b8;\n  display: flex;\n  align-items: center;\n  flex: 1;\n}\n.trigger-user {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  flex: 1;\n  min-width: 0;\n}\n.trigger-avatar {\n  width: 24px;\n  height: 24px;\n  border-radius: 50%;\n  background: linear-gradient(135deg, #7B1FA2, #6A1B9A);\n  color: #fff;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 11px;\n  font-weight: 700;\n  flex-shrink: 0;\n}\n.trigger-name {\n  font-size: 13px;\n  font-weight: 600;\n  color: #344054;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.trigger-arrow {\n  font-size: 20px;\n  color: #94a3b8;\n  flex-shrink: 0;\n  transition: transform 0.2s;\n}\n.open .trigger-arrow {\n  transform: rotate(180deg);\n}\n.custom-dropdown-panel {\n  position: absolute;\n  top: calc(100% + 4px);\n  left: 0;\n  right: 0;\n  background: #fff;\n  border: 1.5px solid #d0d5dd;\n  border-radius: 10px;\n  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.12);\n  z-index: 1000;\n  overflow: hidden;\n  min-width: 280px;\n}\n.dropdown-search-row {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  padding: 8px 10px;\n  border-bottom: 1px solid #f1f5f9;\n  background: #f8fafc;\n}\n.dropdown-search-row i {\n  font-size: 16px;\n  color: #94a3b8;\n  flex-shrink: 0;\n}\n.dropdown-search-row .dropdown-search-input {\n  flex: 1;\n  border: none;\n  outline: none;\n  background: transparent;\n  font-size: 13px;\n  color: #344054;\n  font-family: inherit;\n}\n.dropdown-search-row .dropdown-search-input::-moz-placeholder {\n  color: #b0b8c4;\n}\n.dropdown-search-row .dropdown-search-input::placeholder {\n  color: #b0b8c4;\n}\n.dropdown-search-row .clear-search {\n  font-size: 16px;\n  color: #94a3b8;\n  cursor: pointer;\n}\n.dropdown-search-row .clear-search:hover {\n  color: #475569;\n}\n.dropdown-list {\n  max-height: 220px;\n  overflow-y: auto;\n  padding: 4px 0;\n}\n.dropdown-item {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 8px 12px;\n  cursor: pointer;\n  transition: background 0.15s;\n}\n.dropdown-item:hover {\n  background: #f5f0ff;\n}\n.dropdown-item .item-avatar {\n  width: 28px;\n  height: 28px;\n  border-radius: 50%;\n  background: linear-gradient(135deg, #7B1FA2, #6A1B9A);\n  color: #fff;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 11px;\n  font-weight: 700;\n  flex-shrink: 0;\n}\n.dropdown-item .item-info {\n  display: flex;\n  flex-direction: column;\n  flex: 1;\n  min-width: 0;\n}\n.dropdown-item .item-name {\n  font-size: 13px;\n  font-weight: 600;\n  color: #1a1a2e;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.dropdown-item .item-mobile {\n  font-size: 11px;\n  color: #94a3b8;\n  font-family: monospace;\n}\n.dropdown-item .item-check {\n  font-size: 16px;\n  color: #7B1FA2;\n  flex-shrink: 0;\n}\n.dropdown-empty {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 6px;\n  padding: 16px;\n  font-size: 13px;\n  color: #94a3b8;\n}\n.dropdown-empty i {\n  font-size: 18px;\n}\n.clear-user-link {\n  display: inline-flex;\n  align-items: center;\n  gap: 2px;\n  font-size: 11px;\n  color: #e53935;\n  cursor: pointer;\n  margin-top: 3px;\n}\n.clear-user-link i {\n  font-size: 13px;\n}\n.clear-user-link:hover {\n  text-decoration: underline;\n}\n.date-input-wrap .date-input {\n  width: 100%;\n  height: 38px;\n  padding: 0 12px;\n  border: 1.5px solid #d0d5dd;\n  border-radius: 8px;\n  background: #fff;\n  font-size: 13px;\n  color: #344054;\n  font-family: inherit;\n  box-sizing: border-box;\n  outline: none;\n  transition: border-color 0.2s;\n}\n.date-input-wrap .date-input:hover {\n  border-color: #7B1FA2;\n}\n.date-input-wrap .date-input:focus {\n  border-color: #7B1FA2;\n  box-shadow: 0 0 0 3px rgba(123, 31, 162, 0.1);\n}\n.btn-search {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  background: linear-gradient(135deg, #7B1FA2, #6A1B9A);\n  color: #fff;\n  border: none;\n  border-radius: 8px;\n  padding: 0 22px;\n  height: 38px;\n  font-size: 13px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.2s;\n  white-space: nowrap;\n  box-shadow: 0 2px 6px rgba(123, 31, 162, 0.3);\n}\n.btn-search i {\n  font-size: 18px;\n}\n.btn-search:hover:not(:disabled) {\n  transform: translateY(-1px);\n  box-shadow: 0 4px 12px rgba(123, 31, 162, 0.4);\n}\n.btn-search:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n  transform: none;\n}\n.btn-download {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  background: #fff;\n  color: #16A34A;\n  border: 1.5px solid #BBF7D0;\n  border-radius: 8px;\n  padding: 0 14px;\n  height: 34px;\n  font-size: 12px;\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.2s;\n  white-space: nowrap;\n}\n.btn-download i {\n  font-size: 16px;\n}\n.btn-download:hover:not(:disabled) {\n  background: #F0FDF4;\n  border-color: #16A34A;\n  box-shadow: 0 2px 8px rgba(22, 163, 74, 0.15);\n}\n.btn-download:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n.report-header-bar {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  margin-bottom: 12px;\n  flex-wrap: wrap;\n}\n.report-emp-badge, .report-month-badge {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  padding: 5px 14px;\n  border-radius: 20px;\n  font-size: 12px;\n  font-weight: 600;\n}\n.report-emp-badge i, .report-month-badge i {\n  font-size: 15px;\n}\n.report-emp-badge {\n  background: #F3E8FF;\n  color: #7B1FA2;\n  border: 1px solid #DDD6FE;\n}\n.report-month-badge {\n  background: #EFF6FF;\n  color: #1976D2;\n  border: 1px solid #BFDBFE;\n}\n.report-table-wrap {\n  background: #fff;\n  border: 1px solid #e2e8f0;\n  border-radius: 12px;\n  overflow: hidden;\n  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.05);\n  overflow-x: auto;\n}\n.summary-table {\n  width: 100%;\n  border-collapse: collapse;\n  min-width: 900px;\n}\n.type-header-row .period-col {\n  background: #f8fafc;\n  border-bottom: 2px solid #e2e8f0;\n}\n.type-header-row .type-header {\n  text-align: center;\n  padding: 10px 14px;\n  font-size: 12px;\n  font-weight: 700;\n  letter-spacing: 0.4px;\n  border-bottom: 2px solid #e2e8f0;\n}\n.type-header-row .type-header i {\n  font-size: 15px;\n  vertical-align: middle;\n  margin-right: 4px;\n}\n.type-header-row .ply-header {\n  background: linear-gradient(135deg, #E8F5E9, #C8E6C9);\n  color: #2E7D32;\n  border-right: 2px solid #A5D6A7;\n}\n.type-header-row .amb-header {\n  background: linear-gradient(135deg, #E3F2FD, #BBDEFB);\n  color: #1565C0;\n}\n.col-header-row {\n  background: #f8fafc;\n  border-bottom: 2px solid #e2e8f0;\n}\n.col-header-row th {\n  padding: 9px 12px;\n  font-size: 11px;\n  font-weight: 700;\n  color: #475569;\n  text-transform: uppercase;\n  letter-spacing: 0.3px;\n  text-align: center;\n  border-right: 1px solid #e2e8f0;\n}\n.col-header-row th:last-child {\n  border-right: none;\n}\n.col-header-row .period-col {\n  text-align: left;\n  min-width: 160px;\n}\n.col-header-row .clickable-hint {\n  cursor: default;\n}\n.period-row-0 {\n  background: #FFFBF0;\n}\n.period-row-1 {\n  background: #fff;\n}\n.period-row-2 {\n  background: #F8F9FF;\n}\n.period-row-3 {\n  background: #FFF5F5;\n}\n.period-row-0:hover td, .period-row-1:hover td,\n.period-row-2:hover td, .period-row-3:hover td {\n  background: #f0f7ff !important;\n}\ntd {\n  border-bottom: 1px solid #f1f5f9;\n  border-right: 1px solid #f1f5f9;\n  vertical-align: middle;\n}\ntd:last-child {\n  border-right: none;\n}\n.period-label-cell {\n  padding: 12px 14px;\n  min-width: 160px;\n  border-right: 2px solid #e2e8f0;\n}\n.period-badge {\n  display: inline-block;\n  padding: 4px 12px;\n  border-radius: 14px;\n  font-size: 12px;\n  font-weight: 600;\n}\n.badge-0 {\n  background: #FEF9C3;\n  color: #854D0E;\n  border: 1px solid #FDE68A;\n}\n.badge-1 {\n  background: #F0FDF4;\n  color: #166534;\n  border: 1px solid #BBF7D0;\n}\n.badge-2 {\n  background: #EFF6FF;\n  color: #1E40AF;\n  border: 1px solid #BFDBFE;\n}\n.badge-3 {\n  background: #FFF1F2;\n  color: #9F1239;\n  border: 1px solid #FECDD3;\n}\n.metric-cell {\n  padding: 11px 12px;\n  text-align: center;\n  cursor: pointer;\n  transition: background 0.15s;\n}\n.metric-cell:hover {\n  background: #EDE9FE !important;\n}\n.metric-cell:hover .metric-val {\n  text-decoration: underline;\n  color: #7B1FA2 !important;\n}\n.amb-side {\n  border-left: 2px solid #BFDBFE;\n}\n.metric-val {\n  font-size: 14px;\n  font-weight: 700;\n  color: #1a1a2e;\n  transition: color 0.15s;\n}\n.metric-val.zero {\n  color: #cbd5e1;\n  font-weight: 400;\n}\n.active-val {\n  color: #16A34A;\n}\n.points-val {\n  color: #1976D2;\n}\n.legend-bar {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  margin-top: 8px;\n  font-size: 12px;\n  color: #94a3b8;\n}\n.legend-bar i {\n  font-size: 15px;\n}\n.skeleton-wrap {\n  background: #fff;\n  border-radius: 12px;\n  overflow: hidden;\n  border: 1px solid #e2e8f0;\n}\n.sk-row {\n  display: flex;\n  gap: 1px;\n  padding: 2px 0;\n}\n.sk-cell {\n  flex: 1;\n  height: 44px;\n  margin: 2px;\n  background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);\n  background-size: 200% 100%;\n  animation: shimmer 1.5s infinite;\n  border-radius: 4px;\n}\n.sk-period {\n  flex: 2;\n}\n@keyframes shimmer {\n  0% {\n    background-position: 200% 0;\n  }\n  100% {\n    background-position: -200% 0;\n  }\n}"

/***/ }),

/***/ "./src/app/loyalty-report/loyalty-report-influencer-summary/loyalty-report-influencer-summary.component.ts":
/*!*****************************************************************************************************************!*\
  !*** ./src/app/loyalty-report/loyalty-report-influencer-summary/loyalty-report-influencer-summary.component.ts ***!
  \*****************************************************************************************************************/
/*! exports provided: LoyaltyReportInfluencerSummaryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoyaltyReportInfluencerSummaryComponent", function() { return LoyaltyReportInfluencerSummaryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng6-toastr-notifications */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/ng6-toastr-notifications/fesm5/ng6-toastr-notifications.js");
/* harmony import */ var src_app_localstorage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/localstorage.service */ "./src/app/localstorage.service.ts");
/* harmony import */ var src_services_DatabaseService__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/_services/DatabaseService */ "./src/_services/DatabaseService.ts");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! file-saver */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/file-saver/dist/FileSaver.min.js");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _loyalty_report_influencer_summary_detail_modal_loyalty_report_influencer_summary_detail_modal_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../loyalty-report-influencer-summary-detail-modal/loyalty-report-influencer-summary-detail-modal.component */ "./src/app/loyalty-report/loyalty-report-influencer-summary-detail-modal/loyalty-report-influencer-summary-detail-modal.component.ts");








var LoyaltyReportInfluencerSummaryComponent = /** @class */ (function () {
    function LoyaltyReportInfluencerSummaryComponent(service, toast, session, dialog) {
        this.service = service;
        this.toast = toast;
        this.session = session;
        this.dialog = dialog;
        this.loader = false;
        this.salesUserLoader = false;
        this.excelLoader = false;
        this.allSalesUsers = [];
        this.filteredSalesUsers = [];
        this.selectedSalesUser = null;
        this.salesDropdownOpen = false;
        this.salesSearchText = '';
        this.selectedMonth = '';
        this.periods = [];
        this.employeeName = '';
    }
    LoyaltyReportInfluencerSummaryComponent.prototype.onDocumentClick = function (event) {
        var target = event.target;
        if (!target.closest('.custom-select-wrap')) {
            this.salesDropdownOpen = false;
        }
    };
    LoyaltyReportInfluencerSummaryComponent.prototype.ngOnInit = function () {
        this.loadAllSalesUsers();
        // default to current month
        var now = new Date();
        this.selectedMonth = now.getFullYear() + "-" + String(now.getMonth() + 1).padStart(2, '0');
    };
    LoyaltyReportInfluencerSummaryComponent.prototype.loadAllSalesUsers = function () {
        var _this = this;
        this.salesUserLoader = true;
        this.service.post_rqst({ search: '' }, 'Influencer/salesUserList').subscribe(function (resp) {
            if (resp['statusCode'] == 200) {
                _this.allSalesUsers = resp['all_sales_user'] || resp['data'] || [];
                _this.filteredSalesUsers = _this.allSalesUsers.slice();
            }
            _this.salesUserLoader = false;
        }, function () { _this.salesUserLoader = false; });
    };
    LoyaltyReportInfluencerSummaryComponent.prototype.toggleSalesDropdown = function () {
        this.salesDropdownOpen = !this.salesDropdownOpen;
        if (this.salesDropdownOpen) {
            this.salesSearchText = '';
            this.filteredSalesUsers = this.allSalesUsers.slice();
        }
    };
    LoyaltyReportInfluencerSummaryComponent.prototype.filterSalesUsers = function () {
        var q = (this.salesSearchText || '').toLowerCase().trim();
        this.filteredSalesUsers = q
            ? this.allSalesUsers.filter(function (u) { return (u.name || '').toLowerCase().includes(q) || (u.mobile || '').includes(q); })
            : this.allSalesUsers.slice();
    };
    LoyaltyReportInfluencerSummaryComponent.prototype.selectSalesUser = function (user) {
        this.selectedSalesUser = user;
        this.salesDropdownOpen = false;
        this.salesSearchText = '';
    };
    LoyaltyReportInfluencerSummaryComponent.prototype.clearSalesUser = function () {
        this.selectedSalesUser = null;
        this.salesDropdownOpen = false;
        this.salesSearchText = '';
        this.periods = [];
    };
    LoyaltyReportInfluencerSummaryComponent.prototype.getReport = function () {
        var _this = this;
        if (!this.selectedSalesUser) {
            this.toast.errorToastr('Please select a Sales User');
            return;
        }
        if (!this.selectedMonth) {
            this.toast.errorToastr('Please select a Month');
            return;
        }
        this.loader = true;
        this.periods = [];
        this.service.post_rqst({ employee_id: this.selectedSalesUser.id, month: this.selectedMonth }, 'Influencer/influencerSummaryReport').subscribe(function (resp) {
            _this.loader = false;
            if (resp['statusCode'] == 200) {
                _this.periods = resp['periods'] || [];
                _this.employeeName = resp['employee_name'] || '';
            }
            else {
                _this.toast.errorToastr(resp['statusMsg'] || 'Error');
            }
        }, function () { _this.loader = false; });
    };
    LoyaltyReportInfluencerSummaryComponent.prototype.refresh = function () {
        this.selectedSalesUser = null;
        this.salesSearchText = '';
        this.periods = [];
        this.employeeName = '';
    };
    LoyaltyReportInfluencerSummaryComponent.prototype.downloadExcel = function () {
        var _this = this;
        if (!this.selectedSalesUser || !this.periods.length)
            return;
        this.excelLoader = true;
        this.service.post_rqst({ employee_id: this.selectedSalesUser.id }, 'Influencer/influencerSummaryExcelFull').subscribe(function (resp) {
            _this.excelLoader = false;
            if (resp['statusCode'] == 200) {
                _this._buildAndSaveExcel(resp['ply'], resp['amb']);
            }
            else {
                _this.toast.errorToastr('Excel export failed');
            }
        }, function () { _this.excelLoader = false; _this.toast.errorToastr('Excel export failed'); });
    };
    LoyaltyReportInfluencerSummaryComponent.prototype._buildAndSaveExcel = function (ply, amb) {
        var emp = this.employeeName;
        var mon = this.selectedMonth;
        // ── Styles ──
        var b = function (color, w) {
            if (color === void 0) { color = '#9E9E9E'; }
            if (w === void 0) { w = 1; }
            return "<Borders>\n        <Border ss:Position=\"Top\"    ss:LineStyle=\"Continuous\" ss:Weight=\"" + w + "\" ss:Color=\"" + color + "\"/>\n        <Border ss:Position=\"Bottom\" ss:LineStyle=\"Continuous\" ss:Weight=\"" + w + "\" ss:Color=\"" + color + "\"/>\n        <Border ss:Position=\"Left\"   ss:LineStyle=\"Continuous\" ss:Weight=\"" + w + "\" ss:Color=\"" + color + "\"/>\n        <Border ss:Position=\"Right\"  ss:LineStyle=\"Continuous\" ss:Weight=\"" + w + "\" ss:Color=\"" + color + "\"/>\n      </Borders>";
        };
        var styles = "\n      <Style ss:ID=\"empLbl\">\n        <Font ss:Bold=\"1\" ss:Size=\"11\" ss:Color=\"#374151\"/>\n        <Interior ss:Color=\"#F3F4F6\" ss:Pattern=\"Solid\"/>\n        <Alignment ss:Horizontal=\"Left\" ss:Vertical=\"Center\"/>\n        " + b('#BDBDBD') + "\n      </Style>\n      <Style ss:ID=\"empVal\">\n        <Font ss:Bold=\"1\" ss:Size=\"12\" ss:Color=\"#111827\"/>\n        <Alignment ss:Horizontal=\"Left\" ss:Vertical=\"Center\"/>\n        " + b('#BDBDBD') + "\n      </Style>\n      <Style ss:ID=\"infHdr\">\n        <Font ss:Bold=\"1\" ss:Size=\"13\" ss:Color=\"#FFFFFF\"/>\n        <Interior ss:Color=\"#1B5E20\" ss:Pattern=\"Solid\"/>\n        <Alignment ss:Horizontal=\"Center\" ss:Vertical=\"Center\"/>\n        " + b('#1B5E20', 2) + "\n      </Style>\n      <Style ss:ID=\"plySecHdr\">\n        <Font ss:Bold=\"1\" ss:Size=\"11\" ss:Color=\"#FFFFFF\"/>\n        <Interior ss:Color=\"#388E3C\" ss:Pattern=\"Solid\"/>\n        <Alignment ss:Horizontal=\"Left\" ss:Vertical=\"Center\"/>\n        " + b('#2E7D32', 1) + "\n      </Style>\n      <Style ss:ID=\"ambSecHdr\">\n        <Font ss:Bold=\"1\" ss:Size=\"11\" ss:Color=\"#FFFFFF\"/>\n        <Interior ss:Color=\"#388E3C\" ss:Pattern=\"Solid\"/>\n        <Alignment ss:Horizontal=\"Left\" ss:Vertical=\"Center\"/>\n        " + b('#2E7D32', 1) + "\n      </Style>\n      <Style ss:ID=\"colHdr\">\n        <Font ss:Bold=\"1\" ss:Size=\"10\" ss:Color=\"#1B5E20\"/>\n        <Interior ss:Color=\"#C8E6C9\" ss:Pattern=\"Solid\"/>\n        <Alignment ss:Horizontal=\"Center\" ss:Vertical=\"Center\"/>\n        " + b('#81C784', 1) + "\n      </Style>\n      <Style ss:ID=\"dataNum\">\n        <Font ss:Size=\"11\" ss:Color=\"#111827\"/>\n        <Interior ss:Color=\"#FFFFFF\" ss:Pattern=\"Solid\"/>\n        <Alignment ss:Horizontal=\"Center\" ss:Vertical=\"Center\"/>\n        " + b('#E0E0E0', 1) + "\n      </Style>\n      <Style ss:ID=\"yellowRow\">\n        <Interior ss:Color=\"#FFFF00\" ss:Pattern=\"Solid\"/>\n        " + b('#BDBDBD', 1) + "\n      </Style>\n      <Style ss:ID=\"defText\">\n        <Font ss:Size=\"10\" ss:Italic=\"1\" ss:Color=\"#374151\"/>\n        <Alignment ss:Horizontal=\"Left\" ss:Vertical=\"Center\" ss:WrapText=\"1\"/>\n      </Style>\n      <Style ss:ID=\"pH\">\n        <Font ss:Bold=\"1\" ss:Size=\"10\" ss:Color=\"#FFFFFF\"/>\n        <Interior ss:Color=\"#1B5E20\" ss:Pattern=\"Solid\"/>\n        <Alignment ss:Horizontal=\"Center\"/>\n        " + b('#2E7D32', 1) + "\n      </Style>\n      <Style ss:ID=\"pE\">\n        <Interior ss:Color=\"#F1F8E9\" ss:Pattern=\"Solid\"/>\n        <Alignment ss:Horizontal=\"Center\"/>\n        " + b('#C8E6C9', 1) + "\n      </Style>\n      <Style ss:ID=\"pO\">\n        <Interior ss:Color=\"#FFFFFF\" ss:Pattern=\"Solid\"/>\n        <Alignment ss:Horizontal=\"Center\"/>\n        " + b('#E0E0E0', 1) + "\n      </Style>\n      <Style ss:ID=\"aH\">\n        <Font ss:Bold=\"1\" ss:Size=\"10\" ss:Color=\"#FFFFFF\"/>\n        <Interior ss:Color=\"#0D47A1\" ss:Pattern=\"Solid\"/>\n        <Alignment ss:Horizontal=\"Center\"/>\n        " + b('#1565C0', 1) + "\n      </Style>\n      <Style ss:ID=\"aE\">\n        <Interior ss:Color=\"#E3F2FD\" ss:Pattern=\"Solid\"/>\n        <Alignment ss:Horizontal=\"Center\"/>\n        " + b('#BBDEFB', 1) + "\n      </Style>\n      <Style ss:ID=\"aO\">\n        <Interior ss:Color=\"#FFFFFF\" ss:Pattern=\"Solid\"/>\n        <Alignment ss:Horizontal=\"Center\"/>\n        " + b('#E0E0E0', 1) + "\n      </Style>";
        var c = function (val, sid, type) {
            if (type === void 0) { type = 'String'; }
            return "<Cell ss:StyleID=\"" + sid + "\"><Data ss:Type=\"" + type + "\">" + String(val).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;') + "</Data></Cell>";
        };
        var n = function (val, sid) { return c(val, sid, 'Number'); };
        var mc = function (val, sid, across, type) {
            if (type === void 0) { type = 'String'; }
            return "<Cell ss:MergeAcross=\"" + across + "\" ss:StyleID=\"" + sid + "\"><Data ss:Type=\"" + type + "\">" + String(val).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;') + "</Data></Cell>";
        };
        // ── Sheet 1: Summary (image format) ──
        var colLabels = ['Enrolled', 'Logged', 'Active', 'Sheets Claimed', 'Points Redeemed'];
        var periodBlocks = this.periods.map(function (p) {
            return "<Row ss:Height=\"26\">\n        " + mc("PLY EXPERTS (" + p.label + ")", 'plySecHdr', 4) + "\n        " + mc("AMBASSADOR (" + p.label + ")", 'ambSecHdr', 4) + "\n      </Row>\n      <Row ss:Height=\"20\">\n        " + colLabels.map(function (l) { return c(l, 'colHdr'); }).join('') + "\n        " + colLabels.map(function (l) { return c(l, 'colHdr'); }).join('') + "\n      </Row>\n      <Row ss:Height=\"22\">\n        " + n(p.ply_expert.enrolled, 'dataNum') + n(p.ply_expert.logged, 'dataNum') + n(p.ply_expert.active, 'dataNum') + n(p.ply_expert.sheets, 'dataNum') + n(p.ply_expert.points, 'dataNum') + "\n        " + n(p.ambassador.enrolled, 'dataNum') + n(p.ambassador.logged, 'dataNum') + n(p.ambassador.active, 'dataNum') + n(p.ambassador.sheets, 'dataNum') + n(p.ambassador.points, 'dataNum') + "\n      </Row>";
        }).join('');
        var definitions = [
            'Enrolled Person: A person who is registered in the app by adding their mobile number.',
            'Logged Person: A person who has logged into the app.',
            'Active Person: A person who has successfully made a claim.',
            'Sheets Claimed: Total number of sheets claimed by the user.',
            'Points Redeemed: Total number of points redeemed by the user.'
        ].map(function (def) { return "<Row ss:Height=\"18\">" + mc(def, 'defText', 9) + "</Row>"; }).join('');
        var sheet1 = "<Worksheet ss:Name=\"Summary\">\n      <Table ss:DefaultRowHeight=\"18\">\n        <Column ss:Width=\"160\"/>\n        <Column ss:Width=\"90\"/><Column ss:Width=\"80\"/><Column ss:Width=\"120\"/><Column ss:Width=\"130\"/>\n        <Column ss:Width=\"90\"/><Column ss:Width=\"80\"/><Column ss:Width=\"80\"/><Column ss:Width=\"120\"/><Column ss:Width=\"130\"/>\n        <Row ss:Height=\"24\">\n          " + c('Employee Name', 'empLbl') + "\n          " + c(emp, 'empVal') + "\n        </Row>\n        <Row ss:Height=\"30\">\n          " + mc('Influencer data', 'infHdr', 9) + "\n        </Row>\n        " + periodBlocks + "\n        <Row ss:Height=\"20\">" + mc('', 'yellowRow', 9) + "</Row>\n        <Row ss:Height=\"8\"/>\n        " + definitions + "\n      </Table>\n    </Worksheet>";
        // ── Detail sheet builder ──
        var detailSheetConfig = [
            { key: 'enrolled', label: 'Enrolled', extraHdr: 'Enrolled Date', showDate: true, showVal: false, isPly: true },
            { key: 'logged', label: 'Logged', extraHdr: 'First Login', showDate: true, showVal: false, isPly: true },
            { key: 'active', label: 'Active', extraHdr: 'Purchases', showDate: false, showVal: true, isPly: true },
            { key: 'sheets', label: 'Sheets Claimed', extraHdr: 'Total Sheets', showDate: false, showVal: true, isPly: true },
            { key: 'points', label: 'Points Redeemed', extraHdr: 'Points', showDate: false, showVal: true, isPly: true },
            { key: 'enrolled', label: 'Enrolled', extraHdr: 'Enrolled Date', showDate: true, showVal: false, isPly: false },
            { key: 'logged', label: 'Logged', extraHdr: 'First Login', showDate: true, showVal: false, isPly: false },
            { key: 'active', label: 'Active', extraHdr: 'Purchases', showDate: false, showVal: true, isPly: false },
            { key: 'sheets', label: 'Sheets Claimed', extraHdr: 'Total Sheets', showDate: false, showVal: true, isPly: false },
            { key: 'points', label: 'Points Redeemed', extraHdr: 'Points', showDate: false, showVal: true, isPly: false },
        ];
        var detailSheets = detailSheetConfig.map(function (cfg) {
            var rows = cfg.isPly ? (ply[cfg.key] || []) : (amb[cfg.key] || []);
            var typeLabel = cfg.isPly ? 'PLY EXPERTS' : 'AMBASSADOR';
            var sheetName = ((cfg.isPly ? 'PLY' : 'AMB') + " - " + cfg.label).substring(0, 31);
            var hdrSid = cfg.isPly ? 'pH' : 'aH';
            var evenSid = cfg.isPly ? 'pE' : 'aE';
            var oddSid = cfg.isPly ? 'pO' : 'aO';
            var headers = ['S.No', 'Name', 'Mobile', cfg.extraHdr];
            var dataRows = rows.map(function (r, i) {
                var sid = i % 2 === 0 ? evenSid : oddSid;
                var extra = cfg.showDate
                    ? c(r.extra_date || '—', sid)
                    : n(r.extra_val || 0, sid);
                return "<Row ss:Height=\"20\">\n          " + n(i + 1, sid) + "\n          <Cell ss:StyleID=\"" + sid + "\"><Data ss:Type=\"String\">" + String(r.name || '').replace(/&/g, '&amp;').replace(/</g, '&lt;') + "</Data></Cell>\n          " + c(r.mobile || '', sid) + "\n          " + extra + "\n        </Row>";
            }).join('');
            return "<Worksheet ss:Name=\"" + sheetName + "\">\n        <Table ss:DefaultRowHeight=\"18\">\n          <Column ss:Width=\"50\"/><Column ss:Width=\"200\"/><Column ss:Width=\"120\"/><Column ss:Width=\"120\"/>\n          <Row ss:Height=\"28\">" + c(typeLabel + " \u2014 " + cfg.label + " (Lifetime) \u2014 " + emp, hdrSid) + "</Row>\n          <Row ss:Height=\"6\"/>\n          <Row ss:Height=\"22\">" + headers.map(function (h) { return c(h, hdrSid); }).join('') + "</Row>\n          " + dataRows + "\n          " + (rows.length === 0 ? "<Row ss:Height=\"30\"><Cell ss:StyleID=\"" + oddSid + "\"><Data ss:Type=\"String\">No data found</Data></Cell></Row>" : '') + "\n        </Table>\n      </Worksheet>";
        }).join('');
        var xml = "<?xml version=\"1.0\"?>\n<?mso-application progid=\"Excel.Sheet\"?>\n<Workbook xmlns=\"urn:schemas-microsoft-com:office:spreadsheet\"\n  xmlns:ss=\"urn:schemas-microsoft-com:office:spreadsheet\"\n  xmlns:x=\"urn:schemas-microsoft-com:office:excel\">\n  <Styles>" + styles + "</Styles>\n  " + sheet1 + "\n  " + detailSheets + "\n</Workbook>";
        var blob = new Blob([xml], { type: 'application/vnd.ms-excel;charset=utf-8' });
        Object(file_saver__WEBPACK_IMPORTED_MODULE_6__["saveAs"])(blob, "Influencer_Summary_" + emp + "_" + mon + ".xls");
    };
    LoyaltyReportInfluencerSummaryComponent.prototype.openDetail = function (period, drType, col, count) {
        if (!count && count !== 0)
            return;
        var typeLabel = drType === 8 ? 'PLY EXPERTS' : (drType === 21 ? 'FABRICATOR' : 'AMBASSADOR');
        var colLabels = {
            enrolled: 'Enrolled', logged: 'Logged', active: 'Active',
            sheets: 'Sheets Claimed', points: 'Points Redeemed'
        };
        this.dialog.open(_loyalty_report_influencer_summary_detail_modal_loyalty_report_influencer_summary_detail_modal_component__WEBPACK_IMPORTED_MODULE_7__["LoyaltyReportInfluencerSummaryDetailModalComponent"], {
            width: '700px',
            panelClass: 'cs-modal',
            data: {
                employee_id: this.selectedSalesUser.id,
                type: drType,
                column: col,
                date_from: period.date_from,
                date_to: period.date_to,
                period_label: period.label,
                type_label: typeLabel,
                col_label: colLabels[col],
                count: count
            }
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('document:click', ['$event']),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [MouseEvent]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], LoyaltyReportInfluencerSummaryComponent.prototype, "onDocumentClick", null);
    LoyaltyReportInfluencerSummaryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-loyalty-report-influencer-summary',
            template: __webpack_require__(/*! ./loyalty-report-influencer-summary.component.html */ "./src/app/loyalty-report/loyalty-report-influencer-summary/loyalty-report-influencer-summary.component.html"),
            styles: [__webpack_require__(/*! ./loyalty-report-influencer-summary.component.scss */ "./src/app/loyalty-report/loyalty-report-influencer-summary/loyalty-report-influencer-summary.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_services_DatabaseService__WEBPACK_IMPORTED_MODULE_5__["DatabaseService"],
            ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_3__["ToastrManager"],
            src_app_localstorage_service__WEBPACK_IMPORTED_MODULE_4__["sessionStorage"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]])
    ], LoyaltyReportInfluencerSummaryComponent);
    return LoyaltyReportInfluencerSummaryComponent;
}());



/***/ }),

/***/ "./src/app/loyalty-report/loyalty-report-inventory-report/loyalty-report-inventory-report.component.html":
/*!***************************************************************************************************************!*\
  !*** ./src/app/loyalty-report/loyalty-report-inventory-report/loyalty-report-inventory-report.component.html ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-container\">\r\n\r\n  <div class=\"tools-container\">\r\n    <h2>INVENTORY REPORT</h2>\r\n    <div class=\"left-auto df ac flex-gap-10\">\r\n\r\n      <!-- ── Dealer Searchable Dropdown ── -->\r\n      <div class=\"dealer-select-wrap\" [class.open]=\"dealerDropdownOpen\" style=\"position:relative;min-width:220px;\">\r\n        <div class=\"custom-select-trigger\" (click)=\"toggleDealerDropdown()\"\r\n          style=\"border:1px solid #ccc;border-radius:6px;padding:6px 10px;cursor:pointer;display:flex;align-items:center;justify-content:space-between;background:#fff;min-height:36px;\">\r\n          <ng-container *ngIf=\"selectedDealer; else noDealer\">\r\n            <span style=\"font-size:13px;font-weight:500;color:#333;\">\r\n              <i class=\"material-icons\" style=\"font-size:15px;vertical-align:middle;margin-right:4px;color:#1976d2;\">store</i>\r\n              {{selectedDealer.company_name}}\r\n            </span>\r\n            <i class=\"material-icons\" style=\"font-size:16px;color:#e53935;cursor:pointer;\"\r\n              (click)=\"$event.stopPropagation(); clearDealer()\">close</i>\r\n          </ng-container>\r\n          <ng-template #noDealer>\r\n            <span style=\"font-size:13px;color:#999;\">\r\n              <i class=\"material-icons\" style=\"font-size:15px;vertical-align:middle;margin-right:4px;\">store</i>\r\n              {{dealerLoader ? 'Loading...' : 'Select Dealer'}}\r\n            </span>\r\n            <i class=\"material-icons\" style=\"font-size:16px;color:#888;\">{{dealerDropdownOpen ? 'expand_less' : 'expand_more'}}</i>\r\n          </ng-template>\r\n        </div>\r\n\r\n        <!-- Dropdown panel -->\r\n        <div *ngIf=\"dealerDropdownOpen\"\r\n          style=\"position:absolute;top:100%;left:0;right:0;z-index:999;background:#fff;border:1px solid #ddd;border-radius:6px;box-shadow:0 4px 16px rgba(0,0,0,0.12);min-width:280px;\">\r\n          <div style=\"padding:8px;border-bottom:1px solid #eee;display:flex;align-items:center;gap:6px;\">\r\n            <i class=\"material-icons\" style=\"font-size:18px;color:#888;\">search</i>\r\n            <input type=\"text\" [(ngModel)]=\"dealerSearchText\" (input)=\"filterDealers()\"\r\n              placeholder=\"Search by name / mobile / code...\"\r\n              style=\"border:none;outline:none;width:100%;font-size:13px;\" autocomplete=\"off\">\r\n            <i class=\"material-icons\" *ngIf=\"dealerSearchText\" style=\"font-size:16px;color:#888;cursor:pointer;\"\r\n              (click)=\"dealerSearchText=''; filterDealers()\">close</i>\r\n          </div>\r\n          <div style=\"max-height:240px;overflow-y:auto;\">\r\n            <div *ngFor=\"let d of filteredDealers\"\r\n              (click)=\"selectDealer(d)\"\r\n              style=\"padding:9px 12px;cursor:pointer;border-bottom:1px solid #f5f5f5;display:flex;align-items:center;gap:8px;\"\r\n              [style.background]=\"selectedDealer && selectedDealer.id == d.id ? '#e3f2fd' : '#fff'\">\r\n              <div style=\"width:30px;height:30px;border-radius:50%;background:#1976d2;color:#fff;display:flex;align-items:center;justify-content:center;font-size:13px;font-weight:600;flex-shrink:0;\">\r\n                {{(d.company_name || 'D').charAt(0).toUpperCase()}}\r\n              </div>\r\n              <div>\r\n                <div style=\"font-size:13px;font-weight:500;color:#333;\">{{d.company_name}}</div>\r\n                <div style=\"font-size:11px;color:#777;\">{{d.mobile}} &bull; {{d.dr_code}}</div>\r\n              </div>\r\n              <i class=\"material-icons\" *ngIf=\"selectedDealer && selectedDealer.id == d.id\"\r\n                style=\"margin-left:auto;font-size:16px;color:#1976d2;\">check</i>\r\n            </div>\r\n            <div *ngIf=\"filteredDealers.length === 0 && !dealerLoader\"\r\n              style=\"padding:16px;text-align:center;color:#999;font-size:13px;\">\r\n              <i class=\"material-icons\" style=\"font-size:20px;display:block;margin-bottom:4px;\">search_off</i>\r\n              No dealers found\r\n            </div>\r\n            <div *ngIf=\"dealerLoader\" style=\"padding:12px;text-align:center;color:#888;font-size:13px;\">\r\n              <i class=\"material-icons\" style=\"font-size:18px;vertical-align:middle;\">sync</i> Loading...\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <!-- ── End Dealer Dropdown ── -->\r\n\r\n      <button mat-icon-button matTooltip=\"Refresh\" (click)=\"refresh()\">\r\n        <i class=\"material-icons\">refresh</i>\r\n      </button>\r\n      <button mat-icon-button matTooltip=\"Filter by Date\" (click)=\"openBottomSheet()\">\r\n        <i class=\"material-icons\">filter_alt</i>\r\n      </button>\r\n\r\n      <div class=\"pagination\" *ngIf=\"inventoryReportList.length > 0\">\r\n        <div class=\"pagination-content\">\r\n          Pages\r\n          <span>{{pagenumber}}</span>\r\n          of\r\n          <span>{{total_page}}</span>\r\n        </div>\r\n        <div class=\"page-nav\">\r\n          <button mat-icon-button matTooltip=\"Previous\" (click)=\"pervious()\" [disabled]=\"start == 0 || total_page == 0\">\r\n            <i class=\"material-icons\">navigate_before</i>\r\n          </button>\r\n          <button mat-icon-button matTooltip=\"Next\" (click)=\"nextPage()\" [disabled]=\"pagenumber == total_page\">\r\n            <i class=\"material-icons\">navigate_next</i>\r\n          </button>\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"cs-tabs\" style=\"padding: 0 16px; margin-bottom: 8px;\">\r\n    <button class=\"cs-tab-btn\" [class.active]=\"active_tab == 'Ply Expert'\" (click)=\"setTab('Ply Expert')\">Ply Expert</button>\r\n    <button class=\"cs-tab-btn\" [class.active]=\"active_tab == 'Ambassador'\" (click)=\"setTab('Ambassador')\">Ambassador</button>\r\n    <button class=\"cs-tab-btn\" [class.active]=\"active_tab == 'Fabricator'\" (click)=\"setTab('Fabricator')\">Fabricator</button>\r\n  </div>\r\n\r\n  <div class=\"container container-scroll\">\r\n    <div class=\"cs-table horizontal-scroll\">\r\n      <div class=\"sticky-head\">\r\n\r\n        <!-- Header Row 1 – Column Titles -->\r\n        <div class=\"table-head\">\r\n          <table>\r\n            <tr>\r\n              <th class=\"w50\">S.No</th>\r\n              <th class=\"w120\">Inventory Type</th>\r\n              <th class=\"w200\">Dealer Name</th>\r\n              <th class=\"w150\">Dealer Mobile</th>\r\n              <th class=\"w120\">Area</th>\r\n              <th class=\"w180\">Assigned Sales Person</th>\r\n              <th class=\"w180\">Influencer Name</th>\r\n              <th class=\"w150\">Influencer Mobile</th>\r\n              <th class=\"w150\">Invoice Number</th>\r\n              <th class=\"w120\">Purchase ID</th>\r\n              <th class=\"w200\">Product Name</th>\r\n              <th class=\"w130\">Brand</th>\r\n              <th class=\"w100\">Thickness</th>\r\n              <th class=\"w100\">Size</th>\r\n              <th class=\"w80\">QTY</th>\r\n            </tr>\r\n          </table>\r\n        </div>\r\n\r\n        <!-- Header Row 2 – Inline Search Filters -->\r\n        <div class=\"table-head bdrt\">\r\n          <table>\r\n            <tr>\r\n              <th class=\"w50\">&nbsp;</th>\r\n              <th class=\"w120\">\r\n                <div class=\"th-search-acmt\">\r\n                  <mat-form-field class=\"cs-input select-input\">\r\n                    <mat-select name=\"inventory_type\" [(ngModel)]=\"filter.inventory_type\"\r\n                      (selectionChange)=\"getInventoryReport()\">\r\n                      <mat-option value=\"\">All</mat-option>\r\n                      <mat-option value=\"Add Inventory\">Addition</mat-option>\r\n                      <mat-option value=\"Remove Inventory\">Removal</mat-option>\r\n                    </mat-select>\r\n                  </mat-form-field>\r\n                </div>\r\n              </th>\r\n              <th class=\"w200\">\r\n                <div class=\"th-search-acmt\">\r\n                  <mat-form-field class=\"example-full-width cs-input select-input\">\r\n                    <input matInput placeholder=\"Search...\" type=\"text\" name=\"dealer_name\"\r\n                      [(ngModel)]=\"filter.dealer_name\" (keyup.enter)=\"getInventoryReport()\">\r\n                  </mat-form-field>\r\n                </div>\r\n              </th>\r\n              <th class=\"w150\">\r\n                <div class=\"th-search-acmt\">\r\n                  <mat-form-field class=\"example-full-width cs-input select-input\">\r\n                    <input matInput placeholder=\"Search...\" type=\"text\" name=\"dealer_mobile\"\r\n                      [(ngModel)]=\"filter.dealer_mobile\" (keyup.enter)=\"getInventoryReport()\">\r\n                  </mat-form-field>\r\n                </div>\r\n              </th>\r\n              <th class=\"w120\">\r\n                <div class=\"th-search-acmt\">\r\n                  <mat-form-field class=\"example-full-width cs-input select-input\">\r\n                    <input matInput placeholder=\"Search...\" type=\"text\" name=\"city\"\r\n                      [(ngModel)]=\"filter.city\" (keyup.enter)=\"getInventoryReport()\">\r\n                  </mat-form-field>\r\n                </div>\r\n              </th>\r\n              <th class=\"w180\">\r\n                <div class=\"th-search-acmt\">\r\n                  <mat-form-field class=\"example-full-width cs-input select-input\">\r\n                    <input matInput placeholder=\"Search...\" type=\"text\" name=\"sales_person_name\"\r\n                      [(ngModel)]=\"filter.sales_person_name\" (keyup.enter)=\"getInventoryReport()\">\r\n                  </mat-form-field>\r\n                </div>\r\n              </th>\r\n              <th class=\"w180\">\r\n                <div class=\"th-search-acmt\">\r\n                  <mat-form-field class=\"example-full-width cs-input select-input\">\r\n                    <input matInput placeholder=\"Search...\" type=\"text\" name=\"influencer_name\"\r\n                      [(ngModel)]=\"filter.influencer_name\" (keyup.enter)=\"getInventoryReport()\">\r\n                  </mat-form-field>\r\n                </div>\r\n              </th>\r\n              <th class=\"w150\"></th>\r\n              <th class=\"w150\">\r\n                <div class=\"th-search-acmt\">\r\n                  <mat-form-field class=\"example-full-width cs-input select-input\">\r\n                    <input matInput placeholder=\"Search...\" type=\"text\" name=\"invoice_no\"\r\n                      [(ngModel)]=\"filter.invoice_no\" (keyup.enter)=\"getInventoryReport()\">\r\n                  </mat-form-field>\r\n                </div>\r\n              </th>\r\n              <th class=\"w120\">\r\n                <div class=\"th-search-acmt\">\r\n                  <mat-form-field class=\"example-full-width cs-input select-input\">\r\n                    <input matInput placeholder=\"Search...\" type=\"text\" name=\"purchase_id\"\r\n                      [(ngModel)]=\"filter.purchase_id\" (keyup.enter)=\"getInventoryReport()\">\r\n                  </mat-form-field>\r\n                </div>\r\n              </th>\r\n              <th class=\"w200\">\r\n                <div class=\"th-search-acmt\">\r\n                  <mat-form-field class=\"example-full-width cs-input select-input\">\r\n                    <input matInput placeholder=\"Search...\" type=\"text\" name=\"product_name\"\r\n                      [(ngModel)]=\"filter.product_name\" (keyup.enter)=\"getInventoryReport()\">\r\n                  </mat-form-field>\r\n                </div>\r\n              </th>\r\n              <th class=\"w130\">\r\n                <div class=\"th-search-acmt\">\r\n                  <mat-form-field class=\"example-full-width cs-input select-input\">\r\n                    <input matInput placeholder=\"Search...\" type=\"text\" name=\"brand_name\"\r\n                      [(ngModel)]=\"filter.brand_name\" (keyup.enter)=\"getInventoryReport()\">\r\n                  </mat-form-field>\r\n                </div>\r\n              </th>\r\n              <th class=\"w100\"></th>\r\n              <th class=\"w100\"></th>\r\n              <th class=\"w80\"></th>\r\n            </tr>\r\n          </table>\r\n        </div>\r\n\r\n      </div>\r\n\r\n      <!-- Data Rows -->\r\n      <div class=\"table-container\">\r\n        <div class=\"table-content\">\r\n          <table>\r\n            <ng-container *ngIf=\"!loader\">\r\n              <tr *ngFor=\"let row of inventoryReportList; let i = index\">\r\n                <td class=\"w50\">{{i + 1 + sr_no}}</td>\r\n                <td class=\"w120\">\r\n                  <span *ngIf=\"row.record_type == 'Add Inventory'\">Addition</span>\r\n                  <span *ngIf=\"row.record_type == 'Remove Inventory'\">Inventory Removal</span>\r\n                  <span *ngIf=\"row.record_type == 'Purchase Removal'\">Purchase Removal</span>\r\n                </td>\r\n                <td class=\"w200\">{{row.dealer_name || '-'}}</td>\r\n                <td class=\"w150\">{{row.dealer_mobile || '-'}}</td>\r\n                <td class=\"w120\">{{row.city || '-'}}</td>\r\n                <td class=\"w180\">{{row.assigned_sales_user_name || '-'}}</td>\r\n                <td class=\"w180\">{{row.influencer_name || '-'}}</td>\r\n                <td class=\"w150\">{{row.influencer_mobile || '-'}}</td>\r\n                <td class=\"w150\">{{row.invoice_no || '-'}}</td>\r\n                <td class=\"w120\">{{row.pur_id || '-'}}</td>\r\n                <td class=\"w200\">{{row.product_name || '-'}}</td>\r\n                <td class=\"w130\">{{row.brand || '-'}}</td>\r\n                <td class=\"w100\">{{row.thickness || '-'}}</td>\r\n                <td class=\"w100\">{{row.size || '-'}}</td>\r\n                <td class=\"w80\">{{row.qty || '-'}}</td>\r\n              </tr>\r\n            </ng-container>\r\n\r\n            <ng-container *ngIf=\"loader\">\r\n              <tr class=\"sk-loading\" *ngFor=\"let row of [].constructor(10);\">\r\n                <td class=\"w50\"><div>&nbsp;</div></td>\r\n                <td class=\"w120\"><div>&nbsp;</div></td>\r\n                <td class=\"w200\"><div>&nbsp;</div></td>\r\n                <td class=\"w150\"><div>&nbsp;</div></td>\r\n                <td class=\"w120\"><div>&nbsp;</div></td>\r\n                <td class=\"w180\"><div>&nbsp;</div></td>\r\n                <td class=\"w180\"><div>&nbsp;</div></td>\r\n                <td class=\"w150\"><div>&nbsp;</div></td>\r\n                <td class=\"w150\"><div>&nbsp;</div></td>\r\n                <td class=\"w120\"><div>&nbsp;</div></td>\r\n                <td class=\"w200\"><div>&nbsp;</div></td>\r\n                <td class=\"w130\"><div>&nbsp;</div></td>\r\n                <td class=\"w100\"><div>&nbsp;</div></td>\r\n                <td class=\"w100\"><div>&nbsp;</div></td>\r\n                <td class=\"w80\"><div>&nbsp;</div></td>\r\n              </tr>\r\n            </ng-container>\r\n          </table>\r\n        </div>\r\n      </div>\r\n\r\n      <ng-container *ngIf=\"inventoryReportList.length == 0 && !loader\">\r\n        <app-not-result-found></app-not-result-found>\r\n      </ng-container>\r\n\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"fab-btns\">\r\n    <button mat-fab class=\"excel\" *ngIf=\"inventoryReportList.length > 0\"\r\n      (click)=\"lastBtnValue('excel'); downloadExcel();\" [ngClass]=\"{'pulse': fabBtnValue == 'excel'}\">\r\n      <img src=\"assets/img/excel.svg\">\r\n      Download Excel\r\n    </button>\r\n  </div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/loyalty-report/loyalty-report-inventory-report/loyalty-report-inventory-report.component.scss":
/*!***************************************************************************************************************!*\
  !*** ./src/app/loyalty-report/loyalty-report-inventory-report/loyalty-report-inventory-report.component.scss ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/loyalty-report/loyalty-report-inventory-report/loyalty-report-inventory-report.component.ts":
/*!*************************************************************************************************************!*\
  !*** ./src/app/loyalty-report/loyalty-report-inventory-report/loyalty-report-inventory-report.component.ts ***!
  \*************************************************************************************************************/
/*! exports provided: LoyaltyReportInventoryReportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoyaltyReportInventoryReportComponent", function() { return LoyaltyReportInventoryReportComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng6-toastr-notifications */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/ng6-toastr-notifications/fesm5/ng6-toastr-notifications.js");
/* harmony import */ var src_app_bottom_sheet_bottom_sheet_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/bottom-sheet/bottom-sheet.component */ "./src/app/bottom-sheet/bottom-sheet.component.ts");
/* harmony import */ var src_app_localstorage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/localstorage.service */ "./src/app/localstorage.service.ts");
/* harmony import */ var src_services_DatabaseService__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/_services/DatabaseService */ "./src/_services/DatabaseService.ts");







var LoyaltyReportInventoryReportComponent = /** @class */ (function () {
    function LoyaltyReportInventoryReportComponent(bottomSheet, service, toast, session) {
        this.bottomSheet = bottomSheet;
        this.service = service;
        this.toast = toast;
        this.session = session;
        this.loader = false;
        this.inventoryReportList = [];
        this.page_limit = 50;
        this.start = 0;
        this.pagenumber = '';
        this.sr_no = 0;
        this.filter = {};
        this.active_tab = 'Ply Expert';
        this.fabBtnValue = 'add';
        // ── Dealer dropdown ──
        this.dealerList = [];
        this.filteredDealers = [];
        this.selectedDealer = null;
        this.dealerDropdownOpen = false;
        this.dealerSearchText = '';
        this.dealerLoader = false;
        var assign_login_data = this.session.getSession();
        this.logined_user_data = assign_login_data.value.data;
    }
    LoyaltyReportInventoryReportComponent.prototype.ngOnInit = function () {
        this.filter.warehouse_type = this.active_tab;
        this.loadDealers('');
        this.getInventoryReport();
    };
    LoyaltyReportInventoryReportComponent.prototype.setTab = function (tab) {
        this.active_tab = tab;
        this.filter.warehouse_type = tab;
        this.start = 0;
        this.getInventoryReport();
    };
    // ── Close dealer dropdown on outside click ──
    LoyaltyReportInventoryReportComponent.prototype.onDocumentClick = function (event) {
        var target = event.target;
        if (!target.closest('.dealer-select-wrap')) {
            this.dealerDropdownOpen = false;
        }
    };
    // ── Dealer dropdown methods ──
    LoyaltyReportInventoryReportComponent.prototype.loadDealers = function (search) {
        var _this = this;
        this.dealerLoader = true;
        this.service.post_rqst({ 'search': search }, 'Influencer/get_dealer_list').subscribe(function (resp) {
            if (resp['statusCode'] == 200) {
                _this.dealerList = resp['dealer'] || [];
                _this.filteredDealers = _this.dealerList.slice();
            }
            _this.dealerLoader = false;
        }, function () { _this.dealerLoader = false; });
    };
    LoyaltyReportInventoryReportComponent.prototype.toggleDealerDropdown = function () {
        this.dealerDropdownOpen = !this.dealerDropdownOpen;
        if (this.dealerDropdownOpen) {
            this.dealerSearchText = '';
            this.filteredDealers = this.dealerList.slice();
        }
    };
    LoyaltyReportInventoryReportComponent.prototype.filterDealers = function () {
        var q = (this.dealerSearchText || '').toLowerCase().trim();
        if (!q) {
            this.filteredDealers = this.dealerList.slice();
        }
        else {
            this.filteredDealers = this.dealerList.filter(function (d) {
                return (d.company_name || '').toLowerCase().includes(q) ||
                    (d.mobile || '').toLowerCase().includes(q) ||
                    (d.dr_code || '').toLowerCase().includes(q);
            });
            if (q.length >= 2) {
                this.loadDealers(q);
            }
        }
    };
    LoyaltyReportInventoryReportComponent.prototype.selectDealer = function (dealer) {
        this.selectedDealer = dealer;
        this.filter.dealer_id = dealer.id;
        this.dealerDropdownOpen = false;
        this.dealerSearchText = '';
        this.start = 0;
        this.getInventoryReport();
    };
    LoyaltyReportInventoryReportComponent.prototype.clearDealer = function () {
        this.selectedDealer = null;
        this.filter.dealer_id = '';
        this.dealerDropdownOpen = false;
        this.dealerSearchText = '';
        this.start = 0;
        this.getInventoryReport();
    };
    // ── Core report methods ──
    LoyaltyReportInventoryReportComponent.prototype.refresh = function () {
        this.start = 0;
        this.filter = {};
        this.selectedDealer = null;
        this.dealerSearchText = '';
        this.getInventoryReport();
    };
    LoyaltyReportInventoryReportComponent.prototype.pervious = function () {
        this.start = this.start - this.page_limit;
        this.getInventoryReport();
    };
    LoyaltyReportInventoryReportComponent.prototype.nextPage = function () {
        this.start = this.start + this.page_limit;
        this.getInventoryReport();
    };
    LoyaltyReportInventoryReportComponent.prototype.getInventoryReport = function () {
        var _this = this;
        this.loader = true;
        if (this.pagenumber > this.total_page) {
            this.pagenumber = this.total_page;
            this.start = this.pageCount - this.page_limit;
        }
        if (this.start < 0) {
            this.start = 0;
        }
        this.service.post_rqst({ 'start': this.start, 'pagelimit': this.page_limit, 'filter': this.filter }, 'LoyaltyReport/get_inventory_report').subscribe(function (resp) {
            if (resp['statusCode'] == 200) {
                _this.inventoryReportList = resp['result'];
                _this.pageCount = resp['count'];
                if (_this.pagenumber > _this.total_page) {
                    _this.pagenumber = _this.total_page;
                    _this.start = _this.pageCount - _this.page_limit;
                }
                else {
                    _this.pagenumber = Math.ceil(_this.start / _this.page_limit) + 1;
                }
                _this.total_page = Math.ceil(_this.pageCount / _this.page_limit);
                _this.sr_no = (_this.pagenumber - 1) * _this.page_limit;
                _this.loader = false;
            }
            else {
                _this.toast.errorToastr(resp['statusMsg']);
                _this.loader = false;
            }
        }, function (err) {
            _this.loader = false;
        });
    };
    LoyaltyReportInventoryReportComponent.prototype.openBottomSheet = function () {
        var _this = this;
        this.bottomSheet.open(src_app_bottom_sheet_bottom_sheet_component__WEBPACK_IMPORTED_MODULE_4__["BottomSheetComponent"], {
            data: { 'filterPage': 'inventory_report' }
        });
        this.bottomSheet._openedBottomSheetRef.afterDismissed().subscribe(function (data) {
            if (data) {
                _this.filter.date_from = data.date_from;
                _this.filter.date_to = data.date_to;
                _this.getInventoryReport();
            }
        });
    };
    LoyaltyReportInventoryReportComponent.prototype.downloadExcel = function () {
        var _this = this;
        this.loader = true;
        this.service.post_rqst({ 'filter': this.filter }, 'LoyaltyReport/excel_inventory_report').subscribe(function (result) {
            if (result['msg'] == true) {
                _this.loader = false;
                window.open(_this.service.downloadUrl + result['filename']);
                _this.getInventoryReport();
            }
            else {
                _this.loader = false;
            }
        }, function (err) {
            _this.loader = false;
        });
    };
    LoyaltyReportInventoryReportComponent.prototype.lastBtnValue = function (value) {
        this.fabBtnValue = value;
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('document:click', ['$event']),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [MouseEvent]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], LoyaltyReportInventoryReportComponent.prototype, "onDocumentClick", null);
    LoyaltyReportInventoryReportComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-loyalty-report-inventory-report',
            template: __webpack_require__(/*! ./loyalty-report-inventory-report.component.html */ "./src/app/loyalty-report/loyalty-report-inventory-report/loyalty-report-inventory-report.component.html"),
            styles: [__webpack_require__(/*! ./loyalty-report-inventory-report.component.scss */ "./src/app/loyalty-report/loyalty-report-inventory-report/loyalty-report-inventory-report.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatBottomSheet"],
            src_services_DatabaseService__WEBPACK_IMPORTED_MODULE_6__["DatabaseService"],
            ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_3__["ToastrManager"],
            src_app_localstorage_service__WEBPACK_IMPORTED_MODULE_5__["sessionStorage"]])
    ], LoyaltyReportInventoryReportComponent);
    return LoyaltyReportInventoryReportComponent;
}());



/***/ }),

/***/ "./src/app/loyalty-report/loyalty-report-module/loyalty-report/loyalty-report.module.ts":
/*!**********************************************************************************************!*\
  !*** ./src/app/loyalty-report/loyalty-report-module/loyalty-report/loyalty-report.module.ts ***!
  \**********************************************************************************************/
/*! exports provided: LoyaltyReportModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoyaltyReportModule", function() { return LoyaltyReportModule; });
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
/* harmony import */ var _loyalty_report_influencer_bonus_point_loyalty_report_influencer_bonus_point_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../loyalty-report-influencer-bonus-point/loyalty-report-influencer-bonus-point.component */ "./src/app/loyalty-report/loyalty-report-influencer-bonus-point/loyalty-report-influencer-bonus-point.component.ts");
/* harmony import */ var _loyalty_report_influencer_reward_point_loyalty_report_influencer_reward_point_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../loyalty-report-influencer-reward-point/loyalty-report-influencer-reward-point.component */ "./src/app/loyalty-report/loyalty-report-influencer-reward-point/loyalty-report-influencer-reward-point.component.ts");
/* harmony import */ var _loyalty_report_influencer_scan_point_loyalty_report_influencer_scan_point_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../loyalty-report-influencer-scan-point/loyalty-report-influencer-scan-point.component */ "./src/app/loyalty-report/loyalty-report-influencer-scan-point/loyalty-report-influencer-scan-point.component.ts");
/* harmony import */ var _loyalty_report_influencer_categorywise_scan_point_loyalty_report_influencer_categorywise_scan_point_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../../loyalty-report-influencer-categorywise-scan-point/loyalty-report-influencer-categorywise-scan-point.component */ "./src/app/loyalty-report/loyalty-report-influencer-categorywise-scan-point/loyalty-report-influencer-categorywise-scan-point.component.ts");
/* harmony import */ var _loyalty_report_state_wise_login_ageing_loyalty_report_state_wise_login_ageing_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../../loyalty-report-state-wise-login-ageing/loyalty-report-state-wise-login-ageing.component */ "./src/app/loyalty-report/loyalty-report-state-wise-login-ageing/loyalty-report-state-wise-login-ageing.component.ts");
/* harmony import */ var _loyalty_report_month_wise_scan_loyalty_report_month_wise_scan_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../../loyalty-report-month-wise-scan/loyalty-report-month-wise-scan.component */ "./src/app/loyalty-report/loyalty-report-month-wise-scan/loyalty-report-month-wise-scan.component.ts");
/* harmony import */ var _loyalty_report_scan_point_req_list_loyalty_report_scan_point_req_list_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../../loyalty-report-scan-point-req-list/loyalty-report-scan-point-req-list.component */ "./src/app/loyalty-report/loyalty-report-scan-point-req-list/loyalty-report-scan-point-req-list.component.ts");
/* harmony import */ var _loyalty_report_seven_days_not_scanned_loyalty_report_seven_days_not_scanned_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../../loyalty-report-seven-days-not-scanned/loyalty-report-seven-days-not-scanned.component */ "./src/app/loyalty-report/loyalty-report-seven-days-not-scanned/loyalty-report-seven-days-not-scanned.component.ts");
/* harmony import */ var _loyalty_report_state_kyc_status_loyalty_report_state_kyc_status_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../../loyalty-report-state-kyc-status/loyalty-report-state-kyc-status.component */ "./src/app/loyalty-report/loyalty-report-state-kyc-status/loyalty-report-state-kyc-status.component.ts");
/* harmony import */ var _loyalty_report_influencer_monthwise_scan_loyalty_report_influencer_monthwise_scan_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../../loyalty-report-influencer-monthwise-scan/loyalty-report-influencer-monthwise-scan.component */ "./src/app/loyalty-report/loyalty-report-influencer-monthwise-scan/loyalty-report-influencer-monthwise-scan.component.ts");
/* harmony import */ var _loyalty_report_point_summary_loyalty_report_point_summary_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../../loyalty-report-point-summary/loyalty-report-point-summary.component */ "./src/app/loyalty-report/loyalty-report-point-summary/loyalty-report-point-summary.component.ts");
/* harmony import */ var _loyalty_report_not_scanned_seven_day_loyalty_report_not_scanned_seven_day_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../../loyalty-report-not-scanned-seven-day/loyalty-report-not-scanned-seven-day.component */ "./src/app/loyalty-report/loyalty-report-not-scanned-seven-day/loyalty-report-not-scanned-seven-day.component.ts");
/* harmony import */ var _loyalty_report_coupon_history_loyalty_report_coupon_history_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../../loyalty-report-coupon-history/loyalty-report-coupon-history.component */ "./src/app/loyalty-report/loyalty-report-coupon-history/loyalty-report-coupon-history.component.ts");
/* harmony import */ var _loyalty_report_scan_ageing_loyalty_report_scan_ageing_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../../loyalty-report-scan-ageing/loyalty-report-scan-ageing.component */ "./src/app/loyalty-report/loyalty-report-scan-ageing/loyalty-report-scan-ageing.component.ts");
/* harmony import */ var _loyalty_report_influencer_redemption_loyalty_report_influencer_redemption_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../../loyalty-report-influencer-redemption/loyalty-report-influencer-redemption.component */ "./src/app/loyalty-report/loyalty-report-influencer-redemption/loyalty-report-influencer-redemption.component.ts");
/* harmony import */ var _loyalty_report_dr_redemption_wise_loyalty_report_dr_redemption_wise_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../../loyalty-report-dr-redemption-wise/loyalty-report-dr-redemption-wise.component */ "./src/app/loyalty-report/loyalty-report-dr-redemption-wise/loyalty-report-dr-redemption-wise.component.ts");
/* harmony import */ var _loyalty_report_dr_redemption_decline_modal_loyalty_report_dr_redemption_decline_modal_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../../loyalty-report-dr-redemption-decline-modal/loyalty-report-dr-redemption-decline-modal.component */ "./src/app/loyalty-report/loyalty-report-dr-redemption-decline-modal/loyalty-report-dr-redemption-decline-modal.component.ts");
/* harmony import */ var _loyalty_report_influencer_summary_loyalty_report_influencer_summary_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ../../loyalty-report-influencer-summary/loyalty-report-influencer-summary.component */ "./src/app/loyalty-report/loyalty-report-influencer-summary/loyalty-report-influencer-summary.component.ts");
/* harmony import */ var _loyalty_report_influencer_summary_detail_modal_loyalty_report_influencer_summary_detail_modal_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ../../loyalty-report-influencer-summary-detail-modal/loyalty-report-influencer-summary-detail-modal.component */ "./src/app/loyalty-report/loyalty-report-influencer-summary-detail-modal/loyalty-report-influencer-summary-detail-modal.component.ts");
/* harmony import */ var _loyalty_report_inventory_report_loyalty_report_inventory_report_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ../../loyalty-report-inventory-report/loyalty-report-inventory-report.component */ "./src/app/loyalty-report/loyalty-report-inventory-report/loyalty-report-inventory-report.component.ts");
/* harmony import */ var _loyalty_report_dealer_detail_report_loyalty_report_dealer_detail_report_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ../../loyalty-report-dealer-detail-report/loyalty-report-dealer-detail-report.component */ "./src/app/loyalty-report/loyalty-report-dealer-detail-report/loyalty-report-dealer-detail-report.component.ts");
/* harmony import */ var _loyalty_report_product_inventory_report_loyalty_report_product_inventory_report_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! ../../loyalty-report-product-inventory-report/loyalty-report-product-inventory-report.component */ "./src/app/loyalty-report/loyalty-report-product-inventory-report/loyalty-report-product-inventory-report.component.ts");
/* harmony import */ var _loyalty_report_dealer_inventory_ledger_loyalty_report_dealer_inventory_ledger_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! ../../loyalty-report-dealer-inventory-ledger/loyalty-report-dealer-inventory-ledger.component */ "./src/app/loyalty-report/loyalty-report-dealer-inventory-ledger/loyalty-report-dealer-inventory-ledger.component.ts");



































var ReportsRoutes = [
    {
        path: "", children: [
            { path: "loyalty-report-influencer-bonus-point", component: _loyalty_report_influencer_bonus_point_loyalty_report_influencer_bonus_point_component__WEBPACK_IMPORTED_MODULE_12__["LoyaltyReportInfluencerBonusPointComponent"], canActivate: [src_app_auth_component_guard__WEBPACK_IMPORTED_MODULE_3__["AuthComponentGuard"]], data: { expectedRole: ['1'] } },
            { path: "loyalty-report-influencer-reward-point", component: _loyalty_report_influencer_reward_point_loyalty_report_influencer_reward_point_component__WEBPACK_IMPORTED_MODULE_13__["LoyaltyReportInfluencerRewardPointComponent"], canActivate: [src_app_auth_component_guard__WEBPACK_IMPORTED_MODULE_3__["AuthComponentGuard"]], data: { expectedRole: ['1'] } },
            { path: "loyalty-report-influencer-scan-point", component: _loyalty_report_influencer_scan_point_loyalty_report_influencer_scan_point_component__WEBPACK_IMPORTED_MODULE_14__["LoyaltyReportInfluencerScanPointComponent"], canActivate: [src_app_auth_component_guard__WEBPACK_IMPORTED_MODULE_3__["AuthComponentGuard"]], data: { expectedRole: ['1'] } },
            { path: "loyalty-report-influencer-categorywise-scan-point", component: _loyalty_report_influencer_categorywise_scan_point_loyalty_report_influencer_categorywise_scan_point_component__WEBPACK_IMPORTED_MODULE_15__["LoyaltyReportInfluencerCategorywiseScanPointComponent"], canActivate: [src_app_auth_component_guard__WEBPACK_IMPORTED_MODULE_3__["AuthComponentGuard"]], data: { expectedRole: ['1'] } },
            { path: "loyalty-report/loyalty-report-influencer-categorywise-scan-point/:data/", component: _loyalty_report_influencer_categorywise_scan_point_loyalty_report_influencer_categorywise_scan_point_component__WEBPACK_IMPORTED_MODULE_15__["LoyaltyReportInfluencerCategorywiseScanPointComponent"], canActivate: [src_app_auth_component_guard__WEBPACK_IMPORTED_MODULE_3__["AuthComponentGuard"]], data: { expectedRole: ['1'] } },
            { path: "pointcat-report/:data/", component: _loyalty_report_influencer_categorywise_scan_point_loyalty_report_influencer_categorywise_scan_point_component__WEBPACK_IMPORTED_MODULE_15__["LoyaltyReportInfluencerCategorywiseScanPointComponent"], canActivate: [src_app_auth_component_guard__WEBPACK_IMPORTED_MODULE_3__["AuthComponentGuard"]], data: { expectedRole: ['1'] } },
            { path: "loyalty-report-influencer-redemption", component: _loyalty_report_influencer_redemption_loyalty_report_influencer_redemption_component__WEBPACK_IMPORTED_MODULE_26__["LoyaltyReportInfluencerRedemptionComponent"], canActivate: [src_app_auth_component_guard__WEBPACK_IMPORTED_MODULE_3__["AuthComponentGuard"]], data: { expectedRole: ['1'] } },
            { path: "loyalty-report-state-wise-login-ageing", component: _loyalty_report_state_wise_login_ageing_loyalty_report_state_wise_login_ageing_component__WEBPACK_IMPORTED_MODULE_16__["LoyaltyReportStateWiseLoginAgeingComponent"], canActivate: [src_app_auth_component_guard__WEBPACK_IMPORTED_MODULE_3__["AuthComponentGuard"]], data: { expectedRole: ['1'] } },
            { path: "loyalty-report-state-kyc-status", component: _loyalty_report_state_kyc_status_loyalty_report_state_kyc_status_component__WEBPACK_IMPORTED_MODULE_20__["LoyaltyReportStateKycStatusComponent"], canActivate: [src_app_auth_component_guard__WEBPACK_IMPORTED_MODULE_3__["AuthComponentGuard"]], data: { expectedRole: ['1'] } },
            { path: "loyalty-report-point-summary", component: _loyalty_report_point_summary_loyalty_report_point_summary_component__WEBPACK_IMPORTED_MODULE_22__["LoyaltyReportPointSummaryComponent"], canActivate: [src_app_auth_component_guard__WEBPACK_IMPORTED_MODULE_3__["AuthComponentGuard"]], data: { expectedRole: ['1'] } },
            { path: "loyalty-report-scan-ageing", component: _loyalty_report_scan_ageing_loyalty_report_scan_ageing_component__WEBPACK_IMPORTED_MODULE_25__["LoyaltyReportScanAgeingComponent"], canActivate: [src_app_auth_component_guard__WEBPACK_IMPORTED_MODULE_3__["AuthComponentGuard"]], data: { expectedRole: ['1'] } },
            { path: "loyalty-report-scan-point-req-list", component: _loyalty_report_scan_point_req_list_loyalty_report_scan_point_req_list_component__WEBPACK_IMPORTED_MODULE_18__["LoyaltyReportScanPointReqListComponent"], canActivate: [src_app_auth_component_guard__WEBPACK_IMPORTED_MODULE_3__["AuthComponentGuard"]], data: { expectedRole: ['1'] } },
            { path: "loyalty-report-influencer-monthwise-scan", component: _loyalty_report_influencer_monthwise_scan_loyalty_report_influencer_monthwise_scan_component__WEBPACK_IMPORTED_MODULE_21__["LoyaltyReportInfluencerMonthwiseScanComponent"], canActivate: [src_app_auth_component_guard__WEBPACK_IMPORTED_MODULE_3__["AuthComponentGuard"]], data: { expectedRole: ['1'] } },
            { path: "loyalty-report-not-scanned-seven-day", component: _loyalty_report_not_scanned_seven_day_loyalty_report_not_scanned_seven_day_component__WEBPACK_IMPORTED_MODULE_23__["LoyaltyReportNotScannedSevenDayComponent"], canActivate: [src_app_auth_component_guard__WEBPACK_IMPORTED_MODULE_3__["AuthComponentGuard"]], data: { expectedRole: ['1'] } },
            { path: "loyalty-report-coupon-history", component: _loyalty_report_coupon_history_loyalty_report_coupon_history_component__WEBPACK_IMPORTED_MODULE_24__["LoyaltyReportCouponHistoryComponent"], canActivate: [src_app_auth_component_guard__WEBPACK_IMPORTED_MODULE_3__["AuthComponentGuard"]], data: { expectedRole: ['1'] } },
            { path: "loyalty-report-month-wise-scan", component: _loyalty_report_month_wise_scan_loyalty_report_month_wise_scan_component__WEBPACK_IMPORTED_MODULE_17__["LoyaltyReportMonthWiseScanComponent"], canActivate: [src_app_auth_component_guard__WEBPACK_IMPORTED_MODULE_3__["AuthComponentGuard"]], data: { expectedRole: ['1'] } },
            { path: "loyalty-report-seven-days-not-scanned", component: _loyalty_report_seven_days_not_scanned_loyalty_report_seven_days_not_scanned_component__WEBPACK_IMPORTED_MODULE_19__["LoyaltyReportSevenDaysNotScannedComponent"], canActivate: [src_app_auth_component_guard__WEBPACK_IMPORTED_MODULE_3__["AuthComponentGuard"]], data: { expectedRole: ['1'] } },
            { path: "loyalty-report-dr-redemption-wise", component: _loyalty_report_dr_redemption_wise_loyalty_report_dr_redemption_wise_component__WEBPACK_IMPORTED_MODULE_27__["LoyaltyReportDrRedemptionWiseComponent"], canActivate: [src_app_auth_component_guard__WEBPACK_IMPORTED_MODULE_3__["AuthComponentGuard"]], data: { expectedRole: ['1'] } },
            { path: "loyalty-report-influencer-summary", component: _loyalty_report_influencer_summary_loyalty_report_influencer_summary_component__WEBPACK_IMPORTED_MODULE_29__["LoyaltyReportInfluencerSummaryComponent"], canActivate: [src_app_auth_component_guard__WEBPACK_IMPORTED_MODULE_3__["AuthComponentGuard"]], data: { expectedRole: ['1'] } },
            { path: "loyalty-report-inventory-report", component: _loyalty_report_inventory_report_loyalty_report_inventory_report_component__WEBPACK_IMPORTED_MODULE_31__["LoyaltyReportInventoryReportComponent"], canActivate: [src_app_auth_component_guard__WEBPACK_IMPORTED_MODULE_3__["AuthComponentGuard"]], data: { expectedRole: ['1'] } },
            { path: "loyalty-report-dealer-detail-report", component: _loyalty_report_dealer_detail_report_loyalty_report_dealer_detail_report_component__WEBPACK_IMPORTED_MODULE_32__["LoyaltyReportDealerDetailReportComponent"], canActivate: [src_app_auth_component_guard__WEBPACK_IMPORTED_MODULE_3__["AuthComponentGuard"]], data: { expectedRole: ['1'] } },
            { path: "loyalty-report-product-inventory-report", component: _loyalty_report_product_inventory_report_loyalty_report_product_inventory_report_component__WEBPACK_IMPORTED_MODULE_33__["LoyaltyReportProductInventoryReportComponent"], canActivate: [src_app_auth_component_guard__WEBPACK_IMPORTED_MODULE_3__["AuthComponentGuard"]], data: { expectedRole: ['1'] } },
            { path: "loyalty-report-dealer-inventory-ledger", component: _loyalty_report_dealer_inventory_ledger_loyalty_report_dealer_inventory_ledger_component__WEBPACK_IMPORTED_MODULE_34__["LoyaltyReportDealerInventoryLedgerComponent"], canActivate: [src_app_auth_component_guard__WEBPACK_IMPORTED_MODULE_3__["AuthComponentGuard"]], data: { expectedRole: ['1'] } },
        ]
    }
];
var LoyaltyReportModule = /** @class */ (function () {
    function LoyaltyReportModule() {
    }
    LoyaltyReportModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_loyalty_report_influencer_bonus_point_loyalty_report_influencer_bonus_point_component__WEBPACK_IMPORTED_MODULE_12__["LoyaltyReportInfluencerBonusPointComponent"], _loyalty_report_influencer_reward_point_loyalty_report_influencer_reward_point_component__WEBPACK_IMPORTED_MODULE_13__["LoyaltyReportInfluencerRewardPointComponent"], _loyalty_report_influencer_scan_point_loyalty_report_influencer_scan_point_component__WEBPACK_IMPORTED_MODULE_14__["LoyaltyReportInfluencerScanPointComponent"], _loyalty_report_influencer_categorywise_scan_point_loyalty_report_influencer_categorywise_scan_point_component__WEBPACK_IMPORTED_MODULE_15__["LoyaltyReportInfluencerCategorywiseScanPointComponent"], _loyalty_report_influencer_redemption_loyalty_report_influencer_redemption_component__WEBPACK_IMPORTED_MODULE_26__["LoyaltyReportInfluencerRedemptionComponent"],
                _loyalty_report_state_wise_login_ageing_loyalty_report_state_wise_login_ageing_component__WEBPACK_IMPORTED_MODULE_16__["LoyaltyReportStateWiseLoginAgeingComponent"], _loyalty_report_state_kyc_status_loyalty_report_state_kyc_status_component__WEBPACK_IMPORTED_MODULE_20__["LoyaltyReportStateKycStatusComponent"], _loyalty_report_point_summary_loyalty_report_point_summary_component__WEBPACK_IMPORTED_MODULE_22__["LoyaltyReportPointSummaryComponent"], _loyalty_report_scan_ageing_loyalty_report_scan_ageing_component__WEBPACK_IMPORTED_MODULE_25__["LoyaltyReportScanAgeingComponent"],
                _loyalty_report_scan_point_req_list_loyalty_report_scan_point_req_list_component__WEBPACK_IMPORTED_MODULE_18__["LoyaltyReportScanPointReqListComponent"], _loyalty_report_influencer_monthwise_scan_loyalty_report_influencer_monthwise_scan_component__WEBPACK_IMPORTED_MODULE_21__["LoyaltyReportInfluencerMonthwiseScanComponent"], _loyalty_report_not_scanned_seven_day_loyalty_report_not_scanned_seven_day_component__WEBPACK_IMPORTED_MODULE_23__["LoyaltyReportNotScannedSevenDayComponent"], _loyalty_report_coupon_history_loyalty_report_coupon_history_component__WEBPACK_IMPORTED_MODULE_24__["LoyaltyReportCouponHistoryComponent"],
                _loyalty_report_month_wise_scan_loyalty_report_month_wise_scan_component__WEBPACK_IMPORTED_MODULE_17__["LoyaltyReportMonthWiseScanComponent"], _loyalty_report_seven_days_not_scanned_loyalty_report_seven_days_not_scanned_component__WEBPACK_IMPORTED_MODULE_19__["LoyaltyReportSevenDaysNotScannedComponent"],
                _loyalty_report_dr_redemption_wise_loyalty_report_dr_redemption_wise_component__WEBPACK_IMPORTED_MODULE_27__["LoyaltyReportDrRedemptionWiseComponent"],
                _loyalty_report_dr_redemption_decline_modal_loyalty_report_dr_redemption_decline_modal_component__WEBPACK_IMPORTED_MODULE_28__["LoyaltyReportDrRedemptionDeclineModalComponent"],
                _loyalty_report_influencer_summary_loyalty_report_influencer_summary_component__WEBPACK_IMPORTED_MODULE_29__["LoyaltyReportInfluencerSummaryComponent"],
                _loyalty_report_influencer_summary_detail_modal_loyalty_report_influencer_summary_detail_modal_component__WEBPACK_IMPORTED_MODULE_30__["LoyaltyReportInfluencerSummaryDetailModalComponent"],
                _loyalty_report_inventory_report_loyalty_report_inventory_report_component__WEBPACK_IMPORTED_MODULE_31__["LoyaltyReportInventoryReportComponent"],
                _loyalty_report_dealer_detail_report_loyalty_report_dealer_detail_report_component__WEBPACK_IMPORTED_MODULE_32__["LoyaltyReportDealerDetailReportComponent"],
                _loyalty_report_product_inventory_report_loyalty_report_product_inventory_report_component__WEBPACK_IMPORTED_MODULE_33__["LoyaltyReportProductInventoryReportComponent"],
                _loyalty_report_dealer_inventory_ledger_loyalty_report_dealer_inventory_ledger_component__WEBPACK_IMPORTED_MODULE_34__["LoyaltyReportDealerInventoryLedgerComponent"],],
            entryComponents: [
                _loyalty_report_dr_redemption_decline_modal_loyalty_report_dr_redemption_decline_modal_component__WEBPACK_IMPORTED_MODULE_28__["LoyaltyReportDrRedemptionDeclineModalComponent"],
                _loyalty_report_influencer_summary_detail_modal_loyalty_report_influencer_summary_detail_modal_component__WEBPACK_IMPORTED_MODULE_30__["LoyaltyReportInfluencerSummaryDetailModalComponent"],
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(ReportsRoutes),
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
    ], LoyaltyReportModule);
    return LoyaltyReportModule;
}());



/***/ }),

/***/ "./src/app/loyalty-report/loyalty-report-month-wise-scan/loyalty-report-month-wise-scan.component.html":
/*!*************************************************************************************************************!*\
  !*** ./src/app/loyalty-report/loyalty-report-month-wise-scan/loyalty-report-month-wise-scan.component.html ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-container\">\r\n\r\n  <div class=\"tools-container\">   \r\n    <h2>MONTH WISE SCAN REPORT</h2>\r\n    <div class=\"left-auto df ac flex-gap-10\">\r\n      <button mat-icon-button matTooltip=\"Refresh\" (click)=\"refresh()\">\r\n        <i class=\"material-icons\">refresh</i>\r\n      </button>\r\n      <button mat-icon-button matTooltip=\"Filter\" (click)=\"openBottomSheet()\">\r\n        <i class=\"material-icons\">filter_alt</i>\r\n      </button>\r\n\r\n      <div class=\"pagination\" *ngIf=\"secondaryProductReportList.length > 0\">\r\n        <div class=\"pagination-content\">\r\n          Pages\r\n          <span>{{pagenumber}}</span>\r\n          of\r\n          <span>{{total_page}}</span>\r\n        </div>\r\n        <div class=\"page-nav\">\r\n\r\n          <button mat-icon-button matTooltip=\"Older\" (click)=\"pervious()\" [disabled]=\"start == 0 || total_page == 0\">\r\n            <i class=\"material-icons\">navigate_before</i>\r\n          </button>\r\n          <button mat-icon-button matTooltip=\"Newer\" (click)=\"nextPage()\" [disabled]=\"pagenumber == total_page \">\r\n            <i class=\"material-icons\">navigate_next</i>\r\n          </button>\r\n        </div>\r\n      </div>\r\n\r\n\r\n    </div>\r\n  </div>\r\n  <div class=\"container container-scroll\">\r\n    <div class=\"cs-table horizontal-scroll\">\r\n      <div class=\"sticky-head\">\r\n        <div class=\"table-head\">\r\n          <table>\r\n            <tr>\r\n              <th class=\"w50 text-center\" *ngIf=\"header_list[0]\">{{header_list[0]}}</th>\r\n           <th class=\"w100 text-center\" *ngIf=\"header_list[1]\">{{header_list[1]}}</th>\r\n           <th class=\"w100 text-center\" *ngIf=\"header_list[2]\">{{header_list[2]}}</th>\r\n           <th class=\"w100 text-center\" *ngIf=\"header_list[3]\">{{header_list[3]}}</th>\r\n           <th class=\"w100 text-center\" *ngIf=\"header_list[4]\">{{header_list[4]}}</th>\r\n           <th class=\"w100 text-center\" *ngIf=\"header_list[5]\">{{header_list[5]}}</th>\r\n           <th class=\"w100 text-center\" *ngIf=\"header_list[6]\">{{header_list[6]}}</th>\r\n           <th class=\"w100 text-center\" *ngIf=\"header_list[7]\">{{header_list[7]}}</th>\r\n           <th class=\"w100 text-center\" *ngIf=\"header_list[8]\">{{header_list[8]}}</th>\r\n           <th class=\"w100 text-center\" *ngIf=\"header_list[9]\">{{header_list[9]}}</th>\r\n           <th class=\"w100 text-center\" *ngIf=\"header_list[10]\">{{header_list[10]}}</th>\r\n           <th class=\"w100 text-center\" *ngIf=\"header_list[11]\">{{header_list[11]}}</th>\r\n           <th class=\"w100 text-center\" *ngIf=\"header_list[12]\">{{header_list[12]}}</th>\r\n           <th class=\"w100 text-center\" *ngIf=\"header_list[13]\">{{header_list[13]}}</th>\r\n           <th class=\"w100 text-center\" *ngIf=\"header_list[14]\">{{header_list[14]}}</th>\r\n           <th class=\"w100 text-center\" *ngIf=\"header_list[15]\">{{header_list[15]}}</th>\r\n           <th class=\"w100 text-center\" *ngIf=\"header_list[16]\">{{header_list[16]}}</th>\r\n           <th class=\"w100 text-center\" *ngIf=\"header_list[17]\">{{header_list[17]}}</th>\r\n           <th class=\"w100 text-center\" *ngIf=\"header_list[18]\">{{header_list[18]}}</th>\r\n           <th class=\"w100 text-center\" *ngIf=\"header_list[19]\">{{header_list[19]}}</th>\r\n           <th class=\"w100 text-center\" *ngIf=\"header_list[20]\">{{header_list[20]}}</th>\r\n           <th class=\"w100 text-center\" *ngIf=\"header_list[21]\">{{header_list[21]}}</th>\r\n           <th class=\"w100 text-center\" *ngIf=\"header_list[22]\">{{header_list[22]}}</th>\r\n           <th class=\"w100 text-center\" *ngIf=\"header_list[23]\">{{header_list[23]}}</th>\r\n           <th class=\"w100 text-center\" *ngIf=\"header_list[24]\">{{header_list[24]}}</th>\r\n           <th class=\"w100 text-center\" *ngIf=\"header_list[25]\">{{header_list[25]}}</th>\r\n           <th class=\"w100 text-center\" *ngIf=\"header_list[26]\">{{header_list[26]}}</th>\r\n           <th class=\"w100 text-center\" *ngIf=\"header_list[27]\">{{header_list[27]}}</th>\r\n           <th class=\"w100 text-center\" *ngIf=\"header_list[28]\">{{header_list[28]}}</th>\r\n           <th class=\"w100 text-center\" *ngIf=\"header_list[29]\">{{header_list[29]}}</th>\r\n           <th class=\"w100 text-center\" *ngIf=\"header_list[30]\">{{header_list[30]}}</th>\r\n           <th class=\"w100 text-center\" *ngIf=\"header_list[31]\">{{header_list[31]}}</th>\r\n           <th class=\"w100 text-center\" *ngIf=\"header_list[32]\">{{header_list[32]}}</th>\r\n           <th class=\"w100 text-center\" *ngIf=\"header_list[33]\">{{header_list[33]}}</th>\r\n           <th class=\"w100 text-center\" *ngIf=\"header_list[34]\">{{header_list[34]}}</th>\r\n           <th class=\"w100 text-center\" *ngIf=\"header_list[35]\">{{header_list[35]}}</th>\r\n           <th class=\"w100 text-center\" *ngIf=\"header_list[36]\">{{header_list[36]}}</th>\r\n           <th class=\"w100 text-center\" *ngIf=\"header_list[37]\">{{header_list[37]}}</th>\r\n           <th class=\"w100 text-center\" *ngIf=\"header_list[38]\">{{header_list[38]}}</th>\r\n           <th class=\"w100 text-center\" *ngIf=\"header_list[39]\">{{header_list[39]}}</th>\r\n           <th class=\"w100 text-center\" *ngIf=\"header_list[40]\">{{header_list[40]}}</th>\r\n            </tr>\r\n          </table>\r\n        </div>\r\n        <!-- <div class=\"table-head bdrt\">\r\n          <table>\r\n            <tr>\r\n              <th class=\"w50\">&nbsp;</th>\r\n              <th class=\"w150\"></th>\r\n              <th class=\"w150\"></th>\r\n              <th class=\"w150\"></th>\r\n              <th class=\"w150\"></th>\r\n              <th class=\"w150\"></th>\r\n              <th class=\"w150\"></th>\r\n              <th class=\"w150\"></th>\r\n              <th class=\"w150\"></th>\r\n              <th class=\"w150\"></th>\r\n              <th class=\"w150\"></th>\r\n              <th class=\"w150\"></th>\r\n              <th class=\"w150\"></th>\r\n              <th class=\"w150\"></th>\r\n              <th class=\"w150\"></th>\r\n            </tr>\r\n          </table>\r\n        </div> -->\r\n      </div>\r\n      <div class=\"table-container\" *ngIf=\"secondaryProductReportList.length\">\r\n        <div class=\"table-content\">\r\n          <table>\r\n            <ng-container *ngIf=\"!loader\">\r\n              <tr *ngFor=\"let val of secondaryProductReportList; let i = index\">\r\n                <td class=\"w50\">{{ i + sr_no + 1}}</td>\r\n                <td class=\"w100 text-center\">{{val.name}}</td>\r\n                <td class=\"w100 text-center\">{{val.mobile_no}}</td>\r\n                <td class=\"w100 text-center\">{{val.state}}</td>\r\n                <td class=\"w100 text-center\">{{val.district}}</td>\r\n                <td class=\"w100 text-center\">{{val.city}}</td>\r\n                <td class=\"w100 text-center\" *ngFor=\"let val2 of val.month_wise_coupon_data;\">\r\n                    {{val2.total_coupon}}/{{val2.total_influencer_point}}\r\n                </td>\r\n                <td class=\"w100 text-center\" *ngFor=\"let val3 of val.year_wise_coupon_data; let i = index\">\r\n                  <ng-container >\r\n                    {{val3.total_coupon}}/{{val3.total_influencer_point}}\r\n                </ng-container> \r\n                  </td>\r\n              </tr>\r\n            </ng-container>\r\n            <ng-container *ngIf=\"loader\">\r\n              <tr class=\"sk-loading\" *ngFor=\"let row of [].constructor(10);\">\r\n                <td class=\"w50\">\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n                <td class=\"w150\">\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n                <td class=\"w200\">\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n                <td class=\"w60\">\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n                <td class=\"w120\">\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n                <td class=\"w100\">\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n                <td class=\"w100\">\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n                <td class=\"w100\">\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n                <td class=\"w100\">\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n                <td class=\"w220\">\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n                <td class=\"w100\">\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n                <td class=\"padding0 w350\">\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n              </tr>\r\n            </ng-container>\r\n          </table>\r\n        </div>\r\n      </div>\r\n      <ng-container *ngIf=\"secondaryProductReportList.length == 0\">\r\n        <app-not-result-found></app-not-result-found>\r\n      </ng-container>\r\n    </div>\r\n  </div>\r\n  <div class=\"fab-btns\">\r\n    <button class=\"pulse excel\" mat-fab color=\"primary\" [matMenuTriggerFor]=\"menu\"\r\n      *ngIf=\"login_data.download_product_wise_secondary_report=='1'\">\r\n      <i class=\"material-icons\">apps</i>\r\n      Action\r\n    </button>\r\n    <mat-menu #menu=\"matMenu\">\r\n      <button mat-menu-item (click)=\"getproductWiseSecondaryReportExcel();\"\r\n        *ngIf=\"secondaryProductReportList.length > 0 && login_data.download_product_wise_secondary_report=='1'\">\r\n        <mat-icon>download</mat-icon>\r\n        <span>Download in excel</span>\r\n      </button>\r\n    </mat-menu>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/loyalty-report/loyalty-report-month-wise-scan/loyalty-report-month-wise-scan.component.scss":
/*!*************************************************************************************************************!*\
  !*** ./src/app/loyalty-report/loyalty-report-month-wise-scan/loyalty-report-month-wise-scan.component.scss ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/loyalty-report/loyalty-report-month-wise-scan/loyalty-report-month-wise-scan.component.ts":
/*!***********************************************************************************************************!*\
  !*** ./src/app/loyalty-report/loyalty-report-month-wise-scan/loyalty-report-month-wise-scan.component.ts ***!
  \***********************************************************************************************************/
/*! exports provided: LoyaltyReportMonthWiseScanComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoyaltyReportMonthWiseScanComponent", function() { return LoyaltyReportMonthWiseScanComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng6-toastr-notifications */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/ng6-toastr-notifications/fesm5/ng6-toastr-notifications.js");
/* harmony import */ var src_app_bottom_sheet_bottom_sheet_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/bottom-sheet/bottom-sheet.component */ "./src/app/bottom-sheet/bottom-sheet.component.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! moment */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var src_app_localstorage_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/localstorage.service */ "./src/app/localstorage.service.ts");
/* harmony import */ var src_services_DatabaseService__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/_services/DatabaseService */ "./src/_services/DatabaseService.ts");
/* harmony import */ var src_app_reports_prouct_wise_secondary_report_product_wise_secondary_report_modal_product_wise_secondary_report_modal_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/reports/prouct-wise-secondary-report/product-wise-secondary-report-modal/product-wise-secondary-report-modal.component */ "./src/app/reports/prouct-wise-secondary-report/product-wise-secondary-report-modal/product-wise-secondary-report-modal.component.ts");









var LoyaltyReportMonthWiseScanComponent = /** @class */ (function () {
    function LoyaltyReportMonthWiseScanComponent(bottomSheet, service, toast, session, dialog) {
        this.bottomSheet = bottomSheet;
        this.service = service;
        this.toast = toast;
        this.session = session;
        this.dialog = dialog;
        this.loader = false;
        this.secondaryProductReportList = [];
        this.search = {};
        this.login_data = [];
        this.page_limit = 50;
        this.start = 0;
        this.pagenumber = '';
        this.filter = {};
        this.filtering = false;
        this.length = 0;
        this.header_list = [];
        this.login_data = this.session.getSession();
        this.login_data = this.login_data.value.data;
    }
    LoyaltyReportMonthWiseScanComponent.prototype.ngOnInit = function () {
        this.length = 0;
        this.getSecondaryProductWiseReport('', this.length);
    };
    LoyaltyReportMonthWiseScanComponent.prototype.refresh = function () {
        this.start = 0;
        this.getSecondaryProductWiseReport('', this.length);
    };
    LoyaltyReportMonthWiseScanComponent.prototype.pervious = function () {
        this.start = this.start - this.page_limit;
        this.getSecondaryProductWiseReport('', this.length);
    };
    LoyaltyReportMonthWiseScanComponent.prototype.nextPage = function () {
        this.start = this.start + this.page_limit;
        this.getSecondaryProductWiseReport('', this.length);
    };
    LoyaltyReportMonthWiseScanComponent.prototype.getSecondaryProductWiseReport = function (action, length) {
        var _this = this;
        this.loader = true;
        if (this.pagenumber > this.total_page) {
            this.pagenumber = this.total_page;
            this.start = this.pageCount - this.page_limit;
        }
        if (this.start < 0) {
            this.start = 0;
        }
        // if (this.filter.date_from) {
        //   this.filter.date_from = moment(this.filter.date_from).format('YYYY-MM-DD');
        // }
        // if (this.filter.date_to) {
        //   this.filter.date_to = moment(this.filter.date_to).format('YYYY-MM-DD');
        // }
        // if (this.filter.date) this.filtering = true;
        // this.filter.mode = 0;
        // this.filter.limit = length;
        // if (action == 'refresh') {
        //   this.filter.date_from = '';
        //   this.filter.date_to = '';
        // }
        this.service.post_rqst({ 'start': this.start, 'pagelimit': this.page_limit, 'filter': this.filter }, 'LoyaltyReport/influencer_month_wise_scan_report').subscribe(function (resp) {
            console.log(resp);
            if (resp['statusCode'] == 200) {
                _this.secondaryProductReportList = resp['result'];
                _this.header_list = resp.headers;
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
                _this.loader = false;
            }
            else {
                _this.toast.errorToastr(resp['statusMsg']);
            }
        }, function (err) {
            _this.loader = false;
        });
    };
    LoyaltyReportMonthWiseScanComponent.prototype.onDate = function (event) {
        console.log(event);
        this.filter.date_to = moment__WEBPACK_IMPORTED_MODULE_5__(event.target.value).format('YYYY-MM-DD');
        this.filter.date_from = moment__WEBPACK_IMPORTED_MODULE_5__(event.target.value).format('YYYY-MM-DD');
        this.getSecondaryProductWiseReport('', this.length);
    };
    LoyaltyReportMonthWiseScanComponent.prototype.openBottomSheet = function () {
        var _this = this;
        this.bottomSheet.open(src_app_bottom_sheet_bottom_sheet_component__WEBPACK_IMPORTED_MODULE_4__["BottomSheetComponent"], {
            data: {
                'filterPage': 'product_wise_secondary',
            }
        });
        this.bottomSheet._openedBottomSheetRef.afterDismissed().subscribe(function (data) {
            _this.filter.date_from = data.date_from;
            _this.filter.date_to = data.date_to;
            // this.search.userId = data.user_id;
            _this.length = 0;
            _this.getSecondaryProductWiseReport(_this.filter.date_to, _this.filter.date_from);
        });
    };
    LoyaltyReportMonthWiseScanComponent.prototype.getproductWiseSecondaryReportExcel = function () {
        var _this = this;
        this.loader = true;
        this.service.post_rqst({ 'search': this.search }, "LoyaltyReport/excel_influencer_month_wise_scan_report").subscribe(function (result) {
            if (result['msg'] == true) {
                _this.loader = false;
                window.open(_this.service.downloadUrl + result['filename']);
                _this.getSecondaryProductWiseReport('', _this.length);
            }
        });
    };
    LoyaltyReportMonthWiseScanComponent.prototype.openProductWiseSecondarySubCategoryReport = function (drId, category, startDate, endDate, salesUserId) {
        var dialogRef = this.dialog.open(src_app_reports_prouct_wise_secondary_report_product_wise_secondary_report_modal_product_wise_secondary_report_modal_component__WEBPACK_IMPORTED_MODULE_8__["ProductWiseSecondaryReportModalComponent"], {
            width: '800px',
            panelClass: 'cs-modal',
            data: {
                'from': 'product-wise-sub-category',
                drId: drId,
                category: category,
                startDate: startDate,
                endDate: endDate,
                salesUserId: salesUserId
            }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result != false) {
            }
        });
    };
    LoyaltyReportMonthWiseScanComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-loyalty-report-month-wise-scan',
            template: __webpack_require__(/*! ./loyalty-report-month-wise-scan.component.html */ "./src/app/loyalty-report/loyalty-report-month-wise-scan/loyalty-report-month-wise-scan.component.html"),
            styles: [__webpack_require__(/*! ./loyalty-report-month-wise-scan.component.scss */ "./src/app/loyalty-report/loyalty-report-month-wise-scan/loyalty-report-month-wise-scan.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatBottomSheet"], src_services_DatabaseService__WEBPACK_IMPORTED_MODULE_7__["DatabaseService"], ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_3__["ToastrManager"], src_app_localstorage_service__WEBPACK_IMPORTED_MODULE_6__["sessionStorage"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]])
    ], LoyaltyReportMonthWiseScanComponent);
    return LoyaltyReportMonthWiseScanComponent;
}());



/***/ }),

/***/ "./src/app/loyalty-report/loyalty-report-not-scanned-seven-day/loyalty-report-not-scanned-seven-day.component.html":
/*!*************************************************************************************************************************!*\
  !*** ./src/app/loyalty-report/loyalty-report-not-scanned-seven-day/loyalty-report-not-scanned-seven-day.component.html ***!
  \*************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-container\">\r\n\r\n  <div class=\"tools-container\">\r\n    <h2>NOT SCANNED SEVEN DAYS</h2>\r\n    <div class=\"left-auto df ac flex-gap-10\">\r\n      <button mat-icon-button matTooltip=\"Refresh\" (click)=\"refresh()\">\r\n        <i class=\"material-icons\">refresh</i>\r\n      </button>\r\n      <button mat-icon-button matTooltip=\"Filter\" (click)=\"openBottomSheet()\">\r\n        <i class=\"material-icons\">filter_alt</i>\r\n      </button>\r\n\r\n      <div class=\"pagination\" *ngIf=\"secondaryProductReportList.length > 0\">\r\n        <div class=\"pagination-content\">\r\n          Pages\r\n          <span>{{pagenumber}}</span>\r\n          of\r\n          <span>{{total_page}}</span>\r\n        </div>\r\n        <div class=\"page-nav\">\r\n\r\n          <button mat-icon-button matTooltip=\"Older\" (click)=\"pervious()\" [disabled]=\"start == 0 || total_page == 0\">\r\n            <i class=\"material-icons\">navigate_before</i>\r\n          </button>\r\n          <button mat-icon-button matTooltip=\"Newer\" (click)=\"nextPage()\" [disabled]=\"pagenumber == total_page \">\r\n            <i class=\"material-icons\">navigate_next</i>\r\n          </button>\r\n        </div>\r\n      </div>\r\n\r\n\r\n    </div>\r\n  </div>\r\n  <div class=\"container container-scroll\">\r\n    <div class=\"cs-table horizontal-scroll\">\r\n      <div class=\"sticky-head\">\r\n        <div class=\"table-head\">\r\n          <table>\r\n            <tr>\r\n              <th class=\"w50\">S.No</th>\r\n              <th class=\"w150\">Name</th>\r\n              <th class=\"w150\">State</th>\r\n              <th class=\"w150\">District</th>\r\n              <th class=\"w150\">City</th>\r\n              <th class=\"w150\">Mobile Number</th>\r\n              <th class=\"w150\">Balance</th>\r\n              <th class=\"w150\">Date Created</th>\r\n\r\n              <th class=\"w150\">Latest Login</th>\r\n              <th class=\"w150\">Status</th>\r\n\r\n\r\n\r\n\r\n\r\n\r\n            </tr>\r\n          </table>\r\n        </div>\r\n        <div class=\"table-head bdrt\">\r\n          <table>\r\n            <tr>\r\n              <th class=\"w50\">&nbsp;</th>\r\n              <th class=\"w150\"></th>\r\n              <th class=\"w150\"></th>\r\n              <th class=\"w150\"></th>\r\n              <th class=\"w150\"></th>\r\n              <th class=\"w150\"></th>\r\n              <th class=\"w150\"></th>\r\n              <th class=\"w150\"></th>\r\n              <th class=\"w150\"></th>\r\n              <th class=\"w150\"></th>\r\n\r\n            </tr>\r\n          </table>\r\n        </div>\r\n      </div>\r\n      <div class=\"table-container\">\r\n        <div class=\"table-content\">\r\n          <table>\r\n            <ng-container *ngIf=\"!loader\">\r\n              <tr *ngFor=\"let report of secondaryProductReportList; let i=index\">\r\n                <td class=\"w50\">{{i+1+sr_no}}</td>\r\n                <td class=\"w150\">{{report.name}}</td>\r\n                <td class=\"w150\">{{report.state}}</td>\r\n                <td class=\"w150\">{{report.district}}</td>\r\n                <td class=\"w150\">{{report.city}}</td>\r\n                <td class=\"w150\">{{report.mobile_no}}</td>\r\n                <td class=\"w150\">{{report.balance}}</td>\r\n                <td class=\"w150\">{{report.date_created | date : 'dd MMM yyy '}}</td>\r\n                <td class=\"w150\">{{report.latest_login | date:'MMM d, y, h:mm:a'}}</td>\r\n                <td class=\"w150\">{{report.status}}</td>\r\n\r\n              </tr>\r\n            </ng-container>\r\n            <ng-container *ngIf=\"loader\">\r\n              <tr class=\"sk-loading\" *ngFor=\"let row of [].constructor(10);\">\r\n                <td class=\"w50\">\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n                <td class=\"w150\">\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n                <td class=\"w150\">\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n                <td class=\"w150\">\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n                <td class=\"w150\">\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n                <td class=\"w150\">\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n                <td class=\"w150\">\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n                <td class=\"w150\">\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n                <td class=\"w150\">\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n                <td class=\"w150\">\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n\r\n\r\n              </tr>\r\n            </ng-container>\r\n          </table>\r\n        </div>\r\n      </div>\r\n      <ng-container *ngIf=\"secondaryProductReportList.length == 0\">\r\n        <app-not-result-found></app-not-result-found>\r\n      </ng-container>\r\n    </div>\r\n  </div>\r\n    <div class=\"fab-btns\">\r\n      <button  mat-fab class=\"excel\"  *ngIf=\"secondaryProductReportList.length > 0 && login_data.export_influencer=='1'\" (click)=\"lastBtnValue('excel'); getproductWiseSecondaryReportExcel();\"  [ngClass]=\"{'pulse': fabBtnValue=='excel'}\" >\r\n        <img src=\"assets/img/excel.svg\">\r\n        Download Excel\r\n      </button>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/loyalty-report/loyalty-report-not-scanned-seven-day/loyalty-report-not-scanned-seven-day.component.scss":
/*!*************************************************************************************************************************!*\
  !*** ./src/app/loyalty-report/loyalty-report-not-scanned-seven-day/loyalty-report-not-scanned-seven-day.component.scss ***!
  \*************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/loyalty-report/loyalty-report-not-scanned-seven-day/loyalty-report-not-scanned-seven-day.component.ts":
/*!***********************************************************************************************************************!*\
  !*** ./src/app/loyalty-report/loyalty-report-not-scanned-seven-day/loyalty-report-not-scanned-seven-day.component.ts ***!
  \***********************************************************************************************************************/
/*! exports provided: LoyaltyReportNotScannedSevenDayComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoyaltyReportNotScannedSevenDayComponent", function() { return LoyaltyReportNotScannedSevenDayComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng6-toastr-notifications */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/ng6-toastr-notifications/fesm5/ng6-toastr-notifications.js");
/* harmony import */ var src_app_bottom_sheet_bottom_sheet_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/bottom-sheet/bottom-sheet.component */ "./src/app/bottom-sheet/bottom-sheet.component.ts");
/* harmony import */ var src_app_localstorage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/localstorage.service */ "./src/app/localstorage.service.ts");
/* harmony import */ var src_services_DatabaseService__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/_services/DatabaseService */ "./src/_services/DatabaseService.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! moment */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var src_app_reports_prouct_wise_secondary_report_product_wise_secondary_report_modal_product_wise_secondary_report_modal_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/reports/prouct-wise-secondary-report/product-wise-secondary-report-modal/product-wise-secondary-report-modal.component */ "./src/app/reports/prouct-wise-secondary-report/product-wise-secondary-report-modal/product-wise-secondary-report-modal.component.ts");









var LoyaltyReportNotScannedSevenDayComponent = /** @class */ (function () {
    function LoyaltyReportNotScannedSevenDayComponent(bottomSheet, service, toast, session, dialog) {
        this.bottomSheet = bottomSheet;
        this.service = service;
        this.toast = toast;
        this.session = session;
        this.dialog = dialog;
        this.loader = false;
        this.secondaryProductReportList = [];
        this.search = {};
        this.login_data = [];
        this.page_limit = 50;
        this.start = 0;
        this.pagenumber = '';
        this.filter = {};
        this.filtering = false;
        this.fabBtnValue = 'add';
        this.length = 0;
        this.header_list = [];
        this.login_data = this.session.getSession();
        this.login_data = this.login_data.value.data;
    }
    LoyaltyReportNotScannedSevenDayComponent.prototype.ngOnInit = function () {
        this.length = 0;
        this.getSecondaryProductWiseReport('', this.length);
    };
    LoyaltyReportNotScannedSevenDayComponent.prototype.refresh = function () {
        this.start = 0;
        this.getSecondaryProductWiseReport('', this.length);
    };
    LoyaltyReportNotScannedSevenDayComponent.prototype.pervious = function () {
        this.start = this.start - this.page_limit;
        this.getSecondaryProductWiseReport('', this.length);
    };
    LoyaltyReportNotScannedSevenDayComponent.prototype.nextPage = function () {
        this.start = this.start + this.page_limit;
        this.getSecondaryProductWiseReport('', this.length);
    };
    LoyaltyReportNotScannedSevenDayComponent.prototype.getSecondaryProductWiseReport = function (action, length) {
        var _this = this;
        this.loader = true;
        if (this.pagenumber > this.total_page) {
            this.pagenumber = this.total_page;
            this.start = this.pageCount - this.page_limit;
        }
        if (this.start < 0) {
            this.start = 0;
        }
        //  if (this.filter.date_from) {
        //       this.filter.date_from = moment(this.filter.date_from).format('YYYY-MM-DD');
        //     }
        //     if (this.filter.date_to) {
        //       this.filter.date_to = moment(this.filter.date_to).format('YYYY-MM-DD');
        //     }
        //     if (this.filter.date) this.filtering = true;
        //     this.filter.mode = 0;
        //     this.filter.limit = length;
        //     if (action == 'refresh') {
        //       this.filter.date_from = '';
        //       this.filter.date_to = '';
        //     }
        this.service.post_rqst({ 'start': this.start, 'pagelimit': this.page_limit, 'filter': this.filter }, 'LoyaltyReport/not_scanned_seven_days_influencer').subscribe(function (resp) {
            console.log(resp);
            if (resp['statusCode'] == 200) {
                _this.secondaryProductReportList = resp['result'];
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
                _this.loader = false;
            }
            else {
                _this.toast.errorToastr(resp['statusMsg']);
            }
        }, function (err) {
            _this.loader = false;
        });
    };
    LoyaltyReportNotScannedSevenDayComponent.prototype.onDate = function (event) {
        console.log(event);
        this.filter.date_to = moment__WEBPACK_IMPORTED_MODULE_7__(event.target.value).format('YYYY-MM-DD');
        this.filter.date_from = moment__WEBPACK_IMPORTED_MODULE_7__(event.target.value).format('YYYY-MM-DD');
        this.getSecondaryProductWiseReport('', this.length);
    };
    LoyaltyReportNotScannedSevenDayComponent.prototype.openBottomSheet = function () {
        var _this = this;
        this.bottomSheet.open(src_app_bottom_sheet_bottom_sheet_component__WEBPACK_IMPORTED_MODULE_4__["BottomSheetComponent"], {
            data: {
                'filterPage': 'product_wise_secondary',
            }
        });
        this.bottomSheet._openedBottomSheetRef.afterDismissed().subscribe(function (data) {
            _this.filter.date_from = data.date_from;
            _this.filter.date_to = data.date_to;
            // this.search.userId = data.user_id;
            _this.length = 0;
            _this.getSecondaryProductWiseReport(_this.filter.date_to, _this.filter.date_from);
        });
    };
    LoyaltyReportNotScannedSevenDayComponent.prototype.getproductWiseSecondaryReportExcel = function () {
        var _this = this;
        this.loader = true;
        this.service.post_rqst({ 'filter': this.filter }, "LoyaltyReport/excel_not_scanned_seven_days_influencer").subscribe(function (result) {
            if (result['msg'] == true) {
                _this.loader = false;
                window.open(_this.service.downloadUrl + result['filename']);
                _this.getSecondaryProductWiseReport('', _this.length);
            }
        });
    };
    LoyaltyReportNotScannedSevenDayComponent.prototype.openProductWiseSecondarySubCategoryReport = function (drId, category, startDate, endDate, salesUserId) {
        var dialogRef = this.dialog.open(src_app_reports_prouct_wise_secondary_report_product_wise_secondary_report_modal_product_wise_secondary_report_modal_component__WEBPACK_IMPORTED_MODULE_8__["ProductWiseSecondaryReportModalComponent"], {
            width: '800px',
            panelClass: 'cs-modal',
            data: {
                'from': 'product-wise-sub-category',
                drId: drId,
                category: category,
                startDate: startDate,
                endDate: endDate,
                salesUserId: salesUserId
            }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result != false) {
            }
        });
    };
    LoyaltyReportNotScannedSevenDayComponent.prototype.lastBtnValue = function (value) {
        this.fabBtnValue = value;
    };
    LoyaltyReportNotScannedSevenDayComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-loyalty-report-not-scanned-seven-day',
            template: __webpack_require__(/*! ./loyalty-report-not-scanned-seven-day.component.html */ "./src/app/loyalty-report/loyalty-report-not-scanned-seven-day/loyalty-report-not-scanned-seven-day.component.html"),
            styles: [__webpack_require__(/*! ./loyalty-report-not-scanned-seven-day.component.scss */ "./src/app/loyalty-report/loyalty-report-not-scanned-seven-day/loyalty-report-not-scanned-seven-day.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatBottomSheet"], src_services_DatabaseService__WEBPACK_IMPORTED_MODULE_6__["DatabaseService"], ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_3__["ToastrManager"], src_app_localstorage_service__WEBPACK_IMPORTED_MODULE_5__["sessionStorage"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]])
    ], LoyaltyReportNotScannedSevenDayComponent);
    return LoyaltyReportNotScannedSevenDayComponent;
}());



/***/ }),

/***/ "./src/app/loyalty-report/loyalty-report-point-summary/loyalty-report-point-summary.component.html":
/*!*********************************************************************************************************!*\
  !*** ./src/app/loyalty-report/loyalty-report-point-summary/loyalty-report-point-summary.component.html ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-container\">\r\n\r\n  <div class=\"tools-container\">\r\n    <h2>INFLUENCER POINT SUMMARY</h2>\r\n    <div class=\"left-auto df ac flex-gap-10\">\r\n      <button mat-icon-button matTooltip=\"Refresh\" (click)=\"refresh()\">\r\n        <i class=\"material-icons\">refresh</i>\r\n      </button>\r\n      <button mat-icon-button matTooltip=\"Filter\" (click)=\"openBottomSheet()\">\r\n        <i class=\"material-icons\">filter_alt</i>\r\n      </button>\r\n\r\n\r\n      <div class=\"pagination\" *ngIf=\"secondaryProductReportList.length > 0\">\r\n        <div class=\"pagination-content\">\r\n          Pages\r\n          <span>{{pagenumber}}</span>\r\n          of\r\n          <span>{{total_page}}</span>\r\n        </div>\r\n        <div class=\"page-nav\">\r\n\r\n          <button mat-icon-button matTooltip=\"Older\" (click)=\"pervious()\" [disabled]=\"start == 0 || total_page == 0\">\r\n            <i class=\"material-icons\">navigate_before</i>\r\n          </button>\r\n          <button mat-icon-button matTooltip=\"Newer\" (click)=\"nextPage()\" [disabled]=\"pagenumber == total_page \">\r\n            <i class=\"material-icons\">navigate_next</i>\r\n          </button>\r\n        </div>\r\n      </div>\r\n\r\n\r\n    </div>\r\n  </div>\r\n  <div class=\"container container-scroll\">\r\n    <div class=\"cs-table horizontal-scroll\">\r\n      <div class=\"sticky-head\">\r\n        <div class=\"table-head\">\r\n          <table>\r\n            <tr>\r\n              <th class=\"w50\">S.No</th>\r\n              <th class=\"w150\">Name</th>\r\n              <th class=\"w150\">Mobile Number</th>\r\n              <th class=\"w150\">State</th>\r\n              <th class=\"w150\">District</th>\r\n              <th class=\"w150\">City</th>\r\n              <th class=\"w150\">Welcome Points\r\n\r\n              </th>\r\n              <th class=\"w150\">Bonus Points\r\n\r\n\r\n              </th>\r\n              <th class=\"w150\">Redeem Points\r\n\r\n              </th>\r\n\r\n\r\n              <th class=\"w150\">Referral Points\r\n\r\n\r\n              </th>\r\n              <th class=\"w150\">Reopen Points\r\n\r\n              </th>\r\n              <th class=\"w150\">Mannual Points\r\n\r\n\r\n              </th>\r\n\r\n              <th class=\"w150\">Scan Points\r\n\r\n\r\n              </th>\r\n            </tr>\r\n          </table>\r\n        </div>\r\n        <div class=\"table-head bdrt\">\r\n          <table>\r\n            <tr>\r\n              <th class=\"w50\">&nbsp;</th>\r\n              <th class=\"w150\">\r\n                <div class=\"th-search-acmt\">\r\n                  <mat-form-field class=\"example-full-width cs-input select-input\">\r\n                    <input matInput placeholder=\"Search...\" type=\"text\" name=\"name\" [(ngModel)]=\"filter.name\"\r\n                      (keyup.enter)=\"getSecondaryProductWiseReport('','')\">\r\n                  </mat-form-field>\r\n                </div>\r\n              </th>\r\n              <th class=\"w150\">\r\n                <div class=\"th-search-acmt\">\r\n                  <mat-form-field class=\"example-full-width cs-input select-input\">\r\n                    <input matInput placeholder=\"Search...\" type=\"text\" name=\"mobile_no\" [(ngModel)]=\"filter.mobile_no\"\r\n                      (keyup.enter)=\"getSecondaryProductWiseReport('','')\">\r\n                  </mat-form-field>\r\n                </div>\r\n              </th>\r\n              <th class=\"w150\">\r\n                <div class=\"th-search-acmt\">\r\n                  <mat-form-field class=\"cs-input select-input\">\r\n                    <mat-select name=\"state\" [(ngModel)]=\"filter.state\" (selectionChange)=\"getSecondaryProductWiseReport('','')\">\r\n                      <mat-option *ngFor=\"let state of states\"\r\n                        value=\"{{state.state_name}}\">{{state.state_name}}</mat-option>\r\n                    </mat-select>\r\n                  </mat-form-field>\r\n                </div>\r\n              </th>\r\n              <th class=\"w150\">\r\n                <div class=\"th-search-acmt\">\r\n                  <mat-form-field class=\"example-full-width cs-input select-input\">\r\n                    <input matInput placeholder=\"Search...\" type=\"text\" name=\"district\" [(ngModel)]=\"filter.district\"\r\n                      (keyup.enter)=\"getSecondaryProductWiseReport('','')\">\r\n                  </mat-form-field>\r\n                </div>\r\n              </th>\r\n              <th class=\"w150\"></th>\r\n              <th class=\"w150\"></th>\r\n              <th class=\"w150\"></th>\r\n              <th class=\"w150\"></th>\r\n              <th class=\"w150\"></th>\r\n              <th class=\"w150\"></th>\r\n\r\n              <th class=\"w150\"></th>\r\n              <th class=\"w150\"></th>\r\n            </tr>\r\n          </table>\r\n        </div>\r\n      </div>\r\n      <div class=\"table-container\">\r\n        <div class=\"table-content\">\r\n          <table>\r\n            <ng-container *ngIf=\"!loader\">\r\n              <tr *ngFor=\"let report of secondaryProductReportList; let i=index\">\r\n                <td class=\"w50\">{{i+1+sr_no}}</td>\r\n                <td class=\"w150\">{{report.name |titlecase}}</td>\r\n                <td class=\"w150\">{{report.mobile_no}}</td>\r\n                <td class=\"w150\">{{report.state}}</td>\r\n                <td class=\"w150\">{{report.district}}</td>\r\n                <td class=\"w150\">{{report.city}}</td>\r\n                <td class=\"w150\">{{report.welcome_point}}</td>\r\n                <td class=\"w150\">{{report.bonus_points}}</td>\r\n                <td class=\"w150\">{{report.redeem_point}}</td>\r\n\r\n                <td class=\"w150\">{{report.referral_point}}</td>\r\n                <td class=\"w150\">{{report.reopen_point}}</td>\r\n                <td class=\"w150\">{{report.manual_points}}</td>\r\n\r\n                <td class=\"w150\">{{report.scan_point}}</td>\r\n\r\n              </tr>\r\n            </ng-container>\r\n            <ng-container *ngIf=\"loader\">\r\n              <tr class=\"sk-loading\" *ngFor=\"let row of [].constructor(10);\">\r\n                <td class=\"w50\">\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n                <td class=\"w150\">\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n                <td class=\"w150\">\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n                <td class=\"w150\">\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n                <td class=\"w150\">\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n                <td class=\"w150\">\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n                <td class=\"w150\">\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n                <td class=\"w150\">\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n                <td class=\"w150\">\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n                <td class=\"w150\">\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n                <td class=\"w150\">\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n                <td class=\"w150\">\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n                <td class=\"w150\">\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n\r\n              </tr>\r\n            </ng-container>\r\n          </table>\r\n        </div>\r\n      </div>\r\n      <ng-container *ngIf=\"secondaryProductReportList.length == 0\">\r\n        <app-not-result-found></app-not-result-found>\r\n      </ng-container>\r\n    </div>\r\n  </div>\r\n  <div class=\"fab-btns\">\r\n    <button  mat-fab class=\"excel\"  *ngIf=\"secondaryProductReportList.length > 0 && logined_user_data.download_primary_target_report==1\" (click)=\"lastBtnValue('excel'); getproductWiseSecondaryReportExcel();\"  [ngClass]=\"{'pulse': fabBtnValue=='excel'}\" >\r\n      <img src=\"assets/img/excel.svg\">\r\n      Download Excel\r\n    </button>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/loyalty-report/loyalty-report-point-summary/loyalty-report-point-summary.component.scss":
/*!*********************************************************************************************************!*\
  !*** ./src/app/loyalty-report/loyalty-report-point-summary/loyalty-report-point-summary.component.scss ***!
  \*********************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/loyalty-report/loyalty-report-point-summary/loyalty-report-point-summary.component.ts":
/*!*******************************************************************************************************!*\
  !*** ./src/app/loyalty-report/loyalty-report-point-summary/loyalty-report-point-summary.component.ts ***!
  \*******************************************************************************************************/
/*! exports provided: LoyaltyReportPointSummaryComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoyaltyReportPointSummaryComponent", function() { return LoyaltyReportPointSummaryComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng6-toastr-notifications */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/ng6-toastr-notifications/fesm5/ng6-toastr-notifications.js");
/* harmony import */ var src_app_bottom_sheet_bottom_sheet_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/bottom-sheet/bottom-sheet.component */ "./src/app/bottom-sheet/bottom-sheet.component.ts");
/* harmony import */ var src_app_localstorage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/localstorage.service */ "./src/app/localstorage.service.ts");
/* harmony import */ var src_services_DatabaseService__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/_services/DatabaseService */ "./src/_services/DatabaseService.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! moment */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var src_app_reports_prouct_wise_secondary_report_product_wise_secondary_report_modal_product_wise_secondary_report_modal_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/reports/prouct-wise-secondary-report/product-wise-secondary-report-modal/product-wise-secondary-report-modal.component */ "./src/app/reports/prouct-wise-secondary-report/product-wise-secondary-report-modal/product-wise-secondary-report-modal.component.ts");









var LoyaltyReportPointSummaryComponent = /** @class */ (function () {
    function LoyaltyReportPointSummaryComponent(bottomSheet, service, toast, session, dialog) {
        this.bottomSheet = bottomSheet;
        this.service = service;
        this.toast = toast;
        this.session = session;
        this.dialog = dialog;
        this.loader = false;
        this.secondaryProductReportList = [];
        this.search = {};
        this.login_data = [];
        this.page_limit = 50;
        this.start = 0;
        this.pagenumber = '';
        this.filter = {};
        this.filtering = false;
        this.length = 0;
        this.fabBtnValue = 'add';
        this.states = [];
        this.assign_login_data = this.session.getSession();
        this.logined_user_data = this.assign_login_data.value.data;
        this.getStateList();
    }
    LoyaltyReportPointSummaryComponent.prototype.ngOnInit = function () {
        this.length = 0;
        this.getSecondaryProductWiseReport('', this.length);
    };
    LoyaltyReportPointSummaryComponent.prototype.refresh = function () {
        this.filter = {};
        this.start = 0;
        this.getSecondaryProductWiseReport('', this.length);
    };
    LoyaltyReportPointSummaryComponent.prototype.pervious = function () {
        this.start = this.start - this.page_limit;
        this.getSecondaryProductWiseReport('', this.length);
    };
    LoyaltyReportPointSummaryComponent.prototype.nextPage = function () {
        this.start = this.start + this.page_limit;
        this.getSecondaryProductWiseReport('', this.length);
    };
    LoyaltyReportPointSummaryComponent.prototype.getSecondaryProductWiseReport = function (action, length) {
        var _this = this;
        this.loader = true;
        if (this.pagenumber > this.total_page) {
            this.pagenumber = this.total_page;
            this.start = this.pageCount - this.page_limit;
        }
        if (this.start < 0) {
            this.start = 0;
        }
        //  if (this.filter.date_from) {
        //       this.filter.date_from = moment(this.filter.date_from).format('YYYY-MM-DD');
        //     }
        //     if (this.filter.date_to) {
        //       this.filter.date_to = moment(this.filter.date_to).format('YYYY-MM-DD');
        //     }
        //     if (this.filter.date) this.filtering = true;
        //     this.filter.mode = 0;
        //     this.filter.limit = length;
        //     if (action == 'refresh') {
        //       this.filter.date_from = '';
        //       this.filter.date_to = '';
        //     }
        this.service.post_rqst({ 'start': this.start, 'pagelimit': this.page_limit, 'filter': this.filter }, 'LoyaltyReport/influencer_points_summary_report').subscribe(function (resp) {
            console.log(resp);
            if (resp['statusCode'] == 200) {
                _this.secondaryProductReportList = resp['result'];
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
                _this.loader = false;
            }
            else {
                _this.toast.errorToastr(resp['statusMsg']);
            }
        }, function (err) {
            _this.loader = false;
        });
    };
    LoyaltyReportPointSummaryComponent.prototype.onDate = function (event) {
        console.log(event);
        this.filter.date_to = moment__WEBPACK_IMPORTED_MODULE_7__(event.target.value).format('YYYY-MM-DD');
        this.filter.date_from = moment__WEBPACK_IMPORTED_MODULE_7__(event.target.value).format('YYYY-MM-DD');
        this.getSecondaryProductWiseReport('', this.length);
    };
    LoyaltyReportPointSummaryComponent.prototype.openBottomSheet = function () {
        var _this = this;
        this.bottomSheet.open(src_app_bottom_sheet_bottom_sheet_component__WEBPACK_IMPORTED_MODULE_4__["BottomSheetComponent"], {
            data: {
                'filterPage': 'product_wise_secondary',
            }
        });
        this.bottomSheet._openedBottomSheetRef.afterDismissed().subscribe(function (data) {
            _this.filter.date_from = data.date_from;
            _this.filter.date_to = data.date_to;
            // this.search.userId = data.user_id;
            _this.length = 0;
            _this.getSecondaryProductWiseReport(_this.filter.date_to, _this.filter.date_from);
        });
    };
    LoyaltyReportPointSummaryComponent.prototype.getproductWiseSecondaryReportExcel = function () {
        var _this = this;
        this.loader = true;
        this.service.post_rqst({ 'filter': this.filter }, "LoyaltyReport/excel_influencer_points_summary_report").subscribe(function (result) {
            if (result['msg'] == true) {
                _this.loader = false;
                window.open(_this.service.downloadUrl + result['filename']);
                _this.getSecondaryProductWiseReport('', _this.length);
            }
        });
    };
    LoyaltyReportPointSummaryComponent.prototype.openProductWiseSecondarySubCategoryReport = function (drId, category, startDate, endDate, salesUserId) {
        var dialogRef = this.dialog.open(src_app_reports_prouct_wise_secondary_report_product_wise_secondary_report_modal_product_wise_secondary_report_modal_component__WEBPACK_IMPORTED_MODULE_8__["ProductWiseSecondaryReportModalComponent"], {
            width: '800px',
            panelClass: 'cs-modal',
            data: {
                'from': 'product-wise-sub-category',
                drId: drId,
                category: category,
                startDate: startDate,
                endDate: endDate,
                salesUserId: salesUserId
            }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result != false) {
            }
        });
    };
    LoyaltyReportPointSummaryComponent.prototype.lastBtnValue = function (value) {
        this.fabBtnValue = value;
    };
    LoyaltyReportPointSummaryComponent.prototype.getStateList = function () {
        var _this = this;
        this.service.post_rqst(0, "Master/getAllState").subscribe((function (result) {
            if (result['statusCode'] == 200) {
                _this.states = result['all_state'];
            }
            else {
                _this.toast.errorToastr(result['statusMsg']);
            }
        }));
    };
    LoyaltyReportPointSummaryComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-loyalty-report-point-summary',
            template: __webpack_require__(/*! ./loyalty-report-point-summary.component.html */ "./src/app/loyalty-report/loyalty-report-point-summary/loyalty-report-point-summary.component.html"),
            styles: [__webpack_require__(/*! ./loyalty-report-point-summary.component.scss */ "./src/app/loyalty-report/loyalty-report-point-summary/loyalty-report-point-summary.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatBottomSheet"], src_services_DatabaseService__WEBPACK_IMPORTED_MODULE_6__["DatabaseService"], ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_3__["ToastrManager"], src_app_localstorage_service__WEBPACK_IMPORTED_MODULE_5__["sessionStorage"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]])
    ], LoyaltyReportPointSummaryComponent);
    return LoyaltyReportPointSummaryComponent;
}());



/***/ }),

/***/ "./src/app/loyalty-report/loyalty-report-product-inventory-report/loyalty-report-product-inventory-report.component.html":
/*!*******************************************************************************************************************************!*\
  !*** ./src/app/loyalty-report/loyalty-report-product-inventory-report/loyalty-report-product-inventory-report.component.html ***!
  \*******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-container\">\r\n\r\n  <div class=\"tools-container\">\r\n    <h2>PRODUCT INVENTORY REPORT</h2>\r\n    <div class=\"left-auto df ac flex-gap-10\">\r\n\r\n      <!-- ── Dealer Searchable Dropdown ── -->\r\n      <div class=\"dealer-select-wrap\" [class.open]=\"dealerDropdownOpen\" style=\"position:relative;min-width:220px;\">\r\n        <div class=\"custom-select-trigger\" (click)=\"toggleDealerDropdown()\"\r\n          style=\"border:1px solid #ccc;border-radius:6px;padding:6px 10px;cursor:pointer;display:flex;align-items:center;justify-content:space-between;background:#fff;min-height:36px;\">\r\n          <ng-container *ngIf=\"selectedDealer; else noDealer\">\r\n            <span style=\"font-size:13px;font-weight:500;color:#333;\">\r\n              <i class=\"material-icons\" style=\"font-size:15px;vertical-align:middle;margin-right:4px;color:#1976d2;\">store</i>\r\n              {{selectedDealer.company_name}}\r\n            </span>\r\n            <i class=\"material-icons\" style=\"font-size:16px;color:#e53935;cursor:pointer;\"\r\n              (click)=\"$event.stopPropagation(); clearDealer()\">close</i>\r\n          </ng-container>\r\n          <ng-template #noDealer>\r\n            <span style=\"font-size:13px;color:#999;\">\r\n              <i class=\"material-icons\" style=\"font-size:15px;vertical-align:middle;margin-right:4px;\">store</i>\r\n              {{dealerLoader ? 'Loading...' : 'Select Dealer'}}\r\n            </span>\r\n            <i class=\"material-icons\" style=\"font-size:16px;color:#888;\">{{dealerDropdownOpen ? 'expand_less' : 'expand_more'}}</i>\r\n          </ng-template>\r\n        </div>\r\n\r\n        <div *ngIf=\"dealerDropdownOpen\"\r\n          style=\"position:absolute;top:100%;left:0;right:0;z-index:999;background:#fff;border:1px solid #ddd;border-radius:6px;box-shadow:0 4px 16px rgba(0,0,0,0.12);min-width:280px;\">\r\n          <div style=\"padding:8px;border-bottom:1px solid #eee;display:flex;align-items:center;gap:6px;\">\r\n            <i class=\"material-icons\" style=\"font-size:18px;color:#888;\">search</i>\r\n            <input type=\"text\" [(ngModel)]=\"dealerSearchText\" (input)=\"filterDealers()\"\r\n              placeholder=\"Search by name / mobile / code...\"\r\n              style=\"border:none;outline:none;width:100%;font-size:13px;\" autocomplete=\"off\">\r\n            <i class=\"material-icons\" *ngIf=\"dealerSearchText\" style=\"font-size:16px;color:#888;cursor:pointer;\"\r\n              (click)=\"dealerSearchText=''; filterDealers()\">close</i>\r\n          </div>\r\n          <div style=\"max-height:240px;overflow-y:auto;\">\r\n            <div *ngFor=\"let d of filteredDealers\" (click)=\"selectDealer(d)\"\r\n              style=\"padding:9px 12px;cursor:pointer;border-bottom:1px solid #f5f5f5;display:flex;align-items:center;gap:8px;\"\r\n              [style.background]=\"selectedDealer && selectedDealer.id == d.id ? '#e3f2fd' : '#fff'\">\r\n              <div style=\"width:30px;height:30px;border-radius:50%;background:#1976d2;color:#fff;display:flex;align-items:center;justify-content:center;font-size:13px;font-weight:600;flex-shrink:0;\">\r\n                {{(d.company_name || 'D').charAt(0).toUpperCase()}}\r\n              </div>\r\n              <div>\r\n                <div style=\"font-size:13px;font-weight:500;color:#333;\">{{d.company_name}}</div>\r\n                <div style=\"font-size:11px;color:#777;\">{{d.mobile}} &bull; {{d.dr_code}}</div>\r\n              </div>\r\n              <i class=\"material-icons\" *ngIf=\"selectedDealer && selectedDealer.id == d.id\"\r\n                style=\"margin-left:auto;font-size:16px;color:#1976d2;\">check</i>\r\n            </div>\r\n            <div *ngIf=\"filteredDealers.length === 0 && !dealerLoader\"\r\n              style=\"padding:16px;text-align:center;color:#999;font-size:13px;\">\r\n              <i class=\"material-icons\" style=\"font-size:20px;display:block;margin-bottom:4px;\">search_off</i>\r\n              No dealers found\r\n            </div>\r\n            <div *ngIf=\"dealerLoader\" style=\"padding:12px;text-align:center;color:#888;font-size:13px;\">\r\n              <i class=\"material-icons\" style=\"font-size:18px;vertical-align:middle;\">sync</i> Loading...\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <!-- ── End Dealer Dropdown ── -->\r\n\r\n      <!-- Product search -->\r\n      <mat-form-field class=\"example-full-width cs-input select-input\" style=\"min-width:180px;\">\r\n        <input matInput placeholder=\"Product name / code...\" type=\"text\" name=\"product_name\"\r\n          [(ngModel)]=\"filter.product_name\" (keyup.enter)=\"start=0; getReport()\">\r\n      </mat-form-field>\r\n\r\n      <button mat-icon-button matTooltip=\"Refresh\" (click)=\"refresh()\">\r\n        <i class=\"material-icons\">refresh</i>\r\n      </button>\r\n      <button mat-icon-button matTooltip=\"Filter by Date\" (click)=\"openBottomSheet()\">\r\n        <i class=\"material-icons\">filter_alt</i>\r\n      </button>\r\n\r\n      <div class=\"pagination\" *ngIf=\"reportList.length > 0\">\r\n        <div class=\"pagination-content\">\r\n          Pages\r\n          <span>{{pagenumber}}</span>\r\n          of\r\n          <span>{{total_page}}</span>\r\n        </div>\r\n        <div class=\"page-nav\">\r\n          <button mat-icon-button matTooltip=\"Previous\" (click)=\"pervious()\" [disabled]=\"start == 0 || total_page == 0\">\r\n            <i class=\"material-icons\">navigate_before</i>\r\n          </button>\r\n          <button mat-icon-button matTooltip=\"Next\" (click)=\"nextPage()\" [disabled]=\"pagenumber == total_page\">\r\n            <i class=\"material-icons\">navigate_next</i>\r\n          </button>\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"cs-tabs\" style=\"padding: 0 16px; margin-bottom: 8px;\">\r\n    <button class=\"cs-tab-btn\" [class.active]=\"active_tab == 'Ply Expert'\" (click)=\"setTab('Ply Expert')\">Ply Expert</button>\r\n    <button class=\"cs-tab-btn\" [class.active]=\"active_tab == 'Ambassador'\" (click)=\"setTab('Ambassador')\">Ambassador</button>\r\n  </div>\r\n\r\n  <!-- ── Summary cards ── -->\r\n  <div class=\"report-summary\" *ngIf=\"!loader && reportList.length > 0\">\r\n    <div class=\"summary-card sc-blue\">\r\n      <span class=\"sc-icon\"><i class=\"material-icons\">list_alt</i></span>\r\n      <div class=\"sc-body\">\r\n        <div class=\"sc-value\">{{pageCount || 0}}</div>\r\n        <div class=\"sc-label\">Total Records</div>\r\n      </div>\r\n    </div>\r\n    <div class=\"summary-card sc-green\">\r\n      <span class=\"sc-icon\"><i class=\"material-icons\">add_circle</i></span>\r\n      <div class=\"sc-body\">\r\n        <div class=\"sc-value\">{{addQty}}</div>\r\n        <div class=\"sc-label\">Added Qty <em>(this page)</em></div>\r\n      </div>\r\n    </div>\r\n    <div class=\"summary-card sc-red\">\r\n      <span class=\"sc-icon\"><i class=\"material-icons\">remove_circle</i></span>\r\n      <div class=\"sc-body\">\r\n        <div class=\"sc-value\">{{removeQty}}</div>\r\n        <div class=\"sc-label\">Removed Qty <em>(this page)</em></div>\r\n      </div>\r\n    </div>\r\n    <div class=\"summary-card sc-gray\">\r\n      <span class=\"sc-icon\"><i class=\"material-icons\">sync_alt</i></span>\r\n      <div class=\"sc-body\">\r\n        <div class=\"sc-value\">{{netQty}}</div>\r\n        <div class=\"sc-label\">Net Qty <em>(this page)</em></div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"container container-scroll\">\r\n    <div class=\"cs-table horizontal-scroll\">\r\n      <div class=\"sticky-head\">\r\n\r\n        <!-- Header Row 1 – Column Titles -->\r\n        <div class=\"table-head\">\r\n          <table>\r\n            <tr>\r\n              <th class=\"w50\">S.No</th>\r\n              <th class=\"w120\">Date</th>\r\n              <th class=\"w150\">Reference ID</th>\r\n              <th class=\"w120\">Stock type</th>\r\n              <th class=\"w180\">Influencer Name</th>\r\n              <th class=\"w150\">Influencer Number</th>\r\n              <th class=\"w130\">Influencer State</th>\r\n              <th class=\"w130\">Influencer District</th>\r\n              <th class=\"w80\">Qty</th>\r\n              <th class=\"w100\">Balance</th>\r\n            </tr>\r\n          </table>\r\n        </div>\r\n\r\n        <!-- Header Row 2 – Inline Search Filters -->\r\n        <div class=\"table-head bdrt\">\r\n          <table>\r\n            <tr>\r\n              <th class=\"w50\">&nbsp;</th>\r\n              <th class=\"w120\">&nbsp;</th>\r\n              <th class=\"w150\">\r\n                <div class=\"th-search-acmt\">\r\n                  <mat-form-field class=\"example-full-width cs-input select-input\">\r\n                    <input matInput placeholder=\"Search...\" type=\"text\" name=\"reference_id\"\r\n                      [(ngModel)]=\"filter.reference_id\" (keyup.enter)=\"start=0; getReport()\">\r\n                  </mat-form-field>\r\n                </div>\r\n              </th>\r\n              <th class=\"w120\">\r\n                <div class=\"th-search-acmt\">\r\n                  <mat-form-field class=\"cs-input select-input\">\r\n                    <mat-select name=\"stock_type\" [(ngModel)]=\"filter.stock_type\"\r\n                      (selectionChange)=\"start=0; getReport()\">\r\n                      <mat-option value=\"\">Both</mat-option>\r\n                      <mat-option value=\"Add\">Add</mat-option>\r\n                      <mat-option value=\"Remove\">Remove</mat-option>\r\n                    </mat-select>\r\n                  </mat-form-field>\r\n                </div>\r\n              </th>\r\n              <th class=\"w180\">&nbsp;</th>\r\n              <th class=\"w150\">&nbsp;</th>\r\n              <th class=\"w130\">&nbsp;</th>\r\n              <th class=\"w130\">&nbsp;</th>\r\n              <th class=\"w80\">&nbsp;</th>\r\n              <th class=\"w100\">&nbsp;</th>\r\n            </tr>\r\n          </table>\r\n        </div>\r\n\r\n      </div>\r\n\r\n      <!-- Data Rows -->\r\n      <div class=\"table-container\">\r\n        <div class=\"table-content\">\r\n          <table>\r\n            <ng-container *ngIf=\"!loader\">\r\n              <tr *ngFor=\"let row of reportList; let i = index\">\r\n                <td class=\"w50\">{{i + 1 + sr_no}}</td>\r\n                <td class=\"w120\">{{row.record_date ? (row.record_date | date) : '-'}}</td>\r\n                <td class=\"w150\">{{row.reference_id || '-'}}</td>\r\n                <td class=\"w120\">\r\n                  <span *ngIf=\"row.stock_type\" class=\"pill\"\r\n                    [ngClass]=\"row.stock_type == 'Add' ? 'pill-green' : 'pill-red'\">\r\n                    {{row.stock_type}}\r\n                  </span>\r\n                  <span *ngIf=\"!row.stock_type\">-</span>\r\n                </td>\r\n                <td class=\"w180\">{{row.influencer_name || '-'}}</td>\r\n                <td class=\"w150\">{{row.influencer_number || '-'}}</td>\r\n                <td class=\"w130\">{{row.influencer_state || '-'}}</td>\r\n                <td class=\"w130\">{{row.influencer_district || '-'}}</td>\r\n                <td class=\"w80 num\">{{row.qty || '-'}}</td>\r\n                <td class=\"w100 num\">{{row.balance}}</td>\r\n              </tr>\r\n            </ng-container>\r\n\r\n            <ng-container *ngIf=\"loader\">\r\n              <tr class=\"sk-loading\" *ngFor=\"let row of [].constructor(10);\">\r\n                <td class=\"w50\"><div>&nbsp;</div></td>\r\n                <td class=\"w120\"><div>&nbsp;</div></td>\r\n                <td class=\"w150\"><div>&nbsp;</div></td>\r\n                <td class=\"w120\"><div>&nbsp;</div></td>\r\n                <td class=\"w180\"><div>&nbsp;</div></td>\r\n                <td class=\"w150\"><div>&nbsp;</div></td>\r\n                <td class=\"w130\"><div>&nbsp;</div></td>\r\n                <td class=\"w130\"><div>&nbsp;</div></td>\r\n                <td class=\"w80\"><div>&nbsp;</div></td>\r\n                <td class=\"w100\"><div>&nbsp;</div></td>\r\n              </tr>\r\n            </ng-container>\r\n          </table>\r\n        </div>\r\n      </div>\r\n\r\n      <ng-container *ngIf=\"reportList.length == 0 && !loader\">\r\n        <app-not-result-found></app-not-result-found>\r\n      </ng-container>\r\n\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"fab-btns\">\r\n    <button mat-fab class=\"excel\" *ngIf=\"reportList.length > 0\"\r\n      (click)=\"lastBtnValue('excel'); downloadExcel();\" [ngClass]=\"{'pulse': fabBtnValue == 'excel'}\">\r\n      <img src=\"assets/img/excel.svg\">\r\n      Download Excel\r\n    </button>\r\n  </div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/loyalty-report/loyalty-report-product-inventory-report/loyalty-report-product-inventory-report.component.scss":
/*!*******************************************************************************************************************************!*\
  !*** ./src/app/loyalty-report/loyalty-report-product-inventory-report/loyalty-report-product-inventory-report.component.scss ***!
  \*******************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@charset \"UTF-8\";\n.cs-tabs {\n  display: flex;\n  gap: 16px;\n  align-items: center;\n}\n.cs-tabs .cs-tab-btn {\n  font-weight: 700;\n  font-size: 14px;\n  letter-spacing: 0.3px;\n  padding: 9px 26px;\n  border-radius: 8px;\n  border: 2px solid #c5cad3;\n  background: #fff;\n  color: #444;\n  cursor: pointer;\n  transition: all 0.15s ease-in-out;\n}\n.cs-tabs .cs-tab-btn:hover {\n  border-color: #1976d2;\n  color: #1976d2;\n}\n.cs-tabs .cs-tab-btn.active {\n  background: #1976d2;\n  border-color: #1976d2;\n  color: #fff;\n  box-shadow: 0 2px 6px rgba(25, 118, 210, 0.35);\n}\n/* ── Summary cards ── */\n.report-summary {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 12px;\n  padding: 4px 16px 12px;\n}\n.report-summary .summary-card {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  min-width: 170px;\n  padding: 12px 16px;\n  background: #fff;\n  border: 1px solid #e6e9ef;\n  border-radius: 10px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);\n  transition: box-shadow 0.15s ease, transform 0.15s ease;\n}\n.report-summary .summary-card:hover {\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.09);\n  transform: translateY(-1px);\n}\n.report-summary .summary-card .sc-icon {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 40px;\n  height: 40px;\n  border-radius: 10px;\n  flex-shrink: 0;\n}\n.report-summary .summary-card .sc-icon i {\n  font-size: 22px;\n}\n.report-summary .summary-card .sc-body {\n  min-width: 0;\n}\n.report-summary .summary-card .sc-value {\n  font-size: 22px;\n  font-weight: 700;\n  line-height: 1.1;\n  color: #222;\n}\n.report-summary .summary-card .sc-value.sc-value-sm {\n  font-size: 14px;\n  max-width: 160px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.report-summary .summary-card .sc-label {\n  font-size: 12px;\n  color: #7a828e;\n  margin-top: 2px;\n}\n.report-summary .summary-card .sc-label em {\n  font-style: normal;\n  opacity: 0.75;\n  font-size: 11px;\n}\n.report-summary .summary-card.sc-blue .sc-icon {\n  background: #e8f0fe;\n}\n.report-summary .summary-card.sc-blue .sc-icon i {\n  color: #1967d2;\n}\n.report-summary .summary-card.sc-green .sc-icon {\n  background: #e6f4ea;\n}\n.report-summary .summary-card.sc-green .sc-icon i {\n  color: #1e8e3e;\n}\n.report-summary .summary-card.sc-red .sc-icon {\n  background: #fce8e6;\n}\n.report-summary .summary-card.sc-red .sc-icon i {\n  color: #d93025;\n}\n.report-summary .summary-card.sc-gray .sc-icon {\n  background: #f1f3f4;\n}\n.report-summary .summary-card.sc-gray .sc-icon i {\n  color: #5f6368;\n}\n/* ── Table polish ── */\n.cs-table .table-content table tr {\n  transition: background 0.12s ease;\n}\n.cs-table .table-content table tr td {\n  transition: background 0.12s ease;\n}\n.cs-table .table-content table tr:nth-of-type(even) td {\n  background: #f7f9fc;\n}\n.cs-table .table-content table tr:hover td {\n  background: #eaf2fd;\n}\n.cs-table {\n  /* numeric column alignment + emphasis */\n}\n.cs-table td.num {\n  text-align: right;\n  font-weight: 600;\n  font-variant-numeric: tabular-nums;\n}\n/* ── Status pills ── */\n.pill {\n  display: inline-block;\n  padding: 2px 10px;\n  border-radius: 12px;\n  font-size: 11px;\n  font-weight: 600;\n  line-height: 18px;\n  white-space: nowrap;\n}\n.pill-green {\n  background: #e6f4ea;\n  color: #1e8e3e;\n}\n.pill-red {\n  background: #fce8e6;\n  color: #d93025;\n}\n.pill-blue {\n  background: #e8f0fe;\n  color: #1967d2;\n}\n.pill-gray {\n  background: #f1f3f4;\n  color: #5f6368;\n}"

/***/ }),

/***/ "./src/app/loyalty-report/loyalty-report-product-inventory-report/loyalty-report-product-inventory-report.component.ts":
/*!*****************************************************************************************************************************!*\
  !*** ./src/app/loyalty-report/loyalty-report-product-inventory-report/loyalty-report-product-inventory-report.component.ts ***!
  \*****************************************************************************************************************************/
/*! exports provided: LoyaltyReportProductInventoryReportComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoyaltyReportProductInventoryReportComponent", function() { return LoyaltyReportProductInventoryReportComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng6-toastr-notifications */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/ng6-toastr-notifications/fesm5/ng6-toastr-notifications.js");
/* harmony import */ var src_app_bottom_sheet_bottom_sheet_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/bottom-sheet/bottom-sheet.component */ "./src/app/bottom-sheet/bottom-sheet.component.ts");
/* harmony import */ var src_app_localstorage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/localstorage.service */ "./src/app/localstorage.service.ts");
/* harmony import */ var src_services_DatabaseService__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/_services/DatabaseService */ "./src/_services/DatabaseService.ts");







var LoyaltyReportProductInventoryReportComponent = /** @class */ (function () {
    function LoyaltyReportProductInventoryReportComponent(bottomSheet, service, toast, session) {
        this.bottomSheet = bottomSheet;
        this.service = service;
        this.toast = toast;
        this.session = session;
        this.loader = false;
        this.reportList = [];
        this.page_limit = 50;
        this.start = 0;
        this.pagenumber = '';
        this.sr_no = 0;
        this.filter = {};
        this.active_tab = 'Ply Expert';
        this.fabBtnValue = 'add';
        // ── Dealer dropdown ──
        this.dealerList = [];
        this.filteredDealers = [];
        this.selectedDealer = null;
        this.dealerDropdownOpen = false;
        this.dealerSearchText = '';
        this.dealerLoader = false;
        var assign_login_data = this.session.getSession();
        this.logined_user_data = assign_login_data.value.data;
    }
    LoyaltyReportProductInventoryReportComponent.prototype.ngOnInit = function () {
        this.filter.warehouse_type = this.active_tab;
        this.loadDealers('');
        this.getReport();
    };
    LoyaltyReportProductInventoryReportComponent.prototype.setTab = function (tab) {
        this.active_tab = tab;
        this.filter.warehouse_type = tab;
        this.start = 0;
        this.getReport();
    };
    LoyaltyReportProductInventoryReportComponent.prototype.onDocumentClick = function (event) {
        var target = event.target;
        if (!target.closest('.dealer-select-wrap')) {
            this.dealerDropdownOpen = false;
        }
    };
    LoyaltyReportProductInventoryReportComponent.prototype.loadDealers = function (search) {
        var _this = this;
        this.dealerLoader = true;
        this.service.post_rqst({ 'search': search }, 'Influencer/get_dealer_list').subscribe(function (resp) {
            if (resp['statusCode'] == 200) {
                _this.dealerList = resp['dealer'] || [];
                _this.filteredDealers = _this.dealerList.slice();
            }
            _this.dealerLoader = false;
        }, function () { _this.dealerLoader = false; });
    };
    LoyaltyReportProductInventoryReportComponent.prototype.toggleDealerDropdown = function () {
        this.dealerDropdownOpen = !this.dealerDropdownOpen;
        if (this.dealerDropdownOpen) {
            this.dealerSearchText = '';
            this.filteredDealers = this.dealerList.slice();
        }
    };
    LoyaltyReportProductInventoryReportComponent.prototype.filterDealers = function () {
        var q = (this.dealerSearchText || '').toLowerCase().trim();
        if (!q) {
            this.filteredDealers = this.dealerList.slice();
        }
        else {
            this.filteredDealers = this.dealerList.filter(function (d) {
                return (d.company_name || '').toLowerCase().includes(q) ||
                    (d.mobile || '').toLowerCase().includes(q) ||
                    (d.dr_code || '').toLowerCase().includes(q);
            });
            if (q.length >= 2) {
                this.loadDealers(q);
            }
        }
    };
    LoyaltyReportProductInventoryReportComponent.prototype.selectDealer = function (dealer) {
        this.selectedDealer = dealer;
        this.filter.dealer_id = dealer.id;
        this.filter.dealer_name = dealer.company_name;
        this.dealerDropdownOpen = false;
        this.dealerSearchText = '';
        this.start = 0;
        this.getReport();
    };
    LoyaltyReportProductInventoryReportComponent.prototype.clearDealer = function () {
        this.selectedDealer = null;
        this.filter.dealer_id = '';
        this.filter.dealer_name = '';
        this.dealerDropdownOpen = false;
        this.dealerSearchText = '';
        this.start = 0;
        this.getReport();
    };
    LoyaltyReportProductInventoryReportComponent.prototype.refresh = function () {
        this.start = 0;
        this.filter = {};
        this.filter.warehouse_type = this.active_tab;
        this.selectedDealer = null;
        this.dealerSearchText = '';
        this.getReport();
    };
    LoyaltyReportProductInventoryReportComponent.prototype.pervious = function () {
        this.start = this.start - this.page_limit;
        this.getReport();
    };
    LoyaltyReportProductInventoryReportComponent.prototype.nextPage = function () {
        this.start = this.start + this.page_limit;
        this.getReport();
    };
    LoyaltyReportProductInventoryReportComponent.prototype.getReport = function () {
        var _this = this;
        this.loader = true;
        if (this.pagenumber > this.total_page) {
            this.pagenumber = this.total_page;
            this.start = this.pageCount - this.page_limit;
        }
        if (this.start < 0) {
            this.start = 0;
        }
        this.service.post_rqst({ 'start': this.start, 'pagelimit': this.page_limit, 'filter': this.filter }, 'LoyaltyReport/product_inventory_report').subscribe(function (resp) {
            if (resp['statusCode'] == 200) {
                _this.reportList = resp['result'];
                _this.pageCount = resp['count'];
                if (_this.pagenumber > _this.total_page) {
                    _this.pagenumber = _this.total_page;
                    _this.start = _this.pageCount - _this.page_limit;
                }
                else {
                    _this.pagenumber = Math.ceil(_this.start / _this.page_limit) + 1;
                }
                _this.total_page = Math.ceil(_this.pageCount / _this.page_limit);
                _this.sr_no = (_this.pagenumber - 1) * _this.page_limit;
                _this.loader = false;
            }
            else {
                _this.toast.errorToastr(resp['statusMsg']);
                _this.loader = false;
            }
        }, function (err) {
            _this.loader = false;
        });
    };
    LoyaltyReportProductInventoryReportComponent.prototype.openBottomSheet = function () {
        var _this = this;
        this.bottomSheet.open(src_app_bottom_sheet_bottom_sheet_component__WEBPACK_IMPORTED_MODULE_4__["BottomSheetComponent"], {
            data: { 'filterPage': 'inventory_report' }
        });
        this.bottomSheet._openedBottomSheetRef.afterDismissed().subscribe(function (data) {
            if (data) {
                _this.filter.date_from = data.date_from;
                _this.filter.date_to = data.date_to;
                _this.getReport();
            }
        });
    };
    LoyaltyReportProductInventoryReportComponent.prototype.downloadExcel = function () {
        var _this = this;
        this.loader = true;
        this.service.post_rqst({ 'filter': this.filter }, 'LoyaltyReport/excel_product_inventory_report').subscribe(function (result) {
            if (result['msg'] == true) {
                _this.loader = false;
                window.open(_this.service.downloadUrl + result['filename']);
                _this.getReport();
            }
            else {
                _this.loader = false;
                _this.toast.errorToastr('No records found.');
            }
        }, function (err) {
            _this.loader = false;
        });
    };
    LoyaltyReportProductInventoryReportComponent.prototype.lastBtnValue = function (value) {
        this.fabBtnValue = value;
    };
    Object.defineProperty(LoyaltyReportProductInventoryReportComponent.prototype, "addQty", {
        // ── Summary helpers (aggregate the currently loaded page) ──
        get: function () {
            return (this.reportList || [])
                .filter(function (r) { return r.stock_type == 'Add'; })
                .reduce(function (sum, r) { return sum + (Number(r.qty) || 0); }, 0);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LoyaltyReportProductInventoryReportComponent.prototype, "removeQty", {
        get: function () {
            return (this.reportList || [])
                .filter(function (r) { return r.stock_type == 'Remove'; })
                .reduce(function (sum, r) { return sum + (Number(r.qty) || 0); }, 0);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(LoyaltyReportProductInventoryReportComponent.prototype, "netQty", {
        get: function () {
            return this.addQty - this.removeQty;
        },
        enumerable: true,
        configurable: true
    });
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('document:click', ['$event']),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Function),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [MouseEvent]),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:returntype", void 0)
    ], LoyaltyReportProductInventoryReportComponent.prototype, "onDocumentClick", null);
    LoyaltyReportProductInventoryReportComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-loyalty-report-product-inventory-report',
            template: __webpack_require__(/*! ./loyalty-report-product-inventory-report.component.html */ "./src/app/loyalty-report/loyalty-report-product-inventory-report/loyalty-report-product-inventory-report.component.html"),
            styles: [__webpack_require__(/*! ./loyalty-report-product-inventory-report.component.scss */ "./src/app/loyalty-report/loyalty-report-product-inventory-report/loyalty-report-product-inventory-report.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatBottomSheet"],
            src_services_DatabaseService__WEBPACK_IMPORTED_MODULE_6__["DatabaseService"],
            ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_3__["ToastrManager"],
            src_app_localstorage_service__WEBPACK_IMPORTED_MODULE_5__["sessionStorage"]])
    ], LoyaltyReportProductInventoryReportComponent);
    return LoyaltyReportProductInventoryReportComponent;
}());



/***/ }),

/***/ "./src/app/loyalty-report/loyalty-report-scan-ageing/loyalty-report-scan-ageing.component.html":
/*!*****************************************************************************************************!*\
  !*** ./src/app/loyalty-report/loyalty-report-scan-ageing/loyalty-report-scan-ageing.component.html ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-container\">\r\n\r\n  <div class=\"tools-container\">\r\n    <h2>SCAN COUPON POINT CATEGORY WISE </h2> Filter: <h2>{{filter.state}}</h2> <h2>{{filter.date_from}}</h2><h2>{{filter.date_to}}</h2>\r\n    <div class=\"left-auto df ac flex-gap-10\">\r\n      <button mat-icon-button matTooltip=\"Refresh\" (click)=\"getSecondaryProductWiseReport('refresh','')\">\r\n        <i class=\"material-icons\">refresh</i>\r\n      </button>\r\n      <button mat-icon-button matTooltip=\"Filter\" (click)=\"openBottomSheet()\">\r\n        <i class=\"material-icons\">filter_alt</i>\r\n      </button>\r\n\r\n      <div class=\"pagination\" *ngIf=\"secondaryProductReportList.length > 0\">\r\n        <div class=\"pagination-content\">\r\n          Pages\r\n          <span>{{pagenumber}}</span>\r\n          of\r\n          <span>{{total_page}}</span>\r\n        </div>\r\n        <div class=\"page-nav\">\r\n\r\n          <button mat-icon-button matTooltip=\"Older\" (click)=\"pervious()\" [disabled]=\"start == 0 || total_page == 0\">\r\n            <i class=\"material-icons\">navigate_before</i>\r\n          </button>\r\n          <button mat-icon-button matTooltip=\"Newer\" (click)=\"nextPage()\" [disabled]=\"pagenumber == total_page \">\r\n            <i class=\"material-icons\">navigate_next</i>\r\n          </button>\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"container container-scroll\">\r\n    <div class=\"cs-table horizontal-scroll\">\r\n      <div class=\"sticky-head\">\r\n        <div class=\"table-head\">\r\n          <table>\r\n            <tr>\r\n              <th class=\"w50\">S.No</th>\r\n              <th class=\"w150\">Category</th>\r\n              <th class=\"w150\">Total Generated Coupon\r\n\r\n              </th>\r\n              <th class=\"w150\">Available Coupon / Not Scan Coupon\r\n\r\n              </th>\r\n              <th class=\"w150\">Total Scan Coupon\r\n\r\n              </th>\r\n\r\n            </tr>\r\n          </table>\r\n        </div>\r\n        <div class=\"table-head bdrt\">\r\n          <table>\r\n            <tr>\r\n              <th class=\"w50\">&nbsp;</th>\r\n              <th class=\"w150\">\r\n\r\n                <div class=\"th-search-acmt\">\r\n                  <mat-form-field class=\"example-full-width cs-input select-input\">\r\n                    <input matInput placeholder=\"Search...\" type=\"text\" name=\"category\"    [(ngModel)]=\"filter.category\"\r\n                      (keyup.enter)=\"getSecondaryProductWiseReport('',this.length)\">\r\n                  </mat-form-field>\r\n                </div>\r\n\r\n              </th>\r\n              <th class=\"w150\"></th>\r\n              <th class=\"w150\"></th>\r\n              <th class=\"w150\"></th>\r\n\r\n            </tr>\r\n          </table>\r\n        </div>\r\n      </div>\r\n      <div class=\"table-container\">\r\n        <div class=\"table-content\">\r\n          <table>\r\n            <ng-container *ngIf=\"!loader\">\r\n              <tr *ngFor=\"let report of secondaryProductReportList; let i=index\">\r\n                <td class=\"w50\">{{i+1+sr_no}}</td>\r\n                <td class=\"w150\"><a class=\"link-btn\" (click)=\"goToComponentB(report.category_id,report.category);service.setData(filter)\"\r\n\r\n                  >{{report.category | titlecase}}</a></td>\r\n                <td class=\"w150\">{{report.total_generated_coupon}}</td>\r\n                <td class=\"w150\">{{report.available_coupon}}</td>\r\n                <td class=\"w150\">{{report.total_scan_coupon}}</td>\r\n\r\n              </tr>\r\n            </ng-container>\r\n            <ng-container *ngIf=\"loader\">\r\n              <tr class=\"sk-loading\" *ngFor=\"let row of [].constructor(10);\">\r\n                <td class=\"w50\">\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n                <td class=\"w150\">\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n                <td class=\"w200\">\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n                <td class=\"w60\">\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n\r\n                <td class=\"w100\">\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n                <td class=\"w100\">\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n                <td class=\"w100\">\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n\r\n              </tr>\r\n            </ng-container>\r\n          </table>\r\n        </div>\r\n      </div>\r\n      <ng-container *ngIf=\"secondaryProductReportList.length == 0\">\r\n        <app-not-result-found></app-not-result-found>\r\n      </ng-container>\r\n    </div>\r\n\r\n\r\n  </div>\r\n  <div class=\"fab-btns\">\r\n    <button class=\"pulse excel\" mat-fab color=\"primary\" [matMenuTriggerFor]=\"menu\"\r\n      *ngIf=\"login_data.download_product_wise_secondary_report=='1'\">\r\n      <i class=\"material-icons\">apps</i>\r\n      Action\r\n    </button>\r\n    <mat-menu #menu=\"matMenu\">\r\n      <button mat-menu-item (click)=\"getproductWiseSecondaryReportExcel();\"\r\n        *ngIf=\"secondaryProductReportList.length > 0 && login_data.download_product_wise_secondary_report=='1'\">\r\n        <mat-icon>download</mat-icon>\r\n        <span>Download in excel</span>\r\n      </button>\r\n    </mat-menu>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/loyalty-report/loyalty-report-scan-ageing/loyalty-report-scan-ageing.component.scss":
/*!*****************************************************************************************************!*\
  !*** ./src/app/loyalty-report/loyalty-report-scan-ageing/loyalty-report-scan-ageing.component.scss ***!
  \*****************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/loyalty-report/loyalty-report-scan-ageing/loyalty-report-scan-ageing.component.ts":
/*!***************************************************************************************************!*\
  !*** ./src/app/loyalty-report/loyalty-report-scan-ageing/loyalty-report-scan-ageing.component.ts ***!
  \***************************************************************************************************/
/*! exports provided: LoyaltyReportScanAgeingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoyaltyReportScanAgeingComponent", function() { return LoyaltyReportScanAgeingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng6-toastr-notifications */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/ng6-toastr-notifications/fesm5/ng6-toastr-notifications.js");
/* harmony import */ var src_app_bottom_sheet_bottom_sheet_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/bottom-sheet/bottom-sheet.component */ "./src/app/bottom-sheet/bottom-sheet.component.ts");
/* harmony import */ var src_app_localstorage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/localstorage.service */ "./src/app/localstorage.service.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! moment */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_services_DatabaseService__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/_services/DatabaseService */ "./src/_services/DatabaseService.ts");
/* harmony import */ var src_app_reports_prouct_wise_secondary_report_product_wise_secondary_report_modal_product_wise_secondary_report_modal_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/reports/prouct-wise-secondary-report/product-wise-secondary-report-modal/product-wise-secondary-report-modal.component */ "./src/app/reports/prouct-wise-secondary-report/product-wise-secondary-report-modal/product-wise-secondary-report-modal.component.ts");










var LoyaltyReportScanAgeingComponent = /** @class */ (function () {
    function LoyaltyReportScanAgeingComponent(bottomSheet, service, toast, session, dialog, router) {
        this.bottomSheet = bottomSheet;
        this.service = service;
        this.toast = toast;
        this.session = session;
        this.dialog = dialog;
        this.router = router;
        this.loader = false;
        this.secondaryProductReportList = [];
        this.search = {};
        this.login_data = [];
        this.page_limit = 50;
        this.start = 0;
        this.pagenumber = '';
        this.filter = {};
        this.filtering = false;
        this.length = 0;
        this.header_list = [];
        this.login_data = this.session.getSession();
        this.login_data = this.login_data.value.data;
    }
    LoyaltyReportScanAgeingComponent.prototype.ngOnInit = function () {
        this.filter = this.service.getData();
        this.length = 0;
        this.getSecondaryProductWiseReport('', this.length);
    };
    LoyaltyReportScanAgeingComponent.prototype.refresh = function () {
        this.start = 0;
        this.getSecondaryProductWiseReport('', this.length);
    };
    LoyaltyReportScanAgeingComponent.prototype.pervious = function () {
        this.start = this.start - this.page_limit;
        this.getSecondaryProductWiseReport('', this.length);
    };
    LoyaltyReportScanAgeingComponent.prototype.goToComponentB = function (id, category_name) {
        this.filter.category_id = id;
        this.filter.category_name = category_name;
        this.router.navigate(['/loyalty-report/loyalty-report-influencer-categorywise-scan-point/',], { queryParams: this.filter });
    };
    LoyaltyReportScanAgeingComponent.prototype.nextPage = function () {
        this.start = this.start + this.page_limit;
        this.getSecondaryProductWiseReport('', this.length);
    };
    LoyaltyReportScanAgeingComponent.prototype.getSecondaryProductWiseReport = function (action, length) {
        var _this = this;
        this.loader = true;
        if (this.pagenumber > this.total_page) {
            this.pagenumber = this.total_page;
            this.start = this.pageCount - this.page_limit;
        }
        if (this.start < 0) {
            this.start = 0;
        }
        //  if (this.filter.date_from) {
        //       this.filter.date_from = moment(this.filter.date_from).format('YYYY-MM-DD');
        //     }
        //     if (this.filter.date_to) {
        //       this.filter.date_to = moment(this.filter.date_to).format('YYYY-MM-DD');
        //     }
        //     if (this.filter.date) this.filtering = true;
        //     this.filter.mode = 0;
        //     this.filter.limit = length;
        if (action == 'refresh') {
            this.filter.date_from = '';
            this.filter.date_to = '';
            this.filter.state = '';
            this.filter.category = '';
        }
        this.service.post_rqst({ 'start': this.start, 'pagelimit': this.page_limit, 'filter': this.filter }, 'CouponCode/coupon_report').subscribe(function (resp) {
            if (resp['statusCode'] == 200) {
                _this.secondaryProductReportList = resp['total_coupon_count'];
                // this.header_list = resp.headers;
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
                _this.loader = false;
            }
            else {
                _this.toast.errorToastr(resp['statusMsg']);
            }
        }, function (err) {
            _this.loader = false;
        });
    };
    LoyaltyReportScanAgeingComponent.prototype.onDate = function (event) {
        console.log(event);
        this.filter.date_to = moment__WEBPACK_IMPORTED_MODULE_6__(event.target.value).format('YYYY-MM-DD');
        this.filter.date_from = moment__WEBPACK_IMPORTED_MODULE_6__(event.target.value).format('YYYY-MM-DD');
        this.getSecondaryProductWiseReport('', this.length);
    };
    LoyaltyReportScanAgeingComponent.prototype.openBottomSheet = function () {
        var _this = this;
        this.bottomSheet.open(src_app_bottom_sheet_bottom_sheet_component__WEBPACK_IMPORTED_MODULE_4__["BottomSheetComponent"], {
            data: {
                'filterPage': 'product_wise_secondary',
                'from': 'category_wise_coupon',
            }
        });
        this.bottomSheet._openedBottomSheetRef.afterDismissed().subscribe(function (data) {
            _this.filter.date_from = data.date_from;
            _this.filter.date_to = data.date_to;
            _this.filter.state = data.state;
            _this.length = 0;
            _this.getSecondaryProductWiseReport(_this.filter.date_to, _this.filter.date_from);
        });
    };
    LoyaltyReportScanAgeingComponent.prototype.getproductWiseSecondaryReportExcel = function () {
        var _this = this;
        this.loader = true;
        this.service.post_rqst({ 'start': this.start, 'pagelimit': this.page_limit, 'filter': this.filter }, "Excel/export_coupon_report").subscribe(function (result) {
            if (result['msg'] == true) {
                _this.loader = false;
                window.open(_this.service.downloadUrl + result['filename']);
                _this.getSecondaryProductWiseReport('', _this.length);
            }
        });
    };
    LoyaltyReportScanAgeingComponent.prototype.openProductWiseSecondarySubCategoryReport = function (drId, category, startDate, endDate, salesUserId) {
        var dialogRef = this.dialog.open(src_app_reports_prouct_wise_secondary_report_product_wise_secondary_report_modal_product_wise_secondary_report_modal_component__WEBPACK_IMPORTED_MODULE_9__["ProductWiseSecondaryReportModalComponent"], {
            width: '800px',
            panelClass: 'cs-modal',
            data: {
                'from': 'product-wise-sub-category',
                drId: drId,
                category: category,
                startDate: startDate,
                endDate: endDate,
                salesUserId: salesUserId
            }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result != false) {
            }
        });
    };
    LoyaltyReportScanAgeingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-loyalty-report-scan-ageing',
            template: __webpack_require__(/*! ./loyalty-report-scan-ageing.component.html */ "./src/app/loyalty-report/loyalty-report-scan-ageing/loyalty-report-scan-ageing.component.html"),
            styles: [__webpack_require__(/*! ./loyalty-report-scan-ageing.component.scss */ "./src/app/loyalty-report/loyalty-report-scan-ageing/loyalty-report-scan-ageing.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatBottomSheet"], src_services_DatabaseService__WEBPACK_IMPORTED_MODULE_8__["DatabaseService"], ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_3__["ToastrManager"], src_app_localstorage_service__WEBPACK_IMPORTED_MODULE_5__["sessionStorage"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"], _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]])
    ], LoyaltyReportScanAgeingComponent);
    return LoyaltyReportScanAgeingComponent;
}());



/***/ }),

/***/ "./src/app/loyalty-report/loyalty-report-scan-point-req-list/loyalty-report-scan-point-req-list.component.html":
/*!*********************************************************************************************************************!*\
  !*** ./src/app/loyalty-report/loyalty-report-scan-point-req-list/loyalty-report-scan-point-req-list.component.html ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  loyalty-report-scan-point-req-list works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/loyalty-report/loyalty-report-scan-point-req-list/loyalty-report-scan-point-req-list.component.scss":
/*!*********************************************************************************************************************!*\
  !*** ./src/app/loyalty-report/loyalty-report-scan-point-req-list/loyalty-report-scan-point-req-list.component.scss ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/loyalty-report/loyalty-report-scan-point-req-list/loyalty-report-scan-point-req-list.component.ts":
/*!*******************************************************************************************************************!*\
  !*** ./src/app/loyalty-report/loyalty-report-scan-point-req-list/loyalty-report-scan-point-req-list.component.ts ***!
  \*******************************************************************************************************************/
/*! exports provided: LoyaltyReportScanPointReqListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoyaltyReportScanPointReqListComponent", function() { return LoyaltyReportScanPointReqListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/core/fesm5/core.js");


var LoyaltyReportScanPointReqListComponent = /** @class */ (function () {
    function LoyaltyReportScanPointReqListComponent() {
    }
    LoyaltyReportScanPointReqListComponent.prototype.ngOnInit = function () {
    };
    LoyaltyReportScanPointReqListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-loyalty-report-scan-point-req-list',
            template: __webpack_require__(/*! ./loyalty-report-scan-point-req-list.component.html */ "./src/app/loyalty-report/loyalty-report-scan-point-req-list/loyalty-report-scan-point-req-list.component.html"),
            styles: [__webpack_require__(/*! ./loyalty-report-scan-point-req-list.component.scss */ "./src/app/loyalty-report/loyalty-report-scan-point-req-list/loyalty-report-scan-point-req-list.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], LoyaltyReportScanPointReqListComponent);
    return LoyaltyReportScanPointReqListComponent;
}());



/***/ }),

/***/ "./src/app/loyalty-report/loyalty-report-seven-days-not-scanned/loyalty-report-seven-days-not-scanned.component.html":
/*!***************************************************************************************************************************!*\
  !*** ./src/app/loyalty-report/loyalty-report-seven-days-not-scanned/loyalty-report-seven-days-not-scanned.component.html ***!
  \***************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  loyalty-report-seven-days-not-scanned works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/loyalty-report/loyalty-report-seven-days-not-scanned/loyalty-report-seven-days-not-scanned.component.scss":
/*!***************************************************************************************************************************!*\
  !*** ./src/app/loyalty-report/loyalty-report-seven-days-not-scanned/loyalty-report-seven-days-not-scanned.component.scss ***!
  \***************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/loyalty-report/loyalty-report-seven-days-not-scanned/loyalty-report-seven-days-not-scanned.component.ts":
/*!*************************************************************************************************************************!*\
  !*** ./src/app/loyalty-report/loyalty-report-seven-days-not-scanned/loyalty-report-seven-days-not-scanned.component.ts ***!
  \*************************************************************************************************************************/
/*! exports provided: LoyaltyReportSevenDaysNotScannedComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoyaltyReportSevenDaysNotScannedComponent", function() { return LoyaltyReportSevenDaysNotScannedComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/core/fesm5/core.js");


var LoyaltyReportSevenDaysNotScannedComponent = /** @class */ (function () {
    function LoyaltyReportSevenDaysNotScannedComponent() {
    }
    LoyaltyReportSevenDaysNotScannedComponent.prototype.ngOnInit = function () {
    };
    LoyaltyReportSevenDaysNotScannedComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-loyalty-report-seven-days-not-scanned',
            template: __webpack_require__(/*! ./loyalty-report-seven-days-not-scanned.component.html */ "./src/app/loyalty-report/loyalty-report-seven-days-not-scanned/loyalty-report-seven-days-not-scanned.component.html"),
            styles: [__webpack_require__(/*! ./loyalty-report-seven-days-not-scanned.component.scss */ "./src/app/loyalty-report/loyalty-report-seven-days-not-scanned/loyalty-report-seven-days-not-scanned.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], LoyaltyReportSevenDaysNotScannedComponent);
    return LoyaltyReportSevenDaysNotScannedComponent;
}());



/***/ }),

/***/ "./src/app/loyalty-report/loyalty-report-state-kyc-status/loyalty-report-state-kyc-status.component.html":
/*!***************************************************************************************************************!*\
  !*** ./src/app/loyalty-report/loyalty-report-state-kyc-status/loyalty-report-state-kyc-status.component.html ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  loyalty-report-state-kyc-status works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/loyalty-report/loyalty-report-state-kyc-status/loyalty-report-state-kyc-status.component.scss":
/*!***************************************************************************************************************!*\
  !*** ./src/app/loyalty-report/loyalty-report-state-kyc-status/loyalty-report-state-kyc-status.component.scss ***!
  \***************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/loyalty-report/loyalty-report-state-kyc-status/loyalty-report-state-kyc-status.component.ts":
/*!*************************************************************************************************************!*\
  !*** ./src/app/loyalty-report/loyalty-report-state-kyc-status/loyalty-report-state-kyc-status.component.ts ***!
  \*************************************************************************************************************/
/*! exports provided: LoyaltyReportStateKycStatusComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoyaltyReportStateKycStatusComponent", function() { return LoyaltyReportStateKycStatusComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/core/fesm5/core.js");


var LoyaltyReportStateKycStatusComponent = /** @class */ (function () {
    function LoyaltyReportStateKycStatusComponent() {
    }
    LoyaltyReportStateKycStatusComponent.prototype.ngOnInit = function () {
    };
    LoyaltyReportStateKycStatusComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-loyalty-report-state-kyc-status',
            template: __webpack_require__(/*! ./loyalty-report-state-kyc-status.component.html */ "./src/app/loyalty-report/loyalty-report-state-kyc-status/loyalty-report-state-kyc-status.component.html"),
            styles: [__webpack_require__(/*! ./loyalty-report-state-kyc-status.component.scss */ "./src/app/loyalty-report/loyalty-report-state-kyc-status/loyalty-report-state-kyc-status.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], LoyaltyReportStateKycStatusComponent);
    return LoyaltyReportStateKycStatusComponent;
}());



/***/ }),

/***/ "./src/app/loyalty-report/loyalty-report-state-wise-login-ageing/loyalty-report-state-wise-login-ageing.component.html":
/*!*****************************************************************************************************************************!*\
  !*** ./src/app/loyalty-report/loyalty-report-state-wise-login-ageing/loyalty-report-state-wise-login-ageing.component.html ***!
  \*****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-container\">\r\n\r\n  <div class=\"tools-container\">\r\n    <h2>USER STATE WISE LOGIN AGEING</h2>\r\n    <div class=\"left-auto df ac flex-gap-10\">\r\n      <button mat-icon-button matTooltip=\"Refresh\" (click)=\"refresh()\">\r\n        <i class=\"material-icons\">refresh</i>\r\n      </button>\r\n      <button mat-icon-button matTooltip=\"Filter\" (click)=\"openBottomSheet()\">\r\n        <i class=\"material-icons\">filter_alt</i>\r\n      </button>\r\n\r\n      <div class=\"pagination\" *ngIf=\"secondaryProductReportList.length > 0\">\r\n        <div class=\"pagination-content\">\r\n          Pages\r\n          <span>{{pagenumber}}</span>\r\n          of\r\n          <span>{{total_page}}</span>\r\n        </div>\r\n        <div class=\"page-nav\">\r\n\r\n          <button mat-icon-button matTooltip=\"Older\" (click)=\"pervious()\" [disabled]=\"start == 0 || total_page == 0\">\r\n            <i class=\"material-icons\">navigate_before</i>\r\n          </button>\r\n          <button mat-icon-button matTooltip=\"Newer\" (click)=\"nextPage()\" [disabled]=\"pagenumber == total_page \">\r\n            <i class=\"material-icons\">navigate_next</i>\r\n          </button>\r\n        </div>\r\n      </div>\r\n\r\n\r\n    </div>\r\n  </div>\r\n  <div class=\"container container-scroll\">\r\n    <div class=\"cs-table horizontal-scroll\">\r\n      <div class=\"sticky-head\">\r\n        <div class=\"table-head\">\r\n          <table>\r\n            <tr>\r\n              <th class=\"w50\">S.No</th>\r\n              <th class=\"w150\">State</th>\r\n              <th class=\"w150\">Total User</th>\r\n              <th class=\"w150\">Last Seven Days</th>\r\n              <th class=\"w150\">Last Twelve Days</th>\r\n              <th class=\"w150\">Last Thiry Days</th>\r\n              <th class=\"w150\">Last Three Months</th>\r\n              <th class=\"w150\">Last Six Months</th>\r\n              <th class=\"w150\">Last Twelve Months</th>\r\n            </tr>\r\n          </table>\r\n        </div>\r\n        <div class=\"table-head bdrt\">\r\n          <table>\r\n            <tr>\r\n              <th class=\"w50\">&nbsp;</th>\r\n              <th class=\"w150\"></th>\r\n              <th class=\"w150\"></th>\r\n              <th class=\"w150\"></th>\r\n              <th class=\"w150\"></th>\r\n              <th class=\"w150\"></th>\r\n              <th class=\"w150\"></th>\r\n              <th class=\"w150\"></th>\r\n              <th class=\"w150\"></th>\r\n            </tr>\r\n          </table>\r\n        </div>\r\n      </div>\r\n      <div class=\"table-container\">\r\n        <div class=\"table-content\">\r\n          <table>\r\n            <ng-container *ngIf=\"!loader\">\r\n              <tr *ngFor=\"let report of secondaryProductReportList; let i=index\">\r\n                <td class=\"w50\">{{i+1+sr_no}}</td>\r\n                <td class=\"w150\">{{report.state}}</td>\r\n                <td class=\"w150\">{{report.total_user}}</td>\r\n                <td class=\"w150\">{{report.last_7_day}}</td>\r\n                <td class=\"w150\">{{report.last_12_day}}</td>\r\n                <td class=\"w150\">{{report.last_30_day}}</td>\r\n                <td class=\"w150\">{{report.last_3_month}}</td>\r\n                <td class=\"w150\">{{report.last_6_month}}</td>\r\n                <td class=\"w150\">{{report.last_12_month}}</td>\r\n              </tr>\r\n            </ng-container>\r\n            <ng-container *ngIf=\"loader\">\r\n              <tr class=\"sk-loading\" *ngFor=\"let row of [].constructor(10);\">\r\n                <td class=\"w50\">\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n                <td class=\"w150\">\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n                <td class=\"w200\">\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n                <td class=\"w60\">\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n                <td class=\"w120\">\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n                <td class=\"w100\">\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n                <td class=\"w100\">\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n                <td class=\"w100\">\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n                <td class=\"w100\">\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n                <td class=\"w220\">\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n                <td class=\"w100\">\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n                <td class=\"padding0 w350\">\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n              </tr>\r\n            </ng-container>\r\n          </table>\r\n        </div>\r\n      </div>\r\n      <ng-container *ngIf=\"secondaryProductReportList.length == 0\">\r\n        <app-not-result-found></app-not-result-found>\r\n      </ng-container>\r\n    </div>\r\n  </div>\r\n  <div class=\"fab-btns\">\r\n    <button class=\"pulse excel\" mat-fab color=\"primary\" [matMenuTriggerFor]=\"menu\"\r\n      *ngIf=\"login_data.download_product_wise_secondary_report=='1'\">\r\n      <i class=\"material-icons\">apps</i>\r\n      Action\r\n    </button>\r\n    <mat-menu #menu=\"matMenu\">\r\n      <button mat-menu-item (click)=\"getproductWiseSecondaryReportExcel();\"\r\n        *ngIf=\"secondaryProductReportList.length > 0 && login_data.download_product_wise_secondary_report=='1'\">\r\n        <mat-icon>download</mat-icon>\r\n        <span>Download in excel</span>\r\n      </button>\r\n    </mat-menu>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/loyalty-report/loyalty-report-state-wise-login-ageing/loyalty-report-state-wise-login-ageing.component.scss":
/*!*****************************************************************************************************************************!*\
  !*** ./src/app/loyalty-report/loyalty-report-state-wise-login-ageing/loyalty-report-state-wise-login-ageing.component.scss ***!
  \*****************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/loyalty-report/loyalty-report-state-wise-login-ageing/loyalty-report-state-wise-login-ageing.component.ts":
/*!***************************************************************************************************************************!*\
  !*** ./src/app/loyalty-report/loyalty-report-state-wise-login-ageing/loyalty-report-state-wise-login-ageing.component.ts ***!
  \***************************************************************************************************************************/
/*! exports provided: LoyaltyReportStateWiseLoginAgeingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoyaltyReportStateWiseLoginAgeingComponent", function() { return LoyaltyReportStateWiseLoginAgeingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng6-toastr-notifications */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/ng6-toastr-notifications/fesm5/ng6-toastr-notifications.js");
/* harmony import */ var src_app_bottom_sheet_bottom_sheet_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/bottom-sheet/bottom-sheet.component */ "./src/app/bottom-sheet/bottom-sheet.component.ts");
/* harmony import */ var src_app_localstorage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/localstorage.service */ "./src/app/localstorage.service.ts");
/* harmony import */ var src_services_DatabaseService__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/_services/DatabaseService */ "./src/_services/DatabaseService.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! moment */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var src_app_reports_prouct_wise_secondary_report_product_wise_secondary_report_modal_product_wise_secondary_report_modal_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/reports/prouct-wise-secondary-report/product-wise-secondary-report-modal/product-wise-secondary-report-modal.component */ "./src/app/reports/prouct-wise-secondary-report/product-wise-secondary-report-modal/product-wise-secondary-report-modal.component.ts");









var LoyaltyReportStateWiseLoginAgeingComponent = /** @class */ (function () {
    function LoyaltyReportStateWiseLoginAgeingComponent(bottomSheet, service, toast, session, dialog) {
        this.bottomSheet = bottomSheet;
        this.service = service;
        this.toast = toast;
        this.session = session;
        this.dialog = dialog;
        this.loader = false;
        this.secondaryProductReportList = [];
        this.search = {};
        this.login_data = [];
        this.page_limit = 50;
        this.start = 0;
        this.pagenumber = '';
        this.filter = {};
        this.filtering = false;
        this.length = 0;
        this.login_data = this.session.getSession();
        this.login_data = this.login_data.value.data;
    }
    LoyaltyReportStateWiseLoginAgeingComponent.prototype.ngOnInit = function () {
        this.length = 0;
        this.getSecondaryProductWiseReport('', this.length);
    };
    LoyaltyReportStateWiseLoginAgeingComponent.prototype.refresh = function () {
        this.start = 0;
        this.getSecondaryProductWiseReport('', this.length);
    };
    LoyaltyReportStateWiseLoginAgeingComponent.prototype.pervious = function () {
        this.start = this.start - this.page_limit;
        this.getSecondaryProductWiseReport('', this.length);
    };
    LoyaltyReportStateWiseLoginAgeingComponent.prototype.nextPage = function () {
        this.start = this.start + this.page_limit;
        this.getSecondaryProductWiseReport('', this.length);
    };
    LoyaltyReportStateWiseLoginAgeingComponent.prototype.getSecondaryProductWiseReport = function (action, length) {
        var _this = this;
        this.loader = true;
        if (this.pagenumber > this.total_page) {
            this.pagenumber = this.total_page;
            this.start = this.pageCount - this.page_limit;
        }
        if (this.start < 0) {
            this.start = 0;
        }
        //  if (this.filter.date_from) {
        //       this.filter.date_from = moment(this.filter.date_from).format('YYYY-MM-DD');
        //     }
        //     if (this.filter.date_to) {
        //       this.filter.date_to = moment(this.filter.date_to).format('YYYY-MM-DD');
        //     }
        //     if (this.filter.date) this.filtering = true;
        //     this.filter.mode = 0;
        //     this.filter.limit = length;
        //     if (action == 'refresh') {
        //       this.filter.date_from = '';
        //       this.filter.date_to = '';
        //     }
        this.service.post_rqst({ 'start': this.start, 'pagelimit': this.page_limit, 'filter': this.filter }, 'LoyaltyReport/state_wise_login_ageing').subscribe(function (resp) {
            console.log(resp);
            if (resp['statusCode'] == 200) {
                _this.secondaryProductReportList = resp['result'];
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
                _this.loader = false;
            }
            else {
                _this.toast.errorToastr(resp['statusMsg']);
            }
        }, function (err) {
            _this.loader = false;
        });
    };
    LoyaltyReportStateWiseLoginAgeingComponent.prototype.onDate = function (event) {
        console.log(event);
        this.filter.date_to = moment__WEBPACK_IMPORTED_MODULE_7__(event.target.value).format('YYYY-MM-DD');
        this.filter.date_from = moment__WEBPACK_IMPORTED_MODULE_7__(event.target.value).format('YYYY-MM-DD');
        this.getSecondaryProductWiseReport('', this.length);
    };
    LoyaltyReportStateWiseLoginAgeingComponent.prototype.openBottomSheet = function () {
        var _this = this;
        this.bottomSheet.open(src_app_bottom_sheet_bottom_sheet_component__WEBPACK_IMPORTED_MODULE_4__["BottomSheetComponent"], {
            data: {
                'filterPage': 'product_wise_secondary',
            }
        });
        this.bottomSheet._openedBottomSheetRef.afterDismissed().subscribe(function (data) {
            _this.filter.date_from = data.date_from;
            _this.filter.date_to = data.date_to;
            // this.search.userId = data.user_id;
            _this.length = 0;
            _this.getSecondaryProductWiseReport(_this.filter.date_to, _this.filter.date_from);
        });
    };
    LoyaltyReportStateWiseLoginAgeingComponent.prototype.getproductWiseSecondaryReportExcel = function () {
        var _this = this;
        this.loader = true;
        this.service.post_rqst({ 'filter': this.filter }, "LoyaltyReport/excel_state_wise_login_ageing").subscribe(function (result) {
            if (result['msg'] == true) {
                _this.loader = false;
                window.open(_this.service.downloadUrl + result['filename']);
                _this.getSecondaryProductWiseReport('', _this.length);
            }
        });
    };
    LoyaltyReportStateWiseLoginAgeingComponent.prototype.openProductWiseSecondarySubCategoryReport = function (drId, category, startDate, endDate, salesUserId) {
        var dialogRef = this.dialog.open(src_app_reports_prouct_wise_secondary_report_product_wise_secondary_report_modal_product_wise_secondary_report_modal_component__WEBPACK_IMPORTED_MODULE_8__["ProductWiseSecondaryReportModalComponent"], {
            width: '800px',
            panelClass: 'cs-modal',
            data: {
                'from': 'product-wise-sub-category',
                drId: drId,
                category: category,
                startDate: startDate,
                endDate: endDate,
                salesUserId: salesUserId
            }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result != false) {
            }
        });
    };
    LoyaltyReportStateWiseLoginAgeingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-loyalty-report-state-wise-login-ageing',
            template: __webpack_require__(/*! ./loyalty-report-state-wise-login-ageing.component.html */ "./src/app/loyalty-report/loyalty-report-state-wise-login-ageing/loyalty-report-state-wise-login-ageing.component.html"),
            styles: [__webpack_require__(/*! ./loyalty-report-state-wise-login-ageing.component.scss */ "./src/app/loyalty-report/loyalty-report-state-wise-login-ageing/loyalty-report-state-wise-login-ageing.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatBottomSheet"], src_services_DatabaseService__WEBPACK_IMPORTED_MODULE_6__["DatabaseService"], ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_3__["ToastrManager"], src_app_localstorage_service__WEBPACK_IMPORTED_MODULE_5__["sessionStorage"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]])
    ], LoyaltyReportStateWiseLoginAgeingComponent);
    return LoyaltyReportStateWiseLoginAgeingComponent;
}());



/***/ })

}]);