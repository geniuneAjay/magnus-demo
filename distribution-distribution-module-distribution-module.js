(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["distribution-distribution-module-distribution-module"],{

/***/ "./src/app/distribution/dealer/dealer.component.html":
/*!***********************************************************!*\
  !*** ./src/app/distribution/dealer/dealer.component.html ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-container\">\r\n  <div class=\"tools-container mb0\">\r\n    <div class=\"page-heading\">\r\n      <div class=\"heading-text\">\r\n        <h2>Retailers</h2>\r\n        <p>Total Retailers: {{dr_count}}</p>\r\n      </div>\r\n    \r\n      <div class=\"left-auto\">\r\n      \r\n        <div class=\"uppr-one m-right-data mr10\">\r\n          \r\n        \r\n          \r\n          <div class=\"cs-form date-filter\">\r\n          \r\n          \r\n              <mat-form-field class=\"cs-input\" appearance=\"outline\">\r\n                <mat-label>SORT</mat-label>\r\n                <mat-select name=\"SORT\" #type1=\"ngModel\" [(ngModel)]=\"sort.type1\" (ngModelChange)=\"distributorList()\" required>\r\n                 \r\n                  <mat-option  value=\"ASC\">A TO Z</mat-option>\r\n          <mat-option  value=\"DESC\">Z TO A</mat-option>\r\n         \r\n                </mat-select>\r\n              </mat-form-field>\r\n            </div>\r\n          \r\n        </div>\r\n       \r\n        <div class=\"top-pagination\">\r\n  \r\n          <ul>\r\n                <li class=\"refresh-area mr0 after-none\">\r\n    \r\n                   <a class=\"refresh-btn\" mat-raised-button (click)=\"refresh()\" matTooltip=\"Refresh\"><i class=\"material-icons\"> refresh</i></a>\r\n              </li>\r\n              <li>\r\n                  <p>Pages {{pagenumber}} Of {{total_page}}</p>\r\n              </li>\r\n              <li>\r\n                  <button mat-button class=\"left-btn\" (click)=\"start=start-page_limit; distributorList()\" [disabled]=\"pagenumber == 1\">\r\n          <i class=\"material-icons\">keyboard_arrow_left</i></button>\r\n              </li>\r\n              <li>\r\n                  <input type=\"text\" placeholder=\"GO TO\" name=\"pagenumber\" (keyup.enter)=\"start=(pagenumber*page_limit)-page_limit; distributorList()\" [(ngModel)]=\"pagenumber\" min=\"1\" max={{total_page}}>\r\n              </li>\r\n    \r\n              <li>\r\n                  <button mat-button class=\"right-btn\" (click)=\"start=start+page_limit; distributorList()\" [disabled]=\"pagenumber == total_page\">\r\n            <i class=\"material-icons\">keyboard_arrow_right</i>\r\n          </button>\r\n              </li>\r\n          </ul>\r\n      </div>\r\n          \r\n        </div>\r\n      \r\n    </div>\r\n    <div class=\"uppr-one m-right-data\">\r\n      <ul>\r\n       \r\n\r\n        <li class=\"refresh-area mr0 after-none\">\r\n          <a class=\"refresh-btn\" mat-raised-button (click)=\"distributorList('refresh') \"  matTooltip=\"Refresh\" ><i class=\"material-icons\"> refresh</i></a>\r\n        </li>\r\n      </ul>\r\n      <div  class=\"tabs ml15\">\r\n        <ul>\r\n        <li><a class=\"\" [ngClass]=\"active_tab == 'active' ? 'active' : ''\" (click)=\"active_tab = 'active'; distributorList();\">Active <span class=\"counter\">{{all_count.active}}</span></a></li>\r\n        <li><a class=\"\" [ngClass]=\"active_tab == 'notactive' ? 'active' : ''\" (click)=\"active_tab = 'notactive'; distributorList();\">NotActive <span class=\"counter\">{{all_count.notactive}}</span></a></li>\r\n      </ul>\r\n      </div>\r\n    </div> \r\n    \r\n  </div>\r\n  \r\n  <div class=\"container-outer padding0\">\r\n    <!-- <div *ngIf=\"loader\">\r\n      <mat-spinner class=\"loader\">\r\n        <div><p>Loading....</p></div>\r\n      </mat-spinner>\r\n    </div> -->\r\n    <div class=\"container mb60\" >\r\n      <div class=\"cs-table horizontal-scroll\">\r\n        <div class=\"sticky-head\">\r\n          <div class=\"table-head\">\r\n            <table class=\"sno-border\">\r\n              <tr>\r\n                <th class=\"w50\">S.no.</th>\r\n\r\n                <th class=\"w100\">Date Created</th>\r\n                <th class=\"w100\">Created By</th>\r\n                <th class=\"w170\">Company Name</th>\r\n                <th class=\"w170\">Contact Person</th>\r\n                <th class=\"w100\">Contact Number</th>\r\n                <th class=\"w100\">State Name</th>\r\n                <th class=\"w100\" >Secondary Sale</th>\r\n                <th class=\"w100\">Distributor</th>\r\n                <!-- <th class=\"w100\">Credit Limit</th> -->\r\n                <th class=\"w160\">Assigned To</th>\r\n                <th>Address</th>\r\n\r\n              </tr>\r\n            </table>\r\n          </div>\r\n          <div class=\"table-head border-top\" >\r\n            <table class=\"sno-border\">\r\n              <tr>\r\n                <th class=\"w50\"></th>\r\n\r\n                <th class=\"w100\">\r\n                  <div class=\"th-search-acmt\">\r\n                    <mat-form-field class=\"cs-input date-column infix-bodr\">\r\n                      <input matInput [matDatepicker]=\"picker\" placeholder=\"Date\" name=\"date_created\" [max]=\"today_date\" [(ngModel)]=\"search_val.date_created\" (dateChange)=\"onDate($event)\" readonly>\r\n                      <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\r\n                      <mat-datepicker #picker></mat-datepicker>\r\n                    </mat-form-field>\r\n                  </div>\r\n                </th>\r\n                <th class=\"w100\">\r\n                  <div class=\"th-search-acmt\">\r\n                    <mat-form-field class=\"example-full-width cs-input select-input\">\r\n                      <input matInput placeholder=\"Created By. . .\" type=\"text\" name=\"created_by\" [(ngModel)]=\"search_val.created_by\" (keyup)=\"distributorList()\">\r\n                      \r\n                    </mat-form-field>\r\n                  </div>\r\n                </th>\r\n                <!-- <th class=\"w100\"></th> -->\r\n                <th class=\"w170\">\r\n                  <div class=\"th-search-acmt\">\r\n                    <mat-form-field class=\"example-full-width cs-input select-input\">\r\n                      <input matInput placeholder=\"Company Name. . .\" name=\"company_name\" (keyup)=\"distributorList()\" [(ngModel)]=\"search_val.company_name\" >\r\n                    </mat-form-field>\r\n                  </div>\r\n                </th>    \r\n                <th class=\"w170\">\r\n                  <div class=\"th-search-acmt\">\r\n                    <mat-form-field class=\"example-full-width cs-input select-input\">\r\n                      <input matInput placeholder=\"Contact Person . .\" name=\"contact_person\" (keyup)=\"distributorList()\" [(ngModel)]=\"search_val.contact_person\" >\r\n                    </mat-form-field>\r\n                  </div>\r\n                </th>  \r\n                <th class=\"w100\">\r\n                  <div class=\"th-search-acmt\">\r\n                    <mat-form-field class=\"example-full-width cs-input select-input\">\r\n                      <input matInput placeholder=\"Contact Number.\" name=\"contact_number\" onkeypress=\"return event.charCode >= 48 && event.charCode <= 57\"  maxlength=\"10\"  (keyup)=\"distributorList()\" [(ngModel)]=\"search_val.contact_number\" >\r\n                    </mat-form-field>\r\n                  </div>\r\n                </th>  \r\n                \r\n                <th class=\"w100\">\r\n                  <div class=\"th-search\">\r\n                    <select (change)=\"distributorList()\" name=\"state\" [(ngModel)]=\"search_val.state\">\r\n                      <option value=\"\">Select an Option</option>\r\n                      <option *ngFor=\"let val of state_values\">{{val.state_name}}</option>\r\n                    </select>\r\n                  </div>\r\n                </th>\r\n                <th class=\"w100\"></th>\r\n                <th class=\"w100\">\r\n                  <div class=\"th-search-acmt\">\r\n                    <mat-form-field class=\"example-full-width cs-input select-input\">\r\n                      <input matInput placeholder=\"Distributor\" name=\"distributor\" (keyup)=\"distributorList()\" [(ngModel)]=\"search_val.distributor\" >\r\n                    </mat-form-field>\r\n                  </div>\r\n                </th>\r\n               \r\n                <th class=\"w160\">\r\n                  <div class=\"th-search-acmt\">\r\n                    <mat-form-field class=\"example-full-width cs-input select-input\">\r\n                      <input matInput placeholder=\"Assigned To\" name=\"assign_user\" (keyup)=\"distributorList()\" [(ngModel)]=\"search_val.assign_user\" >\r\n                    </mat-form-field>\r\n                  </div>\r\n                </th> \r\n                <th></th>\r\n              </tr>\r\n            </table>\r\n          </div>\r\n        </div>\r\n        \r\n        <div class=\"table-container\">\r\n          <div class=\"table-content\">\r\n            <table class=\"sno-border\">\r\n              <tr *ngFor=\"let list of distributor_list;let i=index\">\r\n                <td class=\"w50\">{{i+1+start}}</td>\r\n\r\n                <td class=\"w100\">{{list.date_created | date : 'd MMM y'}}</td>\r\n                <td *ngIf=\"!list.created_name\" class=\"w100\">Admin</td>\r\n                <td *ngIf=\"list.created_name\" class=\"w100\">{{list.created_name}}</td>\r\n                <!-- <td class=\"w100\">{{list.dr_code}}</td> -->\r\n                <td class=\"w170\">{{list.company_name}}</td>\r\n                <td class=\"w170\">{{list.contactperson}}</td>\r\n                <td class=\"w100\"><a class=\"link-btn\" mat-button routerLink=\"distribution-detail/{{list.id}}\" routerLinkActive=\"active\">{{list.mobile}}</a></td>\r\n                <td class=\"w100\">{{list.state ? list.state : '--'}}</td>\r\n                <td class=\"w100\">\r\n                  <div class=\"one-line\">\r\n                    {{list.secondary_sale.count}} | &#8377; {{list.secondary_sale.sum}}\r\n                  </div>  \r\n                </td>\r\n                <td class=\"w100\">\r\n                  {{list.assign_distributor}}\r\n                </td>\r\n                <!-- <td class=\"w100\">{{list.credit_limit?list.credit_limit:'--'}}</td> -->\r\n                <td class=\"w160\" >{{list.assign_user}}\r\n                  \r\n                </td>\r\n                <td matTooltip=\"{{list.address}}, {{list.area}}, {{list.district}}, {{list.state}}\" matTooltipPosition=\"above\">\r\n                  <div class=\"one-line\">\r\n                    {{list.address && list.address!='' ? list.address+',' : '--'}} {{list.area && list.area!='' ? list.area+',' :''  | uppercase }} {{list.district && list.district!='' ? list.district+',' : '' }} {{list.state && list.state!='' ? list.state+',' : ''}}\r\n                  </div>\r\n                  <div class=\"action-btns\">\r\n                    <a mat-button class=\"view\" (click)=\"userDetail(list.id)\"><i class=\"material-icons\">remove_red_eye</i> View</a>\r\n                    <button mat-button class=\"delete\" (click)=\"deleteUser(list.id)\"><i class=\"material-icons\">delete_sweep</i> Delete</button>\r\n                  </div>\r\n                </td>  \r\n\r\n\r\n              </tr>\r\n              \r\n              \r\n              <ng-container *ngFor=\"let lead of skelton\">\r\n                <tr class=\"sk-loading sno-border\"  *ngIf=\"loader\">\r\n                  <td class=\"w100\"><div>&nbsp;</div></td>\r\n                  <td class=\"w100\"><div>&nbsp;</div></td>\r\n                  <td class=\"w170\"><div>&nbsp;</div></td>\r\n                  <td class=\"w170\"><div>&nbsp;</div></td>\r\n                  <td class=\"w100\"><div>&nbsp;</div></td>\r\n                  <td class=\"w100\"><div>&nbsp;</div></td>\r\n                  <td class=\"w100\"><div>&nbsp;</div></td>\r\n                  <td class=\"w100\"><div>&nbsp;</div></td>\r\n                  <td class=\"w160\"><div>&nbsp;</div></td>\r\n                  <td><div>&nbsp;</div></td>\r\n\r\n                </tr>\r\n              </ng-container>\r\n            </table>\r\n            <div\r\n            class=\"search-results\"\r\n            data-infinite-scroll\r\n            debounce\r\n            [infiniteScrollDistance]=\"1\"\r\n            [infiniteScrollUpDistance]=\"2\"\r\n            [infiniteScrollThrottle]=\"10\"\r\n            (scrolled)=\"distributorList()\"              \r\n            >\r\n          </div>\r\n          \r\n        </div>\r\n      </div>\r\n      \r\n    </div>\r\n\r\n    <div class=\"no-data\" *ngIf=\"data_not_found==true\">\r\n      <img src=\"assets/img/no-data.svg\" alt=\"\">\r\n      <p>Data not <span>available !</span></p>\r\n    </div>\r\n  </div>\r\n  \r\n  <div class=\"fix-btn\">\r\n    <a class=\"bottom-btn ecxel-btn\" matTooltip=\"Download Excel\" matTooltipPosition=\"above\" mat-raised-button (click)=\"exportAsXLSX()\"><img src=\"assets/img/excel.svg\"></a>\r\n    <a class=\"bottom-btn\"  matTooltip=\"Add New\" matTooltipPosition=\"above\" mat-raised-button routerLink=\"/add-distribution/3\"><i class=\"material-icons\">add</i></a>\r\n  </div>\r\n</div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/distribution/dealer/dealer.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/distribution/dealer/dealer.component.scss ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/distribution/dealer/dealer.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/distribution/dealer/dealer.component.ts ***!
  \*********************************************************/
/*! exports provided: DealerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DealerComponent", function() { return DealerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_services_DatabaseService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/_services/DatabaseService */ "./src/_services/DatabaseService.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_dialog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/dialog.component */ "./src/app/dialog.component.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! moment */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _navigation_navigation_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../navigation/navigation.component */ "./src/app/navigation/navigation.component.ts");
/* harmony import */ var src_app_localstorage_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/localstorage.service */ "./src/app/localstorage.service.ts");


// import { import { slideToTop } from '../../router-animation/router-animation.component';






var DealerComponent = /** @class */ (function () {
    function DealerComponent(serve, route, session, dialog) {
        this.serve = serve;
        this.route = route;
        this.session = session;
        this.dialog = dialog;
        this.data_not_found = false;
        this.skelton = {};
        this.value = {};
        this.distributor_list = [];
        this.start = 0;
        this.page_limit = 50;
        this.data = [];
        this.state_values = [];
        this.dr_list_temp = [];
        this.search_val = {};
        this.all_count = {};
        this.type = 3;
        this.active_tab = 'active';
        this.assign_login_data2 = [];
        this.sort = {};
        this.assign_login_data = [];
        this.tmpsearch1 = {};
        this.exp_data = [];
        this.excel_data = [];
        this.today_date = new Date();
        this.search_val.contact_person = '';
        this.search_val.company_name = '';
        this.search_val.created_by = '';
        this.search_val.date_created = '';
        this.search_val.contact_number = '';
        this.search_val.state = '';
        this.search_val.assign_user = '';
        this.assign_login_data = this.session.getSession();
        this.assign_login_data = this.assign_login_data.value;
        this.assign_login_data2 = this.assign_login_data.data;
    }
    DealerComponent.prototype.ngOnInit = function () {
        this.search_val = this.serve.dealerListSearch;
        this.distributorList();
        this.skelton = new Array(10);
    };
    DealerComponent.prototype.onDate = function (event) {
        this.search_val.date_created = moment__WEBPACK_IMPORTED_MODULE_5__(event.value).format('YYYY-MM-DD');
        this.distributorList();
    };
    DealerComponent.prototype.distributorList = function (action) {
        var _this = this;
        if (action === void 0) { action = ''; }
        this.distributor_list = [];
        if (action == "refresh") {
            this.search_val = {};
            this.distributor_list = [];
        }
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
        this.serve.post_rqst({ 'sort': this.sort, 'user_id': this.assign_login_data2.id, 'start': this.start, 'pagelimit': this.page_limit, 'search': this.search_val, 'type': this.type, 'active_tab': this.active_tab }, "Distributors/distributor")
            .subscribe((function (result) {
            _this.count = result['distributor']['count'];
            _this.state_values = result['distributor']['states'];
            _this.dr_list_temp = result['distributor']['distributor'];
            _this.dr_count = result['distributor']['count'];
            // this.distributor_list = this.distributor_list.concat(result['distributor']['distributor']);
            _this.distributor_list = result['distributor']['distributor'];
            _this.all_count = result['distributor']['all_count'];
            _this.total_page = Math.ceil(_this.dr_count / _this.page_limit);
            _this.pagenumber = Math.ceil(_this.start / _this.page_limit) + 1;
            _this.sort.type = "";
            setTimeout(function () {
                _this.loader = false;
            }, 2000);
            if (_this.distributor_list.length == 0) {
                _this.data_not_found = true;
            }
            else {
                _this.data_not_found = false;
            }
            _this.serve.count_list();
        }));
    };
    DealerComponent.prototype.deleteUser = function (id) {
        var _this = this;
        this.dialog.delete('Distributor Data !').then(function (result) {
            if (result) {
                _this.serve.post_rqst({ "id": id }, "Distributors/distributors_delete").subscribe((function (result) {
                    _this.distributorList('refresh');
                    _this.route.navigate([_navigation_navigation_component__WEBPACK_IMPORTED_MODULE_6__["NavigationComponent"]]);
                }));
            }
        });
    };
    DealerComponent.prototype.refresh = function () {
        this.distributorList();
        this.search_val = "";
    };
    DealerComponent.prototype.userDetail = function (id) {
        this.serve.dealerListSearch = this.search_val;
        this.route.navigate(['/distribution-detail/' + id]);
    };
    DealerComponent.prototype.getItemsList = function (index, search) {
        this.distributor_list = [];
        if (index == 'created_by') {
            for (var i = 0; i < this.dr_list_temp.length; i++) {
                search = search.toLowerCase();
                this.tmpsearch1 = this.dr_list_temp[i]['created_name']['name'].toLowerCase();
                if (this.tmpsearch1.includes(search)) {
                    this.distributor_list.push(this.dr_list_temp[i]);
                }
            }
        }
        if (index != 'created_by') {
            for (var i = 0; i < this.dr_list_temp.length; i++) {
                search = search.toLowerCase();
                this.tmpsearch1 = this.dr_list_temp[i][index].toLowerCase();
                if (this.tmpsearch1.includes(search)) {
                    this.distributor_list.push(this.dr_list_temp[i]);
                }
            }
        }
    };
    DealerComponent.prototype.exportAsXLSX = function () {
        var _this = this;
        this.exp_loader = true;
        this.serve.FileData({ 'user_id': this.assign_login_data2.id, 'search': this.search_val, 'type': this.type }, "Distributors/distributor")
            .subscribe(function (resp) {
            _this.exp_data = resp['distributor']['distributor'];
            for (var i = 0; i < _this.exp_data.length; i++) {
                _this.excel_data.push({ 'Company Name': _this.exp_data[i].company_name, 'Contact Person': _this.exp_data[i].name, Mobile: _this.exp_data[i].mobile, 'WhatsApp No.': _this.exp_data[i].whatsapp_no, Email: _this.exp_data[i].email, 'Address ': _this.exp_data[i].address, 'State ': _this.exp_data[i].state, 'District ': _this.exp_data[i].district, 'City ': _this.exp_data[i].city, 'Pincode ': _this.exp_data[i].pincode, 'Distributor ': _this.exp_data[i].assign_distributor, 'Assigned Sales User': _this.exp_data[i].assign_user, ' Total Secondary Sale': _this.exp_data[i].secondary_sale.count, 'Secondary sale amount': _this.exp_data[i].secondary_sale.sum });
            }
            _this.serve.exportAsExcelFile(_this.excel_data, 'RETAILER SHEET');
            _this.excel_data = [];
            _this.exp_data = [];
        });
    };
    DealerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dealer',
            template: __webpack_require__(/*! ./dealer.component.html */ "./src/app/distribution/dealer/dealer.component.html"),
            styles: [__webpack_require__(/*! ./dealer.component.scss */ "./src/app/distribution/dealer/dealer.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_services_DatabaseService__WEBPACK_IMPORTED_MODULE_2__["DatabaseService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], src_app_localstorage_service__WEBPACK_IMPORTED_MODULE_7__["sessionStorage"], src_app_dialog_component__WEBPACK_IMPORTED_MODULE_4__["DialogComponent"]])
    ], DealerComponent);
    return DealerComponent;
}());



/***/ }),

/***/ "./src/app/distribution/distribution-edit/distribution-edit.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/distribution/distribution-edit/distribution-edit.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"edit-modal\" *ngIf=\"data.type =='address' && data.type !='discount' && data.type !='edit' && data.type !='add' \">\r\n    <form #update_basic=\"ngForm\" name=\"update_basic\"\r\n      (ngSubmit)=\"(update_basic.valid && update_basic.submitted)?update_address(data):''\" validate>\r\n      <p class=\"heading\">Update Address</p>\r\n      <div mat-dialog-content>\r\n        <div class=\"cs-form\">\r\n          <div class=\"row\">\r\n            <div class=\"col s12\">\r\n              <mat-form-field class=\"cs-input\" appearance=\"outline\">\r\n                <mat-label>Street</mat-label>\r\n                <textarea matInput placeholder=\"\" name=\"address\" #address=\"ngModel\" value={{data.address}}\r\n                  [(ngModel)]=\"data.address\"></textarea>\r\n\r\n              </mat-form-field>\r\n            </div>\r\n\r\n\r\n          </div>\r\n\r\n          <div class=\"row\">\r\n            <div class=\"col s12\">\r\n              <div class=\"three-col-grid\">\r\n                <!-- <div class=\"\">\r\n                  <mat-form-field class=\"cs-input\" axppearance=\"outline\" >\r\n                    <mat-label>Country</mat-label>\r\n                    <mat-select name=\"country\" placeholder=\"country\" #country=\"ngModel\" [(ngModel)]=\"data.country\" [ngClass]=\"{'has-error' : country.invalid } \" required>\r\n                      <mat-option disabled=\"\">Select Country</mat-option>\r\n                      <mat-option *ngFor=\"let country of countryList\"(click)=\"getStateList(data.country, 2)\" (keyup.enter)=\"getStateList(data.country, 2)\" value=\"{{country}}\">{{country}}</mat-option>\r\n                    </mat-select>\r\n                    <div class=\"alert alert-danger\" *ngIf=\"!country.valid && update_basic.submitted\">\r\n                      Country is required....\r\n                    </div>\r\n                  </mat-form-field>\r\n                </div> -->\r\n\r\n                <div class=\"\" *ngIf=\"data.country == 'INDIA' || data.country == 'India'\">\r\n                  <mat-form-field class=\"cs-input\" appearance=\"outline\">\r\n                    <mat-label>State</mat-label>\r\n                    <mat-select name=\"state\" placeholder=\"\" #state=\"ngModel\" [(ngModel)]=\"data.state\"\r\n                      [ngClass]=\"{'has-error' : state.invalid } \" required>\r\n                      <mat-option disabled=\"\">Select State</mat-option>\r\n                      <mat-option *ngFor=\"let state of state_list\" (click)=\"getDistrict(data.state, 2)\"\r\n                        (keyup.enter)=\"getDistrict(data.state, 2)\" value=\"{{state}}\">{{state}}</mat-option>\r\n                    </mat-select>\r\n                    <div class=\"alert alert-danger\" *ngIf=\"!data.state && update_basic.submitted\">\r\n                      State is required....\r\n                    </div>\r\n                  </mat-form-field>\r\n                </div>\r\n\r\n                <div class=\"\" *ngIf=\"data.country == 'INDIA' || data.country == 'India'\">\r\n                  <mat-form-field class=\"cs-input\" appearance=\"outline\">\r\n                    <mat-label>District</mat-label>\r\n                    <mat-select name=\"district\" placeholder=\"District\" #district=\"ngModel\" [(ngModel)]=\"data.district\"\r\n                      [ngClass]=\"{'has-error' : district.invalid } \" required>\r\n                      <mat-option disabled=\"\">Select District</mat-option>\r\n                      <mat-option *ngFor=\"let district of district_list\"\r\n                        (click)=\"getCityAreaList(data.district,data.state, 2)\"\r\n                        (keyup.enter)=\"getCityAreaList(data.district,data.state, 2)\" value=\"{{district}}\">{{district}}\r\n                      </mat-option>\r\n                    </mat-select>\r\n                    <div class=\"alert alert-danger\" *ngIf=\"!data.district && update_basic.submitted\">\r\n                      District is required....\r\n                    </div>\r\n                  </mat-form-field>\r\n                </div>\r\n\r\n\r\n                <div class=\"\"  *ngIf=\"data.country == 'INDIA'  || data.country == 'India'\">\r\n                  <mat-form-field class=\"cs-input\" appearance=\"outline\" >\r\n                    <mat-label>City</mat-label>\r\n\r\n                    <mat-select name=\"city\" placeholder=\"City\" #city=\"ngModel\"  [(ngModel)]=\"data.city\">\r\n                      <mat-option disabled=\"\">Select City</mat-option>\r\n                      <mat-option *ngFor=\"let city of city_list\"(keyup.enter)=\"getarea(data.district,data.state,data.city)\"(click)=\"getarea(data.district,data.state,data.city)\" value=\"{{city}}\">{{city}}</mat-option>\r\n\r\n                  </mat-select>\r\n                      <!-- <mat-label>City</mat-label>\r\n                      <input matInput placeholder=\"City ...\" name=\"city\" #city=\"ngModel\" [(ngModel)]=\"data.city\"\r\n                      [ngClass]=\"{'has-error' : city.invalid } \" > -->\r\n                      <div class=\"alert alert-danger\" *ngIf=\"!city.valid && update_basic.submitted\">\r\n                          City is required...\r\n                      </div>\r\n                  </mat-form-field>\r\n                </div>\r\n\r\n                <div class=\"\"  *ngIf=\"data.country == 'INDIA'  || data.country == 'India'\">\r\n                  <mat-form-field class=\"cs-input\" appearance=\"outline\" >\r\n                    <mat-label>Pincode</mat-label>\r\n                    <input matInput name=\"pincode\" placeholder=\"Type Here ...\" #pincode=\"ngModel\" maxlength=\"6\"\r\n                    [(ngModel)]=\"data.pincode\" >\r\n                    <div class=\"alert alert-danger\" *ngIf=\"!pincode.valid && update_basic.submitted\">\r\n                      Pincode is required....\r\n                    </div>\r\n                  </mat-form-field>\r\n                </div>\r\n\r\n                  <div class=\"\" *ngIf=\"(data.country == 'INDIA'  || data.country == 'India')&&data.dr_type != '3'\">\r\n                  <mat-form-field class=\"cs-input\" appearance=\"outline\">\r\n                    <mat-label>Area</mat-label>\r\n                    <mat-select name=\"area\" placeholder=\"area\" #area=\"ngModel\" [(ngModel)]=\"data.area\"\r\n                      [ngClass]=\"{'has-error' : area.invalid } \" >\r\n                      <mat-option disabled=\"\">Select Area</mat-option>\r\n                      <mat-option *ngFor=\"let cityArea of cityAreaList\" value=\"{{cityArea}}\">{{cityArea}}</mat-option>\r\n                    </mat-select>\r\n                    <div class=\"alert alert-danger\" *ngIf=\"!area.valid && update_basic.submitted\">\r\n                      Area is required....\r\n                    </div>\r\n                  </mat-form-field>\r\n                </div>\r\n                <div class=\"\" *ngIf=\"(data.country == 'INDIA'  || data.country == 'India')&&data.dr_type == '3'\">\r\n                  <mat-form-field class=\"cs-input\" appearance=\"outline\">\r\n                    <mat-label>Beat Code</mat-label>\r\n                    <mat-select name=\"area\" placeholder=\"beat_code\" #beat_code=\"ngModel\" [(ngModel)]=\"data.beat_code\"\r\n                      >\r\n                      <mat-option disabled=\"\">Select Beat Code</mat-option>\r\n                      <mat-option *ngFor=\"let cityArea of beat_list\"  (click)=\"getarea1(cityArea.area)\" value=\"{{cityArea.beat_code}}\">{{cityArea.beat_code}}-{{cityArea.area}}</mat-option>\r\n                    </mat-select>\r\n                    \r\n                  </mat-form-field>\r\n                </div>\r\n\r\n\r\n                <!-- <div class=\"\"  *ngIf=\"data.country == 'INDIA'\">\r\n                  <mat-form-field class=\"cs-input\" appearance=\"outline\" >\r\n                    <mat-label>Pincode</mat-label>\r\n                    <mat-select name=\"pincode\" placeholder=\"\" #pincode=\"ngModel\"[(ngModel)]=\"data.pincode\" [ngClass]=\"{'has-error' : pincode.invalid } \" required>\r\n                      <mat-option disabled=\"\">Select Pincode</mat-option>\r\n                      <mat-option *ngFor=\"let pincode of pinCode_list\"value=\"{{pincode}}\">{{pincode}}</mat-option>\r\n                    </mat-select>\r\n                    <div class=\"alert alert-danger\" *ngIf=\"!pincode.valid && update_basic.submitted\">\r\n                      Pincode is required....\r\n                    </div>\r\n                  </mat-form-field>\r\n                </div>\r\n                <div class=\"\" *ngIf=\"data.country != 'INDIA'\">\r\n                  <mat-form-field class=\"cs-input\" appearance=\"outline\" >\r\n                    <mat-label>Pincode</mat-label>\r\n                    <input matInput placeholder=\"\" name=\"pincode\" #pincode=\"ngModel\" [(ngModel)]=\"data.pincode\">\r\n                  </mat-form-field>\r\n                </div>\r\n                 -->\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n        </div>\r\n      </div>\r\n      <div mat-dialog-actions>\r\n        <button mat-button color=\"warn\" [mat-dialog-close]=\"false\">Cancel</button>\r\n        <button mat-button color=\"accent\" type=\"submit\">Save</button>\r\n      </div>\r\n    </form>\r\n\r\n  </div>\r\n\r\n  <div class=\"edit-modal\" *ngIf=\"data.type =='discount' && data.type !='basic_detail' && data.type != 'address' && data.type !='edit'  && data.type !='add'\">\r\n\r\n    <p class=\"heading\">Update Discount</p>\r\n    <div mat-dialog-content>\r\n\r\n      <mat-form-field class=\"example-full-width wp100 cs-field\">\r\n        <input matInput placeholder=\"Type Here ...\" name=\"user\" #user=\"ngModel\" [(ngModel)]=\"data.value\"\r\n          [ngClass]=\"{'has-error' : user.invalid } \" required>\r\n        <div class=\"alert alert-danger\" *ngIf=\"!user.valid && user.touched\">\r\n          field is required....\r\n        </div>\r\n      </mat-form-field>\r\n      <mat-form-field class=\"example-full-width wp100 cs-field\">\r\n        <input matInput placeholder=\"Type Here ...\" name=\"user\" #user=\"ngModel\" [(ngModel)]=\"data.value\"\r\n          [ngClass]=\"{'has-error' : user.invalid } \" required>\r\n        <div class=\"alert alert-danger\" *ngIf=\"!user.valid && user.touched\">\r\n          field is required....\r\n        </div>\r\n      </mat-form-field>\r\n    </div>\r\n\r\n\r\n    <div mat-dialog-actions>\r\n      <button mat-button [mat-dialog-close]=\"false\">Cancel</button>\r\n      <div *ngIf=\"user.valid\">\r\n        <button mat-button (click)=\"update_user()\">Save</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <!-- <div class=\"edit-modal\" *ngIf=\"data.type !='address'  && data.type !='basic_detail' && data.type !='discount' && data.type !='edit' && data.type !='add'\">\r\n      <p class=\"heading\">Update{{data.type}}</p>\r\n      <div mat-dialog-content>\r\n\r\n        <mat-form-field class=\"example-full-width cs-input cs-field\">\r\n          <input matInput placeholder=\"Type Here ...\" name=\"value\" #value=\"ngModel\" [(ngModel)]=\"data.value\" required>\r\n        </mat-form-field>\r\n      </div>\r\n      <div mat-dialog-actions>\r\n        <button mat-raised-button color=\"warn\" [mat-dialog-close]=\"false\">Cancel</button>\r\n        <div >\r\n          <button mat-raised-button color=\"accent\" (click)=\"update()\">Save</button>\r\n        </div>\r\n      </div>\r\n    </div> -->\r\n\r\n    <div class=\"edit-modal\" *ngIf=\"data.type =='basic_detail' && data.type !='discount' && data.type !='edit' && data.type !='add' \">\r\n      <p class=\"heading\">Update Basic Detail</p>\r\n      <form #update_basic=\"ngForm\" name=\"update_basic\" (ngSubmit)=\"(update_basic.valid && update_basic.submitted)?update_address(data):''\" validate>\r\n\r\n        <div mat-dialog-content>\r\n          <div class=\"cs-form\">\r\n            <div class=\"row\">\r\n              <div class=\"col s4\">\r\n                <mat-form-field class=\"cs-input\" appearance=\"outline\" >\r\n                  <mat-label>Company Name</mat-label>\r\n                  <input matInput placeholder=\"Type Here ...\" name=\"company_name\" #company_name=\"ngModel\" value={{data.company_name}} [(ngModel)]=\"data.company_name\" name=\"company_name\" required>\r\n                </mat-form-field>\r\n                <div class=\"alert alert-danger\" *ngIf=\"!company_name.valid && update_basic.submitted\">\r\n                  Company Name is required...\r\n                </div>\r\n              </div>\r\n              <div class=\"col s4\">\r\n                <div class=\"control-field\">\r\n                  <mat-form-field class=\"cs-input\" appearance=\"outline\" >\r\n                    <mat-label>Name</mat-label>\r\n                    <input matInput placeholder=\"Type Here ...\"  name=\"name\" #name=\"ngModel\" value={{data.name}} [(ngModel)]=\"data.name\" >\r\n                  </mat-form-field>\r\n                  <div class=\"alert alert-danger\" *ngIf=\"!name.valid && update_basic.submitted\">\r\n                    Name is required...\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"col s4\">\r\n                <mat-form-field class=\"cs-input\" appearance=\"outline\" >\r\n                  <mat-label>Mobile Number</mat-label>\r\n                  <input  type=\"tel\" maxlength=\"10\" minlength=\"10\" matInput placeholder=\"Type Here ...\" [ngClass]=\"{'has-error' : mobile.invalid } \" name=\"mobile\" #mobile=\"ngModel\" (keypress)=\"MobileNumber($event)\" value={{data.mobile}} [(ngModel)]=\"data.mobile\" required>\r\n                </mat-form-field>\r\n                <div class=\"alert alert-danger\" *ngIf=\"!mobile.valid && update_basic.submitted\">\r\n                  Mobile no. must be 10 digits...\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"row\">\r\n              <div class=\"col s4\">\r\n                <mat-form-field class=\"cs-input\" appearance=\"outline\" >\r\n                  <mat-label>Alternate Mobile Number</mat-label>\r\n                  <input type=\"tel\"  minlength=\"6\" maxlength=\"10\" matInput placeholder=\"Type Here ...\" name=\"landline\" #landline=\"ngModel\" value={{data.landline}} [(ngModel)]=\"data.landline\" (keypress)=\"MobileNumber($event)\" [ngClass]=\"{'has-error' : landline.invalid } \">\r\n                </mat-form-field>\r\n                <div class=\"alert alert-danger\" *ngIf=\"!landline.valid && update_basic.submitted\">\r\n                  Number is Invalid...\r\n                </div>\r\n              </div>\r\n              <div class=\"col s4\">\r\n                <mat-form-field class=\"cs-input\" appearance=\"outline\" >\r\n                  <mat-label>Email ID</mat-label>\r\n                  <input type=\"email\"  minlength=\"6\" matInput placeholder=\"Type Here ...\" name=\"email\" #email=\"ngModel\" value={{data.email}} [(ngModel)]=\"data.email\" pattern=\"[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,3}$\" [ngClass]=\"{'has-error' : email.invalid } \" >\r\n                </mat-form-field>\r\n                <div class=\"alert alert-danger\" *ngIf=\"!email.valid && update_basic.submitted\">\r\n                  Email is Invalid...\r\n                </div>\r\n              </div>\r\n              <div class=\"col s4\">\r\n                <mat-form-field class=\"cs-input\" appearance=\"outline\" >\r\n                  <mat-label>Whatsapp Number</mat-label>\r\n                  <input type=\"tel\"  minlength=\"10\" maxlength=\"10\" matInput placeholder=\"Type Here ...\" name=\"whatsapp_no\" #whatsapp_no=\"ngModel\" value={{data.whatsapp_no}} [(ngModel)]=\"data.whatsapp_no\" (keypress)=\"MobileNumber($event)\" [ngClass]=\"{'has-error' : whatsapp_no.invalid } \">\r\n                </mat-form-field>\r\n                <div class=\"alert alert-danger\" *ngIf=\"!whatsapp_no.valid && whatsapp_no.touched\">\r\n                  Whatsapp is Invalid...\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"row\">\r\n              <div class=\"col s4\">\r\n                <mat-form-field class=\"cs-input\" appearance=\"outline\" >\r\n                  <mat-label>GST Number</mat-label>\r\n                  <input type=\"tel\"  minlength=\"6\" matInput placeholder=\"Type Here ...\" name=\"gst\" #gst=\"ngModel\" value={{data.gst}} [(ngModel)]=\"data.gst\" onkeypress=\"return ((event.charCode >= 48 && event.charCode <= 57) || (event.charCode >= 97 && event.charCode <= 122) || (event.charCode >= 65 && event.charCode <= 90))\" maxlength=\"20\" [ngClass]=\"{'has-error' : gst.invalid } \">\r\n                </mat-form-field>\r\n                <div class=\"alert alert-danger\" *ngIf=\"!gst.valid && update_basic.submitted\">\r\n                  GST is Invalid...\r\n                </div>\r\n              </div>\r\n\r\n              <div class=\"col s4\">\r\n                <mat-form-field class=\"cs-input\" appearance=\"outline\" >\r\n                  <mat-label>D.O.B</mat-label>\r\n                  <input  matInput placeholder=\"Type Here ...\" name=\"dob\" #dob=\"ngModel\" [(ngModel)]=\"data.dob\"  [matDatepicker]=\"picker\"  [max]=\"today_date\" disabled >\r\n                  <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\r\n                  <mat-datepicker #picker  disabled=\"false\"></mat-datepicker>\r\n                </mat-form-field>\r\n              </div>\r\n              <div class=\"col s4\">\r\n                <mat-form-field class=\"cs-input\" appearance=\"outline\" >\r\n                  <mat-label>D.O.A</mat-label>\r\n                  <input matInput placeholder=\"Type Here ...\" name=\"doa\" #doa=\"ngModel\" [(ngModel)]=\"data.doa\"   [matDatepicker]=\"pickers\" [min]=\"data.dob\" [max]=\"today_date\"  disabled>\r\n                  <mat-datepicker-toggle matSuffix [for]=\"pickers\"></mat-datepicker-toggle>\r\n                  <mat-datepicker #pickers  disabled=\"false\"></mat-datepicker>\r\n                </mat-form-field>\r\n              </div>\r\n\r\n\r\n\r\n            </div>\r\n\r\n            <div class=\"row\">\r\n              <div class=\"col s4\">\r\n                <mat-form-field class=\"cs-input\" appearance=\"outline\" >\r\n                  <mat-label>ERP Code</mat-label>\r\n                  <input matInput placeholder=\"credit limit\" name=\"dr_code\" #dr_code=\"ngModel\" value={{data.dr_code}} [(ngModel)]=\"data.dr_code\">\r\n                </mat-form-field>\r\n              </div>\r\n              <div class=\"col s4\" *ngIf=\"data.dr_type == '3'\">\r\n                <mat-form-field class=\"cs-input\" appearance=\"outline\" >\r\n                  <mat-label>Select Distributor</mat-label>\r\n                  <mat-select name=\"assign_distributor\" placeholder=\"\" #assign_distributor=\"ngModel\" [(ngModel)]=\"data.assign_distributor\">\r\n                    <div class=\"search-block\">\r\n                        <input type=\"text\" name=\"dr_namee\" placeholder=\"Search assign distributor..\" (input)=\"filter_dr(dr_name)\" #dr_namee=\"ngModel\" [(ngModel)]=\"dr_name\">\r\n                      </div>\r\n                  <!-- <mat-option disabled=\"\">Select assign_distributor</mat-option> -->\r\n                  <mat-option *ngFor=\"let dr of drlist\" value=\"{{dr.id}}\">{{dr.company_name}}</mat-option>\r\n                </mat-select>\r\n                </mat-form-field>\r\n              </div>\r\n              <div class=\"col s4\" >\r\n                <mat-form-field class=\"cs-input\" appearance=\"outline\" >\r\n                  <mat-label>Select Type</mat-label>\r\n                  <mat-select placeholder=\"Type Here ...\" name=\"change_type\" #change_type=\"ngModel\" [(ngModel)]=\"data.change_type\"(keyup.enter)=\"update_distribution(data.change_type)\">\r\n                    <mat-option disabled=\"\">Select Type</mat-option>\r\n                    <mat-option value=\"1\"(click)=\"update_distribution(data.change_type)\">Distributor</mat-option>\r\n                    <mat-option value=\"2\"(click)=\"update_distribution(data.change_type)\">Dealer</mat-option>\r\n                    <mat-option value=\"3\"(click)=\"update_distribution(data.change_type)\">Retailer</mat-option>\r\n                    <mat-option value=\"4\"(click)=\"update_distribution(data.change_type)\">Project</mat-option>\r\n\r\n                  </mat-select>\r\n                </mat-form-field>\r\n              </div>\r\n            </div>\r\n            <!-- <div class=\"col s6\" *ngIf=\"!(data.dr_type==1 || data.dr_type==7)\" >\r\n              <div class=\"territory-info\">\r\n                  <div class=\"head\" [ngClass]=\"{'active':active.dist == true}\">\r\n                      <h2>Distributors/Dealers</h2>\r\n                      <i class=\"material-icons search-icon right20\" (click)=\"active.dist = true\"  matRipple>search</i>\r\n                      <div class=\"item-input\">\r\n                          <input type=\"text\" placeholder=\"search...\" name=\"distributor\" class=\"fix-search\" (input)=\"getDistributorSearch(data.distributor)\" #distributor=\"ngModel\" [(ngModel)]=\"data.distributor\" >\r\n                          <i class=\"material-icons close-icon\" (click)=\"active.dist = false;search.distributor = '';getDistributorSearch(data.distributor)\" matRipple>clear</i>\r\n                      </div>\r\n                  </div>\r\n\r\n                  <div class=\"cs-logs\">\r\n                      <div class=\"cs-checkbox\">\r\n                          <div class=\"checkbox-outer\">\r\n                              <section class=\"checkbox-inner\"   >\r\n                                  <ng-container *ngFor=\"let list of drlist ;let index=index \" aria-required=\"true\">\r\n                                      <mat-checkbox class=\"check-list\" [checked]=\"list.check\" (change)=\"distributor_assign_check(list.id,index,$event)\" value=\"{{list.id}}\">{{list.company_name}}</mat-checkbox>\r\n                                  </ng-container>\r\n                              </section>\r\n                          </div>\r\n                      </div>\r\n                  </div>\r\n              </div>\r\n\r\n          </div> -->\r\n\r\n            <!-- <div class=\"row\">\r\n              <div class=\"col s4\">\r\n                <mat-form-field class=\"cs-input\" appearance=\"outline\" >\r\n                  <mat-label>Username</mat-label>\r\n                  <input type=\"text\"  matInput placeholder=\"Type Here ...\" name=\"username\" #username=\"ngModel\" value={{data.username}} [(ngModel)]=\"data.username\"  >\r\n                </mat-form-field>\r\n              </div>\r\n\r\n              <div class=\"col s4\">\r\n                <mat-form-field class=\"cs-input\" appearance=\"outline\" >\r\n                  <mat-label>Password</mat-label>\r\n                  <input type=\"text\"  matInput placeholder=\"Type Here ...\" name=\"password\" #password=\"ngModel\" value={{data.password}} [(ngModel)]=\"data.password\"  >\r\n                </mat-form-field>\r\n              </div>\r\n\r\n              <div class=\"col s4\">\r\n                <mat-form-field class=\"cs-input\" appearance=\"outline\" >\r\n                  <mat-label>Target</mat-label>\r\n                  <input type=\"text\"  matInput placeholder=\"Type Here ...\" name=\"target\" #target=\"ngModel\" value={{data.target}} [(ngModel)]=\"data.target\"  >\r\n                </mat-form-field>\r\n              </div>\r\n\r\n            </div>\r\n             -->\r\n            <!-- <div class=\"row\">\r\n\r\n              <div class=\"col s4\" *ngIf=\"data.ledger_length == 0\">\r\n                <mat-form-field class=\"cs-input\" appearance=\"outline\" >\r\n                  <mat-label>Opening Balance</mat-label>\r\n                  <input type=\"text\"  matInput placeholder=\"Type Here ...\" name=\"dr_opening_balance\" #dr_opening_balance=\"ngModel\" value={{data.opening_balance}} [(ngModel)]=\"data.dr_opening_balance\"  >\r\n                </mat-form-field>\r\n              </div>\r\n              <div class=\"col s4\" >\r\n                <mat-form-field class=\"cs-input\" appearance=\"outline\" >\r\n                  <mat-label>Customer Code</mat-label>\r\n                  <input type=\"text\"  matInput placeholder=\"Type Here ...\" name=\"dr_code\" #dr_code=\"ngModel\" value={{data.dr_code}} [(ngModel)]=\"data.dr_code\"  >\r\n                </mat-form-field>\r\n              </div>\r\n              <div class=\"col s4\" >\r\n                  <mat-form-field class=\"cs-input\" appearance=\"outline\" >\r\n                    <mat-label>Customer Code</mat-label>\r\n                    <input type=\"text\"  matInput placeholder=\"Type Here ...\" name=\"category_code\" #category_code=\"ngModel\" value={{data.category_code}} [(ngModel)]=\"data.category_code\"  >\r\n                  </mat-form-field>\r\n                </div>\r\n\r\n            </div> -->\r\n          </div>\r\n        </div>\r\n        <div mat-dialog-actions>\r\n          <button mat-button color=\"warn\" [mat-dialog-close]=\"false\">Cancel</button>\r\n          <button mat-button color=\"accent\" type=\"submit\">Save</button>\r\n        </div>\r\n      </form>\r\n\r\n    </div>\r\n\r\n\r\n  <!--\r\n      <div class=\"edit-modal\" *ngIf=\"data.type !='address' && data.type !='basic_detail'&& data.type !='discount' && data.type !='edit' && data.type !='add' \"\r\n      >\r\n      <p class=\"heading\">Update Discount</p>\r\n      <form #update_basic=\"ngForm\" name=\"update_basic\" (ngSubmit)=\"(update_basic.valid && update_basic.submitted)?update_discount(data.category,data.dr_id,data.discount):''\" validate>\r\n        <div mat-dialog-content>\r\n          <div class=\"from-fields\">\r\n\r\n            <div class=\"row\">\r\n\r\n\r\n              <h3>{{data.category}}</h3>\r\n              <div class=\"col s4\">\r\n                <div class=\"control-field\">\r\n                  <mat-form-field class=\"cs-input\" appearance=\"outline\" >\r\n                    <input  type=\"number\"  matInput placeholder=\"Discount\" [ngClass]=\"{'has-error' : discount.invalid } \" name=\"discount\" #discount=\"ngModel\" (keypress)=\"MobileNumber($event)\" value={{data.discount}} [(ngModel)]=\"data.discount\" maxlength=\"2\" minlength=\"1\" required>\r\n                  </mat-form-field>\r\n                  <div class=\"alert alert-danger\" *ngIf=\"!discount.valid && update_basic.submitted\">\r\n                    Discount Required...\r\n                  </div>\r\n\r\n                </div>\r\n              </div>\r\n\r\n            </div>\r\n\r\n\r\n          </div>\r\n        </div>\r\n        <div mat-dialog-actions>\r\n          <button mat-raised-button color=\"warn\" [mat-dialog-close]=\"false\">Cancel</button>\r\n          <button mat-raised-button color=\"accent\" type=\"submit\">Save</button>\r\n        </div>\r\n      </form>\r\n\r\n    </div> -->\r\n\r\n\r\n    <div class=\"edit-modal\" *ngIf=\"data.type =='addContact' && data.type !='discount' && data.type !='edit' && data.type !='add' \">\r\n      <p class=\"heading\">Add Contact</p>\r\n      <form #update_contact=\"ngForm\" name=\"update_contact\" validate>\r\n        <div mat-dialog-content>\r\n          <div class=\"cs-form\">\r\n\r\n          </div>\r\n        </div>\r\n        <div mat-dialog-actions>\r\n          <button mat-button color=\"warn\" [mat-dialog-close]=\"false\">Cancel</button>\r\n          <button mat-button color=\"accent\" type=\"submit\">Save</button>\r\n        </div>\r\n      </form>\r\n\r\n    </div>\r\n"

/***/ }),

/***/ "./src/app/distribution/distribution-edit/distribution-edit.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/distribution/distribution-edit/distribution-edit.component.scss ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/distribution/distribution-edit/distribution-edit.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/distribution/distribution-edit/distribution-edit.component.ts ***!
  \*******************************************************************************/
/*! exports provided: DistributionEditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DistributionEditComponent", function() { return DistributionEditComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var src_services_DatabaseService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/_services/DatabaseService */ "./src/_services/DatabaseService.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! moment */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng6-toastr-notifications */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/ng6-toastr-notifications/fesm5/ng6-toastr-notifications.js");
/* harmony import */ var src_app_localstorage_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/localstorage.service */ "./src/app/localstorage.service.ts");








var DistributionEditComponent = /** @class */ (function () {
    function DistributionEditComponent(data, serve, rout, dialog2, session, Toastr) {
        this.data = data;
        this.serve = serve;
        this.rout = rout;
        this.dialog2 = dialog2;
        this.session = session;
        this.Toastr = Toastr;
        this.secondary_lead_list = [];
        this.state_list = [];
        this.district_list = [];
        this.cityAreaList = [];
        this.city_list = [];
        this.pinCode_list = [];
        this.countryList = [];
        this.empData = [];
        // tmpEmpData: any = [];
        this.empData2 = [];
        this.showErr = false;
        this.showArrErr = false;
        this.active = {};
        this.drlist = [];
        this.tmp_drlist = [];
        this.tmpsearchdr = {};
        this.beat_list = [];
        this.today_date = new Date().toISOString().slice(0, 10);
        this.distributorList();
        this.getCountryList();
        this.getStateList(data.country, 1);
        this.getDistrict(data.state, 1);
        this.getCityAreaList(data.district, data.state, 1);
        this.getarea(data.district, data.state, data.city);
        this.getPinCodeList(data.district, data.state, data.city, 1);
        this.getbeatlist(data.id);
        this.data.area = this.data.area;
        this.empData.name = this.data.name;
        this.empData.mobile = this.data.mobile;
        this.empData.whatsapp_no = this.data.whatsapp_no;
        this.empData.email = this.data.email;
        this.empData.dob = this.data.dob;
        this.empData.doa = this.data.doa;
        this.userData = JSON.parse(localStorage.getItem('st_user'));
        this.userId = this.userData['data']['id'];
        this.userName = this.userData['data']['name'];
    }
    DistributionEditComponent.prototype.ngOnInit = function () {
    };
    DistributionEditComponent.prototype.update = function () { };
    DistributionEditComponent.prototype.distributorList = function () {
        var _this = this;
        this.serve.post_rqst('', "Distributors/distributorsList").subscribe((function (result) {
            _this.drlist = result;
            _this.tmp_drlist = _this.drlist;
            _this.secondary_lead_list = _this.drlist;
        }));
    };
    DistributionEditComponent.prototype.filter_dr = function (dr_name) {
        this.tmpsearch = '';
        this.drlist = [];
        for (var i = 0; i < this.secondary_lead_list.length; i++) {
            dr_name = dr_name.toLowerCase();
            this.tmpsearch = this.secondary_lead_list[i]['company_name'].toLowerCase();
            if (this.tmpsearch.includes(dr_name)) {
                this.drlist.push(this.secondary_lead_list[i]);
            }
        }
    };
    DistributionEditComponent.prototype.getbeatlist = function (id) {
        var _this = this;
        this.serve.post_rqst({ 'state': this.data.state, 'district': this.data.district }, "Travel/beat_code_list_according_to_city").subscribe((function (response) {
            _this.beat_list = response['beat_code_list'];
        }));
    };
    DistributionEditComponent.prototype.update_distribution = function () {
        var _this = this;
        this.serve.post_rqst({ 'id': this.data.id, 'type': this.data.change_type, 'login_id': this.userId }, "Lead/update_type").subscribe((function (result) {
            _this.dialog2.closeAll();
            // this.serve.count_list();
        }));
    };
    DistributionEditComponent.prototype.getarea1 = function (data1) {
        this.data.area = data1;
    };
    DistributionEditComponent.prototype.update_address = function (data) {
        var _this = this;
        this.data.area = this.data.area;
        this.data.cityArea = '';
        this.data.uid = this.userId;
        this.data.uname = this.userName;
        this.serve.post_rqst(data, "Distributors/distributors_address_update").subscribe((function (result) {
            _this.dialog2.closeAll();
        }));
        this.update_distribution();
    };
    DistributionEditComponent.prototype.update_basic_address = function (data) {
        var _this = this;
        this.data.doa = moment__WEBPACK_IMPORTED_MODULE_5__(this.data.doa).format('YYYY-MM-DD');
        this.data.dob = moment__WEBPACK_IMPORTED_MODULE_5__(this.data.dob).format('YYYY-MM-DD');
        if (this.data.doa > this.data.dob) {
            this.serve.post_rqst({ data: data, 'uid': this.userId, 'uname': this.userName }, "Distributors/distributors_address_update").subscribe((function (result) {
                _this.dialog2.closeAll();
            }));
        }
        else {
            this.Toastr.errorToastr("Wrong Data");
        }
    };
    DistributionEditComponent.prototype.toggleterritory = function (key, action) {
        if (action == 'open') {
            this.active[key] = true;
        }
        if (action == 'close') {
            this.active[key] = false;
        }
    };
    DistributionEditComponent.prototype.getCountryList = function () {
        var _this = this;
        this.serve.post_rqst(0, "User/country_list").subscribe((function (response) {
            _this.countryList = response['query']['country_name'];
        }));
    };
    DistributionEditComponent.prototype.getStateList = function (country_name, src) {
        var _this = this;
        this.serve.post_rqst(0, "User/state_user_list").subscribe((function (response) {
            _this.state_list = response['query']['state_name'];
            // this.state_list=this.state
        }));
    };
    DistributionEditComponent.prototype.getDistrict = function (state_name, src) {
        var _this = this;
        if (src == 2) {
            this.data.district = '';
            this.data.cityArea = '';
            this.data.city = '';
            this.data.pincode = '';
        }
        this.serve.post_rqst(state_name, "User/district_user_list").subscribe((function (response) {
            _this.district_list = response['query']['district_name'];
        }));
    };
    DistributionEditComponent.prototype.MobileNumber = function (event) {
        var pattern = /[0-9\+\-\ ]/;
        var inputChar = String.fromCharCode(event.charCode);
        if (event.keyCode != 8 && !pattern.test(inputChar)) {
            event.preventDefault();
        }
    };
    DistributionEditComponent.prototype.getCityAreaList = function (district, state, src) {
        var _this = this;
        if (src == 2) {
            this.data.cityArea = '';
            this.data.city = '';
            this.data.pincode = '';
        }
        var value = { "state": state, "district": district };
        this.serve.post_rqst(value, "User/city_user_list").subscribe((function (response) {
            _this.city_list = response['query']['city'];
        }));
    };
    DistributionEditComponent.prototype.getarea = function (district, state, city) {
        var _this = this;
        var value1 = { "state": state, "district": district, 'city': city };
        this.serve.post_rqst(value1, "User/area_user_list").subscribe((function (response) {
            _this.cityAreaList = response['query']['area'];
        }));
    };
    DistributionEditComponent.prototype.getPinCodeList = function (district, state, city, src) {
        var _this = this;
        if (src == 2) {
            this.data.pincode = '';
        }
        var value = { "state": state, "district": district, "city": city };
        this.serve.post_rqst(value, "User/pincode_user_list").subscribe((function (response) {
            _this.pinCode_list = response['query']['pincode'];
        }));
    };
    DistributionEditComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-distribution-edit',
            template: __webpack_require__(/*! ./distribution-edit.component.html */ "./src/app/distribution/distribution-edit/distribution-edit.component.html"),
            styles: [__webpack_require__(/*! ./distribution-edit.component.scss */ "./src/app/distribution/distribution-edit/distribution-edit.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object, src_services_DatabaseService__WEBPACK_IMPORTED_MODULE_3__["DatabaseService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"],
            src_app_localstorage_service__WEBPACK_IMPORTED_MODULE_7__["sessionStorage"],
            ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_6__["ToastrManager"]])
    ], DistributionEditComponent);
    return DistributionEditComponent;
}());



/***/ }),

/***/ "./src/app/distribution/distribution-module/distribution.module.ts":
/*!*************************************************************************!*\
  !*** ./src/app/distribution/distribution-module/distribution.module.ts ***!
  \*************************************************************************/
/*! exports provided: DistributionModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DistributionModule", function() { return DistributionModule; });
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
/* harmony import */ var src_app_auth_component_guard__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/auth-component.guard */ "./src/app/auth-component.guard.ts");
/* harmony import */ var src_app_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/material */ "./src/app/material.ts");
/* harmony import */ var _add_distribution_add_distribution_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../add-distribution/add-distribution.component */ "./src/app/distribution/add-distribution/add-distribution.component.ts");
/* harmony import */ var _distribution_detail_distribution_detail_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../distribution-detail/distribution-detail.component */ "./src/app/distribution/distribution-detail/distribution-detail.component.ts");
/* harmony import */ var _distribution_list_distribution_list_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../distribution-list/distribution-list.component */ "./src/app/distribution/distribution-list/distribution-list.component.ts");
/* harmony import */ var _distribution_order_list_distribution_order_list_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../distribution-order-list/distribution-order-list.component */ "./src/app/distribution/distribution-order-list/distribution-order-list.component.ts");
/* harmony import */ var _distribution_edit_distribution_edit_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../distribution-edit/distribution-edit.component */ "./src/app/distribution/distribution-edit/distribution-edit.component.ts");
/* harmony import */ var _agm_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @agm/core */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@agm/core/fesm5/agm-core.js");
/* harmony import */ var _distributor_model_distributor_model_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../distributor-model/distributor-model.component */ "./src/app/distribution/distributor-model/distributor-model.component.ts");
/* harmony import */ var src_app_invoice_list_modal_invoice_list_modal_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! src/app/invoice-list-modal/invoice-list-modal.component */ "./src/app/invoice-list-modal/invoice-list-modal.component.ts");
/* harmony import */ var ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ngx-infinite-scroll */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/ngx-infinite-scroll/modules/ngx-infinite-scroll.es5.js");
/* harmony import */ var _dealer_dealer_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../dealer/dealer.component */ "./src/app/distribution/dealer/dealer.component.ts");
/* harmony import */ var src_app_order_order_detail_order_detail_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! src/app/order/order-detail/order-detail.component */ "./src/app/order/order-detail/order-detail.component.ts");
/* harmony import */ var src_app_order_secondary_order_detail_secondary_order_detail_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! src/app/order/secondary-order-detail/secondary-order-detail.component */ "./src/app/order/secondary-order-detail/secondary-order-detail.component.ts");
/* harmony import */ var _dist_primary_order_add_dist_primary_order_add_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../dist-primary-order-add/dist-primary-order-add.component */ "./src/app/distribution/dist-primary-order-add/dist-primary-order-add.component.ts");
/* harmony import */ var _secondary_order_add_secondary_order_add_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../secondary-order-add/secondary-order-add.component */ "./src/app/distribution/secondary-order-add/secondary-order-add.component.ts");
/* harmony import */ var src_app_otp_convert_to_distributor_convert_to_distributor_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! src/app/otp/convert-to-distributor/convert-to-distributor.component */ "./src/app/otp/convert-to-distributor/convert-to-distributor.component.ts");
/* harmony import */ var src_app_billing_detail_billing_detail_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! src/app/billing-detail/billing-detail.component */ "./src/app/billing-detail/billing-detail.component.ts");
/* harmony import */ var src_app_support_support_status_support_status_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! src/app/support/support-status/support-status.component */ "./src/app/support/support-status/support-status.component.ts");
/* harmony import */ var _update_kyc_update_kyc_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ../update-kyc/update-kyc.component */ "./src/app/distribution/update-kyc/update-kyc.component.ts");
/* harmony import */ var src_app_addinventory_addinventory_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! src/app/addinventory/addinventory.component */ "./src/app/addinventory/addinventory.component.ts");
/* harmony import */ var _influencer_activity_report_dialog_influencer_activity_report_dialog_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ../influencer-activity-report-dialog/influencer-activity-report-dialog.component */ "./src/app/distribution/influencer-activity-report-dialog/influencer-activity-report-dialog.component.ts");
































// import { ChangeStatusComponent } from 'src/app/purchase/change-status/change-status.component';
// import { InventoryTransactionModalComponent } from 'src/app/inventory-transaction-modal/inventory-transaction-modal.component';
var distributionRoutes = [
    {
        path: "", children: [
            { path: "", component: _distribution_list_distribution_list_component__WEBPACK_IMPORTED_MODULE_14__["DistributionListComponent"], canActivate: [src_app_auth_component_guard__WEBPACK_IMPORTED_MODULE_10__["AuthComponentGuard"]], data: { expectedRole: ['1'] } },
            {
                path: "distribution-detail/:id/:tabtype", children: [
                    { path: "", component: _distribution_detail_distribution_detail_component__WEBPACK_IMPORTED_MODULE_13__["DistributionDetailComponent"], canActivate: [src_app_auth_component_guard__WEBPACK_IMPORTED_MODULE_10__["AuthComponentGuard"]], data: { expectedRole: ['1', '2'] } },
                    { path: 'order-detail/:id', component: src_app_order_order_detail_order_detail_component__WEBPACK_IMPORTED_MODULE_22__["OrderDetailComponent"], canActivate: [src_app_auth_component_guard__WEBPACK_IMPORTED_MODULE_10__["AuthComponentGuard"]], data: { expectedRole: ['1', '2'] } },
                    { path: 'secondary-order-detail/:id', component: src_app_order_secondary_order_detail_secondary_order_detail_component__WEBPACK_IMPORTED_MODULE_23__["SecondaryOrderDetailComponent"], canActivate: [src_app_auth_component_guard__WEBPACK_IMPORTED_MODULE_10__["AuthComponentGuard"]], data: { expectedRole: ['1', '2'] } },
                    { path: "edit-distribution/:type/:id/:pageType", component: _add_distribution_add_distribution_component__WEBPACK_IMPORTED_MODULE_12__["AddDistributionComponent"], canActivate: [src_app_auth_component_guard__WEBPACK_IMPORTED_MODULE_10__["AuthComponentGuard"]], data: { expectedRole: ['1'] } },
                    { path: "add-primary-order", component: _dist_primary_order_add_dist_primary_order_add_component__WEBPACK_IMPORTED_MODULE_24__["DistPrimaryOrderAddComponent"], canActivate: [src_app_auth_component_guard__WEBPACK_IMPORTED_MODULE_10__["AuthComponentGuard"]], data: { expectedRole: ['1'] } },
                    { path: "secondary-order-add", component: _secondary_order_add_secondary_order_add_component__WEBPACK_IMPORTED_MODULE_25__["SecondaryOrderAddComponent"], canActivate: [src_app_auth_component_guard__WEBPACK_IMPORTED_MODULE_10__["AuthComponentGuard"]], data: { expectedRole: ['1'] } },
                    { path: 'billing-details/:id', component: src_app_billing_detail_billing_detail_component__WEBPACK_IMPORTED_MODULE_27__["BillingDetailComponent"], canActivate: [src_app_auth_component_guard__WEBPACK_IMPORTED_MODULE_10__["AuthComponentGuard"]], data: { expectedRole: ['1'] } },
                    { path: "add-inventory", component: src_app_addinventory_addinventory_component__WEBPACK_IMPORTED_MODULE_30__["AddinventoryComponent"], canActivate: [src_app_auth_component_guard__WEBPACK_IMPORTED_MODULE_10__["AuthComponentGuard"]], data: { expectedRole: ['1'] } },
                ]
            },
            { path: "distribution-order-list", component: _distribution_order_list_distribution_order_list_component__WEBPACK_IMPORTED_MODULE_15__["DistributionOrderListComponent"], canActivate: [src_app_auth_component_guard__WEBPACK_IMPORTED_MODULE_10__["AuthComponentGuard"]], data: { expectedRole: ['1'] } },
            { path: "add-distribution/:type/:id/:pageType", component: _add_distribution_add_distribution_component__WEBPACK_IMPORTED_MODULE_12__["AddDistributionComponent"], canActivate: [src_app_auth_component_guard__WEBPACK_IMPORTED_MODULE_10__["AuthComponentGuard"]], data: { expectedRole: ['1'] } },
            { path: "dealer", component: _dealer_dealer_component__WEBPACK_IMPORTED_MODULE_21__["DealerComponent"], canActivate: [src_app_auth_component_guard__WEBPACK_IMPORTED_MODULE_10__["AuthComponentGuard"]], data: { expectedRole: ['1'] } },
        ]
    },
];
var DistributionModule = /** @class */ (function () {
    function DistributionModule() {
    }
    DistributionModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _distribution_order_list_distribution_order_list_component__WEBPACK_IMPORTED_MODULE_15__["DistributionOrderListComponent"],
                _dealer_dealer_component__WEBPACK_IMPORTED_MODULE_21__["DealerComponent"],
                src_app_otp_convert_to_distributor_convert_to_distributor_component__WEBPACK_IMPORTED_MODULE_26__["ConvertToDistributorComponent"],
                _distribution_edit_distribution_edit_component__WEBPACK_IMPORTED_MODULE_16__["DistributionEditComponent"],
                _distributor_model_distributor_model_component__WEBPACK_IMPORTED_MODULE_18__["DistributorModelComponent"],
                src_app_invoice_list_modal_invoice_list_modal_component__WEBPACK_IMPORTED_MODULE_19__["InvoiceListModalComponent"],
                _secondary_order_add_secondary_order_add_component__WEBPACK_IMPORTED_MODULE_25__["SecondaryOrderAddComponent"],
                // DistributionLegderModelComponent,
                // ProductDetailDataComponent,
                _update_kyc_update_kyc_component__WEBPACK_IMPORTED_MODULE_29__["UpdateKycComponent"],
                _influencer_activity_report_dialog_influencer_activity_report_dialog_component__WEBPACK_IMPORTED_MODULE_31__["InfluencerActivityReportDialogComponent"],
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
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild(distributionRoutes),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_7__["NgMultiSelectDropDownModule"],
                src_app_material__WEBPACK_IMPORTED_MODULE_11__["MaterialModule"],
                angular_ng_autocomplete__WEBPACK_IMPORTED_MODULE_6__["AutocompleteLibModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialogModule"],
                ngx_mat_select_search__WEBPACK_IMPORTED_MODULE_8__["NgxMatSelectSearchModule"],
                ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_20__["InfiniteScrollModule"],
                src_app_app_utility_module__WEBPACK_IMPORTED_MODULE_9__["AppUtilityModule"]
            ],
            entryComponents: [
                _distribution_edit_distribution_edit_component__WEBPACK_IMPORTED_MODULE_16__["DistributionEditComponent"],
                _distributor_model_distributor_model_component__WEBPACK_IMPORTED_MODULE_18__["DistributorModelComponent"],
                src_app_otp_convert_to_distributor_convert_to_distributor_component__WEBPACK_IMPORTED_MODULE_26__["ConvertToDistributorComponent"],
                src_app_invoice_list_modal_invoice_list_modal_component__WEBPACK_IMPORTED_MODULE_19__["InvoiceListModalComponent"],
                src_app_support_support_status_support_status_component__WEBPACK_IMPORTED_MODULE_28__["SupportStatusComponent"],
                // ProductDetailDataComponent,
                _update_kyc_update_kyc_component__WEBPACK_IMPORTED_MODULE_29__["UpdateKycComponent"],
                _influencer_activity_report_dialog_influencer_activity_report_dialog_component__WEBPACK_IMPORTED_MODULE_31__["InfluencerActivityReportDialogComponent"],
            ],
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DistributionModule);
    return DistributionModule;
}());



/***/ }),

/***/ "./src/app/distribution/distribution-order-list/distribution-order-list.component.html":
/*!*********************************************************************************************!*\
  !*** ./src/app/distribution/distribution-order-list/distribution-order-list.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-container\" [@routerTransition]>\r\n  <div class=\"tools-container\">\r\n    <div class=\"page-heading\">\r\n      <div class=\"heading-text bc-space\">\r\n        <div class=\"back-btn\">\r\n          <a mat-button><i class=\"material-icons\">west</i></a>\r\n        </div>\r\n        <h2>Punit</h2>\r\n        <p class=\"light\">Retailer</p>\r\n      </div>\r\n    </div>\r\n    <div class=\"tabs right-tab\">\r\n      <ul>\r\n        <li><a routerLink=\"/distribution-detail\" routerLinkActive=\"active\">DETAIL</a></li>\r\n        <li><a>IMAGE & DOCUMENTS</a></li>\r\n        <li><a routerLink=\"/distribution-order-list\" routerLinkActive=\"active\">ORDERS</a></li>\r\n        <li><a>POP & GIFT</a></li>\r\n        <li><a>PAYMASTER</a></li>\r\n      </ul>\r\n    </div>\r\n  </div>\r\n  \r\n  \r\n  <div class=\"container-outer\">\r\n    <div class=\"container\" >\r\n      <div class=\"row\">\r\n        <div class=\"col s12\">\r\n          <div class=\"cs-table left-right-20\">\r\n            <div class=\"table-head\">\r\n              <table>\r\n                <tr>\r\n                  <th class=\"w200\">Created By & Date</th>\r\n                  <th class=\"w150\">Order ID</th>\r\n                  <th>Product Description</th>\r\n                  <th class=\"w150 text-right\">Order Value</th>\r\n                  <th class=\"w100 text-center\">Status</th>\r\n                </tr>\r\n              </table>\r\n            </div>\r\n            \r\n            <div class=\"table-container\">\r\n              <div class=\"table-content\">\r\n                <table>\r\n                  <tr>\r\n                    <td class=\"w200\">2 Jan 2018 / Rahul Dubey</td>\r\n                    <td class=\"w150\"><a class=\"link-btn\" mat-button>#AB58472</a></td>\r\n                    <td>Product Description</td>\r\n                    <td class=\"w150 text-right\">25000</td>\r\n                    <td class=\"w100 text-center green-clr\">DELIVERED</td>\r\n                  </tr>\r\n                  <tr>\r\n                    <td>2 Jan 2018 / Rahul Dubey</td>\r\n                    <td><a class=\"link-btn\" mat-button>#AB58472</a></td>\r\n                    <td>Product Description</td>\r\n                    <td class=\"text-right\">25000</td>\r\n                    <td class=\"text-center red-clr\">PENDING</td>\r\n                  </tr>\r\n                  <tr>\r\n                    <td>2 Jan 2018 / Rahul Dubey</td>\r\n                    <td><a class=\"link-btn\" mat-button>#AB58472</a></td>\r\n                    <td>Product Description</td>\r\n                    <td class=\"text-right\">25000</td>\r\n                    <td class=\"text-center green-clr\">DELIVERED</td>\r\n                  </tr>\r\n                  \r\n                  <tr>\r\n                    <td>2 Jan 2018 / Rahul Dubey</td>\r\n                    <td><a class=\"link-btn\" mat-button>#AB58472</a></td>\r\n                    <td>Product Description</td>\r\n                    <td class=\"text-right\">25000</td>\r\n                    <td class=\"text-center red-clr\">PENDING</td>\r\n                  </tr>\r\n                  \r\n                  <tr>\r\n                    <td>2 Jan 2018 / Rahul Dubey</td>\r\n                    <td><a class=\"link-btn\" mat-button>#AB58472</a></td>\r\n                    <td>Product Description</td>\r\n                    <td class=\"text-right\">25000</td>\r\n                    <td class=\"text-center red-clr\">PENDING</td>\r\n                  </tr>\r\n                  \r\n                  <tr>\r\n                    <td>2 Jan 2018 / Rahul Dubey</td>\r\n                    <td><a class=\"link-btn\" mat-button>#AB58472</a></td>\r\n                    <td>Product Description</td>\r\n                    <td class=\"text-right\">25000</td>\r\n                    <td class=\"text-center green-clr\">DELIVERED</td>\r\n                  </tr>\r\n                </table>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  \r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/distribution/distribution-order-list/distribution-order-list.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/distribution/distribution-order-list/distribution-order-list.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: DistributionOrderListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DistributionOrderListComponent", function() { return DistributionOrderListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _router_animation_router_animation_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../router-animation/router-animation.component */ "./src/app/router-animation/router-animation.component.ts");



var DistributionOrderListComponent = /** @class */ (function () {
    function DistributionOrderListComponent() {
    }
    DistributionOrderListComponent.prototype.ngOnInit = function () {
    };
    DistributionOrderListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-distribution-order-list',
            template: __webpack_require__(/*! ./distribution-order-list.component.html */ "./src/app/distribution/distribution-order-list/distribution-order-list.component.html"),
            animations: [Object(_router_animation_router_animation_component__WEBPACK_IMPORTED_MODULE_2__["slideToTop"])()]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], DistributionOrderListComponent);
    return DistributionOrderListComponent;
}());



/***/ }),

/***/ "./src/app/distribution/secondary-order-add/secondary-order-add.component.html":
/*!*************************************************************************************!*\
  !*** ./src/app/distribution/secondary-order-add/secondary-order-add.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-container\">\r\n  <app-loader *ngIf=\"loader\"></app-loader>\r\n  <div class=\"tools-container\">\r\n    <a mat-icon-button matTooltip=\"Back\"(click)=\"back()\">\r\n      <i class=\"material-icons\">arrow_back</i>\r\n    </a>\r\n    <h2>Add Secondary Order</h2>\r\n    \r\n  </div>\r\n  <div class=\"container pt10 pl10 pr10 pb50\">\r\n    \r\n    <div class=\"row\">\r\n      <div class=\"col s12\">\r\n        <div class=\"card pb0\">\r\n          <div class=\"card-body cs-form\">\r\n            <div class=\"row\">\r\n              <div class=\"col s12 m5 l4\">\r\n                <mat-form-field  appearance=\"outline\">\r\n                  <mat-label>Dealer</mat-label>\r\n                  <mat-select  name=\"dealer_name\" [(ngModel)]=\"data.dealer_name\" #dealer_name=\"ngModel\"  (ngModelChange)=\"getItemList('',this.dr_detail.brand);getdealerstate(data.dealer_name);resetChannel()\" >\r\n                    <mat-option >\r\n                      <ngx-mat-select-search noEntriesFoundLabel=\"'no data found'\" placeholderLabel=\"Search..\"></ngx-mat-select-search>\r\n                    </mat-option>\r\n                    <mat-option *ngFor=\"let row of dealerList\" value=\"{{row.id}}\">{{row.display_name}}</mat-option>\r\n                  </mat-select>\r\n                </mat-form-field>\r\n                \r\n              </div>\r\n              <div class=\"col s12 m5 l4\">\r\n                <mat-form-field  appearance=\"outline\">\r\n                  <mat-label>Select Item</mat-label>\r\n                  <mat-select  name=\"product_id\" [(ngModel)]=\"data.product_id\" #product_id=\"ngModel\"(ngModelChange)=\"getitemdetail(data.product_id);get_product_details(data.product_id);get_product_Size(data.dealer_name.id,data.product_id, 'listInput', '');\"  >\r\n                    <mat-option >\r\n                      <ngx-mat-select-search noEntriesFoundLabel=\"'no data found'\" placeholderLabel=\"Search..\"(keyup)=\"getItemList($event.target.value,this.dr_detail.brand)\"></ngx-mat-select-search>\r\n                    </mat-option>\r\n                    <mat-option *ngFor=\"let row of items\" value=\"{{row.id}}\">{{row.product_name}}  <strong>{{row.product_code}}</strong>  </mat-option>\r\n                  </mat-select>\r\n                </mat-form-field>\r\n                \r\n              </div>\r\n              <div class=\"col s12 m3 l4\" >\r\n                <mat-form-field class=\"cs-input\" appearance=\"outline\" *ngIf=\"data.product_id\">\r\n                  <mat-label>Brand</mat-label>\r\n                  <mat-select name=\"brand\" placeholder=\"Type Here ...\" #brand=\"ngModel\" [(ngModel)]=\"data.brand\"\r\n                  [ngClass]=\"{'has-error' : brand.invalid } \" >\r\n                  <mat-option *ngFor=\"let row of brandList\" value=\"{{row}}\">{{row}}</mat-option>\r\n                </mat-select>\r\n              </mat-form-field>\r\n              \r\n            </div>\r\n            <div class=\"col s12 m3 l4\" *ngIf=\"data.product_id && data.brand && colorList.length\">\r\n              <mat-form-field class=\"cs-input\" appearance=\"outline\">\r\n                <mat-label>Color</mat-label>\r\n                <mat-select name=\"color\" placeholder=\"Type Here ...\" #color=\"ngModel\" [(ngModel)]=\"data.color\"\r\n                [ngClass]=\"{'has-error' : color.invalid } \" >\r\n                <mat-option *ngFor=\"let row of colorList\" value=\"{{row}}\">{{row}}</mat-option>\r\n              </mat-select>\r\n            </mat-form-field>\r\n            \r\n          </div>\r\n        </div>\r\n        <div class=\"card mt10 mb10\" *ngIf=\"data.brand && data.product_id\">\r\n          <div class=\"card-head\">\r\n            <h2>Product Information</h2>\r\n          </div>\r\n          <div class=\"row\"> \r\n            <div class=\"col s12 m2 l4\">\r\n              <mat-form-field  appearance=\"outline\">\r\n                <mat-label>Product Detail</mat-label>\r\n                <input matInput placeholder=\"Type Here ...\"  name=\"product_name\" #product_name=\"ngModel\"  [(ngModel)]=\"product_detail.product_name\" readonly>\r\n              </mat-form-field>\r\n            </div>\r\n            <div class=\"col s12 m2 l2\">\r\n              <mat-form-field  appearance=\"outline\">\r\n                <mat-label>Brand</mat-label>\r\n                <input matInput placeholder=\"pleaseselect ...\"  name=\"brand\" #brand=\"ngModel\"  [(ngModel)]=\"data.brand\" readonly>\r\n              </mat-form-field>\r\n            </div>\r\n            <div class=\"col s12 m2 l2\">\r\n              <mat-form-field  appearance=\"outline\">\r\n                <mat-label>color</mat-label>\r\n                <input matInput placeholder=\"please select ...\"  name=\"color\" #color=\"ngModel\"  [(ngModel)]=\"data.color\" readonly>\r\n              </mat-form-field>\r\n            </div>\r\n            \r\n            <div class=\"col s12 m2 l2\">\r\n              <mat-form-field  appearance=\"outline\">\r\n                <mat-label>Small Packing</mat-label>\r\n                <input matInput placeholder=\"Type Here ...\"  name=\"small_packing_size\" #small_packing_size=\"ngModel\"  [(ngModel)]=\"product_detail.small_packing_size\" readonly>\r\n              </mat-form-field>\r\n            </div>\r\n            <div class=\"col s12 m2 l2\">\r\n              <mat-form-field  appearance=\"outline\">\r\n                <mat-label>Master Packing</mat-label>\r\n                <input matInput placeholder=\"Type Here ...\"  name=\"master_packing_size\" #master_packing_size=\"ngModel\"\r\n                [(ngModel)]=\"product_detail.master_packing_size\" readonly>\r\n              </mat-form-field>\r\n            </div> \r\n          </div>\r\n          \r\n          <div class=\"row\" *ngIf=\"product_data.length && data.brand  || data.color\" >\r\n            <div class=\"col s12 m2 l2\">\r\n              <mat-radio-group id=\"gst_type\" name=\"gst_type\" #gst_type=\"ngModel\"[(ngModel)]=\"data.gst_type\" [disabled]=\"add_list.length > 0\" (ngModelChange)=\"get_product_Size(data.dealer_name,data.product_id, 'listInput', '')\">\r\n                <mat-radio-button class=\"wp50\" color=\"primary\" [ngClass]=\"{'active': data.gst_type == 'Gst Paid' }\" value=\"Gst Paid\">\r\n                  GST Paid\r\n                </mat-radio-button>\r\n                <mat-radio-button class=\"wp50\" color=\"primary\" [ngClass]=\"{'active': data.gst_type == 'Gst Extra'}\" value=\"Gst Extra\">\r\n                  GST Extra\r\n                </mat-radio-button>\r\n              </mat-radio-group>\r\n            </div>\r\n            \r\n            <div *ngFor=\"let row of product_data;let i = index;\">\r\n              \r\n              <div class=\"col s12 m2 l2\" >\r\n                <mat-form-field  appearance=\"outline\">\r\n                  <mat-label>Price</mat-label>\r\n                  <div class=\"df jc\">\r\n                    <input matInput placeholder=\"Type Here ...\"  name=\"product_price\" #product_price=\"ngModel\"  [(ngModel)]=\"row.product_price\"[readonly]=\"editprice\">\r\n                    <button *ngIf=\"(row.sec_net_price > row.product_price || row.product_price == 0) && editprice==true \" mat-button class=\"delete-mat\" matTooltip=\"Edit\" (click)=\"editPrice()\"matTooltipPosition=\"above\">\r\n                      <i class=\"material-icons green-clr\">edit</i>\r\n                    </button> \r\n                    <button mat-button class=\"delete-mat\" matTooltip=\"Edit\"  (click)=\"changePrice(data.dealer_name,data.product_id, 'addPrice', row.sec_net_price,row.product_price)\" matTooltipPosition=\"above\" *ngIf=\"editprice==false && row.product_price\">\r\n                      <i class=\"material-icons green-clr\">save</i>\r\n                    </button>   \r\n                  </div>\r\n                </mat-form-field>\r\n                \r\n              </div>\r\n              <div class=\"col s12 m2 l3 \">\r\n                <mat-form-field appearance=\"outline\">\r\n                  <mat-label>Discount(%)</mat-label>\r\n                  <div class=\"df jc\">\r\n                    \r\n                    <input matInput placeholder=\"Type Here ...\"  name=\"dr_disc\" #dr_disc=\"ngModel\"\r\n                    [(ngModel)]=\"row.dr_disc\"  [readonly]=\"contenteditable\" >\r\n                    <button *ngIf=\"row.sec_net_price == 0 && contenteditable==true \" mat-button class=\"delete-mat\" matTooltip=\"Edit\" (click)=\"editDiscount()\"matTooltipPosition=\"above\">\r\n                      <i class=\"material-icons green-clr\">edit</i>\r\n                    </button> \r\n                    <button mat-button class=\"delete-mat\" matTooltip=\"Edit\"  (click)=\"changeDiscount(data.dealer_name,data.product_id, 'addDiscount', row.dr_disc)\" matTooltipPosition=\"above\" *ngIf=\"contenteditable==false && row.dr_disc\">\r\n                      <i class=\"material-icons green-clr\">save</i>\r\n                    </button>   \r\n                  </div>\r\n                </mat-form-field>\r\n              </div>\r\n              <div class=\"col s12 m2 l2\">\r\n                <mat-form-field  appearance=\"outline\">\r\n                  <mat-label>QTY</mat-label>\r\n                  <input matInput placeholder=\"Type Here ...\"  name=\"qty\" #qty=\"ngModel\"  (input)=\"(row.qty == '' || row.qty <1 || row.qty == null)?(addToListButton = true):(addToListButton = false);\"\r\n                  [(ngModel)]=\"row.qty\" onkeypress=\"return event.charCode>=48 && event.charCode<=57\" required  [disabled]=\"row.product_price == 0\">\r\n                </mat-form-field>\r\n              </div>\r\n              <div class=\"col s12 m2 l2\">\r\n                <mat-form-field  appearance=\"outline\">\r\n                  <mat-label>GST(%)</mat-label>\r\n                  <input matInput placeholder=\"Type Here ...\"  name=\"gst_percent\" #gst_percent=\"ngModel\"\r\n                  [(ngModel)]=\"row.gst_percent\" readonly>\r\n                </mat-form-field>\r\n              </div>\r\n              \r\n            </div>\r\n            <button   class=\"add-item\" (click)=\"addToList(setPrice)\" [disabled]=\"addToListButton \" type=\"submit\" ><i class=\"material-icons\">add</i></button>\r\n          </div>\r\n        </div>\r\n        <ng-container *ngIf=\"add_list.length\">\r\n          <div class=\"cs-table\">\r\n            <div class=\"sticky-head\" style=\"top: -10px;\">\r\n              <div class=\"table-head\">\r\n                <table>\r\n                  <tr>\r\n                    <th class=\"w30\">S.no.</th>\r\n                    <th class=\"w250\">Item Details</th>\r\n                    <th class=\"w80 text-right\">Price</th>\r\n                    <th class=\"w80 text-right\">Discount (%)</th>\r\n                    <th class=\"w80 text-right\">Net Price</th>\r\n                    <th class=\"w80 text-right\">QTY.</th>\r\n                    <th class=\"w80 text-right\">Sub Total</th>\r\n                    <th class=\"w80 text-right\">GST Amount</th>\r\n                    <th class=\"w80 text-right\">Net Amount</th>\r\n                    <th class=\"w40 text-right\">Action</th>\r\n                  </tr>\r\n                </table>\r\n              </div>\r\n            </div>\r\n            <div class=\"table-container\">\r\n              <div class=\"table-content\">\r\n                <table>\r\n                  <tr *ngFor=\"let row of add_list;let i=index\">\r\n                    <td class=\"w30\">{{i+1}}</td>\r\n                    <td class=\"w250\">{{row.product_name}} ({{row.product_code}}) {{row.brand && (row.brand) }} {{row.color && (row.color)}}</td>\r\n                    <td class=\"w80 text-right\">{{row.product_price}}</td>\r\n                    <td class=\"w80 text-right\" *ngIf=\"row.discounted_price != 0\" >{{row.discounted_price != 0 ?\r\n                      (row.discounted_price | number:'1.2-2') : '--'}}({{row.dr_disc ? row.dr_disc +' '+'%':null}})</td>\r\n                      <td class=\"w80 text-right\" *ngIf=\"row.discounted_price == 0\" >{{row.discounted_price != 0 ?(row.discounted_price | number:'1.2-2') : '--'}}</td>\r\n                      <td class=\"w80 text-right\"> ₹ {{row.net_price | number:'1.2-2'}}</td>\r\n                      <td class=\"w80 text-right\">{{row.qty}} </td>                          \r\n                      <td class=\"w80  text-right\">₹ {{row.amount | number:'1.2-2'}}</td>\r\n                      <td class=\"w80 text-right\">₹ {{row.gst_amount | number:'1.2-2'}} ({{row.gst_percent?row.gst_percent+'%':'0 %'}})</td>\r\n                      <td class=\"w80 text-right\">₹ {{row.total_amount | number:'1.2-2'}}</td>\r\n                      <td class=\"w40 text-center\">\r\n                        <div class=\"action-button\">                                     \r\n                          <button  mat-icon-button  matTooltip=\"Delete\" (click)=\"listdelete(i)\">\r\n                            <i class=\"material-icons del\">delete</i>\r\n                          </button>\r\n                        </div>\r\n                      </td>\r\n                    </tr>\r\n                  </table>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"row\" *ngIf=\"add_list.length\">\r\n              <div class=\"col s4\">\r\n                <mat-form-field  appearance=\"outline\">\r\n                  <mat-label> Remark</mat-label>\r\n                  <textarea matInput placeholder=\"Type Here ...\"  name=\"remark\" #remark=\"ngModel\"\r\n                  [(ngModel)]=\"data.remark\" class=\"h100\"></textarea>\r\n                </mat-form-field>\r\n                \r\n              </div>\r\n              <div class=\"col s4 offset-s4\">\r\n                <div class=\"invoice-table\">\r\n                  <table>\r\n                    <tr>\r\n                      <td>Total Item</td>\r\n                      <th>{{add_list.length}}</th>\r\n                      \r\n                    </tr>\r\n                    <tr>\r\n                      <td>Total Item Qty.</td>\r\n                      <th>{{total_qty}}</th>\r\n                    </tr>\r\n                    <tr>\r\n                      <td>Total Order Amount</td>\r\n                      <th>{{total_Order_amount ? '₹' + ' ' + (total_Order_amount | number:'1.2-2') + ' ' + '/-': '0'}}</th>\r\n                    </tr>\r\n                    <tr>\r\n                      <td>Total Discount Amount</td>\r\n                      <th>{{order_discount ? '₹' + ' ' + (order_discount | number:'1.2-2') + ' ' + '/-': '0'}} </th>\r\n                    </tr>\r\n                    \r\n                    <tr>\r\n                      <td>Sub Total</td>\r\n                      <th>{{order_total ? '₹' + ' ' + (order_total | number:'1.2-2') + ' ' + '/-': '0'}}</th>\r\n                    </tr>\r\n                    <tr>\r\n                      <td>Total GST Amount</td>\r\n                      <th>₹ {{total_gst_amount | number:'1.2-2'}} /-</th>\r\n                    </tr>\r\n                    \r\n                    <tr>\r\n                      <td>Grand Total</td>\r\n                      <th>₹ {{new_grand_total | number:'1.2-2'}} /-</th>\r\n                    </tr>\r\n                  </table>\r\n                  \r\n                </div>\r\n              </div>\r\n            </div>\r\n            \r\n          </ng-container> \r\n          \r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  \r\n  <div class=\"row\" *ngIf=\"add_list.length > 0\"> \r\n    <div class=\"col s12\">\r\n      <div class=\"text-right\">\r\n        <button [ngClass]=\"{'loading': savingFlag == true}\" mat-raised-button color=\"accent\" type=\"submit\"\r\n        [disabled]=\"savingFlag == true\" (click)=\"user_data.order_status='Pending';save_order('save');\">\r\n        {{savingFlag == true ? 'Saving' : 'Save'}}\r\n      </button>\r\n    </div>\r\n  </div>\r\n</div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/distribution/secondary-order-add/secondary-order-add.component.scss":
/*!*************************************************************************************!*\
  !*** ./src/app/distribution/secondary-order-add/secondary-order-add.component.scss ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".discEdit {\n  display: flex;\n  justify-content: space-between;\n}"

/***/ }),

/***/ "./src/app/distribution/secondary-order-add/secondary-order-add.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/distribution/secondary-order-add/secondary-order-add.component.ts ***!
  \***********************************************************************************/
/*! exports provided: SecondaryOrderAddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SecondaryOrderAddComponent", function() { return SecondaryOrderAddComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_services_DatabaseService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/_services/DatabaseService */ "./src/_services/DatabaseService.ts");
/* harmony import */ var ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng6-toastr-notifications */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/ng6-toastr-notifications/fesm5/ng6-toastr-notifications.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_dialog_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/dialog.component */ "./src/app/dialog.component.ts");
/* harmony import */ var src_app_localstorage_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/localstorage.service */ "./src/app/localstorage.service.ts");







var SecondaryOrderAddComponent = /** @class */ (function () {
    function SecondaryOrderAddComponent(serve, toast, route, dialog, router, session) {
        this.serve = serve;
        this.toast = toast;
        this.route = route;
        this.dialog = dialog;
        this.router = router;
        this.session = session;
        this.loader = false;
        this.savingFlag = false;
        this.data = {};
        this.items = [];
        this.dealerList = [];
        this.colorList = [];
        this.brandList = [];
        this.product_data = [];
        this.product_detail = {};
        this.dr_detail = {};
        this.condition = {};
        this.Dist_state = '';
        this.add_list = [];
        this.user_data = {};
        this.order_total = 0;
        this.order_discount = 0;
        this.total_qty = 0;
        this.netamount = 0;
        this.total_gst_amount = 0;
        this.order_grand_total = 0;
        this.sub_total = 0;
        this.dis_amt = 0;
        this.gst_amount = 0;
        this.net_total = 0;
        this.spcl_dis_amt = 0;
        this.grand_total = 0;
        this.total_Order_amount = '';
        this.new_grand_total = 0;
        this.SpecialDiscountLable = '';
        this.contenteditable = true;
        this.editprice = true;
        this.login_data = {};
        this.addToListButton = true;
        this.deactive = false;
        this.selectedBrand = '';
        this.login_data = this.session.getSession();
        this.login_data = this.login_data.value;
        this.login_data = this.login_data.data;
    }
    SecondaryOrderAddComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.dr_id = params.id;
            _this.data.gst_type = 'Gst Paid';
            _this.data.dr_disc = 0;
            _this.distributorDetail();
            _this.get_dealerList();
        });
    };
    SecondaryOrderAddComponent.prototype.distributorDetail = function () {
        var _this = this;
        this.loader = true;
        var id = { "id": this.dr_id };
        this.serve.post_rqst(id, "CustomerNetwork/distributorDetail").subscribe(function (result) {
            if (result['statusCode'] == 200) {
                _this.loader = false;
                _this.dr_detail = result['distributor_detail'];
                _this.getItemList('', _this.dr_detail.brand);
            }
            else {
                _this.loader = true;
                _this.toast.errorToastr(result['statusMsg']);
            }
        });
    };
    SecondaryOrderAddComponent.prototype.get_dealerList = function () {
        var _this = this;
        this.loader = true;
        this.serve.post_rqst({ 'dr_id': this.dr_id, 'dr_type': 3 }, "Order/assignedDealer").subscribe(function (resp) {
            if (resp['statusCode'] == 200) {
                _this.loader = false;
                _this.dealerList = resp['result'];
            }
            else {
                _this.toast.errorToastr(resp['statusMsg']);
                _this.loader = false;
            }
        });
    };
    SecondaryOrderAddComponent.prototype.getItemList = function (search, brand) {
        var _this = this;
        this.serve.post_rqst({ 'data': { 'dr_id': this.dr_id, 'brand': brand, 'order_type': 'secondary', 'fixed_brand': this.selectedBrand != '' ? [this.selectedBrand] : [] }, 'filter': { 'search': search } }, "Order/segmentItems")
            .subscribe(function (resp) {
            if (resp['statusCode'] == 200) {
                _this.loader = false;
                _this.items = resp['result'];
            }
            else {
                _this.toast.errorToastr(resp['statusMsg']);
                _this.loader = false;
            }
        });
    };
    SecondaryOrderAddComponent.prototype.get_product_details = function (id) {
        var _this = this;
        this.data.brand = '';
        this.data.color = '';
        this.loader = true;
        this.serve.post_rqst({ 'product_id': id, 'order_type': 'secondary', 'brand': this.dr_detail.brand, 'fixed_brand': this.selectedBrand != '' ? [this.selectedBrand] : [] }, "Order/segmentItemsDetails")
            .subscribe(function (resp) {
            if (resp['statusCode'] == 200) {
                _this.loader = false;
                _this.product_detail = resp['result'];
                _this.brandList = _this.product_detail['brand'];
                _this.colorList = _this.product_detail['color'];
                if (_this.brandList.length == 1) {
                    _this.data.brand = _this.brandList[0];
                }
                if (_this.colorList.length == 1) {
                    _this.data.color = _this.colorList[0];
                }
            }
            else {
                _this.toast.errorToastr(resp['statusMsg']);
                _this.loader = false;
            }
        });
    };
    SecondaryOrderAddComponent.prototype.getdealerstate = function (id) {
        var Index = this.dealerList.findIndex(function (row) { return row.id == id; });
        if (Index != -1) {
            this.Dist_state = this.dealerList[Index].state;
        }
    };
    SecondaryOrderAddComponent.prototype.getitemdetail = function (id) {
        var Index = this.items.findIndex(function (row) { return row.id == id; });
        if (Index != -1) {
            this.data.product_gst = this.items[Index].gst;
        }
    };
    SecondaryOrderAddComponent.prototype.get_product_Size = function (dr_id, product_id, type, discountValue) {
        var _this = this;
        var Index = this.items.findIndex(function (row) { return row.id == _this.data.product_id.id; });
        if (Index != -1) {
            this.data.product_name = this.items[Index].product_name;
            this.data.feature_apply = this.items[Index].feature_apply;
            this.data.product_code = this.items[Index].product_code;
        }
        var header;
        if (type == 'listInput') {
            header = { 'state_name': this.Dist_state, 'order_type': 'secondary', 'dr_id': this.data.dealer_name, 'input_discount': this.data.dr_disc, 'product_id': this.data.product_id, 'gst_type': this.data.gst_type, 'gst_percent': this.data.product_gst, 'category_id': this.product_detail.category_id, };
        }
        if (type == 'addPrice') {
            header = {
                'state_name': this.Dist_state, 'order_type': 'secondary', 'dr_id': this.data.dealer_name, 'input_discount': 0,
                'input_price': discountValue, 'product_id': this.data.product_id, 'gst_type': this.data.gst_type, 'gst_percent': this.data.product_gst, 'category_id': this.product_detail.category_id,
            };
        }
        if (type == 'addDiscount') {
            header = {
                'state_name': this.Dist_state, 'order_type': 'secondary', 'input_discount': discountValue, 'dr_id': this.data.dealer_name,
                'input_price': this.data.product_price, 'product_id': this.data.product_id, 'gst_type': this.data.gst_type, 'gst_percent': this.data.product_gst, 'category_id': this.product_detail.category_id,
            };
        }
        this.serve.post_rqst(header, "Order/segmentItemPriceWithoutFeatures")
            .subscribe(function (resp) {
            if (resp['statusCode'] == 200) {
                _this.product_data = resp['result'];
                if (_this.product_data.length > 0) {
                    for (var i = 0; i < _this.product_data.length; i++) {
                        _this.product_data[i].edit_true = false;
                    }
                }
                if (_this.product_data.length < 1) {
                    _this.data.product_id = '';
                    _this.data.brand = '';
                    _this.data.color = '';
                    _this.toast.errorToastr(resp['statusMsg']);
                }
                _this.addToListButton = true;
            }
            else {
                _this.toast.errorToastr(resp['statusMsg']);
            }
        });
    };
    SecondaryOrderAddComponent.prototype.changePrice = function (dr_id, product_id, type, set_price, product_price) {
        this.setPrice = set_price;
        this.data.product_price = Math.abs(product_price);
        if (set_price < this.data.product_price) {
            this.get_product_Size(dr_id, product_id, type, product_price);
            this.deactive = true;
            this.editprice = true;
        }
        else {
            this.toast.errorToastr('Price cannot be less than Net Price ₹' + set_price);
            this.editprice = false;
        }
    };
    SecondaryOrderAddComponent.prototype.changeDiscount = function (dr_id, product_id, type, discountValue) {
        if (discountValue == 0) {
            discountValue = '';
        }
        this.data.dr_disc = Math.abs(discountValue);
        if (this.data.dr_disc > 0) {
            this.get_product_Size(dr_id, product_id, type, discountValue);
        }
        else {
            this.toast.errorToastr("Please Update Discount Above Greater Than 0");
            this.contenteditable = false;
        }
    };
    SecondaryOrderAddComponent.prototype.editDiscount = function () {
        this.contenteditable = false;
    };
    SecondaryOrderAddComponent.prototype.editPrice = function () {
        this.editprice = false;
        // this.data.product_price=''
    };
    SecondaryOrderAddComponent.prototype.addToList = function (set_price) {
        var _this = this;
        if (!this.add_list.length) {
            this.selectedBrand = this.data.brand;
        }
        var _loop_1 = function (i) {
            if (this_1.product_data[i]['sec_net_price'] > parseInt(this_1.product_data[i]['product_price'])) {
                this_1.toast.errorToastr('Price cannot be less than Net Price ₹' + set_price);
                this_1.editprice = true;
                return { value: void 0 };
            }
            if (this_1.product_data[i]['qty'] && this_1.product_data[i]['product_price']) {
                var existIndex = this_1.add_list.findIndex(function (row) { return (row.product_id == _this.product_data[i]['product_id'] && row.brand == _this.data.brand && row.color == _this.data.color); });
                if (existIndex != -1) {
                    this_1.add_list.splice(existIndex, 1);
                }
                this_1.product_data[i]['product_name'] = this_1.product_detail.product_name;
                this_1.product_data[i]['product_code'] = this_1.product_detail.product_code;
                this_1.product_data[i]['segment_id'] = this_1.product_detail.category_id;
                this_1.product_data[i]['segment_name'] = this_1.product_detail.category;
                this_1.product_data[i]['amount'] = parseFloat(this_1.product_data[i]['qty']) * parseFloat(this_1.product_data[i]['net_price']);
                this_1.product_data[i]['color'] = this_1.data.color;
                this_1.product_data[i]['brand'] = this_1.data.brand;
                this_1.product_data[i]['discount_amount'] = parseFloat(this_1.product_data[i]['discounted_price']) * parseFloat(this_1.product_data[i]['qty']);
                this_1.product_data[i]['discounted_price'] = parseFloat(this_1.product_data[i]['discounted_price']);
                // this.add_list.push(this.product_data[i]);
                if (this_1.data.gst_type == 'Gst Paid') {
                    this_1.product_data[i]['gst_amount'] = parseFloat(this_1.product_data[i]['amount']) - ((((this_1.product_data[i]['amount'] * 100))) / (parseFloat(this_1.product_data[i]['gst_percent'] + 100)));
                    this_1.product_data[i]['gst_percent'] = this_1.product_data[i]['gst_percent'];
                    this_1.product_data[i]['total_amount'] = (this_1.product_data[i]['amount']);
                    this_1.product_data[i]['dr_disc'] = this_1.product_data[i]['dr_disc'];
                    this_1.add_list.push(this_1.product_data[i]);
                }
                if (this_1.data.gst_type == 'Gst Extra') {
                    this_1.product_data[i]['gst_amount'] = (((this_1.product_data[i]['amount']) * (this_1.product_data[i]['gst_percent'])) / 100);
                    this_1.product_data[i]['gst_percent'] = this_1.product_data[i]['gst_percent'];
                    this_1.product_data[i]['total_amount'] = parseFloat(this_1.product_data[i]['gst_amount']) + (this_1.product_data[i]['amount']);
                    this_1.product_data[i]['dr_disc'] = this_1.product_data[i]['dr_disc'];
                    this_1.add_list.push(this_1.product_data[i]);
                }
            }
            //  this.data.product_id=''
        };
        var this_1 = this;
        for (var i = 0; i < this.product_data.length; i++) {
            var state_1 = _loop_1(i);
            if (typeof state_1 === "object")
                return state_1.value;
        }
        this.total_qty = 0;
        this.netamount = 0;
        this.order_total = 0;
        this.total_gst_amount = 0;
        this.total_Order_amount = 0;
        this.order_discount = 0;
        for (var i = 0; i < this.add_list.length; i++) {
            this.total_qty += parseInt(this.add_list[i]['qty']);
            this.total_gst_amount = parseFloat(this.add_list[i].gst_amount) + parseFloat(this.total_gst_amount);
            this.total_Order_amount = parseFloat(this.total_Order_amount) + (parseFloat(this.add_list[i]['product_price']) * this.add_list[i]['qty']);
            this.netamount = parseFloat(this.netamount) + parseInt(this.add_list[i]['qty']) * parseFloat(this.add_list[i]['net_price']);
            this.order_discount += parseFloat(this.add_list[i].discounted_price) * parseInt(this.add_list[i]['qty']);
            this.order_total = parseFloat(this.order_total) + parseFloat(this.add_list[i]['amount']);
        }
        this.total_gst_amount = parseFloat(this.total_gst_amount);
        this.total_gst_amount = this.total_gst_amount;
        this.total_Order_amount = this.total_Order_amount;
        this.order_total = this.order_total;
        this.order_discount = this.order_discount;
        if (this.data.gst_type == 'Gst Extra') {
            this.new_grand_total = parseFloat(this.netamount) + parseFloat(this.total_gst_amount);
        }
        else {
            this.new_grand_total = parseFloat(this.netamount);
        }
        this.data.brand = '';
        this.data.color = '';
        this.product_data = [];
        this.data.product_id = {};
        this.addToListButton = true;
        this.editprice = true;
        this.contenteditable = true;
    };
    SecondaryOrderAddComponent.prototype.listdelete = function (i) {
        this.add_list.splice(i, 1);
        this.total_qty = 0;
        this.netamount = 0;
        this.total_gst_amount = 0;
        this.order_total = 0;
        this.order_discount = 0;
        this.new_grand_total = 0;
        this.total_Order_amount = 0;
        for (var i_1 = 0; i_1 < this.add_list.length; i_1++) {
            this.total_qty = parseInt(this.total_qty) + parseInt(this.add_list[i_1]['qty']);
            this.netamount = parseFloat(this.netamount) + parseInt(this.add_list[i_1]['qty']) * parseFloat(this.add_list[i_1]['net_price']);
            this.total_Order_amount = parseFloat(this.total_Order_amount) + parseInt(this.add_list[i_1]['qty']) * parseFloat(this.add_list[i_1]['product_price']);
            this.order_discount += parseFloat(this.add_list[i_1].discounted_price) * parseInt(this.add_list[i_1]['qty']);
            this.total_gst_amount = this.add_list[i_1].gst_amount + this.total_gst_amount;
            this.order_total += parseFloat(this.add_list[i_1]['amount']);
        }
        if (this.data.gst_type == 'Gst Extra') {
            this.new_grand_total = parseFloat(this.netamount) + parseFloat(this.total_gst_amount);
        }
        else {
            this.new_grand_total = parseFloat(this.netamount);
        }
        this.total_qty = parseInt(this.total_qty);
        this.netamount = parseFloat(this.netamount);
        this.total_gst_amount = this.total_gst_amount;
        this.total_Order_amount = this.total_Order_amount;
        if (this.add_list.length == 0) {
            this.selectedBrand = '';
        }
    };
    SecondaryOrderAddComponent.prototype.resetChannel = function () {
        this.data.product_id = '';
        this.product_data = [];
        this.add_list = [];
        this.brandList = [];
        this.colorList = [];
    };
    SecondaryOrderAddComponent.prototype.save_order = function () {
        var _this = this;
        this.user_data.order_discount = this.order_discount;
        this.user_data.dr_id = this.data.dealer_name;
        this.user_data.distributor_id = this.dr_id;
        this.user_data.gst_type = this.data.gst_type;
        this.user_data.remark = this.data.remark;
        this.user_data.SpecialDiscountLable = this.SpecialDiscountLable;
        this.serve.post_rqst({ "cart_data": this.add_list, "user_data": this.user_data, }, "Order/secondaryOrdersAdd").subscribe(function (resp) {
            if (resp['statusCode'] == 200) {
                _this.dialog.success('', resp['statusMsg']);
                _this.nexturl = _this.route.snapshot.queryParams['returnUrl'] || '/distribution-list/1/Channel%20Partner/distribution-detail/' + _this.login_data['id'] + '/' + 'Secondary Order';
                _this.router.navigate([_this.nexturl]);
            }
            else {
                _this.dialog.error(resp['statusMsg']);
            }
        }, function (error) {
        });
    };
    SecondaryOrderAddComponent.prototype.back = function () {
        this.nexturl = this.route.snapshot.queryParams['returnUrl'] || '/distribution-list/1/Channel%20Partner/distribution-detail/' + this.login_data['id'] + '/' + 'Secondary Order';
        this.router.navigate([this.nexturl]);
    };
    SecondaryOrderAddComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-secondary-order-add',
            template: __webpack_require__(/*! ./secondary-order-add.component.html */ "./src/app/distribution/secondary-order-add/secondary-order-add.component.html"),
            styles: [__webpack_require__(/*! ./secondary-order-add.component.scss */ "./src/app/distribution/secondary-order-add/secondary-order-add.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_services_DatabaseService__WEBPACK_IMPORTED_MODULE_2__["DatabaseService"], ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_3__["ToastrManager"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], src_app_dialog_component__WEBPACK_IMPORTED_MODULE_5__["DialogComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], src_app_localstorage_service__WEBPACK_IMPORTED_MODULE_6__["sessionStorage"]])
    ], SecondaryOrderAddComponent);
    return SecondaryOrderAddComponent;
}());



/***/ }),

/***/ "./src/app/otp/convert-to-distributor/convert-to-distributor.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/otp/convert-to-distributor/convert-to-distributor.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"edit-modal\">\r\n  <form validate #form=\"ngForm\" name=\"form\" (ngSubmit)=\"(form.valid && form.submitted)?'':''\">\r\n    <p class=\"heading\">Please enter OTP Sent to +91-8588814439</p>\r\n    <div mat-dialog-content>\r\n      <div class=\"cs-form\">\r\n        <div class=\"row\">\r\n          <div class=\"col s12\">\r\n            <div class=\"control-field\">\r\n              <mat-form-field appearance=\"outline\">\r\n                <mat-label>Enter OTP</mat-label>\r\n                <input matInput placeholder=\"Enter OTP\" #otp=\"ngModel\" [(ngModel)]=\"data.otp\" minlength=\"6\"\r\n                  maxlength=\"6\" name=\"otp\" required>\r\n              </mat-form-field>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div mat-dialog-actions>\r\n      <button mat-stroked-button color=\"warn\" [mat-dialog-close]=\"false\">Cancel</button>\r\n      <button mat-raised-button color=\"accent\" type=\"submit\" [disabled]=\"savingFlag == true\"\r\n        [ngClass]=\"{'loading': savingFlag == true}\">\r\n        {{savingFlag == true ? 'Saving' : 'Save'}}\r\n      </button>\r\n    </div>\r\n  </form>\r\n</div>"

/***/ }),

/***/ "./src/app/otp/convert-to-distributor/convert-to-distributor.component.scss":
/*!**********************************************************************************!*\
  !*** ./src/app/otp/convert-to-distributor/convert-to-distributor.component.scss ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/otp/convert-to-distributor/convert-to-distributor.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/otp/convert-to-distributor/convert-to-distributor.component.ts ***!
  \********************************************************************************/
/*! exports provided: ConvertToDistributorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConvertToDistributorComponent", function() { return ConvertToDistributorComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng6-toastr-notifications */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/ng6-toastr-notifications/fesm5/ng6-toastr-notifications.js");
/* harmony import */ var src_services_DatabaseService__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/_services/DatabaseService */ "./src/_services/DatabaseService.ts");
/* harmony import */ var src_app_localstorage_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/localstorage.service */ "./src/app/localstorage.service.ts");







var ConvertToDistributorComponent = /** @class */ (function () {
    function ConvertToDistributorComponent(modelData, rout, dialog, serve, session, toast, dialogRef) {
        this.modelData = modelData;
        this.rout = rout;
        this.dialog = dialog;
        this.serve = serve;
        this.session = session;
        this.toast = toast;
        this.dialogRef = dialogRef;
        this.data = {};
        this.form = {};
        this.savingFlag = false;
    }
    ConvertToDistributorComponent.prototype.ngOnInit = function () {
    };
    ConvertToDistributorComponent.prototype.convert = function () {
        var _this = this;
        if (this.data.otp != this.modelData.otp) {
            this.toast.errorToastr("Otp Do Not Match");
            return;
        }
        setTimeout(function () {
            _this.serve.fetchData({ type: _this.data.type, dr_id: _this.data.id }, "CustomerNetwork/dr_type_update").subscribe((function (result) {
                _this.dialog.closeAll();
                if (_this.data.type == 1) {
                    _this.rout.navigate(['/distribution-list']);
                }
                if (_this.data.type == 7) {
                    _this.rout.navigate(['/direct-dealer']);
                }
                if (_this.data.type == 3) {
                    _this.rout.navigate(['/dealer']);
                }
            }));
        }, 200);
    };
    ConvertToDistributorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-convert-to-distributor',
            template: __webpack_require__(/*! ./convert-to-distributor.component.html */ "./src/app/otp/convert-to-distributor/convert-to-distributor.component.html"),
            styles: [__webpack_require__(/*! ./convert-to-distributor.component.scss */ "./src/app/otp/convert-to-distributor/convert-to-distributor.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object, _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"], src_services_DatabaseService__WEBPACK_IMPORTED_MODULE_5__["DatabaseService"], src_app_localstorage_service__WEBPACK_IMPORTED_MODULE_6__["sessionStorage"], ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_4__["ToastrManager"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]])
    ], ConvertToDistributorComponent);
    return ConvertToDistributorComponent;
}());



/***/ })

}]);