(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["patrol-patrol-module"],{

/***/ "./src/app/patrol/checkpoint-list/checkpoint-list.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/patrol/checkpoint-list/checkpoint-list.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-container\">\r\n  <div class=\"tools-container\">\r\n    <h2>Checkpoints</h2>\r\n    <div class=\"left-auto left-auto df ac flex-gap-5\">\r\n\r\n      <button mat-raised-button color=\"primary\" (click)=\"openAdd()\">\r\n        <i class=\"material-icons\">add</i> Add Checkpoint\r\n      </button>\r\n\r\n      <button mat-stroked-button (click)=\"openAllQr()\" matTooltip=\"Print all QR codes\" [disabled]=\"loadingAllQr\">\r\n        <i class=\"material-icons\">{{ loadingAllQr ? 'hourglass_empty' : 'print' }}</i>\r\n        {{ loadingAllQr ? 'Loading...' : 'Print All QR' }}\r\n      </button>\r\n\r\n      <button mat-stroked-button (click)=\"goToGuardRoute()\" matTooltip=\"Assign Guard Routes\">\r\n        <i class=\"material-icons\">alt_route</i> Guard Route\r\n      </button>\r\n\r\n      <button mat-stroked-button (click)=\"goToRounds()\" matTooltip=\"Patrol Rounds\">\r\n        <i class=\"material-icons\">history</i> Rounds\r\n      </button>\r\n\r\n      <!-- TEMP bulk generate buttons — commented out after use\r\n      <button mat-stroked-button (click)=\"bulkGenerate('HSP', 30)\" [disabled]=\"bulkGenerating\" style=\"border-color:#5c35d4;color:#5c35d4;\">\r\n        <i class=\"material-icons\">burst_mode</i> Gen HSP-001→030\r\n      </button>\r\n      <button mat-stroked-button (click)=\"bulkGenerate('KN', 30)\" [disabled]=\"bulkGenerating\" style=\"border-color:#e53935;color:#e53935;\">\r\n        <i class=\"material-icons\">burst_mode</i> Gen KN-001→030\r\n      </button>\r\n      <span *ngIf=\"bulkGenerating\" style=\"font-size:12px;color:#888;\">{{bulkProgress}}</span>\r\n      -->\r\n\r\n      <button mat-icon-button matTooltip=\"Refresh\" (click)=\"refresh()\">\r\n        <i class=\"material-icons\">refresh</i>\r\n      </button>\r\n\r\n      <div class=\"pagination\" *ngIf=\"checkpoints.length > 0\">\r\n        <div class=\"pagination-content\">\r\n          Pages <span>{{pagenumber}}</span> of <span>{{total_page}}</span>\r\n        </div>\r\n        <div class=\"page-nav\">\r\n          <button mat-icon-button matTooltip=\"Previous\" (click)=\"previous()\" [disabled]=\"start == 0\">\r\n            <i class=\"material-icons\">navigate_before</i>\r\n          </button>\r\n          <button mat-icon-button matTooltip=\"Next\" (click)=\"nextPage()\" [disabled]=\"pagenumber == total_page\">\r\n            <i class=\"material-icons\">navigate_next</i>\r\n          </button>\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n\r\n  <!-- Add / Edit Form -->\r\n  <div class=\"row\" *ngIf=\"showForm\">\r\n    <div class=\"col s12\">\r\n      <div class=\"card pb0 cp-form-card\">\r\n        <div class=\"card-head\">\r\n          <h2>{{ editMode ? 'Edit Checkpoint' : 'Add Checkpoint' }}</h2>\r\n          <button mat-icon-button class=\"cp-close-btn\" (click)=\"cancelForm()\" matTooltip=\"Close\">\r\n            <i class=\"material-icons\">close</i>\r\n          </button>\r\n        </div>\r\n        <div class=\"card-body cs-form\">\r\n          <div class=\"row\">\r\n\r\n            <!-- Code -->\r\n            <div class=\"col s12 m4 l4\">\r\n              <mat-form-field appearance=\"outline\">\r\n                <mat-label>Checkpoint Code</mat-label>\r\n                <input matInput placeholder=\"e.g. GATE-A, ENTRY-1, ROOM-101\"\r\n                       name=\"cp_code\" [(ngModel)]=\"form.code\"\r\n                       [readonly]=\"editMode\" [required]=\"!editMode\"\r\n                       [ngClass]=\"{'has-error': formSubmitted && !editMode && !form.code}\">\r\n              </mat-form-field>\r\n              <div class=\"cp-help\" *ngIf=\"!editMode\">Short, unique code — letters, numbers, hyphens. No spaces.</div>\r\n              <div class=\"cp-help\" *ngIf=\"editMode\">Code is permanent and cannot be changed</div>\r\n              <div class=\"alert alert-danger\" *ngIf=\"formSubmitted && !editMode && !form.code\">\r\n                <p>Code is required</p>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"col s12 m4 l4\">\r\n              <mat-form-field appearance=\"outline\">\r\n                <mat-label>Name</mat-label>\r\n                <input matInput placeholder=\"Type Here ...\" name=\"cp_name\" #cp_name=\"ngModel\"\r\n                       [(ngModel)]=\"form.name\" required\r\n                       [ngClass]=\"{'has-error': formSubmitted && !form.name }\">\r\n              </mat-form-field>\r\n              <div class=\"alert alert-danger\" *ngIf=\"formSubmitted && !form.name\">\r\n                <p>This field is required</p>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"col s12 m4 l4\">\r\n              <mat-form-field appearance=\"outline\">\r\n                <mat-label>Location</mat-label>\r\n                <input matInput placeholder=\"Type Here ...\" name=\"cp_location\" [(ngModel)]=\"form.location\">\r\n              </mat-form-field>\r\n            </div>\r\n\r\n          </div>\r\n\r\n          <div class=\"row\">\r\n            <div class=\"col s12\">\r\n              <div class=\"text-right cp-form-actions\">\r\n                <button mat-button type=\"button\" (click)=\"cancelForm()\">Cancel</button>\r\n                <button mat-raised-button color=\"accent\" type=\"button\" (click)=\"saveCheckpoint()\" [disabled]=\"saving\"\r\n                        [ngClass]=\"{'loading': saving}\">\r\n                  {{ saving ? 'Please Wait' : (editMode ? 'Update' : 'Add Checkpoint') }}\r\n                </button>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"container container-scroll\">\r\n    <div class=\"cs-table horizontal-scroll\">\r\n\r\n      <div class=\"sticky-head\">\r\n        <div class=\"table-head\">\r\n          <table>\r\n            <tr>\r\n              <th class=\"w50\">S.No</th>\r\n              <th class=\"w120\">Code</th>\r\n              <th class=\"w200\">Name</th>\r\n              <th class=\"w220\">Location</th>\r\n              <th class=\"w90 text-center\">QR Code</th>\r\n              <th class=\"w120 text-center\">Actions</th>\r\n            </tr>\r\n          </table>\r\n        </div>\r\n\r\n        <div class=\"table-head border-top\">\r\n          <table>\r\n            <tr>\r\n              <th class=\"w50\">&nbsp;</th>\r\n              <th class=\"w120\">&nbsp;</th>\r\n              <th class=\"w200 pt0 pb0\">\r\n                <div class=\"th-search-acmt\">\r\n                  <mat-form-field class=\"example-full-width cs-input\">\r\n                    <input matInput placeholder=\"Search code, name, location...\" [(ngModel)]=\"search\" (keyup.enter)=\"onSearch()\">\r\n                  </mat-form-field>\r\n                </div>\r\n              </th>\r\n              <th class=\"w220\">&nbsp;</th>\r\n              <th class=\"w90\">&nbsp;</th>\r\n              <th class=\"w120\">&nbsp;</th>\r\n            </tr>\r\n          </table>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"table-container\">\r\n        <div class=\"table-content\">\r\n          <table>\r\n            <ng-container *ngIf=\"!isLoading\">\r\n              <tr *ngFor=\"let cp of checkpoints; let i = index\">\r\n                <td class=\"w50\">{{sr_no + i + 1}}</td>\r\n                <td class=\"w120\">\r\n                  <span class=\"cp-code-chip\">{{cp.code}}</span>\r\n                </td>\r\n                <td class=\"w200\"><strong>{{cp.name}}</strong></td>\r\n                <td class=\"w220\">{{cp.location || '---'}}</td>\r\n                <td class=\"w90 text-center\">\r\n                  <div class=\"cp-qr-thumb\" (click)=\"openQrModal(cp)\" matTooltip=\"View / Print QR\">\r\n                    <ngx-qrcode [elementType]=\"elementType\" [value]=\"cp.code\" cssClass=\"cp-qr-thumb-img\" errorCorrectionLevel=\"L\"></ngx-qrcode>\r\n                  </div>\r\n                </td>\r\n                <td class=\"w120 text-center\">\r\n                  <button mat-icon-button matTooltip=\"View QR\" (click)=\"openQrModal(cp)\" class=\"qr-btn\">\r\n                    <i class=\"material-icons\">qr_code_2</i>\r\n                  </button>\r\n                  <button mat-icon-button matTooltip=\"Edit\" (click)=\"openEdit(cp)\" class=\"edit-btn\">\r\n                    <i class=\"material-icons\">edit</i>\r\n                  </button>\r\n                  <button mat-icon-button matTooltip=\"Delete\" (click)=\"deleteCheckpoint(cp.id)\" class=\"del-btn\">\r\n                    <i class=\"material-icons\">delete</i>\r\n                  </button>\r\n                </td>\r\n              </tr>\r\n            </ng-container>\r\n\r\n            <ng-container *ngFor=\"let sk of skelton\">\r\n              <tr class=\"sk-loading\" *ngIf=\"isLoading\">\r\n                <td class=\"w50\"><div>&nbsp;</div></td>\r\n                <td class=\"w120\"><div>&nbsp;</div></td>\r\n                <td class=\"w200\"><div>&nbsp;</div></td>\r\n                <td class=\"w220\"><div>&nbsp;</div></td>\r\n                <td class=\"w90\"><div>&nbsp;</div></td>\r\n                <td class=\"w120\"><div>&nbsp;</div></td>\r\n              </tr>\r\n            </ng-container>\r\n          </table>\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n\r\n    <ng-container *ngIf=\"checkpoints.length === 0 && datanotfound\">\r\n      <app-not-result-found></app-not-result-found>\r\n    </ng-container>\r\n  </div>\r\n\r\n</div>\r\n\r\n<!-- ============= Single QR Modal ============= -->\r\n<div class=\"cp-qr-modal-backdrop\" *ngIf=\"showQrModal\" (click)=\"closeQrModal()\">\r\n  <div class=\"cp-qr-modal\" (click)=\"$event.stopPropagation()\">\r\n    <div class=\"cp-qr-modal-head no-print\">\r\n      <h3>Checkpoint QR Code</h3>\r\n      <button mat-icon-button (click)=\"closeQrModal()\">\r\n        <i class=\"material-icons\">close</i>\r\n      </button>\r\n    </div>\r\n\r\n    <div class=\"cp-qr-print-area\" id=\"cpQrPrintArea\" *ngIf=\"qrCheckpoint\">\r\n      <div class=\"cp-qr-card\">\r\n        <h2 class=\"cp-qr-title\">{{qrCheckpoint.name}}</h2>\r\n        <p class=\"cp-qr-location\" *ngIf=\"qrCheckpoint.location\">\r\n          <i class=\"material-icons\">place</i>{{qrCheckpoint.location}}\r\n        </p>\r\n        <div class=\"cp-qr-big\">\r\n          <ngx-qrcode [elementType]=\"elementType\" [value]=\"qrCheckpoint.code\" cssClass=\"cp-qr-big-img\" errorCorrectionLevel=\"M\"></ngx-qrcode>\r\n        </div>\r\n        <div class=\"cp-qr-code-text\">{{qrCheckpoint.code}}</div>\r\n        <p class=\"cp-qr-hint\">Scan this QR code to mark patrol checkpoint</p>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"cp-qr-modal-actions no-print\">\r\n      <button mat-button (click)=\"closeQrModal()\">Close</button>\r\n      <button mat-raised-button color=\"primary\" (click)=\"printQr()\">\r\n        <i class=\"material-icons\">print</i> Print\r\n      </button>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<!-- ============= Print All QR ============= -->\r\n<div class=\"cp-qr-modal-backdrop\" *ngIf=\"showAllQr\" (click)=\"closeAllQr()\">\r\n  <div class=\"cp-qr-modal cp-qr-modal-wide\" (click)=\"$event.stopPropagation()\">\r\n    <div class=\"cp-qr-modal-head no-print\">\r\n      <h3>Print All QR Codes ({{allCheckpointsForPrint.length}}){{search ? ' — Filter: \"' + search + '\"' : ''}}</h3>\r\n      <button mat-icon-button (click)=\"closeAllQr()\">\r\n        <i class=\"material-icons\">close</i>\r\n      </button>\r\n    </div>\r\n\r\n    <div class=\"cp-qr-print-area cp-qr-grid\" id=\"cpQrGridArea\">\r\n      <div class=\"cp-qr-card cp-qr-grid-item\" *ngFor=\"let cp of allCheckpointsForPrint\">\r\n        <h3 class=\"cp-qr-title\">{{cp.name}}</h3>\r\n        <p class=\"cp-qr-location\" *ngIf=\"cp.location\">\r\n          <i class=\"material-icons\">place</i>{{cp.location}}\r\n        </p>\r\n        <div class=\"cp-qr-medium\">\r\n          <ngx-qrcode [elementType]=\"elementType\" [value]=\"cp.code\" cssClass=\"cp-qr-medium-img\" errorCorrectionLevel=\"M\"></ngx-qrcode>\r\n        </div>\r\n        <div class=\"cp-qr-code-text\">{{cp.code}}</div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"cp-qr-modal-actions no-print\">\r\n      <button mat-button (click)=\"closeAllQr()\">Close</button>\r\n      <button mat-raised-button color=\"primary\" (click)=\"printQr()\">\r\n        <i class=\"material-icons\">print</i> Print All\r\n      </button>\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/patrol/checkpoint-list/checkpoint-list.component.scss":
/*!***********************************************************************!*\
  !*** ./src/app/patrol/checkpoint-list/checkpoint-list.component.scss ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".cp-form-card {\n  margin: 0 0 16px;\n  border-left: 4px solid #5c35d4;\n  position: relative;\n}\n.cp-form-card .card-head {\n  display: flex;\n  align-items: center;\n}\n.cp-form-card .card-head h2 {\n  flex: 1;\n}\n.cp-close-btn {\n  margin-left: auto;\n}\n.cp-help {\n  font-size: 11px;\n  color: #888;\n  margin-top: -10px;\n  padding-left: 2px;\n}\n.cp-auto-code {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  background: #f4f0ff;\n  border: 1px dashed #b9a4f5;\n  border-radius: 6px;\n  padding: 12px 14px;\n  height: 56px;\n}\n.cp-auto-code i {\n  color: #5c35d4;\n  font-size: 30px;\n}\n.cp-auto-code strong {\n  display: block;\n  font-size: 13px;\n  color: #5c35d4;\n}\n.cp-auto-code p {\n  margin: 2px 0 0;\n  font-size: 11px;\n  color: #888;\n  font-family: monospace;\n}\n.cp-form-actions {\n  display: flex;\n  justify-content: flex-end;\n  gap: 10px;\n  padding-top: 8px;\n  border-top: 1px solid #f0f0f0;\n}\n.cp-code-chip {\n  display: inline-block;\n  background: #ede9ff;\n  color: #5c35d4;\n  font-family: monospace;\n  font-size: 12px;\n  font-weight: 600;\n  padding: 3px 8px;\n  border-radius: 6px;\n  letter-spacing: 0.5px;\n}\n.edit-btn i {\n  color: #2196f3;\n  font-size: 18px;\n}\n.del-btn i {\n  color: #e53935;\n  font-size: 18px;\n}\n.qr-btn i {\n  color: #5c35d4;\n  font-size: 20px;\n}\n.cp-qr-thumb {\n  display: inline-block;\n  width: 44px;\n  height: 44px;\n  padding: 3px;\n  background: #fff;\n  border: 1px solid #e0e0e0;\n  border-radius: 6px;\n  cursor: pointer;\n  transition: transform 0.15s, border-color 0.15s;\n}\n.cp-qr-thumb:hover {\n  transform: scale(1.5);\n  border-color: #5c35d4;\n  box-shadow: 0 4px 12px rgba(92, 53, 212, 0.3);\n  position: relative;\n  z-index: 10;\n}\n.cp-qr-thumb ::ng-deep img,\n.cp-qr-thumb ::ng-deep canvas {\n  width: 100% !important;\n  height: 100% !important;\n  display: block;\n}\n.cp-qr-modal-backdrop {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.55);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  z-index: 1500;\n  padding: 20px;\n}\n.cp-qr-modal {\n  background: #fff;\n  border-radius: 12px;\n  width: 100%;\n  max-width: 420px;\n  max-height: 92vh;\n  display: flex;\n  flex-direction: column;\n  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.3);\n  overflow: hidden;\n}\n.cp-qr-modal.cp-qr-modal-wide {\n  max-width: 1100px;\n}\n.cp-qr-modal-head {\n  display: flex;\n  align-items: center;\n  padding: 14px 18px;\n  border-bottom: 1px solid #eee;\n  background: #f8f7ff;\n}\n.cp-qr-modal-head h3 {\n  flex: 1;\n  margin: 0;\n  font-size: 16px;\n  color: #333;\n}\n.cp-qr-print-area {\n  flex: 1;\n  overflow-y: auto;\n  padding: 24px;\n  background: #fafafa;\n}\n.cp-qr-card {\n  background: #fff;\n  border: 2px solid #5c35d4;\n  border-radius: 12px;\n  padding: 22px 18px;\n  text-align: center;\n  max-width: 320px;\n  margin: 0 auto;\n}\n.cp-qr-title {\n  font-size: 18px;\n  font-weight: 700;\n  color: #222;\n  margin: 0 0 6px;\n}\n.cp-qr-location {\n  font-size: 12px;\n  color: #777;\n  margin: 0 0 14px;\n  display: inline-flex;\n  align-items: center;\n  gap: 3px;\n}\n.cp-qr-location i {\n  font-size: 13px;\n  color: #5c35d4;\n}\n.cp-qr-big {\n  margin: 14px auto 12px;\n  padding: 8px;\n  background: #fff;\n  border: 1px solid #eee;\n  border-radius: 8px;\n  display: inline-block;\n}\n.cp-qr-big ::ng-deep img,\n.cp-qr-big ::ng-deep canvas {\n  width: 220px !important;\n  height: 220px !important;\n  display: block;\n}\n.cp-qr-medium {\n  margin: 10px auto 8px;\n}\n.cp-qr-medium ::ng-deep img,\n.cp-qr-medium ::ng-deep canvas {\n  width: 140px !important;\n  height: 140px !important;\n  display: block;\n  margin: 0 auto;\n}\n.cp-qr-code-text {\n  font-family: monospace;\n  font-size: 16px;\n  font-weight: 700;\n  letter-spacing: 1.5px;\n  color: #5c35d4;\n  background: #ede9ff;\n  padding: 6px 14px;\n  border-radius: 6px;\n  display: inline-block;\n  margin-top: 6px;\n}\n.cp-qr-hint {\n  font-size: 11px;\n  color: #999;\n  margin: 12px 0 0;\n}\n.cp-qr-modal-actions {\n  display: flex;\n  justify-content: flex-end;\n  gap: 10px;\n  padding: 12px 18px;\n  border-top: 1px solid #eee;\n  background: #fff;\n}\n.cp-qr-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));\n  gap: 16px;\n}\n.cp-qr-grid-item {\n  max-width: none;\n  padding: 14px 12px;\n}\n.cp-qr-grid-item .cp-qr-title {\n  font-size: 14px;\n}\n.cp-qr-grid-item .cp-qr-code-text {\n  font-size: 13px;\n  padding: 4px 10px;\n}"

/***/ }),

/***/ "./src/app/patrol/checkpoint-list/checkpoint-list.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/patrol/checkpoint-list/checkpoint-list.component.ts ***!
  \*********************************************************************/
/*! exports provided: CheckpointListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CheckpointListComponent", function() { return CheckpointListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_services_DatabaseService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/_services/DatabaseService */ "./src/_services/DatabaseService.ts");
/* harmony import */ var ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng6-toastr-notifications */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/ng6-toastr-notifications/fesm5/ng6-toastr-notifications.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/router/fesm5/router.js");





var CheckpointListComponent = /** @class */ (function () {
    function CheckpointListComponent(serve, toast, router) {
        this.serve = serve;
        this.toast = toast;
        this.router = router;
        this.checkpoints = [];
        this.isLoading = false;
        this.datanotfound = false;
        this.skelton = Array(8).fill({});
        this.search = '';
        this.start = 0;
        this.pagenumber = 1;
        this.total_page = 1;
        this.sr_no = 0;
        // Add / Edit form
        this.showForm = false;
        this.editMode = false;
        this.saving = false;
        this.form = { id: 0, code: '', name: '', location: '' };
        this.formSubmitted = false;
        // QR
        this.elementType = 'url';
        this.showQrModal = false;
        this.qrCheckpoint = null;
        this.showAllQr = false;
        this.allCheckpointsForPrint = [];
        this.loadingAllQr = false;
        // ===== TEMP bulk generator =====
        this.bulkGenerating = false;
        this.bulkProgress = '';
        this.page_limit = this.serve.pageLimit;
    }
    CheckpointListComponent.prototype.ngOnInit = function () { this.getList(); };
    CheckpointListComponent.prototype.getList = function () {
        var _this = this;
        this.isLoading = true;
        this.datanotfound = false;
        if (this.start < 0)
            this.start = 0;
        this.serve.post_rqst({ search: this.search, start: this.start, pagelimit: this.page_limit }, 'Patrol/getCheckpointList').subscribe(function (result) {
            _this.isLoading = false;
            if (result['statusCode'] == 200) {
                _this.checkpoints = result['result'] || [];
                var count = result['count'] || _this.checkpoints.length;
                _this.total_page = Math.ceil(count / _this.page_limit) || 1;
                _this.pagenumber = Math.ceil(_this.start / _this.page_limit) + 1;
                _this.sr_no = (_this.pagenumber - 1) * _this.page_limit;
                _this.datanotfound = _this.checkpoints.length === 0;
            }
            else {
                _this.datanotfound = true;
            }
        }, function () { _this.isLoading = false; _this.datanotfound = true; });
    };
    CheckpointListComponent.prototype.onSearch = function () { this.start = 0; this.getList(); };
    CheckpointListComponent.prototype.clearSearch = function () { this.search = ''; this.start = 0; this.getList(); };
    CheckpointListComponent.prototype.refresh = function () { this.search = ''; this.start = 0; this.getList(); };
    CheckpointListComponent.prototype.previous = function () { this.start -= this.page_limit; this.getList(); };
    CheckpointListComponent.prototype.nextPage = function () { this.start += this.page_limit; this.getList(); };
    CheckpointListComponent.prototype.openAdd = function () {
        this.editMode = false;
        this.form = { id: 0, code: '', name: '', location: '' };
        this.formSubmitted = false;
        this.showForm = true;
    };
    CheckpointListComponent.prototype.openEdit = function (cp) {
        this.editMode = true;
        this.form = { id: cp.id, code: cp.code, name: cp.name, location: cp.location || '' };
        this.formSubmitted = false;
        this.showForm = true;
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    CheckpointListComponent.prototype.cancelForm = function () {
        this.showForm = false;
        this.formSubmitted = false;
    };
    CheckpointListComponent.prototype.saveCheckpoint = function () {
        var _this = this;
        this.formSubmitted = true;
        if (!this.form.name || !this.form.name.trim()) {
            this.toast.warningToastr('Name is required');
            return;
        }
        if (!this.editMode && (!this.form.code || !this.form.code.trim())) {
            this.toast.warningToastr('Code is required');
            return;
        }
        this.saving = true;
        var endpoint = this.editMode ? 'Patrol/editCheckpoint' : 'Patrol/addCheckpoint';
        var payload = {
            name: this.form.name,
            location: this.form.location,
        };
        if (!this.editMode)
            payload.code = this.form.code.trim().toUpperCase().replace(/\s+/g, '-');
        if (this.editMode)
            payload.id = this.form.id;
        this.serve.post_rqst(payload, endpoint).subscribe(function (result) {
            _this.saving = false;
            if (result['statusCode'] == 200) {
                var msg = _this.editMode ? 'Checkpoint updated' :
                    ('Checkpoint added — Code: ' + (result['code'] || ''));
                _this.toast.successToastr(msg);
                _this.showForm = false;
                _this.formSubmitted = false;
                _this.getList();
            }
            else {
                _this.toast.errorToastr(result['statusMsg'] || 'Failed');
            }
        }, function () { _this.saving = false; _this.toast.errorToastr('Request failed'); });
    };
    CheckpointListComponent.prototype.deleteCheckpoint = function (id) {
        var _this = this;
        if (!confirm('Delete this checkpoint?'))
            return;
        this.serve.post_rqst({ id: id }, 'Patrol/deleteCheckpoint').subscribe(function (result) {
            if (result['statusCode'] == 200) {
                _this.toast.successToastr('Checkpoint deleted');
                _this.getList();
            }
            else {
                _this.toast.errorToastr(result['statusMsg'] || 'Failed');
            }
        });
    };
    CheckpointListComponent.prototype.bulkGenerate = function (prefix, count) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var success, failed, i, code, result, e_1;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!confirm("Generate " + count + " checkpoints: " + prefix + "-001 to " + prefix + "-" + String(count).padStart(3, '0') + "?"))
                            return [2 /*return*/];
                        this.bulkGenerating = true;
                        success = 0, failed = 0;
                        i = 1;
                        _a.label = 1;
                    case 1:
                        if (!(i <= count)) return [3 /*break*/, 6];
                        code = prefix + '-' + String(i).padStart(3, '0');
                        this.bulkProgress = i + "/" + count + " \u2014 " + code;
                        _a.label = 2;
                    case 2:
                        _a.trys.push([2, 4, , 5]);
                        return [4 /*yield*/, this.serve.post_rqst({ code: code, name: code, location: '' }, 'Patrol/addCheckpoint').toPromise()];
                    case 3:
                        result = _a.sent();
                        result['statusCode'] == 200 ? success++ : failed++;
                        return [3 /*break*/, 5];
                    case 4:
                        e_1 = _a.sent();
                        failed++;
                        return [3 /*break*/, 5];
                    case 5:
                        i++;
                        return [3 /*break*/, 1];
                    case 6:
                        this.bulkGenerating = false;
                        this.bulkProgress = '';
                        this.toast.successToastr("Done! " + success + " added" + (failed ? ', ' + failed + ' skipped/failed' : ''));
                        this.getList();
                        return [2 /*return*/];
                }
            });
        });
    };
    // ===== END TEMP =====
    CheckpointListComponent.prototype.goToGuardRoute = function () { this.router.navigate(['/patrol/guard-route']); };
    CheckpointListComponent.prototype.goToRounds = function () { this.router.navigate(['/patrol/rounds']); };
    // ===== QR Code =====
    CheckpointListComponent.prototype.openQrModal = function (cp) {
        this.qrCheckpoint = cp;
        this.showQrModal = true;
    };
    CheckpointListComponent.prototype.closeQrModal = function () {
        this.showQrModal = false;
        this.qrCheckpoint = null;
    };
    CheckpointListComponent.prototype.openAllQr = function () {
        var _this = this;
        this.loadingAllQr = true;
        this.serve.post_rqst({ search: this.search, start: 0, pagelimit: 9999 }, 'Patrol/getCheckpointList').subscribe(function (result) {
            _this.loadingAllQr = false;
            var all = (result['statusCode'] == 200) ? (result['result'] || []) : [];
            if (!all.length) {
                _this.toast.warningToastr('No checkpoints to print');
                return;
            }
            _this.allCheckpointsForPrint = all;
            _this.showAllQr = true;
        }, function () { _this.loadingAllQr = false; _this.toast.errorToastr('Failed to load checkpoints'); });
    };
    CheckpointListComponent.prototype.closeAllQr = function () { this.showAllQr = false; };
    CheckpointListComponent.prototype.printQr = function () {
        var isAll = this.showAllQr;
        var items = isAll
            ? this.allCheckpointsForPrint
            : (this.qrCheckpoint ? [this.qrCheckpoint] : []);
        if (!items.length)
            return;
        // Collect QR canvas/img data from existing rendered ngx-qrcode elements
        var sourceId = isAll ? 'cpQrGridArea' : 'cpQrPrintArea';
        var sourceEl = document.getElementById(sourceId);
        if (!sourceEl)
            return;
        var cardEls = sourceEl.querySelectorAll('.cp-qr-card');
        var cardsHtml = [];
        cardEls.forEach(function (card) {
            var img = card.querySelector('img');
            var canvas = card.querySelector('canvas');
            var imgSrc = '';
            if (img && img.src)
                imgSrc = img.src;
            else if (canvas) {
                try {
                    imgSrc = canvas.toDataURL('image/png');
                }
                catch (e) {
                    imgSrc = '';
                }
            }
            var titleEl = card.querySelector('.cp-qr-title');
            var locEl = card.querySelector('.cp-qr-location');
            var codeEl = card.querySelector('.cp-qr-code-text');
            var title = titleEl ? titleEl.textContent.trim() : '';
            var loc = locEl ? locEl.textContent.trim() : '';
            var code = codeEl ? codeEl.textContent.trim() : '';
            cardsHtml.push("\n                <div class=\"qr-card\">\n                    <div class=\"qr-title\">" + title + "</div>\n                    " + (loc ? "<div class=\"qr-loc\">" + loc + "</div>" : '') + "\n                    <div class=\"qr-img-wrap\">\n                        " + (imgSrc ? "<img src=\"" + imgSrc + "\" />" : '') + "\n                    </div>\n                    <div class=\"qr-code\">" + code + "</div>\n                    <div class=\"qr-hint\">Scan to mark patrol checkpoint</div>\n                </div>\n            ");
        });
        var css = "\n            * { box-sizing: border-box; }\n            body { font-family: Arial, Helvetica, sans-serif; margin: 0; padding: 12mm; background: #fff; color: #222; }\n            .qr-grid {\n                display: grid;\n                grid-template-columns: " + (isAll ? 'repeat(2, 1fr)' : '1fr') + ";\n                gap: 8mm;\n                max-width: 100%;\n            }\n            .qr-card {\n                border: 2px solid #5c35d4;\n                border-radius: 10px;\n                padding: 14px 12px;\n                text-align: center;\n                page-break-inside: avoid;\n                background: #fff;\n            }\n            .qr-title {\n                font-size: 18px;\n                font-weight: 700;\n                color: #222;\n                margin-bottom: 4px;\n            }\n            .qr-loc {\n                font-size: 11px;\n                color: #777;\n                margin-bottom: 10px;\n            }\n            .qr-img-wrap {\n                margin: 8px auto;\n                display: flex;\n                justify-content: center;\n            }\n            .qr-img-wrap img {\n                width: " + (isAll ? '160px' : '240px') + ";\n                height: " + (isAll ? '160px' : '240px') + ";\n                display: block;\n            }\n            .qr-code {\n                font-family: 'Courier New', monospace;\n                font-size: " + (isAll ? '14px' : '18px') + ";\n                font-weight: 700;\n                letter-spacing: 1.5px;\n                color: #5c35d4;\n                background: #ede9ff;\n                padding: 5px 12px;\n                border-radius: 6px;\n                display: inline-block;\n                margin-top: 6px;\n            }\n            .qr-hint {\n                font-size: 10px;\n                color: #999;\n                margin-top: 8px;\n            }\n            @page { margin: 10mm; }\n            @media print {\n                body { padding: 0; }\n            }\n        ";
        var html = "\n            <!DOCTYPE html>\n            <html>\n            <head>\n                <title>Print QR Codes</title>\n                <meta charset=\"utf-8\">\n                <style>" + css + "</style>\n            </head>\n            <body>\n                <div class=\"qr-grid\">\n                    " + cardsHtml.join('') + "\n                </div>\n                <script>\n                    window.onload = function() {\n                        setTimeout(function() {\n                            window.print();\n                            window.onafterprint = function() { window.close(); };\n                        }, 250);\n                    };\n                </script>\n            </body>\n            </html>\n        ";
        var win = window.open('', '_blank', 'width=900,height=700');
        if (!win) {
            this.toast.warningToastr('Please allow pop-ups to print');
            return;
        }
        win.document.open();
        win.document.write(html);
        win.document.close();
    };
    CheckpointListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-checkpoint-list',
            template: __webpack_require__(/*! ./checkpoint-list.component.html */ "./src/app/patrol/checkpoint-list/checkpoint-list.component.html"),
            styles: [__webpack_require__(/*! ./checkpoint-list.component.scss */ "./src/app/patrol/checkpoint-list/checkpoint-list.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_services_DatabaseService__WEBPACK_IMPORTED_MODULE_2__["DatabaseService"],
            ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_3__["ToastrManager"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], CheckpointListComponent);
    return CheckpointListComponent;
}());



/***/ }),

/***/ "./src/app/patrol/guard-route/guard-route.component.html":
/*!***************************************************************!*\
  !*** ./src/app/patrol/guard-route/guard-route.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-container\">\r\n  <div class=\"tools-container\">\r\n    <h2>Guard Route Assignment</h2>\r\n    <div class=\"left-auto df ac flex-gap-5\">\r\n      <div class=\"mat-tabbar\">\r\n        <button mat-button [ngClass]=\"activePlant === '' ? 'active' : ''\" (click)=\"changePlant('')\">All Plants</button>\r\n        <button mat-button [ngClass]=\"activePlant === 'Hosiarpur' ? 'active' : ''\" (click)=\"changePlant('Hosiarpur')\">Hosiarpur</button>\r\n        <button mat-button [ngClass]=\"activePlant === 'Chamarajanagar' ? 'active' : ''\" (click)=\"changePlant('Chamarajanagar')\">Chamarajanagar</button>\r\n      </div>\r\n      <button mat-stroked-button (click)=\"goToCheckpoints()\">\r\n        <i class=\"material-icons\">place</i> Checkpoints\r\n      </button>\r\n      <button mat-stroked-button (click)=\"goToRouteTemplates()\">\r\n        <i class=\"material-icons\">route</i> Route Templates\r\n      </button>\r\n      <button mat-stroked-button (click)=\"goToRounds()\">\r\n        <i class=\"material-icons\">history</i> Rounds\r\n      </button>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"container pt10 pl10 pr10 pb50\">\r\n\r\n    <!-- Guard Selector -->\r\n    <div class=\"row\">\r\n      <div class=\"col s12\">\r\n        <div class=\"card pb0 gr-select-card\">\r\n          <div class=\"card-head\">\r\n            <h2><i class=\"material-icons\">security</i> Select Guard</h2>\r\n          </div>\r\n          <div class=\"card-body cs-form\">\r\n            <div class=\"row\">\r\n              <div class=\"col s12 m6 l4\">\r\n                <mat-form-field appearance=\"outline\">\r\n                  <mat-label>Guard</mat-label>\r\n                  <mat-select [(ngModel)]=\"selectedGuardId\" (selectionChange)=\"onGuardChange()\">\r\n                    <mat-option [value]=\"0\">-- Select Guard --</mat-option>\r\n                    <mat-option *ngFor=\"let g of guards\" [value]=\"g.id\">\r\n                      {{g.name}} ({{g.employee_id || g.id}})\r\n                    </mat-option>\r\n                  </mat-select>\r\n                </mat-form-field>\r\n              </div>\r\n              <div class=\"col s12 m6 l4\">\r\n                <mat-form-field appearance=\"outline\">\r\n                  <mat-label>Load from Route Template</mat-label>\r\n                  <mat-select [(ngModel)]=\"selectedTemplateId\">\r\n                    <mat-option [value]=\"0\">-- None --</mat-option>\r\n                    <mat-option *ngFor=\"let r of routeTemplates\" [value]=\"r.id\">\r\n                      {{r.name}} ({{r.checkpoint_count}} checkpoints)\r\n                    </mat-option>\r\n                  </mat-select>\r\n                </mat-form-field>\r\n              </div>\r\n              <div class=\"col s12 m12 l4\" style=\"display:flex;align-items:center;padding-top:4px;\">\r\n                <button mat-raised-button color=\"primary\" (click)=\"applyTemplate()\" [disabled]=\"!selectedTemplateId || !selectedGuardId\">\r\n                  <i class=\"material-icons\">download</i> Apply Template\r\n                </button>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <!-- Loading -->\r\n    <div class=\"row\" *ngIf=\"loadingRoute\">\r\n      <div class=\"col s12\">\r\n        <div class=\"gr-loading\">\r\n          <mat-spinner diameter=\"36\"></mat-spinner>\r\n          <span>Loading route...</span>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <!-- Route Editor -->\r\n    <ng-container *ngIf=\"selectedGuardId && !loadingRoute && assignments.length > 0\">\r\n\r\n      <div class=\"row\">\r\n\r\n        <!-- Assigned Route (left) -->\r\n        <div class=\"col s12 m6 l6\">\r\n          <div class=\"card gr-panel-card\">\r\n            <div class=\"card-head\">\r\n              <h2>\r\n                <i class=\"material-icons assigned-icon\">check_circle</i>\r\n                Assigned Route\r\n                <span class=\"gr-count assigned-count\">{{assignedRows.length}}</span>\r\n              </h2>\r\n            </div>\r\n            <div class=\"card-body p0\">\r\n              <div class=\"gr-list\">\r\n                <div *ngIf=\"assignedRows.length === 0\" class=\"gr-empty\">\r\n                  <i class=\"material-icons\">info</i>\r\n                  <p>No checkpoints assigned</p>\r\n                  <span>Add from \"Available Checkpoints\" panel</span>\r\n                </div>\r\n                <div class=\"gr-row assigned-row\" *ngFor=\"let row of assignedRows; let i = index\">\r\n                  <div class=\"gr-seq-num\">{{row.sequence_no}}</div>\r\n                  <div class=\"gr-row-info\">\r\n                    <strong>{{row.name}}</strong>\r\n                    <div class=\"gr-row-meta\">\r\n                      <span class=\"gr-code\">{{row.code}}</span>\r\n                      <span *ngIf=\"row.location\" class=\"gr-loc\">\r\n                        <i class=\"material-icons\">place</i>{{row.location}}\r\n                      </span>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"gr-row-actions\">\r\n                    <button mat-icon-button (click)=\"moveUp(i)\" [disabled]=\"i === 0\" matTooltip=\"Move Up\">\r\n                      <i class=\"material-icons\">arrow_upward</i>\r\n                    </button>\r\n                    <button mat-icon-button (click)=\"moveDown(i)\" [disabled]=\"i === assignedRows.length - 1\" matTooltip=\"Move Down\">\r\n                      <i class=\"material-icons\">arrow_downward</i>\r\n                    </button>\r\n                    <button mat-icon-button (click)=\"toggleAssign(row)\" matTooltip=\"Remove\" class=\"del-btn\">\r\n                      <i class=\"material-icons\">remove_circle_outline</i>\r\n                    </button>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"gr-save-area\">\r\n              <button mat-raised-button color=\"accent\" (click)=\"saveRoute()\" [disabled]=\"saving\"\r\n                      [ngClass]=\"{'loading': saving}\">\r\n                <i class=\"material-icons\">save</i>\r\n                {{ saving ? 'Please Wait' : 'Save Route' }}\r\n              </button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <!-- Available Checkpoints (right) -->\r\n        <div class=\"col s12 m6 l6\">\r\n          <div class=\"card gr-panel-card\">\r\n            <div class=\"card-head\">\r\n              <h2>\r\n                <i class=\"material-icons available-icon\">radio_button_unchecked</i>\r\n                Available Checkpoints\r\n                <span class=\"gr-count available-count\">{{unassignedRows.length}}</span>\r\n              </h2>\r\n            </div>\r\n            <div class=\"card-body p0\">\r\n              <div class=\"gr-list\">\r\n                <div *ngIf=\"unassignedRows.length === 0\" class=\"gr-empty\">\r\n                  <i class=\"material-icons\">done_all</i>\r\n                  <p>All checkpoints assigned</p>\r\n                </div>\r\n                <div class=\"gr-row unassigned-row\" *ngFor=\"let row of unassignedRows\">\r\n                  <div class=\"gr-row-info\">\r\n                    <strong>{{row.name}}</strong>\r\n                    <div class=\"gr-row-meta\">\r\n                      <span class=\"gr-code\">{{row.code}}</span>\r\n                      <span *ngIf=\"row.location\" class=\"gr-loc\">\r\n                        <i class=\"material-icons\">place</i>{{row.location}}\r\n                      </span>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"gr-row-actions\">\r\n                    <button mat-stroked-button color=\"primary\" (click)=\"toggleAssign(row)\" matTooltip=\"Add to Route\" class=\"add-btn\">\r\n                      <i class=\"material-icons\">add</i> Add\r\n                    </button>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n      </div>\r\n\r\n    </ng-container>\r\n\r\n    <!-- No guard selected -->\r\n    <div class=\"row\" *ngIf=\"!selectedGuardId && !loadingRoute\">\r\n      <div class=\"col s12\">\r\n        <div class=\"gr-placeholder\">\r\n          <i class=\"material-icons\">person_search</i>\r\n          <h3>Select a Guard</h3>\r\n          <p>Choose a guard from the dropdown above to view and edit their patrol route</p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/patrol/guard-route/guard-route.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/patrol/guard-route/guard-route.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".gr-select-card {\n  margin-bottom: 16px;\n}\n.gr-select-card .card-head h2 {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.gr-select-card .card-head h2 i {\n  color: #5c35d4;\n  font-size: 22px;\n}\n.gr-loading {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 14px;\n  padding: 40px 0;\n  color: #888;\n  font-size: 14px;\n}\n.gr-panel-card {\n  margin-bottom: 16px;\n  overflow: hidden;\n  display: flex;\n  flex-direction: column;\n}\n.gr-panel-card .card-head {\n  background: #faf8ff;\n  border-bottom: 1px solid #ece6ff;\n}\n.gr-panel-card .card-head h2 {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 15px;\n  font-weight: 600;\n  margin: 0;\n}\n.gr-panel-card .card-head h2 i {\n  font-size: 20px;\n}\n.gr-panel-card .card-head h2 i.assigned-icon {\n  color: #4caf50;\n}\n.gr-panel-card .card-head h2 i.available-icon {\n  color: #9e9e9e;\n}\n.gr-panel-card .card-body {\n  padding: 0 !important;\n}\n.gr-panel-card .p0 {\n  padding: 0 !important;\n}\n.gr-count {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  min-width: 22px;\n  height: 22px;\n  color: #fff;\n  font-size: 11px;\n  font-weight: 700;\n  border-radius: 11px;\n  padding: 0 7px;\n  margin-left: 4px;\n}\n.gr-count.assigned-count {\n  background: #4caf50;\n}\n.gr-count.available-count {\n  background: #9e9e9e;\n}\n.gr-list {\n  min-height: 100px;\n  max-height: 460px;\n  overflow-y: auto;\n  /* Custom scrollbar */\n}\n.gr-list::-webkit-scrollbar {\n  width: 6px;\n}\n.gr-list::-webkit-scrollbar-track {\n  background: #f5f5f5;\n}\n.gr-list::-webkit-scrollbar-thumb {\n  background: #d6cdf2;\n  border-radius: 3px;\n}\n.gr-list::-webkit-scrollbar-thumb:hover {\n  background: #b9a4f5;\n}\n.gr-empty {\n  text-align: center;\n  padding: 40px 20px;\n  color: #aaa;\n}\n.gr-empty i {\n  font-size: 48px;\n  opacity: 0.5;\n  display: block;\n  margin-bottom: 8px;\n}\n.gr-empty p {\n  margin: 0;\n  font-size: 14px;\n  font-weight: 500;\n}\n.gr-empty span {\n  display: block;\n  margin-top: 4px;\n  font-size: 12px;\n  color: #bbb;\n}\n.gr-row {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 12px 16px;\n  border-bottom: 1px solid #f5f5f5;\n  transition: background 0.15s;\n}\n.gr-row:last-child {\n  border-bottom: none;\n}\n.gr-row:hover {\n  background: #fafafa;\n}\n.gr-row.assigned-row {\n  background: #f4f0ff;\n}\n.gr-row.assigned-row:hover {\n  background: #ebe4ff;\n}\n.gr-seq-num {\n  width: 30px;\n  height: 30px;\n  background: #5c35d4;\n  color: #fff;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 12px;\n  font-weight: 700;\n  flex-shrink: 0;\n  box-shadow: 0 2px 4px rgba(92, 53, 212, 0.25);\n}\n.gr-row-info {\n  flex: 1;\n  min-width: 0;\n  overflow: hidden;\n}\n.gr-row-info strong {\n  display: block;\n  font-size: 14px;\n  color: #222;\n  font-weight: 600;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  margin-bottom: 4px;\n}\n.gr-row-meta {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  flex-wrap: wrap;\n}\n.gr-code {\n  font-size: 11px;\n  font-family: monospace;\n  color: #5c35d4;\n  background: #ede9ff;\n  padding: 2px 7px;\n  border-radius: 4px;\n  font-weight: 600;\n  letter-spacing: 0.5px;\n}\n.gr-loc {\n  font-size: 11px;\n  color: #888;\n  display: inline-flex;\n  align-items: center;\n  gap: 2px;\n  max-width: 180px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.gr-loc i {\n  font-size: 12px;\n  color: #aaa;\n  flex-shrink: 0;\n}\n.gr-row-actions {\n  flex-shrink: 0;\n  display: flex;\n  gap: 2px;\n  align-items: center;\n}\n.gr-row-actions button {\n  min-width: 0;\n}\n.del-btn i {\n  color: #e53935;\n}\n.add-btn {\n  line-height: 28px !important;\n  padding: 0 12px !important;\n  min-width: 64px !important;\n}\n.add-btn i {\n  font-size: 16px;\n  vertical-align: middle;\n  margin-right: 2px;\n}\n.gr-save-area {\n  padding: 14px 16px;\n  border-top: 1px solid #ece6ff;\n  background: #faf8ff;\n  text-align: right;\n}\n.gr-save-area button i {\n  font-size: 16px;\n  vertical-align: middle;\n  margin-right: 4px;\n}\n.gr-placeholder {\n  text-align: center;\n  padding: 80px 20px;\n  color: #bbb;\n}\n.gr-placeholder i {\n  font-size: 80px;\n  opacity: 0.5;\n  display: block;\n  margin-bottom: 16px;\n}\n.gr-placeholder h3 {\n  font-size: 18px;\n  color: #888;\n  margin: 0 0 6px;\n}\n.gr-placeholder p {\n  font-size: 13px;\n  margin: 0;\n  color: #aaa;\n}"

/***/ }),

/***/ "./src/app/patrol/guard-route/guard-route.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/patrol/guard-route/guard-route.component.ts ***!
  \*************************************************************/
/*! exports provided: GuardRouteComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GuardRouteComponent", function() { return GuardRouteComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_services_DatabaseService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/_services/DatabaseService */ "./src/_services/DatabaseService.ts");
/* harmony import */ var ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng6-toastr-notifications */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/ng6-toastr-notifications/fesm5/ng6-toastr-notifications.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/router/fesm5/router.js");





var GuardRouteComponent = /** @class */ (function () {
    function GuardRouteComponent(serve, toast, router) {
        this.serve = serve;
        this.toast = toast;
        this.router = router;
        this.guards = [];
        this.allCheckpoints = [];
        this.assignments = [];
        this.routeTemplates = [];
        this.selectedGuardId = 0;
        this.selectedTemplateId = 0;
        this.activePlant = '';
        this.loadingGuards = false;
        this.loadingRoute = false;
        this.loadingTemplates = false;
        this.saving = false;
    }
    GuardRouteComponent.prototype.ngOnInit = function () { this.loadGuards(); this.loadTemplates(); };
    GuardRouteComponent.prototype.loadTemplates = function () {
        var _this = this;
        this.loadingTemplates = true;
        this.serve.post_rqst({}, 'Patrol/getRouteTemplateList').subscribe(function (result) {
            _this.loadingTemplates = false;
            if (result['statusCode'] == 200)
                _this.routeTemplates = result['result'] || [];
        }, function () { _this.loadingTemplates = false; });
    };
    GuardRouteComponent.prototype.applyTemplate = function () {
        var _this = this;
        if (!this.selectedTemplateId) {
            this.toast.warningToastr('Select a route template');
            return;
        }
        this.serve.post_rqst({ id: this.selectedTemplateId }, 'Patrol/getRouteTemplateDetail').subscribe(function (result) {
            if (result['statusCode'] == 200) {
                var all = result['all_checkpoints'] || [];
                var assigned_1 = result['assigned'] || [];
                _this.assignments = all.map(function (cp) {
                    var found = assigned_1.find(function (a) { return a.checkpoint_id == cp.id; });
                    return {
                        checkpoint_id: cp.id, code: cp.code, name: cp.name,
                        location: cp.location || '', assigned: !!found,
                        sequence_no: found ? found.sequence_no : null,
                    };
                });
                _this.assignments.sort(function (a, b) {
                    if (a.assigned && !b.assigned)
                        return -1;
                    if (!a.assigned && b.assigned)
                        return 1;
                    if (a.assigned && b.assigned)
                        return (a.sequence_no || 0) - (b.sequence_no || 0);
                    return 0;
                });
                _this.toast.successToastr('Template loaded — review and save');
            }
        });
    };
    GuardRouteComponent.prototype.changePlant = function (plant) {
        this.activePlant = plant;
        this.selectedGuardId = 0;
        this.assignments = [];
        this.loadGuards();
    };
    GuardRouteComponent.prototype.loadGuards = function () {
        var _this = this;
        this.loadingGuards = true;
        this.serve.post_rqst({ plant: this.activePlant }, 'Patrol/getGuardList').subscribe(function (result) {
            _this.loadingGuards = false;
            if (result['statusCode'] == 200) {
                _this.guards = result['result'] || [];
            }
        }, function () { _this.loadingGuards = false; });
    };
    GuardRouteComponent.prototype.onGuardChange = function () {
        var _this = this;
        if (!this.selectedGuardId) {
            this.assignments = [];
            return;
        }
        this.loadingRoute = true;
        this.serve.post_rqst({ guard_id: this.selectedGuardId }, 'Patrol/getGuardRoute').subscribe(function (result) {
            _this.loadingRoute = false;
            if (result['statusCode'] == 200) {
                var all = result['all_checkpoints'] || [];
                var assigned_2 = result['assigned'] || [];
                // Build assignment rows
                _this.assignments = all.map(function (cp) {
                    var found = assigned_2.find(function (a) { return a.checkpoint_id == cp.id; });
                    return {
                        checkpoint_id: cp.id,
                        code: cp.code,
                        name: cp.name,
                        location: cp.location || '',
                        assigned: !!found,
                        sequence_no: found ? found.sequence_no : null,
                    };
                });
                // Sort assigned ones first, then by sequence
                _this.assignments.sort(function (a, b) {
                    if (a.assigned && !b.assigned)
                        return -1;
                    if (!a.assigned && b.assigned)
                        return 1;
                    if (a.assigned && b.assigned)
                        return (a.sequence_no || 0) - (b.sequence_no || 0);
                    return 0;
                });
            }
        }, function () { _this.loadingRoute = false; });
    };
    GuardRouteComponent.prototype.toggleAssign = function (row) {
        row.assigned = !row.assigned;
        if (!row.assigned)
            row.sequence_no = null;
        else
            row.sequence_no = this.getNextSeq();
    };
    GuardRouteComponent.prototype.getNextSeq = function () {
        var used = this.assignments.filter(function (a) { return a.assigned && a.sequence_no; }).map(function (a) { return +a.sequence_no; });
        return used.length ? Math.max.apply(Math, used) + 1 : 1;
    };
    GuardRouteComponent.prototype.moveUp = function (index) {
        if (index === 0)
            return;
        var tmp = this.assignments[index];
        this.assignments[index] = this.assignments[index - 1];
        this.assignments[index - 1] = tmp;
        this.resequence();
    };
    GuardRouteComponent.prototype.moveDown = function (index) {
        if (index === this.assignedRows.length - 1)
            return;
        var assignedIdx = this.assignments.indexOf(this.assignedRows[index]);
        var nextIdx = this.assignments.indexOf(this.assignedRows[index + 1]);
        var tmp = this.assignments[assignedIdx];
        this.assignments[assignedIdx] = this.assignments[nextIdx];
        this.assignments[nextIdx] = tmp;
        this.resequence();
    };
    GuardRouteComponent.prototype.resequence = function () {
        var seq = 1;
        this.assignments.forEach(function (a) { if (a.assigned)
            a.sequence_no = seq++; });
    };
    Object.defineProperty(GuardRouteComponent.prototype, "assignedRows", {
        get: function () {
            return this.assignments.filter(function (a) { return a.assigned; }).sort(function (a, b) { return a.sequence_no - b.sequence_no; });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(GuardRouteComponent.prototype, "unassignedRows", {
        get: function () {
            return this.assignments.filter(function (a) { return !a.assigned; });
        },
        enumerable: true,
        configurable: true
    });
    GuardRouteComponent.prototype.saveRoute = function () {
        var _this = this;
        if (!this.selectedGuardId) {
            this.toast.warningToastr('Please select a guard');
            return;
        }
        var toSave = this.assignments
            .filter(function (a) { return a.assigned && a.sequence_no; })
            .map(function (a) { return ({ checkpoint_id: a.checkpoint_id, sequence_no: +a.sequence_no }); });
        this.saving = true;
        this.serve.post_rqst({
            guard_id: this.selectedGuardId,
            route_id: this.selectedTemplateId || null,
            assignments: toSave
        }, 'Patrol/saveGuardRoute').subscribe(function (result) {
            _this.saving = false;
            if (result['statusCode'] == 200) {
                _this.toast.successToastr('Route saved successfully');
            }
            else {
                _this.toast.errorToastr(result['statusMsg'] || 'Failed to save');
            }
        }, function () { _this.saving = false; _this.toast.errorToastr('Request failed'); });
    };
    GuardRouteComponent.prototype.goToCheckpoints = function () { this.router.navigate(['/patrol']); };
    GuardRouteComponent.prototype.goToRounds = function () { this.router.navigate(['/patrol/rounds']); };
    GuardRouteComponent.prototype.goToRouteTemplates = function () { this.router.navigate(['/patrol/route-templates']); };
    GuardRouteComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-guard-route',
            template: __webpack_require__(/*! ./guard-route.component.html */ "./src/app/patrol/guard-route/guard-route.component.html"),
            styles: [__webpack_require__(/*! ./guard-route.component.scss */ "./src/app/patrol/guard-route/guard-route.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_services_DatabaseService__WEBPACK_IMPORTED_MODULE_2__["DatabaseService"],
            ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_3__["ToastrManager"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], GuardRouteComponent);
    return GuardRouteComponent;
}());



/***/ }),

/***/ "./src/app/patrol/patrol-dashboard/patrol-dashboard.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/patrol/patrol-dashboard/patrol-dashboard.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-container\">\r\n\r\n  <!-- ── Header ── -->\r\n  <div class=\"tools-container\">\r\n    <h2><i class=\"material-icons\">shield</i> Patrol Dashboard</h2>\r\n    <div class=\"left-auto df ac flex-gap-5\">\r\n\r\n      <!-- Date filter -->\r\n      <label class=\"pd-date-label\">From</label>\r\n      <input type=\"date\" class=\"rl-date-input\" [(ngModel)]=\"dateFrom\">\r\n      <label class=\"pd-date-label\">To</label>\r\n      <input type=\"date\" class=\"rl-date-input\" [(ngModel)]=\"dateTo\">\r\n\r\n      <button mat-raised-button color=\"primary\" (click)=\"load()\" [disabled]=\"isLoading\">\r\n        <i class=\"material-icons\">search</i> Apply\r\n      </button>\r\n      <button mat-icon-button matTooltip=\"Refresh\" (click)=\"load()\">\r\n        <i class=\"material-icons\">refresh</i>\r\n      </button>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"container\" style=\"padding: 16px;\">\r\n\r\n    <!-- ── Top Summary Cards ── -->\r\n    <div class=\"pd-cards-row\">\r\n\r\n      <div class=\"pd-card pd-card-blue\">\r\n        <div class=\"pd-card-icon\"><i class=\"material-icons\">qr_code_scanner</i></div>\r\n        <div class=\"pd-card-info\">\r\n          <div class=\"pd-card-val\">{{ isLoading ? '—' : totalScans }}</div>\r\n          <div class=\"pd-card-lbl\">Total Scans</div>\r\n          <div class=\"pd-card-sub\">{{ dateFrom }} to {{ dateTo }}</div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"pd-card pd-card-green\">\r\n        <div class=\"pd-card-icon\"><i class=\"material-icons\">person_pin</i></div>\r\n        <div class=\"pd-card-info\">\r\n          <div class=\"pd-card-val\">{{ isLoading ? '—' : activeSessions }}</div>\r\n          <div class=\"pd-card-lbl\">Active Sessions</div>\r\n          <div class=\"pd-card-sub\">Guards currently on patrol</div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"pd-card\" [ngClass]=\"siren.status === 'on' ? 'pd-card-red' : 'pd-card-grey'\">\r\n        <div class=\"pd-card-icon\">\r\n          <i class=\"material-icons\" [class.pd-blink]=\"siren.status === 'on'\">notifications_active</i>\r\n        </div>\r\n        <div class=\"pd-card-info\">\r\n          <div class=\"pd-card-val\">{{ siren.status === 'on' ? 'ON' : 'OFF' }}</div>\r\n          <div class=\"pd-card-lbl\">Siren Status</div>\r\n          <div class=\"pd-card-sub\" *ngIf=\"siren.triggered_by_code\">Triggered by: {{ siren.triggered_by_code }}</div>\r\n          <div class=\"pd-card-sub\" *ngIf=\"siren.status === 'off'\">All clear</div>\r\n        </div>\r\n        <button class=\"pd-siren-off-btn\" *ngIf=\"siren.status === 'on'\" (click)=\"sirenOff()\" [disabled]=\"sirenLoading\">\r\n          <i class=\"material-icons\">power_settings_new</i>\r\n          {{ sirenLoading ? 'Wait...' : 'Turn OFF' }}\r\n        </button>\r\n      </div>\r\n\r\n      <div class=\"pd-card pd-card-orange\">\r\n        <div class=\"pd-card-icon\"><i class=\"material-icons\">warning</i></div>\r\n        <div class=\"pd-card-info\">\r\n          <div class=\"pd-card-val\">{{ isLoading ? '—' : overdue.length }}</div>\r\n          <div class=\"pd-card-lbl\">Overdue (2h+)</div>\r\n          <div class=\"pd-card-sub\">HSP checkpoints pending</div>\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n\r\n    <div class=\"pd-two-col\">\r\n\r\n      <!-- ── LEFT COLUMN ── -->\r\n      <div class=\"pd-col\">\r\n\r\n        <!-- Active Sessions List -->\r\n        <div class=\"pd-section\">\r\n          <div class=\"pd-section-head\">\r\n            <i class=\"material-icons\">directions_walk</i>\r\n            Currently On Patrol\r\n            <span class=\"pd-badge-count\" *ngIf=\"activeSessionsList.length > 0\">{{ activeSessionsList.length }}</span>\r\n          </div>\r\n          <div class=\"pd-skeleton-rows\" *ngIf=\"isLoading\">\r\n            <div class=\"pd-skel\" *ngFor=\"let x of [1,2,3]\"></div>\r\n          </div>\r\n          <div class=\"pd-empty-box\" *ngIf=\"!isLoading && activeSessionsList.length === 0\">\r\n            <i class=\"material-icons\" style=\"color:#94a3b8;font-size:20px;\">person_off</i>\r\n            <span>Koi guard abhi patrol par nahi hai</span>\r\n          </div>\r\n          <table class=\"pd-table\" *ngIf=\"!isLoading && activeSessionsList.length > 0\">\r\n            <thead>\r\n              <tr><th>#</th><th>Guard Name</th><th>Emp ID</th><th>Started At</th><th>Scans</th></tr>\r\n            </thead>\r\n            <tbody>\r\n              <tr *ngFor=\"let s of activeSessionsList; let i = index\">\r\n                <td>{{ i + 1 }}</td>\r\n                <td>\r\n                  <span class=\"pd-active-dot\"></span>\r\n                  <strong>{{ s.guard_name }}</strong>\r\n                </td>\r\n                <td>{{ s.employee_id || '—' }}</td>\r\n                <td>{{ formatTime(s.started_at) }}</td>\r\n                <td>\r\n                  <span class=\"pd-scan-badge pd-badge-ok\">{{ s.scanned_count }}</span>\r\n                </td>\r\n              </tr>\r\n            </tbody>\r\n          </table>\r\n        </div>\r\n\r\n        <!-- Overdue Checkpoints -->\r\n        <div class=\"pd-section\" *ngIf=\"overdue.length > 0\">\r\n          <div class=\"pd-section-head pd-head-red\">\r\n            <i class=\"material-icons\">alarm</i>\r\n            Overdue Checkpoints (not scanned in 2+ hrs)\r\n            <span class=\"pd-badge-count\">{{ overdue.length }}</span>\r\n          </div>\r\n          <table class=\"pd-table\">\r\n            <thead>\r\n              <tr><th>Code</th><th>Name</th><th>Location</th><th>Last Scan</th></tr>\r\n            </thead>\r\n            <tbody>\r\n              <tr *ngFor=\"let cp of overdue\" class=\"pd-row-red\">\r\n                <td><strong>{{ cp.code }}</strong></td>\r\n                <td>{{ cp.name }}</td>\r\n                <td>{{ cp.location || '—' }}</td>\r\n                <td>{{ cp.last_scan ? formatTime(cp.last_scan) : 'Never' }}</td>\r\n              </tr>\r\n            </tbody>\r\n          </table>\r\n        </div>\r\n        <div class=\"pd-section pd-empty-box\" *ngIf=\"overdue.length === 0 && !isLoading\">\r\n          <i class=\"material-icons pd-ok-icon\">check_circle</i>\r\n          <span>All HSP checkpoints are up to date</span>\r\n        </div>\r\n\r\n        <!-- Checkpoint Scan Counts -->\r\n        <div class=\"pd-section\">\r\n          <div class=\"pd-section-head\">\r\n            <i class=\"material-icons\">bar_chart</i>\r\n            Checkpoint Scan Count <span class=\"pd-head-sub\">(least first)</span>\r\n          </div>\r\n          <div class=\"pd-skeleton-rows\" *ngIf=\"isLoading\">\r\n            <div class=\"pd-skel\" *ngFor=\"let x of [1,2,3,4,5]\"></div>\r\n          </div>\r\n          <table class=\"pd-table\" *ngIf=\"!isLoading\">\r\n            <thead>\r\n              <tr><th>#</th><th>Code</th><th>Name</th><th>Scans</th></tr>\r\n            </thead>\r\n            <tbody>\r\n              <tr *ngFor=\"let cp of checkpointStats; let i = index\"\r\n                  [class.pd-row-zero]=\"cp.scan_count == 0\">\r\n                <td>{{ i + 1 }}</td>\r\n                <td><strong>{{ cp.code }}</strong></td>\r\n                <td>{{ cp.name }}</td>\r\n                <td>\r\n                  <span class=\"pd-scan-badge\" [ngClass]=\"cp.scan_count == 0 ? 'pd-badge-zero' : 'pd-badge-ok'\">\r\n                    {{ cp.scan_count }}\r\n                  </span>\r\n                </td>\r\n              </tr>\r\n            </tbody>\r\n          </table>\r\n        </div>\r\n\r\n      </div>\r\n\r\n      <!-- ── RIGHT COLUMN ── -->\r\n      <div class=\"pd-col\">\r\n\r\n        <!-- Guard Performance -->\r\n        <div class=\"pd-section\">\r\n          <div class=\"pd-section-head\">\r\n            <i class=\"material-icons\">people</i>\r\n            Guard Performance\r\n          </div>\r\n          <div class=\"pd-skeleton-rows\" *ngIf=\"isLoading\">\r\n            <div class=\"pd-skel\" *ngFor=\"let x of [1,2,3]\"></div>\r\n          </div>\r\n          <div class=\"pd-empty-box\" *ngIf=\"!isLoading && guardStats.length === 0\">\r\n            No guard scans in selected period\r\n          </div>\r\n          <div class=\"pd-guard-rows\" *ngIf=\"!isLoading\">\r\n            <div class=\"pd-guard-row\" *ngFor=\"let g of guardStats; let i = index\">\r\n              <div class=\"pd-guard-rank\" [ngClass]=\"i === 0 ? 'pd-rank-1' : i === guardStats.length-1 ? 'pd-rank-last' : ''\">\r\n                {{ i + 1 }}\r\n              </div>\r\n              <div class=\"pd-guard-info\">\r\n                <div class=\"pd-guard-name\">{{ g.guard_name }}</div>\r\n                <div class=\"pd-guard-emp\">{{ g.employee_id }}</div>\r\n                <div class=\"pd-guard-bar-wrap\">\r\n                  <div class=\"pd-guard-bar\" [style.width.%]=\"(g.scan_count / maxGuardScans()) * 100\"\r\n                       [ngClass]=\"i === 0 ? 'pd-bar-gold' : i === guardStats.length-1 ? 'pd-bar-red' : 'pd-bar-blue'\">\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"pd-guard-count\">{{ g.scan_count }}<small>scans</small></div>\r\n            </div>\r\n          </div>\r\n          <div class=\"pd-guard-legend\" *ngIf=\"!isLoading && guardStats.length > 1\">\r\n            <span class=\"pd-leg-gold\"><i class=\"material-icons\">emoji_events</i> Most: {{ guardStats[0]?.guard_name }}</span>\r\n            <span class=\"pd-leg-red\"><i class=\"material-icons\">trending_down</i> Least: {{ guardStats[guardStats.length-1]?.guard_name }}</span>\r\n          </div>\r\n        </div>\r\n\r\n        <!-- Last 10 Scans — Grid View -->\r\n        <div class=\"pd-section\">\r\n          <div class=\"pd-section-head\">\r\n            <i class=\"material-icons\">history</i>\r\n            Last 10 Scans\r\n          </div>\r\n          <div class=\"pd-skeleton-rows\" *ngIf=\"isLoading\">\r\n            <div class=\"pd-skel pd-skel-tall\" *ngFor=\"let x of [1,2,3,4]\"></div>\r\n          </div>\r\n          <div class=\"pd-scan-grid\" *ngIf=\"!isLoading\">\r\n            <div class=\"pd-scan-grid-card\" *ngFor=\"let s of lastScans\">\r\n              <div class=\"pd-sg-photos\" *ngIf=\"s.photo1 || s.photo2\">\r\n                <img *ngIf=\"s.photo1\" [src]=\"photoUrl(s.photo1)\" (click)=\"openPhoto(photoUrl(s.photo1))\" class=\"pd-sg-img\">\r\n                <img *ngIf=\"s.photo2\" [src]=\"photoUrl(s.photo2)\" (click)=\"openPhoto(photoUrl(s.photo2))\" class=\"pd-sg-img pd-sg-img2\">\r\n              </div>\r\n              <div class=\"pd-sg-no-photo\" *ngIf=\"!s.photo1 && !s.photo2\">\r\n                <i class=\"material-icons\">qr_code_scanner</i>\r\n              </div>\r\n              <div class=\"pd-sg-body\">\r\n                <div class=\"pd-sg-code\">{{ s.code }}</div>\r\n                <div class=\"pd-sg-name\">{{ s.checkpoint_name }}</div>\r\n                <div class=\"pd-sg-meta\">\r\n                  <span><i class=\"material-icons\">person</i>{{ s.guard_name }}</span>\r\n                  <span><i class=\"material-icons\">access_time</i>{{ formatTime(s.scanned_at) }}</span>\r\n                </div>\r\n                <div class=\"pd-sg-remark\" *ngIf=\"s.remark\">\r\n                  <i class=\"material-icons\">comment</i> {{ s.remark }}\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"pd-empty-box\" *ngIf=\"lastScans.length === 0\">No scans found</div>\r\n          </div>\r\n        </div>\r\n\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<!-- Full-screen photo viewer -->\r\n<div class=\"pd-photo-overlay\" *ngIf=\"selectedPhoto\" (click)=\"closePhoto()\">\r\n  <button class=\"pd-photo-close\" (click)=\"closePhoto()\">\r\n    <i class=\"material-icons\">close</i>\r\n  </button>\r\n  <img [src]=\"selectedPhoto\" class=\"pd-photo-full\">\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/patrol/patrol-dashboard/patrol-dashboard.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/patrol/patrol-dashboard/patrol-dashboard.component.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".pd-cards-row {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 14px;\n  margin-bottom: 20px;\n}\n\n.pd-card {\n  border-radius: 14px;\n  padding: 18px 16px;\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  position: relative;\n  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.08);\n}\n\n.pd-card.pd-card-blue {\n  background: linear-gradient(135deg, #3b82f6, #1d4ed8);\n  color: #fff;\n}\n\n.pd-card.pd-card-green {\n  background: linear-gradient(135deg, #22c55e, #15803d);\n  color: #fff;\n}\n\n.pd-card.pd-card-red {\n  background: linear-gradient(135deg, #ef4444, #b91c1c);\n  color: #fff;\n}\n\n.pd-card.pd-card-grey {\n  background: #f1f5f9;\n  color: #334155;\n}\n\n.pd-card.pd-card-orange {\n  background: linear-gradient(135deg, #f97316, #c2410c);\n  color: #fff;\n}\n\n.pd-card-icon {\n  width: 48px;\n  height: 48px;\n  border-radius: 12px;\n  background: rgba(255, 255, 255, 0.2);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n\n.pd-card-icon .material-icons {\n  font-size: 26px;\n}\n\n.pd-card-info {\n  flex: 1;\n}\n\n.pd-card-val {\n  font-size: 28px;\n  font-weight: 800;\n  line-height: 1.1;\n}\n\n.pd-card-lbl {\n  font-size: 12px;\n  font-weight: 600;\n  opacity: 0.9;\n  margin-top: 2px;\n}\n\n.pd-card-sub {\n  font-size: 10px;\n  opacity: 0.75;\n  margin-top: 2px;\n}\n\n.pd-siren-off-btn {\n  position: absolute;\n  right: 14px;\n  bottom: 14px;\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  background: rgba(255, 255, 255, 0.25);\n  border: 1.5px solid rgba(255, 255, 255, 0.5);\n  border-radius: 8px;\n  color: #fff;\n  font-size: 12px;\n  font-weight: 700;\n  padding: 5px 10px;\n  cursor: pointer;\n}\n\n.pd-siren-off-btn .material-icons {\n  font-size: 15px;\n}\n\n.pd-siren-off-btn:hover {\n  background: rgba(255, 255, 255, 0.4);\n}\n\n.pd-siren-off-btn:disabled {\n  opacity: 0.6;\n  cursor: not-allowed;\n}\n\n@keyframes pd-blink {\n  0%, 100% {\n    opacity: 1;\n  }\n  50% {\n    opacity: 0.3;\n  }\n}\n\n.pd-blink {\n  animation: pd-blink 0.9s infinite;\n}\n\n.pd-two-col {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 18px;\n  align-items: start;\n}\n\n.pd-col {\n  display: flex;\n  flex-direction: column;\n  gap: 18px;\n}\n\n.pd-section {\n  background: #fff;\n  border-radius: 14px;\n  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.07);\n  overflow: hidden;\n}\n\n.pd-section-head {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 14px 16px;\n  font-size: 14px;\n  font-weight: 700;\n  color: #1e293b;\n  border-bottom: 1px solid #f1f5f9;\n  background: #f8fafc;\n}\n\n.pd-section-head .material-icons {\n  font-size: 18px;\n  color: #6366f1;\n}\n\n.pd-section-head.pd-head-red .material-icons {\n  color: #ef4444;\n}\n\n.pd-head-sub {\n  font-weight: 400;\n  font-size: 11px;\n  color: #94a3b8;\n  margin-left: 4px;\n}\n\n.pd-badge-count {\n  margin-left: auto;\n  background: #ef4444;\n  color: #fff;\n  font-size: 11px;\n  font-weight: 700;\n  padding: 2px 8px;\n  border-radius: 20px;\n}\n\n.pd-table {\n  width: 100%;\n  border-collapse: collapse;\n  font-size: 13px;\n}\n\n.pd-table th {\n  background: #f8fafc;\n  padding: 9px 12px;\n  text-align: left;\n  font-size: 11px;\n  font-weight: 700;\n  color: #64748b;\n  border-bottom: 1px solid #e2e8f0;\n}\n\n.pd-table td {\n  padding: 9px 12px;\n  border-bottom: 1px solid #f1f5f9;\n  color: #334155;\n}\n\n.pd-table tr:last-child td {\n  border-bottom: none;\n}\n\n.pd-table tr:hover td {\n  background: #f8fafc;\n}\n\n.pd-row-red td {\n  background: #fff5f5;\n}\n\n.pd-row-zero td {\n  color: #94a3b8;\n  font-style: italic;\n}\n\n.pd-scan-badge {\n  display: inline-block;\n  padding: 2px 10px;\n  border-radius: 20px;\n  font-weight: 700;\n  font-size: 12px;\n}\n\n.pd-scan-badge.pd-badge-zero {\n  background: #fee2e2;\n  color: #dc2626;\n}\n\n.pd-scan-badge.pd-badge-ok {\n  background: #dcfce7;\n  color: #16a34a;\n}\n\n.pd-guard-rows {\n  padding: 12px 14px;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n\n.pd-guard-row {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n}\n\n.pd-guard-rank {\n  width: 28px;\n  height: 28px;\n  border-radius: 50%;\n  background: #e2e8f0;\n  color: #475569;\n  font-size: 12px;\n  font-weight: 700;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n}\n\n.pd-guard-rank.pd-rank-1 {\n  background: #fbbf24;\n  color: #78350f;\n}\n\n.pd-guard-rank.pd-rank-last {\n  background: #fee2e2;\n  color: #dc2626;\n}\n\n.pd-guard-info {\n  flex: 1;\n  min-width: 0;\n}\n\n.pd-guard-name {\n  font-size: 13px;\n  font-weight: 600;\n  color: #1e293b;\n}\n\n.pd-guard-emp {\n  font-size: 11px;\n  color: #94a3b8;\n  margin-bottom: 4px;\n}\n\n.pd-guard-bar-wrap {\n  height: 6px;\n  background: #f1f5f9;\n  border-radius: 3px;\n  overflow: hidden;\n}\n\n.pd-guard-bar {\n  height: 100%;\n  border-radius: 3px;\n  transition: width 0.5s ease;\n}\n\n.pd-guard-bar.pd-bar-gold {\n  background: #f59e0b;\n}\n\n.pd-guard-bar.pd-bar-red {\n  background: #ef4444;\n}\n\n.pd-guard-bar.pd-bar-blue {\n  background: #3b82f6;\n}\n\n.pd-guard-count {\n  text-align: right;\n  min-width: 50px;\n  font-size: 18px;\n  font-weight: 800;\n  color: #1e293b;\n}\n\n.pd-guard-count small {\n  display: block;\n  font-size: 10px;\n  color: #94a3b8;\n  font-weight: 400;\n}\n\n.pd-guard-legend {\n  display: flex;\n  gap: 16px;\n  padding: 10px 14px 14px;\n  font-size: 12px;\n  font-weight: 600;\n}\n\n.pd-guard-legend .material-icons {\n  font-size: 14px;\n  vertical-align: middle;\n}\n\n.pd-leg-gold {\n  color: #d97706;\n}\n\n.pd-leg-red {\n  color: #dc2626;\n}\n\n.pd-scan-grid {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 10px;\n  padding: 12px;\n}\n\n.pd-scan-grid-card {\n  border: 1px solid #e2e8f0;\n  border-radius: 10px;\n  overflow: hidden;\n  background: #fafafa;\n  display: flex;\n  flex-direction: column;\n}\n\n.pd-sg-photos {\n  position: relative;\n  height: 90px;\n  background: #f1f5f9;\n  overflow: hidden;\n}\n\n.pd-sg-img {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n  cursor: pointer;\n  transition: transform 0.15s;\n}\n\n.pd-sg-img:hover {\n  transform: scale(1.04);\n}\n\n.pd-sg-img2 {\n  left: 50%;\n  width: 50%;\n  border-left: 2px solid #fff;\n}\n\n.pd-sg-no-photo {\n  height: 90px;\n  background: #f1f5f9;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.pd-sg-no-photo .material-icons {\n  font-size: 32px;\n  color: #cbd5e1;\n}\n\n.pd-sg-body {\n  padding: 8px 10px;\n  flex: 1;\n}\n\n.pd-sg-code {\n  font-size: 13px;\n  font-weight: 900;\n  color: #6366f1;\n  margin-bottom: 2px;\n}\n\n.pd-sg-name {\n  font-size: 12px;\n  font-weight: 600;\n  color: #1e293b;\n  margin-bottom: 4px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.pd-sg-meta {\n  display: flex;\n  flex-direction: column;\n  gap: 2px;\n  font-size: 11px;\n  color: #64748b;\n}\n\n.pd-sg-meta span {\n  display: flex;\n  align-items: center;\n  gap: 3px;\n}\n\n.pd-sg-meta .material-icons {\n  font-size: 11px;\n}\n\n.pd-sg-remark {\n  margin-top: 5px;\n  font-size: 10px;\n  color: #94a3b8;\n  display: flex;\n  align-items: center;\n  gap: 3px;\n}\n\n.pd-sg-remark .material-icons {\n  font-size: 11px;\n}\n\n.pd-sg-remark {\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.pd-empty-box {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 20px 16px;\n  font-size: 13px;\n  color: #94a3b8;\n}\n\n.pd-ok-icon {\n  color: #22c55e;\n  font-size: 20px;\n}\n\n.pd-skeleton-rows {\n  padding: 12px 14px;\n  display: flex;\n  flex-direction: column;\n  gap: 8px;\n}\n\n.pd-skel {\n  height: 36px;\n  border-radius: 8px;\n  background: linear-gradient(90deg, #f1f5f9 25%, #e2e8f0 50%, #f1f5f9 75%);\n  background-size: 200% 100%;\n  animation: pd-shimmer 1.4s infinite;\n}\n\n.pd-skel.pd-skel-tall {\n  height: 80px;\n}\n\n@keyframes pd-shimmer {\n  0% {\n    background-position: 200% 0;\n  }\n  100% {\n    background-position: -200% 0;\n  }\n}\n\n.pd-active-dot {\n  display: inline-block;\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n  background: #22c55e;\n  margin-right: 6px;\n  vertical-align: middle;\n  animation: pd-blink 1.5s infinite;\n}\n\n.pd-date-label {\n  font-size: 12px;\n  color: #64748b;\n  font-weight: 600;\n}\n\n.pd-photo-overlay {\n  position: fixed;\n  inset: 0;\n  background: rgba(0, 0, 0, 0.92);\n  z-index: 9999;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n}\n\n.pd-photo-full {\n  max-width: 90vw;\n  max-height: 90vh;\n  -o-object-fit: contain;\n     object-fit: contain;\n  border-radius: 8px;\n}\n\n.pd-photo-close {\n  position: absolute;\n  top: 16px;\n  right: 16px;\n  background: rgba(255, 255, 255, 0.2);\n  border: 2px solid rgba(255, 255, 255, 0.4);\n  border-radius: 50%;\n  width: 38px;\n  height: 38px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  cursor: pointer;\n}\n\n.pd-photo-close .material-icons {\n  color: #fff;\n  font-size: 22px;\n}\n\n@media (max-width: 1100px) {\n  .pd-cards-row {\n    grid-template-columns: 1fr 1fr;\n  }\n  .pd-two-col {\n    grid-template-columns: 1fr;\n  }\n}\n\n@media (max-width: 600px) {\n  .pd-cards-row {\n    grid-template-columns: 1fr;\n  }\n}"

/***/ }),

/***/ "./src/app/patrol/patrol-dashboard/patrol-dashboard.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/patrol/patrol-dashboard/patrol-dashboard.component.ts ***!
  \***********************************************************************/
/*! exports provided: PatrolDashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PatrolDashboardComponent", function() { return PatrolDashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_services_DatabaseService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/_services/DatabaseService */ "./src/_services/DatabaseService.ts");
/* harmony import */ var ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng6-toastr-notifications */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/ng6-toastr-notifications/fesm5/ng6-toastr-notifications.js");




var PatrolDashboardComponent = /** @class */ (function () {
    function PatrolDashboardComponent(serve, toast) {
        this.serve = serve;
        this.toast = toast;
        this.isLoading = false;
        this.sirenLoading = false;
        this.dateFrom = new Date().toISOString().split('T')[0];
        this.dateTo = new Date().toISOString().split('T')[0];
        this.siren = { status: 'off', triggered_by_code: null };
        this.totalScans = 0;
        this.activeSessions = 0;
        this.activeSessionsList = [];
        this.overdue = [];
        this.checkpointStats = [];
        this.guardStats = [];
        this.lastScans = [];
        this.selectedPhoto = '';
    }
    PatrolDashboardComponent.prototype.ngOnInit = function () {
        this.load();
    };
    PatrolDashboardComponent.prototype.load = function () {
        var _this = this;
        this.isLoading = true;
        this.serve.post_rqst({ date_from: this.dateFrom, date_to: this.dateTo }, 'Patrol/getDashboardStats').subscribe(function (r) {
            _this.isLoading = false;
            if (r.statusCode == 200) {
                _this.siren = r.siren || { status: 'off', triggered_by_code: null };
                _this.totalScans = r.total_scans || 0;
                _this.activeSessions = r.active_sessions || 0;
                _this.activeSessionsList = r.active_sessions_list || [];
                _this.overdue = r.overdue || [];
                _this.checkpointStats = r.checkpoint_stats || [];
                _this.guardStats = r.guard_stats || [];
                _this.lastScans = r.last_scans || [];
            }
        }, function () { _this.isLoading = false; });
    };
    PatrolDashboardComponent.prototype.sirenOff = function () {
        var _this = this;
        if (!confirm('Siren band karna chahte hain?'))
            return;
        this.sirenLoading = true;
        this.serve.post_rqst({}, 'Patrol/sirenOff').subscribe(function (r) {
            _this.sirenLoading = false;
            if (r.statusCode == 200) {
                _this.siren = { status: 'off', triggered_by_code: null };
                _this.overdue = [];
                _this.toast.successToastr('Siren OFF kar diya gaya');
            }
            else {
                _this.toast.errorToastr(r.statusMsg || 'Failed');
            }
        }, function () { _this.sirenLoading = false; });
    };
    PatrolDashboardComponent.prototype.photoUrl = function (name) {
        return this.serve.uploadUrl + 'patrol/' + name;
    };
    PatrolDashboardComponent.prototype.openPhoto = function (url) { this.selectedPhoto = url; };
    PatrolDashboardComponent.prototype.closePhoto = function () { this.selectedPhoto = ''; };
    PatrolDashboardComponent.prototype.maxGuardScans = function () {
        return this.guardStats.length ? Math.max.apply(Math, this.guardStats.map(function (g) { return +g.scan_count; })) : 1;
    };
    PatrolDashboardComponent.prototype.formatTime = function (dt) {
        if (!dt || dt === '0000-00-00 00:00:00')
            return '---';
        var d = new Date(dt);
        return d.toLocaleString('en-IN', { day: '2-digit', month: 'short', hour: '2-digit', minute: '2-digit', hour12: true });
    };
    PatrolDashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-patrol-dashboard',
            template: __webpack_require__(/*! ./patrol-dashboard.component.html */ "./src/app/patrol/patrol-dashboard/patrol-dashboard.component.html"),
            styles: [__webpack_require__(/*! ./patrol-dashboard.component.scss */ "./src/app/patrol/patrol-dashboard/patrol-dashboard.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_services_DatabaseService__WEBPACK_IMPORTED_MODULE_2__["DatabaseService"],
            ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_3__["ToastrManager"]])
    ], PatrolDashboardComponent);
    return PatrolDashboardComponent;
}());



/***/ }),

/***/ "./src/app/patrol/patrol-routing.module.ts":
/*!*************************************************!*\
  !*** ./src/app/patrol/patrol-routing.module.ts ***!
  \*************************************************/
/*! exports provided: PatrolRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PatrolRoutingModule", function() { return PatrolRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _checkpoint_list_checkpoint_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./checkpoint-list/checkpoint-list.component */ "./src/app/patrol/checkpoint-list/checkpoint-list.component.ts");
/* harmony import */ var _guard_route_guard_route_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./guard-route/guard-route.component */ "./src/app/patrol/guard-route/guard-route.component.ts");
/* harmony import */ var _round_list_round_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./round-list/round-list.component */ "./src/app/patrol/round-list/round-list.component.ts");
/* harmony import */ var _round_detail_round_detail_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./round-detail/round-detail.component */ "./src/app/patrol/round-detail/round-detail.component.ts");
/* harmony import */ var _route_template_route_template_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./route-template/route-template.component */ "./src/app/patrol/route-template/route-template.component.ts");
/* harmony import */ var _patrol_dashboard_patrol_dashboard_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./patrol-dashboard/patrol-dashboard.component */ "./src/app/patrol/patrol-dashboard/patrol-dashboard.component.ts");
/* harmony import */ var _auth_component_guard__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../auth-component.guard */ "./src/app/auth-component.guard.ts");










var routes = [
    { path: '', component: _checkpoint_list_checkpoint_list_component__WEBPACK_IMPORTED_MODULE_3__["CheckpointListComponent"], canActivate: [_auth_component_guard__WEBPACK_IMPORTED_MODULE_9__["AuthComponentGuard"]], data: { expectedRole: ['1'] } },
    { path: 'dashboard', component: _patrol_dashboard_patrol_dashboard_component__WEBPACK_IMPORTED_MODULE_8__["PatrolDashboardComponent"], canActivate: [_auth_component_guard__WEBPACK_IMPORTED_MODULE_9__["AuthComponentGuard"]], data: { expectedRole: ['1'] } },
    { path: 'guard-route', component: _guard_route_guard_route_component__WEBPACK_IMPORTED_MODULE_4__["GuardRouteComponent"], canActivate: [_auth_component_guard__WEBPACK_IMPORTED_MODULE_9__["AuthComponentGuard"]], data: { expectedRole: ['1'] } },
    { path: 'route-templates', component: _route_template_route_template_component__WEBPACK_IMPORTED_MODULE_7__["RouteTemplateComponent"], canActivate: [_auth_component_guard__WEBPACK_IMPORTED_MODULE_9__["AuthComponentGuard"]], data: { expectedRole: ['1'] } },
    { path: 'rounds', component: _round_list_round_list_component__WEBPACK_IMPORTED_MODULE_5__["RoundListComponent"], canActivate: [_auth_component_guard__WEBPACK_IMPORTED_MODULE_9__["AuthComponentGuard"]], data: { expectedRole: ['1'] } },
    { path: 'rounds/:id', component: _round_detail_round_detail_component__WEBPACK_IMPORTED_MODULE_6__["RoundDetailComponent"], canActivate: [_auth_component_guard__WEBPACK_IMPORTED_MODULE_9__["AuthComponentGuard"]], data: { expectedRole: ['1'] } },
];
var PatrolRoutingModule = /** @class */ (function () {
    function PatrolRoutingModule() {
    }
    PatrolRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], PatrolRoutingModule);
    return PatrolRoutingModule;
}());



/***/ }),

/***/ "./src/app/patrol/patrol.module.ts":
/*!*****************************************!*\
  !*** ./src/app/patrol/patrol.module.ts ***!
  \*****************************************/
/*! exports provided: PatrolModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PatrolModule", function() { return PatrolModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _patrol_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./patrol-routing.module */ "./src/app/patrol/patrol-routing.module.ts");
/* harmony import */ var _checkpoint_list_checkpoint_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./checkpoint-list/checkpoint-list.component */ "./src/app/patrol/checkpoint-list/checkpoint-list.component.ts");
/* harmony import */ var _guard_route_guard_route_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./guard-route/guard-route.component */ "./src/app/patrol/guard-route/guard-route.component.ts");
/* harmony import */ var _round_list_round_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./round-list/round-list.component */ "./src/app/patrol/round-list/round-list.component.ts");
/* harmony import */ var _round_detail_round_detail_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./round-detail/round-detail.component */ "./src/app/patrol/round-detail/round-detail.component.ts");
/* harmony import */ var _route_template_route_template_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./route-template/route-template.component */ "./src/app/patrol/route-template/route-template.component.ts");
/* harmony import */ var _patrol_dashboard_patrol_dashboard_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./patrol-dashboard/patrol-dashboard.component */ "./src/app/patrol/patrol-dashboard/patrol-dashboard.component.ts");
/* harmony import */ var _material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../material */ "./src/app/material.ts");
/* harmony import */ var _app_utility_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../app-utility.module */ "./src/app/app-utility.module.ts");
/* harmony import */ var _techiediaries_ngx_qrcode__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @techiediaries/ngx-qrcode */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@techiediaries/ngx-qrcode/fesm5/techiediaries-ngx-qrcode.js");














var PatrolModule = /** @class */ (function () {
    function PatrolModule() {
    }
    PatrolModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _checkpoint_list_checkpoint_list_component__WEBPACK_IMPORTED_MODULE_5__["CheckpointListComponent"],
                _guard_route_guard_route_component__WEBPACK_IMPORTED_MODULE_6__["GuardRouteComponent"],
                _round_list_round_list_component__WEBPACK_IMPORTED_MODULE_7__["RoundListComponent"],
                _round_detail_round_detail_component__WEBPACK_IMPORTED_MODULE_8__["RoundDetailComponent"],
                _route_template_route_template_component__WEBPACK_IMPORTED_MODULE_9__["RouteTemplateComponent"],
                _patrol_dashboard_patrol_dashboard_component__WEBPACK_IMPORTED_MODULE_10__["PatrolDashboardComponent"],
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _patrol_routing_module__WEBPACK_IMPORTED_MODULE_4__["PatrolRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _material__WEBPACK_IMPORTED_MODULE_11__["MaterialModule"],
                _app_utility_module__WEBPACK_IMPORTED_MODULE_12__["AppUtilityModule"],
                _techiediaries_ngx_qrcode__WEBPACK_IMPORTED_MODULE_13__["NgxQRCodeModule"],
            ]
        })
    ], PatrolModule);
    return PatrolModule;
}());



/***/ }),

/***/ "./src/app/patrol/round-detail/round-detail.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/patrol/round-detail/round-detail.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-container\">\r\n  <div class=\"tools-container\">\r\n    <button mat-icon-button matTooltip=\"Back\" (click)=\"goBack()\">\r\n      <i class=\"material-icons\">arrow_back</i>\r\n    </button>\r\n    <h2>Round Detail</h2>\r\n  </div>\r\n\r\n  <!-- Loading -->\r\n  <div class=\"rd-loading\" *ngIf=\"isLoading\">\r\n    <mat-spinner diameter=\"40\"></mat-spinner>\r\n  </div>\r\n\r\n  <div class=\"container\" *ngIf=\"!isLoading\">\r\n\r\n    <!-- Round Summary -->\r\n    <div class=\"card rd-summary-card\" [class.card-done]=\"round.status === 'completed'\" [class.card-progress]=\"round.status === 'in_progress'\">\r\n      <div class=\"card-body\">\r\n        <!-- Row 1: Guard, Route, Status, Duration -->\r\n        <div class=\"grid-box four-col\">\r\n          <div class=\"block-feilds\">\r\n            <label>Guard</label>\r\n            <p><strong>{{round.guard_name || '---'}}</strong>\r\n              <small *ngIf=\"round.employee_id\" style=\"display:block;color:#9ca3af;\">{{round.employee_id}}</small>\r\n            </p>\r\n          </div>\r\n          <div class=\"block-feilds\">\r\n            <label>Route</label>\r\n            <p *ngIf=\"round.route_name\"><span class=\"rl-route-chip\">{{round.route_name}}</span></p>\r\n            <p *ngIf=\"!round.route_name\" style=\"color:#9ca3af;\">Open Patrol</p>\r\n          </div>\r\n          <div class=\"block-feilds\">\r\n            <label>Started</label>\r\n            <p>{{formatDateTime(round.started_at)}}</p>\r\n          </div>\r\n          <div class=\"block-feilds\">\r\n            <label>Stopped</label>\r\n            <p>{{round.status === 'completed' ? formatDateTime(round.completed_at) : '---'}}</p>\r\n          </div>\r\n        </div>\r\n\r\n        <!-- Row 2: Stats -->\r\n        <div class=\"rd-stats-row\">\r\n          <div class=\"rd-stat-box\">\r\n            <div class=\"rd-stat-val\">{{round.scanned_count || 0}}</div>\r\n            <div class=\"rd-stat-label\">Total Scans</div>\r\n          </div>\r\n          <div class=\"rd-stat-box\" *ngIf=\"round.total_assigned > 0\">\r\n            <div class=\"rd-stat-val\">{{round.total_assigned}}</div>\r\n            <div class=\"rd-stat-label\">Points / Route</div>\r\n          </div>\r\n          <div class=\"rd-stat-box\" *ngIf=\"round.total_assigned > 0\">\r\n            <div class=\"rd-stat-val rd-laps-val\">{{getCompletedLaps()}}</div>\r\n            <div class=\"rd-stat-label\">Laps Completed</div>\r\n          </div>\r\n          <div class=\"rd-stat-box\">\r\n            <div class=\"rd-stat-val\">{{getDuration()}}</div>\r\n            <div class=\"rd-stat-label\">Duration</div>\r\n          </div>\r\n          <div class=\"rd-stat-box\">\r\n            <strong class=\"yellow-clr\" *ngIf=\"round.status === 'in_progress'\">\r\n              <i class=\"material-icons\" style=\"font-size:16px;vertical-align:middle;\">timelapse</i> In Progress\r\n            </strong>\r\n            <strong class=\"green-clr\" *ngIf=\"round.status === 'completed'\">\r\n              <i class=\"material-icons\" style=\"font-size:16px;vertical-align:middle;\">check_circle</i> Completed\r\n            </strong>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <!-- Scans Table -->\r\n    <div class=\"card rd-scans-card\">\r\n      <div class=\"card-head\">\r\n        <h3><i class=\"material-icons\">location_on</i> Scanned Checkpoints ({{scans.length}})</h3>\r\n      </div>\r\n      <div class=\"card-body p0\">\r\n        <div class=\"cs-table\">\r\n          <div class=\"sticky-head\">\r\n            <div class=\"table-head\">\r\n              <table>\r\n                <tr>\r\n                  <th class=\"w50\">#</th>\r\n                  <th class=\"w100\">Code</th>\r\n                  <th class=\"w200\">Checkpoint</th>\r\n                  <th class=\"w200\">Location</th>\r\n                  <th class=\"w110\">Scanned At</th>\r\n                  <th class=\"w250\">Remark</th>\r\n                  <th class=\"w160 text-center\">Photos</th>\r\n                </tr>\r\n              </table>\r\n            </div>\r\n          </div>\r\n          <div class=\"table-container\">\r\n            <div class=\"table-content\">\r\n              <table>\r\n                <tr *ngFor=\"let scan of scans; let i = index\">\r\n                  <td class=\"w50\">\r\n                    <span class=\"rd-seq-num\">{{scan.sequence_no || (i+1)}}</span>\r\n                  </td>\r\n                  <td class=\"w100\"><span class=\"cp-code-chip\">{{scan.code}}</span></td>\r\n                  <td class=\"w200\"><strong>{{scan.checkpoint_name || scan.name}}</strong></td>\r\n                  <td class=\"w200\">{{scan.location || '---'}}</td>\r\n                  <td class=\"w110\">{{formatTime(scan.scanned_at)}}</td>\r\n                  <td class=\"w250\">{{scan.remark || '---'}}</td>\r\n                  <td class=\"w160 text-center\">\r\n                    <div class=\"rd-photos-cell\">\r\n                      <img *ngIf=\"scan.photo1\" [src]=\"uploadUrl + scan.photo1\"\r\n                           (click)=\"goToImage(uploadUrl + scan.photo1)\"\r\n                           class=\"rd-thumb\" style=\"cursor:zoom-in;\">\r\n                      <img *ngIf=\"scan.photo2\" [src]=\"uploadUrl + scan.photo2\"\r\n                           (click)=\"goToImage(uploadUrl + scan.photo2)\"\r\n                           class=\"rd-thumb\" style=\"cursor:zoom-in;\">\r\n                      <span *ngIf=\"!scan.photo1 && !scan.photo2\" style=\"color:#d1d5db;\">—</span>\r\n                    </div>\r\n                  </td>\r\n                </tr>\r\n\r\n                <tr *ngIf=\"scans.length === 0\">\r\n                  <td colspan=\"7\" class=\"text-center\" style=\"padding:24px;color:#aaa;\">\r\n                    No checkpoints scanned yet\r\n                  </td>\r\n                </tr>\r\n              </table>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/patrol/round-detail/round-detail.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/patrol/round-detail/round-detail.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".rd-loading {\n  display: flex;\n  justify-content: center;\n  padding: 60px 0;\n}\n\n.rd-summary-card {\n  margin-bottom: 16px;\n}\n\n.rd-summary-card.card-done {\n  border-left: 4px solid #4caf50;\n}\n\n.rd-summary-card.card-progress {\n  border-left: 4px solid #ff9800;\n}\n\n.four-col {\n  grid-template-columns: repeat(4, 1fr);\n}\n\n.rd-progress-section {\n  margin-top: 14px;\n  padding-top: 14px;\n  border-top: 1px solid #f0f0f0;\n}\n\n.rd-progress-label {\n  display: flex;\n  justify-content: space-between;\n  font-size: 12px;\n  color: #666;\n  margin-bottom: 6px;\n}\n\n.rd-progress-bar {\n  height: 10px;\n  background: #eee;\n  border-radius: 5px;\n  overflow: hidden;\n  margin-bottom: 8px;\n}\n\n.rd-progress-fill {\n  height: 100%;\n  background: #ff9800;\n  border-radius: 5px;\n  transition: width 0.4s;\n}\n\n.rd-progress-fill.pf-done {\n  background: #4caf50;\n}\n\n.rd-status-row {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n}\n\n.rd-status-row strong {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  font-size: 13px;\n}\n\n.rd-status-row strong i {\n  font-size: 16px;\n}\n\n.rl-route-chip {\n  display: inline-block;\n  background: #ede9fe;\n  color: #5c35d4;\n  font-size: 11px;\n  font-weight: 700;\n  border-radius: 20px;\n  padding: 3px 10px;\n}\n\n.rd-stats-row {\n  display: flex;\n  align-items: center;\n  gap: 0;\n  margin-top: 16px;\n  padding-top: 14px;\n  border-top: 1px solid #f0f0f0;\n  flex-wrap: wrap;\n}\n\n.rd-stat-box {\n  flex: 1;\n  min-width: 100px;\n  text-align: center;\n  padding: 8px 12px;\n  border-right: 1px solid #f0f0f0;\n}\n\n.rd-stat-box:last-child {\n  border-right: none;\n}\n\n.rd-stat-val {\n  font-size: 26px;\n  font-weight: 800;\n  color: #1f2937;\n  line-height: 1.1;\n}\n\n.rd-laps-val {\n  color: #16a34a;\n}\n\n.rd-stat-label {\n  font-size: 11px;\n  color: #9ca3af;\n  font-weight: 600;\n  text-transform: uppercase;\n  letter-spacing: 0.4px;\n  margin-top: 3px;\n}\n\n.rd-scans-card {\n  margin-bottom: 20px;\n}\n\n.p0 .cs-table {\n  padding: 0;\n}\n\n.rd-seq-num {\n  width: 26px;\n  height: 26px;\n  border-radius: 50%;\n  background: #5c35d4;\n  color: #fff;\n  font-size: 11px;\n  font-weight: 700;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.cp-code-chip {\n  display: inline-block;\n  background: #ede9ff;\n  color: #5c35d4;\n  font-family: monospace;\n  font-size: 11px;\n  font-weight: 600;\n  padding: 2px 6px;\n  border-radius: 5px;\n}\n\n.rd-photos-cell {\n  display: flex;\n  justify-content: center;\n  gap: 6px;\n}\n\n.rd-thumb {\n  width: 44px;\n  height: 44px;\n  -o-object-fit: cover;\n     object-fit: cover;\n  border-radius: 6px;\n  border: 1px solid #e5e7eb;\n  transition: transform 0.15s;\n}\n\n.rd-thumb:hover {\n  transform: scale(1.08);\n}"

/***/ }),

/***/ "./src/app/patrol/round-detail/round-detail.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/patrol/round-detail/round-detail.component.ts ***!
  \***************************************************************/
/*! exports provided: RoundDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoundDetailComponent", function() { return RoundDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_services_DatabaseService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/_services/DatabaseService */ "./src/_services/DatabaseService.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var src_app_image_module_image_module_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/image-module/image-module.component */ "./src/app/image-module/image-module.component.ts");






var RoundDetailComponent = /** @class */ (function () {
    function RoundDetailComponent(serve, route, router, dialog) {
        this.serve = serve;
        this.route = route;
        this.router = router;
        this.dialog = dialog;
        this.round = {};
        this.scans = [];
        this.isLoading = true;
        this.uploadUrl = '';
        this.uploadUrl = this.serve.uploadUrl + 'patrol/';
        this.roundId = +this.route.snapshot.paramMap.get('id');
    }
    RoundDetailComponent.prototype.ngOnInit = function () { this.loadDetail(); };
    RoundDetailComponent.prototype.loadDetail = function () {
        var _this = this;
        this.isLoading = true;
        this.serve.post_rqst({ id: this.roundId }, 'Patrol/getRoundDetail').subscribe(function (result) {
            _this.isLoading = false;
            if (result['statusCode'] == 200) {
                _this.round = result['round'] || {};
                _this.scans = result['scans'] || [];
            }
        }, function () { _this.isLoading = false; });
    };
    RoundDetailComponent.prototype.goBack = function () { this.router.navigate(['/patrol/rounds']); };
    RoundDetailComponent.prototype.getProgress = function () {
        if (!this.round.total_assigned)
            return 0;
        return Math.round((this.round.scanned_count / this.round.total_assigned) * 100);
    };
    RoundDetailComponent.prototype.getCompletedLaps = function () {
        if (!this.round.total_assigned)
            return 0;
        return Math.floor((this.round.scanned_count || 0) / this.round.total_assigned);
    };
    RoundDetailComponent.prototype.goToImage = function (url) {
        if (!url)
            return;
        this.dialog.open(src_app_image_module_image_module_component__WEBPACK_IMPORTED_MODULE_5__["ImageModuleComponent"], {
            panelClass: 'Image-modal',
            data: { image: url, type: 'base64' }
        });
    };
    RoundDetailComponent.prototype.formatDateTime = function (dt) {
        if (!dt || dt === '0000-00-00 00:00:00')
            return '---';
        var d = new Date(dt);
        var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        var date = d.getDate().toString().padStart(2, '0') + " " + months[d.getMonth()] + " " + d.getFullYear();
        var h = d.getHours(), m = d.getMinutes();
        var ampm = h >= 12 ? 'PM' : 'AM';
        return date + ", " + (h % 12 || 12).toString().padStart(2, '0') + ":" + m.toString().padStart(2, '0') + " " + ampm;
    };
    RoundDetailComponent.prototype.formatTime = function (dt) {
        if (!dt || dt === '0000-00-00 00:00:00')
            return '---';
        var d = new Date(dt);
        var h = d.getHours(), m = d.getMinutes();
        var ampm = h >= 12 ? 'PM' : 'AM';
        return (h % 12 || 12).toString().padStart(2, '0') + ":" + m.toString().padStart(2, '0') + " " + ampm;
    };
    RoundDetailComponent.prototype.getDuration = function () {
        if (!this.round.started_at || !this.round.completed_at || this.round.completed_at === '0000-00-00 00:00:00')
            return '---';
        var ms = new Date(this.round.completed_at).getTime() - new Date(this.round.started_at).getTime();
        var mins = Math.floor(ms / 60000);
        if (mins < 60)
            return mins + " min";
        return Math.floor(mins / 60) + "h " + mins % 60 + "m";
    };
    RoundDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-round-detail',
            template: __webpack_require__(/*! ./round-detail.component.html */ "./src/app/patrol/round-detail/round-detail.component.html"),
            styles: [__webpack_require__(/*! ./round-detail.component.scss */ "./src/app/patrol/round-detail/round-detail.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_services_DatabaseService__WEBPACK_IMPORTED_MODULE_2__["DatabaseService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialog"]])
    ], RoundDetailComponent);
    return RoundDetailComponent;
}());



/***/ }),

/***/ "./src/app/patrol/round-list/round-list.component.html":
/*!*************************************************************!*\
  !*** ./src/app/patrol/round-list/round-list.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-container\">\r\n  <div class=\"tools-container\">\r\n    <h2>Patrol Rounds</h2>\r\n    <div class=\"left-auto df ac flex-gap-5\">\r\n\r\n      <button mat-icon-button matTooltip=\"Refresh\" (click)=\"refresh()\">\r\n        <i class=\"material-icons\">refresh</i>\r\n      </button>\r\n\r\n      <!-- Date filter -->\r\n      <div class=\"rl-date-wrap\">\r\n        <i class=\"material-icons\">calendar_today</i>\r\n        <input type=\"date\" class=\"rl-date-input\" [(ngModel)]=\"filterDate\" (change)=\"onDateChange()\">\r\n      </div>\r\n\r\n      <div class=\"pagination\" *ngIf=\"rounds.length > 0\">\r\n        <div class=\"pagination-content\">\r\n          Pages <span>{{pagenumber}}</span> of <span>{{total_page}}</span>\r\n        </div>\r\n        <div class=\"page-nav\">\r\n          <button mat-icon-button (click)=\"previous()\" [disabled]=\"start == 0\">\r\n            <i class=\"material-icons\">navigate_before</i>\r\n          </button>\r\n          <button mat-icon-button (click)=\"nextPage()\" [disabled]=\"pagenumber == total_page\">\r\n            <i class=\"material-icons\">navigate_next</i>\r\n          </button>\r\n        </div>\r\n      </div>\r\n\r\n      <!-- Plant filter -->\r\n      <div class=\"mat-tabbar\">\r\n        <button mat-button [ngClass]=\"activePlant === '' ? 'active' : ''\" (click)=\"changePlant('')\">All Plants</button>\r\n        <button mat-button [ngClass]=\"activePlant === 'Hosiarpur' ? 'active' : ''\" (click)=\"changePlant('Hosiarpur')\">Hosiarpur</button>\r\n        <button mat-button [ngClass]=\"activePlant === 'Chamarajanagar' ? 'active' : ''\" (click)=\"changePlant('Chamarajanagar')\">Chamarajanagar</button>\r\n      </div>\r\n\r\n      <!-- Guard filter -->\r\n      <select class=\"guard-filter-select\" [(ngModel)]=\"selectedGuardId\" (change)=\"onGuardFilter()\">\r\n        <option [value]=\"0\">All Guards</option>\r\n        <option *ngFor=\"let g of guards\" [value]=\"g.id\">{{g.name}}</option>\r\n      </select>\r\n\r\n      <div class=\"mat-tabbar\">\r\n        <button mat-button [ngClass]=\"activeTab === 'all' ? 'active' : ''\" (click)=\"changeTab('all')\">\r\n          <i class=\"material-icons\">list</i> All ({{tabCounts.all_count || 0}})\r\n        </button>\r\n        <button mat-button [ngClass]=\"activeTab === 'in_progress' ? 'active' : ''\" (click)=\"changeTab('in_progress')\">\r\n          <i class=\"material-icons\">timelapse</i> In Progress ({{tabCounts.in_progress_count || 0}})\r\n        </button>\r\n        <button mat-button [ngClass]=\"activeTab === 'completed' ? 'active' : ''\" (click)=\"changeTab('completed')\">\r\n          <i class=\"material-icons\">check_circle</i> Completed ({{tabCounts.completed_count || 0}})\r\n        </button>\r\n      </div>\r\n\r\n      <button mat-stroked-button (click)=\"goToCheckpoints()\">\r\n        <i class=\"material-icons\">place</i> Checkpoints\r\n      </button>\r\n      <button mat-stroked-button (click)=\"goToGuardRoute()\">\r\n        <i class=\"material-icons\">alt_route</i> Guard Route\r\n      </button>\r\n\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"container container-scroll\">\r\n    <div class=\"cs-table horizontal-scroll\">\r\n\r\n      <div class=\"sticky-head\">\r\n        <div class=\"table-head\">\r\n          <table>\r\n            <tr>\r\n              <th class=\"w50\">S.No</th>\r\n              <th class=\"w160\">Guard</th>\r\n              <th class=\"w80\">Emp ID</th>\r\n              <th class=\"w140\">Route</th>\r\n              <th class=\"w160\">Started</th>\r\n              <th class=\"w160\">Stopped</th>\r\n              <th class=\"w90\">Total Scans</th>\r\n              <th class=\"w90\">Laps Done</th>\r\n              <th class=\"w90\">Duration</th>\r\n              <th class=\"w100 text-center\">Status</th>\r\n              <th class=\"w100 text-center\">Actions</th>\r\n            </tr>\r\n          </table>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"table-container\">\r\n        <div class=\"table-content\">\r\n          <table>\r\n            <ng-container *ngIf=\"!isLoading\">\r\n              <tr *ngFor=\"let r of rounds; let i = index\" (click)=\"goToDetail(r.id)\" style=\"cursor:pointer;\">\r\n                <td class=\"w50\">{{sr_no + i + 1}}</td>\r\n                <td class=\"w160\"><strong>{{r.guard_name || '---'}}</strong></td>\r\n                <td class=\"w80\">{{r.employee_id || '---'}}</td>\r\n                <td class=\"w140\">\r\n                  <span *ngIf=\"r.route_name\" class=\"rl-route-chip\">{{r.route_name}}</span>\r\n                  <span *ngIf=\"!r.route_name\" style=\"color:#9ca3af;\">Open Patrol</span>\r\n                </td>\r\n                <td class=\"w160\">{{formatDateTime(r.started_at)}}</td>\r\n                <td class=\"w160\">{{r.status === 'completed' ? formatDateTime(r.completed_at) : '---'}}</td>\r\n                <td class=\"w90 text-center\"><strong>{{r.scanned_count || 0}}</strong></td>\r\n                <td class=\"w90 text-center\">\r\n                  <span *ngIf=\"r.total_assigned > 0\" class=\"rl-laps-chip\">\r\n                    {{getLaps(r)}} lap{{getLaps(r) != 1 ? 's' : ''}}\r\n                  </span>\r\n                  <span *ngIf=\"!r.total_assigned\" style=\"color:#9ca3af;\">—</span>\r\n                </td>\r\n                <td class=\"w90\">{{r.status === 'completed' ? getDuration(r.started_at, r.completed_at) : '---'}}</td>\r\n                <td class=\"w100 text-center\">\r\n                  <strong class=\"yellow-clr\" *ngIf=\"r.status === 'in_progress'\">In Progress</strong>\r\n                  <strong class=\"green-clr\"  *ngIf=\"r.status === 'completed'\">Completed</strong>\r\n                </td>\r\n                <td class=\"w100 text-center\" (click)=\"$event.stopPropagation()\">\r\n                  <button mat-icon-button matTooltip=\"Stop Working\"\r\n                          *ngIf=\"r.status === 'in_progress'\"\r\n                          style=\"color:#f97316;\"\r\n                          (click)=\"stopRound($event, r)\">\r\n                    <i class=\"material-icons\">stop_circle</i>\r\n                  </button>\r\n                  <button mat-icon-button matTooltip=\"Delete Round\"\r\n                          style=\"color:#ef4444;\"\r\n                          (click)=\"deleteRound($event, r)\">\r\n                    <i class=\"material-icons\">delete</i>\r\n                  </button>\r\n                </td>\r\n              </tr>\r\n            </ng-container>\r\n\r\n            <ng-container *ngFor=\"let sk of skelton\">\r\n              <tr class=\"sk-loading\" *ngIf=\"isLoading\">\r\n                <td class=\"w50\"><div>&nbsp;</div></td>\r\n                <td class=\"w160\"><div>&nbsp;</div></td>\r\n                <td class=\"w80\"><div>&nbsp;</div></td>\r\n                <td class=\"w160\"><div>&nbsp;</div></td>\r\n                <td class=\"w160\"><div>&nbsp;</div></td>\r\n                <td class=\"w130\"><div>&nbsp;</div></td>\r\n                <td class=\"w90\"><div>&nbsp;</div></td>\r\n                <td class=\"w100\"><div>&nbsp;</div></td>\r\n                <td class=\"w100\"></td>\r\n              </tr>\r\n            </ng-container>\r\n          </table>\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n\r\n    <ng-container *ngIf=\"rounds.length === 0 && datanotfound\">\r\n      <app-not-result-found></app-not-result-found>\r\n    </ng-container>\r\n  </div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/patrol/round-list/round-list.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/patrol/round-list/round-list.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".rl-route-chip {\n  display: inline-block;\n  background: #ede9fe;\n  color: #5c35d4;\n  font-size: 11px;\n  font-weight: 700;\n  border-radius: 20px;\n  padding: 3px 10px;\n}\n\n.rl-laps-chip {\n  display: inline-block;\n  background: #dcfce7;\n  color: #16a34a;\n  font-size: 11px;\n  font-weight: 700;\n  border-radius: 20px;\n  padding: 3px 10px;\n}\n\n.rl-date-wrap {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  background: #fff;\n  border: 1px solid #ddd6fe;\n  border-radius: 8px;\n  padding: 0 10px;\n  height: 36px;\n}\n\n.rl-date-wrap .material-icons {\n  font-size: 16px;\n  color: #7c3aed;\n}\n\n.rl-date-input {\n  border: none;\n  outline: none;\n  font-size: 13px;\n  color: #1f2937;\n  font-weight: 600;\n  background: transparent;\n  cursor: pointer;\n  height: 34px;\n}\n\n.guard-filter-select {\n  height: 36px;\n  border: 1px solid #ddd;\n  border-radius: 6px;\n  padding: 0 10px;\n  font-size: 13px;\n  color: #333;\n  background: #fff;\n  outline: none;\n  cursor: pointer;\n}\n\n.guard-filter-select:focus {\n  border-color: #5c35d4;\n}\n\n.rl-progress-row {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n\n.rl-progress-bar {\n  flex: 1;\n  height: 6px;\n  background: #eee;\n  border-radius: 3px;\n  overflow: hidden;\n}\n\n.rl-progress-fill {\n  height: 100%;\n  background: #ff9800;\n  border-radius: 3px;\n}\n\n.rl-progress-fill.pf-done {\n  background: #4caf50;\n}\n\n.rl-progress-txt {\n  font-size: 11px;\n  color: #666;\n  white-space: nowrap;\n}"

/***/ }),

/***/ "./src/app/patrol/round-list/round-list.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/patrol/round-list/round-list.component.ts ***!
  \***********************************************************/
/*! exports provided: RoundListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RoundListComponent", function() { return RoundListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_services_DatabaseService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/_services/DatabaseService */ "./src/_services/DatabaseService.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng6-toastr-notifications */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/ng6-toastr-notifications/fesm5/ng6-toastr-notifications.js");





var RoundListComponent = /** @class */ (function () {
    function RoundListComponent(serve, router, toast) {
        this.serve = serve;
        this.router = router;
        this.toast = toast;
        this.rounds = [];
        this.guards = [];
        this.isLoading = false;
        this.datanotfound = false;
        this.skelton = Array(8).fill({});
        this.activeTab = 'all';
        this.activePlant = '';
        this.tabCounts = { all_count: 0, in_progress_count: 0, completed_count: 0 };
        this.filterDate = new Date().toISOString().split('T')[0];
        this.selectedGuardId = 0;
        this.start = 0;
        this.pagenumber = 1;
        this.total_page = 1;
        this.sr_no = 0;
        this.page_limit = this.serve.pageLimit;
    }
    RoundListComponent.prototype.ngOnInit = function () {
        this.loadGuards();
        this.getList();
    };
    RoundListComponent.prototype.loadGuards = function () {
        var _this = this;
        this.serve.post_rqst({ plant: this.activePlant }, 'Patrol/getGuardList').subscribe(function (result) {
            if (result['statusCode'] == 200)
                _this.guards = result['result'] || [];
        });
    };
    RoundListComponent.prototype.changePlant = function (plant) {
        this.activePlant = plant;
        this.selectedGuardId = 0;
        this.start = 0;
        this.loadGuards();
        this.getList();
    };
    RoundListComponent.prototype.changeTab = function (tab) {
        this.activeTab = tab;
        this.start = 0;
        this.getList();
    };
    RoundListComponent.prototype.onGuardFilter = function () { this.start = 0; this.getList(); };
    RoundListComponent.prototype.getList = function () {
        var _this = this;
        this.isLoading = true;
        this.datanotfound = false;
        if (this.start < 0)
            this.start = 0;
        var payload = {
            tab: this.activeTab,
            plant: this.activePlant,
            start: this.start,
            pagelimit: this.page_limit,
            date: this.filterDate
        };
        if (this.selectedGuardId)
            payload['guard_id'] = this.selectedGuardId;
        this.serve.post_rqst(payload, 'Patrol/getRoundList').subscribe(function (result) {
            _this.isLoading = false;
            if (result['statusCode'] == 200) {
                _this.rounds = result['result'] || [];
                _this.tabCounts = result['tabCounts'] || {};
                _this.total_page = Math.ceil((result['count'] || _this.rounds.length) / _this.page_limit) || 1;
                _this.pagenumber = Math.ceil(_this.start / _this.page_limit) + 1;
                _this.sr_no = (_this.pagenumber - 1) * _this.page_limit;
                _this.datanotfound = _this.rounds.length === 0;
            }
            else {
                _this.datanotfound = true;
            }
        }, function () { _this.isLoading = false; _this.datanotfound = true; });
    };
    RoundListComponent.prototype.onDateChange = function () { this.start = 0; this.getList(); };
    RoundListComponent.prototype.refresh = function () { this.selectedGuardId = 0; this.start = 0; this.getList(); };
    RoundListComponent.prototype.previous = function () { this.start -= this.page_limit; this.getList(); };
    RoundListComponent.prototype.nextPage = function () { this.start += this.page_limit; this.getList(); };
    RoundListComponent.prototype.goToDetail = function (id) { this.router.navigate(['/patrol/rounds', id]); };
    RoundListComponent.prototype.goToCheckpoints = function () { this.router.navigate(['/patrol']); };
    RoundListComponent.prototype.goToGuardRoute = function () { this.router.navigate(['/patrol/guard-route']); };
    RoundListComponent.prototype.stopRound = function (event, round) {
        var _this = this;
        event.stopPropagation();
        if (!confirm("\"" + round.guard_name + "\" ka round stop karna chahte hain?"))
            return;
        this.serve.post_rqst({ id: round.id }, 'Patrol/stopRound').subscribe(function (r) {
            if (r.statusCode == 200) {
                _this.toast.successToastr('Round stop kar diya gaya');
                _this.getList();
            }
            else {
                _this.toast.errorToastr(r.statusMsg || 'Failed');
            }
        });
    };
    RoundListComponent.prototype.deleteRound = function (event, round) {
        var _this = this;
        event.stopPropagation();
        if (!confirm("\"" + round.guard_name + "\" ka ye round aur uske saare scans DELETE karna chahte hain? Ye undo nahi hoga."))
            return;
        this.serve.post_rqst({ id: round.id }, 'Patrol/deleteRound').subscribe(function (r) {
            if (r.statusCode == 200) {
                _this.toast.successToastr('Round delete ho gaya');
                _this.getList();
            }
            else {
                _this.toast.errorToastr(r.statusMsg || 'Failed');
            }
        });
    };
    RoundListComponent.prototype.getProgress = function (r) {
        if (!r.total_assigned)
            return 0;
        return Math.round((r.scanned_count / r.total_assigned) * 100);
    };
    RoundListComponent.prototype.getLaps = function (r) {
        if (!r.total_assigned)
            return 0;
        return Math.floor((r.scanned_count || 0) / r.total_assigned);
    };
    RoundListComponent.prototype.formatDateTime = function (dt) {
        if (!dt || dt === '0000-00-00 00:00:00')
            return '---';
        var d = new Date(dt);
        var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        var date = d.getDate().toString().padStart(2, '0') + " " + months[d.getMonth()] + " " + d.getFullYear();
        var h = d.getHours(), m = d.getMinutes();
        var ampm = h >= 12 ? 'PM' : 'AM';
        return date + ", " + (h % 12 || 12).toString().padStart(2, '0') + ":" + m.toString().padStart(2, '0') + " " + ampm;
    };
    RoundListComponent.prototype.getDuration = function (start, end) {
        if (!start || !end || end === '0000-00-00 00:00:00')
            return '---';
        var ms = new Date(end).getTime() - new Date(start).getTime();
        var mins = Math.floor(ms / 60000);
        if (mins < 60)
            return mins + " min";
        return Math.floor(mins / 60) + "h " + mins % 60 + "m";
    };
    RoundListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-round-list',
            template: __webpack_require__(/*! ./round-list.component.html */ "./src/app/patrol/round-list/round-list.component.html"),
            styles: [__webpack_require__(/*! ./round-list.component.scss */ "./src/app/patrol/round-list/round-list.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_services_DatabaseService__WEBPACK_IMPORTED_MODULE_2__["DatabaseService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_4__["ToastrManager"]])
    ], RoundListComponent);
    return RoundListComponent;
}());



/***/ }),

/***/ "./src/app/patrol/route-template/route-template.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/patrol/route-template/route-template.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-container\">\r\n  <div class=\"tools-container\">\r\n    <h2>Route Templates</h2>\r\n    <div class=\"left-auto df ac flex-gap-5\">\r\n      <button mat-stroked-button (click)=\"goToCheckpoints()\">\r\n        <i class=\"material-icons\">place</i> Checkpoints\r\n      </button>\r\n      <button mat-stroked-button (click)=\"goToGuardRoute()\">\r\n        <i class=\"material-icons\">security</i> Guard Route\r\n      </button>\r\n      <button mat-stroked-button (click)=\"goToRounds()\">\r\n        <i class=\"material-icons\">history</i> Rounds\r\n      </button>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"container pt10 pl10 pr10 pb50\">\r\n    <div class=\"row\">\r\n\r\n      <!-- Left: Route list -->\r\n      <div class=\"col s12 m4 l3\">\r\n        <div class=\"card rt-list-card\">\r\n          <div class=\"card-head\">\r\n            <h2><i class=\"material-icons\">route</i> Routes</h2>\r\n            <button mat-icon-button matTooltip=\"New Route\" (click)=\"showAddForm = !showAddForm\">\r\n              <i class=\"material-icons\">add_circle_outline</i>\r\n            </button>\r\n          </div>\r\n\r\n          <!-- Add form -->\r\n          <div class=\"rt-add-form\" *ngIf=\"showAddForm\">\r\n            <mat-form-field appearance=\"outline\">\r\n              <mat-label>Route Name</mat-label>\r\n              <input matInput [(ngModel)]=\"newRouteName\" placeholder=\"e.g. Night Patrol\" (keyup.enter)=\"addRoute()\">\r\n            </mat-form-field>\r\n            <mat-form-field appearance=\"outline\">\r\n              <mat-label>Plant</mat-label>\r\n              <mat-select [(ngModel)]=\"newRoutePlant\">\r\n                <mat-option value=\"\">-- Select Plant --</mat-option>\r\n                <mat-option *ngFor=\"let p of plantOptions\" [value]=\"p\">{{p}}</mat-option>\r\n              </mat-select>\r\n            </mat-form-field>\r\n            <div class=\"rt-add-actions\">\r\n              <button mat-raised-button color=\"primary\" (click)=\"addRoute()\" [disabled]=\"addingRoute\">\r\n                <i class=\"material-icons\">add</i> {{addingRoute ? 'Adding...' : 'Add'}}\r\n              </button>\r\n              <button mat-stroked-button (click)=\"showAddForm = false; newRouteName = ''; newRoutePlant = ''\">Cancel</button>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"card-body p0\">\r\n            <div class=\"rt-route-list\" *ngIf=\"!loadingRoutes\">\r\n              <div *ngIf=\"routes.length === 0\" class=\"rt-empty\">\r\n                <i class=\"material-icons\">route</i>\r\n                <p>No routes yet.<br>Click + to create one.</p>\r\n              </div>\r\n              <div class=\"rt-route-item\" *ngFor=\"let r of routes\"\r\n                   [class.active]=\"selectedRouteId == r.id\"\r\n                   (click)=\"selectRoute(r)\">\r\n                <div class=\"rt-route-info\">\r\n                  <strong>{{r.name}}</strong>\r\n                  <span>{{r.checkpoint_count}} checkpoint{{r.checkpoint_count != 1 ? 's' : ''}}</span>\r\n                  <span class=\"rt-plant-badge\" *ngIf=\"r.plant\">{{r.plant}}</span>\r\n                </div>\r\n                <button mat-icon-button class=\"rt-del-btn\" matTooltip=\"Delete\"\r\n                        (click)=\"deleteRoute(r); $event.stopPropagation()\">\r\n                  <i class=\"material-icons\">delete_outline</i>\r\n                </button>\r\n              </div>\r\n            </div>\r\n            <div class=\"gr-loading\" *ngIf=\"loadingRoutes\">\r\n              <mat-spinner diameter=\"28\"></mat-spinner>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <!-- Right panel -->\r\n      <div class=\"col s12 m8 l9\" *ngIf=\"selectedRouteId\">\r\n\r\n        <!-- Route name bar -->\r\n        <div class=\"card\" style=\"margin-bottom:14px;\">\r\n          <div class=\"card-body\" style=\"padding:12px 16px !important;\">\r\n            <div class=\"df ac flex-gap-5\" *ngIf=\"!editingName\">\r\n              <div style=\"flex:1;\">\r\n                <strong style=\"font-size:16px;color:#1f2937;font-weight:700;\">{{selectedRouteName}}</strong>\r\n                <span class=\"rt-plant-badge\" style=\"margin-left:8px;\" *ngIf=\"selectedRoutePlant\">{{selectedRoutePlant}}</span>\r\n              </div>\r\n              <button mat-icon-button matTooltip=\"Edit\" (click)=\"editingName = true; editName = selectedRouteName; editPlant = selectedRoutePlant\">\r\n                <i class=\"material-icons\" style=\"font-size:18px;color:#5c35d4;\">edit</i>\r\n              </button>\r\n            </div>\r\n            <div *ngIf=\"editingName\">\r\n              <div class=\"df ac flex-gap-5\" style=\"flex-wrap:wrap;\">\r\n                <mat-form-field appearance=\"outline\" style=\"flex:1;min-width:140px;margin:0;\">\r\n                  <mat-label>Route Name</mat-label>\r\n                  <input matInput [(ngModel)]=\"editName\" (keyup.enter)=\"saveRouteName()\">\r\n                </mat-form-field>\r\n                <mat-form-field appearance=\"outline\" style=\"width:160px;margin:0;\">\r\n                  <mat-label>Plant</mat-label>\r\n                  <mat-select [(ngModel)]=\"editPlant\">\r\n                    <mat-option value=\"\">-- None --</mat-option>\r\n                    <mat-option *ngFor=\"let p of plantOptions\" [value]=\"p\">{{p}}</mat-option>\r\n                  </mat-select>\r\n                </mat-form-field>\r\n              </div>\r\n              <div class=\"df ac flex-gap-5\" style=\"margin-top:6px;\">\r\n                <button mat-raised-button color=\"primary\" (click)=\"saveRouteName()\" [disabled]=\"savingName\">\r\n                  {{savingName ? 'Saving...' : 'Save'}}\r\n                </button>\r\n                <button mat-stroked-button (click)=\"editingName = false\">Cancel</button>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <!-- Loading -->\r\n        <div class=\"gr-loading\" *ngIf=\"loadingDetail\">\r\n          <mat-spinner diameter=\"36\"></mat-spinner>\r\n          <span>Loading checkpoints...</span>\r\n        </div>\r\n\r\n        <!-- Two-panel layout -->\r\n        <div class=\"row\" *ngIf=\"!loadingDetail && assignments.length > 0\">\r\n\r\n          <!-- Assigned checkpoints -->\r\n          <div class=\"col s12 m6 l6\">\r\n            <div class=\"card gr-panel-card\">\r\n              <div class=\"card-head\">\r\n                <h2>\r\n                  <i class=\"material-icons assigned-icon\">check_circle</i>\r\n                  Route Checkpoints\r\n                  <span class=\"gr-count assigned-count\">{{assignedRows.length}}</span>\r\n                </h2>\r\n              </div>\r\n              <div class=\"card-body p0\">\r\n                <div class=\"gr-list\">\r\n                  <div *ngIf=\"assignedRows.length === 0\" class=\"gr-empty\">\r\n                    <i class=\"material-icons\">playlist_add</i>\r\n                    <p>No checkpoints added</p>\r\n                    <span>Add from the available panel →</span>\r\n                  </div>\r\n                  <div class=\"gr-row assigned-row\" *ngFor=\"let row of assignedRows; let i = index\">\r\n                    <div class=\"gr-seq-num\">{{row.sequence_no}}</div>\r\n                    <div class=\"gr-row-info\">\r\n                      <strong>{{row.name}}</strong>\r\n                      <div class=\"gr-row-meta\">\r\n                        <span class=\"gr-code\">{{row.code}}</span>\r\n                        <span *ngIf=\"row.location\" class=\"gr-loc\">\r\n                          <i class=\"material-icons\">place</i>{{row.location}}\r\n                        </span>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"gr-row-actions\">\r\n                      <button mat-icon-button (click)=\"moveUp(i)\" [disabled]=\"i === 0\" matTooltip=\"Move Up\">\r\n                        <i class=\"material-icons\">arrow_upward</i>\r\n                      </button>\r\n                      <button mat-icon-button (click)=\"moveDown(i)\" [disabled]=\"i === assignedRows.length - 1\" matTooltip=\"Move Down\">\r\n                        <i class=\"material-icons\">arrow_downward</i>\r\n                      </button>\r\n                      <button mat-icon-button (click)=\"toggleAssign(row)\" matTooltip=\"Remove\" class=\"del-btn\">\r\n                        <i class=\"material-icons\">remove_circle_outline</i>\r\n                      </button>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"gr-save-area\">\r\n                <button mat-raised-button color=\"accent\" (click)=\"saveCheckpoints()\" [disabled]=\"saving\">\r\n                  <i class=\"material-icons\">save</i>\r\n                  {{saving ? 'Saving...' : 'Save Checkpoints'}}\r\n                </button>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <!-- Available checkpoints -->\r\n          <div class=\"col s12 m6 l6\">\r\n            <div class=\"card gr-panel-card\">\r\n              <div class=\"card-head\">\r\n                <h2>\r\n                  <i class=\"material-icons available-icon\">radio_button_unchecked</i>\r\n                  Available Checkpoints\r\n                  <span class=\"gr-count available-count\">{{unassignedRows.length}}</span>\r\n                </h2>\r\n              </div>\r\n              <div class=\"card-body p0\">\r\n                <div class=\"gr-list\">\r\n                  <div *ngIf=\"unassignedRows.length === 0\" class=\"gr-empty\">\r\n                    <i class=\"material-icons\">done_all</i>\r\n                    <p>All checkpoints added</p>\r\n                  </div>\r\n                  <div class=\"gr-row unassigned-row\" *ngFor=\"let row of unassignedRows\">\r\n                    <div class=\"gr-row-info\">\r\n                      <strong>{{row.name}}</strong>\r\n                      <div class=\"gr-row-meta\">\r\n                        <span class=\"gr-code\">{{row.code}}</span>\r\n                        <span *ngIf=\"row.location\" class=\"gr-loc\">\r\n                          <i class=\"material-icons\">place</i>{{row.location}}\r\n                        </span>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"gr-row-actions\">\r\n                      <button mat-stroked-button color=\"primary\" (click)=\"toggleAssign(row)\" class=\"add-btn\">\r\n                        <i class=\"material-icons\">add</i> Add\r\n                      </button>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n        </div>\r\n\r\n        <!-- No checkpoints in system -->\r\n        <div class=\"row\" *ngIf=\"!loadingDetail && assignments.length === 0\">\r\n          <div class=\"col s12\">\r\n            <div class=\"gr-placeholder\">\r\n              <i class=\"material-icons\">playlist_add</i>\r\n              <h3>No Checkpoints Found</h3>\r\n              <p>Create checkpoints first, then add them to this route</p>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n      </div>\r\n\r\n      <!-- No route selected placeholder -->\r\n      <div class=\"col s12 m8 l9\" *ngIf=\"!selectedRouteId\">\r\n        <div class=\"gr-placeholder\">\r\n          <i class=\"material-icons\">route</i>\r\n          <h3>Select a Route Template</h3>\r\n          <p>Choose a route from the left panel, or create a new one using the + button</p>\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/patrol/route-template/route-template.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/patrol/route-template/route-template.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".rt-list-card .card-head {\n  display: flex;\n  align-items: center;\n  background: #faf8ff;\n  border-bottom: 1px solid #ece6ff;\n  padding: 12px 16px;\n}\n.rt-list-card .card-head h2 {\n  flex: 1;\n  margin: 0;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 15px;\n  font-weight: 700;\n  color: #1f2937;\n}\n.rt-list-card .card-head h2 i {\n  color: #5c35d4;\n  font-size: 20px;\n}\n.rt-add-form {\n  padding: 12px 16px;\n  background: #fdf9ff;\n  border-bottom: 1px solid #ece6ff;\n}\n.rt-add-form mat-form-field {\n  width: 100%;\n  margin-bottom: 6px;\n}\n.rt-add-form .rt-add-actions {\n  display: flex;\n  gap: 8px;\n}\n.rt-route-list {\n  padding: 4px 0;\n}\n.rt-route-item {\n  display: flex;\n  align-items: center;\n  padding: 12px 16px;\n  cursor: pointer;\n  border-bottom: 1px solid #f5f3ff;\n  transition: background 0.15s;\n}\n.rt-route-item:last-child {\n  border-bottom: none;\n}\n.rt-route-item:hover {\n  background: #f5f3ff;\n}\n.rt-route-item.active {\n  background: #ede9fe;\n  border-left: 3px solid #5c35d4;\n  padding-left: 13px;\n}\n.rt-route-item .rt-route-info {\n  flex: 1;\n}\n.rt-route-item .rt-route-info strong {\n  display: block;\n  font-size: 13px;\n  font-weight: 700;\n  color: #1f2937;\n}\n.rt-route-item .rt-route-info span {\n  font-size: 11px;\n  color: #9ca3af;\n  margin-top: 2px;\n  display: block;\n}\n.rt-route-item .rt-del-btn {\n  color: #d1d5db;\n  width: 28px !important;\n  height: 28px !important;\n  line-height: 28px !important;\n}\n.rt-route-item .rt-del-btn i {\n  font-size: 18px;\n}\n.rt-route-item .rt-del-btn:hover {\n  color: #ef4444;\n}\n.rt-plant-badge {\n  display: inline-block;\n  background: #ede9fe;\n  color: #5c35d4;\n  font-size: 10px;\n  font-weight: 700;\n  border-radius: 20px;\n  padding: 2px 8px;\n  margin-top: 3px;\n}\n.rt-empty {\n  text-align: center;\n  padding: 40px 20px;\n  color: #9ca3af;\n}\n.rt-empty .material-icons {\n  font-size: 40px;\n  display: block;\n  margin-bottom: 8px;\n  opacity: 0.5;\n}\n.rt-empty p {\n  margin: 0;\n  font-size: 13px;\n}\n.rt-name-card {\n  margin-bottom: 14px;\n}\n.rt-name-card .card-body {\n  display: flex;\n  align-items: center;\n  padding: 10px 16px !important;\n  gap: 10px;\n}\n.rt-name-card .card-body h3 {\n  margin: 0;\n  font-size: 17px;\n  font-weight: 700;\n  color: #1f2937;\n}\n.rt-name-card .card-body mat-form-field {\n  margin: 0 !important;\n  flex: 1;\n}\n.rt-name-card .card-body .rt-edit-actions {\n  display: flex;\n  gap: 8px;\n  align-items: center;\n}\n.gr-loading {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 14px;\n  padding: 40px 0;\n  color: #888;\n  font-size: 14px;\n}\n.gr-panel-card {\n  margin-bottom: 16px;\n  overflow: hidden;\n  display: flex;\n  flex-direction: column;\n}\n.gr-panel-card .card-head {\n  background: #faf8ff;\n  border-bottom: 1px solid #ece6ff;\n}\n.gr-panel-card .card-head h2 {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 15px;\n  font-weight: 600;\n  margin: 0;\n}\n.gr-panel-card .card-head h2 i {\n  font-size: 20px;\n}\n.gr-panel-card .card-head h2 i.assigned-icon {\n  color: #4caf50;\n}\n.gr-panel-card .card-head h2 i.available-icon {\n  color: #9e9e9e;\n}\n.gr-panel-card .card-body {\n  padding: 0 !important;\n}\n.gr-panel-card .p0 {\n  padding: 0 !important;\n}\n.gr-count {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  min-width: 22px;\n  height: 22px;\n  color: #fff;\n  font-size: 11px;\n  font-weight: 700;\n  border-radius: 11px;\n  padding: 0 7px;\n  margin-left: 4px;\n}\n.gr-count.assigned-count {\n  background: #4caf50;\n}\n.gr-count.available-count {\n  background: #9e9e9e;\n}\n.gr-list {\n  min-height: 100px;\n  max-height: 480px;\n  overflow-y: auto;\n}\n.gr-list::-webkit-scrollbar {\n  width: 6px;\n}\n.gr-list::-webkit-scrollbar-track {\n  background: #f5f5f5;\n}\n.gr-list::-webkit-scrollbar-thumb {\n  background: #d6cdf2;\n  border-radius: 3px;\n}\n.gr-list::-webkit-scrollbar-thumb:hover {\n  background: #b9a4f5;\n}\n.gr-empty {\n  text-align: center;\n  padding: 40px 20px;\n  color: #aaa;\n}\n.gr-empty i {\n  font-size: 48px;\n  opacity: 0.5;\n  display: block;\n  margin-bottom: 8px;\n}\n.gr-empty p {\n  margin: 0;\n  font-size: 14px;\n  font-weight: 500;\n}\n.gr-empty span {\n  display: block;\n  margin-top: 4px;\n  font-size: 12px;\n  color: #bbb;\n}\n.gr-row {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 12px 16px;\n  border-bottom: 1px solid #f5f5f5;\n  transition: background 0.15s;\n}\n.gr-row:last-child {\n  border-bottom: none;\n}\n.gr-row:hover {\n  background: #fafafa;\n}\n.gr-row.assigned-row {\n  background: #f4f0ff;\n}\n.gr-row.assigned-row:hover {\n  background: #ebe4ff;\n}\n.gr-seq-num {\n  width: 30px;\n  height: 30px;\n  background: #5c35d4;\n  color: #fff;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 12px;\n  font-weight: 700;\n  flex-shrink: 0;\n  box-shadow: 0 2px 4px rgba(92, 53, 212, 0.25);\n}\n.gr-row-info {\n  flex: 1;\n  min-width: 0;\n  overflow: hidden;\n}\n.gr-row-info strong {\n  display: block;\n  font-size: 14px;\n  color: #222;\n  font-weight: 600;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  margin-bottom: 4px;\n}\n.gr-row-meta {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  flex-wrap: wrap;\n}\n.gr-code {\n  font-size: 11px;\n  font-family: monospace;\n  color: #5c35d4;\n  background: #ede9ff;\n  padding: 2px 7px;\n  border-radius: 4px;\n  font-weight: 600;\n  letter-spacing: 0.5px;\n}\n.gr-loc {\n  font-size: 11px;\n  color: #888;\n  display: inline-flex;\n  align-items: center;\n  gap: 2px;\n  max-width: 180px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.gr-loc i {\n  font-size: 12px;\n  color: #aaa;\n  flex-shrink: 0;\n}\n.gr-row-actions {\n  flex-shrink: 0;\n  display: flex;\n  gap: 2px;\n  align-items: center;\n}\n.gr-row-actions button {\n  min-width: 0;\n}\n.del-btn i {\n  color: #e53935;\n}\n.add-btn {\n  line-height: 28px !important;\n  padding: 0 12px !important;\n  min-width: 64px !important;\n}\n.add-btn i {\n  font-size: 16px;\n  vertical-align: middle;\n  margin-right: 2px;\n}\n.gr-save-area {\n  padding: 14px 16px;\n  border-top: 1px solid #ece6ff;\n  background: #faf8ff;\n  text-align: right;\n}\n.gr-save-area button i {\n  font-size: 16px;\n  vertical-align: middle;\n  margin-right: 4px;\n}\n.gr-placeholder {\n  text-align: center;\n  padding: 80px 20px;\n  color: #bbb;\n}\n.gr-placeholder i {\n  font-size: 80px;\n  opacity: 0.5;\n  display: block;\n  margin-bottom: 16px;\n}\n.gr-placeholder h3 {\n  font-size: 18px;\n  color: #888;\n  margin: 0 0 6px;\n}\n.gr-placeholder p {\n  font-size: 13px;\n  margin: 0;\n  color: #aaa;\n}"

/***/ }),

/***/ "./src/app/patrol/route-template/route-template.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/patrol/route-template/route-template.component.ts ***!
  \*******************************************************************/
/*! exports provided: RouteTemplateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RouteTemplateComponent", function() { return RouteTemplateComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_services_DatabaseService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/_services/DatabaseService */ "./src/_services/DatabaseService.ts");
/* harmony import */ var ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng6-toastr-notifications */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/ng6-toastr-notifications/fesm5/ng6-toastr-notifications.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/router/fesm5/router.js");





var RouteTemplateComponent = /** @class */ (function () {
    function RouteTemplateComponent(serve, toast, router) {
        this.serve = serve;
        this.toast = toast;
        this.router = router;
        this.routes = [];
        this.allCheckpoints = [];
        this.assignments = [];
        this.plantOptions = ['Hosiarpur', 'Chamarajanagar'];
        this.selectedRouteId = 0;
        this.selectedRouteName = '';
        this.selectedRoutePlant = '';
        this.loadingRoutes = false;
        this.loadingDetail = false;
        this.saving = false;
        this.savingName = false;
        this.showAddForm = false;
        this.newRouteName = '';
        this.newRoutePlant = '';
        this.addingRoute = false;
        this.editingName = false;
        this.editName = '';
        this.editPlant = '';
    }
    RouteTemplateComponent.prototype.ngOnInit = function () { this.loadRoutes(); };
    RouteTemplateComponent.prototype.loadRoutes = function () {
        var _this = this;
        this.loadingRoutes = true;
        this.serve.post_rqst({}, 'Patrol/getRouteTemplateList').subscribe(function (result) {
            _this.loadingRoutes = false;
            if (result['statusCode'] == 200) {
                _this.routes = result['result'] || [];
            }
        }, function () { _this.loadingRoutes = false; });
    };
    RouteTemplateComponent.prototype.selectRoute = function (route) {
        this.selectedRouteId = route.id;
        this.selectedRouteName = route.name;
        this.selectedRoutePlant = route.plant || '';
        this.editName = route.name;
        this.editPlant = route.plant || '';
        this.editingName = false;
        this.loadDetail(route.id);
    };
    RouteTemplateComponent.prototype.loadDetail = function (id) {
        var _this = this;
        this.loadingDetail = true;
        this.assignments = [];
        this.serve.post_rqst({ id: id }, 'Patrol/getRouteTemplateDetail').subscribe(function (result) {
            _this.loadingDetail = false;
            if (result['statusCode'] == 200) {
                var all = result['all_checkpoints'] || [];
                var assigned_1 = result['assigned'] || [];
                _this.assignments = all.map(function (cp) {
                    var found = assigned_1.find(function (a) { return a.checkpoint_id == cp.id; });
                    return {
                        checkpoint_id: cp.id,
                        code: cp.code,
                        name: cp.name,
                        location: cp.location || '',
                        assigned: !!found,
                        sequence_no: found ? found.sequence_no : null,
                    };
                });
                _this.assignments.sort(function (a, b) {
                    if (a.assigned && !b.assigned)
                        return -1;
                    if (!a.assigned && b.assigned)
                        return 1;
                    if (a.assigned && b.assigned)
                        return (a.sequence_no || 0) - (b.sequence_no || 0);
                    return 0;
                });
            }
        }, function () { _this.loadingDetail = false; });
    };
    RouteTemplateComponent.prototype.addRoute = function () {
        var _this = this;
        if (!this.newRouteName.trim()) {
            this.toast.warningToastr('Enter a route name');
            return;
        }
        if (!this.newRoutePlant) {
            this.toast.warningToastr('Select a plant');
            return;
        }
        this.addingRoute = true;
        this.serve.post_rqst({ name: this.newRouteName.trim(), plant: this.newRoutePlant }, 'Patrol/addRouteTemplate').subscribe(function (result) {
            _this.addingRoute = false;
            if (result['statusCode'] == 200) {
                _this.toast.successToastr('Route created');
                _this.newRouteName = '';
                _this.newRoutePlant = '';
                _this.showAddForm = false;
                _this.loadRoutes();
            }
            else {
                _this.toast.errorToastr(result['statusMsg'] || 'Failed');
            }
        }, function () { _this.addingRoute = false; _this.toast.errorToastr('Request failed'); });
    };
    RouteTemplateComponent.prototype.saveRouteName = function () {
        var _this = this;
        if (!this.editName.trim()) {
            this.toast.warningToastr('Enter a name');
            return;
        }
        this.savingName = true;
        this.serve.post_rqst({ id: this.selectedRouteId, name: this.editName.trim(), plant: this.editPlant }, 'Patrol/editRouteTemplate').subscribe(function (result) {
            _this.savingName = false;
            if (result['statusCode'] == 200) {
                _this.toast.successToastr('Route updated');
                _this.selectedRouteName = _this.editName.trim();
                _this.selectedRoutePlant = _this.editPlant;
                _this.editingName = false;
                _this.loadRoutes();
            }
            else {
                _this.toast.errorToastr(result['statusMsg'] || 'Failed');
            }
        }, function () { _this.savingName = false; });
    };
    RouteTemplateComponent.prototype.deleteRoute = function (route) {
        var _this = this;
        if (!confirm("Delete route \"" + route.name + "\"?"))
            return;
        this.serve.post_rqst({ id: route.id }, 'Patrol/deleteRouteTemplate').subscribe(function (result) {
            if (result['statusCode'] == 200) {
                _this.toast.successToastr('Route deleted');
                if (_this.selectedRouteId == route.id) {
                    _this.selectedRouteId = 0;
                    _this.assignments = [];
                }
                _this.loadRoutes();
            }
        });
    };
    RouteTemplateComponent.prototype.toggleAssign = function (row) {
        row.assigned = !row.assigned;
        if (!row.assigned)
            row.sequence_no = null;
        else
            row.sequence_no = this.getNextSeq();
    };
    RouteTemplateComponent.prototype.getNextSeq = function () {
        var used = this.assignments.filter(function (a) { return a.assigned && a.sequence_no; }).map(function (a) { return +a.sequence_no; });
        return used.length ? Math.max.apply(Math, used) + 1 : 1;
    };
    RouteTemplateComponent.prototype.moveUp = function (index) {
        var _a;
        if (index === 0)
            return;
        var aIdx = this.assignments.indexOf(this.assignedRows[index]);
        var bIdx = this.assignments.indexOf(this.assignedRows[index - 1]);
        _a = [this.assignments[bIdx], this.assignments[aIdx]], this.assignments[aIdx] = _a[0], this.assignments[bIdx] = _a[1];
        this.resequence();
    };
    RouteTemplateComponent.prototype.moveDown = function (index) {
        var _a;
        if (index === this.assignedRows.length - 1)
            return;
        var aIdx = this.assignments.indexOf(this.assignedRows[index]);
        var bIdx = this.assignments.indexOf(this.assignedRows[index + 1]);
        _a = [this.assignments[bIdx], this.assignments[aIdx]], this.assignments[aIdx] = _a[0], this.assignments[bIdx] = _a[1];
        this.resequence();
    };
    RouteTemplateComponent.prototype.resequence = function () {
        var seq = 1;
        this.assignments.forEach(function (a) { if (a.assigned)
            a.sequence_no = seq++; });
    };
    Object.defineProperty(RouteTemplateComponent.prototype, "assignedRows", {
        get: function () {
            return this.assignments.filter(function (a) { return a.assigned; }).sort(function (a, b) { return a.sequence_no - b.sequence_no; });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(RouteTemplateComponent.prototype, "unassignedRows", {
        get: function () {
            return this.assignments.filter(function (a) { return !a.assigned; });
        },
        enumerable: true,
        configurable: true
    });
    RouteTemplateComponent.prototype.saveCheckpoints = function () {
        var _this = this;
        if (!this.selectedRouteId)
            return;
        var toSave = this.assignments
            .filter(function (a) { return a.assigned && a.sequence_no; })
            .map(function (a) { return ({ checkpoint_id: a.checkpoint_id, sequence_no: +a.sequence_no }); });
        this.saving = true;
        this.serve.post_rqst({ route_id: this.selectedRouteId, checkpoints: toSave }, 'Patrol/saveRouteTemplateCheckpoints').subscribe(function (result) {
            _this.saving = false;
            if (result['statusCode'] == 200) {
                _this.toast.successToastr('Checkpoints saved');
                _this.loadRoutes();
            }
            else {
                _this.toast.errorToastr(result['statusMsg'] || 'Failed to save');
            }
        }, function () { _this.saving = false; _this.toast.errorToastr('Request failed'); });
    };
    RouteTemplateComponent.prototype.goToGuardRoute = function () { this.router.navigate(['/patrol/guard-route']); };
    RouteTemplateComponent.prototype.goToCheckpoints = function () { this.router.navigate(['/patrol']); };
    RouteTemplateComponent.prototype.goToRounds = function () { this.router.navigate(['/patrol/rounds']); };
    RouteTemplateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-route-template',
            template: __webpack_require__(/*! ./route-template.component.html */ "./src/app/patrol/route-template/route-template.component.html"),
            styles: [__webpack_require__(/*! ./route-template.component.scss */ "./src/app/patrol/route-template/route-template.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_services_DatabaseService__WEBPACK_IMPORTED_MODULE_2__["DatabaseService"],
            ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_3__["ToastrManager"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], RouteTemplateComponent);
    return RouteTemplateComponent;
}());



/***/ })

}]);