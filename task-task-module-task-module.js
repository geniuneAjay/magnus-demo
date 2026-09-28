(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["task-task-module-task-module"],{

/***/ "./src/app/task/task-add/task-add.component.html":
/*!*******************************************************!*\
  !*** ./src/app/task/task-add/task-add.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-container\">\r\n\r\n  <div class=\"tools-container\">\r\n    <a mat-icon-button matTooltip=\"Back\" routerLink=\"/task-list\">\r\n      <i class=\"material-icons\">arrow_back</i>\r\n    </a>\r\n    <h2>Add Task</h2>\r\n  </div>\r\n\r\n\r\n\r\n  <div class=\"container pt10 pl10 pr10 pb50\">\r\n    <form name=\"f\" #f=\"ngForm\" (ngSubmit)=\"f.valid && submitDetail()\">\r\n      <div class=\"row\">\r\n        <div class=\"col s12\">\r\n          <div class=\"card pb0\">\r\n            <!-- <div class=\"card-head\">\r\n              <h2>Basic Information</h2>\r\n            </div> -->\r\n            <div class=\"card-body cs-form\">\r\n              <div class=\"row\">\r\n                <div class=\"col s12 m6 l6\">\r\n                  <div class=\"row\">\r\n                    <div class=\"col s12\">\r\n                      <div style=\"margin-bottom:8px;\">\r\n                        <mat-button-toggle-group [(ngModel)]=\"userTypeFilter\" name=\"userTypeFilter\" (change)=\"selectedUsers=[]\">\r\n                          <mat-button-toggle value=\"\">All</mat-button-toggle>\r\n                          <mat-button-toggle value=\"Sales User\">Sales User</mat-button-toggle>\r\n                          <mat-button-toggle value=\"System User\">System User</mat-button-toggle>\r\n                        </mat-button-toggle-group>\r\n                      </div>\r\n\r\n                      <mat-form-field appearance=\"outline\">\r\n                        <mat-label>Select Users</mat-label>\r\n                        <mat-select name=\"assign_user\" #assign_user=\"ngModel\" [(ngModel)]=\"selectedUsers\"\r\n                          multiple required>\r\n                          <mat-option>\r\n                            <ngx-mat-select-search noEntriesFoundLabel=\"'no data found'\" placeholderLabel=\"Search..\"\r\n                              (keyup)=\"getUsers($event.target.value)\"></ngx-mat-select-search>\r\n                          </mat-option>\r\n                          <mat-option *ngFor=\"let list of filteredUsers\" [value]=\"list\">\r\n                            {{list.name}} - <strong>{{list.emp_code}}</strong>\r\n                          </mat-option>\r\n                        </mat-select>\r\n                      </mat-form-field>\r\n\r\n                      <div *ngIf=\"selectedUsers.length > 0\" style=\"margin:-10px 0 8px; font-size:12px; color:#555;\">\r\n                        {{selectedUsers.length}} user(s) selected — {{selectedUsers.length}} separate task(s) will be created\r\n                      </div>\r\n\r\n                      <div class=\"alert alert-danger\" *ngIf=\"assign_user.touched || f.submitted\">\r\n                        <p *ngIf=\"assign_user.errors?.required\">This field is required</p>\r\n                      </div>\r\n\r\n                    </div>\r\n\r\n                  </div>\r\n\r\n                  <div class=\"row\">\r\n                    <div class=\"col s12 m6 l6\">\r\n                      <mat-form-field appearance=\"outline\">\r\n                        <mat-label>Promise Date</mat-label>\r\n                        <input name=\"promise_date\" matInput [matDatepicker]=\"pickers\" placeholder=\"Select date..\"\r\n                          (dateChange)=\"publicDate(promise_date_only)\" #promise_date_ref=\"ngModel\" readonly\r\n                          [(ngModel)]=\"promise_date_only\" required>\r\n                        <mat-datepicker-toggle matSuffix [for]=\"pickers\"></mat-datepicker-toggle>\r\n                        <mat-datepicker #pickers></mat-datepicker>\r\n                      </mat-form-field>\r\n                    </div>\r\n                    <div class=\"col s12 m6 l6\">\r\n                      <mat-form-field appearance=\"outline\">\r\n                        <mat-label>Promise Time</mat-label>\r\n                        <input matInput name=\"promise_time_display\" [(ngModel)]=\"promise_time_display\" readonly placeholder=\"Select time..\">\r\n                        <input style=\"display:none;\" matTimepicker #timepicker=\"matTimepicker\" (timeChange)=\"onTimeChange($event)\" readonly>\r\n                        <mat-icon matSuffix (click)=\"timepicker.showDialog()\" style=\"cursor:pointer;\">access_time</mat-icon>\r\n                      </mat-form-field>\r\n                    </div>\r\n                  </div>\r\n\r\n                  <div class=\"row\">\r\n                    <div class=\"col s12\">\r\n                      <mat-form-field appearance=\"outline\">\r\n                        <mat-label>Message</mat-label>\r\n                        <textarea matInput placeholder=\"Type Here ...\" name=\"message\" [(ngModel)]=\"data.message\"\r\n                          #message=\"ngModel\" class=\"h85\" required></textarea>\r\n                      </mat-form-field>\r\n                      <div class=\"alert alert-danger\" *ngIf=\"message.touched || f.submitted\">\r\n                        <p *ngIf=\"message.errors?.required\">This field is required</p>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n\r\n                <div class=\"col s12 m16 l6\">\r\n                  <div class=\"cs-file\">\r\n                    <p>Attache Images</p>\r\n                    <ul>\r\n                      <li>\r\n                        <label>\r\n                          <i class=\"material-icons add-file-icon\">add</i>\r\n                          <input multiple type=\"file\" name=\"file\" (change)=\"fileChange($event)\"\r\n                            placeholder=\"Upload file\" accept=\".png,.jpg,.jpeg,\" style=\"display: none;\">\r\n                        </label>\r\n                      </li>\r\n                      <li>\r\n                        <label class=\"exp-img-upload-tile\" tabindex=\"0\" (paste)=\"onPasteImage($event)\"\r\n                          title=\"Click here then Ctrl+V to paste image\" style=\"cursor:pointer; outline:none;\">\r\n                          <i class=\"material-icons\">content_paste</i>\r\n                          <span>Paste</span>\r\n                        </label>\r\n                      </li>\r\n\r\n                      <li class=\"multi-images\">\r\n                        <label *ngFor=\"let imageType of selectedFile; let i = index\">\r\n                          <img *ngIf=\"imageType.type == 'image/jpeg' || imageType.type ==  'image/png'  \" height=\"75\"\r\n                            width=\"75\" [src]=\"imageType.path\" src=\"assets/imgs/jpg.svg\">\r\n                          <a class=\"close\"><i class=\"material-icons dp48\" (click)=\"remove_image(i)\">clear</i></a>\r\n                        </label>\r\n                      </li>\r\n                    </ul>\r\n                  </div>\r\n                </div>\r\n\r\n\r\n              </div>\r\n\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"row\">\r\n        <div class=\"col s12\">\r\n          <div class=\"text-right\">\r\n            <button [ngClass]=\"{'loading': savingFlag == true}\" mat-raised-button color=\"accent\"\r\n              [disabled]=\"savingFlag == true\">\r\n              {{savingFlag == true ? 'Saving' : 'Save'}}\r\n            </button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </form>\r\n  </div>\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/task/task-add/task-add.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/task/task-add/task-add.component.ts ***!
  \*****************************************************/
/*! exports provided: TaskAddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskAddComponent", function() { return TaskAddComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng6-toastr-notifications */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/ng6-toastr-notifications/fesm5/ng6-toastr-notifications.js");
/* harmony import */ var src_app_dialog_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/dialog.component */ "./src/app/dialog.component.ts");
/* harmony import */ var src_app_localstorage_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/localstorage.service */ "./src/app/localstorage.service.ts");
/* harmony import */ var src_services_DatabaseService__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/_services/DatabaseService */ "./src/_services/DatabaseService.ts");








var TaskAddComponent = /** @class */ (function () {
    function TaskAddComponent(serve, rout, toast, session, dialog) {
        this.serve = serve;
        this.rout = rout;
        this.toast = toast;
        this.session = session;
        this.dialog = dialog;
        this.savingFlag = false;
        this.data = {};
        this.urls = [];
        this.selectedFile = [];
        this.formData = new FormData();
        this.assign_login_data = [];
        this.users = [];
        this.selectedUsers = [];
        this.userTypeFilter = '';
        this.promise_date_only = '';
        this.promise_time_only = '';
        this.promise_time_display = '';
        this.assign_login_data = this.session.getSession();
        this.userData = JSON.parse(localStorage.getItem('st_user') || '{}');
        this.userId = this.userData['data']['id'];
        this.userName = this.userData['data']['name'];
        this.data.created_by_type = this.userData['data']['user_type'];
        this.getUsers('');
    }
    Object.defineProperty(TaskAddComponent.prototype, "filteredUsers", {
        get: function () {
            var _this = this;
            if (!this.userTypeFilter)
                return this.users;
            return this.users.filter(function (u) { return u.user_type === _this.userTypeFilter; });
        },
        enumerable: true,
        configurable: true
    });
    TaskAddComponent.prototype.ngOnInit = function () { };
    TaskAddComponent.prototype.fileChange = function (event) {
        var _this = this;
        var _loop_1 = function (i) {
            var file = event.target.files[i];
            this_1.selectedFile.push(file);
            var reader = new FileReader();
            reader.onload = function (e) {
                file['path'] = e.target.result;
                _this.urls.push(e.target.result);
            };
            reader.readAsDataURL(file);
        };
        var this_1 = this;
        for (var i = 0; i < event.target.files.length; i++) {
            _loop_1(i);
        }
    };
    TaskAddComponent.prototype.remove_image = function (i) {
        this.urls.splice(i, 1);
        this.selectedFile.splice(i, 1);
    };
    TaskAddComponent.prototype.onPasteImage = function (event) {
        var _this = this;
        var items = event.clipboardData ? event.clipboardData.items : [];
        var _loop_2 = function (i) {
            if (items[i].type.indexOf('image') !== -1) {
                var file_1 = items[i].getAsFile();
                if (!file_1)
                    return "break";
                var reader = new FileReader();
                reader.onload = function (e) {
                    var pastedFile = new File([file_1], 'pasted_image_' + Date.now() + '.png', { type: 'image/png' });
                    pastedFile['path'] = e.target.result;
                    _this.selectedFile.push(pastedFile);
                    _this.urls.push(e.target.result);
                };
                reader.readAsDataURL(file_1);
                return "break";
            }
        };
        for (var i = 0; i < items.length; i++) {
            var state_1 = _loop_2(i);
            if (state_1 === "break")
                break;
        }
    };
    TaskAddComponent.prototype.getUsers = function (searcValue) {
        var _this = this;
        this.serve.post_rqst({ 'search': searcValue }, 'Task/getUserList').subscribe(function (result) {
            if (result['statusCode'] == 200) {
                _this.users = result['data'];
            }
            else {
                _this.toast.errorToastr(result['statusMsg']);
            }
        });
    };
    TaskAddComponent.prototype.submitDetail = function () {
        var _this = this;
        if (!this.selectedUsers || this.selectedUsers.length === 0) {
            this.toast.errorToastr('Please select at least one user');
            return;
        }
        this.savingFlag = true;
        var completed = 0;
        var failed = 0;
        var total = this.selectedUsers.length;
        this.selectedUsers.forEach(function (user) {
            var payload = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, _this.data, { created_by_id: _this.userId, created_by_name: _this.userName, assign_user: user.id, name: user.name, user_type: user.user_type, attachment: _this.selectedFile });
            _this.serve.post_rqst({ 'data': payload }, 'Task/addTask').subscribe(function (result) {
                if (result['statusCode'] == 200) {
                    completed++;
                }
                else {
                    failed++;
                }
                if (completed + failed === total) {
                    _this.savingFlag = false;
                    if (failed === 0) {
                        _this.toast.successToastr(total > 1 ? total + " tasks created successfully" : 'Task created successfully');
                        _this.rout.navigate(['/task-list']);
                    }
                    else {
                        _this.toast.errorToastr(failed + " task(s) failed to create");
                    }
                }
            });
        });
    };
    TaskAddComponent.prototype.publicDate = function (date) {
        this.promise_date_only = moment__WEBPACK_IMPORTED_MODULE_3__(date).format('YYYY-MM-DD');
        this.combineDateTime();
    };
    TaskAddComponent.prototype.onTimeChange = function (event) {
        this.promise_time_display = moment__WEBPACK_IMPORTED_MODULE_3__(event).format('LT');
        this.promise_time_only = moment__WEBPACK_IMPORTED_MODULE_3__(event).format('HH:mm:ss');
        this.combineDateTime();
    };
    TaskAddComponent.prototype.combineDateTime = function () {
        if (this.promise_date_only) {
            var time = this.promise_time_only || '00:00:00';
            this.data.promise_date = moment__WEBPACK_IMPORTED_MODULE_3__(this.promise_date_only).format('YYYY-MM-DD') + ' ' + time;
        }
    };
    TaskAddComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-task-add',
            template: __webpack_require__(/*! ./task-add.component.html */ "./src/app/task/task-add/task-add.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_services_DatabaseService__WEBPACK_IMPORTED_MODULE_7__["DatabaseService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_4__["ToastrManager"], src_app_localstorage_service__WEBPACK_IMPORTED_MODULE_6__["sessionStorage"], src_app_dialog_component__WEBPACK_IMPORTED_MODULE_5__["DialogComponent"]])
    ], TaskAddComponent);
    return TaskAddComponent;
}());



/***/ }),

/***/ "./src/app/task/task-detail/task-detail.component.html":
/*!*************************************************************!*\
  !*** ./src/app/task/task-detail/task-detail.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-container\" >\r\n  <!-- <app-loader *ngIf=\"loader\"></app-loader> -->\r\n  <div class=\"tools-container\">\r\n    <a mat-icon-button  matTooltip=\"Back\" (click)=\"back()\">\r\n      <i class=\"material-icons\">arrow_back</i>\r\n    </a>\r\n    <h2>Task Details</h2>\r\n  </div>\r\n  \r\n  <div class=\"container pt10 pl10 pr10 pb50\" >\r\n    <div class=\"row\">\r\n      <div class=\"col s12 m12 l8\">\r\n        <!-- product data start -->\r\n        <div class=\"card\" *ngIf=\"!skLoading\">\r\n          <div class=\"card-head\">\r\n            <h2>Basic Details</h2>\r\n          </div>\r\n          <div class=\"card-body\">\r\n            <div class=\"grid-box three\">\r\n              <div class=\"block-feilds\">\r\n                <span>Date Created</span>\r\n                <p>{{getData.date_created | date:'d MMM y'}}</p>\r\n              </div>\r\n              <div class=\"block-feilds\">\r\n                <span>User Type</span>\r\n                <p>{{getData.assign_to_type}}</p>\r\n              </div>\r\n              <div class=\"block-feilds\">\r\n                <span>Status</span>\r\n                <p>{{getData.status == 'promise_pending' ? 'Promise Pending' : getData.status == 'promise_done' ? 'Promise Done' :'Close' }}</p>\r\n              </div>\r\n            </div>\r\n            \r\n            <div class=\"grid-box single mt10\">\r\n              <div class=\"block-feilds\">\r\n                <span>Task Description</span>\r\n                <p>{{getData.escalation_description}}</p>\r\n              </div>\r\n            </div>\r\n            <div class=\"grid-box three mt10\" *ngIf=\"getData.promise_date != null\">\r\n              <div class=\"block-feilds\">\r\n                <span>Promise Date</span>\r\n                <p>{{getData.promise_date && getData.promise_date != '0000-00-00 00:00:00' ? (getData.promise_date.replace(' ','T') | date:'d MMM y, h:mm a') : '--'}}</p>\r\n              </div>\r\n              \r\n              <div class=\"block-feilds\" *ngIf=\"getData.close_remark\">\r\n                <span>Closing Remark</span>\r\n                <p>{{getData.close_remark ? getData.close_remark :'---'}}</p>\r\n              </div>\r\n              \r\n              <div class=\"block-feilds\" *ngIf=\"getData.close_remark\">\r\n                <span>Closing Date</span>\r\n                <p>{{getData.closing_date && getData.closing_date != '0000-00-00 00:00:00'? (getData.closing_date | date:'d MMM y') : '--'}}</p>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <!-- complete task block -->\r\n        <div class=\"card\" *ngIf=\"!skLoading && isSystemUser && getData.status != 'close' && getData.assign_to_id == logined_user_data.id\">\r\n          <div class=\"card-head\"><h2>Mark as Complete</h2></div>\r\n          <div class=\"card-body\">\r\n            <ng-container *ngIf=\"!showRemarkBox\">\r\n              <button mat-raised-button color=\"primary\" (click)=\"showRemarkBox = true\">\r\n                <i class=\"material-icons\">check_circle</i> Mark as Complete\r\n              </button>\r\n            </ng-container>\r\n            <ng-container *ngIf=\"showRemarkBox\">\r\n              <mat-form-field appearance=\"outline\" style=\"width:100%\">\r\n                <mat-label>Completion Remark</mat-label>\r\n                <textarea matInput rows=\"3\" placeholder=\"Enter remark...\" [(ngModel)]=\"completeRemark\"></textarea>\r\n              </mat-form-field>\r\n\r\n              <div class=\"cs-file\" style=\"margin:10px 0;\">\r\n                <p>Attach Images (Optional)</p>\r\n                <ul>\r\n                  <li>\r\n                    <label>\r\n                      <i class=\"material-icons add-file-icon\">add</i>\r\n                      <input multiple type=\"file\" (change)=\"onCompleteFileChange($event)\"\r\n                        accept=\".png,.jpg,.jpeg\" style=\"display:none;\">\r\n                    </label>\r\n                  </li>\r\n                  <li>\r\n                    <label class=\"exp-img-upload-tile\" tabindex=\"0\" (paste)=\"onCompletePaste($event)\"\r\n                      title=\"Click here then Ctrl+V to paste image\" style=\"cursor:pointer; outline:none;\">\r\n                      <i class=\"material-icons\">content_paste</i>\r\n                      <span>Paste</span>\r\n                    </label>\r\n                  </li>\r\n                  <li class=\"multi-images\" *ngFor=\"let img of completeUrls; let i = index\">\r\n                    <label>\r\n                      <img height=\"75\" width=\"75\" [src]=\"img\">\r\n                      <a class=\"close\"><i class=\"material-icons dp48\" (click)=\"removeCompleteImage(i)\">clear</i></a>\r\n                    </label>\r\n                  </li>\r\n                </ul>\r\n              </div>\r\n\r\n              <div style=\"display:flex; gap:10px; margin-top:8px;\">\r\n                <button mat-raised-button color=\"accent\" [disabled]=\"savingFlag\" [ngClass]=\"{'loading': savingFlag}\" (click)=\"completeTask()\">\r\n                  {{ savingFlag ? 'Saving...' : 'Confirm Complete' }}\r\n                </button>\r\n                <button mat-stroked-button color=\"warn\" (click)=\"showRemarkBox = false; completeRemark = ''\">Cancel</button>\r\n              </div>\r\n            </ng-container>\r\n          </div>\r\n        </div>\r\n        <!-- complete task block end -->\r\n\r\n        <!-- product data end -->\r\n\r\n\r\n        <!-- Skeleton start -->\r\n        <div class=\"card\" *ngIf=\"skLoading\">\r\n          <div class=\"sk-head\">\r\n            <h2>&nbsp;</h2>\r\n          </div>\r\n          <div class=\"card-body\">\r\n            <div class=\"grid-box\">\r\n              <div class=\"sk-box\" *ngFor=\"let row of [].constructor(10)\">\r\n                &nbsp;\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <!-- Skeleton end -->\r\n        \r\n      </div>\r\n      <div class=\"col s12 m12 l4\">\r\n        <div class=\"card\" *ngIf=\"!skLoading\">\r\n          <div class=\"card-head\">\r\n            <h2>Attachments</h2>\r\n          </div>\r\n          <div class=\"card-body\">\r\n            <div class=\"img-container\">\r\n              <div class=\"image-block\" *ngFor=\"let row of getData.image \">\r\n                <img src=\"{{url+row.document_name}}\" (click)=\"goToImage(url+row.document_name)\" style=\"cursor: zoom-in;\">\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <!-- Skeleton start -->\r\n        <div class=\"card\" *ngIf=\"skLoading\">\r\n          <div class=\"sk-head\">\r\n            <h2>&nbsp;</h2>\r\n          </div>\r\n          <div class=\"card-body\">\r\n            <div class=\"img-container\">\r\n              <div class=\"image-block sk-loading\" *ngFor=\"let row of [].constructor(3)\">\r\n                &nbsp; \r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <!-- Skeleton end -->\r\n        \r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/task/task-detail/task-detail.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/task/task-detail/task-detail.component.ts ***!
  \***********************************************************/
/*! exports provided: TaskDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskDetailComponent", function() { return TaskDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng6-toastr-notifications */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/ng6-toastr-notifications/fesm5/ng6-toastr-notifications.js");
/* harmony import */ var src_app_dialog_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/dialog.component */ "./src/app/dialog.component.ts");
/* harmony import */ var src_app_dialog_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/dialog.service */ "./src/app/dialog.service.ts");
/* harmony import */ var src_app_localstorage_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/localstorage.service */ "./src/app/localstorage.service.ts");
/* harmony import */ var src_app_service_exportexcel_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/service/exportexcel.service */ "./src/app/service/exportexcel.service.ts");
/* harmony import */ var src_services_DatabaseService__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/_services/DatabaseService */ "./src/_services/DatabaseService.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var src_app_image_module_image_module_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/image-module/image-module.component */ "./src/app/image-module/image-module.component.ts");












var TaskDetailComponent = /** @class */ (function () {
    function TaskDetailComponent(location, dialogs, session, router, alert, service, editdialog, dialog, route, toast, excelservice, dialog1) {
        var _this = this;
        this.location = location;
        this.dialogs = dialogs;
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
        this.isSystemUser = false;
        this.showRemarkBox = false;
        this.completeRemark = '';
        this.savingFlag = false;
        this.completeFiles = [];
        this.completeUrls = [];
        this.assign_login_data = this.session.getSession();
        this.logined_user_data = this.assign_login_data.value.data;
        this.url = this.service.uploadUrl + 'task/';
        this.isSystemUser = this.logined_user_data.user_type == 'System User';
        this.route.params.subscribe(function (params) {
            _this.task_id = params.id;
            _this.service.currentUserID = params.id;
            if (_this.task_id) {
                _this.getTaskDetail();
            }
        });
    }
    TaskDetailComponent.prototype.ngOnInit = function () {
    };
    TaskDetailComponent.prototype.getTaskDetail = function () {
        var _this = this;
        this.skLoading = true;
        this.service.post_rqst({ 'id': this.task_id }, "Task/getTaskDetail").subscribe((function (result) {
            if (result['statusCode'] == 200) {
                _this.getData = result.data;
                _this.skLoading = false;
            }
            else {
                _this.toast.errorToastr(result['statusMsg']);
            }
        }));
    };
    TaskDetailComponent.prototype.back = function () {
        this.location.back();
    };
    TaskDetailComponent.prototype.goToImage = function (image) {
        var dialogRef = this.dialogs.open(src_app_image_module_image_module_component__WEBPACK_IMPORTED_MODULE_11__["ImageModuleComponent"], {
            panelClass: 'Image-modal',
            data: {
                'image': image,
                'type': 'base64'
            }
        });
        dialogRef.afterClosed().subscribe(function (result) {
        });
    };
    TaskDetailComponent.prototype.onCompleteFileChange = function (event) {
        var _this = this;
        var _loop_1 = function (i) {
            var file = event.target.files[i];
            this_1.completeFiles.push(file);
            var reader = new FileReader();
            reader.onload = function (e) {
                file['path'] = e.target.result;
                _this.completeUrls.push(e.target.result);
            };
            reader.readAsDataURL(file);
        };
        var this_1 = this;
        for (var i = 0; i < event.target.files.length; i++) {
            _loop_1(i);
        }
    };
    TaskDetailComponent.prototype.onCompletePaste = function (event) {
        var _this = this;
        var items = event.clipboardData ? event.clipboardData.items : [];
        var _loop_2 = function (i) {
            if (items[i].type.indexOf('image') !== -1) {
                var file_1 = items[i].getAsFile();
                if (!file_1)
                    return "break";
                var reader = new FileReader();
                reader.onload = function (e) {
                    var pastedFile = new File([file_1], 'pasted_image_' + Date.now() + '.png', { type: 'image/png' });
                    pastedFile['path'] = e.target.result;
                    _this.completeFiles.push(pastedFile);
                    _this.completeUrls.push(e.target.result);
                };
                reader.readAsDataURL(file_1);
                return "break";
            }
        };
        for (var i = 0; i < items.length; i++) {
            var state_1 = _loop_2(i);
            if (state_1 === "break")
                break;
        }
    };
    TaskDetailComponent.prototype.removeCompleteImage = function (i) {
        this.completeFiles.splice(i, 1);
        this.completeUrls.splice(i, 1);
    };
    TaskDetailComponent.prototype.completeTask = function () {
        var _this = this;
        if (!this.completeRemark || !this.completeRemark.trim()) {
            this.toast.errorToastr('Please enter a remark');
            return;
        }
        this.savingFlag = true;
        this.service.post_rqst({ 'data': { 'id': this.task_id, 'close_remark': this.completeRemark, 'attachment': this.completeFiles } }, 'Task/closeTask').subscribe(function (result) {
            if (result['statusCode'] == 200) {
                _this.toast.successToastr('Task marked as complete');
                _this.showRemarkBox = false;
                _this.completeRemark = '';
                _this.completeFiles = [];
                _this.completeUrls = [];
                _this.savingFlag = false;
                _this.getTaskDetail();
            }
            else {
                _this.toast.errorToastr(result['statusMsg']);
                _this.savingFlag = false;
            }
        });
    };
    TaskDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-task-detail',
            template: __webpack_require__(/*! ./task-detail.component.html */ "./src/app/task/task-detail/task-detail.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_10__["Location"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"], src_app_localstorage_service__WEBPACK_IMPORTED_MODULE_7__["sessionStorage"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], src_app_dialog_component__WEBPACK_IMPORTED_MODULE_5__["DialogComponent"], src_services_DatabaseService__WEBPACK_IMPORTED_MODULE_9__["DatabaseService"], src_app_dialog_service__WEBPACK_IMPORTED_MODULE_6__["DialogService"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_4__["ToastrManager"], src_app_service_exportexcel_service__WEBPACK_IMPORTED_MODULE_8__["ExportexcelService"], src_app_dialog_component__WEBPACK_IMPORTED_MODULE_5__["DialogComponent"]])
    ], TaskDetailComponent);
    return TaskDetailComponent;
}());



/***/ }),

/***/ "./src/app/task/task-module/task.module.ts":
/*!*************************************************!*\
  !*** ./src/app/task/task-module/task.module.ts ***!
  \*************************************************/
/*! exports provided: TaskModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskModule", function() { return TaskModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angular_ng_autocomplete__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angular-ng-autocomplete */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/angular-ng-autocomplete/fesm5/angular-ng-autocomplete.js");
/* harmony import */ var ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-multiselect-dropdown */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/ng-multiselect-dropdown/fesm5/ng-multiselect-dropdown.js");
/* harmony import */ var ngx_mat_select_search__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-mat-select-search */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/ngx-mat-select-search/fesm5/ngx-mat-select-search.js");
/* harmony import */ var mat_timepicker__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! mat-timepicker */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/mat-timepicker/fesm2015/mat-timepicker.js");
/* harmony import */ var src_app_app_utility_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/app-utility.module */ "./src/app/app-utility.module.ts");
/* harmony import */ var src_app_auth_component_guard__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/auth-component.guard */ "./src/app/auth-component.guard.ts");
/* harmony import */ var src_app_material__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/material */ "./src/app/material.ts");
/* harmony import */ var _task_list_task_list_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../task-list/task-list.component */ "./src/app/task/task-list/task-list.component.ts");
/* harmony import */ var _task_action_modal_task_action_modal_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../task-action-modal/task-action-modal.component */ "./src/app/task/task-action-modal/task-action-modal.component.ts");
/* harmony import */ var _task_add_task_add_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../task-add/task-add.component */ "./src/app/task/task-add/task-add.component.ts");
/* harmony import */ var _task_detail_task_detail_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../task-detail/task-detail.component */ "./src/app/task/task-detail/task-detail.component.ts");

















var taskRoutes = [
    {
        path: "", children: [
            { path: "", component: _task_list_task_list_component__WEBPACK_IMPORTED_MODULE_13__["TaskListComponent"], canActivate: [src_app_auth_component_guard__WEBPACK_IMPORTED_MODULE_11__["AuthComponentGuard"]], data: { expectedRole: ['1'] } },
            { path: "task-add", component: _task_add_task_add_component__WEBPACK_IMPORTED_MODULE_15__["TaskAddComponent"], canActivate: [src_app_auth_component_guard__WEBPACK_IMPORTED_MODULE_11__["AuthComponentGuard"]], data: { expectedRole: ['1'] } },
            { path: "task-detail/:id", component: _task_detail_task_detail_component__WEBPACK_IMPORTED_MODULE_16__["TaskDetailComponent"], canActivate: [src_app_auth_component_guard__WEBPACK_IMPORTED_MODULE_11__["AuthComponentGuard"]], data: { expectedRole: ['1'] } },
        ]
    }
];
var TaskModule = /** @class */ (function () {
    function TaskModule() {
    }
    TaskModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_task_action_modal_task_action_modal_component__WEBPACK_IMPORTED_MODULE_14__["TaskActionModalComponent"], _task_add_task_add_component__WEBPACK_IMPORTED_MODULE_15__["TaskAddComponent"], _task_detail_task_detail_component__WEBPACK_IMPORTED_MODULE_16__["TaskDetailComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild(taskRoutes),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_7__["NgMultiSelectDropDownModule"],
                src_app_material__WEBPACK_IMPORTED_MODULE_12__["MaterialModule"],
                angular_ng_autocomplete__WEBPACK_IMPORTED_MODULE_6__["AutocompleteLibModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialogModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatButtonToggleModule"],
                ngx_mat_select_search__WEBPACK_IMPORTED_MODULE_8__["NgxMatSelectSearchModule"],
                mat_timepicker__WEBPACK_IMPORTED_MODULE_9__["MatTimepickerModule"],
                src_app_app_utility_module__WEBPACK_IMPORTED_MODULE_10__["AppUtilityModule"]
            ],
            entryComponents: [
                _task_action_modal_task_action_modal_component__WEBPACK_IMPORTED_MODULE_14__["TaskActionModalComponent"]
            ]
        })
    ], TaskModule);
    return TaskModule;
}());



/***/ })

}]);