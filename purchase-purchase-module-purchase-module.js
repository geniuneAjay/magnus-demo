(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["purchase-purchase-module-purchase-module"],{

/***/ "./src/app/purchase/add-purchase/add-purchase.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/purchase/add-purchase/add-purchase.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-container\">\r\n\r\n  <!-- Header -->\r\n  <div class=\"tools-container\">\r\n    <a mat-icon-button matTooltip=\"Back\" (click)=\"back()\">\r\n      <i class=\"material-icons\">arrow_back</i>\r\n    </a>\r\n    <h2>Add Purchase</h2>\r\n  </div>\r\n\r\n  <div class=\"container pt10 pl10 pr10 pb50\">\r\n    <form #f=\"ngForm\" (ngSubmit)=\"f.valid && submit()\">\r\n\r\n      <!-- ─── Section 1: Employee + Influencer + Dealer ─── -->\r\n      <div class=\"card mb15\">\r\n        <div class=\"card-head\"><h2>Select User & Supplier</h2></div>\r\n        <div class=\"card-body cs-form\">\r\n          <div class=\"row\">\r\n\r\n            <!-- Select Employee -->\r\n            <div class=\"col s12 m4 l4\">\r\n              <mat-form-field appearance=\"outline\" [ngClass]=\"{'has-error': f.submitted && employee_id.invalid}\">\r\n                <mat-label>Select Employee <span class=\"red-text\">*</span></mat-label>\r\n                <mat-select name=\"employee_id\" #employee_id=\"ngModel\" [(ngModel)]=\"data.employee_id\"\r\n                  (ngModelChange)=\"onUserSelect()\" (openedChange)=\"onEmployeePanelToggle($event)\" required>\r\n                  <mat-option>\r\n                    <ngx-mat-select-search noEntriesFoundLabel=\"No employee found\"\r\n                      placeholderLabel=\"Search name or mobile..\"\r\n                      (keyup)=\"filterUserList($event.target.value)\"></ngx-mat-select-search>\r\n                  </mat-option>\r\n                  <mat-option value=\"\">-- Select --</mat-option>\r\n                  <mat-option *ngFor=\"let u of filteredUserList\" [value]=\"u.id\">\r\n                    {{u.name}} ({{u.mobile_no}})\r\n                  </mat-option>\r\n                </mat-select>\r\n              </mat-form-field>\r\n              <div class=\"alert alert-danger\" *ngIf=\"f.submitted && employee_id.invalid\">\r\n                <p *ngIf=\"employee_id.errors?.required\">Employee is required</p>\r\n              </div>\r\n            </div>\r\n\r\n            <!-- Select PE/AMB -->\r\n            <div class=\"col s12 m4 l4\">\r\n              <mat-form-field appearance=\"outline\" [ngClass]=\"{'has-error': f.submitted && influencer_id.invalid}\">\r\n                <mat-label>Select PE / AMB <span class=\"red-text\">*</span></mat-label>\r\n                <mat-select name=\"influencer_id\" #influencer_id=\"ngModel\" [(ngModel)]=\"data.influencer_id\"\r\n                  (ngModelChange)=\"onInfluencerSelect()\" [disabled]=\"!data.employee_id\" required>\r\n                  <mat-option>\r\n                    <ngx-mat-select-search noEntriesFoundLabel=\"No PE / AMB found\"\r\n                      placeholderLabel=\"Search name or mobile..\"\r\n                      (keyup)=\"getInfluencerList($event.target.value)\"></ngx-mat-select-search>\r\n                  </mat-option>\r\n                  <mat-option value=\"\">-- Select --</mat-option>\r\n                  <mat-option *ngFor=\"let inf of influencerList\" [value]=\"inf.id\">\r\n                    {{inf.company_name || inf.name}} ({{inf.mobile}}) - {{inf.type == 8 ? 'Ply Expert' : (inf.type == 21 ? 'Fabricator' : 'Ambassador')}}\r\n                  </mat-option>\r\n                </mat-select>\r\n              </mat-form-field>\r\n              <div class=\"alert alert-danger\" *ngIf=\"f.submitted && influencer_id.invalid\">\r\n                <p *ngIf=\"influencer_id.errors?.required\">PE/AMB is required</p>\r\n              </div>\r\n            </div>\r\n\r\n            <!-- Select Supplier/Dealer -->\r\n            <div class=\"col s12 m4 l4\">\r\n              <mat-form-field appearance=\"outline\" [ngClass]=\"{'has-error': f.submitted && dealer_id.invalid}\">\r\n                <mat-label>Select Supplier <span class=\"red-text\">*</span></mat-label>\r\n                <mat-select name=\"dealer_id\" #dealer_id=\"ngModel\" [(ngModel)]=\"data.dealer_id\"\r\n                  (ngModelChange)=\"onDealerSelect()\" [disabled]=\"!data.employee_id\" required>\r\n                  <mat-option>\r\n                    <ngx-mat-select-search noEntriesFoundLabel=\"No supplier found\"\r\n                      placeholderLabel=\"Search name, mobile or code..\"\r\n                      (keyup)=\"getDealerList($event.target.value)\"></ngx-mat-select-search>\r\n                  </mat-option>\r\n                  <mat-option value=\"\">-- Select --</mat-option>\r\n                  <mat-option *ngFor=\"let d of dealerList\" [value]=\"d.id\">\r\n                    {{d.company_name}} ({{d.mobile}})\r\n                  </mat-option>\r\n                </mat-select>\r\n              </mat-form-field>\r\n              <div class=\"alert alert-danger\" *ngIf=\"f.submitted && dealer_id.invalid\">\r\n                <p *ngIf=\"dealer_id.errors?.required\">Supplier is required</p>\r\n              </div>\r\n            </div>\r\n\r\n            <!-- Invoice Date FIRST — points are date-versioned; must be picked\r\n                 before adding products (locked once a product is added). -->\r\n            <div class=\"col s12 m4 l4\">\r\n              <mat-form-field appearance=\"outline\" [ngClass]=\"{'has-error': f.submitted && invoice_date.invalid}\">\r\n                <mat-label>Invoice Date <span class=\"red-text\">*</span></mat-label>\r\n                <input matInput type=\"date\" name=\"invoice_date\" #invoice_date=\"ngModel\"\r\n                  [(ngModel)]=\"data.invoice_date\" [max]=\"today_date\" [disabled]=\"add_list.length>0\"\r\n                  (ngModelChange)=\"onInvoiceDateChange()\" required>\r\n              </mat-form-field>\r\n              <div class=\"alert alert-danger\" *ngIf=\"f.submitted && invoice_date.invalid\">\r\n                <p *ngIf=\"invoice_date.errors?.required\">Invoice Date is required</p>\r\n              </div>\r\n            </div>\r\n\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <!-- Hint: invoice date drives the point rate, so it gates product selection -->\r\n      <div class=\"card mb15\" *ngIf=\"data.dealer_id && !data.invoice_date\">\r\n        <div class=\"card-body\">\r\n          <p class=\"red-text\" style=\"margin:0;\">Please select <strong>Invoice Date</strong> first — product points depend on it.</p>\r\n        </div>\r\n      </div>\r\n\r\n      <!-- ─── Section 2: Product Selection ─── -->\r\n      <div class=\"card mb15\" *ngIf=\"data.dealer_id && data.invoice_date\">\r\n        <div class=\"card-head\"><h2>Add Products</h2></div>\r\n        <div class=\"card-body cs-form\">\r\n          <div class=\"row\">\r\n\r\n            <!-- Brand -->\r\n            <div class=\"col s12 m3 l3\">\r\n              <mat-form-field appearance=\"outline\">\r\n                <mat-label>Brand <span class=\"red-text\">*</span></mat-label>\r\n                <mat-select name=\"brand\" [(ngModel)]=\"cartData.brand\" (ngModelChange)=\"onBrandSelect()\">\r\n                  <mat-option value=\"\">-- Select --</mat-option>\r\n                  <mat-option *ngFor=\"let b of brandList\" [value]=\"b.brand\">{{b.brand}}</mat-option>\r\n                </mat-select>\r\n              </mat-form-field>\r\n            </div>\r\n\r\n            <!-- Thickness -->\r\n            <div class=\"col s12 m3 l3\">\r\n              <mat-form-field appearance=\"outline\">\r\n                <mat-label>Thickness <span class=\"red-text\">*</span></mat-label>\r\n                <mat-select name=\"thickness\" [(ngModel)]=\"cartData.thickness\"\r\n                  [disabled]=\"!cartData.brand\" (ngModelChange)=\"onThicknessSelect()\">\r\n                  <mat-option value=\"\">-- Select --</mat-option>\r\n                  <mat-option *ngFor=\"let t of thicknessList\" [value]=\"t.thickness\">{{t.thickness}}</mat-option>\r\n                </mat-select>\r\n              </mat-form-field>\r\n            </div>\r\n\r\n            <!-- Size -->\r\n            <div class=\"col s12 m3 l3\">\r\n              <mat-form-field appearance=\"outline\">\r\n                <mat-label>Size <span class=\"red-text\">*</span></mat-label>\r\n                <mat-select name=\"size\" [(ngModel)]=\"cartData.size\"\r\n                  [disabled]=\"!cartData.thickness\" (ngModelChange)=\"onSizeSelect()\">\r\n                  <mat-option value=\"\">-- Select --</mat-option>\r\n                  <mat-option *ngFor=\"let s of sizeList\" [value]=\"s.size\">{{s.size}}</mat-option>\r\n                </mat-select>\r\n              </mat-form-field>\r\n            </div>\r\n\r\n            <!-- Qty -->\r\n            <div class=\"col s12 m3 l3\" *ngIf=\"productData?.id\">\r\n              <mat-form-field appearance=\"outline\">\r\n                <mat-label>Qty <span class=\"red-text\">*</span></mat-label>\r\n                <input matInput type=\"number\" name=\"qty\" [(ngModel)]=\"cartData.qty\" min=\"1\"\r\n                  [max]=\"inventoryMaxQty\" (ngModelChange)=\"checkQty()\"\r\n                  onkeypress=\"return event.charCode>=48 && event.charCode<=57\">\r\n              </mat-form-field>\r\n              <p class=\"small-text text-right\">Max Qty: <strong>{{inventoryMaxQty}}</strong></p>\r\n            </div>\r\n\r\n          </div>\r\n\r\n          <!-- Product info row -->\r\n          <div class=\"row\" *ngIf=\"productData?.id\">\r\n            <div class=\"col s12\">\r\n              <div class=\"product-info-bar\">\r\n                <span><strong>{{productData.product_name}}</strong> ({{productData.product_code}})</span>\r\n                <span class=\"ml15\">Points/unit: <strong>{{cartData.influencer_point}}</strong></span>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <!-- Add to list button -->\r\n          <div class=\"row\" *ngIf=\"cartData.qty > 0 && productData?.id\">\r\n            <div class=\"col s12 m3 l3\">\r\n              <button type=\"button\" mat-raised-button color=\"primary\"\r\n                [disabled]=\"!addToListButton\" (click)=\"addToList()\">\r\n                <i class=\"material-icons\">add_shopping_cart</i> Add To List\r\n              </button>\r\n            </div>\r\n          </div>\r\n\r\n        </div>\r\n      </div>\r\n\r\n      <!-- ─── Section 3: Review List ─── -->\r\n      <div class=\"card mb15\" *ngIf=\"add_list.length > 0\">\r\n        <div class=\"card-head\"><h2>Review Your Products</h2></div>\r\n        <div class=\"card-body\">\r\n          <div class=\"cs-table horizontal-scroll\">\r\n            <table class=\"purchase-table\">\r\n              <thead>\r\n                <tr>\r\n                  <th class=\"col-sno\">S.No</th>\r\n                  <th class=\"col-product\">Product</th>\r\n                  <th class=\"col-code\">Code</th>\r\n                  <th class=\"col-qty text-center\">Qty</th>\r\n                  <th class=\"col-point text-center\">Points/unit</th>\r\n                  <th class=\"col-point text-center\">Total Points</th>\r\n                  <th class=\"col-action text-center\">Action</th>\r\n                </tr>\r\n              </thead>\r\n              <tbody>\r\n                <tr *ngFor=\"let row of add_list; let i = index\">\r\n                  <td class=\"col-sno\">{{i+1}}</td>\r\n                  <td class=\"col-product\">{{row.product_name}}</td>\r\n                  <td class=\"col-code\">{{row.product_code}}</td>\r\n                  <td class=\"col-qty text-center\">{{row.qty}}</td>\r\n                  <td class=\"col-point text-center\">{{row.influencer_point}}</td>\r\n                  <td class=\"col-point text-center\">{{row.qty * row.influencer_point}}</td>\r\n                  <td class=\"col-action text-center\">\r\n                    <button type=\"button\" mat-icon-button color=\"warn\" (click)=\"deleteItem(i)\">\r\n                      <i class=\"material-icons\">delete</i>\r\n                    </button>\r\n                  </td>\r\n                </tr>\r\n              </tbody>\r\n            </table>\r\n          </div>\r\n          <div class=\"totals-row mt10\">\r\n            <span>Total Sheets: <strong>{{total_qty}}</strong></span>\r\n            <span class=\"ml20\">Total Points You May Earn: <strong>{{earn_point | number:'1.0-2'}}</strong></span>\r\n            <span class=\"ml10 text-muted\" *ngIf=\"membershipPercentage > 0\">\r\n              (includes {{membershipPercentage}}% membership bonus)\r\n            </span>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <!-- ─── Section 4: Invoice Details ─── -->\r\n      <div class=\"card mb15\" *ngIf=\"add_list.length > 0\">\r\n        <div class=\"card-head\"><h2>Invoice & Customer Details</h2></div>\r\n        <div class=\"card-body cs-form\">\r\n          <div class=\"row\">\r\n\r\n            <div class=\"col s12 m3 l3\">\r\n              <mat-form-field appearance=\"outline\" [ngClass]=\"{'has-error': f.submitted && invoice_no.invalid}\">\r\n                <mat-label>Invoice No. <span class=\"red-text\">*</span></mat-label>\r\n                <input matInput name=\"invoice_no\" #invoice_no=\"ngModel\" [(ngModel)]=\"data.invoice_no\"\r\n                  maxlength=\"20\" required>\r\n              </mat-form-field>\r\n              <div class=\"alert alert-danger\" *ngIf=\"f.submitted && invoice_no.invalid\">\r\n                <p *ngIf=\"invoice_no.errors?.required\">Invoice No. is required</p>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"col s12 m3 l3\">\r\n              <mat-form-field appearance=\"outline\" [ngClass]=\"{'has-error': f.submitted && sale_type.invalid}\">\r\n                <mat-label>Sale Type <span class=\"red-text\">*</span></mat-label>\r\n                <mat-select name=\"sale_type\" #sale_type=\"ngModel\" [(ngModel)]=\"data.sale_type\" required>\r\n                  <mat-option value=\"\">-- Select --</mat-option>\r\n                  <mat-option value=\"Direct Sale\">Direct Sale</mat-option>\r\n                  <mat-option value=\"Secondary\">Secondary (punched)</mat-option>\r\n                </mat-select>\r\n              </mat-form-field>\r\n              <div class=\"alert alert-danger\" *ngIf=\"f.submitted && sale_type.invalid\">\r\n                <p *ngIf=\"sale_type.errors?.required\">Sale Type is required</p>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"col s12 m3 l3\">\r\n              <mat-form-field appearance=\"outline\" [ngClass]=\"{'has-error': f.submitted && customer_name.invalid}\">\r\n                <mat-label>Customer Name <span class=\"red-text\">*</span></mat-label>\r\n                <input matInput name=\"customer_name\" #customer_name=\"ngModel\" [(ngModel)]=\"data.customer_name\" required>\r\n              </mat-form-field>\r\n              <div class=\"alert alert-danger\" *ngIf=\"f.submitted && customer_name.invalid\">\r\n                <p *ngIf=\"customer_name.errors?.required\">Customer Name is required</p>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"col s12 m3 l3\">\r\n              <mat-form-field appearance=\"outline\"\r\n                [ngClass]=\"{'has-error': (f.submitted && customer_mobile_no.invalid) || mobileExists}\">\r\n                <mat-label>Customer Mobile <span class=\"red-text\">*</span></mat-label>\r\n                <input matInput name=\"customer_mobile_no\" #customer_mobile_no=\"ngModel\"\r\n                  [(ngModel)]=\"data.customer_mobile_no\" minlength=\"10\" maxlength=\"10\"\r\n                  (ngModelChange)=\"checkCustomerMobile()\"\r\n                  onkeypress=\"return event.charCode>=48 && event.charCode<=57\" required>\r\n              </mat-form-field>\r\n              <div class=\"alert alert-danger\" *ngIf=\"f.submitted && customer_mobile_no.invalid\">\r\n                <p *ngIf=\"customer_mobile_no.errors?.required\">Customer Mobile is required</p>\r\n                <p *ngIf=\"customer_mobile_no.errors?.minlength\">Enter 10 digit number</p>\r\n              </div>\r\n              <div class=\"alert alert-warning\" *ngIf=\"mobileExists && matchedPerson\">\r\n                <strong>Already Registered:</strong>\r\n                {{matchedPerson.company_name || matchedPerson.name}} | {{matchedPerson.mobile}}\r\n                <br><small style=\"color:#c0392b\">This number cannot be used as Customer Mobile.</small>\r\n              </div>\r\n            </div>\r\n\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <!-- ─── Section 5: Images ─── -->\r\n      <div class=\"card mb15\" *ngIf=\"add_list.length > 0\">\r\n        <div class=\"card-head\"><h2>Images</h2></div>\r\n        <div class=\"card-body\">\r\n\r\n          <!-- Invoice Images -->\r\n          <p class=\"mb5\"><strong>Supporting Invoice Image <span class=\"red-text\">*</span></strong> (Max 5)</p>\r\n          <div class=\"image-upload-row\">\r\n            <div class=\"img-thumb\" *ngFor=\"let img of selImages; let i = index\">\r\n              <img [src]=\"img.image\" alt=\"\">\r\n              <button type=\"button\" class=\"img-del\" (click)=\"removeInvoiceImage(i)\">\r\n                <i class=\"material-icons\">close</i>\r\n              </button>\r\n            </div>\r\n            <label class=\"img-add\" *ngIf=\"selImages.length < 5\">\r\n              <i class=\"material-icons\">add_a_photo</i>\r\n              <input type=\"file\" accept=\"image/*\" multiple (change)=\"onInvoiceImageChange($event)\" hidden>\r\n            </label>\r\n          </div>\r\n\r\n          <!-- Site Images -->\r\n          <p class=\"mb5 mt15\"><strong>Live Site Image</strong> (Max 5)</p>\r\n          <div class=\"image-upload-row\">\r\n            <div class=\"img-thumb\" *ngFor=\"let img of siteImages; let i = index\">\r\n              <img [src]=\"img.site_image\" alt=\"\">\r\n              <button type=\"button\" class=\"img-del\" (click)=\"removeSiteImage(i)\">\r\n                <i class=\"material-icons\">close</i>\r\n              </button>\r\n            </div>\r\n            <label class=\"img-add\" *ngIf=\"siteImages.length < 5\">\r\n              <i class=\"material-icons\">add_a_photo</i>\r\n              <input type=\"file\" accept=\"image/*\" multiple (change)=\"onSiteImageChange($event)\" hidden>\r\n            </label>\r\n          </div>\r\n\r\n        </div>\r\n      </div>\r\n\r\n      <!-- ─── Submit ─── -->\r\n      <div class=\"row\" *ngIf=\"add_list.length > 0\">\r\n        <div class=\"col s12 text-right\">\r\n          <button type=\"button\" mat-button (click)=\"back()\">Cancel</button>\r\n          <button type=\"submit\" mat-raised-button color=\"primary\" [disabled]=\"savingFlag\" class=\"ml10\">\r\n            <span *ngIf=\"savingFlag\">Saving...</span>\r\n            <span *ngIf=\"!savingFlag\"><i class=\"material-icons\">save</i> Submit Purchase</span>\r\n          </button>\r\n        </div>\r\n      </div>\r\n\r\n    </form>\r\n  </div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/purchase/add-purchase/add-purchase.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/purchase/add-purchase/add-purchase.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".product-info-bar {\n  background: #f5f5f5;\n  border-radius: 6px;\n  padding: 8px 12px;\n  font-size: 13px;\n  display: flex;\n  align-items: center;\n}\n\n.small-text {\n  font-size: 11px;\n  color: #666;\n  margin-top: -10px;\n  display: block;\n}\n\n.totals-row {\n  font-size: 14px;\n  padding: 8px 0;\n  border-top: 1px solid #eee;\n}\n\n.image-upload-row {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 10px;\n  margin-top: 8px;\n}\n\n.img-thumb {\n  position: relative;\n  width: 80px;\n  height: 80px;\n  border-radius: 6px;\n  overflow: hidden;\n  border: 1px solid #ddd;\n}\n\n.img-thumb img {\n  width: 100%;\n  height: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n\n.img-thumb .img-del {\n  position: absolute;\n  top: 0;\n  right: 0;\n  background: rgba(255, 0, 0, 0.7);\n  color: #fff;\n  border: none;\n  cursor: pointer;\n  padding: 2px;\n  line-height: 1;\n}\n\n.img-thumb .img-del .material-icons {\n  font-size: 16px;\n}\n\n.img-add {\n  width: 80px;\n  height: 80px;\n  border: 2px dashed #ccc;\n  border-radius: 6px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n  color: #999;\n  font-size: 11px;\n}\n\n.img-add .material-icons {\n  font-size: 28px;\n}\n\n.img-add:hover {\n  border-color: #1976d2;\n  color: #1976d2;\n}\n\n.purchase-table {\n  width: 100%;\n  border-collapse: collapse;\n}\n\n.purchase-table th, .purchase-table td {\n  padding: 10px 12px;\n  border-bottom: 1px solid #e0e0e0;\n  font-size: 13px;\n  white-space: nowrap;\n}\n\n.purchase-table th {\n  background: #f5f5f5;\n  font-weight: 600;\n  color: #333;\n}\n\n.purchase-table tbody tr:hover {\n  background: #fafafa;\n}\n\n.purchase-table .col-sno {\n  width: 50px;\n}\n\n.purchase-table .col-product {\n  width: 35%;\n  white-space: normal;\n}\n\n.purchase-table .col-code {\n  width: 120px;\n}\n\n.purchase-table .col-qty {\n  width: 80px;\n}\n\n.purchase-table .col-point {\n  width: 110px;\n}\n\n.purchase-table .col-action {\n  width: 70px;\n}\n\n.text-center {\n  text-align: center;\n}\n\n.red-text {\n  color: red;\n}\n\n.mb5 {\n  margin-bottom: 5px;\n}\n\n.mb15 {\n  margin-bottom: 15px;\n}\n\n.mt10 {\n  margin-top: 10px;\n}\n\n.mt15 {\n  margin-top: 15px;\n}\n\n.ml10 {\n  margin-left: 10px;\n}\n\n.ml15 {\n  margin-left: 15px;\n}\n\n.ml20 {\n  margin-left: 20px;\n}\n\n.text-right {\n  text-align: right;\n}\n\n.text-muted {\n  color: #888;\n  font-size: 12px;\n}"

/***/ }),

/***/ "./src/app/purchase/add-purchase/add-purchase.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/purchase/add-purchase/add-purchase.component.ts ***!
  \*****************************************************************/
/*! exports provided: AddPurchaseComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddPurchaseComponent", function() { return AddPurchaseComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng6-toastr-notifications */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/ng6-toastr-notifications/fesm5/ng6-toastr-notifications.js");
/* harmony import */ var src_services_DatabaseService__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/_services/DatabaseService */ "./src/_services/DatabaseService.ts");
/* harmony import */ var src_app_localstorage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/localstorage.service */ "./src/app/localstorage.service.ts");






var AddPurchaseComponent = /** @class */ (function () {
    function AddPurchaseComponent(service, router, toast, session) {
        this.service = service;
        this.router = router;
        this.toast = toast;
        this.session = session;
        this.savingFlag = false;
        this.loader = false;
        // Form data
        this.data = {};
        this.cartData = { qty: 0 };
        this.add_list = [];
        // Dropdowns
        this.userList = []; // master list as returned by the API
        this.filteredUserList = []; // what the Employee dropdown actually renders
        this.influencerList = [];
        this.dealerList = [];
        // PE/AMB aur Supplier ka search server-side hai aur sirf 50 rows deta hai. Naye search
        // result me selected row miss ho sakta hai, jis se mat-select ka label blank ho jaata
        // hai — is liye selected row yaad rakh ke list me pin karte hain.
        this.selectedInfluencer = null;
        this.selectedDealer = null;
        this.brandList = [];
        this.thicknessList = [];
        this.sizeList = [];
        // Product
        this.productData = {};
        this.inventoryMaxQty = 0;
        this.addToListButton = false;
        // Membership
        this.membershipPercentage = 0;
        // Totals
        this.total_qty = 0;
        this.earn_point = 0;
        // Customer mobile check
        this.mobileExists = false;
        this.matchedPerson = null;
        // Images
        this.selImages = [];
        this.siteImages = [];
        this.today_date = new Date().toISOString().slice(0, 10);
        this.logined_user_data = {};
        var s = this.session.getSession();
        this.logined_user_data = s.value.data;
    }
    AddPurchaseComponent.prototype.ngOnInit = function () {
        this.getSalesUserList();
    };
    // ─── 1. Sales User List ───────────────────────────────────────────────────
    AddPurchaseComponent.prototype.getSalesUserList = function (search) {
        var _this = this;
        if (search === void 0) { search = ''; }
        this.service.post_rqst({ search: search }, 'WebPurchase/sales_user_list').subscribe(function (res) {
            if (res.statusCode == 200) {
                _this.userList = res.all_sales_user || [];
                _this.filteredUserList = _this.userList;
            }
        });
    };
    // Employee dropdown ka search — name ya mobile, dono se match hota hai.
    // Poori list ek hi call me aa jaati hai, is liye client-side filter kaafi hai (no round-trip).
    AddPurchaseComponent.prototype.filterUserList = function (term) {
        if (term === void 0) { term = ''; }
        var q = (term || '').trim().toLowerCase();
        if (!q) {
            this.filteredUserList = this.userList;
            return;
        }
        this.filteredUserList = this.userList.filter(function (u) {
            return (u.name || '').toLowerCase().indexOf(q) > -1 ||
                String(u.mobile_no || '').indexOf(q) > -1;
        });
    };
    // Panel band hone pe list wapas poori kar do. Warna selected employee filter se bahar
    // reh jaata hai aur mat-select ka trigger label blank dikhne lagta hai.
    AddPurchaseComponent.prototype.onEmployeePanelToggle = function (opened) {
        if (!opened) {
            this.filterUserList('');
        }
    };
    // ─── 2. On Employee select → load influencer + dealer list ───────────────
    AddPurchaseComponent.prototype.onUserSelect = function () {
        if (!this.data.employee_id)
            return;
        this.data.influencer_id = '';
        this.data.dealer_id = '';
        this.selectedInfluencer = null;
        this.selectedDealer = null;
        this.cartData = { qty: 0 };
        this.add_list = [];
        this.brandList = [];
        this.thicknessList = [];
        this.sizeList = [];
        this.productData = {};
        this.getInfluencerList();
        this.getDealerList();
    };
    // ─── 3. Influencer (PE/AMB) list ─────────────────────────────────────────
    AddPurchaseComponent.prototype.getInfluencerList = function (search) {
        var _this = this;
        if (search === void 0) { search = ''; }
        this.service.post_rqst({ sales_id: this.data.employee_id, search: search }, 'WebPurchase/influencer_list').subscribe(function (res) {
            if (res.statusCode == 200) {
                _this.influencerList = _this.pinSelected(res.distributors || [], _this.selectedInfluencer);
            }
        });
    };
    // Search result me selected row na mile to use list ke top pe jod dete hain.
    AddPurchaseComponent.prototype.pinSelected = function (list, selected) {
        if (selected && !list.some(function (x) { return x.id == selected.id; })) {
            return [selected].concat(list);
        }
        return list;
    };
    // ─── 4. On Influencer select → membership check ───────────────────────────
    AddPurchaseComponent.prototype.onInfluencerSelect = function () {
        var _this = this;
        if (!this.data.influencer_id)
            return;
        var inf = this.influencerList.find(function (x) { return x.id == _this.data.influencer_id; });
        this.selectedInfluencer = inf || this.selectedInfluencer;
        this.data.influencer_type = inf ? inf.type : '';
        this.getMembershipFlag();
    };
    AddPurchaseComponent.prototype.getMembershipFlag = function () {
        var _this = this;
        this.service.post_rqst({ influencer_id: this.data.influencer_id }, 'WebPurchase/membership_check_flag').subscribe(function (res) {
            if (res.statusCode == 200) {
                _this.membershipPercentage = res.result.percentage || 0;
            }
        });
    };
    // ─── 5. Dealer list ───────────────────────────────────────────────────────
    AddPurchaseComponent.prototype.getDealerList = function (search) {
        var _this = this;
        if (search === void 0) { search = ''; }
        this.service.post_rqst({ user_id: this.data.employee_id, search: search }, 'WebPurchase/get_dealer_list').subscribe(function (res) {
            if (res.statusCode == 200) {
                _this.dealerList = _this.pinSelected(res.dealer || [], _this.selectedDealer);
            }
        });
    };
    // ─── 6. On Dealer select → load brands ───────────────────────────────────
    AddPurchaseComponent.prototype.onDealerSelect = function () {
        var _this = this;
        if (!this.data.dealer_id)
            return;
        this.selectedDealer = this.dealerList.find(function (x) { return x.id == _this.data.dealer_id; }) || this.selectedDealer;
        this.cartData = { qty: 0 };
        this.brandList = [];
        this.thicknessList = [];
        this.sizeList = [];
        this.productData = {};
        this.getBrands();
    };
    AddPurchaseComponent.prototype.getBrands = function () {
        var _this = this;
        this.service.post_rqst({ dealer_id: this.data.dealer_id }, 'WebPurchase/get_brand').subscribe(function (res) {
            if (res.statusCode == 200) {
                _this.brandList = res.brand_list || [];
            }
        });
    };
    // ─── 7. Brand select → thickness ─────────────────────────────────────────
    AddPurchaseComponent.prototype.onBrandSelect = function () {
        var _this = this;
        this.cartData.thickness = '';
        this.cartData.size = '';
        this.cartData.qty = 0;
        this.thicknessList = [];
        this.sizeList = [];
        this.productData = {};
        this.service.post_rqst({ brand: this.cartData.brand, dealer_id: this.data.dealer_id }, 'WebPurchase/product_thickness').subscribe(function (res) {
            if (res.statusCode == 200) {
                _this.thicknessList = res.result || [];
            }
        });
    };
    // ─── 8. Thickness select → size ──────────────────────────────────────────
    AddPurchaseComponent.prototype.onThicknessSelect = function () {
        var _this = this;
        this.cartData.size = '';
        this.cartData.qty = 0;
        this.sizeList = [];
        this.productData = {};
        this.service.post_rqst({ brand: this.cartData.brand, thickness: this.cartData.thickness, dealer_id: this.data.dealer_id }, 'WebPurchase/product_size').subscribe(function (res) {
            if (res.statusCode == 200) {
                _this.sizeList = res.result || [];
            }
        });
    };
    // ─── 9. Size select → product data + max qty ─────────────────────────────
    AddPurchaseComponent.prototype.onSizeSelect = function () {
        var _this = this;
        // Points are date-versioned — invoice date must be chosen first.
        if (!this.data.invoice_date) {
            this.toast.errorToastr('Please select Invoice Date first — points depend on it');
            this.cartData.size = '';
            return;
        }
        this.cartData.qty = 0;
        this.productData = {};
        this.addToListButton = false;
        this.service.post_rqst({ brand: this.cartData.brand, thickness: this.cartData.thickness, size: this.cartData.size, dealer_id: this.data.dealer_id, invoice_date: this.data.invoice_date || '' }, 'WebPurchase/product_items').subscribe(function (res) {
            if (res.statusCode == 200 && res.result) {
                _this.productData = res.result;
                // Points come date-versioned from product_point_master (by invoice_date).
                // If no period is defined for this date, block adding this product.
                if (_this.productData.point_period_missing) {
                    _this.toast.errorToastr('Is invoice date ke liye is product ka point set nahi hai');
                    _this.productData = {};
                    _this.addToListButton = false;
                    return;
                }
                _this.cartData.product_name = _this.productData.product_name;
                _this.cartData.product_code = _this.productData.product_code;
                _this.cartData.product_id = _this.productData.id;
                _this.cartData.segment_name = _this.productData.category;
                _this.cartData.segment_id = _this.productData.category_id;
                _this.cartData.brand = _this.productData.brand_code;
                if (_this.data.influencer_type == '8' || _this.data.influencer_type == 8) {
                    _this.cartData.influencer_point = _this.productData.ply_expert_point;
                    _this.inventoryMaxQty = _this.productData.ply_ex_close_qty;
                }
                else if (_this.data.influencer_type == '21' || _this.data.influencer_type == 21) {
                    _this.cartData.influencer_point = _this.productData.fabricator_point;
                    _this.inventoryMaxQty = _this.productData.fabricator_close_qty;
                }
                else {
                    _this.cartData.influencer_point = _this.productData.ambassador_point;
                    _this.inventoryMaxQty = _this.productData.ambassador_close_qty;
                }
                _this.cartData.maxqty = _this.inventoryMaxQty;
            }
            else {
                _this.toast.errorToastr(res.statusMsg || 'Product not found');
            }
        });
    };
    // ─── 10. Qty change validation ────────────────────────────────────────────
    AddPurchaseComponent.prototype.checkQty = function () {
        if (!this.cartData.qty || this.cartData.qty <= 0) {
            this.addToListButton = false;
            return;
        }
        if (this.cartData.qty > this.inventoryMaxQty) {
            this.toast.errorToastr('Qty cannot exceed Max Qty: ' + this.inventoryMaxQty);
            this.addToListButton = false;
        }
        else {
            this.addToListButton = true;
        }
    };
    // ─── 11. Add to list ──────────────────────────────────────────────────────
    AddPurchaseComponent.prototype.addToList = function () {
        var _this = this;
        var existing = this.add_list.findIndex(function (r) { return r.product_id == _this.cartData.product_id; });
        if (existing == -1) {
            this.add_list.push(Object.assign({}, this.cartData));
        }
        else {
            var newQty = parseInt(this.add_list[existing].qty) + parseInt(this.cartData.qty);
            if (newQty > this.inventoryMaxQty) {
                this.toast.errorToastr('Total qty cannot exceed ' + this.inventoryMaxQty);
                return;
            }
            this.add_list[existing].qty = newQty;
        }
        this.recalcTotals();
        this.cartData.qty = 0;
        this.cartData.brand = '';
        this.cartData.thickness = '';
        this.cartData.size = '';
        this.productData = {};
        this.addToListButton = false;
    };
    AddPurchaseComponent.prototype.deleteItem = function (i) {
        this.add_list.splice(i, 1);
        this.recalcTotals();
    };
    AddPurchaseComponent.prototype.recalcTotals = function () {
        this.total_qty = this.add_list.reduce(function (t, r) { return t + Number(r.qty); }, 0);
        this.earn_point = this.add_list.reduce(function (t, r) { return t + Number(r.qty) * Number(r.influencer_point); }, 0);
    };
    // Invoice date drives the point era. When it changes, re-price every item
    // already in the cart from product_point_master so shown points stay correct
    // (old date -> old points, new date -> new points).
    AddPurchaseComponent.prototype.onInvoiceDateChange = function () {
        var _this = this;
        if (!this.add_list || !this.add_list.length)
            return;
        var ids = this.add_list.map(function (r) { return r.product_id; });
        this.service.post_rqst({ product_ids: ids, invoice_date: this.data.invoice_date || '' }, 'WebPurchase/product_points_by_date').subscribe(function (res) {
            if (res.statusCode == 200 && res.result) {
                var missing_1 = false;
                _this.add_list.forEach(function (r) {
                    var pt = res.result[r.product_id];
                    if (!pt)
                        return;
                    if (pt.missing) {
                        missing_1 = true;
                    }
                    if (_this.data.influencer_type == '8' || _this.data.influencer_type == 8) {
                        r.influencer_point = pt.ply_expert_point;
                    }
                    else if (_this.data.influencer_type == '21' || _this.data.influencer_type == 21) {
                        r.influencer_point = pt.fabricator_point;
                    }
                    else {
                        r.influencer_point = pt.ambassador_point;
                    }
                });
                _this.recalcTotals();
                if (missing_1) {
                    _this.toast.errorToastr('Kuch products ka is invoice date ke liye point set nahi hai');
                }
            }
        });
    };
    // ─── 12. Customer mobile check ────────────────────────────────────────────
    AddPurchaseComponent.prototype.checkCustomerMobile = function () {
        var _this = this;
        var mobile = this.data.customer_mobile_no;
        if (!mobile || String(mobile).length !== 10) {
            this.mobileExists = false;
            this.matchedPerson = null;
            return;
        }
        this.service.post_rqst({ mobile: mobile }, 'WebPurchase/check_customer_mobile').subscribe(function (res) {
            if (res.statusCode == 200) {
                _this.mobileExists = res.match;
                _this.matchedPerson = res.match ? res.detail : null;
            }
        });
    };
    // ─── 13. Image upload ─────────────────────────────────────────────────────
    AddPurchaseComponent.prototype.onInvoiceImageChange = function (event) {
        var _this = this;
        var files = event.target.files;
        if (!files)
            return;
        if (this.selImages.length + files.length > 5) {
            this.toast.errorToastr('Max 5 invoice images allowed');
            return;
        }
        for (var i = 0; i < files.length; i++) {
            var reader = new FileReader();
            reader.onload = function (e) {
                _this.selImages.push({ image: e.target.result });
            };
            reader.readAsDataURL(files[i]);
        }
        event.target.value = '';
    };
    AddPurchaseComponent.prototype.removeInvoiceImage = function (i) {
        this.selImages.splice(i, 1);
    };
    AddPurchaseComponent.prototype.onSiteImageChange = function (event) {
        var _this = this;
        var files = event.target.files;
        if (!files)
            return;
        if (this.siteImages.length + files.length > 5) {
            this.toast.errorToastr('Max 5 site images allowed');
            return;
        }
        for (var i = 0; i < files.length; i++) {
            var reader = new FileReader();
            reader.onload = function (e) {
                _this.siteImages.push({ site_image: e.target.result });
            };
            reader.readAsDataURL(files[i]);
        }
        event.target.value = '';
    };
    AddPurchaseComponent.prototype.removeSiteImage = function (i) {
        this.siteImages.splice(i, 1);
    };
    // ─── 14. Submit ───────────────────────────────────────────────────────────
    AddPurchaseComponent.prototype.submit = function () {
        var _this = this;
        if (!this.add_list.length) {
            this.toast.errorToastr('Add at least one product');
            return;
        }
        if (!this.selImages.length) {
            this.toast.errorToastr('Invoice image is required');
            return;
        }
        if (this.mobileExists) {
            this.toast.errorToastr('Customer mobile belongs to a registered party');
            return;
        }
        // Invoice No. / Sale Type / Customer Name+Mobile are mandatory — template `required`
        // already blocks submit, ye guard whitespace-only value ke liye hai.
        if (!String(this.data.invoice_no || '').trim()) {
            this.toast.errorToastr('Invoice No. is required');
            return;
        }
        if (!String(this.data.sale_type || '').trim()) {
            this.toast.errorToastr('Sale Type is required');
            return;
        }
        if (!String(this.data.customer_name || '').trim()) {
            this.toast.errorToastr('Customer Name is required');
            return;
        }
        if (!/^[0-9]{10}$/.test(String(this.data.customer_mobile_no || '').trim())) {
            this.toast.errorToastr('Customer Mobile must be a 10 digit number');
            return;
        }
        var basePoints = this.add_list.reduce(function (t, r) { return t + Number(r.influencer_point) * Number(r.qty); }, 0);
        var bonus = this.membershipPercentage ? this.membershipPercentage / 100 : 0;
        var payload = {
            data: {
                employee_id: this.data.employee_id,
                influencer_id: this.data.influencer_id,
                influencer_type: this.data.influencer_type,
                dealer_id: this.data.dealer_id,
                part: this.add_list,
                transfer_point: basePoints * (1 + bonus),
                invoice_no: String(this.data.invoice_no || '').trim(),
                invoice_date: this.data.invoice_date || '',
                sale_type: this.data.sale_type || '',
                customer_name: String(this.data.customer_name || '').trim(),
                customer_mobile_no: String(this.data.customer_mobile_no || '').trim(),
                image: this.selImages,
                site_image: this.siteImages,
            }
        };
        this.savingFlag = true;
        this.service.post_rqst(payload, 'WebPurchase/add_purchase').subscribe(function (res) {
            _this.savingFlag = false;
            if (res.statusCode == 200) {
                _this.toast.successToastr('Purchase submitted successfully');
                _this.router.navigate(['/purchase-list']);
            }
            else {
                _this.toast.errorToastr((res.case && res.case.msg) ? res.case.msg : (res.statusMsg || 'Failed to submit'));
            }
        }, function () {
            _this.savingFlag = false;
            _this.toast.errorToastr('Something went wrong');
        });
    };
    AddPurchaseComponent.prototype.back = function () {
        this.router.navigate(['/purchase-list']);
    };
    AddPurchaseComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-add-purchase',
            template: __webpack_require__(/*! ./add-purchase.component.html */ "./src/app/purchase/add-purchase/add-purchase.component.html"),
            styles: [__webpack_require__(/*! ./add-purchase.component.scss */ "./src/app/purchase/add-purchase/add-purchase.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_services_DatabaseService__WEBPACK_IMPORTED_MODULE_4__["DatabaseService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_3__["ToastrManager"],
            src_app_localstorage_service__WEBPACK_IMPORTED_MODULE_5__["sessionStorage"]])
    ], AddPurchaseComponent);
    return AddPurchaseComponent;
}());



/***/ }),

/***/ "./src/app/purchase/purchase-list/purchase-list.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/purchase/purchase-list/purchase-list.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-container\">\r\n  <!-- <app-loader *ngIf=\"excelLoader\"></app-loader> -->\r\n  <div class=\"tab-surface\">\r\n    <button mat-button\r\n      [ngClass]=\"!PurchaseMonth ? 'active' : ''\"\r\n      (click)=\"getPurchaseList('all', '')\">\r\n      All\r\n    </button>\r\n    <button *ngFor=\"let row of calenderInfo\" mat-button\r\n      [ngClass]=\"PurchaseMonth == row.month && PurchaseYear == row.year ? 'active' : ''\"\r\n      (click)=\"getPurchaseList(row.month, row.year)\">\r\n      {{row.monthYEAR | date :'MMM'}} {{row.year}}\r\n    </button>\r\n  </div>\r\n  <div class=\"tools-container\">\r\n    <h2>Purchase</h2>\r\n\r\n\r\n    <div class=\"left-auto df ac flex-gap-10\">\r\n      <a mat-icon-button matTooltip=\"Refresh\" (click)=\"refresh()\">\r\n        <i class=\"material-icons\">refresh</i>\r\n      </a>\r\n\r\n      <div class=\"pagination\" *ngIf=\"purchaselist.length > 0 \">\r\n        <div class=\"pagination-content\">\r\n          Pages\r\n          <span>{{pagenumber}}</span>\r\n          of\r\n          <span>{{total_page}}</span>\r\n        </div>\r\n        <div class=\"page-nav\">\r\n          <button mat-icon-button matTooltip=\"Older\" (click)=\"pervious()\" [disabled]=\"start == 0\">\r\n            <i class=\"material-icons\">navigate_before</i>\r\n          </button>\r\n          <button mat-icon-button matTooltip=\"Newer\" (click)=\"nextPage()\" [disabled]=\"pagenumber == total_page \">\r\n            <i class=\"material-icons\">navigate_next</i>\r\n          </button>\r\n        </div>\r\n      </div>\r\n\r\n\r\n      <div class=\"mat-tabbar\">\r\n        <button mat-button [ngClass]=\"influencer_type == 'Ply Expert' ? 'active' : ''\"\r\n          (click)=\"influencer_type = 'Ply Expert'; getPurchaseList()\"><i class=\"material-icons\">shopping_cart</i>Ply\r\n          Expert</button>\r\n        <ng-container>\r\n          <button mat-button [ngClass]=\"influencer_type == 'Ambassador' ? 'active' : ''\"\r\n            (click)=\"influencer_type = 'Ambassador';getPurchaseList()\"><i\r\n              class=\"material-icons\">shopping_cart</i>Ambassador</button>\r\n        </ng-container>\r\n        <ng-container>\r\n          <button mat-button [ngClass]=\"influencer_type == 'Fabricator' ? 'active' : ''\"\r\n            (click)=\"influencer_type = 'Fabricator';getPurchaseList()\"><i\r\n              class=\"material-icons\">shopping_cart</i>Fabricator</button>\r\n        </ng-container>\r\n\r\n        <!-- <button mat-button [ngClass]=\"influencer_type == 'Plumber' ? 'active' : ''\"\r\n        (click)=\"influencer_type = 'Plumber'; getPurchaseList()\"><i class=\"material-icons\">shopping_cart</i>Plumber Purchase</button> -->\r\n\r\n      </div>\r\n\r\n\r\n    </div>\r\n\r\n  </div>\r\n\r\n  <!-- <div class=\"tools-container\">\r\n    <div class=\"left-auto df ac flex-gap-10 ml0\">\r\n      <div class=\"mat-tabbar\">\r\n        <ng-container>\r\n          <button mat-button [ngClass]=\"active_tab == 'Pending' ? 'active' : ''\" (click)=\"active_tab = 'Pending';getPurchaseList()\"><i class=\"material-icons\">pending_actions</i>Pending ({{tabCount.pending_count}})</button>\r\n        </ng-container>\r\n        <button mat-button [ngClass]=\"active_tab == 'Validated' ? 'active' : ''\"\r\n        (click)=\"active_tab = 'Validated'; getPurchaseList()\"><i class=\"material-icons\">thumb_up_alt</i>Validated ({{tabCount.validated_count}})</button>\r\n        <button mat-button [ngClass]=\"active_tab == 'Approved' ? 'active' : ''\"\r\n        (click)=\"active_tab = 'Approved'; getPurchaseList()\"><i class=\"material-icons\">thumb_up_alt</i>Approved ({{tabCount.approved_count}})</button>\r\n        <button mat-button [ngClass]=\"active_tab == 'Reject' ? 'active' : ''\"\r\n        (click)=\"active_tab = 'Reject'; getPurchaseList()\"><i class=\"material-icons\">thumb_down_alt</i>Reject ({{tabCount.reject_count}})</button>\r\n\r\n      </div>\r\n\r\n    </div>\r\n\r\n  </div> -->\r\n\r\n  <div class=\"container container-scroll\">\r\n    <div class=\"mat-tabbar\">\r\n      <ng-container>\r\n        <button mat-button [ngClass]=\"active_tab == 'Pending' ? 'active' : ''\"\r\n          (click)=\"active_tab = 'Pending';getPurchaseList()\"><i class=\"material-icons\">pending_actions</i>Pending\r\n          ({{tabCount.pending_count}})</button>\r\n      </ng-container>\r\n      <button mat-button [ngClass]=\"active_tab == 'Validated' ? 'active' : ''\"\r\n        (click)=\"active_tab = 'Validated'; getPurchaseList()\"><i class=\"material-icons\">thumb_up_alt</i>Validated\r\n        ({{tabCount.validated_count}})</button>\r\n      <button mat-button [ngClass]=\"active_tab == 'Approved' ? 'active' : ''\"\r\n        (click)=\"active_tab = 'Approved'; getPurchaseList()\"><i class=\"material-icons\">thumb_up_alt</i>Approved\r\n        ({{tabCount.approved_count}})</button>\r\n      <button mat-button [ngClass]=\"active_tab == 'Hold' ? 'active' : ''\"\r\n        (click)=\"active_tab = 'Hold'; getPurchaseList()\"><i class=\"material-icons\">thumb_down_alt</i>Hold\r\n        ({{tabCount.hold_count}})</button>\r\n\r\n      <button mat-button [ngClass]=\"active_tab == 'Reject' ? 'active' : ''\"\r\n        (click)=\"active_tab = 'Reject'; getPurchaseList()\"><i class=\"material-icons\">thumb_down_alt</i>Reject\r\n        ({{tabCount.reject_count}})</button>\r\n\r\n    </div>\r\n    <div class=\"cs-table horizontal-scroll\">\r\n      <div class=\"sticky-head\">\r\n        <div class=\"table-head\">\r\n          <table>\r\n            <tr>\r\n              <th class=\"w60\">S. No</th>\r\n              <th class=\"w100\">Date Created</th>\r\n              <th class=\"w150\">Created by</th>\r\n              <th class=\"w100\">Purchase ID</th>\r\n              <th class=\"w200\">{{influencer_type}} Detail</th>\r\n              <th class=\"w120 text-center\">KYC Status</th>\r\n              <!-- <th class=\"w100 text-center\"> Type</th> -->\r\n\r\n              <th class=\"w200 text-center\">Supplier Detail</th>\r\n              <th class=\"w150 text-center\">State</th>\r\n              <th class=\"w100 text-center\">Item Detail</th>\r\n              <th class=\"w100 text-center\">Invoice No.</th>\r\n\r\n              <th class=\"w80 text-center\">Invoice Image</th>\r\n              <th class=\"w80 text-center\">Site Image</th>\r\n              <th class=\"w120 text-center\">Attachment</th>\r\n\r\n              <th class=\"w100\">Total Qty</th>\r\n              <th class=\"w100 text-center\">Transfer Points</th>\r\n              <th class=\"w150 text-center\" *ngIf=\"active_tab == 'Approved'\">Unique Invoice No</th>\r\n\r\n              <!-- <th class=\"w100 text-center\">Qty</th> -->\r\n              <!-- <th class=\"w120  text-center\" *ngIf=\"active_tab == 'Pending' || active_tab == 'Validated'\">Action</th> -->\r\n              <!-- <th class=\"w100 text-center\">Status</th> -->\r\n              <th class=\"w150 text-center\"\r\n                *ngIf=\"active_tab == 'Reject' || active_tab == 'Approved' || active_tab == 'Hold'\">Reason</th>\r\n              <th class=\"w150 text-center\" *ngIf=\"active_tab != 'Pending'\">Validated By</th>\r\n\r\n              <th class=\"w150 text-center\"\r\n                *ngIf=\"active_tab == 'Approved' || active_tab == 'Reject' || active_tab == 'Hold'\">Status Updated By\r\n              </th>\r\n              <th class=\"w100\"\r\n                *ngIf=\"active_tab == 'Approved' || active_tab == 'Hold' || active_tab == 'Validated'|| active_tab == 'Reject'\">\r\n                Date Updated By</th>\r\n\r\n            </tr>\r\n          </table>\r\n        </div>\r\n\r\n        <div class=\"table-head border-top\">\r\n          <table>\r\n            <tr>\r\n              <th class=\"w60\"></th>\r\n              <th class=\"w100\">\r\n                <div class=\"th-search-acmt\">\r\n                  <mat-form-field class=\"cs-input date-column infix-bodr\">\r\n                    <input matInput [matDatepicker]=\"picker\" placeholder=\"Date\" name=\"date_created\"\r\n                      #date_created=\"ngModel\" [(ngModel)]=\"filter_data.date_created\" (ngModelChange)=\"date_format()\"\r\n                      [max]=\"today_date\" readonly>\r\n                    <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\r\n                    <mat-datepicker #picker></mat-datepicker>\r\n                  </mat-form-field>\r\n                </div>\r\n              </th>\r\n              <th class=\"w150\">\r\n                <div class=\"th-search-acmt\">\r\n                  <mat-form-field>\r\n                    <input type=\"text\" matInput placeholder=\"Search ...\" name=\"created_by\"\r\n                      (keyup.enter)=\"getPurchaseList()\" #created_by=\"ngModel\" [(ngModel)]=\"filter_data.created_by\">\r\n                  </mat-form-field>\r\n                </div>\r\n              </th>\r\n              <th class=\"w100\">\r\n                <div class=\"th-search-acmt\">\r\n                  <mat-form-field>\r\n                    <input type=\"text\" matInput placeholder=\"Search ...\" name=\"pur_id\" (keyup.enter)=\"getPurchaseList()\"\r\n                      #pur_id=\"ngModel\" [(ngModel)]=\"filter_data.pur_id\">\r\n                  </mat-form-field>\r\n                </div>\r\n              </th>\r\n\r\n\r\n\r\n              <th class=\"w200\">\r\n                <div class=\"th-search-acmt\">\r\n                  <mat-form-field>\r\n                    <input type=\"text\" matInput placeholder=\"Search ...\" name=\"influencer_company_name\"\r\n                      (keyup.enter)=\"getPurchaseList()\" #influencer_company_name=\"ngModel\"\r\n                      [(ngModel)]=\"filter_data.influencer_company_name\">\r\n                  </mat-form-field>\r\n                </div>\r\n              </th>\r\n              <th class=\"w120\"></th>\r\n\r\n\r\n              <!-- <th class=\"w100\">\r\n              <div class=\"th-search-acmt\">\r\n                <mat-form-field class=\"cs-input select-input\">\r\n                  <mat-select name=\"type\"  #type=\"ngModel\" [(ngModel)]=\"filter_data.type\"\r\n                    (selectionChange)=\"getPurchaseList()\">\r\n                    <mat-option value=\"\">All</mat-option>\r\n                    <mat-option value=\"Ambassador\">Ambassador</mat-option>\r\n                    <mat-option value=\"Ply Expert\">Ply Expert</mat-option>\r\n\r\n\r\n                  </mat-select>\r\n                </mat-form-field>\r\n              </div>\r\n            </th> -->\r\n              <th class=\"w200\">\r\n                <div class=\"th-search-acmt\">\r\n                  <mat-form-field>\r\n                    <input type=\"text\" matInput placeholder=\"Search ...\" name=\"influencer_name\"\r\n                      (keyup.enter)=\"getPurchaseList()\" #dealer_name=\"ngModel\" [(ngModel)]=\"filter_data.dealer_name\">\r\n                  </mat-form-field>\r\n                </div>\r\n              </th>\r\n\r\n              <th class=\"w150\">\r\n                <div class=\"th-search-acmt\">\r\n                  <mat-form-field>\r\n                    <input type=\"text\" matInput placeholder=\"Search ...\" name=\"state\"\r\n                      (keyup.enter)=\"getPurchaseList()\" #state=\"ngModel\" [(ngModel)]=\"filter_data.state\">\r\n                  </mat-form-field>\r\n                </div>\r\n              </th>\r\n\r\n              <th class=\"w100\"></th>\r\n              <th class=\"w100\">\r\n                <div class=\"th-search-acmt\">\r\n                  <mat-form-field>\r\n                    <input type=\"text\" matInput placeholder=\"Search ...\" name=\"influencer_name\"\r\n                      (keyup.enter)=\"getPurchaseList()\" #invoice_no=\"ngModel\" [(ngModel)]=\"filter_data.invoice_no\">\r\n                  </mat-form-field>\r\n                </div>\r\n              </th>\r\n\r\n              <th class=\"w80 text-center\"></th>\r\n              <th class=\"w80 text-center\"></th>\r\n              <th class=\"w120 text-center\"></th>\r\n              <th class=\"w100\"></th>\r\n\r\n              <th class=\"w100\">\r\n                <!-- <div class=\"th-search-acmt\">\r\n                  <mat-form-field>\r\n                    <input type=\"text\" matInput placeholder=\"Search ...\" name=\"points\" (keyup.enter)=\"getPurchaseList()\"\r\n                      #points=\"ngModel\" [(ngModel)]=\"filter_data.points\">\r\n                  </mat-form-field>\r\n                </div> -->\r\n              </th>\r\n\r\n              <th class=\"w150\" *ngIf=\"active_tab == 'Approved'\">\r\n                <div class=\"th-search-acmt\">\r\n                  <mat-form-field>\r\n                    <input type=\"text\" matInput placeholder=\"Search ...\" name=\"unique_invoice_no\"\r\n                      (keyup.enter)=\"getPurchaseList()\" #unique_invoice_no=\"ngModel\"\r\n                      [(ngModel)]=\"filter_data.unique_invoice_no\">\r\n                  </mat-form-field>\r\n                </div>\r\n              </th>\r\n              <!-- <th class=\"w100 text-center\">\r\n              <div class=\"th-search-acmt\">\r\n                <mat-form-field>\r\n                  <input type=\"text\" matInput placeholder=\"Search ...\" name=\"total_qty\" (keyup.enter)=\"getPurchaseList()\"\r\n                  #total_qty=\"ngModel\" [(ngModel)]=\"filter_data.total_qty\">\r\n                </mat-form-field>\r\n              </div>\r\n            </th> -->\r\n\r\n              <!-- <th class=\"w120  text-center\" *ngIf=\"active_tab == 'Pending' || active_tab == 'Validated'\">&nbsp;</th> -->\r\n\r\n\r\n              <!-- <th class=\"w100 text-center\">\r\n              <div class=\"th-search-acmt\">\r\n                <mat-form-field class=\"cs-input select-input\">\r\n                  <mat-select name=\"status\" #status=\"ngModel\" [(ngModel)]=\"active_tab\"\r\n                  (selectionChange)=\"getPurchaseList()\">\r\n                  <mat-option value=\"Pending\">Pending</mat-option>\r\n                  <mat-option value=\"Approved\">Approved </mat-option>\r\n                  <mat-option value=\"Reject\">Reject </mat-option>\r\n\r\n                </mat-select>\r\n              </mat-form-field>\r\n            </div>\r\n          </th> -->\r\n              <th class=\"w150\" *ngIf=\"active_tab == 'Reject' || active_tab == 'Hold' || active_tab == 'Approved'\"></th>\r\n              <th class=\"w150\" *ngIf=\"active_tab != 'Pending' \">\r\n                <div class=\"th-search-acmt\">\r\n                  <mat-form-field>\r\n                    <input type=\"text\" matInput placeholder=\"Search ...\" name=\"validated_by_name\"\r\n                      (keyup.enter)=\"getPurchaseList()\" #validated_by_name=\"ngModel\"\r\n                      [(ngModel)]=\"filter_data.validated_by_name\">\r\n                  </mat-form-field>\r\n                </div>\r\n              </th>\r\n              <th class=\"w150\" *ngIf=\"active_tab == 'Approved' || active_tab == 'Reject' || active_tab == 'Hold'\">\r\n                <div class=\"th-search-acmt\">\r\n                  <mat-form-field>\r\n                    <input type=\"text\" matInput placeholder=\"Search ...\" name=\"status_updated_by_name\"\r\n                      (keyup.enter)=\"getPurchaseList()\" #status_updated_by_name=\"ngModel\"\r\n                      [(ngModel)]=\"filter_data.status_updated_by_name\">\r\n                  </mat-form-field>\r\n                </div>\r\n              </th>\r\n              <th class=\"w100\"\r\n                *ngIf=\"active_tab == 'Approved' || active_tab == 'Hold' || active_tab == 'Validated' || active_tab == 'Reject'\">\r\n                <div class=\"th-search-acmt\">\r\n                  <mat-form-field class=\"cs-input date-column infix-bodr\">\r\n                    <input matInput [matDatepicker]=\"picker\" placeholder=\"Date\" name=\"status_updated_on\"\r\n                      #status_updated_on=\"ngModel\" [(ngModel)]=\"filter_data.status_updated_on\"\r\n                      (ngModelChange)=\"date_format()\" [max]=\"today_date\" readonly>\r\n                    <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\r\n                    <mat-datepicker #picker></mat-datepicker>\r\n                  </mat-form-field>\r\n                </div>\r\n              </th>\r\n            </tr>\r\n          </table>\r\n        </div>\r\n      </div>\r\n\r\n\r\n      <div class=\"table-container\">\r\n        <div class=\"table-content\">\r\n          <table>\r\n            <ng-container *ngIf=\"!loader\">\r\n              <tr *ngFor=\"let row of purchaselist; let i = index \"\r\n                [ngClass]=\"{'Current': service.currentUserID == row.id}\">\r\n                <td class=\"w60\">{{i + 1 + sr_no}}</td>\r\n                <td class=\"w100\">{{row.date_created | date}}</td>\r\n                <td class=\"w150\">{{row.created_by_name && row.created_by_name!=''? row.created_by_name:'Self Purchase'}}\r\n                </td>\r\n                <td class=\"w100\">\r\n                  <a class=\"link-btn\" (click)=\"service.setData(filter_data)\" routerLink=\"purchase-detail/{{row.id }}\"\r\n                    [queryParams]=\"{'id':row.pur_id, 'status':active_tab}\" routerLinkActive=\"active\">{{row.pur_id &&\r\n                    row.pur_id!=''? row.pur_id:'--'}}</a>\r\n                </td>\r\n\r\n                <td class=\"w200\">\r\n                  <a class=\"link-btn\" mat-button (click)=\"service.setData(filter_data)\"\r\n                    [routerLink]=\"[ 'distribution-detail/', row.influencer_id,'Profile' ]\"\r\n                    [queryParams]=\"{'state':row.state, 'id':row.influencer_id, 'type':row.type, 'user_type':type}\">\r\n                    {{row.name|titlecase}}-{{row.mobile}}\r\n                  </a>\r\n\r\n\r\n                  <!-- <td class=\"w100 text-center\" >{{row.influencer_type}}</td> -->\r\n                <td class=\"w120 text-center\">\r\n                  <span class=\"kyc-badge\"\r\n                    [ngClass]=\"row.kyc_status == 'Verified' ? 'Approve' : row.kyc_status == 'Reject' ? 'Reject' : row.kyc_status == 'Hold' ? 'Hold' : 'Pending'\">\r\n                    <i class=\"material-icons\">{{row.kyc_status == 'Verified' ? 'verified' : row.kyc_status == 'Reject' ? 'cancel' : row.kyc_status == 'Hold' ? 'pause_circle_filled' : 'update'}}</i>\r\n                    <span>{{row.kyc_status || 'Pending'}}</span>\r\n                  </span>\r\n                </td>\r\n                <td class=\"w200 text-center\">{{row.dealer_name}}-{{row.dealer_mobile}}</td>\r\n\r\n                <td class=\"w150 text-center\">{{row.state && row.state!=''? row.state:'--'}}</td>\r\n\r\n\r\n                <td class=\"w100\">\r\n                  <div class=\"flex-group\">\r\n                    <a class=\"link-btn\" mat-button\r\n                      (click)=\"ItemsDetail(row.total_details)\">{{row.total_details.length}}</a>\r\n                  </div>\r\n                </td>\r\n                <td class=\"w100 text-center\">{{row.invoice_no}}</td>\r\n\r\n                <td class=\"w80\">\r\n                  <div class=\"flex-group\">\r\n                    <a class=\"link-btn\" mat-button (click)=\"showItems(row,'Invoice')\">{{row.image.length}}</a>\r\n                  </div>\r\n                </td>\r\n\r\n                <td class=\"w80\">\r\n                  <div class=\"flex-group\">\r\n                    <a class=\"link-btn\" mat-button (click)=\"showItems(row,'Site')\">{{row.site_image.length}}</a>\r\n                  </div>\r\n                </td>\r\n                <td class=\"w120 text-center\">\r\n                  <ng-container *ngIf=\"row.status_file && row.status_file.file_name; else noAttachment\">\r\n                    <a class=\"link-btn\" mat-button [href]=\"service.uploadUrl + row.status_file.file_name\" target=\"_blank\"\r\n                      matTooltip=\"Open {{row.status_file.file_type}}\">\r\n                      <i class=\"material-icons\">{{row.status_file.file_type == 'pdf' ? 'picture_as_pdf' : 'image'}}</i>\r\n                    </a>\r\n                  </ng-container>\r\n                  <ng-template #noAttachment>--</ng-template>\r\n                </td>\r\n                <td class=\"w100 text-center\"><strong>{{row.total_qty && row.total_qty!=''?\r\n                    row.total_qty:'--'}}</strong></td>\r\n                <td class=\"w100 text-center\"><strong>{{row.transfer_point && row.transfer_point!=''?\r\n                    row.transfer_point:'--'}}</strong></td>\r\n                <td class=\"w150 text-center \" style=\"overflow:auto\" *ngIf=\"active_tab == 'Approved'\">\r\n                  {{row.unique_invoice_no && row.unique_invoice_no!=''? row.unique_invoice_no:'--'}}\r\n                  <!-- <div class=\"left-auto\" matTooltip=\"Edit Detail\" >\r\n\r\n                    <i class=\"material-icons\">edit</i>\r\n                     (click)=\" editUniqueInvoice(row.id,row.unique_invoice_no)\"\r\n\r\n                  </div> -->\r\n                </td>\r\n\r\n\r\n\r\n                <!-- <td class=\"w100 text-center\" matTooltip={{row.total_qty}}>{{row.total_qty && row.total_qty!=''? row.total_qty:'--'}}</td> -->\r\n\r\n                <!-- <td class=\"w120 text-center\"  *ngIf=\"row.status == 'Pending' || active_tab == 'Validated' \">\r\n                  <ng-container>\r\n                    <div class=\"flex-button\">\r\n                      <button mat-raised-button color=\"accent\"\r\n                      (click)=\"opengiftDialog(row.id,row.influencer_id,row.influencer_type,row.transfer_point,row.status,'purchase_status')\">Change Status</button>\r\n                    </div>\r\n                  </ng-container>\r\n\r\n                </td> -->\r\n\r\n                <!-- <td class=\"w100 text-center\">\r\n                  <strong class=\"yellow-clr\" *ngIf=\"row.status=='Pending'\">{{row.status}}</strong>\r\n                  <strong class=\"green-clr\" *ngIf=\"row.status=='Approved'\">{{row.status}}</strong>\r\n                  <strong class=\"red-clr\" *ngIf=\"row.status=='Reject'\">{{row.status}}</strong>\r\n                </td> -->\r\n\r\n                <!-- <div class=\"action-button text-right\">\r\n                    <a mat-icon-button matTooltip=\"Change Status\" (click)=\"changeStatus(row.id)\">\r\n                      <i class=\"material-icons edit\">edit</i>\r\n                    </a>\r\n                  </div> -->\r\n\r\n                <td class=\"w150 text-center\"\r\n                  *ngIf=\"active_tab == 'Reject' || active_tab == 'Approved' || active_tab == 'Hold'\">\r\n                  <div class=\"df ac jc-sb flex-gap-10\">\r\n                    <span>{{row.status_reason | titlecase}}</span>\r\n                    <a mat-icon-button matTooltip=\"Edit Remark\" \r\n                      (click)=\"editPurchaseRemark(row)\">\r\n                      <i class=\"material-icons edit\">edit</i>\r\n                    </a>\r\n                  </div>\r\n                </td>\r\n                <td class=\"w150 text-center\" *ngIf=\"active_tab != 'Pending' \">{{row.validated_by_name\r\n                  |titlecase}}({{row.validated_by_name && row.validated_by_name!=''? row.validated_by_name:'--'}})</td>\r\n\r\n                <td class=\"w150 text-center\"\r\n                  *ngIf=\"active_tab == 'Approved' || active_tab == 'Reject' || active_tab == 'Hold'\">\r\n                  {{row.status_updated_by_name |titlecase}}{{row.status_updated_by_mobile &&\r\n                  row.status_updated_by_mobile!=''? row.status_updated_by_mobile:'-'}}</td>\r\n                <td class=\"w100 text-center\"\r\n                  *ngIf=\"(active_tab == 'Approved' || active_tab == 'Hold' || active_tab == 'Validated'|| active_tab == 'Reject') && row.status_updated_by_date!='0000-00-00 00:00:00' \">\r\n                  {{row.status_updated_by_date | date :'dd MMM yyyy, h:mm a'}}</td>\r\n                <td class=\"w100 text-center\"\r\n                  *ngIf=\"(active_tab == 'Approved' || active_tab == 'Hold' || active_tab == 'Validated' || active_tab == 'Reject') && row.status_updated_by_date =='0000-00-00 00:00:00' \">\r\n                  N/A</td>\r\n\r\n\r\n\r\n\r\n\r\n              </tr>\r\n            </ng-container>\r\n            <ng-container *ngIf=\"loader\">\r\n              <tr class=\"sk-loading\" *ngFor=\"let row of [].constructor(10)\">\r\n                <td class=\"w60\">\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n                <td class=\"w100\">\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n                <td class=\"w150\">\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n                <td class=\"w100\">\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n\r\n                <td class=\"w200\">\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n                <td class=\"w120\">\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n                <!-- <td class=\"w100\">\r\n                  <div>&nbsp;</div>\r\n                </td> -->\r\n\r\n\r\n                <td class=\"w200\">\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n                <!-- <td class=\"w100\">\r\n                  <div>&nbsp;</div>\r\n                </td> -->\r\n                <td class=\"w100\">\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n                <td class=\"w150\">\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n                <td class=\"w100\">\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n                <td class=\"w100\">\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n                <td class=\"w80\">\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n                <td class=\"w100\">\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n                <td class=\"w160\"\r\n                  *ngIf=\"active_tab == 'Approved' || active_tab == 'Validated' || active_tab == 'Reject'\">\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n                <td class=\"w100\" *ngIf=\"active_tab == 'Approved' || active_tab == 'Validated'|| active_tab == 'Reject'\">\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n                <td class=\"w150\" *ngIf=\"active_tab == 'Approved'\">\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n\r\n                <td class=\"w100\">\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n                <td class=\"w100 text-center\" *ngIf=\"logined_user_data.edit_master=='1'\">\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n                <td class=\"w150\" *ngIf=\"active_tab == 'Reject'\">\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n\r\n                <td class=\"w150\" *ngIf=\"active_tab != 'Pending'\">\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n\r\n                <td class=\"w150\" *ngIf=\"active_tab == 'Approved' || active_tab == 'Validated'|| active_tab == 'Reject'\">\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n              </tr>\r\n            </ng-container>\r\n          </table>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <ng-container *ngIf=\"datanotofound==true && purchaselist.length == 0;\">\r\n      <app-not-result-found></app-not-result-found>\r\n    </ng-container>\r\n  </div>\r\n  <div>\r\n  </div>\r\n\r\n  <div class=\"fab-btns\" *ngIf=\"logined_user_data.export_Purchase=='1' || logined_user_data.add_Purchase=='1'\">\r\n    <button class=\"pulse excel\" mat-fab color=\"primary\" [ngClass]=\"{'pulse': fabBtnValue=='add'}\"\r\n      [matMenuTriggerFor]=\"menu\">\r\n      <i class=\"material-icons\">apps</i>\r\n      Action\r\n    </button>\r\n  </div>\r\n  <mat-menu #menu=\"matMenu\">\r\n\r\n    <button mat-menu-item routerLink=\"add-purchase\" *ngIf=\"logined_user_data.add_Purchase=='1'\">\r\n      <mat-icon>add</mat-icon>\r\n      <span>Add Purchase</span>\r\n    </button>\r\n    <button mat-menu-item (click)=\"downloadExcel('excel');\"\r\n      *ngIf=\"purchaselist.length > 0 &&  (logined_user_data.export_Purchase=='1')\">\r\n      <mat-icon>download</mat-icon>\r\n      <span>Download excel</span>\r\n    </button>\r\n    <!-- <button mat-menu-item (click)=\"upload_excel('insert');\" *ngIf=\"logined_user_data.import_master=='1'\">\r\n  <mat-icon>cloud_upload</mat-icon>\r\n  <span>Upload New Data</span>\r\n</button> -->\r\n    <!-- <button mat-menu-item (click)=\"upload_excel('update');\" *ngIf=\"purchaselist.length > 0 && logined_user_data.import_master=='1'\">\r\n  <mat-icon>update</mat-icon>\r\n  <span>Update Basic Data</span>\r\n</button> -->\r\n    <!-- <button mat-menu-item (click)=\"upload_excel('update_mrp');\" *ngIf=\"purchaselist.length > 0 && logined_user_data.import_master=='1'\">\r\n  <mat-icon>update</mat-icon>\r\n  <span>Update Price Data</span>\r\n</button> -->\r\n    <!-- <button mat-menu-item (click)=\"lastBtnValue('add')\" routerLink=\"add-product\" routerLinkActive=\"router-link-active\"\r\n  *ngIf=\"logined_user_data.add_master=='1' || logined_user_data.add_products_master=='1'\">\r\n  <mat-icon>add</mat-icon>\r\n  <span>Add New</span>\r\n</button> -->\r\n\r\n\r\n  </mat-menu>\r\n"

/***/ }),

/***/ "./src/app/purchase/purchase-list/purchase-list.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/purchase/purchase-list/purchase-list.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".flex-group {\n  display: flex;\n  align-items: center;\n  grid-column-gap: 5px;\n  justify-content: space-evenly;\n}\n\n.kyc-badge {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  font-size: 12px;\n  font-weight: 600;\n  text-transform: capitalize;\n}\n\n.kyc-badge i.material-icons {\n  font-size: 16px;\n  line-height: 1;\n}"

/***/ }),

/***/ "./src/app/purchase/purchase-list/purchase-list.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/purchase/purchase-list/purchase-list.component.ts ***!
  \*******************************************************************/
/*! exports provided: PurchaseListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PurchaseListComponent", function() { return PurchaseListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng6-toastr-notifications */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/ng6-toastr-notifications/fesm5/ng6-toastr-notifications.js");
/* harmony import */ var src_app_dialog_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/dialog.component */ "./src/app/dialog.component.ts");
/* harmony import */ var src_services_DatabaseService__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/_services/DatabaseService */ "./src/_services/DatabaseService.ts");
/* harmony import */ var src_app_localstorage_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/localstorage.service */ "./src/app/localstorage.service.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! moment */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var src_app_image_module_image_module_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/image-module/image-module.component */ "./src/app/image-module/image-module.component.ts");
/* harmony import */ var _change_status_change_status_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../change-status/change-status.component */ "./src/app/purchase/change-status/change-status.component.ts");
/* harmony import */ var src_app_redeem_status_modal_redeem_status_modal_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/redeem-status-modal/redeem-status-modal.component */ "./src/app/redeem-status-modal/redeem-status-modal.component.ts");












var PurchaseListComponent = /** @class */ (function () {
    function PurchaseListComponent(dialog, dialogs, alert, service, rout, toast, session) {
        this.dialog = dialog;
        this.dialogs = dialogs;
        this.alert = alert;
        this.service = service;
        this.rout = rout;
        this.toast = toast;
        this.session = session;
        this.active_tab = 'Pending';
        this.segmentList = [];
        this.SubcategoryList = [];
        this.purchaselist = [];
        this.filter = false;
        this.data = [];
        this.page_limit = 5;
        this.start = 0;
        this.brand_list = [];
        this.product_brand = [];
        this.category_list = [];
        this.subCategory_list = [];
        this.total_page = 0;
        this.pagenumber = 0;
        this.loader = false;
        this.tab_active = 'all';
        this.influencer_type = 'Ply Expert';
        this.filter_data = {};
        this.assign_login_data = {};
        this.logined_user_data = {};
        this.fabBtnValue = 'add';
        this.excelLoader = false;
        this.datanotofound = false;
        this.downurl = '';
        this.imgUrl = '';
        this.calenderInfo = [];
        // upload_excel(type) {
        //   const dialogRef = this.dialogs.open(ProductUploadComponent, {
        //     width: '500px',
        //     panelClass:'cs-modal',
        //     data: {
        //       'from': 'beat',
        //       'modal_type':type
        //     }
        //   });
        //   dialogRef.afterClosed().subscribe(result => {
        //     if(result != false){
        //       this.getPurchaseList('');
        //     }
        //   });
        // }
        this.excel_data = [];
        this.productdetail = [];
        this.page_limit = service.pageLimit;
        this.downurl = service.downloadUrl;
        // this.imgUrl = service.purchaseUrl
        this.assign_login_data = this.session.getSession();
        this.logined_user_data = this.assign_login_data.value.data;
        console.log(this.assign_login_data);
        console.log(this.logined_user_data);
        this.today_date = new Date();
        var now = new Date();
        this.currentMonth_no = now.getMonth() + 1;
        this.currentYear = now.getFullYear();
        this.PurchaseMonth = null;
        this.PurchaseYear = null;
    }
    PurchaseListComponent.prototype.ngOnInit = function () {
        this.filter_data = this.service.getData();
        console.log(this.filter_data);
        if (this.filter_data.status) {
            this.active_tab = this.filter_data.status;
        }
        if (this.filter_data.influencer_type) {
            this.influencer_type = this.filter_data.influencer_type;
        }
        if (this.filter_data.month) {
            this.PurchaseMonth = this.filter_data.month;
            this.PurchaseYear = this.filter_data.year;
        }
        this.getPurchaseList();
        this.getSegment();
    };
    PurchaseListComponent.prototype.pervious = function () {
        this.start = this.start - this.page_limit;
        this.getPurchaseList();
    };
    PurchaseListComponent.prototype.nextPage = function () {
        this.start = this.start + this.page_limit;
        this.getPurchaseList();
    };
    PurchaseListComponent.prototype.getPurchaseList = function (month, year) {
        var _this = this;
        if (month !== undefined && month !== null) {
            this.PurchaseMonth = month === 'all' ? null : month;
            this.PurchaseYear = month === 'all' ? null : year;
            this.start = 0;
        }
        if (this.pagenumber > this.total_page) {
            this.pagenumber = this.total_page;
            this.start = this.pageCount - this.page_limit;
        }
        if (this.start < 0) {
            this.start = 0;
        }
        this.filter_data.status = this.active_tab;
        this.filter_data.influencer_type = this.influencer_type;
        this.filter_data.month = this.PurchaseMonth;
        this.filter_data.year = this.PurchaseYear;
        var header = this.service.post_rqst({ 'filter': this.filter_data, 'start': this.start, 'pagelimit': this.page_limit, 'month': this.PurchaseMonth, 'year': this.PurchaseYear }, "RetailerRequest/get_retailer_request");
        this.loader = true;
        header.subscribe(function (result) {
            if (result['statusCode'] == 200) {
                _this.purchaselist = result['request_list'];
                _this.pageCount = result['count'];
                _this.tabCount = result['tab_count'];
                if (result['calenderInfo'] && result['calenderInfo'].length > 0) {
                    _this.calenderInfo = result['calenderInfo'];
                }
                _this.loader = false;
                if (_this.purchaselist.length == 0) {
                    _this.datanotofound = true;
                }
                else {
                    _this.datanotofound = false;
                    _this.loader = false;
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
            }
            else {
                _this.toast.errorToastr(result['statusMsg']);
                _this.datanotofound = true;
                _this.loader = false;
            }
        });
    };
    PurchaseListComponent.prototype.showItems = function (data, type) {
        var dialogRef = this.dialogs.open(_change_status_change_status_component__WEBPACK_IMPORTED_MODULE_10__["ChangeStatusComponent"], {
            width: '500px',
            panelClass: 'cs-modal',
            data: {
                itemData: data,
                image_type: type,
                from_Item: 'purchase-item'
            }
        });
        dialogRef.afterClosed().subscribe(function (result) {
        });
    };
    PurchaseListComponent.prototype.lastBtnValue = function (value) {
        this.fabBtnValue = value;
    };
    PurchaseListComponent.prototype.getSegment = function () {
        var _this = this;
        setTimeout(function () {
            _this.service.post_rqst({}, "Master/getProductCategoryList").subscribe((function (result) {
                if (result['category_list']['statusCode'] == 200) {
                    _this.segmentList = result['category_list']['segment_list'];
                }
            }));
        }, 2000);
    };
    PurchaseListComponent.prototype.getSubCatgory = function () {
        var _this = this;
        setTimeout(function () {
            _this.service.post_rqst({ 'id': _this.filter_data.segment }, "Master/subCategoryList").subscribe((function (result) {
                if (result['statusCode'] == 200) {
                    _this.SubcategoryList = result['result'];
                }
            }));
        }, 2000);
    };
    PurchaseListComponent.prototype.refresh = function () {
        this.start = 0;
        this.filter_data = {};
        this.getPurchaseList('all', '');
    };
    PurchaseListComponent.prototype.ItemsDetail = function (data) {
        var dialogRef = this.dialogs.open(_change_status_change_status_component__WEBPACK_IMPORTED_MODULE_10__["ChangeStatusComponent"], {
            width: '700px',
            panelClass: 'cs-modal',
            data: {
                itemData: data,
                from: 'item-detail'
            }
        });
        dialogRef.afterClosed().subscribe(function (result) {
        });
    };
    PurchaseListComponent.prototype.Filter = function () {
        this.filter = true;
    };
    PurchaseListComponent.prototype.close = function () {
        this.filter = false;
    };
    PurchaseListComponent.prototype.date_format = function () {
        if (this.filter_data.date_created) {
            this.filter_data.date_created = moment__WEBPACK_IMPORTED_MODULE_8__(this.filter_data.date_created).format('YYYY-MM-DD');
            this.getPurchaseList();
        }
        else if (this.filter_data.status_updated_on) {
            this.filter_data.status_updated_on = moment__WEBPACK_IMPORTED_MODULE_8__(this.filter_data.status_updated_on).format('YYYY-MM-DD');
            this.getPurchaseList();
        }
    };
    PurchaseListComponent.prototype.goToImage = function (image) {
        var dialogRef = this.dialogs.open(src_app_image_module_image_module_component__WEBPACK_IMPORTED_MODULE_9__["ImageModuleComponent"], {
            panelClass: 'Image-modal',
            data: {
                'image': image,
                'type': 'base64'
            }
        });
        dialogRef.afterClosed().subscribe(function (result) {
        });
    };
    PurchaseListComponent.prototype.changeStatus = function (id) {
        var dialogRef = this.dialogs.open(_change_status_change_status_component__WEBPACK_IMPORTED_MODULE_10__["ChangeStatusComponent"], {
            width: '800px',
            panelClass: 'cs-modal',
            data: {
                id: id,
                from: 'purchase-list'
            }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            // if(result != false){
            //   this.getPurchaseList(this.active_tab);
            // }
        });
    };
    PurchaseListComponent.prototype.updateStatus = function (index, id, event) {
        var _this = this;
        if (event.checked == false) {
            this.alert.confirm("You Want To Change Status !").then(function (result) {
                if (result) {
                    if (event.checked == false) {
                        _this.purchaselist[index].status = "0";
                    }
                    else {
                        _this.purchaselist[index].status = "1";
                    }
                    var value = _this.purchaselist[index].status;
                    _this.service.post_rqst({ 'product_id': id, 'status': value, 'status_changed_by': _this.logined_user_data.id, 'status_changed_by_name': _this.logined_user_data.name }, "Master/productStatusChange")
                        .subscribe(function (resp) {
                        if (resp['statusCode'] == '200') {
                            if (resp['statusMsg'] == "Status Updated Successfully") {
                                _this.toast.successToastr("Status Changed Successfully");
                            }
                            else {
                                _this.toast.errorToastr("OOPs ! Failed To Status Changed");
                            }
                            _this.getPurchaseList();
                        }
                        else {
                            _this.toast.errorToastr(resp['statusMsg']);
                        }
                    });
                }
            });
        }
        else if (event.checked == true) {
            this.alert.confirm("You Want To Change Status !").then(function (result) {
                if (result) {
                    if (event.checked == false) {
                        _this.purchaselist[index].status = "0";
                    }
                    else {
                        _this.purchaselist[index].status = "1";
                    }
                    var value = _this.purchaselist[index].status;
                    _this.service.post_rqst({ 'product_id': id, 'status': value, 'status_changed_by': _this.logined_user_data.id, 'status_changed_by_name': _this.logined_user_data.name }, "Master/productStatusChange")
                        .subscribe(function (resp) {
                        if (resp['statusCode'] == '200') {
                            if (resp['statusMsg'] == "Status Updated Successfully") {
                                _this.toast.successToastr("Status Changed Successfully");
                            }
                            else {
                                _this.toast.errorToastr("OOPs ! Failed To Status Changed");
                            }
                            _this.getPurchaseList();
                        }
                        else {
                            _this.toast.errorToastr(resp['statusMsg']);
                        }
                    });
                }
            });
        }
    };
    PurchaseListComponent.prototype.downloadExcel = function () {
        var _this = this;
        this.filter_data.status = this.active_tab;
        this.filter_data.influencer_type = this.influencer_type;
        this.service.post_rqst({ 'filter': this.filter_data }, "Excel/purchase_list_for_excel").subscribe((function (result) {
            if (result['msg'] == true) {
                window.open(_this.downurl + result['filename']);
                _this.getPurchaseList();
            }
            else {
            }
        }));
    };
    PurchaseListComponent.prototype.opengiftDialog = function (id, influencer_id, influcerType, transfer_point, status, type) {
        var _this = this;
        var dialogRef = this.dialogs.open(src_app_redeem_status_modal_redeem_status_modal_component__WEBPACK_IMPORTED_MODULE_11__["RedeemStatusModalComponent"], {
            width: '400px', data: {
                'id': id,
                'influencerId': influencer_id,
                'influencerType': influcerType,
                'transfer_point': transfer_point,
                'status': status,
                'delivery_from': type
            }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            _this.getPurchaseList();
        });
    };
    PurchaseListComponent.prototype.editUniqueInvoice = function (id, unique_invoice_no) {
        var _this = this;
        var dialogRef = this.dialogs.open(src_app_redeem_status_modal_redeem_status_modal_component__WEBPACK_IMPORTED_MODULE_11__["RedeemStatusModalComponent"], {
            width: '400px', data: {
                'id': id,
                'unique_invoice_no': unique_invoice_no,
                'delivery_from': 'editUniqueInvoice'
            }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            _this.getPurchaseList();
        });
    };
    PurchaseListComponent.prototype.editPurchaseRemark = function (row) {
        var _this = this;
        var dialogRef = this.dialogs.open(src_app_redeem_status_modal_redeem_status_modal_component__WEBPACK_IMPORTED_MODULE_11__["RedeemStatusModalComponent"], {
            width: '400px',
            data: {
                'id': row.id,
                'influencerId': row.influencer_id,
                'influencerType': row.influencer_type,
                'influence_status': row.status,
                'status_reason': row.status_reason,
                'purchaseData': row,
                'delivery_from': 'purchaseRemarkEdit'
            }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result) {
                _this.getPurchaseList();
            }
        });
    };
    PurchaseListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-purchase-list',
            template: __webpack_require__(/*! ./purchase-list.component.html */ "./src/app/purchase/purchase-list/purchase-list.component.html"),
            styles: [__webpack_require__(/*! ./purchase-list.component.scss */ "./src/app/purchase/purchase-list/purchase-list.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_dialog_component__WEBPACK_IMPORTED_MODULE_5__["DialogComponent"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"], src_app_dialog_component__WEBPACK_IMPORTED_MODULE_5__["DialogComponent"], src_services_DatabaseService__WEBPACK_IMPORTED_MODULE_6__["DatabaseService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_4__["ToastrManager"], src_app_localstorage_service__WEBPACK_IMPORTED_MODULE_7__["sessionStorage"]])
    ], PurchaseListComponent);
    return PurchaseListComponent;
}());



/***/ }),

/***/ "./src/app/purchase/purchase-module/purchase.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/purchase/purchase-module/purchase.module.ts ***!
  \*************************************************************/
/*! exports provided: PurchaseModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PurchaseModule", function() { return PurchaseModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var src_app_auth_component_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/auth-component.guard */ "./src/app/auth-component.guard.ts");
/* harmony import */ var _purchase_list_purchase_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../purchase-list/purchase-list.component */ "./src/app/purchase/purchase-list/purchase-list.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_app_utility_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/app-utility.module */ "./src/app/app-utility.module.ts");
/* harmony import */ var src_app_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/material */ "./src/app/material.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var ngx_mat_select_search__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-mat-select-search */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/ngx-mat-select-search/fesm5/ngx-mat-select-search.js");
/* harmony import */ var src_app_distribution_distribution_detail_distribution_detail_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/distribution/distribution-detail/distribution-detail.component */ "./src/app/distribution/distribution-detail/distribution-detail.component.ts");
/* harmony import */ var _loyalty_purchase_detail_loyalty_purchase_detail_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../loyalty-purchase-detail/loyalty-purchase-detail.component */ "./src/app/purchase/loyalty-purchase-detail/loyalty-purchase-detail.component.ts");
/* harmony import */ var _change_status_change_status_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../change-status/change-status.component */ "./src/app/purchase/change-status/change-status.component.ts");
/* harmony import */ var src_app_order_order_detail_order_detail_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/order/order-detail/order-detail.component */ "./src/app/order/order-detail/order-detail.component.ts");
/* harmony import */ var src_app_order_secondary_order_detail_secondary_order_detail_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/app/order/secondary-order-detail/secondary-order-detail.component */ "./src/app/order/secondary-order-detail/secondary-order-detail.component.ts");
/* harmony import */ var src_app_distribution_add_distribution_add_distribution_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! src/app/distribution/add-distribution/add-distribution.component */ "./src/app/distribution/add-distribution/add-distribution.component.ts");
/* harmony import */ var src_app_distribution_dist_primary_order_add_dist_primary_order_add_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! src/app/distribution/dist-primary-order-add/dist-primary-order-add.component */ "./src/app/distribution/dist-primary-order-add/dist-primary-order-add.component.ts");
/* harmony import */ var src_app_billing_detail_billing_detail_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! src/app/billing-detail/billing-detail.component */ "./src/app/billing-detail/billing-detail.component.ts");
/* harmony import */ var src_app_order_secondary_order_add_secondary_order_add_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! src/app/order/secondary-order-add/secondary-order-add.component */ "./src/app/order/secondary-order-add/secondary-order-add.component.ts");
/* harmony import */ var _add_purchase_add_purchase_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../add-purchase/add-purchase.component */ "./src/app/purchase/add-purchase/add-purchase.component.ts");





















// import { ChangeStatusComponent } from '../change-status/change-status.component';
var purchaseRoutes = [
    {
        path: "", children: [
            { path: '', component: _purchase_list_purchase_list_component__WEBPACK_IMPORTED_MODULE_4__["PurchaseListComponent"], canActivate: [src_app_auth_component_guard__WEBPACK_IMPORTED_MODULE_3__["AuthComponentGuard"]], data: { expectedRole: ['1'] } },
            { path: 'add-purchase', component: _add_purchase_add_purchase_component__WEBPACK_IMPORTED_MODULE_20__["AddPurchaseComponent"], canActivate: [src_app_auth_component_guard__WEBPACK_IMPORTED_MODULE_3__["AuthComponentGuard"]], data: { expectedRole: ['1'] } },
            // {path:'influencer-detail/:id/:type_id', component: InfluencerDetailComponent,canActivate:[AuthComponentGuard], data:{ expectedRole: ['1']}},
            {
                path: "purchase-detail/:id", children: [
                    { path: '', component: _loyalty_purchase_detail_loyalty_purchase_detail_component__WEBPACK_IMPORTED_MODULE_12__["LoyaltyPurchaseDetailComponent"], canActivate: [src_app_auth_component_guard__WEBPACK_IMPORTED_MODULE_3__["AuthComponentGuard"]], data: { expectedRole: ['1', '2'] } },
                ]
            },
            {
                path: "distribution-detail/:id/:tabtype", children: [
                    { path: "", component: src_app_distribution_distribution_detail_distribution_detail_component__WEBPACK_IMPORTED_MODULE_11__["DistributionDetailComponent"], canActivate: [src_app_auth_component_guard__WEBPACK_IMPORTED_MODULE_3__["AuthComponentGuard"]], data: { expectedRole: ['1', '2'] } },
                    { path: 'order-detail/:id', component: src_app_order_order_detail_order_detail_component__WEBPACK_IMPORTED_MODULE_14__["OrderDetailComponent"], canActivate: [src_app_auth_component_guard__WEBPACK_IMPORTED_MODULE_3__["AuthComponentGuard"]], data: { expectedRole: ['1', '2'] } },
                    { path: 'secondary-order-detail/:id', component: src_app_order_secondary_order_detail_secondary_order_detail_component__WEBPACK_IMPORTED_MODULE_15__["SecondaryOrderDetailComponent"], canActivate: [src_app_auth_component_guard__WEBPACK_IMPORTED_MODULE_3__["AuthComponentGuard"]], data: { expectedRole: ['1', '2'] } },
                    { path: "edit-distribution/:type/:id/:pageType", component: src_app_distribution_add_distribution_add_distribution_component__WEBPACK_IMPORTED_MODULE_16__["AddDistributionComponent"], canActivate: [src_app_auth_component_guard__WEBPACK_IMPORTED_MODULE_3__["AuthComponentGuard"]], data: { expectedRole: ['1'] } },
                    { path: "add-primary-order", component: src_app_distribution_dist_primary_order_add_dist_primary_order_add_component__WEBPACK_IMPORTED_MODULE_17__["DistPrimaryOrderAddComponent"], canActivate: [src_app_auth_component_guard__WEBPACK_IMPORTED_MODULE_3__["AuthComponentGuard"]], data: { expectedRole: ['1'] } },
                    { path: "secondary-order-add", component: src_app_order_secondary_order_add_secondary_order_add_component__WEBPACK_IMPORTED_MODULE_19__["SecondaryOrderAddComponent"], canActivate: [src_app_auth_component_guard__WEBPACK_IMPORTED_MODULE_3__["AuthComponentGuard"]], data: { expectedRole: ['1'] } },
                    { path: 'billing-details/:id', component: src_app_billing_detail_billing_detail_component__WEBPACK_IMPORTED_MODULE_18__["BillingDetailComponent"], canActivate: [src_app_auth_component_guard__WEBPACK_IMPORTED_MODULE_3__["AuthComponentGuard"]], data: { expectedRole: ['1'] } },
                ]
            },
        ]
    }
];
var PurchaseModule = /** @class */ (function () {
    function PurchaseModule() {
    }
    PurchaseModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_purchase_list_purchase_list_component__WEBPACK_IMPORTED_MODULE_4__["PurchaseListComponent"], _change_status_change_status_component__WEBPACK_IMPORTED_MODULE_13__["ChangeStatusComponent"], _add_purchase_add_purchase_component__WEBPACK_IMPORTED_MODULE_20__["AddPurchaseComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild(purchaseRoutes),
                src_app_app_utility_module__WEBPACK_IMPORTED_MODULE_6__["AppUtilityModule"],
                src_app_material__WEBPACK_IMPORTED_MODULE_7__["MaterialModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatIconModule"],
                ngx_mat_select_search__WEBPACK_IMPORTED_MODULE_10__["NgxMatSelectSearchModule"],
            ],
            entryComponents: [
                _change_status_change_status_component__WEBPACK_IMPORTED_MODULE_13__["ChangeStatusComponent"],
            ]
        })
    ], PurchaseModule);
    return PurchaseModule;
}());



/***/ })

}]);