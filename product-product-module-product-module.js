(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["product-product-module-product-module"],{

/***/ "./src/app/product/add-product/add-product.component.html":
/*!****************************************************************!*\
  !*** ./src/app/product/add-product/add-product.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-container\">\r\n  <app-loader *ngIf=\"loader\"></app-loader>\r\n  <div class=\"tools-container\">\r\n    <a mat-icon-button matTooltip=\"Back\" (click)=\"back()\">\r\n      <i class=\"material-icons\">arrow_back</i>\r\n    </a>\r\n    <h2>{{product_id ? 'Edit':'Add New'}} Product</h2>\r\n  </div>\r\n\r\n  <div class=\"container pt10 pl10 pr10 pb50\">\r\n    <form #f=\"ngForm\" (ngSubmit)=\"f.valid && submit()\">\r\n      <div class=\"row\">\r\n        <div class=\"col s12\">\r\n          <div class=\"card pb0\">\r\n            <div class=\"card-head\">\r\n              <h2>Basic Information</h2>\r\n            </div>\r\n            <div class=\"card-body cs-form\">\r\n              <div class=\"row\">\r\n                <div class=\"col s12 m3 l3\">\r\n                  <mat-form-field appearance=\"outline\" [ngClass]=\"{'has-error' : segment_id.invalid } \">\r\n                    <mat-label>Category</mat-label>\r\n                    <mat-select name=\"segment_id\" #segment_id=\"ngModel\" [(ngModel)]=\"data.segment_id\" required>\r\n                      <mat-option *ngFor=\"let row of segmentList\" value=\"{{row.id}}\"\r\n                        color=\"accent\">{{row.category}}</mat-option>\r\n                    </mat-select>\r\n                  </mat-form-field>\r\n                  <div class=\"alert alert-danger\" *ngIf=\"f.submitted && segment_id?.invalid \">\r\n                    This field is required\r\n                  </div>\r\n                </div>\r\n\r\n\r\n\r\n                <div class=\"col s12 m3 l3\">\r\n                  <mat-form-field appearance=\"outline\"\r\n                    [ngClass]=\"{'has-error' : product_name?.invalid || product_name.touched } \">\r\n                    <mat-label>Product Name</mat-label>\r\n                    <input matInput placeholder=\"Type Here ...\" name=\"product_name\" #product_name=\"ngModel\"\r\n                      [(ngModel)]=\"data.product_name\" required>\r\n                  </mat-form-field>\r\n                  <div class=\"alert alert-danger\" *ngIf=\"f.submitted && product_name?.invalid\">\r\n                    This field is required\r\n                  </div>\r\n                </div>\r\n                <div class=\"col s12 m3 l3\">\r\n                  <mat-form-field appearance=\"outline\" [ngClass]=\"{'has-error' : product_code.invalid } \">\r\n                    <mat-label>Product Code</mat-label>\r\n                    <input matInput placeholder=\"Type Here ...\" name=\"product_code\" #product_code=\"ngModel\"\r\n                      [(ngModel)]=\"data.product_code\" required>\r\n                  </mat-form-field>\r\n                  <div class=\"alert alert-danger\" *ngIf=\"f.submitted && product_code?.invalid\">\r\n                    This field is required\r\n                  </div>\r\n                </div>\r\n\r\n                <div class=\"col s12 m3 l3\">\r\n                  <mat-form-field appearance=\"outline\">\r\n                    <mat-label>Thickness</mat-label>\r\n                    <input matInput placeholder=\"Type Here ...\" name=\"thickness\" #thickness=\"ngModel\"\r\n                      [(ngModel)]=\"data.thickness\" required>\r\n                  </mat-form-field>\r\n\r\n                  <div class=\"alert alert-danger\" *ngIf=\"f.submitted && thickness?.invalid\">\r\n                    This field is required\r\n                  </div>\r\n                </div>\r\n\r\n              </div>\r\n              <div class=\"row\">\r\n                <div class=\"col s12 m3 l3\">\r\n                  <mat-form-field appearance=\"outline\">\r\n                    <mat-label>Size</mat-label>\r\n                    <input matInput placeholder=\"Type Here ...\" name=\"size\" #size=\"ngModel\" [(ngModel)]=\"data.size\"\r\n                      required>\r\n                  </mat-form-field>\r\n                  <div class=\"alert alert-danger\" *ngIf=\"f.submitted && size?.invalid\">\r\n                    This field is required\r\n                  </div>\r\n                </div>\r\n\r\n                <div class=\"col s12 m3 l3\">\r\n                  <mat-form-field appearance=\"outline\">\r\n                    <mat-label>Brands</mat-label>\r\n                    <mat-select name=\"brand\" [(ngModel)]=\"data.brand\" #brand=\"ngModel\" multiple required>\r\n                      <mat-option *ngFor=\"let row of brandList\"\r\n                        value=\"{{row.brand_code}}\">{{row.display_name}}</mat-option>\r\n                    </mat-select>\r\n                  </mat-form-field>\r\n                  <div class=\"alert alert-danger\" *ngIf=\"brand.touched || f.submitted\">\r\n                    <p *ngIf=\"brand.errors?.required\">This field is required</p>\r\n                  </div>\r\n                </div>\r\n\r\n\r\n                <div class=\"col s12 m3 l3\">\r\n                  <mat-form-field appearance=\"outline\">\r\n                    <mat-label>Grade</mat-label>\r\n                    <input matInput placeholder=\"Type Here ...\" name=\"grade\" #grade=\"ngModel\" [(ngModel)]=\"data.grade\"\r\n                      required>\r\n                  </mat-form-field>\r\n                  <div class=\"alert alert-danger\" *ngIf=\"f.submitted && grade?.invalid\">\r\n                    This field is required\r\n                  </div>\r\n                </div>\r\n\r\n\r\n                <div class=\"col s12 m3 l3\">\r\n                  <mat-form-field appearance=\"outline\">\r\n                    <mat-label>Weight Per Sheet</mat-label>\r\n                    <input matInput placeholder=\"Type Here ...\" name=\"weight\" #weight=\"ngModel\"\r\n                      [(ngModel)]=\"data.weight\" required>\r\n                  </mat-form-field>\r\n                  <div class=\"alert alert-danger\" *ngIf=\"f.submitted && weight?.invalid\">\r\n                    This field is required\r\n                  </div>\r\n                </div>\r\n\r\n                <div class=\"col s12 m3 l3\">\r\n                  <mat-form-field appearance=\"outline\">\r\n                    <mat-label>Sq. Ft. S.Category</mat-label>\r\n                    <input matInput placeholder=\"Type Here ...\" type=\"number\" name=\"mrp\" #mrp=\"ngModel\"\r\n                      [(ngModel)]=\"data.mrp\" required>\r\n                  </mat-form-field>\r\n                  <div class=\"alert alert-danger\" *ngIf=\"f.submitted && mrp?.invalid\">\r\n                    This field is required\r\n                  </div>\r\n                </div>\r\n                <div class=\"col s12 m3 l3\">\r\n                  <mat-form-field appearance=\"outline\">\r\n                    <mat-label>Sq. Mtr. S.Category</mat-label>\r\n                    <input matInput placeholder=\"Type Here ...\" type=\"number\" name=\"sqmtr\" #sqmtr=\"ngModel\"\r\n                      [(ngModel)]=\"data.sqmtr\" required>\r\n                  </mat-form-field>\r\n                  <div class=\"alert alert-danger\" *ngIf=\"f.submitted && sqmtr?.invalid\">\r\n                    This field is required\r\n                  </div>\r\n                </div>\r\n                <div class=\"col s12 m3 l3\">\r\n                  <mat-form-field appearance=\"outline\">\r\n                    <mat-label>Sq. Ft. SS.Category</mat-label>\r\n                    <input matInput placeholder=\"Type Here ...\" type=\"number\" name=\"mrpSS\" #mrpSS=\"ngModel\"\r\n                      [(ngModel)]=\"data.mrpSS\" required>\r\n                  </mat-form-field>\r\n                  <div class=\"alert alert-danger\" *ngIf=\"f.submitted && mrpSS?.invalid\">\r\n                    This field is required\r\n                  </div>\r\n                </div>\r\n                <div class=\"col s12 m3 l3\">\r\n                  <mat-form-field appearance=\"outline\">\r\n                    <mat-label>Sq. Mtr. SS.Category</mat-label>\r\n                    <input matInput placeholder=\"Type Here ...\" type=\"number\" name=\"sqmtrSS\" #sqmtrSS=\"ngModel\"\r\n                      [(ngModel)]=\"data.sqmtrSS\" required>\r\n                  </mat-form-field>\r\n                  <div class=\"alert alert-danger\" *ngIf=\"f.submitted && sqmtrSS?.invalid\">\r\n                    This field is required\r\n                  </div>\r\n                </div>\r\n\r\n              </div>\r\n              <div class=\"row\">\r\n                <div class=\"col s12 m3 l3\">\r\n                  <mat-form-field  appearance=\"outline\">\r\n                    <mat-label>Scanning</mat-label>\r\n                    <mat-select  name=\"product_scan\" [(ngModel)]=\"data.product_scan\" #product_scan=\"ngModel\" required>\r\n                      <mat-option  value=\"Yes\">Yes</mat-option>\r\n                      <mat-option  value=\"No\">No</mat-option>\r\n                    </mat-select>\r\n                  </mat-form-field>\r\n                  <div class=\"alert alert-danger\" *ngIf=\"product_scan.touched || f.submitted\">\r\n                    <p *ngIf=\"product_scan.errors?.required\">This field is required</p>\r\n                  </div>\r\n                </div>\r\n                <!-- <div class=\"col s12 m3 l3\">\r\n                  <mat-form-field  appearance=\"outline\">\r\n                    <mat-label>Point Category</mat-label>\r\n                    <mat-select  name=\"point_category_id\" [(ngModel)]=\"data.point_category_id\" #point_category_id=\"ngModel\" (selectionChange)=\"findId(data.point_category_id)\" >\r\n                      <mat-option >\r\n                        <ngx-mat-select-search noEntriesFoundLabel=\"'no data found'\" placeholderLabel=\"Search..\" (keyup)=\"pointCategory_data($event.target.value)\"></ngx-mat-select-search>\r\n                      </mat-option>\r\n                      <mat-option *ngFor=\"let row of pointCategories_data\" value=\"{{row.id}}\">{{row.point_category_name}}</mat-option>\r\n                    </mat-select>\r\n                  </mat-form-field>\r\n                  <div class=\"alert alert-danger\" *ngIf=\"point_category_id.touched || f.submitted\">\r\n                    <p *ngIf=\"point_category_id.errors?.required\">This field is required</p>\r\n                  </div>\r\n                </div> -->\r\n\r\n                <div class=\"col s12 m3 l3\">\r\n                    <mat-form-field appearance=\"outline\">\r\n                      <mat-label>Ply Expert Point</mat-label>\r\n                      <input matInput placeholder=\"Type Here ...\" name=\"ply_expert_point\" #ply_expert_point=\"ngModel\"\r\n                        [(ngModel)]=\"data.ply_expert_point\"\r\n                        onkeypress=\"return event.charCode>=48 && event.charCode<=57\">\r\n                    </mat-form-field>\r\n                    <div class=\"alert alert-danger\" *ngIf=\"ply_expert_point.touched || f.submitted\">\r\n                      <p *ngIf=\"ply_expert_point.errors?.required\">This field is required</p>\r\n                    </div>\r\n                  </div>\r\n\r\n                  <div class=\"col s12 m3 l3\">\r\n                    <mat-form-field appearance=\"outline\">\r\n                      <mat-label>Ambassador Point</mat-label>\r\n                      <input matInput placeholder=\"Type Here ...\" name=\"ambassador_point\" #ambassador_point=\"ngModel\"\r\n                        [(ngModel)]=\"data.ambassador_point\"\r\n                        onkeypress=\"return event.charCode>=48 && event.charCode<=57\">\r\n                    </mat-form-field>\r\n                    <div class=\"alert alert-danger\" *ngIf=\"ambassador_point.touched || f.submitted\">\r\n                      <p *ngIf=\"ambassador_point.errors?.required\">This field is required</p>\r\n                    </div>\r\n                  </div>\r\n\r\n                  <div class=\"col s12 m3 l3\">\r\n                    <mat-form-field appearance=\"outline\">\r\n                      <mat-label>Fabricator Point</mat-label>\r\n                      <input matInput placeholder=\"Type Here ...\" name=\"fabricator_point\" #fabricator_point=\"ngModel\"\r\n                        [(ngModel)]=\"data.fabricator_point\"\r\n                        onkeypress=\"return event.charCode>=48 && event.charCode<=57\">\r\n                    </mat-form-field>\r\n                    <div class=\"alert alert-danger\" *ngIf=\"fabricator_point.touched || f.submitted\">\r\n                      <p *ngIf=\"fabricator_point.errors?.required\">This field is required</p>\r\n                    </div>\r\n                  </div>\r\n\r\n\r\n              </div>\r\n\r\n              <!-- <div class=\"row\">\r\n\r\n\r\n                <div class=\"col s12 m3 l3\">\r\n                  <mat-form-field appearance=\"outline\">\r\n                    <mat-label> Box Items with QR</mat-label>\r\n                    <mat-select name=\"boxWOItem\" [(ngModel)]=\"data.boxWOItem\" #boxWOItem=\"ngModel\" required>\r\n                      <mat-option value=\"0\">Yes</mat-option>\r\n                      <mat-option value=\"1\">No</mat-option>\r\n                    </mat-select>\r\n                  </mat-form-field>\r\n                  <div class=\"alert alert-danger\" *ngIf=\"boxWOItem.touched || f.submitted\">\r\n                    <p *ngIf=\"boxWOItem.errors?.required\">This field is required</p>\r\n                  </div>\r\n                </div>\r\n\r\n\r\n                <div class=\"col s12 m3 l3\">\r\n                  <mat-form-field appearance=\"outline\">\r\n                    <mat-label>QR Code Generation</mat-label>\r\n                    <mat-select name=\"product_scan\" [(ngModel)]=\"data.product_scan\" #product_scan=\"ngModel\" required>\r\n                      <mat-option value=\"Yes\">Yes</mat-option>\r\n                      <mat-option value=\"No\">No</mat-option>\r\n                    </mat-select>\r\n                  </mat-form-field>\r\n                  <div class=\"alert alert-danger\" *ngIf=\"product_scan.touched || f.submitted\">\r\n                    <p *ngIf=\"product_scan.errors?.required\">This field is required</p>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n\r\n              <div class=\"row mb0\">\r\n\r\n\r\n                <div class=\"col s12 m6 l6\">\r\n                  <div class=\"row\">\r\n                    <div class=\"col s12\">\r\n                      <mat-form-field appearance=\"outline\" [ngClass]=\"{'has-error' : description.invalid } \">\r\n                        <mat-label>Product Description</mat-label>\r\n                        <textarea matInput placeholder=\"Type Here ...\" name=\"description\" #description=\"ngModel\"\r\n                          class=\"h100\" [(ngModel)]=\"data.description\"></textarea>\r\n                        <div class=\"alert alert-danger\" *ngIf=\"!description.valid && description.touched\">\r\n                          Product Description is required...\r\n                        </div>\r\n                      </mat-form-field>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div> -->\r\n\r\n\r\n              <div class=\"row\">\r\n                <div class=\"col s12\">\r\n                  <div class=\"uploade-image\">\r\n                    <ul>\r\n                      <li *ngFor=\"let row of selected_image; let i=index\">\r\n                        <img src=\"{{row.img_id ? url+row.image : row.image}}\">\r\n                        <span class=\"cancel-icon\">\r\n                          <i class=\"material-icons crose-icon\"\r\n                            (click)=\"deleteProductImage(i,row.img_id, row.image)\">clear</i>\r\n                        </span>\r\n                      </li>\r\n                      <li class=\"add-bg-1\" [ngClass]=\"{'error': errorMsg == true}\">\r\n                        <label>\r\n                          <input type=\"file\" (change)=\"onUploadChange($event)\" style=\"display:none;\"\r\n                            accept=\".png, .jpg, .jpeg,\" multiple required />\r\n                          <div class=\"other\">\r\n                            <i class=\"material-icons\">cloud_upload</i>\r\n                            <p>Upload Images</p>\r\n                          </div>\r\n                        </label>\r\n                      </li>\r\n                    </ul>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"col s12\">\r\n          <div class=\"text-right\">\r\n            <button [ngClass]=\"{'loading': savingFlag == true}\" mat-raised-button color=\"accent\" type=\"submit\"\r\n              [disabled]=\"savingFlag == true\">\r\n              {{savingFlag == true ? 'Saving' : (product_id ? 'Update':'Save')}}\r\n            </button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </form>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/product/add-product/add-product.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/product/add-product/add-product.component.ts ***!
  \**************************************************************/
/*! exports provided: AddProductComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddProductComponent", function() { return AddProductComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _router_animation_router_animation_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../router-animation/router-animation.component */ "./src/app/router-animation/router-animation.component.ts");
/* harmony import */ var src_services_DatabaseService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/_services/DatabaseService */ "./src/_services/DatabaseService.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _dialog_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../dialog.component */ "./src/app/dialog.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng6-toastr-notifications */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/ng6-toastr-notifications/fesm5/ng6-toastr-notifications.js");
/* harmony import */ var src_app_user_designation_designation_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/user/designation/designation.component */ "./src/app/user/designation/designation.component.ts");










var AddProductComponent = /** @class */ (function () {
    function AddProductComponent(renderer, location, service, rout, toast, route, dialog, dialog2) {
        this.renderer = renderer;
        this.location = location;
        this.service = service;
        this.rout = rout;
        this.toast = toast;
        this.route = route;
        this.dialog = dialog;
        this.dialog2 = dialog2;
        this.savingFlag = false;
        this.segmentList = [];
        this.category_list = [];
        this.brandList = [];
        this.data = {};
        this.feature = {};
        this.value = [];
        this.formData = new FormData();
        this.loader = false;
        this.errorMsg = false;
        this.showMRP = false;
        this.showSize = false;
        this.image = new FormData();
        this.selected_image = [];
        this.state = [];
        this.pointCategories_data = [];
        this.filter = {};
        this.url = this.service.uploadUrl + 'product_image/';
        this.getSegment();
        this.getBrand();
        this.pointCategory_data('');
        this.userData = JSON.parse(localStorage.getItem('st_user'));
        this.userId = this.userData['data']['id'];
        this.userName = this.userData['data']['name'];
    }
    AddProductComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.product_id = params['id'];
            _this.image_id = params['id'];
            if (_this.product_id) {
                _this.loader = true;
                _this.getProductDetail();
            }
            if (!_this.product_id) {
                _this.data.boxWOItem = '0';
            }
        });
    };
    AddProductComponent.prototype.getSegment = function () {
        var _this = this;
        this.service.post_rqst({}, "Master/getProductCategoryList").subscribe((function (result) {
            if (result['category_list']['statusCode'] == 200) {
                _this.segmentList = result['category_list']['segment_list'];
            }
        }));
    };
    AddProductComponent.prototype.getBrand = function () {
        var _this = this;
        this.service.post_rqst({}, "Master/brandList").subscribe((function (result) {
            if (result['statusCode'] == 200) {
                _this.brandList = result['result'];
            }
            else {
                _this.toast.errorToastr(result['statusMsg']);
            }
        }));
    };
    AddProductComponent.prototype.getProductDetail = function () {
        var _this = this;
        this.getSegment();
        this.service.post_rqst({ 'product_id': this.product_id }, "Master/productDetail").subscribe((function (result) {
            _this.data = result.product_detail;
            if (_this.data.master_packing_size == 0) {
                _this.data.master_packing_size = '';
            }
            if (_this.data.small_packing_size == 0) {
                _this.data.small_packing_size = '';
            }
            _this.data.segment_id = _this.data.category_id.toString();
            _this.data.point_category_id = _this.data.point_category_id.toString();
            _this.data.sub_segment_id = _this.data.sub_category_id.toString();
            _this.data.brand = _this.data.brand.map(function (el) { return el.trim(); });
            _this.data.color = _this.data.color.map(function (el) { return el.trim(); });
            _this.data.boxWOItem = _this.data.boxWOItem.toString();
            if (_this.data.gst == 0) {
                _this.data.gst = '';
            }
            _this.selected_image = result.product_detail.img;
            _this.loader = false;
        }));
    };
    AddProductComponent.prototype.findId = function (id) {
        var index = this.pointCategories_data.findIndex(function (row) { return row.id == id; });
        if (index != -1) {
            // this.data.point_category_id = this.pointCategories_data[index].id;
            this.data.point_category_name = this.pointCategories_data[index].point_category_name;
        }
    };
    AddProductComponent.prototype.pointCategory_data = function (searcValue) {
        var _this = this;
        this.filter.point_type = 'Item Box';
        this.filter.point_category_name = searcValue;
        this.service.post_rqst({ 'filter': this.filter, }, 'Master/pointCategoryMasterList').subscribe(function (resp) {
            if (resp['statusCode'] == 200) {
                _this.pointCategories_data = resp['point_category_list'];
            }
            else {
                _this.toast.errorToastr(resp['statusMsg']);
            }
        }, function (error) {
        });
    };
    AddProductComponent.prototype.showMRPFunction = function () {
        this.showMRP = true;
        this.showSize = false;
    };
    AddProductComponent.prototype.showSizeFunction = function () {
        this.showMRP = false;
        this.showSize = true;
    };
    AddProductComponent.prototype.deleteProductImage = function (arrayIndex, id, name) {
        var _this = this;
        if (id) {
            this.service.post_rqst({ 'image_id': id, 'image': name }, "Master/productImageDeleted").subscribe((function (result) {
                if (result['statusCode'] == '200') {
                    _this.toast.successToastr(result['statusMsg']);
                    _this.selected_image.splice(arrayIndex, 1);
                }
                else {
                    _this.toast.errorToastr(result['statusMsg']);
                }
            }));
        }
        else {
            this.selected_image.splice(arrayIndex, 1);
        }
        // this.selected_image.splice(arrayIndex, 1);
    };
    // add image
    AddProductComponent.prototype.onUploadChange = function (data) {
        var _this = this;
        this.errorMsg = false;
        this.image_id = '';
        for (var i = 0; i < data.target.files.length; i++) {
            var files = data.target.files[i];
            if (files) {
                var reader = new FileReader();
                reader.onload = function (e) {
                    _this.selected_image.push({ "image": e.target.result });
                };
                reader.readAsDataURL(files);
            }
            this.image.append("" + i, data.target.files[i], data.target.files[i].name);
        }
    };
    AddProductComponent.prototype.openDialog = function () {
        var dialogRef = this.dialog2.open(src_app_user_designation_designation_component__WEBPACK_IMPORTED_MODULE_9__["DesignationComponent"], {
            width: '500px',
            panelClass: 'cs-modal',
            disableClose: true,
            data: {
                'type': 'color_add'
            }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result == true) {
            }
        });
    };
    AddProductComponent.prototype.submit = function () {
        var _this = this;
        // if (this.data.small_packing_size == '1') {
        //   this.toast.errorToastr('Small Packing Size should not be 1');
        //   return;
        // }
        this.data.image = this.selected_image ? this.selected_image : [];
        this.savingFlag = true;
        var header;
        if (this.product_id) {
            this.data.last_updated_by_name = this.userName;
            this.data.last_updated_by = this.userId;
            header = this.service.post_rqst({ 'data': this.data }, "Master/updateProduct");
        }
        else {
            this.data.created_by_name = this.userName;
            this.data.created_by = this.userId;
            header = this.service.post_rqst({ 'data': this.data }, "Master/addProduct");
        }
        header.subscribe(function (result) {
            if (result['statusCode'] == 200) {
                _this.rout.navigate(['/product-list']);
                _this.toast.successToastr(result['statusMsg']);
            }
            else {
                _this.toast.errorToastr(result['statusMsg']);
                _this.savingFlag = false;
            }
        }, function (err) {
            _this.savingFlag = false;
        });
    };
    AddProductComponent.prototype.back = function () {
        this.location.back();
    };
    AddProductComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-add-product',
            template: __webpack_require__(/*! ./add-product.component.html */ "./src/app/product/add-product/add-product.component.html"),
            animations: [Object(_router_animation_router_animation_component__WEBPACK_IMPORTED_MODULE_2__["slideToTop"])()]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"],
            _angular_common__WEBPACK_IMPORTED_MODULE_7__["Location"],
            src_services_DatabaseService__WEBPACK_IMPORTED_MODULE_3__["DatabaseService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"],
            ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_8__["ToastrManager"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            _dialog_component__WEBPACK_IMPORTED_MODULE_5__["DialogComponent"],
            _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatDialog"]])
    ], AddProductComponent);
    return AddProductComponent;
}());



/***/ }),

/***/ "./src/app/product/change-scheme-status-model/change-scheme-status-model.component.html":
/*!**********************************************************************************************!*\
  !*** ./src/app/product/change-scheme-status-model/change-scheme-status-model.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"edit-modal\">\r\n    <p class=\"heading\">Generate QR Codes</p>\r\n    <form #update_basic=\"ngForm\" name=\"update_basic\" (ngSubmit)=\"submit_scheme()\" validate>\r\n      <div mat-dialog-content style=\"padding: 0px 15px;\">\r\n        <div class=\"cs-form\">\r\n          <div class=\"row\">\r\n            \r\n            <div class=\"col s6\">\r\n              <mat-form-field class=\"cs-input\"  appearance=\"outline\">\r\n                <mat-label>Scheme Status</mat-label>\r\n                <mat-select name=\"scheme_status\" placeholder=\"Select Status\" #scheme_status=\"ngModel\" [(ngModel)]=\"form.scheme_status\" [ngClass]=\"{'has-error' : scheme_status.invalid } \" required>\r\n                  <mat-option disabled=\"\">Select Status</mat-option>\r\n                  <mat-option value=\"Active\">Active</mat-option>\r\n                  <mat-option value=\"Deactive\">Deactive</mat-option>\r\n                </mat-select>\r\n              </mat-form-field>               \r\n              <div class=\"alert alert-danger\" *ngIf=\"!scheme_status.valid && update_basic.submitted\">\r\n                Scheme Status is required....\r\n            </div>\r\n            </div>\r\n            \r\n            <div class=\"col s6\">\r\n              <mat-form-field class=\"cs-input\"  appearance=\"outline\">\r\n                <mat-label>Coupon Point</mat-label>\r\n                <input matInput placeholder=\"Type Here ...\" name=\"coupon_point\" #coupon_point=\"ngModel\" [(ngModel)]=\"form.coupon_point\">\r\n              </mat-form-field>\r\n              <!-- <div class=\"alert alert-danger\" *ngIf=\"!coupon_point.valid && update_basic.submitted\">\r\n                  Coupon Point is required...\r\n              </div> -->\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div mat-dialog-actions>\r\n          <button mat-button color=\"warn\" [mat-dialog-close]=\"false\">Cancel</button>\r\n          <button mat-button color=\"accent\" type=\"submit\">Save</button>\r\n        </div>\r\n    </form>\r\n  </div>"

/***/ }),

/***/ "./src/app/product/change-scheme-status-model/change-scheme-status-model.component.scss":
/*!**********************************************************************************************!*\
  !*** ./src/app/product/change-scheme-status-model/change-scheme-status-model.component.scss ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/product/change-scheme-status-model/change-scheme-status-model.component.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/product/change-scheme-status-model/change-scheme-status-model.component.ts ***!
  \********************************************************************************************/
/*! exports provided: ChangeSchemeStatusModelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ChangeSchemeStatusModelComponent", function() { return ChangeSchemeStatusModelComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var src_services_DatabaseService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/_services/DatabaseService */ "./src/_services/DatabaseService.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng6-toastr-notifications */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/ng6-toastr-notifications/fesm5/ng6-toastr-notifications.js");






var ChangeSchemeStatusModelComponent = /** @class */ (function () {
    function ChangeSchemeStatusModelComponent(data, serve, rout, dialog2, toast) {
        this.data = data;
        this.serve = serve;
        this.rout = rout;
        this.dialog2 = dialog2;
        this.toast = toast;
        this.form = {};
        this.product_id = data.product_id;
    }
    ChangeSchemeStatusModelComponent.prototype.ngOnInit = function () {
    };
    ChangeSchemeStatusModelComponent.prototype.submit_scheme = function () {
        var _this = this;
        this.form.product_id = this.product_id;
        this.serve.fetchData(this.form, "Product/change_scheme_status").subscribe((function (result) {
            _this.toast.successToastr("changes update");
            _this.dialog2.closeAll();
        }));
    };
    ChangeSchemeStatusModelComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-change-scheme-status-model',
            template: __webpack_require__(/*! ./change-scheme-status-model.component.html */ "./src/app/product/change-scheme-status-model/change-scheme-status-model.component.html"),
            styles: [__webpack_require__(/*! ./change-scheme-status-model.component.scss */ "./src/app/product/change-scheme-status-model/change-scheme-status-model.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object, src_services_DatabaseService__WEBPACK_IMPORTED_MODULE_3__["DatabaseService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"], ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_5__["ToastrManager"]])
    ], ChangeSchemeStatusModelComponent);
    return ChangeSchemeStatusModelComponent;
}());



/***/ }),

/***/ "./src/app/product/product-detail/product-detail.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/product/product-detail/product-detail.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-container\">\r\n    <div class=\"tools-container\">\r\n        <a mat-icon-button matTooltip=\"Back\" (click)=\"back()\">\r\n            <i class=\"material-icons\">arrow_back</i>\r\n        </a>\r\n        <h2>Product Details</h2>\r\n\r\n        <div class=\"left-auto\" *ngIf=\"logined_user_data.edit_products_master=='1'\">\r\n            <button matTooltip=\"Edit product\" *ngIf=\"logined_user_data.edit_products_master=='1'\"\r\n                [routerLink]=\"[ 'add-product/', this.product_id ]\" mat-raised-button color=\"primary\"><i\r\n                    class=\"material-icons\">edit</i> Edit product</button>\r\n        </div>\r\n    </div>  \r\n\r\n    <div class=\"container pt10 pl10 pr10 pb50\">\r\n        <div class=\"row\">\r\n            <div class=\"col s12 m12 l8\">\r\n                <!-- product data start -->\r\n                <div class=\"card\" *ngIf=\"!skLoading\">\r\n                    <div class=\"card-head\">\r\n                        <h2>Basic Details</h2>\r\n                    </div>\r\n                    <div class=\"card-body\">\r\n                        <div class=\"grid-box\">\r\n                            <div class=\"block-feilds\">\r\n                                <span>Date Created</span>\r\n                                <p>{{getData.date_created | date}}</p>\r\n                            </div>\r\n\r\n                            <div class=\"block-feilds\">\r\n                                <span>Brand</span>\r\n                                <p>{{getData.brand ? getData.brand : '---'}}</p>\r\n                            </div>\r\n\r\n                            <div class=\"block-feilds\">\r\n                                <span>Category</span>\r\n                                <p>{{getData.category ? getData.category : '---'}}</p>\r\n                            </div>\r\n                            <div class=\"block-feilds\">\r\n                                <span>Name</span>\r\n                                <p>{{getData.product_name ? getData.product_name : '---'}}</p>\r\n                            </div>\r\n\r\n                            <div class=\"block-feilds\">\r\n                                <span>Product Code</span>\r\n                                <p>{{getData.product_code ? getData.product_code : '---Brand'}}</p>\r\n                            </div>\r\n\r\n                            <div class=\"block-feilds\">\r\n                                <span>Thickness</span>\r\n                                <p>{{getData.thickness ? getData.thickness : '---Brand'}}</p>\r\n                            </div>\r\n\r\n\r\n\r\n                            <div class=\"block-feilds\">\r\n                                <span>Size</span>\r\n                                <p>{{getData.size ? getData.size :'---'}}</p>\r\n                            </div>\r\n\r\n                            <div class=\"block-feilds\">\r\n                                <span>Grade</span>\r\n                                <p>{{getData.grade ? getData.grade :'---'}}</p>\r\n                            </div>\r\n                            <div class=\"block-feilds\">\r\n                                <span>Weight Per Sheet</span>\r\n                                <p>{{getData.weight ? getData.weight :'---'}}</p>\r\n                            </div>\r\n                            <div class=\"block-feilds\">\r\n                                <span>Sq. Ft.</span>\r\n                                <p>&#x20B9; {{getData.mrp ? getData.mrp :'---'}}</p>\r\n                            </div>\r\n                            <div class=\"block-feilds\">\r\n                                <span>Sq. Mtr.</span>\r\n                                <p> &#x20B9; {{getData.sqmtr ? getData.sqmtr :'---'}}</p>\r\n                            </div>\r\n                            <!-- <div class=\"block-feilds\">\r\n                                <span>Point Category</span>\r\n                                <p>{{getData.point_category_name ? getData.point_category_name :'---'}}</p>\r\n                            </div>\r\n                            <div class=\"block-feilds\">\r\n                                <span>Box item with QR</span>\r\n                                <p>{{getData.boxWOItem=='1' ? 'No' :'Yes'}}</p>\r\n                            </div> -->\r\n\r\n                            <div class=\"block-feilds\">\r\n                                <span>Status</span>\r\n                                <p>{{getData.status == '1' ? 'Active' : \"Inactive\"}}</p>\r\n                            </div>\r\n\r\n                            <div class=\"block-feilds\">\r\n                                <span>Last Updated By</span>\r\n                                <p>{{getData.last_updated_by_name ? getData.last_updated_by_name : '--'}}</p>\r\n                            </div>\r\n\r\n                            <div class=\"block-feilds\">\r\n                                <span>Last Updated On</span>\r\n                                <p>\r\n                                    {{getData.last_updated_on && getData.last_updated_on != '0000-00-00 00:00:00'?\r\n                                    (getData.last_updated_on | date:'short') : '--'}}\r\n                                </p>\r\n                            </div>\r\n\r\n                             <div class=\"block-feilds\">\r\n                                <span>Ply Expert Point</span>\r\n                                <p>{{getData.ply_expert_point ? getData.ply_expert_point : '--'}}</p>\r\n                            </div>\r\n                             <div class=\"block-feilds\">\r\n                                <span>Ambassador Point</span>\r\n                                <p>{{getData.ambassador_point ? getData.ambassador_point : '--'}}</p>\r\n                            </div>\r\n                             <div class=\"block-feilds\">\r\n                                <span>Fabricator Point</span>\r\n                                <p>{{getData.fabricator_point ? getData.fabricator_point : '--'}}</p>\r\n                            </div>\r\n                        </div>\r\n                        <!-- \r\n                        <div class=\"grid-box single mt16\">\r\n                            <div class=\"block-feilds\">\r\n                                <span>Description</span>\r\n                                <p>{{getData.description ? getData.description:'N/A'}}</p>\r\n                            </div>\r\n                        </div> -->\r\n                    </div>\r\n                </div>\r\n                <!-- product data end -->\r\n\r\n\r\n                <!-- Skeleton start -->\r\n                <div class=\"card\" *ngIf=\"skLoading\">\r\n                    <div class=\"sk-head\">\r\n                        <h2>&nbsp;</h2>\r\n                    </div>\r\n                    <div class=\"card-body\">\r\n                        <div class=\"grid-box\">\r\n                            <div class=\"sk-box\" *ngFor=\"let row of [].constructor(10)\">\r\n                                &nbsp;\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <!-- Skeleton end -->\r\n\r\n            </div>\r\n            <div class=\"col s12 m12 l4\">\r\n                <div class=\"card\" *ngIf=\"!skLoading\">\r\n                    <div class=\"card-head\">\r\n                        <h2>Images</h2>\r\n                    </div>\r\n                    <div class=\"card-body\">\r\n                        <div class=\"img-container\">\r\n                            <div class=\"image-block\" *ngFor=\"let row of productImg\">\r\n                                <img [src]=\"url+row.image\" (click)=\"imageModel(url+row.image)\" style=\"cursor: zoom-in;\">\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <!-- Skeleton start -->\r\n                <div class=\"card\" *ngIf=\"skLoading\">\r\n                    <div class=\"sk-head\">\r\n                        <h2>&nbsp;</h2>\r\n                    </div>\r\n                    <div class=\"card-body\">\r\n                        <div class=\"img-container\">\r\n                            <div class=\"image-block sk-loading\" *ngFor=\"let row of [].constructor(3)\">\r\n                                &nbsp;\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <!-- Skeleton end -->\r\n\r\n            </div>\r\n        </div>\r\n\r\n        <!-- <div class=\"row\" *ngIf=\"stateDetail.length > 0 \">\r\n            <div class=\"col s12 m12 l12\">\r\n                <div class=\"card\">\r\n                    <div class=\"card-head\">\r\n                        <h2>State Wise Price List</h2>\r\n                    </div>\r\n                    <div class=\"card-body\">\r\n                        <div class=\"cs-table left-right-10\">\r\n                            <div class=\" border-top\">\r\n                                <div class=\"table-head\">\r\n                                    <table>\r\n                                        <tr>\r\n                                            <th class=\"w50 text-center\">Sr.No</th>\r\n                                            <th>State</th>\r\n                                            <th class=\"w100 text-right\">MRP</th>\r\n                                            <th class=\"w130 text-right\">CP Net Price</th>\r\n                                            <th class=\"w130 text-right\">DD Net Price</th>\r\n                                            <th class=\"w100 text-center\"\r\n                                                *ngIf=\"logined_user_data.edit_products_master=='1'\">Action</th>\r\n                                        </tr>\r\n\r\n                                        <tr>\r\n                                            <th class=\"w50 text-center\"></th>\r\n                                            <th>&nbsp;</th>\r\n                                            <th class=\"w100 text-right\">\r\n                                                <div class=\"th-search-acmt\"\r\n                                                    [ngClass]=\"{'error-block': allMrpFlag == true}\"\r\n                                                    *ngIf=\"logined_user_data.edit_products_master=='1'\">\r\n                                                    <mat-form-field>\r\n                                                        <input type=\"text\" (ngModelChange)=\"clearValidation()\" matInput\r\n                                                            type=\"text\" class=\"text-right\"\r\n                                                            onkeypress=\"return event.charCode>=48 && event.charCode<=57\"\r\n                                                            placeholder=\"Enter Mrp\" name=\"product_mrp\"\r\n                                                            #product_mrp=\"ngModel\" [(ngModel)]=\"state_data.product_mrp\">\r\n                                                    </mat-form-field>\r\n                                                </div>\r\n                                            </th>\r\n                                            <th class=\"w130 text-right\">\r\n                                                <div class=\"th-search-acmt\"\r\n                                                    [ngClass]=\"{'error-block': allMrpFlag == true}\"\r\n                                                    *ngIf=\"logined_user_data.edit_products_master=='1'\">\r\n                                                    <mat-form-field>\r\n                                                        <input type=\"text\" (ngModelChange)=\"clearValidation()\" matInput\r\n                                                            type=\"text\" class=\"text-right\"\r\n                                                            onkeypress=\"return event.charCode>=48 && event.charCode<=57\"\r\n                                                            placeholder=\"Enter Mrp\" name=\"cn_net_price\"\r\n                                                            #cn_net_price=\"ngModel\"\r\n                                                            [(ngModel)]=\"state_data.cn_net_price\">\r\n                                                    </mat-form-field>\r\n                                                </div>\r\n                                            </th>\r\n                                            <th class=\"w130 text-right\">\r\n                                                <div class=\"th-search-acmt\"\r\n                                                    [ngClass]=\"{'error-block': allMrpFlag == true}\"\r\n                                                    *ngIf=\"logined_user_data.edit_products_master=='1'\">\r\n                                                    <mat-form-field>\r\n                                                        <input type=\"text\" (ngModelChange)=\"clearValidation()\" matInput\r\n                                                            type=\"text\" class=\"text-right\"\r\n                                                            onkeypress=\"return event.charCode>=48 && event.charCode<=57\"\r\n                                                            placeholder=\"Enter Mrp\" name=\"dd_net_price\"\r\n                                                            #dd_net_price=\"ngModel\"\r\n                                                            [(ngModel)]=\"state_data.dd_net_price\">\r\n                                                    </mat-form-field>\r\n                                                </div>\r\n                                            </th>\r\n                                            <th class=\"w100 text-center\"\r\n                                                *ngIf=\"logined_user_data.edit_products_master=='1'\">\r\n                                                <div class=\"action-button\">\r\n                                                    <a mat-icon-button matTooltip=\"Update All\"\r\n                                                        *ngIf=\"logined_user_data.edit_products_master=='1'\"\r\n                                                        (click)=\"updateMrp('all','')\">\r\n                                                        <i class=\"material-icons edit\">save</i>\r\n                                                    </a>\r\n                                                </div>\r\n                                            </th>\r\n                                        </tr>\r\n                                    </table>\r\n                                </div>\r\n                            </div>\r\n\r\n                            <div class=\"table-container pb0\">\r\n                                <div class=\"table-content none-shadow\">\r\n                                    <table>\r\n                                        <tr *ngFor=\"let row of stateDetail;let i=index;\">\r\n                                            <td class=\"w50 text-center\">{{i+1}}</td>\r\n                                            <td>{{row.state_name | titlecase}}</td>\r\n                                            <td class=\"w100 text-right\">\r\n                                                <div class=\"th-search-acmt\"\r\n                                                    *ngIf=\"logined_user_data.edit_products_master!='1'\">\r\n                                                    {{row.product_mrp}}\r\n                                                </div>\r\n                                                <div class=\"th-search-acmt\"\r\n                                                    *ngIf=\"logined_user_data.edit_products_master=='1'\">\r\n                                                    <mat-form-field>\r\n                                                        <input type=\"text\" class=\"text-right\" matInput\r\n                                                            onkeypress=\"return event.charCode>=48 && event.charCode<=57\"\r\n                                                            placeholder=\"Enter Mrp\" [name]=\"'product_mrp'+i\"\r\n                                                            #product_mrp=\"ngModel\" [(ngModel)]=\"row.product_mrp\">\r\n                                                    </mat-form-field>\r\n                                                </div>\r\n                                            </td>\r\n                                            <td class=\"w130 text-right\">\r\n                                                <div class=\"th-search-acmt\"\r\n                                                    *ngIf=\"logined_user_data.edit_products_master!='1'\">\r\n                                                    {{row.cn_net_price}}\r\n                                                </div>\r\n                                                <div class=\"th-search-acmt\"\r\n                                                    *ngIf=\"logined_user_data.edit_products_master=='1'\">\r\n                                                    <mat-form-field>\r\n                                                        <input type=\"text\" class=\"text-right\" matInput\r\n                                                            onkeypress=\"return event.charCode>=48 && event.charCode<=57\"\r\n                                                            placeholder=\"Enter Mrp\" [name]=\"'cn_net_price'+i\"\r\n                                                            #cn_net_price=\"ngModel\" [(ngModel)]=\"row.cn_net_price\">\r\n                                                    </mat-form-field>\r\n                                                </div>\r\n                                            </td>\r\n                                            <td class=\"w130 text-right\">\r\n                                                <div class=\"th-search-acmt\"\r\n                                                    *ngIf=\"logined_user_data.edit_products_master!='1'\">\r\n                                                    {{row.dd_net_price}}\r\n                                                </div>\r\n                                                <div class=\"th-search-acmt\"\r\n                                                    *ngIf=\"logined_user_data.edit_products_master=='1'\">\r\n                                                    <mat-form-field>\r\n                                                        <input type=\"text\" class=\"text-right\" matInput\r\n                                                            onkeypress=\"return event.charCode>=48 && event.charCode<=57\"\r\n                                                            placeholder=\"Enter Mrp\" [name]=\"'dd_net_price'+i\"\r\n                                                            #dd_net_price=\"ngModel\" [(ngModel)]=\"row.dd_net_price\">\r\n                                                    </mat-form-field>\r\n                                                </div>\r\n                                            </td>\r\n                                            <td class=\"w100 text-center\"\r\n                                                *ngIf=\"logined_user_data.edit_products_master=='1'\">\r\n                                                <div class=\"action-button\">\r\n                                                    <button mat-icon-button matTooltip=\"Update\" [disabled]=\"\"\r\n                                                        (click)=\"updateMrp('single',i)\">\r\n                                                        <i class=\"material-icons edit\">save</i>\r\n                                                    </button>\r\n                                                </div>\r\n                                            </td>\r\n                                        </tr>\r\n                                    </table>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div> -->\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/product/product-detail/product-detail.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/product/product-detail/product-detail.component.ts ***!
  \********************************************************************/
/*! exports provided: ProductDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductDetailComponent", function() { return ProductDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _router_animation_router_animation_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../router-animation/router-animation.component */ "./src/app/router-animation/router-animation.component.ts");
/* harmony import */ var src_services_DatabaseService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/_services/DatabaseService */ "./src/_services/DatabaseService.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_dialog_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/dialog.component */ "./src/app/dialog.component.ts");
/* harmony import */ var ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng6-toastr-notifications */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/ng6-toastr-notifications/fesm5/ng6-toastr-notifications.js");
/* harmony import */ var src_app_dialog_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/dialog.service */ "./src/app/dialog.service.ts");
/* harmony import */ var src_app_service_exportexcel_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/service/exportexcel.service */ "./src/app/service/exportexcel.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var src_app_localstorage_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/localstorage.service */ "./src/app/localstorage.service.ts");
/* harmony import */ var _image_module_image_module_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../image-module/image-module.component */ "./src/app/image-module/image-module.component.ts");














var ProductDetailComponent = /** @class */ (function () {
    function ProductDetailComponent(location, session, router, alert, service, editdialog, dialog, route, toast, excelservice, dialog1) {
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
        this.assign_login_data = {};
        this.logined_user_data = {};
        // stateDetail: any = [];
        this.product_size = [];
        this.featureFlag = false;
        this.allMrpFlag = false;
        this.productImg = [];
        // getStateFeature() {
        //   this.service.post_rqst({ 'id': this.product_id, 'created_by_id': this.logined_user_data.id, 'created_by_name': this.logined_user_data.name }, "Master/stateWiseProductList").subscribe((result => {
        //     this.stateDetail = result['state_name']
        //   }
        //   ));
        // }
        // State wise Feature
        // update product mrp start
        this.state_data = {};
        this.assign_login_data = this.session.getSession();
        this.logined_user_data = this.assign_login_data.value.data;
        this.route.params.subscribe(function (params) {
            _this.product_id = params.id;
            _this.service.currentUserID = params.id;
            _this.url = _this.service.uploadUrl + 'product_image/';
            if (_this.product_id) {
                _this.getProductDetail();
                // this.getStateFeature();
            }
        });
    }
    ProductDetailComponent.prototype.ngOnInit = function () {
    };
    ProductDetailComponent.prototype.back = function () {
        this.location.back();
    };
    // Product detail fetch function start
    ProductDetailComponent.prototype.getProductDetail = function () {
        var _this = this;
        this.skLoading = true;
        this.service.post_rqst({ 'product_id': this.product_id }, "Master/productDetail").subscribe((function (result) {
            _this.getData = result['product_detail'];
            _this.productImg = _this.getData['img'];
            _this.skLoading = false;
        }));
    };
    ProductDetailComponent.prototype.imageModel = function (image) {
        var dialogRef = this.dialog.open(_image_module_image_module_component__WEBPACK_IMPORTED_MODULE_12__["ImageModuleComponent"], {
            panelClass: 'Image-modal',
            data: {
                image: image,
            }
        });
        dialogRef.afterClosed().subscribe(function (result) {
        });
    };
    // Product go to add page 
    ProductDetailComponent.prototype.editProduct = function () {
        this.router.navigate(['add-product/' + this.product_id]);
    };
    // Product go to add page
    // State wise fetaure
    ProductDetailComponent.prototype.clearValidation = function () {
        this.featureFlag = false;
        this.allMrpFlag = false;
    };
    ProductDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-product-detail',
            template: __webpack_require__(/*! ./product-detail.component.html */ "./src/app/product/product-detail/product-detail.component.html"),
            animations: [Object(_router_animation_router_animation_component__WEBPACK_IMPORTED_MODULE_2__["slideToTop"])()]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_10__["Location"], src_app_localstorage_service__WEBPACK_IMPORTED_MODULE_11__["sessionStorage"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], src_app_dialog_component__WEBPACK_IMPORTED_MODULE_6__["DialogComponent"], src_services_DatabaseService__WEBPACK_IMPORTED_MODULE_3__["DatabaseService"], src_app_dialog_service__WEBPACK_IMPORTED_MODULE_8__["DialogService"], _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialog"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["ActivatedRoute"], ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_7__["ToastrManager"], src_app_service_exportexcel_service__WEBPACK_IMPORTED_MODULE_9__["ExportexcelService"], src_app_dialog_component__WEBPACK_IMPORTED_MODULE_6__["DialogComponent"]])
    ], ProductDetailComponent);
    return ProductDetailComponent;
}());



/***/ }),

/***/ "./src/app/product/product-list/product-list.component.html":
/*!******************************************************************!*\
  !*** ./src/app/product/product-list/product-list.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-container\">\r\n  <app-loader *ngIf=\"excelLoader\"></app-loader>\r\n  <div class=\"tools-container\">\r\n    <h2>Products</h2>\r\n    <div class=\"left-auto df ac flex-gap-10\">\r\n      <a mat-icon-button matTooltip=\"Refresh\" (click)=\"refresh()\">\r\n        <i class=\"material-icons\">refresh</i>\r\n      </a>\r\n      <div class=\"pagination\" *ngIf=\"productlist.length > 0 \">\r\n        <div class=\"pagination-content\">\r\n          Pages\r\n          <span>{{pagenumber}}</span>\r\n          of\r\n          <span>{{total_page}}</span>\r\n        </div>\r\n        <div class=\"page-nav\">\r\n          <button mat-icon-button matTooltip=\"Older\" (click)=\"pervious()\" [disabled]=\"start == 0\">\r\n            <i class=\"material-icons\">navigate_before</i>\r\n          </button>\r\n          <button mat-icon-button matTooltip=\"Newer\" (click)=\"nextPage()\" [disabled]=\"pagenumber == total_page \">\r\n            <i class=\"material-icons\">navigate_next</i>\r\n          </button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n\r\n  <div class=\"container container-scroll\">\r\n    <div class=\"cs-table horizontal-scroll\">\r\n      <div class=\"sticky-head\">\r\n        <div class=\"table-head\">\r\n          <table>\r\n            <tr>\r\n              <th class=\"w60\">S. No</th>\r\n              <th class=\"w100\">Date Created</th>\r\n              <th class=\"w130\">Brand</th>\r\n              <th class=\"w110\">Category</th>\r\n              <th class=\"w250\">Product Name</th>\r\n              <th class=\"w130\">Product Code</th>\r\n               <th class=\"w120 text-center\">\r\n              \r\n                <ng-container >\r\n                  Ply Expert Point\r\n                </ng-container>\r\n\r\n              </th>\r\n              <th class=\"w120 text-center\">\r\n\r\n                <ng-container >\r\n                  Ambassador Point\r\n                </ng-container>\r\n              </th>\r\n              <!-- <th class=\"w120\">Point Category</th> -->\r\n\r\n              <th class=\"w100\">Thickness</th>\r\n              <th class=\"w60\">Size</th>\r\n              <th class=\"w60\">Sq. Ft. S</th>\r\n              <th class=\"w60\">Sq. Mtr. S</th>\r\n              <th class=\"w60\">Sq. Ft. SS</th>\r\n              <th class=\"w60\">Sq. Mtr. SS</th>\r\n              <th class=\"w100 text-center\" *ngIf=\"logined_user_data.edit_products_master=='1'\">Status</th>\r\n              <th class=\"w100 text-center\" *ngIf=\"logined_user_data.edit_products_master=='1'\">Scheme</th>\r\n              <th class=\"w100 text-center\" *ngIf=\"logined_user_data.delete_products_master=='1'\">Action</th>\r\n            </tr>\r\n          </table>\r\n        </div>\r\n\r\n        <div class=\"table-head bdrt\">\r\n          <table>\r\n            <tr>\r\n              <th class=\"w60\"></th>\r\n              <th class=\"w100\">\r\n                <div class=\"th-search-acmt\">\r\n                  <mat-form-field class=\"cs-input date-column infix-bodr\">\r\n                    <input matInput [matDatepicker]=\"picker\" placeholder=\"Date\" name=\"date_created\"\r\n                      #date_created=\"ngModel\" [(ngModel)]=\"filter_data.date_created\" (ngModelChange)=\"date_format()\"\r\n                      [max]=\"today_date\" readonly>\r\n                    <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\r\n                    <mat-datepicker #picker></mat-datepicker>\r\n                  </mat-form-field>\r\n                </div>\r\n              </th>\r\n              <th class=\"w130\">\r\n                <div class=\"th-search-acmt\">\r\n                  <mat-form-field>\r\n                    <input type=\"text\" matInput placeholder=\"Search ...\" name=\"brand\" (keyup.enter)=\"getProductList('')\"\r\n                      #brand=\"ngModel\" [(ngModel)]=\"filter_data.brand\">\r\n                  </mat-form-field>\r\n                </div>\r\n              </th>\r\n              <th class=\"w110\">\r\n                <div class=\"th-search-acmt\">\r\n                  <mat-form-field class=\"cs-input select-input\">\r\n                    <mat-select (selectionChange)=\"getProductList(''); getSubCatgory()\" name=\"segment\"\r\n                      #segment=\"ngModel\" [(ngModel)]=\"filter_data.segment\">\r\n                      <mat-option value=\"\" disabled style=\"padding: 10px 20px;\">Select</mat-option>\r\n                      <mat-option *ngFor=\"let row of segmentList\" value=\"{{row.id}}\">{{row.category}}</mat-option>\r\n                    </mat-select>\r\n                  </mat-form-field>\r\n                </div>\r\n              </th>\r\n\r\n\r\n              <th class=\"w250\">\r\n                <div class=\"th-search-acmt\">\r\n                  <mat-form-field>\r\n                    <input type=\"text\" matInput placeholder=\"Search ...\" name=\"product_name\"\r\n                      (keyup.enter)=\"getProductList('')\" #product_name=\"ngModel\" [(ngModel)]=\"filter_data.product_name\">\r\n                  </mat-form-field>\r\n                </div>\r\n              </th>\r\n              <th class=\"w130\">\r\n                <div class=\"th-search-acmt\">\r\n                  <mat-form-field>\r\n                    <input type=\"text\" matInput placeholder=\"Search ...\" name=\"prod_code\"\r\n                      (keyup.enter)=\"getProductList('')\" #prod_code=\"ngModel\" [(ngModel)]=\"filter_data.prod_code\">\r\n                  </mat-form-field>\r\n                </div>\r\n              </th>\r\n\r\n               <th class=\"w120\">\r\n                <div class=\"th-search-acmt\">\r\n                  <mat-form-field>\r\n                    <input type=\"text\" matInput placeholder=\"Search ...\" name=\"ply_expert_point\"\r\n                      (keyup.enter)=\"getProductList('')\" #ply_expert_point=\"ngModel\"\r\n                      [(ngModel)]=\"filter_data.ply_expert_point\">\r\n                  </mat-form-field>\r\n                </div>\r\n              </th>\r\n\r\n               <th class=\"w120\">\r\n                <div class=\"th-search-acmt\">\r\n                  <mat-form-field>\r\n                    <input type=\"text\" matInput placeholder=\"Search ...\" name=\"ambassador_point\"\r\n                      (keyup.enter)=\"getProductList('')\" #ambassador_point=\"ngModel\"\r\n                      [(ngModel)]=\"filter_data.ambassador_point\">\r\n                  </mat-form-field>\r\n                </div>\r\n              </th>\r\n\r\n\r\n              <!-- <th class=\"w120\">\r\n                <div class=\"th-search-acmt\">\r\n                  <mat-form-field>\r\n                    <input type=\"text\" matInput placeholder=\"Search ...\" name=\"point_category_name\"\r\n                      (keyup.enter)=\"getProductList('')\" #point_category_name=\"ngModel\"\r\n                      [(ngModel)]=\"filter_data.point_category_name\">\r\n                  </mat-form-field>\r\n                </div>\r\n              </th> -->\r\n              <th class=\"w100\">\r\n                <div class=\"th-search-acmt\">\r\n                  <mat-form-field>\r\n                    <input type=\"text\" matInput placeholder=\"Search ...\" name=\"thickness\"\r\n                      (keyup.enter)=\"getProductList('')\" #thickness=\"ngModel\" [(ngModel)]=\"filter_data.thickness\">\r\n                  </mat-form-field>\r\n                </div>\r\n              </th>\r\n              <th class=\"w60\">\r\n                <div class=\"th-search-acmt\">\r\n                  <mat-form-field>\r\n                    <input type=\"text\" matInput placeholder=\"Search ...\" name=\"size\" (keyup.enter)=\"getProductList('')\"\r\n                      #size=\"ngModel\" [(ngModel)]=\"filter_data.size\">\r\n                  </mat-form-field>\r\n                </div>\r\n              </th>\r\n              <th class=\"w60\"></th>\r\n              <th class=\"w60\"></th>\r\n              <th class=\"w60\"></th>\r\n              <th class=\"w60\"></th>\r\n              <th class=\"w100 text-center\" *ngIf=\"logined_user_data.edit_products_master=='1'\">\r\n                <div class=\"th-search-acmt\">\r\n                  <mat-form-field class=\"cs-input select-input\">\r\n                    <mat-select name=\"status\" #status=\"ngModel\" [(ngModel)]=\"filter_data.status\"\r\n                      (selectionChange)=\"getProductList('')\">\r\n                      <mat-option value=\"\">All</mat-option>\r\n                      <mat-option value=\"active\">Active</mat-option>\r\n                      <mat-option value=\"deactive\">Deactive </mat-option>\r\n                    </mat-select>\r\n                  </mat-form-field>\r\n                </div>\r\n              </th>\r\n              <th class=\"w100 text-center\" *ngIf=\"logined_user_data.edit_products_master=='1'\">\r\n                <div class=\"th-search-acmt\">\r\n                  <mat-form-field class=\"cs-input select-input\">\r\n                    <mat-select name=\"scheme_status\" #scheme_status=\"ngModel\" [(ngModel)]=\"filter_data.scheme_status\"\r\n                      (selectionChange)=\"getProductList('')\">\r\n                      <mat-option value=\"\">All</mat-option>\r\n                      <mat-option value=\"on\">On</mat-option>\r\n                      <mat-option value=\"off\">Off</mat-option>\r\n                    </mat-select>\r\n                  </mat-form-field>\r\n                </div>\r\n              </th>\r\n              <th class=\"w100 text-center\" *ngIf=\"logined_user_data.delete_products_master=='1'\">\r\n\r\n              </th>\r\n            </tr>\r\n          </table>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"table-container mb50\">\r\n        <div class=\"table-content\">\r\n          <table>\r\n            <ng-container *ngIf=\"!loader\">\r\n              <tr *ngFor=\"let row of productlist; let i = index \"\r\n                [ngClass]=\"{'Current': service.currentUserID == row.id}\">\r\n                <td class=\"w60\">{{i + 1 + sr_no}}</td>\r\n                <td class=\"w100\">{{row.date_created | date}}</td>\r\n                <td class=\"w130\">{{row.brand ? row.brand : '---'}}</td>\r\n                <td class=\"w110\">{{row.category && row.category!=''? row.category:'--'}}</td>\r\n                <td class=\"w250\"><a class=\"link-btn\" mat-button (click)=\"service.setData(filter_data)\"\r\n                    routerLink=\"product-detail/{{(row.id)}}\" routerLinkActive=\"active\"> {{row.product_name}}</a></td>\r\n                <td class=\"w130\">{{row.product_code && row.product_code!=''? row.product_code:'--'}}</td>\r\n                <td class=\"w120 one-line\" matTooltip={{row.ply_expert_point}}><strong>{{row.ply_expert_point &&\r\n                  row.ply_expert_point!=''? row.ply_expert_point:'--'}}</strong></td>\r\n                  <td class=\"w120 one-line\" matTooltip={{row.ambassador_point}}><strong>{{row.ambassador_point &&\r\n                  row.ambassador_point!=''? row.ambassador_point:'--'}}</strong></td>\r\n                <!-- <td class=\"w120 one-line\" matTooltip={{row.point_category_name}}>{{row.point_category_name &&\r\n                  row.point_category_name!=''? row.point_category_name:'--'}}</td> -->\r\n                <td class=\"w100\">{{row.thickness && row.thickness!=''? row.thickness:'--'}}</td>\r\n                <td class=\"w60\">{{row.size && row.size!=''? row.size:'--'}}</td>\r\n                <td class=\"w60\"><strong>&#x20B9; {{row.mrp && row.mrp!=''? row.mrp:'--'}}</strong></td>\r\n                <td class=\"w60\"><strong>&#x20B9; {{row.sqmtr && row.sqmtr!=''? row.sqmtr:'--'}}</strong></td>\r\n                <td class=\"w60\"><strong>&#x20B9; {{row.mrpSS && row.mrpSS!=''? row.mrpSS:'--'}}</strong></td>\r\n                <td class=\"w60\"><strong>&#x20B9; {{row.sqmtrSS && row.sqmtrSS!=''? row.sqmtrSS:'--'}}</strong></td>\r\n                <td class=\"w100 text-center\" *ngIf=\"logined_user_data.edit_products_master=='1'\">\r\n                  <div class=\"action-button\">\r\n                    <mat-slide-toggle color=\"accent\" [name]=\"'status'+i\" [(ngModel)]=\"row.newStatus\"\r\n                      (change)=\"updateStatus(i,row.id,$event)\">\r\n                    </mat-slide-toggle>\r\n                  </div>\r\n                </td>\r\n                <td class=\"w100 text-center\" *ngIf=\"logined_user_data.edit_products_master=='1'\">\r\n                  <div class=\"action-button\">\r\n                    <mat-slide-toggle color=\"warn\" [name]=\"'scheme_status'+i\" [(ngModel)]=\"row.newSchemeStatus\"\r\n                      (change)=\"updateSchemeStatus(i,row.id,$event)\">\r\n                      <span style=\"font-size:11px;\">Scheme</span>\r\n                    </mat-slide-toggle>\r\n                  </div>\r\n                </td>\r\n                <td class=\"w100 text-center\" *ngIf=\"logined_user_data.delete_products_master=='1'\">\r\n                  <div class=\"action-button\">\r\n                    <button mat-icon-button matTooltip=\"Delete\" (click)=\"deleteProduct(row.id)\">\r\n                      <i class=\"material-icons red-clr\">delete</i>\r\n                    </button>\r\n                  </div>\r\n                </td>\r\n\r\n              </tr>\r\n            </ng-container>\r\n            <ng-container *ngIf=\"loader\">\r\n              <tr class=\"sk-loading\" *ngFor=\"let row of [].constructor(10)\">\r\n                <td class=\"w60\">\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n                <td class=\"w100\">\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n                <td class=\"w130\">\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n                <td class=\"w110\">\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n                <td class=\"w250\">\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n                <td class=\"w130\">\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n                <td class=\"w120\">\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n                 <td class=\"w120\">\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n                <td class=\"w100\">\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n                <td class=\"w60\">\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n                <td class=\"w100 text-center\" *ngIf=\"logined_user_data.edit_products_master=='1'\">\r\n                  <div>&nbsp;</div>\r\n                </td> <!--Status-->\r\n                <td class=\"w100 text-center\" *ngIf=\"logined_user_data.edit_products_master=='1'\">\r\n                  <div>&nbsp;</div>\r\n                </td> <!--Scheme-->\r\n                <td class=\"w100 text-center\" *ngIf=\"logined_user_data.delete_products_master=='1'\">\r\n                  <div>&nbsp;</div>\r\n                </td> <!--Delete-->\r\n              </tr>\r\n            </ng-container>\r\n          </table>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <ng-container *ngIf=\"datanotofound==true && productlist.length == 0;\">\r\n      <app-not-result-found></app-not-result-found>\r\n    </ng-container>\r\n  </div>\r\n  <div>\r\n  </div>\r\n\r\n  <div class=\"fab-btns\"\r\n    *ngIf=\"logined_user_data.export_products_master=='1' || logined_user_data.add_products_master=='1' || logined_user_data.import_products_master=='1' \">\r\n    <button class=\"pulse excel\" mat-fab color=\"primary\" [ngClass]=\"{'pulse': fabBtnValue=='add'}\"\r\n      [matMenuTriggerFor]=\"menu\">\r\n      <i class=\"material-icons\">apps</i>\r\n      Action\r\n    </button>\r\n  </div>\r\n  <mat-menu #menu=\"matMenu\">\r\n    <button mat-menu-item (click)=\"downloadExcel('excel');\"\r\n      *ngIf=\"productlist.length > 0 &&  ( logined_user_data.export_products_master=='1')\">\r\n      <mat-icon>download</mat-icon>\r\n      <span>Download excel</span>\r\n    </button>\r\n    <button mat-menu-item (click)=\"upload_excel('insert');\" *ngIf=\"logined_user_data.import_products_master=='1'\">\r\n      <mat-icon>cloud_upload</mat-icon>\r\n      <span>Upload New Data</span>\r\n    </button>\r\n    <button mat-menu-item (click)=\"upload_excel('update');\"\r\n      *ngIf=\"productlist.length > 0 && logined_user_data.import_products_master=='1'\">\r\n      <mat-icon>update</mat-icon>\r\n      <span>Update Basic Data</span>\r\n    </button>\r\n\r\n    <button mat-menu-item (click)=\"lastBtnValue('add')\" routerLink=\"add-product\" routerLinkActive=\"router-link-active\"\r\n      *ngIf=\"logined_user_data.add_products_master=='1'\">\r\n      <mat-icon>add</mat-icon>\r\n      <span>Add New</span>\r\n    </button>\r\n  </mat-menu>\r\n"

/***/ }),

/***/ "./src/app/product/product-list/product-list.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/product/product-list/product-list.component.ts ***!
  \****************************************************************/
/*! exports provided: ProductListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductListComponent", function() { return ProductListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _router_animation_router_animation_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../router-animation/router-animation.component */ "./src/app/router-animation/router-animation.component.ts");
/* harmony import */ var src_services_DatabaseService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/_services/DatabaseService */ "./src/_services/DatabaseService.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_dialog_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/dialog.component */ "./src/app/dialog.component.ts");
/* harmony import */ var ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng6-toastr-notifications */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/ng6-toastr-notifications/fesm5/ng6-toastr-notifications.js");
/* harmony import */ var src_app_localstorage_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/localstorage.service */ "./src/app/localstorage.service.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! moment */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var src_app_product_upload_product_upload_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/product-upload/product-upload.component */ "./src/app/product-upload/product-upload.component.ts");
/* harmony import */ var src_app_user_designation_designation_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/user/designation/designation.component */ "./src/app/user/designation/designation.component.ts");












var ProductListComponent = /** @class */ (function () {
    function ProductListComponent(dialog, dialogs, alert, service, rout, toast, session) {
        this.dialog = dialog;
        this.dialogs = dialogs;
        this.alert = alert;
        this.service = service;
        this.rout = rout;
        this.toast = toast;
        this.session = session;
        this.segmentList = [];
        this.SubcategoryList = [];
        this.productlist = [];
        this.filter = false;
        this.data = [];
        this.start = 0;
        this.brand_list = [];
        this.product_brand = [];
        this.category_list = [];
        this.subCategory_list = [];
        this.total_page = 0;
        this.pagenumber = 0;
        this.loader = false;
        this.tab_active = 'all';
        this.filter_data = {};
        this.assign_login_data = {};
        this.logined_user_data = {};
        this.fabBtnValue = 'add';
        this.excelLoader = false;
        this.datanotofound = false;
        this.downurl = '';
        this.excel_data = [];
        this.productdetail = [];
        this.page_limit = service.pageLimit;
        this.downurl = service.downloadUrl;
        this.assign_login_data = this.session.getSession();
        this.logined_user_data = this.assign_login_data.value.data;
        this.today_date = new Date();
    }
    ProductListComponent.prototype.ngOnInit = function () {
        this.filter_data = this.service.getData();
        this.getSegment();
        this.getProductList('');
    };
    ProductListComponent.prototype.pervious = function () {
        this.start = this.start - this.page_limit;
        this.getProductList('');
    };
    ProductListComponent.prototype.nextPage = function () {
        this.start = this.start + this.page_limit;
        this.getProductList('');
    };
    ProductListComponent.prototype.getProductList = function (data) {
        var _this = this;
        if (this.pagenumber > this.total_page) {
            this.pagenumber = this.total_page;
            this.start = this.pageCount - this.page_limit;
        }
        if (this.start < 0) {
            this.start = 0;
        }
        var header = this.service.post_rqst({ 'filter': this.filter_data, 'start': this.start, 'pagelimit': this.page_limit }, "Master/productList");
        this.loader = true;
        header.subscribe(function (result) {
            if (result['statusCode'] == 200) {
                _this.productlist = result['product_list'];
                _this.pageCount = result['count'];
                _this.scheme_active_count = result['scheme_active_count'];
                _this.loader = false;
                if (_this.productlist.length == 0) {
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
                for (var i = 0; i < _this.productlist.length; i++) {
                    if (_this.productlist[i].status == '1') {
                        _this.productlist[i].newStatus = true;
                    }
                    else if (_this.productlist[i].status == '0') {
                        _this.productlist[i].newStatus = false;
                    }
                    _this.productlist[i].newSchemeStatus = _this.productlist[i].scheme_status == '1';
                }
            }
            else {
                _this.toast.errorToastr(result['statusMsg']);
                _this.datanotofound = true;
                _this.loader = false;
            }
        });
    };
    ProductListComponent.prototype.upload_excel = function (type) {
        var _this = this;
        var dialogRef = this.dialogs.open(src_app_product_upload_product_upload_component__WEBPACK_IMPORTED_MODULE_10__["ProductUploadComponent"], {
            width: '500px',
            panelClass: 'cs-modal',
            disableClose: true,
            data: {
                'from': 'beat',
                'modal_type': type
            }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result == true) {
                _this.getProductList('');
            }
        });
    };
    ProductListComponent.prototype.lastBtnValue = function (value) {
        this.fabBtnValue = value;
    };
    ProductListComponent.prototype.getSegment = function () {
        var _this = this;
        setTimeout(function () {
            _this.service.post_rqst({}, "Master/getProductCategoryList").subscribe((function (result) {
                if (result['category_list']['statusCode'] == 200) {
                    _this.segmentList = result['category_list']['segment_list'];
                }
            }));
        }, 2000);
    };
    ProductListComponent.prototype.getSubCatgory = function () {
        var _this = this;
        setTimeout(function () {
            _this.service.post_rqst({ 'id': _this.filter_data.segment }, "Master/subCategoryList").subscribe((function (result) {
                if (result['statusCode'] == 200) {
                    _this.SubcategoryList = result['result'];
                }
            }));
        }, 2000);
    };
    ProductListComponent.prototype.goToDetailHandler = function (pId) {
        window.open("/product-detail/" + pId);
    };
    ProductListComponent.prototype.deleteProduct = function (id) {
        var _this = this;
        this.dialog.delete('Product Data !').then(function (result) {
            if (result) {
                var value = { "id": id };
                _this.service.post_rqst(value, "Master/delete_product").subscribe(function (result) {
                    if (result) {
                        _this.getProductList('');
                    }
                });
            }
        });
    };
    ProductListComponent.prototype.refresh = function () {
        this.start = 0;
        this.filter_data = {};
        this.getProductList('');
    };
    ProductListComponent.prototype.detailProduct = function (id) {
        var _this = this;
        var value = { "id": id };
        this.service.post_rqst(value, "Master/product_detail").subscribe((function (result) {
            _this.productdetail = result['product_detail'];
            if (result) {
                _this.rout.navigate(['/product-detail/' + id]);
            }
        }));
    };
    ProductListComponent.prototype.Filter = function () {
        this.filter = true;
    };
    ProductListComponent.prototype.close = function () {
        this.filter = false;
    };
    ProductListComponent.prototype.clear = function () {
        this.data.brand = "";
        this.data.category = "";
        this.data.sub_category = "";
        this.refresh();
    };
    ProductListComponent.prototype.date_format = function () {
        this.filter_data.date_created = moment__WEBPACK_IMPORTED_MODULE_8__(this.filter_data.date_created).format('YYYY-MM-DD');
        this.getProductList('');
    };
    ProductListComponent.prototype.updateStatus = function (index, id, event) {
        var _this = this;
        if (event.checked == false) {
            this.alert.confirm("You Want To Change Status !").then(function (result) {
                if (result) {
                    if (event.checked == false) {
                        _this.productlist[index].status = "0";
                    }
                    else {
                        _this.productlist[index].status = "1";
                    }
                    var value = _this.productlist[index].status;
                    _this.service.post_rqst({ 'product_id': id, 'status': value, 'status_changed_by': _this.logined_user_data.id, 'status_changed_by_name': _this.logined_user_data.name }, "Master/productStatusChange")
                        .subscribe(function (resp) {
                        if (resp['statusCode'] == '200') {
                            _this.toast.successToastr("Status Changed Successfully");
                            _this.getProductList('');
                        }
                        else {
                            _this.toast.errorToastr(resp['statusMsg']);
                        }
                    });
                }
                else {
                    _this.getProductList('');
                    _this.toast.errorToastr("Your Data Is Safe...!");
                }
            });
        }
        else if (event.checked == true) {
            this.alert.confirm("You Want To Change Status !").then(function (result) {
                if (result) {
                    if (event.checked == false) {
                        _this.productlist[index].status = "0";
                    }
                    else {
                        _this.productlist[index].status = "1";
                    }
                    var value = _this.productlist[index].status;
                    _this.service.post_rqst({ 'product_id': id, 'status': value, 'status_changed_by': _this.logined_user_data.id, 'status_changed_by_name': _this.logined_user_data.name }, "Master/productStatusChange")
                        .subscribe(function (resp) {
                        if (resp['statusCode'] == '200') {
                            _this.toast.successToastr("Status Changed Successfully");
                            _this.getProductList('');
                        }
                        else {
                            _this.toast.errorToastr(resp['statusMsg']);
                        }
                    });
                }
            });
        }
    };
    ProductListComponent.prototype.updateSchemeStatus = function (index, id, event) {
        var _this = this;
        this.alert.confirm("You Want To Change Scheme Status !").then(function (result) {
            if (result) {
                _this.productlist[index].scheme_status = event.checked ? '1' : '0';
                _this.service.post_rqst({
                    'product_id': id,
                    'scheme_status': _this.productlist[index].scheme_status,
                    'scheme_status_changed_by': _this.logined_user_data.id,
                    'scheme_status_changed_by_name': _this.logined_user_data.name
                }, "Master/productSchemeStatusChange")
                    .subscribe(function (resp) {
                    if (resp['statusCode'] == '200') {
                        _this.toast.successToastr("Scheme Status Changed Successfully");
                        _this.getProductList('');
                    }
                    else {
                        _this.toast.errorToastr(resp['statusMsg']);
                    }
                });
            }
            else {
                _this.getProductList('');
                _this.toast.errorToastr("Your Data Is Safe...!");
            }
        });
    };
    ProductListComponent.prototype.downloadExcel = function () {
        var _this = this;
        this.service.post_rqst({ 'filter': this.filter_data }, "Excel/product_list_for_excel").subscribe((function (result) {
            if (result['msg'] == true) {
                window.open(_this.downurl + result['filename']);
                _this.getProductList('');
            }
            else {
            }
        }));
    };
    ProductListComponent.prototype.openDialog = function () {
        var _this = this;
        var dialogRef = this.dialogs.open(src_app_user_designation_designation_component__WEBPACK_IMPORTED_MODULE_11__["DesignationComponent"], {
            width: '500px',
            panelClass: 'cs-modal',
            disableClose: true,
            data: {
                'type': 'color_add'
            }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result == true) {
                _this.getProductList('');
            }
        });
    };
    ProductListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-product-list',
            template: __webpack_require__(/*! ./product-list.component.html */ "./src/app/product/product-list/product-list.component.html"),
            animations: [Object(_router_animation_router_animation_component__WEBPACK_IMPORTED_MODULE_2__["slideToTop"])()]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_dialog_component__WEBPACK_IMPORTED_MODULE_5__["DialogComponent"], _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatDialog"], src_app_dialog_component__WEBPACK_IMPORTED_MODULE_5__["DialogComponent"], src_services_DatabaseService__WEBPACK_IMPORTED_MODULE_3__["DatabaseService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_6__["ToastrManager"], src_app_localstorage_service__WEBPACK_IMPORTED_MODULE_7__["sessionStorage"]])
    ], ProductListComponent);
    return ProductListComponent;
}());



/***/ }),

/***/ "./src/app/product/product-module/product.module.ts":
/*!**********************************************************!*\
  !*** ./src/app/product/product-module/product.module.ts ***!
  \**********************************************************/
/*! exports provided: ProductModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductModule", function() { return ProductModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angular_ng_autocomplete__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angular-ng-autocomplete */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/angular-ng-autocomplete/fesm5/angular-ng-autocomplete.js");
/* harmony import */ var ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-multiselect-dropdown */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/ng-multiselect-dropdown/fesm5/ng-multiselect-dropdown.js");
/* harmony import */ var ngx_mat_select_search__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-mat-select-search */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/ngx-mat-select-search/fesm5/ngx-mat-select-search.js");
/* harmony import */ var src_app_app_utility_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/app-utility.module */ "./src/app/app-utility.module.ts");
/* harmony import */ var src_app_auth_component_guard__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/auth-component.guard */ "./src/app/auth-component.guard.ts");
/* harmony import */ var src_app_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/material */ "./src/app/material.ts");
/* harmony import */ var src_app_product_upload_product_upload_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/product-upload/product-upload.component */ "./src/app/product-upload/product-upload.component.ts");
/* harmony import */ var _add_product_add_product_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../add-product/add-product.component */ "./src/app/product/add-product/add-product.component.ts");
/* harmony import */ var _change_scheme_status_model_change_scheme_status_model_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../change-scheme-status-model/change-scheme-status-model.component */ "./src/app/product/change-scheme-status-model/change-scheme-status-model.component.ts");
/* harmony import */ var _product_detail_product_detail_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../product-detail/product-detail.component */ "./src/app/product/product-detail/product-detail.component.ts");
/* harmony import */ var _product_list_product_list_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../product-list/product-list.component */ "./src/app/product/product-list/product-list.component.ts");
/* harmony import */ var _product_qr_code_model_product_qr_code_model_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../product-qr-code-model/product-qr-code-model.component */ "./src/app/product/product-qr-code-model/product-qr-code-model.component.ts");


















var productroutes = [
    {
        path: "", children: [
            { path: "", component: _product_list_product_list_component__WEBPACK_IMPORTED_MODULE_16__["ProductListComponent"], canActivate: [src_app_auth_component_guard__WEBPACK_IMPORTED_MODULE_10__["AuthComponentGuard"]], data: { expectedRole: ['1'] } },
            { path: 'add-product', component: _add_product_add_product_component__WEBPACK_IMPORTED_MODULE_13__["AddProductComponent"], canActivate: [src_app_auth_component_guard__WEBPACK_IMPORTED_MODULE_10__["AuthComponentGuard"]], data: { expectedRole: ['1'] } },
            {
                path: "product-detail/:id", children: [
                    { path: "", component: _product_detail_product_detail_component__WEBPACK_IMPORTED_MODULE_15__["ProductDetailComponent"], canActivate: [src_app_auth_component_guard__WEBPACK_IMPORTED_MODULE_10__["AuthComponentGuard"]], data: { expectedRole: ['1'] } },
                    { path: 'add-product/:id', component: _add_product_add_product_component__WEBPACK_IMPORTED_MODULE_13__["AddProductComponent"], canActivate: [src_app_auth_component_guard__WEBPACK_IMPORTED_MODULE_10__["AuthComponentGuard"]], data: { expectedRole: ['1'] } },
                ]
            }
        ]
    },
];
var ProductModule = /** @class */ (function () {
    function ProductModule() {
    }
    ProductModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _product_list_product_list_component__WEBPACK_IMPORTED_MODULE_16__["ProductListComponent"],
                _add_product_add_product_component__WEBPACK_IMPORTED_MODULE_13__["AddProductComponent"],
                _product_detail_product_detail_component__WEBPACK_IMPORTED_MODULE_15__["ProductDetailComponent"],
                _product_qr_code_model_product_qr_code_model_component__WEBPACK_IMPORTED_MODULE_17__["ProductQrCodeModelComponent"],
                _change_scheme_status_model_change_scheme_status_model_component__WEBPACK_IMPORTED_MODULE_14__["ChangeSchemeStatusModelComponent"],
                src_app_product_upload_product_upload_component__WEBPACK_IMPORTED_MODULE_12__["ProductUploadComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild(productroutes),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_7__["NgMultiSelectDropDownModule"],
                src_app_material__WEBPACK_IMPORTED_MODULE_11__["MaterialModule"],
                angular_ng_autocomplete__WEBPACK_IMPORTED_MODULE_6__["AutocompleteLibModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialogModule"],
                ngx_mat_select_search__WEBPACK_IMPORTED_MODULE_8__["NgxMatSelectSearchModule"],
                src_app_app_utility_module__WEBPACK_IMPORTED_MODULE_9__["AppUtilityModule"]
            ],
            entryComponents: [
                src_app_product_upload_product_upload_component__WEBPACK_IMPORTED_MODULE_12__["ProductUploadComponent"],
                _product_qr_code_model_product_qr_code_model_component__WEBPACK_IMPORTED_MODULE_17__["ProductQrCodeModelComponent"],
                _change_scheme_status_model_change_scheme_status_model_component__WEBPACK_IMPORTED_MODULE_14__["ChangeSchemeStatusModelComponent"],
            ]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ProductModule);
    return ProductModule;
}());



/***/ }),

/***/ "./src/app/product/product-qr-code-model/product-qr-code-model.component.html":
/*!************************************************************************************!*\
  !*** ./src/app/product/product-qr-code-model/product-qr-code-model.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"edit-modal\">\r\n    <p class=\"heading\">CHANGE STATUS & ADD COUPON POINTS</p>\r\n  <form #update_basic=\"ngForm\" name=\"update_basic\" (ngSubmit)=\"submit_qrCode()\" validate>\r\n    <div mat-dialog-content style=\"padding: 0px 15px;\">\r\n      <div class=\"from-fields\">\r\n        <div class=\"col\">\r\n          <div class=\"valu-12\">\r\n            <ul>\r\n              <li>\r\n                <h4>Product Name</h4>\r\n                <p>{{product_name}}</p>\r\n              </li>\r\n              \r\n              <li>\r\n                <h4>Product Code</h4>\r\n                <p>{{product_code}}</p>\r\n              </li>\r\n            </ul>\r\n          </div>\r\n        </div>\r\n        <div class=\"row cs-form\">\r\n          <div class=\"col s12\">\r\n            <mat-form-field class=\"cs-input\" appearance=\"outline\">\r\n              <mat-label>Grnerate QR Code</mat-label>\r\n              <input matInput placeholder=\"Type Here ...\" name=\"qr_code_no\" #qr_code_no=\"ngModel\" [(ngModel)]=\"form.qr_code_no\" required>\r\n            </mat-form-field>\r\n            <div class=\"alert alert-danger\" *ngIf=\"!qr_code_no.valid && update_basic.submitted\">\r\n                Grnerate QR Code is required...\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div mat-dialog-actions>\r\n      <button mat-button color=\"warn\" [mat-dialog-close]=\"false\">Cancel</button>\r\n      <button mat-button color=\"accent\" type=\"submit\">Save</button>\r\n    </div>\r\n  </form>\r\n</div>"

/***/ }),

/***/ "./src/app/product/product-qr-code-model/product-qr-code-model.component.scss":
/*!************************************************************************************!*\
  !*** ./src/app/product/product-qr-code-model/product-qr-code-model.component.scss ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/product/product-qr-code-model/product-qr-code-model.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/product/product-qr-code-model/product-qr-code-model.component.ts ***!
  \**********************************************************************************/
/*! exports provided: ProductQrCodeModelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductQrCodeModelComponent", function() { return ProductQrCodeModelComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var src_services_DatabaseService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/_services/DatabaseService */ "./src/_services/DatabaseService.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng6-toastr-notifications */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/ng6-toastr-notifications/fesm5/ng6-toastr-notifications.js");






var ProductQrCodeModelComponent = /** @class */ (function () {
    function ProductQrCodeModelComponent(data, serve, rout, dialog2, toast) {
        this.data = data;
        this.serve = serve;
        this.rout = rout;
        this.dialog2 = dialog2;
        this.toast = toast;
        this.form = {};
        this.product_id = data.product_id;
        this.product_name = data.product_name;
        this.product_code = data.product_code;
    }
    ProductQrCodeModelComponent.prototype.ngOnInit = function () {
    };
    ProductQrCodeModelComponent.prototype.submit_qrCode = function () {
        var _this = this;
        this.form.product_id = this.product_id;
        this.serve.post_rqst(this.form, "Product/submit_qrCode").subscribe(function (result) {
            _this.dialog2.closeAll();
            _this.toast.successToastr("QR Code Generated Successfully");
        });
    };
    ProductQrCodeModelComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-product-qr-code-model',
            template: __webpack_require__(/*! ./product-qr-code-model.component.html */ "./src/app/product/product-qr-code-model/product-qr-code-model.component.html"),
            styles: [__webpack_require__(/*! ./product-qr-code-model.component.scss */ "./src/app/product/product-qr-code-model/product-qr-code-model.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object, src_services_DatabaseService__WEBPACK_IMPORTED_MODULE_3__["DatabaseService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"], ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_5__["ToastrManager"]])
    ], ProductQrCodeModelComponent);
    return ProductQrCodeModelComponent;
}());



/***/ })

}]);