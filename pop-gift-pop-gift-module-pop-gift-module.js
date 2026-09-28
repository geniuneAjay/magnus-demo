(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pop-gift-pop-gift-module-pop-gift-module"],{

/***/ "./src/app/pop-gift/pop-gift-add/pop-gift-add.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/pop-gift/pop-gift-add/pop-gift-add.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-container\">\r\n    <div class=\"tools-container\">\r\n        <a mat-icon-button matTooltip=\"Back\" (click)=\"back()\">\r\n            <i class=\"material-icons\">arrow_back</i>\r\n        </a>\r\n        <h2> {{id == 0 ? 'Add New' : 'Edit'}} Pop & Gift/BTL</h2>\r\n    </div>\r\n\r\n    <div class=\"container pt10 pl10 pr10 pb50\">\r\n\r\n        <form #f=\"ngForm\" (ngSubmit)=\"((data.qty_stock>0) &&(f.valid && add_gift()))\">\r\n            <div class=\"row\">\r\n                <div class=\"col s12\">\r\n                    <div class=\"card pb0\">\r\n                        <div class=\"card-head\">\r\n                            <h2>Basic Information</h2>\r\n                        </div>\r\n                        <div class=\"card-body cs-form\">\r\n                            <div class=\"row\">\r\n                                <div class=\"col s12 m3 l3\">\r\n                                    <mat-form-field appearance=\"outline\">\r\n                                        <mat-label>Gift Type</mat-label>\r\n                                        <mat-select name=\"gift_type\" #gift_type=\"ngModel\" [(ngModel)]=\"data.gift_type\"\r\n                                            required>\r\n                                            <mat-option value=\"Marketing Material\" color=\"accent\">POP\r\n                                                Material</mat-option>\r\n                                            <mat-option value=\"BTL\" color=\"accent\">BTL</mat-option>\r\n                                        </mat-select>\r\n                                    </mat-form-field>\r\n                                    <div class=\"alert alert-danger\" *ngIf=\"gift_type.touched || f.submitted\">\r\n                                        <p *ngIf=\"gift_type.errors?.required\">This field is required</p>\r\n                                    </div>\r\n                                </div>\r\n\r\n                                <div class=\"col s12 m3 l3\">\r\n                                    <mat-form-field appearance=\"outline\">\r\n                                        <mat-label>Gift Name</mat-label>\r\n                                        <input matInput placeholder=\"Type Here ...\" type=\"text\" name=\"item_name\"\r\n                                            #item_name=\"ngModel\" [(ngModel)]=\"data.item_name\" required>\r\n                                    </mat-form-field>\r\n\r\n                                    <div class=\"alert alert-danger\" *ngIf=\"item_name.touched || f.submitted\">\r\n                                        <p *ngIf=\"item_name.errors?.required\">This field is required</p>\r\n                                    </div>\r\n                                </div>\r\n\r\n                                <div class=\"col s12 m3 l3\" *ngIf=\"data.gift_type == 'Marketing Material'\">\r\n                                    <mat-form-field appearance=\"outline\">\r\n                                        <mat-label>Point</mat-label>\r\n                                        <input matInput type=\"text\" placeholder=\"Type Here ...\"\r\n                                            onkeypress=\"return event.charCode>=48 && event.charCode<=57\"\r\n                                            name=\"eligible_point\" #eligible_point=\"ngModel\"\r\n                                            [(ngModel)]=\"data.eligible_point\" (ngModelChange)=\"clearValue()\"\r\n                                            [disabled]=\"id != 0\" required>\r\n                                    </mat-form-field>\r\n                                    <div class=\"alert alert-danger\" *ngIf=\"eligible_point.touched || f.submitted\">\r\n                                        <p *ngIf=\"eligible_point.errors?.required\">This field is required</p>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"col s12 m3 l3\">\r\n                                    <mat-form-field appearance=\"outline\">\r\n                                        <mat-label>Qty</mat-label>\r\n                                        <input matInput type=\"text\" placeholder=\"Type Here ...\"\r\n                                            onkeypress=\"return event.charCode>=48 && event.charCode<=57\"\r\n                                            name=\"qty_stock\" #qty_stock=\"ngModel\" [(ngModel)]=\"data.qty_stock\"\r\n                                            (ngModelChange)=\"clearValue()\" [disabled]=\"id != 0\" required>\r\n                                    </mat-form-field>\r\n                                    <div class=\"alert alert-danger\" *ngIf=\"(data.qty_stock<=0)\">\r\n                                        Quantity should be greater than 0\r\n                                    </div>\r\n                                    <div class=\"alert alert-danger\" *ngIf=\"qty_stock.touched || f.submitted\">\r\n                                        <p *ngIf=\"qty_stock.errors?.required\">This field is required</p>\r\n                                    </div>\r\n                                </div>\r\n                                <!-- <div class=\"col s12 m2 l2\">\r\n                                    <mat-form-field appearance=\"outline\">\r\n                                        <mat-label>Rate</mat-label>\r\n                                        <input matInput type=\"text\" placeholder=\"Type Here ...\"\r\n                                            onkeypress=\"return event.charCode>=48 && event.charCode<=57\" name=\"rate\"\r\n                                            #rate=\"ngModel\" [(ngModel)]=\"data.rate\"\r\n                                            (ngModelChange)=\"totalAmount(data.rate)\" [disabled]=\"id != 0\" required>\r\n                                    </mat-form-field>\r\n                                    <div class=\"alert alert-danger\" *ngIf=\"rate.touched || f.submitted\">\r\n                                        <p *ngIf=\"rate.errors?.required\">This field is required</p>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"col s12 m2 l2\">\r\n                                    <mat-form-field appearance=\"outline\">\r\n                                        <mat-label>Total Amount</mat-label>\r\n                                        <input matInput type=\"text\" placeholder=\"Type Here ...\"\r\n                                            onkeypress=\"return event.charCode>=48 && event.charCode<=57\"\r\n                                            name=\"total_amount\" #total_amount=\"ngModel\" [(ngModel)]=\"data.total_amount\"\r\n                                            required readonly>\r\n                                    </mat-form-field>\r\n                                    <div class=\"alert alert-danger\" *ngIf=\"total_amount.touched || f.submitted\">\r\n                                        <p *ngIf=\"total_amount.errors?.required\">This field is required</p>\r\n                                    </div>\r\n                                </div> -->\r\n                            </div>\r\n                            <div class=\"row\">\r\n                                <div class=\"col s12 m12 l12\">\r\n                                    <mat-form-field class=\"cs-input\" appearance=\"outline\">\r\n                                        <mat-label>Description</mat-label>\r\n                                        <textarea matInput placeholder=\"Type Here ...\" class=\"h80\" name=\"description\"\r\n                                            #description=\"ngModel\" [(ngModel)]=\"data.description\"></textarea>\r\n                                    </mat-form-field>\r\n                                </div>\r\n                            </div>\r\n\r\n                            <div class=\"row\">\r\n                                <div class=\"col s12\">\r\n                                    <div class=\"cs-file\">\r\n                                        <p>Upload Image</p>\r\n                                        <ul class=\"product-images\">\r\n                                            <li class=\"multi-images\">\r\n                                                <label class=\"cs-file-img\" *ngFor=\"let val of urls; let i = index\">\r\n                                                    <img [src]=\"img_id ? url+val  : val\" alt=\"your image\">\r\n                                                    <span class=\"cancel-icon\">\r\n                                                        <a class=\"close\">\r\n                                                            <i class=\"material-icons dp48\"\r\n                                                                (click)=\"delete_img(i)\">clear</i>\r\n                                                        </a>\r\n                                                    </span>\r\n                                                </label>\r\n\r\n                                                <label class=\"cs-file-img default\" *ngIf=\"urls.length != 1\">\r\n                                                    <i class=\"material-icons\">cloud_upload</i>\r\n                                                    <input type=\"file\" name=\"image\" placeholder=\"Upload file\"\r\n                                                        accept=\".png,.jpg,.jpeg\" multiple style=\"display: none;\"\r\n                                                        (change)=\"insertImage($event)\">\r\n                                                </label>\r\n                                            </li>\r\n                                        </ul>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"row\">\r\n                <div class=\"col s12\">\r\n                    <div class=\"text-right\">\r\n                        <button [ngClass]=\"{'loading': savingFlag == true}\" mat-raised-button color=\"accent\"\r\n                            type=\"submit\" [disabled]=\"savingFlag == true\">\r\n                            {{savingFlag == true ? 'Saving' : (id == 0 ? 'Save' : 'Update')}}\r\n                        </button>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </form>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/pop-gift/pop-gift-add/pop-gift-add.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pop-gift/pop-gift-add/pop-gift-add.component.ts ***!
  \*****************************************************************/
/*! exports provided: PopGiftAddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopGiftAddComponent", function() { return PopGiftAddComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_app_dialog_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/dialog.component */ "./src/app/dialog.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_services_DatabaseService__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/_services/DatabaseService */ "./src/_services/DatabaseService.ts");
/* harmony import */ var src_app_localstorage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/localstorage.service */ "./src/app/localstorage.service.ts");
/* harmony import */ var ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng6-toastr-notifications */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/ng6-toastr-notifications/fesm5/ng6-toastr-notifications.js");







var PopGiftAddComponent = /** @class */ (function () {
    function PopGiftAddComponent(toast, route, serve, dialog, session, rout) {
        var _this = this;
        this.toast = toast;
        this.route = route;
        this.serve = serve;
        this.dialog = dialog;
        this.session = session;
        this.rout = rout;
        this.savingFlag = false;
        this.formData = new FormData();
        this.data = {};
        this.previous = {};
        this.urls = [];
        this.selectedFile = [];
        this.data.gift_type = 'Marketing Material';
        this.url = this.serve.uploadUrl + 'pop_gift/';
        this.route.params.subscribe(function (params) {
            _this.id = params.id;
        });
        this.logIN_user = JSON.parse(localStorage.getItem('st_user'));
        this.userName = this.logIN_user['data']['name'];
        this.userId = this.logIN_user['data']['id'];
        if (this.id != 0) {
            this.edit_detail();
        }
    }
    PopGiftAddComponent.prototype.ngOnInit = function () { };
    PopGiftAddComponent.prototype.edit_detail = function () {
        var _this = this;
        this.serve.post_rqst({ "id": this.id }, "/PopGift/popDetail").subscribe((function (result) {
            _this.previous = result['result']['data'];
            _this.data = result['result']['data'];
            _this.img_id = _this.data['id'];
            _this.data.total_amount = _this.data.qty_stock * _this.data.rate;
            _this.previous.total_amount = _this.previous.qty_stock * _this.previous.rate;
            _this.urls.push(_this.data.pop_image);
        }));
    };
    PopGiftAddComponent.prototype.insertImage = function (event) {
        var _this = this;
        var files = event.target.files;
        this.img_id = '';
        if (files) {
            for (var _i = 0, files_1 = files; _i < files_1.length; _i++) {
                var file = files_1[_i];
                var reader = new FileReader();
                reader.onload = function (e) {
                    _this.urls.push(e.target.result);
                };
                reader.readAsDataURL(file);
            }
        }
        for (var i = 0; i < event.target.files.length; i++) {
            this.selectedFile.push(event.target.files[i]);
        }
    };
    PopGiftAddComponent.prototype.delete_img = function (index) {
        this.urls.splice(index, 1);
        this.selectedFile = [];
    };
    PopGiftAddComponent.prototype.clearValue = function () {
        this.data.total_amount = '';
        this.data.rate = '';
    };
    PopGiftAddComponent.prototype.totalAmount = function (rate) {
        this.data.total_amount = this.data.qty_stock * rate;
    };
    PopGiftAddComponent.prototype.add_gift = function () {
        var _this = this;
        if (this.id == 0) {
            if (this.selectedFile.length > 0) {
                this.data.created_by_id = this.logIN_user.data.id;
                this.data.created_by_name = this.logIN_user.data.name;
                this.savingFlag = true;
                this.serve.post_rqst(this.data, "PopGift/submitPopGift").subscribe(function (result) {
                    if (result['statusCode'] == 200) {
                        _this.savingFlag = false;
                        _this.errorMsg = result['statusMsg'];
                        var id = result['id'];
                        for (var i = 0; i < _this.selectedFile.length; i++) {
                            _this.formData.append("image" + i, _this.selectedFile[i], _this.selectedFile[i].name);
                        }
                        _this.formData.append('id', id);
                        if (_this.selectedFile && _this.selectedFile.length > 0) {
                            _this.serve.FileData(_this.formData, "PopGift/insertImage").subscribe(function (resp) {
                                if (result['statusCode'] == 200) {
                                    _this.savingFlag = false;
                                    _this.toast.successToastr(resp['statusMsg']);
                                    _this.rout.navigate(['/pop-gift-list']);
                                }
                                else {
                                    _this.savingFlag = false;
                                    _this.toast.errorToastr(result['statusMsg']);
                                }
                            }, function (err) {
                                _this.savingFlag = false;
                                _this.toast.errorToastr(result['statusMsg']);
                            });
                        }
                        else {
                            _this.toast.successToastr("POP Gift", "Added");
                            _this.rout.navigate(['/pop-gift-list']);
                        }
                    }
                    else {
                        _this.savingFlag = false;
                        _this.toast.errorToastr(result['statusMsg']);
                    }
                }, function (err) {
                    _this.savingFlag = false;
                    _this.toast.errorToastr('Something went wrong');
                });
            }
            else {
                this.savingFlag = false;
                this.dialog.error("Add Image also");
            }
        }
        else {
            this.savingFlag = true;
            this.data.created_by_id = this.logIN_user.data.id;
            this.data.created_by_name = this.logIN_user.data.name;
            this.data.previous_total_amount = this.previous.total_amount;
            this.data.previous_qty_stock = this.previous.qty_stock;
            this.data.previous_rate = this.previous.rate;
            this.serve.post_rqst(this.data, "PopGift/updatePopGift").subscribe((function (result) {
                if (result['statusCode'] == 200) {
                    var id = result['id'];
                    _this.savingFlag = false;
                    for (var i = 0; i < _this.selectedFile.length; i++) {
                        _this.formData.append("image" + i, _this.selectedFile[i], _this.selectedFile[i].name);
                    }
                    _this.formData.append('id', id);
                    if (_this.selectedFile && _this.selectedFile.length > 0) {
                        _this.loader = true;
                        _this.savingFlag = true;
                        _this.serve.FileData(_this.formData, "PopGift/insertImage").subscribe(function (resp) {
                            if (resp['statusCode'] == 200) {
                                _this.savingFlag = false;
                                if (resp) {
                                    _this.toast.successToastr(resp['statusMsg']);
                                    _this.rout.navigate(['/pop-gift-list']);
                                }
                            }
                            else {
                                _this.savingFlag = false;
                                _this.toast.errorToastr(resp['statusMsg']);
                            }
                        });
                    }
                    else if (_this.img_id) {
                        _this.savingFlag = false;
                        _this.toast.successToastr(result['statusMsg']);
                        _this.rout.navigate(['/pop-gift-list']);
                    }
                    else {
                        _this.savingFlag = false;
                        _this.toast.errorToastr(result['statusMsg']);
                    }
                }
                else {
                    _this.savingFlag = false;
                    _this.toast.errorToastr(result['statusMsg']);
                }
            }));
        }
    };
    PopGiftAddComponent.prototype.back = function () {
        window.history.go(-1);
    };
    PopGiftAddComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-pop-gift-add',
            template: __webpack_require__(/*! ./pop-gift-add.component.html */ "./src/app/pop-gift/pop-gift-add/pop-gift-add.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_6__["ToastrManager"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            src_services_DatabaseService__WEBPACK_IMPORTED_MODULE_4__["DatabaseService"],
            src_app_dialog_component__WEBPACK_IMPORTED_MODULE_2__["DialogComponent"],
            src_app_localstorage_service__WEBPACK_IMPORTED_MODULE_5__["sessionStorage"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], PopGiftAddComponent);
    return PopGiftAddComponent;
}());



/***/ }),

/***/ "./src/app/pop-gift/pop-gift-detail/pop-gift-detail.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/pop-gift/pop-gift-detail/pop-gift-detail.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-container\">\r\n    \r\n    <div class=\"tools-container\">\r\n        <a mat-icon-button  matTooltip=\"Back\" routerLink=\"/pop-gift-list\">\r\n            <i class=\"material-icons\">arrow_back</i>\r\n        </a>\r\n        <h2>Pop Gift Detail</h2>\r\n    </div>\r\n    \r\n    \r\n    <div class=\"container pt10 pl10 pr10 pb100\" >\r\n        <div class=\"row\">\r\n            <div class=\"col s12 m12 l12\">\r\n                <!-- product data start -->\r\n                <div class=\"card\" *ngIf=\"!skLoading\">\r\n                    <div class=\"card-head\">\r\n                        <h2>Basic Details</h2>\r\n                    </div>\r\n                    <div class=\"card-body\">\r\n                        <div class=\"grid-box\">\r\n                            <div class=\"block-feilds\">\r\n                                <span>Name</span>\r\n                                <p>{{popData.item_name?popData.item_name:\"N/A\"}}</p>\r\n                            </div>\r\n                            \r\n                            <div class=\"block-feilds\">\r\n                                <span>Qty Stock</span>\r\n                                <p>{{popData.qty_stock?popData.qty_stock:\"N/A\"}}</p>\r\n                            </div>\r\n                            \r\n                            <div class=\"block-feilds\">\r\n                                <span>Description</span>\r\n                                <p>{{popData.description? popData.description:'N/A'}}</p>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <!-- product data end -->\r\n                \r\n                \r\n                <!-- Skeleton start -->\r\n                <div class=\"card\" *ngIf=\"skLoading\">\r\n                    <div class=\"sk-head\">\r\n                        <h2>&nbsp;</h2>\r\n                    </div>\r\n                    <div class=\"card-body\">\r\n                        <div class=\"grid-box\">\r\n                            <div class=\"sk-box\" *ngFor=\"let row of [].constructor(10)\">\r\n                                &nbsp;\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <!-- Skeleton end -->\r\n                \r\n            </div>\r\n        </div>\r\n        <div class=\"row\">\r\n            <div class=\"col s12 m6 l6\">\r\n                <div class=\"card\" *ngIf=\"!skLoading\">\r\n                    <div class=\"card-head\">\r\n                        <h2>Stock Incoming</h2>\r\n                    </div>\r\n                    <div class=\"card-body\">\r\n                        <div class=\"cs-table left-right-10\">\r\n                            <div class=\"border-top\">\r\n                                <div class=\"table-head border-bottom\">\r\n                                    <table class=\"sno-border\">\r\n                                        <tr>\r\n                                            <th>Name</th>\r\n                                            <th class=\"w100 text-center\">Qty</th>\r\n                                            <th class=\"w100\">Receive Date</th>\r\n                                        </tr>\r\n                                    </table>\r\n                                </div>\r\n                            </div>\r\n                            \r\n                            <div class=\"table-container pb0\">\r\n                                <div class=\"table-content table-scroll\" *ngIf=\"stockList.length > 0\">\r\n                                    <table class=\"sno-border\">\r\n                                        <tr *ngFor=\"let row of stockList\">\r\n                                            <td>{{row.item_name}}</td>\r\n                                            <td class=\"w100 text-center\">{{row.qty}}</td>\r\n                                            <td class=\"w100\">{{row.receiving_date| date : 'd MMM y'}}</td>\r\n                                        </tr>\r\n                                        <ng-container *ngFor=\"let row of [].constructor(10)\">\r\n                                            <tr class=\"sk-loading\" *ngIf=\"skLoading\"  >\r\n                                                <td><div>&nbsp;</div></td>\r\n                                                <td class=\"w100 text-center\"><div>&nbsp;</div></td>\r\n                                                <td class=\"w100\"><div>&nbsp;</div></td>\r\n                                            </tr>\r\n                                        </ng-container>\r\n                                    </table>\r\n                                </div>\r\n                                <ng-container *ngIf=\"stockList.length == 0\">\r\n                                    <app-not-result-found></app-not-result-found>\r\n                                </ng-container>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            \r\n        </div>\r\n        \r\n        \r\n    </div>\r\n    \r\n</div>\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/pop-gift/pop-gift-detail/pop-gift-detail.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/pop-gift/pop-gift-detail/pop-gift-detail.component.ts ***!
  \***********************************************************************/
/*! exports provided: PopGiftDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopGiftDetailComponent", function() { return PopGiftDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_services_DatabaseService__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/_services/DatabaseService */ "./src/_services/DatabaseService.ts");
/* harmony import */ var src_app_localstorage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/localstorage.service */ "./src/app/localstorage.service.ts");



// import { PearlService } from 'src/app/pearl.service';




var PopGiftDetailComponent = /** @class */ (function () {
    function PopGiftDetailComponent(dialog, session, serve, route, routes) {
        var _this = this;
        this.dialog = dialog;
        this.session = session;
        this.serve = serve;
        this.route = route;
        this.routes = routes;
        this.skelton = {};
        this.id = {};
        this.popData = {};
        this.stockList = [];
        this.data_not_found = false;
        this.incoming_data_not_found = false;
        this.skLoading = false;
        this.routes.params.subscribe(function (params) {
            _this.id = params.id;
            _this.serve.currentUserID = params.id;
            _this.logIN_user = JSON.parse(localStorage.getItem('user'));
        });
    }
    PopGiftDetailComponent.prototype.ngOnInit = function () {
        this.gift_detail();
    };
    PopGiftDetailComponent.prototype.gift_detail = function () {
        var _this = this;
        this.skLoading = true;
        this.serve.post_rqst({ "id": this.id }, "PopGift/popDetail").subscribe((function (result) {
            _this.popData = result['result']['data'];
            _this.stockList = result['result']['incoming'];
            _this.skLoading = false;
        }));
    };
    PopGiftDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-pop-gift-detail',
            template: __webpack_require__(/*! ./pop-gift-detail.component.html */ "./src/app/pop-gift/pop-gift-detail/pop-gift-detail.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"], src_app_localstorage_service__WEBPACK_IMPORTED_MODULE_5__["sessionStorage"], src_services_DatabaseService__WEBPACK_IMPORTED_MODULE_4__["DatabaseService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], PopGiftDetailComponent);
    return PopGiftDetailComponent;
}());



/***/ }),

/***/ "./src/app/pop-gift/pop-gift-issue-modal/pop-gift-issue-modal.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/pop-gift/pop-gift-issue-modal/pop-gift-issue-modal.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"edit-modal\" *ngIf=\"data.type=='issue_pop'\">\r\n\r\n  <div mat-dialog-content>\r\n    <p class=\"heading\">Pop & Gift / BTL Issue</p>\r\n    <div class=\"cs-form\">\r\n      <div class=\"row\">\r\n        <div class=\"col s12 m3 l3\">\r\n          <mat-form-field class=\"cs-input\" appearance=\"outline\">\r\n            <mat-label>Gift Type</mat-label>\r\n            <mat-select name=\"gift_type\" #gift_type=\"ngModel\" [(ngModel)]=\"PopData.gift_type\"\r\n              (ngModelChange)=\"get_data(); PopData.user_id = '';\" [disabled]=\"listarray.length > 0\">\r\n              <mat-option value=\"Marketing Material\" color=\"accent\">POP Material</mat-option>\r\n              <mat-option value=\"BTL\" color=\"accent\">BTL</mat-option>\r\n            </mat-select>\r\n          </mat-form-field>\r\n        </div>\r\n        <div class=\"col s12 m3 l3\" *ngIf=\"PopData.gift_type\">\r\n          <mat-form-field class=\"cs-input\" appearance=\"outline\">\r\n            <mat-label>User Type</mat-label>\r\n            <mat-select name=\"issue_type\" #issue_type=\"ngModel\" [(ngModel)]=\"PopData.issue_type\"\r\n              (ngModelChange)=\"get_user(''); PopData.user_id = '';\" [disabled]=\"listarray.length > 0\">\r\n              <mat-option value=\"Executive\">Executive</mat-option>\r\n              <mat-option value=\"Distributor\" *ngIf=\"PopData.gift_type == 'Marketing Material'\">Channel\r\n                Partner</mat-option>\r\n            </mat-select>\r\n          </mat-form-field>\r\n        </div>\r\n        <div class=\"col s12 m6 l6\" *ngIf=\"PopData.issue_type\">\r\n          <mat-form-field class=\"cs-input\" appearance=\"outline\">\r\n            <mat-label>{{PopData.issue_type == 'Executive'? 'Executive' : 'Channel Partner'}}</mat-label>\r\n            <mat-select name=\"user_id\" #user_id=\"ngModel\" [(ngModel)]=\"PopData.user_id\"\r\n              (ngModelChange)=\"remaining_stockItemInfo='true'; getPartyPoint(PopData.user_id)\"\r\n              [disabled]=\"listarray.length > 0\">\r\n\r\n              <mat-option>\r\n                <ngx-mat-select-search noEntriesFoundLabel=\"'no data found'\" (keyup)=\"get_user($event.target.value)\"\r\n                  placeholderLabel=\"Search..\"></ngx-mat-select-search>\r\n              </mat-option>\r\n\r\n\r\n              <mat-option *ngFor=\"let model of model_data \" value=\"{{model.id}}\">{{model.name}}</mat-option>\r\n\r\n            </mat-select>\r\n          </mat-form-field>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"row\">\r\n        <div class=\"col s12\">\r\n          <mat-form-field class=\"cs-input\" appearance=\"outline\">\r\n            <mat-label>Delivery Note </mat-label>\r\n            <textarea matInput placeholder=\"Type Here ...\" class=\"h70\" name=\"delivery_note\" #delivery_note=\"ngModel\"\r\n              [(ngModel)]=\"PopData.delivery_note\" required></textarea>\r\n          </mat-form-field>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"row\" *ngIf=\"remaining_stockItemInfo\">\r\n        <div class=\"col s12\">\r\n          <div class=\"details-info flat pb0\">\r\n            <div class=\"basic-details\">\r\n              <div class=\"cs-heading\">\r\n                <h2>Item Information</h2>\r\n              </div>\r\n\r\n              <div class=\"row\">\r\n                <div class=\"col s4\">\r\n                  <mat-form-field class=\"cs-input\" appearance=\"outline\">\r\n                    <mat-label>Items</mat-label>\r\n                    <mat-select name=\"item\" #item=\"ngModel\" [(ngModel)]=\"list.item_id\"\r\n                      (selectionChange)=\"get_Stock(list.item_id); get_points(list.item_id);\">\r\n                      <mat-option *ngFor=\"let use of user_data\" value=\"{{use.id}}\">{{use.item_name}}</mat-option>\r\n                    </mat-select>\r\n                  </mat-form-field>\r\n                </div>\r\n\r\n                <div class=\"col s2\">\r\n                  <mat-form-field class=\"cs-input\" appearance=\"outline\">\r\n                    <mat-label>QTY</mat-label>\r\n                    <input matInput type=\"text\" onkeypress=\" return event.charCode >= 48 && event.charCode <= 57\"\r\n                      placeholder=\"Type Here ...\" name=\"qty\" #qty_stock=\"ngModel\" [(ngModel)]=\"list.qty\"\r\n                      (ngModelChange)=\"getValue(list.qty)\">\r\n                  </mat-form-field>\r\n\r\n                </div>\r\n\r\n                <div class=\"col s4\">\r\n                  <div class=\"df\">\r\n                    <mat-form-field class=\"cs-input\" appearance=\"outline\">\r\n                      <mat-label>Stock QTY</mat-label>\r\n                      <input matInput type=\"number\" name=\"list.remaining_stock\" [(ngModel)]=\"list.remaining_stock\"\r\n                        #list.remaining_stock=\"ngModel\" placeholder=\"Type Here ...\" readonly>\r\n                    </mat-form-field>\r\n\r\n                    <a *ngIf=\"((list.item_id) && ((list.qty) && (list.qty>0 )&& (list.qty)<=(list.remaining_stock)))\"\r\n                      (click)=\"addtolist()\" class=\"add-item ml15\" mat-raised-button\r\n                      [disabled]=\"((list.qty==0) || ((list.qty)>(list.remaining_stock)))\">\r\n                      <i class=\"material-icons\">add</i>\r\n                    </a>\r\n                  </div>\r\n                  <div class=\"alert alert-danger\" *ngIf=\"((list.qty)>(list.remaining_stock))\">\r\n                    <p>QTY. should be less then Stock QTY.</p>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n\r\n      <div class=\"cs-table  left-right-10\" *ngIf=\"listarray.length > 0\">\r\n        <div class=\"sticky-head\">\r\n          <div class=\"table-head border-top\">\r\n            <table>\r\n              <tr>\r\n                <th class=\"w30 text-center\"></th>\r\n                <th>Items</th>\r\n                <th class=\"w50 text-center\">QTY</th>\r\n                <th class=\"w60 text-center\">Action</th>\r\n              </tr>\r\n            </table>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"table-container\">\r\n          <div class=\"table-content\">\r\n            <table>\r\n              <tr *ngFor=\"let list of listarray; let i=index;\">\r\n                <td class=\"w30 text-center\">{{i+1}}</td>\r\n                <td>{{list.item_name}}</td>\r\n                <td class=\"w50 text-center\">{{list.qty}}</td>\r\n\r\n                <td class=\"w60\">\r\n                  <button mat-button class=\"delete-mat\"><i class=\"material-icons red-clr\"\r\n                      (click)=\"delete(i)\">delete_sweep</i></button>\r\n                </td>\r\n              </tr>\r\n            </table>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n\r\n\r\n      <div class=\"cs-table mt24 left-right-10\" *ngIf=\"remaining_stockItemInfo && customerType != ''\">\r\n        <div class=\"sticky-head\">\r\n          <div class=\"table-head border-top\">\r\n            <table>\r\n              <tr>\r\n                <th>CP Marketing Points</th>\r\n                <th>Last Added Per Gift Point</th>\r\n                <th>Last Added Total Gift Point</th>\r\n              </tr>\r\n            </table>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"table-container\">\r\n          <div class=\"table-content\">\r\n            <table>\r\n              <tr>\r\n                <td>{{marketing_points ? marketing_points : '0'}}</td>\r\n                <td>{{eligible_point ? eligible_point : '0'}}</td>\r\n                <td>{{totalPoints ? totalPoints : '0'}}</td>\r\n              </tr>\r\n            </table>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div mat-dialog-actions>\r\n    <div class=\"text-right wp100\">\r\n      <button class=\"mr10\" mat-stroked-button color=\"warn\" [mat-dialog-close]=\"false\">Cancel</button>\r\n      <button mat-raised-button color=\"accent\" [ngClass]=\"{'loading': savingFlag == true}\" (click)=\"submit()\"\r\n        [disabled]=\"(!listarray.length ||!PopData.issue_type) || savingFlag == true\">\r\n        {{savingFlag == true ? 'Saving' : 'Save'}}\r\n      </button>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n<div class=\"edit-modal\" *ngIf=\"data.type=='Update_stock'\">\r\n\r\n  <div mat-dialog-content>\r\n    <p class=\"heading\">Add Stock</p>\r\n    <div class=\"cs-form\">\r\n\r\n      <div class=\"row\">\r\n        <div class=\"col s4\">\r\n          <mat-form-field class=\"cs-input\" appearance=\"outline\">\r\n            <mat-label>Item Name</mat-label>\r\n            <input matInput type=\"text\" placeholder=\"Type Here ...\" name=\"item_name\" #item_name=\"ngModel\"\r\n              [(ngModel)]=\"stockData.item_name\" readonly>\r\n          </mat-form-field>\r\n        </div>\r\n        <div class=\"col s4\">\r\n          <mat-form-field class=\"cs-input\" appearance=\"outline\">\r\n            <mat-label>QTY</mat-label>\r\n            <input matInput placeholder=\"Type Here ...\" name=\"qty\" #qty=\"ngModel\" [(ngModel)]=\"data1.qty\"\r\n              (ngModelChange)=\"totalAmount(data1.qty)\" onkeypress=\"return event.charCode>=48 && event.charCode<=57\">\r\n          </mat-form-field>\r\n        </div>\r\n        <div class=\"col s4\">\r\n          <mat-form-field class=\"cs-input\" appearance=\"outline\">\r\n            <mat-label>Total Amount</mat-label>\r\n            <input matInput placeholder=\"Type Here ...\" name=\"totalAmt\" #totalAmt=\"ngModel\" [(ngModel)]=\"data1.totalAmt\"\r\n              onkeypress=\"return event.charCode>=48 && event.charCode<=57\">\r\n          </mat-form-field>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div mat-dialog-actions>\r\n    <div class=\"text-right wp100\">\r\n      <button class=\"mr10\" mat-stroked-button color=\"warn\" [mat-dialog-close]=\"false\">Cancel</button>\r\n      <button mat-raised-button color=\"accent\" [ngClass]=\"{'loading': savingFlag == true}\"\r\n        [disabled]=\"savingFlag == true\" (click)=\"add_stock()\">\r\n        {{savingFlag == true ? 'Saving' : 'Save'}}\r\n      </button>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/pop-gift/pop-gift-issue-modal/pop-gift-issue-modal.component.scss":
/*!***********************************************************************************!*\
  !*** ./src/app/pop-gift/pop-gift-issue-modal/pop-gift-issue-modal.component.scss ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pop-gift/pop-gift-issue-modal/pop-gift-issue-modal.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/pop-gift/pop-gift-issue-modal/pop-gift-issue-modal.component.ts ***!
  \*********************************************************************************/
/*! exports provided: PopGiftIssueModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopGiftIssueModalComponent", function() { return PopGiftIssueModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var src_app_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/dialog.component */ "./src/app/dialog.component.ts");
/* harmony import */ var src_services_DatabaseService__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/_services/DatabaseService */ "./src/_services/DatabaseService.ts");
/* harmony import */ var src_app_localstorage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/localstorage.service */ "./src/app/localstorage.service.ts");
/* harmony import */ var ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng6-toastr-notifications */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/ng6-toastr-notifications/fesm5/ng6-toastr-notifications.js");







var now = new Date();
var PopGiftIssueModalComponent = /** @class */ (function () {
    function PopGiftIssueModalComponent(serve, toast, data, session, dialog, dialogRef, dialog1) {
        this.serve = serve;
        this.toast = toast;
        this.data = data;
        this.session = session;
        this.dialog = dialog;
        this.dialogRef = dialogRef;
        this.dialog1 = dialog1;
        this.savingFlag = false;
        this.user_data = [];
        this.PopData = {};
        this.model_data = [];
        this.list = {};
        this.listarray = [];
        this.data1 = {};
        this.result = [];
        this.change = [];
        this.remaining_stock = [];
        this.list1 = {};
        this.flag = 0;
        this.user_id = [];
        this.showItemInfo = false;
        this.eligible_point = 0;
        this.marketing_points = 0;
        this.totalPoints = 0;
        if (data.type == 'Update_stock') {
            this.stockData = data.id;
            this.data1.totalAmt = this.stockData.amount;
        }
        this.today_date = new Date().toISOString().slice(0, 10);
        this.logIN_user = JSON.parse(localStorage.getItem('st_user'));
        this.user_id = this.logIN_user['data']['id'];
        this.list.qty = 0;
    }
    PopGiftIssueModalComponent.prototype.ngOnInit = function () {
    };
    PopGiftIssueModalComponent.prototype.totalAmount = function (qty) {
        if ((qty != undefined) && (qty != '')) {
            this.data1.totalAmt = (parseInt(qty) + this.stockData.qty_stock) * this.stockData.rate;
        }
        else {
            this.data1.totalAmt = this.stockData.qty_stock * this.stockData.rate;
        }
    };
    PopGiftIssueModalComponent.prototype.checkValue = function () {
        if (this.list.qty > this.list.remaining_stock) {
            this.toast.errorToastr('Quantity should be less then Stock Quantity');
        }
    };
    PopGiftIssueModalComponent.prototype.get_data = function () {
        var _this = this;
        this.serve.post_rqst({ 'filter': { 'gift_type': this.PopData.gift_type } }, "PopGift/popGiftList").subscribe((function (result) {
            _this.user_data = result['result'];
            for (var i = 0; i < _this.user_data.length; i++) {
                _this.user_data[i].qty_stock = parseInt(_this.user_data[i].qty_stock);
            }
            _this.remaining_stock = _this.user_data['qty_stock'];
        }));
    };
    PopGiftIssueModalComponent.prototype.get_user = function (search) {
        var _this = this;
        this.serve.post_rqst({ 'user_id': this.user_id, 'search': search, 'issue_type': this.PopData.issue_type }, "PopGift/getAllUser").subscribe((function (result) {
            if (result['statusCode'] == 200) {
                _this.model_data = result['result'];
            }
            else {
                _this.toast.errorToastr(result['statusMsg']);
            }
        }));
        this.showItemInfo = false;
    };
    PopGiftIssueModalComponent.prototype.get_Stock = function (id) {
        var _this = this;
        this.serve.post_rqst({ 'id': id }, "PopGift/getPopStockQty").subscribe((function (result) {
            if (result['statusCode'] == 200) {
                _this.currentQty = result['result']['qty_stock'];
                _this.list.remaining_stock = _this.currentQty;
                _this.list.remaining_stock = parseInt(_this.list.remaining_stock);
            }
            else {
                _this.toast.errorToastr(result['statusMsg']);
            }
        }));
    };
    PopGiftIssueModalComponent.prototype.addtolist = function () {
        var _this = this;
        if (this.customerType != '' && this.totalPoints > this.marketing_points) {
            this.toast.errorToastr("Insufficient CP Marketing Points");
            return;
        }
        this.marketing_points = this.marketing_points - this.totalPoints;
        var index = this.user_data.findIndex(function (row) { return row.id == _this.list.item_id; });
        this.list.item_name = this.user_data[index].item_name;
        if (this.listarray.length > 0) {
            var existIndex = void 0;
            existIndex = this.listarray.findIndex(function (row) { return row.item_id == _this.list.item_id; });
            if (existIndex != -1) {
                this.listarray[existIndex]['qty'] += parseFloat(this.list.qty);
                this.listarray[existIndex]['gift_value'] += parseFloat(this.list.gift_value);
                this.blankValue();
            }
            else {
                this.listarray.push({ 'item_id': this.list.item_id, 'item_name': this.list.item_name, 'qty': parseFloat(this.list.qty), 'remaining_stock': parseFloat(this.list.remaining_stock), 'gift_value': parseFloat(this.list.gift_value) });
                this.blankValue();
            }
        }
        else {
            this.listarray.push({ 'item_id': this.list.item_id, 'item_name': this.list.item_name, 'qty': parseFloat(this.list.qty), 'remaining_stock': parseFloat(this.list.remaining_stock), 'gift_value': parseFloat(this.list.gift_value) });
            this.blankValue();
        }
    };
    PopGiftIssueModalComponent.prototype.blankValue = function () {
        this.list = {};
    };
    PopGiftIssueModalComponent.prototype.delete = function (index) {
        this.marketing_points += parseInt(this.listarray[index]['gift_value']);
        this.listarray.splice(index, 1);
    };
    PopGiftIssueModalComponent.prototype.submit = function () {
        var _this = this;
        if (!this.PopData.delivery_note) {
            this.toast.errorToastr("Delivery note required");
            return;
        }
        var local_data = {
            'issue_type': this.PopData.issue_type, 'assign_id': this.PopData.user_id, 'delivery_note': this.PopData.delivery_note,
        };
        this.savingFlag = true;
        this.serve.post_rqst({ 'item_list': this.listarray, 'user_data': local_data, 'created_by_name': this.logIN_user.data.name, 'created_by_id': this.logIN_user.data.id }, "PopGift/submitPopIssue").subscribe((function (result) {
            if (result['statusCode'] == 200) {
                _this.savingFlag = false;
                _this.toast.successToastr(result['statusMsg']);
                _this.dialog.closeAll();
            }
            else {
                _this.savingFlag = false;
                _this.toast.errorToastr(result['statusMsg']);
            }
        }));
    };
    PopGiftIssueModalComponent.prototype.qtychange = function () {
        var _this = this;
        var index = this.user_data.findIndex(function (row) { return row.id == _this.list.item_id; });
        if (index != -1) {
            if (parseInt(this.user_data[index]['qty_stock']) < parseInt(this.list.qty)) {
                this.list.qty = parseInt(this.user_data[index]['qty_stock']);
            }
            else if (parseInt(this.list.qty) < 0) {
                this.list.qty = 0;
            }
        }
    };
    PopGiftIssueModalComponent.prototype.add_stock = function () {
        var _this = this;
        if (this.data1.qty == undefined) {
            this.toast.errorToastr('QTY. is required');
            return;
        }
        this.data1.id = this.stockData.id;
        this.data1.created_by_id = this.logIN_user.data.id;
        this.data1.created_by_name = this.logIN_user.data.name;
        this.savingFlag = true;
        this.serve.post_rqst({ 'data': this.data1 }, "PopGift/submitStock").subscribe((function (result) {
            if (result['statusCode'] == 200) {
                _this.savingFlag = false;
                _this.toast.successToastr(result['statusMsg']);
                _this.dialog.closeAll();
            }
            else {
                _this.dialogRef.disableClose = false;
                _this.savingFlag = false;
                _this.toast.errorToastr(result['statusMsg']);
            }
        }));
    };
    PopGiftIssueModalComponent.prototype.get_points = function () {
        var _this = this;
        var index = this.user_data.findIndex(function (row) { return row.id == _this.list.item_id; });
        if (index != -1) {
            this.eligible_point = parseFloat(this.user_data[index]['eligible_point']);
        }
    };
    PopGiftIssueModalComponent.prototype.getPartyPoint = function () {
        var _this = this;
        var index = this.model_data.findIndex(function (row) { return row.id == _this.PopData.user_id; });
        if (index != -1) {
            this.marketing_points = parseFloat(this.model_data[index]['marketing_points']);
            this.customerType = this.model_data[index]['type'] ? this.model_data[index]['type'] : '';
        }
    };
    PopGiftIssueModalComponent.prototype.getValue = function (point) {
        this.totalPoints = parseFloat(point) * parseFloat(this.eligible_point);
        this.list.gift_value = this.totalPoints;
    };
    PopGiftIssueModalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-pop-gift-issue-modal',
            template: __webpack_require__(/*! ./pop-gift-issue-modal.component.html */ "./src/app/pop-gift/pop-gift-issue-modal/pop-gift-issue-modal.component.html"),
            styles: [__webpack_require__(/*! ./pop-gift-issue-modal.component.scss */ "./src/app/pop-gift/pop-gift-issue-modal/pop-gift-issue-modal.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_services_DatabaseService__WEBPACK_IMPORTED_MODULE_4__["DatabaseService"], ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_6__["ToastrManager"], Object, src_app_localstorage_service__WEBPACK_IMPORTED_MODULE_5__["sessionStorage"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"], src_app_dialog_component__WEBPACK_IMPORTED_MODULE_3__["DialogComponent"]])
    ], PopGiftIssueModalComponent);
    return PopGiftIssueModalComponent;
}());



/***/ }),

/***/ "./src/app/pop-gift/pop-gift-list/pop-gift-list.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/pop-gift/pop-gift-list/pop-gift-list.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-container\">\r\n\r\n    <div class=\"tools-container\">\r\n        <h2>Pop & Gift / BTL</h2>\r\n        <div class=\"left-auto df flex-gap-10 pagination\">\r\n            <button mat-icon-button matTooltip=\"Refresh\" (click)=\"refresh(transactionType)\">\r\n                <i class=\"material-icons\">refresh</i>\r\n            </button>\r\n            <div class=\"pagination\"\r\n                *ngIf=\"(transactionType== 'Pop Gift' && PopData.length > 0) || (transactionType != 'Pop Gift' && transaction_list.length > 0)\">\r\n                <div class=\"pagination-content\">\r\n                    Pages\r\n                    <span>{{pagenumber}}</span>\r\n                    of\r\n                    <span>{{total_page}}</span>\r\n                </div>\r\n                <div class=\"page-nav\">\r\n                    <button mat-icon-button matTooltip=\"Older\" (click)=\"pervious(transactionType)\"\r\n                        [disabled]=\"start == 0\">\r\n                        <i class=\"material-icons\">navigate_before</i>\r\n                    </button>\r\n                    <button mat-icon-button matTooltip=\"Newer\" (click)=\"nextPage(transactionType)\"\r\n                        [disabled]=\"pagenumber == total_page\">\r\n                        <i class=\"material-icons\">navigate_next</i>\r\n                    </button>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"mat-tabbar\">\r\n                <button mat-button [ngClass]=\"{'active' :transactionType== 'Pop Gift'}\"\r\n                    (click)=\"transactionType= 'Pop Gift'; gift_list(transactionType);\"><i\r\n                        class=\"material-icons\">card_giftcard</i>Pop &\r\n                    Gift / BTL Details</button>\r\n                <button mat-button [ngClass]=\"{'active' :transactionType== 'Company Transaction'}\"\r\n                    (click)=\"transactionType= 'Company Transaction'; transactionData(transactionType)\"><i\r\n                        class=\"material-icons\">swap_horiz</i>Company Transaction</button>\r\n                <button mat-button [ngClass]=\"{'active' :transactionType== 'Employee Transaction'}\"\r\n                    (click)=\"transactionType = 'Employee Transaction'; transactionData(transactionType)\"><i\r\n                        class=\"material-icons\">swap_horiz</i>Employee Transaction</button>\r\n                <!-- <button mat-button [ngClass]=\"{'active' :transactionType== 'Distributor Transaction'}\"\r\n                    (click)=\"transactionType = 'Distributor Transaction';  transactionData(transactionType)\"><i\r\n                        class=\"material-icons\">swap_horiz</i>Cp Transaction</button> -->\r\n            </div>\r\n\r\n        </div>\r\n    </div>\r\n\r\n\r\n\r\n\r\n    <div class=\"container pb100\">\r\n        <div class=\"cs-table\" *ngIf=\"transactionType == 'Pop Gift'\">\r\n            <div class=\"sticky-head\">\r\n                <div class=\"table-head\">\r\n                    <table class=\"sno-border\">\r\n                        <tr>\r\n                            <th class=\"w55\">Sr No.</th>\r\n                            <th class=\"w120\">Gift Type</th>\r\n                            <th>GIft Name</th>\r\n                            <th class=\"w70 text-center\">Image</th>\r\n                            <th class=\"w100 text-right\">Points</th>\r\n                            <th class=\"w80 text-right\">Stock QTY.</th>\r\n                            <!-- <th class=\"w100 text-right\">Rate</th>\r\n                            <th class=\"w100 text-right\">Total Amount</th> -->\r\n                            <th class=\"w80 text-right\">Employee Stock</th>\r\n                            <th class=\"w80 text-right\">CP Stock</th>\r\n                            <th class=\"w100 text-center\"\r\n                                *ngIf=\"assign_login_data2.edit_pop_gift=='1' || assign_login_data2.delete_pop_gift=='1'\">\r\n                                Action\r\n                            </th>\r\n                        </tr>\r\n                    </table>\r\n                </div>\r\n                <div class=\"table-head  border-top\">\r\n                    <table class=\"sno-border\">\r\n                        <tr>\r\n                            <th class=\"w55\">&nbsp;</th>\r\n                            <th class=\"w120\">\r\n                                <div class=\"th-search-acmt\">\r\n                                    <mat-form-field class=\"cs-input select-input\">\r\n                                        <mat-select (selectionChange)=\"gift_list(transactionType)\" name=\"gift_type\"\r\n                                            #gift_type=\"ngModel\" [(ngModel)]=\"filter.gift_type\">\r\n                                            <mat-option value=\"\">All</mat-option>\r\n                                            <mat-option value=\"Marketing Material\" color=\"accent\">POP\r\n                                                Material</mat-option>\r\n                                            <mat-option value=\"BTL\" color=\"accent\">BTL</mat-option>\r\n                                        </mat-select>\r\n                                    </mat-form-field>\r\n                                </div>\r\n                            </th>\r\n                            <th>\r\n                                <div class=\"th-search-acmt\">\r\n                                    <mat-form-field class=\"example-full-width cs-input select-input\">\r\n                                        <input matInput placeholder=\"Search...\"\r\n                                            (keyup.enter)=\"gift_list(transactionType)\" #created_by=\"ngModel\"\r\n                                            [(ngModel)]=\"filter.item_name\">\r\n                                    </mat-form-field>\r\n                                </div>\r\n                            </th>\r\n                            <th class=\"w70\">&nbsp;</th>\r\n                            <th class=\"w100\">&nbsp;</th>\r\n                            <th class=\"w80\">&nbsp;</th>\r\n                            <!-- <th class=\"w100\">&nbsp;</th>\r\n                            <th class=\"w100\">&nbsp;</th> -->\r\n                            <th class=\"w80\">&nbsp;</th>\r\n                            <th class=\"w80\">&nbsp;</th>\r\n                            <th class=\"w100\"\r\n                                *ngIf=\"assign_login_data2.edit_pop_gift=='1' || assign_login_data2.delete_pop_gift=='1'\">\r\n                                &nbsp;</th>\r\n                        </tr>\r\n                    </table>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"table-container\">\r\n                <div class=\"table-content\" *ngIf=\"PopData.length > 0\">\r\n                    <table class=\"sno-border\">\r\n                        <ng-container *ngIf=\"!loader\">\r\n                            <tr *ngFor=\" let row of PopData, let i = index;\"\r\n                                [ngClass]=\"{'Current': serve.currentUserID == row.id}\">\r\n                                <td class=\"w55\">{{i + 1 + sr_no}}</td>\r\n                                <td class=\"w120\">\r\n                                    {{row.gift_type ? (row.gift_type =='Marketing Material' ? 'POP Material':\r\n                                    row.gift_type) :'---'}}\r\n                                </td>\r\n                                <td><a class=\"link-btn\" mat-button (click)=\"serve.setData(filter)\"\r\n                                        routerLink=\"pop-gift-detail/{{(row.id)}}\"\r\n                                        routerLinkActive=\"active\">{{row.item_name | titlecase}}</a></td>\r\n                                <td class=\"w70 text-center\">\r\n                                    <a class=\"img-avtar\" (click)=\"goToImage(url+row.pop_image)\">\r\n                                        <img src=\"{{url+row.pop_image}}\">\r\n                                    </a>\r\n                                </td>\r\n                                <td class=\"w100 text-right\"><strong>{{row.eligible_point ? row.eligible_point\r\n                                        :'0'}}</strong></td>\r\n                                <td class=\"w80 text-right\"><strong>{{row.qty_stock ? row.qty_stock : '0'}}</strong></td>\r\n                                <!-- <td class=\"w100 text-right\"><strong>&#x20B9; {{row.rate ? row.rate : '0'}}</strong></td>\r\n                                <td class=\"w100 text-right\"><strong>&#x20B9; {{row.amount ? row.amount : '0'}}</strong>\r\n                                </td> -->\r\n                                <td class=\"w80 text-right\"><strong>{{row.executive_qty ? row.executive_qty :\r\n                                        '0'}}</strong></td>\r\n                                <td class=\"w80 text-right\"><strong>{{row.distributor_qty ? row.distributor_qty\r\n                                        :'0'}}</strong></td>\r\n                                <td class=\"w100 text-center\"\r\n                                    *ngIf=\"assign_login_data2.edit_pop_gift=='1' || assign_login_data2.delete_pop_gift=='1'\">\r\n                                    <div class=\"action-button\">\r\n                                        <button\r\n                                            *ngIf=\"assign_login_data2.edit_pop_gift=='1' && transactionType == 'Pop Gift'\"\r\n                                            mat-icon-button matTooltip=\"Add Stock\"\r\n                                            (click)=\"popModal('Update_stock',row,'')\">\r\n                                            <i class=\"material-icons add\">add_circle</i>\r\n                                        </button>\r\n\r\n                                        <button\r\n                                            *ngIf=\"assign_login_data2.edit_pop_gift=='1' && transactionType == 'Pop Gift'\"\r\n                                            mat-icon-button matTooltip=\"Edit\"\r\n                                            [routerLink]=\"[ 'pop-gift-add/', row.id ]\">\r\n                                            <i class=\"material-icons edit\">edit</i>\r\n                                        </button>\r\n                                        <button *ngIf=\"assign_login_data2.delete_pop_gift=='1' && transactionType == 'Pop Gift'\" mat-icon-button\r\n                                            matTooltip=\"Delete\" (click)=\"deleteGift(row.id)\">\r\n                                            <i class=\"material-icons del\">delete</i>\r\n                                        </button>\r\n                                      \r\n                                    </div>\r\n                                </td>\r\n                            </tr>\r\n                        </ng-container>\r\n\r\n                        <ng-container *ngIf=\"loader\">\r\n                            <tr class=\"sk-loading\" *ngFor=\"let row of [].constructor(10)\">\r\n                                <td class=\"w55\">\r\n                                    <div>&nbsp;</div>\r\n                                </td>\r\n                                <td class=\"w120\">\r\n                                    <div>&nbsp;</div>\r\n                                </td>\r\n                                <td>\r\n                                    <div>&nbsp;</div>\r\n                                </td>\r\n                                <td class=\"w70 text-center\">\r\n                                    <div>&nbsp;</div>\r\n                                </td>\r\n                                <td class=\"w100 text-right\">\r\n                                    <div>&nbsp;</div>\r\n                                </td>\r\n                                <td class=\"w80 text-right\">\r\n                                    <div>&nbsp;</div>\r\n                                </td>\r\n                                <!-- <td class=\"w100 text-right\">\r\n                                    <div>&nbsp;</div>\r\n                                </td>\r\n                                <td class=\"w100 text-right\">\r\n                                    <div>&nbsp;</div>\r\n                                </td> -->\r\n                                <td class=\"w80 text-right\">\r\n                                    <div>&nbsp;</div>\r\n                                </td>\r\n                                <td class=\"w80 text-right\">\r\n                                    <div>&nbsp;</div>\r\n                                </td>\r\n                                <td class=\"w100 text-center\"\r\n                                    *ngIf=\"assign_login_data2.edit_pop_gift=='1' || assign_login_data2.delete_pop_gift=='1'\">\r\n                                    <div>&nbsp;</div>\r\n                                </td>\r\n                            </tr>\r\n                        </ng-container>\r\n                    </table>\r\n                </div>\r\n            </div>\r\n\r\n            <ng-container *ngIf=\"PopData.length == 0\">\r\n                <app-not-result-found></app-not-result-found>\r\n            </ng-container>\r\n        </div>\r\n        <div class=\"cs-table\" *ngIf=\"transactionType != 'Pop Gift'\">\r\n            <div class=\"container container-scroll no-tab\">\r\n                <div class=\"cs-table horizontal-scroll\">\r\n            <div class=\"sticky-head\">\r\n                <div class=\"table-head\">\r\n                    <table class=\"sno-border\">\r\n                        <tr>\r\n                            <th class=\"w55\">Sr No.</th>\r\n                            <th class=\"w90 text-center\">Gift Type</th>\r\n                            <th class=\"w70 text-center\">Image</th>\r\n                            <th class=\"w100\">Item Name</th>\r\n                            <th class=\"w80\">Transfer Stock</th>\r\n                            <th class=\"w120\">Transfered By</th>\r\n                            <th class=\"w120\">Date of Execution</th>\r\n                            <th class=\"w100\" *ngIf=\"transactionType == 'Company Transaction'\">User Type</th>\r\n                            <th class=\"w200\">{{transactionType== 'Company Transaction' ? 'User' :'CP'}} Details\r\n                            </th>\r\n                            <th class=\"w200\">Remark</th>\r\n                            <th class=\"w100 text-center\" *ngIf=\"transactionType == 'Company Transaction'\">Action</th>\r\n                        </tr>\r\n                    </table>\r\n                </div>\r\n                <div class=\"table-head  border-top\">\r\n                    <table class=\"sno-border\">\r\n                        <tr>\r\n                            <th class=\"w55\">&nbsp;</th>\r\n                            <th class=\"w90 text-center\">\r\n                                <div class=\"th-search-acmt\">\r\n                                    <mat-form-field class=\"cs-input select-input\">\r\n                                        <mat-select (selectionChange)=\"transactionData(transactionType)\"\r\n                                            name=\"gift_type\" #gift_type=\"ngModel\" [(ngModel)]=\"filter.gift_type\">\r\n                                            <mat-option value=\"\">All</mat-option>\r\n                                            <mat-option value=\"Marketing Material\" color=\"accent\">POP\r\n                                                Material</mat-option>\r\n                                            <mat-option value=\"BTL\" color=\"accent\">BTL</mat-option>\r\n                                        </mat-select>\r\n                                    </mat-form-field>\r\n                                </div>\r\n                            </th>\r\n                            <th class=\"w70 text-center\">&nbsp;</th>\r\n                            <th class=\"w100\">\r\n                                <div class=\"th-search-acmt\">\r\n                                    <mat-form-field class=\"example-full-width cs-input select-input\">\r\n                                        <input matInput placeholder=\"Search...\"\r\n                                            (keyup.enter)=\"transactionData(transactionType)\" #pop_item_name=\"ngModel\"\r\n                                            [(ngModel)]=\"filter.pop_item_name\">\r\n                                    </mat-form-field>\r\n                                </div>\r\n                            </th>\r\n                            <th class=\"w80\">&nbsp;</th>\r\n                            <th class=\"w120\">&nbsp;</th>\r\n                            <th class=\"w120\">\r\n                                <div class=\"th-search-acmt\">\r\n                                    <mat-form-field class=\"cs-input date-column infix-bodr\">\r\n                                        <input matInput [matDatepicker]=\"picker\" placeholder=\"Date\" name=\"date_created\"\r\n                                            #date_created=\"ngModel\" [(ngModel)]=\"filter.date_created\"\r\n                                            (ngModelChange)=\"date_format()\" readonly>\r\n                                        <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\r\n                                        <mat-datepicker #picker></mat-datepicker>\r\n                                    </mat-form-field>\r\n                                </div>\r\n                            </th>\r\n                            <th class=\"w100\" *ngIf=\"transactionType == 'Company Transaction'\">\r\n\r\n                                <div class=\"th-search-acmt\">\r\n                                    <mat-form-field class=\"cs-input select-input\">\r\n                                        <mat-select name=\"transfer_to_type\" #transfer_to_type=\"ngModel\"\r\n                                            [(ngModel)]=\"filter.transfer_to_type\"\r\n                                            (selectionChange)=\"transactionData(transactionType)\">\r\n                                            <mat-option value=\"\">All</mat-option>\r\n                                            <mat-option value=\"Sales User\">Sales User</mat-option>\r\n                                            <mat-option value=\"Distributor\">Channel Partner </mat-option>\r\n                                        </mat-select>\r\n                                    </mat-form-field>\r\n                                </div>\r\n                            </th>\r\n                            <th class=\"w200\">\r\n                                <div class=\"th-search-acmt\">\r\n                                    <mat-form-field class=\"example-full-width cs-input select-input\">\r\n                                        <input matInput placeholder=\"Search...\"\r\n                                            (keyup.enter)=\"transactionData(transactionType)\" #transfer_to_name=\"ngModel\"\r\n                                            [(ngModel)]=\"filter.transfer_to_name\">\r\n                                    </mat-form-field>\r\n                                </div>\r\n                            </th>\r\n                            <th class=\"w200\">&nbsp;</th>\r\n                            <th class=\"w100 text-center\" *ngIf=\"transactionType == 'Company Transaction'\">&nbsp;</th>\r\n                        </tr>\r\n                    </table>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"table-container\" *ngIf=\"datanotfound==false\">\r\n                <div class=\"table-content\" *ngIf=\"PopData.length > 0\">\r\n                    <table class=\"sno-border\">\r\n                        <ng-container *ngIf=\"!loader\">\r\n                            <tr *ngFor=\" let pop of transaction_list, let i = index;\"\r\n                                [ngClass]=\"{'Current': serve.currentUserID == pop.id}\">\r\n                                <td class=\"w55\">{{i + 1 + sr_no}}</td>\r\n                                <td class=\"w90\">\r\n                                    {{pop.gift_type ? (pop.gift_type =='Marketing Material' ? 'POP Material':\r\n                                    pop.gift_type) :'---'}}</td>\r\n                                <td class=\"w70 text-center\">\r\n                                    <a class=\"img-avtar\" (click)=\"goToImage(url+pop.pop_image)\">\r\n                                        <img src=\"{{url+pop.pop_image}}\">\r\n                                    </a>\r\n                                </td>\r\n                                <td class=\"w100\">{{pop.pop_item_name | titlecase}}</td>\r\n                                <td class=\"w80 text-center\"><strong>{{pop.stock_qty}}</strong></td>\r\n                                <td class=\"w120\"><strong>{{pop.created_by_name ? pop.created_by_name : '---'}}</strong>\r\n                                </td>\r\n\r\n                                <!-- <td class=\"w80 text-center\"><strong>{{pop.remaining_stock}}</strong></td> -->\r\n                                <td class=\"w120\">{{pop.date_created ? (pop.date_created | date : 'dd MMM yyy') : ''}}\r\n                                </td>\r\n                                <td class=\"w100\" *ngIf=\"transactionType == 'Company Transaction'\">\r\n                                    {{pop.transfer_to_type == 'Distributor' ? 'Channel Partner' : pop.transfer_to_type}}\r\n                                </td>\r\n                                <td class=\"w200\">{{pop.transfer_to_name | titlecase}} -\r\n                                    <strong>({{pop.transfer_to_uniq_id}})</strong>\r\n                                </td>\r\n                                <td class=\"w200\">{{pop.remarks}}</td>\r\n                                <td class=\"w100 text-center\" *ngIf=\"transactionType == 'Company Transaction'\">\r\n                                    <div class=\"action-button\">\r\n                                        <button mat-icon-button matTooltip=\"Delete\" (click)=\"deleteTransaction(pop.id)\">\r\n                                            <i class=\"material-icons del\">delete</i>\r\n                                        </button>\r\n                                    </div>\r\n                                </td>\r\n                            </tr>\r\n                        </ng-container>\r\n\r\n\r\n\r\n                        <ng-container *ngIf=\"loader\">\r\n                            <tr class=\"sk-loading\" *ngFor=\"let row of [].constructor(10)\">\r\n                                <td class=\"w55\">\r\n                                    <div>&nbsp;</div>\r\n                                </td>\r\n                                <td class=\"w90 text-center\">\r\n                                    <div>&nbsp;</div>\r\n                                </td>\r\n                                <td class=\"w70 text-center\">\r\n                                    <div>&nbsp;</div>\r\n                                </td>\r\n                                <td>\r\n                                    <div>&nbsp;</div>\r\n                                </td>\r\n                                <td class=\"w80\">\r\n                                    <div>&nbsp;</div>\r\n                                </td>\r\n                                <td class=\"w120\">\r\n                                    <div>&nbsp;</div>\r\n                                </td>\r\n                                <td class=\"w120\">\r\n                                    <div>&nbsp;</div>\r\n                                </td>\r\n                                <td class=\"w100\" *ngIf=\"transactionType == 'Company Transaction'\">\r\n                                    <div>&nbsp;</div>\r\n                                </td>\r\n                                <td class=\"w200\">\r\n                                    <div>&nbsp;</div>\r\n                                </td>\r\n                                <td class=\"w200\">\r\n                                    <div>&nbsp;</div>\r\n                                </td>\r\n                                <td class=\"w100 text-center\" *ngIf=\"transactionType == 'Company Transaction'\">\r\n                                    <div>&nbsp;</div>\r\n                                </td>\r\n                            </tr>\r\n                        </ng-container>\r\n                    </table>\r\n                </div>\r\n            </div>\r\n            </div>\r\n            </div>\r\n\r\n            <ng-container *ngIf=\"transaction_list.length == 0 && datanotfound == true \">\r\n                <app-not-result-found></app-not-result-found>\r\n            </ng-container>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n\r\n\r\n<div class=\"fab-btns\" *ngIf=\"view_add\">\r\n    <button class=\"pulse excel\" mat-fab color=\"primary\" [ngClass]=\"{'pulse': fabBtnValue=='add'}\"\r\n        [matMenuTriggerFor]=\"menu\">\r\n        <i class=\"material-icons\">apps</i>\r\n        Action\r\n    </button>\r\n    <mat-menu #menu=\"matMenu\">\r\n        <button mat-menu-item *ngIf=\"assign_login_data2.add_pop_gift=='1'\" color=\"primary\" (click)=\"lastBtnValue('add')\"\r\n            routerLink=\"pop-gift-add/0\">\r\n            <mat-icon>add</mat-icon>\r\n            <span>Add New</span>\r\n        </button>\r\n        <button mat-menu-item *ngIf=\"assign_login_data2.edit_pop_gift=='1'\"\r\n            (click)=\"lastBtnValue('gift'); popModal('issue_pop','','user_id')\">\r\n            <mat-icon>card_giftcard</mat-icon>\r\n            <span>Pop Issue</span>\r\n        </button>\r\n\r\n        <button mat-menu-item *ngIf=\"assign_login_data2.export_pop_gift=='1'\"\r\n            (click)=\"lastBtnValue('excel');  transactionType== 'Pop Gift' ?  downloadExcel() : downloadExcel1()\">\r\n            <mat-icon>download</mat-icon>\r\n            <span>Download in excel</span>\r\n        </button>\r\n\r\n        <button mat-menu-item *ngIf=\"assign_login_data2.export_pop_gift=='1'\"\r\n            (click)=\"lastBtnValue('excel'); downloadReport()\">\r\n            <mat-icon>download</mat-icon>\r\n            <span>Download Report</span>\r\n        </button>\r\n    </mat-menu>\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/pop-gift/pop-gift-list/pop-gift-list.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/pop-gift/pop-gift-list/pop-gift-list.component.ts ***!
  \*******************************************************************/
/*! exports provided: PopGiftListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopGiftListComponent", function() { return PopGiftListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_dialog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/dialog.component */ "./src/app/dialog.component.ts");
/* harmony import */ var src_app_image_module_image_module_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/image-module/image-module.component */ "./src/app/image-module/image-module.component.ts");
/* harmony import */ var src_app_localstorage_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/localstorage.service */ "./src/app/localstorage.service.ts");
/* harmony import */ var src_services_DatabaseService__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/_services/DatabaseService */ "./src/_services/DatabaseService.ts");
/* harmony import */ var _pop_gift_issue_modal_pop_gift_issue_modal_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../pop-gift-issue-modal/pop-gift-issue-modal.component */ "./src/app/pop-gift/pop-gift-issue-modal/pop-gift-issue-modal.component.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! moment */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng6-toastr-notifications */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/ng6-toastr-notifications/fesm5/ng6-toastr-notifications.js");
/* harmony import */ var src_app_bottom_sheet_bottom_sheet_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/bottom-sheet/bottom-sheet.component */ "./src/app/bottom-sheet/bottom-sheet.component.ts");












var PopGiftListComponent = /** @class */ (function () {
    function PopGiftListComponent(toast, bottomSheet, serve, dialog, dialog1, route, session) {
        this.toast = toast;
        this.bottomSheet = bottomSheet;
        this.serve = serve;
        this.dialog = dialog;
        this.dialog1 = dialog1;
        this.route = route;
        this.session = session;
        this.transactionType = 'Pop Gift';
        this.fabBtnValue = 'add';
        this.skelton = {};
        this.data = {};
        this.PopData = [];
        this.result = [];
        this.datanotfound = false;
        this.loader = true;
        this.filter = {};
        this.assign_login_data = [];
        this.assign_login_data2 = [];
        this.downurl = '';
        this.view_edit = true;
        this.view_add = true;
        this.view_delete = true;
        this.excel_data = [];
        this.exp_data = [];
        this.pagenumber = 1;
        this.start = 0;
        this.transaction_list = [];
        this.skelton = new Array(10);
        this.page_limit = this.serve.pageLimit;
        this.assign_login_data = this.session.getSession();
        this.assign_login_data = this.assign_login_data.value;
        this.assign_login_data2 = this.assign_login_data.data;
        this.url = this.serve.uploadUrl + 'pop_gift/';
        this.downurl = serve.downloadUrl;
    }
    PopGiftListComponent.prototype.ngOnInit = function () {
        this.filter = this.serve.getData();
        if (this.filter.transaction_type) {
            this.transactionType = this.filter.transaction_type;
        }
        this.gift_list(this.transactionType);
    };
    PopGiftListComponent.prototype.lastBtnValue = function (value) {
        this.fabBtnValue = value;
    };
    PopGiftListComponent.prototype.refresh = function (transactionType) {
        if (this.start < 0) {
            this.start = 0;
        }
        this.transactionData(transactionType);
        this.filter = {};
        this.serve.setData(this.filter);
        this.serve.currentUserID = '';
        this.gift_list(transactionType);
    };
    PopGiftListComponent.prototype.date_format = function () {
        this.filter.date_created = moment__WEBPACK_IMPORTED_MODULE_9__(this.filter.date_created).format('YYYY-MM-DD');
        this.transactionData(this.transactionType);
    };
    PopGiftListComponent.prototype.pervious = function (type) {
        this.start = this.start - this.page_limit;
        if (type == 'Pop Gift') {
            this.gift_list(this.transactionType);
        }
        else {
            this.transactionData(this.transactionType);
        }
    };
    PopGiftListComponent.prototype.nextPage = function (type) {
        this.start = this.start + this.page_limit;
        if (type == 'Pop Gift') {
            this.gift_list(this.transactionType);
        }
        else {
            this.transactionData(this.transactionType);
        }
    };
    PopGiftListComponent.prototype.gift_list = function (type) {
        var _this = this;
        if (this.pagenumber > this.total_page) {
            this.pagenumber = this.total_page;
            this.start = this.pageCount - this.page_limit;
        }
        if (this.start < 0) {
            this.start = 0;
        }
        this.loader = true;
        this.filter.transaction_type = type;
        this.serve.post_rqst({ 'user_id': this.assign_login_data2.id, 'transaction_type': type, 'filter': this.filter, 'pagelimit': this.page_limit, 'start': this.start }, "PopGift/popGiftList").subscribe(function (result) {
            if (result['statusCode'] == 200) {
                _this.PopData = result['result'];
                _this.pageCount = result['count'];
                if (_this.PopData.length == 0) {
                    _this.datanotfound = true;
                }
                else {
                    _this.datanotfound = false;
                }
                _this.loader = false;
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
                _this.toast.errorToastr(result['statusMsg']);
            }
        }, function (err) {
            _this.loader = false;
            _this.toast.errorToastr('Something went wrong');
        });
    };
    PopGiftListComponent.prototype.transactionData = function (type) {
        var _this = this;
        this.loader = true;
        this.serve.post_rqst({ 'filter': this.filter, 'transaction_type': type }, "PopGift/popGiftTransactionLogList").subscribe(function (result) {
            if (result['statusCode'] == 200) {
                _this.transaction_list = result['result'];
                setTimeout(function () {
                    _this.loader = false;
                }, 500);
                if (_this.transaction_list.length == 0) {
                    _this.datanotfound = true;
                }
                else {
                    _this.datanotfound = false;
                    _this.loader = false;
                }
                _this.loader = false;
            }
            else {
                _this.toast.errorToastr(result['statusMsg']);
            }
        }, function (err) {
            _this.loader = false;
            _this.toast.errorToastr('Something went wrong');
        });
    };
    PopGiftListComponent.prototype.popModal = function (type, id, user_id) {
        var _this = this;
        var dialogRef = this.dialog.open(_pop_gift_issue_modal_pop_gift_issue_modal_component__WEBPACK_IMPORTED_MODULE_8__["PopGiftIssueModalComponent"], {
            width: '768px',
            panelClass: 'cs-modal',
            disableClose: true,
            data: {
                type: type, id: id, user_id: user_id,
            }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result != false) {
                _this.gift_list(_this.transactionType);
            }
        });
    };
    PopGiftListComponent.prototype.deleteGift = function (id) {
        var _this = this;
        this.dialog1.delete('POP Gift Data!').then(function (result) {
            if (result) {
                _this.loader = true;
                _this.serve.post_rqst({ "id": id }, "PopGift/deletePopGift").subscribe(function (result) {
                    if (result['statusCode'] == 200) {
                        _this.loader = false;
                        _this.toast.successToastr(result['statusMsg']);
                        _this.gift_list(_this.transactionType);
                    }
                    else {
                        _this.loader = false;
                        _this.toast.errorToastr(result['statusMsg']);
                    }
                }, function (err) {
                    _this.loader = false;
                    _this.toast.errorToastr('Something went wrong');
                });
            }
        });
    };
    PopGiftListComponent.prototype.deleteTransaction = function (id) {
        var _this = this;
        this.dialog1.delete('POP Gift Data!').then(function (result) {
            if (result) {
                _this.loader = true;
                _this.serve.post_rqst({ "id": id, "transactionType": _this.transactionType }, "PopGift/deleteissuedPopGift").subscribe(function (result) {
                    if (result['statusCode'] == 200) {
                        _this.loader = false;
                        _this.toast.successToastr(result['statusMsg']);
                        _this.transactionData(_this.transactionType);
                    }
                    else {
                        _this.loader = false;
                        _this.toast.errorToastr(result['statusMsg']);
                    }
                }, function (err) {
                    _this.loader = false;
                    _this.toast.errorToastr('Something went wrong');
                });
            }
        });
    };
    PopGiftListComponent.prototype.edit = function (id) {
        this.route.navigate(["/pop-gift-add/" + id]);
    };
    PopGiftListComponent.prototype.goToImage = function (image) {
        var dialogRef = this.dialog.open(src_app_image_module_image_module_component__WEBPACK_IMPORTED_MODULE_5__["ImageModuleComponent"], {
            panelClass: 'Image-modal',
            data: {
                'image': image,
                'type': 'base64'
            }
        });
        dialogRef.afterClosed().subscribe(function (result) {
        });
    };
    PopGiftListComponent.prototype.downloadExcel = function () {
        var _this = this;
        this.serve.post_rqst({ 'filter': this.transactionType }, "PopGift/popGiftList").subscribe((function (result) {
            _this.PopData = result['result'];
            for (var i = 0; i < _this.PopData.length; i++) {
                _this.excel_data.push({
                    'Sr No.': i + 1,
                    'Date': _this.PopData[i].date_created,
                    'Item Name': _this.PopData[i].item_name,
                    'Stock QTY.': _this.PopData[i].qty_stock,
                    'Rate': _this.PopData[i].rate,
                    'Total Amount': _this.PopData[i].amount,
                    'Employee Stock': _this.PopData[i].executive_qty,
                    'Distributor Stock': _this.PopData[i].distributor_qty,
                });
            }
            _this.serve.exportAsExcelFile(_this.excel_data, _this.transactionType);
            _this.excel_data = [];
            _this.gift_list(_this.transactionType);
        }));
    };
    PopGiftListComponent.prototype.downloadExcel1 = function () {
        var _this = this;
        this.serve.post_rqst({ 'filter': this.filter, 'transaction_type': this.transactionType }, "PopGift/popGiftTransactionLogList").subscribe((function (result) {
            _this.transaction_list = result['result'];
            for (var i = 0; i < _this.transaction_list.length; i++) {
                _this.excel_data.push({
                    'Sr No.': i + 1,
                    'Date': _this.transaction_list[i].date_created,
                    'Item Name': _this.transaction_list[i].pop_item_name,
                    'Transfer Stock': _this.transaction_list[i].stock_qty,
                    'Remaining Stock': _this.transaction_list[i].remaining_stock,
                    'Issue Date': _this.transaction_list[i].date_created,
                    'User Type': _this.transaction_list[i].transfer_to_type,
                    'User Details': _this.transaction_list[i].transfer_to_name,
                    'Remark': _this.transaction_list[i].remarks,
                });
            }
            _this.serve.exportAsExcelFile(_this.excel_data, _this.transactionType);
            _this.excel_data = [];
            _this.transactionData(_this.transactionType);
        }));
    };
    PopGiftListComponent.prototype.downloadReport = function () {
        var _this = this;
        this.bottomSheet.open(src_app_bottom_sheet_bottom_sheet_component__WEBPACK_IMPORTED_MODULE_11__["BottomSheetComponent"], {
            data: {
                'filterPage': 'pop_gift_page',
            }
        });
        this.bottomSheet._openedBottomSheetRef.afterDismissed().subscribe(function (data) {
            if (data) {
                _this.data = data;
                _this.data.userId = data.name;
                console.log(_this.data, "line 468");
                _this.download();
            }
        });
    };
    PopGiftListComponent.prototype.download = function () {
        var _this = this;
        this.serve.post_rqst(this.data, "Reports/btlStockInStockOutReport").subscribe(function (result) {
            if (result['msg'] == true) {
                window.open(_this.downurl + result['filename']);
                _this.transactionData(_this.transactionType);
            }
            else {
                _this.toast.errorToastr(result['statusMsg']);
            }
        }, function (err) {
        });
    };
    PopGiftListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-pop-gift-list',
            template: __webpack_require__(/*! ./pop-gift-list.component.html */ "./src/app/pop-gift/pop-gift-list/pop-gift-list.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_10__["ToastrManager"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatBottomSheet"], src_services_DatabaseService__WEBPACK_IMPORTED_MODULE_7__["DatabaseService"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"], src_app_dialog_component__WEBPACK_IMPORTED_MODULE_4__["DialogComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], src_app_localstorage_service__WEBPACK_IMPORTED_MODULE_6__["sessionStorage"]])
    ], PopGiftListComponent);
    return PopGiftListComponent;
}());



/***/ }),

/***/ "./src/app/pop-gift/pop-gift-module/pop-gift.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/pop-gift/pop-gift-module/pop-gift.module.ts ***!
  \*************************************************************/
/*! exports provided: PopGiftModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PopGiftModule", function() { return PopGiftModule; });
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
/* harmony import */ var _pop_gift_list_pop_gift_list_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../pop-gift-list/pop-gift-list.component */ "./src/app/pop-gift/pop-gift-list/pop-gift-list.component.ts");
/* harmony import */ var _pop_gift_add_pop_gift_add_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../pop-gift-add/pop-gift-add.component */ "./src/app/pop-gift/pop-gift-add/pop-gift-add.component.ts");
/* harmony import */ var _pop_gift_detail_pop_gift_detail_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../pop-gift-detail/pop-gift-detail.component */ "./src/app/pop-gift/pop-gift-detail/pop-gift-detail.component.ts");
/* harmony import */ var _pop_gift_issue_modal_pop_gift_issue_modal_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../pop-gift-issue-modal/pop-gift-issue-modal.component */ "./src/app/pop-gift/pop-gift-issue-modal/pop-gift-issue-modal.component.ts");
/* harmony import */ var src_app_pop_and_gift_add_gift_add_gift_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! src/app/pop_and_gift/add-gift/add-gift.component */ "./src/app/pop_and_gift/add-gift/add-gift.component.ts");
/* harmony import */ var src_app_pop_and_gift_gift_list_gift_list_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! src/app/pop_and_gift/gift-list/gift-list.component */ "./src/app/pop_and_gift/gift-list/gift-list.component.ts");


















var supportRoutes = [
    {
        path: "", children: [
            { path: "", component: _pop_gift_list_pop_gift_list_component__WEBPACK_IMPORTED_MODULE_12__["PopGiftListComponent"], canActivate: [src_app_auth_component_guard__WEBPACK_IMPORTED_MODULE_10__["AuthComponentGuard"]], data: { expectedRole: ['1'] } },
            { path: "pop-gift-add/:id", component: _pop_gift_add_pop_gift_add_component__WEBPACK_IMPORTED_MODULE_13__["PopGiftAddComponent"], canActivate: [src_app_auth_component_guard__WEBPACK_IMPORTED_MODULE_10__["AuthComponentGuard"]], data: { expectedRole: ['1'] } },
            { path: "pop-gift-detail/:id", component: _pop_gift_detail_pop_gift_detail_component__WEBPACK_IMPORTED_MODULE_14__["PopGiftDetailComponent"], canActivate: [src_app_auth_component_guard__WEBPACK_IMPORTED_MODULE_10__["AuthComponentGuard"]], data: { expectedRole: ['1'] } },
        ]
    },
];
var PopGiftModule = /** @class */ (function () {
    function PopGiftModule() {
    }
    PopGiftModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_pop_gift_list_pop_gift_list_component__WEBPACK_IMPORTED_MODULE_12__["PopGiftListComponent"], _pop_gift_add_pop_gift_add_component__WEBPACK_IMPORTED_MODULE_13__["PopGiftAddComponent"], _pop_gift_detail_pop_gift_detail_component__WEBPACK_IMPORTED_MODULE_14__["PopGiftDetailComponent"],
                _pop_gift_issue_modal_pop_gift_issue_modal_component__WEBPACK_IMPORTED_MODULE_15__["PopGiftIssueModalComponent"],
                src_app_pop_and_gift_add_gift_add_gift_component__WEBPACK_IMPORTED_MODULE_16__["AddGiftComponent"],
                src_app_pop_and_gift_gift_list_gift_list_component__WEBPACK_IMPORTED_MODULE_17__["GiftListComponent"],
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild(supportRoutes),
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
            entryComponents: [_pop_gift_issue_modal_pop_gift_issue_modal_component__WEBPACK_IMPORTED_MODULE_15__["PopGiftIssueModalComponent"]]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PopGiftModule);
    return PopGiftModule;
}());



/***/ }),

/***/ "./src/app/pop_and_gift/add-gift/add-gift.component.html":
/*!***************************************************************!*\
  !*** ./src/app/pop_and_gift/add-gift/add-gift.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-container\" [@routerTransition]>\r\n  <div class=\"tools-container\">\r\n    <div class=\"page-heading\">\r\n      <img src=\"assets/img/leads_icon.svg\" class=\"h-icon\">\r\n      <div class=\"heading-text\">\r\n        <h2>Gift</h2>\r\n        <p>Add New POP & Gift</p>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  \r\n  <div class=\"container-outer\">\r\n    <app-master-tab></app-master-tab>\r\n    <div class=\"container tab-container\" >\r\n      <div class=\"row\">\r\n        <div class=\"col s12\">\r\n          <div class=\"sprate-box\">\r\n            <div class=\"cs-heading\">\r\n              <h2>POP & GIFT</h2>\r\n              <span class=\"required\">Indicates required fields ( <sup>*</sup> )</span>\r\n            </div>\r\n            \r\n            <mat-divider class=\"left-right-15 mt10\"></mat-divider>\r\n            <div class=\"from-fields\">\r\n              <div class=\"row\">\r\n                <div class=\"col s8 pl0\">\r\n                  <div class=\"control-field\">\r\n                    <mat-form-field class=\"cs-input\">\r\n                      <input matInput placeholder=\"NAME*\">\r\n                    </mat-form-field>\r\n                  </div>\r\n                </div>\r\n                <div class=\"col s4 pr0\">\r\n                  <div class=\"control-field\">\r\n                    <mat-form-field class=\"cs-input\">\r\n                      <input matInput placeholder=\"Qty\">\r\n                    </mat-form-field>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <mat-divider class=\"left-right-15 mt20 mb10\"></mat-divider>\r\n            <div class=\"cs-heading\">\r\n              <h2>DESCRIPTION</h2>\r\n            </div>\r\n            <mat-divider class=\"left-right-15 mt10\"></mat-divider>\r\n            \r\n            \r\n            <div class=\"row\">\r\n              <div class=\"col s12\">\r\n                <div class=\"editor\">\r\n                  <img src=\"assets/img/editor.jpg\" class=\"wp100 mt15\">\r\n                </div>\r\n              </div>\r\n            </div>\r\n            \r\n            <div class=\"row\">\r\n              <div class=\"col s12\">\r\n                <div class=\"cs-file\">\r\n                  <p>Upload Image</p>\r\n                  <ul>\r\n                    <li>\r\n                      <label>\r\n                        <img src=\"assets/img/product.png\">\r\n                      </label>\r\n                    </li>\r\n                    <li>\r\n                      <div class=\"cs-file\">\r\n                        <label>\r\n                          <input type=\"file\" style=\"display:none;\">\r\n                          <i class=\"material-icons add-file-icon\" >add</i>\r\n                        </label>\r\n                      </div>\r\n                    </li>\r\n                  </ul>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        \r\n        \r\n        <div class=\"col s12\">\r\n          <div class=\"cs-btn fixedd mt32 text-right\">\r\n            <div class=\"in-btn\">\r\n              <button mat-raised-button color=\"accent\">Save</button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      \r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/pop_and_gift/add-gift/add-gift.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/pop_and_gift/add-gift/add-gift.component.ts ***!
  \*************************************************************/
/*! exports provided: AddGiftComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddGiftComponent", function() { return AddGiftComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _router_animation_router_animation_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../router-animation/router-animation.component */ "./src/app/router-animation/router-animation.component.ts");



var AddGiftComponent = /** @class */ (function () {
    function AddGiftComponent() {
    }
    AddGiftComponent.prototype.ngOnInit = function () {
    };
    AddGiftComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-add-gift',
            template: __webpack_require__(/*! ./add-gift.component.html */ "./src/app/pop_and_gift/add-gift/add-gift.component.html"),
            animations: [Object(_router_animation_router_animation_component__WEBPACK_IMPORTED_MODULE_2__["slideToTop"])()]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], AddGiftComponent);
    return AddGiftComponent;
}());



/***/ }),

/***/ "./src/app/pop_and_gift/gift-list/gift-list.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/pop_and_gift/gift-list/gift-list.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-container\" [@routerTransition]>\r\n    <div class=\"tools-container\">\r\n      <div class=\"page-heading\">\r\n        <img src=\"assets/img/leads_icon.svg\" class=\"h-icon\">\r\n        <div class=\"heading-text\">\r\n          <h2>Postal / Territory Master</h2>\r\n          <p>Add New Location</p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    \r\n    <div class=\"container-outer\">\r\n        <app-master-tab-list></app-master-tab-list>\r\n    <div class=\"container tab-container\" >\r\n      <div class=\"row\">\r\n        <div class=\"col s12\">\r\n          <div class=\"cs-table left-right-20\">\r\n            <div class=\"table-head\">\r\n              <table class=\"sno-border\">\r\n                <tr>\r\n                  <th class=\"w30\">&nbsp;</th>\r\n                  <th class=\"w150\">Name</th>\r\n                  <th>Description</th>\r\n                  <th class=\"w350\">Image</th>\r\n                </tr>\r\n              </table>\r\n            </div>\r\n            \r\n            <div class=\"table-container\">\r\n              <div class=\"table-content\">\r\n                <table class=\"sno-border\">\r\n                  <tr>\r\n                    <td class=\"w30\">1</td>\r\n                    <td class=\"w150\"><a class=\"link-btn\" mat-button>Example xyz</a></td>\r\n                    <td>Lorem Ipsum is simply dummy text.</td>\r\n                    <td class=\"w350\">\r\n                        <div class=\"tags\">\r\n                            <ul>\r\n                              <li>\r\n                                <img src=\"assets/img/img1.png\">\r\n                              </li>\r\n                              <li>\r\n                                  <img src=\"assets/img/img2.png\">\r\n                              </li>\r\n                              <li>\r\n                                  <img src=\"assets/img/img3.png\">\r\n                              </li>\r\n                            </ul>\r\n                          </div>\r\n                    </td>\r\n                  </tr>\r\n                  <tr>\r\n                      <td>2</td>\r\n                      <td><a class=\"link-btn\" mat-button>Example xyz</a></td>\r\n                      <td>Lorem Ipsum is simply dummy text.</td>\r\n                      <td>\r\n                          <div class=\"tags\">\r\n                              <ul>\r\n                                <li>\r\n                                  <img src=\"assets/img/img1.png\">\r\n                                </li>\r\n                                <li>\r\n                                    <img src=\"assets/img/img2.png\">\r\n                                </li>\r\n                                <li>\r\n                                    <img src=\"assets/img/img3.png\">\r\n                                </li>\r\n                              </ul>\r\n                            </div>\r\n                      </td>\r\n                    </tr>\r\n             \r\n                </table>\r\n              </div>\r\n            </div>\r\n            \r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    </div>\r\n  </div>"

/***/ }),

/***/ "./src/app/pop_and_gift/gift-list/gift-list.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/pop_and_gift/gift-list/gift-list.component.ts ***!
  \***************************************************************/
/*! exports provided: GiftListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GiftListComponent", function() { return GiftListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _router_animation_router_animation_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../router-animation/router-animation.component */ "./src/app/router-animation/router-animation.component.ts");



var GiftListComponent = /** @class */ (function () {
    function GiftListComponent() {
    }
    GiftListComponent.prototype.ngOnInit = function () {
    };
    GiftListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-gift-list',
            template: __webpack_require__(/*! ./gift-list.component.html */ "./src/app/pop_and_gift/gift-list/gift-list.component.html"),
            animations: [Object(_router_animation_router_animation_component__WEBPACK_IMPORTED_MODULE_2__["slideToTop"])()]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], GiftListComponent);
    return GiftListComponent;
}());



/***/ })

}]);