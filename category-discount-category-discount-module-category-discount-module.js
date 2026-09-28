(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["category-discount-category-discount-module-category-discount-module"],{

/***/ "./src/app/category-discount/category-discount-module/category-discount.module.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/category-discount/category-discount-module/category-discount.module.ts ***!
  \****************************************************************************************/
/*! exports provided: CategoryDiscountModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryDiscountModule", function() { return CategoryDiscountModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var ngx_mat_select_search__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-mat-select-search */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/ngx-mat-select-search/fesm5/ngx-mat-select-search.js");
/* harmony import */ var src_app_auth_component_guard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/auth-component.guard */ "./src/app/auth-component.guard.ts");
/* harmony import */ var src_app_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/material */ "./src/app/material.ts");
/* harmony import */ var src_app_app_utility_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/app-utility.module */ "./src/app/app-utility.module.ts");
/* harmony import */ var _category_discount_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../category-discount.component */ "./src/app/category-discount/category-discount.component.ts");











var routes = [
    {
        path: '',
        children: [
            {
                path: '',
                component: _category_discount_component__WEBPACK_IMPORTED_MODULE_10__["CategoryDiscountComponent"],
                canActivate: [src_app_auth_component_guard__WEBPACK_IMPORTED_MODULE_7__["AuthComponentGuard"]],
                data: { expectedRole: ['1'] }
            }
        ]
    }
];
var CategoryDiscountModule = /** @class */ (function () {
    function CategoryDiscountModule() {
    }
    CategoryDiscountModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_category_discount_component__WEBPACK_IMPORTED_MODULE_10__["CategoryDiscountComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(routes),
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                src_app_material__WEBPACK_IMPORTED_MODULE_8__["MaterialModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialogModule"],
                ngx_mat_select_search__WEBPACK_IMPORTED_MODULE_6__["NgxMatSelectSearchModule"],
                src_app_app_utility_module__WEBPACK_IMPORTED_MODULE_9__["AppUtilityModule"]
            ]
        })
    ], CategoryDiscountModule);
    return CategoryDiscountModule;
}());



/***/ }),

/***/ "./src/app/category-discount/category-discount.component.html":
/*!********************************************************************!*\
  !*** ./src/app/category-discount/category-discount.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-container\">\r\n\r\n  <div *ngIf=\"uploadingCSV\">\r\n    <mat-spinner class=\"loader\">\r\n      <div>\r\n        <p>{{ uploadProgress.total > 0 ? 'Exporting CSV...' : 'Uploading CSV...' }}</p>\r\n      </div>\r\n    </mat-spinner>\r\n  </div>\r\n\r\n  <!-- Tools Bar -->\r\n  <div class=\"tools-container\">\r\n    <h2>Category Discount</h2>\r\n    <div class=\"left-auto df ac flex-gap-10\">\r\n\r\n      <button mat-icon-button matTooltip=\"Refresh\" (click)=\"refresh()\" [disabled]=\"!dr_id\">\r\n        <i class=\"material-icons\">refresh</i>\r\n      </button>\r\n\r\n      <span *ngIf=\"dirtyCount > 0\" style=\"color:#7777eb; font-weight:600; font-size:13px;\">\r\n        {{dirtyCount}} row(s) modified\r\n      </span>\r\n\r\n      <span *ngIf=\"savingAll\" style=\"color:#888; font-size:13px;\">\r\n        Saving {{saveProgress.current}} / {{saveProgress.total}}...\r\n      </span>\r\n\r\n      <span *ngIf=\"uploadingCSV\" style=\"color:#4caf50; font-weight:600; font-size:13px;\">\r\n        Uploading CSV {{uploadProgress.current}} / {{uploadProgress.total}}...\r\n      </span>\r\n\r\n      <div class=\"pagination\" *ngIf=\"segment.length > 0\">\r\n        <div class=\"pagination-content\">Pages <span>{{pagenumber}}</span> of <span>{{total_page}}</span></div>\r\n        <div class=\"page-nav\">\r\n          <button mat-icon-button matTooltip=\"Previous\" (click)=\"previous()\" [disabled]=\"start == 0 || total_page == 0\">\r\n            <i class=\"material-icons\">navigate_before</i>\r\n          </button>\r\n          <button mat-icon-button matTooltip=\"Next\" (click)=\"nextPage()\" [disabled]=\"pagenumber == total_page || total_page == 0\">\r\n            <i class=\"material-icons\">navigate_next</i>\r\n          </button>\r\n        </div>\r\n      </div>\r\n\r\n      <button mat-raised-button color=\"accent\"\r\n        [disabled]=\"!dr_id || dirtyCount == 0 || savingAll || uploadingCSV\"\r\n        [ngClass]=\"{'loading': savingAll}\"\r\n        (click)=\"saveAll()\">\r\n        <i class=\"material-icons\" style=\"vertical-align:middle; margin-right:4px;\">save</i>\r\n        {{savingAll ? 'Saving...' : 'Save All (' + dirtyCount + ')'}}\r\n      </button>\r\n\r\n      <button mat-raised-button color=\"primary\"\r\n        [disabled]=\"partyList.length == 0 || uploadingCSV || savingAll\"\r\n        (click)=\"exportCSV()\">\r\n        <i class=\"material-icons\" style=\"vertical-align:middle; margin-right:4px;\">download</i>\r\n        Export CSV\r\n      </button>\r\n\r\n      <button mat-raised-button color=\"accent\" style=\"background-color: #4caf50;\"\r\n        [disabled]=\"uploadingCSV || savingAll\"\r\n        [ngClass]=\"{'loading': uploadingCSV}\"\r\n        (click)=\"csvInput.click()\">\r\n        <i class=\"material-icons\" style=\"vertical-align:middle; margin-right:4px;\">cloud_upload</i>\r\n        {{ uploadingCSV ? 'Uploading...' : 'Upload CSV' }}\r\n      </button>\r\n      <input type=\"file\" #csvInput accept=\".csv\" style=\"display:none;\" (change)=\"onCsvFileSelected($event)\">\r\n\r\n    </div>\r\n  </div>\r\n\r\n  <!-- Party Selector -->\r\n  <div class=\"tools-container\">\r\n    <div class=\"df ac flex-gap-10\">\r\n      <label style=\"font-weight:600; white-space:nowrap; font-size:13px;\">Select Party :</label>\r\n      <mat-form-field appearance=\"outline\" style=\"width:320px; margin-bottom:-20px;\">\r\n        <mat-label>Search name / account code</mat-label>\r\n        <mat-select [(ngModel)]=\"selectedPartyId\" (selectionChange)=\"onPartySelect()\" name=\"selectedParty\">\r\n          <mat-option>\r\n            <ngx-mat-select-search [formControl]=\"partySearchCtrl\" placeholderLabel=\"Search...\"\r\n              noEntriesFoundLabel=\"No party found\">\r\n            </ngx-mat-select-search>\r\n          </mat-option>\r\n          <mat-option *ngIf=\"partyLoader\" disabled>Loading...</mat-option>\r\n          <mat-option *ngFor=\"let p of filteredPartyList\" [value]=\"p.id\">\r\n            {{p.company_name | titlecase}}&nbsp;\r\n            <span style=\"color:#888; font-size:11px;\">({{p.dr_code}})</span>\r\n          </mat-option>\r\n        </mat-select>\r\n      </mat-form-field>\r\n\r\n      <div *ngIf=\"selectedParty?.id\" class=\"df ac flex-gap-10\">\r\n        <span style=\"background:#7777eb;color:#fff;padding:3px 12px;border-radius:20px;font-size:12px;\">\r\n          {{selectedParty.company_name | titlecase}}\r\n        </span>\r\n        <span style=\"color:#888;font-size:12px;\">{{selectedParty.city}} | {{selectedParty.state}}</span>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <!-- Tabs + Table -->\r\n  <ng-container *ngIf=\"dr_id\">\r\n\r\n    <div class=\"tools-container\" style=\"padding-top:4px;padding-bottom:4px;\">\r\n      <div class=\"mat-tabbar\">\r\n        <button mat-button [ngClass]=\"segmentStatus == 'S' ? 'active' : ''\" (click)=\"switchTab('S')\">\r\n          <i class=\"material-icons\">hub</i> S Category\r\n        </button>\r\n        <button mat-button [ngClass]=\"segmentStatus == 'SS' ? 'active' : ''\" (click)=\"switchTab('SS')\">\r\n          <i class=\"material-icons\">hub</i> SS Category\r\n        </button>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"container container-scroll pb100\">\r\n      <div class=\"cs-table horizontal-scroll\">\r\n        <div class=\"table-container\">\r\n          <div class=\"table-content\" style=\"overflow:visible; border-radius:0;\">\r\n            <table style=\"overflow:visible;\">\r\n\r\n              <!-- Sticky Header Row -->\r\n              <thead>\r\n                <tr>\r\n                  <th class=\"w50 text-center\"\r\n                    style=\"position:sticky;top:-10px;left:0;z-index:5;background:#f5f5f5;\">S No.</th>\r\n                  <th class=\"w200\"\r\n                    style=\"position:sticky;top:-10px;left:50px;z-index:5;background:#f5f5f5;\">Brand</th>\r\n                  <th class=\"w100 text-center\" style=\"position:sticky;top:-10px;z-index:3;background:#f5f5f5;\">Discount 1</th>\r\n                  <th class=\"w100 text-center\" style=\"position:sticky;top:-10px;z-index:3;background:#f5f5f5;\">Discount 2</th>\r\n                  <th class=\"w100 text-center\" style=\"position:sticky;top:-10px;z-index:3;background:#f5f5f5;\">Discount 3</th>\r\n                  <th class=\"w100 text-center\" style=\"position:sticky;top:-10px;z-index:3;background:#f5f5f5;\">Discount 4</th>\r\n                  <th class=\"w100 text-center\" style=\"position:sticky;top:-10px;z-index:3;background:#f5f5f5;\">Discount 5</th>\r\n                  <th class=\"w100 text-center\" style=\"position:sticky;top:-10px;z-index:3;background:#f5f5f5;\">Discount 6</th>\r\n                  <th class=\"w100 text-center\" style=\"position:sticky;top:-10px;z-index:3;background:#f5f5f5;\">Discount 7</th>\r\n                  <th class=\"w100 text-center\" style=\"position:sticky;top:-10px;z-index:3;background:#f5f5f5;\">Discount 8</th>\r\n                  <th class=\"w100 text-center\" style=\"position:sticky;top:-10px;z-index:3;background:#f5f5f5;\">Discount 9</th>\r\n                  <th class=\"w100 text-center\" style=\"position:sticky;top:-10px;z-index:3;background:#f5f5f5;\">Discount 10</th>\r\n                  <th class=\"w100 text-center\" style=\"position:sticky;top:-10px;z-index:3;background:#f5f5f5;\">Discount 11</th>\r\n                  <th class=\"w100 text-center\" style=\"position:sticky;top:-10px;z-index:3;background:#f5f5f5;\">Discount 12</th>\r\n                  <th class=\"w100 text-center\" style=\"position:sticky;top:-10px;z-index:3;background:#f5f5f5;\">Discount 13</th>\r\n                  <th class=\"w100 text-center\" style=\"position:sticky;top:-10px;z-index:3;background:#f5f5f5;\">Discount 14</th>\r\n                  <th class=\"w100 text-center\" style=\"position:sticky;top:-10px;z-index:3;background:#f5f5f5;\">Discount 15</th>\r\n                  <th class=\"w100 text-center\" style=\"position:sticky;top:-10px;z-index:3;background:#f5f5f5;\">Discount 16</th>\r\n                  <th class=\"w50 text-center\" style=\"position:sticky;top:-10px;z-index:3;background:#f5f5f5;\">St.</th>\r\n                </tr>\r\n              </thead>\r\n\r\n              <!-- Body -->\r\n              <tbody *ngIf=\"!segmentLoader\">\r\n                <tr *ngFor=\"let row of segment; let i = index\"\r\n                  [style.background]=\"row.isDirty ? '#fffbe6' : ''\">\r\n\r\n                  <td class=\"w50 text-center\"\r\n                    style=\"position:sticky;left:0;z-index:2;\"\r\n                    [style.background]=\"row.isDirty ? '#fffbe6' : '#fff'\">\r\n                    {{i + 1 + sr_no}}\r\n                  </td>\r\n\r\n                  <td class=\"w200\"\r\n                    style=\"position:sticky;left:50px;z-index:2;\"\r\n                    [style.background]=\"row.isDirty ? '#fffbe6' : '#fff'\"\r\n                    [style.border-left]=\"row.isDirty ? '3px solid #faad14' : '3px solid transparent'\">\r\n                    <strong>{{row.brand_name}}</strong>\r\n                  </td>\r\n\r\n                  <td class=\"w100 text-center\" *ngFor=\"let n of [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]\">\r\n                    <div class=\"th-search-acmt\">\r\n                      <mat-form-field>\r\n                        <input type=\"number\" matInput\r\n                          [name]=\"'d' + n + '_' + i\"\r\n                          [(ngModel)]=\"row['discount_' + n]\"\r\n                          (input)=\"markDirty(row)\"\r\n                          min=\"0\" max=\"100\">\r\n                      </mat-form-field>\r\n                    </div>\r\n                  </td>\r\n\r\n                  <td class=\"w50 text-center\">\r\n                    <span *ngIf=\"row.isDirty\"                        title=\"Unsaved\" style=\"color:#faad14;font-size:16px;\">●</span>\r\n                    <span *ngIf=\"!row.isDirty && row.discountId > 0\"  title=\"Saved\"   style=\"color:#52c41a;font-size:16px;\">●</span>\r\n                    <span *ngIf=\"!row.isDirty && row.discountId == 0\" title=\"Not set\" style=\"color:#d9d9d9;font-size:16px;\">●</span>\r\n                  </td>\r\n\r\n                </tr>\r\n              </tbody>\r\n\r\n              <!-- Skeleton -->\r\n              <tbody *ngIf=\"segmentLoader\">\r\n                <tr class=\"sk-loading\" *ngFor=\"let x of [].constructor(10)\">\r\n                  <td class=\"w50\"  style=\"position:sticky;left:0;z-index:2;background:#fff;\"><div class=\"skeleton-loader\">&nbsp;</div></td>\r\n                  <td class=\"w200\" style=\"position:sticky;left:50px;z-index:2;background:#fff;\"><div class=\"skeleton-loader\">&nbsp;</div></td>\r\n                  <td class=\"w100\" *ngFor=\"let n of [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16]\"><div class=\"skeleton-loader\">&nbsp;</div></td>\r\n                  <td class=\"w50\"><div class=\"skeleton-loader\">&nbsp;</div></td>\r\n                </tr>\r\n              </tbody>\r\n\r\n            </table>\r\n          </div>\r\n        </div>\r\n\r\n        <ng-container *ngIf=\"segment.length == 0 && !segmentLoader\">\r\n          <app-not-result-found></app-not-result-found>\r\n        </ng-container>\r\n\r\n      </div>\r\n    </div>\r\n\r\n  </ng-container>\r\n\r\n  <!-- Empty state -->\r\n  <div *ngIf=\"!dr_id\" style=\"text-align:center;padding:60px 20px;color:#aaa;\">\r\n    <i class=\"material-icons\" style=\"font-size:48px;display:block;margin-bottom:8px;\">people_alt</i>\r\n    <p style=\"font-size:14px;\">Select a party above to view and edit category discounts</p>\r\n  </div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/category-discount/category-discount.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/category-discount/category-discount.component.ts ***!
  \******************************************************************/
/*! exports provided: CategoryDiscountComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CategoryDiscountComponent", function() { return CategoryDiscountComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_services_DatabaseService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/_services/DatabaseService */ "./src/_services/DatabaseService.ts");
/* harmony import */ var ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng6-toastr-notifications */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/ng6-toastr-notifications/fesm5/ng6-toastr-notifications.js");
/* harmony import */ var src_app_localstorage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/localstorage.service */ "./src/app/localstorage.service.ts");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! file-saver */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/file-saver/dist/FileSaver.min.js");
/* harmony import */ var file_saver__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(file_saver__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! sweetalert2 */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/sweetalert2/dist/sweetalert2.all.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_7__);








var CategoryDiscountComponent = /** @class */ (function () {
    function CategoryDiscountComponent(serve, toast, session) {
        this.serve = serve;
        this.toast = toast;
        this.session = session;
        // Party
        this.partyList = [];
        this.filteredPartyList = [];
        this.partyLoader = false;
        this.selectedPartyId = '';
        this.selectedParty = {};
        this.partySearchCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormControl"]();
        // Segment table
        this.segment = [];
        this.segmentLoader = false;
        this.segmentStatus = 'S';
        // Pagination
        this.start = 0;
        this.page_limit = 50;
        this.pagenumber = 1;
        this.total_page = 0;
        this.pageCount = 0;
        this.sr_no = 0;
        // Save all
        this.savingAll = false;
        this.saveProgress = { current: 0, total: 0 };
        this.uploadingCSV = false;
        this.uploadProgress = { current: 0, total: 0 };
    }
    CategoryDiscountComponent.prototype.ngOnInit = function () {
        var _this = this;
        var userData = JSON.parse(localStorage.getItem('st_user'));
        this.userId = userData['data']['id'];
        this.userName = userData['data']['name'];
        this.getPartyList();
        this.partySearchCtrl.valueChanges.subscribe(function (search) {
            var s = (search || '').toLowerCase();
            _this.filteredPartyList = _this.partyList.filter(function (p) {
                return (p.company_name || '').toLowerCase().includes(s) ||
                    (p.dr_code || '').toLowerCase().includes(s) ||
                    (p.mobile || '').toLowerCase().includes(s);
            });
        });
    };
    CategoryDiscountComponent.prototype.getPartyList = function () {
        var _this = this;
        this.partyLoader = true;
        this.serve.post_rqst({}, 'Influencer/get_dr_discount_list')
            .subscribe(function (result) {
            _this.partyLoader = false;
            if (result['statusCode'] == 200) {
                _this.partyList = result['dealer'] || [];
                _this.filteredPartyList = _this.partyList.slice();
            }
        });
    };
    CategoryDiscountComponent.prototype.onPartySelect = function () {
        var _this = this;
        var party = this.partyList.find(function (p) { return p.id == _this.selectedPartyId; });
        if (!party)
            return;
        this.selectedParty = party;
        this.dr_id = party.id;
        this.start = 0;
        this.pagenumber = 1;
        this.segmentStatus = 'S';
        this.loadSegment();
    };
    CategoryDiscountComponent.prototype.switchTab = function (tab) {
        this.segmentStatus = tab;
        this.start = 0;
        this.pagenumber = 1;
        this.loadSegment();
    };
    CategoryDiscountComponent.prototype.loadSegment = function () {
        this.segmentStatus == 'S' ? this.getSegment() : this.getSegmentSS();
    };
    CategoryDiscountComponent.prototype.getSegment = function () {
        var _this = this;
        if (!this.dr_id)
            return;
        this.segmentLoader = true;
        this.serve.post_rqst({ dr_id: this.dr_id, start: this.start, pagelimit: this.page_limit, filter: {} }, 'CustomerNetwork/drSegmentDiscountList').subscribe(function (result) {
            _this.segmentLoader = false;
            if (result['statusCode'] == 200) {
                _this.segment = (result['all_segment_with_discount_list'] || []).map(function (row) { return (tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, row, { isDirty: false })); });
                _this.pageCount = result['count'];
                _this.total_page = Math.ceil(_this.pageCount / _this.page_limit);
                _this.pagenumber = Math.ceil(_this.start / _this.page_limit) + 1;
                _this.sr_no = (_this.pagenumber - 1) * _this.page_limit;
            }
            else {
                _this.toast.errorToastr(result['statusMsg']);
            }
        });
    };
    CategoryDiscountComponent.prototype.getSegmentSS = function () {
        var _this = this;
        if (!this.dr_id)
            return;
        this.segmentLoader = true;
        this.serve.post_rqst({ dr_id: this.dr_id, start: this.start, pagelimit: this.page_limit, filter: {} }, 'CustomerNetwork/drSegmentDiscountListSS').subscribe(function (result) {
            _this.segmentLoader = false;
            if (result['statusCode'] == 200) {
                _this.segment = (result['all_segment_with_discount_list'] || []).map(function (row) { return (tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, row, { isDirty: false })); });
                _this.pageCount = result['count'];
                _this.total_page = Math.ceil(_this.pageCount / _this.page_limit);
                _this.pagenumber = Math.ceil(_this.start / _this.page_limit) + 1;
                _this.sr_no = (_this.pagenumber - 1) * _this.page_limit;
            }
            else {
                _this.toast.errorToastr(result['statusMsg']);
            }
        });
    };
    CategoryDiscountComponent.prototype.markDirty = function (row) {
        row.isDirty = true;
    };
    Object.defineProperty(CategoryDiscountComponent.prototype, "dirtyCount", {
        get: function () {
            return this.segment.filter(function (r) { return r.isDirty; }).length;
        },
        enumerable: true,
        configurable: true
    });
    CategoryDiscountComponent.prototype.nextPage = function () {
        if (this.pagenumber >= this.total_page)
            return;
        this.start += this.page_limit;
        this.loadSegment();
    };
    CategoryDiscountComponent.prototype.previous = function () {
        if (this.start <= 0)
            return;
        this.start -= this.page_limit;
        this.loadSegment();
    };
    CategoryDiscountComponent.prototype.refresh = function () {
        if (!this.dr_id)
            return;
        this.start = 0;
        this.pagenumber = 1;
        this.loadSegment();
    };
    CategoryDiscountComponent.prototype.saveAll = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var dirtyRows, successCount, failCount, endpoint, _loop_1, this_1, _i, dirtyRows_1, row;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        dirtyRows = this.segment.filter(function (r) { return r.isDirty; });
                        if (dirtyRows.length === 0) {
                            this.toast.warningToastr('No changes to save');
                            return [2 /*return*/];
                        }
                        this.savingAll = true;
                        this.saveProgress = { current: 0, total: dirtyRows.length };
                        successCount = 0;
                        failCount = 0;
                        endpoint = this.segmentStatus == 'S'
                            ? 'CustomerNetwork/updateDrSegmentDiscountList'
                            : 'CustomerNetwork/updateDrSegmentDiscountListSS';
                        _loop_1 = function (row) {
                            var totalDiscount, result, e_1;
                            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        totalDiscount = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]
                                            .reduce(function (sum, n) { return sum + parseFloat(row['discount_' + n] || 0); }, 0);
                                        if (totalDiscount <= 0) {
                                            this_1.toast.warningToastr(row.brand_name + ": Total discount must be greater than 0");
                                            failCount++;
                                            this_1.saveProgress.current++;
                                            return [2 /*return*/, "continue"];
                                        }
                                        _a.label = 1;
                                    case 1:
                                        _a.trys.push([1, 3, , 4]);
                                        return [4 /*yield*/, this_1.serve.post_rqst({
                                                discount_id: row.discountId,
                                                dr_id: this_1.dr_id,
                                                discount: row,
                                                last_updated_by: this_1.userId,
                                                last_updated_by_name: this_1.userName
                                            }, endpoint).toPromise()];
                                    case 2:
                                        result = _a.sent();
                                        if (result['statusCode'] == 200) {
                                            row.isDirty = false;
                                            successCount++;
                                        }
                                        else {
                                            failCount++;
                                        }
                                        return [3 /*break*/, 4];
                                    case 3:
                                        e_1 = _a.sent();
                                        failCount++;
                                        return [3 /*break*/, 4];
                                    case 4:
                                        this_1.saveProgress.current++;
                                        return [2 /*return*/];
                                }
                            });
                        };
                        this_1 = this;
                        _i = 0, dirtyRows_1 = dirtyRows;
                        _a.label = 1;
                    case 1:
                        if (!(_i < dirtyRows_1.length)) return [3 /*break*/, 4];
                        row = dirtyRows_1[_i];
                        return [5 /*yield**/, _loop_1(row)];
                    case 2:
                        _a.sent();
                        _a.label = 3;
                    case 3:
                        _i++;
                        return [3 /*break*/, 1];
                    case 4:
                        this.savingAll = false;
                        if (successCount > 0) {
                            this.toast.successToastr(successCount + " brand(s) updated successfully");
                        }
                        if (failCount > 0) {
                            this.toast.errorToastr(failCount + " brand(s) failed");
                        }
                        this.loadSegment();
                        return [2 /*return*/];
                }
            });
        });
    };
    CategoryDiscountComponent.prototype.exportCSV = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var parties, csvRows, headers, batchSize, fetchPartyDiscounts, i, batch, csvString, blob, filename, err_1;
            var _this = this;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        parties = this.partyList;
                        if (!parties || parties.length === 0) {
                            this.toast.warningToastr('No parties found to export');
                            return [2 /*return*/];
                        }
                        this.segmentLoader = true;
                        this.uploadingCSV = true;
                        this.uploadProgress = { current: 0, total: parties.length };
                        csvRows = [];
                        headers = [
                            'Party Code',
                            'Party Name',
                            'Brand Name',
                            'Category Type',
                            'Discount 1', 'Discount 2', 'Discount 3', 'Discount 4',
                            'Discount 5', 'Discount 6', 'Discount 7', 'Discount 8',
                            'Discount 9', 'Discount 10', 'Discount 11', 'Discount 12',
                            'Discount 13', 'Discount 14', 'Discount 15', 'Discount 16'
                        ];
                        csvRows.push(headers.join(','));
                        batchSize = 10;
                        fetchPartyDiscounts = function (party) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                            var payload, sPromise, ssPromise, _a, sRes, ssRes, partyCode_1, partyName_1, appendRows, e_2;
                            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_b) {
                                switch (_b.label) {
                                    case 0:
                                        payload = { dr_id: party.id, start: 0, pagelimit: 1000, filter: {} };
                                        _b.label = 1;
                                    case 1:
                                        _b.trys.push([1, 3, , 4]);
                                        sPromise = this.serve.post_rqst(payload, 'CustomerNetwork/drSegmentDiscountList').toPromise();
                                        ssPromise = this.serve.post_rqst(payload, 'CustomerNetwork/drSegmentDiscountListSS').toPromise();
                                        return [4 /*yield*/, Promise.all([sPromise, ssPromise])];
                                    case 2:
                                        _a = _b.sent(), sRes = _a[0], ssRes = _a[1];
                                        partyCode_1 = party.dr_code || '';
                                        partyName_1 = party.company_name || '';
                                        appendRows = function (list, type) {
                                            if (!list)
                                                return;
                                            list.forEach(function (row) {
                                                var rowData = [
                                                    "\"" + partyCode_1.replace(/"/g, '""') + "\"",
                                                    "\"" + partyName_1.replace(/"/g, '""') + "\"",
                                                    "\"" + (row.brand_name || '').replace(/"/g, '""') + "\"",
                                                    "\"" + type + "\""
                                                ];
                                                for (var n = 1; n <= 16; n++) {
                                                    rowData.push(row['discount_' + n] !== undefined ? row['discount_' + n] : '0');
                                                }
                                                csvRows.push(rowData.join(','));
                                            });
                                        };
                                        if (sRes && sRes['statusCode'] == 200) {
                                            appendRows(sRes['all_segment_with_discount_list'], 'S');
                                        }
                                        if (ssRes && ssRes['statusCode'] == 200) {
                                            appendRows(ssRes['all_segment_with_discount_list'], 'SS');
                                        }
                                        return [3 /*break*/, 4];
                                    case 3:
                                        e_2 = _b.sent();
                                        console.error('Failed to fetch discounts for party', party.id, e_2);
                                        return [3 /*break*/, 4];
                                    case 4: return [2 /*return*/];
                                }
                            });
                        }); };
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 6, 7, 8]);
                        i = 0;
                        _a.label = 2;
                    case 2:
                        if (!(i < parties.length)) return [3 /*break*/, 5];
                        batch = parties.slice(i, i + batchSize);
                        return [4 /*yield*/, Promise.all(batch.map(function (party) { return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](_this, void 0, void 0, function () {
                                return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                                    switch (_a.label) {
                                        case 0: return [4 /*yield*/, fetchPartyDiscounts(party)];
                                        case 1:
                                            _a.sent();
                                            this.uploadProgress.current++;
                                            return [2 /*return*/];
                                    }
                                });
                            }); }))];
                    case 3:
                        _a.sent();
                        _a.label = 4;
                    case 4:
                        i += batchSize;
                        return [3 /*break*/, 2];
                    case 5:
                        csvString = csvRows.join('\n');
                        blob = new Blob([csvString], { type: 'text/csv;charset=utf-8;' });
                        filename = "All_Parties_Category_Discounts.csv";
                        file_saver__WEBPACK_IMPORTED_MODULE_6__["saveAs"](blob, filename);
                        this.toast.successToastr('All party discounts exported successfully');
                        return [3 /*break*/, 8];
                    case 6:
                        err_1 = _a.sent();
                        this.toast.errorToastr('Failed to export CSV');
                        return [3 /*break*/, 8];
                    case 7:
                        this.uploadingCSV = false;
                        this.segmentLoader = false;
                        return [7 /*endfinally*/];
                    case 8: return [2 /*return*/];
                }
            });
        });
    };
    CategoryDiscountComponent.prototype.parseCSV = function (text) {
        var lines = [];
        var row = [''];
        var inQuotes = false;
        for (var i = 0; i < text.length; i++) {
            var char = text[i];
            var nextChar = text[i + 1];
            if (char === '"') {
                if (inQuotes && nextChar === '"') {
                    row[row.length - 1] += '"';
                    i++;
                }
                else {
                    inQuotes = !inQuotes;
                }
            }
            else if (char === ',' && !inQuotes) {
                row.push('');
            }
            else if ((char === '\r' || char === '\n') && !inQuotes) {
                if (char === '\r' && nextChar === '\n') {
                    i++;
                }
                lines.push(row);
                row = [''];
            }
            else {
                row[row.length - 1] += char;
            }
        }
        if (row.length > 1 || row[0] !== '') {
            lines.push(row);
        }
        return lines;
    };
    CategoryDiscountComponent.prototype.onCsvFileSelected = function (event) {
        var _this = this;
        var file = event.target.files[0];
        if (!file)
            return;
        // Reset input
        event.target.value = '';
        this.uploadingCSV = true;
        this.uploadProgress = { current: 0, total: 0 };
        var formData = new FormData();
        formData.append('category', file, file.name);
        formData.append('created_by_id', this.userId);
        formData.append('created_by_name', this.userName);
        this.serve.FileData(formData, 'CustomerNetwork/importDrSegmentDiscountList')
            .subscribe(function (result) {
            _this.uploadingCSV = false;
            var responseData = result['response'];
            if (responseData && (responseData.success !== undefined || responseData.failed !== undefined)) {
                var successCount = responseData.success || 0;
                var failedCount = responseData.failed || 0;
                var totalCount = responseData.total || 0;
                if (failedCount > 0) {
                    // Get unique reasons
                    var uniqueReasons = [];
                    if (Array.isArray(result['statusMsg'])) {
                        var cleanReasons = result['statusMsg'].map(function (msg) {
                            return msg.replace(/^Row \d+:\s*/i, '').trim();
                        }).filter(Boolean);
                        uniqueReasons = Array.from(new Set(cleanReasons));
                    }
                    else if (result['statusMsg']) {
                        uniqueReasons = [result['statusMsg']];
                    }
                    var htmlMsg_1 = "\n              <div style=\"text-align: left; font-size: 14px;\">\n                <p><strong>Success:</strong> " + successCount + " row(s)</p>\n                <p><strong>Failed:</strong> " + failedCount + " row(s)</p>\n                <p><strong>Total:</strong> " + totalCount + " row(s)</p>\n                <hr style=\"margin: 10px 0; border: 0; border-top: 1px solid #eee;\">\n                <p style=\"color: #d9534f; font-weight: bold; margin-bottom: 6px;\">Unique Reasons for Failure:</p>\n                <ul style=\"padding-left: 20px; margin: 0; color: #555; max-height: 180px; overflow-y: auto;\">\n            ";
                    uniqueReasons.forEach(function (reason) {
                        htmlMsg_1 += "<li style=\"margin-bottom: 4px;\">" + reason + "</li>";
                    });
                    htmlMsg_1 += "\n                </ul>\n              </div>\n            ";
                    sweetalert2__WEBPACK_IMPORTED_MODULE_7___default.a.fire({
                        type: successCount > 0 ? 'warning' : 'error',
                        title: successCount > 0 ? 'Import Completed with Errors' : 'Import Failed',
                        html: htmlMsg_1,
                        confirmButtonText: 'OK'
                    });
                }
                else {
                    sweetalert2__WEBPACK_IMPORTED_MODULE_7___default.a.fire({
                        type: 'success',
                        title: 'Import Successful',
                        text: "Successfully imported " + successCount + " row(s).",
                        timer: 2000
                    });
                }
            }
            else {
                if (result['statusCode'] == 200) {
                    _this.toast.successToastr(result['statusMsg'] || 'CSV uploaded successfully');
                }
                else {
                    _this.toast.errorToastr(result['statusMsg'] || 'Upload failed');
                }
            }
            _this.loadSegment();
        }, function (err) {
            _this.uploadingCSV = false;
            _this.toast.errorToastr('Something went wrong during file upload');
        });
    };
    CategoryDiscountComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-category-discount',
            template: __webpack_require__(/*! ./category-discount.component.html */ "./src/app/category-discount/category-discount.component.html"),
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_services_DatabaseService__WEBPACK_IMPORTED_MODULE_3__["DatabaseService"],
            ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_4__["ToastrManager"],
            src_app_localstorage_service__WEBPACK_IMPORTED_MODULE_5__["sessionStorage"]])
    ], CategoryDiscountComponent);
    return CategoryDiscountComponent;
}());



/***/ })

}]);