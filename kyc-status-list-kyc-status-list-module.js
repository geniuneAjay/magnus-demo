(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["kyc-status-list-kyc-status-list-module"],{

/***/ "./src/app/kyc-status-list/kyc-status-list.component.html":
/*!****************************************************************!*\
  !*** ./src/app/kyc-status-list/kyc-status-list.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-container {{padding0}}\">\r\n  <app-loader *ngIf=\"excelLoader\"></app-loader>\r\n  <div class=\"tools-container\">\r\n    <h2>KYC Information</h2>\r\n    <div class=\"left-auto df flex-gap-10\">\r\n      <div class=\"pagination\">\r\n      <a mat-icon-button matTooltip=\"Refresh\" (click)=\"refresh()\">\r\n        <i class=\"material-icons\">refresh</i>\r\n      </a>\r\n      <button mat-icon-button matTooltip=\"Filter\" (click)=\"openBottomSheet()\">\r\n        <i class=\"material-icons\">filter_alt</i>\r\n      </button>\r\n      <button mat-raised-button color=\"primary\" (click)=\"downloadKycExcel()\" [disabled]=\"excelLoader\"\r\n        style=\"margin-left:6px;\">\r\n        <i class=\"material-icons\" style=\"vertical-align:middle; font-size:18px; margin-right:4px;\">download</i>\r\n        {{ excelLoader ? 'Downloading...' : 'Download Excel' }}\r\n      </button>\r\n    </div>\r\n      <div class=\"pagination\" *ngIf=\"dr_list_temp.length > 0\">\r\n        <div class=\"pagination-content\">\r\n          Pages\r\n          <span>{{pagenumber}}</span>\r\n          of\r\n          <span>{{total_page}}</span>\r\n        </div>\r\n        <div class=\"page-nav\">\r\n          <button mat-icon-button matTooltip=\"Older\" (click)=\"pervious()\" [disabled]=\"start == 0 || total_page == 0\">\r\n            <i class=\"material-icons\">navigate_before</i>\r\n          </button>\r\n          <button mat-icon-button matTooltip=\"Newer\" (click)=\"nextPage()\"\r\n            [disabled]=\"pagenumber == total_page || total_page == 0 \">\r\n            <i class=\"material-icons\">navigate_next</i>\r\n          </button>\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n\r\n  </div>\r\n\r\n  <!-- *ngIf=\"type_id==3\" -->\r\n  <div class=\"mat-tabbar\">\r\n    <button mat-button (click)=\"active_tab = 'doc_pending'; filter.kyc_status=active_tab; start=0; distributorList('', '', '')\"\r\n      [ngClass]=\"active_tab == 'doc_pending' ? 'active' : ''\">\r\n      <span class=\"material-icons-outlined\">hourglass_empty</span>Doc Verification Pending ({{tab_counts.doc_pending || 0}})\r\n    </button>\r\n    <button mat-button (click)=\"active_tab = 'doc_failed'; filter.kyc_status=active_tab; start=0; distributorList('', '', '')\"\r\n      [ngClass]=\"active_tab == 'doc_failed' ? 'active' : ''\">\r\n      <span class=\"material-icons-outlined\">gpp_bad</span>Doc Verification Failed ({{tab_counts.doc_failed || 0}})\r\n    </button>\r\n    <button mat-button (click)=\"active_tab = 'kyc_pending'; filter.kyc_status=active_tab; start=0; distributorList('', '', '')\"\r\n      [ngClass]=\"active_tab == 'kyc_pending' ? 'active' : ''\">\r\n      <span class=\"material-icons-outlined\">all_inbox</span>KYC Pending ({{tab_counts.kyc_pending || 0}})\r\n    </button>\r\n    <button mat-button (click)=\"active_tab = 'kyc_approved'; filter.kyc_status=active_tab; start=0; distributorList('', '', '')\"\r\n      [ngClass]=\"active_tab == 'kyc_approved' ? 'active' : ''\">\r\n      <span class=\"material-icons-outlined\">thumb_up_alt</span>KYC Approved ({{tab_counts.kyc_approved || 0}})\r\n    </button>\r\n    <button mat-button (click)=\"active_tab = 'kyc_hold'; filter.kyc_status=active_tab; start=0; distributorList('', '', '')\"\r\n      [ngClass]=\"active_tab == 'kyc_hold' ? 'active' : ''\">\r\n      <span class=\"material-icons-outlined\">pause_circle_outline</span>KYC Hold ({{tab_counts.kyc_hold || 0}})\r\n    </button>\r\n    <button mat-button (click)=\"active_tab = 'kyc_reject'; filter.kyc_status=active_tab; start=0; distributorList('', '', '')\"\r\n      [ngClass]=\"active_tab == 'kyc_reject' ? 'active' : ''\">\r\n      <span class=\"material-icons-outlined\">thumb_down_alt</span>KYC Reject ({{tab_counts.kyc_reject || 0}})\r\n    </button>\r\n  </div>\r\n\r\n  <div class=\"container container-scroll\">\r\n    <div class=\"cs-table horizontal-scroll\">\r\n      <div class=\"sticky-head\">\r\n        <div class=\"table-head\">\r\n          <table>\r\n            <tr>\r\n              <th class=\"w60\">S.No.</th>\r\n              <th class=\"w110\">Date Created\r\n                <div class=\"sorting\">\r\n                  <a (click)=\"column='date_created';sorting_type='ASC';distributorList('','date_created','ASC')\"><i class=\"material-icons\">arrow_drop_up</i></a>\r\n                  <a (click)=\"column='date_created';sorting_type='DESC';distributorList('','date_created','DESC')\"><i class=\"material-icons\">arrow_drop_down</i></a>\r\n                </div>\r\n              </th>\r\n              <th class=\"w180\" *ngIf=\"type_id != 8\">Company Name\r\n                <div class=\"sorting\">\r\n                  <a (click)=\"column='company_name';sorting_type='ASC';distributorList('','company_name','ASC')\"><i class=\"material-icons\">arrow_drop_up</i></a>\r\n                  <a (click)=\"column='company_name';sorting_type='DESC';distributorList('','company_name','DESC')\"><i class=\"material-icons\">arrow_drop_down</i></a>\r\n                </div>\r\n              </th>\r\n              <th class=\"w150\">Contact Person\r\n                <div class=\"sorting\">\r\n                  <a (click)=\"column='name';sorting_type='ASC';distributorList('','name','ASC')\"><i class=\"material-icons\">arrow_drop_up</i></a>\r\n                  <a (click)=\"column='name';sorting_type='DESC';distributorList('','name','DESC')\"><i class=\"material-icons\">arrow_drop_down</i></a>\r\n                </div>\r\n              </th>\r\n              <th class=\"w120\">Contact Number</th>\r\n              <th class=\"w140\">Account Holder Name</th>\r\n              <!-- Doc Pending & Doc Failed specific columns -->\r\n              <th class=\"w120\" *ngIf=\"active_tab == 'doc_pending' || active_tab == 'doc_failed'\">PAN Status</th>\r\n              <th class=\"w200\" *ngIf=\"active_tab == 'doc_failed'\">PAN Fail Reason</th>\r\n              <th class=\"w120\" *ngIf=\"active_tab == 'doc_pending' || active_tab == 'doc_failed'\">Bank Status</th>\r\n              <th class=\"w200\" *ngIf=\"active_tab == 'doc_failed'\">Bank Fail Reason</th>\r\n              <!-- KYC tabs specific columns -->\r\n              <th class=\"w100\" *ngIf=\"active_tab == 'kyc_pending' || active_tab == 'kyc_approved' || active_tab == 'kyc_reject' || active_tab == 'kyc_hold'\">Submitted Date</th>\r\n              <th class=\"w120\" *ngIf=\"active_tab == 'kyc_pending' || active_tab == 'kyc_approved' || active_tab == 'kyc_reject' || active_tab == 'kyc_hold'\">Source</th>\r\n              <th class=\"w120\" *ngIf=\"active_tab == 'kyc_approved'\">PAN Status</th>\r\n              <th class=\"w120\" *ngIf=\"active_tab == 'kyc_approved'\">Bank Status</th>\r\n              <th class=\"w130\" *ngIf=\"active_tab == 'kyc_approved'\">Aadhaar Linked</th>\r\n              <th class=\"w100\">Type</th>\r\n              <th class=\"w120\">Virtual Lead</th>\r\n              <th class=\"w160\">Assigned Sales User</th>\r\n              <th class=\"w120\">State</th>\r\n              <th class=\"w120\">District</th>\r\n              <th class=\"w120\">City</th>\r\n              <th class=\"w110 text-center\" *ngIf=\"active_tab == 'kyc_pending' || active_tab == 'kyc_approved' || active_tab == 'kyc_reject' || active_tab == 'kyc_hold'\">KYC Status</th>\r\n              <th class=\"w200\" *ngIf=\"active_tab == 'kyc_hold'\">Hold Remark</th>\r\n            </tr>\r\n          </table>\r\n        </div>\r\n\r\n        <div class=\"table-head border-top\">\r\n          <table>\r\n            <tr>\r\n              <th class=\"w60\">&nbsp;</th>\r\n              <th class=\"w110\">\r\n                <div class=\"th-search-acmt\">\r\n                  <mat-form-field class=\"cs-input date-column infix-bodr\">\r\n                    <input matInput [matDatepicker]=\"picker\" placeholder=\"Date\" name=\"date_created\"\r\n                      #date_created=\"ngModel\" [(ngModel)]=\"filter.date_created\" (ngModelChange)=\"date_format()\"\r\n                      [max]=\"today_date\" readonly>\r\n                    <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\r\n                    <mat-datepicker #picker></mat-datepicker>\r\n                  </mat-form-field>\r\n                </div>\r\n              </th>\r\n              <th class=\"w180\" *ngIf=\"type_id != 8\">\r\n                <div class=\"th-search-acmt\">\r\n                  <mat-form-field class=\"example-full-width cs-input select-input\">\r\n                    <input matInput placeholder=\"Search...\" name=\"company_name\" (keyup.enter)=\"distributorList('','','')\" [(ngModel)]=\"filter.company_name\">\r\n                  </mat-form-field>\r\n                </div>\r\n              </th>\r\n              <th class=\"w150\">\r\n                <div class=\"th-search-acmt\">\r\n                  <mat-form-field class=\"example-full-width cs-input select-input\">\r\n                    <input matInput placeholder=\"Search...\" name=\"name\" (keyup.enter)=\"distributorList('','','')\" [(ngModel)]=\"filter.name\">\r\n                  </mat-form-field>\r\n                </div>\r\n              </th>\r\n              <th class=\"w120\">\r\n                <div class=\"th-search-acmt\">\r\n                  <mat-form-field class=\"example-full-width cs-input select-input\">\r\n                    <input matInput placeholder=\"Search...\" name=\"mobile\" (keyup.enter)=\"distributorList('','','')\" [(ngModel)]=\"filter.mobile\">\r\n                  </mat-form-field>\r\n                </div>\r\n              </th>\r\n              <th class=\"w140\">\r\n                <div class=\"th-search-acmt\">\r\n                  <mat-form-field class=\"example-full-width cs-input select-input\">\r\n                    <input matInput placeholder=\"Search...\" name=\"account_holder_name\" (keyup.enter)=\"distributorList('','','')\" [(ngModel)]=\"filter.account_holder_name\">\r\n                  </mat-form-field>\r\n                </div>\r\n              </th>\r\n              <th class=\"w120\" *ngIf=\"active_tab == 'doc_pending' || active_tab == 'doc_failed'\">&nbsp;</th>\r\n              <th class=\"w200\" *ngIf=\"active_tab == 'doc_failed'\">&nbsp;</th>\r\n              <th class=\"w120\" *ngIf=\"active_tab == 'doc_pending' || active_tab == 'doc_failed'\">&nbsp;</th>\r\n              <th class=\"w200\" *ngIf=\"active_tab == 'doc_failed'\">&nbsp;</th>\r\n              <th class=\"w100\" *ngIf=\"active_tab == 'kyc_pending' || active_tab == 'kyc_approved' || active_tab == 'kyc_reject' || active_tab == 'kyc_hold'\">&nbsp;</th>\r\n              <th class=\"w120\" *ngIf=\"active_tab == 'kyc_pending' || active_tab == 'kyc_approved' || active_tab == 'kyc_reject' || active_tab == 'kyc_hold'\">\r\n                <div class=\"th-search-acmt\">\r\n                  <mat-form-field class=\"example-full-width cs-input select-input\">\r\n                    <input matInput placeholder=\"Search...\" name=\"source\" (keyup.enter)=\"distributorList('','','')\" [(ngModel)]=\"filter.source\">\r\n                  </mat-form-field>\r\n                </div>\r\n              </th>\r\n              <th class=\"w120\" *ngIf=\"active_tab == 'kyc_approved'\">\r\n                <div class=\"th-search-acmt\">\r\n                  <mat-form-field class=\"example-full-width cs-input select-input\">\r\n                    <mat-select placeholder=\"All\" [(ngModel)]=\"filter.cashfree_pan_status\" (ngModelChange)=\"distributorList('','','')\">\r\n                      <mat-option value=\"\">All</mat-option>\r\n                      <mat-option value=\"VALID\">VALID</mat-option>\r\n                      <mat-option value=\"INVALID\">INVALID</mat-option>\r\n                    </mat-select>\r\n                  </mat-form-field>\r\n                </div>\r\n              </th>\r\n              <th class=\"w120\" *ngIf=\"active_tab == 'kyc_approved'\">\r\n                <div class=\"th-search-acmt\">\r\n                  <mat-form-field class=\"example-full-width cs-input select-input\">\r\n                    <mat-select placeholder=\"All\" [(ngModel)]=\"filter.cashfree_bank_status\" (ngModelChange)=\"distributorList('','','')\">\r\n                      <mat-option value=\"\">All</mat-option>\r\n                      <mat-option value=\"VALID\">VALID</mat-option>\r\n                      <mat-option value=\"INVALID\">INVALID</mat-option>\r\n                    </mat-select>\r\n                  </mat-form-field>\r\n                </div>\r\n              </th>\r\n              <th class=\"w130\" *ngIf=\"active_tab == 'kyc_approved'\">\r\n                <div class=\"th-search-acmt\">\r\n                  <mat-form-field class=\"example-full-width cs-input select-input\">\r\n                    <mat-select placeholder=\"All\" [(ngModel)]=\"filter.aadhaar_linked\" (ngModelChange)=\"distributorList('','','')\">\r\n                      <mat-option value=\"\">All</mat-option>\r\n                      <mat-option value=\"1\">Linked</mat-option>\r\n                      <mat-option value=\"0\">Not Linked</mat-option>\r\n                    </mat-select>\r\n                  </mat-form-field>\r\n                </div>\r\n              </th>\r\n              <th class=\"w100\">\r\n                <div class=\"th-search-acmt\">\r\n                  <mat-form-field class=\"example-full-width cs-input select-input\">\r\n                    <input matInput placeholder=\"Search...\" name=\"dr_type\" (keyup.enter)=\"distributorList('','','')\" [(ngModel)]=\"filter.dr_type\">\r\n                  </mat-form-field>\r\n                </div>\r\n              </th>\r\n              <th class=\"w120\">\r\n                <div class=\"th-search-acmt\">\r\n                  <mat-form-field class=\"example-full-width cs-input select-input\">\r\n                    <mat-select placeholder=\"All\" [(ngModel)]=\"filter.transfer_from_enquiry\" (ngModelChange)=\"distributorList('','','')\">\r\n                      <mat-option value=\"\">All</mat-option>\r\n                      <mat-option value=\"1\">Yes</mat-option>\r\n                      <mat-option value=\"0\">No</mat-option>\r\n                    </mat-select>\r\n                  </mat-form-field>\r\n                </div>\r\n              </th>\r\n              <th class=\"w160\">\r\n                <div class=\"th-search-acmt\">\r\n                  <mat-form-field class=\"example-full-width cs-input select-input\">\r\n                    <input matInput placeholder=\"Search...\" name=\"assigned_sales_user_name\" (keyup.enter)=\"distributorList('','','')\" [(ngModel)]=\"filter.assigned_sales_user_name\">\r\n                  </mat-form-field>\r\n                </div>\r\n              </th>\r\n              <th class=\"w120\">\r\n                <div class=\"th-search-acmt\">\r\n                  <mat-form-field class=\"example-full-width cs-input select-input\">\r\n                    <input matInput placeholder=\"Search...\" name=\"state\" (keyup.enter)=\"distributorList('','','')\" [(ngModel)]=\"filter.state\">\r\n                  </mat-form-field>\r\n                </div>\r\n              </th>\r\n              <th class=\"w120\">\r\n                <div class=\"th-search-acmt\">\r\n                  <mat-form-field class=\"example-full-width cs-input select-input\">\r\n                    <input matInput placeholder=\"Search...\" name=\"district\" (keyup.enter)=\"distributorList('','','')\" [(ngModel)]=\"filter.district\">\r\n                  </mat-form-field>\r\n                </div>\r\n              </th>\r\n              <th class=\"w120\">\r\n                <div class=\"th-search-acmt\">\r\n                  <mat-form-field class=\"example-full-width cs-input select-input\">\r\n                    <input matInput placeholder=\"Search...\" name=\"city\" (keyup.enter)=\"distributorList('','','')\" [(ngModel)]=\"filter.city\">\r\n                  </mat-form-field>\r\n                </div>\r\n              </th>\r\n              <th class=\"w110\" *ngIf=\"active_tab == 'kyc_pending' || active_tab == 'kyc_approved' || active_tab == 'kyc_reject' || active_tab == 'kyc_hold'\">&nbsp;</th>\r\n              <th class=\"w200\" *ngIf=\"active_tab == 'kyc_hold'\">&nbsp;</th>\r\n            </tr>\r\n          </table>\r\n        </div>\r\n      </div>\r\n      <div class=\"table-container mb50\">\r\n        <div class=\"table-content\">\r\n          <table>\r\n            <ng-container *ngIf=\"!loader\">\r\n              <tr *ngFor=\"let row of dr_list_temp; let i = index;\"\r\n                [ngClass]=\"{'Current': serve.currentUserID == row.id}\">\r\n                <td class=\"w60\">{{i + 1 + sr_no}}</td>\r\n                <td class=\"w110\">{{row.date_created | date}}</td>\r\n                <td class=\"w180\" *ngIf=\"type_id != 8\">\r\n                  <a class=\"link-btn\" mat-button (click)=\"serve.setData(filter)\"\r\n                    [routerLink]=\"['distribution-detail/', row.id, 'Profile']\"\r\n                    [queryParams]=\"{'state':row.state,'id':row.id,'type':row.type,'user_type':type}\">\r\n                    {{row.company_name ? (row.company_name | titlecase) : (row.name ? (row.name | titlecase) : '')}}\r\n                  </a>\r\n                </td>\r\n                <td class=\"w150\">\r\n                  <ng-container *ngIf=\"type_id != 8\">{{row.name ? (row.name | titlecase) : ''}}</ng-container>\r\n                  <ng-container *ngIf=\"type_id == 8\">\r\n                    <a class=\"link-btn\" mat-button (click)=\"serve.setData(filter)\"\r\n                      [routerLink]=\"['distribution-detail/', row.id, 'Profile']\"\r\n                      [queryParams]=\"{'state':row.state,'id':row.id,'type':row.type,'user_type':type}\">\r\n                      {{row.name ? (row.name | titlecase) : ''}}\r\n                    </a>\r\n                  </ng-container>\r\n                </td>\r\n                <td class=\"w120\">{{row.mobile}}</td>\r\n                <td class=\"w140\">{{row.account_holder_name}}</td>\r\n                <!-- Doc Pending & Doc Failed columns -->\r\n                <td class=\"w120\" *ngIf=\"active_tab == 'doc_pending' || active_tab == 'doc_failed'\">\r\n                  <span [ngStyle]=\"{'color': row.cashfree_pan_status == 'VALID' ? 'green' : row.cashfree_pan_status == 'INVALID' ? 'red' : 'orange'}\">\r\n                    {{row.cashfree_pan_status || 'Pending'}}\r\n                  </span>\r\n                </td>\r\n                <td class=\"w200\" *ngIf=\"active_tab == 'doc_failed'\" style=\"color:red; font-size:12px;\">\r\n                  {{row.pan_fail_reason || '---'}}\r\n                </td>\r\n                <td class=\"w120\" *ngIf=\"active_tab == 'doc_pending' || active_tab == 'doc_failed'\">\r\n                  <span [ngStyle]=\"{'color': row.cashfree_bank_status == 'VALID' ? 'green' : row.cashfree_bank_status == 'INVALID' ? 'red' : 'orange'}\">\r\n                    {{row.cashfree_bank_status || 'Pending'}}\r\n                  </span>\r\n                </td>\r\n                <td class=\"w200\" *ngIf=\"active_tab == 'doc_failed'\" style=\"color:red; font-size:12px;\">\r\n                  {{row.bank_fail_reason || '---'}}\r\n                </td>\r\n                <!-- KYC tabs columns -->\r\n                <td class=\"w100\" *ngIf=\"active_tab == 'kyc_pending' || active_tab == 'kyc_approved' || active_tab == 'kyc_reject' || active_tab == 'kyc_hold'\">{{row.kyc_updated_date | date}}</td>\r\n                <td class=\"w120\" *ngIf=\"active_tab == 'kyc_pending' || active_tab == 'kyc_approved' || active_tab == 'kyc_reject' || active_tab == 'kyc_hold'\">{{row.source || '---'}}</td>\r\n                <td class=\"w120\" *ngIf=\"active_tab == 'kyc_approved'\">\r\n                  <span [ngStyle]=\"{'color': row.cashfree_pan_status == 'VALID' ? 'green' : row.cashfree_pan_status == 'INVALID' ? 'red' : 'orange'}\">\r\n                    {{row.cashfree_pan_status || 'Pending'}}\r\n                  </span>\r\n                </td>\r\n                <td class=\"w120\" *ngIf=\"active_tab == 'kyc_approved'\">\r\n                  <span [ngStyle]=\"{'color': row.cashfree_bank_status == 'VALID' ? 'green' : row.cashfree_bank_status == 'INVALID' ? 'red' : 'orange'}\">\r\n                    {{row.cashfree_bank_status || 'Pending'}}\r\n                  </span>\r\n                </td>\r\n                <td class=\"w130\" *ngIf=\"active_tab == 'kyc_approved'\">\r\n                  <span [ngStyle]=\"{'color': row.aadhaar_linked == 1 ? 'green' : 'red'}\">\r\n                    {{row.aadhaar_linked == 1 ? 'Linked' : 'Not Linked'}}\r\n                  </span>\r\n                </td>\r\n                <td class=\"w100\">{{row.dr_type ? row.dr_type : (row.type == 8 ? 'Ply Expert' : row.type == 13 ? 'Ambassador' : row.type == 21 ? 'Fabricator' : row.type)}}</td>\r\n                <td class=\"w120\">{{row.transfer_from_enquiry == 1 ? 'Yes' : 'No'}}</td>\r\n                <td class=\"w160\">{{row.assigned_sales_user_name || '---'}}</td>\r\n                <td class=\"w120\">{{row.state}}</td>\r\n                <td class=\"w120\">{{row.district}}</td>\r\n                <td class=\"w120\">{{row.city}}</td>\r\n                <td class=\"w110 text-center\" *ngIf=\"active_tab == 'kyc_pending' || active_tab == 'kyc_approved' || active_tab == 'kyc_reject' || active_tab == 'kyc_hold'\">\r\n                  <i class=\"material-icons\" [ngClass]=\"row.kyc_status == 'Verified' ? 'Approve' : row.kyc_status == 'Reject' ? 'Reject' : row.kyc_status == 'Hold' ? 'Hold' : 'Pending'\">\r\n                    {{row.kyc_status == 'Verified' ? 'verified' : row.kyc_status == 'Reject' ? 'cancel' : row.kyc_status == 'Hold' ? 'pause_circle_filled' : 'update'}}\r\n                  </i>\r\n                </td>\r\n                <td class=\"w200\" *ngIf=\"active_tab == 'kyc_hold'\">{{row.kyc_remark || '---'}}</td>\r\n              </tr>\r\n            </ng-container>\r\n            <ng-container *ngIf=\"loader\">\r\n              <tr class=\"sk-loading\" *ngFor=\"let row of [].constructor(10)\">\r\n                <td class=\"w60\"><div>&nbsp;</div></td>\r\n                <td class=\"w110\"><div>&nbsp;</div></td>\r\n                <td class=\"w180\" *ngIf=\"type_id != 8\"><div>&nbsp;</div></td>\r\n                <td class=\"w150\"><div>&nbsp;</div></td>\r\n                <td class=\"w120\"><div>&nbsp;</div></td>\r\n                <td class=\"w140\"><div>&nbsp;</div></td>\r\n                <td class=\"w120\" *ngIf=\"active_tab == 'doc_pending' || active_tab == 'doc_failed'\"><div>&nbsp;</div></td>\r\n                <td class=\"w200\" *ngIf=\"active_tab == 'doc_failed'\"><div>&nbsp;</div></td>\r\n                <td class=\"w120\" *ngIf=\"active_tab == 'doc_pending' || active_tab == 'doc_failed'\"><div>&nbsp;</div></td>\r\n                <td class=\"w200\" *ngIf=\"active_tab == 'doc_failed'\"><div>&nbsp;</div></td>\r\n                <td class=\"w100\" *ngIf=\"active_tab == 'kyc_pending' || active_tab == 'kyc_approved' || active_tab == 'kyc_reject' || active_tab == 'kyc_hold'\"><div>&nbsp;</div></td>\r\n                <td class=\"w120\" *ngIf=\"active_tab == 'kyc_pending' || active_tab == 'kyc_approved' || active_tab == 'kyc_reject' || active_tab == 'kyc_hold'\"><div>&nbsp;</div></td>\r\n                <td class=\"w120\" *ngIf=\"active_tab == 'kyc_approved'\"><div>&nbsp;</div></td>\r\n                <td class=\"w120\" *ngIf=\"active_tab == 'kyc_approved'\"><div>&nbsp;</div></td>\r\n                <td class=\"w130\" *ngIf=\"active_tab == 'kyc_approved'\"><div>&nbsp;</div></td>\r\n                <td class=\"w100\"><div>&nbsp;</div></td>\r\n                <td class=\"w120\"><div>&nbsp;</div></td>\r\n                <td class=\"w160\"><div>&nbsp;</div></td>\r\n                <td class=\"w120\"><div>&nbsp;</div></td>\r\n                <td class=\"w120\"><div>&nbsp;</div></td>\r\n                <td class=\"w120\"><div>&nbsp;</div></td>\r\n                <td class=\"w110\" *ngIf=\"active_tab == 'kyc_pending' || active_tab == 'kyc_approved' || active_tab == 'kyc_reject' || active_tab == 'kyc_hold'\"><div>&nbsp;</div></td>\r\n                <td class=\"w200\" *ngIf=\"active_tab == 'kyc_hold'\"><div>&nbsp;</div></td>\r\n              </tr>\r\n            </ng-container>\r\n          </table>\r\n        </div>\r\n      </div>\r\n\r\n      <ng-container *ngIf=\"dr_list_temp.length <= 0 && datanotfound ==  true\">\r\n        <app-not-result-found></app-not-result-found>\r\n      </ng-container>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"fab-btns\"  *ngIf=\"((type_id==1 && assign_login_data2.add_channel_partner=='1') || (type_id==3 && assign_login_data2.add_sub_dealer=='1' ) || (type_id==7 && assign_login_data2.add_primary_oem=='1')  || (type_id==8 && assign_login_data2.add_ply_expert=='1')  || (type_id==13 && assign_login_data2.add_ambassador=='1') || (type_id==14 && assign_login_data2.add_builder=='1') || (type_id==16 && assign_login_data2.add_secondary_oem=='1')|| (type_id==1 && assign_login_data2.import_channel_partner=='1') || (type_id==3 && assign_login_data2.import_sub_dealer=='1' ) || (type_id==7 && assign_login_data2.import_primary_oem=='1')  || (type_id==8 && assign_login_data2.import_ply_expert=='1')  || (type_id==13 && assign_login_data2.import_ambassador=='1') || (type_id==14 && assign_login_data2.import_builder=='1') || (type_id==16 && assign_login_data2.import_secondary_oem=='1') || (type_id==1 && assign_login_data2.export_channel_partner=='1') || (type_id==3 && assign_login_data2.export_sub_dealer=='1' ) || (type_id==7 && assign_login_data2.export_primary_oem=='1')  || (type_id==8 && assign_login_data2.export_ply_expert=='1')  || (type_id==13 && assign_login_data2.export_ambassador=='1') || (type_id==14 && assign_login_data2.export_builder=='1') || (type_id==16 && assign_login_data2.export_secondary_oem=='1') )\"\r\n   >\r\n    <button class=\"pulse excel\" mat-fab color=\"primary\" [ngClass]=\"{'pulse': fabBtnValue=='add'}\"\r\n      [matMenuTriggerFor]=\"menu\">\r\n      <i class=\"material-icons\">apps</i>\r\n      Action\r\n    </button>\r\n    <mat-menu #menu=\"matMenu\">\r\n      <button mat-menu-item\r\n        *ngIf=\"((type_id==1 && assign_login_data2.add_channel_partner=='1') || (type_id==3 && assign_login_data2.add_sub_dealer=='1' ) || (type_id==7 && assign_login_data2.add_primary_oem=='1')  || (type_id==8 && assign_login_data2.add_ply_expert=='1')  || (type_id==13 && assign_login_data2.add_ambassador=='1') || (type_id==14 && assign_login_data2.add_builder=='1') || (type_id==16 && assign_login_data2.add_secondary_oem=='1')  )\"\r\n        (click)=\"lastBtnValue('add')\" routerLink=\"add-distribution/{{type}}/{{type_id}}/add\"\r\n        [queryParams]=\"{pageType:'add', 'network_type':type}\">\r\n        <mat-icon>add</mat-icon>\r\n        Add New\r\n      </button>\r\n\r\n      <button mat-menu-item (click)=\"upload_excel('insert');\"\r\n       *ngIf=\"((type_id==1 && assign_login_data2.import_channel_partner=='1') || (type_id==3 && assign_login_data2.import_sub_dealer=='1' ) || (type_id==7 && assign_login_data2.import_primary_oem=='1')  || (type_id==8 && assign_login_data2.import_ply_expert=='1')  || (type_id==13 && assign_login_data2.import_ambassador=='1') || (type_id==14 && assign_login_data2.import_builder=='1') || (type_id==16 && assign_login_data2.import_secondary_oem=='1')  )\">\r\n        <mat-icon>cloud_upload</mat-icon>\r\n        <span>Upload New Data</span>\r\n      </button>\r\n      <button mat-menu-item (click)=\"upload_excel('update');\"\r\n      *ngIf=\"((type_id==1 && assign_login_data2.import_channel_partner=='1') || (type_id==3 && assign_login_data2.import_sub_dealer=='1' ) || (type_id==7 && assign_login_data2.import_primary_oem=='1')  || (type_id==8 && assign_login_data2.import_ply_expert=='1')  || (type_id==13 && assign_login_data2.import_ambassador=='1') || (type_id==14 && assign_login_data2.import_builder=='1') || (type_id==16 && assign_login_data2.import_secondary_oem=='1')  )\">\r\n        <mat-icon>update</mat-icon>\r\n        <span>Update Existing Data</span>\r\n      </button>\r\n      <!-- <button mat-menu-item (click)=\"upload_excel('credit_limit');\"\r\n        *ngIf=\"dr_list_temp.length > 0 && type_id != 3 && ( assign_login_data2.import_customer_network=='1' || (type_id==1 && assign_login_data2.import_channel_partner=='1')  || (type_id==7 && assign_login_data2.import_direct_dealers=='1'))\">\r\n        <mat-icon>currency_rupee</mat-icon>\r\n        <span>Credit Limit</span>\r\n      </button> -->\r\n      <!-- <button mat-menu-item (click)=\"upload_excel('geo_location');\"\r\n        *ngIf=\"dr_list_temp.length > 0 && ( assign_login_data2.import_customer_network=='1' || (type_id==1 && assign_login_data2.import_channel_partner=='1') || (type_id==3 && assign_login_data2.import_dealer=='1') || (type_id==7 && assign_login_data2.import_direct_dealers=='1'))\">\r\n        <mat-icon>edit_location_alt</mat-icon>\r\n        <span>Update Geo Location</span>\r\n      </button> -->\r\n      <button mat-menu-item (click)=\"downloadExcel();\"\r\n      *ngIf=\"((type_id==1 && assign_login_data2.export_channel_partner=='1') || (type_id==3 && assign_login_data2.export_sub_dealer=='1' ) || (type_id==7 && assign_login_data2.export_primary_oem=='1')  || (type_id==8 && assign_login_data2.export_ply_expert=='1')  || (type_id==13 && assign_login_data2.export_ambassador=='1') || (type_id==14 && assign_login_data2.export_builder=='1') || (type_id==16 && assign_login_data2.export_secondary_oem=='1')  )\">\r\n        <mat-icon>download</mat-icon>\r\n        <span>Download in excel</span>\r\n      </button>\r\n    </mat-menu>\r\n\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/kyc-status-list/kyc-status-list.component.scss":
/*!****************************************************************!*\
  !*** ./src/app/kyc-status-list/kyc-status-list.component.scss ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/kyc-status-list/kyc-status-list.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/kyc-status-list/kyc-status-list.component.ts ***!
  \**************************************************************/
/*! exports provided: KycStatusListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KycStatusListComponent", function() { return KycStatusListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_services_DatabaseService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/_services/DatabaseService */ "./src/_services/DatabaseService.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_dialog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/dialog.component */ "./src/app/dialog.component.ts");
/* harmony import */ var src_app_localstorage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/localstorage.service */ "./src/app/localstorage.service.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! moment */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var src_app_upload_file_modal_upload_file_modal_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/upload-file-modal/upload-file-modal.component */ "./src/app/upload-file-modal/upload-file-modal.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng6-toastr-notifications */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/ng6-toastr-notifications/fesm5/ng6-toastr-notifications.js");
/* harmony import */ var src_app_bottom_sheet_bottom_sheet_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/bottom-sheet/bottom-sheet.component */ "./src/app/bottom-sheet/bottom-sheet.component.ts");


// import { slideToTop } from '../../router-animation/router-animation.component';









var KycStatusListComponent = /** @class */ (function () {
    function KycStatusListComponent(serve, toast, alert, route, ActivatedRoute, dialog, session, bottomSheet, alrt) {
        this.serve = serve;
        this.toast = toast;
        this.alert = alert;
        this.route = route;
        this.ActivatedRoute = ActivatedRoute;
        this.dialog = dialog;
        this.session = session;
        this.bottomSheet = bottomSheet;
        this.alrt = alrt;
        this.active_tab = 'doc_pending';
        this.tab_counts = {};
        this.fabBtnValue = 'add';
        this.retailer_type = 'Dr';
        this.filter = {};
        this.excelLoader = false;
        this.value = {};
        this.dr_list_temp = [];
        this.distributor_list = [];
        this.start = 0;
        this.pagenumber = '';
        this.page_limit = 20;
        this.exp_loader = false;
        this.loader = false;
        this.data = [];
        this.datanotfound = false;
        this.brand_master = [];
        this.state_values = [];
        this.login_data = [];
        this.skelton = {};
        this.add = {};
        this.sort = {};
        this.delete = {};
        this.sorting_type = '';
        this.column = '';
        this.edit = {};
        this.assign_login_data2 = [];
        this.all_count = {};
        this.assign_login_data = [];
        this.view_edit = true;
        this.view_add = true;
        this.view_delete = true;
        this.downurl = '';
        this.itemClicked = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        // download excel
        this.excel_data = [];
        this.tmpsearch1 = {};
        this.downurl = serve.downloadUrl;
        this.today_date = new Date();
        this.assign_login_data = this.session.getSession();
        this.assign_login_data = this.assign_login_data.value;
        this.assign_login_data2 = this.assign_login_data.data;
        this.assign_login_data = this.assign_login_data.assignModule;
    }
    KycStatusListComponent.prototype.ngAfterViewInit = function () {
    };
    KycStatusListComponent.prototype.ngOnInit = function () {
        var _this = this;
        if (this.dataToReceive != undefined) {
            this.updateData();
            this.distributorList('', this.column, this.sorting_type);
        }
        else {
            this.filter = this.serve.getData();
            if (this.filter.active_tab) {
                this.active_tab = this.filter.active_tab;
            }
            this.login_data = this.session.getSession();
            this.login_data = this.login_data.value.data;
            this.skelton = new Array(10);
            if (this.login_data.access_level != '1') {
                this.login_dr_id = this.login_data.id;
            }
            this.ActivatedRoute.params.subscribe(function (params) {
                _this.type_id = params.id;
                _this.type = params.type;
                _this.distributorList('', _this.column, _this.sorting_type);
            });
        }
    };
    // onItemClicked() {
    //   this.itemClicked.emit(this.dataToReceive); // Emit the dataToReceive property
    // }
    KycStatusListComponent.prototype.lastBtnValue = function (value) {
        this.fabBtnValue = value;
    };
    KycStatusListComponent.prototype.ngOnChanges = function (changes) {
        if (changes.dataToReceive && !changes.dataToReceive.firstChange) {
            this.updateData();
        }
    };
    KycStatusListComponent.prototype.updateData = function () {
        this.padding0 = this.dataToReceive.padding0;
        this.type_id = this.dataToReceive.type;
        this.type = this.dataToReceive.netWorkName;
        this.hide = this.dataToReceive.hide;
        this.filter.user_id = this.dataToReceive.user_id;
        this.filter.assign_user = this.dataToReceive.assign_user;
        this.filter.active_tab = this.active_tab;
        this.distributorList('', this.column, this.sorting_type);
    };
    KycStatusListComponent.prototype.date_format = function () {
        if (this.filter.date_created) {
            this.filter.date_created = moment__WEBPACK_IMPORTED_MODULE_6__(this.filter.date_created).format('YYYY-MM-DD');
        }
        this.start = 0;
        this.distributorList('', this.column, this.sorting_type);
    };
    KycStatusListComponent.prototype.pervious = function () {
        this.start = this.start - this.page_limit;
        this.distributorList('', this.column, this.sorting_type);
    };
    KycStatusListComponent.prototype.nextPage = function () {
        this.start = this.start + this.page_limit;
        this.distributorList('', this.column, this.sorting_type);
    };
    KycStatusListComponent.prototype.distributorList = function (action, column, sorting_type) {
        var _this = this;
        if (action === void 0) { action = ''; }
        if (action == "refresh") {
            this.filter = {};
            this.dr_list_temp = [];
            this.start = 0;
        }
        this.distributor_list = [];
        if (this.sort.type1 == 'DESC') {
            this.sort.value = "company_name";
            this.sort.type = "DESC";
        }
        else if (this.sort.type1 == 'ASC') {
            this.sort.value = "company_name";
            this.sort.type = "ASC";
        }
        else {
            this.sort.value = "date_created";
            this.sort.type = "DESC";
        }
        this.loader = true;
        this.filter.kyc_status = this.active_tab;
        if (this.pagenumber > this.total_page) {
            this.pagenumber = this.total_page;
            this.start = this.pageCount - this.page_limit;
        }
        if (this.start < 0) {
            this.start = 0;
        }
        this.serve.post_rqst({ 'start': this.start, 'pagelimit': this.page_limit, 'filter': this.filter, 'type': this.type_id, 'column_name': this.column, 'sorting_type': this.sorting_type }, "CustomerNetwork/influencer_kyc_list")
            .subscribe((function (result) {
            if (result['statusCode'] == 200) {
                _this.dr_list_temp = result['influencer_kyc_list'];
                _this.tab_counts = result['tab_counts'] || {};
                _this.pageCount = result['count'];
                if (_this.dr_list_temp.length == 0) {
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
                for (var i = 0; i < _this.dr_list_temp.length; i++) {
                    if (_this.dr_list_temp[i].status == '1') {
                        _this.dr_list_temp[i].newStatus = true;
                    }
                    else if (_this.dr_list_temp[i].status == '0') {
                        _this.dr_list_temp[i].newStatus = false;
                    }
                }
                _this.loader = false;
            }
            else {
                _this.toast.errorToastr(result['statusMsg']);
            }
        }));
    };
    // download KYC information excel (respects the active tab + all applied filters)
    KycStatusListComponent.prototype.downloadKycExcel = function () {
        var _this = this;
        this.excelLoader = true;
        this.filter.kyc_status = this.active_tab;
        this.serve.post_rqst({ 'filter': this.filter, 'type': this.type_id }, "CustomerNetwork/kyc_information_excel").subscribe(function (result) {
            if (result['msg'] == true) {
                window.open(_this.downurl + result['filename']);
            }
            else {
                _this.toast.errorToastr(result['error'] || 'No records found.');
            }
            _this.excelLoader = false;
        }, function (err) {
            _this.excelLoader = false;
            _this.toast.errorToastr('Failed to download.');
        });
    };
    KycStatusListComponent.prototype.downloadExcel = function () {
        var _this = this;
        this.excelLoader = true;
        this.serve.post_rqst({ 'search': this.value, 'type': this.type_id, 'filter': this.filter, 'type_name': this.type }, "Excel/dr_list").subscribe(function (result) {
            if (result['msg'] == true) {
                window.open(_this.downurl + result['filename']);
                _this.excelLoader = false;
                _this.distributorList('', _this.column, _this.sorting_type);
            }
            else {
            }
        }, function (err) {
            _this.excelLoader = false;
        });
    };
    KycStatusListComponent.prototype.updateStatus = function (index, id, event) {
        var _this = this;
        if (event.checked == false) {
            this.alert.confirm("You Want To Change Status !").then(function (result) {
                if (result) {
                    if (event.checked == false) {
                        _this.dr_list_temp[index].status = "0";
                    }
                    else {
                        _this.dr_list_temp[index].status = "1";
                    }
                    var value = _this.dr_list_temp[index].status;
                    _this.serve.post_rqst({ 'id': id, 'status': value, 'status_changed_by_id': _this.assign_login_data2.id, 'status_changed_by_name': _this.assign_login_data2.name }, "CustomerNetwork/drStatusChange")
                        .subscribe(function (resp) {
                        if (resp['statusCode'] == 200) {
                            _this.toast.successToastr(resp['statusMsg']);
                            _this.distributorList('', _this.column, _this.sorting_type);
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
                        _this.dr_list_temp[index].status = "0";
                    }
                    else {
                        _this.dr_list_temp[index].status = "1";
                    }
                    var value = _this.dr_list_temp[index].status;
                    _this.serve.post_rqst({ 'id': id, 'status': value, 'status_changed_by_id': _this.assign_login_data2.id, 'status_changed_by_name': _this.assign_login_data2.name }, "CustomerNetwork/drStatusChange")
                        .subscribe(function (resp) {
                        if (resp['statusCode'] == 200) {
                            _this.toast.successToastr(resp['statusMsg']);
                            _this.distributorList('', _this.column, _this.sorting_type);
                        }
                        else {
                            _this.toast.errorToastr(resp['statusMsg']);
                        }
                    });
                }
            });
        }
    };
    KycStatusListComponent.prototype.upload_excel = function (type) {
        var _this = this;
        var dialogRef = this.alrt.open(src_app_upload_file_modal_upload_file_modal_component__WEBPACK_IMPORTED_MODULE_7__["UploadFileModalComponent"], {
            width: '500px',
            panelClass: 'cs-modal',
            disableClose: true,
            data: {
                'from': 'Distribution',
                'type': this.type_id,
                'modal_type': type,
                'customer_type': this.type,
                'filter_data': this.filter
            }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result != false) {
                _this.distributorList('', _this.column, _this.sorting_type);
            }
        });
    };
    KycStatusListComponent.prototype.refresh = function () {
        this.filter = {};
        this.serve.setData(this.filter);
        this.filter.active_tab = this.active_tab;
        this.start = 0;
        this.serve.currentUserID = '';
        this.distributorList('', this.column, this.sorting_type);
    };
    KycStatusListComponent.prototype.userDetail = function (id) {
        this.route.navigate(['/distribution-detail/' + id]);
    };
    KycStatusListComponent.prototype.goTODetail = function (id, state, type) {
        this.route.navigate(['/distribution-detail/' + id], { queryParams: { state: state, id: id, type: type } });
    };
    KycStatusListComponent.prototype.resetDevice = function (index, id) {
        var _this = this;
        this.alert.confirm("You Want To  Reset Device !").then(function (result) {
            if (result) {
                _this.serve.post_rqst({ 'id': id, 'type': 'customer' }, "CustomerNetwork/resetDeviceId")
                    .subscribe(function (resp) {
                    if (resp['statusCode'] == 200) {
                        _this.toast.successToastr(resp['statusMsg']);
                        _this.distributorList('', _this.column, _this.sorting_type);
                    }
                    else {
                        _this.toast.errorToastr(resp['statusMsg']);
                    }
                });
            }
        });
    };
    KycStatusListComponent.prototype.openBottomSheet = function () {
        var _this = this;
        this.bottomSheet.open(src_app_bottom_sheet_bottom_sheet_component__WEBPACK_IMPORTED_MODULE_10__["BottomSheetComponent"], {
            data: {
                'filterPage': 'distribution_list',
            }
        });
        this.bottomSheet._openedBottomSheetRef.afterDismissed().subscribe(function (data) {
            _this.filter.date_from = data.date_from;
            _this.filter.date_to = data.date_to;
            // this.search.userId = data.user_id;
            _this.distributorList('', _this.column, _this.sorting_type);
        });
    };
    KycStatusListComponent.prototype.deleteParty = function (id) {
        var _this = this;
        this.dialog.delete('Customer!').then(function (result) {
            if (result) {
                _this.serve.post_rqst({ "id": id }, "CustomerNetwork/deleteParty").subscribe((function (result) {
                    if (result['statusCode'] == 200) {
                        _this.toast.successToastr(result['statusMsg']);
                        _this.distributorList('', _this.column, _this.sorting_type);
                    }
                    else {
                        _this.toast.errorToastr(result['statusMsg']);
                    }
                }));
            }
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], KycStatusListComponent.prototype, "dataToReceive", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], KycStatusListComponent.prototype, "itemClicked", void 0);
    KycStatusListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-kyc-status-list',
            template: __webpack_require__(/*! ./kyc-status-list.component.html */ "./src/app/kyc-status-list/kyc-status-list.component.html"),
            styles: [__webpack_require__(/*! ./kyc-status-list.component.scss */ "./src/app/kyc-status-list/kyc-status-list.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_services_DatabaseService__WEBPACK_IMPORTED_MODULE_2__["DatabaseService"], ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_9__["ToastrManager"], src_app_dialog_component__WEBPACK_IMPORTED_MODULE_4__["DialogComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], src_app_dialog_component__WEBPACK_IMPORTED_MODULE_4__["DialogComponent"], src_app_localstorage_service__WEBPACK_IMPORTED_MODULE_5__["sessionStorage"], _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatBottomSheet"], _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatDialog"]])
    ], KycStatusListComponent);
    return KycStatusListComponent;
}());



/***/ }),

/***/ "./src/app/kyc-status-list/kyc-status-list.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/kyc-status-list/kyc-status-list.module.ts ***!
  \***********************************************************/
/*! exports provided: KycStatusListModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "KycStatusListModule", function() { return KycStatusListModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angular_ng_autocomplete__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angular-ng-autocomplete */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/angular-ng-autocomplete/fesm5/angular-ng-autocomplete.js");
/* harmony import */ var ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-multiselect-dropdown */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/ng-multiselect-dropdown/fesm5/ng-multiselect-dropdown.js");
/* harmony import */ var ngx_editor__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-editor */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/ngx-editor/fesm5/ngx-editor.js");
/* harmony import */ var ngx_mat_select_search__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-mat-select-search */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/ngx-mat-select-search/fesm5/ngx-mat-select-search.js");
/* harmony import */ var _app_utility_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../app-utility.module */ "./src/app/app-utility.module.ts");
/* harmony import */ var _auth_component_guard__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../auth-component.guard */ "./src/app/auth-component.guard.ts");
/* harmony import */ var _distribution_distribution_detail_distribution_detail_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../distribution/distribution-detail/distribution-detail.component */ "./src/app/distribution/distribution-detail/distribution-detail.component.ts");
/* harmony import */ var _distribution_add_distribution_add_distribution_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../distribution/add-distribution/add-distribution.component */ "./src/app/distribution/add-distribution/add-distribution.component.ts");
/* harmony import */ var _material__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../material */ "./src/app/material.ts");
/* harmony import */ var _kyc_status_list_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./kyc-status-list.component */ "./src/app/kyc-status-list/kyc-status-list.component.ts");













 // needed for route only


var kycRoutes = [
    {
        path: "", children: [
            { path: '', component: _kyc_status_list_component__WEBPACK_IMPORTED_MODULE_15__["KycStatusListComponent"], canActivate: [_auth_component_guard__WEBPACK_IMPORTED_MODULE_11__["AuthComponentGuard"]], data: { expectedRole: ['1'] } },
            {
                path: "distribution-detail/:id/:tabtype", children: [
                    { path: "", component: _distribution_distribution_detail_distribution_detail_component__WEBPACK_IMPORTED_MODULE_12__["DistributionDetailComponent"], canActivate: [_auth_component_guard__WEBPACK_IMPORTED_MODULE_11__["AuthComponentGuard"]], data: { expectedRole: ['1', '2'] } },
                    { path: "edit-distribution/:type/:id/:pageType", component: _distribution_add_distribution_add_distribution_component__WEBPACK_IMPORTED_MODULE_13__["AddDistributionComponent"], canActivate: [_auth_component_guard__WEBPACK_IMPORTED_MODULE_11__["AuthComponentGuard"]], data: { expectedRole: ['1'] } },
                ]
            },
        ]
    },
];
var KycStatusListModule = /** @class */ (function () {
    function KycStatusListModule() {
    }
    KycStatusListModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _kyc_status_list_component__WEBPACK_IMPORTED_MODULE_15__["KycStatusListComponent"],
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild(kycRoutes),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_7__["NgMultiSelectDropDownModule"],
                _material__WEBPACK_IMPORTED_MODULE_14__["MaterialModule"],
                angular_ng_autocomplete__WEBPACK_IMPORTED_MODULE_6__["AutocompleteLibModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialogModule"],
                ngx_mat_select_search__WEBPACK_IMPORTED_MODULE_9__["NgxMatSelectSearchModule"],
                _app_utility_module__WEBPACK_IMPORTED_MODULE_10__["AppUtilityModule"],
                ngx_editor__WEBPACK_IMPORTED_MODULE_8__["NgxEditorModule"]
            ],
        })
    ], KycStatusListModule);
    return KycStatusListModule;
}());



/***/ })

}]);