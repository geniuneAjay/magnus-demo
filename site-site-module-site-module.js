(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["site-site-module-site-module"],{

/***/ "./src/app/site/site-add/site-add.component.html":
/*!*******************************************************!*\
  !*** ./src/app/site/site-add/site-add.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-container\">\r\n    <!-- <app-loader *ngIf=\"loader\"></app-loader> -->\r\n    <div class=\"tools-container\">\r\n        <a mat-icon-button matTooltip=\"Back\" (click)=\"back()\">\r\n            <i class=\"material-icons\">arrow_back</i>\r\n        </a>\r\n        <h2> {{data.id ? 'Edit' :'Add'}} New Lead</h2>\r\n    </div>\r\n\r\n    <div class=\"container pt10 pl10 pr10 pb50\">\r\n        <form #f=\"ngForm\" (ngSubmit)=\" f.valid && submitDetail()\">\r\n\r\n            <div class=\"row\">\r\n                <div class=\"col s12\">\r\n                    <div class=\"card pb0\">\r\n                        <div class=\"card-head\">\r\n                            <h2>Basic Information</h2>\r\n                        </div>\r\n                        <div class=\"card-body cs-form\">\r\n                            <div class=\"row\">\r\n                                <div class=\"col s12 m3 l3\">\r\n                                    <mat-form-field appearance=\"outline\">\r\n                                        <mat-label>Type</mat-label>\r\n                                        <mat-select name=\"type\" #type=\"ngModel\" [(ngModel)]=\"data.type\" required>\r\n                                            <mat-option value=\"Residential\">Residential</mat-option>\r\n                                            <mat-option value=\"Commercial\">Commercial</mat-option>\r\n                                            <mat-option value=\"Other\">Other</mat-option>\r\n                                        </mat-select>\r\n                                    </mat-form-field>\r\n                                    <div class=\"alert alert-danger\" *ngIf=\"type.touched || f.submitted\">\r\n                                        <p *ngIf=\"type.errors?.required\">This field is required</p>\r\n                                    </div>\r\n                                </div>\r\n\r\n                                <div class=\"col s12 m3 l3\">\r\n                                    <mat-form-field appearance=\"outline\">\r\n                                        <mat-label>Source</mat-label>\r\n                                        <mat-select name=\"lead_source\" #lead_source=\"ngModel\"\r\n                                            [(ngModel)]=\"data.lead_source\" required>\r\n                                            <mat-option value=\"Scouting\">Scouting</mat-option>\r\n                                            <mat-option value=\"Reference\">Reference</mat-option>\r\n                                        </mat-select>\r\n                                    </mat-form-field>\r\n                                    <div class=\"alert alert-danger\" *ngIf=\"lead_source.touched || f.submitted\">\r\n                                        <p *ngIf=\"lead_source.errors?.required\">This field is required</p>\r\n                                    </div>\r\n                                </div>\r\n\r\n                                <div class=\"col s12 m3 l3\">\r\n                                    <mat-form-field appearance=\"outline\">\r\n                                        <mat-label>Size</mat-label>\r\n                                        <mat-select name=\"size\" #size=\"ngModel\" [(ngModel)]=\"data.size\" required>\r\n                                            <mat-option value=\"0-50\">0-50</mat-option>\r\n                                            <mat-option value=\"51-100\">51-100</mat-option>\r\n                                            <mat-option value=\"101-200\">101-200</mat-option>\r\n                                            <mat-option value=\"201-500\">201-500</mat-option>\r\n                                            <mat-option value=\"500-Above\">500-Above</mat-option>\r\n                                        </mat-select>\r\n                                    </mat-form-field>\r\n                                    <div class=\"alert alert-danger\" *ngIf=\"size.touched || f.submitted\">\r\n                                        <p *ngIf=\"size.errors?.required\">This field is required</p>\r\n                                    </div>\r\n                                </div>\r\n\r\n\r\n                                <div class=\"col s12 m3 l3\" *ngIf=\"!data.id\">\r\n                                    <mat-form-field appearance=\"outline\">\r\n                                        <mat-label>Estimate Delivery</mat-label>\r\n                                        <input name=\"estimate_delivery_date\" matInput [matDatepicker]=\"pickers\"\r\n                                            placeholder=\"\" [min]=\"today_date\" #estimate_delivery_date=\"ngModel\" readonly\r\n                                            [(ngModel)]=\"data.estimate_delivery_date\"\r\n                                            (dateChange)=\"updateStatusBasedOnDate()\" required>\r\n                                        <mat-datepicker-toggle matSuffix [for]=\"pickers\"></mat-datepicker-toggle>\r\n                                        <mat-datepicker #pickers></mat-datepicker>\r\n                                    </mat-form-field>\r\n                                    <div class=\"alert alert-danger\"\r\n                                        *ngIf=\"estimate_delivery_date.touched || f.submitted\">\r\n                                        <p *ngIf=\"estimate_delivery_date.errors?.required\">This field is required</p>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"col s12 m3 l3\" *ngIf=\"data.id\">\r\n                                    <mat-form-field appearance=\"outline\">\r\n                                        <mat-label>Estimate Delivery</mat-label>\r\n                                        <input name=\"estimate_delivery_date\" matInput [matDatepicker]=\"pickers\"\r\n                                            placeholder=\"\"  #estimate_delivery_date=\"ngModel\" readonly\r\n                                            [(ngModel)]=\"data.estimate_delivery_date\"\r\n                                            (dateChange)=\"updateStatusBasedOnDate()\" required>\r\n                                        <mat-datepicker-toggle matSuffix [for]=\"pickers\"></mat-datepicker-toggle>\r\n                                        <mat-datepicker #pickers></mat-datepicker>\r\n                                    </mat-form-field>\r\n                                    <div class=\"alert alert-danger\"\r\n                                        *ngIf=\"estimate_delivery_date.touched || f.submitted\">\r\n                                        <p *ngIf=\"estimate_delivery_date.errors?.required\">This field is required</p>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n\r\n                            <div class=\"row\">\r\n\r\n                                <div class=\"col s12 m3 l3\">\r\n                                    <mat-form-field appearance=\"outline\">\r\n                                        <mat-label>Priority</mat-label>\r\n                                        <mat-select name=\"priority\" #priority=\"ngModel\" [(ngModel)]=\"data.priority\"\r\n                                            required disabled>\r\n                                            <mat-option value=\"Hot\">Hot</mat-option>\r\n                                            <mat-option value=\"Warm\">Warm</mat-option>\r\n                                            <mat-option value=\"Cold\">Cold</mat-option>\r\n                                        </mat-select>\r\n                                    </mat-form-field>\r\n                                    <div class=\"alert alert-danger\" *ngIf=\"priority.touched || f.submitted\">\r\n                                        <p *ngIf=\"priority.errors?.required\">This field is required</p>\r\n                                    </div>\r\n                                </div>\r\n\r\n                                <div class=\"col s12 m3 l3\" *ngIf=\"!data.id\">\r\n                                    <mat-form-field appearance=\"outline\">\r\n                                        <mat-label>Next Follow Up </mat-label>\r\n                                        <input name=\"next_followup_date\" matInput [matDatepicker]=\"followup\"\r\n                                            placeholder=\"\" [min]=\"today_date\" [max]=\"data.estimate_delivery_date\"\r\n                                            #next_followup_date=\"ngModel\" readonly [(ngModel)]=\"data.next_followup_date\"\r\n                                            required [disabled]=\"!data.estimate_delivery_date\">\r\n                                        <mat-datepicker-toggle matSuffix [for]=\"followup\"></mat-datepicker-toggle>\r\n                                        <mat-datepicker #followup></mat-datepicker>\r\n                                    </mat-form-field>\r\n                                    <div class=\"alert alert-danger\" *ngIf=\"next_followup_date.touched || f.submitted\">\r\n                                        <p *ngIf=\"next_followup_date.errors?.required\">This field is required</p>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"col s12 m3 l3\" *ngIf=\"data.id\">\r\n                                    <mat-form-field appearance=\"outline\">\r\n                                        <mat-label>Next Follow Up </mat-label>\r\n                                        <input name=\"next_followup_date\" matInput [matDatepicker]=\"followup\"\r\n                                            placeholder=\"\"  [max]=\"data.estimate_delivery_date\"\r\n                                            #next_followup_date=\"ngModel\" readonly [(ngModel)]=\"data.next_followup_date\"\r\n                                            required [disabled]=\"!data.estimate_delivery_date\">\r\n                                        <mat-datepicker-toggle matSuffix [for]=\"followup\"></mat-datepicker-toggle>\r\n                                        <mat-datepicker #followup></mat-datepicker>\r\n                                    </mat-form-field>\r\n                                    <div class=\"alert alert-danger\" *ngIf=\"next_followup_date.touched || f.submitted\">\r\n                                        <p *ngIf=\"next_followup_date.errors?.required\">This field is required</p>\r\n                                    </div>\r\n                                </div>\r\n\r\n\r\n                                <div class=\"col s12 m3 l3\">\r\n                                    <mat-form-field appearance=\"outline\">\r\n                                        <mat-label>Referral By</mat-label>\r\n                                        <mat-select name=\"referral_by_type_id\" #referral_by_type_id=\"ngModel\"\r\n                                            [(ngModel)]=\"data.referral_by_type_id\"\r\n                                            (selectionChange)=\"getNetwork(''); data.referral_by = ''; findName('referral_by', data.referral_by_type_id)\"\r\n                                            [required]=\"data.lead_source == 'Reference'\">\r\n                                            <ng-container *ngFor=\"let row of serve.drArray\">\r\n                                                <mat-option [value]=\"row.type\">{{row.module_name}}</mat-option>\r\n                                            </ng-container>\r\n                                        </mat-select>\r\n                                    </mat-form-field>\r\n                                    <div class=\"alert alert-danger\" *ngIf=\"referral_by_type_id.touched || f.submitted\">\r\n                                        <p *ngIf=\"referral_by_type_id.errors?.required\">This field is required</p>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"col s12 m3 l3\">\r\n                                    <mat-form-field appearance=\"outline\">\r\n                                        <mat-label>{{data.referral_by_type ? data.referral_by_type: 'Select Referral By\r\n                                            First'}}</mat-label>\r\n                                        <mat-select name=\"referral_by\" #referral_by=\"ngModel\"\r\n                                            [(ngModel)]=\"data.referral_by\"\r\n                                            (selectionChange)=\"findName('network_type', data.referral_by)\"\r\n                                            [required]=\"data.lead_source == 'Reference' && !data.referral_by_type_id\">\r\n                                            <ngx-mat-select-search noEntriesFoundLabel=\"'no data found'\"\r\n                                                placeholderLabel=\"Search..\"\r\n                                                (keyup)=\"getNetwork($event.target.value)\"></ngx-mat-select-search>\r\n                                            <ng-container *ngFor=\"let row of networkType\">\r\n                                                <mat-option [value]=\"row.id\">{{row.company_name ? (row.company_name |\r\n                                                    titlecase) : ''}} {{row.mobile ? ('-' +row.mobile) :\r\n                                                    ''}}</mat-option>\r\n                                            </ng-container>\r\n                                        </mat-select>\r\n                                    </mat-form-field>\r\n                                    <div class=\"alert alert-danger\" *ngIf=\"referral_by.touched || f.submitted\">\r\n                                        <p *ngIf=\"referral_by.errors?.required\">This field is required</p>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n\r\n                            <div class=\"row\">\r\n                                <div class=\"col s12 m3 l3\">\r\n                                    <mat-form-field appearance=\"outline\">\r\n                                        <mat-label>Owner Name</mat-label>\r\n                                        <input matInput placeholder=\"Type Here ...\" name=\"ownerName\"\r\n                                            #ownerName=\"ngModel\" [(ngModel)]=\"data.ownerName\" required>\r\n                                    </mat-form-field>\r\n                                    <div class=\"alert alert-danger\" *ngIf=\"ownerName.touched || f.submitted\">\r\n                                        <p *ngIf=\"ownerName.errors?.required\">This field is required</p>\r\n                                    </div>\r\n                                </div>\r\n\r\n                                <div class=\"col s12 m3 l3\">\r\n                                    <mat-form-field appearance=\"outline\">\r\n                                        <mat-label>Owner Mobile No.</mat-label>\r\n                                        <input matInput placeholder=\"Type Here ...\" name=\"ownerMobile\"\r\n                                            #ownerMobile=\"ngModel\" [(ngModel)]=\"data.ownerMobile\" minlength=\"10\"\r\n                                            maxlength=\"10\" min=\"0\" (keypress)=\"MobileNumber($event)\"\r\n                                            pattern=\"^[6-9][0-9]{0,9}$\" required>\r\n                                    </mat-form-field>\r\n\r\n                                    <div class=\"alert alert-danger\" *ngIf=\"ownerMobile.touched || f.submitted\">\r\n                                        <p *ngIf=\"ownerMobile.errors?.required\">This field is required</p>\r\n                                        <p *ngIf=\"ownerMobile.errors?.pattern\">Invalid Mobile Number</p>\r\n                                        <p\r\n                                            *ngIf=\"!ownerMobile.errors?.pattern  && (ownerMobile.errors?.maxlength || ownerMobile.errors?.minlength)\">\r\n                                            Mobile\r\n                                            No should be of 10 digits..\r\n                                        </p>\r\n                                    </div>\r\n                                </div>\r\n\r\n                                <div class=\"col s12 m3 l3\">\r\n                                    <mat-form-field appearance=\"outline\">\r\n                                        <mat-label>Designation</mat-label>\r\n                                        <mat-select name=\"owner_designation\" #owner_designation=\"ngModel\"\r\n                                            [(ngModel)]=\"data.owner_designation\" required>\r\n                                            <mat-option value=\"Owner\">Owner</mat-option>\r\n                                            <mat-option value=\"Manager\">Manager</mat-option>\r\n                                            <mat-option value=\"Relative\">Relative</mat-option>\r\n                                            <mat-option value=\"Other\">Other</mat-option>\r\n                                        </mat-select>\r\n                                    </mat-form-field>\r\n                                    <div class=\"alert alert-danger\" *ngIf=\"owner_designation.touched || f.submitted\">\r\n                                        <p *ngIf=\"owner_designation.errors?.required\">This field is required</p>\r\n                                    </div>\r\n                                </div>\r\n                                <!-- <div class=\"col s12 m6 l6\">\r\n                                    <mat-form-field appearance=\"outline\">\r\n                                        <mat-label>Purpose</mat-label>\r\n                                        <textarea matInput placeholder=\"Type Here ...\" name=\"purpose\" #purpose=\"ngModel\"\r\n                                            [(ngModel)]=\"data.purpose\" class=\"h80\" required></textarea>\r\n                                    </mat-form-field>\r\n                                    <div class=\"alert alert-danger\" *ngIf=\"purpose.touched || f.submitted\">\r\n                                        <p *ngIf=\"purpose.errors?.required\">This field is required</p>\r\n                                    </div>\r\n                                </div> -->\r\n                            </div>\r\n\r\n                            <div class=\"row\">\r\n                                <div class=\"col s12 m6 l6\">\r\n                                    <div class=\"row\">\r\n                                        <div class=\" col s12 m6 l6\">\r\n                                            <mat-form-field appearance=\"outline\">\r\n                                                <mat-label> Pincode</mat-label>\r\n                                                <input matInput placeholder=\"Type here..\" type=\"tel\" name=\"pincode\"\r\n                                                    #pincode=\"ngModel\" [(ngModel)]=\"data.pincode\"\r\n                                                    (ngModelChange)=\"data.pincode ? processPincode('Owner', data.pincode) : null\"\r\n                                                    minlength=\"6\" maxlength=\"6\" required>\r\n\r\n                                            </mat-form-field>\r\n                                            <div class=\"alert alert-danger\" *ngIf=\"pincode.touched || f.submitted\">\r\n                                                <p *ngIf=\"pincode.errors?.required\">This field is required</p>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\" col s12 m6 l6\">\r\n                                            <mat-form-field appearance=\"outline\">\r\n                                                <mat-label>State</mat-label>\r\n                                                <mat-select name=\"state\" #state=\"ngModel\" [(ngModel)]=\"data.state\"\r\n                                                    (selectionChange)=\"getDistrict(1, 'Owner')\" required>\r\n                                                    <mat-option disabled=\"\">Select State</mat-option>\r\n                                                    <mat-option *ngFor=\"let row of states\" value=\"{{row.state_name}}\">\r\n                                                        {{row.state_name}}\r\n                                                    </mat-option>\r\n                                                </mat-select>\r\n                                            </mat-form-field>\r\n                                            <div class=\"alert alert-danger\" *ngIf=\"state.touched || f.submitted\">\r\n                                                <p *ngIf=\"state.errors?.required\">This field is required</p>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"row mb0\">\r\n                                        <div class=\" col s12 m6 l6\">\r\n                                            <mat-form-field appearance=\"outline\">\r\n                                                <mat-label>District</mat-label>\r\n                                                <mat-select name=\"district\" #district=\"ngModel\"\r\n                                                    [(ngModel)]=\"data.district\" (selectionChange)=\"getArea(1, 'Owner')\"\r\n                                                    required>\r\n                                                    <mat-option disabled=\"\">Select District</mat-option>\r\n                                                    <mat-option *ngFor=\"let row of district_list\"\r\n                                                        value=\"{{row.district_name}}\">\r\n                                                        {{row.district_name}}\r\n                                                    </mat-option>\r\n                                                </mat-select>\r\n\r\n                                            </mat-form-field>\r\n                                            <div class=\"alert alert-danger\" *ngIf=\"district.touched || f.submitted\">\r\n                                                <p *ngIf=\"district.errors?.required\">This field is required</p>\r\n                                            </div>\r\n                                        </div>\r\n\r\n                                        <div class=\" col s12 m6 l6\">\r\n                                            <mat-form-field appearance=\"outline\">\r\n                                                <mat-label>City</mat-label>\r\n                                                <input matInput placeholder=\"Type here...\" name=\"city\" #city=\"ngModel\"\r\n                                                    [(ngModel)]=\"data.city\">\r\n                                            </mat-form-field>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"col s12 m6 l6\">\r\n                                    <mat-form-field appearance=\"outline\">\r\n                                        <mat-label>Address</mat-label>\r\n                                        <textarea matInput placeholder=\"Type Here ...\" name=\"address\" #address=\"ngModel\"\r\n                                            [(ngModel)]=\"data.address\" class=\"h80\" required></textarea>\r\n                                    </mat-form-field>\r\n                                    <div class=\"alert alert-danger\" *ngIf=\"address.touched || f.submitted\">\r\n                                        <p *ngIf=\"address.errors?.required\">This field is required</p>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n\r\n\r\n                            <div class=\"row\" *ngIf=\"!data.id\">\r\n                                <div class=\"col 12 m3 l3\">\r\n                                    <mat-form-field appearance=\"outline\">\r\n                                        <mat-label>Sales User</mat-label>\r\n                                        <mat-select name=\"assigned_sales_user_id\"\r\n                                            [(ngModel)]=\"data.assigned_sales_user_id\" #assigned_sales_user_id=\"ngModel\"\r\n                                            (selectionChange)=\"findName('sales_user', data.assigned_sales_user_id)\"\r\n                                            required>\r\n                                            <mat-option>\r\n                                                <ngx-mat-select-search noEntriesFoundLabel=\"'no data found'\"\r\n                                                    placeholderLabel=\"Search..\"\r\n                                                    (keyup)=\"getSalesUser($event.target.value)\"></ngx-mat-select-search>\r\n                                            </mat-option>\r\n                                            <mat-option *ngFor=\"let row of salesUser\" value=\"{{row.id}}\">{{row.name}}\r\n                                                {{row.role_name}}</mat-option>\r\n                                        </mat-select>\r\n                                    </mat-form-field>\r\n                                    <div class=\"alert alert-danger\"\r\n                                        *ngIf=\"assigned_sales_user_id.touched || f.submitted\">\r\n                                        <p *ngIf=\"assigned_sales_user_id.errors?.required\">This field is required</p>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n\r\n                  <ng-container *ngIf=\"!data.id\">\r\n                            <div class=\"row\">\r\n                                <div class=\"col s12\">\r\n                                    <div class=\"card-head mb0\">\r\n                                        <h2 class=\"mb0\">Influencer Detail</h2>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n\r\n                            <div class=\"row\">\r\n                                <div class=\"col 12 m3 l3\">\r\n                                    <mat-form-field appearance=\"outline\">\r\n                                        <mat-label>Type</mat-label>\r\n                                        <mat-select name=\"influencer_detail\" [(ngModel)]=\"data.influencer_detail\"\r\n                                            #influencer_detail=\"ngModel\">\r\n                                            <mat-option value=\"Registered\">Registered</mat-option>\r\n                                            <mat-option value=\"Unregistered\">Unregistered</mat-option>\r\n                                        </mat-select>\r\n                                    </mat-form-field>\r\n                                    <div class=\"alert alert-danger\" *ngIf=\"influencer_detail.touched || f.submitted\">\r\n                                        <p *ngIf=\"influencer_detail.errors?.required\">This field is required</p>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"col s12 m3 l3\">\r\n                                    <mat-form-field appearance=\"outline\">\r\n                                        <mat-label>Profile</mat-label>\r\n                                        <mat-select name=\"registered_by_type_id\" #registered_by_type_id=\"ngModel\"\r\n                                            [(ngModel)]=\"data.registered_by_type_id\"\r\n                                            (selectionChange)=\"data.influencer_detail == 'Registered' ? getNetwork('') : ''; data.registered_by = '';findName('registered_by', data.registered_by_type_id)\"\r\n                                            [required]=\"data.lead_source == 'Reference'\">\r\n                                            <ng-container *ngFor=\"let row of serve.drArray\">\r\n                                                <ng-container *ngIf=\"row.type == '8' || row.type == '13'\">\r\n                                                    <mat-option [value]=\"row.type\">{{row.module_name}}</mat-option>\r\n                                                </ng-container>\r\n                                            </ng-container>\r\n                                        </mat-select>\r\n                                    </mat-form-field>\r\n                                    <div class=\"alert alert-danger\"\r\n                                        *ngIf=\"registered_by_type_id.touched || f.submitted\">\r\n                                        <p *ngIf=\"registered_by_type_id.errors?.required\">This field is required</p>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"col s12 m3 l3\" *ngIf=\"data.influencer_detail == 'Registered'\">\r\n                                    <mat-form-field appearance=\"outline\">\r\n                                        <mat-label>{{data.registered_by_type ? data.registered_by_type: 'Select\r\n                                            Profile\r\n                                            First'}}</mat-label>\r\n                                        <mat-select name=\"registered_by\" #registered_by=\"ngModel\"\r\n                                            [(ngModel)]=\"data.registered_by\"\r\n                                            (selectionChange)=\"findName('registered_by_network', data.registered_by)\">\r\n                                            <ngx-mat-select-search noEntriesFoundLabel=\"'no data found'\"\r\n                                                placeholderLabel=\"Search..\"\r\n                                                (keyup)=\"getNetwork($event.target.value)\"></ngx-mat-select-search>\r\n                                            <ng-container *ngFor=\"let row of registeredType\">\r\n                                                <mat-option [value]=\"row.id\">{{row.company_name ? (row.company_name\r\n                                                    |\r\n                                                    titlecase) : ''}} {{row.mobile ? ('-' +row.mobile) :\r\n                                                    ''}}</mat-option>\r\n                                            </ng-container>\r\n                                        </mat-select>\r\n                                    </mat-form-field>\r\n                                    <div class=\"alert alert-danger\" *ngIf=\"registered_by.touched || f.submitted\">\r\n                                        <p *ngIf=\"registered_by.errors?.required\">This field is required</p>\r\n                                    </div>\r\n                                </div>\r\n                                <ng-container *ngIf=\"data.influencer_detail == 'Unregistered'\">\r\n                                    <div class=\"col s12 m3 l3\">\r\n                                        <mat-form-field appearance=\"outline\">\r\n                                            <mat-label>Name</mat-label>\r\n                                            <input matInput placeholder=\"Type Here ...\" name=\"influencer_name\"\r\n                                                #influencer_name=\"ngModel\" [(ngModel)]=\"data.influencer_name\" required>\r\n                                        </mat-form-field>\r\n                                        <div class=\"alert alert-danger\" *ngIf=\"influencer_name.touched || f.submitted\">\r\n                                            <p *ngIf=\"influencer_name.errors?.required\">This field is required</p>\r\n                                        </div>\r\n                                    </div>\r\n\r\n                                    <div class=\"col s12 m3 l3\">\r\n                                        <mat-form-field appearance=\"outline\">\r\n                                            <mat-label>Mobile No.</mat-label>\r\n                                            <input matInput placeholder=\"Type Here ...\" name=\"influencer_mobile\"\r\n                                                #influencer_mobile=\"ngModel\" [(ngModel)]=\"data.influencer_mobile\"\r\n                                                minlength=\"10\" maxlength=\"10\" min=\"0\" (keypress)=\"MobileNumber($event)\"\r\n                                                pattern=\"^[6-9][0-9]{0,9}$\" required>\r\n                                        </mat-form-field>\r\n\r\n                                        <div class=\"alert alert-danger\"\r\n                                            *ngIf=\"influencer_mobile.touched || f.submitted\">\r\n                                            <p *ngIf=\"influencer_mobile.errors?.required\">This field is required</p>\r\n                                            <p *ngIf=\"influencer_mobile.errors?.pattern\">Invalid Mobile Number</p>\r\n                                            <p\r\n                                                *ngIf=\"!influencer_mobile.errors?.pattern  && (influencer_mobile.errors?.maxlength || influencer_mobile.errors?.minlength)\">\r\n                                                Mobile\r\n                                                No should be of 10 digits..\r\n                                            </p>\r\n                                        </div>\r\n                                    </div>\r\n                                </ng-container>\r\n                            </div>\r\n\r\n                            <div class=\"row\" *ngIf=\"data.influencer_detail == 'Unregistered'\">\r\n                                <div class=\"col s12 m6 l6\">\r\n                                    <div class=\"row\">\r\n                                        <div class=\" col s12 m6 l6\">\r\n                                            <mat-form-field appearance=\"outline\">\r\n                                                <mat-label> Pincode</mat-label>\r\n                                                <input matInput placeholder=\"Type here..\" type=\"tel\"\r\n                                                    name=\"influencer_pincode\" #influencer_pincode=\"ngModel\"\r\n                                                    [(ngModel)]=\"data.influencer_pincode\"\r\n                                                    (ngModelChange)=\"data.influencer_pincode ? processPincode('Influencer',data.influencer_pincode) : null\"\r\n                                                    minlength=\"6\" maxlength=\"6\" required>\r\n\r\n                                            </mat-form-field>\r\n                                            <div class=\"alert alert-danger\"\r\n                                                *ngIf=\"influencer_pincode.touched || f.submitted\">\r\n                                                <p *ngIf=\"influencer_pincode.errors?.required\">This field is required\r\n                                                </p>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\" col s12 m6 l6\">\r\n                                            <mat-form-field appearance=\"outline\">\r\n                                                <mat-label>State</mat-label>\r\n                                                <mat-select name=\"influencer_state\" #influencer_state=\"ngModel\"\r\n                                                    [(ngModel)]=\"data.influencer_state\"\r\n                                                    (selectionChange)=\"getDistrict(1, 'Influencer')\" required>\r\n                                                    <mat-option disabled=\"\">Select State</mat-option>\r\n                                                    <mat-option *ngFor=\"let row of states\" value=\"{{row.state_name}}\">\r\n                                                        {{row.state_name}}\r\n                                                    </mat-option>\r\n                                                </mat-select>\r\n                                            </mat-form-field>\r\n                                            <div class=\"alert alert-danger\"\r\n                                                *ngIf=\"influencer_state.touched || f.submitted\">\r\n                                                <p *ngIf=\"influencer_state.errors?.required\">This field is required</p>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"row mb0\">\r\n                                        <div class=\" col s12 m6 l6\">\r\n                                            <mat-form-field appearance=\"outline\">\r\n                                                <mat-label>District</mat-label>\r\n                                                <mat-select name=\"influencer_district\" #influencer_district=\"ngModel\"\r\n                                                    [(ngModel)]=\"data.influencer_district\"\r\n                                                    (selectionChange)=\"getArea(1, 'Owner')\" required>\r\n                                                    <mat-option disabled=\"\">Select District</mat-option>\r\n                                                    <mat-option *ngFor=\"let row of district_list\"\r\n                                                        value=\"{{row.district_name}}\">\r\n                                                        {{row.district_name}}\r\n                                                    </mat-option>\r\n                                                </mat-select>\r\n\r\n                                            </mat-form-field>\r\n                                            <div class=\"alert alert-danger\"\r\n                                                *ngIf=\"influencer_district.touched || f.submitted\">\r\n                                                <p *ngIf=\"influencer_district.errors?.required\">This field is required\r\n                                                </p>\r\n                                            </div>\r\n                                        </div>\r\n\r\n                                        <div class=\" col s12 m6 l6\">\r\n                                            <mat-form-field appearance=\"outline\">\r\n                                                <mat-label>City</mat-label>\r\n                                                <input matInput placeholder=\"Type here...\" name=\"influencer_city\"\r\n                                                    #influencer_city=\"ngModel\" [(ngModel)]=\"data.influencer_city\">\r\n                                            </mat-form-field>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"col s12 m6 l6\">\r\n                                    <mat-form-field appearance=\"outline\">\r\n                                        <mat-label>Address</mat-label>\r\n                                        <textarea matInput placeholder=\"Type Here ...\" name=\"influencer_address\"\r\n                                            #influencer_address=\"ngModel\" [(ngModel)]=\"data.influencer_address\"\r\n                                            class=\"h80\" required></textarea>\r\n                                    </mat-form-field>\r\n                                    <div class=\"alert alert-danger\" *ngIf=\"influencer_address.touched || f.submitted\">\r\n                                        <p *ngIf=\"influencer_address.errors?.required\">This field is required</p>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </ng-container>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n\r\n\r\n            <div class=\"row\">\r\n                <div class=\"col s12\">\r\n                    <div class=\"text-right\">\r\n                        <button [ngClass]=\"{'loading': savingFlag == true}\" mat-raised-button color=\"accent\"\r\n                            type=\"submit\" [disabled]=\"savingFlag == true\">\r\n                            {{savingFlag == true ? 'Saving' : 'Save'}}\r\n                        </button>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </form>\r\n    </div>\r\n\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/site/site-add/site-add.component.scss":
/*!*******************************************************!*\
  !*** ./src/app/site/site-add/site-add.component.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/site/site-add/site-add.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/site/site-add/site-add.component.ts ***!
  \*****************************************************/
/*! exports provided: SiteAddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SiteAddComponent", function() { return SiteAddComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_services_DatabaseService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/_services/DatabaseService */ "./src/_services/DatabaseService.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_dialog_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/dialog.component */ "./src/app/dialog.component.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! moment */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var src_app_localstorage_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/localstorage.service */ "./src/app/localstorage.service.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng6-toastr-notifications */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/ng6-toastr-notifications/fesm5/ng6-toastr-notifications.js");

// import { Component, OnInit } from '@angular/core';








var SiteAddComponent = /** @class */ (function () {
    function SiteAddComponent(serve, router, location, rout, session, dialog, ActivatedRoute, toast) {
        this.serve = serve;
        this.router = router;
        this.location = location;
        this.rout = rout;
        this.session = session;
        this.dialog = dialog;
        this.ActivatedRoute = ActivatedRoute;
        this.toast = toast;
        this.fromdata = {};
        this.data = {};
        this.savingFlag = false;
        this.status = '';
        this.networkType = [];
        this.registeredType = [];
        this.city_area_list = [];
        this.states = [];
        this.district_list = [];
        this.addTolistDisabled = true;
        this.salesUser = [];
        this.source_list = [];
        this.today_date = new Date();
        this.userData = JSON.parse(localStorage.getItem('st_user'));
        this.userId = this.userData['data']['id'];
        this.userName = this.userData['data']['name'];
        this.today_date = new Date().toISOString().slice(0, 10);
    }
    SiteAddComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.ActivatedRoute.params.subscribe(function (params) {
            if (_this.ActivatedRoute.queryParams['_value']['page_mode'] == 'edit') {
                _this.data.id = _this.ActivatedRoute.queryParams['_value']['id'];
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
    SiteAddComponent.prototype.leadDetail = function () {
        var _this = this;
        this.loader = true;
        this.serve.post_rqst({ 'id': this.data.id }, "Enquiry/getSiteDetail").subscribe(function (result) {
            if (result['statusCode'] == 200) {
                _this.data = result['enquiry_detail'];
                if (_this.data.state) {
                    _this.getDistrict(1, 'Owner');
                }
                if (_this.data.referral_by_type_id) {
                    _this.getNetwork('');
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
    SiteAddComponent.prototype.processPincode = function (type, pincode) {
        var _this = this;
        var pincodeValue = pincode;
        if (pincodeValue.length > 5) {
            this.serve.post_rqst({ 'pincode': pincodeValue }, "Enquiry/getPostalInfo").subscribe((function (result) {
                if (result['statusCode'] == 200) {
                    if (type == 'Owner') {
                        _this.data.state = result['result'].state_name;
                        _this.data.district = result['result'].district_name;
                        _this.data.city = result['result'].city;
                    }
                    if (type == 'Influencer') {
                        _this.data.influencer_state = result['result'].state_name;
                        _this.data.influencer_district = result['result'].district_name;
                        _this.data.influencer_city = result['result'].city;
                    }
                    _this.getDistrict(1, type);
                }
                else {
                    _this.toast.errorToastr(result['statusMsg']);
                }
            }));
        }
    };
    SiteAddComponent.prototype.getNetwork = function (search) {
        var _this = this;
        if (this.data.influencer_detail == 'Registered') {
            this.serve.post_rqst({ 'type': this.data.influencer_detail == 'Registered' ? this.data.registered_by_type_id : this.data.referral_by_type_id, 'search': search }, "Enquiry/drList").subscribe((function (result) {
                if (result['statusCode'] == 200) {
                    _this.registeredType = result['distributor'];
                }
                else {
                    _this.toast.errorToastr(result['statusMsg']);
                }
            }));
        }
        else {
            this.serve.post_rqst({ 'type': this.data.influencer_detail == 'Registered' ? this.data.registered_by_type_id : this.data.referral_by_type_id, 'search': search }, "Enquiry/drList").subscribe((function (result) {
                if (result['statusCode'] == 200) {
                    _this.networkType = result['distributor'];
                }
                else {
                    _this.toast.errorToastr(result['statusMsg']);
                }
            }));
        }
    };
    SiteAddComponent.prototype.findName = function (type, type_id) {
        if (type == 'referral_by') {
            var Index = this.serve.drArray.findIndex(function (row) { return row.type == type_id; });
            if (Index != -1) {
                this.data.referral_by_type = this.serve.drArray[Index]['module_name'];
            }
        }
        if (type == 'registered_by') {
            var Index = this.serve.drArray.findIndex(function (row) { return row.type == type_id; });
            if (Index != -1) {
                this.data.registered_by_type = this.serve.drArray[Index]['module_name'];
            }
        }
        if (type == 'registered_by_network') {
            var Index = this.networkType.findIndex(function (row) { return row.id == type_id; });
            if (Index != -1) {
                this.data.influencer_name = this.networkType[Index]['company_name'];
                this.data.influencer_mobile = this.networkType[Index]['mobile'];
            }
        }
        if (type == 'network_type') {
            var Index = this.networkType.findIndex(function (row) { return row.id == type_id; });
            if (Index != -1) {
                this.data.referral_by_name = this.networkType[Index]['company_name'];
                this.data.referral_by_mobile = this.networkType[Index]['mobile'];
            }
        }
        if (type == 'sales_user') {
            var Index = this.salesUser.findIndex(function (row) { return row.id == type_id; });
            if (Index != -1) {
                this.data.assigned_sales_user_name = this.salesUser[Index]['name'];
            }
        }
    };
    SiteAddComponent.prototype.updateStatusBasedOnDate = function () {
        var selectedDate = new Date(this.data.estimate_delivery_date);
        var currentDate = new Date();
        var differenceInDays = Math.floor((selectedDate.getTime() - currentDate.getTime()) / (1000 * 60 * 60 * 24));
        if (differenceInDays <= 20) {
            this.data.priority = 'Hot';
        }
        else if (differenceInDays <= 40) {
            this.data.priority = 'Warm';
        }
        else {
            this.data.priority = 'Cold';
        }
    };
    SiteAddComponent.prototype.getStateList = function () {
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
    SiteAddComponent.prototype.getSalesUser = function (searcValue) {
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
    SiteAddComponent.prototype.submitDetail = function () {
        var _this = this;
        this.data.uid = this.userId;
        this.data.uname = this.userName;
        if (this.data.next_followup_date) {
            this.data.next_followup_date = moment__WEBPACK_IMPORTED_MODULE_5__(this.data.next_followup_date).format('YYYY-MM-DD');
        }
        if (this.data.estimate_delivery_date) {
            this.data.estimate_delivery_date = moment__WEBPACK_IMPORTED_MODULE_5__(this.data.estimate_delivery_date).format('YYYY-MM-DD');
        }
        this.savingFlag = true;
        this.serve.post_rqst({ 'data': this.data }, "Enquiry/addSite").subscribe(function (result) {
            if (result['statusCode'] == 200) {
                _this.toast.successToastr(result['statusMsg']);
                _this.rout.navigate(['/lead-list/']);
                _this.savingFlag = false;
            }
            else {
                _this.dialog.error(result['statusMsg']);
            }
        });
    };
    SiteAddComponent.prototype.MobileNumber = function (event) {
        var pattern = /[0-9\+\-\ ]/;
        var inputChar = String.fromCharCode(event.charCode);
        if (event.keyCode != 8 && !pattern.test(inputChar)) {
            event.preventDefault();
        }
    };
    SiteAddComponent.prototype.getsource_list = function () {
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
    SiteAddComponent.prototype.getDistrict = function (val, type) {
        var _this = this;
        var st_name;
        if (val == 1 && type == 'Owner') {
            st_name = this.data.state;
        }
        if (val == 1 && type == 'Influencer') {
            st_name = this.data.influencer_state;
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
    SiteAddComponent.prototype.getArea = function (val, type) {
        var _this = this;
        var dist_name;
        if (val == 1 && type == 'Owner') {
            dist_name = this.data.district;
        }
        if (val == 1 && type == 'Influencer') {
            dist_name = this.data.influencer_district;
        }
        var value = { "state": type == 'Owner' ? this.data.state : this.data.influencer_district, "district": dist_name };
        this.serve.post_rqst(value, "CustomerNetwork/getAreaData").subscribe((function (response) {
            if (response['statusCode'] == 200) {
                _this.city_area_list = response['area'];
            }
            else {
                _this.toast.errorToastr(response['statusMsg']);
            }
        }));
    };
    SiteAddComponent.prototype.back = function () {
        this.location.back();
    };
    SiteAddComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-site-add',
            template: __webpack_require__(/*! ./site-add.component.html */ "./src/app/site/site-add/site-add.component.html"),
            styles: [__webpack_require__(/*! ./site-add.component.scss */ "./src/app/site/site-add/site-add.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_services_DatabaseService__WEBPACK_IMPORTED_MODULE_2__["DatabaseService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_common__WEBPACK_IMPORTED_MODULE_7__["Location"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], src_app_localstorage_service__WEBPACK_IMPORTED_MODULE_6__["sessionStorage"], src_app_dialog_component__WEBPACK_IMPORTED_MODULE_4__["DialogComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_8__["ToastrManager"]])
    ], SiteAddComponent);
    return SiteAddComponent;
}());



/***/ }),

/***/ "./src/app/site/site-list.component.html":
/*!***********************************************!*\
  !*** ./src/app/site/site-list.component.html ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-container\">\r\n\r\n  <div class=\"tools-container\">\r\n    <a mat-icon-button matTooltip=\"Back\" *ngIf=\"page=='Report'\" (click)=\"backToList()\">\r\n      <i class=\"material-icons\">arrow_back</i>\r\n    </a>\r\n    <h2>Lead List</h2>\r\n    <div class=\"left-auto left-auto df ac flex-gap-10\">\r\n      <button mat-icon-button matTooltip=\"Refresh\" (click)=\"refresh() \">\r\n        <i class=\"material-icons\">refresh</i>\r\n      </button>\r\n      <div class=\"pagination\" *ngIf=\"site_List.length > 0\">\r\n        <div class=\"pagination-content\">\r\n          Pages\r\n          <span>{{pagenumber}}</span>\r\n          of\r\n          <span>{{total_page}}</span>\r\n        </div>\r\n        <div class=\"page-nav\">\r\n          <button mat-icon-button matTooltip=\"Older\" (click)=\"pervious()\" [disabled]=\"start == 0 || total_page == 0\">\r\n            <i class=\"material-icons\">navigate_before</i>\r\n          </button>\r\n          <button mat-icon-button matTooltip=\"Newer\" (click)=\"nextPage()\"\r\n            [disabled]=\"pagenumber == total_page || total_page == 0\">\r\n            <i class=\"material-icons\">navigate_next</i>\r\n          </button>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"mat-tabbar\">\r\n        <button mat-icon-button matTooltip=\"Filter\" (click)=\"openBottomSheet()\">\r\n          <i class=\"material-icons\">filter_alt</i>\r\n        </button>\r\n\r\n        <button mat-button [ngClass]=\"active_tab == 'Pending' ? 'active' : ''\"\r\n          (click)=\"active_tab = 'Pending'; leadList('Pending')\"><i class=\"material-icons\">pending_actions</i>Pending\r\n          ({{count.Pending ? count.Pending: '0'}})</button>\r\n        <button mat-button [ngClass]=\"active_tab == 'Open' ? 'active' : ''\"\r\n          (click)=\"active_tab = 'Open'; leadList('Open')\"><i class=\"material-icons\">domain</i>Open\r\n          ({{count.Open ? count.Open: '0'}})</button>\r\n\r\n        <button mat-button [ngClass]=\"active_tab == 'Win_f' ? 'active' : ''\"\r\n          (click)=\"active_tab = 'Win_f'; leadList('Win_f')\"><i class=\"material-icons\">done</i>Win-F\r\n          ({{count.Win_f ? count.Win_f : '0'}})</button>\r\n        <button mat-button [ngClass]=\"active_tab == 'Win_c' ? 'active' : ''\"\r\n          (click)=\"active_tab = 'Win_c'; leadList('Win_c')\"><i class=\"material-icons\">done_all</i>Win–C\r\n          ({{count.Win_c ? count.Win_c : '0'}})</button>\r\n        <button mat-button [ngClass]=\"active_tab == 'Lost' ? 'active' : ''\"\r\n          (click)=\"active_tab = 'Lost'; leadList('Lost')\"><i class=\"material-icons\">thumb_down_alt</i>Lost\r\n          ({{count.Lost ? count.Lost : '0'}})</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"container container-scroll\">\r\n    <div class=\"cs-table horizontal-scroll\">\r\n      <div class=\"sticky-head\">\r\n        <div class=\"table-head\">\r\n          <table>\r\n            <tr>\r\n              <th class=\"w50\">Sr.No</th>\r\n              <th class=\"w120\">Date</th>\r\n              <th class=\"w160\">Created By</th>\r\n              <th class=\"w100\">Lead ID</th>\r\n              <th class=\"w100\">Type</th>\r\n              <th class=\"w100\">Source</th>\r\n              <th class=\"w100\">Size</th>\r\n              <th class=\"w100\">Priority</th>\r\n              <th class=\"w150\">Referral By</th>\r\n              <th class=\"w150\">Owner Name</th>\r\n              <th class=\"w100\">Mobile No.</th>\r\n              <th class=\"w120\">Estimate Delivery Date</th>\r\n              <th class=\"w150\">Assigned User</th>\r\n              <th class=\"w180\">Reporting Manager</th>\r\n              <!-- <th class=\"w180\">Purpose</th> -->\r\n              <th class=\"w150\">City</th>\r\n              <th class=\"w150\">District</th>\r\n              <th class=\"w250\">Address</th>\r\n              <th class=\"w100\">Last Checkin</th>\r\n              <th class=\"w100\" *ngIf=\"active_tab == 'Lost' &&  login_data5.edit_lead=='1'\">Status</th>\r\n              <th class=\"w100\">Action</th>\r\n            </tr>\r\n          </table>\r\n        </div>\r\n\r\n\r\n        <div class=\"table-head border-top\">\r\n          <table>\r\n            <tr>\r\n              <th class=\"w50\">&nbsp;</th>\r\n              <th class=\"w120\">\r\n                <div class=\"th-search-acmt\">\r\n                  <mat-form-field class=\"cs-input date-column infix-bodr\">\r\n                    <input matInput [matDatepicker]=\"picker\" placeholder=\"Date\" name=\"date_created\"\r\n                      [(ngModel)]=\"filter.date_created\" (dateChange)=\"date_format('date_created')\" [max]=\"today_date\"\r\n                      disabled>\r\n                    <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\r\n                    <mat-datepicker #picker disabled=\"false\"></mat-datepicker>\r\n                  </mat-form-field>\r\n                </div>\r\n              </th>\r\n              <th class=\"w160\">\r\n                <div class=\"th-search-acmt\">\r\n                  <mat-form-field class=\"example-full-width cs-input select-input\">\r\n                    <input matInput placeholder=\"Search...\" type=\"text\" name=\"created_by_name\"\r\n                      [(ngModel)]=\"filter.created_by_name\" (keyup.enter)=\"leadList(active_tab)\">\r\n                  </mat-form-field>\r\n                </div>\r\n              </th>\r\n              <th class=\"w100\">\r\n                <div class=\"th-search-acmt\">\r\n                  <mat-form-field class=\"example-full-width cs-input select-input\">\r\n                    <input matInput placeholder=\"Search...\" type=\"text\" name=\"site_id\" [(ngModel)]=\"filter.site_id\"\r\n                      (keyup.enter)=\"leadList(active_tab)\">\r\n                  </mat-form-field>\r\n                </div>\r\n              </th>\r\n              <th class=\"w100\">\r\n                <div class=\"th-search-acmt\">\r\n                  <mat-form-field class=\"example-full-width cs-input select-input\">\r\n                    <mat-label>Select...</mat-label>\r\n                    <mat-select name=\"type\" #type=\"ngModel\" [(ngModel)]=\"filter.type\"\r\n                      (selectionChange)=\"leadList(active_tab)\">\r\n                      <mat-option value=\"\">All</mat-option>\r\n                      <mat-option value=\"Commercial\">Commercial</mat-option>\r\n                      <mat-option value=\"Residential\">Residential</mat-option>\r\n                      <mat-option value=\"Other\">Other</mat-option>\r\n                    </mat-select>\r\n                  </mat-form-field>\r\n                </div>\r\n              </th>\r\n              <th class=\"w100\">\r\n                <div class=\"th-search-acmt\">\r\n                  <mat-form-field class=\"example-full-width cs-input select-input\">\r\n                    <mat-label>Select...</mat-label>\r\n                    <mat-select name=\"lead_source\" #lead_source=\"ngModel\" [(ngModel)]=\"filter.lead_source\"\r\n                      (selectionChange)=\"leadList(active_tab)\">\r\n                      <mat-option value=\"\">All</mat-option>\r\n                      <mat-option value=\"Scouting\">Scouting</mat-option>\r\n                      <mat-option value=\"Reference\">Reference</mat-option>\r\n                      <mat-option value=\"Virtual Lead\">Virtual Lead</mat-option>\r\n                    </mat-select>\r\n                  </mat-form-field>\r\n                </div>\r\n              </th>\r\n              <th class=\"w100\">\r\n                <div class=\"th-search-acmt\">\r\n                  <mat-form-field class=\"example-full-width cs-input select-input\">\r\n                    <mat-label>Select...</mat-label>\r\n                    <mat-select name=\"size\" #size=\"ngModel\" [(ngModel)]=\"filter.size\"\r\n                      (selectionChange)=\"leadList(active_tab)\">\r\n                      <mat-option value=\"\">All</mat-option>\r\n                      <mat-option value=\"0-50\">0-50</mat-option>\r\n                      <mat-option value=\"51-100\">51-100</mat-option>\r\n                      <mat-option value=\"101-200\">101-200</mat-option>\r\n                      <mat-option value=\"201-500\">201-500</mat-option>\r\n                      <mat-option value=\"500-Above\">500-Above</mat-option>\r\n                    </mat-select>\r\n                  </mat-form-field>\r\n                </div>\r\n              </th>\r\n              <th class=\"w100\">\r\n                <div class=\"th-search-acmt\">\r\n                  <mat-form-field class=\"example-full-width cs-input select-input\">\r\n                    <mat-label>Select...</mat-label>\r\n                    <mat-select name=\"priority\" #priority=\"ngModel\" [(ngModel)]=\"filter.priority\"\r\n                      (selectionChange)=\"leadList(active_tab)\">\r\n                      <mat-option value=\"\">All</mat-option>\r\n                      <mat-option value=\"Hot\">Hot</mat-option>\r\n                      <mat-option value=\"Warm\">Warm</mat-option>\r\n                      <mat-option value=\"Cold\">Cold</mat-option>\r\n                    </mat-select>\r\n                  </mat-form-field>\r\n                </div>\r\n              </th>\r\n              <th class=\"w150\">\r\n                <div class=\"th-search-acmt\">\r\n                  <mat-form-field class=\"example-full-width cs-input select-input\">\r\n                    <input matInput placeholder=\"Search...\" type=\"text\" name=\"referral_by_type\"\r\n                      [(ngModel)]=\"filter.referral_by_type\" (keyup.enter)=\"leadList(active_tab)\">\r\n                  </mat-form-field>\r\n                </div>\r\n              </th>\r\n              <th class=\"w150\">\r\n                <div class=\"th-search-acmt\">\r\n                  <mat-form-field class=\"example-full-width cs-input select-input\">\r\n                    <input matInput placeholder=\"Search...\" type=\"text\" name=\"owner_name\"\r\n                      [(ngModel)]=\"filter.owner_name\" (keyup.enter)=\"leadList(active_tab)\">\r\n                  </mat-form-field>\r\n                </div>\r\n              </th>\r\n              <th class=\"w100\">\r\n                <div class=\"th-search-acmt\">\r\n                  <mat-form-field class=\"example-full-width cs-input select-input\">\r\n                    <input matInput placeholder=\"Search...\" type=\"text\" name=\"mobile_number\" [(ngModel)]=\"filter.mobile\"\r\n                      (keyup.enter)=\"leadList(active_tab)\">\r\n                  </mat-form-field>\r\n                </div>\r\n              </th>\r\n              <th class=\"w120\">\r\n                <div class=\"th-search-acmt\">\r\n                  <mat-form-field class=\"cs-input date-column infix-bodr\">\r\n                    <input matInput [matDatepicker]=\"picker1\" placeholder=\"Date\" name=\"estimate_delivery_date\"\r\n                      [(ngModel)]=\"filter.estimate_delivery_date\" (dateChange)=\"date_format('estimate_delivery_date')\"\r\n                      disabled>\r\n                    <mat-datepicker-toggle matSuffix [for]=\"picker1\"></mat-datepicker-toggle>\r\n                    <mat-datepicker #picker1 disabled=\"false\"></mat-datepicker>\r\n                  </mat-form-field>\r\n                </div>\r\n              </th>\r\n              <th class=\"w150\">\r\n                <div class=\"th-search-acmt\">\r\n                  <mat-form-field class=\"example-full-width cs-input select-input\">\r\n                    <input matInput placeholder=\"Search...\" type=\"text\" name=\"assigned_user\"\r\n                      [(ngModel)]=\"filter.assigned_user\" (keyup.enter)=\"leadList(active_tab)\">\r\n                  </mat-form-field>\r\n                </div>\r\n              </th>\r\n              <th class=\"w180\">\r\n                <div class=\"th-search-acmt\">\r\n                  <mat-form-field class=\"cs-input select-input\">\r\n                    <mat-select name=\"reporting_manager_id\" #reporting_manager_id=\"ngModel\"\r\n                      [(ngModel)]=\"filter.reporting_manager_id\" (selectionChange)=\"leadList(active_tab)\">\r\n                      <mat-option>\r\n                        <ngx-mat-select-search noEntriesFoundLabel=\"'no data found'\" placeholderLabel=\"Search..\"\r\n                          (keyup)=\"getReportManager($event.target.value, 'rsm1')\"></ngx-mat-select-search>\r\n                      </mat-option>\r\n                      <mat-option *ngFor=\"let list of report_manager;let index=index\" value=\"{{list.id}}\">\r\n                        {{list.name}}\r\n                      </mat-option>\r\n                    </mat-select>\r\n                  </mat-form-field>\r\n                </div>\r\n              </th>\r\n              <!-- <th class=\"w180\">&nbsp;</th> -->\r\n               <th class=\"w150\">   <div class=\"th-search-acmt\">\r\n                  <mat-form-field class=\"example-full-width cs-input select-input\">\r\n                    <input matInput placeholder=\"Search...\" type=\"text\" name=\"city\" [(ngModel)]=\"filter.city\"\r\n                      (keyup.enter)=\"leadList(active_tab)\">\r\n                  </mat-form-field>\r\n                </div></th>\r\n              <th class=\"w150\">   <div class=\"th-search-acmt\">\r\n                  <mat-form-field class=\"example-full-width cs-input select-input\">\r\n                    <input matInput placeholder=\"Search...\" type=\"text\" name=\"district\" [(ngModel)]=\"filter.district\"\r\n                      (keyup.enter)=\"leadList(active_tab)\">\r\n                  </mat-form-field>\r\n                </div></th>\r\n                 <th class=\"w250\">   </th>\r\n              <th class=\"w100\">&nbsp;</th>\r\n              <th class=\"w100\"*ngIf=\"active_tab == 'Lost' && login_data5.edit_lead=='1'\">&nbsp;</th>\r\n              <th class=\"w100\">&nbsp;</th>\r\n            </tr>\r\n          </table>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"table-container\">\r\n        <div class=\"table-content\">\r\n          <table>\r\n            <ng-container *ngIf=\"!loader\">\r\n              <tr *ngFor=\"let row of site_List; let i = index;\" [ngClass]=\"{'Current': serve.currentUserID == row.id}\">\r\n                <td class=\"w50\">{{i+1+sr_no}}</td>\r\n                <td class=\"w120\">{{row.date_created | date:'dd MMM yyyy'}}</td>\r\n                <td class=\"w160\">{{row.created_by_name}}</td>\r\n                <td class=\"w100\">\r\n                  <a class=\"link-btn\" (click)=\"serve.setData(filter)\"\r\n                    routerLink=\"lead-detail/{{row.id}}\">{{row.siteId}}</a>\r\n                </td>\r\n                <td class=\"w100\">{{row.type ? row.type:'--'}}</td>\r\n                <td class=\"w100\">{{row.lead_source ? row.lead_source : '--'}}</td>\r\n                <td class=\"w100\">{{row.size ? row.size : '--'}}</td>\r\n                <td class=\"w100 {{row.priority}}\">{{row.priority ? row.priority : '---'}}</td>\r\n                <td class=\"w150\">{{row.referral_by_type ? row.referral_by_type :'--'}}</td>\r\n                <td class=\"w150\">{{row.ownerName ? (row.ownerName | titlecase) : '--'}}</td>\r\n                <td class=\"w100\">{{row.ownerMobile ?row.ownerMobile : '--'}}</td>\r\n                <td class=\"w120\">{{row.estimate_delivery_date!==''?(row.estimate_delivery_date | date:'dd MMM\r\n                  yyyy'):'--'}}</td>\r\n                <td class=\"w150\">{{row.assigned_to_user_name ? row.assigned_to_user_name : '---'}}</td>\r\n                <td class=\"w180\">\r\n                  {{row.reporting_manager_name ? row.reporting_manager_name : '---'}}\r\n                  {{row.reporting_manager_employee_id ? ( '- ' +row.reporting_manager_employee_id) : ''}}\r\n                </td>\r\n                <!-- <td class=\"w180\">{{row.purpose ? row.purpose : '---'}}</td> -->\r\n                  <td class=\"w150\">{{row.city ? row.city : '--'}}</td>\r\n                  <td class=\"w150\">{{row.district ? row.district : '--'}}</td>\r\n                <td class=\"w250\">\r\n                  {{row.address}}{{row.city ? (', '+ row.city) : ''}} {{row.district ? (', '+ row.district) : ''}}\r\n                  {{row.state ? (', '+ row.state) : ''}} {{row.pincode ? (', '+ row.pincode) : ''}}\r\n                </td>\r\n                <td class=\"w100\">\r\n                  {{row.last_checkin!=='0000-00-00 00:00:00'?(row.last_checkin | date:'dd MMM yyyy'):'--'}}\r\n                </td>\r\n                <td class=\"w100\" *ngIf=\"active_tab == 'Lost' &&  login_data5.edit_lead=='1'\">\r\n                <div class=\"action-button\">\r\n                <button mat-icon-button matTooltip=\"Change Status\"\r\n                  (click)=\"changeStatus(row.id)\">\r\n                  <i class=\"material-icons edit\">edit</i>\r\n                </button>\r\n              </div>\r\n              </td>\r\n              <td class=\"w100\">\r\n                <button mat-icon-button matTooltip=\"Delete\" (click)=\"delete(row.id)\">\r\n                  <i class=\"material-icons del\">delete</i>\r\n                </button>\r\n              </td>\r\n\r\n              </tr>\r\n            </ng-container>\r\n            <ng-container *ngIf=\"loader\">\r\n              <tr class=\"sk-loading\" *ngFor=\"let row of [].constructor(10)\">\r\n                <td class=\"w50\">\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n                <td class=\"w120\">\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n                <td class=\"w160\">\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n                <td class=\"w100\">\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n                <td class=\"w100\">\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n                <td class=\"w100\">\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n                <td class=\"w100\">\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n                <td class=\"w100\">\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n                <td class=\"w150\">\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n                <td class=\"w150\">\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n                <td class=\"w100\">\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n                <td class=\"w120\">\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n                <td class=\"w150\">\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n                <td class=\"w180\">\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n                <td class=\"w180\">\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n                <td class=\"w250\">\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n                <td class=\"w100\">\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n              </tr>\r\n            </ng-container>\r\n          </table>\r\n        </div>\r\n      </div>\r\n\r\n\r\n      <div *ngIf=\"datanotfound == true\">\r\n        <app-not-result-found></app-not-result-found>\r\n      </div>\r\n    </div>\r\n    <!-- <div class=\"fab-btns\" *ngIf=\"login_data5.export_lead=='1'\">\r\n\r\n      <button mat-fab class=\"excel pulse\" (click)=\"downloadExcel();\">\r\n          <img src=\"assets/img/excel.svg\">\r\n          Download Excel\r\n      </button>\r\n  </div> -->\r\n  </div>\r\n\r\n\r\n\r\n   <div class=\"fab-btns\">\r\n    <button class=\"pulse excel\" mat-fab color=\"primary\" [ngClass]=\"{'pulse': fabBtnValue=='add'}\"\r\n      [matMenuTriggerFor]=\"menu\" (click)=\"lastBtnValue('upload');\">\r\n      <i class=\"material-icons\">apps</i>\r\n      Action\r\n    </button>\r\n    <mat-menu #menu=\"matMenu\">\r\n\r\n      <button *ngIf=\"login_data5.export_lead=='1'\" mat-menu-item (click)=\"downloadExcel();\">\r\n\r\n\r\n        <mat-icon>download</mat-icon>\r\n        <span>Download Excel</span>\r\n      </button> \r\n      <!-- <button *ngIf=\"login_data5.import_enquiry=='1'\" mat-menu-item (click)=\"upload_excel('insert');\">\r\n        <mat-icon>cloud_upload</mat-icon>\r\n        <span>Upload New Data</span>\r\n      </button> -->\r\n       <button *ngIf=\"login_data5.edit_lead=='1'\" mat-menu-item (click)=\"upload_excel('update');\">\r\n        <mat-icon>update</mat-icon>\r\n        <span>Assign User</span>\r\n      </button> \r\n      <!-- <button *ngIf=\"login_data5.add_enquiry=='1'\" mat-menu-item routerLink=\"add-lead\" (click)=\"lastBtnValue('add')\" [ngClass]=\"{'pulse': fabBtnValue=='add'}\">\r\n        <mat-icon>add</mat-icon>\r\n        Add New\r\n      </button>  -->\r\n       <!-- <button mat-menu-item routerLink=\"add-lead\" (click)=\"lastBtnValue('add')\"\r\n        [ngClass]=\"{'pulse': fabBtnValue=='add'}\">\r\n        <mat-icon>add</mat-icon>\r\n        Add New\r\n      </button>  -->\r\n    </mat-menu>\r\n  </div> \r\n \r\n</div>"

/***/ }),

/***/ "./src/app/site/site-list.component.scss":
/*!***********************************************!*\
  !*** ./src/app/site/site-list.component.scss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/site/site-list.component.ts":
/*!*********************************************!*\
  !*** ./src/app/site/site-list.component.ts ***!
  \*********************************************/
/*! exports provided: SiteListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SiteListComponent", function() { return SiteListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _dialog_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../dialog.component */ "./src/app/dialog.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! moment */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng6-toastr-notifications */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/ng6-toastr-notifications/fesm5/ng6-toastr-notifications.js");
/* harmony import */ var src_app_localstorage_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/localstorage.service */ "./src/app/localstorage.service.ts");
/* harmony import */ var src_services_DatabaseService__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/_services/DatabaseService */ "./src/_services/DatabaseService.ts");
/* harmony import */ var _bottom_sheet_bottom_sheet_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../bottom-sheet/bottom-sheet.component */ "./src/app/bottom-sheet/bottom-sheet.component.ts");
/* harmony import */ var _lead_change_enquiry_status_change_enquiry_status_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../lead/change-enquiry-status/change-enquiry-status.component */ "./src/app/lead/change-enquiry-status/change-enquiry-status.component.ts");
/* harmony import */ var _upload_file_modal_upload_file_modal_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../upload-file-modal/upload-file-modal.component */ "./src/app/upload-file-modal/upload-file-modal.component.ts");














var SiteListComponent = /** @class */ (function () {
    function SiteListComponent(serve, bottomSheet, _location, toast, dialog, alrt, router, route, session) {
        var _this = this;
        this.serve = serve;
        this.bottomSheet = bottomSheet;
        this._location = _location;
        this.toast = toast;
        this.dialog = dialog;
        this.alrt = alrt;
        this.router = router;
        this.route = route;
        this.session = session;
        this.active_tab = 'Pending';
        this.fabBtnValue = 'add';
        this.site_List = [];
        this.datanotfound = true;
        this.excelLoader = false;
        this.type_id = 1;
        this.loader = false;
        this.data = [];
        this.value = {};
        this.data_not_found = false;
        this.search_val = {};
        this.count_list = {};
        this.login_data = {};
        this.login_data5 = {};
        this.add = {};
        this.filter = {};
        this.enquiryList = [];
        this.sr_no = 0;
        this.pagenumber = 1;
        this.start = 0;
        this.date_from = {};
        this.date_to = {};
        this.downurl = "";
        this.report_manager = [];
        this.excel_data = [];
        this.downurl = serve.downloadUrl;
        this.page_limit = this.serve.pageLimit;
        this.login_data = this.session.getSession();
        this.login_data = this.login_data.value;
        this.login_data5 = this.login_data.data;
        this.route.params.subscribe(function (params) {
            _this.today_date = new Date().toISOString().slice(0, 10);
            _this.type_id = params.id;
            _this.type = params.type;
            _this.DashboardData = _this.route.queryParams['_value'];
            _this.page = _this.route.queryParams['_value'].pageType;
            if (_this.page == 'Report') {
                _this.active_tab = _this.route.queryParams['_value'].status;
                _this.filter.status = _this.route.queryParams['_value'].status;
                _this.filter.created_by_name = _this.route.queryParams['_value'].createdBy;
                _this.filter.month = _this.route.queryParams['_value'].month;
                _this.filter.year = _this.route.queryParams['_value'].year;
                console.log(_this.route.queryParams['_value'].referType, "line 77");
                if (_this.route.queryParams['_value'].referType == 'Scouting') {
                    console.log("inside if");
                    _this.filter.lead_source = 'Scouting';
                }
                else if (_this.route.queryParams['_value'].referType == 'Virtual Lead') {
                    _this.filter.lead_source = 'Virtual Lead';
                }
                else {
                    _this.filter.referral_by_type = _this.route.queryParams['_value'].referType;
                }
                console.log(_this.filter, "line 75");
                // this.leadList(this.active_tab);
            }
            console.log(_this.DashboardData.tab_type);
            if (_this.DashboardData.tab_type) {
                _this.active_tab = _this.DashboardData.tab_type;
            }
            _this.leadList(_this.active_tab);
        });
        this.getReportManager('');
    }
    SiteListComponent.prototype.ngOnInit = function () {
        this.filter = this.serve.getData();
        if (this.filter.status) {
            this.active_tab = this.filter.status;
        }
        if (this.page != 'Report') {
            this.leadList(this.active_tab);
            // this.influencer_type();
        }
    };
    SiteListComponent.prototype.backToList = function () {
        this._location.back();
    };
    SiteListComponent.prototype.pervious = function () {
        this.start = this.start - this.page_limit;
        this.leadList(this.active_tab);
    };
    SiteListComponent.prototype.nextPage = function () {
        this.start = this.start + this.page_limit;
        this.leadList(this.active_tab);
    };
    SiteListComponent.prototype.date_format = function (type) {
        if (type == 'date_created') {
            this.filter.date_created = moment__WEBPACK_IMPORTED_MODULE_4__(this.filter.date_created).format('YYYY-MM-DD');
        }
        else if (type == 'estimate_delivery_date') {
            this.filter.estimate_delivery_date = moment__WEBPACK_IMPORTED_MODULE_4__(this.filter.estimate_delivery_date).format('YYYY-MM-DD');
        }
        this.leadList(this.active_tab);
    };
    SiteListComponent.prototype.getReportManager = function (search, type) {
        var _this = this;
        if (type === void 0) { type = ''; }
        this.serve.post_rqst({ 'search': search }, "Checkin/getSalesUserForReporting").subscribe((function (result) {
            if (result['all_sales_user']['statusCode'] == 200) {
                _this.report_manager = result['all_sales_user']['all_sales_user'];
            }
            else {
                _this.toast.errorToastr(result['all_sales_user']['statusMsg']);
            }
        }));
    };
    SiteListComponent.prototype.openBottomSheet = function () {
        var _this = this;
        this.bottomSheet.open(_bottom_sheet_bottom_sheet_component__WEBPACK_IMPORTED_MODULE_10__["BottomSheetComponent"], {
            data: {
                'filterPage': 'site_List',
            }
        });
        this.bottomSheet._openedBottomSheetRef.afterDismissed().subscribe(function (modelData) {
            if (modelData) {
                _this.filter.date_from = modelData.date_from;
                _this.filter.date_to = modelData.date_to;
                _this.filter.user_id = modelData.user_id;
                _this.leadList(_this.active_tab);
            }
        });
    };
    SiteListComponent.prototype.changeStatus = function (enqid) {
        var _this = this;
        var dialogRef = this.alrt.open(_lead_change_enquiry_status_change_enquiry_status_component__WEBPACK_IMPORTED_MODULE_11__["ChangeEnquiryStatusComponent"], {
            width: '600px',
            panelClass: 'cs-modal',
            data: {
                'id': enqid,
                'tab': this.active_tab,
                'from': 'lead_list'
            }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result != false) {
                _this.leadList(_this.active_tab);
            }
        });
    };
    SiteListComponent.prototype.leadList = function (status) {
        var _this = this;
        this.loader = true;
        if (this.search_val.modified_date) {
            this.search_val.modified_date = moment__WEBPACK_IMPORTED_MODULE_4__(this.search_val.modified_date).format('YYYY-MM-DD');
        }
        if (this.pagenumber > this.total_page) {
            this.pagenumber = this.total_page;
            this.start = this.pageCount - this.page_limit;
        }
        if (this.start < 0) {
            this.start = 0;
        }
        if (status == 'Win_f') {
            this.filter.status = 'Win-F';
        }
        else if (status == 'Win_c') {
            this.filter.status = 'Win-C';
        }
        else {
            this.filter.status = status;
        }
        this.serve.post_rqst({ 'filter': this.filter, 'start': this.start, 'pagelimit': this.page_limit }, "Enquiry/getSiteList")
            .subscribe((function (result) {
            if (result['statusCode'] == 200) {
                _this.count = result['count'];
                _this.site_List = result['enquiry_list'];
                if (_this.site_List.length == 0) {
                    _this.datanotfound = true;
                }
                else {
                    _this.datanotfound = false;
                }
                _this.pagenumber = Math.ceil(_this.start / _this.page_limit) + 1;
                if (status == 'Open') {
                    _this.pageCount = _this.count.Open;
                    _this.total_page = Math.ceil(parseInt(_this.pageCount) / _this.page_limit);
                }
                else if (status == 'Lost') {
                    _this.pageCount = _this.count.Lost;
                    _this.total_page = Math.ceil(parseInt(_this.pageCount) / _this.page_limit);
                }
                else if (status == 'Win_f') {
                    _this.pageCount = _this.count.Win_f;
                    _this.total_page = Math.ceil(parseInt(_this.pageCount) / _this.page_limit);
                }
                else if (status == 'Win_c') {
                    _this.pageCount = _this.count.Win_c;
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
                if (_this.site_List.length == 0) {
                    _this.data_not_found = true;
                }
                else {
                    _this.data_not_found = false;
                }
                _this.sr_no = _this.pagenumber - 1;
                _this.sr_no = _this.sr_no * _this.page_limit;
                _this.loader = false;
            }
            else {
                _this.toast.errorToastr(result['statusMsg']);
                _this.loader = false;
            }
        }));
    };
    // upload_excel(type) {
    //   const dialogRf = this
    // }
    SiteListComponent.prototype.upload_excel = function (type) {
        var _this = this;
        var dialogRef = this.alrt.open(_upload_file_modal_upload_file_modal_component__WEBPACK_IMPORTED_MODULE_12__["UploadFileModalComponent"], {
            width: '500px',
            panelClass: 'cs-modal',
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
    SiteListComponent.prototype.refresh = function () {
        this.filter = {};
        this.serve.currentUserID = '';
        this.serve.setData(this.filter);
        this.leadList(this.active_tab);
    };
    // change_date_filter(type): void
    // {
    //   if(type == 'date_from'){
    //     this.search_val.date_from=moment(this.search_val.date_from).format('YYYY-MM-DD');
    //     this.leadList(this.active_tab);
    //   }
    //   else if(type == 'date_to'){
    //     this.search_val.date_to=moment(this.search_val.date_to).format('YYYY-MM-DD');
    //     this.leadList(this.active_tab);
    //   }
    //   else{
    //   }
    // }
    SiteListComponent.prototype.related_tabs = function (tab) {
        this.active_tab = tab;
    };
    SiteListComponent.prototype.userStatus = function (index, id, name) {
        var _this = this;
        this.dialog.confirm('You Want To Change Status').then(function (result) {
            if (result) {
                if (_this.site_List[index].checkin_active == "1") {
                    _this.site_List[index].checkin_active = "0";
                }
                else {
                    _this.site_List[index].checkin_active = "1";
                }
                var value = { "checkin_active": _this.site_List[index].checkin_active };
                _this.serve.post_rqst({ 'dr_id': id, 'data': value, 'uid': _this.login_data5.id, 'uname': name }, "Lead/checkin_active")
                    .subscribe(function (resp) {
                    _this.leadList(_this.active_tab);
                });
            }
        });
    };
    SiteListComponent.prototype.delete = function (id) {
        var _this = this;
        this.dialog.delete('Lead!').then(function (result) {
            if (result) {
                _this.serve.post_rqst({ 'id': id }, "Enquiry/deleteLead").subscribe(function (result) {
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
    SiteListComponent.prototype.downloadExcel = function () {
        var _this = this;
        this.excelLoader = true;
        this.serve.post_rqst({ 'filter': this.filter, 'start': this.start, 'pagelimit': this.page_limit }, "Excel/siteExcel").subscribe(function (result) {
            if (result['msg'] == true) {
                window.open(_this.downurl + result['filename']);
                _this.excelLoader = false;
                _this.leadList(_this.active_tab);
            }
            else {
            }
        }, function (err) {
            _this.excelLoader = false;
        });
    };
    // changeStatus(user_id, name, enqid) {
    //   const dialogRef = this.alrt.open(ChangeEnquiryStatusComponent, {
    //     width: '600px',
    //     panelClass:'cs-modal',
    //     data:{
    //       'id':user_id,
    //       'user_name':name,
    //       'enquiry_id':enqid
    //     }
    //   });
    //   dialogRef.afterClosed().subscribe(result => {
    //     if(result != false){
    //       this.leadList(this.active_tab);
    //     } 
    //   });
    // }
    SiteListComponent.prototype.lastBtnValue = function (value) {
        this.fabBtnValue = value;
    };
    SiteListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-site',
            template: __webpack_require__(/*! ./site-list.component.html */ "./src/app/site/site-list.component.html"),
            styles: [__webpack_require__(/*! ./site-list.component.scss */ "./src/app/site/site-list.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_services_DatabaseService__WEBPACK_IMPORTED_MODULE_9__["DatabaseService"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatBottomSheet"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["Location"], ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_7__["ToastrManager"], _dialog_component__WEBPACK_IMPORTED_MODULE_2__["DialogComponent"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["ActivatedRoute"], src_app_localstorage_service__WEBPACK_IMPORTED_MODULE_8__["sessionStorage"]])
    ], SiteListComponent);
    return SiteListComponent;
}());



/***/ }),

/***/ "./src/app/site/site-module/site.module.ts":
/*!*************************************************!*\
  !*** ./src/app/site/site-module/site.module.ts ***!
  \*************************************************/
/*! exports provided: SiteModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SiteModule", function() { return SiteModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _site_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../site-list.component */ "./src/app/site/site-list.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_auth_component_guard__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/auth-component.guard */ "./src/app/auth-component.guard.ts");
/* harmony import */ var _site_add_site_add_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../site-add/site-add.component */ "./src/app/site/site-add/site-add.component.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_material__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/material */ "./src/app/material.ts");
/* harmony import */ var ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ng-multiselect-dropdown */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/ng-multiselect-dropdown/fesm5/ng-multiselect-dropdown.js");
/* harmony import */ var ngx_mat_select_search__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-mat-select-search */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/ngx-mat-select-search/fesm5/ngx-mat-select-search.js");
/* harmony import */ var src_app_app_utility_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/app-utility.module */ "./src/app/app-utility.module.ts");
/* harmony import */ var angular_ng_autocomplete__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! angular-ng-autocomplete */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/angular-ng-autocomplete/fesm5/angular-ng-autocomplete.js");
/* harmony import */ var _site_detail_site_detail_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../site-detail/site-detail.component */ "./src/app/site/site-detail/site-detail.component.ts");
/* harmony import */ var _site_add_followup_site_add_followup_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../site-add-followup/site-add-followup.component */ "./src/app/site/site-add-followup/site-add-followup.component.ts");
/* harmony import */ var src_app_order_secondary_order_add_secondary_order_add_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! src/app/order/secondary-order-add/secondary-order-add.component */ "./src/app/order/secondary-order-add/secondary-order-add.component.ts");
/* harmony import */ var src_app_order_secondary_order_detail_secondary_order_detail_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! src/app/order/secondary-order-detail/secondary-order-detail.component */ "./src/app/order/secondary-order-detail/secondary-order-detail.component.ts");


















var siteRoutes = [
    { path: "", component: _site_list_component__WEBPACK_IMPORTED_MODULE_3__["SiteListComponent"], canActivate: [src_app_auth_component_guard__WEBPACK_IMPORTED_MODULE_5__["AuthComponentGuard"]], data: { expectedRole: ['1'] } },
    { path: "add-lead/:id", component: _site_add_site_add_component__WEBPACK_IMPORTED_MODULE_6__["SiteAddComponent"], canActivate: [src_app_auth_component_guard__WEBPACK_IMPORTED_MODULE_5__["AuthComponentGuard"]], data: { expectedRole: ['1'] } },
    { path: "add-lead", component: _site_add_site_add_component__WEBPACK_IMPORTED_MODULE_6__["SiteAddComponent"], canActivate: [src_app_auth_component_guard__WEBPACK_IMPORTED_MODULE_5__["AuthComponentGuard"]], data: { expectedRole: ['1'] } },
    { path: "lead-detail/:id", component: _site_detail_site_detail_component__WEBPACK_IMPORTED_MODULE_14__["SiteDetailComponent"], canActivate: [src_app_auth_component_guard__WEBPACK_IMPORTED_MODULE_5__["AuthComponentGuard"]], data: { expectedRole: ['1'] } },
    {
        path: 'lead-detail/:id', children: [
            { path: "secondary-order-add", component: src_app_order_secondary_order_add_secondary_order_add_component__WEBPACK_IMPORTED_MODULE_16__["SecondaryOrderAddComponent"], canActivate: [src_app_auth_component_guard__WEBPACK_IMPORTED_MODULE_5__["AuthComponentGuard"]], data: { expectedRole: ['1'] } },
            { path: 'secondary-order-detail/:id', component: src_app_order_secondary_order_detail_secondary_order_detail_component__WEBPACK_IMPORTED_MODULE_17__["SecondaryOrderDetailComponent"], canActivate: [src_app_auth_component_guard__WEBPACK_IMPORTED_MODULE_5__["AuthComponentGuard"]], data: { expectedRole: ['1'] } },
            { path: "edit-lead", component: _site_add_site_add_component__WEBPACK_IMPORTED_MODULE_6__["SiteAddComponent"], canActivate: [src_app_auth_component_guard__WEBPACK_IMPORTED_MODULE_5__["AuthComponentGuard"]], data: { expectedRole: ['1'] } },
        ]
    }
];
var SiteModule = /** @class */ (function () {
    function SiteModule() {
    }
    SiteModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                // SiteComponent,
                // ChangeEnquiryStatusComponent,
                _site_list_component__WEBPACK_IMPORTED_MODULE_3__["SiteListComponent"],
                _site_add_site_add_component__WEBPACK_IMPORTED_MODULE_6__["SiteAddComponent"],
                // SiteDetailComponent,
                // LeadAddFollowupModelComponent,
                _site_add_followup_site_add_followup_component__WEBPACK_IMPORTED_MODULE_15__["SiteAddFollowupComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(siteRoutes),
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatDialogModule"],
                src_app_material__WEBPACK_IMPORTED_MODULE_9__["MaterialModule"],
                ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_10__["NgMultiSelectDropDownModule"],
                ngx_mat_select_search__WEBPACK_IMPORTED_MODULE_11__["NgxMatSelectSearchModule"],
                src_app_app_utility_module__WEBPACK_IMPORTED_MODULE_12__["AppUtilityModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"],
                angular_ng_autocomplete__WEBPACK_IMPORTED_MODULE_13__["AutocompleteLibModule"],
            ],
            entryComponents: [
                // EditleadComponent,
                // LeadAddFollowupModelComponent,
                //  ChangeEnquiryStatusComponent,
                _site_add_followup_site_add_followup_component__WEBPACK_IMPORTED_MODULE_15__["SiteAddFollowupComponent"],
            ]
        })
    ], SiteModule);
    return SiteModule;
}());



/***/ })

}]);