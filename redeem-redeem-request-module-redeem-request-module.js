(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["redeem-redeem-request-module-redeem-request-module"],{

/***/ "./src/app/redeem/redeem-request-list/redeem-request-list.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/redeem/redeem-request-list/redeem-request-list.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-container\">\r\n  <div class=\"tab-surface\">\r\n    <button mat-button\r\n      [ngClass]=\"!RedeemMonth ? 'active' : ''\"\r\n      (click)=\"selectMonth('all', '')\">\r\n      All\r\n    </button>\r\n    <button *ngFor=\"let row of calenderInfo\" mat-button\r\n      [ngClass]=\"RedeemMonth == row.month && RedeemYear == row.year ? 'active' : ''\"\r\n      (click)=\"selectMonth(row.month, row.year)\">\r\n      {{row.monthYEAR | date :'MMM'}} {{row.year}}\r\n    </button>\r\n  </div>\r\n  <div class=\"tools-container\">\r\n    <h2>{{redeemType}} Redeem Request</h2>\r\n    <!-- <h2> Redeem Request</h2> -->\r\n\r\n    <div class=\"left-auto left-auto df ac flex-gap-10\">\r\n      <button mat-icon-button matTooltip=\"Refresh\" (click)=\"refresh()\">\r\n        <i class=\"material-icons\">refresh</i>\r\n      </button>\r\n      <button mat-raised-button color=\"primary\" (click)=\"exportWithDealer(active_tab)\"\r\n        *ngIf=\"redeemRequestList_data.length > 0\">\r\n        <i class=\"material-icons\">download</i> Download Excel (with Dealer)\r\n      </button>\r\n\r\n      <div class=\"pagination\" *ngIf=\"redeemRequestList_data.length > 0\">\r\n        <div class=\"pagination-content\">\r\n          Pages\r\n          <span>{{pagenumber}}</span>\r\n          of\r\n          <span>{{total_page}}</span>\r\n        </div>\r\n        <div class=\"page-nav\">\r\n          <button mat-icon-button matTooltip=\"Older\" (click)=\"pervious()\" [disabled]=\"start == 0\">\r\n            <i class=\"material-icons\">navigate_before</i>\r\n          </button>\r\n          <button mat-icon-button matTooltip=\"Newer\" (click)=\"nextPage()\" [disabled]=\"pagenumber == total_page \">\r\n            <i class=\"material-icons\">navigate_next</i>\r\n          </button>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"mat-tabbar\">\r\n        <button mat-button [ngClass]=\"active_tab == 'Pending' ? 'active' : ''\"\r\n          (click)=\"active_tab = 'Pending';filter.gift_status = '';redeemRequestList()\"><i\r\n            class=\"material-icons\">pending_actions</i>Pending\r\n          ({{redeem_count.Pending}})</button>\r\n        <button mat-button [ngClass]=\"active_tab == 'Approved' ? 'active' : ''\"\r\n          (click)=\"active_tab = 'Approved';filter.gift_status = ''; redeemRequestList()\"><i\r\n            class=\"material-icons\">swap_horiz</i>Approved\r\n          ({{redeemType == 'Cash'?redeem_count.Approved:redeem_count.Approved_Gift}})</button>\r\n\r\n        <button mat-button [ngClass]=\"active_tab == 'Reject' ? 'active' : ''\"\r\n          (click)=\"active_tab = 'Reject';filter.gift_status = '';redeemRequestList()\"><i\r\n            class=\"material-icons\">cancel</i>Reject\r\n          ({{redeem_count.Reject}})</button>\r\n        <button mat-button [ngClass]=\"active_tab == 'Hold' ? 'active' : ''\"\r\n          (click)=\"active_tab = 'Hold';filter.gift_status = '';redeemRequestList()\"><i\r\n            class=\"material-icons\">pause_circle</i>Hold\r\n          ({{redeem_count.Hold || 0}})</button>\r\n        <!-- <button *ngIf=\"redeemType=='Cash'\" mat-button [ngClass]=\"active_tab == 'Failed' ? 'active' : ''\"\r\n          (click)=\"active_tab = 'Failed';redeemRequestList()\"><i class=\"material-icons\">cancel</i>Failed Transaction\r\n          ({{redeem_count.Failed}})</button> -->\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"container container-scroll\" *ngIf=\"redeemType=='Cash'\">\r\n    <div class=\"mat-tabbar\" *ngIf=\"active_tab == 'Approved'\">\r\n      <ng-container>\r\n        <button mat-button [ngClass]=\"filter.gift_status == 'Under Process' ? 'active' : ''\"\r\n          (click)=\"filter.gift_status = 'Under Process';redeemRequestList()\"><i\r\n            class=\"material-icons\">pending_actions</i>UTR Pending ({{redeem_count.Under_Process}})</button>\r\n      </ng-container>\r\n\r\n      <button mat-button [ngClass]=\"filter.gift_status == 'Transferred' ? 'active' : ''\"\r\n        (click)=\"filter.gift_status = 'Transferred';redeemRequestList()\"><i class=\"material-icons\">task_alt</i>UTR\r\n        Submitted ({{redeem_count.Transferred}})</button>\r\n\r\n    </div>\r\n    <div class=\"cs-table horizontal-scroll\">\r\n      <div class=\"sticky-head\">\r\n        <div class=\"table-head\">\r\n          <table>\r\n            <tr>\r\n              <th class=\"w50\">Sno.</th>\r\n\r\n              <th class=\"w110\">Request Created</th>\r\n              <th class=\"w100\">Req. ID</th>\r\n              <th class=\"w100\">Profile Created By</th>\r\n              <th class=\"w160\">Name</th>\r\n              <th class=\"w110\">Mobile</th>\r\n              <ng-container *ngIf=\"redeemType=='Cash'\">\r\n                <th class=\"w110\">Account Holder Name</th>\r\n                <th class=\"w110\">Bank Name</th>\r\n                <th class=\"w150\">Account No.</th>\r\n                <th class=\"w110\">IFSC Code</th>\r\n                <!-- <th class=\"w50\" *ngIf=\"active_tab == 'Pending' || active_tab == 'Failed' || active_tab == 'Approved' \">Action</th> -->\r\n              </ng-container>\r\n              <!-- <ng-container *ngIf=\"redeemType!='Bank'\">\r\n                <th class=\"w150\">{{redeemType == 'Paytm' ? 'Paytm Number': 'Khalti Number'}}</th>\r\n              </ng-container> -->\r\n              <th class=\"w130\">{{redeemType == 'Khalti' ? 'Province': 'State'}}</th>\r\n              <th class=\"w130\">{{redeemType == 'Khalti' ? 'City': 'District'}}</th>\r\n              <th class=\"w100 text-right\">Redeem Point</th>\r\n              <th class=\"w100 text-right\">Amount Value</th>\r\n              <!-- <th class=\"w100 text-right\">Redeem Amount</th> -->\r\n              <th class=\"w100 text-right\">TDS Deduction %</th>\r\n\r\n              <th class=\"w100 text-right\">TDS Amount</th>\r\n              <!-- <th class=\"w100 text-right\">Actual Amount</th> -->\r\n\r\n\r\n\r\n\r\n              <th class=\"w160  text-center\" *ngIf=\"active_tab == 'Pending' || active_tab == 'Hold'\">Action</th>\r\n              <th class=\"w100 text-center\" *ngIf=\"active_tab != 'Pending' && active_tab != 'Hold'\">Mode</th>\r\n              <th class=\"w100  text-center\" *ngIf=\"active_tab != 'Pending' && active_tab != 'Hold'\">Status</th>\r\n              <th class=\"w150  text-center\" *ngIf=\"active_tab != 'Pending' && active_tab != 'Hold'\">UTR NO.</th>\r\n              <th class=\"w100\" *ngIf=\"active_tab != 'Pending' && active_tab != 'Hold'\">Transfer Date</th>\r\n\r\n\r\n              <!-- <th class=\"w100  text-center\" *ngIf=\"active_tab != 'Pending'\">TXN Status</th>\r\n              <th class=\"w150\" *ngIf=\"active_tab != 'Pending'\">TXN Status Date</th>\r\n              <th class=\"w160\" *ngIf=\"active_tab != 'Pending'\">TXN No.</th>\r\n              <th class=\"w150 text-center\" *ngIf=\"active_tab != 'Pending'\">TXN Date</th>\r\n              <th class=\"w200\" *ngIf=\"active_tab != 'Pending'\">TXN Remark</th> -->\r\n\r\n              <th class=\"w160 \" *ngIf=\"active_tab != 'Pending' && active_tab != 'Hold'\">Action By</th>\r\n              <th class=\"w150  text-center\" *ngIf=\"active_tab != 'Pending' && active_tab != 'Hold'\">Action Date</th>\r\n              <th class=\"w200\" *ngIf=\"active_tab == 'Reject'\">Reason</th>\r\n              <th class=\"w200\" *ngIf=\"active_tab == 'Hold'\">Hold Remark</th>\r\n            </tr>\r\n          </table>\r\n        </div>\r\n\r\n        <div class=\"table-head border-top\">\r\n          <table>\r\n            <tr>\r\n              <th class=\"w50\"></th>\r\n              <th class=\"w110\">\r\n                <div class=\"th-search-acmt\">\r\n                  <mat-form-field class=\"cs-input date-column infix-bodr\">\r\n                    <input matInput [matDatepicker]=\"picker\" placeholder=\"Date\" name=\"date_created\"\r\n                      [(ngModel)]=\"filter.date_created\" [max]=\"today_date\" (dateChange)=\"onDate($event)\" disabled>\r\n                    <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\r\n                    <mat-datepicker #picker disabled=\"false\"></mat-datepicker>\r\n                  </mat-form-field>\r\n                </div>\r\n              </th>\r\n\r\n              <th class=\"w100\">\r\n                <div class=\"th-search-acmt\">\r\n                  <mat-form-field class=\"example-full-width cs-input select-input\">\r\n                    <input matInput placeholder=\"Search...\" type=\"text\" name=\"req_id\" [(ngModel)]=\"filter.req_id\"\r\n                      (keyup.enter)=\"redeemRequestList('')\">\r\n                  </mat-form-field>\r\n                </div>\r\n              </th>\r\n              <th class=\"w100\">\r\n                <div class=\"th-search-acmt\">\r\n                  <mat-form-field class=\"example-full-width cs-input select-input\">\r\n                    <input matInput placeholder=\"Search...\" type=\"text\" name=\"created_by_name\"\r\n                      [(ngModel)]=\"filter.created_by_name\" (keyup.enter)=\"redeemRequestList('')\">\r\n                  </mat-form-field>\r\n                </div>\r\n              </th>\r\n              <th class=\"w160\">\r\n                <div class=\"th-search-acmt\">\r\n                  <mat-form-field class=\"example-full-width cs-input select-input\">\r\n                    <input matInput placeholder=\"Search...\" type=\"text\" name=\"user_name\" [(ngModel)]=\"filter.user_name\"\r\n                      (keyup.enter)=\"redeemRequestList()\">\r\n                  </mat-form-field>\r\n                </div>\r\n              </th>\r\n              <th class=\"w110\">\r\n                <div class=\"th-search-acmt\">\r\n                  <mat-form-field class=\"example-full-width cs-input select-input\">\r\n                    <input type=\"number\" maxlength=\"10\" matInput placeholder=\"Search...\" type=\"text\" name=\"mobile_no\"\r\n                      [(ngModel)]=\"filter.mobile_no\" onkeypress=\"return event.charCode>=48 && event.charCode<=57\"\r\n                      maxlength=\"10\" (keyup.enter)=\"redeemRequestList()\">\r\n                  </mat-form-field>\r\n                </div>\r\n              </th>\r\n              <!-- <th class=\"w110\">\r\n                <div class=\"th-search-acmt\">\r\n                  <mat-form-field class=\"cs-input select-input\">\r\n                    <mat-label>Select</mat-label>\r\n                    <mat-select name=\"redeem_type\" #redeem_type=\"ngModel\" [(ngModel)]=\"filter.redeem_type\"\r\n                      (selectionChange)=\"redeemRequestList()\">\r\n                      <mat-option value=\"All\">All</mat-option>\r\n\r\n                      <mat-option value=\"Gift\">Gift</mat-option>\r\n                      <mat-option value=\"Cash\">Cash</mat-option>\r\n                    </mat-select>\r\n                  </mat-form-field>\r\n                </div>\r\n              </th> -->\r\n\r\n              <ng-container *ngIf=\"redeemType=='Cash'\">\r\n                <th class=\"w110\">\r\n                  <div class=\"th-search-acmt\">\r\n                    <mat-form-field class=\"example-full-width cs-input select-input\">\r\n                      <input matInput placeholder=\"Search...\" type=\"text\" name=\"account_holder_name\"\r\n                        [(ngModel)]=\"filter.account_holder_name\" (keyup.enter)=\"redeemRequestList()\">\r\n                    </mat-form-field>\r\n                  </div>\r\n                </th>\r\n                <th class=\"w110\">\r\n                  <div class=\"th-search-acmt\">\r\n                    <mat-form-field class=\"example-full-width cs-input select-input\">\r\n                      <input matInput placeholder=\"Search...\" type=\"text\" name=\"bank_name\"\r\n                        [(ngModel)]=\"filter.bank_name\" (keyup.enter)=\"redeemRequestList()\">\r\n                    </mat-form-field>\r\n                  </div>\r\n                </th>\r\n                <th class=\"w150\">\r\n                  <div class=\"th-search-acmt\">\r\n                    <mat-form-field class=\"example-full-width cs-input select-input\">\r\n                      <input matInput placeholder=\"Search...\" type=\"text\" name=\"account_no\"\r\n                        [(ngModel)]=\"filter.account_no\" (keyup.enter)=\"redeemRequestList()\">\r\n                    </mat-form-field>\r\n                  </div>\r\n                </th>\r\n                <th class=\"w110\">\r\n                  <div class=\"th-search-acmt\">\r\n                    <mat-form-field class=\"example-full-width cs-input select-input\">\r\n                      <input matInput placeholder=\"Search...\" type=\"text\" name=\"ifsc_code\"\r\n                        [(ngModel)]=\"filter.ifsc_code\" (keyup.enter)=\"redeemRequestList()\">\r\n                    </mat-form-field>\r\n                  </div>\r\n                </th>\r\n\r\n                <!-- <th class=\"w50\" *ngIf=\"active_tab == 'Pending' || active_tab == 'Failed' || active_tab == 'Approved' \">\r\n                </th> -->\r\n              </ng-container>\r\n              <!-- <ng-container *ngIf=\"redeemType!='Bank'\">\r\n                <th class=\"w150\">\r\n                  <div class=\"th-search-acmt\">\r\n                    <mat-form-field class=\"example-full-width cs-input select-input\">\r\n                      <input type=\"number\"  maxlength=\"10\" matInput placeholder=\"Search...\" type=\"text\" name=\"wallet_number\" [(ngModel)]=\"filter.wallet_number\"\r\n                        (keyup.enter)=\"redeemRequestList()\">\r\n                    </mat-form-field>\r\n                  </div>\r\n                </th>\r\n              </ng-container> -->\r\n              <th class=\"w130\">\r\n\r\n\r\n                <!-- <div class=\"th-search-acmt\">\r\n                    <mat-form-field class=\"cs-input select-input\">\r\n                      <mat-select name=\"reporting_manager_id\" #reporting_manager_id=\"ngModel\"\r\n                        [(ngModel)]=\"search.reporting_manager_id\" (selectionChange)=\"getTravelList();\">\r\n                        <mat-option>\r\n                          <ngx-mat-select-search noEntriesFoundLabel=\"'no data found'\" placeholderLabel=\"Search..\"\r\n                            (keyup)=\"getReportManager($event.target.value)\"></ngx-mat-select-search>\r\n                        </mat-option>\r\n                        <mat-option *ngFor=\"let list of report_manager;let index=index\" value=\"{{list.id}}\">\r\n                          {{list.name}}\r\n                        </mat-option>\r\n                      </mat-select>\r\n                    </mat-form-field>\r\n                  </div> -->\r\n\r\n                <div class=\"th-search-acmt\">\r\n                  <mat-form-field class=\"cs-input select-input\">\r\n                    <mat-label>State</mat-label>\r\n                    <mat-select name=\"state\" #state=\"ngModel\" [(ngModel)]=\"filter.state\"\r\n                      (selectionChange)=\"redeemRequestList()\">\r\n                      <mat-option disabled=\"\">Select State</mat-option>\r\n                      <mat-option *ngFor=\"let row of states\" value=\"{{row.state_name}}\">\r\n                        {{row.state_name}}\r\n                      </mat-option>\r\n                    </mat-select>\r\n                  </mat-form-field>\r\n                </div>\r\n\r\n              </th>\r\n              <th class=\"w130\">\r\n                <div class=\"th-search-acmt\">\r\n                  <mat-form-field class=\"example-full-width cs-input select-input\">\r\n                    <input matInput placeholder=\"Search...\" type=\"text\" name=\"district\" [(ngModel)]=\"filter.district\"\r\n                      (keyup.enter)=\"redeemRequestList()\">\r\n                  </mat-form-field>\r\n                </div>\r\n              </th>\r\n              <th class=\"w100 text-right\">&nbsp;</th>\r\n              <th class=\"w100 text-right\">&nbsp;</th>\r\n              <th class=\"w100 text-right\">\r\n                <div class=\"th-search-acmt\">\r\n                  <mat-form-field class=\"example-full-width cs-input select-input\">\r\n                    <input matInput placeholder=\"Search...\" type=\"text\" name=\"tds_percentage\"\r\n                      [(ngModel)]=\"filter.tds_percentage\" (keyup.enter)=\"redeemRequestList()\">\r\n                  </mat-form-field>\r\n                </div>\r\n              </th>\r\n              <th class=\"w100 text-right\">&nbsp;</th>\r\n\r\n              <!-- <th class=\"w100 text-right\">&nbsp;</th> -->\r\n\r\n\r\n              <th class=\"w160  text-center\" *ngIf=\"active_tab == 'Pending' || active_tab == 'Hold'\">&nbsp;</th>\r\n              <th class=\"w100\" *ngIf=\"active_tab != 'Pending' && active_tab != 'Hold'\">\r\n                <!-- <div class=\"th-search-acmt\">\r\n               <mat-form-field class=\"example-full-width cs-input select-input\">\r\n                 <input matInput placeholder=\"Search...\" type=\"text\" name=\"transaction_id\" [(ngModel)]=\"filter.transaction_id\" (keyup.enter)=\"redeemRequestList('')\">\r\n\r\n               </mat-form-field>\r\n             </div> -->\r\n              </th>\r\n\r\n              <th class=\"w100  text-center\" *ngIf=\"active_tab != 'Pending' && active_tab != 'Hold'\">\r\n                <div class=\"th-search-acmt\">\r\n                  <mat-form-field class=\"cs-input select-input\">\r\n                    <mat-select (selectionChange)=\"redeemRequestList()\" name=\"gift_status\" #gift_status=\"ngModel\"\r\n                      [(ngModel)]=\"filter.gift_status\">\r\n                      <mat-option value=\"\">All</mat-option>\r\n                      <mat-option value=\"Under Process\" ng-reflect-value=\"Under Process\">Under Process</mat-option>\r\n\r\n                      <mat-option value=\"Transferred\" ng-reflect-value=\"Transferred\">Transferred</mat-option>\r\n                      <!-- <mat-option value=\"Inprocess\" ng-reflect-value=\"Inprocess\">Inprocess</mat-option>\r\n                    <mat-option value=\"Success\" ng-reflect-value=\"Success\">Success</mat-option>\r\n                    <mat-option value=\"Failure\" ng-reflect-value=\"Failure\">Failure</mat-option> -->\r\n                      <!-- <mat-option value=\"Reject\" ng-reflect-value=\"Reject\">Reject</mat-option> -->\r\n                    </mat-select>\r\n                  </mat-form-field>\r\n                </div>\r\n              </th>\r\n              <th class=\"w150 text-right\" *ngIf=\"active_tab != 'Pending' && active_tab != 'Hold'\">&nbsp;</th>\r\n              <th class=\"w100\" *ngIf=\"active_tab != 'Pending' && active_tab != 'Hold'\">\r\n                <div class=\"th-search-acmt\">\r\n                  <mat-form-field class=\"cs-input date-column infix-bodr\">\r\n                    <input matInput [matDatepicker]=\"picker2\" placeholder=\"Date\" name=\"transfer_date\"\r\n                      [(ngModel)]=\"filter.transfer_date\" [max]=\"today_date\" (dateChange)=\"onDate($event)\" disabled>\r\n                    <mat-datepicker-toggle matSuffix [for]=\"picker2\"></mat-datepicker-toggle>\r\n                    <mat-datepicker #picker2 disabled=\"false\"></mat-datepicker>\r\n                  </mat-form-field>\r\n                </div>\r\n              </th>\r\n\r\n              <!-- <th class=\"w100  text-center\" *ngIf=\"active_tab != 'Pending'\">\r\n              <div class=\"th-search-acmt\">\r\n                <mat-form-field class=\"cs-input select-input\">\r\n                  <mat-select (selectionChange)=\"redeemRequestList()\" name=\"gift_status\"\r\n                    #gift_status=\"ngModel\" [(ngModel)]=\"filter.gift_status\">\r\n                    <mat-option value=\"\">All</mat-option>\r\n                    <mat-option value=\"Under Process\" ng-reflect-value=\"Under Process\">Under Process</mat-option>\r\n\r\n                    <mat-option value=\"Transferred\" ng-reflect-value=\"Transferred\">Transferred</mat-option>\r\n                    <mat-option value=\"Inprocess\" ng-reflect-value=\"Inprocess\">Inprocess</mat-option>\r\n                    <mat-option value=\"Success\" ng-reflect-value=\"Success\">Success</mat-option>\r\n                    <mat-option value=\"Failure\" ng-reflect-value=\"Failure\">Failure</mat-option>\r\n                    <mat-option value=\"Reject\" ng-reflect-value=\"Reject\">Reject</mat-option>\r\n                  </mat-select>\r\n                </mat-form-field>\r\n              </div>\r\n            </th>\r\n            <th class=\"w150\" *ngIf=\"active_tab != 'Pending'\">&nbsp;</th>\r\n            <th class=\"w160\" *ngIf=\"active_tab != 'Pending'\">\r\n              <div class=\"th-search-acmt\">\r\n             <mat-form-field class=\"example-full-width cs-input select-input\">\r\n               <input matInput placeholder=\"Search...\" type=\"text\" name=\"razorpay_payout_id\" [(ngModel)]=\"filter.razorpay_payout_id\" (keyup.enter)=\"redeemRequestList('')\">\r\n               <input matInput placeholder=\"Search...\" type=\"text\" name=\"transaction_id\" [(ngModel)]=\"filter.transaction_id\" (keyup.enter)=\"redeemRequestList('')\">\r\n\r\n             </mat-form-field>\r\n           </div></th>\r\n            <th class=\"w150\" *ngIf=\"active_tab != 'Pending'\">\r\n              <div class=\"th-search-acmt\">\r\n                <mat-form-field class=\"cs-input date-column infix-bodr\">\r\n                  <input matInput [matDatepicker]=\"picker5\" placeholder=\"Date\" name=\"transaction_date\"\r\n                    [(ngModel)]=\"filter.transaction_date\" [max]=\"today_date\"  (dateChange)=\"onDate($event)\" disabled>\r\n                  <mat-datepicker-toggle matSuffix [for]=\"picker5\"></mat-datepicker-toggle>\r\n                  <mat-datepicker #picker5 disabled=\"false\"></mat-datepicker>\r\n                </mat-form-field>\r\n              </div>\r\n              </th>\r\n\r\n\r\n\r\n              <th class=\"w200\" *ngIf=\"active_tab != 'Pending'\">&nbsp;</th> -->\r\n\r\n\r\n              <th class=\"w160 \" *ngIf=\"active_tab != 'Pending' && active_tab != 'Hold'\">&nbsp;</th>\r\n              <th class=\"w150   text-center\" *ngIf=\"active_tab != 'Pending' && active_tab != 'Hold'\">\r\n                <div class=\"th-search-acmt\">\r\n                  <mat-form-field class=\"cs-input date-column infix-bodr\">\r\n                    <input matInput [matDatepicker]=\"picker1\" placeholder=\"Date\" name=\"last_status_updated_on\"\r\n                      [(ngModel)]=\"filter.last_status_updated_on\" [max]=\"today_date\" (dateChange)=\"onDate($event)\"\r\n                      disabled>\r\n                    <mat-datepicker-toggle matSuffix [for]=\"picker1\"></mat-datepicker-toggle>\r\n                    <mat-datepicker #picker1 disabled=\"false\"></mat-datepicker>\r\n                  </mat-form-field>\r\n                </div>\r\n              </th>\r\n              <th class=\"w200\" *ngIf=\"active_tab == 'Reject'\">&nbsp;</th>\r\n\r\n            </tr>\r\n          </table>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"table-container\">\r\n        <div class=\"table-content\">\r\n          <table>\r\n            <ng-container *ngIf=\"!loader\">\r\n              <tr *ngFor=\"let row of redeemRequestList_data; let i = index;\"\r\n                [ngClass]=\"{'Current': service.currentUserID == row.id}\">\r\n                <td class=\"w50\">{{i+1}}</td>\r\n                <td class=\"w110\">{{row.date_created | date :'dd MMM yyyy'}}</td>\r\n                <td class=\"w100\">\r\n                  <a class=\"link-btn\" style=\"cursor:pointer;color:#2563eb;font-weight:600;\"\r\n                    (click)=\"gotoRedeemDetail(row.id)\">{{row.req_id ? row.req_id : '---'}}</a>\r\n                </td>\r\n                <td class=\"w100\">{{row.created_by_name ? row.created_by_name : '---'}}</td>\r\n\r\n                <td class=\"w160\">\r\n                  <a class=\"link-btn\" style=\"cursor:pointer;color:#7c3aed;font-weight:600;\"\r\n                    [routerLink]=\"['/purchase-list', 'distribution-detail', row.user_id, 'Profile']\"\r\n                    [queryParams]=\"{'state':row.state, 'id':row.user_id, 'type':row.type}\">{{row.user_name ?\r\n                    (row.user_name | titlecase) : '---'}}</a>\r\n                  ({{row.type=='8'?'Ply Expert':(row.type=='21'?'Fabricator':'Ambassador')}})\r\n                </td>\r\n                <td class=\"w110\">{{row.mobile ? row.mobile : '---'}}</td>\r\n\r\n                <!-- <td class=\"w110\">{{row.redeem_type ? row.redeem_type : '---'}}</td> -->\r\n                <ng-container *ngIf=\"redeemType=='Cash'\">\r\n                  <td class=\"w110\">{{row.account_holder_name ? (row.account_holder_name | titlecase) : '---'}}</td>\r\n                  <td class=\"w110\">{{row.bank_name ? (row.bank_name | titlecase) : '---'}}</td>\r\n                  <td class=\"w150\">{{row.account_no ? row.account_no : '---'}}</td>\r\n                  <td class=\"w110\">{{row.ifsc_code ? row.ifsc_code : '---'}}</td>\r\n                  <!-- <td class=\"w50\" *ngIf=\"active_tab == 'Pending' || active_tab == 'Failed'  || active_tab == 'Approved'\">\r\n                    <div class=\"action-button text-right\" *ngIf=\"row.gift_status != 'Transferred'\">\r\n                    <a mat-icon-button matTooltip=\"Edit\" (click)=\"updateBank(row.id,'bank', row.account_holder_name,row.bank_name,row.account_no,row.ifsc_code)\">\r\n                      <i class=\"material-icons edit\">create</i>\r\n                    </a>\r\n                  </div>\r\n                </td> -->\r\n                </ng-container>\r\n                <!-- <ng-container *ngIf=\"redeemType!='Bank'\">\r\n                  <td class=\"w150\">\r\n                    {{row.wallet_number}}\r\n                    <ng-container *ngIf=\"redeemType=='Paytm' && active_tab == 'Pending'\">\r\n                      <div class=\"action-button text-right\">\r\n                        <a mat-icon-button matTooltip=\"Edit\" (click)=\"updateNumber(row.id,'wallet', row.wallet_number)\">\r\n                          <i class=\"material-icons edit\">create</i>\r\n                        </a>\r\n                      </div>\r\n                    </ng-container>\r\n\r\n                  </td>\r\n                </ng-container> -->\r\n                <td class=\"w130\">{{row.state ? row.state : '---'}}</td>\r\n                <td class=\"w130\">{{row.district ? row.district : '---'}}</td>\r\n                <td class=\"w100 text-right\">{{row.point ? (row.point) : '---'}}</td>\r\n                <td class=\"w100 text-right\">{{row.point_range_value ? (row.point_range_value) : '---'}}</td>\r\n                <td class=\"w100 text-right\">{{row.tds_percentage ? (row.tds_percentage+'%') : '---'}}</td>\r\n\r\n                <td class=\"w100 text-right\">{{row.tds_amount ? (row.tds_amount) : '---'}}</td>\r\n                <!-- <td class=\"w100 text-right\">{{row.point_range_value - row.tds_amount}}</td> -->\r\n\r\n                <td class=\"w160  text-center\"\r\n                  *ngIf=\"assign_login_data2.edit_redeem_request=='1' && (active_tab == 'Pending' || active_tab == 'Hold')\">\r\n                  <ng-container *ngIf=\"row.status == 'Pending' || row.status == 'Hold'\">\r\n                    <a class=\"link-btn\" (click)=\"openDialog(row.id,row.user_id,'redeem_status', '', row.status)\">Change\r\n                      Status</a>\r\n                  </ng-container>\r\n                  <!-- <div class=\"flex-button\">\r\n                    <button mat-raised-button color=\"accent\"\r\n\r\n                      (click)=\"openDialog(row.id,'redeem_status', row.redeem_type, 'Approved', row.cash_point)\">Approved</button>\r\n                    <button mat-raised-button color=\"warn\"\r\n                      (click)=\"openDialog(row.id,'redeem_status', row.redeem_type, 'Reject', row.cash_point)\">Reject</button>\r\n                  </div> -->\r\n                </td>\r\n                <td class=\"w100 text-center\" *ngIf=\"active_tab != 'Pending' && active_tab != 'Hold'\">{{row.payment_mode ? (row.payment_mode) :\r\n                  '---'}}</td>\r\n                <td class=\"w100  text-center\" *ngIf=\"active_tab != 'Pending' && active_tab != 'Hold'\">\r\n                  <!-- <ng-container *ngIf=\"active_tab == 'Pending' && (redeemType=='Bank' || redeemType=='Paytm')\">\r\n                    {{row.status}}\r\n                  </ng-container> -->\r\n                  <strong class=\"Reject\" *ngIf=\"row.status == 'Reject'\">\r\n                    {{row.status ? row.status : '---'}}\r\n                  </strong>\r\n                  <div *ngIf=\"row.gift_status == 'Transferred'\">\r\n                    <strong class=\"Approved\">\r\n                      {{row.gift_status ? row.gift_status : '---'}}\r\n                    </strong>\r\n                  </div>\r\n                  <div class=\"th-search-acmt\" *ngIf=\"row.status == 'Approved' && row.gift_status != 'Transferred'\">\r\n                    <mat-form-field class=\"cs-input select-input\">\r\n                      <mat-label>{{row.gift_status}}</mat-label>\r\n                      <mat-select [name]=\"'gift_status'+'i'\" #gift_status=\"ngModel\" [(ngModel)]=\"row.gift_status\"\r\n                        required\r\n                        (selectionChange)=\"opengiftDialog(row.id,row.user_id,'gift_status', row.redeem_type, row.gift_status,row.point)\">\r\n                        <mat-option disabled=\"\">Under Process</mat-option>\r\n                        <mat-option value=\"Transferred\">Tranferred</mat-option>\r\n                      </mat-select>\r\n                    </mat-form-field>\r\n                  </div>\r\n\r\n\r\n                </td>\r\n\r\n                <td class=\"w150\" *ngIf=\"active_tab != 'Pending' && active_tab != 'Hold'\">{{row.utr_no ? row.utr_no : '---'}}</td>\r\n                <td class=\"w100\" *ngIf=\"active_tab != 'Pending' && active_tab != 'Hold' &&  row.transfer_date !='0000-00-00'\">{{\r\n                  row.transfer_date | date :'dd MMM yyyy'}}</td>\r\n                <td class=\"w100\" *ngIf=\"active_tab != 'Pending' && active_tab != 'Hold' && row.transfer_date =='0000-00-00'\">--\r\n                <td>\r\n\r\n\r\n\r\n\r\n                  <!-- <td class=\"w100 text-center\" *ngIf=\"active_tab != 'Pending'\">{{row.transaction_status ? (row.transaction_status) : '---'}}</td>\r\n                <td class=\"w150 text-center\" *ngIf=\"active_tab != 'Pending' && row.transaction_status_date !='0000-00-00 00:00:00'\">{{row.transaction_status_date | date :'dd MMM yyyy, h: mm a'}}</td>\r\n                <td class=\"w150 text-center\" *ngIf=\"active_tab != 'Pending'  && row.transaction_status_date =='0000-00-00 00:00:00'\">---</td>\r\n                <td class=\"w160\" *ngIf=\"active_tab != 'Pending'\">\r\n                  <ng-container *ngIf=\"redeemType=='Cash'\">\r\n                    {{row.transaction_id ? row.transaction_id : '---'}}\r\n                  </ng-container>\r\n                </td>\r\n                <td class=\"w150 text-center\" *ngIf=\"active_tab != 'Pending' && row.transaction_date !='0000-00-00 00:00:00'\">{{row.transaction_date | date :'dd MMM yyyy, h: mm a'}}</td>\r\n                <td class=\"w150 text-center\" *ngIf=\"active_tab != 'Pending'  && row.transaction_date =='0000-00-00 00:00:00'\">---</td>\r\n\r\n                <td class=\"w200\" *ngIf=\"active_tab != 'Pending'\">{{row.transaction_desc ?\r\n                  (row.transaction_desc | titlecase) : '---'}}</td> -->\r\n\r\n\r\n                <td class=\"w160 \" *ngIf=\"active_tab != 'Pending' && active_tab != 'Hold'\">{{row.last_status_updated_by_name ?\r\n                  (row.last_status_updated_by_name | titlecase) : '---'}}</td>\r\n                <td class=\"w150   text-center\" *ngIf=\"active_tab != 'Pending' && active_tab != 'Hold'\">{{row.last_status_updated_on ?\r\n                  (row.last_status_updated_on | date :'dd MMM yyyy, h:mm a') : '---'}}</td>\r\n                <td class=\"w200\" *ngIf=\"active_tab == 'Reject'\">{{row.reject_reason}}</td>\r\n                <td class=\"w200\" *ngIf=\"active_tab == 'Hold'\">{{row.hold_remark}}</td>\r\n\r\n              </tr>\r\n            </ng-container>\r\n\r\n            <ng-container *ngIf=\"loader\">\r\n              <tr class=\"sk-loading\" *ngFor=\"let row of [].constructor(10)\">\r\n\r\n                <td class=\"w110\">\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n                <td class=\"w100\">\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n                <td class=\"w160\">\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n                <td class=\"w110\">\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n\r\n                <ng-container *ngIf=\"redeemType=='Cash'\">\r\n                  <td class=\"w110\">\r\n                    <div>&nbsp;</div>\r\n                  </td>\r\n                  <td class=\"w110\">\r\n                    <div>&nbsp;</div>\r\n                  </td>\r\n                  <td class=\"w150\">\r\n                    <div>&nbsp;</div>\r\n                  </td>\r\n                  <td class=\"w110\">\r\n                    <div>&nbsp;</div>\r\n                  </td>\r\n                  <!-- <td class=\"w50\" *ngIf=\"active_tab == 'Pending' || active_tab == 'Failed' || active_tab == 'Approved'\">\r\n                    <div>&nbsp;</div>\r\n                  </td> -->\r\n                </ng-container>\r\n                <!-- <ng-container *ngIf=\"redeemType!='Bank'\">\r\n                  <td class=\"w150\">\r\n                    <div>&nbsp;</div>\r\n                  </td>\r\n                </ng-container> -->\r\n                <td class=\"w130\">\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n                <td class=\"w130\">\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n                <td class=\"w100 text-right\">\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n                <td class=\"w100 text-right\">\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n                <td class=\"w100 text-right\">\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n                <td class=\"w100 text-right\">\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n                <!-- <td class=\"w100 text-right\">\r\n                  <div>&nbsp;</div>\r\n                </td> -->\r\n                <td class=\"w160  text-center\" *ngIf=\"active_tab == 'Pending' || active_tab == 'Hold'\">\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n                <td class=\"w100 text-right\" *ngIf=\"active_tab != 'Pending'\">\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n                <td class=\"w100 text-right\" *ngIf=\"active_tab != 'Pending'\">\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n                <td class=\"w150 text-right\" *ngIf=\"active_tab != 'Pending' && active_tab != 'Hold'\">\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n                <td class=\"w100  text-center\" *ngIf=\"active_tab != 'Pending' && active_tab != 'Hold'\">\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n                <!-- <td class=\"w160\" *ngIf=\"active_tab != 'Pending'\">\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n                <td class=\"w110  text-center\" *ngIf=\"active_tab != 'Pending'\">\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n                <td class=\"w200\" *ngIf=\"active_tab != 'Pending'\">\r\n                  <div>&nbsp;</div>\r\n                </td> -->\r\n                <td class=\"w100  text-center\" *ngIf=\"active_tab != 'Pending' && active_tab != 'Hold'\">\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n                <td class=\"w110\">\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n                <td class=\"w150  text-center\" *ngIf=\"active_tab != 'Pending' && active_tab != 'Hold'\">\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n                <td class=\"w160 \" *ngIf=\"active_tab != 'Pending' && active_tab != 'Hold'\">\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n                <td class=\"w200\" *ngIf=\"active_tab == 'Reject'\">\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n              </tr>\r\n            </ng-container>\r\n          </table>\r\n        </div>\r\n\r\n\r\n      </div>\r\n\r\n      <ng-container *ngIf=\"redeemRequestList_data.length == 0 && datanotfound == true\">\r\n        <app-not-result-found></app-not-result-found>\r\n      </ng-container>\r\n    </div>\r\n\r\n\r\n  </div>\r\n\r\n  <div class=\"container container-scroll\" *ngIf=\"redeemType!='Cash'\">\r\n    <div class=\"mat-tabbar\" *ngIf=\"active_tab == 'Approved'\">\r\n      <ng-container>\r\n        <button mat-button [ngClass]=\"filter.gift_status == 'Under Process' ? 'active' : ''\"\r\n          (click)=\"filter.gift_status = 'Under Process';redeemRequestList()\"><i\r\n            class=\"material-icons\">pending_actions</i>Tracking ID Pending ({{redeem_count.Under_Process}})</button>\r\n      </ng-container>\r\n\r\n      <button mat-button [ngClass]=\"filter.gift_status == 'Shipped' ? 'active' : ''\"\r\n        (click)=\"filter.gift_status = 'Shipped';redeemRequestList()\"><i class=\"material-icons\">task_alt</i>Tracking ID\r\n        Submited ({{redeem_count.Shipped}})</button>\r\n\r\n    </div>\r\n    <div class=\"cs-table horizontal-scroll\">\r\n      <div class=\"sticky-head\">\r\n        <div class=\"table-head\">\r\n          <table>\r\n            <tr>\r\n              <th class=\"w60\">Sr.No</th>\r\n              <th class=\"w90\">Date</th>\r\n              <th class=\"w100\">Req. ID</th>\r\n              <th class=\"w150\">Name</th>\r\n              <th class=\"w110\">Mobile No.</th>\r\n              <th class=\"w200\">Gift</th>\r\n              <th class=\"w200\">Address</th>\r\n\r\n              <th class=\"w100 text-right\">Points Request</th>\r\n              <th class=\"w100 text-right\">TDS Deduction %</th>\r\n\r\n              <th class=\"w100 text-right\">TDS Amount</th>\r\n\r\n              <!-- <th class=\"w100 text-right\">Points Value</th>\r\n\r\n              <th class=\"w100 text-right\">Equivalent Cash</th> -->\r\n              <th class=\"w100 text-right\" *ngIf=\"active_tab == 'Approved'\">Shipping Type</th>\r\n              <th class=\"w100 text-right\" *ngIf=\"active_tab == 'Approved'\">Estimate Date</th>\r\n              <th class=\"w150 text-center\" *ngIf=\"active_tab == 'Approved'\">Track ID</th>\r\n\r\n              <th class=\"w200 text-left\" *ngIf=\"active_tab == 'Approved'\">Shipping Remark</th>\r\n\r\n              <th class=\"w110\">Redeem Status</th>\r\n              <th class=\"w200\" *ngIf=\"active_tab == 'Hold'\">Hold Remark</th>\r\n              <th class=\"w110\" *ngIf=\"active_tab == 'Approved'\">Gift Points Status</th>\r\n              <th class=\"w110  text-center\"\r\n                *ngIf=\"assign_login_data2.edit_redeem_request=='1' && (active_tab == 'Pending' || active_tab == 'Hold')\">Action</th>\r\n            </tr>\r\n          </table>\r\n        </div>\r\n\r\n        <div class=\"table-head border-top\">\r\n          <table>\r\n            <tr>\r\n              <th class=\"w60\">&nbsp;</th>\r\n              <th class=\"w90\">\r\n                <div class=\"th-search-acmt\">\r\n                  <mat-form-field class=\"cs-input date-column infix-bodr\">\r\n                    <input matInput [matDatepicker]=\"picker\" placeholder=\"Date\" name=\"date_created\"\r\n                      [(ngModel)]=\"filter.date_created\" (dateChange)=\"onDate($event)\" [max]=\"today_date\" disabled>\r\n                    <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\r\n                    <mat-datepicker #picker disabled=\"false\"></mat-datepicker>\r\n                  </mat-form-field>\r\n                </div>\r\n              </th>\r\n              <th class=\"w100\">\r\n                <div class=\"th-search-acmt\">\r\n                  <mat-form-field class=\"example-full-width cs-input select-input\">\r\n                    <input matInput placeholder=\"Search...\" type=\"text\" name=\"req_id\" [(ngModel)]=\"filter.req_id\"\r\n                      (keyup.enter)=\"redeemRequestList('')\">\r\n                  </mat-form-field>\r\n                </div>\r\n              </th>\r\n              <th class=\"w150\">\r\n                <div class=\"th-search-acmt\">\r\n                  <mat-form-field class=\"example-full-width cs-input select-input\">\r\n                    <input matInput placeholder=\"Search...\" type=\"text\" name=\"user_name\" [(ngModel)]=\"filter.user_name\"\r\n                      (keyup.enter)=\"redeemRequestList('')\">\r\n                  </mat-form-field>\r\n                </div>\r\n              </th>\r\n\r\n              <th class=\"w110\">\r\n                <div class=\"th-search-acmt\">\r\n                  <mat-form-field class=\"example-full-width cs-input select-input\">\r\n                    <input matInput placeholder=\"Search...\" type=\"text\" name=\"mobile_no\" [(ngModel)]=\"filter.mobile_no\"\r\n                      onkeypress=\"return event.charCode>=48 && event.charCode<=57\" maxlength=\"10\"\r\n                      (keyup.enter)=\"redeemRequestList('')\">\r\n                  </mat-form-field>\r\n                </div>\r\n              </th>\r\n\r\n\r\n              <th class=\"w200\">\r\n                <div class=\"th-search-acmt\">\r\n                  <mat-form-field class=\"example-full-width cs-input select-input\">\r\n                    <input matInput placeholder=\"Search...\" type=\"text\" name=\"gift_name\" [(ngModel)]=\"filter.gift_name\"\r\n                      (keyup.enter)=\"redeemRequestList('')\">\r\n                  </mat-form-field>\r\n                </div>\r\n              </th>\r\n              <th class=\"w200 text-right\">&nbsp;\r\n\r\n              <th class=\"w100 text-right\">&nbsp;\r\n              <th class=\"w100 text-right\">\r\n                <div class=\"th-search-acmt\">\r\n                  <mat-form-field class=\"example-full-width cs-input select-input\">\r\n                    <input matInput placeholder=\"Search...\" type=\"text\" name=\"tds_percentage\"\r\n                      [(ngModel)]=\"filter.tds_percentage\" (keyup.enter)=\"redeemRequestList()\">\r\n                  </mat-form-field>\r\n                </div>\r\n\r\n              </th>\r\n              <th class=\"w100 text-right\">&nbsp;\r\n              </th>\r\n              <!-- <th class=\"w100 text-right\">&nbsp;\r\n              </th>\r\n              <th class=\"w100 text-right\">&nbsp;\r\n              </th> -->\r\n              <th class=\"w100\" *ngIf=\"active_tab == 'Approved'\">&nbsp;</th>\r\n\r\n\r\n              <th class=\"w100\" *ngIf=\"active_tab == 'Approved'\">\r\n                <div class=\"th-search-acmt\">\r\n                  <mat-form-field class=\"cs-input date-column infix-bodr\">\r\n                    <input matInput [matDatepicker]=\"picker6\" placeholder=\"Date\" name=\"shipped_date\"\r\n                      [(ngModel)]=\"filter.shipped_date\" (dateChange)=\"onDate($event)\" [max]=\"today_date\" disabled>\r\n                    <mat-datepicker-toggle matSuffix [for]=\"picker6\"></mat-datepicker-toggle>\r\n                    <mat-datepicker #picker6 disabled=\"false\"></mat-datepicker>\r\n                  </mat-form-field>\r\n                </div>\r\n              </th>\r\n              <th class=\"w150\" *ngIf=\"active_tab == 'Approved'\">&nbsp;</th>\r\n\r\n              <th class=\"w200\" *ngIf=\"active_tab == 'Approved'\">&nbsp;</th>\r\n              <th class=\"w110\">&nbsp;</th>\r\n              <th class=\"w200\" *ngIf=\"active_tab == 'Hold'\">&nbsp;</th>\r\n\r\n              <th class=\"w110\" *ngIf=\"active_tab == 'Approved'\">\r\n                <div class=\"th-search-acmt\">\r\n                  <mat-form-field class=\"cs-input select-input\">\r\n                    <mat-select [(ngModel)]=\"filter.gift_status\" name=\"gift_status\"\r\n                      (selectionChange)=\"redeemRequestList('')\">\r\n                      <mat-option value=\"\">All</mat-option>\r\n                      <mat-option value=\"Shipped\">Shipped</mat-option>\r\n                      <mat-option value=\"Received\">Received</mat-option>\r\n                    </mat-select>\r\n                  </mat-form-field>\r\n                </div>\r\n              </th>\r\n              <th class=\"w110  text-center\"\r\n                *ngIf=\"assign_login_data2.edit_redeem_request=='1' && (active_tab == 'Pending' || active_tab == 'Hold')\">&nbsp;</th>\r\n            </tr>\r\n          </table>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"table-container\">\r\n        <div class=\"table-content\">\r\n          <table>\r\n            <ng-container *ngIf=\"!loader\">\r\n              <tr *ngFor=\"let row of redeemRequestList_data; let i = index;\">\r\n                <td class=\"w60\">{{i + 1 + sr_no}}</td>\r\n                <td class=\"w90\">{{row.date_created | date :'dd MMM yyyy'}}</td>\r\n                <td class=\"w100\">\r\n                  <a class=\"link-btn\" style=\"cursor:pointer;color:#2563eb;font-weight:600;\"\r\n                    (click)=\"gotoRedeemDetail(row.id)\">{{row.req_id ? row.req_id : '---'}}</a>\r\n                </td>\r\n\r\n                <td class=\"w150\">\r\n                  <a class=\"link-btn\" style=\"cursor:pointer;color:#7c3aed;font-weight:600;\"\r\n                    [routerLink]=\"['/purchase-list', 'distribution-detail', row.user_id, 'Profile']\"\r\n                    [queryParams]=\"{'state':row.state, 'id':row.user_id, 'type':row.type}\">{{row.user_name ?\r\n                    (row.user_name | titlecase) : '---'}}</a>\r\n                  ({{row.type=='8'?'Ply Expert':(row.type=='21'?'Fabricator':'Ambassador')}})\r\n                </td>\r\n                <td class=\"w110\">{{row.mobile ? row.mobile : '---'}}</td>\r\n\r\n\r\n                <td class=\"w200\">{{row.gift_name ? row.gift_name : '---'}}</td>\r\n                <td class=\"w200\">{{row.shipping_address ? row.shipping_address : '---'}}</td>\r\n\r\n                <td class=\"w100 text-right\"><strong>{{row.point ? row.point : '---'}}</strong></td>\r\n                <td class=\"w100 text-right\">{{row.tds_percentage ? (row.tds_percentage +'% ') : '---'}}</td>\r\n\r\n                <td class=\"w100 text-right\">{{row.tds_amount ? ('₹ '+row.tds_amount) : '---'}}</td>\r\n\r\n                <!-- <td class=\"w100 text-right\"><strong>{{row.point_range_value ? row.point_range_value : '---'}}</strong></td>\r\n\r\n                    <td class=\"w100 text-right\"><strong>₹ {{row.cash_point ? row.cash_point : '---'}}</strong></td> -->\r\n                <td class=\"w100 text-right\" *ngIf=\"active_tab == 'Approved'\"><strong>{{row.shipping_type ?\r\n                    row.shipping_type : '---'}}</strong></td>\r\n                <td class=\"w100 text-right\" *ngIf=\"active_tab == 'Approved'\"><strong>{{row.shipped_date | date :'dd MMM\r\n                    yyyy'}}</strong></td>\r\n                <td class=\"w150 \" *ngIf=\"active_tab == 'Approved'\" style=\"word-break: break-all;\"><a\r\n                    href=\"{{row.track_id}}\" target=\"_blank\" style=\"word-break: break-all;\"><strong>{{row.track_id\r\n                      ?\r\n                      row.track_id : ''}}</strong></a></td>\r\n                <td class=\"w200 text-left\" style=\"overflow:auto\" *ngIf=\"active_tab == 'Approved'\">\r\n                  <strong>{{row.shipping_remark ?\r\n                    row.shipping_remark : '---'}}</strong>\r\n                </td>\r\n\r\n                <td class=\"w110\">\r\n                  <strong class=\"{{row.status}}\">{{row.status}}</strong>\r\n                </td>\r\n                <td class=\"w200\" *ngIf=\"active_tab == 'Hold'\">{{row.hold_remark ? row.hold_remark : '---'}}</td>\r\n                <td class=\"w110\" *ngIf=\"active_tab == 'Approved'\">\r\n                  <div *ngIf=\"row.gift_status == 'Received'\">\r\n                    <strong class=\"Approved\">\r\n                      {{row.gift_status=='Received' ? 'Delivered' : '---'}}\r\n                    </strong>\r\n                  </div>\r\n                  <div class=\"th-search-acmt\" *ngIf=\"row.status == 'Approved' && row.gift_status != 'Received'\">\r\n                    <mat-form-field class=\"cs-input select-input\">\r\n                      <mat-label>{{row.gift_status}}</mat-label>\r\n                      <mat-select [name]=\"'gift_status'+'i'\" #gift_status=\"ngModel\" [(ngModel)]=\"row.gift_status\"\r\n                        required\r\n                        (selectionChange)=\"opengiftDialog(row.id,row.user_id,'gift_status', row.redeem_type, row.gift_status)\">\r\n                        <mat-option disabled=\"\">Under Process</mat-option>\r\n                        <!-- <mat-option value=\"Transferred\" [disabled]=\"row.gift_status == 'Transferred' || row.gift_status == 'Received'\" *ngIf=\"row.redeem_type == 'Cash'\">Tranferred</mat-option> -->\r\n                        <mat-option value=\"Shipped\"\r\n                          [disabled]=\"row.gift_status == 'Shipped' || row.gift_status == 'Received'\"\r\n                          *ngIf=\"row.redeem_type == 'Gift'\">Shipped</mat-option>\r\n                        <mat-option value=\"Received\" [disabled]=\"row.gift_status == 'Received'\"\r\n                          *ngIf=\"row.gift_status == 'Shipped'\">Delivered</mat-option>\r\n                      </mat-select>\r\n                    </mat-form-field>\r\n                  </div>\r\n                </td>\r\n                <td class=\"w110  text-center\"\r\n                  *ngIf=\"assign_login_data2.edit_redeem_request=='1' && (active_tab == 'Pending' || active_tab == 'Hold')\">\r\n                  <ng-container *ngIf=\"row.status == 'Pending' || row.status == 'Hold'\">\r\n                    <div class=\"flex-button\">\r\n                      <button mat-raised-button color=\"accent\"\r\n                        (click)=\"opengiftDialog(row.id,row.user_id,'redeem_status', '', row.status)\">Change Status</button>\r\n                      <!-- <a class=\"link-btn\" (click)=\"openDialog(row.id,'redeem_status', '', '')\" >Change Status</a> -->\r\n\r\n\r\n                    </div>\r\n                  </ng-container>\r\n                  <ng-container *ngIf=\"row.status != 'Pending' && row.status != 'Hold'\">\r\n                    ---\r\n                  </ng-container>\r\n                </td>\r\n              </tr>\r\n            </ng-container>\r\n\r\n            <ng-container *ngIf=\"loader\">\r\n\r\n\r\n              <tr class=\"sk-loading\" *ngFor=\"let row of [].constructor(10)\">\r\n                <td class=\"w60\">\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n                <td class=\"w90\">\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n                <td class=\"w100\">\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n                <td class=\"w150\">\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n                <td class=\"w110\">\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n                <td class=\"w200\">\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n\r\n                <td class=\"w200\">\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n                <td class=\"w100 text-right\">\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n\r\n\r\n                <td class=\"w100 text-right\">\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n                <td class=\"w100 text-right\">\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n\r\n                <!-- <td class=\"w100 text-right\"><div>&nbsp;</div></td>\r\n                    <td class=\"w100 text-right\"><div>&nbsp;</div></td> -->\r\n                <td class=\"w100\" *ngIf=\"active_tab == 'Approved'\">\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n                <td class=\"w100\" *ngIf=\"active_tab == 'Approved'\">\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n                <td class=\"w150\" *ngIf=\"active_tab == 'Approved'\">\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n                <td class=\"w200\" *ngIf=\"active_tab == 'Approved'\">\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n\r\n                <td class=\"w110\">\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n                <td class=\"w200\" *ngIf=\"active_tab == 'Hold'\">\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n                <td class=\"w110\" *ngIf=\"active_tab == 'Approved'\">\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n                <td class=\"w110  text-center\"\r\n                  *ngIf=\"assign_login_data2.edit_redeem_request=='1' && (active_tab == 'Pending' || active_tab == 'Hold')\">\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n              </tr>\r\n            </ng-container>\r\n          </table>\r\n        </div>\r\n\r\n        <ng-container *ngIf=\"redeemRequestList_data.length == 0\">\r\n          <app-not-result-found></app-not-result-found>\r\n        </ng-container>\r\n      </div>\r\n    </div>\r\n\r\n\r\n  </div>\r\n\r\n\r\n\r\n  <div class=\"fab-btns\" *ngIf=\"redeemRequestList_data.length >0\">\r\n    <button mat-fab class=\"excel pulse\" (click)=\"exportAsXLSX(active_tab);\">\r\n      <img src=\"assets/img/excel.svg\">\r\n      Download Excel\r\n    </button>\r\n  </div>\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/redeem/redeem-request-list/redeem-request-list.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/redeem/redeem-request-list/redeem-request-list.component.ts ***!
  \*****************************************************************************/
/*! exports provided: RedeemRequestListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RedeemRequestListComponent", function() { return RedeemRequestListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_services_DatabaseService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/_services/DatabaseService */ "./src/_services/DatabaseService.ts");
/* harmony import */ var src_app_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/dialog.component */ "./src/app/dialog.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var src_app_redeem_status_modal_redeem_status_modal_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/redeem-status-modal/redeem-status-modal.component */ "./src/app/redeem-status-modal/redeem-status-modal.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_localstorage_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/localstorage.service */ "./src/app/localstorage.service.ts");
/* harmony import */ var ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng6-toastr-notifications */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/ng6-toastr-notifications/fesm5/ng6-toastr-notifications.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! moment */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_9__);










var RedeemRequestListComponent = /** @class */ (function () {
    function RedeemRequestListComponent(service, rout, alert, toast, dialog, route, session) {
        var _this = this;
        this.service = service;
        this.rout = rout;
        this.alert = alert;
        this.toast = toast;
        this.dialog = dialog;
        this.route = route;
        this.session = session;
        this.fabBtnValue = 'add';
        this.active_tab = 'Pending';
        this.filter = {};
        this.redeemRequestList_data = [];
        this.page_limit = 50;
        this.pagenumber = 1;
        this.start = 0;
        this.loader = false;
        this.datanotfound = false;
        this.redeemType = '';
        this.redeem_count = {};
        this.data = {};
        this.assign_login_data = [];
        this.assign_login_data2 = [];
        this.downurl = '';
        this.savingFlag = false;
        this.states = false;
        this.calenderInfo = [];
        this.RedeemMonth = null;
        this.RedeemYear = null;
        this.downurl = service.downloadUrl;
        this.assign_login_data = this.session.getSession();
        this.assign_login_data = this.assign_login_data.value;
        this.assign_login_data2 = this.assign_login_data.data;
        this.today_date = new Date();
        var now = new Date();
        this.currentMonth_no = now.getMonth() + 1;
        this.currentYear = now.getFullYear();
        this.rout.params.subscribe(function (param) {
            console.log(param);
            _this.redeemType = param.redeemType;
            _this.filter.gift_status = '';
            _this.RedeemMonth = null;
            _this.RedeemYear = null;
            _this.redeemRequestList();
            _this.getStateList();
        });
    }
    RedeemRequestListComponent.prototype.ngOnInit = function () {
        this.filter = this.service.getData();
        if (this.filter.status) {
            this.active_tab = this.filter.status;
        }
    };
    RedeemRequestListComponent.prototype.pervious = function () {
        this.start = this.start - this.page_limit;
        this.redeemRequestList();
    };
    RedeemRequestListComponent.prototype.nextPage = function () {
        this.start = this.start + this.page_limit;
        this.redeemRequestList();
    };
    RedeemRequestListComponent.prototype.refresh = function () {
        this.filter = {};
        this.service.setData(this.filter);
        this.service.currentUserID = '';
        this.active_tab = 'Pending';
        this.RedeemMonth = null;
        this.RedeemYear = null;
        this.redeemRequestList();
    };
    RedeemRequestListComponent.prototype.selectMonth = function (month, year) {
        this.RedeemMonth = month === 'all' ? null : month;
        this.RedeemYear = month === 'all' ? null : year;
        this.start = 0;
        this.redeemRequestList();
    };
    RedeemRequestListComponent.prototype.redeemRequestList = function () {
        var _this = this;
        this.filter.status = this.active_tab;
        // this.filter.paymentMode = this.redeemType;
        this.filter.redeem_type = this.redeemType;
        this.loader = true;
        if (this.pagenumber > this.total_page) {
            this.pagenumber = this.total_page;
            this.start = this.pageCount - this.page_limit;
        }
        if (this.start < 0) {
            this.start = 0;
        }
        this.service.post_rqst({ 'filter': this.filter, 'start': this.start, 'pagelimit': this.page_limit, 'month': this.RedeemMonth, 'year': this.RedeemYear }, 'RedeemRequest/redeemGiftRequestList').subscribe(function (resp) {
            if (resp['statusCode'] == 200) {
                _this.redeemRequestList_data = resp['gift_master_list'];
                _this.redeem_count = resp['tabCount'];
                if (resp['calenderInfo'] && resp['calenderInfo'].length > 0) {
                    _this.calenderInfo = resp['calenderInfo'];
                }
                _this.pageCount = resp['count'];
                if (_this.filter.status == 'Pending') {
                    _this.pageCount = resp['tabCount']['Pending'];
                }
                if (_this.filter.status == 'Approved') {
                    _this.pageCount = resp['tabCount']['Approved'];
                }
                if (_this.filter.status == 'Reject') {
                    _this.pageCount = resp['tabCount']['Reject'];
                }
                if (_this.filter.status == 'Failed') {
                    _this.pageCount = resp['tabCount']['Failed'];
                }
                if (_this.filter.status == 'Hold') {
                    _this.pageCount = resp['tabCount']['Hold'];
                }
                if (_this.redeemRequestList_data.length == 0) {
                    _this.datanotfound = true;
                }
                else {
                    _this.datanotfound = false;
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
                _this.loader = false;
                setTimeout(function () {
                    _this.loader = false;
                }, 700);
            }
            else {
                _this.toast.errorToastr(resp['statusMsg']);
            }
        });
    };
    RedeemRequestListComponent.prototype.onDate = function (event) {
        if (this.filter.last_status_updated_on) {
            this.filter.last_status_updated_on = moment__WEBPACK_IMPORTED_MODULE_9__(event.value).format('YYYY-MM-DD');
        }
        else if (this.filter.transfer_date) {
            this.filter.transfer_date = moment__WEBPACK_IMPORTED_MODULE_9__(event.value).format('YYYY-MM-DD');
        }
        else {
            this.filter.date_created = moment__WEBPACK_IMPORTED_MODULE_9__(event.value).format('YYYY-MM-DD');
        }
        this.redeemRequestList();
    };
    RedeemRequestListComponent.prototype.openDialog = function (id, user_id, type, redeem_type, gift_status, amount) {
        var _this = this;
        this.service.currentUserID = id;
        // if (gift_status == 'Approved') {
        //   this.alert.confirm('You want to Change Status?').then((result) => {
        //     if (result) {
        //       this.savingFlag = true;
        //       this.service.post_rqst({ 'status': gift_status, 'id': id, 'created_by_id': this.assign_login_data2.created_by, 'created_by_name': this.assign_login_data2.created_by_name }, 'RedeemRequest/redeemRequestStatusChange').subscribe((result) => {
        //         if (result['statusCode'] == 200) {
        //           this.savingFlag = false;
        //           this.toast.successToastr(result['statusMsg']);
        //           this.redeemRequestList();
        //           this.savingFlag = false;
        //         }
        //         else {
        //           this.toast.errorToastr(result['statusMsg']);
        //         }
        //       })
        //     }
        //     else {
        //       this.savingFlag = false
        //     }
        //   });
        // }
        var dialogRef = this.dialog.open(src_app_redeem_status_modal_redeem_status_modal_component__WEBPACK_IMPORTED_MODULE_5__["RedeemStatusModalComponent"], {
            width: '400px', data: {
                'id': id,
                'user_id': user_id,
                'delivery_from': type,
                'redeem_type': redeem_type,
                'gift_status': gift_status,
            }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result == true) {
                _this.redeemRequestList();
            }
        });
    };
    RedeemRequestListComponent.prototype.gotoRedeemDetail = function (id) {
        this.route.navigate(["/redeem-request/" + this.redeemType + "/redeem-detail/" + id], { queryParams: { id: id } });
    };
    RedeemRequestListComponent.prototype.updateNumber = function (id, wallet, number) {
        var _this = this;
        var dialogRef = this.dialog.open(src_app_redeem_status_modal_redeem_status_modal_component__WEBPACK_IMPORTED_MODULE_5__["RedeemStatusModalComponent"], {
            width: '400px', data: {
                'id': id,
                'delivery_from': wallet,
                'wallet_number': number,
            }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result == true) {
                _this.redeemRequestList();
            }
        });
    };
    RedeemRequestListComponent.prototype.lastBtnValue = function (value) {
        this.fabBtnValue = value;
    };
    RedeemRequestListComponent.prototype.exportAsXLSX = function (status) {
        var _this = this;
        this.loader = true;
        this.filter.status = status;
        this.filter.redeem_type = this.redeemType;
        this.service.post_rqst({ 'filter': this.filter, 'active_tab': this.active_tab }, "Excel/redeem_gift_request_list").subscribe((function (result) {
            if (result['msg'] == true) {
                _this.loader = false;
                window.open(_this.downurl + result['filename']);
                _this.redeemRequestList();
            }
            else {
                _this.loader = false;
                _this.toast.errorToastr(result['error'] || 'No records found');
            }
        }));
    };
    RedeemRequestListComponent.prototype.exportWithDealer = function (status) {
        var _this = this;
        this.loader = true;
        this.filter.status = status;
        this.filter.redeem_type = this.redeemType;
        this.service.post_rqst({ 'filter': this.filter, 'active_tab': this.active_tab }, "Excel/redeem_gift_request_list_with_dealer").subscribe((function (result) {
            if (result['msg'] == true) {
                _this.loader = false;
                window.open(_this.downurl + result['filename']);
                _this.redeemRequestList();
            }
            else {
                _this.loader = false;
                _this.toast.errorToastr(result['error'] || 'No records found');
            }
        }));
    };
    RedeemRequestListComponent.prototype.getStateList = function () {
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
    RedeemRequestListComponent.prototype.opengiftDialog = function (id, user_id, type, redeem_type, gift_status, cash_value) {
        var _this = this;
        if (gift_status == 'Received') {
            this.alert.confirm('You want to change status ?').then(function (result) {
                if (result) {
                    _this.service.post_rqst({ 'status': gift_status, 'id': id }, 'RedeemRequest/redeemRequestGiftStatusChange').subscribe(function (result) {
                        if (result['statusCode'] == 200) {
                            _this.toast.successToastr(result['statusMsg']);
                            _this.redeemRequestList();
                        }
                        else {
                            _this.toast.errorToastr(result['statusMsg']);
                        }
                    });
                }
            });
        }
        else if (gift_status == 'Transferred') {
            var dialogRef = this.dialog.open(src_app_redeem_status_modal_redeem_status_modal_component__WEBPACK_IMPORTED_MODULE_5__["RedeemStatusModalComponent"], {
                width: '400px', data: {
                    'id': id,
                    'user_id': user_id,
                    'delivery_from': type,
                    'redeem_type': redeem_type,
                    'gift_status': gift_status,
                }
            });
            dialogRef.afterClosed().subscribe(function (res) {
                if (!res) {
                    _this.redeemRequestList();
                }
                _this.utr_no = res.utr_number;
                _this.transfer_date = res.transfer_date;
                if (_this.utr_no) {
                    _this.alert.transferconfirm('You want to Transfer' + cash_value + '?').then(function (result) {
                        if (result) {
                            _this.service.post_rqst({ 'status': gift_status, 'id': id, 'utr_no': _this.utr_no, 'transfer_date': _this.transfer_date }, 'RedeemRequest/redeemRequestGiftStatusChange').subscribe(function (result) {
                                if (result['statusCode'] == 200) {
                                    _this.toast.successToastr(result['statusMsg']);
                                    _this.redeemRequestList();
                                }
                                else {
                                    _this.toast.errorToastr(result['statusMsg']);
                                }
                            });
                        }
                        else {
                            _this.redeemRequestList();
                        }
                    });
                }
            });
        }
        else {
            var dialogRef = this.dialog.open(src_app_redeem_status_modal_redeem_status_modal_component__WEBPACK_IMPORTED_MODULE_5__["RedeemStatusModalComponent"], {
                width: '400px', data: {
                    'id': id,
                    'user_id': user_id,
                    'delivery_from': type,
                    'redeem_type': redeem_type,
                    'gift_status': gift_status,
                }
            });
            dialogRef.afterClosed().subscribe(function (result) {
                _this.redeemRequestList();
            });
        }
    };
    RedeemRequestListComponent.prototype.updateBank = function (id, bank, account_holder_name, bank_name, account_no, ifsc_code) {
        var _this = this;
        var dialogRef = this.dialog.open(src_app_redeem_status_modal_redeem_status_modal_component__WEBPACK_IMPORTED_MODULE_5__["RedeemStatusModalComponent"], {
            width: '500px', data: {
                'id': id,
                'delivery_from': bank,
                'account_holder': account_holder_name,
                'bankname': bank_name,
                'account': account_no,
                'ifsc': ifsc_code,
            }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result == true) {
                _this.redeemRequestList();
            }
        });
    };
    RedeemRequestListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-redeem-request-list',
            template: __webpack_require__(/*! ./redeem-request-list.component.html */ "./src/app/redeem/redeem-request-list/redeem-request-list.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_services_DatabaseService__WEBPACK_IMPORTED_MODULE_2__["DatabaseService"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"], src_app_dialog_component__WEBPACK_IMPORTED_MODULE_3__["DialogComponent"], ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_8__["ToastrManager"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialog"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"], src_app_localstorage_service__WEBPACK_IMPORTED_MODULE_7__["sessionStorage"]])
    ], RedeemRequestListComponent);
    return RedeemRequestListComponent;
}());



/***/ }),

/***/ "./src/app/redeem/redeem-request-module/redeem-request.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/redeem/redeem-request-module/redeem-request.module.ts ***!
  \***********************************************************************/
/*! exports provided: RedeemRequestModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RedeemRequestModule", function() { return RedeemRequestModule; });
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
/* harmony import */ var _redeem_request_detail_redeem_request_detail_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../redeem-request-detail/redeem-request-detail.component */ "./src/app/redeem/redeem-request-detail/redeem-request-detail.component.ts");
/* harmony import */ var _redeem_request_list_redeem_request_list_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../redeem-request-list/redeem-request-list.component */ "./src/app/redeem/redeem-request-list/redeem-request-list.component.ts");
/* harmony import */ var src_app_Influencer_influencer_detail_influencer_detail_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/Influencer/influencer-detail/influencer-detail.component */ "./src/app/Influencer/influencer-detail/influencer-detail.component.ts");















var redeemRequestRoutes = [
    {
        path: "", children: [
            { path: "", component: _redeem_request_list_redeem_request_list_component__WEBPACK_IMPORTED_MODULE_13__["RedeemRequestListComponent"], canActivate: [src_app_auth_component_guard__WEBPACK_IMPORTED_MODULE_11__["AuthComponentGuard"]], data: { expectedRole: ['1'] } },
            { path: "redeem-detail/:id", component: _redeem_request_detail_redeem_request_detail_component__WEBPACK_IMPORTED_MODULE_12__["RedeemRequestDetailComponent"], canActivate: [src_app_auth_component_guard__WEBPACK_IMPORTED_MODULE_11__["AuthComponentGuard"]], data: { expectedRole: ['1'] } },
            { path: 'influencer-detail/:id/:type_id', component: src_app_Influencer_influencer_detail_influencer_detail_component__WEBPACK_IMPORTED_MODULE_14__["InfluencerDetailComponent"], canActivate: [src_app_auth_component_guard__WEBPACK_IMPORTED_MODULE_11__["AuthComponentGuard"]], data: { expectedRole: ['1'] } },
        ]
    }
];
var RedeemRequestModule = /** @class */ (function () {
    function RedeemRequestModule() {
    }
    RedeemRequestModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_redeem_request_list_redeem_request_list_component__WEBPACK_IMPORTED_MODULE_13__["RedeemRequestListComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild(redeemRequestRoutes),
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
    ], RedeemRequestModule);
    return RedeemRequestModule;
}());



/***/ })

}]);