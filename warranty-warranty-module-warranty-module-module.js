(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["warranty-warranty-module-warranty-module-module"],{

/***/ "./src/app/warranty/warranty-add/warranty-add.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/warranty/warranty-add/warranty-add.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-container\">\r\n  <app-loader *ngIf=\"loader\"></app-loader>\r\n  <div class=\"tools-container\">\r\n    <a mat-icon-button matTooltip=\"Back\" (click)=\"back()\">\r\n      <i class=\"material-icons\">arrow_back</i>\r\n    </a>\r\n    <h2>{{id ? 'Edit' : 'Add'}} Warranty</h2>\r\n  </div>\r\n  <div class=\"container pt10 pl10 pr10 pb50\">\r\n    <form #f=\"ngForm\" (ngSubmit)=\"f.valid && submitDetail()\">\r\n      <div class=\"row\">\r\n        <div class=\"col s12\">\r\n          <div class=\"card pb0\">\r\n            <div class=\"card-head\">\r\n              <h2>Warranty Information</h2>\r\n            </div>\r\n            <div class=\"card-body cs-form\">\r\n              <div class=\"row\">\r\n                <div class=\"col s12 m3 l3\">\r\n                  <mat-form-field appearance=\"outline\" [ngClass]=\"{'has-error' : customer_mobile.invalid } \">\r\n                    <mat-label>Mobile Number</mat-label>\r\n                    <input type=\"text\" name=\"customer_mobile\" minlength=\"10\" maxlength=\"10\" matInput placeholder=\"\"\r\n                    #customer_mobile=\"ngModel\" [(ngModel)]=\"data.customer_mobile\"\r\n                    onkeypress=\"return event.charCode>=48 && event.charCode<=57\" required\r\n                    (ngModelChange)=\"checkMobile()\">\r\n                  </mat-form-field>\r\n                  <div class=\"alert alert-danger\" *ngIf=\"customer_mobile.touched || f.submitted\">\r\n                    <p *ngIf=\"customer_mobile.errors?.required\">This field is required</p>\r\n                  </div>\r\n                  <div class=\"alert alert-danger\" *ngIf=\"exist\">\r\n                    Mobile no. already Exists.\r\n                  </div>\r\n                </div>\r\n                <div class=\"col s12 m3 l3\">\r\n                  <mat-form-field appearance=\"outline\" [ngClass]=\"{'has-error' : customer_name?.invalid } \">\r\n                    <mat-label>Customer Name</mat-label>\r\n                    <input matInput placeholder=\"Type Here ...\" name=\"customer_name\" #customer_name=\"ngModel\"\r\n                    [(ngModel)]=\"data.customer_name\"\r\n                    onkeypress=\"return (event.charCode >= 65 && event.charCode <= 90) || (event.charCode >= 97 && event.charCode <= 122) || event.charCode === 32\"\r\n                    required>\r\n                  </mat-form-field>\r\n                  <div class=\"alert alert-danger\" *ngIf=\"f.submitted && customer_name?.invalid\">\r\n                    This field is required\r\n                  </div>\r\n                </div>        \r\n                <div class=\"col s12 m3 l3\">\r\n                  <mat-form-field appearance=\"outline\" [ngClass]=\"{ 'has-error': alternate_mobile_no.invalid }\">\r\n                    <mat-label>Alternate Mobile Number</mat-label>\r\n                    \r\n                    <input type=\"text\" name=\"alternate_mobile_no\" minlength=\"10\" maxlength=\"10\" matInput placeholder=\"\"\r\n                    #alternate_mobile_no=\"ngModel\" [(ngModel)]=\"data.alternate_mobile_no\"\r\n                    onkeypress=\"return event.charCode>=48 && event.charCode<=57\" />\r\n                  </mat-form-field>\r\n                </div>\r\n                <div class=\"col s12 m3 l3\">\r\n                  <mat-form-field appearance=\"outline\" [ngClass]=\"{'has-error' : bill_no?.invalid } \">\r\n                    <mat-label>Bill No.</mat-label>\r\n                    <input matInput placeholder=\"Type Here ...\" name=\"bill_no\" #bill_no=\"ngModel\"\r\n                    [(ngModel)]=\"data.bill_no\">\r\n                  </mat-form-field>\r\n                  <div class=\"alert alert-danger\" *ngIf=\"f.submitted && bill_no?.invalid\">\r\n                    This field is required\r\n                  </div>\r\n                </div>\r\n                <!-- <div class=\"col s12 m3 l3\">\r\n                  <mat-form-field appearance=\"outline\" [ngClass]=\"{'has-error' : serial_no?.invalid } \">\r\n                    <mat-label>Serial No.</mat-label>\r\n                    <input matInput placeholder=\"Type Here ...\" name=\"serial_no\" #serial_no=\"ngModel\"\r\n                    [(ngModel)]=\"data.serial_no\">\r\n                  </mat-form-field>\r\n                  <div class=\"alert alert-danger\" *ngIf=\"f.submitted && serial_no?.invalid\">\r\n                    This field is required\r\n                  </div>\r\n                </div> -->\r\n              </div>\r\n              <div class=\"row\">\r\n                <div class=\"col s12 m3 l3\">\r\n                  <mat-form-field appearance=\"outline\">\r\n                    <mat-label>Date Of Purchase</mat-label>\r\n                    <input name=\"date_of_purchase\" matInput placeholder=\"\" #date_of_purchase=\"ngModel\"\r\n                      [(ngModel)]=\"data.date_of_purchase\" [matDatepicker]=\"picker\" [max]=\"currentDate\" required>\r\n                    <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\r\n                    <mat-datepicker #picker disabled=\"false\"></mat-datepicker>\r\n                  </mat-form-field>\r\n                  <div class=\"alert alert-danger\" *ngIf=\"date_of_purchase.touched || f.submitted\">\r\n                    <p *ngIf=\"date_of_purchase.errors?.required\">This field is required</p>\r\n                  </div>\r\n                </div>      \r\n              </div>\r\n              \r\n              \r\n              <div class=\"card-head\">\r\n                <h2>Select Product</h2>\r\n              </div>\r\n              \r\n              <div class=\"row\">\r\n                <div class=\"col s12 m3 l3\">\r\n                  <mat-form-field appearance=\"outline\" [ngClass]=\"{'has-error' : segment_id.invalid } \">\r\n                    <mat-label>Category</mat-label>\r\n                    <mat-select name=\"segment_id\" #segment_id=\"ngModel\" [(ngModel)]=\"product_data.segment_id\"\r\n                    (selectionChange)=\"getSubCatgory(product_data.segment_id)\">\r\n                    <mat-option *ngFor=\"let row of segmentList\" [value]=\"row.id\" color=\"accent\">{{row.category |\r\n                      titlecase}}</mat-option>\r\n                    </mat-select>\r\n                  </mat-form-field>\r\n                  <div class=\"alert alert-danger\" *ngIf=\"f.submitted && segment_id?.invalid \">\r\n                    This field is required\r\n                  </div>\r\n                </div>\r\n                \r\n                <div class=\"col s12 m3 l3\" *ngIf=\"SubcategoryList.length > 0 \">\r\n                  <mat-form-field appearance=\"outline\" [ngClass]=\"{'has-error' : sub_segment_id.invalid } \">\r\n                    <mat-label>Sub Category</mat-label>\r\n                    <mat-select name=\"sub_segment_id\" #sub_segment_id=\"ngModel\"\r\n                    [(ngModel)]=\"product_data.sub_segment_id\"\r\n                    (selectionChange)=\"getProduct(product_data.segment_id,product_data.sub_segment_id)\">\r\n                    <mat-option *ngFor=\"let row of SubcategoryList\" [value]=\"row.id\"\r\n                    color=\"accent\">{{row.sub_category_name | titlecase}}</mat-option>\r\n                  </mat-select>\r\n                </mat-form-field>\r\n                <div class=\"alert alert-danger\" *ngIf=\"f.submitted && sub_segment_id?.invalid \">\r\n                  This field is required\r\n                </div>\r\n              </div>\r\n              <div class=\"col s12 m3 l3\">\r\n                <mat-form-field appearance=\"outline\" [ngClass]=\"{'has-error' : product_id.invalid } \">\r\n                  <mat-label>Product Name</mat-label>\r\n                  <mat-select name=\"product_id\" #product_id=\"ngModel\" [(ngModel)]=\"product_data.product_id\"\r\n                  (selectionChange)=\"getProductInfo(product_data.product_id)\"\r\n                  (ngModelChange)=\"findId(data.product_id)\">\r\n                  <mat-option>\r\n                    <ngx-mat-select-search noEntriesFoundLabel=\"'no data found'\" placeholderLabel=\"Search..\"\r\n                    (keyup)=\"getProductName($event.target.value)\"></ngx-mat-select-search>\r\n                  </mat-option>\r\n                  <mat-option *ngFor=\"let row of productList\" [value]=\"row.id\" color=\"accent\">{{row.product_name |\r\n                    titlecase}} -\r\n                    {{row.product_code}}</mat-option>\r\n                  </mat-select>\r\n                </mat-form-field>\r\n                <div class=\"alert alert-danger\" *ngIf=\"f.submitted && product_id?.invalid \">\r\n                  This field is required\r\n                </div>\r\n              </div>\r\n              <div class=\"col s12 m3 l3\">\r\n                <mat-form-field appearance=\"outline\" [ngClass]=\"{'has-error' : qty?.invalid } \">\r\n                  <mat-label>Qty</mat-label>\r\n                  <input matInput placeholder=\"Type Here ...\" name=\"qty\" #qty=\"ngModel\"\r\n                  [(ngModel)]=\"product_data.qty\" onkeypress=\"return event.charCode>=48 && event.charCode<=57\">\r\n                </mat-form-field>\r\n                <div class=\"alert alert-danger\" *ngIf=\"f.submitted && qty?.invalid\">\r\n                  This field is required\r\n                </div>\r\n              </div>\r\n              \r\n              \r\n            </div>\r\n            <div class=\"row\">\r\n              <div class=\"col s3\">\r\n                <div class=\"uploade-image\">\r\n                  <ul>\r\n                    <li class=\"add-bg-1 wp100\">\r\n                      <img\r\n                      src=\"{{product_img_id ? uploadurl+product_data.product_img :product_data.product_img}}\"\r\n                      *ngIf=\"product_data.product_img\">\r\n                      <label class=\"fix-label\">\r\n                        <input type=\"file\" (change)=\"warrannty_Upload($event)\" style=\"display:none;\"\r\n                        accept=\".png, .jpg, .jpeg,\" required />\r\n                        <div class=\"other\" *ngIf=\"!product_data.product_img\">\r\n                          <i class=\"material-icons\">cloud_upload</i>\r\n                          <p>Upload Product Images</p>\r\n                        </div>\r\n                      </label>\r\n                    </li>\r\n                  </ul>\r\n                </div>\r\n              </div>\r\n              \r\n            </div>\r\n            <div class=\"text-right\" *ngIf=\"segmentList.length && SubcategoryList.length && productList.length && product_data.qty\">\r\n              <a style=\"margin: 7px;\" mat-raised-button color=\"accent\" type=\"text\"\r\n              [disabled]=\"!product_data.qty\" (click)=\"addProduct()\">Add To\r\n              List</a>\r\n            </div>\r\n            \r\n          </div>\r\n          \r\n          <div class=\"row\" *ngIf=\"add_list.length > 0 \">\r\n            <div class=\"col s12 m12 l12\">\r\n              <div class=\"card\">\r\n                <div class=\"card-head\">\r\n                  <h2> Product List</h2>\r\n                </div>\r\n                <div class=\"card-body\">\r\n                  <div class=\"cs-table left-right-10\">\r\n                    <div class=\" border-top\">\r\n                      <div class=\"table-head\">\r\n                        <table>\r\n                          <tr>\r\n                            <th class=\"w30 text-center\">Sr.No</th>\r\n                            <th class=\"w100\">Category</th>\r\n                            <th class=\"w100\">Sub Category</th>\r\n                            <th class=\"w180\">Product Details</th>\r\n                            <th class=\"w30 text-center\">Qty</th>\r\n                            <th class=\"w100 text-center\">Product Image</th>\r\n                            <th class=\"w30 text-center\">Action</th>\r\n                          </tr>\r\n                        </table>\r\n                      </div>\r\n                    </div>\r\n                    \r\n                    <div class=\"table-container pb0\">\r\n                      <div class=\"table-content none-shadow\">\r\n                        <table>\r\n                          <tr *ngFor=\"let row of add_list;let i=index;\">\r\n                            <td class=\"w30 text-center\">{{i+1}}</td>\r\n                            <td class=\"w100\">{{row.category_name |titlecase}}</td>\r\n                            <td class=\"w100\">{{row.subcat_name |titlecase}}</td>\r\n                            <td class=\"w180\">{{row.product_name |titlecase}}-{{row.product_code |titlecase}}</td>\r\n                            <td class=\"w30 text-center\">{{row.qty}}</td>\r\n                            <td class=\"w100 text-center\">\r\n                              <div *ngIf=\"row.product_img\">\r\n                                <img *ngIf=\"row.id\" [src]=\"uploadurl+'/'+row.product_img\" (click)=\"imageModel(row.product_img)\"\r\n                                style=\"cursor: zoom-in; width: 50px;\">\r\n                            \r\n                                <img *ngIf=\"!row.id\" [src]=\"row.product_img\" (click)=\"imageModel(row.product_img)\"\r\n                                style=\"cursor: zoom-in; width: 50px;\">\r\n                              </div>\r\n                            </td>\r\n                            <td class=\"w30 text-center\">\r\n                              <div class=\"action-button\">\r\n                                <button mat-icon-button matTooltip=\"Delete\" (click)=\"delete(i)\">\r\n                                  <i class=\"material-icons del\">delete</i>\r\n                                </button>\r\n                              </div>\r\n                            </td>\r\n                          </tr>\r\n                        </table>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          \r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"col s12\">\r\n        <div class=\"text-right\">\r\n          <button [ngClass]=\"{'loading': savingFlag == true}\" mat-raised-button color=\"accent\" type=\"submit\"\r\n          [disabled]=\"savingFlag == true || add_list.length == 0 \">{{savingFlag\r\n            == true ? 'Saving' : id ? 'Update' :\r\n            'Save'}}\r\n          </button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </form>\r\n</div>\r\n</div>"

/***/ }),

/***/ "./src/app/warranty/warranty-add/warranty-add.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/warranty/warranty-add/warranty-add.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/warranty/warranty-add/warranty-add.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/warranty/warranty-add/warranty-add.component.ts ***!
  \*****************************************************************/
/*! exports provided: WarrantyAddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WarrantyAddComponent", function() { return WarrantyAddComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng6-toastr-notifications */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/ng6-toastr-notifications/fesm5/ng6-toastr-notifications.js");
/* harmony import */ var src_services_DatabaseService__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/_services/DatabaseService */ "./src/_services/DatabaseService.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var src_app_dialog_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/dialog.component */ "./src/app/dialog.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! moment */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var src_app_image_module_image_module_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/image-module/image-module.component */ "./src/app/image-module/image-module.component.ts");










var WarrantyAddComponent = /** @class */ (function () {
    function WarrantyAddComponent(renderer, location, service, rout, toast, route, dialog, dialog2) {
        var _this = this;
        this.renderer = renderer;
        this.location = location;
        this.service = service;
        this.rout = rout;
        this.toast = toast;
        this.route = route;
        this.dialog = dialog;
        this.dialog2 = dialog2;
        this.data = {};
        this.product_data = {};
        this.add_list = [];
        this.district_list = [];
        this.savingFlag = false;
        this.errorMsg = false;
        this.segmentList = [];
        this.SubcategoryList = [];
        this.productList = [];
        this.category_list = [];
        this.brandList = [];
        this.colorList = [];
        this.feature = {};
        this.exist = false;
        this.value = [];
        this.formData = new FormData();
        this.loader = false;
        this.showMRP = false;
        this.showSize = false;
        this.image = new FormData();
        this.selected_image = [];
        this.selected_image2 = [];
        this.state = [];
        this.pointCategories_data = [];
        this.getData = {};
        this.billBase64 = false;
        this.warrantyBase64 = false;
        this.warrantyImg = [];
        this.filter = {};
        this.uploadurl = this.service.uploadUrl + 'service_task/';
        this.route.params.subscribe(function (params) {
            _this.id = params.id;
            _this.product_img_id = params.id;
            if (_this.id) {
                _this.getWarrantyDetail(_this.id);
            }
            _this.currentDate = new Date();
            _this.getSegment();
        });
    }
    WarrantyAddComponent.prototype.ngOnInit = function () {
    };
    WarrantyAddComponent.prototype.imageModel = function (image) {
        var dialogRef = this.dialog2.open(src_app_image_module_image_module_component__WEBPACK_IMPORTED_MODULE_9__["ImageModuleComponent"], {
            panelClass: 'Image-modal',
            data: {
                image: image,
            }
        });
        dialogRef.afterClosed().subscribe(function (result) {
        });
    };
    WarrantyAddComponent.prototype.delete = function (i) {
        this.add_list.splice(i, 1);
    };
    WarrantyAddComponent.prototype.submitDetail = function () {
        var _this = this;
        if (this.data.date_of_purchase) {
            this.data.date_of_purchase = moment__WEBPACK_IMPORTED_MODULE_8__(this.data.date_of_purchase).format('YYYY-MM-DD');
            this.data.date_of_purchase = this.data.date_of_purchase;
        }
        this.data.add_list = this.add_list;
        this.savingFlag = true;
        var header;
        if (this.id) {
            header = this.service.post_rqst({ "data": this.data, 'type': 'Edit', 'id': this.id }, "ServiceTask/serviceWarrantyAdd");
        }
        else {
            header = this.service.post_rqst({ "data": this.data, 'type': 'Add', }, "ServiceTask/serviceWarrantyAdd");
        }
        header.subscribe((function (result) {
            if (result['statusCode'] == 200) {
                _this.rout.navigate(['/warranty-list']);
                _this.toast.successToastr(result['statusMsg']);
                _this.savingFlag = false;
            }
            else {
                _this.toast.errorToastr(result['statusMsg']);
                _this.savingFlag = false;
            }
        }));
    };
    WarrantyAddComponent.prototype.back = function () {
        this.location.back();
    };
    WarrantyAddComponent.prototype.warrannty_Upload = function (product_data) {
        var _this = this;
        for (var i = 0; i < product_data.target.files.length; i++) {
            var files = product_data.target.files[i];
            if (files) {
                this.product_img_id = '';
                this.warrantyBase64 = true;
                var reader = new FileReader();
                reader.onload = function (e) {
                    _this.product_data.product_img = e.target.result;
                };
                reader.readAsDataURL(files);
            }
            else {
                this.warrantyBase64 = false;
            }
            this.image.append("" + i, product_data.target.files[i], product_data.target.files[i].name);
        }
    };
    WarrantyAddComponent.prototype.getWarrantyDetail = function (id) {
        var _this = this;
        this.service.post_rqst({ 'warranty_id': id }, "ServiceTask/serviceWarrantyDetail").subscribe((function (result) {
            _this.data = result['result'];
            console.log('data', _this.data);
            _this.data = _this.data;
            _this.add_list = _this.data['add_list'];
        }));
    };
    WarrantyAddComponent.prototype.getSegment = function () {
        var _this = this;
        this.service.post_rqst({}, "Master/getProductCategoryList").subscribe((function (result) {
            if (result['category_list']['statusCode'] == 200) {
                _this.segmentList = result['category_list']['segment_list'];
            }
        }));
    };
    WarrantyAddComponent.prototype.getSubCatgory = function (id) {
        var _this = this;
        this.service.post_rqst({ 'id': id }, "Master/subCategoryList").subscribe((function (result) {
            if (result['statusCode'] == 200) {
                _this.SubcategoryList = result['result'];
                if (_this.SubcategoryList.length <= 0) {
                    _this.getProduct(_this.data.segment_id, '');
                }
            }
        }));
    };
    WarrantyAddComponent.prototype.getProduct = function (segment_id, sub_segment_id) {
        var _this = this;
        this.filter.segment = segment_id;
        this.filter.sub_category_name = sub_segment_id;
        this.filter.product_warranty = 'not_zero';
        this.service.post_rqst({ 'filter': this.filter }, "Master/productList").subscribe((function (result) {
            if (result['statusCode'] == 200) {
                _this.productList = result['product_list'];
                console.log(_this.productList);
            }
        }));
    };
    WarrantyAddComponent.prototype.getProductInfo = function (product_id) {
        console.log(product_id);
        if (product_id) {
            var index = this.productList.findIndex(function (d) { return d.id == product_id; });
        }
    };
    WarrantyAddComponent.prototype.checkMobile = function () {
        var _this = this;
        this.data.customer_name = '';
        if (this.data.customer_mobile.length == 10) {
            this.service.post_rqst({ 'customer_mobile': this.data.customer_mobile }, "ServiceTask/customerCheck").subscribe(function (d) {
                console.log(d);
                if (d.statusMsg == "Exist") {
                    _this.data.customer_name = d.data.customer_name;
                }
            });
        }
    };
    WarrantyAddComponent.prototype.addProduct = function () {
        var _this = this;
        if (this.product_data.qty == 0 || this.product_data.qty == undefined || this.product_data.qty == null || !this.product_data.qty) {
            this.toast.errorToastr("QTY Should Be More Then Zero");
            return;
        }
        console.log(this.product_data.product_id);
        if (this.product_data.product_id) {
            var index = this.productList.findIndex(function (d) { return d.id == _this.product_data.product_id; });
            if (index != -1) {
                this.product_data.product_name = this.productList[index].product_name;
                this.product_data.product_code = this.productList[index].product_code;
            }
            console.log(this.product_data.product_name);
            console.log(this.product_data.product_code);
        }
        if (this.product_data.segment_id) {
            var index = this.segmentList.findIndex(function (d) { return d.id == _this.product_data.segment_id; });
            if (index != -1) {
                this.product_data.category_name = this.segmentList[index].category;
            }
            console.log(this.product_data.category_name);
        }
        if (this.product_data.sub_segment_id) {
            var index = this.SubcategoryList.findIndex(function (d) { return d.id == _this.product_data.sub_segment_id; });
            if (index != -1) {
                this.product_data.subcat_name = this.SubcategoryList[index].sub_category_name;
            }
            console.log(this.product_data.subcat_name);
        }
        console.log(this.product_data);
        if (this.add_list.length == 0) {
            this.add_list.push(JSON.parse(JSON.stringify(this.product_data)));
            console.log(this.add_list);
            this.product_data = {};
        }
        else {
            var isExistIndex = void 0;
            isExistIndex = this.add_list.findIndex(function (row) { return row.product_id == _this.product_data.product_id; });
            console.log(isExistIndex);
            if (isExistIndex == -1) {
                this.add_list.push(JSON.parse(JSON.stringify(this.product_data)));
                console.log(this.add_list);
                this.product_data = {};
            }
            else {
                this.add_list[isExistIndex].qty = parseInt(this.add_list[isExistIndex].qty) + parseInt(this.product_data.qty);
                this.product_data = {};
            }
        }
    };
    WarrantyAddComponent.prototype.findId = function (id) {
        var index = this.productList.findIndex(function (row) { return row.id == id; });
        if (index != -1) {
            this.product_data.id = this.productList[index].id;
            this.product_data.product_name = this.productList[index].product_name;
        }
        console.log(this.data);
    };
    WarrantyAddComponent.prototype.getProductName = function (id) {
        var _this = this;
        this.filter.product_detail = id;
        console.log(this.filter);
        this.service
            .post_rqst({ 'filter': this.filter }, "Master/productList")
            .subscribe(function (output) {
            console.log(output);
            if (output["statusCode"] == 200) {
                _this.productList = output["product_list"];
            }
        });
    };
    WarrantyAddComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-warranty-add',
            template: __webpack_require__(/*! ./warranty-add.component.html */ "./src/app/warranty/warranty-add/warranty-add.component.html"),
            styles: [__webpack_require__(/*! ./warranty-add.component.scss */ "./src/app/warranty/warranty-add/warranty-add.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"],
            _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"],
            src_services_DatabaseService__WEBPACK_IMPORTED_MODULE_4__["DatabaseService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_3__["ToastrManager"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            src_app_dialog_component__WEBPACK_IMPORTED_MODULE_6__["DialogComponent"],
            _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatDialog"]])
    ], WarrantyAddComponent);
    return WarrantyAddComponent;
}());



/***/ }),

/***/ "./src/app/warranty/warranty-detail/warranty-detail.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/warranty/warranty-detail/warranty-detail.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-container\">\r\n  <div class=\"tools-container\">\r\n    <a mat-icon-button matTooltip=\"Back\" (click)=\"back()\">\r\n      <i class=\"material-icons\">arrow_back</i>\r\n    </a>\r\n    <h2>Warranty Details</h2>\r\n  </div>\r\n\r\n  <div class=\"container pt10 pl10 pr10 pb50\">\r\n    <div class=\"row\">\r\n      <div class=\"col s12 m12 \">\r\n        <!-- product data start -->\r\n        <div class=\"card\" *ngIf=\"!skLoading\">\r\n          <div class=\"card-head\">\r\n            <h2>Warranty Information</h2>\r\n            <div class=\"left-auto\" *ngIf=\"getData.company_verification_status=='Pending'\">\r\n              <a class=\"sm-mat-icon-button\" mat-icon-button matTooltip=\"Edit Detail\"\r\n                [routerLink]=\"[ 'add-warranty/', this.id ]\">\r\n                <i class=\"material-icons\">edit</i>\r\n              </a>\r\n            </div>\r\n          </div>\r\n          <div class=\"card-body\">\r\n            <div class=\"grid-box\">\r\n              <div class=\"block-feilds\">\r\n                <span>Date Created</span>\r\n                <p>{{getData.date_created ? (getData.date_created | date : 'dd MMM yyy ,h:mm a') :'---'}}</p>\r\n              </div>\r\n              <div class=\"block-feilds\">\r\n                <span>Created By</span>\r\n                <p>{{getData.created_by_type ? (getData.created_by_type | titlecase) :'---'}}</p>\r\n              </div>\r\n              <div class=\"block-feilds\">\r\n                <span>Customer Name</span>\r\n                <p>{{getData.customer_name ? (getData.customer_name | titlecase) :'---'}}</p>\r\n              </div>\r\n              <div class=\"block-feilds\">\r\n                <span>Customer Mobile No.</span>\r\n                <p>{{getData.customer_mobile ? getData.customer_mobile :'---'}}</p>\r\n              </div>\r\n\r\n              <!-- <div class=\"block-feilds\">\r\n                <span>Serial No.</span>\r\n                <p>{{getData.serial_no ? (getData.serial_no | titlecase) :'---'}}</p>\r\n              </div> -->\r\n\r\n              <div class=\"block-feilds\">\r\n                <span>Date Of Purchase</span>\r\n                <p>{{getData.date_of_purchase != \"0000-00-00\" ? (getData.date_of_purchase | date :\"dd MMM yyy \"): \"--\"\r\n                  }}</p>\r\n              </div>\r\n              <div class=\"block-feilds flex-heading\">\r\n                <div>\r\n                  <span>Status</span>\r\n                  <p>\r\n                    <strong class=\"yellow-clr\" *ngIf=\"getData.company_verification_status=='Pending'\">\r\n                      {{getData.company_verification_status ? (getData.company_verification_status | titlecase) :\r\n                      '--'}}</strong>\r\n                    <strong class=\"green-clr\" *ngIf=\"getData.company_verification_status=='Verified'\">\r\n                      {{getData.company_verification_status ? (getData.company_verification_status | titlecase) :\r\n                      '--'}}</strong>\r\n                    <strong class=\"red-clr\" *ngIf=\"getData.company_verification_status=='Reject'\">\r\n                      {{getData.company_verification_status ? (getData.company_verification_status | titlecase) :\r\n                      '--'}}</strong>\r\n                  </p>\r\n                </div>\r\n\r\n                <div class=\"left-auto\" *ngIf=\"getData.company_verification_status=='Pending'\">\r\n                  <a class=\"sm-mat-icon-button\" mat-icon-button matTooltip=\"Change Status\"\r\n                    (click)=\"updateWarrantyStataus(getData.id,getData.warranty_period,getData.date_of_purchase)\">\r\n                    <i class=\"material-icons\">edit</i>\r\n                  </a>\r\n                </div>\r\n              </div>\r\n              <div class=\"block-feilds\" *ngIf=\"getData.company_verification_status=='Reject'\">\r\n                <span>Reason Of Reject</span>\r\n                <p>{{getData.reject_reason ? (getData.reject_reason | titlecase) : '--'}}</p>\r\n              </div>\r\n              <div class=\"block-feilds\" *ngIf=\"getData.company_verification_status!='Pending'\">\r\n                <span>Status Update Date</span>\r\n                <p>{{getData.verification_on != '0000-00-00 00:00:00' ? (getData.verification_on | date : 'dd MMM yyy\r\n                  ,h:mm a') :'---'}}</p>\r\n              </div>\r\n              <div class=\"block-feilds\" *ngIf=\"getData.company_verification_status!='Pending'\">\r\n                <span>Status Update By</span>\r\n                <p>{{getData.verification_by_name ? getData.verification_by_name : '--'}}</p>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"edit-modal mt15\">\r\n            <p class=\"heading\">Product List</p>\r\n            <div mat-dialog-content>\r\n              <div class=\"cs-table left-right-10\">\r\n                <div class=\"table-head\">\r\n                  <table>\r\n                    <tr>\r\n                      <th class=\"w30 text-center \">Sr.No</th>\r\n                      <th class=\"w100\">Category</th>\r\n                      <th class=\"w100\">Sub Category</th>\r\n                      <th class=\"w180\">Product Detail</th>\r\n                      <th class=\"w100 text-center\">Product Image</th>\r\n                      <th class=\"w30 text-center \">Qty</th>\r\n                    </tr>\r\n                  </table>\r\n                </div>\r\n                <div class=\"table-container pb0\">\r\n                  <div class=\"table-content none-shadow\">\r\n                    <table>\r\n                      <ng-container *ngFor=\"let row of add_list; let i = index\">\r\n                        <tr>\r\n                          <td class=\"w30 text-center \">{{ i + 1 }}</td>\r\n                          <td class=\"w100\">{{ row.category_name | titlecase}}</td>\r\n                          <td class=\"w100\">{{ row.subcat_name | titlecase}}</td>\r\n                          <td class=\"w180\">{{ row.product_name | titlecase}}-{{row.product_code | titlecase}}</td>\r\n                          <td class=\"w100 text-center\">\r\n                            <div *ngIf=\"row.product_img\">\r\n                              <img [src]=\"url+row.product_img\" (click)=\"imageModel(url+row.product_img)\"\r\n                                style=\"cursor: zoom-in; width: 50px;\">\r\n                            </div>\r\n                          </td>\r\n                          <td class=\"w30 text-center \">{{ row.qty }}</td>\r\n                        </tr>\r\n                      </ng-container>\r\n                    </table>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"card\" *ngIf=\"skLoading\">\r\n          <div class=\"sk-head\">\r\n            <h2>&nbsp;</h2>\r\n          </div>\r\n          <div class=\"card-body\">\r\n            <div class=\"img-container\">\r\n              <div class=\"image-block sk-loading\" *ngFor=\"let row of [].constructor(3)\">\r\n                &nbsp;\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/warranty/warranty-detail/warranty-detail.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/warranty/warranty-detail/warranty-detail.component.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card-body .img-container {\n  display: flex;\n  justify-content: space-between;\n}\n\n.card-body .img-container .image-block {\n  width: 100% !important;\n}\n\n.card-body .img-container .image-block img {\n  width: 100% !important;\n  height: 100% !important;\n}"

/***/ }),

/***/ "./src/app/warranty/warranty-detail/warranty-detail.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/warranty/warranty-detail/warranty-detail.component.ts ***!
  \***********************************************************************/
/*! exports provided: WarrantyDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WarrantyDetailComponent", function() { return WarrantyDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var src_app_image_module_image_module_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/image-module/image-module.component */ "./src/app/image-module/image-module.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_services_DatabaseService__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/_services/DatabaseService */ "./src/_services/DatabaseService.ts");
/* harmony import */ var src_app_localstorage_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/localstorage.service */ "./src/app/localstorage.service.ts");
/* harmony import */ var ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng6-toastr-notifications */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/ng6-toastr-notifications/fesm5/ng6-toastr-notifications.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var src_app_dialog_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/dialog.component */ "./src/app/dialog.component.ts");
/* harmony import */ var src_app_dialog_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/dialog.service */ "./src/app/dialog.service.ts");
/* harmony import */ var src_app_service_exportexcel_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/service/exportexcel.service */ "./src/app/service/exportexcel.service.ts");
/* harmony import */ var _warranty_update_model_warranty_update_model_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../warranty-update-model/warranty-update-model.component */ "./src/app/warranty/warranty-update-model/warranty-update-model.component.ts");













var WarrantyDetailComponent = /** @class */ (function () {
    function WarrantyDetailComponent(location, session, router, alert, service, editdialog, dialog, route, toast, excelservice, dialog1) {
        var _this = this;
        this.location = location;
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
        this.getData = {};
        this.skLoading = false;
        this.add_list = [];
        this.warrantyImg = [];
        this.url = this.service.uploadUrl + 'service_task/';
        this.route.params.subscribe(function (params) {
            _this.id = params.id;
            _this.service.currentUserID = params.id;
            if (_this.id) {
                _this.getWarrantyDetail();
            }
        });
    }
    WarrantyDetailComponent.prototype.ngOnInit = function () {
    };
    WarrantyDetailComponent.prototype.getWarrantyDetail = function () {
        var _this = this;
        this.skLoading = true;
        this.service.post_rqst({ 'warranty_id': this.id }, "ServiceTask/serviceWarrantyDetail").subscribe((function (result) {
            _this.getData = result['result'];
            _this.add_list = _this.getData['add_list'];
            _this.warrantyImg = _this.getData['image'];
            _this.skLoading = false;
        }));
    };
    WarrantyDetailComponent.prototype.back = function () {
        this.location.back();
    };
    WarrantyDetailComponent.prototype.imageModel = function (image) {
        var dialogRef = this.dialog.open(src_app_image_module_image_module_component__WEBPACK_IMPORTED_MODULE_3__["ImageModuleComponent"], {
            panelClass: 'Image-modal',
            data: {
                image: image,
            }
        });
        dialogRef.afterClosed().subscribe(function (result) {
        });
    };
    WarrantyDetailComponent.prototype.updateWarrantyStataus = function (row, warranty_period, date_of_purchase) {
        var _this = this;
        var dialogRef = this.dialog.open(_warranty_update_model_warranty_update_model_component__WEBPACK_IMPORTED_MODULE_12__["WarrantyUpdateModelComponent"], {
            width: '400px',
            panelClass: 'cs-model',
            data: {
                id: row,
                period: warranty_period,
                date_of_purchase: date_of_purchase,
            }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result != false) {
                _this.getWarrantyDetail();
            }
        });
    };
    WarrantyDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-warranty-detail',
            template: __webpack_require__(/*! ./warranty-detail.component.html */ "./src/app/warranty/warranty-detail/warranty-detail.component.html"),
            styles: [__webpack_require__(/*! ./warranty-detail.component.scss */ "./src/app/warranty/warranty-detail/warranty-detail.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_8__["Location"], src_app_localstorage_service__WEBPACK_IMPORTED_MODULE_6__["sessionStorage"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], src_app_dialog_component__WEBPACK_IMPORTED_MODULE_9__["DialogComponent"], src_services_DatabaseService__WEBPACK_IMPORTED_MODULE_5__["DatabaseService"], src_app_dialog_service__WEBPACK_IMPORTED_MODULE_10__["DialogService"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_7__["ToastrManager"], src_app_service_exportexcel_service__WEBPACK_IMPORTED_MODULE_11__["ExportexcelService"], src_app_dialog_component__WEBPACK_IMPORTED_MODULE_9__["DialogComponent"]])
    ], WarrantyDetailComponent);
    return WarrantyDetailComponent;
}());



/***/ }),

/***/ "./src/app/warranty/warranty-list/warranty-list.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/warranty/warranty-list/warranty-list.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-container\">\r\n  <app-loader *ngIf=\"excelLoader\"></app-loader>\r\n  <div class=\"tools-container\">\r\n    <h2>Warranty List</h2>\r\n\r\n    <div class=\"left-auto df ac flex-gap-10\">\r\n      <a mat-icon-button matTooltip=\"Refresh\" (click)=\"refresh()\">\r\n        <i class=\"material-icons\">refresh</i>\r\n      </a>\r\n\r\n      <div class=\"pagination\" *ngIf=\"warrantyList.length > 0\">\r\n        <div class=\"pagination-content\">\r\n          Pages\r\n          <span>{{ pagenumber }}</span>\r\n          of\r\n          <span>{{ total_page }}</span>\r\n        </div>\r\n        <div class=\"page-nav\">\r\n          <button mat-icon-button matTooltip=\"Older\" (click)=\"pervious()\" [disabled]=\"start == 0\">\r\n            <i class=\"material-icons\">navigate_before</i>\r\n          </button>\r\n          <button mat-icon-button matTooltip=\"Newer\" (click)=\"nextPage()\" [disabled]=\"pagenumber == total_page\">\r\n            <i class=\"material-icons\">navigate_next</i>\r\n          </button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"mat-tabbar\">\r\n      <ng-container>\r\n        <button mat-button [ngClass]=\"active_tab == 'All' ? 'active' : ''\"\r\n          (click)=\"active_tab = 'All'; getWarrantyList('')\">\r\n          <i class=\"material-icons\">all_inbox</i>All({{ all_count }})\r\n        </button>\r\n\r\n        <button mat-button [ngClass]=\"active_tab == 'Pending' ? 'active' : ''\"\r\n          (click)=\"active_tab = 'Pending'; getWarrantyList('')\">\r\n          <i class=\"material-icons\">pending_actions</i>Pending({{\r\n          tab_count.pending_count\r\n          }})\r\n        </button>\r\n      </ng-container>\r\n      <button mat-button [ngClass]=\"active_tab == 'Verified' ? 'active' : ''\"\r\n        (click)=\"active_tab = 'Verified'; getWarrantyList('')\">\r\n        <i class=\"material-icons\">thumb_up_alt</i>Verified({{\r\n        tab_count.verified_count\r\n        }})\r\n      </button>\r\n      <button mat-button [ngClass]=\"active_tab == 'Reject' ? 'active' : ''\"\r\n        (click)=\"active_tab = 'Reject'; getWarrantyList('')\">\r\n        <i class=\"material-icons\">thumb_down_alt</i>Reject({{\r\n        tab_count.reject_count\r\n        }})\r\n      </button>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"container container-scroll\">\r\n    <div class=\"cs-table horizontal-scroll\">\r\n      <div class=\"sticky-head\">\r\n        <div class=\"table-head\">\r\n          <table>\r\n            <tr>\r\n              <th class=\"w50\">Sr.No</th>\r\n              <th class=\"w150\">Date Created</th>\r\n              <th class=\"w150\">Created By</th>\r\n              <th class=\"w100\">Warranty No.</th>\r\n              <th class=\"w150\">Customer Name</th>\r\n              <th class=\"w120\">Customer Mobile No.</th>\r\n              <!-- <th class=\"w120\">Serial No.</th> -->\r\n              <th class=\"w150\">Product Detail</th>\r\n              <th class=\"w130\">Start Date</th>\r\n              <th class=\"w130\">End Date</th>\r\n              <th class=\"w120\" *ngIf=\"active_tab == 'All'\">Status</th>\r\n\r\n              <th class=\"w180\" *ngIf=\"active_tab == 'Reject' || active_tab =='All'\">Reason Of Reject</th>\r\n              <th class=\"w150\" *ngIf=\"active_tab != 'Pending'\">\r\n                Status Update Date\r\n              </th>\r\n              <th class=\"w120\" *ngIf=\"active_tab != 'Pending'\">\r\n                Status Update By\r\n              </th>\r\n              <!-- <th class=\"w70 text-center\">Action</th> -->\r\n            </tr>\r\n          </table>\r\n        </div>\r\n\r\n        <div class=\"table-head bdrt\">\r\n          <table>\r\n            <tr>\r\n              <th class=\"w50\"></th>\r\n              <th class=\"w150\">\r\n                <div class=\"th-search-acmt\">\r\n                  <mat-form-field class=\"cs-input date-column infix-bodr\">\r\n                    <input matInput [matDatepicker]=\"picker\" placeholder=\"Date\" name=\"date_created\"\r\n                      #date_created=\"ngModel\" [(ngModel)]=\"filter_data.date_created\" (ngModelChange)=\"date_format()\"\r\n                      [max]=\"today_date\" readonly />\r\n                    <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\r\n                    <mat-datepicker #picker></mat-datepicker>\r\n                  </mat-form-field>\r\n                </div>\r\n              </th>\r\n              <th class=\"w150\">\r\n                <div class=\"th-search-acmt\">\r\n                  <mat-form-field>\r\n                    <input type=\"text\" matInput placeholder=\"Search ...\" name=\"created_by_name\"\r\n                      (keyup.enter)=\"getWarrantyList('')\" #created_by_name=\"ngModel\"\r\n                      [(ngModel)]=\"filter_data.created_by_name\" />\r\n                  </mat-form-field>\r\n                </div>\r\n              </th>\r\n              <th class=\"w100\">\r\n                <div class=\"th-search-acmt\">\r\n                  <mat-form-field>\r\n                    <input type=\"text\" matInput placeholder=\"Search ...\" name=\"id\" (keyup.enter)=\"getWarrantyList('')\"\r\n                      #id=\"ngModel\" [(ngModel)]=\"filter_data.id\" />\r\n                  </mat-form-field>\r\n                </div>\r\n              </th>\r\n              <th class=\"w150\">\r\n                <div class=\"th-search-acmt\">\r\n                  <mat-form-field>\r\n                    <input type=\"text\" matInput placeholder=\"Search ...\" name=\"customer_name\"\r\n                      (keyup.enter)=\"getWarrantyList('')\" #customer_name=\"ngModel\"\r\n                      [(ngModel)]=\"filter_data.customer_name\" />\r\n                  </mat-form-field>\r\n                </div>\r\n              </th>\r\n              <th class=\"w120\">\r\n                <div class=\"th-search-acmt\">\r\n                  <mat-form-field>\r\n                    <input type=\"text\" matInput placeholder=\"Search ...\" name=\"customer_mobile\"\r\n                      (keyup.enter)=\"getWarrantyList('')\" #customer_mobile=\"ngModel\"\r\n                      [(ngModel)]=\"filter_data.customer_mobile\" />\r\n                  </mat-form-field>\r\n                </div>\r\n              </th>\r\n              <!-- <th class=\"w120\">\r\n                <div class=\"th-search-acmt\">\r\n                  <mat-form-field>\r\n                    <input type=\"text\" matInput placeholder=\"Search ...\" name=\"serial_no\"\r\n                      (keyup.enter)=\"getWarrantyList('')\" #serial_no=\"ngModel\" [(ngModel)]=\"filter_data.serial_no\" />\r\n                  </mat-form-field>\r\n                </div>\r\n              </th> -->\r\n              <th class=\"w150\">\r\n                <div class=\"th-search-acmt\">\r\n                  <mat-form-field>\r\n                    <input type=\"text\" matInput placeholder=\"Search ...\" name=\"product_detail\"\r\n                      (keyup.enter)=\"getWarrantyList('')\" #product_detail=\"ngModel\"\r\n                      [(ngModel)]=\"filter_data.product_detail\" />\r\n                  </mat-form-field>\r\n                </div>\r\n              </th>\r\n              <th class=\"w130\">\r\n                <div class=\"th-search-acmt\">\r\n                  <mat-form-field class=\"cs-input date-column infix-bodr\">\r\n                    <input matInput [matDatepicker]=\"picker2\" placeholder=\"Date\" name=\"date_of_purchase\"\r\n                      #date_of_purchase=\"ngModel\" [(ngModel)]=\"filter_data.date_of_purchase\"\r\n                      (ngModelChange)=\"date_format2()\" [max]=\"today_date\" readonly />\r\n                    <mat-datepicker-toggle matSuffix [for]=\"picker2\"></mat-datepicker-toggle>\r\n                    <mat-datepicker #picker2></mat-datepicker>\r\n                  </mat-form-field>\r\n                </div>\r\n              </th>\r\n              <th class=\"w130\">\r\n                <div class=\"th-search-acmt\">\r\n                  <mat-form-field class=\"cs-input date-column infix-bodr\">\r\n                    <input matInput [matDatepicker]=\"picker3\" placeholder=\"Date\" name=\"warranty_end_date\"\r\n                      #warranty_end_date=\"ngModel\" [(ngModel)]=\"filter_data.warranty_end_date\"\r\n                      (ngModelChange)=\"date_format3()\" [max]=\"today_date\" readonly />\r\n                    <mat-datepicker-toggle matSuffix [for]=\"picker3\"></mat-datepicker-toggle>\r\n                    <mat-datepicker #picker3></mat-datepicker>\r\n                  </mat-form-field>\r\n                </div>\r\n              </th>\r\n              <th class=\"w120\" *ngIf=\"active_tab == 'All'\">\r\n                <div class=\"th-search-acmt\">\r\n                  <mat-form-field class=\"cs-input select-input\">\r\n                    <mat-select name=\"company_verification_status\" #company_verification_status=\"ngModel\"\r\n                      [(ngModel)]=\"filter_data.company_verification_status\" (selectionChange)=\"getWarrantyList('')\">\r\n                      <mat-option value=\"\">All</mat-option>\r\n                      <mat-option value=\"Pending\">Pending</mat-option>\r\n                      <mat-option value=\"Verified\">Verified </mat-option>\r\n                      <mat-option value=\"Reject\">Reject </mat-option>\r\n                    </mat-select>\r\n                  </mat-form-field>\r\n                </div>\r\n              </th>\r\n\r\n              <th class=\"w180\" *ngIf=\"active_tab == 'Reject' || active_tab =='All'\"></th>\r\n              <th class=\"w150\" *ngIf=\"active_tab != 'Pending'\">\r\n                <div class=\"th-search-acmt\">\r\n                  <mat-form-field class=\"cs-input date-column infix-bodr\">\r\n                    <input matInput [matDatepicker]=\"picker4\" placeholder=\"Date\" name=\"verification_on\"\r\n                      #verification_on=\"ngModel\" [(ngModel)]=\"filter_data.verification_on\"\r\n                      (ngModelChange)=\"date_format4()\" [max]=\"today_date\" readonly />\r\n                    <mat-datepicker-toggle matSuffix [for]=\"picker4\"></mat-datepicker-toggle>\r\n                    <mat-datepicker #picker4></mat-datepicker>\r\n                  </mat-form-field>\r\n                </div>\r\n              </th>\r\n              <th class=\"w120\" *ngIf=\"active_tab != 'Pending'\">\r\n                <div class=\"th-search-acmt\">\r\n                  <mat-form-field>\r\n                    <input type=\"text\" matInput placeholder=\"Search ...\" name=\"verification_by_name\"\r\n                      (keyup.enter)=\"getWarrantyList('')\" #verification_by_name=\"ngModel\"\r\n                      [(ngModel)]=\"filter_data.verification_by_name\" />\r\n                  </mat-form-field>\r\n                </div>\r\n              </th>\r\n              <!-- <th class=\"w70 text-center\"></th> -->\r\n            </tr>\r\n          </table>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"table-container\">\r\n        <div class=\"table-content\">\r\n          <table>\r\n            <ng-container *ngIf=\"!loader\">\r\n              <tr *ngFor=\"let row of warrantyList; let i = index\"\r\n                [ngClass]=\"{ Current: service.currentUserID == row.id }\">\r\n                <td class=\"w50\">{{ i + 1 + sr_no }}</td>\r\n                <td class=\"w150\">\r\n                  {{ row.date_created | date : \"dd MMM yyy ,h:mm a\" }}\r\n                </td>\r\n                <td class=\"w150\">{{ row.created_by_name | titlecase }}</td>\r\n                <td class=\"w100\"><a class=\"link-btn\" mat-button (click)=\"service.setData(filter_data)\"\r\n                    routerLink=\"warranty-detail/{{ row.id }}\" routerLinkActive=\"active\"> #War{{ row.id }}</a>\r\n                </td>\r\n                <td class=\"w150\">\r\n                  {{ row.customer_name | titlecase }}\r\n                </td>\r\n                <td class=\"w120\">{{ row.customer_mobile }}</td>\r\n                <!-- <td class=\"w120\">{{ row.serial_no ? (row.serial_no | titlecase):'--' }}</td> -->\r\n                <td class=\"w150\">\r\n                  {{ row.product_name | titlecase }}-{{ row.product_code | titlecase }}\r\n                </td>\r\n                <td class=\"w130\">{{row.date_of_purchase != \"0000-00-00\" ? (row.date_of_purchase | date : \"dd MMM yyy \"):\r\n                  \"--\" }}</td>\r\n                <td class=\"w130\">{{row.warranty_end_date != \"0000-00-00\" ? (row.warranty_end_date | date : \"dd MMM\r\n                  yyy\"): \"--\" }}</td>\r\n                <td class=\"w120\" *ngIf=\"active_tab == 'All'\">\r\n                  <strong class=\"yellow-clr\"\r\n                    *ngIf=\"row.company_verification_status=='Pending'\">{{row.company_verification_status}}</strong>\r\n                  <strong class=\"green-clr\"\r\n                    *ngIf=\"row.company_verification_status=='Verified'\">{{row.company_verification_status}}</strong>\r\n                  <strong class=\"red-clr\"\r\n                    *ngIf=\"row.company_verification_status=='Reject'\">{{row.company_verification_status}}</strong>\r\n                </td>\r\n\r\n                <td class=\"w180\" *ngIf=\"active_tab == 'Reject' || active_tab =='All'\">{{row.reject_reason| titlecase}}\r\n                </td>\r\n                <td class=\"w150\" *ngIf=\"active_tab != 'Pending'\">\r\n                  {{\r\n                  row.verification_on != \"0000-00-00 00:00:00\"\r\n                  ? (row.verification_on | date : \"dd MMM yyy ,h:mm a\")\r\n                  : \"--\"\r\n                  }}\r\n                </td>\r\n                <td class=\"w120\" *ngIf=\"active_tab != 'Pending'\">\r\n                  {{\r\n                  row.verification_by_name ? (row.verification_by_name | titlecase) : \"--\"\r\n                  }}\r\n                </td>\r\n                <!-- <td class=\"w70 text-center\">\r\n            <div class=\"action-button\">\r\n              <button mat-icon-button matTooltip=\"Edit\" (click)=\"updateWarrantyStataus(row.id)\">\r\n                <i class=\"material-icons edit\">edit</i>\r\n              </button>\r\n\r\n            </div>\r\n\r\n          </td> -->\r\n              </tr>\r\n            </ng-container>\r\n            <ng-container *ngIf=\"loader\">\r\n              <tr class=\"sk-loading\" *ngFor=\"let row of [].constructor(10)\">\r\n                <td class=\"w50\">\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n                <td class=\"w150\">\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n                <td class=\"w150\">\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n                <td class=\"w100\">\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n                <td class=\"w150\">\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n                <td class=\"w120\">\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n                <!-- <td class=\"w120\">\r\n                  <div>&nbsp;</div>\r\n                </td> -->\r\n                <td class=\"w130\">\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n                <td class=\"w130\">\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n                <td class=\"w150\">\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n                <td class=\"w120\">\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n\r\n                <td class=\"w180\" *ngIf=\"active_tab == 'Reject' || active_tab =='All'\">\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n                <td class=\"w150\" *ngIf=\"active_tab != 'Pending'\">\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n                <td class=\"w120\" *ngIf=\"active_tab != 'Pending'\">\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n              </tr>\r\n            </ng-container>\r\n          </table>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <ng-container *ngIf=\"datanotofound == true && warrantyList.length == 0\">\r\n      <app-not-result-found></app-not-result-found>\r\n    </ng-container>\r\n  </div>\r\n  <div></div>\r\n\r\n  <div class=\"fab-btns\">\r\n    <button class=\"pulse excel\" mat-fab color=\"primary\" [ngClass]=\"{ pulse: fabBtnValue == 'add' }\"\r\n      [matMenuTriggerFor]=\"menu\">\r\n      <i class=\"material-icons\">apps</i>\r\n      Action\r\n    </button>\r\n  </div>\r\n  <mat-menu #menu=\"matMenu\">\r\n    <button mat-menu-item (click)=\"downloadExcel()\" *ngIf=\"warrantyList.length > 0\">\r\n      <mat-icon>download</mat-icon>\r\n      <span>Download excel</span>\r\n    </button>\r\n    <button mat-menu-item (click)=\"lastBtnValue('add')\" routerLink=\"add-warranty\" routerLinkActive=\"router-link-active\">\r\n      <mat-icon>add</mat-icon>\r\n      <span>Add New</span>\r\n    </button>\r\n  </mat-menu>\r\n</div>"

/***/ }),

/***/ "./src/app/warranty/warranty-list/warranty-list.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/warranty/warranty-list/warranty-list.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/warranty/warranty-list/warranty-list.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/warranty/warranty-list/warranty-list.component.ts ***!
  \*******************************************************************/
/*! exports provided: WarrantyListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WarrantyListComponent", function() { return WarrantyListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! moment */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng6-toastr-notifications */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/ng6-toastr-notifications/fesm5/ng6-toastr-notifications.js");
/* harmony import */ var src_services_DatabaseService__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/_services/DatabaseService */ "./src/_services/DatabaseService.ts");
/* harmony import */ var src_app_dialog_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/dialog.component */ "./src/app/dialog.component.ts");
/* harmony import */ var src_app_localstorage_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/localstorage.service */ "./src/app/localstorage.service.ts");









var WarrantyListComponent = /** @class */ (function () {
    function WarrantyListComponent(dialog, dialogs, alert, service, rout, toast, session) {
        this.dialog = dialog;
        this.dialogs = dialogs;
        this.alert = alert;
        this.service = service;
        this.rout = rout;
        this.toast = toast;
        this.session = session;
        this.fabBtnValue = 'add';
        this.warrantyList = [];
        this.active_tab = 'Pending';
        this.filter = {};
        this.data = [];
        this.start = 0;
        this.total_page = 0;
        this.pagenumber = 0;
        this.loader = false;
        this.filter_data = {};
        this.excelLoader = false;
        this.datanotofound = false;
        this.downurl = '';
        this.downurl = service.downloadUrl;
        this.page_limit = service.pageLimit;
    }
    WarrantyListComponent.prototype.ngOnInit = function () {
        this.filter_data = this.service.getData();
        console.log(this.filter_data);
        if (this.filter_data.status) {
            this.active_tab = this.filter_data.status;
        }
        this.getWarrantyList('');
    };
    WarrantyListComponent.prototype.pervious = function () {
        this.start = this.start - this.page_limit;
        this.getWarrantyList('');
    };
    WarrantyListComponent.prototype.nextPage = function () {
        this.start = this.start + this.page_limit;
        this.getWarrantyList('');
    };
    WarrantyListComponent.prototype.refresh = function () {
        this.start = 0;
        this.filter_data = {};
        this.getWarrantyList('');
    };
    WarrantyListComponent.prototype.clear = function () {
        this.refresh();
    };
    WarrantyListComponent.prototype.goToDetailHandler = function (id) {
        window.open("/customer-detail/" + id);
    };
    WarrantyListComponent.prototype.date_format = function () {
        this.filter_data.date_created = moment__WEBPACK_IMPORTED_MODULE_4__(this.filter_data.date_created).format('YYYY-MM-DD');
        this.getWarrantyList('');
    };
    WarrantyListComponent.prototype.date_format2 = function () {
        this.filter_data.date_of_purchase = moment__WEBPACK_IMPORTED_MODULE_4__(this.filter_data.date_of_purchase).format('YYYY-MM-DD');
        this.getWarrantyList('');
    };
    WarrantyListComponent.prototype.date_format3 = function () {
        this.filter_data.warranty_end_date = moment__WEBPACK_IMPORTED_MODULE_4__(this.filter_data.warranty_end_date).format('YYYY-MM-DD');
        this.getWarrantyList('');
    };
    WarrantyListComponent.prototype.date_format4 = function () {
        this.filter_data.verification_on = moment__WEBPACK_IMPORTED_MODULE_4__(this.filter_data.verification_on).format('YYYY-MM-DD');
        this.getWarrantyList('');
    };
    WarrantyListComponent.prototype.getWarrantyList = function (data) {
        var _this = this;
        if (this.pagenumber > this.total_page) {
            this.pagenumber = this.total_page;
            this.start = this.pageCount - this.page_limit;
        }
        if (this.start < 0) {
            this.start = 0;
        }
        // if (this.active_tab == 'All') {
        // this.filter_data.status = this.active_tab;
        // }
        // if (this.active_tab == 'Pending') {
        //   this.filter_data.status = this.active_tab;
        // }
        // if (this.active_tab == 'Verified') {
        //   this.filter_data.status = this.active_tab;
        // }
        // if (this.active_tab == 'Reject') {
        //   this.filter_data.status = this.active_tab;
        // }
        console.log(this.active_tab);
        this.filter_data.status = this.active_tab;
        var header = this.service.post_rqst({ 'filter': this.filter_data, 'start': this.start, 'pagelimit': this.page_limit }, "ServiceTask/serviceWarrantyList");
        this.loader = true;
        header.subscribe(function (result) {
            if (result['statusCode'] == 200) {
                console.log('result', result);
                _this.warrantyList = result['result'];
                console.log(_this.warrantyList);
                _this.pageCount = result['count'];
                console.log(_this.pageCount);
                _this.tab_count = result['tab_count'];
                console.log(_this.tab_count);
                _this.all_count = result['tab_count']['all_count'];
                console.log(_this.all_count);
                _this.loader = false;
                if (_this.warrantyList.length == 0) {
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
                for (var i = 0; i < _this.warrantyList.length; i++) {
                    if (_this.warrantyList[i].status == '1') {
                        _this.warrantyList[i].newStatus = true;
                    }
                    else if (_this.warrantyList[i].status == '0') {
                        _this.warrantyList[i].newStatus = false;
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
    WarrantyListComponent.prototype.lastBtnValue = function (value) {
        this.fabBtnValue = value;
    };
    // updateWarrantyStataus(row)
    // {
    //   const dialogRef = this.dialogs.open(WarrantyUpdateModelComponent, {
    //       width: '400px',
    //       panelClass: 'cs-model',
    //       data: {
    //         id: row,
    //       }
    //     });
    //     dialogRef.afterClosed().subscribe(result => {
    //       if (result != false) {
    //         // this.getComplaintDetail();
    //       }
    //     });
    //   }
    WarrantyListComponent.prototype.downloadExcel = function () {
        var _this = this;
        this.excelLoader = true;
        this.service.post_rqst({ 'filter': this.filter_data }, "Excel/service_warranty_list").subscribe((function (result) {
            if (result['msg'] == true) {
                window.open(_this.downurl + result['filename']);
                _this.getWarrantyList('');
                _this.excelLoader = false;
            }
            else {
            }
        }));
    };
    WarrantyListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-warranty-list',
            template: __webpack_require__(/*! ./warranty-list.component.html */ "./src/app/warranty/warranty-list/warranty-list.component.html"),
            styles: [__webpack_require__(/*! ./warranty-list.component.scss */ "./src/app/warranty/warranty-list/warranty-list.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_dialog_component__WEBPACK_IMPORTED_MODULE_7__["DialogComponent"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"], src_app_dialog_component__WEBPACK_IMPORTED_MODULE_7__["DialogComponent"], src_services_DatabaseService__WEBPACK_IMPORTED_MODULE_6__["DatabaseService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_5__["ToastrManager"], src_app_localstorage_service__WEBPACK_IMPORTED_MODULE_8__["sessionStorage"]])
    ], WarrantyListComponent);
    return WarrantyListComponent;
}());



/***/ }),

/***/ "./src/app/warranty/warranty-module/warranty-module.module.ts":
/*!********************************************************************!*\
  !*** ./src/app/warranty/warranty-module/warranty-module.module.ts ***!
  \********************************************************************/
/*! exports provided: WarrantyModuleModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WarrantyModuleModule", function() { return WarrantyModuleModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _warranty_list_warranty_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../warranty-list/warranty-list.component */ "./src/app/warranty/warranty-list/warranty-list.component.ts");
/* harmony import */ var _warranty_add_warranty_add_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../warranty-add/warranty-add.component */ "./src/app/warranty/warranty-add/warranty-add.component.ts");
/* harmony import */ var _warranty_detail_warranty_detail_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../warranty-detail/warranty-detail.component */ "./src/app/warranty/warranty-detail/warranty-detail.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-multiselect-dropdown */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/ng-multiselect-dropdown/fesm5/ng-multiselect-dropdown.js");
/* harmony import */ var src_app_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/material */ "./src/app/material.ts");
/* harmony import */ var angular_ng_autocomplete__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! angular-ng-autocomplete */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/angular-ng-autocomplete/fesm5/angular-ng-autocomplete.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var ngx_mat_select_search__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-mat-select-search */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/ngx-mat-select-search/fesm5/ngx-mat-select-search.js");
/* harmony import */ var src_app_app_utility_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/app-utility.module */ "./src/app/app-utility.module.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/router */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_auth_component_guard__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/auth-component.guard */ "./src/app/auth-component.guard.ts");















var warrantyRoutes = [
    { path: "", children: [
            { path: "", component: _warranty_list_warranty_list_component__WEBPACK_IMPORTED_MODULE_3__["WarrantyListComponent"], canActivate: [src_app_auth_component_guard__WEBPACK_IMPORTED_MODULE_14__["AuthComponentGuard"]], data: { expectedRole: ['1'] } },
            { path: 'add-warranty', component: _warranty_add_warranty_add_component__WEBPACK_IMPORTED_MODULE_4__["WarrantyAddComponent"], canActivate: [src_app_auth_component_guard__WEBPACK_IMPORTED_MODULE_14__["AuthComponentGuard"]], data: { expectedRole: ['1'] } },
            { path: "warranty-detail/:id", children: [
                    { path: "", component: _warranty_detail_warranty_detail_component__WEBPACK_IMPORTED_MODULE_5__["WarrantyDetailComponent"], canActivate: [src_app_auth_component_guard__WEBPACK_IMPORTED_MODULE_14__["AuthComponentGuard"]], data: { expectedRole: ['1'] } },
                    { path: 'add-warranty/:id', component: _warranty_add_warranty_add_component__WEBPACK_IMPORTED_MODULE_4__["WarrantyAddComponent"], canActivate: [src_app_auth_component_guard__WEBPACK_IMPORTED_MODULE_14__["AuthComponentGuard"]], data: { expectedRole: ['1'] } }
                ] }
        ] },
];
var WarrantyModuleModule = /** @class */ (function () {
    function WarrantyModuleModule() {
    }
    WarrantyModuleModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_warranty_list_warranty_list_component__WEBPACK_IMPORTED_MODULE_3__["WarrantyListComponent"], _warranty_add_warranty_add_component__WEBPACK_IMPORTED_MODULE_4__["WarrantyAddComponent"], _warranty_detail_warranty_detail_component__WEBPACK_IMPORTED_MODULE_5__["WarrantyDetailComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_13__["RouterModule"].forChild(warrantyRoutes),
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
    ], WarrantyModuleModule);
    return WarrantyModuleModule;
}());



/***/ })

}]);