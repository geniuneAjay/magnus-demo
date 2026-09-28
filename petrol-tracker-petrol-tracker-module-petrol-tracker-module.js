(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["petrol-tracker-petrol-tracker-module-petrol-tracker-module"],{

/***/ "./src/app/petrol-tracker/add-petrol-entry-modal/add-petrol-entry-modal.component.html":
/*!*********************************************************************************************!*\
  !*** ./src/app/petrol-tracker/add-petrol-entry-modal/add-petrol-entry-modal.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"edit-modal\">\r\n  <form #addPetrolForm=\"ngForm\" name=\"addPetrolForm\">\r\n    <div mat-dialog-content>\r\n      <div>\r\n        <p class=\"heading\">Add Petrol Entry</p>\r\n      </div>\r\n      <div class=\"cs-form\">\r\n        <div class=\"row\">\r\n          <div class=\"col s6\">\r\n            <mat-form-field class=\"cs-input\" appearance=\"outline\">\r\n              <mat-label>Fill Date *</mat-label>\r\n              <input matInput type=\"date\" name=\"fill_date\"\r\n                [(ngModel)]=\"formData.fill_date\" [max]=\"today_date\" required>\r\n            </mat-form-field>\r\n          </div>\r\n          <div class=\"col s6\">\r\n            <mat-form-field class=\"cs-input\" appearance=\"outline\">\r\n              <mat-label>Petrol Litres *</mat-label>\r\n              <input matInput placeholder=\"e.g. 5.5\" name=\"petrol_litres\"\r\n                [(ngModel)]=\"formData.petrol_litres\"\r\n                (keypress)=\"MobileNumber($event)\" required>\r\n            </mat-form-field>\r\n          </div>\r\n        </div>\r\n        <div class=\"row\">\r\n          <div class=\"col s6\">\r\n            <mat-form-field class=\"cs-input\" appearance=\"outline\">\r\n              <mat-label>Amount (Rs.) *</mat-label>\r\n              <input matInput placeholder=\"e.g. 500\" name=\"amount\"\r\n                [(ngModel)]=\"formData.amount\"\r\n                (keypress)=\"MobileNumber($event)\" required>\r\n            </mat-form-field>\r\n          </div>\r\n          <div class=\"col s6\">\r\n            <mat-form-field class=\"cs-input\" appearance=\"outline\">\r\n              <mat-label>Meter Reading (KM)</mat-label>\r\n              <input matInput placeholder=\"e.g. 12500\" name=\"meter_reading\"\r\n                [(ngModel)]=\"formData.meter_reading\"\r\n                (keypress)=\"MobileNumber($event)\">\r\n            </mat-form-field>\r\n          </div>\r\n        </div>\r\n        <div class=\"row\">\r\n          <div class=\"col s12\">\r\n            <label class=\"upload-label\">Bill Image</label>\r\n            <div class=\"upload-section\">\r\n              <input type=\"file\" accept=\"image/*\" (change)=\"onFileChange($event)\"\r\n                #fileInput style=\"display: none;\">\r\n              <button type=\"button\" mat-stroked-button color=\"primary\"\r\n                (click)=\"fileInput.click()\" *ngIf=\"!imagePreview\">\r\n                <i class=\"material-icons\">cloud_upload</i> Choose Image\r\n              </button>\r\n              <div *ngIf=\"imagePreview\" class=\"image-preview\">\r\n                <img [src]=\"imagePreview\" class=\"preview-img\">\r\n                <button type=\"button\" mat-icon-button color=\"warn\"\r\n                  (click)=\"removeImage()\" class=\"remove-btn\">\r\n                  <i class=\"material-icons\">close</i>\r\n                </button>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div mat-dialog-actions>\r\n      <button class=\"mr10\" mat-stroked-button color=\"warn\" [mat-dialog-close]=\"false\">Cancel</button>\r\n      <button mat-raised-button color=\"accent\"\r\n        [disabled]=\"savingFlag || !formData.fill_date || !formData.petrol_litres || !formData.amount\"\r\n        (click)=\"submitEntry()\">\r\n        {{savingFlag ? 'Saving...' : 'Add Entry'}}\r\n      </button>\r\n    </div>\r\n  </form>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/petrol-tracker/add-petrol-entry-modal/add-petrol-entry-modal.component.scss":
/*!*********************************************************************************************!*\
  !*** ./src/app/petrol-tracker/add-petrol-entry-modal/add-petrol-entry-modal.component.scss ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".upload-label {\n  font-size: 12px;\n  color: #888;\n  margin-bottom: 8px;\n  display: block;\n}\n\n.upload-section {\n  margin-bottom: 16px;\n}\n\n.image-preview {\n  position: relative;\n  display: inline-block;\n}\n\n.image-preview .preview-img {\n  max-width: 200px;\n  max-height: 150px;\n  border-radius: 8px;\n  border: 1px solid #ddd;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n\n.image-preview .remove-btn {\n  position: absolute;\n  top: -10px;\n  right: -10px;\n  background: #fff;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);\n}\n\n.heading {\n  font-size: 18px;\n  font-weight: 600;\n  margin: 0 0 16px;\n}"

/***/ }),

/***/ "./src/app/petrol-tracker/add-petrol-entry-modal/add-petrol-entry-modal.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/petrol-tracker/add-petrol-entry-modal/add-petrol-entry-modal.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: AddPetrolEntryModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddPetrolEntryModalComponent", function() { return AddPetrolEntryModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var src_services_DatabaseService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/_services/DatabaseService */ "./src/_services/DatabaseService.ts");
/* harmony import */ var ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng6-toastr-notifications */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/ng6-toastr-notifications/fesm5/ng6-toastr-notifications.js");





var AddPetrolEntryModalComponent = /** @class */ (function () {
    function AddPetrolEntryModalComponent(data, dialogRef, serve, toast) {
        this.data = data;
        this.dialogRef = dialogRef;
        this.serve = serve;
        this.toast = toast;
        this.formData = {};
        this.savingFlag = false;
        this.imagePreview = '';
        this.today_date = new Date().toISOString().slice(0, 10);
    }
    AddPetrolEntryModalComponent.prototype.ngOnInit = function () {
    };
    AddPetrolEntryModalComponent.prototype.onFileChange = function (event) {
        var _this = this;
        var file = event.target.files[0];
        if (file) {
            if (!file.type.match('image.*')) {
                this.toast.errorToastr('Please select a valid image file');
                return;
            }
            if (file.size > 5 * 1024 * 1024) {
                this.toast.errorToastr('Image size should be less than 5MB');
                return;
            }
            var reader = new FileReader();
            reader.onload = function (e) {
                _this.formData.bill_image = e.target.result;
                _this.imagePreview = e.target.result;
            };
            reader.readAsDataURL(file);
        }
    };
    AddPetrolEntryModalComponent.prototype.removeImage = function () {
        this.formData.bill_image = '';
        this.imagePreview = '';
    };
    AddPetrolEntryModalComponent.prototype.submitEntry = function () {
        var _this = this;
        if (!this.formData.fill_date) {
            this.toast.errorToastr('Please select fill date');
            return;
        }
        if (!this.formData.petrol_litres || this.formData.petrol_litres <= 0) {
            this.toast.errorToastr('Please enter valid petrol litres');
            return;
        }
        if (!this.formData.amount || this.formData.amount <= 0) {
            this.toast.errorToastr('Please enter valid amount');
            return;
        }
        this.savingFlag = true;
        var payload = {
            user_id: this.data.user_id,
            fill_date: this.formData.fill_date,
            petrol_litres: this.formData.petrol_litres,
            amount: this.formData.amount
        };
        if (this.formData.meter_reading) {
            payload.meter_reading = this.formData.meter_reading;
        }
        if (this.formData.bill_image) {
            payload.bill_image = this.formData.bill_image;
        }
        this.serve.post_rqst(payload, 'PetrolTracker/addPetrolEntry').subscribe(function (result) {
            _this.savingFlag = false;
            if (result['statusCode'] == 200) {
                _this.toast.successToastr(result['statusMsg']);
                _this.dialogRef.close(true);
            }
            else {
                _this.toast.errorToastr(result['statusMsg']);
            }
        }, function (error) {
            _this.savingFlag = false;
            _this.toast.errorToastr('Something went wrong, please try again');
        });
    };
    AddPetrolEntryModalComponent.prototype.MobileNumber = function (event) {
        var pattern = /[0-9.\+\-\ ]/;
        var inputChar = String.fromCharCode(event.charCode);
        if (event.keyCode != 8 && !pattern.test(inputChar)) {
            event.preventDefault();
        }
    };
    AddPetrolEntryModalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-add-petrol-entry-modal',
            template: __webpack_require__(/*! ./add-petrol-entry-modal.component.html */ "./src/app/petrol-tracker/add-petrol-entry-modal/add-petrol-entry-modal.component.html"),
            styles: [__webpack_require__(/*! ./add-petrol-entry-modal.component.scss */ "./src/app/petrol-tracker/add-petrol-entry-modal/add-petrol-entry-modal.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object, _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"],
            src_services_DatabaseService__WEBPACK_IMPORTED_MODULE_3__["DatabaseService"],
            ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_4__["ToastrManager"]])
    ], AddPetrolEntryModalComponent);
    return AddPetrolEntryModalComponent;
}());



/***/ }),

/***/ "./src/app/petrol-tracker/petrol-tracker-module/petrol-tracker.module.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/petrol-tracker/petrol-tracker-module/petrol-tracker.module.ts ***!
  \*******************************************************************************/
/*! exports provided: PetrolTrackerModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PetrolTrackerModule", function() { return PetrolTrackerModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_mat_select_search__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-mat-select-search */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/ngx-mat-select-search/fesm5/ngx-mat-select-search.js");
/* harmony import */ var src_app_app_utility_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/app-utility.module */ "./src/app/app-utility.module.ts");
/* harmony import */ var src_app_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/material */ "./src/app/material.ts");
/* harmony import */ var src_app_auth_component_guard__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/auth-component.guard */ "./src/app/auth-component.guard.ts");
/* harmony import */ var _petrol_tracker_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../petrol-tracker.component */ "./src/app/petrol-tracker/petrol-tracker.component.ts");
/* harmony import */ var _add_petrol_entry_modal_add_petrol_entry_modal_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../add-petrol-entry-modal/add-petrol-entry-modal.component */ "./src/app/petrol-tracker/add-petrol-entry-modal/add-petrol-entry-modal.component.ts");












var petrolTrackerRoutes = [
    { path: "", component: _petrol_tracker_component__WEBPACK_IMPORTED_MODULE_10__["PetrolTrackerComponent"], canActivate: [src_app_auth_component_guard__WEBPACK_IMPORTED_MODULE_9__["AuthComponentGuard"]], data: { expectedRole: ['1'] } },
];
var PetrolTrackerModule = /** @class */ (function () {
    function PetrolTrackerModule() {
    }
    PetrolTrackerModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_petrol_tracker_component__WEBPACK_IMPORTED_MODULE_10__["PetrolTrackerComponent"], _add_petrol_entry_modal_add_petrol_entry_modal_component__WEBPACK_IMPORTED_MODULE_11__["AddPetrolEntryModalComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild(petrolTrackerRoutes),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                src_app_material__WEBPACK_IMPORTED_MODULE_8__["MaterialModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialogModule"],
                ngx_mat_select_search__WEBPACK_IMPORTED_MODULE_6__["NgxMatSelectSearchModule"],
                src_app_app_utility_module__WEBPACK_IMPORTED_MODULE_7__["AppUtilityModule"]
            ]
        })
    ], PetrolTrackerModule);
    return PetrolTrackerModule;
}());



/***/ }),

/***/ "./src/app/petrol-tracker/petrol-tracker.component.html":
/*!**************************************************************!*\
  !*** ./src/app/petrol-tracker/petrol-tracker.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-container\">\r\n  <div class=\"tools-container\">\r\n    <h2>Petrol Tracker</h2>\r\n  </div>\r\n\r\n  <div class=\"container pt10 pl10 pr10 pb50\">\r\n\r\n    <!-- TAB NAV -->\r\n    <div class=\"tab-nav\">\r\n      <button [class.active]=\"activeTab === 'petrol'\" (click)=\"setTab('petrol')\">\r\n        <i class=\"material-icons\">local_gas_station</i> Petrol Tracking\r\n      </button>\r\n      <button [class.active]=\"activeTab === 'meter'\" (click)=\"setTab('meter')\">\r\n        <i class=\"material-icons\">speed</i> Meter Reading\r\n      </button>\r\n      <button [class.active]=\"activeTab === 'cars'\" (click)=\"setTab('cars')\">\r\n        <i class=\"material-icons\">directions_car</i> Car Master\r\n      </button>\r\n      <button [class.active]=\"activeTab === 'insights'\" (click)=\"setTab('insights')\">\r\n        <i class=\"material-icons\">insights</i> Insights\r\n      </button>\r\n    </div>\r\n\r\n    <!-- ==================== PETROL TRACKING TAB ==================== -->\r\n    <div *ngIf=\"activeTab === 'petrol'\">\r\n\r\n      <!-- User Filter -->\r\n      <div class=\"row\">\r\n        <div class=\"col s12\">\r\n          <div class=\"card pb0\">\r\n            <div class=\"card-head\"><h2>Select User</h2></div>\r\n            <div class=\"card-body cs-form\">\r\n              <div class=\"row\">\r\n                <div class=\"col s12 m4 l4\">\r\n                  <mat-form-field appearance=\"outline\">\r\n                    <mat-label>Select Sales User</mat-label>\r\n                    <mat-select [(ngModel)]=\"selectedUserId\" (selectionChange)=\"onUserSelect()\">\r\n                      <ngx-mat-select-search [formControl]=\"userFilterCtrl\" placeholderLabel=\"Search User...\"\r\n                        noEntriesFoundLabel=\"No user found\"></ngx-mat-select-search>\r\n                      <mat-option *ngFor=\"let user of filteredUsers\" [value]=\"user.id\">\r\n                        {{user.name}} ({{user.employee_id}})\r\n                      </mat-option>\r\n                    </mat-select>\r\n                  </mat-form-field>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <!-- Petrol List -->\r\n      <div class=\"row\" *ngIf=\"selectedUserId\">\r\n        <div class=\"col s12\">\r\n          <div class=\"card pb0\">\r\n            <div class=\"card-head\">\r\n              <h2>Petrol Fill History ({{petrolTotalCount}})</h2>\r\n            </div>\r\n\r\n            <!-- Filters -->\r\n            <div class=\"card-body cs-form\">\r\n              <div class=\"row\">\r\n                <div class=\"col s12 m3 l3\">\r\n                  <mat-form-field appearance=\"outline\">\r\n                    <mat-label>Date From</mat-label>\r\n                    <input matInput type=\"date\" [(ngModel)]=\"petrolFilter.date_from\">\r\n                  </mat-form-field>\r\n                </div>\r\n                <div class=\"col s12 m3 l3\">\r\n                  <mat-form-field appearance=\"outline\">\r\n                    <mat-label>Date To</mat-label>\r\n                    <input matInput type=\"date\" [(ngModel)]=\"petrolFilter.date_to\">\r\n                  </mat-form-field>\r\n                </div>\r\n                <div class=\"col s12 m3 l3\">\r\n                  <button mat-raised-button color=\"primary\" (click)=\"applyPetrolFilter()\" style=\"margin-top:8px;margin-right:8px;\">Search</button>\r\n                  <button mat-raised-button (click)=\"clearPetrolFilter()\" style=\"margin-top:8px;\">Clear</button>\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n            <!-- Table -->\r\n            <div class=\"card-body\" style=\"overflow-x:auto;\">\r\n              <div *ngIf=\"loadingPetrol\" class=\"text-center\" style=\"padding:20px;\">\r\n                <mat-spinner [diameter]=\"30\" style=\"margin:0 auto;\"></mat-spinner>\r\n              </div>\r\n              <table class=\"table\" *ngIf=\"!loadingPetrol && petrolList.length > 0\">\r\n                <thead>\r\n                  <tr>\r\n                    <th>Sr.</th>\r\n                    <th>Date</th>\r\n                    <th>Car Name</th>\r\n                    <th>Car No.</th>\r\n                    <th>Type</th>\r\n                    <th>Petrol (LT)</th>\r\n                    <th>Amount (Rs.)</th>\r\n                    <th>Bill Image</th>\r\n                    <th>Added On</th>\r\n                  </tr>\r\n                </thead>\r\n                <tbody>\r\n                  <tr *ngFor=\"let item of petrolList; let i = index\">\r\n                    <td>{{(petrolPage - 1) * petrolPageLimit + i + 1}}</td>\r\n                    <td>{{item.fill_date}}</td>\r\n                    <td>{{item.car_name || '-'}}</td>\r\n                    <td>{{item.car_number || '-'}}</td>\r\n                    <td>{{item.vehicle_type || '-'}}</td>\r\n                    <td>{{item.petrol_litres}}</td>\r\n                    <td>{{item.amount}}</td>\r\n                    <td>\r\n                      <img *ngIf=\"item.bill_image\" src=\"{{uploadUrl}}petrol/{{item.bill_image}}\"\r\n                        style=\"width:50px;height:50px;object-fit:cover;border-radius:4px;cursor:pointer;\"\r\n                        (click)=\"item.showBillImg = !item.showBillImg\">\r\n                      <span *ngIf=\"!item.bill_image\">-</span>\r\n                      <div *ngIf=\"item.showBillImg\" style=\"margin-top:8px;\">\r\n                        <img src=\"{{uploadUrl}}petrol/{{item.bill_image}}\" style=\"max-width:300px;border-radius:8px;border:1px solid #ddd;\">\r\n                      </div>\r\n                    </td>\r\n                    <td>{{item.date_created}}</td>\r\n                  </tr>\r\n                </tbody>\r\n              </table>\r\n              <div *ngIf=\"!loadingPetrol && petrolList.length == 0\" class=\"text-center\" style=\"padding:30px;color:#999;\">\r\n                No petrol entries found\r\n              </div>\r\n            </div>\r\n\r\n            <!-- Pagination -->\r\n            <div class=\"card-body\" *ngIf=\"petrolTotalCount > petrolPageLimit\">\r\n              <div class=\"pagination-section\">\r\n                <button mat-button [disabled]=\"petrolPage == 1\" (click)=\"petrolPageChanged(petrolPage - 1)\">Previous</button>\r\n                <span style=\"margin:0 16px;\">Page {{petrolPage}} of {{Math.ceil(petrolTotalCount / petrolPageLimit)}}</span>\r\n                <button mat-button [disabled]=\"petrolPage * petrolPageLimit >= petrolTotalCount\" (click)=\"petrolPageChanged(petrolPage + 1)\">Next</button>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"row\" *ngIf=\"!selectedUserId\">\r\n        <div class=\"col s12 text-center\" style=\"padding:60px 0;color:#999;\">\r\n          <i class=\"material-icons\" style=\"font-size:48px;color:#ddd;\">local_gas_station</i>\r\n          <p>Please select a user to view petrol data</p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <!-- ==================== METER READING TAB ==================== -->\r\n    <div *ngIf=\"activeTab === 'meter'\">\r\n\r\n      <!-- User Filter -->\r\n      <div class=\"row\">\r\n        <div class=\"col s12\">\r\n          <div class=\"card pb0\">\r\n            <div class=\"card-head\"><h2>Select User</h2></div>\r\n            <div class=\"card-body cs-form\">\r\n              <div class=\"row\">\r\n                <div class=\"col s12 m4 l4\">\r\n                  <mat-form-field appearance=\"outline\">\r\n                    <mat-label>Select Sales User</mat-label>\r\n                    <mat-select [(ngModel)]=\"selectedUserId\" (selectionChange)=\"onUserSelect()\">\r\n                      <ngx-mat-select-search [formControl]=\"userFilterCtrl\" placeholderLabel=\"Search User...\"\r\n                        noEntriesFoundLabel=\"No user found\"></ngx-mat-select-search>\r\n                      <mat-option *ngFor=\"let user of filteredUsers\" [value]=\"user.id\">\r\n                        {{user.name}} ({{user.employee_id}})\r\n                      </mat-option>\r\n                    </mat-select>\r\n                  </mat-form-field>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <!-- Meter Reading List -->\r\n      <div class=\"row\" *ngIf=\"selectedUserId\">\r\n        <div class=\"col s12\">\r\n          <div class=\"card pb0\">\r\n            <div class=\"card-head\">\r\n              <h2>Meter Reading History ({{meterTotalCount}})</h2>\r\n            </div>\r\n\r\n            <!-- Filters -->\r\n            <div class=\"card-body cs-form\">\r\n              <div class=\"row\">\r\n                <div class=\"col s12 m3 l3\">\r\n                  <mat-form-field appearance=\"outline\">\r\n                    <mat-label>Date From</mat-label>\r\n                    <input matInput type=\"date\" [(ngModel)]=\"meterFilter.date_from\">\r\n                  </mat-form-field>\r\n                </div>\r\n                <div class=\"col s12 m3 l3\">\r\n                  <mat-form-field appearance=\"outline\">\r\n                    <mat-label>Date To</mat-label>\r\n                    <input matInput type=\"date\" [(ngModel)]=\"meterFilter.date_to\">\r\n                  </mat-form-field>\r\n                </div>\r\n                <div class=\"col s12 m3 l3\">\r\n                  <button mat-raised-button color=\"primary\" (click)=\"applyMeterFilter()\" style=\"margin-top:8px;margin-right:8px;\">Search</button>\r\n                  <button mat-raised-button (click)=\"clearMeterFilter()\" style=\"margin-top:8px;\">Clear</button>\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n            <!-- Table -->\r\n            <div class=\"card-body\" style=\"overflow-x:auto;\">\r\n              <div *ngIf=\"loadingMeter\" class=\"text-center\" style=\"padding:20px;\">\r\n                <mat-spinner [diameter]=\"30\" style=\"margin:0 auto;\"></mat-spinner>\r\n              </div>\r\n              <table class=\"table\" *ngIf=\"!loadingMeter && meterList.length > 0\">\r\n                <thead>\r\n                  <tr>\r\n                    <th>Sr.</th>\r\n                    <th>Date</th>\r\n                    <th>Car</th>\r\n                    <th>Car No.</th>\r\n                    <th>Start Reading</th>\r\n                    <th>Start Image</th>\r\n                    <th>Stop Reading</th>\r\n                    <th>Stop Image</th>\r\n                    <th>Distance (KM)</th>\r\n                    <th>Status</th>\r\n                    <th>Action</th>\r\n                  </tr>\r\n                </thead>\r\n                <tbody>\r\n                  <ng-container *ngFor=\"let item of meterList; let i = index\">\r\n                    <!-- Normal data row -->\r\n                    <tr [class.editing-row]=\"editingItem?.id === item.id\">\r\n                      <td>{{(meterPage - 1) * meterPageLimit + i + 1}}</td>\r\n                      <td>{{item.trip_date}}</td>\r\n                      <td>{{item.car_name || '-'}}</td>\r\n                      <td>{{item.car_number || '-'}}</td>\r\n                      <td>{{item.start_meter}}</td>\r\n                      <td>\r\n                        <ng-container *ngIf=\"item.start_image; else noImg\">\r\n                          <img src=\"{{uploadUrl}}meter_reading/{{item.start_image}}\"\r\n                            style=\"width:50px;height:50px;object-fit:cover;border-radius:4px;cursor:pointer;\"\r\n                            (click)=\"item.showStartImg = !item.showStartImg\">\r\n                          <div *ngIf=\"item.showStartImg\" style=\"margin-top:8px;\">\r\n                            <img src=\"{{uploadUrl}}meter_reading/{{item.start_image}}\" style=\"max-width:300px;border-radius:8px;border:1px solid #ddd;\">\r\n                          </div>\r\n                        </ng-container>\r\n                        <ng-template #noImg><span>-</span></ng-template>\r\n                      </td>\r\n                      <td>{{item.stop_meter || '-'}}</td>\r\n                      <td>\r\n                        <ng-container *ngIf=\"item.stop_image; else noStopImg\">\r\n                          <img src=\"{{uploadUrl}}meter_reading/{{item.stop_image}}\"\r\n                            style=\"width:50px;height:50px;object-fit:cover;border-radius:4px;cursor:pointer;\"\r\n                            (click)=\"item.showStopImg = !item.showStopImg\">\r\n                          <div *ngIf=\"item.showStopImg\" style=\"margin-top:8px;\">\r\n                            <img src=\"{{uploadUrl}}meter_reading/{{item.stop_image}}\" style=\"max-width:300px;border-radius:8px;border:1px solid #ddd;\">\r\n                          </div>\r\n                        </ng-container>\r\n                        <ng-template #noStopImg><span>-</span></ng-template>\r\n                      </td>\r\n                      <td>{{item.status === 'complete' ? (item.distance_km + ' KM') : '-'}}</td>\r\n                      <td>\r\n                        <span class=\"status-badge\" [class.complete]=\"item.status === 'complete'\" [class.incomplete]=\"item.status === 'incomplete'\">\r\n                          {{item.status === 'complete' ? 'Complete' : 'Incomplete'}}\r\n                        </span>\r\n                      </td>\r\n                      <td>\r\n                        <button mat-icon-button color=\"primary\" (click)=\"openEdit(item)\"\r\n                          *ngIf=\"editingItem?.id !== item.id\" title=\"Edit Meter Reading\">\r\n                          <i class=\"material-icons\">edit</i>\r\n                        </button>\r\n                        <button mat-icon-button color=\"warn\" (click)=\"cancelEdit()\"\r\n                          *ngIf=\"editingItem?.id === item.id\" title=\"Cancel Edit\">\r\n                          <i class=\"material-icons\">close</i>\r\n                        </button>\r\n                      </td>\r\n                    </tr>\r\n\r\n                    <!-- Inline edit row -->\r\n                    <tr *ngIf=\"editingItem?.id === item.id\" class=\"inline-edit-tr\">\r\n                      <td colspan=\"11\">\r\n                        <div class=\"inline-edit-form\">\r\n                          <div class=\"inline-edit-title\">\r\n                            <i class=\"material-icons\">edit</i>\r\n                            Edit Meter Reading — {{item.trip_date}} | {{item.car_name}} ({{item.car_number}})\r\n                          </div>\r\n                          <div class=\"inline-edit-fields\">\r\n\r\n                            <!-- Start Reading -->\r\n                            <div class=\"inline-edit-group\">\r\n                              <label>Start Reading (km) *</label>\r\n                              <input type=\"number\" [(ngModel)]=\"editForm.start_meter\"\r\n                                placeholder=\"e.g. 12345\" min=\"0\">\r\n                            </div>\r\n\r\n                            <!-- Stop Reading -->\r\n                            <div class=\"inline-edit-group\">\r\n                              <label>Stop Reading (km)</label>\r\n                              <input type=\"number\" [(ngModel)]=\"editForm.stop_meter\"\r\n                                placeholder=\"e.g. 12500\" min=\"0\">\r\n                            </div>\r\n\r\n                          </div>\r\n                          <div class=\"inline-edit-actions\">\r\n                            <button mat-raised-button color=\"primary\" (click)=\"saveEdit()\" [disabled]=\"savingEdit\">\r\n                              <mat-spinner *ngIf=\"savingEdit\" [diameter]=\"16\"\r\n                                style=\"display:inline-block;margin-right:6px;vertical-align:middle;\"></mat-spinner>\r\n                              <i class=\"material-icons\" *ngIf=\"!savingEdit\" style=\"font-size:16px;vertical-align:middle;margin-right:4px;\">save</i>\r\n                              {{savingEdit ? 'Saving...' : 'Save Changes'}}\r\n                            </button>\r\n                            <button mat-button (click)=\"cancelEdit()\">Cancel</button>\r\n                          </div>\r\n                        </div>\r\n                      </td>\r\n                    </tr>\r\n                  </ng-container>\r\n                </tbody>\r\n              </table>\r\n              <div *ngIf=\"!loadingMeter && meterList.length == 0\" class=\"text-center\" style=\"padding:30px;color:#999;\">\r\n                No meter readings found\r\n              </div>\r\n            </div>\r\n\r\n            <!-- Pagination -->\r\n            <div class=\"card-body\" *ngIf=\"meterTotalCount > meterPageLimit\">\r\n              <div class=\"pagination-section\">\r\n                <button mat-button [disabled]=\"meterPage == 1\" (click)=\"meterPageChanged(meterPage - 1)\">Previous</button>\r\n                <span style=\"margin:0 16px;\">Page {{meterPage}} of {{Math.ceil(meterTotalCount / meterPageLimit)}}</span>\r\n                <button mat-button [disabled]=\"meterPage * meterPageLimit >= meterTotalCount\" (click)=\"meterPageChanged(meterPage + 1)\">Next</button>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"row\" *ngIf=\"!selectedUserId\">\r\n        <div class=\"col s12 text-center\" style=\"padding:60px 0;color:#999;\">\r\n          <i class=\"material-icons\" style=\"font-size:48px;color:#ddd;\">speed</i>\r\n          <p>Please select a user to view meter readings</p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <!-- ==================== CAR MASTER TAB ==================== -->\r\n    <div *ngIf=\"activeTab === 'cars'\">\r\n      <div class=\"row\">\r\n        <div class=\"col s12\">\r\n          <div class=\"card pb0\">\r\n            <div class=\"card-head\" style=\"display:flex;justify-content:space-between;align-items:center;\">\r\n              <h2>Car Master ({{carList.length}})</h2>\r\n              <button mat-raised-button color=\"primary\" (click)=\"toggleAddCarForm()\">\r\n                <i class=\"material-icons\">{{showAddCarForm ? 'close' : 'add'}}</i>\r\n                {{showAddCarForm ? 'Cancel' : 'Add Car'}}\r\n              </button>\r\n            </div>\r\n\r\n            <!-- Add Car Form -->\r\n            <div class=\"card-body cs-form\" *ngIf=\"showAddCarForm\">\r\n              <div class=\"row\">\r\n                <div class=\"col s12 m4 l4\">\r\n                  <mat-form-field appearance=\"outline\">\r\n                    <mat-label>Car Name *</mat-label>\r\n                    <input matInput [(ngModel)]=\"carForm.car_name\" placeholder=\"e.g. Swift Dzire\">\r\n                  </mat-form-field>\r\n                </div>\r\n                <div class=\"col s12 m4 l4\">\r\n                  <mat-form-field appearance=\"outline\">\r\n                    <mat-label>Car Number *</mat-label>\r\n                    <input matInput [(ngModel)]=\"carForm.car_number\" placeholder=\"e.g. MH12AB1234\" style=\"text-transform:uppercase;\">\r\n                  </mat-form-field>\r\n                </div>\r\n                <div class=\"col s12 m3 l3\">\r\n                  <mat-form-field appearance=\"outline\">\r\n                    <mat-label>Vehicle Type *</mat-label>\r\n                    <mat-select [(ngModel)]=\"carForm.vehicle_type\">\r\n                      <mat-option *ngFor=\"let vt of vehicleTypes\" [value]=\"vt\">{{vt}}</mat-option>\r\n                    </mat-select>\r\n                  </mat-form-field>\r\n                </div>\r\n                <div class=\"col s12 m1 l1\" style=\"display:flex;align-items:center;margin-top:4px;\">\r\n                  <button mat-raised-button color=\"accent\" (click)=\"submitCar()\" [disabled]=\"savingCar\">\r\n                    {{savingCar ? 'Saving...' : 'Save'}}\r\n                  </button>\r\n                </div>\r\n              </div>\r\n            </div>\r\n\r\n            <!-- Car Table -->\r\n            <div class=\"card-body\" style=\"overflow-x:auto;\">\r\n              <div *ngIf=\"loadingCars\" class=\"text-center\" style=\"padding:20px;\">\r\n                <mat-spinner [diameter]=\"30\" style=\"margin:0 auto;\"></mat-spinner>\r\n              </div>\r\n              <table class=\"table\" *ngIf=\"!loadingCars && carList.length > 0\">\r\n                <thead>\r\n                  <tr>\r\n                    <th>Sr.</th>\r\n                    <th>Car Name</th>\r\n                    <th>Car Number</th>\r\n                    <th>Vehicle Type</th>\r\n                    <th>Added On</th>\r\n                    <th>Action</th>\r\n                  </tr>\r\n                </thead>\r\n                <tbody>\r\n                  <tr *ngFor=\"let car of carList; let i = index\">\r\n                    <td>{{i + 1}}</td>\r\n                    <td>{{car.car_name}}</td>\r\n                    <td>{{car.car_number}}</td>\r\n                    <td>\r\n                      <span class=\"type-badge\">{{car.vehicle_type}}</span>\r\n                    </td>\r\n                    <td>{{car.created_at}}</td>\r\n                    <td>\r\n                      <button mat-icon-button color=\"warn\" (click)=\"deleteCar(car.id)\" title=\"Delete\">\r\n                        <i class=\"material-icons\">delete</i>\r\n                      </button>\r\n                    </td>\r\n                  </tr>\r\n                </tbody>\r\n              </table>\r\n              <div *ngIf=\"!loadingCars && carList.length == 0\" class=\"text-center\" style=\"padding:30px;color:#999;\">\r\n                No cars found. Click \"Add Car\" to add a new car.\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <!-- ==================== INSIGHTS TAB ==================== -->\r\n    <div *ngIf=\"activeTab === 'insights'\">\r\n\r\n      <!-- User Selection -->\r\n      <div class=\"row\">\r\n        <div class=\"col s12\">\r\n          <div class=\"card pb0\">\r\n            <div class=\"card-head\"><h2>Select User</h2></div>\r\n            <div class=\"card-body cs-form\">\r\n              <div class=\"row\">\r\n                <div class=\"col s12 m4 l4\">\r\n                  <mat-form-field appearance=\"outline\">\r\n                    <mat-label>Select Sales User</mat-label>\r\n                    <mat-select [(ngModel)]=\"insightsUserId\" (selectionChange)=\"onInsightsUserSelect()\">\r\n                      <ngx-mat-select-search [formControl]=\"insightsUserFilterCtrl\" placeholderLabel=\"Search User...\"\r\n                        noEntriesFoundLabel=\"No user found\"></ngx-mat-select-search>\r\n                      <mat-option *ngFor=\"let user of insightsFilteredUsers\" [value]=\"user.id\">\r\n                        {{user.name}} ({{user.employee_id}})\r\n                      </mat-option>\r\n                    </mat-select>\r\n                  </mat-form-field>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <!-- Loading -->\r\n      <div class=\"row\" *ngIf=\"loadingInsights\">\r\n        <div class=\"col s12 text-center\" style=\"padding:30px;\">\r\n          <mat-spinner [diameter]=\"40\" style=\"margin:0 auto;\"></mat-spinner>\r\n        </div>\r\n      </div>\r\n\r\n      <!-- Insights Cards -->\r\n      <div class=\"row\" *ngIf=\"insightsUserId && !loadingInsights\">\r\n        <div class=\"col s12 m6 l4\" *ngFor=\"let car of insightsList\">\r\n          <div class=\"insight-card\">\r\n            <div class=\"insight-header\">\r\n              <div class=\"car-icon\"><i class=\"material-icons\">directions_car</i></div>\r\n              <div class=\"car-title\">\r\n                <h3>{{car.car_name}}</h3>\r\n                <span class=\"car-no\">{{car.car_number}}</span>\r\n                <span class=\"type-badge small\">{{car.vehicle_type}}</span>\r\n              </div>\r\n            </div>\r\n            <div class=\"insight-body\">\r\n              <div class=\"insight-row\">\r\n                <span class=\"i-label\"><i class=\"material-icons\">local_gas_station</i> Total Petrol</span>\r\n                <span class=\"i-value\">{{car.total_litres}} LT</span>\r\n              </div>\r\n              <div class=\"insight-row\">\r\n                <span class=\"i-label\"><i class=\"material-icons\">currency_rupee</i> Total Amount</span>\r\n                <span class=\"i-value\">Rs. {{car.total_amount}}</span>\r\n              </div>\r\n              <div class=\"insight-row\">\r\n                <span class=\"i-label\"><i class=\"material-icons\">route</i> Total Distance</span>\r\n                <span class=\"i-value\">{{car.total_distance}} KM</span>\r\n              </div>\r\n              <div class=\"insight-row highlight\">\r\n                <span class=\"i-label\"><i class=\"material-icons\">speed</i> Avg Mileage</span>\r\n                <span class=\"i-value big\">{{car.avg_mileage > 0 ? car.avg_mileage + ' KM/L' : 'N/A'}}</span>\r\n              </div>\r\n              <div class=\"insight-row\">\r\n                <span class=\"i-label\"><i class=\"material-icons\">trip_origin</i> Trips Completed</span>\r\n                <span class=\"i-value\">{{car.total_trips}}</span>\r\n              </div>\r\n              <div class=\"insight-row\">\r\n                <span class=\"i-label\"><i class=\"material-icons\">ev_station</i> Fill Count</span>\r\n                <span class=\"i-value\">{{car.total_fills}}</span>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"col s12 text-center\" *ngIf=\"insightsList.length == 0\" style=\"padding:40px;color:#999;\">\r\n          <i class=\"material-icons\" style=\"font-size:48px;color:#ddd;\">insights</i>\r\n          <p>No data found for selected user</p>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"row\" *ngIf=\"!insightsUserId\">\r\n        <div class=\"col s12 text-center\" style=\"padding:60px 0;color:#999;\">\r\n          <i class=\"material-icons\" style=\"font-size:48px;color:#ddd;\">insights</i>\r\n          <p>Please select a user to view insights</p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/petrol-tracker/petrol-tracker.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/petrol-tracker/petrol-tracker.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".tab-nav {\n  display: flex;\n  gap: 4px;\n  margin-bottom: 20px;\n  background: #fff;\n  border-radius: 10px;\n  padding: 6px;\n  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);\n  flex-wrap: wrap;\n}\n.tab-nav button {\n  flex: 1;\n  padding: 10px 16px;\n  border: none;\n  background: transparent;\n  border-radius: 8px;\n  cursor: pointer;\n  font-size: 13px;\n  font-weight: 500;\n  color: #777;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 6px;\n  transition: all 0.2s;\n}\n.tab-nav button i {\n  font-size: 18px;\n}\n.tab-nav button:hover {\n  background: #f5f5f5;\n  color: #333;\n}\n.tab-nav button.active {\n  background: #00668c;\n  color: #fff;\n}\n.table {\n  width: 100%;\n  border-collapse: collapse;\n}\n.table thead tr {\n  background: #f5f5f5;\n}\n.table thead tr th {\n  padding: 12px 16px;\n  text-align: left;\n  font-size: 13px;\n  font-weight: 600;\n  color: #555;\n  border-bottom: 2px solid #eee;\n  white-space: nowrap;\n}\n.table tbody tr {\n  border-bottom: 1px solid #f0f0f0;\n}\n.table tbody tr:hover {\n  background: #fafafa;\n}\n.table tbody tr td {\n  padding: 10px 16px;\n  font-size: 13px;\n  color: #333;\n}\n.pagination-section {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  padding: 10px 0;\n}\n.text-center {\n  text-align: center;\n}\n.status-badge {\n  padding: 4px 10px;\n  border-radius: 20px;\n  font-size: 11px;\n  font-weight: 600;\n}\n.status-badge.complete {\n  background: #e8f5e9;\n  color: #2e7d32;\n}\n.status-badge.incomplete {\n  background: #fff3e0;\n  color: #e65100;\n}\n.type-badge {\n  background: #e3f2fd;\n  color: #1565c0;\n  padding: 3px 10px;\n  border-radius: 20px;\n  font-size: 11px;\n  font-weight: 600;\n}\n.type-badge.small {\n  font-size: 10px;\n  padding: 2px 8px;\n}\n.editing-row td {\n  background: #f0f7ff !important;\n}\n.inline-edit-tr td {\n  padding: 0 !important;\n  background: #f8fbff;\n  border-bottom: 2px solid #00668c !important;\n}\n.inline-edit-form {\n  padding: 16px 20px;\n  border-left: 4px solid #00668c;\n}\n.inline-edit-form .inline-edit-title {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  font-size: 13px;\n  font-weight: 600;\n  color: #00668c;\n  margin-bottom: 14px;\n}\n.inline-edit-form .inline-edit-title i {\n  font-size: 16px;\n}\n.inline-edit-form .inline-edit-fields {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 16px;\n  align-items: flex-end;\n  margin-bottom: 14px;\n}\n.inline-edit-form .inline-edit-group {\n  display: flex;\n  flex-direction: column;\n  gap: 5px;\n  min-width: 140px;\n}\n.inline-edit-form .inline-edit-group label {\n  font-size: 11px;\n  font-weight: 600;\n  color: #666;\n  text-transform: uppercase;\n  letter-spacing: 0.4px;\n}\n.inline-edit-form .inline-edit-group input[type=number] {\n  padding: 8px 10px;\n  border: 1px solid #ccc;\n  border-radius: 6px;\n  font-size: 13px;\n  color: #333;\n  outline: none;\n  width: 150px;\n  transition: border-color 0.2s;\n}\n.inline-edit-form .inline-edit-group input[type=number]:focus {\n  border-color: #00668c;\n  box-shadow: 0 0 0 2px rgba(0, 102, 140, 0.12);\n}\n.inline-edit-form .inline-edit-actions {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n.insight-card {\n  background: #fff;\n  border-radius: 12px;\n  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.08);\n  margin-bottom: 20px;\n  overflow: hidden;\n  border-top: 4px solid #00668c;\n}\n.insight-card .insight-header {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  padding: 16px;\n  background: #f8fbfc;\n  border-bottom: 1px solid #eee;\n}\n.insight-card .insight-header .car-icon {\n  width: 48px;\n  height: 48px;\n  border-radius: 50%;\n  background: #00668c;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #fff;\n  flex-shrink: 0;\n}\n.insight-card .insight-header .car-icon i {\n  font-size: 24px;\n}\n.insight-card .insight-header .car-title h3 {\n  margin: 0 0 4px;\n  font-size: 16px;\n  color: #222;\n  font-weight: 600;\n}\n.insight-card .insight-header .car-title .car-no {\n  font-size: 12px;\n  color: #888;\n  margin-right: 8px;\n}\n.insight-card .insight-body {\n  padding: 12px 16px;\n}\n.insight-card .insight-body .insight-row {\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  padding: 8px 0;\n  border-bottom: 1px solid #f5f5f5;\n}\n.insight-card .insight-body .insight-row:last-child {\n  border-bottom: none;\n}\n.insight-card .insight-body .insight-row.highlight {\n  background: #f0f7ff;\n  margin: 4px -16px;\n  padding: 10px 16px;\n  border-radius: 6px;\n  border-bottom: none;\n}\n.insight-card .insight-body .insight-row .i-label {\n  font-size: 12px;\n  color: #888;\n  display: flex;\n  align-items: center;\n  gap: 4px;\n}\n.insight-card .insight-body .insight-row .i-label i {\n  font-size: 16px;\n  color: #aaa;\n}\n.insight-card .insight-body .insight-row .i-value {\n  font-size: 14px;\n  font-weight: 600;\n  color: #333;\n}\n.insight-card .insight-body .insight-row .i-value.big {\n  font-size: 18px;\n  color: #00668c;\n}"

/***/ }),

/***/ "./src/app/petrol-tracker/petrol-tracker.component.ts":
/*!************************************************************!*\
  !*** ./src/app/petrol-tracker/petrol-tracker.component.ts ***!
  \************************************************************/
/*! exports provided: PetrolTrackerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PetrolTrackerComponent", function() { return PetrolTrackerComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_services_DatabaseService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/_services/DatabaseService */ "./src/_services/DatabaseService.ts");
/* harmony import */ var ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng6-toastr-notifications */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/ng6-toastr-notifications/fesm5/ng6-toastr-notifications.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/forms/fesm5/forms.js");





var PetrolTrackerComponent = /** @class */ (function () {
    function PetrolTrackerComponent(service, toast) {
        this.service = service;
        this.toast = toast;
        this.Math = Math;
        this.activeTab = 'petrol';
        // User selection
        this.salesUserList = [];
        this.selectedUserId = '';
        this.userFilterCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]();
        this.filteredUsers = [];
        // Upload URL
        this.uploadUrl = '';
        // ---------- PETROL TAB ----------
        this.petrolList = [];
        this.petrolTotalCount = 0;
        this.petrolPage = 1;
        this.petrolPageLimit = 50;
        this.petrolFilter = {};
        this.loadingPetrol = false;
        // ---------- METER READING TAB ----------
        this.meterList = [];
        this.meterTotalCount = 0;
        this.meterPage = 1;
        this.meterPageLimit = 50;
        this.meterFilter = {};
        this.loadingMeter = false;
        // ---------- CAR MASTER TAB ----------
        this.carList = [];
        this.loadingCars = false;
        this.showAddCarForm = false;
        this.savingCar = false;
        this.carForm = {};
        this.vehicleTypes = ['Petrol', 'Diesel', 'CNG'];
        // ---------- METER EDIT ----------
        this.editingItem = null;
        this.editForm = {};
        this.savingEdit = false;
        // ---------- INSIGHTS TAB ----------
        this.insightsUserId = '';
        this.insightsUserFilterCtrl = new _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormControl"]();
        this.insightsFilteredUsers = [];
        this.insightsList = [];
        this.loadingInsights = false;
        this.userData = JSON.parse(localStorage.getItem('st_user'));
        this.userId = this.userData['data']['id'];
        this.uploadUrl = this.service.uploadUrl;
    }
    PetrolTrackerComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.getSalesUserList();
        this.getCarList();
        this.userFilterCtrl.valueChanges.subscribe(function (search) {
            _this.filteredUsers = _this.filterUsers(search, _this.salesUserList);
        });
        this.insightsUserFilterCtrl.valueChanges.subscribe(function (search) {
            _this.insightsFilteredUsers = _this.filterUsers(search, _this.salesUserList);
        });
    };
    PetrolTrackerComponent.prototype.filterUsers = function (search, list) {
        if (!search)
            return list.slice();
        search = search.toLowerCase();
        return list.filter(function (u) { return u.name.toLowerCase().indexOf(search) > -1 ||
            (u.employee_id && u.employee_id.toLowerCase().indexOf(search) > -1); });
    };
    PetrolTrackerComponent.prototype.setTab = function (tab) {
        this.activeTab = tab;
    };
    PetrolTrackerComponent.prototype.getSalesUserList = function () {
        var _this = this;
        this.service.post_rqst({}, 'PetrolTracker/getSalesUserList').subscribe(function (resp) {
            if (resp['statusCode'] == 200) {
                _this.salesUserList = resp['result'] || [];
                _this.filteredUsers = _this.salesUserList.slice();
                _this.insightsFilteredUsers = _this.salesUserList.slice();
            }
        });
    };
    PetrolTrackerComponent.prototype.onUserSelect = function () {
        if (this.selectedUserId) {
            this.petrolPage = 1;
            this.meterPage = 1;
            this.petrolFilter = {};
            this.meterFilter = {};
            this.getPetrolReport();
            this.getMeterReport();
        }
    };
    // ==================== PETROL TAB ====================
    PetrolTrackerComponent.prototype.getPetrolReport = function () {
        var _this = this;
        if (!this.selectedUserId)
            return;
        this.loadingPetrol = true;
        var payload = {
            user_id: this.selectedUserId,
            start: (this.petrolPage - 1) * this.petrolPageLimit,
            pagelimit: this.petrolPageLimit
        };
        if (this.petrolFilter.date_from)
            payload.date_from = this.petrolFilter.date_from;
        if (this.petrolFilter.date_to)
            payload.date_to = this.petrolFilter.date_to;
        this.service.post_rqst(payload, 'PetrolTracker/getUserPetrolReport').subscribe(function (resp) {
            _this.loadingPetrol = false;
            if (resp['statusCode'] == 200) {
                _this.petrolList = resp['result']['petrol_list'] || [];
                _this.petrolTotalCount = resp['result']['total_count'] || 0;
            }
        }, function () { _this.loadingPetrol = false; });
    };
    PetrolTrackerComponent.prototype.applyPetrolFilter = function () {
        this.petrolPage = 1;
        this.getPetrolReport();
    };
    PetrolTrackerComponent.prototype.clearPetrolFilter = function () {
        this.petrolFilter = {};
        this.petrolPage = 1;
        this.getPetrolReport();
    };
    PetrolTrackerComponent.prototype.petrolPageChanged = function (page) {
        this.petrolPage = page;
        this.getPetrolReport();
    };
    // ==================== METER READING TAB ====================
    PetrolTrackerComponent.prototype.getMeterReport = function () {
        var _this = this;
        if (!this.selectedUserId)
            return;
        this.loadingMeter = true;
        var payload = {
            user_id: this.selectedUserId,
            start: (this.meterPage - 1) * this.meterPageLimit,
            pagelimit: this.meterPageLimit
        };
        if (this.meterFilter.date_from)
            payload.date_from = this.meterFilter.date_from;
        if (this.meterFilter.date_to)
            payload.date_to = this.meterFilter.date_to;
        this.service.post_rqst(payload, 'PetrolTracker/getMeterReadingReport').subscribe(function (resp) {
            _this.loadingMeter = false;
            if (resp['statusCode'] == 200) {
                _this.meterList = resp['result']['meter_list'] || [];
                _this.meterTotalCount = resp['result']['total_count'] || 0;
            }
        }, function () { _this.loadingMeter = false; });
    };
    PetrolTrackerComponent.prototype.applyMeterFilter = function () {
        this.meterPage = 1;
        this.getMeterReport();
    };
    PetrolTrackerComponent.prototype.clearMeterFilter = function () {
        this.meterFilter = {};
        this.meterPage = 1;
        this.getMeterReport();
    };
    PetrolTrackerComponent.prototype.meterPageChanged = function (page) {
        this.meterPage = page;
        this.getMeterReport();
    };
    PetrolTrackerComponent.prototype.openEdit = function (item) {
        this.editingItem = item;
        this.editForm = {
            id: item.id,
            start_meter: item.start_meter,
            stop_meter: item.stop_meter || '',
        };
    };
    PetrolTrackerComponent.prototype.cancelEdit = function () {
        this.editingItem = null;
        this.editForm = {};
    };
    PetrolTrackerComponent.prototype.saveEdit = function () {
        var _this = this;
        if (!this.editForm.start_meter && this.editForm.start_meter !== 0) {
            this.toast.errorToastr('Start Reading is required');
            return;
        }
        this.savingEdit = true;
        var payload = {
            id: this.editForm.id,
            start_meter: this.editForm.start_meter,
            stop_meter: this.editForm.stop_meter || null,
        };
        this.service.post_rqst(payload, 'MeterReading/updateMeterReading').subscribe(function (resp) {
            _this.savingEdit = false;
            if (resp['statusCode'] == 200) {
                _this.toast.successToastr(resp['statusMsg'] || 'Updated successfully');
                _this.editingItem = null;
                _this.editForm = {};
                _this.getMeterReport();
            }
            else {
                _this.toast.errorToastr(resp['statusMsg'] || 'Update failed');
            }
        }, function () {
            _this.savingEdit = false;
            _this.toast.errorToastr('Something went wrong');
        });
    };
    // ==================== CAR MASTER TAB ====================
    PetrolTrackerComponent.prototype.getCarList = function () {
        var _this = this;
        this.loadingCars = true;
        this.service.post_rqst({}, 'CarMaster/getCarList').subscribe(function (resp) {
            _this.loadingCars = false;
            if (resp['statusCode'] == 200) {
                _this.carList = resp['result'] || [];
            }
        }, function () { _this.loadingCars = false; });
    };
    PetrolTrackerComponent.prototype.toggleAddCarForm = function () {
        this.showAddCarForm = !this.showAddCarForm;
        if (this.showAddCarForm) {
            this.carForm = {};
        }
    };
    PetrolTrackerComponent.prototype.submitCar = function () {
        var _this = this;
        if (!this.carForm.car_name || !this.carForm.car_name.trim()) {
            this.toast.errorToastr('Please enter car name');
            return;
        }
        if (!this.carForm.car_number || !this.carForm.car_number.trim()) {
            this.toast.errorToastr('Please enter car number');
            return;
        }
        if (!this.carForm.vehicle_type) {
            this.toast.errorToastr('Please select vehicle type');
            return;
        }
        this.savingCar = true;
        this.service.post_rqst(this.carForm, 'CarMaster/addCar').subscribe(function (resp) {
            _this.savingCar = false;
            if (resp['statusCode'] == 200) {
                _this.toast.successToastr(resp['statusMsg']);
                _this.showAddCarForm = false;
                _this.carForm = {};
                _this.getCarList();
            }
            else {
                _this.toast.errorToastr(resp['statusMsg']);
            }
        }, function () {
            _this.savingCar = false;
            _this.toast.errorToastr('Something went wrong');
        });
    };
    PetrolTrackerComponent.prototype.deleteCar = function (id) {
        var _this = this;
        if (!confirm('Are you sure you want to delete this car?'))
            return;
        this.service.post_rqst({ id: id }, 'CarMaster/deleteCar').subscribe(function (resp) {
            if (resp['statusCode'] == 200) {
                _this.toast.successToastr(resp['statusMsg']);
                _this.getCarList();
            }
            else {
                _this.toast.errorToastr(resp['statusMsg']);
            }
        });
    };
    // ==================== INSIGHTS TAB ====================
    PetrolTrackerComponent.prototype.onInsightsUserSelect = function () {
        if (this.insightsUserId) {
            this.getCarWiseMileage();
        }
    };
    PetrolTrackerComponent.prototype.getCarWiseMileage = function () {
        var _this = this;
        this.loadingInsights = true;
        this.insightsList = [];
        this.service.post_rqst({ user_id: this.insightsUserId }, 'PetrolTracker/getCarWiseMileage').subscribe(function (resp) {
            _this.loadingInsights = false;
            if (resp['statusCode'] == 200) {
                _this.insightsList = resp['result'] || [];
            }
        }, function () { _this.loadingInsights = false; });
    };
    PetrolTrackerComponent.prototype.MobileNumber = function (event) {
        var pattern = /[0-9.\+\-\ ]/;
        var inputChar = String.fromCharCode(event.charCode);
        if (event.keyCode != 8 && !pattern.test(inputChar)) {
            event.preventDefault();
        }
    };
    PetrolTrackerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-petrol-tracker',
            template: __webpack_require__(/*! ./petrol-tracker.component.html */ "./src/app/petrol-tracker/petrol-tracker.component.html"),
            styles: [__webpack_require__(/*! ./petrol-tracker.component.scss */ "./src/app/petrol-tracker/petrol-tracker.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_services_DatabaseService__WEBPACK_IMPORTED_MODULE_2__["DatabaseService"], ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_3__["ToastrManager"]])
    ], PetrolTrackerComponent);
    return PetrolTrackerComponent;
}());



/***/ })

}]);