(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["hr-recruitment-hr-recruitment-module"],{

/***/ "./src/app/hr-recruitment/candidate-add/candidate-add.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/hr-recruitment/candidate-add/candidate-add.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-container\">\r\n    <div class=\"tools-container\">\r\n        <a mat-icon-button matTooltip=\"Back\" (click)=\"goBack()\">\r\n            <i class=\"material-icons\">arrow_back</i>\r\n        </a>\r\n        <h2>{{pageType == 'edit' ? 'Edit' : 'Add New'}} Candidate</h2>\r\n    </div>\r\n\r\n    <div class=\"container pt10 pl10 pr10 pb50\">\r\n        <form [formGroup]=\"candidateForm\" (ngSubmit)=\"submit()\">\r\n\r\n            <!-- OCR Auto-Fill Section -->\r\n            <div class=\"row\">\r\n                <div class=\"col s12\">\r\n                    <div class=\"card pb10\" style=\"border: 2px dashed #3f51b5; background: #f8f9ff;\">\r\n                        <div class=\"card-head\" style=\"background: #3f51b5;\">\r\n                            <h2 style=\"color: #fff;\">\r\n                                <i class=\"material-icons\"\r\n                                    style=\"vertical-align: middle; margin-right: 6px; font-size: 20px;\">auto_fix_high</i>\r\n                                Auto-Fill from Resume Image\r\n                            </h2>\r\n                        </div>\r\n                        <div class=\"card-body cs-form pt10 pb10\">\r\n                            <div class=\"row\" style=\"align-items: center; margin-bottom: 0;\">\r\n                                <div class=\"col s12 m5 l5\">\r\n                                    <div\r\n                                        style=\"border: 1px dashed #3f51b5; padding: 12px; border-radius: 8px; text-align: center; background: #fff;\">\r\n                                        <label\r\n                                            style=\"font-size: 13px; color: #3f51b5; font-weight: 600; display: block; margin-bottom: 6px;\">\r\n                                            <i class=\"material-icons\"\r\n                                                style=\"vertical-align: middle; font-size: 16px;\">image</i>\r\n                                            Resume/Form ki Image Upload Karein (JPG/PNG)\r\n                                        </label>\r\n                                        <input type=\"file\" (change)=\"onOcrImageSelect($event)\" accept=\"image/*\"\r\n                                            style=\"display: block; width: 100%; font-size: 13px;\">\r\n                                        <p *ngIf=\"ocrImageName\"\r\n                                            style=\"font-size: 12px; color: green; margin: 6px 0 0; font-weight: 600;\">\r\n                                            <i class=\"material-icons\"\r\n                                                style=\"font-size: 14px; vertical-align: middle;\">check_circle</i>\r\n                                            {{ocrImageName}}\r\n                                        </p>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"col s12 m3 l3\" style=\"text-align: center;\">\r\n                                    <img *ngIf=\"ocrImagePreview\" [src]=\"ocrImagePreview\"\r\n                                        style=\"max-height: 90px; max-width: 100%; border-radius: 6px; border: 2px solid #3f51b5; object-fit: cover;\">\r\n                                    <p *ngIf=\"!ocrImagePreview\" style=\"color: #aaa; font-size: 12px; margin: 0;\">Image\r\n                                        preview yahan aayega</p>\r\n                                </div>\r\n                                <div class=\"col s12 m4 l4\">\r\n                                    <button mat-raised-button color=\"primary\" type=\"button\"\r\n                                        (click)=\"extractAndAutoFill()\" [disabled]=\"!ocrImageFile || isOcrLoading\"\r\n                                        style=\"width: 100%; height: 48px; font-size: 14px;\">\r\n                                        <i class=\"material-icons\" style=\"vertical-align: middle; margin-right: 5px;\">\r\n                                            {{isOcrLoading ? 'hourglass_empty' : 'find_in_page'}}\r\n                                        </i>\r\n                                        {{isOcrLoading ? 'Extracting...' : 'Extract & Auto-Fill'}}\r\n                                    </button>\r\n                                    <p *ngIf=\"ocrStatus\" class=\"mt5\" [ngStyle]=\"{\r\n                                            'color': ocrStatusType == 'success' ? '#2e7d32' : ocrStatusType == 'error' ? '#c62828' : '#e65100',\r\n                                            'font-size': '12px',\r\n                                            'font-weight': '600',\r\n                                            'text-align': 'center'\r\n                                        }\">\r\n                                        {{ocrStatus}}\r\n                                    </p>\r\n                                </div>\r\n                            </div>\r\n                            <div *ngIf=\"isOcrLoading\" class=\"row mt10\" style=\"margin-bottom: 0;\">\r\n                                <div class=\"col s12\">\r\n                                    <mat-progress-bar mode=\"indeterminate\" color=\"accent\"></mat-progress-bar>\r\n                                    <p style=\"text-align: center; font-size: 12px; color: #666; margin: 6px 0 0;\">\r\n                                        {{ocrProgress}}</p>\r\n                                </div>\r\n                            </div>\r\n                            <div *ngIf=\"ocrRawText\" class=\"row mt10\" style=\"margin-bottom: 0;\">\r\n                                <div class=\"col s12\">\r\n                                    <button type=\"button\" (click)=\"showRawText = !showRawText\"\r\n                                        style=\"font-size: 11px; background: none; border: 1px solid #aaa; border-radius: 4px; padding: 3px 10px; cursor: pointer; color: #666;\">\r\n                                        {{showRawText ? 'Hide' : 'Show'}} OCR Raw Text (Debug)\r\n                                    </button>\r\n                                    <div *ngIf=\"showRawText\"\r\n                                        style=\"margin-top: 8px; background: #1e1e1e; color: #dcdcaa; padding: 12px; border-radius: 6px; font-family: monospace; font-size: 11px; white-space: pre-wrap; max-height: 200px; overflow-y: auto;\">\r\n                                        {{ocrRawText}}</div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <!-- OCR Section End -->\r\n\r\n            <div class=\"row\">\r\n                <div class=\"col s12\">\r\n                    <div class=\"card pb0\">\r\n                        <div class=\"card-head\">\r\n                            <h2>Basic Information</h2>\r\n                        </div>\r\n                        <div class=\"card-body cs-form\">\r\n                            <div class=\"row\">\r\n                                <div class=\"col s12 m4 l4\">\r\n                                    <mat-form-field appearance=\"outline\">\r\n                                        <mat-label>Candidate Name</mat-label>\r\n                                        <input matInput formControlName=\"name\" placeholder=\"Type Here ...\">\r\n                                    </mat-form-field>\r\n                                    <div class=\"alert alert-danger\"\r\n                                        *ngIf=\"candidateForm.get('name').touched && candidateForm.get('name').invalid\">\r\n                                        This field is required\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"col s12 m4 l4\">\r\n                                    <mat-form-field appearance=\"outline\">\r\n                                        <mat-label>Contact Number</mat-label>\r\n                                        <input matInput formControlName=\"contact_number\" placeholder=\"Type Here ...\"\r\n                                            maxlength=\"10\" minlength=\"10\" min=\"0\"\r\n                                            (keypress)=\"MobileNumber($event)\" pattern=\"^[6-9][0-9]{0,9}$\">\r\n                                    </mat-form-field>\r\n                                    <div class=\"alert alert-danger\" *ngIf=\"candidateForm.get('contact_number').touched\">\r\n                                        <p *ngIf=\"candidateForm.get('contact_number').hasError('required')\">This field is required</p>\r\n                                        <p *ngIf=\"candidateForm.get('contact_number').hasError('pattern')\">Invalid Mobile Number</p>\r\n                                        <p *ngIf=\"!candidateForm.get('contact_number').hasError('pattern') && (candidateForm.get('contact_number').hasError('minlength') || candidateForm.get('contact_number').hasError('maxlength'))\">Contact number must be exactly 10 digits</p>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"col s12 m4 l4\">\r\n                                    <mat-form-field appearance=\"outline\">\r\n                                        <mat-label>Alternate Number</mat-label>\r\n                                        <input matInput formControlName=\"alternate_number\" placeholder=\"Type Here ...\"\r\n                                            maxlength=\"10\" minlength=\"10\" min=\"0\"\r\n                                            (keypress)=\"MobileNumber($event)\" pattern=\"^[6-9][0-9]{0,9}$\">\r\n                                    </mat-form-field>\r\n                                    <div class=\"alert alert-danger\" *ngIf=\"candidateForm.get('alternate_number').touched\">\r\n                                        <p *ngIf=\"candidateForm.get('alternate_number').hasError('pattern')\">Invalid Mobile Number</p>\r\n                                        <p *ngIf=\"!candidateForm.get('alternate_number').hasError('pattern') && (candidateForm.get('alternate_number').hasError('minlength') || candidateForm.get('alternate_number').hasError('maxlength'))\">Alternate number must be exactly 10 digits</p>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"col s12 m4 l4\">\r\n                                    <mat-form-field appearance=\"outline\">\r\n                                        <mat-label>Reporting Mode</mat-label>\r\n                                        <mat-select formControlName=\"reporting_mode\">\r\n                                            <mat-option value=\"CRM\">CRM</mat-option>\r\n                                            <mat-option value=\"WhatsApp\">WhatsApp</mat-option>\r\n                                            <mat-option value=\"Call\">Call</mat-option>\r\n                                            <mat-option value=\"Office/Shop\">Office/Shop</mat-option>\r\n                                        </mat-select>\r\n                                    </mat-form-field>\r\n                                </div>\r\n                                <div class=\"col s12 m4 l4\">\r\n                                    <mat-form-field appearance=\"outline\">\r\n                                        <mat-label>Employee Type</mat-label>\r\n                                        <mat-select formControlName=\"employee_type\">\r\n                                            <mat-option value=\"\">-- Select --</mat-option>\r\n                                            <mat-option value=\"Sales\">Sales</mat-option>\r\n                                            <mat-option value=\"Admin\">Admin</mat-option>\r\n                                            <mat-option value=\"Plant\">Plant</mat-option>\r\n                                        </mat-select>\r\n                                    </mat-form-field>\r\n                                </div>\r\n                                <div class=\"col s12 m4 l4\" *ngIf=\"candidateForm.get('employee_type').value == 'Plant' || candidateForm.get('employee_type').value == 'Admin'\">\r\n                                    <mat-form-field appearance=\"outline\">\r\n                                        <mat-label>{{candidateForm.get('employee_type').value == 'Plant' ? 'Plant Location' : 'Admin Location'}}</mat-label>\r\n                                        <mat-select formControlName=\"employee_location\">\r\n                                            <mat-option value=\"\">-- Select --</mat-option>\r\n                                            <mat-option value=\"Hoshiarpur\">Hoshiarpur</mat-option>\r\n                                            <mat-option value=\"Chamarajnagar\">Chamarajnagar</mat-option>\r\n                                        </mat-select>\r\n                                    </mat-form-field>\r\n                                </div>\r\n                                <div class=\"col s12 m4 l4\" *ngIf=\"pageType == 'edit'\">\r\n                                    <mat-form-field appearance=\"outline\">\r\n                                        <mat-label>Updated Date of Joining</mat-label>\r\n                                        <input matInput [matDatepicker]=\"updatedDojPicker\" formControlName=\"updated_date_of_joining\" readonly>\r\n                                        <mat-datepicker-toggle matSuffix [for]=\"updatedDojPicker\"></mat-datepicker-toggle>\r\n                                        <mat-datepicker #updatedDojPicker></mat-datepicker>\r\n                                    </mat-form-field>\r\n                                </div>\r\n                            </div>\r\n\r\n                            <!-- Resignation & Confirmation — edit mode only -->\r\n                            <ng-container *ngIf=\"pageType == 'edit'\">\r\n                                <div class=\"row\">\r\n                                    <div class=\"col s12 m4 l4\">\r\n                                        <mat-form-field appearance=\"outline\">\r\n                                            <mat-label>Resignation Received</mat-label>\r\n                                            <mat-select formControlName=\"resignation_received\">\r\n                                                <mat-option value=\"\">-- Select --</mat-option>\r\n                                                <mat-option value=\"Yes\">Yes</mat-option>\r\n                                                <mat-option value=\"No\">No</mat-option>\r\n                                            </mat-select>\r\n                                        </mat-form-field>\r\n                                    </div>\r\n                                    <div class=\"col s12 m8 l8\" *ngIf=\"candidateForm.get('resignation_received').value\">\r\n                                        <mat-form-field appearance=\"outline\">\r\n                                            <mat-label>Resignation Remark</mat-label>\r\n                                            <textarea matInput formControlName=\"resignation_remark\" rows=\"2\"></textarea>\r\n                                        </mat-form-field>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"row\">\r\n                                    <div class=\"col s12 m4 l4\">\r\n                                        <mat-form-field appearance=\"outline\">\r\n                                            <mat-label>Confirmation Received</mat-label>\r\n                                            <mat-select formControlName=\"confirmation_received\">\r\n                                                <mat-option value=\"\">-- Select --</mat-option>\r\n                                                <mat-option value=\"Yes\">Yes</mat-option>\r\n                                                <mat-option value=\"No\">No</mat-option>\r\n                                            </mat-select>\r\n                                        </mat-form-field>\r\n                                    </div>\r\n                                    <div class=\"col s12 m8 l8\" *ngIf=\"candidateForm.get('confirmation_received').value\">\r\n                                        <mat-form-field appearance=\"outline\">\r\n                                            <mat-label>Confirmation Remark</mat-label>\r\n                                            <textarea matInput formControlName=\"confirmation_remark\" rows=\"2\"></textarea>\r\n                                        </mat-form-field>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"row\">\r\n                                    <div class=\"col s12 m4 l4\">\r\n                                        <mat-form-field appearance=\"outline\">\r\n                                            <mat-label>KYC Received</mat-label>\r\n                                            <mat-select formControlName=\"kyc_received\">\r\n                                                <mat-option value=\"\">-- Select --</mat-option>\r\n                                                <mat-option value=\"Yes\">Yes</mat-option>\r\n                                                <mat-option value=\"No\">No</mat-option>\r\n                                            </mat-select>\r\n                                        </mat-form-field>\r\n                                    </div>\r\n                                    <div class=\"col s12 m8 l8\">\r\n                                        <mat-form-field appearance=\"outline\">\r\n                                            <mat-label>KYC Info</mat-label>\r\n                                            <textarea matInput formControlName=\"kyc_info\" rows=\"3\" placeholder=\"Enter KYC details...\"></textarea>\r\n                                        </mat-form-field>\r\n                                    </div>\r\n                                </div>\r\n                            </ng-container>\r\n\r\n                            <div class=\"row\">\r\n                                <div class=\"col s12 m4 l4\">\r\n                                    <mat-form-field appearance=\"outline\">\r\n                                        <mat-label>Screening Date</mat-label>\r\n                                        <input matInput type=\"date\" formControlName=\"screening_date\">\r\n                                    </mat-form-field>\r\n                                </div>\r\n                                <div class=\"col s12 m4 l4\">\r\n                                    <mat-form-field appearance=\"outline\">\r\n                                        <mat-label>Referred By</mat-label>\r\n                                        <input matInput formControlName=\"referred_by\" placeholder=\"Type Here ...\">\r\n                                    </mat-form-field>\r\n                                </div>\r\n                                <div class=\"col s12 m4 l4\">\r\n                                    <div class=\"file-upload-wrapper mt10\"\r\n                                        style=\"border: 1px solid #ccc; padding: 10px; border-radius: 5px;\">\r\n                                        <label style=\"font-size: 13px; color: #555;\">Upload Resume (PDF/DOC)</label>\r\n                                        <input type=\"file\" (change)=\"onFileChange($event)\" accept=\".pdf,.doc,.docx\"\r\n                                            style=\"display: block; width: 100%;\">\r\n                                        <p *ngIf=\"file_name\" class=\"mt5\"\r\n                                            style=\"font-size: 12px; color: green; font-weight: bold;\">Selected:\r\n                                            {{file_name}}</p>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n\r\n                        <div class=\"card-head mt16\">\r\n                            <h2>Personal & Family Information</h2>\r\n                        </div>\r\n                        <div class=\"card-body cs-form\">\r\n                            <div class=\"row\">\r\n                                <div class=\"col s12 m2 l2\">\r\n                                    <mat-form-field appearance=\"outline\">\r\n                                        <mat-label>Age</mat-label>\r\n                                        <input matInput type=\"text\" formControlName=\"age\">\r\n                                    </mat-form-field>\r\n                                </div>\r\n                                <div class=\"col s12 m3 l3\">\r\n                                    <mat-form-field appearance=\"outline\">\r\n                                        <mat-label>Total Experience</mat-label>\r\n                                        <input matInput formControlName=\"total_experience\" placeholder=\"e.g. 5 Years\">\r\n                                    </mat-form-field>\r\n                                </div>\r\n                                <div class=\"col s12 m3 l3\">\r\n                                    <mat-form-field appearance=\"outline\">\r\n                                        <mat-label>Native Place</mat-label>\r\n                                        <input matInput formControlName=\"native_place\">\r\n                                    </mat-form-field>\r\n                                </div>\r\n                                <div class=\"col s12 m4 l4\">\r\n                                    <mat-form-field appearance=\"outline\">\r\n                                        <mat-label>Preferred Work Location</mat-label>\r\n                                        <input matInput formControlName=\"preferred_work_location\">\r\n                                    </mat-form-field>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"row\">\r\n                                <div class=\"col s12 m3 l3\">\r\n                                    <mat-form-field appearance=\"outline\">\r\n                                        <mat-label>Father Name</mat-label>\r\n                                        <input matInput formControlName=\"father_name\">\r\n                                    </mat-form-field>\r\n                                </div>\r\n                                <div class=\"col s12 m3 l3\">\r\n                                    <mat-form-field appearance=\"outline\">\r\n                                        <mat-label>Mother Name</mat-label>\r\n                                        <input matInput formControlName=\"mother_name\">\r\n                                    </mat-form-field>\r\n                                </div>\r\n                                <div class=\"col s12 m3 l3\">\r\n                                    <mat-form-field appearance=\"outline\">\r\n                                        <mat-label>Marital Status</mat-label>\r\n                                        <mat-select formControlName=\"marital_status\">\r\n                                            <mat-option value=\"Single\">Single</mat-option>\r\n                                            <mat-option value=\"Married\">Married</mat-option>\r\n                                        </mat-select>\r\n                                    </mat-form-field>\r\n                                </div>\r\n                                <div class=\"col s12 m3 l3\"\r\n                                    *ngIf=\"candidateForm.get('marital_status').value == 'Married'\">\r\n                                    <mat-form-field appearance=\"outline\">\r\n                                        <mat-label>Spouse Name</mat-label>\r\n                                        <input matInput formControlName=\"spouse_name\">\r\n                                    </mat-form-field>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n\r\n                        <div class=\"card-head mt16\">\r\n                            <h2>Professional Details (Current/Last)</h2>\r\n                        </div>\r\n                        <div class=\"card-body cs-form\">\r\n                            <div class=\"row\">\r\n                                <div class=\"col s12 m4 l4\">\r\n                                    <mat-form-field appearance=\"outline\">\r\n                                        <mat-label>Organization Name</mat-label>\r\n                                        <input matInput formControlName=\"current_org_name\">\r\n                                    </mat-form-field>\r\n                                </div>\r\n                                <div class=\"col s12 m4 l4\">\r\n                                    <mat-form-field appearance=\"outline\">\r\n                                        <mat-label>Base Location</mat-label>\r\n                                        <input matInput formControlName=\"current_org_base_location\">\r\n                                    </mat-form-field>\r\n                                </div>\r\n                                <div class=\"col s12 m4 l4\">\r\n                                    <mat-form-field appearance=\"outline\">\r\n                                        <mat-label>Designation</mat-label>\r\n                                        <input matInput formControlName=\"current_org_designation\">\r\n                                    </mat-form-field>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"row\">\r\n                                <div class=\"col s12 m3 l3\">\r\n                                    <mat-form-field appearance=\"outline\">\r\n                                        <mat-label>Current Salary (CTC)</mat-label>\r\n                                        <input matInput type=\"text\" formControlName=\"current_org_current_salary\">\r\n                                    </mat-form-field>\r\n                                </div>\r\n                                <div class=\"col s12 m3 l3\">\r\n                                    <mat-form-field appearance=\"outline\">\r\n                                        <mat-label>In Hand Salary</mat-label>\r\n                                        <input matInput type=\"text\" formControlName=\"current_org_in_hand_salary\">\r\n                                    </mat-form-field>\r\n                                </div>\r\n                                <div class=\"col s12 m3 l3\">\r\n                                    <mat-form-field appearance=\"outline\">\r\n                                        <mat-label>Expected Salary</mat-label>\r\n                                        <input matInput type=\"text\" formControlName=\"current_org_expected_salary\">\r\n                                    </mat-form-field>\r\n                                </div>\r\n                                <div class=\"col s12 m3 l3\">\r\n                                    <mat-form-field appearance=\"outline\">\r\n                                        <mat-label>Notice Period</mat-label>\r\n                                        <input matInput formControlName=\"current_org_notice_period\">\r\n                                    </mat-form-field>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"row\">\r\n                                <div class=\"col s12 m3 l3\">\r\n                                    <mat-form-field appearance=\"outline\">\r\n                                        <mat-label>Duration</mat-label>\r\n                                        <input matInput formControlName=\"current_org_duration\">\r\n                                    </mat-form-field>\r\n                                </div>\r\n                                <div class=\"col s12 m3 l3\">\r\n                                    <mat-form-field appearance=\"outline\">\r\n                                        <mat-label>Sales Target</mat-label>\r\n                                        <input matInput type=\"text\" formControlName=\"current_org_sales_target\">\r\n                                    </mat-form-field>\r\n                                </div>\r\n                                <div class=\"col s12 m3 l3\">\r\n                                    <mat-form-field appearance=\"outline\">\r\n                                        <mat-label>Last Month Sale</mat-label>\r\n                                        <input matInput type=\"text\" formControlName=\"current_org_last_month_sale\">\r\n                                    </mat-form-field>\r\n                                </div>\r\n                                <div class=\"col s12 m3 l3\">\r\n                                    <mat-form-field appearance=\"outline\">\r\n                                        <mat-label>Total Visits (Per Day)</mat-label>\r\n                                        <input matInput type=\"text\" formControlName=\"current_org_total_visits\">\r\n                                    </mat-form-field>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"row\">\r\n                                <div class=\"col s12 m12 l12\">\r\n                                    <mat-form-field appearance=\"outline\">\r\n                                        <mat-label>Reason for Change</mat-label>\r\n                                        <textarea matInput formControlName=\"current_org_reason_for_change\"\r\n                                            rows=\"2\"></textarea>\r\n                                    </mat-form-field>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n\r\n                        <div class=\"card-head mt16\">\r\n                            <h2>Previous Organization</h2>\r\n                        </div>\r\n                        <div class=\"card-body cs-form\">\r\n                            <div class=\"row\">\r\n                                <div class=\"col s12 m4 l4\">\r\n                                    <mat-form-field appearance=\"outline\">\r\n                                        <mat-label>Organization Name</mat-label>\r\n                                        <input matInput formControlName=\"prev_org_name\">\r\n                                    </mat-form-field>\r\n                                </div>\r\n                                <div class=\"col s12 m4 l4\">\r\n                                    <mat-form-field appearance=\"outline\">\r\n                                        <mat-label>Location</mat-label>\r\n                                        <input matInput formControlName=\"prev_org_location\">\r\n                                    </mat-form-field>\r\n                                </div>\r\n                                <div class=\"col s12 m4 l4\">\r\n                                    <mat-form-field appearance=\"outline\">\r\n                                        <mat-label>Designation</mat-label>\r\n                                        <input matInput formControlName=\"prev_org_designation\">\r\n                                    </mat-form-field>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"row\">\r\n                                <div class=\"col s12 m4 l4\">\r\n                                    <mat-form-field appearance=\"outline\">\r\n                                        <mat-label>Duration</mat-label>\r\n                                        <input matInput formControlName=\"prev_org_duration\">\r\n                                    </mat-form-field>\r\n                                </div>\r\n                                <div class=\"col s12 m4 l4\">\r\n                                    <mat-form-field appearance=\"outline\">\r\n                                        <mat-label>Salary Package</mat-label>\r\n                                        <input matInput type=\"text\" formControlName=\"prev_org_salary_package\">\r\n                                    </mat-form-field>\r\n                                </div>\r\n                                <div class=\"col s12 m4 l4\">\r\n                                    <mat-form-field appearance=\"outline\">\r\n                                        <mat-label>Reason for Change</mat-label>\r\n                                        <input matInput formControlName=\"prev_org_reason_for_change\">\r\n                                    </mat-form-field>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n\r\n                        <div class=\"card-head mt16\">\r\n                            <h2>Additional Details</h2>\r\n                        </div>\r\n                        <div class=\"card-body cs-form mt10 pb20\">\r\n                            <div class=\"row\">\r\n                                <div class=\"col s12 m12 l12\">\r\n                                    <mat-form-field appearance=\"outline\">\r\n                                        <mat-label>Product Knowledge / Category</mat-label>\r\n                                        <textarea matInput formControlName=\"product_knowledge\" rows=\"3\"\r\n                                            placeholder=\"Describe product knowledge\"></textarea>\r\n                                    </mat-form-field>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"row\">\r\n                <div class=\"col s12\">\r\n                    <div class=\"text-right pb50 pt20\">\r\n                        <button mat-raised-button color=\"accent\" type=\"submit\" [disabled]=\"isLoading\">\r\n                            {{isLoading ? 'Saving...' : 'Save'}}\r\n                        </button>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </form>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/hr-recruitment/candidate-add/candidate-add.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/hr-recruitment/candidate-add/candidate-add.component.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/hr-recruitment/candidate-add/candidate-add.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/hr-recruitment/candidate-add/candidate-add.component.ts ***!
  \*************************************************************************/
/*! exports provided: CandidateAddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CandidateAddComponent", function() { return CandidateAddComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_services_DatabaseService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/_services/DatabaseService */ "./src/_services/DatabaseService.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng6-toastr-notifications */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/ng6-toastr-notifications/fesm5/ng6-toastr-notifications.js");






var CandidateAddComponent = /** @class */ (function () {
    function CandidateAddComponent(fb, serve, router, route, toast) {
        this.fb = fb;
        this.serve = serve;
        this.router = router;
        this.route = route;
        this.toast = toast;
        this.isLoading = false;
        this.file = {};
        this.formData = new FormData();
        this.pageType = 'add';
        // OCR properties
        this.ocrImageFile = null;
        this.ocrImageName = '';
        this.ocrImagePreview = '';
        this.isOcrLoading = false;
        this.ocrStatus = '';
        this.ocrStatusType = '';
        this.ocrProgress = '';
        this.ocrRawText = '';
        this.showRawText = false;
        this.candidateForm = this.fb.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            contact_number: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(10)]],
            alternate_number: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(10)]],
            screening_date: [''],
            reporting_mode: [''],
            age: [''],
            total_experience: [''],
            native_place: [''],
            preferred_work_location: [''],
            father_name: [''],
            mother_name: [''],
            marital_status: [''],
            spouse_name: [''],
            current_org_name: [''],
            current_org_base_location: [''],
            current_org_duration: [''],
            current_org_designation: [''],
            current_org_current_salary: [''],
            current_org_in_hand_salary: [''],
            current_org_expected_salary: [''],
            current_org_notice_period: [''],
            current_org_sales_target: [''],
            current_org_last_month_sale: [''],
            current_org_target_audience: [''],
            current_org_total_visits: [''],
            current_org_reason_for_change: [''],
            prev_org_name: [''],
            prev_org_location: [''],
            prev_org_duration: [''],
            prev_org_designation: [''],
            prev_org_salary_package: [''],
            prev_org_reason_for_change: [''],
            product_knowledge: [''],
            referred_by: [''],
            employee_type: [''],
            employee_location: [''],
            updated_date_of_joining: [''],
            resignation_received: [''],
            resignation_remark: [''],
            confirmation_received: [''],
            confirmation_remark: [''],
            kyc_info: [''],
            kyc_received: ['']
        });
    }
    CandidateAddComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            if (params['id']) {
                _this.candidateId = params['id'];
                _this.pageType = 'edit';
                _this.loadCandidate();
            }
        });
    };
    CandidateAddComponent.prototype.loadCandidate = function () {
        var _this = this;
        this.isLoading = true;
        this.serve.post_rqst({ candidate_id: this.candidateId }, "Hr_Recruitment/getCandidateDetails").subscribe(function (res) {
            _this.isLoading = false;
            if (res['statusCode'] == 200) {
                var c = res['candidate'];
                _this.candidateForm.patchValue({
                    name: c.name,
                    contact_number: c.contact_number,
                    alternate_number: c.alternate_number,
                    screening_date: c.screening_date,
                    reporting_mode: c.reporting_mode,
                    referred_by: c.referred_by,
                    age: c.age,
                    total_experience: c.total_experience,
                    native_place: c.native_place,
                    preferred_work_location: c.preferred_work_location,
                    father_name: c.father_name,
                    mother_name: c.mother_name,
                    marital_status: c.marital_status,
                    spouse_name: c.spouse_name,
                    current_org_name: c.current_org_name,
                    current_org_base_location: c.current_org_base_location,
                    current_org_duration: c.current_org_duration,
                    current_org_designation: c.current_org_designation,
                    current_org_current_salary: c.current_org_current_salary,
                    current_org_in_hand_salary: c.current_org_in_hand_salary,
                    current_org_expected_salary: c.current_org_expected_salary,
                    current_org_notice_period: c.current_org_notice_period,
                    current_org_sales_target: c.current_org_sales_target,
                    current_org_last_month_sale: c.current_org_last_month_sale,
                    current_org_target_audience: c.current_org_target_audience,
                    current_org_total_visits: c.current_org_total_visits,
                    current_org_reason_for_change: c.current_org_reason_for_change,
                    prev_org_name: c.prev_org_name,
                    prev_org_location: c.prev_org_location,
                    prev_org_duration: c.prev_org_duration,
                    prev_org_designation: c.prev_org_designation,
                    prev_org_salary_package: c.prev_org_salary_package,
                    prev_org_reason_for_change: c.prev_org_reason_for_change,
                    product_knowledge: c.product_knowledge,
                    employee_type: c.employee_type,
                    employee_location: c.employee_location,
                    updated_date_of_joining: c.updated_date_of_joining,
                    resignation_received: c.resignation_received,
                    resignation_remark: c.resignation_remark,
                    confirmation_received: c.confirmation_received,
                    confirmation_remark: c.confirmation_remark,
                    kyc_info: c.kyc_info,
                    kyc_received: c.kyc_received
                });
            }
        }, function (err) { _this.isLoading = false; });
    };
    CandidateAddComponent.prototype.onFileChange = function (evt) {
        if (evt.target.files && evt.target.files.length) {
            this.file = evt.target.files[0];
            this.file_name = this.file.name;
        }
    };
    CandidateAddComponent.prototype.onOcrImageSelect = function (event) {
        var _this = this;
        if (event.target.files && event.target.files.length) {
            this.ocrImageFile = event.target.files[0];
            this.ocrImageName = this.ocrImageFile.name;
            this.ocrStatus = '';
            this.ocrStatusType = '';
            var reader = new FileReader();
            reader.onload = function (e) {
                _this.ocrImagePreview = e.target.result;
            };
            reader.readAsDataURL(this.ocrImageFile);
        }
    };
    CandidateAddComponent.prototype.extractAndAutoFill = function () {
        var _this = this;
        if (!this.ocrImageFile)
            return;
        this.isOcrLoading = true;
        this.ocrStatus = 'Image processing ho raha hai...';
        this.ocrStatusType = 'info';
        this.ocrProgress = 'Starting OCR engine...';
        Tesseract.recognize(this.ocrImageFile, 'eng', {
            logger: function (m) {
                if (m.status === 'recognizing text') {
                    _this.ocrProgress = "Text extract ho raha hai: " + Math.round(m.progress * 100) + "%";
                }
                else if (m.status === 'loading tesseract core') {
                    _this.ocrProgress = 'OCR engine load ho raha hai...';
                }
                else if (m.status === 'initializing tesseract') {
                    _this.ocrProgress = 'Tesseract initialize ho raha hai...';
                }
                else if (m.status === 'loading language traineddata') {
                    _this.ocrProgress = 'Language data load ho raha hai...';
                }
            }
        }).then(function (_a) {
            var text = _a.data.text;
            _this.isOcrLoading = false;
            _this.ocrProgress = '';
            _this.ocrRawText = text;
            console.log('=== OCR RAW TEXT ===\n', text);
            if (text && text.trim().length > 0) {
                var filled = _this.parseOcrText(text);
                if (filled > 0) {
                    _this.ocrStatus = filled + " fields auto-fill ho gaye! Baaki manually fill karein.";
                    _this.ocrStatusType = 'success';
                    _this.toast.successToastr(filled + " fields auto-fill ho gaye");
                }
                else {
                    _this.ocrStatus = 'Text extract hua lekin fields match nahi hue. Raw text dekho niche.';
                    _this.ocrStatusType = 'warning';
                }
            }
            else {
                _this.ocrStatus = 'Image se text extract nahi hua. Clear image use karein.';
                _this.ocrStatusType = 'error';
            }
        }).catch(function (err) {
            _this.isOcrLoading = false;
            _this.ocrProgress = '';
            _this.ocrStatus = 'Error aaya! Dobara try karein.';
            _this.ocrStatusType = 'error';
            console.error('OCR Error:', err);
        });
    };
    CandidateAddComponent.prototype.parseOcrText = function (text) {
        var _this = this;
        var filledCount = 0;
        // Helpers
        var clean = function (s) { return s
            ? s.replace(/_+/g, '').replace(/\s+/g, ' ').replace(/[)\]]+$/, '').replace(/^[.(«`'"*+\-]+/, '').trim()
            : ''; };
        var patch = function (field, value) {
            var _a;
            var v = clean(value);
            if (v && v.length > 1) {
                _this.candidateForm.patchValue((_a = {}, _a[field] = v, _a));
                filledCount++;
            }
        };
        var g = function (src, pat) { var r = src.match(pat); return r && r[1] ? r[1].trim() : ''; };
        // ── Reference: OCR may garble "Reference" as "pesrece" etc ──────
        patch('referred_by', g(text, /Reference\s*[:\-]\s*([^\n]+)/i)
            || g(text, /[Rr]e[a-z]+ce[,:\s]+([A-Z][A-Z\s]+)/));
        // ── Name (stop before Contact No on same line) ─────────────────
        patch('name', g(text, /Name\s*[:\-]?\s*([A-Z][A-Za-z\s\.]+?)(?=\s+Contact|\n|$)/i));
        // ── Phone: OCR cuts digits; find best digit group ──────────────
        var digGroups = text.match(/\d{4,}/g) || [];
        var bestPhone = digGroups.find(function (d) { return d.length === 10 && /^[6-9]/.test(d); })
            || digGroups.find(function (d) { return d.length >= 4 && /^[6-9]/.test(d); }) || '';
        if (bestPhone)
            patch('contact_number', bestPhone);
        // ── Screening Date: handles garbled prefix, ( as 0 ────────────
        var sdRaw = g(text, /[Dd]ate\s*[.,:_\-]+\s*([\d()\[\]\/\-\.]+\d{4})/i);
        if (sdRaw) {
            var fixed = sdRaw.replace(/[(\[oO]/g, '0').replace(/[^\d\/\-.]/g, '');
            var p = fixed.split(/[\/\-.]/);
            if (p.length === 3 && p[2].length >= 4) {
                var yyyy = p[2].length === 2 ? '20' + p[2] : p[2];
                patch('screening_date', yyyy + "-" + p[0].padStart(2, '0') + "-" + p[1].padStart(2, '0'));
            }
        }
        // ── Age: "26 YEAR" — OCR sometimes drops the number ───────────
        patch('age', g(text, /\bAge\s+_*\s*(\d{2})/i) || g(text, /\b(\d{2})\s*YEAR\b/i));
        // ── Experience: OCR "Tomitxperionce_6 YEAR" ───────────────────
        patch('total_experience', g(text, /[Ee]xp\w+\s*_*\s*(\d+\s*YEAR[S]?)/i)
            || g(text, /[Tt]om\w+\s*_*\s*(\d+\s*YEAR[S]?)/i)
            || g(text, /(\d+\s*YEAR[S]?\b)/i));
        // ── Native / Preferred: exact label OR CITY(STATE) pattern ─────
        patch('native_place', g(text, /nat\w*\s+_*\s*([A-Z][A-Za-z\s]+\([^)]+\))/i)
            || g(text, /Native\s+_*\s*([^\n]+)/i));
        patch('preferred_work_location', g(text, /Preferred\s+work\s+location\s+_*\s*([^\n]+)/i)
            || g(text, /Preferred\s+\w+\s+_*\s*([^\n]+)/i));
        // ── Father / Mother ────────────────────────────────────────────
        patch('father_name', g(text, /Father\s+_*\s*([A-Z][A-Za-z\s\.]{2,25})(?=\n|$)/i));
        patch('mother_name', g(text, /Mother\s+_*\s*([A-Za-z\.]{1,25})(?=\n|$)/i));
        // ── Marital Status ─────────────────────────────────────────────
        if (/\bUNMARRIED\b|\bSINGLE\b/i.test(text))
            patch('marital_status', 'Single');
        else if (/\bMARRIED\b/i.test(text))
            patch('marital_status', 'Married');
        // ── Section split strategy: try "2. Previous" first ───────────
        // fallback: split at first "of change" occurrence (handles garbled "Reason")
        var curr = text;
        var prev = '';
        var prevSecIdx = text.search(/2\.\s*Previous/i);
        if (prevSecIdx > 0) {
            curr = text.substring(0, prevSecIdx);
            prev = text.substring(prevSecIdx);
        }
        else {
            // "of change" appears twice: after current reason & after prev reason
            var ofChangePat = /\bof\s+change\b/gi;
            var ofMatches = [];
            var ocm = void 0;
            while ((ocm = ofChangePat.exec(text)) !== null) {
                ofMatches.push(ocm);
            }
            if (ofMatches[0]) {
                var r1 = ofMatches[0].index;
                curr = text.substring(0, r1 + 60);
                if (ofMatches[1])
                    prev = text.substring(ofMatches[1].index - 150);
            }
        }
        // ── Month-year range pattern (reusable) ────────────────────────
        var monthRange = /((JAN|FEB|MAR|APR|MAY|JUN|JUL|AUG|SEP|OCT|NOV|DEC)[A-Z.]*\.?\s*\d{4}\s+TO\s+(?:PRESENT|[A-Z]+\.?\s*\d{4}))/i;
        // ── Current Org Name: "Organizstion name _ REYNOBOND INDIA sasep sTATIon"
        var orgRaw = g(curr, /[Oo]rgan\w+\s+name\s+_*\s*([A-Z][A-Z\s\.&]+?)(?=\s+sas\w|\s+[Ss][Tt][Aa][Tt]|\s+[Bb]ased|\n|$)/i)
            || g(curr, /\bname\s+_*\s*([A-Z][A-Z\s\.&]+?)(?=\s+sas\w|\s+[Ss][Tt][Aa]|\n|$)/i);
        if (orgRaw)
            patch('current_org_name', orgRaw);
        // ── Base Location: "sasep sTATIon_BIRJAPUR" ────────────────────
        patch('current_org_base_location', g(curr, /[Ss][Tt][Aa][Tt][Ii][Oo][Nn]\s*_*\s*([A-Z]{3,}[A-Za-z]*)/i)
            || g(curr, /sas\w*\s*_*\s*([A-Z]{3,}[A-Za-z]*)/i)
            || g(curr, /BASED\s+STATION\s+_*\s*([A-Z]+)/i));
        // ── Duration: month-year pattern ──────────────────────────────
        patch('current_org_duration', g(curr, monthRange));
        // ── Designation: "Designation __AREA SALES MANAGER" ───────────
        patch('current_org_designation', g(curr, /Desig\w*\s+_*\s*([A-Z][A-Z\s]+?)(?=\s*\n|\s+[A-Z]\s+[a-z]|$)/i));
        // ── In-hand Salary: value immediately after "Salary" ──────────
        // OCR: "Salary 80K e 7.2LAC" — grab word after Salary
        var ihRaw = g(curr, /[Ss]alary\s+_*\s*(\d+[A-Za-z]*)\s/i);
        if (ihRaw && /\d/.test(ihRaw))
            patch('current_org_in_hand_salary', ihRaw);
        // ── CTC: "7.2LAC" on same salary line ─────────────────────────
        patch('current_org_current_salary', g(curr, /[Cc][Tt][Cc]\s+_*\s*([\d\.]+\s*LAC)/i)
            || g(curr, /\b([\d\.]+\s*LAC)/i));
        // ── Expected Salary: "Expected salary 20% - 25%" ──────────────
        patch('current_org_expected_salary', g(curr, /Expected\s+[Ss]alary\s+_*\s*([^\n]{2,25})/i)
            || g(curr, /(\d+%\s*[-–]\s*\d+%)/));
        // ── Notice Period: "Notice Period 1 MONTHS" ───────────────────
        patch('current_org_notice_period', g(curr, /Notice\s+Period\s+_*\s*([^\n]{2,25})/i)
            || g(curr, /(\d+\s*MONTHS?)/i));
        // ── Sales Target: OCR "Sslestager 15LAC lastvonthsale 13 LAC" ─
        // Match first LAC amount before "last"
        patch('current_org_sales_target', g(curr, /[Ss]ales?\w*\s+_*\s*([\d\.]+\s*LAC)/i)
            || g(curr, /([\d\.]+\s*LAC)\s+\w*last/i));
        // ── Last Month Sale: "lastvonthsale 13 LAC" ────────────────────
        patch('current_org_last_month_sale', g(curr, /last\w+\s+_*\s*([\d\.]+\s*LAC)/i));
        // ── Target Audience: OCR "TamgetAudience__PROJECT, CONTRACTOR" ─
        var ta = g(curr, /[Tt]am?get\w*\s*_*\s*([A-Z][^\n]+?)(?=\s*\n|$)/i)
            || g(curr, /Target\s+Audience\s+_*\s*([A-Z][^\n]+?)(?=\s*\n|$)/i);
        if (ta) {
            var tv = clean(ta.replace(/[=i\s]+$/, ''));
            if (tv) {
                this.candidateForm.patchValue({ current_org_target_audience: tv });
                filledCount++;
            }
        }
        // ── Total Visits: OCR "ouinoofvists 10-12" ─────────────────────
        patch('current_org_total_visits', g(curr, /\w*vists?\s+_*\s*(\d+\s*[-–]\s*\d+)/i)
            || g(curr, /(\d+\s*[-–]\s*\d+)\s+Reporting/i));
        // ── Reporting Mode ─────────────────────────────────────────────
        if (/\bCRM\b/i.test(text))
            patch('reporting_mode', 'CRM');
        // ── Current Reason: "Reason of change: FOR GROWTH" ────────────
        var cr = g(curr, /of\s+change\s*[:\-]\s*_*\s*([A-Z][^\n]{1,60})/i);
        if (cr)
            patch('current_org_reason_for_change', cr.replace(/[-\s]+$/, ''));
        // ── Previous section ───────────────────────────────────────────
        if (prev) {
            // OCR: "Orgmitonrame JUBILANTLTD. yeyin. BIRUAP"
            var prevOrgLine = prev.match(/Org\w+\s+([A-Z][A-Z\s\.]+)/i);
            if (prevOrgLine) {
                // org name is everything before first lowercase word
                var fullLine = prevOrgLine[1];
                var orgPart = fullLine.match(/^([A-Z][A-Z\s\.]+?)\s+[a-z]/);
                patch('prev_org_name', orgPart ? orgPart[1] : fullLine.split(/\s{2,}/)[0]);
                // location is last ALL-CAPS word on same line
                var locPart = fullLine.match(/([A-Z]{3,})\s*$/);
                if (locPart)
                    patch('prev_org_location', locPart[1]);
            }
            // Duration: month-year pattern
            patch('prev_org_duration', g(prev, monthRange));
            // Designation: "Designation____TSM"
            patch('prev_org_designation', g(prev, /Desig\w*\s+_*\s*([A-Z]{2,10})\b/i));
            // Salary package: OCR "Sdarypackge 47K"
            var ps = g(prev, /[Ss]\w*ary\w*\s+_*\s*(\d+[A-Za-z]*K?\b)/i)
                || g(prev, /(\d+K)\b/i);
            if (ps && /\d/.test(ps))
                patch('prev_org_salary_package', ps);
            // Reason: OCR "8850n of change: _ QUALITY ISSUES"
            var pr = g(prev, /of\s+change\s*[:\-]?\s*_*\s*([A-Z][^\n]{1,60})/i);
            if (pr)
                patch('prev_org_reason_for_change', pr.replace(/[.\s)]+$/, ''));
        }
        return filledCount;
    };
    CandidateAddComponent.prototype.submit = function () {
        var _this = this;
        if (this.candidateForm.invalid) {
            Object.keys(this.candidateForm.controls).forEach(function (key) {
                _this.candidateForm.get(key).markAsTouched();
            });
            return;
        }
        this.isLoading = true;
        var data = this.candidateForm.value;
        if (this.pageType == 'edit') {
            data['candidate_id'] = this.candidateId;
            this.serve.post_rqst(data, "Hr_Recruitment/updateCandidate").subscribe(function (res) {
                if (res['statusCode'] == 200) {
                    if (_this.file && _this.file_name) {
                        _this.formData = new FormData(); // Reset formData
                        _this.formData.append('resume_file', _this.file, _this.file.name);
                        _this.formData.append('id', _this.candidateId);
                        _this.serve.FileData(_this.formData, "Hr_Recruitment/insertCandidateResume").subscribe(function (res2) {
                            _this.isLoading = false;
                            if (res2['statusCode'] == 200) {
                                _this.toast.successToastr("Candidate and Resume updated successfully");
                                _this.router.navigate(['/hr-recruitment/detail/' + _this.candidateId]);
                            }
                            else {
                                _this.toast.errorToastr(res2['statusMsg']);
                                _this.router.navigate(['/hr-recruitment/detail/' + _this.candidateId]);
                            }
                        }, function (err) {
                            _this.isLoading = false;
                            _this.router.navigate(['/hr-recruitment/detail/' + _this.candidateId]);
                        });
                    }
                    else {
                        _this.isLoading = false;
                        _this.toast.successToastr("Candidate updated successfully");
                        _this.router.navigate(['/hr-recruitment/detail/' + _this.candidateId]);
                    }
                }
                else {
                    _this.isLoading = false;
                    _this.toast.errorToastr(res['statusMsg']);
                }
            }, function (err) { _this.isLoading = false; });
        }
        else {
            this.serve.post_rqst(data, "Hr_Recruitment/addCandidate").subscribe(function (res) {
                if (res['statusCode'] == 200) {
                    var candidateId = res['id'];
                    if (_this.file && _this.file_name) {
                        _this.formData.append('resume_file', _this.file, _this.file.name);
                        _this.formData.append('id', candidateId);
                        _this.serve.FileData(_this.formData, "Hr_Recruitment/insertCandidateResume").subscribe(function (res2) {
                            _this.isLoading = false;
                            if (res2['statusCode'] == 200) {
                                _this.toast.successToastr("Candidate and Resume added successfully");
                                _this.router.navigate(['/hr-recruitment']);
                            }
                            else {
                                _this.toast.errorToastr(res2['statusMsg']);
                                _this.router.navigate(['/hr-recruitment']);
                            }
                        }, function (err) {
                            _this.isLoading = false;
                            _this.router.navigate(['/hr-recruitment']);
                        });
                    }
                    else {
                        _this.isLoading = false;
                        _this.toast.successToastr("Candidate added successfully");
                        _this.router.navigate(['/hr-recruitment']);
                    }
                }
                else {
                    _this.isLoading = false;
                    _this.toast.errorToastr(res['statusMsg']);
                }
            }, function (err) { _this.isLoading = false; });
        }
    };
    CandidateAddComponent.prototype.MobileNumber = function (event) {
        var pattern = /[0-9\+\-\ ]/;
        var inputChar = String.fromCharCode(event.charCode);
        if (event.keyCode != 8 && !pattern.test(inputChar)) {
            event.preventDefault();
        }
    };
    CandidateAddComponent.prototype.goBack = function () {
        this.router.navigate(['/hr-recruitment']);
    };
    CandidateAddComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-candidate-add',
            template: __webpack_require__(/*! ./candidate-add.component.html */ "./src/app/hr-recruitment/candidate-add/candidate-add.component.html"),
            styles: [__webpack_require__(/*! ./candidate-add.component.scss */ "./src/app/hr-recruitment/candidate-add/candidate-add.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"], src_services_DatabaseService__WEBPACK_IMPORTED_MODULE_3__["DatabaseService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_5__["ToastrManager"]])
    ], CandidateAddComponent);
    return CandidateAddComponent;
}());



/***/ }),

/***/ "./src/app/hr-recruitment/candidate-detail/candidate-detail.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/hr-recruitment/candidate-detail/candidate-detail.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-container\">\r\n    <div class=\"tools-container\">\r\n        <a mat-icon-button matTooltip=\"Back\" (click)=\"back()\">\r\n            <i class=\"material-icons\">arrow_back</i>\r\n        </a>\r\n        <h2>Candidate Details</h2>\r\n        <div class=\"left-auto left-auto df ac flex-gap-10\">\r\n            <button *ngIf=\"candidateDetail.current_stage != 'Rejected' && candidateDetail.current_stage != 'Withdrawal' && candidateDetail.current_stage != 'Joined'\" mat-button class=\"ouline-btns\" (click)=\"editCandidate()\" style=\"margin-right: 8px;\">\r\n                <i class=\"material-icons\" style=\"font-size:18px;margin-right:4px;\">edit</i> Edit Info\r\n            </button>\r\n            <button mat-button class=\"ouline-btns\" (click)=\"openSalaryModal()\" style=\"margin-right: 8px;\">\r\n                <i class=\"material-icons\" style=\"font-size:18px;margin-right:4px;color:#1565c0;\">calculate</i> Salary\r\n            </button>\r\n            <button mat-button class=\"ouline-btns\" (click)=\"openOfferModal()\" style=\"margin-right: 8px;\">\r\n                <i class=\"material-icons\" style=\"font-size:18px;margin-right:4px;color:#2e7d32;\">mail</i> Offer Letter\r\n            </button>\r\n            <button mat-button class=\"ouline-btns pdf\" (click)=\"exportPdf()\">\r\n                <img src=\"assets/img/icons/pdf.png\"> Export PDF\r\n            </button>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"container pt10 pl0 pr0 pb50\">\r\n        <div class=\"row\" *ngIf=\"!isLoading\">\r\n            <div class=\"col s12 m8 l8\">\r\n\r\n                <!-- Profile Header Card -->\r\n                <div class=\"card profile-card\">\r\n                    <div class=\"profile-header\">\r\n                        <div class=\"profile-avatar\"\r\n                            [ngClass]=\"{'av-pass': candidateDetail.current_status == 'Pass', 'av-fail': candidateDetail.current_status == 'Fail', 'av-hold': candidateDetail.current_status == 'Hold', 'av-pending': candidateDetail.current_status == 'Pending'}\">\r\n                            {{candidateDetail.name?.substring(0,1).toUpperCase()}}\r\n                        </div>\r\n                        <div class=\"profile-info\">\r\n                            <h1>{{candidateDetail.name | titlecase}}</h1>\r\n                            <p class=\"profile-contact\">{{candidateDetail.contact_number}}</p>\r\n                            <div class=\"profile-badges\">\r\n                                <span class=\"badge badge-id\">#CAND-{{candidateDetail.id}}</span>\r\n                                <span class=\"badge badge-stage\">{{candidateDetail.current_stage}}</span>\r\n                                <span class=\"badge\"\r\n                                    [ngClass]=\"{'badge-pass': candidateDetail.current_status == 'Pass', 'badge-fail': candidateDetail.current_status == 'Fail', 'badge-hold': candidateDetail.current_status == 'Hold', 'badge-pending': candidateDetail.current_status == 'Pending'}\">\r\n                                    {{candidateDetail.current_status}}\r\n                                </span>\r\n                                <button *ngIf=\"candidateDetail.current_stage != 'Rejected' && candidateDetail.current_stage != 'Withdrawal' && candidateDetail.current_stage != 'Joined'\" mat-icon-button\r\n                                    color=\"primary\" matTooltip=\"Update Status\" (click)=\"openStatusModal()\"\r\n                                    style=\"width: 28px; height: 28px; line-height: 28px;\">\r\n                                    <i class=\"material-icons\" style=\"font-size: 18px;\">edit</i>\r\n                                </button>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"profile-meta\">\r\n                        <div class=\"meta-item\" *ngIf=\"candidateDetail.screening_date && candidateDetail.screening_date != '0000-00-00'\">\r\n                            <i class=\"material-icons\">event</i>\r\n                            <span>Screening: {{candidateDetail.screening_date | date:'d MMM yyyy'}}</span>\r\n                        </div>\r\n                        <div class=\"meta-item\" *ngIf=\"candidateDetail.reporting_mode\">\r\n                            <i class=\"material-icons\">headset_mic</i>\r\n                            <span>{{candidateDetail.reporting_mode}}</span>\r\n                        </div>\r\n                        <div class=\"meta-item\" *ngIf=\"candidateDetail.assigned_manager_name\">\r\n                            <i class=\"material-icons\">supervisor_account</i>\r\n                            <span>Manager: {{candidateDetail.assigned_manager_name}}</span>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n                <!-- Selection Details -->\r\n                <div class=\"card mt16 selection-card\" *ngIf=\"candidateDetail.final_designation\">\r\n                    <div class=\"card-head\">\r\n                        <i class=\"material-icons section-icon\" style=\"color: #16a34a;\">verified</i>\r\n                        <h2>Selection Details</h2>\r\n                    </div>\r\n                    <div class=\"card-body\">\r\n                        <div class=\"grid-box four\">\r\n                            <div class=\"block-feilds highlight-field\">\r\n                                <span>Designation</span>\r\n                                <p><strong>{{candidateDetail.final_designation}}</strong></p>\r\n                            </div>\r\n                            <div class=\"block-feilds highlight-field\">\r\n                                <span>Salary</span>\r\n                                <p><strong>{{candidateDetail.final_salary}}</strong></p>\r\n                            </div>\r\n                            <div class=\"block-feilds\">\r\n                                <span>Base Station</span>\r\n                                <p>{{candidateDetail.final_base_station}}</p>\r\n                            </div>\r\n                            <div class=\"block-feilds\">\r\n                                <span>DOC</span>\r\n                                <p>{{(candidateDetail.final_doc_date && candidateDetail.final_doc_date != '0000-00-00')\r\n                                    ? (candidateDetail.final_doc_date | date:'d MMM yyyy') : '---'}}</p>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n                <!-- Current Organization -->\r\n                <div class=\"card mt16\">\r\n                    <div class=\"card-head\">\r\n                        <i class=\"material-icons section-icon\" style=\"color: #2563eb;\">business</i>\r\n                        <h2>Current Organization</h2>\r\n                    </div>\r\n                    <div class=\"card-body\">\r\n                        <div class=\"grid-box three\">\r\n                            <div class=\"block-feilds\">\r\n                                <span>Organization</span>\r\n                                <p>{{candidateDetail.current_org_name || 'N/A'}}</p>\r\n                            </div>\r\n                            <div class=\"block-feilds\">\r\n                                <span>Designation</span>\r\n                                <p>{{candidateDetail.current_org_designation || 'N/A'}}</p>\r\n                            </div>\r\n                            <div class=\"block-feilds\">\r\n                                <span>Base Location</span>\r\n                                <p>{{candidateDetail.current_org_base_location || 'N/A'}}</p>\r\n                            </div>\r\n                            <div class=\"block-feilds\">\r\n                                <span>Duration</span>\r\n                                <p>{{candidateDetail.current_org_duration || 'N/A'}}</p>\r\n                            </div>\r\n                            <div class=\"block-feilds\">\r\n                                <span>Current Salary (CTC)</span>\r\n                                <p>{{candidateDetail.current_org_current_salary || 'N/A'}}</p>\r\n                            </div>\r\n                            <div class=\"block-feilds\">\r\n                                <span>In Hand Salary</span>\r\n                                <p>{{candidateDetail.current_org_in_hand_salary || 'N/A'}}</p>\r\n                            </div>\r\n                            <div class=\"block-feilds\">\r\n                                <span>Expected Salary</span>\r\n                                <p>{{candidateDetail.current_org_expected_salary || 'N/A'}}</p>\r\n                            </div>\r\n                            <div class=\"block-feilds\">\r\n                                <span>Notice Period</span>\r\n                                <p>{{candidateDetail.current_org_notice_period || 'N/A'}}</p>\r\n                            </div>\r\n                            <div class=\"block-feilds\" *ngIf=\"candidateDetail.current_org_sales_target\">\r\n                                <span>Sales Target</span>\r\n                                <p>{{candidateDetail.current_org_sales_target}}</p>\r\n                            </div>\r\n                            <div class=\"block-feilds\" *ngIf=\"candidateDetail.current_org_last_month_sale\">\r\n                                <span>Last Month Sale</span>\r\n                                <p>{{candidateDetail.current_org_last_month_sale}}</p>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"grid-box\" style=\"margin-top: 15px;\"\r\n                            *ngIf=\"candidateDetail.current_org_reason_for_change\">\r\n                            <div class=\"block-feilds\">\r\n                                <span>Reason for Change</span>\r\n                                <p>{{candidateDetail.current_org_reason_for_change}}</p>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n                <!-- Personal Details -->\r\n                <div class=\"card mt16\">\r\n                    <div class=\"card-head\">\r\n                        <i class=\"material-icons section-icon\" style=\"color: #7c3aed;\">person</i>\r\n                        <h2>Personal Details</h2>\r\n                    </div>\r\n                    <div class=\"card-body\">\r\n                        <div class=\"grid-box three\">\r\n                            <div class=\"block-feilds\">\r\n                                <span>Age</span>\r\n                                <p>{{candidateDetail.age || 'N/A'}}</p>\r\n                            </div>\r\n                            <div class=\"block-feilds\">\r\n                                <span>Total Experience</span>\r\n                                <p>{{candidateDetail.total_experience || 'N/A'}}</p>\r\n                            </div>\r\n                            <div class=\"block-feilds\">\r\n                                <span>Native Place</span>\r\n                                <p>{{candidateDetail.native_place || 'N/A'}}</p>\r\n                            </div>\r\n                            <div class=\"block-feilds\">\r\n                                <span>Preferred Work Location</span>\r\n                                <p>{{candidateDetail.preferred_work_location || 'N/A'}}</p>\r\n                            </div>\r\n                            <div class=\"block-feilds\">\r\n                                <span>Father Name</span>\r\n                                <p>{{candidateDetail.father_name || 'N/A'}}</p>\r\n                            </div>\r\n                            <div class=\"block-feilds\">\r\n                                <span>Mother Name</span>\r\n                                <p>{{candidateDetail.mother_name || 'N/A'}}</p>\r\n                            </div>\r\n                            <div class=\"block-feilds\">\r\n                                <span>Marital Status</span>\r\n                                <p>{{candidateDetail.marital_status || 'N/A'}}</p>\r\n                            </div>\r\n                            <div class=\"block-feilds\" *ngIf=\"candidateDetail.spouse_name\">\r\n                                <span>Spouse Name</span>\r\n                                <p>{{candidateDetail.spouse_name}}</p>\r\n                            </div>\r\n                            <div class=\"block-feilds\" *ngIf=\"candidateDetail.employee_type\">\r\n                                <span>Employee Type</span>\r\n                                <p>{{candidateDetail.employee_type}}</p>\r\n                            </div>\r\n                            <div class=\"block-feilds\" *ngIf=\"candidateDetail.employee_location\">\r\n                                <span>{{candidateDetail.employee_type == 'Plant' ? 'Plant Location' : 'Admin Location'}}</span>\r\n                                <p>{{candidateDetail.employee_location}}</p>\r\n                            </div>\r\n                            <div class=\"block-feilds\" *ngIf=\"candidateDetail.date_of_joining && candidateDetail.date_of_joining != '0000-00-00'\">\r\n                                <span>Date of Joining</span>\r\n                                <p>{{candidateDetail.date_of_joining | date:'d MMM yyyy'}}</p>\r\n                            </div>\r\n                            <div class=\"block-feilds\" *ngIf=\"candidateDetail.updated_date_of_joining && candidateDetail.updated_date_of_joining != '0000-00-00'\">\r\n                                <span>Updated Date of Joining</span>\r\n                                <p style=\"color: #16a34a; font-weight: 600;\">{{candidateDetail.updated_date_of_joining | date:'d MMM yyyy'}}</p>\r\n                            </div>\r\n                            <div class=\"block-feilds\" *ngIf=\"candidateDetail.resignation_received\">\r\n                                <span>Resignation Received</span>\r\n                                <p [style.color]=\"candidateDetail.resignation_received == 'Yes' ? '#16a34a' : '#dc2626'\">\r\n                                    <strong>{{candidateDetail.resignation_received}}</strong>\r\n                                    <span *ngIf=\"candidateDetail.resignation_remark\" style=\"color: #555; font-weight: 400;\"> — {{candidateDetail.resignation_remark}}</span>\r\n                                </p>\r\n                            </div>\r\n                            <div class=\"block-feilds\" *ngIf=\"candidateDetail.confirmation_received\">\r\n                                <span>Confirmation Received</span>\r\n                                <p [style.color]=\"candidateDetail.confirmation_received == 'Yes' ? '#16a34a' : '#dc2626'\">\r\n                                    <strong>{{candidateDetail.confirmation_received}}</strong>\r\n                                    <span *ngIf=\"candidateDetail.confirmation_remark\" style=\"color: #555; font-weight: 400;\"> — {{candidateDetail.confirmation_remark}}</span>\r\n                                </p>\r\n                            </div>\r\n                            <div class=\"block-feilds\" *ngIf=\"candidateDetail.kyc_info\" style=\"grid-column: 1 / -1;\">\r\n                                <span>KYC Info</span>\r\n                                <p style=\"white-space: pre-wrap;\">{{candidateDetail.kyc_info}}</p>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n                <!-- Previous Organization -->\r\n                <div class=\"card mt16\" *ngIf=\"candidateDetail.prev_org_name\">\r\n                    <div class=\"card-head\">\r\n                        <i class=\"material-icons section-icon\" style=\"color: #ea580c;\">history</i>\r\n                        <h2>Previous Organization</h2>\r\n                    </div>\r\n                    <div class=\"card-body\">\r\n                        <div class=\"grid-box three\">\r\n                            <div class=\"block-feilds\">\r\n                                <span>Organization</span>\r\n                                <p>{{candidateDetail.prev_org_name}}</p>\r\n                            </div>\r\n                            <div class=\"block-feilds\">\r\n                                <span>Location</span>\r\n                                <p>{{candidateDetail.prev_org_location || 'N/A'}}</p>\r\n                            </div>\r\n                            <div class=\"block-feilds\">\r\n                                <span>Designation</span>\r\n                                <p>{{candidateDetail.prev_org_designation || 'N/A'}}</p>\r\n                            </div>\r\n                            <div class=\"block-feilds\">\r\n                                <span>Duration</span>\r\n                                <p>{{candidateDetail.prev_org_duration || 'N/A'}}</p>\r\n                            </div>\r\n                            <div class=\"block-feilds\">\r\n                                <span>Salary Package</span>\r\n                                <p>{{candidateDetail.prev_org_salary_package || 'N/A'}}</p>\r\n                            </div>\r\n                            <div class=\"block-feilds\" *ngIf=\"candidateDetail.prev_org_reason_for_change\">\r\n                                <span>Reason for Change</span>\r\n                                <p>{{candidateDetail.prev_org_reason_for_change}}</p>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n                <!-- Product Knowledge -->\r\n                <div class=\"card mt16\" *ngIf=\"candidateDetail.product_knowledge\">\r\n                    <div class=\"card-head\">\r\n                        <i class=\"material-icons section-icon\" style=\"color: #0891b2;\">category</i>\r\n                        <h2>Product Knowledge</h2>\r\n                    </div>\r\n                    <div class=\"card-body\">\r\n                        <p style=\"font-size: 13px; color: #374151; line-height: 1.6;\">{{candidateDetail.product_knowledge}}</p>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n            <!-- Right Sidebar -->\r\n            <div class=\"col s12 m4 l4\">\r\n                <!-- Resume -->\r\n                <div class=\"card\">\r\n                    <div class=\"card-head\">\r\n                        <i class=\"material-icons section-icon\" style=\"color: #dc2626;\">description</i>\r\n                        <h2>Resume</h2>\r\n                    </div>\r\n                    <div class=\"card-body\">\r\n                        <a *ngIf=\"candidateDetail.resume_file\"\r\n                            [href]=\"serve.uploadUrl + 'Pdf/' + candidateDetail.resume_file\" target=\"_blank\"\r\n                            class=\"resume-download-btn\">\r\n                            <i class=\"material-icons\">download</i> Download Resume\r\n                        </a>\r\n                        <p *ngIf=\"!candidateDetail.resume_file\" class=\"no-data-text\">No resume uploaded</p>\r\n                    </div>\r\n                </div>\r\n\r\n                <!-- Negotiation Document -->\r\n                <div class=\"card mt16\" *ngIf=\"candidateDetail.current_stage == 'Under Negotiation' || candidateDetail.negotiation_doc\">\r\n                    <div class=\"card-head\">\r\n                        <i class=\"material-icons section-icon\" style=\"color: #7c3aed;\">folder</i>\r\n                        <h2>Negotiation Document</h2>\r\n                    </div>\r\n                    <div class=\"card-body\">\r\n                        <a *ngIf=\"candidateDetail.negotiation_doc\"\r\n                            [href]=\"serve.uploadUrl + 'Pdf/' + candidateDetail.negotiation_doc\" target=\"_blank\"\r\n                            class=\"resume-download-btn\">\r\n                            <i class=\"material-icons\">download</i> Download Document\r\n                        </a>\r\n                        <p *ngIf=\"!candidateDetail.negotiation_doc\" class=\"no-data-text\">No document uploaded</p>\r\n                        <div style=\"margin-top: 10px; border-top: 1px solid #f1f5f9; padding-top: 10px;\">\r\n                            <label style=\"font-size: 12px; color: #555; display: block; margin-bottom: 6px;\">\r\n                                {{candidateDetail.negotiation_doc ? 'Replace Document' : 'Upload Document'}}\r\n                            </label>\r\n                            <input type=\"file\" (change)=\"uploadNegotiationDoc($event)\" accept=\".pdf,.doc,.docx\"\r\n                                style=\"display: block; width: 100%; font-size: 12px;\">\r\n                            <p *ngIf=\"negotiationDocUploading\" style=\"font-size: 12px; color: #2563eb; margin-top: 4px;\">Uploading...</p>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n                <!-- Remarks -->\r\n                <div class=\"card mt16\" *ngIf=\"candidateDetail.current_stage != 'Rejected' && candidateDetail.current_stage != 'Withdrawal' && candidateDetail.current_stage != 'Joined'\">\r\n                    <div class=\"card-head\">\r\n                        <i class=\"material-icons section-icon\" style=\"color: #d97706;\">forum</i>\r\n                        <h2>Remarks</h2>\r\n                    </div>\r\n                    <div class=\"card-body\">\r\n                        <mat-form-field appearance=\"outline\" style=\"width:100%;\">\r\n                            <mat-label>Add Remark / Plan</mat-label>\r\n                            <textarea matInput [(ngModel)]=\"negotiationRemark\" rows=\"3\"\r\n                                placeholder=\"e.g. Salary discussion on hold, will follow up Monday...\"></textarea>\r\n                        </mat-form-field>\r\n                        <div style=\"text-align:right;\">\r\n                            <button mat-raised-button color=\"primary\" [disabled]=\"negotiationRemarkSaving\"\r\n                                (click)=\"addNegotiationRemark()\">\r\n                                <i class=\"material-icons\" style=\"font-size:16px;vertical-align:middle;margin-right:4px;\">add</i>\r\n                                {{negotiationRemarkSaving ? 'Adding...' : 'Add Remark'}}\r\n                            </button>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n                <!-- Activity Trail -->\r\n                <div class=\"card mt16\">\r\n                    <div class=\"card-head\">\r\n                        <i class=\"material-icons section-icon\" style=\"color: #2563eb;\">timeline</i>\r\n                        <h2>Activity Trail</h2>\r\n                    </div>\r\n                    <div class=\"card-body\" style=\"padding-bottom: 5px;\">\r\n                        <div class=\"timeline\" *ngIf=\"activityLogs?.length > 0\">\r\n                            <div class=\"timeline-item\" *ngFor=\"let log of activityLogs; let last = last\"\r\n                                [class.last-item]=\"last\">\r\n                                <div class=\"timeline-marker\"\r\n                                    [ngClass]=\"{'marker-green': log.action?.includes('Created'), 'marker-orange': log.action?.includes('Updated'), 'marker-purple': log.action?.startsWith('Remark')}\">\r\n                                </div>\r\n                                <div class=\"timeline-content\">\r\n                                    <h3 class=\"timeline-title\">{{log.action}}</h3>\r\n                                    <p class=\"timeline-description\">\r\n                                        <ng-container\r\n                                            *ngFor=\"let part of log.description.split('. Remarks: '); let first = first\">\r\n                                            <span *ngIf=\"first\">{{part}}</span>\r\n                                            <span class=\"timeline-remarks\" *ngIf=\"!first && editingRemarkId != log.id\">\r\n                                                <strong>Remarks:</strong> {{part}}\r\n                                            </span>\r\n                                        </ng-container>\r\n                                    </p>\r\n                                    <div *ngIf=\"editingRemarkId == log.id\" style=\"margin-top: 6px;\">\r\n                                        <mat-form-field appearance=\"outline\" style=\"width:100%;font-size:12px;\">\r\n                                            <mat-label>Remark</mat-label>\r\n                                            <textarea matInput [(ngModel)]=\"editingRemarkText\" rows=\"2\"></textarea>\r\n                                        </mat-form-field>\r\n                                        <div style=\"display:flex;gap:6px;margin-top:2px;\">\r\n                                            <button mat-raised-button color=\"primary\" style=\"font-size:11px;height:28px;line-height:28px;\" [disabled]=\"remarkSaving\" (click)=\"saveRemark(log)\">\r\n                                                {{remarkSaving ? 'Saving...' : 'Save'}}\r\n                                            </button>\r\n                                            <button mat-stroked-button style=\"font-size:11px;height:28px;line-height:28px;\" (click)=\"cancelEditRemark()\">Cancel</button>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"timeline-meta\">\r\n                                        <span class=\"user\">\r\n                                            <i class=\"material-icons\">person</i>\r\n                                            {{log.created_by || 'Admin'}}\r\n                                        </span>\r\n                                        <span class=\"date\">\r\n                                            <i class=\"material-icons\">schedule</i>\r\n                                            {{log.created_at | date:'d MMM yyyy, h:mm a'}}\r\n                                        </span>\r\n                                        <span *ngIf=\"editingRemarkId != log.id\" style=\"margin-left:auto;cursor:pointer;\" (click)=\"startEditRemark(log)\" matTooltip=\"Edit Remark\">\r\n                                            <i class=\"material-icons\" style=\"font-size:14px;color:#6b7280;\">edit</i>\r\n                                        </span>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <p *ngIf=\"!activityLogs?.length\" class=\"no-data-text\">No activity yet</p>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <!-- Loader -->\r\n        <div class=\"row\" *ngIf=\"isLoading\">\r\n            <div class=\"col s12 text-center p20\">\r\n                <span>Loading...</span>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <!-- Salary Breakup Modal -->\r\n    <div class=\"offer-modal-overlay\" *ngIf=\"showSalaryModal\" (click)=\"closeSalaryModal()\">\r\n        <div class=\"offer-modal\" style=\"max-width:1100px;width:98%;\" (click)=\"$event.stopPropagation()\">\r\n            <div class=\"offer-modal-header\">\r\n                <h3>Salary Breakup (CTC)</h3>\r\n                <button mat-icon-button (click)=\"closeSalaryModal()\">\r\n                    <i class=\"material-icons\">close</i>\r\n                </button>\r\n            </div>\r\n            <div class=\"offer-modal-body\" style=\"max-height:88vh;overflow-y:auto;\">\r\n                <div class=\"cs-form\">\r\n                    <div style=\"display:flex;gap:10px;\">\r\n                        <mat-form-field appearance=\"outline\" style=\"flex:1;\">\r\n                            <mat-label>Employee Name</mat-label>\r\n                            <input matInput [(ngModel)]=\"salaryData.emp_name\">\r\n                        </mat-form-field>\r\n                        <mat-form-field appearance=\"outline\" style=\"flex:1;\">\r\n                            <mat-label>Designation</mat-label>\r\n                            <input matInput [(ngModel)]=\"salaryData.designation\">\r\n                        </mat-form-field>\r\n                        <mat-form-field appearance=\"outline\" style=\"flex:1;\">\r\n                            <mat-label>Location</mat-label>\r\n                            <input matInput [(ngModel)]=\"salaryData.location\">\r\n                        </mat-form-field>\r\n                        <mat-form-field appearance=\"outline\" style=\"flex:1;\">\r\n                            <mat-label>W.E.F Date</mat-label>\r\n                            <input matInput type=\"date\" [(ngModel)]=\"salaryData.wef_date\">\r\n                        </mat-form-field>\r\n                    </div>\r\n                    <!-- Sheet Type Selector -->\r\n                    <div style=\"margin-bottom:14px;\">\r\n                        <p style=\"font-size:12px;color:#666;margin:0 0 6px 0;font-weight:500;\">Sheet Type</p>\r\n                        <div style=\"display:flex;gap:0;border:1px solid #d1d5db;border-radius:8px;overflow:hidden;\">\r\n                            <button type=\"button\" (click)=\"salaryData.sheet_type='PLANT HSP';onSheetTypeChange()\"\r\n                                [style.background]=\"salaryData.sheet_type=='PLANT HSP' ? '#1565c0' : '#fff'\"\r\n                                [style.color]=\"salaryData.sheet_type=='PLANT HSP' ? '#fff' : '#374151'\"\r\n                                style=\"flex:1;padding:9px 6px;font-size:12px;font-weight:600;border:none;border-right:1px solid #d1d5db;cursor:pointer;transition:all 0.2s;\">\r\n                                PLANT HSP<br><span style=\"font-size:10px;font-weight:400;opacity:0.85;\">Hoshiarpur</span>\r\n                            </button>\r\n                            <button type=\"button\" (click)=\"salaryData.sheet_type='KN PLANT';onSheetTypeChange()\"\r\n                                [style.background]=\"salaryData.sheet_type=='KN PLANT' ? '#1565c0' : '#fff'\"\r\n                                [style.color]=\"salaryData.sheet_type=='KN PLANT' ? '#fff' : '#374151'\"\r\n                                style=\"flex:1;padding:9px 6px;font-size:12px;font-weight:600;border:none;border-right:1px solid #d1d5db;cursor:pointer;transition:all 0.2s;\">\r\n                                KN PLANT<br><span style=\"font-size:10px;font-weight:400;opacity:0.85;\">Chamrajnagar</span>\r\n                            </button>\r\n                            <button type=\"button\" (click)=\"salaryData.sheet_type='SALES';onSheetTypeChange()\"\r\n                                [style.background]=\"salaryData.sheet_type=='SALES' ? '#1565c0' : '#fff'\"\r\n                                [style.color]=\"salaryData.sheet_type=='SALES' ? '#fff' : '#374151'\"\r\n                                style=\"flex:1;padding:9px 6px;font-size:12px;font-weight:600;border:none;cursor:pointer;transition:all 0.2s;\">\r\n                                SALES<br><span style=\"font-size:10px;font-weight:400;opacity:0.85;\">Sales Staff</span>\r\n                            </button>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <!-- Input Mode Toggle -->\r\n                    <div style=\"display:flex;gap:0;border:1px solid #d1d5db;border-radius:8px;overflow:hidden;margin-bottom:12px;\">\r\n                        <button type=\"button\" (click)=\"salaryData.input_mode='gross';onInputModeChange()\"\r\n                            [style.background]=\"salaryData.input_mode=='gross' ? '#2e7d32' : '#fff'\"\r\n                            [style.color]=\"salaryData.input_mode=='gross' ? '#fff' : '#374151'\"\r\n                            style=\"flex:1;padding:9px 10px;font-size:13px;font-weight:600;border:none;border-right:1px solid #d1d5db;cursor:pointer;\">\r\n                            <i class=\"material-icons\" style=\"font-size:16px;vertical-align:middle;margin-right:4px;\">payments</i>\r\n                            Enter Gross\r\n                        </button>\r\n                        <button type=\"button\" (click)=\"salaryData.input_mode='ctc';onInputModeChange()\"\r\n                            [style.background]=\"salaryData.input_mode=='ctc' ? '#2e7d32' : '#fff'\"\r\n                            [style.color]=\"salaryData.input_mode=='ctc' ? '#fff' : '#374151'\"\r\n                            style=\"flex:1;padding:9px 10px;font-size:13px;font-weight:600;border:none;cursor:pointer;\">\r\n                            <i class=\"material-icons\" style=\"font-size:16px;vertical-align:middle;margin-right:4px;\">account_balance_wallet</i>\r\n                            Enter CTC / Month\r\n                        </button>\r\n                    </div>\r\n\r\n                    <!-- Gross Input -->\r\n                    <mat-form-field *ngIf=\"salaryData.input_mode=='gross'\" appearance=\"outline\" style=\"width:100%;\">\r\n                        <mat-label>Gross Salary (₹)</mat-label>\r\n                        <input matInput type=\"number\" [(ngModel)]=\"salaryData.gross\" (ngModelChange)=\"onGrossChange()\" placeholder=\"Enter gross salary\">\r\n                    </mat-form-field>\r\n\r\n                    <!-- CTC Input -->\r\n                    <div *ngIf=\"salaryData.input_mode=='ctc'\" style=\"display:flex;gap:10px;align-items:flex-start;\">\r\n                        <mat-form-field appearance=\"outline\" style=\"flex:1;\">\r\n                            <mat-label>CTC per Month (₹)</mat-label>\r\n                            <input matInput type=\"number\" [(ngModel)]=\"salaryData.ctc_input\" (ngModelChange)=\"onCtcInputChange()\" placeholder=\"Enter target CTC\">\r\n                        </mat-form-field>\r\n                        <mat-form-field appearance=\"outline\" style=\"flex:1;\" *ngIf=\"salaryData.gross\">\r\n                            <mat-label>Calculated Gross (₹)</mat-label>\r\n                            <input matInput [value]=\"salaryData.gross | inr\" readonly style=\"color:#1565c0;font-weight:600;\">\r\n                        </mat-form-field>\r\n                    </div>\r\n\r\n                    <!-- Checkboxes -->\r\n                    <div style=\"display:flex;gap:20px;align-items:flex-start;padding:4px 4px 8px 4px;flex-wrap:wrap;\">\r\n                        <div style=\"display:flex;flex-direction:column;gap:4px;\">\r\n                            <mat-checkbox [(ngModel)]=\"salaryData.has_pf\" (ngModelChange)=\"recalculate()\">\r\n                                <span style=\"font-size:13px;font-weight:500;\">PF (Employee + Employer)</span>\r\n                            </mat-checkbox>\r\n                            <mat-checkbox [(ngModel)]=\"salaryData.has_pf_higher\" (ngModelChange)=\"recalculate()\" [disabled]=\"!salaryData.has_pf\" style=\"margin-left:22px;\">\r\n                                <span style=\"font-size:12px;color:#1565c0;font-weight:500;\">↳ Higher Side (Gross−HRA) × 12%</span>\r\n                            </mat-checkbox>\r\n                        </div>\r\n                        <mat-checkbox [(ngModel)]=\"salaryData.has_bonus\" (ngModelChange)=\"recalculate()\">\r\n                            <span style=\"font-size:13px;font-weight:500;\">Bonus</span>\r\n                        </mat-checkbox>\r\n                        <mat-checkbox [(ngModel)]=\"salaryData.has_leave\" (ngModelChange)=\"recalculate()\">\r\n                            <span style=\"font-size:13px;font-weight:500;\">Leave With Wages</span>\r\n                        </mat-checkbox>\r\n                        <mat-checkbox [(ngModel)]=\"salaryData.has_gratuity\" (ngModelChange)=\"recalculate()\">\r\n                            <span style=\"font-size:13px;font-weight:500;\">Gratuity</span>\r\n                        </mat-checkbox>\r\n                    </div>\r\n\r\n                    <div *ngIf=\"salaryResult\" style=\"margin-top:8px;margin-bottom:6px;display:flex;flex-wrap:wrap;gap:8px;align-items:center;\">\r\n                        <span style=\"font-size:12px;color:#555;font-weight:600;\">Include in Gross:</span>\r\n                        <label style=\"display:flex;align-items:center;gap:4px;font-size:12px;cursor:pointer;background:#f1f5f9;border:1px solid #cbd5e1;border-radius:16px;padding:3px 10px;\">\r\n                            <input type=\"checkbox\" [(ngModel)]=\"salaryData.has_hra\" (ngModelChange)=\"recalculate()\" style=\"cursor:pointer;\"> HRA\r\n                        </label>\r\n                        <label style=\"display:flex;align-items:center;gap:4px;font-size:12px;cursor:pointer;background:#f1f5f9;border:1px solid #cbd5e1;border-radius:16px;padding:3px 10px;\">\r\n                            <input type=\"checkbox\" [(ngModel)]=\"salaryData.has_conveyance\" (ngModelChange)=\"recalculate()\" style=\"cursor:pointer;\"> Conveyance\r\n                        </label>\r\n                        <label style=\"display:flex;align-items:center;gap:4px;font-size:12px;cursor:pointer;background:#f1f5f9;border:1px solid #cbd5e1;border-radius:16px;padding:3px 10px;\">\r\n                            <input type=\"checkbox\" [(ngModel)]=\"salaryData.has_medical\" (ngModelChange)=\"recalculate()\" style=\"cursor:pointer;\"> Medical\r\n                        </label>\r\n                        <label style=\"display:flex;align-items:center;gap:4px;font-size:12px;cursor:pointer;background:#f1f5f9;border:1px solid #cbd5e1;border-radius:16px;padding:3px 10px;\">\r\n                            <input type=\"checkbox\" [(ngModel)]=\"salaryData.has_education\" (ngModelChange)=\"recalculate()\" style=\"cursor:pointer;\"> Education\r\n                        </label>\r\n                    </div>\r\n\r\n                    <div *ngIf=\"salaryResult && salaryData.emp_name\" style=\"margin-top:4px;margin-bottom:6px;\">\r\n                        <span style=\"font-size:13px;font-weight:700;color:#1a1a1a;\">{{ salaryData.emp_name }}</span>\r\n                        <span *ngIf=\"salaryData.designation\" style=\"font-size:12px;color:#555;margin-left:6px;\">— {{ salaryData.designation }}</span>\r\n                    </div>\r\n\r\n                    <div *ngIf=\"salaryResult\" style=\"margin-top:6px;\">\r\n                        <table style=\"width:auto;min-width:420px;max-width:600px;border-collapse:collapse;font-size:12.5px;table-layout:fixed;\">\r\n                            <colgroup>\r\n                                <col style=\"width:240px;\">\r\n                                <col style=\"width:100px;\">\r\n                                <col style=\"width:110px;\">\r\n                            </colgroup>\r\n                            <thead>\r\n                                <tr style=\"background:#2e7d32;color:#fff;\">\r\n                                    <th style=\"padding:6px 10px;text-align:left;font-weight:600;border:1px solid #1b5e20;\">\r\n                                        Perks\r\n                                        <span (click)=\"showFormulas=!showFormulas\"\r\n                                            matTooltip=\"{{ showFormulas ? 'Hide Formulas' : 'Show Formulas' }}\"\r\n                                            style=\"cursor:pointer;margin-left:8px;display:inline-flex;align-items:center;background:rgba(255,255,255,0.18);border-radius:50%;padding:2px;vertical-align:middle;\">\r\n                                            <i class=\"material-icons\" style=\"font-size:16px;\">{{ showFormulas ? 'visibility_off' : 'functions' }}</i>\r\n                                        </span>\r\n                                    </th>\r\n                                    <th style=\"padding:6px 10px;text-align:right;font-weight:600;border:1px solid #1b5e20;\">Per Month</th>\r\n                                    <th style=\"padding:6px 10px;text-align:right;font-weight:600;border:1px solid #1b5e20;\">Per Annum</th>\r\n                                </tr>\r\n                            </thead>\r\n                            <tbody>\r\n                                <tr style=\"background:#f9f9f9;\">\r\n                                    <td style=\"padding:4px 10px;border:1px solid #e0e0e0;\">Basic<br><small *ngIf=\"showFormulas\" style=\"color:#9ca3af;font-size:10px;\">{{ getBasicFormula() }}</small></td>\r\n                                    <td style=\"padding:6px 12px;text-align:right;border:1px solid #e0e0e0;\">{{salaryResult.basic | inr}}</td>\r\n                                    <td style=\"padding:6px 12px;text-align:right;border:1px solid #e0e0e0;\">{{salaryResult.basic * 12 | inr}}</td>\r\n                                </tr>\r\n                                <tr *ngIf=\"salaryData.has_hra\">\r\n                                    <td style=\"padding:4px 10px;border:1px solid #e0e0e0;\">HRA<br><small *ngIf=\"showFormulas\" style=\"color:#9ca3af;font-size:10px;\">{{ salaryData.gross < 38000 ? (salaryData.sheet_type === 'PLANT HSP' || salaryData.sheet_type === 'KN PLANT' ? 'Remaining × 40%' : 'Remaining × 33.3%') : (salaryData.sheet_type === 'PLANT HSP' || salaryData.sheet_type === 'KN PLANT' ? 'Basic × 20%' : 'Gross × 20%') }}</small></td>\r\n                                    <td style=\"padding:6px 12px;text-align:right;border:1px solid #e0e0e0;\">{{salaryResult.hra | inr}}</td>\r\n                                    <td style=\"padding:6px 12px;text-align:right;border:1px solid #e0e0e0;\">{{salaryResult.hra * 12 | inr}}</td>\r\n                                </tr>\r\n                                <tr style=\"background:#f9f9f9;\" *ngIf=\"salaryData.has_conveyance\">\r\n                                    <td style=\"padding:4px 10px;border:1px solid #e0e0e0;\">Conveyance Allowance<br><small *ngIf=\"showFormulas\" style=\"color:#9ca3af;font-size:10px;\">{{ salaryData.gross < 38000 ? (salaryData.sheet_type === 'PLANT HSP' || salaryData.sheet_type === 'KN PLANT' ? 'Remaining × 30%' : 'Remaining × 16.7%') : (salaryData.sheet_type === 'PLANT HSP' || salaryData.sheet_type === 'KN PLANT' ? 'Basic × 15%' : 'Gross × 10%') }}</small></td>\r\n                                    <td style=\"padding:6px 12px;text-align:right;border:1px solid #e0e0e0;\">{{salaryResult.conveyance | inr}}</td>\r\n                                    <td style=\"padding:6px 12px;text-align:right;border:1px solid #e0e0e0;\">{{salaryResult.conveyance * 12 | inr}}</td>\r\n                                </tr>\r\n                                <tr *ngIf=\"salaryData.has_medical\">\r\n                                    <td style=\"padding:4px 10px;border:1px solid #e0e0e0;\">Medical Allowance<br><small *ngIf=\"showFormulas\" style=\"color:#9ca3af;font-size:10px;\">{{ salaryData.gross < 38000 ? (salaryData.sheet_type === 'PLANT HSP' || salaryData.sheet_type === 'KN PLANT' ? 'Remaining × 20%' : 'Remaining × 25%') : (salaryData.sheet_type === 'PLANT HSP' || salaryData.sheet_type === 'KN PLANT' ? 'Basic × 10%' : 'Gross × 15%') }}</small></td>\r\n                                    <td style=\"padding:6px 12px;text-align:right;border:1px solid #e0e0e0;\">{{salaryResult.medical | inr}}</td>\r\n                                    <td style=\"padding:6px 12px;text-align:right;border:1px solid #e0e0e0;\">{{salaryResult.medical * 12 | inr}}</td>\r\n                                </tr>\r\n                                <tr style=\"background:#f9f9f9;\" *ngIf=\"salaryData.has_education\">\r\n                                    <td style=\"padding:4px 10px;border:1px solid #e0e0e0;\">Education Allowance<br><small *ngIf=\"showFormulas\" style=\"color:#9ca3af;font-size:10px;\">{{ salaryData.gross < 38000 ? 'Gross − Basic − HRA − Conv − Med' : (salaryData.sheet_type === 'PLANT HSP' || salaryData.sheet_type === 'KN PLANT' ? 'Basic × 5%' : 'Gross × 15%') }}</small></td>\r\n                                    <td style=\"padding:6px 12px;text-align:right;border:1px solid #e0e0e0;\">{{salaryResult.education | inr}}</td>\r\n                                    <td style=\"padding:6px 12px;text-align:right;border:1px solid #e0e0e0;\">{{salaryResult.education * 12 | inr}}</td>\r\n                                </tr>\r\n                                <tr style=\"background:#2e7d32;color:#fff;font-weight:700;\">\r\n                                    <td style=\"padding:6px 10px;border:1px solid #1b5e20;\">Gross<br><small *ngIf=\"showFormulas\" style=\"color:#a7f3d0;font-size:10px;font-weight:400;\">Basic + HRA + Conv + Med + Edu</small></td>\r\n                                    <td style=\"padding:8px 12px;text-align:right;border:1px solid #1b5e20;\">{{salaryData.gross | inr}}</td>\r\n                                    <td style=\"padding:8px 12px;text-align:right;border:1px solid #1b5e20;\">{{salaryResult.gross_annual | inr}}</td>\r\n                                </tr>\r\n                                <tr>\r\n                                    <td style=\"padding:4px 10px;border:1px solid #e0e0e0;\">PF Deduction (Employee)<br><small *ngIf=\"showFormulas\" style=\"color:#9ca3af;font-size:10px;\">{{ salaryData.has_pf_higher ? '(Gross − HRA) × 12%' : '₹1,800 Fixed' }}</small></td>\r\n                                    <td style=\"padding:6px 12px;text-align:right;border:1px solid #e0e0e0;\">{{salaryResult.pf_employee | inr}}</td>\r\n                                    <td style=\"padding:6px 12px;text-align:right;border:1px solid #e0e0e0;\">{{salaryResult.pf_employee * 12 | inr}}</td>\r\n                                </tr>\r\n                                <tr style=\"background:#f9f9f9;\">\r\n                                    <td style=\"padding:4px 10px;border:1px solid #e0e0e0;\">ESI Deduction (Employee)<br><small *ngIf=\"showFormulas\" style=\"color:#9ca3af;font-size:10px;\">Gross × 0.75% &nbsp;(only if Gross ≤ ₹21,000)</small></td>\r\n                                    <td style=\"padding:6px 12px;text-align:right;border:1px solid #e0e0e0;\">{{salaryResult.esi_employee | inr}}</td>\r\n                                    <td style=\"padding:6px 12px;text-align:right;border:1px solid #e0e0e0;\">{{salaryResult.esi_employee * 12 | inr}}</td>\r\n                                </tr>\r\n                                <tr>\r\n                                    <td style=\"padding:4px 10px;border:1px solid #e0e0e0;\">P. Tax Deduction (Employee)<br><small *ngIf=\"showFormulas\" style=\"color:#9ca3af;font-size:10px;\">₹200 Fixed &nbsp;(only if Gross > ₹25,000)</small></td>\r\n                                    <td style=\"padding:6px 12px;text-align:right;border:1px solid #e0e0e0;\">{{salaryResult.ptax | inr}}</td>\r\n                                    <td style=\"padding:6px 12px;text-align:right;border:1px solid #e0e0e0;\">{{salaryResult.ptax * 12 | inr}}</td>\r\n                                </tr>\r\n                                <tr style=\"background:#f9f9f9;\">\r\n                                    <td style=\"padding:4px 10px;border:1px solid #e0e0e0;\">LWF Deduction (Employee)<br><small *ngIf=\"showFormulas\" style=\"color:#9ca3af;font-size:10px;\">₹5 Fixed</small></td>\r\n                                    <td style=\"padding:6px 12px;text-align:right;border:1px solid #e0e0e0;\">{{salaryResult.lwf | inr}}</td>\r\n                                    <td style=\"padding:6px 12px;text-align:right;border:1px solid #e0e0e0;\">{{salaryResult.lwf * 12 | inr}}</td>\r\n                                </tr>\r\n                                <tr style=\"background:#2e7d32;color:#fff;font-weight:700;\">\r\n                                    <td style=\"padding:6px 10px;border:1px solid #1b5e20;\">Net Payable<br><small *ngIf=\"showFormulas\" style=\"color:#a7f3d0;font-size:10px;font-weight:400;\">Gross − PF − ESI − P.Tax − LWF</small></td>\r\n                                    <td style=\"padding:8px 12px;text-align:right;border:1px solid #1b5e20;\">{{salaryResult.net_payable | inr}}</td>\r\n                                    <td style=\"padding:8px 12px;text-align:right;border:1px solid #1b5e20;\">{{salaryResult.net_payable_annual | inr}}</td>\r\n                                </tr>\r\n                                <tr>\r\n                                    <td style=\"padding:4px 10px;border:1px solid #e0e0e0;\">PF Contribution (Employer)<br><small *ngIf=\"showFormulas\" style=\"color:#9ca3af;font-size:10px;\">PF Employee ke barabar</small></td>\r\n                                    <td style=\"padding:6px 12px;text-align:right;border:1px solid #e0e0e0;\">{{salaryResult.pf_employer | inr}}</td>\r\n                                    <td style=\"padding:6px 12px;text-align:right;border:1px solid #e0e0e0;\">{{salaryResult.pf_employer * 12 | inr}}</td>\r\n                                </tr>\r\n                                <tr style=\"background:#f9f9f9;\">\r\n                                    <td style=\"padding:4px 10px;border:1px solid #e0e0e0;\">ESI Contribution (Employer)<br><small *ngIf=\"showFormulas\" style=\"color:#9ca3af;font-size:10px;\">Gross × 3.25% &nbsp;(only if Gross ≤ ₹21,000)</small></td>\r\n                                    <td style=\"padding:6px 12px;text-align:right;border:1px solid #e0e0e0;\">{{salaryResult.esi_employer | inr}}</td>\r\n                                    <td style=\"padding:6px 12px;text-align:right;border:1px solid #e0e0e0;\">{{salaryResult.esi_employer * 12 | inr}}</td>\r\n                                </tr>\r\n                                <tr>\r\n                                    <td style=\"padding:4px 10px;border:1px solid #e0e0e0;\">Bonus @ 8.33% (Annually)<br><small *ngIf=\"showFormulas\" style=\"color:#9ca3af;font-size:10px;\">Basic ÷ 12 (monthly) &nbsp;|&nbsp; Annual = Basic × 1</small></td>\r\n                                    <td style=\"padding:6px 12px;text-align:right;border:1px solid #e0e0e0;\">{{salaryResult.bonus_monthly | inr}}</td>\r\n                                    <td style=\"padding:6px 12px;text-align:right;border:1px solid #e0e0e0;\">{{salaryResult.bonus_annual | inr}}</td>\r\n                                </tr>\r\n                                <tr style=\"background:#f9f9f9;\">\r\n                                    <td style=\"padding:4px 10px;border:1px solid #e0e0e0;\">Leave With Wages (Annually)<br><small *ngIf=\"showFormulas\" style=\"color:#9ca3af;font-size:10px;\">{{ salaryData.sheet_type === 'SALES' ? 'Basic ÷ 30 × 2 days' : 'Gross ÷ 30 × 24 days ÷ 12' }}</small></td>\r\n                                    <td style=\"padding:6px 12px;text-align:right;border:1px solid #e0e0e0;\">{{salaryResult.leave_monthly | inr}}</td>\r\n                                    <td style=\"padding:6px 12px;text-align:right;border:1px solid #e0e0e0;\">{{salaryResult.leave_annual | inr}}</td>\r\n                                </tr>\r\n                                <tr>\r\n                                    <td style=\"padding:4px 10px;border:1px solid #e0e0e0;\">Gratuity<br><small *ngIf=\"showFormulas\" style=\"color:#9ca3af;font-size:10px;\">Basic × 4.81%</small></td>\r\n                                    <td style=\"padding:6px 12px;text-align:right;border:1px solid #e0e0e0;\">{{salaryResult.gratuity_monthly | inr}}</td>\r\n                                    <td style=\"padding:6px 12px;text-align:right;border:1px solid #e0e0e0;\">{{salaryResult.gratuity_annual | inr}}</td>\r\n                                </tr>\r\n                                <tr style=\"background:#2e7d32;color:#fff;font-weight:700;\">\r\n                                    <td style=\"padding:6px 10px;border:1px solid #1b5e20;\">Total CTC<br><small *ngIf=\"showFormulas\" style=\"color:#a7f3d0;font-size:10px;font-weight:400;\">Gross + PF Emp + ESI Emp + Bonus + Leave + Gratuity</small></td>\r\n                                    <td style=\"padding:8px 12px;text-align:right;border:1px solid #1b5e20;\">{{salaryResult.total_ctc | inr}}</td>\r\n                                    <td style=\"padding:8px 12px;text-align:right;border:1px solid #1b5e20;\">{{salaryResult.total_ctc_annual | inr}}</td>\r\n                                </tr>\r\n                            </tbody>\r\n                        </table>\r\n                        <div style=\"margin-top:10px;font-size:12px;color:#555;line-height:1.8;\">\r\n                            <strong>Note :-</strong><br>\r\n                            Deductions - TDS and Professional Tax<br><br>\r\n                            Leave encashment will be paid yearly for the leave left out of 24 days. It will be calculated only on the Basic Salary. In each year 6 days (out of 24 days) balance leave will be carried forward next year into the leave bank which will be paid only after completion of 3 years\r\n                        </div>\r\n                    </div>\r\n\r\n                    <!-- Salary History -->\r\n                    <div style=\"margin-top:20px;border-top:2px solid #e5e7eb;padding-top:14px;\">\r\n                        <p style=\"font-size:13px;font-weight:600;color:#374151;margin:0 0 10px 0;\">\r\n                            <i class=\"material-icons\" style=\"font-size:16px;vertical-align:middle;margin-right:4px;color:#2e7d32;\">history</i>\r\n                            Saved History\r\n                            <span *ngIf=\"salaryHistoryLoading\" style=\"font-size:11px;color:#888;font-weight:400;margin-left:8px;\">Loading...</span>\r\n                        </p>\r\n                        <div *ngIf=\"salaryHistory.length == 0 && !salaryHistoryLoading\" style=\"font-size:12px;color:#9ca3af;padding:8px 0;\">\r\n                            No saved records yet\r\n                        </div>\r\n                        <div *ngIf=\"salaryHistory.length > 0\" style=\"max-height:200px;overflow-y:auto;\">\r\n                            <table style=\"width:100%;border-collapse:collapse;font-size:12px;\">\r\n                                <thead>\r\n                                    <tr style=\"background:#f3f4f6;position:sticky;top:0;\">\r\n                                        <th style=\"padding:6px 8px;text-align:left;border-bottom:1px solid #e5e7eb;color:#6b7280;\">#</th>\r\n                                        <th style=\"padding:6px 8px;text-align:left;border-bottom:1px solid #e5e7eb;color:#6b7280;\">Date</th>\r\n                                        <th style=\"padding:6px 8px;text-align:left;border-bottom:1px solid #e5e7eb;color:#6b7280;\">Sheet</th>\r\n                                        <th style=\"padding:6px 8px;text-align:right;border-bottom:1px solid #e5e7eb;color:#6b7280;\">Gross</th>\r\n                                        <th style=\"padding:6px 8px;text-align:right;border-bottom:1px solid #e5e7eb;color:#6b7280;\">Net Payable</th>\r\n                                        <th style=\"padding:6px 8px;text-align:right;border-bottom:1px solid #e5e7eb;color:#6b7280;\">Total CTC</th>\r\n                                        <th style=\"padding:6px 8px;text-align:left;border-bottom:1px solid #e5e7eb;color:#6b7280;\">By</th>\r\n                                        <th style=\"padding:6px 8px;text-align:center;border-bottom:1px solid #e5e7eb;color:#6b7280;\">Load</th>\r\n                                    </tr>\r\n                                </thead>\r\n                                <tbody>\r\n                                    <tr *ngFor=\"let rec of salaryHistory; let i = index\"\r\n                                        style=\"border-bottom:1px solid #f3f4f6;\"\r\n                                        [style.background]=\"i % 2 == 0 ? '#fff' : '#fafafa'\">\r\n                                        <td style=\"padding:5px 8px;color:#9ca3af;\">{{i+1}}</td>\r\n                                        <td style=\"padding:5px 8px;\">{{rec.created_at | date:'d MMM yy, h:mm a'}}</td>\r\n                                        <td style=\"padding:5px 8px;\">\r\n                                            <span style=\"font-size:11px;background:#e0f2fe;color:#0369a1;padding:2px 6px;border-radius:4px;font-weight:600;\">{{rec.sheet_type}}</span>\r\n                                        </td>\r\n                                        <td style=\"padding:5px 8px;text-align:right;font-weight:600;\">{{rec.gross | inr}}</td>\r\n                                        <td style=\"padding:5px 8px;text-align:right;color:#16a34a;font-weight:600;\">{{rec.net_payable | inr}}</td>\r\n                                        <td style=\"padding:5px 8px;text-align:right;color:#1565c0;font-weight:700;\">{{rec.total_ctc | inr}}</td>\r\n                                        <td style=\"padding:5px 8px;color:#6b7280;font-size:11px;\">{{rec.created_by_name || 'Admin'}}</td>\r\n                                        <td style=\"padding:5px 8px;text-align:center;\">\r\n                                            <button mat-icon-button matTooltip=\"Load this record\" (click)=\"loadSalaryRecord(rec)\"\r\n                                                style=\"width:28px;height:28px;line-height:28px;color:#1565c0;\">\r\n                                                <i class=\"material-icons\" style=\"font-size:16px;\">replay</i>\r\n                                            </button>\r\n                                        </td>\r\n                                    </tr>\r\n                                </tbody>\r\n                            </table>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"offer-modal-footer\">\r\n                <button mat-stroked-button (click)=\"closeSalaryModal()\">Close</button>\r\n                <button mat-raised-button *ngIf=\"salaryResult\" (click)=\"saveSalaryStructure()\" [disabled]=\"salarySaving\"\r\n                    style=\"background:#16a34a;color:#fff;\">\r\n                    <i class=\"material-icons\" style=\"font-size:16px;vertical-align:middle;margin-right:4px;\">save</i>\r\n                    {{salarySaving ? 'Saving...' : 'Save'}}\r\n                </button>\r\n                <button mat-raised-button color=\"primary\" *ngIf=\"salaryResult\" (click)=\"generateSalaryPdf()\" [disabled]=\"isLoading\">\r\n                    <i class=\"material-icons\" style=\"font-size:16px;vertical-align:middle;margin-right:4px;\">picture_as_pdf</i>\r\n                    {{isLoading ? 'Generating...' : 'Download PDF'}}\r\n                </button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <!-- Offer Letter Modal -->\r\n    <div class=\"offer-modal-overlay\" *ngIf=\"showOfferModal\" (click)=\"closeOfferModal()\">\r\n        <div class=\"offer-modal\" (click)=\"$event.stopPropagation()\">\r\n            <div class=\"offer-modal-header\">\r\n                <h3>Generate Offer Letter</h3>\r\n                <button mat-icon-button (click)=\"closeOfferModal()\">\r\n                    <i class=\"material-icons\">close</i>\r\n                </button>\r\n            </div>\r\n            <div class=\"offer-modal-body\">\r\n                <div class=\"cs-form\">\r\n                    <mat-form-field appearance=\"outline\" style=\"width:100%;\">\r\n                        <mat-label>Candidate Name</mat-label>\r\n                        <input matInput [(ngModel)]=\"offerData.offer_name\" placeholder=\"Enter name\">\r\n                    </mat-form-field>\r\n                    <mat-form-field appearance=\"outline\" style=\"width:100%;\">\r\n                        <mat-label>Joining Date</mat-label>\r\n                        <input matInput type=\"date\" [(ngModel)]=\"offerData.offer_date\">\r\n                    </mat-form-field>\r\n                    <div style=\"display:flex;gap:10px;\">\r\n                        <mat-form-field appearance=\"outline\" style=\"flex:1;\">\r\n                            <mat-label>Final Designation</mat-label>\r\n                            <input matInput [(ngModel)]=\"offerData.final_designation\" placeholder=\"e.g. ASM\">\r\n                        </mat-form-field>\r\n                        <mat-form-field appearance=\"outline\" style=\"flex:1;\">\r\n                            <mat-label>Final State</mat-label>\r\n                            <input matInput [(ngModel)]=\"offerData.final_state\" placeholder=\"e.g. Delhi\">\r\n                        </mat-form-field>\r\n                    </div>\r\n                    <div style=\"display:flex;gap:10px;\">\r\n                        <mat-form-field appearance=\"outline\" style=\"flex:1;\">\r\n                            <mat-label>Final Base Location</mat-label>\r\n                            <input matInput [(ngModel)]=\"offerData.final_base_location\" placeholder=\"e.g. New Delhi\">\r\n                        </mat-form-field>\r\n                        <mat-form-field appearance=\"outline\" style=\"flex:1;\">\r\n                            <mat-label>Covering Area</mat-label>\r\n                            <input matInput [(ngModel)]=\"offerData.final_area\" placeholder=\"e.g. Delhi & NCR\">\r\n                        </mat-form-field>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"offer-modal-footer\">\r\n                <button mat-stroked-button (click)=\"closeOfferModal()\">Cancel</button>\r\n                <button mat-raised-button color=\"primary\" (click)=\"generateOfferLetter()\">Generate PDF</button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/hr-recruitment/candidate-detail/candidate-detail.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/hr-recruitment/candidate-detail/candidate-detail.component.scss ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".profile-card .profile-header {\n  display: flex;\n  align-items: center;\n  padding: 20px;\n  gap: 16px;\n}\n.profile-card .profile-avatar {\n  width: 56px;\n  height: 56px;\n  border-radius: 14px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 22px;\n  font-weight: 700;\n  flex-shrink: 0;\n}\n.profile-card .profile-avatar.av-pending {\n  background: #dbeafe;\n  color: #2563eb;\n}\n.profile-card .profile-avatar.av-pass {\n  background: #dcfce7;\n  color: #16a34a;\n}\n.profile-card .profile-avatar.av-fail {\n  background: #fee2e2;\n  color: #dc2626;\n}\n.profile-card .profile-avatar.av-hold {\n  background: #fef3c7;\n  color: #d97706;\n}\n.profile-card .profile-info {\n  flex: 1;\n}\n.profile-card .profile-info h1 {\n  font-size: 20px;\n  font-weight: 600;\n  color: #1f2937;\n  margin: 0;\n}\n.profile-card .profile-info .profile-contact {\n  font-size: 13px;\n  color: #6b7280;\n  margin: 2px 0 8px;\n}\n.profile-card .profile-badges {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  flex-wrap: wrap;\n}\n.profile-card .badge {\n  display: inline-block;\n  padding: 3px 10px;\n  border-radius: 12px;\n  font-size: 11px;\n  font-weight: 600;\n}\n.profile-card .badge.badge-id {\n  background: #f3f4f6;\n  color: #6b7280;\n}\n.profile-card .badge.badge-stage {\n  background: #eff6ff;\n  color: #2563eb;\n}\n.profile-card .badge.badge-pending {\n  background: #eff6ff;\n  color: #2563eb;\n}\n.profile-card .badge.badge-pass {\n  background: #f0fdf4;\n  color: #16a34a;\n}\n.profile-card .badge.badge-fail {\n  background: #fef2f2;\n  color: #dc2626;\n}\n.profile-card .badge.badge-hold {\n  background: #fffbeb;\n  color: #d97706;\n}\n.profile-card .profile-meta {\n  display: flex;\n  gap: 20px;\n  padding: 0 20px 16px;\n  flex-wrap: wrap;\n}\n.profile-card .profile-meta .meta-item {\n  display: flex;\n  align-items: center;\n  gap: 5px;\n  font-size: 12px;\n  color: #6b7280;\n}\n.profile-card .profile-meta .meta-item i {\n  font-size: 16px;\n  color: #9ca3af;\n}\n.card-head {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n}\n.card-head .section-icon {\n  font-size: 20px;\n}\n.grid-box.four {\n  display: grid;\n  grid-template-columns: repeat(4, 1fr);\n  gap: 0;\n}\n.selection-card {\n  border-left: 3px solid #16a34a;\n}\n.selection-card .highlight-field p {\n  color: #16a34a;\n}\n.resume-download-btn {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 8px 16px;\n  background: #eff6ff;\n  color: #2563eb;\n  border-radius: 8px;\n  font-size: 13px;\n  font-weight: 500;\n  text-decoration: none;\n  transition: background 0.2s;\n}\n.resume-download-btn:hover {\n  background: #dbeafe;\n}\n.resume-download-btn i {\n  font-size: 18px;\n}\n.no-data-text {\n  font-size: 13px;\n  color: #9ca3af;\n}\n.ouline-btns {\n  border: 1px solid #c2c2c2 !important;\n  background: #fff;\n  border-radius: 4px;\n  height: 35px;\n  line-height: 35px;\n  display: flex;\n  align-items: center;\n  color: #333;\n}\n.ouline-btns img {\n  width: 20px;\n  margin-right: 5px;\n}\n.timeline {\n  position: relative;\n  padding: 5px 0;\n}\n.timeline::before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  left: 7px;\n  height: 100%;\n  width: 2px;\n  background: #e5e7eb;\n}\n.timeline-item {\n  position: relative;\n  margin-bottom: 20px;\n  padding-left: 28px;\n}\n.timeline-item.last-item {\n  margin-bottom: 0;\n}\n.timeline-item.last-item::after {\n  content: \"\";\n  position: absolute;\n  left: -21px;\n  top: 15px;\n  width: 2px;\n  height: 100%;\n  background: #fff;\n}\n.timeline-marker {\n  position: absolute;\n  top: 6px;\n  left: 2px;\n  width: 12px;\n  height: 12px;\n  border-radius: 50%;\n  background: #2563eb;\n  border: 2px solid #fff;\n  box-shadow: 0 0 0 3px rgba(37, 99, 235, 0.1);\n  z-index: 1;\n}\n.timeline-marker.marker-green {\n  background: #16a34a;\n  box-shadow: 0 0 0 3px rgba(22, 163, 74, 0.1);\n}\n.timeline-marker.marker-orange {\n  background: #d97706;\n  box-shadow: 0 0 0 3px rgba(217, 119, 6, 0.1);\n}\n.timeline-marker.marker-purple {\n  background: #7c3aed;\n  box-shadow: 0 0 0 3px rgba(124, 58, 237, 0.15);\n}\n.timeline-content {\n  background: #f9fafb;\n  padding: 12px 14px;\n  border-radius: 8px;\n  border: 1px solid #f3f4f6;\n}\n.timeline-content .timeline-title {\n  margin: 0 0 4px;\n  font-size: 13px;\n  font-weight: 600;\n  color: #1f2937;\n}\n.timeline-content .timeline-description {\n  margin: 0 0 8px;\n  font-size: 12px;\n  color: #6b7280;\n  line-height: 1.5;\n}\n.timeline-content .timeline-description .timeline-remarks {\n  display: block;\n  margin-top: 8px;\n  padding: 6px 10px;\n  background: #fefce8;\n  border-radius: 6px;\n  color: #92400e;\n  border-left: 3px solid #fbbf24;\n  font-size: 12px;\n}\n.timeline-content .timeline-description .timeline-remarks strong {\n  color: #78350f;\n}\n.timeline-meta {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 12px;\n  font-size: 11px;\n  color: #9ca3af;\n}\n.timeline-meta span {\n  display: flex;\n  align-items: center;\n  gap: 3px;\n}\n.timeline-meta span i {\n  font-size: 14px;\n}\n.offer-modal-overlay {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.45);\n  z-index: 9999;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n.offer-modal {\n  background: #fff;\n  border-radius: 12px;\n  width: 480px;\n  max-width: 90vw;\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);\n}\n.offer-modal .offer-modal-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 16px 20px;\n  border-bottom: 1px solid #f0f0f0;\n}\n.offer-modal .offer-modal-header h3 {\n  margin: 0;\n  font-size: 16px;\n  font-weight: 600;\n  color: #1f2937;\n}\n.offer-modal .offer-modal-body {\n  padding: 20px;\n}\n.offer-modal .offer-modal-footer {\n  display: flex;\n  justify-content: flex-end;\n  gap: 8px;\n  padding: 12px 20px;\n  border-top: 1px solid #f0f0f0;\n}"

/***/ }),

/***/ "./src/app/hr-recruitment/candidate-detail/candidate-detail.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/hr-recruitment/candidate-detail/candidate-detail.component.ts ***!
  \*******************************************************************************/
/*! exports provided: CandidateDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CandidateDetailComponent", function() { return CandidateDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_services_DatabaseService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/_services/DatabaseService */ "./src/_services/DatabaseService.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng6-toastr-notifications */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/ng6-toastr-notifications/fesm5/ng6-toastr-notifications.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _candidate_status_modal_candidate_status_modal_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../candidate-status-modal/candidate-status-modal.component */ "./src/app/hr-recruitment/candidate-status-modal/candidate-status-modal.component.ts");








var CandidateDetailComponent = /** @class */ (function () {
    function CandidateDetailComponent(serve, route, router, toast, location, dialog) {
        var _this = this;
        this.serve = serve;
        this.route = route;
        this.router = router;
        this.toast = toast;
        this.location = location;
        this.dialog = dialog;
        this.candidateDetail = {};
        this.interviews = [];
        this.activityLogs = [];
        this.isLoading = false;
        this.stages = ['Screening', 'Round 1', 'Round 2', 'Round 3', 'Final Status'];
        this.statuses = ['Pending', 'Pass', 'Fail', 'Hold', 'Selected', 'Rejected'];
        this.showOfferModal = false;
        this.offerData = {};
        this.negotiationDocUploading = false;
        this.negotiationRemark = '';
        this.negotiationRemarkSaving = false;
        // Salary Breakup Modal
        this.showSalaryModal = false;
        this.showFormulas = false;
        this.salaryData = { emp_name: '', designation: '', location: '', wef_date: '', sheet_type: 'KN PLANT', gross: null, has_pf: true, has_bonus: false, has_gratuity: false };
        this.salaryResult = null;
        // Salary History
        this.salaryHistory = [];
        this.salaryHistoryLoading = false;
        this.salarySaving = false;
        this.editingRemarkId = null;
        this.editingRemarkText = '';
        this.remarkSaving = false;
        this.route.params.subscribe(function (params) {
            _this.candidateId = params.id;
            _this.getCandidateDetails();
        });
    }
    CandidateDetailComponent.prototype.ngOnInit = function () {
    };
    CandidateDetailComponent.prototype.getCandidateDetails = function () {
        var _this = this;
        this.isLoading = true;
        this.serve.post_rqst({ candidate_id: this.candidateId }, "Hr_Recruitment/getCandidateDetails").subscribe(function (result) {
            _this.isLoading = false;
            if (result['statusCode'] == 200) {
                _this.candidateDetail = result['candidate'];
                _this.interviews = result['interviews'];
                _this.activityLogs = result['activity_logs'];
            }
            else {
                _this.toast.errorToastr(result['statusMsg']);
            }
        }, function (err) {
            _this.isLoading = false;
            _this.toast.errorToastr('Something went wrong');
        });
    };
    CandidateDetailComponent.prototype.back = function () {
        this.location.back();
    };
    CandidateDetailComponent.prototype.exportPdf = function () {
        var _this = this;
        this.isLoading = true;
        var tab = window.open('', '_blank');
        var id = { 'candidate_id': this.candidateId };
        this.serve.post_rqst(id, "Hr_Recruitment/exportCandidatePdf").subscribe(function (result) {
            _this.isLoading = false;
            if (result['statusCode'] == 200) {
                tab.location.href = _this.serve.uploadUrl + 'Pdf/' + result['file_name'];
            }
            else {
                tab.close();
                _this.toast.errorToastr(result['statusMsg']);
            }
        }, function (err) {
            _this.isLoading = false;
            tab.close();
            _this.toast.errorToastr('Something went wrong');
        });
    };
    CandidateDetailComponent.prototype.uploadNegotiationDoc = function (evt) {
        var _this = this;
        if (!evt.target.files || !evt.target.files.length)
            return;
        var file = evt.target.files[0];
        this.negotiationDocUploading = true;
        var formData = new FormData();
        formData.append('negotiation_doc', file, file.name);
        formData.append('id', this.candidateId);
        this.serve.FileData(formData, "Hr_Recruitment/uploadNegotiationDoc").subscribe(function (res) {
            _this.negotiationDocUploading = false;
            if (res['statusCode'] == 200) {
                _this.toast.successToastr('Document uploaded successfully');
                _this.getCandidateDetails();
            }
            else {
                _this.toast.errorToastr(res['statusMsg']);
            }
        }, function (err) {
            _this.negotiationDocUploading = false;
            _this.toast.errorToastr('Upload failed');
        });
    };
    CandidateDetailComponent.prototype.openOfferModal = function () {
        this.offerData = {
            offer_name: this.candidateDetail.name || '',
            offer_date: '',
            final_designation: this.candidateDetail.final_designation || '',
            final_state: this.candidateDetail.final_state || '',
            final_base_location: this.candidateDetail.final_base_location || '',
            final_area: this.candidateDetail.final_area || ''
        };
        this.showOfferModal = true;
    };
    CandidateDetailComponent.prototype.closeOfferModal = function () {
        this.showOfferModal = false;
    };
    CandidateDetailComponent.prototype.generateOfferLetter = function () {
        var _this = this;
        if (!this.offerData.offer_name || !this.offerData.offer_date) {
            this.toast.errorToastr('Please fill all fields');
            return;
        }
        if (!this.offerData.final_designation || !this.offerData.final_state || !this.offerData.final_base_location || !this.offerData.final_area) {
            this.toast.errorToastr('Please fill designation, state, base location and area');
            return;
        }
        this.isLoading = true;
        this.showOfferModal = false;
        var payload = {
            candidate_id: this.candidateId,
            offer_name: this.offerData.offer_name,
            offer_date: this.offerData.offer_date,
            final_designation: this.offerData.final_designation,
            final_state: this.offerData.final_state,
            final_base_location: this.offerData.final_base_location,
            final_area: this.offerData.final_area
        };
        var tab = window.open('', '_blank');
        this.serve.post_rqst(payload, "Hr_Recruitment/generateOfferLetter").subscribe(function (result) {
            _this.isLoading = false;
            if (result['statusCode'] == 200) {
                tab.location.href = _this.serve.uploadUrl + 'Pdf/' + result['file_name'];
            }
            else {
                tab.close();
                _this.toast.errorToastr(result['statusMsg']);
            }
        }, function (err) {
            _this.isLoading = false;
            tab.close();
            _this.toast.errorToastr('Something went wrong');
        });
    };
    CandidateDetailComponent.prototype.editCandidate = function () {
        this.router.navigate(['/hr-recruitment/add/' + this.candidateId + '/edit']);
    };
    CandidateDetailComponent.prototype.addNegotiationRemark = function () {
        var _this = this;
        if (!this.negotiationRemark.trim()) {
            this.toast.errorToastr('Please enter a remark');
            return;
        }
        this.negotiationRemarkSaving = true;
        this.serve.post_rqst({ candidate_id: this.candidateId, remark: this.negotiationRemark }, 'Hr_Recruitment/addNegotiationRemark').subscribe(function (res) {
            _this.negotiationRemarkSaving = false;
            if (res['statusCode'] == 200) {
                _this.negotiationRemark = '';
                _this.getCandidateDetails();
            }
            else {
                _this.toast.errorToastr(res['statusMsg']);
            }
        }, function (err) {
            _this.negotiationRemarkSaving = false;
            _this.toast.errorToastr('Something went wrong');
        });
    };
    CandidateDetailComponent.prototype._salaryDefaults = function (sheetType) {
        return {
            has_pf: sheetType !== 'PLANT HSP',
            has_pf_higher: false,
            has_bonus: sheetType !== 'KN PLANT',
            has_gratuity: sheetType === 'SALES',
            has_leave: true,
            has_hra: true,
            has_conveyance: true,
            has_medical: true,
            has_education: true
        };
    };
    CandidateDetailComponent.prototype.openSalaryModal = function () {
        var sheetType = 'KN PLANT';
        if (this.candidateDetail.employee_type === 'Sales') {
            sheetType = 'SALES';
        }
        else if (this.candidateDetail.employee_location && (this.candidateDetail.employee_location.toLowerCase().includes('hoshiarpur') || this.candidateDetail.employee_location.toLowerCase().includes('hsp'))) {
            sheetType = 'PLANT HSP';
        }
        this.salaryData = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({ emp_name: this.candidateDetail.name || '', designation: this.candidateDetail.final_designation || this.candidateDetail.current_org_designation || '', location: this.candidateDetail.final_base_location || this.candidateDetail.employee_location || '', wef_date: (this.candidateDetail.updated_date_of_joining && this.candidateDetail.updated_date_of_joining !== '0000-00-00') ? this.candidateDetail.updated_date_of_joining : '', sheet_type: sheetType, input_mode: 'gross', gross: null, ctc_input: null }, this._salaryDefaults(sheetType));
        this.salaryResult = null;
        this.salaryHistory = [];
        this.showSalaryModal = true;
        this.getSalaryHistory();
    };
    CandidateDetailComponent.prototype.closeSalaryModal = function () {
        this.showSalaryModal = false;
    };
    CandidateDetailComponent.prototype.onInputModeChange = function () {
        this.salaryData.gross = null;
        this.salaryData.ctc_input = null;
        this.salaryResult = null;
    };
    CandidateDetailComponent.prototype.onSheetTypeChange = function () {
        var defaults = this._salaryDefaults(this.salaryData.sheet_type);
        this.salaryData.has_pf = defaults.has_pf;
        this.salaryData.has_bonus = defaults.has_bonus;
        this.salaryData.has_gratuity = defaults.has_gratuity;
        this.recalculate();
    };
    CandidateDetailComponent.prototype.getBasicFormula = function () {
        var gross = parseFloat(this.salaryData.gross) || 0;
        if (!this.salaryResult || !gross)
            return '';
        var pct = Math.round(this.salaryResult.basic / gross * 1000) / 10;
        return "Gross \u00D7 " + pct + "%";
    };
    CandidateDetailComponent.prototype.recalculate = function () {
        if (this.salaryData.input_mode === 'ctc') {
            this.onCtcInputChange();
        }
        else {
            this.onGrossChange();
        }
    };
    CandidateDetailComponent.prototype.onGrossChange = function () {
        var gross = parseFloat(this.salaryData.gross) || 0;
        if (gross <= 0) {
            this.salaryResult = null;
            return;
        }
        this.salaryResult = this.calculateSalary(gross, this.salaryData.sheet_type, this.salaryData.has_pf, this.salaryData.has_bonus, this.salaryData.has_gratuity, this.salaryData.has_leave, this.salaryData.has_pf_higher, this.salaryData.has_hra, this.salaryData.has_conveyance, this.salaryData.has_medical, this.salaryData.has_education);
    };
    CandidateDetailComponent.prototype.onCtcInputChange = function () {
        var targetCtc = parseFloat(this.salaryData.ctc_input) || 0;
        if (targetCtc <= 0) {
            this.salaryResult = null;
            return;
        }
        var gross = this.reverseCalcGross(targetCtc, this.salaryData.sheet_type, this.salaryData.has_pf, this.salaryData.has_bonus, this.salaryData.has_gratuity, this.salaryData.has_leave, this.salaryData.has_pf_higher, this.salaryData.has_hra, this.salaryData.has_conveyance, this.salaryData.has_medical, this.salaryData.has_education);
        this.salaryData.gross = gross;
        this.salaryResult = this.calculateSalary(gross, this.salaryData.sheet_type, this.salaryData.has_pf, this.salaryData.has_bonus, this.salaryData.has_gratuity, this.salaryData.has_leave, this.salaryData.has_pf_higher, this.salaryData.has_hra, this.salaryData.has_conveyance, this.salaryData.has_medical, this.salaryData.has_education);
    };
    CandidateDetailComponent.prototype.reverseCalcGross = function (targetCtc, sheetType, has_pf, has_bonus, has_gratuity, has_leave, has_pf_higher, has_hra, has_conveyance, has_medical, has_education) {
        if (has_leave === void 0) { has_leave = true; }
        if (has_pf_higher === void 0) { has_pf_higher = false; }
        if (has_hra === void 0) { has_hra = true; }
        if (has_conveyance === void 0) { has_conveyance = true; }
        if (has_medical === void 0) { has_medical = true; }
        if (has_education === void 0) { has_education = true; }
        var low = 1, high = targetCtc, mid = 0;
        for (var i = 0; i < 60; i++) {
            mid = Math.round((low + high) / 2);
            var r = this.calculateSalary(mid, sheetType, has_pf, has_bonus, has_gratuity, has_leave, has_pf_higher, has_hra, has_conveyance, has_medical, has_education);
            if (r.total_ctc === targetCtc)
                break;
            if (r.total_ctc < targetCtc)
                low = mid + 1;
            else
                high = mid - 1;
        }
        return mid;
    };
    CandidateDetailComponent.prototype.calculateSalary = function (gross, sheetType, has_pf, has_bonus, has_gratuity, has_leave, has_pf_higher, has_hra, has_conveyance, has_medical, has_education) {
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
        r.esi_employee = gross <= 21000 ? Math.floor(gross * 0.0075 + 0.5) : 0;
        r.ptax = gross > 25000 ? 200 : 0;
        r.lwf = 5;
        r.net_payable = gross - r.pf_employee - r.esi_employee - r.ptax - r.lwf;
        r.esi_employer = gross <= 21000 ? Math.floor(gross * 0.0325 + 0.5) : 0;
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
    CandidateDetailComponent.prototype.getSalaryHistory = function () {
        var _this = this;
        this.salaryHistoryLoading = true;
        this.serve.post_rqst({ candidate_id: this.candidateId }, "Hr_Recruitment/getSalaryStructures").subscribe(function (result) {
            _this.salaryHistoryLoading = false;
            if (result['statusCode'] == 200) {
                _this.salaryHistory = result['result'] || [];
            }
        }, function () { _this.salaryHistoryLoading = false; });
    };
    CandidateDetailComponent.prototype.saveSalaryStructure = function () {
        var _this = this;
        if (!this.salaryResult) {
            this.toast.errorToastr('Please calculate salary first');
            return;
        }
        this.salarySaving = true;
        var payload = {
            candidate_id: this.candidateId,
            emp_name: this.salaryData.emp_name || '',
            designation: this.salaryData.designation || '',
            location: this.salaryData.location || '',
            gross: this.salaryData.gross,
            sheet_type: this.salaryData.sheet_type,
            input_mode: this.salaryData.input_mode,
            has_pf: this.salaryData.has_pf ? 1 : 0,
            has_pf_higher: this.salaryData.has_pf_higher ? 1 : 0,
            has_bonus: this.salaryData.has_bonus ? 1 : 0,
            has_leave: this.salaryData.has_leave ? 1 : 0,
            has_gratuity: this.salaryData.has_gratuity ? 1 : 0,
            has_hra: this.salaryData.has_hra ? 1 : 0,
            has_conveyance: this.salaryData.has_conveyance ? 1 : 0,
            has_medical: this.salaryData.has_medical ? 1 : 0,
            has_education: this.salaryData.has_education ? 1 : 0,
            wef_date: this.salaryData.wef_date || '',
            basic: this.salaryResult.basic,
            hra: this.salaryResult.hra,
            conveyance: this.salaryResult.conveyance,
            medical: this.salaryResult.medical,
            education: this.salaryResult.education,
            pf_employee: this.salaryResult.pf_employee,
            esi_employee: this.salaryResult.esi_employee,
            ptax: this.salaryResult.ptax,
            lwf: this.salaryResult.lwf,
            net_payable: this.salaryResult.net_payable,
            pf_employer: this.salaryResult.pf_employer,
            esi_employer: this.salaryResult.esi_employer,
            bonus_monthly: this.salaryResult.bonus_monthly,
            leave_monthly: this.salaryResult.leave_monthly,
            gratuity_monthly: this.salaryResult.gratuity_monthly,
            total_ctc: this.salaryResult.total_ctc,
            created_by_id: this.serve.login_data.id,
            created_by_name: this.serve.login_data.name || ''
        };
        this.serve.post_rqst(payload, "Hr_Recruitment/saveSalaryStructure").subscribe(function (result) {
            _this.salarySaving = false;
            if (result['statusCode'] == 200) {
                _this.toast.successToastr('Salary structure saved');
                _this.getSalaryHistory();
                // Update local candidate record so next modal open shows updated values
                if (_this.salaryData.designation)
                    _this.candidateDetail.final_designation = _this.salaryData.designation;
                if (_this.salaryData.location)
                    _this.candidateDetail.final_base_location = _this.salaryData.location;
                if (_this.salaryData.wef_date)
                    _this.candidateDetail.updated_date_of_joining = _this.salaryData.wef_date;
            }
            else {
                _this.toast.errorToastr(result['statusMsg']);
            }
        }, function () {
            _this.salarySaving = false;
            _this.toast.errorToastr('Something went wrong');
        });
    };
    CandidateDetailComponent.prototype.loadSalaryRecord = function (rec) {
        this.salaryData.sheet_type = rec.sheet_type;
        this.salaryData.input_mode = 'gross';
        this.salaryData.gross = parseFloat(rec.gross);
        this.salaryData.ctc_input = null;
        this.salaryData.has_pf = rec.has_pf == 1;
        this.salaryData.has_pf_higher = rec.has_pf_higher == 1;
        this.salaryData.has_bonus = rec.has_bonus == 1;
        this.salaryData.has_leave = rec.has_leave == 1;
        this.salaryData.has_gratuity = rec.has_gratuity == 1;
        this.salaryData.has_hra = rec.has_hra == null ? true : rec.has_hra == 1;
        this.salaryData.has_conveyance = rec.has_conveyance == null ? true : rec.has_conveyance == 1;
        this.salaryData.has_medical = rec.has_medical == null ? true : rec.has_medical == 1;
        this.salaryData.has_education = rec.has_education == null ? true : rec.has_education == 1;
        this.salaryData.wef_date = (rec.wef_date && rec.wef_date !== '0000-00-00') ? rec.wef_date : '';
        this.onGrossChange();
    };
    CandidateDetailComponent.prototype.generateSalaryPdf = function () {
        var _this = this;
        if (!this.salaryResult) {
            this.toast.errorToastr('Please enter gross salary');
            return;
        }
        this.isLoading = true;
        var payload = {
            candidate_id: this.candidateId,
            emp_name: this.salaryData.emp_name,
            designation: this.salaryData.designation,
            location: this.salaryData.location,
            wef_date: this.salaryData.wef_date,
            sheet_type: this.salaryData.sheet_type,
            gross: this.salaryData.gross,
            has_pf: this.salaryData.has_pf ? 1 : 0,
            has_pf_higher: this.salaryData.has_pf_higher ? 1 : 0,
            has_bonus: this.salaryData.has_bonus ? 1 : 0,
            has_leave: this.salaryData.has_leave ? 1 : 0,
            has_gratuity: this.salaryData.has_gratuity ? 1 : 0,
            has_hra: this.salaryData.has_hra ? 1 : 0,
            has_conveyance: this.salaryData.has_conveyance ? 1 : 0,
            has_medical: this.salaryData.has_medical ? 1 : 0,
            has_education: this.salaryData.has_education ? 1 : 0
        };
        var tab = window.open('', '_blank');
        this.serve.post_rqst(payload, "Hr_Recruitment/generateSalaryPdf").subscribe(function (result) {
            _this.isLoading = false;
            if (result['statusCode'] == 200) {
                tab.location.href = _this.serve.uploadUrl + 'Pdf/' + result['file_name'];
            }
            else {
                tab.close();
                _this.toast.errorToastr(result['statusMsg']);
            }
        }, function (err) {
            _this.isLoading = false;
            tab.close();
            _this.toast.errorToastr('Something went wrong');
        });
    };
    CandidateDetailComponent.prototype.startEditRemark = function (log) {
        var parts = log.description.split('. Remarks: ');
        this.editingRemarkId = log.id;
        this.editingRemarkText = parts.length > 1 ? parts[1] : '';
    };
    CandidateDetailComponent.prototype.cancelEditRemark = function () {
        this.editingRemarkId = null;
        this.editingRemarkText = '';
    };
    CandidateDetailComponent.prototype.saveRemark = function (log) {
        var _this = this;
        this.remarkSaving = true;
        this.serve.post_rqst({ log_id: log.id, remark: this.editingRemarkText }, "Hr_Recruitment/updateActivityRemark").subscribe(function (res) {
            _this.remarkSaving = false;
            if (res['statusCode'] == 200) {
                _this.editingRemarkId = null;
                _this.editingRemarkText = '';
                _this.getCandidateDetails();
            }
            else {
                _this.toast.errorToastr(res['statusMsg']);
            }
        }, function (err) {
            _this.remarkSaving = false;
            _this.toast.errorToastr('Failed to update remark');
        });
    };
    CandidateDetailComponent.prototype.openStatusModal = function () {
        var _this = this;
        var dialogRef = this.dialog.open(_candidate_status_modal_candidate_status_modal_component__WEBPACK_IMPORTED_MODULE_7__["CandidateStatusModalComponent"], {
            width: '450px',
            data: {
                candidate: this.candidateDetail
            }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result) {
                _this.getCandidateDetails();
            }
        });
    };
    CandidateDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-candidate-detail',
            template: __webpack_require__(/*! ./candidate-detail.component.html */ "./src/app/hr-recruitment/candidate-detail/candidate-detail.component.html"),
            styles: [__webpack_require__(/*! ./candidate-detail.component.scss */ "./src/app/hr-recruitment/candidate-detail/candidate-detail.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_services_DatabaseService__WEBPACK_IMPORTED_MODULE_2__["DatabaseService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_4__["ToastrManager"],
            _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"],
            _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatDialog"]])
    ], CandidateDetailComponent);
    return CandidateDetailComponent;
}());



/***/ }),

/***/ "./src/app/hr-recruitment/candidate-list/candidate-list.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/hr-recruitment/candidate-list/candidate-list.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-container\">\r\n    <div class=\"tools-container\">\r\n        <h2>User Req</h2>\r\n        <div class=\"left-auto df ac flex-gap-10\">\r\n            <button mat-icon-button matTooltip=\"Export to Excel\" (click)=\"exportExcel()\">\r\n                <i class=\"material-icons\">download_for_offline</i>\r\n            </button>\r\n            <button mat-icon-button matTooltip=\"Refresh\" (click)=\"refresh()\">\r\n                <i class=\"material-icons\">refresh</i>\r\n            </button>\r\n            <div class=\"pagination\" *ngIf=\"candidates.length > 0\">\r\n                <div class=\"pagination-content\">\r\n                    Pages\r\n                    <span>{{pagenumber}}</span>\r\n                    of\r\n                    <span>{{total_page}}</span>\r\n                </div>\r\n                <div class=\"page-nav\">\r\n                    <button mat-icon-button matTooltip=\"Previous\" (click)=\"pervious()\" [disabled]=\"start == 0\">\r\n                        <i class=\"material-icons\">navigate_before</i>\r\n                    </button>\r\n                    <button mat-icon-button matTooltip=\"Next\" (click)=\"nextPage()\"\r\n                        [disabled]=\"pagenumber == total_page\">\r\n                        <i class=\"material-icons\">navigate_next</i>\r\n                    </button>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"tab-scroll-bar\">\r\n        <div class=\"mat-tabbar\">\r\n            <button mat-button [ngClass]=\"activeTab == '' ? 'active' : ''\" (click)=\"changeTab('')\">All <span\r\n                    class=\"tab-count\" *ngIf=\"tabCount.All\">{{tabCount.All}}</span></button>\r\n            <button mat-button *ngFor=\"let stage of stages\" [ngClass]=\"activeTab == stage ? 'active' : ''\"\r\n                (click)=\"changeTab(stage)\">{{stage}} <span class=\"tab-count\"\r\n                    *ngIf=\"tabCount[stage]\">{{tabCount[stage]}}</span></button>\r\n            <button mat-button [ngClass]=\"activeTab == 'Hold' ? 'active' : ''\" (click)=\"changeTab('Hold')\">Hold <span\r\n                    class=\"tab-count\" *ngIf=\"tabCount.Hold\">{{tabCount.Hold}}</span></button>\r\n            <button mat-button [ngClass]=\"activeTab == 'Rejected' ? 'active' : ''\"\r\n                (click)=\"changeTab('Rejected')\">Rejected <span class=\"tab-count\"\r\n                    *ngIf=\"tabCount.Rejected\">{{tabCount.Rejected}}</span></button>\r\n            <button mat-button [ngClass]=\"activeTab == 'Withdrawal' ? 'active' : ''\"\r\n                (click)=\"changeTab('Withdrawal')\">Withdrawal <span class=\"tab-count\"\r\n                    *ngIf=\"tabCount.Withdrawal\">{{tabCount.Withdrawal}}</span></button>\r\n        </div>\r\n    </div>\r\n\r\n    <!-- Sub-tabs: Employee Type filter for all tabs -->\r\n    <div class=\"sub-tab-bar\">\r\n        <span class=\"sub-tab-label\">Employee Type</span>\r\n        <div class=\"sub-tab-group\">\r\n            <button class=\"sub-tab-btn\" [ngClass]=\"{'active': activeSubTab == ''}\" (click)=\"changeSubTab('')\">\r\n                <span class=\"sub-dot all\"></span>\r\n                All\r\n                <span class=\"sub-count\">{{activeTabTotal}}</span>\r\n            </button>\r\n            <button class=\"sub-tab-btn sales\" [ngClass]=\"{'active': activeSubTab == 'Sales'}\" (click)=\"changeSubTab('Sales')\">\r\n                <span class=\"sub-dot sales-dot\"></span>\r\n                Sales\r\n                <span class=\"sub-count\">{{subTabCount[subTabKey]?.Sales || 0}}</span>\r\n            </button>\r\n            <button class=\"sub-tab-btn admin\" [ngClass]=\"{'active': activeSubTab == 'Admin'}\" (click)=\"changeSubTab('Admin')\">\r\n                <span class=\"sub-dot admin-dot\"></span>\r\n                Admin\r\n                <span class=\"sub-count\">{{subTabCount[subTabKey]?.Admin || 0}}</span>\r\n            </button>\r\n            <button class=\"sub-tab-btn plant\" [ngClass]=\"{'active': activeSubTab == 'Plant'}\" (click)=\"changeSubTab('Plant')\">\r\n                <span class=\"sub-dot plant-dot\"></span>\r\n                Plant\r\n                <span class=\"sub-count\">{{subTabCount[subTabKey]?.Plant || 0}}</span>\r\n            </button>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"container container-scroll\">\r\n        <div class=\"cs-table horizontal-scroll\">\r\n            <div class=\"sticky-head\">\r\n                <div class=\"table-head\">\r\n                    <table>\r\n                        <tr>\r\n                            <th class=\"w50 text-center\">Sr.No</th>\r\n                            <th class=\"w120\" *ngIf=\"activeTab == ''\">Stage</th>\r\n                            <th class=\"w100\">Date Created</th>\r\n                            <th class=\"w100\">Screening Date</th>\r\n                            <th class=\"w80\">#ID</th>\r\n                            <th class=\"w150\">Name</th>\r\n                            <th class=\"w150\">Contact Number</th>\r\n                            <th class=\"w150\">Alternate Number</th>\r\n                            <th class=\"w150\">Assigned Manager</th>\r\n                            <th class=\"w120\">Native Place</th>\r\n                            <th class=\"w100\">Reporting Mode</th>\r\n                            <th class=\"w120\">Employee Type</th>\r\n                            <th class=\"w120\">Date of Joining</th>\r\n                            <th class=\"w130\">Updated DOJ</th>\r\n                            <th class=\"w120\">Confirmation</th>\r\n                            <th class=\"w120\">Resignation</th>\r\n                            <th class=\"w120\">KYC Received</th>\r\n                            <th class=\"w150\">Final Designation</th>\r\n                            <th class=\"w130\">Final State</th>\r\n                            <th class=\"w150\">Final Base Location</th>\r\n                            <th class=\"w130\">Status</th>\r\n                            <th class=\"w80 text-center\">Resume</th>\r\n                            <th class=\"w60 text-center\">Action</th>\r\n                        </tr>\r\n                    </table>\r\n                </div>\r\n                <div class=\"table-head border-top\">\r\n                    <table>\r\n                        <tr>\r\n                            <th class=\"w50 text-center\"></th>\r\n                            <th class=\"w120\" *ngIf=\"activeTab == ''\">\r\n                                <div class=\"th-search-acmt\">\r\n                                    <mat-form-field appearance=\"outline\" class=\"cs-select-ret\">\r\n                                        <mat-select name=\"current_stage\" [(ngModel)]=\"filter.current_stage\"\r\n                                            (selectionChange)=\"getCandidates()\">\r\n                                            <mat-option value=\"\">All</mat-option>\r\n                                            <mat-option *ngFor=\"let row of stageList\" [value]=\"row\">{{row}}</mat-option>\r\n                                        </mat-select>\r\n                                    </mat-form-field>\r\n                                </div>\r\n                            </th>\r\n                            <th class=\"w100\"></th>\r\n                            <th class=\"w100\">\r\n                                <div class=\"th-search-acmt\">\r\n                                    <mat-form-field class=\"cs-input date-column infix-bodr\">\r\n                                        <input matInput [matDatepicker]=\"picker\" placeholder=\"From\"\r\n                                            [(ngModel)]=\"filter.from_date\" (ngModelChange)=\"getCandidates()\" readonly>\r\n                                        <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\r\n                                        <mat-datepicker #picker></mat-datepicker>\r\n                                    </mat-form-field>\r\n                                </div>\r\n                            </th>\r\n                            <th class=\"w80\">\r\n                                <div class=\"th-search-acmt\">\r\n                                    <mat-form-field>\r\n                                        <input matInput placeholder=\"Search ...\" (keyup.enter)=\"getCandidates()\" (blur)=\"getCandidates()\"\r\n                                            [(ngModel)]=\"filter.id\">\r\n                                    </mat-form-field>\r\n                                </div>\r\n                            </th>\r\n                            <th class=\"w150\">\r\n                                <div class=\"th-search-acmt\">\r\n                                    <mat-form-field>\r\n                                        <input matInput placeholder=\"Search ...\" (keyup.enter)=\"getCandidates()\" (blur)=\"getCandidates()\"\r\n                                            [(ngModel)]=\"filter.search\">\r\n                                    </mat-form-field>\r\n                                </div>\r\n                            </th>\r\n                            <th class=\"w150\">\r\n                                <div class=\"th-search-acmt\">\r\n                                    <mat-form-field>\r\n                                        <input matInput placeholder=\"Search ...\" (keyup.enter)=\"getCandidates()\" (blur)=\"getCandidates()\"\r\n                                            [(ngModel)]=\"filter.contact_number\">\r\n                                    </mat-form-field>\r\n                                </div>\r\n                            </th>\r\n                            <th class=\"w150\">\r\n                                <div class=\"th-search-acmt\">\r\n                                    <mat-form-field>\r\n                                        <input matInput placeholder=\"Search ...\" (keyup.enter)=\"getCandidates()\" (blur)=\"getCandidates()\"\r\n                                            [(ngModel)]=\"filter.alternate_number\">\r\n                                    </mat-form-field>\r\n                                </div>\r\n                            </th>\r\n                            <th class=\"w150\">\r\n                                <div class=\"th-search-acmt\">\r\n                                    <mat-form-field>\r\n                                        <input matInput placeholder=\"Search ...\" (keyup.enter)=\"getCandidates()\" (blur)=\"getCandidates()\"\r\n                                            [(ngModel)]=\"filter.assigned_manager_name\">\r\n                                    </mat-form-field>\r\n                                </div>\r\n                            </th>\r\n                            <th class=\"w120\">\r\n                                <div class=\"th-search-acmt\">\r\n                                    <mat-form-field>\r\n                                        <input matInput placeholder=\"Search ...\" (keyup.enter)=\"getCandidates()\" (blur)=\"getCandidates()\"\r\n                                            [(ngModel)]=\"filter.native_place\">\r\n                                    </mat-form-field>\r\n                                </div>\r\n                            </th>\r\n                            <th class=\"w100\"></th>\r\n                            <th class=\"w120\">\r\n                                <div class=\"th-search-acmt\">\r\n                                    <mat-form-field class=\"cs-input select-input\">\r\n                                        <mat-select [(ngModel)]=\"filter.employee_type\" (selectionChange)=\"getCandidates()\">\r\n                                            <mat-option value=\"\">All</mat-option>\r\n                                            <mat-option value=\"Sales\">Sales</mat-option>\r\n                                            <mat-option value=\"Admin\">Admin</mat-option>\r\n                                            <mat-option value=\"Plant\">Plant</mat-option>\r\n                                        </mat-select>\r\n                                    </mat-form-field>\r\n                                </div>\r\n                            </th>\r\n                            <th class=\"w120\"></th>\r\n                            <th class=\"w130\"></th>\r\n                            <th class=\"w120\"></th>\r\n                            <th class=\"w120\"></th>\r\n                            <th class=\"w120\"></th>\r\n                            <th class=\"w150\">\r\n                                <div class=\"th-search-acmt\">\r\n                                    <mat-form-field>\r\n                                        <input matInput placeholder=\"Search ...\" (keyup.enter)=\"getCandidates()\" (blur)=\"getCandidates()\" [(ngModel)]=\"filter.final_designation\">\r\n                                    </mat-form-field>\r\n                                </div>\r\n                            </th>\r\n                            <th class=\"w130\">\r\n                                <div class=\"th-search-acmt\">\r\n                                    <mat-form-field>\r\n                                        <input matInput placeholder=\"Search ...\" (keyup.enter)=\"getCandidates()\" (blur)=\"getCandidates()\" [(ngModel)]=\"filter.final_state\">\r\n                                    </mat-form-field>\r\n                                </div>\r\n                            </th>\r\n                            <th class=\"w150\">\r\n                                <div class=\"th-search-acmt\">\r\n                                    <mat-form-field>\r\n                                        <input matInput placeholder=\"Search ...\" (keyup.enter)=\"getCandidates()\" (blur)=\"getCandidates()\" [(ngModel)]=\"filter.final_base_location\">\r\n                                    </mat-form-field>\r\n                                </div>\r\n                            </th>\r\n                            <th class=\"w130\">\r\n                                <div class=\"th-search-acmt\">\r\n                                    <mat-form-field class=\"cs-input select-input\">\r\n                                        <mat-select [(ngModel)]=\"filter.status\" (selectionChange)=\"getCandidates()\">\r\n                                            <mat-option value=\"\">All</mat-option>\r\n                                            <mat-option *ngFor=\"let s of statuses\" [value]=\"s\">{{s}}</mat-option>\r\n                                        </mat-select>\r\n                                    </mat-form-field>\r\n                                </div>\r\n                            </th>\r\n                            <th class=\"w80 text-center\"></th>\r\n                            <th class=\"w60 text-center\"></th>\r\n                        </tr>\r\n                    </table>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"table-container mb50\">\r\n                <div class=\"table-content\">\r\n                    <table>\r\n                        <ng-container *ngIf=\"!isLoading\">\r\n                            <tr *ngFor=\"let row of candidates;let i=index\">\r\n                                <td class=\"w50 text-center\">{{i+1+sr_no}}</td>\r\n                                <td class=\"w120\" *ngIf=\"activeTab == ''\">\r\n                                    <span class=\"stage-tag\"\r\n                                        [ngClass]=\"getStageClass(row.current_stage)\">{{row.current_stage}}</span>\r\n                                </td>\r\n                                <td class=\"w100\">{{row.created_at | date}}</td>\r\n                                <td class=\"w100\">{{(row.screening_date && row.screening_date != '0000-00-00') ?\r\n                                    (row.screening_date | date) : '---'}}</td>\r\n                                <td class=\"w80\">\r\n                                    <a class=\"link-btn\" style=\"cursor: pointer;\"\r\n                                        (click)=\"candidateDetail(row.id)\"><strong>#CAND-{{row.id}}</strong></a>\r\n                                </td>\r\n                                <td class=\"w150\">\r\n                                    <a class=\"link-btn\" style=\"cursor: pointer;\"\r\n                                        (click)=\"candidateDetail(row.id)\"><strong>{{row.name}}</strong></a>\r\n                                </td>\r\n                                <td class=\"w150\">{{row.contact_number}}</td>\r\n                                <td class=\"w150\">{{row.alternate_number || '---'}}</td>\r\n                                <td class=\"w150\">{{row.assigned_manager_name || '---'}}</td>\r\n                                <td class=\"w120\">{{row.native_place || '---'}}</td>\r\n                                <td class=\"w100\">{{row.reporting_mode || '---'}}</td>\r\n                                <td class=\"w120\">{{row.employee_type || '---'}}</td>\r\n                                <td class=\"w120\">{{(row.date_of_joining && row.date_of_joining != '0000-00-00') ? (row.date_of_joining | date:'d MMM y') : '---'}}</td>\r\n                                <td class=\"w130\">{{(row.updated_date_of_joining && row.updated_date_of_joining != '0000-00-00') ? (row.updated_date_of_joining | date:'d MMM y') : '---'}}</td>\r\n                                <td class=\"w120\">{{row.confirmation_received || '---'}}</td>\r\n                                <td class=\"w120\">{{row.resignation_received || '---'}}</td>\r\n                                <td class=\"w120\">{{row.kyc_received || '---'}}</td>\r\n                                <td class=\"w150\">{{row.final_designation || '---'}}</td>\r\n                                <td class=\"w130\">{{row.final_state || '---'}}</td>\r\n                                <td class=\"w150\">{{row.final_base_location || '---'}}</td>\r\n                                <td class=\"w130\">\r\n                                    <div class=\"df ac flex-gap-5\"\r\n                                        [style.cursor]=\"(row.current_stage == 'Rejected' || row.current_stage == 'Withdrawal' || row.current_stage == 'Joined') ? 'default' : 'pointer'\"\r\n                                        (click)=\"(row.current_stage == 'Rejected' || row.current_stage == 'Withdrawal' || row.current_stage == 'Joined') ? '' : openStatusModal(row)\">\r\n                                        <span class=\"status-circle\" [ngClass]=\"row.current_status.toLowerCase()\"></span>\r\n                                        <strong>{{row.current_status}}</strong>\r\n                                        <i class=\"material-icons font16\"\r\n                                            *ngIf=\"row.current_stage != 'Rejected' && row.current_stage != 'Withdrawal' && row.current_stage != 'Joined'\">edit</i>\r\n                                    </div>\r\n                                    <div *ngIf=\"activeTab == 'Hold'\"\r\n                                        style=\"font-size: 11px; color: #F9AB00; margin-top: 2px;\">\r\n                                        On Hold at: <strong>{{row.current_stage}}</strong>\r\n                                    </div>\r\n                                    <div *ngIf=\"activeTab == 'Rejected'\"\r\n                                        style=\"font-size: 11px; color: #D93025; margin-top: 2px;\">\r\n                                        Rejected from: <strong>{{row.rejected_from_stage || '---'}}</strong>\r\n                                    </div>\r\n                                    <div *ngIf=\"activeTab == 'Withdrawal'\"\r\n                                        style=\"font-size: 11px; color: #9333ea; margin-top: 2px;\">\r\n                                        Withdrawn from: <strong>{{row.withdrawn_from_stage || '---'}}</strong>\r\n                                    </div>\r\n                                </td>\r\n                                <td class=\"w80 text-center\">\r\n                                    <a *ngIf=\"row.resume_file\" [href]=\"serve.uploadUrl + 'Pdf/' + row.resume_file\"\r\n                                        target=\"_blank\" mat-icon-button color=\"primary\">\r\n                                        <i class=\"material-icons\">download</i>\r\n                                    </a>\r\n                                </td>\r\n                                <td class=\"w60 text-center\">\r\n                                    <button mat-icon-button matTooltip=\"Salary Calculator\" (click)=\"openSalaryCalc(row)\" style=\"color:#1565c0;\">\r\n                                        <i class=\"material-icons\">calculate</i>\r\n                                    </button>\r\n                                    <button *ngIf=\"row.current_stage == 'Pending' || row.current_stage == 'Screening'\" mat-icon-button color=\"warn\"\r\n                                        matTooltip=\"Delete\" (click)=\"deleteCandidate(row.id)\">\r\n                                        <i class=\"material-icons\">delete</i>\r\n                                    </button>\r\n                                </td>\r\n                            </tr>\r\n                        </ng-container>\r\n\r\n                        <!-- Loaders -->\r\n                        <ng-container *ngFor=\"let row of [].constructor(10);\">\r\n                            <tr class=\"sk-loading\" *ngIf=\"isLoading\">\r\n                                <td class=\"w50 text-center\">\r\n                                    <div>&nbsp;</div>\r\n                                </td>\r\n                                <td class=\"w120\" *ngIf=\"activeTab == ''\">\r\n                                    <div>&nbsp;</div>\r\n                                </td>\r\n                                <td class=\"w100\">\r\n                                    <div>&nbsp;</div>\r\n                                </td>\r\n                                <td class=\"w100\">\r\n                                    <div>&nbsp;</div>\r\n                                </td>\r\n                                <td class=\"w80\">\r\n                                    <div>&nbsp;</div>\r\n                                </td>\r\n                                <td class=\"w150\">\r\n                                    <div>&nbsp;</div>\r\n                                </td>\r\n                                <td class=\"w150\">\r\n                                    <div>&nbsp;</div>\r\n                                </td>\r\n                                <td class=\"w150\">\r\n                                    <div>&nbsp;</div>\r\n                                </td>\r\n                                <td class=\"w150\">\r\n                                    <div>&nbsp;</div>\r\n                                </td>\r\n                                <td class=\"w150\">\r\n                                    <div>&nbsp;</div>\r\n                                </td>\r\n                                <td class=\"w130\">\r\n                                    <div>&nbsp;</div>\r\n                                </td>\r\n                                <td class=\"w100\">\r\n                                    <div>&nbsp;</div>\r\n                                </td>\r\n                                <td class=\"w120\">\r\n                                    <div>&nbsp;</div>\r\n                                </td>\r\n                                <td class=\"w100\">\r\n                                    <div>&nbsp;</div>\r\n                                </td>\r\n                                <td class=\"w120\">\r\n                                    <div>&nbsp;</div>\r\n                                </td>\r\n                                <td class=\"w130\">\r\n                                    <div>&nbsp;</div>\r\n                                </td>\r\n                                <td class=\"w80\">\r\n                                    <div>&nbsp;</div>\r\n                                </td>\r\n                                <td class=\"w60\">\r\n                                    <div>&nbsp;</div>\r\n                                </td>\r\n                            </tr>\r\n                        </ng-container>\r\n                    </table>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <div class=\"no-data\" *ngIf=\"candidates.length == 0 && datanotfound == true;\">\r\n            <img src=\"assets/img/no-data.svg\" alt=\"\">\r\n            <p>Data not <span>available !</span></p>\r\n        </div>\r\n    </div>\r\n\r\n    <button class=\"fab-add-btn\" mat-fab color=\"accent\" matTooltip=\"Add New Candidate\" (click)=\"addCandidate()\">\r\n        <i class=\"material-icons\">add</i>\r\n    </button>\r\n\r\n    <!-- Salary Quick-Calc Modal -->\r\n    <div class=\"offer-modal-overlay\" *ngIf=\"showSalaryCalc\" (click)=\"closeSalaryCalc()\">\r\n        <div class=\"offer-modal\" style=\"max-width:860px;width:96%;\" (click)=\"$event.stopPropagation()\">\r\n            <div class=\"offer-modal-header\">\r\n                <div>\r\n                    <h3 style=\"margin:0;\">Salary Calculator</h3>\r\n                    <p style=\"margin:2px 0 0 0;font-size:12px;color:#666;\">{{salaryCalcRow?.name}} · {{salaryCalcRow?.employee_type}}</p>\r\n                </div>\r\n                <button mat-icon-button (click)=\"closeSalaryCalc()\">\r\n                    <i class=\"material-icons\">close</i>\r\n                </button>\r\n            </div>\r\n            <div class=\"offer-modal-body\" style=\"max-height:70vh;overflow-y:auto;\">\r\n                <div class=\"cs-form\">\r\n                    <!-- Sheet Type Selector -->\r\n                    <div style=\"margin-bottom:14px;\">\r\n                        <p style=\"font-size:12px;color:#666;margin:0 0 6px 0;font-weight:500;\">Sheet Type</p>\r\n                        <div style=\"display:flex;gap:0;border:1px solid #d1d5db;border-radius:8px;overflow:hidden;\">\r\n                            <button type=\"button\" (click)=\"salaryCalcData.sheet_type='PLANT HSP';onCalcSheetTypeChange()\"\r\n                                [style.background]=\"salaryCalcData.sheet_type=='PLANT HSP' ? '#1565c0' : '#fff'\"\r\n                                [style.color]=\"salaryCalcData.sheet_type=='PLANT HSP' ? '#fff' : '#374151'\"\r\n                                style=\"flex:1;padding:9px 6px;font-size:12px;font-weight:600;border:none;border-right:1px solid #d1d5db;cursor:pointer;transition:all 0.2s;\">\r\n                                PLANT HSP<br><span style=\"font-size:10px;font-weight:400;opacity:0.85;\">Hoshiarpur</span>\r\n                            </button>\r\n                            <button type=\"button\" (click)=\"salaryCalcData.sheet_type='KN PLANT';onCalcSheetTypeChange()\"\r\n                                [style.background]=\"salaryCalcData.sheet_type=='KN PLANT' ? '#1565c0' : '#fff'\"\r\n                                [style.color]=\"salaryCalcData.sheet_type=='KN PLANT' ? '#fff' : '#374151'\"\r\n                                style=\"flex:1;padding:9px 6px;font-size:12px;font-weight:600;border:none;border-right:1px solid #d1d5db;cursor:pointer;transition:all 0.2s;\">\r\n                                KN PLANT<br><span style=\"font-size:10px;font-weight:400;opacity:0.85;\">Chamrajnagar</span>\r\n                            </button>\r\n                            <button type=\"button\" (click)=\"salaryCalcData.sheet_type='SALES';onCalcSheetTypeChange()\"\r\n                                [style.background]=\"salaryCalcData.sheet_type=='SALES' ? '#1565c0' : '#fff'\"\r\n                                [style.color]=\"salaryCalcData.sheet_type=='SALES' ? '#fff' : '#374151'\"\r\n                                style=\"flex:1;padding:9px 6px;font-size:12px;font-weight:600;border:none;cursor:pointer;transition:all 0.2s;\">\r\n                                SALES<br><span style=\"font-size:10px;font-weight:400;opacity:0.85;\">Sales Staff</span>\r\n                            </button>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <!-- Input Mode Toggle -->\r\n                    <div style=\"display:flex;gap:0;border:1px solid #d1d5db;border-radius:8px;overflow:hidden;margin-bottom:12px;\">\r\n                        <button type=\"button\" (click)=\"salaryCalcData.input_mode='gross';onCalcInputModeChange()\"\r\n                            [style.background]=\"salaryCalcData.input_mode=='gross' ? '#2e7d32' : '#fff'\"\r\n                            [style.color]=\"salaryCalcData.input_mode=='gross' ? '#fff' : '#374151'\"\r\n                            style=\"flex:1;padding:9px 10px;font-size:13px;font-weight:600;border:none;border-right:1px solid #d1d5db;cursor:pointer;\">\r\n                            <i class=\"material-icons\" style=\"font-size:16px;vertical-align:middle;margin-right:4px;\">payments</i>\r\n                            Enter Gross\r\n                        </button>\r\n                        <button type=\"button\" (click)=\"salaryCalcData.input_mode='ctc';onCalcInputModeChange()\"\r\n                            [style.background]=\"salaryCalcData.input_mode=='ctc' ? '#2e7d32' : '#fff'\"\r\n                            [style.color]=\"salaryCalcData.input_mode=='ctc' ? '#fff' : '#374151'\"\r\n                            style=\"flex:1;padding:9px 10px;font-size:13px;font-weight:600;border:none;cursor:pointer;\">\r\n                            <i class=\"material-icons\" style=\"font-size:16px;vertical-align:middle;margin-right:4px;\">account_balance_wallet</i>\r\n                            Enter CTC / Month\r\n                        </button>\r\n                    </div>\r\n\r\n                    <!-- Gross Input -->\r\n                    <mat-form-field *ngIf=\"salaryCalcData.input_mode=='gross'\" appearance=\"outline\" style=\"width:100%;\">\r\n                        <mat-label>Gross Salary (₹)</mat-label>\r\n                        <input matInput type=\"number\" [(ngModel)]=\"salaryCalcData.gross\" (ngModelChange)=\"onCalcGrossChange()\" placeholder=\"Enter gross amount\">\r\n                    </mat-form-field>\r\n\r\n                    <!-- CTC Input -->\r\n                    <div *ngIf=\"salaryCalcData.input_mode=='ctc'\" style=\"display:flex;gap:10px;align-items:flex-start;\">\r\n                        <mat-form-field appearance=\"outline\" style=\"flex:1;\">\r\n                            <mat-label>CTC per Month (₹)</mat-label>\r\n                            <input matInput type=\"number\" [(ngModel)]=\"salaryCalcData.ctc_input\" (ngModelChange)=\"onCalcCtcInputChange()\" placeholder=\"Enter target CTC\">\r\n                        </mat-form-field>\r\n                        <mat-form-field appearance=\"outline\" style=\"flex:1;\" *ngIf=\"salaryCalcData.gross\">\r\n                            <mat-label>Calculated Gross (₹)</mat-label>\r\n                            <input matInput [value]=\"salaryCalcData.gross | inr\" readonly style=\"color:#1565c0;font-weight:600;\">\r\n                        </mat-form-field>\r\n                    </div>\r\n\r\n                    <!-- Checkboxes -->\r\n                    <div style=\"display:flex;gap:20px;align-items:flex-start;padding:4px 4px 8px 4px;flex-wrap:wrap;\">\r\n                        <div style=\"display:flex;flex-direction:column;gap:4px;\">\r\n                            <mat-checkbox [(ngModel)]=\"salaryCalcData.has_pf\" (ngModelChange)=\"calcRecalculate()\">\r\n                                <span style=\"font-size:13px;font-weight:500;\">PF (Employee + Employer)</span>\r\n                            </mat-checkbox>\r\n                            <mat-checkbox [(ngModel)]=\"salaryCalcData.has_pf_higher\" (ngModelChange)=\"calcRecalculate()\" [disabled]=\"!salaryCalcData.has_pf\" style=\"margin-left:22px;\">\r\n                                <span style=\"font-size:12px;color:#1565c0;font-weight:500;\">↳ Higher Side (Gross−HRA) × 12%</span>\r\n                            </mat-checkbox>\r\n                        </div>\r\n                        <mat-checkbox [(ngModel)]=\"salaryCalcData.has_bonus\" (ngModelChange)=\"calcRecalculate()\">\r\n                            <span style=\"font-size:13px;font-weight:500;\">Bonus</span>\r\n                        </mat-checkbox>\r\n                        <mat-checkbox [(ngModel)]=\"salaryCalcData.has_leave\" (ngModelChange)=\"calcRecalculate()\">\r\n                            <span style=\"font-size:13px;font-weight:500;\">Leave With Wages</span>\r\n                        </mat-checkbox>\r\n                        <mat-checkbox [(ngModel)]=\"salaryCalcData.has_gratuity\" (ngModelChange)=\"calcRecalculate()\">\r\n                            <span style=\"font-size:13px;font-weight:500;\">Gratuity</span>\r\n                        </mat-checkbox>\r\n                    </div>\r\n\r\n                    <div *ngIf=\"salaryCalcResult\">\r\n                        <table style=\"width:100%;border-collapse:collapse;font-size:12px;\">\r\n                            <thead>\r\n                                <tr style=\"background:#2e7d32;color:#fff;\">\r\n                                    <th style=\"padding:7px 10px;text-align:left;border:1px solid #1b5e20;\">Component</th>\r\n                                    <th style=\"padding:7px 10px;text-align:right;border:1px solid #1b5e20;\">Per Month</th>\r\n                                    <th style=\"padding:7px 10px;text-align:right;border:1px solid #1b5e20;\">Per Annum</th>\r\n                                </tr>\r\n                            </thead>\r\n                            <tbody>\r\n                                <tr style=\"background:#f9f9f9;\"><td style=\"padding:5px 10px;border:1px solid #e0e0e0;\">Basic</td><td style=\"padding:5px 10px;text-align:right;border:1px solid #e0e0e0;\">{{salaryCalcResult.basic | inr}}</td><td style=\"padding:5px 10px;text-align:right;border:1px solid #e0e0e0;\">{{salaryCalcResult.basic * 12 | inr}}</td></tr>\r\n                                <tr><td style=\"padding:5px 10px;border:1px solid #e0e0e0;\">HRA</td><td style=\"padding:5px 10px;text-align:right;border:1px solid #e0e0e0;\">{{salaryCalcResult.hra | inr}}</td><td style=\"padding:5px 10px;text-align:right;border:1px solid #e0e0e0;\">{{salaryCalcResult.hra * 12 | inr}}</td></tr>\r\n                                <tr style=\"background:#f9f9f9;\"><td style=\"padding:5px 10px;border:1px solid #e0e0e0;\">Conveyance</td><td style=\"padding:5px 10px;text-align:right;border:1px solid #e0e0e0;\">{{salaryCalcResult.conveyance | inr}}</td><td style=\"padding:5px 10px;text-align:right;border:1px solid #e0e0e0;\">{{salaryCalcResult.conveyance * 12 | inr}}</td></tr>\r\n                                <tr><td style=\"padding:5px 10px;border:1px solid #e0e0e0;\">Medical</td><td style=\"padding:5px 10px;text-align:right;border:1px solid #e0e0e0;\">{{salaryCalcResult.medical | inr}}</td><td style=\"padding:5px 10px;text-align:right;border:1px solid #e0e0e0;\">{{salaryCalcResult.medical * 12 | inr}}</td></tr>\r\n                                <tr style=\"background:#f9f9f9;\"><td style=\"padding:5px 10px;border:1px solid #e0e0e0;\">Education Allowance</td><td style=\"padding:5px 10px;text-align:right;border:1px solid #e0e0e0;\">{{salaryCalcResult.education | inr}}</td><td style=\"padding:5px 10px;text-align:right;border:1px solid #e0e0e0;\">{{salaryCalcResult.education * 12 | inr}}</td></tr>\r\n                                <tr style=\"background:#2e7d32;color:#fff;font-weight:700;\"><td style=\"padding:6px 10px;border:1px solid #1b5e20;\">Gross</td><td style=\"padding:6px 10px;text-align:right;border:1px solid #1b5e20;\">{{salaryCalcData.gross | inr}}</td><td style=\"padding:6px 10px;text-align:right;border:1px solid #1b5e20;\">{{salaryCalcResult.gross_annual | inr}}</td></tr>\r\n                                <tr><td style=\"padding:5px 10px;border:1px solid #e0e0e0;\">PF (Employee)</td><td style=\"padding:5px 10px;text-align:right;border:1px solid #e0e0e0;\">{{salaryCalcResult.pf_employee | inr}}</td><td style=\"padding:5px 10px;text-align:right;border:1px solid #e0e0e0;\">{{salaryCalcResult.pf_employee * 12 | inr}}</td></tr>\r\n                                <tr style=\"background:#f9f9f9;\"><td style=\"padding:5px 10px;border:1px solid #e0e0e0;\">ESI (Employee)</td><td style=\"padding:5px 10px;text-align:right;border:1px solid #e0e0e0;\">{{salaryCalcResult.esi_employee | inr}}</td><td style=\"padding:5px 10px;text-align:right;border:1px solid #e0e0e0;\">{{salaryCalcResult.esi_employee * 12 | inr}}</td></tr>\r\n                                <tr><td style=\"padding:5px 10px;border:1px solid #e0e0e0;\">P. Tax</td><td style=\"padding:5px 10px;text-align:right;border:1px solid #e0e0e0;\">{{salaryCalcResult.ptax | inr}}</td><td style=\"padding:5px 10px;text-align:right;border:1px solid #e0e0e0;\">{{salaryCalcResult.ptax * 12 | inr}}</td></tr>\r\n                                <tr style=\"background:#f9f9f9;\"><td style=\"padding:5px 10px;border:1px solid #e0e0e0;\">LWF</td><td style=\"padding:5px 10px;text-align:right;border:1px solid #e0e0e0;\">{{salaryCalcResult.lwf | inr}}</td><td style=\"padding:5px 10px;text-align:right;border:1px solid #e0e0e0;\">{{salaryCalcResult.lwf * 12 | inr}}</td></tr>\r\n                                <tr style=\"background:#2e7d32;color:#fff;font-weight:700;\"><td style=\"padding:6px 10px;border:1px solid #1b5e20;\">Net Payable</td><td style=\"padding:6px 10px;text-align:right;border:1px solid #1b5e20;\">{{salaryCalcResult.net_payable | inr}}</td><td style=\"padding:6px 10px;text-align:right;border:1px solid #1b5e20;\">{{salaryCalcResult.net_payable_annual | inr}}</td></tr>\r\n                                <tr><td style=\"padding:5px 10px;border:1px solid #e0e0e0;\">PF (Employer)</td><td style=\"padding:5px 10px;text-align:right;border:1px solid #e0e0e0;\">{{salaryCalcResult.pf_employer | inr}}</td><td style=\"padding:5px 10px;text-align:right;border:1px solid #e0e0e0;\">{{salaryCalcResult.pf_employer * 12 | inr}}</td></tr>\r\n                                <tr style=\"background:#f9f9f9;\"><td style=\"padding:5px 10px;border:1px solid #e0e0e0;\">ESI (Employer)</td><td style=\"padding:5px 10px;text-align:right;border:1px solid #e0e0e0;\">{{salaryCalcResult.esi_employer | inr}}</td><td style=\"padding:5px 10px;text-align:right;border:1px solid #e0e0e0;\">{{salaryCalcResult.esi_employer * 12 | inr}}</td></tr>\r\n                                <tr><td style=\"padding:5px 10px;border:1px solid #e0e0e0;\">Bonus (monthly)</td><td style=\"padding:5px 10px;text-align:right;border:1px solid #e0e0e0;\">{{salaryCalcResult.bonus_monthly | inr}}</td><td style=\"padding:5px 10px;text-align:right;border:1px solid #e0e0e0;\">{{salaryCalcResult.bonus_annual | inr}}</td></tr>\r\n                                <tr style=\"background:#f9f9f9;\"><td style=\"padding:5px 10px;border:1px solid #e0e0e0;\">Leave</td><td style=\"padding:5px 10px;text-align:right;border:1px solid #e0e0e0;\">{{salaryCalcResult.leave_monthly | inr}}</td><td style=\"padding:5px 10px;text-align:right;border:1px solid #e0e0e0;\">{{salaryCalcResult.leave_annual | inr}}</td></tr>\r\n                                <tr><td style=\"padding:5px 10px;border:1px solid #e0e0e0;\">Gratuity</td><td style=\"padding:5px 10px;text-align:right;border:1px solid #e0e0e0;\">{{salaryCalcResult.gratuity_monthly | inr}}</td><td style=\"padding:5px 10px;text-align:right;border:1px solid #e0e0e0;\">{{salaryCalcResult.gratuity_annual | inr}}</td></tr>\r\n                                <tr style=\"background:#2e7d32;color:#fff;font-weight:700;\"><td style=\"padding:6px 10px;border:1px solid #1b5e20;\">Total CTC</td><td style=\"padding:6px 10px;text-align:right;border:1px solid #1b5e20;\">{{salaryCalcResult.total_ctc | inr}}</td><td style=\"padding:6px 10px;text-align:right;border:1px solid #1b5e20;\">{{salaryCalcResult.total_ctc_annual | inr}}</td></tr>\r\n                            </tbody>\r\n                        </table>\r\n                    </div>\r\n\r\n                    <!-- Salary History -->\r\n                    <div style=\"margin-top:20px;\">\r\n                        <p style=\"font-size:13px;font-weight:600;color:#374151;margin:0 0 8px 0;\">\r\n                            <i class=\"material-icons\" style=\"font-size:15px;vertical-align:middle;margin-right:4px;color:#1565c0;\">history</i>\r\n                            Saved Salary Structures\r\n                        </p>\r\n                        <div *ngIf=\"salaryHistoryLoading\" style=\"text-align:center;padding:12px;color:#666;font-size:12px;\">Loading history...</div>\r\n                        <div *ngIf=\"!salaryHistoryLoading && salaryHistory.length == 0\" style=\"text-align:center;padding:12px;color:#999;font-size:12px;\">No saved records yet.</div>\r\n                        <div *ngIf=\"!salaryHistoryLoading && salaryHistory.length > 0\" style=\"max-height:160px;overflow-y:auto;border:1px solid #e0e0e0;border-radius:6px;\">\r\n                            <table style=\"width:100%;border-collapse:collapse;font-size:11.5px;\">\r\n                                <thead style=\"position:sticky;top:0;z-index:1;\">\r\n                                    <tr style=\"background:#1565c0;color:#fff;\">\r\n                                        <th style=\"padding:6px 8px;text-align:left;white-space:nowrap;\">Date</th>\r\n                                        <th style=\"padding:6px 8px;text-align:left;white-space:nowrap;\">Sheet</th>\r\n                                        <th style=\"padding:6px 8px;text-align:right;white-space:nowrap;\">Gross</th>\r\n                                        <th style=\"padding:6px 8px;text-align:right;white-space:nowrap;\">Net Pay</th>\r\n                                        <th style=\"padding:6px 8px;text-align:right;white-space:nowrap;\">CTC/Month</th>\r\n                                        <th style=\"padding:6px 8px;text-align:left;white-space:nowrap;\">By</th>\r\n                                        <th style=\"padding:6px 8px;text-align:center;white-space:nowrap;\">Load</th>\r\n                                    </tr>\r\n                                </thead>\r\n                                <tbody>\r\n                                    <tr *ngFor=\"let rec of salaryHistory;let i=index\" [style.background]=\"i%2==0?'#f9f9f9':'#fff'\">\r\n                                        <td style=\"padding:5px 8px;border-bottom:1px solid #e0e0e0;white-space:nowrap;\">{{rec.created_at | date:'d MMM y'}}</td>\r\n                                        <td style=\"padding:5px 8px;border-bottom:1px solid #e0e0e0;white-space:nowrap;\">{{rec.sheet_type}}</td>\r\n                                        <td style=\"padding:5px 8px;border-bottom:1px solid #e0e0e0;text-align:right;white-space:nowrap;\">{{rec.gross | inr}}</td>\r\n                                        <td style=\"padding:5px 8px;border-bottom:1px solid #e0e0e0;text-align:right;white-space:nowrap;\">{{rec.net_payable | inr}}</td>\r\n                                        <td style=\"padding:5px 8px;border-bottom:1px solid #e0e0e0;text-align:right;white-space:nowrap;font-weight:600;color:#2e7d32;\">{{rec.total_ctc | inr}}</td>\r\n                                        <td style=\"padding:5px 8px;border-bottom:1px solid #e0e0e0;white-space:nowrap;\">{{rec.created_by_name || '---'}}</td>\r\n                                        <td style=\"padding:5px 8px;border-bottom:1px solid #e0e0e0;text-align:center;\">\r\n                                            <button mat-icon-button matTooltip=\"Load this record\" style=\"color:#1565c0;width:28px;height:28px;line-height:28px;\" (click)=\"loadSalaryRecord(rec)\">\r\n                                                <i class=\"material-icons\" style=\"font-size:16px;\">file_upload</i>\r\n                                            </button>\r\n                                        </td>\r\n                                    </tr>\r\n                                </tbody>\r\n                            </table>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"offer-modal-footer\">\r\n                <button mat-stroked-button (click)=\"closeSalaryCalc()\">Close</button>\r\n                <button mat-raised-button style=\"background:#2e7d32;color:#fff;\" (click)=\"saveSalaryStructure()\" [disabled]=\"salarySaving || !salaryCalcResult\">\r\n                    <i class=\"material-icons\" style=\"font-size:16px;vertical-align:middle;margin-right:4px;\">save</i>\r\n                    {{salarySaving ? 'Saving...' : 'Save'}}\r\n                </button>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/hr-recruitment/candidate-list/candidate-list.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/hr-recruitment/candidate-list/candidate-list.component.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".offer-modal-overlay {\n  position: fixed;\n  top: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  background: rgba(0, 0, 0, 0.45);\n  z-index: 9999;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.offer-modal {\n  background: #fff;\n  border-radius: 12px;\n  width: 480px;\n  max-width: 90vw;\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.15);\n}\n\n.offer-modal .offer-modal-header {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 16px 20px;\n  border-bottom: 1px solid #f0f0f0;\n}\n\n.offer-modal .offer-modal-header h3 {\n  margin: 0;\n  font-size: 16px;\n  font-weight: 600;\n  color: #1f2937;\n}\n\n.offer-modal .offer-modal-body {\n  padding: 20px;\n}\n\n.offer-modal .offer-modal-footer {\n  display: flex;\n  justify-content: flex-end;\n  gap: 8px;\n  padding: 12px 20px;\n  border-top: 1px solid #f0f0f0;\n}\n\n.action-select {\n  width: 100%;\n  padding: 5px;\n  border: 1px solid #ddd;\n  border-radius: 4px;\n  font-size: 13px;\n  height: 30px;\n  background-color: white;\n  cursor: pointer;\n}\n\n.status-circle {\n  display: inline-block;\n  width: 8px;\n  height: 8px;\n  border-radius: 50%;\n  background-color: #ccc;\n  margin-right: 5px;\n}\n\n.pending {\n  background-color: #ff9800 !important;\n}\n\n.pass {\n  background-color: #4caf50 !important;\n}\n\n.fail {\n  background-color: #f44336 !important;\n}\n\n.hold {\n  background-color: #2196f3 !important;\n}\n\n.selected {\n  background-color: #8bc34a !important;\n}\n\n.rejected {\n  background-color: #9e9e9e !important;\n}\n\n.tab-scroll-bar {\n  width: 100%;\n  overflow-x: auto;\n  background: #f5f6fa;\n  border-bottom: 2px solid #e8eaf0;\n  white-space: nowrap;\n  -webkit-overflow-scrolling: touch;\n  padding: 6px 12px 0;\n}\n\n.tab-scroll-bar::-webkit-scrollbar {\n  height: 3px;\n}\n\n.tab-scroll-bar::-webkit-scrollbar-thumb {\n  background: #c5c8d6;\n  border-radius: 3px;\n}\n\n.tab-scroll-bar .mat-tabbar {\n  display: inline-flex;\n  flex-wrap: nowrap;\n  gap: 2px;\n}\n\n.tab-scroll-bar .mat-tabbar button.mat-button {\n  border-radius: 8px 8px 0 0;\n  height: 38px;\n  font-size: 12.5px;\n  font-weight: 500;\n  color: #555e7a;\n  padding: 0 14px;\n  min-width: unset;\n  letter-spacing: 0.2px;\n  transition: background 0.15s, color 0.15s;\n  border-bottom: 3px solid transparent;\n}\n\n.tab-scroll-bar .mat-tabbar button.mat-button:hover {\n  background: #eceef5;\n  color: #333;\n}\n\n.tab-scroll-bar .mat-tabbar button.mat-button.active {\n  color: var(--primary);\n  background: #fff;\n  border-bottom: 3px solid var(--primary);\n  font-weight: 600;\n}\n\n.tab-scroll-bar .mat-tabbar button.mat-button.active:after {\n  display: none;\n}\n\n.tab-scroll-bar .mat-tabbar button.mat-button.active .tab-count {\n  background: var(--primary);\n  color: #fff;\n}\n\n.tab-count {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  min-width: 18px;\n  height: 18px;\n  padding: 0 5px;\n  margin-left: 5px;\n  border-radius: 9px;\n  font-size: 10px;\n  font-weight: 700;\n  background: #dde1ee;\n  color: #555e7a;\n  vertical-align: middle;\n}\n\n.sub-tab-bar {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 8px 16px;\n  background: #f0f2fa;\n  border-bottom: 1px solid #dde0ef;\n  overflow-x: auto;\n}\n\n.sub-tab-bar .sub-tab-label {\n  font-size: 11px;\n  font-weight: 600;\n  color: #8b90a7;\n  text-transform: uppercase;\n  letter-spacing: 0.6px;\n  white-space: nowrap;\n  padding-right: 4px;\n  border-right: 1px solid #cdd0de;\n  margin-right: 4px;\n}\n\n.sub-tab-bar .sub-tab-group {\n  display: flex;\n  gap: 6px;\n  background: #fff;\n  border: 1px solid #dde0ef;\n  border-radius: 10px;\n  padding: 3px;\n}\n\n.sub-tab-bar .sub-tab-btn {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  border: none;\n  background: transparent;\n  border-radius: 7px;\n  height: 28px;\n  padding: 0 12px;\n  font-size: 12px;\n  font-weight: 500;\n  color: #555e7a;\n  cursor: pointer;\n  transition: all 0.15s ease;\n  white-space: nowrap;\n  outline: none;\n}\n\n.sub-tab-bar .sub-tab-btn .sub-dot {\n  width: 7px;\n  height: 7px;\n  border-radius: 50%;\n  flex-shrink: 0;\n}\n\n.sub-tab-bar .sub-tab-btn .sub-dot.all {\n  background: #8b90a7;\n}\n\n.sub-tab-bar .sub-tab-btn .sub-dot.sales-dot {\n  background: #16a34a;\n}\n\n.sub-tab-bar .sub-tab-btn .sub-dot.admin-dot {\n  background: #2563eb;\n}\n\n.sub-tab-bar .sub-tab-btn .sub-dot.plant-dot {\n  background: #d97706;\n}\n\n.sub-tab-bar .sub-tab-btn .sub-count {\n  min-width: 18px;\n  height: 17px;\n  padding: 0 5px;\n  border-radius: 9px;\n  font-size: 10px;\n  font-weight: 700;\n  background: #e8eaf3;\n  color: #555e7a;\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  transition: all 0.15s ease;\n}\n\n.sub-tab-bar .sub-tab-btn:hover {\n  background: #f0f2fa;\n}\n\n.sub-tab-bar .sub-tab-btn.active {\n  font-weight: 600;\n  color: #fff;\n}\n\n.sub-tab-bar .sub-tab-btn.active .sub-count {\n  background: rgba(255, 255, 255, 0.28);\n  color: #fff;\n}\n\n.sub-tab-bar .sub-tab-btn.active {\n  background: #6366f1;\n}\n\n.sub-tab-bar .sub-tab-btn.sales.active {\n  background: #16a34a;\n}\n\n.sub-tab-bar .sub-tab-btn.admin.active {\n  background: #2563eb;\n}\n\n.sub-tab-bar .sub-tab-btn.plant.active {\n  background: #d97706;\n}\n\n.fab-add-btn {\n  position: fixed;\n  bottom: 28px;\n  right: 28px;\n  z-index: 999;\n  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.25) !important;\n}\n\n.stage-tag {\n  padding: 2px 8px;\n  border-radius: 4px;\n  font-size: 11px;\n  font-weight: 500;\n  white-space: nowrap;\n}\n\n.pending {\n  background: #fef9c3;\n  color: #92400e;\n  border: 1px solid #fde68a;\n}\n\n.screening {\n  background: #e3f2fd;\n  color: #1976d2;\n  border: 1px solid #bbdefb;\n}\n\n.suniti-round {\n  background: #f3e5f5;\n  color: #7b1fa2;\n  border: 1px solid #e1bee7;\n}\n\n.gb-round {\n  background: #e8f5e9;\n  color: #388e3c;\n  border: 1px solid #c8e6c9;\n}\n\n.manager-round {\n  background: #fff3e0;\n  color: #f57c00;\n  border: 1px solid #ffe0b2;\n}\n\n.under-process {\n  background: #e0f2f1;\n  color: #00796b;\n  border: 1px solid #b2dfdb;\n}\n\n.final-select {\n  background: #f1f8e9;\n  color: #689f38;\n  border: 1px solid #dcedc8;\n}\n\n.under-negotiation {\n  background: #fce4ec;\n  color: #c2185b;\n  border: 1px solid #f8bbd0;\n}\n\n.letter-sent {\n  background: #e1f5fe;\n  color: #0288d1;\n  border: 1px solid #b3e5fc;\n}\n\n.joined {\n  background: #c8e6c9;\n  color: #2e7d32;\n  border: 1px solid #a5d6a7;\n}\n\n.hold {\n  background: #fff9c4;\n  color: #fbc02d;\n  border: 1px solid #fff9c4;\n}\n\n.rejected {\n  background: #ffebee;\n  color: #d32f2f;\n  border: 1px solid #ffcdd2;\n}\n\n.withdrawal {\n  background: #eeeeee;\n  color: #616161;\n  border: 1px solid #e0e0e0;\n}"

/***/ }),

/***/ "./src/app/hr-recruitment/candidate-list/candidate-list.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/hr-recruitment/candidate-list/candidate-list.component.ts ***!
  \***************************************************************************/
/*! exports provided: CandidateListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CandidateListComponent", function() { return CandidateListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_services_DatabaseService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/_services/DatabaseService */ "./src/_services/DatabaseService.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng6-toastr-notifications */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/ng6-toastr-notifications/fesm5/ng6-toastr-notifications.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _candidate_status_modal_candidate_status_modal_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../candidate-status-modal/candidate-status-modal.component */ "./src/app/hr-recruitment/candidate-status-modal/candidate-status-modal.component.ts");







var CandidateListComponent = /** @class */ (function () {
    function CandidateListComponent(serve, router, toast, dialog) {
        this.serve = serve;
        this.router = router;
        this.toast = toast;
        this.dialog = dialog;
        this.candidates = [];
        this.isLoading = false;
        this.datanotfound = false;
        this.filter = { stage: '', status: '', current_stage: '', search: '', from_date: '', to_date: '', native_place: '', contact_number: '', alternate_number: '', assigned_manager_name: '', base_location: '', employee_type: '', final_designation: '', final_state: '', final_base_location: '' };
        this.stageList = ['Pending', 'Screening', 'Suniti Round', 'GB Round', 'Manager Round', 'Under Process', 'Final Select', 'Under Negotiation', 'Letter Sent', 'Joined', 'Hold', 'Rejected', 'Withdrawal'];
        this.activeTab = '';
        this.activeSubTab = '';
        this.tabCount = {};
        this.subTabCount = {};
        this.start = 0;
        this.pagenumber = 1;
        this.total_page = 1;
        this.count = 0;
        this.sr_no = 0;
        this.stages = ['Pending', 'Screening', 'Suniti Round', 'GB Round', 'Manager Round', 'Under Process', 'Final Select', 'Under Negotiation', 'Letter Sent', 'Joined'];
        this.statuses = ['Pending', 'Pass', 'Fail', 'Hold'];
        // Salary Quick-Calc
        this.showSalaryCalc = false;
        this.salaryCalcRow = null;
        this.salaryCalcData = { sheet_type: 'KN PLANT', gross: null, has_pf: true, has_bonus: false, has_gratuity: false };
        this.salaryCalcResult = null;
        this.salaryHistory = [];
        this.salarySaving = false;
        this.salaryHistoryLoading = false;
        this.page_limit = this.serve.pageLimit;
    }
    CandidateListComponent.prototype.ngOnInit = function () {
        var saved = sessionStorage.getItem('hr_candidate_list_state');
        if (saved) {
            var state = JSON.parse(saved);
            this.filter = state.filter;
            this.activeTab = state.activeTab;
            this.start = state.start;
            sessionStorage.removeItem('hr_candidate_list_state');
        }
        this.getCandidates();
    };
    CandidateListComponent.prototype.refresh = function () {
        this.filter = { stage: '', status: '', current_stage: '', search: '', from_date: '', to_date: '', native_place: '', contact_number: '', alternate_number: '', assigned_manager_name: '', base_location: '' };
        this.activeTab = '';
        this.start = 0;
        this.getCandidates();
    };
    CandidateListComponent.prototype.changeTab = function (tab) {
        this.activeTab = tab;
        this.activeSubTab = '';
        this.start = 0;
        this.getCandidates();
    };
    CandidateListComponent.prototype.changeSubTab = function (subTab) {
        this.activeSubTab = subTab;
        this.start = 0;
        this.getCandidates();
    };
    CandidateListComponent.prototype.pervious = function () {
        this.start = this.start - this.page_limit;
        this.getCandidates();
    };
    CandidateListComponent.prototype.nextPage = function () {
        this.start = this.start + this.page_limit;
        this.getCandidates();
    };
    Object.defineProperty(CandidateListComponent.prototype, "subTabKey", {
        get: function () {
            return this.activeTab === '' ? 'All' : this.activeTab;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CandidateListComponent.prototype, "activeTabTotal", {
        get: function () {
            return this.activeTab === '' ? (this.tabCount['All'] || 0) : (this.tabCount[this.activeTab] || 0);
        },
        enumerable: true,
        configurable: true
    });
    CandidateListComponent.prototype.getCandidates = function () {
        var _this = this;
        this.isLoading = true;
        this.datanotfound = false;
        if (this.start < 0) {
            this.start = 0;
        }
        var payload = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, this.filter, { start: this.start, pagelimit: this.page_limit });
        // Send tab param for Hold/Rejected, stage for normal tabs
        if (this.activeTab == 'Hold' || this.activeTab == 'Rejected' || this.activeTab == 'Withdrawal') {
            payload.tab = this.activeTab;
            delete payload.stage;
        }
        else {
            payload.stage = this.activeTab;
        }
        // Sub-tab (Sales/Admin/Plant) filter — applies to all tabs
        if (this.activeSubTab) {
            payload.employee_type = this.activeSubTab;
        }
        this.serve.post_rqst(payload, "Hr_Recruitment/getCandidates").subscribe(function (result) {
            _this.isLoading = false;
            if (result['statusCode'] == 200) {
                _this.candidates = result['result'];
                _this.tabCount = result['tabCount'] || {};
                _this.subTabCount = result['subTabCount'] || {};
                _this.count = result['count'] || 0;
                _this.total_page = Math.ceil(_this.count / _this.page_limit) || 1;
                _this.pagenumber = Math.ceil(_this.start / _this.page_limit) + 1;
                _this.sr_no = (_this.pagenumber - 1) * _this.page_limit;
                if (_this.candidates.length == 0) {
                    _this.datanotfound = true;
                }
            }
            else {
                _this.datanotfound = true;
            }
        }, function (err) {
            _this.isLoading = false;
            _this.datanotfound = true;
        });
    };
    CandidateListComponent.prototype.openStatusModal = function (row) {
        var _this = this;
        var dialogRef = this.dialog.open(_candidate_status_modal_candidate_status_modal_component__WEBPACK_IMPORTED_MODULE_6__["CandidateStatusModalComponent"], {
            width: '450px',
            data: {
                candidate: row
            }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result) {
                _this.getCandidates();
            }
        });
    };
    CandidateListComponent.prototype.deleteCandidate = function (id) {
        var _this = this;
        if (!confirm('Are you sure you want to delete this candidate?'))
            return;
        this.serve.post_rqst({ id: id }, "Hr_Recruitment/deleteCandidate").subscribe(function (result) {
            if (result['statusCode'] == 200) {
                _this.toast.successToastr('Candidate deleted successfully.');
                _this.getCandidates();
            }
            else {
                _this.toast.errorToastr('Failed to delete candidate.');
            }
        });
    };
    CandidateListComponent.prototype.addCandidate = function () {
        this.router.navigate(['/hr-recruitment/add']);
    };
    CandidateListComponent.prototype.getStageClass = function (stage) {
        if (!stage)
            return '';
        return stage.toLowerCase().replace(/\s+/g, '-');
    };
    CandidateListComponent.prototype.candidateDetail = function (id) {
        sessionStorage.setItem('hr_candidate_list_state', JSON.stringify({
            filter: this.filter,
            activeTab: this.activeTab,
            start: this.start
        }));
        this.router.navigate(['/hr-recruitment/detail', id]);
    };
    CandidateListComponent.prototype._calcDefaults = function (sheetType) {
        return {
            has_pf: sheetType !== 'PLANT HSP',
            has_pf_higher: false,
            has_bonus: sheetType !== 'KN PLANT',
            has_gratuity: sheetType === 'SALES',
            has_leave: true
        };
    };
    CandidateListComponent.prototype.openSalaryCalc = function (row) {
        var sheetType = 'KN PLANT';
        if (row.employee_type === 'Sales') {
            sheetType = 'SALES';
        }
        else if (row.employee_location && (row.employee_location.toLowerCase().includes('hoshiarpur') || row.employee_location.toLowerCase().includes('hsp'))) {
            sheetType = 'PLANT HSP';
        }
        this.salaryCalcRow = row;
        this.salaryCalcData = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({ sheet_type: sheetType, input_mode: 'gross', gross: null, ctc_input: null }, this._calcDefaults(sheetType));
        this.salaryCalcResult = null;
        this.salaryHistory = [];
        this.showSalaryCalc = true;
        this.getSalaryHistory();
    };
    CandidateListComponent.prototype.getSalaryHistory = function () {
        var _this = this;
        this.salaryHistoryLoading = true;
        this.serve.post_rqst({ candidate_id: this.salaryCalcRow.id }, "Hr_Recruitment/getSalaryStructures").subscribe(function (result) {
            _this.salaryHistoryLoading = false;
            if (result['statusCode'] == 200) {
                _this.salaryHistory = result['result'] || [];
            }
        }, function (err) { _this.salaryHistoryLoading = false; });
    };
    CandidateListComponent.prototype.saveSalaryStructure = function () {
        var _this = this;
        if (!this.salaryCalcResult) {
            this.toast.errorToastr('Please calculate salary first.');
            return;
        }
        this.salarySaving = true;
        var payload = {
            candidate_id: this.salaryCalcRow.id,
            sheet_type: this.salaryCalcData.sheet_type,
            gross: this.salaryCalcData.gross,
            has_pf: this.salaryCalcData.has_pf ? 1 : 0,
            has_pf_higher: this.salaryCalcData.has_pf_higher ? 1 : 0,
            has_bonus: this.salaryCalcData.has_bonus ? 1 : 0,
            has_leave: this.salaryCalcData.has_leave ? 1 : 0,
            has_gratuity: this.salaryCalcData.has_gratuity ? 1 : 0,
            basic: this.salaryCalcResult.basic,
            hra: this.salaryCalcResult.hra,
            conveyance: this.salaryCalcResult.conveyance,
            medical: this.salaryCalcResult.medical,
            education: this.salaryCalcResult.education,
            pf_employee: this.salaryCalcResult.pf_employee,
            pf_employer: this.salaryCalcResult.pf_employer,
            esi_employee: this.salaryCalcResult.esi_employee,
            esi_employer: this.salaryCalcResult.esi_employer,
            ptax: this.salaryCalcResult.ptax,
            lwf: this.salaryCalcResult.lwf,
            bonus_monthly: this.salaryCalcResult.bonus_monthly,
            leave_monthly: this.salaryCalcResult.leave_monthly,
            gratuity_monthly: this.salaryCalcResult.gratuity_monthly,
            net_payable: this.salaryCalcResult.net_payable,
            total_ctc: this.salaryCalcResult.total_ctc
        };
        this.serve.post_rqst(payload, "Hr_Recruitment/saveSalaryStructure").subscribe(function (result) {
            _this.salarySaving = false;
            if (result['statusCode'] == 200) {
                _this.toast.successToastr('Salary structure saved.');
                _this.getSalaryHistory();
            }
            else {
                _this.toast.errorToastr('Failed to save salary structure.');
            }
        }, function (err) { _this.salarySaving = false; });
    };
    CandidateListComponent.prototype.loadSalaryRecord = function (rec) {
        this.salaryCalcData = {
            sheet_type: rec.sheet_type,
            input_mode: 'gross',
            gross: parseFloat(rec.gross),
            ctc_input: null,
            has_pf: rec.has_pf == 1,
            has_pf_higher: rec.has_pf_higher == 1,
            has_bonus: rec.has_bonus == 1,
            has_leave: rec.has_leave == 1,
            has_gratuity: rec.has_gratuity == 1
        };
        this.onCalcGrossChange();
    };
    CandidateListComponent.prototype.closeSalaryCalc = function () {
        this.showSalaryCalc = false;
    };
    CandidateListComponent.prototype.onCalcInputModeChange = function () {
        this.salaryCalcData.gross = null;
        this.salaryCalcData.ctc_input = null;
        this.salaryCalcResult = null;
    };
    CandidateListComponent.prototype.onCalcSheetTypeChange = function () {
        var d = this._calcDefaults(this.salaryCalcData.sheet_type);
        this.salaryCalcData.has_pf = d.has_pf;
        this.salaryCalcData.has_bonus = d.has_bonus;
        this.salaryCalcData.has_gratuity = d.has_gratuity;
        this.calcRecalculate();
    };
    CandidateListComponent.prototype.calcRecalculate = function () {
        if (this.salaryCalcData.input_mode === 'ctc') {
            this.onCalcCtcInputChange();
        }
        else {
            this.onCalcGrossChange();
        }
    };
    CandidateListComponent.prototype.onCalcGrossChange = function () {
        var gross = parseFloat(this.salaryCalcData.gross) || 0;
        if (gross <= 0) {
            this.salaryCalcResult = null;
            return;
        }
        this.salaryCalcResult = this.computeSalary(gross, this.salaryCalcData.sheet_type, this.salaryCalcData.has_pf, this.salaryCalcData.has_bonus, this.salaryCalcData.has_gratuity, this.salaryCalcData.has_leave, this.salaryCalcData.has_pf_higher);
    };
    CandidateListComponent.prototype.onCalcCtcInputChange = function () {
        var targetCtc = parseFloat(this.salaryCalcData.ctc_input) || 0;
        if (targetCtc <= 0) {
            this.salaryCalcResult = null;
            return;
        }
        var gross = this.reverseCalc(targetCtc, this.salaryCalcData.sheet_type, this.salaryCalcData.has_pf, this.salaryCalcData.has_bonus, this.salaryCalcData.has_gratuity, this.salaryCalcData.has_leave, this.salaryCalcData.has_pf_higher);
        this.salaryCalcData.gross = gross;
        this.salaryCalcResult = this.computeSalary(gross, this.salaryCalcData.sheet_type, this.salaryCalcData.has_pf, this.salaryCalcData.has_bonus, this.salaryCalcData.has_gratuity, this.salaryCalcData.has_leave, this.salaryCalcData.has_pf_higher);
    };
    CandidateListComponent.prototype.reverseCalc = function (targetCtc, sheetType, has_pf, has_bonus, has_gratuity, has_leave, has_pf_higher) {
        if (has_leave === void 0) { has_leave = true; }
        if (has_pf_higher === void 0) { has_pf_higher = false; }
        var low = 1, high = targetCtc, mid = 0;
        for (var i = 0; i < 60; i++) {
            mid = Math.round((low + high) / 2);
            var r = this.computeSalary(mid, sheetType, has_pf, has_bonus, has_gratuity, has_leave, has_pf_higher);
            if (r.total_ctc === targetCtc)
                break;
            if (r.total_ctc < targetCtc)
                low = mid + 1;
            else
                high = mid - 1;
        }
        return mid;
    };
    CandidateListComponent.prototype.computeSalary = function (gross, sheetType, has_pf, has_bonus, has_gratuity, has_leave, has_pf_higher) {
        if (has_leave === void 0) { has_leave = true; }
        if (has_pf_higher === void 0) { has_pf_higher = false; }
        var r = {};
        if (sheetType === 'PLANT HSP' || sheetType === 'KN PLANT') {
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
        if (has_pf) {
            var pfBase = has_pf_higher ? Math.round((gross - r.hra) * 0.12) : 1800;
            r.pf_employee = pfBase;
            r.pf_employer = pfBase;
        }
        else {
            r.pf_employee = 0;
            r.pf_employer = 0;
        }
        r.esi_employee = gross <= 21000 ? Math.floor(gross * 0.0075 + 0.5) : 0;
        r.ptax = gross > 25000 ? 200 : 0;
        r.lwf = 5;
        r.net_payable = gross - r.pf_employee - r.esi_employee - r.ptax - r.lwf;
        r.esi_employer = gross <= 21000 ? Math.floor(gross * 0.0325 + 0.5) : 0;
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
    CandidateListComponent.prototype.exportExcel = function () {
        var _this = this;
        this.isLoading = true;
        var payload = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, this.filter);
        if (this.activeTab == 'Hold' || this.activeTab == 'Rejected' || this.activeTab == 'Withdrawal') {
            payload.tab = this.activeTab;
            delete payload.stage;
        }
        else {
            payload.stage = this.activeTab;
        }
        this.serve.post_rqst(payload, "Hr_Recruitment/exportCandidateExcel").subscribe(function (result) {
            _this.isLoading = false;
            if (result['statusCode'] == 200) {
                window.open(_this.serve.uploadUrl + 'Download_excel/' + result['filename']);
            }
            else {
                _this.toast.errorToastr('Failed to export data.');
            }
        }, function (err) {
            _this.isLoading = false;
        });
    };
    CandidateListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-candidate-list',
            template: __webpack_require__(/*! ./candidate-list.component.html */ "./src/app/hr-recruitment/candidate-list/candidate-list.component.html"),
            styles: [__webpack_require__(/*! ./candidate-list.component.scss */ "./src/app/hr-recruitment/candidate-list/candidate-list.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_services_DatabaseService__WEBPACK_IMPORTED_MODULE_2__["DatabaseService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_4__["ToastrManager"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialog"]])
    ], CandidateListComponent);
    return CandidateListComponent;
}());



/***/ }),

/***/ "./src/app/hr-recruitment/candidate-status-modal/candidate-status-modal.component.html":
/*!*********************************************************************************************!*\
  !*** ./src/app/hr-recruitment/candidate-status-modal/candidate-status-modal.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"edit-modal\">\r\n    <div class=\"modal-header\">\r\n        <p>Update Status - #CAND-{{candidate.id}}</p>\r\n        <button mat-icon-button (click)=\"dialogRef.close()\">\r\n            <i class=\"material-icons\">close</i>\r\n        </button>\r\n    </div>\r\n\r\n    <div mat-dialog-content>\r\n        <div class=\"cs-form\">\r\n            <div class=\"row\">\r\n                <div class=\"col s12\">\r\n                    <p style=\"margin: 0 0 10px; font-size: 13px; color: #666;\">\r\n                        Current Stage: <strong>{{candidate.current_stage}}</strong>\r\n                    </p>\r\n                    <mat-form-field appearance=\"outline\">\r\n                        <mat-label>Status</mat-label>\r\n                        <mat-select name=\"status\" [(ngModel)]=\"data.status\" (selectionChange)=\"onStatusChange()\">\r\n                            <mat-option *ngFor=\"let s of statusList\" [value]=\"s.value\">{{s.label}}</mat-option>\r\n                        </mat-select>\r\n                    </mat-form-field>\r\n                    <p *ngIf=\"data.status == 'PassDirect'\"\r\n                        style=\"margin: 10px 0 5px; font-size: 12px; color: #ff9800; font-weight: 500;\">\r\n                        ⚡ Direct jump to: <strong>Final Select</strong> (skipping Manager Round & Under Process)\r\n                    </p>\r\n                    <p *ngIf=\"data.status == 'Fail'\"\r\n                        style=\"margin: 10px 0 5px; font-size: 12px; color: #f44336; font-weight: 500;\">\r\n                        Will move to: <strong>{{data.stage}}</strong>\r\n                    </p>\r\n                </div>\r\n            </div>\r\n\r\n            <!-- GB Round + Pass: Assign Manager -->\r\n            <div class=\"row mt10\" *ngIf=\"showManagerDropdown\">\r\n                <div class=\"col s12\">\r\n                    <mat-form-field appearance=\"outline\">\r\n                        <mat-label>Assign Manager <span style=\"color: red;\">*</span></mat-label>\r\n                        <mat-select name=\"assigned_manager_id\" [(ngModel)]=\"data.assigned_manager_id\"\r\n                            (selectionChange)=\"onManagerSelect(data.assigned_manager_id)\">\r\n                            <mat-option *ngFor=\"let user of salesUsers\" [value]=\"user.id\">{{user.name}}</mat-option>\r\n                        </mat-select>\r\n                    </mat-form-field>\r\n                    <p *ngIf=\"loadingUsers\" style=\"font-size: 12px; color: #999;\">Loading users...</p>\r\n                </div>\r\n            </div>\r\n\r\n            <!-- Under Process + Pass: Designation, Salary, Base Station, DOC -->\r\n            <ng-container *ngIf=\"showUnderProcessFields\">\r\n                <div class=\"row mt10\">\r\n                    <div class=\"col s12\">\r\n                        <mat-form-field appearance=\"outline\">\r\n                            <mat-label>Designation <span style=\"color: red;\">*</span></mat-label>\r\n                            <input matInput type=\"text\" name=\"final_designation\" [(ngModel)]=\"data.final_designation\"\r\n                                placeholder=\"Enter designation\">\r\n                        </mat-form-field>\r\n                    </div>\r\n                </div>\r\n                <div class=\"row mt10\">\r\n                    <div class=\"col s6\">\r\n                        <mat-form-field appearance=\"outline\">\r\n                            <mat-label>Salary <span style=\"color: red;\">*</span></mat-label>\r\n                            <input matInput type=\"text\" name=\"final_salary\" [(ngModel)]=\"data.final_salary\"\r\n                                placeholder=\"Enter salary\">\r\n                        </mat-form-field>\r\n                    </div>\r\n                    <div class=\"col s6\">\r\n                        <mat-form-field appearance=\"outline\">\r\n                            <mat-label>Base Station <span style=\"color: red;\">*</span></mat-label>\r\n                            <input matInput name=\"final_base_station\" [(ngModel)]=\"data.final_base_station\"\r\n                                placeholder=\"Enter base station\">\r\n                        </mat-form-field>\r\n                    </div>\r\n                </div>\r\n            </ng-container>\r\n\r\n            <!-- Under Negotiation + Pass: Document Upload -->\r\n            <div class=\"row mt10\" *ngIf=\"showNegotiationDocUpload\">\r\n                <div class=\"col s12\">\r\n                    <div style=\"border: 1px solid #ccc; padding: 12px; border-radius: 5px;\">\r\n                        <label style=\"font-size: 13px; color: #555; display: block; margin-bottom: 6px;\">\r\n                            Upload Document (PDF/DOC)\r\n                        </label>\r\n                        <input type=\"file\" (change)=\"onNegotiationFileChange($event)\" accept=\".pdf,.doc,.docx\"\r\n                            style=\"display: block; width: 100%;\">\r\n                        <p *ngIf=\"negotiationFileName\" style=\"font-size: 12px; color: green; margin-top: 6px;\">\r\n                            Selected: <strong>{{negotiationFileName}}</strong>\r\n                        </p>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n            <!-- Under Negotiation + Pass: Offer Letter Sent Date -->\r\n            <div class=\"row mt10\" *ngIf=\"showOfferLetterDate\">\r\n                <div class=\"col s12\">\r\n                    <mat-form-field appearance=\"outline\">\r\n                        <mat-label>Offer Letter Sent Date</mat-label>\r\n                        <input matInput [matDatepicker]=\"offerPicker\" [(ngModel)]=\"data.offer_letter_date\"\r\n                            name=\"offer_letter_date\" placeholder=\"Select date\" readonly>\r\n                        <mat-datepicker-toggle matSuffix [for]=\"offerPicker\"></mat-datepicker-toggle>\r\n                        <mat-datepicker #offerPicker></mat-datepicker>\r\n                    </mat-form-field>\r\n                </div>\r\n            </div>\r\n\r\n            <!-- Letter Sent + Pass: Date of Joining -->\r\n            <div class=\"row mt10\" *ngIf=\"showDateOfJoining\">\r\n                <div class=\"col s12\">\r\n                    <mat-form-field appearance=\"outline\">\r\n                        <mat-label>Date of Joining <span style=\"color:red;\">*</span></mat-label>\r\n                        <input matInput [matDatepicker]=\"joiningPicker\" [(ngModel)]=\"data.date_of_joining\"\r\n                            name=\"date_of_joining\" placeholder=\"Select date\" readonly>\r\n                        <mat-datepicker-toggle matSuffix [for]=\"joiningPicker\"></mat-datepicker-toggle>\r\n                        <mat-datepicker #joiningPicker></mat-datepicker>\r\n                    </mat-form-field>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"row mt10\">\r\n                <div class=\"col s12\">\r\n                    <mat-form-field appearance=\"outline\">\r\n                        <mat-label>Remarks</mat-label>\r\n                        <textarea matInput name=\"remarks\" [(ngModel)]=\"data.remarks\" rows=\"3\"\r\n                            placeholder=\"Enter remarks here...\"></textarea>\r\n                    </mat-form-field>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <div mat-dialog-actions align=\"end\">\r\n        <button mat-stroked-button color=\"warn\" (click)=\"dialogRef.close()\">Cancel</button>\r\n        <button mat-raised-button color=\"primary\" [disabled]=\"savingFlag\" (click)=\"updateStatus()\">\r\n            {{savingFlag ? 'Updating...' : 'Update'}}\r\n        </button>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/hr-recruitment/candidate-status-modal/candidate-status-modal.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/hr-recruitment/candidate-status-modal/candidate-status-modal.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: CandidateStatusModalComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CandidateStatusModalComponent", function() { return CandidateStatusModalComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var src_services_DatabaseService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/_services/DatabaseService */ "./src/_services/DatabaseService.ts");
/* harmony import */ var ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng6-toastr-notifications */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/ng6-toastr-notifications/fesm5/ng6-toastr-notifications.js");





var CandidateStatusModalComponent = /** @class */ (function () {
    function CandidateStatusModalComponent(modelData, dialogRef, serve, toast) {
        this.modelData = modelData;
        this.dialogRef = dialogRef;
        this.serve = serve;
        this.toast = toast;
        this.statusList = [];
        this.stageOrder = ['Pending', 'Screening', 'Suniti Round', 'GB Round', 'Manager Round', 'Under Process', 'Final Select', 'Under Negotiation', 'Letter Sent', 'Joined'];
        this.data = {};
        this.savingFlag = false;
        this.salesUsers = [];
        this.loadingUsers = false;
        this.showManagerDropdown = false;
        this.showUnderProcessFields = false;
        this.showNegotiationDocUpload = false;
        this.showOfferLetterDate = false;
        this.showDateOfJoining = false;
        this.negotiationFile = null;
        this.negotiationFileName = '';
        this.candidate = modelData.candidate;
        this.buildStatusList();
        this.data.status = this.candidate.current_status;
        this.data.stage = this.candidate.current_stage;
        this.onStatusChange();
    }
    CandidateStatusModalComponent.prototype.buildStatusList = function () {
        var nextStage = this.getNextStage(this.candidate.current_stage);
        var passLabel = (nextStage && nextStage !== this.candidate.current_stage) ? nextStage : 'Pass';
        this.statusList = [
            { label: 'Pending', value: 'Pending' },
            { label: passLabel, value: 'Pass' },
            { label: 'Fail', value: 'Fail' },
            { label: 'Hold', value: 'Hold' }
        ];
        if (this.candidate.current_stage === 'GB Round') {
            this.statusList.splice(2, 0, { label: 'Final Select (Direct)', value: 'PassDirect' });
        }
    };
    CandidateStatusModalComponent.prototype.ngOnInit = function () {
    };
    CandidateStatusModalComponent.prototype.getNextStage = function (currentStage) {
        var index = this.stageOrder.indexOf(currentStage);
        if (index !== -1 && index < this.stageOrder.length - 1) {
            return this.stageOrder[index + 1];
        }
        return currentStage;
    };
    CandidateStatusModalComponent.prototype.onStatusChange = function () {
        var isPassDirect = this.data.status === 'PassDirect';
        if (this.data.status === 'Pass') {
            this.data.stage = this.getNextStage(this.candidate.current_stage);
        }
        else if (isPassDirect) {
            this.data.stage = 'Final Select';
        }
        else if (this.data.status === 'Fail') {
            var withdrawalStages = ['Letter Sent', 'Joined'];
            this.data.stage = withdrawalStages.includes(this.candidate.current_stage) ? 'Withdrawal' : 'Rejected';
        }
        else {
            this.data.stage = this.candidate.current_stage;
        }
        // GB Round + Pass (Manager Round) -> manager dropdown
        if (this.candidate.current_stage === 'GB Round' && this.data.status === 'Pass') {
            this.showManagerDropdown = true;
            if (this.salesUsers.length === 0) {
                this.fetchSalesUsers();
            }
        }
        else {
            this.showManagerDropdown = false;
            this.data.assigned_manager_id = '';
            this.data.assigned_manager_name = '';
        }
        // Under Process + Pass OR GB Round + PassDirect -> show final fields
        var needsFinalFields = (this.candidate.current_stage === 'Under Process' && this.data.status === 'Pass') ||
            (this.candidate.current_stage === 'GB Round' && isPassDirect);
        if (needsFinalFields) {
            this.showUnderProcessFields = true;
        }
        else {
            this.showUnderProcessFields = false;
            this.data.final_designation = '';
            this.data.final_salary = '';
            this.data.final_base_station = '';
        }
        // Final Select + Pass -> negotiation doc upload
        if (this.candidate.current_stage === 'Final Select' && this.data.status === 'Pass') {
            this.showNegotiationDocUpload = true;
        }
        else {
            this.showNegotiationDocUpload = false;
            this.negotiationFile = null;
            this.negotiationFileName = '';
        }
        // Under Negotiation + Pass -> offer letter sent date + date of joining
        if (this.candidate.current_stage === 'Under Negotiation' && this.data.status === 'Pass') {
            this.showOfferLetterDate = true;
            this.showDateOfJoining = true;
        }
        else {
            this.showOfferLetterDate = false;
            this.data.offer_letter_date = '';
            // Letter Sent + Pass -> only date of joining
            if (this.candidate.current_stage === 'Letter Sent' && this.data.status === 'Pass') {
                this.showDateOfJoining = true;
            }
            else {
                this.showDateOfJoining = false;
                this.data.date_of_joining = '';
            }
        }
    };
    CandidateStatusModalComponent.prototype.onNegotiationFileChange = function (evt) {
        if (evt.target.files && evt.target.files.length) {
            this.negotiationFile = evt.target.files[0];
            this.negotiationFileName = this.negotiationFile.name;
        }
    };
    CandidateStatusModalComponent.prototype.fetchSalesUsers = function () {
        var _this = this;
        this.loadingUsers = true;
        this.serve.post_rqst({}, "Hr_Recruitment/getSalesUsers").subscribe(function (res) {
            _this.loadingUsers = false;
            if (res['statusCode'] == 200) {
                _this.salesUsers = res['users'] || [];
            }
        }, function (err) {
            _this.loadingUsers = false;
        });
    };
    CandidateStatusModalComponent.prototype.onManagerSelect = function (userId) {
        var user = this.salesUsers.find(function (u) { return u.id == userId; });
        if (user) {
            this.data.assigned_manager_name = user.name;
        }
    };
    CandidateStatusModalComponent.prototype.updateStatus = function () {
        var _this = this;
        var isPassDirect = this.data.status === 'PassDirect';
        // Validate GB Round Pass (Manager Round)
        if (this.candidate.current_stage === 'GB Round' && this.data.status === 'Pass') {
            if (!this.data.assigned_manager_id) {
                this.toast.errorToastr('Please select a manager to assign');
                return;
            }
        }
        // Validate final fields (Under Process Pass OR GB Round PassDirect)
        var needsFinalFields = (this.candidate.current_stage === 'Under Process' && this.data.status === 'Pass') ||
            (this.candidate.current_stage === 'GB Round' && isPassDirect);
        if (needsFinalFields) {
            if (!this.data.final_designation) {
                this.toast.errorToastr('Please enter designation');
                return;
            }
            if (!this.data.final_salary) {
                this.toast.errorToastr('Please enter salary');
                return;
            }
            if (!this.data.final_base_station) {
                this.toast.errorToastr('Please enter base station');
                return;
            }
        }
        // Date of Joining required for Letter Sent -> Joined
        if (this.candidate.current_stage === 'Letter Sent' && this.data.status === 'Pass' && !this.data.date_of_joining) {
            this.toast.errorToastr('Please select Date of Joining');
            return;
        }
        this.savingFlag = true;
        var payload = {
            candidate_id: this.candidate.id,
            status: 'Pass',
            remarks: this.data.remarks
        };
        if (isPassDirect) {
            payload.direct_final_select = true;
        }
        else if (this.data.status !== 'Pass') {
            payload.status = this.data.status;
        }
        if (this.candidate.current_stage === 'GB Round' && this.data.status === 'Pass') {
            payload.assigned_manager_id = this.data.assigned_manager_id;
            payload.assigned_manager_name = this.data.assigned_manager_name;
        }
        if (needsFinalFields) {
            payload.final_designation = this.data.final_designation;
            payload.final_salary = this.data.final_salary;
            payload.final_base_station = this.data.final_base_station;
        }
        if (this.showOfferLetterDate && this.data.offer_letter_date) {
            payload.offer_letter_date = this.data.offer_letter_date;
        }
        if (this.showDateOfJoining && this.data.date_of_joining) {
            payload.date_of_joining = this.data.date_of_joining;
        }
        this.serve.post_rqst(payload, "Hr_Recruitment/updateCandidateStageStatus").subscribe(function (res) {
            _this.savingFlag = false;
            if (res['statusCode'] == 200) {
                // Under Negotiation Pass + file selected -> upload doc
                if (_this.candidate.current_stage == 'Final Select' && _this.data.status == 'Pass' && _this.negotiationFile) {
                    var formData = new FormData();
                    formData.append('negotiation_doc', _this.negotiationFile, _this.negotiationFile.name);
                    formData.append('id', _this.candidate.id);
                    _this.serve.FileData(formData, "Hr_Recruitment/uploadNegotiationDoc").subscribe(function (res2) {
                        _this.toast.successToastr(res['statusMsg']);
                        _this.dialogRef.close(true);
                    }, function (err) {
                        _this.toast.successToastr(res['statusMsg']);
                        _this.dialogRef.close(true);
                    });
                }
                else {
                    _this.toast.successToastr(res['statusMsg']);
                    _this.dialogRef.close(true);
                }
            }
            else {
                _this.toast.errorToastr(res['statusMsg']);
            }
        }, function (err) {
            _this.savingFlag = false;
            _this.toast.errorToastr('Something went wrong');
        });
    };
    CandidateStatusModalComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-candidate-status-modal',
            template: __webpack_require__(/*! ./candidate-status-modal.component.html */ "./src/app/hr-recruitment/candidate-status-modal/candidate-status-modal.component.html"),
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object, _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialogRef"],
            src_services_DatabaseService__WEBPACK_IMPORTED_MODULE_3__["DatabaseService"],
            ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_4__["ToastrManager"]])
    ], CandidateStatusModalComponent);
    return CandidateStatusModalComponent;
}());



/***/ }),

/***/ "./src/app/hr-recruitment/hr-recruitment-routing.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/hr-recruitment/hr-recruitment-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: HrRecruitmentRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HrRecruitmentRoutingModule", function() { return HrRecruitmentRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _candidate_list_candidate_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./candidate-list/candidate-list.component */ "./src/app/hr-recruitment/candidate-list/candidate-list.component.ts");
/* harmony import */ var _candidate_add_candidate_add_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./candidate-add/candidate-add.component */ "./src/app/hr-recruitment/candidate-add/candidate-add.component.ts");
/* harmony import */ var _candidate_detail_candidate_detail_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./candidate-detail/candidate-detail.component */ "./src/app/hr-recruitment/candidate-detail/candidate-detail.component.ts");
/* harmony import */ var _auth_component_guard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../auth-component.guard */ "./src/app/auth-component.guard.ts");







var routes = [
    { path: '', component: _candidate_list_candidate_list_component__WEBPACK_IMPORTED_MODULE_3__["CandidateListComponent"], canActivate: [_auth_component_guard__WEBPACK_IMPORTED_MODULE_6__["AuthComponentGuard"]], data: { expectedRole: ['1'] } },
    { path: 'add', component: _candidate_add_candidate_add_component__WEBPACK_IMPORTED_MODULE_4__["CandidateAddComponent"], canActivate: [_auth_component_guard__WEBPACK_IMPORTED_MODULE_6__["AuthComponentGuard"]], data: { expectedRole: ['1'] } },
    { path: 'add/:id/edit', component: _candidate_add_candidate_add_component__WEBPACK_IMPORTED_MODULE_4__["CandidateAddComponent"], canActivate: [_auth_component_guard__WEBPACK_IMPORTED_MODULE_6__["AuthComponentGuard"]], data: { expectedRole: ['1'] } },
    { path: 'detail/:id', component: _candidate_detail_candidate_detail_component__WEBPACK_IMPORTED_MODULE_5__["CandidateDetailComponent"], canActivate: [_auth_component_guard__WEBPACK_IMPORTED_MODULE_6__["AuthComponentGuard"]], data: { expectedRole: ['1'] } }
];
var HrRecruitmentRoutingModule = /** @class */ (function () {
    function HrRecruitmentRoutingModule() {
    }
    HrRecruitmentRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], HrRecruitmentRoutingModule);
    return HrRecruitmentRoutingModule;
}());



/***/ }),

/***/ "./src/app/hr-recruitment/hr-recruitment.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/hr-recruitment/hr-recruitment.module.ts ***!
  \*********************************************************/
/*! exports provided: HrRecruitmentModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HrRecruitmentModule", function() { return HrRecruitmentModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _hr_recruitment_routing_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./hr-recruitment-routing.module */ "./src/app/hr-recruitment/hr-recruitment-routing.module.ts");
/* harmony import */ var _candidate_list_candidate_list_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./candidate-list/candidate-list.component */ "./src/app/hr-recruitment/candidate-list/candidate-list.component.ts");
/* harmony import */ var _candidate_add_candidate_add_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./candidate-add/candidate-add.component */ "./src/app/hr-recruitment/candidate-add/candidate-add.component.ts");
/* harmony import */ var _candidate_detail_candidate_detail_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./candidate-detail/candidate-detail.component */ "./src/app/hr-recruitment/candidate-detail/candidate-detail.component.ts");
/* harmony import */ var _material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../material */ "./src/app/material.ts");
/* harmony import */ var _app_utility_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../app-utility.module */ "./src/app/app-utility.module.ts");
/* harmony import */ var _candidate_status_modal_candidate_status_modal_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./candidate-status-modal/candidate-status-modal.component */ "./src/app/hr-recruitment/candidate-status-modal/candidate-status-modal.component.ts");
/* harmony import */ var _inr_pipe__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./inr.pipe */ "./src/app/hr-recruitment/inr.pipe.ts");












var HrRecruitmentModule = /** @class */ (function () {
    function HrRecruitmentModule() {
    }
    HrRecruitmentModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _candidate_list_candidate_list_component__WEBPACK_IMPORTED_MODULE_5__["CandidateListComponent"],
                _candidate_add_candidate_add_component__WEBPACK_IMPORTED_MODULE_6__["CandidateAddComponent"],
                _candidate_detail_candidate_detail_component__WEBPACK_IMPORTED_MODULE_7__["CandidateDetailComponent"],
                _candidate_status_modal_candidate_status_modal_component__WEBPACK_IMPORTED_MODULE_10__["CandidateStatusModalComponent"],
                _inr_pipe__WEBPACK_IMPORTED_MODULE_11__["InrPipe"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _hr_recruitment_routing_module__WEBPACK_IMPORTED_MODULE_4__["HrRecruitmentRoutingModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                _material__WEBPACK_IMPORTED_MODULE_8__["MaterialModule"],
                _app_utility_module__WEBPACK_IMPORTED_MODULE_9__["AppUtilityModule"]
            ],
            entryComponents: [
                _candidate_status_modal_candidate_status_modal_component__WEBPACK_IMPORTED_MODULE_10__["CandidateStatusModalComponent"]
            ]
        })
    ], HrRecruitmentModule);
    return HrRecruitmentModule;
}());



/***/ }),

/***/ "./src/app/hr-recruitment/inr.pipe.ts":
/*!********************************************!*\
  !*** ./src/app/hr-recruitment/inr.pipe.ts ***!
  \********************************************/
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



/***/ })

}]);