(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["master-faq-part-module-faq-part-module-module"],{

/***/ "./src/app/master/faq-add/faq-add.component.html":
/*!*******************************************************!*\
  !*** ./src/app/master/faq-add/faq-add.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"main-container\">\r\n  <div class=\"tools-container\">\r\n    <a mat-icon-button matTooltip=\"Back\" (click)=\"back()\">\r\n      <i class=\"material-icons\">arrow_back</i>\r\n    </a>\r\n    <h2>Add Faq</h2>\r\n  </div>\r\n\r\n\r\n  \r\n <div class=\"side-main\" [ngClass] =\"{'on' : toggle == true}\">\r\n  <div class=\"category-field\" >\r\n      <form #f=\"ngForm\" name=\"faq\" (ngSubmit)=\"f.valid && save_faq()\">\r\n        \r\n          \r\n          <div class=\"add-image\">\r\n              <div class=\"option-field\">\r\n                  <label class=\"font14\" style=\"font-weight: 500;\">Question</label>\r\n                  <div class=\"control-field\">\r\n                      <textarea style=\"width: 99%;height: 73px;\"   [spellcheck]=\"true\" name=\"question\" [(ngModel)]=\"form.question\" required></textarea>\r\n                  </div>\r\n                  \r\n                  <label class=\"font14 mt15\" style=\"font-weight: 500; display: block;\">Answer</label>\r\n                  <div class=\"control-field \">\r\n                      <textarea style=\"width: 99%;height: 73px;\" [spellcheck]=\"true\" name=\"answer\" [(ngModel)]=\"form.answer\"></textarea>\r\n                  </div>\r\n              </div>\r\n            \r\n          </div>\r\n      </form>\r\n  </div>\r\n</div> \r\n\r\n\r\n<div class=\"row\">\r\n  <div class=\"col s12\">\r\n    <div class=\"text-right\">\r\n      <button  mat-raised-button color=\"accent\" type=\"submitDetail\" >\r\n       Save\r\n      </button>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n  </div> -->\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n<div class=\"main-container\">\r\n  <!-- <app-loader *ngIf=\"loader\"></app-loader> -->\r\n  <div class=\"tools-container\">\r\n    <a mat-icon-button matTooltip=\"Back\" routerLink=\"/faq-list\">\r\n      <i class=\"material-icons\">arrow_back</i>\r\n    </a>\r\n    <h2>Add New Faq</h2>\r\n  </div>\r\n\r\n  <div class=\"container pt10 pl10 pr10 pb50\">\r\n    <form #f=\"ngForm\" (ngSubmit)=\" f.valid && submitDetail()\">\r\n      <div class=\"row\">\r\n        <div class=\"col s12\">\r\n          <div class=\"card pb0\">\r\n\r\n            <div class=\"card-body cs-form\">\r\n              <div class=\"row\">\r\n                <!-- <div class=\"col s12 m6 l6\">\r\n                    <mat-radio-group class=\"example-section\" id=\"gift_type\" name=\"gift_type\" [(ngModel)]=\"data.gift_type\">\r\n                      <mat-radio-button class=\"wp50\" color=\"primary\" value=\"Gift\">\r\n                        Gift\r\n                      </mat-radio-button>\r\n                      <mat-radio-button class=\"wp50\" color=\"primary\" value=\"Cash\">\r\n                        Cash\r\n                      </mat-radio-button>\r\n                    </mat-radio-group>\r\n                  </div> -->\r\n\r\n\r\n                <!-- <div class=\"option-field\">\r\n                    <label class=\"font14\" style=\"font-weight: 500;\">Question</label>\r\n                    <div class=\"control-field\">\r\n                        <textarea style=\"width: 99%;height: 73px;\"   [spellcheck]=\"true\" name=\"question\" [(ngModel)]=\"form.question\" required></textarea>\r\n                    </div>\r\n                    \r\n                    <label class=\"font14 mt15\" style=\"font-weight: 500; display: block;\">Answer</label>\r\n                    <div class=\"control-field \">\r\n                        <textarea style=\"width: 99%;height: 73px;\" [spellcheck]=\"true\" name=\"answer\" [(ngModel)]=\"form.answer\"></textarea>\r\n                    </div>\r\n                </div> -->\r\n\r\n\r\n\r\n              \r\n                  <div class=\"col s12\">\r\n                    <h2>Question</h2>\r\n                    \r\n\r\n                      <app-ngx-editor height=\"100px\" minHeight=\"50px\" [config]=\"editorConfig\"  [placeholder]=\"'Type Here'\" [spellcheck]=\"true\" name=\"question\" [(ngModel)]=\"data.question\"></app-ngx-editor>\r\n                  </div>\r\n                  <div class=\"col s12\">\r\n                    <h2>Answer</h2>\r\n                  \r\n                      <app-ngx-editor height=\"100px\" minHeight=\"50px\" [config]=\"editorConfig\"  [placeholder]=\"'Type Here'\" [spellcheck]=\"true\" name=\"answer\" [(ngModel)]=\"data.answer\"></app-ngx-editor>\r\n                  </div>\r\n               \r\n              </div>\r\n\r\n\r\n            </div>\r\n          </div>\r\n\r\n\r\n        </div>\r\n      </div>\r\n \r\n\r\n      \r\n\r\n      <div class=\"row\">\r\n        <div class=\"col s12\">\r\n          <div class=\"text-right\">\r\n            <!-- <button  type=\"submit\">\r\n           Save\r\n            </button> -->\r\n\r\n\r\n\r\n            <button [ngClass]=\"{'loading': savingFlag == true}\" mat-raised-button color=\"accent\" type=\"submit\"\r\n              [disabled]=\"savingFlag == true\">\r\n              {{(savingFlag == true || faq_id) ? (faq_id ? 'Update' : 'Saving') : 'Save'}}\r\n\r\n            </button>\r\n\r\n\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n</form>\r\n\r\n\r\n</div>\r\n\r\n  \r\n\r\n \r\n</div>\r\n"

/***/ }),

/***/ "./src/app/master/faq-add/faq-add.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/master/faq-add/faq-add.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/master/faq-add/faq-add.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/master/faq-add/faq-add.component.ts ***!
  \*****************************************************/
/*! exports provided: FaqAddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FaqAddComponent", function() { return FaqAddComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_services_DatabaseService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/_services/DatabaseService */ "./src/_services/DatabaseService.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng6-toastr-notifications */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/ng6-toastr-notifications/fesm5/ng6-toastr-notifications.js");





// import { sessionStorage } from '../localstorage.service';
var FaqAddComponent = /** @class */ (function () {
    function FaqAddComponent(service, router, route, toast) {
        this.service = service;
        this.router = router;
        this.route = route;
        this.toast = toast;
        this.panelOpenState = false;
        // toggle:boolean = false;
        this.assign_login_data = {};
        this.users = {};
        this.savingFlag = false;
        this.data = {};
        this.editorConfig = {
            editable: true,
            spellcheck: false,
            height: '10rem',
            minHeight: '5rem',
            placeholder: '',
            translate: 'no',
            "toolbar": [
                ["bold", "italic", "underline", "strikeThrough", "superscript", "subscript"],
                ["fontName", "fontSize", "color"],
                ["justifyLeft", "justifyCenter", "justifyRight", "justifyFull", "indent", "outdent"],
                ["cut", "copy", "delete", "removeFormat", "undo", "redo"],
                ["paragraph", "blockquote", "removeBlockquote", "horizontalLine", "orderedList", "unorderedList"],
            ]
        };
        this.userData = JSON.parse(localStorage.getItem('st_user'));
        this.userId = this.userData['data']['id'];
        this.userName = this.userData['data']['name'];
    }
    FaqAddComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.faq_id = params['id'];
            if (_this.faq_id) {
                _this.faq_data();
            }
        });
    };
    FaqAddComponent.prototype.faq_data = function () {
        var _this = this;
        this.service.post_rqst({ 'id': this.faq_id }, 'Master/faq_Detail').subscribe(function (resp) {
            _this.data = resp['faq_detail'];
        });
    };
    FaqAddComponent.prototype.submitDetail = function () {
        var _this = this;
        this.data.created_by_name = this.userName;
        this.data.created_by = this.userId;
        this.savingFlag = true;
        var header;
        if (this.faq_id) {
            header = this.service.post_rqst(this.data, 'Master/update_faq');
        }
        else {
            header = this.service.post_rqst(this.data, 'Master/save_faq');
        }
        header.subscribe(function (resp) {
            if (resp['statusCode'] == 200) {
                _this.toast.successToastr(resp['statusMsg']);
                _this.savingFlag = false;
                _this.router.navigate(['/faq-list']);
                // this.service.count_list();
            }
            else {
                _this.toast.errorToastr(resp['statusMsg']);
                _this.savingFlag = false;
            }
        }, function (error) {
            _this.toast.errorToastr(error);
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('fileInput'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", Object)
    ], FaqAddComponent.prototype, "fileInput", void 0);
    FaqAddComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-faq-add',
            template: __webpack_require__(/*! ./faq-add.component.html */ "./src/app/master/faq-add/faq-add.component.html"),
            styles: [__webpack_require__(/*! ./faq-add.component.scss */ "./src/app/master/faq-add/faq-add.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_services_DatabaseService__WEBPACK_IMPORTED_MODULE_2__["DatabaseService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_4__["ToastrManager"]])
    ], FaqAddComponent);
    return FaqAddComponent;
}());



/***/ }),

/***/ "./src/app/master/faq-part-list/faq-part-list.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/master/faq-part-list/faq-part-list.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-container\">\r\n  \r\n    <div class=\"tools-container\">\r\n        <h2>Faq List</h2>\r\n        <div class=\"left-auto left-auto df ac flex-gap-10\">\r\n          <!-- <button mat-icon-button matTooltip=\"Refresh\" (click)=\"refresh() \">\r\n            <i class=\"material-icons\">refresh</i>\r\n          </button> -->\r\n        \r\n        </div>\r\n      </div>\r\n\r\n\r\n\r\n  <div class=\"question-field\" *ngFor=\"let row of question_list;let i=index\">\r\n      <mat-accordion>\r\n          <mat-expansion-panel>\r\n              <mat-expansion-panel-header>\r\n                  <mat-panel-title >\r\n                      <div class=\"qdlf\">\r\n                          <img src=\"assets/img/question.png\"> <span>{{i+1}}.</span>\r\n                      </div>\r\n                      <span [innerHTML] = \"row.question\"></span>\r\n                  </mat-panel-title>\r\n                  \r\n                  <button matTooltip=\"Edit\"  [routerLink]=\"[ 'faq-add/', row.id ]\"><i class=\"material-icons\" >edit</i></button>\r\n                  <!-- <button (click)=\"delete_question(row)\"><i class=\"material-icons\" >delete_sweep</i></button> -->\r\n\r\n                  <button mat-icon-button matTooltip=\"Delete\" (click)=\"delete(row.id)\">\r\n                  <i class=\"material-icons del\">delete</i>\r\n                </button>\r\n\r\n\r\n              </mat-expansion-panel-header>\r\n              <div class=\"dfl\">\r\n                  <img src=\"assets/img/ans.png\">\r\n                  <span [innerHTML] = \"row.answer ? row.answer : 'N/A'\"></span>\r\n              </div>\r\n          </mat-expansion-panel>\r\n      </mat-accordion>\r\n  </div>\r\n\r\n\r\n<!-- <div class=\"side-main\" [ngClass] =\"{'on' : toggle == true}\">\r\n  <div class=\"category-field\" >\r\n      <form #f=\"ngForm\" name=\"faq\" (ngSubmit)=\"f.valid && save_faq()\">\r\n          <div class=\"category-hadding\">\r\n              <h2>FAQ</h2>\r\n              <i (click)=\"toggle = false;\" class=\"material-icons\">clear</i>\r\n          </div>\r\n          \r\n          <div class=\"add-image\">\r\n              <div class=\"option-field\">\r\n                  <label class=\"font14\" style=\"font-weight: 500;\">Question</label>\r\n                  <div class=\"control-field\">\r\n                      <textarea height=\"129px\" class=\"h115\" minHieght=\"50px\" [spellcheck]=\"true\" name=\"question\" [(ngModel)]=\"form.question\" required></textarea>\r\n                  </div>\r\n                  \r\n                  <label class=\"font14 mt15\" style=\"font-weight: 500; display: block;\">Answer</label>\r\n                  <div class=\"control-field \">\r\n                      <textarea height=\"129px\" class=\"h115\" minHieght=\"50px\" [spellcheck]=\"true\" name=\"answer\" [(ngModel)]=\"form.answer\"></textarea>\r\n                  </div>\r\n              </div>\r\n              <div class=\"save btn-save mt90\">\r\n                  <button mat-button >SAVE</button>\r\n              </div>\r\n          </div>\r\n      </form>\r\n  </div>\r\n</div> -->\r\n\r\n<!-- <div class=\"fab-btns\" >\r\n  <button mat-fab color=\"primary\" (click)=\"toggle = !toggle\">\r\n      <mat-icon>add</mat-icon>\r\n  </button>\r\n</div> -->\r\n\r\n\r\n<div class=\"fab-btns\">\r\n    <button class=\"pulse\" mat-fab [ngClass]=\"{'pulse': fabBtnValue=='add'}\"  color=\"accent\"  routerLink=\"faq-add\">\r\n        <i class=\"material-icons\">add</i>\r\n        Add New\r\n    </button>\r\n</div>\r\n\r\n\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/master/faq-part-list/faq-part-list.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/master/faq-part-list/faq-part-list.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".qdlf img {\n  width: 35px;\n  height: 35px;\n  padding: 7px;\n}\n\n.qdlf {\n  display: flex;\n  margin-right: 26px;\n}\n\n.qdlf img {\n  margin-right: 10px !important;\n}\n\n.qdlf span {\n  font-weight: 600;\n  font-size: 20px;\n}\n\n.qdlf[_ngcontent-c2] img[_ngcontent-c2] {\n  margin-right: 5px !important;\n  margin-top: -7px;\n}\n\n.question-field {\n  padding: 0px 150px;\n  padding-top: 20px;\n}\n\n.question-field mat-accordion mat-expansion-panel {\n  margin-bottom: 15px;\n  box-shadow: 6px 7px 0px 0px #d4d4d4 !important;\n  background: #fdfdfd;\n}\n\n.question-field mat-accordion mat-expansion-panel mat-expansion-panel-header {\n  height: 89px !important;\n}\n\n.question-field mat-accordion mat-expansion-panel mat-expansion-panel-header span mat-panel-title {\n  font-family: initial;\n  font-size: 18px;\n}\n\n.question-field mat-accordion mat-expansion-panel mat-expansion-panel-header span mat-panel-title img {\n  height: 20px;\n  margin-right: 26px;\n}\n\n.question-field mat-accordion mat-expansion-panel mat-expansion-panel-header span button {\n  margin-right: 25px;\n  border: 0px;\n  background: transparent;\n  cursor: pointer;\n  margin-top: 6px;\n  position: relative;\n}\n\n.question-field mat-accordion mat-expansion-panel mat-expansion-panel-header span button i {\n  font-size: 18px;\n  color: #7c7c7c;\n}\n\n.question-field mat-accordion mat-expansion-panel mat-expansion-panel-header span button:after {\n  position: absolute;\n  top: -3px;\n  right: -12px;\n  height: 30px;\n  width: 1px;\n  content: \"\";\n  background: #c1c1c1;\n}\n\n.question-field mat-accordion mat-expansion-panel .dfl {\n  display: flex;\n}\n\n.question-field mat-accordion mat-expansion-panel .dfl img {\n  height: 15px;\n  margin-right: 10px;\n}"

/***/ }),

/***/ "./src/app/master/faq-part-list/faq-part-list.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/master/faq-part-list/faq-part-list.component.ts ***!
  \*****************************************************************/
/*! exports provided: FaqPartListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FaqPartListComponent", function() { return FaqPartListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_services_DatabaseService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/_services/DatabaseService */ "./src/_services/DatabaseService.ts");
/* harmony import */ var src_app_dialog_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/dialog.component */ "./src/app/dialog.component.ts");
/* harmony import */ var src_app_localstorage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/localstorage.service */ "./src/app/localstorage.service.ts");
/* harmony import */ var ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng6-toastr-notifications */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/ng6-toastr-notifications/fesm5/ng6-toastr-notifications.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/router/fesm5/router.js");


// import { MyserviceService } from 'src/app/myservice.service';





var FaqPartListComponent = /** @class */ (function () {
    function FaqPartListComponent(alert, service, router, toast, session, ses, dialog) {
        this.alert = alert;
        this.service = service;
        this.router = router;
        this.toast = toast;
        this.session = session;
        this.ses = ses;
        this.dialog = dialog;
        this.fabBtnValue = 'add';
        this.loader = false;
        this.question_list = [];
        this.get_questions();
    }
    FaqPartListComponent.prototype.ngOnInit = function () {
    };
    FaqPartListComponent.prototype.refresh = function () {
        this.get_questions();
    };
    FaqPartListComponent.prototype.edit = function (id) {
        this.router.navigate(['/faq-add/' + id]);
    };
    FaqPartListComponent.prototype.get_questions = function () {
        var _this = this;
        this.loader = true;
        this.service.post_rqst({}, "Master/get_question")
            .subscribe(function (resp) {
            console.log(resp);
            _this.loader = false;
            _this.question_list = resp['question_list'];
        });
    };
    FaqPartListComponent.prototype.delete = function (id) {
        var _this = this;
        this.alert.delete('Faq List !').then(function (result) {
            if (result) {
                _this.service.post_rqst({ 'id': id }, "Master/delete_question").subscribe(function (result) {
                    if (result['statusCode'] == 200) {
                        _this.toast.successToastr(result['statusMsg']);
                        _this.get_questions();
                    }
                    else {
                        _this.toast.errorToastr(result['statusMsg']);
                    }
                });
            }
        });
    };
    FaqPartListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-faq-part-list',
            template: __webpack_require__(/*! ./faq-part-list.component.html */ "./src/app/master/faq-part-list/faq-part-list.component.html"),
            styles: [__webpack_require__(/*! ./faq-part-list.component.scss */ "./src/app/master/faq-part-list/faq-part-list.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_dialog_component__WEBPACK_IMPORTED_MODULE_3__["DialogComponent"], src_services_DatabaseService__WEBPACK_IMPORTED_MODULE_2__["DatabaseService"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"], ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_5__["ToastrManager"], src_app_localstorage_service__WEBPACK_IMPORTED_MODULE_4__["sessionStorage"], src_app_localstorage_service__WEBPACK_IMPORTED_MODULE_4__["sessionStorage"], src_app_dialog_component__WEBPACK_IMPORTED_MODULE_3__["DialogComponent"]])
    ], FaqPartListComponent);
    return FaqPartListComponent;
}());



/***/ }),

/***/ "./src/app/master/faq-part-module/faq-part-module.module.ts":
/*!******************************************************************!*\
  !*** ./src/app/master/faq-part-module/faq-part-module.module.ts ***!
  \******************************************************************/
/*! exports provided: FaqPartModuleModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FaqPartModuleModule", function() { return FaqPartModuleModule; });
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
/* harmony import */ var ngx_editor__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-editor */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/ngx-editor/fesm5/ngx-editor.js");
/* harmony import */ var src_app_auth_component_guard__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/auth-component.guard */ "./src/app/auth-component.guard.ts");
/* harmony import */ var _faq_part_list_faq_part_list_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../faq-part-list/faq-part-list.component */ "./src/app/master/faq-part-list/faq-part-list.component.ts");
/* harmony import */ var _faq_add_faq_add_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../faq-add/faq-add.component */ "./src/app/master/faq-add/faq-add.component.ts");













// import { PointCategoryAddComponent } from '../point-category-add/point-category-add.component';
// import { PointCategoryListComponent } from '../point-category-list/point-category-list.component';


var faqRoutes = [
    { path: "", children: [
            { path: "", component: _faq_part_list_faq_part_list_component__WEBPACK_IMPORTED_MODULE_13__["FaqPartListComponent"], canActivate: [src_app_auth_component_guard__WEBPACK_IMPORTED_MODULE_12__["AuthComponentGuard"]], data: { expectedRole: ['1'] } },
            { path: "faq-add", component: _faq_add_faq_add_component__WEBPACK_IMPORTED_MODULE_14__["FaqAddComponent"], canActivate: [src_app_auth_component_guard__WEBPACK_IMPORTED_MODULE_12__["AuthComponentGuard"]], data: { expectedRole: ['1'] } },
            { path: "faq-add/:id", component: _faq_add_faq_add_component__WEBPACK_IMPORTED_MODULE_14__["FaqAddComponent"], canActivate: [src_app_auth_component_guard__WEBPACK_IMPORTED_MODULE_12__["AuthComponentGuard"]], data: { expectedRole: ['1'] } },
        ] }
];
var FaqPartModuleModule = /** @class */ (function () {
    function FaqPartModuleModule() {
        console.log('this is point category module');
    }
    FaqPartModuleModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_faq_part_list_faq_part_list_component__WEBPACK_IMPORTED_MODULE_13__["FaqPartListComponent"], _faq_add_faq_add_component__WEBPACK_IMPORTED_MODULE_14__["FaqAddComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild(faqRoutes),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_7__["NgMultiSelectDropDownModule"],
                src_app_material__WEBPACK_IMPORTED_MODULE_10__["MaterialModule"],
                angular_ng_autocomplete__WEBPACK_IMPORTED_MODULE_6__["AutocompleteLibModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialogModule"],
                ngx_editor__WEBPACK_IMPORTED_MODULE_11__["NgxEditorModule"],
                ngx_mat_select_search__WEBPACK_IMPORTED_MODULE_8__["NgxMatSelectSearchModule"],
                src_app_app_utility_module__WEBPACK_IMPORTED_MODULE_9__["AppUtilityModule"]
            ]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], FaqPartModuleModule);
    return FaqPartModuleModule;
}());



/***/ })

}]);