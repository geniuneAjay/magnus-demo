(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["gift-gift-gallery-module-gift-gallery-module"],{

/***/ "./src/app/gift/gift-add/gift-add.component.html":
/*!*******************************************************!*\
  !*** ./src/app/gift/gift-add/gift-add.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-container\" >\r\n  <!-- <app-loader *ngIf=\"loader\"></app-loader> -->\r\n  <div class=\"tools-container\">\r\n    <a mat-icon-button  matTooltip=\"Back\" routerLink=\"/gift-list\" >\r\n      <i class=\"material-icons\">arrow_back</i>\r\n    </a>\r\n    <h2>Add New Gift</h2>\r\n  </div>\r\n\r\n  <div class=\"container pt10 pl10 pr10 pb50\" >\r\n    <form #f=\"ngForm\" (ngSubmit)=\" f.valid && submitDetail()\">\r\n      <div class=\"row\">\r\n        <div class=\"col s12\">\r\n          <div class=\"card pb0\">\r\n            <div class=\"card-head\">\r\n              <h2>Gift Information</h2>\r\n            </div>\r\n            <div class=\"card-body cs-form\">\r\n              <div class=\"row\">\r\n                <div class=\"col s12 m6 l6\">\r\n                  <mat-radio-group class=\"example-section\" id=\"gift_type\" name=\"gift_type\" [(ngModel)]=\"data.gift_type\">\r\n                    <mat-radio-button class=\"wp50\" color=\"primary\" value=\"Gift\">\r\n                      Gift\r\n                    </mat-radio-button>\r\n                    <mat-radio-button class=\"wp50\" color=\"primary\" value=\"Cash\">\r\n                      Cash\r\n                    </mat-radio-button>\r\n                  </mat-radio-group>\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"card-body cs-form\">\r\n              <div class=\"row\">\r\n                <div class=\"col s12 m3 l3\" >\r\n                  <mat-form-field appearance=\"outline\">\r\n                    <mat-label>User Type</mat-label>\r\n                    <mat-select  name=\"user_type\" [(ngModel)]=\"data.user_type\" #user_type=\"ngModel\" required>\r\n                      <mat-option  value=\"Ply Expert\">Ply Expert</mat-option>\r\n                      <mat-option  value=\"Ambassador\">Ambassador</mat-option>\r\n                      <mat-option  value=\"Fabricator\">Fabricator</mat-option>\r\n                    </mat-select>\r\n                  </mat-form-field>\r\n\r\n                  <div class=\"alert alert-danger\" *ngIf=\"user_type.touched || f.submitted\">\r\n                    <p *ngIf=\"user_type.errors?.required\">This field is required</p>\r\n                  </div>\r\n                </div>\r\n                <div class=\"col s12 m3 l3\">\r\n                  <mat-form-field  appearance=\"outline\">\r\n                    <mat-label>Title</mat-label>\r\n                    <input matInput placeholder=\"Type Here ...\" name=\"title\" #title=\"ngModel\" [(ngModel)]=\"data.title\" required>\r\n                  </mat-form-field>\r\n                  <div class=\"alert alert-danger\" *ngIf=\"title.touched || f.submitted\">\r\n                    <p *ngIf=\"title.errors?.required\">This field is required</p>\r\n                  </div>\r\n                </div>\r\n                <ng-container *ngIf=\"data.gift_type == 'Cash'\">\r\n                  <div class=\"col s12 m3 l3\">\r\n                    <mat-form-field  appearance=\"outline\" >\r\n                      <mat-label>Point</mat-label>\r\n                      <input matInput  placeholder=\"Type Here ...\" name=\"range_start\" #range_start=\"ngModel\" onkeypress=\"return event.charCode>=48 && event.charCode<=57\" [(ngModel)]=\"data.range_start\"   (ngModelChange)=\"resetValue()\" required>\r\n                    </mat-form-field>\r\n                    <div class=\"alert alert-danger\" *ngIf=\"range_start.touched || f.submitted\">\r\n                      <p *ngIf=\"range_start.errors?.required\">This field is required</p>\r\n                    </div>\r\n\r\n                  </div>\r\n\r\n                  <!-- <div class=\"col s12 m3 l3\">\r\n                    <mat-form-field  appearance=\"outline\" >\r\n                      <mat-label>Range End</mat-label>\r\n                      <input matInput placeholder=\"Type Here ...\" name=\"range_end\" #range_end=\"ngModel\" onkeypress=\"return event.charCode>=48 && event.charCode<=57\" [(ngModel)]=\"data.range_end\" required>\r\n                    </mat-form-field>\r\n                    <div class=\"alert alert-danger\" >\r\n                      <ng-container *ngIf=\"range_end.touched || f.submitted\">\r\n                        <p *ngIf=\"range_end.errors?.required\">This field is required</p>\r\n                      </ng-container>\r\n                    </div>\r\n\r\n                  </div> -->\r\n\r\n\r\n                </ng-container>\r\n\r\n                <div class=\"col s12 m3 l3\" *ngIf=\"data.gift_type == 'Gift'\">\r\n                  <mat-form-field  appearance=\"outline\">\r\n                    <mat-label>Point</mat-label>\r\n                    <input matInput placeholder=\"Type Here ...\"  name=\"gift_point\" #gift_point=\"ngModel\"\r\n                    [(ngModel)]=\"data.gift_point\"  onkeypress=\"return event.charCode>=48 && event.charCode<=57\" required>\r\n                  </mat-form-field>\r\n                  <div class=\"alert alert-danger\" *ngIf=\"gift_point.touched || f.submitted\">\r\n                    <p *ngIf=\"gift_point.errors?.required\">This field is required</p>\r\n                  </div>\r\n\r\n                </div>\r\n              </div>\r\n              <div class=\"row\" *ngIf=\"data.gift_type == 'Cash'\">\r\n                <div class=\"col s12 m3 l3\" >\r\n                  <mat-form-field  appearance=\"outline\">\r\n                    <mat-label>Amount Value</mat-label>\r\n                    <input matInput placeholder=\"Type Here ...\"  name=\"point_range_value\" #point_range_value=\"ngModel\" [(ngModel)]=\"data.point_range_value\"  required>\r\n                  </mat-form-field>\r\n                  <div class=\"alert alert-danger\" *ngIf=\"point_range_value.touched || f.submitted\">\r\n                    <p *ngIf=\"point_range_value.errors?.required\">This field is required</p>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n\r\n\r\n              <ng-container *ngIf=\"data.gift_type == 'Gift'\">\r\n                <div class=\"row\">\r\n                  <div class=\"col s12\">\r\n\r\n                    <app-ngx-editor height=\"100px\" minHeight=\"50px\"  [placeholder]=\"'Type Here'\" [spellcheck]=\"true\" name=\"termsNcondition\" [(ngModel)]=\"data.termsNcondition\"></app-ngx-editor>\r\n\r\n                  </div>\r\n                </div>\r\n\r\n                <div class=\"row\">\r\n                  <div class=\"col s12\">\r\n                    <div class=\"uploade-image\">\r\n                      <ul>\r\n\r\n                        <!-- <li *ngFor=\"let row of selected_image; let i=index\">\r\n                          <img src=\"{{row.img_id ? url+row.image : row.image}}\">\r\n                          <span class=\"cancel-icon\">\r\n                            <i class=\"material-icons crose-icon\" (click)=\"deleteProductImage(i,row.img_id, row.image)\">clear</i>\r\n                          </span>\r\n                        </li> -->\r\n                        <!-- <li class=\"add-bg-1\" [ngClass]=\"{'error': errorMsg == true}\">\r\n                          <label>\r\n                            <input type=\"file\" (change)=\"onUploadChange($event)\" style=\"display:none;\" accept=\".png, .jpg, .jpeg,\" multiple required />\r\n                            <div class=\"other\">\r\n                              <i class=\"material-icons\">cloud_upload</i>\r\n                              <p>Upload Images</p>\r\n                            </div>\r\n                          </label>\r\n                        </li> -->\r\n\r\n                        <li class=\"add-bg-1\" [ngClass]=\"{'error': errorMsg == true}\">\r\n                          <img src=\"{{selected_image}}\" *ngIf=\"selected_image != null\">\r\n                          <label class=\"fix-label\">\r\n                            <input type=\"file\" (change)=\"onUploadChange($event)\" style=\"display:none;\" accept=\".png, .jpg, .jpeg,\" multiple required />\r\n                            <div class=\"other\" *ngIf=\"selected_image == null \">\r\n                              <i class=\"material-icons\">cloud_upload</i>\r\n                              <p>Upload Images</p>\r\n                            </div>\r\n                          </label>\r\n                        </li>\r\n\r\n                      </ul>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </ng-container>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"row\">\r\n        <div class=\"col s12\">\r\n          <div class=\"text-right\">\r\n            <button [ngClass]=\"{'loading': savingFlag == true}\" mat-raised-button color=\"accent\" type=\"submit\" [disabled]=\"savingFlag == true\">\r\n              {{savingFlag == true ? 'Saving' : 'Save'}}\r\n            </button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n    </form>\r\n  </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/gift/gift-add/gift-add.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/gift/gift-add/gift-add.component.ts ***!
  \*****************************************************/
/*! exports provided: GiftAddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GiftAddComponent", function() { return GiftAddComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_services_DatabaseService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/_services/DatabaseService */ "./src/_services/DatabaseService.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng6-toastr-notifications */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/ng6-toastr-notifications/fesm5/ng6-toastr-notifications.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! moment */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_5__);






var GiftAddComponent = /** @class */ (function () {
    function GiftAddComponent(service, navparams, router, route, toast) {
        this.service = service;
        this.navparams = navparams;
        this.router = router;
        this.route = route;
        this.toast = toast;
        this.data = {};
        this.loader = false;
        this.image = new FormData();
        this.savingFlag = false;
        this.bonus_schemeList = [];
        this.nav_data = this.navparams['params']['_value'];
        this.data.gift_type = 'Gift';
        this.gift_id = this.nav_data.id;
        this.gift_type = this.nav_data.type;
        this.upload_url = this.service.uploadUrl + 'gift_gallery/';
        this.userData = JSON.parse(localStorage.getItem('st_user'));
        this.userId = this.userData['data']['id'];
        this.userName = this.userData['data']['name'];
        this.today_date = new Date();
        if (this.gift_id) {
            this.get_giftDetail(this.gift_id);
        }
        // else if(!this.gift_id){
        //   this.get_bonus_schemeList()
        // }
    }
    GiftAddComponent.prototype.ngOnInit = function () {
    };
    GiftAddComponent.prototype.get_giftDetail = function (gift_id) {
        var _this = this;
        this.service.post_rqst({ gift_id: gift_id }, 'GiftGallery/gift_detail').subscribe(function (resp) {
            if (resp['statusCode'] == 200) {
                _this.data = resp['result'];
                _this.data.bonus_scheme = _this.data.bonus_scheme.toString();
                // if (this.data.bonus_scheme) {
                //   this.get_bonus_schemeList(gift_id)
                // }
                if (_this.gift_id && _this.data.gift_img != "") {
                    _this.selected_image = _this.upload_url + _this.data.gift_img;
                }
            }
            else {
                _this.toast.errorToastr(resp['statusMsg']);
                _this.savingFlag = false;
            }
        }, function (error) {
            _this.toast.errorToastr(error);
        });
    };
    GiftAddComponent.prototype.onUploadChange = function (data) {
        var _this = this;
        this.errorMsg = false;
        this.image_id = '';
        for (var i = 0; i < data.target.files.length; i++) {
            var files = data.target.files[i];
            if (files) {
                var reader = new FileReader();
                reader.onload = function (e) {
                    _this.selected_image = e.target.result;
                };
                reader.readAsDataURL(files);
            }
            this.image.append("" + i, data.target.files[i], data.target.files[i].name);
        }
    };
    GiftAddComponent.prototype.resetValue = function () {
        this.data.range_end = '';
    };
    // get_bonus_schemeList(gift_id:any='') {
    //   this.service.post_rqst({'gift_id':gift_id}, 'GiftGallery/bonusSchemeList').subscribe((resp) => {
    //     if (resp['statusCode'] == 200) {
    //       this.bonus_schemeList = resp['result']
    //     }
    //     else {
    //       this.toast.errorToastr(resp['statusMsg']);
    //     }
    //   }, error => {
    //     this.toast.errorToastr(error);
    //   })
    // }
    GiftAddComponent.prototype.submitDetail = function () {
        var _this = this;
        this.data.date_from ? (this.data.date_from = moment__WEBPACK_IMPORTED_MODULE_5__(this.data.date_from).format('YYYY-MM-DD')) : null;
        this.data.date_to ? (this.data.date_to = moment__WEBPACK_IMPORTED_MODULE_5__(this.data.date_to).format('YYYY-MM-DD')) : null;
        if (this.data.gift_type == 'Cash') {
            if (parseInt(this.data.range_end) <= parseInt(this.data.range_start)) {
                this.toast.errorToastr('The range end value should be greater than the range start value');
                return;
            }
        }
        if (this.data.gift_type == 'Gift') {
            if (this.selected_image == undefined) {
                this.toast.errorToastr('Please Upload Image');
                return;
            }
        }
        this.data.created_by_name = this.userName;
        this.data.created_by_id = this.userId;
        this.data.gift_img = this.selected_image;
        var header;
        if (this.gift_id) {
            this.data.id = this.gift_id;
            header = this.service.post_rqst(this.data, 'GiftGallery/updateGiftGallery');
        }
        else {
            header = this.service.post_rqst(this.data, 'GiftGallery/addGiftGallery');
        }
        header.subscribe(function (resp) {
            if (resp['statusCode'] == 200) {
                _this.toast.successToastr(resp['statusMsg']);
                _this.savingFlag = false;
                _this.router.navigate(['/gift-list']);
                _this.service.count_list();
            }
            else {
                _this.toast.errorToastr(resp['statusMsg']);
                _this.savingFlag = false;
            }
        }, function (error) {
            _this.toast.errorToastr(error);
        });
    };
    GiftAddComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-gift-add',
            template: __webpack_require__(/*! ./gift-add.component.html */ "./src/app/gift/gift-add/gift-add.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_services_DatabaseService__WEBPACK_IMPORTED_MODULE_2__["DatabaseService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_4__["ToastrManager"]])
    ], GiftAddComponent);
    return GiftAddComponent;
}());



/***/ }),

/***/ "./src/app/gift/gift-gallery-list/gift-gallery-list.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/gift/gift-gallery-list/gift-gallery-list.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-container\">\r\n\r\n  <div class=\"tools-container\">\r\n    <h2>Gift Gallery nvnv</h2>\r\n\r\n    <div class=\"left-auto left-auto df ac flex-gap-10\">\r\n      <button mat-icon-button matTooltip=\"Refresh\" (click)=\"refresh()\">\r\n        <i class=\"material-icons\">refresh</i>\r\n      </button>\r\n\r\n      <div class=\"pagination\" *ngIf=\"giftList.length > 0\">\r\n        <div class=\"pagination-content\">\r\n          Pages\r\n          <span>{{pagenumber}}</span>\r\n          of\r\n          <span>{{total_page}}</span>\r\n        </div>\r\n        <div class=\"page-nav\">\r\n\r\n          <button mat-icon-button matTooltip=\"Older\" (click)=\"pervious()\" [disabled]=\"start == 0\">\r\n            <i class=\"material-icons\">navigate_before</i>\r\n          </button>\r\n          <button mat-icon-button matTooltip=\"Newer\" (click)=\"nextPage()\" [disabled]=\"pagenumber == total_page \">\r\n            <i class=\"material-icons\">navigate_next</i>\r\n          </button>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"mat-tabbar\">\r\n        <button mat-button [ngClass]=\"active_tab == 'Gift' ? 'active' : ''\"\r\n          (click)=\"active_tab = 'Gift';gift_gallery_list();\"><i class=\"material-icons\">redeem</i>Gift\r\n          ({{tabCount.giftCount}})</button>\r\n        <button mat-button [ngClass]=\"active_tab == 'Cash' ? 'active' : ''\"\r\n          (click)=\"active_tab = 'Cash';gift_gallery_list();\"><i class=\"material-icons\">currency_rupee</i>Cash\r\n          ({{tabCount.cashCount}})</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"container pb100\">\r\n    <div class=\"cs-table\">\r\n      <div class=\"sticky-head\">\r\n        <div class=\"table-head\">\r\n          <table>\r\n            <tr>\r\n              <th class=\"w60\">Sr.No</th>\r\n              <th class=\"w70\">Images</th>\r\n              <th class=\"w90\">Date</th>\r\n              <th>Title</th>\r\n              <th class=\"w100 text-center\" *ngIf=\"active_tab == 'Gift'\">Gift Value</th>\r\n              <th class=\"w180\">User Type</th>\r\n              <ng-container *ngIf=\"active_tab == 'Cash'\">\r\n                <th class=\"w100\">Point</th>\r\n                <!-- <th class=\"w100\">Range End</th> -->\r\n                <th class=\"w100 text-right\">Amount Value</th>\r\n              </ng-container>\r\n              <th class=\"w100\" *ngIf=\"logined_user_data2.edit_gift_gallery=='1'\">Action</th>\r\n            </tr>\r\n          </table>\r\n        </div>\r\n\r\n        <div class=\"table-head\">\r\n          <table>\r\n            <tr>\r\n              <th class=\"w60\">&nbsp;</th>\r\n              <th class=\"w70\">&nbsp;</th>\r\n              <th class=\"w90\">\r\n                <div class=\"th-search-acmt\">\r\n                  <mat-form-field class=\"cs-input date-column infix-bodr\">\r\n                    <input matInput [matDatepicker]=\"picker\" placeholder=\"Date\" name=\"date_created\"\r\n                      [(ngModel)]=\"filter.date_created\" (dateChange)=\"onDate($event)\" [max]=\"today_date\" disabled>\r\n                    <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\r\n                    <mat-datepicker #picker disabled=\"false\"></mat-datepicker>\r\n                  </mat-form-field>\r\n                </div>\r\n              </th>\r\n              <th>\r\n                <div class=\"th-search-acmt\">\r\n                  <mat-form-field class=\"example-full-width cs-input select-input\">\r\n                    <input matInput placeholder=\"Search...\" type=\"text\" name=\"title\" [(ngModel)]=\"filter.title\"\r\n                      (keyup.enter)=\"gift_gallery_list()\">\r\n                  </mat-form-field>\r\n                </div>\r\n              </th>\r\n              <th class=\"w100 text-center\" *ngIf=\"active_tab == 'Gift'\">&nbsp;</th>\r\n              <th class=\"w180\">\r\n                <div class=\"th-search-acmt\">\r\n                  <mat-form-field class=\"cs-input select-input\">\r\n                    <mat-label>Select</mat-label>\r\n                    <mat-select name=\"user_type\" #user_type=\"ngModel\" [(ngModel)]=\"filter.user_type\"\r\n                      (selectionChange)=\"gift_gallery_list()\">\r\n                      <mat-option value=\"\">All</mat-option>\r\n                      <mat-option value=\"Ply Expert\">Ply Expert</mat-option>\r\n                      <mat-option value=\"Ambassador\">Ambassador</mat-option>\r\n                      <mat-option value=\"Fabricator\">Fabricator</mat-option>\r\n                    </mat-select>\r\n                  </mat-form-field>\r\n                </div>\r\n              </th>\r\n              <ng-container *ngIf=\"active_tab == 'Cash'\">\r\n                <th class=\"w100\">&nbsp;</th>\r\n                <!-- <th class=\"w100\">&nbsp;</th> -->\r\n                <th class=\"w100\">&nbsp;</th>\r\n              </ng-container>\r\n              <th class=\"w100\" *ngIf=\"logined_user_data2.edit_gift_gallery=='1'\">\r\n                <div class=\"th-search-acmt\">\r\n                  <mat-form-field class=\"cs-input select-input\">\r\n                    <mat-label>Select</mat-label>\r\n                    <mat-select name=\"status\" #status=\"ngModel\" [(ngModel)]=\"filter.status\"\r\n                      (selectionChange)=\"gift_gallery_list()\">\r\n                      <mat-option value=\"\">All</mat-option>\r\n                      <mat-option value=\"1\">Active</mat-option>\r\n                      <mat-option value=\"0\">Inactive</mat-option>\r\n                    </mat-select>\r\n                  </mat-form-field>\r\n                </div>\r\n              </th>\r\n            </tr>\r\n          </table>\r\n        </div>\r\n\r\n      </div>\r\n\r\n      <div class=\"table-container\">\r\n        <div class=\"table-content\" *ngIf=\"giftList.length > 0\">\r\n          <table>\r\n            <ng-container *ngIf=\"!loader\">\r\n              <tr *ngFor=\"let row of giftList; let i = index;\">\r\n                <td class=\"w60\">{{i + 1 + sr_no}}</td>\r\n                <td class=\"w70 text-center\">\r\n                  <a class=\"img-avtar\" (click)=\"row.gift_type == 'Gift' ? goToImage(url+row.gift_img) : ''\">\r\n                    <img src=\"{{row.gift_type == 'Gift' ? url+row.gift_img: 'assets/img/cash.png'}}\">\r\n                  </a>\r\n                </td>\r\n                <td class=\"w90\">{{row.date_created | date:'dd MMM yyyy ,h:mm a'}}</td>\r\n                <td>{{row.title}}</td>\r\n                <td class=\"w100 text-center\" *ngIf=\"active_tab == 'Gift'\"><strong>{{row.gift_point}} PT</strong></td>\r\n                <td class=\"w180\">{{row.object}}</td>\r\n                <ng-container *ngIf=\"active_tab == 'Cash'\">\r\n                  <td class=\"w100\">{{row.range_start}} PT</td>\r\n                  <!-- <td class=\"w100\">{{row.range_end}} PT</td> -->\r\n                  <td class=\"w100 text-right\"><strong>&#x20B9; {{row.point_range_value}}</strong></td>\r\n                </ng-container>\r\n                <td class=\"w100 text-center\" *ngIf=\"logined_user_data2.edit_gift_gallery=='1'\">\r\n                  <div class=\"action-button\">\r\n                    <mat-slide-toggle color=\"accent\" [name]=\"'status'+i\" [(ngModel)]=\"row.status\"\r\n                      (change)=\"updateStatus(i,row.id,$event)\">\r\n                    </mat-slide-toggle>\r\n                  </div>\r\n                </td>\r\n              </tr>\r\n            </ng-container>\r\n            <ng-container *ngIf=\"loader\">\r\n              <tr class=\"sk-loading\" *ngFor=\"let row of [].constructor(10)\">\r\n                <td class=\"w60\">\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n                <td class=\"w70 text-center\">\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n                <td class=\"w90\">\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n                <td>\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n                <td class=\"w100 text-center\" *ngIf=\"active_tab == 'Gift'\">\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n                <td class=\"w180\">\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n                <ng-container *ngIf=\"active_tab == 'Cash'\">\r\n                  <td class=\"w100\">\r\n                    <div>&nbsp;</div>\r\n                  </td>\r\n                  <!-- <td class=\"w100\">\r\n                    <div>&nbsp;</div>\r\n                  </td> -->\r\n                  <td class=\"w100\">\r\n                    <div>&nbsp;</div>\r\n                  </td>\r\n\r\n                </ng-container>\r\n                <td class=\"w100 text-center\" *ngIf=\"logined_user_data2.edit_gift_gallery=='1'\">\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n              </tr>\r\n            </ng-container>\r\n          </table>\r\n        </div>\r\n      </div>\r\n      <div class=\"no-data\" *ngIf=\"!giftList.length && datanotfound == true\">\r\n        <app-not-result-found></app-not-result-found>\r\n      </div>\r\n    </div>\r\n\r\n\r\n  </div>\r\n\r\n\r\n\r\n  <div class=\"fab-btns\">\r\n\r\n    <button mat-fab class=\"excel\" (click)=\"lastBtnValue('csv'); downloadCsv()\" *ngIf=\"logined_user_data2.export_gift_gallery=='1'\" [ngClass]=\"{'pulse': fabBtnValue=='csv'}\">\r\n      <img src=\"assets/img/excel.svg\">\r\n      Download CSV\r\n    </button>\r\n\r\n    <button class=\"pulse\" mat-fab (click)=\"lastBtnValue('add')\" [ngClass]=\"{'pulse': fabBtnValue=='add'}\"\r\n      *ngIf=\"logined_user_data2.add_gift_gallery=='1'\" color=\"primary\" routerLink=\"gift-add\">\r\n      <i class=\"material-icons\">add</i>\r\n      Add New\r\n    </button>\r\n  </div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/gift/gift-gallery-list/gift-gallery-list.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/gift/gift-gallery-list/gift-gallery-list.component.ts ***!
  \***********************************************************************/
/*! exports provided: GiftGalleryListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GiftGalleryListComponent", function() { return GiftGalleryListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_services_DatabaseService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/_services/DatabaseService */ "./src/_services/DatabaseService.ts");
/* harmony import */ var src_app_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/dialog.component */ "./src/app/dialog.component.ts");
/* harmony import */ var ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng6-toastr-notifications */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/ng6-toastr-notifications/fesm5/ng6-toastr-notifications.js");
/* harmony import */ var src_app_localstorage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/localstorage.service */ "./src/app/localstorage.service.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! moment */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var src_app_image_module_image_module_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/image-module/image-module.component */ "./src/app/image-module/image-module.component.ts");









var GiftGalleryListComponent = /** @class */ (function () {
    function GiftGalleryListComponent(serve, dialogs, alert, toast, session) {
        this.serve = serve;
        this.dialogs = dialogs;
        this.alert = alert;
        this.toast = toast;
        this.session = session;
        this.fabBtnValue = 'add';
        this.active_tab = 'Gift';
        this.filter = {};
        this.excel_data = [];
        this.giftList = [];
        this.giftListItem = [];
        this.search_val = {};
        this.loader = false;
        this.datanotfound = false;
        this.pagenumber = 1;
        this.start = 0;
        this.count = {};
        this.tabCount = {};
        this.items_object = {};
        this.user_type = [];
        this.url = this.serve.uploadUrl + 'gift_gallery/';
        this.downurl = this.serve.downloadUrl;
        this.page_limit = this.serve.pageLimit;
        this.assign_login_data = this.session.getSession();
        this.logined_user_data = this.assign_login_data.value;
        this.logined_user_data2 = this.logined_user_data.data;
        this.gift_gallery_list();
        this.today_date = new Date();
    }
    GiftGalleryListComponent.prototype.ngOnInit = function () {
    };
    GiftGalleryListComponent.prototype.onDate = function (event) {
        this.filter.date_created = moment__WEBPACK_IMPORTED_MODULE_6__(event.value).format('YYYY-MM-DD');
        this.gift_gallery_list();
    };
    GiftGalleryListComponent.prototype.pervious = function () {
        this.start = this.start - this.page_limit;
        this.gift_gallery_list();
    };
    GiftGalleryListComponent.prototype.nextPage = function () {
        this.start = this.start + this.page_limit;
        this.gift_gallery_list();
    };
    GiftGalleryListComponent.prototype.gift_gallery_list = function () {
        var _this = this;
        if (this.pagenumber > this.total_page) {
            this.pagenumber = this.total_page;
        }
        if (this.start < 0) {
            this.start = 0;
        }
        this.filter.gift_type = this.active_tab;
        this.loader = true;
        this.serve.post_rqst({ 'filter': this.filter, 'start': this.start, 'pagelimit': this.page_limit }, "GiftGallery/giftGalleryList")
            .subscribe((function (result) {
            if (result['statusCode'] == 200) {
                _this.giftList = result['gift_master_list'];
                _this.count = result['count'];
                _this.tabCount = result['tabCount'];
                _this.pageCount = result['count'];
                if (_this.giftList.length == 0) {
                    _this.datanotfound = true;
                }
                else {
                    _this.datanotfound = false;
                }
                if (_this.pagenumber > _this.total_page) {
                    _this.pagenumber = _this.total_page;
                    if (_this.pageCount != 0) {
                        _this.start = _this.pageCount - _this.page_limit;
                    }
                    else {
                        _this.start = 0;
                    }
                }
                else {
                    _this.pagenumber = Math.ceil(_this.start / _this.page_limit) + 1;
                }
                _this.total_page = Math.ceil(_this.pageCount / _this.page_limit);
                _this.sr_no = _this.pagenumber - 1;
                _this.sr_no = _this.sr_no * _this.page_limit;
                for (var index = 0; index < _this.giftList.length; index++) {
                    _this.giftListItem = _this.giftList[index]['item'];
                    var val = '';
                    for (var index_1 = 0; index_1 < _this.giftListItem.length; index_1++) {
                        val += _this.giftListItem[index_1].user_type + ', ';
                    }
                    _this.giftList[index].object = val;
                }
                setTimeout(function () {
                    _this.loader = false;
                }, 700);
            }
            else {
                _this.toast.errorToastr(result['statusMsg']);
            }
        }));
        this.serve.count_list();
    };
    GiftGalleryListComponent.prototype.updateStatus = function (index, id, event) {
        var _this = this;
        if (event.checked == false) {
            this.alert.confirm("You Want To Change Status !").then(function (result) {
                if (result) {
                    if (event.checked == false) {
                        _this.giftList[index].status = "0";
                    }
                    else {
                        _this.giftList[index].status = "1";
                    }
                    var value = _this.giftList[index].status;
                    _this.serve.post_rqst({ 'gift_gallery_id': id, 'status': value, 'status_changed_by': _this.logined_user_data.data.id, 'status_changed_by_name': _this.logined_user_data.data.name }, "GiftGallery/giftGalleryStatusChange")
                        .subscribe(function (resp) {
                        if (resp['statusCode'] == 200) {
                            _this.toast.successToastr(resp['statusMsg']);
                            _this.gift_gallery_list();
                        }
                        else {
                            _this.toast.errorToastr(resp['statusMsg']);
                        }
                    });
                }
                else {
                    _this.gift_gallery_list();
                }
            });
        }
        else if (event.checked == true) {
            this.alert.confirm("You Want To Change Status !").then(function (result) {
                if (result) {
                    if (event.checked == false) {
                        _this.giftList[index].status = "0";
                    }
                    else {
                        _this.giftList[index].status = "1";
                    }
                    var value = _this.giftList[index].status;
                    _this.serve.post_rqst({ 'gift_gallery_id': id, 'status': value, 'status_changed_by': _this.logined_user_data.data.id, 'status_changed_by_name': _this.logined_user_data.data.name }, "GiftGallery/giftGalleryStatusChange")
                        .subscribe(function (resp) {
                        if (resp['statusCode'] == 200) {
                            _this.toast.successToastr(resp['statusMsg']);
                            _this.gift_gallery_list();
                        }
                        else {
                            _this.toast.errorToastr(resp['statusMsg']);
                        }
                    });
                }
                else {
                    _this.gift_gallery_list();
                }
            });
        }
    };
    GiftGalleryListComponent.prototype.goToImage = function (image) {
        var dialogRef = this.dialogs.open(src_app_image_module_image_module_component__WEBPACK_IMPORTED_MODULE_8__["ImageModuleComponent"], {
            panelClass: 'Image-modal',
            data: {
                'image': image,
                'type': 'base64'
            }
        });
        dialogRef.afterClosed().subscribe(function (result) {
        });
    };
    GiftGalleryListComponent.prototype.refresh = function () {
        this.filter = {};
        this.start = 0;
        this.gift_gallery_list();
    };
    GiftGalleryListComponent.prototype.lastBtnValue = function (value) {
        this.fabBtnValue = value;
    };
    GiftGalleryListComponent.prototype.downloadCsv = function () {
        var _this = this;
        var downloadFilter = Object.assign({}, this.filter);
        downloadFilter.gift_type = this.active_tab;
        this.loader = true;
        this.serve.post_rqst({ 'filter': downloadFilter }, "Excel/giftGalleryListExcel")
            .subscribe((function (result) {
            _this.loader = false;
            if (result['msg'] == true) {
                window.open(_this.downurl + result['filename']);
            }
            else {
                _this.toast.errorToastr('Something went wrong while downloading the CSV');
            }
        }));
    };
    GiftGalleryListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-gift-gallery-list',
            template: __webpack_require__(/*! ./gift-gallery-list.component.html */ "./src/app/gift/gift-gallery-list/gift-gallery-list.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_services_DatabaseService__WEBPACK_IMPORTED_MODULE_2__["DatabaseService"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatDialog"], src_app_dialog_component__WEBPACK_IMPORTED_MODULE_3__["DialogComponent"], ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_4__["ToastrManager"], src_app_localstorage_service__WEBPACK_IMPORTED_MODULE_5__["sessionStorage"]])
    ], GiftGalleryListComponent);
    return GiftGalleryListComponent;
}());



/***/ }),

/***/ "./src/app/gift/gift-gallery-module/gift-gallery.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/gift/gift-gallery-module/gift-gallery.module.ts ***!
  \*****************************************************************/
/*! exports provided: GiftGalleryModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GiftGalleryModule", function() { return GiftGalleryModule; });
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
/* harmony import */ var _gift_add_gift_add_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../gift-add/gift-add.component */ "./src/app/gift/gift-add/gift-add.component.ts");
/* harmony import */ var _gift_gallery_list_gift_gallery_list_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../gift-gallery-list/gift-gallery-list.component */ "./src/app/gift/gift-gallery-list/gift-gallery-list.component.ts");
/* harmony import */ var ngx_editor__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-editor */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/ngx-editor/fesm5/ngx-editor.js");















var giftGalleryRoutes = [
    {
        path: "", children: [
            { path: '', component: _gift_gallery_list_gift_gallery_list_component__WEBPACK_IMPORTED_MODULE_13__["GiftGalleryListComponent"], canActivate: [src_app_auth_component_guard__WEBPACK_IMPORTED_MODULE_11__["AuthComponentGuard"]], data: { expectedRole: ['1'] } },
            { path: "gift-add", component: _gift_add_gift_add_component__WEBPACK_IMPORTED_MODULE_12__["GiftAddComponent"], canActivate: [src_app_auth_component_guard__WEBPACK_IMPORTED_MODULE_11__["AuthComponentGuard"]], data: { expectedRole: ['1'] } },
            { path: "gift-edit/:id/:type", component: _gift_add_gift_add_component__WEBPACK_IMPORTED_MODULE_12__["GiftAddComponent"], canActivate: [src_app_auth_component_guard__WEBPACK_IMPORTED_MODULE_11__["AuthComponentGuard"]], data: { expectedRole: ['1'] } },
        ]
    },
];
var GiftGalleryModule = /** @class */ (function () {
    function GiftGalleryModule() {
    }
    GiftGalleryModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_gift_gallery_list_gift_gallery_list_component__WEBPACK_IMPORTED_MODULE_13__["GiftGalleryListComponent"], _gift_add_gift_add_component__WEBPACK_IMPORTED_MODULE_12__["GiftAddComponent"],],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild(giftGalleryRoutes),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_7__["NgMultiSelectDropDownModule"],
                src_app_material__WEBPACK_IMPORTED_MODULE_10__["MaterialModule"],
                angular_ng_autocomplete__WEBPACK_IMPORTED_MODULE_6__["AutocompleteLibModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialogModule"],
                ngx_mat_select_search__WEBPACK_IMPORTED_MODULE_8__["NgxMatSelectSearchModule"],
                src_app_app_utility_module__WEBPACK_IMPORTED_MODULE_9__["AppUtilityModule"],
                ngx_editor__WEBPACK_IMPORTED_MODULE_14__["NgxEditorModule"]
            ]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], GiftGalleryModule);
    return GiftGalleryModule;
}());



/***/ })

}]);