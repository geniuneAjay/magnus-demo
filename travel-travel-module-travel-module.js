(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["travel-travel-module-travel-module"],{

/***/ "./src/app/travel/travel-daily-plan-detail/travel-daily-plan-detail.component.html":
/*!*****************************************************************************************!*\
  !*** ./src/app/travel/travel-daily-plan-detail/travel-daily-plan-detail.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-container\">\r\n  <div class=\"tools-container\">\r\n    <a mat-icon-button matTooltip=\"Back\" (click)=\"back()\">\r\n      <i class=\"material-icons\">arrow_back</i>\r\n    </a>\r\n    <h2>Daily Journey Plan Detail</h2>\r\n  </div>\r\n\r\n  <div class=\"container pt10 pl10 pr10 pb50\">\r\n    <div class=\"row\">\r\n\r\n      <div class=\"col s12 m12 l12\">\r\n\r\n        <div class=\"card\" *ngIf=\"skLoading\">\r\n          <div class=\"sk-head\">\r\n            <h2>&nbsp;</h2>\r\n          </div>\r\n          <div class=\"card-body\">\r\n            <div class=\"grid-box\">\r\n              <div class=\"sk-box\" *ngFor=\"let row of [].constructor(10)\">\r\n                &nbsp;\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n\r\n        <div class=\"card\" *ngIf=\"!skLoading\">\r\n          <div class=\"card-head\">\r\n            <h2>Basic Details</h2>\r\n          </div>\r\n          <div class=\"card-body\">\r\n            <div class=\"grid-box\">\r\n              <div class=\"block-feilds\">\r\n                <span>Plan ID</span>\r\n                <p>#{{travel_detail.id}}</p>\r\n              </div>\r\n\r\n              <div class=\"block-feilds\">\r\n                <span>Employee Code</span>\r\n                <p>{{travel_detail.employee_id}}</p>\r\n              </div>\r\n              <div class=\"block-feilds\">\r\n                <span>Employee Name</span>\r\n                <p>{{travel_detail.name ? (travel_detail.name | titlecase) : '---'}}</p>\r\n              </div>\r\n\r\n              <div class=\"block-feilds\">\r\n                <span>Reporting Manager</span>\r\n                <p>{{travel_detail.r_name ? (travel_detail.r_name | titlecase) : '---'}}</p>\r\n              </div>\r\n\r\n              <div class=\"block-feilds {{travel_detail.status}}\">\r\n                <span>Status</span>\r\n                <p>{{travel_detail.status ? travel_detail.status : '---'}} </p>\r\n              </div>\r\n\r\n              <div class=\"block-feilds\">\r\n                <span>Status Updated By</span>\r\n                <p>{{travel_detail.status_updated_by ? travel_detail.status_updated_by : '---'}}</p>\r\n              </div>\r\n\r\n              <div class=\"block-feilds\">\r\n                <span>Status Updated On</span>\r\n                <p>{{travel_detail.updated_date!='0000-00-00'? (travel_detail.updated_date | date:'d MMM y'):'--'}}</p>\r\n              </div>\r\n\r\n              <div class=\"block-feilds\" *ngIf=\"travel_detail.status_remark\">\r\n                <span>Remark</span>\r\n                <p>{{travel_detail.status_remark && travel_detail.status_remark != '' && travel_detail.status_remark !=\r\n                  null?travel_detail.status_remark:'--'}}</p>\r\n              </div>\r\n\r\n              <div class=\"block-feilds\" *ngIf=\"travel_detail.reason\">\r\n                <span>Reason of Reject</span>\r\n                <p>{{travel_detail.reason}}\r\n                </p>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <ng-container>\r\n          <div class=\"card pt0 mt10\">\r\n            <div class=\"card-body pt0\">\r\n              <div class=\"grid-box eight highlight-grid\">\r\n                <div class=\"block-feilds\">\r\n                  <span>Date Created</span>\r\n                  <p>{{travel_detail.date_created!='0000-00-00 00:00:00'? (travel_detail.date_created | date:'d MMM y,\r\n                    hh:mm a'):'--'}}</p>\r\n                </div>\r\n\r\n                <div class=\"block-feilds\">\r\n                  <span>Created By</span>\r\n                  <p>{{travel_detail.created_by_name ? (travel_detail.created_by_name | titlecase) : '---'}}</p>\r\n                </div>\r\n\r\n                <div class=\"block-feilds\">\r\n                  <span>Visit Date</span>\r\n                  <p>{{travel_detail.date_from!='0000-00-00'? (travel_detail.date_from | date:'d MMM y'):'--'}}</p>\r\n\r\n                </div>\r\n\r\n                <div class=\"block-feilds\">\r\n                  <span>Visit Plan</span>\r\n                  <p>{{travel_detail.visit_plan_count ? travel_detail.visit_plan_count : '---'}}</p>\r\n                </div>\r\n                <div class=\"block-feilds\">\r\n                  <span>Visit Actual</span>\r\n                  <p>{{travel_detail.visit_actual_count ? travel_detail.visit_actual_count : '---'}}</p>\r\n\r\n                </div>\r\n                <div class=\"block-feilds\">\r\n                  <span>Plan Follow</span>\r\n                  <p>{{travel_detail.visit_plan_follow ? (travel_detail.visit_plan_follow + '%') : '---'}}</p>\r\n\r\n                </div>\r\n                <div class=\"block-feilds\">\r\n                  <span>Plan Deviation</span>\r\n                  <p>{{travel_detail.visit_plan_deviation ? (travel_detail.visit_plan_deviation + '%') : '---'}}</p>\r\n\r\n                </div>\r\n\r\n\r\n\r\n              </div>\r\n            </div>\r\n            <div class=\"cs-table left-right-10\">\r\n              <div class=\" border-top\">\r\n                <div class=\"table-head\">\r\n                  <table>\r\n                    <tr>\r\n                      <th class=\"w50  text-center\">Sr.No</th>\r\n                      <th class=\"w150\">Customer Type</th>\r\n                      <th>Company Name</th>\r\n                      <th class=\"w100 text-center\">Check-in</th>\r\n                      <th class=\"w100 text-center\">Check-out</th>\r\n                      <th class=\"w100 text-center\">Time-spend</th>\r\n                      <th class=\"w100\">Status</th>\r\n                    </tr>\r\n                  </table>\r\n                </div>\r\n              </div>\r\n\r\n              <div class=\"table-container pb0\">\r\n                <div class=\"table-content none-shadow\">\r\n                  <table>\r\n                    <tr *ngFor=\"let row of travel_detail.visit_plan_data; let i = index;\">\r\n                      <td class=\"w50  text-center\">{{i+1}}</td>\r\n                      <td class=\"w150\">{{row.dr_type_name ? row.dr_type_name:'---'}}</td>\r\n                      <td>{{row.company_name ? row.company_name : '---'}}</td>\r\n                      <td class=\"w100 text-center\">{{row.checkin_start != '0000-00-00 00:00:00' ? (row.checkin_start |\r\n                        date:'hh:mm a'): '--'}}</td>\r\n                      <td class=\"w100 text-center\">{{row.checkin_end != '0000-00-00 00:00:00' ? (row.checkin_end |\r\n                        date:'hh:mm a'): '--'}}</td>\r\n                      <td class=\"w100 text-center\">{{row.spent_time ? row.spent_time: '--'}}</td>\r\n                      <td class=\"w100\"\r\n                        [ngClass]=\"{'light-green': row.checkin_id > 0, 'yellow-bgclr': row.checkin_id == 0}\">\r\n                        {{row.checkin_id > 0 ? 'Complete': 'Pending'}}\r\n                      </td>\r\n                    </tr>\r\n                  </table>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </ng-container>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/travel/travel-daily-plan-detail/travel-daily-plan-detail.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/travel/travel-daily-plan-detail/travel-daily-plan-detail.component.ts ***!
  \***************************************************************************************/
/*! exports provided: TravelDailyPlanDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TravelDailyPlanDetailComponent", function() { return TravelDailyPlanDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng6-toastr-notifications */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/ng6-toastr-notifications/fesm5/ng6-toastr-notifications.js");
/* harmony import */ var src_services_DatabaseService__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/_services/DatabaseService */ "./src/_services/DatabaseService.ts");






var TravelDailyPlanDetailComponent = /** @class */ (function () {
    function TravelDailyPlanDetailComponent(location, service, route, toast) {
        this.location = location;
        this.service = service;
        this.route = route;
        this.toast = toast;
        this.skLoading = false;
        this.travel_detail = {};
        this.travel_id = route.params['_value'];
        if (this.travel_id.id) {
            this.travelDetail();
        }
    }
    TravelDailyPlanDetailComponent.prototype.ngOnInit = function () {
    };
    TravelDailyPlanDetailComponent.prototype.back = function () {
        this.location.back();
    };
    TravelDailyPlanDetailComponent.prototype.travelDetail = function () {
        var _this = this;
        this.skLoading = true;
        this.service.post_rqst({ 'travel_id': this.travel_id.id, 'filter': 'daily' }, "Travel/getTravelData").subscribe(function (result) {
            if (result['statusCode'] == 200) {
                _this.skLoading = false;
                _this.travel_detail = result['user_list_travel_plan'];
            }
            else {
                _this.skLoading = false;
                _this.toast.errorToastr(result['statusMsg']);
            }
        }, function (err) {
            _this.toast.errorToastr('Something went wrong');
        });
    };
    TravelDailyPlanDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["Component"])({
            selector: 'app-travel-daily-plan-detail',
            template: __webpack_require__(/*! ./travel-daily-plan-detail.component.html */ "./src/app/travel/travel-daily-plan-detail/travel-daily-plan-detail.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"], src_services_DatabaseService__WEBPACK_IMPORTED_MODULE_5__["DatabaseService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_4__["ToastrManager"]])
    ], TravelDailyPlanDetailComponent);
    return TravelDailyPlanDetailComponent;
}());



/***/ }),

/***/ "./src/app/travel/travel-daily-plan/travel-daily-plan.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/travel/travel-daily-plan/travel-daily-plan.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-container {{padding0}}\">\r\n  <div class=\"tools-container\" *ngIf=\"hide !=  true\">\r\n    <h2>Daily Journey Plan </h2>\r\n    <div class=\"left-auto df ac flex-gap-10\">\r\n        <button *ngIf=\"selectedPOA.length>0\" [ngClass]=\"{'loading': savingFlag == true}\" mat-raised-button color=\"accent\"\r\n      type=\"submit\" (click)=\"Approval('Approved')\" [disabled]=\"savingFlag == true\">\r\n      {{savingFlag == true ? 'Saving' : 'Approve'}}\r\n  </button> \r\n  <button *ngIf=\"selectedPOA.length>0\" [ngClass]=\"{'loading': savingFlag == true}\" mat-raised-button color=\"danger\" style=\"background-color: red;color:white\"\r\n    type=\"submit\" (click)=\"Approval('Reject')\" [disabled]=\"savingFlag == true\">\r\n    {{savingFlag == true ? 'Saving' : 'Reject'}}\r\n</button> \r\n      <button mat-icon-button matTooltip=\"Refresh\" (click)=\"refresh();\">\r\n        <i class=\"material-icons\">refresh</i>\r\n      </button>\r\n\r\n      <button mat-icon-button matTooltip=\"Filter\" (click)=\"openBottomSheet()\">\r\n        <i class=\"material-icons\">filter_alt</i>\r\n      </button>\r\n\r\n      <button mat-icon-button matTooltip=\"Detailed Filter\" (click)=\"openBottomSheet1()\">\r\n        <i class=\"material-icons\">filter</i>\r\n      </button>\r\n\r\n      <div class=\"pagination\" *ngIf=\"travel_list.length > 0\">\r\n        <div class=\"pagination-content\">\r\n          Pages\r\n          <span>{{pagenumber}}</span>\r\n          of\r\n          <span>{{total_page}}</span>\r\n        </div>\r\n        <div class=\"page-nav\">\r\n          <button mat-icon-button matTooltip=\"Older\" (click)=\"pervious()\" [disabled]=\"start == 0\">\r\n            <i class=\"material-icons\">navigate_before</i>\r\n          </button>\r\n          <button mat-icon-button matTooltip=\"Newer\" (click)=\"nextPage()\" [disabled]=\"pagenumber == total_page \">\r\n            <i class=\"material-icons\">navigate_next</i>\r\n          </button>\r\n        </div>\r\n      </div>\r\n\r\n\r\n      <div class=\"mat-tabbar\">\r\n        <button mat-button [ngClass]=\"active_tab == 'All' ? 'active' : ''\"\r\n          (click)=\"active_tab = 'All';getTravelList();\"><i class=\"material-icons\">pending_actions</i>All\r\n          <!-- ({{tabCount.Pending}}) -->\r\n        </button>\r\n        <button mat-button [ngClass]=\"active_tab == 'Pending' ? 'active' : ''\"\r\n          (click)=\"active_tab = 'Pending';getTravelList();\"><i class=\"material-icons\">pending_actions</i>Pending\r\n          <!-- ({{tabCount.Pending}}) -->\r\n        </button>\r\n\r\n        <button mat-button [ngClass]=\"active_tab == 'Approved' ? 'active' : ''\"\r\n          (click)=\"active_tab = 'Approved';getTravelList();\"><i class=\"material-icons\">done_all</i>Approved\r\n          <!-- ({{tabCount.Pending}}) -->\r\n        </button>\r\n\r\n        <button mat-button [ngClass]=\"active_tab == 'Reject' ? 'active' : ''\"\r\n          (click)=\"active_tab = 'Reject';getTravelList();\"><i class=\"material-icons\">cancel</i>Reject\r\n          <!-- ({{tabCount.Reject}}) -->\r\n        </button>\r\n      </div>\r\n\r\n\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"container container-scroll no-tab\">\r\n    <div class=\"cs-table horizontal-scroll\">\r\n      <div class=\"sticky-head\">\r\n        <div class=\"table-head\">\r\n          <table>\r\n            <tr>\r\n\r\n             \r\n              <th class=\"w60 text-center\">\r\n                <mat-checkbox \r\n                  [(ngModel)]=\"selectAllChecked\"\r\n                  (change)=\"updateAllPOA(selectAllChecked)\">\r\n                </mat-checkbox>\r\n              </th>\r\n              <th class=\"w60\">Sr.no</th>\r\n              <th class=\"w120\">Date Created</th>\r\n              <th class=\"w150\">Created By</th>\r\n              <th class=\"w100\">Plan ID</th>\r\n              <th class=\"w100\">Employee Code</th>\r\n              <th class=\"w150\">Employee Name </th>\r\n              <th class=\"w150\">Reporting Manager</th>\r\n              <th class=\"w100\">Visit Date</th>\r\n              <th class=\"w100 text-center\">Visit Plan</th>\r\n              <th class=\"w100 text-center\">Visit Actual</th>\r\n              <th class=\"w100 text-center\">Un-Planned Visit</th>\r\n              <th class=\"w100 text-center\">Plan Follow</th>\r\n              <th class=\"w100 text-center\">Plan Deviation</th>\r\n              <th class=\"w150\" *ngIf=\"active_tab == 'Reject'\">\r\n                Reason Of Reject\r\n              </th>\r\n              <th class=\"w80 text-center\" *ngIf=\"assign_login_data.edit_travel_list == '1'\">Action</th>\r\n            </tr>\r\n          </table>\r\n        </div>\r\n        <div class=\"table-head border-top\">\r\n          <table>\r\n            <tr>\r\n              <th class=\"w60\">&nbsp;</th>\r\n              <th class=\"w60\">&nbsp;</th>\r\n              <th class=\"w120\">\r\n                <div class=\"th-search-acmt\">\r\n                  <mat-form-field class=\"cs-input date-column infix-bodr\">\r\n                    <input matInput [matDatepicker]=\"picker1\" placeholder=\"\" name=\"date_created\"\r\n                      [(ngModel)]=\"search.date_created\" [max]=\"today_date\" (dateChange)=\"getTravelList()\" disabled>\r\n                    <mat-datepicker-toggle matSuffix [for]=\"picker1\"></mat-datepicker-toggle>\r\n                    <mat-datepicker #picker1 disabled=\"false\"></mat-datepicker>\r\n                  </mat-form-field>\r\n                </div>\r\n              </th>\r\n              <th class=\"w150\">\r\n                <div class=\"th-search-acmt\" *ngIf=\"hide !=  true\">\r\n                  <mat-form-field class=\"example-full-width cs-input\">\r\n                    <input matInput placeholder=\"Search\" name=\"created_by_name\" [(ngModel)]=\"search.created_by_name\"\r\n                      (keyup.enter)=\"getTravelList()\">\r\n                  </mat-form-field>\r\n                </div>\r\n              </th>\r\n              <th class=\"w100\">\r\n                <div class=\"th-search-acmt\" *ngIf=\"hide !=  true\">\r\n                  <mat-form-field class=\"example-full-width cs-input\">\r\n                    <input matInput placeholder=\"Search\" name=\"id\" [(ngModel)]=\"search.id\"\r\n                      (keyup.enter)=\"getTravelList()\">\r\n                  </mat-form-field>\r\n                </div>\r\n              </th>\r\n              <th class=\"w100\">\r\n                <div class=\"th-search-acmt\" *ngIf=\"hide !=  true\">\r\n                  <mat-form-field class=\"example-full-width cs-input\">\r\n                    <input matInput placeholder=\"Search\" name=\"employee_id\" [(ngModel)]=\"search.employee_id\"\r\n                      (keyup.enter)=\"getTravelList()\">\r\n                  </mat-form-field>\r\n                </div>\r\n              </th>\r\n              <th class=\"w150\">\r\n                <div class=\"th-search-acmt\" *ngIf=\"hide !=  true\">\r\n                  <mat-form-field class=\"example-full-width cs-input\">\r\n                    <input matInput placeholder=\"Search\" name=\"sales_user\" [(ngModel)]=\"search.sales_user\"\r\n                      (keyup.enter)=\"getTravelList()\">\r\n                  </mat-form-field>\r\n                </div>\r\n              </th>\r\n              <th class=\"w150\">\r\n                <div class=\"th-search-acmt\">\r\n                  <mat-form-field class=\"cs-input select-input\">\r\n                    <mat-select name=\"reporting_manager_id\" #reporting_manager_id=\"ngModel\"\r\n                      [(ngModel)]=\"search.reporting_manager_id\" (selectionChange)=\"getTravelList();\">\r\n                      <mat-option>\r\n                        <ngx-mat-select-search noEntriesFoundLabel=\"'no data found'\" placeholderLabel=\"Search..\"\r\n                          (keyup)=\"getReportManager($event.target.value, 'rsm1')\"></ngx-mat-select-search>\r\n                      </mat-option>\r\n                      <mat-option *ngFor=\"let list of report_manager;let index=index\" value=\"{{list.id}}\">\r\n                        {{list.name}}\r\n                      </mat-option>\r\n                    </mat-select>\r\n                  </mat-form-field>\r\n                </div>\r\n              </th>\r\n              <th class=\"w100\">\r\n                <div class=\"th-search-acmt\">\r\n                  <mat-form-field class=\"cs-input date-column infix-bodr\">\r\n                    <input matInput [matDatepicker]=\"picker\" placeholder=\"\" name=\"visit_date\"\r\n                      [(ngModel)]=\"search.visit_date\" [max]=\"today_date\" (dateChange)=\"getTravelList()\" disabled>\r\n                    <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\r\n                    <mat-datepicker #picker disabled=\"false\"></mat-datepicker>\r\n                  </mat-form-field>\r\n                </div>\r\n              </th>\r\n              <th class=\"w100 text-center\">&nbsp;</th>\r\n              <th class=\"w100 text-center\">&nbsp;</th>\r\n              <th class=\"w100 text-center\">&nbsp;</th>\r\n              <th class=\"w100 text-center\">&nbsp;</th>\r\n              <th class=\"w100 text-center\">&nbsp;</th>\r\n              <th class=\"w150\" *ngIf=\"active_tab == 'Reject'\">\r\n                &nbsp;\r\n              </th>\r\n              <th class=\"w80\" *ngIf=\"assign_login_data.edit_travel_list == '1'\"></th>\r\n            </tr>\r\n\r\n          </table>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"table-container\">\r\n        <div class=\"table-content\">\r\n          <table>\r\n            <ng-container *ngIf=\"!loader\">\r\n              <tr *ngFor=\"let list of travel_list; let i = index;\"\r\n                [ngClass]=\"{'Current': serve.currentUserID == list.id}\"> \r\n                <td class=\"w60 text-center\">\r\n                  <mat-checkbox\r\n                    [checked]=\"list.approval === '1'\"\r\n                    (change)=\"updateMultiplePOA($event.checked, i)\">\r\n                  </mat-checkbox>\r\n                </td>\r\n                <td class=\"w60\">{{ i + 1 + sr_no }}</td>\r\n                <td class=\"w120\">{{list.date_created!='0000-00-00 00:00:00'? (list.date_created | date:'d MMM y,\r\n                  hh:mm a'):'--'}}</td>\r\n                <td class=\"w150\">{{list.created_by_name ? (list.created_by_name | titlecase) : '---'}}</td>\r\n\r\n                <td class=\"w100\">\r\n                  <a class=\"link-btn\" (click)=\"serve.setData(search)\" [routerLink]=\"[ 'poa-travel-detail/', list.id ]\"\r\n                    [queryParams]=\"{'id':list.id, 'type':list.type}\">#{{list.id}}</a>\r\n                </td>\r\n                <td class=\"w100\">{{list.employee_id}}</td>\r\n                <td class=\"w150\">{{list.name | titlecase}}</td>\r\n                <td class=\"w150\">{{list.r_name ? (list.r_name | titlecase) : ''}}</td>\r\n                <td class=\"w100\">{{list.date_from ? (list.date_from | date:'d MMM y') : '---'}}</td>\r\n                <td class=\"w100 text-center\">{{list.visit_plan_count ? list.visit_plan_count : '---'}}</td>\r\n                <td class=\"w100 text-center light-blue\"><strong>{{list.visit_actual_count ? list.visit_actual_count :\r\n                    '---'}}</strong></td>\r\n                    <td class=\"w100 text-center light-sky\"><strong>{{list.unnplaned_count ? list.unnplaned_count :\r\n                      '---'}}</strong></td>\r\n                <td class=\"w100 text-center yellow-bgclr\">\r\n                  <strong>{{list.visit_plan_follow ? (list.visit_plan_follow.toFixed(2) + '%') : '---'}}</strong>\r\n                </td>\r\n                <td class=\"w100 text-center light-green\">\r\n                  <strong>{{list.visit_plan_deviation ? (list.visit_plan_deviation + '%') : '---'}}</strong>\r\n                </td>\r\n\r\n                <td class=\"w150\" *ngIf=\"active_tab == 'Reject'\">\r\n                  {{list.reason ? list.reason : ''}}\r\n                </td>\r\n                <td class=\"w80 text-center\" *ngIf=\"assign_login_data.edit_travel_list == '1'\">\r\n                <div class=\"action-button\">\r\n                  <button mat-icon-button matTooltip=\"Change Status\"\r\n                    (click)=\"openDialog(list.id)\">\r\n                    <i class=\"material-icons edit\">edit</i>\r\n                  </button>\r\n                </div>\r\n              </td>\r\n              </tr>\r\n            </ng-container>\r\n\r\n            <ng-container *ngIf=\"loader\">\r\n              <tr class=\"sk-loading\" *ngFor=\"let lead of skelton\">\r\n                <td class=\"w60\">\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n                <td class=\"w120\">\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n                <td class=\"w150\">\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n                <td class=\"w100\">\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n                <td class=\"w100\">\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n                <td class=\"w150\">\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n                <td class=\"w150\">\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n                <td class=\"w100\">\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n                <td class=\"w100 text-center\">\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n                <td class=\"w100 text-center\">\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n                <td class=\"w100 text-center\">\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n                <td class=\"w100 text-center\">\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n                <td class=\"w150\" *ngIf=\"active_tab == 'Reject'\">\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n\r\n            </ng-container>\r\n          </table>\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n\r\n\r\n    <ng-container *ngIf=\"travel_list.length == 0 && datanotfound == true\">\r\n      <app-not-result-found></app-not-result-found>\r\n    </ng-container>\r\n  </div>\r\n\r\n</div>\r\n<div class=\"fab-btns\">\r\n  <button class=\"pulse excel\" mat-fab color=\"primary\" [matMenuTriggerFor]=\"menu\">\r\n    <i class=\"material-icons\">apps</i>\r\n    Action\r\n  </button>\r\n  <mat-menu #menu=\"matMenu\">\r\n    <button mat-menu-item *ngIf=\"travel_list.length > 0 && assign_login_data2.export_travel_list=='1'\"\r\n      (click)=\"exportAsXLSX(active_tab)\">\r\n      <mat-icon>download</mat-icon>\r\n      <span>Download Excel</span>\r\n    </button>\r\n  </mat-menu>\r\n</div>"

/***/ }),

/***/ "./src/app/travel/travel-daily-plan/travel-daily-plan.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/travel/travel-daily-plan/travel-daily-plan.component.ts ***!
  \*************************************************************************/
/*! exports provided: TravelDailyPlanComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TravelDailyPlanComponent", function() { return TravelDailyPlanComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_services_DatabaseService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/_services/DatabaseService */ "./src/_services/DatabaseService.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var src_app_dialog_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/dialog.component */ "./src/app/dialog.component.ts");
/* harmony import */ var src_app_localstorage_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/localstorage.service */ "./src/app/localstorage.service.ts");
/* harmony import */ var ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng6-toastr-notifications */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/ng6-toastr-notifications/fesm5/ng6-toastr-notifications.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/router */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_bottom_sheet_bottom_sheet_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/bottom-sheet/bottom-sheet.component */ "./src/app/bottom-sheet/bottom-sheet.component.ts");
/* harmony import */ var src_app_user_leaves_change_status_change_status_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/user_leaves/change-status/change-status.component */ "./src/app/user_leaves/change-status/change-status.component.ts");











var TravelDailyPlanComponent = /** @class */ (function () {
    function TravelDailyPlanComponent(alert, routes, route, serve, dialog1, alrt, dialog, session, toast, bottomSheet) {
        this.alert = alert;
        this.routes = routes;
        this.route = route;
        this.serve = serve;
        this.dialog1 = dialog1;
        this.alrt = alrt;
        this.dialog = dialog;
        this.session = session;
        this.toast = toast;
        this.bottomSheet = bottomSheet;
        this.travel_list = [];
        this.hod = [];
        this.rsm2 = [];
        this.loader = false;
        this.search = {};
        this.datanotfound = false;
        this.status = {};
        this.assign_login_data2 = [];
        this.report_manager = [];
        this.count = {};
        this.assign_login_data = [];
        this.data = {};
        this.asmList = [];
        this.secondary_lead_list = [];
        this.sr_no = 0;
        this.page_limit = 20;
        this.pagenumber = 1;
        this.start = 0;
        this.downurl = '';
        this.active_tab = 'Pending';
        this.savingFlag = false;
        this.selectedPOA = [];
        this.selectAllChecked = false;
        this.downurl = serve.downloadUrl;
        this.skelton = new Array(10);
        this.getReportManager('');
        this.assign_login_data = this.session.getSession();
        this.assign_login_data = this.assign_login_data.value;
        this.assign_login_data2 = this.assign_login_data.data;
        this.assign_login_data = this.assign_login_data.assignModule;
        this.today_date = new Date();
    }
    TravelDailyPlanComponent.prototype.ngOnInit = function () {
        this.search = this.serve.getData();
        if (this.dataToReceive != undefined) {
            this.padding0 = this.dataToReceive.padding0;
            this.hide = this.dataToReceive.hide;
            this.search.employee_id = this.dataToReceive.employee_id;
            this.getTravelList();
        }
        else {
            this.getTravelList();
        }
    };
    TravelDailyPlanComponent.prototype.filter_dr = function (dr_name) {
        this.tmpsearch = '';
        this.asmList = [];
        for (var i = 0; i < this.secondary_lead_list.length; i++) {
            dr_name = dr_name.toLowerCase();
            this.tmpsearch = this.secondary_lead_list[i]['name'].toLowerCase();
            if (this.tmpsearch.includes(dr_name)) {
                this.asmList.push(this.secondary_lead_list[i]);
            }
        }
    };
    TravelDailyPlanComponent.prototype.refresh = function () {
        this.start = 0;
        this.pagenumber = 1;
        this.search = {};
        this.serve.setData(this.search);
        this.serve.currentUserID = '';
        this.data = {};
        if (this.dataToReceive != undefined) {
            this.search.employee_id = this.dataToReceive.employee_id;
        }
        this.getTravelList();
    };
    TravelDailyPlanComponent.prototype.pervious = function () {
        this.start = this.start - this.page_limit;
        this.getTravelList();
    };
    TravelDailyPlanComponent.prototype.nextPage = function () {
        this.start = this.start + this.page_limit;
        this.getTravelList();
    };
    TravelDailyPlanComponent.prototype.getTravelList = function () {
        var _this = this;
        if (this.search.visit_date) {
            this.search.visit_date = moment__WEBPACK_IMPORTED_MODULE_3__(this.search.visit_date).format('YYYY-MM-DD');
        }
        if (this.search.date_created) {
            this.search.date_created = moment__WEBPACK_IMPORTED_MODULE_3__(this.search.date_created).format('YYYY-MM-DD');
        }
        if (this.pagenumber > this.total_page) {
            this.pagenumber = this.total_page;
            this.start = this.pageCount - this.page_limit;
        }
        if (this.start < 0) {
            this.start = 0;
        }
        this.loader = true;
        this.search.status = this.active_tab;
        this.serve.post_rqst({
            'user_id': this.assign_login_data2.id, 'filter': 'daily', 'start': this.start, 'pagelimit': this.page_limit, 'data': this.data, 'search': this.search, 'user_type': this.assign_login_data2.type
        }, "Travel/travelList").subscribe(function (result) {
            if (result['statusCode'] == 200) {
                _this.travel_list = result['user_list_travel_plan'];
                _this.loader = false;
                if (_this.travel_list.length == 0) {
                    _this.datanotfound = true;
                }
                else {
                    _this.datanotfound = false;
                }
                _this.pageCount = result['count'];
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
                _this.loader = false;
                _this.toast.errorToastr(result['statusMsg']);
            }
        }, function (err) {
            _this.loader = false;
            _this.toast.errorToastr('Something went wrong');
        });
    };
    TravelDailyPlanComponent.prototype.onDate = function (event) {
        if (this.search.date_created) {
            this.search.date_created = moment__WEBPACK_IMPORTED_MODULE_3__(this.search.date_created).format('YYYY-MM-DD');
        }
        if (this.search.date_from) {
            this.search.date_from = moment__WEBPACK_IMPORTED_MODULE_3__(this.search.date_from).format('YYYY-MM-DD');
        }
        if (this.search.date_to) {
            this.search.date_to = moment__WEBPACK_IMPORTED_MODULE_3__(this.search.date_to).format('YYYY-MM-DD');
        }
        this.getTravelList();
    };
    TravelDailyPlanComponent.prototype.getReportManager = function (search, type) {
        var _this = this;
        if (type === void 0) { type = ''; }
        this.serve.post_rqst({ 'search': search }, "Travel/getSalesUserForReporting").subscribe(function (response) {
            if (response['all_sales_user']['statusCode'] == 200) {
                if (type == 'hod') {
                    _this.hod = response['all_sales_user']['all_sales_user'];
                }
                else if (type == 'rsm1') {
                    _this.report_manager = response['all_sales_user']['all_sales_user'];
                }
                else if (type == 'rsm2') {
                    _this.rsm2 = response['all_sales_user']['all_sales_user'];
                }
                else {
                    _this.hod = response['all_sales_user']['all_sales_user'];
                    _this.report_manager = response['all_sales_user']['all_sales_user'];
                    _this.rsm2 = response['all_sales_user']['all_sales_user'];
                }
            }
            else {
                _this.loader = false;
                _this.toast.errorToastr(response['all_sales_user']['statusMsg']);
            }
        }, function (err) {
            _this.loader = false;
            _this.toast.errorToastr('Something went wrong');
        });
    };
    TravelDailyPlanComponent.prototype.goTODetail = function (id, month, year) {
        this.route.navigate(['/travel-sub-detail/' + id], { queryParams: { id: id, month: month, year: year } });
    };
    TravelDailyPlanComponent.prototype.openBottomSheet = function () {
        var _this = this;
        this.bottomSheet.open(src_app_bottom_sheet_bottom_sheet_component__WEBPACK_IMPORTED_MODULE_9__["BottomSheetComponent"], {
            data: {
                'filterPage': 'daily_travel_plan',
            }
        });
        this.bottomSheet._openedBottomSheetRef.afterDismissed().subscribe(function (data) {
            if (data != undefined) {
                _this.search.date_from = data.date_from;
                _this.search.date_to = data.date_to;
                _this.getTravelList();
            }
        });
    };
    TravelDailyPlanComponent.prototype.openBottomSheet1 = function () {
        var _this = this;
        this.bottomSheet.open(src_app_bottom_sheet_bottom_sheet_component__WEBPACK_IMPORTED_MODULE_9__["BottomSheetComponent"], {
            data: {
                'filterPage': 'daily_travel_plan_report',
            }
        });
        this.bottomSheet._openedBottomSheetRef.afterDismissed().subscribe(function (data) {
            if (data != undefined) {
                _this.search.date_from = data.date_from;
                _this.search.date_to = data.date_to;
                _this.search.UserId = data.name;
                _this.exportAsXLSX1();
            }
        });
    };
    TravelDailyPlanComponent.prototype.openDialog = function (travel_id) {
        var _this = this;
        var dialogRef = this.alrt.open(src_app_user_leaves_change_status_change_status_component__WEBPACK_IMPORTED_MODULE_10__["ChangeStatusComponent"], {
            width: '500px',
            panelClass: 'cs-modal',
            disableClose: true,
            data: {
                id: travel_id,
                reason: '',
                from: 'travel_plan'
            }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result != false) {
                _this.getTravelList();
            }
        });
    };
    TravelDailyPlanComponent.prototype.exportAsXLSX = function (status) {
        var _this = this;
        this.loader = true;
        this.search.status = status;
        this.serve.post_rqst({
            'user_id': this.assign_login_data2.id, 'filter': 'daily', 'start': this.start, 'pagelimit': this.page_limit, 'data': this.data, 'search': this.search, 'user_type': this.assign_login_data2.type
        }, "Excel/travel_list").subscribe((function (result) {
            if (result['msg'] == true) {
                _this.loader = false;
                window.open(_this.downurl + result['filename']);
                _this.getTravelList();
            }
            else {
                _this.loader = false;
            }
        }));
    };
    TravelDailyPlanComponent.prototype.exportAsXLSX1 = function () {
        var _this = this;
        this.serve.post_rqst({ 'search': this.search }, "Excel/travel_list_report").subscribe((function (result) {
            if (result['msg'] == true) {
                window.open(_this.downurl + result['filename']);
                _this.getTravelList();
            }
            else {
                _this.loader = false;
            }
        }));
    };
    TravelDailyPlanComponent.prototype.Approval = function (status) {
        var _this = this;
        this.savingFlag = true;
        this.serve.post_rqst({ 'data': this.selectedPOA, 'status': status, 'selectAllStatus': this.selectAllChecked ? '1' : '0' }, "Travel/bulkStatusChange").subscribe(function (result) {
            if (result['statusCode'] == 200) {
                _this.savingFlag = false;
                _this.getTravelList();
                _this.selectAllChecked = false;
                _this.selectedPOA = [];
                _this.toast.successToastr("Successfully Approved");
            }
            else {
                _this.savingFlag = false;
                _this.toast.errorToastr("No Data selected");
            }
        }, function (error) {
            _this.loader = false;
            _this.savingFlag = false;
        });
    };
    TravelDailyPlanComponent.prototype.updateMultiplePOA = function (checked, i) {
        var id = this.travel_list[i]['id'];
        if (checked) {
            // Add to selected list if not already there
            if (!this.selectedPOA.includes(id)) {
                this.selectedPOA.push(id);
            }
            this.travel_list[i].approval = '1';
        }
        else {
            // Remove from selected list
            var index = this.selectedPOA.findIndex(function (row) { return row === id; });
            if (index > -1) {
                this.selectedPOA.splice(index, 1);
            }
            this.travel_list[i].approval = '0';
        }
        // Update select all checkbox state based on selections
        this.updateSelectAllState();
    };
    // Method to update the selectAll checkbox state
    TravelDailyPlanComponent.prototype.updateSelectAllState = function () {
        this.selectAllChecked = this.travel_list.length > 0 &&
            this.selectedPOA.length === this.travel_list.length;
    };
    // Method to handle the "select all" checkbox
    TravelDailyPlanComponent.prototype.updateAllPOA = function (selectAll) {
        this.selectAllChecked = selectAll;
        this.selectedPOA = [];
        for (var i = 0; i < this.travel_list.length; i++) {
            this.travel_list[i].approval = selectAll ? '1' : '0';
            if (selectAll) {
                this.selectedPOA.push(this.travel_list[i]['id']);
            }
        }
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], TravelDailyPlanComponent.prototype, "dataToReceive", void 0);
    TravelDailyPlanComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-travel-daily-plan',
            template: __webpack_require__(/*! ./travel-daily-plan.component.html */ "./src/app/travel/travel-daily-plan/travel-daily-plan.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_dialog_component__WEBPACK_IMPORTED_MODULE_5__["DialogComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_8__["Router"], src_services_DatabaseService__WEBPACK_IMPORTED_MODULE_2__["DatabaseService"], src_app_dialog_component__WEBPACK_IMPORTED_MODULE_5__["DialogComponent"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialog"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialog"], src_app_localstorage_service__WEBPACK_IMPORTED_MODULE_6__["sessionStorage"], ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_7__["ToastrManager"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatBottomSheet"]])
    ], TravelDailyPlanComponent);
    return TravelDailyPlanComponent;
}());



/***/ }),

/***/ "./src/app/travel/travel-module/travel.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/travel/travel-module/travel.module.ts ***!
  \*******************************************************/
/*! exports provided: TravelModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TravelModule", function() { return TravelModule; });
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
/* harmony import */ var _add_travel_list_add_travel_list_modal_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../add-travel-list/add-travel-list-modal.component */ "./src/app/travel/add-travel-list/add-travel-list-modal.component.ts");
/* harmony import */ var _travel_list_travel_list_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../travel-list/travel-list.component */ "./src/app/travel/travel-list/travel-list.component.ts");
/* harmony import */ var _travel_plan_detail_travel_plan_detail_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../travel-plan-detail/travel-plan-detail.component */ "./src/app/travel/travel-plan-detail/travel-plan-detail.component.ts");
/* harmony import */ var _travel_sub_detail_travel_sub_detail_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../travel-sub-detail/travel-sub-detail.component */ "./src/app/travel/travel-sub-detail/travel-sub-detail.component.ts");
/* harmony import */ var _travel_status_modal_travel_status_modal_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../travel-status-modal/travel-status-modal.component */ "./src/app/travel/travel-status-modal/travel-status-modal.component.ts");
/* harmony import */ var _travel_daily_plan_travel_daily_plan_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../travel-daily-plan/travel-daily-plan.component */ "./src/app/travel/travel-daily-plan/travel-daily-plan.component.ts");
/* harmony import */ var _travel_daily_plan_detail_travel_daily_plan_detail_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../travel-daily-plan-detail/travel-daily-plan-detail.component */ "./src/app/travel/travel-daily-plan-detail/travel-daily-plan-detail.component.ts");



















var travelRoutes = [
    {
        path: "", children: [
            { path: "", component: _travel_list_travel_list_component__WEBPACK_IMPORTED_MODULE_13__["TravelListComponent"], canActivate: [src_app_auth_component_guard__WEBPACK_IMPORTED_MODULE_11__["AuthComponentGuard"]], data: { expectedRole: ['1'] } },
            { path: 'poa-single', component: _travel_daily_plan_travel_daily_plan_component__WEBPACK_IMPORTED_MODULE_17__["TravelDailyPlanComponent"], canActivate: [src_app_auth_component_guard__WEBPACK_IMPORTED_MODULE_11__["AuthComponentGuard"]], data: { expectedRole: ['1'] } },
            {
                path: 'poa-single/poa-travel-detail/:id', children: [
                    { path: '', component: _travel_daily_plan_detail_travel_daily_plan_detail_component__WEBPACK_IMPORTED_MODULE_18__["TravelDailyPlanDetailComponent"], canActivate: [src_app_auth_component_guard__WEBPACK_IMPORTED_MODULE_11__["AuthComponentGuard"]], data: { expectedRole: ['1'] } },
                ]
            },
            { path: 'add-tavel', component: _add_travel_list_add_travel_list_modal_component__WEBPACK_IMPORTED_MODULE_12__["addTravelListModal"], canActivate: [src_app_auth_component_guard__WEBPACK_IMPORTED_MODULE_11__["AuthComponentGuard"]], data: { expectedRole: ['1'] } },
            {
                path: 'travel-sub-detail/:id', children: [
                    { path: '', component: _travel_sub_detail_travel_sub_detail_component__WEBPACK_IMPORTED_MODULE_15__["TravelSubDetailComponent"], canActivate: [src_app_auth_component_guard__WEBPACK_IMPORTED_MODULE_11__["AuthComponentGuard"]], data: { expectedRole: ['1'] } },
                    { path: 'travel-detail/:id', component: _travel_plan_detail_travel_plan_detail_component__WEBPACK_IMPORTED_MODULE_14__["TravelPlanDetailComponent"], canActivate: [src_app_auth_component_guard__WEBPACK_IMPORTED_MODULE_11__["AuthComponentGuard"]], data: { expectedRole: ['1'] } },
                ]
            }
        ]
    },
];
var TravelModule = /** @class */ (function () {
    function TravelModule() {
    }
    TravelModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _add_travel_list_add_travel_list_modal_component__WEBPACK_IMPORTED_MODULE_12__["addTravelListModal"],
                _travel_sub_detail_travel_sub_detail_component__WEBPACK_IMPORTED_MODULE_15__["TravelSubDetailComponent"],
                _travel_plan_detail_travel_plan_detail_component__WEBPACK_IMPORTED_MODULE_14__["TravelPlanDetailComponent"],
                _travel_status_modal_travel_status_modal_component__WEBPACK_IMPORTED_MODULE_16__["TravelStatusModalComponent"],
                _travel_daily_plan_travel_daily_plan_component__WEBPACK_IMPORTED_MODULE_17__["TravelDailyPlanComponent"],
                _travel_daily_plan_detail_travel_daily_plan_detail_component__WEBPACK_IMPORTED_MODULE_18__["TravelDailyPlanDetailComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild(travelRoutes),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_7__["NgMultiSelectDropDownModule"],
                src_app_material__WEBPACK_IMPORTED_MODULE_10__["MaterialModule"],
                angular_ng_autocomplete__WEBPACK_IMPORTED_MODULE_6__["AutocompleteLibModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialogModule"],
                ngx_mat_select_search__WEBPACK_IMPORTED_MODULE_8__["NgxMatSelectSearchModule"],
                src_app_app_utility_module__WEBPACK_IMPORTED_MODULE_9__["AppUtilityModule"]
            ],
            entryComponents: [_travel_status_modal_travel_status_modal_component__WEBPACK_IMPORTED_MODULE_16__["TravelStatusModalComponent"], _add_travel_list_add_travel_list_modal_component__WEBPACK_IMPORTED_MODULE_12__["addTravelListModal"], _travel_plan_detail_travel_plan_detail_component__WEBPACK_IMPORTED_MODULE_14__["TravelPlanDetailComponent"]]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], TravelModule);
    return TravelModule;
}());



/***/ }),

/***/ "./src/app/travel/travel-plan-detail/travel-plan-detail.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/travel/travel-plan-detail/travel-plan-detail.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-container\">\r\n  <div class=\"tools-container\">\r\n    <a mat-icon-button matTooltip=\"Back\" (click)=\"backToList()\">\r\n      <i class=\"material-icons\">arrow_back</i>\r\n    </a>\r\n    <h2>Travel Plan Detail</h2>\r\n    <!--  && cus_network.length==1 && travelType!='Area'-->\r\n    <div class=\"left-auto\" *ngIf=\"logined_user_data.add_travel_list=='1' \">\r\n      <button matTooltip=\"Add Area\" class=\"mr10\" (click)=\"addArea()\" mat-raised-button color=\"primary\"><i\r\n          class=\"material-icons\">add</i>Add Area Travel Plan</button>\r\n      <button matTooltip=\"Add Party Wise Travel Plan\" (click)=\"addCustomerNetwork()\" mat-raised-button\r\n        color=\"primary\"><i class=\"material-icons\">add</i>Add Party Wise Travel Plan</button>\r\n\r\n    </div>\r\n    <!-- && cus_network.length==1 && travelType=='Area' -->\r\n    <!-- <div class=\"left-auto\" *ngIf=\"logined_user_data.add_travel_list=='1'  \">\r\n    </div> -->\r\n  </div>\r\n  <div class=\"container pt10 pl10 pr10 pb50\">\r\n    <div class=\"row\">\r\n      <div class=\"col s12 m12 l12\">\r\n        <!-- product data start -->\r\n        <div class=\"card\" *ngIf=\"!skLoading\">\r\n          <div class=\"card-head\">\r\n            <h2>Basic Details</h2>\r\n          </div>\r\n          <div class=\"card-body\">\r\n            <div class=\"grid-box\">\r\n              <div class=\"block-feilds\">\r\n                <span>Created By </span>\r\n                <p>{{travellist.created_by_name}}</p>\r\n              </div>\r\n              <div class=\"block-feilds\">\r\n                <span>Travel Date</span>\r\n                <p *ngIf=\"travellist.date_from == '0000-00-00'\">N/A</p>\r\n                <p *ngIf=\"travellist.date_from != '0000-00-00'\">{{travellist.date_from |date : 'd MMM y'}}</p>\r\n              </div>\r\n              <div class=\"block-feilds\">\r\n                <span>Employee Code</span>\r\n                <p>{{travellist.employee_id}}</p>\r\n              </div>\r\n              <div class=\"block-feilds\">\r\n                <span>Employee Name</span>\r\n                <p>{{travellist.name}}</p>\r\n              </div>\r\n\r\n              <div class=\"block-feilds\">\r\n                <span>Reporting Manager</span>\r\n                <p>{{travellist.reporting_manager_name}}</p>\r\n              </div>\r\n              <div class=\"block-feilds\">\r\n                <span>Plan Type</span>\r\n                <p>{{travellist.travel_type | titlecase}}</p>\r\n              </div>\r\n              <div class=\"block-feilds {{travellist.status}}\">\r\n                <span>Status</span>\r\n                <p>{{travellist.status && travellist.status != '' && travellist.status != null?travellist.status:'--'}}\r\n                </p>\r\n              </div>\r\n\r\n              <div class=\"block-feilds\">\r\n                <span>Status Updated On</span>\r\n                <p>{{travellist.updated_date!='0000-00-00'? (travellist.updated_date | date:'d MMM y'):'--'}}</p>\r\n              </div>\r\n              <div class=\"block-feilds\">\r\n                <span>Remark</span>\r\n                <p>{{travellist.status_remark && travellist.status_remark != '' && travellist.status_remark !=\r\n                  null?travellist.status_remark:'--'}}</p>\r\n              </div>\r\n\r\n              <div class=\"block-feilds\" *ngIf=\"travellist.reason\">\r\n                <span>Reason of Reject</span>\r\n                <p>{{travellist.reason && travellist.reason != '' && travellist.reason != null?travellist.reason:'--'}}\r\n                </p>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <!-- product data end -->\r\n        <!-- Skeleton start -->\r\n        <div class=\"card\" *ngIf=\"skLoading\">\r\n          <div class=\"sk-head\">\r\n            <h2>&nbsp;</h2>\r\n          </div>\r\n          <div class=\"card-body\">\r\n            <div class=\"grid-box\">\r\n              <div class=\"sk-box\" *ngFor=\"let row of [].constructor(10)\">\r\n                &nbsp;\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <!-- Skeleton end -->\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"col s12 m7 l7\" *ngIf=\"cus_network.length>0\">\r\n        <div class=\"card\">\r\n          <div class=\"card-head\">\r\n            <h2>{{travelType == 'Area' ? 'Area Detail' : 'Customer Network Detail'}}</h2>\r\n          </div>\r\n          <div class=\"card-body\">\r\n            <div class=\"cs-table left-right-10\" *ngIf=\"travelType  != 'Area'\">\r\n              <div class=\"sticky-head border-top\">\r\n                <div class=\"table-head\">\r\n                  <table>\r\n                    <tr>\r\n                      <th>Company Name</th>\r\n                      <th class=\"w120\">Network Type</th>\r\n                      <th class=\"w120\"\r\n                        *ngIf=\"logined_user_data.edit_travel_list=='1' || logined_user_data.delete_travel_list=='1'\">\r\n                        Action</th>\r\n                    </tr>\r\n                  </table>\r\n                </div>\r\n              </div>\r\n              <div class=\"table-container\">\r\n                <div class=\"table-content\">\r\n                  <table>\r\n                    <tr *ngFor=\"let list of cus_network\">\r\n                      <td>{{(list.company_name?list.company_name :'--') | uppercase }}</td>\r\n                      <td class=\"w120\" *ngIf=\"list.type == '1'\">Distributor</td>\r\n                      <td class=\"w120\" *ngIf=\"list.type == '3'\">Dealer</td>\r\n                      <td class=\"w120\" *ngIf=\"list.type == '7'\">Direct Dealer</td>\r\n                      <td class=\"w120\"\r\n                        *ngIf=\"logined_user_data.edit_travel_list=='1' || logined_user_data.delete_travel_list=='1'\">\r\n                        <button mat-icon-button matTooltip=\"View\" *ngIf=\"logined_user_data.edit_travel_list=='1'\"\r\n                          (click)=\"openDialog(list)\">\r\n                          <i class=\"material-icons edit\">edit</i>\r\n                        </button>\r\n                        <button mat-icon-button matTooltip=\"Delete\" *ngIf=\"logined_user_data.delete_travel_list=='1'\"\r\n                          (click)=\"deleteCustomerNetwork(list)\">\r\n                          <i class=\"material-icons red-clr\">delete</i>\r\n                        </button>\r\n                      </td>\r\n                    </tr>\r\n                  </table>\r\n                </div>\r\n                <!-- <ng-container *ngIf=\"traveldistributor.length == 0\">\r\n                  <app-not-result-found></app-not-result-found>\r\n                </ng-container> -->\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"cs-table left-right-10\" *ngIf=\"travelType  == 'Area'\">\r\n              <div class=\"sticky-head border-top\">\r\n                <div class=\"table-head\">\r\n                  <table>\r\n                    <tr>\r\n                      <th>Area Name</th>\r\n                      <th>Purpose Of Visit</th>\r\n                      <th class=\"w120\"\r\n                        *ngIf=\"logined_user_data.edit_travel_list=='1' || logined_user_data.delete_travel_list=='1'\">\r\n                        Action</th>\r\n                    </tr>\r\n                  </table>\r\n                </div>\r\n              </div>\r\n              <div class=\"table-container\">\r\n                <div class=\"table-content\">\r\n                  <table>\r\n                    <tr *ngFor=\"let list of cus_network\">\r\n                      <td>{{(list.area?list.area :'--') }}</td>\r\n                      <td>{{list.reason ? list.reason :'---'}}</td>\r\n                      <td class=\"w120\"\r\n                        *ngIf=\"logined_user_data.edit_travel_list=='1' || logined_user_data.delete_travel_list=='1'\">\r\n                        <button mat-icon-button matTooltip=\"Delete\" *ngIf=\"logined_user_data.delete_travel_list=='1'\"\r\n                          (click)=\"deleteAreaTravelPlan(list)\">\r\n                          <i class=\"material-icons red-clr\">delete</i>\r\n                        </button>\r\n                      </td>\r\n                    </tr>\r\n                  </table>\r\n                </div>\r\n                <!-- <ng-container *ngIf=\"traveldistributor.length == 0\">\r\n                  <app-not-result-found></app-not-result-found>\r\n                </ng-container> -->\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col s12 m5 l5\">\r\n        <div class=\"card\">\r\n          <div class=\"card-head\">\r\n            <h2>Checkin Details</h2>\r\n          </div>\r\n          <div class=\"card-body\">\r\n            <div class=\"col s12\">\r\n              <div class=\"travel\" *ngIf=\"checkin.length > 0\">\r\n                <ul>\r\n                  <!-- <li>\r\n                    <span class=\"vistit-count\">\r\n                      <i class=\"material-icons\">location_on</i>\r\n                    </span>\r\n                    <p>\r\n                      <strong>Day Start </strong>\r\n                      <ng-container *ngIf=\"attendance_data.start_time == '00:00:00'\">---</ng-container>\r\n                      <ng-container *ngIf=\"attendance_data.start_time != '00:00:00'\">{{attendance_data.start_time}}</ng-container>\r\n                    </p>\r\n                  </li> -->\r\n\r\n                  <li *ngFor=\"let row of checkin; let i =index\">\r\n                    <span class=\"vistit-count\">{{i+1}}</span>\r\n                    <!-- <span class=\"km\">{{row.km}} KM</span> -->\r\n                    <div class=\"counter\">\r\n                      <div>\r\n                        <h2>{{row.company_name}}</h2>\r\n                        <div class=\"visit-time\">\r\n                          <div class=\"visit-hours\">\r\n                            <span class=\"green-clr\">Check-in</span>\r\n                            <p *ngIf=\"row.visit_start != '0000-00-00 00:00:00' \">{{row.visit_start | date:'dd MMM yyyy\r\n                              hh:mm'}}</p>\r\n                            <p *ngIf=\"row.visit_start == '0000-00-00 00:00:00' \">---</p>\r\n                          </div>\r\n                          <div class=\"visit-hours\">\r\n                            <span class=\"red-clr\">Check-out</span>\r\n                            <p>{{row.visit_end!='0000-00-00 00:00:00'? (row.visit_end | date:'dd MMM yyyy hh:mm'):'--'}}\r\n                            </p>\r\n                            <!-- <p *ngIf=\"row.visit_end == '0000-00-00 00:00:00' \">---</p> -->\r\n                          </div>\r\n                          <div class=\"visit-hours\">\r\n                            <span>Total time spend</span>\r\n                            <p>{{row.Total_Working_Time}}</p>\r\n                          </div>\r\n                        </div>\r\n                        <p *ngIf=\"row.start_address\"><strong>Start GPS Address :</strong> {{row.start_address}}</p>\r\n                        <p *ngIf=\"row.address\"><strong>End GPS Address :</strong> {{row.address}}</p>\r\n                      </div>\r\n                      <div class=\"type-visit\">\r\n                        <div class=\"types\" [ngClass]=\"{'active': row.followup_flag > 0}\">\r\n                          <span>&nbsp;</span>\r\n                          Order\r\n                        </div>\r\n                        <div class=\"types\" [ngClass]=\"{'active': row.followup_flag > 0}\">\r\n                          <span>&nbsp;</span>\r\n                          Followup\r\n                        </div>\r\n                        <!-- <div class=\"types\" [ngClass]=\"{'active': row.followup_flag > 0}\">\r\n                          <span>&nbsp;</span>\r\n                          Photo upload\r\n                        </div> -->\r\n                        <div class=\"types\" [ngClass]=\"{'active': row.doc_flag!=0 }\">\r\n                          <span>&nbsp;</span>\r\n                          <a style=\"cursor: pointer;text-decoration: underline;\" *ngIf=\"row.doc_flag!=0\"\r\n                            (click)=\"opendoc(row.Doc)\">\r\n                            Photo upload\r\n                          </a>\r\n                          <a *ngIf=\"row.doc_flag==0\">\r\n                            Photo upload\r\n                          </a>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </li>\r\n                  <!-- <li>\r\n                    <span class=\"vistit-count\">\r\n                      <i class=\"material-icons\">location_on</i>\r\n                    </span>\r\n                    <p ><strong>Day Stop </strong>\r\n                      <ng-container *ngIf=\"attendance_data.stop_time == '00:00:00'\">---</ng-container>\r\n                      <ng-container *ngIf=\"attendance_data.stop_time != '00:00:00'\">{{attendance_data.stop_time}}</ng-container>\r\n                    </p>\r\n                  </li> -->\r\n                </ul>\r\n              </div>\r\n              <div class=\"no-location\" *ngIf=\"checkin.length == 0\">\r\n                <img\r\n                  src=\"https://img.freepik.com/premium-vector/route-vector-icon-route-destination-with-map-pin-symbols-vector-illustration-eps-10_532800-353.jpg?w=2000\">\r\n                <p>No Check In</p>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/travel/travel-plan-detail/travel-plan-detail.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/travel/travel-plan-detail/travel-plan-detail.component.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/travel/travel-plan-detail/travel-plan-detail.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/travel/travel-plan-detail/travel-plan-detail.component.ts ***!
  \***************************************************************************/
/*! exports provided: TravelPlanDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TravelPlanDetailComponent", function() { return TravelPlanDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_services_DatabaseService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/_services/DatabaseService */ "./src/_services/DatabaseService.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var src_app_dialog_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/dialog.component */ "./src/app/dialog.component.ts");
/* harmony import */ var ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng6-toastr-notifications */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/ng6-toastr-notifications/fesm5/ng6-toastr-notifications.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var src_app_order_status_modal_status_modal_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/order/status-modal/status-modal.component */ "./src/app/order/status-modal/status-modal.component.ts");
/* harmony import */ var src_app_localstorage_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/localstorage.service */ "./src/app/localstorage.service.ts");
/* harmony import */ var _add_travel_list_add_travel_list_modal_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../add-travel-list/add-travel-list-modal.component */ "./src/app/travel/add-travel-list/add-travel-list-modal.component.ts");
/* harmony import */ var src_app_checkindocument_checkindocument_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/checkindocument/checkindocument.component */ "./src/app/checkindocument/checkindocument.component.ts");













var TravelPlanDetailComponent = /** @class */ (function () {
    function TravelPlanDetailComponent(alert, toast, serve, dialog, rout, route, _location, session) {
        var _this = this;
        this.alert = alert;
        this.toast = toast;
        this.serve = serve;
        this.dialog = dialog;
        this.rout = rout;
        this.route = route;
        this._location = _location;
        this.session = session;
        this.skLoading = false;
        this.travelData = {};
        this.cus_network = [];
        this.checkin = [];
        this.check_in_data = [];
        this.assign_user_data = {};
        this.logined_user_data = {};
        this.travelType = {};
        this.traveldetailsAreawise = [];
        this.showAddbuttonArea = false;
        this.skLoading = true;
        this.route.params.subscribe(function (params) {
            _this.travel_id = route.params['_value'].id;
            _this.serve.currentUserID = route.params['_value'].id;
            _this.travel_date = _this.route.queryParams['_value']['date'];
            _this.travel_month = _this.route.queryParams['_value']['currentMonth'];
            _this.travel_year = _this.route.queryParams['_value']['currentYear'];
        });
        this.assign_user_data = this.session.getSession();
        this.logined_user_data = this.assign_user_data.value.data;
        this.travelDetail();
    }
    TravelPlanDetailComponent.prototype.ngOnInit = function () {
    };
    TravelPlanDetailComponent.prototype.backToList = function () {
        this._location.back();
    };
    TravelPlanDetailComponent.prototype.travelDetail = function () {
        var _this = this;
        this.skLoading = true;
        this.serve.post_rqst({ 'User_id': this.travel_id, 'Travel_date': this.travel_date }, "Travel/travelPlanDetail").subscribe(function (result) {
            if (result['statusCode'] == 200) {
                _this.skLoading = false;
                _this.travellist = result['result']['tarvel_plan_detail'];
                _this.cus_network = result['result']['distributor_network'];
                _this.checkin = result['result']['checkin_data'];
                _this.travelType = result['typeVisit'];
            }
            else {
                _this.skLoading = false;
                var id = _this.travel_id;
                var year = _this.travel_year;
                var month = _this.travel_month;
                _this.showAddbuttonArea = true;
                _this.toast.errorToastr(result['statusMsg']);
                // this.rout.navigate(['/travel-sub-detail/' + this.travel_id], { queryParams: { id, month, year } });
            }
        }, function (err) {
            _this.skLoading = false;
            _this.toast.errorToastr('Something went wrong');
        });
    };
    TravelPlanDetailComponent.prototype.travelCheckin = function () {
        this.serve.post_rqst({ 'travel_id': this.travel_id, 'travel_date': this.travellist.date_from, 'user_id': this.travellist.assign_to }, "Travel/travel_detail_checkin_list").subscribe((function (result) {
        }));
    };
    TravelPlanDetailComponent.prototype.openDialog = function (listt) {
        var _this = this;
        var dialogRef = this.dialog.open(src_app_order_status_modal_status_modal_component__WEBPACK_IMPORTED_MODULE_8__["StatusModalComponent"], {
            width: '400px',
            panelClass: 'cs-model',
            data: {
                drType: listt.type,
                company_name: listt.company_name,
                drId: listt.dr_id,
                delivery_from: 'edit_travel_plan_retailer',
                employee_id: this.travellist.employee_id,
                travel_plan_id: listt.id,
            }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result = true) {
                _this.travelDetail();
            }
        });
    };
    TravelPlanDetailComponent.prototype.addArea = function () {
        var _this = this;
        var dialogRef = this.dialog.open(_add_travel_list_add_travel_list_modal_component__WEBPACK_IMPORTED_MODULE_10__["addTravelListModal"], {
            width: '500px',
            panelClass: 'cs-model',
            data: {
                delivery_from: 'add_travel_plan',
                employee_id: this.travellist.employee_id,
                'user_id': this.travel_id,
                'id': this.travellist.id,
                'travel_date': this.travel_date
            }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result != false) {
                _this.travelDetail();
            }
        });
    };
    TravelPlanDetailComponent.prototype.addCustomerNetwork = function () {
        var _this = this;
        var dialogRef = this.dialog.open(src_app_order_status_modal_status_modal_component__WEBPACK_IMPORTED_MODULE_8__["StatusModalComponent"], {
            width: '400px',
            panelClass: 'cs-model',
            data: {
                drType: '',
                company_name: '',
                drId: '',
                delivery_from: 'add_travel_plan_retailer',
                employee_id: this.travellist.employee_id,
                travel_plan_id: this.travellist.id,
                'user_id': this.travel_id,
                'travel_date': this.travel_date
            }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result = true) {
                _this.travelDetail();
            }
        });
    };
    TravelPlanDetailComponent.prototype.deleteCustomerNetwork = function (data) {
        var _this = this;
        this.alert.delete('Customer Network Detail !').then(function (result) {
            if (result) {
                _this.serve.post_rqst({ 'id': data.id }, 'Travel/drTravelDelete').subscribe(function (result) {
                    if (result['statusCode'] == 200) {
                        _this.toast.successToastr(result['statusMsg']);
                        _this.travelDetail();
                    }
                    else {
                        _this.toast.errorToastr(result['statusMsg']);
                    }
                });
            }
        });
    };
    TravelPlanDetailComponent.prototype.deleteAreaTravelPlan = function (data) {
        var _this = this;
        this.alert.delete('Area Travel Detail !').then(function (result) {
            if (result) {
                _this.serve.post_rqst({ 'id': data.id }, 'Travel/drTravelDelete').subscribe(function (result) {
                    if (result['statusCode'] == 200) {
                        _this.toast.successToastr(result['statusMsg']);
                        _this.travelDetail();
                    }
                    else {
                        _this.toast.errorToastr(result['statusMsg']);
                    }
                });
            }
        });
    };
    TravelPlanDetailComponent.prototype.opendoc = function (list) {
        var dialogRef = this.dialog.open(src_app_checkindocument_checkindocument_component__WEBPACK_IMPORTED_MODULE_11__["CheckindocumentComponent"], {
            width: '768px',
            data: {
                list: [{ 'doc': list }]
            }
        });
        dialogRef.afterClosed().subscribe(function (result) {
        });
    };
    TravelPlanDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-travel-plan-detail',
            template: __webpack_require__(/*! ./travel-plan-detail.component.html */ "./src/app/travel/travel-plan-detail/travel-plan-detail.component.html"),
            styles: [__webpack_require__(/*! ./travel-plan-detail.component.scss */ "./src/app/travel/travel-plan-detail/travel-plan-detail.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_dialog_component__WEBPACK_IMPORTED_MODULE_5__["DialogComponent"], ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_6__["ToastrManager"], src_services_DatabaseService__WEBPACK_IMPORTED_MODULE_2__["DatabaseService"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatDialog"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["Location"], src_app_localstorage_service__WEBPACK_IMPORTED_MODULE_9__["sessionStorage"]])
    ], TravelPlanDetailComponent);
    return TravelPlanDetailComponent;
}());



/***/ }),

/***/ "./src/app/travel/travel-sub-detail/travel-sub-detail.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/travel/travel-sub-detail/travel-sub-detail.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-container\">\r\n  <div class=\"tools-container\">\r\n    <a mat-icon-button matTooltip=\"Back\" (click)=\"back()\">\r\n      <i class=\"material-icons\">arrow_back</i>\r\n    </a>\r\n    <h2>Monthly Journey Plan Detail</h2>\r\n  </div>\r\n\r\n  <div class=\"container pt10 pl10 pr10 pb50\">\r\n    <div class=\"row\">\r\n\r\n      <div class=\"col s12 m12 l12\">\r\n\r\n        <div class=\"card\" *ngIf=\"skLoading\">\r\n          <div class=\"sk-head\">\r\n            <h2>&nbsp;</h2>\r\n          </div>\r\n          <div class=\"card-body\">\r\n            <div class=\"grid-box\">\r\n              <div class=\"sk-box\" *ngFor=\"let row of [].constructor(10)\">\r\n                &nbsp;\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <ng-container *ngIf=\"!skLoading\">\r\n          <div class=\"card\">\r\n            <div class=\"card-head\">\r\n              <h2>Basic Details</h2>\r\n            </div>\r\n            <div class=\"card-body\">\r\n              <div class=\"grid-box\">\r\n                <div class=\"block-feilds\">\r\n                  <span>Plan ID</span>\r\n                  <p>#{{travel_detail.id}}</p>\r\n                </div>\r\n\r\n                <div class=\"block-feilds\">\r\n                  <span>Employee Code</span>\r\n                  <p>{{travel_detail.employee_id}}</p>\r\n                </div>\r\n                <div class=\"block-feilds\">\r\n                  <span>Employee Name</span>\r\n                  <p>{{travel_detail.name ? (travel_detail.name | titlecase) : '---'}}</p>\r\n                </div>\r\n\r\n                <div class=\"block-feilds\">\r\n                  <span>Reporting Manager</span>\r\n                  <p>{{travel_detail.r_name ? (travel_detail.r_name | titlecase) : '---'}}</p>\r\n                </div>\r\n\r\n                <div class=\"block-feilds {{travel_detail.status}}\">\r\n                  <span>Status</span>\r\n                  <p>{{travel_detail.status ? travel_detail.status : '---'}} </p>\r\n                </div>\r\n\r\n                <div class=\"block-feilds\">\r\n                  <span>Status Updated By</span>\r\n                  <p>{{travel_detail.status_updated_by ? travel_detail.status_updated_by : '---'}}</p>\r\n                </div>\r\n\r\n                <div class=\"block-feilds\">\r\n                  <span>Status Updated On</span>\r\n                  <p>{{travel_detail.updated_date!='0000-00-00'? (travel_detail.updated_date | date:'d MMM y'):'--'}}\r\n                  </p>\r\n                </div>\r\n\r\n                <div class=\"block-feilds\" *ngIf=\"travel_detail.status_remark\">\r\n                  <span>Remark</span>\r\n                  <p>{{travel_detail.status_remark && travel_detail.status_remark != '' && travel_detail.status_remark\r\n                    !=\r\n                    null?travel_detail.status_remark:'--'}}</p>\r\n                </div>\r\n\r\n                <div class=\"block-feilds\" *ngIf=\"travel_detail.reason\">\r\n                  <span>Reason of Reject</span>\r\n                  <p>{{travel_detail.reason}}\r\n                  </p>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"card pt0 mt10\">\r\n            <div class=\"card-body pt0\">\r\n              <div class=\"grid-box eight highlight-grid\">\r\n                <div class=\"block-feilds\">\r\n                  <span>Date Created</span>\r\n                  <p>{{travel_detail.date_created!='0000-00-00 00:00:00'? (travel_detail.date_created | date:'d MMM y,\r\n                    hh:mm a'):'--'}}</p>\r\n                </div>\r\n\r\n                <div class=\"block-feilds\">\r\n                  <span>Created By</span>\r\n                  <p>{{travel_detail.created_by_name ? (travel_detail.created_by_name | titlecase) : '---'}}</p>\r\n                </div>\r\n\r\n                <div class=\"block-feilds\">\r\n                  <span>Month</span>\r\n                  <p>\r\n                    <ng-container *ngIf=\"travel_detail.month == '01' \">January</ng-container>\r\n                    <ng-container *ngIf=\"travel_detail.month == '02' \">February</ng-container>\r\n                    <ng-container *ngIf=\"travel_detail.month == '03' \">March</ng-container>\r\n                    <ng-container *ngIf=\"travel_detail.month == '04' \">April</ng-container>\r\n                    <ng-container *ngIf=\"travel_detail.month == '05' \">May</ng-container>\r\n                    <ng-container *ngIf=\"travel_detail.month == '06' \">June</ng-container>\r\n                    <ng-container *ngIf=\"travel_detail.month == '07' \">July</ng-container>\r\n                    <ng-container *ngIf=\"travel_detail.month == '08' \">August</ng-container>\r\n                    <ng-container *ngIf=\"travel_detail.month == '09' \">September</ng-container>\r\n                    <ng-container *ngIf=\"travel_detail.month == '10' \">October</ng-container>\r\n                    <ng-container *ngIf=\"travel_detail.month == '11' \">November</ng-container>\r\n                    <ng-container *ngIf=\"travel_detail.month == '12' \">December</ng-container>\r\n                  </p>\r\n                </div>\r\n\r\n                <div class=\"block-feilds\">\r\n                  <span>Year</span>\r\n                  <p>{{travel_detail.year ? (travel_detail.year) : '---'}}</p>\r\n                </div>\r\n                <div class=\"block-feilds\">\r\n                  <span>Working Days</span>\r\n                  <p>{{routesValue.working_days ? routesValue.working_days : '---'}}</p>\r\n                </div>\r\n                <div class=\"block-feilds\">\r\n                  <span>Plan Submit</span>\r\n                  <p>{{travel_detail.visit_plan_count ? travel_detail.visit_plan_count : '---'}}</p>\r\n                </div>\r\n                <!-- <div class=\"block-feilds\">\r\n                  <span>Actual Visit</span>\r\n                  <p>{{travel_detail.visit_actual_count ? travel_detail.visit_actual_count : '---'}}</p>\r\n                </div> -->\r\n              </div>\r\n            </div>\r\n            <div class=\"cs-table left-right-10\">\r\n              <div class=\" border-top\">\r\n                <div class=\"table-head\">\r\n                  <table>\r\n                    <tr>\r\n                      <th class=\"w50  text-center\">Sr.No</th>\r\n                      <th class=\"w150\">State</th>\r\n                      <th>City</th>\r\n                      <th class=\"w200 text-center\">Visit Plan Days</th>\r\n                      <th class=\"w200 text-center\">Actual Visit</th>\r\n                      <!-- <th class=\"w200\">Status</th> -->\r\n                    </tr>\r\n                  </table>\r\n                </div>\r\n              </div>\r\n\r\n              <div class=\"table-container pb0\">\r\n                <div class=\"table-content none-shadow\">\r\n                  <table>\r\n                    <tr *ngFor=\"let row of travel_detail.visit_plan_data; let i = index;\">\r\n                      <td class=\"w50  text-center\">{{i+1}}</td>\r\n                      <td class=\"w150\">{{row.state ? row.state:'---'}}</td>\r\n                      <td>{{row.city ? row.city : '---'}}</td>\r\n                      <td class=\"w200 text-center\">{{row.visit_days ? row.visit_days: '--'}}</td>\r\n                      <td class=\"w200 text-center\">{{row.visit_actual ? row.visit_actual: '--'}}</td>\r\n\r\n                    </tr>\r\n                  </table>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </ng-container>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/travel/travel-sub-detail/travel-sub-detail.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/travel/travel-sub-detail/travel-sub-detail.component.ts ***!
  \*************************************************************************/
/*! exports provided: TravelSubDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TravelSubDetailComponent", function() { return TravelSubDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_dialog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/dialog.component */ "./src/app/dialog.component.ts");
/* harmony import */ var src_services_DatabaseService__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/_services/DatabaseService */ "./src/_services/DatabaseService.ts");
/* harmony import */ var src_app_localstorage_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/localstorage.service */ "./src/app/localstorage.service.ts");
/* harmony import */ var ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng6-toastr-notifications */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/ng6-toastr-notifications/fesm5/ng6-toastr-notifications.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/common/fesm5/common.js");









var TravelSubDetailComponent = /** @class */ (function () {
    function TravelSubDetailComponent(toast, location, service, dialog, dialog1, router, route, session) {
        var _this = this;
        this.toast = toast;
        this.location = location;
        this.service = service;
        this.dialog = dialog;
        this.dialog1 = dialog1;
        this.router = router;
        this.route = route;
        this.session = session;
        this.loader = false;
        this.todayDate = new Date().toISOString().slice(0, 10);
        this.travel_detail = {};
        this.skLoading = false;
        this.activeDate = new Date();
        this.activeIndex = 0;
        this.date = new Date();
        this.monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        this.assign_login_data = this.session.getSession();
        this.assign_login_data = this.assign_login_data.value;
        this.assign_login_data2 = this.assign_login_data.data;
        this.route.params.subscribe(function (params) {
            _this.routesValue = route.queryParams['_value'];
            _this.travel_id = params.id;
            _this.service.currentUserID = params.id;
            _this.userId = params.id;
        });
        this.travelDetail('');
    }
    TravelSubDetailComponent.prototype.ngOnInit = function () {
    };
    TravelSubDetailComponent.prototype.setActiveIndex = function (index) {
        this.activeIndex = index;
    };
    TravelSubDetailComponent.prototype.travelDetail = function (date) {
        var _this = this;
        this.skLoading = true;
        this.service.post_rqst({ 'filter': 'month', 'travel_id': this.travel_id, 'date': date }, "Travel/getTravelData").subscribe(function (result) {
            if (result['statusCode'] == 200) {
                _this.skLoading = false;
                _this.travel_detail = result['user_list_travel_plan'];
            }
            else {
                _this.skLoading = false;
                _this.toast.errorToastr(result['statusMsg']);
            }
        }, function (err) {
            _this.toast.errorToastr('Something went wrong');
        });
    };
    TravelSubDetailComponent.prototype.back = function () {
        this.location.back();
    };
    TravelSubDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-travel-sub-detail',
            template: __webpack_require__(/*! ./travel-sub-detail.component.html */ "./src/app/travel/travel-sub-detail/travel-sub-detail.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_7__["ToastrManager"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["Location"], src_services_DatabaseService__WEBPACK_IMPORTED_MODULE_5__["DatabaseService"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"], src_app_dialog_component__WEBPACK_IMPORTED_MODULE_4__["DialogComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], src_app_localstorage_service__WEBPACK_IMPORTED_MODULE_6__["sessionStorage"]])
    ], TravelSubDetailComponent);
    return TravelSubDetailComponent;
}());



/***/ })

}]);