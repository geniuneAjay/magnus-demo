(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["Influencer-influencer-module-influencer-module"],{

/***/ "./src/app/Influencer/influencer-list/influencer-list.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/Influencer/influencer-list/influencer-list.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-container\">\r\n  <div class=\"tools-container\">\r\n    <h2>{{network}}</h2>\r\n    <div class=\"left-auto left-auto df ac flex-gap-10\">\r\n      <button mat-icon-button matTooltip=\"Refresh\" (click)=\"refresh()\">\r\n        <i class=\"material-icons\">refresh</i>\r\n      </button>\r\n\r\n      <div class=\"pagination\" *ngIf=\"Influencer_List.length > 0\">\r\n        <div class=\"pagination-content\">\r\n          Pages\r\n          <span>{{pagenumber}}</span>\r\n          of\r\n          <span>{{total_page}}</span>\r\n        </div>\r\n        <div class=\"page-nav\">\r\n\r\n          <button mat-icon-button matTooltip=\"Older\" (click)=\"pervious()\" [disabled]=\"start == 0\">\r\n            <i class=\"material-icons\">navigate_before</i>\r\n          </button>\r\n          <button mat-icon-button matTooltip=\"Newer\" (click)=\"nextPage()\" [disabled]=\"pagenumber == total_page \">\r\n            <i class=\"material-icons\">navigate_next</i>\r\n          </button>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"mat-tabbar\" *ngIf=\"checkRight.point_transfer_right != 'No' || checkRight.scanning_rights != 'No' \">\r\n        <ng-container>\r\n          <button mat-button [ngClass]=\"active_tab == 'All' ? 'active' : ''\"\r\n          (click)=\"active_tab = 'All'; InfluencerList()\"><i class=\"material-icons\">all_inbox</i>All</button>\r\n\r\n          <button mat-button [ngClass]=\"active_tab == 'Pending' ? 'active' : ''\"\r\n            (click)=\"active_tab = 'Pending';InfluencerList()\"><i class=\"material-icons\">pending_actions</i>Pending\r\n            ({{tab_count.pending_count}})</button>\r\n        </ng-container>\r\n        <button mat-button [ngClass]=\"active_tab == 'Approved' ? 'active' : ''\"\r\n          (click)=\"active_tab = 'Approved'; InfluencerList()\"><i class=\"material-icons\">thumb_up_alt</i>Approved\r\n          ({{tab_count.approved_count}})</button>\r\n        <button mat-button [ngClass]=\"active_tab == 'Reject' ? 'active' : ''\"\r\n          (click)=\"active_tab = 'Reject'; InfluencerList()\"><i class=\"material-icons\">thumb_down_alt</i>Reject\r\n          ({{tab_count.reject_count}})</button>\r\n        <button mat-button [ngClass]=\"active_tab == 'Suspect' ? 'active' : ''\"\r\n          (click)=\"active_tab = 'Suspect'; InfluencerList()\"><i class=\"material-icons\">help</i>Suspect\r\n          ({{tab_count.suspect_count}})</button>\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"container pb100\">\r\n    <div class=\"cs-table\">\r\n      <div class=\"sticky-head\">\r\n        <div class=\"table-head\">\r\n          <table>\r\n            <tr>\r\n              <th class=\"w60\">Sr.No</th>\r\n              <th class=\"w90\">Date\r\n                <div class=\"sorting\">\r\n                  <a (click)=\"openBottomSheet()\" matTooltip=\"Export Excel\">\r\n                    <i class=\"material-icons\">filter_alt</i>\r\n                  </a>\r\n                </div>\r\n              </th>\r\n              <th>Name</th>\r\n              <th class=\"w100\">Mobile No.</th>\r\n              <!-- <th class=\"w100\">Country</th> -->\r\n              <th class=\"w130\">State</th>\r\n              <th class=\"w130\">District</th>\r\n              <ng-container *ngIf=\"checkRight.scanning_rights == 'Yes' || checkRight.point_transfer_right == 'Yes' \">\r\n                <th class=\"w120\">Current Wallet Balance\r\n                  <div class=\"sorting\">\r\n                    <a class=\"\" (click)=\"sorting_type='ASC';InfluencerList()\">\r\n                      <i class=\"material-icons\">arrow_drop_up</i>\r\n                    </a>\r\n                    <a class=\"\" (click)=\"sorting_type='DESC';InfluencerList()\">\r\n                      <i class=\"material-icons\">arrow_drop_down</i>\r\n                    </a>\r\n                  </div>\r\n\r\n                </th>\r\n              </ng-container>\r\n              <th class=\"w120 text-center\" *ngIf=\"active_tab == 'Approved'\">Action</th>\r\n            </tr>\r\n          </table>\r\n        </div>\r\n\r\n        <div class=\"table-head border-top\">\r\n          <table>\r\n            <tr>\r\n              <th class=\"w60\">&nbsp;</th>\r\n              <th class=\"w90\">\r\n                <div class=\"th-search-acmt\">\r\n                  <mat-form-field class=\"cs-input date-column infix-bodr\">\r\n                    <input matInput [matDatepicker]=\"picker\" placeholder=\"Date\" name=\"date_created\"\r\n                      (dateChange)=\"onDate($event)\" [(ngModel)]=\"filter.date_created\" [max]=\"today_date\" disabled>\r\n                    <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\r\n                    <mat-datepicker #picker disabled=\"false\"></mat-datepicker>\r\n                  </mat-form-field>\r\n                </div>\r\n              </th>\r\n              <th>\r\n                <div class=\"th-search-acmt\">\r\n                  <mat-form-field class=\"example-full-width cs-input select-input\">\r\n                    <input matInput placeholder=\"Search...\" type=\"text\" name=\"created_by\" [(ngModel)]=\"filter.name\"\r\n                      (keyup.enter)=\"InfluencerList()\">\r\n                  </mat-form-field>\r\n                </div>\r\n              </th>\r\n              <th class=\"w100\">\r\n                <div class=\"th-search-acmt\">\r\n                  <mat-form-field class=\"example-full-width cs-input select-input\">\r\n                    <input matInput placeholder=\"Search...\" type=\"text\" name=\"mobile_no\" [(ngModel)]=\"filter.mobile_no\"\r\n                      (keyup.enter)=\"InfluencerList()\">\r\n                  </mat-form-field>\r\n                </div>\r\n              </th>\r\n              <!-- <th class=\"w100\">\r\n                <div class=\"th-search-acmt\">\r\n                  <mat-form-field class=\"cs-input select-input\">\r\n                    <mat-select name=\"country\" [(ngModel)]=\"filter.country\" (selectionChange)=\"InfluencerList()\">\r\n                      <mat-option value=\"india\">India</mat-option>\r\n                      <mat-option value=\"nepal\">Nepal</mat-option>\r\n                    </mat-select>\r\n                  </mat-form-field>\r\n                </div>\r\n              </th> -->\r\n              <th class=\"w130\">\r\n                <div class=\"th-search-acmt\">\r\n                  <mat-form-field class=\"cs-input select-input\">\r\n                    <mat-select name=\"state\" [(ngModel)]=\"filter.state\" (selectionChange)=\"InfluencerList()\">\r\n                      <mat-option *ngFor=\"let state of states\"\r\n                        value=\"{{state.state_name}}\">{{state.state_name}}</mat-option>\r\n                    </mat-select>\r\n                  </mat-form-field>\r\n                </div>\r\n              </th>\r\n              <th class=\"w130\">\r\n                <div class=\"th-search-acmt\">\r\n                  <mat-form-field class=\"example-full-width cs-input select-input\">\r\n                    <input matInput placeholder=\"Search...\" type=\"text\" name=\"created_by\" [(ngModel)]=\"filter.district\"\r\n                      (keyup.enter)=\"InfluencerList()\">\r\n                  </mat-form-field>\r\n                </div>\r\n              </th>\r\n              <ng-container *ngIf=\"checkRight.scanning_rights == 'Yes' || checkRight.point_transfer_right == 'Yes' \">\r\n                <th class=\"w120 text-center\">&nbsp;</th>\r\n              </ng-container>\r\n              <th class=\"w120\" *ngIf=\"active_tab == 'Approved'\">\r\n                <div class=\"th-search-acmt\" *ngIf=\"active_tab == 'Approved'\">\r\n                  <mat-form-field class=\"cs-input select-input\">\r\n                    <mat-select name=\"login_status\" [(ngModel)]=\"filter.login_status\"\r\n                      (selectionChange)=\"InfluencerList()\">\r\n                      <mat-option value=\"\">All</mat-option>\r\n                      <mat-option value=\"1\">Active</mat-option>\r\n                      <mat-option value=\"0\">Inactive </mat-option>\r\n                    </mat-select>\r\n                  </mat-form-field>\r\n                </div>\r\n              </th>\r\n            </tr>\r\n          </table>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"table-container\">\r\n        <div class=\"table-content\">\r\n          <table>\r\n            <ng-container *ngIf=\"!loader\">\r\n              <tr *ngFor=\"let row of Influencer_List; let i = index;\"\r\n                [ngClass]=\"{'Current': service.currentUserID == row.id}\">\r\n                <td class=\"w60\">{{i+1}}</td>\r\n                <td class=\"w90\">{{row.date_created | date :'dd MMM yyyy'}}</td>\r\n                <td><a class=\"link-btn\" (click)=\"service.setData(filter)\"\r\n                    routerLink=\"influencer-detail/{{row.id}}/{{type}}\">{{row.name | titlecase}}</a></td>\r\n                <td class=\"w100\">{{row.mobile_no}}</td>\r\n                <!-- <td class=\"w100\">{{row.country}}</td> -->\r\n                <td class=\"w130\">{{row.state}}</td>\r\n                <td class=\"w130\">{{row.district}}</td>\r\n                <ng-container *ngIf=\"checkRight.scanning_rights == 'Yes' || checkRight.point_transfer_right == 'Yes' \">\r\n                  <td class=\"w120 text-right\"><strong>{{row.wallet_point?row.wallet_point + ' PT':'---'}}</strong></td>\r\n                </ng-container>\r\n                <td class=\"w120 text-center\" *ngIf=\"active_tab == 'Approved'\">\r\n\r\n                  <ng-container *ngIf=\"active_tab == 'Approved'\">\r\n                    <div class=\"action-button text-center\">\r\n                      <mat-slide-toggle color=\"accent\" [name]=\"'login_status'+i\" [(ngModel)]=\"row.user_status\"\r\n                        (change)=\"updateStatus(i,row.id,$event)\">\r\n                      </mat-slide-toggle>\r\n                    </div>\r\n                  </ng-container>\r\n                </td>\r\n              </tr>\r\n            </ng-container>\r\n            <ng-container *ngIf=\"loader\">\r\n              <tr class=\"sk-loading\" *ngFor=\"let row of [].constructor(10)\">\r\n                <td class=\"w60\">\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n                <td class=\"w90\">\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n                <td>\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n                <!-- <td class=\"w130\"><div>&nbsp;</div></td> -->\r\n                <td class=\"w100\">\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n                <!-- <td class=\"w100\">\r\n                  <div>&nbsp;</div>\r\n                </td> -->\r\n                <td class=\"w130\">\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n                <td class=\"w130\">\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n                <ng-container *ngIf=\"checkRight.scanning_rights == 'Yes' || checkRight.point_transfer_right == 'Yes' \">\r\n                  <td class=\"w120\">\r\n                    <div>&nbsp;</div>\r\n                  </td>\r\n                </ng-container>\r\n                <td class=\"w120 text-center\" *ngIf=\"active_tab == 'Approved'\">\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n              </tr>\r\n            </ng-container>\r\n          </table>\r\n        </div>\r\n        <ng-container *ngIf=\"Influencer_List.length == 0 && datanotfound == true\">\r\n          <app-not-result-found></app-not-result-found>\r\n        </ng-container>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n\r\n\r\n  <div class=\"fab-btns\" *ngIf=\"login_data5.export_influencer=='1' || login_data5.add_influencer=='1'\">\r\n    <button class=\"excel pulse\" mat-fab color=\"primary\" [matMenuTriggerFor]=\"menu\">\r\n      <i class=\"material-icons\">apps</i>\r\n      Action\r\n    </button>\r\n    <!-- </div> -->\r\n    <mat-menu #menu=\"matMenu\">\r\n      <button mat-menu-item (click)=\"downloadExcel();\"\r\n        *ngIf=\"Influencer_List.length > 0 && login_data5.export_influencer=='1'\">\r\n        <mat-icon>download</mat-icon>\r\n        <span>Download in excel</span>\r\n      </button>\r\n      <button mat-menu-item [routerLink]=\"[ 'add-influencer/']\" [queryParams]=\"{'type':type, 'network':network}\"\r\n        *ngIf=\"login_data5.add_influencer=='1'\">\r\n        <mat-icon>add</mat-icon>\r\n        <span>Add New</span>\r\n      </button>\r\n    </mat-menu>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/Influencer/influencer-list/influencer-list.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/Influencer/influencer-list/influencer-list.component.ts ***!
  \*************************************************************************/
/*! exports provided: InfluencerListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfluencerListComponent", function() { return InfluencerListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_services_DatabaseService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/_services/DatabaseService */ "./src/_services/DatabaseService.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! moment */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var src_app_localstorage_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/localstorage.service */ "./src/app/localstorage.service.ts");
/* harmony import */ var ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng6-toastr-notifications */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/ng6-toastr-notifications/fesm5/ng6-toastr-notifications.js");
/* harmony import */ var src_app_dialog_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/dialog.component */ "./src/app/dialog.component.ts");
/* harmony import */ var src_app_bottom_sheet_bottom_sheet_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/bottom-sheet/bottom-sheet.component */ "./src/app/bottom-sheet/bottom-sheet.component.ts");










var InfluencerListComponent = /** @class */ (function () {
    function InfluencerListComponent(alert, ActivatedRoute, toast, service, route, dialog, session, bottomSheet) {
        var _this = this;
        this.alert = alert;
        this.ActivatedRoute = ActivatedRoute;
        this.toast = toast;
        this.service = service;
        this.route = route;
        this.dialog = dialog;
        this.session = session;
        this.bottomSheet = bottomSheet;
        this.filter = {};
        this.type = '';
        this.active_tab = 'Pending';
        this.network = '';
        this.Influencer_List = [];
        this.loader = false;
        this.datanotfound = false;
        this.start = 0;
        this.pagenumber = 1;
        this.sr_no = 0;
        this.sorting_type = '';
        this.login_data = {};
        this.login_data5 = {};
        this.logined_user_data = {};
        this.assign_login_data = {};
        this.downurl = '';
        this.states = [];
        this.checkRight = {};
        this.downurl = service.downloadUrl;
        this.page_limit = service.pageLimit;
        this.login_data = this.session.getSession();
        this.login_data = this.login_data.value;
        this.login_data5 = this.login_data.data;
        this.assign_login_data = this.session.getSession();
        this.logined_user_data = this.assign_login_data.value;
        this.today_date = new Date();
        this.ActivatedRoute.params.subscribe(function (params) {
            _this.type = params.type;
            _this.network = params.network;
            _this.getRights();
        });
    }
    InfluencerListComponent.prototype.ngOnInit = function () {
        this.filter = this.service.getData();
        if (this.filter.status) {
            this.active_tab = this.filter.status;
        }
        this.getStateList();
    };
    InfluencerListComponent.prototype.getRights = function () {
        var _this = this;
        this.service.post_rqst({ 'type_id': this.type }, 'Influencer/scanningRightsCheck').subscribe(function (resp) {
            if (resp['statusCode'] == 200) {
                _this.checkRight = resp['result'];
            }
            else {
                _this.toast.errorToastr(resp['statusMsg']);
            }
            _this.InfluencerList();
        });
    };
    InfluencerListComponent.prototype.getStateList = function () {
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
    InfluencerListComponent.prototype.date_format = function () {
        this.filter.date_created = moment__WEBPACK_IMPORTED_MODULE_5__(this.filter.date_created).format('YYYY-MM-DD');
        this.InfluencerList();
    };
    InfluencerListComponent.prototype.pervious = function () {
        this.start = this.start - this.page_limit;
        this.InfluencerList();
    };
    InfluencerListComponent.prototype.nextPage = function () {
        this.start = this.start + this.page_limit;
        this.InfluencerList();
    };
    InfluencerListComponent.prototype.InfluencerList = function () {
        var _this = this;
        if (this.pagenumber > this.total_page) {
            this.pagenumber = this.total_page;
            this.start = this.pageCount - this.page_limit;
        }
        if (this.start < 0) {
            this.start = 0;
        }
        this.loader = true;
        if (this.checkRight.point_transfer_right == 'No' && this.checkRight.scanning_rights == 'No') {
            this.active_tab = 'All';
        }
        this.filter.status = this.active_tab;
        this.filter.sort_by_wallet = this.sorting_type;
        if (this.active_tab == 'Approved') {
            this.filter.login_status = parseInt(this.filter.login_status);
        }
        this.service.post_rqst({ 'type': this.type, 'filter': this.filter, 'start': this.start, 'pagelimit': this.page_limit }, 'Influencer/influencerCustomerList').subscribe(function (resp) {
            if (resp['statusCode'] == 200) {
                _this.loader = false;
                _this.Influencer_List = resp['result'];
                _this.pageCount = resp['count'];
                _this.tab_count = resp['tab_count'];
                for (var i = 0; i < _this.Influencer_List.length; i++) {
                    if (_this.Influencer_List[i].login_status == 1) {
                        _this.Influencer_List[i].user_status = true;
                    }
                    else if (_this.Influencer_List[i].login_status == 0) {
                        _this.Influencer_List[i].user_status = false;
                    }
                }
                if (_this.Influencer_List.length == 0) {
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
                setTimeout(function () {
                }, 700);
            }
            else {
                _this.loader = false;
                _this.toast.errorToastr(resp['statusMsg']);
            }
        });
    };
    InfluencerListComponent.prototype.updateStatus = function (index, id, event) {
        var _this = this;
        if (event.checked == false) {
            this.alert.confirm("You Want To Change Status !").then(function (result) {
                if (result) {
                    if (event.checked == false) {
                        _this.Influencer_List[index].login_status = 0;
                    }
                    else {
                        _this.Influencer_List[index].login_status = 1;
                    }
                    var value = _this.Influencer_List[index].login_status;
                    _this.service.post_rqst({ 'id': id, 'login_status': value, 'status_changed_by_id': _this.logined_user_data.data.id, 'status_changed_by_name': _this.logined_user_data.data.name }, "Influencer/disableInfluencer")
                        .subscribe(function (resp) {
                        if (resp['statusCode'] == 200) {
                            _this.toast.successToastr(resp['statusMsg']);
                            _this.InfluencerList();
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
                        _this.Influencer_List[index].login_status = 0;
                    }
                    else {
                        _this.Influencer_List[index].login_status = 1;
                    }
                    var value = _this.Influencer_List[index].login_status;
                    _this.service.post_rqst({ 'id': id, 'login_status': value, 'status_changed_by_id': _this.logined_user_data.data.id, 'status_changed_by_name': _this.logined_user_data.data.name }, "Influencer/disableInfluencer")
                        .subscribe(function (resp) {
                        if (resp['statusCode'] == 200) {
                            _this.toast.successToastr(resp['statusMsg']);
                            _this.InfluencerList();
                        }
                        else {
                            _this.toast.errorToastr(resp['statusMsg']);
                        }
                    });
                }
            });
        }
    };
    InfluencerListComponent.prototype.refresh = function () {
        this.filter = {};
        this.service.setData(this.filter);
        this.service.currentUserID = '';
        this.InfluencerList();
    };
    InfluencerListComponent.prototype.Addnew = function () {
        var network = this.network;
        var type = this.type;
        this.route.navigate(['/add-influencer/'], { queryParams: { type: type, network: network } });
    };
    InfluencerListComponent.prototype.downloadExcel = function () {
        var _this = this;
        this.loader = true;
        this.filter.status = this.active_tab;
        this.filter.type = this.type;
        this.service.post_rqst({ 'filter': this.filter }, "Excel/influencer_list").subscribe(function (result) {
            if (result['msg'] == true) {
                _this.loader = false;
                window.open(_this.downurl + result['filename']);
            }
            else {
                _this.loader = false;
            }
        }, function (err) {
            _this.loader = false;
        });
    };
    InfluencerListComponent.prototype.onDate = function (event) {
        this.filter.date_created = moment__WEBPACK_IMPORTED_MODULE_5__(event.target.value).format('YYYY-MM-DD');
        this.InfluencerList();
    };
    InfluencerListComponent.prototype.openBottomSheet = function () {
        var _this = this;
        this.bottomSheet.open(src_app_bottom_sheet_bottom_sheet_component__WEBPACK_IMPORTED_MODULE_9__["BottomSheetComponent"], {
            data: {
                'filterPage': 'distribution_list',
            }
        });
        this.bottomSheet._openedBottomSheetRef.afterDismissed().subscribe(function (data) {
            _this.filter.date_from = data.date_from;
            _this.filter.date_to = data.date_to;
            // this.search.userId = data.user_id;
            _this.InfluencerList();
        });
    };
    InfluencerListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-influencer-list',
            template: __webpack_require__(/*! ./influencer-list.component.html */ "./src/app/Influencer/influencer-list/influencer-list.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_dialog_component__WEBPACK_IMPORTED_MODULE_8__["DialogComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_7__["ToastrManager"], src_services_DatabaseService__WEBPACK_IMPORTED_MODULE_3__["DatabaseService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialog"], src_app_localstorage_service__WEBPACK_IMPORTED_MODULE_6__["sessionStorage"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatBottomSheet"]])
    ], InfluencerListComponent);
    return InfluencerListComponent;
}());



/***/ }),

/***/ "./src/app/Influencer/influencer-module/influencer.module.ts":
/*!*******************************************************************!*\
  !*** ./src/app/Influencer/influencer-module/influencer.module.ts ***!
  \*******************************************************************/
/*! exports provided: InfluencerModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InfluencerModule", function() { return InfluencerModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var src_app_auth_component_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/auth-component.guard */ "./src/app/auth-component.guard.ts");
/* harmony import */ var _influencer_list_influencer_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../influencer-list/influencer-list.component */ "./src/app/Influencer/influencer-list/influencer-list.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angular_ng_autocomplete__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! angular-ng-autocomplete */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/angular-ng-autocomplete/fesm5/angular-ng-autocomplete.js");
/* harmony import */ var ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-multiselect-dropdown */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/ng-multiselect-dropdown/fesm5/ng-multiselect-dropdown.js");
/* harmony import */ var ngx_mat_select_search__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-mat-select-search */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/ngx-mat-select-search/fesm5/ngx-mat-select-search.js");
/* harmony import */ var src_app_add_influencer_add_influencer_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/add-influencer/add-influencer.component */ "./src/app/add-influencer/add-influencer.component.ts");
/* harmony import */ var src_app_app_utility_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/app-utility.module */ "./src/app/app-utility.module.ts");
/* harmony import */ var src_app_material__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/material */ "./src/app/material.ts");
/* harmony import */ var _influencer_detail_influencer_detail_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../influencer-detail/influencer-detail.component */ "./src/app/Influencer/influencer-detail/influencer-detail.component.ts");
/* harmony import */ var src_app_redeem_redeem_request_detail_redeem_request_detail_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/app/redeem/redeem-request-detail/redeem-request-detail.component */ "./src/app/redeem/redeem-request-detail/redeem-request-detail.component.ts");
/* harmony import */ var _update_kyc_update_kyc_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../update-kyc/update-kyc.component */ "./src/app/Influencer/update-kyc/update-kyc.component.ts");

















var influencerRouters = [
    {
        path: "", children: [
            { path: "", component: _influencer_list_influencer_list_component__WEBPACK_IMPORTED_MODULE_4__["InfluencerListComponent"], canActivate: [src_app_auth_component_guard__WEBPACK_IMPORTED_MODULE_3__["AuthComponentGuard"]], data: { expectedRole: ['1'] } },
            {
                path: "influencer-detail/:id/:type_id", children: [
                    { path: '', component: _influencer_detail_influencer_detail_component__WEBPACK_IMPORTED_MODULE_14__["InfluencerDetailComponent"], canActivate: [src_app_auth_component_guard__WEBPACK_IMPORTED_MODULE_3__["AuthComponentGuard"]], data: { expectedRole: ['1'] } },
                    { path: "add-influencer", component: src_app_add_influencer_add_influencer_component__WEBPACK_IMPORTED_MODULE_11__["AddInfluencerComponent"], canActivate: [src_app_auth_component_guard__WEBPACK_IMPORTED_MODULE_3__["AuthComponentGuard"]], data: { expectedRole: ['1'] } },
                    { path: "redeem-detail/:id", component: src_app_redeem_redeem_request_detail_redeem_request_detail_component__WEBPACK_IMPORTED_MODULE_15__["RedeemRequestDetailComponent"], canActivate: [src_app_auth_component_guard__WEBPACK_IMPORTED_MODULE_3__["AuthComponentGuard"]], data: { expectedRole: ['1'] } },
                ]
            },
            { path: "add-influencer", component: src_app_add_influencer_add_influencer_component__WEBPACK_IMPORTED_MODULE_11__["AddInfluencerComponent"], canActivate: [src_app_auth_component_guard__WEBPACK_IMPORTED_MODULE_3__["AuthComponentGuard"]], data: { expectedRole: ['1'] } },
        ]
    },
];
var InfluencerModule = /** @class */ (function () {
    function InfluencerModule() {
    }
    InfluencerModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_influencer_list_influencer_list_component__WEBPACK_IMPORTED_MODULE_4__["InfluencerListComponent"],
                src_app_add_influencer_add_influencer_component__WEBPACK_IMPORTED_MODULE_11__["AddInfluencerComponent"], _update_kyc_update_kyc_component__WEBPACK_IMPORTED_MODULE_16__["UpdateKycComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"].forChild(influencerRouters),
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
                ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_9__["NgMultiSelectDropDownModule"],
                src_app_material__WEBPACK_IMPORTED_MODULE_13__["MaterialModule"],
                angular_ng_autocomplete__WEBPACK_IMPORTED_MODULE_8__["AutocompleteLibModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatDialogModule"],
                ngx_mat_select_search__WEBPACK_IMPORTED_MODULE_10__["NgxMatSelectSearchModule"],
                src_app_app_utility_module__WEBPACK_IMPORTED_MODULE_12__["AppUtilityModule"]
            ],
            entryComponents: [_update_kyc_update_kyc_component__WEBPACK_IMPORTED_MODULE_16__["UpdateKycComponent"]
            ]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], InfluencerModule);
    return InfluencerModule;
}());



/***/ }),

/***/ "./src/app/Influencer/update-kyc/update-kyc.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/Influencer/update-kyc/update-kyc.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<ng-container *ngIf=\"!modelData.from_Item\">\r\n  <div class=\"edit-modal\">\r\n    <p class=\"heading\">Update KYC Details</p>\r\n    <form #f=\"ngForm\" (ngSubmit)=\" f.valid && submitDetail()\">\r\n      <div class=\"cs-form\">\r\n        <div class=\"row\">\r\n          <div class=\"col s12\" >\r\n            <mat-form-field appearance=\"outline\">\r\n              <mat-label>KYC Status</mat-label>\r\n              <mat-select  name=\"kyc_status\" [(ngModel)]=\"data.kyc_status\" #kyc_status=\"ngModel\" required>\r\n                <mat-option  value=\"Verified\">Verified</mat-option>\r\n                <mat-option  value=\"Hold\">Hold</mat-option>\r\n                <mat-option  value=\"Reject\">Reject</mat-option>\r\n              </mat-select>\r\n            </mat-form-field>\r\n            <div class=\"alert alert-danger\" *ngIf=\"kyc_status.touched || f.submitted\">\r\n              <p *ngIf=\"kyc_status.errors?.required\">This field is required</p>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"row\" *ngIf=\"data.kyc_status == 'Reject'\">\r\n          <div class=\"col s12\" >\r\n            <mat-form-field  appearance=\"outline\">\r\n              <mat-label>Reason For Reject</mat-label>\r\n              <textarea matInput placeholder=\"Type Here ...\" name=\"kyc_remark\" #kyc_remark=\"ngModel\"\r\n              [(ngModel)]=\"data.kyc_remark\" class=\"h80\" required></textarea>\r\n            </mat-form-field>\r\n            <div class=\"alert alert-danger\" *ngIf=\"kyc_remark.touched || f.submitted\">\r\n              <p *ngIf=\"kyc_remark.errors?.required\">This field is required</p>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"row\" *ngIf=\"data.kyc_status == 'Hold'\">\r\n          <div class=\"col s12\" >\r\n            <mat-form-field  appearance=\"outline\">\r\n              <mat-label>Reason For Hold</mat-label>\r\n              <textarea matInput placeholder=\"Type Here ...\" name=\"kyc_remark\" #kyc_remark=\"ngModel\"\r\n              [(ngModel)]=\"data.kyc_remark\" class=\"h80\" required></textarea>\r\n            </mat-form-field>\r\n            <div class=\"alert alert-danger\" *ngIf=\"kyc_remark.touched || f.submitted\">\r\n              <p *ngIf=\"kyc_remark.errors?.required\">This field is required</p>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div mat-dialog-actions>\r\n        <button mat-stroked-button color=\"warn\" [mat-dialog-close]=\"false\">Cancel</button>\r\n        <button [ngClass]=\"{'loading': savingFlag == true}\" mat-raised-button color=\"accent\" type=\"submit\" [disabled]=\"savingFlag == true\">{{savingFlag == true ? 'Saving' : 'Update'}}</button>\r\n      </div>\r\n    </form>\r\n  </div>\r\n</ng-container>\r\n\r\n\r\n\r\n<ng-container>\r\n<div mat-dialog-title *ngIf=\"modelData.from_Item\">Bill Image\r\n  <a mat-icon-button class=\"fix-btn\" (click)=\"close()\">\r\n    <i class=\"material-icons edit\">clear</i>\r\n  </a>\r\n</div>\r\n\r\n  <div mat-dialog-content *ngIf=\"modelData.from_Item\">\r\n    <!-- <div class=\"cs-table horizontal-scroll\">\r\n      <div class=\"sticky-head\">\r\n        <div class=\"table-head\">\r\n          <table>\r\n            <tr>\r\n              <th class=\"w20\">Sno.</th>\r\n              <th class=\"w150\">Product Detail</th>\r\n              <th class=\"w60\">Qty</th>\r\n              <th class=\"w250 text-center\">Image</th>\r\n\r\n            </tr>\r\n          </table>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"table-container\">\r\n        <div class=\"table-content\">\r\n          <table>\r\n            <ng-container>\r\n              <tr *ngFor=\"let row of ItemData.total_details; let i = index;\">\r\n                <td class=\"w20\">{{i + 1}}</td>\r\n                <td class=\"w150\"><strong>{{row.product_detail |titlecase}}</strong></td>\r\n                <td class=\"w60\"><strong>{{row.qty ? row.qty : '---'}}</strong></td>\r\n              </ng-container>\r\n              <ng-container *ngIf=\"ItemData.total_details.length == 0\">\r\n                <app-not-result-found></app-not-result-found>\r\n              </ng-container>\r\n            </table>\r\n          </div>\r\n        </div>\r\n      </div> -->\r\n\r\n      <div class=\"col s8\">\r\n      <!-- <p mat-dialog-title>Bill Image </p> -->\r\n\r\n        <div class=\"uploade-image mt15\">\r\n          <ul>\r\n            <li class=\"df\" *ngFor=\" let item of ItemData.image\" >\r\n              <img [src]=\"imgUrl+item.image\" (click)=\"goToImage(imgUrl + item.image)\">\r\n\r\n            </li>\r\n\r\n          </ul>\r\n        </div>\r\n      </div>\r\n\r\n  </div>\r\n\r\n</ng-container>"

/***/ }),

/***/ "./src/app/Influencer/update-kyc/update-kyc.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/Influencer/update-kyc/update-kyc.component.ts ***!
  \***************************************************************/
/*! exports provided: UpdateKycComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UpdateKycComponent", function() { return UpdateKycComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng6-toastr-notifications */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/ng6-toastr-notifications/fesm5/ng6-toastr-notifications.js");
/* harmony import */ var src_app_localstorage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/localstorage.service */ "./src/app/localstorage.service.ts");
/* harmony import */ var src_services_DatabaseService__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/_services/DatabaseService */ "./src/_services/DatabaseService.ts");
/* harmony import */ var src_app_image_module_image_module_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/image-module/image-module.component */ "./src/app/image-module/image-module.component.ts");








var UpdateKycComponent = /** @class */ (function () {
    function UpdateKycComponent(modelData, dialogs, toast, session, ActivatedRoute, service, route, dialogRef) {
        this.modelData = modelData;
        this.dialogs = dialogs;
        this.toast = toast;
        this.session = session;
        this.ActivatedRoute = ActivatedRoute;
        this.service = service;
        this.route = route;
        this.dialogRef = dialogRef;
        this.data = {};
        this.savingFlag = false;
        this.assign_login_data = {};
        this.logined_user_data = {};
        this.imgUrl = '';
        this.ItemData = [];
        this.kyc_id = modelData.kyc_id;
        this.imgUrl = this.service.uploadUrl + 'influencer_doc/';
        this.userData = JSON.parse(localStorage.getItem('st_user'));
        this.assign_login_data = this.session.getSession();
        this.logined_user_data = this.assign_login_data.value.data;
        // this.imgUrl = service.purchaseUrl
        this.userData = JSON.parse(localStorage.getItem('st_user'));
        this.assign_login_data = this.session.getSession();
        this.logined_user_data = this.assign_login_data.value.data;
        if (modelData.from_Item) {
            this.ItemData = modelData.itemData;
        }
        // if(this.Type){
        //   this.ItemData=modelData.itemData;
        //   }
    }
    UpdateKycComponent.prototype.ngOnInit = function () {
    };
    UpdateKycComponent.prototype.submitDetail = function () {
        var _this = this;
        this.savingFlag = true;
        this.data.created_by_id = this.logined_user_data.id;
        this.data.created_by_name = this.logined_user_data.name;
        this.data.id = this.kyc_id;
        this.service.post_rqst({ 'data': this.data, }, 'Influencer/updateKycStatus').subscribe(function (resp) {
            if (resp['statusCode'] == 200) {
                _this.toast.successToastr('KYC Successfully Updated');
                _this.savingFlag = false;
                _this.dialogRef.close(true);
            }
            else {
                _this.toast.errorToastr(resp['statusMsg']);
                _this.savingFlag = false;
            }
        });
    };
    UpdateKycComponent.prototype.close = function () {
        this.dialogRef.close(true);
    };
    UpdateKycComponent.prototype.goToImage = function (image) {
        var dialogRef = this.dialogs.open(src_app_image_module_image_module_component__WEBPACK_IMPORTED_MODULE_7__["ImageModuleComponent"], {
            panelClass: 'Image-modal',
            data: {
                'image': image,
                'type': 'base64'
            }
        });
        dialogRef.afterClosed().subscribe(function (result) {
        });
    };
    UpdateKycComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-update-kyc',
            template: __webpack_require__(/*! ./update-kyc.component.html */ "./src/app/Influencer/update-kyc/update-kyc.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object, _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"], ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_4__["ToastrManager"], src_app_localstorage_service__WEBPACK_IMPORTED_MODULE_5__["sessionStorage"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], src_services_DatabaseService__WEBPACK_IMPORTED_MODULE_6__["DatabaseService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]])
    ], UpdateKycComponent);
    return UpdateKycComponent;
}());



/***/ }),

/***/ "./src/app/add-influencer/add-influencer.component.html":
/*!**************************************************************!*\
  !*** ./src/app/add-influencer/add-influencer.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-container\">\r\n  <div class=\"tools-container\">\r\n    <a mat-icon-button matTooltip=\"Back\" (click)=\"back()\">\r\n      <i class=\"material-icons\">arrow_back</i>\r\n    </a>\r\n    <h2>{{params_id ? 'Edit' : 'Add New'}} {{params_network}}</h2>\r\n  </div>\r\n\r\n  <div class=\"container pt10 pl10 pr10 pb50\">\r\n    <form #f=\"ngForm\" (ngSubmit)=\" f.valid && submitDetail()\">\r\n      <div class=\"row\">\r\n        <div class=\"col s12\">\r\n          <div class=\"card pb0\">\r\n            <div class=\"card-head\">\r\n              <h2>Basic Information</h2>\r\n            </div>\r\n            <div class=\"card-body cs-form\">\r\n              <div class=\"row\">\r\n                <div class=\"col s12 m3 l3\">\r\n                  <mat-form-field appearance=\"outline\" [ngClass]=\"{'has-error' : name.invalid } \">\r\n                    <mat-label>Name</mat-label>\r\n                    <input matInput placeholder=\"Type Here ...\" name=\"name\" #name=\"ngModel\" [(ngModel)]=\"data.name\"\r\n                      required>\r\n                  </mat-form-field>\r\n                  <div class=\"alert alert-danger\" *ngIf=\"name.touched || f.submitted\">\r\n                    <p *ngIf=\"name.errors?.required\">This field is required</p>\r\n                  </div>\r\n                </div>\r\n                <div class=\"col s12 m3 l3\">\r\n                  <mat-form-field appearance=\"outline\" [ngClass]=\"{'has-error' : mobile_no.invalid } \">\r\n                    <mat-label>Mobile Number</mat-label>\r\n                    <input type=\"text\" name=\"mobile_no\" minlength=\"10\" maxlength=\"10\" matInput placeholder=\"\"\r\n                      #mobile_no=\"ngModel\" [(ngModel)]=\"data.mobile_no\"\r\n                      onkeypress=\"return event.charCode>=48 && event.charCode<=57\" required>\r\n                  </mat-form-field>\r\n                  <div class=\"alert alert-danger\" *ngIf=\"mobile_no.touched || f.submitted\">\r\n                    <p *ngIf=\"mobile_no.errors?.required\">This field is required</p>\r\n                  </div>\r\n                  <div class=\"alert alert-danger\" *ngIf=\"exist\">\r\n                    Mobile no. already Exists.\r\n                  </div>\r\n                </div>\r\n                <div class=\"col s12 m3 l3\" *ngIf=\"params_network!='Customer'\">\r\n                  <mat-form-field appearance=\"outline\" [ngClass]=\"{'has-error' : mobile_no.invalid } \">\r\n                    <mat-label>Paytm Mobile Number</mat-label>\r\n\r\n                    <input type=\"text\" name=\"paytm_mobile_no\" minlength=\"10\" maxlength=\"10\" matInput placeholder=\"\"\r\n                      #paytm_mobile_no=\"ngModel\" [(ngModel)]=\"data.paytm_mobile_no\"\r\n                      onkeypress=\"return event.charCode>=48 && event.charCode<=57\">\r\n                  </mat-form-field>\r\n\r\n                </div>\r\n\r\n                <div class=\"col s12 m3 l3\" *ngIf=\"params_network!='Sales Boy'\">\r\n                  <mat-form-field appearance=\"outline\">\r\n                    <mat-label>Service</mat-label>\r\n                    <mat-select name=\"service\" #service=\"ngModel\" [(ngModel)]=\"data.service\" required>\r\n                      <mat-option disabled=\"\">Select Service</mat-option>\r\n                      <mat-option value=\"Yes\">\r\n                        Yes\r\n                      </mat-option>\r\n                      <mat-option value=\"No\">\r\n                        No\r\n                      </mat-option>\r\n                    </mat-select>\r\n                  </mat-form-field>\r\n                  <div class=\"alert alert-danger\" *ngIf=\"service.touched || f.submitted\">\r\n                    <p *ngIf=\"service.errors?.required\">This field is required</p>\r\n                  </div>\r\n                </div>\r\n\r\n\r\n                <!-- <div class=\"col s12 m3 l3\">\r\n                  <mat-form-field appearance=\"outline\">\r\n                    <mat-label>Country</mat-label>\r\n                    <mat-select name=\"country\" #country=\"ngModel\" [(ngModel)]=\"data.country\" required>\r\n                      <mat-option disabled=\"\">Select Country</mat-option>\r\n                      <mat-option value=\"india\">\r\n                        India\r\n                      </mat-option>\r\n                      <mat-option value=\"nepal\">\r\n                        Nepal\r\n                      </mat-option>\r\n                    </mat-select>\r\n                  </mat-form-field>\r\n\r\n                  <div class=\"alert alert-danger\" *ngIf=\"country.touched || f.submitted\">\r\n                    <p *ngIf=\"country.errors?.required\">This field is required</p>\r\n                  </div>\r\n\r\n                </div> -->\r\n                <ng-container *ngIf=\"checkRight.scanning_rights == 'Yes' || checkRight.point_transfer_right == 'Yes' \">\r\n                  <div class=\"col s12 m3 l3\">\r\n                    <mat-form-field appearance=\"outline\">\r\n                      <mat-label>Email ID</mat-label>\r\n                      <input type=\"email\" name=\"email\" matInput placeholder=\"\" #email=\"ngModel\"\r\n                        pattern=\"[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$\" [(ngModel)]=\"data.email\">\r\n                    </mat-form-field>\r\n                    <div class=\"alert alert-danger\" *ngIf=\"email.touched || f.submitted\">\r\n                      <p *ngIf=\"email.errors?.pattern\">This is not a valid Email ID !</p>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"col s12 m3 l3\">\r\n                    <mat-form-field appearance=\"outline\">\r\n                      <mat-label>D.O.B</mat-label>\r\n                      <input name=\"dob\" matInput placeholder=\"\" #dob=\"ngModel\" [(ngModel)]=\"data.dob\" [max]=\"myDate\"\r\n                        [matDatepicker]=\"picker\" disabled>\r\n                      <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\r\n                      <mat-datepicker #picker disabled=\"false\"></mat-datepicker>\r\n                    </mat-form-field>\r\n                  </div>\r\n                  <div class=\"col s12 m3 l3\"\r\n                    *ngIf=\"checkRight.scanning_rights == 'Yes' || checkRight.point_transfer_right == 'Yes' \">\r\n                    <mat-form-field class=\"cs-input\" appearance=\"outline\">\r\n                      <mat-label>D.O.A</mat-label>\r\n                      <input name=\"D.O.A\" matInput [matDatepicker]=\"pickers\" placeholder=\"\" #doa=\"ngModel\"\r\n                        [max]=\"myDate\" [(ngModel)]=\"data.doa\" disabled>\r\n                      <mat-datepicker-toggle matSuffix [for]=\"pickers\"></mat-datepicker-toggle>\r\n                      <mat-datepicker #pickers disabled=\"false\"></mat-datepicker>\r\n                    </mat-form-field>\r\n                  </div>\r\n                </ng-container>\r\n              </div>\r\n\r\n              <div class=\"row\" *ngIf=\"params_network!='Customer'\">\r\n                <div class=\"col s12 m3 l3\">\r\n                  <mat-form-field appearance=\"outline\" [ngClass]=\"{'has-error' : dealer_name.invalid } \">\r\n                    <mat-label>Dealer Name</mat-label>\r\n                    <input matInput placeholder=\"Type Here ...\" name=\"dealer_name\" #dealer_name=\"ngModel\"\r\n                      [(ngModel)]=\"data.dealer_name\" required>\r\n                  </mat-form-field>\r\n                  <div class=\"alert alert-danger\" *ngIf=\"dealer_name.touched || f.submitted\">\r\n                    <p *ngIf=\"dealer_name.errors?.required\">This field is required</p>\r\n                  </div>\r\n                </div>\r\n\r\n                <div class=\"col s12 m3 l3\">\r\n                  <mat-form-field appearance=\"outline\" [ngClass]=\"{'has-error' : dealer_mobile.invalid } \">\r\n                    <mat-label>Dealer Mobile Number</mat-label>\r\n                    <input type=\"text\" name=\"dealer_mobile\" minlength=\"10\" maxlength=\"10\" matInput placeholder=\"\"\r\n                      #dealer_mobile=\"ngModel\" [(ngModel)]=\"data.dealer_mobile\"\r\n                      onkeypress=\"return event.charCode>=48 && event.charCode<=57\" required>\r\n                  </mat-form-field>\r\n                  <div class=\"alert alert-danger\" *ngIf=\"mobile_no.touched || f.submitted\">\r\n                    <p *ngIf=\"mobile_no.errors?.required\">This field is required</p>\r\n                  </div>\r\n                </div>\r\n                <div class=\"col s12 m3 l3\">\r\n                  <mat-form-field appearance=\"outline\" [ngClass]=\"{'has-error' : distributor_name.invalid } \">\r\n                    <mat-label>Distributor Name</mat-label>\r\n                    <input type=\"text\" name=\"distributor_name\" matInput placeholder=\"\" #distributor_name=\"ngModel\"\r\n                      [(ngModel)]=\"data.distributor_name\" required>\r\n                  </mat-form-field>\r\n                  <div class=\"alert alert-danger\" *ngIf=\"distributor_name.touched || f.submitted\">\r\n                    <p *ngIf=\"distributor_name.errors?.required\">This field is required</p>\r\n                  </div>\r\n                </div>\r\n\r\n\r\n                <div class=\"col s12 m3 l3\" *ngIf=\"data.update_id != '' && params_network == 'Plumber'\">\r\n                  <mat-form-field appearance=\"outline\">\r\n                    <mat-label>Referred By</mat-label>\r\n                    <input type=\"text\" name=\"referred_by_code\" matInput placeholder=\"\" #referred_by_code=\"ngModel\"\r\n                      [(ngModel)]=\"data.referred_by_code\">\r\n                  </mat-form-field>\r\n                </div>\r\n              </div>\r\n\r\n              <div class=\"row\">\r\n\r\n\r\n\r\n\r\n                <!-- <ng-container *ngIf=\"checkRight.scanning_rights == 'No' && checkRight.point_transfer_right == 'Yes' \">\r\n                  <div class=\"col s12 m3 l3\">\r\n                    <mat-form-field appearance=\"outline\">\r\n                      <mat-label>Distributor</mat-label>\r\n                      <mat-select name=\"distributor_assign\" multiple [(ngModel)]=\"data.distributor_assign\" #distributor_assign=\"ngModel\"  [ngClass]=\"{'has-error' : distributor_assign.invalid } \" required>\r\n                        <mat-option>\r\n                          <ngx-mat-select-search noEntriesFoundLabel=\"'no data found'\" placeholderLabel=\"Search..\"\r\n                          (keyup)=\"distributorList($event.target.value, '')\"></ngx-mat-select-search>\r\n                        </mat-option>\r\n                        <mat-option *ngFor=\"let row of drlist\" value=\"{{row.id}}\">{{row.company_name | titlecase}}\r\n                          {{row.dr_code}}</mat-option>\r\n                        </mat-select>\r\n                      </mat-form-field>\r\n                      <div class=\"alert alert-danger\" *ngIf=\"distributor_assign.touched || f.submitted\">\r\n                        <p *ngIf=\"distributor_assign.errors?.required\">This field is required</p>\r\n                      </div>\r\n\r\n                    </div>\r\n\r\n                    <div class=\"col s12 m3 l3\">\r\n                      <mat-form-field class=\"cs-input\" appearance=\"outline\">\r\n                        <mat-label>Sales User</mat-label>\r\n                        <mat-select name=\"user_assign\" multiple [(ngModel)]=\"data.user_assign\" #user_assign=\"ngModel\" [ngClass]=\"{'has-error' : user_assign.invalid }\" required>\r\n                          <mat-option>\r\n                            <ngx-mat-select-search noEntriesFoundLabel=\"'no data found'\" placeholderLabel=\"Search..\"\r\n                            (keyup)=\"getSalesUser($event.target.value)\"></ngx-mat-select-search>\r\n                          </mat-option>\r\n                          <mat-option *ngFor=\"let row of salesUser\" value=\"{{row.id}}\">{{row.name}} {{row.role_name}}</mat-option>\r\n                        </mat-select>\r\n                      </mat-form-field>\r\n                      <div class=\"alert alert-danger\" *ngIf=\"user_assign.touched || f.submitted\">\r\n                        <p *ngIf=\"user_assign.errors?.required\">This field is required</p>\r\n                      </div>\r\n                    </div>\r\n                  </ng-container> -->\r\n\r\n\r\n              </div>\r\n              <div class=\"row mb0\">\r\n                <div class=\"col s12 m6 l6\">\r\n                  <div class=\"row\">\r\n                    <ng-container *ngIf=\"data.country=='India'\">\r\n\r\n                      <div class=\"col s12 m6 l6\">\r\n                        <mat-form-field appearance=\"outline\">\r\n                          <mat-label>Pincode</mat-label>\r\n                          <input matInput type=\"text\" name=\"pincode\" placeholder=\"Type Here ...\" #pincode=\"ngModel\"\r\n                          (input)=\"getaddress(data.pincode)\" minlength=\"6\" maxlength=\"6\" [(ngModel)]=\"data.pincode\"\r\n                            onkeypress=\"return event.charCode>=48 && event.charCode<=57\" required>\r\n                        </mat-form-field>\r\n                        <div class=\"alert alert-danger\" *ngIf=\"pincode.touched || f.submitted\">\r\n                          <p *ngIf=\"pincode.errors?.required\">This field is required</p>\r\n                        </div>\r\n                      </div>\r\n\r\n                      <div class=\"col s12 m6 l6\">\r\n                        <mat-form-field appearance=\"outline\">\r\n                          <mat-label>State</mat-label>\r\n                          <mat-select name=\"state\" #state=\"ngModel\" [(ngModel)]=\"data.state\" required\r\n                            (selectionChange)=\"getDistrict(1)\">\r\n                            <mat-option disabled=\"\">Select State</mat-option>\r\n                            <mat-option *ngFor=\"let row of states\" value=\"{{row.state_name}}\">\r\n                              {{row.state_name}}\r\n                            </mat-option>\r\n                          </mat-select>\r\n                        </mat-form-field>\r\n\r\n                        <div class=\"alert alert-danger\" *ngIf=\"state.touched || f.submitted\">\r\n                          <p *ngIf=\"state.errors?.required\">This field is required</p>\r\n                        </div>\r\n\r\n                      </div>\r\n                    </ng-container>\r\n                    <!-- <ng-container *ngIf=\"data.country=='nepal'\">\r\n                      <div class=\"col s12 m6 l6\">\r\n                        <mat-form-field appearance=\"outline\" [ngClass]=\"{'has-error' : state.invalid } \">\r\n                          <mat-label>State</mat-label>\r\n                          <input matInput placeholder=\"Type Here ...\" name=\"state\" #state=\"ngModel\"\r\n                            [(ngModel)]=\"data.state\" required>\r\n                        </mat-form-field>\r\n                        <div class=\"alert alert-danger\" *ngIf=\"state.touched || f.submitted\">\r\n                          <p *ngIf=\"state.errors?.required\">This field is required</p>\r\n                        </div>\r\n                      </div>\r\n                    </ng-container> -->\r\n                  </div>\r\n\r\n\r\n\r\n                  <div class=\"row\">\r\n                    <div class=\"col s12 m6 l6\" *ngIf=\"data.country=='India'\">\r\n                      <mat-form-field appearance=\"outline\">\r\n                        <mat-label>District</mat-label>\r\n                        <mat-select name=\"district\" #district=\"ngModel\" [(ngModel)]=\"data.district\" required>\r\n                          <mat-option disabled=\"\">Select District</mat-option>\r\n                          <mat-option *ngFor=\"let row of district_list\" value=\"{{row.district_name}}\">\r\n                            {{row.district_name}}\r\n                          </mat-option>\r\n                        </mat-select>\r\n                      </mat-form-field>\r\n                      <div class=\"alert alert-danger\" *ngIf=\"district.touched || f.submitted\">\r\n                        <p *ngIf=\"district.errors?.required\">This field is required</p>\r\n                      </div>\r\n                    </div>\r\n                    <ng-container *ngIf=\"data.country!='India'\">\r\n                      <div class=\"col s12 m6 l6\">\r\n                        <mat-form-field appearance=\"outline\" [ngClass]=\"{'has-error' : state.invalid } \">\r\n                          <mat-label>Province </mat-label>\r\n                          <input matInput placeholder=\"Type Here ...\" name=\"state\" #state=\"ngModel\"\r\n                            [(ngModel)]=\"data.state\" required>\r\n                        </mat-form-field>\r\n                        <div class=\"alert alert-danger\" *ngIf=\"state.touched || f.submitted\">\r\n                          <p *ngIf=\"state.errors?.required\">This field is required</p>\r\n                        </div>\r\n                      </div>\r\n\r\n\r\n                    </ng-container>\r\n                    <div class=\"col s12 m6 l6\" >\r\n                      <mat-form-field appearance=\"outline\">\r\n                        <mat-label>City</mat-label>\r\n                        <input matInput placeholder=\"Type here...\" name=\"city\" #city=\"ngModel\" [(ngModel)]=\"data.city\"\r\n                          required>\r\n                      </mat-form-field>\r\n                      <div class=\"alert alert-danger\" *ngIf=\"city.touched || f.submitted\">\r\n                        <p *ngIf=\"city.errors?.required\">This field is required</p>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <div class=\"col s12 m6 l6\">\r\n                  <mat-form-field appearance=\"outline\">\r\n                    <mat-label>Address</mat-label>\r\n                    <textarea matInput placeholder=\"Type Here ...\" name=\"address\" #address=\"ngModel\"\r\n                      [(ngModel)]=\"data.address\" class=\"h80\" required></textarea>\r\n                  </mat-form-field>\r\n                  <div class=\"alert alert-danger\" *ngIf=\"address.touched || f.submitted\">\r\n                    <p *ngIf=\"address.errors?.required\">This field is required</p>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n\r\n\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n\r\n      <div class=\"row\" *ngIf=\"checkRight.scanning_rights == 'Yes' || checkRight.point_transfer_right == 'Yes' \">\r\n        <ng-container>\r\n          <div class=\"col s12 m6 l6\">\r\n            <div class=\"card pb0\">\r\n              <div class=\"card-head\">\r\n                <h2>Document Detail</h2>\r\n              </div>\r\n              <div class=\"card-body cs-form\">\r\n                <div class=\"row\">\r\n                  <div class=\"col s12 \">\r\n                    <mat-form-field appearance=\"outline\">\r\n                      <mat-label>Document Number</mat-label>\r\n                      <input type=\"text\" name=\"adhar_no\" minlength=\"12\" maxlength=\"12\" matInput placeholder=\"\"\r\n                        #adhar_no=\"ngModel\" [(ngModel)]=\"data.adhar_no\"\r\n                        onkeypress=\"return event.charCode>=48 && event.charCode<=57\">\r\n                    </mat-form-field>\r\n\r\n                  </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                  <div class=\"col s6 \">\r\n                    <div class=\"uploade-image\">\r\n                      <ul>\r\n                        <li class=\"add-bg-1 wp100\">\r\n                          <img src=\"{{front_img_id ? uploadurl+data.document_image :data.document_image}}\"\r\n                            *ngIf=\"data.document_image\">\r\n                          <label class=\"fix-label\">\r\n                            <input type=\"file\" (change)=\"Adhr_frnt_Upload($event)\" style=\"display:none;\"\r\n                              accept=\".png, .jpg, .jpeg,\" multiple required />\r\n                            <div class=\"other\">\r\n                              <i class=\"material-icons\">cloud_upload</i>\r\n                              <p>Upload Document Front Image</p>\r\n                            </div>\r\n                          </label>\r\n                        </li>\r\n                      </ul>\r\n                    </div>\r\n\r\n                  </div>\r\n                  <div class=\"col s6\">\r\n                    <div class=\"uploade-image\">\r\n                      <ul>\r\n                        <li class=\"add-bg-1 wp100\">\r\n                          <img src=\"{{back_img_id ? uploadurl+data.document_image_back :data.document_image_back}}\"\r\n                            *ngIf=\"data.document_image_back\">\r\n                          <label class=\"fix-label\">\r\n                            <input type=\"file\" (change)=\"Adhr_bck_Upload($event)\" style=\"display:none;\"\r\n                              accept=\".png, .jpg, .jpeg,\" multiple required />\r\n                            <div class=\"other\">\r\n                              <i class=\"material-icons\">cloud_upload</i>\r\n                              <p>Upload Document Back Image</p>\r\n                            </div>\r\n                          </label>\r\n                        </li>\r\n                      </ul>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                  <div class=\"col s12\">\r\n                    <mat-form-field appearance=\"outline\">\r\n                      <mat-label>Pan Number</mat-label>\r\n                      <input type=\"text\" name=\"pan_no\" matInput placeholder=\"\" #pan_no=\"ngModel\"\r\n                        [(ngModel)]=\"data.pan_no\" pattern=\"[A-z]{5}[0-9]{4}[A-z]{1}\">\r\n                    </mat-form-field>\r\n                    <div class=\"alert alert-danger\" *ngIf=\"pan_no.errors?.pattern\">\r\n                      <p>Invalid Pan Card Number</p>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                  <div class=\"col s6\">\r\n                    <div class=\"uploade-image\">\r\n                      <ul>\r\n                        <li class=\"add-bg-1 wp100\">\r\n                          <img src=\"{{pan_img_id ? uploadurl+data.pan_img :data.pan_img}}\" *ngIf=\"data.pan_img\">\r\n                          <label class=\"fix-label\">\r\n                            <input type=\"file\" (change)=\"Pan_Upload($event)\" style=\"display:none;\"\r\n                              accept=\".png, .jpg, .jpeg,\" multiple required />\r\n                            <div class=\"other\">\r\n                              <i class=\"material-icons\">cloud_upload</i>\r\n                              <p>Upload PAN Image</p>\r\n                            </div>\r\n                          </label>\r\n                        </li>\r\n                      </ul>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"col s12 m6 l6\">\r\n            <div class=\"card pb0\">\r\n              <div class=\"card-head\">\r\n                <h2>Bank Detail</h2>\r\n              </div>\r\n              <div class=\"card-body cs-form\">\r\n\r\n                <div class=\"row\">\r\n                  <div class=\"col s12 m6 l6\">\r\n                    <mat-form-field appearance=\"outline\">\r\n                      <mat-label>Account Number</mat-label>\r\n                      <input type=\"text\" onkeypress=\"return event.charCode>=48 && event.charCode<=57\" name=\"account_no\"\r\n                        matInput placeholder=\"\" #account_no=\"ngModel\" [(ngModel)]=\"data.account_no\">\r\n                    </mat-form-field>\r\n                  </div>\r\n                  <div class=\"col s12 m6 l6\">\r\n                    <mat-form-field appearance=\"outline\">\r\n                      <mat-label>IFSC Code</mat-label>\r\n                      <input type=\"text\" name=\"ifsc_code\" matInput placeholder=\"\" #ifsc_code=\"ngModel\"\r\n                        [(ngModel)]=\"data.ifsc_code\" pattern=\"^[A-Z]{4}[0][A-Z0-9]{6}$\">\r\n                    </mat-form-field>\r\n                    <div class=\"alert alert-danger\" *ngIf=\"ifsc_code.errors?.pattern\">\r\n                      <p>Invalid IFSC Code</p>\r\n                    </div>\r\n                  </div>\r\n\r\n                </div>\r\n\r\n                <div class=\"row\">\r\n                  <div class=\"col s12 m6 l6\">\r\n                    <mat-form-field appearance=\"outline\">\r\n                      <mat-label>Bank Name</mat-label>\r\n                      <input type=\"text\" name=\"bank_name\" matInput placeholder=\"\" #bank_name=\"ngModel\"\r\n                        [(ngModel)]=\"data.bank_name\">\r\n                    </mat-form-field>\r\n\r\n                  </div>\r\n                  <div class=\"col s12 m6 l6\">\r\n                    <mat-form-field appearance=\"outline\">\r\n                      <mat-label>Account Holder Name</mat-label>\r\n                      <input matInput placeholder=\"Type Here ...\" name=\"account_holder_name\"\r\n                        #account_holder_name=\"ngModel\" [(ngModel)]=\"data.account_holder_name\">\r\n                    </mat-form-field>\r\n                  </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                  <div class=\"col s6\">\r\n                    <div class=\"uploade-image\">\r\n                      <ul>\r\n                        <li class=\"add-bg-1 wp100\">\r\n                          <img src=\"{{bank_img_id ? uploadurl+data.bank_img : data.bank_img}}\" *ngIf=\"data.bank_img\">\r\n                          <label class=\"fix-label\">\r\n                            <input type=\"file\" (change)=\"bankImg_Upload($event)\" style=\"display:none;\"\r\n                              accept=\".png, .jpg, .jpeg,\" multiple required />\r\n                            <div class=\"other\">\r\n                              <i class=\"material-icons\">cloud_upload</i>\r\n                              <p>Upload Cheque/Passbook Image</p>\r\n                            </div>\r\n                          </label>\r\n                        </li>\r\n                      </ul>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </ng-container>\r\n      </div>\r\n\r\n      <div class=\"row\">\r\n        <div class=\"col s12\">\r\n          <div class=\"text-right\">\r\n            <button [ngClass]=\"{'loading': savingFlag == true}\" mat-raised-button color=\"accent\" type=\"submit\"\r\n              [disabled]=\"savingFlag == true\">{{savingFlag == true ? 'Saving' : params_id ? 'Update' : 'Save'}}\r\n            </button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n\r\n    </form>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/add-influencer/add-influencer.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/add-influencer/add-influencer.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/add-influencer/add-influencer.component.ts":
/*!************************************************************!*\
  !*** ./src/app/add-influencer/add-influencer.component.ts ***!
  \************************************************************/
/*! exports provided: AddInfluencerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddInfluencerComponent", function() { return AddInfluencerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_services_DatabaseService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/_services/DatabaseService */ "./src/_services/DatabaseService.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! moment */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var src_app_localstorage_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/localstorage.service */ "./src/app/localstorage.service.ts");
/* harmony import */ var ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng6-toastr-notifications */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/ng6-toastr-notifications/fesm5/ng6-toastr-notifications.js");










var AddInfluencerComponent = /** @class */ (function () {
    function AddInfluencerComponent(service, rout, location, route, toast, session, http) {
        var _this = this;
        this.service = service;
        this.rout = rout;
        this.location = location;
        this.route = route;
        this.toast = toast;
        this.session = session;
        this.http = http;
        this.savingFlag = false;
        this.states = [];
        this.district_list = [];
        this.image = new FormData();
        this.city_list = [];
        this.city_area_list = [];
        this.pinCode_list = [];
        this.data = {};
        this.contact_person = {};
        this.asmList = [];
        this.assignUserList = [];
        this.assignUserId = [];
        this.brand_list = [];
        this.options = ['One', 'Two', 'Three'];
        this.searchMoviesCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]();
        this.rsm = [];
        this.ass_user = [];
        this.brand = [];
        this.tmp_drlist = [];
        this.drlist = [];
        this.tmpsearchdr = {};
        this.isLoading = false;
        this.active = {};
        this.submit = true;
        this.exist = false;
        this.tmp_userList = [];
        this.search = {};
        this.tmpsearch = {};
        this.ass_dist = [];
        this.panBase64 = false;
        this.bankImgBase64 = false;
        this.docFrontBase64 = false;
        this.docBackBase64 = false;
        this.architectUser = [];
        this.contractorUser = [];
        this.user_assign_detail = [];
        this.allState_district = {};
        this.checkRight = {};
        this.salesUser = [];
        this.architectData = {};
        this.contractorData = {};
        this.DOBError = false;
        this.DOAError = false;
        this.getStateList();
        this.route.queryParams.subscribe(function (params) {
            _this.uploadurl = _this.service.uploadUrl + 'influencer_doc/';
            _this.dr_type = params.type;
            _this.data.country = 'India';
            if (params.type) {
                _this.params_network = params.network;
                _this.params_type = params.type;
                _this.params_id = params.id;
                _this.front_img_id = params.id;
                _this.back_img_id = params.id;
                _this.pan_img_id = params.id;
                _this.bank_img_id = params.id;
                _this.getRights();
                if (_this.params_id) {
                    _this.InfluencerDetail();
                }
            }
            _this.myDate = new Date();
            _this.userData = JSON.parse(localStorage.getItem('st_user'));
            _this.userId = _this.userData['data']['id'];
            _this.userName = _this.userData['data']['name'];
        });
        this.getSalesUser('');
        this.distributorList('', '');
    }
    AddInfluencerComponent.prototype.ngOnInit = function () { };
    AddInfluencerComponent.prototype.getRights = function () {
        var _this = this;
        this.service.post_rqst({ 'type_id': this.params_type }, 'Influencer/scanningRightsCheck').subscribe(function (result) {
            if (result['statusCode'] == 200) {
                _this.checkRight = result['result'];
                _this.data.scanning_rights = _this.checkRight.scanning_rights;
                _this.data.point_transfer_right = _this.checkRight.point_transfer_right;
            }
            else {
                _this.toast.errorToastr(result['statusMsg']);
            }
        });
    };
    AddInfluencerComponent.prototype.InfluencerDetail = function () {
        var _this = this;
        this.service.post_rqst({ 'id': this.params_id }, 'Influencer/influencerCustomerDetail').subscribe(function (resp) {
            if (resp['statusCode'] == 200) {
                _this.data = resp['result'];
                if (_this.data.state) {
                    _this.getDistrict(1);
                }
                if (_this.data.dob == '0000-00-00') {
                    _this.data.dob = '';
                }
                if (_this.data.doa == '0000-00-00') {
                    _this.data.doa = '';
                }
                setTimeout(function () {
                }, 300);
            }
            else {
                _this.toast.errorToastr(resp['statusMsg']);
            }
        });
    };
    AddInfluencerComponent.prototype.getStateList = function () {
        var _this = this;
        this.service.post_rqst(0, "Influencer/getAllState").subscribe((function (result) {
            if (result['statusCode'] == 200) {
                _this.states = result['all_state'];
            }
            else {
                _this.toast.errorToastr(result['statusMsg']);
            }
        }));
    };
    AddInfluencerComponent.prototype.getDistrict = function (val) {
        var _this = this;
        var st_name;
        if (val == 1) {
            st_name = this.data.state;
        }
        this.service.post_rqst({ 'state_name': st_name }, "Influencer/getAllDistrict").subscribe((function (result) {
            if (result['statusCode'] == 200) {
                _this.district_list = result['all_district'];
            }
            else {
                _this.toast.errorToastr(result['statusMsg']);
            }
        }));
    };
    AddInfluencerComponent.prototype.distributorList = function (searcValue, state) {
        var _this = this;
        this.service.post_rqst({ 'search': searcValue, 'state': state }, "Influencer/distributorsList").subscribe((function (result) {
            if (result['statusCode'] == 200) {
                _this.drlist = result['distributors'];
            }
            else {
                _this.toast.errorToastr(result['statusMsg']);
            }
        }));
    };
    AddInfluencerComponent.prototype.getSalesUser = function (searcValue) {
        var _this = this;
        this.service.post_rqst({ 'search': searcValue }, "Influencer/salesUserList").subscribe((function (result) {
            if (result['statusCode'] == 200) {
                _this.salesUser = result['all_sales_user'];
            }
            else {
                _this.toast.errorToastr(result['statusMsg']);
            }
        }));
    };
    AddInfluencerComponent.prototype.findArchitect = function (id) {
        var index = this.architectUser.findIndex(function (row) { return row.id == id; });
        if (index != -1) {
            var id_1 = this.architectUser[index].id;
            var name_1 = this.architectUser[index].name;
            var mobile_no = this.architectUser[index].mobile_no;
            this.architectData = { 'id': id_1, 'name': name_1, 'mobile_no': mobile_no };
        }
    };
    AddInfluencerComponent.prototype.findContractor = function (id) {
        var index = this.contractorUser.findIndex(function (row) { return row.id == id; });
        if (index != -1) {
            var id_2 = this.contractorUser[index].id;
            var name_2 = this.contractorUser[index].name;
            var mobile_no = this.contractorUser[index].mobile_no;
            this.contractorData = { 'id': id_2, 'name': name_2, 'mobile_no': mobile_no };
        }
    };
    AddInfluencerComponent.prototype.MobileNumber = function (event) {
        var pattern = /[0-9\+\-\ ]/;
        var inputChar = String.fromCharCode(event.charCode);
        if (event.keyCode != 8 && !pattern.test(inputChar)) {
            event.preventDefault();
        }
    };
    AddInfluencerComponent.prototype.AdhaarNumber = function (event) {
        var pattern = /^[2-9]{1}[0-9]{3}\s{1}[0-9]{4}\s{1}[0-9]{4}$/;
        var inputChar = String.fromCharCode(event.charCode);
        if (event.keyCode != 8 && !pattern.test(inputChar)) {
            event.preventDefault();
        }
    };
    AddInfluencerComponent.prototype.Adhr_frnt_Upload = function (data) {
        var _this = this;
        for (var i = 0; i < data.target.files.length; i++) {
            var files = data.target.files[i];
            if (files) {
                var reader = new FileReader();
                this.docFrontBase64 = true;
                reader.onload = function (e) {
                    _this.front_img_id = '';
                    _this.data.document_image = e.target.result;
                };
                reader.readAsDataURL(files);
            }
            else {
                this.docFrontBase64 = false;
            }
            this.image.append("" + i, data.target.files[i], data.target.files[i].name);
        }
    };
    AddInfluencerComponent.prototype.Adhr_bck_Upload = function (data) {
        var _this = this;
        for (var i = 0; i < data.target.files.length; i++) {
            var files = data.target.files[i];
            if (files) {
                this.back_img_id = '';
                this.docBackBase64 = true;
                var reader = new FileReader();
                reader.onload = function (e) {
                    _this.data.document_image_back = e.target.result;
                };
                reader.readAsDataURL(files);
            }
            else {
                this.docBackBase64 = false;
            }
            this.image.append("" + i, data.target.files[i], data.target.files[i].name);
        }
    };
    AddInfluencerComponent.prototype.Pan_Upload = function (data) {
        var _this = this;
        for (var i = 0; i < data.target.files.length; i++) {
            var files = data.target.files[i];
            if (files) {
                this.pan_img_id = '';
                this.panBase64 = true;
                var reader = new FileReader();
                reader.onload = function (e) {
                    _this.data.pan_img = e.target.result;
                };
                reader.readAsDataURL(files);
            }
            else {
                this.panBase64 = false;
            }
            this.image.append("" + i, data.target.files[i], data.target.files[i].name);
        }
    };
    AddInfluencerComponent.prototype.bankImg_Upload = function (data) {
        var _this = this;
        for (var i = 0; i < data.target.files.length; i++) {
            var files = data.target.files[i];
            if (files) {
                this.bank_img_id = '';
                this.bankImgBase64 = true;
                var reader = new FileReader();
                reader.onload = function (e) {
                    _this.data.bank_img = e.target.result;
                };
                reader.readAsDataURL(files);
            }
            else {
                this.bankImgBase64 = false;
            }
            this.image.append("" + i, data.target.files[i], data.target.files[i].name);
        }
    };
    AddInfluencerComponent.prototype.getItemsList = function (search) {
        this.asmList = [];
        for (var i = 0; i < this.tmp_userList.length; i++) {
            search = search.toLowerCase();
            this.tmpsearch = this.tmp_userList[i]['name'].toLowerCase();
            if (this.tmpsearch.includes(search)) {
                this.asmList.push(this.tmp_userList[i]);
            }
        }
    };
    AddInfluencerComponent.prototype.assign_to_distributor = function (id, index, e) {
        if (e.checked) {
            this.assignUserId.push(id);
            this.assignUserList.push(this.asmList[index]);
        }
        else {
            var index_val = index;
            for (var j = 0; j < this.assignUserId.length; j++) {
                if (this.asmList[index].id == this.assignUserId[j]) {
                    this.assignUserId.splice(j, 1);
                    this.removeUser(j);
                }
            }
        }
    };
    AddInfluencerComponent.prototype.removeUser = function (index) {
        this.assignUserList.splice(index, 1);
    };
    AddInfluencerComponent.prototype.user_assign_check = function (value, index, event) {
        if (event.checked) {
            if (this.rsm.indexOf(this.asmList[index]['id']) === -1) {
                this.rsm.push(value);
            }
        }
        else {
            for (var j = 0; j < this.asmList.length; j++) {
                if (this.asmList[index]['id'] == this.rsm[j]) {
                    this.rsm.splice(j, 1);
                }
            }
        }
        this.ass_user = this.rsm;
    };
    AddInfluencerComponent.prototype.product_Brand = function (value, index, event) {
        if (event.checked) {
            this.brand.push(value);
        }
        else {
            for (var j = 0; j < this.brand_list.length; j++) {
                if (this.brand_list[index]['brand_name'] == this.brand[j]) {
                    this.brand.splice(j, 1);
                }
            }
        }
    };
    AddInfluencerComponent.prototype.back = function () {
        this.location.back();
    };
    AddInfluencerComponent.prototype.assignUserName = function (userid) {
        var Index = this.salesUser.findIndex(function (row) { return row.id == userid; });
        if (Index != -1) {
            this.data.user_assined_name = this.salesUser[Index].name;
        }
        else {
        }
    };
    AddInfluencerComponent.prototype.submitDetail = function () {
        var _this = this;
        if (this.data.dob) {
            this.data.dob = moment__WEBPACK_IMPORTED_MODULE_7__(this.data.dob).format('YYYY-MM-DD');
            this.data.dob = this.data.dob;
        }
        if (this.data.doa) {
            this.data.doa = moment__WEBPACK_IMPORTED_MODULE_7__(this.data.doa).format('YYYY-MM-DD');
            this.data.doa = this.data.doa;
        }
        if (this.checkRight.scanning_rights == 'No' && this.checkRight.point_transfer_right == 'No') {
            this.data.architect_assign = this.architectData;
            this.data.contractor_assign = this.contractorData;
        }
        this.data.created_by_name = this.userName;
        this.data.created_by_id = this.userId;
        this.savingFlag = true;
        var header;
        if (this.params_id) {
            this.data.update_id = this.params_id;
            this.data.panBase64 = this.panBase64;
            this.data.bankImgBase64 = this.bankImgBase64;
            this.data.docFrontBase64 = this.docFrontBase64;
            this.data.docBackBase64 = this.docBackBase64;
            header = this.service.post_rqst({ "data": this.data, 'type': Number(this.params_type), 'influencer_type': this.params_network }, "Influencer/updateInfluencer");
        }
        else {
            header = this.service.post_rqst({ "data": this.data, 'type': Number(this.params_type), 'influencer_type': this.params_network }, "Influencer/addInfluencer");
        }
        header.subscribe((function (result) {
            if (result['statusCode'] == 200) {
                _this.rout.navigate(['/influencer/' + _this.params_type + '/' + _this.params_network + '/']);
                _this.toast.successToastr(result['statusMsg']);
                _this.savingFlag = false;
            }
            else {
                _this.toast.errorToastr(result['statusMsg']);
                _this.savingFlag = false;
            }
        }));
    };
    AddInfluencerComponent.prototype.getaddress = function (pincode) {
        var _this = this;
        console.log(pincode);
        console.log(this.data.pincode.length);
        if (this.data.pincode.length == '6') {
            this.service.post_rqst({ 'pincode': pincode }, 'Influencer/PinCodeWiseState').subscribe(function (result) {
                if (result['statusCode'] == 200) {
                    _this.allState_district = result['all_State_district'];
                    if (_this.allState_district != null) {
                        _this.data.state = _this.allState_district.state_name;
                        _this.getDistrict(1);
                        _this.data.district = _this.allState_district.district_name;
                        _this.data.city = _this.allState_district.city_name;
                    }
                }
                else {
                    _this.toast.errorToastr(result['statusMsg']);
                }
            });
        }
        else if (this.data.pincode.length == '0') {
            this.data.state = '';
            this.data.district = '';
            this.data.city = '';
        }
    };
    AddInfluencerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-add-influencer',
            template: __webpack_require__(/*! ./add-influencer.component.html */ "./src/app/add-influencer/add-influencer.component.html"),
            styles: [__webpack_require__(/*! ./add-influencer.component.scss */ "./src/app/add-influencer/add-influencer.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_services_DatabaseService__WEBPACK_IMPORTED_MODULE_2__["DatabaseService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_common__WEBPACK_IMPORTED_MODULE_6__["Location"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_9__["ToastrManager"],
            src_app_localstorage_service__WEBPACK_IMPORTED_MODULE_8__["sessionStorage"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClient"]])
    ], AddInfluencerComponent);
    return AddInfluencerComponent;
}());



/***/ })

}]);