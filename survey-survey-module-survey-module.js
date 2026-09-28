(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["survey-survey-module-survey-module"],{

/***/ "./src/app/edit-survey/edit-survey.component.html":
/*!********************************************************!*\
  !*** ./src/app/edit-survey/edit-survey.component.html ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"edit-modal\" *ngIf=\"Edit_type == 'basic'\">\r\n  <form validate #update_basic=\"ngForm\" name=\"update_basic\"\r\n  (ngSubmit)=\"(update_basic.valid && update_basic.submitted)?Edit_survey():''\">\r\n  \r\n  <p class=\"heading\">Edit Basic Details</p>\r\n  <div mat-dialog-content>\r\n    <div class=\"cs-form\">\r\n      <div class=\"row\">\r\n        <div class=\"col s12\">\r\n          <mat-form-field  appearance=\"outline\">\r\n            <mat-label>Title</mat-label>\r\n            <input matInput placeholder=\"Type Here ...\" name=\"title\" #title=\"ngModel\" [(ngModel)]=\"Data.title\" required>\r\n          </mat-form-field>\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"col s12\">\r\n          <mat-form-field appearance=\"outline\">\r\n            <mat-label>User Type</mat-label>\r\n            <mat-select  name=\"types\" [(ngModel)]=\"Data.types\" #types=\"ngModel\" multiple >\r\n              <mat-option *ngFor=\"let row of Users\"  value=\"{{row.module_name}}\">{{row.module_name}}</mat-option>\r\n            </mat-select>\r\n          </mat-form-field>\r\n        </div>\r\n      </div>\r\n      \r\n      <div class=\"row\">\r\n        <div class=\"col s12 l6 m6\">\r\n          <mat-form-field  appearance=\"outline\">\r\n            <mat-label>Start Date</mat-label>\r\n            <input name=\"start_date\" matInput [matDatepicker]=\"pickers\" placeholder=\"\" [min]=\"minDate\" #start_date=\"ngModel\" readonly [(ngModel)]=\"Data.start_date\" required>\r\n            <mat-datepicker-toggle matSuffix [for]=\"pickers\"></mat-datepicker-toggle>\r\n            <mat-datepicker #pickers></mat-datepicker>\r\n          </mat-form-field>\r\n          <!-- <div class=\"alert alert-danger\" *ngIf=\"start_date.touched || f.submitted\">\r\n            <p *ngIf=\"start_date.errors?.required\">This field is required</p>\r\n          </div> -->\r\n        </div>\r\n        \r\n        <div class=\"col s12 l6 m6\">\r\n          <mat-form-field  appearance=\"outline\">\r\n            <mat-label>End Date</mat-label>\r\n            <input name=\"end_date\" matInput [matDatepicker]=\"picker1\" placeholder=\"\" [min]=\"Data.start_date\" #end_date=\"ngModel\" readonly [(ngModel)]=\"Data.end_date\" required>\r\n            <mat-datepicker-toggle matSuffix [for]=\"picker1\"></mat-datepicker-toggle>\r\n            <mat-datepicker #picker1></mat-datepicker>\r\n          </mat-form-field>\r\n          <!-- <div class=\"alert alert-danger\" *ngIf=\"end_date.touched || f.submitted\">\r\n            <p *ngIf=\"end_date.errors?.required\">This field is required</p>\r\n          </div> -->\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div mat-dialog-actions>\r\n    <button mat-stroked-button color=\"warn\" [mat-dialog-close]=\"false\">Cancel</button>\r\n    <button [ngClass]=\"{'loading': savingFlag == true}\" mat-raised-button color=\"accent\" type=\"submit\"\r\n    [disabled]=\"savingFlag == true\">{{savingFlag == true ? 'Saving' : 'Update'}}</button>\r\n  </div>\r\n</form>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/edit-survey/edit-survey.component.scss":
/*!********************************************************!*\
  !*** ./src/app/edit-survey/edit-survey.component.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/edit-survey/edit-survey.component.ts":
/*!******************************************************!*\
  !*** ./src/app/edit-survey/edit-survey.component.ts ***!
  \******************************************************/
/*! exports provided: EditSurveyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditSurveyComponent", function() { return EditSurveyComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_services_DatabaseService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/_services/DatabaseService */ "./src/_services/DatabaseService.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var src_app_localstorage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/localstorage.service */ "./src/app/localstorage.service.ts");
/* harmony import */ var ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng6-toastr-notifications */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/ng6-toastr-notifications/fesm5/ng6-toastr-notifications.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! moment */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_6__);







var EditSurveyComponent = /** @class */ (function () {
    function EditSurveyComponent(data, dialog, serve, session, toast, dialogRef) {
        this.data = data;
        this.dialog = dialog;
        this.serve = serve;
        this.session = session;
        this.toast = toast;
        this.dialogRef = dialogRef;
        this.savingFlag = false;
        this.segment = {};
        this.category = {};
        this.login = {};
        this.servey_detail = [];
        this.Data = {};
        this.id = '';
        this.Users = [];
        this.states = [];
        this.selState = [];
        this.userData = JSON.parse(localStorage.getItem('st_user'));
        this.minDate = new Date();
        this.segment = this.data.segment;
        this.userId = this.userData['data']['id'];
        this.userName = this.userData['data']['name'];
        this.Edit_type = this.data.Edit_type;
        this.id = this.data.id;
        this.getNetworkType();
        this.getState();
        this.survey_detail();
    }
    EditSurveyComponent.prototype.ngOnInit = function () {
        this.login = JSON.parse(localStorage.getItem('login'));
    };
    EditSurveyComponent.prototype.getNetworkType = function () {
        var _this = this;
        this.serve.post_rqst({ 'type': 'checkin' }, "Survey/allNetworkModule").subscribe((function (result) {
            if (result['statusCode'] == 200) {
                _this.Users = result['modules'];
            }
            else {
                _this.toast.errorToastr(result['statusMsg']);
            }
        }));
    };
    EditSurveyComponent.prototype.survey_detail = function () {
        var _this = this;
        this.serve.post_rqst({ 'id': this.id }, 'Survey/surveyDetail').subscribe(function (resp) {
            if (resp['statusCode'] == 200) {
                _this.Data = resp['data'];
                setTimeout(function () {
                }, 700);
            }
            else {
                _this.toast.errorToastr(resp['statusMsg']);
            }
        });
    };
    EditSurveyComponent.prototype.Edit_survey = function () {
        var _this = this;
        this.savingFlag = true;
        this.Data.created_by_name = this.userName;
        this.Data.uid = this.userId;
        this.Data.survey_id = this.id;
        if (this.Data.start_date) {
            this.Data.start_date = moment__WEBPACK_IMPORTED_MODULE_6__(this.Data.start_date).format('YYYY-MM-DD');
        }
        if (this.Data.end_date) {
            this.Data.end_date = moment__WEBPACK_IMPORTED_MODULE_6__(this.Data.end_date).format('YYYY-MM-DD');
        }
        this.serve.post_rqst(this.Data, "Survey/updateSurveyBasicDetail").subscribe((function (result) {
            if (result['statusCode'] == 200) {
                _this.toast.successToastr(result['statusMsg']);
                _this.savingFlag = false;
                _this.dialogRef.close(true);
            }
            else {
                _this.toast.errorToastr(result['statusMsg']);
                _this.savingFlag = false;
            }
        }));
    };
    EditSurveyComponent.prototype.getState = function () {
        var _this = this;
        this.serve.post_rqst({}, 'User_new/get_all_state').subscribe(function (resp) {
            _this.states = resp['all_state'];
        }, function (error) {
        });
    };
    EditSurveyComponent.prototype.setState = function (e, state) {
        if (e.checked == true) {
            this.selState.push(state);
        }
        else {
            var removeindex = this.selState.findIndex(function (r) { return r == state; });
            this.selState.splice(removeindex, 1);
        }
    };
    EditSurveyComponent.prototype.allState = function () {
        if (!this.data.allStates) {
            this.selState = [];
            for (var i = 0; i < this.states.length; i++) {
                this.states[i].selected = false;
            }
        }
        else {
            this.selState = [];
            for (var i = 0; i < this.states.length; i++) {
                this.states[i].selected = true;
                this.selState.push(this.states[i].state_name);
            }
        }
    };
    EditSurveyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-edit-survey',
            template: __webpack_require__(/*! ./edit-survey.component.html */ "./src/app/edit-survey/edit-survey.component.html"),
            styles: [__webpack_require__(/*! ./edit-survey.component.scss */ "./src/app/edit-survey/edit-survey.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_3__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object, _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"], src_services_DatabaseService__WEBPACK_IMPORTED_MODULE_2__["DatabaseService"], src_app_localstorage_service__WEBPACK_IMPORTED_MODULE_4__["sessionStorage"], ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_5__["ToastrManager"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogRef"]])
    ], EditSurveyComponent);
    return EditSurveyComponent;
}());



/***/ }),

/***/ "./src/app/survey/survey-add/survey-add.component.html":
/*!*************************************************************!*\
  !*** ./src/app/survey/survey-add/survey-add.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-container\">\r\n  <!-- <app-loader *ngIf=\"loader\"></app-loader> -->\r\n  <div class=\"tools-container\">\r\n    <a mat-icon-button matTooltip=\"Back\" routerLink=\"/survey-list\">\r\n      <i class=\"material-icons\">arrow_back</i>\r\n    </a>\r\n    <h2>Add New Survey</h2>\r\n  </div>\r\n  <div class=\"container pt10 pl10 pr10 pb50\">\r\n    <form #f=\"ngForm\" (ngSubmit)=\" f.valid && submitDetail()\">\r\n      <div class=\"row\">\r\n        <div class=\"col s12\">\r\n          <div class=\"card pb0\">\r\n            <div class=\"card-head\">\r\n              <h2>Basic Information</h2>\r\n            </div>\r\n            <div class=\"card-body cs-form\">\r\n              <div class=\"row\">\r\n                <div class=\"col s12 m3 l3\">\r\n                  <mat-form-field appearance=\"outline\">\r\n                    <mat-label>User Type</mat-label>\r\n                    <mat-select name=\"types\" [(ngModel)]=\"data.types\" #types=\"ngModel\" multiple required>\r\n                      <mat-option *ngFor=\"let row of Users\" value=\"{{row.module_name}}\">{{row.module_name}}</mat-option>\r\n                      <mat-option  value=\"Sales Executive\">Sales Executive</mat-option>\r\n                    </mat-select>\r\n                  </mat-form-field>\r\n\r\n                  <div class=\"alert alert-danger\" *ngIf=\"types.touched || f.submitted\">\r\n                    <p *ngIf=\"types.errors?.required\">This field is required</p>\r\n                  </div>\r\n                </div>\r\n                <div class=\"col s12 m3 l3\">\r\n                  <mat-form-field appearance=\"outline\">\r\n                    <mat-label>Title</mat-label>\r\n                    <input matInput placeholder=\"Type Here ...\" name=\"title\" #title=\"ngModel\" [(ngModel)]=\"data.title\"\r\n                      required>\r\n                  </mat-form-field>\r\n                  <div class=\"alert alert-danger\" *ngIf=\"title.touched || f.submitted\">\r\n                    <p *ngIf=\"title.errors?.required\">This field is required</p>\r\n                  </div>\r\n                </div>\r\n                <div class=\"col s12 m3 l3\">\r\n                  <mat-form-field appearance=\"outline\">\r\n                    <mat-label>Start Date</mat-label>\r\n                    <input name=\"start_date\" matInput [matDatepicker]=\"pickers\" placeholder=\"\" [min]=\"minDate\"\r\n                      #start_date=\"ngModel\" readonly [(ngModel)]=\"data.start_date\" required>\r\n                    <mat-datepicker-toggle matSuffix [for]=\"pickers\"></mat-datepicker-toggle>\r\n                    <mat-datepicker #pickers></mat-datepicker>\r\n                  </mat-form-field>\r\n                  <div class=\"alert alert-danger\" *ngIf=\"start_date.touched || f.submitted\">\r\n                    <p *ngIf=\"start_date.errors?.required\">This field is required</p>\r\n                  </div>\r\n                </div>\r\n\r\n                <div class=\"col s12 m3 l3\">\r\n                  <mat-form-field appearance=\"outline\">\r\n                    <mat-label>End Date</mat-label>\r\n                    <input name=\"end_date\" matInput [matDatepicker]=\"picker1\" placeholder=\"\" [min]=\"data.start_date\"\r\n                      #end_date=\"ngModel\" readonly [(ngModel)]=\"data.end_date\" required>\r\n                    <mat-datepicker-toggle matSuffix [for]=\"picker1\"></mat-datepicker-toggle>\r\n                    <mat-datepicker #picker1></mat-datepicker>\r\n                  </mat-form-field>\r\n                  <div class=\"alert alert-danger\" *ngIf=\"end_date.touched || f.submitted\">\r\n                    <p *ngIf=\"end_date.errors?.required\">This field is required</p>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"row\">\r\n        <div class=\"col s12 m4 l4\">\r\n          <div class=\"card pb0\">\r\n            <div class=\"card-head\">\r\n              <h2>Area Wise Selection</h2>\r\n            </div>\r\n            <div class=\"card-body\">\r\n              <div class=\"row\">\r\n                <div class=\"col s12\">\r\n                  <div class=\"check-box\">\r\n                    <div class=\"check-head\">\r\n                      <mat-checkbox [labelPosition]=\"labelPosition\" [(ngModel)]=\"data.allStates\" (change)=\"allState()\"\r\n                        name=\"allStates\" value=\"true\">State</mat-checkbox>\r\n                    </div>\r\n                    <div class=\"check-body\">\r\n                      <ng-container *ngFor=\"let val of states;let i = index\">\r\n                        <mat-checkbox [labelPosition]=\"labelPosition\" [(ngModel)]=\"val.selected\" [name]=\"'state'+i\"\r\n                          (change)=\"setState($event, val.state_name)\">{{val.state_name}}</mat-checkbox>\r\n                      </ng-container>\r\n                      <!-- <mat-checkbox [labelPosition]=\"labelPosition\" [(ngModel)]=\"row.selected\"  (change)=\"addstate(row,$event,i)\"   [name]=\"'state'+i\" value=\"true\" *ngFor=\"let row of State_list; let i=index;\">{{row.state_name}}</mat-checkbox> -->\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n\r\n        <div class=\"col s12 m8 l8\">\r\n          <div class=\"card pb0\">\r\n            <div class=\"card-head\">\r\n              <h2>Survey Question & Answer</h2>\r\n            </div>\r\n            <div class=\"col s12 m6 l6\">\r\n              <p class=\"mb20 mt20\">Select Question Type</p>\r\n              <mat-radio-group class=\"example-section\" name=\"question_type\" [(ngModel)]=\"surveyQue.question_type\">\r\n                <mat-radio-button class=\"wp50\" color=\"primary\" value=\"optional_answer\">\r\n                  Optional Answer\r\n                </mat-radio-button>\r\n                <mat-radio-button class=\"wp50\" color=\"primary\" value=\"filled_answers\">\r\n                  Filled Answers\r\n                </mat-radio-button>\r\n              </mat-radio-group>\r\n            </div>\r\n            <div class=\"card-body mt90\">\r\n              <div class=\"row cs-form\">\r\n                <div class=\"col s12 \">\r\n                  <div class=\"relative-block\">\r\n                    <mat-form-field appearance=\"outline\">\r\n                      <mat-label>Question</mat-label>\r\n                      <input matInput placeholder=\"Type Here..\" class=\"pr150\" name=\"question\"\r\n                        [(ngModel)]=\"surveyQue.question\" #question=\"ngModel\">\r\n                    </mat-form-field>\r\n\r\n                    <a mat-raised-button color=\"primary\" class=\"fix-btns\"\r\n                      (click)=\"surveyQue.question && surveyQue.question!='' ? checkQuestion(surveyQue.question) : ''\">\r\n                      Add Question <i class=\"material-icons font18 rotate-icons\">subdirectory_arrow_left</i>\r\n                    </a>\r\n                  </div>\r\n\r\n\r\n                  <!-- *ngIf=\"question?.length\" -->\r\n                  <mat-accordion class=\"cs-mat-accordion\">\r\n                    <mat-expansion-panel *ngFor=\"let row of questionData; let i = index\">\r\n                      <mat-expansion-panel-header>\r\n                        <mat-panel-title>\r\n                          {{row.ques_name | titlecase}} - ({{row.question_type.replaceAll('_',' ') | titlecase}})\r\n                          <a class=\"accordion-action default\" (click)=\"deleteQue(i)\"> <i\r\n                              class=\"material-icons\">delete</i></a>\r\n                        </mat-panel-title>\r\n                      </mat-expansion-panel-header>\r\n                      <div class=\"panel-body\">\r\n                        <div class=\"relative-block mt10\">\r\n                          <mat-form-field appearance=\"outline\">\r\n                            <!-- <mat-label>Question</mat-label> -->\r\n                            <input matInput class=\"pr150\" value={{row.ques_name}} [readonly]=\"!edit_question\">\r\n                          </mat-form-field>\r\n\r\n                          <a mat-raised-button color=\"accent\" class=\"fix-btns\" style=\"bottom: 7px;\"\r\n                            *ngIf=\"!edit_question\" (click)=\"edit_question = !edit_question\">\r\n                            Edit Question <i class=\"material-icons font18\">edit</i>\r\n                          </a>\r\n\r\n                          <a mat-raised-button color=\"primary\" class=\"fix-btns\" style=\"bottom: 7px;\"\r\n                            *ngIf=\"edit_question\" (click)=\"edit_question = !edit_question\">\r\n                            Add Question <i class=\"material-icons font18\">edit</i>\r\n                          </a>\r\n\r\n\r\n                        </div>\r\n\r\n                        <div class=\"relative-block\" *ngIf=\"row.question_type=='optional_answer'\">\r\n                          <mat-form-field appearance=\"outline\">\r\n                            <mat-label>Answer</mat-label>\r\n                            <input matInput placeholder=\"Type Here...\" class=\"pr150\" name=\"answer\"\r\n                              [(ngModel)]=\"surveyAns.answer\" #answer=\"ngModel\">\r\n                          </mat-form-field>\r\n\r\n                          <a mat-raised-button color=\"primary\" class=\"fix-btns\" style=\"bottom: 7px;\"\r\n                            (click)=\"surveyAns.answer && surveyAns.answer!='' ? addAnswer(i) : ''\">\r\n                            Add Answer <i class=\"material-icons font18 rotate-icons\">subdirectory_arrow_left</i>\r\n                          </a>\r\n                        </div>\r\n\r\n\r\n                        <div class=\"survey-ans\" *ngIf=\"row.options.length\">\r\n                          <ol type=\"A\">\r\n                            <li *ngFor=\"let anwerRow of row.options; let k = index\">{{anwerRow}} <a\r\n                                class=\"accordion-action\" (click)=\"delAns(i,k)\"> <i class=\"material-icons\">delete</i></a>\r\n                            </li>\r\n                          </ol>\r\n                        </div>\r\n                      </div>\r\n                    </mat-expansion-panel>\r\n                  </mat-accordion>\r\n\r\n\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"row\">\r\n        <div class=\"col s12\">\r\n          <div class=\"text-right\">\r\n            <button [ngClass]=\"{'loading': savingFlag == true}\" mat-raised-button color=\"accent\" type=\"submit\"\r\n              [disabled]=\"savingFlag == true\">\r\n              {{savingFlag == true ? 'Saving' : 'Save'}}\r\n            </button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n    </form>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/survey/survey-add/survey-add.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/survey/survey-add/survey-add.component.ts ***!
  \***********************************************************/
/*! exports provided: SurveyAddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SurveyAddComponent", function() { return SurveyAddComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng6-toastr-notifications */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/ng6-toastr-notifications/fesm5/ng6-toastr-notifications.js");
/* harmony import */ var src_services_DatabaseService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/_services/DatabaseService */ "./src/_services/DatabaseService.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! moment */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/router/fesm5/router.js");






var SurveyAddComponent = /** @class */ (function () {
    function SurveyAddComponent(toast, service, rout) {
        this.toast = toast;
        this.service = service;
        this.rout = rout;
        this.data = {};
        this.labelPosition = 'before';
        this.surveyQue = {};
        this.surveyAns = {};
        this.questionData = [];
        this.states = [];
        this.select_all = false;
        this.selState = [];
        this.savingFlag = false;
        this.Users = [];
        this.edit_question = false;
        this.minDate = new Date();
        this.userData = JSON.parse(localStorage.getItem('st_user'));
        this.userId = this.userData['data']['id'];
        this.userName = this.userData['data']['name'];
        this.surveyQue.question_type = 'optional_answer';
    }
    SurveyAddComponent.prototype.ngOnInit = function () {
        this.getState();
        this.getNetworkType();
    };
    SurveyAddComponent.prototype.getNetworkType = function () {
        var _this = this;
        this.service.post_rqst({ 'type': 'checkin' }, "Survey/allNetworkModule").subscribe((function (result) {
            if (result['statusCode'] == 200) {
                _this.Users = result['modules'];
            }
            else {
                _this.toast.errorToastr(result['statusMsg']);
            }
        }));
    };
    SurveyAddComponent.prototype.checkQuestion = function (value) {
        if (this.questionData.length != 0) {
            var index = this.questionData.findIndex(function (row) { return row.ques_name == value; });
            if (index != -1) {
                if (this.questionData[index].ques_name === value) {
                    this.toast.errorToastr('Question already exists');
                    this.surveyQue.question = "";
                    return;
                }
                else {
                    this.addQuestion();
                }
            }
            else {
                this.addQuestion();
            }
        }
        else {
            this.addQuestion();
        }
    };
    SurveyAddComponent.prototype.addQuestion = function () {
        var index = 0;
        index = this.questionData.length + 1;
        this.questionData.push({ 'ques_name': this.surveyQue.question, 'question_type': this.surveyQue.question_type, 'index': index, 'options': [] });
        this.questionData.reverse();
        this.surveyQue.question = "";
    };
    SurveyAddComponent.prototype.addAnswer = function (index) {
        this.questionData[index]['options'].push(this.surveyAns.answer);
        this.questionData[index].isanswer = true;
        this.surveyAns.answer = "";
    };
    SurveyAddComponent.prototype.deleteQue = function (i) {
        this.questionData.splice(i, 1);
        this.toast.errorToastr('Question delete successfully');
    };
    SurveyAddComponent.prototype.delAns = function (pindex, cindex) {
        this.questionData[pindex]['options'].splice(cindex, 1);
        this.toast.errorToastr('Answer delete successfully');
    };
    SurveyAddComponent.prototype.getState = function () {
        var _this = this;
        this.service.post_rqst({}, 'Survey/getAllState').subscribe(function (resp) {
            _this.states = resp['all_state'];
        }, function (error) {
        });
    };
    SurveyAddComponent.prototype.allState = function () {
        if (!this.data.allStates) {
            this.selState = [];
            for (var i = 0; i < this.states.length; i++) {
                this.states[i].selected = false;
            }
        }
        else {
            this.selState = [];
            for (var i = 0; i < this.states.length; i++) {
                this.states[i].selected = true;
                this.selState.push(this.states[i].state_name);
            }
        }
    };
    SurveyAddComponent.prototype.setState = function (e, state) {
        if (e.checked == true) {
            this.selState.push(state);
        }
        else {
            var removeindex = this.selState.findIndex(function (r) { return r == state; });
            this.selState.splice(removeindex, 1);
        }
    };
    SurveyAddComponent.prototype.submitDetail = function () {
        var _this = this;
        if (this.data.selState == '') {
            this.toast.errorToastr('State can not be blank');
            return;
        }
        if (this.questionData == '') {
            this.toast.errorToastr('Question can not be blank');
            return;
        }
        for (var i = 0; i < this.questionData.length; i++) {
            var element = this.questionData[i].options;
            var type = this.questionData[i].question_type;
            if (element == '' && type == 'optional_answer') {
                this.toast.errorToastr('Question ' + i + ' answer is blank');
                return;
            }
        }
        if (this.data.start_date) {
            this.data.start_date = moment__WEBPACK_IMPORTED_MODULE_4__(this.data.start_date).format('YYYY-MM-DD');
        }
        if (this.data.end_date) {
            this.data.end_date = moment__WEBPACK_IMPORTED_MODULE_4__(this.data.end_date).format('YYYY-MM-DD');
        }
        this.data.uid = this.userId;
        this.data.uname = this.userName;
        this.data.state = this.selState;
        this.data.item_data = this.questionData;
        this.savingFlag = true;
        this.service.post_rqst(this.data, 'Survey/addSurvey').subscribe(function (resp) {
            if (resp['statusCode'] == 200) {
                _this.toast.successToastr(resp['statusMsg']);
                _this.rout.navigate(['/survey-list']);
                _this.savingFlag = false;
                _this.service.count_list();
            }
            else {
                _this.toast.errorToastr(resp['statusMsg']);
                _this.savingFlag = false;
            }
        }, function (error) {
        });
    };
    SurveyAddComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-survey-add',
            template: __webpack_require__(/*! ./survey-add.component.html */ "./src/app/survey/survey-add/survey-add.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_2__["ToastrManager"], src_services_DatabaseService__WEBPACK_IMPORTED_MODULE_3__["DatabaseService"], _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]])
    ], SurveyAddComponent);
    return SurveyAddComponent;
}());



/***/ }),

/***/ "./src/app/survey/survey-detail/survey-detail.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/survey/survey-detail/survey-detail.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-container\">\r\n  <div class=\"tools-container\">\r\n    <a mat-icon-button matTooltip=\"Back\" routerLink=\"/survey-list\">\r\n      <i class=\"material-icons\">arrow_back</i>\r\n    </a>\r\n    <h2>Survey Detail</h2>\r\n    <div class=\"left-auto df ac flex-gap-10\">\r\n      <button mat-button color=\"primary\" matTooltip=\"See Suvey Result\" routerLink=\"survey-result\"  [queryParams]=\"{'id':this.servey_detail}\" >\r\n        <i class=\"material-icons\">poll</i>\r\n        Survey Result\r\n      </button>\r\n      <!-- <button mat-menu-item (click)=\"lastBtnValue('add')\" routerLink=\"add-product\" routerLinkActive=\"router-link-active\"\r\n      *ngIf=\"logined_user_data.add_products_master=='1'\">\r\n      <mat-icon>add</mat-icon>\r\n      <span>Add New</span>\r\n    </button> -->\r\n\r\n    </div>\r\n  </div>\r\n  <div class=\"container pt10 pl10 pr10 pb50\">\r\n    <div class=\"row\">\r\n      <div class=\"col s12 m12 l12\">\r\n        <div class=\"card\" *ngIf=\"!skLoading\">\r\n          <div class=\"card-head\">\r\n            <h2>Basic Details</h2>\r\n            <div class=\"left-auto\">\r\n              <a class=\"sm-mat-icon-button\" mat-icon-button matTooltip=\"Edit Detail\"\r\n                *ngIf=\"assign_login_data2.edit_survey=='1' && servey_detail.status == 'Active'\"\r\n                (click)=\"openDialog('basic')\">\r\n                <i class=\"material-icons\">edit</i>\r\n              </a>\r\n            </div>\r\n          </div>\r\n          <div class=\"card-body\">\r\n            <div class=\"grid-box two mb16\">\r\n              <div class=\"block-feilds\">\r\n                <span>Title</span>\r\n                <p>{{servey_detail.title}}</p>\r\n              </div>\r\n              <div class=\"block-feilds\">\r\n                <span>User Type</span>\r\n                <p><span style=\"margin: 3px;\" *ngFor=\"let item of servey_detail.types\">{{item}},</span></p>\r\n              </div>\r\n            </div>\r\n            <div class=\"grid-box five\">\r\n              <div class=\"block-feilds\">\r\n                <span>Date Created</span>\r\n                <p>{{servey_detail.date_created | date:'d MMM y'}}</p>\r\n              </div>\r\n              <div class=\"block-feilds\">\r\n                <span>Created By</span>\r\n                <p>{{servey_detail.created_by_name}}</p>\r\n              </div>\r\n              <div class=\"block-feilds\">\r\n                <span>Start Date</span>\r\n                <p>{{servey_detail.start_date | date:'d MMM y'}}</p>\r\n              </div>\r\n              <div class=\"block-feilds\">\r\n                <span>End Date</span>\r\n                <p>{{servey_detail.end_date | date:'d MMM y'}}</p>\r\n              </div>\r\n              <div class=\"block-feilds\">\r\n                <span>Status</span>\r\n                <p class=\"Approved\"><strong>{{servey_detail.status}}</strong></p>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <!-- Skeleton start -->\r\n        <div class=\"card\" *ngIf=\"skLoading\">\r\n          <div class=\"sk-head\">\r\n            <h2>&nbsp;</h2>\r\n          </div>\r\n          <div class=\"card-body\">\r\n            <div class=\"grid-box\">\r\n              <div class=\"sk-box\" *ngFor=\"let row of [].constructor(10)\">\r\n                &nbsp;\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <!-- Skeleton end -->\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"row\" *ngIf=\"!skLoading\">\r\n      <div class=\"col s12 m4 l4\">\r\n        <div class=\"card pb0\">\r\n          <div class=\"card-head\">\r\n            <h2>Area Wise Selection</h2>\r\n          </div>\r\n          <div class=\"card-body\">\r\n            <div class=\"row\">\r\n              <div class=\"col s12\">\r\n                <div class=\"check-box\">\r\n                  <div class=\"check-body\">\r\n                    <mat-checkbox [labelPosition]=\"labelPosition\" color=\"primary\"\r\n                      [disabled]=\"assign_login_data2.edit_survey!='1'\"\r\n                      *ngFor=\"let val of states | filterBy : {state_name : search_st}; let g=index\"\r\n                      [name]=\"'state'+val.state_name+g\" [value]=\"\" [ngModel]=\"val.state_value\"\r\n                      (ngModelChange)=\"storestate(val.state_name)\">\r\n                      {{val.state_name}}\r\n                    </mat-checkbox>\r\n                  </div>\r\n                </div>\r\n                <div class=\"row mt6\">\r\n                  <div class=\"col s12\">\r\n                    <div class=\"text-right\">\r\n                      <button [ngClass]=\"{'loading': savingFlag == true}\" mat-raised-button color=\"accent\"\r\n                        *ngIf=\"assign_login_data2.edit_survey=='1' && servey_detail.status == 'Active'\"\r\n                        (click)=\"areaUpdate()\" [disabled]=\"savingFlag == true\">\r\n                        {{savingFlag == true ? 'Saving' : 'Update'}}\r\n                      </button>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col s12 m8 l8\">\r\n        <div class=\"card pb0\">\r\n          <div class=\"card-head\">\r\n            <h2>Survey Question & Answer</h2>\r\n          </div>\r\n          <div class=\"card-body\">\r\n            <div class=\"row cs-form\">\r\n              <div class=\"col s12\">\r\n                <mat-accordion class=\"cs-mat-accordion\">\r\n                  <mat-expansion-panel [expanded]=\"step === i\" (opened)=\"setStep(i)\"\r\n                    *ngFor=\"let row of servey_detail.question_item_data; let i = index\">\r\n                    <mat-expansion-panel-header>\r\n                      <mat-panel-title>\r\n                        <div class=\"que\">\r\n                          <img src=\"assets/img/que.png\" class=\"h10\">\r\n                          <span>{{i+1}}.</span>\r\n                        </div>\r\n                        {{row.ques_name}}- ({{row.type.replaceAll('_',' ') | titlecase}})\r\n                        <!-- <a *ngIf=\"row.edit == 'Yes'\" class=\"accordion-action default\" (click)=\"editsurveyanswer('delete_question',row.id,row.ques_name,row.survey_id)\"> \r\n                          <i class=\"material-icons\">delete</i>\r\n                        </a> -->\r\n                      </mat-panel-title>\r\n                    </mat-expansion-panel-header>\r\n                    <div class=\"panel-body\">\r\n                      <div class=\"relative-block mt10\" *ngIf=\"row.edit == 'Yes'\">\r\n                        <mat-form-field appearance=\"outline\">\r\n                          <input matInput class=\"pr150\" placeholder=\"{{row.ques_name}}\" name=\"question\"\r\n                            [(ngModel)]=\"row.ques_name\" #question=\"ngModel\" [readonly]=\"!edit_question\">\r\n                        </mat-form-field>\r\n                        <!-- <a mat-raised-button color=\"primary\" *ngIf=\"!edit_question && assign_login_data2.edit_survey=='1'\" class=\"fix-btns\" (click)=\"edit_question = !edit_question;\">\r\n                          <i class=\"material-icons font18\">edit</i>\r\n                        </a>\r\n                        <a mat-raised-button color=\"success\" title=\"Save\" *ngIf=\"edit_question && assign_login_data2.edit_survey=='1'\" (click)=\"edit_question = !edit_question ; editsurveyanswer('question',row.id, row.ques_name,row.survey_id)\" class=\"fix-btns\">\r\n                          <i class=\"material-icons font18\">save</i>\r\n                        </a> -->\r\n                      </div>\r\n                      <div class=\"survey-ans\" *ngIf=\"row.edit != 'Yes'\">\r\n                        <ol type=\"A\">\r\n                          <li *ngFor=\"let rowans of row.options\">\r\n                            {{rowans.answers}}\r\n                          </li>\r\n                        </ol>\r\n                      </div>\r\n                      <div class=\"survey-ans p4\" *ngIf=\"row.edit == 'Yes'\">\r\n                        <ol type=\"A\">\r\n                          <li *ngFor=\"let rowans of row.options\">\r\n                            <div class=\"survey_ans\">\r\n                              <input type=\"text\" placeholder='Test A' name=\"answer\" [(ngModel)]=\"rowans.answers\"\r\n                                value=\"{{rowans}}\" #answer=\"ngModel\" [readonly]=\"!edit_answer\">\r\n                              <!-- <div class=\"edit-action\">\r\n                                <a class=\"edit\" title=\"Edit\" *ngIf=\"!edit_answer && assign_login_data2.edit_survey=='1'\" (click)=\"edit_answer = !edit_answer\">\r\n                                  <i class=\"material-icons\">edit</i>\r\n                                </a>\r\n                                <a class=\"edit\" title=\"Save\" *ngIf=\"edit_answer\" (click)=\"edit_answer = !edit_answer;  editsurveyanswer('answer',rowans.id,rowans.answers,row.survey_id)\">\r\n                                  <i class=\"material-icons\">save</i>\r\n                                </a>\r\n                                <a title=\"Delete\" class=\"delete\" (click)=\"editsurveyanswer('delete_answer',rowans.id,rowans.answers,row.survey_id)\">\r\n                                  <i class=\"material-icons\">delete</i>\r\n                                </a>\r\n                              </div> -->\r\n                            </div>\r\n                          </li>\r\n                        </ol>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"survey-reply\" *ngIf=\"row.options.length\">\r\n                      <ol type=\"A\">\r\n                        <li *ngFor=\"let rowans of row.options\">\r\n                          <div>\r\n                            <a class=\"link-btn\" (click)=\"openAnswerModal(row,'survey_answer_information')\">\r\n                              {{rowans.count}}\r\n                            </a>\r\n                          </div>\r\n                          <div style=\"background-color:red\" [style.width]=\"rowans.count + 'px'\">\r\n                          </div>\r\n                        </li>\r\n                      </ol>\r\n                    </div>\r\n                    <div class=\"survey-reply\" *ngIf=\"!row.options.length\">\r\n                      <ol type=\"A\">\r\n                        <li>\r\n                          <div>\r\n                            <a class=\"link-btn\" (click)=\"openAnswerModal(row,'survey_answer_information')\">\r\n                              {{row.filledAnswersCount}}\r\n                            </a>\r\n                          </div>\r\n                          <div style=\"background-color:red\" [style.width]=\"row.filledAnswersCount + 'px'\">\r\n                          </div>\r\n                        </li>\r\n                      </ol>\r\n                    </div>\r\n                  </mat-expansion-panel>\r\n                </mat-accordion>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/survey/survey-detail/survey-detail.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/survey/survey-detail/survey-detail.component.ts ***!
  \*****************************************************************/
/*! exports provided: SurveyDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SurveyDetailComponent", function() { return SurveyDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_services_DatabaseService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/_services/DatabaseService */ "./src/_services/DatabaseService.ts");
/* harmony import */ var src_app_edit_survey_edit_survey_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/edit-survey/edit-survey.component */ "./src/app/edit-survey/edit-survey.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng6-toastr-notifications */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/ng6-toastr-notifications/fesm5/ng6-toastr-notifications.js");
/* harmony import */ var src_app_localstorage_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/localstorage.service */ "./src/app/localstorage.service.ts");
/* harmony import */ var _survey_information_modal_survey_information_modal_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../survey-information-modal/survey-information-modal.component */ "./src/app/survey/survey-information-modal/survey-information-modal.component.ts");









var SurveyDetailComponent = /** @class */ (function () {
    function SurveyDetailComponent(route, service, rout, dialog, toast, session) {
        var _this = this;
        this.route = route;
        this.service = service;
        this.rout = rout;
        this.dialog = dialog;
        this.toast = toast;
        this.session = session;
        this.queData = [];
        this.form_statelist = [];
        this.surveAns = {};
        this.edit_answer = false;
        this.savingFlag = false;
        this.skLoading = false;
        this.surveyQue = {};
        this.data = {};
        this.Data = {};
        this.SurveyData = {};
        this.servey_detail = {};
        this.abhishek = [];
        this.userData = {};
        this.UserID = '';
        this.edit_question = false;
        this.labelPosition = 'before';
        this.step = 0;
        this.states = [];
        this.selState = [];
        this.userData = JSON.parse(localStorage.getItem('st_user'));
        this.assign_login_data = this.session.getSession();
        this.assign_login_data = this.assign_login_data.value;
        this.assign_login_data2 = this.assign_login_data.data;
        this.UserID = this.userData.data.id;
        this.route.params.subscribe(function (params) {
            _this.id = params.id;
            _this.service.currentUserID = params.id;
        });
        this.survey_detail();
    }
    SurveyDetailComponent.prototype.ngOnInit = function () {
    };
    SurveyDetailComponent.prototype.setStep = function (index) {
        this.step = index;
    };
    SurveyDetailComponent.prototype.survey_detail = function () {
        var _this = this;
        this.skLoading = true;
        this.service.post_rqst({ 'id': this.id }, 'Survey/surveyDetail').subscribe(function (resp) {
            if (resp['statusCode'] == 200) {
                _this.servey_detail = resp['data'];
                for (var i = 0; i < resp['data']['state'].length; i++) {
                    var arr = {
                        'state_name': resp['data']['state'][i]
                    };
                    _this.skLoading = false;
                    _this.form_statelist.push(arr);
                }
                setTimeout(function () {
                    _this.skLoading = false;
                }, 700);
            }
            else {
                _this.toast.errorToastr(resp['statusMsg']);
            }
        });
        this.getState();
    };
    SurveyDetailComponent.prototype.openDialog = function (edit_type) {
        var _this = this;
        var dialogRef = this.dialog.open(src_app_edit_survey_edit_survey_component__WEBPACK_IMPORTED_MODULE_4__["EditSurveyComponent"], {
            width: '400px',
            panelClass: 'cs-model',
            data: {
                id: this.servey_detail.id,
                Edit_type: edit_type,
                reason: ''
            }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result != false) {
                _this.survey_detail();
            }
        });
    };
    SurveyDetailComponent.prototype.openAnswerModal = function (rowData, from) {
        var _this = this;
        var dialogRef = this.dialog.open(_survey_information_modal_survey_information_modal_component__WEBPACK_IMPORTED_MODULE_8__["SurveyInformationModalComponent"], {
            width: '1000px',
            panelClass: 'cs-model',
            data: {
                rowData: rowData,
                'from': from,
            }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result != false) {
                _this.survey_detail();
            }
        });
    };
    SurveyDetailComponent.prototype.editSurvey = function (edit_type) {
        var id = '';
        var Edit_type = '';
        id = this.id;
        Edit_type = edit_type;
        this.rout.navigate(['/edit-survey'], { queryParams: { id: id, } });
    };
    SurveyDetailComponent.prototype.editsurveyanswer = function (action, id, quans, survey_id) {
        var _this = this;
        this.SurveyData.action = action;
        this.SurveyData.id = id;
        if (this.SurveyData.action == 'question' || this.SurveyData.action == 'delete_question') {
            this.SurveyData.question = quans;
        }
        else {
            this.SurveyData.answers = quans;
        }
        this.SurveyData.survey_id = survey_id;
        this.service.post_rqst({ 'Data': this.SurveyData }, 'Survey/updateSurveyQuesAns').subscribe(function (resp) {
            if (resp['statusCode'] == 200) {
                _this.toast.successToastr('Successfully Updated');
                _this.survey_detail();
            }
            else {
                _this.toast.errorToastr(resp['statusMsg']);
            }
        }, function (error) {
        });
    };
    SurveyDetailComponent.prototype.getState = function () {
        var _this = this;
        this.service.post_rqst({}, 'Survey/getAllState').subscribe(function (resp) {
            if (resp['statusCode'] == 200) {
                _this.states = resp['all_state'];
                _this.datastateupdate();
            }
            else {
                _this.toast.errorToastr(resp['statusMsg']);
            }
        }, function (error) {
        });
    };
    SurveyDetailComponent.prototype.datastateupdate = function () {
        var _this = this;
        var _loop_1 = function (i) {
            var Index = this_1.states.findIndex(function (row) { return row.state_name == _this.form_statelist[i]['state_name']; });
            if (Index != -1) {
                this_1.states[Index].state_value = true;
            }
            else {
            }
        };
        var this_1 = this;
        for (var i = 0; i < this.states.length; i++) {
            _loop_1(i);
        }
    };
    SurveyDetailComponent.prototype.storestate = function (state_name) {
        if (state_name) {
            this.form_statelist.push({ state_name: state_name });
        }
    };
    SurveyDetailComponent.prototype.setState = function (e, state) {
        if (e.checked == true) {
            this.selState.push(state);
        }
        else {
            var removeindex = this.selState.findIndex(function (r) { return r == state; });
            this.selState.splice(removeindex, 1);
        }
    };
    SurveyDetailComponent.prototype.allState = function () {
        if (!this.data.allStates) {
            this.selState = [];
            for (var i = 0; i < this.states.length; i++) {
                this.states[i].selected = false;
            }
        }
        else {
            this.selState = [];
            for (var i = 0; i < this.states.length; i++) {
                this.states[i].selected = true;
                this.selState.push(this.states[i].state_name);
            }
        }
    };
    SurveyDetailComponent.prototype.areaUpdate = function () {
        var _this = this;
        this.savingFlag = true;
        this.data.state = this.form_statelist;
        this.data.survey_id = this.id;
        this.data.uid = this.UserID;
        this.service.post_rqst(this.data, 'Survey/updateSurveyState').subscribe(function (resp) {
            if (resp['statusCode'] == 200) {
                _this.toast.successToastr(resp['statusMsg']);
                _this.savingFlag = false;
                _this.survey_detail();
            }
            else {
                _this.toast.errorToastr(resp['statusMsg']);
                _this.savingFlag = false;
            }
        });
    };
    SurveyDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-survey-detail',
            template: __webpack_require__(/*! ./survey-detail.component.html */ "./src/app/survey/survey-detail/survey-detail.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], src_services_DatabaseService__WEBPACK_IMPORTED_MODULE_3__["DatabaseService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialog"], ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_6__["ToastrManager"], src_app_localstorage_service__WEBPACK_IMPORTED_MODULE_7__["sessionStorage"]])
    ], SurveyDetailComponent);
    return SurveyDetailComponent;
}());



/***/ }),

/***/ "./src/app/survey/survey-information-modal/survey-information-modal.component.html":
/*!*****************************************************************************************!*\
  !*** ./src/app/survey/survey-information-modal/survey-information-modal.component.html ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"edit-modal\" *ngIf=\"comes_from!='survey_result'\">\r\n  <p class=\"heading mb0\">Survey Information</p>\r\n  <div mat-dialog-content>\r\n    <div class=\"cs-table left-right-10\">\r\n      <div class=\"stickyHead sticky-head\">\r\n        <div class=\"table-head\">\r\n          <table>\r\n            <tr>\r\n              <th class=\"w50\">S.No.</th>\r\n              <th>User Name</th>\r\n              <th class=\"w120 text-center\">Type</th>\r\n              <th class=\"w120 text-center\">Answers</th>\r\n            </tr>\r\n          </table>\r\n        </div>\r\n\r\n      </div>\r\n      <div class=\"table-container\">\r\n        <div class=\"table-content\">\r\n          <table>\r\n            <ng-container *ngIf=\"!skLoading\">\r\n              <tr class=\"sk-loading\" *ngFor=\"let row of surveyAnswerList; let i =index\">\r\n                <td class=\"w50\">\r\n                  {{i+1}}\r\n                </td>\r\n                <td>{{row.created_by_name}}</td>\r\n                <td class=\"w120\">{{row.created_by_type}}</td>\r\n                <td class=\"w120\">{{row.answers}}</td>\r\n              </tr>\r\n            </ng-container>\r\n            <ng-container *ngIf=\"skLoading\">\r\n              <tr class=\"sk-loading\" *ngFor=\"let row of [].constructor(10);\">\r\n                <td class=\"w50\">\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n                <td>\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n                <td class=\"w120\">\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n                <td class=\"w120\">\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n              </tr>\r\n            </ng-container>\r\n          </table>\r\n          <div class=\"search-results\" data-infinite-scroll debounce [infiniteScrollDistance]=\"1\"\r\n            [infiniteScrollUpDistance]=\"2\" [infiniteScrollThrottle]=\"10\" (scrolled)=\"getSurveyDetail()\">\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n\r\n    </div>\r\n  </div>\r\n  <div mat-dialog-actions>\r\n    <button mat-stroked-button color=\"warn\" [mat-dialog-close]=\"false\">Cancel</button>\r\n  </div>\r\n</div>\r\n\r\n<div class=\"edit-modal\" *ngIf=\"comes_from=='survey_result'\">\r\n  <p class=\"heading mb0\">Survey Information</p>\r\n  <div mat-dialog-content>\r\n    <div class=\"cs-table left-right-10\">\r\n      <div class=\"stickyHead sticky-head\">\r\n        <div class=\"table-head\">\r\n          <table>\r\n            <tr>\r\n              <th class=\"w50\">S.No.</th>\r\n              <th class=\"w100\">Date Created</th>\r\n              <th>User Name</th>\r\n              <th class=\"w120 text-center\">Type</th>\r\n              <th class=\"w120 text-center\" *ngFor=\"let ques of surveyResultQuestions\">{{ques}}</th>\r\n            </tr>\r\n          </table>\r\n        </div>\r\n\r\n      </div>\r\n      <div class=\"table-container\">\r\n        <div class=\"table-content\">\r\n          <table>\r\n            <ng-container *ngIf=\"!skLoading\">\r\n              <tr class=\"sk-loading\" *ngFor=\"let row of surveyResult; let i =index\">\r\n                <td class=\"w50\">{{i+1}}</td>\r\n                <td class=\"w100\">\r\n                  {{row.date_created | date:'dd MMM yyyy'}}\r\n                </td>\r\n                <td>{{row.created_by_name}}</td>\r\n                <td class=\"w120\">{{row.created_by_type}}</td>\r\n                <td class=\"w120\" *ngFor=\"let newans of row.answer\">{{newans}}</td>\r\n              </tr>\r\n            </ng-container>\r\n            <ng-container *ngIf=\"skLoading\">\r\n              <tr class=\"sk-loading\" *ngFor=\"let row of [].constructor(10);\">\r\n                <td class=\"w50\">\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n                <td class=\"w100\">\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n                <td>\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n                <td class=\"w120\">\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n                <td class=\"w120\">\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n              </tr>\r\n            </ng-container>\r\n          </table>\r\n          <div class=\"search-results\" data-infinite-scroll debounce [infiniteScrollDistance]=\"1\"\r\n            [infiniteScrollUpDistance]=\"2\" [infiniteScrollThrottle]=\"10\" (scrolled)=\"getSurveyResult()\">\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n\r\n    </div>\r\n  </div>\r\n  <div mat-dialog-actions>\r\n    <button mat-stroked-button color=\"warn\" [mat-dialog-close]=\"false\">Cancel</button>\r\n    <button mat-raised-button color=\"accent\" [ngClass]=\"{'loading': skLoading == true}\" [disabled]=\"skLoading\" *ngIf=\"surveyResult.length > 0 && assign_login_data2.export_survey=='1'\"  (click)=\"downloadExcel();\">\r\n      Download Excel \r\n      <img src=\"assets/img/excel.svg\" height=\"20px\">\r\n    </button>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/survey/survey-information-modal/survey-information-modal.component.scss":
/*!*****************************************************************************************!*\
  !*** ./src/app/survey/survey-information-modal/survey-information-modal.component.scss ***!
  \*****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/survey/survey-information-modal/survey-information-modal.component.ts":
/*!***************************************************************************************!*\
  !*** ./src/app/survey/survey-information-modal/survey-information-modal.component.ts ***!
  \***************************************************************************************/
/*! exports provided: SurveyInformationModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SurveyInformationModalComponent", function() { return SurveyInformationModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng6-toastr-notifications */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/ng6-toastr-notifications/fesm5/ng6-toastr-notifications.js");
/* harmony import */ var src_services_DatabaseService__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/_services/DatabaseService */ "./src/_services/DatabaseService.ts");
/* harmony import */ var src_app_localstorage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/localstorage.service */ "./src/app/localstorage.service.ts");






var SurveyInformationModalComponent = /** @class */ (function () {
    function SurveyInformationModalComponent(modelData, dialog, serve, session, toast, dialogRef) {
        this.modelData = modelData;
        this.dialog = dialog;
        this.serve = serve;
        this.session = session;
        this.toast = toast;
        this.dialogRef = dialogRef;
        this.skLoading = false;
        this.savingFlag = false;
        this.surveyId = '';
        this.surveyAnswerList = [];
        this.surveyResult = [];
        this.surveyResultQuestions = [];
        this.pagelimit = 20;
        this.comes_from = '';
        this.assign_login_data2 = this.session.getSession();
        this.assign_login_data2 = this.assign_login_data2.value;
        this.assign_login_data2 = this.assign_login_data2.data;
        this.downurl = serve.downloadUrl;
        this.surveyId = modelData.rowData.id;
        this.comes_from = modelData.from;
        if (this.comes_from == "survey_result") {
            this.getSurveyResult();
        }
        else {
            this.getSurveyDetail();
        }
    }
    SurveyInformationModalComponent.prototype.ngOnInit = function () {
    };
    SurveyInformationModalComponent.prototype.getSurveyDetail = function () {
        var _this = this;
        this.skLoading = true;
        this.serve.post_rqst({ 'id': this.surveyId, 'start': this.surveyAnswerList.length, 'pagelimit': this.pagelimit }, "Survey/answerList").subscribe(function (result) {
            if (result['statusCode'] == 200) {
                _this.skLoading = false;
                _this.surveyAnswerList = _this.surveyAnswerList.concat(result['result']);
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
    SurveyInformationModalComponent.prototype.getSurveyResult = function () {
        var _this = this;
        this.skLoading = true;
        this.serve.post_rqst({ 'id': this.surveyId, 'start': this.surveyResult.length, 'pagelimit': this.pagelimit }, "Survey/surveyReport").subscribe(function (result) {
            if (result['statusCode'] == 200) {
                _this.skLoading = false;
                _this.surveyResult = _this.surveyAnswerList.concat(result['result']['Answers']);
                _this.surveyResultQuestions = result['result']['questions'];
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
    SurveyInformationModalComponent.prototype.downloadExcel = function () {
        var _this = this;
        this.skLoading = true;
        this.serve.post_rqst({ 'id': this.surveyId }, "Excel/allownceCsv").subscribe(function (result) {
            if (result['msg'] == true) {
                window.open(_this.downurl + result['filename']);
                _this.dialog.closeAll();
            }
        });
    };
    SurveyInformationModalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-survey-information-modal',
            template: __webpack_require__(/*! ./survey-information-modal.component.html */ "./src/app/survey/survey-information-modal/survey-information-modal.component.html"),
            styles: [__webpack_require__(/*! ./survey-information-modal.component.scss */ "./src/app/survey/survey-information-modal/survey-information-modal.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object, _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"], src_services_DatabaseService__WEBPACK_IMPORTED_MODULE_4__["DatabaseService"], src_app_localstorage_service__WEBPACK_IMPORTED_MODULE_5__["sessionStorage"], ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_3__["ToastrManager"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"]])
    ], SurveyInformationModalComponent);
    return SurveyInformationModalComponent;
}());



/***/ }),

/***/ "./src/app/survey/survey-list/survey-list.component.html":
/*!***************************************************************!*\
  !*** ./src/app/survey/survey-list/survey-list.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-container\">\r\n  <div class=\"tools-container\">\r\n    <h2>Survey</h2>\r\n    <div class=\"left-auto left-auto df ac flex-gap-10\">\r\n      <button mat-icon-button matTooltip=\"Refresh\" (click)=\"refresh() \">\r\n        <i class=\"material-icons\">refresh</i>\r\n      </button>\r\n\r\n      <div class=\"pagination\" *ngIf=\"serveylistdata.length > 0\">\r\n\r\n        <div class=\"pagination-content\">\r\n          Pages\r\n          <span>{{pagenumber}}</span>\r\n          of\r\n          <span>{{total_page}}</span>\r\n        </div>\r\n        <div class=\"page-nav\">\r\n\r\n          <button mat-icon-button matTooltip=\"Older\" (click)=\"pervious()\" [disabled]=\"start == 0\">\r\n            <i class=\"material-icons\">navigate_before</i>\r\n          </button>\r\n          <button mat-icon-button matTooltip=\"Newer\" (click)=\"nextPage()\" [disabled]=\"pagenumber == total_page \">\r\n            <i class=\"material-icons\">navigate_next</i>\r\n          </button>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"mat-tabbar\">\r\n        <button mat-button [ngClass]=\"active_tab == 'Active' ? 'active' : ''\"\r\n          (click)=\"active_tab = 'Active';surveyList()\"><i class=\"material-icons\">toggle_on</i>Active\r\n          ({{tabCount.activeCount}})</button>\r\n        <button mat-button [ngClass]=\"active_tab == 'Inactive' ? 'active' : ''\"\r\n          (click)=\"active_tab = 'Inactive';surveyList()\"><i class=\"material-icons\">toggle_off</i>Inactive\r\n          ({{tabCount.inactiveCount}})</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"container pb100\">\r\n    <div class=\"cs-table\">\r\n      <div class=\"sticky-head\">\r\n        <div class=\"table-head\">\r\n          <table>\r\n            <tr>\r\n              <th class=\"w60\">Sr.No.</th>\r\n              <th class=\"w100\">Date Created</th>\r\n              <th class=\"w110\">Start Date</th>\r\n              <th class=\"w110\">End Date</th>\r\n              <th class=\"w200\">User Type</th>\r\n              <th>Title</th>\r\n              <th class=\"w100 text-center\" *ngIf=\"assign_login_data2.edit_survey=='1'\">Status</th>\r\n            </tr>\r\n          </table>\r\n        </div>\r\n\r\n        <div class=\"table-head border-top\">\r\n          <table>\r\n            <tr>\r\n              <th class=\"w60\">&nbsp;</th>\r\n              <th class=\"w100\">\r\n                <div class=\"th-search-acmt\">\r\n                  <mat-form-field class=\"cs-input date-column infix-bodr\">\r\n                    <input matInput [matDatepicker]=\"picker\" name=\"date_created\" [(ngModel)]=\"filter.date_created\"\r\n                      (dateChange)=\"surveyList()\" disabled>\r\n                    <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\r\n                    <mat-datepicker #picker disabled=\"false\"></mat-datepicker>\r\n                  </mat-form-field>\r\n                </div>\r\n              </th>\r\n              <th class=\"w110\">\r\n                <div class=\"th-search-acmt\">\r\n                  <mat-form-field class=\"cs-input date-column infix-bodr\">\r\n                    <input matInput [matDatepicker]=\"startDate\" name=\"start_date\" [(ngModel)]=\"filter.start_date\"\r\n                      (dateChange)=\"surveyList()\" disabled>\r\n                    <mat-datepicker-toggle matSuffix [for]=\"startDate\"></mat-datepicker-toggle>\r\n                    <mat-datepicker #startDate disabled=\"false\"></mat-datepicker>\r\n                  </mat-form-field>\r\n                </div>\r\n              </th>\r\n              <th class=\"w110\">\r\n                <div class=\"th-search-acmt\">\r\n                  <mat-form-field class=\"cs-input date-column infix-bodr\">\r\n                    <input matInput [matDatepicker]=\"endDate\" name=\"end_date\" [(ngModel)]=\"filter.end_date\"\r\n                      (dateChange)=\"surveyList()\" disabled>\r\n                    <mat-datepicker-toggle matSuffix [for]=\"endDate\"></mat-datepicker-toggle>\r\n                    <mat-datepicker #endDate disabled=\"false\"></mat-datepicker>\r\n                  </mat-form-field>\r\n                </div>\r\n              </th>\r\n              <th class=\"w200\">&nbsp;</th>\r\n              <th>\r\n                <div class=\"th-search-acmt\">\r\n                  <mat-form-field class=\"example-full-width cs-input select-input\">\r\n                    <input matInput placeholder=\"Search...\" type=\"text\" name=\"title\" [(ngModel)]=\"filter.title\"\r\n                      (keyup.enter)=\"surveyList()\">\r\n                  </mat-form-field>\r\n                </div>\r\n              </th>\r\n              <th class=\"w100 text-center\" *ngIf=\"assign_login_data2.edit_survey=='1'\">&nbsp;</th>\r\n            </tr>\r\n          </table>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"table-container\">\r\n        <div class=\"table-content\">\r\n          <table>\r\n            <ng-container *ngIf=\"!loader\">\r\n              <tr *ngFor=\"let row of serveylistdata let i = index;\"\r\n                [ngClass]=\"{'Current': service.currentUserID == row.id}\">\r\n                <td class=\"w60\">{{i + 1 + sr_no}}</td>\r\n                <td class=\"w100\">{{row.date_created | date:'d MMM y'}}</td>\r\n                <td class=\"w110\">{{row.start_date | date:'d MMM y'}}</td>\r\n                <td class=\"w110\">{{row.end_date | date:'d MMM y'}}</td>\r\n                <td class=\"w200\">\r\n                  <span>{{row.types}}</span>\r\n                </td>\r\n                <td><a class=\"link-btn\" (click)=\"service.setData(filter)\"\r\n                    routerLink=\"survey-detail/{{row.id}}\">{{row.title | titlecase}}</a></td>\r\n                <td class=\"w100 text-center\" *ngIf=\"assign_login_data2.edit_survey=='1'\">\r\n                  <div class=\"action-button\">\r\n                    <mat-slide-toggle color=\"accent\" *ngIf=\"assign_login_data2.edit_survey=='1'\"\r\n                      checked=\"{{active_tab == 'Active' ? 'true' :'false'}}\"\r\n                      (change)=\"change_status(row.id,i)\"></mat-slide-toggle>\r\n                  </div>\r\n                </td>\r\n              </tr>\r\n            </ng-container>\r\n\r\n            <ng-container *ngIf=\"loader\">\r\n              <tr class=\"sk-loading\" *ngFor=\"let row of [].constructor(10)\">\r\n                <td class=\"w60\">\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n                <td class=\"w100\">\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n                <td class=\"w110\">\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n                <td class=\"w110\">\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n                <td class=\"w200\">\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n                <td>\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n                <td class=\"w100 text-center\" *ngIf=\"assign_login_data2.edit_survey=='1'\">\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n              </tr>\r\n            </ng-container>\r\n\r\n\r\n          </table>\r\n        </div>\r\n        <ng-container *ngIf=\"serveylistdata.length == 0 && noResult\">\r\n          <app-not-result-found></app-not-result-found>\r\n        </ng-container>\r\n      </div>\r\n    </div>\r\n\r\n\r\n  </div>\r\n\r\n\r\n\r\n  <div class=\"fab-btns\">\r\n    <!-- <button mat-fab class=\"excel\" *ngIf=\"serveylistdata.length > 0 && assign_login_data2.export_survey=='1'\"\r\n      (click)=\"lastBtnValue('excel');\" [ngClass]=\"{'pulse': fabBtnValue=='excel'}\">\r\n      <img src=\"assets/img/excel.svg\">\r\n      Download Excel\r\n    </button> -->\r\n    <button class=\"pulse\" mat-fab (click)=\"lastBtnValue('add')\" *ngIf=\" assign_login_data2.add_survey=='1'\"\r\n      [ngClass]=\"{'pulse': fabBtnValue=='add'}\" color=\"primary\" routerLink=\"survey-add\">\r\n      <i class=\"material-icons\">add</i>\r\n      Add New\r\n    </button>\r\n  </div>\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/survey/survey-list/survey-list.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/survey/survey-list/survey-list.component.ts ***!
  \*************************************************************/
/*! exports provided: SurveyListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SurveyListComponent", function() { return SurveyListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_services_DatabaseService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/_services/DatabaseService */ "./src/_services/DatabaseService.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var src_app_dialog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/dialog.component */ "./src/app/dialog.component.ts");
/* harmony import */ var ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng6-toastr-notifications */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/ng6-toastr-notifications/fesm5/ng6-toastr-notifications.js");
/* harmony import */ var src_app_localstorage_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/localstorage.service */ "./src/app/localstorage.service.ts");







var SurveyListComponent = /** @class */ (function () {
    function SurveyListComponent(service, toast, alert, session) {
        this.service = service;
        this.toast = toast;
        this.alert = alert;
        this.session = session;
        this.fabBtnValue = 'add';
        this.active_tab = 'Active';
        this.filter = {};
        this.loader = false;
        this.pagenumber = 1;
        this.start = 0;
        this.count = {};
        this.tabCount = {};
        this.serveylistdata = [];
        this.noResult = false;
        this.page_limit = service.pageLimit;
        this.assign_login_data = this.session.getSession();
        this.assign_login_data = this.assign_login_data.value;
        this.assign_login_data2 = this.assign_login_data.data;
        this.userData = JSON.parse(localStorage.getItem('st_user'));
        this.userId = this.userData['data']['id'];
        this.userName = this.userData['data']['name'];
    }
    SurveyListComponent.prototype.ngOnInit = function () {
        this.filter = this.service.getData();
        if (this.filter.status) {
            this.active_tab = this.filter.status;
        }
        this.surveyList();
    };
    SurveyListComponent.prototype.pervious = function () {
        this.start = this.start - this.page_limit;
        this.surveyList();
    };
    SurveyListComponent.prototype.nextPage = function () {
        this.start = this.start + this.page_limit;
        this.surveyList();
    };
    SurveyListComponent.prototype.surveyList = function () {
        var _this = this;
        this.loader = true;
        this.filter.status = this.active_tab;
        if (this.pagenumber > this.total_page) {
            this.pagenumber = this.total_page;
        }
        if (this.start < 0) {
            this.start = 0;
        }
        if (this.filter.date_created) {
            this.filter.date_created = moment__WEBPACK_IMPORTED_MODULE_3__(this.filter.date_created).format('YYYY-MM-DD');
        }
        if (this.filter.start_date) {
            this.filter.start_date = moment__WEBPACK_IMPORTED_MODULE_3__(this.filter.start_date).format('YYYY-MM-DD');
        }
        if (this.filter.end_date) {
            this.filter.end_date = moment__WEBPACK_IMPORTED_MODULE_3__(this.filter.end_date).format('YYYY-MM-DD');
        }
        this.service.post_rqst({ 'filter': this.filter, 'status': this.active_tab, 'start': this.start, 'pagelimit': this.page_limit }, '/Survey/surveyList').subscribe(function (resp) {
            if (resp['data']['statusCode'] == 200) {
                _this.serveylistdata = resp['data']['result'];
                _this.loader = false;
                _this.tabCount = resp['data']['tabCount'];
                _this.pageCount = resp['data']['count'];
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
                    if (_this.serveylistdata.length == 0) {
                        _this.noResult = true;
                    }
                }, 500);
            }
            else {
                _this.toast.errorToastr(resp['data']['statusMsg']);
            }
        });
    };
    SurveyListComponent.prototype.lastBtnValue = function (value) {
        this.fabBtnValue = value;
    };
    SurveyListComponent.prototype.refresh = function () {
        this.filter = {};
        this.service.setData(this.filter);
        this.service.currentUserID = '';
        this.surveyList();
    };
    SurveyListComponent.prototype.change_status = function (id, index) {
        var _this = this;
        this.alert.confirm("You Want To Change Status !").then(function (result) {
            if (result) {
                if (_this.serveylistdata[index].status == "Active") {
                    _this.serveylistdata[index].status = "Inactive";
                }
                else {
                    _this.serveylistdata[index].status = "Active";
                }
                var status_1 = _this.serveylistdata[index].status;
                _this.service.post_rqst({ 'uid': _this.userId, 'id': id, 'status': status_1 }, 'survey/surveyStatusUpdate').subscribe(function (resp) {
                    if (resp['statusCode'] == 200) {
                        _this.toast.successToastr('Status Updated Successfully');
                        _this.surveyList();
                    }
                    else {
                        _this.toast.errorToastr(resp['statusMsg']);
                    }
                }, function (error) {
                });
            }
        });
    };
    SurveyListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-survey-list',
            template: __webpack_require__(/*! ./survey-list.component.html */ "./src/app/survey/survey-list/survey-list.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_services_DatabaseService__WEBPACK_IMPORTED_MODULE_2__["DatabaseService"], ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_5__["ToastrManager"], src_app_dialog_component__WEBPACK_IMPORTED_MODULE_4__["DialogComponent"], src_app_localstorage_service__WEBPACK_IMPORTED_MODULE_6__["sessionStorage"]])
    ], SurveyListComponent);
    return SurveyListComponent;
}());



/***/ }),

/***/ "./src/app/survey/survey-module/survey.module.ts":
/*!*******************************************************!*\
  !*** ./src/app/survey/survey-module/survey.module.ts ***!
  \*******************************************************/
/*! exports provided: SurveyModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SurveyModule", function() { return SurveyModule; });
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
/* harmony import */ var _survey_list_survey_list_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../survey-list/survey-list.component */ "./src/app/survey/survey-list/survey-list.component.ts");
/* harmony import */ var _survey_add_survey_add_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../survey-add/survey-add.component */ "./src/app/survey/survey-add/survey-add.component.ts");
/* harmony import */ var _survey_detail_survey_detail_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../survey-detail/survey-detail.component */ "./src/app/survey/survey-detail/survey-detail.component.ts");
/* harmony import */ var src_app_edit_survey_edit_survey_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/app/edit-survey/edit-survey.component */ "./src/app/edit-survey/edit-survey.component.ts");
/* harmony import */ var _survey_information_modal_survey_information_modal_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../survey-information-modal/survey-information-modal.component */ "./src/app/survey/survey-information-modal/survey-information-modal.component.ts");
/* harmony import */ var ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ngx-infinite-scroll */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/ngx-infinite-scroll/modules/ngx-infinite-scroll.es5.js");
/* harmony import */ var _survey_result_survey_result_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../survey-result/survey-result.component */ "./src/app/survey/survey-result/survey-result.component.ts");



















var surveyRoutes = [
    { path: "", children: [
            { path: "", component: _survey_list_survey_list_component__WEBPACK_IMPORTED_MODULE_12__["SurveyListComponent"], canActivate: [src_app_auth_component_guard__WEBPACK_IMPORTED_MODULE_11__["AuthComponentGuard"]], data: { expectedRole: ['1'] } },
            { path: "survey-detail/:id", component: _survey_detail_survey_detail_component__WEBPACK_IMPORTED_MODULE_14__["SurveyDetailComponent"], canActivate: [src_app_auth_component_guard__WEBPACK_IMPORTED_MODULE_11__["AuthComponentGuard"]], data: { expectedRole: ['1'] } },
            { path: "survey-add", component: _survey_add_survey_add_component__WEBPACK_IMPORTED_MODULE_13__["SurveyAddComponent"], canActivate: [src_app_auth_component_guard__WEBPACK_IMPORTED_MODULE_11__["AuthComponentGuard"]], data: { expectedRole: ['1'] } },
            { path: "edit-survey", component: src_app_edit_survey_edit_survey_component__WEBPACK_IMPORTED_MODULE_15__["EditSurveyComponent"], canActivate: [src_app_auth_component_guard__WEBPACK_IMPORTED_MODULE_11__["AuthComponentGuard"]], data: { expectedRole: ['1'] } },
            { path: "survey-detail/:id/survey-result", component: _survey_result_survey_result_component__WEBPACK_IMPORTED_MODULE_18__["SurveyResultComponent"], canActivate: [src_app_auth_component_guard__WEBPACK_IMPORTED_MODULE_11__["AuthComponentGuard"]], data: { expectedRole: ['1'] } },
        ] },
];
var SurveyModule = /** @class */ (function () {
    function SurveyModule() {
    }
    SurveyModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_survey_list_survey_list_component__WEBPACK_IMPORTED_MODULE_12__["SurveyListComponent"], _survey_detail_survey_detail_component__WEBPACK_IMPORTED_MODULE_14__["SurveyDetailComponent"], _survey_add_survey_add_component__WEBPACK_IMPORTED_MODULE_13__["SurveyAddComponent"], _survey_information_modal_survey_information_modal_component__WEBPACK_IMPORTED_MODULE_16__["SurveyInformationModalComponent"], src_app_edit_survey_edit_survey_component__WEBPACK_IMPORTED_MODULE_15__["EditSurveyComponent"], _survey_result_survey_result_component__WEBPACK_IMPORTED_MODULE_18__["SurveyResultComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild(surveyRoutes),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_7__["NgMultiSelectDropDownModule"],
                src_app_material__WEBPACK_IMPORTED_MODULE_10__["MaterialModule"],
                angular_ng_autocomplete__WEBPACK_IMPORTED_MODULE_6__["AutocompleteLibModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialogModule"],
                ngx_mat_select_search__WEBPACK_IMPORTED_MODULE_8__["NgxMatSelectSearchModule"],
                src_app_app_utility_module__WEBPACK_IMPORTED_MODULE_9__["AppUtilityModule"],
                ngx_infinite_scroll__WEBPACK_IMPORTED_MODULE_17__["InfiniteScrollModule"]
            ],
            entryComponents: [_survey_information_modal_survey_information_modal_component__WEBPACK_IMPORTED_MODULE_16__["SurveyInformationModalComponent"]]
        })
    ], SurveyModule);
    return SurveyModule;
}());



/***/ }),

/***/ "./src/app/survey/survey-result/survey-result.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/survey/survey-result/survey-result.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-container\">\r\n  <div class=\"tools-container\">\r\n    <a mat-icon-button matTooltip=\"Back\" (click)=\"back()\">\r\n      <i class=\"material-icons\">arrow_back</i>\r\n    </a>\r\n    <h2>Survey Result</h2>\r\n    <div class=\"left-auto left-auto df ac flex-gap-10\">\r\n      <button mat-icon-button matTooltip=\"Refresh\" (click)=\"refresh()\">\r\n        <i class=\"material-icons\">refresh</i>\r\n      </button>\r\n\r\n      <div class=\"pagination\" *ngIf=\"surveyResult.length > 0\">\r\n        <div class=\"pagination-content\">\r\n          Pages\r\n          <span>{{pagenumber}}</span>\r\n          of\r\n          <span>{{total_page}}</span>\r\n        </div>\r\n        <div class=\"page-nav\">\r\n          <button mat-icon-button matTooltip=\"Older\" (click)=\"pervious()\" [disabled]=\"start<1\">\r\n            <i class=\"material-icons\">navigate_before</i>\r\n          </button>\r\n          <button mat-icon-button matTooltip=\"Newer\" (click)=\"nextPage()\" [disabled]=\"pagenumber >= total_page \">\r\n            <i class=\"material-icons\">navigate_next</i>\r\n          </button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"container container-scroll\">\r\n    <div class=\"cs-table horizontal-scroll\">\r\n      <div class=\"sticky-head\">\r\n        <div class=\"table-head\">\r\n          <table>\r\n            <tr>\r\n              <th class=\"w60 text-center\">S No.</th>\r\n              <th class=\"w150 text-center\">Date Created</th>\r\n              <th class=\"w200 text-center\">User Name</th>\r\n              <th class=\"w200 text-center\">Type</th>\r\n              <th class=\"w200 text-center\" *ngFor=\"let ques of surveyResultQuestions\">{{ques}}</th>\r\n            </tr>\r\n          </table>\r\n        </div>\r\n\r\n        <!-- <div class=\"table-head border-top\">\r\n          <table>\r\n            <tr>\r\n              <th class=\"w60\">&nbsp;</th>\r\n              <th class=\"w150\">&nbsp;</th>\r\n              <th >&nbsp;</th>\r\n              <th class=\"w150\">&nbsp;</th>\r\n              <th class=\"w120\">&nbsp;</th>\r\n              \r\n            </tr>\r\n          </table>\r\n        </div> -->\r\n      </div>\r\n\r\n      <div class=\"table-container\">\r\n        <div class=\"table-content\">\r\n          <table>\r\n            <ng-container *ngIf=\"!loader\">\r\n              <tr *ngFor=\"let row of surveyResult; let i = index\">\r\n\r\n                <td class=\"w60\">{{start+i+1}}</td>\r\n                <td class=\"w150\">{{row.date_created | date:'dd MMM yyyy'}}</td>\r\n                <td class=\"w200\">{{row.created_by_name}}</td>\r\n                <td class=\"w200\">{{row.type}}</td>\r\n                <!-- <ng-container *ngIf=\"loader\"> -->\r\n                <td class=\"w200\" *ngFor=\"let newans of row.answer\">{{newans}}</td>\r\n               <!-- </ng-container> -->\r\n\r\n              </tr>\r\n            </ng-container>\r\n\r\n\r\n            <ng-container *ngIf=\"loader\">\r\n              <tr class=\"sk-loading\" *ngFor=\"let row of [].constructor(10);\">\r\n                <td class=\"w60\">\r\n                  <div class=\"skeleton-loader\">&nbsp;</div>\r\n                </td>\r\n                <td class=\"w200 text-center\">\r\n                  <div class=\"skeleton-loader\">&nbsp;</div>\r\n                </td>\r\n                <td class=\"w200 text-center\">\r\n                  <div class=\"skeleton-loader\">&nbsp;</div>\r\n                </td>\r\n                <td class=\"w200 text-center\">\r\n                  <div class=\"skeleton-loader\">&nbsp;</div>\r\n                </td>\r\n                <td class=\"w200 text-center\">\r\n                  <div class=\"skeleton-loader\">&nbsp;</div>\r\n                </td>\r\n              </tr>\r\n            </ng-container>\r\n          </table>\r\n        </div>\r\n      </div>\r\n      <ng-container *ngIf=\"surveyResult.length == 0\">\r\n        <app-not-result-found></app-not-result-found>\r\n      </ng-container>\r\n      <!-- <div *ngIf=\"datanotfound == true\">\r\n        <app-not-result-found></app-not-result-found>\r\n      </div> -->\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"fab-btns\" *ngIf=\"surveyResult.length >0 && assign_login_data2.export_survey\">\r\n    <button mat-fab class=\"excel pulse\" [disabled]=\"downloadingloader\" [ngClass]=\"{'loading':downloadingloader}\" (click)=\"downloadExcel(); \">\r\n      <ng-container *ngIf=\"!downloadingloader\"><img src=\"assets/img/excel.svg\">\r\n      Download Excel</ng-container>\r\n      <ng-container *ngIf=\"downloadingloader\">Downloading</ng-container>\r\n    </button>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/survey/survey-result/survey-result.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/survey/survey-result/survey-result.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/survey/survey-result/survey-result.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/survey/survey-result/survey-result.component.ts ***!
  \*****************************************************************/
/*! exports provided: SurveyResultComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SurveyResultComponent", function() { return SurveyResultComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng6-toastr-notifications */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/ng6-toastr-notifications/fesm5/ng6-toastr-notifications.js");
/* harmony import */ var src_app_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/dialog.component */ "./src/app/dialog.component.ts");
/* harmony import */ var src_services_DatabaseService__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/_services/DatabaseService */ "./src/_services/DatabaseService.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var src_app_localstorage_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/localstorage.service */ "./src/app/localstorage.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/router */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/router/fesm5/router.js");






// import { SupportStatusComponent } from '../support-status/support-status.component';


var SurveyResultComponent = /** @class */ (function () {
    function SurveyResultComponent(route, service, toast, dialog, alert, session) {
        var _this = this;
        this.route = route;
        this.service = service;
        this.toast = toast;
        this.dialog = dialog;
        this.alert = alert;
        this.session = session;
        this.surveyId = '';
        this.pagelimit = 20;
        this.surveyResult = [];
        this.surveyAnswerList = [];
        this.loader = false;
        this.pagenumber = 0;
        this.start = 0;
        this.downurl = '';
        this.surveyResultQuestions = [];
        this.assign_login_data2 = [];
        this.downloadingloader = false;
        this.assign_login_data2 = this.session.getSession();
        this.assign_login_data2 = this.assign_login_data2.value;
        this.assign_login_data2 = this.assign_login_data2.data;
        this.downurl = service.downloadUrl;
        this.route.params.subscribe(function (params) {
            _this.id = params.id;
        });
        // this.surveyId = modelData.rowData.id;
        // this.comes_from = modelData.from;
        // if (this.comes_from == "survey_result") {
        this.getSurveyResult();
        // } else {
        // this.getSurveyDetail();
    }
    SurveyResultComponent.prototype.ngOnInit = function () {
    };
    SurveyResultComponent.prototype.pervious = function () {
        this.start = this.start - this.pagelimit;
        this.getSurveyResult();
    };
    SurveyResultComponent.prototype.nextPage = function () {
        this.start = this.start + this.pagelimit;
        this.getSurveyResult();
    };
    SurveyResultComponent.prototype.back = function () {
        window.history.back();
    };
    SurveyResultComponent.prototype.refresh = function () {
        this.getSurveyResult();
    };
    SurveyResultComponent.prototype.getSurveyResult = function () {
        var _this = this;
        this.loader = true;
        this.service.post_rqst({ 'id': this.id, 'start': this.start, 'pagelimit': this.pagelimit }, "Survey/surveyReport").subscribe(function (result) {
            if (result['statusCode'] == 200) {
                _this.loader = false;
                _this.surveyResult = result['result'];
                // this.surveyResultQuestions = result['result']['questions'];
                for (var x = 0; x < _this.surveyResult.length; x++) {
                    _this.surveyResultQuestions = Object.keys(_this.surveyResult[x].surveydata);
                    _this.surveyResult[x].answer = Object.values(_this.surveyResult[x].surveydata);
                }
                _this.pageCount = result['count'];
                _this.pagenumber = Math.ceil(_this.start / _this.pagelimit) + 1;
                _this.total_page = Math.ceil(_this.pageCount / _this.pagelimit);
            }
            else {
                _this.loader = false;
                _this.toast.errorToastr(result['statusMsg']);
            }
        }, function (err) {
            _this.loader = false;
            _this.toast.errorToastr('Something went wrong');
        });
    };
    SurveyResultComponent.prototype.downloadExcel = function () {
        var _this = this;
        this.loader = true;
        this.downloadingloader = true;
        this.service.post_rqst({ 'id': this.id }, "Excel/survey_report").subscribe(function (result) {
            if (result['msg'] == true) {
                _this.downloadingloader = false;
                _this.loader = false;
                window.open(_this.downurl + result['filename']);
            }
        }, function () { _this.downloadingloader = false; });
    };
    SurveyResultComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-survey-result',
            template: __webpack_require__(/*! ./survey-result.component.html */ "./src/app/survey/survey-result/survey-result.component.html"),
            styles: [__webpack_require__(/*! ./survey-result.component.scss */ "./src/app/survey/survey-result/survey-result.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_7__["ActivatedRoute"], src_services_DatabaseService__WEBPACK_IMPORTED_MODULE_4__["DatabaseService"], ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_2__["ToastrManager"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialog"], src_app_dialog_component__WEBPACK_IMPORTED_MODULE_3__["DialogComponent"], src_app_localstorage_service__WEBPACK_IMPORTED_MODULE_6__["sessionStorage"]])
    ], SurveyResultComponent);
    return SurveyResultComponent;
}());



/***/ })

}]);