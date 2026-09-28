(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["customer-customer-module-customer-module-module"],{

/***/ "./src/app/customer/complaint-detail/complaint-detail.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/customer/complaint-detail/complaint-detail.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-container\">\r\n    <div class=\"tools-container\">\r\n        <a mat-icon-button matTooltip=\"Back\" (click)=\"back()\">\r\n            <i class=\"material-icons\">arrow_back</i>\r\n        </a>\r\n        <h2>Complaint Details</h2>\r\n\r\n        <div class=\"left-auto\">\r\n\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"container pt10 pl10 pr10 pb50\">\r\n\r\n        <!-- <div class=\"row\">\r\n            <div class=\"col s12\">\r\n                <div class=\"card\">\r\n                    <div class=\"card-head\">\r\n                        <h2></h2>\r\n                    </div>\r\n                    <div class=\"card-body\">\r\n                        <div class=\"tracking\">\r\n                            <div style=\"display: flex;width: 80%;justify-content: space-around;\">\r\n                                <span\r\n                                    style=\"background-color: #E6E6FA ; box-shadow: 1px 4px 4px grey; ; padding: 9px; border-radius: 6px;\">{{getData.date_created_to_assign\r\n                                    ? getData.date_created_to_assign :''}}</span>\r\n                                <span\r\n                                    style=\"background-color: #E6E6FA ; box-shadow: 1px 4px 4px grey; ; padding: 9px; border-radius: 6px;\">{{getData.assign_to_inspection\r\n                                    ? getData.assign_to_inspection :''}}</span>\r\n                                <span\r\n                                    style=\"background-color: #E6E6FA ; box-shadow: 1px 4px 4px grey; ; padding: 9px; border-radius: 6px;\">{{getData.inspection_to_closed\r\n                                    ? getData.inspection_to_closed :''}}</span>\r\n                                <span\r\n                                    style=\"background-color: #E6E6FA ; box-shadow: 1px 4px 4px grey; ; padding: 9px; border-radius: 6px;\">{{getData.closed_to_feedback\r\n                                    ? getData.closed_to_feedback :''}}</span>\r\n                            </div>\r\n                            <div class=\"tracking-header\">\r\n                                <ul>\r\n                                    <li class=\"check\">\r\n                                        <span>1</span>\r\n                                        <div class=\"tracking-con\">\r\n                                            <p>date_created</p>\r\n                                            <p>{{getData.date_created |date : 'dd MMM yyy ,h:mm a'}}</p>\r\n                                        </div>\r\n                                    </li>\r\n                                    <li [ngClass]=\"getData.carpenter_assign_status == 'Done' ?'check' :'reject'\">\r\n                                        <span>2</span>\r\n                                        <div class=\"tracking-con\">\r\n                                            <p>Assign Date</p>\r\n                                            <p>{{getData.carpenter_assign_date != '0000-00-00' ?\r\n                                                (getData.carpenter_assign_date |date : 'dd MMM yyy ,h:mm a') :'---'}}\r\n                                            </p>\r\n                                        </div>\r\n                                    </li>\r\n                                    <li [ngClass]=\"getData.inspection_status == 'Done' ?'check' :'reject'\">\r\n                                        <span>3</span>\r\n                                        <div class=\"tracking-con\">\r\n                                            <p>Inspection Date</p>\r\n                                            <p>{{getData.inspection_date != '0000-00-00' ? (getData.inspection_date |\r\n                                                date : 'dd MMM yyy ,h:mm a') :'---'}}</p>\r\n                                        </div>\r\n                                    </li>\r\n                                    <li [ngClass]=\"getData.complaint_status == 'Closed' ?'check' :'reject'\">\r\n                                        <span>4</span>\r\n                                        <div class=\"tracking-con\">\r\n                                            <p>Closed Date</p>\r\n                                            <p>\r\n                                                {{getData.closed_date != '0000-00-00' ? (getData.closed_date |\r\n                                                date :'dd MMM yyy ,h:mm a'):'---'}}\r\n                                            </p>\r\n                                        </div>\r\n                                    </li>\r\n                                    <li [ngClass]=\"getData.feedback_status == 'Done' ?'check' :'reject'\">\r\n                                        <span>5</span>\r\n                                        <div class=\"tracking-con\">\r\n                                            <p>Feedback Date</p>\r\n                                            <p>{{getData.feedback_date != '0000-00-00' ? (getData.feedback_date | date :\r\n                                                'dd MMM yyy ,h:mm a'):'---'}}</p>\r\n                                        </div>\r\n                                    </li>\r\n\r\n                                </ul>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n            </div>\r\n\r\n\r\n        </div> -->\r\n\r\n        <div class=\"row\">\r\n            <div class=\"col s12 m8 l8\">\r\n                <div class=\"col s12 mt16 m12 l12\">\r\n                    <!-- product data start -->\r\n                    <div class=\"card\" *ngIf=\"!skLoading\">\r\n                        <div class=\"card-head\">\r\n                            <h2>Customer Details</h2>\r\n                            <div class=\"left-auto\" *ngIf=\"getData.complaint_status=='Pending'\">\r\n                                <a class=\"sm-mat-icon-button\" mat-icon-button matTooltip=\"Edit Detail\"\r\n                                    [routerLink]=\"[ 'add-complaint/', 'complaint',this.id ]\">\r\n                                    <i class=\"material-icons\">edit</i>\r\n                                </a>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"card-body\">\r\n                            <div class=\"grid-box\">\r\n\r\n\r\n\r\n\r\n                                <!-- <div class=\"block-feilds\">\r\n                                    <span>Serial No.</span>\r\n                                    <p>{{getData.serial_no ? getData.serial_no :'---'}}</p>\r\n                                </div> -->\r\n\r\n                                <div class=\"block-feilds\">\r\n                                    <span>Customer Name</span>\r\n                                    <p>{{getData.customer_name ? (getData.customer_name | titlecase) :'---'}}</p>\r\n                                </div>\r\n                                <div class=\"block-feilds\">\r\n                                    <span>Customer Mobile No.</span>\r\n                                    <p>{{getData.customer_mobile ? getData.customer_mobile :'---'}}</p>\r\n                                </div>\r\n\r\n                                <div class=\"block-feilds\">\r\n                                    <span>Alternate Mobile No.</span>\r\n                                    <p>{{getData.alternate_mobile_no ? getData.alternate_mobile_no :'---'}}</p>\r\n                                </div>\r\n                                <div class=\"block-feilds\">\r\n                                    <span>Customer Address</span>\r\n                                    <p>{{getData.address ? (getData.address | titlecase):'---'}} ,{{getData.district ?\r\n                                        (getData.district | titlecase) :'---'}} ,{{getData.pincode ? getData.pincode\r\n                                        :'---'}},\r\n                                        {{getData.state ? (getData.state | titlecase):'---'}}</p>\r\n                                </div>\r\n\r\n\r\n\r\n                            </div>\r\n                        </div>\r\n\r\n                    </div>\r\n\r\n                </div>\r\n                <div class=\"card\" *ngIf=\"skLoading\">\r\n                    <div class=\"sk-head\">\r\n                        <h2>&nbsp;</h2>\r\n                    </div>\r\n                    <div class=\"card-body\">\r\n                        <div class=\"grid-box single mt10\" *ngFor=\"let row of [].constructor(5)\">\r\n                            <div class=\"sk-box\">&nbsp;</div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col s12 mt16 m12 l12\">\r\n                    <div class=\"card\" *ngIf=\"!skLoading\">\r\n                        <div class=\"card-head\">\r\n                            <h2>Complaint Details</h2>\r\n                        </div>\r\n                        <div class=\"card-body\">\r\n                            <div class=\"grid-box\">\r\n                                <div class=\"block-feilds\">\r\n                                    <span>Date Created</span>\r\n                                    <p>{{getData.date_created ? (getData.date_created | date : 'dd MMM yyy ,h:mm a')\r\n                                        :'---'}}</p>\r\n                                </div>\r\n\r\n                                <div class=\"block-feilds\">\r\n                                    <span>Created By</span>\r\n                                    <p>{{getData.created_name ? (getData.created_name | titlecase ):'---'}}</p>\r\n                                </div>\r\n                                <div class=\"block-feilds\">\r\n                                    <span>Complaint No.</span>\r\n                                    <p>{{getData.complain_no ? getData.complain_no :'---'}}</p>\r\n                                </div>\r\n\r\n                                <div class=\"block-feilds flex-heading\">\r\n                                    <div>\r\n\r\n                                        <span>Complaint Status</span>\r\n                                        <p>\r\n                                            <strong class=\"yellow-clr\" *ngIf=\"getData.complaint_status=='Pending'\">\r\n                                                {{getData.complaint_status ? (getData.complaint_status | titlecase) :\r\n                                                '--'}}</strong>\r\n                                            <strong class=\"green-clr\" *ngIf=\"getData.complaint_status=='Closed'\">\r\n                                                {{getData.complaint_status ? (getData.complaint_status | titlecase) :\r\n                                                '--'}}</strong>\r\n                                            <strong class=\"red-clr\" *ngIf=\"getData.complaint_status=='Cancel'\">\r\n                                                {{getData.complaint_status ? (getData.complaint_status | titlecase) :\r\n                                                '--'}}</strong>\r\n                                        </p>\r\n                                    </div>\r\n                                    <div class=\"left-auto\" *ngIf=\"getData.complaint_status=='Pending'\">\r\n                                        <a class=\"sm-mat-icon-button\" mat-icon-button matTooltip=\"Change Status\"\r\n                                            (click)=\"updateComplaintStataus(getData.id)\">\r\n                                            <i class=\"material-icons\">edit</i>\r\n                                        </a>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"block-feilds\" *ngIf=\"getData.complaint_status=='Cancel'\">\r\n                                    <span>Reason Of Cancellation</span>\r\n                                    <p>{{getData.status_reason ? (getData.status_reason| titlecase):'N/A'}}</p>\r\n                                </div>\r\n                                <div class=\"block-feilds\">\r\n                                    <span>Nature Of Problem</span>\r\n                                    <p>{{getData.nature_of_problem ? (getData.nature_of_problem| titlecase):'N/A'}}</p>\r\n                                </div>\r\n                                <div class=\"block-feilds\" *ngIf=\"getData.carpenter_assign_status=='Done'\">\r\n                                    <span>Technician Name</span>\r\n                                    <p>{{getData.carpenter_name ? (getData.carpenter_name | titlecase ):'---'}}</p>\r\n                                </div>\r\n\r\n                                <div class=\"block-feilds\" *ngIf=\"getData.carpenter_assign_status=='Done'\">\r\n                                    <span>Technician Mobile No.</span>\r\n                                    <p>{{getData.carpenter_mobile ? getData.carpenter_mobile :'---'}}</p>\r\n                                </div>\r\n                                <div class=\"block-feilds\">\r\n                                    <span>TAT</span>\r\n                                    <p>{{getData.pending_at ? (getData.pending_at | titlecase ):'---'}}</p>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"card-head mt15\" *ngIf=\"complaintImg.length\">\r\n                            <h2>Complaint Images</h2>\r\n                        </div>\r\n                        <div class=\"card-body\" *ngIf=\"complaintImg.length\">\r\n                            <div class=\"grid-box\">\r\n                                <div class=\"block-feilds\">\r\n                                    <div class=\"doc-img\">\r\n                                        <div class=\"image-block\" *ngFor=\"let row of complaintImg\">\r\n                                            <img [src]=\"url+row.image\" (click)=\"imageModel(url+row.image)\"\r\n                                                style=\"cursor: zoom-in;\">\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n\r\n                    </div>\r\n                    <div class=\"card\" *ngIf=\"skLoading\">\r\n                        <div class=\"sk-head\">\r\n                            <h2>&nbsp;</h2>\r\n                        </div>\r\n                        <div class=\"card-body\">\r\n                            <div class=\"grid-box single mt10\" *ngFor=\"let row of [].constructor(5)\">\r\n                                <div class=\"sk-box\">&nbsp;</div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"card\" *ngIf=\"skLoading\">\r\n                    <div class=\"sk-head\">\r\n                        <h2>&nbsp;</h2>\r\n                    </div>\r\n                    <div class=\"card-body\">\r\n                        <div class=\"grid-box single mt10\" *ngFor=\"let row of [].constructor(5)\">\r\n                            <div class=\"sk-box\">&nbsp;</div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"col s12 mt16 m12 l12\" *ngIf=\"getData.inspection_status!='Pending'\">\r\n                    <div class=\"card\" *ngIf=\"!skLoading\">\r\n                        <div class=\"card-head\">\r\n                            <h2>Inspection Details</h2>\r\n                        </div>\r\n                        <div class=\"card-body\">\r\n                            <div class=\"grid-box\">\r\n                                <div class=\"block-feilds\">\r\n                                    <span>Serial No.</span>\r\n                                    <p>{{getData.serial_no ? getData.serial_no :'---'}}</p>\r\n                                </div>\r\n                                <div class=\"block-feilds\">\r\n                                    <span>Product Name</span>\r\n                                    <p>{{getData.product_name ? (getData.product_name| titlecase) :'---'}}</p>\r\n                                </div>\r\n                                <div class=\"block-feilds\">\r\n                                    <span>Product Code</span>\r\n                                    <p>{{getData.product_code ? (getData.product_code| titlecase) :'---'}}</p>\r\n                                </div>\r\n                                <div class=\"block-feilds\">\r\n                                    <span>Warranty Status</span>\r\n                                    <p>{{getData.warranty_status ? (getData.warranty_status | titlecase):'---'}}</p>\r\n                                </div>\r\n                                <div class=\"block-feilds\">\r\n                                    <span>Closing Type</span>\r\n                                    <p>{{getData.closing_type ? getData.closing_type:'N/A'}}</p>\r\n                                </div>\r\n                                <div class=\"block-feilds\">\r\n                                    <span>Inspection Remark</span>\r\n                                    <p>{{getData.inspection_remark ? (getData.inspection_remark| titlecase):'N/A'}}</p>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"card-head mt15\" *ngIf=\"inspectionImg.length\">\r\n                                <h2>Inspection Images</h2>\r\n                            </div>\r\n                            <div class=\"card-body\" *ngIf=\"inspectionImg.length\">\r\n                                <div class=\"grid-box\">\r\n                                    <div class=\"block-feilds\">\r\n                                        <div class=\"doc-img\">\r\n                                            <div class=\"image-block\" *ngFor=\"let row of inspectionImg\">\r\n                                                <img [src]=\"url+row.image\" (click)=\"imageModel(url+row.image)\"\r\n                                                    style=\"cursor: zoom-in;\">\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"card\" *ngIf=\"skLoading\">\r\n                        <div class=\"sk-head\">\r\n                            <h2>&nbsp;</h2>\r\n                        </div>\r\n                        <div class=\"card-body\">\r\n                            <div class=\"grid-box single mt10\" *ngFor=\"let row of [].constructor(5)\">\r\n                                <div class=\"sk-box\">&nbsp;</div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"col s12 mt16 m12 l12\" *ngIf=\"spare_list.length > 0\">\r\n                    <div class=\"card\" *ngIf=\"!skLoading\">\r\n                        <div class=\"card-head\">\r\n                            <h2>Spare Part Details</h2>\r\n                        </div>\r\n                        <div class=\"card-body\">\r\n                            <div mat-dialog-content>\r\n                                <div class=\"cs-table left-right-10\">\r\n                                    <div class=\" border-top\">\r\n                                        <div class=\"table-head\">\r\n                                            <table>\r\n                                                <tr>\r\n                                                    <th class=\"w30 text-center \">Sr.No</th>\r\n                                                    <th class=\"w110\">Install Date</th>\r\n                                                    <th class=\"w150\">Technician Details</th>\r\n                                                    <th class=\"w80\">Part Name</th>\r\n                                                    <th class=\"w80\">Part No.</th>\r\n                                                    <th class=\"w30 text-center \">Qty</th>\r\n                                                </tr>\r\n                                            </table>\r\n                                        </div>\r\n                                    </div>\r\n\r\n                                    <div class=\"table-container pb0\">\r\n                                        <div class=\"table-content none-shadow\">\r\n                                            <table>\r\n                                                <ng-container>\r\n                                                    <tr *ngFor=\"let row of spare_list; let i = index\">\r\n                                                        <td class=\"w30 text-center \">{{i+1}}</td>\r\n                                                        <td class=\"w110\">{{row.installed_on ? (row.installed_on |\r\n                                                            date : 'dd MMM yyy ,h:mm a') : '--'}}</td>\r\n                                                        <td class=\"w150 \">{{row.installation_by_name?\r\n                                                            (row.installation_by_name |\r\n                                                            titlecase):'--'}}-{{row.installation_by_mobile}}</td>\r\n                                                        <td class=\"w80\">{{row.part_name? (row.part_name| titlecase)\r\n                                                            :'--'}}</td>\r\n                                                        <td class=\"w80\">{{row.part_no?( row.part_no| titlecase) :'--'}}\r\n                                                        </td>\r\n                                                        <td class=\"w30 text-center \">{{row.qty? row.qty :'--'}}</td>\r\n                                                    </tr>\r\n                                                </ng-container>\r\n                                            </table>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"col s12 mt16 m12 l12\" *ngIf=\"complaint_visit.length > 0\">\r\n                    <div class=\"card\" *ngIf=\"!skLoading\">\r\n                        <div class=\"card-head\">\r\n                            <h2>Complaint Visit</h2>\r\n                        </div>\r\n                        <div class=\"card-body\">\r\n                            <div mat-dialog-content>\r\n                                <div class=\"cs-table left-right-10\">\r\n                                    <div class=\" border-top\">\r\n                                        <div class=\"table-head\">\r\n                                            <table>\r\n                                                <tr>\r\n                                                    <th class=\"w40\">Sr.No</th>\r\n                                                    <th class=\"w130\">Visit Date</th>\r\n                                                    <th class=\"w180\">Technician Details</th>\r\n                                                    <th class=\"w50\">Start Time</th>\r\n                                                    <th class=\"w180\">Start Adddress</th>\r\n                                                    <th class=\"w50\">Stop Time</th>\r\n                                                    <th class=\"w200\">Stop Adddress</th>\r\n                                                </tr>\r\n                                            </table>\r\n                                        </div>\r\n                                    </div>\r\n\r\n                                    <div class=\"table-container pb0\">\r\n                                        <div class=\"table-content none-shadow\">\r\n                                            <table>\r\n                                                <ng-container>\r\n                                                    <tr *ngFor=\"let row of complaint_visit; let i = index\">\r\n                                                        <td class=\"w40 text-center\">{{i + 1}}</td>\r\n                                                        <td class=\"w130\">{{row.date_created ? (row.date_created | date :\r\n                                                            'dd MMM yyy ,h:mm a') : '--'}}</td>\r\n                                                        <td class=\"w180\">{{row.created_by_name? (row.created_by_name |\r\n                                                            titlecase):'--'}}-{{row.created_by_mobile}}</td>\r\n                                                        <td class=\"w50\">{{row.visit_start_time ? (row.visit_start_time |\r\n                                                            date : 'shortTime') : '--'}}</td>\r\n                                                        <td class=\"w180\">{{row.visit_start_address?\r\n                                                            (row.visit_start_address | titlecase):'--'}}</td>\r\n                                                        <td class=\"w50\">{{row.visit_stop_time ? (row.visit_stop_time |\r\n                                                            date : 'shortTime') : '--'}}</td>\r\n                                                        <td class=\"w200\">{{row.visit_stop_address?\r\n                                                            (row.visit_stop_address | titlecase):'--'}}</td>\r\n                                                    </tr>\r\n                                                </ng-container>\r\n                                            </table>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n\r\n\r\n                <div class=\"col s12 mt16 m12 l12\"\r\n                    *ngIf=\"getData.complaint_status=='Closed' || getData.complaint_status=='Cancel'\">\r\n                    <div class=\"card\" *ngIf=\"!skLoading\">\r\n                        <div class=\"card-head\">\r\n                            <h2>{{getData.complaint_status}} Details</h2>\r\n                        </div>\r\n                        <div class=\"card-body\">\r\n                            <div class=\"grid-box\">\r\n                                <div class=\"block-feilds\" *ngIf=\"getData.replaced_status=='Done'\">\r\n                                    <span>New Serial No.</span>\r\n                                    <p>{{getData.new_serial_no ? (getData.new_serial_no| titlecase):'N/A'}}</p>\r\n                                </div>\r\n                                <div class=\"block-feilds\" *ngIf=\"getData.replaced_status=='Done'\">\r\n                                    <span>Replaced By</span>\r\n                                    <p>{{getData.replaced_by_type ? (getData.replaced_by_type| titlecase):'N/A'}}</p>\r\n                                </div>\r\n                                <div class=\"block-feilds\" *ngIf=\"getData.replaced_by_type=='Dealer'\">\r\n                                    <span>Company Name</span>\r\n                                    <p>{{getData.replaced_by_company_name?(getData.replaced_by_company_name |\r\n                                        titlecase):'N/A'}}</p>\r\n                                </div>\r\n                                <div class=\"block-feilds\" *ngIf=\"getData.replaced_by_type=='Dealer'\">\r\n                                    <span>Dealer Name</span>\r\n                                    <p>{{getData.replaced_by_name ? (getData.replaced_by_name | titlecase):'N/A'}}</p>\r\n                                </div>\r\n                                <div class=\"block-feilds\" *ngIf=\"getData.replaced_by_type=='Dealer'\">\r\n                                    <span>Dealer Mobile</span>\r\n                                    <p>{{getData.replaced_by_mobile ? getData.replaced_by_mobile:'N/A'}}</p>\r\n                                </div>\r\n\r\n                                <div class=\"block-feilds\" *ngIf=\"getData.replaced_status=='Done'\">\r\n                                    <span>Product type</span>\r\n                                    <p>{{getData.product_type ? getData.product_type:'N/A'}}</p>\r\n                                </div>\r\n                                <div class=\"block-feilds\">\r\n                                    <span>{{getData.complaint_status}} Date</span>\r\n                                    <p>{{getData.closed_date != '0000-00-00 00:00:00' ? (getData.closed_date |\r\n                                        date : 'dd MMM yyy ,h:mm a'):'N/A'}}</p>\r\n                                </div>\r\n                                <div class=\"block-feilds\" *ngIf=\"getData.complaint_status=='Cancel'\">\r\n                                    <span>{{getData.complaint_status}} Reason</span>\r\n                                    <p>{{getData.status_reason ? (getData.status_reason| titlecase):'N/A'}}</p>\r\n                                </div>\r\n                                <div class=\"block-feilds\" *ngIf=\"getData.complaint_status=='Closed'\">\r\n                                    <span>{{getData.complaint_status}} Remark</span>\r\n                                    <p>{{getData.closing_remark ? (getData.closing_remark| titlecase):'N/A'}}</p>\r\n                                </div>\r\n                                <div class=\"block-feilds\">\r\n                                    <span>Status Update Date</span>\r\n                                    <p>{{getData.status_updated_date != '0000-00-00 00:00:00' ?\r\n                                        (getData.status_updated_date |\r\n                                        date : 'dd MMM yyy ,h:mm a'):'N/A'}}</p>\r\n                                </div>\r\n                                <div class=\"block-feilds\">\r\n                                    <span>Status Update By</span>\r\n                                    <p>\r\n                                        {{ getData.status_updated_by_name ? (getData.status_updated_by_name |\r\n                                        titlecase): \"N/A\" }}\r\n                                    </p>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"card-head mt15\" *ngIf=\"closeImg.length\">\r\n                                <h2>{{getData.complaint_status}} Images</h2>\r\n                            </div>\r\n                            <div class=\"card-body\" *ngIf=\"closeImg.length\">\r\n                                <div class=\"grid-box\">\r\n                                    <div class=\"block-feilds\">\r\n                                        <div class=\"doc-img\">\r\n                                            <div class=\"image-block\" *ngFor=\"let row of closeImg\">\r\n                                                <img [src]=\"url+row.image\" (click)=\"imageModel(url+row.image)\"\r\n                                                    style=\"cursor: zoom-in;\">\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col s12 mt16 m12 l12\" *ngIf=\"getData.feedback_status=='Done'\">\r\n                    <div class=\"card\" *ngIf=\"!skLoading\">\r\n                        <div class=\"card-head\">\r\n                            <h2>Feedback Details</h2>\r\n                        </div>\r\n                        <div class=\"card-body\">\r\n                            <div class=\"grid-box\">\r\n                                <div class=\"block-feilds\">\r\n                                    <span>Feedback Date</span>\r\n                                    <p>{{getData.feedback_date !='0000-00-00 00:00:00' ? getData.feedback_date:'N/A'}}\r\n                                    </p>\r\n                                </div>\r\n                                <div class=\"block-feilds\">\r\n                                    <span>Feedback Remark</span>\r\n                                    <p>{{getData.feedback_remark ? (getData.feedback_remark| titlecase):'N/A'}}</p>\r\n                                </div>\r\n\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"col s12 m10 l4\" *ngIf=\"getData.log.length>0\">\r\n\r\n                <div class=\"card mt16 \" *ngIf=\"!skLoading\">\r\n                    <div class=\"card-head\">\r\n                        <h2>Logs</h2>\r\n                    </div>\r\n\r\n                    <div class=\"logs-box\">\r\n                        <ng-container *ngFor=\"let row of getData.log\">\r\n                            <div class=\"logshead \">{{row.created_by_name}} :- {{row.date_created | date:'dd MMM yyyy\r\n                                ,h:mm a'}}\r\n                            </div>\r\n                            <div class=\"logscontent \">\r\n                                <span>Remark : </span> {{row.msg ? (row.msg| titlecase) : (row.remark| titlecase)}}\r\n                            </div>\r\n                        </ng-container>\r\n                    </div>\r\n\r\n                </div>\r\n\r\n                <div class=\"card\" *ngIf=\"skLoading\">\r\n                    <div class=\"sk-head\">\r\n                        <h2>&nbsp;</h2>\r\n                    </div>\r\n                    <div class=\"card-body\">\r\n                        <div class=\"grid-box single mt10\" *ngFor=\"let row of [].constructor(5)\">\r\n                            <div class=\"sk-box\">\r\n                                &nbsp;\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n            </div>\r\n\r\n            <!-- ######################  TRACKER ######################## -->\r\n\r\n\r\n            <div class=\"row\">\r\n                <div class=\"col s12 m4 l4 mt25\" *ngIf=\"!skLoading\">\r\n                    <div>\r\n                        <div class=\"travel\">\r\n                            <ul>\r\n                                <li class=\"check\">\r\n                                    <span class=\"vistit-count\">\r\n                                        <i class=\"material-icons\">location_on</i>\r\n                                    </span>\r\n                                    <div class=\"tracking-con\">\r\n                                        <strong>\r\n                                            <p>Complaint Tracker</p>\r\n                                        </strong>\r\n                                        <!-- <p>{{getData.date_created |date : 'dd MMM yyy ,h:mm a'}}</p> -->\r\n                                    </div>\r\n                                    <br>\r\n                                </li>\r\n\r\n                                <li class=\"check\">\r\n                                    <span class=\"vistit-count\"><i class=\"material-icons\">location_on</i></span>\r\n                                    <!-- <span class=\"km\"> {{getData.date_created_to_assign\r\n                                        ? getData.date_created_to_assign :''}}</span> -->\r\n\r\n                                    <div class=\"counter\">\r\n                                        <div>\r\n                                            <div class=\"visit-time\">\r\n\r\n                                                <div class=\"visit-hours mt10\">\r\n                                                    <span class=\"green-clr\">Date Created</span>\r\n                                                    <p>{{getData.date_created |date : 'dd MMM yyy ,h:mm a'}}</p>\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n\r\n                                    </div>\r\n                                    <br>\r\n                                </li>\r\n                                <li *ngIf=\"getData.carpenter_assign_date!=='0000-00-00 00:00:00'\">\r\n                                    <span class=\"vistit-count\"><i class=\"material-icons\">location_on</i></span>\r\n                                    <!-- <span class=\"km\">{{getData.date_created_to_assign\r\n                                        ? getData.date_created_to_assign :''}}</span> -->\r\n                                    <div class=\"counter\">\r\n                                        <div>\r\n                                            <!-- <p><strong>Assign Date :</strong>\r\n                                                {{getData.carpenter_assign_date != '0000-00-00' ?\r\n                                                (getData.carpenter_assign_date |date : 'dd MMM yyy ,h:mm a') :'---'}}\r\n                                            </p> -->\r\n                                            <!-- <p *ngIf=\"row.start_address\"><strong>End GPS Address :</strong> {{row.address}}</p> -->\r\n                                            <div class=\"visit-time\">\r\n                                                <div class=\"visit-hours mt10\">\r\n                                                    <span class=\"green-clr\">Assign Date</span>\r\n                                                    <p>\r\n                                                        {{getData.carpenter_assign_date != '0000-00-00 00:00:00' ?\r\n                                                        (getData.carpenter_assign_date |date : 'dd MMM yyy ,h:mm a')\r\n                                                        :'---'}}</p>\r\n                                                    <!-- <p *ngIf=\"carpenter_assign_date == '0000-00-00 00:00:00'\">--</p> -->\r\n                                                </div>\r\n                                                <div class=\"visit-hours mt10\">\r\n                                                    <span>Total Time Taken</span>\r\n                                                    <p>{{getData.date_created_to_assign\r\n                                                        ? getData.date_created_to_assign :'--'}}</p>\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                    <br>\r\n                                </li>\r\n                                <li *ngIf=\"getData.inspection_date!=='0000-00-00 00:00:00'\">\r\n                                    <span class=\"vistit-count\"><i class=\"material-icons\">location_on</i></span>\r\n                                    <!-- <span class=\"km\">{{getData.assign_to_inspection\r\n                                        ? getData.assign_to_inspection :''}}</span> -->\r\n                                    <div class=\"counter\">\r\n                                        <div>\r\n                                            <!-- <p><strong>Inspection Date :</strong>\r\n                                                {{getData.inspection_date != '0000-00-00' ? (getData.inspection_date |\r\n                                                date : 'dd MMM yyy ,h:mm a') :'---'}}</p> -->\r\n                                            <!-- <p *ngIf=\"row.start_address\"><strong>End GPS Address :</strong> {{row.address}}</p> -->\r\n                                            <div class=\"visit-time\">\r\n                                                <div class=\"visit-hours mt10\">\r\n                                                    <span class=\"green-clr\">Inspection Date</span>\r\n                                                    <p>{{getData.inspection_date != '0000-00-00 00:00:00' ?\r\n                                                        (getData.inspection_date |\r\n                                                        date : 'dd MMM yyy ,h:mm a') :'---'}}</p>\r\n                                                </div>\r\n                                                <div class=\"visit-hours mt10\">\r\n                                                    <span>Total Time Taken</span>\r\n                                                    <p>{{getData.assign_to_inspection\r\n                                                        ? getData.assign_to_inspection :'--'}}</p>\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                    <br>\r\n                                </li>\r\n                                <li *ngIf=\"getData.closed_date!=='0000-00-00 00:00:00'\">\r\n                                    <span class=\"vistit-count\"><i class=\"material-icons\">location_on</i></span>\r\n                                    <!-- <span class=\"km\"> {{getData.inspection_to_closed\r\n                                        ? getData.inspection_to_closed :''}}</span> -->\r\n                                    <div class=\"counter\">\r\n                                        <div>\r\n                                            <!-- <p><strong>Closed Date :</strong>\r\n                                                {{getData.closed_date != '0000-00-00' ? (getData.closed_date |\r\n                                                date :'dd MMM yyy ,h:mm a'):'---'}}</p> -->\r\n                                            <!-- <p *ngIf=\"row.start_address\"><strong>End GPS Address :</strong> {{row.address}}</p> -->\r\n                                            <div class=\"visit-time\">\r\n                                                <div class=\"visit-hours mt10\"\r\n                                                    *ngIf=\"getData.complaint_status=='Closed'\">\r\n                                                    <span class=\"green-clr\">Closed Date</span>\r\n                                                    <p>{{getData.closed_date != '0000-00-00 00:00:00' ?\r\n                                                        (getData.closed_date |\r\n                                                        date :'dd MMM yyy ,h:mm a'):'---'}}</p>\r\n                                                </div>\r\n                                                <div class=\"visit-hours mt10\"\r\n                                                    *ngIf=\"getData.complaint_status=='Cancel'\">\r\n                                                    <span class=\"green-clr\">Cancel Date</span>\r\n                                                    <p>{{getData.closed_date != '0000-00-00 00:00:00' ?\r\n                                                        (getData.closed_date |\r\n                                                        date :'dd MMM yyy ,h:mm a'):'---'}}</p>\r\n                                                </div>\r\n                                                <div class=\"visit-hours mt10\">\r\n                                                    <span>Total Time Taken</span>\r\n                                                    <p>{{getData.inspection_to_closed\r\n                                                        ? getData.inspection_to_closed :'--'}}</p>\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                    <br>\r\n                                </li>\r\n                                <li *ngIf=\"getData.feedback_date!=='0000-00-00 00:00:00'\">\r\n                                    <span class=\"vistit-count\"><i class=\"material-icons\">location_on</i></span>\r\n                                    <!-- <span class=\"km\">{{getData.inspection_to_closed\r\n                                        ? getData.inspection_to_closed :''}} </span> -->\r\n                                    <div class=\"counter\">\r\n                                        <div>\r\n                                            <!-- <p><strong>Feedback Date :</strong>\r\n                                                {{getData.feedback_date != '0000-00-00' ? (getData.feedback_date | date\r\n                                                :\r\n                                                'dd MMM yyy ,h:mm a'):'---'}}</p> -->\r\n                                            <!-- <p *ngIf=\"row.start_address\"><strong>End GPS Address :</strong> {{row.address}}</p> -->\r\n                                            <div class=\"visit-time\">\r\n                                                <div class=\"visit-hours mt10\">\r\n                                                    <span class=\"green-clr\">Feedback Date</span>\r\n                                                    <p>{{getData.feedback_date != '0000-00-00 00:00:00' ?\r\n                                                        (getData.feedback_date\r\n                                                        | date\r\n                                                        :\r\n                                                        'dd MMM yyy ,h:mm a'):'---'}}</p>\r\n                                                </div>\r\n                                                <div class=\"visit-hours mt10\">\r\n                                                    <span>Total Time Taken</span>\r\n                                                    <p>--</p>\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </li>\r\n                            </ul>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"fab-btns\" *ngIf=\"getData.complaint_status=='Pending'\">\r\n        <button class=\" pulse excel\" mat-fab color=\"primary\" [matMenuTriggerFor]=\"menu\">\r\n            <i class=\"material-icons\">apps</i>\r\n            Action\r\n        </button>\r\n        <mat-menu #menu=\"matMenu\">\r\n            <button mat-menu-item (click)=\"openDialog(getData.id,getData.state)\"\r\n                [ngClass]=\"{'pulse': fabBtnValue=='activity'}\">\r\n                <mat-icon>assignment</mat-icon>\r\n                <span>Assign Technician</span>\r\n            </button>\r\n\r\n            <button mat-menu-item (click)=\"openDialog2(getData.id)\" [ngClass]=\"{'pulse': fabBtnValue=='activity'}\">\r\n                <mat-icon>add</mat-icon>\r\n                <span>Add Remark</span>\r\n            </button>\r\n        </mat-menu>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/customer/complaint-detail/complaint-detail.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/customer/complaint-detail/complaint-detail.component.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".travel ul {\n  margin-left: 25px;\n  position: relative;\n  margin-top: 6px;\n}\n\n.travel ul li .counter {\n  width: 350px;\n  border-radius: 10px;\n  box-shadow: 0px 3px 6px 0px rgba(0, 0, 0, 0.1);\n  overflow: hidden;\n}"

/***/ }),

/***/ "./src/app/customer/complaint-detail/complaint-detail.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/customer/complaint-detail/complaint-detail.component.ts ***!
  \*************************************************************************/
/*! exports provided: ComplaintDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComplaintDetailComponent", function() { return ComplaintDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var src_app_image_module_image_module_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/image-module/image-module.component */ "./src/app/image-module/image-module.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_services_DatabaseService__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/_services/DatabaseService */ "./src/_services/DatabaseService.ts");
/* harmony import */ var src_app_localstorage_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/localstorage.service */ "./src/app/localstorage.service.ts");
/* harmony import */ var ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng6-toastr-notifications */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/ng6-toastr-notifications/fesm5/ng6-toastr-notifications.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var src_app_dialog_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/dialog.component */ "./src/app/dialog.component.ts");
/* harmony import */ var src_app_dialog_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/dialog.service */ "./src/app/dialog.service.ts");
/* harmony import */ var src_app_service_exportexcel_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/service/exportexcel.service */ "./src/app/service/exportexcel.service.ts");
/* harmony import */ var src_app_engineer_assign_model_component_engineer_assign_model_component_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/engineer-assign-model-component/engineer-assign-model-component.component */ "./src/app/engineer-assign-model-component/engineer-assign-model-component.component.ts");
/* harmony import */ var src_app_add_complaint_remark_add_complaint_remark_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/add-complaint-remark/add-complaint-remark.component */ "./src/app/add-complaint-remark/add-complaint-remark.component.ts");
/* harmony import */ var src_app_service_complaint_update_model_complaint_update_model_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/service/complaint-update-model/complaint-update-model.component */ "./src/app/service/complaint-update-model/complaint-update-model.component.ts");















var ComplaintDetailComponent = /** @class */ (function () {
    function ComplaintDetailComponent(location, session, router, alert, service, editdialog, dialog, route, toast, excelservice, dialog1) {
        var _this = this;
        this.location = location;
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
        this.stateDetail = [];
        this.product_size = [];
        this.spare_list = [];
        this.complaint_visit = [];
        this.featureFlag = false;
        this.allMrpFlag = false;
        this.complaintImg = [];
        this.inspectionImg = [];
        this.closeImg = [];
        this.fabBtnValue = 'excel';
        this.url = this.service.uploadUrl + 'service_task/';
        this.route.params.subscribe(function (params) {
            _this.id = params.id;
            _this.service.currentUserID = params.id;
            if (_this.id) {
                _this.getComplaintDetail();
            }
        });
    }
    ComplaintDetailComponent.prototype.ngOnInit = function () {
    };
    ComplaintDetailComponent.prototype.getComplaintDetail = function () {
        var _this = this;
        this.loader = 1;
        this.skLoading = true;
        this.service.post_rqst({ 'complaint_id': this.id }, "ServiceTask/serviceComplaintDetail").subscribe(function (result) {
            if (result['statusCode'] == 200) {
                _this.skLoading = false;
                _this.getData = result['result'];
                // console.log('getData',this.getData);
                _this.complaintImg = _this.getData['image'];
                _this.inspectionImg = _this.getData['inspection_image'];
                _this.closeImg = _this.getData['closing_image'];
                _this.spare_list = _this.getData['spare_list'];
                _this.complaint_visit = _this.getData['complaint_visit'];
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
    ComplaintDetailComponent.prototype.imageModel = function (image) {
        var dialogRef = this.dialog.open(src_app_image_module_image_module_component__WEBPACK_IMPORTED_MODULE_3__["ImageModuleComponent"], {
            panelClass: 'Image-modal',
            data: {
                image: image,
            }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log(result);
        });
    };
    ComplaintDetailComponent.prototype.back = function () {
        this.location.back();
    };
    ComplaintDetailComponent.prototype.openDialog = function (row, state) {
        var _this = this;
        console.log(row);
        var dialogRef = this.dialog.open(src_app_engineer_assign_model_component_engineer_assign_model_component_component__WEBPACK_IMPORTED_MODULE_12__["EngineerAssignModelComponentComponent"], {
            width: '400px',
            panelClass: 'cs-model',
            data: {
                id: row,
                state: state,
            }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result != false) {
                _this.getComplaintDetail();
            }
        });
    };
    ComplaintDetailComponent.prototype.openDialog2 = function (id) {
        var dialogRef = this.dialog.open(src_app_add_complaint_remark_add_complaint_remark_component__WEBPACK_IMPORTED_MODULE_13__["AddComplaintRemarkComponent"], {
            width: '500px',
            panelClass: 'cs-modal',
            data: {
                id: id,
            }
        });
        dialogRef.afterClosed().subscribe(function (result) {
        });
    };
    ComplaintDetailComponent.prototype.updateComplaintStataus = function (id) {
        var _this = this;
        var dialogRef = this.dialog.open(src_app_service_complaint_update_model_complaint_update_model_component__WEBPACK_IMPORTED_MODULE_14__["ComplaintUpdateModelComponent"], {
            width: '400px',
            panelClass: 'cs-model',
            data: {
                id: id,
            }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result != false) {
                _this.getComplaintDetail();
            }
        });
    };
    ComplaintDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-complaint-detail',
            template: __webpack_require__(/*! ./complaint-detail.component.html */ "./src/app/customer/complaint-detail/complaint-detail.component.html"),
            styles: [__webpack_require__(/*! ./complaint-detail.component.scss */ "./src/app/customer/complaint-detail/complaint-detail.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_8__["Location"], src_app_localstorage_service__WEBPACK_IMPORTED_MODULE_6__["sessionStorage"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], src_app_dialog_component__WEBPACK_IMPORTED_MODULE_9__["DialogComponent"], src_services_DatabaseService__WEBPACK_IMPORTED_MODULE_5__["DatabaseService"], src_app_dialog_service__WEBPACK_IMPORTED_MODULE_10__["DialogService"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_7__["ToastrManager"], src_app_service_exportexcel_service__WEBPACK_IMPORTED_MODULE_11__["ExportexcelService"], src_app_dialog_component__WEBPACK_IMPORTED_MODULE_9__["DialogComponent"]])
    ], ComplaintDetailComponent);
    return ComplaintDetailComponent;
}());



/***/ }),

/***/ "./src/app/customer/customer-add/customer-add.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/customer/customer-add/customer-add.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-container\">\r\n  <div class=\"tools-container\">\r\n    <a mat-icon-button matTooltip=\"Back\" (click)=\"back()\">\r\n      <i class=\"material-icons\">arrow_back</i>\r\n    </a>\r\n    <h2>{{ id ? \"Edit\" : \"Add New\" }} Customer </h2>\r\n  </div>\r\n\r\n  <div class=\"container pt10 pl10 pr10 pb50\">\r\n    <form #f=\"ngForm\" (ngSubmit)=\"f.valid && submitDetail()\">\r\n      <div class=\"row\">\r\n        <div class=\"col s12\">\r\n          <div class=\"card pb0\">\r\n            <div class=\"card-head\">\r\n              <h2>Basic Information</h2>\r\n            </div>\r\n            <div class=\"card-body cs-form\">\r\n              <div class=\"row\">\r\n                <div class=\"col s12 m3 l3\">\r\n                  <mat-form-field appearance=\"outline\" [ngClass]=\"{ 'has-error': name.invalid }\">\r\n                    <mat-label>Name</mat-label>\r\n                    <input matInput placeholder=\"Type Here ...\" name=\"name\" #name=\"ngModel\" [(ngModel)]=\"data.name\"\r\n                      onkeypress=\"return (event.charCode >= 65 && event.charCode <= 90) || (event.charCode >= 97 && event.charCode <= 122) || event.charCode === 32\"\r\n                      required />\r\n                  </mat-form-field>\r\n                  <div class=\"alert alert-danger\" *ngIf=\"name.touched || f.submitted\">\r\n                    <p *ngIf=\"name.errors?.required\">This field is required</p>\r\n                  </div>\r\n                </div>\r\n                <div class=\"col s12 m3 l3\">\r\n                  <mat-form-field appearance=\"outline\" [ngClass]=\"{ 'has-error': mobile_no.invalid }\">\r\n                    <mat-label>Mobile Number</mat-label>\r\n                    <input type=\"text\" name=\"mobile_no\" minlength=\"10\" maxlength=\"10\" matInput placeholder=\"\"\r\n                      #mobile_no=\"ngModel\" [(ngModel)]=\"data.mobile_no\"\r\n                      onkeypress=\"return event.charCode>=48 && event.charCode<=57\" (ngModelChange)=\"checkMobile()\"\r\n                      required />\r\n                  </mat-form-field>\r\n                  <div class=\"alert alert-danger\" *ngIf=\"mobile_no.touched || f.submitted\">\r\n                    <p *ngIf=\"mobile_no.errors?.required\">\r\n                      This field is required\r\n                    </p>\r\n                  </div>\r\n                  <div class=\"alert alert-danger\" *ngIf=\"exist\">\r\n                    Mobile no. already Exists.\r\n                  </div>\r\n                </div>\r\n                <div class=\"col s12 m3 l3\">\r\n                  <mat-form-field appearance=\"outline\" [ngClass]=\"{ 'has-error': alternate_mobile_no.invalid }\">\r\n                    <mat-label>Alternate Mobile Number</mat-label>\r\n\r\n                    <input type=\"text\" name=\"alternate_mobile_no\" minlength=\"10\" maxlength=\"10\" matInput placeholder=\"\"\r\n                      #alternate_mobile_no=\"ngModel\" [(ngModel)]=\"data.alternate_mobile_no\"\r\n                      onkeypress=\"return event.charCode>=48 && event.charCode<=57\" />\r\n                  </mat-form-field>\r\n                </div>\r\n                <ng-container>\r\n                  <div class=\"col s12 m3 l3\">\r\n                    <mat-form-field appearance=\"outline\">\r\n                      <mat-label>Email ID</mat-label>\r\n                      <input type=\"email\" name=\"email\" matInput placeholder=\"\" #email=\"ngModel\"\r\n                        pattern=\"[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$\" [(ngModel)]=\"data.email\" />\r\n                    </mat-form-field>\r\n                    <div class=\"alert alert-danger\" *ngIf=\"email.touched || f.submitted\">\r\n                      <p *ngIf=\"email.errors?.pattern\">\r\n                        This is not a valid Email ID !\r\n                      </p>\r\n                    </div>\r\n                  </div>\r\n                </ng-container>\r\n              </div>\r\n              <div class=\"row mb0\">\r\n                <div class=\"col s12 m6 l6\">\r\n                  <div class=\"row\">\r\n                    <ng-container>\r\n                      <div class=\"col s12 m6 l6\">\r\n                        <mat-form-field appearance=\"outline\">\r\n                          <mat-label>State</mat-label>\r\n                          <mat-select name=\"state\" #state=\"ngModel\" [(ngModel)]=\"data.state\" required\r\n                            (selectionChange)=\"getDistrict(1)\">\r\n                            <mat-option disabled=\"\">Select State</mat-option>\r\n                            <mat-option *ngFor=\"let row of states\" value=\"{{ row.state_name }}\">\r\n                              {{ row.state_name }}\r\n                            </mat-option>\r\n                          </mat-select>\r\n                        </mat-form-field>\r\n\r\n                        <div class=\"alert alert-danger\" *ngIf=\"state.touched || f.submitted\">\r\n                          <p *ngIf=\"state.errors?.required\">\r\n                            This field is required\r\n                          </p>\r\n                        </div>\r\n                      </div>\r\n                      <div class=\"col s12 m6 l6\">\r\n                        <mat-form-field appearance=\"outline\">\r\n                          <mat-label>District</mat-label>\r\n                          <mat-select name=\"district\" #district=\"ngModel\" [(ngModel)]=\"data.district\" required>\r\n                            <mat-option disabled=\"\">Select District</mat-option>\r\n                            <mat-option *ngFor=\"let row of district_list\" value=\"{{ row.district_name }}\">\r\n                              {{ row.district_name }}\r\n                            </mat-option>\r\n                          </mat-select>\r\n                        </mat-form-field>\r\n                        <div class=\"alert alert-danger\" *ngIf=\"district.touched || f.submitted\">\r\n                          <p *ngIf=\"district.errors?.required\">\r\n                            This field is required\r\n                          </p>\r\n                        </div>\r\n                      </div>\r\n                    </ng-container>\r\n                  </div>\r\n\r\n                  <div class=\"row\">\r\n                    <div class=\"col s12 m6 l6\">\r\n                      <mat-form-field appearance=\"outline\">\r\n                        <mat-label>City</mat-label>\r\n                        <input matInput placeholder=\"Type here...\" name=\"city\" #city=\"ngModel\" [(ngModel)]=\"data.city\"\r\n                          required />\r\n                      </mat-form-field>\r\n                      <div class=\"alert alert-danger\" *ngIf=\"city.touched || f.submitted\">\r\n                        <p *ngIf=\"city.errors?.required\">\r\n                          This field is required\r\n                        </p>\r\n                      </div>\r\n                    </div>\r\n                    <div class=\"col s12 m6 l6\">\r\n                      <mat-form-field appearance=\"outline\">\r\n                        <mat-label>Pincode</mat-label>\r\n                        <input matInput type=\"text\" name=\"pincode\" placeholder=\"Type Here ...\" #pincode=\"ngModel\"\r\n                          minlength=\"6\" maxlength=\"6\" [(ngModel)]=\"data.pincode\"\r\n                          onkeypress=\"return event.charCode>=48 && event.charCode<=57\" required />\r\n                      </mat-form-field>\r\n                      <div class=\"alert alert-danger\" *ngIf=\"pincode.touched || f.submitted\">\r\n                        <p *ngIf=\"pincode.errors?.required\">\r\n                          This field is required\r\n                        </p>\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <div class=\"col s12 m6 l6\">\r\n                  <mat-form-field appearance=\"outline\">\r\n                    <mat-label>Address</mat-label>\r\n                    <textarea matInput placeholder=\"Type Here ...\" name=\"address\" #address=\"ngModel\"\r\n                      [(ngModel)]=\"data.address\" class=\"h80\" required></textarea>\r\n                  </mat-form-field>\r\n                  <div class=\"alert alert-danger\" *ngIf=\"address.touched || f.submitted\">\r\n                    <p *ngIf=\"address.errors?.required\">\r\n                      This field is required\r\n                    </p>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"row\">\r\n        <div class=\"col s12\">\r\n          <div class=\"text-right\">\r\n            <button [ngClass]=\"{ loading: savingFlag == true }\" mat-raised-button color=\"accent\" type=\"submit\"\r\n              [disabled]=\"savingFlag == true\">\r\n              {{ savingFlag == true ? \"Saving\" : id ? \"Update\" : \"Save\" }}\r\n            </button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </form>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/customer/customer-add/customer-add.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/customer/customer-add/customer-add.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/customer/customer-add/customer-add.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/customer/customer-add/customer-add.component.ts ***!
  \*****************************************************************/
/*! exports provided: CustomerAddComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerAddComponent", function() { return CustomerAddComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng6-toastr-notifications */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/ng6-toastr-notifications/fesm5/ng6-toastr-notifications.js");
/* harmony import */ var src_services_DatabaseService__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/_services/DatabaseService */ "./src/_services/DatabaseService.ts");
/* harmony import */ var src_app_localstorage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/localstorage.service */ "./src/app/localstorage.service.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/common/fesm5/common.js");








var CustomerAddComponent = /** @class */ (function () {
    function CustomerAddComponent(service, rout, location, route, toast, session, http) {
        var _this = this;
        this.service = service;
        this.rout = rout;
        this.location = location;
        this.route = route;
        this.toast = toast;
        this.session = session;
        this.http = http;
        this.data = {};
        this.states = [];
        this.district_list = [];
        this.savingFlag = false;
        this.getData = {};
        this.exist = false;
        this.data.country = 'india';
        this.getStateList();
        this.route.params.subscribe(function (params) {
            _this.id = params.id;
            console.log(_this.id);
            if (_this.id) {
                _this.getCustomerDetail(_this.id);
            }
        });
    }
    CustomerAddComponent.prototype.ngOnInit = function () {
    };
    CustomerAddComponent.prototype.MobileNumber = function (event) {
        var pattern = /[0-9\+\-\ ]/;
        var inputChar = String.fromCharCode(event.charCode);
        if (event.keyCode != 8 && !pattern.test(inputChar)) {
            event.preventDefault();
        }
    };
    CustomerAddComponent.prototype.getDistrict = function (val) {
        var _this = this;
        var st_name;
        if (val == 1) {
            st_name = this.data.state;
        }
        this.service.post_rqst({ 'state_name': st_name }, "Influencer/getAllDistrict").subscribe((function (result) {
            if (result['statusCode'] == 200) {
                _this.district_list = result['all_district'];
            }
            else {
                _this.toast.errorToastr(result['statusMsg']);
            }
        }));
    };
    CustomerAddComponent.prototype.getStateList = function () {
        var _this = this;
        this.service.post_rqst(0, "Influencer/getAllState").subscribe((function (result) {
            if (result['statusCode'] == 200) {
                _this.states = result['all_state'];
            }
            else {
                _this.toast.errorToastr(result['statusMsg']);
            }
        }));
    };
    CustomerAddComponent.prototype.submitDetail = function () {
        var _this = this;
        this.savingFlag = true;
        var header;
        if (this.id) {
            header = this.service.post_rqst({ "data": this.data, 'type': 'Edit', 'id': this.id }, "ServiceCustomer/serviceCustomerAdd");
        }
        else {
            header = this.service.post_rqst({ "data": this.data, 'type': 'Add', }, "ServiceCustomer/serviceCustomerAdd");
        }
        header.subscribe((function (result) {
            if (result['statusCode'] == 200) {
                _this.rout.navigate(['/customer-list']);
                _this.toast.successToastr(result['statusMsg']);
                _this.savingFlag = false;
            }
            else {
                _this.toast.errorToastr(result['statusMsg']);
                _this.savingFlag = false;
            }
        }));
    };
    CustomerAddComponent.prototype.back = function () {
        this.location.back();
    };
    CustomerAddComponent.prototype.getCustomerDetail = function (id) {
        var _this = this;
        this.service.post_rqst({ 'customer_id': id }, "ServiceCustomer/serviceCustomerDetail").subscribe((function (result) {
            _this.getData = result['result'];
            console.log('getData', _this.getData);
            _this.data = _this.getData;
            _this.getDistrict(1);
        }));
    };
    CustomerAddComponent.prototype.checkMobile = function () {
        var _this = this;
        if (this.data.mobile_no.length == 10) {
            this.service.post_rqst({ 'customer_mobile': this.data.mobile_no }, "ServiceTask/customerCheck").subscribe(function (d) {
                console.log(d);
                if (d.statusMsg == "Exist") {
                    _this.toast.errorToastr("This Mobile No. is already exist!");
                }
            });
        }
    };
    CustomerAddComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-customer-add',
            template: __webpack_require__(/*! ./customer-add.component.html */ "./src/app/customer/customer-add/customer-add.component.html"),
            styles: [__webpack_require__(/*! ./customer-add.component.scss */ "./src/app/customer/customer-add/customer-add.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_services_DatabaseService__WEBPACK_IMPORTED_MODULE_4__["DatabaseService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_common__WEBPACK_IMPORTED_MODULE_7__["Location"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_3__["ToastrManager"],
            src_app_localstorage_service__WEBPACK_IMPORTED_MODULE_5__["sessionStorage"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClient"]])
    ], CustomerAddComponent);
    return CustomerAddComponent;
}());



/***/ }),

/***/ "./src/app/customer/customer-detail/customer-detail.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/customer/customer-detail/customer-detail.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-container\">\r\n  <div class=\"tools-container\">\r\n    <a mat-icon-button matTooltip=\"Back\" (click)=\"back()\">\r\n      <i class=\"material-icons\">arrow_back</i>\r\n    </a>\r\n    <h2>Customer Detail</h2>\r\n\r\n\r\n    <div class=\"left-auto df ac flex-gap-10\">\r\n      <a mat-icon-button matTooltip=\"Refresh\" (click)=\"refresh()\">\r\n        <i class=\"material-icons\">refresh</i>\r\n      </a>\r\n      <div class=\"pagination\" *ngIf=\"(tabType!= 'Profile')\">\r\n        <div class=\"pagination-content\">\r\n          Pages\r\n          <span>{{pagenumber}}</span>\r\n          of\r\n          <span>{{total_page}}</span>\r\n        </div>\r\n        <div class=\"page-nav\">\r\n          <button mat-icon-button matTooltip=\"Older\" (click)=\"pervious(tabType)\" [disabled]=\"start == 0\">\r\n            <i class=\"material-icons\">navigate_before</i>\r\n          </button>\r\n          <button mat-icon-button matTooltip=\"Newer\" (click)=\"nextPage(tabType)\" [disabled]=\"pagenumber == total_page \">\r\n            <i class=\"material-icons\">navigate_next</i>\r\n          </button>\r\n        </div>\r\n      </div>\r\n      <div class=\"mat-tabbar\">\r\n        <button mat-button [ngClass]=\"{'active' :tabType== 'Profile'}\"\r\n          (click)=\"tabType= 'Profile';getCustomerDetail()\"><i class=\"material-icons\">person</i>Customer Detail</button>\r\n        <button mat-button [ngClass]=\"{'active' :tabType== 'warranty'}\"\r\n          (click)=\"tabType= 'warranty';getWarrantyDetail()\"><i class=\"material-icons\">person</i>Warranty</button>\r\n        <button mat-button [ngClass]=\"{'active' :tabType== 'complaint'}\"\r\n          (click)=\"tabType= 'complaint';getComplaintDetail()\"><i class=\"material-icons\">person</i>Complaint</button>\r\n        <button mat-button [ngClass]=\"{'active' :tabType== 'installation'}\"\r\n          (click)=\"tabType= 'installation';getInstallationDetail()\"><i\r\n            class=\"material-icons\">person</i>Installation</button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"container pt10 pl10 pr10 container-scroll\">\r\n    <div class=\"row\" *ngIf=\"tabType== 'Profile'\">\r\n      <div class=\"col s12 m12 l12\">\r\n        <div class=\"card\" *ngIf=\"!skLoading\">\r\n          <div class=\"card-head\">\r\n            <h2>Customer Details</h2>\r\n            <div class=\"left-auto\">\r\n              <a class=\"sm-mat-icon-button\" mat-icon-button matTooltip=\"Edit Detail\"\r\n                [routerLink]=\"[ 'add-customer/', this.id ]\">\r\n                <i class=\"material-icons\">edit</i>\r\n              </a>\r\n            </div>\r\n          </div>\r\n          <div class=\"card-body\">\r\n            <div class=\"grid-box\">\r\n              <div class=\"block-feilds\">\r\n                <span>Name</span>\r\n                <p>{{getData.name ? (getData.name | titlecase ):'---'}}</p>\r\n              </div>\r\n              <div class=\"block-feilds\">\r\n                <span>Mobile No.</span>\r\n                <p>{{getData.mobile_no ? getData.mobile_no :'---'}}</p>\r\n              </div>\r\n\r\n              <div class=\"block-feilds\">\r\n                <span>Alternate Mobile No.</span>\r\n                <p>{{getData.alternate_mobile_no ? getData.alternate_mobile_no :'---'}}</p>\r\n              </div>\r\n              <div class=\"block-feilds\">\r\n                <span>Email Id.</span>\r\n                <p>{{getData.email ? getData.email :'---'}}</p>\r\n              </div>\r\n\r\n\r\n              <div class=\"block-feilds\">\r\n                <span>State</span>\r\n                <p>{{getData.state ? (getData.state | titlecase ):'---'}}</p>\r\n              </div>\r\n              <div class=\"block-feilds\">\r\n                <span>District</span>\r\n                <p>{{getData.district ? (getData.district | titlecase) :'---'}}</p>\r\n              </div>\r\n              <div class=\"block-feilds\">\r\n                <span>City</span>\r\n                <p>{{getData.city ? (getData.city | titlecase) :'---'}}</p>\r\n              </div>\r\n              <div class=\"block-feilds\">\r\n                <span>Pincode</span>\r\n                <p>{{getData.pincode ? getData.pincode :'---'}}</p>\r\n              </div>\r\n              <div class=\"block-feilds\">\r\n                <span>Address</span>\r\n                <p>{{getData.address ? (getData.address | titlecase ):'---'}}</p>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"card\" *ngIf=\"skLoading\">\r\n          <div class=\"sk-head\">\r\n            <h2>&nbsp;</h2>\r\n          </div>\r\n          <div class=\"card-body\">\r\n            <div class=\"img-container\">\r\n              <div class=\"image-block sk-loading\" *ngFor=\"let row of [].constructor(3)\">\r\n                &nbsp;\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <div class=\"row container container-scroll\" *ngIf=\"tabType== 'warranty'\">\r\n      <div class=\"cs-table horizontal-scroll\">\r\n        <div class=\"sticky-head\">\r\n          <div class=\"table-head\">\r\n            <table>\r\n              <tr>\r\n                <th class=\"w50\">Sr.No</th>\r\n                <th class=\"w150\">Date Created</th>\r\n                <th class=\"w150\">Created By</th>\r\n                <th class=\"w100\">Warranty No.</th>\r\n                <th class=\"w120\">Product Serial No.</th>\r\n                <th class=\"w150\">Product Detail</th>\r\n                <th class=\"w130\">Start Date</th>\r\n                <th class=\"w130\">End Date</th>\r\n                <th class=\"w120\">Status</th>\r\n\r\n                <th class=\"w180\">Reason Of Reject</th>\r\n                <th class=\"w150\">\r\n                  Status Update Date\r\n                </th>\r\n                <th class=\"w120\">\r\n                  Status Update By\r\n                </th>\r\n                <!-- <th class=\"w70 text-center\">Action</th> -->\r\n              </tr>\r\n            </table>\r\n          </div>\r\n          <div class=\"table-head bdrt\">\r\n            <table>\r\n              <tr>\r\n                <th class=\"w50\"></th>\r\n                <th class=\"w150\">\r\n                  <div class=\"th-search-acmt\">\r\n                    <mat-form-field class=\"cs-input date-column infix-bodr\">\r\n                      <input matInput [matDatepicker]=\"picker\" placeholder=\"Date\" name=\"date_created\"\r\n                        #date_created=\"ngModel\" [(ngModel)]=\"filter_data.date_created\"\r\n                        (ngModelChange)=\"date_format('warranty')\" [max]=\"today_date\" readonly />\r\n                      <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\r\n                      <mat-datepicker #picker></mat-datepicker>\r\n                    </mat-form-field>\r\n                  </div>\r\n                </th>\r\n                <th class=\"w150\">\r\n                  <div class=\"th-search-acmt\">\r\n                    <mat-form-field>\r\n                      <input type=\"text\" matInput placeholder=\"Search ...\" name=\"created_by_name\"\r\n                        (keyup.enter)=\"getWarrantyDetail()\" #created_by_name=\"ngModel\"\r\n                        [(ngModel)]=\"filter_data.created_by_name\" />\r\n                    </mat-form-field>\r\n                  </div>\r\n                </th>\r\n                <th class=\"w100\">\r\n                  <div class=\"th-search-acmt\">\r\n                    <mat-form-field>\r\n                      <input type=\"text\" matInput placeholder=\"Search ...\" name=\"id\" (keyup.enter)=\"getWarrantyDetail()\"\r\n                        #id=\"ngModel\" [(ngModel)]=\"filter_data.id\" />\r\n                    </mat-form-field>\r\n                  </div>\r\n                </th>\r\n                <th class=\"w120\">\r\n                  <div class=\"th-search-acmt\">\r\n                    <mat-form-field>\r\n                      <input type=\"text\" matInput placeholder=\"Search ...\" name=\"serial_no\"\r\n                        (keyup.enter)=\"getWarrantyDetail()\" #serial_no=\"ngModel\" [(ngModel)]=\"filter_data.serial_no\" />\r\n                    </mat-form-field>\r\n                  </div>\r\n                </th>\r\n                <th class=\"w150\">\r\n                  <div class=\"th-search-acmt\">\r\n                    <mat-form-field>\r\n                      <input type=\"text\" matInput placeholder=\"Search ...\" name=\"product_detail\"\r\n                        (keyup.enter)=\"getWarrantyDetail()\" #product_detail=\"ngModel\"\r\n                        [(ngModel)]=\"filter_data.product_detail\" />\r\n                    </mat-form-field>\r\n                  </div>\r\n                </th>\r\n                <th class=\"w130\">\r\n                  <div class=\"th-search-acmt\">\r\n                    <mat-form-field class=\"cs-input date-column infix-bodr\">\r\n                      <input matInput [matDatepicker]=\"picker2\" placeholder=\"Date\" name=\"date_of_purchase\"\r\n                        #date_of_purchase=\"ngModel\" [(ngModel)]=\"filter_data.date_of_purchase\"\r\n                        (ngModelChange)=\"date_format2()\" [max]=\"today_date\" readonly />\r\n                      <mat-datepicker-toggle matSuffix [for]=\"picker2\"></mat-datepicker-toggle>\r\n                      <mat-datepicker #picker2></mat-datepicker>\r\n                    </mat-form-field>\r\n                  </div>\r\n                </th>\r\n                <th class=\"w130\">\r\n                  <div class=\"th-search-acmt\">\r\n                    <mat-form-field class=\"cs-input date-column infix-bodr\">\r\n                      <input matInput [matDatepicker]=\"picker3\" placeholder=\"Date\" name=\"warranty_end_date\"\r\n                        #warranty_end_date=\"ngModel\" [(ngModel)]=\"filter_data.warranty_end_date\"\r\n                        (ngModelChange)=\"date_format3()\" [max]=\"today_date\" readonly />\r\n                      <mat-datepicker-toggle matSuffix [for]=\"picker3\"></mat-datepicker-toggle>\r\n                      <mat-datepicker #picker3></mat-datepicker>\r\n                    </mat-form-field>\r\n                  </div>\r\n                </th>\r\n                <th class=\"w120\">\r\n                  <div class=\"th-search-acmt\">\r\n                    <mat-form-field class=\"cs-input select-input\">\r\n                      <mat-select name=\"company_verification_status\" #company_verification_status=\"ngModel\"\r\n                        [(ngModel)]=\"filter_data.company_verification_status\" (selectionChange)=\"getWarrantyDetail()\">\r\n                        <mat-option value=\"\">All</mat-option>\r\n                        <mat-option value=\"Pending\">Pending</mat-option>\r\n                        <mat-option value=\"Verified\">Verified </mat-option>\r\n                        <mat-option value=\"Reject\">Reject </mat-option>\r\n                      </mat-select>\r\n                    </mat-form-field>\r\n                  </div>\r\n                </th>\r\n\r\n                <th class=\"w180\"></th>\r\n                <th class=\"w150\">\r\n                  <div class=\"th-search-acmt\">\r\n                    <mat-form-field class=\"cs-input date-column infix-bodr\">\r\n                      <input matInput [matDatepicker]=\"picker4\" placeholder=\"Date\" name=\"verification_on\"\r\n                        #verification_on=\"ngModel\" [(ngModel)]=\"filter_data.verification_on\"\r\n                        (ngModelChange)=\"date_format4()\" [max]=\"today_date\" readonly />\r\n                      <mat-datepicker-toggle matSuffix [for]=\"picker4\"></mat-datepicker-toggle>\r\n                      <mat-datepicker #picker4></mat-datepicker>\r\n                    </mat-form-field>\r\n                  </div>\r\n                </th>\r\n                <th class=\"w120\">\r\n                  <div class=\"th-search-acmt\">\r\n                    <mat-form-field>\r\n                      <input type=\"text\" matInput placeholder=\"Search ...\" name=\"verification_by_name\"\r\n                        (keyup.enter)=\"getWarrantyDetail()\" #verification_by_name=\"ngModel\"\r\n                        [(ngModel)]=\"filter_data.verification_by_name\" />\r\n                    </mat-form-field>\r\n                  </div>\r\n                </th>\r\n                <!-- <th class=\"w70 text-center\"></th> -->\r\n              </tr>\r\n            </table>\r\n          </div>\r\n\r\n        </div>\r\n\r\n        <div class=\"table-container\">\r\n          <div class=\"table-content\">\r\n            <table>\r\n              <ng-container *ngIf=\"!loader\">\r\n                <tr *ngFor=\"let row of warrantyList; let i = index\"\r\n                  [ngClass]=\"{ Current: service.currentUserID == row.id }\">\r\n                  <td class=\"w50\">{{ i + 1 + sr_no }}</td>\r\n                  <td class=\"w150\">\r\n                    {{ row.date_created | date : \"dd MMM yyy ,h:mm a\" }}\r\n                  </td>\r\n                  <td class=\"w150\">{{ row.created_by_name | titlecase }}</td>\r\n                  <td class=\"w100\"><a class=\"link-btn\" mat-button (click)=\"service.setData(filter_data)\"\r\n                      routerLink=\"warranty-detail/{{ row.id }}\" routerLinkActive=\"active\"> #War{{ row.id }}</a>\r\n                  </td>\r\n                  <td class=\"w120\">{{ row.serial_no ? (row.serial_no | titlecase):'--' }}</td>\r\n                  <td class=\"w150\">\r\n                    {{ row.product_name | titlecase }}-{{ row.product_code | titlecase }}\r\n                  </td>\r\n                  <td class=\"w130\">{{row.date_of_purchase != \"0000-00-00\" ? (row.date_of_purchase | date : \"dd MMM yyy\r\n                    \"):\r\n                    \"--\" }}</td>\r\n                  <td class=\"w130\">{{row.warranty_end_date != \"0000-00-00\" ? (row.warranty_end_date | date : \"dd MMM\r\n                    yyy\"): \"--\" }}</td>\r\n                  <td class=\"w120\">\r\n                    <strong class=\"yellow-clr\"\r\n                      *ngIf=\"row.company_verification_status=='Pending'\">{{row.company_verification_status}}</strong>\r\n                    <strong class=\"green-clr\"\r\n                      *ngIf=\"row.company_verification_status=='Verified'\">{{row.company_verification_status}}</strong>\r\n                    <strong class=\"red-clr\"\r\n                      *ngIf=\"row.company_verification_status=='Reject'\">{{row.company_verification_status}}</strong>\r\n                  </td>\r\n\r\n                  <td class=\"w180\">{{row.reject_reason| titlecase}}\r\n                  </td>\r\n                  <td class=\"w150\">\r\n                    {{\r\n                    row.verification_on != \"0000-00-00 00:00:00\"\r\n                    ? (row.verification_on | date : \"dd MMM yyy ,h:mm a\")\r\n                    : \"--\"\r\n                    }}\r\n                  </td>\r\n                  <td class=\"w120\">\r\n                    {{\r\n                    row.verification_by_name ? (row.verification_by_name | titlecase) : \"--\"\r\n                    }}\r\n                  </td>\r\n                  <!-- <td class=\"w70 text-center\">\r\n                            <div class=\"action-button\">\r\n                              <button mat-icon-button matTooltip=\"Edit\" (click)=\"updateWarrantyStataus(row.id)\">\r\n                                <i class=\"material-icons edit\">edit</i>\r\n                              </button>\r\n\r\n                            </div>\r\n\r\n                          </td> -->\r\n                </tr>\r\n              </ng-container>\r\n              <ng-container *ngIf=\"loader\">\r\n                <tr class=\"sk-loading\" *ngFor=\"let row of [].constructor(10)\">\r\n                  <td class=\"w50\">\r\n                    <div>&nbsp;</div>\r\n                  </td>\r\n                  <td class=\"w150\">\r\n                    <div>&nbsp;</div>\r\n                  </td>\r\n                  <td class=\"w150\">\r\n                    <div>&nbsp;</div>\r\n                  </td>\r\n                  <td class=\"w100\">\r\n                    <div>&nbsp;</div>\r\n                  </td>\r\n                  <td class=\"w120\">\r\n                    <div>&nbsp;</div>\r\n                  </td>\r\n                  <td class=\"w130\">\r\n                    <div>&nbsp;</div>\r\n                  </td>\r\n                  <td class=\"w130\">\r\n                    <div>&nbsp;</div>\r\n                  </td>\r\n                  <td class=\"w150\">\r\n                    <div>&nbsp;</div>\r\n                  </td>\r\n                  <td class=\"w120\">\r\n                    <div>&nbsp;</div>\r\n                  </td>\r\n\r\n                  <td class=\"w180\">\r\n                    <div>&nbsp;</div>\r\n                  </td>\r\n                  <td class=\"w150\">\r\n                    <div>&nbsp;</div>\r\n                  </td>\r\n                  <td class=\"w120\">\r\n                    <div>&nbsp;</div>\r\n                  </td>\r\n                </tr>\r\n              </ng-container>\r\n            </table>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n\r\n    </div>\r\n\r\n    <div class=\"container container-scroll row\" *ngIf=\"tabType== 'complaint'\">\r\n      <div class=\"cs-table horizontal-scroll\">\r\n        <div class=\"sticky-head\">\r\n          <div class=\"table-head\">\r\n            <table>\r\n              <tr>\r\n                <th class=\"w60\">Sr.No</th>\r\n                <th class=\"w160\">Date Created</th>\r\n                <th class=\"w100\">Created By</th>\r\n                <th class=\"w100\">Complaint No.</th>\r\n                <th class=\"w180\">Technician Details</th>\r\n                <th class=\"w130\">Inspection Status</th>\r\n                <th class=\"w100\">Status</th>\r\n\r\n                <th class=\"w130\">Last Remark</th>\r\n                <th class=\"w70 text-center\">TAT</th>\r\n                <th class=\"w180\">Reason Of Cancellation</th>\r\n                <th class=\"w160\">\r\n                  Status Update Date</th>\r\n                <th class=\"w120\">\r\n                  Status Update By</th>\r\n              </tr>\r\n            </table>\r\n          </div>\r\n          <div class=\"table-head bdrt\">\r\n            <table>\r\n              <tr>\r\n                <th class=\"w60\"></th>\r\n                <th class=\"w160\">\r\n                  <div class=\"th-search-acmt\">\r\n                    <mat-form-field class=\"cs-input date-column infix-bodr\">\r\n                      <input matInput [matDatepicker]=\"picker5\" placeholder=\"Date\" name=\"date_created\"\r\n                        #date_created=\"ngModel\" [(ngModel)]=\"filter_data.date_created\"\r\n                        (ngModelChange)=\"date_format('complaint')\" [max]=\"today_date\" readonly>\r\n                      <mat-datepicker-toggle matSuffix [for]=\"picker5\"></mat-datepicker-toggle>\r\n                      <mat-datepicker #picker5></mat-datepicker>\r\n                    </mat-form-field>\r\n                  </div>\r\n                </th>\r\n                <th class=\"w100\">\r\n                  <div class=\"th-search-acmt\">\r\n                    <mat-form-field>\r\n                      <input type=\"text\" matInput placeholder=\"Search ...\" name=\"created_by_type\"\r\n                        (keyup.enter)=\"getComplaintDetail()\" #created_by_type=\"ngModel\"\r\n                        [(ngModel)]=\"filter_data.created_by_type\">\r\n                    </mat-form-field>\r\n                  </div>\r\n                </th>\r\n                <th class=\"w100\">\r\n                  <div class=\"th-search-acmt\">\r\n                    <mat-form-field>\r\n                      <input type=\"text\" matInput placeholder=\"Search ...\" name=\"complain_no\"\r\n                        (keyup.enter)=\"getComplaintDetail()\" #complain_no=\"ngModel\"\r\n                        [(ngModel)]=\"filter_data.complain_no\">\r\n                    </mat-form-field>\r\n                  </div>\r\n                </th>\r\n                <th class=\"w180\">\r\n                  <div class=\"th-search-acmt\">\r\n                    <mat-form-field>\r\n                      <input type=\"text\" matInput placeholder=\"Search ...\" name=\"carpenter_detail\"\r\n                        (keyup.enter)=\"getComplaintDetail()\" #carpenter_detail=\"ngModel\"\r\n                        [(ngModel)]=\"filter_data.carpenter_detail\">\r\n                    </mat-form-field>\r\n                  </div>\r\n                </th>\r\n                <th class=\"w130\">\r\n                  <div class=\"th-search-acmt\">\r\n                    <mat-form-field class=\"cs-input select-input\">\r\n                      <mat-select name=\"status\" #status=\"ngModel\" [(ngModel)]=\"filter_data.inspection_status\"\r\n                        (selectionChange)=\"getComplaintDetail()\">\r\n                        <mat-option value=\"All\">All</mat-option>\r\n                        <mat-option value=\"Pending\">Pending</mat-option>\r\n                        <mat-option value=\"Done\">Done </mat-option>\r\n\r\n                      </mat-select>\r\n                    </mat-form-field>\r\n                  </div>\r\n                </th>\r\n                <th class=\"w100\">\r\n                  <div class=\"th-search-acmt\">\r\n                    <mat-form-field class=\"cs-input select-input\">\r\n                      <mat-select name=\"status\" #status=\"ngModel\" [(ngModel)]=\"filter_data.complaint_status\"\r\n                        (selectionChange)=\"getComplaintDetail()\">\r\n                        <mat-option value=\"\">All</mat-option>\r\n                        <mat-option value=\"Pending\">Pending</mat-option>\r\n                        <mat-option value=\"Closed\">Closed </mat-option>\r\n                        <mat-option value=\"Cancel\">Cancel </mat-option>\r\n                      </mat-select>\r\n                    </mat-form-field>\r\n                  </div>\r\n                </th>\r\n\r\n                <th class=\"w130\">\r\n                </th>\r\n                <th class=\"w70 text-center\"></th>\r\n                <th class=\"w180\"></th>\r\n                <th class=\"w160\">\r\n                  <div class=\"th-search-acmt\">\r\n                    <mat-form-field class=\"cs-input date-column infix-bodr\">\r\n                      <input matInput [matDatepicker]=\"picker6\" placeholder=\"Date\" name=\"closed_date\"\r\n                        #closed_date=\"ngModel\" [(ngModel)]=\"filter_data.closed_date\" (ngModelChange)=\"date_format5()\"\r\n                        [max]=\"today_date\" readonly>\r\n                      <mat-datepicker-toggle matSuffix [for]=\"picker6\"></mat-datepicker-toggle>\r\n                      <mat-datepicker #picker6></mat-datepicker>\r\n                    </mat-form-field>\r\n                  </div>\r\n                </th>\r\n                <th class=\"w120\">\r\n                  <div class=\"th-search-acmt\">\r\n                    <mat-form-field>\r\n                      <input type=\"text\" matInput placeholder=\"Search ...\" name=\"status_updated_by_name\"\r\n                        (keyup.enter)=\"getComplaintDetail()\" #status_updated_by_name=\"ngModel\"\r\n                        [(ngModel)]=\"filter_data.status_updated_by_name\" />\r\n                    </mat-form-field>\r\n                  </div>\r\n                </th>\r\n              </tr>\r\n            </table>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"table-container\">\r\n          <div class=\"table-content\">\r\n            <table>\r\n              <ng-container *ngIf=\"!loader\">\r\n                <tr *ngFor=\"let row of complaintList; let i = index \"\r\n                  [ngClass]=\"{'Current': service.currentUserID == row.id}\">\r\n                  <td class=\"w60\">{{i + 1 + sr_no}}</td>\r\n                  <td class=\"w160\">{{row.date_created ? (row.date_created | date : 'dd MMM yyy ,h:mm a') : '--'}}</td>\r\n                  <td class=\"w100\">{{row.created_name ? (row.created_name | titlecase): '--'}}</td>\r\n                  <td class=\"w100\"><a class=\"link-btn\" mat-button (click)=\"service.setData(filter_data)\"\r\n                      routerLink=\"complaint-detail/{{(row.id)}}\" routerLinkActive=\"active\">{{row.complain_no}}</a></td>\r\n                  <td class=\"w180\">{{row.carpenter_name ?\r\n                    (row.carpenter_name | titlecase) : ''}}-{{row.carpenter_mobile ? row.carpenter_mobile : ''}}</td>\r\n                  <td class=\"w130\">\r\n                    <strong class=\"yellow-clr\" *ngIf=\"row.inspection_status=='Pending'\">{{row.inspection_status\r\n                      ? row.inspection_status : '--'}}</strong>\r\n                    <strong class=\"green-clr\" *ngIf=\"row.inspection_status=='Done'\">{{row.inspection_status\r\n                      ? row.inspection_status : '--'}}</strong>\r\n                  </td>\r\n                  <td class=\"w100\">\r\n                    <strong class=\"yellow-clr\" *ngIf=\"row.complaint_status=='Pending'\">{{row.complaint_status ?\r\n                      row.complaint_status : '--'}}</strong>\r\n                    <strong class=\"green-clr\" *ngIf=\"row.complaint_status=='Closed'\">{{row.complaint_status ?\r\n                      row.complaint_status : '--'}}</strong>\r\n                    <strong class=\"red-clr\" *ngIf=\"row.complaint_status=='Cancel'\">{{row.complaint_status ?\r\n                      row.complaint_status : '--'}}</strong>\r\n                  </td>\r\n\r\n                  <td class=\"w130\">\r\n                    {{row.remark ? (row.remark | titlecase ): '--'}}</td>\r\n                  <td class=\"w70\">{{row.pending_at}}</td>\r\n                  <td class=\"w180\">{{row.status_reason| titlecase}}\r\n                  </td>\r\n                  <td class=\"w160\">\r\n                    {{row.closed_date !='0000-00-00 00:00:00' ? (row.closed_date | date : 'dd MMM yyy ,h:mm a') : '--'}}\r\n                  </td>\r\n                  <td class=\"w120\">\r\n                    {{row.status_updated_by_name?(row.status_updated_by_name|titlecase):'--'}}\r\n                  </td>\r\n                </tr>\r\n              </ng-container>\r\n              <ng-container *ngIf=\"loader\">\r\n                <tr class=\"sk-loading\" *ngFor=\"let row of [].constructor(10)\">\r\n                  <td class=\"w60\">\r\n                    <div>&nbsp;</div>\r\n                  </td>\r\n                  <td class=\"w160\">\r\n                    <div>&nbsp;</div>\r\n                  </td>\r\n                  <td class=\"w100\">\r\n                    <div>&nbsp;</div>\r\n                  </td>\r\n                  <td class=\"w100\">\r\n                    <div>&nbsp;</div>\r\n                  </td>\r\n                  <td class=\"w180\">\r\n                    <div>&nbsp;</div>\r\n                  </td>\r\n                  <td class=\"w130\">\r\n                    <div>&nbsp;</div>\r\n                  </td>\r\n                  <td class=\"w100\">\r\n                    <div>&nbsp;</div>\r\n                  </td>\r\n\r\n                  <td class=\"w130 \">\r\n                    <div>&nbsp;</div>\r\n                  </td>\r\n                  <td class=\"w70 text-center\">\r\n                    <div>&nbsp;</div>\r\n                  </td>\r\n                  <td class=\"w180\">\r\n                    <div>&nbsp;</div>\r\n                  </td>\r\n                  <td class=\"w160\">\r\n                    <div>&nbsp;</div>\r\n                  </td>\r\n                  <td class=\"w120\">\r\n                    <div>&nbsp;</div>\r\n                  </td>\r\n                </tr>\r\n              </ng-container>\r\n            </table>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n\r\n    </div>\r\n    <div class=\"row container container-scroll\" *ngIf=\"tabType== 'installation'\">\r\n      <div class=\"cs-table horizontal-scroll\">\r\n        <div class=\"sticky-head\">\r\n          <div class=\"table-head\">\r\n            <table>\r\n              <tr>\r\n                <th class=\"w60\">Sr.No</th>\r\n                <th class=\"w150\">Date Created</th>\r\n                <th class=\"w150\">Created By</th>\r\n                <th class=\"w100\">Installation No.</th>\r\n                <th class=\"w180\">Technician Details</th>\r\n                <th class=\"w50\">Total Item</th>\r\n                <th class=\"w100\">Status</th>\r\n\r\n                <th class=\"w70 text-center\">TAT</th>\r\n                <th class=\"w180\">Last Remark</th>\r\n                <th class=\"w180\">Reject Reason</th>\r\n                <th class=\"w140\">Status Update Date</th>\r\n                <th class=\"w120\">Status Update By</th>\r\n              </tr>\r\n            </table>\r\n          </div>\r\n          <div class=\"table-head bdrt\">\r\n            <table>\r\n              <tr>\r\n                <th class=\"w60\"></th>\r\n                <th class=\"w150\">\r\n                  <div class=\"th-search-acmt\">\r\n                    <mat-form-field class=\"cs-input date-column infix-bodr\">\r\n                      <input matInput [matDatepicker]=\"picker7\" placeholder=\"Date\" name=\"date_created\"\r\n                        #date_created=\"ngModel\" [(ngModel)]=\"filter_data.date_created\"\r\n                        (ngModelChange)=\"date_format('installation')\" [max]=\"today_date\" readonly />\r\n                      <mat-datepicker-toggle matSuffix [for]=\"picker7\"></mat-datepicker-toggle>\r\n                      <mat-datepicker #picker7></mat-datepicker>\r\n                    </mat-form-field>\r\n                  </div>\r\n                </th>\r\n                <th class=\"w150\">\r\n                  <div class=\"th-search-acmt\">\r\n                    <mat-form-field>\r\n                      <input type=\"text\" matInput placeholder=\"Search ...\" name=\"created_name\"\r\n                        (keyup.enter)=\"getInstallationDetail()\" #created_name=\"ngModel\"\r\n                        [(ngModel)]=\"filter_data.created_name\" />\r\n                    </mat-form-field>\r\n                  </div>\r\n                </th>\r\n                <th class=\"w100\">\r\n                  <div class=\"th-search-acmt\">\r\n                    <mat-form-field>\r\n                      <input type=\"text\" matInput placeholder=\"Search ...\" name=\"complain_no\"\r\n                        (keyup.enter)=\"getInstallationDetail()\" #complain_no=\"ngModel\"\r\n                        [(ngModel)]=\"filter_data.complain_no\" />\r\n                    </mat-form-field>\r\n                  </div>\r\n                </th>\r\n                <th class=\"w180\">\r\n                  <div class=\"th-search-acmt\">\r\n                    <mat-form-field>\r\n                      <input type=\"text\" matInput placeholder=\"Search ...\" name=\"carpenter_detail\"\r\n                        #carpenter_detail=\"ngModel\" (keyup.enter)=\"getInstallationDetail()\"\r\n                        [(ngModel)]=\"filter_data.carpenter_detail\">\r\n                    </mat-form-field>\r\n                  </div>\r\n                </th>\r\n                <th class=\"w50\">\r\n                  <div class=\"th-search-acmt\">\r\n                  </div>\r\n                </th>\r\n                <th class=\"w100\">\r\n                  <div class=\"th-search-acmt\">\r\n                    <mat-form-field class=\"cs-input select-input\">\r\n                      <mat-select name=\"complaint_status\" #complaint_status=\"ngModel\"\r\n                        [(ngModel)]=\"filter_data.complaint_status\" (selectionChange)=\"getInstallationDetail()\">\r\n                        <mat-option value=\"\">All</mat-option>\r\n                        <mat-option value=\"Pending\">Pending</mat-option>\r\n                        <mat-option value=\"Done\">Done </mat-option>\r\n                        <mat-option value=\"Reject\">Reject </mat-option>\r\n                      </mat-select>\r\n                    </mat-form-field>\r\n                  </div>\r\n\r\n\r\n                </th>\r\n\r\n                <th class=\"w70 text-center\"></th>\r\n                <th class=\"w180\"></th>\r\n                <th class=\"w180\"></th>\r\n                <th class=\"w140\">\r\n                  <div class=\"th-search-acmt\">\r\n                    <mat-form-field class=\"cs-input date-column infix-bodr\">\r\n                      <input matInput [matDatepicker]=\"picker8\" placeholder=\"Date\" name=\"status_updated_date\"\r\n                        #status_updated_date=\"ngModel\" [(ngModel)]=\"filter_data.status_updated_date\"\r\n                        (ngModelChange)=\"date_format6()\" [max]=\"today_date\" readonly />\r\n                      <mat-datepicker-toggle matSuffix [for]=\"picker8\"></mat-datepicker-toggle>\r\n                      <mat-datepicker #picker8></mat-datepicker>\r\n                    </mat-form-field>\r\n                  </div>\r\n                </th>\r\n                <th class=\"w120\">\r\n                  <div class=\"th-search-acmt\">\r\n                    <mat-form-field>\r\n                      <input type=\"text\" matInput placeholder=\"Search ...\" name=\"status_updated_by_name\"\r\n                        (keyup.enter)=\"getInstallationDetail()\" #status_updated_by_name=\"ngModel\"\r\n                        [(ngModel)]=\"filter_data.status_updated_by_name\" />\r\n                    </mat-form-field>\r\n                  </div>\r\n                </th>\r\n              </tr>\r\n            </table>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"table-container\">\r\n          <div class=\"table-content\">\r\n            <table>\r\n              <ng-container *ngIf=\"!loader\">\r\n                <tr *ngFor=\"let row of installationList; let i = index\"\r\n                  [ngClass]=\"{ Current: service.currentUserID == row.id }\">\r\n                  <td class=\"w60\">{{ i + 1 + sr_no }}</td>\r\n                  <td class=\"w150\">\r\n                    {{\r\n                    row.date_created\r\n                    ? (row.date_created | date : \"dd MMM yyy ,h:mm a\")\r\n                    : \"--\"\r\n                    }}\r\n                  </td>\r\n                  <td class=\"w150\">\r\n                    {{ row.created_name ? (row.created_name | titlecase) : \"--\" }}\r\n                  </td>\r\n                  <td class=\"w100\">\r\n                    <a class=\"link-btn\" mat-button (click)=\"service.setData(filter_data)\"\r\n                      routerLink=\"installation-detail/{{ row.id }}\" routerLinkActive=\"active\">{{ row.complain_no }}</a>\r\n                  </td>\r\n                  <td class=\"w180\">{{row.carpenter_name ? (row.carpenter_name| titlecase)\r\n                    : '--'}}-{{row.carpenter_mobile\r\n                    ?\r\n                    row.carpenter_mobile : '--'}}</td>\r\n                  <td class=\"w50 text-center\"><a class=\"link-btn flat\"\r\n                      (click)=\"attendancDetail(row)\">{{row.total_items}}</a></td>\r\n                  <td class=\"w100\">\r\n                    <strong class=\"yellow-clr\" *ngIf=\"row.complaint_status=='Pending'\">{{row.complaint_status|\r\n                      titlecase}}</strong>\r\n                    <strong class=\"green-clr\" *ngIf=\"row.complaint_status=='Done'\">{{row.complaint_status|\r\n                      titlecase}}</strong>\r\n                    <strong class=\"red-clr\" *ngIf=\"row.complaint_status=='Reject'\">{{row.complaint_status|\r\n                      titlecase}}</strong>\r\n                  </td>\r\n\r\n\r\n                  <td class=\"w70 text-center\">{{row.pending_at}}</td>\r\n                  <td class=\"w180\">{{row.remark?(row.remark| titlecase):'--'}}</td>\r\n                  <td class=\"w180\">{{row.status_reason?(row.status_reason|titlecase):'--'}}</td>\r\n                  <td class=\"w140\">\r\n                    {{\r\n                    row.status_updated_date != \"0000-00-00 00:00:00\"\r\n                    ? (row.status_updated_date | date : \"dd MMM yyy ,h:mm a\")\r\n                    : \"--\"\r\n                    }}\r\n                  </td>\r\n                  <td class=\"w120\">{{row.status_updated_by_name?(row.status_updated_by_name|titlecase):'--'}}</td>\r\n                </tr>\r\n              </ng-container>\r\n              <ng-container *ngIf=\"loader\">\r\n                <tr class=\"sk-loading\" *ngFor=\"let row of [].constructor(10)\">\r\n                  <td class=\"w60\">\r\n                    <div>&nbsp;</div>\r\n                  </td>\r\n                  <td class=\"w150\">\r\n                    <div>&nbsp;</div>\r\n                  </td>\r\n                  <td class=\"w150\">\r\n                    <div>&nbsp;</div>\r\n                  </td>\r\n                  <td class=\"w100\">\r\n                    <div>&nbsp;</div>\r\n                  </td>\r\n                  <td class=\"w180\">\r\n                    <div>&nbsp;</div>\r\n                  </td>\r\n                  <td class=\"w50\">\r\n                    <div>&nbsp;</div>\r\n                  </td>\r\n                  <td class=\"w100\">\r\n                    <div>&nbsp;</div>\r\n                  </td>\r\n\r\n                  <td class=\"w70\">\r\n                    <div>&nbsp;</div>\r\n                  </td>\r\n                  <td class=\"w180\">\r\n                    <div>&nbsp;</div>\r\n                  </td>\r\n                  <td class=\"w180\">\r\n                    <div>&nbsp;</div>\r\n                  </td>\r\n                  <td class=\"w140\">\r\n                    <div>&nbsp;</div>\r\n                  </td>\r\n                  <td class=\"w120\">\r\n                    <div>&nbsp;</div>\r\n                  </td>\r\n                </tr>\r\n              </ng-container>\r\n            </table>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n\r\n    </div>\r\n  </div>\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/customer/customer-detail/customer-detail.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/customer/customer-detail/customer-detail.component.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/customer/customer-detail/customer-detail.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/customer/customer-detail/customer-detail.component.ts ***!
  \***********************************************************************/
/*! exports provided: CustomerDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerDetailComponent", function() { return CustomerDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_services_DatabaseService__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/_services/DatabaseService */ "./src/_services/DatabaseService.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! moment */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var src_app_localstorage_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/localstorage.service */ "./src/app/localstorage.service.ts");
/* harmony import */ var ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng6-toastr-notifications */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/ng6-toastr-notifications/fesm5/ng6-toastr-notifications.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var src_app_dialog_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/dialog.component */ "./src/app/dialog.component.ts");
/* harmony import */ var src_app_dialog_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/dialog.service */ "./src/app/dialog.service.ts");
/* harmony import */ var src_app_service_exportexcel_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/service/exportexcel.service */ "./src/app/service/exportexcel.service.ts");
/* harmony import */ var src_app_installation_product_detail_model_product_detail_model_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/installation/product-detail-model/product-detail-model.component */ "./src/app/installation/product-detail-model/product-detail-model.component.ts");













// import { type } from 'os';
var CustomerDetailComponent = /** @class */ (function () {
    function CustomerDetailComponent(location, session, router, alert, service, editdialog, dialog, route, toast, excelservice, dialog1, dialog2) {
        var _this = this;
        this.location = location;
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
        this.dialog2 = dialog2;
        this.tabType = 'Profile';
        this.filter = {};
        this.getData = {};
        this.assign_login_data = {};
        this.logined_user_data = {};
        this.stateDetail = [];
        this.warrantyList = [];
        this.complaintList = [];
        this.installationList = [];
        this.product_size = [];
        this.featureFlag = false;
        this.allMrpFlag = false;
        this.productImg = [];
        this.pagenumber = 0;
        this.Influencer_Detail = {};
        this.start = 0;
        this.checkinLoader = false;
        this.login_data = {};
        this.login_data5 = {};
        this.user_assign_name = '';
        this.savingFlag = false;
        this.filter_data = {};
        this.fabBtnValue = 'excel';
        this.skLoading = false;
        this.page_limit = service.pageLimit;
        // this.page_limit = 1;
        this.route.params.subscribe(function (params) {
            _this.id = params.id;
            _this.service.currentUserID = params.id;
            if (_this.id) {
                _this.getCustomerDetail();
            }
        });
    }
    CustomerDetailComponent.prototype.ngOnInit = function () {
    };
    CustomerDetailComponent.prototype.refresh = function () {
        this.start = 0;
        this.filter_data = {};
        this.getComplaintDetail();
        this.getCustomerDetail();
        this.getInstallationDetail();
        this.getWarrantyDetail();
    };
    CustomerDetailComponent.prototype.clear = function () {
        this.refresh();
    };
    CustomerDetailComponent.prototype.getCustomerDetail = function () {
        var _this = this;
        this.loader = 1;
        this.skLoading = true;
        this.filter.status = this.tabType;
        this.service.post_rqst({ 'customer_id': this.id }, "ServiceCustomer/serviceCustomerDetail").subscribe(function (result) {
            if (result['statusCode'] == 200) {
                _this.skLoading = false;
                _this.getData = result['result'];
                console.log('getData', _this.getData);
                _this.productImg = _this.getData['img'];
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
    CustomerDetailComponent.prototype.pervious = function (type) {
        this.start = this.start - this.page_limit;
        if (type == 'warranty') {
            this.getWarrantyDetail();
        }
        else if (type == 'installation') {
            this.getInstallationDetail();
        }
        else {
            this.getComplaintDetail();
        }
    };
    CustomerDetailComponent.prototype.nextPage = function (type) {
        this.start = this.start + this.page_limit;
        if (type == 'warranty') {
            this.getWarrantyDetail();
        }
        else if (type == 'installation') {
            this.getInstallationDetail();
        }
        else {
            this.getComplaintDetail();
        }
    };
    CustomerDetailComponent.prototype.date_format = function (type) {
        this.filter_data.date_created = moment__WEBPACK_IMPORTED_MODULE_5__(this.filter_data.date_created).format('YYYY-MM-DD');
        if (type == 'warranty') {
            this.getWarrantyDetail();
        }
        else if (type == 'installation') {
            this.getInstallationDetail();
        }
        else {
            this.getComplaintDetail();
        }
    };
    CustomerDetailComponent.prototype.date_format2 = function () {
        this.filter_data.date_of_purchase = moment__WEBPACK_IMPORTED_MODULE_5__(this.filter_data.date_of_purchase).format('YYYY-MM-DD');
        this.getWarrantyDetail();
    };
    CustomerDetailComponent.prototype.date_format3 = function () {
        this.filter_data.warranty_end_date = moment__WEBPACK_IMPORTED_MODULE_5__(this.filter_data.warranty_end_date).format('YYYY-MM-DD');
        this.getWarrantyDetail();
    };
    CustomerDetailComponent.prototype.date_format4 = function () {
        this.filter_data.verification_on = moment__WEBPACK_IMPORTED_MODULE_5__(this.filter_data.verification_on).format('YYYY-MM-DD');
        this.getWarrantyDetail();
    };
    CustomerDetailComponent.prototype.date_format5 = function () {
        this.filter_data.closed_date = moment__WEBPACK_IMPORTED_MODULE_5__(this.filter_data.closed_date).format('YYYY-MM-DD');
        this.getComplaintDetail();
    };
    CustomerDetailComponent.prototype.date_format6 = function () {
        this.filter_data.status_updated_date = moment__WEBPACK_IMPORTED_MODULE_5__(this.filter_data.status_updated_date).format('YYYY-MM-DD');
        this.getInstallationDetail();
    };
    CustomerDetailComponent.prototype.getWarrantyDetail = function () {
        var _this = this;
        this.filter.status = this.tabType;
        if (this.pagenumber > this.total_page) {
            this.pagenumber = this.total_page;
            this.start = this.pageCount - this.page_limit;
        }
        if (this.start < 0) {
            this.start = 0;
        }
        this.service.post_rqst({ 'customer_id': this.id, 'pagelimit': this.page_limit, 'start': this.start, 'filter': this.filter_data }, 'ServiceTask/serviceWarrantyList').subscribe(function (result) {
            _this.loader = true;
            if (result['statusCode'] == 200) {
                _this.warrantyList = result['result'];
                _this.loader = false;
                _this.pageCount = result['count'];
                if (_this.pagenumber > _this.total_page) {
                    _this.pagenumber = _this.total_page;
                    _this.start = _this.pageCount - _this.page_limit;
                }
                else {
                    _this.pagenumber = Math.ceil(_this.start / _this.page_limit) + 1;
                    _this.loader = false;
                }
                _this.total_page = Math.ceil(_this.pageCount / _this.page_limit);
                _this.sr_no = _this.pagenumber - 1;
                _this.sr_no = _this.sr_no * _this.page_limit;
                setTimeout(function () {
                }, 700);
            }
            else {
                _this.toast.errorToastr(result['statusMsg']);
                _this.loader = false;
            }
        });
    };
    CustomerDetailComponent.prototype.getInstallationDetail = function () {
        var _this = this;
        this.filter.status = this.tabType;
        if (this.pagenumber > this.total_page) {
            this.pagenumber = this.total_page;
            this.start = this.pageCount - this.page_limit;
        }
        if (this.start < 0) {
            this.start = 0;
        }
        this.service.post_rqst({ 'customer_id': this.id, 'pagelimit': this.page_limit, 'start': this.start, 'filter': this.filter_data }, 'ServiceTask/serviceInstallationList').subscribe(function (result) {
            _this.loader = true;
            if (result['statusCode'] == 200) {
                _this.installationList = result['result'];
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
                setTimeout(function () {
                }, 700);
            }
            else {
                _this.toast.errorToastr(result['statusMsg']);
                _this.loader = false;
            }
        });
    };
    CustomerDetailComponent.prototype.getComplaintDetail = function () {
        var _this = this;
        this.filter.status = this.tabType;
        if (this.pagenumber > this.total_page) {
            this.pagenumber = this.total_page;
            this.start = this.pageCount - this.page_limit;
        }
        if (this.start < 0) {
            this.start = 0;
        }
        this.service.post_rqst({ 'customer_id': this.id, 'pagelimit': this.page_limit, 'start': this.start, 'filter': this.filter_data }, 'ServiceTask/serviceComplaintList').subscribe(function (result) {
            _this.loader = true;
            if (result['statusCode'] == 200) {
                _this.complaintList = result['result'];
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
                setTimeout(function () {
                }, 700);
            }
            else {
                _this.toast.errorToastr(result['statusMsg']);
                _this.loader = false;
            }
        });
    };
    CustomerDetailComponent.prototype.back = function () {
        this.location.back();
    };
    CustomerDetailComponent.prototype.editCustomer = function () {
        this.router.navigate(['add-customer/' + this.id]);
    };
    CustomerDetailComponent.prototype.attendancDetail = function (row) {
        console.log(row.add_list);
        var dialogRef = this.dialog2.open(src_app_installation_product_detail_model_product_detail_model_component__WEBPACK_IMPORTED_MODULE_12__["ProductDetailModelComponent"], {
            width: '800px',
            panelClass: 'cs-model',
            data: {
                row: row.add_list,
            }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result != false) {
                // this.getinspectionList('');
            }
        });
    };
    CustomerDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-customer-detail',
            template: __webpack_require__(/*! ./customer-detail.component.html */ "./src/app/customer/customer-detail/customer-detail.component.html"),
            styles: [__webpack_require__(/*! ./customer-detail.component.scss */ "./src/app/customer/customer-detail/customer-detail.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_8__["Location"], src_app_localstorage_service__WEBPACK_IMPORTED_MODULE_6__["sessionStorage"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], src_app_dialog_component__WEBPACK_IMPORTED_MODULE_9__["DialogComponent"], src_services_DatabaseService__WEBPACK_IMPORTED_MODULE_4__["DatabaseService"], src_app_dialog_service__WEBPACK_IMPORTED_MODULE_10__["DialogService"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_7__["ToastrManager"], src_app_service_exportexcel_service__WEBPACK_IMPORTED_MODULE_11__["ExportexcelService"], src_app_dialog_component__WEBPACK_IMPORTED_MODULE_9__["DialogComponent"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"]])
    ], CustomerDetailComponent);
    return CustomerDetailComponent;
}());



/***/ }),

/***/ "./src/app/customer/customer-list/customer-list.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/customer/customer-list/customer-list.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-container\">\r\n  <app-loader *ngIf=\"excelLoader\"></app-loader>\r\n  <div class=\"tools-container\">\r\n    <h2>Customer List</h2>\r\n\r\n\r\n    <div class=\"left-auto df ac flex-gap-10\">\r\n      <a mat-icon-button matTooltip=\"Refresh\" (click)=\"refresh()\">\r\n        <i class=\"material-icons\">refresh</i>\r\n      </a>\r\n\r\n      <div class=\"pagination\">\r\n        <div class=\"pagination-content\">\r\n          Pages\r\n          <span>{{pagenumber}}</span>\r\n          of\r\n          <span>{{total_page}}</span>\r\n        </div>\r\n        <div class=\"page-nav\">\r\n          <button mat-icon-button matTooltip=\"Older\" (click)=\"pervious()\" [disabled]=\"start == 0\">\r\n            <i class=\"material-icons\">navigate_before</i>\r\n          </button>\r\n          <button mat-icon-button matTooltip=\"Newer\" (click)=\"nextPage()\" [disabled]=\"pagenumber == total_page \">\r\n            <i class=\"material-icons\">navigate_next</i>\r\n          </button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n\r\n  <div class=\"container container-scroll\">\r\n    <div class=\"cs-table horizontal-scroll\">\r\n      <div class=\"sticky-head\">\r\n        <div class=\"table-head\">\r\n          <table>\r\n            <tr>\r\n              <th class=\"w50\">Sr.No</th>\r\n              <th class=\"w100\">Date Created</th>\r\n              <th class=\"w80\">Created By</th>\r\n              <th class=\"w130\">Customer Name</th>\r\n              <th class=\"w80\">Mobile No.</th>\r\n              <th class=\"w250\">Address</th>\r\n              <th class=\"w70\">Total Complaint</th>\r\n              <th class=\"w70\">Pending Complaint</th>\r\n            </tr>\r\n          </table>\r\n        </div>\r\n\r\n        <div class=\"table-head bdrt\">\r\n          <table>\r\n            <tr>\r\n              <th class=\"w50\"></th>\r\n              <th class=\"w100\">\r\n                <div class=\"th-search-acmt\">\r\n                  <mat-form-field class=\"cs-input date-column infix-bodr\">\r\n                    <input matInput [matDatepicker]=\"picker\" placeholder=\"Date\" name=\"date_created\"\r\n                      #date_created=\"ngModel\" [(ngModel)]=\"filter_data.date_created\" (ngModelChange)=\"date_format()\"\r\n                      [max]=\"today_date\" readonly>\r\n                    <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\r\n                    <mat-datepicker #picker></mat-datepicker>\r\n                  </mat-form-field>\r\n                </div>\r\n              </th>\r\n              <th class=\"w80\">\r\n                <div class=\"th-search-acmt\">\r\n                  <mat-form-field>\r\n                    <input type=\"text\" matInput placeholder=\"Search ...\" name=\"created_name\"\r\n                      (keyup.enter)=\"getCumtomerList('')\" #created_name=\"ngModel\"\r\n                      [(ngModel)]=\"filter_data.created_name\">\r\n                  </mat-form-field>\r\n                </div>\r\n              </th>\r\n              <th class=\"w130\">\r\n                <div class=\"th-search-acmt\">\r\n                  <mat-form-field>\r\n                    <input type=\"text\" matInput placeholder=\"Search ...\" name=\"name\" (keyup.enter)=\"getCumtomerList('')\"\r\n                      #name=\"ngModel\" [(ngModel)]=\"filter_data.name\">\r\n                  </mat-form-field>\r\n                </div>\r\n              </th>\r\n              <th class=\"w80\">\r\n                <div class=\"th-search-acmt\">\r\n                  <mat-form-field>\r\n                    <input type=\"text\" matInput placeholder=\"Search ...\" name=\"mobile_no\"\r\n                      (keyup.enter)=\"getCumtomerList('')\" #mobile_no=\"ngModel\" [(ngModel)]=\"filter_data.mobile_no\">\r\n                  </mat-form-field>\r\n                </div>\r\n              </th>\r\n              <th class=\"w250 \">\r\n                <div class=\"th-search-acmt\">\r\n                  <mat-form-field>\r\n                    <input type=\"text\" matInput placeholder=\"Search ...\" name=\"address\"\r\n                      (keyup.enter)=\"getCumtomerList('')\" #address=\"ngModel\" [(ngModel)]=\"filter_data.address\">\r\n                  </mat-form-field>\r\n                </div>\r\n              </th>\r\n              <th class=\"w70\"></th>\r\n              <th class=\"w70\"></th>\r\n            </tr>\r\n          </table>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"table-container\">\r\n        <div class=\"table-content\">\r\n          <table>\r\n            <ng-container *ngIf=\"!loader\">\r\n              <tr *ngFor=\"let row of customerList; let i = index \"\r\n                [ngClass]=\"{'Current': service.currentUserID == row.id}\">\r\n                <td class=\"w50\">{{i + 1 + sr_no}}</td>\r\n                <td class=\"w100\">{{row.date_created | date : 'dd MMM yyy ,h:mm a'}}</td>\r\n                <td class=\"w80\">{{row.created_name | titlecase}}</td>\r\n                <td class=\"w130\"><a class=\"link-btn\" mat-button (click)=\"service.setData(filter_data)\"\r\n                    routerLink=\"customer-detail/{{(row.id)}}\" routerLinkActive=\"active\"> {{row.name | titlecase}}</a>\r\n                </td>\r\n                <td class=\"w80\">{{row.mobile_no}}</td>\r\n                <td class=\"w250 \">{{row.address | titlecase}}</td>\r\n                <td class=\"w70 text-center\">{{row.total_complaint}}</td>\r\n                <td class=\"w70 text-center \">{{row.pending_complaint}}</td>\r\n              </tr>\r\n            </ng-container>\r\n            <ng-container *ngIf=\"loader\">\r\n              <tr class=\"sk-loading\" *ngFor=\"let row of [].constructor(10)\">\r\n                <td class=\"w50\">\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n                <td class=\"w100\">\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n                <td class=\"w80\">\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n                <td class=\"w130\">\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n                <td class=\"w80\">\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n                <td class=\"w150\">\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n                <td class=\"w150\">\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n                <td class=\"w150\">\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n                <td class=\"w80\">\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n                <td class=\"w250 \">\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n                <td class=\"w70\">\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n                <td class=\"w70\">\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n              </tr>\r\n            </ng-container>\r\n          </table>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <ng-container *ngIf=\"datanotofound==true && customerList.length == 0;\">\r\n      <app-not-result-found></app-not-result-found>\r\n    </ng-container>\r\n  </div>\r\n  <div>\r\n  </div>\r\n\r\n  <div class=\"fab-btns\">\r\n    <button class=\"pulse excel\" mat-fab color=\"primary\" [ngClass]=\"{'pulse': fabBtnValue=='add'}\"\r\n      [matMenuTriggerFor]=\"menu\">\r\n      <i class=\"material-icons\">apps</i>\r\n      Action\r\n    </button>\r\n  </div>\r\n  <mat-menu #menu=\"matMenu\">\r\n    <button mat-menu-item (click)=\"downloadExcel();\">\r\n      <mat-icon>download</mat-icon>\r\n      <span>Download excel</span>\r\n    </button>\r\n    <button mat-menu-item (click)=\"lastBtnValue('add')\" routerLink=\"add-customer\" routerLinkActive=\"router-link-active\">\r\n      <mat-icon>add</mat-icon>\r\n      <span>Add New</span>\r\n    </button>\r\n  </mat-menu>\r\n</div>"

/***/ }),

/***/ "./src/app/customer/customer-list/customer-list.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/customer/customer-list/customer-list.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/customer/customer-list/customer-list.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/customer/customer-list/customer-list.component.ts ***!
  \*******************************************************************/
/*! exports provided: CustomerListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerListComponent", function() { return CustomerListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! moment */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng6-toastr-notifications */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/ng6-toastr-notifications/fesm5/ng6-toastr-notifications.js");
/* harmony import */ var src_services_DatabaseService__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/_services/DatabaseService */ "./src/_services/DatabaseService.ts");
/* harmony import */ var src_app_dialog_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/dialog.component */ "./src/app/dialog.component.ts");
/* harmony import */ var src_app_localstorage_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/localstorage.service */ "./src/app/localstorage.service.ts");









var CustomerListComponent = /** @class */ (function () {
    function CustomerListComponent(dialog, dialogs, alert, service, rout, toast, session) {
        this.dialog = dialog;
        this.dialogs = dialogs;
        this.alert = alert;
        this.service = service;
        this.rout = rout;
        this.toast = toast;
        this.session = session;
        this.fabBtnValue = 'add';
        this.customerList = [];
        this.filter = false;
        this.data = [];
        this.start = 0;
        this.total_page = 0;
        this.pagenumber = 0;
        this.loader = false;
        this.tab_active = 'all';
        this.filter_data = {};
        this.excelLoader = false;
        this.datanotofound = false;
        this.downurl = '';
        this.downurl = service.downloadUrl;
        this.page_limit = service.pageLimit;
    }
    CustomerListComponent.prototype.ngOnInit = function () {
        this.filter_data = this.service.getData();
        this.getCumtomerList('');
    };
    CustomerListComponent.prototype.pervious = function () {
        this.start = this.start - this.page_limit;
        this.getCumtomerList('');
    };
    CustomerListComponent.prototype.nextPage = function () {
        this.start = this.start + this.page_limit;
        this.getCumtomerList('');
    };
    CustomerListComponent.prototype.refresh = function () {
        this.start = 0;
        this.filter_data = {};
        this.getCumtomerList('');
    };
    CustomerListComponent.prototype.clear = function () {
        this.refresh();
    };
    CustomerListComponent.prototype.goToDetailHandler = function (id) {
        window.open("/customer-detail/" + id);
    };
    CustomerListComponent.prototype.date_format = function () {
        this.filter_data.date_created = moment__WEBPACK_IMPORTED_MODULE_4__(this.filter_data.date_created).format('YYYY-MM-DD');
        this.getCumtomerList('');
    };
    CustomerListComponent.prototype.getCumtomerList = function (data) {
        var _this = this;
        if (this.pagenumber > this.total_page) {
            this.pagenumber = this.total_page;
            this.start = this.pageCount - this.page_limit;
        }
        if (this.start < 0) {
            this.start = 0;
        }
        var header = this.service.post_rqst({ 'filter': this.filter_data, 'start': this.start, 'pagelimit': this.page_limit }, "ServiceCustomer/serviceCustomerList");
        this.loader = true;
        header.subscribe(function (result) {
            if (result['statusCode'] == 200) {
                console.log('result', result);
                _this.customerList = result['result'];
                console.log(_this.customerList);
                _this.pageCount = result['count'];
                _this.scheme_active_count = result['scheme_active_count'];
                _this.loader = false;
                if (_this.customerList.length == 0) {
                    _this.datanotofound = false;
                }
                else {
                    _this.datanotofound = true;
                    _this.loader = false;
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
                for (var i = 0; i < _this.customerList.length; i++) {
                    if (_this.customerList[i].status == '1') {
                        _this.customerList[i].newStatus = true;
                    }
                    else if (_this.customerList[i].status == '0') {
                        _this.customerList[i].newStatus = false;
                    }
                }
            }
            else {
                _this.toast.errorToastr(result['statusMsg']);
                _this.datanotofound = true;
                _this.loader = false;
            }
        });
    };
    CustomerListComponent.prototype.lastBtnValue = function (value) {
        this.fabBtnValue = value;
    };
    CustomerListComponent.prototype.downloadExcel = function () {
        var _this = this;
        this.excelLoader = true;
        this.service.post_rqst({ 'filter': this.filter_data }, "Excel/service_customer_list").subscribe((function (result) {
            if (result['msg'] == true) {
                window.open(_this.downurl + result['filename']);
                _this.getCumtomerList('');
                _this.excelLoader = false;
            }
            else {
            }
        }));
    };
    CustomerListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-customer-list',
            template: __webpack_require__(/*! ./customer-list.component.html */ "./src/app/customer/customer-list/customer-list.component.html"),
            styles: [__webpack_require__(/*! ./customer-list.component.scss */ "./src/app/customer/customer-list/customer-list.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_dialog_component__WEBPACK_IMPORTED_MODULE_7__["DialogComponent"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"], src_app_dialog_component__WEBPACK_IMPORTED_MODULE_7__["DialogComponent"], src_services_DatabaseService__WEBPACK_IMPORTED_MODULE_6__["DatabaseService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_5__["ToastrManager"], src_app_localstorage_service__WEBPACK_IMPORTED_MODULE_8__["sessionStorage"]])
    ], CustomerListComponent);
    return CustomerListComponent;
}());



/***/ }),

/***/ "./src/app/customer/customer-module/customer-module.module.ts":
/*!********************************************************************!*\
  !*** ./src/app/customer/customer-module/customer-module.module.ts ***!
  \********************************************************************/
/*! exports provided: CustomerModuleModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomerModuleModule", function() { return CustomerModuleModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _customer_list_customer_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../customer-list/customer-list.component */ "./src/app/customer/customer-list/customer-list.component.ts");
/* harmony import */ var _customer_add_customer_add_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../customer-add/customer-add.component */ "./src/app/customer/customer-add/customer-add.component.ts");
/* harmony import */ var _customer_detail_customer_detail_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../customer-detail/customer-detail.component */ "./src/app/customer/customer-detail/customer-detail.component.ts");
/* harmony import */ var _dr_similar_mobile_dr_similar_mobile_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../dr-similar-mobile/dr-similar-mobile.component */ "./src/app/customer/dr-similar-mobile/dr-similar-mobile.component.ts");
/* harmony import */ var src_app_auth_component_guard__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/auth-component.guard */ "./src/app/auth-component.guard.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-multiselect-dropdown */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/ng-multiselect-dropdown/fesm5/ng-multiselect-dropdown.js");
/* harmony import */ var src_app_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/material */ "./src/app/material.ts");
/* harmony import */ var angular_ng_autocomplete__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! angular-ng-autocomplete */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/angular-ng-autocomplete/fesm5/angular-ng-autocomplete.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/material */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var ngx_mat_select_search__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ngx-mat-select-search */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/ngx-mat-select-search/fesm5/ngx-mat-select-search.js");
/* harmony import */ var src_app_app_utility_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/app-utility.module */ "./src/app/app-utility.module.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/router */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _warranty_detail_warranty_detail_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../warranty-detail/warranty-detail.component */ "./src/app/customer/warranty-detail/warranty-detail.component.ts");
/* harmony import */ var _installation_detail_installation_detail_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../installation-detail/installation-detail.component */ "./src/app/customer/installation-detail/installation-detail.component.ts");
/* harmony import */ var _complaint_detail_complaint_detail_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../complaint-detail/complaint-detail.component */ "./src/app/customer/complaint-detail/complaint-detail.component.ts");



















var customerRoutes = [
    { path: "", children: [
            { path: "", component: _customer_list_customer_list_component__WEBPACK_IMPORTED_MODULE_3__["CustomerListComponent"], canActivate: [src_app_auth_component_guard__WEBPACK_IMPORTED_MODULE_7__["AuthComponentGuard"]], data: { expectedRole: ['1'] } },
            { path: 'add-customer', component: _customer_add_customer_add_component__WEBPACK_IMPORTED_MODULE_4__["CustomerAddComponent"], canActivate: [src_app_auth_component_guard__WEBPACK_IMPORTED_MODULE_7__["AuthComponentGuard"]], data: { expectedRole: ['1'] } },
            { path: 'dr-similar-mobile', component: _dr_similar_mobile_dr_similar_mobile_component__WEBPACK_IMPORTED_MODULE_6__["DrSimilarMobileComponent"], canActivate: [src_app_auth_component_guard__WEBPACK_IMPORTED_MODULE_7__["AuthComponentGuard"]], data: { expectedRole: ['1'] } },
            { path: "customer-detail/:id", children: [
                    { path: "", component: _customer_detail_customer_detail_component__WEBPACK_IMPORTED_MODULE_5__["CustomerDetailComponent"], canActivate: [src_app_auth_component_guard__WEBPACK_IMPORTED_MODULE_7__["AuthComponentGuard"]], data: { expectedRole: ['1'] } },
                    { path: 'add-customer/:id', component: _customer_add_customer_add_component__WEBPACK_IMPORTED_MODULE_4__["CustomerAddComponent"], canActivate: [src_app_auth_component_guard__WEBPACK_IMPORTED_MODULE_7__["AuthComponentGuard"]], data: { expectedRole: ['1'] } },
                    { path: 'warranty-detail/:id', component: _warranty_detail_warranty_detail_component__WEBPACK_IMPORTED_MODULE_16__["WarrantyDetailComponent"], canActivate: [src_app_auth_component_guard__WEBPACK_IMPORTED_MODULE_7__["AuthComponentGuard"]], data: { expectedRole: ['1'] } },
                    { path: 'installation-detail/:id', component: _installation_detail_installation_detail_component__WEBPACK_IMPORTED_MODULE_17__["InstallationDetailComponent"], canActivate: [src_app_auth_component_guard__WEBPACK_IMPORTED_MODULE_7__["AuthComponentGuard"]], data: { expectedRole: ['1'] } },
                    { path: 'complaint-detail/:id', component: _complaint_detail_complaint_detail_component__WEBPACK_IMPORTED_MODULE_18__["ComplaintDetailComponent"], canActivate: [src_app_auth_component_guard__WEBPACK_IMPORTED_MODULE_7__["AuthComponentGuard"]], data: { expectedRole: ['1'] } },
                ] }
        ] },
];
var CustomerModuleModule = /** @class */ (function () {
    function CustomerModuleModule() {
    }
    CustomerModuleModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_customer_list_customer_list_component__WEBPACK_IMPORTED_MODULE_3__["CustomerListComponent"], _customer_add_customer_add_component__WEBPACK_IMPORTED_MODULE_4__["CustomerAddComponent"], _customer_detail_customer_detail_component__WEBPACK_IMPORTED_MODULE_5__["CustomerDetailComponent"], _warranty_detail_warranty_detail_component__WEBPACK_IMPORTED_MODULE_16__["WarrantyDetailComponent"], _installation_detail_installation_detail_component__WEBPACK_IMPORTED_MODULE_17__["InstallationDetailComponent"], _complaint_detail_complaint_detail_component__WEBPACK_IMPORTED_MODULE_18__["ComplaintDetailComponent"], _dr_similar_mobile_dr_similar_mobile_component__WEBPACK_IMPORTED_MODULE_6__["DrSimilarMobileComponent"]],
            imports: [
                _angular_router__WEBPACK_IMPORTED_MODULE_15__["RouterModule"].forChild(customerRoutes),
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_8__["ReactiveFormsModule"],
                ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_9__["NgMultiSelectDropDownModule"],
                src_app_material__WEBPACK_IMPORTED_MODULE_10__["MaterialModule"],
                angular_ng_autocomplete__WEBPACK_IMPORTED_MODULE_11__["AutocompleteLibModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_12__["MatDialogModule"],
                ngx_mat_select_search__WEBPACK_IMPORTED_MODULE_13__["NgxMatSelectSearchModule"],
                src_app_app_utility_module__WEBPACK_IMPORTED_MODULE_14__["AppUtilityModule"]
            ]
        })
    ], CustomerModuleModule);
    return CustomerModuleModule;
}());



/***/ }),

/***/ "./src/app/customer/dr-similar-mobile/dr-similar-mobile.component.html":
/*!*****************************************************************************!*\
  !*** ./src/app/customer/dr-similar-mobile/dr-similar-mobile.component.html ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-container\">\r\n\r\n  <!-- ── Toolbar ─────────────────────────────────────── -->\r\n  <div class=\"tools-container\">\r\n    <h2>DR Similar Mobile Report</h2>\r\n    <div class=\"left-auto df flex-gap-10\">\r\n\r\n      <div class=\"pagination\">\r\n        <a mat-icon-button matTooltip=\"Refresh list\" (click)=\"refresh()\">\r\n          <i class=\"material-icons\">refresh</i>\r\n        </a>\r\n      </div>\r\n\r\n      <div class=\"pagination\" *ngIf=\"list.length > 0\">\r\n        <div class=\"pagination-content\">\r\n          Pages <span>{{pagenumber}}</span> of <span>{{total_page}}</span>\r\n        </div>\r\n        <div class=\"page-nav\">\r\n          <button mat-icon-button matTooltip=\"Previous\" (click)=\"previous()\" [disabled]=\"start == 0 || total_page == 0\">\r\n            <i class=\"material-icons\">navigate_before</i>\r\n          </button>\r\n          <button mat-icon-button matTooltip=\"Next\" (click)=\"nextPage()\" [disabled]=\"pagenumber == total_page || total_page == 0\">\r\n            <i class=\"material-icons\">navigate_next</i>\r\n          </button>\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n\r\n    <!-- Recompute + info -->\r\n    <div class=\"mat-tabbar\">\r\n      <span class=\"computed-info\" *ngIf=\"computed_at\">\r\n        Last computed: <b>{{computed_at | date:'dd MMM yyyy, h:mm a'}}</b> &nbsp;|&nbsp; Total: <b>{{total_pairs}}</b>\r\n      </span>\r\n      <span class=\"computed-info text-warn\" *ngIf=\"!computed_at\">No data — click Recompute</span>\r\n      &nbsp;&nbsp;\r\n      <button mat-raised-button color=\"warn\" (click)=\"recompute()\" [disabled]=\"refreshing\">\r\n        <i class=\"material-icons spin-icon\" [class.spinning]=\"refreshing\">autorenew</i>\r\n        {{refreshing ? 'Computing...' : 'Recompute'}}\r\n      </button>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"container container-scroll\">\r\n    <div class=\"cs-table horizontal-scroll\">\r\n\r\n      <!-- ── Sticky Header ───────────────────────────── -->\r\n      <div class=\"sticky-head\">\r\n\r\n        <!-- Row 1: Column titles -->\r\n        <div class=\"table-head\">\r\n          <table>\r\n            <tr>\r\n              <th class=\"w60\">S.No.</th>\r\n              <th class=\"w80\">Diff</th>\r\n              <th class=\"w60\">ID 1</th>\r\n              <th class=\"w150\">Party 1 Name</th>\r\n              <th class=\"w180\">Company 1</th>\r\n              <th class=\"w130\">Created By 1</th>\r\n              <th class=\"w120\">Number 1</th>\r\n              <th class=\"w80\">Col</th>\r\n              <th class=\"w60\">ID 2</th>\r\n              <th class=\"w150\">Party 2 Name</th>\r\n              <th class=\"w180\">Company 2</th>\r\n              <th class=\"w130\">Created By 2</th>\r\n              <th class=\"w120\">Number 2</th>\r\n              <th class=\"w80\">Col</th>\r\n            </tr>\r\n          </table>\r\n        </div>\r\n\r\n        <!-- Row 2: Filters — widths must match exactly -->\r\n        <div class=\"table-head border-top\">\r\n          <table>\r\n            <tr>\r\n              <th class=\"w60\">&nbsp;</th>\r\n              <!-- Diff dropdown -->\r\n              <th class=\"w80\">\r\n                <div class=\"th-search-acmt\">\r\n                  <mat-form-field class=\"cs-input select-input\">\r\n                    <mat-select name=\"diff_digits\" [(ngModel)]=\"filter_data.diff_digits\"\r\n                      (selectionChange)=\"search()\">\r\n                      <mat-option *ngFor=\"let opt of diffOptions\" [value]=\"opt.value\">{{opt.label}}</mat-option>\r\n                    </mat-select>\r\n                  </mat-form-field>\r\n                </div>\r\n              </th>\r\n              <th class=\"w60\">&nbsp;</th>\r\n              <!-- Party 1 Name search -->\r\n              <th class=\"w150\">\r\n                <div class=\"th-search-acmt\">\r\n                  <mat-form-field class=\"example-full-width cs-input select-input\">\r\n                    <input matInput placeholder=\"Search...\" name=\"search\"\r\n                      (keyup.enter)=\"search()\" [(ngModel)]=\"filter_data.search\">\r\n                  </mat-form-field>\r\n                </div>\r\n              </th>\r\n              <th class=\"w180\">&nbsp;</th>\r\n              <!-- Created By 1 search -->\r\n              <th class=\"w130\">\r\n                <div class=\"th-search-acmt\">\r\n                  <mat-form-field class=\"example-full-width cs-input select-input\">\r\n                    <input matInput placeholder=\"Search...\" name=\"created_by1\"\r\n                      (keyup.enter)=\"search()\" [(ngModel)]=\"filter_data.created_by1\">\r\n                  </mat-form-field>\r\n                </div>\r\n              </th>\r\n              <th class=\"w120\">&nbsp;</th>\r\n              <th class=\"w80\">&nbsp;</th>\r\n              <th class=\"w60\">&nbsp;</th>\r\n              <th class=\"w150\">&nbsp;</th>\r\n              <th class=\"w180\">&nbsp;</th>\r\n              <!-- Created By 2 search -->\r\n              <th class=\"w130\">\r\n                <div class=\"th-search-acmt\">\r\n                  <mat-form-field class=\"example-full-width cs-input select-input\">\r\n                    <input matInput placeholder=\"Search...\" name=\"created_by2\"\r\n                      (keyup.enter)=\"search()\" [(ngModel)]=\"filter_data.created_by2\">\r\n                  </mat-form-field>\r\n                </div>\r\n              </th>\r\n              <th class=\"w120\">&nbsp;</th>\r\n              <th class=\"w80\">&nbsp;</th>\r\n            </tr>\r\n          </table>\r\n        </div>\r\n      </div>\r\n\r\n      <!-- ── Table Body ──────────────────────────────── -->\r\n      <div class=\"table-container mb50\">\r\n        <div class=\"table-content\">\r\n          <table>\r\n\r\n            <!-- Data rows -->\r\n            <ng-container *ngIf=\"!loader\">\r\n              <tr *ngFor=\"let row of list; let i = index\" [ngClass]=\"diffClass(row.diff_digits)\">\r\n                <td class=\"w60\">{{i + 1 + sr_no}}</td>\r\n                <td class=\"w80\">\r\n                  <span class=\"diff-badge\" [ngClass]=\"diffClass(row.diff_digits)\">{{row.diff_digits}}</span>\r\n                  <span class=\"diff-sub\">{{diffLabel(row.diff_digits)}}</span>\r\n                </td>\r\n                <td class=\"w60\">\r\n                  <a class=\"link-btn\" mat-button (click)=\"goToParty(row.id1)\">{{row.id1}}</a>\r\n                </td>\r\n                <td class=\"w150\">{{row.name1 | titlecase}}</td>\r\n                <td class=\"w180\">{{row.company1 | titlecase}}</td>\r\n                <td class=\"w130\">{{row.created_by1 | titlecase}}</td>\r\n                <td class=\"w120 mono-num\">{{row.num1}}</td>\r\n                <td class=\"w80 col-tag\">{{row.col1}}</td>\r\n                <td class=\"w60\">\r\n                  <a class=\"link-btn\" mat-button (click)=\"goToParty(row.id2)\">{{row.id2}}</a>\r\n                </td>\r\n                <td class=\"w150\">{{row.name2 | titlecase}}</td>\r\n                <td class=\"w180\">{{row.company2 | titlecase}}</td>\r\n                <td class=\"w130\">{{row.created_by2 | titlecase}}</td>\r\n                <td class=\"w120 mono-num\">{{row.num2}}</td>\r\n                <td class=\"w80 col-tag\">{{row.col2}}</td>\r\n              </tr>\r\n            </ng-container>\r\n\r\n            <!-- Skeleton loader -->\r\n            <ng-container *ngIf=\"loader\">\r\n              <tr class=\"sk-loading\" *ngFor=\"let row of [].constructor(10)\">\r\n                <td class=\"w60\"><div>&nbsp;</div></td>\r\n                <td class=\"w80\"><div>&nbsp;</div></td>\r\n                <td class=\"w60\"><div>&nbsp;</div></td>\r\n                <td class=\"w150\"><div>&nbsp;</div></td>\r\n                <td class=\"w180\"><div>&nbsp;</div></td>\r\n                <td class=\"w130\"><div>&nbsp;</div></td>\r\n                <td class=\"w120\"><div>&nbsp;</div></td>\r\n                <td class=\"w80\"><div>&nbsp;</div></td>\r\n                <td class=\"w60\"><div>&nbsp;</div></td>\r\n                <td class=\"w150\"><div>&nbsp;</div></td>\r\n                <td class=\"w180\"><div>&nbsp;</div></td>\r\n                <td class=\"w130\"><div>&nbsp;</div></td>\r\n                <td class=\"w120\"><div>&nbsp;</div></td>\r\n                <td class=\"w80\"><div>&nbsp;</div></td>\r\n              </tr>\r\n            </ng-container>\r\n\r\n          </table>\r\n        </div>\r\n      </div>\r\n\r\n      <!-- No data -->\r\n      <ng-container *ngIf=\"!loader && datanotfound && list.length === 0\">\r\n        <app-not-result-found></app-not-result-found>\r\n      </ng-container>\r\n\r\n    </div>\r\n  </div>\r\n\r\n  <!-- Legend -->\r\n  <div class=\"legend-bar\">\r\n    <span class=\"legend-item diff-0\">&#9632; 0 — Exact same number</span>\r\n    <span class=\"legend-item diff-1\">&#9632; 1 — Last 1 digit differs</span>\r\n    <span class=\"legend-item diff-2\">&#9632; 2 — Last 2 digits differ</span>\r\n    <span class=\"legend-item diff-3\">&#9632; 3 — Last 3 digits differ</span>\r\n  </div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/customer/dr-similar-mobile/dr-similar-mobile.component.scss":
/*!*****************************************************************************!*\
  !*** ./src/app/customer/dr-similar-mobile/dr-similar-mobile.component.scss ***!
  \*****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".computed-info {\n  font-size: 12px;\n  color: #555;\n}\n.computed-info b {\n  color: #333;\n}\n.text-warn {\n  color: #c0392b;\n}\n/* Diff row colours */\ntr.diff-0 {\n  background: #fde8e8;\n  border-left: 3px solid #c0392b;\n}\ntr.diff-1 {\n  background: #ffe8e8;\n}\ntr.diff-2 {\n  background: #fff8e1;\n}\ntr.diff-3 {\n  background: #e8f5e9;\n}\n/* Diff badge */\n.diff-badge {\n  display: inline-block;\n  padding: 1px 7px;\n  border-radius: 4px;\n  font-weight: 700;\n  font-size: 11px;\n  color: #fff;\n  margin-right: 2px;\n}\n.diff-badge.diff-0 {\n  background: #c0392b;\n}\n.diff-badge.diff-1 {\n  background: #e74c3c;\n}\n.diff-badge.diff-2 {\n  background: #f39c12;\n}\n.diff-badge.diff-3 {\n  background: #27ae60;\n}\n.diff-sub {\n  font-size: 9px;\n  color: #888;\n  display: block;\n}\n.mono-num {\n  font-family: monospace;\n  font-weight: 600;\n  font-size: 12px;\n}\n.col-tag {\n  font-size: 10px;\n  color: #777;\n}\n/* Recompute button spin */\n.spin-icon {\n  transition: transform 0.3s;\n  vertical-align: middle;\n  margin-right: 4px;\n}\n.spinning {\n  animation: spin 1s linear infinite;\n}\n@keyframes spin {\n  from {\n    transform: rotate(0deg);\n  }\n  to {\n    transform: rotate(360deg);\n  }\n}\n/* Legend bar */\n.legend-bar {\n  padding: 8px 16px;\n  display: flex;\n  gap: 20px;\n  font-size: 11px;\n  flex-wrap: wrap;\n}\n.legend-item.diff-0 {\n  color: #c0392b;\n}\n.legend-item.diff-1 {\n  color: #e74c3c;\n}\n.legend-item.diff-2 {\n  color: #e67e22;\n}\n.legend-item.diff-3 {\n  color: #27ae60;\n}"

/***/ }),

/***/ "./src/app/customer/dr-similar-mobile/dr-similar-mobile.component.ts":
/*!***************************************************************************!*\
  !*** ./src/app/customer/dr-similar-mobile/dr-similar-mobile.component.ts ***!
  \***************************************************************************/
/*! exports provided: DrSimilarMobileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DrSimilarMobileComponent", function() { return DrSimilarMobileComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ng6-toastr-notifications */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/ng6-toastr-notifications/fesm5/ng6-toastr-notifications.js");
/* harmony import */ var src_services_DatabaseService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/_services/DatabaseService */ "./src/_services/DatabaseService.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/router/fesm5/router.js");





var DrSimilarMobileComponent = /** @class */ (function () {
    function DrSimilarMobileComponent(service, toast, router) {
        this.service = service;
        this.toast = toast;
        this.router = router;
        this.list = [];
        this.loader = false;
        this.refreshing = false;
        this.datanotfound = false;
        this.filter_data = {};
        this.start = 0;
        this.pagenumber = 0;
        this.total_page = 0;
        this.pageCount = 0;
        this.sr_no = 0;
        this.computed_at = '';
        this.total_pairs = 0;
        this.diffOptions = [
            { value: '', label: 'All Types' },
            { value: '0', label: '0 — Exact Same Number' },
            { value: '1', label: '1 — Last 1 Digit Differs' },
            { value: '2', label: '2 — Last 2 Digits Differ' },
            { value: '3', label: '3 — Last 3 Digits Differ' },
        ];
        this.page_limit = service.pageLimit;
    }
    DrSimilarMobileComponent.prototype.ngOnInit = function () {
        this.getList();
    };
    DrSimilarMobileComponent.prototype.getList = function () {
        var _this = this;
        if (this.start < 0)
            this.start = 0;
        this.loader = true;
        this.service.post_rqst({ filter: this.filter_data, start: this.start, pagelimit: this.page_limit }, 'CustomerNetwork/drSimilarMobileList').subscribe(function (res) {
            _this.loader = false;
            if (res['statusCode'] == 200) {
                _this.list = res['list'] || [];
                _this.pageCount = res['count'] || 0;
                _this.computed_at = res['computed_at'] || '';
                _this.total_pairs = _this.pageCount;
                _this.datanotfound = _this.list.length === 0;
                _this.pagenumber = Math.ceil(_this.start / _this.page_limit) + 1;
                _this.total_page = Math.ceil(_this.pageCount / _this.page_limit);
                _this.sr_no = (_this.pagenumber - 1) * _this.page_limit;
            }
            else {
                _this.toast.errorToastr(res.statusMsg || 'Something went wrong');
                _this.datanotfound = true;
            }
        }, function () {
            _this.loader = false;
            _this.toast.errorToastr('Failed to load list');
        });
    };
    DrSimilarMobileComponent.prototype.refresh = function () {
        this.start = 0;
        this.filter_data = {};
        this.getList();
    };
    DrSimilarMobileComponent.prototype.search = function () {
        this.start = 0;
        this.getList();
    };
    DrSimilarMobileComponent.prototype.nextPage = function () {
        this.start += this.page_limit;
        this.getList();
    };
    DrSimilarMobileComponent.prototype.previous = function () {
        this.start -= this.page_limit;
        this.getList();
    };
    // Triggers heavy recomputation — updates cache table
    DrSimilarMobileComponent.prototype.recompute = function () {
        var _this = this;
        this.refreshing = true;
        this.service.post_rqst({}, 'CustomerNetwork/drSimilarMobileRefresh').subscribe(function (res) {
            _this.refreshing = false;
            if (res.statusCode == 200) {
                _this.toast.successToastr(res.statusMsg || 'Refresh complete');
                _this.start = 0;
                _this.getList();
            }
            else {
                _this.toast.errorToastr(res.statusMsg || 'Refresh failed');
            }
        }, function () {
            _this.refreshing = false;
            _this.toast.errorToastr('Refresh request failed');
        });
    };
    DrSimilarMobileComponent.prototype.goToParty = function (id) {
        window.open('/distribution-list/' + id + '/1');
    };
    DrSimilarMobileComponent.prototype.diffClass = function (diff) {
        return ['diff-0', 'diff-1', 'diff-2', 'diff-3'][diff] || '';
    };
    DrSimilarMobileComponent.prototype.diffLabel = function (diff) {
        return ['Exact Same', 'Last 1 Digit', 'Last 2 Digits', 'Last 3 Digits'][diff] || '';
    };
    DrSimilarMobileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-dr-similar-mobile',
            template: __webpack_require__(/*! ./dr-similar-mobile.component.html */ "./src/app/customer/dr-similar-mobile/dr-similar-mobile.component.html"),
            styles: [__webpack_require__(/*! ./dr-similar-mobile.component.scss */ "./src/app/customer/dr-similar-mobile/dr-similar-mobile.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_services_DatabaseService__WEBPACK_IMPORTED_MODULE_3__["DatabaseService"],
            ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_2__["ToastrManager"],
            _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]])
    ], DrSimilarMobileComponent);
    return DrSimilarMobileComponent;
}());



/***/ }),

/***/ "./src/app/customer/installation-detail/installation-detail.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/customer/installation-detail/installation-detail.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-container\">\r\n  <div class=\"tools-container\">\r\n    <a mat-icon-button matTooltip=\"Back\" (click)=\"back()\">\r\n      <i class=\"material-icons\">arrow_back</i>\r\n    </a>\r\n    <h2>Installation Details</h2>\r\n  </div>\r\n\r\n  <div class=\"container pt10 pl10 pr10 pb50\">\r\n    <div class=\"row\">\r\n      <div class=\"col s12 m12 l8\">\r\n        <!-- product data start -->\r\n        <div class=\"card\" *ngIf=\"!skLoading\">\r\n          <div class=\"card-head\">\r\n            <h2>Customer Details</h2>\r\n            <div class=\"left-auto\" *ngIf=\"getData.complaint_status=='Pending'\">\r\n              <a class=\"sm-mat-icon-button\" mat-icon-button matTooltip=\"Edit Detail\"\r\n                [routerLink]=\"['add-installation/', 'installation',this.id]\">\r\n                <i class=\"material-icons\">edit</i>\r\n              </a>\r\n            </div>\r\n          </div>\r\n          <div class=\"card-body\">\r\n            <div class=\"grid-box\">\r\n\r\n              <div class=\"block-feilds\">\r\n                <span>Customer Name</span>\r\n                <p>\r\n                  {{ getData.customer_name ? (getData.customer_name| titlecase) : \"---\" }}\r\n                </p>\r\n              </div>\r\n\r\n              <div class=\"block-feilds\">\r\n                <span>Customer Mobile No.</span>\r\n                <p>\r\n                  {{\r\n                  getData.customer_mobile ? getData.customer_mobile : \"---\"\r\n                  }}\r\n                </p>\r\n              </div>\r\n\r\n              <div class=\"block-feilds\">\r\n                <span>Alternate Mobile No.</span>\r\n                <p>{{getData.alternate_mobile_no ? getData.alternate_mobile_no :'---'}}</p>\r\n              </div>\r\n\r\n              <div class=\"block-feilds\">\r\n                <span>State</span>\r\n                <p>{{ getData.state ? (getData.state| titlecase) : \"---\" }}</p>\r\n              </div>\r\n\r\n              <div class=\"block-feilds\">\r\n                <span>District</span>\r\n                <p>{{ getData.district ? (getData.district| titlecase) : \"---\" }}</p>\r\n              </div>\r\n\r\n              <div class=\"block-feilds\">\r\n                <span>City</span>\r\n                <p>{{ getData.city ? (getData.city| titlecase) : \"---\" }}</p>\r\n              </div>\r\n\r\n              <div class=\"block-feilds\">\r\n                <span>Pincode</span>\r\n                <p>{{ getData.pincode ? getData.pincode : \"---\" }}</p>\r\n              </div>\r\n\r\n              <div class=\"block-feilds\">\r\n                <span>Address</span>\r\n                <p>{{ getData.address ? (getData.address| titlecase) : \"N/A\" }}</p>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n        </div>\r\n        <div class=\"card\" *ngIf=\"skLoading\">\r\n          <div class=\"sk-head\">\r\n            <h2>&nbsp;</h2>\r\n          </div>\r\n          <div class=\"card-body\">\r\n            <div class=\"grid-box single mt10\" *ngFor=\"let row of [].constructor(5)\">\r\n              <div class=\"sk-box\">&nbsp;</div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col s12 mt16 m12 l12\">\r\n          <div class=\"card\" *ngIf=\"!skLoading\">\r\n            <div class=\"card-head\">\r\n              <h2>Installation Details</h2>\r\n            </div>\r\n            <div class=\"card-body\">\r\n              <div class=\"grid-box\">\r\n                <div class=\"block-feilds\">\r\n                  <span>Date Created</span>\r\n                  <p>{{ getData.date_created ? (getData.date_created | date : 'dd MMM yyy ,h:mm a'): \"---\" }}</p>\r\n                </div>\r\n\r\n                <div class=\"block-feilds\">\r\n                  <span>Created By</span>\r\n                  <p>\r\n                    {{ getData.created_name ? (getData.created_name | titlecase): \"---\" }}\r\n                  </p>\r\n                </div>\r\n\r\n                <div class=\"block-feilds\">\r\n                  <span>Installation No.</span>\r\n                  <p>{{ getData.complain_no ? getData.complain_no : \"---\" }}</p>\r\n                </div>\r\n                <div class=\"block-feilds\">\r\n                  <span>Technician Name</span>\r\n                  <p>\r\n                    {{ getData.carpenter_name ? (getData.carpenter_name | titlecase): \"N/A\" }}\r\n                  </p>\r\n                </div>\r\n\r\n                <div class=\"block-feilds \">\r\n                  <span>Technician Mobile No.</span>\r\n                  <p>\r\n                    {{\r\n                    getData.carpenter_mobile ? getData.carpenter_mobile : \"N/A\"\r\n                    }}\r\n                  </p>\r\n                </div>\r\n                <div class=\"block-feilds flex-heading\">\r\n                  <div>\r\n                    <span>Installation Status</span>\r\n                    <!-- <p>{{getData.complaint_status ? (getData.complaint_status| titlecase) : '--'}}</p> -->\r\n                    <p>\r\n                      <strong class=\"yellow-clr\" *ngIf=\"getData.complaint_status=='Pending'\">\r\n                        {{getData.complaint_status ? (getData.complaint_status | titlecase) :\r\n                        '--'}}</strong>\r\n                      <strong class=\"green-clr\" *ngIf=\"getData.complaint_status=='Done'\">\r\n                        {{getData.complaint_status ? (getData.complaint_status | titlecase) :\r\n                        '--'}}</strong>\r\n                      <strong class=\"red-clr\" *ngIf=\"getData.complaint_status=='Reject'\">\r\n                        {{getData.complaint_status ? (getData.complaint_status | titlecase) :\r\n                        '--'}}</strong>\r\n                    </p>\r\n                  </div>\r\n                  <div class=\"left-auto\" *ngIf=\"getData.complaint_status == 'Pending'\">\r\n                    <a class=\"sm-mat-icon-button\" mat-icon-button matTooltip=\"Change Status\"\r\n                      (click)=\"updateInstallationStataus(getData.id)\">\r\n                      <i class=\"material-icons\">edit</i>\r\n                    </a>\r\n                  </div>\r\n                </div>\r\n                <div class=\"block-feilds \" *ngIf=\"getData.complaint_status=='Reject'\">\r\n                  <span>Reason Of Reject</span>\r\n                  <p>\r\n                    {{\r\n                    getData.status_reason ? (getData.status_reason |titlecase) : \"N/A\"\r\n                    }}\r\n                  </p>\r\n                </div>\r\n                <div class=\"block-feilds \">\r\n                  <span>TAT</span>\r\n                  <p>\r\n                    {{\r\n                    getData.pending_at ? getData.pending_at : \"N/A\"\r\n                    }}\r\n                  </p>\r\n                </div>\r\n              </div>\r\n            </div>\r\n            <div class=\"edit-modal mt15\">\r\n              <p class=\"heading\">Product List</p>\r\n              <div mat-dialog-content>\r\n                <div class=\"cs-table left-right-10\">\r\n                  <!-- <div class=\" border-top\"> -->\r\n                  <div class=\"table-head\">\r\n                    <table>\r\n                      <tr>\r\n                        <th class=\"w30 text-center \">Sr.No</th>\r\n                        <th class=\"w100\">Category</th>\r\n                        <th class=\"w100\">Sub Category</th>\r\n                        <th class=\"w180\">Product Detail</th>\r\n                        <th class=\"w30 text-center \">Qty</th>\r\n                      </tr>\r\n                    </table>\r\n                    <!-- </div> -->\r\n                  </div>\r\n\r\n                  <div class=\"table-container pb0\">\r\n                    <div class=\"table-content none-shadow\">\r\n                      <table>\r\n                        <ng-container *ngFor=\"let row of add_list; let i = index\">\r\n                          <tr>\r\n                            <td class=\"w30 text-center \">{{ i + 1 }}</td>\r\n                            <td class=\"w100\">{{ row.category_name | titlecase}}</td>\r\n                            <td class=\"w100\">{{ row.subcat_name | titlecase}}</td>\r\n                            <td class=\"w180\">{{ row.product_name | titlecase}}-{{row.product_code | titlecase}}</td>\r\n                            <td class=\"w30 text-center \">{{ row.qty }}</td>\r\n                          </tr>\r\n                        </ng-container>\r\n                      </table>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"card\" *ngIf=\"skLoading\">\r\n            <div class=\"sk-head\">\r\n              <h2>&nbsp;</h2>\r\n            </div>\r\n            <div class=\"card-body\">\r\n              <div class=\"grid-box single mt10\" *ngFor=\"let row of [].constructor(5)\">\r\n                <div class=\"sk-box\">&nbsp;</div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"col s12 mt16 m12 l12\"\r\n          *ngIf=\"getData.complaint_status=='Done' || getData.complaint_status=='Reject'\">\r\n          <div class=\"card\" *ngIf=\"!skLoading\">\r\n            <div class=\"card-head\">\r\n              <h2>Closing Details</h2>\r\n            </div>\r\n            <div class=\"card-body\">\r\n              <div class=\"grid-box\">\r\n                <div class=\"block-feilds\">\r\n                  <span>Closing Date</span>\r\n                  <p>\r\n                    {{\r\n                    getData.closed_date != \"0000-00-00 00:00:00\"\r\n                    ? (getData.closed_date | date : 'dd MMM yyy ,h:mm a')\r\n                    : \"N/A\"\r\n                    }}\r\n                  </p>\r\n                </div>\r\n\r\n                <!-- <div class=\"block-feilds\">\r\n                  <span>Closing Type</span>\r\n                  <p>\r\n                    {{ getData.closing_type ? getData.closing_type : \"N/A\" }}\r\n                  </p>\r\n                </div> -->\r\n                <div class=\"block-feilds\">\r\n                  <span>Status Update By</span>\r\n                  <p>\r\n                    {{ getData.status_updated_by_name ? (getData.status_updated_by_name | titlecase): \"N/A\" }}\r\n                  </p>\r\n                </div>\r\n                <div class=\"block-feilds\" *ngIf=\"getData.complaint_status=='Done'\">\r\n                  <span>Closing Remark</span>\r\n                  <p>\r\n                    {{\r\n                    getData.closing_remark ? (getData.closing_remark | titlecase): \"N/A\"\r\n                    }}\r\n                  </p>\r\n                </div>\r\n                <div class=\"block-feilds\" *ngIf=\"getData.complaint_status=='Reject'\">\r\n                  <span>Reason of Reject</span>\r\n                  <p>\r\n                    {{\r\n                    getData.status_reason ? (getData.status_reason | titlecase): \"N/A\"\r\n                    }}\r\n                  </p>\r\n                </div>\r\n                <!-- <div class=\"block-feilds\">\r\n                  <span>Status Update Date</span>\r\n                  <p>\r\n                    {{\r\n                    getData.status_updated_date != \"0000-00-00 00:00:00\"\r\n                    ? (getData.status_updated_date | date : 'dd MMM yyy ,h:mm a')\r\n                    : \"N/A\"\r\n                    }}\r\n                  </p>\r\n                </div> -->\r\n\r\n              </div>\r\n              <div class=\"card-head mt15\" *ngIf=\"closeImg.length\">\r\n                <h2>Product Images</h2>\r\n              </div>\r\n              <div class=\"card-body\" *ngIf=\"closeImg.length\">\r\n                <div class=\"grid-box\">\r\n                  <div class=\"block-feilds\">\r\n                    <div class=\"doc-img\">\r\n                      <div class=\"image-block\" *ngFor=\"let row of closeImg\">\r\n                        <img [src]=\"url + row.image\" (click)=\"imageModel(url + row.image)\" style=\"cursor: zoom-in\" />\r\n                      </div>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div class=\"col s12 m4 l4\">\r\n        <div class=\"card\" *ngIf=\"!skLoading\">\r\n          <div class=\"card-head\">\r\n            <h2>Logs</h2>\r\n          </div>\r\n\r\n          <div class=\"logs-box\">\r\n            <ng-container *ngFor=\"let row of logs\">\r\n              <div class=\"logshead\">\r\n                {{ row.created_by_name| titlecase }} :-\r\n                {{ row.date_created | date : 'dd MMM yyy ,h:mm a'}}\r\n              </div>\r\n              <div class=\"logscontent\">\r\n                <span>Remark : </span> {{ row.msg ? (row.msg| titlecase) : (row.remark| titlecase) }}\r\n              </div>\r\n            </ng-container>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"card\" *ngIf=\"skLoading\">\r\n          <div class=\"sk-head\">\r\n            <h2>&nbsp;</h2>\r\n          </div>\r\n          <div class=\"card-body\">\r\n            <div class=\"grid-box single mt10\" *ngFor=\"let row of [].constructor(5)\">\r\n              <div class=\"sk-box\">&nbsp;</div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n\r\n  </div>\r\n  <div class=\"fab-btns\" *ngIf=\"getData.complaint_status=='Pending'\">\r\n    <button class=\"pulse excel\" mat-fab color=\"primary\" [matMenuTriggerFor]=\"menu\">\r\n      <i class=\"material-icons\">apps</i>\r\n      Action\r\n    </button>\r\n    <mat-menu #menu=\"matMenu\">\r\n      <button mat-menu-item (click)=\"openDialog(getData.id,getData.state)\"\r\n        [ngClass]=\"{'pulse': fabBtnValue=='activity'}\">\r\n        <mat-icon>assignment</mat-icon>\r\n        <span>Assign Technician</span>\r\n      </button>\r\n\r\n      <button mat-menu-item (click)=\"openDialog2(getData.id)\" [ngClass]=\"{'pulse': fabBtnValue=='activity'}\">\r\n        <mat-icon>add</mat-icon>\r\n        <span>Add Remark</span>\r\n      </button>\r\n    </mat-menu>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/customer/installation-detail/installation-detail.component.scss":
/*!*********************************************************************************!*\
  !*** ./src/app/customer/installation-detail/installation-detail.component.scss ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/customer/installation-detail/installation-detail.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/customer/installation-detail/installation-detail.component.ts ***!
  \*******************************************************************************/
/*! exports provided: InstallationDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InstallationDetailComponent", function() { return InstallationDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var src_app_image_module_image_module_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/image-module/image-module.component */ "./src/app/image-module/image-module.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_services_DatabaseService__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/_services/DatabaseService */ "./src/_services/DatabaseService.ts");
/* harmony import */ var src_app_localstorage_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/localstorage.service */ "./src/app/localstorage.service.ts");
/* harmony import */ var ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng6-toastr-notifications */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/ng6-toastr-notifications/fesm5/ng6-toastr-notifications.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var src_app_dialog_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/dialog.component */ "./src/app/dialog.component.ts");
/* harmony import */ var src_app_dialog_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/dialog.service */ "./src/app/dialog.service.ts");
/* harmony import */ var src_app_service_exportexcel_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/service/exportexcel.service */ "./src/app/service/exportexcel.service.ts");
/* harmony import */ var src_app_installation_engineer_assign_model_engineer_assign_model_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/installation/engineer-assign-model/engineer-assign-model.component */ "./src/app/installation/engineer-assign-model/engineer-assign-model.component.ts");
/* harmony import */ var src_app_installation_add_installation_remark_add_installation_remark_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/installation/add-installation-remark/add-installation-remark.component */ "./src/app/installation/add-installation-remark/add-installation-remark.component.ts");
/* harmony import */ var src_app_installation_installation_update_model_installation_update_model_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/installation/installation-update-model/installation-update-model.component */ "./src/app/installation/installation-update-model/installation-update-model.component.ts");















var InstallationDetailComponent = /** @class */ (function () {
    function InstallationDetailComponent(location, session, router, alert, service, editdialog, dialog, route, toast, excelservice, dialog1) {
        var _this = this;
        this.location = location;
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
        this.add_list = {};
        this.skLoading = false;
        this.assign_login_data = {};
        this.logined_user_data = {};
        this.stateDetail = [];
        this.product_size = [];
        this.featureFlag = false;
        this.allMrpFlag = false;
        this.complaintImg = [];
        this.fabBtnValue = 'excel';
        this.inspectionImg = [];
        this.closeImg = [];
        this.logs = [];
        this.url = this.service.uploadUrl + 'service_task/';
        this.route.params.subscribe(function (params) {
            _this.id = params.id;
            _this.service.currentUserID = params.id;
            if (_this.id) {
                _this.getInstallationDetail();
            }
        });
    }
    InstallationDetailComponent.prototype.ngOnInit = function () {
    };
    InstallationDetailComponent.prototype.getInstallationDetail = function () {
        var _this = this;
        this.loader = 1;
        this.skLoading = true;
        this.service.post_rqst({ 'complaint_id': this.id }, "ServiceTask/serviceInstallationDetail").subscribe(function (result) {
            if (result['statusCode'] == 200) {
                _this.skLoading = false;
                _this.getData = result['result'];
                console.log('getData', _this.getData);
                _this.add_list = _this.getData['add_list'];
                console.log('add_list', _this.add_list);
                _this.inspectionImg = _this.getData['inspection_image'];
                _this.closeImg = _this.getData['image'];
                _this.logs = _this.getData['log'];
                console.log(_this.logs);
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
    // getInstallationDetail()
    // {
    //   this.loader=true
    //   this.skLoading = true;
    //   this.service.post_rqst({'complaint_id':this.id},"ServiceTask/serviceInstallationDetail").subscribe((result=>
    //     {
    //       this.skLoading = false;
    //       this.loader=false;
    //     }
    //     ));
    //   }
    InstallationDetailComponent.prototype.imageModel = function (image) {
        var dialogRef = this.dialog.open(src_app_image_module_image_module_component__WEBPACK_IMPORTED_MODULE_3__["ImageModuleComponent"], {
            panelClass: 'Image-modal',
            data: {
                image: image,
            }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            console.log(result);
        });
    };
    InstallationDetailComponent.prototype.back = function () {
        this.location.back();
    };
    InstallationDetailComponent.prototype.openDialog = function (id, state) {
        console.log(id);
        var dialogRef = this.dialog.open(src_app_installation_engineer_assign_model_engineer_assign_model_component__WEBPACK_IMPORTED_MODULE_12__["EngineerAssignModelComponent"], {
            width: '400px',
            panelClass: 'cs-model',
            data: {
                id: id,
                state: state,
            }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result != false) {
                // this.getInstallationDetail();
            }
        });
    };
    InstallationDetailComponent.prototype.openDialog2 = function (id) {
        console.log(id);
        var dialogRef = this.dialog.open(src_app_installation_add_installation_remark_add_installation_remark_component__WEBPACK_IMPORTED_MODULE_13__["AddInstallationRemarkComponent"], {
            width: '400px',
            panelClass: 'cs-model',
            data: {
                id: id,
            }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result != false) {
                // this.getInstallationDetail();
            }
        });
    };
    InstallationDetailComponent.prototype.updateInstallationStataus = function (id) {
        var dialogRef = this.dialog.open(src_app_installation_installation_update_model_installation_update_model_component__WEBPACK_IMPORTED_MODULE_14__["InstallationUpdateModelComponent"], {
            width: '400px',
            panelClass: 'cs-model',
            data: {
                id: id,
            }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result != false) {
                // this.getInstallationDetail();
            }
        });
    };
    InstallationDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-installation-detail',
            template: __webpack_require__(/*! ./installation-detail.component.html */ "./src/app/customer/installation-detail/installation-detail.component.html"),
            styles: [__webpack_require__(/*! ./installation-detail.component.scss */ "./src/app/customer/installation-detail/installation-detail.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_8__["Location"], src_app_localstorage_service__WEBPACK_IMPORTED_MODULE_6__["sessionStorage"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], src_app_dialog_component__WEBPACK_IMPORTED_MODULE_9__["DialogComponent"], src_services_DatabaseService__WEBPACK_IMPORTED_MODULE_5__["DatabaseService"], src_app_dialog_service__WEBPACK_IMPORTED_MODULE_10__["DialogService"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_7__["ToastrManager"], src_app_service_exportexcel_service__WEBPACK_IMPORTED_MODULE_11__["ExportexcelService"], src_app_dialog_component__WEBPACK_IMPORTED_MODULE_9__["DialogComponent"]])
    ], InstallationDetailComponent);
    return InstallationDetailComponent;
}());



/***/ }),

/***/ "./src/app/customer/warranty-detail/warranty-detail.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/customer/warranty-detail/warranty-detail.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-container\">\r\n  <div class=\"tools-container\">\r\n    <a mat-icon-button matTooltip=\"Back\" (click)=\"back()\">\r\n      <i class=\"material-icons\">arrow_back</i>\r\n    </a>\r\n    <h2>Warranty Details</h2>\r\n  </div>\r\n\r\n  <div class=\"container pt10 pl10 pr10 pb50\">\r\n    <div class=\"row\">\r\n      <div class=\"col s12 m12 l8\">\r\n        <!-- product data start -->\r\n        <div class=\"card\" *ngIf=\"!skLoading\">\r\n          <div class=\"card-head\">\r\n            <h2>Warranty Information</h2>\r\n            <div class=\"left-auto\" *ngIf=\"getData.company_verification_status=='Pending'\">\r\n              <a class=\"sm-mat-icon-button\" mat-icon-button matTooltip=\"Edit Detail\"\r\n                [routerLink]=\"[ 'add-warranty/', this.id ]\">\r\n                <i class=\"material-icons\">edit</i>\r\n              </a>\r\n            </div>\r\n          </div>\r\n          <div class=\"card-body\">\r\n            <div class=\"grid-box\">\r\n              <div class=\"block-feilds\">\r\n                <span>Date Created</span>\r\n                <p>{{getData.date_created ? (getData.date_created | date : 'dd MMM yyy ,h:mm a') :'---'}}</p>\r\n              </div>\r\n\r\n              <div class=\"block-feilds\">\r\n                <span>Created By</span>\r\n                <p>{{getData.created_by_type ? (getData.created_by_type | titlecase) :'---'}}</p>\r\n              </div>\r\n\r\n              <div class=\"block-feilds\">\r\n                <span>Customer Name</span>\r\n                <p>{{getData.customer_name ? (getData.customer_name | titlecase) :'---'}}</p>\r\n              </div>\r\n\r\n\r\n\r\n              <div class=\"block-feilds\">\r\n                <span>Customer Mobile No.</span>\r\n                <p>{{getData.customer_mobile ? getData.customer_mobile :'---'}}</p>\r\n              </div>\r\n\r\n\r\n\r\n              <div class=\"block-feilds\">\r\n                <span>Product Name</span>\r\n                <p>{{getData.product_name ? (getData.product_name | titlecase) :'---'}}</p>\r\n              </div>\r\n\r\n\r\n\r\n              <div class=\"block-feilds\">\r\n                <span>Product Code</span>\r\n                <p>{{getData.product_code ? (getData.product_code ):'---'}}</p>\r\n              </div>\r\n\r\n              \r\n\r\n              <div class=\"block-feilds\">\r\n                <span>Serial No.</span>\r\n                <p>{{getData.serial_no ? (getData.serial_no | titlecase) :'---'}}</p>\r\n              </div>\r\n\r\n              <div class=\"block-feilds\">\r\n                <span>Warranty Months</span>\r\n                <p>{{getData.warranty_period ? getData.warranty_period :'---'}}</p>\r\n              </div>\r\n\r\n              <div class=\"block-feilds\">\r\n                <span>Date Of Purchase</span>\r\n                <p>{{getData.date_of_purchase != \"0000-00-00\" ? (getData.date_of_purchase | date :\"dd MMM yyy \"): \"--\"\r\n                  }}</p>\r\n              </div>\r\n\r\n              <div class=\"block-feilds\">\r\n                <span>End Date</span>\r\n                <p>{{getData.warranty_end_date != \"0000-00-00\" ? (getData.warranty_end_date | date :\"dd MMM yyy\"): \"--\"\r\n                  }}</p>\r\n              </div>\r\n\r\n\r\n              <div class=\"block-feilds flex-heading\">\r\n                <div>\r\n\r\n                  <span>Status</span>\r\n                  <!-- <p>{{getData.company_verification_status ? getData.company_verification_status :'---'}}</p> -->\r\n                  <p>\r\n                    <strong class=\"yellow-clr\" *ngIf=\"getData.company_verification_status=='Pending'\">\r\n                      {{getData.company_verification_status ? (getData.company_verification_status | titlecase) :\r\n                      '--'}}</strong>\r\n                    <strong class=\"green-clr\" *ngIf=\"getData.company_verification_status=='Verified'\">\r\n                      {{getData.company_verification_status ? (getData.company_verification_status | titlecase) :\r\n                      '--'}}</strong>\r\n                    <strong class=\"red-clr\" *ngIf=\"getData.company_verification_status=='Reject'\">\r\n                      {{getData.company_verification_status ? (getData.company_verification_status | titlecase) :\r\n                      '--'}}</strong>\r\n                  </p>\r\n                </div>\r\n\r\n                <div class=\"left-auto\" *ngIf=\"getData.company_verification_status=='Pending'\">\r\n                  <a class=\"sm-mat-icon-button\" mat-icon-button matTooltip=\"Change Status\"\r\n                    (click)=\"updateWarrantyStataus(getData.id,getData.warranty_period,getData.date_of_purchase)\">\r\n                    <i class=\"material-icons\">edit</i>\r\n                  </a>\r\n                </div>\r\n              </div>\r\n              <div class=\"block-feilds\" *ngIf=\"getData.company_verification_status=='Reject'\">\r\n                <span>Reason Of Reject</span>\r\n                <p>{{getData.reject_reason ? (getData.reject_reason | titlecase) : '--'}}</p>\r\n              </div>\r\n              <div class=\"block-feilds\" *ngIf=\"getData.company_verification_status!='Pending'\">\r\n                <span>Status Update Date</span>\r\n                <p>{{getData.verification_on != '0000-00-00 00:00:00' ? (getData.verification_on | date : 'dd MMM yyy\r\n                  ,h:mm a') :'---'}}</p>\r\n              </div>\r\n              <div class=\"block-feilds\" *ngIf=\"getData.company_verification_status!='Pending'\">\r\n                <span>Status Update By</span>\r\n                <p>{{getData.verification_by_name ? getData.verification_by_name : '--'}}</p>\r\n              </div>\r\n\r\n\r\n\r\n\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"card\" *ngIf=\"skLoading\">\r\n          <div class=\"sk-head\">\r\n            <h2>&nbsp;</h2>\r\n          </div>\r\n          <div class=\"card-body\">\r\n            <div class=\"img-container\">\r\n              <div class=\"image-block sk-loading\" *ngFor=\"let row of [].constructor(3)\">\r\n                &nbsp;\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"col s12 m12 l4\">\r\n        <div class=\"card\" *ngIf=\"!skLoading\">\r\n          <div class=\"card-head\">\r\n            <h2>Images</h2>\r\n          </div>\r\n          <div class=\"card-body\">\r\n            <div class=\"img-container\">\r\n              <div class=\"image-block\" *ngIf=\"getData.warranty_card_copy_img.length\">\r\n                <img [src]=\"url+getData.warranty_card_copy_img\" (click)=\"imageModel(url+getData.warranty_card_copy_img)\"\r\n                  style=\"cursor: zoom-in;\">\r\n                <p>Warranty Card Image</p>\r\n\r\n              </div>\r\n              <div class=\"image-block\" *ngIf=\"getData.bill_copy_img.length\">\r\n                <img [src]=\"url+getData.bill_copy_img\" (click)=\"imageModel(url+getData.bill_copy_img)\"\r\n                  style=\"cursor: zoom-in;\">\r\n                <p>Bill Card Image</p>\r\n\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"card\" *ngIf=\"skLoading\">\r\n          <div class=\"sk-head\">\r\n            <h2>&nbsp;</h2>\r\n          </div>\r\n          <div class=\"card-body\">\r\n            <div class=\"img-container\">\r\n              <div class=\"image-block sk-loading\" *ngFor=\"let row of [].constructor(3)\">\r\n                &nbsp;\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n    </div>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/customer/warranty-detail/warranty-detail.component.scss":
/*!*************************************************************************!*\
  !*** ./src/app/customer/warranty-detail/warranty-detail.component.scss ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".card-body .img-container {\n  display: flex;\n  justify-content: space-between;\n}\n\n.card-body .img-container .image-block {\n  width: 100% !important;\n}\n\n.card-body .img-container .image-block img {\n  width: 100% !important;\n  height: 100% !important;\n}"

/***/ }),

/***/ "./src/app/customer/warranty-detail/warranty-detail.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/customer/warranty-detail/warranty-detail.component.ts ***!
  \***********************************************************************/
/*! exports provided: WarrantyDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WarrantyDetailComponent", function() { return WarrantyDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var src_app_image_module_image_module_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/image-module/image-module.component */ "./src/app/image-module/image-module.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_services_DatabaseService__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/_services/DatabaseService */ "./src/_services/DatabaseService.ts");
/* harmony import */ var src_app_localstorage_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/localstorage.service */ "./src/app/localstorage.service.ts");
/* harmony import */ var ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng6-toastr-notifications */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/ng6-toastr-notifications/fesm5/ng6-toastr-notifications.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var src_app_dialog_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/dialog.component */ "./src/app/dialog.component.ts");
/* harmony import */ var src_app_dialog_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/dialog.service */ "./src/app/dialog.service.ts");
/* harmony import */ var src_app_service_exportexcel_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/service/exportexcel.service */ "./src/app/service/exportexcel.service.ts");
/* harmony import */ var src_app_warranty_warranty_update_model_warranty_update_model_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/warranty/warranty-update-model/warranty-update-model.component */ "./src/app/warranty/warranty-update-model/warranty-update-model.component.ts");













var WarrantyDetailComponent = /** @class */ (function () {
    function WarrantyDetailComponent(location, session, router, alert, service, editdialog, dialog, route, toast, excelservice, dialog1) {
        var _this = this;
        this.location = location;
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
        this.stateDetail = [];
        this.product_size = [];
        this.featureFlag = false;
        this.allMrpFlag = false;
        this.warrantyImg = [];
        this.url = this.service.uploadUrl + 'service_task/';
        this.route.params.subscribe(function (params) {
            _this.id = params.id;
            _this.service.currentUserID = params.id;
            if (_this.id) {
                _this.getWarrantyDetail();
            }
        });
    }
    WarrantyDetailComponent.prototype.ngOnInit = function () {
    };
    WarrantyDetailComponent.prototype.getWarrantyDetail = function () {
        var _this = this;
        this.skLoading = true;
        this.service.post_rqst({ 'warranty_id': this.id }, "ServiceTask/serviceWarrantyDetail").subscribe((function (result) {
            _this.getData = result['result'];
            _this.warrantyImg = _this.getData['image'];
            _this.skLoading = false;
        }));
    };
    WarrantyDetailComponent.prototype.back = function () {
        this.location.back();
    };
    WarrantyDetailComponent.prototype.imageModel = function (image) {
        var dialogRef = this.dialog.open(src_app_image_module_image_module_component__WEBPACK_IMPORTED_MODULE_3__["ImageModuleComponent"], {
            panelClass: 'Image-modal',
            data: {
                image: image,
            }
        });
        dialogRef.afterClosed().subscribe(function (result) {
        });
    };
    WarrantyDetailComponent.prototype.updateWarrantyStataus = function (row, warranty_period, date_of_purchase) {
        var _this = this;
        var dialogRef = this.dialog.open(src_app_warranty_warranty_update_model_warranty_update_model_component__WEBPACK_IMPORTED_MODULE_12__["WarrantyUpdateModelComponent"], {
            width: '400px',
            panelClass: 'cs-model',
            data: {
                id: row,
                period: warranty_period,
                date_of_purchase: date_of_purchase,
            }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result != false) {
                _this.getWarrantyDetail();
            }
        });
    };
    WarrantyDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-warranty-detail',
            template: __webpack_require__(/*! ./warranty-detail.component.html */ "./src/app/customer/warranty-detail/warranty-detail.component.html"),
            styles: [__webpack_require__(/*! ./warranty-detail.component.scss */ "./src/app/customer/warranty-detail/warranty-detail.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_8__["Location"], src_app_localstorage_service__WEBPACK_IMPORTED_MODULE_6__["sessionStorage"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], src_app_dialog_component__WEBPACK_IMPORTED_MODULE_9__["DialogComponent"], src_services_DatabaseService__WEBPACK_IMPORTED_MODULE_5__["DatabaseService"], src_app_dialog_service__WEBPACK_IMPORTED_MODULE_10__["DialogService"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_7__["ToastrManager"], src_app_service_exportexcel_service__WEBPACK_IMPORTED_MODULE_11__["ExportexcelService"], src_app_dialog_component__WEBPACK_IMPORTED_MODULE_9__["DialogComponent"]])
    ], WarrantyDetailComponent);
    return WarrantyDetailComponent;
}());



/***/ })

}]);