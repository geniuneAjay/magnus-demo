(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["replacement-replacement-replacement-module"],{

/***/ "./src/app/replacement/replacement/replacement.component.html":
/*!********************************************************************!*\
  !*** ./src/app/replacement/replacement/replacement.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-container\">\r\n  <div class=\"tools-container\">\r\n    <a mat-icon-button matTooltip=\"Back\" (click)=\"back();\">\r\n      <i class=\"material-icons\">arrow_back</i>\r\n    </a>\r\n    <h2>Reprint Coupon</h2>\r\n  </div>\r\n  <div class=\"container pt10 pl10 pr10 pb50\">\r\n\r\n\r\n\r\n    <div id=\"print_card\" style=\"width: 50%;margin-left: 250px;\" hidden>\r\n      <div id='qr_code_container'>\r\n        <!-- ***** CASE 1 BOX WITH ITEM START***** -->\r\n        <ng-container *ngIf=\"box1 == 1\">\r\n          <div style=\"width: 396.8503937px; position: relative; display: grid;grid-template-columns: 1fr 1fr 1fr 1fr;\"\r\n            *ngFor=\"let row of qrCode; let i = index;\">\r\n            <div class=\"qr_img\"\r\n              style=\"width: 94.488188976px; margin: 0 auto;  height: 94.488188976px;  position: relative;\">\r\n              <ngx-qrcode [elementType]=\"elementType\" value=\"{{row.coupon_code}}\" cssClass=\"aclass qr_img_card\"\r\n                errorCorrectionLevel=\"L\"> </ngx-qrcode>\r\n              <span class='fix-text'>Box {{i+1}}</span>\r\n              <span class='fix-code' style=\"text-align: left; margin-left: 5px;\">{{row.coupon_code}}</span>\r\n\r\n            </div>\r\n\r\n            <ng-container *ngFor=\"let subRow of row.itembox\">\r\n              <div class=\"qr_img\"\r\n                style=\"width: 94.488188976px; margin: 0 auto;  height: 94.488188976px;  position: relative;\">\r\n                <ngx-qrcode [elementType]=\"elementType\" value=\"{{subRow.coupon_code}}\" cssClass=\"aclass qr_img_card\"\r\n                  errorCorrectionLevel=\"L\"> </ngx-qrcode>\r\n                <span class='fix-code'>{{subRow.coupon_code}}</span>\r\n                <span class='fix-text-code'>{{getData.product_code}}</span>\r\n              </div>\r\n            </ng-container>\r\n          </div>\r\n        </ng-container>\r\n        <!-- ***** CASE 1 BOX WITH ITEM END***** -->\r\n        <!-- ***** CASE 2 ONLY BOX START ***** -->\r\n        <ng-container *ngIf=\"box2 == 2\">\r\n          <div style=\"width: 396.8503937px; position: relative; display: grid;grid-template-columns: 1fr 1fr 1fr 1fr;\">\r\n            <div class=\"qr_img\"\r\n              style=\"width: 94.488188976px; margin: 0 auto;  height: 94.488188976px;  position: relative;\"\r\n              *ngFor=\"let row of qrCode; let i = index;\">\r\n              <ngx-qrcode [elementType]=\"elementType\" value=\"{{row.coupon_code}}\" cssClass=\"aclass qr_img_card\"\r\n                errorCorrectionLevel=\"L\"> </ngx-qrcode>\r\n              <span class='fix-text'>BOX {{i+1}}</span>\r\n              <span class='fix-code' style=\"text-align: center; margin-left: -5px;\">{{row.coupon_code}}</span>\r\n              <span class='fix-text-right' style=\"text-align:left\"> {{getData.product_code}}</span>\r\n            </div>\r\n          </div>\r\n        </ng-container>\r\n        <!-- ***** CASE 2 ONLY BOX END ***** -->\r\n\r\n\r\n        <!-- ***** CASE 3 ONLY ITEM START***** -->\r\n        <ng-container *ngIf=\"box3 == 3\">\r\n          <div style=\"width: 396.8503937px; position: relative; display: grid;grid-template-columns: 1fr 1fr 1fr 1fr;\">\r\n            <div class=\"qr_img\"\r\n              style=\"width: 94.488188976px; margin: 0 auto;  height: 94.488188976px;  position: relative;\"\r\n              *ngFor=\"let row of qrCode\">\r\n              <ngx-qrcode [elementType]=\"elementType\" value=\"{{row.coupon_code}}\" cssClass=\"aclass qr_img_card\"\r\n                errorCorrectionLevel=\"L\"> </ngx-qrcode>\r\n              <span class='fix-code' style=\"text-align: center; margin-left: -3px;\">{{row.coupon_code}}</span>\r\n              <span class='fix-text-code'>{{getData.product_code}}</span>\r\n            </div>\r\n          </div>\r\n        </ng-container>\r\n        <!-- ***** CASE 3 ONLY ITEM END***** -->\r\n      </div>\r\n    </div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n    <div class=\"row \">\r\n      <div class=\"col s12\">\r\n        <div class=\"card pb0\">\r\n          <div class=\"card-body cs-form\">\r\n            <div class=\"row\">\r\n              <div class=\"col s12 m6 l6\">\r\n                <mat-form-field appearance=\"outline\">\r\n                  <mat-label>Coupon Number</mat-label>\r\n                  <input matInput placeholder=\"Type Here ...\" name=\"coupon_number\" #coupon_number=\"ngModel\"\r\n                    [(ngModel)]=\"couponNumber.coupon_number\" minlength=\"16\" maxlength=\"16\" min=\"0\" #focusInput\r\n                    (ngModelChange)=\"checkCoupon(couponNumber.coupon_number)\">\r\n                </mat-form-field>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"row mb100\">\r\n      <div class=\"col s12 m12 l12 grid-two-box\">\r\n        <div class=\"card\" *ngFor=\"let row of qrCode; let i = index;\">\r\n          <div class=\"card-head\">\r\n            <div class=\"qr-head\">\r\n              <h2 class=\"mb0\">{{getData.product_detail}}</h2>\r\n              <h2 class=\"mb0\">{{getData.sku_code}} {{getData.remarks ? '('+ getData.remarks + ')' : ''}}</h2>\r\n              <h2 class=\"mb0\" *ngIf=\"getData.hardner_code\">{{getData.hardner_code}} {{getData.hardner_qty}}</h2>\r\n            </div>\r\n          </div>\r\n          <div class=\"card-body\">\r\n            <div class=\"qr-box\">\r\n              <div class=\"qr-content\">\r\n                <ul>\r\n                  <li>Pearl, Precision Products</li>\r\n                  <li>PEARL PRECISION PRODUCTS PVT. LTD.</li>\r\n                  <li>B-14, Block B, Sector 80, Noida, Uttar Pradesh 201305</li>\r\n                  <li>Customer Care No:0120-4219233, 0120-4219235</li>\r\n                  <li>Email- enquiry@pproducts.in</li>\r\n                </ul>\r\n              </div>\r\n              <div class=\"cs-barcode\" *ngIf=\"getData.coupon_type == 'Master Box' \">\r\n                <ngx-qrcode [elementType]=\"elementType\" value=\"{{row.coupon_code}}\" cssClass=\"aclass\"\r\n                  errorCorrectionLevel=\"L\"> </ngx-qrcode>\r\n                <span class=\"fix\">{{i+1}} Box</span>\r\n                <span class=\"qr-code-number\">{{row.coupon_code}}</span>\r\n              </div>\r\n\r\n              <div class=\"cs-barcode\" *ngIf=\"getData.coupon_type == 'Item Box' \">\r\n                <ngx-qrcode [elementType]=\"elementType\" value=\"{{row.coupon_code}}\" cssClass=\"aclass\"\r\n                  errorCorrectionLevel=\"L\"> </ngx-qrcode>\r\n                <span class=\"qr-code-number\">{{row.coupon_code}}</span>\r\n              </div>\r\n\r\n            </div>\r\n            <div class=\"qr-box\" *ngFor=\"let subRow of row.itembox\">\r\n              <div class=\"qr-content\">\r\n                <ul>\r\n                  <li>Pearl, Precision Products</li>\r\n                  <li>PEARL PRECISION PRODUCTS PVT. LTD.</li>\r\n                  <li>B-14, Block B, Sector 80, Noida, Uttar Pradesh 201305</li>\r\n                  <li>Customer Care No:0120-4219233, 0120-4219235</li>\r\n                  <li>Email- enquiry@pproducts.in</li>\r\n                </ul>\r\n              </div>\r\n              <div class=\"cs-barcode\">\r\n                <ngx-qrcode [elementType]=\"elementType\" value=\"{{subRow.coupon_code}}\" cssClass=\"aclass\"\r\n                  errorCorrectionLevel=\"L\">\r\n                </ngx-qrcode>\r\n                <span class=\"qr-code-number\">{{subRow.coupon_code}}</span>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n\r\n    <div class=\"fab-btns\" *ngIf=\"qrCode.length > 0\">\r\n      <div class=\"fab-btns\">\r\n        <button class=\"pulse excel\" mat-fab color=\"primary\" (click)=\"printData();\">\r\n          <i class=\"material-icons\">print</i>\r\n          Print Coupon\r\n        </button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/replacement/replacement/replacement.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/replacement/replacement/replacement.component.ts ***!
  \******************************************************************/
/*! exports provided: ReplacementComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReplacementComponent", function() { return ReplacementComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_services_DatabaseService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/_services/DatabaseService */ "./src/_services/DatabaseService.ts");
/* harmony import */ var ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng6-toastr-notifications */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/ng6-toastr-notifications/fesm5/ng6-toastr-notifications.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_localstorage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/localstorage.service */ "./src/app/localstorage.service.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/common/fesm5/common.js");








var ReplacementComponent = /** @class */ (function () {
    function ReplacementComponent(location, service, dialog, route, session, rout, toast) {
        this.location = location;
        this.service = service;
        this.dialog = dialog;
        this.route = route;
        this.session = session;
        this.rout = rout;
        this.toast = toast;
        this.couponNumber = {};
        this.qrCode = [];
        this.getData = [];
        this.holdValue = [];
        this.userData = JSON.parse(localStorage.getItem('st_user'));
    }
    ReplacementComponent.prototype.ngOnInit = function () {
    };
    ReplacementComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        setTimeout(function () { return _this.inputEl.nativeElement.focus(); });
    };
    ReplacementComponent.prototype.checkCoupon = function (number) {
        var _this = this;
        if (number.length == 16) {
            if (number == undefined) {
                this.toast.errorToastr("Enter coupon code number");
                return;
            }
            if (number == '') {
                this.toast.errorToastr("Enter coupon code number");
                return;
            }
            if (this.box1 == 1) {
                this.returnBoxType = this.box1;
            }
            if (this.box2 == 2) {
                this.returnBoxType = this.box2;
            }
            if (this.box3 == 3) {
                this.returnBoxType = this.box3;
            }
            if (this.coupon_type == 'Master Box') {
                this.coupon_type = 'Master Box';
            }
            if (this.coupon_type == 'Item Box') {
                this.coupon_type = 'Item Box';
            }
            this.service.post_rqst({ 'coupon_code': number, 'coupon_type': this.coupon_type, 'box_type': this.returnBoxType }, 'CouponCode/mrpReplacement').subscribe(function (result) {
                if (result['statusCode'] == 200) {
                    _this.couponNumber.coupon_number = '';
                    _this.getData = result['coupon_history'];
                    _this.holdValue = result['coupon_master_list'];
                    var temData = void 0;
                    var temArray = void 0;
                    temData = _this.getData;
                    temArray = _this.holdValue;
                    if (_this.qrCode != '') {
                        var index = _this.qrCode.findIndex(function (row) { return row.coupon_code == number; });
                        if (index != -1) {
                            _this.toast.errorToastr('Coupon code already exists');
                            return;
                        }
                    }
                    _this.qrCode.push({ 'coupon_code': temArray[0]['coupon_code'], 'coupon_type': temArray[0]['coupon_type'], 'product_mrp': temArray[0]['product_mrp'], 'product_qty': temArray[0]['product_qty'], 'itembox': temArray[0]['itembox'], 'product_detail': temData.product_detail, 'sku_code': temData.sku_code, 'remarks': temData.remarks, 'hardner_code': temData.hardner_code, 'hardner_qty': temData.hardner_qty, 'date_created': temData.date_created, 'box_type': temData.box_type, 'batch_no': temData.batch_no, 'product_source': temData.product_source });
                    for (var i = 0; i < _this.qrCode.length; i++) {
                        if (_this.qrCode[i]['coupon_type'] == 'Master Box') {
                            _this.coupon_type = 'Master Box';
                        }
                        if (_this.qrCode[i]['coupon_type'] == 'Item Box') {
                            _this.coupon_type = 'Item Box';
                        }
                        if (_this.qrCode[i]['box_type'] == 1) {
                            _this.box1 = 1;
                        }
                        if (_this.qrCode[i]['box_type'] == 2) {
                            _this.box2 = 2;
                        }
                        if (_this.qrCode[i]['box_type'] == 3) {
                            _this.box3 = 3;
                        }
                    }
                }
                else {
                    _this.couponNumber.coupon_number = '';
                    _this.toast.errorToastr(result['statusMsg']);
                }
            }, function (error) {
            });
        }
    };
    ReplacementComponent.prototype.printData = function () {
        var printContents, popupWin;
        printContents = document.getElementById('print_card').innerHTML;
        popupWin = window.open('', '_blank', 'top=0,left=0,height=100%,width=auto');
        popupWin.document.open();
        popupWin.document.write("\n    <html>\n    <head>\n    <title>Print tab</title>\n    <style>\n    @media print {\n      #qr_code_container  {\n        page-break-inside: always;\n        margin-bottom: 0px\n      }\n      @page { \n        margin: 0.00in 0.00in  0.00in 0.00in;  \n      }\n      \n      .qr_img{\n        position: relative;\n        text-align: center;\n        font-size: 0.5rem\n      }\n      .qr_img span {\n        position: absolute;\n        left: 0;\n        z-index: 1;\n      }\n      .qr_img ngx-qrcode, .aclass{\n        width: 94.488188976px !important;\n        height: 94.488188976px !important;\n        text-align: center;\n        position: relative;\n      }\n      \n\n      \n      span.fix-text {\n        position: absolute;\n        left: -20px;\n        top: 30px;\n        transform: rotate(-90deg);\n        font-weight: bold;\n        font-size: 14px;\n        width: 60px;\n        height: 20px;\n        display: flex;\n        justify-content: center;\n      }\n      \n      span.fix-text-code{\n        position: absolute;\n        top: 33px;\n        left: -20px;\n        transform: rotate(-90deg);\n        font-weight: bold;\n        font-size: 8px;\n        height: 15px;\n        width: 60px;\n        display: flex;\n        align-items: center;\n        justify-content: center;\n      }\n      \n      span.fix-text-right {\n        position: absolute;\n        left: 58px;\n        top: 30px;\n        transform: rotate(-90deg);\n        font-weight: bold;\n        font-size: 10px;\n        width: 60px;\n        height: 20px;\n        display: flex;\n        justify-content: center;\n      }\n      \n      span.fix-code {\n        position: absolute;\n        bottom: 8px;\n        font-size: 9px;\n        width: 100%;\n        font-weight: 600;\n      }\n      .qr_img img{\n        width: 82px !important;\n        height: 82px !important;\n      }\n      \n      \n      \n      .qr-codes {\n        position: relative;\n      }\n      .qr-codes span{\n        position: absolute;\n        font-size: 10px;\n        bottom: -2px;\n        text-align: center;\n        width: 100%;\n        left:50%;\n        transform:translateX(-50%);\n      }\n      \n      \n      \n      body\n      {\n        font-family: 'arial';\n      }\n      </style>\n      </head>\n      <body onload=\"window.print();window.close()\">" + printContents + "</body>\n      </html>");
        popupWin.document.close();
    };
    ReplacementComponent.prototype.back = function () {
        this.location.back();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('focusInput'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], ReplacementComponent.prototype, "inputEl", void 0);
    ReplacementComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-replacement',
            template: __webpack_require__(/*! ./replacement.component.html */ "./src/app/replacement/replacement/replacement.component.html"),
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_7__["Location"], src_services_DatabaseService__WEBPACK_IMPORTED_MODULE_2__["DatabaseService"], _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatDialog"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], src_app_localstorage_service__WEBPACK_IMPORTED_MODULE_5__["sessionStorage"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_3__["ToastrManager"]])
    ], ReplacementComponent);
    return ReplacementComponent;
}());



/***/ }),

/***/ "./src/app/replacement/replacement/replacement.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/replacement/replacement/replacement.module.ts ***!
  \***************************************************************/
/*! exports provided: ReplacementModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReplacementModule", function() { return ReplacementModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_auth_component_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/auth-component.guard */ "./src/app/auth-component.guard.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var angular_ng_autocomplete__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! angular-ng-autocomplete */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/angular-ng-autocomplete/fesm5/angular-ng-autocomplete.js");
/* harmony import */ var ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng-multiselect-dropdown */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/ng-multiselect-dropdown/fesm5/ng-multiselect-dropdown.js");
/* harmony import */ var ngx_mat_select_search__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-mat-select-search */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/ngx-mat-select-search/fesm5/ngx-mat-select-search.js");
/* harmony import */ var src_app_app_utility_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/app-utility.module */ "./src/app/app-utility.module.ts");
/* harmony import */ var src_app_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/material */ "./src/app/material.ts");
/* harmony import */ var _techiediaries_ngx_qrcode__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @techiediaries/ngx-qrcode */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@techiediaries/ngx-qrcode/fesm5/techiediaries-ngx-qrcode.js");
/* harmony import */ var ngx_barcode__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-barcode */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/ngx-barcode/index.js");
/* harmony import */ var _replacement_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./replacement.component */ "./src/app/replacement/replacement/replacement.component.ts");















var replaceRoutes = [
    { path: "", children: [
            { path: "", component: _replacement_component__WEBPACK_IMPORTED_MODULE_14__["ReplacementComponent"], canActivate: [src_app_auth_component_guard__WEBPACK_IMPORTED_MODULE_4__["AuthComponentGuard"]], data: { expectedRole: ['1'] } }
        ] },
];
var ReplacementModule = /** @class */ (function () {
    function ReplacementModule() {
    }
    ReplacementModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_replacement_component__WEBPACK_IMPORTED_MODULE_14__["ReplacementComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(replaceRoutes),
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
                ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_8__["NgMultiSelectDropDownModule"],
                src_app_material__WEBPACK_IMPORTED_MODULE_11__["MaterialModule"],
                angular_ng_autocomplete__WEBPACK_IMPORTED_MODULE_7__["AutocompleteLibModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatDialogModule"],
                ngx_mat_select_search__WEBPACK_IMPORTED_MODULE_9__["NgxMatSelectSearchModule"],
                src_app_app_utility_module__WEBPACK_IMPORTED_MODULE_10__["AppUtilityModule"],
                _techiediaries_ngx_qrcode__WEBPACK_IMPORTED_MODULE_12__["NgxQRCodeModule"],
                ngx_barcode__WEBPACK_IMPORTED_MODULE_13__["NgxBarcodeModule"]
            ],
            entryComponents: []
        })
    ], ReplacementModule);
    return ReplacementModule;
}());



/***/ })

}]);