(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["coupon-coupon-module-coupon-module"],{

/***/ "./src/app/coupon/coupon-code-list/coupon-code-list.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/coupon/coupon-code-list/coupon-code-list.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-container\">\r\n\r\n  <div class=\"tools-container\">\r\n    <h2>Coupon Code</h2>\r\n\r\n    <div class=\"left-auto left-auto df ac flex-gap-10\">\r\n      <button mat-icon-button matTooltip=\"Refresh\" (click)=\"refresh(active_tab) \">\r\n        <i class=\"material-icons\">refresh</i>\r\n      </button>\r\n      <div class=\"pagination\" *ngIf=\"mastercouponData.length > 0 && active_tab == 'master_grand_box'\">\r\n\r\n        <div class=\"pagination-content\">\r\n          Pages\r\n          <span>{{pagenumber}}</span>\r\n          of\r\n          <span>{{total_page}}</span>\r\n        </div>\r\n        <div class=\"page-nav\">\r\n\r\n          <button mat-icon-button matTooltip=\"Older\" (click)=\"pervious(active_tab)\" [disabled]=\"start == 0\">\r\n            <i class=\"material-icons\">navigate_before</i>\r\n          </button>\r\n          <button mat-icon-button matTooltip=\"Newer\" (click)=\"nextPage(active_tab)\"\r\n            [disabled]=\"pagenumber == total_page \">\r\n            <i class=\"material-icons\">navigate_next</i>\r\n          </button>\r\n        </div>\r\n      </div>\r\n      <div class=\"mat-tabbar\">\r\n        <!-- <button mat-button [ngClass]=\"active_tab == 'master_box' ? 'active' : ''\"\r\n          (click)=\"active_tab = 'master_box'; couponCodeList()\"><i class=\"material-icons\">all_inbox</i>Box\r\n          Coupon</button> -->\r\n        <button mat-button [ngClass]=\"active_tab == 'item_box' ? 'active' : ''\"\r\n          (click)=\"active_tab = 'item_box'; couponCodeList()\"><i class=\"material-icons\">category</i>Product\r\n          Coupon</button>\r\n        <button mat-button [ngClass]=\"active_tab == 'scan_item' ? 'active' : ''\"\r\n          (click)=\"active_tab = 'scan_item'; scanCouponList()\"><i class=\"material-icons\">qr_code_scanner</i>Scanned\r\n          Coupon</button>\r\n\r\n        <!-- <ng-container *ngIf=\"assign_login_data2.id =='1'\">\r\n          <button mat-button [ngClass]=\"active_tab == 'master_grand_box' ? 'active' : ''\"\r\n            (click)=\"active_tab = 'master_grand_box'; getGrandMaster()\"><i class=\"material-icons\">all_inbox</i>Master\r\n            Box</button>\r\n        </ng-container> -->\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"container container-scroll\">\r\n    <div class=\"cs-table horizontal-scroll\" *ngIf=\"active_tab != 'scan_item'\">\r\n      <div class=\"sticky-head\">\r\n        <div class=\"table-head\">\r\n          <table>\r\n            <tr>\r\n              <th class=\"w60\">Sr.No</th>\r\n              <th class=\"w90\">Date</th>\r\n              <th class=\"w120\">Created by</th>\r\n              <!-- <ng-container  *ngIf=\"active_tab != 'master_box'\">\r\n                <th class=\"w140\">Box Coupon Code</th>\r\n              </ng-container> -->\r\n              <th class=\"w140\">{{active_tab == 'master_box' ? 'Box' : 'Product'}} Coupon Code</th>\r\n              <th class=\"w250\">Product Detail</th>\r\n              <!-- <th class=\"w100\">Dispatch Date</th> -->\r\n              <!-- <th class=\"w100\">Dispatch Type</th> -->\r\n              <!-- <th class=\"w250\">Retailer Detail</th> -->\r\n              <!-- <th class=\"w130\">Invoice No.</th> -->\r\n            </tr>\r\n          </table>\r\n        </div>\r\n\r\n        <div class=\"table-head border-top\">\r\n          <table>\r\n            <tr>\r\n              <th class=\"w60\">&nbsp;</th>\r\n              <th class=\"w90\">\r\n                <div class=\"th-search-acmt\">\r\n                  <mat-form-field class=\"cs-input date-column infix-bodr\">\r\n                    <input matInput [matDatepicker]=\"picker\" placeholder=\"Date\" name=\"date_created\" [(ngModel)]=\"filter.date_created\" (dateChange)=\"couponCodeList()\" [max]=\"today_date\" disabled>\r\n                    <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\r\n                    <mat-datepicker #picker disabled=\"false\"></mat-datepicker>\r\n                  </mat-form-field>\r\n                </div>\r\n\r\n              </th>\r\n              <th class=\"w120\">&nbsp;</th>\r\n              <!-- <ng-container  *ngIf=\"active_tab != 'master_box'\">\r\n                <th class=\"w140\">\r\n                  <div class=\"th-search-acmt\">\r\n                    <mat-form-field class=\"example-full-width cs-input select-input\">\r\n                      <input matInput placeholder=\"Search...\" type=\"text\" name=\"master_coupon_code\" [(ngModel)]=\"filter.master_coupon_code\" (keyup.enter)=\"couponCodeList()\">\r\n                    </mat-form-field>\r\n                  </div>\r\n                </th>\r\n              </ng-container> -->\r\n              <th class=\"w140\">\r\n                <div class=\"th-search-acmt\">\r\n                  <mat-form-field class=\"example-full-width cs-input select-input\">\r\n                    <input matInput placeholder=\"Search...\" type=\"text\" name=\"coupon_code\" [(ngModel)]=\"filter.coupon_code\" (keyup.enter)=\"couponCodeList()\">\r\n                  </mat-form-field>\r\n                </div>\r\n              </th>\r\n              <th class=\"w250\">&nbsp;</th>\r\n\r\n              <!-- <th class=\"w100\">\r\n                <div class=\"th-search-acmt\">\r\n                  <mat-form-field class=\"cs-input date-column infix-bodr\">\r\n                    <input matInput [matDatepicker]=\"dispatch_date\" placeholder=\"Date\" name=\"dispatch_date\" [(ngModel)]=\"filter.dispatch_date\" (dateChange)=\"couponCodeList()\" [max]=\"today_date\" disabled>\r\n                    <mat-datepicker-toggle matSuffix [for]=\"dispatch_date\"></mat-datepicker-toggle>\r\n                    <mat-datepicker #dispatch_date disabled=\"false\"></mat-datepicker>\r\n                  </mat-form-field>\r\n                </div>\r\n              </th>\r\n              <th class=\"w100\">&nbsp;</th>\r\n              <th class=\"w250\">&nbsp; </th>\r\n\r\n              <th class=\"w130\">\r\n                <div class=\"th-search-acmt\">\r\n                  <mat-form-field class=\"example-full-width cs-input select-input\">\r\n                    <input matInput placeholder=\"Search...\" type=\"text\" name=\"invoice_number\" [(ngModel)]=\"filter.invoice_number\" (keyup.enter)=\"couponCodeList()\">\r\n                  </mat-form-field>\r\n                </div>\r\n              </th> -->\r\n            </tr>\r\n          </table>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"table-container\">\r\n        <div class=\"table-content\" >\r\n          <table>\r\n            <ng-container *ngIf=\"!loader\">\r\n              <tr *ngFor=\"let row of couponData let i = index;\">\r\n                <td class=\"w60\">{{i+1+sr_no}}</td>\r\n                <td class=\"w90\">{{(row.date_created?row.date_created:'---') | date:'d MMM y'}}</td>\r\n                <td class=\"w120\">{{row.created_by_name?row.created_by_name:'---'}}</td>\r\n                <!-- <ng-container  *ngIf=\"active_tab != 'master_box'\">\r\n                  <td class=\"w140\">{{row.master_coupon_code?row.master_coupon_code:'---'}}</td>\r\n                </ng-container> -->\r\n                <td class=\"w140\">{{row.coupon_code?row.coupon_code:'---'}}</td>\r\n                <td class=\"w250\">{{row.product_detail?row.product_detail:'---'}}</td>\r\n                <!-- <td class=\"w100\">\r\n                  {{row.dispatch_date != \"0000-00-00 00:00:00\" ? (row.dispatch_date | date:'d MMM y') : '---'}}\r\n                </td>\r\n                <td class=\"w100\">{{row.dispatch_type}}</td>\r\n                <td class=\"w250\">{{row.dr_detail}}</td>\r\n                <td class=\"w130\">{{row.invoice_number}}</td> -->\r\n              </tr>\r\n            </ng-container>\r\n\r\n\r\n            <ng-container *ngIf=\"loader\">\r\n              <tr class=\"sk-loading\" *ngFor=\"let row of [].constructor(10)\">\r\n                <td class=\"w60\"><div>&nbsp;</div></td>\r\n                <td class=\"w90\"><div>&nbsp;</div></td>\r\n                <td class=\"w120\"><div>&nbsp;</div></td>\r\n                <!-- <ng-container  *ngIf=\"active_tab != 'master_box'\">\r\n                  <td class=\"w140\"><div>&nbsp;</div></td>\r\n                </ng-container> -->\r\n                <td class=\"w140\"><div>&nbsp;</div></td>\r\n                <td class=\"w250\"><div>&nbsp;</div></td>\r\n                <td class=\"w100\"><div>&nbsp;</div></td>\r\n                <td class=\"w100\"><div>&nbsp;</div></td>\r\n                <td class=\"w250\"><div>&nbsp;</div></td>\r\n                <td class=\"w130\"><div>&nbsp;</div></td>\r\n                <ng-container  *ngIf=\"active_tab == 'scan_item'\">\r\n                  <td class=\"w110\"><div>&nbsp;</div></td>\r\n                  <td class=\"w150\"><div>&nbsp;</div></td>\r\n                  <td class=\"w100\"><div>&nbsp;</div></td>\r\n                  <td class=\"w100\"><div>&nbsp;</div></td>\r\n                  <td class=\"w100\"><div>&nbsp;</div></td>\r\n                  <td class=\"w200\"><div>&nbsp;</div></td>\r\n                  <td class=\"w200\"><div>&nbsp;</div></td>\r\n                  <td class=\"w70\"><div>&nbsp;</div></td>\r\n                </ng-container>\r\n              </tr>\r\n            </ng-container>\r\n\r\n          </table>\r\n        </div>\r\n\r\n\r\n        <ng-container *ngIf=\"couponData.length == 0 && noResult\">\r\n          <app-not-result-found></app-not-result-found>\r\n        </ng-container>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"cs-table horizontal-scroll\" *ngIf=\"active_tab == 'scan_item'\">\r\n      <div class=\"sticky-head\">\r\n        <div class=\"table-head\">\r\n          <table>\r\n            <tr>\r\n              <th class=\"w60\">Sr.No</th>\r\n              <th class=\"w140\">Coupon Code</th>\r\n              <th class=\"w250\">Product Detail</th>\r\n              <!-- <th class=\"w100\">Dispatch Date</th>\r\n              <th class=\"w100\">Dispatch Type</th>\r\n              <th class=\"w250\">Retailer Detail</th>\r\n              <th class=\"w130\">Invoice No.</th> -->\r\n              <th class=\"w110 text-right\">Coupon value</th>\r\n              <th class=\"w150\"> Dealer Name</th>\r\n              <th class=\"w150\">Scan By</th>\r\n              <th class=\"w110\">Mobile No.</th>\r\n              <th class=\"w100\">Scan Date</th>\r\n              <!-- <th class=\"w100\">Scan Location</th> -->\r\n\r\n              <!-- <th class=\"w180\">Bonus Name</th> -->\r\n              <!-- <th class=\"w110 text-right\">Bonus Point</th> -->\r\n              <th class=\"w70\">Action</th>\r\n            </tr>\r\n          </table>\r\n        </div>\r\n\r\n        <div class=\"table-head border-top\">\r\n          <table>\r\n            <tr>\r\n              <th class=\"w60\">&nbsp;</th>\r\n              <th class=\"w140\">\r\n                <div class=\"th-search-acmt\">\r\n                  <mat-form-field class=\"example-full-width cs-input select-input\">\r\n                    <input matInput placeholder=\"Search...\" type=\"text\" name=\"coupon_code\" [(ngModel)]=\"filter.coupon_code\" (keyup.enter)=\"scanCouponList()\">\r\n                  </mat-form-field>\r\n                </div>\r\n              </th>\r\n              <th class=\"w250\">&nbsp;</th>\r\n\r\n              <!-- <th class=\"w100\">\r\n                <div class=\"th-search-acmt\">\r\n                  <mat-form-field class=\"cs-input date-column infix-bodr\">\r\n                    <input matInput [matDatepicker]=\"dispatch_date\" placeholder=\"Date\" name=\"dispatch_date\" [(ngModel)]=\"filter.dispatch_date\" (dateChange)=\"scanCouponList()\" [max]=\"today_date\" disabled>\r\n                    <mat-datepicker-toggle matSuffix [for]=\"dispatch_date\"></mat-datepicker-toggle>\r\n                    <mat-datepicker #dispatch_date disabled=\"false\"></mat-datepicker>\r\n                  </mat-form-field>\r\n                </div>\r\n              </th>\r\n              <th class=\"w100\">&nbsp;</th>\r\n              <th class=\"w250\">&nbsp;</th>\r\n\r\n              <th class=\"w130\">\r\n                <div class=\"th-search-acmt\">\r\n                  <mat-form-field class=\"example-full-width cs-input select-input\">\r\n                    <input matInput placeholder=\"Search...\" type=\"text\" name=\"invoice_number\" [(ngModel)]=\"filter.invoice_number\" (keyup.enter)=\"scanCouponList()\">\r\n                  </mat-form-field>\r\n                </div>\r\n              </th> -->\r\n\r\n              <th class=\"w110\">&nbsp;</th>\r\n              <th class=\"w150\">\r\n                <div class=\"th-search-acmt\">\r\n                  <mat-form-field class=\"example-full-width cs-input select-input\">\r\n                    <input matInput placeholder=\"Search...\" type=\"text\" name=\"dealer_name\" [(ngModel)]=\"filter.dealer_name\" (keyup.enter)=\"scanCouponList()\">\r\n                  </mat-form-field>\r\n                </div>\r\n              </th>\r\n\r\n              <th class=\"w150\">\r\n                <div class=\"th-search-acmt\">\r\n                  <mat-form-field class=\"example-full-width cs-input select-input\">\r\n                    <input matInput placeholder=\"Search...\" type=\"text\" name=\"scanned_by_name\" [(ngModel)]=\"filter.scanned_by_name\" (keyup.enter)=\"scanCouponList()\">\r\n                  </mat-form-field>\r\n                </div>\r\n              </th>\r\n\r\n              <th class=\"w110\">\r\n                <div class=\"th-search-acmt\">\r\n                  <mat-form-field class=\"example-full-width cs-input select-input\">\r\n                    <input matInput placeholder=\"Search...\" type=\"text\" name=\"scanned_by_mobile\" [(ngModel)]=\"filter.scanned_by_mobile\" (keyup.enter)=\"scanCouponList()\"\r\n                    onkeypress=\"return event.charCode>=48 && event.charCode<=57\" maxlength=\"10\">\r\n                  </mat-form-field>\r\n                </div>\r\n              </th>\r\n\r\n              <th class=\"w100\">\r\n                <div class=\"th-search-acmt\">\r\n                  <mat-form-field class=\"cs-input date-column infix-bodr\">\r\n                    <input matInput [matDatepicker]=\"picker1\" placeholder=\"Date\" name=\"scanned_on\" [(ngModel)]=\"filter.scanned_on\" (dateChange)=\"scanCouponList()\" [max]=\"today_date\" disabled>\r\n                    <mat-datepicker-toggle matSuffix [for]=\"picker1\"></mat-datepicker-toggle>\r\n                    <mat-datepicker #picker1 disabled=\"false\"></mat-datepicker>\r\n                  </mat-form-field>\r\n                </div>\r\n              </th>\r\n              <!-- <th class=\"w100\">&nbsp;</th> -->\r\n\r\n              <!-- <th class=\"w180\">&nbsp;</th>\r\n              <th class=\"w110\">&nbsp;</th> -->\r\n              <th class=\"w70\">&nbsp;</th>\r\n            </tr>\r\n          </table>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"table-container\">\r\n        <div class=\"table-content\">\r\n          <table>\r\n            <ng-container *ngIf=\"!loader\">\r\n              <tr *ngFor=\"let row of scanData let i = index;\">\r\n                <td class=\"w60\">{{i+1+sr_no}}</td>\r\n                <td class=\"w140\">{{row.coupon_code?row.coupon_code:'---'}}</td>\r\n                <td class=\"w250\">{{row.product_detail?row.product_detail:'---'}}</td>\r\n                <!-- <td class=\"w100\">\r\n                  {{row.dispatch_date != \"0000-00-00 00:00:00\" ? (row.dispatch_date | date:'d MMM y') : '---'}}\r\n                </td>\r\n                <td class=\"w100\">{{row.dispatch_type}}</td>\r\n                <td class=\"w250\">{{row.dr_detail}}</td>\r\n                <td class=\"w130\">{{row.invoice_number}}</td> -->\r\n                <td class=\"w110 text-right\">\r\n                  <strong>{{row.total_point?row.total_point + ' PT':'---'}}</strong>\r\n                </td>\r\n                <td class=\"w150\">{{row.dealer_name?row.dealer_name:'---'}}\r\n                  <!-- <button mat-icon-button *ngIf=\"assign_login_data2.add_coupon_code=='1'\" color=\"accent\" matTooltip=\"Edit\" (click)=\"updateDealer(row.coupon_code,row.dealer_name,'edit_name')\">\r\n                    <i class=\"material-icons edit\">edit</i>\r\n                  </button> -->\r\n                </td>\r\n\r\n                <td class=\"w150\">{{row.scanned_by_name?row.scanned_by_name:'---'}}</td>\r\n                <td class=\"w110\">{{row.scanned_by_mobile?row.scanned_by_mobile:'---'}}</td>\r\n                <td class=\"w100\">{{row.scanned_date | date:'d MMM y, h:mm a'}}</td>\r\n                <!-- <td class=\"w100\">\r\n                  <ng-container *ngIf=\"row.lat == ''  && row.lng == ''\">---</ng-container>\r\n                  <a style=\"color:blue;text-decoration: underline;\" *ngIf=\"row.lat != ''  && row.lng != ''\"\r\n                    href=\"http://maps.google.com/maps?q={{row.lat}},{{row.lng}}\" target=\"blank\">View Locations Map</a>\r\n                </td> -->\r\n                <!-- <td class=\"w180\">{{row.bonus_scheme_name}}</td>\r\n                <td class=\"w110 text-right\"><strong>{{row.bonus_point?row.bonus_point + ' PT':'---'}}</strong></td> -->\r\n                <td class=\"w70\"><a class=\"link-btn\" (click)=\"reopenCoupon(row.coupon_code)\">Reopen</a></td>\r\n              </tr>\r\n            </ng-container>\r\n\r\n\r\n            <ng-container *ngIf=\"loader\">\r\n              <tr class=\"sk-loading\" *ngFor=\"let row of [].constructor(10)\">\r\n                <td class=\"w60\"><div>&nbsp;</div></td>\r\n                <td class=\"w140\"><div>&nbsp;</div></td>\r\n                <td class=\"w250\"><div>&nbsp;</div></td>\r\n                <!-- <td class=\"w100\"><div>&nbsp;</div></td>\r\n                <td class=\"w100\"><div>&nbsp;</div></td>\r\n                <td class=\"w250\"><div>&nbsp;</div></td>\r\n                <td class=\"w130\"><div>&nbsp;</div></td> -->\r\n                <td class=\"w110\"><div>&nbsp;</div></td>\r\n                <td class=\"w110\"><div>&nbsp;</div></td>\r\n\r\n                <td class=\"w150\"><div>&nbsp;</div></td>\r\n                <td class=\"w110\"><div>&nbsp;</div></td>\r\n\r\n                <td class=\"w180\"><div>&nbsp;</div></td>\r\n                <!-- <td class=\"w100\"><div>&nbsp;</div></td> -->\r\n\r\n\r\n                <!-- <td class=\"w110\"><div>&nbsp;</div></td>\r\n                <td class=\"w100\"><div>&nbsp;</div></td> -->\r\n                <td class=\"w70\"><div>&nbsp;</div></td>\r\n              </tr>\r\n            </ng-container>\r\n\r\n          </table>\r\n        </div>\r\n\r\n\r\n        <ng-container *ngIf=\"scanData.length == 0 && noResult\">\r\n          <app-not-result-found></app-not-result-found>\r\n        </ng-container>\r\n      </div>\r\n    </div>\r\n\r\n\r\n    <!-- <div class=\"cs-table\" *ngIf=\"active_tab == 'master_grand_box'\">\r\n      <div class=\"sticky-head\">\r\n        <div class=\"table-head\">\r\n          <table>\r\n            <tr>\r\n              <th class=\"w60\">Sr.No</th>\r\n              <th class=\"w140\">Date</th>\r\n              <th class=\"w200\">Created by</th>\r\n              <th class=\"w150\">Master Code</th>\r\n              <th>Order No.</th>\r\n              <th class=\"w100\">Gate Pass No.</th>\r\n            </tr>\r\n          </table>\r\n        </div>\r\n\r\n        <div class=\"table-head border-top\">\r\n          <table>\r\n            <tr>\r\n              <th class=\"w60\">&nbsp;</th>\r\n              <th class=\"w140\">\r\n                <div class=\"th-search-acmt\">\r\n                  <mat-form-field class=\"cs-input date-column infix-bodr\">\r\n                    <input matInput [matDatepicker]=\"picker\" placeholder=\"Date\" name=\"date_created\"\r\n                      [(ngModel)]=\"filter.date_created\" (dateChange)=\"getGrandMaster()\" [max]=\"today_date\" disabled>\r\n                    <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\r\n                    <mat-datepicker #picker disabled=\"false\"></mat-datepicker>\r\n                  </mat-form-field>\r\n                </div>\r\n\r\n              </th>\r\n              <th class=\"w200\">&nbsp;</th>\r\n\r\n              <th class=\"w150\">\r\n                <div class=\"th-search-acmt\">\r\n                  <mat-form-field class=\"example-full-width cs-input select-input\">\r\n                    <input matInput placeholder=\"Search...\" type=\"text\" name=\"coupon_code\"\r\n                      [(ngModel)]=\"filter.coupon_code\" (keyup.enter)=\"getGrandMaster()\">\r\n                  </mat-form-field>\r\n                </div>\r\n              </th>\r\n\r\n              <th>\r\n                <div class=\"th-search-acmt\">\r\n                  <mat-form-field class=\"example-full-width cs-input select-input\">\r\n                    <input matInput placeholder=\"Search...\" type=\"text\" name=\"bill_number\"\r\n                      [(ngModel)]=\"filter.bill_number\" (keyup.enter)=\"getGrandMaster()\">\r\n                  </mat-form-field>\r\n                </div>\r\n              </th>\r\n\r\n              <th class=\"w100\">\r\n                <div class=\"th-search-acmt\">\r\n                  <mat-form-field class=\"example-full-width cs-input select-input\">\r\n                    <input matInput placeholder=\"Search...\" type=\"text\" name=\"gate_pass_number\"\r\n                      [(ngModel)]=\"filter.gate_pass_number\" (keyup.enter)=\"getGrandMaster()\">\r\n                  </mat-form-field>\r\n                </div>\r\n              </th>\r\n\r\n            </tr>\r\n          </table>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"table-container\">\r\n        <div class=\"table-content\">\r\n          <table>\r\n            <ng-container *ngIf=\"!loader\">\r\n              <tr *ngFor=\"let row of mastercouponData let i = index;\">\r\n                <td class=\"w60\">{{i+1+sr_no}}</td>\r\n                <td class=\"w140\">{{(row.date_created?row.date_created:'---') | date:'d MMM y'}}</td>\r\n                <td class=\"w200\">{{row.created_by_name?row.created_by_name:'---'}}</td>\r\n                <td class=\"w150\">\r\n                  <a class=\"link-btn\" (click)=\"row.coupon_code!='0'?viewmasterboxdetail(row.id,'items'):''\">\r\n                    {{row.coupon_code ? row.coupon_code : '---'}}\r\n                  </a>\r\n                </td>\r\n                <td>{{row.bill_number ? row.bill_number : '---'}}</td>\r\n                <td class=\"w100\">\r\n\r\n                  <a class=\"{{row.gate_pass_number > 0 ? 'link-btn' : ''}}\"\r\n                    (click)=\"row.gate_pass_number > 0 ? getDetails(row.gate_pass_number, 'detail'): ''\">\r\n                    {{row.gate_pass_number ? ('Gp ' + row.gate_pass_number) : '---'}}</a>\r\n                </td>\r\n              </tr>\r\n            </ng-container>\r\n\r\n\r\n            <ng-container *ngIf=\"loader\">\r\n              <tr class=\"sk-loading\" *ngFor=\"let row of [].constructor(10)\">\r\n                <td class=\"w60\">\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n                <td class=\"w140\">\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n                <td class=\"w200\">\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n                <td class=\"w150\">\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n                <td>\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n                <td class=\"w100\">\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n              </tr>\r\n            </ng-container>\r\n\r\n          </table>\r\n        </div>\r\n\r\n\r\n        <ng-container *ngIf=\"mastercouponData.length == 0 && noResult\">\r\n          <app-not-result-found></app-not-result-found>\r\n        </ng-container>\r\n      </div>\r\n    </div> -->\r\n\r\n  </div>\r\n\r\n\r\n\r\n  <div class=\"fab-btns\" *ngIf=\"active_tab != 'master_grand_box'\">\r\n    <button class=\"pulse excel\" mat-fab color=\"primary\" [matMenuTriggerFor]=\"menu\">\r\n      <i class=\"material-icons\">apps</i>\r\n      Action\r\n    </button>\r\n    <mat-menu #menu=\"matMenu\">\r\n      <button mat-menu-item *ngIf=\"couponData.length > 0 && assign_login_data2.export_coupon_code=='1'\"\r\n        (click)=\"exportAsXLSX(active_tab);\">\r\n        <mat-icon>download</mat-icon>\r\n        <span>Download excel</span>\r\n      </button>\r\n      <a mat-menu-item *ngIf=\"assign_login_data2.add_coupon_code=='1'\" [ngClass]=\"{'pulse': fabBtnValue=='add'}\"\r\n        color=\"primary\" routerLink=\"coupon-add\" routerLinkActive=\"active\">\r\n        <mat-icon>qr_code</mat-icon>\r\n        <span>Generate Coupon {{data.scan_item}}</span>\r\n      </a>\r\n\r\n      <a mat-menu-item *ngIf=\"assign_login_data2.add_coupon_code=='1'\" [ngClass]=\"{'pulse': fabBtnValue=='add'}\"\r\n        color=\"primary\" (click)=\"openScanLimitModal()\">\r\n        <mat-icon>code_off</mat-icon>\r\n        <span>Scan Limit\r\n          <strong style=\"\r\n    position: absolute;\r\n    top: 50%;\r\n    right: 10px;\r\n    transform: translateY(-50%);\r\n    text-align: center;\r\n    border-radius: 40px;\r\n    font-weight: 700;\r\n    font-size: 12px;\r\n    width: auto;\r\n    padding: 0px 4px;\r\n    background: rgba(0, 0, 0, 0.1);\r\n    height: 20px;\r\n    min-width: 25px;\r\n    height: 18px;\r\n    display: flex;\r\n    align-items: center;\r\n    justify-content: center;\r\n    border-radius: 6px;\">{{scanLimit.limit}}</strong>\r\n        </span>\r\n      </a>\r\n\r\n\r\n      <!-- <button mat-menu-item  routerLink=\"replacement\"  routerLinkActive=\"active\">\r\n  <mat-icon>update</mat-icon>\r\n  <span>MRP Replacement</span>\r\n</button>\r\n\r\n\r\n<button mat-menu-item  routerLink=\"manual-dispatch\"  routerLinkActive=\"active\">\r\n  <mat-icon>update</mat-icon>\r\n  <span>Manual Dispatch</span>\r\n</button>\r\n\r\n<button mat-menu-item  routerLink=\"sales-return\"  routerLinkActive=\"active\">\r\n  <mat-icon>update</mat-icon>\r\n  <span>Sales Return</span>\r\n</button> -->\r\n    </mat-menu>\r\n  </div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/coupon/coupon-code-list/coupon-code-list.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/coupon/coupon-code-list/coupon-code-list.component.ts ***!
  \***********************************************************************/
/*! exports provided: CouponCodeListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CouponCodeListComponent", function() { return CouponCodeListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_services_DatabaseService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/_services/DatabaseService */ "./src/_services/DatabaseService.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var src_app_localstorage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/localstorage.service */ "./src/app/localstorage.service.ts");
/* harmony import */ var ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng6-toastr-notifications */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/ng6-toastr-notifications/fesm5/ng6-toastr-notifications.js");
/* harmony import */ var src_app_dialog_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/dialog.component */ "./src/app/dialog.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _coupon_detail_modal_coupon_detail_modal_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../coupon-detail-modal/coupon-detail-modal.component */ "./src/app/coupon/coupon-detail-modal/coupon-detail-modal.component.ts");
/* harmony import */ var src_app_company_dispatch_view_master_box_dispatch_detail_view_master_box_dispatch_detail_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/company-dispatch/view-master-box-dispatch-detail/view-master-box-dispatch-detail.component */ "./src/app/company-dispatch/view-master-box-dispatch-detail/view-master-box-dispatch-detail.component.ts");
/* harmony import */ var src_app_company_dispatch_gatepass_add_gatepass_add_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/company-dispatch/gatepass-add/gatepass-add.component */ "./src/app/company-dispatch/gatepass-add/gatepass-add.component.ts");











var CouponCodeListComponent = /** @class */ (function () {
    function CouponCodeListComponent(service, toast, session, alertDialog, dialog) {
        this.service = service;
        this.toast = toast;
        this.session = session;
        this.alertDialog = alertDialog;
        this.dialog = dialog;
        this.fabBtnValue = 'add';
        this.active_tab = 'item_box';
        this.filter = {};
        this.couponData = [];
        this.mastercouponData = [];
        this.scanData = [];
        this.page_limit = 0;
        this.pagenumber = 1;
        this.start = 0;
        this.loader = false;
        this.noResult = false;
        this.assign_login_data = [];
        this.assign_login_data2 = [];
        this.tabCount = {};
        this.data = {};
        this.scanLimit = {};
        this.today_date = new Date();
        this.assign_login_data = this.session.getSession();
        this.assign_login_data = this.assign_login_data.value;
        this.assign_login_data2 = this.assign_login_data.data;
        this.downurl = service.downloadUrl;
        this.page_limit = service.pageLimit;
        this.couponCodeList();
        this.getScanLimitCount();
    }
    CouponCodeListComponent.prototype.ngOnInit = function () {
    };
    CouponCodeListComponent.prototype.pervious = function (type) {
        this.start = this.start - this.page_limit;
        if (type == 'scan_item') {
            this.scanCouponList();
        }
        else if (type == 'master_grand_box') {
            this.getGrandMaster();
        }
        else {
            this.couponCodeList();
        }
    };
    CouponCodeListComponent.prototype.nextPage = function (type) {
        this.start = this.start + this.page_limit;
        if (type == 'scan_item') {
            this.scanCouponList();
        }
        if (type == 'master_grand_box') {
            this.getGrandMaster();
        }
        else {
            this.couponCodeList();
        }
    };
    CouponCodeListComponent.prototype.couponCodeList = function () {
        var _this = this;
        this.loader = true;
        if (this.pagenumber > this.total_page) {
            this.pagenumber = this.total_page;
            this.start = this.pageCount - this.page_limit;
        }
        if (this.start < 0) {
            this.start = 0;
        }
        if (this.filter.date_created) {
            this.filter.date_created = moment__WEBPACK_IMPORTED_MODULE_3__(this.filter.date_created).format('YYYY-MM-DD');
        }
        if (this.filter.dispatch_date) {
            this.filter.dispatch_date = moment__WEBPACK_IMPORTED_MODULE_3__(this.filter.dispatch_date).format('YYYY-MM-DD');
        }
        this.filter.active_tab = this.active_tab;
        this.service.post_rqst({ 'filter': this.filter, 'start': this.start, 'pagelimit': 500 }, '/CouponCode/couponCodeList').subscribe(function (resp) {
            if (resp['statusCode'] == 200) {
                _this.couponData = resp['scanned_coupon_code_list'];
                _this.pageCount = resp['count'];
                _this.loader = false;
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
                    if (_this.couponData.length == 0) {
                        _this.noResult = true;
                    }
                }, 500);
            }
            else {
                _this.toast.errorToastr(resp['statusMsg']);
            }
        });
    };
    CouponCodeListComponent.prototype.scanCouponList = function () {
        var _this = this;
        this.loader = true;
        if (this.pagenumber > this.total_page) {
            this.pagenumber = this.total_page;
            this.start = this.pageCount - this.page_limit;
        }
        if (this.start < 0) {
            this.start = 0;
        }
        if (this.filter.date_created) {
            this.filter.date_created = moment__WEBPACK_IMPORTED_MODULE_3__(this.filter.date_created).format('YYYY-MM-DD');
        }
        if (this.filter.dispatch_date) {
            this.filter.dispatch_date = moment__WEBPACK_IMPORTED_MODULE_3__(this.filter.dispatch_date).format('YYYY-MM-DD');
        }
        if (this.filter.scanned_on) {
            this.filter.scanned_on = moment__WEBPACK_IMPORTED_MODULE_3__(this.filter.scanned_on).format('YYYY-MM-DD');
        }
        this.filter.active_tab = this.active_tab;
        this.service.post_rqst({ 'filter': this.filter, 'start': this.start, 'pagelimit': 500 }, 'CouponCode/scannedCouponCodeList').subscribe(function (resp) {
            if (resp['statusCode'] == 200) {
                _this.scanData = resp['scanned_coupon_code_list'];
                _this.pageCount = resp['count'];
                _this.loader = false;
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
                    if (_this.scanData.length == 0) {
                        _this.noResult = true;
                    }
                }, 500);
            }
            else {
                _this.toast.errorToastr(resp['statusMsg']);
            }
        });
    };
    CouponCodeListComponent.prototype.lastBtnValue = function (value) {
        this.fabBtnValue = value;
    };
    CouponCodeListComponent.prototype.refresh = function (type) {
        this.filter = {};
        if (this.start < 0) {
            this.start = 0;
        }
        else if (type == 'scan_item') {
            this.scanCouponList();
        }
        else if (type == 'master_grand_box') {
            this.getGrandMaster();
        }
        else {
            this.couponCodeList();
            this.getScanLimitCount();
        }
    };
    CouponCodeListComponent.prototype.reopenCoupon = function (couponCode) {
        var _this = this;
        var alertText;
        alertText = "You want to reopen this" + ' ' + couponCode + ' ' + 'code';
        this.alertDialog.confirm(alertText).then(function (result) {
            if (result) {
                _this.data.created_by_name = _this.assign_login_data2.name;
                _this.data.created_by_id = _this.assign_login_data2.id;
                _this.data.coupon_code = couponCode;
                _this.service.post_rqst({ 'data': _this.data }, "couponCode/CouponReopen").subscribe((function (response) {
                    if (response['statusCode'] == "200") {
                        _this.toast.successToastr(response['statusMsg']);
                        _this.scanCouponList();
                    }
                    else {
                        _this.toast.errorToastr(response['statusMsg']);
                    }
                }));
            }
        });
    };
    CouponCodeListComponent.prototype.exportAsXLSX = function (status) {
        var _this = this;
        this.loader = true;
        this.service.post_rqst({ 'filter': this.filter, 'start': this.start, 'pagelimit': this.page_limit }, '/Excel/coupon_code_all_list').subscribe((function (result) {
            if (result['msg'] == true) {
                _this.loader = false;
                window.open(_this.downurl + result['filename']);
                _this.couponCodeList();
            }
            else {
                _this.loader = false;
            }
        }));
    };
    CouponCodeListComponent.prototype.openScanLimitModal = function () {
        var _this = this;
        var dialogRef = this.dialog.open(_coupon_detail_modal_coupon_detail_modal_component__WEBPACK_IMPORTED_MODULE_8__["CouponDetailModalComponent"], {
            width: '500px',
            panelClass: 'cs-modal',
            disableClose: true,
            data: {
                'from': 'scan_limit_modal',
                'scan_limit': this.scanLimit.limit
            }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result == true) {
                _this.getScanLimitCount();
            }
        });
    };
    CouponCodeListComponent.prototype.getScanLimitCount = function () {
        var _this = this;
        this.service.post_rqst({}, 'CouponCode/scanLimit').subscribe(function (resp) {
            if (resp['statusCode'] == 200) {
                _this.scanLimit = resp['result'];
            }
            else {
                _this.toast.errorToastr(resp['statusMsg']);
            }
        }, function (err) {
            _this.loader = false;
        });
    };
    CouponCodeListComponent.prototype.getGrandMaster = function () {
        var _this = this;
        this.loader = true;
        if (this.pagenumber > this.total_page) {
            this.pagenumber = this.total_page;
            this.start = this.pageCount - this.page_limit;
        }
        if (this.start < 0) {
            this.start = 0;
        }
        if (this.filter.date_created) {
            this.filter.date_created = moment__WEBPACK_IMPORTED_MODULE_3__(this.filter.date_created).format('YYYY-MM-DD');
        }
        if (this.filter.dispatch_date) {
            this.filter.dispatch_date = moment__WEBPACK_IMPORTED_MODULE_3__(this.filter.dispatch_date).format('YYYY-MM-DD');
        }
        if (this.filter.scanned_on) {
            this.filter.scanned_on = moment__WEBPACK_IMPORTED_MODULE_3__(this.filter.scanned_on).format('YYYY-MM-DD');
        }
        this.filter.active_tab = this.active_tab;
        this.service.post_rqst({ 'filter': this.filter, 'start': this.start, 'pagelimit': this.page_limit }, 'Dispatch/fetchGrandMasterList').subscribe(function (resp) {
            if (resp['statusCode'] == 200) {
                _this.mastercouponData = resp['offer_coupon_grand_master'];
                _this.pageCount = resp['count'];
                _this.loader = false;
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
                    if (_this.mastercouponData.length == 0) {
                        _this.noResult = true;
                    }
                }, 500);
            }
            else {
                _this.toast.errorToastr(resp['statusMsg']);
            }
        });
    };
    CouponCodeListComponent.prototype.viewmasterboxdetail = function (id, type) {
        var data = { 'main_data': { 'id': id }, 'type': type };
        var dialogRef = this.dialog.open(src_app_company_dispatch_view_master_box_dispatch_detail_view_master_box_dispatch_detail_component__WEBPACK_IMPORTED_MODULE_9__["ViewMasterBoxDispatchDetailComponent"], {
            width: '1000px',
            data: data
        });
        dialogRef.afterClosed().subscribe(function (result) {
        });
    };
    CouponCodeListComponent.prototype.getDetails = function (id, type) {
        var dialogRef = this.dialog.open(src_app_company_dispatch_gatepass_add_gatepass_add_component__WEBPACK_IMPORTED_MODULE_10__["GatepassAddComponent"], {
            width: '1024px',
            panelClass: 'cs-modal',
            disableClose: true,
            data: {
                'model_type': type,
                'gatepass_id': id,
            }
        });
        dialogRef.afterClosed().subscribe(function (result) {
        });
    };
    CouponCodeListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-coupon-code-list',
            template: __webpack_require__(/*! ./coupon-code-list.component.html */ "./src/app/coupon/coupon-code-list/coupon-code-list.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_services_DatabaseService__WEBPACK_IMPORTED_MODULE_2__["DatabaseService"], ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_5__["ToastrManager"], src_app_localstorage_service__WEBPACK_IMPORTED_MODULE_4__["sessionStorage"], src_app_dialog_component__WEBPACK_IMPORTED_MODULE_6__["DialogComponent"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatDialog"]])
    ], CouponCodeListComponent);
    return CouponCodeListComponent;
}());



/***/ }),

/***/ "./src/app/coupon/coupon-module/coupon.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/coupon/coupon-module/coupon.module.ts ***!
  \*******************************************************/
/*! exports provided: CouponModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CouponModule", function() { return CouponModule; });
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
/* harmony import */ var _coupon_code_add_coupon_code_add_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../coupon-code-add/coupon-code-add.component */ "./src/app/coupon/coupon-code-add/coupon-code-add.component.ts");
/* harmony import */ var _coupon_code_detail_coupon_code_detail_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../coupon-code-detail/coupon-code-detail.component */ "./src/app/coupon/coupon-code-detail/coupon-code-detail.component.ts");
/* harmony import */ var _coupon_code_list_coupon_code_list_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../coupon-code-list/coupon-code-list.component */ "./src/app/coupon/coupon-code-list/coupon-code-list.component.ts");
/* harmony import */ var _coupon_detail_modal_coupon_detail_modal_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../coupon-detail-modal/coupon-detail-modal.component */ "./src/app/coupon/coupon-detail-modal/coupon-detail-modal.component.ts");
/* harmony import */ var _techiediaries_ngx_qrcode__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! @techiediaries/ngx-qrcode */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@techiediaries/ngx-qrcode/fesm5/techiediaries-ngx-qrcode.js");
/* harmony import */ var ngx_barcode__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ngx-barcode */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/ngx-barcode/index.js");


















// import { ManualDispatchListComponent } from 'src/app/manual-dispatch/manual-dispatch-list/manual-dispatch-list.component';
// import { SalesReturnListComponent } from 'src/app/sales-return/sales-return-list/sales-return-list.component';
var couponRoutes = [
    {
        path: "", children: [
            { path: "", component: _coupon_code_list_coupon_code_list_component__WEBPACK_IMPORTED_MODULE_14__["CouponCodeListComponent"], canActivate: [src_app_auth_component_guard__WEBPACK_IMPORTED_MODULE_11__["AuthComponentGuard"]], data: { expectedRole: ['1'] } },
            {
                path: "coupon-add", children: [
                    { path: '', component: _coupon_code_add_coupon_code_add_component__WEBPACK_IMPORTED_MODULE_12__["CouponCodeAddComponent"], canActivate: [src_app_auth_component_guard__WEBPACK_IMPORTED_MODULE_11__["AuthComponentGuard"]], data: { expectedRole: ['1'] } },
                    { path: "coupon-code-detail/:id", component: _coupon_code_detail_coupon_code_detail_component__WEBPACK_IMPORTED_MODULE_13__["CouponCodeDetailComponent"], canActivate: [src_app_auth_component_guard__WEBPACK_IMPORTED_MODULE_11__["AuthComponentGuard"]], data: { expectedRole: ['1'] } },
                ]
            },
        ]
    },
];
var CouponModule = /** @class */ (function () {
    function CouponModule() {
    }
    CouponModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_coupon_code_list_coupon_code_list_component__WEBPACK_IMPORTED_MODULE_14__["CouponCodeListComponent"], _coupon_detail_modal_coupon_detail_modal_component__WEBPACK_IMPORTED_MODULE_15__["CouponDetailModalComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild(couponRoutes),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_7__["NgMultiSelectDropDownModule"],
                src_app_material__WEBPACK_IMPORTED_MODULE_10__["MaterialModule"],
                angular_ng_autocomplete__WEBPACK_IMPORTED_MODULE_6__["AutocompleteLibModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialogModule"],
                ngx_mat_select_search__WEBPACK_IMPORTED_MODULE_8__["NgxMatSelectSearchModule"],
                src_app_app_utility_module__WEBPACK_IMPORTED_MODULE_9__["AppUtilityModule"],
                _techiediaries_ngx_qrcode__WEBPACK_IMPORTED_MODULE_16__["NgxQRCodeModule"],
                ngx_barcode__WEBPACK_IMPORTED_MODULE_17__["NgxBarcodeModule"],
            ],
            entryComponents: [_coupon_detail_modal_coupon_detail_modal_component__WEBPACK_IMPORTED_MODULE_15__["CouponDetailModalComponent"]]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], CouponModule);
    return CouponModule;
}());



/***/ })

}]);