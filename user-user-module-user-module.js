(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["user-user-module-user-module"],{

/***/ "./src/app/user/edit-user/edit-user.component.html":
/*!*********************************************************!*\
  !*** ./src/app/user/edit-user/edit-user.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-container\">\r\n  <app-loader *ngIf=\"loader\"></app-loader>\r\n  <div class=\"tools-container\">\r\n    <a mat-icon-button matTooltip=\"Back\" (click)=\"back()\">\r\n      <i class=\"material-icons\">arrow_back</i>\r\n    </a>\r\n    <h2>Edit User</h2>\r\n  </div>\r\n\r\n  <div class=\"container pt10 pl10 pr10 pb50\">\r\n    <form name=\"detail\" #f=\"ngForm\" (ngSubmit)=\" f.valid && submitDetail()\">\r\n      <div class=\"row\">\r\n        <div class=\"col s12\">\r\n          <div class=\"card pb0\">\r\n            <div class=\"card-head\">\r\n              <h2>User Type</h2>\r\n            </div>\r\n            <div class=\"card-body cs-form\">\r\n              <div class=\"row\">\r\n                <div class=\"col s12 m6 l6\">\r\n                  <mat-radio-group class=\"example-section\" id=\"user_type\" name=\"user_type\" [(ngModel)]=\"data.user_type\"\r\n                    [disabled]=\"data.id\">\r\n                    <mat-radio-button class=\"wp30\" color=\"primary\" (change)=\"get_sales_user_type('', $event)\"\r\n                      value=\"Sales User\">\r\n                      Sales User\r\n                    </mat-radio-button>\r\n                    <mat-radio-button class=\"wp30\" color=\"primary\" (change)=\"get_sales_user_type('', $event)\"\r\n                      value=\"System User\">\r\n                      System User\r\n                    </mat-radio-button>\r\n\r\n                  </mat-radio-group>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"card-head mt16\">\r\n              <h2>Basic Information</h2>\r\n            </div>\r\n            <div class=\"card-body cs-form\">\r\n              <div class=\"row\">\r\n                <div class=\"col s12 m3 l3\" *ngIf=\"data.user_type != 'Service Engineer'\">\r\n\r\n                  <div class=\"wp100\">\r\n                    <mat-form-field appearance=\"outline\">\r\n                      <mat-label>Select Designation</mat-label>\r\n                      <mat-select name=\"role_id\" placeholder=\"Role\" [(ngModel)]=\"data.role_id\" #role_id=\"ngModel\"\r\n                        (selectionChange)=\"findId(data.role_id)\" required>\r\n                        <mat-option value=\"\" disabled>Select Role</mat-option>\r\n                        <mat-option *ngFor=\"let row of sales_type\" value=\"{{row.id}}\">{{row.role_name}}</mat-option>\r\n                      </mat-select>\r\n                    </mat-form-field>\r\n\r\n                    <div class=\"alert alert-danger\" *ngIf=\"role_id.touched || f.submitted\">\r\n                      <p *ngIf=\"role_id.errors?.required\">This field is required</p>\r\n                    </div>\r\n                  </div>\r\n\r\n                  <!-- Plant dropdown — visible for designation 52 (Guard) and 57 -->\r\n                  <div class=\"col s12 m3 l3\" *ngIf=\"data.role_id == '52' || data.role_id == '57'\">\r\n                    <mat-form-field appearance=\"outline\">\r\n                      <mat-label>Plant</mat-label>\r\n                      <mat-select name=\"plant\" [(ngModel)]=\"data.plant\" #plant_field=\"ngModel\"\r\n                        [required]=\"data.role_id == '52' || data.role_id == '57'\">\r\n                        <mat-option value=\"\">-- Select Plant --</mat-option>\r\n                        <mat-option value=\"Hosiarpur\">Hosiarpur</mat-option>\r\n                        <mat-option value=\"Chamarajanagar\">Chamarajanagar</mat-option>\r\n                      </mat-select>\r\n                    </mat-form-field>\r\n                    <div class=\"alert alert-danger\" *ngIf=\"plant_field.touched || f.submitted\">\r\n                      <p *ngIf=\"plant_field.errors?.required\">Plant is required</p>\r\n                    </div>\r\n                  </div>\r\n\r\n                </div>\r\n                <div class=\"col s12 m3 l3\">\r\n                  <mat-form-field appearance=\"outline\" [ngClass]=\"{'has-error' : name.invalid } \">\r\n                    <mat-label>Name</mat-label>\r\n                    <input matInput placeholder=\"Type Here ...\" name=\"name\" #name=\"ngModel\" [(ngModel)]=\"data.name\"\r\n                      [ngClass]=\"{'has-error' : name.invalid } \" required>\r\n                  </mat-form-field>\r\n                  <div class=\"alert alert-danger\" *ngIf=\"name.touched || f.submitted\">\r\n                    <p *ngIf=\"name.errors?.required\">This field is required</p>\r\n                  </div>\r\n                </div>\r\n                <div class=\"col s12 m3 l3\">\r\n                  <mat-form-field appearance=\"outline\" [ngClass]=\"{'has-error' : exist == true } \">\r\n                    <mat-label>Mobile No</mat-label>\r\n                    <input matInput placeholder=\"Type Here ...\" name=\"contact_01\" #contact_01=\"ngModel\"\r\n                      [(ngModel)]=\"data.contact_01\" minlength=\"10\" maxlength=\"10\" (keypress)=\"MobileNumber($event)\"\r\n                      (input)=\"check_number()\" pattern=\"^[6-9][0-9]{0,9}$\" required>\r\n                  </mat-form-field>\r\n\r\n                  <div class=\"alert alert-danger\" *ngIf=\"contact_01.touched || f.submitted\">\r\n                    <p *ngIf=\"contact_01.errors?.required\">This field is required</p>\r\n                    <p *ngIf=\"contact_01.errors?.pattern\">Invalid Mobile Number</p>\r\n                    <p\r\n                      *ngIf=\"!contact_01.errors?.pattern  && (contact_01.errors?.maxlength || contact_01.errors?.minlength)\">\r\n                      Mobile\r\n                      No should be of 10 digits..\r\n                    </p>\r\n                  </div>\r\n                  <div class=\"alert alert-danger\" *ngIf=\"exist\">\r\n                    Mobile no. already Exists.\r\n                  </div>\r\n                </div>\r\n                <div class=\"col s12 m3 l3\">\r\n                  <mat-form-field appearance=\"outline\" [ngClass]=\"{'has-error' : exist == true } \">\r\n                    <mat-label>Official Mobile No</mat-label>\r\n                    <input matInput placeholder=\"Type Here ...\" name=\"offmobileno\" #offmobileno=\"ngModel\"\r\n                      [(ngModel)]=\"data.offmobileno\" minlength=\"10\" maxlength=\"10\" min=\"0\"\r\n                      (keypress)=\"MobileNumber($event)\" (input)=\"check_number()\" pattern=\"^[6-9][0-9]{0,9}$\">\r\n                  </mat-form-field>\r\n\r\n                  <div class=\"alert alert-danger\" *ngIf=\"offmobileno.touched || f.submitted\">\r\n                    <p *ngIf=\"offmobileno.errors?.required\">This field is required</p>\r\n                    <p *ngIf=\"offmobileno.errors?.pattern\">Invalid Mobile Number</p>\r\n                    <p\r\n                      *ngIf=\"!offmobileno.errors?.pattern  && (offmobileno.errors?.maxlength || offmobileno.errors?.minlength)\">\r\n                      Mobile\r\n                      No should be of 10 digits..\r\n                    </p>\r\n                  </div>\r\n\r\n\r\n                  <div class=\"alert alert-danger\" *ngIf=\"exist\">\r\n                    Mobile no. already Exists.\r\n                  </div>\r\n                </div>\r\n\r\n                <div class=\"col s12 m3 l3\" *ngIf=\"data.user_type == 'Service Engineer'\">\r\n                  <mat-form-field appearance=\"outline\">\r\n                    <mat-label> Paytm No.</mat-label>\r\n                    <input matInput placeholder=\"Type Here ...\" name=\"paytm_mobileno\" #paytm_mobileno=\"ngModel\"\r\n                      [(ngModel)]=\"data.paytm_mobileno\" minlength=\"10\" maxlength=\"10\" min=\"0\"\r\n                      (keypress)=\"paytmMobileNumber($event)\" [ngClass]=\"{'has-error' : paytm_mobileno.invalid } \"\r\n                      required>\r\n                  </mat-form-field>\r\n\r\n                  <div class=\"alert alert-danger\" *ngIf=\"paytm_mobileno.touched || f.submitted\">\r\n                    <p *ngIf=\"paytm_mobileno.errors?.required\">This field is required</p>\r\n                    <p *ngIf=\"paytm_mobileno.errors?.maxlength || paytm_mobileno.errors?.minlength\">paytm Mobile No.\r\n                      should be of 10 digits..</p>\r\n                  </div>\r\n                </div>\r\n\r\n                <div class=\"col s12 m3 l3\">\r\n                  <mat-form-field appearance=\"outline\">\r\n                    <mat-label>Official Email ID</mat-label>\r\n                    <input matInput placeholder=\"Type Here ...\" type=\"email\" name=\"email\" #email=\"ngModel\"\r\n                      [(ngModel)]=\"data.email\" pattern=\"[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$\">\r\n                  </mat-form-field>\r\n                  <div class=\"alert alert-danger\" *ngIf=\"email.touched || f.submitted\">\r\n                    <p *ngIf=\"email.errors?.pattern\">This is not a valid Email ID !</p>\r\n                  </div>\r\n                </div>\r\n                <div class=\"col s12 m3 l3\">\r\n                  <mat-form-field appearance=\"outline\">\r\n                    <mat-label>Email ID</mat-label>\r\n                    <input matInput placeholder=\"Type Here ...\" type=\"email\" name=\"PersonalEmail\"\r\n                      #PersonalEmail=\"ngModel\" [(ngModel)]=\"data.PersonalEmail\"\r\n                      pattern=\"[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$\">\r\n                  </mat-form-field>\r\n                  <div class=\"alert alert-danger\" *ngIf=\"PersonalEmail.touched || f.submitted\">\r\n                    <p *ngIf=\"PersonalEmail.errors?.pattern\">This is not a valid Email ID !</p>\r\n                  </div>\r\n                </div>\r\n                <div class=\"col s12 m3 l3\">\r\n                  <mat-form-field appearance=\"outline\">\r\n                    <mat-label>D.O.B</mat-label>\r\n                    <input name=\"dob\" matInput placeholder=\"\" #dob=\"ngModel\" [(ngModel)]=\"data.dob\" [max]=\"maxDate\"\r\n                      [matDatepicker]=\"picker\" disabled>\r\n                    <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\r\n                    <mat-datepicker #picker disabled=\"false\"></mat-datepicker>\r\n                  </mat-form-field>\r\n                </div>\r\n\r\n                <div class=\"col s12 m3 l3\">\r\n                  <mat-form-field class=\"cs-input\" appearance=\"outline\">\r\n                    <mat-label>D.O.A</mat-label>\r\n                    <input name=\"D.O.A\" matInput [matDatepicker]=\"pickers\" placeholder=\"\" #doa=\"ngModel\" [max]=\"maxDate\"\r\n                      [(ngModel)]=\"data.doa\" disabled>\r\n                    <mat-datepicker-toggle matSuffix [for]=\"pickers\"></mat-datepicker-toggle>\r\n                    <mat-datepicker #pickers disabled=\"false\"></mat-datepicker>\r\n                  </mat-form-field>\r\n                </div>\r\n              </div>\r\n\r\n              <div class=\"row\" *ngIf=\"data.user_type != 'Service Engineer'\">\r\n                <div class=\"col s12 m3 l3\">\r\n                  <mat-form-field appearance=\"outline\" [ngClass]=\"{'has-error' : employee_id.invalid } \">\r\n                    <mat-label>Employee Code</mat-label>\r\n                    <input matInput placeholder=\"Type Here ...\" name=\"employee_id\" #employee_id=\"ngModel\"\r\n                      [(ngModel)]=\"data.employee_id\" [ngClass]=\"{'has-error' : employee_id.invalid } \" required>\r\n                  </mat-form-field>\r\n                  <div class=\"alert alert-danger\" *ngIf=\"employee_id.touched || f.submitted\">\r\n                    <p *ngIf=\"employee_id.errors?.required\">This field is required</p>\r\n                  </div>\r\n                </div>\r\n                <div class=\"col s12 m3 l3\">\r\n                  <mat-form-field appearance=\"outline\">\r\n                    <mat-label>Date of joining</mat-label>\r\n                    <input name=\"D.O.J\" matInput [matDatepicker]=\"pickers\" placeholder=\"\" [max]=\"maxDate\"\r\n                      #date_of_joining=\"ngModel\" readonly [(ngModel)]=\"data.date_of_joining\">\r\n                    <mat-datepicker-toggle matSuffix [for]=\"pickers\"></mat-datepicker-toggle>\r\n                    <mat-datepicker #pickers></mat-datepicker>\r\n                  </mat-form-field>\r\n                </div>\r\n\r\n                <div class=\"col s12 m3 l3\">\r\n                  <mat-form-field appearance=\"outline\">\r\n                    <mat-label>Weekly Off</mat-label>\r\n                    <mat-select name=\"weekly_off\" #weekly_off=\"ngModel\" [(ngModel)]=\"data.weekly_off\">\r\n                      <mat-option disabled=\"\">Select Week</mat-option>\r\n                      <mat-option value=\"Monday\">Monday</mat-option>\r\n                      <mat-option value=\"Tuesday\">Tuesday</mat-option>\r\n                      <mat-option value=\"Wednesday\">Wednesday</mat-option>\r\n                      <mat-option value=\"Thursday\">Thursday</mat-option>\r\n                      <mat-option value=\"Friday\">Friday</mat-option>\r\n                      <mat-option value=\"Saturday\">Saturday</mat-option>\r\n                      <mat-option value=\"Sunday\">Sunday</mat-option>\r\n                    </mat-select>\r\n                  </mat-form-field>\r\n                </div>\r\n\r\n                <div class=\"col s12 m3 l3\" *ngIf=\"data.user_type == 'Sales User'\">\r\n                  <mat-form-field appearance=\"outline\">\r\n                    <mat-label>Reporting Manager</mat-label>\r\n                    <mat-select name=\"rsm_id\" #rsm_id=\"ngModel\" [(ngModel)]=\"data.rsm_id\">\r\n                      <mat-option>\r\n                        <ngx-mat-select-search noEntriesFoundLabel=\"'no data found'\" placeholderLabel=\"Search..\"\r\n                          (keyup)=\"getReportManager($event.target.value)\"></ngx-mat-select-search>\r\n                      </mat-option>\r\n                      <mat-option *ngFor=\"let list of report_manager;let index=index\" value=\"{{list.id}}\">\r\n                        {{list.name}} - {{list.role_name}}\r\n                      </mat-option>\r\n                    </mat-select>\r\n                  </mat-form-field>\r\n\r\n                </div>\r\n                <!-- <div class=\"col s12 m3 l3\" *ngIf=\"data.user_type != 'Sales User'\">\r\n                  <mat-form-field appearance=\"outline\">\r\n                    <mat-label>Assign Users</mat-label>\r\n                    <mat-select name=\"assign_system_user\" #assign_system_user=\"ngModel\" multiple\r\n                      [(ngModel)]=\"data.assign_system_user\" required>\r\n                      <mat-option>\r\n                        <ngx-mat-select-search noEntriesFoundLabel=\"'no data found'\" placeholderLabel=\"Search..\"\r\n                          (keyup)=\"getReportManager($event.target.value)\"></ngx-mat-select-search>\r\n                      </mat-option>\r\n                      <mat-option *ngFor=\"let list of report_manager;let index=index\" value=\"{{list.id}}\">\r\n                        {{list.name}} - {{list.role_name}}\r\n                      </mat-option>\r\n                    </mat-select>\r\n                  </mat-form-field>\r\n                  <div class=\"alert alert-danger\" *ngIf=\"assign_system_user.touched || f.submitted\">\r\n                    <p *ngIf=\"assign_system_user.errors?.required\">This field is required</p>\r\n                  </div>\r\n                </div> -->\r\n\r\n                <div class=\"col s12 m3 l3\" *ngIf=\"data.user_type == 'Sales User'\">\r\n                  <mat-form-field appearance=\"outline\">\r\n                    <mat-label>Division</mat-label>\r\n                    <mat-select name=\"working_division\" #working_division=\"ngModel\" multiple\r\n                      [(ngModel)]=\"data.working_division\" required>\r\n                      <mat-option disabled=\"\">Select division</mat-option>\r\n                      <mat-option *ngFor=\"let row of division_list\" value=\"{{row.division_name}}\">\r\n                        {{row.division_name}}\r\n                      </mat-option>\r\n                    </mat-select>\r\n                  </mat-form-field>\r\n\r\n                  <div class=\"alert alert-danger\" *ngIf=\"working_division.touched || f.submitted\">\r\n                    <p *ngIf=\"working_division.errors?.required\">This field is required</p>\r\n                  </div>\r\n\r\n\r\n\r\n                </div>\r\n                <div class=\"col s12 m3 l3\" *ngIf=\"data.user_type == 'Sales User'\">\r\n                  <mat-form-field appearance=\"outline\" [ngClass]=\"{'has-error' : baseStation.invalid } \">\r\n                    <mat-label>Base Station</mat-label>\r\n                    <input matInput placeholder=\"Type Here ...\" name=\"baseStation\" #baseStation=\"ngModel\"\r\n                      [(ngModel)]=\"data.baseStation\" [ngClass]=\"{'has-error' : baseStation.invalid } \">\r\n                  </mat-form-field>\r\n\r\n                </div>\r\n                <div class=\"col s12 m3 l3\" *ngIf=\"data.user_type == 'Sales User'\">\r\n                  <mat-form-field appearance=\"outline\">\r\n                    <mat-label>Purchase Rights</mat-label>\r\n                    <mat-select name=\"purchase_right\" #purchase_right=\"ngModel\" [(ngModel)]=\"data.purchase_right\"\r\n                      required>\r\n                      <mat-option value=\"Yes\">Yes</mat-option>\r\n                      <mat-option value=\"No\">No</mat-option>\r\n\r\n\r\n                    </mat-select>\r\n                  </mat-form-field>\r\n\r\n                  <div class=\"alert alert-danger\" *ngIf=\"purchase_right.touched || f.submitted\">\r\n                    <p *ngIf=\"purchase_right.errors?.required\">This field is required</p>\r\n                  </div>\r\n\r\n                </div>\r\n\r\n                <div class=\"col s12 m3 l3\" *ngIf=\"data.user_type == 'Sales User'\">\r\n                  <mat-form-field appearance=\"outline\">\r\n                    <mat-label>Petrol Tracking Need</mat-label>\r\n                    <mat-select name=\"petrol_tracking\" #petrol_tracking=\"ngModel\" [(ngModel)]=\"data.petrol_tracking\"\r\n                      required>\r\n                      <mat-option value=\"Yes\">Yes</mat-option>\r\n                      <mat-option value=\"No\">No</mat-option>\r\n                    </mat-select>\r\n                  </mat-form-field>\r\n\r\n                  <div class=\"alert alert-danger\" *ngIf=\"petrol_tracking.touched || f.submitted\">\r\n                    <p *ngIf=\"petrol_tracking.errors?.required\">This field is required</p>\r\n                  </div>\r\n\r\n                </div>\r\n\r\n                <div class=\"col s12 m3 l3\" *ngIf=\"data.user_type == 'Sales User'\">\r\n                  <mat-form-field appearance=\"outline\">\r\n                    <mat-label>Guard Tracking Need</mat-label>\r\n                    <mat-select name=\"guard_tracking\" #guard_tracking=\"ngModel\" [(ngModel)]=\"data.guard_tracking\"\r\n                      required>\r\n                      <mat-option value=\"Yes\">Yes</mat-option>\r\n                      <mat-option value=\"No\">No</mat-option>\r\n                    </mat-select>\r\n                  </mat-form-field>\r\n\r\n                  <div class=\"alert alert-danger\" *ngIf=\"guard_tracking.touched || f.submitted\">\r\n                    <p *ngIf=\"guard_tracking.errors?.required\">This field is required</p>\r\n                  </div>\r\n\r\n                </div>\r\n\r\n                <div class=\"col s12 m3 l3\" *ngIf=\"data.user_type == 'Sales User'\">\r\n                  <mat-form-field appearance=\"outline\">\r\n                    <mat-label>HR Recruitment Need</mat-label>\r\n                    <mat-select name=\"hr_recruitment\" #hr_recruitment=\"ngModel\" [(ngModel)]=\"data.hr_recruitment\"\r\n                      required>\r\n                      <mat-option value=\"Yes\">Yes</mat-option>\r\n                      <mat-option value=\"No\">No</mat-option>\r\n                    </mat-select>\r\n                  </mat-form-field>\r\n\r\n                  <div class=\"alert alert-danger\" *ngIf=\"hr_recruitment.touched || f.submitted\">\r\n                    <p *ngIf=\"hr_recruitment.errors?.required\">This field is required</p>\r\n                  </div>\r\n\r\n                </div>\r\n              </div>\r\n              <!-- <div class=\"row\" *ngIf=\"data.user_type == 'Sales User'\"> -->\r\n\r\n              <div class=\"row\" *ngIf=\"data.user_type == 'Sales User'\">\r\n                <!-- <div class=\"col s12 m3 l3\">\r\n                  <mat-form-field appearance=\"outline\">\r\n                    <mat-label>Assign Brands</mat-label>\r\n                    <mat-select name=\"brand\" [(ngModel)]=\"data.brand\" #brand=\"ngModel\" multiple>\r\n                      <mat-option *ngFor=\"let row of brandList\"\r\n                        value=\"{{row.brand_code}}\">{{row.display_name}}</mat-option>\r\n                    </mat-select>\r\n                  </mat-form-field>\r\n                  <div class=\"alert alert-danger\" *ngIf=\"f.submitted && brand?.invalid \">\r\n                    This field is required\r\n                  </div>\r\n                </div>\r\n                <div class=\"col s12 m3 l3\">\r\n                  <mat-form-field appearance=\"outline\">\r\n                    <mat-label>Order Type</mat-label>\r\n                    <mat-select name=\"order_type\" [(ngModel)]=\"data.order_type\" #order_type=\"ngModel\">\r\n                      <mat-option value=\"Primary\">Primary</mat-option>\r\n                      <mat-option value=\"Secondary\">Secondary</mat-option>\r\n                      <mat-option value=\"Both\">Both</mat-option>\r\n                    </mat-select>\r\n                  </mat-form-field>\r\n                  <div class=\"alert alert-danger\" *ngIf=\"f.submitted && order_type?.invalid \">\r\n                    This field is required\r\n                  </div>\r\n                </div> -->\r\n\r\n                <!-- <div class=\"col s12 m3 l3\">\r\n                  <mat-form-field appearance=\"outline\">\r\n                    <mat-label>Working State</mat-label>\r\n                    <mat-select name=\"working_state\" #working_state=\"ngModel\" [(ngModel)]=\"data.working_state\" multiple>\r\n                      <mat-option disabled=\"\">Select Working State</mat-option>\r\n                      <mat-option *ngFor=\"let row of states\" value=\"{{row.state_name}}\">\r\n                        {{row.state_name}}\r\n                      </mat-option>\r\n                    </mat-select>\r\n                  </mat-form-field>\r\n\r\n\r\n                </div> -->\r\n\r\n              </div>\r\n\r\n              <div class=\"row mb0\">\r\n                <div class=\"col s12 m6 l6\">\r\n                  <div class=\"row\">\r\n                    <div class=\"col s12 m6 l6\">\r\n                      <mat-form-field appearance=\"outline\">\r\n                        <mat-label>State</mat-label>\r\n                        <mat-select name=\"state\" #state=\"ngModel\" [(ngModel)]=\"data.state\"\r\n                          (selectionChange)=\"getDistrict(1)\">\r\n                          <mat-option>\r\n                            <ngx-mat-select-search noEntriesFoundLabel=\"'no data found'\" placeholderLabel=\"Search..\"\r\n                              (keyup)=\"filterStates($event.target.value)\"></ngx-mat-select-search>\r\n                          </mat-option>\r\n                          <mat-option *ngFor=\"let row of filteredStates\" [value]=\"row.state_name\">\r\n                            {{ row.state_name }}\r\n                          </mat-option>\r\n                        </mat-select>\r\n                      </mat-form-field>\r\n\r\n                      <div class=\"alert alert-danger\" *ngIf=\"state.touched || f.submitted\">\r\n                        <p *ngIf=\"state.errors?.required\">This field is required</p>\r\n                      </div>\r\n                    </div>\r\n\r\n                    <div class=\"col s12 m6 l6\">\r\n                      <mat-form-field appearance=\"outline\">\r\n                        <mat-label>District</mat-label>\r\n                        <mat-select name=\"district\" #district=\"ngModel\" (selectionChange)=\"getCity(1)\"\r\n                          [(ngModel)]=\"data.district\">\r\n                          <mat-option>\r\n                            <ngx-mat-select-search noEntriesFoundLabel=\"'no data found'\" placeholderLabel=\"Search..\"\r\n                              (keyup)=\"filterDistrict($event.target.value)\"></ngx-mat-select-search>\r\n                          </mat-option>\r\n                          <mat-option *ngFor=\"let row of filteredDistrict\" value=\"{{row.district_name}}\">\r\n                            {{row.district_name}}\r\n                          </mat-option>\r\n                        </mat-select>\r\n                      </mat-form-field>\r\n                      <div class=\"alert alert-danger\" *ngIf=\"district.touched || f.submitted\">\r\n                        <p *ngIf=\"district.errors?.required\">This field is required</p>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"row\">\r\n                    <!-- <div class=\"col s12 m6 l6\">\r\n                      <mat-form-field appearance=\"outline\">\r\n                        <mat-label>City</mat-label>\r\n                        <input matInput placeholder=\"Type here...\" name=\"city\" #city=\"ngModel\" [(ngModel)]=\"data.city\">\r\n                      </mat-form-field>\r\n                    </div> -->\r\n                    <div class=\" col s12 m6 l6\">\r\n                      <mat-form-field appearance=\"outline\">\r\n                        <mat-label>City</mat-label>\r\n                        <mat-select name=\"city\" #city=\"ngModel\" [(ngModel)]=\"data.city\" required>\r\n                          <mat-option>\r\n                            <ngx-mat-select-search noEntriesFoundLabel=\"'no data found'\" placeholderLabel=\"Search..\"\r\n                              (keyup)=\"filterCity($event.target.value)\"></ngx-mat-select-search>\r\n                          </mat-option>\r\n                          <mat-option *ngFor=\"let row of filteredCity\" value=\"{{row.city}}\">\r\n                            {{row.city}}\r\n                          </mat-option>\r\n                        </mat-select>\r\n\r\n                      </mat-form-field>\r\n                      <div class=\"alert alert-danger\" *ngIf=\"city.touched || f.submitted\">\r\n                        <p *ngIf=\"city.errors?.required\">This field is required</p>\r\n                      </div>\r\n                    </div>\r\n\r\n                    <div class=\"col s12 m6 l6\">\r\n                      <mat-form-field appearance=\"outline\">\r\n                        <mat-label>Pincode</mat-label>\r\n                        <input matInput name=\"pincode\" placeholder=\"Type Here ...\" #pincode=\"ngModel\" maxlength=\"6\"\r\n                          [(ngModel)]=\"data.pincode\"\r\n                          (ngModelChange)=\"data.pincode ? processPincode(data.pincode) : null\">\r\n                      </mat-form-field>\r\n                      <div class=\"alert alert-danger\" *ngIf=\"pincode.touched || f.submitted\">\r\n                        <p *ngIf=\"pincode.errors?.required\">This field is required</p>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <div class=\"col s12 m6 l6\">\r\n                  <mat-form-field appearance=\"outline\">\r\n                    <mat-label>Address</mat-label>\r\n                    <textarea matInput placeholder=\"Type Here ...\" name=\"address\" #address=\"ngModel\"\r\n                      [(ngModel)]=\"data.address\" class=\"h80\"></textarea>\r\n                  </mat-form-field>\r\n                  <div class=\"alert alert-danger\" *ngIf=\"address.touched || f.submitted\">\r\n                    <p *ngIf=\"address.errors?.required\">This field is required</p>\r\n                  </div>\r\n                </div>\r\n\r\n              </div>\r\n              <div class=\"row\">\r\n                <div class=\"col s12 m3 l3\">\r\n                  <mat-form-field appearance=\"outline\">\r\n                    <mat-label>Working State</mat-label>\r\n                    <mat-select name=\"working_state\" #working_state=\"ngModel\" [(ngModel)]=\"data.working_state\" multiple\r\n                      [required]=\"data.user_type == 'Sales User'\" (selectionChange)=\"getDistrict1(1)\">\r\n                      <mat-option>\r\n                        <ngx-mat-select-search noEntriesFoundLabel=\"'no data found'\" placeholderLabel=\"Search..\"\r\n                          (keyup)=\"filterStates1($event.target.value)\"></ngx-mat-select-search>\r\n                      </mat-option>\r\n                      <div class=\"pl16\" *ngIf=\"filteredStates1.length > 0\">\r\n                        <mat-checkbox [(ngModel)]=\"data.allStates\" (change)=\"allStates('allStates')\" name=\"allStates\"\r\n                          value=\"true\">Select All</mat-checkbox>\r\n                      </div>\r\n\r\n                      <mat-option *ngFor=\"let row of filteredStates1\"\r\n                        (click)=\"data.working_state.length==filteredStates1.length ? data.allStates=true:data.allStates=false\"\r\n                        value=\"{{row.state_name}}\">\r\n                        {{row.state_name}}\r\n                      </mat-option>\r\n                    </mat-select>\r\n                  </mat-form-field>\r\n                  <div class=\"alert alert-danger\" *ngIf=\"f.submitted && working_state?.invalid\">\r\n                    This field is required\r\n                  </div>\r\n                </div>\r\n                <div class=\"col s12 m3 l3\">\r\n                  <mat-form-field appearance=\"outline\">\r\n                    <mat-label>Working District</mat-label>\r\n                    <mat-select name=\"working_district\" #working_district=\"ngModel\" [(ngModel)]=\"data.working_district\"\r\n                      multiple>\r\n                      <mat-option>\r\n                        <ngx-mat-select-search noEntriesFoundLabel=\"'no data found'\" placeholderLabel=\"Search..\"\r\n                          (keyup)=\"filterDistrict1($event.target.value)\"></ngx-mat-select-search>\r\n                      </mat-option>\r\n                      <div class=\"pl16\" *ngIf=\"district_list1.length>0\">\r\n                        <mat-checkbox [(ngModel)]=\"data.allDistrict\" (change)=\"alldistrict1('allDistrict')\"\r\n                          name=\"allDistrict\" value=\"true\">Select All</mat-checkbox>\r\n                      </div>\r\n                      <!-- <mat-option disabled=\"\">Select Working District</mat-option> -->\r\n                      <mat-option *ngFor=\"let row of filteredDistrict1\"\r\n                        (click)=\"data.working_district.length==filteredDistrict1.length ? data.allDistrict=true:data.allDistrict=false\"\r\n                        value=\"{{row.district_name}}\">\r\n                        {{row.district_name}}\r\n                      </mat-option>\r\n                    </mat-select>\r\n                  </mat-form-field>\r\n                  <div class=\"alert alert-danger\" *ngIf=\"f.submitted && working_district?.invalid \">\r\n                    This field is required\r\n                  </div>\r\n                </div>\r\n                <div class=\"col s12 m3 l3\">\r\n                  <mat-form-field appearance=\"outline\">\r\n                    <mat-label>Sum Insured</mat-label>\r\n                    <input matInput name=\"sum_insured\" placeholder=\"Type Here ...\" #sum_insured=\"ngModel\" maxlength=\"6\"\r\n                      [(ngModel)]=\"data.sum_insured\">\r\n                  </mat-form-field>\r\n                  <div class=\"alert alert-danger\" *ngIf=\"sum_insured.touched || f.submitted\">\r\n                    <p *ngIf=\"sum_insured.errors?.required\">This field is required</p>\r\n                  </div>\r\n                </div>\r\n\r\n                <div class=\"col s12 m3 l3\">\r\n                  <label class=\"control-label\" style=\"display:block;margin-bottom:6px;\">Insurance Card (PDF/Image)</label>\r\n                  <label style=\"cursor:pointer;border:1px solid #ccc;padding:8px 12px;border-radius:4px;display:inline-block;\">\r\n                    <i class=\"material-icons\" style=\"vertical-align:middle;font-size:18px;\">upload_file</i> Choose File\r\n                    <input type=\"file\" (change)=\"onInsuranceCardSelect($event)\" style=\"display:none;\"\r\n                      accept=\".pdf,.png,.jpg,.jpeg\" />\r\n                  </label>\r\n                  <span *ngIf=\"insuranceCardName\" style=\"margin-left:8px;font-size:12px;word-break:break-all;\">{{insuranceCardName}}</span>\r\n                  <a *ngIf=\"!insuranceCardName && data.insurance_card\" [href]=\"serve.uploadUrl + 'insurance_card/' + data.insurance_card\"\r\n                    target=\"_blank\" style=\"margin-left:8px;font-size:12px;\">Download current</a>\r\n                </div>\r\n\r\n                <div class=\"col s12 m3 l3\">\r\n                  <mat-form-field appearance=\"outline\">\r\n                    <mat-label>Gender</mat-label>\r\n                    <mat-select name=\"gender\" #gender=\"ngModel\" [(ngModel)]=\"data.gender\" required>\r\n                      <mat-option value=\"Male\">Male</mat-option>\r\n                      <mat-option value=\"Female\">Female</mat-option>\r\n                    </mat-select>\r\n                  </mat-form-field>\r\n\r\n                  <div class=\"alert alert-danger\" *ngIf=\"gender.touched || f.submitted\">\r\n                    <p *ngIf=\"gender.errors?.required\">This field is required</p>\r\n                  </div>\r\n                </div>\r\n                <div class=\"col s12 m3 l3\" *ngIf=\"data.user_type != 'Sales User'\">\r\n                  <mat-form-field appearance=\"outline\">\r\n                    <mat-label>Ticket Type</mat-label>\r\n                    <mat-select name=\"support_access\" [(ngModel)]=\"data.support_access\" #support_access=\"ngModel\"\r\n                      multiple>\r\n                      <mat-option *ngFor=\"let row of tickets\"\r\n                        value=\"{{row.category_name}}\">{{row.category_name}}</mat-option>\r\n                    </mat-select>\r\n                  </mat-form-field>\r\n                </div>\r\n\r\n                <div class=\"col s12 m3 l3\" *ngIf=\"data.user_type != 'Sales User'\">\r\n                  <mat-form-field appearance=\"outline\">\r\n                    <mat-label>Expense Type</mat-label>\r\n                    <mat-select name=\"expense_type\" [(ngModel)]=\"data.expense_type\" #expense_type=\"ngModel\" multiple>\r\n                      <mat-option value=\"BTL\">BTL</mat-option>\r\n                      <mat-option value=\"Outstation Travel\">Outstation Travel</mat-option>\r\n                      <mat-option value=\"TA Expense\">TA Expense</mat-option>\r\n                    </mat-select>\r\n                  </mat-form-field>\r\n                </div>\r\n              </div>\r\n\r\n\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"row\">\r\n        <div class=\"col s12\">\r\n          <div class=\"text-right\">\r\n            <button [ngClass]=\"{'loading': savingFlag == true}\" mat-raised-button color=\"accent\" type=\"submit\"\r\n              [disabled]=\"savingFlag == true\">\r\n              {{savingFlag == true ? 'Saving' : 'Update'}}\r\n            </button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </form>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/user/edit-user/edit-user.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/user/edit-user/edit-user.component.ts ***!
  \*******************************************************/
/*! exports provided: EditUserComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditUserComponent", function() { return EditUserComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_services_DatabaseService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/_services/DatabaseService */ "./src/_services/DatabaseService.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_dialog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/dialog.component */ "./src/app/dialog.component.ts");
/* harmony import */ var src_app_localstorage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/localstorage.service */ "./src/app/localstorage.service.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! moment */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng6-toastr-notifications */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/ng6-toastr-notifications/fesm5/ng6-toastr-notifications.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _designation_designation_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../designation/designation.component */ "./src/app/user/designation/designation.component.ts");











var EditUserComponent = /** @class */ (function () {
    function EditUserComponent(serve, dialog1, route, toast, location, session, rout, dialog) {
        this.serve = serve;
        this.dialog1 = dialog1;
        this.route = route;
        this.toast = toast;
        this.location = location;
        this.session = session;
        this.rout = rout;
        this.dialog = dialog;
        this.states = [];
        this.report_manager = [];
        this.data = {};
        this.district_list = [];
        this.sales_type = [];
        this.loader = false;
        this.module_name = [];
        this.exist = false;
        this.assign_module_data = [];
        this.savingFlag = false;
        this.assign_login_data = {};
        this.logined_user_data = {};
        this.branch = [];
        this.brandList = [];
        this.district_list1 = [];
        this.city_list = [];
        this.division_list = [];
        this.insuranceCardName = '';
        this.filteredStates = [];
        this.filteredDistrict = [];
        this.filteredDistrict1 = [];
        this.filteredStates1 = [];
        this.filteredCity = [];
        this.tickets = [];
        this.data.order_type = 'Both';
        this.maxDate = new Date();
        this.assign_login_data = this.session.getSession();
        this.logined_user_data = this.assign_login_data.value.data;
        this.getStateList();
        this.getDivisonList();
        this.getTicketType();
    }
    EditUserComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.userId = params['id'];
            if (_this.userId) {
                _this.loader = true;
                _this.userDetail();
                _this.getReportManager('');
            }
        });
    };
    EditUserComponent.prototype.getStateList = function () {
        var _this = this;
        this.serve.post_rqst(0, "Master/getAllState").subscribe((function (result) {
            if (result['statusCode'] == 200) {
                _this.states = result['all_state'];
                _this.filteredStates = _this.states;
                _this.filteredStates1 = _this.states;
                _this.states.map(function (row) { row.state_name = row.state_name.toUpperCase(); });
                // this.data.district=''
            }
            else {
                _this.toast.errorToastr(result['statusMsg']);
            }
        }));
    };
    EditUserComponent.prototype.getDivisonList = function () {
        var _this = this;
        this.serve.post_rqst(0, "CustomerNetwork/getAllDivison").subscribe((function (result) {
            if (result['statusCode'] == 200) {
                _this.division_list = result['data'];
            }
            else {
                _this.toast.errorToastr(result['statusMsg']);
            }
        }));
    };
    EditUserComponent.prototype.filterStates = function (searcValue) {
        var filterValue = searcValue.toLowerCase();
        this.filteredStates = this.states.filter(function (state) { return state.state_name.toLowerCase().includes(filterValue); });
    };
    EditUserComponent.prototype.filterDistrict = function (searcValue) {
        var filterValue = searcValue.toLowerCase();
        this.filteredDistrict = this.district_list.filter(function (dis) { return dis.district_name.toLowerCase().includes(filterValue); });
    };
    EditUserComponent.prototype.filterDistrict1 = function (searcValue) {
        var _this = this;
        console.log(searcValue);
        var filterValue = searcValue.toLowerCase();
        // Separate selected and unselected states
        var selectedStates = this.district_list1.filter(function (state) { return _this.data.working_district.includes(state.district_name); });
        var unselectedStates = this.district_list1.filter(function (state) { return !_this.data.working_district.includes(state.district_name); });
        // Filter the unselected states
        var filteredUnselectedStates = unselectedStates.filter(function (state) { return state.district_name.toLowerCase().includes(filterValue); });
        // Combine the selected states (unfiltered) with the filtered unselected states
        this.filteredDistrict1 = selectedStates.concat(filteredUnselectedStates);
    };
    EditUserComponent.prototype.filterStates1 = function (searcValue) {
        var _this = this;
        console.log(searcValue);
        var filterValue = searcValue.toLowerCase();
        // Separate selected and unselected states
        var selectedStates = this.states.filter(function (state) { return _this.data.working_state.includes(state.state_name); });
        console.log(selectedStates, "selected states");
        var unselectedStates = this.states.filter(function (state) { return !_this.data.working_state.includes(state.state_name); });
        console.log(unselectedStates, "unslected");
        // Filter the unselected states
        var filteredUnselectedStates = unselectedStates.filter(function (state) { return state.state_name.toLowerCase().includes(filterValue); });
        // Combine the selected states (unfiltered) with the filtered unselected states
        this.filteredStates1 = selectedStates.concat(filteredUnselectedStates);
        console.log(this.filteredStates1, "filter state");
    };
    EditUserComponent.prototype.filterCity = function (searcValue) {
        var filterValue = searcValue.toLowerCase();
        this.filteredCity = this.city_list.filter(function (dis) { return dis.city.toLowerCase().includes(filterValue); });
    };
    EditUserComponent.prototype.processPincode = function (pincode) {
        var _this = this;
        var pincodeValue = pincode;
        if (pincodeValue.length > 5) {
            this.serve.post_rqst({ 'pincode': pincodeValue }, "CustomerNetwork/getPostalInfo").subscribe((function (result) {
                if (result['statusCode'] == 200) {
                    _this.data.state = result['result'].state_name;
                    _this.data.state_name = _this.data.state;
                    _this.getDistrict(1);
                    _this.data.district = result['result'].district_name;
                    _this.data.city = result['result'].city;
                    console.log(_this.data.city);
                    // this.getDistrict(1)
                    _this.getCity(1);
                }
                else {
                    _this.toast.errorToastr(result['statusMsg']);
                }
            }));
        }
    };
    EditUserComponent.prototype.getCity = function (val) {
        var _this = this;
        var dist_name;
        if (val == 1) {
            dist_name = this.data.district;
        }
        var value = { "state": this.data.state, "district": dist_name, "pincode": this.data.pincode };
        this.serve.post_rqst(value, "CustomerNetwork/get_city_list").subscribe((function (response) {
            if (response['statusCode'] == 200) {
                _this.city_list = response['city'];
                _this.filteredCity = _this.city_list;
            }
            else {
                _this.toast.errorToastr(response['statusMsg']);
            }
        }));
    };
    EditUserComponent.prototype.getDistrict1 = function (val) {
        var _this = this;
        var st_name;
        if (val == 1) {
            st_name = this.data.working_state;
        }
        this.serve.post_rqst({ 'state_name': st_name }, "Master/cross_multiple_district").subscribe((function (result) {
            if (result['statusCode'] == 200) {
                _this.district_list1 = result['district_name'];
                _this.data.working_district = _this.data.working_district_name;
                _this.filteredDistrict1 = _this.district_list1;
            }
            else {
                _this.toast.errorToastr(result['statusMsg']);
            }
        }));
    };
    EditUserComponent.prototype.alldistrict1 = function (action) {
        console.log(action);
        console.log(this.data.allDistrict);
        if (this.data.allDistrict == true) {
            var productData = [];
            for (var i = 0; i < this.filteredDistrict1.length; i++) {
                productData.push(this.filteredDistrict1[i].district_name);
            }
            this.data.working_district = productData;
            console.table(this.data.working_district);
        }
        else {
            this.data.working_district = [];
            console.table(this.data.working_district);
        }
    };
    EditUserComponent.prototype.allStates = function (action) {
        if (this.data.allStates) {
            var stateData = this.filteredStates1.map(function (state) { return state.state_name; });
            this.data.working_state = stateData;
        }
        else {
            this.data.working_state = [];
        }
    };
    EditUserComponent.prototype.userDetail = function () {
        var _this = this;
        this.serve.post_rqst({ 'id': this.userId }, "Master/salesUserDetail").subscribe(function (result) {
            _this.loader = false;
            _this.data = result['sales_detail'];
            if (_this.data.date_of_joining == '0000-00-00') {
                _this.data.date_of_joining = '';
            }
            _this.getStateList();
            _this.get_sales_user_type(_this.data.user_type, '');
            if (_this.data.user_type == 'Sales User') {
                _this.getBrand();
            }
            _this.data.state = _this.data.state_name;
            if (_this.data.state_name != '') {
                _this.getDistrict(1);
            }
            _this.data.district = _this.data.district_name;
            // this.getDistrict(1);
            _this.data.rsm_id = _this.data.rsm_id.toString();
            _this.data.working_state = _this.data.working_state_name;
            _this.getDistrict1(1);
            _this.getCity(1);
            _this.data.role_id = _this.data.designation_id.toString();
            _this.data.brand = _this.data.brand.map(String);
            _this.data.assign_system_user = _this.data.assign_system_user_id.map(String);
            _this.data.divison = _this.data.divison;
            _this.data.support_access = _this.data.support_access_name;
            // this.data.working_state.map((row, i) => { this.data.working_state[i] = row.toUpperCase(); })
            if (_this.data.assign_system_user != '') {
                _this.getReportManager('');
            }
            if (_this.data.date_of_joining == '0000-00-00') {
                _this.data.date_of_joining = '';
            }
            if (_this.data.state_name != '') {
                _this.getDistrict(1);
            }
            _this.get_sales_user_type(_this.data.user_type, '');
            if (_this.data.user_type == 'System User') {
                _this.assign_module_data = _this.data.assign_module;
            }
        });
    };
    EditUserComponent.prototype.MobileNumber = function (event) {
        var pattern = /[0-9\+\-\ ]/;
        var inputChar = String.fromCharCode(event.charCode);
        if (event.keyCode != 8 && !pattern.test(inputChar)) {
            event.preventDefault();
        }
    };
    EditUserComponent.prototype.getBrand = function () {
        var _this = this;
        this.serve.post_rqst({}, "Master/brandList").subscribe((function (result) {
            if (result['statusCode'] == 200) {
                _this.brandList = result['result'];
                if (_this.data.user_type == 'Sales User') {
                    var brandCode = [];
                    if (_this.brandList.length > 0) {
                        for (var i = 0; i < _this.brandList.length; i++) {
                            brandCode.push(_this.brandList[i]['brand_code']);
                        }
                        _this.data.brand = brandCode;
                    }
                }
            }
            else {
                _this.toast.errorToastr(result['statusMsg']);
            }
        }));
    };
    EditUserComponent.prototype.check_number = function () {
        var _this = this;
        if (this.data.contact_01.length == 10) {
            this.serve.post_rqst({ "mobile": this.data.contact_01 }, "Master/userMobileNoCheck").subscribe((function (result) {
                if (result['statusCode'] == 200) {
                    if (result['statusMsg'] != 'Not Exist') {
                        _this.exist = true;
                        _this.toast.errorToastr(result['statusMsg']);
                    }
                    else {
                        _this.exist = false;
                    }
                }
                else {
                    _this.exist = false;
                    _this.toast.errorToastr(result['statusMsg']);
                }
            }));
        }
    };
    EditUserComponent.prototype.getDistrict = function (val) {
        var _this = this;
        var st_name;
        if (val == 1) {
            if (this.data.state_name != '' && this.data.state_name) {
                st_name = this.data.state_name;
            }
            else {
                st_name = this.data.state;
            }
        }
        this.serve.post_rqst({ 'state_name': st_name }, "Master/getAllDistrict").subscribe((function (result) {
            if (result['statusCode'] == 200) {
                _this.district_list = result['all_district'];
                _this.filteredDistrict = _this.district_list;
            }
            else {
                _this.toast.errorToastr(result['statusMsg']);
            }
        }));
    };
    EditUserComponent.prototype.get_sales_user_type = function (type, event) {
        var _this = this;
        var Usertype;
        if (type != '') {
            Usertype = type;
        }
        else {
            Usertype = event.value;
        }
        this.serve.post_rqst({ 'user_type': Usertype }, "Master/getDesignation").subscribe((function (response) {
            _this.sales_type = response['all_designation'];
            // console.log(this.sales_type);
            if (_this.data.user_type == 'System User' && _this.data.role_id) {
                _this.findId(_this.data.role_id);
            }
        }));
    };
    EditUserComponent.prototype.getReportManager = function (searcValue) {
        var _this = this;
        this.serve.post_rqst({ 'search': searcValue, 'id': this.userId }, "Master/getSalesUserForReporting").subscribe((function (result) {
            if (result['all_sales_user']['statusCode'] == 200) {
                _this.report_manager = result['all_sales_user']['all_sales_user'];
            }
            else {
                _this.toast.errorToastr(result['all_sales_user']['statusMsg']);
            }
        }));
    };
    EditUserComponent.prototype.submitDetail = function () {
        var _this = this;
        if (this.data.user_type != 'Service Engineer') {
            if (this.data.role_id) {
                var index = this.sales_type.findIndex(function (d) { return d.id == _this.data.role_id; });
                if (index != -1) {
                    this.data.role_name = this.sales_type[index].role_name;
                }
            }
            if (this.data.date_of_joining) {
                this.data.date_of_joining = moment__WEBPACK_IMPORTED_MODULE_6__(this.data.date_of_joining).format('YYYY-MM-DD');
                this.data.date_of_joining = this.data.date_of_joining;
            }
            if (this.data.dob) {
                this.data.dob = moment__WEBPACK_IMPORTED_MODULE_6__(this.data.dob).format('YYYY-MM-DD');
                this.data.dob = this.data.dob;
            }
            if (this.data.doa) {
                this.data.doa = moment__WEBPACK_IMPORTED_MODULE_6__(this.data.doa).format('YYYY-MM-DD');
                this.data.doa = this.data.doa;
            }
            if (this.data.user_type == 'System User') {
                this.data.assignModule = this.assign_module_data;
            }
            this.data.uid = this.userId;
            this.data.user_id = this.userId;
            this.data.uname = this.userName;
            this.data.created_by_name = this.logined_user_data.name;
            this.data.created_by_id = this.logined_user_data.id;
            this.savingFlag = true;
            this.serve.post_rqst({ 'data': this.data }, "Master/updateUser").subscribe((function (response) {
                if (response['statusCode'] == "200") {
                    _this.toast.successToastr(response['statusMsg']);
                    _this.rout.navigate(['/sale-user-list']);
                    _this.savingFlag = false;
                }
                else {
                    _this.toast.errorToastr(response['statusMsg']);
                    _this.savingFlag = false;
                }
            }));
        }
        else {
            //  this.data.uid = this.userId;
            this.data.user_id = this.userId;
            this.data.uname = this.userName;
            this.data.created_by_name = this.logined_user_data.name;
            this.data.created_by_id = this.logined_user_data.id;
            this.savingFlag = true;
            this.serve.post_rqst({ 'data': this.data }, "Master/updateUser").subscribe((function (response) {
                if (response['statusCode'] == "200") {
                    _this.toast.successToastr(response['statusMsg']);
                    _this.rout.navigate(['/sale-user-list']);
                    _this.savingFlag = false;
                }
                else {
                    _this.toast.errorToastr(response['statusMsg']);
                    _this.savingFlag = false;
                }
            }));
        }
    };
    // get_module_data() {
    //   this.serve.post_rqst(0, "Master/moduleMasterList").subscribe((response => {
    //     this.assign_module_data = response['result'];
    //   }));
    // }
    EditUserComponent.prototype.assign_module = function (module_name, event, index) {
        if (event.checked) {
            this.assign_module_data[index][module_name] = 'true';
        }
        else {
            this.assign_module_data[index][module_name] = 'false';
        }
    };
    EditUserComponent.prototype.onInsuranceCardSelect = function (event) {
        var _this = this;
        var file = event.target.files && event.target.files[0];
        if (!file) {
            return;
        }
        var allowed = ['application/pdf', 'image/png', 'image/jpeg', 'image/jpg'];
        if (allowed.indexOf(file.type) === -1) {
            this.toast.errorToastr('Only PDF or image (jpg/png) file is allowed');
            return;
        }
        this.insuranceCardName = file.name;
        var reader = new FileReader();
        reader.onload = function (e) {
            _this.data.insurance_card = e.target.result;
        };
        reader.readAsDataURL(file);
    };
    EditUserComponent.prototype.back = function () {
        this.location.back();
    };
    EditUserComponent.prototype.openDialog = function () {
        var _this = this;
        var dialogRef = this.dialog1.open(_designation_designation_component__WEBPACK_IMPORTED_MODULE_10__["DesignationComponent"], {
            width: '500px',
            panelClass: 'cs-modal',
            disableClose: true,
            data: {
                'type': 'designation'
            }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result == true) {
                _this.get_sales_user_type(_this.data.user_type, '');
            }
        });
    };
    EditUserComponent.prototype.findId = function (id) {
        var index = this.sales_type.findIndex(function (row) { return row.id == id; });
        if (index != -1) {
            this.data.supportFlag = this.sales_type[index].support;
            this.getTicketType();
        }
        else {
            this.data.supportFlag = 0;
        }
    };
    EditUserComponent.prototype.getTicketType = function () {
        var _this = this;
        this.serve.post_rqst({}, "Support/getSupportcategory").subscribe(function (result) {
            if (result['statusCode'] == 200) {
                _this.tickets = result['data'];
            }
            else {
                _this.toast.errorToastr(result['statusMsg']);
            }
        }, function (err) {
        });
    };
    EditUserComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-edit-user',
            template: __webpack_require__(/*! ./edit-user.component.html */ "./src/app/user/edit-user/edit-user.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_services_DatabaseService__WEBPACK_IMPORTED_MODULE_2__["DatabaseService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatDialog"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_8__["ToastrManager"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["Location"], src_app_localstorage_service__WEBPACK_IMPORTED_MODULE_5__["sessionStorage"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], src_app_dialog_component__WEBPACK_IMPORTED_MODULE_4__["DialogComponent"]])
    ], EditUserComponent);
    return EditUserComponent;
}());



/***/ }),

/***/ "./src/app/user/sale-user-detail/sale-user-detail.component.html":
/*!***********************************************************************!*\
  !*** ./src/app/user/sale-user-detail/sale-user-detail.component.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-container\">\r\n  <div class=\"tools-container\">\r\n    <a mat-icon-button matTooltip=\"Back\" (click)=\"back()\">\r\n      <i class=\"material-icons\">arrow_back</i>\r\n    </a>\r\n    <h2>{{detail.user_type | titlecase}} Details</h2>\r\n    <!-- <div class=\"left-auto\">\r\n      <button class=\"mr16\" matTooltip=\"Transfer Data\" *ngIf=\"detail.user_type != 'System User' \"\r\n      (click)=\"openDialog('transferData')\" mat-raised-button color=\"primary\"><i class=\"material-icons mr5\">swap_horiz</i>\r\n      Transfer Data</button>\r\n      <button class=\"mr16\" matTooltip=\"Transfer Data\" *ngIf=\"detail.user_type == 'System User' \"\r\n      (click)=\"openDialog('updatePassword')\" mat-raised-button color=\"primary\"><i class=\"material-icons mr5\">vpn_key</i>\r\n      Change Credentials</button>\r\n      <ng-container *ngIf=\"login_data.edit_users_master=='1'\">\r\n        <button matTooltip=\"Edit product\" *ngIf=\"login_data.edit_users_master=='1'\" [routerLink]=\"[ 'user-edit/', user_id ]\"\r\n        mat-raised-button color=\"primary\"><i class=\"material-icons mr5\">edit</i> Edit {{detail.user_type |\r\n          titlecase}}</button>\r\n        </ng-container>\r\n      </div> -->\r\n\r\n    <div class=\"left-auto mt\" *ngIf=\"detail.user_type != 'System User'\">\r\n      <div class=\"mat-tabbar\">\r\n        <button mat-button [ngClass]=\"{'active' :tabType== 'Profile'}\" (click)=\"tabType= 'Profile'\">\r\n          <i class=\"material-icons\">person</i>Basic Detail\r\n        </button>\r\n\r\n        <button mat-button [ngClass]=\"{'active' :tabType== 'Attendance'}\" (click)=\"tabType= 'Attendance';\"\r\n          *ngIf=\" detail.user_type != 'Service Engineer' && login_data.view_attendence == '1'\">\r\n          <i class=\"material-icons\">insert_invitation</i>Attendance\r\n        </button>\r\n\r\n\r\n        <button mat-button [ngClass]=\"{'active' :tabType== 'Network'}\" (click)=\"tabType= 'Network';\"\r\n          *ngIf=\" detail.user_type != 'Service Engineer' && login_data.view_customer_network == '1'\">\r\n          <i class=\"material-icons\">people_alt</i>Network\r\n        </button>\r\n\r\n\r\n        <button mat-button [ngClass]=\"{'active' :tabType== 'Checkin'}\" (click)=\"tabType= 'Checkin';\"\r\n          *ngIf=\" detail.user_type != 'Service Engineer' && login_data.view_check_in == '1'\">\r\n          <i class=\"material-icons\">my_location</i>Checkin\r\n        </button>\r\n\r\n        <!-- <button mat-button [ngClass]=\"{'active' :tabType== 'Tracker'}\" (click)=\"tabType= 'Tracker';\"\r\n          *ngIf=\" detail.user_type != 'Service Engineer'\">\r\n          <i class=\"material-icons\">person_pin_circle</i>Tracker\r\n        </button> -->\r\n\r\n        <button mat-button [ngClass]=\"{'active' :tabType== 'Leave'}\" (click)=\"tabType= 'Leave';\"\r\n          *ngIf=\" detail.user_type != 'Service Engineer' && login_data.view_leaves == '1'\">\r\n          <i class=\"material-icons\">exit_to_app</i>Leave\r\n        </button>\r\n\r\n        <!-- <button mat-button [ngClass]=\"{'active' :tabType== 'Travel'}\" (click)=\"tabType= 'Travel';\"\r\n          *ngIf=\" detail.user_type != 'Service Engineer'\">\r\n          <i class=\"material-icons\">directions_transit</i>Travel Plan\r\n        </button> -->\r\n\r\n        <button mat-button [ngClass]=\"{'active' :tabType== 'Expense'}\" (click)=\"tabType= 'Expense';\"\r\n          *ngIf=\" detail.user_type != 'Service Engineer' && login_data.view_expense == '1'\">\r\n          <i class=\"material-icons\">account_balance_wallet</i>Expense\r\n        </button>\r\n\r\n\r\n        <button mat-button [ngClass]=\"{'active' :tabType== 'Event'}\" (click)=\"tabType= 'Event';\"\r\n          *ngIf=\" detail.user_type != 'Service Engineer' && login_data.view_event_plan == '1'\">\r\n          <i class=\"material-icons\">groups</i>BTL Activity\r\n        </button>\r\n\r\n        <button mat-button [ngClass]=\"{'active' :tabType== 'gallery'}\" (click)=\"get_UserGallery();tabType= 'gallery';\"\r\n          *ngIf=\"detail.user_type != 'Service Engineer' && login_data.view_gallery == '1'\">\r\n          <i class=\"material-icons\">collections_bookmark</i>Gallery\r\n        </button>\r\n\r\n        <button *ngIf=\"login_data.view_primary_orders == '1'\" mat-button [ngClass]=\"{'active' :tabType== 'Primary Order'}\"\r\n          (click)=\"getPrimaryOrder('',currentMonth_no,currentYear,'Pending');  tabType = 'Primary Order'\"><i\r\n            class=\"material-icons\">shopping_cart</i>Primary Order</button>\r\n\r\n        <button *ngIf=\"login_data.view_secondary_orders == '1'\" mat-button [ngClass]=\"{'active' :tabType== 'Secondary Order'}\"\r\n          (click)=\"orderStatus = 'Pending'; tabType = 'Secondary Order';  getSecondaryOrder('',currentMonth_no,currentYear,'Pending');\">SecondaryOrder</button>\r\n\r\n        <!-- <button mat-button [ngClass]=\"{'active' :tabType== 'Task'}\" (click)=\"tabType= 'Task';\"\r\n          *ngIf=\" detail.user_type != 'Service Engineer'\">\r\n          <i class=\"material-icons\">assignment_add</i>Task\r\n        </button> -->\r\n\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"container pb50\" [ngClass]=\"{'pt10 pl10 pr10' :tabType== 'Profile'}\">\r\n    <ng-container *ngIf=\"tabType == 'Profile'\">\r\n      <div class=\"row\">\r\n        <div class=\"col s12 m8 l8\">\r\n          <div class=\"card\" *ngIf=\"!skLoading\">\r\n            <div class=\"card-head\">\r\n              <h2>Basic Details</h2>\r\n\r\n              <div class=\"left-auto\" *ngIf=\"login_data.edit_users_master=='1'\">\r\n                <a class=\"sm-mat-icon-button\" mat-icon-button matTooltip=\"Edit Detail\"\r\n                  [routerLink]=\"[ 'user-edit/', user_id ]\">\r\n                  <i class=\"material-icons\">edit</i>\r\n                </a>\r\n              </div>\r\n            </div>\r\n            <div class=\"card-body\">\r\n              <div class=\"grid-box\">\r\n                <div class=\"block-feilds\">\r\n                  <span>Designation</span>\r\n                  <p>{{detail.designation_name}}</p>\r\n                </div>\r\n\r\n                <div class=\"block-feilds user-dp\">\r\n                  <div class=\"profile-pic\" *ngIf=\"detail.user_type != 'System User'\">\r\n                    <img\r\n                      src=\"{{detail.image != null ?(url + detail.image) : 'https://www.pngall.com/wp-content/uploads/5/User-Profile-PNG.png'}}\"\r\n                      (click)=\"detail.image != null ? goToImage(url + detail.image) : '' \">\r\n                  </div>\r\n                  <div class=\"wp100\">\r\n                    <span>Name</span>\r\n                    <p>{{detail.name | titlecase}}</p>\r\n                  </div>\r\n                </div>\r\n\r\n\r\n                <div class=\"block-feilds\">\r\n                  <span>Employee Code</span>\r\n                  <p>{{detail.employee_id}}</p>\r\n                </div>\r\n                <div class=\"block-feilds\">\r\n                  <span>Mobile Number</span>\r\n                  <p>{{detail.contact_01}}</p>\r\n                </div>\r\n                <div class=\"block-feilds\">\r\n                  <span>Mobile Number</span>\r\n                  <p>{{detail.offmobileno}}</p>\r\n                </div>\r\n                <div class=\"block-feilds\">\r\n                  <span>Official Email ID</span>\r\n                  <p>{{detail.email ? detail.email :'---'}}</p>\r\n                </div>\r\n                <div class=\"block-feilds\">\r\n                  <span>Email ID</span>\r\n                  <p>{{detail.PersonalEmail ? detail.PersonalEmail :'---'}}</p>\r\n                </div>\r\n                <div class=\"block-feilds\">\r\n                  <span>Division</span>\r\n                  <p>{{detail.working_division ? detail.working_division :'---'}}</p>\r\n                </div>\r\n                <div class=\"block-feilds\">\r\n                  <span>Base Station</span>\r\n                  <p>{{detail.baseStation ? detail.baseStation :'---'}}</p>\r\n                </div>\r\n                <div class=\"block-feilds\">\r\n                  <span>Date of joining</span>\r\n                  <p *ngIf=\"detail.date_of_joining != '0000-00-00'\">{{detail.date_of_joining | date}}</p>\r\n                  <p *ngIf=\"detail.date_of_joining == '0000-00-00'\">---</p>\r\n                </div>\r\n                <div class=\"block-feilds\">\r\n                  <span>Date Of Birth</span>\r\n                  <p *ngIf=\"detail.dob != '0000-00-00'\">{{detail.dob | date}}</p>\r\n                  <p *ngIf=\"detail.dob == '0000-00-00' || detail.dob ==  null\">---</p>\r\n\r\n                </div>\r\n                <div class=\"block-feilds\">\r\n                  <span>Sum Insured</span>\r\n                  <p>{{detail.sum_insured}}</p>\r\n                </div>\r\n                 <div class=\"block-feilds\">\r\n                  <span>Gender</span>\r\n                  <p>{{detail.gender?detail.gender:''}}</p>\r\n                </div>\r\n\r\n                <div class=\"block-feilds\">\r\n                  <span>Date Of Anniversary</span>\r\n                  <p *ngIf=\"detail.doa != '0000-00-00'\">{{detail.doa | date}}</p>\r\n                  <p *ngIf=\"detail.doa == '0000-00-00' || detail.doa == null \">---</p>\r\n\r\n                </div>\r\n                <div class=\"block-feilds\">\r\n                  <span>Weekly off</span>\r\n                  <p>{{detail.weekly_off ? detail.weekly_off :'---'}}</p>\r\n                </div>\r\n\r\n                <div class=\"block-feilds\">\r\n                  <span>Status</span>\r\n                  <p>{{detail.status == '1' ? 'Active' : 'Deactive'}}</p>\r\n                </div>\r\n\r\n                <div class=\"block-feilds\">\r\n                  <span>Reporting Manager</span>\r\n                  <p *ngIf=\"detail.assign_user != ''\">{{detail.assign_user | titlecase}}</p>\r\n                  <p *ngIf=\"!detail.assign_user\">---</p>\r\n                </div>\r\n                <div class=\"block-feilds\">\r\n                  <span>Manager Code</span>\r\n                  <p *ngIf=\"detail.assign_user != ''\">{{detail.assign_user_code}}</p>\r\n                  <p *ngIf=\"!detail.assign_user\">---</p>\r\n                </div>\r\n                <div class=\"block-feilds\" *ngIf=\"detail.user_type == 'System User'\">\r\n                  <span>Expense Type</span>\r\n                  <p *ngIf=\"detail.assign_user != ''\">{{detail.assign_user_code}}</p>\r\n                  <p *ngIf=\"!detail.assign_user\">---</p>\r\n                </div>\r\n                <div class=\"block-feilds\">\r\n                  <span>Last Updated By</span>\r\n                  <p>{{detail.last_updated_by_name ? detail.last_updated_by_name : '--'}}</p>\r\n                </div>\r\n\r\n                <div class=\"block-feilds\">\r\n                  <span>Last Updated On</span>\r\n                  <p>\r\n                    {{detail.last_updated_on && detail.last_updated_on != '0000-00-00 00:00:00'? (detail.last_updated_on\r\n                    |\r\n                    date:'medium') : '--'}}\r\n                  </p>\r\n                </div>\r\n                <div class=\"block-feilds\" *ngIf=\"detail.user_type == 'Sales User' \">\r\n                  <span>First Mobile App Login</span>\r\n                  <p>\r\n                    {{detail.first_login && detail.first_login != '0000-00-00 00:00:00'? (detail.first_login | date:'MMM\r\n                    d, y, h:mm:a') : '--'}}\r\n                  </p>\r\n                </div>\r\n                <div class=\"block-feilds\" *ngIf=\"detail.user_type == 'Sales User' \">\r\n                  <span>Latest Mobile App Login</span>\r\n                  <p>\r\n                    {{detail.latest_login && detail.latest_login != '0000-00-00 00:00:00'? (detail.latest_login |\r\n                    date:'MMM d, y, h:mm:a') : '--'}}\r\n                  </p>\r\n                </div>\r\n\r\n                <div class=\"block-feilds\" *ngIf=\"detail.user_type == 'Sales User' \">\r\n                  <span>Device Information</span>\r\n                  <p>\r\n                    {{detail.device_info ? detail.device_info : '---'}}\r\n                  </p>\r\n                </div>\r\n\r\n                <div class=\"block-feilds\" *ngIf=\"detail.support_access\">\r\n                  <span>Ticket Type</span>\r\n                  <p>\r\n                    {{detail.support_access ? detail.support_access : '---'}}\r\n                  </p>\r\n                </div>\r\n\r\n              </div>\r\n\r\n              <div class=\"grid-box  mt16\"\r\n                [ngClass]=\"{'two': detail.user_type != 'System User', 'single': detail.user_type == 'System User'}\">\r\n                <div class=\"block-feilds  flex-heading\" *ngIf=\"detail.user_type != 'System User'\">\r\n                  <div>\r\n                    <span>Attendance Punchin Address</span>\r\n                    <p>{{detail.gps_address ? detail.gps_address : '---'}} <br> {{detail.lat ? ('Latitude :-' +\r\n                      detail.lat) : ''}} {{detail.lng\r\n                      ?\r\n                      (', Longitude :-' + detail.lng) : ''}}</p>\r\n                  </div>\r\n\r\n                  <div class=\"left-auto\" *ngIf=\"detail.gps_address !=''  && detail.lat != '' && detail.lng != ''\">\r\n                    <a class=\"sm-mat-icon-button\" mat-icon-button matTooltip=\"Reset Punchin Address\" (click)=\"reset()\">\r\n                      <i class=\"material-icons\">restart_alt</i>\r\n                    </a>\r\n                  </div>\r\n                </div>\r\n\r\n                <div class=\"block-feilds\">\r\n                  <span>Address</span>\r\n                  <p>{{detail.address}} {{detail.city ? ',' + detail.city + ',' : ''}} {{detail.district_name ?\r\n                    detail.district_name + ',' : ''}} {{detail.state_name ? detail.state_name + ',' : ''}}\r\n                    {{detail.pincode}}</p>\r\n                </div>\r\n\r\n              </div>\r\n\r\n              <div class=\"grid-box mt16 single\">\r\n                <div class=\"block-feilds\">\r\n                  <span>Working State</span>\r\n                  <p>\r\n                    {{detail.working_state_name ? detail.working_state_name.toString() : '---'}}\r\n                  </p>\r\n                </div>\r\n              </div>\r\n\r\n\r\n            </div>\r\n\r\n          </div>\r\n          <!-- product data end -->\r\n\r\n\r\n          <!-- Skeleton start -->\r\n          <div class=\"card\" *ngIf=\"skLoading\">\r\n            <div class=\"sk-head\">\r\n              <h2>&nbsp;</h2>\r\n            </div>\r\n            <div class=\"card-body\">\r\n              <div class=\"grid-box\">\r\n                <div class=\"sk-box\" *ngFor=\"let row of [].constructor(10)\">\r\n                  &nbsp;\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <!-- Skeleton end -->\r\n\r\n        </div>\r\n\r\n        <div class=\"col s12 m4 l4\">\r\n          <ng-container *ngIf=\"!skLoading\">\r\n            <div class=\"card\">\r\n              <div class=\"card-head\">\r\n                <h2>Login Credentials</h2>\r\n              </div>\r\n              <div class=\"card-body\">\r\n                <div class=\"grid-box single\">\r\n                  <div class=\"block-feilds\">\r\n                    <span>User Name</span>\r\n                    <p>{{detail.username}}</p>\r\n                  </div>\r\n                </div>\r\n                <div class=\"grid-box single mt16\">\r\n                  <div class=\"block-feilds\">\r\n                    <span>Password</span>\r\n                    <p>{{detail.password}}</p>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n\r\n            </div>\r\n            <div class=\"card mt10\">\r\n              <div class=\"card-head\">\r\n                <h2>Insurance Card</h2>\r\n              </div>\r\n              <div class=\"card-body\">\r\n                <div class=\"grid-box single\">\r\n                  <div class=\"block-feilds\">\r\n                    <div *ngIf=\"detail.insurance_card\">\r\n                      <iframe *ngIf=\"isPdf(detail.insurance_card)\" [src]=\"insuranceCardUrl(detail.insurance_card)\"\r\n                        width=\"100%\" height=\"400\" style=\"border:1px solid #ccc;\"></iframe>\r\n                      <img *ngIf=\"!isPdf(detail.insurance_card)\"\r\n                        [src]=\"service.uploadUrl + 'insurance_card/' + detail.insurance_card\"\r\n                        style=\"max-width:100%;max-height:400px;border:1px solid #ccc;\" />\r\n                      <p style=\"margin-top:6px;\">\r\n                        <a [href]=\"service.uploadUrl + 'insurance_card/' + detail.insurance_card\" target=\"_blank\">\r\n                          <i class=\"material-icons\" style=\"vertical-align:middle;font-size:18px;\">download</i> Download\r\n                        </a>\r\n                      </p>\r\n                    </div>\r\n                    <p *ngIf=\"!detail.insurance_card\">---</p>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"card pb0 mt10\" *ngIf=\"detail.user_type == 'System User'\">\r\n              <div class=\"card-head\">\r\n                <h2>Assigned Users</h2>\r\n              </div>\r\n              <div class=\"card-body pt0\">\r\n                <mat-list class=\"cs-list-box pt0\">\r\n                  <mat-list-item *ngFor=\"let row of detail.assign_system_user_name;\">\r\n                    <div class=\"alphabet\">{{row ? row[0].toUpperCase():'' }}</div>\r\n                    {{row | titlecase}}\r\n                  </mat-list-item>\r\n                </mat-list>\r\n              </div>\r\n            </div>\r\n          </ng-container>\r\n\r\n\r\n          <!-- <ng-container *ngIf=\"detail.user_type != 'System User'\">\r\n            <div class=\"card pb0 mt10\" *ngIf=\"!skLoading\">\r\n              <div class=\"card-head\">\r\n                <h2>Leave Master</h2>\r\n              </div>\r\n              <div class=\"card-body pt0\">\r\n                <mat-list class=\"cs-list-box pt0\">\r\n                  <mat-list-item>\r\n                    <div class=\"alphabet\">{{detail.leaveTypes? detail.leaveTypes.cl:'0'}}</div>\r\n                    CL\r\n                  </mat-list-item>\r\n                  <mat-list-item>\r\n                    <div class=\"alphabet\">{{detail.leaveTypes? detail.leaveTypes.comp_off:'0'}}</div>\r\n                    COMP OFF\r\n                  </mat-list-item>\r\n                  <mat-list-item>\r\n                    <div class=\"alphabet\">{{detail.leaveTypes? detail.leaveTypes.el:'0'}}</div>\r\n                    EL\r\n                  </mat-list-item>\r\n                  <mat-list-item>\r\n                    <div class=\"alphabet\">{{detail.leaveTypes? detail.leaveTypes.sl:'0'}}</div>\r\n                    SL\r\n                  </mat-list-item>\r\n                </mat-list>\r\n              </div>\r\n            </div>\r\n          </ng-container> -->\r\n\r\n\r\n          <!-- Skeleton start -->\r\n          <div class=\"card mt10\" *ngIf=\"skLoading\">\r\n            <div class=\"sk-head\">\r\n              <h2>&nbsp;</h2>\r\n            </div>\r\n            <div class=\"card-body\">\r\n              <div class=\"grid-box\">\r\n                <div class=\"sk-box\" *ngFor=\"let row of [].constructor(4)\">\r\n                  &nbsp;\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <!-- Skeleton end -->\r\n        </div>\r\n\r\n\r\n      </div>\r\n\r\n      <div class=\"cs-table left-right-10\">\r\n        <div class=\"table-head\">\r\n          <table>\r\n            <tr>\r\n              <th class=\"w50\">S.No.</th>\r\n              <th>Module Name</th>\r\n              <th class=\"w120 text-center\">View</th>\r\n              <th class=\"w120 text-center\">Edit</th>\r\n              <th class=\"w120 text-center\">Delete</th>\r\n              <th class=\"w120 text-center\">Add</th>\r\n              <th class=\"w120 text-center\">Download Excel</th>\r\n              <th class=\"w120 text-center\">Upload Excel</th>\r\n            </tr>\r\n          </table>\r\n        </div>\r\n\r\n        <div class=\"table-container\">\r\n          <div class=\"table-content\">\r\n            <table>\r\n              <tr *ngFor=\"let data of assign_module_data; let i = index\">\r\n                <td class=\"w50\">{{i+1}}</td>\r\n                <td>{{data.module_name}}</td>\r\n                <td class=\"w120 text-center\">\r\n                  <mat-checkbox [disabled]=true\r\n                    *ngIf=\"data.view!= '' &&  data.view  == false || data.view  == 'false' || data.view  == 'true' || data.view  == true\"\r\n                    [checked]=\"data.view==true || data.view== 'true'\"\r\n                    (change)=\"assign_module('view',$event,i)\"></mat-checkbox>\r\n                  <mat-checkbox *ngIf=\"data.view== 'disable'\" [disabled]=true></mat-checkbox>\r\n                </td>\r\n                <td class=\"w120 text-center\">\r\n                  <mat-checkbox [disabled]=true\r\n                    *ngIf=\"data.edit!= '' &&  data.edit  == false || data.edit  == 'false' || data.edit  == 'true' || data.edit  == true\"\r\n                    [checked]=\"data.edit==true || data.edit== 'true'\"\r\n                    (change)=\"assign_module('edit',$event,i)\"></mat-checkbox>\r\n                  <mat-checkbox *ngIf=\"data.edit== 'disable'\" [disabled]=true [indeterminate]=true></mat-checkbox>\r\n                </td>\r\n                <td class=\"w120 text-center\">\r\n                  <mat-checkbox [disabled]=true\r\n                    *ngIf=\"data.delete!= '' &&  data.delete  == false || data.delete  == 'false' || data.delete  == 'true' || data.delete  == true\"\r\n                    [checked]=\"data.delete==true || data.delete== 'true'\"\r\n                    (change)=\"assign_module('delete',$event,i)\"></mat-checkbox>\r\n                  <mat-checkbox *ngIf=\"data.delete== 'disable'\" [disabled]=true [indeterminate]=true></mat-checkbox>\r\n                </td>\r\n                <td class=\"w120 text-center\">\r\n                  <mat-checkbox [disabled]=true [disabled]=true\r\n                    *ngIf=\"data.add!= '' &&  data.add  == false || data.add  == 'false' || data.add  == 'true' || data.add  == true\"\r\n                    [checked]=\"data.add==true || data.add== 'true'\"\r\n                    (change)=\"assign_module('add',$event,i)\"></mat-checkbox>\r\n                  <mat-checkbox *ngIf=\"data.add== 'disable'\" [disabled]=true [indeterminate]=true></mat-checkbox>\r\n                </td>\r\n                <td class=\"w120 text-center\">\r\n                  <mat-checkbox [disabled]=true\r\n                    *ngIf=\"data.export!= '' &&  data.export  == false || data.export  == 'false' || data.export  == 'true' || data.export  == true\"\r\n                    [checked]=\"data.export==true || data.export== 'true'\"\r\n                    (change)=\"assign_module('export',$event,i)\"></mat-checkbox>\r\n                  <mat-checkbox *ngIf=\"data.export== 'disable'\" [disabled]=true [indeterminate]=true></mat-checkbox>\r\n                </td>\r\n                <td class=\"w120 text-center\">\r\n                  <mat-checkbox [disabled]=true\r\n                    *ngIf=\"data.import!= '' &&  data.import  == false || data.import  == 'false' || data.import  == 'true' || data.import  == true\"\r\n                    [checked]=\"data.import==true || data.import== 'true'\"\r\n                    (change)=\"assign_module('import',$event,i)\"></mat-checkbox>\r\n                  <mat-checkbox *ngIf=\"data.import== 'disable'\" [disabled]=true [indeterminate]=true></mat-checkbox>\r\n                </td>\r\n              </tr>\r\n            </table>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n\r\n      <div class=\"fab-btns\">\r\n        <button mat-fab color=\"primary\" *ngIf=\"detail.user_type != 'System User' && tabType != 'tracker' && login_data.edit_users_master=='1' \"\r\n          (click)=\"openDialog('transferData')\">\r\n          <i class=\"material-icons\">swap_horiz</i>\r\n          Transfer Data\r\n        </button>\r\n\r\n        <button mat-fab color=\"primary\" *ngIf=\"detail.user_type == 'System User' && login_data.edit_users_master=='1' \"\r\n          (click)=\"openDialog('updatePassword')\">\r\n          <i class=\"material-icons\">vpn_key</i>\r\n          Change Credentials\r\n        </button>\r\n      </div>\r\n    </ng-container>\r\n\r\n\r\n\r\n    <ng-container *ngIf=\"tabType == 'Network'\">\r\n      <div class=\"mat-tabbar\">\r\n        <ng-container *ngFor=\"let row of service.drArray; let i = index\">\r\n          <button mat-button [ngClass]=\"{'active': netWorkType == row.type}\"\r\n            (click)=\"netWorkName = row.module_name;  netWorkType = row.type\">\r\n            {{row.module_name}}\r\n          </button>\r\n        </ng-container>\r\n      </div>\r\n\r\n\r\n      <app-distribution-list\r\n        [dataToReceive]=\"{'type': netWorkType, 'user_id': detail.id, 'assign_user':detail.name, 'hide':false, 'netWorkName':netWorkName,'padding0':'padding0'}\">\r\n      </app-distribution-list>\r\n\r\n\r\n    </ng-container>\r\n\r\n    <ng-container *ngIf=\"tabType == 'Tracker'\">\r\n      <app-tracker\r\n        [dataToReceive]=\"{'start_date': today_date | date:'yyyy-MM-dd', 'user_id':detail.id,  'padding0':'padding0'}\"></app-tracker>\r\n    </ng-container>\r\n\r\n\r\n    <ng-container *ngIf=\"tabType == 'Attendance'\">\r\n      <app-attendence\r\n        [dataToReceive]=\"{'hide': true, 'user_id':detail.id, 'employee_id':detail.employee_id,  'padding0':'padding0'}\"></app-attendence>\r\n    </ng-container>\r\n\r\n\r\n\r\n    <ng-container *ngIf=\"tabType == 'Checkin'\">\r\n      <app-checkin\r\n        [dataToReceive]=\"{'hide': true, 'user_id':detail.id, 'employee_id':detail.employee_id,  'padding0':'padding0'}\"></app-checkin>\r\n    </ng-container>\r\n\r\n\r\n    <ng-container *ngIf=\"tabType == 'Leave'\">\r\n      <app-leaves\r\n        [dataToReceive]=\"{'hide': true, 'user_id':detail.id, 'employee_id':detail.employee_id,  'padding0':'padding0'}\"></app-leaves>\r\n    </ng-container>\r\n\r\n    <ng-container *ngIf=\"tabType == 'Travel'\">\r\n      <app-travel-list\r\n        [dataToReceive]=\"{'hide': true, 'user_id':detail.id, 'employee_id':detail.employee_id,  'padding0':'padding0'}\"></app-travel-list>\r\n    </ng-container>\r\n\r\n\r\n\r\n    <ng-container *ngIf=\"tabType == 'Expense'\">\r\n      <app-list-expense\r\n        [dataToReceive]=\"{'hide': true, 'user_id':detail.id, 'employee_id':detail.employee_id,  'padding0':'padding0'}\"></app-list-expense>\r\n    </ng-container>\r\n\r\n\r\n\r\n    <ng-container *ngIf=\"tabType == 'Event'\">\r\n      <app-contractor-meet-list\r\n        [dataToReceive]=\"{'hide': true, 'user_id':detail.id, 'employee_id':detail.employee_id,  'padding0':'padding0'}\"></app-contractor-meet-list>\r\n    </ng-container>\r\n\r\n\r\n    <ng-container *ngIf=\"tabType == 'Task'\">\r\n      <app-task-list\r\n        [dataToReceive]=\"{'hide': true, 'user_id':detail.id, 'employee_id':detail.employee_id,  'padding0':'padding0'}\"></app-task-list>\r\n    </ng-container>\r\n\r\n    <ng-container *ngIf=\"tabType == 'gallery'\">\r\n      <div style=\"margin: -10px -10px 60px -10px\">\r\n        <div class=\"tools-container no-sticky\">\r\n\r\n          <div class=\"left-auto df flex-gap-10\">\r\n            <div class=\"pagination\">\r\n              <a mat-icon-button matTooltip=\"Refresh\" (click)=\"clearFilter(); getCheckin();\">\r\n                <i class=\"material-icons\">refresh</i>\r\n              </a>\r\n            </div>\r\n          </div>\r\n\r\n\r\n\r\n\r\n        </div>\r\n\r\n        <div class=\"mt10 mb10\">\r\n          <h1 class=\"text-heading\">Attendance Image</h1>\r\n        </div>\r\n        <div class=\"brandingGalleryBox grid-seven-box\">\r\n\r\n          <div class=\"branding-card\" *ngFor=\"let row of UserGalleryList\">\r\n            <div class=\"img-container\">\r\n              <div class=\"image-block\">\r\n                <img (click)=\"goToImage(url1 +'attendence/' +row.profile_image)\"\r\n                  src=\"{{ url1+ 'attendence/'+row.profile_image }}\" />\r\n                <p class=\"dateBox text-center\">\r\n                  {{ row.date_created | date : \"dd MMM yyyy\" }}\r\n                  <b>{{row.created_by}}</b>\r\n                </p>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"notFoundBox\" *ngIf=\"UserGalleryList.length == 0\">\r\n            <app-not-result-found></app-not-result-found>\r\n          </div>\r\n\r\n        </div>\r\n        <div>\r\n          <h1 class=\"text-heading\">Checkin Image</h1>\r\n        </div>\r\n        <div class=\"brandingGalleryBox grid-seven-box\">\r\n\r\n          <div class=\"branding-card\" *ngFor=\"let row of UserCheckinGallery\">\r\n            <div class=\"img-container\">\r\n              <div class=\"image-block\">\r\n                <img (click)=\"goToImage(url1 +'checkin/' +row.img)\" src=\"{{ url1+'checkin/' +row.img }}\" />\r\n                <p class=\"dateBox text-center\">\r\n                  {{ row.date_created | date : \"dd MMM yyyy\" }}\r\n                  <b>{{row.created_by}}</b>\r\n                </p>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"notFoundBox\" *ngIf=\"UserCheckinGallery.length == 0\">\r\n            <app-not-result-found></app-not-result-found>\r\n          </div>\r\n        </div>\r\n\r\n\r\n      </div>\r\n\r\n    </ng-container>\r\n    <ng-container *ngIf=\"tabType== 'Primary Order'\">\r\n      <div style=\"margin: -10px -10px 0px -10px;\">\r\n        <!-- <div class=\"tab-surface\">\r\n                <button *ngFor=\"let row of calenderInfo; let i =index;\" mat-button\r\n                    [ngClass]=\"OrderMonth == row.month && OrderYear == row.year ? 'active' : ''\"\r\n                    (click)=\"getPrimaryOrder('',row.month,row.year, orderStatus);\">{{row.month_name}} {{row.year}}\r\n                </button>\r\n            </div> -->\r\n\r\n        <div class=\"tools-container no-sticky\">\r\n\r\n          <h2>Primary Order Total Tonnage : {{primary__count.total_weight ?\r\n            (primary__count.total_weight.toFixed()) : '0'}}\r\n          </h2>\r\n\r\n          <div class=\"left-auto df ac flex-gap-10\">\r\n            <a mat-icon-button matTooltip=\"Refresh\" (click)=\"refresh(tabType)\">\r\n              <i class=\"material-icons\">refresh</i>\r\n            </a>\r\n\r\n            <div class=\"pagination\" *ngIf=\"primary_order_list.length > 0\">\r\n              <div class=\"pagination-content\">\r\n                Pages\r\n                <span>{{pagenumber}}</span>\r\n                of\r\n                <span>{{total_page}}</span>\r\n              </div>\r\n              <div class=\"page-nav\">\r\n                <button mat-icon-button matTooltip=\"Older\" (click)=\"pervious('primary')\"\r\n                  [disabled]=\"start == 0 || total_page == 0\">\r\n                  <i class=\"material-icons\">navigate_before</i>\r\n                </button>\r\n                <button mat-icon-button matTooltip=\"Newer\" (click)=\"nextPage('primary')\"\r\n                  [disabled]=\"pagenumber == total_page || total_page == 0 \">\r\n                  <i class=\"material-icons\">navigate_next</i>\r\n                </button>\r\n              </div>\r\n            </div>\r\n\r\n            <!-- <div class=\"mat-tabbar\">\r\n                        <button mat-button [ngClass]=\"orderStatus == 'Pending' ? 'active' : ''\"\r\n                            (click)=\"orderStatus = 'Pending';getPrimaryOrder('',OrderMonth,OrderYear,orderStatus);\">\r\n                            Pending ({{primary__count.Pending}})\r\n                        </button>\r\n                        <button mat-button [ngClass]=\"orderStatus == 'Approved' ? 'active' : ''\"\r\n                            (click)=\"orderStatus = 'Approved';getPrimaryOrder('',OrderMonth,OrderYear,orderStatus);\">\r\n                            Approved ({{primary__count.Approved}})\r\n                        </button>\r\n                        <button mat-button [ngClass]=\"orderStatus == 'Reject' ? 'active' : ''\"\r\n                            (click)=\"orderStatus = 'Reject';getPrimaryOrder('',OrderMonth,OrderYear,orderStatus);\">\r\n                            Reject ({{primary__count.Reject}})\r\n                        </button>\r\n                        <button mat-button [ngClass]=\"orderStatus == 'Draft' ? 'active' : ''\"\r\n                            (click)=\"orderStatus = 'Draft';getPrimaryOrder('',OrderMonth,OrderYear,orderStatus);\">\r\n                            Hold ({{primary__count.Hold}})\r\n                        </button>\r\n\r\n                    </div> -->\r\n\r\n\r\n          </div>\r\n\r\n        </div>\r\n        <div class=\"tools-container no-sticky\">\r\n          <div class=\"left-auto df ac flex-gap-10\">\r\n            <div class=\"mat-tabbar\">\r\n\r\n\r\n\r\n              <button mat-button [ngClass]=\"orderStatus == 'Pending' ? 'active' : ''\"\r\n                (click)=\"orderStatus = 'Pending';getPrimaryOrder('',OrderMonth,OrderYear,orderStatus);\">\r\n                Pending ({{primary__count.Pending ? primary__count.Pending : '0'}})\r\n              </button>\r\n              <button mat-button [ngClass]=\"orderStatus == 'hold_clubbing' ? 'active' : ''\"\r\n                (click)=\"orderStatus = 'hold_clubbing';getPrimaryOrder('',OrderMonth,OrderYear,orderStatus);\">\r\n                Hold Clubbing ({{primary__count.hold_clubbing ? primary__count.hold_clubbing :\r\n                '0'}})</button>\r\n              <button mat-button [ngClass]=\"orderStatus == 'hold_tonnage' ? 'active' : ''\"\r\n                (click)=\"orderStatus = 'hold_tonnage';getPrimaryOrder('',OrderMonth,OrderYear,orderStatus);\">\r\n                Hold Tonnage ({{primary__count.hold_tonnage ? primary__count.hold_tonnage : '0'}})</button>\r\n              <button mat-button [ngClass]=\"orderStatus == 'hold_outstanding' ? 'active' : ''\"\r\n                (click)=\"orderStatus = 'hold_outstanding';getPrimaryOrder('',OrderMonth,OrderYear,orderStatus);\">\r\n                Hold Outstanding ({{primary__count.hold_outstanding ? primary__count.hold_outstanding :\r\n                '0'}})</button>\r\n              <button mat-button [ngClass]=\"orderStatus == 'hold_customer' ? 'active' : ''\"\r\n                (click)=\"orderStatus = 'hold_customer';getPrimaryOrder('',OrderMonth,OrderYear,orderStatus);\">\r\n                Hold Customer ({{primary__count.hold_customer ? primary__count.hold_customer :\r\n                '0'}})</button>\r\n              <button mat-button [ngClass]=\"orderStatus == 'Approved' ? 'active' : ''\"\r\n                (click)=\"orderStatus = 'Approved';getPrimaryOrder('',OrderMonth,OrderYear,orderStatus);\">\r\n                In process ({{primary__count.Approved ? primary__count.Approved : '0'}})</button>\r\n              <button mat-button [ngClass]=\"orderStatus == 'in_loading' ? 'active' : ''\"\r\n                (click)=\"orderStatus = 'in_loading';getPrimaryOrder('',OrderMonth,OrderYear,orderStatus);\">\r\n                In loading ({{primary__count.in_loading ? primary__count.in_loading : '0'}})</button>\r\n              <button mat-button [ngClass]=\"orderStatus == 'despatched' ? 'active' : ''\"\r\n                (click)=\"orderStatus = 'despatched';getPrimaryOrder('',OrderMonth,OrderYear,orderStatus);\">\r\n                Dispatched ({{primary__count.despatched ? primary__count.despatched : '0'}})</button>\r\n              <button mat-button [ngClass]=\"orderStatus == 'Reject' ? 'active' : ''\"\r\n                (click)=\"orderStatus = 'Reject';getPrimaryOrder('',OrderMonth,OrderYear,orderStatus);\">\r\n                Reject ({{primary__count.Reject ? primary__count.Reject : '0'}})</button>\r\n\r\n\r\n\r\n\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"cs-table\">\r\n          <div class=\"sticky-head\" style=\"top: -10px;\">\r\n            <div class=\"table-head\">\r\n              <table>\r\n                <tr>\r\n                  <th class=\"w50\">S NO</th>\r\n                  <th class=\"w110\">Date</th>\r\n                  <th class=\"w110\">Created By</th>\r\n                  <th class=\"w80\">Order Id</th>\r\n                  <th class=\"w110\" *ngIf=\"orderStatus == 'Approved' || orderStatus == 'Dispatch'\">Order\r\n                    Number</th>\r\n                  <th class=\"w80 text-center\">Total Items</th>\r\n                  <th class=\"w90 text-right\">Item QTY.</th>\r\n                  <th class=\"w100 text-right\">Order Weight (Ton) </th>\r\n                  <th class=\"w100 text-right\" *ngIf=\"orderStatus == 'Approved'\">Points Transfered</th>\r\n                  <th class=\"w200\">Remark</th>\r\n                  <th class=\"w200\" *ngIf=\"orderStatus == 'Reject' || orderStatus == 'Draft'\">Reason</th>\r\n                </tr>\r\n              </table>\r\n            </div>\r\n\r\n            <div class=\"table-head border-top\">\r\n              <table>\r\n                <tr>\r\n                  <th class=\"w50\">&nbsp;</th>\r\n                  <th class=\"w110\">\r\n                    <div class=\"th-search-acmt\">\r\n                      <mat-form-field class=\"cs-input date-column infix-bodr\">\r\n                        <input matInput [matDatepicker]=\"picker\" placeholder=\"Date\" name=\"date_created\"\r\n                          [(ngModel)]=\"filter.date_created\" (dateChange)=\"date_format(tabType)\" [max]=\"today_date\"\r\n                          disabled>\r\n                        <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\r\n                        <mat-datepicker #picker disabled=\"false\"></mat-datepicker>\r\n                      </mat-form-field>\r\n                    </div>\r\n                  </th>\r\n                  <th class=\"w110\">\r\n                    <div class=\"th-search-acmt\">\r\n                      <mat-form-field class=\"example-full-width cs-input select-input\">\r\n                        <input matInput placeholder=\"Search...\" type=\"text\" name=\"created_by_name\"\r\n                          [(ngModel)]=\"filter.created_by_name\"\r\n                          (keyup.enter)=\"!filter.created_by_name ?  refresh(tabType) : getPrimaryOrder('',currentMonth_no,currentYear,orderStatus)\">\r\n                      </mat-form-field>\r\n                    </div>\r\n                  </th>\r\n                  <th class=\"w80\">\r\n                    <div class=\"th-search-acmt\">\r\n                      <mat-form-field class=\"example-full-width cs-input select-input\">\r\n                        <input matInput placeholder=\"Search...\" type=\"text\" name=\"order_no\"\r\n                          [(ngModel)]=\"filter.order_no\"\r\n                          (keyup.enter)=\"!filter.order_no ?  refresh(tabType) : getPrimaryOrder('',currentMonth_no,currentYear,orderStatus)\">\r\n                      </mat-form-field>\r\n                    </div>\r\n                  </th>\r\n                  <th class=\"w110\" *ngIf=\"orderStatus == 'Approved' || orderStatus == 'Dispatch'\">\r\n                    <div class=\"th-search-acmt\">\r\n                      <mat-form-field class=\"example-full-width cs-input select-input\">\r\n                        <input matInput placeholder=\"Search...\" type=\"text\" name=\"account_order_no\"\r\n                          [(ngModel)]=\"filter.account_order_no\"\r\n                          (keyup.enter)=\"!filter.account_order_no ?  refresh(tabType) : getPrimaryOrder('',currentMonth_no,currentYear,orderStatus)\">\r\n                      </mat-form-field>\r\n                    </div>\r\n                  </th>\r\n                  <th class=\"w80\">&nbsp;</th>\r\n                  <th class=\"w90 text-right\">&nbsp;</th>\r\n                  <th class=\"w100 text-right\">&nbsp;</th>\r\n                  <!-- <th class=\"w90 text-right\">&nbsp;</th> -->\r\n                  <th class=\"w100 text-right\" *ngIf=\"orderStatus == 'Approved'\">&nbsp;</th>\r\n                  <th class=\"w200\">&nbsp;</th>\r\n                  <th class=\"w200\" *ngIf=\"orderStatus == 'Reject' || orderStatus == 'Draft'\">&nbsp;</th>\r\n                </tr>\r\n              </table>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"table-container\">\r\n            <div class=\"table-content\">\r\n              <table>\r\n                <ng-container *ngIf=\"!primaryLoader\">\r\n                  <tr *ngFor=\"let row of primary_order_list; let i =index;\">\r\n                    <td class=\"w50\">{{i+1+sr_no}}</td>\r\n                    <td class=\"w110\">{{row.date_created | date : 'd MMM y , h:mm a' }}</td>\r\n                    <td class=\"w110\">{{row.created_by_name}}</td>\r\n                    <td class=\"w80\">\r\n                      <a class=\"link-btn\" [routerLink]=\"[ 'order-detail/', row.id ]\"\r\n                        [queryParams]=\"{'id':row.id, 'status':orderStatus}\"\r\n                        routerLinkActive=\"active\">{{row.order_no}}</a>\r\n                    </td>\r\n                    <td class=\"w110\" *ngIf=\"orderStatus == 'Approved' || orderStatus == 'Dispatch'\">\r\n                      {{row.account_order_no}}</td>\r\n                    <td class=\"w80 text-center\">{{row.order_item}}</td>\r\n                    <td class=\"w90 text-right\">{{row.total_order_qty}}</td>\r\n                    <td class=\"w100 text-right\"><strong>{{row.weight ? (row.weight.toFixed(3)) :\r\n                        '0'}}</strong></td>\r\n                    <td class=\"w100 text-right\" *ngIf=\"orderStatus == 'Approved'\">\r\n                      <strong class=\"green-clr\">{{row.marketing_points\r\n                        ? row.marketing_points : '0'}}</strong>\r\n                    </td>\r\n                    <td class=\"w200\">{{row.order_create_remark}}</td>\r\n                    <td class=\"w200\" *ngIf=\"orderStatus == 'Reject' || orderStatus == 'Draft'\">\r\n                      {{row.reason_reject}}</td>\r\n                  </tr>\r\n                </ng-container>\r\n                <ng-container *ngIf=\"primaryLoader\">\r\n                  <tr class=\"sk-loading\" *ngFor=\"let row of [].constructor(10)\">\r\n                    <td class=\"w50\">\r\n                      <div>&nbsp;</div>\r\n                    </td>\r\n                    <td class=\"w110\">\r\n                      <div>&nbsp;</div>\r\n                    </td>\r\n                    <td class=\"w110\">\r\n                      <div>&nbsp;</div>\r\n                    </td>\r\n                    <td class=\"w80\">\r\n                      <div>&nbsp;</div>\r\n                    </td>\r\n                    <td class=\"w110\" *ngIf=\"orderStatus == 'Approved' || orderStatus == 'Dispatch'\">\r\n                      <div>&nbsp;</div>\r\n                    </td>\r\n                    <td class=\"w80 text-center\">\r\n                      <div>&nbsp;</div>\r\n                    </td>\r\n                    <td class=\"w90 text-right\">\r\n                      <div>&nbsp;</div>\r\n                    </td>\r\n                    <td class=\"w100 text-right\">\r\n                      <div>&nbsp;</div>\r\n                    </td>\r\n                    <td class=\"w100 text-right\" *ngIf=\"orderStatus == 'Approved'\">\r\n                      <div>&nbsp;</div>\r\n                    </td>\r\n                    <td class=\"w200\">\r\n                      <div>&nbsp;</div>\r\n                    </td>\r\n                    <td class=\"w200\" *ngIf=\"orderStatus == 'Reject' || orderStatus == 'Draft'\">\r\n                      <div>&nbsp;</div>\r\n                    </td>\r\n                  </tr>\r\n                </ng-container>\r\n              </table>\r\n            </div>\r\n          </div>\r\n          <ng-container *ngIf=\"primary_order_list.length <= 0\">\r\n            <app-not-result-found></app-not-result-found>\r\n          </ng-container>\r\n        </div>\r\n        <div class=\"fab-btns\" *ngIf=\"login_data.user_type=='DMS'\">\r\n          <button mat-fab class=\"pulse\" color=\"primary\" routerLink=\"add-primary-order\">\r\n            <i class=\"material-icons\">add</i>\r\n            Add Order\r\n          </button>\r\n        </div>\r\n      </div>\r\n    </ng-container>\r\n\r\n    <ng-container *ngIf=\"tabType== 'Secondary Order' || tabType == 'Stock Order'\">\r\n      <div style=\"margin: -10px -10px 0px -10px;\">\r\n\r\n        <!-- <div class=\"tab-surface\">\r\n                <button *ngFor=\"let row of Secondary_calenderInfo; let i =index;\" mat-button\r\n                    [ngClass]=\"SecOrderMonth == row.month && SecOrderYear == row.year ? 'active' : ''\"\r\n                    (click)=\"getSecondaryOrder('',row.month,row.year, orderStatus);\">{{row.month_name}} {{row.year}}\r\n                </button>\r\n            </div> -->\r\n\r\n        <div class=\"tools-container no-sticky\">\r\n          <h2>Secondary Order</h2>\r\n          <div class=\"left-auto df flex-gap-10\">\r\n            <a mat-icon-button matTooltip=\"Refresh\" (click)=\"refresh(tabType)\">\r\n              <i class=\"material-icons\">refresh</i>\r\n            </a>\r\n\r\n            <div class=\"pagination\" *ngIf=\"secondary_order_list.length > 0\">\r\n              <div class=\"pagination-content\">\r\n                Pages\r\n                <span>{{pagenumber}}</span>\r\n                of\r\n                <span>{{total_page}}</span>\r\n              </div>\r\n              <div class=\"page-nav\">\r\n                <button mat-icon-button matTooltip=\"Older\" (click)=\"pervious('secondary')\"\r\n                  [disabled]=\"start == 0 || total_page == 0\">\r\n                  <i class=\"material-icons\">navigate_before</i>\r\n                </button>\r\n                <button mat-icon-button matTooltip=\"Newer\" (click)=\"nextPage('secondary')\"\r\n                  [disabled]=\"pagenumber == total_page || total_page == 0 \">\r\n                  <i class=\"material-icons\">navigate_next</i>\r\n                </button>\r\n              </div>\r\n            </div>\r\n            <div class=\"mat-tabbar\">\r\n              <button mat-button [ngClass]=\"orderStatus == 'Pending' ? 'active' : ''\"\r\n                (click)=\"orderStatus = 'Pending';getSecondaryOrder('',SecOrderMonth,SecOrderYear,orderStatus);\">\r\n                <i class=\"material-icons\">pending_actions</i>\r\n                Pending ({{secondary__count.Pending}})\r\n              </button>\r\n              <button mat-button [ngClass]=\"orderStatus == 'Approved' ? 'active' : ''\"\r\n                (click)=\"orderStatus = 'Approved';getSecondaryOrder('',SecOrderMonth,SecOrderYear,orderStatus);\">\r\n                <i class=\"material-icons\">task_alt</i>\r\n                Approved ({{secondary__count.Approved}})\r\n              </button>\r\n              <button mat-button [ngClass]=\"orderStatus == 'Reject' ? 'active' : ''\"\r\n                (click)=\"orderStatus = 'Reject';getSecondaryOrder('',SecOrderMonth,SecOrderYear,orderStatus);\">\r\n                <i class=\"material-icons\">unpublished</i>\r\n                Reject ({{secondary__count.Reject}})\r\n              </button>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"cs-table horizontal-scroll\" style=\"width: 100%\">\r\n          <div class=\"sticky-head\">\r\n            <div class=\"table-head\">\r\n              <table>\r\n                <tr>\r\n                  <th class=\"w50\">S NO</th>\r\n                  <th class=\"w110\">Date</th>\r\n                  <th class=\"w110\">Created By</th>\r\n                  <th class=\"w80\">Order Id</th>\r\n                  <th class=\"w100\">Customer Type</th>\r\n                  <th class=\"w200\">Customer Details</th>\r\n                  <th class=\"w80\">Order Type</th>\r\n                  <th class=\"w80 text-center\">Total Items</th>\r\n                  <th class=\"w90 text-right\">{{tabType== 'Secondary Order' ? 'QTY.' : 'No. of sheet'}}\r\n                  </th>\r\n                  <th class=\"w200\">Remark</th>\r\n                </tr>\r\n              </table>\r\n            </div>\r\n\r\n            <div class=\"table-head border-top\">\r\n              <table>\r\n                <tr>\r\n                  <th class=\"w50\">&nbsp;</th>\r\n                  <th class=\"w110\">\r\n                    <div class=\"th-search-acmt\">\r\n                      <mat-form-field class=\"cs-input date-column infix-bodr\">\r\n                        <input matInput [matDatepicker]=\"picker\" placeholder=\"Date\" name=\"date_created\"\r\n                          [(ngModel)]=\"filter.date_created\" (dateChange)=\"date_format(tabType)\" [max]=\"today_date\"\r\n                          disabled>\r\n                        <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\r\n                        <mat-datepicker #picker disabled=\"false\"></mat-datepicker>\r\n                      </mat-form-field>\r\n                    </div>\r\n                  </th>\r\n                  <th class=\"w110\">\r\n                    <div class=\"th-search-acmt\">\r\n                      <mat-form-field class=\"example-full-width cs-input select-input\">\r\n                        <input matInput placeholder=\"Search...\" type=\"text\" name=\"created_by\"\r\n                          [(ngModel)]=\"filter.created_by\"\r\n                          (keyup.enter)=\"!filter.created_by ?  refresh(tabType) : getSecondaryOrder('',currentMonth_no,currentYear, orderStatus)\">\r\n                      </mat-form-field>\r\n\r\n                    </div>\r\n                  </th>\r\n                  <th class=\"w80\">\r\n                    <div class=\"th-search-acmt\">\r\n                      <mat-form-field class=\"example-full-width cs-input select-input\">\r\n                        <input matInput placeholder=\"Search...\" type=\"text\" name=\"order_no\"\r\n                          [(ngModel)]=\"filter.order_no\"\r\n                          (keyup.enter)=\"!filter.order_no ?  refresh(tabType) : getSecondaryOrder('',currentMonth_no,currentYear, orderStatus)\">\r\n                      </mat-form-field>\r\n                    </div>\r\n                  </th>\r\n                  <th class=\"w100\">\r\n                    <div class=\"th-search-acmt\">\r\n                      <mat-form-field class=\"example-full-width cs-input select-input\">\r\n                        <input matInput placeholder=\"Search...\" type=\"text\" name=\"network_type\"\r\n                          [(ngModel)]=\"filter.network_type\"\r\n                          (keyup.enter)=\"!filter.network_type ?  refresh(tabType) : getSecondaryOrder('',currentMonth_no,currentYear, orderStatus)\">\r\n                      </mat-form-field>\r\n                    </div>\r\n                  </th>\r\n                  <th class=\"w200\">\r\n                    <div class=\"th-search-acmt\">\r\n                      <mat-form-field class=\"example-full-width cs-input select-input\">\r\n                        <input matInput placeholder=\"Search...\" type=\"text\" name=\"company_name\"\r\n                          [(ngModel)]=\"filter.company_name\"\r\n                          (keyup.enter)=\"!filter.company_name ?  refresh(tabType) : getSecondaryOrder('',currentMonth_no,currentYear, orderStatus)\">\r\n                      </mat-form-field>\r\n                    </div>\r\n                  </th>\r\n                  <th class=\"w80 text-center\">&nbsp;</th>\r\n                  <th class=\"w80 text-center\">&nbsp;</th>\r\n                  <th class=\"w90 text-right\">&nbsp;</th>\r\n                  <th class=\"w200\">&nbsp;</th>\r\n                </tr>\r\n              </table>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"table-container\">\r\n            <div class=\"table-content\">\r\n              <table>\r\n                <ng-container *ngIf=\"!secondaryLoader\">\r\n                  <tr *ngFor=\"let row of secondary_order_list; let i =index;\">\r\n                    <td class=\"w50\">{{i+1+sr_no}}</td>\r\n                    <td class=\"w110\">{{row.date_created | date : 'd MMM y , h:mm a' }}</td>\r\n                    <td class=\"w110\">{{row.created_by_name}}</td>\r\n                    <td class=\"w80\">\r\n                      <a class=\"link-btn\" [routerLink]=\"['secondary-order-detail/', row.id ]\"\r\n                        [queryParams]=\"{'id':row.id, 'status':orderStatus}\"\r\n                        routerLinkActive=\"active\">{{row.order_no}}</a>\r\n                    </td>\r\n                    <td class=\"w100\">{{row.network_type ? row.network_type : ''}}</td>\r\n                    <td class=\"w200\">{{row.company_name}} - ({{row.name}} {{row.mobile}})</td>\r\n                    <td class=\"w80 text-center\" [ngStyle]=\"{'color': row.order_flag === 'In' ? 'green' : 'red'}\">\r\n                      {{row.order_flag}}</td>\r\n                    <td class=\"w80 text-center\">{{row.order_item}}</td>\r\n                    <td class=\"w90 text-right\">{{row.total_order_qty}}</td>\r\n                    <td class=\"w200\">{{row.remark}}</td>\r\n                  </tr>\r\n                </ng-container>\r\n                <ng-container *ngIf=\"secondaryLoader\">\r\n                  <tr class=\"sk-loading\" *ngFor=\"let row of [].constructor(10)\">\r\n                    <td class=\"w50\">\r\n                      <div>&nbsp;</div>\r\n                    </td>\r\n                    <td class=\"w110\">\r\n                      <div>&nbsp;</div>\r\n                    </td>\r\n                    <td class=\"w110\">\r\n                      <div>&nbsp;</div>\r\n                    </td>\r\n                    <td class=\"w80\">\r\n                      <div>&nbsp;</div>\r\n                    </td>\r\n                    <td class=\"w100\">\r\n                      <div>&nbsp;</div>\r\n                    </td>\r\n                    <td class=\"w200\">\r\n                      <div>&nbsp;</div>\r\n                    </td>\r\n                    <td class=\"w80 text-center\">\r\n                      <div>&nbsp;</div>\r\n                    </td>\r\n                    <td class=\"w90 text-right\">\r\n                      <div>&nbsp;</div>\r\n                    </td>\r\n                    <td class=\"w200\">\r\n                      <div>&nbsp;</div>\r\n                    </td>\r\n                  </tr>\r\n                </ng-container>\r\n              </table>\r\n            </div>\r\n          </div>\r\n          <ng-container *ngIf=\"secondary_order_list.length <= 0\">\r\n            <app-not-result-found></app-not-result-found>\r\n          </ng-container>\r\n        </div>\r\n        <div class=\"fab-btns\" *ngIf=\"login_data.user_type=='DMS'\">\r\n          <button mat-fab class=\"pulse\" color=\"primary\" routerLink=\"secondary-order-add\">\r\n            <i class=\"material-icons\">add</i>\r\n            Add Order\r\n          </button>\r\n        </div>\r\n\r\n      </div>\r\n    </ng-container>\r\n\r\n\r\n\r\n  </div>\r\n\r\n\r\n  <!-- #################################service engineer detail page####################################### -->\r\n\r\n\r\n\r\n  <div class=\"container pb50\" [ngClass]=\"{'pt10 pl10 pr10' :tabType== 'Profile'}\">\r\n    <ng-container *ngIf=\"tabType == 'Profile'\">\r\n      <div class=\"row\">\r\n\r\n      </div>\r\n    </ng-container>\r\n  </div>\r\n\r\n\r\n\r\n\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/user/sale-user-detail/sale-user-detail.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/user/sale-user-detail/sale-user-detail.component.ts ***!
  \*********************************************************************/
/*! exports provided: SaleUserDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SaleUserDetailComponent", function() { return SaleUserDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _router_animation_router_animation_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../router-animation/router-animation.component */ "./src/app/router-animation/router-animation.component.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var src_services_DatabaseService__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/_services/DatabaseService */ "./src/_services/DatabaseService.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_dialog_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/dialog.service */ "./src/app/dialog.service.ts");
/* harmony import */ var src_app_dialog_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/dialog.component */ "./src/app/dialog.component.ts");
/* harmony import */ var src_app_localstorage_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/localstorage.service */ "./src/app/localstorage.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/common */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _designation_designation_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../designation/designation.component */ "./src/app/user/designation/designation.component.ts");
/* harmony import */ var ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng6-toastr-notifications */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/ng6-toastr-notifications/fesm5/ng6-toastr-notifications.js");
/* harmony import */ var src_app_image_module_image_module_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/image-module/image-module.component */ "./src/app/image-module/image-module.component.ts");











// import { DH_CHECK_P_NOT_PRIME } from 'constants';
// import { ToastrManager } from 'ng6-toastr-notifications';



var SaleUserDetailComponent = /** @class */ (function () {
    function SaleUserDetailComponent(alert, toast, router, location, service, dialog, rout, editdialog, session, route, sanitizer) {
        var _this = this;
        this.alert = alert;
        this.toast = toast;
        this.router = router;
        this.location = location;
        this.service = service;
        this.dialog = dialog;
        this.rout = rout;
        this.editdialog = editdialog;
        this.session = session;
        this.route = route;
        this.sanitizer = sanitizer;
        this.detail = {};
        this.galleryLoader = true;
        this.skLoading = false;
        this.filter = {};
        this.orderStatus = 'Pending';
        this.count = [];
        this.login_data = [];
        this.assign_module_data = [];
        this.checkin_data = [];
        this.UserGalleryList = [];
        this.pagenumber = '';
        this.start = 0;
        this.page_limit = 20;
        this.tabType = 'Profile';
        this.activeIndex = 0;
        this.netWorkName = 'Channel Partner';
        this.netWorkType = 1;
        this.UserCheckinGallery = [];
        this.url1 = '';
        this.dataToReceive = {
            type: '',
            netWorkName: '',
            padding0: ''
        };
        this.primary_order_list = [];
        this.calenderInfo = [];
        this.primary__count = {};
        this.primaryLoader = false;
        this.secondary_order_list = [];
        this.Secondary_calenderInfo = [];
        this.secondary__count = {};
        this.secondaryLoader = false;
        this.route.params.subscribe(function (params) {
            _this.user_id = params.id;
            _this.service.currentUserID = params.id;
            _this.login_data = _this.session.getSession();
            _this.login_data = _this.login_data.value;
            _this.login_data = _this.login_data.data;
            _this.monthNames = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];
            _this.date = new Date();
            _this.currentMonth = _this.monthNames[_this.date.getMonth()];
            _this.currentYear = _this.date.getFullYear();
            _this.currentMonth_no = _this.date.getMonth() + 1;
            _this.userData = JSON.parse(localStorage.getItem('st_user'));
            _this.userId = _this.userData['data']['id'];
            _this.userName = _this.userData['data']['name'];
            _this.url = _this.service.uploadUrl + 'profile/';
            _this.url1 = _this.service.uploadUrl;
            console.log(_this.url1);
            _this.userDetail();
        });
        this.today_date = new Date();
    }
    SaleUserDetailComponent.prototype.ngOnInit = function () {
    };
    SaleUserDetailComponent.prototype.isPdf = function (file) {
        return !!file && file.toLowerCase().endsWith('.pdf');
    };
    SaleUserDetailComponent.prototype.insuranceCardUrl = function (file) {
        if (file !== this._insuranceCardFile) {
            this._insuranceCardFile = file;
            this._insuranceCardSafeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.service.uploadUrl + 'insurance_card/' + file);
        }
        return this._insuranceCardSafeUrl;
    };
    SaleUserDetailComponent.prototype.back = function () {
        this.location.back();
    };
    SaleUserDetailComponent.prototype.distributorDetail = function (type, name) {
        this.netWorkName = name;
        this.netWorkType = type;
    };
    SaleUserDetailComponent.prototype.setActiveIndex = function (index) {
        this.activeIndex = index;
    };
    SaleUserDetailComponent.prototype.handleItemClick = function (data) {
        // Perform your action here
        // You can call any method or execute any logic you need.
        console.log(data, "line 83");
    };
    SaleUserDetailComponent.prototype.userDetail = function () {
        var _this = this;
        this.skLoading = true;
        this.service.post_rqst({ 'id': this.user_id }, "Master/salesUserDetail").subscribe(function (result) {
            _this.detail = result['sales_detail'];
            _this.skLoading = false;
            // if (this.detail.user_type == 'System User') {
            _this.assign_module_data = _this.detail.assign_module;
            // }
        });
    };
    SaleUserDetailComponent.prototype.assign_module = function (module_name, event, index) {
        var _this = this;
        if (event.checked) {
            this.assign_module_data[index][module_name] = 'true';
            this.assign_module_data[index]['view'] = 'true';
        }
        else {
            this.assign_module_data[index][module_name] = 'false';
        }
        this.service.post_rqst(this.assign_module_data[index], "user/update_user_module").subscribe(function (response) {
            _this.userDetail();
        });
    };
    SaleUserDetailComponent.prototype.get_UserGallery = function () {
        var _this = this;
        this.galleryLoader = true;
        this.service.post_rqst({ 'user_id': this.user_id }, "Master/userGallery").subscribe(function (resp) {
            if (resp['statusCode'] == 200) {
                _this.UserGalleryList = resp['attendence'];
                _this.UserCheckinGallery = resp['checkin'];
                _this.galleryLoader = false;
            }
            else {
                _this.galleryLoader = false;
                _this.toast.errorToastr(resp['statusMsg']);
            }
        }, function () { _this.galleryLoader = false; _this.toast.errorToastr('Something went wrong'); });
    };
    SaleUserDetailComponent.prototype.getPrimaryOrder = function (action, month, year, status) {
        var _this = this;
        if (action === void 0) { action = ''; }
        if (action == "refresh") {
            this.primary_order_list = [];
            this.start = 0;
        }
        this.primaryLoader = true;
        this.OrderMonth = month;
        this.OrderYear = year;
        if (this.pagenumber > this.total_page) {
            this.pagenumber = this.total_page;
            this.start = this.pageCount - this.page_limit;
        }
        if (this.start < 0) {
            this.start = 0;
        }
        // 'month': Number(month),
        // 'year': Number(year),
        var id = { "filter": this.filter, 'id': this.user_id };
        this.service.post_rqst({ "id": this.user_id, 'status': status, 'filter': this.filter, 'start': this.start, 'pagelimit': this.page_limit }, "CustomerNetwork/drPrimaryOrderList").subscribe(function (result) {
            if (result['statusCode'] == 200) {
                _this.calenderInfo = result['calenderInfo'];
                _this.primary__count = result['count'];
                _this.primary_order_list = result['order_list'];
                _this.primaryLoader = false;
                if (status == 'Pending') {
                    _this.pageCount = _this.primary__count.Pending;
                    _this.total_page = Math.ceil(_this.pageCount / _this.page_limit);
                }
                else if (status == 'Approved') {
                    _this.pageCount = _this.primary__count.Approved;
                    _this.total_page = Math.ceil(_this.pageCount / _this.page_limit);
                }
                else if (status == 'Reject') {
                    _this.pageCount = _this.primary__count.Reject;
                    _this.total_page = Math.ceil(_this.pageCount / _this.page_limit);
                }
                else if (status == 'Draft') {
                    _this.pageCount = _this.primary__count.Draft;
                    _this.total_page = Math.ceil(_this.pageCount / _this.page_limit);
                }
                else if (status == 'Dispatched') {
                    _this.pageCount = _this.primary__count.Dispatched;
                    _this.total_page = Math.ceil(_this.pageCount / _this.page_limit);
                }
                else if (status == 'completeDispatched') {
                    _this.pageCount = _this.primary__count.completeDispatched;
                    _this.total_page = Math.ceil(_this.pageCount / _this.page_limit);
                }
                else if (status == 'orderPartial') {
                    _this.pageCount = _this.primary__count.orderPartial;
                    _this.total_page = Math.ceil(_this.pageCount / _this.page_limit);
                }
                else if (status == 'partialDispatched') {
                    _this.pageCount = _this.primary__count.partialDispatched;
                    _this.total_page = Math.ceil(_this.pageCount / _this.page_limit);
                }
                else if (status == 'dispatchPlanning') {
                    _this.pageCount = _this.primary__count.dispatchPlanning;
                    _this.total_page = Math.ceil(_this.pageCount / _this.page_limit);
                }
                else {
                    _this.pageCount = _this.count.Dispact;
                    _this.total_page = Math.ceil(_this.pageCount / _this.page_limit);
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
                for (var index = 0; index < _this.calenderInfo.length; index++) {
                    var date = new Date();
                    date.setMonth(_this.calenderInfo[index].month - 1);
                    var MonthName = '';
                    MonthName = date.toLocaleString('en-US', { month: 'short' });
                    _this.calenderInfo[index].month_name = MonthName;
                }
            }
            else {
                _this.primaryLoader = false;
                _this.toast.errorToastr(result['statusMsg']);
            }
        });
    };
    SaleUserDetailComponent.prototype.getSecondaryOrder = function (action, month, year, status) {
        var _this = this;
        if (action === void 0) { action = ''; }
        if (action == "refresh") {
            this.secondary_order_list = [];
            this.start = 0;
        }
        this.secondaryLoader = true;
        this.SecOrderMonth = month;
        this.SecOrderYear = year;
        if (this.pagenumber > this.total_page) {
            this.pagenumber = this.total_page;
            this.start = this.pageCount - this.page_limit;
        }
        if (this.start < 0) {
            this.start = 0;
        }
        if (this.login_data.user_type == 'DMS') {
            this.user_type = this.login_data.type;
        }
        if (this.tabType == 'Secondary Order') {
            this.filter.type = 'order';
        }
        else {
            this.filter.type = 'stock';
        }
        // 'month': Number(month), 'year': Number(year)
        this.service.post_rqst({ "id": this.user_id, 'status': status, 'type': this.user_type, 'start': this.start, 'pagelimit': this.page_limit, 'filter': this.filter }, "CustomerNetwork/drSecondaryOrderList").subscribe(function (result) {
            if (result['statusCode'] == 200) {
                _this.Secondary_calenderInfo = result['calenderInfo'];
                _this.secondary__count = result['count'];
                _this.secondaryLoader = false;
                _this.secondary_order_list = result['order_list'];
                if (status == 'Pending') {
                    _this.pageCount = _this.secondary__count.Pending;
                    _this.total_page = Math.ceil(_this.pageCount / _this.page_limit);
                }
                else if (status == 'Approved') {
                    _this.pageCount = _this.secondary__count.Approved;
                    _this.total_page = Math.ceil(_this.pageCount / _this.page_limit);
                }
                else if (status == 'Reject') {
                    _this.pageCount = _this.secondary__count.Reject;
                    _this.total_page = Math.ceil(_this.pageCount / _this.page_limit);
                }
                else if (status == 'Draft') {
                    _this.pageCount = _this.secondary__count.Draft;
                    _this.total_page = Math.ceil(_this.pageCount / _this.page_limit);
                }
                else if (status == 'Dispatched') {
                    _this.pageCount = _this.secondary__count.Dispatched;
                    _this.total_page = Math.ceil(_this.pageCount / _this.page_limit);
                }
                else {
                    _this.pageCount = _this.count.Dispact;
                    _this.total_page = Math.ceil(_this.pageCount / _this.page_limit);
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
                for (var index = 0; index < _this.Secondary_calenderInfo.length; index++) {
                    var date = new Date();
                    date.setMonth(_this.Secondary_calenderInfo[index].month - 1);
                    var MonthName = '';
                    MonthName = date.toLocaleString('en-US', { month: 'short' });
                    _this.Secondary_calenderInfo[index].month_name = MonthName;
                }
            }
            else {
                _this.secondary_order_list = [];
                _this.secondaryLoader = false;
                _this.toast.errorToastr(result['statusMsg']);
            }
        });
    };
    SaleUserDetailComponent.prototype.openDialog = function (type) {
        var _this = this;
        var dialogRef = this.dialog.open(_designation_designation_component__WEBPACK_IMPORTED_MODULE_11__["DesignationComponent"], {
            width: '750px',
            panelClass: 'cs-modal',
            disableClose: true,
            data: {
                'type': type,
                'user_detail': this.detail
            }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result == true) {
                _this.userDetail();
            }
        });
    };
    SaleUserDetailComponent.prototype.reset = function () {
        var _this = this;
        this.alert.confirm("Do You Want To Reset Attendance Punchin Address!").then(function (result) {
            if (result) {
                _this.service.post_rqst({ 'user_id': _this.detail.id }, "Master/resetGeolocation")
                    .subscribe(function (resp) {
                    if (resp['statusCode'] == 200) {
                        _this.toast.successToastr(resp['statusMsg']);
                        _this.userDetail();
                    }
                    else {
                        _this.toast.errorToastr(resp['statusMsg']);
                    }
                });
            }
        });
    };
    SaleUserDetailComponent.prototype.goToImage = function (image) {
        var dialogRef = this.dialog.open(src_app_image_module_image_module_component__WEBPACK_IMPORTED_MODULE_13__["ImageModuleComponent"], {
            panelClass: 'Image-modal',
            data: {
                'image': image,
                'type': 'base64'
            }
        });
        dialogRef.afterClosed().subscribe(function (result) {
        });
    };
    SaleUserDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sale-user-detail',
            template: __webpack_require__(/*! ./sale-user-detail.component.html */ "./src/app/user/sale-user-detail/sale-user-detail.component.html"),
            animations: [Object(_router_animation_router_animation_component__WEBPACK_IMPORTED_MODULE_2__["slideToTop"])()]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_dialog_component__WEBPACK_IMPORTED_MODULE_8__["DialogComponent"], ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_12__["ToastrManager"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"], _angular_common__WEBPACK_IMPORTED_MODULE_10__["Location"], src_services_DatabaseService__WEBPACK_IMPORTED_MODULE_4__["DatabaseService"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialog"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"], src_app_dialog_service__WEBPACK_IMPORTED_MODULE_7__["DialogService"],
            src_app_localstorage_service__WEBPACK_IMPORTED_MODULE_9__["sessionStorage"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"], _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"]])
    ], SaleUserDetailComponent);
    return SaleUserDetailComponent;
}());



/***/ }),

/***/ "./src/app/user/sale-user-list/sale-user-list.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/user/sale-user-list/sale-user-list.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ng-template #excelDatePickerDialog>\r\n    <div mat-dialog-title style=\"display:flex;align-items:center;justify-content:space-between;margin:0;\">\r\n        <h2 style=\"margin:0;font-size:16px;font-weight:600;\">Select Date Range</h2>\r\n        <button mat-icon-button (click)=\"dialogRef.close()\"><mat-icon>close</mat-icon></button>\r\n    </div>\r\n    <div mat-dialog-content style=\"padding-top:16px;\">\r\n        <mat-form-field style=\"width:100%;\">\r\n            <mat-label>From Date</mat-label>\r\n            <input matInput type=\"date\" [(ngModel)]=\"excelFromDate\">\r\n        </mat-form-field>\r\n        <mat-form-field style=\"width:100%;margin-top:8px;\">\r\n            <mat-label>To Date</mat-label>\r\n            <input matInput type=\"date\" [(ngModel)]=\"excelToDate\">\r\n        </mat-form-field>\r\n    </div>\r\n    <div mat-dialog-actions align=\"end\">\r\n        <button mat-button (click)=\"dialogRef.close()\">Cancel</button>\r\n        <button mat-raised-button color=\"primary\" (click)=\"onDateOverlayDownload()\">Download</button>\r\n    </div>\r\n</ng-template>\r\n\r\n<div class=\"main-container\">\r\n    <div class=\"tools-container\">\r\n        <div class=\"mat-tabbar\">\r\n            <button mat-button [ngClass]=\"userType == 'Sales User' ? 'active' : ''\"\r\n                (click)=\"getUserList('Sales User'); userType = 'Sales User'\"><i\r\n                    class=\"material-icons\">people_alt</i>Sales User ({{sales_count}})</button>\r\n\r\n\r\n            <button mat-button [ngClass]=\"userType == 'System User' ? 'active' : ''\"\r\n                (click)=\"getUserList('System User'); userType = 'System User'\"><i\r\n                    class=\"material-icons\">computer</i>System User ({{system_count}})</button>\r\n\r\n            <!-- <button mat-button [ngClass]=\"userType == 'Service Engineer' ? 'active' : ''\"\r\n                (click)=\"getUserList('Service Engineer'); userType = 'Service Engineer'\"><i\r\n                    class=\"material-icons\">computer</i>Service Engineer({{service_count}})</button> -->\r\n\r\n            <button mat-button [ngClass]=\"userType == 'Hierarchy' ? 'active' : ''\"\r\n                (click)=\"getHierarchy(); userType = 'Hierarchy'\">\r\n                <i class=\"material-icons\">reduce_capacity</i>Hierarchy\r\n            </button>\r\n            <button mat-button [ngClass]=\"userType == 'Inactive User' ? 'active' : ''\"\r\n                (click)=\"getUserList('Inactive User'); userType = 'Inactive User'\"><i\r\n                    class=\"material-icons\">people_alt</i>Left Employee ({{Inactivecount}})</button>\r\n\r\n            <button mat-button [ngClass]=\"userType == 'Blocked User' ? 'active' : ''\"\r\n                (click)=\"getUserList('Blocked User'); userType = 'Blocked User'\">\r\n                <i class=\"material-icons\">block</i>Blocked User ({{blocked_count}})\r\n            </button>\r\n\r\n\r\n        </div>\r\n        <div class=\"left-auto df ac flex-gap-10\" *ngIf=\"userType != 'Hierarchy'\">\r\n            <button mat-icon-button matTooltip=\"Refresh\" (click)=\"refresh()\">\r\n                <i class=\"material-icons\">refresh</i>\r\n            </button>\r\n            <button mat-icon-button matTooltip=\"Filter\" (click)=\"openBottomSheet()\">\r\n                <i class=\"material-icons\">filter_alt</i>\r\n            </button>\r\n            <button mat-icon-button matTooltip=\"Sorting\" (click)=\"sortData()\">\r\n                <i class=\"material-icons\">swap_vert</i>\r\n            </button>\r\n            <div class=\"pagination\" *ngIf=\"userlist.length > 0 \">\r\n                <div class=\"pagination-content\">\r\n                    Pages\r\n                    <span>{{pagenumber}}</span>\r\n                    of\r\n                    <span>{{total_page}}</span>\r\n                </div>\r\n                <div class=\"page-nav\">\r\n                    <button mat-icon-button matTooltip=\"Older\" (click)=\"pervious()\" [disabled]=\"start == 0\">\r\n                        <i class=\"material-icons\">navigate_before</i>\r\n                    </button>\r\n                    <button mat-icon-button matTooltip=\"Newer\" (click)=\"nextPage()\"\r\n                        [disabled]=\"pagenumber == total_page \">\r\n                        <i class=\"material-icons\">navigate_next</i>\r\n                    </button>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"container container-scroll\" *ngIf=\"userType != 'Hierarchy'\">\r\n        <div class=\"cs-table horizontal-scroll\">\r\n            <div class=\"sticky-head\">\r\n                <div class=\"table-head\">\r\n                    <table>\r\n                        <tr>\r\n                            <th class=\"w50 text-center\"></th>\r\n                            <th class=\"w100\">Date Created</th>\r\n                            <th class=\"w100\">Created By</th>\r\n                            <th class=\"w120\">Designation</th>\r\n                            <th class=\"w160\">Name</th>\r\n                            <th class=\"w90\">Mobile No.</th>\r\n                            <th class=\"w90\">Official Mobile No.</th>\r\n                            <th class=\"w100\" *ngIf=\"userType == 'Inactive User'\">In-activation Date</th>\r\n                            <th class=\"w100\" *ngIf=\"userType == 'Inactive User'\">Reason Of Leave</th>\r\n                            <th class=\"w200\" *ngIf=\"userType == 'Inactive User'\">Remarks</th>\r\n                            <th class=\"w120\">Employee Code</th>\r\n                            <th class=\"w100\">DOB</th>\r\n                            <th class=\"w250\">Email ID</th>\r\n                            <th class=\"w70\">Weekly off</th>\r\n                            <th class=\"w100\" *ngIf=\"userType == 'Sales User'\">Base Station</th>\r\n                            <th class=\"w200\" *ngIf=\"userType == 'Sales User'\">Working State</th>\r\n                            <th *ngIf=\"userType == 'Sales User'\" class=\"w160\">Reporting Manager</th>\r\n                            <th *ngIf=\"userType == 'Sales User'\" class=\"w100\">Manager Code</th>\r\n                            <th *ngIf=\"userType == 'Sales User'\" class=\"w100\">Approval Authority</th>\r\n\r\n                            <th class=\"w100\">Updated By</th>\r\n                            <th class=\"w100\">Updated At</th>\r\n                            <th class=\"w100 text-center\" *ngIf=\"logined_user_data2.edit_users_master=='1'\">GeoFencing\r\n                            </th>\r\n                            <th class=\"w100 text-center\" *ngIf=\"logined_user_data2.edit_users_master=='1'\">Camera</th>\r\n                            <th class=\"w120 text-center\" *ngIf=\"logined_user_data2.edit_users_master=='1'\">Background\r\n                                Tracking</th>\r\n                            <th class=\"w50 text-center\" *ngIf=\"logined_user_data2.edit_users_master=='1'\">Status</th>\r\n                            <th class=\"w120 text-center\" *ngIf=\"userType == 'Sales User'\">Third Party App</th>\r\n                            <th *ngIf=\"userType == 'Sales User'\" class=\"w110 text-center\">Action</th>\r\n                            <th *ngIf=\"userType == 'System User'\" class=\"w110 text-center\">Action</th>\r\n                        </tr>\r\n                    </table>\r\n                </div>\r\n                <div class=\"table-head border-top\">\r\n                    <table>\r\n                        <tr>\r\n                            <th class=\"w50 text-center\"></th>\r\n                            <th class=\"w100\">\r\n                                <div class=\"th-search-acmt\">\r\n                                    <mat-form-field class=\"cs-input date-column infix-bodr\">\r\n                                        <input matInput [matDatepicker]=\"picker\" placeholder=\"Date\" name=\"date_created\"\r\n                                            #date_created=\"ngModel\" [(ngModel)]=\"filter.date_created\"\r\n                                            (ngModelChange)=\"date_format()\" [max]=\"today_date\" readonly>\r\n                                        <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\r\n                                        <mat-datepicker #picker></mat-datepicker>\r\n                                    </mat-form-field>\r\n                                </div>\r\n                            </th>\r\n                            <th class=\"w100\">\r\n                                <div class=\"th-search-acmt\">\r\n                                    <mat-form-field>\r\n                                        <input matInput placeholder=\"Search ...\" (keyup.enter)=\"getUserList(userType)\"\r\n                                            #created_by_name=\"ngModel\" [(ngModel)]=\"filter.created_by_name\">\r\n                                    </mat-form-field>\r\n                                </div>\r\n\r\n                            </th>\r\n                            <th class=\"w120\">\r\n                                <div class=\"th-search-acmt\">\r\n                                    <mat-form-field>\r\n                                        <input matInput placeholder=\"Search ...\" (keyup.enter)=\"getUserList(userType)\"\r\n                                            #designation_name=\"ngModel\" [(ngModel)]=\"filter.designation_name\">\r\n                                    </mat-form-field>\r\n                                </div>\r\n\r\n                            </th>\r\n                            <th class=\"w160\">\r\n                                <div class=\"th-search-acmt\">\r\n                                    <mat-form-field>\r\n                                        <input matInput placeholder=\"Search ...\" (keyup.enter)=\"getUserList(userType)\"\r\n                                            [(ngModel)]=\"filter.name\">\r\n                                    </mat-form-field>\r\n                                </div>\r\n                            </th>\r\n                            <th class=\"w90\">\r\n                                <div class=\"th-search-acmt\">\r\n                                    <mat-form-field>\r\n                                        <input matInput placeholder=\"Search ...\" (keyup.enter)=\"getUserList(userType)\"\r\n                                            [(ngModel)]=\"filter.contact_01\">\r\n                                    </mat-form-field>\r\n                                </div>\r\n                            </th>\r\n                            <th class=\"w90\">\r\n                                <div class=\"th-search-acmt\">\r\n                                    <mat-form-field>\r\n                                        <input matInput placeholder=\"Search ...\" (keyup.enter)=\"getUserList(userType)\"\r\n                                            [(ngModel)]=\"filter.offmobileno\">\r\n                                    </mat-form-field>\r\n                                </div>\r\n                            </th>\r\n                            <th class=\"w100\" *ngIf=\"userType == 'Inactive User'\">\r\n\r\n                            </th>\r\n                            <th class=\"w100\" *ngIf=\"userType == 'Inactive User'\">\r\n\r\n                            </th>\r\n                            <th class=\"w200\" *ngIf=\"userType == 'Inactive User'\">\r\n\r\n                            </th>\r\n                            <th class=\"w120\">\r\n                                <div class=\"th-search-acmt\">\r\n                                    <mat-form-field>\r\n                                        <input matInput placeholder=\"Search ...\" (keyup.enter)=\"getUserList(userType)\"\r\n                                            [(ngModel)]=\"filter.employee_id\">\r\n                                    </mat-form-field>\r\n                                </div>\r\n                            </th>\r\n                            <th class=\"w100\">\r\n                                <div class=\"th-search-acmt\">\r\n                                    <mat-form-field class=\"cs-input date-column infix-bodr\">\r\n                                        <input matInput [matDatepicker]=\"dobPicker\" placeholder=\"Date\" name=\"dob\"\r\n                                            [(ngModel)]=\"filter.dob\" (ngModelChange)=\"date_format_dob()\" readonly>\r\n                                        <mat-datepicker-toggle matSuffix [for]=\"dobPicker\"></mat-datepicker-toggle>\r\n                                        <mat-datepicker #dobPicker></mat-datepicker>\r\n                                    </mat-form-field>\r\n                                </div>\r\n                            </th>\r\n                            <th class=\"w250\">\r\n                                <div class=\"th-search-acmt\">\r\n                                    <mat-form-field>\r\n                                        <input type=\"text\" matInput placeholder=\"Search ...\"\r\n                                            (keyup.enter)=\"getUserList(userType)\" [(ngModel)]=\"filter.email\">\r\n                                    </mat-form-field>\r\n                                </div>\r\n                            </th>\r\n\r\n                            <th class=\"w70\">\r\n                                <div class=\"th-search-acmt\">\r\n                                    <mat-form-field class=\"cs-input select-input\">\r\n                                        <mat-select name=\"weekly_off\" [(ngModel)]=\"filter.weekly_off\"\r\n                                            (selectionChange)=\"getUserList(userType)\">\r\n                                            <mat-option value=\"\">All</mat-option>\r\n                                            <mat-option value=\"Sunday\">Sunday</mat-option>\r\n                                            <mat-option value=\"Monday\">Monday</mat-option>\r\n                                            <mat-option value=\"Tuesday\">Tuesday</mat-option>\r\n                                            <mat-option value=\"Wednesday\">Wednesday</mat-option>\r\n                                            <mat-option value=\"Thursday\">Thursday</mat-option>\r\n                                            <mat-option value=\"Friday\">Friday</mat-option>\r\n                                            <mat-option value=\"Saturday\">Saturday</mat-option>\r\n                                        </mat-select>\r\n                                    </mat-form-field>\r\n                                </div>\r\n                            </th>\r\n                            <th class=\"w100\" *ngIf=\"userType == 'Sales User'\">\r\n                                <div class=\"th-search-acmt\">\r\n                                    <mat-form-field>\r\n                                        <input type=\"text\" matInput placeholder=\"Search ...\"\r\n                                            (keyup.enter)=\"getUserList(userType)\" [(ngModel)]=\"filter.baseStation\">\r\n                                    </mat-form-field>\r\n                                </div>\r\n                            </th>\r\n                            <th class=\"w200\" *ngIf=\"userType == 'Sales User'\">\r\n                                <div class=\"th-search-acmt\">\r\n                                    <mat-form-field>\r\n                                        <input type=\"text\" matInput placeholder=\"Search ...\"\r\n                                            (keyup.enter)=\"getUserList(userType)\"\r\n                                            [(ngModel)]=\"filter.working_state_name\">\r\n                                    </mat-form-field>\r\n                                </div>\r\n                            </th>\r\n\r\n\r\n                            <th *ngIf=\"userType == 'Sales User'\" class=\"w160\">\r\n                                <div class=\"th-search-acmt\">\r\n                                    <mat-form-field>\r\n                                        <input type=\"text\" matInput placeholder=\"Search ...\"\r\n                                            (keyup.enter)=\"getUserList(userType)\" [(ngModel)]=\"filter.assign_user\">\r\n                                    </mat-form-field>\r\n                                </div>\r\n                            </th>\r\n\r\n                            <th *ngIf=\"userType == 'Sales User'\" class=\"w100\">\r\n                                <div class=\"th-search-acmt\">\r\n                                    <mat-form-field>\r\n                                        <input type=\"text\" matInput placeholder=\"Search ...\"\r\n                                            (keyup.enter)=\"getUserList(userType)\" [(ngModel)]=\"filter.assign_user_code\">\r\n                                    </mat-form-field>\r\n                                </div>\r\n                            </th>\r\n                            <th *ngIf=\"userType == 'Sales User'\" class=\"w100\">\r\n                                <div class=\"th-search-acmt\">\r\n                                    <mat-form-field class=\"cs-input select-input\">\r\n                                        <mat-select name=\"purchase_right\" [(ngModel)]=\"filter.purchase_right\"\r\n                                            (selectionChange)=\"getUserList(userType)\">\r\n                                            <mat-option value=\"Yes\">Yes</mat-option>\r\n                                            <mat-option value=\"No\">No</mat-option>\r\n\r\n                                        </mat-select>\r\n                                    </mat-form-field>\r\n                                </div>\r\n                            </th>\r\n                            <th class=\"w100\">\r\n                                <div class=\"th-search-acmt\">\r\n                                    <mat-form-field>\r\n                                        <input type=\"text\" matInput placeholder=\"Search ...\"\r\n                                            (keyup.enter)=\"getUserList(userType)\" [(ngModel)]=\"filter.assign_user_code\">\r\n                                    </mat-form-field>\r\n                                </div>\r\n                            </th>\r\n                            <th class=\"w100\">\r\n                                <div class=\"th-search-acmt\">\r\n                                    <mat-form-field>\r\n                                        <input type=\"text\" matInput placeholder=\"Search ...\"\r\n                                            (keyup.enter)=\"getUserList(userType)\" [(ngModel)]=\"filter.assign_user_code\">\r\n                                    </mat-form-field>\r\n                                </div>\r\n                            </th>\r\n                            <th class=\"w100\" *ngIf=\"logined_user_data2.edit_users_master=='1'\"></th>\r\n                            <th class=\"w100\" *ngIf=\"logined_user_data2.edit_users_master=='1'\"></th>\r\n                            <th class=\"w120\" *ngIf=\"logined_user_data2.edit_users_master=='1'\"></th>\r\n                            <th class=\"w50\" *ngIf=\"logined_user_data2.edit_users_master=='1'\">\r\n                                <div class=\"th-search-acmt\">\r\n                                    <mat-form-field class=\"cs-input select-input\">\r\n                                        <mat-select name=\"status\" [(ngModel)]=\"filter.status\"\r\n                                            (selectionChange)=\"getUserList(userType)\">\r\n                                            <mat-option value=\"\">All</mat-option>\r\n                                            <mat-option value=\"active\">Active</mat-option>\r\n                                            <mat-option value=\"deactive\">Deactive </mat-option>\r\n                                        </mat-select>\r\n                                    </mat-form-field>\r\n                                </div>\r\n                            </th>\r\n                            <th *ngIf=\"userType == 'Sales User'\" class=\"w120\">\r\n                            </th>\r\n                            <th *ngIf=\"userType == 'Sales User'\" class=\"w110\">&nbsp;</th>\r\n                            <th *ngIf=\"userType == 'System User'\" class=\"w110\">&nbsp;</th>\r\n                        </tr>\r\n                    </table>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"table-container mb50\">\r\n                <div class=\"table-content\">\r\n                    <table>\r\n                        <ng-container *ngIf=\"!loader\">\r\n                            <tr *ngFor=\"let row of userlist;let i=index\"\r\n                                [ngClass]=\"{'Current': service.currentUserID == row.id, 'birthday-highlight': isBirthday(row.dob)}\">\r\n                                <td class=\"w50 text-center\">{{i+1+sr_no}}</td>\r\n                                <td class=\"w100\">{{row.date_created | date}}</td>\r\n                                <td class=\"w100\">{{row.created_by_name}}</td>\r\n                                <td class=\"w120\">{{row.designation_name}}</td>\r\n                                <td class=\"w160\">\r\n                                    <a class=\"link-btn\" (click)=\"service.setData(filter)\"\r\n                                        *ngIf=\"logined_user_data2.user_type!='Sales User'\"\r\n                                        routerLink=\"sale-user-detail/{{row.id}}\" routerLinkActive=\"active\"\r\n                                        mat-button>{{row.name | titlecase}}</a>\r\n                                    <span *ngIf=\"logined_user_data2.user_type=='Sales User'\">{{row.name |\r\n                                        titlecase}}</span>\r\n                                </td>\r\n                                <td class=\"w90\">\r\n                                    {{row.contact_01 ? row.contact_01:'---'}}\r\n                                </td>\r\n                                <td class=\"w90\">\r\n                                    {{row.offmobileno ? row.offmobileno:'---'}}\r\n                                </td>\r\n                                <td class=\"w100\" *ngIf=\"userType == 'Inactive User'\">\r\n                                    {{row.date_inactive | date}}\r\n                                </td>\r\n                                <td class=\"w100\" *ngIf=\"userType == 'Inactive User'\">\r\n                                    {{row.reasonOfInactive}}\r\n                                </td>\r\n                                <td class=\"w200\" *ngIf=\"userType == 'Inactive User'\">\r\n\r\n                                    {{row.remarks}}\r\n                                </td>\r\n                                <td class=\"w120\">\r\n                                    {{row.employee_id ? row.employee_id :'---'}}\r\n                                </td>\r\n                                <td class=\"w100\">{{row.dob && row.dob != '0000-00-00' ? (row.dob | date) : '---'}}</td>\r\n                                <td class=\"w250\">{{row.email}}</td>\r\n                                <td class=\"w70\">{{row.weekly_off ? row.weekly_off: '---'}}</td>\r\n                                <td class=\"w100\" *ngIf=\"userType == 'Sales User'\">{{row.baseStation ? row.baseStation:\r\n                                    '---'}}</td>\r\n                                <td class=\"w200 one-line\" matTooltip=\"{{row.working_state_name}}\"\r\n                                    *ngIf=\"userType == 'Sales User'\">{{row.working_state_name ?\r\n                                    row.working_state_name: '---'}}</td>\r\n\r\n                                <td *ngIf=\"userType == 'Sales User'\" class=\"w160\">{{row.assign_user ? row.assign_user\r\n                                    :'---'}}</td>\r\n\r\n                                <td *ngIf=\"userType == 'Sales User'\" class=\"w100\">{{row.assign_user_code ?\r\n                                    row.assign_user_code :'---'}}</td>\r\n                                <td *ngIf=\"userType == 'Sales User'\" class=\"w100\">{{row.purchase_right ?\r\n                                    row.purchase_right :'---'}}</td>\r\n                                <td class=\"w100\">{{row.last_updated_by_name ?\r\n                                    row.last_updated_by_name :'---'}}</td>\r\n                                <td class=\"w100\">{{row.last_updated_on != '0000-00-00 00:00:00' ?\r\n                                    (row.last_updated_on | date : 'MMM d, y, h:mm a') :'---'}}</td>\r\n                                <td class=\"w100 text-center\" *ngIf=\"logined_user_data2.edit_users_master=='1'\">\r\n                                    <div class=\"action-button\">\r\n                                        <mat-slide-toggle color=\"accent\" [name]=\"'geoFencing'+i\"\r\n                                            [checked]=\"row.geoFencingFlag == 1\"\r\n                                            (change)=\"permissionstatus(i,row.id,$event,'geoFencing')\">\r\n                                        </mat-slide-toggle>\r\n                                    </div>\r\n                                </td>\r\n\r\n                                <td class=\"w100 text-center\" *ngIf=\"logined_user_data2.edit_users_master=='1'\">\r\n                                    <div class=\"action-button\">\r\n                                        <mat-slide-toggle color=\"accent\" [name]=\"'checkinCamera'+i\"\r\n                                            [checked]=\"row.checkinCameraFlag == 1\"\r\n                                            (change)=\"permissionstatus(i,row.id,$event,'checkinCamera')\">\r\n                                        </mat-slide-toggle>\r\n                                    </div>\r\n                                </td>\r\n\r\n                                <td class=\"w120 text-center\" *ngIf=\"logined_user_data2.edit_users_master=='1'\">\r\n                                    <div class=\"action-button\">\r\n                                        <mat-slide-toggle color=\"accent\" [name]=\"'backgroundTracking'+i\"\r\n                                            [checked]=\"row.background_tracking_flag == 1\"\r\n                                            (change)=\"permissionstatus(i,row.id,$event,'backgroundTracking')\">\r\n                                        </mat-slide-toggle>\r\n                                    </div>\r\n                                </td>\r\n\r\n                                <td class=\"w50 text-center\" *ngIf=\"logined_user_data2.edit_users_master=='1'\">\r\n                                    <div class=\"action-button\">\r\n                                        <mat-slide-toggle color=\"accent\" [name]=\"'status'+i\"\r\n                                            [(ngModel)]=\"row.user_status\" (change)=\"updateStatus(i,row.id,$event)\">\r\n                                        </mat-slide-toggle>\r\n                                    </div>\r\n                                </td>\r\n\r\n                                <ng-template #datePickerDialog>\r\n                                    <h3 mat-dialog-title\r\n                                        [ngStyle]=\"{ margin: '5px', fontSize: '1.2em', color: '#3f51b5', textAlign: 'center' }\">\r\n                                        Select Last Working Date\r\n                                    </h3>\r\n\r\n                                    <div mat-dialog-content\r\n                                        [ngStyle]=\"{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '20px' }\">\r\n\r\n                                        <!-- Date Picker for Last Working Date -->\r\n                                        <mat-form-field [ngStyle]=\"{ width: '100%' }\">\r\n                                            <mat-label>Last Working Date</mat-label>\r\n                                            <input matInput [matDatepicker]=\"picker\" placeholder=\"Choose a date\"\r\n                                                [(ngModel)]=\"lastWorkingDate\" required>\r\n                                            <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\r\n                                            <mat-datepicker #picker></mat-datepicker>\r\n                                        </mat-form-field>\r\n\r\n                                        <!-- Dropdown for Reason to Leave -->\r\n                                        <mat-form-field [ngStyle]=\"{ width: '100%', marginTop: '10px' }\">\r\n                                            <mat-label>Reason to Leave</mat-label>\r\n                                            <mat-select [(ngModel)]=\"reasonToLeave\" required>\r\n                                                <mat-option value=\"Resignation\">Resignation</mat-option>\r\n                                                <mat-option value=\"Termination\">Termination</mat-option>\r\n                                                <mat-option value=\"Asked to Leave\">Asked to Leave</mat-option>\r\n                                            </mat-select>\r\n                                        </mat-form-field>\r\n\r\n                                        <!-- Remarks Section -->\r\n                                        <mat-form-field [ngStyle]=\"{ width: '100%', marginTop: '10px' }\">\r\n                                            <mat-label>Remarks</mat-label>\r\n                                            <textarea matInput [(ngModel)]=\"remarks\"></textarea>\r\n                                        </mat-form-field>\r\n\r\n                                    </div>\r\n\r\n                                    <div mat-dialog-actions\r\n                                        [ngStyle]=\"{ display: 'flex', justifyContent: 'space-between', padding: '10px', borderTop: '1px solid #e0e0e0' }\">\r\n                                        <button mat-button [ngStyle]=\"{ color: '#f44336', fontWeight: 'bold' }\"\r\n                                            (click)=\"dialogRef.close()\">Cancel</button>\r\n                                        <button mat-button [ngStyle]=\"{ color: '#4caf50', fontWeight: 'bold' }\"\r\n                                            [disabled]=\"!lastWorkingDate || !reasonToLeave\"\r\n                                            (click)=\"dialogRef.close({ lastWorkingDate: lastWorkingDate, reasonToLeave: reasonToLeave, remarks: remarks })\">\r\n                                            OK\r\n                                        </button>\r\n                                    </div>\r\n\r\n                                </ng-template>\r\n\r\n\r\n\r\n                                <td *ngIf=\"userType == 'Sales User'\" class=\"w120\">{{row.third_party_disable =='1' ?\r\n                                    'Account Blocked Due To ':' '}}\r\n                                    <strong>{{(row.third_party_app)}}</strong>\r\n                                </td>\r\n                                <td *ngIf=\"userType == 'Sales User'\" class=\"w110\">\r\n                                    <button mat-raised-button color=\"accent\" *ngIf=\"row.device_unique_id != ''\"\r\n                                        (click)=\"resetDevice(i,row.id)\">Reset Device </button>\r\n                                </td>\r\n                                <td *ngIf=\"userType == 'System User'\" class=\"w110\">\r\n                                    <div class=\"action-button\">\r\n                                        <button mat-icon-button matTooltip=\"Delete\" (click)=\"delete(row.id)\">\r\n                                            <i class=\"material-icons del\">delete</i>\r\n                                        </button>\r\n                                    </div>\r\n                                </td>\r\n                            </tr>\r\n                        </ng-container>\r\n\r\n                        <ng-container *ngFor=\"let row of [].constructor(10);\">\r\n                            <tr class=\"sk-loading\" *ngIf=\"loader\">\r\n\r\n                                <td class=\"w50 text-center\">\r\n                                    <div>&nbsp;</div>\r\n                                </td>\r\n                                <td class=\"w100\">\r\n                                    <div>&nbsp;</div>\r\n                                </td>\r\n                                <td class=\"w100\">\r\n                                    <div>&nbsp;</div>\r\n                                </td>\r\n                                <td class=\"w120\">\r\n                                    <div>&nbsp;</div>\r\n                                </td>\r\n                                <td class=\"w160\">\r\n                                    <div>&nbsp;</div>\r\n                                </td>\r\n                                <td class=\"w90\">\r\n                                    <div>&nbsp;</div>\r\n                                </td>\r\n                                <td class=\"w120\">\r\n                                    <div>&nbsp;</div>\r\n                                </td>\r\n                                <td class=\"w250\">\r\n                                    <div>&nbsp;</div>\r\n                                </td>\r\n                                <td class=\"w70\">\r\n                                    <div>&nbsp;</div>\r\n                                </td>\r\n                                <td *ngIf=\"userType == 'Sales User'\" class=\"w160\">\r\n                                    <div>&nbsp;</div>\r\n                                </td>\r\n                                <td *ngIf=\"userType == 'Sales User'\" class=\"w100\">\r\n                                    <div>&nbsp;</div>\r\n                                </td>\r\n                                <td class=\"w100\">\r\n                                    <div>&nbsp;</div>\r\n                                </td>\r\n                                <td class=\"w100\">\r\n                                    <div>&nbsp;</div>\r\n                                </td>\r\n                                <td class=\"w50 text-center\" *ngIf=\"logined_user_data2.edit_users_master=='1'\">\r\n                                    <div>&nbsp;</div>\r\n                                </td>\r\n                                <td class=\"w120 text-center\" *ngIf=\"userType == 'Sales User'\">\r\n                                    <div>&nbsp;</div>\r\n                                </td>\r\n                                <td *ngIf=\"userType == 'Sales User'\" class=\"w110 text-center\">\r\n                                    <div>&nbsp;</div>\r\n                                </td>\r\n                            </tr>\r\n                        </ng-container>\r\n                    </table>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <div>\r\n        </div>\r\n        <div class=\"no-data\" *ngIf=\"userlist.length == 0 && datanotfound == true;\">\r\n            <img src=\"assets/img/no-data.svg\" alt=\"\">\r\n            <p>Data not <span>available !</span></p>\r\n        </div>\r\n    </div>\r\n\r\n\r\n\r\n\r\n    <div class=\"org-chart-wrapper\" *ngIf=\"userType == 'Hierarchy'\">\r\n        <!-- Header Bar -->\r\n        <div class=\"org-chart-header\">\r\n            <div class=\"org-chart-title\">\r\n                <h4>Organization Chart</h4>\r\n                <span class=\"breadcrumb-text\">Manage / Organization Chart</span>\r\n            </div>\r\n            <div class=\"org-chart-actions\">\r\n                <div class=\"org-search-box\">\r\n                    <i class=\"material-icons\">search</i>\r\n                    <input type=\"text\" placeholder=\"Search employee...\" [(ngModel)]=\"hierarchySearch\"\r\n                        (input)=\"filterHierarchy()\">\r\n                    <i class=\"material-icons clear-btn\" *ngIf=\"hierarchySearch\"\r\n                        (click)=\"hierarchySearch=''; filterHierarchy()\">close</i>\r\n                </div>\r\n                <button mat-raised-button class=\"download-btn\" (click)=\"getUserHierarchyExcel(userType)\">\r\n                    <i class=\"material-icons\">picture_as_pdf</i> Download Excel\r\n                </button>\r\n            </div>\r\n        </div>\r\n\r\n        <!-- Zoom Controls -->\r\n        <div class=\"zoom-controls\">\r\n            <button mat-icon-button (click)=\"zoomIn()\"><i class=\"material-icons\">add</i></button>\r\n            <button mat-icon-button (click)=\"zoomOut()\"><i class=\"material-icons\">remove</i></button>\r\n            <button mat-icon-button (click)=\"resetZoom()\"><i class=\"material-icons\">settings_backup_restore</i></button>\r\n            <button mat-icon-button (click)=\"toggleFullscreen()\"><i class=\"material-icons\">{{isFullscreen ?\r\n                    'fullscreen_exit' : 'fullscreen'}}</i></button>\r\n        </div>\r\n\r\n        <!-- Org Chart Tree -->\r\n        <div class=\"org-chart-container\" [class.fullscreen]=\"isFullscreen\" [class.grabbing]=\"isDragging\"\r\n            #orgChartContainer (mousedown)=\"onDragStart($event)\" (mousemove)=\"onDragMove($event)\"\r\n            (mouseup)=\"onDragEnd()\" (mouseleave)=\"onDragEnd()\">\r\n            <div class=\"org-chart-tree\" [style.transform]=\"'scale(' + zoomLevel + ')'\"\r\n                [style.transform-origin]=\"'top center'\">\r\n                <ul class=\"org-tree-root\">\r\n                    <li *ngFor=\"let hod of filteredHierarchy\" class=\"org-tree-node\">\r\n                        <!-- Node Card -->\r\n                        <div class=\"org-node-card\" [class.highlight]=\"hierarchySearch && hod._match\">\r\n                            <div class=\"org-avatar\" [style.background]=\"getAvatarColor(hod.name)\">\r\n                                <img *ngIf=\"hod.image\" [src]=\"url + hod.image\" (click)=\"goToImage(url + hod.image)\">\r\n                                <span *ngIf=\"!hod.image\">{{getInitials(hod.name)}}</span>\r\n                            </div>\r\n                            <div class=\"org-node-info\">\r\n                                <h6>{{hod.name ? (hod.name | titlecase) : '---'}}</h6>\r\n                                <a class=\"view-link\" (click)=\"userDetail(hod.id)\">View</a>\r\n                            </div>\r\n                            <span class=\"org-role-badge\">{{hod.role_name || 'N/A'}}</span>\r\n                            <span class=\"org-emp-code\">{{hod.employee_id || '---'}}</span>\r\n                            <button class=\"collapse-toggle\" *ngIf=\"hod.children?.length\" (click)=\"toggleCollapse(hod)\">\r\n                                {{hod._collapsed ? 'Expand' : 'Collapse'}}\r\n                                <i class=\"material-icons\">{{hod._collapsed ? 'expand_more' : 'expand_less'}}</i>\r\n                            </button>\r\n                        </div>\r\n\r\n                        <!-- Children -->\r\n                        <ul *ngIf=\"hod.children?.length && !hod._collapsed\">\r\n                            <ng-container\r\n                                *ngTemplateOutlet=\"orgRecursiveNode; context: { $implicit: hod.children }\"></ng-container>\r\n                        </ul>\r\n                    </li>\r\n                </ul>\r\n\r\n                <!-- Recursive Template -->\r\n                <ng-template #orgRecursiveNode let-nodes>\r\n                    <li *ngFor=\"let node of nodes\" class=\"org-tree-node\">\r\n                        <div class=\"org-node-card\" [class.highlight]=\"hierarchySearch && node._match\">\r\n                            <div class=\"org-avatar\" [style.background]=\"getAvatarColor(node.name)\">\r\n                                <img *ngIf=\"node.image\" [src]=\"url + node.image\" (click)=\"goToImage(url + node.image)\">\r\n                                <span *ngIf=\"!node.image\">{{getInitials(node.name)}}</span>\r\n                            </div>\r\n                            <div class=\"org-node-info\">\r\n                                <h6>{{node.name ? (node.name | titlecase) : '---'}}</h6>\r\n                                <a class=\"view-link\" (click)=\"userDetail(node.id)\">View</a>\r\n                            </div>\r\n                            <span class=\"org-role-badge\">{{node.role_name || 'N/A'}}</span>\r\n                            <span class=\"org-emp-code\">{{node.employee_id || '---'}}</span>\r\n                            <button class=\"collapse-toggle\" *ngIf=\"node.children?.length\"\r\n                                (click)=\"toggleCollapse(node)\">\r\n                                {{node._collapsed ? 'Expand' : 'Collapse'}}\r\n                                <i class=\"material-icons\">{{node._collapsed ? 'expand_more' : 'expand_less'}}</i>\r\n                            </button>\r\n                        </div>\r\n                        <ul *ngIf=\"node.children?.length && !node._collapsed\">\r\n                            <ng-container\r\n                                *ngTemplateOutlet=\"orgRecursiveNode; context: { $implicit: node.children }\"></ng-container>\r\n                        </ul>\r\n                    </li>\r\n                </ng-template>\r\n            </div>\r\n        </div>\r\n    </div>\r\n\r\n\r\n    <div class=\"fab-btns\" *ngIf=\"userType != 'Hierarchy'\">\r\n        <div class=\"fab-btns\"\r\n            *ngIf=\"(logined_user_data2.export_users_master=='1') ||( logined_user_data2.add_users_master=='1' )|| (logined_user_data2.import_users_master=='1')\">\r\n            <button class=\"pulse excel\" mat-fab color=\"primary\" [ngClass]=\"{'pulse': fabBtnValue=='add'}\"\r\n                [matMenuTriggerFor]=\"menu\">\r\n                <i class=\"material-icons\">apps</i>\r\n                Action\r\n            </button>\r\n        </div>\r\n        <mat-menu #menu=\"matMenu\">\r\n\r\n            <button mat-menu-item (click)=\"getUserExcel(userType);\"\r\n                *ngIf=\"userlist.length > 0 && (logined_user_data2.export_users_master=='1')\">\r\n                <mat-icon>download</mat-icon>\r\n                <span>Download in excel</span>\r\n            </button>\r\n            <button mat-menu-item (click)=\"getUserHierarchyExcel(userType);\"\r\n                *ngIf=\"userlist.length > 0 && (logined_user_data2.export_users_master=='1')\">\r\n                <mat-icon>account_tree</mat-icon>\r\n                <span>Download Hierarchy Excel</span>\r\n            </button>\r\n            <button mat-menu-item (click)=\"downloadStateHierarchyExcel();\"\r\n                *ngIf=\"userlist.length > 0 && (logined_user_data2.export_users_master=='1')\">\r\n                <mat-icon>map</mat-icon>\r\n                <span>Download State-Hierarchy Excel</span>\r\n            </button>\r\n            <button mat-menu-item (click)=\"downloadDivisionUserExcel();\"\r\n                *ngIf=\"logined_user_data2.export_users_master=='1'\">\r\n                <mat-icon>grid_view</mat-icon>\r\n                <span>Download Division-User Excel</span>\r\n            </button>\r\n            <button mat-menu-item (click)=\"downloadDivisionStationExcel();\"\r\n                *ngIf=\"logined_user_data2.export_users_master=='1'\">\r\n                <mat-icon>place</mat-icon>\r\n                <span>Download Division-Station Excel</span>\r\n            </button>\r\n            <button mat-menu-item (click)=\"downloadDealerUserExcel();\"\r\n                *ngIf=\"logined_user_data2.export_users_master=='1'\">\r\n                <mat-icon>assignment_ind</mat-icon>\r\n                <span>Download Dealer-User Excel</span>\r\n            </button>\r\n            <button mat-menu-item (click)=\"openExcelDatePicker('secondary');\"\r\n                *ngIf=\"logined_user_data2.export_users_master=='1'\">\r\n                <mat-icon>store</mat-icon>\r\n                <span>Download Dealer Secondary Excel</span>\r\n            </button>\r\n            <button mat-menu-item (click)=\"openExcelDatePicker('brand');\"\r\n                *ngIf=\"logined_user_data2.export_users_master=='1'\">\r\n                <mat-icon>bar_chart</mat-icon>\r\n                <span>Download Brand-User Qty Excel</span>\r\n            </button>\r\n            <ng-container *ngIf=\"userType == 'Sales User'\">\r\n                <button mat-menu-item (click)=\"upload_excel('insert');\"\r\n                    *ngIf=\"(logined_user_data2.import_users_master=='1')\">\r\n                    <mat-icon>cloud_upload</mat-icon>\r\n                    <span>Upload New Data</span>\r\n                </button>\r\n                <!-- <button mat-menu-item (click)=\"upload_excel('update');\"\r\n                    *ngIf=\"userlist.length > 0 && (logined_user_data2.import_users_master=='1')\">\r\n                    <mat-icon>update</mat-icon>\r\n                    <span>Update Existing Data</span>\r\n                </button> -->\r\n                <button mat-menu-item (click)=\"upload_postal_master();\"\r\n                    *ngIf=\"(logined_user_data2.import_users_master=='1')\">\r\n                    <mat-icon>cloud_upload</mat-icon>\r\n                    <span>Upload Postal Master</span>\r\n                </button>\r\n            </ng-container>\r\n            <button mat-menu-item (click)=\"lastBtnValue('add');\" routerLink=\"user-add\"\r\n                *ngIf=\"(logined_user_data2.add_users_master=='1')\">\r\n                <mat-icon>add</mat-icon>\r\n                <span>Add New</span>\r\n            </button>\r\n        </mat-menu>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/user/sale-user-list/sale-user-list.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/user/sale-user-list/sale-user-list.component.ts ***!
  \*****************************************************************/
/*! exports provided: SaleUserListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SaleUserListComponent", function() { return SaleUserListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _router_animation_router_animation_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../router-animation/router-animation.component */ "./src/app/router-animation/router-animation.component.ts");
/* harmony import */ var src_services_DatabaseService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/_services/DatabaseService */ "./src/_services/DatabaseService.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_dialog_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/dialog.component */ "./src/app/dialog.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var src_app_localstorage_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/localstorage.service */ "./src/app/localstorage.service.ts");
/* harmony import */ var ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng6-toastr-notifications */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/ng6-toastr-notifications/fesm5/ng6-toastr-notifications.js");
/* harmony import */ var src_app_upload_file_modal_upload_file_modal_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/upload-file-modal/upload-file-modal.component */ "./src/app/upload-file-modal/upload-file-modal.component.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! moment */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var src_app_bottom_sheet_bottom_sheet_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/bottom-sheet/bottom-sheet.component */ "./src/app/bottom-sheet/bottom-sheet.component.ts");
/* harmony import */ var src_app_image_module_image_module_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/image-module/image-module.component */ "./src/app/image-module/image-module.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/common */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/common/fesm5/common.js");














// import { Console } from 'console';
var SaleUserListComponent = /** @class */ (function () {
    function SaleUserListComponent(alert, datePipe, toast, service, rout, dialog2, session, bottomSheet) {
        this.alert = alert;
        this.datePipe = datePipe;
        this.toast = toast;
        this.service = service;
        this.rout = rout;
        this.dialog2 = dialog2;
        this.session = session;
        this.bottomSheet = bottomSheet;
        this.userType = 'Sales User';
        this.logined_user_data = {};
        this.assign_login_data = {};
        this.nodatafound = true;
        this.excel_data = [];
        this.tmp = [];
        this.fabBtnValue = 'add';
        this.userlist = [];
        this.filter = {};
        this.loader = false;
        this.Status = true;
        this.datanotfound = false;
        this.start = 0;
        this.downurl = '';
        this.url = '';
        this.dateOverlayFor = 'secondary';
        this.excelFromDate = '';
        this.excelToDate = '';
        this.Filename = '';
        this.hierarchy = [];
        this.filteredHierarchy = [];
        this.hierarchySearch = '';
        this.zoomLevel = 1;
        this.isFullscreen = false;
        this.avatarColors = ['#4361ee', '#e91e63', '#00bcd4', '#ff9800', '#9c27b0', '#4caf50', '#795548', '#607d8b'];
        // Drag-to-pan (canvas style)
        this.isDragging = false;
        this.dragStartX = 0;
        this.dragStartY = 0;
        this.scrollStartX = 0;
        this.scrollStartY = 0;
        this.page_limit = this.service.pageLimit;
        this.today_date = new Date();
        this.downurl = service.downloadUrl;
        this.url = service.uploadUrl;
        this.assign_login_data = this.session.getSession();
        this.logined_user_data = this.assign_login_data.value;
        this.logined_user_data2 = this.logined_user_data.data;
        this.assign_login_data = this.assign_login_data.assignModule;
        this.userData = JSON.parse(localStorage.getItem('st_user'));
        this.userId = this.userData['data']['id'];
        this.userName = this.userData['data']['name'];
    }
    SaleUserListComponent.prototype.ngOnInit = function () {
        console.log(this.service.getData());
        this.filterData = this.service.getData();
        if (this.filterData.assign_user) {
            console.log("inside if");
            this.filter = {};
        }
        else {
            this.filter = this.service.getData();
        }
        if (this.filter.status) {
            this.userType = this.filter.status;
        }
        this.getUserList(this.userType);
    };
    SaleUserListComponent.prototype.pervious = function () {
        this.start = this.start - this.page_limit;
        this.getUserList(this.userType);
    };
    SaleUserListComponent.prototype.nextPage = function () {
        this.start = this.start + this.page_limit;
        this.getUserList(this.userType);
    };
    SaleUserListComponent.prototype.lastBtnValue = function (value) {
        this.fabBtnValue = value;
    };
    SaleUserListComponent.prototype.date_format = function () {
        this.filter.date_created = moment__WEBPACK_IMPORTED_MODULE_10__(this.filter.date_created).format('YYYY-MM-DD');
        this.getUserList(this.userType);
    };
    SaleUserListComponent.prototype.date_format1 = function () {
        this.filter.date_of_joining = moment__WEBPACK_IMPORTED_MODULE_10__(this.filter.date_of_joining).format('YYYY-MM-DD');
        this.getUserList(this.userType);
    };
    SaleUserListComponent.prototype.date_format_dob = function () {
        this.filter.dob = moment__WEBPACK_IMPORTED_MODULE_10__(this.filter.dob).format('YYYY-MM-DD');
        this.getUserList(this.userType);
    };
    SaleUserListComponent.prototype.isBirthday = function (dob) {
        if (!dob || dob === '0000-00-00')
            return false;
        var today = new Date();
        var birth = new Date(dob);
        return birth.getDate() === today.getDate() && birth.getMonth() === today.getMonth();
    };
    SaleUserListComponent.prototype.getUserList = function (user_type) {
        var _this = this;
        this.loader = true;
        if (this.pagenumber > this.total_page) {
            this.pagenumber = this.total_page;
            this.start = this.count - this.page_limit;
        }
        if (this.start < 0) {
            this.start = 0;
        }
        this.filter.status = this.userType;
        this.service.post_rqst({ "active_tab": user_type, "start": this.start, "pagelimit": this.page_limit, "filter": this.filter }, "Master/salesUserList").subscribe(function (result) {
            if (result['statusCode'] == 200) {
                _this.userlist = result['all_sales_user'];
                _this.sales_count = result['type_count']['Sales User'];
                _this.Inactivecount = result['type_count']['Inactive User'];
                _this.blocked_count = result['type_count']['blockedUser'];
                _this.system_count = result['type_count']['System User'];
                _this.service_count = result['type_count']['Service Engineer'];
                if (_this.userlist.length == 0) {
                    _this.nodatafound = false;
                }
                else {
                    _this.nodatafound = true;
                }
                setTimeout(function () {
                    _this.loader = false;
                }, 700);
                _this.count = result['count'];
                if (_this.pagenumber > _this.total_page) {
                    _this.pagenumber = _this.total_page;
                    _this.start = _this.count - _this.page_limit;
                }
                else {
                    _this.pagenumber = Math.ceil(_this.start / _this.page_limit) + 1;
                }
                _this.total_page = Math.ceil(_this.count / _this.page_limit);
                _this.sr_no = _this.pagenumber - 1;
                _this.sr_no = _this.sr_no * _this.page_limit;
                for (var i = 0; i < _this.userlist.length; i++) {
                    if (_this.userlist[i].status == '1') {
                        _this.userlist[i].user_status = true;
                    }
                    else if (_this.userlist[i].status == '0') {
                        _this.userlist[i].user_status = false;
                    }
                }
                if (_this.userlist.length == 0) {
                    _this.datanotfound = true;
                }
                else {
                    _this.datanotfound = false;
                }
            }
            else {
                _this.toast.errorToastr(result['statusMsg']);
                _this.loader = false;
            }
        });
        this.service.count_list();
    };
    SaleUserListComponent.prototype.getUserExcel = function (user_type) {
        var _this = this;
        this.loader = true;
        this.service.post_rqst({ "active_tab": user_type, "filter": this.filter }, "Excel/user_list_for_export").subscribe(function (result) {
            if (result['msg'] == true) {
                window.open(_this.downurl + result['filename']);
                _this.getUserList(user_type);
            }
        });
    };
    SaleUserListComponent.prototype.getUserHierarchyExcel = function (user_type) {
        var _this = this;
        this.loader = true;
        this.service.post_rqst({ "active_tab": user_type, "filter": this.filter }, "Excel/user_list_with_hierarchy_export").subscribe(function (result) {
            if (result['msg'] == true) {
                window.open(_this.downurl + result['filename']);
            }
            _this.loader = false;
        });
    };
    SaleUserListComponent.prototype.downloadStateHierarchyExcel = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var result, users, assignments, parentOf_1, childrenOf_1, _i, assignments_1, a, userMap_1, _a, users_1, u, roots, sizeCache_1, subtreeSize_1, sortedRoots, reportingOf_1, _b, assignments_2, a, mgr, stateSet_1, _c, users_2, u, states, allStates, dfsForState_1, stateColors, colHeaderColor_1, ExcelJS, workbook, ws_1, columns, colWidths_1, srCounter_1, colorIdx, _d, allStates_1, state, stateHeaderRow, stateCell, colRow, visited, stateRows, _e, sortedRoots_1, rootId, buffer, saveAs, blob, today, err_1;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_f) {
                switch (_f.label) {
                    case 0:
                        this.loader = true;
                        _f.label = 1;
                    case 1:
                        _f.trys.push([1, 6, , 7]);
                        return [4 /*yield*/, this.service.post_rqst({ "filter": this.filter }, "Excel/sales_user_state_hierarchy_data").toPromise()];
                    case 2:
                        result = _f.sent();
                        if (result['statusCode'] !== 200) {
                            this.toast.errorToastr('Failed to fetch data');
                            this.loader = false;
                            return [2 /*return*/];
                        }
                        users = result['users'] || [];
                        assignments = result['assignments'] || [];
                        parentOf_1 = {};
                        childrenOf_1 = {};
                        for (_i = 0, assignments_1 = assignments; _i < assignments_1.length; _i++) {
                            a = assignments_1[_i];
                            parentOf_1[a.asm_id] = a.rsm_id;
                            if (!childrenOf_1[a.rsm_id])
                                childrenOf_1[a.rsm_id] = [];
                            childrenOf_1[a.rsm_id].push(a.asm_id);
                        }
                        userMap_1 = {};
                        for (_a = 0, users_1 = users; _a < users_1.length; _a++) {
                            u = users_1[_a];
                            userMap_1[u.id] = u;
                        }
                        roots = users.filter(function (u) { return !parentOf_1[u.id] || !userMap_1[parentOf_1[u.id]]; }).map(function (u) { return u.id; });
                        sizeCache_1 = {};
                        subtreeSize_1 = function (nodeId, visiting) {
                            if (visiting === void 0) { visiting = new Set(); }
                            if (sizeCache_1[nodeId] !== undefined)
                                return sizeCache_1[nodeId];
                            if (visiting.has(nodeId))
                                return 0;
                            visiting.add(nodeId);
                            var children = childrenOf_1[nodeId] || [];
                            var size = 1 + children.reduce(function (sum, cId) { return sum + subtreeSize_1(cId, visiting); }, 0);
                            sizeCache_1[nodeId] = size;
                            return size;
                        };
                        // Pre-compute for all users
                        users.forEach(function (u) { return subtreeSize_1(u.id); });
                        sortedRoots = roots.slice().sort(function (a, b) { return (sizeCache_1[b] || 0) - (sizeCache_1[a] || 0); });
                        reportingOf_1 = {};
                        for (_b = 0, assignments_2 = assignments; _b < assignments_2.length; _b++) {
                            a = assignments_2[_b];
                            mgr = userMap_1[a.rsm_id];
                            reportingOf_1[a.asm_id] = mgr ? mgr.name + (mgr.employee_id ? ' (' + mgr.employee_id + ')' : '') : '';
                        }
                        stateSet_1 = new Set();
                        for (_c = 0, users_2 = users; _c < users_2.length; _c++) {
                            u = users_2[_c];
                            states = (u.working_state_name || '').split(',').map(function (s) { return s.trim(); }).filter(function (s) { return s; });
                            states.forEach(function (s) { return stateSet_1.add(s); });
                        }
                        allStates = Array.from(stateSet_1).sort();
                        dfsForState_1 = function (nodeId, state, depth, visited) {
                            if (visited.has(nodeId))
                                return [];
                            visited.add(nodeId);
                            var u = userMap_1[nodeId];
                            if (!u)
                                return [];
                            var userStates = (u.working_state_name || '').split(',').map(function (s) { return s.trim(); });
                            var rows = [];
                            // Sort children by subtree size ascending → junior (leaf) child first
                            var children = (childrenOf_1[nodeId] || []).slice().sort(function (a, b) { return (sizeCache_1[a] || 0) - (sizeCache_1[b] || 0); });
                            for (var _i = 0, children_1 = children; _i < children_1.length; _i++) {
                                var cId = children_1[_i];
                                rows.push.apply(rows, dfsForState_1(cId, state, depth + 1, visited));
                            }
                            // Add current node AFTER its children → senior appears below juniors
                            if (userStates.includes(state)) {
                                rows.push({ user: u, depth: depth, reportingManager: reportingOf_1[nodeId] || '' });
                            }
                            return rows;
                        };
                        stateColors = [
                            '1a237e', '1b5e20', '4a148c', '880e4f', '004d40',
                            'bf360c', '37474f', '006064', '3e2723', '1a237e'
                        ];
                        colHeaderColor_1 = '1565C0';
                        return [4 /*yield*/, Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e("common")]).then(__webpack_require__.t.bind(null, /*! exceljs */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/exceljs/dist/exceljs.min.js", 7))];
                    case 3:
                        ExcelJS = _f.sent();
                        workbook = new ExcelJS.Workbook();
                        ws_1 = workbook.addWorksheet('State Hierarchy');
                        columns = ['Sr#', 'Name', 'Designation', 'Emp Code', 'Mobile', 'Official Mobile', 'Email', 'Working State', 'Base Station', 'Reporting Manager', 'Date of Joining'];
                        colWidths_1 = [6, 30, 22, 14, 14, 16, 32, 28, 18, 32, 16];
                        srCounter_1 = 1;
                        colorIdx = 0;
                        for (_d = 0, allStates_1 = allStates; _d < allStates_1.length; _d++) {
                            state = allStates_1[_d];
                            stateHeaderRow = ws_1.addRow([state.toUpperCase()]);
                            ws_1.mergeCells(stateHeaderRow.number, 1, stateHeaderRow.number, columns.length);
                            stateHeaderRow.height = 22;
                            stateCell = stateHeaderRow.getCell(1);
                            stateCell.value = '  🗺  ' + state.toUpperCase();
                            stateCell.font = { bold: true, color: { argb: 'FFFFFFFF' }, size: 12 };
                            stateCell.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FF' + stateColors[colorIdx % stateColors.length] } };
                            stateCell.alignment = { vertical: 'middle', horizontal: 'left' };
                            colorIdx++;
                            colRow = ws_1.addRow(columns);
                            colRow.height = 18;
                            colRow.eachCell(function (cell) {
                                cell.font = { bold: true, color: { argb: 'FFFFFFFF' }, size: 10 };
                                cell.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FF' + colHeaderColor_1 } };
                                cell.alignment = { vertical: 'middle', horizontal: 'center' };
                                cell.border = { top: { style: 'thin' }, left: { style: 'thin' }, bottom: { style: 'thin' }, right: { style: 'thin' } };
                            });
                            visited = new Set();
                            stateRows = [];
                            for (_e = 0, sortedRoots_1 = sortedRoots; _e < sortedRoots_1.length; _e++) {
                                rootId = sortedRoots_1[_e];
                                stateRows.push.apply(stateRows, dfsForState_1(rootId, state, 0, visited));
                            }
                            // === Data Rows ===
                            stateRows.forEach(function (item, idx) {
                                var u = item.user;
                                var indent = '  '.repeat(item.depth);
                                var rowData = [
                                    srCounter_1++,
                                    indent + (u.name || ''),
                                    u.designation_name || '',
                                    u.employee_id || '',
                                    u.contact_01 || '',
                                    u.offmobileno || '',
                                    u.email || '',
                                    u.working_state_name || '',
                                    u.baseStation || '',
                                    item.reportingManager,
                                    u.date_of_joining || ''
                                ];
                                var dataRow = ws_1.addRow(rowData);
                                dataRow.height = 16;
                                var isEven = idx % 2 === 0;
                                var rowBg = isEven ? 'FFE3F2FD' : 'FFFFFFFF';
                                dataRow.eachCell(function (cell, colNumber) {
                                    cell.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: rowBg } };
                                    cell.border = { top: { style: 'thin', color: { argb: 'FFE0E0E0' } }, left: { style: 'thin', color: { argb: 'FFE0E0E0' } }, bottom: { style: 'thin', color: { argb: 'FFE0E0E0' } }, right: { style: 'thin', color: { argb: 'FFE0E0E0' } } };
                                    cell.alignment = { vertical: 'middle', wrapText: false };
                                });
                                // Senior (root) — bold + distinct orange color so they stand out from juniors
                                if (item.depth === 0) {
                                    dataRow.getCell(2).font = { bold: true, color: { argb: 'FFE65100' } };
                                }
                            });
                            // Empty separator row
                            ws_1.addRow([]);
                            srCounter_1 = 1; // reset per state
                        }
                        // Set column widths
                        columns.forEach(function (_, i) {
                            ws_1.getColumn(i + 1).width = colWidths_1[i];
                        });
                        return [4 /*yield*/, workbook.xlsx.writeBuffer()];
                    case 4:
                        buffer = _f.sent();
                        return [4 /*yield*/, Promise.resolve(/*! import() */).then(__webpack_require__.t.bind(null, /*! file-saver */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/file-saver/dist/FileSaver.min.js", 7))];
                    case 5:
                        saveAs = (_f.sent()).saveAs;
                        blob = new Blob([buffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
                        today = new Date().toISOString().slice(0, 10).replace(/-/g, '');
                        saveAs(blob, "SalesUser_StateHierarchy_" + today + ".xlsx");
                        this.toast.successToastr('Excel downloaded successfully!');
                        return [3 /*break*/, 7];
                    case 6:
                        err_1 = _f.sent();
                        console.error('State Hierarchy Excel error', err_1);
                        this.toast.errorToastr('Failed to generate excel');
                        return [3 /*break*/, 7];
                    case 7:
                        this.loader = false;
                        return [2 /*return*/];
                }
            });
        });
    };
    SaleUserListComponent.prototype.downloadDivisionUserExcel = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var result, rows, ExcelJS, workbook, ws_2, headers, colWidths_2, hdrRow, noDivUsers, ws2_1, ws2Headers, ws2Widths_1, ws2HdrRow, mismatchUsers, ws3_1, ws3Headers, ws3Widths_1, ws3HdrRow, buffer, saveAs, blob, today, err_2;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.loader = true;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 6, , 7]);
                        return [4 /*yield*/, this.service.post_rqst({}, 'Excel/division_user_mapping_data').toPromise()];
                    case 2:
                        result = _a.sent();
                        if (result['statusCode'] !== 200) {
                            this.toast.errorToastr('Failed to fetch data');
                            this.loader = false;
                            return [2 /*return*/];
                        }
                        rows = result['rows'] || [];
                        if (rows.length === 0) {
                            this.toast.errorToastr('No data found');
                            this.loader = false;
                            return [2 /*return*/];
                        }
                        return [4 /*yield*/, Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e("common")]).then(__webpack_require__.t.bind(null, /*! exceljs */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/exceljs/dist/exceljs.min.js", 7))];
                    case 3:
                        ExcelJS = _a.sent();
                        workbook = new ExcelJS.Workbook();
                        ws_2 = workbook.addWorksheet('Division User Mapping');
                        headers = ['S.No', 'Division', 'District', 'City', 'Employee (Code)'];
                        colWidths_2 = [7, 30, 28, 28, 60];
                        hdrRow = ws_2.addRow(headers);
                        hdrRow.height = 18;
                        hdrRow.eachCell(function (cell) {
                            cell.font = { bold: true, color: { argb: 'FFFFFFFF' }, size: 11 };
                            cell.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FF1565C0' } };
                            cell.alignment = { vertical: 'middle', horizontal: 'center' };
                            cell.border = { top: { style: 'thin' }, left: { style: 'thin' }, bottom: { style: 'thin' }, right: { style: 'thin' } };
                        });
                        // Data rows
                        rows.forEach(function (row, idx) {
                            var dataRow = ws_2.addRow([
                                idx + 1,
                                row.division_name || '',
                                row.district_name || '',
                                row.city || '',
                                row.employees || ''
                            ]);
                            dataRow.height = 16;
                            var bg = idx % 2 === 0 ? 'FFE3F2FD' : 'FFFFFFFF';
                            dataRow.eachCell(function (cell, colNum) {
                                cell.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: bg } };
                                cell.border = { top: { style: 'thin', color: { argb: 'FFE0E0E0' } }, left: { style: 'thin', color: { argb: 'FFE0E0E0' } }, bottom: { style: 'thin', color: { argb: 'FFE0E0E0' } }, right: { style: 'thin', color: { argb: 'FFE0E0E0' } } };
                                cell.alignment = { vertical: 'middle', wrapText: colNum === 5 };
                            });
                        });
                        // Column widths
                        headers.forEach(function (_, i) { ws_2.getColumn(i + 1).width = colWidths_2[i]; });
                        noDivUsers = result['no_division_users'] || [];
                        ws2_1 = workbook.addWorksheet('Users Without Division');
                        ws2Headers = ['S.No', 'Name', 'Designation', 'Emp Code', 'Mobile', 'Email', 'Base Station'];
                        ws2Widths_1 = [7, 32, 24, 14, 16, 36, 22];
                        ws2HdrRow = ws2_1.addRow(ws2Headers);
                        ws2HdrRow.height = 18;
                        ws2HdrRow.eachCell(function (cell) {
                            cell.font = { bold: true, color: { argb: 'FFFFFFFF' }, size: 11 };
                            cell.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FFB71C1C' } };
                            cell.alignment = { vertical: 'middle', horizontal: 'center' };
                            cell.border = { top: { style: 'thin' }, left: { style: 'thin' }, bottom: { style: 'thin' }, right: { style: 'thin' } };
                        });
                        if (noDivUsers.length === 0) {
                            ws2_1.addRow(['', 'All users have division assigned', '', '', '', '', '']);
                        }
                        else {
                            noDivUsers.forEach(function (u, idx) {
                                var dr = ws2_1.addRow([idx + 1, u.name || '', u.designation_name || '', u.employee_id || '', u.contact_01 || '', u.email || '', u.baseStation || '']);
                                dr.height = 16;
                                var bg = idx % 2 === 0 ? 'FFFFEBEE' : 'FFFFFFFF';
                                dr.eachCell(function (cell) {
                                    cell.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: bg } };
                                    cell.border = { top: { style: 'thin', color: { argb: 'FFE0E0E0' } }, left: { style: 'thin', color: { argb: 'FFE0E0E0' } }, bottom: { style: 'thin', color: { argb: 'FFE0E0E0' } }, right: { style: 'thin', color: { argb: 'FFE0E0E0' } } };
                                    cell.alignment = { vertical: 'middle' };
                                });
                            });
                        }
                        ws2Headers.forEach(function (_, i) { ws2_1.getColumn(i + 1).width = ws2Widths_1[i]; });
                        mismatchUsers = result['city_mismatch_users'] || [];
                        ws3_1 = workbook.addWorksheet('City Not Mapped');
                        ws3Headers = ['S.No', 'Name', 'Designation', 'Emp Code', 'Mobile', 'Email', 'City (in Profile)', 'Base Station', 'Working Division', 'Reason'];
                        ws3Widths_1 = [7, 30, 24, 14, 14, 34, 22, 18, 50, 40];
                        ws3HdrRow = ws3_1.addRow(ws3Headers);
                        ws3HdrRow.height = 18;
                        ws3HdrRow.eachCell(function (cell) {
                            cell.font = { bold: true, color: { argb: 'FFFFFFFF' }, size: 11 };
                            cell.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FFE65100' } };
                            cell.alignment = { vertical: 'middle', horizontal: 'center' };
                            cell.border = { top: { style: 'thin' }, left: { style: 'thin' }, bottom: { style: 'thin' }, right: { style: 'thin' } };
                        });
                        if (mismatchUsers.length === 0) {
                            ws3_1.addRow(['', 'All users with division have matching city', '', '', '', '', '', '', '', '']);
                        }
                        else {
                            mismatchUsers.forEach(function (u, idx) {
                                var dr = ws3_1.addRow([
                                    idx + 1,
                                    u.name || '',
                                    u.designation_name || '',
                                    u.employee_id || '',
                                    u.contact_01 || '',
                                    u.email || '',
                                    u.city || '',
                                    u.baseStation || '',
                                    u.working_division || '',
                                    'City "' + (u.city || '') + '" not found in assigned division(s)'
                                ]);
                                dr.height = 18;
                                var bg = idx % 2 === 0 ? 'FFFFF3E0' : 'FFFFFFFF';
                                dr.eachCell(function (cell, colNum) {
                                    cell.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: bg } };
                                    cell.border = { top: { style: 'thin', color: { argb: 'FFE0E0E0' } }, left: { style: 'thin', color: { argb: 'FFE0E0E0' } }, bottom: { style: 'thin', color: { argb: 'FFE0E0E0' } }, right: { style: 'thin', color: { argb: 'FFE0E0E0' } } };
                                    cell.alignment = { vertical: 'middle', wrapText: colNum >= 9 };
                                });
                            });
                        }
                        ws3Headers.forEach(function (_, i) { ws3_1.getColumn(i + 1).width = ws3Widths_1[i]; });
                        return [4 /*yield*/, workbook.xlsx.writeBuffer()];
                    case 4:
                        buffer = _a.sent();
                        return [4 /*yield*/, Promise.resolve(/*! import() */).then(__webpack_require__.t.bind(null, /*! file-saver */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/file-saver/dist/FileSaver.min.js", 7))];
                    case 5:
                        saveAs = (_a.sent()).saveAs;
                        blob = new Blob([buffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
                        today = new Date().toISOString().slice(0, 10).replace(/-/g, '');
                        saveAs(blob, "Division_User_Mapping_" + today + ".xlsx");
                        this.toast.successToastr('Excel downloaded successfully!');
                        return [3 /*break*/, 7];
                    case 6:
                        err_2 = _a.sent();
                        console.error('Division User Excel error', err_2);
                        this.toast.errorToastr('Failed to generate excel');
                        return [3 /*break*/, 7];
                    case 7:
                        this.loader = false;
                        return [2 /*return*/];
                }
            });
        });
    };
    SaleUserListComponent.prototype.downloadDivisionStationExcel = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var result, rows, managerSheets_1, getManager_1, parsedRows, maxDealers_1, buildHeaders_1, addSheetRows_1, ExcelJS, workbook_1, buckets_1, wsOthers, unmatchedDealers, wsU_1, uHeaders, uWidths_1, uHdr, buffer, saveAs, blob, today, err_3;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.loader = true;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 6, , 7]);
                        return [4 /*yield*/, this.service.post_rqst({}, 'Excel/division_station_user_data').toPromise()];
                    case 2:
                        result = _a.sent();
                        if (result['statusCode'] !== 200) {
                            this.toast.errorToastr('Failed to fetch data');
                            this.loader = false;
                            return [2 /*return*/];
                        }
                        rows = result['rows'] || [];
                        if (rows.length === 0) {
                            this.toast.errorToastr('No data found');
                            this.loader = false;
                            return [2 /*return*/];
                        }
                        managerSheets_1 = [
                            {
                                name: 'Amit Pandey',
                                color: 'FF1565C0',
                                states: ['MAHARASHTRA', 'UTTAR PRADESH', 'UTTARAKHAND', 'UTTRAKHAND', 'MADHYA PRADESH', 'CHHATTISGARH', 'CHATTISGARH', 'RAJASTHAN', 'GUJARAT', 'DELHI']
                            },
                            {
                                name: 'Kamaljeet',
                                color: 'FF2E7D32',
                                states: ['PUNJAB', 'HARYANA', 'JAMMU AND KASHMIR', 'JAMMU & KASHMIR', 'KASHMIR', 'JAMMU', 'HIMACHAL PRADESH', 'CHANDIGARH']
                            },
                            {
                                name: 'Basu Shakti',
                                color: 'FF6A1B9A',
                                states: ['KARNATAKA', 'KERALA', 'ANDHRA PRADESH', 'TELANGANA', 'WEST BENGAL', 'ODISHA', 'ORISSA', 'JHARKHAND', 'ASSAM', 'BIHAR', 'TAMIL NADU', 'GOA', 'TRIPURA']
                            }
                        ];
                        getManager_1 = function (stateName) {
                            var s = (stateName || '').toUpperCase().trim();
                            for (var i = 0; i < managerSheets_1.length; i++) {
                                if (managerSheets_1[i].states.some(function (ms) { return s.includes(ms) || ms.includes(s); }))
                                    return i;
                            }
                            return -1; // others
                        };
                        parsedRows = rows.map(function (row) {
                            var dealers = (row.dealers_raw || '').split('|').filter(function (d) { return d && d !== '~~'; }).map(function (d) {
                                var p = d.split('~');
                                return { name: p[0] || '', code: p[1] || '', city: p[2] || '' };
                            });
                            return tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, row, { dealers: dealers });
                        });
                        maxDealers_1 = parsedRows.reduce(function (m, r) { return Math.max(m, r.dealers.length); }, 0);
                        buildHeaders_1 = function () {
                            var base = ['S.No', 'Division', 'State', 'District', 'City', 'Base Station', 'Employee Name', 'Emp Code', 'Date of Joining'];
                            var widths = [7, 30, 22, 26, 26, 20, 28, 14, 18];
                            for (var i = 1; i <= maxDealers_1; i++) {
                                base.push("Dealer Name " + i, "Account Code " + i, "City " + i);
                                widths.push(36, 18, 22);
                            }
                            return { headers: base, widths: widths };
                        };
                        addSheetRows_1 = function (ws, sheetRows, headerColor) {
                            var _a = buildHeaders_1(), headers = _a.headers, widths = _a.widths;
                            var hdrRow = ws.addRow(headers);
                            hdrRow.height = 18;
                            hdrRow.eachCell(function (cell) {
                                cell.font = { bold: true, color: { argb: 'FFFFFFFF' }, size: 11 };
                                cell.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: headerColor } };
                                cell.alignment = { vertical: 'middle', horizontal: 'center' };
                                cell.border = { top: { style: 'thin' }, left: { style: 'thin' }, bottom: { style: 'thin' }, right: { style: 'thin' } };
                            });
                            sheetRows.forEach(function (row, idx) {
                                var dealerCells = [];
                                for (var i = 0; i < maxDealers_1; i++) {
                                    var d = row.dealers[i];
                                    dealerCells.push(d ? d.name : '', d ? d.code : '', d ? d.city : '');
                                }
                                var dataRow = ws.addRow([
                                    idx + 1,
                                    row.division_name || '',
                                    row.state_name || '',
                                    row.district_name || '',
                                    row.city || '',
                                    row.baseStation || '',
                                    row.employee_name || '',
                                    row.employee_id || '',
                                    (row.date_of_joining && row.date_of_joining !== '0000-00-00') ? row.date_of_joining : ''
                                ].concat(dealerCells));
                                dataRow.height = 16;
                                var bg = idx % 2 === 0 ? 'FFE3F2FD' : 'FFFFFFFF';
                                dataRow.eachCell(function (cell, colNum) {
                                    cell.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: bg } };
                                    cell.border = { top: { style: 'thin', color: { argb: 'FFE0E0E0' } }, left: { style: 'thin', color: { argb: 'FFE0E0E0' } }, bottom: { style: 'thin', color: { argb: 'FFE0E0E0' } }, right: { style: 'thin', color: { argb: 'FFE0E0E0' } } };
                                    cell.alignment = { vertical: 'middle' };
                                });
                            });
                            widths.forEach(function (w, i) { ws.getColumn(i + 1).width = w; });
                        };
                        return [4 /*yield*/, Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e("common")]).then(__webpack_require__.t.bind(null, /*! exceljs */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/exceljs/dist/exceljs.min.js", 7))];
                    case 3:
                        ExcelJS = _a.sent();
                        workbook_1 = new ExcelJS.Workbook();
                        buckets_1 = [[], [], [], []];
                        parsedRows.forEach(function (row) {
                            var idx = getManager_1(row.state_name);
                            buckets_1[idx === -1 ? 3 : idx].push(row);
                        });
                        // Manager sheets
                        managerSheets_1.forEach(function (mgr, i) {
                            var ws = workbook_1.addWorksheet(mgr.name);
                            addSheetRows_1(ws, buckets_1[i], 'FF' + mgr.color.replace('FF', ''));
                        });
                        wsOthers = workbook_1.addWorksheet('Others');
                        addSheetRows_1(wsOthers, buckets_1[3], 'FF37474F');
                        unmatchedDealers = result['unmatched_dealers'] || [];
                        wsU_1 = workbook_1.addWorksheet('Dealers City Not Mapped');
                        uHeaders = ['S.No', 'Dealer Name', 'Account Code', 'City', 'District', 'State'];
                        uWidths_1 = [7, 40, 18, 24, 24, 22];
                        uHdr = wsU_1.addRow(uHeaders);
                        uHdr.height = 18;
                        uHdr.eachCell(function (cell) {
                            cell.font = { bold: true, color: { argb: 'FFFFFFFF' }, size: 11 };
                            cell.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FFB71C1C' } };
                            cell.alignment = { vertical: 'middle', horizontal: 'center' };
                            cell.border = { top: { style: 'thin' }, left: { style: 'thin' }, bottom: { style: 'thin' }, right: { style: 'thin' } };
                        });
                        if (unmatchedDealers.length === 0) {
                            wsU_1.addRow(['', 'All dealers have matching city in divisions', '', '', '', '']);
                        }
                        else {
                            unmatchedDealers.forEach(function (d, idx) {
                                var dr = wsU_1.addRow([idx + 1, d.dealer_name || '', d.account_code || '', d.city || '', d.district || '', d.state || '']);
                                dr.height = 16;
                                var bg = idx % 2 === 0 ? 'FFFFEBEE' : 'FFFFFFFF';
                                dr.eachCell(function (cell) {
                                    cell.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: bg } };
                                    cell.border = { top: { style: 'thin', color: { argb: 'FFE0E0E0' } }, left: { style: 'thin', color: { argb: 'FFE0E0E0' } }, bottom: { style: 'thin', color: { argb: 'FFE0E0E0' } }, right: { style: 'thin', color: { argb: 'FFE0E0E0' } } };
                                    cell.alignment = { vertical: 'middle' };
                                });
                            });
                        }
                        uHeaders.forEach(function (_, i) { wsU_1.getColumn(i + 1).width = uWidths_1[i]; });
                        return [4 /*yield*/, workbook_1.xlsx.writeBuffer()];
                    case 4:
                        buffer = _a.sent();
                        return [4 /*yield*/, Promise.resolve(/*! import() */).then(__webpack_require__.t.bind(null, /*! file-saver */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/file-saver/dist/FileSaver.min.js", 7))];
                    case 5:
                        saveAs = (_a.sent()).saveAs;
                        blob = new Blob([buffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
                        today = new Date().toISOString().slice(0, 10).replace(/-/g, '');
                        saveAs(blob, "Division_Station_Mapping_" + today + ".xlsx");
                        this.toast.successToastr('Excel downloaded successfully!');
                        return [3 /*break*/, 7];
                    case 6:
                        err_3 = _a.sent();
                        console.error('Division Station Excel error', err_3);
                        this.toast.errorToastr('Failed to generate excel');
                        return [3 /*break*/, 7];
                    case 7:
                        this.loader = false;
                        return [2 /*return*/];
                }
            });
        });
    };
    SaleUserListComponent.prototype.downloadDealerUserExcel = function () {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var result, rawRows, noDealerUsers, assignments, userMap_2, parentOf_2, childrenOf_2, _i, assignments_3, a, sizeCache_2, subtreeSize_2, isSeniorUser_1, visited_1, dfs_1, allIds, roots, orderedUsers, _a, roots_1, rootId, _b, allIds_1, id, managerSheets_2, getManagerIdx_1, addSheetRows_2, ExcelJS, workbook_2, buckets_2, wsOthers, unmatchedItems, wsUnmatched_1, umHeaders, umWidths, umHdr, summaryCell, mismatchItems, wsMismatch_1, mmHeaders, mmWidths, mmHdr, buffer, saveAs, blob, today, err_4;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_c) {
                switch (_c.label) {
                    case 0:
                        this.loader = true;
                        _c.label = 1;
                    case 1:
                        _c.trys.push([1, 6, , 7]);
                        return [4 /*yield*/, this.service.post_rqst({}, 'Excel/dealer_user_mapping_data').toPromise()];
                    case 2:
                        result = _c.sent();
                        if (result['statusCode'] !== 200) {
                            this.toast.errorToastr('Failed to fetch data');
                            this.loader = false;
                            return [2 /*return*/];
                        }
                        rawRows = result['rows'] || [];
                        noDealerUsers = result['no_dealer_users'] || [];
                        assignments = result['assignments'] || [];
                        userMap_2 = {};
                        rawRows.forEach(function (row) {
                            if (!userMap_2[row.user_id]) {
                                userMap_2[row.user_id] = {
                                    user_id: row.user_id,
                                    user_name: row.user_name,
                                    employee_id: row.employee_id,
                                    designation_name: row.designation_name,
                                    contact_01: row.contact_01,
                                    baseStation: row.baseStation,
                                    state_name: row.state_name || '',
                                    division_name: row.division_name || '',
                                    working_division: row.working_division || '',
                                    dealers: []
                                };
                            }
                            userMap_2[row.user_id].dealers.push({ name: row.dealer_name || '', code: row.account_code || '', state: row.dealer_state || '', district: row.dealer_district || '', city: row.dealer_city || '' });
                        });
                        noDealerUsers.forEach(function (row) {
                            if (!userMap_2[row.user_id]) {
                                userMap_2[row.user_id] = {
                                    user_id: row.user_id,
                                    user_name: row.user_name,
                                    employee_id: row.employee_id,
                                    designation_name: row.designation_name,
                                    contact_01: row.contact_01,
                                    baseStation: row.baseStation,
                                    state_name: row.state_name || '',
                                    division_name: row.division_name || '',
                                    working_division: row.working_division || '',
                                    dealers: []
                                };
                            }
                        });
                        parentOf_2 = {};
                        childrenOf_2 = {};
                        for (_i = 0, assignments_3 = assignments; _i < assignments_3.length; _i++) {
                            a = assignments_3[_i];
                            parentOf_2[a.asm_id] = a.rsm_id;
                            if (!childrenOf_2[a.rsm_id])
                                childrenOf_2[a.rsm_id] = [];
                            childrenOf_2[a.rsm_id].push(a.asm_id);
                        }
                        sizeCache_2 = {};
                        subtreeSize_2 = function (id, visiting) {
                            if (visiting === void 0) { visiting = new Set(); }
                            if (sizeCache_2[id] !== undefined)
                                return sizeCache_2[id];
                            if (visiting.has(id))
                                return 0;
                            visiting.add(id);
                            var ch = childrenOf_2[id] || [];
                            var s = 1 + ch.reduce(function (sum, c) { return sum + subtreeSize_2(c, visiting); }, 0);
                            sizeCache_2[id] = s;
                            return s;
                        };
                        Object.keys(userMap_2).forEach(function (id) { return subtreeSize_2(id); });
                        isSeniorUser_1 = function (id) {
                            return (childrenOf_2[id] || []).some(function (cId) { return !!userMap_2[cId]; });
                        };
                        visited_1 = new Set();
                        dfs_1 = function (id) {
                            if (visited_1.has(id))
                                return [];
                            visited_1.add(id);
                            var rows = [];
                            // Descending: jo manage karte hain (larger subtree) pehle aayenge
                            var ch = (childrenOf_2[id] || []).slice().sort(function (a, b) { return (sizeCache_2[b] || 0) - (sizeCache_2[a] || 0); });
                            for (var _i = 0, ch_1 = ch; _i < ch_1.length; _i++) {
                                var cId = ch_1[_i];
                                rows.push.apply(rows, dfs_1(cId));
                            }
                            if (userMap_2[id]) {
                                rows.push({ user: userMap_2[id], isSenior: isSeniorUser_1(id) });
                            }
                            return rows;
                        };
                        allIds = Object.keys(userMap_2);
                        roots = allIds.filter(function (id) { return !parentOf_2[id] || !userMap_2[parentOf_2[id]]; });
                        roots.sort(function (a, b) { return (sizeCache_2[b] || 0) - (sizeCache_2[a] || 0); });
                        orderedUsers = [];
                        for (_a = 0, roots_1 = roots; _a < roots_1.length; _a++) {
                            rootId = roots_1[_a];
                            orderedUsers.push.apply(orderedUsers, dfs_1(rootId));
                        }
                        for (_b = 0, allIds_1 = allIds; _b < allIds_1.length; _b++) {
                            id = allIds_1[_b];
                            if (!visited_1.has(id)) {
                                orderedUsers.push({ user: userMap_2[id], isSenior: false });
                            }
                        }
                        managerSheets_2 = [
                            { name: 'Amit Pandey', color: 'FF1565C0',
                                states: ['MAHARASHTRA', 'UTTAR PRADESH', 'UTTARAKHAND', 'UTTRAKHAND', 'MADHYA PRADESH', 'CHHATTISGARH', 'CHATTISGARH', 'RAJASTHAN', 'GUJARAT', 'DELHI'] },
                            { name: 'Kamaljeet', color: 'FF2E7D32',
                                states: ['PUNJAB', 'HARYANA', 'JAMMU AND KASHMIR', 'JAMMU & KASHMIR', 'KASHMIR', 'JAMMU', 'HIMACHAL PRADESH', 'CHANDIGARH'] },
                            { name: 'Basu Shakti', color: 'FF6A1B9A',
                                states: ['KARNATAKA', 'KERALA', 'ANDHRA PRADESH', 'TELANGANA', 'WEST BENGAL', 'ODISHA', 'ORISSA', 'JHARKHAND', 'ASSAM', 'BIHAR', 'TAMIL NADU', 'GOA', 'TRIPURA'] }
                        ];
                        getManagerIdx_1 = function (stateName) {
                            var s = (stateName || '').toUpperCase().trim();
                            for (var i = 0; i < managerSheets_2.length; i++) {
                                if (managerSheets_2[i].states.some(function (ms) { return s.includes(ms) || ms.includes(s); }))
                                    return i;
                            }
                            return 3; // Others
                        };
                        addSheetRows_2 = function (ws, sheetRows, headerColor) {
                            var headers = ['S.No', 'State', 'Division', 'Employee Name', 'Emp Code', 'Designation', 'Mobile', 'Base Station', 'Dealer Name', 'Dealer Code', 'Dealer State', 'Dealer District', 'Dealer City'];
                            var widths = [7, 22, 28, 30, 14, 28, 16, 20, 36, 18, 20, 22, 20];
                            var hdr = ws.addRow(headers);
                            hdr.height = 18;
                            hdr.eachCell(function (cell) {
                                cell.font = { bold: true, color: { argb: 'FFFFFFFF' }, size: 11 };
                                cell.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: headerColor } };
                                cell.alignment = { vertical: 'middle', horizontal: 'center' };
                                cell.border = { top: { style: 'thin' }, left: { style: 'thin' }, bottom: { style: 'thin' }, right: { style: 'thin' } };
                            });
                            var sno = 1;
                            var colorIdx = 0;
                            sheetRows.forEach(function (item) {
                                var u = item.user;
                                var dealers = u.dealers.length > 0 ? u.dealers : [null];
                                var bg = colorIdx % 2 === 0 ? 'FFE3F2FD' : 'FFFFFFFF';
                                colorIdx++;
                                dealers.forEach(function (d, dIdx) {
                                    var isFirst = dIdx === 0;
                                    var rowData = isFirst
                                        ? [sno++, u.state_name || '', u.division_name || '', u.user_name || '', u.employee_id || '', u.designation_name || '', u.contact_01 || '', u.baseStation || '', d ? d.name : '', d ? d.code : '', d ? d.state : '', d ? d.district : '', d ? d.city : '']
                                        : ['', '', '', '', '', '', '', '', d ? d.name : '', d ? d.code : '', d ? d.state : '', d ? d.district : '', d ? d.city : ''];
                                    var dr = ws.addRow(rowData);
                                    dr.height = 16;
                                    dr.eachCell(function (cell) {
                                        cell.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: bg } };
                                        cell.border = { top: { style: 'thin', color: { argb: 'FFE0E0E0' } }, left: { style: 'thin', color: { argb: 'FFE0E0E0' } }, bottom: { style: 'thin', color: { argb: 'FFE0E0E0' } }, right: { style: 'thin', color: { argb: 'FFE0E0E0' } } };
                                        cell.alignment = { vertical: 'middle' };
                                    });
                                    if (item.isSenior && isFirst) {
                                        dr.getCell(4).font = { bold: true, color: { argb: 'FFFF0000' } };
                                    }
                                });
                                if (item.isSenior) {
                                    ws.addRow([]);
                                }
                            });
                            widths.forEach(function (w, i) { ws.getColumn(i + 1).width = w; });
                        };
                        return [4 /*yield*/, Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e("common")]).then(__webpack_require__.t.bind(null, /*! exceljs */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/exceljs/dist/exceljs.min.js", 7))];
                    case 3:
                        ExcelJS = _c.sent();
                        workbook_2 = new ExcelJS.Workbook();
                        buckets_2 = [[], [], [], []];
                        orderedUsers.forEach(function (item) {
                            buckets_2[getManagerIdx_1(item.user.state_name)].push(item);
                        });
                        // Manager sheets
                        managerSheets_2.forEach(function (mgr, i) {
                            var ws = workbook_2.addWorksheet(mgr.name);
                            addSheetRows_2(ws, buckets_2[i], mgr.color);
                        });
                        wsOthers = workbook_2.addWorksheet('Others');
                        addSheetRows_2(wsOthers, buckets_2[3], 'FF37474F');
                        unmatchedItems = orderedUsers.filter(function (item) { return !(item.user.state_name || '').trim(); });
                        wsUnmatched_1 = workbook_2.addWorksheet('Base Station Unmatched');
                        umHeaders = ['S.No', 'Employee Name', 'Emp Code', 'Designation', 'Mobile', 'Base Station', 'Working Division'];
                        umWidths = [7, 30, 14, 28, 16, 22, 40];
                        umHdr = wsUnmatched_1.addRow(umHeaders);
                        umHdr.height = 18;
                        umHdr.eachCell(function (cell) {
                            cell.font = { bold: true, color: { argb: 'FFFFFFFF' }, size: 11 };
                            cell.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FF6A1B9A' } };
                            cell.alignment = { vertical: 'middle', horizontal: 'center' };
                            cell.border = { top: { style: 'thin' }, left: { style: 'thin' }, bottom: { style: 'thin' }, right: { style: 'thin' } };
                        });
                        if (unmatchedItems.length === 0) {
                            wsUnmatched_1.addRow(['', 'All users have matching base station', '', '', '', '', '']);
                        }
                        else {
                            unmatchedItems.forEach(function (item, idx) {
                                var u = item.user;
                                var dr = wsUnmatched_1.addRow([idx + 1, u.user_name || '', u.employee_id || '', u.designation_name || '', u.contact_01 || '', u.baseStation || '', u.working_division || '']);
                                dr.height = 16;
                                var bg = idx % 2 === 0 ? 'FFF3E5F5' : 'FFFFFFFF';
                                dr.eachCell(function (cell) {
                                    cell.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: bg } };
                                    cell.border = { top: { style: 'thin', color: { argb: 'FFE0E0E0' } }, left: { style: 'thin', color: { argb: 'FFE0E0E0' } }, bottom: { style: 'thin', color: { argb: 'FFE0E0E0' } }, right: { style: 'thin', color: { argb: 'FFE0E0E0' } } };
                                    cell.alignment = { vertical: 'middle' };
                                });
                            });
                        }
                        // Count summary at top (insert before header)
                        wsUnmatched_1.spliceRows(1, 0, ["Total unmatched: " + unmatchedItems.length + " users"]);
                        wsUnmatched_1.mergeCells(1, 1, 1, umHeaders.length);
                        summaryCell = wsUnmatched_1.getCell(1, 1);
                        summaryCell.font = { bold: true, size: 12, color: { argb: 'FF6A1B9A' } };
                        summaryCell.alignment = { vertical: 'middle', horizontal: 'center' };
                        umWidths.forEach(function (w, i) { wsUnmatched_1.getColumn(i + 1).width = w; });
                        mismatchItems = orderedUsers.filter(function (item) {
                            var u = item.user;
                            var mapped = (u.division_name || '').trim().toUpperCase();
                            if (!mapped)
                                return false; // no derived division, skip
                            var workingDivs = (u.working_division || '').split(',').map(function (d) { return d.trim().toUpperCase(); }).filter(function (d) { return d; });
                            if (workingDivs.length === 0)
                                return false; // no working division assigned, skip
                            return !workingDivs.includes(mapped);
                        });
                        wsMismatch_1 = workbook_2.addWorksheet('Division Mismatch');
                        mmHeaders = ['S.No', 'State', 'Mapped Division', 'Working Division', 'Employee Name', 'Emp Code', 'Designation', 'Mobile', 'Base Station'];
                        mmWidths = [7, 22, 30, 40, 30, 14, 28, 16, 20];
                        mmHdr = wsMismatch_1.addRow(mmHeaders);
                        mmHdr.height = 18;
                        mmHdr.eachCell(function (cell) {
                            cell.font = { bold: true, color: { argb: 'FFFFFFFF' }, size: 11 };
                            cell.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FFE65100' } };
                            cell.alignment = { vertical: 'middle', horizontal: 'center' };
                            cell.border = { top: { style: 'thin' }, left: { style: 'thin' }, bottom: { style: 'thin' }, right: { style: 'thin' } };
                        });
                        if (mismatchItems.length === 0) {
                            wsMismatch_1.addRow(['', 'All users have matching division', '', '', '', '', '', '', '']);
                        }
                        else {
                            mismatchItems.forEach(function (item, idx) {
                                var u = item.user;
                                var dr = wsMismatch_1.addRow([
                                    idx + 1,
                                    u.state_name || '',
                                    u.division_name || '',
                                    u.working_division || '',
                                    u.user_name || '',
                                    u.employee_id || '',
                                    u.designation_name || '',
                                    u.contact_01 || '',
                                    u.baseStation || ''
                                ]);
                                dr.height = 16;
                                var bg = idx % 2 === 0 ? 'FFFFF3E0' : 'FFFFFFFF';
                                dr.eachCell(function (cell) {
                                    cell.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: bg } };
                                    cell.border = { top: { style: 'thin', color: { argb: 'FFE0E0E0' } }, left: { style: 'thin', color: { argb: 'FFE0E0E0' } }, bottom: { style: 'thin', color: { argb: 'FFE0E0E0' } }, right: { style: 'thin', color: { argb: 'FFE0E0E0' } } };
                                    cell.alignment = { vertical: 'middle', wrapText: false };
                                });
                            });
                        }
                        mmWidths.forEach(function (w, i) { wsMismatch_1.getColumn(i + 1).width = w; });
                        return [4 /*yield*/, workbook_2.xlsx.writeBuffer()];
                    case 4:
                        buffer = _c.sent();
                        return [4 /*yield*/, Promise.resolve(/*! import() */).then(__webpack_require__.t.bind(null, /*! file-saver */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/file-saver/dist/FileSaver.min.js", 7))];
                    case 5:
                        saveAs = (_c.sent()).saveAs;
                        blob = new Blob([buffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
                        today = new Date().toISOString().slice(0, 10).replace(/-/g, '');
                        saveAs(blob, "Dealer_User_Mapping_" + today + ".xlsx");
                        this.toast.successToastr('Excel downloaded successfully!');
                        return [3 /*break*/, 7];
                    case 6:
                        err_4 = _c.sent();
                        console.error('Dealer User Excel error', err_4);
                        this.toast.errorToastr('Failed to generate excel');
                        return [3 /*break*/, 7];
                    case 7:
                        this.loader = false;
                        return [2 /*return*/];
                }
            });
        });
    };
    SaleUserListComponent.prototype.openExcelDatePicker = function (type) {
        this.dateOverlayFor = type;
        this.excelFromDate = '';
        this.excelToDate = '';
        this.dialogRef = this.dialog2.open(this.excelDatePickerDialog, {
            width: '400px',
            panelClass: 'cs-modal',
            disableClose: false
        });
    };
    SaleUserListComponent.prototype.onDateOverlayDownload = function () {
        if (!this.excelFromDate || !this.excelToDate) {
            this.toast.errorToastr('Please select both From and To dates');
            return;
        }
        this.dialogRef.close();
        if (this.dateOverlayFor === 'secondary') {
            this.downloadDealerSecondaryExcel(this.excelFromDate, this.excelToDate);
        }
        else {
            this.downloadBrandUserExcel(this.excelFromDate, this.excelToDate);
        }
    };
    SaleUserListComponent.prototype.downloadDealerSecondaryExcel = function (fromDate, toDate) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var result, rows, ExcelJS, workbook, ws_3, headers, widths, hdrRow, buffer, saveAs, blob, today, err_5;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.loader = true;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 6, , 7]);
                        return [4 /*yield*/, this.service.post_rqst({ from_date: fromDate, to_date: toDate }, 'Excel/dealer_secondary_data').toPromise()];
                    case 2:
                        result = _a.sent();
                        if (result['statusCode'] !== 200) {
                            this.toast.errorToastr('Failed to fetch data');
                            this.loader = false;
                            return [2 /*return*/];
                        }
                        rows = result['rows'] || [];
                        return [4 /*yield*/, Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e("common")]).then(__webpack_require__.t.bind(null, /*! exceljs */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/exceljs/dist/exceljs.min.js", 7))];
                    case 3:
                        ExcelJS = _a.sent();
                        workbook = new ExcelJS.Workbook();
                        ws_3 = workbook.addWorksheet('Dealer Secondary');
                        headers = ['S.No', 'Dealer Name', 'Dealer City', 'Dealer State', 'Assigned User', 'Secondary By', 'Secondary By Senior', 'Secondary State', 'Secondary City'];
                        widths = [7, 35, 22, 22, 30, 45, 40, 22, 25];
                        hdrRow = ws_3.addRow(headers);
                        hdrRow.height = 20;
                        hdrRow.eachCell(function (cell) {
                            cell.font = { bold: true, color: { argb: 'FFFFFFFF' }, size: 11 };
                            cell.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FF1565C0' } };
                            cell.alignment = { vertical: 'middle', horizontal: 'center', wrapText: false };
                            cell.border = { top: { style: 'thin' }, left: { style: 'thin' }, bottom: { style: 'thin' }, right: { style: 'thin' } };
                        });
                        rows.forEach(function (row, idx) {
                            var dr = ws_3.addRow([
                                idx + 1,
                                row.dealer_name || '',
                                row.dealer_city || '',
                                row.dealer_state || '',
                                row.user_name || '',
                                row.secondary_by || '',
                                row.secondary_by_senior || '',
                                row.secondary_state || '',
                                row.secondary_city || '',
                            ]);
                            dr.height = 16;
                            var bg = idx % 2 === 0 ? 'FFECF3FF' : 'FFFFFFFF';
                            dr.eachCell(function (cell) {
                                cell.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: bg } };
                                cell.border = { top: { style: 'thin', color: { argb: 'FFE0E0E0' } }, left: { style: 'thin', color: { argb: 'FFE0E0E0' } }, bottom: { style: 'thin', color: { argb: 'FFE0E0E0' } }, right: { style: 'thin', color: { argb: 'FFE0E0E0' } } };
                                cell.alignment = { vertical: 'middle', wrapText: false };
                            });
                        });
                        widths.forEach(function (w, i) { ws_3.getColumn(i + 1).width = w; });
                        return [4 /*yield*/, workbook.xlsx.writeBuffer()];
                    case 4:
                        buffer = _a.sent();
                        return [4 /*yield*/, Promise.resolve(/*! import() */).then(__webpack_require__.t.bind(null, /*! file-saver */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/file-saver/dist/FileSaver.min.js", 7))];
                    case 5:
                        saveAs = (_a.sent()).saveAs;
                        blob = new Blob([buffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
                        today = new Date().toISOString().slice(0, 10).replace(/-/g, '');
                        saveAs(blob, "Dealer_Secondary_" + today + ".xlsx");
                        this.toast.successToastr('Excel downloaded successfully!');
                        return [3 /*break*/, 7];
                    case 6:
                        err_5 = _a.sent();
                        console.error('Dealer Secondary Excel error', err_5);
                        this.toast.errorToastr('Failed to generate excel');
                        return [3 /*break*/, 7];
                    case 7:
                        this.loader = false;
                        return [2 /*return*/];
                }
            });
        });
    };
    SaleUserListComponent.prototype.downloadBrandUserExcel = function (fromDate, toDate) {
        return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, function () {
            var result, brands_1, rows, userMap_3, users, ExcelJS, workbook, ws_4, headers, hdrRow, i, buffer, saveAs, blob, label, err_6;
            return tslib__WEBPACK_IMPORTED_MODULE_0__["__generator"](this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.loader = true;
                        _a.label = 1;
                    case 1:
                        _a.trys.push([1, 6, , 7]);
                        return [4 /*yield*/, this.service.post_rqst({ from_date: fromDate, to_date: toDate }, 'Excel/user_brand_qty_data').toPromise()];
                    case 2:
                        result = _a.sent();
                        if (result['statusCode'] !== 200) {
                            this.toast.errorToastr('Failed to fetch data');
                            this.loader = false;
                            return [2 /*return*/];
                        }
                        brands_1 = result['brands'] || [];
                        rows = result['rows'] || [];
                        userMap_3 = {};
                        rows.forEach(function (row) {
                            if (!userMap_3[row.user_id]) {
                                userMap_3[row.user_id] = { user_name: row.user_name, employee_id: row.employee_id, brandQty: {} };
                            }
                            userMap_3[row.user_id].brandQty[row.brand_code] = (userMap_3[row.user_id].brandQty[row.brand_code] || 0) + (Number(row.total_qty) || 0);
                        });
                        users = Object.values(userMap_3).sort(function (a, b) { return a.user_name.localeCompare(b.user_name); });
                        return [4 /*yield*/, Promise.all(/*! import() */[__webpack_require__.e(0), __webpack_require__.e("common")]).then(__webpack_require__.t.bind(null, /*! exceljs */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/exceljs/dist/exceljs.min.js", 7))];
                    case 3:
                        ExcelJS = _a.sent();
                        workbook = new ExcelJS.Workbook();
                        ws_4 = workbook.addWorksheet('Brand Qty');
                        headers = ['S.No', 'Employee Name', 'Emp Code'].concat(brands_1.map(function (b) { return b.brand_name; }));
                        hdrRow = ws_4.addRow(headers);
                        hdrRow.height = 20;
                        hdrRow.eachCell(function (cell) {
                            cell.font = { bold: true, color: { argb: 'FFFFFFFF' }, size: 11 };
                            cell.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FF1B5E20' } };
                            cell.alignment = { vertical: 'middle', horizontal: 'center', wrapText: false };
                            cell.border = { top: { style: 'thin' }, left: { style: 'thin' }, bottom: { style: 'thin' }, right: { style: 'thin' } };
                        });
                        users.forEach(function (user, idx) {
                            var rowData = [
                                idx + 1,
                                user.user_name,
                                user.employee_id
                            ].concat(brands_1.map(function (b) { return user.brandQty[b.brand_code] || 0; }));
                            var dr = ws_4.addRow(rowData);
                            dr.height = 16;
                            var bg = idx % 2 === 0 ? 'FFE8F5E9' : 'FFFFFFFF';
                            dr.eachCell(function (cell, colNo) {
                                cell.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: bg } };
                                cell.border = { top: { style: 'thin', color: { argb: 'FFE0E0E0' } }, left: { style: 'thin', color: { argb: 'FFE0E0E0' } }, bottom: { style: 'thin', color: { argb: 'FFE0E0E0' } }, right: { style: 'thin', color: { argb: 'FFE0E0E0' } } };
                                cell.alignment = { vertical: 'middle', horizontal: colNo > 3 ? 'center' : 'left', wrapText: false };
                            });
                        });
                        ws_4.getColumn(1).width = 7;
                        ws_4.getColumn(2).width = 30;
                        ws_4.getColumn(3).width = 14;
                        for (i = 4; i <= headers.length; i++) {
                            ws_4.getColumn(i).width = 18;
                        }
                        return [4 /*yield*/, workbook.xlsx.writeBuffer()];
                    case 4:
                        buffer = _a.sent();
                        return [4 /*yield*/, Promise.resolve(/*! import() */).then(__webpack_require__.t.bind(null, /*! file-saver */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/file-saver/dist/FileSaver.min.js", 7))];
                    case 5:
                        saveAs = (_a.sent()).saveAs;
                        blob = new Blob([buffer], { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
                        label = fromDate.replace(/-/g, '') + '_' + toDate.replace(/-/g, '');
                        saveAs(blob, "Brand_User_Qty_" + label + ".xlsx");
                        this.toast.successToastr('Excel downloaded successfully!');
                        return [3 /*break*/, 7];
                    case 6:
                        err_6 = _a.sent();
                        console.error('Brand User Excel error', err_6);
                        this.toast.errorToastr('Failed to generate excel');
                        return [3 /*break*/, 7];
                    case 7:
                        this.loader = false;
                        return [2 /*return*/];
                }
            });
        });
    };
    SaleUserListComponent.prototype.upload_excel = function (type) {
        var _this = this;
        var dialogRef = this.dialog2.open(src_app_upload_file_modal_upload_file_modal_component__WEBPACK_IMPORTED_MODULE_9__["UploadFileModalComponent"], {
            width: '500px',
            panelClass: 'cs-modal',
            disableClose: true,
            data: {
                'from': 'salesUser',
                'modal_type': type
            }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result != false) {
                _this.getUserList(_this.userType);
            }
        });
    };
    SaleUserListComponent.prototype.upload_postal_master = function () {
        var _this = this;
        var dialogRef = this.dialog2.open(src_app_upload_file_modal_upload_file_modal_component__WEBPACK_IMPORTED_MODULE_9__["UploadFileModalComponent"], {
            width: '500px',
            panelClass: 'cs-modal',
            disableClose: true,
            data: {
                'from': 'postalMaster',
                'modal_type': 'insert'
            }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result != false) {
                _this.getUserList(_this.userType);
            }
        });
    };
    SaleUserListComponent.prototype.refresh = function () {
        this.start = 0;
        this.filter = {};
        this.service.setData(this.filter);
        this.service.currentUserID = '';
        this.getUserList(this.userType);
    };
    SaleUserListComponent.prototype.userDetail = function (id) {
        var _this = this;
        var value = { "id": id };
        this.service.post_rqst(value, "User/user_detail").subscribe(function (result) {
            _this.rout.navigate(['/sale-user-detail/' + id]);
        });
    };
    SaleUserListComponent.prototype.updateStatus = function (index, id, event) {
        var _this = this;
        // if (this.userType != 'Inactive User') {
        if (!event.checked) {
            // Open the date picker dialog when deactivating the user
            this.dialogRef = this.dialog2.open(this.datePickerDialog);
            this.dialogRef.afterClosed().subscribe(function (result) {
                if (result) {
                    _this.lastWorkingDate = result.lastWorkingDate;
                    _this.reasonToLeave = result.reasonToLeave;
                    _this.remarks = result.remarks;
                    _this.changeUserStatus(index, id, event, _this.lastWorkingDate, _this.reasonToLeave, _this.remarks);
                }
                else {
                    // Revert the toggle if the action was cancelled
                    _this.userlist[index].user_status = true;
                }
            });
        }
        else {
            this.changeUserStatus(index, id, event, '', '', '');
        }
        // } else {
        //     // Prevent activation and show error message for non-blocked users
        //     this.toast.errorToastr("Contact to support team");
        //     event.source.checked = false; // Revert the toggle
        //     this.userlist[index].disableToggle = true; // Disable the button
        // }
    };
    SaleUserListComponent.prototype.permissionstatus = function (index, id, event, type) {
        var _this = this;
        var flagValue = event.checked ? 1 : 0;
        if (type === 'geoFencing') {
            this.userlist[index].geoFencingFlag = flagValue;
        }
        else if (type === 'checkinCamera') {
            this.userlist[index].checkinCameraFlag = flagValue;
        }
        else if (type === 'backgroundTracking') {
            this.userlist[index].background_tracking_flag = flagValue;
        }
        this.service.post_rqst({
            id: id,
            geoFencingFlag: this.userlist[index].geoFencingFlag,
            checkinCameraFlag: this.userlist[index].checkinCameraFlag,
            backgroundTrackingFlag: this.userlist[index].background_tracking_flag
        }, "Master/geoFenceChecinCameraFlag")
            .subscribe(function (resp) {
            if (resp['statusCode'] == 200) {
                _this.toast.successToastr(resp['statusMsg']);
                _this.getUserList(_this.userType);
            }
            else {
                _this.toast.errorToastr(resp['statusMsg']);
            }
        });
    };
    //   updateStatus(index, id, event) {
    //     if (!event.checked) {
    //         // Open the date picker dialog when deactivating the user
    //         this.dialogRef = this.dialog2.open(this.datePickerDialog);
    //         this.dialogRef.afterClosed().subscribe(result => {
    //             if (result) {
    //                 this.lastWorkingDate = result.lastWorkingDate;
    //                 this.reasonToLeave = result.reasonToLeave;
    //                 this.remarks = result.remarks;
    //                 this.changeUserStatus(index, id, event, this.lastWorkingDate, this.reasonToLeave, this.remarks);
    //             } else {
    //                 // Revert the toggle if the action was cancelled
    //                 this.userlist[index].user_status = true;
    //             }
    //         });
    //     } else {
    //         // Prevent activation and show message
    //         this.toast.errorToastr("Contact to support team");
    //         event.source.checked = false; // Revert the toggle
    //         this.userlist[index].disableToggle = true; // Disable the button
    //     }
    // }
    // updateStatus(index, id, event) {
    //   if (!event.checked) {
    //     // Open the date picker dialog when deactivating the user
    //     this.dialogRef = this.dialog2.open(this.datePickerDialog);
    //     this.dialogRef.afterClosed().subscribe(result => {
    //       console.log(result,"line 284")
    //       if (result) {
    //         console.log("line 286")
    //         this.lastWorkingDate = result.lastWorkingDate;
    //         this.reasonToLeave = result.reasonToLeave;
    //         this.remarks = result.remarks;
    //         this.changeUserStatus(index, id, event, this.lastWorkingDate, this.reasonToLeave,this.remarks);
    //       } else {
    //         // Revert the toggle if the action was cancelled
    //         this.userlist[index].user_status = true;
    //       }
    //     });
    //   } else {
    //     // Activate user without asking for last working date
    //     this.changeUserStatus(index, id, event,'','','');
    //   }
    // }
    SaleUserListComponent.prototype.changeUserStatus = function (index, id, event, lastWorkingDate, reasonToLeave, remarks) {
        var _this = this;
        if (lastWorkingDate === void 0) { lastWorkingDate = null; }
        var message = "You Want To Change Status !";
        this.alert.confirm(message).then(function (result) {
            if (result) {
                _this.userlist[index].status = event.checked ? "1" : "0";
                var value = _this.userlist[index].status;
                var payload = {
                    'id': id,
                    'status': value,
                    'status_changed_by_id': _this.logined_user_data.data.id,
                    'status_changed_by_name': _this.logined_user_data.data.name
                };
                if (lastWorkingDate) {
                    payload['last_working_date'] = _this.datePipe.transform(lastWorkingDate, 'yyyy-MM-dd');
                }
                if (reasonToLeave) {
                    payload['reason_to_leave'] = reasonToLeave;
                }
                if (remarks) {
                    payload['remarks'] = remarks;
                }
                _this.service.post_rqst(payload, "Master/userStatusChange").subscribe(function (resp) {
                    if (resp['statusCode'] == 200) {
                        _this.toast.successToastr(resp['statusMsg']);
                        _this.getUserList(_this.userType);
                    }
                    else {
                        _this.toast.errorToastr(resp['statusMsg']);
                    }
                });
            }
        });
    };
    SaleUserListComponent.prototype.resetDevice = function (index, id) {
        var _this = this;
        this.alert.confirm("You Want To  Reset Device !").then(function (result) {
            if (result) {
                _this.service.post_rqst({ 'id': id, 'type': 'user' }, "Master/resetDeviceId")
                    .subscribe(function (resp) {
                    if (resp['statusCode'] == 200) {
                        _this.toast.successToastr(resp['statusMsg']);
                        _this.getUserList(_this.userType);
                    }
                    else {
                        _this.toast.errorToastr(resp['statusMsg']);
                    }
                });
            }
        });
    };
    SaleUserListComponent.prototype.openBottomSheet = function () {
        var _this = this;
        this.bottomSheet.open(src_app_bottom_sheet_bottom_sheet_component__WEBPACK_IMPORTED_MODULE_11__["BottomSheetComponent"], {
            data: {
                'filterPage': 'distribution_list',
            }
        });
        this.bottomSheet._openedBottomSheetRef.afterDismissed().subscribe(function (data) {
            if (data != undefined) {
                _this.filter.date_from = data.date_from;
                _this.filter.date_to = data.date_to;
                // this.search.userId = data.user_id;
                _this.getUserList(_this.userType);
            }
        });
    };
    SaleUserListComponent.prototype.sortData = function () {
        this.userlist.reverse();
    };
    SaleUserListComponent.prototype.getHierarchy = function () {
        var _this = this;
        this.loader = true;
        this.service.post_rqst({}, "Master/getUserhierarchy").subscribe(function (result) {
            if (result['statusCode'] == 200) {
                _this.hierarchy = result['level1'] || [];
                _this.filteredHierarchy = _this.hierarchy;
            }
            else {
                _this.toast.errorToastr(result['statusMsg']);
            }
            _this.loader = false;
        });
    };
    SaleUserListComponent.prototype.toggleCollapse = function (node) {
        node._collapsed = !node._collapsed;
    };
    SaleUserListComponent.prototype.getInitials = function (name) {
        if (!name)
            return '?';
        var parts = name.trim().split(' ');
        if (parts.length >= 2) {
            return (parts[0][0] + parts[1][0]).toUpperCase();
        }
        return parts[0][0].toUpperCase();
    };
    SaleUserListComponent.prototype.getAvatarColor = function (name) {
        if (!name)
            return this.avatarColors[0];
        var hash = 0;
        for (var i = 0; i < name.length; i++) {
            hash = name.charCodeAt(i) + ((hash << 5) - hash);
        }
        return this.avatarColors[Math.abs(hash) % this.avatarColors.length];
    };
    SaleUserListComponent.prototype.zoomIn = function () {
        if (this.zoomLevel < 1.5)
            this.zoomLevel += 0.1;
    };
    SaleUserListComponent.prototype.zoomOut = function () {
        if (this.zoomLevel > 0.3)
            this.zoomLevel -= 0.1;
    };
    SaleUserListComponent.prototype.resetZoom = function () {
        this.zoomLevel = 1;
    };
    SaleUserListComponent.prototype.toggleFullscreen = function () {
        this.isFullscreen = !this.isFullscreen;
    };
    SaleUserListComponent.prototype.onDragStart = function (event) {
        // Only drag on left mouse button, ignore clicks on buttons/links/inputs
        var tag = event.target.tagName.toLowerCase();
        if (tag === 'button' || tag === 'a' || tag === 'input' || tag === 'i' || tag === 'img')
            return;
        this.isDragging = true;
        var container = this.orgChartContainer.nativeElement;
        if (!container)
            return;
        this.dragStartX = event.clientX;
        this.dragStartY = event.clientY;
        this.scrollStartX = container.scrollLeft;
        this.scrollStartY = container.scrollTop;
    };
    SaleUserListComponent.prototype.onDragMove = function (event) {
        if (!this.isDragging)
            return;
        event.preventDefault();
        var container = this.orgChartContainer.nativeElement;
        if (!container)
            return;
        var dx = event.clientX - this.dragStartX;
        var dy = event.clientY - this.dragStartY;
        container.scrollLeft = this.scrollStartX - dx;
        container.scrollTop = this.scrollStartY - dy;
    };
    SaleUserListComponent.prototype.onDragEnd = function () {
        this.isDragging = false;
    };
    SaleUserListComponent.prototype.filterHierarchy = function () {
        var term = (this.hierarchySearch || '').trim().toLowerCase();
        if (!term) {
            this.clearMatchFlags(this.hierarchy);
            this.filteredHierarchy = this.hierarchy;
            return;
        }
        this.filteredHierarchy = this.deepFilter(this.hierarchy, term);
    };
    SaleUserListComponent.prototype.deepFilter = function (nodes, term) {
        if (!nodes)
            return [];
        var result = [];
        for (var _i = 0, nodes_1 = nodes; _i < nodes_1.length; _i++) {
            var node = nodes_1[_i];
            var nameMatch = (node.name || '').toLowerCase().includes(term);
            var codeMatch = (node.employee_id || '').toLowerCase().includes(term);
            var roleMatch = (node.role_name || '').toLowerCase().includes(term);
            var selfMatch = nameMatch || codeMatch || roleMatch;
            var filteredChildren = this.deepFilter(node.children, term);
            if (selfMatch || filteredChildren.length > 0) {
                var copy = tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, node, { _match: selfMatch, children: filteredChildren, _collapsed: false });
                result.push(copy);
            }
        }
        return result;
    };
    SaleUserListComponent.prototype.clearMatchFlags = function (nodes) {
        if (!nodes)
            return;
        for (var _i = 0, nodes_2 = nodes; _i < nodes_2.length; _i++) {
            var node = nodes_2[_i];
            node._match = false;
            this.clearMatchFlags(node.children);
        }
    };
    SaleUserListComponent.prototype.goToImage = function (image) {
        var dialogRef = this.dialog.open(src_app_image_module_image_module_component__WEBPACK_IMPORTED_MODULE_12__["ImageModuleComponent"], {
            panelClass: 'Image-modal',
            data: {
                'image': image,
                'type': 'base64'
            }
        });
        dialogRef.afterClosed().subscribe(function (result) {
        });
    };
    SaleUserListComponent.prototype.delete = function (id) {
        var _this = this;
        this.alert.delete('System User!').then(function (result) {
            if (result) {
                _this.service.post_rqst({ 'id': id }, "Master/deleteUser").subscribe(function (result) {
                    if (result['statusCode'] == 200) {
                        _this.toast.successToastr(result['statusMsg']);
                        _this.getUserList(_this.userType);
                    }
                    else {
                        _this.toast.errorToastr(result['statusMsg']);
                    }
                });
            }
        });
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('datePickerDialog'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])
    ], SaleUserListComponent.prototype, "datePickerDialog", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('excelDatePickerDialog'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["TemplateRef"])
    ], SaleUserListComponent.prototype, "excelDatePickerDialog", void 0);
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('orgChartContainer'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], SaleUserListComponent.prototype, "orgChartContainer", void 0);
    SaleUserListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-sale-user-list',
            template: __webpack_require__(/*! ./sale-user-list.component.html */ "./src/app/user/sale-user-list/sale-user-list.component.html"),
            animations: [Object(_router_animation_router_animation_component__WEBPACK_IMPORTED_MODULE_2__["slideToTop"])()]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_dialog_component__WEBPACK_IMPORTED_MODULE_5__["DialogComponent"], _angular_common__WEBPACK_IMPORTED_MODULE_13__["DatePipe"], ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_8__["ToastrManager"], src_services_DatabaseService__WEBPACK_IMPORTED_MODULE_3__["DatabaseService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatDialog"], src_app_localstorage_service__WEBPACK_IMPORTED_MODULE_7__["sessionStorage"], _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatBottomSheet"]])
    ], SaleUserListComponent);
    return SaleUserListComponent;
}());



/***/ }),

/***/ "./src/app/user/user-add/user-add.component.html":
/*!*******************************************************!*\
  !*** ./src/app/user/user-add/user-add.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-container\">\r\n  <div class=\"tools-container\">\r\n    <a mat-icon-button matTooltip=\"Back\" (click)=\"back()\">\r\n      <i class=\"material-icons\">arrow_back</i>\r\n    </a>\r\n    <h2>Add New User</h2>\r\n  </div>\r\n\r\n  <div class=\"container pt10 pl10 pr10 pb50\">\r\n    <form name=\"detail\" #f=\"ngForm\" validate (ngSubmit)=\" f.valid && submitDetail()\">\r\n      <div class=\"row\">\r\n        <div class=\"col s12\">\r\n          <div class=\"card pb0\">\r\n            <div class=\"card-head\">\r\n              <h2>User Type</h2>\r\n            </div>\r\n            <div class=\"card-body cs-form\">\r\n              <div class=\"row\">\r\n                <div class=\"col s12 m6 l6\">\r\n                  <mat-radio-group class=\"example-section\" id=\"user_type\" name=\"user_type\" [(ngModel)]=\"data.user_type\"\r\n                    (ngModelChange)=\"data.user_type == 'Sales User' ? getBrand() : ''\">\r\n                    <mat-radio-button class=\"wp30\" color=\"primary\" (change)=\"get_sales_user_type('', $event)\"\r\n                      value=\"Sales User\">\r\n                      Sales User\r\n                    </mat-radio-button>\r\n                    <mat-radio-button class=\"wp30\" color=\"primary\" (change)=\"get_sales_user_type('', $event);\"\r\n                      value=\"System User\">\r\n                      System User\r\n                    </mat-radio-button>\r\n\r\n                    <!-- <mat-radio-button class=\"wp30\" color=\"primary\" (change)=\"get_sales_user_type('', $event);\"\r\n                      value=\"Service Engineer\">\r\n                      Service Engineer\r\n                    </mat-radio-button> -->\r\n                  </mat-radio-group>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"card-head mt16\">\r\n              <h2>Basic Information</h2>\r\n            </div>\r\n            <div class=\"card-body cs-form\">\r\n              <div class=\"row\">\r\n                <div class=\"col s12 m3 l3\" *ngIf=\"data.user_type != 'Service Engineer'\">\r\n\r\n                  <div class=\"wp100\">\r\n                    <mat-form-field appearance=\"outline\">\r\n                      <mat-label>Select Designation</mat-label>\r\n                      <mat-select name=\"user_role\" placeholder=\"Role\" [(ngModel)]=\"data.user_role\" #user_role=\"ngModel\"\r\n                        (selectionChange)=\"findId(data.user_role)\" required>\r\n                        <mat-option value=\"\" disabled>Select Role</mat-option>\r\n                        <mat-option *ngFor=\"let row of sales_type\" value=\"{{row.id}}\">{{row.role_name}}</mat-option>\r\n                      </mat-select>\r\n                    </mat-form-field>\r\n\r\n                    <div class=\"alert alert-danger\" *ngIf=\"user_role.touched || f.submitted\">\r\n                      <p *ngIf=\"user_role.errors?.required\">This field is required</p>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n\r\n                <!-- Plant dropdown — visible for designation 52 (Guard) and 57 -->\r\n                <div class=\"col s12 m3 l3\" *ngIf=\"data.user_role == '52' || data.user_role == '57'\">\r\n                  <mat-form-field appearance=\"outline\">\r\n                    <mat-label>Plant</mat-label>\r\n                    <mat-select name=\"plant\" [(ngModel)]=\"data.plant\" #plant_field=\"ngModel\"\r\n                      [required]=\"data.user_role == '52' || data.user_role == '57'\">\r\n                      <mat-option value=\"\">-- Select Plant --</mat-option>\r\n                      <mat-option value=\"Hosiarpur\">Hosiarpur</mat-option>\r\n                      <mat-option value=\"Chamarajanagar\">Chamarajanagar</mat-option>\r\n                    </mat-select>\r\n                  </mat-form-field>\r\n                  <div class=\"alert alert-danger\" *ngIf=\"plant_field.touched || f.submitted\">\r\n                    <p *ngIf=\"plant_field.errors?.required\">Plant is required</p>\r\n                  </div>\r\n                </div>\r\n                <div class=\"col s12 m3 l3\">\r\n                  <mat-form-field appearance=\"outline\" [ngClass]=\"{'has-error' : name.invalid } \">\r\n                    <mat-label>Name</mat-label>\r\n                    <input matInput placeholder=\"Type Here ...\" name=\"name\" #name=\"ngModel\" [(ngModel)]=\"data.name\"\r\n                      [ngClass]=\"{'has-error' : name.invalid } \" required>\r\n                  </mat-form-field>\r\n                  <div class=\"alert alert-danger\" *ngIf=\"name.touched || f.submitted\">\r\n                    <p *ngIf=\"name.errors?.required\">This field is required</p>\r\n                  </div>\r\n                </div>\r\n\r\n                <div class=\"col s12 m3 l3\">\r\n                  <mat-form-field appearance=\"outline\" [ngClass]=\"{'has-error' : exist == true } \">\r\n                    <mat-label>Mobile No</mat-label>\r\n                    <input matInput placeholder=\"Type Here ...\" name=\"mobileno\" #mobileno=\"ngModel\"\r\n                      [(ngModel)]=\"data.mobileno\" minlength=\"10\" maxlength=\"10\" min=\"0\"\r\n                      (keypress)=\"MobileNumber($event)\" (input)=\"check_number()\" pattern=\"^[6-9][0-9]{0,9}$\" required>\r\n                  </mat-form-field>\r\n\r\n                  <div class=\"alert alert-danger\" *ngIf=\"mobileno.touched || f.submitted\">\r\n                    <p *ngIf=\"mobileno.errors?.required\">This field is required</p>\r\n                    <p *ngIf=\"mobileno.errors?.pattern\">Invalid Mobile Number</p>\r\n                    <p *ngIf=\"!mobileno.errors?.pattern  && (mobileno.errors?.maxlength || mobileno.errors?.minlength)\">\r\n                      Mobile\r\n                      No should be of 10 digits..\r\n                    </p>\r\n                  </div>\r\n\r\n\r\n                  <div class=\"alert alert-danger\" *ngIf=\"exist\">\r\n                    Mobile no. already Exists.\r\n                  </div>\r\n                </div>\r\n                <div class=\"col s12 m3 l3\">\r\n                  <mat-form-field appearance=\"outline\" [ngClass]=\"{'has-error' : exist == true } \">\r\n                    <mat-label>Official Mobile No</mat-label>\r\n                    <input matInput placeholder=\"Type Here ...\" name=\"offmobileno\" #offmobileno=\"ngModel\"\r\n                      [(ngModel)]=\"data.offmobileno\" minlength=\"10\" maxlength=\"10\" min=\"0\"\r\n                      (keypress)=\"MobileNumber($event)\" (input)=\"check_number()\" pattern=\"^[6-9][0-9]{0,9}$\">\r\n                  </mat-form-field>\r\n\r\n                  <div class=\"alert alert-danger\" *ngIf=\"offmobileno.touched || f.submitted\">\r\n                    <p *ngIf=\"offmobileno.errors?.required\">This field is required</p>\r\n                    <p *ngIf=\"offmobileno.errors?.pattern\">Invalid Mobile Number</p>\r\n                    <p\r\n                      *ngIf=\"!offmobileno.errors?.pattern  && (offmobileno.errors?.maxlength || offmobileno.errors?.minlength)\">\r\n                      Mobile\r\n                      No should be of 10 digits..\r\n                    </p>\r\n                  </div>\r\n\r\n\r\n                  <div class=\"alert alert-danger\" *ngIf=\"exist\">\r\n                    Mobile no. already Exists.\r\n                  </div>\r\n                </div>\r\n\r\n                <div class=\"col s12 m3 l3\">\r\n                  <mat-form-field appearance=\"outline\">\r\n                    <mat-label>Official Email ID</mat-label>\r\n                    <input matInput placeholder=\"Type Here ...\" type=\"email\" name=\"email\" #email=\"ngModel\"\r\n                      [(ngModel)]=\"data.email\" pattern=\"[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$\">\r\n                  </mat-form-field>\r\n                  <div class=\"alert alert-danger\" *ngIf=\"email.touched || f.submitted\">\r\n                    <p *ngIf=\"email.errors?.pattern\">This is not a valid Email ID !</p>\r\n                  </div>\r\n                </div>\r\n                <div class=\"col s12 m3 l3\">\r\n                  <mat-form-field appearance=\"outline\">\r\n                    <mat-label>Email ID</mat-label>\r\n                    <input matInput placeholder=\"Type Here ...\" type=\"email\" name=\"PersonalEmail\"\r\n                      #PersonalEmail=\"ngModel\" [(ngModel)]=\"data.PersonalEmail\"\r\n                      pattern=\"[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$\">\r\n                  </mat-form-field>\r\n                  <div class=\"alert alert-danger\" *ngIf=\"PersonalEmail.touched || f.submitted\">\r\n                    <p *ngIf=\"PersonalEmail.errors?.pattern\">This is not a valid Email ID !</p>\r\n                  </div>\r\n                </div>\r\n                <div class=\"col s12 m3 l3\">\r\n                  <mat-form-field appearance=\"outline\">\r\n                    <mat-label>D.O.B</mat-label>\r\n                    <input name=\"dob\" matInput placeholder=\"\" #dob=\"ngModel\" [(ngModel)]=\"data.dob\" [max]=\"myDate\"\r\n                      [matDatepicker]=\"picker\" disabled>\r\n                    <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\r\n                    <mat-datepicker #picker disabled=\"false\"></mat-datepicker>\r\n                  </mat-form-field>\r\n                </div>\r\n\r\n                <div class=\"col s12 m3 l3\">\r\n                  <mat-form-field class=\"cs-input\" appearance=\"outline\">\r\n                    <mat-label>D.O.A</mat-label>\r\n                    <input name=\"D.O.A\" matInput [matDatepicker]=\"pickers\" placeholder=\"\" #doa=\"ngModel\" [max]=\"myDate\"\r\n                      [(ngModel)]=\"data.doa\" disabled>\r\n                    <mat-datepicker-toggle matSuffix [for]=\"pickers\"></mat-datepicker-toggle>\r\n                    <mat-datepicker #pickers disabled=\"false\"></mat-datepicker>\r\n                  </mat-form-field>\r\n                </div>\r\n              </div>\r\n\r\n              <div class=\"row\" *ngIf=\"data.user_type != 'Service Engineer'\">\r\n                <div class=\"col s12 m3 l3\">\r\n                  <mat-form-field appearance=\"outline\" [ngClass]=\"{'has-error' : employee_id.invalid } \">\r\n                    <mat-label>Employee Code</mat-label>\r\n                    <input matInput placeholder=\"Type Here ...\" name=\"employee_id\" #employee_id=\"ngModel\"\r\n                      [(ngModel)]=\"data.employee_id\" [ngClass]=\"{'has-error' : employee_id.invalid } \" required>\r\n                  </mat-form-field>\r\n                  <div class=\"alert alert-danger\" *ngIf=\"employee_id.touched || f.submitted\">\r\n                    <p *ngIf=\"employee_id.errors?.required\">This field is required</p>\r\n                  </div>\r\n\r\n                </div>\r\n                <div class=\"col s12 m3 l3\">\r\n                  <mat-form-field appearance=\"outline\">\r\n                    <mat-label>Date of joining</mat-label>\r\n                    <input name=\"D.O.J\" matInput [matDatepicker]=\"pickers\" placeholder=\"\" [max]=\"maxDate\"\r\n                      #date_of_joining=\"ngModel\" readonly [(ngModel)]=\"data.date_of_joining\">\r\n                    <mat-datepicker-toggle matSuffix [for]=\"pickers\"></mat-datepicker-toggle>\r\n                    <mat-datepicker #pickers></mat-datepicker>\r\n                  </mat-form-field>\r\n                </div>\r\n\r\n                <div class=\"col s12 m3 l3\">\r\n                  <mat-form-field appearance=\"outline\">\r\n                    <mat-label>Weekly Off</mat-label>\r\n                    <mat-select name=\"weekly_off\" #weekly_off=\"ngModel\" [(ngModel)]=\"data.weekly_off\">\r\n                      <mat-option disabled=\"\">Select Week</mat-option>\r\n                      <mat-option value=\"Sunday\">Sunday</mat-option>\r\n                      <mat-option value=\"Monday\">Monday</mat-option>\r\n                      <mat-option value=\"Tuesday\">Tuesday</mat-option>\r\n                      <mat-option value=\"Wednesday\">Wednesday</mat-option>\r\n                      <mat-option value=\"Thursday\">Thursday</mat-option>\r\n                      <mat-option value=\"Friday\">Friday</mat-option>\r\n                      <mat-option value=\"Saturday\">Saturday</mat-option>\r\n                    </mat-select>\r\n                  </mat-form-field>\r\n                </div>\r\n\r\n                <div class=\"col s12 m3 l3\" *ngIf=\"data.user_type == 'Sales User'\">\r\n                  <mat-form-field appearance=\"outline\">\r\n                    <mat-label>Reporting Manager</mat-label>\r\n                    <mat-select name=\"assign_user\" #assign_user=\"ngModel\" [(ngModel)]=\"data.assign_user\">\r\n                      <mat-option>\r\n                        <ngx-mat-select-search noEntriesFoundLabel=\"'no data found'\" placeholderLabel=\"Search..\"\r\n                          (keyup)=\"getReportManager($event.target.value)\"></ngx-mat-select-search>\r\n                      </mat-option>\r\n                      <mat-option *ngFor=\"let list of report_manager;let index=index\" value=\"{{list.id}}\">\r\n                        {{list.name}} - {{list.role_name}}\r\n                      </mat-option>\r\n                    </mat-select>\r\n                  </mat-form-field>\r\n                </div>\r\n\r\n                <!-- <div class=\"col s12 m3 l3\" *ngIf=\"data.user_type != 'Sales User'\">\r\n                  <mat-form-field appearance=\"outline\">\r\n                    <mat-label>Assign Users</mat-label>\r\n                    <mat-select name=\"assign_system_user\" #assign_system_user=\"ngModel\" multiple\r\n                      [(ngModel)]=\"data.assign_system_user\" required>\r\n                      <mat-option>\r\n                        <ngx-mat-select-search noEntriesFoundLabel=\"'no data found'\" placeholderLabel=\"Search..\"\r\n                          (keyup)=\"getReportManager($event.target.value)\"></ngx-mat-select-search>\r\n                      </mat-option>\r\n                      <mat-option *ngFor=\"let list of report_manager;let index=index\" value=\"{{list.id}}\">\r\n                        {{list.name}} - {{list.role_name}}\r\n                      </mat-option>\r\n                    </mat-select>\r\n                  </mat-form-field>\r\n\r\n                  <div class=\"alert alert-danger\" *ngIf=\"assign_system_user.touched || f.submitted\">\r\n                    <p *ngIf=\"assign_system_user.errors?.required\">This field is required</p>\r\n                  </div>\r\n                </div> -->\r\n\r\n                <div class=\"col s12 m3 l3\" *ngIf=\"data.user_type == 'Sales User'\">\r\n                  <mat-form-field appearance=\"outline\">\r\n                    <mat-label>Division</mat-label>\r\n                    <mat-select name=\"working_division\" #working_division=\"ngModel\" multiple\r\n                      [(ngModel)]=\"data.working_division\" required>\r\n                      <mat-option disabled=\"\">Select division</mat-option>\r\n                      <mat-option *ngFor=\"let row of division_list\" value=\"{{row.division_name}}\">\r\n                        {{row.division_name}}\r\n                      </mat-option>\r\n                    </mat-select>\r\n                  </mat-form-field>\r\n\r\n                  <div class=\"alert alert-danger\" *ngIf=\"working_division.touched || f.submitted\">\r\n                    <p *ngIf=\"working_division.errors?.required\">This field is required</p>\r\n                  </div>\r\n\r\n\r\n\r\n                </div>\r\n                <div class=\"col s12 m3 l3\" *ngIf=\"data.user_type == 'Sales User'\">\r\n                  <mat-form-field appearance=\"outline\" [ngClass]=\"{'has-error' : baseStation.invalid } \">\r\n                    <mat-label>Base Station</mat-label>\r\n                    <input matInput placeholder=\"Type Here ...\" name=\"baseStation\" #baseStation=\"ngModel\"\r\n                      [(ngModel)]=\"data.baseStation\" [ngClass]=\"{'has-error' : baseStation.invalid } \">\r\n                  </mat-form-field>\r\n\r\n                </div>\r\n\r\n                <div class=\"col s12 m3 l3\" *ngIf=\"data.user_type == 'Sales User'\">\r\n                  <mat-form-field appearance=\"outline\">\r\n                    <mat-label>Purchase Rights</mat-label>\r\n                    <mat-select name=\"purchase_right\" #purchase_right=\"ngModel\" [(ngModel)]=\"data.purchase_right\"\r\n                      required>\r\n                      <mat-option value=\"Yes\">Yes</mat-option>\r\n                      <mat-option value=\"No\">No</mat-option>\r\n\r\n\r\n                    </mat-select>\r\n                  </mat-form-field>\r\n\r\n                  <div class=\"alert alert-danger\" *ngIf=\"purchase_right.touched || f.submitted\">\r\n                    <p *ngIf=\"purchase_right.errors?.required\">This field is required</p>\r\n                  </div>\r\n\r\n                </div>\r\n\r\n                <div class=\"col s12 m3 l3\" *ngIf=\"data.user_type == 'Sales User'\">\r\n                  <mat-form-field appearance=\"outline\">\r\n                    <mat-label>Petrol Tracking Need</mat-label>\r\n                    <mat-select name=\"petrol_tracking\" #petrol_tracking=\"ngModel\" [(ngModel)]=\"data.petrol_tracking\"\r\n                      required>\r\n                      <mat-option value=\"Yes\">Yes</mat-option>\r\n                      <mat-option value=\"No\">No</mat-option>\r\n                    </mat-select>\r\n                  </mat-form-field>\r\n\r\n                  <div class=\"alert alert-danger\" *ngIf=\"petrol_tracking.touched || f.submitted\">\r\n                    <p *ngIf=\"petrol_tracking.errors?.required\">This field is required</p>\r\n                  </div>\r\n\r\n                </div>\r\n\r\n                <div class=\"col s12 m3 l3\" *ngIf=\"data.user_type == 'Sales User'\">\r\n                  <mat-form-field appearance=\"outline\">\r\n                    <mat-label>Guard Tracking Need</mat-label>\r\n                    <mat-select name=\"guard_tracking\" #guard_tracking=\"ngModel\" [(ngModel)]=\"data.guard_tracking\"\r\n                      required>\r\n                      <mat-option value=\"Yes\">Yes</mat-option>\r\n                      <mat-option value=\"No\">No</mat-option>\r\n                    </mat-select>\r\n                  </mat-form-field>\r\n\r\n                  <div class=\"alert alert-danger\" *ngIf=\"guard_tracking.touched || f.submitted\">\r\n                    <p *ngIf=\"guard_tracking.errors?.required\">This field is required</p>\r\n                  </div>\r\n\r\n                </div>\r\n\r\n                <div class=\"col s12 m3 l3\" *ngIf=\"data.user_type == 'Sales User'\">\r\n                  <mat-form-field appearance=\"outline\">\r\n                    <mat-label>HR Recruitment Need</mat-label>\r\n                    <mat-select name=\"hr_recruitment\" #hr_recruitment=\"ngModel\" [(ngModel)]=\"data.hr_recruitment\"\r\n                      required>\r\n                      <mat-option value=\"Yes\">Yes</mat-option>\r\n                      <mat-option value=\"No\">No</mat-option>\r\n                    </mat-select>\r\n                  </mat-form-field>\r\n\r\n                  <div class=\"alert alert-danger\" *ngIf=\"hr_recruitment.touched || f.submitted\">\r\n                    <p *ngIf=\"hr_recruitment.errors?.required\">This field is required</p>\r\n                  </div>\r\n\r\n                </div>\r\n\r\n              </div>\r\n\r\n              <!-- <div class=\"row\" *ngIf=\"data.user_type == 'Sales User'\"> -->\r\n\r\n              <div class=\"row\" *ngIf=\"data.user_type == 'Sales User'\">\r\n                <!-- <ng-container *ngIf=\"data.user_type == 'Sales User'\">\r\n                  <div class=\"col s12 m l3\">\r\n                    <mat-form-field appearance=\"outline\">\r\n                      <mat-label>Assign Brands</mat-label>\r\n                      <mat-select name=\"brand\" [(ngModel)]=\"data.brand\" #brand=\"ngModel\" multiple>\r\n                        <mat-option *ngFor=\"let row of brandList\"\r\n                          value=\"{{row.brand_code}}\">{{row.display_name}}</mat-option>\r\n                      </mat-select>\r\n                    </mat-form-field>\r\n                    <div class=\"alert alert-danger\" *ngIf=\"f.submitted && brand?.invalid \">\r\n                      This field is required\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"col s12 m l3\">\r\n                    <mat-form-field appearance=\"outline\">\r\n                      <mat-label>Order Type</mat-label>\r\n                      <mat-select name=\"order_type\" [(ngModel)]=\"data.order_type\" #order_type=\"ngModel\">\r\n                        <mat-option value=\"Primary\">Primary</mat-option>\r\n                        <mat-option value=\"Secondary\">Secondary</mat-option>\r\n                        <mat-option value=\"Both\">Both</mat-option>\r\n                      </mat-select>\r\n                    </mat-form-field>\r\n                    <div class=\"alert alert-danger\" *ngIf=\"f.submitted && order_type?.invalid \">\r\n                      This field is required\r\n                    </div>\r\n                  </div>\r\n\r\n                  <div class=\"col s12 m3 l3\">\r\n                    <mat-form-field appearance=\"outline\">\r\n                      <mat-label>Working State</mat-label>\r\n                      <mat-select name=\"working_state\" #working_state=\"ngModel\" [(ngModel)]=\"data.working_state\"\r\n                        multiple>\r\n                        <mat-option disabled=\"\">Select Working State</mat-option>\r\n                        <mat-option *ngFor=\"let row of states\" value=\"{{row.state_name}}\">\r\n                          {{row.state_name}}\r\n                        </mat-option>\r\n                      </mat-select>\r\n                    </mat-form-field>\r\n\r\n                  </div>\r\n                </ng-container> -->\r\n\r\n\r\n              </div>\r\n\r\n              <div class=\"row mb0\">\r\n                <div class=\"col s12 m6 l6\">\r\n                  <div class=\"row\">\r\n                    <div class=\"col s12 m6 l6\">\r\n                      <mat-form-field appearance=\"outline\">\r\n                        <mat-label>State</mat-label>\r\n                        <mat-select name=\"state\" #state=\"ngModel\" [(ngModel)]=\"data.state\"\r\n                          (selectionChange)=\"getDistrict(1)\">\r\n                          <mat-option>\r\n                            <ngx-mat-select-search noEntriesFoundLabel=\"'no data found'\" placeholderLabel=\"Search..\"\r\n                              (keyup)=\"filterStates($event.target.value)\"></ngx-mat-select-search>\r\n                          </mat-option>\r\n                          <mat-option *ngFor=\"let row of filteredStates\" [value]=\"row.state_name\">\r\n                            {{ row.state_name }}\r\n                          </mat-option>\r\n                        </mat-select>\r\n                      </mat-form-field>\r\n\r\n                      <div class=\"alert alert-danger\" *ngIf=\"state.touched || f.submitted\">\r\n                        <p *ngIf=\"state.errors?.required\">This field is required</p>\r\n                      </div>\r\n                    </div>\r\n\r\n\r\n                    <div class=\"col s12 m6 l6\">\r\n                      <mat-form-field appearance=\"outline\">\r\n                        <mat-label>District</mat-label>\r\n                        <mat-select name=\"district\" #district=\"ngModel\" (selectionChange)=\"getCity(1)\"\r\n                          [(ngModel)]=\"data.district\">\r\n                          <mat-option>\r\n                            <ngx-mat-select-search noEntriesFoundLabel=\"'no data found'\" placeholderLabel=\"Search..\"\r\n                              (keyup)=\"filterDistrict($event.target.value)\"></ngx-mat-select-search>\r\n                          </mat-option>\r\n                          <mat-option *ngFor=\"let row of filteredDistrict\" value=\"{{row.district_name}}\">\r\n                            {{row.district_name}}\r\n                          </mat-option>\r\n                        </mat-select>\r\n                      </mat-form-field>\r\n                      <div class=\"alert alert-danger\" *ngIf=\"district.touched || f.submitted\">\r\n                        <p *ngIf=\"district.errors?.required\">This field is required</p>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"row\">\r\n                    <!-- <div class=\"col s12 m6 l6\">\r\n                      <mat-form-field appearance=\"outline\">\r\n                        <mat-label>City</mat-label>\r\n                        <input matInput placeholder=\"Type here...\" name=\"city\" #city=\"ngModel\" [(ngModel)]=\"data.city\">\r\n                      </mat-form-field>\r\n                    </div> -->\r\n                    <div class=\" col s12 m6 l6\">\r\n                      <mat-form-field appearance=\"outline\">\r\n                        <mat-label>City</mat-label>\r\n                        <mat-select name=\"city\" #city=\"ngModel\" [(ngModel)]=\"data.city\" required>\r\n                          <mat-option>\r\n                            <ngx-mat-select-search noEntriesFoundLabel=\"'no data found'\" placeholderLabel=\"Search..\"\r\n                              (keyup)=\"filterCity($event.target.value)\"></ngx-mat-select-search>\r\n                          </mat-option>\r\n                          <mat-option *ngFor=\"let row of filteredCity\" value=\"{{row.city}}\">\r\n                            {{row.city}}\r\n                          </mat-option>\r\n                        </mat-select>\r\n\r\n                      </mat-form-field>\r\n                      <div class=\"alert alert-danger\" *ngIf=\"city.touched || f.submitted\">\r\n                        <p *ngIf=\"city.errors?.required\">This field is required</p>\r\n                      </div>\r\n                    </div>\r\n\r\n                    <div class=\"col s12 m6 l6\">\r\n                      <mat-form-field appearance=\"outline\">\r\n                        <mat-label>Pincode</mat-label>\r\n                        <input matInput name=\"pincode\" placeholder=\"Type Here ...\" #pincode=\"ngModel\" maxlength=\"6\"\r\n                          [(ngModel)]=\"data.pincode\"\r\n                          (ngModelChange)=\"data.pincode ? processPincode(data.pincode) : null\">\r\n                      </mat-form-field>\r\n                      <div class=\"alert alert-danger\" *ngIf=\"pincode.touched || f.submitted\">\r\n                        <p *ngIf=\"pincode.errors?.required\">This field is required</p>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <div class=\"col s12 m6 l6\">\r\n                  <mat-form-field appearance=\"outline\">\r\n                    <mat-label>Address</mat-label>\r\n                    <textarea matInput placeholder=\"Type Here ...\" name=\"address\" #address=\"ngModel\"\r\n                      [(ngModel)]=\"data.address\" class=\"h80\"></textarea>\r\n                  </mat-form-field>\r\n                  <div class=\"alert alert-danger\" *ngIf=\"address.touched || f.submitted\">\r\n                    <p *ngIf=\"address.errors?.required\">This field is required</p>\r\n                  </div>\r\n                </div>\r\n\r\n              </div>\r\n\r\n              <div class=\"row\">\r\n                <div class=\"col s12 m3 l3\">\r\n                  <mat-form-field appearance=\"outline\">\r\n                    <mat-label>Working State</mat-label>\r\n                    <mat-select name=\"working_state\" #working_state=\"ngModel\" [(ngModel)]=\"data.working_state\" multiple\r\n                      [required]=\"data.user_type == 'Sales User'\" (selectionChange)=\"getDistrict1(1)\">\r\n                      <mat-option>\r\n                        <ngx-mat-select-search noEntriesFoundLabel=\"'no data found'\" placeholderLabel=\"Search..\"\r\n                          (keyup)=\"filterStates1($event.target.value)\"></ngx-mat-select-search>\r\n                      </mat-option>\r\n                      <div class=\"pl16\" *ngIf=\"filteredStates1.length > 0\">\r\n                        <mat-checkbox [(ngModel)]=\"data.allStates\" (change)=\"allStates('allStates')\" name=\"allStates\"\r\n                          value=\"true\">Select All</mat-checkbox>\r\n                      </div>\r\n\r\n                      <mat-option *ngFor=\"let row of filteredStates1\"\r\n                        (click)=\"data.working_state.length==filteredStates1.length ? data.allStates=true:data.allStates=false\"\r\n                        value=\"{{row.state_name}}\">\r\n                        {{row.state_name}}\r\n                      </mat-option>\r\n                    </mat-select>\r\n                  </mat-form-field>\r\n                  <div class=\"alert alert-danger\" *ngIf=\"f.submitted && working_state?.invalid\">\r\n                    This field is required\r\n                  </div>\r\n                </div>\r\n                <div class=\"col s12 m3 l3\">\r\n                  <mat-form-field appearance=\"outline\">\r\n                    <mat-label>Working District</mat-label>\r\n                    <mat-select name=\"working_district\" #working_district=\"ngModel\" [(ngModel)]=\"data.working_district\"\r\n                      multiple>\r\n                      <mat-option>\r\n                        <ngx-mat-select-search noEntriesFoundLabel=\"'no data found'\" placeholderLabel=\"Search..\"\r\n                          (keyup)=\"filterDistrict1($event.target.value)\"></ngx-mat-select-search>\r\n                      </mat-option>\r\n                      <div class=\"pl16\" *ngIf=\"district_list1.length>0\">\r\n                        <mat-checkbox [(ngModel)]=\"data.allDistrict\" (change)=\"alldistrict1('allDistrict')\"\r\n                          name=\"allDistrict\" value=\"true\">Select All</mat-checkbox>\r\n                      </div>\r\n                      <!-- <mat-option disabled=\"\">Select Working District</mat-option> -->\r\n                      <mat-option *ngFor=\"let row of filteredDistrict1\"\r\n                        (click)=\"data.working_district.length==filteredDistrict1.length ? data.allDistrict=true:data.allDistrict=false\"\r\n                        value=\"{{row.district_name}}\">\r\n                        {{row.district_name}}\r\n                      </mat-option>\r\n                    </mat-select>\r\n                  </mat-form-field>\r\n                  <div class=\"alert alert-danger\" *ngIf=\"f.submitted && working_district?.invalid \">\r\n                    This field is required\r\n                  </div>\r\n                </div>\r\n                <div class=\"col s12 m3 l3\">\r\n                  <mat-form-field appearance=\"outline\">\r\n                    <mat-label>Sum Insured</mat-label>\r\n                    <input matInput name=\"sum_insured\" placeholder=\"Type Here ...\" #sum_insured=\"ngModel\" maxlength=\"6\"\r\n                      [(ngModel)]=\"data.sum_insured\">\r\n                  </mat-form-field>\r\n                  <div class=\"alert alert-danger\" *ngIf=\"sum_insured.touched || f.submitted\">\r\n                    <p *ngIf=\"sum_insured.errors?.required\">This field is required</p>\r\n                  </div>\r\n                </div>\r\n                <div class=\"col s12 m3 l3\">\r\n                  <label class=\"control-label\" style=\"display:block;margin-bottom:6px;\">Insurance Card (PDF/Image)</label>\r\n                  <label style=\"cursor:pointer;border:1px solid #ccc;padding:8px 12px;border-radius:4px;display:inline-block;\">\r\n                    <i class=\"material-icons\" style=\"vertical-align:middle;font-size:18px;\">upload_file</i> Choose File\r\n                    <input type=\"file\" (change)=\"onInsuranceCardSelect($event)\" style=\"display:none;\"\r\n                      accept=\".pdf,.png,.jpg,.jpeg\" />\r\n                  </label>\r\n                  <span *ngIf=\"insuranceCardName\" style=\"margin-left:8px;font-size:12px;word-break:break-all;\">{{insuranceCardName}}</span>\r\n                </div>\r\n                <div class=\"col s12 m3 l3\">\r\n                  <mat-form-field appearance=\"outline\">\r\n                    <mat-label>Gender</mat-label>\r\n                    <mat-select name=\"gender\" #gender=\"ngModel\" [(ngModel)]=\"data.gender\" required>\r\n                      <mat-option value=\"Male\">Male</mat-option>\r\n                      <mat-option value=\"Female\">Female</mat-option>\r\n                    </mat-select>\r\n                  </mat-form-field>\r\n                  <div class=\"alert alert-danger\" *ngIf=\"gender.touched || f.submitted\">\r\n                    <p *ngIf=\"gender.errors?.required\">This field is required</p>\r\n                  </div>\r\n                </div>\r\n\r\n                <!-- <div class=\"col s12 m3 l3\" *ngIf=\"data.supportFlag == 1\">\r\n                  <mat-form-field appearance=\"outline\">\r\n                    <mat-label>Ticket Type</mat-label>\r\n                    <mat-select name=\"support_access\" [(ngModel)]=\"data.support_access\" #support_access=\"ngModel\"\r\n                      required>\r\n                      <mat-option *ngFor=\"let row of tickets\"\r\n                        value=\"{{row.category_name}}\">{{row.category_name}}</mat-option>\r\n                    </mat-select>\r\n                  </mat-form-field>\r\n\r\n                  <div class=\"alert alert-danger\" *ngIf=\"support_access.touched || f.submitted\">\r\n                    <p *ngIf=\"support_access.errors?.required\">This field is required</p>\r\n                  </div>\r\n                </div> -->\r\n                <div class=\"col s12 m3 l3\" *ngIf=\"data.user_type != 'Sales User'\">\r\n                  <mat-form-field appearance=\"outline\">\r\n                    <mat-label>Ticket Type</mat-label>\r\n                    <mat-select name=\"support_access\" [(ngModel)]=\"data.support_access\" #support_access=\"ngModel\"\r\n                      multiple>\r\n                      <mat-option *ngFor=\"let row of tickets\"\r\n                        value=\"{{row.category_name}}\">{{row.category_name}}</mat-option>\r\n                    </mat-select>\r\n                  </mat-form-field>\r\n\r\n                  <!-- <div class=\"alert alert-danger\" *ngIf=\"support_access.touched || f.submitted\">\r\n                    <p *ngIf=\"support_access.errors?.required\">This field is required</p>\r\n                  </div> -->\r\n                </div>\r\n\r\n                <div class=\"col s12 m3 l3\" *ngIf=\"data.user_type != 'Sales User'\">\r\n                  <mat-form-field appearance=\"outline\">\r\n                    <mat-label>Expense Type</mat-label>\r\n                    <mat-select name=\"expense_type\" [(ngModel)]=\"data.expense_type\" #expense_type=\"ngModel\" multiple>\r\n                      <mat-option value=\"BTL\">BTL</mat-option>\r\n                      <mat-option value=\"Outstation Travel\">Outstation Travel</mat-option>\r\n                      <mat-option value=\"TA Expense\">TA Expense</mat-option>\r\n                    </mat-select>\r\n                  </mat-form-field>\r\n                </div>\r\n              </div>\r\n\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"row\">\r\n        <div class=\"col s12\">\r\n          <div class=\"text-right\">\r\n            <button [ngClass]=\"{'loading': savingFlag == true}\" mat-raised-button color=\"accent\" type=\"submit\"\r\n              [disabled]=\"savingFlag == true || exist\">\r\n              {{savingFlag == true ? 'Saving' : 'Save'}}\r\n            </button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </form>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/user/user-add/user-add.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/user/user-add/user-add.component.ts ***!
  \*****************************************************/
/*! exports provided: UserAddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserAddComponent", function() { return UserAddComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _router_animation_router_animation_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../router-animation/router-animation.component */ "./src/app/router-animation/router-animation.component.ts");
/* harmony import */ var src_services_DatabaseService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/_services/DatabaseService */ "./src/_services/DatabaseService.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_dialog_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/dialog.component */ "./src/app/dialog.component.ts");
/* harmony import */ var src_app_localstorage_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/localstorage.service */ "./src/app/localstorage.service.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! moment */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng6-toastr-notifications */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/ng6-toastr-notifications/fesm5/ng6-toastr-notifications.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _designation_designation_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../designation/designation.component */ "./src/app/user/designation/designation.component.ts");












var UserAddComponent = /** @class */ (function () {
    function UserAddComponent(serve, dialog1, route, toast, location, session, rout, dialog) {
        this.serve = serve;
        this.dialog1 = dialog1;
        this.route = route;
        this.toast = toast;
        this.location = location;
        this.session = session;
        this.rout = rout;
        this.dialog = dialog;
        this.states = [];
        this.division_list = [];
        this.report_manager = [];
        this.data = {};
        this.district_list = [];
        this.sales_type = [];
        this.loader = false;
        this.module_name = [];
        this.exist = false;
        this.assign_module_data = [];
        this.myDate = new Date();
        this.savingFlag = false;
        this.assign_login_data = {};
        this.logined_user_data = {};
        this.brandList = [];
        this.district_list1 = [];
        this.city_list = [];
        this.insuranceCardName = '';
        this.tickets = [];
        // getReportManager(searcValue) {
        //   setTimeout(() => {
        //     this.serve.post_rqst({ 'search': searcValue }, "Master/getSalesUserForReporting").subscribe((result => {
        //       if (result['all_sales_user']['statusCode'] == 200) {
        //         this.report_manager = result['all_sales_user']['all_sales_user'];
        //       }
        //       else {
        //         this.toast.errorToastr(result['all_sales_user']['statusMsg'])
        //       }
        //     }));
        //   }, 500);
        // }
        this.filteredStates = [];
        this.filteredStates1 = [];
        this.filteredDistrict = [];
        this.filteredDistrict1 = [];
        this.filteredCity = [];
        this.maxDate = new Date();
        this.data.order_type = 'Both';
        this.getStateList();
        this.getDivisonList();
        this.getTicketType();
        // this.get_module_data();
        this.data.user_type = 'Sales User';
        this.getReportManager('');
        this.get_sales_user_type(this.data.user_type, '');
        this.assign_login_data = this.session.getSession();
        this.logined_user_data = this.assign_login_data.value.data;
        if (this.data.user_type == 'Sales User') {
            this.getBrand();
        }
    }
    UserAddComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.route.params.subscribe(function (params) {
            _this.userId = params['id'];
            if (_this.userId) {
                _this.loader = true;
            }
        });
    };
    UserAddComponent.prototype.MobileNumber = function (event) {
        var pattern = /[0-9\+\-\ ]/;
        var inputChar = String.fromCharCode(event.charCode);
        if (event.keyCode != 8 && !pattern.test(inputChar)) {
            event.preventDefault();
        }
    };
    UserAddComponent.prototype.paytmMobileNumber = function (event) {
        var pattern = /[0-9\+\-\ ]/;
        var inputChar = String.fromCharCode(event.charCode);
        if (event.keyCode != 8 && !pattern.test(inputChar)) {
            event.preventDefault();
        }
    };
    UserAddComponent.prototype.getBrand = function () {
        var _this = this;
        this.data.brand = '';
        this.serve.post_rqst({}, "Master/brandList").subscribe((function (result) {
            if (result['statusCode'] == 200) {
                _this.brandList = result['result'];
                if (_this.data.user_type == 'Sales User') {
                    var brandCode = [];
                    if (_this.brandList.length > 0) {
                        for (var i = 0; i < _this.brandList.length; i++) {
                            brandCode.push(_this.brandList[i]['brand_code']);
                        }
                        _this.data.brand = brandCode;
                    }
                }
            }
            else {
                _this.toast.errorToastr(result['statusMsg']);
            }
        }));
    };
    UserAddComponent.prototype.getDistrict1 = function (val) {
        var _this = this;
        var st_name;
        if (val == 1) {
            st_name = this.data.working_state;
        }
        this.serve.post_rqst({ 'state_name': st_name }, "Master/cross_multiple_district").subscribe((function (result) {
            if (result['statusCode'] == 200) {
                _this.district_list1 = result['district_name'];
                _this.filteredDistrict1 = _this.district_list1;
            }
            else {
                _this.toast.errorToastr(result['statusMsg']);
            }
        }));
    };
    UserAddComponent.prototype.alldistrict1 = function (action) {
        console.log(action);
        console.log(this.data.allDistrict);
        if (this.data.allDistrict == true) {
            var productData = [];
            for (var i = 0; i < this.filteredDistrict1.length; i++) {
                productData.push(this.filteredDistrict1[i].district_name);
            }
            this.data.working_district = productData;
            console.table(this.data.working_district);
        }
        else {
            this.data.working_district = [];
            console.table(this.data.working_district);
        }
    };
    UserAddComponent.prototype.check_number = function () {
        var _this = this;
        if (this.data.mobileno.length == 10) {
            this.serve.post_rqst({ "mobile": this.data.mobileno }, "Master/userMobileNoCheck").subscribe((function (result) {
                if (result['statusCode'] == 200) {
                    if (result['statusMsg'] != 'Not Exist') {
                        _this.exist = true;
                        _this.toast.errorToastr(result['statusMsg']);
                    }
                    else {
                        _this.exist = false;
                    }
                }
                else {
                    _this.exist = false;
                    _this.toast.errorToastr(result['statusMsg']);
                }
            }));
        }
    };
    UserAddComponent.prototype.getStateList = function () {
        var _this = this;
        this.serve.post_rqst(0, "Master/getAllState").subscribe((function (result) {
            if (result['statusCode'] == 200) {
                _this.states = result['all_state'];
                _this.filteredStates = _this.states;
                _this.filteredStates1 = _this.states;
            }
            else {
                _this.toast.errorToastr(result['statusMsg']);
            }
        }));
    };
    UserAddComponent.prototype.getDivisonList = function () {
        var _this = this;
        this.serve.post_rqst(0, "CustomerNetwork/getAllDivison").subscribe((function (result) {
            if (result['statusCode'] == 200) {
                _this.division_list = result['data'];
            }
            else {
                _this.toast.errorToastr(result['statusMsg']);
            }
        }));
    };
    UserAddComponent.prototype.getDistrict = function (val) {
        var _this = this;
        var st_name;
        if (val == 1) {
            st_name = this.data.state;
        }
        this.serve.post_rqst({ 'state_name': st_name }, "Master/getAllDistrict").subscribe((function (result) {
            if (result['statusCode'] == 200) {
                _this.district_list = result['all_district'];
                _this.filteredDistrict = _this.district_list;
            }
            else {
                _this.toast.errorToastr(result['statusMsg']);
            }
        }));
    };
    UserAddComponent.prototype.findId = function (id) {
        var index = this.sales_type.findIndex(function (row) { return row.id == id; });
        if (index != -1) {
            this.data.supportFlag = this.sales_type[index].support;
            this.getTicketType();
        }
        else {
            this.data.supportFlag = 0;
        }
    };
    UserAddComponent.prototype.getTicketType = function () {
        var _this = this;
        this.serve.post_rqst({}, "Support/getSupportcategory").subscribe(function (result) {
            if (result['statusCode'] == 200) {
                _this.tickets = result['data'];
            }
            else {
                _this.toast.errorToastr(result['statusMsg']);
            }
        }, function (err) {
        });
    };
    UserAddComponent.prototype.getCity = function (val) {
        var _this = this;
        var dist_name;
        if (val == 1) {
            dist_name = this.data.district;
        }
        var value = { "state": this.data.state, "district": dist_name, "pincode": this.data.pincode };
        this.serve.post_rqst(value, "CustomerNetwork/get_city_list").subscribe((function (response) {
            if (response['statusCode'] == 200) {
                _this.city_list = response['city'];
                _this.filteredCity = _this.city_list;
            }
            else {
                _this.toast.errorToastr(response['statusMsg']);
            }
        }));
    };
    UserAddComponent.prototype.get_sales_user_type = function (type, event) {
        var _this = this;
        var Usertype;
        if (type != '') {
            Usertype = type;
        }
        else {
            Usertype = event.value;
        }
        this.serve.post_rqst({ 'user_type': Usertype }, "Master/getDesignation").subscribe((function (response) {
            _this.sales_type = response['all_designation'];
        }));
    };
    UserAddComponent.prototype.filterStates = function (searcValue) {
        var filterValue = searcValue.toLowerCase();
        this.filteredStates = this.states.filter(function (state) { return state.state_name.toLowerCase().includes(filterValue); });
    };
    // filterStates1(searcValue) {
    //   const filterValue = searcValue.toLowerCase();
    //   this.filteredStates1 = this.states.filter(state => state.state_name.toLowerCase().includes(filterValue));
    // }
    UserAddComponent.prototype.filterStates1 = function (searcValue) {
        var _this = this;
        console.log(searcValue);
        var filterValue = searcValue.toLowerCase();
        // Separate selected and unselected states
        var selectedStates = this.states.filter(function (state) { return _this.data.working_state.includes(state.state_name); });
        console.log(selectedStates, "selected states");
        var unselectedStates = this.states.filter(function (state) { return !_this.data.working_state.includes(state.state_name); });
        console.log(unselectedStates, "unslected");
        // Filter the unselected states
        var filteredUnselectedStates = unselectedStates.filter(function (state) { return state.state_name.toLowerCase().includes(filterValue); });
        // Combine the selected states (unfiltered) with the filtered unselected states
        this.filteredStates1 = selectedStates.concat(filteredUnselectedStates);
        console.log(this.filteredStates1, "filter state");
    };
    UserAddComponent.prototype.filterDistrict = function (searcValue) {
        var filterValue = searcValue.toLowerCase();
        this.filteredDistrict = this.district_list.filter(function (dis) { return dis.district_name.toLowerCase().includes(filterValue); });
    };
    // filterDistrict1(searcValue) {
    //   const filterValue = searcValue.toLowerCase();
    //   this.filteredDistrict1 = this.district_list1.filter(dis => dis.district_name.toLowerCase().includes(filterValue));
    // }
    UserAddComponent.prototype.filterDistrict1 = function (searcValue) {
        var _this = this;
        console.log(searcValue);
        var filterValue = searcValue.toLowerCase();
        // Separate selected and unselected states
        var selectedStates = this.district_list1.filter(function (state) { return _this.data.working_district.includes(state.district_name); });
        var unselectedStates = this.district_list1.filter(function (state) { return !_this.data.working_district.includes(state.district_name); });
        // Filter the unselected states
        var filteredUnselectedStates = unselectedStates.filter(function (state) { return state.district_name.toLowerCase().includes(filterValue); });
        // Combine the selected states (unfiltered) with the filtered unselected states
        this.filteredDistrict1 = selectedStates.concat(filteredUnselectedStates);
    };
    UserAddComponent.prototype.filterCity = function (searcValue) {
        var filterValue = searcValue.toLowerCase();
        this.filteredCity = this.city_list.filter(function (dis) { return dis.city.toLowerCase().includes(filterValue); });
    };
    UserAddComponent.prototype.processPincode = function (pincode) {
        var _this = this;
        var pincodeValue = pincode;
        if (pincodeValue.length > 5) {
            this.serve.post_rqst({ 'pincode': pincodeValue }, "CustomerNetwork/getPostalInfo").subscribe((function (result) {
                if (result['statusCode'] == 200) {
                    _this.data.state = result['result'].state_name;
                    _this.data.district = result['result'].district_name;
                    _this.data.city = result['result'].city;
                    console.log(_this.data.city);
                    _this.getDistrict(1);
                    _this.getCity(1);
                }
                else {
                    _this.toast.errorToastr(result['statusMsg']);
                }
            }));
        }
    };
    UserAddComponent.prototype.getReportManager = function (searcValue) {
        var _this = this;
        setTimeout(function () {
            _this.serve.post_rqst({ 'working_state_name': _this.data.working_state, 'search': searcValue }, "Master/get_sales_user_List").subscribe((function (result) {
                if (result['statusCode'] == 200) {
                    _this.report_manager = result['all_sales_user'];
                }
                else {
                    _this.toast.errorToastr(result['statusMsg']);
                }
            }));
        }, 500);
    };
    UserAddComponent.prototype.allStates = function (action) {
        if (this.data.allStates) {
            var stateData = this.filteredStates1.map(function (state) { return state.state_name; });
            this.data.working_state = stateData;
        }
        else {
            this.data.working_state = [];
        }
    };
    UserAddComponent.prototype.submitDetail = function () {
        var _this = this;
        this.loader = true;
        if (this.data.date_of_joining) {
            this.data.date_of_joining = moment__WEBPACK_IMPORTED_MODULE_7__(this.data.date_of_joining).format('YYYY-MM-DD');
            this.data.date_of_joining = this.data.date_of_joining;
        }
        if (this.data.dob) {
            this.data.dob = moment__WEBPACK_IMPORTED_MODULE_7__(this.data.dob).format('YYYY-MM-DD');
            this.data.dob = this.data.dob;
        }
        if (this.data.doa) {
            this.data.doa = moment__WEBPACK_IMPORTED_MODULE_7__(this.data.doa).format('YYYY-MM-DD');
            this.data.doa = this.data.doa;
        }
        if (this.data.user_type == 'System User') {
            this.data.assignModule = this.assign_module_data;
        }
        if (this.data.user_role) {
            var index = this.sales_type.findIndex(function (d) { return d.id == _this.data.user_role; });
            if (index != -1) {
                this.data.role_name = this.sales_type[index].role_name;
            }
        }
        this.data.uid = this.userId;
        this.data.uname = this.userName;
        this.data.created_by_name = this.logined_user_data.name;
        this.data.created_by_id = this.logined_user_data.id;
        this.savingFlag = true;
        this.serve.post_rqst({ 'data': this.data }, "Master/addUser").subscribe((function (response) {
            if (response['statusCode'] == "200") {
                _this.toast.successToastr(response['statusMsg']);
                _this.rout.navigate(['/sale-user-list']);
                _this.savingFlag = false;
                // this.serve.count_list();
            }
            else {
                _this.toast.errorToastr(response['statusMsg']);
                _this.savingFlag = false;
            }
        }));
    };
    UserAddComponent.prototype.get_module_data = function () {
        var _this = this;
        this.serve.post_rqst(0, "Master/moduleMasterList").subscribe((function (response) {
            _this.assign_module_data = response['result'];
        }));
    };
    UserAddComponent.prototype.assign_module = function (module_name, event, index) {
        if (event.checked) {
            this.assign_module_data[index][module_name] = 'true';
        }
        else {
            this.assign_module_data[index][module_name] = 'false';
        }
    };
    UserAddComponent.prototype.onInsuranceCardSelect = function (event) {
        var _this = this;
        var file = event.target.files && event.target.files[0];
        if (!file) {
            return;
        }
        var allowed = ['application/pdf', 'image/png', 'image/jpeg', 'image/jpg'];
        if (allowed.indexOf(file.type) === -1) {
            this.toast.errorToastr('Only PDF or image (jpg/png) file is allowed');
            return;
        }
        this.insuranceCardName = file.name;
        var reader = new FileReader();
        reader.onload = function (e) {
            _this.data.insurance_card = e.target.result;
        };
        reader.readAsDataURL(file);
    };
    UserAddComponent.prototype.back = function () {
        this.location.back();
    };
    UserAddComponent.prototype.openDialog = function () {
        var _this = this;
        var dialogRef = this.dialog1.open(_designation_designation_component__WEBPACK_IMPORTED_MODULE_11__["DesignationComponent"], {
            width: '500px',
            panelClass: 'cs-modal',
            disableClose: true,
            data: {
                'type': 'designation'
            }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result == true) {
                _this.get_sales_user_type(_this.data.user_type, '');
            }
        });
    };
    UserAddComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user-add',
            template: __webpack_require__(/*! ./user-add.component.html */ "./src/app/user/user-add/user-add.component.html"),
            animations: [Object(_router_animation_router_animation_component__WEBPACK_IMPORTED_MODULE_2__["slideToTop"])()]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_services_DatabaseService__WEBPACK_IMPORTED_MODULE_3__["DatabaseService"],
            _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatDialog"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"],
            ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_9__["ToastrManager"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["Location"], src_app_localstorage_service__WEBPACK_IMPORTED_MODULE_6__["sessionStorage"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], src_app_dialog_component__WEBPACK_IMPORTED_MODULE_5__["DialogComponent"]])
    ], UserAddComponent);
    return UserAddComponent;
}());



/***/ }),

/***/ "./src/app/user/user-module/user.module.ts":
/*!*************************************************!*\
  !*** ./src/app/user/user-module/user.module.ts ***!
  \*************************************************/
/*! exports provided: UserModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserModule", function() { return UserModule; });
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
/* harmony import */ var src_app_auth_component_guard__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/auth-component.guard */ "./src/app/auth-component.guard.ts");
/* harmony import */ var src_app_material__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/material */ "./src/app/material.ts");
/* harmony import */ var _edit_user_edit_user_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../edit-user/edit-user.component */ "./src/app/user/edit-user/edit-user.component.ts");
/* harmony import */ var _sale_user_detail_sale_user_detail_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../sale-user-detail/sale-user-detail.component */ "./src/app/user/sale-user-detail/sale-user-detail.component.ts");
/* harmony import */ var _sale_user_list_sale_user_list_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../sale-user-list/sale-user-list.component */ "./src/app/user/sale-user-list/sale-user-list.component.ts");
/* harmony import */ var _user_add_user_add_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../user-add/user-add.component */ "./src/app/user/user-add/user-add.component.ts");
/* harmony import */ var _user_target_user_target_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../user-target/user-target.component */ "./src/app/user/user-target/user-target.component.ts");
/* harmony import */ var _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/datepicker */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/material/esm5/datepicker.es5.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/form-field */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/material/esm5/form-field.es5.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/input */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/material/esm5/input.es5.js");
/* harmony import */ var _angular_material_core__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/core */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/material/esm5/core.es5.js");
/* harmony import */ var src_Pipes_Crypto_pipe__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! src/_Pipes/Crypto.pipe */ "./src/_Pipes/Crypto.pipe.ts");
/* harmony import */ var src_app_distribution_distribution_detail_distribution_detail_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! src/app/distribution/distribution-detail/distribution-detail.component */ "./src/app/distribution/distribution-detail/distribution-detail.component.ts");
/* harmony import */ var src_app_contractor_meet_contractor_meet_detail_contractor_meet_detail_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! src/app/contractor-meet/contractor-meet-detail/contractor-meet-detail.component */ "./src/app/contractor-meet/contractor-meet-detail/contractor-meet-detail.component.ts");
/* harmony import */ var src_app_order_order_detail_order_detail_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! src/app/order/order-detail/order-detail.component */ "./src/app/order/order-detail/order-detail.component.ts");
/* harmony import */ var src_app_order_secondary_order_detail_secondary_order_detail_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! src/app/order/secondary-order-detail/secondary-order-detail.component */ "./src/app/order/secondary-order-detail/secondary-order-detail.component.ts");


























var userRoutes = [
    {
        path: "", children: [
            { path: "", component: _sale_user_list_sale_user_list_component__WEBPACK_IMPORTED_MODULE_14__["SaleUserListComponent"], canActivate: [src_app_auth_component_guard__WEBPACK_IMPORTED_MODULE_10__["AuthComponentGuard"]], data: { expectedRole: ['1'] } },
            { path: "user-add", component: _user_add_user_add_component__WEBPACK_IMPORTED_MODULE_15__["UserAddComponent"], canActivate: [src_app_auth_component_guard__WEBPACK_IMPORTED_MODULE_10__["AuthComponentGuard"]], data: { expectedRole: ['1'] } },
            { path: "sale-user-target/:id", component: _user_target_user_target_component__WEBPACK_IMPORTED_MODULE_16__["UserTargetComponent"], canActivate: [src_app_auth_component_guard__WEBPACK_IMPORTED_MODULE_10__["AuthComponentGuard"]], data: { expectedRole: ['1'] } },
            {
                path: "sale-user-detail/:id", children: [
                    { path: '', component: _sale_user_detail_sale_user_detail_component__WEBPACK_IMPORTED_MODULE_13__["SaleUserDetailComponent"], canActivate: [src_app_auth_component_guard__WEBPACK_IMPORTED_MODULE_10__["AuthComponentGuard"]], data: { expectedRole: ['1'] } },
                    { path: "user-edit/:id", component: _edit_user_edit_user_component__WEBPACK_IMPORTED_MODULE_12__["EditUserComponent"], canActivate: [src_app_auth_component_guard__WEBPACK_IMPORTED_MODULE_10__["AuthComponentGuard"]], data: { expectedRole: ['1'] } },
                    { path: "btl-detail/:id", component: src_app_contractor_meet_contractor_meet_detail_contractor_meet_detail_component__WEBPACK_IMPORTED_MODULE_23__["ContractorMeetDetailComponent"], canActivate: [src_app_auth_component_guard__WEBPACK_IMPORTED_MODULE_10__["AuthComponentGuard"]], data: { expectedRole: ['1'] } },
                    { path: 'order-detail/:id', component: src_app_order_order_detail_order_detail_component__WEBPACK_IMPORTED_MODULE_24__["OrderDetailComponent"], canActivate: [src_app_auth_component_guard__WEBPACK_IMPORTED_MODULE_10__["AuthComponentGuard"]], data: { expectedRole: ['1', '2'] } },
                    { path: "secondary-order-detail/:id", component: src_app_order_secondary_order_detail_secondary_order_detail_component__WEBPACK_IMPORTED_MODULE_25__["SecondaryOrderDetailComponent"], canActivate: [src_app_auth_component_guard__WEBPACK_IMPORTED_MODULE_10__["AuthComponentGuard"]], data: { expectedRole: ['1'] } },
                    {
                        path: "distribution-detail/:id/:tabtype", children: [
                            { path: "", component: src_app_distribution_distribution_detail_distribution_detail_component__WEBPACK_IMPORTED_MODULE_22__["DistributionDetailComponent"], canActivate: [src_app_auth_component_guard__WEBPACK_IMPORTED_MODULE_10__["AuthComponentGuard"]], data: { expectedRole: ['1', '2'] } },
                        ]
                    },
                ]
            },
        ]
    },
];
var UserModule = /** @class */ (function () {
    function UserModule() {
    }
    UserModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _sale_user_list_sale_user_list_component__WEBPACK_IMPORTED_MODULE_14__["SaleUserListComponent"],
                _sale_user_detail_sale_user_detail_component__WEBPACK_IMPORTED_MODULE_13__["SaleUserDetailComponent"],
                _user_add_user_add_component__WEBPACK_IMPORTED_MODULE_15__["UserAddComponent"],
                _edit_user_edit_user_component__WEBPACK_IMPORTED_MODULE_12__["EditUserComponent"],
                _user_target_user_target_component__WEBPACK_IMPORTED_MODULE_16__["UserTargetComponent"],
                src_Pipes_Crypto_pipe__WEBPACK_IMPORTED_MODULE_21__["Crypto"],
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild(userRoutes),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_7__["NgMultiSelectDropDownModule"],
                src_app_material__WEBPACK_IMPORTED_MODULE_11__["MaterialModule"],
                angular_ng_autocomplete__WEBPACK_IMPORTED_MODULE_6__["AutocompleteLibModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialogModule"],
                _angular_material_datepicker__WEBPACK_IMPORTED_MODULE_17__["MatDatepickerModule"],
                _angular_material_form_field__WEBPACK_IMPORTED_MODULE_18__["MatFormFieldModule"],
                _angular_material_input__WEBPACK_IMPORTED_MODULE_19__["MatInputModule"],
                _angular_material_core__WEBPACK_IMPORTED_MODULE_20__["MatNativeDateModule"],
                ngx_mat_select_search__WEBPACK_IMPORTED_MODULE_8__["NgxMatSelectSearchModule"],
                src_app_app_utility_module__WEBPACK_IMPORTED_MODULE_9__["AppUtilityModule"]
            ], entryComponents: []
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], UserModule);
    return UserModule;
}());



/***/ }),

/***/ "./src/app/user/user-target/user-target.component.html":
/*!*************************************************************!*\
  !*** ./src/app/user/user-target/user-target.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-container\" >\r\n  <div *ngIf=\"loader\">\r\n    <mat-spinner class=\"loader\">\r\n      <div><p>Loading....</p></div>\r\n    </mat-spinner>\r\n  </div>\r\n  <div class=\"tools-container\" style=\"padding: 7px 10px; margin: 0px;\">\r\n    <div class=\"page-heading\">\r\n      <div class=\"heading-text bc-space\">\r\n        <div class=\"back-btn\">\r\n          <a mat-button routerLink=\"/sale-user-list\" routerLinkActive=\"active\"><i class=\"material-icons\">west</i></a>\r\n        </div>\r\n        <h2>User Target</h2>\r\n      </div>\r\n    </div>\r\n    \r\n    <div class=\"target\">\r\n      <div class=\"pagination target-head\">\r\n        <ul class=\"padding0\">\r\n          <li>\r\n            <div class=\"data-table\">\r\n              <ul>\r\n                <li>\r\n                  <div class=\"upr-section\">\r\n                    <a class=\"save-target\" (click)=\"year_target=false; add_year_target()\" *ngIf=\"year_target==true\">\r\n                      <i class=\"material-icons\">save</i>\r\n                    </a>\r\n                    <a class=\"edit-target\" (click)=\"year_target=true\" *ngIf=\"year_target==false\">\r\n                      <i class=\"material-icons\">edit</i>\r\n                    </a>\r\n                    <p>Year Target</p>\r\n                    <span *ngIf=\"year_target==false\">&#8377; {{data.target}}</span>\r\n                    <input type=\"number\" name=\"target\" [(ngModel)]=\"data.target\" [disabled]=\"year_target==true ? false : true\" (keypress)=\"MobileNumber($event)\" *ngIf=\"year_target==true\">\r\n                  </div>\r\n                </li>\r\n                <li>\r\n                  <div class=\"upr-section\">\r\n                    <p>Achievement</p>\r\n                    <span>&#8377; {{year_achievement}}</span>\r\n                  </div>\r\n                </li>\r\n                <li>\r\n                  <div class=\"upr-section\">\r\n                    <p>Balance</p>\r\n                    <span>&#8377; {{year_balance}}</span>\r\n                  </div>\r\n                </li>\r\n              </ul>\r\n            </div>\r\n          </li>\r\n          <li>\r\n            <div class=\"ul-search\">\r\n              <mat-radio-group aria-label=\"Select an option\" name=\"order_type\" [(ngModel)]=\"type.order_type\" (click)=\"get_year_target();get_monthly_target_data();get_assign_sales_user();\">\r\n                <mat-radio-button value=\"Primary\">Primary</mat-radio-button>\r\n                <mat-radio-button value=\"Secondary\">Secondary</mat-radio-button>\r\n              </mat-radio-group>\r\n              <!-- <section name=\"order_type\" [(ngModel)]=\"type.order_type\">\r\n                <mat-checkbox [checked]=\"type.order_type == 'Primary'\" (click)=\"get_year_target();get_monthly_target_data();get_assign_sales_user();\" >{{type.order_type}}</mat-checkbox>\r\n                \r\n                <mat-checkbox [checked]=\"type.order_type == 'Secondary'\" (click)=\"get_year_target();get_monthly_target_data();get_assign_sales_user();\" >Secondary</mat-checkbox>\r\n              </section> -->\r\n            </div>\r\n          </li>\r\n        </ul>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  \r\n  <div class=\"container-outer\">\r\n    <div class=\"container\">\r\n      \r\n      <div class=\"cs-table left-right-20\">\r\n        <div class=\"sticky-head\" style=\"top: 119px;\">\r\n          <div class=\"table-head\">\r\n            <table class=\"\">\r\n              <tr>\r\n                <th class=\"w130\">Month</th>\r\n                <th class=\"w150 text-center\" *ngIf=\"type.order_type == 'Primary'\">Target</th>\r\n                <th class=\"w150 text-center\" *ngIf=\"type.order_type == 'Secondary'\">Target</th>\r\n                <th class=\"w150 text-center\" >Achievement</th>\r\n                <th class=\"padding0\" *ngIf=\"assign_sales_user.length != '0'\">\r\n                  <table>\r\n                    <tr>\r\n                      <th >Name</th>\r\n                      <th class=\"w120\">Target</th>\r\n                      <th class=\"w120\">Achievement</th>\r\n                    </tr>\r\n                  </table>\r\n                </th>\r\n                <th class=\"w130\">Total Achievement</th>\r\n                <th class=\"w120\">Balance</th>\r\n              </tr>\r\n            </table>\r\n          </div>\r\n        </div>\r\n        \r\n        <div class=\"table-container\">\r\n          <div class=\"table-content\">\r\n            <table class=\"\">\r\n              <!-- *ngIf=\"month_condition >= march_date\" -->\r\n              <!-- {{next_Year}} -->\r\n              <tr >\r\n                <td class=\"w130\">March </td>\r\n                <td class=\"w150 text-center\">\r\n                  <div class=\"enter-form\" [ngClass]=\"{'active' : edit_target1==true} \">\r\n                    <input type=\"number\" name=\"march_target\" [(ngModel)]=\"form.march_target\" [disabled]=\"edit_target1==true ? false : true\" (keypress)=\"MobileNumber($event)\">\r\n                    <a class=\"t-save\">\r\n                      <i class=\"material-icons\" (click)=\"edit_target1=false; add_monthly_target('March')\">save </i>\r\n                    </a>\r\n                    <a class=\"t-edit\">\r\n                      <i class=\"material-icons\" (click)=\"edit_target1=true\">edit</i>\r\n                    </a>\r\n                  </div>\r\n                </td>\r\n                <td class=\"w150 text-right\">\r\n                  <div class=\"enter-form\" [ngClass]=\"{'active' : edit_ach1==true } \">\r\n                    <input type=\"number\" name=\"march_ach\" [(ngModel)]=\"form.march_ach\" [disabled]=\"edit_ach1==true ? false : true\" (keypress)=\"MobileNumber($event)\">\r\n                    <a class=\"t-save\">\r\n                      <i class=\"material-icons\" (click)=\"edit_ach1=false; update_ach('March')\">save</i>\r\n                    </a>\r\n                    <a class=\"t-edit\">\r\n                      <i class=\"material-icons\" (click)=\"edit_ach1=true\">edit</i>\r\n                    </a>\r\n                  </div>\r\n                </td>\r\n                <td class=\"padding0\" *ngIf=\"assign_sales_user.length != '0'\">\r\n                  <table>\r\n                    <tr *ngFor=\"let row of assign_sales_user\">\r\n                      <td class=\"bdr-b\">{{row.name}}</td>\r\n                      <td class=\"w120 bdr-b\" *ngIf=\"row.target\">&#8377; {{row.target[3] ? type.order_type == 'Primary' ? row.target[3].pri_target : row.target[3].sec_target : '0'}}</td>\r\n                      <td class=\"w120 bdr-b\" *ngIf=\"row.target\">&#8377; {{row.target[3] ? type.order_type == 'Primary' ? row.target[3].pri_achivement : row.target[3].sec_achivement : '0'}}</td>\r\n                      <td class=\"w120 bdr-b\" *ngIf=\"!row.target\">&#8377; 0</td>\r\n                      <td class=\"w120 bdr-b\" *ngIf=\"!row.target\">&#8377; 0</td>\r\n                    </tr>\r\n                  </table>\r\n                </td>\r\n                <td class=\"w130\">&#8377; {{total_mar_ach ? total_mar_ach : '0'}}</td>\r\n                <td class=\"w120\">&#8377; {{bal_mar_ach ? bal_mar_ach : '0'}}</td>\r\n              </tr>\r\n              <!-- *ngIf=\"month_condition >= feb_date\" -->\r\n              <!-- {{next_Year}} -->\r\n              <tr >\r\n                <td class=\"w130\">February </td>\r\n                <td class=\"w150 text-center\">\r\n                  <div class=\"enter-form\" [ngClass]=\"{'active' : edit_target2==true} \">\r\n                    <input type=\"number\" name=\"february_target\" [(ngModel)]=\"form.february_target\" [disabled]=\"edit_target2==true ? false : true\" (keypress)=\"MobileNumber($event)\">\r\n                    <a class=\"t-save\">\r\n                      <i class=\"material-icons\" (click)=\"edit_target2=false; add_monthly_target('February')\">save </i>\r\n                    </a>\r\n                    <a class=\"t-edit\">\r\n                      <i class=\"material-icons\" (click)=\"edit_target2=true\">edit</i>\r\n                    </a>\r\n                  </div>\r\n                </td>\r\n                <td class=\"w150 text-right\">\r\n                  <div class=\"enter-form\" [ngClass]=\"{'active' : edit_ach2==true } \">\r\n                    <input type=\"number\"name=\"february_ach\" [(ngModel)]=\"form.february_ach\" [disabled]=\"edit_ach2==true ? false : true\" (keypress)=\"MobileNumber($event)\">\r\n                    <a class=\"t-save\">\r\n                      <i class=\"material-icons\" (click)=\"edit_ach2=false; update_ach('February')\">save </i>\r\n                    </a>\r\n                    <a class=\"t-edit\">\r\n                      <i class=\"material-icons\" (click)=\"edit_ach2=true\">edit</i>\r\n                    </a>\r\n                  </div>\r\n                </td>\r\n                <td class=\"padding0\" *ngIf=\"assign_sales_user.length != '0'\">\r\n                  <table>\r\n                    <tr *ngFor=\"let row of assign_sales_user\">\r\n                      <td class=\"bdr-b\">{{row.name}}</td>\r\n                      <td class=\"w120 bdr-b\" *ngIf=\"row.target\">&#8377; {{row.target[2] ? type.order_type == 'Primary' ? row.target[2].pri_target : row.target[2].sec_target : '0'}}</td>\r\n                      <td class=\"w120 bdr-b\" *ngIf=\"row.target\">&#8377; {{row.target[2] ? type.order_type == 'Primary' ? row.target[2].pri_achivement : row.target[2].sec_achivement : '0'}}</td>\r\n                      <td class=\"w120 bdr-b\" *ngIf=\"!row.target\">&#8377; 0</td>\r\n                      <td class=\"w120 bdr-b\" *ngIf=\"!row.target\">&#8377; 0</td>\r\n                    </tr>\r\n                  </table>\r\n                </td>\r\n                <td class=\"w130\">&#8377; {{total_feb_ach ? total_feb_ach : '0'}}</td>\r\n                <td class=\"w120\">&#8377; {{bal_feb_ach ? bal_feb_ach : '0'}}</td>\r\n              </tr>\r\n              <!-- *ngIf=\"month_condition >= jan_date\" -->\r\n              <!-- {{next_Year}} -->\r\n              <tr >\r\n                <td class=\"w130\">January </td>\r\n                <td class=\"w150 text-center\">\r\n                  <div class=\"enter-form\" [ngClass]=\"{'active' : edit_target3==true} \">\r\n                    <input type=\"number\" name=\"january_target\" [(ngModel)]=\"form.january_target\" [disabled]=\"edit_target3==true ? false : true\" (keypress)=\"MobileNumber($event)\">\r\n                    <a class=\"t-save\">\r\n                      <i class=\"material-icons\" (click)=\"edit_target3=false; add_monthly_target('January')\">save </i>\r\n                    </a>\r\n                    <a class=\"t-edit\">\r\n                      <i class=\"material-icons\" (click)=\"edit_target3=true\">edit</i>\r\n                    </a>\r\n                  </div>\r\n                </td>\r\n                <td class=\"w150 text-right\">\r\n                  <div class=\"enter-form\" [ngClass]=\"{'active' : edit_ach3==true } \">\r\n                    <input type=\"number\" name=\"january_ach\" [(ngModel)]=\"form.january_ach\" [disabled]=\"edit_ach3==true ? false : true\" (keypress)=\"MobileNumber($event)\">\r\n                    <a class=\"t-save\">\r\n                      <i class=\"material-icons\" (click)=\"edit_ach3=false; update_ach('January')\">save </i>\r\n                    </a>\r\n                    <a class=\"t-edit\">\r\n                      <i class=\"material-icons\" (click)=\"edit_ach3=true\">edit</i>\r\n                    </a>\r\n                  </div>\r\n                </td>\r\n                <td class=\"padding0\" *ngIf=\"assign_sales_user.length != '0'\">\r\n                  <table>\r\n                    <tr *ngFor=\"let row of assign_sales_user\">\r\n                      <td class=\"bdr-b\">{{row.name}}</td>\r\n                      <td class=\"w120 bdr-b\" *ngIf=\"row.target\">&#8377; {{row.target[1] ? type.order_type == 'Primary' ? row.target[1].pri_target : row.target[1].sec_target : '0'}}</td>\r\n                      <td class=\"w120 bdr-b\" *ngIf=\"row.target\">&#8377; {{row.target[1] ? type.order_type == 'Primary' ? row.target[1].pri_achivement : row.target[1].sec_achivement : '0'}}</td>\r\n                      <td class=\"w120 bdr-b\" *ngIf=\"!row.target\">&#8377; 0</td>\r\n                      <td class=\"w120 bdr-b\" *ngIf=\"!row.target\">&#8377; 0</td>\r\n                    </tr>\r\n                  </table>\r\n                </td>\r\n                <td class=\"w130\">&#8377; {{total_jan_ach ? total_jan_ach : '0'}}</td>\r\n                <td class=\"w120\">&#8377; {{bal_jan_ach ? bal_jan_ach : '0'}}</td>\r\n              </tr>\r\n              <!-- *ngIf=\"month_condition >= dec_date\" -->\r\n              <!-- {{current_year}} -->\r\n              <tr >\r\n                <td class=\"w130\">December </td>\r\n                <td class=\"w150 text-center\">\r\n                  <div class=\"enter-form\" [ngClass]=\"{'active' : edit_target4==true} \">\r\n                    <input type=\"number\" name=\"december_target\" [(ngModel)]=\"form.december_target\" [disabled]=\"edit_target4==true ? false : true\" (keypress)=\"MobileNumber($event)\">\r\n                    <a class=\"t-save\">\r\n                      <i class=\"material-icons\" (click)=\"edit_target4=false; add_monthly_target('December')\">save </i>\r\n                    </a>\r\n                    <a class=\"t-edit\">\r\n                      <i class=\"material-icons\" (click)=\"edit_target4=true\">edit</i>\r\n                    </a>\r\n                  </div>\r\n                </td>\r\n                <td class=\"w150 text-right\">\r\n                  <div class=\"enter-form\" [ngClass]=\"{'active' : edit_ach4==true } \">\r\n                    <input type=\"number\" name=\"december_ach\" [(ngModel)]=\"form.december_ach\" [disabled]=\"edit_ach4==true ? false : true\" (keypress)=\"MobileNumber($event)\">\r\n                    <a class=\"t-save\">\r\n                      <i class=\"material-icons\" (click)=\"edit_ach4=false; update_ach('December')\">save </i>\r\n                    </a>\r\n                    <a class=\"t-edit\">\r\n                      <i class=\"material-icons\" (click)=\"edit_ach4=true\">edit</i>\r\n                    </a>\r\n                  </div>\r\n                </td>\r\n                <td class=\"padding0\" *ngIf=\"assign_sales_user.length != '0'\">\r\n                  <table>\r\n                    <tr *ngFor=\"let row of assign_sales_user\">\r\n                      <td class=\"bdr-b\">{{row.name}}</td>\r\n                      <td class=\"w120 bdr-b\" *ngIf=\"row.target\">&#8377; {{row.target[12] ? type.order_type == 'Primary' ? row.target[12].pri_target : row.target[12].sec_target : '0'}}</td>\r\n                      <td class=\"w120 bdr-b\" *ngIf=\"row.target\">&#8377; {{row.target[12] ? type.order_type == 'Primary' ? row.target[12].pri_achivement :  row.target[12].sec_achivement : '0'}}</td>\r\n                      <td class=\"w120 bdr-b\" *ngIf=\"!row.target\">&#8377; 0</td>\r\n                      <td class=\"w120 bdr-b\" *ngIf=\"!row.target\">&#8377; 0</td>\r\n                    </tr>\r\n                  </table>\r\n                </td>\r\n                <td class=\"w130\">&#8377; {{total_dec_ach ? total_dec_ach : '0'}}</td>\r\n                <td class=\"w120\">&#8377; {{bal_dec_ach ? bal_dec_ach : '0'}}</td>\r\n              </tr>\r\n              <!-- *ngIf=\"month_condition >= nov_date\" -->\r\n              <!-- {{current_year}} -->\r\n              <tr >\r\n                <td class=\"w130\">November </td>\r\n                <td class=\"w150 text-center\">\r\n                  <div class=\"enter-form\" [ngClass]=\"{'active' : edit_target5==true} \">\r\n                    <input type=\"number\" name=\"november_target\" [(ngModel)]=\"form.november_target\" [disabled]=\"edit_target5==true ? false : true\" (keypress)=\"MobileNumber($event)\">\r\n                    <a class=\"t-save\">\r\n                      <i class=\"material-icons\" (click)=\"edit_target5=false; add_monthly_target('November')\">save </i>\r\n                    </a>\r\n                    <a class=\"t-edit\">\r\n                      <i class=\"material-icons\" (click)=\"edit_target5=true\">edit</i>\r\n                    </a>\r\n                  </div>\r\n                </td>\r\n                <td class=\"w150 text-right\">\r\n                  <div class=\"enter-form\" [ngClass]=\"{'active' : edit_ach5==true } \">\r\n                    <input type=\"number\" name=\"november_ach\" [(ngModel)]=\"form.november_ach\" [disabled]=\"edit_ach5==true ? false : true\" (keypress)=\"MobileNumber($event)\">\r\n                    <a class=\"t-save\">\r\n                      <i class=\"material-icons\" (click)=\"edit_ach5=false; update_ach('November')\">save </i>\r\n                    </a>\r\n                    <a class=\"t-edit\">\r\n                      <i class=\"material-icons\" (click)=\"edit_ach5=true\">edit</i>\r\n                    </a>\r\n                  </div>\r\n                </td>\r\n                <td class=\"padding0\" *ngIf=\"assign_sales_user.length != '0'\">\r\n                  <table>\r\n                    <tr *ngFor=\"let row of assign_sales_user\">\r\n                      <td class=\"bdr-b\">{{row.name}}</td>\r\n                      <td class=\"w120 bdr-b\" *ngIf=\"row.target\">&#8377; {{row.target[11] ? type.order_type == 'Primary' ? row.target[11].pri_target : row.target[11].sec_target : '0'}}</td>\r\n                      <td class=\"w120 bdr-b\" *ngIf=\"row.target\">&#8377; {{row.target[11] ? type.order_type == 'Primary' ? row.target[11].pri_achivement : row.target[11].sec_achivement : '0'}}</td>\r\n                      <td class=\"w120 bdr-b\" *ngIf=\"!row.target\">&#8377; 0</td>\r\n                      <td class=\"w120 bdr-b\" *ngIf=\"!row.target\">&#8377; 0</td>\r\n                    </tr>\r\n                  </table>\r\n                </td>\r\n                <td class=\"w130\">&#8377; {{total_nov_ach ? total_nov_ach : '0'}}</td>\r\n                <td class=\"w120\">&#8377; {{bal_nov_ach ? bal_nov_ach : '0'}}</td>\r\n              </tr>\r\n              <!-- *ngIf=\"month_condition >= oct_date\" -->\r\n              <!-- {{current_year}} -->\r\n              <tr >\r\n                <td class=\"w130\">October </td>\r\n                <td class=\"w150 text-center\">\r\n                  <div class=\"enter-form\" [ngClass]=\"{'active' : edit_target6==true} \">\r\n                    <input type=\"number\" name=\"october_target\" [(ngModel)]=\"form.october_target\" [disabled]=\"edit_target6==true ? false : true\" (keypress)=\"MobileNumber($event)\">\r\n                    <a class=\"t-save\">\r\n                      <i class=\"material-icons\" (click)=\"edit_target6=false; add_monthly_target('October')\">save </i>\r\n                    </a>\r\n                    <a class=\"t-edit\">\r\n                      <i class=\"material-icons\" (click)=\"edit_target6=true\">edit</i>\r\n                    </a>\r\n                  </div>\r\n                </td>\r\n                <td class=\"w150 text-right\">\r\n                  <div class=\"enter-form\" [ngClass]=\"{'active' : edit_ach6==true } \">\r\n                    <input type=\"number\" name=\"october_ach\" [(ngModel)]=\"form.october_ach\" [disabled]=\"edit_ach6==true ? false : true\" (keypress)=\"MobileNumber($event)\">\r\n                    <a class=\"t-save\">\r\n                      <i class=\"material-icons\" (click)=\"edit_ach6=false; update_ach('October')\">save </i>\r\n                    </a>\r\n                    <a class=\"t-edit\">\r\n                      <i class=\"material-icons\" (click)=\"edit_ach6=true\">edit</i>\r\n                    </a>\r\n                  </div>\r\n                </td>\r\n                <td class=\"padding0\" *ngIf=\"assign_sales_user.length != '0'\">\r\n                  <table>\r\n                    <tr *ngFor=\"let row of assign_sales_user\">\r\n                      <td class=\"bdr-b\">{{row.name}}</td>\r\n                      <td class=\"w120 bdr-b\" *ngIf=\"row.target\">&#8377; {{row.target[10] ? type.order_type == 'Primary' ? row.target[10].pri_target : row.target[10].sec_target : '0'}}</td>\r\n                      <td class=\"w120 bdr-b\" *ngIf=\"row.target\">&#8377; {{row.target[10] ? type.order_type == 'Primary' ? row.target[10].pri_achivement : row.target[10].sec_achivement : '0'}}</td>\r\n                      <td class=\"w120 bdr-b\" *ngIf=\"!row.target\">&#8377; 0</td>\r\n                      <td class=\"w120 bdr-b\" *ngIf=\"!row.target\">&#8377; 0</td>\r\n                    </tr>\r\n                  </table>\r\n                </td>\r\n                <td class=\"w130\">&#8377; {{total_oct_ach ? total_oct_ach : '0'}}</td>\r\n                <td class=\"w120\">&#8377; {{bal_oct_ach ? bal_oct_ach : '0'}}</td>\r\n              </tr>\r\n              <!-- *ngIf=\"month_condition >= sep_date\" -->\r\n              <!-- {{current_year}} -->\r\n              <tr >\r\n                <td class=\"w130\">September </td>\r\n                <td class=\"w150 text-center\">\r\n                  <div class=\"enter-form\" [ngClass]=\"{'active' : edit_target7==true} \">\r\n                    <input type=\"number\" name=\"september_target\" [(ngModel)]=\"form.september_target\" [disabled]=\"edit_target7==true ? false : true\" (keypress)=\"MobileNumber($event)\">\r\n                    <a class=\"t-save\">\r\n                      <i class=\"material-icons\" (click)=\"edit_target7=false; add_monthly_target('September')\">save </i>\r\n                    </a>\r\n                    <a class=\"t-edit\">\r\n                      <i class=\"material-icons\" (click)=\"edit_target7=true\">edit</i>\r\n                    </a>\r\n                  </div>\r\n                </td>\r\n                <td class=\"w150 text-right\">\r\n                  <div class=\"enter-form\" [ngClass]=\"{'active' : edit_ach7==true } \">\r\n                    <input type=\"number\" name=\"september_ach\" [(ngModel)]=\"form.september_ach\" [disabled]=\"edit_ach7==true ? false : true\" (keypress)=\"MobileNumber($event)\">\r\n                    <a class=\"t-save\">\r\n                      <i class=\"material-icons\" (click)=\"edit_ach7=false; update_ach('September')\">save </i>\r\n                    </a>\r\n                    <a class=\"t-edit\">\r\n                      <i class=\"material-icons\" (click)=\"edit_ach7=true\">edit</i>\r\n                    </a>\r\n                  </div>\r\n                </td>\r\n                <td class=\"padding0\" *ngIf=\"assign_sales_user.length != '0'\">\r\n                  <table>\r\n                    <tr *ngFor=\"let row of assign_sales_user\">\r\n                      <td class=\"bdr-b\">{{row.name}}</td>\r\n                      <td class=\"w120 bdr-b\" *ngIf=\"row.target\">&#8377; {{row.target[9] ? type.order_type == 'Primary' ? row.target[9].pri_target : row.target[9].sec_target : '0'}}</td>\r\n                      <td class=\"w120 bdr-b\" *ngIf=\"row.target\">&#8377; {{row.target[9] ? type.order_type == 'Primary' ? row.target[9].pri_achivement : row.target[9].sec_achivement : '0'}}</td>\r\n                      <td class=\"w120 bdr-b\" *ngIf=\"!row.target\">&#8377; 0</td>\r\n                      <td class=\"w120 bdr-b\" *ngIf=\"!row.target\">&#8377; 0</td>\r\n                    </tr>\r\n                  </table>\r\n                </td>\r\n                <td class=\"w130\">&#8377; {{total_sep_ach ? total_sep_ach : '0'}}</td>\r\n                <td class=\"w120\">&#8377; {{bal_sep_ach ? bal_sep_ach : '0'}}</td>\r\n              </tr>\r\n              <!-- *ngIf=\"month_condition >= aug_date\" -->\r\n              <!-- {{current_year}} -->\r\n              <tr >\r\n                <td class=\"w130\">August </td>\r\n                <td class=\"w150 text-center\">\r\n                  <div class=\"enter-form\" [ngClass]=\"{'active' : edit_target8==true} \">\r\n                    <input type=\"number\" name=\"august_target\" [(ngModel)]=\"form.august_target\" [disabled]=\"edit_target8==true ? false : true\" (keypress)=\"MobileNumber($event)\">\r\n                    <a class=\"t-save\">\r\n                      <i class=\"material-icons\" (click)=\"edit_target8=false; add_monthly_target('August')\">save </i>\r\n                    </a>\r\n                    <a class=\"t-edit\">\r\n                      <i class=\"material-icons\" (click)=\"edit_target8=true\">edit</i>\r\n                    </a>\r\n                  </div>\r\n                </td>\r\n                <td class=\"w150 text-right\">\r\n                  <div class=\"enter-form\" [ngClass]=\"{'active' : edit_ach8==true } \">\r\n                    <input type=\"number\" name=\"august_ach\" [(ngModel)]=\"form.august_ach\" [disabled]=\"edit_ach8==true ? false : true\" (keypress)=\"MobileNumber($event)\">\r\n                    <a class=\"t-save\">\r\n                      <i class=\"material-icons\" (click)=\"edit_ach8=false; update_ach('August')\">save </i>\r\n                    </a>\r\n                    <a class=\"t-edit\">\r\n                      <i class=\"material-icons\" (click)=\"edit_ach8=true\">edit</i>\r\n                    </a>\r\n                  </div>\r\n                </td>\r\n                <td class=\"padding0\" *ngIf=\"assign_sales_user.length != '0'\">\r\n                  <table>\r\n                    <tr *ngFor=\"let row of assign_sales_user\">\r\n                      <td class=\"bdr-b\">{{row.name}}</td>\r\n                      <td class=\"w120 bdr-b\" *ngIf=\"row.target\">&#8377; {{row.target[8] ? type.order_type == 'Primary' ? row.target[8].pri_target : row.target[8].sec_target : '0'}}</td>\r\n                      <td class=\"w120 bdr-b\" *ngIf=\"row.target\">&#8377; {{row.target[8] ? type.order_type == 'Primary' ? row.target[8].pri_achivement : row.target[8].sec_achivement : '0'}}</td>\r\n                      <td class=\"w120 bdr-b\" *ngIf=\"!row.target\">&#8377; 0</td>\r\n                      <td class=\"w120 bdr-b\" *ngIf=\"!row.target\">&#8377; 0</td>\r\n                    </tr>\r\n                  </table>\r\n                </td>\r\n                <td class=\"w130\">&#8377; {{total_aug_ach ? total_aug_ach : '0'}}</td>\r\n                <td class=\"w120\">&#8377; {{bal_aug_ach ? bal_aug_ach : '0'}}</td>\r\n              </tr>\r\n              <!-- *ngIf=\"month_condition >= july_date\" -->\r\n              <!-- {{current_year}} -->\r\n              <tr >\r\n                <td class=\"w130\">July </td>\r\n                <td class=\"w150 text-center\">\r\n                  <div class=\"enter-form\" [ngClass]=\"{'active' : edit_target9==true} \">\r\n                    <input type=\"number\" name=\"july_target\" [(ngModel)]=\"form.july_target\" [disabled]=\"edit_target9==true ? false : true\" (keypress)=\"MobileNumber($event)\">\r\n                    <a class=\"t-save\">\r\n                      <i class=\"material-icons\" (click)=\"edit_target9=false; add_monthly_target('July')\">save </i>\r\n                    </a>\r\n                    <a class=\"t-edit\">\r\n                      <i class=\"material-icons\" (click)=\"edit_target9=true\">edit</i>\r\n                    </a>\r\n                  </div>\r\n                </td>\r\n                <td class=\"w150 text-right\">\r\n                  <div class=\"enter-form\" [ngClass]=\"{'active' : edit_ach9==true } \">\r\n                    <input type=\"number\" name=\"july_ach\" [(ngModel)]=\"form.july_ach\" [disabled]=\"edit_ach9==true ? false : true\" (keypress)=\"MobileNumber($event)\">\r\n                    <a class=\"t-save\">\r\n                      <i class=\"material-icons\" (click)=\"edit_ach9=false; update_ach('July')\">save </i>\r\n                    </a>\r\n                    <a class=\"t-edit\">\r\n                      <i class=\"material-icons\" (click)=\"edit_ach9=true\">edit</i>\r\n                    </a>\r\n                  </div>\r\n                </td>\r\n                <td class=\"padding0\" *ngIf=\"assign_sales_user.length != '0'\">\r\n                  <table>\r\n                    <tr *ngFor=\"let row of assign_sales_user\">\r\n                      <td class=\"bdr-b\">{{row.name}}</td>\r\n                      <td class=\"w120 bdr-b\"  *ngIf=\"row.target\">&#8377; {{row.target[7] ? type.order_type == 'Primary' ? row.target[7].pri_target : row.target[7].sec_target : '0'}}</td>\r\n                      <td class=\"w120 bdr-b\"  *ngIf=\"row.target\">&#8377; {{row.target[7] ? type.order_type == 'Primary' ? row.target[7].pri_achivement : row.target[7].sec_achivement : '0'}}</td>\r\n                      <td class=\"w120 bdr-b\" *ngIf=\"!row.target\">&#8377; 0</td>\r\n                      <td class=\"w120 bdr-b\" *ngIf=\"!row.target\">&#8377; 0</td>\r\n                    </tr>\r\n                  </table>\r\n                </td>\r\n                <td class=\"w130\">&#8377; {{total_july_ach ? total_july_ach : '0'}}</td>\r\n                <td class=\"w120\">&#8377; {{bal_july_ach ? bal_july_ach : '0'}}</td>\r\n              </tr>\r\n              <!-- *ngIf=\"month_condition >= june_date\" -->\r\n              <!-- {{current_year}} -->\r\n              <tr >\r\n                <td class=\"w130\">June </td>\r\n                <td class=\"w150 text-center\">\r\n                  <div class=\"enter-form\" [ngClass]=\"{'active' : edit_target10==true} \">\r\n                    <input type=\"number\" name=\"june_target\" [(ngModel)]=\"form.june_target\" [disabled]=\"edit_target10==true ? false : true\" (keypress)=\"MobileNumber($event)\">\r\n                    <a class=\"t-save\">\r\n                      <i class=\"material-icons\" (click)=\"edit_target10=false; add_monthly_target('June')\">save </i>\r\n                    </a>\r\n                    <a class=\"t-edit\">\r\n                      <i class=\"material-icons\" (click)=\"edit_target10=true\">edit</i>\r\n                    </a>\r\n                  </div>\r\n                </td>\r\n                <td class=\"w150 text-right\">\r\n                  <div class=\"enter-form\" [ngClass]=\"{'active' : edit_ach10==true } \">\r\n                    <input type=\"number\" name=\"june_ach\" [(ngModel)]=\"form.june_ach\" [disabled]=\"edit_ach10==true ? false : true\" (keypress)=\"MobileNumber($event)\">\r\n                    <a class=\"t-save\">\r\n                      <i class=\"material-icons\" (click)=\"edit_ach10=false; update_ach('June')\">save </i>\r\n                    </a>\r\n                    <a class=\"t-edit\">\r\n                      <i class=\"material-icons\" (click)=\"edit_ach10=true\">edit</i>\r\n                    </a>\r\n                  </div>\r\n                </td>\r\n                <td class=\"padding0\" *ngIf=\"assign_sales_user.length != '0'\">\r\n                  <table>\r\n                    <tr *ngFor=\"let row of assign_sales_user\">\r\n                      <td class=\"bdr-b\">{{row.name}}</td>\r\n                      <td class=\"w120 bdr-b\" *ngIf=\"row.target\">&#8377; {{row.target[6] ? type.order_type == 'Primary' ? row.target[6].pri_target : row.target[6].sec_target : '0'}}</td>\r\n                      <td class=\"w120 bdr-b\" *ngIf=\"row.target\">&#8377; {{row.target[6] ? type.order_type == 'Primary' ? row.target[6].pri_achivement : row.target[6].sec_achivement : '0'}}</td>\r\n                      <td class=\"w120 bdr-b\" *ngIf=\"!row.target\">&#8377; 0</td>\r\n                      <td class=\"w120 bdr-b\" *ngIf=\"!row.target\">&#8377; 0</td>\r\n                    </tr>\r\n                  </table>\r\n                </td>\r\n                <td class=\"w130\">&#8377; {{total_june_ach ? total_june_ach : '0'}}</td>\r\n                <td class=\"w120\">&#8377; {{bal_june_ach ? bal_june_ach : '0'}}</td>\r\n              </tr>\r\n              <!-- *ngIf=\"month_condition >= may_date\" -->\r\n              <!-- {{current_year}} -->\r\n              <tr >\r\n                <td class=\"w130\">May </td>\r\n                <td class=\"w150 text-center\">\r\n                  <div class=\"enter-form\" [ngClass]=\"{'active' : edit_target11==true} \">\r\n                    <input type=\"number\" name=\"may_target\" [(ngModel)]=\"form.may_target\" [disabled]=\"edit_target11==true ? false : true\" (keypress)=\"MobileNumber($event)\">\r\n                    <a class=\"t-save\">\r\n                      <i class=\"material-icons\" (click)=\"edit_target11=false; add_monthly_target('May')\">save </i>\r\n                    </a>\r\n                    <a class=\"t-edit\">\r\n                      <i class=\"material-icons\" (click)=\"edit_target11=true\">edit</i>\r\n                    </a>\r\n                  </div>\r\n                </td>\r\n                <td class=\"w150 text-right\">\r\n                  <div class=\"enter-form\" [ngClass]=\"{'active' : edit_ach11==true } \">\r\n                    <input type=\"number\" name=\"may_ach\" [(ngModel)]=\"form.may_ach\" [disabled]=\"edit_ach11==true ? false : true\" (keypress)=\"MobileNumber($event)\">\r\n                    <a class=\"t-save\">\r\n                      <i class=\"material-icons\" (click)=\"edit_ach11=false; update_ach('May')\">save </i>\r\n                    </a>\r\n                    <a class=\"t-edit\">\r\n                      <i class=\"material-icons\" (click)=\"edit_ach11=true\">edit</i>\r\n                    </a>\r\n                  </div>\r\n                </td>\r\n                <td class=\"padding0\" *ngIf=\"assign_sales_user.length != '0'\">\r\n                  <table>\r\n                    <tr *ngFor=\"let row of assign_sales_user\">\r\n                      <td class=\"bdr-b\">{{row.name}}</td>\r\n                      <td class=\"w120 bdr-b\" *ngIf=\"row.target\">&#8377; {{row.target[5] ? type.order_type == 'Primary' ? row.target[5].pri_target : row.target[5].sec_target : '0'}}</td>\r\n                      <td class=\"w120 bdr-b\" *ngIf=\"row.target\">&#8377; {{row.target[5] ? type.order_type == 'Primary' ? row.target[5].pri_achivement : row.target[5].sec_achivement : '0'}}</td>\r\n                      <td class=\"w120 bdr-b\" *ngIf=\"!row.target\">&#8377; 0</td>\r\n                      <td class=\"w120 bdr-b\" *ngIf=\"!row.target\">&#8377; 0</td>\r\n                    </tr>\r\n                  </table>\r\n                </td>\r\n                <td class=\"w130\">&#8377; {{total_may_ach ? total_may_ach : '0'}}</td>\r\n                <td class=\"w120\">&#8377; {{bal_may_ach ? bal_may_ach : '0'}}</td>\r\n              </tr>\r\n              <!-- *ngIf=\"month_condition >= april_date\" -->\r\n              <!-- {{current_year}} -->\r\n              <tr >\r\n                <td class=\"w130\">April </td>\r\n                <td class=\"w150 text-center\">\r\n                  <div class=\"enter-form\" [ngClass]=\"{'active' : edit_target12==true} \">\r\n                    <input type=\"number\" name=\"april_target\" [(ngModel)]=\"form.april_target\" [disabled]=\"edit_target12==true ? false : true\" (keypress)=\"MobileNumber($event)\">\r\n                    <a class=\"t-save\">\r\n                      <i class=\"material-icons\" (click)=\"edit_target12=false; add_monthly_target('April')\">save </i>\r\n                    </a>\r\n                    <a class=\"t-edit\">\r\n                      <i class=\"material-icons\" (click)=\"edit_target12=true\">edit</i>\r\n                    </a>\r\n                  </div>\r\n                </td>\r\n                <td class=\"w150 text-right\">\r\n                  <div class=\"enter-form\" [ngClass]=\"{'active' : edit_ach12==true } \">\r\n                    <input type=\"number\" name=\"april_ach\" [(ngModel)]=\"form.april_ach\" [disabled]=\"edit_ach12==true ? false : true\" (keypress)=\"MobileNumber($event)\">\r\n                    <a class=\"t-save\">\r\n                      <i class=\"material-icons\" (click)=\"edit_ach12=false; update_ach('April')\">save </i>\r\n                    </a>\r\n                    <a class=\"t-edit\">\r\n                      <i class=\"material-icons\" (click)=\"edit_ach12=true\">edit</i>\r\n                    </a>\r\n                  </div>\r\n                </td>\r\n                <td class=\"padding0\" *ngIf=\"assign_sales_user.length != '0'\">\r\n                  <table>\r\n                    <tr *ngFor=\"let row of assign_sales_user\">\r\n                      <td class=\"bdr-b\">{{row.name}}</td>\r\n                      <td class=\"w120 bdr-b\" *ngIf=\"row.target\">&#8377; {{row.target[4] ? type.order_type == 'Primary' ? row.target[4].pri_target : row.target[4].sec_target : '0'}}</td>\r\n                      <td class=\"w120 bdr-b\" *ngIf=\"row.target\">&#8377; {{row.target[4] ? type.order_type == 'Primary' ? row.target[4].pri_achivement : row.target[4].sec_achivement : '0'}}</td>\r\n                      <td class=\"w120 bdr-b\" *ngIf=\"!row.target\">&#8377; 0</td>\r\n                      <td class=\"w120 bdr-b\" *ngIf=\"!row.target\">&#8377; 0</td>\r\n                    </tr>\r\n                  </table>\r\n                </td>\r\n                <td class=\"w130\">&#8377; {{total_apr_ach ? total_apr_ach : '0'}}</td>\r\n                <td class=\"w120\">&#8377; {{bal_apr_ach ? bal_apr_ach : '0'}}</td>\r\n              </tr>\r\n            </table>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/user/user-target/user-target.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/user/user-target/user-target.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".new-table {\n  overflow: auto;\n  margin: -14px -15px;\n}\n.new-table table {\n  width: 100%;\n  table-layout: fixed;\n  border-collapse: collapse;\n  box-sizing: border-box;\n}\n.new-table table tr th .table-head {\n  padding: 0px 15px;\n  border: solid 1px #d8d6d6;\n  border-left: 0;\n  border-right: 0;\n  background: #f7f7f7;\n}\n.new-table table tr th .table-head table tr th {\n  border-right: 1px solid #dcdbdb;\n  padding: 10px;\n  font-size: 11px;\n  font-weight: 500;\n  color: #000000;\n  position: relative;\n  text-align: left;\n}\n.new-table table tr th .table-head table tr th:last-child {\n  border-right: 0px;\n}\n.new-table table tr td {\n  padding: 15px;\n}\n.new-table table tr td .table-body {\n  width: 100%;\n  border-radius: 8px;\n  border: 1px solid #ccc;\n}\n.new-table table tr td .table-body table tr td {\n  border: 1px solid #dcdbdb;\n  padding: 10px;\n  background: #ffffff;\n  font-size: 11px;\n  font-weight: normal !important;\n  color: #383737;\n  position: relative;\n}\n.new-table table tr td .table-body table tr td.point {\n  background: #00aa0b;\n  text-align: center;\n  color: #ffffff;\n}\n.new-table table tr td .table-body table tr td.eligible {\n  background: #f1f1f1;\n  text-align: center;\n  font-weight: 500;\n}\n.new-table table tr td .table-body table tr td.day {\n  background: #ed3237;\n  text-align: center;\n  color: #ffffff;\n}\n.new-table table tr td .table-body table tr td:first-child {\n  border-left: 0px;\n}\n.new-table table tr td .table-body table tr td:last-child {\n  border-right: 0px;\n}\n.new-table table tr td .table-body table tr td p {\n  font-size: 15px;\n  font-weight: bold;\n}\n.new-table table tr td .table-body table tr td span {\n  padding-right: 17px;\n  font-weight: normal;\n  font-size: 14px;\n  color: #000;\n}\n.new-table table tr td .table-body table tr:first-child td {\n  border-top: 0px;\n}\n.new-table table tr td .table-body table tr:first-child td:first-child {\n  border-radius: 8px;\n}\n.new-table table tr td .table-body table tr:first-child td:last-child {\n  border-radius: 0px 8px 0px 0px;\n}\n.new-table table tr td .table-body table tr:last-child td {\n  border-bottom: 0px;\n}\n.new-table table tr td .table-body table tr:last-child td:first-child {\n  border-radius: 0px 0px 0px 8px;\n}\n.new-table table tr td .table-body table tr:last-child td:last-child {\n  border-radius: 0px 0px 8px 0px;\n}\n.new-table table tr td .table-body table tr:hover td {\n  background: #f7f7f7;\n  transition: 0.5s;\n}\n.new-table table tr td .table-body table tr:hover td.point {\n  background: #00aa0b;\n  color: #ffffff;\n}\n.new-table table tr td .table-body table tr:hover td.eligible {\n  background: #f1f1f1;\n}\n.new-table table tr td .table-body table tr:hover td.day {\n  background: #ed3237;\n  color: #ffffff;\n}\n.new-table table tr td .table-body table tr.remove-border td {\n  border-top: solid 1px #ccc !important;\n  border: none;\n}\n.enter-form {\n  display: flex;\n  align-items: center;\n  border: solid 1px #bdb8b8;\n  width: 130px;\n}\n.enter-form .t-head {\n  padding: 5px;\n  background: #ccc;\n  height: 24px;\n}\n.enter-form .t-head p {\n  font-size: 11px !important;\n}\n.enter-form input {\n  width: 102px;\n  border: none;\n  height: 24px;\n  outline: none;\n  padding-left: 5px;\n  font-size: 13px;\n  padding: 1px;\n}\n.enter-form .t-save {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: #12af12;\n  display: none;\n  color: #fff;\n  cursor: pointer;\n  width: 27px;\n}\n.enter-form .t-save i {\n  font-size: 20px;\n}\n.enter-form .t-edit {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: skyblue;\n  cursor: pointer;\n  padding: 1px;\n  width: 27px;\n}\n.enter-form .t-edit i {\n  font-size: 20px;\n}\n.enter-form.active .t-save {\n  display: inherit;\n}\n.enter-form.active .t-edit {\n  display: none;\n}\n.marge {\n  background: #711e9c !important;\n  color: #fff !important;\n  border-radius: 6px 0px 0px 4px !important;\n}\n.marge h4 {\n  transform: rotate(-90deg);\n  display: flex;\n  align-items: center;\n  white-space: nowrap;\n  justify-content: center;\n  font-size: 20px;\n  font-weight: normal;\n}\n.size-10 h4 {\n  font-size: 20px;\n}\n.fixed-table {\n  background: #ffffff;\n  height: 30%;\n  bottom: 0;\n  width: 100%;\n  right: 0;\n  padding: 50px 0px;\n  z-index: 2;\n}\n.fixed-table table {\n  width: 100%;\n  table-layout: fixed;\n  border-collapse: collapse;\n  box-sizing: border-box;\n}\n.fixed-table table tr th .table-head {\n  padding: 0px 15px;\n  border: solid 1px #d8d6d6;\n  border-left: 0;\n  border-right: 0;\n  background: #f7f7f7;\n}\n.fixed-table table tr th .table-head table tr th {\n  border-right: 1px solid #dcdbdb;\n  padding: 10px;\n  font-size: 14px;\n  text-transform: capitalize;\n  font-weight: 500;\n  color: #000000;\n  position: relative;\n  text-align: left;\n}\n.fixed-table table tr th .table-head table tr th:last-child {\n  border-right: 0px;\n}\n.fixed-table table tr td .table-body {\n  width: 100%;\n}\n.fixed-table table tr td .table-body table tr {\n  border-bottom: solid 1px #ccc;\n}\n.fixed-table table tr td .table-body table tr td {\n  padding: 10px;\n  background: #ffffff;\n  font-size: 12px;\n  font-weight: normal;\n  color: #383737;\n  position: relative;\n}\n.fixed-table table tr td .table-body table tr td.point {\n  background: #00aa0b;\n  text-align: center;\n  color: #ffffff;\n}\n.fixed-table table tr td .table-body table tr td.eligible {\n  background: #f1f1f1;\n  text-align: center;\n  font-weight: 500;\n}\n.fixed-table table tr td .table-body table tr td.day {\n  background: #ed3237;\n  text-align: center;\n  color: #ffffff;\n}\n.fixed-table table tr td .table-body table tr td:first-child {\n  border-left: 0px;\n}\n.fixed-table table tr td .table-body table tr td:last-child {\n  border-right: 0px;\n}\n.fixed-table table tr td .table-body table tr td p {\n  font-size: 14px;\n  font-weight: 700;\n}\n.fixed-table table tr td .table-body table tr:first-child td {\n  border-top: 0px;\n}\n.fixed-table table tr td .table-body table tr:first-child td:first-child {\n  border-radius: 8px;\n}\n.fixed-table table tr td .table-body table tr:first-child td:last-child {\n  border-radius: 0px 8px 0px 0px;\n}\n.fixed-table table tr td .table-body table tr:last-child td {\n  border-bottom: 0px;\n}\n.fixed-table table tr td .table-body table tr:last-child td:first-child {\n  border-radius: 0px 0px 0px 8px;\n}\n.fixed-table table tr td .table-body table tr:last-child td:last-child {\n  border-radius: 0px 0px 8px 0px;\n}\n.fixed-table table tr td .table-body table tr:hover td {\n  background: #f7f7f7;\n  transition: 0.5s;\n}\n.fixed-table table tr td .table-body table tr:hover td.point {\n  background: #00aa0b;\n  color: #ffffff;\n}\n.fixed-table table tr td .table-body table tr:hover td.eligible {\n  background: #f1f1f1;\n}\n.fixed-table table tr td .table-body table tr:hover td.day {\n  background: #ed3237;\n  color: #ffffff;\n}"

/***/ }),

/***/ "./src/app/user/user-target/user-target.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/user/user-target/user-target.component.ts ***!
  \***********************************************************/
/*! exports provided: UserTargetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserTargetComponent", function() { return UserTargetComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_services_DatabaseService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/_services/DatabaseService */ "./src/_services/DatabaseService.ts");
/* harmony import */ var src_app_dialog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/dialog.component */ "./src/app/dialog.component.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! moment */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_5__);






var UserTargetComponent = /** @class */ (function () {
    function UserTargetComponent(route, serve, dialog) {
        var _this = this;
        this.route = route;
        this.serve = serve;
        this.dialog = dialog;
        this.value = [];
        this.userLeadList = [];
        this.yearly_target = {};
        this.current_month_no = '';
        this.current_year_no = '';
        this.current_year = '';
        this.type = {};
        this.year = 0;
        this.targets = [];
        this.assign_sales_user = [];
        this.edit_target1 = false;
        this.edit_ach1 = false;
        this.edit_target2 = false;
        this.edit_ach2 = false;
        this.edit_target3 = false;
        this.edit_ach3 = false;
        this.edit_target4 = false;
        this.edit_ach4 = false;
        this.edit_target5 = false;
        this.edit_ach5 = false;
        this.edit_target6 = false;
        this.edit_ach6 = false;
        this.edit_target7 = false;
        this.edit_ach7 = false;
        this.edit_target8 = false;
        this.edit_ach8 = false;
        this.edit_target9 = false;
        this.edit_ach9 = false;
        this.edit_target10 = false;
        this.edit_ach10 = false;
        this.edit_target11 = false;
        this.edit_ach11 = false;
        this.edit_target12 = false;
        this.edit_ach12 = false;
        this.data = {};
        this.form = {};
        this.target_data = [];
        this.year_target = false;
        this.year_target_data = [];
        this.year_achievement = 0;
        this.year_balance = 0;
        this.jan_team_ach = 0;
        this.feb_team_ach = 0;
        this.mar_team_ach = 0;
        this.apr_team_ach = 0;
        this.may_team_ach = 0;
        this.june_team_ach = 0;
        this.july_team_ach = 0;
        this.aug_team_ach = 0;
        this.sep_team_ach = 0;
        this.oct_team_ach = 0;
        this.nov_team_ach = 0;
        this.dec_team_ach = 0;
        this.total_jan_ach = 0;
        this.total_feb_ach = 0;
        this.total_mar_ach = 0;
        this.total_apr_ach = 0;
        this.total_may_ach = 0;
        this.total_june_ach = 0;
        this.total_july_ach = 0;
        this.total_aug_ach = 0;
        this.total_sep_ach = 0;
        this.total_oct_ach = 0;
        this.total_nov_ach = 0;
        this.total_dec_ach = 0;
        this.bal_jan_ach = 0;
        this.bal_feb_ach = 0;
        this.bal_mar_ach = 0;
        this.bal_apr_ach = 0;
        this.bal_may_ach = 0;
        this.bal_june_ach = 0;
        this.bal_july_ach = 0;
        this.bal_aug_ach = 0;
        this.bal_sep_ach = 0;
        this.bal_oct_ach = 0;
        this.bal_nov_ach = 0;
        this.bal_dec_ach = 0;
        this.type.order_type = 'Primary';
        this.route.params.subscribe(function (params) {
            _this.user_id = params.id;
        });
        this.current_month_no = moment__WEBPACK_IMPORTED_MODULE_5__().format('M');
        this.current_year_no = moment__WEBPACK_IMPORTED_MODULE_5__().format('Y');
        this.current_year = moment__WEBPACK_IMPORTED_MODULE_5__().format('YYYY');
        var today = moment__WEBPACK_IMPORTED_MODULE_5__();
        if (today.month() >= 3) {
            this.financialYear = today.format('YYYY') + '-' + today.add(1, 'years').format('YYYY');
        }
        else {
            this.financialYear = today.subtract(1, 'years').format('YYYY') + '-' + today.add(1, 'years').format('YYYY');
        }
        var c = new Date(new Date().setFullYear(new Date().getFullYear() + 1));
        this.next_Year = moment__WEBPACK_IMPORTED_MODULE_5__(c).format('YYYY');
        this.month_condition = new Date(this.current_year, this.current_month_no).toISOString().slice(0, 7);
        this.march_date = new Date(this.next_Year, 3).toISOString().slice(0, 7);
        this.feb_date = new Date(this.next_Year, 2).toISOString().slice(0, 7);
        this.jan_date = new Date(this.next_Year, 1).toISOString().slice(0, 7);
        this.dec_date = new Date(this.current_year, 12).toISOString().slice(0, 7);
        this.nov_date = new Date(this.current_year, 11).toISOString().slice(0, 7);
        this.oct_date = new Date(this.current_year, 10).toISOString().slice(0, 7);
        this.sep_date = new Date(this.current_year, 9).toISOString().slice(0, 7);
        this.aug_date = new Date(this.current_year, 8).toISOString().slice(0, 7);
        this.july_date = new Date(this.current_year, 7).toISOString().slice(0, 7);
        this.june_date = new Date(this.current_year, 6).toISOString().slice(0, 7);
        this.may_date = new Date(this.current_year, 5).toISOString().slice(0, 7);
        this.april_date = new Date(this.current_year, 4).toISOString().slice(0, 7);
    }
    UserTargetComponent.prototype.ngOnInit = function () {
        this.userTargetList();
        this.yearly_target.primary_target = 0;
        this.yearly_target.secondary_target = 0;
        this.get_year_target();
        this.get_monthly_target_data();
        this.get_assign_sales_user();
    };
    UserTargetComponent.prototype.nextYear = function () {
        this.year++;
        this.userTargetList();
    };
    UserTargetComponent.prototype.previousYear = function () {
        this.year--;
        this.userTargetList();
    };
    UserTargetComponent.prototype.userTargetList = function () {
        var _this = this;
        this.serve.post_rqst({ 'user_id': this.user_id, 'year': this.year }, "User/userTargetList").subscribe((function (response) {
            _this.targets = response['targets'];
            for (var i = 0; i < _this.targets[0].targets.length; i++) {
                for (var j = 0; j < _this.targets[0].targets[i].months.length; j++) {
                    _this.targets[0].targets[i].months[j].target_info.pri_achivement = Math.round(_this.targets[0].targets[i].months[j].target_info.pri_achivement);
                    _this.targets[0].targets[i].months[j].target_info.pri_balance = Math.round(_this.targets[0].targets[i].months[j].target_info.pri_balance);
                    _this.targets[0].targets[i].months[j].target_info.sec_achivement = Math.round(_this.targets[0].targets[i].months[j].target_info.sec_achivement);
                    _this.targets[0].targets[i].months[j].target_info.sec_balance = Math.round(_this.targets[0].targets[i].months[j].target_info.sec_balance);
                }
            }
            _this.getYearlyTarget();
        }));
    };
    UserTargetComponent.prototype.updatePriTarget = function (month, i, x) {
        var _this = this;
        this.serve.post_rqst({ 'created_by': this.serve.peraluser.id, 'user_id': this.user_id, 'date': month.date, 'id': month.target_info.id, 'pri_target': month.target_info.pri_target }, "User/updatePriTarget").subscribe(function (r) {
            _this.targets[0]['userYearTarget'].total_pri_target -= _this.targets[0]['targets'][i]['userQuarterTarget'].total_pri_balance;
            _this.targets[0]['targets'][i]['userQuarterTarget'].total_pri_balance -= _this.targets[0]['targets'][i]['months'][x].target_info.pri_balance;
            _this.targets[0]['targets'][i]['userQuarterTarget'].total_pri_target -= _this.targets[0]['targets'][i]['months'][x].target_info.old_pri_target;
            _this.targets[0]['targets'][i]['userQuarterTarget'].total_pri_balance += parseInt(r['target'].pri_balance);
            _this.targets[0]['targets'][i]['userQuarterTarget'].total_pri_target += parseInt(r['target'].pri_target);
            _this.targets[0]['userYearTarget'].total_pri_target += _this.targets[0]['targets'][i]['userQuarterTarget'].total_pri_balance;
            _this.targets[0]['targets'][i]['months'][x].target_info = r['target'];
        });
    };
    UserTargetComponent.prototype.updateSecTarget = function (month, i, x) {
        var _this = this;
        this.serve.post_rqst({ 'created_by': this.serve.peraluser.id, 'user_id': this.user_id, 'date': month.date, 'id': month.target_info.id, 'sec_target': month.target_info.sec_target }, "User/updateSecTarget").subscribe(function (r) {
            _this.targets[0]['userYearTarget'].total_sec_target -= _this.targets[0]['targets'][i]['userQuarterTarget'].total_sec_balance;
            _this.targets[0]['targets'][i]['userQuarterTarget'].total_sec_balance -= _this.targets[0]['targets'][i]['months'][x].target_info.sec_balance;
            _this.targets[0]['targets'][i]['userQuarterTarget'].total_sec_target -= _this.targets[0]['targets'][i]['months'][x].target_info.old_sec_target;
            _this.targets[0]['targets'][i]['userQuarterTarget'].total_sec_balance += parseInt(r['target'].sec_balance);
            _this.targets[0]['targets'][i]['userQuarterTarget'].total_sec_target += parseInt(r['target'].sec_target);
            _this.targets[0]['userYearTarget'].total_sec_target += _this.targets[0]['targets'][i]['userQuarterTarget'].total_sec_balance;
            _this.targets[0]['targets'][i]['months'][x].target_info = r['target'];
        });
    };
    UserTargetComponent.prototype.getYearlyTarget = function () {
        var _this = this;
        this.serve.post_rqst({ 'user_id': this.user_id }, "User/getYearlyTarget").subscribe(function (response) {
            if (response['yearly_target'].length != 0) {
                _this.yearly_target = response['yearly_target'];
            }
            _this.yearly_target.pri_achivements = _this.targets[0]['userYearTarget']['total_pri_achivement'];
            _this.yearly_target.sec_achivements = _this.targets[0]['userYearTarget']['total_sec_achivement'];
            _this.yearly_target.pri_balance = parseInt(_this.yearly_target.primary_target) - parseInt(_this.yearly_target.pri_achivements);
            _this.yearly_target.sec_balance = parseInt(_this.yearly_target.secondary_target) - parseInt(_this.yearly_target.sec_achivements);
        });
    };
    UserTargetComponent.prototype.updateYearlyTarget = function () {
        var _this = this;
        this.yearly_target.year = this.targets[0].left_year;
        this.yearly_target.user_id = this.user_id;
        this.serve.post_rqst({ 'data': this.yearly_target }, "User/updateYearlyTarget").subscribe(function (response) {
            _this.getYearlyTarget();
        });
    };
    UserTargetComponent.prototype.MobileNumber = function (event) {
        var pattern = /[0-9]/;
        var inputChar = String.fromCharCode(event.charCode);
        if (event.keyCode != 8 && !pattern.test(inputChar)) {
            event.preventDefault();
        }
    };
    UserTargetComponent.prototype.get_assign_sales_user = function () {
        var _this = this;
        this.loader = '1';
        this.serve.post_rqst({ 'user_id': this.user_id }, "User/get_assign_sales_user").subscribe(function (resp) {
            _this.assign_sales_user = resp['data'];
            _this.jan_team_ach = 0;
            _this.feb_team_ach = 0;
            _this.mar_team_ach = 0;
            _this.apr_team_ach = 0;
            _this.may_team_ach = 0;
            _this.june_team_ach = 0;
            _this.july_team_ach = 0;
            _this.aug_team_ach = 0;
            _this.sep_team_ach = 0;
            _this.oct_team_ach = 0;
            _this.nov_team_ach = 0;
            _this.dec_team_ach = 0;
            _this.total_jan_ach = 0;
            _this.bal_jan_ach = 0;
            _this.total_feb_ach = 0;
            _this.bal_feb_ach = 0;
            _this.total_mar_ach = 0;
            _this.bal_mar_ach = 0;
            _this.total_apr_ach = 0;
            _this.bal_apr_ach = 0;
            _this.total_may_ach = 0;
            _this.bal_may_ach = 0;
            _this.total_june_ach = 0;
            _this.bal_june_ach = 0;
            _this.total_july_ach = 0;
            _this.bal_july_ach = 0;
            _this.total_aug_ach = 0;
            _this.bal_aug_ach = 0;
            _this.total_sep_ach = 0;
            _this.bal_sep_ach = 0;
            _this.total_oct_ach = 0;
            _this.bal_oct_ach = 0;
            _this.total_nov_ach = 0;
            _this.bal_nov_ach = 0;
            _this.total_dec_ach = 0;
            _this.bal_dec_ach = 0;
            _this.year_achievement = 0;
            _this.year_balance = 0;
            for (var i = 0; i < _this.assign_sales_user.length; i++) {
                if (_this.assign_sales_user[i].target) {
                    if (_this.assign_sales_user[i].target[1]) {
                        if (_this.type.order_type == 'Primary') {
                            _this.jan_team_ach = parseInt(_this.jan_team_ach) + parseInt(_this.assign_sales_user[i].target[1].pri_achivement);
                        }
                        else {
                            _this.jan_team_ach = parseInt(_this.jan_team_ach) + parseInt(_this.assign_sales_user[i].target[1].sec_achivement);
                        }
                    }
                    if (_this.assign_sales_user[i].target[2]) {
                        if (_this.type.order_type == 'Primary') {
                            _this.feb_team_ach = parseInt(_this.feb_team_ach) + parseInt(_this.assign_sales_user[i].target[2].pri_achivement);
                        }
                        else {
                            _this.feb_team_ach = parseInt(_this.feb_team_ach) + parseInt(_this.assign_sales_user[i].target[2].sec_achivement);
                        }
                    }
                    if (_this.assign_sales_user[i].target[3]) {
                        if (_this.type.order_type == 'Primary') {
                            _this.mar_team_ach = parseInt(_this.mar_team_ach) + parseInt(_this.assign_sales_user[i].target[3].pri_achivement);
                        }
                        else {
                            _this.mar_team_ach = parseInt(_this.mar_team_ach) + parseInt(_this.assign_sales_user[i].target[3].sec_achivement);
                        }
                    }
                    if (_this.assign_sales_user[i].target[4]) {
                        if (_this.type.order_type == 'Primary') {
                            _this.apr_team_ach = parseInt(_this.apr_team_ach) + parseInt(_this.assign_sales_user[i].target[4].pri_achivement);
                        }
                        else {
                            _this.apr_team_ach = parseInt(_this.apr_team_ach) + parseInt(_this.assign_sales_user[i].target[4].sec_achivement);
                        }
                    }
                    if (_this.assign_sales_user[i].target[5]) {
                        if (_this.type.order_type == 'Primary') {
                            _this.may_team_ach = parseInt(_this.may_team_ach) + parseInt(_this.assign_sales_user[i].target[5].pri_achivement);
                        }
                        else {
                            _this.may_team_ach = parseInt(_this.may_team_ach) + parseInt(_this.assign_sales_user[i].target[5].sec_achivement);
                        }
                    }
                    if (_this.assign_sales_user[i].target[6]) {
                        if (_this.type.order_type == 'Primary') {
                            _this.june_team_ach = parseInt(_this.june_team_ach) + parseInt(_this.assign_sales_user[i].target[6].pri_achivement);
                        }
                        else {
                            _this.june_team_ach = parseInt(_this.june_team_ach) + parseInt(_this.assign_sales_user[i].target[6].sec_achivement);
                        }
                    }
                    if (_this.assign_sales_user[i].target[7]) {
                        if (_this.type.order_type == 'Primary') {
                            _this.july_team_ach = parseInt(_this.july_team_ach) + parseInt(_this.assign_sales_user[i].target[7].pri_achivement);
                        }
                        else {
                            _this.july_team_ach = parseInt(_this.july_team_ach) + parseInt(_this.assign_sales_user[i].target[7].sec_achivement);
                        }
                    }
                    if (_this.assign_sales_user[i].target[8]) {
                        if (_this.type.order_type == 'Primary') {
                            _this.aug_team_ach = parseInt(_this.aug_team_ach) + parseInt(_this.assign_sales_user[i].target[8].pri_achivement);
                        }
                        else {
                            _this.aug_team_ach = parseInt(_this.aug_team_ach) + parseInt(_this.assign_sales_user[i].target[8].sec_achivement);
                        }
                    }
                    if (_this.assign_sales_user[i].target[9]) {
                        if (_this.type.order_type == 'Primary') {
                            _this.sep_team_ach = parseInt(_this.sep_team_ach) + parseInt(_this.assign_sales_user[i].target[9].pri_achivement);
                        }
                        else {
                            _this.sep_team_ach = parseInt(_this.sep_team_ach) + parseInt(_this.assign_sales_user[i].target[9].sec_achivement);
                        }
                    }
                    if (_this.assign_sales_user[i].target[10]) {
                        if (_this.type.order_type == 'Primary') {
                            _this.oct_team_ach = parseInt(_this.oct_team_ach) + parseInt(_this.assign_sales_user[i].target[10].pri_achivement);
                        }
                        else {
                            _this.oct_team_ach = parseInt(_this.oct_team_ach) + parseInt(_this.assign_sales_user[i].target[10].sec_achivement);
                        }
                    }
                    if (_this.assign_sales_user[i].target[11]) {
                        if (_this.type.order_type == 'Primary') {
                            _this.nov_team_ach = parseInt(_this.nov_team_ach) + parseInt(_this.assign_sales_user[i].target[11].pri_achivement);
                        }
                        else {
                            _this.nov_team_ach = parseInt(_this.nov_team_ach) + parseInt(_this.assign_sales_user[i].target[11].sec_achivement);
                        }
                    }
                    if (_this.assign_sales_user[i].target[12]) {
                        if (_this.type.order_type == 'Primary') {
                            _this.dec_team_ach = parseInt(_this.dec_team_ach) + parseInt(_this.assign_sales_user[i].target[12].pri_achivement);
                        }
                        else {
                            _this.dec_team_ach = parseInt(_this.dec_team_ach) + parseInt(_this.assign_sales_user[i].target[12].sec_achivement);
                        }
                    }
                }
            }
            if (_this.form.january_ach) {
                _this.total_jan_ach = parseInt(_this.jan_team_ach) + parseInt(_this.form.january_ach);
            }
            else {
                _this.total_jan_ach = parseInt(_this.jan_team_ach);
            }
            _this.bal_jan_ach = parseInt(_this.form.january_target) - parseInt(_this.total_jan_ach);
            if (_this.form.february_ach) {
                _this.total_feb_ach = parseInt(_this.feb_team_ach) + parseInt(_this.form.february_ach);
            }
            else {
                _this.total_feb_ach = parseInt(_this.feb_team_ach);
            }
            _this.bal_feb_ach = parseInt(_this.form.february_target) - parseInt(_this.total_feb_ach);
            if (_this.form.march_ach) {
                _this.total_mar_ach = parseInt(_this.mar_team_ach) + parseInt(_this.form.march_ach);
            }
            else {
                _this.total_mar_ach = parseInt(_this.mar_team_ach);
            }
            _this.bal_mar_ach = parseInt(_this.form.march_target) - parseInt(_this.total_mar_ach);
            if (_this.form.april_ach) {
                _this.total_apr_ach = parseInt(_this.apr_team_ach) + parseInt(_this.form.april_ach);
            }
            else {
                _this.total_apr_ach = parseInt(_this.apr_team_ach);
            }
            _this.bal_apr_ach = parseInt(_this.form.april_target) - parseInt(_this.total_apr_ach);
            if (_this.form.may_ach) {
                _this.total_may_ach = parseInt(_this.may_team_ach) + parseInt(_this.form.may_ach);
            }
            else {
                _this.total_may_ach = parseInt(_this.may_team_ach);
            }
            _this.bal_may_ach = parseInt(_this.form.may_target) - parseInt(_this.total_may_ach);
            if (_this.form.june_ach) {
                _this.total_june_ach = parseInt(_this.june_team_ach) + parseInt(_this.form.june_ach);
            }
            else {
                _this.total_june_ach = parseInt(_this.june_team_ach);
            }
            _this.bal_june_ach = parseInt(_this.form.june_target) - parseInt(_this.total_june_ach);
            if (_this.form.july_ach) {
                _this.total_july_ach = parseInt(_this.july_team_ach) + parseInt(_this.form.july_ach);
            }
            else {
                _this.total_july_ach = parseInt(_this.july_team_ach);
            }
            _this.bal_july_ach = parseInt(_this.form.july_target) - parseInt(_this.total_july_ach);
            if (_this.form.august_ach) {
                _this.total_aug_ach = parseInt(_this.aug_team_ach) + parseInt(_this.form.august_ach);
            }
            else {
                _this.total_aug_ach = parseInt(_this.aug_team_ach);
            }
            _this.bal_aug_ach = parseInt(_this.form.august_target) - parseInt(_this.total_aug_ach);
            if (_this.form.september_ach) {
                _this.total_sep_ach = parseInt(_this.sep_team_ach) + parseInt(_this.form.september_ach);
            }
            else {
                _this.total_sep_ach = parseInt(_this.sep_team_ach);
            }
            _this.bal_sep_ach = parseInt(_this.form.september_target) - parseInt(_this.total_sep_ach);
            if (_this.form.october_ach) {
                _this.total_oct_ach = parseInt(_this.oct_team_ach) + parseInt(_this.form.october_ach);
            }
            else {
                _this.total_oct_ach = parseInt(_this.oct_team_ach);
            }
            _this.bal_oct_ach = parseInt(_this.form.october_target) - parseInt(_this.total_oct_ach);
            if (_this.form.november_ach) {
                _this.total_nov_ach = parseInt(_this.nov_team_ach) + parseInt(_this.form.november_ach);
            }
            else {
                _this.total_nov_ach = parseInt(_this.nov_team_ach);
            }
            _this.bal_nov_ach = parseInt(_this.form.november_target) - parseInt(_this.total_nov_ach);
            if (_this.form.december_ach) {
                _this.total_dec_ach = parseInt(_this.dec_team_ach) + parseInt(_this.form.december_ach);
            }
            else {
                _this.total_dec_ach = parseInt(_this.dec_team_ach);
            }
            _this.bal_dec_ach = parseInt(_this.form.december_target) - parseInt(_this.total_dec_ach);
            if (_this.total_jan_ach) {
                _this.year_achievement += parseInt(_this.total_jan_ach);
            }
            if (_this.total_feb_ach) {
                _this.year_achievement += parseInt(_this.total_feb_ach);
            }
            if (_this.total_mar_ach) {
                _this.year_achievement += parseInt(_this.total_mar_ach);
            }
            if (_this.total_apr_ach) {
                _this.year_achievement += parseInt(_this.total_apr_ach);
            }
            if (_this.total_may_ach) {
                _this.year_achievement += parseInt(_this.total_may_ach);
            }
            if (_this.total_june_ach) {
                _this.year_achievement += parseInt(_this.total_june_ach);
            }
            if (_this.total_july_ach) {
                _this.year_achievement += parseInt(_this.total_july_ach);
            }
            if (_this.total_aug_ach) {
                _this.year_achievement += parseInt(_this.total_aug_ach);
            }
            if (_this.total_sep_ach) {
                _this.year_achievement += parseInt(_this.total_sep_ach);
            }
            if (_this.total_oct_ach) {
                _this.year_achievement += parseInt(_this.total_oct_ach);
            }
            if (_this.total_nov_ach) {
                _this.year_achievement += parseInt(_this.total_nov_ach);
            }
            if (_this.total_dec_ach) {
                _this.year_achievement += parseInt(_this.total_dec_ach);
            }
            _this.year_balance = parseInt(_this.data.target) - parseInt(_this.year_achievement);
            _this.loader = '';
        });
    };
    UserTargetComponent.prototype.add_year_target = function () {
        var _this = this;
        this.loader = '1';
        this.data.user_id = this.user_id;
        this.data.year = this.financialYear;
        this.serve.post_rqst({ 'data': this.data }, "User/updateYearlyTarget").subscribe(function (resp) {
            _this.get_year_target();
            _this.loader = '';
        });
    };
    UserTargetComponent.prototype.get_year_target = function () {
        var _this = this;
        this.loader = '1';
        this.serve.post_rqst({ 'user_id': this.user_id, 'year': this.financialYear }, "User/get_year_target").subscribe(function (resp) {
            _this.year_target_data = resp['data'];
            if (_this.type.order_type == 'Primary') {
                _this.data.target = _this.year_target_data.primary_target;
            }
            if (_this.type.order_type == 'Secondary') {
                _this.data.target = _this.year_target_data.secondary_target;
            }
            _this.get_assign_sales_user();
            _this.loader = '';
        });
    };
    UserTargetComponent.prototype.add_monthly_target = function (month) {
        var _this = this;
        this.loader = '1';
        if (month == 'March') {
            this.form.target = this.form.march_target;
            this.form.month = '3';
        }
        if (month == 'February') {
            this.form.target = this.form.february_target;
            this.form.month = '2';
        }
        if (month == 'January') {
            this.form.target = this.form.january_target;
            this.form.month = '1';
        }
        if (month == 'December') {
            this.form.target = this.form.december_target;
            this.form.month = '12';
        }
        if (month == 'November') {
            this.form.target = this.form.november_target;
            this.form.month = '11';
        }
        if (month == 'October') {
            this.form.target = this.form.october_target;
            this.form.month = '10';
        }
        if (month == 'September') {
            this.form.target = this.form.september_target;
            this.form.month = '9';
        }
        if (month == 'August') {
            this.form.target = this.form.august_target;
            this.form.month = '8';
        }
        if (month == 'July') {
            this.form.target = this.form.july_target;
            this.form.month = '7';
        }
        if (month == 'June') {
            this.form.target = this.form.june_target;
            this.form.month = '6';
        }
        if (month == 'May') {
            this.form.target = this.form.may_target;
            this.form.month = '5';
        }
        if (month == 'April') {
            this.form.target = this.form.april_target;
            this.form.month = '4';
        }
        this.form.user_id = this.user_id;
        this.form.year = this.current_year;
        this.form.ach_type = this.type.order_type;
        this.serve.post_rqst(this.form, "User/add_monthly_target").subscribe(function (resp) {
            _this.get_monthly_target_data();
            _this.get_assign_sales_user();
            _this.loader = '';
        });
    };
    UserTargetComponent.prototype.update_ach = function (month) {
        var _this = this;
        this.loader = '1';
        if (month == 'March') {
            this.form.achievement = this.form.march_ach;
            this.form.month = '3';
        }
        if (month == 'February') {
            this.form.achievement = this.form.february_ach;
            this.form.month = '2';
        }
        if (month == 'January') {
            this.form.achievement = this.form.january_ach;
            this.form.month = '1';
        }
        if (month == 'December') {
            this.form.achievement = this.form.december_ach;
            this.form.month = '12';
        }
        if (month == 'November') {
            this.form.achievement = this.form.november_ach;
            this.form.month = '11';
        }
        if (month == 'October') {
            this.form.achievement = this.form.october_ach;
            this.form.month = '10';
        }
        if (month == 'September') {
            this.form.achievement = this.form.september_ach;
            this.form.month = '9';
        }
        if (month == 'August') {
            this.form.achievement = this.form.august_ach;
            this.form.month = '8';
        }
        if (month == 'July') {
            this.form.achievement = this.form.july_ach;
            this.form.month = '7';
        }
        if (month == 'June') {
            this.form.achievement = this.form.june_ach;
            this.form.month = '6';
        }
        if (month == 'May') {
            this.form.achievement = this.form.may_ach;
            this.form.month = '5';
        }
        if (month == 'April') {
            this.form.achievement = this.form.april_ach;
            this.form.month = '4';
        }
        this.form.user_id = this.user_id;
        this.form.year = this.current_year;
        this.form.ach_type = this.type.order_type;
        this.serve.post_rqst(this.form, "User/update_monthly_ach").subscribe(function (resp) {
            _this.get_monthly_target_data();
            _this.get_assign_sales_user();
            _this.loader = '';
        });
    };
    UserTargetComponent.prototype.get_monthly_target_data = function () {
        var _this = this;
        this.loader = '1';
        this.serve.post_rqst({ 'user_id': this.user_id, 'year': this.current_year }, "User/get_monthly_target_data").subscribe(function (resp) {
            _this.target_data = resp['data'];
            for (var i = 0; i < _this.target_data.length; i++) {
                _this.target_data[i].pri_target = parseInt(_this.target_data[i].pri_target);
                _this.target_data[i].pri_achivement = parseInt(_this.target_data[i].pri_achivement);
                if (_this.target_data[i].month == '1') {
                    if (_this.type.order_type == 'Primary') {
                        _this.form.january_target = _this.target_data[i].pri_target;
                        _this.form.january_ach = _this.target_data[i].pri_achivement;
                    }
                    else {
                        _this.form.january_target = _this.target_data[i].sec_target;
                        _this.form.january_ach = _this.target_data[i].sec_achivement;
                    }
                }
                if (_this.target_data[i].month == '2') {
                    if (_this.type.order_type == 'Primary') {
                        _this.form.february_target = _this.target_data[i].pri_target;
                        _this.form.february_ach = _this.target_data[i].pri_achivement;
                    }
                    else {
                        _this.form.february_target = _this.target_data[i].sec_target;
                        _this.form.february_ach = _this.target_data[i].sec_achivement;
                    }
                }
                if (_this.target_data[i].month == '3') {
                    if (_this.type.order_type == 'Primary') {
                        _this.form.march_target = _this.target_data[i].pri_target;
                        _this.form.march_ach = _this.target_data[i].pri_achivement;
                    }
                    else {
                        _this.form.march_target = _this.target_data[i].sec_target;
                        _this.form.march_ach = _this.target_data[i].sec_achivement;
                    }
                }
                if (_this.target_data[i].month == '4') {
                    if (_this.type.order_type == 'Primary') {
                        _this.form.april_target = _this.target_data[i].pri_target;
                        _this.form.april_ach = _this.target_data[i].pri_achivement;
                    }
                    else {
                        _this.form.april_target = _this.target_data[i].sec_target;
                        _this.form.april_ach = _this.target_data[i].sec_achivement;
                    }
                }
                if (_this.target_data[i].month == '5') {
                    if (_this.type.order_type == 'Primary') {
                        _this.form.may_target = _this.target_data[i].pri_target;
                        _this.form.may_ach = _this.target_data[i].pri_achivement;
                    }
                    else {
                        _this.form.may_target = _this.target_data[i].sec_target;
                        _this.form.may_ach = _this.target_data[i].sec_achivement;
                    }
                }
                if (_this.target_data[i].month == '6') {
                    if (_this.type.order_type == 'Primary') {
                        _this.form.june_target = _this.target_data[i].pri_target;
                        _this.form.june_ach = _this.target_data[i].pri_achivement;
                    }
                    else {
                        _this.form.june_target = _this.target_data[i].sec_target;
                        _this.form.june_ach = _this.target_data[i].sec_achivement;
                    }
                }
                if (_this.target_data[i].month == '7') {
                    if (_this.type.order_type == 'Primary') {
                        _this.form.july_target = _this.target_data[i].pri_target;
                        _this.form.july_ach = _this.target_data[i].pri_achivement;
                    }
                    else {
                        _this.form.july_target = _this.target_data[i].sec_target;
                        _this.form.july_ach = _this.target_data[i].sec_achivement;
                    }
                }
                if (_this.target_data[i].month == '8') {
                    if (_this.type.order_type == 'Primary') {
                        _this.form.august_target = _this.target_data[i].pri_target;
                        _this.form.august_ach = _this.target_data[i].pri_achivement;
                    }
                    else {
                        _this.form.august_target = _this.target_data[i].sec_target;
                        _this.form.august_ach = _this.target_data[i].sec_achivement;
                    }
                }
                if (_this.target_data[i].month == '9') {
                    if (_this.type.order_type == 'Primary') {
                        _this.form.september_target = _this.target_data[i].pri_target;
                        _this.form.september_ach = _this.target_data[i].pri_achivement;
                    }
                    else {
                        _this.form.september_target = _this.target_data[i].sec_target;
                        _this.form.september_ach = _this.target_data[i].sec_achivement;
                    }
                }
                if (_this.target_data[i].month == '10') {
                    if (_this.type.order_type == 'Primary') {
                        _this.form.october_target = _this.target_data[i].pri_target;
                        _this.form.october_ach = _this.target_data[i].pri_achivement;
                    }
                    else {
                        _this.form.october_target = _this.target_data[i].sec_target;
                        _this.form.october_ach = _this.target_data[i].sec_achivement;
                    }
                }
                if (_this.target_data[i].month == '11') {
                    if (_this.type.order_type == 'Primary') {
                        _this.form.november_target = _this.target_data[i].pri_target;
                        _this.form.november_ach = _this.target_data[i].pri_achivement;
                    }
                    else {
                        _this.form.november_target = _this.target_data[i].sec_target;
                        _this.form.november_ach = _this.target_data[i].sec_achivement;
                    }
                }
                if (_this.target_data[i].month == '12') {
                    if (_this.type.order_type == 'Primary') {
                        _this.form.december_target = _this.target_data[i].pri_target;
                        _this.form.december_ach = _this.target_data[i].pri_achivement;
                    }
                    else {
                        _this.form.december_target = _this.target_data[i].sec_target;
                        _this.form.december_ach = _this.target_data[i].sec_achivement;
                    }
                }
            }
            _this.get_assign_sales_user();
            _this.loader = '';
        });
    };
    UserTargetComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-user-target',
            template: __webpack_require__(/*! ./user-target.component.html */ "./src/app/user/user-target/user-target.component.html"),
            styles: [__webpack_require__(/*! ./user-target.component.scss */ "./src/app/user/user-target/user-target.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], src_services_DatabaseService__WEBPACK_IMPORTED_MODULE_3__["DatabaseService"], src_app_dialog_component__WEBPACK_IMPORTED_MODULE_4__["DialogComponent"]])
    ], UserTargetComponent);
    return UserTargetComponent;
}());



/***/ })

}]);