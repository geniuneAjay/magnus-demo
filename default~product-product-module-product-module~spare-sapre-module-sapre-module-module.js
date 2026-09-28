(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["default~product-product-module-product-module~spare-sapre-module-sapre-module-module"],{

/***/ "./src/app/product-upload/product-upload.component.html":
/*!**************************************************************!*\
  !*** ./src/app/product-upload/product-upload.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1 mat-dialog-title>{{savingFlag == true ? 'Please Wait ...': (modal_type=='insert'?'Upload\r\n  product':modal_type=='update'?'Update product basic details':modal_type=='update_mrp'?'Update product\r\n  price':modal_type=='update_point'?'Update category point':'Update product')}}</h1>\r\n<div mat-dialog-content>\r\n  <div class=\"dialog-content\">\r\n    <div class=\"excel-box\">\r\n      <label>\r\n        <form name=\"couponForm\" #f=\"ngForm\" novalidate autocomplete=\"off\">\r\n          <input type=\"file\" (change)=\"onUploadChange($event, f)\" name=\"fileupload\"\r\n            accept=\".csv,application/vnd.ms-excel,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet\"\r\n            style=\"display: none;\">\r\n        </form>\r\n        <i class=\"material-icons\">\r\n          cloud_upload\r\n        </i>\r\n        <p *ngIf=\"excel_name == ''\">Upload Product Data (In csv format)</p>\r\n        <p *ngIf=\"excel_name != ''\">{{excel_name}}</p>\r\n      </label>\r\n      <a *ngIf=\"modal_type=='insert'\" href=\"{{url}}sample_file/Product Sample File.csv\" target=\"_blank\"><i\r\n          class=\"material-icons\">download</i>Click Here To Download Sample File</a>\r\n      <a *ngIf=\"modal_type=='update'\" (click)=\"download_sample_file('update')\" target=\"_blank\"><i\r\n          class=\"material-icons\">download</i>Click Here To Download Sample File</a>\r\n      <a *ngIf=\"modal_type=='update_mrp'\" (click)=\"download_sample_file('update_mrp')\" target=\"_blank\"><i\r\n          class=\"material-icons\">download</i>Click Here To Download Sample File</a>\r\n      <a *ngIf=\"modal_type=='update_point'\" (click)=\"download_sample_file('update_point')\" target=\"_blank\"><i\r\n          class=\"material-icons\">download</i>Click Here To Download Sample File</a>\r\n    </div>\r\n\r\n    <div *ngIf=\"uploadError\">\r\n      <p mat-dialog-title>Failed To Upload: <span class=\"red-clr\">Failed:\r\n          {{uploadErrorMsgCount.failes}}</span> | <span class=\"green-clr\">Success:\r\n          {{uploadErrorMsgCount.success}}</span></p>\r\n      <div class=\"cs-table left-right-10\">\r\n        <div class=\"collapse-body pt0\">\r\n          <div class=\"cs-form\">\r\n            <div class=\"cs-table\">\r\n              <div class=\"table-container\">\r\n                <div class=\"table-content\">\r\n                  <table>\r\n                    <tr>\r\n                      <td class=\" padding0\">\r\n                        <table>\r\n                          <tr *ngFor=\"let row of uploadErrorMsg; let i=index\">\r\n                            <td class=\"border-top border-bottom\">{{i+1}}. {{row}}\r\n                            </td>\r\n                          </tr>\r\n                        </table>\r\n                      </td>\r\n                    </tr>\r\n                  </table>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n</div>\r\n<div mat-dialog-actions>\r\n  <div class=\"text-right wp100\">\r\n    <button class=\"mr10\" mat-stroked-button color=\"warn\" [mat-dialog-close]=\"false\">Cancel</button>\r\n    <button *ngIf=\"modal_type=='insert'\" mat-raised-button color=\"accent\" [disabled]=\"savingFlag == true\"\r\n      [ngClass]=\"{'loading': savingFlag == true}\" (click)=\"upload_user_data_excel('insert')\"\r\n      accept=\".csv,application/vnd.ms-excel,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet\">\r\n      {{savingFlag == true ? 'Saving' : 'Upload'}}\r\n    </button>\r\n\r\n    <button *ngIf=\"modal_type=='update'\" mat-raised-button color=\"accent\" [disabled]=\"savingFlag == true\"\r\n      [ngClass]=\"{'loading': savingFlag == true}\" (click)=\"upload_user_data_excel('update')\"\r\n      accept=\".csv,application/vnd.ms-excel,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet\">\r\n      {{savingFlag == true ? 'Saving' : 'Upload'}}\r\n    </button>\r\n\r\n    <button *ngIf=\"modal_type=='update_mrp'\" mat-raised-button color=\"accent\" [disabled]=\"savingFlag == true\"\r\n      [ngClass]=\"{'loading': savingFlag == true}\" (click)=\"upload_user_data_excel('update_mrp')\"\r\n      accept=\".csv,application/vnd.ms-excel,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet\">\r\n      {{savingFlag == true ? 'Saving' : 'Upload'}}\r\n    </button>\r\n\r\n    <button *ngIf=\"modal_type=='update_point'\" mat-raised-button color=\"accent\" [disabled]=\"savingFlag == true\"\r\n      [ngClass]=\"{'loading': savingFlag == true}\" (click)=\"upload_user_data_excel('update_point')\"\r\n      accept=\".csv,application/vnd.ms-excel,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet\">\r\n      {{savingFlag == true ? 'Saving' : 'Upload'}}\r\n    </button>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/product-upload/product-upload.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/product-upload/product-upload.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".cs-modal .mat-dialog-title {\n  margin: -10px -10px 0px -10px;\n  padding: 10px;\n  border-bottom: 1px solid var(--bodrColor);\n  font-size: 16px;\n  color: var(--text-color);\n  line-height: 20px;\n  position: relative;\n}\n.cs-modal .mat-dialog-title button.fix-btn,\n.cs-modal .mat-dialog-title a.fix-btn {\n  position: absolute;\n  top: 50%;\n  right: 0;\n  transform: translateY(-50%);\n}\n.cs-modal .mat-dialog-container {\n  background: var(--tertiary) !important;\n}\n.cs-modal .mat-dialog-container {\n  padding: 10px !important;\n}\n.cs-modal .mat-dialog-content {\n  padding: 0px 10px !important;\n  margin: 0 -10px !important;\n}\n.cs-modal .mat-dialog-actions {\n  margin-bottom: 0px !important;\n}\n.cs-modal .excel-box {\n  padding: 16px 0px;\n  width: 90%;\n  margin: 0 auto;\n  text-align: right;\n}\n.cs-modal .excel-box label {\n  width: 100%;\n  border: 3px dashed var(--success);\n  border-radius: 6px;\n  padding: 10px;\n  margin: 0 auto;\n  min-height: 130px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  grid-row-gap: 10px;\n  transition: 0.5s;\n  cursor: pointer;\n}\n.cs-modal .excel-box label p {\n  font-size: 13px;\n  color: var(--text-color);\n}\n.cs-modal .excel-box label i {\n  color: var(--success);\n  font-size: 24px;\n}\n.cs-modal .excel-box label:hover {\n  border: 4px dashed var(--success);\n}\n.cs-modal .excel-box label:hover i {\n  color: var(--black);\n  transform: scale(1.3);\n}\n.cs-modal .excel-box a {\n  color: var(--link-color);\n  font-size: 12px;\n  margin-top: 10px;\n  display: inline-flex;\n  grid-column-gap: 5px;\n  align-items: center;\n  cursor: pointer;\n}\n.cs-modal .excel-box a:hover {\n  text-decoration: underline;\n}\n.cs-modal .excel-box.error label {\n  border-color: var(--danger);\n  background: #FFF3F3;\n}\n.cs-modal .excel-box.error label i {\n  color: var(--danger);\n}\n.cs-modal .excel-box.error p.error-text {\n  text-align: left;\n  color: var(--danger);\n  margin-top: 10px;\n  font-size: 14px;\n}"

/***/ }),

/***/ "./src/app/product-upload/product-upload.component.ts":
/*!************************************************************!*\
  !*** ./src/app/product-upload/product-upload.component.ts ***!
  \************************************************************/
/*! exports provided: ProductUploadComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProductUploadComponent", function() { return ProductUploadComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng6-toastr-notifications */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/ng6-toastr-notifications/fesm5/ng6-toastr-notifications.js");
/* harmony import */ var src_services_DatabaseService__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/_services/DatabaseService */ "./src/_services/DatabaseService.ts");
/* harmony import */ var _dialog_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../dialog.component */ "./src/app/dialog.component.ts");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! lodash */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/lodash/dist/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _localstorage_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../localstorage.service */ "./src/app/localstorage.service.ts");

// import { InjectFlags } from '@angular/compiler/src/core';







var ProductUploadComponent = /** @class */ (function () {
    function ProductUploadComponent(data, session, toast, service, dialog, dialogRef) {
        this.data = data;
        this.session = session;
        this.toast = toast;
        this.service = service;
        this.dialog = dialog;
        this.dialogRef = dialogRef;
        this.formData = new FormData();
        this.excel_name = '';
        this.file = {};
        this.typecheck = '';
        this.istrue = false;
        this.assign_login_data = {};
        this.logined_user_data = {};
        this.savingFlag = false;
        this.excel_loader = false;
        this.uploadError = false;
        this.url = this.service.uploadUrl;
        this.assign_login_data = this.session.getSession();
        this.logined_user_data = this.assign_login_data.value.data;
        this.come_from = data['from'];
        this.modal_type = data['modal_type'];
    }
    ProductUploadComponent.prototype.ngOnInit = function () {
    };
    ProductUploadComponent.prototype.onUploadChange = function (evt, f) {
        this.file = evt.target.files[0];
        f.resetForm();
        this.excel_name = this.file.name;
        var allowed_types = ['text/csv'];
        this.typecheck = !lodash__WEBPACK_IMPORTED_MODULE_6__["includes"]("text/csv", this.file.type);
        if (!lodash__WEBPACK_IMPORTED_MODULE_6__["includes"](allowed_types, this.file.type)) {
            this.toast.errorToastr('Only CSV File Accepted');
            this.file = '';
            this.excel_name = '';
            this.istrue = false;
            return;
        }
        var byte = 1000000; // equal to 1mb
        if (this.file.size > (byte * 10)) {
            this.toast.errorToastr('Csv file size is too large, maximum file size is 10 MB.');
            this.file = '';
            this.istrue = false;
            return;
        }
        else {
            this.istrue = true;
        }
    };
    ProductUploadComponent.prototype.download_sample_file = function (upload_type) {
        var _this = this;
        this.service.post_rqst({ 'type': upload_type }, "Master/generateExcelForUpdate").subscribe(function (result) {
            if (result['statusCode'] == 200) {
                document.location.replace(_this.url + 'update_sample_file/updateProduct.csv');
            }
            else {
                _this.toast.errorToastr(result['statusMsg']);
            }
        });
    };
    ProductUploadComponent.prototype.upload_user_data_excel = function (upload_type) {
        var _this = this;
        this.dialogRef.disableClose = true;
        this.formData.append('category', this.file, this.file.name);
        this.formData.append('created_by_id', this.logined_user_data.id);
        this.formData.append('created_by_name', this.logined_user_data.name);
        this.formData.append('operation_type', this.modal_type);
        this.loader = 1;
        this.savingFlag = true;
        var header;
        if (upload_type == 'insert') {
            header = this.service.FileData((this.formData), 'Master/uploadProductInBulkByCsv');
        }
        else if (upload_type == 'update') {
            header = this.service.FileData((this.formData), 'Master/updateProductBasicInBulkByCsv');
        }
        else if (upload_type == 'update_mrp') {
            header = this.service.FileData((this.formData), 'Master/updateProductMrpInBulkByCsv');
        }
        else if (upload_type == 'update_point') {
            header = this.service.FileData((this.formData), 'Master/updateProductPointCatInBulkByCsv');
        }
        header.subscribe(function (result) {
            _this.dialogRef.disableClose = false;
            _this.formData = new FormData();
            if (result['statusCode'] == 200) {
                // this.toast.successToastr(result['statusMsg']);
                // this.dialogRef.close(true);
                // this.loader='';
                if (result['statusMsg'] == 'Data Imported successfully') {
                    _this.toast.successToastr(result['statusMsg']);
                    _this.dialogRef.close(true);
                    _this.savingFlag = false;
                }
                else {
                    _this.savingFlag = false;
                    _this.uploadError = true;
                    _this.uploadErrorMsg = result['statusMsg'];
                    _this.uploadErrorMsgCount = result['respose_count'];
                }
            }
            else {
                _this.toast.errorToastr(result['statusMsg']);
                _this.savingFlag = false;
            }
        }, function (err) { _this.formData = new FormData(); });
    };
    ProductUploadComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-product-upload',
            template: __webpack_require__(/*! ./product-upload.component.html */ "./src/app/product-upload/product-upload.component.html"),
            styles: [__webpack_require__(/*! ./product-upload.component.scss */ "./src/app/product-upload/product-upload.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object, _localstorage_service__WEBPACK_IMPORTED_MODULE_7__["sessionStorage"], ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_3__["ToastrManager"], src_services_DatabaseService__WEBPACK_IMPORTED_MODULE_4__["DatabaseService"], _dialog_component__WEBPACK_IMPORTED_MODULE_5__["DialogComponent"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]])
    ], ProductUploadComponent);
    return ProductUploadComponent;
}());



/***/ })

}]);