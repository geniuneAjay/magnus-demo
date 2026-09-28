(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["visitor-visitor-module"],{

/***/ "./src/app/visitor/visitor-detail/visitor-detail.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/visitor/visitor-detail/visitor-detail.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-container\">\r\n  <div class=\"tools-container\">\r\n    <a mat-icon-button matTooltip=\"Back\" (click)=\"back()\">\r\n      <i class=\"material-icons\">arrow_back</i>\r\n    </a>\r\n    <h2>Visitor Detail</h2>\r\n    <div class=\"left-auto df ac flex-gap-5\">\r\n      <button *ngIf=\"canEdit && !editMode\" mat-raised-button color=\"primary\" (click)=\"toggleEdit()\">\r\n        <i class=\"material-icons\">edit</i> Edit\r\n      </button>\r\n      <button *ngIf=\"editMode\" mat-button (click)=\"toggleEdit()\">\r\n        <i class=\"material-icons\">close</i> Cancel\r\n      </button>\r\n      <button *ngIf=\"canEdit && !editMode\" mat-raised-button color=\"accent\" (click)=\"confirmMarkOut()\" [disabled]=\"markingOut\">\r\n        <i class=\"material-icons\">logout</i>\r\n        {{markingOut ? 'Processing...' : 'Mark Out'}}\r\n      </button>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"container pt10 pl10 pr10 pb50\">\r\n    <div class=\"row\">\r\n      <div class=\"col s12 m12 l12\">\r\n\r\n        <!-- Detail Card -->\r\n        <div class=\"card\" *ngIf=\"!isLoading && !editMode\">\r\n          <div class=\"card-head\">\r\n            <h2>Visitor Information</h2>\r\n            <div class=\"left-auto\">\r\n              <strong class=\"green-clr\" *ngIf=\"!visitor.time_out\">Currently Inside</strong>\r\n              <strong class=\"red-clr\" *ngIf=\"visitor.time_out\">Checked Out</strong>\r\n            </div>\r\n          </div>\r\n          <div class=\"card-body\">\r\n            <div class=\"grid-box\">\r\n\r\n              <div class=\"block-feilds\">\r\n                <span>Visitor ID</span>\r\n                <p>#VIS-{{visitor.id}}</p>\r\n              </div>\r\n\r\n              <div class=\"block-feilds\">\r\n                <span>Visitor Name</span>\r\n                <p>{{visitor.visitor_name | titlecase}}</p>\r\n              </div>\r\n\r\n              <div class=\"block-feilds\">\r\n                <span>Mobile</span>\r\n                <p>{{visitor.mobile || '---'}}</p>\r\n              </div>\r\n\r\n              <div class=\"block-feilds\">\r\n                <span>Address</span>\r\n                <p>{{visitor.address || '---'}}</p>\r\n              </div>\r\n\r\n              <div class=\"block-feilds\">\r\n                <span>Whom to See</span>\r\n                <p>{{visitor.whom_to_see || '---'}}</p>\r\n              </div>\r\n\r\n              <div class=\"block-feilds\">\r\n                <span>Purpose</span>\r\n                <p>{{visitor.purpose || '---'}}</p>\r\n              </div>\r\n\r\n              <div class=\"block-feilds\">\r\n                <span>Time In</span>\r\n                <p>{{formatDateTime(visitor.time_in)}}</p>\r\n              </div>\r\n\r\n              <div class=\"block-feilds\">\r\n                <span>Time Out</span>\r\n                <p>\r\n                  <strong class=\"yellow-clr\" *ngIf=\"!visitor.time_out\">Not yet checked out</strong>\r\n                  <span *ngIf=\"visitor.time_out\">{{formatDateTime(visitor.time_out)}}</span>\r\n                </p>\r\n              </div>\r\n\r\n              <div class=\"block-feilds\">\r\n                <span>Entry Photo</span>\r\n                <div class=\"doc-img\">\r\n                  <img src=\"assets/img/no_image.png\" *ngIf=\"!visitor.in_image\">\r\n                  <img *ngIf=\"visitor.in_image\" [src]=\"uploadUrl + visitor.in_image\"\r\n                       (click)=\"goToImage(uploadUrl + visitor.in_image)\" style=\"cursor:zoom-in;\">\r\n                </div>\r\n              </div>\r\n\r\n              <div class=\"block-feilds\" *ngIf=\"visitor.time_out\">\r\n                <span>Exit Photo</span>\r\n                <div class=\"doc-img\">\r\n                  <img src=\"assets/img/no_image.png\" *ngIf=\"!visitor.out_image\">\r\n                  <img *ngIf=\"visitor.out_image\" [src]=\"uploadUrl + visitor.out_image\"\r\n                       (click)=\"goToImage(uploadUrl + visitor.out_image)\" style=\"cursor:zoom-in;\">\r\n                </div>\r\n              </div>\r\n\r\n            </div>\r\n\r\n            <div class=\"grid-box single mt16\" *ngIf=\"visitor.remarks\">\r\n              <div class=\"block-feilds\">\r\n                <span>Remarks</span>\r\n                <p>{{visitor.remarks}}</p>\r\n              </div>\r\n            </div>\r\n\r\n          </div>\r\n        </div>\r\n\r\n        <!-- Skeleton -->\r\n        <div class=\"card\" *ngIf=\"isLoading\">\r\n          <div class=\"sk-head\">\r\n            <h2>&nbsp;</h2>\r\n          </div>\r\n          <div class=\"card-body\">\r\n            <div class=\"grid-box\">\r\n              <div class=\"sk-box\" *ngFor=\"let row of [].constructor(8)\">&nbsp;</div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <!-- Edit Form -->\r\n        <div class=\"card\" *ngIf=\"editMode && !isLoading\">\r\n          <div class=\"card-head\">\r\n            <h2>Edit Visitor Info</h2>\r\n          </div>\r\n          <div class=\"card-body\">\r\n            <div class=\"row\">\r\n              <div class=\"col s12 m6 l6\">\r\n                <mat-form-field appearance=\"outline\">\r\n                  <mat-label>Visitor Name *</mat-label>\r\n                  <input matInput [(ngModel)]=\"editData.visitor_name\">\r\n                </mat-form-field>\r\n              </div>\r\n              <div class=\"col s12 m6 l6\">\r\n                <mat-form-field appearance=\"outline\">\r\n                  <mat-label>Mobile Number</mat-label>\r\n                  <input matInput [(ngModel)]=\"editData.mobile\">\r\n                </mat-form-field>\r\n              </div>\r\n              <div class=\"col s12 m6 l6\">\r\n                <mat-form-field appearance=\"outline\">\r\n                  <mat-label>Address</mat-label>\r\n                  <input matInput [(ngModel)]=\"editData.address\">\r\n                </mat-form-field>\r\n              </div>\r\n              <div class=\"col s12 m6 l6\">\r\n                <mat-form-field appearance=\"outline\">\r\n                  <mat-label>Whom to See</mat-label>\r\n                  <input matInput [(ngModel)]=\"editData.whom_to_see\">\r\n                </mat-form-field>\r\n              </div>\r\n              <div class=\"col s12 m6 l6\">\r\n                <mat-form-field appearance=\"outline\">\r\n                  <mat-label>Purpose</mat-label>\r\n                  <mat-select [(ngModel)]=\"editData.purpose\">\r\n                    <mat-option *ngFor=\"let p of purposes\" [value]=\"p\">{{p}}</mat-option>\r\n                  </mat-select>\r\n                </mat-form-field>\r\n              </div>\r\n              <div class=\"col s12 m6 l6\">\r\n                <mat-form-field appearance=\"outline\">\r\n                  <mat-label>Remarks</mat-label>\r\n                  <input matInput [(ngModel)]=\"editData.remarks\">\r\n                </mat-form-field>\r\n              </div>\r\n              <div class=\"col s12\">\r\n                <div class=\"text-right\">\r\n                  <button mat-button (click)=\"toggleEdit()\" style=\"margin-right:8px;\">Cancel</button>\r\n                  <button mat-raised-button color=\"primary\" (click)=\"saveEdit()\" [disabled]=\"saving\">\r\n                    {{saving ? 'Saving...' : 'Save Changes'}}\r\n                  </button>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/visitor/visitor-detail/visitor-detail.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/visitor/visitor-detail/visitor-detail.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/visitor/visitor-detail/visitor-detail.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/visitor/visitor-detail/visitor-detail.component.ts ***!
  \********************************************************************/
/*! exports provided: VisitorDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VisitorDetailComponent", function() { return VisitorDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_services_DatabaseService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/_services/DatabaseService */ "./src/_services/DatabaseService.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng6-toastr-notifications */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/ng6-toastr-notifications/fesm5/ng6-toastr-notifications.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var src_app_image_module_image_module_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/image-module/image-module.component */ "./src/app/image-module/image-module.component.ts");








var VisitorDetailComponent = /** @class */ (function () {
    function VisitorDetailComponent(serve, route, router, toast, location, dialog) {
        var _this = this;
        this.serve = serve;
        this.route = route;
        this.router = router;
        this.toast = toast;
        this.location = location;
        this.dialog = dialog;
        this.visitor = {};
        this.isLoading = false;
        this.markingOut = false;
        this.saving = false;
        this.editMode = false;
        this.editData = {};
        this.purposes = ['Meeting', 'Interview', 'Visitors', 'Others'];
        this.uploadUrl = '';
        this.uploadUrl = this.serve.uploadUrl + 'visitor/';
        this.route.params.subscribe(function (params) {
            _this.visitorId = params['id'];
        });
    }
    VisitorDetailComponent.prototype.ngOnInit = function () {
        this.getDetail();
    };
    VisitorDetailComponent.prototype.getDetail = function () {
        var _this = this;
        this.isLoading = true;
        this.serve.post_rqst({ id: this.visitorId }, 'Visitor/getVisitorDetail').subscribe(function (result) {
            _this.isLoading = false;
            if (result['statusCode'] == 200) {
                _this.visitor = result['result'];
            }
            else {
                _this.toast.errorToastr(result['statusMsg'] || 'Visitor not found');
                _this.location.back();
            }
        }, function (err) {
            _this.isLoading = false;
            _this.toast.errorToastr('Something went wrong');
        });
    };
    Object.defineProperty(VisitorDetailComponent.prototype, "canEdit", {
        get: function () {
            return this.visitor && !this.visitor.time_out;
        },
        enumerable: true,
        configurable: true
    });
    VisitorDetailComponent.prototype.toggleEdit = function () {
        this.editMode = !this.editMode;
        if (this.editMode) {
            this.editData = {
                visitor_name: this.visitor.visitor_name,
                mobile: this.visitor.mobile,
                address: this.visitor.address,
                whom_to_see: this.visitor.whom_to_see,
                purpose: this.visitor.purpose,
                remarks: this.visitor.remarks,
            };
        }
    };
    VisitorDetailComponent.prototype.saveEdit = function () {
        var _this = this;
        if (!this.editData.visitor_name || !this.editData.visitor_name.trim()) {
            this.toast.errorToastr('Visitor name is required');
            return;
        }
        this.saving = true;
        var payload = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({ id: this.visitorId }, this.editData);
        this.serve.post_rqst(payload, 'Visitor/editVisitor').subscribe(function (result) {
            _this.saving = false;
            if (result['statusCode'] == 200) {
                _this.toast.successToastr('Updated successfully');
                _this.editMode = false;
                _this.getDetail();
            }
            else {
                _this.toast.errorToastr(result['statusMsg'] || 'Update failed');
            }
        }, function (err) {
            _this.saving = false;
            _this.toast.errorToastr('Something went wrong');
        });
    };
    VisitorDetailComponent.prototype.confirmMarkOut = function () {
        if (!confirm('Mark this visitor as checked out?'))
            return;
        this.doMarkOut();
    };
    VisitorDetailComponent.prototype.doMarkOut = function () {
        var _this = this;
        this.markingOut = true;
        this.serve.post_rqst({ id: this.visitorId }, 'Visitor/markOut').subscribe(function (result) {
            _this.markingOut = false;
            if (result['statusCode'] == 200) {
                _this.toast.successToastr('Visitor checked out successfully');
                _this.getDetail();
            }
            else {
                _this.toast.errorToastr(result['statusMsg'] || 'Checkout failed');
            }
        }, function (err) {
            _this.markingOut = false;
            _this.toast.errorToastr('Something went wrong');
        });
    };
    VisitorDetailComponent.prototype.formatDateTime = function (dt) {
        if (!dt || dt === '0000-00-00 00:00:00')
            return '---';
        var d = new Date(dt);
        var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        var date = d.getDate() + " " + months[d.getMonth()] + " " + d.getFullYear();
        var h = d.getHours(), m = d.getMinutes();
        var ampm = h >= 12 ? 'PM' : 'AM';
        return date + ", " + (h % 12 || 12).toString().padStart(2, '0') + ":" + m.toString().padStart(2, '0') + " " + ampm;
    };
    VisitorDetailComponent.prototype.back = function () {
        this.location.back();
    };
    VisitorDetailComponent.prototype.goToImage = function (image) {
        if (!image)
            return;
        this.dialog.open(src_app_image_module_image_module_component__WEBPACK_IMPORTED_MODULE_7__["ImageModuleComponent"], {
            panelClass: 'Image-modal',
            data: { image: image, type: 'base64' }
        });
    };
    VisitorDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-visitor-detail',
            template: __webpack_require__(/*! ./visitor-detail.component.html */ "./src/app/visitor/visitor-detail/visitor-detail.component.html"),
            styles: [__webpack_require__(/*! ./visitor-detail.component.scss */ "./src/app/visitor/visitor-detail/visitor-detail.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_services_DatabaseService__WEBPACK_IMPORTED_MODULE_2__["DatabaseService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_4__["ToastrManager"],
            _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"],
            _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatDialog"]])
    ], VisitorDetailComponent);
    return VisitorDetailComponent;
}());



/***/ }),

/***/ "./src/app/visitor/visitor-list/visitor-list.component.html":
/*!******************************************************************!*\
  !*** ./src/app/visitor/visitor-list/visitor-list.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-container\">\r\n  <div class=\"tools-container\">\r\n    <h2>Visitor Register</h2>\r\n    <div class=\"left-auto left-auto df ac flex-gap-5\">\r\n\r\n      <div style=\"display:flex;align-items:center;gap:4px;\">\r\n        <input type=\"date\" [(ngModel)]=\"filterDate\" (change)=\"onDateChange()\"\r\n               style=\"border:1px solid #ccc;border-radius:6px;padding:5px 8px;font-size:13px;height:36px;outline:none;\">\r\n        <button mat-icon-button matTooltip=\"Clear date\" (click)=\"clearDate()\" *ngIf=\"filterDate\"\r\n                style=\"width:28px;height:28px;line-height:28px;\">\r\n          <i class=\"material-icons\" style=\"font-size:16px;\">close</i>\r\n        </button>\r\n      </div>\r\n\r\n      <button mat-icon-button matTooltip=\"Refresh\" (click)=\"refresh()\">\r\n        <i class=\"material-icons\">refresh</i>\r\n      </button>\r\n\r\n      <div class=\"pagination\" *ngIf=\"visitors.length > 0\">\r\n        <div class=\"pagination-content\">\r\n          Pages <span>{{pagenumber}}</span> of <span>{{total_page}}</span>\r\n        </div>\r\n        <div class=\"page-nav\">\r\n          <button mat-icon-button matTooltip=\"Previous\" (click)=\"previous()\" [disabled]=\"start == 0\">\r\n            <i class=\"material-icons\">navigate_before</i>\r\n          </button>\r\n          <button mat-icon-button matTooltip=\"Next\" (click)=\"nextPage()\" [disabled]=\"pagenumber == total_page\">\r\n            <i class=\"material-icons\">navigate_next</i>\r\n          </button>\r\n        </div>\r\n      </div>\r\n\r\n      <!-- Plant filter -->\r\n      <div class=\"mat-tabbar\">\r\n        <button mat-button [ngClass]=\"activePlant === '' ? 'active' : ''\" (click)=\"changePlant('')\">All Plants</button>\r\n        <button mat-button [ngClass]=\"activePlant === 'Hosiarpur' ? 'active' : ''\" (click)=\"changePlant('Hosiarpur')\">Hosiarpur</button>\r\n        <button mat-button [ngClass]=\"activePlant === 'Chamarajanagar' ? 'active' : ''\" (click)=\"changePlant('Chamarajanagar')\">Chamarajanagar</button>\r\n      </div>\r\n\r\n      <div class=\"mat-tabbar\">\r\n        <button mat-button [ngClass]=\"activeTab === 'all' ? 'active' : ''\" (click)=\"changeTab('all')\">\r\n          <i class=\"material-icons\">people</i>All ({{tabCounts.all_count || 0}})\r\n        </button>\r\n        <button mat-button [ngClass]=\"activeTab === 'in' ? 'active' : ''\" (click)=\"changeTab('in')\">\r\n          <i class=\"material-icons\">login</i>In ({{tabCounts.in_count || 0}})\r\n        </button>\r\n        <button mat-button [ngClass]=\"activeTab === 'out' ? 'active' : ''\" (click)=\"changeTab('out')\">\r\n          <i class=\"material-icons\">logout</i>Out ({{tabCounts.out_count || 0}})\r\n        </button>\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n\r\n\r\n  <div class=\"container container-scroll\">\r\n    <div class=\"cs-table horizontal-scroll\">\r\n\r\n      <div class=\"sticky-head\">\r\n        <div class=\"table-head\">\r\n          <table>\r\n            <tr>\r\n              <th class=\"w50\">S.No</th>\r\n              <th class=\"w90\">Date</th>\r\n              <th class=\"w160\">Visitor Name</th>\r\n              <th class=\"w130\">Mobile</th>\r\n              <th class=\"w150\">Whom to See</th>\r\n              <th class=\"w120\">Purpose</th>\r\n              <th class=\"w110\">Time In</th>\r\n              <th class=\"w110\">Time Out</th>\r\n              <th class=\"w80 text-center\">Status</th>\r\n              <th class=\"w80 text-center\">Photo</th>\r\n            </tr>\r\n          </table>\r\n        </div>\r\n\r\n        <div class=\"table-head border-top\">\r\n          <table>\r\n            <tr>\r\n              <th class=\"w50\">&nbsp;</th>\r\n              <th class=\"w90\">&nbsp;</th>\r\n              <th class=\"w160 pt0 pb0\">\r\n                <div class=\"th-search-acmt\">\r\n                  <mat-form-field class=\"example-full-width cs-input\">\r\n                    <input matInput placeholder=\"Search name / mobile...\" [(ngModel)]=\"search\" (keyup.enter)=\"onSearch()\">\r\n                  </mat-form-field>\r\n                </div>\r\n              </th>\r\n              <th class=\"w130\">&nbsp;</th>\r\n              <th class=\"w150\">&nbsp;</th>\r\n              <th class=\"w120\">&nbsp;</th>\r\n              <th class=\"w110\">&nbsp;</th>\r\n              <th class=\"w110\">&nbsp;</th>\r\n              <th class=\"w80\">&nbsp;</th>\r\n              <th class=\"w80\">&nbsp;</th>\r\n            </tr>\r\n          </table>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"table-container\">\r\n        <div class=\"table-content\">\r\n          <table>\r\n            <ng-container *ngIf=\"!isLoading\">\r\n              <tr *ngFor=\"let v of visitors; let i = index\" (click)=\"goToDetail(v.id)\" style=\"cursor:pointer;\">\r\n                <td class=\"w50\">{{sr_no + i + 1}}</td>\r\n                <td class=\"w90\">{{formatDate(v.created_at)}}</td>\r\n                <td class=\"w160\">\r\n                  <strong>{{v.visitor_name | titlecase}}</strong>\r\n                  <p style=\"margin:0;font-size:11px;color:#9ca3af;\" *ngIf=\"v.address\">{{v.address}}</p>\r\n                </td>\r\n                <td class=\"w130\">{{v.mobile || '---'}}</td>\r\n                <td class=\"w150\">{{v.whom_to_see || '---'}}</td>\r\n                <td class=\"w120\">{{v.purpose}}</td>\r\n                <td class=\"w110\">{{formatTime(v.time_in)}}</td>\r\n                <td class=\"w110\">\r\n                  <strong class=\"yellow-clr\" *ngIf=\"!v.time_out\">Inside</strong>\r\n                  <span *ngIf=\"v.time_out\">{{formatTime(v.time_out)}}</span>\r\n                </td>\r\n                <td class=\"w80 text-center\">\r\n                  <strong class=\"green-clr\" *ngIf=\"!v.time_out\">In</strong>\r\n                  <strong class=\"red-clr\" *ngIf=\"v.time_out\">Out</strong>\r\n                </td>\r\n                <td class=\"w80 text-center\">\r\n                  <img *ngIf=\"v.in_image\" [src]=\"uploadUrl + v.in_image\"\r\n                    style=\"width:36px;height:36px;object-fit:cover;border-radius:6px;border:1px solid #e5e7eb;cursor:zoom-in;\"\r\n                    (click)=\"goToImage(uploadUrl + v.in_image); $event.stopPropagation()\">\r\n                  <span *ngIf=\"!v.in_image\" style=\"color:#d1d5db;\">—</span>\r\n                </td>\r\n              </tr>\r\n            </ng-container>\r\n\r\n            <ng-container *ngFor=\"let sk of skelton\">\r\n              <tr class=\"sk-loading\" *ngIf=\"isLoading\">\r\n                <td class=\"w50\"><div>&nbsp;</div></td>\r\n                <td class=\"w90\"><div>&nbsp;</div></td>\r\n                <td class=\"w160\"><div>&nbsp;</div></td>\r\n                <td class=\"w130\"><div>&nbsp;</div></td>\r\n                <td class=\"w150\"><div>&nbsp;</div></td>\r\n                <td class=\"w120\"><div>&nbsp;</div></td>\r\n                <td class=\"w110\"><div>&nbsp;</div></td>\r\n                <td class=\"w110\"><div>&nbsp;</div></td>\r\n                <td class=\"w80\"><div>&nbsp;</div></td>\r\n                <td class=\"w80\"><div>&nbsp;</div></td>\r\n              </tr>\r\n            </ng-container>\r\n          </table>\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n\r\n    <ng-container *ngIf=\"visitors.length === 0 && datanotfound\">\r\n      <app-not-result-found></app-not-result-found>\r\n    </ng-container>\r\n  </div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/visitor/visitor-list/visitor-list.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/visitor/visitor-list/visitor-list.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/visitor/visitor-list/visitor-list.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/visitor/visitor-list/visitor-list.component.ts ***!
  \****************************************************************/
/*! exports provided: VisitorListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VisitorListComponent", function() { return VisitorListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_services_DatabaseService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/_services/DatabaseService */ "./src/_services/DatabaseService.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng6-toastr-notifications */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/ng6-toastr-notifications/fesm5/ng6-toastr-notifications.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var src_app_image_module_image_module_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/image-module/image-module.component */ "./src/app/image-module/image-module.component.ts");







var VisitorListComponent = /** @class */ (function () {
    function VisitorListComponent(serve, router, toast, dialog) {
        this.serve = serve;
        this.router = router;
        this.toast = toast;
        this.dialog = dialog;
        this.visitors = [];
        this.isLoading = false;
        this.datanotfound = false;
        this.skelton = Array(10).fill({});
        this.activeTab = 'all';
        this.activePlant = '';
        this.tabCounts = { all_count: 0, in_count: 0, out_count: 0 };
        this.search = '';
        this.filterDate = '';
        this.start = 0;
        this.pagenumber = 1;
        this.total_page = 1;
        this.count = 0;
        this.sr_no = 0;
        this.uploadUrl = '';
        this.page_limit = this.serve.pageLimit;
        this.uploadUrl = this.serve.uploadUrl + 'visitor/';
        this.filterDate = this.todayStr();
    }
    VisitorListComponent.prototype.todayStr = function () {
        var d = new Date();
        return d.getFullYear() + "-" + String(d.getMonth() + 1).padStart(2, '0') + "-" + String(d.getDate()).padStart(2, '0');
    };
    VisitorListComponent.prototype.ngOnInit = function () {
        this.getVisitorList();
    };
    VisitorListComponent.prototype.changeTab = function (tab) {
        this.activeTab = tab;
        this.start = 0;
        this.getVisitorList();
    };
    VisitorListComponent.prototype.changePlant = function (plant) {
        this.activePlant = plant;
        this.start = 0;
        this.getVisitorList();
    };
    VisitorListComponent.prototype.getVisitorList = function () {
        var _this = this;
        this.isLoading = true;
        this.datanotfound = false;
        if (this.start < 0)
            this.start = 0;
        var payload = {
            tab: this.activeTab,
            plant: this.activePlant,
            search: this.search,
            date_filter: this.filterDate,
            start: this.start,
            pagelimit: this.page_limit
        };
        this.serve.post_rqst(payload, 'Visitor/getVisitorList').subscribe(function (result) {
            _this.isLoading = false;
            if (result['statusCode'] == 200) {
                _this.visitors = result['result'] || [];
                _this.tabCounts = result['tabCounts'] || {};
                _this.count = _this.visitors.length;
                _this.total_page = Math.ceil((result['count'] || _this.count) / _this.page_limit) || 1;
                _this.pagenumber = Math.ceil(_this.start / _this.page_limit) + 1;
                _this.sr_no = (_this.pagenumber - 1) * _this.page_limit;
                _this.datanotfound = _this.visitors.length === 0;
            }
            else {
                _this.datanotfound = true;
            }
        }, function (err) {
            _this.isLoading = false;
            _this.datanotfound = true;
        });
    };
    VisitorListComponent.prototype.onSearch = function () {
        this.start = 0;
        this.getVisitorList();
    };
    VisitorListComponent.prototype.clearSearch = function () {
        this.search = '';
        this.start = 0;
        this.getVisitorList();
    };
    VisitorListComponent.prototype.refresh = function () {
        this.search = '';
        this.filterDate = this.todayStr();
        this.start = 0;
        this.getVisitorList();
    };
    VisitorListComponent.prototype.onDateChange = function () { this.start = 0; this.getVisitorList(); };
    VisitorListComponent.prototype.clearDate = function () { this.filterDate = ''; this.start = 0; this.getVisitorList(); };
    VisitorListComponent.prototype.previous = function () {
        this.start = this.start - this.page_limit;
        this.getVisitorList();
    };
    VisitorListComponent.prototype.nextPage = function () {
        this.start = this.start + this.page_limit;
        this.getVisitorList();
    };
    VisitorListComponent.prototype.goToDetail = function (id) {
        this.router.navigate(['/visitor/detail', id]);
    };
    VisitorListComponent.prototype.goToImage = function (image) {
        if (!image)
            return;
        this.dialog.open(src_app_image_module_image_module_component__WEBPACK_IMPORTED_MODULE_6__["ImageModuleComponent"], {
            panelClass: 'Image-modal',
            data: { image: image, type: 'base64' }
        });
    };
    VisitorListComponent.prototype.formatTime = function (dt) {
        if (!dt || dt === '0000-00-00 00:00:00')
            return '---';
        var d = new Date(dt);
        var h = d.getHours(), m = d.getMinutes();
        var ampm = h >= 12 ? 'PM' : 'AM';
        return (h % 12 || 12).toString().padStart(2, '0') + ":" + m.toString().padStart(2, '0') + " " + ampm;
    };
    VisitorListComponent.prototype.formatDate = function (dt) {
        if (!dt || dt === '0000-00-00 00:00:00')
            return '---';
        var d = new Date(dt);
        var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        return d.getDate() + " " + months[d.getMonth()] + " " + d.getFullYear();
    };
    VisitorListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-visitor-list',
            template: __webpack_require__(/*! ./visitor-list.component.html */ "./src/app/visitor/visitor-list/visitor-list.component.html"),
            styles: [__webpack_require__(/*! ./visitor-list.component.scss */ "./src/app/visitor/visitor-list/visitor-list.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_services_DatabaseService__WEBPACK_IMPORTED_MODULE_2__["DatabaseService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_4__["ToastrManager"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialog"]])
    ], VisitorListComponent);
    return VisitorListComponent;
}());



/***/ }),

/***/ "./src/app/visitor/visitor-routing.module.ts":
/*!***************************************************!*\
  !*** ./src/app/visitor/visitor-routing.module.ts ***!
  \***************************************************/
/*! exports provided: VisitorRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VisitorRoutingModule", function() { return VisitorRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _visitor_list_visitor_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./visitor-list/visitor-list.component */ "./src/app/visitor/visitor-list/visitor-list.component.ts");
/* harmony import */ var _visitor_detail_visitor_detail_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./visitor-detail/visitor-detail.component */ "./src/app/visitor/visitor-detail/visitor-detail.component.ts");
/* harmony import */ var _auth_component_guard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../auth-component.guard */ "./src/app/auth-component.guard.ts");






var routes = [
    { path: '', component: _visitor_list_visitor_list_component__WEBPACK_IMPORTED_MODULE_3__["VisitorListComponent"], canActivate: [_auth_component_guard__WEBPACK_IMPORTED_MODULE_5__["AuthComponentGuard"]], data: { expectedRole: ['1'] } },
    { path: 'detail/:id', component: _visitor_detail_visitor_detail_component__WEBPACK_IMPORTED_MODULE_4__["VisitorDetailComponent"], canActivate: [_auth_component_guard__WEBPACK_IMPORTED_MODULE_5__["AuthComponentGuard"]], data: { expectedRole: ['1'] } }
];
var VisitorRoutingModule = /** @class */ (function () {
    function VisitorRoutingModule() {
    }
    VisitorRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], VisitorRoutingModule);
    return VisitorRoutingModule;
}());



/***/ }),

/***/ "./src/app/visitor/visitor.module.ts":
/*!*******************************************!*\
  !*** ./src/app/visitor/visitor.module.ts ***!
  \*******************************************/
/*! exports provided: VisitorModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "VisitorModule", function() { return VisitorModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _visitor_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./visitor-routing.module */ "./src/app/visitor/visitor-routing.module.ts");
/* harmony import */ var _visitor_list_visitor_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./visitor-list/visitor-list.component */ "./src/app/visitor/visitor-list/visitor-list.component.ts");
/* harmony import */ var _visitor_detail_visitor_detail_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./visitor-detail/visitor-detail.component */ "./src/app/visitor/visitor-detail/visitor-detail.component.ts");
/* harmony import */ var _material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../material */ "./src/app/material.ts");
/* harmony import */ var _app_utility_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../app-utility.module */ "./src/app/app-utility.module.ts");









var VisitorModule = /** @class */ (function () {
    function VisitorModule() {
    }
    VisitorModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _visitor_list_visitor_list_component__WEBPACK_IMPORTED_MODULE_5__["VisitorListComponent"],
                _visitor_detail_visitor_detail_component__WEBPACK_IMPORTED_MODULE_6__["VisitorDetailComponent"],
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _visitor_routing_module__WEBPACK_IMPORTED_MODULE_4__["VisitorRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _material__WEBPACK_IMPORTED_MODULE_7__["MaterialModule"],
                _app_utility_module__WEBPACK_IMPORTED_MODULE_8__["AppUtilityModule"]
            ]
        })
    ], VisitorModule);
    return VisitorModule;
}());



/***/ })

}]);