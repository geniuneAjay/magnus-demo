(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["quiz-question-quiz-question-module-quiz-question-module"],{

/***/ "./src/app/quiz-question/quiz-question-add/quiz-question-add.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/quiz-question/quiz-question-add/quiz-question-add.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-container\">\r\n\r\n  <div class=\"tools-container\">\r\n    <a mat-icon-button matTooltip=\"Back\" routerLink=\"/quiz-question-list\">\r\n      <i class=\"material-icons\">arrow_back</i>\r\n    </a>\r\n    <h2>{{isEdit ? 'Edit Question' : 'Add New Question'}}</h2>\r\n  </div>\r\n\r\n  <!-- Loading existing data -->\r\n  <div *ngIf=\"loader\" class=\"container pt20 text-center\">\r\n    <p>Loading...</p>\r\n  </div>\r\n\r\n  <div class=\"container pt10 pl10 pr10 pb50\" *ngIf=\"!loader\">\r\n    <form #f=\"ngForm\" (ngSubmit)=\"f.valid && submit()\">\r\n\r\n      <div class=\"row\">\r\n        <div class=\"col s12\">\r\n          <div class=\"card pb0\">\r\n            <div class=\"card-head\">\r\n              <h2>Question Details</h2>\r\n            </div>\r\n\r\n            <div class=\"card-body cs-form\">\r\n\r\n              <!-- Question Text -->\r\n              <div class=\"row\">\r\n                <div class=\"col s12\">\r\n                  <mat-form-field appearance=\"outline\" class=\"full-width\">\r\n                    <mat-label>Question *</mat-label>\r\n                    <textarea matInput placeholder=\"Type the quiz question here...\" rows=\"3\"\r\n                      name=\"question\" [(ngModel)]=\"data.question\" #question=\"ngModel\" required></textarea>\r\n                  </mat-form-field>\r\n                  <div class=\"alert alert-danger\" *ngIf=\"(question.touched || f.submitted) && question.errors?.required\">\r\n                    <p>Question is required</p>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n\r\n              <!-- Options A & B -->\r\n              <div class=\"row\">\r\n                <div class=\"col s12 m6\">\r\n                  <mat-form-field appearance=\"outline\" class=\"full-width\">\r\n                    <mat-label>Option A *</mat-label>\r\n                    <input matInput placeholder=\"Option A\" name=\"option_a\"\r\n                      [(ngModel)]=\"data.option_a\" #option_a=\"ngModel\" required>\r\n                  </mat-form-field>\r\n                  <div class=\"alert alert-danger\" *ngIf=\"(option_a.touched || f.submitted) && option_a.errors?.required\">\r\n                    <p>Option A is required</p>\r\n                  </div>\r\n                </div>\r\n                <div class=\"col s12 m6\">\r\n                  <mat-form-field appearance=\"outline\" class=\"full-width\">\r\n                    <mat-label>Option B *</mat-label>\r\n                    <input matInput placeholder=\"Option B\" name=\"option_b\"\r\n                      [(ngModel)]=\"data.option_b\" #option_b=\"ngModel\" required>\r\n                  </mat-form-field>\r\n                  <div class=\"alert alert-danger\" *ngIf=\"(option_b.touched || f.submitted) && option_b.errors?.required\">\r\n                    <p>Option B is required</p>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n\r\n              <!-- Options C & D -->\r\n              <div class=\"row\">\r\n                <div class=\"col s12 m6\">\r\n                  <mat-form-field appearance=\"outline\" class=\"full-width\">\r\n                    <mat-label>Option C *</mat-label>\r\n                    <input matInput placeholder=\"Option C\" name=\"option_c\"\r\n                      [(ngModel)]=\"data.option_c\" #option_c=\"ngModel\" required>\r\n                  </mat-form-field>\r\n                  <div class=\"alert alert-danger\" *ngIf=\"(option_c.touched || f.submitted) && option_c.errors?.required\">\r\n                    <p>Option C is required</p>\r\n                  </div>\r\n                </div>\r\n                <div class=\"col s12 m6\">\r\n                  <mat-form-field appearance=\"outline\" class=\"full-width\">\r\n                    <mat-label>Option D *</mat-label>\r\n                    <input matInput placeholder=\"Option D\" name=\"option_d\"\r\n                      [(ngModel)]=\"data.option_d\" #option_d=\"ngModel\" required>\r\n                  </mat-form-field>\r\n                  <div class=\"alert alert-danger\" *ngIf=\"(option_d.touched || f.submitted) && option_d.errors?.required\">\r\n                    <p>Option D is required</p>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n\r\n              <!-- Correct Option + Category + Active -->\r\n              <div class=\"row\">\r\n                <div class=\"col s12 m4\">\r\n                  <mat-form-field appearance=\"outline\" class=\"full-width\">\r\n                    <mat-label>Correct Answer *</mat-label>\r\n                    <mat-select name=\"correct_option\" [(ngModel)]=\"data.correct_option\"\r\n                      #correct_option=\"ngModel\" required>\r\n                      <mat-option *ngFor=\"let o of correctOptions\" [value]=\"o.value\">\r\n                        {{o.label}}\r\n                      </mat-option>\r\n                    </mat-select>\r\n                  </mat-form-field>\r\n                  <div class=\"alert alert-danger\" *ngIf=\"(correct_option.touched || f.submitted) && correct_option.errors?.required\">\r\n                    <p>Please select the correct answer</p>\r\n                  </div>\r\n                </div>\r\n                <div class=\"col s12 m4\">\r\n                  <mat-form-field appearance=\"outline\" class=\"full-width\">\r\n                    <mat-label>Category</mat-label>\r\n                    <input matInput placeholder=\"e.g. Product Knowledge, Standards...\" name=\"category\"\r\n                      [(ngModel)]=\"data.category\">\r\n                  </mat-form-field>\r\n                </div>\r\n                <div class=\"col s12 m4\">\r\n                  <mat-form-field appearance=\"outline\" class=\"full-width\">\r\n                    <mat-label>Status</mat-label>\r\n                    <mat-select name=\"is_active\" [(ngModel)]=\"data.is_active\">\r\n                      <mat-option [value]=\"1\">Active</mat-option>\r\n                      <mat-option [value]=\"0\">Inactive</mat-option>\r\n                    </mat-select>\r\n                  </mat-form-field>\r\n                </div>\r\n              </div>\r\n\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <!-- Preview box -->\r\n      <div class=\"row\" *ngIf=\"data.question || data.option_a\">\r\n        <div class=\"col s12\">\r\n          <div class=\"card\">\r\n            <div class=\"card-head\"><h2>Preview</h2></div>\r\n            <div class=\"card-body\" style=\"padding:16px\">\r\n              <p style=\"font-weight:600; margin-bottom:12px\">{{data.question}}</p>\r\n              <p *ngIf=\"data.option_a\"><b>A.</b> {{data.option_a}}\r\n                <span *ngIf=\"data.correct_option === 'a'\" style=\"color:green; font-weight:700\"> ✓ Correct</span>\r\n              </p>\r\n              <p *ngIf=\"data.option_b\"><b>B.</b> {{data.option_b}}\r\n                <span *ngIf=\"data.correct_option === 'b'\" style=\"color:green; font-weight:700\"> ✓ Correct</span>\r\n              </p>\r\n              <p *ngIf=\"data.option_c\"><b>C.</b> {{data.option_c}}\r\n                <span *ngIf=\"data.correct_option === 'c'\" style=\"color:green; font-weight:700\"> ✓ Correct</span>\r\n              </p>\r\n              <p *ngIf=\"data.option_d\"><b>D.</b> {{data.option_d}}\r\n                <span *ngIf=\"data.correct_option === 'd'\" style=\"color:green; font-weight:700\"> ✓ Correct</span>\r\n              </p>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <!-- Submit -->\r\n      <div class=\"row\">\r\n        <div class=\"col s12 text-right\">\r\n          <button mat-button type=\"button\" routerLink=\"/quiz-question-list\" style=\"margin-right:8px\">Cancel</button>\r\n          <button mat-raised-button color=\"accent\" type=\"submit\"\r\n            [disabled]=\"savingFlag\" [ngClass]=\"{'loading': savingFlag}\">\r\n            {{savingFlag ? 'Saving...' : (isEdit ? 'Update Question' : 'Add Question')}}\r\n          </button>\r\n        </div>\r\n      </div>\r\n\r\n    </form>\r\n  </div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/quiz-question/quiz-question-add/quiz-question-add.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/quiz-question/quiz-question-add/quiz-question-add.component.ts ***!
  \********************************************************************************/
/*! exports provided: QuizQuestionAddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuizQuestionAddComponent", function() { return QuizQuestionAddComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng6-toastr-notifications */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/ng6-toastr-notifications/fesm5/ng6-toastr-notifications.js");
/* harmony import */ var src_app_localstorage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/localstorage.service */ "./src/app/localstorage.service.ts");
/* harmony import */ var src_services_DatabaseService__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/_services/DatabaseService */ "./src/_services/DatabaseService.ts");






var QuizQuestionAddComponent = /** @class */ (function () {
    function QuizQuestionAddComponent(service, session, router, route, toast) {
        this.service = service;
        this.session = session;
        this.router = router;
        this.route = route;
        this.toast = toast;
        this.editId = null;
        this.isEdit = false;
        this.savingFlag = false;
        this.loader = false;
        this.data = {
            question: '',
            option_a: '',
            option_b: '',
            option_c: '',
            option_d: '',
            correct_option: '',
            category: 'General',
            is_active: 1,
        };
        this.correctOptions = [
            { value: 'a', label: 'Option A' },
            { value: 'b', label: 'Option B' },
            { value: 'c', label: 'Option C' },
            { value: 'd', label: 'Option D' },
        ];
        this.userData = JSON.parse(localStorage.getItem('st_user'));
    }
    QuizQuestionAddComponent.prototype.ngOnInit = function () {
        this.editId = this.route.snapshot.params['id'];
        if (this.editId) {
            this.isEdit = true;
            this.loadDetail();
        }
    };
    QuizQuestionAddComponent.prototype.loadDetail = function () {
        var _this = this;
        this.loader = true;
        this.service.post_rqst({ id: this.editId }, 'QuizQuestion/questionDetail').subscribe(function (resp) {
            _this.loader = false;
            if (resp['statusCode'] == 200) {
                var r = resp['result'];
                _this.data = {
                    question: r.question,
                    option_a: r.option_a,
                    option_b: r.option_b,
                    option_c: r.option_c,
                    option_d: r.option_d,
                    correct_option: r.correct_option,
                    category: r.category,
                    is_active: r.is_active,
                };
            }
            else {
                _this.toast.errorToastr(resp['statusMsg']);
                _this.router.navigate(['/quiz-question-list']);
            }
        }, function () { _this.loader = false; });
    };
    QuizQuestionAddComponent.prototype.submit = function () {
        var _this = this;
        this.savingFlag = true;
        var payload = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, this.data, { created_by: this.userData['data']['id'] });
        if (this.isEdit) {
            payload.id = this.editId;
            this.service.post_rqst(payload, 'QuizQuestion/updateQuestion').subscribe(function (resp) {
                _this.savingFlag = false;
                if (resp['statusCode'] == 200) {
                    _this.toast.successToastr(resp['statusMsg']);
                    _this.router.navigate(['/quiz-question-list']);
                }
                else {
                    _this.toast.errorToastr(resp['statusMsg']);
                }
            }, function () { _this.savingFlag = false; });
        }
        else {
            this.service.post_rqst(payload, 'QuizQuestion/addQuestion').subscribe(function (resp) {
                _this.savingFlag = false;
                if (resp['statusCode'] == 200) {
                    _this.toast.successToastr(resp['statusMsg']);
                    _this.router.navigate(['/quiz-question-list']);
                }
                else {
                    _this.toast.errorToastr(resp['statusMsg']);
                }
            }, function () { _this.savingFlag = false; });
        }
    };
    QuizQuestionAddComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-quiz-question-add',
            template: __webpack_require__(/*! ./quiz-question-add.component.html */ "./src/app/quiz-question/quiz-question-add/quiz-question-add.component.html"),
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_services_DatabaseService__WEBPACK_IMPORTED_MODULE_5__["DatabaseService"],
            src_app_localstorage_service__WEBPACK_IMPORTED_MODULE_4__["sessionStorage"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_3__["ToastrManager"]])
    ], QuizQuestionAddComponent);
    return QuizQuestionAddComponent;
}());



/***/ }),

/***/ "./src/app/quiz-question/quiz-question-list/quiz-question-list.component.html":
/*!************************************************************************************!*\
  !*** ./src/app/quiz-question/quiz-question-list/quiz-question-list.component.html ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-container\">\r\n\r\n  <!-- Toolbar -->\r\n  <div class=\"tools-container\">\r\n    <h2>Quiz Questions</h2>\r\n    <div class=\"left-auto left-auto df ac flex-gap-10\">\r\n\r\n      <button mat-icon-button matTooltip=\"Refresh\" (click)=\"refresh()\">\r\n        <i class=\"material-icons\">refresh</i>\r\n      </button>\r\n\r\n      <!-- Pagination -->\r\n      <div class=\"pagination\" *ngIf=\"questionList.length > 0\">\r\n        <div class=\"pagination-content\">\r\n          Pages <span>{{pagenumber}}</span> of <span>{{total_page}}</span>\r\n        </div>\r\n        <div class=\"page-nav\">\r\n          <button mat-icon-button matTooltip=\"Previous\" (click)=\"previous()\" [disabled]=\"start == 0\">\r\n            <i class=\"material-icons\">navigate_before</i>\r\n          </button>\r\n          <button mat-icon-button matTooltip=\"Next\" (click)=\"nextPage()\" [disabled]=\"pagenumber == total_page\">\r\n            <i class=\"material-icons\">navigate_next</i>\r\n          </button>\r\n        </div>\r\n      </div>\r\n\r\n      <!-- Status tabs -->\r\n      <div class=\"mat-tabbar\">\r\n        <button mat-button [ngClass]=\"active_tab == 'active' ? 'active' : ''\" (click)=\"switchTab('active')\">\r\n          <i class=\"material-icons\">toggle_on</i>Active ({{tabCount.active}})\r\n        </button>\r\n        <button mat-button [ngClass]=\"active_tab == 'inactive' ? 'active' : ''\" (click)=\"switchTab('inactive')\">\r\n          <i class=\"material-icons\">toggle_off</i>Inactive ({{tabCount.inactive}})\r\n        </button>\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n\r\n  <!-- Table -->\r\n  <div class=\"container pb100\">\r\n    <div class=\"cs-table\">\r\n\r\n      <!-- Header + Filter -->\r\n      <div class=\"sticky-head\">\r\n        <div class=\"table-head\">\r\n          <table>\r\n            <tr>\r\n              <th class=\"w60\">Sr.</th>\r\n              <th>Question</th>\r\n              <th class=\"w120\">Category</th>\r\n              <th class=\"w100\">Correct Ans</th>\r\n              <th class=\"w80 text-center\">Status</th>\r\n              <th class=\"w100 text-center\">Actions</th>\r\n            </tr>\r\n          </table>\r\n        </div>\r\n        <div class=\"table-head border-top\">\r\n          <table>\r\n            <tr>\r\n              <th class=\"w60\">&nbsp;</th>\r\n              <th>\r\n                <div class=\"th-search-acmt\">\r\n                  <mat-form-field class=\"example-full-width cs-input select-input\">\r\n                    <input matInput placeholder=\"Search question...\" [(ngModel)]=\"filter.question\" (keyup.enter)=\"getList()\">\r\n                  </mat-form-field>\r\n                </div>\r\n              </th>\r\n              <th class=\"w120\">\r\n                <div class=\"th-search-acmt\">\r\n                  <mat-form-field class=\"example-full-width cs-input select-input\">\r\n                    <input matInput placeholder=\"Category...\" [(ngModel)]=\"filter.category\" (keyup.enter)=\"getList()\">\r\n                  </mat-form-field>\r\n                </div>\r\n              </th>\r\n              <th class=\"w100\">&nbsp;</th>\r\n              <th class=\"w80\">&nbsp;</th>\r\n              <th class=\"w100\">&nbsp;</th>\r\n            </tr>\r\n          </table>\r\n        </div>\r\n      </div>\r\n\r\n      <!-- Body -->\r\n      <div class=\"table-container\">\r\n        <div class=\"table-body\" *ngIf=\"!loader\">\r\n          <table>\r\n            <tr *ngFor=\"let row of questionList; let i = index\">\r\n              <td class=\"w60\">{{sr_no + i + 1}}</td>\r\n              <td style=\"max-width:320px; word-break:break-word\">{{row.question}}</td>\r\n              <td class=\"w120\">{{row.category}}</td>\r\n              <td class=\"w100\">{{correctLabel(row.correct_option)}}</td>\r\n              <td class=\"w80 text-center\">\r\n                <button mat-button class=\"status-btn\"\r\n                  [ngClass]=\"row.is_active == 1 ? 'active-status' : 'inactive-status'\"\r\n                  (click)=\"change_status(row.id, i)\">\r\n                  {{row.is_active == 1 ? 'Active' : 'Inactive'}}\r\n                </button>\r\n              </td>\r\n              <td class=\"w100 text-center\">\r\n                <a mat-icon-button matTooltip=\"Edit\" [routerLink]=\"['quiz-edit', row.id]\">\r\n                  <i class=\"material-icons\" style=\"color:#1E88E5\">edit</i>\r\n                </a>\r\n                <button mat-icon-button matTooltip=\"Delete\" (click)=\"delete(row.id)\">\r\n                  <i class=\"material-icons\" style=\"color:#E53935\">delete</i>\r\n                </button>\r\n              </td>\r\n            </tr>\r\n          </table>\r\n\r\n          <!-- No data -->\r\n          <div class=\"no-data-container\" *ngIf=\"noResult && !loader\">\r\n            <i class=\"material-icons\">quiz</i>\r\n            <p>No questions found</p>\r\n          </div>\r\n        </div>\r\n\r\n        <!-- Skeleton loader -->\r\n        <div *ngIf=\"loader\">\r\n          <div class=\"skeleton\" *ngFor=\"let x of [].constructor(8)\">&nbsp;</div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <!-- FAB Add button -->\r\n  <div class=\"fab-btns\">\r\n    <button mat-fab color=\"accent\" routerLink=\"quiz-add\" matTooltip=\"Add Question\">\r\n      <i class=\"material-icons\">add</i>\r\n    </button>\r\n  </div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/quiz-question/quiz-question-list/quiz-question-list.component.ts":
/*!**********************************************************************************!*\
  !*** ./src/app/quiz-question/quiz-question-list/quiz-question-list.component.ts ***!
  \**********************************************************************************/
/*! exports provided: QuizQuestionListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuizQuestionListComponent", function() { return QuizQuestionListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng6-toastr-notifications */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/ng6-toastr-notifications/fesm5/ng6-toastr-notifications.js");
/* harmony import */ var src_app_dialog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/dialog.component */ "./src/app/dialog.component.ts");
/* harmony import */ var src_app_localstorage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/localstorage.service */ "./src/app/localstorage.service.ts");
/* harmony import */ var src_services_DatabaseService__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/_services/DatabaseService */ "./src/_services/DatabaseService.ts");







var QuizQuestionListComponent = /** @class */ (function () {
    function QuizQuestionListComponent(service, toast, alert, session, router) {
        this.service = service;
        this.toast = toast;
        this.alert = alert;
        this.session = session;
        this.router = router;
        this.active_tab = 'active';
        this.filter = {};
        this.loader = false;
        this.noResult = false;
        this.questionList = [];
        this.tabCount = { active: 0, inactive: 0 };
        this.pageCount = 0;
        this.total_page = 0;
        this.pagenumber = 1;
        this.start = 0;
        this.sr_no = 0;
        this.page_limit = service.pageLimit;
        this.userData = JSON.parse(localStorage.getItem('st_user'));
        this.userId = this.userData['data']['id'];
    }
    QuizQuestionListComponent.prototype.ngOnInit = function () {
        this.getList();
    };
    QuizQuestionListComponent.prototype.getList = function () {
        var _this = this;
        this.loader = true;
        this.noResult = false;
        if (this.start < 0)
            this.start = 0;
        this.service.post_rqst({
            filter: this.filter,
            start: this.start,
            pagelimit: this.page_limit,
            status: this.active_tab,
        }, 'QuizQuestion/questionList').subscribe(function (resp) {
            _this.loader = false;
            if (resp['data']['statusCode'] == 200) {
                _this.questionList = resp['data']['result'];
                _this.tabCount = resp['data']['tabCount'];
                _this.pageCount = resp['data']['count'];
                _this.total_page = Math.ceil(_this.pageCount / _this.page_limit);
                _this.pagenumber = Math.ceil(_this.start / _this.page_limit) + 1;
                _this.sr_no = (_this.pagenumber - 1) * _this.page_limit;
                if (_this.questionList.length === 0)
                    _this.noResult = true;
            }
            else {
                _this.toast.errorToastr(resp['data']['statusMsg']);
            }
        }, function () { _this.loader = false; });
    };
    QuizQuestionListComponent.prototype.previous = function () { this.start = Math.max(0, this.start - this.page_limit); this.getList(); };
    QuizQuestionListComponent.prototype.nextPage = function () { this.start = this.start + this.page_limit; this.getList(); };
    QuizQuestionListComponent.prototype.refresh = function () { this.filter = {}; this.start = 0; this.getList(); };
    QuizQuestionListComponent.prototype.switchTab = function (tab) { this.active_tab = tab; this.start = 0; this.getList(); };
    QuizQuestionListComponent.prototype.change_status = function (id, index) {
        var _this = this;
        this.alert.confirm('Change question status?').then(function (ok) {
            if (!ok)
                return;
            var newStatus = _this.questionList[index].is_active == 1 ? 0 : 1;
            _this.service.post_rqst({ id: id, is_active: newStatus }, 'QuizQuestion/questionStatusUpdate').subscribe(function (resp) {
                if (resp['statusCode'] == 200) {
                    _this.questionList[index].is_active = newStatus;
                    _this.toast.successToastr(resp['statusMsg']);
                    _this.getList();
                }
                else {
                    _this.toast.errorToastr(resp['statusMsg']);
                }
            });
        });
    };
    QuizQuestionListComponent.prototype.delete = function (id) {
        var _this = this;
        this.alert.confirm('Delete this question permanently?').then(function (ok) {
            if (!ok)
                return;
            _this.service.post_rqst({ id: id }, 'QuizQuestion/deleteQuestion').subscribe(function (resp) {
                if (resp['statusCode'] == 200) {
                    _this.toast.successToastr('Question deleted');
                    _this.getList();
                }
                else {
                    _this.toast.errorToastr(resp['statusMsg']);
                }
            });
        });
    };
    QuizQuestionListComponent.prototype.correctLabel = function (opt) {
        var map = { a: 'Option A', b: 'Option B', c: 'Option C', d: 'Option D' };
        return map[opt] || opt;
    };
    QuizQuestionListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-quiz-question-list',
            template: __webpack_require__(/*! ./quiz-question-list.component.html */ "./src/app/quiz-question/quiz-question-list/quiz-question-list.component.html"),
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_services_DatabaseService__WEBPACK_IMPORTED_MODULE_6__["DatabaseService"],
            ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_3__["ToastrManager"],
            src_app_dialog_component__WEBPACK_IMPORTED_MODULE_4__["DialogComponent"],
            src_app_localstorage_service__WEBPACK_IMPORTED_MODULE_5__["sessionStorage"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], QuizQuestionListComponent);
    return QuizQuestionListComponent;
}());



/***/ }),

/***/ "./src/app/quiz-question/quiz-question-module/quiz-question.module.ts":
/*!****************************************************************************!*\
  !*** ./src/app/quiz-question/quiz-question-module/quiz-question.module.ts ***!
  \****************************************************************************/
/*! exports provided: QuizQuestionModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuizQuestionModule", function() { return QuizQuestionModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_app_utility_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/app-utility.module */ "./src/app/app-utility.module.ts");
/* harmony import */ var src_app_auth_component_guard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/auth-component.guard */ "./src/app/auth-component.guard.ts");
/* harmony import */ var src_app_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/material */ "./src/app/material.ts");
/* harmony import */ var _quiz_question_list_quiz_question_list_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../quiz-question-list/quiz-question-list.component */ "./src/app/quiz-question/quiz-question-list/quiz-question-list.component.ts");
/* harmony import */ var _quiz_question_add_quiz_question_add_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../quiz-question-add/quiz-question-add.component */ "./src/app/quiz-question/quiz-question-add/quiz-question-add.component.ts");











var routes = [
    {
        path: '', children: [
            { path: '', component: _quiz_question_list_quiz_question_list_component__WEBPACK_IMPORTED_MODULE_9__["QuizQuestionListComponent"], canActivate: [src_app_auth_component_guard__WEBPACK_IMPORTED_MODULE_7__["AuthComponentGuard"]], data: { expectedRole: ['1'] } },
            { path: 'quiz-add', component: _quiz_question_add_quiz_question_add_component__WEBPACK_IMPORTED_MODULE_10__["QuizQuestionAddComponent"], canActivate: [src_app_auth_component_guard__WEBPACK_IMPORTED_MODULE_7__["AuthComponentGuard"]], data: { expectedRole: ['1'] } },
            { path: 'quiz-edit/:id', component: _quiz_question_add_quiz_question_add_component__WEBPACK_IMPORTED_MODULE_10__["QuizQuestionAddComponent"], canActivate: [src_app_auth_component_guard__WEBPACK_IMPORTED_MODULE_7__["AuthComponentGuard"]], data: { expectedRole: ['1'] } },
        ]
    }
];
var QuizQuestionModule = /** @class */ (function () {
    function QuizQuestionModule() {
    }
    QuizQuestionModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_quiz_question_list_quiz_question_list_component__WEBPACK_IMPORTED_MODULE_9__["QuizQuestionListComponent"], _quiz_question_add_quiz_question_add_component__WEBPACK_IMPORTED_MODULE_10__["QuizQuestionAddComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild(routes),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                src_app_material__WEBPACK_IMPORTED_MODULE_8__["MaterialModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialogModule"],
                src_app_app_utility_module__WEBPACK_IMPORTED_MODULE_6__["AppUtilityModule"],
            ]
        })
    ], QuizQuestionModule);
    return QuizQuestionModule;
}());



/***/ })

}]);