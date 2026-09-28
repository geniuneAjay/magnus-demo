(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["gate-pass-gate-pass-module"],{

/***/ "./src/app/gate-pass/gate-pass-detail/gate-pass-detail.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/gate-pass/gate-pass-detail/gate-pass-detail.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-container\">\r\n  <div class=\"tools-container\">\r\n    <a mat-icon-button matTooltip=\"Back\" (click)=\"back()\">\r\n      <i class=\"material-icons\">arrow_back</i>\r\n    </a>\r\n    <h2>Gate Pass Detail</h2>\r\n    <div class=\"left-auto df ac flex-gap-5\">\r\n      <button *ngIf=\"canMarkIn\" mat-raised-button color=\"primary\" (click)=\"confirmMarkIn()\" [disabled]=\"markingIn\">\r\n        <i class=\"material-icons\">login</i>\r\n        {{markingIn ? 'Processing...' : 'Mark In'}}\r\n      </button>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"container pt10 pl10 pr10 pb50\">\r\n    <div class=\"row\">\r\n      <div class=\"col s12 m12 l12\">\r\n\r\n        <!-- Detail Card -->\r\n        <div class=\"card\" *ngIf=\"!isLoading\">\r\n          <div class=\"card-head\">\r\n            <h2>Gate Pass Information</h2>\r\n            <div class=\"left-auto\">\r\n              <strong class=\"yellow-clr\" *ngIf=\"isLeave\">On Leave</strong>\r\n              <strong class=\"red-clr\"    *ngIf=\"!isLeave && !pass.time_in\">Currently Outside</strong>\r\n              <strong class=\"green-clr\"  *ngIf=\"!isLeave && pass.time_in\">Returned</strong>\r\n            </div>\r\n          </div>\r\n          <div class=\"card-body\">\r\n            <div class=\"grid-box\">\r\n\r\n              <div class=\"block-feilds\">\r\n                <span>Gate Pass ID</span>\r\n                <p>#GP-{{pass.id}}</p>\r\n              </div>\r\n\r\n              <div class=\"block-feilds\">\r\n                <span>Name</span>\r\n                <p>{{pass.name | titlecase}}</p>\r\n              </div>\r\n\r\n              <div class=\"block-feilds\">\r\n                <span>Type</span>\r\n                <p>\r\n                  <strong class=\"green-clr\" *ngIf=\"!isLeave\">Visit</strong>\r\n                  <strong class=\"red-clr\"   *ngIf=\"isLeave\">Leave</strong>\r\n                </p>\r\n              </div>\r\n\r\n              <div class=\"block-feilds\">\r\n                <span>Department</span>\r\n                <p>{{pass.department || '---'}}</p>\r\n              </div>\r\n\r\n              <div class=\"block-feilds\">\r\n                <span>Purpose</span>\r\n                <p>{{pass.purpose || '---'}}</p>\r\n              </div>\r\n\r\n              <div class=\"block-feilds\">\r\n                <span>Place (Going to)</span>\r\n                <p>{{pass.place || '---'}}</p>\r\n              </div>\r\n\r\n              <div class=\"block-feilds\">\r\n                <span>{{ isLeave ? 'Leave Marked At' : 'Time Out' }}</span>\r\n                <p>{{formatDateTime(pass.time_out)}}</p>\r\n              </div>\r\n\r\n              <div class=\"block-feilds\" *ngIf=\"!isLeave\">\r\n                <span>Time In</span>\r\n                <p>\r\n                  <strong class=\"yellow-clr\" *ngIf=\"!pass.time_in\">Not yet returned</strong>\r\n                  <span *ngIf=\"pass.time_in\">{{formatDateTime(pass.time_in)}}</span>\r\n                </p>\r\n              </div>\r\n\r\n              <div class=\"block-feilds\">\r\n                <span>{{ isLeave ? 'Leave Photo' : 'Out Photo' }}</span>\r\n                <div class=\"doc-img\">\r\n                  <img src=\"assets/img/no_image.png\" *ngIf=\"!pass.out_image\">\r\n                  <img *ngIf=\"pass.out_image\" [src]=\"uploadUrl + pass.out_image\" style=\"cursor:zoom-in;\"\r\n                       (click)=\"goToImage(uploadUrl + pass.out_image)\">\r\n                </div>\r\n              </div>\r\n\r\n              <div class=\"block-feilds\" *ngIf=\"!isLeave && pass.time_in\">\r\n                <span>In Photo</span>\r\n                <div class=\"doc-img\">\r\n                  <img src=\"assets/img/no_image.png\" *ngIf=\"!pass.in_image\">\r\n                  <img *ngIf=\"pass.in_image\" [src]=\"uploadUrl + pass.in_image\" style=\"cursor:zoom-in;\"\r\n                       (click)=\"goToImage(uploadUrl + pass.in_image)\">\r\n                </div>\r\n              </div>\r\n\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <!-- Skeleton -->\r\n        <div class=\"card\" *ngIf=\"isLoading\">\r\n          <div class=\"sk-head\"><h2>&nbsp;</h2></div>\r\n          <div class=\"card-body\">\r\n            <div class=\"grid-box\">\r\n              <div class=\"sk-box\" *ngFor=\"let row of [].constructor(8)\">&nbsp;</div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/gate-pass/gate-pass-detail/gate-pass-detail.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/gate-pass/gate-pass-detail/gate-pass-detail.component.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/gate-pass/gate-pass-detail/gate-pass-detail.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/gate-pass/gate-pass-detail/gate-pass-detail.component.ts ***!
  \**************************************************************************/
/*! exports provided: GatePassDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GatePassDetailComponent", function() { return GatePassDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_services_DatabaseService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/_services/DatabaseService */ "./src/_services/DatabaseService.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng6-toastr-notifications */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/ng6-toastr-notifications/fesm5/ng6-toastr-notifications.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var src_app_image_module_image_module_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/image-module/image-module.component */ "./src/app/image-module/image-module.component.ts");








var GatePassDetailComponent = /** @class */ (function () {
    function GatePassDetailComponent(serve, route, router, toast, location, dialog) {
        var _this = this;
        this.serve = serve;
        this.route = route;
        this.router = router;
        this.toast = toast;
        this.location = location;
        this.dialog = dialog;
        this.pass = {};
        this.isLoading = false;
        this.markingIn = false;
        this.uploadUrl = '';
        this.uploadUrl = this.serve.uploadUrl + 'gate_pass/';
        this.route.params.subscribe(function (params) { _this.passId = params['id']; });
    }
    GatePassDetailComponent.prototype.ngOnInit = function () { this.getDetail(); };
    GatePassDetailComponent.prototype.getDetail = function () {
        var _this = this;
        this.isLoading = true;
        this.serve.post_rqst({ id: this.passId }, 'GatePass/getGatePassDetail').subscribe(function (result) {
            _this.isLoading = false;
            if (result['statusCode'] == 200) {
                _this.pass = result['result'];
            }
            else {
                _this.toast.errorToastr(result['statusMsg'] || 'Not found');
                _this.location.back();
            }
        }, function () { _this.isLoading = false; });
    };
    Object.defineProperty(GatePassDetailComponent.prototype, "canMarkIn", {
        get: function () { return this.pass && this.pass.type === 'visit' && !this.pass.time_in; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GatePassDetailComponent.prototype, "isLeave", {
        get: function () { return this.pass && this.pass.type === 'leave'; },
        enumerable: true,
        configurable: true
    });
    GatePassDetailComponent.prototype.confirmMarkIn = function () {
        if (!confirm('Mark this person as returned (In)?'))
            return;
        this.doMarkIn();
    };
    GatePassDetailComponent.prototype.doMarkIn = function () {
        var _this = this;
        this.markingIn = true;
        this.serve.post_rqst({ id: this.passId }, 'GatePass/markIn').subscribe(function (result) {
            _this.markingIn = false;
            if (result['statusCode'] == 200) {
                _this.toast.successToastr('Marked in successfully');
                _this.getDetail();
            }
            else {
                _this.toast.errorToastr(result['statusMsg'] || 'Failed');
            }
        }, function () { _this.markingIn = false; });
    };
    GatePassDetailComponent.prototype.formatDateTime = function (dt) {
        if (!dt || dt === '0000-00-00 00:00:00')
            return '---';
        var d = new Date(dt);
        var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        var date = d.getDate() + " " + months[d.getMonth()] + " " + d.getFullYear();
        var h = d.getHours(), m = d.getMinutes();
        var ampm = h >= 12 ? 'PM' : 'AM';
        return date + ", " + (h % 12 || 12).toString().padStart(2, '0') + ":" + m.toString().padStart(2, '0') + " " + ampm;
    };
    GatePassDetailComponent.prototype.goToImage = function (image) {
        if (!image)
            return;
        this.dialog.open(src_app_image_module_image_module_component__WEBPACK_IMPORTED_MODULE_7__["ImageModuleComponent"], {
            panelClass: 'Image-modal',
            data: { image: image, type: 'base64' }
        });
    };
    GatePassDetailComponent.prototype.back = function () { this.location.back(); };
    GatePassDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-gate-pass-detail',
            template: __webpack_require__(/*! ./gate-pass-detail.component.html */ "./src/app/gate-pass/gate-pass-detail/gate-pass-detail.component.html"),
            styles: [__webpack_require__(/*! ./gate-pass-detail.component.scss */ "./src/app/gate-pass/gate-pass-detail/gate-pass-detail.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_services_DatabaseService__WEBPACK_IMPORTED_MODULE_2__["DatabaseService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_4__["ToastrManager"],
            _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"],
            _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatDialog"]])
    ], GatePassDetailComponent);
    return GatePassDetailComponent;
}());



/***/ }),

/***/ "./src/app/gate-pass/gate-pass-list/gate-pass-list.component.html":
/*!************************************************************************!*\
  !*** ./src/app/gate-pass/gate-pass-list/gate-pass-list.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-container\">\r\n  <div class=\"tools-container\">\r\n    <h2>Gate Pass</h2>\r\n    <div class=\"left-auto left-auto df ac flex-gap-5\">\r\n\r\n      <div style=\"display:flex;align-items:center;gap:4px;\">\r\n        <input type=\"date\" [(ngModel)]=\"filterDate\" (change)=\"onDateChange()\"\r\n               style=\"border:1px solid #ccc;border-radius:6px;padding:5px 8px;font-size:13px;height:36px;outline:none;\">\r\n        <button mat-icon-button matTooltip=\"Clear date\" (click)=\"clearDate()\" *ngIf=\"filterDate\"\r\n                style=\"width:28px;height:28px;line-height:28px;\">\r\n          <i class=\"material-icons\" style=\"font-size:16px;\">close</i>\r\n        </button>\r\n      </div>\r\n\r\n      <button mat-icon-button matTooltip=\"Refresh\" (click)=\"refresh()\">\r\n        <i class=\"material-icons\">refresh</i>\r\n      </button>\r\n\r\n      <div class=\"pagination\" *ngIf=\"passes.length > 0\">\r\n        <div class=\"pagination-content\">\r\n          Pages <span>{{pagenumber}}</span> of <span>{{total_page}}</span>\r\n        </div>\r\n        <div class=\"page-nav\">\r\n          <button mat-icon-button matTooltip=\"Previous\" (click)=\"previous()\" [disabled]=\"start == 0\">\r\n            <i class=\"material-icons\">navigate_before</i>\r\n          </button>\r\n          <button mat-icon-button matTooltip=\"Next\" (click)=\"nextPage()\" [disabled]=\"pagenumber == total_page\">\r\n            <i class=\"material-icons\">navigate_next</i>\r\n          </button>\r\n        </div>\r\n      </div>\r\n\r\n      <!-- Plant filter -->\r\n      <div class=\"mat-tabbar\">\r\n        <button mat-button [ngClass]=\"activePlant === '' ? 'active' : ''\" (click)=\"changePlant('')\">All Plants</button>\r\n        <button mat-button [ngClass]=\"activePlant === 'Hosiarpur' ? 'active' : ''\" (click)=\"changePlant('Hosiarpur')\">Hosiarpur</button>\r\n        <button mat-button [ngClass]=\"activePlant === 'Chamarajanagar' ? 'active' : ''\" (click)=\"changePlant('Chamarajanagar')\">Chamarajanagar</button>\r\n      </div>\r\n\r\n      <div class=\"mat-tabbar\">\r\n        <button mat-button [ngClass]=\"activeTab === 'out' ? 'active' : ''\" (click)=\"changeTab('out')\">\r\n          <i class=\"material-icons\">logout</i>Out ({{tabCounts.out_count || 0}})\r\n        </button>\r\n        <button mat-button [ngClass]=\"activeTab === 'in' ? 'active' : ''\" (click)=\"changeTab('in')\">\r\n          <i class=\"material-icons\">login</i>In ({{tabCounts.in_count || 0}})\r\n        </button>\r\n        <button mat-button [ngClass]=\"activeTab === 'leave' ? 'active' : ''\" (click)=\"changeTab('leave')\">\r\n          <i class=\"material-icons\">event_busy</i>Leave ({{tabCounts.leave_count || 0}})\r\n        </button>\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"container container-scroll\">\r\n    <div class=\"cs-table horizontal-scroll\">\r\n\r\n      <div class=\"sticky-head\">\r\n        <div class=\"table-head\">\r\n          <table>\r\n            <tr>\r\n              <th class=\"w50\">S.No</th>\r\n              <th class=\"w90\">Date</th>\r\n              <th class=\"w160\">Name</th>\r\n              <th class=\"w80 text-center\">Type</th>\r\n              <th class=\"w130\">Department</th>\r\n              <th class=\"w150\">Purpose</th>\r\n              <th class=\"w130\">Place</th>\r\n              <th class=\"w110\">Time Out</th>\r\n              <th class=\"w110\">Time In</th>\r\n              <th class=\"w80 text-center\">Status</th>\r\n              <th class=\"w80 text-center\">Photo</th>\r\n            </tr>\r\n          </table>\r\n        </div>\r\n\r\n        <div class=\"table-head border-top\">\r\n          <table>\r\n            <tr>\r\n              <th class=\"w50\">&nbsp;</th>\r\n              <th class=\"w90\">&nbsp;</th>\r\n              <th class=\"w160 pt0 pb0\">\r\n                <div class=\"th-search-acmt\">\r\n                  <mat-form-field class=\"example-full-width cs-input\">\r\n                    <input matInput placeholder=\"Search name / place...\" [(ngModel)]=\"search\" (keyup.enter)=\"onSearch()\">\r\n                  </mat-form-field>\r\n                </div>\r\n              </th>\r\n              <th class=\"w80\">&nbsp;</th>\r\n              <th class=\"w130\">&nbsp;</th>\r\n              <th class=\"w150\">&nbsp;</th>\r\n              <th class=\"w130\">&nbsp;</th>\r\n              <th class=\"w110\">&nbsp;</th>\r\n              <th class=\"w110\">&nbsp;</th>\r\n              <th class=\"w80\">&nbsp;</th>\r\n              <th class=\"w80\">&nbsp;</th>\r\n            </tr>\r\n          </table>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"table-container\">\r\n        <div class=\"table-content\">\r\n          <table>\r\n            <ng-container *ngIf=\"!isLoading\">\r\n              <tr *ngFor=\"let p of passes; let i = index\" (click)=\"goToDetail(p.id)\" style=\"cursor:pointer;\">\r\n                <td class=\"w50\">{{sr_no + i + 1}}</td>\r\n                <td class=\"w90\">{{formatDate(p.created_at)}}</td>\r\n                <td class=\"w160\"><strong>{{p.name | titlecase}}</strong></td>\r\n                <td class=\"w80 text-center\">\r\n                  <strong class=\"green-clr\" *ngIf=\"p.type === 'visit'\">Visit</strong>\r\n                  <strong class=\"red-clr\"   *ngIf=\"p.type === 'leave'\">Leave</strong>\r\n                </td>\r\n                <td class=\"w130\">{{p.department || '---'}}</td>\r\n                <td class=\"w150\">{{p.purpose || '---'}}</td>\r\n                <td class=\"w130\">{{p.place || '---'}}</td>\r\n                <td class=\"w110\">{{formatTime(p.time_out)}}</td>\r\n                <td class=\"w110\">\r\n                  <span *ngIf=\"p.type === 'leave'\" style=\"color:#9ca3af;\">—</span>\r\n                  <strong class=\"yellow-clr\" *ngIf=\"p.type === 'visit' && !p.time_in\">Outside</strong>\r\n                  <span *ngIf=\"p.type === 'visit' && p.time_in\">{{formatTime(p.time_in)}}</span>\r\n                </td>\r\n                <td class=\"w80 text-center\">\r\n                  <strong class=\"red-clr\"    *ngIf=\"p.type === 'visit' && !p.time_in\">Out</strong>\r\n                  <strong class=\"green-clr\"  *ngIf=\"p.type === 'visit' && p.time_in\">In</strong>\r\n                  <strong class=\"yellow-clr\" *ngIf=\"p.type === 'leave'\">Leave</strong>\r\n                </td>\r\n                <td class=\"w80 text-center\">\r\n                  <img *ngIf=\"p.out_image\" [src]=\"uploadUrl + p.out_image\"\r\n                    style=\"width:36px;height:36px;object-fit:cover;border-radius:6px;border:1px solid #e5e7eb;cursor:zoom-in;\"\r\n                    (click)=\"goToImage(uploadUrl + p.out_image); $event.stopPropagation()\">\r\n                  <span *ngIf=\"!p.out_image\" style=\"color:#d1d5db;\">—</span>\r\n                </td>\r\n              </tr>\r\n            </ng-container>\r\n\r\n            <ng-container *ngFor=\"let sk of skelton\">\r\n              <tr class=\"sk-loading\" *ngIf=\"isLoading\">\r\n                <td class=\"w50\"><div>&nbsp;</div></td>\r\n                <td class=\"w90\"><div>&nbsp;</div></td>\r\n                <td class=\"w160\"><div>&nbsp;</div></td>\r\n                <td class=\"w80\"><div>&nbsp;</div></td>\r\n                <td class=\"w130\"><div>&nbsp;</div></td>\r\n                <td class=\"w150\"><div>&nbsp;</div></td>\r\n                <td class=\"w130\"><div>&nbsp;</div></td>\r\n                <td class=\"w110\"><div>&nbsp;</div></td>\r\n                <td class=\"w110\"><div>&nbsp;</div></td>\r\n                <td class=\"w80\"><div>&nbsp;</div></td>\r\n                <td class=\"w80\"><div>&nbsp;</div></td>\r\n              </tr>\r\n            </ng-container>\r\n          </table>\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n\r\n    <ng-container *ngIf=\"passes.length === 0 && datanotfound\">\r\n      <app-not-result-found></app-not-result-found>\r\n    </ng-container>\r\n  </div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/gate-pass/gate-pass-list/gate-pass-list.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/gate-pass/gate-pass-list/gate-pass-list.component.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/gate-pass/gate-pass-list/gate-pass-list.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/gate-pass/gate-pass-list/gate-pass-list.component.ts ***!
  \**********************************************************************/
/*! exports provided: GatePassListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GatePassListComponent", function() { return GatePassListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_services_DatabaseService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/_services/DatabaseService */ "./src/_services/DatabaseService.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng6-toastr-notifications */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/ng6-toastr-notifications/fesm5/ng6-toastr-notifications.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var src_app_image_module_image_module_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/image-module/image-module.component */ "./src/app/image-module/image-module.component.ts");







var GatePassListComponent = /** @class */ (function () {
    function GatePassListComponent(serve, router, toast, dialog) {
        this.serve = serve;
        this.router = router;
        this.toast = toast;
        this.dialog = dialog;
        this.passes = [];
        this.isLoading = false;
        this.datanotfound = false;
        this.skelton = Array(10).fill({});
        this.activeTab = 'out';
        this.activePlant = '';
        this.tabCounts = { all_count: 0, out_count: 0, in_count: 0, leave_count: 0 };
        this.search = '';
        this.filterDate = '';
        this.start = 0;
        this.pagenumber = 1;
        this.total_page = 1;
        this.sr_no = 0;
        this.uploadUrl = '';
        this.page_limit = this.serve.pageLimit;
        this.uploadUrl = this.serve.uploadUrl + 'gate_pass/';
        this.filterDate = this.todayStr();
    }
    GatePassListComponent.prototype.todayStr = function () {
        var d = new Date();
        return d.getFullYear() + "-" + String(d.getMonth() + 1).padStart(2, '0') + "-" + String(d.getDate()).padStart(2, '0');
    };
    GatePassListComponent.prototype.ngOnInit = function () { this.getList(); };
    GatePassListComponent.prototype.changeTab = function (tab) {
        this.activeTab = tab;
        this.start = 0;
        this.getList();
    };
    GatePassListComponent.prototype.changePlant = function (plant) {
        this.activePlant = plant;
        this.start = 0;
        this.getList();
    };
    GatePassListComponent.prototype.getList = function () {
        var _this = this;
        this.isLoading = true;
        this.datanotfound = false;
        if (this.start < 0)
            this.start = 0;
        this.serve.post_rqst({
            tab: this.activeTab,
            plant: this.activePlant,
            search: this.search,
            date_filter: this.filterDate,
            start: this.start,
            pagelimit: this.page_limit
        }, 'GatePass/getGatePassList').subscribe(function (result) {
            _this.isLoading = false;
            if (result['statusCode'] == 200) {
                _this.passes = result['result'] || [];
                _this.tabCounts = result['tabCounts'] || {};
                _this.total_page = Math.ceil((result['count'] || _this.passes.length) / _this.page_limit) || 1;
                _this.pagenumber = Math.ceil(_this.start / _this.page_limit) + 1;
                _this.sr_no = (_this.pagenumber - 1) * _this.page_limit;
                _this.datanotfound = _this.passes.length === 0;
            }
            else {
                _this.datanotfound = true;
            }
        }, function () { _this.isLoading = false; _this.datanotfound = true; });
    };
    GatePassListComponent.prototype.onSearch = function () { this.start = 0; this.getList(); };
    GatePassListComponent.prototype.clearSearch = function () { this.search = ''; this.start = 0; this.getList(); };
    GatePassListComponent.prototype.refresh = function () { this.search = ''; this.filterDate = this.todayStr(); this.start = 0; this.getList(); };
    GatePassListComponent.prototype.onDateChange = function () { this.start = 0; this.getList(); };
    GatePassListComponent.prototype.clearDate = function () { this.filterDate = ''; this.start = 0; this.getList(); };
    GatePassListComponent.prototype.previous = function () { this.start -= this.page_limit; this.getList(); };
    GatePassListComponent.prototype.nextPage = function () { this.start += this.page_limit; this.getList(); };
    GatePassListComponent.prototype.goToDetail = function (id) { this.router.navigate(['/gate-pass/detail', id]); };
    GatePassListComponent.prototype.goToImage = function (image) {
        if (!image)
            return;
        this.dialog.open(src_app_image_module_image_module_component__WEBPACK_IMPORTED_MODULE_6__["ImageModuleComponent"], {
            panelClass: 'Image-modal',
            data: { image: image, type: 'base64' }
        });
    };
    GatePassListComponent.prototype.formatTime = function (dt) {
        if (!dt || dt === '0000-00-00 00:00:00')
            return '---';
        var d = new Date(dt);
        var h = d.getHours(), m = d.getMinutes();
        var ampm = h >= 12 ? 'PM' : 'AM';
        return (h % 12 || 12).toString().padStart(2, '0') + ":" + m.toString().padStart(2, '0') + " " + ampm;
    };
    GatePassListComponent.prototype.formatDate = function (dt) {
        if (!dt || dt === '0000-00-00 00:00:00')
            return '---';
        var d = new Date(dt);
        var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        return d.getDate() + " " + months[d.getMonth()] + " " + d.getFullYear();
    };
    GatePassListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-gate-pass-list',
            template: __webpack_require__(/*! ./gate-pass-list.component.html */ "./src/app/gate-pass/gate-pass-list/gate-pass-list.component.html"),
            styles: [__webpack_require__(/*! ./gate-pass-list.component.scss */ "./src/app/gate-pass/gate-pass-list/gate-pass-list.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_services_DatabaseService__WEBPACK_IMPORTED_MODULE_2__["DatabaseService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_4__["ToastrManager"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialog"]])
    ], GatePassListComponent);
    return GatePassListComponent;
}());



/***/ }),

/***/ "./src/app/gate-pass/gate-pass-routing.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/gate-pass/gate-pass-routing.module.ts ***!
  \*******************************************************/
/*! exports provided: GatePassRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GatePassRoutingModule", function() { return GatePassRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _gate_pass_list_gate_pass_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./gate-pass-list/gate-pass-list.component */ "./src/app/gate-pass/gate-pass-list/gate-pass-list.component.ts");
/* harmony import */ var _gate_pass_detail_gate_pass_detail_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./gate-pass-detail/gate-pass-detail.component */ "./src/app/gate-pass/gate-pass-detail/gate-pass-detail.component.ts");
/* harmony import */ var _auth_component_guard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../auth-component.guard */ "./src/app/auth-component.guard.ts");






var routes = [
    { path: '', component: _gate_pass_list_gate_pass_list_component__WEBPACK_IMPORTED_MODULE_3__["GatePassListComponent"], canActivate: [_auth_component_guard__WEBPACK_IMPORTED_MODULE_5__["AuthComponentGuard"]], data: { expectedRole: ['1'] } },
    { path: 'detail/:id', component: _gate_pass_detail_gate_pass_detail_component__WEBPACK_IMPORTED_MODULE_4__["GatePassDetailComponent"], canActivate: [_auth_component_guard__WEBPACK_IMPORTED_MODULE_5__["AuthComponentGuard"]], data: { expectedRole: ['1'] } }
];
var GatePassRoutingModule = /** @class */ (function () {
    function GatePassRoutingModule() {
    }
    GatePassRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], GatePassRoutingModule);
    return GatePassRoutingModule;
}());



/***/ }),

/***/ "./src/app/gate-pass/gate-pass.module.ts":
/*!***********************************************!*\
  !*** ./src/app/gate-pass/gate-pass.module.ts ***!
  \***********************************************/
/*! exports provided: GatePassModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GatePassModule", function() { return GatePassModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _gate_pass_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./gate-pass-routing.module */ "./src/app/gate-pass/gate-pass-routing.module.ts");
/* harmony import */ var _gate_pass_list_gate_pass_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./gate-pass-list/gate-pass-list.component */ "./src/app/gate-pass/gate-pass-list/gate-pass-list.component.ts");
/* harmony import */ var _gate_pass_detail_gate_pass_detail_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./gate-pass-detail/gate-pass-detail.component */ "./src/app/gate-pass/gate-pass-detail/gate-pass-detail.component.ts");
/* harmony import */ var _material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../material */ "./src/app/material.ts");
/* harmony import */ var _app_utility_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../app-utility.module */ "./src/app/app-utility.module.ts");









var GatePassModule = /** @class */ (function () {
    function GatePassModule() {
    }
    GatePassModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _gate_pass_list_gate_pass_list_component__WEBPACK_IMPORTED_MODULE_5__["GatePassListComponent"],
                _gate_pass_detail_gate_pass_detail_component__WEBPACK_IMPORTED_MODULE_6__["GatePassDetailComponent"],
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _gate_pass_routing_module__WEBPACK_IMPORTED_MODULE_4__["GatePassRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _material__WEBPACK_IMPORTED_MODULE_7__["MaterialModule"],
                _app_utility_module__WEBPACK_IMPORTED_MODULE_8__["AppUtilityModule"]
            ]
        })
    ], GatePassModule);
    return GatePassModule;
}());



/***/ })

}]);