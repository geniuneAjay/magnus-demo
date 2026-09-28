(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["lead-lead-module-lead-module"],{

/***/ "./src/app/editlead/editlead.component.html":
/*!**************************************************!*\
  !*** ./src/app/editlead/editlead.component.html ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <div class=\"edit-modal\" *ngIf=\"data.type =='address' && data.type !='discount' && data.type !='edit' && data.type !='add' \"> -->\r\n  <div class=\"edit-modal\" *ngIf=\"data.type =='basic_information2' \">\r\n    <form #update_basic=\"ngForm\" name=\"update_basic\"\r\n    (ngSubmit)=\"(update_basic.valid && update_basic.submitted)?update_address():''\" validate>\r\n    <div mat-dialog-content>\r\n      <p class=\"heading\">Update Address</p>\r\n      <div class=\"cs-form\">\r\n        <div class=\"row\">\r\n          <div class=\"col s12\">\r\n            <mat-form-field class=\"cs-input\" appearance=\"outline\">\r\n              <mat-label>Street</mat-label>\r\n              <textarea matInput placeholder=\"Address\" name=\"address\" #address=\"ngModel\" value={{lead_data2.address}}\r\n              [(ngModel)]=\"lead_data2.address\" [ngClass]=\"{'has-error' : address.invalid } \" class=\"h70\"></textarea>\r\n            </mat-form-field>\r\n          </div>\r\n        </div>\r\n        <div class=\"three-col-grid\">\r\n          <mat-form-field class=\"cs-input\" appearance=\"outline\">\r\n            <mat-label>State</mat-label>\r\n            <mat-select name=\"state\" placeholder=\"\" #state=\"ngModel\" [(ngModel)]=\"lead_data2.state\"\r\n            [ngClass]=\"{'has-error' : state.invalid } \" required>\r\n            <mat-option disabled=\"\">Select State</mat-option>\r\n            <mat-option *ngFor=\"let state of state_list\" (click)=\"getDistrict(lead_data2.state, 2)\"\r\n            (keyup.enter)=\"getDistrict(lead_data2.state, 2)\" value=\"{{state}}\">{{state}}</mat-option>\r\n          </mat-select>\r\n          <div class=\"alert alert-danger\" *ngIf=\"!lead_data2.state && update_basic.submitted\">\r\n            State is required....\r\n          </div>\r\n        </mat-form-field>\r\n\r\n        <mat-form-field class=\"cs-input\" appearance=\"outline\">\r\n          <mat-label>District</mat-label>\r\n          <mat-select name=\"district\" placeholder=\"District\" #district=\"ngModel\" [(ngModel)]=\"lead_data2.district\"\r\n         >\r\n          <mat-option disabled=\"\">Select District</mat-option>\r\n          <mat-option *ngFor=\"let district of district_list\"\r\n          (click)=\"getCityAreaList(lead_data2.district,lead_data2.state, 2)\"\r\n          (keyup.enter)=\"getCityAreaList(lead_data2.district,lead_data2.state, 2)\" value=\"{{district}}\">\r\n          {{district}}</mat-option>\r\n        </mat-select>\r\n\r\n      </mat-form-field>\r\n\r\n      <div class=\"\">\r\n        <mat-form-field class=\"cs-input\" appearance=\"outline\">\r\n          <mat-label>City</mat-label>\r\n          <mat-select name=\"city\" placeholder=\"City\" #city=\"ngModel\" [(ngModel)]=\"lead_data2.city\"\r\n         >\r\n          <mat-option disabled=\"\">Select City</mat-option>\r\n          <mat-option *ngFor=\"let city of city_list\"\r\n          (keyup.enter)=\"getarea(lead_data2.state,lead_data2.district,lead_data2.city, 2)\"\r\n          (click)=\"getarea(lead_data2.state,lead_data2.district,lead_data2.city, 2)\" value=\"{{city}}\">\r\n          {{city}}</mat-option>\r\n\r\n        </mat-select>\r\n\r\n      </mat-form-field>\r\n    </div>\r\n\r\n  </div>\r\n  <br>\r\n  <div class=\"three-col-grid\">\r\n    <div class=\"\">\r\n      <mat-form-field class=\"cs-input\" appearance=\"outline\" >\r\n        <mat-label>Pincode</mat-label>\r\n        <input matInput name=\"pincode\" placeholder=\"Type Here ...\" #pincode=\"ngModel\" maxlength=\"6\"\r\n        [(ngModel)]=\"lead_data2.pincode\" >\r\n        <div class=\"alert alert-danger\" *ngIf=\"!pincode.valid && update_basic.submitted\">\r\n          Pincode is required....\r\n        </div>\r\n      </mat-form-field>\r\n  </div>\r\n\r\n  <div class=\"col s6\">\r\n    <mat-form-field class=\"cs-input\" appearance=\"outline\">\r\n      <mat-label>Area</mat-label>\r\n      <mat-select name=\"cityArea\" placeholder=\"\" #cityArea=\"ngModel\" [(ngModel)]=\"lead_data2.cityArea\"\r\n      [ngClass]=\"{'has-error' : cityArea.invalid } \">\r\n      <mat-option disabled=\"\">Select Area</mat-option>\r\n      <mat-option *ngFor=\"let cityArea of cityAreaList\" value=\"{{cityArea}}\">{{cityArea}}</mat-option>\r\n    </mat-select>\r\n    <div class=\"alert alert-danger\" *ngIf=\"!cityArea.valid && update_basic.submitted\">\r\n      Area is required....\r\n    </div>\r\n  </mat-form-field>\r\n</div>\r\n\r\n</div>\r\n\r\n<br>\r\n\r\n</div>\r\n</div>\r\n<div mat-dialog-actions>\r\n  <button mat-button color=\"warn\" [mat-dialog-close]=\"false\">Cancel</button>\r\n  <button mat-button color=\"accent\" type=\"submit\">Save</button>\r\n</div>\r\n</form>\r\n\r\n</div>\r\n\r\n\r\n\r\n\r\n\r\n\r\n<div class=\"edit-modal\" *ngIf=\"data.type =='basic_information' \">\r\n  <form #update_basic=\"ngForm\" name=\"update_basic\"\r\n  (ngSubmit)=\"(update_basic.valid && update_basic.submitted)?update_detail(lead_data):''\" validate>\r\n  <div mat-dialog-content>\r\n    <p class=\"heading\">Update Basic Detail</p>\r\n    <div class=\"cs-form\">\r\n\r\n      <div class=\"row\">\r\n        <div class=\"col s3\">\r\n          <mat-form-field class=\"cs-input\" appearance=\"outline\">\r\n            <mat-label>Company Name</mat-label>\r\n            <input matInput placeholder=\"Type Here ...\" type=\"text\" name=\"company_name\" #company_name=\"ngModel\"\r\n            [(ngModel)]=\"lead_data.company_name\" required>\r\n          </mat-form-field>\r\n          <div class=\"alert alert-danger\" *ngIf=\"!company_name.valid && company_name.touched\">\r\n            Company Name is required...\r\n          </div>\r\n        </div>\r\n        <div class=\"col s3\">\r\n          <mat-form-field class=\"cs-input\" appearance=\"outline\">\r\n            <mat-label>Name</mat-label>\r\n            <input matInput placeholder=\"Type Here ...\" type=\"text\" name=\"name\" #name=\"ngModel\"\r\n            [(ngModel)]=\"lead_data.name\" >\r\n          </mat-form-field>\r\n          <div class=\"alert alert-danger\" *ngIf=\"!name.valid && name.touched\">\r\n            Name is required...\r\n          </div>\r\n        </div>\r\n        <div class=\"col s3\">\r\n          <mat-form-field class=\"cs-input\" appearance=\"outline\">\r\n            <mat-label>Mobile NO.</mat-label>\r\n            <input matInput placeholder=\"Type Here ...\" name=\"mobile\" #mobile=\"ngModel\" minlength=\"10\" maxlength=\"10\" [(ngModel)]=\"lead_data.mobile\"\r\n            required (keypress)=\"MobileNumber($event)\">\r\n          </mat-form-field>\r\n          <div class=\"alert alert-danger\" *ngIf=\"!mobile.valid && mobile.touched\">\r\n            Mobile number is required...\r\n          </div>\r\n        </div>\r\n        <div class=\"col s3\">\r\n          <mat-form-field class=\"cs-input\" appearance=\"outline\">\r\n            <mat-label>Alernate Mobile NO.</mat-label>\r\n            <input matInput placeholder=\"Type Here ...\" name=\"whatsapp_no\" #whatsapp_no=\"ngModel\" minlength=\"10\" maxlength=\"10\" [(ngModel)]=\"lead_data.whatsapp_no\"\r\n            (keypress)=\"MobileNumber($event)\">\r\n          </mat-form-field>\r\n          <div class=\"alert alert-danger\" *ngIf=\"!whatsapp_no.valid && whatsapp_no.touched\">\r\n            Whatsapp number is required...\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"row\">\r\n        <div class=\"col s3\">\r\n          <mat-form-field class=\"cs-input\" appearance=\"outline\">\r\n            <mat-label>Email ID</mat-label>\r\n            <input type=\"email\" matInput placeholder=\"Type Here ...\" name=\"email\" #email=\"ngModel\"\r\n            [(ngModel)]=\"lead_data.email\" pattern=\"[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,3}$\">\r\n          </mat-form-field>\r\n          <div class=\"alert alert-danger\" *ngIf=\"!email.valid && email.touched\">\r\n            Email is invaild...\r\n          </div>\r\n        </div>\r\n        <!-- <div class=\"col s3\">\r\n          <mat-form-field class=\"cs-input\" appearance=\"outline\">\r\n            <mat-label>GST No.</mat-label>\r\n            <input matInput placeholder=\"Type Here ...\" name=\"gst\" #gst=\"ngModel\" onkeypress=\"return ((event.charCode >= 48 && event.charCode <= 57) || (event.charCode >= 97 && event.charCode <= 122) || (event.charCode >= 65 && event.charCode <= 90))\" [(ngModel)]=\"lead_data.gst\">\r\n          </mat-form-field>\r\n        </div> -->\r\n        <!-- <div class=\"col s3\">\r\n          <mat-form-field class=\"cs-input\" appearance=\"outline\">\r\n            <mat-label>Stage</mat-label>\r\n            <mat-select placeholder=\"Type Here ...\" name=\"stage\" #stage=\"ngModel\" [(ngModel)]=\"lead_data.stage\">\r\n              <mat-option disabled=\"\">Select Category</mat-option>\r\n              <mat-option value=\"Hot\">Hot</mat-option>\r\n              <mat-option value=\"Cold\">Cold</mat-option>\r\n              <mat-option value=\"Warm\">Warm</mat-option>\r\n              <mat-option value=\"Close\">Close</mat-option>\r\n              <mat-option value=\"Lead\">Lead</mat-option>\r\n\r\n            </mat-select>\r\n          </mat-form-field>\r\n          <div class=\"alert alert-danger\" *ngIf=\"!stage.valid && stage.touched\">\r\n            Stage is required...\r\n          </div>\r\n        </div> -->\r\n        <!-- <div class=\"col s3\"> -->\r\n          <!-- <mat-form-field class=\"cs-input\" appearance=\"outline\">\r\n            <mat-label>Lead Type</mat-label>\r\n            <mat-select placeholder=\"Type Here ...\" name=\"type\" #stage=\"ngModel\" [(ngModel)]=\"lead_data.type\">\r\n              <mat-option disabled=\"\">Select Category</mat-option>\r\n              <mat-option value=\"1\">Distributors/Dealers</mat-option>\r\n              <mat-option value=\"3\">Retailers</mat-option>\r\n              <mat-option value=\"9\">Project</mat-option>\r\n\r\n              <mat-option value=\"5\">End User</mat-option>\r\n              <mat-option value=\"10\">G+4</mat-option>\r\n              <mat-option value=\"11\">Architect</mat-option>\r\n\r\n            </mat-select>\r\n          </mat-form-field> -->\r\n          <!-- <div class=\"alert alert-danger\" *ngIf=\"!stage.valid && stage.touched\">\r\n            Category is required...\r\n          </div>\r\n        </div> -->\r\n\r\n\r\n        <div class=\"col s3\">\r\n          <mat-form-field class=\"cs-input\" appearance=\"outline\">\r\n            <mat-label>Source Type</mat-label>\r\n            <mat-select name=\"source\" placeholder=\"Type Here ...\" #source=\"ngModel\" [(ngModel)]=\"lead_data.source\"\r\n            [ngClass]=\"{'has-error' : source.invalid } \" >\r\n            <mat-option *ngFor=\"let row of source_list\" value=\"{{row.source}}\">{{row.source}}</mat-option>\r\n            <!-- <mat-option value=\"Facebook\">Facebook</mat-option>\r\n            <mat-option value=\"Website\">Website</mat-option>\r\n            <mat-option value=\"Call\">Call</mat-option>\r\n            <mat-option value=\"Walk In\">Walk In</mat-option>\r\n            <mat-option value=\"SMS\">SMS</mat-option>\r\n            <mat-option value=\"Toll Free\">Toll Free</mat-option>\r\n            <mat-option value=\"Others\">Others</mat-option>\r\n            <mat-option value=\"Instagram\">Instagram</mat-option>\r\n\r\n            <mat-option value=\"Linked-in\">Linked-in</mat-option>\r\n\r\n            <mat-option value=\"Reference\">Reference</mat-option>\r\n\r\n            <mat-option value=\"Whatsapp\">Whatsapp</mat-option>\r\n\r\n            <mat-option value=\"Facebook\">Facebook</mat-option>\r\n            <mat-option value=\"Mail\">Mail</mat-option>\r\n            <mat-option value=\"IndiaMart\">IndiaMart</mat-option>\r\n            <mat-option value=\"JustDial\">JustDial</mat-option> -->\r\n\r\n\r\n\r\n          </mat-select>\r\n        </mat-form-field>\r\n\r\n      </div>\r\n\r\n      <div class=\"col s3\">\r\n        <mat-form-field class=\"cs-input\" appearance=\"outline\">\r\n          <mat-label>Status</mat-label>\r\n          <mat-select placeholder=\"Type Here ...\" name=\"status\" #status=\"ngModel\" [(ngModel)]=\"lead_data.status\"\r\n          required>\r\n          <mat-option disabled=\"\">Select status</mat-option>\r\n          <mat-option *ngIf=\"!(lead_data.status=='qualified')\" value=\"Lead Bank\">Lead Bank</mat-option>\r\n          <mat-option *ngIf=\"!(lead_data.status=='qualified')\" value=\"qualified\">Qualified</mat-option>\r\n          <mat-option *ngIf=\"!(lead_data.status=='qualified')\" value=\"Disqualified\">Disqualified</mat-option>\r\n          <mat-option *ngIf=\"lead_type_id==3 || lead_type_id==9 || lead_type_id==5 || lead_type_id==6\" value=\"win\">Win</mat-option>\r\n          <mat-option value=\"lost\">Lost</mat-option>\r\n\r\n        </mat-select>\r\n      </mat-form-field>\r\n      <div class=\"alert alert-danger\" *ngIf=\"!status.valid && status.touched\">\r\n        Status is required...\r\n      </div>\r\n\r\n      <br>\r\n\r\n    </div>\r\n\r\n    </div>\r\n\r\n    <!-- <div class=\"row\">\r\n      <div class=\"col s6\">\r\n        <mat-form-field class=\"cs-input\" appearance=\"outline\" >\r\n          <mat-label>D.O.B</mat-label>\r\n          <input  matInput placeholder=\"Type Here ...\" name=\"date_of_birth\" #date_of_birth=\"ngModel\" [(ngModel)]=\"lead_data.date_of_birth\"  [matDatepicker]=\"picker\"  [max]=\"today_date\" disabled >\r\n          <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\r\n          <mat-datepicker #picker  disabled=\"false\"></mat-datepicker>\r\n        </mat-form-field>\r\n      </div> -->\r\n      <!-- <div class=\"col s6\">\r\n        <mat-form-field class=\"cs-input\" appearance=\"outline\" >\r\n          <mat-label>D.O.A</mat-label>\r\n          <input matInput placeholder=\"Type Here ...\" name=\"date_of_anniversary\" #date_of_anniversary=\"ngModel\" [(ngModel)]=\"lead_data.date_of_anniversary\"   [matDatepicker]=\"pickers\" [min]=\"lead_data.date_of_birth\" [max]=\"today_date\"  disabled>\r\n          <mat-datepicker-toggle matSuffix [for]=\"pickers\"></mat-datepicker-toggle>\r\n          <mat-datepicker #pickers  disabled=\"false\"></mat-datepicker>\r\n        </mat-form-field>\r\n      </div> -->\r\n    <!-- </div> -->\r\n\r\n\r\n    <div class=\"row\">\r\n\r\n      <div class=\"col s4\">\r\n\r\n\r\n\r\n      <div class=\"row\">\r\n        <div class=\"col s12\">\r\n          <mat-form-field class=\"cs-input\" appearance=\"outline\">\r\n            <mat-label>Change Lead</mat-label>\r\n            <mat-select placeholder=\"Type Here ...\" name=\"change_lead\" #status=\"ngModel\" [(ngModel)]=\"lead_data.change_lead\"(ngModelChange)=\"update_lead(lead_data.change_lead)\">\r\n              <mat-option disabled=\"\">Select Lead</mat-option>\r\n              <mat-option value=\"1\">Distributor</mat-option>\r\n              <mat-option value=\"2\">Dealer</mat-option>\r\n              <!-- <mat-option value=\"3\">Retailer</mat-option> -->\r\n              <mat-option value=\"5\">Architect</mat-option>\r\n              <!-- <!-- <mat-option value=\"5\">End User</mat-option> -->\r\n              <mat-option value=\"6\">Constructor</mat-option>\r\n              <mat-option value=\"7\">Contractor</mat-option>\r\n              <mat-option value=\"8\">Interior Designer</mat-option>\r\n            \r\n            </mat-select>\r\n          </mat-form-field>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"col s6\">\r\n      <mat-form-field class=\"cs-input\" appearance=\"outline\">\r\n        <mat-label>Description</mat-label>\r\n        <textarea matInput placeholder=\"Type Here ...\" name=\"description\" #description=\"ngModel\" class=\"h65\"\r\n        [(ngModel)]=\"lead_data.description\"></textarea>\r\n      </mat-form-field>\r\n    </div>\r\n\r\n    <div class=\"col s6\" *ngIf=\"lead_data.status=='lost' || lead_data.status=='Disqualified'\">\r\n      <mat-form-field class=\"cs-input\" appearance=\"outline\">\r\n        <mat-label>Reason</mat-label>\r\n        <textarea matInput placeholder=\"Type Here ...\" name=\"reason\" #reason=\"ngModel\" class=\"h65\"\r\n        [(ngModel)]=\"lead_data.reason\"></textarea>\r\n      </mat-form-field>\r\n    </div>\r\n\r\n  </div>\r\n</div>\r\n</div>\r\n<div mat-dialog-actions>\r\n  <button mat-button color=\"warn\" [mat-dialog-close]=\"false\">Cancel</button>\r\n  <button mat-button color=\"accent\" type=\"submit\">Save</button>\r\n  <!-- [disabled]='!value.valid' -->\r\n</div>\r\n</form>\r\n</div>\r\n\r\n\r\n\r\n\r\n<!--  -->\r\n<!-- <div class=\"edit-modal\" *ngIf=\"data.type =='discount' && data.type != 'address' && data.type !='edit'  && data.type !='add'\">\r\n  <div mat-dialog-content>\r\n    <p class=\"heading\">Update Discount</p>\r\n    <mat-form-field class=\"example-full-width wp100 cs-field\">\r\n      <input matInput placeholder=\"\" name=\"user\" #user=\"ngModel\" [(ngModel)]=\"data.value\"  [ngClass]=\"{'has-error' : user.invalid } \" required>\r\n      <div class=\"alert alert-danger\" *ngIf=\"!user.valid && user.touched\">\r\n        field is required....\r\n      </div>\r\n    </mat-form-field>\r\n    <mat-form-field class=\"example-full-width wp100 cs-field\">\r\n      <input matInput placeholder=\"\" name=\"user\" #user=\"ngModel\" [(ngModel)]=\"data.value\"  [ngClass]=\"{'has-error' : user.invalid } \" required>\r\n      <div class=\"alert alert-danger\" *ngIf=\"!user.valid && user.touched\">\r\n        field is required....\r\n      </div>\r\n    </mat-form-field>\r\n  </div>\r\n  <div mat-dialog-actions>\r\n    <button mat-button [mat-dialog-close]=\"false\">Cancel</button>\r\n    <div *ngIf=\"user.valid\">\r\n      <button mat-button (click)=\"update_address()\">Save</button>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n\r\n<div class=\"edit-modal\" *ngIf=\"data.type !='address' && data.type !='mobile' && data.type !='dr_name' && data.type !='whatsapp_no' && data.type !='email' && data.type !='discount' && data.type !='edit' && data.type !='add' && data.type !='gst' && data.type !='companyname'\">\r\n  <div mat-dialog-content>\r\n    <p class=\"heading\">Update Landline No</p>\r\n    <div class=\"cs-form\">\r\n      <div class=\"row\">\r\n        <div class=\"col s12\">\r\n          <mat-form-field class=\"cs-input\" appearance=\"outline\">\r\n            <mat-label>Landline No.</mat-label>\r\n            <input matInput placeholder=\"Type Here ...\" type=\"tel\" minlength=\"6\" maxlength=\"10\"  name=\"value\" #value=\"ngModel\" [(ngModel)]=\"data.value\" required (keypress)=\"MobileNumber($event)\">\r\n          </mat-form-field>\r\n          <div class=\"alert alert-danger\" *ngIf=\"!value.valid && value.touched\">\r\n            Landline No is invalid...\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n  <div mat-dialog-actions>\r\n    <button mat-button color=\"warn\" [mat-dialog-close]=\"false\">Cancel</button>\r\n    <button mat-button color=\"accent\" (click)=\"update_address(data)\" [disabled]='!value.valid'>Save</button>\r\n  </div>\r\n</div> -->\r\n\r\n\r\n<!-- <div class=\"edit-modal\" *ngIf=\"data.type !='address' && data.type !='landline_no' && data.type =='email' && data.type !='whatsapp_no' && data.type !='discount' && data.type !='edit' && data.type !='add' && data.type !='gst'\">\r\n  <div mat-dialog-content>\r\n    <p class=\"heading\">Update Email</p>\r\n    <div class=\"cs-form\">\r\n      <div class=\"row\">\r\n        <div class=\"col s12\">\r\n          <mat-form-field class=\"cs-input\" appearance=\"outline\">\r\n            <mat-label>Email ID</mat-label>\r\n            <input matInput placeholder=\"Type Here ...\" type=\"email\"   name=\"value\" #value=\"ngModel\" [(ngModel)]=\"data.value\"  pattern=\"[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,3}$\"  required>\r\n          </mat-form-field>\r\n          <div class=\"alert alert-danger\" *ngIf=\"!value.valid && value.touched\">\r\n            Email is invalid...\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div mat-dialog-actions>\r\n    <button mat-button color=\"warn\" [mat-dialog-close]=\"false\">Cancel</button>\r\n    <button mat-button color=\"accent\" (click)=\"update_address(data)\" [disabled]='!value.valid'>Save</button>\r\n  </div>\r\n</div> -->\r\n\r\n<!--\r\n  <div class=\"edit-modal\" *ngIf=\"data.type !='address' && data.type =='mobile' && data.type !='landline_no' && data.type !='email' && data.type !='whatsapp_no' && data.type !='discount' && data.type !='edit' && data.type !='add' && data.type !='gst'\">\r\n    <div mat-dialog-content>\r\n      <p class=\"heading\">Update Mobile</p>\r\n      <div class=\"cs-form\">\r\n        <div class=\"row\">\r\n          <div class=\"col s12\">\r\n            <mat-form-field class=\"cs-input\" appearance=\"outline\">\r\n              <mat-label>Mobile Number</mat-label>\r\n              <input matInput placeholder=\"\" type=\"number\"   name=\"value\" #value=\"ngModel\" [(ngModel)]=\"data.value\"  (keypress)=\"MobileNumber($event)\" maxlength=\"10\" minlength=\"10\" required>\r\n            </mat-form-field>\r\n            <div class=\"alert alert-danger\" *ngIf=\"!value.valid && value.touched\">\r\n              Mobile no. must be 10 digits...\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div mat-dialog-actions>\r\n      <button mat-button color=\"warn\" [mat-dialog-close]=\"false\">Cancel</button>\r\n      <button mat-button  color=\"accent\" (click)=\"update_address(data)\" [disabled]='!value.valid'>Save</button>\r\n    </div>\r\n  </div> -->\r\n\r\n  <!-- <div class=\"edit-modal\" *ngIf=\"data.type=='dr_name'\">\r\n    <div mat-dialog-content>\r\n      <p class=\"heading\">Update Name</p>\r\n      <div class=\"cs-form\">\r\n        <div class=\"row\">\r\n          <div class=\"col s12\">\r\n            <mat-form-field class=\"cs-input\" appearance=\"outline\">\r\n              <mat-label>Name</mat-label>\r\n              <input matInput placeholder=\"Type Here ...\" type=\"text\"   name=\"value\" #value=\"ngModel\" [(ngModel)]=\"data.value\"    required>\r\n            </mat-form-field>\r\n            <div class=\"alert alert-danger\" *ngIf=\"!value.valid && value.touched\">\r\n              Name is required...\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div mat-dialog-actions>\r\n      <button mat-button color=\"warn\" [mat-dialog-close]=\"false\">Cancel</button>\r\n      <button mat-button color=\"accent\" (click)=\"update_address(data)\" [disabled]='!value.valid'>Save</button>\r\n    </div>\r\n  </div> -->\r\n\r\n\r\n  <!-- update company_name -->\r\n  <!-- <div class=\"edit-modal\" *ngIf=\"data.type=='companyname'\">\r\n    <div mat-dialog-content>\r\n      <p class=\"heading\">Update Company Name</p>\r\n      <div class=\"cs-form\">\r\n        <div class=\"row\">\r\n          <div class=\"col s12\">\r\n            <mat-form-field class=\"cs-input\" appearance=\"outline\">\r\n              <mat-label>Company Name</mat-label>\r\n              <input matInput placeholder=\"\" type=\"text\"   name=\"value\" #value=\"ngModel\" [(ngModel)]=\"data.value\"    required>\r\n            </mat-form-field>\r\n            <div class=\"alert alert-danger\" *ngIf=\"!value.valid && value.touched\">\r\n              Company Name is required...\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div mat-dialog-actions>\r\n      <button mat-button color=\"warn\" [mat-dialog-close]=\"false\">Cancel</button>\r\n      <button mat-button color=\"accent\" (click)=\"update_address(data)\" [disabled]='!value.valid'>Save</button>\r\n    </div>\r\n  </div> -->\r\n\r\n\r\n  <!-- update company_name -->\r\n  <!-- <div class=\"edit-modal\" *ngIf=\"data.type !='address' &&data.type !='landline_no' &&data.type =='whatsapp_no' && data.type !='discount' && data.type !='edit' && data.type !='add' && data.type !='gst'\">\r\n    <div mat-dialog-content>\r\n      <p class=\"heading\">Update Whatsapp No.</p>\r\n      <div class=\"cs-form\">\r\n        <div class=\"row\">\r\n          <div class=\"col s12\">\r\n            <mat-form-field class=\"cs-input\" appearance=\"outline\">\r\n              <mat-label>Whatsapp No </mat-label>\r\n              <input matInput placeholder=\"Type Here ...\" minlength=\"10\" maxlength=\"10\" name=\"value\" #value=\"ngModel\" (keypress)=\"MobileNumber($event)\" [(ngModel)]=\"data.value\" required>\r\n            </mat-form-field>\r\n            <div class=\"alert alert-danger\" *ngIf=\"!value.valid && value.touched\">\r\n              Whatsapp No is invalid...\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n    <div mat-dialog-actions>\r\n      <button mat-button color=\"warn\" [mat-dialog-close]=\"false\">Cancel</button>\r\n      <button mat-button color=\"accent\" (click)=\"update_address(data)\" [disabled]='!value.valid'>Save</button>\r\n    </div>\r\n  </div> -->\r\n\r\n  <!-- <div class=\"edit-modal\" *ngIf=\"data.type =='gst' && data.type !='discount' && data.type !='landline_no'  && data.type !='address' && data.type !='edit' && data.type !='add'\">\r\n    <div mat-dialog-content>\r\n      <p class=\"heading\">Update GST</p>\r\n      <div class=\"cs-form\">\r\n        <div class=\"row\">\r\n          <div class=\"col s12\">\r\n            <mat-form-field class=\"cs-input\" appearance=\"outline\">\r\n              <mat-label>GST No.</mat-label>\r\n              <input matInput placeholder=\"Type Here ...\" name=\"value\" maxlength=\"20\" #value=\"ngModel\" [(ngModel)]=\"data.value\" required>\r\n            </mat-form-field>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div mat-dialog-actions>\r\n      <button mat-button color=\"warn\" [mat-dialog-close]=\"false\">Cancel</button>\r\n      <button mat-button color=\"accent\" (click)=\"update_address(data)\" >Save</button>\r\n    </div>\r\n  </div> -->\r\n\r\n  <!--\r\n    <div class=\"edit-modal\" *ngIf=\"data.type=='edit' && data.type !='address' && data.type !='discount' && data.type !='add'&& data.type !='gst' \">\r\n      <div mat-dialog-content>\r\n        <div class=\"from-fields\">\r\n          <p class=\"heading\">Update Address</p>\r\n          <div class=\"col s12\">\r\n            <div class=\"row\">\r\n              <div class=\"col s4\">\r\n                <div class=\"control-field\">\r\n                  <mat-form-field class=\"cs-input\" appearance=\"outline\">\r\n                    <input matInput placeholder=\"Name\">\r\n                  </mat-form-field>\r\n                </div>\r\n              </div>\r\n              <div class=\"col s4 \">\r\n                <div class=\"control-field\">\r\n                  <mat-form-field class=\"cs-input\" appearance=\"outline\">\r\n                    <input matInput placeholder=\"Mobile 1\">\r\n                  </mat-form-field>\r\n                </div>\r\n              </div>\r\n              <div class=\"col s4 \">\r\n                <div class=\"control-field\">\r\n                  <mat-form-field class=\"cs-input\" appearance=\"outline\">\r\n                    <input matInput placeholder=\"Mobile 2\">\r\n                  </mat-form-field>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div mat-dialog-actions>\r\n        <button mat-button color=\"warn\" [mat-dialog-close]=\"false\">Cancel</button>\r\n        <button mat-button color=\"accent\">Save</button>\r\n      </div>\r\n    </div> -->\r\n"

/***/ }),

/***/ "./src/app/editlead/editlead.component.ts":
/*!************************************************!*\
  !*** ./src/app/editlead/editlead.component.ts ***!
  \************************************************/
/*! exports provided: EditleadComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditleadComponent", function() { return EditleadComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var src_services_DatabaseService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/_services/DatabaseService */ "./src/_services/DatabaseService.ts");
/* harmony import */ var _dialog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../dialog.component */ "./src/app/dialog.component.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! moment */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var src_app_localstorage_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/localstorage.service */ "./src/app/localstorage.service.ts");





// import { Router } from '@angular/router';
// import { DialogComponent } from '../dialog.component';


var EditleadComponent = /** @class */ (function () {
    function EditleadComponent(data, serve, session, dialog2, dialog) {
        this.data = data;
        this.serve = serve;
        this.session = session;
        this.dialog2 = dialog2;
        this.dialog = dialog;
        this.state_list = [];
        this.district_list = [];
        this.city_list = [];
        this.pinCode_list = [];
        this.countryList = [];
        this.lead_data = {};
        this.lead_data2 = {};
        this.cityAreaList = [];
        this.length = {};
        this.no_vaild = false;
        this.source_list = [];
        this.today_date = new Date();
        this.userData = JSON.parse(localStorage.getItem('st_user'));
        this.userId = this.userData['data']['id'];
        this.userName = this.userData['data']['name'];
        if (data['type'] == 'basic_information') {
            this.lead_data = JSON.parse(JSON.stringify(data['value']));
            this.lead_type_id = this.lead_data.type;
        }
        else {
            this.getStateList();
            this.getDistrict(data.value.state, 1);
            this.getCityAreaList(data.value.district, data.value.state, 1);
            this.getarea(data.value.district, data.value.state, data.value.city);
            this.getPinCodeList(data.value.state, data.value.district, data.value.city, 1);
            this.lead_data2 = JSON.parse(JSON.stringify(data['value']));
            this.lead_data2.cityArea = this.data.value.area;
        }
    }
    EditleadComponent.prototype.ngOnInit = function () {
        this.getsource_list();
    };
    EditleadComponent.prototype.editPincode = function (pin) {
        var _this = this;
        this.length = pin.length;
        this.lead_data2.state = '';
        this.lead_data2.district = '';
        this.lead_data2.city = '';
        // this.no_vaild= false;
        if (this.length == 6) {
            this.serve.post_rqst('', "Lead/getAddress/" + pin).subscribe((function (result) {
                if (_this['status'] = 'Success') {
                    _this.lead_data2.state = result['data']['state_name'];
                    _this.lead_data2.district = result['data']['district_name'];
                    _this.lead_data2.city = result['data']['city'];
                    _this.getCityAreaList(_this.lead_data2.district, _this.lead_data2.state, 2);
                }
                else {
                    _this.no_vaild = true;
                }
                // this.dialog.success("Save","Success");
            }));
        }
    };
    EditleadComponent.prototype.update = function () {
    };
    EditleadComponent.prototype.update_address = function () {
        var _this = this;
        this.lead_data2.area = this.lead_data2.cityArea;
        this.lead_data2.cityArea = '';
        this.lead_data2.uid = this.userId;
        this.lead_data2.uname = this.userName;
        this.serve.post_rqst(this.lead_data2, "Lead/updateAddress").subscribe((function (result) {
            _this.dialog2.closeAll();
            _this.dialog.success("Save", "Success");
        }));
    };
    EditleadComponent.prototype.update_detail = function (data) {
        var _this = this;
        var leadData = {
            'dr_id': data['id'],
            'company_name': data['company_name'],
            'change_lead': data['change_lead'],
            'name': data['name'],
            'mobile_no': data['mobile'],
            'email_id': data['email'],
            'source': data['source'],
            'status': data['status'],
            'gst_no': data['gst'],
            'stage': data['stage'],
            'whatsapp_no': data['whatsapp_no'],
            'type': data['type'],
            'date_of_birth': moment__WEBPACK_IMPORTED_MODULE_5__(data['date_of_birth']).format('YYYY-MM-DD'),
            'date_of_anniversary': moment__WEBPACK_IMPORTED_MODULE_5__(data['date_of_anniversary']).format('YYYY-MM-DD'),
            'description': data['description'],
            'reason': data['reason'],
        };
        this.serve.post_rqst({ data: leadData, 'uid': this.userId, 'uname': this.userName }, "Lead/leadDetailUpdate").subscribe((function (result) {
            _this.dialog2.closeAll();
            // this.serve.count_list();
            // this.update_lead()
            _this.dialog.success("Save", "Success");
        }));
    };
    EditleadComponent.prototype.update_lead = function () {
        var _this = this;
        this.serve.post_rqst({ 'id': this.lead_data.id, 'type': this.lead_data.change_lead, 'login_id': this.userId }, "Lead/update_type").subscribe((function (result) {
            _this.dialog2.closeAll();
            // this.serve.count_list();
            _this.dialog.success("Save", "Success");
        }));
    };
    EditleadComponent.prototype.MobileNumber = function (event) {
        var pattern = /[0-9\+\-\ ]/;
        var inputChar = String.fromCharCode(event.charCode);
        if (event.keyCode != 8 && !pattern.test(inputChar)) {
            event.preventDefault();
        }
    };
    EditleadComponent.prototype.getPinCodeList = function (state, district, city, src) {
        var _this = this;
        if (src == 2) {
            this.data.pincode = '';
        }
        var value = { "state": state, "district": district, "city": city };
        this.serve.post_rqst(value, "User/pincode_user_list").subscribe((function (response) {
            _this.pinCode_list = response['query']['pincode'];
        }));
    };
    EditleadComponent.prototype.getStateList = function () {
        var _this = this;
        this.serve.post_rqst(0, "User/state_user_list").subscribe((function (response) {
            _this.state_list = response['query']['state_name'];
            // this.state_list=this.state
        }));
    };
    EditleadComponent.prototype.getsource_list = function () {
        var _this = this;
        this.serve.post_rqst('', "Lead/lead_source_list").subscribe((function (result) {
            _this.source_list = result['lead_source_list'];
        }));
    };
    EditleadComponent.prototype.getDistrict = function (state_name, src) {
        var _this = this;
        if (src == 2) {
            this.lead_data2.district = '';
            this.lead_data2.cityArea = '';
            this.lead_data2.city = '';
            this.lead_data2.pincode = '';
        }
        this.serve.post_rqst(state_name, "User/district_user_list").subscribe((function (response) {
            _this.district_list = response['query']['district_name'];
        }));
    };
    EditleadComponent.prototype.getCityAreaList = function (district, state, src) {
        var _this = this;
        if (src == 2) {
            this.lead_data2.cityArea = '';
            this.lead_data2.city = '';
            this.lead_data2.pincode = '';
        }
        var value = { "state": state, "district": district };
        this.serve.post_rqst(value, "User/city_user_list").subscribe((function (response) {
            _this.city_list = response['query']['city'];
        }));
    };
    EditleadComponent.prototype.getarea = function (district, state, city) {
        var _this = this;
        var value1 = { "state": state, "district": district, 'city': city, };
        this.serve.post_rqst(value1, "User/area_user_list").subscribe((function (response) {
            _this.cityAreaList = response['query']['area'];
        }));
    };
    EditleadComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-editlead',
            template: __webpack_require__(/*! ./editlead.component.html */ "./src/app/editlead/editlead.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_2__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object, src_services_DatabaseService__WEBPACK_IMPORTED_MODULE_3__["DatabaseService"], src_app_localstorage_service__WEBPACK_IMPORTED_MODULE_6__["sessionStorage"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"], _dialog_component__WEBPACK_IMPORTED_MODULE_4__["DialogComponent"]])
    ], EditleadComponent);
    return EditleadComponent;
}());



/***/ }),

/***/ "./src/app/lead/add-lead/add-lead.component.html":
/*!*******************************************************!*\
  !*** ./src/app/lead/add-lead/add-lead.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-container\">\r\n  <!-- <app-loader *ngIf=\"loader\"></app-loader> -->\r\n  <!-- <div class=\"tools-container\">\r\n    <a mat-icon-button matTooltip=\"Back\" (click)=\"back()\">\r\n      <i class=\"material-icons\">arrow_back</i>\r\n    </a>\r\n    <h2>Add New Virtual Lead</h2>\r\n  </div> -->\r\n  <div class=\"tools-container\">\r\n    <a mat-icon-button matTooltip=\"Back\" (click)=\"back()\">\r\n        <i class=\"material-icons\">arrow_back</i>\r\n    </a>\r\n    <h2> {{data.id ? 'Edit' :'Add'}} Digital Enquiry</h2>\r\n</div>\r\n\r\n  <div class=\"container pt10 pl10 pr10 pb50\">\r\n    <form #f=\"ngForm\" (ngSubmit)=\" f.valid && submitDetail()\">\r\n\r\n      <div class=\"row\">\r\n        <div class=\"col s12\">\r\n          <div class=\"card pb0\">\r\n            <div class=\"card-head\">\r\n              <h2>Basic Information</h2>\r\n            </div>\r\n            <div class=\"card-body cs-form\">\r\n              <div class=\"row\">\r\n                <div class=\"col s12 m3 l3\">\r\n                  <mat-form-field appearance=\"outline\">\r\n                    <mat-label>Enquiry Type</mat-label>\r\n                    <mat-select name=\"dr_type\" #dr_type=\"ngModel\" [(ngModel)]=\"data.dr_type\"\r\n                      (selectionChange)=\"selectLeadType(data.dr_type)\" required>\r\n                      <mat-option disabled=\"\">Select Lead Type</mat-option>\r\n                      <ng-container *ngFor=\"let row of networkType\">\r\n                        <ng-container *ngIf=\"row.type!=7 && row.type!=3 && row.type!=17\">\r\n                      <mat-option   *ngIf=\"row.type==1\"  [value]=\"1\" >Prospect CP</mat-option>\r\n                      <mat-option   *ngIf=\"row.type!=1\"  [value]=\"row.type\" >{{row.module_name}}</mat-option>\r\n                    </ng-container>\r\n                  </ng-container>\r\n                    </mat-select>\r\n                  </mat-form-field>\r\n                  <div class=\"alert alert-danger\" *ngIf=\"dr_type.touched || f.submitted\">\r\n                    <p *ngIf=\"dr_type.errors?.required\">This field is required</p>\r\n                  </div>\r\n                </div>\r\n\r\n                <div class=\"col s12 m3 l3\">\r\n                  <mat-form-field class=\"cs-input\" appearance=\"outline\">\r\n                    <mat-label>Source Type</mat-label>\r\n                    <mat-select name=\"source\" placeholder=\"Type Here ...\" #source=\"ngModel\" [(ngModel)]=\"data.source\"\r\n                      [ngClass]=\"{'has-error' : source.invalid } \" required>\r\n                      <mat-option *ngFor=\"let row of source_list\" value=\"{{row.source}}\">{{row.source}}</mat-option>\r\n                    </mat-select>\r\n                  </mat-form-field>\r\n                  <div class=\"alert alert-danger\" *ngIf=\"source.touched || f.submitted\">\r\n                    <p *ngIf=\"source.errors?.required\">This field is required</p>\r\n                  </div>\r\n                </div>\r\n\r\n                 <div class=\"col s12 m3 l3\" *ngIf=\"data.source=='Campaign'\">\r\n\r\n                  <mat-form-field appearance=\"outline\">\r\n                    <mat-label>Campaign ID</mat-label>\r\n                    <input matInput placeholder=\"Type Here ...\" name=\"campaignID\" #campaignID=\"ngModel\" [(ngModel)]=\"data.campaignID\"\r\n                      required>\r\n                  </mat-form-field>\r\n                  <div class=\"alert alert-danger\" *ngIf=\"campaignID.touched || f.submitted\">\r\n                    <p *ngIf=\"campaignID.errors?.required\">This field is required</p>\r\n                  </div>\r\n\r\n                </div>\r\n                <div class=\"col s12 m3 l3\">\r\n                  <mat-form-field class=\"cs-input\" appearance=\"outline\">\r\n                    <mat-label>Exsisting Customer</mat-label>\r\n                    <mat-select name=\"customerExsist\" placeholder=\"Type Here ...\" #customerExsist=\"ngModel\" [(ngModel)]=\"data.customerExsist\"\r\n                      [ngClass]=\"{'has-error' : customerExsist.invalid } \" required>\r\n                      <mat-option value=\"yes\">Yes</mat-option>\r\n                      <mat-option value=\"no\">No</mat-option>\r\n                    </mat-select>\r\n                  </mat-form-field>\r\n                  <div class=\"alert alert-danger\" *ngIf=\"customerExsist.touched || f.submitted\">\r\n                    <p *ngIf=\"customerExsist.errors?.required\">This field is required</p>\r\n                  </div>\r\n                </div>\r\n\r\n                <div class=\"col s12 m3 l3\">\r\n\r\n                  <mat-form-field appearance=\"outline\">\r\n                    <mat-label>Name</mat-label>\r\n                    <input matInput placeholder=\"Type Here ...\" name=\"name\" #name=\"ngModel\" [(ngModel)]=\"data.name\"\r\n                      required>\r\n                  </mat-form-field>\r\n                  <div class=\"alert alert-danger\" *ngIf=\"name.touched || f.submitted\">\r\n                    <p *ngIf=\"name.errors?.required\">This field is required</p>\r\n                  </div>\r\n\r\n                </div>\r\n\r\n                <div class=\"col s12 m3 l3\" *ngIf=\"data.dr_type != 8 && data.dr_type != 15\">\r\n                  <mat-form-field appearance=\"outline\">\r\n                    <mat-label>Company Name</mat-label>\r\n                    <input matInput placeholder=\"Type Here ...\" name=\"company_name\" #company_name=\"ngModel\"\r\n                      [(ngModel)]=\"data.company_name\" [required]=\"data.dr_type != 13\">\r\n                  </mat-form-field>\r\n                  <div class=\"alert alert-danger\" *ngIf=\"company_name.touched || f.submitted\">\r\n                    <p *ngIf=\"company_name.errors?.required\">This field is required</p>\r\n                  </div>\r\n                </div>\r\n\r\n                <div class=\"col s12 m3 l3\">\r\n\r\n                  <mat-form-field appearance=\"outline\">\r\n                    <mat-label>Mobile No.</mat-label>\r\n                    <input matInput placeholder=\"Type Here ...\" name=\"mobile\" #mobile=\"ngModel\"\r\n                      [(ngModel)]=\"data.mobile\" minlength=\"10\" maxlength=\"10\" min=\"0\" (keypress)=\"MobileNumber($event)\"\r\n                      pattern=\"^[6-9][0-9]{0,9}$\" required>\r\n                  </mat-form-field>\r\n\r\n                  <div class=\"alert alert-danger\" *ngIf=\"mobile.touched || f.submitted\">\r\n                    <p *ngIf=\"mobile.errors?.required\">This field is required</p>\r\n                    <p *ngIf=\"mobile.errors?.pattern\">Invalid Mobile Number</p>\r\n                    <p *ngIf=\"!mobile.errors?.pattern  && (mobile.errors?.maxlength || mobile.errors?.minlength)\">Mobile\r\n                      No should be of 10 digits..\r\n                    </p>\r\n                  </div>\r\n\r\n\r\n\r\n\r\n\r\n                </div>\r\n\r\n                <div class=\"col s12 m4 l4\">\r\n                  <mat-form-field appearance=\"outline\">\r\n                      <mat-label>Sales User</mat-label>\r\n                      <mat-select name=\"assigned_sales_user_name\"\r\n                          [(ngModel)]=\"data.assigned_sales_user_name\"\r\n                          #assigned_sales_user_name=\"ngModel\"\r\n                          panelClass=\"sales-user-select-panel\"\r\n                          [ngClass]=\"{'has-error' : assigned_sales_user_name.invalid } \" required>\r\n                          <mat-option>\r\n                              <ngx-mat-select-search noEntriesFoundLabel=\"'no data found'\"\r\n                                  placeholderLabel=\"Search..\"\r\n                                  (keyup)=\"getSalesUser($event.target.value)\"></ngx-mat-select-search>\r\n                          </mat-option>\r\n                          <mat-option *ngFor=\"let row of salesUser\" value=\"{{row.id}}\">{{row.name}} ({{row.employee_id}})-{{row.mobile_no}}-{{row.role_name}}</mat-option>\r\n                      </mat-select>\r\n                  </mat-form-field>\r\n                  <div class=\"alert alert-danger\"\r\n                      *ngIf=\"assigned_sales_user_name.touched || f.submitted\">\r\n                      <p *ngIf=\"assigned_sales_user_name.errors?.required\">This field is required</p>\r\n                  </div>\r\n              </div>\r\n\r\n              <div class=\"col s12 m4 l4\" *ngIf=\"data.id\">\r\n                <mat-form-field appearance=\"outline\">\r\n                  <mat-label>Remark</mat-label>\r\n                  <input matInput placeholder=\"Type Here ...\" name=\"assign_remark\" #assign_remark=\"ngModel\"\r\n                    [(ngModel)]=\"data.assign_remark\">\r\n                </mat-form-field>\r\n              </div>\r\n\r\n              </div>\r\n\r\n              <!-- Sales User Suggestion Box -->\r\n              <div class=\"row\" *ngIf=\"suggested_sales_users.length > 0\">\r\n                <div class=\"col s12\">\r\n                  <div style=\"background:#f5f5f5; border:1px solid #e0e0e0; border-radius:4px; padding:10px; margin-bottom:12px;\">\r\n                    <p style=\"margin:0 0 8px; font-size:13px; font-weight:500; color:#666;\">\r\n                      Suggested Sales Users ({{data.division}})\r\n                    </p>\r\n                    <div style=\"display:flex; flex-wrap:wrap; gap:8px;\">\r\n                      <span *ngFor=\"let user of suggested_sales_users; let i = index\"\r\n                        (click)=\"selectSuggestedUser(user)\"\r\n                        [ngStyle]=\"{\r\n                          'display': 'inline-flex',\r\n                          'align-items': 'center',\r\n                          'border-radius': '20px',\r\n                          'padding': '6px 14px',\r\n                          'cursor': 'pointer',\r\n                          'font-size': '12px',\r\n                          'background': (data.district && user.baseStation && user.baseStation.toUpperCase().includes(data.district.toUpperCase())) ? '#e8f5e9' : '#fff',\r\n                          'border': (data.district && user.baseStation && user.baseStation.toUpperCase().includes(data.district.toUpperCase())) ? '2px solid #2e7d32' : '1px solid #1976d2',\r\n                          'color': (data.district && user.baseStation && user.baseStation.toUpperCase().includes(data.district.toUpperCase())) ? '#2e7d32' : '#1976d2',\r\n                          'font-weight': (data.district && user.baseStation && user.baseStation.toUpperCase().includes(data.district.toUpperCase())) ? '600' : 'normal',\r\n                          'box-shadow': (data.district && user.baseStation && user.baseStation.toUpperCase().includes(data.district.toUpperCase())) ? '0 0 8px 2px rgba(46,125,50,0.45)' : 'none'\r\n                        }\"\r\n                        matTooltip=\"Click to assign {{user.name}}\">\r\n                        <span style=\"display:inline-flex; align-items:center; justify-content:center; width:16px; height:16px; border-radius:50%; background:#1976d2; color:#fff; font-size:9px; font-weight:700; margin-right:6px; flex-shrink:0;\">{{i+1}}</span>\r\n                        {{user.name}} ({{user.employee_id}}) - {{user.mobile_no}} - {{user.role_name}} - {{user.baseStation}}\r\n                      </span>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"row\" *ngIf=\"loadingSuggestions\">\r\n                <div class=\"col s12\">\r\n                  <p style=\"color:#999; font-size:12px; padding:8px;\">Loading suggested sales users...</p>\r\n                </div>\r\n              </div>\r\n\r\n\r\n\r\n              <div class=\"row mb0\">\r\n                <div class=\"col s12 m3 l3\">\r\n                  <div class=\"row\">\r\n                    <div class=\"col s12\">\r\n                      <mat-form-field appearance=\"outline\">\r\n                        <mat-label>Alternate Mobile No.</mat-label>\r\n                        <input matInput placeholder=\"Type here..\" minlength=\"10\" maxlength=\"10\" type=\"tel\"\r\n                          name=\"altNumber\" #altNumber=\"ngModel\" [(ngModel)]=\"data.altNumber\"\r\n                          (keypress)=\"MobileNumber($event)\">\r\n                      </mat-form-field>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"row\">\r\n                    <div class=\"col s12\">\r\n                      <mat-form-field appearance=\"outline\">\r\n                        <mat-label>Email ID</mat-label>\r\n                        <input matInput placeholder=\"Type Here ...\" type=\"email\" name=\"email\" #email=\"ngModel\"\r\n                          [(ngModel)]=\"data.email\" pattern=\"[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$\">\r\n                      </mat-form-field>\r\n                      <div class=\"alert alert-danger\" *ngIf=\"email.touched || f.submitted\">\r\n                        <p *ngIf=\"email.errors?.pattern\">This is not a valid Email ID !</p>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n\r\n                <div class=\"col s12 m9 l9\">\r\n                  <mat-form-field appearance=\"outline\">\r\n                    <mat-label>Purpose</mat-label>\r\n                    <textarea matInput placeholder=\"Type Here ...\" name=\"purpose\" #purpose=\"ngModel\"\r\n                      [(ngModel)]=\"data.purpose\" class=\"h77\" required></textarea>\r\n                  </mat-form-field>\r\n                  <div class=\"alert alert-danger\" *ngIf=\"purpose.touched || f.submitted\">\r\n                    <p *ngIf=\"purpose.errors?.required\">This field is required</p>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n              <div class=\"row mb0\">\r\n                <div class=\"col s12 m6 l6\">\r\n                  <div class=\"row\">\r\n                    <div class=\" col s12 m6 l6\">\r\n                      <mat-form-field appearance=\"outline\">\r\n                        <mat-label> Pincode</mat-label>\r\n                        <input matInput placeholder=\"Type here..\" type=\"tel\" name=\"pincode\" #pincode=\"ngModel\"\r\n                          [(ngModel)]=\"data.pincode\"\r\n                          (ngModelChange)=\"data.pincode ? processPincode(data.pincode) : null\" minlength=\"6\"\r\n                          maxlength=\"6\" required>\r\n\r\n                      </mat-form-field>\r\n                      <div class=\"alert alert-danger\" *ngIf=\"pincode.touched || f.submitted\">\r\n                        <p *ngIf=\"pincode.errors?.required\">This field is required</p>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\" col s12 m6 l6\">\r\n                      <mat-form-field appearance=\"outline\">\r\n                        <mat-label>State</mat-label>\r\n                        <mat-select name=\"state\" #state=\"ngModel\" [(ngModel)]=\"data.state\"\r\n                          (selectionChange)=\"getDistrict(1)\" required>\r\n                          <mat-option disabled=\"\">Select State</mat-option>\r\n                          <mat-option *ngFor=\"let row of states\" value=\"{{row.state_name}}\">\r\n                            {{row.state_name}}\r\n                          </mat-option>\r\n                        </mat-select>\r\n                      </mat-form-field>\r\n                      <div class=\"alert alert-danger\" *ngIf=\"state.touched || f.submitted\">\r\n                        <p *ngIf=\"state.errors?.required\">This field is required</p>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"row\">\r\n                    <div class=\" col s12 m6 l6\">\r\n                      <mat-form-field appearance=\"outline\">\r\n                        <mat-label>District</mat-label>\r\n                        <mat-select name=\"district\" #district=\"ngModel\" [(ngModel)]=\"data.district\"\r\n                          (selectionChange)=\"getCity(1)\" required>\r\n                          <mat-option disabled=\"\">Select District</mat-option>\r\n                          <mat-option *ngFor=\"let row of district_list\" value=\"{{row.district_name}}\">\r\n                            {{row.district_name}}\r\n                          </mat-option>\r\n                        </mat-select>\r\n\r\n                      </mat-form-field>\r\n                      <div class=\"alert alert-danger\" *ngIf=\"district.touched || f.submitted\">\r\n                        <p *ngIf=\"district.errors?.required\">This field is required</p>\r\n                      </div>\r\n                    </div>\r\n\r\n                    <div class=\" col s12 m6 l6\">\r\n                      <mat-form-field appearance=\"outline\">\r\n                          <mat-label>City</mat-label>\r\n                          <mat-select name=\"city\" #city=\"ngModel\"\r\n                          [(ngModel)]=\"data.city\" required>\r\n                              <mat-option disabled=\"\">Select City</mat-option>\r\n                              <mat-option *ngFor=\"let row of city_list\"\r\n                                  value=\"{{row.city}}\">\r\n                                  {{row.city}}\r\n                              </mat-option>\r\n                          </mat-select>\r\n\r\n                      </mat-form-field>\r\n                      <div class=\"alert alert-danger\" *ngIf=\"city.touched || f.submitted\">\r\n                          <p *ngIf=\"city.errors?.required\">This field is required</p>\r\n                      </div>\r\n                  </div>\r\n\r\n                    <!-- <div class=\" col s12 m6 l6\">\r\n                      <mat-form-field appearance=\"outline\">\r\n                        <mat-label>City</mat-label>\r\n                        <input matInput placeholder=\"Type here...\" name=\"city\" #city=\"ngModel\" [(ngModel)]=\"data.city\">\r\n                      </mat-form-field>\r\n                    </div> -->\r\n                  </div>\r\n                  <div class=\"row\" *ngIf=\"division_list.length > 0\">\r\n                    <div class=\"col s12 m6 l6\">\r\n                      <mat-form-field appearance=\"outline\">\r\n                        <mat-label>Division</mat-label>\r\n                        <mat-select name=\"division\" #divisionRef=\"ngModel\"\r\n                          [(ngModel)]=\"data.division\"\r\n                          (selectionChange)=\"onDivisionChange(data.division)\">\r\n                          <mat-option disabled=\"\">Select Division</mat-option>\r\n                          <mat-option *ngFor=\"let row of division_list\" value=\"{{row.division_name}}\">\r\n                            {{row.division_name}}\r\n                          </mat-option>\r\n                        </mat-select>\r\n                      </mat-form-field>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <div class=\"col s12 m6 l6\">\r\n                  <mat-form-field appearance=\"outline\">\r\n                    <mat-label>Address</mat-label>\r\n                    <textarea matInput placeholder=\"Type Here ...\" name=\"address\" #address=\"ngModel\"\r\n                      [(ngModel)]=\"data.address\" class=\"h80\"></textarea>\r\n                  </mat-form-field>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"row\">\r\n        <div class=\"col s12\">\r\n          <div class=\"text-right\">\r\n            <button [ngClass]=\"{'loading': savingFlag == true}\" mat-raised-button color=\"accent\" type=\"submit\"\r\n              [disabled]=\"savingFlag == true\">\r\n              {{savingFlag == true ? 'Saving' : 'Save'}}\r\n            </button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </form>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/lead/add-lead/add-lead.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/lead/add-lead/add-lead.component.ts ***!
  \*****************************************************/
/*! exports provided: AddLeadComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddLeadComponent", function() { return AddLeadComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _router_animation_router_animation_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../router-animation/router-animation.component */ "./src/app/router-animation/router-animation.component.ts");
/* harmony import */ var src_services_DatabaseService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/_services/DatabaseService */ "./src/_services/DatabaseService.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_dialog_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/dialog.component */ "./src/app/dialog.component.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! moment */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var src_app_localstorage_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/localstorage.service */ "./src/app/localstorage.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng6-toastr-notifications */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/ng6-toastr-notifications/fesm5/ng6-toastr-notifications.js");










var AddLeadComponent = /** @class */ (function () {
    function AddLeadComponent(serve, router, location, rout, session, dialog, ActivatedRoute, toast) {
        this.serve = serve;
        this.router = router;
        this.location = location;
        this.rout = rout;
        this.session = session;
        this.dialog = dialog;
        this.ActivatedRoute = ActivatedRoute;
        this.toast = toast;
        this.data = {};
        this.savingFlag = false;
        this.status = '';
        this.networkType = [];
        this.city_area_list = [];
        this.states = [];
        this.district_list = [];
        this.city_list = [];
        this.division_list = [];
        this.suggested_sales_users = [];
        this.loadingSuggestions = false;
        this.salesUser = [];
        this.designationRank = {
            15: 1, 18: 2, 11: 3, 19: 4, 48: 5, 6: 6, 20: 7,
            21: 8, 22: 9, 42: 10, 2: 11, 8: 12, 3: 13, 4: 14,
            7: 15, 23: 16, 5: 17
        };
        this.source_list = [];
        this.today_date = new Date();
        this.userData = JSON.parse(localStorage.getItem('st_user'));
        this.userId = this.userData['data']['id'];
        this.userName = this.userData['data']['name'];
        this.getStateList();
        this.getNetworkType();
        this.getsource_list();
        this.getSalesUser('');
    }
    AddLeadComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.ActivatedRoute.params.subscribe(function (params) {
            _this.today_date = new Date().toISOString().slice(0, 10);
            _this.data.dr_type = params.id;
            if (_this.ActivatedRoute.queryParams['_value']['page_mode'] == 'edit') {
                _this.data.id = _this.ActivatedRoute.queryParams['_value']['id'];
                _this.getSalesUser('');
                _this.leadDetail();
                _this.getStateList();
            }
            else {
                _this.getStateList();
                _this.getsource_list();
                _this.getSalesUser('');
            }
        });
    };
    AddLeadComponent.prototype.leadDetail = function () {
        var _this = this;
        this.loader = true;
        this.serve.post_rqst({ 'id': this.data.id }, "Enquiry/enquiryDetail").subscribe(function (result) {
            if (result['statusCode'] == 200) {
                _this.data = result['enquiry_detail'];
                _this.data.dr_type = _this.data.influencer_type_id;
                if (_this.data.dr_type) {
                    console.log(_this.data.dr_type);
                    _this.selectLeadType(_this.data.dr_type);
                }
                console.log(_this.data.assigned_to_user_id);
                _this.data.assigned_sales_user_name = _this.data.assigned_to_user_id.toString();
                console.log(_this.data.assigned_sales_user_name);
                if (_this.data.state) {
                    _this.getDistrict(1);
                }
                if (_this.data.district) {
                    _this.getCity(1);
                }
                // Load divisions for existing pincode in edit mode
                if (_this.data.pincode && _this.data.pincode.length > 5) {
                    _this.serve.post_rqst({ 'pincode': _this.data.pincode }, "Enquiry/getPostalInfo").subscribe((function (res) {
                        if (res['statusCode'] == 200 && res['result'].divisions) {
                            _this.division_list = res['result'].divisions;
                            if (_this.data.division) {
                                _this.onDivisionChange(_this.data.division);
                            }
                        }
                    }));
                }
                setTimeout(function () {
                    _this.loader = false;
                }, 700);
            }
            else {
                _this.toast.errorToastr(result['statusMsg']);
                _this.loader = false;
            }
        });
    };
    AddLeadComponent.prototype.selectLeadType = function (dr_type) {
        console.log(dr_type);
        console.log(this.networkType);
        var Index = this.networkType.findIndex(function (row) { return row.type == dr_type; });
        if (Index != -1) {
            this.data.type_name = this.networkType[Index].module_name;
            this.data.type = this.networkType[Index].type;
        }
        else {
        }
        console.log(this.data.type_name);
    };
    AddLeadComponent.prototype.getSalesUser = function (searcValue) {
        var _this = this;
        this.serve.post_rqst({ 'search': searcValue }, "CustomerNetwork/salesUserList").subscribe((function (response) {
            if (response['statusCode'] == 200) {
                _this.salesUser = response['all_sales_user'];
            }
            else {
                _this.toast.errorToastr(response['statusMsg']);
            }
        }));
    };
    AddLeadComponent.prototype.getStateList = function () {
        var _this = this;
        this.serve.post_rqst(0, "CustomerNetwork/getAllState").subscribe((function (response) {
            if (response['statusCode'] == 200) {
                _this.states = response['all_state'];
            }
            else {
                _this.toast.errorToastr(response['statusMsg']);
            }
        }));
    };
    AddLeadComponent.prototype.processPincode = function (pincode) {
        var _this = this;
        var pincodeValue = pincode;
        this.division_list = [];
        this.suggested_sales_users = [];
        this.data.division = '';
        if (pincodeValue.length > 5) {
            this.serve.post_rqst({ 'pincode': pincodeValue }, "Enquiry/getPostalInfo").subscribe((function (result) {
                if (result['statusCode'] == 200) {
                    _this.data.state = result['result'].state_name;
                    _this.data.district = result['result'].district_name;
                    _this.data.city = result['result'].city;
                    _this.getDistrict(1);
                    _this.getCity(1);
                    _this.division_list = result['result'].divisions || [];
                }
                else {
                    _this.toast.errorToastr(result['statusMsg']);
                }
            }));
        }
    };
    AddLeadComponent.prototype.onDivisionChange = function (division) {
        var _this = this;
        this.suggested_sales_users = [];
        if (division) {
            this.loadingSuggestions = true;
            this.serve.post_rqst({ 'search': '', 'division': division }, "CustomerNetwork/salesUserList").subscribe((function (response) {
                if (response['statusCode'] == 200) {
                    var users = response['all_sales_user'] || [];
                    _this.suggested_sales_users = users.sort(function (a, b) {
                        var ra = _this.designationRank[a.role_id] !== undefined ? _this.designationRank[a.role_id] : 999;
                        var rb = _this.designationRank[b.role_id] !== undefined ? _this.designationRank[b.role_id] : 999;
                        return ra - rb;
                    });
                }
                else {
                    _this.toast.errorToastr(response['statusMsg']);
                }
                _this.loadingSuggestions = false;
            }));
        }
    };
    AddLeadComponent.prototype.selectSuggestedUser = function (user) {
        this.data.assigned_sales_user_name = user.id.toString();
        this.toast.successToastr('Sales User ' + user.name + ' selected');
    };
    //submit function
    AddLeadComponent.prototype.submitDetail = function () {
        var _this = this;
        this.data.date_of_anniversary = moment__WEBPACK_IMPORTED_MODULE_6__(this.data.date_of_anniversary).format('YYYY-MM-DD');
        this.data.date_of_birth = moment__WEBPACK_IMPORTED_MODULE_6__(this.data.date_of_birth).format('YYYY-MM-DD');
        this.data.uid = this.userId;
        this.data.uname = this.userName;
        this.data.status = this.status;
        this.savingFlag = true;
        this.serve.post_rqst({ 'data': this.data }, "Enquiry/addEnquiry").subscribe(function (result) {
            if (result['statusCode'] == 200) {
                _this.toast.successToastr(result['statusMsg']);
                _this.rout.navigate(['/digital-lead/']);
                _this.loader = false;
                _this.savingFlag = false;
            }
            else {
                _this.dialog.error(result['statusMsg']);
            }
        }, function (error) {
        });
    };
    AddLeadComponent.prototype.MobileNumber = function (event) {
        var pattern = /[0-9\+\-\ ]/;
        var inputChar = String.fromCharCode(event.charCode);
        if (event.keyCode != 8 && !pattern.test(inputChar)) {
            event.preventDefault();
        }
    };
    AddLeadComponent.prototype.getCity = function (val) {
        var _this = this;
        var dist_name;
        if (val == 1) {
            dist_name = this.data.district;
        }
        var value = { "state": this.data.state, "district": dist_name, "pincode": this.data.pincode };
        this.serve.post_rqst(value, "CustomerNetwork/get_city_list").subscribe((function (response) {
            if (response['statusCode'] == 200) {
                _this.city_list = response['city'];
            }
            else {
                _this.toast.errorToastr(response['statusMsg']);
            }
        }));
    };
    AddLeadComponent.prototype.getNetworkType = function () {
        var _this = this;
        this.serve.post_rqst('', "Enquiry/leadNetworkModule").subscribe((function (result) {
            if (result['statusCode'] == 200) {
                _this.networkType = result['modules'];
            }
            else {
                _this.toast.errorToastr(result['statusMsg']);
            }
        }));
    };
    AddLeadComponent.prototype.getsource_list = function () {
        var _this = this;
        this.serve.post_rqst('', "Enquiry/enquirySourceList").subscribe((function (result) {
            if (result['statusCode'] == 200) {
                _this.source_list = result['lead_source_list'];
            }
            else {
                _this.toast.errorToastr(result['statusMsg']);
            }
        }));
    };
    AddLeadComponent.prototype.getDistrict = function (val) {
        var _this = this;
        var st_name;
        if (val == 1) {
            st_name = this.data.state;
        }
        this.serve.post_rqst({ 'state_name': st_name }, "CustomerNetwork/getAllDistrict").subscribe((function (response) {
            if (response['statusCode'] == 200) {
                _this.district_list = response['all_district'];
            }
            else {
                _this.toast.errorToastr(response['statusMsg']);
            }
        }));
    };
    AddLeadComponent.prototype.getArea = function (val) {
        var _this = this;
        var dist_name;
        if (val == 1) {
            dist_name = this.data.district;
        }
        var value = { "state": this.data.state, "district": dist_name };
        this.serve.post_rqst(value, "CustomerNetwork/getAreaData").subscribe((function (response) {
            if (response['statusCode'] == 200) {
                _this.city_area_list = response['area'];
            }
            else {
                _this.toast.errorToastr(response['statusMsg']);
            }
        }));
    };
    AddLeadComponent.prototype.back = function () {
        this.location.back();
    };
    AddLeadComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-add-lead',
            template: __webpack_require__(/*! ./add-lead.component.html */ "./src/app/lead/add-lead/add-lead.component.html"),
            animations: [Object(_router_animation_router_animation_component__WEBPACK_IMPORTED_MODULE_2__["slideToTop"])()]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_services_DatabaseService__WEBPACK_IMPORTED_MODULE_3__["DatabaseService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_common__WEBPACK_IMPORTED_MODULE_8__["Location"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], src_app_localstorage_service__WEBPACK_IMPORTED_MODULE_7__["sessionStorage"], src_app_dialog_component__WEBPACK_IMPORTED_MODULE_5__["DialogComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_9__["ToastrManager"]])
    ], AddLeadComponent);
    return AddLeadComponent;
}());



/***/ }),

/***/ "./src/app/lead/lead-add-followup-model/lead-add-followup-model.component.html":
/*!*************************************************************************************!*\
  !*** ./src/app/lead/lead-add-followup-model/lead-add-followup-model.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"edit-modal\">\r\n  <form #addFollowUp=\"ngForm\" *ngIf=\"followUp.leadType=='remark'\" (ngSubmit)=\"addFollowUp.valid && submitActivity()\">\r\n    <div mat-dialog-content>\r\n      <p class=\"heading\">Add Remark</p>\r\n      <div class=\"cs-form\">\r\n        <div class=\"row\">\r\n          <div class=\"col s12\">\r\n            <mat-form-field class=\"cs-input\" appearance=\"outline\">\r\n              <mat-label>Activity Remark</mat-label>\r\n              <textarea matInput placeholder=\"Type here ...\" name=\"activity_remark\" #activity_remark=\"ngModel\"\r\n                [(ngModel)]=\"followUp.activity_remark\" [ngClass]=\"{'has-error' : activity_remark.invalid } \"\r\n                required></textarea>\r\n            </mat-form-field>\r\n            <div class=\"alert alert-danger\" *ngIf=\"!activity_remark.valid && addFollowUp.submitted\">\r\n              Follow Up Remark is required...\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div mat-dialog-actions>\r\n      <div class=\"text-right wp100\">\r\n        <button class=\"mr10\" mat-stroked-button color=\"warn\" [mat-dialog-close]=\"false\">Cancel</button>\r\n        <button mat-raised-button color=\"accent\" type=\"submit\" [ngClass]=\"{'loading': savingFlag == true}\"\r\n          [disabled]=\"savingFlag == true\">\r\n          {{savingFlag == true ? 'Saving' : 'Save'}}\r\n        </button>\r\n      </div>\r\n    </div>\r\n  </form>\r\n\r\n  <form #addFollowUp=\"ngForm\" *ngIf=\"followUp.leadType=='followup'\" (ngSubmit)=\"addFollowUp.valid && submitFollowUp()\">\r\n    <div mat-dialog-content>\r\n      <p class=\"heading\">Add Follow-up</p>\r\n      <div class=\"cs-form\">\r\n        <div class=\"row\">\r\n          <div class=\"col s6\">\r\n            <mat-form-field class=\"cs-input\" appearance=\"outline\">\r\n              <mat-label>Next Follow Up Date</mat-label>\r\n              <input matInput min=\"{{today_date}}\" [matDatepicker]=\"create_date\" type=\"text\" name=\"followup_date\"\r\n                #followup_date=\"ngModel\" [(ngModel)]=\"followUp.followup_date\"\r\n                [ngClass]=\"{'has-error' : followup_date.invalid } \" required>\r\n              <mat-datepicker-toggle matSuffix [for]=\"create_date\"></mat-datepicker-toggle>\r\n              <mat-datepicker #create_date></mat-datepicker>\r\n            </mat-form-field>\r\n            <div class=\"alert alert-danger\" *ngIf=\"!followup_date.valid && addFollowUp.submitted\">\r\n              Follow Up Date is required...\r\n            </div>\r\n          </div>\r\n          <div class=\"col s6\">\r\n            <input type=\"time\" required name=\"followup_time\" #followup_time=\"ngModel\"\r\n              [(ngModel)]=\"followUp.followup_time\" class=\"time-input\">\r\n          </div>\r\n        </div>\r\n        <div class=\"row\">\r\n          <div class=\"col s12\">\r\n            <mat-form-field class=\"cs-input\" appearance=\"outline\">\r\n              <mat-label>Follow Up Remark</mat-label>\r\n              <textarea matInput placeholder=\"Type here ...\" name=\"remarks\" #remarks=\"ngModel\"\r\n                [(ngModel)]=\"followUp.remarks\" [ngClass]=\"{'has-error' : remarks.invalid } \" required></textarea>\r\n            </mat-form-field>\r\n            <div class=\"alert alert-danger\" *ngIf=\"!remarks.valid && addFollowUp.submitted\">\r\n              Follow Up Remark is required...\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n\r\n    </div>\r\n    <div mat-dialog-actions>\r\n      <div class=\"text-right wp100\">\r\n        <button class=\"mr10\" mat-stroked-button color=\"warn\" [mat-dialog-close]=\"false\">Cancel</button>\r\n        <button mat-raised-button color=\"accent\" type=\"submit\" [ngClass]=\"{'loading': savingFlag == true}\"\r\n          [disabled]=\"savingFlag == true\">\r\n          {{savingFlag == true ? 'Saving' : 'Save'}}\r\n        </button>\r\n      </div>\r\n    </div>\r\n  </form>\r\n</div>"

/***/ }),

/***/ "./src/app/lead/lead-add-followup-model/lead-add-followup-model.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/lead/lead-add-followup-model/lead-add-followup-model.component.ts ***!
  \***********************************************************************************/
/*! exports provided: LeadAddFollowupModelComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeadAddFollowupModelComponent", function() { return LeadAddFollowupModelComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_services_DatabaseService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/_services/DatabaseService */ "./src/_services/DatabaseService.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var src_app_dialog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/dialog.component */ "./src/app/dialog.component.ts");
/* harmony import */ var ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng6-toastr-notifications */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/ng6-toastr-notifications/fesm5/ng6-toastr-notifications.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/material/esm5/material.es5.js");







var LeadAddFollowupModelComponent = /** @class */ (function () {
    function LeadAddFollowupModelComponent(data, serve, dialog, dialog2, dialogRef, toast) {
        this.data = data;
        this.serve = serve;
        this.dialog = dialog;
        this.dialog2 = dialog2;
        this.dialogRef = dialogRef;
        this.toast = toast;
        this.userCheck = [];
        this.company_name = {};
        this.asmList = [];
        this.followUp = {};
        this.today_date = {};
        this.followup_types = [];
        this.active = {};
        this.report_manager = [];
        this.savingFlag = false;
        this.stage_level = '';
        this.followUp.leadType = data['type'];
        this.followUp.dr_id = data['id'];
        this.followUp.dr_id = data['id'];
        this.followUp.dr_name = data['name'];
        this.followUp.dr_type = data['dr_type'];
        this.followUp.user_id = data['user_id'];
        this.followUp.company_name = data['company_name'];
        this.followUp.state = data['state'];
        this.stage_level = data['stage_level'] || '';
        this.userData = JSON.parse(localStorage.getItem('st_user'));
        this.userId = this.userData['data']['id'];
        this.userName = this.userData['data']['name'];
        this.getReportManager('');
        this.today_date = new Date().toISOString().slice(0, 10);
    }
    LeadAddFollowupModelComponent.prototype.ngOnInit = function () {
        this.get_followup_types();
    };
    LeadAddFollowupModelComponent.prototype.getReportManager = function (searcValue) {
        var _this = this;
        this.serve.post_rqst({ 'search': searcValue }, "Enquiry/getSalesUserForReporting").subscribe((function (response) {
            if (response['all_sales_user']['statusCode'] == 200) {
                _this.report_manager = response['all_sales_user']['all_sales_user'];
            }
            else {
                _this.toast.errorToastr(response['all_sales_user']['statusMsg']);
            }
        }));
    };
    LeadAddFollowupModelComponent.prototype.submitFollowUp = function () {
        var _this = this;
        this.followUp.next_followup_date = moment__WEBPACK_IMPORTED_MODULE_3__(this.followUp.followup_date).format('YYYY-MM-DD');
        this.userCheck = false;
        this.savingFlag = true;
        this.serve.post_rqst({ 'uid': this.userId, 'uname': this.userName, 'dr_id': this.followUp.dr_id, 'dr_type': this.followUp.dr_type, 'dr_type_name': 'Enquiry', 'follow_type': this.followUp.followup_type, 'user_id': this.followUp.user_id, 'followup_time': this.followUp.followup_time, 'followup_date': this.followUp.next_followup_date, 'remarks': this.followUp.remarks }, "Enquiry/addFollowup").subscribe((function (result) {
            if (result['statusCode'] == 200) {
                _this.toast.successToastr(result['statusMsg']);
                // After follow-up creation, convert enquiry to Inprocess and create party
                if (_this.stage_level == 'Qualified') {
                    _this.serve.post_rqst({ 'dr_id': _this.followUp.dr_id }, "Enquiry/convertEnquiryToInprocess").subscribe((function (resp) {
                        if (resp['statusCode'] == 200) {
                            _this.toast.successToastr('Party created successfully');
                            _this.dialogRef.close({ converted: true, dr_id: resp['dr_id'], site_id: resp['site_id'], dr_type: resp['dr_type'] });
                        }
                        else {
                            _this.toast.errorToastr(resp['statusMsg']);
                            _this.dialogRef.close(true);
                        }
                        _this.savingFlag = false;
                    }));
                }
                else {
                    _this.dialogRef.close(true);
                    setTimeout(function () {
                        _this.savingFlag = false;
                    }, 700);
                }
            }
            else {
                _this.toast.errorToastr(result['statusMsg']);
                _this.savingFlag = false;
            }
        }));
    };
    LeadAddFollowupModelComponent.prototype.submitActivity = function () {
        var _this = this;
        this.userCheck = false;
        this.savingFlag = true;
        this.serve.post_rqst({ 'uid': this.userId, 'uname': this.userName, 'dr_id': this.followUp.dr_id, 'dr_name': this.followUp.dr_name, 'dr_type': this.followUp.dr_type, 'remarks': this.followUp.activity_remark }, "Enquiry/addEnquiryActivity").subscribe((function (result) {
            if (result['statusCode'] == 200) {
                _this.toast.successToastr(result['statusMsg']);
                _this.dialog2.closeAll();
                setTimeout(function () {
                    _this.savingFlag = false;
                }, 700);
            }
            else {
                _this.toast.errorToastr(result['statusMsg']);
            }
        }));
    };
    LeadAddFollowupModelComponent.prototype.get_followup_types = function () {
        var _this = this;
        this.serve.post_rqst({}, "Distributors/followup_type_master_list").subscribe(function (result) {
            _this.followup_types = result['followup_type_master_list'];
        });
    };
    LeadAddFollowupModelComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-lead-add-followup-model',
            template: __webpack_require__(/*! ./lead-add-followup-model.component.html */ "./src/app/lead/lead-add-followup-model/lead-add-followup-model.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__param"](0, Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Inject"])(_angular_material__WEBPACK_IMPORTED_MODULE_6__["MAT_DIALOG_DATA"])),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [Object, src_services_DatabaseService__WEBPACK_IMPORTED_MODULE_2__["DatabaseService"], src_app_dialog_component__WEBPACK_IMPORTED_MODULE_4__["DialogComponent"], _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatDialog"], _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatDialogRef"], ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_5__["ToastrManager"]])
    ], LeadAddFollowupModelComponent);
    return LeadAddFollowupModelComponent;
}());



/***/ }),

/***/ "./src/app/lead/lead-detail/lead-detail.component.html":
/*!*************************************************************!*\
  !*** ./src/app/lead/lead-detail/lead-detail.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-container\">\r\n  <div class=\"tools-container\">\r\n    <a mat-icon-button matTooltip=\"Back\" (click)=\"backToList()\">\r\n      <i class=\"material-icons\">arrow_back</i>\r\n    </a>\r\n    <h2>Digital Enquiry Detail</h2>\r\n    <div class=\"left-auto left-auto df ac flex-gap-10\">\r\n\r\n      <ng-container *ngIf=\"tabType == 'Followup' \">\r\n        <button mat-icon-button matTooltip=\"Refresh\" (click)=\"refresh() \">\r\n          <i class=\"material-icons\">refresh</i>\r\n        </button>\r\n        <div class=\"pagination\" *ngIf=\"followup_list.length > 0\">\r\n          <div class=\"pagination-content\">\r\n            Pages\r\n            <span>{{pagenumber}}</span>\r\n            of\r\n            <span>{{total_page}}</span>\r\n          </div>\r\n          <div class=\"page-nav\">\r\n            <button mat-icon-button matTooltip=\"Older\" (click)=\"pervious()\" [disabled]=\"start == 0\">\r\n              <i class=\"material-icons\">navigate_before</i>\r\n            </button>\r\n            <button mat-icon-button matTooltip=\"Newer\" (click)=\"nextPage()\" [disabled]=\"pagenumber == total_page \">\r\n              <i class=\"material-icons\">navigate_next</i>\r\n            </button>\r\n          </div>\r\n        </div>\r\n      </ng-container>\r\n      <div class=\"mat-tabbar\">\r\n        <button mat-button [ngClass]=\"{'active' :tabType== 'Profile'}\" (click)=\"tabType= 'Profile'; leadDetail()\"><i\r\n            class=\"material-icons\">person</i>Basic Detail</button>\r\n        <button mat-button [ngClass]=\"{'active' :tabType== 'Followup'}\"\r\n          (click)=\"tabType = 'Followup'; followupList()\"><i class=\"material-icons\">calendar_month</i>Followup</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"container pt10 pl10 pr10 pb50\">\r\n    <ng-container *ngIf=\"tabType== 'Profile'\">\r\n      <div class=\"row\">\r\n        <div class=\"col s12 m8 l8\">\r\n          <div class=\"card\" *ngIf=\"!loader\">\r\n            <div class=\"card-head\">\r\n              <h2>Basic Details</h2>\r\n              <div class=\"left-auto\" *ngIf=\"lead_detail.stage_level=='Pending' ||lead_detail.stage_level=='Qualified' \">\r\n                <a class=\"sm-mat-icon-button\" *ngIf=\"login_data5.edit_virtual_lead=='1'\" mat-icon-button matTooltip=\"Edit Detail\" [routerLink]=\"[ 'edit-enq/']\"\r\n                  [queryParams]=\"{'id':lead_detail.id, 'page_mode':'edit'}\">\r\n                  <i class=\"material-icons\">edit</i>\r\n                </a>\r\n              </div>\r\n            </div>\r\n           \r\n            <div class=\"card-body\">\r\n              \r\n              <div class=\"grid-box\">\r\n                <div class=\"block-feilds\">\r\n                  <span>Date</span>\r\n                  <p>{{lead_detail.date_created | date:'dd MMM yyyy'}}</p>\r\n                </div>\r\n\r\n\r\n                <div class=\"block-feilds\">\r\n                  <span>Created By</span>\r\n                  <p>{{lead_detail.created_by_name}}</p>\r\n                </div>\r\n\r\n                <div class=\"block-feilds\">\r\n                  <span>Profile type</span>\r\n                  <p>{{lead_detail.influencer_type ? lead_detail.influencer_type : '---'}}</p>\r\n                </div>\r\n\r\n\r\n                <div class=\"block-feilds\">\r\n                  <span>Source</span>\r\n                  <p>{{lead_detail.source ? lead_detail.source : '---'}}</p>\r\n                </div>\r\n\r\n                <div class=\"block-feilds\" *ngIf=\"lead_detail.campaignID\">\r\n                  <span>Campaign ID</span>\r\n                  <p>{{lead_detail.campaignID}}</p>\r\n                </div>\r\n\r\n                <div class=\"block-feilds\">\r\n                  <span>Name</span>\r\n                  <p>{{lead_detail.name ? lead_detail.name :'---'}}</p>\r\n                </div>\r\n\r\n                <div class=\"block-feilds\">\r\n                  <span>Mobile Number</span>\r\n                  <p>{{lead_detail.mobile ? lead_detail.mobile :'---'}}</p>\r\n                </div>\r\n\r\n                <div class=\"block-feilds\">\r\n                  <span>Alternative Number</span>\r\n                  <p>{{lead_detail.altNumber ? lead_detail.altNumber :'---'}}</p>\r\n                </div>\r\n\r\n\r\n                <div class=\"block-feilds\">\r\n                  <span>Email Id</span>\r\n                  <p>{{lead_detail.email ? lead_detail.email :'---'}}</p>\r\n                </div>\r\n\r\n                <div class=\"block-feilds\">\r\n                  <span>Status</span>\r\n                  <p>{{lead_detail.stage_level ? lead_detail.stage_level :'---'}}</p>\r\n                </div>\r\n\r\n\r\n                <div class=\"block-feilds\">\r\n                  <span>Assign Sales User</span>\r\n                  <p>{{lead_detail.user_name}} {{lead_detail.user_employee_code?(lead_detail.user_employee_code):'---'}}\r\n                  </p>\r\n                </div>\r\n\r\n                <div class=\"block-feilds\">\r\n                  <span>Sales User Contact No</span>\r\n                  <p>{{lead_detail.user_contact_no ? lead_detail.user_contact_no : '---'}}</p>\r\n                </div>\r\n\r\n                <div class=\"block-feilds\">\r\n                  <span>Base Station</span>\r\n                  <p>{{lead_detail.user_base_station ? lead_detail.user_base_station : '---'}}</p>\r\n                </div>\r\n              </div>\r\n\r\n              <div class=\"grid-box single mt16\" *ngIf=\"lead_detail.description\">\r\n                <div class=\"block-feilds\">\r\n                  <span>Remark</span>\r\n                  <p>{{lead_detail.description}}</p>\r\n                </div>\r\n              </div>\r\n              <div class=\"grid-box single mt16\" *ngIf=\"lead_detail.purpose\">\r\n                <div class=\"block-feilds\">\r\n                  <span>Purpose</span>\r\n                  <p>{{lead_detail.purpose}}</p>\r\n                </div>\r\n              </div>\r\n\r\n              <div class=\"grid-box single mt16\" *ngIf=\"lead_detail.reason\">\r\n                <div class=\"block-feilds\">\r\n                  <span>Reason</span>\r\n                  <p>{{lead_detail.reason}}</p>\r\n                </div>\r\n              </div>\r\n              \r\n\r\n              <div class=\"grid-box single mt16\">\r\n                <div class=\"block-feilds\">\r\n                  <span>Address</span>\r\n                  <p>{{lead_detail.address?lead_detail.address+',':''}}\r\n                    {{lead_detail.city?lead_detail.city+',':''}}\r\n                    {{lead_detail.district?lead_detail.district+',':''}}\r\n                    {{lead_detail.state?lead_detail.state+',':''}}\r\n                    {{lead_detail.pincode?lead_detail.pincode+',':''}}\r\n                    {{lead_detail.country?lead_detail.country+',':''}}\r\n\r\n                  </p>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"card\" *ngIf=\"loader\">\r\n            <div class=\"sk-head\">\r\n              <h2>&nbsp;</h2>\r\n            </div>\r\n            <div class=\"card-body\">\r\n              <div class=\"grid-box\">\r\n                <div class=\"sk-box\" *ngFor=\"let row of [].constructor(10)\">\r\n                  &nbsp;\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"col s12 m4 l4\">\r\n\r\n          <div class=\"card\" *ngIf=\"!loader\">\r\n            <div class=\"card-head\">\r\n              <h2>Logs</h2>\r\n            </div>\r\n\r\n            <div class=\"logs-box\">\r\n              <ng-container *ngFor=\"let row of lead_logs\">\r\n                <div class=\"logshead \">{{row.changes_by_name}} :- {{row.date_created | date:'dd MMM yyyy, h:mm a'}}</div>\r\n                <div class=\"logscontent \">\r\n                  <span *ngIf=\"row.remark\">Remark : </span> {{row.remark}}<br>\r\n                  <span *ngIf=\"row.msg\">Reason : </span> {{row.msg}}\r\n                </div>\r\n              </ng-container>\r\n            </div>\r\n\r\n          </div>\r\n\r\n          <div class=\"card\" *ngIf=\"loader\">\r\n            <div class=\"sk-head\">\r\n              <h2>&nbsp;</h2>\r\n            </div>\r\n            <div class=\"card-body\">\r\n              <div class=\"grid-box single mt10\" *ngFor=\"let row of [].constructor(5)\">\r\n                <div class=\"sk-box\">\r\n                  &nbsp;\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n        </div>\r\n      </div>\r\n\r\n    </ng-container>\r\n\r\n    <div *ngIf=\"tabType== 'Followup'\" style=\"margin: -10px -10px 0px -10px;\">\r\n      <div class=\"cs-table\">\r\n        <div class=\"sticky-head\" style=\"top: -10px;\">\r\n          <div class=\"table-head\">\r\n            <table>\r\n              <tr>\r\n                <th class=\"w50\">S.No</th>\r\n                <th class=\"w90\">Date Create</th>\r\n                <th class=\"w100\">Created By</th>\r\n                <th class=\"w100\">Followup Date</th>\r\n                <th class=\"w100\">Followup Time</th>\r\n                <th class=\"w200\">Assign To</th>\r\n                <th>Remark</th>\r\n              </tr>\r\n            </table>\r\n          </div>\r\n\r\n          <div class=\"table-head border-top\">\r\n            <table>\r\n              <tr>\r\n                <th class=\"w50\">&nbsp;</th>\r\n                <th class=\"w90\">\r\n                  <div class=\"th-search-acmt\">\r\n                    <mat-form-field class=\"example-full-width cs-input\">\r\n                      <input matInput [matDatepicker]=\"picker2\" placeholder=\"Date\" name=\"date_created\"\r\n                        [(ngModel)]=\"filter.date_created\" [max]=\"minDate\" (dateChange)=\"followupList()\" readonly>\r\n                      <mat-datepicker-toggle matSuffix [for]=\"picker2\"></mat-datepicker-toggle>\r\n                      <mat-datepicker #picker2></mat-datepicker>\r\n                    </mat-form-field>\r\n                  </div>\r\n                </th>\r\n                <th class=\"w100\">\r\n                  <div class=\"th-search-acmt\">\r\n                    <mat-form-field class=\"example-full-width cs-input select-input\">\r\n                      <input matInput placeholder=\"Search...\" name=\"created_by_name\"\r\n                        [(ngModel)]=\"filter.created_by_name\" (keyup.enter)=\"followupList()\">\r\n                    </mat-form-field>\r\n                  </div>\r\n                </th>\r\n                <th class=\"w100\">\r\n                  <div class=\"th-search-acmt\">\r\n                    <mat-form-field class=\"example-full-width cs-input\">\r\n                      <input matInput [matDatepicker]=\"next_follow_date\" placeholder=\"Date\" name=\"next_follow_date\"\r\n                        [(ngModel)]=\"filter.next_follow_date\" (dateChange)=\"followupList()\" readonly>\r\n                      <mat-datepicker-toggle matSuffix [for]=\"next_follow_date\"></mat-datepicker-toggle>\r\n                      <mat-datepicker #next_follow_date></mat-datepicker>\r\n                    </mat-form-field>\r\n                  </div>\r\n                </th>\r\n                <th class=\"w100\">&nbsp;</th>\r\n                <th class=\"w200\">\r\n                  <div class=\"th-search-acmt\">\r\n                    <mat-form-field class=\"example-full-width cs-input select-input\">\r\n                      <input matInput placeholder=\"Search...\" name=\"assign_to_name\" [(ngModel)]=\"filter.assign_to_name\"\r\n                        (keyup.enter)=\"followupList()\">\r\n                    </mat-form-field>\r\n                  </div>\r\n                </th>\r\n                <th>&nbsp;</th>\r\n              </tr>\r\n            </table>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"table-container\">\r\n          <div class=\"table-content\">\r\n            <table>\r\n\r\n              <ng-container *ngIf=\"!loader\">\r\n                <tr *ngFor=\"let row of followup_list; let i=index\">\r\n                  <td class=\"w50\">{{ i + 1 + sr_no }}</td>\r\n                  <td class=\"w90\">{{row.date_created | date:'dd MMM yyyy'}}</td>\r\n                  <td class=\"w100\">{{row.created_by_name}}</td>\r\n                  <td class=\"w100\">{{row.next_follow_date | date:'dd MMM yyyy'}}</td>\r\n                  <td class=\"w100\">\r\n                    <ng-container *ngIf=\"row.next_follwup_time != '00:00:00'\">{{row.next_follwup_time}}</ng-container>\r\n                  </td>\r\n                  <td class=\"w200\">{{row.assign_to_name}} ({{row.emp_code}})</td>\r\n                  <td>{{row.description}}</td>\r\n                </tr>\r\n              </ng-container>\r\n              <ng-container *ngIf=\"loader\">\r\n\r\n                <tr class=\"sk-loading\" *ngFor=\"let row of [].constructor(10)\">\r\n                  <td class=\"w50\">\r\n                    <div>&nbsp;</div>\r\n                  </td>\r\n                  <td class=\"w90\">\r\n                    <div>&nbsp;</div>\r\n                  </td>\r\n                  <td class=\"w100\">\r\n                    <div>&nbsp;</div>\r\n                  </td>\r\n                  <td class=\"w100\">\r\n                    <div>&nbsp;</div>\r\n                  </td>\r\n                  <td class=\"w200\">\r\n                    <div>&nbsp;</div>\r\n                  </td>\r\n                  <!-- <td class=\"w100\">\r\n                    <div>&nbsp;</div>\r\n                  </td> -->\r\n                  <td>\r\n                    <div>&nbsp;</div>\r\n                  </td>\r\n                </tr>\r\n              </ng-container>\r\n\r\n            </table>\r\n          </div>\r\n        </div>\r\n\r\n        <div *ngIf=\"data_not_found\">\r\n          <app-not-result-found></app-not-result-found>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n\r\n\r\n\r\n  <div class=\"fab-btns\">\r\n\r\n    <button\r\n      (click)=\"lastBtnValue('activity'); openDialog(lead_detail.type, lead_detail.id,lead_detail.company_name, lead_detail.name,'remark')\"\r\n      mat-fab color=\"primary\" [ngClass]=\"{'pulse': fabBtnValue=='activity'}\">\r\n      <i class=\"material-icons\">add</i>\r\n      Add Remark\r\n    </button>\r\n\r\n    <ng-container *ngIf=\"lead_detail.stage_level == 'Qualified'\">\r\n      <button *ngIf=\"login_data5.add_followup=='1'\"\r\n        (click)=\"lastBtnValue('follow_up'); openDialog(lead_detail.type, lead_detail.state,lead_detail.company_name, lead_detail.name,'followup')\"\r\n        mat-fab color=\"primary\" [ngClass]=\"{'pulse': fabBtnValue=='follow_up'}\">\r\n        <i class=\"material-icons\">add</i>\r\n        Add Followup\r\n      </button>\r\n    </ng-container>\r\n    <!--  -->\r\n    <button (click)=\"lastBtnValue('status'); changeStatus();\" mat-fab *ngIf=\"lead_detail.stage_level=='Pending' && login_data5.edit_virtual_lead=='1'\"\r\n    color=\"primary\" [ngClass]=\"{'pulse': fabBtnValue=='status'}\">\r\n    <i class=\"material-icons\">update</i>\r\n    Change Status\r\n  </button>\r\n    <button (click)=\"lastBtnValue('status'); changeStatusToLost();\" mat-fab *ngIf=\"lead_detail.stage_level=='Inprocess' || lead_detail.stage_level=='Qualified'\"\r\n      color=\"primary\" [ngClass]=\"{'pulse': fabBtnValue=='status'}\">\r\n      <i class=\"material-icons\">update</i>\r\n     Mark As Lost\r\n    </button>\r\n    <button (click)=\"lastBtnValue('status'); changeStatusToInProcess();\" mat-fab *ngIf=\"lead_detail.stage_level=='Lost'\"\r\n    color=\"primary\" [ngClass]=\"{'pulse': fabBtnValue=='status'}\">\r\n    <i class=\"material-icons\">update</i>\r\n   Mark As Inprocess\r\n  </button>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/lead/lead-detail/lead-detail.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/lead/lead-detail/lead-detail.component.ts ***!
  \***********************************************************/
/*! exports provided: LeadDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeadDetailComponent", function() { return LeadDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _router_animation_router_animation_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../router-animation/router-animation.component */ "./src/app/router-animation/router-animation.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_services_DatabaseService__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/_services/DatabaseService */ "./src/_services/DatabaseService.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var src_app_dialog_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/dialog.component */ "./src/app/dialog.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _lead_add_followup_model_lead_add_followup_model_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../lead-add-followup-model/lead-add-followup-model.component */ "./src/app/lead/lead-add-followup-model/lead-add-followup-model.component.ts");
/* harmony import */ var src_app_localstorage_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/localstorage.service */ "./src/app/localstorage.service.ts");
/* harmony import */ var _change_enquiry_status_change_enquiry_status_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../change-enquiry-status/change-enquiry-status.component */ "./src/app/lead/change-enquiry-status/change-enquiry-status.component.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! moment */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ng6-toastr-notifications */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/ng6-toastr-notifications/fesm5/ng6-toastr-notifications.js");













var LeadDetailComponent = /** @class */ (function () {
    function LeadDetailComponent(route, serve, router, dialog, session, alert, toast, _location) {
        var _this = this;
        this.route = route;
        this.serve = serve;
        this.router = router;
        this.dialog = dialog;
        this.session = session;
        this.alert = alert;
        this.toast = toast;
        this._location = _location;
        this.exp_loader = false;
        this.tabType = 'Profile';
        this.fabBtnValue = 'status';
        this.active = {};
        this.data = {};
        this.lead_detail = [];
        this.filter = {};
        this.loader = false;
        this.tabActiveType = {};
        this.data_not_found = false;
        this.followup_list = [];
        this.login_data = {};
        this.login_data5 = {};
        this.add = {};
        this.lead_logs = [];
        this.sr_no = 0;
        this.pagenumber = 1;
        this.start = 0;
        this.page_limit = serve.pageLimit;
        this.login_data = this.session.getSession();
        this.login_data = this.login_data.value;
        this.login_data5 = this.login_data.data;
        this.login_data = this.login_data.assignModule;
        console.log(this.login_data5);
        this.minDate = new Date();
        var index = this.login_data.findIndex(function (row) { return row.module_name == 'Lead Distributors'; });
        this.route.params.subscribe(function (params) {
            _this.lead_id = params.id;
            _this.serve.currentUserID = params.id;
        });
        this.leadDetail();
        this.userData = JSON.parse(localStorage.getItem('st_user'));
        this.userId = this.userData['data']['id'];
        this.userName = this.userData['data']['name'];
        this.tabActive('tab1');
    }
    LeadDetailComponent.prototype.backToList = function () {
        this._location.back();
    };
    LeadDetailComponent.prototype.tabActive = function (tab) {
        this.tabActiveType = {};
        this.tabActiveType[tab] = true;
    };
    LeadDetailComponent.prototype.ngOnInit = function () {
    };
    LeadDetailComponent.prototype.pervious = function () {
        this.start = this.start - this.page_limit;
        this.followupList();
    };
    LeadDetailComponent.prototype.nextPage = function () {
        this.start = this.start + this.page_limit;
        this.followupList();
    };
    LeadDetailComponent.prototype.refresh = function () {
        this.filter = {};
        this.followupList();
    };
    LeadDetailComponent.prototype.leadDetail = function () {
        var _this = this;
        this.loader = true;
        this.serve.post_rqst({ 'id': this.lead_id }, "Enquiry/enquiryDetail").subscribe(function (result) {
            if (result['statusCode'] == 200) {
                _this.lead_detail = result['enquiry_detail'];
                _this.lead_logs = result['enquiry_detail']['log'];
                setTimeout(function () {
                    _this.loader = false;
                }, 700);
            }
            else {
                _this.toast.errorToastr(result['statusMsg']);
                _this.loader = false;
            }
        });
    };
    LeadDetailComponent.prototype.openDialog = function (dr_type, value, company_name, name, type) {
        var _this = this;
        var dialogRef = this.dialog.open(_lead_add_followup_model_lead_add_followup_model_component__WEBPACK_IMPORTED_MODULE_8__["LeadAddFollowupModelComponent"], {
            width: '500px',
            panelClass: 'cs-modal',
            data: {
                dr_type: dr_type,
                value: value,
                type: type,
                name: name,
                company_name: company_name,
                id: this.lead_id,
                state: this.lead_detail.state,
                'user_id': this.lead_detail.user_id,
                'stage_level': this.lead_detail.stage_level
            }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result != false) {
                _this.leadDetail();
                _this.followupList();
            }
        });
    };
    LeadDetailComponent.prototype.followupList = function () {
        var _this = this;
        this.loader = true;
        if (this.pagenumber > this.total_page) {
            this.pagenumber = this.total_page;
            this.start = this.pageCount - this.page_limit;
        }
        if (this.start < 0) {
            this.start = 0;
        }
        if (this.filter.date_created) {
            this.filter.date_created = moment__WEBPACK_IMPORTED_MODULE_11__(this.filter.date_created).format('YYYY-MM-DD');
        }
        if (this.filter.next_follow_date) {
            this.filter.next_follow_date = moment__WEBPACK_IMPORTED_MODULE_11__(this.filter.next_follow_date).format('YYYY-MM-DD');
        }
        this.serve.post_rqst({ 'filter': this.filter, 'start': this.start, 'pagelimit': this.page_limit, 'dr_id': this.lead_id, 'dr_type': this.lead_detail.type, 'dr_type_name': 'Enquiry' }, "Enquiry/followupList").subscribe(function (result) {
            if (result['statusCode'] == 200) {
                _this.followup_list = result['result'];
                _this.loader = false;
                _this.pageCount = result['count'];
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
                if (_this.followup_list.length == 0) {
                    _this.data_not_found = true;
                }
                else {
                    _this.data_not_found = false;
                }
            }
            else {
                _this.toast.errorToastr(result['statusMsg']);
                _this.loader = false;
            }
        }, function (error) {
        });
    };
    LeadDetailComponent.prototype.changeStatus = function () {
        var _this = this;
        var dialogRef = this.dialog.open(_change_enquiry_status_change_enquiry_status_component__WEBPACK_IMPORTED_MODULE_10__["ChangeEnquiryStatusComponent"], {
            width: '600px',
            panelClass: 'cs-modal',
            data: {
                'id': this.lead_id,
                'user_employee_code': this.lead_detail.user_employee_code,
                'user_id': this.lead_detail.user_id,
                'user_name': this.lead_detail.user_name,
                'dr_type': this.lead_detail.type
            }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result != false) {
                _this.leadDetail();
                _this.followupList();
            }
        });
    };
    LeadDetailComponent.prototype.lastBtnValue = function (value) {
        this.fabBtnValue = value;
    };
    LeadDetailComponent.prototype.changeStatusToLost = function () {
        var _this = this;
        var dialogRef = this.dialog.open(_change_enquiry_status_change_enquiry_status_component__WEBPACK_IMPORTED_MODULE_10__["ChangeEnquiryStatusComponent"], {
            width: '600px',
            panelClass: 'cs-modal',
            data: {
                'id': this.lead_id,
                'user_employee_code': this.lead_detail.user_employee_code,
                'user_id': this.lead_detail.user_id,
                'user_name': this.lead_detail.user_name,
                'dr_type': this.lead_detail.type,
                'from': 'lead_detail'
            }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result != false) {
                _this.leadDetail();
                _this.followupList();
            }
        });
    };
    LeadDetailComponent.prototype.changeStatusToInProcess = function () {
        var _this = this;
        this.serve.post_rqst({ 'id': this.lead_id }, "Enquiry/stageChangeFromLostToInprocess").subscribe(function (result) {
            if (result['statusCode'] == 200) {
                _this.toast.successToastr(result['statusMsg']);
                _this.leadDetail();
            }
            else {
                _this.toast.errorToastr(result['statusMsg']);
            }
        });
    };
    LeadDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-lead-detail',
            template: __webpack_require__(/*! ./lead-detail.component.html */ "./src/app/lead/lead-detail/lead-detail.component.html"),
            animations: [Object(_router_animation_router_animation_component__WEBPACK_IMPORTED_MODULE_2__["slideToTop"])()],
            styles: ["agm-map { height: 300px; }"]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            src_services_DatabaseService__WEBPACK_IMPORTED_MODULE_4__["DatabaseService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialog"],
            src_app_localstorage_service__WEBPACK_IMPORTED_MODULE_9__["sessionStorage"],
            src_app_dialog_component__WEBPACK_IMPORTED_MODULE_6__["DialogComponent"],
            ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_12__["ToastrManager"],
            _angular_common__WEBPACK_IMPORTED_MODULE_7__["Location"]])
    ], LeadDetailComponent);
    return LeadDetailComponent;
}());



/***/ }),

/***/ "./src/app/lead/lead-list/lead-list.component.html":
/*!*********************************************************!*\
  !*** ./src/app/lead/lead-list/lead-list.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-container\">\r\n  <style>\r\n    .aging-dark td,\r\n    .aging-dark td a {\r\n      color: #ffffff !important;\r\n    }\r\n  </style>\r\n\r\n  <div class=\"tools-container\">\r\n    <h2>Digital Enquiry List</h2>\r\n    <div class=\"left-auto left-auto df ac flex-gap-10\">\r\n      <button mat-icon-button matTooltip=\"Excel\" (click)=\"openDialog() \">\r\n        <i class=\"material-icons\">filter</i>\r\n      </button>\r\n      <button mat-icon-button matTooltip=\"Filter\" (click)=\"openBottomSheet('digital_list') \">\r\n        <i class=\"material-icons\">filter_alt</i>\r\n      </button>\r\n      <button mat-icon-button matTooltip=\"Refresh\" (click)=\"refresh() \">\r\n        <i class=\"material-icons\">refresh</i>\r\n      </button>\r\n\r\n      <div class=\"pagination\" *ngIf=\"lead_List.length > 0 \">\r\n        <div class=\"pagination-content\">\r\n          Pages\r\n          <span>{{pagenumber}}</span>\r\n          of\r\n          <span>{{total_page}}</span>\r\n        </div>\r\n        <div class=\"page-nav\">\r\n          <button mat-icon-button matTooltip=\"Older\" (click)=\"pervious()\" [disabled]=\"start == 0 || total_page == 0\">\r\n            <i class=\"material-icons\">navigate_before</i>\r\n          </button>\r\n          <button mat-icon-button matTooltip=\"Newer\" (click)=\"nextPage()\"\r\n            [disabled]=\"pagenumber == total_page || total_page == 0\">\r\n            <i class=\"material-icons\">navigate_next</i>\r\n          </button>\r\n        </div>\r\n      </div>\r\n\r\n\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"tools-container\">\r\n\r\n    <div class=\"left-auto left-auto df ac flex-gap-10\">\r\n\r\n\r\n\r\n      <div class=\"mat-tabbar\" style=\"width: 100%;\">\r\n        <button mat-button [ngClass]=\"active_tab == 'Pending' ? 'active' : ''\"\r\n          (click)=\"active_tab = 'Pending'; leadList('Pending')\"><i class=\"material-icons\">pending_actions</i>Review\r\n          Pending ({{count.Pending ? count.Pending : '0'}})</button>\r\n        <button mat-button [ngClass]=\"active_tab == 'Reviewed' ? 'active' : ''\"\r\n          (click)=\"active_tab = 'Reviewed'; leadList('Reviewed')\"><i class=\"material-icons\">rate_review</i>Reviewed\r\n          ({{count.Reviewed ? count.Reviewed : '0'}})</button>\r\n        <button mat-button [ngClass]=\"active_tab == 'Qualified' ? 'active' : ''\"\r\n          (click)=\"active_tab = 'Qualified';leadList('Qualified')\"><i class=\"material-icons\">thumb_up_alt</i>Qualified\r\n          ({{count.Qualified ? count.Qualified : '0'}})</button>\r\n        <button mat-button [ngClass]=\"active_tab == 'Existing Customer' ? 'active' : ''\"\r\n          (click)=\"active_tab = 'Existing Customer';leadList('Existing Customer')\"><i\r\n            class=\"material-icons\">thumb_up_alt</i>Existing Customer\r\n          ({{count.Existing ? count.Existing : '0'}})</button>\r\n        <button mat-button [ngClass]=\"active_tab == 'Inprocess' ? 'active' : ''\"\r\n          (click)=\"active_tab = 'Inprocess';leadList('Inprocess')\"><i class=\"material-icons\">thumb_up_alt</i>InProcess\r\n          ({{count.Inprocess ? count.Inprocess : '0'}})</button>\r\n        <button mat-button [ngClass]=\"active_tab == 'Disqualified' ? 'active' : ''\"\r\n          (click)=\"active_tab = 'Disqualified'; leadList('Disqualified')\"><i\r\n            class=\"material-icons\">thumb_down_alt</i>Disqualified ({{count.Disqualified ? count.Disqualified :\r\n          '0'}})</button>\r\n        <button mat-button [ngClass]=\"active_tab == 'Win' ? 'active' : ''\"\r\n          (click)=\"active_tab = 'Win'; leadList('Win')\"><i class=\"material-icons\">emoji_events</i>Win\r\n          ({{count.Win ? count.Win : '0'}})</button>\r\n        <button mat-button [ngClass]=\"active_tab == 'Lost' ? 'active' : ''\"\r\n          (click)=\"active_tab = 'Lost'; leadList('Lost')\"><i class=\"material-icons\">cancel</i>Lost\r\n          ({{count.Lost ? count.Lost : '0'}})</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"tools-container\"\r\n    style=\"padding: 12px 15px; background: #fff; border-bottom: 1px solid #e0e0e0; margin-top: 5px;\">\r\n    <div style=\"display: flex; align-items: center; gap: 20px; flex-wrap: wrap;\">\r\n      <span\r\n        style=\"font-weight: 700; color: #444; font-size: 13px; text-transform: uppercase; letter-spacing: 0.5px;\">Aging\r\n        Legends:</span>\r\n\r\n      <div style=\"display: flex; align-items: center; gap: 8px; white-space: nowrap;\">\r\n        <span\r\n          style=\"width: 14px; height: 14px; border-radius: 3px; background: #ffffff; border: 1px solid #ccc; display: inline-block;\"></span>\r\n        <span style=\"font-size: 12px; font-weight: 500;\">Day 1 (Fresh)</span>\r\n      </div>\r\n\r\n      <div style=\"display: flex; align-items: center; gap: 8px; white-space: nowrap;\">\r\n        <span\r\n          style=\"width: 14px; height: 14px; border-radius: 3px; background: #FFF9C4; border: 1px solid #ccc; display: inline-block;\"></span>\r\n        <span style=\"font-size: 12px; font-weight: 500;\">Day 2</span>\r\n      </div>\r\n\r\n      <div style=\"display: flex; align-items: center; gap: 8px; white-space: nowrap;\">\r\n        <span\r\n          style=\"width: 14px; height: 14px; border-radius: 3px; background: #FFCDD2; border: 1px solid #ccc; display: inline-block;\"></span>\r\n        <span style=\"font-size: 12px; font-weight: 500;\">Day 3</span>\r\n      </div>\r\n\r\n      <div style=\"display: flex; align-items: center; gap: 8px; white-space: nowrap;\">\r\n        <span\r\n          style=\"width: 14px; height: 14px; border-radius: 3px; background: #EF5350; border: 1px solid #ccc; display: inline-block;\"></span>\r\n        <span style=\"font-size: 12px; font-weight: 500;\">Day 4</span>\r\n      </div>\r\n\r\n      <div style=\"display: flex; align-items: center; gap: 8px; white-space: nowrap;\">\r\n        <span\r\n          style=\"width: 14px; height: 14px; border-radius: 3px; background: #C62828; border: 1px solid #ccc; display: inline-block;\"></span>\r\n        <span style=\"font-size: 12px; font-weight: 500;\">Day 5+</span>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"container container-scroll\" style=\"padding-bottom: 40px;\">\r\n    <!-- Sub-Tabs for Win -->\r\n    <div class=\"tools-container no-sticky\" *ngIf=\"active_tab == 'Win'\">\r\n      <div class=\"mat-tabbar\">\r\n        <button mat-button [ngClass]=\"sub_active_tab == 'cmwin' ? 'active' : ''\"\r\n          (click)=\"sub_active_tab = 'cmwin'; leadList('Win')\">\r\n          <i class=\"material-icons\">emoji_events</i>CM Win ({{ count.cmwin ? count.cmwin : '0' }})\r\n        </button>\r\n        <button mat-button [ngClass]=\"sub_active_tab == 'total_win' ? 'active' : ''\"\r\n          (click)=\"sub_active_tab = 'total_win'; leadList('Win')\">\r\n          <i class=\"material-icons\">emoji_events</i>Total Win ({{ count.total_win ? count.total_win : '0' }})\r\n        </button>\r\n        <button class=\"mr16\" matTooltip=\"Download\" (click)=\"openBottomSheet('lead')\" mat-raised-button color=\"accent\"><i\r\n            class=\"material-icons\">download</i>\r\n          Download Enquiry Date Order</button>\r\n        <button class=\"mr16\" matTooltip=\"Download\" (click)=\"openBottomSheet('order')\" mat-raised-button\r\n          color=\"accent\"><i class=\"material-icons\">download</i>\r\n          Download Order Created Date</button>\r\n      </div>\r\n\r\n    </div>\r\n    <div class=\"cs-table horizontal-scroll\" style=\"margin-bottom: 70px\">\r\n      <div class=\"sticky-head\">\r\n        <div class=\"table-head\">\r\n          <table>\r\n            <tr>\r\n              <th class=\"w40\">Sr.No</th>\r\n              <th class=\"w220\">Date</th>\r\n              <th class=\"w160\">Created By</th>\r\n              <th class=\"w100\">Profile type</th>\r\n              <th class=\"w100\">Enquiry ID</th>\r\n              <th class=\"w120\">Campaign ID</th>\r\n              <th class=\"w200\">Assigned To</th>\r\n              <th class=\"w100\">Source</th>\r\n              <th class=\"w150\">Name</th>\r\n              <th class=\"w120\">Mobile Number</th>\r\n              <th class=\"w100\">City</th>\r\n              <th class=\"w100\">District</th>\r\n              <th class=\"w100\">State</th>\r\n              <th class=\"w220\">Remark</th>\r\n              <th class=\"w100\" *ngIf=\"active_tab == 'Win' || active_tab == 'Existing Customer'\">Order Date</th>\r\n              <th class=\"w100\" *ngIf=\"active_tab == 'Win' || active_tab == 'Existing Customer'\">Order Id</th>\r\n              <th class=\"w220\">Purpose</th>\r\n              <th class=\"w100\" *ngIf=\"active_tab != 'Pending' && active_tab != 'Qualified'\">Total Checkin</th>\r\n              <th class=\"w100\" *ngIf=\"active_tab != 'Pending' && active_tab != 'Qualified'\">Last Checkin</th>\r\n              <th class=\"w120\" *ngIf=\"active_tab != 'Pending' && active_tab != 'Qualified'\">Last Checkin By</th>\r\n              <th class=\"w100\">Last Activity Name</th>\r\n              <th class=\"w100\">Last Activity Date</th>\r\n              <th class=\"w200\" *ngIf=\"active_tab == 'Disqualified' \">Reason</th>\r\n              <th class=\"w70 text-center\" *ngIf=\"login_data5.edit_virtual_lead=='1'\">Action\r\n              </th>\r\n            </tr>\r\n          </table>\r\n        </div>\r\n\r\n        <div class=\"table-head border-top\">\r\n          <table>\r\n            <tr>\r\n              <th class=\"w40\">\r\n                <div class=\"th-search-acmt\">\r\n                  <mat-form-field class=\"example-full-width cs-input select-input\">\r\n                    <mat-select name=\"days_pending\" [(ngModel)]=\"filter.days_pending\"\r\n                      (selectionChange)=\"leadList(active_tab)\">\r\n                      <mat-option value=\"\">All Age</mat-option>\r\n                      <mat-option value=\"1\">1 Day</mat-option>\r\n                      <mat-option value=\"2\">2 Days</mat-option>\r\n                      <mat-option value=\"3\">3 Days</mat-option>\r\n                      <mat-option value=\"4\">4 Days</mat-option>\r\n                      <mat-option value=\"5\">5+ Days</mat-option>\r\n                    </mat-select>\r\n                  </mat-form-field>\r\n                </div>\r\n              </th>\r\n              <th class=\"w220\">\r\n                <div class=\"th-search-acmt\" style=\"display: flex; gap: 4px;\">\r\n                  <mat-form-field class=\"cs-input date-column infix-bodr\" style=\"width: 50%;\">\r\n                    <input matInput [matDatepicker]=\"pickerFrom\" placeholder=\"From Date\" name=\"date_from\"\r\n                      [(ngModel)]=\"filter.date_from\" (dateChange)=\"date_format('date_from')\" [max]=\"today_date\" disabled>\r\n                    <mat-datepicker-toggle matSuffix [for]=\"pickerFrom\"></mat-datepicker-toggle>\r\n                    <mat-datepicker #pickerFrom disabled=\"false\"></mat-datepicker>\r\n                  </mat-form-field>\r\n                  <mat-form-field class=\"cs-input date-column infix-bodr\" style=\"width: 50%;\">\r\n                    <input matInput [matDatepicker]=\"pickerTo\" placeholder=\"To Date\" name=\"date_to\"\r\n                      [(ngModel)]=\"filter.date_to\" (dateChange)=\"date_format('date_to')\" [max]=\"today_date\" disabled>\r\n                    <mat-datepicker-toggle matSuffix [for]=\"pickerTo\"></mat-datepicker-toggle>\r\n                    <mat-datepicker #pickerTo disabled=\"false\"></mat-datepicker>\r\n                  </mat-form-field>\r\n                </div>\r\n              </th>\r\n              <th class=\"w160\">\r\n                <div class=\"th-search-acmt\">\r\n                  <mat-form-field class=\"example-full-width cs-input select-input\">\r\n                    <mat-label>Select User...</mat-label>\r\n                    <mat-select name=\"created_by_name\" [(ngModel)]=\"filter.created_by_name\" (selectionChange)=\"leadList(active_tab)\">\r\n                      <mat-option value=\"\">All</mat-option>\r\n                      <mat-option *ngFor=\"let row of report_manager\" [value]=\"row.name\">{{row.name}}</mat-option>\r\n                    </mat-select>\r\n                  </mat-form-field>\r\n                </div>\r\n              </th>\r\n              <th class=\"w100\">\r\n                <div class=\"th-search-acmt\">\r\n                  <mat-form-field class=\"example-full-width cs-input select-input\">\r\n                    <mat-label>Select...</mat-label>\r\n                    <mat-select name=\"enquiry_type\" #enquiry_type=\"ngModel\" [(ngModel)]=\"filter.enquiry_type\"\r\n                      (selectionChange)=\"leadList(active_tab)\">\r\n                      <mat-option *ngFor=\"let item of influencerType\" [value]=\"item.type\">\r\n                        <ng-container *ngIf=\"item.type !== 1\">{{ item.module_name }}</ng-container>\r\n                        <ng-container *ngIf=\"item.type === 1\">prospect cp</ng-container>\r\n                      </mat-option>\r\n                    </mat-select>\r\n                  </mat-form-field>\r\n                </div>\r\n              </th>\r\n\r\n              <th class=\"w100\">\r\n                <div class=\"th-search-acmt\">\r\n                  <mat-form-field class=\"example-full-width cs-input select-input\">\r\n                    <input matInput placeholder=\"Search...\" type=\"text\" name=\"enquiry_id\"\r\n                      [(ngModel)]=\"filter.enquiry_id\" (keyup.enter)=\"leadList(active_tab)\">\r\n                  </mat-form-field>\r\n                </div>\r\n              </th>\r\n              <th class=\"w120\">\r\n                <div class=\"th-search-acmt\">\r\n                  <mat-form-field class=\"example-full-width cs-input select-input\">\r\n                    <input matInput placeholder=\"Search...\" type=\"text\" name=\"campaignID\"\r\n                      [(ngModel)]=\"filter.campaignID\" (keyup.enter)=\"leadList(active_tab)\">\r\n                  </mat-form-field>\r\n                </div>\r\n              </th>\r\n              <th class=\"w200\">\r\n                <div class=\"th-search-acmt\">\r\n                  <mat-form-field class=\"example-full-width cs-input select-input\">\r\n                    <input matInput placeholder=\"Search...\" type=\"text\" name=\"user_name\" [(ngModel)]=\"filter.user_name\"\r\n                      (keyup.enter)=\"leadList(active_tab)\">\r\n                  </mat-form-field>\r\n                </div>\r\n              </th>\r\n              <th class=\"w100\">\r\n                <div class=\"th-search-acmt\">\r\n                  <mat-form-field class=\"example-full-width cs-input select-input\">\r\n                    <input matInput placeholder=\"Search...\" type=\"text\" name=\"source\" [(ngModel)]=\"filter.source\"\r\n                      (keyup.enter)=\"leadList(active_tab)\">\r\n                  </mat-form-field>\r\n                </div>\r\n              </th>\r\n              <th class=\"w150\">\r\n                <div class=\"th-search-acmt\">\r\n                  <mat-form-field class=\"example-full-width cs-input select-input\">\r\n                    <input matInput placeholder=\"Search...\" type=\"text\" name=\"name\" [(ngModel)]=\"filter.name\"\r\n                      (keyup.enter)=\"leadList(active_tab)\">\r\n                  </mat-form-field>\r\n                </div>\r\n              </th>\r\n              <th class=\"w120\">\r\n                <div class=\"th-search-acmt\">\r\n                  <mat-form-field class=\"example-full-width cs-input select-input\">\r\n                    <input matInput placeholder=\"Search...\" type=\"text\" name=\"mobile_number\" [(ngModel)]=\"filter.mobile\"\r\n                      (keyup.enter)=\"leadList(active_tab)\">\r\n                  </mat-form-field>\r\n                </div>\r\n              </th>\r\n              <th class=\"w100\">\r\n                <div class=\"th-search-acmt\">\r\n                  <mat-form-field class=\"example-full-width cs-input select-input\">\r\n                    <input matInput placeholder=\"Search...\" type=\"text\" name=\"city\" [(ngModel)]=\"filter.city\"\r\n                      (keyup.enter)=\"leadList(active_tab)\">\r\n                  </mat-form-field>\r\n                </div>\r\n              </th>\r\n              <th class=\"w100\">\r\n                <div class=\"th-search-acmt\">\r\n                  <mat-form-field class=\"example-full-width cs-input select-input\">\r\n                    <input matInput placeholder=\"Search...\" type=\"text\" name=\"district\" [(ngModel)]=\"filter.district\"\r\n                      (keyup.enter)=\"leadList(active_tab)\">\r\n                  </mat-form-field>\r\n                </div>\r\n              </th>\r\n              <th class=\"w100\">\r\n                <div class=\"th-search-acmt\">\r\n                  <mat-form-field class=\"example-full-width cs-input select-input\">\r\n                    <input matInput placeholder=\"Search...\" type=\"text\" name=\"state\" [(ngModel)]=\"filter.state\"\r\n                      (keyup.enter)=\"leadList(active_tab)\">\r\n                  </mat-form-field>\r\n                </div>\r\n              </th>\r\n              <th class=\"w220\">\r\n                <!-- <div class=\"th-search-acmt\">\r\n                  <mat-form-field class=\"example-full-width cs-input select-input\">\r\n                    <input matInput placeholder=\"Search...\" type=\"text\" name=\"msg\" [(ngModel)]=\"filter.msg\"\r\n                      (keyup.enter)=\"leadList(active_tab)\">\r\n                  </mat-form-field>\r\n                </div> -->\r\n              </th>\r\n              <th class=\"w100\" *ngIf=\"active_tab == 'Win' || active_tab == 'Existing Customer'\">&nbsp;</th>\r\n              <th class=\"w100\" *ngIf=\"active_tab == 'Win' || active_tab == 'Existing Customer'\">&nbsp;</th>\r\n              <th class=\"w220\">&nbsp;</th>\r\n              <th class=\"w100\" *ngIf=\"active_tab != 'Pending' && active_tab != 'Qualified'\">&nbsp;</th>\r\n              <th class=\"w100\" *ngIf=\"active_tab != 'Pending' && active_tab != 'Qualified'\">&nbsp;</th>\r\n              <th class=\"w120\" *ngIf=\"active_tab != 'Pending' && active_tab != 'Qualified'\">&nbsp;</th>\r\n              <th class=\"w100\">\r\n                <div class=\"th-search-acmt\">\r\n                  <mat-form-field class=\"example-full-width cs-input select-input\">\r\n                    <input matInput placeholder=\"Search...\" type=\"text\" name=\"last_activity_name\"\r\n                      [(ngModel)]=\"filter.last_activity_name\" (keyup.enter)=\"leadList(active_tab)\">\r\n                  </mat-form-field>\r\n                </div>\r\n              </th>\r\n              <th class=\"w100\">\r\n                <div class=\"th-search-acmt\">\r\n                  <mat-form-field class=\"cs-input date-column infix-bodr\">\r\n                    <input matInput [matDatepicker]=\"picker_last_activity\" placeholder=\"Date\" name=\"last_activity_date\"\r\n                      [(ngModel)]=\"filter.last_activity_date\" (dateChange)=\"date_format_last_activity()\"\r\n                      [max]=\"today_date\" disabled>\r\n                    <mat-datepicker-toggle matSuffix [for]=\"picker_last_activity\"></mat-datepicker-toggle>\r\n                    <mat-datepicker #picker_last_activity disabled=\"false\"></mat-datepicker>\r\n                  </mat-form-field>\r\n                </div>\r\n              </th>\r\n              <th class=\"w200\" *ngIf=\"active_tab == 'Disqualified' \">&nbsp;</th>\r\n              <th class=\"w70 text-center\" *ngIf=\"login_data5.edit_virtual_lead=='1'\">\r\n                &nbsp;\r\n              </th>\r\n            </tr>\r\n          </table>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"table-container\">\r\n        <div class=\"table-content\">\r\n          <table>\r\n            <ng-container *ngIf=\"!loader\">\r\n              <tr *ngFor=\"let row of lead_List; let i = index;\"\r\n                [ngClass]=\"{'Current': serve.currentUserID == row.id, 'no-action': row.enquiry_flag == 'red', 'aging-dark': row.days_diff >= 3}\"\r\n                [style.background-color]=\"row.days_diff == 0 ? '#ffffff' : (row.days_diff == 1 ? '#FFF9C4' : (row.days_diff == 2 ? '#FFCDD2' : (row.days_diff == 3 ? '#EF5350' : (row.days_diff >= 4 ? '#C62828' : ''))))\">\r\n                <td class=\"w40\">{{i+1+sr_no}}</td>\r\n                <td class=\"w220\">{{row.date_created | date:'dd MMM yyyy'}}</td>\r\n                <td class=\"w160\">{{row.created_by_name}}</td>\r\n                <td class=\"w100\">{{row.influencer_type}}</td>\r\n                <td class=\"w100\"><a class=\"link-btn\" (click)=\"saveFilterAndPage()\"\r\n                    routerLink=\"lead-detail/{{row.id}}\">{{row.enquiry_id}}</a></td>\r\n                <td class=\"w120\">{{row.campaignID ? row.campaignID : '--'}}</td>\r\n                <td class=\"w200\">{{row.assigned_to_user_name}} - {{row.emp_code}}</td>\r\n                <td class=\"w100\">{{row.source}}</td>\r\n                <td class=\"w150\">{{row.name}}</td>\r\n                <td class=\"w120\">{{row.mobile}}</td>\r\n\r\n                <td class=\"w100\">{{row.city}}</td>\r\n                <td class=\"w100\">{{row.district}}</td>\r\n                <td class=\"w100\">{{row.state}}</td>\r\n                <td class=\"w220\" *ngIf=\"row.log.length > 0\">\r\n                {{row.log[row.log.length - 1].changes_by_name}} -\r\n                {{row.log[row.log.length - 1].date_created | date:'dd MMM yyyy hh:mm a'}} -\r\n                {{row.log[row.log.length - 1].msg ? row.log[row.log.length - 1].msg : row.log[row.log.length - 1].remark}}\r\n              </td>\r\n                <td class=\"w220\" *ngIf=\"row.log.length==0\"></td>\r\n                <td class=\"w100\" *ngIf=\"active_tab == 'Win' || active_tab == 'Existing Customer'\">{{row.order_date|\r\n                  date:'dd MMM yyyy'}}</td>\r\n                <td class=\"w100 text-center link-clr\" *ngIf=\"active_tab == 'Win' || active_tab == 'Existing Customer'\">\r\n                  <span *ngFor=\"let orderId of splitOrderIds(row.order_id)\" [ngClass]=\"orderId ? 'pointer' : ''\"\r\n                    (click)=\"orderId ? goToPage('order', orderId, row.order_type) : ''\">\r\n                    {{ orderId ? ('#' + orderId) : '---' }}\r\n                    <span *ngIf=\"!orderId\">---</span>\r\n                  </span>\r\n                </td>\r\n\r\n\r\n                <td class=\"w220\">{{row.purpose}}</td>\r\n                <td class=\"w100 text-center\" *ngIf=\"active_tab != 'Pending' && active_tab != 'Qualified'\">\r\n                  {{row.total_checkins}}</td>\r\n                <td class=\"w100\" *ngIf=\"active_tab != 'Pending' && active_tab != 'Qualified'\">\r\n                  {{row.last_checkin!=='0000-00-00 00:00:00'?(row.last_checkin | date:'dd MMM yyyy'):'--\r\n                  -- ----'}}</td>\r\n                <td class=\"w120\" *ngIf=\"active_tab != 'Pending' && active_tab != 'Qualified'\">\r\n                  {{row.last_checkin_by_name ? row.last_checkin_by_name : '--'}}</td>\r\n                <td class=\"w100\">\r\n                  <span *ngIf=\"row.log.length>0\">{{row.log[row.log.length - 1].changes_by_name}}</span>\r\n                  <span *ngIf=\"row.log.length==0\">--</span>\r\n                </td>\r\n                <td class=\"w100\">\r\n                  <span *ngIf=\"row.log.length>0\">{{row.log[row.log.length - 1].date_created | date:'dd MMM\r\n                    yyyy'}}</span>\r\n                  <span *ngIf=\"row.log.length==0\">--</span>\r\n                </td>\r\n                <td class=\"w200\" *ngIf=\"active_tab == 'Disqualified' \">{{row.description}}</td>\r\n                <td class=\"w70 text-center\" *ngIf=\"login_data5.edit_virtual_lead=='1'\">\r\n                  <div class=\"action-button\">\r\n                    <!-- <button mat-icon-button matTooltip=\"Change Status\"\r\n                      (click)=\"changeStatus(row.id, row.name, row.enquiry_id)\" *ngIf=\"active_tab == 'Pending'\">\r\n                      <i class=\"material-icons edit\">change_circle</i>\r\n                    </button> -->\r\n                    <button mat-icon-button matTooltip=\"Delete\" (click)=\"delete(row.id)\">\r\n                      <i class=\"material-icons del\">delete</i>\r\n                    </button>\r\n                  </div>\r\n                </td>\r\n\r\n              </tr>\r\n            </ng-container>\r\n            <ng-container *ngIf=\"loader\">\r\n              <tr class=\"sk-loading\" *ngFor=\"let row of [].constructor(10)\">\r\n                <td class=\"w40\">\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n                <td class=\"w90\">\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n                <td class=\"w80\">\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n                <td class=\"w100\">\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n                <td class=\"w100\">\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n                <td class=\"w100\" *ngIf=\"active_tab == 'qualified'\">\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n                <td class=\"w100\">\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n                <td class=\"w150\">\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n                <td class=\"w120\">\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n                <td class=\"w220\">\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n                <td class=\"w200\" *ngIf=\"active_tab == 'disqualified' \">\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n                <td class=\"w90\" *ngIf=\"active_tab == 'qualified' \">\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n                <td class=\"w100\">\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n                <td class=\"w100\">\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n                <td class=\"w70\">\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n              </tr>\r\n            </ng-container>\r\n          </table>\r\n        </div>\r\n      </div>\r\n\r\n\r\n      <div *ngIf=\"datanotfound == true\">\r\n        <app-not-result-found></app-not-result-found>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n\r\n\r\n  <div class=\"fab-btns\">\r\n    <button class=\"pulse excel\" mat-fab\r\n      *ngIf=\"login_data5.export_virtual_lead=='1' || login_data5.edit_virtual_lead=='1' || login_data5.add_virtual_lead=='1'\"\r\n      color=\"primary\" [ngClass]=\"{'pulse': fabBtnValue=='add'}\" [matMenuTriggerFor]=\"menu\"\r\n      (click)=\"lastBtnValue('upload');\">\r\n      <i class=\"material-icons\">apps</i>\r\n      Action\r\n    </button>\r\n    <mat-menu #menu=\"matMenu\">\r\n      <button *ngIf=\"login_data5.export_virtual_lead=='1'\" mat-menu-item (click)=\"exportAsXLSX(active_tab);\">\r\n        <mat-icon>download</mat-icon>\r\n        <span>Download Excel</span>\r\n      </button>\r\n      <button *ngIf=\"login_data5.export_virtual_lead=='1'\" mat-menu-item (click)=\"downloadOrderReport(active_tab);\">\r\n        <mat-icon>download</mat-icon>\r\n        <span>Download Excel (Order Wise)</span>\r\n      </button>\r\n      <button *ngIf=\"login_data5.export_virtual_lead=='1'\" mat-menu-item (click)=\"downloadItemReport(active_tab);\">\r\n        <mat-icon>download</mat-icon>\r\n        <span>Download Excel (Item Wise)</span>\r\n      </button>\r\n      <button *ngIf=\"login_data5.export_virtual_lead=='1'\" mat-menu-item (click)=\"upload_excel('update_assign');\">\r\n        <mat-icon>update</mat-icon>\r\n        <span>Upload Assign Users</span>\r\n      </button>\r\n      <!-- <button *ngIf=\"login_data5.import_enquiry=='1'\" mat-menu-item (click)=\"upload_excel('insert');\">\r\n        <mat-icon>cloud_upload</mat-icon>\r\n        <span>Upload New Data</span>\r\n      </button> -->\r\n      <!-- <button *ngIf=\"login_data5.import_enquiry=='1'\" mat-menu-item (click)=\"upload_excel('update');\">\r\n        <mat-icon>update</mat-icon>\r\n        <span>Update Existing Data</span>\r\n      </button> -->\r\n      <button *ngIf=\"login_data5.add_virtual_lead=='1'\" mat-menu-item routerLink=\"add-lead\"\r\n        (click)=\"lastBtnValue('add')\" [ngClass]=\"{'pulse': fabBtnValue=='add'}\">\r\n        <mat-icon>add</mat-icon>\r\n        Add New\r\n      </button>\r\n    </mat-menu>\r\n  </div>\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/lead/lead-list/lead-list.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/lead/lead-list/lead-list.component.ts ***!
  \*******************************************************/
/*! exports provided: LeadListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeadListComponent", function() { return LeadListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _router_animation_router_animation_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../router-animation/router-animation.component */ "./src/app/router-animation/router-animation.component.ts");
/* harmony import */ var src_services_DatabaseService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/_services/DatabaseService */ "./src/_services/DatabaseService.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_dialog_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/dialog.component */ "./src/app/dialog.component.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! moment */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var src_app_localstorage_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/localstorage.service */ "./src/app/localstorage.service.ts");
/* harmony import */ var src_app_upload_file_modal_upload_file_modal_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/upload-file-modal/upload-file-modal.component */ "./src/app/upload-file-modal/upload-file-modal.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _change_enquiry_status_change_enquiry_status_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../change-enquiry-status/change-enquiry-status.component */ "./src/app/lead/change-enquiry-status/change-enquiry-status.component.ts");
/* harmony import */ var ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ng6-toastr-notifications */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/ng6-toastr-notifications/fesm5/ng6-toastr-notifications.js");
/* harmony import */ var src_app_bottom_sheet_bottom_sheet_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/bottom-sheet/bottom-sheet.component */ "./src/app/bottom-sheet/bottom-sheet.component.ts");
/* harmony import */ var src_app_order_status_modal_status_modal_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/order/status-modal/status-modal.component */ "./src/app/order/status-modal/status-modal.component.ts");














var LeadListComponent = /** @class */ (function () {
    function LeadListComponent(serve, toast, dialog, alrt, router, route, session, bottomSheet) {
        var _this = this;
        this.serve = serve;
        this.toast = toast;
        this.dialog = dialog;
        this.alrt = alrt;
        this.router = router;
        this.route = route;
        this.session = session;
        this.bottomSheet = bottomSheet;
        this.active_tab = 'Pending';
        this.fabBtnValue = 'add';
        this.lead_List = [];
        this.datanotfound = true;
        this.type_id = 1;
        this.loader = false;
        this.data = [];
        this.value = {};
        this.data_not_found = false;
        this.search_val = {};
        this.sub_active_tab = 'cmwin';
        this.count_list = {};
        this.login_data = {};
        this.login_data5 = {};
        this.add = {};
        this.filter = {};
        this.enquiryList = [];
        this.sr_no = 0;
        this.pagenumber = 1;
        this.start = 0;
        this.count = {};
        this.report_manager = [];
        this.page_limit = this.serve.pageLimit;
        this.login_data = this.session.getSession();
        this.login_data = this.login_data.value;
        this.login_data5 = this.login_data.data;
        this.downurl = serve.downloadUrl;
        this.route.params.subscribe(function (params) {
            _this.today_date = new Date().toISOString().slice(0, 10);
            _this.type_id = params.id;
            _this.type = params.type;
        });
        this.getReportManager('');
    }
    LeadListComponent.prototype.getReportManager = function (search) {
        var _this = this;
        this.serve.post_rqst({ 'search': search }, "Checkin/getSalesUserForReporting").subscribe((function (result) {
            if (result['all_sales_user']['statusCode'] == 200) {
                _this.report_manager = result['all_sales_user']['all_sales_user'];
            }
        }));
    };
    LeadListComponent.prototype.ngOnInit = function () {
        this.filter = this.serve.getData();
        if (this.filter.status) {
            this.active_tab = this.filter.status;
        }
        if (this.filter.sub_status) {
            this.sub_active_tab = this.filter.sub_status;
        }
        if (this.filter.start !== undefined && this.filter.start !== null) {
            this.start = this.filter.start;
        }
        this.leadList(this.active_tab);
        this.influencer_type();
        // this.PageType = this.route.queryParams['pageFrom'];
        // console.log(this.PageType)
    };
    LeadListComponent.prototype.saveFilterAndPage = function () {
        this.filter.start = this.start;
        this.filter.sub_status = this.sub_active_tab;
        this.serve.setData(this.filter);
    };
    LeadListComponent.prototype.pervious = function () {
        this.start = this.start - this.page_limit;
        this.leadList(this.active_tab);
    };
    LeadListComponent.prototype.nextPage = function () {
        this.start = this.start + this.page_limit;
        this.leadList(this.active_tab);
    };
    LeadListComponent.prototype.date_format = function (type) {
        if (type === void 0) { type = 'date_created'; }
        if (type == 'date_from') {
            this.filter.date_from = moment__WEBPACK_IMPORTED_MODULE_6__(this.filter.date_from).format('YYYY-MM-DD');
        }
        else if (type == 'date_to') {
            this.filter.date_to = moment__WEBPACK_IMPORTED_MODULE_6__(this.filter.date_to).format('YYYY-MM-DD');
        }
        else {
            this.filter.date_created = moment__WEBPACK_IMPORTED_MODULE_6__(this.filter.date_created).format('YYYY-MM-DD');
        }
        this.leadList(this.active_tab);
    };
    LeadListComponent.prototype.date_format_last_activity = function () {
        this.filter.last_activity_date = moment__WEBPACK_IMPORTED_MODULE_6__(this.filter.last_activity_date).format('YYYY-MM-DD');
        this.leadList(this.active_tab);
    };
    LeadListComponent.prototype.influencer_type = function () {
        var _this = this;
        this.serve.post_rqst({}, "Enquiry/leadNetworkModule").subscribe(function (result) {
            if (result['statusCode'] == 200) {
                _this.influencerType = result['modules'];
            }
            else {
                _this.toast.errorToastr(result['statusMsg']);
            }
        });
    };
    LeadListComponent.prototype.goToPage = function (type, id, orderType) {
        console.log(orderType);
        console.log(id);
        if (type == 'order' && orderType != 'Primary') {
            this.router.navigate(['/secondary-order-list/secondary-order-detail/' + id]);
        }
        else {
            console.log("inside else");
            this.router.navigate(['/order-list/order-detail/' + id]);
        }
    };
    LeadListComponent.prototype.leadList = function (status) {
        var _this = this;
        this.loader = true;
        if (this.search_val.modified_date) {
            this.search_val.modified_date = moment__WEBPACK_IMPORTED_MODULE_6__(this.search_val.modified_date).format('YYYY-MM-DD');
        }
        if (this.pagenumber > this.total_page) {
            this.pagenumber = this.total_page;
            this.start = this.pageCount - this.page_limit;
        }
        if (this.start < 0) {
            this.start = 0;
        }
        this.filter.status = status;
        this.filter.sub_status = this.sub_active_tab;
        this.serve.post_rqst({ 'filter': this.filter, 'start': this.start, 'pagelimit': this.page_limit }, "Enquiry/enquiryList")
            .subscribe((function (result) {
            if (result['statusCode'] == 200) {
                _this.lead_List = result['enquiry_list'];
                _this.count = result['count'];
                // this.count = result['count'];
                if (_this.lead_List.length == 0) {
                    _this.datanotfound = true;
                }
                else {
                    _this.datanotfound = false;
                }
                _this.pagenumber = Math.ceil(_this.start / _this.page_limit) + 1;
                if (status == 'Pending') {
                    _this.pageCount = _this.count.Pending;
                    _this.total_page = Math.ceil(parseInt(_this.pageCount) / _this.page_limit);
                }
                else if (status == 'Reviewed') {
                    _this.pageCount = _this.count.Reviewed;
                    _this.total_page = Math.ceil(parseInt(_this.pageCount) / _this.page_limit);
                }
                else if (status == 'Qualified') {
                    _this.pageCount = _this.count.Qualified;
                    _this.total_page = Math.ceil(parseInt(_this.pageCount) / _this.page_limit);
                }
                else if (status == 'Inprocess') {
                    _this.pageCount = _this.count.Inprocess;
                    _this.total_page = Math.ceil(parseInt(_this.pageCount) / _this.page_limit);
                }
                else if (status == 'Existing Customer') {
                    _this.pageCount = _this.count.Existing;
                    _this.total_page = Math.ceil(parseInt(_this.pageCount) / _this.page_limit);
                }
                else if (status == 'Disqualified') {
                    _this.pageCount = _this.count.Disqualified;
                    _this.total_page = Math.ceil(parseInt(_this.pageCount) / _this.page_limit);
                }
                else if (status == 'Win') {
                    if (_this.sub_active_tab === 'cmwin') {
                        _this.pageCount = _this.count.cmwin;
                    }
                    else if (_this.sub_active_tab === 'total_win') {
                        _this.pageCount = _this.count.total_win;
                    }
                    else {
                        _this.pageCount = _this.count.Win;
                    }
                    _this.total_page = Math.ceil(parseInt(_this.pageCount) / _this.page_limit);
                }
                else {
                    _this.pageCount = _this.count.Lost;
                    _this.total_page = Math.ceil(parseInt(_this.pageCount) / _this.page_limit);
                }
                if (_this.pagenumber > _this.total_page) {
                    _this.pagenumber = _this.total_page;
                    _this.start = _this.pageCount - _this.page_limit;
                }
                else {
                    _this.pagenumber = Math.ceil(_this.start / _this.page_limit) + 1;
                }
                // this.serve.count_list();
                setTimeout(function () {
                    _this.loader = false;
                }, 700);
                if (_this.lead_List.length == 0) {
                    _this.data_not_found = true;
                }
                else {
                    _this.data_not_found = false;
                }
                _this.sr_no = _this.pagenumber - 1;
                _this.sr_no = _this.sr_no * _this.page_limit;
                _this.loader = false;
                console.log(_this.count.Pending);
            }
            else {
                _this.toast.errorToastr(result['statusMsg']);
                _this.loader = false;
            }
        }));
    };
    LeadListComponent.prototype.delete = function (id) {
        var _this = this;
        this.dialog.delete('Digital Enquiry!').then(function (result) {
            if (result) {
                _this.serve.post_rqst({ 'id': id }, "Enquiry/deleteEnquiry").subscribe(function (result) {
                    if (result['statusCode'] == 200) {
                        _this.toast.successToastr(result['statusMsg']);
                        _this.leadList(_this.active_tab);
                    }
                    else {
                        _this.toast.errorToastr(result['statusMsg']);
                    }
                });
            }
        });
    };
    LeadListComponent.prototype.upload_excel = function (type) {
        var _this = this;
        var dialogRef = this.alrt.open(src_app_upload_file_modal_upload_file_modal_component__WEBPACK_IMPORTED_MODULE_8__["UploadFileModalComponent"], {
            width: '500px',
            panelClass: 'cs-modal',
            disableClose: true,
            data: {
                'from': 'enquiryList',
                'modal_type': type,
                'filter_data': this.filter
            }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result == true) {
                _this.leadList(_this.active_tab);
            }
        });
    };
    LeadListComponent.prototype.refresh = function () {
        this.filter = {};
        this.serve.currentUserID = '';
        this.serve.setData(this.filter);
        this.leadList(this.active_tab);
    };
    LeadListComponent.prototype.change_date_filter = function (type) {
        if (type == 'date_from') {
            this.search_val.date_from = moment__WEBPACK_IMPORTED_MODULE_6__(this.search_val.date_from).format('YYYY-MM-DD');
            this.leadList(this.active_tab);
        }
        else if (type == 'date_to') {
            this.search_val.date_to = moment__WEBPACK_IMPORTED_MODULE_6__(this.search_val.date_to).format('YYYY-MM-DD');
            this.leadList(this.active_tab);
        }
        else {
        }
    };
    LeadListComponent.prototype.related_tabs = function (tab) {
        this.active_tab = tab;
    };
    LeadListComponent.prototype.userStatus = function (index, id, name) {
        var _this = this;
        this.dialog.confirm('You Want To Change Status').then(function (result) {
            if (result) {
                if (_this.lead_List[index].checkin_active == "1") {
                    _this.lead_List[index].checkin_active = "0";
                }
                else {
                    _this.lead_List[index].checkin_active = "1";
                }
                var value = { "checkin_active": _this.lead_List[index].checkin_active };
                _this.serve.post_rqst({ 'dr_id': id, 'data': value, 'uid': _this.login_data5.id, 'uname': name }, "Lead/checkin_active")
                    .subscribe(function (resp) {
                    _this.leadList(_this.active_tab);
                });
            }
        });
    };
    LeadListComponent.prototype.exportAsXLSX = function (status) {
        var _this = this;
        this.filter.status = status;
        // this.filter.sub_status = this.sub_active_tab;
        this.loader = true;
        this.serve.post_rqst({ 'filter': this.filter, 'start': this.start, 'pagelimit': this.page_limit }, 'Excel/enquiryListExcel').subscribe(function (result) {
            if (result['msg'] == true) {
                console.log("Response--->", result);
                _this.loader = false;
                window.open(_this.downurl + result['filename']);
                _this.leadList(_this.active_tab);
            }
            else {
                _this.loader = false;
            }
        });
    };
    LeadListComponent.prototype.changeStatus = function (user_id, name, enqid) {
        var _this = this;
        var dialogRef = this.alrt.open(_change_enquiry_status_change_enquiry_status_component__WEBPACK_IMPORTED_MODULE_10__["ChangeEnquiryStatusComponent"], {
            width: '600px',
            panelClass: 'cs-modal',
            disableClose: true,
            data: {
                'id': user_id,
                'user_name': name,
                'enquiry_id': enqid
            }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result == true) {
                _this.leadList(_this.active_tab);
            }
        });
    };
    LeadListComponent.prototype.lastBtnValue = function (value) {
        this.fabBtnValue = value;
    };
    LeadListComponent.prototype.openBottomSheet = function (type) {
        var _this = this;
        this.bottomSheet.open(src_app_bottom_sheet_bottom_sheet_component__WEBPACK_IMPORTED_MODULE_12__["BottomSheetComponent"], {
            data: {
                'filterPage': 'digital_list',
            }
        });
        this.bottomSheet._openedBottomSheetRef.afterDismissed().subscribe(function (modalData) {
            _this.filter.date_from = modalData.date_from;
            _this.filter.date_to = modalData.date_to;
            console.log("line 353", type);
            if (type == 'lead') {
                _this.downloadReport(type);
            }
            else if (type == 'order') {
                _this.downloadOrderReport(_this.active_tab);
            }
            else {
                _this.downloadExcel(_this.active_tab);
            }
        });
    };
    LeadListComponent.prototype.downloadReport = function (type) {
        var _this = this;
        console.log("line 358");
        this.loader = true;
        this.filter.type = type;
        this.serve.post_rqst({ 'filter': this.filter, 'start': this.start, 'pagelimit': this.page_limit }, 'Excel/winEnquiryListExcel').subscribe(function (result) {
            if (result['msg'] == true) {
                _this.loader = false;
                window.open(_this.downurl + result['filename']);
                _this.leadList(_this.active_tab);
            }
            else {
                _this.loader = false;
            }
        });
    };
    LeadListComponent.prototype.downloadOrderReport = function (type) {
        var _this = this;
        console.log("line 372");
        this.loader = true;
        this.filter.type = type;
        this.serve.post_rqst({ 'filter': this.filter, 'start': this.start, 'pagelimit': this.page_limit }, 'Excel/winEnquiryListExcelOrderWise').subscribe(function (result) {
            if (result['msg'] == true) {
                _this.loader = false;
                window.open(_this.downurl + result['filename']);
                _this.leadList(_this.active_tab);
            }
            else {
                _this.loader = false;
            }
        });
    };
    LeadListComponent.prototype.downloadItemReport = function (type) {
        var _this = this;
        this.loader = true;
        this.filter.type = type;
        this.serve.post_rqst({ 'filter': this.filter, 'start': this.start, 'pagelimit': this.page_limit }, 'Excel/winEnquiryListExcelItemWise').subscribe(function (result) {
            if (result['msg'] == true) {
                _this.loader = false;
                window.open(_this.downurl + result['filename']);
                _this.leadList(_this.active_tab);
            }
            else {
                _this.loader = false;
            }
        });
    };
    LeadListComponent.prototype.downloadExcel = function (status) {
        var _this = this;
        this.filter.status = status;
        this.loader = true;
        this.serve.post_rqst({ 'filter': this.filter, 'start': this.start, 'pagelimit': this.page_limit }, 'Excel/enquiryListExcelDateRange').subscribe(function (result) {
            if (result['msg'] == true) {
                _this.loader = false;
                window.open(_this.downurl + result['filename']);
                _this.leadList(_this.active_tab);
            }
            else {
                _this.loader = false;
            }
        });
    };
    LeadListComponent.prototype.splitOrderIds = function (orderId) {
        // Convert to string if orderId is a number
        var orderIdString = typeof orderId === 'number' ? orderId.toString() : orderId;
        // Check if orderIdString contains a comma, then split or wrap in an array
        return orderIdString.includes(',') ? orderIdString.split(',') : [orderIdString];
    };
    LeadListComponent.prototype.openDialog = function () {
        var dialogRef = this.alrt.open(src_app_order_status_modal_status_modal_component__WEBPACK_IMPORTED_MODULE_13__["StatusModalComponent"], {
            width: '400px',
            panelClass: 'padding0',
            data: {
                'delivery_from': 'LeadReport',
            }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result != false) {
            }
        });
    };
    LeadListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-lead-list',
            template: __webpack_require__(/*! ./lead-list.component.html */ "./src/app/lead/lead-list/lead-list.component.html"),
            animations: [Object(_router_animation_router_animation_component__WEBPACK_IMPORTED_MODULE_2__["slideToTop"])()]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_services_DatabaseService__WEBPACK_IMPORTED_MODULE_3__["DatabaseService"], ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_11__["ToastrManager"], src_app_dialog_component__WEBPACK_IMPORTED_MODULE_5__["DialogComponent"], _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatDialog"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], src_app_localstorage_service__WEBPACK_IMPORTED_MODULE_7__["sessionStorage"], _angular_material__WEBPACK_IMPORTED_MODULE_9__["MatBottomSheet"]])
    ], LeadListComponent);
    return LeadListComponent;
}());



/***/ }),

/***/ "./src/app/lead/lead-module/lead.module.ts":
/*!*************************************************!*\
  !*** ./src/app/lead/lead-module/lead.module.ts ***!
  \*************************************************/
/*! exports provided: LeadModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LeadModule", function() { return LeadModule; });
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
/* harmony import */ var _lead_list_lead_list_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../lead-list/lead-list.component */ "./src/app/lead/lead-list/lead-list.component.ts");
/* harmony import */ var _add_lead_add_lead_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../add-lead/add-lead.component */ "./src/app/lead/add-lead/add-lead.component.ts");
/* harmony import */ var _lead_detail_lead_detail_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../lead-detail/lead-detail.component */ "./src/app/lead/lead-detail/lead-detail.component.ts");
/* harmony import */ var src_app_editlead_editlead_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/app/editlead/editlead.component */ "./src/app/editlead/editlead.component.ts");
/* harmony import */ var _lead_add_followup_model_lead_add_followup_model_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../lead-add-followup-model/lead-add-followup-model.component */ "./src/app/lead/lead-add-followup-model/lead-add-followup-model.component.ts");
/* harmony import */ var src_app_order_secondary_order_detail_secondary_order_detail_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! src/app/order/secondary-order-detail/secondary-order-detail.component */ "./src/app/order/secondary-order-detail/secondary-order-detail.component.ts");
/* harmony import */ var src_app_order_order_detail_order_detail_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! src/app/order/order-detail/order-detail.component */ "./src/app/order/order-detail/order-detail.component.ts");



















var leadRoutes = [
    {
        path: "", children: [
            { path: "", component: _lead_list_lead_list_component__WEBPACK_IMPORTED_MODULE_12__["LeadListComponent"], canActivate: [src_app_auth_component_guard__WEBPACK_IMPORTED_MODULE_11__["AuthComponentGuard"]], data: { expectedRole: ['1'] } },
            { path: "add-lead/:id", component: _add_lead_add_lead_component__WEBPACK_IMPORTED_MODULE_13__["AddLeadComponent"], canActivate: [src_app_auth_component_guard__WEBPACK_IMPORTED_MODULE_11__["AuthComponentGuard"]], data: { expectedRole: ['1'] } },
            { path: "add-lead", component: _add_lead_add_lead_component__WEBPACK_IMPORTED_MODULE_13__["AddLeadComponent"], canActivate: [src_app_auth_component_guard__WEBPACK_IMPORTED_MODULE_11__["AuthComponentGuard"]], data: { expectedRole: ['1'] } },
            { path: "lead-detail/:id", component: _lead_detail_lead_detail_component__WEBPACK_IMPORTED_MODULE_14__["LeadDetailComponent"], canActivate: [src_app_auth_component_guard__WEBPACK_IMPORTED_MODULE_11__["AuthComponentGuard"]], data: { expectedRole: ['1'] } },
            { path: 'order-detail/:id', component: src_app_order_order_detail_order_detail_component__WEBPACK_IMPORTED_MODULE_18__["OrderDetailComponent"], canActivate: [src_app_auth_component_guard__WEBPACK_IMPORTED_MODULE_11__["AuthComponentGuard"]], data: { expectedRole: ['1'] } },
            { path: 'secondary-order-detail/:id', component: src_app_order_secondary_order_detail_secondary_order_detail_component__WEBPACK_IMPORTED_MODULE_17__["SecondaryOrderDetailComponent"], canActivate: [src_app_auth_component_guard__WEBPACK_IMPORTED_MODULE_11__["AuthComponentGuard"]], data: { expectedRole: ['1'] } },
        ]
    },
    {
        path: 'lead-detail/:id', children: [
            { path: "edit-enq", component: _add_lead_add_lead_component__WEBPACK_IMPORTED_MODULE_13__["AddLeadComponent"], canActivate: [src_app_auth_component_guard__WEBPACK_IMPORTED_MODULE_11__["AuthComponentGuard"]], data: { expectedRole: ['1'] } },
        ]
    }
];
var LeadModule = /** @class */ (function () {
    function LeadModule() {
    }
    LeadModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _lead_list_lead_list_component__WEBPACK_IMPORTED_MODULE_12__["LeadListComponent"],
                _add_lead_add_lead_component__WEBPACK_IMPORTED_MODULE_13__["AddLeadComponent"],
                _lead_detail_lead_detail_component__WEBPACK_IMPORTED_MODULE_14__["LeadDetailComponent"],
                src_app_editlead_editlead_component__WEBPACK_IMPORTED_MODULE_15__["EditleadComponent"],
                _lead_add_followup_model_lead_add_followup_model_component__WEBPACK_IMPORTED_MODULE_16__["LeadAddFollowupModelComponent"],
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild(leadRoutes),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_7__["NgMultiSelectDropDownModule"],
                src_app_material__WEBPACK_IMPORTED_MODULE_10__["MaterialModule"],
                angular_ng_autocomplete__WEBPACK_IMPORTED_MODULE_6__["AutocompleteLibModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialogModule"],
                ngx_mat_select_search__WEBPACK_IMPORTED_MODULE_8__["NgxMatSelectSearchModule"],
                src_app_app_utility_module__WEBPACK_IMPORTED_MODULE_9__["AppUtilityModule"]
            ],
            entryComponents: [
                src_app_editlead_editlead_component__WEBPACK_IMPORTED_MODULE_15__["EditleadComponent"],
                _lead_add_followup_model_lead_add_followup_model_component__WEBPACK_IMPORTED_MODULE_16__["LeadAddFollowupModelComponent"],
            ]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], LeadModule);
    return LeadModule;
}());



/***/ })

}]);