(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["followup-followup-module-followup-module"],{

/***/ "./src/app/followup/followup-list/followup-list.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/followup/followup-list/followup-list.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-container\">\r\n  <div class=\"tools-container\">\r\n    <h2>Follow Ups</h2>\r\n    <div class=\"left-auto df ac flex-gap-10\">\r\n      <button mat-icon-button matTooltip=\"Refresh\" (click)=\"clearFilter()\">\r\n        <i class=\"material-icons\">refresh</i>\r\n      </button>\r\n      <button mat-icon-button matTooltip=\"Filter\" (click)=\"openBottomSheet()\">\r\n        <i class=\"material-icons\">filter_alt</i>\r\n      </button>\r\n      <button mat-icon-button matTooltip=\"Sorting\" (click)=\"sortData()\">\r\n        <i class=\"material-icons\">swap_vert</i>\r\n      </button>\r\n\r\n      <div class=\"pagination\" *ngIf=\"followup_list.length > 0\">\r\n        <div class=\"pagination-content\">\r\n          Pages\r\n          <span>{{pagenumber}}</span>\r\n          of\r\n          <span>{{total_page}}</span>\r\n        </div>\r\n        <div class=\"page-nav\">\r\n          <button mat-icon-button matTooltip=\"Older\" (click)=\"pervious()\" [disabled]=\"start == 0\">\r\n            <i class=\"material-icons\">navigate_before</i>\r\n          </button>\r\n          <button mat-icon-button matTooltip=\"Newer\" (click)=\"nextPage()\" [disabled]=\"pagenumber == total_page \">\r\n            <i class=\"material-icons\">navigate_next</i>\r\n          </button>\r\n        </div>\r\n      </div>\r\n\r\n\r\n      <div class=\"mat-tabbar\">\r\n        <button mat-button [ngClass]=\"active_tab == 'pending' ? 'active' : ''\"\r\n          (click)=\"active_tab = 'pending';followUpList();\"><i class=\"material-icons\">pending_actions</i>Pending\r\n          ({{tabCount.pending?tabCount.pending:0}})</button>\r\n        <button mat-button [ngClass]=\"active_tab == 'upcoming' ? 'active' : ''\"\r\n          (click)=\"active_tab = 'upcoming';followUpList();\"><i class=\"material-icons\">upcoming</i>Upcoming\r\n          ({{tabCount.upcoming?tabCount.upcoming:0}})</button>\r\n        <button mat-button [ngClass]=\"active_tab == 'complete' ? 'active' : ''\"\r\n          (click)=\"active_tab = 'complete';followUpList();\"><i class=\"material-icons\">task_alt</i>Complete\r\n          ({{tabCount.complete?tabCount.complete:0}})</button>\r\n          <button mat-button [ngClass]=\"active_tab == 'Lost' ? 'active' : ''\"\r\n          (click)=\"active_tab = 'Lost';followUpList();\"><i class=\"material-icons\">task_alt</i>Lost\r\n          ({{tabCount.Lost?tabCount.Lost:0}})</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"container container-scroll no-tab\">\r\n    <div class=\"cs-table horizontal-scroll\">\r\n      <div class=\"sticky-head\">\r\n        <div class=\"table-head\">\r\n          <table>\r\n            <tr>\r\n              <th class=\"w50\">S No.</th>\r\n              <th class=\"w80\">Date Created</th>\r\n              <th class=\"w100\">Created By</th>\r\n              <th class=\"w150\">Company Name</th>\r\n              <th class=\"w80\">Company Type</th>\r\n              <th class=\"w80\">Follow Up Date</th>\r\n              <th class=\"w80\" *ngIf=\"active_tab == 'complete'\">Follow Up Complete</th>\r\n              <th class=\"w100\">Assign To</th>\r\n              <th class=\"w150\">Converted from Digital Enquiry</th>\r\n              <th class=\"w150\">Description</th>\r\n              <!-- <th class=\"w40\" *ngIf=\"assign_login_data2.delete_follow_up=='1'\">Action</th> -->\r\n            </tr>\r\n          </table>\r\n        </div>\r\n        <div class=\"table-head border-top\">\r\n          <table>\r\n            <tr>\r\n              <th class=\"w50\">&nbsp;</th>\r\n              <th class=\"w80\">\r\n                <div class=\"th-search-acmt\">\r\n                  <mat-form-field class=\"example-full-width cs-input\">\r\n                    <input matInput [matDatepicker]=\"picker2\" placeholder=\"Date\" name=\"date_created\"\r\n                      [(ngModel)]=\"search.date_created\" (dateChange)=\"followUpList()\" readonly>\r\n                    <mat-datepicker-toggle matSuffix [for]=\"picker2\"></mat-datepicker-toggle>\r\n                    <mat-datepicker #picker2></mat-datepicker>\r\n                  </mat-form-field>\r\n                </div>\r\n              </th>\r\n              <th class=\"w100\">\r\n                <div class=\"th-search-acmt\">\r\n                  <mat-form-field class=\"example-full-width cs-input select-input\">\r\n                    <input matInput placeholder=\"Search...\" name=\"sales_user\" [(ngModel)]=\"search.sales_user\"\r\n                      (keyup.enter)=\"followUpList()\">\r\n                  </mat-form-field>\r\n                </div>\r\n              </th>\r\n              <th class=\"w150\">\r\n                <div class=\"th-search-acmt\">\r\n                  <mat-form-field class=\"example-full-width cs-input select-input\">\r\n                    <input matInput placeholder=\"Search...\" name=\"company_name\" [(ngModel)]=\"search.company_name\"\r\n                      (keyup.enter)=\"followUpList()\">\r\n                  </mat-form-field>\r\n                </div>\r\n              </th>\r\n              <th class=\"w80\">\r\n                &nbsp;\r\n                <!-- <div class=\"th-search-acmt\">\r\n                  <mat-form-field class=\"cs-input select-input\">\r\n                    <mat-select name=\"customer_type\" #customer_type=\"ngModel\" [(ngModel)]=\"search.network_type\"\r\n                      (selectionChange)=\"followUpList();\">\r\n                      <mat-option value=\"\">All</mat-option>\r\n                      <mat-option value=\"Prospect CP\">Prospect CP</mat-option>\r\n                      <mat-option value=\"Lead\">Lead</mat-option>\r\n                      <mat-option *ngFor=\"let row of serve.drArray\"\r\n                        value=\"{{row.module_name}}\">{{row.module_name}}</mat-option>\r\n                    </mat-select>\r\n                  </mat-form-field>\r\n                </div> -->\r\n              </th>\r\n              <th class=\"w80\">\r\n                <div class=\"th-search-acmt\">\r\n                  <mat-form-field class=\"example-full-width cs-input\">\r\n                    <input matInput [matDatepicker]=\"picker\" placeholder=\"Date\" name=\"followup_date\"\r\n                      [(ngModel)]=\"search.followup_date\" (dateChange)=\"followUpList()\" readonly>\r\n                    <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\r\n                    <mat-datepicker #picker></mat-datepicker>\r\n                  </mat-form-field>\r\n                </div>\r\n              </th>\r\n              <th class=\"w80\" *ngIf=\"active_tab == 'complete'\"> &nbsp;</th>\r\n              <th class=\"w100\">\r\n                <div class=\"th-search-acmt\">\r\n                  <mat-form-field class=\"example-full-width cs-input select-input\">\r\n                    <input matInput placeholder=\"Search...\" name=\"assign_to\" [(ngModel)]=\"search.assign_to\"\r\n                      (keyup.enter)=\"followUpList()\">\r\n                  </mat-form-field>\r\n                </div>\r\n              </th>\r\n              <th class=\"w150\">\r\n                <div class=\"th-search-acmt\">\r\n                  <mat-form-field class=\"cs-input select-input\">\r\n                    <mat-select name=\"transfer_from_enquiry\" [(ngModel)]=\"search.transfer_from_enquiry\"\r\n                      (selectionChange)=\"followUpList();\">\r\n                      <mat-option value=\"\">All</mat-option>\r\n                      <mat-option value=\"Yes\">Yes</mat-option>\r\n                      <mat-option value=\"No\">No</mat-option>\r\n                    </mat-select>\r\n                  </mat-form-field>\r\n                </div>\r\n              </th>\r\n              <th class=\"w150\"></th>\r\n              <!-- <th class=\"w40\"></th> -->\r\n            </tr>\r\n          </table>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"table-container\">\r\n        <div class=\"table-content\">\r\n          <table>\r\n            <ng-container *ngIf=\"!loader\">\r\n              <tr *ngFor=\"let list of followup_list;let i=index\"\r\n                [ngClass]=\"{'Current': serve.currentUserID == list.id || serve.currentUserID == list.dr_id}\">\r\n                <td class=\"w50\">{{ i + 1 + sr_no }}</td>\r\n                <td class=\"w80\">{{list.date_created |date : 'd MMM y'}}</td>\r\n                <td class=\"w100\">{{list.name!=''?list.name:'--'}}</td>\r\n                <td class=\"w150\" *ngIf=\"list.dr_id != '0' && list.dr_type != '15'\"><a *ngIf=\"view_edit\" class=\"link-btn\" mat-button\r\n                    [routerLink]=\"[ 'distribution-detail/', list.dr_id,'Profile' ]\"\r\n                    [queryParams]=\"{'state':list.state, 'id':list.dr_id, 'type':list.type}\"\r\n                    routerLinkActive=\"active\">{{list.company_name | titlecase}}</a>\r\n                </td>\r\n                <td class=\"w150\" *ngIf=\"list.dr_id != '0' && list.dr_type == '15' \"><a *ngIf=\"view_edit\" class=\"link-btn\" mat-button\r\n                  routerLink=\"lead-detail/{{list.dr_id}}\"\r\n                  routerLinkActive=\"active\">{{list.company_name | titlecase}}</a>\r\n              </td>\r\n                <td class=\"w80\">{{list.dr_type_name ? list.dr_type_name : ''}}</td>\r\n                <td class=\"w80\"><a *ngIf=\"view_edit\" class=\"link-btn\" mat-button (click)=\"serve.setData(search)\"\r\n                    routerLink=\"followup-detail/{{list.id}}/{{list.dr_type}}\"\r\n                    routerLinkActive=\"active\">{{list.next_follow_date!=''?(list.next_follow_date | date : 'd MMM\r\n                    y'):'--'}}</a></td>\r\n                    <td class=\"w80\" *ngIf=\"active_tab == 'complete'\">{{list.updated_at!=''?(list.updated_at | date: 'd MMM y - h:mm a'):'--'}}</td>\r\n                <td class=\"w100\">{{list.assigned_to_name!=''?(list.assigned_to_name | titlecase):'--' | date : 'd MMM\r\n                  y'}}</td>\r\n                <td class=\"w150 text-center\">{{list.transfer_from_enquiry == '0' || !list.transfer_from_enquiry ? 'No' : 'Yes'}}</td>\r\n                <td class=\"w150\" matTooltip=\"{{list.description!=''?list.description:'--'}}\" matTooltipPosition=\"above\">\r\n                  <p class=\"one-line\">{{list.description}}</p>\r\n                </td>\r\n                <!-- <td class=\"w40 text-center\" *ngIf=\"assign_login_data2.delete_follow_up=='1'\">\r\n                  <div class=\"action-button\">\r\n                    <button *ngIf=\"view_delete && assign_login_data2.delete_follow_up=='1'\" mat-icon-button  matTooltip=\"Delete\" (click)=\"delete_followup(list.id)\">\r\n                      <i class=\"material-icons del\">delete</i>\r\n                    </button>\r\n                  </div>\r\n                </td> -->\r\n              </tr>\r\n            </ng-container>\r\n\r\n\r\n            <ng-container *ngFor=\"let lead of skelton\">\r\n              <tr class=\"sk-loading\" *ngIf=\"loader\">\r\n                <td class=\"w80\">\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n                <td class=\"w100\">\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n                <td class=\"w150\">\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n                <td class=\"w80\">\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n                <td class=\"w80\">\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n                <td class=\"w80\">\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n                <td class=\"w100\">\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n                <td class=\"w150\">\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n                <td class=\"w150\">\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n                <!-- <td class=\"w40\" *ngIf=\"assign_login_data2.delete_follow_up=='1'\"><div>&nbsp;</div></td> -->\r\n              </tr>\r\n            </ng-container>\r\n          </table>\r\n          <div class=\"search-results\" data-infinite-scroll debounce [infiniteScrollDistance]=\"1\"\r\n            [infiniteScrollUpDistance]=\"2\" [infiniteScrollThrottle]=\"10\" (scrolled)=\"followUpList()\">\r\n          </div>\r\n          <div *ngIf=\"loader\" class=\"lazy-loading\">\r\n            <img src=\"../../../prayag/assets/img/lazy_loader.gif\" alt=\"\">\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n\r\n\r\n    <ng-container *ngIf=\"followup_list.length == 0 && datanotfound==true\">\r\n      <app-not-result-found></app-not-result-found>\r\n    </ng-container>\r\n  </div>\r\n\r\n</div>\r\n<!-- <div class=\"fab-btns\">\r\n  <button mat-fab class=\"excel pulse\" (click)=\"exportAsXLSX()\" [ngClass]=\"{'pulse': fabBtnValue=='excel'}\"\r\n    *ngIf=\"followup_list.length && assign_login_data2.export_follow_up=='1'\">\r\n    <img src=\"assets/img/excel.svg\">\r\n    Download Excel\r\n  </button>\r\n\r\n</div> -->\r\n\r\n<div class=\"fab-btns pulse\"\r\n  *ngIf=\"(assign_login_data2.export_follow_up=='1' || assign_login_data2.add_follow_up=='1') \">\r\n  <button class=\"excel pulse \" mat-fab color=\"primary\" [matMenuTriggerFor]=\"menu\">\r\n    <i class=\"material-icons\">apps</i>\r\n    Action\r\n  </button>\r\n  <mat-menu #menu=\"matMenu\">\r\n\r\n    <button mat-menu-item (click)=\"openDialog('followup')\" *ngIf=\"assign_login_data2.add_follow_up=='1'\">\r\n      <mat-icon>add</mat-icon>\r\n      <span>Add Follow Up</span>\r\n    </button>\r\n    <button mat-menu-item (click)=\"exportAsXLSX()\"\r\n      *ngIf=\"followup_list.length && assign_login_data2.export_follow_up=='1'\">\r\n      <mat-icon>download</mat-icon>\r\n      <span>Download</span>\r\n    </button>\r\n  </mat-menu>\r\n</div>"

/***/ }),

/***/ "./src/app/followup/followup-list/followup-list.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/followup/followup-list/followup-list.component.ts ***!
  \*******************************************************************/
/*! exports provided: FollowupListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FollowupListComponent", function() { return FollowupListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _router_animation_router_animation_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../router-animation/router-animation.component */ "./src/app/router-animation/router-animation.component.ts");
/* harmony import */ var src_services_DatabaseService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/_services/DatabaseService */ "./src/_services/DatabaseService.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! moment */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var src_app_dialog_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/dialog.component */ "./src/app/dialog.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var src_app_localstorage_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/localstorage.service */ "./src/app/localstorage.service.ts");
/* harmony import */ var ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng6-toastr-notifications */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/ng6-toastr-notifications/fesm5/ng6-toastr-notifications.js");
/* harmony import */ var src_app_bottom_sheet_bottom_sheet_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/bottom-sheet/bottom-sheet.component */ "./src/app/bottom-sheet/bottom-sheet.component.ts");
/* harmony import */ var src_app_order_status_modal_status_modal_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/order/status-modal/status-modal.component */ "./src/app/order/status-modal/status-modal.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/router */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/router/fesm5/router.js");












var FollowupListComponent = /** @class */ (function () {
    function FollowupListComponent(toast, serve, alert, bottomSheet, dialog, session, route) {
        this.toast = toast;
        this.serve = serve;
        this.alert = alert;
        this.bottomSheet = bottomSheet;
        this.dialog = dialog;
        this.session = session;
        this.route = route;
        this.followup_list = [];
        this.search = {};
        this.active_tab = 'pending';
        this.datanotfound = false;
        this.skelton = {};
        this.excel_data = [];
        this.count_list = [];
        this.assign_login_data = [];
        this.assign_login_data2 = [];
        this.view_edit = true;
        this.view_add = true;
        this.view_delete = true;
        this.sr_no = 0;
        this.fabBtnValue = 'excel';
        this.pagenumber = 1;
        this.start = 0;
        this.tabCount = 0;
        this.downurl = '';
        this.page_limit = serve.pageLimit;
        this.downurl = serve.downloadUrl;
        this.skelton = new Array(10);
        this.assign_login_data = this.session.getSession();
        this.assign_login_data = this.assign_login_data.value;
        this.assign_login_data2 = this.assign_login_data.data;
        this.assign_login_data = this.assign_login_data.assignModule;
    }
    FollowupListComponent.prototype.ngOnInit = function () {
        this.search = this.serve.getData();
        if (this.search.status) {
            this.active_tab = this.search.status;
        }
        this.followUpList();
    };
    FollowupListComponent.prototype.clearFilter = function () {
        this.search = {};
        this.serve.setData(this.search);
        this.serve.currentUserID = '';
        this.followUpList();
    };
    FollowupListComponent.prototype.pervious = function () {
        this.start = this.start - this.page_limit;
        this.followUpList('');
    };
    FollowupListComponent.prototype.nextPage = function () {
        this.start = this.start + this.page_limit;
        this.followUpList('');
    };
    // goToPage( id, type) {
    //     this.route.navigate(['/followup-detail/'+ id], { queryParams: { 'id': id, 'dr_type': type} })
    //   }
    FollowupListComponent.prototype.followUpList = function (action) {
        var _this = this;
        if (action === void 0) { action = ''; }
        if (this.pagenumber > this.total_page) {
            this.pagenumber = this.total_page;
            this.start = this.pageCount - this.page_limit;
        }
        if (action == "refresh") {
            this.search = {};
        }
        if (this.search.followup_date) {
            this.search.followup_date = moment__WEBPACK_IMPORTED_MODULE_4__(this.search.followup_date).format('YYYY-MM-DD');
        }
        if (this.search.date_created) {
            this.search.date_created = moment__WEBPACK_IMPORTED_MODULE_4__(this.search.date_created).format('YYYY-MM-DD');
        }
        if (this.search.date_from) {
            this.search.date_from = moment__WEBPACK_IMPORTED_MODULE_4__(this.search.date_from).format('YYYY-MM-DD');
        }
        if (this.search.date_to) {
            this.search.date_to = moment__WEBPACK_IMPORTED_MODULE_4__(this.search.date_to).format('YYYY-MM-DD');
        }
        if (this.start < 0) {
            this.start = 0;
        }
        this.loader = true;
        this.serve.post_rqst({ 'user_id': this.assign_login_data2.id, 'start': this.start, 'pagelimit': this.page_limit, 'search': this.search, 'active_tab': this.active_tab, 'user_type': this.assign_login_data2.type }, "Followup/followupList").subscribe(function (result) {
            if (result['statusCode'] == 200) {
                _this.followup_list = result['followup_list'];
                _this.tabCount = result['count'];
                _this.pageCount = result['count'];
                if (_this.active_tab == 'pending') {
                    _this.pageCount = _this.pageCount.pending;
                    _this.total_page = Math.ceil(_this.pageCount / _this.page_limit);
                }
                else if (_this.active_tab == 'upcoming') {
                    _this.pageCount = _this.pageCount.upcoming;
                    _this.total_page = Math.ceil(_this.pageCount / _this.page_limit);
                }
                else if (_this.active_tab == 'Lost') {
                    _this.pageCount = _this.pageCount.Lost;
                    _this.total_page = Math.ceil(_this.pageCount / _this.page_limit);
                }
                else {
                    _this.pageCount = _this.pageCount.complete;
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
                if (_this.count_list.length == 0) {
                    _this.datanotfound = true;
                }
                else {
                    _this.datanotfound = false;
                }
                setTimeout(function () {
                    _this.loader = false;
                }, 100);
            }
            else {
                _this.loader = false;
                _this.toast.errorToastr(result['statusMsg']);
            }
        }, function (err) {
            _this.loader = false;
            _this.toast.errorToastr('Something went wrong');
        });
    };
    FollowupListComponent.prototype.delete_followup = function (followup_id) {
        var _this = this;
        this.alert.delete('Followup !').then(function (result) {
            if (result) {
                _this.serve.post_rqst({ 'followup_id': followup_id }, "Followup/deleteFollowup").subscribe(function (result) {
                    if (result['statusCode'] == 200) {
                        _this.toast.successToastr(result['statusMsg']);
                        _this.followUpList();
                        // this.serve.count_list();
                    }
                    else {
                        _this.toast.errorToastr(result['statusMsg']);
                    }
                }, function (err) {
                    _this.toast.errorToastr('Something went wrong');
                });
            }
        });
    };
    FollowupListComponent.prototype.exportAsXLSX = function (status) {
        var _this = this;
        this.loader = true;
        this.search.status = status;
        this.serve.post_rqst({ 'user_id': this.assign_login_data2.id, 'start': this.start, 'pagelimit': this.page_limit, 'search': this.search, 'active_tab': this.active_tab, 'user_type': this.assign_login_data2.type }, "Excel/followup_list").subscribe(function (result) {
            if (result['msg'] == true) {
                _this.loader = false;
                window.open(_this.downurl + result['filename']);
                _this.followUpList('');
            }
            else {
                _this.loader = false;
            }
        });
    };
    FollowupListComponent.prototype.openBottomSheet = function () {
        var _this = this;
        this.bottomSheet.open(src_app_bottom_sheet_bottom_sheet_component__WEBPACK_IMPORTED_MODULE_9__["BottomSheetComponent"], {
            data: {
                'filterPage': 'distribution_list',
            }
        });
        this.bottomSheet._openedBottomSheetRef.afterDismissed().subscribe(function (data) {
            _this.search.date_from = data.date_from;
            _this.search.date_to = data.date_to;
            // this.search.userId = data.user_id;
            _this.followUpList();
        });
    };
    FollowupListComponent.prototype.sortData = function () {
        this.followup_list.reverse();
    };
    FollowupListComponent.prototype.openDialog = function () {
        var _this = this;
        var dialogRef = this.dialog.open(src_app_order_status_modal_status_modal_component__WEBPACK_IMPORTED_MODULE_10__["StatusModalComponent"], {
            width: '500px',
            panelClass: 'cs-modal',
            disableClose: true,
            data: {
                from: 'add_new_follow_up'
            }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result != false) {
                _this.followUpList();
            }
        });
    };
    FollowupListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-followup-list',
            template: __webpack_require__(/*! ./followup-list.component.html */ "./src/app/followup/followup-list/followup-list.component.html"),
            animations: [Object(_router_animation_router_animation_component__WEBPACK_IMPORTED_MODULE_2__["slideToTop"])()]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_8__["ToastrManager"], src_services_DatabaseService__WEBPACK_IMPORTED_MODULE_3__["DatabaseService"], src_app_dialog_component__WEBPACK_IMPORTED_MODULE_5__["DialogComponent"], _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatBottomSheet"], _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatDialog"], src_app_localstorage_service__WEBPACK_IMPORTED_MODULE_7__["sessionStorage"], _angular_router__WEBPACK_IMPORTED_MODULE_11__["Router"]])
    ], FollowupListComponent);
    return FollowupListComponent;
}());



/***/ }),

/***/ "./src/app/followup/followup-module/followup.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/followup/followup-module/followup.module.ts ***!
  \*************************************************************/
/*! exports provided: FollowupModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FollowupModule", function() { return FollowupModule; });
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
/* harmony import */ var _followup_detail_followup_detail_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../followup-detail/followup-detail.component */ "./src/app/followup/followup-detail/followup-detail.component.ts");
/* harmony import */ var _followup_list_followup_list_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../followup-list/followup-list.component */ "./src/app/followup/followup-list/followup-list.component.ts");
/* harmony import */ var ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-infinite-scroll */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/ngx-infinite-scroll/modules/ngx-infinite-scroll.es5.js");
/* harmony import */ var _followup_edit_followup_edit_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../followup-edit/followup-edit.component */ "./src/app/followup/followup-edit/followup-edit.component.ts");
/* harmony import */ var src_app_distribution_distribution_detail_distribution_detail_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! src/app/distribution/distribution-detail/distribution-detail.component */ "./src/app/distribution/distribution-detail/distribution-detail.component.ts");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @agm/core */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@agm/core/fesm5/agm-core.js");
/* harmony import */ var src_app_order_order_detail_order_detail_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! src/app/order/order-detail/order-detail.component */ "./src/app/order/order-detail/order-detail.component.ts");
/* harmony import */ var src_app_distribution_add_distribution_add_distribution_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! src/app/distribution/add-distribution/add-distribution.component */ "./src/app/distribution/add-distribution/add-distribution.component.ts");
/* harmony import */ var src_app_order_secondary_order_detail_secondary_order_detail_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! src/app/order/secondary-order-detail/secondary-order-detail.component */ "./src/app/order/secondary-order-detail/secondary-order-detail.component.ts");
/* harmony import */ var src_app_site_site_detail_site_detail_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! src/app/site/site-detail/site-detail.component */ "./src/app/site/site-detail/site-detail.component.ts");






















var followupRoutes = [
    {
        path: "", children: [
            { path: "", component: _followup_list_followup_list_component__WEBPACK_IMPORTED_MODULE_13__["FollowupListComponent"], canActivate: [src_app_auth_component_guard__WEBPACK_IMPORTED_MODULE_11__["AuthComponentGuard"]], data: { expectedRole: ['1'] } },
            { path: "followup-detail/:id/:dr_type", component: _followup_detail_followup_detail_component__WEBPACK_IMPORTED_MODULE_12__["FollowupDetailComponent"], canActivate: [src_app_auth_component_guard__WEBPACK_IMPORTED_MODULE_11__["AuthComponentGuard"]], data: { expectedRole: ['1', '2'] } },
            { path: "lead-detail/:id", component: src_app_site_site_detail_site_detail_component__WEBPACK_IMPORTED_MODULE_21__["SiteDetailComponent"], canActivate: [src_app_auth_component_guard__WEBPACK_IMPORTED_MODULE_11__["AuthComponentGuard"]], data: { expectedRole: ['1', '2'] } },
            {
                path: "distribution-detail/:id/:tabtype", children: [
                    { path: "", component: src_app_distribution_distribution_detail_distribution_detail_component__WEBPACK_IMPORTED_MODULE_16__["DistributionDetailComponent"], canActivate: [src_app_auth_component_guard__WEBPACK_IMPORTED_MODULE_11__["AuthComponentGuard"]], data: { expectedRole: ['1', '2'] } },
                    { path: 'order-detail/:id', component: src_app_order_order_detail_order_detail_component__WEBPACK_IMPORTED_MODULE_18__["OrderDetailComponent"], canActivate: [src_app_auth_component_guard__WEBPACK_IMPORTED_MODULE_11__["AuthComponentGuard"]], data: { expectedRole: ['1', '2'] } },
                    { path: 'secondary-order-detail/:id', component: src_app_order_secondary_order_detail_secondary_order_detail_component__WEBPACK_IMPORTED_MODULE_20__["SecondaryOrderDetailComponent"], canActivate: [src_app_auth_component_guard__WEBPACK_IMPORTED_MODULE_11__["AuthComponentGuard"]], data: { expectedRole: ['1', '2'] } },
                    { path: "edit-distribution/:type/:id/:pageType", component: src_app_distribution_add_distribution_add_distribution_component__WEBPACK_IMPORTED_MODULE_19__["AddDistributionComponent"], canActivate: [src_app_auth_component_guard__WEBPACK_IMPORTED_MODULE_11__["AuthComponentGuard"]], data: { expectedRole: ['1'] } },
                ]
            },
        ]
    },
];
var FollowupModule = /** @class */ (function () {
    function FollowupModule() {
    }
    FollowupModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _followup_list_followup_list_component__WEBPACK_IMPORTED_MODULE_13__["FollowupListComponent"],
                // FollowupDetailComponent,
                _followup_edit_followup_edit_component__WEBPACK_IMPORTED_MODULE_15__["FollowupEditComponent"],
            ],
            imports: [
                _agm_core__WEBPACK_IMPORTED_MODULE_17__["AgmCoreModule"].forRoot({
                    apiKey: 'AIzaSyAZ-kqYo3DslRI2VIuvP5GIK7OK-U9n3AQ'
                    /* apiKey is required, unless you are a
                    premium customer, in which case you can
                    use clientId
                    */
                }),
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild(followupRoutes),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_7__["NgMultiSelectDropDownModule"],
                src_app_material__WEBPACK_IMPORTED_MODULE_10__["MaterialModule"],
                angular_ng_autocomplete__WEBPACK_IMPORTED_MODULE_6__["AutocompleteLibModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialogModule"],
                ngx_mat_select_search__WEBPACK_IMPORTED_MODULE_8__["NgxMatSelectSearchModule"],
                src_app_app_utility_module__WEBPACK_IMPORTED_MODULE_9__["AppUtilityModule"],
                ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_14__["InfiniteScrollModule"],
            ],
            entryComponents: [_followup_edit_followup_edit_component__WEBPACK_IMPORTED_MODULE_15__["FollowupEditComponent"]]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FollowupModule);
    return FollowupModule;
}());



/***/ })

}]);