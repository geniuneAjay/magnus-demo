(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["salary-calculator-salary-calculator-module"],{

/***/ "./src/app/salary-calculator/inr.pipe.ts":
/*!***********************************************!*\
  !*** ./src/app/salary-calculator/inr.pipe.ts ***!
  \***********************************************/
/*! exports provided: InrPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InrPipe", function() { return InrPipe; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/core/fesm5/core.js");


var InrPipe = /** @class */ (function () {
    function InrPipe() {
    }
    InrPipe.prototype.transform = function (value) {
        var num = parseFloat(value);
        if (isNaN(num))
            return '';
        return num.toLocaleString('en-IN', { maximumFractionDigits: 0 });
    };
    InrPipe = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Pipe"])({ name: 'inr' })
    ], InrPipe);
    return InrPipe;
}());



/***/ }),

/***/ "./src/app/salary-calculator/salary-calculator-form/salary-calculator-form.component.html":
/*!************************************************************************************************!*\
  !*** ./src/app/salary-calculator/salary-calculator-form/salary-calculator-form.component.html ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-container\">\r\n    <div class=\"tools-container\">\r\n        <h2>{{editId ? 'Update Salary Calculation' : 'New Salary Calculation'}}</h2>\r\n        <div class=\"left-auto df ac flex-gap-10\">\r\n            <button mat-raised-button color=\"primary\" (click)=\"saveRecord()\" [disabled]=\"isSaving || !salaryResult\">\r\n                <i class=\"material-icons\" style=\"font-size:16px;vertical-align:middle;margin-right:4px;\">save</i>\r\n                {{isSaving ? 'Saving...' : 'Save'}}\r\n            </button>\r\n            <button mat-raised-button style=\"background:#1565c0;color:#fff;\" (click)=\"downloadPdf()\" [disabled]=\"isDownloading || !salaryResult\">\r\n                <i class=\"material-icons\" style=\"font-size:16px;vertical-align:middle;margin-right:4px;\">picture_as_pdf</i>\r\n                {{isDownloading ? 'Generating...' : 'Download PDF'}}\r\n            </button>\r\n            <button mat-raised-button style=\"background:#0891b2;color:#fff;\" (click)=\"showEmailInput=!showEmailInput\" [disabled]=\"!salaryResult\">\r\n                <i class=\"material-icons\" style=\"font-size:16px;vertical-align:middle;margin-right:4px;\">email</i>\r\n                Send Email\r\n            </button>\r\n            <button mat-icon-button matTooltip=\"Back to list\" (click)=\"goBack()\">\r\n                <i class=\"material-icons\">arrow_back</i>\r\n            </button>\r\n        </div>\r\n    </div>\r\n\r\n    <div style=\"height:calc(100vh - 104px);overflow-y:auto;\">\r\n        <div style=\"max-width:1100px;margin:20px auto;padding:0 16px;\">\r\n\r\n            <!-- Employee Info Card -->\r\n            <div style=\"background:#fff;border:1px solid #e2e8f0;border-radius:10px;padding:16px;margin-bottom:14px;\">\r\n                <p style=\"font-size:12px;font-weight:600;color:#64748b;margin:0 0 10px 0;text-transform:uppercase;letter-spacing:0.5px;\">Employee Details</p>\r\n                <div style=\"display:flex;gap:10px;flex-wrap:nowrap;\">\r\n                    <mat-form-field appearance=\"outline\" style=\"flex:2;\">\r\n                        <mat-label>Employee Name *</mat-label>\r\n                        <input matInput [(ngModel)]=\"formData.emp_name\" placeholder=\"Enter name\">\r\n                    </mat-form-field>\r\n                    <mat-form-field appearance=\"outline\" style=\"flex:1;\">\r\n                        <mat-label>Emp Code</mat-label>\r\n                        <input matInput [(ngModel)]=\"formData.emp_code\" placeholder=\"Code\">\r\n                    </mat-form-field>\r\n                    <mat-form-field appearance=\"outline\" style=\"flex:2;\">\r\n                        <mat-label>Designation</mat-label>\r\n                        <mat-select [(ngModel)]=\"formData.designation_id\" (selectionChange)=\"onMainDesig()\" (openedChange)=\"resetDesigFilter()\">\r\n                            <mat-option>\r\n                                <ngx-mat-select-search noEntriesFoundLabel=\"No designation\" placeholderLabel=\"Search..\"\r\n                                    (keyup)=\"filterDesig($event.target.value)\"></ngx-mat-select-search>\r\n                            </mat-option>\r\n                            <mat-option *ngFor=\"let d of filteredDesignations\" [value]=\"d.id\">{{d.role_name}}</mat-option>\r\n                        </mat-select>\r\n                    </mat-form-field>\r\n                    <mat-form-field appearance=\"outline\" style=\"flex:1.5;\">\r\n                        <mat-label>Location</mat-label>\r\n                        <input matInput [(ngModel)]=\"formData.location\" placeholder=\"Location\">\r\n                    </mat-form-field>\r\n                    <mat-form-field appearance=\"outline\" style=\"flex:1.5;\">\r\n                        <mat-label>W.E.F Date</mat-label>\r\n                        <input matInput type=\"date\" [(ngModel)]=\"formData.wef_date\">\r\n                    </mat-form-field>\r\n                </div>\r\n            </div>\r\n\r\n            <!-- Promotion / Increment Letter Card -->\r\n            <div style=\"background:#fff;border:1px solid #e2e8f0;border-radius:10px;padding:16px;margin-bottom:14px;\">\r\n                <div style=\"display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:10px;margin-bottom:10px;\">\r\n                    <p style=\"font-size:12px;font-weight:600;color:#64748b;margin:0;text-transform:uppercase;letter-spacing:0.5px;\">Promotion / Increment Letter</p>\r\n                    <div style=\"display:flex;gap:18px;align-items:center;\">\r\n                        <mat-checkbox [(ngModel)]=\"formData.has_promotion\"><span style=\"font-size:13px;font-weight:500;\">Promotion</span></mat-checkbox>\r\n                        <mat-checkbox [(ngModel)]=\"formData.has_increment\"><span style=\"font-size:13px;font-weight:500;\">Increment</span></mat-checkbox>\r\n                    </div>\r\n                </div>\r\n                <div style=\"display:flex;gap:10px;flex-wrap:wrap;\">\r\n                    <mat-form-field appearance=\"outline\" style=\"flex:1;min-width:180px;\">\r\n                        <mat-label>Older Designation</mat-label>\r\n                        <mat-select [(ngModel)]=\"formData.older_designation\" (openedChange)=\"resetDesigFilter()\">\r\n                            <mat-option>\r\n                                <ngx-mat-select-search noEntriesFoundLabel=\"No designation\" placeholderLabel=\"Search..\"\r\n                                    (keyup)=\"filterDesig($event.target.value)\"></ngx-mat-select-search>\r\n                            </mat-option>\r\n                            <mat-option *ngFor=\"let d of filteredDesignations\" [value]=\"d.role_name\">{{d.role_name}}</mat-option>\r\n                        </mat-select>\r\n                    </mat-form-field>\r\n                    <mat-form-field appearance=\"outline\" style=\"flex:1;min-width:180px;\">\r\n                        <mat-label>Newer Designation</mat-label>\r\n                        <mat-select [(ngModel)]=\"formData.new_designation_id\" (selectionChange)=\"onNewDesig()\" (openedChange)=\"resetDesigFilter()\">\r\n                            <mat-option>\r\n                                <ngx-mat-select-search noEntriesFoundLabel=\"No designation\" placeholderLabel=\"Search..\"\r\n                                    (keyup)=\"filterDesig($event.target.value)\"></ngx-mat-select-search>\r\n                            </mat-option>\r\n                            <mat-option *ngFor=\"let d of filteredDesignations\" [value]=\"d.id\">{{d.role_name}}</mat-option>\r\n                        </mat-select>\r\n                    </mat-form-field>\r\n                    <mat-form-field appearance=\"outline\" style=\"flex:1;min-width:130px;\">\r\n                        <mat-label>Current CTC</mat-label>\r\n                        <input matInput [(ngModel)]=\"formData.current_ctc\" placeholder=\"e.g. 7.75 Lakhs\">\r\n                    </mat-form-field>\r\n                    <mat-form-field appearance=\"outline\" style=\"flex:1;min-width:130px;\">\r\n                        <mat-label>Increment</mat-label>\r\n                        <input matInput [(ngModel)]=\"formData.increment_amount\" placeholder=\"e.g. 1.25 Lakhs\">\r\n                    </mat-form-field>\r\n                    <mat-form-field appearance=\"outline\" style=\"flex:1;min-width:130px;\">\r\n                        <mat-label>New CTC</mat-label>\r\n                        <input matInput [(ngModel)]=\"formData.new_ctc\" placeholder=\"e.g. 9.00 Lakhs\">\r\n                    </mat-form-field>\r\n                </div>\r\n                <div style=\"display:flex;justify-content:flex-end;\">\r\n                    <button mat-raised-button style=\"background:#7c3aed;color:#fff;\" (click)=\"generateLetterPdf()\" [disabled]=\"isGeneratingLetter || !salaryResult\">\r\n                        <i class=\"material-icons\" style=\"font-size:16px;vertical-align:middle;margin-right:4px;\">description</i>\r\n                        {{isGeneratingLetter ? 'Generating...' : 'Generate Letter PDF'}}\r\n                    </button>\r\n                </div>\r\n            </div>\r\n\r\n            <div style=\"display:flex;gap:16px;align-items:flex-start;\">\r\n            <!-- Email Send Box -->\r\n            <div *ngIf=\"showEmailInput\" style=\"background:#f0f9ff;border:1px solid #bae6fd;border-radius:10px;padding:14px;margin-bottom:14px;display:flex;gap:10px;align-items:center;flex-wrap:wrap;\">\r\n                <i class=\"material-icons\" style=\"color:#0891b2;font-size:22px;\">email</i>\r\n                <mat-form-field appearance=\"outline\" style=\"flex:1;min-width:220px;margin:0;\">\r\n                    <mat-label>Recipient Email</mat-label>\r\n                    <input matInput type=\"email\" [(ngModel)]=\"toEmail\" placeholder=\"example@email.com\" (keyup.enter)=\"sendEmail()\">\r\n                </mat-form-field>\r\n                <button mat-raised-button style=\"background:#0891b2;color:#fff;height:56px;\" (click)=\"sendEmail()\" [disabled]=\"isSendingEmail\">\r\n                    <i class=\"material-icons\" style=\"font-size:16px;vertical-align:middle;margin-right:4px;\">send</i>\r\n                    {{isSendingEmail ? 'Sending...' : 'Send'}}\r\n                </button>\r\n                <button mat-icon-button (click)=\"showEmailInput=false\" matTooltip=\"Close\">\r\n                    <i class=\"material-icons\">close</i>\r\n                </button>\r\n            </div>\r\n\r\n            <!-- Sheet Type + Input Mode Card -->\r\n            <div style=\"background:#fff;border:1px solid #e2e8f0;border-radius:10px;padding:16px;margin-bottom:14px;flex:1;\">\r\n                <p style=\"font-size:12px;font-weight:600;color:#64748b;margin:0 0 10px 0;text-transform:uppercase;letter-spacing:0.5px;\">Sheet Type</p>\r\n                <div style=\"display:flex;gap:0;border:1px solid #d1d5db;border-radius:8px;overflow:hidden;margin-bottom:14px;\">\r\n                    <button type=\"button\" (click)=\"formData.sheet_type='PLANT HSP';onSheetTypeChange()\"\r\n                        [style.background]=\"formData.sheet_type=='PLANT HSP' ? '#1565c0' : '#fff'\"\r\n                        [style.color]=\"formData.sheet_type=='PLANT HSP' ? '#fff' : '#374151'\"\r\n                        style=\"flex:1;padding:10px 6px;font-size:12px;font-weight:600;border:none;border-right:1px solid #d1d5db;cursor:pointer;transition:all 0.2s;\">\r\n                        PLANT HSP<br><span style=\"font-size:10px;font-weight:400;opacity:0.85;\">Hoshiarpur</span>\r\n                    </button>\r\n                    <button type=\"button\" (click)=\"formData.sheet_type='KN PLANT';onSheetTypeChange()\"\r\n                        [style.background]=\"formData.sheet_type=='KN PLANT' ? '#1565c0' : '#fff'\"\r\n                        [style.color]=\"formData.sheet_type=='KN PLANT' ? '#fff' : '#374151'\"\r\n                        style=\"flex:1;padding:10px 6px;font-size:12px;font-weight:600;border:none;border-right:1px solid #d1d5db;cursor:pointer;transition:all 0.2s;\">\r\n                        KN PLANT<br><span style=\"font-size:10px;font-weight:400;opacity:0.85;\">Chamrajnagar</span>\r\n                    </button>\r\n                    <button type=\"button\" (click)=\"formData.sheet_type='SALES';onSheetTypeChange()\"\r\n                        [style.background]=\"formData.sheet_type=='SALES' ? '#1565c0' : '#fff'\"\r\n                        [style.color]=\"formData.sheet_type=='SALES' ? '#fff' : '#374151'\"\r\n                        style=\"flex:1;padding:10px 6px;font-size:12px;font-weight:600;border:none;cursor:pointer;transition:all 0.2s;\">\r\n                        SALES<br><span style=\"font-size:10px;font-weight:400;opacity:0.85;\">Sales Staff</span>\r\n                    </button>\r\n                </div>\r\n\r\n                <p style=\"font-size:12px;font-weight:600;color:#64748b;margin:0 0 8px 0;text-transform:uppercase;letter-spacing:0.5px;\">Input Mode</p>\r\n                <div style=\"display:flex;gap:0;border:1px solid #d1d5db;border-radius:8px;overflow:hidden;margin-bottom:14px;\">\r\n                    <button type=\"button\" (click)=\"formData.input_mode='gross';onInputModeChange()\"\r\n                        [style.background]=\"formData.input_mode=='gross' ? '#2e7d32' : '#fff'\"\r\n                        [style.color]=\"formData.input_mode=='gross' ? '#fff' : '#374151'\"\r\n                        style=\"flex:1;padding:10px;font-size:13px;font-weight:600;border:none;border-right:1px solid #d1d5db;cursor:pointer;\">\r\n                        <i class=\"material-icons\" style=\"font-size:16px;vertical-align:middle;margin-right:4px;\">payments</i>\r\n                        Enter Gross\r\n                    </button>\r\n                    <button type=\"button\" (click)=\"formData.input_mode='ctc';onInputModeChange()\"\r\n                        [style.background]=\"formData.input_mode=='ctc' ? '#2e7d32' : '#fff'\"\r\n                        [style.color]=\"formData.input_mode=='ctc' ? '#fff' : '#374151'\"\r\n                        style=\"flex:1;padding:10px;font-size:13px;font-weight:600;border:none;cursor:pointer;\">\r\n                        <i class=\"material-icons\" style=\"font-size:16px;vertical-align:middle;margin-right:4px;\">account_balance_wallet</i>\r\n                        Enter CTC / Month\r\n                    </button>\r\n                </div>\r\n\r\n                <!-- Gross / CTC Input -->\r\n                <div style=\"display:flex;gap:10px;\">\r\n                    <mat-form-field *ngIf=\"formData.input_mode=='gross'\" appearance=\"outline\" style=\"flex:1;\">\r\n                        <mat-label>Gross Salary (₹)</mat-label>\r\n                        <input matInput type=\"number\" [(ngModel)]=\"formData.gross\" (ngModelChange)=\"onGrossChange()\" placeholder=\"Enter gross salary\">\r\n                    </mat-form-field>\r\n                    <ng-container *ngIf=\"formData.input_mode=='ctc'\">\r\n                        <mat-form-field appearance=\"outline\" style=\"flex:1;\">\r\n                            <mat-label>CTC per Month (₹)</mat-label>\r\n                            <input matInput type=\"number\" [(ngModel)]=\"formData.ctc_input\" (ngModelChange)=\"onCtcChange()\">\r\n                        </mat-form-field>\r\n                        <mat-form-field appearance=\"outline\" style=\"flex:1;\" *ngIf=\"formData.gross\">\r\n                            <mat-label>Calculated Gross (₹)</mat-label>\r\n                            <input matInput [value]=\"formData.gross | inr\" readonly style=\"color:#1565c0;font-weight:600;\">\r\n                        </mat-form-field>\r\n                    </ng-container>\r\n                </div>\r\n\r\n                <!-- Checkboxes -->\r\n                <div style=\"display:flex;gap:20px;flex-wrap:wrap;padding:4px 0 8px 0;\">\r\n                    <div style=\"display:flex;flex-direction:column;gap:4px;\">\r\n                        <mat-checkbox [(ngModel)]=\"formData.has_pf\" (ngModelChange)=\"recalculate()\">\r\n                            <span style=\"font-size:13px;font-weight:500;\">PF (Employee + Employer)</span>\r\n                        </mat-checkbox>\r\n                        <mat-checkbox [(ngModel)]=\"formData.has_pf_higher\" (ngModelChange)=\"recalculate()\" [disabled]=\"!formData.has_pf\" style=\"margin-left:22px;\">\r\n                            <span style=\"font-size:12px;color:#1565c0;font-weight:500;\">↳ Higher Side (Gross−HRA) × 12%</span>\r\n                        </mat-checkbox>\r\n                    </div>\r\n                    <mat-checkbox [(ngModel)]=\"formData.has_bonus\" (ngModelChange)=\"recalculate()\">\r\n                        <span style=\"font-size:13px;font-weight:500;\">Bonus</span>\r\n                    </mat-checkbox>\r\n                    <mat-checkbox [(ngModel)]=\"formData.has_leave\" (ngModelChange)=\"recalculate()\">\r\n                        <span style=\"font-size:13px;font-weight:500;\">Leave With Wages</span>\r\n                    </mat-checkbox>\r\n                    <mat-checkbox [(ngModel)]=\"formData.has_gratuity\" (ngModelChange)=\"recalculate()\">\r\n                        <span style=\"font-size:13px;font-weight:500;\">Gratuity</span>\r\n                    </mat-checkbox>\r\n                </div>\r\n            </div>\r\n\r\n            <!-- Salary Result Card -->\r\n            <div *ngIf=\"salaryResult\" style=\"background:#fff;border:1px solid #e2e8f0;border-radius:10px;padding:16px;margin-bottom:14px;flex:1.2;\">\r\n\r\n                <!-- Include in Gross chips -->\r\n                <div style=\"display:flex;flex-wrap:wrap;gap:8px;align-items:center;margin-bottom:10px;\">\r\n                    <span style=\"font-size:12px;color:#555;font-weight:600;\">Include in Gross:</span>\r\n                    <label style=\"display:flex;align-items:center;gap:4px;font-size:12px;cursor:pointer;background:#f1f5f9;border:1px solid #cbd5e1;border-radius:16px;padding:3px 10px;\">\r\n                        <input type=\"checkbox\" [(ngModel)]=\"formData.has_hra\" (ngModelChange)=\"recalculate()\" style=\"cursor:pointer;\"> HRA\r\n                    </label>\r\n                    <label style=\"display:flex;align-items:center;gap:4px;font-size:12px;cursor:pointer;background:#f1f5f9;border:1px solid #cbd5e1;border-radius:16px;padding:3px 10px;\">\r\n                        <input type=\"checkbox\" [(ngModel)]=\"formData.has_conveyance\" (ngModelChange)=\"recalculate()\" style=\"cursor:pointer;\"> Conveyance\r\n                    </label>\r\n                    <label style=\"display:flex;align-items:center;gap:4px;font-size:12px;cursor:pointer;background:#f1f5f9;border:1px solid #cbd5e1;border-radius:16px;padding:3px 10px;\">\r\n                        <input type=\"checkbox\" [(ngModel)]=\"formData.has_medical\" (ngModelChange)=\"recalculate()\" style=\"cursor:pointer;\"> Medical\r\n                    </label>\r\n                    <label style=\"display:flex;align-items:center;gap:4px;font-size:12px;cursor:pointer;background:#f1f5f9;border:1px solid #cbd5e1;border-radius:16px;padding:3px 10px;\">\r\n                        <input type=\"checkbox\" [(ngModel)]=\"formData.has_education\" (ngModelChange)=\"recalculate()\" style=\"cursor:pointer;\"> Education\r\n                    </label>\r\n                </div>\r\n\r\n                <!-- Employee name -->\r\n                <div *ngIf=\"formData.emp_name\" style=\"margin-bottom:8px;\">\r\n                    <span style=\"font-size:14px;font-weight:700;color:#1a1a1a;\">{{formData.emp_name}}</span>\r\n                    <span *ngIf=\"formData.designation\" style=\"font-size:12px;color:#555;margin-left:6px;\">— {{formData.designation}}</span>\r\n                </div>\r\n\r\n                <!-- Salary Table -->\r\n                <table style=\"width:100%;border-collapse:collapse;font-size:12.5px;table-layout:fixed;\">\r\n                    <colgroup>\r\n                        <col style=\"width:55%;\"><col style=\"width:22.5%;\"><col style=\"width:22.5%;\">\r\n                    </colgroup>\r\n                    <thead>\r\n                        <tr style=\"background:#2e7d32;color:#fff;\">\r\n                            <th style=\"padding:6px 10px;text-align:left;font-weight:600;border:1px solid #1b5e20;\">\r\n                                Perks\r\n                                <span (click)=\"showFormulas=!showFormulas\" matTooltip=\"{{ showFormulas ? 'Hide Formulas' : 'Show Formulas' }}\"\r\n                                    style=\"cursor:pointer;margin-left:8px;display:inline-flex;align-items:center;background:rgba(255,255,255,0.18);border-radius:50%;padding:2px;vertical-align:middle;\">\r\n                                    <i class=\"material-icons\" style=\"font-size:16px;\">{{ showFormulas ? 'visibility_off' : 'functions' }}</i>\r\n                                </span>\r\n                            </th>\r\n                            <th style=\"padding:6px 10px;text-align:right;font-weight:600;border:1px solid #1b5e20;\">Per Month</th>\r\n                            <th style=\"padding:6px 10px;text-align:right;font-weight:600;border:1px solid #1b5e20;\">Per Annum</th>\r\n                        </tr>\r\n                    </thead>\r\n                    <tbody>\r\n                        <tr style=\"background:#f9f9f9;\">\r\n                            <td style=\"padding:4px 10px;border:1px solid #e0e0e0;\">Basic<br><small *ngIf=\"showFormulas\" style=\"color:#9ca3af;font-size:10px;\">{{ getBasicFormula() }}</small></td>\r\n                            <td style=\"padding:6px 12px;text-align:right;border:1px solid #e0e0e0;\">{{salaryResult.basic | inr}}</td>\r\n                            <td style=\"padding:6px 12px;text-align:right;border:1px solid #e0e0e0;\">{{salaryResult.basic * 12 | inr}}</td>\r\n                        </tr>\r\n                        <tr *ngIf=\"formData.has_hra\">\r\n                            <td style=\"padding:4px 10px;border:1px solid #e0e0e0;\">HRA<br><small *ngIf=\"showFormulas\" style=\"color:#9ca3af;font-size:10px;\">{{ formData.gross < 38000 ? (formData.sheet_type === 'PLANT HSP' || formData.sheet_type === 'KN PLANT' ? 'Remaining × 40%' : 'Remaining × 33.3%') : (formData.sheet_type === 'PLANT HSP' || formData.sheet_type === 'KN PLANT' ? 'Basic × 20%' : 'Gross × 20%') }}</small></td>\r\n                            <td style=\"padding:6px 12px;text-align:right;border:1px solid #e0e0e0;\">{{salaryResult.hra | inr}}</td>\r\n                            <td style=\"padding:6px 12px;text-align:right;border:1px solid #e0e0e0;\">{{salaryResult.hra * 12 | inr}}</td>\r\n                        </tr>\r\n                        <tr style=\"background:#f9f9f9;\" *ngIf=\"formData.has_conveyance\">\r\n                            <td style=\"padding:4px 10px;border:1px solid #e0e0e0;\">Conveyance Allowance<br><small *ngIf=\"showFormulas\" style=\"color:#9ca3af;font-size:10px;\">{{ formData.gross < 38000 ? (formData.sheet_type === 'PLANT HSP' || formData.sheet_type === 'KN PLANT' ? 'Remaining × 30%' : 'Remaining × 16.7%') : (formData.sheet_type === 'PLANT HSP' || formData.sheet_type === 'KN PLANT' ? 'Basic × 15%' : 'Gross × 10%') }}</small></td>\r\n                            <td style=\"padding:6px 12px;text-align:right;border:1px solid #e0e0e0;\">{{salaryResult.conveyance | inr}}</td>\r\n                            <td style=\"padding:6px 12px;text-align:right;border:1px solid #e0e0e0;\">{{salaryResult.conveyance * 12 | inr}}</td>\r\n                        </tr>\r\n                        <tr *ngIf=\"formData.has_medical\">\r\n                            <td style=\"padding:4px 10px;border:1px solid #e0e0e0;\">Medical Allowance<br><small *ngIf=\"showFormulas\" style=\"color:#9ca3af;font-size:10px;\">{{ formData.gross < 38000 ? (formData.sheet_type === 'PLANT HSP' || formData.sheet_type === 'KN PLANT' ? 'Remaining × 20%' : 'Remaining × 25%') : (formData.sheet_type === 'PLANT HSP' || formData.sheet_type === 'KN PLANT' ? 'Basic × 10%' : 'Gross × 15%') }}</small></td>\r\n                            <td style=\"padding:6px 12px;text-align:right;border:1px solid #e0e0e0;\">{{salaryResult.medical | inr}}</td>\r\n                            <td style=\"padding:6px 12px;text-align:right;border:1px solid #e0e0e0;\">{{salaryResult.medical * 12 | inr}}</td>\r\n                        </tr>\r\n                        <tr style=\"background:#f9f9f9;\" *ngIf=\"formData.has_education\">\r\n                            <td style=\"padding:4px 10px;border:1px solid #e0e0e0;\">Education Allowance<br><small *ngIf=\"showFormulas\" style=\"color:#9ca3af;font-size:10px;\">{{ formData.gross < 38000 ? 'Gross − Basic − HRA − Conv − Med' : (formData.sheet_type === 'PLANT HSP' || formData.sheet_type === 'KN PLANT' ? 'Basic × 5%' : 'Gross × 15%') }}</small></td>\r\n                            <td style=\"padding:6px 12px;text-align:right;border:1px solid #e0e0e0;\">{{salaryResult.education | inr}}</td>\r\n                            <td style=\"padding:6px 12px;text-align:right;border:1px solid #e0e0e0;\">{{salaryResult.education * 12 | inr}}</td>\r\n                        </tr>\r\n                        <tr style=\"background:#2e7d32;color:#fff;font-weight:700;\">\r\n                            <td style=\"padding:6px 10px;border:1px solid #1b5e20;\">Gross</td>\r\n                            <td style=\"padding:8px 12px;text-align:right;border:1px solid #1b5e20;\">{{formData.gross | inr}}</td>\r\n                            <td style=\"padding:8px 12px;text-align:right;border:1px solid #1b5e20;\">{{salaryResult.gross_annual | inr}}</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td style=\"padding:4px 10px;border:1px solid #e0e0e0;\">PF Deduction (Employee)<br><small *ngIf=\"showFormulas\" style=\"color:#9ca3af;font-size:10px;\">{{ formData.has_pf_higher ? '(Gross − HRA) × 12%' : '₹1,800 Fixed' }}</small></td>\r\n                            <td style=\"padding:6px 12px;text-align:right;border:1px solid #e0e0e0;\">{{salaryResult.pf_employee | inr}}</td>\r\n                            <td style=\"padding:6px 12px;text-align:right;border:1px solid #e0e0e0;\">{{salaryResult.pf_employee * 12 | inr}}</td>\r\n                        </tr>\r\n                        <tr style=\"background:#f9f9f9;\">\r\n                            <td style=\"padding:4px 10px;border:1px solid #e0e0e0;\">ESI Deduction (Employee)<br><small *ngIf=\"showFormulas\" style=\"color:#9ca3af;font-size:10px;\">Basic × 0.75% (only if Basic ≤ ₹21,000)</small></td>\r\n                            <td style=\"padding:6px 12px;text-align:right;border:1px solid #e0e0e0;\">{{salaryResult.esi_employee | inr}}</td>\r\n                            <td style=\"padding:6px 12px;text-align:right;border:1px solid #e0e0e0;\">{{salaryResult.esi_employee * 12 | inr}}</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td style=\"padding:4px 10px;border:1px solid #e0e0e0;\">P. Tax Deduction (Employee)<br><small *ngIf=\"showFormulas\" style=\"color:#9ca3af;font-size:10px;\">₹200 Fixed (only if Gross > ₹25,000)</small></td>\r\n                            <td style=\"padding:6px 12px;text-align:right;border:1px solid #e0e0e0;\">{{salaryResult.ptax | inr}}</td>\r\n                            <td style=\"padding:6px 12px;text-align:right;border:1px solid #e0e0e0;\">{{salaryResult.ptax * 12 | inr}}</td>\r\n                        </tr>\r\n                        <tr style=\"background:#f9f9f9;\">\r\n                            <td style=\"padding:4px 10px;border:1px solid #e0e0e0;\">LWF Deduction (Employee)<br><small *ngIf=\"showFormulas\" style=\"color:#9ca3af;font-size:10px;\">₹5 Fixed</small></td>\r\n                            <td style=\"padding:6px 12px;text-align:right;border:1px solid #e0e0e0;\">{{salaryResult.lwf | inr}}</td>\r\n                            <td style=\"padding:6px 12px;text-align:right;border:1px solid #e0e0e0;\">{{salaryResult.lwf * 12 | inr}}</td>\r\n                        </tr>\r\n                        <tr style=\"background:#2e7d32;color:#fff;font-weight:700;\">\r\n                            <td style=\"padding:6px 10px;border:1px solid #1b5e20;\">Net Payable</td>\r\n                            <td style=\"padding:8px 12px;text-align:right;border:1px solid #1b5e20;\">{{salaryResult.net_payable | inr}}</td>\r\n                            <td style=\"padding:8px 12px;text-align:right;border:1px solid #1b5e20;\">{{salaryResult.net_payable_annual | inr}}</td>\r\n                        </tr>\r\n                        <tr>\r\n                            <td style=\"padding:4px 10px;border:1px solid #e0e0e0;\">PF Contribution (Employer)</td>\r\n                            <td style=\"padding:6px 12px;text-align:right;border:1px solid #e0e0e0;\">{{salaryResult.pf_employer | inr}}</td>\r\n                            <td style=\"padding:6px 12px;text-align:right;border:1px solid #e0e0e0;\">{{salaryResult.pf_employer * 12 | inr}}</td>\r\n                        </tr>\r\n                        <tr style=\"background:#f9f9f9;\">\r\n                            <td style=\"padding:4px 10px;border:1px solid #e0e0e0;\">ESI Contribution (Employer)<br><small *ngIf=\"showFormulas\" style=\"color:#9ca3af;font-size:10px;\">Basic × 3.25% (only if Basic ≤ ₹21,000)</small></td>\r\n                            <td style=\"padding:6px 12px;text-align:right;border:1px solid #e0e0e0;\">{{salaryResult.esi_employer | inr}}</td>\r\n                            <td style=\"padding:6px 12px;text-align:right;border:1px solid #e0e0e0;\">{{salaryResult.esi_employer * 12 | inr}}</td>\r\n                        </tr>\r\n                        <tr *ngIf=\"formData.has_bonus\">\r\n                            <td style=\"padding:4px 10px;border:1px solid #e0e0e0;\">Bonus @ 8.33% (Annually)</td>\r\n                            <td style=\"padding:6px 12px;text-align:right;border:1px solid #e0e0e0;\">{{salaryResult.bonus_monthly | inr}}</td>\r\n                            <td style=\"padding:6px 12px;text-align:right;border:1px solid #e0e0e0;\">{{salaryResult.bonus_annual | inr}}</td>\r\n                        </tr>\r\n                        <tr style=\"background:#f9f9f9;\" *ngIf=\"formData.has_leave\">\r\n                            <td style=\"padding:4px 10px;border:1px solid #e0e0e0;\">Leave With Wages (Annually)</td>\r\n                            <td style=\"padding:6px 12px;text-align:right;border:1px solid #e0e0e0;\">{{salaryResult.leave_monthly | inr}}</td>\r\n                            <td style=\"padding:6px 12px;text-align:right;border:1px solid #e0e0e0;\">{{salaryResult.leave_annual | inr}}</td>\r\n                        </tr>\r\n                        <tr *ngIf=\"formData.has_gratuity\">\r\n                            <td style=\"padding:4px 10px;border:1px solid #e0e0e0;\">Gratuity</td>\r\n                            <td style=\"padding:6px 12px;text-align:right;border:1px solid #e0e0e0;\">{{salaryResult.gratuity_monthly | inr}}</td>\r\n                            <td style=\"padding:6px 12px;text-align:right;border:1px solid #e0e0e0;\">{{salaryResult.gratuity_annual | inr}}</td>\r\n                        </tr>\r\n                        <tr style=\"background:#2e7d32;color:#fff;font-weight:700;\">\r\n                            <td style=\"padding:6px 10px;border:1px solid #1b5e20;\">Total CTC</td>\r\n                            <td style=\"padding:8px 12px;text-align:right;border:1px solid #1b5e20;\">{{salaryResult.total_ctc | inr}}</td>\r\n                            <td style=\"padding:8px 12px;text-align:right;border:1px solid #1b5e20;\">{{salaryResult.total_ctc_annual | inr}}</td>\r\n                        </tr>\r\n                    </tbody>\r\n                </table>\r\n\r\n                <div style=\"margin-top:10px;font-size:11px;color:#555;line-height:1.8;\">\r\n                    <strong>Note :-</strong><br>\r\n                    Deductions - TDS and Professional Tax<br><br>\r\n                    Leave encashment will be paid yearly for the leave left out of 24 days. It will be calculated only on the Basic Salary. In each year 6 days (out of 24 days) balance leave will be carried forward next year into the leave bank which will be paid only after completion of 3 years\r\n                </div>\r\n            </div>\r\n            </div><!-- end flex row -->\r\n\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/salary-calculator/salary-calculator-form/salary-calculator-form.component.ts":
/*!**********************************************************************************************!*\
  !*** ./src/app/salary-calculator/salary-calculator-form/salary-calculator-form.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: SalaryCalculatorFormComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SalaryCalculatorFormComponent", function() { return SalaryCalculatorFormComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_services_DatabaseService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/_services/DatabaseService */ "./src/_services/DatabaseService.ts");
/* harmony import */ var ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng6-toastr-notifications */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/ng6-toastr-notifications/fesm5/ng6-toastr-notifications.js");





var SalaryCalculatorFormComponent = /** @class */ (function () {
    function SalaryCalculatorFormComponent(serve, router, route, toast) {
        this.serve = serve;
        this.router = router;
        this.route = route;
        this.toast = toast;
        this.isSaving = false;
        this.isDownloading = false;
        this.isSendingEmail = false;
        this.isGeneratingLetter = false;
        this.showEmailInput = false;
        this.showLetterBox = false;
        this.toEmail = '';
        this.showFormulas = false;
        this.salaryResult = null;
        this.editId = null;
        this.designations = [];
        this.filteredDesignations = [];
        this.formData = {
            emp_name: '', emp_code: '', designation: '', location: '', wef_date: '',
            sheet_type: 'KN PLANT', input_mode: 'gross', gross: null, ctc_input: null,
            has_pf: true, has_pf_higher: false, has_bonus: false, has_leave: true,
            has_gratuity: false, has_hra: true, has_conveyance: true, has_medical: true, has_education: true,
            older_designation: '', new_designation: '', current_ctc: '', new_ctc: '', increment_amount: '',
            has_promotion: true, has_increment: true,
            designation_id: 0, new_designation_id: 0
        };
    }
    SalaryCalculatorFormComponent.prototype.ngOnInit = function () {
        this.getDesignations();
        this.editId = this.route.snapshot.params['id'] ? parseInt(this.route.snapshot.params['id']) : null;
        if (this.editId)
            this.fetchRecord();
    };
    SalaryCalculatorFormComponent.prototype.getDesignations = function () {
        var _this = this;
        this.serve.post_rqst({}, 'Salary_Calculator/getDesignations').subscribe(function (res) {
            if (res['statusCode'] == 200) {
                _this.designations = res['result'] || [];
                _this.filteredDesignations = _this.designations.slice();
            }
        });
    };
    SalaryCalculatorFormComponent.prototype.filterDesig = function (val) {
        var q = (val || '').toLowerCase();
        this.filteredDesignations = this.designations.filter(function (d) { return (d.role_name || '').toLowerCase().includes(q); });
    };
    SalaryCalculatorFormComponent.prototype.resetDesigFilter = function () { this.filteredDesignations = this.designations.slice(); };
    SalaryCalculatorFormComponent.prototype.onMainDesig = function () {
        var _this = this;
        var d = this.designations.find(function (x) { return x.id == _this.formData.designation_id; });
        this.formData.designation = d ? d.role_name : '';
    };
    SalaryCalculatorFormComponent.prototype.onNewDesig = function () {
        var _this = this;
        var d = this.designations.find(function (x) { return x.id == _this.formData.new_designation_id; });
        this.formData.new_designation = d ? d.role_name : '';
    };
    SalaryCalculatorFormComponent.prototype.fetchRecord = function () {
        var _this = this;
        this.serve.post_rqst({ id: this.editId }, 'Salary_Calculator/getRecord').subscribe(function (res) {
            if (res['statusCode'] == 200)
                _this.loadRecord(res['record']);
            else
                _this.toast.errorToastr('Record not found');
        });
    };
    SalaryCalculatorFormComponent.prototype.loadRecord = function (rec) {
        this.formData.emp_name = rec.emp_name || '';
        this.formData.emp_code = rec.emp_code || '';
        this.formData.designation = rec.designation || '';
        this.formData.location = rec.location || '';
        this.formData.wef_date = (rec.wef_date && rec.wef_date !== '0000-00-00') ? rec.wef_date : '';
        this.formData.sheet_type = rec.sheet_type || 'KN PLANT';
        this.formData.input_mode = 'gross';
        this.formData.gross = parseFloat(rec.gross);
        this.formData.has_pf = rec.has_pf == 1;
        this.formData.has_pf_higher = rec.has_pf_higher == 1;
        this.formData.has_bonus = rec.has_bonus == 1;
        this.formData.has_leave = rec.has_leave == 1;
        this.formData.has_gratuity = rec.has_gratuity == 1;
        this.formData.has_hra = rec.has_hra == 1;
        this.formData.has_conveyance = rec.has_conveyance == 1;
        this.formData.has_medical = rec.has_medical == 1;
        this.formData.has_education = rec.has_education == 1;
        this.formData.older_designation = rec.older_designation || '';
        this.formData.new_designation = rec.new_designation || '';
        this.formData.current_ctc = rec.current_ctc || '';
        this.formData.new_ctc = rec.new_ctc || '';
        this.formData.increment_amount = rec.increment_amount || '';
        this.formData.has_promotion = rec.has_promotion == 1;
        this.formData.has_increment = rec.has_increment == 1;
        this.formData.designation_id = rec.designation_id ? +rec.designation_id : 0;
        this.formData.new_designation_id = rec.new_designation_id ? +rec.new_designation_id : 0;
        this.onGrossChange();
    };
    SalaryCalculatorFormComponent.prototype.onSheetTypeChange = function () {
        var d = this._defaults(this.formData.sheet_type);
        Object.assign(this.formData, d);
        this.recalculate();
    };
    SalaryCalculatorFormComponent.prototype._defaults = function (sheetType) {
        return {
            has_pf: sheetType !== 'PLANT HSP',
            has_pf_higher: false,
            has_bonus: sheetType !== 'KN PLANT',
            has_gratuity: sheetType === 'SALES',
            has_leave: true,
            has_hra: true, has_conveyance: true, has_medical: true, has_education: true
        };
    };
    SalaryCalculatorFormComponent.prototype.onInputModeChange = function () { this.formData.gross = null; this.formData.ctc_input = null; this.salaryResult = null; };
    SalaryCalculatorFormComponent.prototype.recalculate = function () {
        if (this.formData.input_mode === 'ctc')
            this.onCtcChange();
        else
            this.onGrossChange();
    };
    SalaryCalculatorFormComponent.prototype.onGrossChange = function () {
        var gross = parseFloat(this.formData.gross) || 0;
        if (gross <= 0) {
            this.salaryResult = null;
            return;
        }
        this.salaryResult = this.calcSalary(gross, this.formData.sheet_type, this.formData.has_pf, this.formData.has_bonus, this.formData.has_gratuity, this.formData.has_leave, this.formData.has_pf_higher, this.formData.has_hra, this.formData.has_conveyance, this.formData.has_medical, this.formData.has_education);
    };
    SalaryCalculatorFormComponent.prototype.onCtcChange = function () {
        var ctc = parseFloat(this.formData.ctc_input) || 0;
        if (ctc <= 0) {
            this.salaryResult = null;
            return;
        }
        var gross = this.reverseCalc(ctc, this.formData.sheet_type, this.formData.has_pf, this.formData.has_bonus, this.formData.has_gratuity, this.formData.has_leave, this.formData.has_pf_higher, this.formData.has_hra, this.formData.has_conveyance, this.formData.has_medical, this.formData.has_education);
        this.formData.gross = gross;
        this.salaryResult = this.calcSalary(gross, this.formData.sheet_type, this.formData.has_pf, this.formData.has_bonus, this.formData.has_gratuity, this.formData.has_leave, this.formData.has_pf_higher, this.formData.has_hra, this.formData.has_conveyance, this.formData.has_medical, this.formData.has_education);
    };
    SalaryCalculatorFormComponent.prototype.reverseCalc = function (targetCtc, sheetType, has_pf, has_bonus, has_gratuity, has_leave, has_pf_higher, has_hra, has_conveyance, has_medical, has_education) {
        var low = 1, high = targetCtc, mid = 0;
        for (var i = 0; i < 60; i++) {
            mid = Math.round((low + high) / 2);
            var r = this.calcSalary(mid, sheetType, has_pf, has_bonus, has_gratuity, has_leave, has_pf_higher, has_hra, has_conveyance, has_medical, has_education);
            if (r.total_ctc === targetCtc)
                break;
            if (r.total_ctc < targetCtc)
                low = mid + 1;
            else
                high = mid - 1;
        }
        return mid;
    };
    SalaryCalculatorFormComponent.prototype.calcSalary = function (gross, sheetType, has_pf, has_bonus, has_gratuity, has_leave, has_pf_higher, has_hra, has_conveyance, has_medical, has_education) {
        if (has_leave === void 0) { has_leave = true; }
        if (has_pf_higher === void 0) { has_pf_higher = false; }
        if (has_hra === void 0) { has_hra = true; }
        if (has_conveyance === void 0) { has_conveyance = true; }
        if (has_medical === void 0) { has_medical = true; }
        if (has_education === void 0) { has_education = true; }
        var r = {};
        if (gross < 38000) {
            r.basic = Math.round(gross * 0.80);
            var remaining = gross - r.basic;
            if (sheetType === 'PLANT HSP' || sheetType === 'KN PLANT') {
                r.hra = Math.round(remaining * 4 / 10);
                r.conveyance = Math.round(remaining * 3 / 10);
                r.medical = Math.round(remaining * 2 / 10);
                r.education = gross - r.basic - r.hra - r.conveyance - r.medical;
            }
            else {
                r.hra = Math.round(remaining * 4 / 12);
                r.conveyance = Math.round(remaining * 2 / 12);
                r.medical = Math.round(remaining * 3 / 12);
                r.education = gross - r.basic - r.hra - r.conveyance - r.medical;
            }
        }
        else if (sheetType === 'PLANT HSP' || sheetType === 'KN PLANT') {
            r.basic = Math.floor(gross / 1.5 + 0.5);
            r.hra = Math.floor(r.basic * 0.20 + 0.5);
            r.conveyance = Math.floor(r.basic * 0.15 + 0.5);
            r.medical = Math.floor(r.basic * 0.10 + 0.5);
            r.education = Math.floor(r.basic * 0.05 + 0.5);
        }
        else {
            r.basic = Math.round(gross * 0.50);
            r.hra = Math.round(gross / 6);
            r.conveyance = Math.round(gross / 12);
            r.medical = Math.round(gross * 0.125);
            r.education = gross - r.basic - r.hra - r.conveyance - r.medical;
        }
        if (!has_hra) {
            r.basic += r.hra;
            r.hra = 0;
        }
        if (!has_conveyance) {
            r.basic += r.conveyance;
            r.conveyance = 0;
        }
        if (!has_medical) {
            r.basic += r.medical;
            r.medical = 0;
        }
        if (!has_education) {
            r.basic += r.education;
            r.education = 0;
        }
        if (has_pf) {
            var pfBase = has_pf_higher ? Math.round((gross - r.hra) * 0.12) : 1800;
            r.pf_employee = pfBase;
            r.pf_employer = pfBase;
        }
        else {
            r.pf_employee = 0;
            r.pf_employer = 0;
        }
        r.esi_employee = r.basic <= 21000 ? Math.floor(r.basic * 0.0075 + 0.5) : 0;
        r.ptax = gross > 25000 ? 200 : 0;
        r.lwf = 5;
        r.net_payable = gross - r.pf_employee - r.esi_employee - r.ptax - r.lwf;
        r.esi_employer = r.basic <= 21000 ? Math.floor(r.basic * 0.0325 + 0.5) : 0;
        if (has_bonus) {
            r.bonus_annual = r.basic;
            r.bonus_monthly = Math.round(r.basic / 12);
        }
        else {
            r.bonus_monthly = 0;
            r.bonus_annual = 0;
        }
        if (has_leave) {
            if (sheetType === 'SALES') {
                r.leave_monthly = Math.round(r.basic / 30 * 2);
                r.leave_annual = r.leave_monthly * 12;
            }
            else {
                r.leave_annual = Math.floor(gross / 30 * 24);
                r.leave_monthly = Math.floor(r.leave_annual / 12);
            }
        }
        else {
            r.leave_monthly = 0;
            r.leave_annual = 0;
        }
        if (has_gratuity) {
            r.gratuity_monthly = Math.round(r.basic * 0.0481);
            r.gratuity_annual = r.gratuity_monthly * 12;
        }
        else {
            r.gratuity_monthly = 0;
            r.gratuity_annual = 0;
        }
        r.total_ctc = gross + r.pf_employer + r.esi_employer + r.bonus_monthly + r.leave_monthly + r.gratuity_monthly;
        r.total_ctc_annual = r.total_ctc * 12;
        r.gross_annual = gross * 12;
        r.net_payable_annual = r.net_payable * 12;
        return r;
    };
    SalaryCalculatorFormComponent.prototype.getBasicFormula = function () {
        var gross = parseFloat(this.formData.gross) || 0;
        if (!this.salaryResult || !gross)
            return '';
        var pct = Math.round(this.salaryResult.basic / gross * 1000) / 10;
        return "Gross \u00D7 " + pct + "%";
    };
    SalaryCalculatorFormComponent.prototype.getPayload = function () {
        return {
            emp_name: this.formData.emp_name, emp_code: this.formData.emp_code,
            designation: this.formData.designation, location: this.formData.location,
            wef_date: this.formData.wef_date, sheet_type: this.formData.sheet_type,
            gross: this.formData.gross,
            has_pf: this.formData.has_pf ? 1 : 0, has_pf_higher: this.formData.has_pf_higher ? 1 : 0,
            has_bonus: this.formData.has_bonus ? 1 : 0, has_leave: this.formData.has_leave ? 1 : 0,
            has_gratuity: this.formData.has_gratuity ? 1 : 0,
            has_hra: this.formData.has_hra ? 1 : 0, has_conveyance: this.formData.has_conveyance ? 1 : 0,
            has_medical: this.formData.has_medical ? 1 : 0, has_education: this.formData.has_education ? 1 : 0,
            older_designation: this.formData.older_designation || '', new_designation: this.formData.new_designation || '',
            current_ctc: this.formData.current_ctc || '', new_ctc: this.formData.new_ctc || '', increment_amount: this.formData.increment_amount || '',
            has_promotion: this.formData.has_promotion ? 1 : 0, has_increment: this.formData.has_increment ? 1 : 0,
            designation_id: this.formData.designation_id || 0, new_designation_id: this.formData.new_designation_id || 0,
            created_by_id: this.serve.login_data.id, created_by_name: this.serve.login_data.name || ''
        };
    };
    SalaryCalculatorFormComponent.prototype.generateLetterPdf = function () {
        var _this = this;
        if (!this.salaryResult) {
            this.toast.errorToastr('Please calculate salary first');
            return;
        }
        if (!this.formData.has_promotion && !this.formData.has_increment) {
            this.toast.errorToastr('Select Promotion and/or Increment');
            return;
        }
        this.isGeneratingLetter = true;
        var tab = window.open('', '_blank');
        var payload = this.editId ? tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, this.getPayload(), { id: this.editId }) : this.getPayload();
        this.serve.post_rqst(payload, 'Salary_Calculator/generateLetterPdf').subscribe(function (res) {
            _this.isGeneratingLetter = false;
            if (res['statusCode'] == 200)
                tab.location.href = _this.serve.uploadUrl + 'Pdf/' + res['file_name'];
            else {
                tab.close();
                _this.toast.errorToastr(res['statusMsg'] || 'Failed to generate letter');
            }
        }, function () { _this.isGeneratingLetter = false; tab.close(); _this.toast.errorToastr('Something went wrong'); });
    };
    SalaryCalculatorFormComponent.prototype.saveRecord = function () {
        var _this = this;
        if (!this.salaryResult) {
            this.toast.errorToastr('Please calculate salary first');
            return;
        }
        if (!this.formData.emp_name.trim()) {
            this.toast.errorToastr('Employee name is required');
            return;
        }
        this.isSaving = true;
        var payload = this.editId ? tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, this.getPayload(), { id: this.editId }) : this.getPayload();
        var endpoint = this.editId ? 'Salary_Calculator/updateRecord' : 'Salary_Calculator/saveRecord';
        this.serve.post_rqst(payload, endpoint).subscribe(function (res) {
            _this.isSaving = false;
            if (res['statusCode'] == 200) {
                _this.toast.successToastr(_this.editId ? 'Updated successfully' : 'Saved successfully');
                _this.router.navigate(['/salary-calculator']);
            }
            else
                _this.toast.errorToastr(res['statusMsg']);
        }, function () { _this.isSaving = false; _this.toast.errorToastr('Something went wrong'); });
    };
    SalaryCalculatorFormComponent.prototype.downloadPdf = function () {
        var _this = this;
        if (!this.salaryResult) {
            this.toast.errorToastr('Please calculate salary first');
            return;
        }
        this.isDownloading = true;
        var tab = window.open('', '_blank');
        this.serve.post_rqst(this.getPayload(), 'Salary_Calculator/generatePdf').subscribe(function (res) {
            _this.isDownloading = false;
            if (res['statusCode'] == 200)
                tab.location.href = _this.serve.uploadUrl + 'Pdf/' + res['file_name'];
            else
                tab.close();
        }, function () { _this.isDownloading = false; tab.close(); });
    };
    SalaryCalculatorFormComponent.prototype.sendEmail = function () {
        var _this = this;
        if (!this.toEmail.trim()) {
            this.toast.errorToastr('Please enter email address');
            return;
        }
        if (!this.salaryResult) {
            this.toast.errorToastr('Please calculate salary first');
            return;
        }
        this.isSendingEmail = true;
        var payload = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, this.getPayload(), { to_email: this.toEmail });
        this.serve.post_rqst(payload, 'Salary_Calculator/sendEmail').subscribe(function (res) {
            _this.isSendingEmail = false;
            if (res['statusCode'] == 200) {
                _this.toast.successToastr('Email sent successfully!');
                _this.showEmailInput = false;
                _this.toEmail = '';
            }
            else {
                _this.toast.errorToastr(res['statusMsg'] || 'Failed to send email');
            }
        }, function () { _this.isSendingEmail = false; _this.toast.errorToastr('Something went wrong'); });
    };
    SalaryCalculatorFormComponent.prototype.goBack = function () { this.router.navigate(['/salary-calculator']); };
    SalaryCalculatorFormComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-salary-calculator-form',
            template: __webpack_require__(/*! ./salary-calculator-form.component.html */ "./src/app/salary-calculator/salary-calculator-form/salary-calculator-form.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_services_DatabaseService__WEBPACK_IMPORTED_MODULE_3__["DatabaseService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_4__["ToastrManager"]])
    ], SalaryCalculatorFormComponent);
    return SalaryCalculatorFormComponent;
}());



/***/ }),

/***/ "./src/app/salary-calculator/salary-calculator-list/salary-calculator-list.component.html":
/*!************************************************************************************************!*\
  !*** ./src/app/salary-calculator/salary-calculator-list/salary-calculator-list.component.html ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-container\">\r\n    <div class=\"tools-container\">\r\n        <h2>Salary Calculator</h2>\r\n        <div class=\"left-auto df ac flex-gap-10\">\r\n            <button mat-raised-button color=\"primary\" (click)=\"goToAdd()\">\r\n                <i class=\"material-icons\" style=\"font-size:16px;vertical-align:middle;margin-right:4px;\">add</i> New Calculation\r\n            </button>\r\n            <button mat-icon-button matTooltip=\"Refresh\" (click)=\"getList()\">\r\n                <i class=\"material-icons\">refresh</i>\r\n            </button>\r\n        </div>\r\n    </div>\r\n\r\n    <!-- Filters -->\r\n    <div class=\"df flex-gap-10 flex-wrap\" style=\"padding:10px 16px;\">\r\n        <mat-form-field appearance=\"outline\" style=\"flex:1;min-width:160px;\">\r\n            <mat-label>Employee Name</mat-label>\r\n            <input matInput [(ngModel)]=\"filter.emp_name\" (keyup.enter)=\"getList()\" (blur)=\"getList()\" placeholder=\"Search...\">\r\n        </mat-form-field>\r\n        <mat-form-field appearance=\"outline\" style=\"flex:1;min-width:130px;\">\r\n            <mat-label>Employee Code</mat-label>\r\n            <input matInput [(ngModel)]=\"filter.emp_code\" (keyup.enter)=\"getList()\" (blur)=\"getList()\" placeholder=\"Search...\">\r\n        </mat-form-field>\r\n        <mat-form-field appearance=\"outline\" style=\"flex:1;min-width:160px;\">\r\n            <mat-label>Designation</mat-label>\r\n            <input matInput [(ngModel)]=\"filter.designation\" (keyup.enter)=\"getList()\" (blur)=\"getList()\" placeholder=\"Search...\">\r\n        </mat-form-field>\r\n        <mat-form-field appearance=\"outline\" style=\"flex:1;min-width:140px;\">\r\n            <mat-label>Sheet Type</mat-label>\r\n            <mat-select [(ngModel)]=\"filter.sheet_type\" (ngModelChange)=\"getList()\">\r\n                <mat-option value=\"\">All</mat-option>\r\n                <mat-option value=\"SALES\">SALES</mat-option>\r\n                <mat-option value=\"PLANT HSP\">PLANT HSP</mat-option>\r\n                <mat-option value=\"KN PLANT\">KN PLANT</mat-option>\r\n            </mat-select>\r\n        </mat-form-field>\r\n    </div>\r\n\r\n    <!-- Loading -->\r\n    <div *ngIf=\"isLoading\" style=\"text-align:center;padding:40px;\">\r\n        <mat-spinner diameter=\"40\" style=\"margin:auto;\"></mat-spinner>\r\n    </div>\r\n\r\n    <!-- Table -->\r\n    <div *ngIf=\"!isLoading\" style=\"padding:0 16px 16px;\">\r\n        <table style=\"width:100%;border-collapse:collapse;font-size:13px;box-shadow:0 1px 4px rgba(0,0,0,0.08);border-radius:8px;overflow:hidden;\">\r\n            <thead>\r\n                <tr style=\"background:#1e293b;color:#fff;\">\r\n                    <th style=\"padding:11px 14px;text-align:left;font-weight:600;border-right:1px solid #334155;\">#</th>\r\n                    <th style=\"padding:11px 14px;text-align:left;font-weight:600;border-right:1px solid #334155;\">Employee Name</th>\r\n                    <th style=\"padding:11px 14px;text-align:left;font-weight:600;border-right:1px solid #334155;\">Emp Code</th>\r\n                    <th style=\"padding:11px 14px;text-align:left;font-weight:600;border-right:1px solid #334155;\">Designation</th>\r\n                    <th style=\"padding:11px 14px;text-align:left;font-weight:600;border-right:1px solid #334155;\">Sheet Type</th>\r\n                    <th style=\"padding:11px 14px;text-align:right;font-weight:600;border-right:1px solid #334155;\">Gross</th>\r\n                    <th style=\"padding:11px 14px;text-align:right;font-weight:600;border-right:1px solid #334155;\">Total CTC</th>\r\n                    <th style=\"padding:11px 14px;text-align:center;font-weight:600;border-right:1px solid #334155;\">WEF Date</th>\r\n                    <th style=\"padding:11px 14px;text-align:center;font-weight:600;\">Actions</th>\r\n                </tr>\r\n            </thead>\r\n            <tbody>\r\n                <tr *ngFor=\"let rec of records; let i = index\"\r\n                    [style.background]=\"i%2===0 ? '#ffffff' : '#f8fafc'\"\r\n                    style=\"border-bottom:1px solid #e2e8f0;transition:background 0.15s;\"\r\n                    (mouseenter)=\"rec._hover=true\" (mouseleave)=\"rec._hover=false\"\r\n                    [style.background]=\"rec._hover ? '#eff6ff' : (i%2===0 ? '#ffffff' : '#f8fafc')\">\r\n                    <td style=\"padding:10px 14px;border-right:1px solid #e2e8f0;color:#64748b;\">{{i+1}}</td>\r\n                    <td style=\"padding:10px 14px;border-right:1px solid #e2e8f0;font-weight:600;color:#1e293b;\">{{rec.emp_name}}</td>\r\n                    <td style=\"padding:10px 14px;border-right:1px solid #e2e8f0;color:#475569;\">{{rec.emp_code || '—'}}</td>\r\n                    <td style=\"padding:10px 14px;border-right:1px solid #e2e8f0;color:#475569;\">{{rec.designation || '—'}}</td>\r\n                    <td style=\"padding:10px 14px;border-right:1px solid #e2e8f0;\">\r\n                        <span style=\"border-radius:12px;padding:3px 10px;font-size:11px;font-weight:600;\"\r\n                            [style.background]=\"rec.sheet_type==='SALES' ? '#dbeafe' : rec.sheet_type==='PLANT HSP' ? '#dcfce7' : '#fef9c3'\"\r\n                            [style.color]=\"rec.sheet_type==='SALES' ? '#1d4ed8' : rec.sheet_type==='PLANT HSP' ? '#166534' : '#854d0e'\">\r\n                            {{rec.sheet_type}}\r\n                        </span>\r\n                    </td>\r\n                    <td style=\"padding:10px 14px;border-right:1px solid #e2e8f0;text-align:right;color:#475569;\">₹{{rec.gross | inr}}</td>\r\n                    <td style=\"padding:10px 14px;border-right:1px solid #e2e8f0;text-align:right;font-weight:700;color:#2e7d32;\">₹{{rec.total_ctc | inr}}</td>\r\n                    <td style=\"padding:10px 14px;border-right:1px solid #e2e8f0;text-align:center;color:#475569;\">{{rec.wef_date || '—'}}</td>\r\n                    <td style=\"padding:6px 10px;text-align:center;\">\r\n                        <button mat-icon-button matTooltip=\"Edit\" (click)=\"editRecord(rec)\" style=\"color:#1565c0;\">\r\n                            <i class=\"material-icons\" style=\"font-size:18px;\">edit</i>\r\n                        </button>\r\n                        <button mat-icon-button matTooltip=\"Download PDF\" (click)=\"downloadPdf(rec)\" style=\"color:#2e7d32;\">\r\n                            <i class=\"material-icons\" style=\"font-size:18px;\">picture_as_pdf</i>\r\n                        </button>\r\n                        <button mat-icon-button matTooltip=\"Delete\" (click)=\"deleteRecord(rec.id)\" style=\"color:#dc2626;\">\r\n                            <i class=\"material-icons\" style=\"font-size:18px;\">delete</i>\r\n                        </button>\r\n                    </td>\r\n                </tr>\r\n                <tr *ngIf=\"records.length === 0\">\r\n                    <td colspan=\"9\" style=\"padding:40px;text-align:center;color:#94a3b8;font-size:14px;\">\r\n                        <i class=\"material-icons\" style=\"font-size:40px;display:block;margin-bottom:8px;color:#cbd5e1;\">inbox</i>\r\n                        No records found\r\n                    </td>\r\n                </tr>\r\n            </tbody>\r\n        </table>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/salary-calculator/salary-calculator-list/salary-calculator-list.component.ts":
/*!**********************************************************************************************!*\
  !*** ./src/app/salary-calculator/salary-calculator-list/salary-calculator-list.component.ts ***!
  \**********************************************************************************************/
/*! exports provided: SalaryCalculatorListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SalaryCalculatorListComponent", function() { return SalaryCalculatorListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_services_DatabaseService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/_services/DatabaseService */ "./src/_services/DatabaseService.ts");
/* harmony import */ var ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng6-toastr-notifications */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/ng6-toastr-notifications/fesm5/ng6-toastr-notifications.js");





var SalaryCalculatorListComponent = /** @class */ (function () {
    function SalaryCalculatorListComponent(serve, router, toast) {
        this.serve = serve;
        this.router = router;
        this.toast = toast;
        this.isLoading = false;
        this.records = [];
        this.filter = { emp_name: '', emp_code: '', designation: '', sheet_type: '' };
    }
    SalaryCalculatorListComponent.prototype.ngOnInit = function () {
        this.getList();
    };
    SalaryCalculatorListComponent.prototype.getList = function () {
        var _this = this;
        this.isLoading = true;
        this.serve.post_rqst(this.filter, 'Salary_Calculator/getList').subscribe(function (res) {
            _this.isLoading = false;
            if (res['statusCode'] == 200)
                _this.records = res['result'] || [];
        }, function () { _this.isLoading = false; });
    };
    SalaryCalculatorListComponent.prototype.goToAdd = function () { this.router.navigate(['/salary-calculator/add']); };
    SalaryCalculatorListComponent.prototype.editRecord = function (rec) { this.router.navigate(['/salary-calculator/edit', rec.id]); };
    SalaryCalculatorListComponent.prototype.deleteRecord = function (id) {
        var _this = this;
        if (!confirm('Delete this record?'))
            return;
        this.serve.post_rqst({ id: id }, 'Salary_Calculator/deleteRecord').subscribe(function (res) {
            if (res['statusCode'] == 200) {
                _this.toast.successToastr('Deleted');
                _this.getList();
            }
        });
    };
    SalaryCalculatorListComponent.prototype.downloadPdf = function (rec) {
        var _this = this;
        var tab = window.open('', '_blank');
        this.serve.post_rqst({
            emp_name: rec.emp_name, emp_code: rec.emp_code, designation: rec.designation,
            location: rec.location, wef_date: rec.wef_date, sheet_type: rec.sheet_type,
            gross: rec.gross, has_pf: rec.has_pf, has_pf_higher: rec.has_pf_higher,
            has_bonus: rec.has_bonus, has_leave: rec.has_leave, has_gratuity: rec.has_gratuity,
            has_hra: rec.has_hra, has_conveyance: rec.has_conveyance,
            has_medical: rec.has_medical, has_education: rec.has_education
        }, 'Salary_Calculator/generatePdf').subscribe(function (res) {
            if (res['statusCode'] == 200)
                tab.location.href = _this.serve.uploadUrl + 'Pdf/' + res['file_name'];
            else
                tab.close();
        }, function () { tab.close(); });
    };
    SalaryCalculatorListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-salary-calculator-list',
            template: __webpack_require__(/*! ./salary-calculator-list.component.html */ "./src/app/salary-calculator/salary-calculator-list/salary-calculator-list.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_services_DatabaseService__WEBPACK_IMPORTED_MODULE_3__["DatabaseService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_4__["ToastrManager"]])
    ], SalaryCalculatorListComponent);
    return SalaryCalculatorListComponent;
}());



/***/ }),

/***/ "./src/app/salary-calculator/salary-calculator-routing.module.ts":
/*!***********************************************************************!*\
  !*** ./src/app/salary-calculator/salary-calculator-routing.module.ts ***!
  \***********************************************************************/
/*! exports provided: SalaryCalculatorRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SalaryCalculatorRoutingModule", function() { return SalaryCalculatorRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _salary_calculator_list_salary_calculator_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./salary-calculator-list/salary-calculator-list.component */ "./src/app/salary-calculator/salary-calculator-list/salary-calculator-list.component.ts");
/* harmony import */ var _salary_calculator_form_salary_calculator_form_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./salary-calculator-form/salary-calculator-form.component */ "./src/app/salary-calculator/salary-calculator-form/salary-calculator-form.component.ts");
/* harmony import */ var _auth_component_guard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../auth-component.guard */ "./src/app/auth-component.guard.ts");






var routes = [
    { path: '', component: _salary_calculator_list_salary_calculator_list_component__WEBPACK_IMPORTED_MODULE_3__["SalaryCalculatorListComponent"], canActivate: [_auth_component_guard__WEBPACK_IMPORTED_MODULE_5__["AuthComponentGuard"]], data: { expectedRole: ['1'] } },
    { path: 'add', component: _salary_calculator_form_salary_calculator_form_component__WEBPACK_IMPORTED_MODULE_4__["SalaryCalculatorFormComponent"], canActivate: [_auth_component_guard__WEBPACK_IMPORTED_MODULE_5__["AuthComponentGuard"]], data: { expectedRole: ['1'] } },
    { path: 'edit/:id', component: _salary_calculator_form_salary_calculator_form_component__WEBPACK_IMPORTED_MODULE_4__["SalaryCalculatorFormComponent"], canActivate: [_auth_component_guard__WEBPACK_IMPORTED_MODULE_5__["AuthComponentGuard"]], data: { expectedRole: ['1'] } },
];
var SalaryCalculatorRoutingModule = /** @class */ (function () {
    function SalaryCalculatorRoutingModule() {
    }
    SalaryCalculatorRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], SalaryCalculatorRoutingModule);
    return SalaryCalculatorRoutingModule;
}());



/***/ }),

/***/ "./src/app/salary-calculator/salary-calculator.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/salary-calculator/salary-calculator.module.ts ***!
  \***************************************************************/
/*! exports provided: SalaryCalculatorModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SalaryCalculatorModule", function() { return SalaryCalculatorModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _salary_calculator_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./salary-calculator-routing.module */ "./src/app/salary-calculator/salary-calculator-routing.module.ts");
/* harmony import */ var _salary_calculator_list_salary_calculator_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./salary-calculator-list/salary-calculator-list.component */ "./src/app/salary-calculator/salary-calculator-list/salary-calculator-list.component.ts");
/* harmony import */ var _salary_calculator_form_salary_calculator_form_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./salary-calculator-form/salary-calculator-form.component */ "./src/app/salary-calculator/salary-calculator-form/salary-calculator-form.component.ts");
/* harmony import */ var _material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../material */ "./src/app/material.ts");
/* harmony import */ var _app_utility_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../app-utility.module */ "./src/app/app-utility.module.ts");
/* harmony import */ var _inr_pipe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./inr.pipe */ "./src/app/salary-calculator/inr.pipe.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var ngx_mat_select_search__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-mat-select-search */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/ngx-mat-select-search/fesm5/ngx-mat-select-search.js");













var SalaryCalculatorModule = /** @class */ (function () {
    function SalaryCalculatorModule() {
    }
    SalaryCalculatorModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _salary_calculator_list_salary_calculator_list_component__WEBPACK_IMPORTED_MODULE_5__["SalaryCalculatorListComponent"],
                _salary_calculator_form_salary_calculator_form_component__WEBPACK_IMPORTED_MODULE_6__["SalaryCalculatorFormComponent"],
                _inr_pipe__WEBPACK_IMPORTED_MODULE_9__["InrPipe"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _salary_calculator_routing_module__WEBPACK_IMPORTED_MODULE_4__["SalaryCalculatorRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _material__WEBPACK_IMPORTED_MODULE_7__["MaterialModule"],
                _app_utility_module__WEBPACK_IMPORTED_MODULE_8__["AppUtilityModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatIconModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                ngx_mat_select_search__WEBPACK_IMPORTED_MODULE_11__["NgxMatSelectSearchModule"]
            ]
        })
    ], SalaryCalculatorModule);
    return SalaryCalculatorModule;
}());



/***/ })

}]);