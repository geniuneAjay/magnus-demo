(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["discount-discount-module-discount-module-module"],{

/***/ "./src/app/discount/add-discount/add-discount.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/discount/add-discount/add-discount.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-container\">\r\n  <app-loader *ngIf=\"loader\"></app-loader>\r\n  <div class=\"tools-container\">\r\n    <a mat-icon-button matTooltip=\"Back\" (click)=\"back()\">\r\n      <i class=\"material-icons\">arrow_back</i>\r\n    </a>\r\n    <h2>{{id ? 'Edit':'Add New'}} Discount - Brand <span style=\"color:#7777eb\">({{data.brand_name}})</span></h2>\r\n  </div>\r\n\r\n  <div class=\"container pt10 pl10 pr10 pb50\">\r\n\r\n    <!-- dealer -->\r\n    <!-- <form #f=\"ngForm\" (ngSubmit)=\"f.valid && submit()\">\r\n      <div class=\"row\">\r\n        <div class=\"col s12\">\r\n          <div class=\"card pb0\">\r\n            <div class=\"card-head\">\r\n              <h2>Dealer Discount</h2>\r\n            </div>\r\n            <div class=\"card-body cs-form\">\r\n              <div class=\"row\">\r\n                <div class=\"col s12 m3 l4\">\r\n                  <mat-form-field appearance=\"outline\"\r\n                    [ngClass]=\"{'has-error' : category?.invalid || category.touched } \">\r\n                    <mat-label>Category</mat-label>\r\n                    <input matInput placeholder=\"Type Here ...\" name=\"category\" #category=\"ngModel\"\r\n                      [(ngModel)]=\"data.category\" readonly>\r\n                  </mat-form-field>\r\n                  <div class=\"alert alert-danger\" *ngIf=\"f.submitted && category?.invalid\">\r\n                    This field is required\r\n                  </div>\r\n                </div>\r\n\r\n                <div class=\"col s12 m3 l4\">\r\n                  <mat-form-field appearance=\"outline\"\r\n                    [ngClass]=\"{'has-error' : dealer_basic_discount?.invalid || dealer_basic_discount.touched } \">\r\n                    <mat-label>Dealer Basic Discount</mat-label>\r\n                    <input matInput placeholder=\"Type Here ...\" name=\"dealer_basic_discount\" min=\"1\" max=\"100\" maxlength=\"3\"\r\n                      #dealer_basic_discount=\"ngModel\" [(ngModel)]=\"data.dealer_basic_discount\" (input)=\"calculateDealerDiscount()\" required>\r\n                  </mat-form-field>\r\n                  <div class=\"alert alert-danger\" *ngIf=\"f.submitted && dealer_basic_discount?.invalid\">\r\n                    This field is required\r\n                  </div>\r\n                </div>\r\n\r\n\r\n\r\n                <div class=\"col s12 m3 l4\">\r\n                  <mat-form-field appearance=\"outline\" [ngClass]=\"{'has-error' : dealer_sr_discount.invalid } \">\r\n                    <mat-label>Dealer Sr Discount</mat-label>\r\n                    <input matInput placeholder=\"Type Here ...\" name=\"dealer_sr_discount\" min=\"1\" max=\"100\" maxlength=\"3\" #dealer_sr_discount=\"ngModel\"\r\n                      [(ngModel)]=\"data.dealer_sr_discount\" (input)=\"calculateDealerDiscount()\">\r\n                  </mat-form-field>\r\n                  <div class=\"alert alert-danger\" *ngIf=\"f.submitted && dealer_sr_discount?.invalid\">\r\n                    This field is required\r\n                  </div>\r\n                </div>\r\n\r\n                <div class=\"col s12 m3 l4\">\r\n                  <mat-form-field appearance=\"outline\" [ngClass]=\"{'has-error' : dealer_cd_discount.invalid } \">\r\n                    <mat-label>Dealer Cd Discount</mat-label>\r\n                    <input matInput placeholder=\"Type Here ...\" name=\"dealer_cd_discount\" min=\"1\" max=\"100\" maxlength=\"3\" #dealer_cd_discount=\"ngModel\"\r\n                      [(ngModel)]=\"data.dealer_cd_discount\" (input)=\"calculateDealerDiscount()\">\r\n                  </mat-form-field>\r\n                  <div class=\"alert alert-danger\" *ngIf=\"f.submitted && dealer_cd_discount?.invalid\">\r\n                    This field is required\r\n                  </div>\r\n                </div>\r\n              </div>\r\n\r\n              <div class=\"row\">\r\n                <div class=\"col s12 m3 l4\">\r\n                  <mat-form-field appearance=\"outline\" [ngClass]=\"{'has-error' : dealer_dd_discount.invalid } \">\r\n                    <mat-label>Dealer Dd Discount</mat-label>\r\n                    <input matInput placeholder=\"Type Here ...\" name=\"dealer_dd_discount\" min=\"1\" max=\"100\" maxlength=\"3\" #dealer_dd_discount=\"ngModel\"\r\n                      [(ngModel)]=\"data.dealer_dd_discount\" (input)=\"calculateDealerDiscount()\">\r\n                  </mat-form-field>\r\n                  <div class=\"alert alert-danger\" *ngIf=\"f.submitted && dealer_dd_discount?.invalid\">\r\n                    This field is required\r\n                  </div>\r\n                </div>\r\n\r\n                <div class=\"col s12 m3 l4\">\r\n                  <mat-form-field appearance=\"outline\" [ngClass]=\"{'has-error' : dealer_family_discount.invalid } \">\r\n                    <mat-label>Dealer Family Discount</mat-label>\r\n                    <input matInput placeholder=\"Type Here ...\" name=\"dealer_family_discount\" min=\"1\" max=\"100\" maxlength=\"3\"\r\n                      #dealer_family_discount=\"ngModel\" [(ngModel)]=\"data.dealer_family_discount\" (input)=\"calculateDealerDiscount()\">\r\n                  </mat-form-field>\r\n                  <div class=\"alert alert-danger\" *ngIf=\"f.submitted && dealer_family_discount?.invalid\">\r\n                    This field is required\r\n                  </div>\r\n                </div>\r\n\r\n                <div class=\"col s12 m3 l4\">\r\n                  <mat-form-field appearance=\"outline\" [ngClass]=\"{'has-error' : dealer_ss_discount.invalid } \">\r\n                    <mat-label>Dealer Ss Discount</mat-label>\r\n                    <input matInput placeholder=\"Type Here ...\" name=\"dealer_ss_discount\" min=\"1\" max=\"100\" maxlength=\"3\" #dealer_ss_discount=\"ngModel\"\r\n                      [(ngModel)]=\"data.dealer_ss_discount\" (input)=\"calculateDealerDiscount()\">\r\n                  </mat-form-field>\r\n                  <div class=\"alert alert-danger\" *ngIf=\"f.submitted && dealer_ss_discount?.invalid\">\r\n                    This field is required\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"row mb0\">\r\n               \r\n                <div class=\"row mb0\">\r\n                  <div class=\"col s12 m3 l4\">\r\n                    <mat-form-field appearance=\"outline\" [ngClass]=\"{'has-error' : dealer_total_discount.invalid } \">\r\n                      <mat-label>Total Dealer Discount</mat-label>\r\n                      <input matInput placeholder=\"Type Here ...\" name=\"dealer_total_discount\" #dealer_total_discount=\"ngModel\"\r\n                        [(ngModel)]=\"data.dealer_total_discount\" readonly>\r\n                    </mat-form-field>\r\n                    <div class=\"alert alert-danger\" *ngIf=\"f.submitted && dealer_total_discount?.invalid\">\r\n                      This field is required\r\n                    </div>\r\n                  </div>\r\n                </div> \r\n              </div> \r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </form> -->\r\n\r\n    <!-- distributor -->\r\n    <form #f=\"ngForm\" (ngSubmit)=\"f.valid && submit()\">\r\n      <div class=\"row\">\r\n        <div class=\"col s12\">\r\n          <div class=\"card pb0\">\r\n            <div class=\"card-head\">\r\n              <h2>{{lastPageData.activeTab}} Discount</h2>\r\n            </div>\r\n            <div class=\"card-body cs-form\" *ngIf=\"lastPageData.activeTab == 'Distributor'\">\r\n              <div class=\"row\">\r\n                <div class=\"col s12 m3 l4\">\r\n                  <mat-form-field appearance=\"outline\"\r\n                    [ngClass]=\"{'has-error' : discount_1?.invalid || discount_1.touched } \">\r\n                    <mat-label>{{lastPageData.activeTab}} Discount 1</mat-label>\r\n                    <input matInput placeholder=\"Type Here ...\" name=\"discount_1\"\r\n                      min=\"1\" max=\"100\" maxlength=\"3\"\r\n                      #discount_1=\"ngModel\" [(ngModel)]=\"data.discount_1\"\r\n                      (input)=\"calculateDiscount()\" required>\r\n                  </mat-form-field>\r\n                  <div class=\"alert alert-danger\" *ngIf=\"f.submitted && discount_1?.invalid\">\r\n                    This field is required\r\n                  </div>\r\n                </div>\r\n\r\n                <div class=\"col s12 m3 l4\">\r\n                  <mat-form-field appearance=\"outline\" [ngClass]=\"{'has-error' : discount_2.invalid } \">\r\n                    <mat-label>{{lastPageData.activeTab}} Discount 2</mat-label>\r\n                    <input matInput placeholder=\"Type Here ...\" name=\"discount_2\"\r\n                      min=\"1\" max=\"100\" maxlength=\"3\"\r\n                      #discount_2=\"ngModel\" [(ngModel)]=\"data.discount_2\"\r\n                      (input)=\"calculateDiscount()\">\r\n                  </mat-form-field>\r\n                  <div class=\"alert alert-danger\" *ngIf=\"f.submitted && discount_2?.invalid\">\r\n                    This field is required\r\n                  </div>\r\n                </div>\r\n\r\n                <div class=\"col s12 m3 l4\">\r\n                  <mat-form-field appearance=\"outline\" [ngClass]=\"{'has-error' : discount_3.invalid } \">\r\n                    <mat-label>{{lastPageData.activeTab}} Discount 3</mat-label>\r\n                    <input matInput placeholder=\"Type Here ...\" name=\"discount_3\"\r\n                      min=\"1\" max=\"100\" maxlength=\"3\"\r\n                      #discount_3=\"ngModel\" [(ngModel)]=\"data.discount_3\"\r\n                      (input)=\"calculateDiscount()\">\r\n                  </mat-form-field>\r\n                  <div class=\"alert alert-danger\" *ngIf=\"f.submitted && discount_3?.invalid\">\r\n                    This field is required\r\n                  </div>\r\n                </div>\r\n              </div>\r\n\r\n              <div class=\"row\">\r\n                <div class=\"col s12 m3 l4\">\r\n                  <mat-form-field appearance=\"outline\" [ngClass]=\"{'has-error' : discount_4.invalid } \">\r\n                    <mat-label>{{lastPageData.activeTab}} Discount 4</mat-label>\r\n                    <input matInput placeholder=\"Type Here ...\" name=\"discount_4\"\r\n                      min=\"1\" max=\"100\" maxlength=\"3\"\r\n                      #discount_4=\"ngModel\" [(ngModel)]=\"data.discount_4\"\r\n                      (input)=\"calculateDiscount()\">\r\n                  </mat-form-field>\r\n                  <div class=\"alert alert-danger\" *ngIf=\"f.submitted && discount_4?.invalid\">\r\n                    This field is required\r\n                  </div>\r\n                </div>\r\n\r\n                <div class=\"col s12 m3 l4\">\r\n                  <mat-form-field appearance=\"outline\"\r\n                    [ngClass]=\"{'has-error' : discount_5.invalid } \">\r\n                    <mat-label>{{lastPageData.activeTab}} Discount 5</mat-label>\r\n                    <input matInput placeholder=\"Type Here ...\" name=\"discount_5\"\r\n                      min=\"1\" max=\"100\" maxlength=\"3\"\r\n                      #discount_5=\"ngModel\" [(ngModel)]=\"data.discount_5\"\r\n                      (input)=\"calculateDiscount()\">\r\n                  </mat-form-field>\r\n                  <div class=\"alert alert-danger\" *ngIf=\"f.submitted && discount_5?.invalid\">\r\n                    This field is required\r\n                  </div>\r\n                </div>\r\n\r\n                <div class=\"col s12 m3 l4\">\r\n                  <mat-form-field appearance=\"outline\" [ngClass]=\"{'has-error' : discount_6.invalid } \">\r\n                    <mat-label>{{lastPageData.activeTab}} Discount 6</mat-label>\r\n                    <input matInput placeholder=\"Type Here ...\" name=\"discount_6\"\r\n                      min=\"1\" max=\"100\" maxlength=\"3\"\r\n                      #discount_6=\"ngModel\" [(ngModel)]=\"data.discount_6\"\r\n                      (input)=\"calculateDiscount()\">\r\n                  </mat-form-field>\r\n                  <div class=\"alert alert-danger\" *ngIf=\"f.submitted && discount_6?.invalid\">\r\n                    This field is required\r\n                  </div>\r\n                  </div>\r\n                  <div class=\"col s12 m3 l4\">\r\n                    <mat-form-field appearance=\"outline\" [ngClass]=\"{'has-error' : discount_7.invalid } \">\r\n                      <mat-label>{{lastPageData.activeTab}} Discount 7</mat-label>\r\n                      <input matInput placeholder=\"Type Here ...\" name=\"discount_7\"\r\n                        min=\"1\" max=\"100\" maxlength=\"3\"\r\n                        #discount_7=\"ngModel\" [(ngModel)]=\"data.discount_7\"\r\n                        (input)=\"calculateDiscount()\">\r\n                    </mat-form-field>\r\n                    <div class=\"alert alert-danger\" *ngIf=\"f.submitted && discount_7?.invalid\">\r\n                      This field is required\r\n                    </div>\r\n                  </div>\r\n                    <div class=\"col s12 m3 l4\">\r\n                      <mat-form-field appearance=\"outline\" [ngClass]=\"{'has-error' : discount_8.invalid } \">\r\n                        <mat-label>{{lastPageData.activeTab}} Discount 8</mat-label>\r\n                        <input matInput placeholder=\"Type Here ...\" name=\"discount_8\"\r\n                          min=\"1\" max=\"100\" maxlength=\"3\"\r\n                          #discount_8=\"ngModel\" [(ngModel)]=\"data.discount_8\"\r\n                          (input)=\"calculateDiscount()\">\r\n                      </mat-form-field>\r\n                      <div class=\"alert alert-danger\" *ngIf=\"f.submitted && discount_8?.invalid\">\r\n                        This field is required\r\n                      </div>\r\n                </div>\r\n\r\n                <div class=\"col s12 m3 l4\">\r\n                  <mat-form-field appearance=\"outline\" [ngClass]=\"{'has-error' : discount_9.invalid } \">\r\n                    <mat-label>{{lastPageData.activeTab}} Discount 9</mat-label>\r\n                    <input matInput placeholder=\"Type Here ...\" name=\"discount_9\"\r\n                      min=\"1\" max=\"100\" maxlength=\"3\"\r\n                      #discount_9=\"ngModel\" [(ngModel)]=\"data.discount_9\"\r\n                      (input)=\"calculateDiscount()\">\r\n                  </mat-form-field>\r\n                  <div class=\"alert alert-danger\" *ngIf=\"f.submitted && discount_9?.invalid\">\r\n                    This field is required\r\n                  </div>\r\n                </div>\r\n\r\n                <div class=\"col s12 m3 l4\">\r\n                  <mat-form-field appearance=\"outline\" [ngClass]=\"{'has-error' : discount_10.invalid } \">\r\n                    <mat-label>{{lastPageData.activeTab}} Discount 10</mat-label>\r\n                    <input matInput placeholder=\"Type Here ...\" name=\"discount_10\"\r\n                      min=\"1\" max=\"100\" maxlength=\"3\"\r\n                      #discount_10=\"ngModel\" [(ngModel)]=\"data.discount_10\"\r\n                      (input)=\"calculateDiscount()\">\r\n                  </mat-form-field>\r\n                  <div class=\"alert alert-danger\" *ngIf=\"f.submitted && discount_10?.invalid\">\r\n                    This field is required\r\n                  </div>\r\n                </div>\r\n\r\n                <div class=\"col s12 m3 l4\">\r\n                  <mat-form-field appearance=\"outline\" [ngClass]=\"{'has-error' : discount_11.invalid } \">\r\n                    <mat-label>{{lastPageData.activeTab}} Discount 11</mat-label>\r\n                    <input matInput placeholder=\"Type Here ...\" name=\"discount_11\"\r\n                      min=\"1\" max=\"100\" maxlength=\"3\"\r\n                      #discount_11=\"ngModel\" [(ngModel)]=\"data.discount_11\"\r\n                      (input)=\"calculateDiscount()\">\r\n                  </mat-form-field>\r\n                  <div class=\"alert alert-danger\" *ngIf=\"f.submitted && discount_11?.invalid\">\r\n                    This field is required\r\n                  </div>\r\n                </div>\r\n\r\n                <div class=\"col s12 m3 l4\">\r\n                  <mat-form-field appearance=\"outline\" [ngClass]=\"{'has-error' : discount_12.invalid } \">\r\n                    <mat-label>{{lastPageData.activeTab}} Discount 12</mat-label>\r\n                    <input matInput placeholder=\"Type Here ...\" name=\"discount_12\"\r\n                      min=\"1\" max=\"100\" maxlength=\"3\"\r\n                      #discount_12=\"ngModel\" [(ngModel)]=\"data.discount_12\"\r\n                      (input)=\"calculateDiscount()\">\r\n                  </mat-form-field>\r\n                  <div class=\"alert alert-danger\" *ngIf=\"f.submitted && discount_12?.invalid\">\r\n                    This field is required\r\n                  </div>\r\n                </div>\r\n\r\n                <div class=\"col s12 m3 l4\">\r\n                  <mat-form-field appearance=\"outline\" [ngClass]=\"{'has-error' : discount_13.invalid } \">\r\n                    <mat-label>{{lastPageData.activeTab}} Discount 13</mat-label>\r\n                    <input matInput placeholder=\"Type Here ...\" name=\"discount_13\"\r\n                      min=\"1\" max=\"100\" maxlength=\"3\"\r\n                      #discount_13=\"ngModel\" [(ngModel)]=\"data.discount_13\"\r\n                      (input)=\"calculateDiscount()\">\r\n                  </mat-form-field>\r\n                  <div class=\"alert alert-danger\" *ngIf=\"f.submitted && discount_13?.invalid\">\r\n                    This field is required\r\n                  </div>\r\n                </div>\r\n\r\n                <div class=\"col s12 m3 l4\">\r\n                  <mat-form-field appearance=\"outline\" [ngClass]=\"{'has-error' : discount_14.invalid } \">\r\n                    <mat-label>{{lastPageData.activeTab}} Discount 14</mat-label>\r\n                    <input matInput placeholder=\"Type Here ...\" name=\"discount_14\"\r\n                      min=\"1\" max=\"100\" maxlength=\"3\"\r\n                      #discount_14=\"ngModel\" [(ngModel)]=\"data.discount_14\"\r\n                      (input)=\"calculateDiscount()\">\r\n                  </mat-form-field>\r\n                  <div class=\"alert alert-danger\" *ngIf=\"f.submitted && discount_14?.invalid\">\r\n                    This field is required\r\n                  </div>\r\n                </div>\r\n\r\n                <div class=\"col s12 m3 l4\">\r\n                  <mat-form-field appearance=\"outline\" [ngClass]=\"{'has-error' : discount_15.invalid } \">\r\n                    <mat-label>{{lastPageData.activeTab}} Discount 15</mat-label>\r\n                    <input matInput placeholder=\"Type Here ...\" name=\"discount_15\"\r\n                      min=\"1\" max=\"100\" maxlength=\"3\"\r\n                      #discount_15=\"ngModel\" [(ngModel)]=\"data.discount_15\"\r\n                      (input)=\"calculateDiscount()\">\r\n                  </mat-form-field>\r\n                  <div class=\"alert alert-danger\" *ngIf=\"f.submitted && discount_15?.invalid\">\r\n                    This field is required\r\n                  </div>\r\n                </div>\r\n\r\n                <div class=\"col s12 m3 l4\">\r\n                  <mat-form-field appearance=\"outline\" [ngClass]=\"{'has-error' : discount_16.invalid } \">\r\n                    <mat-label>{{lastPageData.activeTab}} Discount 16</mat-label>\r\n                    <input matInput placeholder=\"Type Here ...\" name=\"discount_16\"\r\n                      min=\"1\" max=\"100\" maxlength=\"3\"\r\n                      #discount_16=\"ngModel\" [(ngModel)]=\"data.discount_16\"\r\n                      (input)=\"calculateDiscount()\">\r\n                  </mat-form-field>\r\n                  <div class=\"alert alert-danger\" *ngIf=\"f.submitted && discount_16?.invalid\">\r\n                    This field is required\r\n                  </div>\r\n                </div>\r\n\r\n\r\n                <!-- <div class=\"row mb0\">\r\n                  <div class=\"col s12 m3 l4\">\r\n                    <mat-form-field appearance=\"outline\"\r\n                      [ngClass]=\"{'has-error' : distributor_total_discount.invalid } \">\r\n                      <mat-label>Total Distributor Discount</mat-label>\r\n                      <input matInput placeholder=\"Type Here ...\" name=\"distributor_total_discount\"\r\n                        #distributor_total_discount=\"ngModel\" [(ngModel)]=\"data.distributor_total_discount\" readonly>\r\n                    </mat-form-field>\r\n                    <div class=\"alert alert-danger\" *ngIf=\"f.submitted && distributor_total_discount?.invalid\">\r\n                      This field is required\r\n                    </div>\r\n                  </div>\r\n                </div> -->\r\n              </div>\r\n            </div>\r\n\r\n\r\n\r\n            <!-- <div class=\"card-body cs-form\" *ngIf=\"lastPageData.activeTab == 'Retailer'\">\r\n              <div class=\"row\">\r\n                <div class=\"col s12 m3 l4\">\r\n                  <mat-form-field appearance=\"outline\"\r\n                    [ngClass]=\"{'has-error' : dealer_basic_discount?.invalid || dealer_basic_discount.touched } \">\r\n                    <mat-label>{{lastPageData.activeTab}} Basic Discount</mat-label>\r\n                    <input matInput placeholder=\"Type Here ...\" name=\"dealer_basic_discount\"\r\n                      min=\"1\" max=\"100\" maxlength=\"3\"\r\n                      #dealer_basic_discount=\"ngModel\" [(ngModel)]=\"data.dealer_basic_discount\"\r\n                      (input)=\"calculateDiscount()\" required>\r\n                  </mat-form-field>\r\n                  <div class=\"alert alert-danger\" *ngIf=\"f.submitted && dealer_basic_discount?.invalid\">\r\n                    This field is required\r\n                  </div>\r\n                </div>\r\n\r\n                <div class=\"col s12 m3 l4\">\r\n                  <mat-form-field appearance=\"outline\" [ngClass]=\"{'has-error' : dealer_sr_discount.invalid } \">\r\n                    <mat-label>{{lastPageData.activeTab}} Sr Discount</mat-label>\r\n                    <input matInput placeholder=\"Type Here ...\" name=\"dealer_sr_discount\"\r\n                      min=\"1\" max=\"100\" maxlength=\"3\"\r\n                      #dealer_sr_discount=\"ngModel\" [(ngModel)]=\"data.dealer_sr_discount\" (input)=\"calculateDiscount()\">\r\n                  </mat-form-field>\r\n                  <div class=\"alert alert-danger\" *ngIf=\"f.submitted && dealer_sr_discount?.invalid\">\r\n                    This field is required\r\n                  </div>\r\n                </div>\r\n\r\n                <div class=\"col s12 m3 l4\">\r\n                  <mat-form-field appearance=\"outline\" [ngClass]=\"{'has-error' : dealer_cd_discount.invalid } \">\r\n                    <mat-label>{{lastPageData.activeTab}} Cd Discount</mat-label>\r\n                    <input matInput placeholder=\"Type Here ...\" name=\"dealer_cd_discount\"\r\n                      min=\"1\" max=\"100\" maxlength=\"3\"\r\n                      #dealer_cd_discount=\"ngModel\" [(ngModel)]=\"data.dealer_cd_discount\" (input)=\"calculateDiscount()\">\r\n                  </mat-form-field>\r\n                  <div class=\"alert alert-danger\" *ngIf=\"f.submitted && dealer_cd_discount?.invalid\">\r\n                    This field is required\r\n                  </div>\r\n                </div>\r\n              </div>\r\n\r\n              <div class=\"row\">\r\n                <div class=\"col s12 m3 l4\">\r\n                  <mat-form-field appearance=\"outline\" [ngClass]=\"{'has-error' : dealer_dd_discount.invalid } \">\r\n                    <mat-label>{{lastPageData.activeTab}} Special Discount</mat-label>\r\n                    <input matInput placeholder=\"Type Here ...\" name=\"dealer_dd_discount\"\r\n                      min=\"1\" max=\"100\" maxlength=\"3\"\r\n                      #dealer_dd_discount=\"ngModel\" [(ngModel)]=\"data.dealer_dd_discount\" (input)=\"calculateDiscount()\">\r\n                  </mat-form-field>\r\n                  <div class=\"alert alert-danger\" *ngIf=\"f.submitted && dealer_dd_discount?.invalid\">\r\n                    This field is required\r\n                  </div>\r\n                </div>\r\n\r\n                <div class=\"col s12 m3 l4\">\r\n                  <mat-form-field appearance=\"outline\" [ngClass]=\"{'has-error' : dealer_family_discount.invalid } \">\r\n                    <mat-label>{{lastPageData.activeTab}} D Grade Discount</mat-label>\r\n                    <input matInput placeholder=\"Type Here ...\" name=\"dealer_family_discount\"\r\n                      min=\"1\" max=\"100\" maxlength=\"3\"\r\n                      #dealer_family_discount=\"ngModel\" [(ngModel)]=\"data.dealer_family_discount\"\r\n                      (input)=\"calculateDiscount()\">\r\n                  </mat-form-field>\r\n                  <div class=\"alert alert-danger\" *ngIf=\"f.submitted && dealer_family_discount?.invalid\">\r\n                    This field is required\r\n                  </div>\r\n                </div>\r\n\r\n                <div class=\"col s12 m3 l4\">\r\n                  <mat-form-field appearance=\"outline\" [ngClass]=\"{'has-error' : dealer_ss_discount.invalid } \">\r\n                    <mat-label>{{lastPageData.activeTab}} Ex-Factory Discount</mat-label>\r\n                    <input matInput placeholder=\"Type Here ...\" name=\"dealer_ss_discount\"\r\n                      min=\"1\" max=\"100\" maxlength=\"3\"\r\n                      #dealer_ss_discount=\"ngModel\" [(ngModel)]=\"data.dealer_ss_discount\" (input)=\"calculateDiscount()\">\r\n                  </mat-form-field>\r\n                  <div class=\"alert alert-danger\" *ngIf=\"f.submitted && dealer_ss_discount?.invalid\">\r\n                    This field is required\r\n                  </div>\r\n                </div>\r\n\r\n                <div class=\"row mb0\">\r\n                  <div class=\"col s12 m3 l4\">\r\n                    <mat-form-field appearance=\"outline\"\r\n                      [ngClass]=\"{'has-error' : distributor_total_discount.invalid } \">\r\n                      <mat-label>Total Distributor Discount</mat-label>\r\n                      <input matInput placeholder=\"Type Here ...\" name=\"distributor_total_discount\"\r\n                        #distributor_total_discount=\"ngModel\" [(ngModel)]=\"data.distributor_total_discount\" readonly>\r\n                    </mat-form-field>\r\n                    <div class=\"alert alert-danger\" *ngIf=\"f.submitted && distributor_total_discount?.invalid\">\r\n                      This field is required\r\n                    </div>\r\n                  </div>\r\n                </div> \r\n              </div>\r\n            </div> -->\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"col s12\">\r\n          <div class=\"text-right\">\r\n            <button [ngClass]=\"{'loading': savingFlag == true}\" mat-raised-button color=\"accent\" type=\"submit\"\r\n              [disabled]=\"savingFlag == true || this.data.Total_dis > 100\">\r\n              {{savingFlag == true ? 'Saving' : (id ? 'Update':'Save')}}\r\n            </button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </form>\r\n\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/discount/add-discount/add-discount.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/discount/add-discount/add-discount.component.ts ***!
  \*****************************************************************/
/*! exports provided: AddDiscountComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddDiscountComponent", function() { return AddDiscountComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _router_animation_router_animation_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../router-animation/router-animation.component */ "./src/app/router-animation/router-animation.component.ts");
/* harmony import */ var src_services_DatabaseService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/_services/DatabaseService */ "./src/_services/DatabaseService.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _dialog_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../dialog.component */ "./src/app/dialog.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng6-toastr-notifications */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/ng6-toastr-notifications/fesm5/ng6-toastr-notifications.js");









var AddDiscountComponent = /** @class */ (function () {
    function AddDiscountComponent(renderer, location, service, rout, toast, route, dialog, dialog2) {
        // this.userId = this.userData['data']['id'];
        // this.userName = this.userData['data']['name'];
        this.renderer = renderer;
        this.location = location;
        this.service = service;
        this.rout = rout;
        this.toast = toast;
        this.route = route;
        this.dialog = dialog;
        this.dialog2 = dialog2;
        this.savingFlag = false;
        this.segmentList = [];
        this.SubcategoryList = [];
        this.category_list = [];
        this.brandList = [];
        this.colorList = [];
        this.data = {};
        this.feature = {};
        this.value = [];
        this.formData = new FormData();
        this.loader = false;
        this.errorMsg = false;
        this.showMRP = false;
        this.showSize = false;
        this.image = new FormData();
        this.selected_image = [];
        this.state = [];
        this.pointCategories_data = [];
        this.getSegment();
    }
    AddDiscountComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.lastPageData = _this.route.queryParams['_value'];
            _this.id = _this.lastPageData.id;
            _this.image_id = _this.lastPageData.id;
            if (_this.id && _this.lastPageData.type == 'S') {
                _this.loader = true;
                _this.getProductDetail();
            }
            if (_this.id && _this.lastPageData.type == 'SS') {
                _this.loader = true;
                _this.getProductDetailSS();
            }
        });
        // this.route.params.subscribe(params => {
        //   this.id = params['id'];
        //   this.image_id = params['id'];
        // });
        this.userData = JSON.parse(localStorage.getItem('st_user'));
        this.userId = this.userData['data']['id'];
        this.userName = this.userData['data']['name'];
    };
    AddDiscountComponent.prototype.getSegment = function () {
        var _this = this;
        this.service.post_rqst({}, "Master/getProductCategoryList").subscribe((function (result) {
            if (result['category_list']['statusCode'] == 200) {
                _this.segmentList = result['category_list']['segment_list'];
            }
        }));
    };
    AddDiscountComponent.prototype.getSubCatgory = function (id) {
        var _this = this;
        this.service.post_rqst({ 'id': id }, "Master/subCategoryList").subscribe((function (result) {
            if (result['statusCode'] == 200) {
                _this.SubcategoryList = result['result'];
            }
        }));
    };
    AddDiscountComponent.prototype.getProductDetail = function () {
        var _this = this;
        this.getSegment();
        this.service.post_rqst({ 'id': this.id }, "Master/discountMasterDetails").subscribe((function (result) {
            console.log(result);
            _this.loader = false;
            _this.data = result;
            console.log(_this.data.category);
        }));
    };
    AddDiscountComponent.prototype.getProductDetailSS = function () {
        var _this = this;
        this.getSegment();
        this.service.post_rqst({ 'id': this.id }, "Master/discountMasterDetailsSS").subscribe((function (result) {
            console.log(result);
            _this.loader = false;
            _this.data = result;
            console.log(_this.data.category);
        }));
    };
    // add image 
    AddDiscountComponent.prototype.submit = function () {
        var _this = this;
        var header;
        this.data.activeTab = this.lastPageData.activeTab;
        if (this.id) {
            this.data.last_updated_by_name = this.userName;
            this.data.last_updated_by = this.userId;
            if (this.lastPageData.type == 'S') {
                header = this.service.post_rqst({ 'data': this.data }, "Master/discountMasterupdate");
            }
            if (this.lastPageData.type == 'SS') {
                header = this.service.post_rqst({ 'data': this.data }, "Master/discountMasterupdateSS");
            }
        }
        else {
            this.data.created_by_name = this.userName;
            this.data.created_by = this.userId;
            header = this.service.post_rqst({ 'data': this.data }, "Master/discountMasterAdd");
        }
        header.subscribe(function (result) {
            if (result['statusCode'] == 200) {
                _this.rout.navigate(['/discount-master']);
                _this.toast.successToastr(result['statusMsg']);
            }
            else {
                _this.toast.errorToastr(result['statusMsg']);
                _this.savingFlag = false;
            }
        }, function (err) {
            _this.savingFlag = false;
        });
    };
    AddDiscountComponent.prototype.back = function () {
        this.location.back();
    };
    AddDiscountComponent.prototype.calculateDiscount = function () {
        this.data.distributor_total_discount =
            parseFloat(this.data.discount_1 || 0) + parseFloat(this.data.discount_2 || 0) + parseFloat(this.data.discount_3 || 0) +
                parseFloat(this.data.discount_4 || 0) + parseFloat(this.data.discount_5 || 0) + parseFloat(this.data.discount_6 || 0) +
                parseFloat(this.data.discount_7 || 0) + parseFloat(this.data.discount_8 || 0) + parseFloat(this.data.discount_9 || 0) +
                parseFloat(this.data.discount_10 || 0) + parseFloat(this.data.discount_11 || 0) + parseFloat(this.data.discount_12 || 0) +
                parseFloat(this.data.discount_13 || 0) + parseFloat(this.data.discount_14 || 0) + parseFloat(this.data.discount_15 || 0) +
                parseFloat(this.data.discount_16 || 0);
        if (this.data.distributor_total_discount > 100) {
            this.toast.errorToastr("Total distributor discount shound not be greater than 100");
        }
    };
    AddDiscountComponent.prototype.calculateDealerDiscount = function () {
        this.data.dealer_total_discount = parseFloat(this.data.dealer_basic_discount) + parseFloat(this.data.dealer_sr_discount) + parseFloat(this.data.dealer_cd_discount) + parseFloat(this.data.dealer_dd_discount) + parseFloat(this.data.dealer_family_discount) +
            parseFloat(this.data.dealer_ss_discount);
        if (this.data.dealer_total_discount > 100) {
            this.toast.errorToastr("Total Retailer discount shound not be greater than 100");
        }
    };
    AddDiscountComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-add-discount',
            template: __webpack_require__(/*! ./add-discount.component.html */ "./src/app/discount/add-discount/add-discount.component.html"),
            animations: [Object(_router_animation_router_animation_component__WEBPACK_IMPORTED_MODULE_2__["slideToTop"])()]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"],
            _angular_common__WEBPACK_IMPORTED_MODULE_7__["Location"],
            src_services_DatabaseService__WEBPACK_IMPORTED_MODULE_3__["DatabaseService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_8__["ToastrManager"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _dialog_component__WEBPACK_IMPORTED_MODULE_5__["DialogComponent"],
            _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatDialog"]])
    ], AddDiscountComponent);
    return AddDiscountComponent;
}());

//   detail:any={};
//   discount_id;
//   userData: any;
//   userId: any;
//   userName: any;
//   constructor(
//               public rout:Router,
//               public serve:DatabaseService,
//               public session: sessionStorage,
//               public route:ActivatedRoute,
//               public dialog:DialogComponent) 
//   {
//     this.route.params.subscribe( params => 
//     {
//       this.discount_id = params.id;
//       console.log(this.discount_id);
//       });
//       if(this.discount_id != 0)
//       {
//         this.getDiscountData(this.discount_id)
//       }
//       this.userData = JSON.parse(localStorage.getItem('st_user'));
//       this.userId=this.userData['data']['id'];
//       this.userName=this.userData['data']['name'];
//       // this.discountDetail(this.discount_id);
//     // this.addDiscount();
//    }
//   ngOnInit() 
//   {
//     // this.detail=this.serve.get_data()
//     // console.log(this.detail);  
//   }
//   MobileNumber(event: any) 
//   {
//     console.log(event);
//     const pattern = /[0-9\+\-\.\ ]/;
//     let inputChar = String.fromCharCode(event.charCode);
//     if (!pattern.test(inputChar)) 
//     {event.preventDefault(); }
//    }
// total:any=0;
//    getDiscountData(id)
//    {
//       this.serve.post_rqst({'id':id},"Discount/discount_detail").subscribe((result=>
//       {
//           console.log(result);
//           this.detail=result['discount_detail'];
//           console.log(this.detail);
//       }))
//    }
//    total_discount()
//    {
//     this.detail.discount=(parseFloat(this.detail.basic_discount)+parseFloat(this.detail.sr_discount)+parseFloat(this.detail.dd_discount)+parseFloat(this.detail.family_discount)+
//     parseFloat(this.detail.ss_discount)+parseFloat(this.detail.cd_discount)).toFixed(2);
//     console.log(this.detail.discount);
//    }
//     submitDiscount()
//     {
//       this.serve.post_rqst(this.detail,"Discount/add_update_discount").subscribe((result=>
//       {
//             console.log(result)
//             if(result)
//             {
//               this.dialog.success("Discount","Success");
//               this.rout.navigate(['/discount-list'])
//             }
//       }))
//     }
//   // discountDetail(id)
//   // {
//   //   console.log(id);
//   //   let value={"id":id}
//   //   this.serve.post_rqst(value,"Discount/discount_detail").subscribe((result=>{
//   //     console.log(result);
//   //     this.detail=result['discount_detail'];
//   //     // this.serve.setdiscountdata(result);
//   //     // this.rout.navigate(['//'+id]);
//   //   }))
//   // }
//   addDiscount()
//   {
//     // let value={"detail":this.detail,"id":this.detail['id']}
//     this.serve.post_rqst({"detail":this.detail,"id":this.detail['id'],'uid':this.userId,'uname':this.userName},"Discount/update_discount_detail").subscribe((result=>{
//       console.log(result)
//       if(result){
//         this.rout.navigate(['/discount-list'])
//       }
//     }))
//   }
// }


/***/ }),

/***/ "./src/app/discount/discount-master-detail/discount-master-detail.component.html":
/*!***************************************************************************************!*\
  !*** ./src/app/discount/discount-master-detail/discount-master-detail.component.html ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  discount-master-detail works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/discount/discount-master-detail/discount-master-detail.component.scss":
/*!***************************************************************************************!*\
  !*** ./src/app/discount/discount-master-detail/discount-master-detail.component.scss ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/discount/discount-master-detail/discount-master-detail.component.ts":
/*!*************************************************************************************!*\
  !*** ./src/app/discount/discount-master-detail/discount-master-detail.component.ts ***!
  \*************************************************************************************/
/*! exports provided: DiscountMasterDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DiscountMasterDetailComponent", function() { return DiscountMasterDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/core/fesm5/core.js");


var DiscountMasterDetailComponent = /** @class */ (function () {
    function DiscountMasterDetailComponent() {
    }
    DiscountMasterDetailComponent.prototype.ngOnInit = function () {
    };
    DiscountMasterDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-discount-master-detail',
            template: __webpack_require__(/*! ./discount-master-detail.component.html */ "./src/app/discount/discount-master-detail/discount-master-detail.component.html"),
            styles: [__webpack_require__(/*! ./discount-master-detail.component.scss */ "./src/app/discount/discount-master-detail/discount-master-detail.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DiscountMasterDetailComponent);
    return DiscountMasterDetailComponent;
}());



/***/ }),

/***/ "./src/app/discount/discount-master/discount-master.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/discount/discount-master/discount-master.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-container\">\r\n  <div class=\"tools-container\">\r\n    <h2>Discount Master</h2>\r\n    <div class=\"left-auto left-auto df ac flex-gap-10\">\r\n      <button mat-icon-button matTooltip=\"Refresh\" (click)=\"refresh() \">\r\n        <i class=\"material-icons\">refresh</i>\r\n      </button>\r\n\r\n      <div class=\"mat-tabbar\">\r\n        <!-- <button mat-button [ngClass]=\"{'active' :activeTab== 'Distributor'}\"\r\n          (click)=\"activeTab= 'Distributor'; mydiscountList()\"><i class=\"material-icons\">hub</i>Distributor</button> -->\r\n        <!-- <button mat-button [ngClass]=\"{'active' :activeTab== 'Retailer'}\"\r\n          (click)=\"activeTab= 'Retailer'; mydiscountList()\"><i class=\"material-icons\">storefront</i>Retailer</button> -->\r\n           <button mat-button [ngClass]=\"{'active' :activeTab1== 'S'}\"\r\n          (click)=\"activeTab1= 'S'; mydiscountList()\"><i class=\"material-icons\">hub</i>S Category</button>\r\n           <button mat-button [ngClass]=\"{'active' :activeTab1== 'SS'}\"\r\n          (click)=\"activeTab1= 'SS'; mydiscountListSS()\"><i class=\"material-icons\">hub</i>SS Category</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"container container-scroll\">\r\n    <div class=\"cs-table horizontal-scroll\">\r\n      <div class=\"sticky-head\">\r\n        <div class=\"table-head\">\r\n          <table>\r\n            <tr>\r\n              <th class=\"w50 text-center\">S No.</th>\r\n              <th class=\"w300 text-center\">Brand</th>\r\n              <th class=\"w150 text-center\">Discount 1</th>\r\n              <th class=\"w150 text-center\">Discount 2</th>\r\n              <th class=\"w150 text-center\">Discount 3</th>\r\n              <th class=\"w150 text-center\">Discount 4</th>\r\n              <th class=\"w150 text-center\">Discount 5</th>\r\n              <th class=\"w150 text-center\">Discount 6</th>\r\n              <th class=\"w150 text-center\">Discount 7</th>\r\n              <th class=\"w150 text-center\">Discount 8</th>\r\n              <th class=\"w150 text-center\">Discount 9</th>\r\n              <th class=\"w150 text-center\">Discount 10</th>\r\n              <th class=\"w150 text-center\">Discount 11</th>\r\n              <th class=\"w150 text-center\">Discount 12</th>\r\n              <th class=\"w150 text-center\">Discount 13</th>\r\n              <th class=\"w150 text-center\">Discount 14</th>\r\n              <th class=\"w150 text-center\">Discount 15</th>\r\n              <th class=\"w150 text-center\">Discount 16</th>\r\n              <!-- <th class=\"w150 text-center\">Total Discount</th> -->\r\n              <th class=\"w75 text-center\">Action</th>\r\n            </tr>\r\n          </table>\r\n        </div>\r\n        <!-- keyup.enter)=\"getProductList('')\" -->\r\n        <div class=\"table-head border-top\">\r\n          <table>\r\n            <tr>\r\n              <th class=\"w50 text-center\">&nbsp;</th>\r\n              <th class=\"w300\">\r\n                <div class=\"th-search-acmt\">\r\n                  <mat-form-field>\r\n                    <input type=\"text\" matInput placeholder=\"Search ...\" (keyup.enter)=\"mydiscountList()\"\r\n                      name=\"category_name\" #category_name=\"ngModel\" [(ngModel)]=\"filter_data.category_name\">\r\n                  </mat-form-field>\r\n                </div>\r\n              </th>\r\n              <th class=\"w150 text-center\">&nbsp;</th>\r\n              <th class=\"w150 text-center\">&nbsp;</th>\r\n              <th class=\"w150 text-center\">&nbsp;</th>\r\n              <th class=\"w150 text-center\">&nbsp;</th>\r\n              <th class=\"w150 text-center\">&nbsp;</th>\r\n              <th class=\"w150 text-center\">&nbsp;</th>\r\n              <th class=\"w150 text-center\">&nbsp;</th>\r\n              <th class=\"w150 text-center\">&nbsp;</th>\r\n              <th class=\"w150 text-center\">&nbsp;</th>\r\n              <th class=\"w150 text-center\">&nbsp;</th>\r\n              <th class=\"w150 text-center\">&nbsp;</th>\r\n              <th class=\"w150 text-center\">&nbsp;</th>\r\n              <th class=\"w150 text-center\">&nbsp;</th>\r\n              <th class=\"w150 text-center\">&nbsp;</th>\r\n              <th class=\"w150 text-center\">&nbsp;</th>\r\n              <th class=\"w150 text-center\">&nbsp;</th>\r\n              <th class=\"w75 text-center\">&nbsp;</th>\r\n\r\n            </tr>\r\n          </table>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"table-container\">\r\n        <div class=\"table-content\">\r\n          <table>\r\n            <ng-container *ngIf=\"!loader\">\r\n              <tr *ngFor=\"let row of discountList; let i = index\">\r\n                <td class=\"w50\">{{i+1}}</td>\r\n                <td class=\"w300\">{{row.brand_name}}</td>\r\n                <td class=\"w150 text-center\">{{activeTab == 'Distributor' ? row.discount_1 :\r\n                  row.dealer_basic_discount}}</td>\r\n                <!-- <td class=\"w150 text-center\">{{row.dealer_basic_discount}}</td> -->\r\n                <td class=\"w150 text-center\">{{activeTab == 'Distributor' ? row.discount_2 :\r\n                  row.dealer_sr_discount}}</td>\r\n                <!-- <td class=\"w150 text-center\">{{row.dealer_sr_discount}}</td> -->\r\n                <td class=\"w150 text-center\">{{activeTab == 'Distributor' ? row.discount_3 :\r\n                  row.dealer_dd_discount}}</td>\r\n                <!-- <td class=\"w150 text-center\">{{row.dealer_dd_discount}}</td> -->\r\n                <td class=\"w150 text-center\">{{activeTab == 'Distributor' ? row.discount_4 :\r\n                  row.dealer_family_discount}}</td>\r\n                <!-- <td class=\"w150 text-center\">{{row.dealer_family_discount}}</td> -->\r\n                <td class=\"w150 text-center\">{{activeTab == 'Distributor' ? row.discount_5 :\r\n                  row.dealer_ss_discount}}</td>\r\n                <!-- <td class=\"w150 text-center\">{{row.dealer_ss_discount}}</td> -->\r\n                <td class=\"w150 text-center\">{{activeTab == 'Distributor' ? row.discount_6 :\r\n                  row.dealer_cd_discount}}</td>\r\n                  <td class=\"w150 text-center\">{{activeTab == 'Distributor' ? row.discount_7 :\r\n                    row.dealer_cd_discount}}</td>\r\n                    <td class=\"w150 text-center\">{{activeTab == 'Distributor' ? row.discount_8 :\r\n                      row.dealer_cd_discount}}</td>\r\n                <td class=\"w150 text-center\">{{row.discount_9}}</td>\r\n                <td class=\"w150 text-center\">{{row.discount_10}}</td>\r\n                <td class=\"w150 text-center\">{{row.discount_11}}</td>\r\n                <td class=\"w150 text-center\">{{row.discount_12}}</td>\r\n                <td class=\"w150 text-center\">{{row.discount_13}}</td>\r\n                <td class=\"w150 text-center\">{{row.discount_14}}</td>\r\n                <td class=\"w150 text-center\">{{row.discount_15}}</td>\r\n                <td class=\"w150 text-center\">{{row.discount_16}}</td>\r\n                <!-- <td class=\"w75 text-center\">{{row.dealer_cd_discount}}</td> -->\r\n                <!-- <td class=\"w75 text-center\">{{row.distributor_total_discount}}</td>\r\n                <td class=\"w75 text-center\">{{row.dealer_total_discount}}</td> -->\r\n                <td class=\"w75 text-center\">\r\n                  <div class=\"action-button text-center\">\r\n                    <button mat-icon-button matTooltip=\"Change Status\" [routerLink]=\"[ 'add-discount/', row.id ]\"\r\n                      [queryParams]=\"{'activeTab':activeTab, 'id': row.id,'type':activeTab1}\">\r\n                      <i class=\"material-icons edit\">edit</i>\r\n                    </button>\r\n                  </div>\r\n                </td>\r\n              </tr>\r\n            </ng-container>\r\n            <ng-container *ngIf=\"loader\">\r\n              <tr class=\"sk-loading\" *ngFor=\"let row of [].constructor(10);\">\r\n                <td class=\"w50\">\r\n                  <div class=\"skeleton-loader\">&nbsp;</div>\r\n                </td>\r\n                <td class=\"w300 text-center\">\r\n                  <div class=\"skeleton-loader\">&nbsp;</div>\r\n                </td>\r\n                <td class=\"w150 text-center\">\r\n                  <div class=\"skeleton-loader\">&nbsp;</div>\r\n                </td>\r\n\r\n                <td class=\"w150 text-center\">\r\n                  <div class=\"skeleton-loader\">&nbsp;</div>\r\n                </td>\r\n\r\n                <td class=\"w150 text-center\">\r\n                  <div class=\"skeleton-loader\">&nbsp;</div>\r\n                </td>\r\n\r\n                <td class=\"w150 text-center\">\r\n                  <div class=\"skeleton-loader\">&nbsp;</div>\r\n                </td>\r\n\r\n                <td class=\"w150 text-center\">\r\n                  <div class=\"skeleton-loader\">&nbsp;</div>\r\n                </td>\r\n\r\n                <td class=\"w150 text-center\">\r\n                  <div class=\"skeleton-loader\">&nbsp;</div>\r\n                </td>\r\n                <td class=\"w150 text-center\">\r\n                  <div class=\"skeleton-loader\">&nbsp;</div>\r\n                </td>\r\n                <td class=\"w150 text-center\">\r\n                  <div class=\"skeleton-loader\">&nbsp;</div>\r\n                </td>\r\n                <td class=\"w150 text-center\">\r\n                  <div class=\"skeleton-loader\">&nbsp;</div>\r\n                </td>\r\n                <td class=\"w150 text-center\">\r\n                  <div class=\"skeleton-loader\">&nbsp;</div>\r\n                </td>\r\n                <td class=\"w150 text-center\">\r\n                  <div class=\"skeleton-loader\">&nbsp;</div>\r\n                </td>\r\n                <td class=\"w150 text-center\">\r\n                  <div class=\"skeleton-loader\">&nbsp;</div>\r\n                </td>\r\n                <td class=\"w150 text-center\">\r\n                  <div class=\"skeleton-loader\">&nbsp;</div>\r\n                </td>\r\n                <td class=\"w150 text-center\">\r\n                  <div class=\"skeleton-loader\">&nbsp;</div>\r\n                </td>\r\n                <td class=\"w75 text-center\">\r\n                  <div class=\"skeleton-loader\">&nbsp;</div>\r\n                </td>\r\n\r\n              </tr>\r\n            </ng-container>\r\n          </table>\r\n        </div>\r\n      </div>\r\n      <div *ngIf=\"discountList.length<1\">\r\n        <app-not-result-found></app-not-result-found>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <!-- <div class=\"fab-btns\">\r\n    <button mat-fab class=\"excel pulse\" (click)=\"downloadExcel();\">\r\n      <img src=\"assets/img/excel.svg\">\r\n      Download Excel\r\n    </button>\r\n  </div> -->\r\n  <!--   \r\n  <div class=\"fab-btns\">\r\n    <button class=\"pulse excel\" mat-fab color=\"primary\"\r\n      [matMenuTriggerFor]=\"menu\">\r\n      <i class=\"material-icons\">apps</i>\r\n      Action\r\n    </button>\r\n    <mat-menu #menu=\"matMenu\">\r\n     \r\n      <button mat-menu-item  routerLink=\"add-discount\" routerLinkActive=\"router-link-active\">\r\n      <mat-icon>add</mat-icon>\r\n      <span>Add New</span>\r\n    </button>\r\n     \r\n    </mat-menu>\r\n\r\n  </div> -->\r\n</div>"

/***/ }),

/***/ "./src/app/discount/discount-master/discount-master.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/discount/discount-master/discount-master.component.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/discount/discount-master/discount-master.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/discount/discount-master/discount-master.component.ts ***!
  \***********************************************************************/
/*! exports provided: DiscountMasterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DiscountMasterComponent", function() { return DiscountMasterComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var src_services_DatabaseService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/_services/DatabaseService */ "./src/_services/DatabaseService.ts");
/* harmony import */ var ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng6-toastr-notifications */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/ng6-toastr-notifications/fesm5/ng6-toastr-notifications.js");





var DiscountMasterComponent = /** @class */ (function () {
    function DiscountMasterComponent(bottomSheet, service, toast) {
        this.bottomSheet = bottomSheet;
        this.service = service;
        this.toast = toast;
        this.discountList = [];
        this.start = 0;
        this.count = 0;
        this.page_limit = 50;
        this.filter_data = {};
        this.skelation = new Array(10);
        this.value = {};
        this.tmp_discountlist = [];
        this.discountMaster = [];
        this.loader = false;
        this.get12MonthArray = [];
        this.datanotfound = false;
        this.today_date = new Date();
        this.activeTab = 'Distributor';
        this.activeTab1 = 'S';
        this.mydiscountList();
    }
    DiscountMasterComponent.prototype.ngOnInit = function () {
    };
    // refresh() {
    //   // this.loader=true;
    //   // this.mydiscountList()
    //   this.filter_data ='';
    //   this.loader=true;
    // }
    DiscountMasterComponent.prototype.refresh = function () {
        this.filter_data = {};
        this.service.setData(this.filter_data);
        this.service.currentUserID = '';
        this.mydiscountList();
    };
    DiscountMasterComponent.prototype.mydiscountList = function () {
        var _this = this;
        this.loader = true;
        this.service.post_rqst({ 'search': this.value.search, 'filter': this.filter_data, 'activeTab': this.activeTab }, "Master/discountMasterList").subscribe((function (result) {
            _this.loader = false;
            console.log(result);
            _this.discountList = result['category_list'];
            _this.count = result['category_list']['count'];
            _this.tmp_discountlist = _this.discountList;
            _this.total_page = Math.ceil(_this.count / _this.page_limit);
            _this.pagenumber = Math.ceil(_this.start / _this.page_limit) + 1;
        }));
    };
    DiscountMasterComponent.prototype.mydiscountListSS = function () {
        var _this = this;
        this.loader = true;
        this.service.post_rqst({ 'search': this.value.search, 'filter': this.filter_data, 'activeTab': this.activeTab }, "Master/discountMasterListSS").subscribe((function (result) {
            _this.loader = false;
            console.log(result);
            _this.discountList = result['category_list'];
            _this.count = result['category_list']['count'];
            _this.tmp_discountlist = _this.discountList;
            _this.total_page = Math.ceil(_this.count / _this.page_limit);
            _this.pagenumber = Math.ceil(_this.start / _this.page_limit) + 1;
        }));
    };
    // getPrimartTargetReport(activeTab) {
    //   this.loader = true;
    //   this.service.post_rqst({ 'reportType': activeTab, 'filter': this.filter }, 'Reports/userWorkReport').subscribe((resp) => {
    //     if (resp['statusCode'] == 200) {
    //       this.loader = false;
    //       this.discountMaster = resp['result'];
    //     }
    //     else {
    //       this.loader = false;
    //       this.toast.errorToastr(resp['statusMsg']);
    //     }
    //   }, err => {
    //     this.loader = false;
    //     this.toast.errorToastr(err);
    //   })
    // }
    DiscountMasterComponent.prototype.downloadExcel = function () {
        var _this = this;
        this.service.post_rqst({}, "Excel/dfghhguhj")
            .subscribe((function (result) {
            if (result['statuscode'] == 200) {
                window.open(_this.downurl + result['filename']);
            }
            else {
            }
        }));
    };
    DiscountMasterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-discount-master',
            template: __webpack_require__(/*! ./discount-master.component.html */ "./src/app/discount/discount-master/discount-master.component.html"),
            styles: [__webpack_require__(/*! ./discount-master.component.scss */ "./src/app/discount/discount-master/discount-master.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatBottomSheet"], src_services_DatabaseService__WEBPACK_IMPORTED_MODULE_3__["DatabaseService"], ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_4__["ToastrManager"]])
    ], DiscountMasterComponent);
    return DiscountMasterComponent;
}());



/***/ }),

/***/ "./src/app/discount/discount-module/discount-module.module.ts":
/*!********************************************************************!*\
  !*** ./src/app/discount/discount-module/discount-module.module.ts ***!
  \********************************************************************/
/*! exports provided: DiscountModuleModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DiscountModuleModule", function() { return DiscountModuleModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var src_app_auth_component_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/auth-component.guard */ "./src/app/auth-component.guard.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var angular_ng_autocomplete__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! angular-ng-autocomplete */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/angular-ng-autocomplete/fesm5/angular-ng-autocomplete.js");
/* harmony import */ var ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-multiselect-dropdown */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/ng-multiselect-dropdown/fesm5/ng-multiselect-dropdown.js");
/* harmony import */ var ngx_mat_select_search__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-mat-select-search */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/ngx-mat-select-search/fesm5/ngx-mat-select-search.js");
/* harmony import */ var src_app_app_utility_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/app-utility.module */ "./src/app/app-utility.module.ts");
/* harmony import */ var src_app_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/material */ "./src/app/material.ts");
/* harmony import */ var _discount_master_discount_master_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../discount-master/discount-master.component */ "./src/app/discount/discount-master/discount-master.component.ts");
/* harmony import */ var _add_discount_add_discount_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../add-discount/add-discount.component */ "./src/app/discount/add-discount/add-discount.component.ts");
/* harmony import */ var _discount_master_detail_discount_master_detail_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../discount-master-detail/discount-master-detail.component */ "./src/app/discount/discount-master-detail/discount-master-detail.component.ts");



// import { DiscountMasterComponent } from '../discount-master/discount-master.component';












// import { DiscountListComponent } from '../discount-list/discount-list.component';
var discountMasterRoutes = [
    { path: "", component: _discount_master_discount_master_component__WEBPACK_IMPORTED_MODULE_12__["DiscountMasterComponent"], canActivate: [src_app_auth_component_guard__WEBPACK_IMPORTED_MODULE_3__["AuthComponentGuard"]], data: { expectedRole: ['1'] } },
    { path: "add-discount/:id", component: _add_discount_add_discount_component__WEBPACK_IMPORTED_MODULE_13__["AddDiscountComponent"], canActivate: [src_app_auth_component_guard__WEBPACK_IMPORTED_MODULE_3__["AuthComponentGuard"]], data: { expectedRole: ['1'] } },
    { path: "discount-master-detail/:id", component: _discount_master_detail_discount_master_detail_component__WEBPACK_IMPORTED_MODULE_14__["DiscountMasterDetailComponent"], canActivate: [src_app_auth_component_guard__WEBPACK_IMPORTED_MODULE_3__["AuthComponentGuard"]], data: { expectedRole: ['1'] } },
];
var DiscountModuleModule = /** @class */ (function () {
    function DiscountModuleModule() {
    }
    DiscountModuleModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _discount_master_discount_master_component__WEBPACK_IMPORTED_MODULE_12__["DiscountMasterComponent"],
                _add_discount_add_discount_component__WEBPACK_IMPORTED_MODULE_13__["AddDiscountComponent"],
                _discount_master_detail_discount_master_detail_component__WEBPACK_IMPORTED_MODULE_14__["DiscountMasterDetailComponent"],
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(discountMasterRoutes),
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
                ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_8__["NgMultiSelectDropDownModule"],
                src_app_material__WEBPACK_IMPORTED_MODULE_11__["MaterialModule"],
                angular_ng_autocomplete__WEBPACK_IMPORTED_MODULE_7__["AutocompleteLibModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatDialogModule"],
                ngx_mat_select_search__WEBPACK_IMPORTED_MODULE_9__["NgxMatSelectSearchModule"],
                src_app_app_utility_module__WEBPACK_IMPORTED_MODULE_10__["AppUtilityModule"]
            ]
        })
    ], DiscountModuleModule);
    return DiscountModuleModule;
}());



/***/ })

}]);