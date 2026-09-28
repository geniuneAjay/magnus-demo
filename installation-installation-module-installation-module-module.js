(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["installation-installation-module-installation-module-module"],{

/***/ "./src/app/installation/installation-detail/installation-detail.component.html":
/*!*************************************************************************************!*\
  !*** ./src/app/installation/installation-detail/installation-detail.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-container\">\r\n  <div class=\"tools-container\">\r\n    <a mat-icon-button matTooltip=\"Back\" (click)=\"back()\">\r\n      <i class=\"material-icons\">arrow_back</i>\r\n    </a>\r\n    <h2>Installation Details</h2>\r\n  </div>\r\n\r\n  <div class=\"container pt10 pl10 pr10 pb50\">\r\n    <div class=\"row\">\r\n      <div class=\"col s12 m12 l8\">\r\n        <!-- product data start -->\r\n        <div class=\"card\" *ngIf=\"!skLoading\">\r\n          <div class=\"card-head\">\r\n            <h2>Customer Details</h2>\r\n            <div class=\"left-auto\" *ngIf=\"getData.complaint_status=='Pending'\">\r\n              <a class=\"sm-mat-icon-button\" mat-icon-button matTooltip=\"Edit Detail\"\r\n                [routerLink]=\"['add-installation/', 'installation',this.id]\">\r\n                <i class=\"material-icons\">edit</i>\r\n              </a>\r\n            </div>\r\n          </div>\r\n          <div class=\"card-body\">\r\n            <div class=\"grid-box\">\r\n\r\n              <div class=\"block-feilds\">\r\n                <span>Customer Name</span>\r\n                <p>\r\n                  {{ getData.customer_name ? (getData.customer_name| titlecase) : \"---\" }}\r\n                </p>\r\n              </div>\r\n\r\n              <div class=\"block-feilds\">\r\n                <span>Customer Mobile No.</span>\r\n                <p>\r\n                  {{\r\n                  getData.customer_mobile ? getData.customer_mobile : \"---\"\r\n                  }}\r\n                </p>\r\n              </div>\r\n\r\n              <div class=\"block-feilds\">\r\n                <span>Alternate Mobile No.</span>\r\n                <p>{{getData.alternate_mobile_no ? getData.alternate_mobile_no :'---'}}</p>\r\n              </div>\r\n\r\n              <div class=\"block-feilds\">\r\n                <span>State</span>\r\n                <p>{{ getData.state ? (getData.state| titlecase) : \"---\" }}</p>\r\n              </div>\r\n\r\n              <div class=\"block-feilds\">\r\n                <span>District</span>\r\n                <p>{{ getData.district ? (getData.district| titlecase) : \"---\" }}</p>\r\n              </div>\r\n\r\n              <div class=\"block-feilds\">\r\n                <span>City</span>\r\n                <p>{{ getData.city ? (getData.city| titlecase) : \"---\" }}</p>\r\n              </div>\r\n\r\n              <div class=\"block-feilds\">\r\n                <span>Pincode</span>\r\n                <p>{{ getData.pincode ? getData.pincode : \"---\" }}</p>\r\n              </div>\r\n\r\n              <div class=\"block-feilds\">\r\n                <span>Address</span>\r\n                <p>{{ getData.address ? (getData.address| titlecase) : \"N/A\" }}</p>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n        </div>\r\n        <div class=\"card\" *ngIf=\"skLoading\">\r\n          <div class=\"sk-head\">\r\n            <h2>&nbsp;</h2>\r\n          </div>\r\n          <div class=\"card-body\">\r\n            <div class=\"grid-box single mt10\" *ngFor=\"let row of [].constructor(5)\">\r\n              <div class=\"sk-box\">&nbsp;</div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col s12 mt16 m12 l12\">\r\n          <div class=\"card\" *ngIf=\"!skLoading\">\r\n            <div class=\"card-head\">\r\n              <h2>Installation Details</h2>\r\n            </div>\r\n            <div class=\"card-body\">\r\n              <div class=\"grid-box\">\r\n                <div class=\"block-feilds\">\r\n                  <span>Date Created</span>\r\n                  <p>{{ getData.date_created ? (getData.date_created | date : 'dd MMM yyy ,h:mm a'): \"---\" }}</p>\r\n                </div>\r\n\r\n                <div class=\"block-feilds\">\r\n                  <span>Created By</span>\r\n                  <p>\r\n                    {{ getData.created_name ? (getData.created_name | titlecase): \"---\" }}\r\n                  </p>\r\n                </div>\r\n\r\n                <div class=\"block-feilds\">\r\n                  <span>Installation No.</span>\r\n                  <p>{{ getData.complain_no ? getData.complain_no : \"---\" }}</p>\r\n                </div>\r\n                <div class=\"block-feilds\">\r\n                  <span>Technician Name</span>\r\n                  <p>\r\n                    {{ getData.carpenter_name ? (getData.carpenter_name | titlecase): \"N/A\" }}\r\n                  </p>\r\n                </div>\r\n\r\n                <div class=\"block-feilds \">\r\n                  <span>Technician Mobile No.</span>\r\n                  <p>\r\n                    {{\r\n                    getData.carpenter_mobile ? getData.carpenter_mobile : \"N/A\"\r\n                    }}\r\n                  </p>\r\n                </div>\r\n                <div class=\"block-feilds flex-heading\">\r\n                  <div>\r\n                    <span>Installation Status</span>\r\n                    <!-- <p>{{getData.complaint_status ? (getData.complaint_status| titlecase) : '--'}}</p> -->\r\n                    <p>\r\n                      <strong class=\"yellow-clr\" *ngIf=\"getData.complaint_status=='Pending'\">\r\n                        {{getData.complaint_status ? (getData.complaint_status | titlecase) :\r\n                        '--'}}</strong>\r\n                      <strong class=\"green-clr\" *ngIf=\"getData.complaint_status=='Done'\">\r\n                        {{getData.complaint_status ? (getData.complaint_status | titlecase) :\r\n                        '--'}}</strong>\r\n                      <strong class=\"red-clr\" *ngIf=\"getData.complaint_status=='Reject'\">\r\n                        {{getData.complaint_status ? (getData.complaint_status | titlecase) :\r\n                        '--'}}</strong>\r\n                    </p>\r\n                  </div>\r\n                  <div class=\"left-auto\" *ngIf=\"getData.complaint_status == 'Pending'\">\r\n                    <a class=\"sm-mat-icon-button\" mat-icon-button matTooltip=\"Change Status\"\r\n                      (click)=\"updateInstallationStataus(getData.id)\">\r\n                      <i class=\"material-icons\">edit</i>\r\n                    </a>\r\n                  </div>\r\n                </div>\r\n                <div class=\"block-feilds \" *ngIf=\"getData.complaint_status=='Reject'\">\r\n                  <span>Reason Of Reject</span>\r\n                  <p>\r\n                    {{\r\n                    getData.status_reason ? (getData.status_reason |titlecase) : \"N/A\"\r\n                    }}\r\n                  </p>\r\n                </div>\r\n                <div class=\"block-feilds \">\r\n                  <span>TAT</span>\r\n                  <p>\r\n                    {{\r\n                    getData.pending_at ? getData.pending_at : \"N/A\"\r\n                    }}\r\n                  </p>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"edit-modal mt15\">\r\n              <p class=\"heading\">Product List</p>\r\n              <div mat-dialog-content>\r\n                <div class=\"cs-table left-right-10\">\r\n                  <!-- <div class=\" border-top\"> -->\r\n                  <div class=\"table-head\">\r\n                    <table>\r\n                      <tr>\r\n                        <th class=\"w30 text-center \">Sr.No</th>\r\n                        <th class=\"w100\">Category</th>\r\n                        <th class=\"w100\">Sub Category</th>\r\n                        <th class=\"w180\">Product Detail</th>\r\n                        <th class=\"w30 text-center \">Qty</th>\r\n                      </tr>\r\n                    </table>\r\n                    <!-- </div> -->\r\n                  </div>\r\n\r\n                  <div class=\"table-container pb0\">\r\n                    <div class=\"table-content none-shadow\">\r\n                      <table>\r\n                        <ng-container *ngFor=\"let row of add_list; let i = index\">\r\n                          <tr>\r\n                            <td class=\"w30 text-center \">{{ i + 1 }}</td>\r\n                            <td class=\"w100\">{{ row.category_name | titlecase}}</td>\r\n                            <td class=\"w100\">{{ row.subcat_name | titlecase}}</td>\r\n                            <td class=\"w180\">{{ row.product_name | titlecase}}-{{row.product_code | titlecase}}</td>\r\n                            <td class=\"w30 text-center \">{{ row.qty }}</td>\r\n                          </tr>\r\n                        </ng-container>\r\n                      </table>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"card\" *ngIf=\"skLoading\">\r\n            <div class=\"sk-head\">\r\n              <h2>&nbsp;</h2>\r\n            </div>\r\n            <div class=\"card-body\">\r\n              <div class=\"grid-box single mt10\" *ngFor=\"let row of [].constructor(5)\">\r\n                <div class=\"sk-box\">&nbsp;</div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"col s12 mt16 m12 l12\"\r\n          *ngIf=\"getData.complaint_status=='Done' || getData.complaint_status=='Reject'\">\r\n          <div class=\"card\" *ngIf=\"!skLoading\">\r\n            <div class=\"card-head\">\r\n              <h2>Closing Details</h2>\r\n            </div>\r\n            <div class=\"card-body\">\r\n              <div class=\"grid-box\">\r\n                <div class=\"block-feilds\">\r\n                  <span>Closing Date</span>\r\n                  <p>\r\n                    {{\r\n                    getData.closed_date != \"0000-00-00 00:00:00\"\r\n                    ? (getData.closed_date | date : 'dd MMM yyy ,h:mm a')\r\n                    : \"N/A\"\r\n                    }}\r\n                  </p>\r\n                </div>\r\n\r\n                <!-- <div class=\"block-feilds\">\r\n                  <span>Closing Type</span>\r\n                  <p>\r\n                    {{ getData.closing_type ? getData.closing_type : \"N/A\" }}\r\n                  </p>\r\n                </div> -->\r\n                <div class=\"block-feilds\">\r\n                  <span>Status Update By</span>\r\n                  <p>\r\n                    {{ getData.status_updated_by_name ? (getData.status_updated_by_name | titlecase): \"N/A\" }}\r\n                  </p>\r\n                </div>\r\n                <div class=\"block-feilds\" *ngIf=\"getData.complaint_status=='Done'\">\r\n                  <span>Closing Remark</span>\r\n                  <p>\r\n                    {{\r\n                    getData.closing_remark ? (getData.closing_remark | titlecase): \"N/A\"\r\n                    }}\r\n                  </p>\r\n                </div>\r\n                <div class=\"block-feilds\" *ngIf=\"getData.complaint_status=='Reject'\">\r\n                  <span>Reason of Reject</span>\r\n                  <p>\r\n                    {{\r\n                    getData.status_reason ? (getData.status_reason | titlecase): \"N/A\"\r\n                    }}\r\n                  </p>\r\n                </div>\r\n                <!-- <div class=\"block-feilds\">\r\n                  <span>Status Update Date</span>\r\n                  <p>\r\n                    {{\r\n                    getData.status_updated_date != \"0000-00-00 00:00:00\"\r\n                    ? (getData.status_updated_date | date : 'dd MMM yyy ,h:mm a')\r\n                    : \"N/A\"\r\n                    }}\r\n                  </p>\r\n                </div> -->\r\n\r\n              </div>\r\n              <div class=\"card-head mt15\" *ngIf=\"closeImg.length\">\r\n                <h2>Product Images</h2>\r\n              </div>\r\n              <div class=\"card-body\" *ngIf=\"closeImg.length\">\r\n                <div class=\"grid-box\">\r\n                  <div class=\"block-feilds\">\r\n                    <div class=\"doc-img\">\r\n                      <div class=\"image-block\" *ngFor=\"let row of closeImg\">\r\n                        <img [src]=\"url + row.image\" (click)=\"imageModel(url + row.image)\" style=\"cursor: zoom-in\" />\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col s12 m4 l4\">\r\n        <div class=\"card\" *ngIf=\"!skLoading\">\r\n          <div class=\"card-head\">\r\n            <h2>Logs</h2>\r\n          </div>\r\n\r\n          <div class=\"logs-box\">\r\n            <ng-container *ngFor=\"let row of logs\">\r\n              <div class=\"logshead\">\r\n                {{ row.created_by_name| titlecase }} :-\r\n                {{ row.date_created | date : 'dd MMM yyy ,h:mm a'}}\r\n              </div>\r\n              <div class=\"logscontent\">\r\n                <span>Remark : </span> {{ row.msg ? (row.msg| titlecase) : (row.remark| titlecase) }}\r\n              </div>\r\n            </ng-container>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"card\" *ngIf=\"skLoading\">\r\n          <div class=\"sk-head\">\r\n            <h2>&nbsp;</h2>\r\n          </div>\r\n          <div class=\"card-body\">\r\n            <div class=\"grid-box single mt10\" *ngFor=\"let row of [].constructor(5)\">\r\n              <div class=\"sk-box\">&nbsp;</div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n\r\n  </div>\r\n  <div class=\"fab-btns\" *ngIf=\"getData.complaint_status=='Pending'\">\r\n    <button class=\"pulse excel\" mat-fab color=\"primary\" [matMenuTriggerFor]=\"menu\">\r\n      <i class=\"material-icons\">apps</i>\r\n      Action\r\n    </button>\r\n    <mat-menu #menu=\"matMenu\">\r\n      <button mat-menu-item (click)=\"openDialog(getData.id,getData.state)\"\r\n        [ngClass]=\"{'pulse': fabBtnValue=='activity'}\">\r\n        <mat-icon>assignment</mat-icon>\r\n        <span>Assign Technician</span>\r\n      </button>\r\n\r\n      <button mat-menu-item (click)=\"openDialog2(getData.id)\" [ngClass]=\"{'pulse': fabBtnValue=='activity'}\">\r\n        <mat-icon>add</mat-icon>\r\n        <span>Add Remark</span>\r\n      </button>\r\n    </mat-menu>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/installation/installation-detail/installation-detail.component.scss":
/*!*************************************************************************************!*\
  !*** ./src/app/installation/installation-detail/installation-detail.component.scss ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/installation/installation-detail/installation-detail.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/installation/installation-detail/installation-detail.component.ts ***!
  \***********************************************************************************/
/*! exports provided: InstallationDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InstallationDetailComponent", function() { return InstallationDetailComponent; });
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
/* harmony import */ var _engineer_assign_model_engineer_assign_model_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../engineer-assign-model/engineer-assign-model.component */ "./src/app/installation/engineer-assign-model/engineer-assign-model.component.ts");
/* harmony import */ var _add_installation_remark_add_installation_remark_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../add-installation-remark/add-installation-remark.component */ "./src/app/installation/add-installation-remark/add-installation-remark.component.ts");
/* harmony import */ var _installation_update_model_installation_update_model_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../installation-update-model/installation-update-model.component */ "./src/app/installation/installation-update-model/installation-update-model.component.ts");















var InstallationDetailComponent = /** @class */ (function () {
    function InstallationDetailComponent(location, session, router, alert, service, editdialog, dialog, route, toast, excelservice, dialog1) {
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
        this.add_list = {};
        this.skLoading = false;
        this.assign_login_data = {};
        this.logined_user_data = {};
        this.stateDetail = [];
        this.product_size = [];
        this.featureFlag = false;
        this.allMrpFlag = false;
        this.complaintImg = [];
        this.fabBtnValue = 'excel';
        this.inspectionImg = [];
        this.closeImg = [];
        this.logs = [];
        this.url = this.service.uploadUrl + 'service_task/';
        this.route.params.subscribe(function (params) {
            _this.id = params.id;
            _this.service.currentUserID = params.id;
            if (_this.id) {
                _this.getInstallationDetail();
            }
        });
    }
    InstallationDetailComponent.prototype.ngOnInit = function () {
    };
    InstallationDetailComponent.prototype.getInstallationDetail = function () {
        var _this = this;
        this.loader = 1;
        this.skLoading = true;
        this.service.post_rqst({ 'complaint_id': this.id }, "ServiceTask/serviceInstallationDetail").subscribe(function (result) {
            if (result['statusCode'] == 200) {
                _this.skLoading = false;
                _this.getData = result['result'];
                console.log('getData', _this.getData);
                _this.add_list = _this.getData['add_list'];
                console.log('add_list', _this.add_list);
                _this.inspectionImg = _this.getData['inspection_image'];
                _this.closeImg = _this.getData['image'];
                _this.logs = _this.getData['log'];
                console.log(_this.logs);
            }
            else {
                _this.skLoading = false;
                _this.toast.errorToastr(result['statusMsg']);
            }
        }, function (err) {
            _this.skLoading = false;
            _this.toast.errorToastr('Something went wrong');
        });
    };
    // getInstallationDetail()
    // {
    //   this.loader=true
    //   this.skLoading = true;
    //   this.service.post_rqst({'complaint_id':this.id},"ServiceTask/serviceInstallationDetail").subscribe((result=>
    //     {
    //       this.skLoading = false;
    //       this.loader=false;
    //     }
    //     ));
    //   }
    InstallationDetailComponent.prototype.imageModel = function (image) {
        var dialogRef = this.dialog.open(src_app_image_module_image_module_component__WEBPACK_IMPORTED_MODULE_3__["ImageModuleComponent"], {
            panelClass: 'Image-modal',
            data: {
                image: image,
            }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log(result);
        });
    };
    InstallationDetailComponent.prototype.back = function () {
        this.location.back();
    };
    InstallationDetailComponent.prototype.openDialog = function (id, state) {
        console.log(id);
        var dialogRef = this.dialog.open(_engineer_assign_model_engineer_assign_model_component__WEBPACK_IMPORTED_MODULE_12__["EngineerAssignModelComponent"], {
            width: '400px',
            panelClass: 'cs-model',
            data: {
                id: id,
                state: state,
            }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result != false) {
                // this.getInstallationDetail();
            }
        });
    };
    InstallationDetailComponent.prototype.openDialog2 = function (id) {
        console.log(id);
        var dialogRef = this.dialog.open(_add_installation_remark_add_installation_remark_component__WEBPACK_IMPORTED_MODULE_13__["AddInstallationRemarkComponent"], {
            width: '400px',
            panelClass: 'cs-model',
            data: {
                id: id,
            }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result != false) {
                // this.getInstallationDetail();
            }
        });
    };
    InstallationDetailComponent.prototype.updateInstallationStataus = function (id) {
        var dialogRef = this.dialog.open(_installation_update_model_installation_update_model_component__WEBPACK_IMPORTED_MODULE_14__["InstallationUpdateModelComponent"], {
            width: '400px',
            panelClass: 'cs-model',
            data: {
                id: id,
            }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result != false) {
                // this.getInstallationDetail();
            }
        });
    };
    InstallationDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-installation-detail',
            template: __webpack_require__(/*! ./installation-detail.component.html */ "./src/app/installation/installation-detail/installation-detail.component.html"),
            styles: [__webpack_require__(/*! ./installation-detail.component.scss */ "./src/app/installation/installation-detail/installation-detail.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_8__["Location"], src_app_localstorage_service__WEBPACK_IMPORTED_MODULE_6__["sessionStorage"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], src_app_dialog_component__WEBPACK_IMPORTED_MODULE_9__["DialogComponent"], src_services_DatabaseService__WEBPACK_IMPORTED_MODULE_5__["DatabaseService"], src_app_dialog_service__WEBPACK_IMPORTED_MODULE_10__["DialogService"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_7__["ToastrManager"], src_app_service_exportexcel_service__WEBPACK_IMPORTED_MODULE_11__["ExportexcelService"], src_app_dialog_component__WEBPACK_IMPORTED_MODULE_9__["DialogComponent"]])
    ], InstallationDetailComponent);
    return InstallationDetailComponent;
}());



/***/ }),

/***/ "./src/app/installation/installation-list/installation-list.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/installation/installation-list/installation-list.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-container\">\r\n  <app-loader *ngIf=\"excelLoader\"></app-loader>\r\n  <div class=\"tools-container\">\r\n    <h2>Installation List</h2>\r\n\r\n    <div class=\"left-auto df ac flex-gap-10\">\r\n      <a mat-icon-button matTooltip=\"Refresh\" (click)=\"refresh()\">\r\n        <i class=\"material-icons\">refresh</i>\r\n      </a>\r\n\r\n      <div class=\"pagination\" *ngIf=\"installationList.length > 0\">\r\n        <div class=\"pagination-content\">\r\n          Pages\r\n          <span>{{ pagenumber }}</span>\r\n          of\r\n          <span>{{ total_page }}</span>\r\n        </div>\r\n        <div class=\"page-nav\">\r\n          <button mat-icon-button matTooltip=\"Older\" (click)=\"pervious()\" [disabled]=\"start == 0\">\r\n            <i class=\"material-icons\">navigate_before</i>\r\n          </button>\r\n          <button mat-icon-button matTooltip=\"Newer\" (click)=\"nextPage()\" [disabled]=\"pagenumber == total_page\">\r\n            <i class=\"material-icons\">navigate_next</i>\r\n          </button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"mat-tabbar\">\r\n      <ng-container>\r\n        <button mat-button [ngClass]=\"active_tab == 'All' ? 'active' : ''\"\r\n          (click)=\"active_tab = 'All'; getinspectionList('')\">\r\n          <i class=\"material-icons\">all_inbox</i>All({{ tab_count.all_count ? tab_count.all_count:'0' }})\r\n        </button>\r\n\r\n        <button mat-button [ngClass]=\"active_tab == 'Pending' ? 'active' : ''\"\r\n          (click)=\"active_tab = 'Pending'; getinspectionList('')\">\r\n          <i class=\"material-icons\">pending_actions</i>Pending({{\r\n          tab_count.pending_count\r\n          }})\r\n        </button>\r\n        <button mat-button [ngClass]=\"active_tab == 'Assigned' ? 'active' : ''\"\r\n          (click)=\"active_tab = 'Assigned'; getinspectionList('')\">\r\n          <i class=\"material-icons\">pending_actions</i>Assigned({{\r\n          tab_count.assigned_count\r\n          }})\r\n        </button>\r\n      </ng-container>\r\n      <button mat-button [ngClass]=\"active_tab == 'Done' ? 'active' : ''\"\r\n        (click)=\"active_tab = 'Done'; getinspectionList('')\">\r\n        <i class=\"material-icons\">thumb_up_alt</i>Complete({{\r\n        tab_count.done_count\r\n        }})\r\n      </button>\r\n      <button mat-button [ngClass]=\"active_tab == 'Reject' ? 'active' : ''\"\r\n        (click)=\"active_tab = 'Reject'; getinspectionList('')\">\r\n        <i class=\"material-icons\">thumb_down_alt</i>Reject({{\r\n        tab_count.reject_count\r\n        }})\r\n      </button>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"container container-scroll\">\r\n    <div class=\"cs-table horizontal-scroll\">\r\n      <div class=\"sticky-head\">\r\n        <div class=\"table-head\">\r\n          <table>\r\n            <tr>\r\n              <th class=\"w60\">Sr.No</th>\r\n              <th class=\"w150\">Date Created</th>\r\n              <th class=\"w150\">Created By</th>\r\n              <th class=\"w100\">Installation No.</th>\r\n              <th class=\"w150\">Customer Name</th>\r\n              <th class=\"w120\">Customer Mobile No.</th>\r\n              <th class=\"w180\">District & State</th>\r\n              <th class=\"w180\" *ngIf=\" active_tab !='Pending'\">Technician Details</th>\r\n              <th class=\"w50\">Total Item</th>\r\n              <th class=\"w100\" *ngIf=\"active_tab == 'All'\">Status</th>\r\n\r\n              <th class=\"w70 text-center\">TAT</th>\r\n              <th class=\"w180\">Last Remark</th>\r\n              <th class=\"w180\" *ngIf=\"active_tab == 'Reject' || active_tab == 'All'\">Reject Reason</th>\r\n              <th class=\"w140\" *ngIf=\"active_tab != 'Pending'\">Status Update Date</th>\r\n              <th class=\"w120\" *ngIf=\"active_tab != 'Pending'\">Status Update By</th>\r\n            </tr>\r\n          </table>\r\n        </div>\r\n\r\n        <div class=\"table-head bdrt\">\r\n          <table>\r\n            <tr>\r\n              <th class=\"w60\"></th>\r\n              <th class=\"w150\">\r\n                <div class=\"th-search-acmt\">\r\n                  <mat-form-field class=\"cs-input date-column infix-bodr\">\r\n                    <input matInput [matDatepicker]=\"picker\" placeholder=\"Date\" name=\"date_created\"\r\n                      #date_created=\"ngModel\" [(ngModel)]=\"filter_data.date_created\" (ngModelChange)=\"date_format()\"\r\n                      [max]=\"today_date\" readonly />\r\n                    <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\r\n                    <mat-datepicker #picker></mat-datepicker>\r\n                  </mat-form-field>\r\n                </div>\r\n              </th>\r\n              <th class=\"w150\">\r\n                <div class=\"th-search-acmt\">\r\n                  <mat-form-field>\r\n                    <input type=\"text\" matInput placeholder=\"Search ...\" name=\"created_name\"\r\n                      (keyup.enter)=\"getinspectionList('')\" #created_name=\"ngModel\"\r\n                      [(ngModel)]=\"filter_data.created_name\" />\r\n                  </mat-form-field>\r\n                </div>\r\n              </th>\r\n              <th class=\"w100\">\r\n                <div class=\"th-search-acmt\">\r\n                  <mat-form-field>\r\n                    <input type=\"text\" matInput placeholder=\"Search ...\" name=\"complain_no\"\r\n                      (keyup.enter)=\"getinspectionList('')\" #complain_no=\"ngModel\"\r\n                      [(ngModel)]=\"filter_data.complain_no\" />\r\n                  </mat-form-field>\r\n                </div>\r\n              </th>\r\n              <th class=\"w150\">\r\n                <div class=\"th-search-acmt\">\r\n                  <mat-form-field>\r\n                    <input type=\"text\" matInput placeholder=\"Search ...\" name=\"customer_name\"\r\n                      (keyup.enter)=\"getinspectionList('')\" #customer_name=\"ngModel\"\r\n                      [(ngModel)]=\"filter_data.customer_name\" />\r\n                  </mat-form-field>\r\n                </div>\r\n              </th>\r\n\r\n              <th class=\"w120\">\r\n                <div class=\"th-search-acmt\">\r\n                  <mat-form-field>\r\n                    <input type=\"text\" matInput placeholder=\"Search ...\" name=\"customer_mobile\"\r\n                      (keyup.enter)=\"getinspectionList('')\" #customer_mobile=\"ngModel\"\r\n                      [(ngModel)]=\"filter_data.customer_mobile\" />\r\n                  </mat-form-field>\r\n                </div>\r\n              </th>\r\n              <th class=\"w180\">\r\n                <div class=\"th-search-acmt\">\r\n                  <mat-form-field>\r\n                    <input type=\"text\" matInput placeholder=\"Search ...\" name=\"address\"\r\n                      (keyup.enter)=\"getinspectionList('')\" #address=\"ngModel\" [(ngModel)]=\"filter_data.address\" />\r\n                  </mat-form-field>\r\n                </div>\r\n              </th>\r\n              <th class=\"w180\" *ngIf=\" active_tab !='Pending'\">\r\n                <div class=\"th-search-acmt\">\r\n                  <mat-form-field>\r\n                    <input type=\"text\" matInput placeholder=\"Search ...\" name=\"carpenter_detail\"\r\n                      (keyup.enter)=\"getinspectionList('')\" #carpenter_detail=\"ngModel\"\r\n                      [(ngModel)]=\"filter_data.carpenter_detail\">\r\n                  </mat-form-field>\r\n                </div>\r\n              </th>\r\n              <th class=\"w50\">\r\n                <div class=\"th-search-acmt\">\r\n                  <!-- <mat-form-field>\r\n                    <input type=\"text\" matInput placeholder=\"Search ...\" name=\"carpenter_detail\"\r\n                      #carpenter_detail=\"ngModel\" [(ngModel)]=\"filter_data.carpenter_detail\">\r\n                  </mat-form-field> -->\r\n                </div>\r\n              </th>\r\n              <th class=\"w100\" *ngIf=\"active_tab == 'All'\">\r\n                <div class=\"th-search-acmt\">\r\n                  <mat-form-field class=\"cs-input select-input\">\r\n                    <mat-select name=\"complaint_status\" #complaint_status=\"ngModel\"\r\n                      [(ngModel)]=\"filter_data.complaint_status\" (selectionChange)=\"getinspectionList('')\">\r\n                      <mat-option value=\"\">All</mat-option>\r\n                      <mat-option value=\"Pending\">Pending</mat-option>\r\n                      <mat-option value=\"Done\">Done </mat-option>\r\n                      <mat-option value=\"Reject\">Reject </mat-option>\r\n                    </mat-select>\r\n                  </mat-form-field>\r\n                </div>\r\n\r\n\r\n              </th>\r\n\r\n              <th class=\"w70 text-center\"></th>\r\n              <th class=\"w180\"></th>\r\n              <th class=\"w180\" *ngIf=\"active_tab == 'Reject'|| active_tab == 'All'\"></th>\r\n              <th class=\"w140\" *ngIf=\"active_tab != 'Pending'\">\r\n                <div class=\"th-search-acmt\">\r\n                  <mat-form-field class=\"cs-input date-column infix-bodr\">\r\n                    <input matInput [matDatepicker]=\"picker2\" placeholder=\"Date\" name=\"status_updated_date\"\r\n                      #status_updated_date=\"ngModel\" [(ngModel)]=\"filter_data.status_updated_date\"\r\n                      (ngModelChange)=\"date_format2()\" [max]=\"today_date\" readonly />\r\n                    <mat-datepicker-toggle matSuffix [for]=\"picker2\"></mat-datepicker-toggle>\r\n                    <mat-datepicker #picker2></mat-datepicker>\r\n                  </mat-form-field>\r\n                </div>\r\n              </th>\r\n              <th class=\"w120\" *ngIf=\"active_tab != 'Pending'\">\r\n                <div class=\"th-search-acmt\">\r\n                  <mat-form-field>\r\n                    <input type=\"text\" matInput placeholder=\"Search ...\" name=\"status_updated_by_name\"\r\n                      (keyup.enter)=\"getinspectionList('')\" #status_updated_by_name=\"ngModel\"\r\n                      [(ngModel)]=\"filter_data.status_updated_by_name\" />\r\n                  </mat-form-field>\r\n                </div>\r\n              </th>\r\n            </tr>\r\n          </table>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"table-container\">\r\n        <div class=\"table-content\">\r\n          <table>\r\n            <ng-container *ngIf=\"!loader\">\r\n              <tr *ngFor=\"let row of installationList; let i = index\"\r\n                [ngClass]=\"{ Current: service.currentUserID == row.id }\">\r\n                <td class=\"w60\">{{ i + 1 + sr_no }}</td>\r\n                <td class=\"w150\">\r\n                  {{\r\n                  row.date_created\r\n                  ? (row.date_created | date : \"dd MMM yyy ,h:mm a\")\r\n                  : \"--\"\r\n                  }}\r\n                </td>\r\n                <td class=\"w150\">\r\n                  {{ row.created_name ? (row.created_name | titlecase) : \"--\" }}\r\n                </td>\r\n                <td class=\"w100\">\r\n                  <a class=\"link-btn\" mat-button (click)=\"service.setData(filter_data)\"\r\n                    routerLink=\"installation-detail/{{ row.id }}\" routerLinkActive=\"active\">{{ row.complain_no }}</a>\r\n                </td>\r\n                <td class=\"w150\">{{ row.customer_name | titlecase }}</td>\r\n                <td class=\"w120\">{{ row.customer_mobile }}</td>\r\n                <td class=\"w180\">{{row.address?(row.address|titlecase):'--'}}</td>\r\n                <!-- <td class=\"180\">{{row.address?(row.address|titlecase):'--'}}</td> -->\r\n                <td class=\"w180\" *ngIf=\" active_tab !='Pending'\">{{row.carpenter_name ? (row.carpenter_name| titlecase)\r\n                  : '--'}}-{{row.carpenter_mobile\r\n                  ?\r\n                  row.carpenter_mobile : '--'}}</td>\r\n                <td class=\"w50 text-center\"><a class=\"link-btn flat\"\r\n                    (click)=\"attendancDetail(row)\">{{row.total_items}}</a></td>\r\n                <td class=\"w100\" *ngIf=\"active_tab == 'All'\">\r\n                  <strong class=\"yellow-clr\" *ngIf=\"row.complaint_status=='Pending'\">{{row.complaint_status|\r\n                    titlecase}}</strong>\r\n                  <strong class=\"green-clr\" *ngIf=\"row.complaint_status=='Done'\">{{row.complaint_status|\r\n                    titlecase}}</strong>\r\n                  <strong class=\"red-clr\" *ngIf=\"row.complaint_status=='Reject'\">{{row.complaint_status|\r\n                    titlecase}}</strong>\r\n                </td>\r\n\r\n\r\n                <td class=\"w70 text-center\">{{row.pending_at}}</td>\r\n                <td class=\"w180\">{{row.remark?(row.remark| titlecase):'--'}}</td>\r\n                <td class=\"w180\" *ngIf=\"active_tab == 'Reject' || active_tab == 'All'\">\r\n                  {{row.status_reason?(row.status_reason| titlecase):'--'}}\r\n                </td>\r\n                <td class=\"w140\" *ngIf=\"active_tab != 'Pending'\">\r\n                  {{\r\n                  row.status_updated_date != \"0000-00-00 00:00:00\"\r\n                  ? (row.status_updated_date | date : \"dd MMM yyy ,h:mm a\")\r\n                  : \"--\"\r\n                  }}\r\n                </td>\r\n                <td class=\"w120\" *ngIf=\"active_tab != 'Pending'\">\r\n                  {{row.status_updated_by_name?(row.status_updated_by_name|titlecase):'--'}}</td>\r\n              </tr>\r\n            </ng-container>\r\n            <ng-container *ngIf=\"loader\">\r\n              <tr class=\"sk-loading\" *ngFor=\"let row of [].constructor(10)\">\r\n                <td class=\"w60\">\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n                <td class=\"w150\">\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n                <td class=\"w150\">\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n                <td class=\"w100\">\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n                <td class=\"w150\">\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n                <td class=\"w120\">\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n                <td class=\"w180\">\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n                <td class=\"w180\" *ngIf=\" active_tab !='Pending'\">\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n                <td class=\"w50\">\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n                <td class=\"w100\" *ngIf=\"active_tab == 'All'\">\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n\r\n                <td class=\"w70\">\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n                <td class=\"w180\">\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n                <td class=\"w180\" *ngIf=\"active_tab == 'Reject'\">\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n                <td class=\"w140\" *ngIf=\" active_tab !='Pending'\">\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n                <td class=\"w120\" *ngIf=\" active_tab !='Pending'\">\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n              </tr>\r\n            </ng-container>\r\n          </table>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <ng-container *ngIf=\"datanotofound == true && installationList.length == 0\">\r\n      <app-not-result-found></app-not-result-found>\r\n    </ng-container>\r\n  </div>\r\n  <div></div>\r\n\r\n  <div class=\"fab-btns\">\r\n    <button class=\"pulse excel\" mat-fab color=\"primary\" [ngClass]=\"{ pulse: fabBtnValue == 'add' }\"\r\n      [matMenuTriggerFor]=\"menu\">\r\n      <i class=\"material-icons\">apps</i>\r\n      Action\r\n    </button>\r\n  </div>\r\n  <mat-menu #menu=\"matMenu\">\r\n    <button mat-menu-item (click)=\"downloadExcel()\" *ngIf=\"installationList.length > 0\">\r\n      <mat-icon>download</mat-icon>\r\n      <span>Download excel</span>\r\n    </button>\r\n    <button mat-menu-item (click)=\"lastBtnValue('add')\" routerLink=\"add-installation/installation\"\r\n      routerLinkActive=\"router-link-active\">\r\n      <mat-icon>add</mat-icon>\r\n      <span>Add New</span>\r\n    </button>\r\n  </mat-menu>\r\n</div>"

/***/ }),

/***/ "./src/app/installation/installation-list/installation-list.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/installation/installation-list/installation-list.component.scss ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/installation/installation-list/installation-list.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/installation/installation-list/installation-list.component.ts ***!
  \*******************************************************************************/
/*! exports provided: InstallationListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InstallationListComponent", function() { return InstallationListComponent; });
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
/* harmony import */ var _product_detail_model_product_detail_model_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../product-detail-model/product-detail-model.component */ "./src/app/installation/product-detail-model/product-detail-model.component.ts");










var InstallationListComponent = /** @class */ (function () {
    function InstallationListComponent(dialog, dialogs, alert, service, rout, toast, session, dialog2) {
        this.dialog = dialog;
        this.dialogs = dialogs;
        this.alert = alert;
        this.service = service;
        this.rout = rout;
        this.toast = toast;
        this.session = session;
        this.dialog2 = dialog2;
        this.fabBtnValue = 'add';
        this.installationList = [];
        this.filter = false;
        this.data = [];
        this.start = 0;
        this.total_page = 0;
        this.pagenumber = 0;
        this.loader = false;
        this.tab_active = 'all';
        this.active_tab = 'Pending';
        this.filter_data = {};
        this.excelLoader = false;
        this.datanotofound = false;
        this.downurl = '';
        this.downurl = service.downloadUrl;
        this.page_limit = service.pageLimit;
    }
    InstallationListComponent.prototype.ngOnInit = function () {
        this.filter_data = this.service.getData();
        if (this.filter_data.status) {
            this.active_tab = this.filter_data.status;
        }
        this.getinspectionList('');
    };
    InstallationListComponent.prototype.pervious = function () {
        this.start = this.start - this.page_limit;
        this.getinspectionList('');
    };
    InstallationListComponent.prototype.nextPage = function () {
        this.start = this.start + this.page_limit;
        this.getinspectionList('');
    };
    InstallationListComponent.prototype.refresh = function () {
        this.start = 0;
        this.filter_data = {};
        this.getinspectionList('');
    };
    InstallationListComponent.prototype.clear = function () {
        this.refresh();
    };
    InstallationListComponent.prototype.goToDetailHandler = function (id) {
        window.open("/installation-detail/" + id);
    };
    InstallationListComponent.prototype.date_format = function () {
        this.filter_data.date_created = moment__WEBPACK_IMPORTED_MODULE_4__(this.filter_data.date_created).format('YYYY-MM-DD');
        this.getinspectionList('');
    };
    InstallationListComponent.prototype.date_format2 = function () {
        this.filter_data.status_updated_date = moment__WEBPACK_IMPORTED_MODULE_4__(this.filter_data.status_updated_date).format('YYYY-MM-DD');
        this.getinspectionList('');
    };
    InstallationListComponent.prototype.getinspectionList = function (data) {
        var _this = this;
        if (this.pagenumber > this.total_page) {
            this.pagenumber = this.total_page;
            this.start = this.pageCount - this.page_limit;
        }
        if (this.start < 0) {
            this.start = 0;
        }
        this.filter_data.status = this.active_tab;
        var header = this.service.post_rqst({ 'filter': this.filter_data, 'start': this.start, 'pagelimit': this.page_limit }, "ServiceTask/serviceInstallationList");
        this.loader = true;
        header.subscribe(function (result) {
            if (result['statusCode'] == 200) {
                // console.log('result',result);
                _this.installationList = result['result'];
                // console.log(this.installationList);
                // console.log(this.installationList['add_list']);
                _this.pageCount = result['count'];
                _this.tab_count = result['tab_count'];
                _this.scheme_active_count = result['scheme_active_count'];
                _this.loader = false;
                if (_this.installationList.length == 0) {
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
                for (var i = 0; i < _this.installationList.length; i++) {
                    if (_this.installationList[i].status == '1') {
                        _this.installationList[i].newStatus = true;
                    }
                    else if (_this.installationList[i].status == '0') {
                        _this.installationList[i].newStatus = false;
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
    InstallationListComponent.prototype.lastBtnValue = function (value) {
        this.fabBtnValue = value;
    };
    InstallationListComponent.prototype.downloadExcel = function () {
        var _this = this;
        var header = this.service.post_rqst({ 'filter': this.filter_data }, "Excel/service_installation_list");
        this.excelLoader = true;
        header.subscribe((function (result) {
            if (result['msg'] == true) {
                window.open(_this.downurl + result['filename']);
                _this.getinspectionList('');
                _this.excelLoader = false;
            }
            else {
            }
        }));
    };
    InstallationListComponent.prototype.attendancDetail = function (row) {
        console.log(row.add_list);
        var dialogRef = this.dialog2.open(_product_detail_model_product_detail_model_component__WEBPACK_IMPORTED_MODULE_9__["ProductDetailModelComponent"], {
            width: '800px',
            panelClass: 'cs-model',
            data: {
                row: row.add_list,
            }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result != false) {
                // this.getinspectionList('');
            }
        });
    };
    InstallationListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-installation-list',
            template: __webpack_require__(/*! ./installation-list.component.html */ "./src/app/installation/installation-list/installation-list.component.html"),
            styles: [__webpack_require__(/*! ./installation-list.component.scss */ "./src/app/installation/installation-list/installation-list.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_dialog_component__WEBPACK_IMPORTED_MODULE_7__["DialogComponent"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"], src_app_dialog_component__WEBPACK_IMPORTED_MODULE_7__["DialogComponent"], src_services_DatabaseService__WEBPACK_IMPORTED_MODULE_6__["DatabaseService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_5__["ToastrManager"], src_app_localstorage_service__WEBPACK_IMPORTED_MODULE_8__["sessionStorage"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]])
    ], InstallationListComponent);
    return InstallationListComponent;
}());



/***/ }),

/***/ "./src/app/installation/installation-module/installation-module.module.ts":
/*!********************************************************************************!*\
  !*** ./src/app/installation/installation-module/installation-module.module.ts ***!
  \********************************************************************************/
/*! exports provided: InstallationModuleModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InstallationModuleModule", function() { return InstallationModuleModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _installation_list_installation_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../installation-list/installation-list.component */ "./src/app/installation/installation-list/installation-list.component.ts");
/* harmony import */ var _installation_add_installation_add_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../installation-add/installation-add.component */ "./src/app/installation/installation-add/installation-add.component.ts");
/* harmony import */ var _installation_detail_installation_detail_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../installation-detail/installation-detail.component */ "./src/app/installation/installation-detail/installation-detail.component.ts");
/* harmony import */ var src_app_auth_component_guard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/auth-component.guard */ "./src/app/auth-component.guard.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-multiselect-dropdown */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/ng-multiselect-dropdown/fesm5/ng-multiselect-dropdown.js");
/* harmony import */ var src_app_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/material */ "./src/app/material.ts");
/* harmony import */ var angular_ng_autocomplete__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! angular-ng-autocomplete */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/angular-ng-autocomplete/fesm5/angular-ng-autocomplete.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var ngx_mat_select_search__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-mat-select-search */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/ngx-mat-select-search/fesm5/ngx-mat-select-search.js");
/* harmony import */ var src_app_app_utility_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/app-utility.module */ "./src/app/app-utility.module.ts");















var inspectionRoutes = [
    { path: "", children: [
            { path: "", component: _installation_list_installation_list_component__WEBPACK_IMPORTED_MODULE_3__["InstallationListComponent"], canActivate: [src_app_auth_component_guard__WEBPACK_IMPORTED_MODULE_6__["AuthComponentGuard"]], data: { expectedRole: ['1'] } },
            { path: 'add-installation/:type', component: _installation_add_installation_add_component__WEBPACK_IMPORTED_MODULE_4__["InstallationAddComponent"], canActivate: [src_app_auth_component_guard__WEBPACK_IMPORTED_MODULE_6__["AuthComponentGuard"]], data: { expectedRole: ['1'] } },
            { path: "installation-detail/:id", children: [
                    { path: "", component: _installation_detail_installation_detail_component__WEBPACK_IMPORTED_MODULE_5__["InstallationDetailComponent"], canActivate: [src_app_auth_component_guard__WEBPACK_IMPORTED_MODULE_6__["AuthComponentGuard"]], data: { expectedRole: ['1'] } },
                    { path: 'add-installation/:type/:id', component: _installation_add_installation_add_component__WEBPACK_IMPORTED_MODULE_4__["InstallationAddComponent"], canActivate: [src_app_auth_component_guard__WEBPACK_IMPORTED_MODULE_6__["AuthComponentGuard"]], data: { expectedRole: ['1'] } }
                ] }
        ] },
];
var InstallationModuleModule = /** @class */ (function () {
    function InstallationModuleModule() {
    }
    InstallationModuleModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_installation_list_installation_list_component__WEBPACK_IMPORTED_MODULE_3__["InstallationListComponent"], _installation_detail_installation_detail_component__WEBPACK_IMPORTED_MODULE_5__["InstallationDetailComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_7__["RouterModule"].forChild(inspectionRoutes),
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"],
                ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_9__["NgMultiSelectDropDownModule"],
                src_app_material__WEBPACK_IMPORTED_MODULE_10__["MaterialModule"],
                angular_ng_autocomplete__WEBPACK_IMPORTED_MODULE_11__["AutocompleteLibModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatDialogModule"],
                ngx_mat_select_search__WEBPACK_IMPORTED_MODULE_13__["NgxMatSelectSearchModule"],
                src_app_app_utility_module__WEBPACK_IMPORTED_MODULE_14__["AppUtilityModule"]
            ]
        })
    ], InstallationModuleModule);
    return InstallationModuleModule;
}());



/***/ })

}]);