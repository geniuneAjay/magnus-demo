(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["spare-sapre-module-sapre-module-module"],{

/***/ "./src/app/spare/sapre-module/sapre-module.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/spare/sapre-module/sapre-module.module.ts ***!
  \***********************************************************/
/*! exports provided: SapreModuleModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SapreModuleModule", function() { return SapreModuleModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var src_app_auth_component_guard__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/auth-component.guard */ "./src/app/auth-component.guard.ts");
/* harmony import */ var _spare_list_spare_list_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../spare-list/spare-list.component */ "./src/app/spare/spare-list/spare-list.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-multiselect-dropdown */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/ng-multiselect-dropdown/fesm5/ng-multiselect-dropdown.js");
/* harmony import */ var src_app_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/material */ "./src/app/material.ts");
/* harmony import */ var angular_ng_autocomplete__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! angular-ng-autocomplete */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/angular-ng-autocomplete/fesm5/angular-ng-autocomplete.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var ngx_mat_select_search__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-mat-select-search */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/ngx-mat-select-search/fesm5/ngx-mat-select-search.js");
/* harmony import */ var src_app_app_utility_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/app-utility.module */ "./src/app/app-utility.module.ts");













var spareRoutes = [
    { path: "", children: [
            { path: "", component: _spare_list_spare_list_component__WEBPACK_IMPORTED_MODULE_4__["SpareListComponent"], canActivate: [src_app_auth_component_guard__WEBPACK_IMPORTED_MODULE_3__["AuthComponentGuard"]], data: { expectedRole: ['1'] } },
        ] },
];
var SapreModuleModule = /** @class */ (function () {
    function SapreModuleModule() {
    }
    SapreModuleModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_spare_list_spare_list_component__WEBPACK_IMPORTED_MODULE_4__["SpareListComponent"],],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild(spareRoutes),
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
                ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_7__["NgMultiSelectDropDownModule"],
                src_app_material__WEBPACK_IMPORTED_MODULE_8__["MaterialModule"],
                angular_ng_autocomplete__WEBPACK_IMPORTED_MODULE_9__["AutocompleteLibModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatDialogModule"],
                ngx_mat_select_search__WEBPACK_IMPORTED_MODULE_11__["NgxMatSelectSearchModule"],
                src_app_app_utility_module__WEBPACK_IMPORTED_MODULE_12__["AppUtilityModule"]
            ]
        })
    ], SapreModuleModule);
    return SapreModuleModule;
}());



/***/ }),

/***/ "./src/app/spare/spare-list/spare-list.component.html":
/*!************************************************************!*\
  !*** ./src/app/spare/spare-list/spare-list.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-container\">\r\n  <app-loader *ngIf=\"excelLoader\"></app-loader>\r\n  <div class=\"tools-container\">\r\n    <h2>Spare Part List</h2>\r\n\r\n\r\n    <div class=\"left-auto df ac flex-gap-10\">\r\n      <a mat-icon-button matTooltip=\"Refresh\" (click)=\"refresh()\">\r\n        <i class=\"material-icons\">refresh</i>\r\n      </a>\r\n\r\n      <div class=\"pagination\" *ngIf=\"spareList.length > 0\">\r\n        <div class=\"pagination-content\">\r\n          Pages\r\n          <span>{{pagenumber}}</span>\r\n          of\r\n          <span>{{total_page}}</span>\r\n        </div>\r\n        <div class=\"page-nav\">\r\n          <button mat-icon-button matTooltip=\"Older\" (click)=\"pervious()\" [disabled]=\"start == 0\">\r\n            <i class=\"material-icons\">navigate_before</i>\r\n          </button>\r\n          <button mat-icon-button matTooltip=\"Newer\" (click)=\"nextPage()\" [disabled]=\"pagenumber == total_page \">\r\n            <i class=\"material-icons\">navigate_next</i>\r\n          </button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n\r\n  <div class=\"container container-scroll\">\r\n    <div class=\"cs-table horizontal-scroll\">\r\n      <div class=\"sticky-head\">\r\n        <div class=\"table-head\">\r\n          <table>\r\n            <tr>\r\n              <th class=\"w50\">Sr.No</th>\r\n              <th class=\"w150\">Date Created</th>\r\n              <th class=\"w150\">Part Name</th>\r\n              <th class=\"w100\">Part No.</th>\r\n              <th class=\"w100 text-center\">Min Stock Alert</th>\r\n              <th class=\"w50 text-center\">Stock Qty</th>\r\n              <th class=\"w80 text-center\">Assign Qty</th>\r\n              <th class=\"w100 text-right\">MRP</th>\r\n              <th class=\"w300 text-center\">Stock</th>\r\n              <th class=\"w100 text-center\">Image</th>\r\n              <th class=\"w100 text-center\">Action</th>\r\n            </tr>\r\n          </table>\r\n        </div>\r\n\r\n        <div class=\"table-head bdrt\">\r\n          <table>\r\n            <tr>\r\n              <th class=\"w50\"></th>\r\n              <th class=\"w150\">\r\n                <div class=\"th-search-acmt\">\r\n                  <mat-form-field class=\"cs-input date-column infix-bodr\">\r\n                    <input matInput [matDatepicker]=\"picker\" placeholder=\"Date\" name=\"date_created\"\r\n                      #date_created=\"ngModel\" [(ngModel)]=\"filter_data.date_created\" (ngModelChange)=\"date_format()\"\r\n                      [max]=\"today_date\" readonly>\r\n                    <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\r\n                    <mat-datepicker #picker></mat-datepicker>\r\n                  </mat-form-field>\r\n                </div>\r\n              </th>\r\n              <th class=\"w150\">\r\n                <div class=\"th-search-acmt\">\r\n                  <mat-form-field>\r\n                    <input type=\"text\" matInput placeholder=\"Search ...\" name=\"part_name\"\r\n                      (keyup.enter)=\"getSpareList('')\" #part_name=\"ngModel\" [(ngModel)]=\"filter_data.part_name\">\r\n                  </mat-form-field>\r\n                </div>\r\n              </th>\r\n              <th class=\"w100\">\r\n                <div class=\"th-search-acmt\">\r\n                  <mat-form-field>\r\n                    <input type=\"text\" matInput placeholder=\"Search ...\" name=\"part_no\" (keyup.enter)=\"getSpareList('')\"\r\n                      #part_no=\"ngModel\" [(ngModel)]=\"filter_data.part_no\">\r\n                  </mat-form-field>\r\n                </div>\r\n              </th>\r\n              <th class=\"w100 text-center\"></th>\r\n              <th class=\"w50 text-center\"></th>\r\n              <th class=\"w80 text-center\"></th>\r\n              <th class=\"w100 text-right\"></th>\r\n              <th class=\"w300 text-center\"></th>\r\n              <th class=\"w100 text-center\"></th>\r\n              <th class=\"w100 text-center\"></th>\r\n            </tr>\r\n          </table>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"table-container\">\r\n        <div class=\"table-content\">\r\n          <table>\r\n\r\n            <ng-container *ngIf=\"!loader\">\r\n              <tr *ngFor=\"let row of spareList; let i = index \"\r\n                [ngClass]=\"{'Current': service.currentUserID == row.id}\">\r\n                <td class=\"w50\">{{i + 1 + sr_no}}</td>\r\n                <td class=\"w150\">{{row.date_created ? (row.date_created | date : 'dd MMM yyy ,h:mm a') : '--'}}</td>\r\n                <td class=\"w150\">{{row.part_name? (row.part_name | titlecase):'--'}}</td>\r\n                <td class=\"w100\">{{row.part_no? (row.part_no | titlecase):'--'}}</td>\r\n                <td class=\"w100 text-center\"\r\n                  [ngClass]=\"{'light-green': row.current_stock >= row.min_stock , 'red-bgclr': row.current_stock < row.min_stock}\">\r\n                  {{row.min_stock}}</td>\r\n                <td class=\"w50 text-center\">{{row.current_stock? row.current_stock:'0'}}</td>\r\n                <td class=\"w80 text-center\">\r\n                  <button mat-raised-button style=\"border-radius: 25px;\" (click)=\"assignZero(row.assign_stock)\"\r\n                    [ngClass]=\"{'pulse': fabBtnValue=='activity'}\" *ngIf=\"row.assign_stock=='0'\">\r\n                    <span>{{row.assign_stock?row.assign_stock:0}}</span>\r\n                    <mat-icon>chevron_right</mat-icon>\r\n                  </button>\r\n                  <button mat-raised-button style=\"border-radius: 25px;\"\r\n                    (click)=\"spareQty(row.part_name,row.part_no,row.assign_part,'Assign Stock')\"\r\n                    [ngClass]=\"{'pulse': fabBtnValue=='activity'}\" *ngIf=\"row.assign_stock!='0'\">\r\n                    <span>{{row.assign_stock?row.assign_stock:0}}</span>\r\n                    <mat-icon>chevron_right</mat-icon>\r\n                  </button>\r\n                </td>\r\n                <td class=\"w100 text-right\">Rs.{{row.mrp? row.mrp:'--'}}</td>\r\n                <td class=\"w300 text-center\">\r\n                  <div class=\"flex-button\">\r\n                    <button mat-raised-button style=\"border-radius: 25px;\"\r\n                      (click)=\"spareQty(row.part_name,row.part_no,row.incoming_data,'Incoming')\"\r\n                      [ngClass]=\"{'pulse': fabBtnValue=='activity'}\" *ngIf=\"row.incoming_data.length\">\r\n                      <mat-icon>arrow_circle_down</mat-icon>\r\n                      <span>Incoming</span>\r\n                    </button>\r\n                    <button mat-raised-button style=\"border-radius: 25px;\" (click)=\"returnQty(row.incoming_data)\"\r\n                      [ngClass]=\"{'pulse': fabBtnValue=='activity'}\" *ngIf=\"!row.incoming_data.length\">\r\n                      <mat-icon>arrow_circle_down</mat-icon>\r\n                      <span>Incoming</span>\r\n                    </button>\r\n                    <button mat-raised-button style=\"border-radius: 25px;\"\r\n                      (click)=\"spareQty(row.part_name,row.part_no,row.assign_part,'Outgoing')\"\r\n                      [ngClass]=\"{'pulse': fabBtnValue=='activity'}\" *ngIf=\"row.assign_stock!='0'\">\r\n                      <mat-icon>arrow_circle_up</mat-icon>\r\n                      <span>Outgoing</span>\r\n                    </button>\r\n                    <button mat-raised-button style=\"border-radius: 25px;\" (click)=\"outgoingStock(row.assign_stock)\"\r\n                      [ngClass]=\"{'pulse': fabBtnValue=='activity'}\" *ngIf=\"row.assign_stock=='0'\">\r\n                      <mat-icon>arrow_circle_up</mat-icon>\r\n                      <span>Outgoing</span>\r\n                    </button>\r\n                    <button mat-raised-button style=\"border-radius: 25px;\"\r\n                      (click)=\"spareQty(row.part_name,row.part_no,row.return_data,'Return')\"\r\n                      [ngClass]=\"{'pulse': fabBtnValue=='activity'}\" *ngIf=\"row.return_data.length\">\r\n                      <mat-icon>assignment_returned</mat-icon>\r\n                      <span>Return</span>\r\n                    </button>\r\n                    <button mat-raised-button style=\"border-radius: 25px;\" (click)=\"return(row.return_data)\"\r\n                      [ngClass]=\"{'pulse': fabBtnValue=='activity'}\" *ngIf=\"!row.return_data.length\">\r\n                      <mat-icon>assignment_returned</mat-icon>\r\n                      <span>Return</span>\r\n                    </button>\r\n                  </div>\r\n                </td>\r\n                <td class=\"w100 text-center\">\r\n                  <div *ngIf=\"row.image.length\">\r\n                    <img [src]=\"url+row.image\" (click)=\"imageModel(url+row.image)\"\r\n                      style=\"cursor: zoom-in; width: 50px;\">\r\n                  </div>\r\n                </td>\r\n                <td class=\"w100 text-center\">\r\n                  <div class=\"action-button\">\r\n                    <button mat-icon-button matTooltip=\"View\" (click)=\"addSpareDialog('edit',row,row.id)\">\r\n                      <i class=\"material-icons edit\">edit</i>\r\n                    </button>\r\n                    <button mat-icon-button matTooltip=\"Delete\" (click)=\"delete(row.id)\">\r\n                      <i class=\"material-icons red-clr\">delete</i>\r\n                    </button>\r\n                  </div>\r\n                </td>\r\n\r\n              </tr>\r\n            </ng-container>\r\n            <ng-container *ngIf=\"loader\">\r\n              <tr class=\"sk-loading\" *ngFor=\"let row of [].constructor(10)\">\r\n                <td class=\"w50\">\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n                <td class=\"w150\">\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n                <td class=\"w150\">\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n                <td class=\"w100\">\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n                <td class=\"w100 text-center\">\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n                <td class=\"w50 text-center\">\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n                <td class=\"w80 text-center\">\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n                <td class=\"w100 text-right\">\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n                <td class=\"w300 text-center\">\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n                <td class=\"w100 text-center\">\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n                <td class=\"w100 text-center\">\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n              </tr>\r\n            </ng-container>\r\n          </table>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <ng-container *ngIf=\"datanotofound==true && spareList.length == 0;\">\r\n      <app-not-result-found></app-not-result-found>\r\n    </ng-container>\r\n  </div>\r\n  <div>\r\n  </div>\r\n\r\n  <div class=\"fab-btns\">\r\n    <button class=\"pulse excel\" mat-fab color=\"primary\" [ngClass]=\"{'pulse': fabBtnValue=='add'}\"\r\n      [matMenuTriggerFor]=\"menu\">\r\n      <i class=\"material-icons\">apps</i>\r\n      Action\r\n    </button>\r\n  </div>\r\n  <mat-menu #menu=\"matMenu\">\r\n    <button mat-menu-item (click)=\"downloadExcel();\" *ngIf=\"spareList.length > 0\">\r\n      <mat-icon>download</mat-icon>\r\n      <span>Download Excel</span>\r\n    </button>\r\n    <button mat-menu-item (click)=\"spareQty('','','','Return Stock')\" routerLink=\"add-customer\"\r\n      routerLinkActive=\"router-link-active\">\r\n      <mat-icon>assignment_returned</mat-icon>\r\n      <span>Return Stock</span>\r\n    </button>\r\n    <button mat-menu-item (click)=\"spareQty('','','','Manage Stock')\" routerLink=\"add-customer\"\r\n      routerLinkActive=\"router-link-active\">\r\n      <mat-icon>inventory</mat-icon>\r\n      <span>Manage Stock</span>\r\n    </button>\r\n    <button mat-menu-item (click)=\"spareQty('','','','assign_stock')\" routerLink=\"add-customer\"\r\n      routerLinkActive=\"router-link-active\">\r\n      <mat-icon>assignment</mat-icon>\r\n      <span>Assign Stock</span>\r\n    </button>\r\n    <button mat-menu-item (click)=\"addSpareDialog('add','','')\" routerLinkActive=\"router-link-active\">\r\n      <mat-icon>add</mat-icon>\r\n      <span>Add Spare Part</span>\r\n    </button>\r\n    <button mat-menu-item (click)=\"upload_excel('addSpare');\">\r\n      <mat-icon>cloud_upload</mat-icon>\r\n      <span>Upload New Data</span>\r\n    </button>\r\n  </mat-menu>\r\n</div>"

/***/ }),

/***/ "./src/app/spare/spare-list/spare-list.component.scss":
/*!************************************************************!*\
  !*** ./src/app/spare/spare-list/spare-list.component.scss ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/spare/spare-list/spare-list.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/spare/spare-list/spare-list.component.ts ***!
  \**********************************************************/
/*! exports provided: SpareListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SpareListComponent", function() { return SpareListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! moment */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng6-toastr-notifications */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/ng6-toastr-notifications/fesm5/ng6-toastr-notifications.js");
/* harmony import */ var src_services_DatabaseService__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/_services/DatabaseService */ "./src/_services/DatabaseService.ts");
/* harmony import */ var src_app_dialog_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/dialog.component */ "./src/app/dialog.component.ts");
/* harmony import */ var src_app_dialog_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/dialog.service */ "./src/app/dialog.service.ts");
/* harmony import */ var src_app_localstorage_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/localstorage.service */ "./src/app/localstorage.service.ts");
/* harmony import */ var src_app_service_exportexcel_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/service/exportexcel.service */ "./src/app/service/exportexcel.service.ts");
/* harmony import */ var _add_spare_add_spare_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../add-spare/add-spare.component */ "./src/app/spare/add-spare/add-spare.component.ts");
/* harmony import */ var src_app_image_module_image_module_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/image-module/image-module.component */ "./src/app/image-module/image-module.component.ts");
/* harmony import */ var _assign_qty_assign_qty_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../assign-qty/assign-qty.component */ "./src/app/spare/assign-qty/assign-qty.component.ts");
/* harmony import */ var src_app_product_upload_product_upload_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/product-upload/product-upload.component */ "./src/app/product-upload/product-upload.component.ts");











;




var SpareListComponent = /** @class */ (function () {
    function SpareListComponent(session, router, alert, service, editdialog, dialog, route, toast, excelservice, dialog1) {
        this.session = session;
        this.router = router;
        this.alert = alert;
        this.service = service;
        this.editdialog = editdialog;
        this.dialog = dialog;
        this.route = route;
        this.toast = toast;
        this.excelservice = excelservice;
        this.dialog1 = dialog1;
        this.fabBtnValue = 'add';
        this.spareList = [];
        this.filter = false;
        this.data = [];
        this.start = 0;
        this.total_page = 0;
        this.pagenumber = 0;
        this.loader = false;
        this.tab_active = 'all';
        this.filter_data = {};
        this.excelLoader = false;
        this.datanotofound = false;
        this.downurl = '';
        this.url = this.service.uploadUrl + 'service_task/';
        this.downurl = service.downloadUrl;
        this.page_limit = service.pageLimit;
    }
    SpareListComponent.prototype.ngOnInit = function () {
        this.filter_data = this.service.getData();
        this.getSpareList('');
    };
    SpareListComponent.prototype.pervious = function () {
        this.start = this.start - this.page_limit;
        this.getSpareList('');
    };
    SpareListComponent.prototype.nextPage = function () {
        this.start = this.start + this.page_limit;
        this.getSpareList('');
    };
    SpareListComponent.prototype.refresh = function () {
        this.start = 0;
        this.filter_data = {};
        this.getSpareList('');
    };
    SpareListComponent.prototype.clear = function () {
        this.refresh();
    };
    SpareListComponent.prototype.goToDetailHandler = function (id) {
        window.open("/customer-detail/" + id);
    };
    SpareListComponent.prototype.date_format = function () {
        this.filter_data.date_created = moment__WEBPACK_IMPORTED_MODULE_4__(this.filter_data.date_created).format('YYYY-MM-DD');
        this.getSpareList('');
    };
    SpareListComponent.prototype.imageModel = function (image) {
        var dialogRef = this.dialog.open(src_app_image_module_image_module_component__WEBPACK_IMPORTED_MODULE_12__["ImageModuleComponent"], {
            panelClass: 'Image-modal',
            data: {
                image: image,
            }
        });
        dialogRef.afterClosed().subscribe(function (result) {
        });
    };
    SpareListComponent.prototype.getSpareList = function (data) {
        var _this = this;
        if (this.pagenumber > this.total_page) {
            this.pagenumber = this.total_page;
            this.start = this.pageCount - this.page_limit;
        }
        if (this.start < 0) {
            this.start = 0;
        }
        var header = this.service.post_rqst({ 'filter': this.filter_data, 'start': this.start, 'pagelimit': this.page_limit }, "ServiceSparePart/sparePartList");
        this.loader = true;
        header.subscribe(function (result) {
            if (result['statusCode'] == 200) {
                _this.spareList = result['result'];
                _this.pageCount = result['count'];
                _this.scheme_active_count = result['scheme_active_count'];
                _this.loader = false;
                if (_this.spareList.length == 0) {
                    _this.datanotofound = false;
                }
                else {
                    _this.datanotofound = true;
                    _this.loader = false;
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
                for (var i = 0; i < _this.spareList.length; i++) {
                    if (_this.spareList[i].status == '1') {
                        _this.spareList[i].newStatus = true;
                    }
                    else if (_this.spareList[i].status == '0') {
                        _this.spareList[i].newStatus = false;
                    }
                }
            }
            else {
                _this.toast.errorToastr(result['statusMsg']);
                _this.datanotofound = true;
                _this.loader = false;
            }
        });
    };
    SpareListComponent.prototype.lastBtnValue = function (value) {
        this.fabBtnValue = value;
    };
    SpareListComponent.prototype.downloadExcel = function () {
        var _this = this;
        this.excelLoader = true;
        this.service.post_rqst({ 'filter': this.filter_data }, "Excel/service_spare_part_list").subscribe((function (result) {
            if (result['msg'] == true) {
                window.open(_this.downurl + result['filename']);
                _this.getSpareList('');
                _this.excelLoader = false;
            }
            else {
            }
        }));
    };
    SpareListComponent.prototype.addSpareDialog = function (type, detail, id) {
        var _this = this;
        var dialogRef = this.dialog.open(_add_spare_add_spare_component__WEBPACK_IMPORTED_MODULE_11__["AddSpareComponent"], {
            width: '500px',
            panelClass: 'cs-modal',
            data: {
                type: type,
                detail: detail,
                id: id
            }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            // if (result != false) {
            _this.getSpareList('');
            // }
        });
    };
    SpareListComponent.prototype.spareQty = function (part_name, part_no, row, type) {
        var _this = this;
        var dialogRef = this.dialog.open(_assign_qty_assign_qty_component__WEBPACK_IMPORTED_MODULE_13__["AssignQtyComponent"], {
            width: '550px',
            panelClass: 'cs-modal',
            data: {
                data: row,
                part_name: part_name,
                part_no: part_no,
                type: type
            }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log(result);
            if (result == true) {
                _this.getSpareList('');
            }
        });
    };
    SpareListComponent.prototype.delete = function (id) {
        var _this = this;
        this.dialog1.delete('Spare!').then(function (result) {
            if (result) {
                _this.service.post_rqst({ 'id': id }, "ServiceSparePart/deleteSparePart").subscribe(function (result) {
                    if (result['statusCode'] == 200) {
                        _this.toast.successToastr(result['statusMsg']);
                        _this.getSpareList('');
                    }
                    else {
                        _this.toast.errorToastr(result['statusMsg']);
                    }
                });
            }
        });
    };
    SpareListComponent.prototype.upload_excel = function (type) {
        var _this = this;
        var dialogRef = this.dialog.open(src_app_product_upload_product_upload_component__WEBPACK_IMPORTED_MODULE_14__["ProductUploadComponent"], {
            width: '500px',
            panelClass: 'cs-modal',
            data: {
                'from': 'beat',
                'modal_type': type
            }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result == true) {
                _this.getSpareList('');
            }
        });
    };
    SpareListComponent.prototype.assignZero = function (assign_stock) {
        if (assign_stock == 0) {
            this.toast.errorToastr('Assign Stock Qty Is Zero');
        }
    };
    SpareListComponent.prototype.outgoingStock = function (assign_stock) {
        if (assign_stock == 0) {
            this.toast.errorToastr('Outgoing Stock Qty Is Zero');
        }
    };
    SpareListComponent.prototype.return = function (return_data) {
        if (return_data.length == 0) {
            this.toast.errorToastr('Return Stock Qty Is Zero');
        }
    };
    SpareListComponent.prototype.returnQty = function (return_data) {
        if (return_data.length == 0) {
            this.toast.errorToastr('Incoming Stock Qty Is Zero');
        }
    };
    SpareListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-spare-list',
            template: __webpack_require__(/*! ./spare-list.component.html */ "./src/app/spare/spare-list/spare-list.component.html"),
            styles: [__webpack_require__(/*! ./spare-list.component.scss */ "./src/app/spare/spare-list/spare-list.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_localstorage_service__WEBPACK_IMPORTED_MODULE_9__["sessionStorage"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], src_app_dialog_component__WEBPACK_IMPORTED_MODULE_7__["DialogComponent"], src_services_DatabaseService__WEBPACK_IMPORTED_MODULE_6__["DatabaseService"], src_app_dialog_service__WEBPACK_IMPORTED_MODULE_8__["DialogService"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_5__["ToastrManager"], src_app_service_exportexcel_service__WEBPACK_IMPORTED_MODULE_10__["ExportexcelService"], src_app_dialog_component__WEBPACK_IMPORTED_MODULE_7__["DialogComponent"]])
    ], SpareListComponent);
    return SpareListComponent;
}());



/***/ })

}]);