(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["service-invoice-service-invoice-module-service-invoice-module-module"],{

/***/ "./src/app/service-invoice/service-invoice-add/service-invoice-add.component.html":
/*!****************************************************************************************!*\
  !*** ./src/app/service-invoice/service-invoice-add/service-invoice-add.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-container\">\r\n  <app-loader *ngIf=\"loader\"></app-loader>\r\n  <div class=\"tools-container\">\r\n    <a mat-icon-button matTooltip=\"Back\" (click)=\"back()\">\r\n      <i class=\"material-icons\">arrow_back</i>\r\n    </a>\r\n    <h2>ADD INVOICE</h2>\r\n  </div>\r\n  <div class=\"container pt10 pl10 pr10 pb50\">\r\n    <form #f=\"ngForm\" (ngSubmit)=\"f.valid && addInvoice()\">\r\n      <div class=\"row\">\r\n        <div class=\"col s12\">\r\n          <div class=\"card pb0\">\r\n            <div class=\"card-body cs-form\">\r\n              <div class=\"row\">\r\n                <div class=\"col s4\">\r\n                  <mat-form-field appearance=\"outline\" [ngClass]=\"{'has-error' : tech_id.invalid } \">\r\n                    <mat-label>Select Technician</mat-label>\r\n                    <mat-select name=\"tech_id\" [(ngModel)]=\"technicianData.tech_id\" #tech_id=\"ngModel\"\r\n                    (selectionChange)=\"getCarpenterInfo(technicianData.tech_id)\" required>\r\n                    <mat-option>\r\n                      <ngx-mat-select-search noEntriesFoundLabel=\"'no data found'\" placeholderLabel=\"Search..\"\r\n                      (keyup)=\"assign_engineerget($event.target.value)\"></ngx-mat-select-search>\r\n                    </mat-option>\r\n                    <mat-option *ngFor=\"let row of engineerList\" [value]=\"row.id\">{{row.name |\r\n                      titlecase}}-{{row.mobile_no}}</mat-option>\r\n                    </mat-select>\r\n                  </mat-form-field>\r\n                  <div class=\"alert alert-danger\" *ngIf=\"f.submitted && tech_id?.invalid \">\r\n                    This field is required\r\n                  </div>\r\n                </div>\r\n                <div class=\"col s4\">\r\n                  <mat-form-field appearance=\"outline\" [ngClass]=\"{'has-error' : complaint_data.invalid } \" *ngIf=\"technicianData.tech_id\">\r\n                    <mat-label>Select Complaint</mat-label>\r\n                    <mat-select name=\"complaint_data\" [(ngModel)]=\"technicianData.complaint_data\" #complaint_data=\"ngModel\" required>\r\n                    <mat-option>\r\n                      <ngx-mat-select-search noEntriesFoundLabel=\"'no data found'\" placeholderLabel=\"Search..\"\r\n                      (keyup)=\"getComplantList($event.target.value,'technicianData.tech_id')\"></ngx-mat-select-search>\r\n                    </mat-option>\r\n                    <mat-option *ngFor=\"let row of complaintList\" [value]=\"row\">{{row.complain_no}}</mat-option>\r\n                  </mat-select>\r\n                </mat-form-field>\r\n                <!-- <div class=\"alert alert-danger\" *ngIf=\"f.submitted && complaint_data?.invalid \">\r\n                  This field is required\r\n                </div> -->\r\n              </div>\r\n              <div class=\"col s4\">\r\n                <mat-form-field appearance=\"outline\" [ngClass]=\"{'has-error' : type.invalid } \" *ngIf=\"technicianData.tech_id\">\r\n                  <mat-label>Select Invoice Type</mat-label>\r\n                  <mat-select name=\"type\" [(ngModel)]=\"technicianData.type\" #type=\"ngModel\" required>\r\n                    <mat-option value=\"Service\">Service</mat-option>\r\n                    <mat-option value=\"Spare Part\">Spare Part</mat-option>\r\n                  </mat-select>\r\n                </mat-form-field>\r\n                <!-- <div class=\"alert alert-danger\" *ngIf=\"f.submitted && type?.invalid \">\r\n                  This field is required\r\n                </div> -->\r\n              </div>\r\n            </div>\r\n            <div class=\"row\">\r\n              <div class=\"col s4\" [ngClass]=\"{'has-error' : amount.invalid } \" *ngIf=\"technicianData.type == 'Service'\">\r\n                <mat-form-field appearance=\"outline\" [ngClass]=\"{'has-error' : amount?.invalid } \">\r\n                  <mat-label>Amount</mat-label>\r\n                  <input matInput placeholder=\"Type Here ...\" name=\"amount\" #amount=\"ngModel\"\r\n                  [(ngModel)]=\"technicianData.amount\" onkeypress=\"return event.charCode>=48 && event.charCode<=57\"\r\n                  (ngModelChange)=\"calculationOfTotalService()\" required>\r\n                </mat-form-field>\r\n                <div class=\"alert alert-danger\" *ngIf=\"f.submitted && amount?.invalid \">\r\n                  This field is required\r\n                </div>\r\n              </div>\r\n              <div class=\"col s4\" [ngClass]=\"{'has-error' : discount.invalid } \" *ngIf=\"technicianData.type == 'Service'\">\r\n                <mat-form-field appearance=\"outline\" [ngClass]=\"{'has-error' : discount?.invalid } \">\r\n                  <mat-label>Discount In Rs.</mat-label>\r\n                  <input matInput placeholder=\"Type Here ...\" name=\"discount\" #discount=\"ngModel\"\r\n                  [(ngModel)]=\"technicianData.discount\" onkeypress=\"return event.charCode>=48 && event.charCode<=57\"\r\n                  (ngModelChange)=\"calculationOfTotalService()\" required>\r\n                </mat-form-field>\r\n                <div class=\"alert alert-danger\" *ngIf=\"f.submitted && discount?.invalid \">\r\n                  This field is required\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div mat-dialog-content *ngIf=\"technicianData.type == 'Spare Part'\">\r\n              <div class=\"card-head\">\r\n                <h2>Part Information</h2>\r\n              </div>\r\n              <div class=\"cs-form\">\r\n                <div class=\"row\">\r\n                  <div class=\"col s4\">\r\n                    <mat-form-field appearance=\"outline\" [ngClass]=\"{'has-error' : id.invalid } \">\r\n                      <mat-label>Select Part</mat-label>\r\n                      <mat-select name=\"id\" #id=\"ngModel\" [(ngModel)]=\"formData.id\"\r\n                      (selectionChange)=\"get_spare_detail(formData.id)\">\r\n                      <mat-option>\r\n                        <ngx-mat-select-search noEntriesFoundLabel=\"'no data found'\" placeholderLabel=\"Search..\"\r\n                        (keyup)=\"getSparePartList($event.target.value)\"></ngx-mat-select-search>\r\n                      </mat-option>\r\n                      <mat-option *ngFor=\"let row of spareList\" value=\"{{row.id}}\" color=\"accent\">{{row.part_name |\r\n                        titlecase}}-{{row.part_no | titlecase}}</mat-option>\r\n                      </mat-select>\r\n                    </mat-form-field>\r\n                  </div>\r\n                  <div class=\"col s4\">\r\n                    <mat-form-field appearance=\"outline\" [ngClass]=\"{'has-error' : qty?.invalid } \">\r\n                      <mat-label>Qty</mat-label>\r\n                      <input matInput placeholder=\"Type Here ...\" name=\"qty\" #qty=\"ngModel\" [(ngModel)]=\"formData.qty\"\r\n                      onkeypress=\"return event.charCode>=48 && event.charCode<=57\" (ngModelChange)=\"calculation()\">\r\n                    </mat-form-field>\r\n                  </div>\r\n                  <div class=\"col s4\">\r\n                    <mat-form-field appearance=\"outline\" [ngClass]=\"{'has-error' : mrp?.invalid } \">\r\n                      <mat-label>Mrp</mat-label>\r\n                      <input matInput placeholder=\"Type Here ...\" name=\"mrp\" #mrp=\"ngModel\"\r\n                      [(ngModel)]=\"formData.mrp\" onkeypress=\"return event.charCode>=48 && event.charCode<=57\" readonly>\r\n                    </mat-form-field>\r\n                  </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                  <div class=\"col s4\">\r\n                    <mat-form-field appearance=\"outline\" [ngClass]=\"{'has-error' : discount.invalid } \">\r\n                      <mat-label>Discount(%)</mat-label>\r\n                      <input matInput placeholder=\"Type Here ...\" name=\"discount\" #discount=\"ngModel\"\r\n                      [(ngModel)]=\"formData.discount\" onkeypress=\"return event.charCode>=48 && event.charCode<=57\" (ngModelChange)=\"calculation()\">\r\n                    </mat-form-field>\r\n                  </div>\r\n                  <div class=\"col s4\" *ngIf=\"spareList.length\">\r\n                    <mat-form-field appearance=\"outline\" [ngClass]=\"{'has-error' : total.invalid } \">\r\n                      <mat-label>Total</mat-label>\r\n                      <input matInput placeholder=\"Type Here ...\" name=\"total\" #total=\"ngModel\"\r\n                      [(ngModel)]=\"formData.total\" onkeypress=\"return event.charCode>=48 && event.charCode<=57\" readonly>\r\n                    </mat-form-field>\r\n                  </div>\r\n                  <div class=\"text-right\" *ngIf=\"spareList.length && formData.qty  && formData.mrp && formData.total\">\r\n                    <a style=\"margin: 7px;\" mat-raised-button color=\"accent\" type=\"text\" (click)=\"addSpare()\">Add To List</a>\r\n                  </div>\r\n                </div>\r\n                <div class=\"row\" *ngIf=\"add_list.length > 0 \">\r\n                  <div class=\"col s12 m12 l12\">\r\n                    <div class=\"card\">\r\n                      <div class=\"card-head\">\r\n                        <h2> Spare Part List</h2>\r\n                      </div>\r\n                      <div class=\"card-body\">\r\n                        <div class=\"cs-table left-right-10\">\r\n                          <div class=\" border-top\">\r\n                            <div class=\"table-head\">\r\n                              <table>\r\n                                <tr>\r\n                                  <th class=\"w30 text-center \">Sr.No</th>\r\n                                  <th class=\"w100\">Part Details</th>\r\n                                  <th class=\"w60 text-right\">Mrp</th>\r\n                                  <th class=\"w60 text-right\">Qty</th>\r\n                                  <th class=\"w60 text-right\">Discount(%)</th>\r\n                                  <th class=\"w100 text-right\">Total</th>\r\n                                  <th class=\"w30 text-center\">Action</th>\r\n                                </tr>\r\n                              </table>\r\n                            </div>\r\n                          </div>\r\n                          \r\n                          <div class=\"table-container pb0\">\r\n                            <div class=\"table-content none-shadow\">\r\n                              <table>\r\n                                <tr *ngFor=\"let row of add_list;let i=index;\">\r\n                                  <td class=\"w30 text-center\">{{i+1}}</td>\r\n                                  <td class=\"w100\">{{row.part_name}}-{{row.part_no |titlecase}}</td>\r\n                                  <td class=\"w60 text-right\">{{row.mrp}}</td>\r\n                                  <td class=\"w60 text-right\">{{row.qty}}</td>\r\n                                  <td class=\"w60 text-right\">{{row.discount}}</td>\r\n                                  <td class=\"w100 text-right\">{{row.total | number:'1.2-2'}}</td>\r\n                                  <td class=\"w30 text-center\">\r\n                                    <div class=\"action-button\">\r\n                                      <button mat-icon-button matTooltip=\"Delete\" (click)=\"delete(i)\">\r\n                                        <i class=\"material-icons del\">delete</i>\r\n                                      </button>\r\n                                    </div>\r\n                                  </td>\r\n                                </tr>\r\n                              </table>\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div mat-dialog-content *ngIf=\"technicianData.type == 'Spare Part' && add_list.length > 0 \">\r\n              <div class=\"card-head\">\r\n                <h2>Invoice Info</h2>\r\n              </div>\r\n              <div class=\"row\">\r\n                <div class=\"col s6 offset-s6\">\r\n                  <div class=\"invoice-table\">\r\n                    <table>\r\n                      <tr>\r\n                        <td>Sub Total</td>\r\n                        <th>{{technicianData.sub_total | number:'1.2-2'}}</th>\r\n                      </tr>\r\n                      <tr>\r\n                        <td>Discount</td>\r\n                        <th>{{technicianData.discount | number:'1.2-2'}}</th>\r\n                      </tr>\r\n                      <tr>\r\n                        <td>GST</td>\r\n                        <th>{{technicianData.gst_amount | number:'1.2-2'}}</th>\r\n                      </tr>\r\n                      <tr>\r\n                        <td>Total</td>\r\n                        <th>{{technicianData.total | number:'1.2-2'}}</th>\r\n                      </tr>\r\n                    </table>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div mat-dialog-content *ngIf=\"technicianData.type == 'Service'\">\r\n              <div class=\"card-head\">\r\n                <h2>Invoice Info</h2>\r\n              </div>\r\n              <div class=\"row\">\r\n                <div class=\"col s6 offset-s6\">\r\n                  <div class=\"invoice-table\">\r\n                    <table>\r\n                      <tr>\r\n                        <td>Sub Total</td>\r\n                        <th>{{technicianData.sub_total | number:'1.2-2'}}</th>\r\n                      </tr>\r\n                      <tr>\r\n                        <td>Discounted Amount</td>\r\n                        <th>{{technicianData.discount | number:'1.2-2'}}</th>\r\n                      </tr>\r\n                      <tr>\r\n                        <td>GST</td>\r\n                        <th>{{technicianData.gst_amount | number:'1.2-2'}}</th>\r\n                      </tr>\r\n                      <tr>\r\n                        <td>Total</td>\r\n                        <th>{{technicianData.total | number:'1.2-2'}}</th>\r\n                      </tr>\r\n                    </table>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"col s12\">\r\n        <div class=\"text-right\">\r\n          <button [ngClass]=\"{'loading': savingFlag == true}\" mat-raised-button color=\"accent\" type=\"submit\"\r\n          [disabled]=\"savingFlag == true \">{{savingFlag  == true ? 'Saving' : 'Save'}}\r\n          </button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </form>\r\n</div>\r\n</div>"

/***/ }),

/***/ "./src/app/service-invoice/service-invoice-add/service-invoice-add.component.scss":
/*!****************************************************************************************!*\
  !*** ./src/app/service-invoice/service-invoice-add/service-invoice-add.component.scss ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/service-invoice/service-invoice-add/service-invoice-add.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/service-invoice/service-invoice-add/service-invoice-add.component.ts ***!
  \**************************************************************************************/
/*! exports provided: ServiceInvoiceAddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceInvoiceAddComponent", function() { return ServiceInvoiceAddComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng6-toastr-notifications */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/ng6-toastr-notifications/fesm5/ng6-toastr-notifications.js");
/* harmony import */ var src_services_DatabaseService__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/_services/DatabaseService */ "./src/_services/DatabaseService.ts");
/* harmony import */ var src_app_dialog_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/dialog.component */ "./src/app/dialog.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/common/fesm5/common.js");








var ServiceInvoiceAddComponent = /** @class */ (function () {
    function ServiceInvoiceAddComponent(service, rout, toast, route, dialog, dialog2, location) {
        this.service = service;
        this.rout = rout;
        this.toast = toast;
        this.route = route;
        this.dialog = dialog;
        this.dialog2 = dialog2;
        this.location = location;
        this.technicianData = {};
        this.formData = {};
        this.loader = false;
        this.engineerList = [];
        this.complaintList = [];
        this.add_list = [];
        this.spareList = [];
        this.savingFlag = false;
        this.filter = {};
        this.addToListButton = true;
        this.technicianData.discount = 0;
        this.formData.discount = 0;
    }
    ServiceInvoiceAddComponent.prototype.ngOnInit = function () {
        this.assign_engineerget('');
        this.getSparePartList('');
    };
    ServiceInvoiceAddComponent.prototype.back = function () {
        this.location.back();
    };
    ServiceInvoiceAddComponent.prototype.assign_engineerget = function (searcValue) {
        var _this = this;
        this.filter.technician_detail = searcValue;
        this.service.post_rqst({ 'filter': this.filter, }, 'ServiceTask/plumberList').subscribe(function (resp) {
            if (resp['statusCode'] == 200) {
                _this.engineerList = resp.data;
            }
            else {
                _this.toast.errorToastr(resp['statusMsg']);
            }
        }, function (error) {
        });
    };
    ServiceInvoiceAddComponent.prototype.getCarpenterInfo = function (id) {
        if (id) {
            this.getComplantList('', id);
            var index = this.engineerList.findIndex(function (d) { return d.id == id; });
            if (index != -1) {
                this.technicianData.technician_id = this.engineerList[index].id;
                this.technicianData.technician_name = this.engineerList[index].name;
            }
        }
    };
    ServiceInvoiceAddComponent.prototype.getComplantList = function (searcValue, id) {
        var _this = this;
        this.filter.technician_detail = searcValue;
        this.filter.technician_id = id;
        this.service.post_rqst({ 'filter': this.filter, }, 'ServiceInvoice/assignComplaintList').subscribe(function (resp) {
            if (resp['statusCode'] == 200) {
                _this.complaintList = resp.data;
            }
            else {
                _this.toast.errorToastr(resp['statusMsg']);
            }
        }, function (error) {
        });
    };
    ServiceInvoiceAddComponent.prototype.getSparePartList = function (search) {
        var _this = this;
        this.service.post_rqst({ 'search': search }, "ServiceSparePart/getSparePartName").subscribe((function (result) {
            if (result['statusCode'] == 200) {
                _this.spareList = result['result'];
            }
        }));
    };
    ServiceInvoiceAddComponent.prototype.get_spare_detail = function (id) {
        if (id) {
            var index = this.spareList.findIndex(function (d) { return d.id == id; });
            if (index != -1) {
                this.formData.part_id = this.spareList[index].id;
                this.formData.part_no = this.spareList[index].part_no;
                this.formData.part_name = this.spareList[index].part_name;
                this.formData.mrp = this.spareList[index].mrp;
            }
        }
    };
    ServiceInvoiceAddComponent.prototype.delete = function (i) {
        this.technicianData.sub_total -= (parseFloat(this.add_list[i].mrp) * parseFloat(this.add_list[i].qty));
        this.technicianData.discount += (parseFloat(this.add_list[i].qty) * parseFloat(this.add_list[i].mrp)) * (parseFloat(this.add_list[i].discount) / 100);
        this.technicianData.gst_amount = (parseFloat(this.technicianData.sub_total) - parseFloat(this.technicianData.discount)) * (parseFloat('18') / 100);
        this.technicianData.total = (parseFloat(this.technicianData.sub_total) - parseFloat(this.technicianData.discount)) + (parseFloat(this.technicianData.gst_amount));
        this.add_list.splice(i, 1);
    };
    ServiceInvoiceAddComponent.prototype.addInvoice = function () {
        var _this = this;
        this.technicianData = this.technicianData;
        this.savingFlag = true;
        this.service.post_rqst({ "add_list": this.add_list, "data": this.technicianData }, "ServiceInvoice/serviceInvoiceAdd").subscribe((function (result) {
            if (result['statusCode'] == 200) {
                _this.savingFlag = false;
                _this.rout.navigate(['/service-invoice-list']);
                _this.toast.successToastr(result['statusMsg']);
                setTimeout(function () {
                    _this.savingFlag = false;
                }, 700);
            }
            else {
                _this.toast.errorToastr(result['statusMsg']);
            }
        }));
    };
    ServiceInvoiceAddComponent.prototype.calculationOfTotalService = function () {
        if (this.technicianData.discount == '') {
            this.technicianData.discount = 0;
        }
        if (this.technicianData.type && parseInt(this.technicianData.amount) <= this.technicianData.discount) {
            this.technicianData.discount = 0;
            this.toast.errorToastr('Discount Should Be Less Then Amount');
        }
        this.technicianData.gstPercentage = 18.00;
        this.technicianData.gst_amount = ((parseFloat(this.technicianData.amount) - parseFloat(this.technicianData.discount)) / 100) * this.technicianData.gstPercentage;
        this.technicianData.sub_total = parseFloat(this.technicianData.amount);
        this.technicianData.disc = 0.00;
        if (this.technicianData.discount != 0) {
            this.technicianData.total = (parseFloat(this.technicianData.amount) - parseFloat(this.technicianData.discount)) + parseFloat(this.technicianData.gst_amount);
        }
        else {
            this.technicianData.total = parseFloat(this.technicianData.amount) + parseFloat(this.technicianData.gst_amount);
        }
    };
    ServiceInvoiceAddComponent.prototype.calculation = function () {
        if (this.formData.discount == '') {
            this.formData.discount = 0;
        }
        this.formData.amount = (parseFloat(this.formData.mrp) * parseInt(this.formData.qty));
        this.formData.total = (parseFloat(this.formData.mrp) * parseInt(this.formData.qty)) - (((parseFloat(this.formData.mrp) * parseInt(this.formData.qty)) / 100) * this.formData.discount);
        this.formData.discount_amount = (parseFloat(this.formData.mrp) * parseInt(this.formData.qty)) * (parseFloat(this.formData.discount) / 100);
        this.formData.final_amount = (parseFloat(this.formData.mrp) * parseInt(this.formData.qty)) - (parseFloat(this.formData.discount_amount));
    };
    ServiceInvoiceAddComponent.prototype.addSpare = function () {
        var _this = this;
        this.technicianData.sub_total = 0;
        this.technicianData.disc = 0;
        this.technicianData.discount = 0;
        this.technicianData.gst = 0;
        this.technicianData.total = 0;
        if (this.formData.id) {
            var index = this.spareList.findIndex(function (d) { return d.id == _this.formData.id; });
            if (index != -1) {
                this.formData.part_name = this.spareList[index].part_name;
            }
        }
        if (this.add_list.length == 0) {
            this.add_list.push(JSON.parse(JSON.stringify(this.formData)));
            this.formData = {};
            this.formData.discount = 0;
        }
        else {
            var isExistIndex = void 0;
            isExistIndex = this.add_list.findIndex(function (row) { return row.id == _this.formData.id; });
            if (isExistIndex == -1) {
                this.add_list.push(JSON.parse(JSON.stringify(this.formData)));
                this.formData = {};
                this.formData.discount = 0;
            }
            else {
                this.add_list[isExistIndex].qty = parseInt(this.formData.qty);
                this.formData = {};
                this.formData.discount = 0;
                this.addToListButton = true;
            }
        }
        for (var index = 0; index < this.add_list.length; index++) {
            this.technicianData.sub_total += (parseFloat(this.add_list[index].mrp) * parseFloat(this.add_list[index].qty));
            this.technicianData.discount += (parseFloat(this.add_list[index].qty) * parseFloat(this.add_list[index].mrp)) * (parseFloat(this.add_list[index].discount) / 100);
            this.technicianData.gst_amount = (parseFloat(this.technicianData.sub_total) - parseFloat(this.technicianData.discount)) * (parseFloat('18') / 100);
            this.technicianData.total = (parseFloat(this.technicianData.sub_total) - parseFloat(this.technicianData.discount)) + (parseFloat(this.technicianData.gst_amount));
        }
    };
    ServiceInvoiceAddComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-service-invoice-add',
            template: __webpack_require__(/*! ./service-invoice-add.component.html */ "./src/app/service-invoice/service-invoice-add/service-invoice-add.component.html"),
            styles: [__webpack_require__(/*! ./service-invoice-add.component.scss */ "./src/app/service-invoice/service-invoice-add/service-invoice-add.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_services_DatabaseService__WEBPACK_IMPORTED_MODULE_5__["DatabaseService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_4__["ToastrManager"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], src_app_dialog_component__WEBPACK_IMPORTED_MODULE_6__["DialogComponent"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["Location"]])
    ], ServiceInvoiceAddComponent);
    return ServiceInvoiceAddComponent;
}());



/***/ }),

/***/ "./src/app/service-invoice/service-invoice-detail/service-invoice-detail.component.html":
/*!**********************************************************************************************!*\
  !*** ./src/app/service-invoice/service-invoice-detail/service-invoice-detail.component.html ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-container\">\r\n  <div class=\"tools-container\">\r\n    <a mat-icon-button matTooltip=\"Back\" (click)=\"back()\">\r\n      <i class=\"material-icons\">arrow_back</i>\r\n    </a>\r\n    <h2>Invoice Details</h2>\r\n    <div class=\"left-auto left-auto df ac flex-gap-10\">\r\n      <div class=\"group-btn\">\r\n        <button mat-button class=\"ouline-btns whatsapp\" (click)=\"addPayment(getData.id,getData.invoice_final_amount)\"\r\n        *ngIf=\"getData.status=='Pending'\">Add Payment</button>\r\n        <button mat-button class=\"ouline-btns pdf\" (click)=\"exportPdf()\"><img src=\"assets/img/icons/pdf.png\">Export\r\n          PDF</button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"container pt10 pl10 pr10 pb50\">\r\n      <div class=\"row\">\r\n        <div class=\"col s12 m12 \">\r\n          <div class=\"card\" *ngIf=\"!skLoading\">\r\n            <div class=\"card-head\">\r\n              <h2>Customer Basic Information</h2>\r\n            </div>\r\n            <div class=\"card-body\">\r\n              <div class=\"grid-box\">\r\n                <div class=\"block-feilds\">\r\n                  <span>Customer Name</span>\r\n                  <p>{{getData.customer_name ? (getData.customer_name | titlecase) :'---'}}</p>\r\n                </div>\r\n                <div class=\"block-feilds\">\r\n                  <span>Customer Mobile No.</span>\r\n                  <p>{{getData.customer_mobile ? getData.customer_mobile :'---'}}</p>\r\n                </div>\r\n                <div class=\"block-feilds\">\r\n                  <span>Customer Address</span>\r\n                  <p>{{getData.customer_name ? (getData.customer_name | titlecase) :'---'}}</p>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"card\" *ngIf=\"skLoading\">\r\n            <div class=\"sk-head\">\r\n              <h2>&nbsp;</h2>\r\n            </div>\r\n            <div class=\"card-body\">\r\n              <div class=\"img-container\">\r\n                <div class=\"image-block sk-loading\" *ngFor=\"let row of [].constructor(3)\">\r\n                  &nbsp;\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col s12 mt15 \">\r\n          <div class=\"card\" *ngIf=\"!skLoading\">\r\n            <div class=\"card-head\">\r\n              <h2>Invoice Information</h2>\r\n            </div>\r\n            <div class=\"card-body\">\r\n              <div class=\"grid-box\">\r\n                <div class=\"block-feilds\">\r\n                  <span>Date Created</span>\r\n                  <p>{{getData.date_created ? (getData.date_created | date : 'dd MMM yyy ,h:mm a') :'---'}}</p>\r\n                </div>\r\n                <div class=\"block-feilds\">\r\n                  <span>Invoice No.</span>\r\n                  <p>{{getData.invoice_no ? getData.invoice_no :'---'}}</p>\r\n                </div>\r\n                <div class=\"block-feilds\">\r\n                  <span>Complaint No.</span>\r\n                  <p>{{getData.complaint_no ? getData.complaint_no :'---'}}</p>\r\n                </div>\r\n                <div class=\"block-feilds\">\r\n                  <span>Type</span>\r\n                  <p>{{getData.type ? (getData.type | titlecase) :'---'}}</p>\r\n                </div>\r\n                <div class=\"block-feilds\">\r\n                  <span>Total Amount</span>\r\n                  <p>{{getData.invoice_final_amount ? (getData.invoice_final_amount | number:'1.2-2') :'---'}}</p>\r\n                </div>\r\n                <div class=\"block-feilds\">\r\n                  <span>Status</span>\r\n                  <p>\r\n                    <strong class=\"yellow-clr\" *ngIf=\"getData.status=='Pending'\">\r\n                      {{getData.status ? (getData.status | titlecase) :\r\n                        '--'}}</strong>\r\n                        <strong class=\"green-clr\" *ngIf=\"getData.status=='Paid'\">\r\n                          {{getData.status ? (getData.status | titlecase) :\r\n                            '--'}}</strong>\r\n                          </p>\r\n                        </div>\r\n                        \r\n                        <div class=\"block-feilds\" *ngIf=\"getData.status!='Pending'\">\r\n                          <span>Payment Mode</span>\r\n                          <p>{{getData.payment_mode ? (getData.payment_mode) :'---'}}</p>\r\n                        </div>\r\n                        <div class=\"block-feilds\" *ngIf=\"getData.status!='Pending'\">\r\n                          <span>Transaction No.</span>\r\n                          <p>{{getData.transaction_no ? (getData.transaction_no) :'---'}}</p>\r\n                        </div>\r\n                        <div class=\"block-feilds\" *ngIf=\"getData.status!='Pending'\">\r\n                          <span>Payment Remark</span>\r\n                          <p>{{getData.payment_remark ? (getData.payment_remark) :'---'}}</p>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <div class=\"col s12 mt15 \" *ngIf=\"getData.type == 'Service'\">\r\n                  <div class=\"card\" *ngIf=\"!skLoading\">\r\n                    <div class=\"edit-modal mt15\">\r\n                      <div mat-dialog-content>\r\n                        <div class=\"cs-table left-right-10\">\r\n                          <div class=\"table-head\">\r\n                            <table>\r\n                              <tr>\r\n                                <th class=\"w30 text-center\">Sr.No</th>\r\n                                <th class=\"w100\">Description</th>\r\n                                <th class=\"w60 text-right\">MRP</th>\r\n                                <th class=\"w60 text-right\">Discounted Amount</th>\r\n                                <th class=\"w60 text-right\">GST</th>\r\n                                <th class=\"w100 text-right\">Total</th>\r\n                              </tr>\r\n                            </table>\r\n                          </div>\r\n                          <div class=\"table-container pb0\">\r\n                            <div class=\"table-content none-shadow\">\r\n                              <table>\r\n                                <ng-container>\r\n                                  <tr>\r\n                                    <td class=\"w30 text-center\">1.</td>\r\n                                    <td class=\"w100\">Service Charge</td>\r\n                                    <td class=\"w60 text-right\">{{ getData.sub_amount | number:'1.2-2' }} /-</td>\r\n                                    <td class=\"w60 text-right\">{{ getData.discount_amount | number:'1.2-2'}} /-</td>\r\n                                    <td class=\"w60 text-right\">{{ getData.gst_amount | number:'1.2-2' }} /-</td>\r\n                                    <td class=\"w100 text-right\">{{ getData.invoice_final_amount | number:'1.2-2'}} /-</td>\r\n                                  </tr>\r\n                                </ng-container>\r\n                              </table>\r\n                            </div>\r\n                          </div>\r\n                          <div class=\"row\">\r\n                            <div class=\"col s7 offset-s6\">\r\n                              <div class=\"invoice-table\">\r\n                                <table>\r\n                                  <tr>\r\n                                    <td>Sub Total</td>\r\n                                    <th>{{ getData.sub_amount | number:'1.2-2' }} /-</th>\r\n                                  </tr>\r\n                                  <tr>\r\n                                    <td>Discount Amonut</td>\r\n                                    <th>{{ getData.discount_amount | number:'1.2-2'}} /-</th>\r\n                                  </tr>\r\n                                  <tr>\r\n                                    <td>GST Amount</td>\r\n                                    <th>{{ getData.gst_amount | number:'1.2-2' }} /-</th>\r\n                                  </tr>\r\n                                  <tr>\r\n                                    <td>Total</td>\r\n                                    <th>{{ getData.invoice_final_amount | number:'1.2-2'}} /-</th>\r\n                                  </tr>\r\n                                </table>\r\n                              </div>\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <div class=\"col s12 mt15 \" *ngIf=\"getData.type != 'Service'\">\r\n                  <div class=\"card\" *ngIf=\"!skLoading\">\r\n                    <div class=\"card-head\">\r\n                      <h2>Invoice Information</h2>\r\n                    </div>\r\n                    <div class=\"edit-modal mt15\">\r\n                      <div mat-dialog-content>\r\n                        <div class=\"cs-table left-right-10\">\r\n                          <div class=\"table-head\">\r\n                            <table>\r\n                              <tr>\r\n                                <th class=\"w30 text-center\">Sr.No</th>\r\n                                <th class=\"w150\">Part Details</th>\r\n                                <th class=\"w60 text-center\">Qty</th>\r\n                                <th class=\"w60 text-right\">MRP</th>\r\n                                <th class=\"w60 text-right\">Amount</th>\r\n                                <th class=\"w60 text-right\">Discounted Amount</th>\r\n                                <th class=\"w100 text-right\">Total</th>\r\n                              </tr>\r\n                            </table>\r\n                          </div>\r\n                          <div class=\"table-container pb0\">\r\n                            <div class=\"table-content none-shadow\">\r\n                              <table>\r\n                                <ng-container *ngFor=\"let row of add_list; let i = index\">\r\n                                  <tr>\r\n                                    <td class=\"w30 text-center\">{{ i + 1 }}</td>\r\n                                    <td class=\"w150\">{{ row.part_name}}-{{row.part_no}}</td>\r\n                                    <td class=\"w60 text-center\">{{ row.qty }}</td>\r\n                                    <td class=\"w60 text-right\">{{ row.rate }}</td>\r\n                                    <td class=\"w60 text-right\">{{ row.amount | number:'1.2-2'}}</td>\r\n                                    <td class=\"w60 text-right\">{{ row.discount_amount | number:'1.2-2'}}</td>\r\n                                    <td class=\"w100 text-right\">{{ row.final_amount | number:'1.2-2'}}</td>\r\n                                  </tr>\r\n                                </ng-container>\r\n                              </table>\r\n                            </div>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                    <div mat-dialog-content>\r\n                      <div class=\"row\">\r\n                        <div class=\"col s7 offset-s6\">\r\n                          <div class=\"invoice-table\">\r\n                            <table>\r\n                              <tr>\r\n                                <td>Sub Total</td>\r\n                                <th>{{ getData.sub_amount | number:'1.2-2'}}</th>\r\n                              </tr>\r\n                              <tr>\r\n                                <td>Discount Amonut</td>\r\n                                <th>{{ getData.discount_amount | number:'1.2-2'}}</th>\r\n                              </tr>\r\n                              <tr>\r\n                                <td>GST Amount</td>\r\n                                <th>{{ getData.gst_amount | number:'1.2-2'}}</th>\r\n                              </tr>\r\n                              <tr>\r\n                                <td>Total</td>\r\n                                <th>{{ getData.invoice_final_amount | number:'1.2-2'}}</th>\r\n                              </tr>\r\n                            </table>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>"

/***/ }),

/***/ "./src/app/service-invoice/service-invoice-detail/service-invoice-detail.component.scss":
/*!**********************************************************************************************!*\
  !*** ./src/app/service-invoice/service-invoice-detail/service-invoice-detail.component.scss ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/service-invoice/service-invoice-detail/service-invoice-detail.component.ts":
/*!********************************************************************************************!*\
  !*** ./src/app/service-invoice/service-invoice-detail/service-invoice-detail.component.ts ***!
  \********************************************************************************************/
/*! exports provided: ServiceInvoiceDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceInvoiceDetailComponent", function() { return ServiceInvoiceDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_services_DatabaseService__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/_services/DatabaseService */ "./src/_services/DatabaseService.ts");
/* harmony import */ var src_app_localstorage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/localstorage.service */ "./src/app/localstorage.service.ts");
/* harmony import */ var ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng6-toastr-notifications */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/ng6-toastr-notifications/fesm5/ng6-toastr-notifications.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var src_app_dialog_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/dialog.component */ "./src/app/dialog.component.ts");
/* harmony import */ var src_app_dialog_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/dialog.service */ "./src/app/dialog.service.ts");
/* harmony import */ var src_app_service_exportexcel_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/service/exportexcel.service */ "./src/app/service/exportexcel.service.ts");











var ServiceInvoiceDetailComponent = /** @class */ (function () {
    function ServiceInvoiceDetailComponent(location, session, router, alert, service, editdialog, dialog, route, toast, excelservice, dialog1) {
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
        this.url = this.service.uploadUrl + 'service_task/';
        this.route.params.subscribe(function (params) {
            _this.id = params.id;
            _this.service.currentUserID = params.id;
            if (_this.id) {
                _this.getInvoiceDetail();
            }
        });
    }
    ServiceInvoiceDetailComponent.prototype.ngOnInit = function () {
    };
    ServiceInvoiceDetailComponent.prototype.getInvoiceDetail = function () {
        var _this = this;
        this.skLoading = true;
        this.service.post_rqst({ 'invoice_id': this.id }, "ServiceInvoice/serviceInvoiceDetail").subscribe((function (result) {
            _this.getData = result['result'];
            _this.add_list = _this.getData['add_list'];
            console.log(result);
            console.log(_this.getData);
            console.log(_this.add_list);
            _this.skLoading = false;
        }));
    };
    ServiceInvoiceDetailComponent.prototype.back = function () {
        this.location.back();
    };
    ServiceInvoiceDetailComponent.prototype.exportPdf = function () {
        var _this = this;
        this.loader = 1;
        this.skLoading = true;
        this.service.post_rqst({ 'invoice_id': this.id }, "ServiceInvoice/exportInvoice").subscribe(function (result) {
            if (result['statusCode'] == 200) {
                _this.skLoading = false;
                window.open(_this.service.uploadUrl + 'orderPdf/' + result['file_name']);
                setTimeout(function () {
                    _this.loader = '';
                }, 700);
            }
            else {
                setTimeout(function () {
                    _this.loader = '';
                }, 700);
                _this.skLoading = false;
                _this.toast.errorToastr(result['statusMsg']);
            }
        }, function (err) {
            _this.skLoading = false;
        });
    };
    ServiceInvoiceDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-service-invoice-detail',
            template: __webpack_require__(/*! ./service-invoice-detail.component.html */ "./src/app/service-invoice/service-invoice-detail/service-invoice-detail.component.html"),
            styles: [__webpack_require__(/*! ./service-invoice-detail.component.scss */ "./src/app/service-invoice/service-invoice-detail/service-invoice-detail.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_7__["Location"], src_app_localstorage_service__WEBPACK_IMPORTED_MODULE_5__["sessionStorage"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], src_app_dialog_component__WEBPACK_IMPORTED_MODULE_8__["DialogComponent"], src_services_DatabaseService__WEBPACK_IMPORTED_MODULE_4__["DatabaseService"], src_app_dialog_service__WEBPACK_IMPORTED_MODULE_9__["DialogService"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_6__["ToastrManager"], src_app_service_exportexcel_service__WEBPACK_IMPORTED_MODULE_10__["ExportexcelService"], src_app_dialog_component__WEBPACK_IMPORTED_MODULE_8__["DialogComponent"]])
    ], ServiceInvoiceDetailComponent);
    return ServiceInvoiceDetailComponent;
}());



/***/ }),

/***/ "./src/app/service-invoice/service-invoice-list/service-invoice-list.component.html":
/*!******************************************************************************************!*\
  !*** ./src/app/service-invoice/service-invoice-list/service-invoice-list.component.html ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-container\">\r\n  <app-loader *ngIf=\"excelLoader\"></app-loader>\r\n  <div class=\"tools-container\">\r\n    <h2>Invoice List</h2>\r\n\r\n    <div class=\"left-auto df ac flex-gap-10\">\r\n      <a mat-icon-button matTooltip=\"Refresh\" (click)=\"refresh()\">\r\n        <i class=\"material-icons\">refresh</i>\r\n      </a>\r\n\r\n      <div class=\"pagination\" *ngIf=\"invoiceList.length > 0\">\r\n        <div class=\"pagination-content\">\r\n          Pages\r\n          <span>{{ pagenumber }}</span>\r\n          of\r\n          <span>{{ total_page }}</span>\r\n        </div>\r\n        <div class=\"page-nav\">\r\n          <button mat-icon-button matTooltip=\"Older\" (click)=\"pervious()\" [disabled]=\"start == 0\">\r\n            <i class=\"material-icons\">navigate_before</i>\r\n          </button>\r\n          <button mat-icon-button matTooltip=\"Newer\" (click)=\"nextPage()\" [disabled]=\"pagenumber == total_page\">\r\n            <i class=\"material-icons\">navigate_next</i>\r\n          </button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"mat-tabbar\">\r\n      <ng-container>\r\n        <button mat-button [ngClass]=\"active_tab == 'All' ? 'active' : ''\"\r\n          (click)=\"active_tab = 'All'; getinvoiceList('')\">\r\n          <i class=\"material-icons\">all_inbox</i>All({{tab_count.all_count}})\r\n        </button>\r\n        <button mat-button [ngClass]=\"active_tab == 'Pending' ? 'active' : ''\"\r\n          (click)=\"active_tab = 'Pending'; getinvoiceList('')\">\r\n          <i class=\"material-icons\">pending_actions</i>Pending({{tab_count.pending_count}})\r\n        </button>\r\n      </ng-container>\r\n      <button mat-button [ngClass]=\"active_tab == 'Paid' ? 'active' : ''\"\r\n        (click)=\"active_tab = 'Paid'; getinvoiceList('')\">\r\n        <i class=\"material-icons\">thumb_up_alt</i>Paid({{tab_count.paid_count}})\r\n      </button>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"container container-scroll\">\r\n    <div class=\"cs-table horizontal-scroll\">\r\n      <div class=\"sticky-head\">\r\n        <div class=\"table-head\">\r\n          <table>\r\n            <tr>\r\n              <th class=\"w50\">Sr.No</th>\r\n              <th class=\"w150\">Date Created</th>\r\n              <th class=\"w150\">Created By</th>\r\n              <th class=\"w100\">Invoice No.</th>\r\n              <th class=\"w100\">Complaint No.</th>\r\n              <th class=\"w100\">Type</th>\r\n              <th class=\"w150\">Customer Name</th>\r\n              <th class=\"w120\">Customer Mobile No.</th>\r\n              <!-- <th class=\"w100\">Status</th> -->\r\n              <!-- <th class=\"w100\">Payment Type</th> -->\r\n              <!-- <th class=\"w100\">Transaction No.</th> -->\r\n              <th class=\"w100 text-right\">MRP</th>\r\n              <th class=\"w100 text-center\">Action</th>\r\n            </tr>\r\n          </table>\r\n        </div>\r\n        <div class=\"table-head bdrt\">\r\n          <table>\r\n            <tr>\r\n              <th class=\"w50\"></th>\r\n              <th class=\"w150\">\r\n                <div class=\"th-search-acmt\">\r\n                  <mat-form-field class=\"cs-input date-column infix-bodr\">\r\n                    <input matInput [matDatepicker]=\"picker\" placeholder=\"Date\" name=\"date_created\"\r\n                      #date_created=\"ngModel\" [(ngModel)]=\"filter_data.date_created\" (ngModelChange)=\"date_format()\"\r\n                      [max]=\"today_date\" readonly />\r\n                    <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\r\n                    <mat-datepicker #picker></mat-datepicker>\r\n                  </mat-form-field>\r\n                </div>\r\n              </th>\r\n              <th class=\"w150\">\r\n                <div class=\"th-search-acmt\">\r\n                  <mat-form-field>\r\n                    <input type=\"text\" matInput placeholder=\"Search ...\" name=\"created_by_name\"\r\n                      (keyup.enter)=\"getinvoiceList('')\" #created_by_name=\"ngModel\"\r\n                      [(ngModel)]=\"filter_data.created_by_name\" />\r\n                  </mat-form-field>\r\n                </div>\r\n              </th>\r\n              <th class=\"w100\">\r\n                <div class=\"th-search-acmt\">\r\n                  <mat-form-field>\r\n                    <input type=\"text\" matInput placeholder=\"Search ...\" name=\"invoice_no\"\r\n                      (keyup.enter)=\"getinvoiceList('')\" #invoice_no=\"ngModel\" [(ngModel)]=\"filter_data.invoice_no\">\r\n                  </mat-form-field>\r\n                </div>\r\n              </th>\r\n              <th class=\"w100\">\r\n                <div class=\"th-search-acmt\">\r\n                  <mat-form-field>\r\n                    <input type=\"text\" matInput placeholder=\"Search ...\" name=\"complaint_no\"\r\n                      (keyup.enter)=\"getinvoiceList('')\" #complaint_no=\"ngModel\" [(ngModel)]=\"filter_data.complaint_no\">\r\n                  </mat-form-field>\r\n                </div>\r\n              </th>\r\n              <th class=\"w100\">\r\n                <div class=\"th-search-acmt\">\r\n                  <mat-form-field class=\"cs-input select-input\">\r\n                    <mat-select name=\"type\" #type=\"ngModel\" [(ngModel)]=\"filter_data.type\"\r\n                      (selectionChange)=\"getinvoiceList('')\">\r\n                      <mat-option value=\"\">All</mat-option>\r\n                      <mat-option value=\"Spare Part\">Spare Part</mat-option>\r\n                      <mat-option value=\"Service\">Service </mat-option>\r\n                    </mat-select>\r\n                  </mat-form-field>\r\n                </div>\r\n              </th>\r\n              <th class=\"w150\">\r\n                <div class=\"th-search-acmt\">\r\n                  <mat-form-field>\r\n                    <input type=\"text\" matInput placeholder=\"Search ...\" name=\"customer_name\"\r\n                      (keyup.enter)=\"getinvoiceList('')\" #customer_name=\"ngModel\"\r\n                      [(ngModel)]=\"filter_data.customer_name\" />\r\n                  </mat-form-field>\r\n                </div>\r\n              </th>\r\n              <th class=\"w120\">\r\n                <div class=\"th-search-acmt\">\r\n                  <mat-form-field>\r\n                    <input type=\"text\" matInput placeholder=\"Search ...\" name=\"customer_mobile\"\r\n                      (keyup.enter)=\"getinvoiceList('')\" #customer_mobile=\"ngModel\"\r\n                      [(ngModel)]=\"filter_data.customer_mobile\" />\r\n                  </mat-form-field>\r\n                </div>\r\n              </th>\r\n              <!-- <th class=\"w100\">\r\n                <div class=\"th-search-acmt\">\r\n                  <mat-form-field class=\"cs-input select-input\">\r\n                    <mat-select name=\"status\" #status=\"ngModel\" [(ngModel)]=\"filter_data.status\" (selectionChange)=\"getinvoiceList('')\">\r\n                      <mat-option value=\"\">All</mat-option>\r\n                      <mat-option value=\"Pending\">Pending</mat-option>\r\n                      <mat-option value=\"Paid\">Paid </mat-option>\r\n                    </mat-select>\r\n                  </mat-form-field>\r\n                </div>\r\n              </th> -->\r\n              <!-- <th class=\"w100\">\r\n                <div class=\"th-search-acmt\">\r\n                  <mat-form-field>\r\n                    <input type=\"text\" matInput placeholder=\"Search ...\" name=\"payment_type\"\r\n                      (keyup.enter)=\"getinvoiceList('')\" #payment_type=\"ngModel\"\r\n                      [(ngModel)]=\"filter_data.payment_type\" />\r\n                  </mat-form-field>\r\n                </div>\r\n              </th> -->\r\n              <!-- <th class=\"w100\">\r\n                <div class=\"th-search-acmt\">\r\n                  <mat-form-field>\r\n                    <input type=\"text\" matInput placeholder=\"Search ...\" name=\"transaction_no\"\r\n                      (keyup.enter)=\"getinvoiceList('')\" #transaction_no=\"ngModel\" [(ngModel)]=\"filter_data.transaction_no\">\r\n                  </mat-form-field>\r\n                </div>\r\n              </th> -->\r\n              <th class=\"w100 text-right\"></th>\r\n              <th class=\"w100 text-center\"></th>\r\n            </tr>\r\n          </table>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"table-container\">\r\n        <div class=\"table-content\">\r\n          <table>\r\n            <ng-container *ngIf=\"!loader\">\r\n              <tr *ngFor=\"let row of invoiceList; let i = index\"\r\n                [ngClass]=\"{ Current: service.currentUserID == row.id }\">\r\n                <td class=\"w50\">{{ i + 1 + sr_no }}</td>\r\n                <td class=\"w150\">\r\n                  {{ row.date_created | date : \"dd MMM yyy ,h:mm a\" }}\r\n                </td>\r\n                <td class=\"w150\">{{ row.created_by_name | titlecase}}</td>\r\n                <td class=\"w100\"><a class=\"link-btn\" mat-button (click)=\"service.setData(filter_data)\"\r\n                    routerLink=\"invoice-detail/{{(row.id)}}\" routerLinkActive=\"active\">{{row.invoice_no}}</a></td>\r\n                <!-- <td class=\"w100\"><a class=\"link-btn\" mat-button (click)=\"service.setData(filter_data)\"\r\n                    routerLink=\"complaint-detail/{{(row.id)}}\" routerLinkActive=\"active\"></a></td> -->\r\n                <td class=\"w100\">{{row.complaint_no}}</td>\r\n                <td class=\"w100\">{{ row.type | titlecase}}</td>\r\n                <td class=\"w150\">{{ row.customer_name | titlecase }}</td>\r\n                <td class=\"w120\">{{ row.customer_mobile}}</td>\r\n                <!-- <td class=\"w100\">{{ row.status}}</td> -->\r\n                <!-- <td class=\"w100\">{{ row.created_by_name}}</td> -->\r\n                <!-- <td class=\"w100\">{{ row.created_by_name}}</td> -->\r\n                <td class=\"w100 text-right\">{{ row.invoice_final_amount}}</td>\r\n                <td class=\"w100\">\r\n                  <button mat-icon-button matTooltip=\"Delete\" (click)=\"delete(row.id)\">\r\n                    <i class=\"material-icons red-clr\">delete</i>\r\n                  </button>\r\n                </td>\r\n              </tr>\r\n            </ng-container>\r\n            <ng-container *ngIf=\"loader\">\r\n              <tr class=\"sk-loading\" *ngFor=\"let row of [].constructor(10)\">\r\n                <td class=\"w50\">\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n                <td class=\"w150\">\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n                <td class=\"w150\">\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n                <td class=\"w100\">\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n                <td class=\"w100\">\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n                <td class=\"w100\">\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n                <td class=\"w150\">\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n                <td class=\"w120\">\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n                <!-- <td class=\"w100\">\r\n                  <div>&nbsp;</div>\r\n                </td> -->\r\n                <!-- <td class=\"w100\">\r\n                  <div>&nbsp;</div>\r\n                </td> -->\r\n                <!-- <td class=\"w100\">\r\n                  <div>&nbsp;</div>\r\n                </td> -->\r\n                <td class=\"w100\">\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n                <td class=\"w100\">\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n              </tr>\r\n            </ng-container>\r\n          </table>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <ng-container *ngIf=\"datanotofound == true && invoiceList.length == 0\">\r\n      <app-not-result-found></app-not-result-found>\r\n    </ng-container>\r\n  </div>\r\n  <div></div>\r\n\r\n  <div class=\"fab-btns\">\r\n    <button class=\"pulse excel\" mat-fab color=\"primary\" [ngClass]=\"{ pulse: fabBtnValue == 'add' }\"\r\n      [matMenuTriggerFor]=\"menu\">\r\n      <i class=\"material-icons\">apps</i>\r\n      Action\r\n    </button>\r\n  </div>\r\n  <mat-menu #menu=\"matMenu\">\r\n    <button mat-menu-item (click)=\"downloadExcel()\" *ngIf=\"invoiceList.length > 0\">\r\n      <mat-icon>download</mat-icon>\r\n      <span>Download excel</span>\r\n    </button>\r\n    <button mat-menu-item (click)=\"lastBtnValue('add')\" routerLink=\"add-invoice\" routerLinkActive=\"router-link-active\">\r\n      <mat-icon>add</mat-icon>\r\n      <span>Add New</span>\r\n    </button>\r\n    <!-- <button mat-menu-item (click)=\"addSapre()\" routerLink=\"add-Service-invoice\"\r\n      routerLinkActive=\"router-link-active\">\r\n      <mat-icon>add</mat-icon>\r\n      <span>Add Invoice</span>\r\n    </button> -->\r\n  </mat-menu>\r\n</div>"

/***/ }),

/***/ "./src/app/service-invoice/service-invoice-list/service-invoice-list.component.scss":
/*!******************************************************************************************!*\
  !*** ./src/app/service-invoice/service-invoice-list/service-invoice-list.component.scss ***!
  \******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/service-invoice/service-invoice-list/service-invoice-list.component.ts":
/*!****************************************************************************************!*\
  !*** ./src/app/service-invoice/service-invoice-list/service-invoice-list.component.ts ***!
  \****************************************************************************************/
/*! exports provided: ServiceInvoiceListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceInvoiceListComponent", function() { return ServiceInvoiceListComponent; });
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











;
var ServiceInvoiceListComponent = /** @class */ (function () {
    function ServiceInvoiceListComponent(session, router, alert, service, editdialog, dialog, route, toast, excelservice, dialog1) {
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
        this.invoiceList = [];
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
        this.active_tab = 'Pending';
        this.url = this.service.uploadUrl + 'service_task/';
        this.downurl = service.downloadUrl;
        this.page_limit = service.pageLimit;
    }
    ServiceInvoiceListComponent.prototype.ngOnInit = function () {
        this.filter_data.status = this.active_tab;
        this.filter_data = this.service.getData();
        this.getinvoiceList('');
    };
    ServiceInvoiceListComponent.prototype.pervious = function () {
        this.start = this.start - this.page_limit;
        this.getinvoiceList('');
    };
    ServiceInvoiceListComponent.prototype.nextPage = function () {
        this.start = this.start + this.page_limit;
        this.getinvoiceList('');
    };
    ServiceInvoiceListComponent.prototype.refresh = function () {
        this.start = 0;
        this.filter_data = {};
        this.getinvoiceList('');
    };
    ServiceInvoiceListComponent.prototype.date_format = function () {
        this.filter_data.date_created = moment__WEBPACK_IMPORTED_MODULE_4__(this.filter_data.date_created).format('YYYY-MM-DD');
        this.getinvoiceList('');
    };
    ServiceInvoiceListComponent.prototype.clear = function () {
        this.refresh();
    };
    ServiceInvoiceListComponent.prototype.getinvoiceList = function (data) {
        var _this = this;
        if (this.pagenumber > this.total_page) {
            this.pagenumber = this.total_page;
            this.start = this.pageCount - this.page_limit;
        }
        if (this.start < 0) {
            this.start = 0;
        }
        this.filter_data.status = this.active_tab;
        var header = this.service.post_rqst({ 'filter': this.filter_data, 'start': this.start, 'pagelimit': this.page_limit }, "ServiceInvoice/serviceInvoiceList");
        this.loader = true;
        header.subscribe(function (result) {
            if (result['statusCode'] == 200) {
                _this.invoiceList = result['result'];
                console.log(_this.invoiceList);
                _this.pageCount = result['count'];
                _this.tab_count = result['tab_count'];
                _this.scheme_active_count = result['scheme_active_count'];
                _this.loader = false;
                if (_this.invoiceList.length == 0) {
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
                for (var i = 0; i < _this.invoiceList.length; i++) {
                    if (_this.invoiceList[i].status == '1') {
                        _this.invoiceList[i].newStatus = true;
                    }
                    else if (_this.invoiceList[i].status == '0') {
                        _this.invoiceList[i].newStatus = false;
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
    ServiceInvoiceListComponent.prototype.lastBtnValue = function (value) {
        this.fabBtnValue = value;
    };
    // addSapre() {
    //   const dialogRef = this.dialog.open(ServiceInvoiceAddComponent, {
    //     width: '850px',
    //     height: '500px',
    //     panelClass: 'cs-modal',
    //     data: {
    //     }
    //   });
    //   dialogRef.afterClosed().subscribe(result => {
    //     console.log(result);
    //     if (result==true) {        
    //       this.getinvoiceList('');
    //     }
    //   });
    // }
    ServiceInvoiceListComponent.prototype.delete = function (id) {
        var _this = this;
        this.dialog1.delete('Invoice!').then(function (result) {
            if (result) {
                _this.service.post_rqst({ 'id': id }, "ServiceInvoice/serviceInvoiceDelete").subscribe(function (result) {
                    if (result['statusCode'] == 200) {
                        _this.toast.successToastr(result['statusMsg']);
                        _this.getinvoiceList('');
                    }
                    else {
                        _this.toast.errorToastr(result['statusMsg']);
                    }
                });
            }
        });
    };
    ServiceInvoiceListComponent.prototype.downloadExcel = function () {
        var _this = this;
        this.excelLoader = true;
        this.service.post_rqst({ 'filter': this.filter_data }, "Excel/service_invoice_list").subscribe((function (result) {
            if (result['msg'] == true) {
                window.open(_this.downurl + result['filename']);
                _this.getinvoiceList('');
                _this.excelLoader = false;
            }
            else {
            }
        }));
    };
    ServiceInvoiceListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-service-invoice-list',
            template: __webpack_require__(/*! ./service-invoice-list.component.html */ "./src/app/service-invoice/service-invoice-list/service-invoice-list.component.html"),
            styles: [__webpack_require__(/*! ./service-invoice-list.component.scss */ "./src/app/service-invoice/service-invoice-list/service-invoice-list.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_localstorage_service__WEBPACK_IMPORTED_MODULE_9__["sessionStorage"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], src_app_dialog_component__WEBPACK_IMPORTED_MODULE_7__["DialogComponent"], src_services_DatabaseService__WEBPACK_IMPORTED_MODULE_6__["DatabaseService"], src_app_dialog_service__WEBPACK_IMPORTED_MODULE_8__["DialogService"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_5__["ToastrManager"], src_app_service_exportexcel_service__WEBPACK_IMPORTED_MODULE_10__["ExportexcelService"], src_app_dialog_component__WEBPACK_IMPORTED_MODULE_7__["DialogComponent"]])
    ], ServiceInvoiceListComponent);
    return ServiceInvoiceListComponent;
}());



/***/ }),

/***/ "./src/app/service-invoice/service-invoice-module/service-invoice-module.module.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/service-invoice/service-invoice-module/service-invoice-module.module.ts ***!
  \*****************************************************************************************/
/*! exports provided: ServiceInvoiceModuleModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceInvoiceModuleModule", function() { return ServiceInvoiceModuleModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-multiselect-dropdown */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/ng-multiselect-dropdown/fesm5/ng-multiselect-dropdown.js");
/* harmony import */ var src_app_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/material */ "./src/app/material.ts");
/* harmony import */ var angular_ng_autocomplete__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! angular-ng-autocomplete */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/angular-ng-autocomplete/fesm5/angular-ng-autocomplete.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var ngx_mat_select_search__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-mat-select-search */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/ngx-mat-select-search/fesm5/ngx-mat-select-search.js");
/* harmony import */ var src_app_app_utility_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/app-utility.module */ "./src/app/app-utility.module.ts");
/* harmony import */ var src_app_auth_component_guard__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/auth-component.guard */ "./src/app/auth-component.guard.ts");
/* harmony import */ var _service_invoice_list_service_invoice_list_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../service-invoice-list/service-invoice-list.component */ "./src/app/service-invoice/service-invoice-list/service-invoice-list.component.ts");
/* harmony import */ var _service_invoice_detail_service_invoice_detail_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../service-invoice-detail/service-invoice-detail.component */ "./src/app/service-invoice/service-invoice-detail/service-invoice-detail.component.ts");
/* harmony import */ var _service_invoice_add_service_invoice_add_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../service-invoice-add/service-invoice-add.component */ "./src/app/service-invoice/service-invoice-add/service-invoice-add.component.ts");















var invoiceRoutes = [
    { path: "", children: [
            { path: "", component: _service_invoice_list_service_invoice_list_component__WEBPACK_IMPORTED_MODULE_12__["ServiceInvoiceListComponent"], canActivate: [src_app_auth_component_guard__WEBPACK_IMPORTED_MODULE_11__["AuthComponentGuard"]], data: { expectedRole: ['1'] } },
            { path: 'add-invoice', component: _service_invoice_add_service_invoice_add_component__WEBPACK_IMPORTED_MODULE_14__["ServiceInvoiceAddComponent"], canActivate: [src_app_auth_component_guard__WEBPACK_IMPORTED_MODULE_11__["AuthComponentGuard"]], data: { expectedRole: ['1'] } },
            { path: "invoice-detail/:id", children: [
                    { path: "", component: _service_invoice_detail_service_invoice_detail_component__WEBPACK_IMPORTED_MODULE_13__["ServiceInvoiceDetailComponent"], canActivate: [src_app_auth_component_guard__WEBPACK_IMPORTED_MODULE_11__["AuthComponentGuard"]], data: { expectedRole: ['1'] } },
                ] }
        ] },
];
var ServiceInvoiceModuleModule = /** @class */ (function () {
    function ServiceInvoiceModuleModule() {
    }
    ServiceInvoiceModuleModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_service_invoice_list_service_invoice_list_component__WEBPACK_IMPORTED_MODULE_12__["ServiceInvoiceListComponent"], _service_invoice_detail_service_invoice_detail_component__WEBPACK_IMPORTED_MODULE_13__["ServiceInvoiceDetailComponent"], _service_invoice_add_service_invoice_add_component__WEBPACK_IMPORTED_MODULE_14__["ServiceInvoiceAddComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(invoiceRoutes),
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_5__["NgMultiSelectDropDownModule"],
                src_app_material__WEBPACK_IMPORTED_MODULE_6__["MaterialModule"],
                angular_ng_autocomplete__WEBPACK_IMPORTED_MODULE_7__["AutocompleteLibModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatDialogModule"],
                ngx_mat_select_search__WEBPACK_IMPORTED_MODULE_9__["NgxMatSelectSearchModule"],
                src_app_app_utility_module__WEBPACK_IMPORTED_MODULE_10__["AppUtilityModule"]
            ]
        })
    ], ServiceInvoiceModuleModule);
    return ServiceInvoiceModuleModule;
}());



/***/ })

}]);