(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["segment-list-segment-module-segment-module"],{

/***/ "./src/app/segment-list/segment-list.component.html":
/*!**********************************************************!*\
  !*** ./src/app/segment-list/segment-list.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-container\">\r\n  <app-loader *ngIf=\"excelLoader\"></app-loader>\r\n  <div class=\"tools-container\">\r\n    <h2>Category</h2>\r\n    <div class=\"left-auto df ac flex-gap-10\">\r\n      <button mat-icon-button matTooltip=\"Refresh\" (click)=\"refresh()\">\r\n        <i class=\"material-icons\">refresh</i>\r\n      </button>\r\n      <div class=\"pagination\" *ngIf=\"segmentList.length > 0\">\r\n        <div class=\"pagination-content\">\r\n          Pages\r\n          <span>{{pagenumber}}</span>\r\n          of\r\n          <span>{{total_page}}</span>\r\n        </div>\r\n        <div class=\"page-nav\">\r\n          <button mat-icon-button matTooltip=\"Older\" (click)=\"previousPage()\" [disabled]=\"start == 0\">\r\n            <i class=\"material-icons\">navigate_before</i>\r\n          </button>\r\n          <button mat-icon-button matTooltip=\"Newer\" (click)=\"nextPage()\" [disabled]=\"pagenumber == total_page \">\r\n            <i class=\"material-icons\">navigate_next</i>\r\n          </button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"container table-container\">\r\n    <div class=\"cs-table\">\r\n      <div class=\"sticky-head\">\r\n        <div class=\"table-head\">\r\n          <table>\r\n            <tr>\r\n              <th class=\"w50\">S.No</th>\r\n              <th class=\"w100\">Date Created</th>\r\n              <th class=\"w100\">Created By</th>\r\n              <th>Category</th>\r\n              <!-- <th class=\"w100  text-center\">Distributor Discount</th>\r\n              <th class=\"w100  text-center\">Direct Dealer Discount</th>\r\n              <th class=\"w100  text-center\">Retailer Discount</th>\r\n              <th class=\"w120  text-center\">GST</th> -->\r\n              <th class=\"w140  text-right\">Total No. Of Products</th>\r\n              <th class=\"w100 text-center\" *ngIf=\"logined_user_data.edit_category_master=='1'\">Status</th>\r\n              <th class=\"w100 text-center\"\r\n                *ngIf=\"logined_user_data.edit_category_master=='1' || logined_user_data.delete_category_master=='1'\">\r\n                Action</th>\r\n            </tr>\r\n          </table>\r\n        </div>\r\n        <div class=\"table-head bdrt\">\r\n          <table>\r\n            <tr>\r\n              <th class=\"w50\"></th>\r\n              <th class=\"w100\">\r\n                <div class=\"th-search-acmt\">\r\n                  <mat-form-field class=\"cs-input date-column infix-bodr\">\r\n                    <input matInput [matDatepicker]=\"picker\" placeholder=\"Date\" name=\"date_created\"\r\n                      #date_created=\"ngModel\" [(ngModel)]=\"value.date_created\" (ngModelChange)=\"date_format()\"\r\n                      [max]=\"today_date\" readonly>\r\n                    <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\r\n                    <mat-datepicker #picker></mat-datepicker>\r\n                  </mat-form-field>\r\n                </div>\r\n              </th>\r\n\r\n              <th class=\"w100\">\r\n                <div class=\"th-search-acmt\">\r\n                  <mat-form-field class=\"example-full-width cs-input select-input\">\r\n                    <input matInput placeholder=\"Search...\" (keyup.enter)=\"getSegmentList('')\" #created_by=\"ngModel\"\r\n                      [(ngModel)]=\"value.created_by\">\r\n                  </mat-form-field>\r\n                </div>\r\n              </th>\r\n              <th>\r\n                <div class=\"th-search-acmt\">\r\n                  <mat-form-field class=\"example-full-width cs-input select-input\">\r\n                    <input matInput placeholder=\"Search...\" (keyup.enter)=\"getSegmentList('')\" #segment=\"ngModel\"\r\n                      [(ngModel)]=\"value.segment\">\r\n                  </mat-form-field>\r\n                </div>\r\n              </th>\r\n              <!-- <th class=\"w100  text-center\">&nbsp;</th>\r\n              <th class=\"w100  text-center\">&nbsp;</th>\r\n              <th class=\"w100  text-center\">&nbsp;</th>\r\n              <th class=\"w120  text-center\">&nbsp;</th> -->\r\n              <th class=\"w140\"></th>\r\n              <th class=\"w100 text-center\" *ngIf=\"logined_user_data.edit_category_master=='1'\">\r\n                <div class=\"th-search-acmt\">\r\n                  <mat-form-field class=\"cs-input select-input\">\r\n                    <mat-select name=\"status\" #status=\"ngModel\" [(ngModel)]=\"value.status\"\r\n                      (selectionChange)=\"getSegmentList('')\">\r\n                      <mat-option value=\"\">All</mat-option>\r\n                      <mat-option value=\"active\">Active</mat-option>\r\n                      <mat-option value=\"deactive\">Deactive </mat-option>\r\n                    </mat-select>\r\n                  </mat-form-field>\r\n                </div>\r\n              </th>\r\n              <th class=\"w100\"\r\n                *ngIf=\"logined_user_data.edit_category_master=='1' || logined_user_data.delete_category_master=='1'\">\r\n              </th>\r\n            </tr>\r\n          </table>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"table-container\">\r\n        <div class=\"table-content\">\r\n          <table>\r\n            <ng-container *ngIf=\"!loader\">\r\n              <tr *ngFor=\"let dist of segmentList; let i = index;\">\r\n                <td class=\"w50\">{{i + 1 + sr_no}}</td>\r\n                <td class=\"w100\">{{dist.date_created | date}}</td>\r\n                <td class=\"w100\">{{dist.created_by_name && dist.created_by_name != '' ? dist.created_by_name : '--'}}\r\n                </td>\r\n                <td>{{dist.category}}</td>\r\n                <!-- <td class=\"w100  text-center\">{{dist.distributor_discount}} %</td>\r\n                <td class=\"w100  text-center\">{{dist.direct_dealer_discount}} %</td>\r\n                <td class=\"w100  text-center\">{{dist.retailer_discount}} %</td>\r\n                <td class=\"w120  text-center\">{{dist.gst}} %</td> -->\r\n                <td class=\"w140 text-right\">{{dist.product_count}}</td>\r\n                <td class=\"w100 text-center\" *ngIf=\"logined_user_data.edit_category_master=='1'\">\r\n                  <mat-slide-toggle color=\"accent\" [name]=\"'status'+i\" [(ngModel)]=\"dist.segment_status\"\r\n                    (change)=\"updateStatus(i,dist.id,$event)\">\r\n                  </mat-slide-toggle>\r\n                </td>\r\n                <td class=\"w100 text-center\"\r\n                  *ngIf=\"logined_user_data.edit_category_master=='1' || logined_user_data.delete_category_master=='1'\">\r\n                  <div class=\"action-button\">\r\n                    <button mat-icon-button matTooltip=\"Edit\" *ngIf=\"logined_user_data.edit_category_master=='1'\"\r\n                      (click)=\"openDialog(dist.category, dist.gst, dist.distributor_discount, dist.direct_dealer_discount, dist.retailer_discount, dist.id,'edit')\">\r\n                      <i class=\"material-icons edit\">edit</i>\r\n                    </button>\r\n                    <button mat-icon-button matTooltip=\"Delete\" *ngIf=\"logined_user_data.delete_category_master=='1'\"\r\n                      (click)=\"deleteCategory(dist.id)\">\r\n                      <i class=\"material-icons red-clr\">delete</i>\r\n                    </button>\r\n                  </div>\r\n                </td>\r\n              </tr>\r\n            </ng-container>\r\n\r\n            <ng-container *ngIf=\"loader\">\r\n              <tr class=\"sk-loading\" *ngFor=\"let row of [].constructor(10);\">\r\n                <td class=\"w50\">\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n                <td class=\"w100\">\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n                <td class=\"w100\">\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n                <td>\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n                <!-- <td class=\"w100\">\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n                <td class=\"w100\">\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n                <td class=\"w100\">\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n                <td class=\"w120\">\r\n                  <div>&nbsp;</div>\r\n                </td> -->\r\n                <td class=\"w140 text-right\">\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n                <td class=\"w100 text-center\" *ngIf=\"logined_user_data.edit_category_master=='1'\">\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n                <td class=\"w60 text-center\" *ngIf=\"logined_user_data.edit_category_master=='1'\">\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n              </tr>\r\n            </ng-container>\r\n          </table>\r\n        </div>\r\n      </div>\r\n\r\n      <ng-container *ngIf=\"segmentList.length == 0 &&  datanotfound == true;\">\r\n        <app-not-result-found></app-not-result-found>\r\n      </ng-container>\r\n\r\n    </div>\r\n\r\n  </div>\r\n\r\n\r\n  <div class=\"fab-btns\"\r\n    *ngIf=\"logined_user_data.export_category_master=='1' || logined_user_data.add_category_master=='1' || logined_user_data.import_category_master=='1'\">\r\n    <button class=\"pulse excel\" mat-fab color=\"primary\" [ngClass]=\"{'pulse': fabBtnValue=='add'}\"\r\n      [matMenuTriggerFor]=\"menu\">\r\n      <i class=\"material-icons\">apps</i>\r\n      Action\r\n    </button>\r\n    <mat-menu #menu=\"matMenu\">\r\n      <button mat-menu-item (click)=\"download_excl();\"\r\n        *ngIf=\"segmentList.length > 0 && (logined_user_data.export_category_master=='1')\">\r\n        <mat-icon>download</mat-icon>\r\n        <span>Download excel</span>\r\n      </button>\r\n      <button mat-menu-item (click)=\"upload_excel('insert');\" *ngIf=\"(logined_user_data.import_category_master=='1')\">\r\n        <mat-icon>cloud_upload</mat-icon>\r\n        <span>Upload New Data</span>\r\n      </button>\r\n      <button mat-menu-item (click)=\"upload_excel('update');\"\r\n        *ngIf=\"segmentList.length > 0 && (logined_user_data.import_category_master=='1')\">\r\n        <mat-icon>update</mat-icon>\r\n        <span>Update Existing Data</span>\r\n      </button>\r\n      <button mat-menu-item (click)=\"openDialog('', '','','','','','add');\"\r\n        *ngIf=\"logined_user_data.add_category_master=='1'\">\r\n        <mat-icon>add</mat-icon>\r\n        <span>Add New</span>\r\n      </button>\r\n    </mat-menu>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/segment-list/segment-list.component.ts":
/*!********************************************************!*\
  !*** ./src/app/segment-list/segment-list.component.ts ***!
  \********************************************************/
/*! exports provided: SegmentListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SegmentListComponent", function() { return SegmentListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _router_animation_router_animation_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../router-animation/router-animation.component */ "./src/app/router-animation/router-animation.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_services_DatabaseService__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/_services/DatabaseService */ "./src/_services/DatabaseService.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var src_app_dialog_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/dialog.component */ "./src/app/dialog.component.ts");
/* harmony import */ var _order_status_modal_status_modal_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../order/status-modal/status-modal.component */ "./src/app/order/status-modal/status-modal.component.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! moment */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var src_app_localstorage_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/localstorage.service */ "./src/app/localstorage.service.ts");
/* harmony import */ var ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng6-toastr-notifications */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/ng6-toastr-notifications/fesm5/ng6-toastr-notifications.js");
/* harmony import */ var src_app_upload_file_modal_upload_file_modal_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/upload-file-modal/upload-file-modal.component */ "./src/app/upload-file-modal/upload-file-modal.component.ts");












var SegmentListComponent = /** @class */ (function () {
    function SegmentListComponent(rout, service, dialog, dialogs, session, alert, toast) {
        this.rout = rout;
        this.service = service;
        this.dialog = dialog;
        this.dialogs = dialogs;
        this.session = session;
        this.alert = alert;
        this.toast = toast;
        this.tabValue = 'Pending';
        this.fabBtnValue = 'add';
        this.segmentList = [];
        this.segment_status = {};
        this.value = {};
        this.start = 0;
        this.total_page = 0;
        this.pagenumber = 0;
        this.endPage = 0;
        this.excel_data = [];
        this.excelLoader = false;
        this.loader = false;
        this.assign_login_data = {};
        this.logined_user_data = {};
        this.sr_no = 0;
        this.datanotfound = false;
        this.downurl = '';
        this.downurl = service.downloadUrl;
        this.page_limit = service.pageLimit;
        this.today_date = new Date();
        this.assign_login_data = this.session.getSession();
        this.logined_user_data = this.assign_login_data.value.data;
        this.getSegmentList('');
    }
    SegmentListComponent.prototype.ngOnInit = function () {
    };
    SegmentListComponent.prototype.lastBtnValue = function (value) {
        this.fabBtnValue = value;
    };
    SegmentListComponent.prototype.previousPage = function () {
        this.start = this.start - this.page_limit;
        this.getSegmentList('');
    };
    SegmentListComponent.prototype.nextPage = function () {
        this.start = this.start + this.page_limit;
        this.getSegmentList('');
    };
    SegmentListComponent.prototype.clearFilter = function () {
        this.value = {};
        this.getSegmentList('');
    };
    SegmentListComponent.prototype.getSegmentList = function (data) {
        var _this = this;
        if (data.pageIndex > data.previousPageIndex) {
            this.nextPage();
        }
        this.sr_no = data.previousPageIndex;
        if (this.pagenumber > this.total_page) {
            this.pagenumber = this.total_page;
            this.start = this.pageCount - this.page_limit;
        }
        if (this.start < 0) {
            this.start = 0;
        }
        this.loader = true;
        var header = this.service.post_rqst({ 'start': this.start, 'pagelimit': this.page_limit, 'search': this.value }, "Master/getCategoryList");
        header.subscribe((function (result) {
            if (result['statusCode'] == 200) {
                _this.segmentList = result.category_list.segment_list;
                _this.pageCount = result.category_list.segment_count;
                _this.loader = false;
                if (_this.segmentList.length == 0) {
                    _this.datanotfound = true;
                }
                else {
                    _this.datanotfound = false;
                }
                for (var i = 0; i < _this.segmentList.length; i++) {
                    if (_this.segmentList[i].status == '1') {
                        _this.segmentList[i].segment_status = true;
                    }
                    else if (_this.segmentList[i].status == '0') {
                        _this.segmentList[i].segment_status = false;
                    }
                }
                _this.total_page = Math.ceil(_this.pageCount / _this.page_limit);
                _this.pagenumber = Math.ceil(_this.start / _this.page_limit) + 1;
                if (_this.start + _this.page_limit >= _this.pageCount) {
                    _this.endPage = Math.ceil(_this.start + _this.page_limit - (_this.pageCount / _this.page_limit));
                }
                else if (_this.pageCount == 1) {
                    _this.endPage = '1';
                }
                else if (_this.pageCount != 1 && _this.pageCount < _this.page_limit) {
                    _this.endPage = _this.pageCount;
                }
                else {
                    _this.endPage = _this.start + _this.page_limit;
                }
                _this.sr_no = _this.pagenumber - 1;
                _this.sr_no = _this.sr_no * _this.page_limit;
            }
            else {
                _this.toast.errorToastr(result['statusMsg']);
                _this.loader = false;
            }
        }));
    };
    SegmentListComponent.prototype.openDialog = function (category, gst, distributor_discount, direct_dealer_discount, retailer_discount, id, action_type) {
        var _this = this;
        var dialogRef = this.dialog.open(_order_status_modal_status_modal_component__WEBPACK_IMPORTED_MODULE_7__["StatusModalComponent"], {
            width: '600px',
            panelClass: 'cs-modal',
            disableClose: true,
            data: {
                from: 'segment_list_page',
                type: action_type,
                category: category,
                gst: gst,
                distributor_discount: distributor_discount,
                direct_dealer_discount: direct_dealer_discount,
                retailer_discount: retailer_discount,
                id: id
            }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result == true) {
                _this.getSegmentList('');
            }
        });
    };
    SegmentListComponent.prototype.date_format = function () {
        this.value.date_created = moment__WEBPACK_IMPORTED_MODULE_8__(this.value.date_created).format('YYYY-MM-DD');
        this.getSegmentList('');
    };
    SegmentListComponent.prototype.upload_excel = function (type) {
        var _this = this;
        var dialogRef = this.dialog.open(src_app_upload_file_modal_upload_file_modal_component__WEBPACK_IMPORTED_MODULE_11__["UploadFileModalComponent"], {
            width: '500px',
            panelClass: 'cs-modal',
            disableClose: true,
            data: {
                'from': 'uploadSegment',
                'modal_type': type
            }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result == true) {
                _this.getSegmentList('');
            }
        });
    };
    SegmentListComponent.prototype.updateStatus = function (index, id, event) {
        var _this = this;
        if (event.checked == false) {
            this.alert.confirm("You Want To Change Status !").then(function (result) {
                if (result) {
                    if (event.checked == false) {
                        _this.segmentList[index].status = "0";
                    }
                    else {
                        _this.segmentList[index].status = "1";
                    }
                    var value = _this.segmentList[index].status;
                    _this.service.post_rqst({ 'segment_id': id, 'status': value, 'status_changed_by': _this.logined_user_data.id, 'status_changed_by_name': _this.logined_user_data.name }, "Master/segmentStatusChange")
                        .subscribe(function (result) {
                        if (result['statusCode'] == 200) {
                            _this.toast.successToastr(result['statusMsg']);
                            _this.getSegmentList('');
                        }
                        else {
                            _this.toast.errorToastr(result['statusMsg']);
                        }
                    });
                }
            });
        }
        else if (event.checked == true) {
            this.alert.confirm("You Want To Change Status !").then(function (result) {
                if (result) {
                    if (event.checked == false) {
                        _this.segmentList[index].status = "0";
                    }
                    else {
                        _this.segmentList[index].status = "1";
                    }
                    var value = _this.segmentList[index].status;
                    _this.service.post_rqst({ 'segment_id': id, 'status': value, 'status_changed_by': _this.logined_user_data.id, 'status_changed_by_name': _this.logined_user_data.name }, "Master/segmentStatusChange")
                        .subscribe(function (result) {
                        if (result['statusCode'] == 200) {
                            _this.toast.successToastr(result['statusMsg']);
                            _this.getSegmentList('');
                        }
                        else {
                            _this.toast.errorToastr(result['statusMsg']);
                        }
                    });
                }
            });
        }
    };
    SegmentListComponent.prototype.download_excl = function () {
        var _this = this;
        this.service.post_rqst({ 'search': this.value }, "Excel/get_category_list").subscribe((function (result) {
            if (result['msg'] == true) {
                window.open(_this.downurl + result['filename']);
                _this.getSegmentList('');
            }
            else {
            }
        }));
    };
    SegmentListComponent.prototype.refresh = function () {
        this.start = 0;
        this.value = {};
        this.getSegmentList('');
    };
    SegmentListComponent.prototype.deleteCategory = function (id) {
        var _this = this;
        this.dialogs.delete('Product Data !').then(function (result) {
            if (result) {
                var value = { "id": id };
                _this.service.post_rqst(value, "Master/deleteCategory").subscribe(function (result) {
                    if (result) {
                        _this.getSegmentList('');
                    }
                });
            }
        });
    };
    SegmentListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-segment-list',
            template: __webpack_require__(/*! ./segment-list.component.html */ "./src/app/segment-list/segment-list.component.html"),
            animations: [Object(_router_animation_router_animation_component__WEBPACK_IMPORTED_MODULE_2__["slideToTop"])()]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            src_services_DatabaseService__WEBPACK_IMPORTED_MODULE_4__["DatabaseService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialog"],
            src_app_dialog_component__WEBPACK_IMPORTED_MODULE_6__["DialogComponent"],
            src_app_localstorage_service__WEBPACK_IMPORTED_MODULE_9__["sessionStorage"],
            src_app_dialog_component__WEBPACK_IMPORTED_MODULE_6__["DialogComponent"],
            ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_10__["ToastrManager"]])
    ], SegmentListComponent);
    return SegmentListComponent;
}());



/***/ }),

/***/ "./src/app/segment-list/segment-module/segment.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/segment-list/segment-module/segment.module.ts ***!
  \***************************************************************/
/*! exports provided: SegmentModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SegmentModule", function() { return SegmentModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var src_app_auth_component_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/auth-component.guard */ "./src/app/auth-component.guard.ts");
/* harmony import */ var _segment_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../segment-list.component */ "./src/app/segment-list/segment-list.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angular_ng_autocomplete__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! angular-ng-autocomplete */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/angular-ng-autocomplete/fesm5/angular-ng-autocomplete.js");
/* harmony import */ var ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-multiselect-dropdown */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/ng-multiselect-dropdown/fesm5/ng-multiselect-dropdown.js");
/* harmony import */ var ngx_mat_select_search__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-mat-select-search */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/ngx-mat-select-search/fesm5/ngx-mat-select-search.js");
/* harmony import */ var src_app_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/material */ "./src/app/material.ts");
/* harmony import */ var src_app_app_utility_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/app-utility.module */ "./src/app/app-utility.module.ts");













var segmentRoutes = [
    { path: "", component: _segment_list_component__WEBPACK_IMPORTED_MODULE_4__["SegmentListComponent"], canActivate: [src_app_auth_component_guard__WEBPACK_IMPORTED_MODULE_3__["AuthComponentGuard"]], data: { expectedRole: ['1'] } },
];
var SegmentModule = /** @class */ (function () {
    function SegmentModule() {
    }
    SegmentModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_segment_list_component__WEBPACK_IMPORTED_MODULE_4__["SegmentListComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"].forChild(segmentRoutes),
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
                ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_9__["NgMultiSelectDropDownModule"],
                src_app_material__WEBPACK_IMPORTED_MODULE_11__["MaterialModule"],
                angular_ng_autocomplete__WEBPACK_IMPORTED_MODULE_8__["AutocompleteLibModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatDialogModule"],
                ngx_mat_select_search__WEBPACK_IMPORTED_MODULE_10__["NgxMatSelectSearchModule"],
                src_app_app_utility_module__WEBPACK_IMPORTED_MODULE_12__["AppUtilityModule"]
            ]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SegmentModule);
    return SegmentModule;
}());



/***/ })

}]);