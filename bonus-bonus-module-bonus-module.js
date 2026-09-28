(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["bonus-bonus-module-bonus-module"],{

/***/ "./src/app/bonus/bonus-add/bonus-add.component.html":
/*!**********************************************************!*\
  !*** ./src/app/bonus/bonus-add/bonus-add.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-container\" >\r\n  <div class=\"tools-container\">\r\n    <a mat-icon-button  matTooltip=\"Back\" routerLink=\"/bonus-list\" >\r\n      <i class=\"material-icons\">arrow_back</i>\r\n    </a>\r\n    <h2>Add New Scheme</h2>\r\n  </div>\r\n\r\n  <div class=\"container pt10 pl10 pr10 pb50\" >\r\n    <form #f=\"ngForm\" (ngSubmit)=\" f.valid && submitDetail()\">\r\n      <div class=\"row\">\r\n        <div class=\"col s12\">\r\n          <div class=\"card pb0\">\r\n            <div class=\"card-head\">\r\n              <h2>Basic Information</h2>\r\n            </div>\r\n            <div class=\"card-body cs-form\">\r\n              <div class=\"row\">\r\n                <div class=\"col s12 m3 l3\" >\r\n                  <mat-form-field appearance=\"outline\">\r\n                    <mat-label>User Type</mat-label>\r\n                    <mat-select  name=\"types\" [(ngModel)]=\"data.types\" #types=\"ngModel\" (selectionChange)=\"pointCategory_data(data.types == 'Retailer' ? 'Master Box' : 'Item Box'); districts = []; getState()\" >\r\n                      <!-- <mat-option  value=\"Retailer\">Retailer</mat-option> -->\r\n                      <mat-option  value=\"Influencer\">Influencer</mat-option>\r\n                    </mat-select>\r\n                  </mat-form-field>\r\n                  <div class=\"alert alert-danger\" *ngIf=\"types.touched || f.submitted\">\r\n                    <p *ngIf=\"types.errors?.required\">This field is required</p>\r\n                  </div>\r\n                </div>\r\n\r\n\r\n                <div class=\"col s12 m3 l3\" *ngIf=\"data.types == 'Influencer'\">\r\n                  <mat-form-field appearance=\"outline\">\r\n                    <mat-label>Influencer Type</mat-label>\r\n                    <mat-select  name=\"influencer_type\" [(ngModel)]=\"data.influencer_type\" #influencer_type=\"ngModel\">\r\n                      <mat-option *ngFor=\"let row of influencerUser\"  value=\"{{row.type}}\">{{row.module_name}}</mat-option>\r\n                    </mat-select>\r\n                  </mat-form-field>\r\n                  <div class=\"alert alert-danger\" *ngIf=\"influencer_type.touched || f.submitted\">\r\n                    <p *ngIf=\"influencer_type.errors?.required\">This field is required</p>\r\n                  </div>\r\n                </div>\r\n\r\n\r\n                <div class=\"col s12 m3 l3\">\r\n                  <mat-form-field  appearance=\"outline\">\r\n                    <mat-label>Title</mat-label>\r\n                    <input matInput placeholder=\"Type Here ...\" name=\"tittle\" #tittle=\"ngModel\" [(ngModel)]=\"data.tittle\">\r\n                  </mat-form-field>\r\n                  <div class=\"alert alert-danger\" *ngIf=\"tittle.touched || f.submitted\">\r\n                    <p *ngIf=\"tittle.errors?.required\">This field is required</p>\r\n                  </div>\r\n                </div>\r\n                <div class=\"col s12 m3 l3\">\r\n                  <mat-form-field  appearance=\"outline\">\r\n                    <mat-label>Start Date</mat-label>\r\n                    <input name=\"start_date\" matInput [matDatepicker]=\"pickers\" placeholder=\"\" [min]=\"minDate\" #start_date=\"ngModel\" readonly [(ngModel)]=\"data.start_date\">\r\n                    <mat-datepicker-toggle matSuffix [for]=\"pickers\"></mat-datepicker-toggle>\r\n                    <mat-datepicker #pickers></mat-datepicker>\r\n                  </mat-form-field>\r\n                  <div class=\"alert alert-danger\" *ngIf=\"start_date.touched || f.submitted\">\r\n                    <p *ngIf=\"start_date.errors?.required\">This field is required</p>\r\n                  </div>\r\n                </div>\r\n\r\n                <div class=\"col s12 m3 l3\">\r\n                  <mat-form-field  appearance=\"outline\">\r\n                    <mat-label>End Date</mat-label>\r\n                    <input name=\"end_date\" matInput [matDatepicker]=\"picker1\" placeholder=\"\" [min]=\"data.start_date\" #end_date=\"ngModel\" readonly [(ngModel)]=\"data.end_date\">\r\n                    <mat-datepicker-toggle matSuffix [for]=\"picker1\"></mat-datepicker-toggle>\r\n                    <mat-datepicker #picker1></mat-datepicker>\r\n                  </mat-form-field>\r\n                  <div class=\"alert alert-danger\" *ngIf=\"end_date.touched || f.submitted\">\r\n                    <p *ngIf=\"end_date.errors?.required\">This field is required</p>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"row\">\r\n        <div class=\"col s12 m8 l8\" *ngIf=\"data.types\">\r\n          <div class=\"card pb0\">\r\n            <div class=\"card-head\">\r\n              <h2>Area Wise Influencer Selection</h2>\r\n            </div>\r\n            <div class=\"card-body\">\r\n              <div class=\"row\">\r\n                <div  [ngClass]=\"data.types != 'Retailer'?'col s12 m4 l4':'col s12 m6 l6'\">\r\n                  <div class=\"check-box\">\r\n                    <div class=\"check-body\">\r\n                      <mat-checkbox  [labelPosition]=\"labelPosition\" color=\"primary\"  *ngFor=\"let val of states | filterBy : {state_name : search_st} let g=index;\" [name]=\"'state'+val.state_name+g\"  [value]=\"val.state_name\" [ngModel]=\"data.checkboxState\" (ngModelChange)=\"getDistrictList(val.state_name,$event);\" >{{val.state_name}}</mat-checkbox>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <div [ngClass]=\"data.types != 'Retailer'?'col s12 m4 l4':'col s12 m6 l6'\">\r\n                  <div class=\"check-box\">\r\n                    <div class=\"check-head\">\r\n                      <mat-checkbox [labelPosition]=\"labelPosition\" color=\"primary\" (change)=\"sel_all_dis($event)\">Select All</mat-checkbox>\r\n                    </div>\r\n                    <div class=\"check-body\">\r\n                      <ng-container *ngFor=\"let val of districts;let h=index\">\r\n                        <mat-checkbox  color=\"primary\" [labelPosition]=\"labelPosition\" class=\"fill-check\"  disabled=\"true\"   checked=\"true\" [value]=\"val.state_name\" name=\"'state_name'+h\" >{{val.state_name}}</mat-checkbox>\r\n                        <ng-container *ngFor=\"let dist of val.district | filterBy: {district_name : search_dis};let d=index\">\r\n                          <mat-checkbox color=\"primary\" [labelPosition]=\"labelPosition\" [checked]=\"all_dis_check\" [value]=\"dist.district_name\" [name]=\"'district_name'+val.state_name+d\" [ngModel]=\"data.checkboxDistrict\" (ngModelChange)=\"getSelDistrict(val.state_name,dist.district_name,$event); (data.types != undefined  && data.influencer_type != undefined)? getAreaInfluencer() :''\">{{dist.district_name}}</mat-checkbox>\r\n                        </ng-container>\r\n                      </ng-container>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n\r\n                <div class=\"col s12 m4 l4\" *ngIf=\"data.types != 'Retailer'\">\r\n                  <div class=\"check-box\">\r\n                    <!-- <div class=\"check-head\">\r\n                      <div class=\"th-search-acmt\">\r\n                        <mat-form-field>\r\n                          <input type=\"text\"  matInput placeholder=\"Search ...\" name=\"influencer_name\" (ngModelChange)=\"getAreaInfluencer(filter.influencer_name)\" #influencer_name=\"ngModel\" [(ngModel)]=\"filter.influencer_name\" >\r\n                        </mat-form-field>\r\n                      </div>\r\n                    </div> -->\r\n                    <div class=\"check-head\">\r\n                      <mat-checkbox color=\"primary\" [labelPosition]=\"labelPosition\" [(ngModel)]=\"data.Influencer\" (change)=\"allInfluncer()\"  name=\"Influencer\"  value=\"true\">Select All</mat-checkbox>\r\n                    </div>\r\n                    <div class=\"check-body\">\r\n                      <ng-container *ngFor=\"let row of areaInfluencer;let d=index\">\r\n                        <mat-checkbox color=\"primary\" [labelPosition]=\"labelPosition\"  [(ngModel)]=\"row.selected\" [name]=\"'name'+i\"  (change)=\"setInfluencer($event, row.id)\">{{row.name | titlecase}} {{row.mobile_no}}</mat-checkbox>\r\n                      </ng-container>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col s12 m4 l4\" *ngIf=\"data.types\">\r\n          <div class=\"card pb0\">\r\n            <div class=\"card-head\">\r\n              <h2>Category Bonus Points</h2>\r\n            </div>\r\n            <div class=\"card-body\">\r\n              <div class=\"cs-table left-right-10 scroll310\">\r\n                <div class=\"sticky-head border-top\">\r\n                  <div class=\"table-head\">\r\n                    <table>\r\n                      <tr>\r\n                        <th class=\"w50\">S.No</th>\r\n                        <th>Point Category</th>\r\n                        <th class=\"w100  text-center\">Points</th>\r\n                      </tr>\r\n                    </table>\r\n                  </div>\r\n                </div>\r\n                <div class=\"table-container\">\r\n                  <div class=\"table-content\">\r\n                    <table>\r\n                      <ng-container>\r\n                        <tr *ngFor=\"let row of pointCategories_data; let i = index\">\r\n                          <td class=\"w50\">{{i+1}}</td>\r\n                          <td>{{row.point_category_name}}</td>\r\n                          <td class=\"w100  text-center\">\r\n                            <div class=\"th-search-acmt\">\r\n                              <mat-form-field>\r\n                                <input type=\"text\" matInput class=\"cs-text-input text-center\" placeholder=\"Enter Points\" [name]=\"'scheme_influencer_point'+i\"  [(ngModel)] = \"row.scheme_influencer_point\"  onkeypress=\"return event.charCode>=48 && event.charCode<=57\">\r\n                              </mat-form-field>\r\n                            </div>\r\n                          </td>\r\n                        </tr>\r\n                      </ng-container>\r\n                    </table>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"row\">\r\n        <div class=\"col s12\">\r\n          <div class=\"text-right\">\r\n            <button [ngClass]=\"{'loading': savingFlag == true}\" mat-raised-button color=\"accent\" type=\"submit\" [disabled]=\"savingFlag == true\">\r\n              {{savingFlag == true ? 'Saving' : 'Save'}}\r\n            </button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n    </form>\r\n  </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/bonus/bonus-add/bonus-add.component.ts":
/*!********************************************************!*\
  !*** ./src/app/bonus/bonus-add/bonus-add.component.ts ***!
  \********************************************************/
/*! exports provided: BonusAddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BonusAddComponent", function() { return BonusAddComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng6-toastr-notifications */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/ng6-toastr-notifications/fesm5/ng6-toastr-notifications.js");
/* harmony import */ var src_app_localstorage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/localstorage.service */ "./src/app/localstorage.service.ts");
/* harmony import */ var src_services_DatabaseService__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/_services/DatabaseService */ "./src/_services/DatabaseService.ts");






var BonusAddComponent = /** @class */ (function () {
    function BonusAddComponent(service, session, rout, toast) {
        this.service = service;
        this.session = session;
        this.rout = rout;
        this.toast = toast;
        this.data = {};
        this.states = [];
        this.districts = [];
        this.temp_state_name = [];
        this.final_state_name = [];
        this.pointCategories_data = [];
        this.savingFlag = false;
        this.assign_login_data = {};
        this.logined_user_data = {};
        this.filter = {};
        this.influencerUser = [];
        this.labelPosition = 'before';
        this.form_statelist = [];
        this.form_districtlist = [];
        this.areaInfluencer = [];
        this.all_dis_check = false;
        this.newDistrict = [];
        this.selInfluncer = [];
        this.selState = [];
        this.minDate = new Date();
        this.assign_login_data = this.session.getSession();
        this.logined_user_data = this.assign_login_data.value.data;
        this.getInfluencer();
    }
    BonusAddComponent.prototype.ngOnInit = function () {
    };
    BonusAddComponent.prototype.getState = function () {
        var _this = this;
        this.service.post_rqst({}, 'Bonus/getAllState').subscribe(function (result) {
            if (result['statusCode'] == 200) {
                _this.states = result['all_state'];
            }
            else {
                _this.toast.errorToastr(result['statusMsg']);
            }
        }, function (error) {
        });
    };
    BonusAddComponent.prototype.storestate = function (state_name) {
        if (state_name) {
            this.form_statelist.push({ state_name: state_name });
        }
    };
    BonusAddComponent.prototype.removeStateListData = function (state_name) {
        var x = this.form_statelist.findIndex(function (items) { return items.state_name === state_name; });
        if (x != '-1')
            this.form_statelist.splice(x, 1);
    };
    BonusAddComponent.prototype.storedistrict = function (stateinp, district_name) {
        if (district_name) {
            this.form_districtlist.push({ 'state_name': stateinp, 'district_name': district_name });
        }
    };
    BonusAddComponent.prototype.removeDistrictListData = function (district_name) {
        var x = this.form_districtlist.findIndex(function (items) { return items.district_name === district_name; });
        if (x != '-1')
            this.form_districtlist.splice(x, 1);
    };
    BonusAddComponent.prototype.removeDist = function (stateinput) {
        var x = this.districts.findIndex(function (items) { return items.state_name === stateinput; });
        if (x != '-1')
            this.districts.splice(x, 1);
    };
    BonusAddComponent.prototype.getDistrictList = function (stateinput, e) {
        if (e) {
            this.districtList(stateinput);
            this.storestate(stateinput);
        }
        else {
            this.removeDist(stateinput);
            this.removeStateListData(stateinput);
        }
    };
    BonusAddComponent.prototype.sel_all_dis = function (e) {
        if (e.checked) {
            this.all_dis_check = true;
            for (var i = 0; i < this.districts.length; i++) {
                for (var j = 0; j < this.districts[i]['district'].length; j++) {
                    this.storedistrict(this.districts[i]['state_name'], this.districts[i]['district'][j]['district_name']);
                }
            }
        }
        else {
            this.all_dis_check = false;
            for (var k = 0; k < this.districts.length; k++) {
                for (var l = 0; l < this.districts[k]['district'].length; l++) {
                    this.removeDistrictListData(this.districts[k]['district'][l]['district_name']);
                }
            }
        }
    };
    BonusAddComponent.prototype.districtList = function (stateinput) {
        var _this = this;
        this.service.post_rqst({ 'state_name': stateinput }, "Bonus/getAllDistrict").subscribe((function (result) {
            if (result['statusCode'] == 200) {
                _this.newDistrict = result['all_district'];
                _this.districts.push({ 'state_name': stateinput, 'district': _this.newDistrict });
            }
            else {
                _this.toast.errorToastr(result['statusMsg']);
            }
        }));
    };
    BonusAddComponent.prototype.getSelDistrict = function (stateinp, districtinput, e) {
        if (e) {
            this.storedistrict(stateinp, districtinput);
        }
        else {
            this.removeDistrictListData(districtinput);
        }
    };
    BonusAddComponent.prototype.pointCategory_data = function (status) {
        var _this = this;
        this.filter.point_type = status;
        this.service.post_rqst({ 'filter': this.filter }, 'Bonus/pointCategoryMasterList').subscribe(function (result) {
            if (result['statusCode'] == 200) {
                _this.pointCategories_data = result['point_category_list'];
            }
            else {
                _this.toast.errorToastr(result['statusMsg']);
            }
        });
    };
    BonusAddComponent.prototype.getInfluencer = function () {
        var _this = this;
        this.filter.scanning_rights = 'Yes';
        this.service.post_rqst({ 'filter': this.filter }, 'Bonus/influencerMasterList').subscribe(function (result) {
            if (result['statusCode'] == 200) {
                _this.influencerUser = result['result'];
            }
            else {
                _this.toast.errorToastr(result['statusMsg']);
            }
        });
    };
    BonusAddComponent.prototype.getAreaInfluencer = function (search) {
        var _this = this;
        if (this.form_districtlist.length == 0) {
            return;
        }
        else {
            this.service.post_rqst({ 'user_type': this.data.types, 'search': search, 'influencer_type': this.data.influencer_type, 'state': this.form_statelist, 'district': this.form_districtlist }, 'Bonus/influencerList').subscribe(function (result) {
                if (result['data']['statusCode'] == 200) {
                    _this.areaInfluencer = result['data']['result'];
                }
                else {
                    _this.toast.errorToastr(result['data']['statusMsg']);
                }
            }, function (error) {
            });
        }
    };
    BonusAddComponent.prototype.setInfluencer = function (e, id) {
        if (e.checked == true) {
            this.selInfluncer.push({ 'id': id });
        }
        else {
            var removeindex = this.areaInfluencer.findIndex(function (row) { return row.id == id; });
            this.selInfluncer.splice(removeindex, 1);
        }
    };
    BonusAddComponent.prototype.allInfluncer = function () {
        if (!this.data.Influencer) {
            this.selInfluncer = [];
            for (var i = 0; i < this.areaInfluencer.length; i++) {
                this.areaInfluencer[i].selected = false;
            }
        }
        else {
            this.selInfluncer = [];
            for (var i = 0; i < this.states.length; i++) {
                this.areaInfluencer[i].selected = true;
                this.selInfluncer.push({ 'id': this.areaInfluencer[i].id });
            }
        }
    };
    BonusAddComponent.prototype.submitDetail = function () {
        var _this = this;
        var productPoint = [];
        for (var i = 0; i < this.pointCategories_data.length; i++) {
            var element = this.pointCategories_data[i];
            productPoint.push({ 'product_id': element.id, 'product_name': element.point_category_name, 'influencer_point': element.scheme_influencer_point });
        }
        this.data.start_date = this.data.start_date ? this.service.pickerFormat(this.data.start_date) : '';
        this.data.end_date = this.data.end_date ? this.service.pickerFormat(this.data.end_date) : '';
        this.data.created_by = this.service.datauser.id;
        this.data.created_by_name = this.logined_user_data.name;
        this.data.created_by_id = this.logined_user_data.id;
        this.savingFlag = true;
        this.data.state = this.form_statelist;
        this.data.district = this.form_districtlist;
        this.data.influencer_ids = this.selInfluncer;
        this.service.post_rqst({ 'scheme': this.data, 'productPoint': productPoint, }, 'Bonus/addBonus').subscribe(function (resp) {
            if (resp['statusCode'] == 200) {
                _this.toast.successToastr(resp['statusMsg']);
                _this.rout.navigate(['/bonus-list']);
                _this.savingFlag = false;
            }
            else {
                _this.toast.errorToastr(resp['statusMsg']);
                _this.savingFlag = false;
            }
        });
    };
    BonusAddComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-bonus-add',
            template: __webpack_require__(/*! ./bonus-add.component.html */ "./src/app/bonus/bonus-add/bonus-add.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_services_DatabaseService__WEBPACK_IMPORTED_MODULE_5__["DatabaseService"], src_app_localstorage_service__WEBPACK_IMPORTED_MODULE_4__["sessionStorage"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_3__["ToastrManager"]])
    ], BonusAddComponent);
    return BonusAddComponent;
}());



/***/ }),

/***/ "./src/app/bonus/bonus-details/bonus-details.component.html":
/*!******************************************************************!*\
  !*** ./src/app/bonus/bonus-details/bonus-details.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-container\" >\r\n  <div class=\"tools-container\">\r\n    <a mat-icon-button  matTooltip=\"Back\" routerLink=\"/bonus-list\">\r\n      <i class=\"material-icons\">arrow_back</i>\r\n    </a>\r\n    <h2>Bonus Detail</h2>\r\n    \r\n  </div>\r\n  \r\n  <div class=\"container pt10 pl10 pr10 pb50\" >\r\n    <div class=\"row\"  >\r\n      <div class=\"col s12 m12 l12\" >\r\n        <div class=\"card\" *ngIf=\"!skLoading\">\r\n          <div class=\"card-head\">\r\n            <h2>Basic Details</h2>\r\n            <div class=\"left-auto\" *ngIf=\"logined_user_data.edit_bonus_points=='1'  && bonusdetail_data.status == 'Active'\">\r\n              <a class=\"sm-mat-icon-button\" mat-icon-button matTooltip=\"Edit Detail\"\r\n              (click)=\"update(bonusdetail_data, 'basic')\">\r\n              <i class=\"material-icons\">edit</i>\r\n            </a>\r\n          </div>\r\n        </div>\r\n        \r\n        <div class=\"card-body\">\r\n          \r\n          <div class=\"grid-box three mb16\">\r\n            <div class=\"block-feilds\">\r\n              <span>Title</span>\r\n              <p>{{bonusdetail_data.tittle?bonusdetail_data.tittle:'N/A'}}</p>\r\n            </div>\r\n            <div class=\"block-feilds\">\r\n              <span>User Type</span>\r\n              <p ><span style=\"margin: 3px;\">{{bonusdetail_data.types}}</span></p>\r\n            </div>\r\n            <div class=\"block-feilds\">\r\n              <span>Influencer Type</span>\r\n              <p ><span style=\"margin: 3px;\">{{bonusdetail_data.influencer_type_name}}</span></p>\r\n            </div>\r\n          </div>\r\n          <div class=\"grid-box five\">\r\n            <div class=\"block-feilds\">\r\n              <span>Date Created</span>\r\n              <p>{{bonusdetail_data.date_created | date:'d MMM y'}}</p>\r\n            </div>\r\n            \r\n            \r\n            <div class=\"block-feilds\">\r\n              <span>Created By</span>\r\n              <p>{{bonusdetail_data.created_by_name?bonusdetail_data.created_by_name:'N/A'}}</p>\r\n            </div>\r\n            \r\n            <div class=\"block-feilds\">\r\n              <span>Start Date</span>\r\n              <p>{{bonusdetail_data.start_date | date:'d MMM y'}}</p>\r\n            </div>\r\n            \r\n            \r\n            <div class=\"block-feilds\">\r\n              <span>End Date</span>\r\n              <p>{{bonusdetail_data.end_date | date:'d MMM y'}}</p>\r\n            </div>\r\n            \r\n            <div class=\"block-feilds\">\r\n              <span>Status</span>\r\n              <p class=\"Approved\"><strong>{{bonusdetail_data.status?bonusdetail_data.status:'N/A'}}</strong></p>\r\n            </div>\r\n          </div>\r\n          \r\n        </div>\r\n      </div>\r\n      \r\n      <!-- Skeleton start -->\r\n      <div class=\"card\" *ngIf=\"skLoading\">\r\n        <div class=\"sk-head\">\r\n          <h2>&nbsp;</h2>\r\n        </div>\r\n        <div class=\"card-body\">\r\n          <div class=\"grid-box\">\r\n            <div class=\"sk-box\" *ngFor=\"let row of [].constructor(10)\">\r\n              &nbsp;\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <!-- Skeleton end -->\r\n    </div>\r\n    \r\n  </div>\r\n  \r\n  \r\n  <div class=\"row\" *ngIf=\"!skLoading\">\r\n    <div class=\"col s12 m8 l8\">\r\n      <div class=\"card pb0\">\r\n        <div class=\"card-head\">\r\n          <h2>Area Wise Selection</h2>\r\n        </div>\r\n        <div class=\"card-body\">\r\n          <div class=\"row\">\r\n            <div [ngClass]=\"bonusdetail_data.types!='Retailer'? 'col s12 m4 l4':'col s12 m6 l6'\">\r\n              <div class=\"check-box\">\r\n                <div class=\"check-head\">\r\n                  <h2>State</h2>\r\n                </div>\r\n                <div class=\"check-body\">\r\n                  <mat-checkbox [disabled]=\"logined_user_data.edit_bonus_points!='1'\"  [labelPosition]=\"labelPosition\" color=\"primary\" *ngFor=\"let val of states | filterBy : {state_name : search_st}; let g=index\" [name]=\"'state'+val.state_name+g\"   [value]=\"\"  [ngModel]=\"val.state_value\" (ngModelChange)=\"getDistrictList(val.state_name,$event)\" >{{val.state_name}}</mat-checkbox>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div [ngClass]=\"bonusdetail_data.types!='Retailer'? 'col s12 m4 l4':'col s12 m6 l6'\">\r\n              <div class=\"check-box\">\r\n                <div class=\"check-head\">\r\n                  <h2>District</h2>\r\n                </div>\r\n                <div class=\"check-body\">\r\n                  <ng-container *ngFor=\"let val of districts;let h=index\">\r\n                    <mat-checkbox [labelPosition]=\"labelPosition\" class=\"fill-check\"  disabled=\"true\"  checked=\"true\" [value]=\"val.state_name\" name=\"'state_name'+h\" >{{val.state_name}}</mat-checkbox>\r\n                    <ng-container *ngFor=\"let dist of val.district | filterBy: {district_name : search_dis};let d=index\">\r\n                      <mat-checkbox [labelPosition]=\"labelPosition\" color=\"primary\" [disabled]=\"logined_user_data.edit_bonus_points!='1'\" [checked]=\"all_dis_check\"  [value]=\"dist.district_name\" [name]=\"'district_name'+val.state_name+d\" [ngModel]=\"dist.district_value\" (ngModelChange)=\"getSelDistrict(val.state_name,dist.district_name,$event); (bonusdetail_data.types != ''  && bonusdetail_data.influencer_type != '')? getAreaInfluencer() :''\">{{dist.district_name}}</mat-checkbox>\r\n                    </ng-container>\r\n                  </ng-container>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            \r\n            \r\n            \r\n            <div class=\"col s12 m4 l4\" *ngIf=\"bonusdetail_data.types!='Retailer'\">\r\n              <div class=\"check-box\">\r\n                <div class=\"check-head\">\r\n                  <mat-checkbox color=\"primary\" [labelPosition]=\"labelPosition\" [(ngModel)]=\"data.Influencer\" (change)=\"allInfluncer()\"  name=\"Influencer\"  value=\"true\">Select All</mat-checkbox>\r\n                </div>\r\n                <div class=\"check-body\">\r\n                  <ng-container *ngFor=\"let row of areaInfluencer;let d=index\">\r\n                    <mat-checkbox color=\"primary\" [labelPosition]=\"labelPosition\"  [checked]=\"row.selected\" [(ngModel)]=\"row.selected\" [name]=\"'name'+i\"  (change)=\"setInfluencer($event, row.id)\">{{row.name | titlecase}} {{row.mobile_no}}</mat-checkbox>\r\n                  </ng-container>\r\n\r\n                  <!-- <ng-container *ngFor=\"let row of areaInfluencer;let d=index\">\r\n                    <mat-checkbox color=\"primary\" [labelPosition]=\"labelPosition\"  [(ngModel)]=\"row.selected\" [name]=\"'name'+i\"  (change)=\"setInfluencer($event, row.id)\">{{row.name | titlecase}} {{row.mobile_no}}</mat-checkbox>\r\n                  </ng-container> -->\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        \r\n        <div class=\"row\">\r\n          <div class=\"col s12\">\r\n            <div class=\"text-right\">\r\n              <button *ngIf=\"logined_user_data.edit_bonus_points=='1'  && bonusdetail_data.status == 'Active'\" [ngClass]=\"{'loading': savingFlag == true}\" mat-raised-button color=\"accent\" (click)=\"areaUpdate()\" [disabled]=\"savingFlag == true\">\r\n                {{savingFlag == true ? 'Saving' : 'Update'}}\r\n              </button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      \r\n      \r\n    </div>\r\n    \r\n    <div class=\"col s12 m4 l4\">\r\n      <div class=\"card pb0\">\r\n        <div class=\"card-head\">\r\n          <h2>Product Points Details</h2>\r\n        </div>\r\n        <div class=\"card-body\">\r\n          <div class=\"cs-table left-right-10 scroll310\">\r\n            <div class=\"sticky-head border-top\">\r\n              <div class=\"table-head\">\r\n                <table>\r\n                  <tr>\r\n                    <th class=\"w50\">S.No</th>\r\n                    <th>Product Name</th>\r\n                    <th class=\"w200  text-center\">Points</th>\r\n                  </tr>\r\n                </table>\r\n              </div>\r\n            </div>\r\n            <div class=\"table-container\">\r\n              <div class=\"table-content\">\r\n                <table>\r\n                  <ng-container>\r\n                    <tr *ngFor=\"let row of bonusdetail_data.product_data let i = index\">\r\n                      <td class=\"w50\">{{i+1}}</td>\r\n                      <td>{{row.product_name}}</td>\r\n                      <td class=\"w200  text-center\">\r\n                        <strong>{{row.point}}</strong>\r\n                      </td>\r\n                    </tr>\r\n                  </ng-container>\r\n                </table>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"fab-btns\">\r\n      <button  mat-fab class=\"excel\" *ngIf=\"bonusdetail_data.types=='Influencer'\" (click)=\"upload_excel('insert', bonusdetail_data.id, bonusdetail_data.district, bonusdetail_data.types, bonusdetail_data.influencer_type);\">\r\n      <img src=\"assets/img/excel.svg\">\r\n      Upload Excel\r\n    </button>\r\n  </div>\r\n</div>\r\n</div>"

/***/ }),

/***/ "./src/app/bonus/bonus-details/bonus-details.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/bonus/bonus-details/bonus-details.component.ts ***!
  \****************************************************************/
/*! exports provided: BonusDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BonusDetailsComponent", function() { return BonusDetailsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng6-toastr-notifications */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/ng6-toastr-notifications/fesm5/ng6-toastr-notifications.js");
/* harmony import */ var src_app_dialog_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/dialog.component */ "./src/app/dialog.component.ts");
/* harmony import */ var src_app_localstorage_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/localstorage.service */ "./src/app/localstorage.service.ts");
/* harmony import */ var src_app_upload_file_modal_upload_file_modal_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/upload-file-modal/upload-file-modal.component */ "./src/app/upload-file-modal/upload-file-modal.component.ts");
/* harmony import */ var src_services_DatabaseService__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/_services/DatabaseService */ "./src/_services/DatabaseService.ts");
/* harmony import */ var _bonus_update_bonus_update_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../bonus-update/bonus-update.component */ "./src/app/bonus/bonus-update/bonus-update.component.ts");










var BonusDetailsComponent = /** @class */ (function () {
    function BonusDetailsComponent(route, toast, dialog, dialogs, session, rout, service, alrt) {
        var _this = this;
        this.route = route;
        this.toast = toast;
        this.dialog = dialog;
        this.dialogs = dialogs;
        this.session = session;
        this.rout = rout;
        this.service = service;
        this.alrt = alrt;
        this.data = {};
        this.skLoading = false;
        this.savingFlag = false;
        this.bonusdetail_data = {};
        this.districts = [];
        this.State_list = [];
        this.form_statelist = [];
        this.form_districtlist = [];
        this.assign_login_data = {};
        this.logined_user_data = {};
        this.runningScheme = [];
        this.states = [];
        this.newDistrict = [];
        this.all_dis_check = false;
        this.areaInfluencer = [];
        this.allInfluncerData = [];
        this.selInfluncer = [];
        this.assign_login_data = this.session.getSession();
        this.logined_user_data = this.assign_login_data.value.data;
        this.route.params.subscribe(function (params) {
            _this.id = params.id;
            _this.service.currentUserID = params.id;
            _this.bonus_detail();
        });
    }
    BonusDetailsComponent.prototype.ngOnInit = function () {
    };
    BonusDetailsComponent.prototype.bonus_detail = function () {
        var _this = this;
        this.skLoading = true;
        this.service.post_rqst({ 'id': this.id }, 'Bonus/bonusDetail').subscribe(function (resp) {
            if (resp['statusCode'] == 200) {
                _this.bonusdetail_data = resp['data'];
                _this.runningScheme = resp['data']['influencer_ids'];
                _this.getState();
                var statearrey = (_this.bonusdetail_data['state']).split(",");
                var len = statearrey.length;
                for (var i = 0; i < len - 1; i++) {
                    if (statearrey[i]) {
                        _this.getDistrictList(statearrey[i], true);
                    }
                }
                _this.skLoading = false;
                var distarrey = (_this.bonusdetail_data['district']).split(",");
                var len1 = distarrey.length;
                for (var i = 0; i < len1 - 1; i++) {
                    if (distarrey[i]) {
                        _this.getSelDistrict(statearrey[0], distarrey[i], true);
                        _this.storedistrict(statearrey[0], distarrey[i]);
                    }
                }
                if (_this.bonusdetail_data.types == 'Influencer') {
                    _this.getAreaInfluencer();
                }
                setTimeout(function () {
                    _this.skLoading = false;
                }, 700);
            }
            else {
                _this.toast.errorToastr(resp['statusMsg']);
            }
        });
    };
    BonusDetailsComponent.prototype.getState = function () {
        var _this = this;
        setTimeout(function () {
            _this.service.post_rqst({}, 'Bonus/getAllState').subscribe(function (result) {
                if (result['statusCode'] == 200) {
                    _this.states = result['all_state'];
                    _this.datastateupdate();
                }
                else {
                    _this.toast.errorToastr(result['statusMsg']);
                }
            }, function (error) {
            });
        }, 2000);
    };
    BonusDetailsComponent.prototype.datastateupdate = function () {
        for (var i = 0; i < this.form_statelist.length; i++) {
            for (var ji = 0; ji < this.states.length; ji++) {
                if (this.form_statelist[i].state_name == this.states[ji].state_name) {
                    this.states[ji].state_value = true;
                }
            }
        }
    };
    BonusDetailsComponent.prototype.dataupdatedistrict = function () {
        for (var i = 0; i < this.form_districtlist.length; i++) {
            for (var ji = 0; ji < this.districts.length; ji++) {
                for (var ki = 0; ki < this.districts[ji].district.length; ki++) {
                    if (this.form_districtlist[i].district_name == this.districts[ji].district[ki].district_name) {
                        this.districts[ji].district[ki].district_value = true;
                    }
                }
            }
        }
    };
    BonusDetailsComponent.prototype.districtList = function (stateinput) {
        var _this = this;
        setTimeout(function () {
            _this.service.post_rqst({ 'state_name': stateinput }, "Bonus/getAllDistrict").subscribe((function (result) {
                if (result['statusCode'] == 200) {
                    _this.newDistrict = result['all_district'];
                    _this.districts.push({ 'state_name': stateinput, 'district': _this.newDistrict });
                    _this.dataupdatedistrict();
                }
                else {
                    _this.toast.errorToastr(result['statusMsg']);
                }
            }));
        }, 3000);
    };
    BonusDetailsComponent.prototype.storestate = function (state_name) {
        if (state_name) {
            this.form_statelist.push({ state_name: state_name });
        }
    };
    BonusDetailsComponent.prototype.removeStateListData = function (state_name) {
        var x = this.form_statelist.findIndex(function (items) { return items.state_name === state_name; });
        if (x != '-1')
            this.form_statelist.splice(x, 1);
    };
    BonusDetailsComponent.prototype.storedistrict = function (stateinp, district_name) {
        if (district_name) {
            this.form_districtlist.push({ 'state_name': stateinp, 'district_name': district_name });
        }
    };
    BonusDetailsComponent.prototype.removeDistrictListData = function (district_name) {
        var x = this.form_districtlist.findIndex(function (items) { return items.district_name === district_name; });
        if (x != '-1')
            this.form_districtlist.splice(x, 1);
    };
    BonusDetailsComponent.prototype.removeDist = function (stateinput) {
        var x = this.districts.findIndex(function (items) { return items.state_name === stateinput; });
        if (x != '-1')
            this.districts.splice(x, 1);
    };
    BonusDetailsComponent.prototype.getDistrictList = function (stateinput, e) {
        if (e) {
            this.districtList(stateinput);
            this.storestate(stateinput);
        }
        else {
            this.removeDist(stateinput);
            this.removeStateListData(stateinput);
        }
    };
    BonusDetailsComponent.prototype.sel_all_dis = function (e) {
        if (e.checked) {
            this.all_dis_check = true;
            for (var i = 0; i < this.districts.length; i++) {
                for (var j = 0; j < this.districts[i]['district'].length; j++) {
                    this.storedistrict(this.districts[i]['state_name'], this.districts[i]['district'][j]['district_name']);
                }
            }
        }
        else {
            this.all_dis_check = false;
            for (var k = 0; k < this.districts.length; k++) {
                for (var l = 0; l < this.districts[k]['district'].length; l++) {
                    this.removeDistrictListData(this.districts[k]['district'][l]['district_name']);
                }
            }
        }
    };
    BonusDetailsComponent.prototype.getSelDistrict = function (stateinp, districtinput, e) {
        if (e) {
            this.storedistrict(stateinp, districtinput);
        }
        else {
            this.removeDistrictListData(districtinput);
        }
    };
    BonusDetailsComponent.prototype.getAreaInfluencer = function () {
        var _this = this;
        setTimeout(function () {
            _this.service.post_rqst({ 'user_type': _this.bonusdetail_data.types, 'scheme_id': _this.id, 'influencer_type': _this.bonusdetail_data.influencer_type, 'state': _this.form_statelist, 'district': _this.form_districtlist }, 'Bonus/influencerList').subscribe(function (result) {
                if (result['data']['statusCode'] == 200) {
                    _this.areaInfluencer = result['data']['result'];
                    setTimeout(function () {
                        _this.compareArray();
                    }, 300);
                }
                else {
                    _this.toast.errorToastr(result['data']['statusMsg']);
                }
            }, function (error) {
            });
        }, 5000);
    };
    BonusDetailsComponent.prototype.compareArray = function () {
        for (var i = 0; i < this.areaInfluencer.length; i++) {
            for (var j = 0; j < this.runningScheme.length; j++) {
                if (parseInt(this.areaInfluencer[i]['id']) == parseInt(this.runningScheme[j]['id'])) {
                    this.areaInfluencer[i]['selected'] = true;
                    this.selInfluncer.push({ 'id': this.areaInfluencer[i]['id'] });
                }
                else {
                    // this.areaInfluencer[i]['selected'] = false;
                }
            }
        }
        this.allInfluncerData.push(this.areaInfluencer);
    };
    BonusDetailsComponent.prototype.setInfluencer = function (e, id) {
        if (e.checked == true) {
            this.selInfluncer.push({ 'id': id });
        }
        else {
            var removeindex = this.areaInfluencer.findIndex(function (row) { return row.id == id; });
            this.selInfluncer.splice(removeindex, 1);
        }
    };
    BonusDetailsComponent.prototype.allInfluncer = function () {
        if (!this.data.Influencer) {
            this.selInfluncer = [];
            for (var i = 0; i < this.areaInfluencer.length; i++) {
                this.areaInfluencer[i].selected = false;
            }
        }
        else {
            this.selInfluncer = [];
            for (var i = 0; i < this.areaInfluencer.length; i++) {
                this.areaInfluencer[i].selected = true;
                this.selInfluncer.push({ 'id': this.areaInfluencer[i].id });
            }
        }
    };
    BonusDetailsComponent.prototype.edit = function () {
        this.rout.navigate(['/bonus-edit/' + this.id]);
    };
    BonusDetailsComponent.prototype.areaUpdate = function () {
        var _this = this;
        this.savingFlag = true;
        this.data.state = this.form_statelist;
        this.data.district = this.form_districtlist;
        this.data.update_id = this.id;
        this.data.created_by_id = this.logined_user_data.id;
        this.data.created_by_name = this.logined_user_data.name;
        this.data.influencer_ids = this.selInfluncer;
        this.service.post_rqst({ 'scheme': this.data, 'action': 'area' }, 'Bonus/updateBonus').subscribe(function (resp) {
            if (resp['statusCode'] == 200) {
                _this.toast.successToastr(resp['statusMsg']);
                _this.savingFlag = false;
            }
            else {
                _this.toast.errorToastr(resp['statusMsg']);
                _this.savingFlag = false;
            }
        });
    };
    BonusDetailsComponent.prototype.update = function (data, type) {
        var _this = this;
        var dialogRef = this.dialog.open(_bonus_update_bonus_update_component__WEBPACK_IMPORTED_MODULE_9__["BonusUpdateComponent"], {
            width: '1024',
            panelClass: 'cs-modal',
            data: {
                data: data,
                type: type,
            }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result == true) {
                _this.bonus_detail();
            }
        });
    };
    BonusDetailsComponent.prototype.upload_excel = function (type, id, district, userType, influencerType) {
        var _this = this;
        var dialogRef = this.alrt.open(src_app_upload_file_modal_upload_file_modal_component__WEBPACK_IMPORTED_MODULE_7__["UploadFileModalComponent"], {
            width: '500px',
            panelClass: 'cs-modal',
            disableClose: true,
            data: {
                'from': 'Bonus',
                'modal_type': type,
                'district': district,
                'user_type': userType,
                'influencer_type': influencerType,
                'bonus_id': id
            }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result != false) {
                _this.bonus_detail();
            }
        });
    };
    BonusDetailsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-bonus-details',
            template: __webpack_require__(/*! ./bonus-details.component.html */ "./src/app/bonus/bonus-details/bonus-details.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_4__["ToastrManager"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"], src_app_dialog_component__WEBPACK_IMPORTED_MODULE_5__["DialogComponent"], src_app_localstorage_service__WEBPACK_IMPORTED_MODULE_6__["sessionStorage"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], src_services_DatabaseService__WEBPACK_IMPORTED_MODULE_8__["DatabaseService"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]])
    ], BonusDetailsComponent);
    return BonusDetailsComponent;
}());



/***/ }),

/***/ "./src/app/bonus/bonus-list/bonus-list.component.html":
/*!************************************************************!*\
  !*** ./src/app/bonus/bonus-list/bonus-list.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-container\" >\r\n  \r\n  <div class=\"tools-container\">\r\n    <h2>Bonus Point Scheme</h2>\r\n    \r\n    <div class=\"left-auto left-auto df ac flex-gap-10\">\r\n      <button mat-icon-button  matTooltip=\"Refresh\" (click)=\"refresh() \">\r\n        <i class=\"material-icons\">refresh</i>\r\n      </button>\r\n      \r\n      <div class=\"pagination\" *ngIf=\"bonusList_data.length > 0\">\r\n        \r\n        <div class=\"pagination-content\">\r\n          Pages\r\n          <span>{{pagenumber}}</span>\r\n          of\r\n          <span>{{total_page}}</span>\r\n        </div>\r\n        <div class=\"page-nav\">\r\n          \r\n          <button mat-icon-button  matTooltip=\"Older\" (click)=\"pervious()\"  [disabled]=\"start == 0\">\r\n            <i class=\"material-icons\">navigate_before</i>\r\n          </button>\r\n          <button mat-icon-button  matTooltip=\"Newer\" (click)=\"nextPage()\" [disabled]=\"pagenumber == total_page \">\r\n            <i class=\"material-icons\">navigate_next</i>\r\n          </button>\r\n        </div>\r\n      </div>\r\n      \r\n      <div class=\"mat-tabbar\">\r\n        <button mat-button [ngClass]=\"active_tab == 'active' ? 'active' : ''\" (click)=\"active_tab = 'active';bonusList()\"><i class=\"material-icons\">toggle_on</i>Active ({{tabCount.active}})</button>\r\n        <button mat-button [ngClass]=\"active_tab == 'inactive' ? 'active' : ''\" (click)=\"active_tab = 'inactive';bonusList()\"><i class=\"material-icons\">toggle_off</i>Inactive ({{tabCount.inactive}})</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  \r\n  \r\n  <div class=\"container pb100\" >\r\n    <div class=\"cs-table\">\r\n      <div class=\"sticky-head\">\r\n        <div class=\"table-head\">\r\n          <table>\r\n            <tr>\r\n              <th class=\"w60\">Sr.No.</th>\r\n              <th class=\"w100\">Date Created</th>\r\n              <th class=\"w110\">Start Date</th>\r\n              <th class=\"w110\">End Date</th>\r\n              <th class=\"w150\">User Type</th>\r\n              <th>Title</th>\r\n              <th class=\"w100 text-center\" *ngIf=\"assign_login_data2.edit_bonus_points=='1'\">Status</th>\r\n            </tr>\r\n          </table>\r\n        </div>\r\n        \r\n        <div class=\"table-head border-top\">\r\n          <table>\r\n            <tr>\r\n              <th class=\"w60\">&nbsp;</th>\r\n              <th class=\"w100\">\r\n                <div class=\"th-search-acmt\">\r\n                  <mat-form-field class=\"cs-input date-column infix-bodr\">\r\n                    <input matInput [matDatepicker]=\"picker\" placeholder=\"\" name=\"date_created\" [(ngModel)]=\"filter.date_created\" (dateChange)=\"bonusList()\"  disabled>\r\n                    <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\r\n                    <mat-datepicker #picker disabled=\"false\"></mat-datepicker>\r\n                  </mat-form-field>\r\n                </div>\r\n              </th>\r\n              <th class=\"w110\">\r\n                <div class=\"th-search-acmt\">\r\n                  <mat-form-field class=\"cs-input date-column infix-bodr\">\r\n                    <input matInput [matDatepicker]=\"startDate\" placeholder=\"\" name=\"start_date\" [(ngModel)]=\"filter.start_date\" (dateChange)=\"bonusList()\" disabled>\r\n                    <mat-datepicker-toggle matSuffix [for]=\"startDate\"></mat-datepicker-toggle>\r\n                    <mat-datepicker #startDate disabled=\"false\"></mat-datepicker>\r\n                  </mat-form-field>\r\n                </div>\r\n              </th>\r\n              <th class=\"w110\">\r\n                <div class=\"th-search-acmt\">\r\n                  <mat-form-field class=\"cs-input date-column infix-bodr\">\r\n                    <input matInput [matDatepicker]=\"endDate\" placeholder=\"\" name=\"end_date\" [(ngModel)]=\"filter.end_date\" (dateChange)=\"bonusList()\" disabled>\r\n                    <mat-datepicker-toggle matSuffix [for]=\"endDate\"></mat-datepicker-toggle>\r\n                    <mat-datepicker #endDate disabled=\"false\"></mat-datepicker>\r\n                  </mat-form-field>\r\n                </div>\r\n              </th>\r\n              <th class=\"w150\">&nbsp;</th>\r\n              <th>\r\n                <div class=\"th-search-acmt\">\r\n                  <mat-form-field class=\"example-full-width cs-input select-input\">\r\n                    <input matInput placeholder=\"Search...\" type=\"text\" name=\"title\" [(ngModel)]=\"filter.title\" (keyup.enter)=\"bonusList()\">\r\n                  </mat-form-field>\r\n                </div>\r\n              </th>\r\n              <th class=\"w100 text-center\" *ngIf=\"assign_login_data2.edit_bonus_points=='1'\">&nbsp;</th>\r\n            </tr>\r\n          </table>\r\n        </div>\r\n      </div>\r\n      \r\n      <div class=\"table-container\">\r\n        <div class=\"table-content\" *ngIf=\"bonusList_data.length > 0\">\r\n          <table>\r\n            <ng-container *ngIf=\"!loader\">\r\n              <tr *ngFor=\"let row of bonusList_data; let i = index;\"  [ngClass]=\"{'Current': service.currentUserID == row.id}\" >\r\n                <td class=\"w60\">{{i + 1 + sr_no}}</td>\r\n                <td class=\"w100\">{{row.date_created | date:'d MMM y'}}</td>\r\n                <td class=\"w110\">{{row.start_date | date:'d MMM y'}}</td>\r\n                <td class=\"w110\">{{row.end_date | date:'d MMM y'}}</td>\r\n                <td class=\"w150\">\r\n                  <span>{{row.types}}</span>\r\n                </td>\r\n                <td><a class=\"link-btn\" (click)=\"service.setData(filter)\" routerLink=\"bonus-detail/{{row.id}}\">{{row.tittle | titlecase}}</a></td>\r\n                <td class=\"w100 text-center\" *ngIf=\"assign_login_data2.edit_bonus_points=='1'\">\r\n                  <div class=\"action-button\">\r\n                    <mat-slide-toggle color=\"accent\" checked=\"{{active_tab == 'active' ? 'true' :'false'}}\" (change)=\"change_status(row.id,i)\"></mat-slide-toggle>\r\n                  </div>\r\n                </td>\r\n              </tr>\r\n            </ng-container>\r\n\r\n            <ng-container *ngIf=\"loader\">\r\n              <tr class=\"sk-loading\" *ngFor=\"let row of [].constructor(10)\">\r\n                <td class=\"w60\"><div>&nbsp;</div></td>\r\n                <td class=\"w100\"><div>&nbsp;</div></td>\r\n                <td class=\"w110\"><div>&nbsp;</div></td>\r\n                <td class=\"w110\"><div>&nbsp;</div></td>\r\n                <td class=\"w150\"><div>&nbsp;</div></td>\r\n                <td><div>&nbsp;</div></td>\r\n                <td class=\"w100 text-center\" *ngIf=\"assign_login_data2.edit_bonus_points=='1'\"><div>&nbsp;</div> </td>\r\n              </tr>\r\n            </ng-container>\r\n\r\n          </table>\r\n        </div>\r\n        \r\n        <ng-container *ngIf=\"bonusList_data.length == 0 && noResult\">\r\n          <app-not-result-found></app-not-result-found>\r\n        </ng-container>\r\n      </div>\r\n    </div>\r\n    \r\n    \r\n  </div>\r\n  \r\n  \r\n  \r\n  <div class=\"fab-btns\">\r\n    \r\n    <button  mat-fab class=\"excel\" *ngIf=\"bonusList_data.length > 0 && assign_login_data2.export_bonus_points=='1'\" (click)=\"lastBtnValue('excel'); exportAsXLSX();\"  [ngClass]=\"{'pulse': fabBtnValue=='excel'}\" >\r\n      <img src=\"assets/img/excel.svg\">\r\n      Download Excel\r\n    </button>\r\n    \r\n    <button class=\"pulse\" mat-fab (click)=\"lastBtnValue('add')\" *ngIf=\"assign_login_data2.add_bonus_points=='1'\" [ngClass]=\"{'pulse': fabBtnValue=='add'}\"  color=\"primary\"  routerLink=\"bonus-add\">\r\n      <i class=\"material-icons\">add</i>\r\n      Add New\r\n    </button>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/bonus/bonus-list/bonus-list.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/bonus/bonus-list/bonus-list.component.ts ***!
  \**********************************************************/
/*! exports provided: BonusListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BonusListComponent", function() { return BonusListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_services_DatabaseService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/_services/DatabaseService */ "./src/_services/DatabaseService.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng6-toastr-notifications */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/ng6-toastr-notifications/fesm5/ng6-toastr-notifications.js");
/* harmony import */ var src_app_dialog_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/dialog.component */ "./src/app/dialog.component.ts");
/* harmony import */ var src_app_localstorage_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/localstorage.service */ "./src/app/localstorage.service.ts");







var BonusListComponent = /** @class */ (function () {
    function BonusListComponent(service, toast, alert, session) {
        this.service = service;
        this.toast = toast;
        this.alert = alert;
        this.session = session;
        this.fabBtnValue = 'add';
        this.active_tab = 'active';
        this.filter = {};
        this.count = {};
        this.loader = false;
        this.pagenumber = 1;
        this.start = 0;
        this.bonusList_data = [];
        this.assign_login_data = [];
        this.assign_login_data2 = [];
        this.noResult = false;
        this.downurl = '';
        this.downurl = service.downloadUrl;
        this.page_limit = service.pageLimit;
        this.assign_login_data = this.session.getSession();
        this.assign_login_data = this.assign_login_data.value;
        this.assign_login_data2 = this.assign_login_data.data;
        this.userData = JSON.parse(localStorage.getItem('st_user'));
        this.userId = this.userData['data']['id'];
        this.userName = this.userData['data']['name'];
    }
    BonusListComponent.prototype.ngOnInit = function () {
        this.filter = this.service.getData();
        if (this.filter.status) {
            this.active_tab = this.filter.status;
        }
        this.bonusList();
    };
    BonusListComponent.prototype.pervious = function () {
        this.start = this.start - this.page_limit;
        this.bonusList();
    };
    BonusListComponent.prototype.nextPage = function () {
        this.start = this.start + this.page_limit;
        this.bonusList();
    };
    BonusListComponent.prototype.bonusList = function () {
        var _this = this;
        this.loader = true;
        if (this.pagenumber > this.total_page) {
            this.pagenumber = this.total_page;
        }
        if (this.start < 0) {
            this.start = 0;
        }
        if (this.filter.date_created) {
            this.filter.date_created = moment__WEBPACK_IMPORTED_MODULE_3__(this.filter.date_created).format('YYYY-MM-DD');
        }
        if (this.filter.end_date) {
            this.filter.end_date = moment__WEBPACK_IMPORTED_MODULE_3__(this.filter.end_date).format('YYYY-MM-DD');
        }
        if (this.filter.start_date) {
            this.filter.start_date = moment__WEBPACK_IMPORTED_MODULE_3__(this.filter.start_date).format('YYYY-MM-DD');
        }
        this.filter.status = this.active_tab;
        this.service.post_rqst({ 'filter': this.filter, 'start': this.start, 'pagelimit': this.page_limit, 'status': this.active_tab }, 'Bonus/bonusList').subscribe(function (resp) {
            if (resp['data']['statusCode'] == 200) {
                _this.bonusList_data = resp['data']['result'];
                _this.tabCount = resp['data']['tabCount'];
                _this.pageCount = resp['data']['count'];
                _this.loader = false;
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
                setTimeout(function () {
                    if (_this.bonusList_data.length == 0) {
                        _this.noResult = true;
                    }
                }, 500);
            }
            else {
                _this.toast.errorToastr(resp['data']['statusMsg']);
            }
        });
    };
    BonusListComponent.prototype.lastBtnValue = function (value) {
        this.fabBtnValue = value;
    };
    BonusListComponent.prototype.refresh = function () {
        this.filter = {};
        this.service.setData(this.filter);
        this.service.currentUserID = '';
        this.bonusList();
    };
    BonusListComponent.prototype.change_status = function (id, index) {
        var _this = this;
        this.alert.confirm("You Want To Change Status !").then(function (result) {
            if (result) {
                if (_this.bonusList_data[index].status == "Active") {
                    _this.bonusList_data[index].status = "Inactive";
                }
                else {
                    _this.bonusList_data[index].status = "Active";
                }
                var status_1 = _this.bonusList_data[index].status;
                _this.service.post_rqst({ 'uid': _this.userId, 'id': id, 'status': status_1 }, 'Bonus/bonusStatusUpdate').subscribe(function (resp) {
                    if (resp['statusCode'] == 200) {
                        _this.toast.successToastr(resp['statusMsg']);
                        _this.bonusList();
                    }
                    else {
                        _this.toast.errorToastr(resp['statusMsg']);
                    }
                }, function (error) {
                });
            }
        });
    };
    BonusListComponent.prototype.exportAsXLSX = function () {
        var _this = this;
        this.loader = true;
        this.service.post_rqst({ 'filter': this.filter, 'start': this.start, 'pagelimit': this.page_limit, 'status': this.active_tab }, 'Excel/bonus_list').subscribe(function (result) {
            if (result['msg'] == true) {
                _this.loader = false;
                window.open(_this.downurl + result['filename']);
                _this.bonusList();
            }
            else {
                _this.loader = false;
            }
        }, function (err) {
            _this.loader = false;
        });
    };
    BonusListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-bonus-list',
            template: __webpack_require__(/*! ./bonus-list.component.html */ "./src/app/bonus/bonus-list/bonus-list.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_services_DatabaseService__WEBPACK_IMPORTED_MODULE_2__["DatabaseService"], ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_4__["ToastrManager"], src_app_dialog_component__WEBPACK_IMPORTED_MODULE_5__["DialogComponent"], src_app_localstorage_service__WEBPACK_IMPORTED_MODULE_6__["sessionStorage"]])
    ], BonusListComponent);
    return BonusListComponent;
}());



/***/ }),

/***/ "./src/app/bonus/bonus-module/bonus.module.ts":
/*!****************************************************!*\
  !*** ./src/app/bonus/bonus-module/bonus.module.ts ***!
  \****************************************************/
/*! exports provided: BonusModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BonusModule", function() { return BonusModule; });
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
/* harmony import */ var _bonus_add_bonus_add_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../bonus-add/bonus-add.component */ "./src/app/bonus/bonus-add/bonus-add.component.ts");
/* harmony import */ var _bonus_details_bonus_details_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../bonus-details/bonus-details.component */ "./src/app/bonus/bonus-details/bonus-details.component.ts");
/* harmony import */ var _bonus_list_bonus_list_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../bonus-list/bonus-list.component */ "./src/app/bonus/bonus-list/bonus-list.component.ts");
/* harmony import */ var _bonus_update_bonus_update_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../bonus-update/bonus-update.component */ "./src/app/bonus/bonus-update/bonus-update.component.ts");
















var bonusRoutes = [
    {
        path: "", children: [
            { path: '', component: _bonus_list_bonus_list_component__WEBPACK_IMPORTED_MODULE_14__["BonusListComponent"], canActivate: [src_app_auth_component_guard__WEBPACK_IMPORTED_MODULE_10__["AuthComponentGuard"]], data: { expectedRole: ['1'] } },
            { path: "bonus-add", component: _bonus_add_bonus_add_component__WEBPACK_IMPORTED_MODULE_12__["BonusAddComponent"], canActivate: [src_app_auth_component_guard__WEBPACK_IMPORTED_MODULE_10__["AuthComponentGuard"]], data: { expectedRole: ['1'] } },
            { path: "bonus-edit/:id", component: _bonus_add_bonus_add_component__WEBPACK_IMPORTED_MODULE_12__["BonusAddComponent"], canActivate: [src_app_auth_component_guard__WEBPACK_IMPORTED_MODULE_10__["AuthComponentGuard"]], data: { expectedRole: ['1'] } },
            { path: "bonus-detail/:id", component: _bonus_details_bonus_details_component__WEBPACK_IMPORTED_MODULE_13__["BonusDetailsComponent"], canActivate: [src_app_auth_component_guard__WEBPACK_IMPORTED_MODULE_10__["AuthComponentGuard"]], data: { expectedRole: ['1'] } },
        ]
    },
];
var BonusModule = /** @class */ (function () {
    function BonusModule() {
    }
    BonusModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_bonus_list_bonus_list_component__WEBPACK_IMPORTED_MODULE_14__["BonusListComponent"], _bonus_add_bonus_add_component__WEBPACK_IMPORTED_MODULE_12__["BonusAddComponent"], _bonus_details_bonus_details_component__WEBPACK_IMPORTED_MODULE_13__["BonusDetailsComponent"], _bonus_update_bonus_update_component__WEBPACK_IMPORTED_MODULE_15__["BonusUpdateComponent"],],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild(bonusRoutes),
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
                _bonus_update_bonus_update_component__WEBPACK_IMPORTED_MODULE_15__["BonusUpdateComponent"]
            ]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], BonusModule);
    return BonusModule;
}());



/***/ }),

/***/ "./src/app/bonus/bonus-update/bonus-update.component.html":
/*!****************************************************************!*\
  !*** ./src/app/bonus/bonus-update/bonus-update.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<!-- Add Segment Modal Start Here -->\r\n\r\n<div class=\"edit-modal\" *ngIf=\"modelType =='basic'\">\r\n  <p class=\"heading\">Update Bonus Details</p>\r\n  <form #f=\"ngForm\" (ngSubmit)=\" f.valid && submitDetail()\">\r\n    \r\n    <div class=\"row\">\r\n      <div class=\"col s12 m6 l6\">\r\n        <div class=\"cs-form\">\r\n          <div class=\"row\">\r\n            <!-- <div class=\"col s12 m6 l6\" >\r\n              <mat-form-field appearance=\"outline\">\r\n                <mat-label>User Type</mat-label>\r\n                <mat-select  name=\"types\" [(ngModel)]=\"formData.types\" #types=\"ngModel\" (selectionChange)=\"blankArray(); pointCategory_data(formData.types == 'Retailer' ? 'Master Box' : 'Item Box')\" >\r\n                  <mat-option  value=\"Retailer\">Retailer</mat-option>\r\n                  <mat-option  value=\"Influencer\">Influencer</mat-option>\r\n                </mat-select>\r\n              </mat-form-field>\r\n              <div class=\"alert alert-danger\" *ngIf=\"types.touched || f.submitted\">\r\n                <p *ngIf=\"types.errors?.required\">This field is required</p>\r\n              </div>\r\n            </div> -->\r\n            \r\n            \r\n            <!-- <div class=\"col s12 m6 l6\" *ngIf=\"formData.types == 'Influencer'\">\r\n              <mat-form-field appearance=\"outline\">\r\n                <mat-label>Influencer Type</mat-label>\r\n                <mat-select  name=\"influencer_type\" [(ngModel)]=\"formData.influencer_type\" #influencer_type=\"ngModel\" >\r\n                  <mat-option *ngFor=\"let row of influencerUser\"  value=\"{{row.type}}\">{{row.module_name}}</mat-option>\r\n                </mat-select>\r\n              </mat-form-field>\r\n              <div class=\"alert alert-danger\" *ngIf=\"influencer_type.touched || f.submitted\">\r\n                <p *ngIf=\"influencer_type.errors?.required\">This field is required</p>\r\n              </div>\r\n            </div> -->\r\n            \r\n          </div>\r\n          <div class=\"row\">\r\n            <div class=\"col s12 m6 l6\">\r\n              <mat-form-field  appearance=\"outline\">\r\n                <mat-label>Title</mat-label>\r\n                <input matInput placeholder=\"Type Here ...\" name=\"tittle\" #tittle=\"ngModel\" [(ngModel)]=\"formData.tittle\">\r\n              </mat-form-field>\r\n              <div class=\"alert alert-danger\" *ngIf=\"tittle.touched || f.submitted\">\r\n                <p *ngIf=\"tittle.errors?.required\">This field is required</p>\r\n              </div>\r\n            </div>\r\n            <div class=\"col s12 m6 l6\">\r\n              <mat-form-field  appearance=\"outline\">\r\n                <mat-label>Start Date</mat-label>\r\n                <input name=\"start_date\" matInput [matDatepicker]=\"pickers\" placeholder=\"\" [min]=\"minDate\" #start_date=\"ngModel\" readonly [(ngModel)]=\"formData.start_date\">\r\n                <mat-datepicker-toggle matSuffix [for]=\"pickers\"></mat-datepicker-toggle>\r\n                <mat-datepicker #pickers></mat-datepicker>\r\n              </mat-form-field>\r\n              <div class=\"alert alert-danger\" *ngIf=\"start_date.touched || f.submitted\">\r\n                <p *ngIf=\"start_date.errors?.required\">This field is required</p>\r\n              </div>\r\n            </div>\r\n            \r\n            <div class=\"col s12 m6 l6\">\r\n              <mat-form-field  appearance=\"outline\">\r\n                <mat-label>End Date</mat-label>\r\n                <input name=\"end_date\" matInput [matDatepicker]=\"picker1\" placeholder=\"\" [min]=\"formData.start_date\" #end_date=\"ngModel\" readonly [(ngModel)]=\"formData.end_date\">\r\n                <mat-datepicker-toggle matSuffix [for]=\"picker1\"></mat-datepicker-toggle>\r\n                <mat-datepicker #picker1></mat-datepicker>\r\n              </mat-form-field>\r\n              <div class=\"alert alert-danger\" *ngIf=\"end_date.touched || f.submitted\">\r\n                <p *ngIf=\"end_date.errors?.required\">This field is required</p>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col s12 m6 l6\">\r\n        <div class=\"card pb0\" *ngIf=\"formData.types\">\r\n          <div class=\"card-head\">\r\n            <h2>Update Product Points</h2>\r\n          </div>\r\n          <div class=\"card-body\">\r\n            <div class=\"cs-table left-right-10 scroll310\">\r\n              <div class=\"sticky-head border-top\">\r\n                <div class=\"table-head\">\r\n                  <table>\r\n                    <tr>\r\n                      <th class=\"w50\">S.No</th>\r\n                      <th>Product Name</th>\r\n                      <th class=\"w200  text-center\">Points</th>\r\n                    </tr>\r\n                  </table>\r\n                </div>\r\n              </div>\r\n              <div class=\"table-container\">\r\n                <div class=\"table-content\">\r\n                  <table>\r\n                    <ng-container>\r\n                      <tr *ngFor=\"let row of newProdcut[0]; let i = index\">\r\n                        <td class=\"w50\">{{i+1}}</td>\r\n                        <td>{{row.point_category_name}}</td>\r\n                        <td class=\"w200  text-center\">\r\n                          <div class=\"th-search-acmt\">\r\n                            <mat-form-field>\r\n                              <input type=\"text\" matInput class=\"cs-text-input text-center\" placeholder=\"Enter Points\" [name]=\"'scheme_influencer_point'+i\"  [(ngModel)] = \"row.scheme_influencer_point\"  onkeypress=\"return event.charCode>=48 && event.charCode<=57\">\r\n                              </mat-form-field>\r\n                            </div>\r\n                          </td>\r\n                        </tr>\r\n                      </ng-container>\r\n                    </table>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div mat-dialog-actions>\r\n        <button mat-stroked-button color=\"warn\" [mat-dialog-close]=\"false\">Cancel</button>\r\n        <button [ngClass]=\"{'loading': savingFlag == true}\" mat-raised-button color=\"accent\" type=\"submit\" [disabled]=\"savingFlag == true\">{{savingFlag == true ? 'Saving' : 'Update'}}</button>\r\n      </div>\r\n    </form>\r\n  </div>\r\n  \r\n  <!-- Add Segment Modal End Here -->"

/***/ }),

/***/ "./src/app/bonus/bonus-update/bonus-update.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/bonus/bonus-update/bonus-update.component.ts ***!
  \**************************************************************/
/*! exports provided: BonusUpdateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BonusUpdateComponent", function() { return BonusUpdateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_services_DatabaseService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/_services/DatabaseService */ "./src/_services/DatabaseService.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var src_app_localstorage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/localstorage.service */ "./src/app/localstorage.service.ts");
/* harmony import */ var ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng6-toastr-notifications */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/ng6-toastr-notifications/fesm5/ng6-toastr-notifications.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! moment */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_6__);







var BonusUpdateComponent = /** @class */ (function () {
    function BonusUpdateComponent(data, dialog, service, session, toast, dialogRef) {
        this.data = data;
        this.dialog = dialog;
        this.service = service;
        this.session = session;
        this.toast = toast;
        this.dialogRef = dialogRef;
        this.savingFlag = false;
        this.segment = {};
        this.category = {};
        this.login = {};
        this.formData = {};
        this.assign_login_data = {};
        this.logined_user_data = {};
        this.filter = {};
        this.pointCategories_data = [];
        this.lastPageProduct = [];
        this.influencerUser = [];
        this.newProdcut = [];
        this.getInfluencer();
        this.minDate = new Date();
        this.userData = JSON.parse(localStorage.getItem('st_user'));
        this.modelType = data['type'];
        this.formData = data['data'];
        this.lastPageProduct = this.formData['product_data'];
        if (this.formData.types == 'Retailer') {
            this.pointCategory_data('Master Box');
        }
        else {
            this.pointCategory_data('Item Box');
        }
        this.assign_login_data = this.session.getSession();
        this.logined_user_data = this.assign_login_data.value.data;
    }
    BonusUpdateComponent.prototype.ngOnInit = function () {
        this.login = JSON.parse(localStorage.getItem('login'));
    };
    BonusUpdateComponent.prototype.blankArray = function () {
        this.newProdcut = [];
    };
    BonusUpdateComponent.prototype.pointCategory_data = function (status) {
        var _this = this;
        this.filter.point_type = status;
        this.service.post_rqst({ 'filter': this.filter }, 'Master/pointCategoryMasterList').subscribe(function (resp) {
            _this.pointCategories_data = resp['point_category_list'];
            _this.compareArray();
        });
    };
    BonusUpdateComponent.prototype.compareArray = function () {
        for (var i = 0; i < this.pointCategories_data.length; i++) {
            for (var j = 0; j < this.lastPageProduct.length; j++) {
                if (this.pointCategories_data[i]['id'] == this.lastPageProduct[j]['product_id']) {
                    this.pointCategories_data[i]['scheme_influencer_point'] = this.lastPageProduct[j]['point'];
                }
            }
        }
        this.newProdcut.push(this.pointCategories_data);
    };
    BonusUpdateComponent.prototype.getInfluencer = function () {
        var _this = this;
        this.filter.scanning_rights = 'Yes';
        this.service.post_rqst({ 'filter': this.filter }, 'Bonus/influencerMasterList').subscribe(function (resp) {
            _this.influencerUser = resp['result'];
        });
    };
    BonusUpdateComponent.prototype.selInfluencer = function (typeid) {
        var Index = this.influencerUser.findIndex(function (row) { return row.id == typeid; });
        if (Index != -1) {
            this.formData.influencer_type = this.influencerUser[Index].type;
        }
        else {
        }
    };
    BonusUpdateComponent.prototype.submitDetail = function () {
        var _this = this;
        var productPoint = [];
        for (var i = 0; i < this.pointCategories_data.length; i++) {
            var element = this.pointCategories_data[i];
            productPoint.push({ 'product_id': element.id, 'product_name': element.point_category_name, 'influencer_point': element.scheme_influencer_point });
        }
        this.data.types = this.formData.types;
        if (this.formData.types == 'Influencer') {
            this.data.influencer_type = this.formData.influencer_type;
        }
        this.data.update_id = this.formData.id;
        this.data.tittle = this.formData.tittle;
        this.data.types = this.formData.types;
        this.data.start_date = this.formData.start_date;
        this.data.end_date = this.formData.end_date;
        this.data.created_by_id = this.logined_user_data.id;
        this.data.created_by_name = this.logined_user_data.name;
        if (this.formData.start_date) {
            this.formData.start_date = moment__WEBPACK_IMPORTED_MODULE_6__(this.formData.start_date).format('YYYY-MM-DD');
            this.data.start_date = this.formData.start_date;
        }
        if (this.formData.end_date) {
            this.formData.end_date = moment__WEBPACK_IMPORTED_MODULE_6__(this.formData.end_date).format('YYYY-MM-DD');
            this.data.end_date = this.formData.end_date;
        }
        this.savingFlag = true;
        this.service.post_rqst({ 'scheme': this.data, 'productPoint': productPoint, 'action': 'basic' }, 'Bonus/updateBonus').subscribe(function (resp) {
            if (resp['statusCode'] == 200) {
                _this.toast.successToastr(resp['statusMsg']);
                _this.savingFlag = false;
                _this.dialogRef.close(true);
            }
            else {
                _this.toast.errorToastr(resp['statusMsg']);
                _this.savingFlag = false;
            }
        });
    };
    BonusUpdateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-bonus-update',
            template: __webpack_require__(/*! ./bonus-update.component.html */ "./src/app/bonus/bonus-update/bonus-update.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object, _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"], src_services_DatabaseService__WEBPACK_IMPORTED_MODULE_2__["DatabaseService"], src_app_localstorage_service__WEBPACK_IMPORTED_MODULE_4__["sessionStorage"], ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_5__["ToastrManager"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"]])
    ], BonusUpdateComponent);
    return BonusUpdateComponent;
}());



/***/ })

}]);