(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["service-service-module-service-module-module"],{

/***/ "./src/app/service/complaint-detail/complaint-detail.component.html":
/*!**************************************************************************!*\
  !*** ./src/app/service/complaint-detail/complaint-detail.component.html ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-container\">\r\n    <div class=\"tools-container\">\r\n        <a mat-icon-button matTooltip=\"Back\" (click)=\"back()\">\r\n            <i class=\"material-icons\">arrow_back</i>\r\n        </a>\r\n        <h2>Complaint Details</h2>\r\n\r\n        <div class=\"left-auto\">\r\n\r\n        </div>\r\n    </div>\r\n\r\n    <div class=\"container pt10 pl10 pr10 pb50\">\r\n\r\n        <!-- <div class=\"row\">\r\n            <div class=\"col s12\">\r\n                <div class=\"card\">\r\n                    <div class=\"card-head\">\r\n                        <h2></h2>\r\n                    </div>\r\n                    <div class=\"card-body\">\r\n                        <div class=\"tracking\">\r\n                            <div style=\"display: flex;width: 80%;justify-content: space-around;\">\r\n                                <span\r\n                                    style=\"background-color: #E6E6FA ; box-shadow: 1px 4px 4px grey; ; padding: 9px; border-radius: 6px;\">{{getData.date_created_to_assign\r\n                                    ? getData.date_created_to_assign :''}}</span>\r\n                                <span\r\n                                    style=\"background-color: #E6E6FA ; box-shadow: 1px 4px 4px grey; ; padding: 9px; border-radius: 6px;\">{{getData.assign_to_inspection\r\n                                    ? getData.assign_to_inspection :''}}</span>\r\n                                <span\r\n                                    style=\"background-color: #E6E6FA ; box-shadow: 1px 4px 4px grey; ; padding: 9px; border-radius: 6px;\">{{getData.inspection_to_closed\r\n                                    ? getData.inspection_to_closed :''}}</span>\r\n                                <span\r\n                                    style=\"background-color: #E6E6FA ; box-shadow: 1px 4px 4px grey; ; padding: 9px; border-radius: 6px;\">{{getData.closed_to_feedback\r\n                                    ? getData.closed_to_feedback :''}}</span>\r\n                            </div>\r\n                            <div class=\"tracking-header\">\r\n                                <ul>\r\n                                    <li class=\"check\">\r\n                                        <span>1</span>\r\n                                        <div class=\"tracking-con\">\r\n                                            <p>date_created</p>\r\n                                            <p>{{getData.date_created |date : 'dd MMM yyy ,h:mm a'}}</p>\r\n                                        </div>\r\n                                    </li>\r\n                                    <li [ngClass]=\"getData.carpenter_assign_status == 'Done' ?'check' :'reject'\">\r\n                                        <span>2</span>\r\n                                        <div class=\"tracking-con\">\r\n                                            <p>Assign Date</p>\r\n                                            <p>{{getData.carpenter_assign_date != '0000-00-00' ?\r\n                                                (getData.carpenter_assign_date |date : 'dd MMM yyy ,h:mm a') :'---'}}\r\n                                            </p>\r\n                                        </div>\r\n                                    </li>\r\n                                    <li [ngClass]=\"getData.inspection_status == 'Done' ?'check' :'reject'\">\r\n                                        <span>3</span>\r\n                                        <div class=\"tracking-con\">\r\n                                            <p>Inspection Date</p>\r\n                                            <p>{{getData.inspection_date != '0000-00-00' ? (getData.inspection_date |\r\n                                                date : 'dd MMM yyy ,h:mm a') :'---'}}</p>\r\n                                        </div>\r\n                                    </li>\r\n                                    <li [ngClass]=\"getData.complaint_status == 'Closed' ?'check' :'reject'\">\r\n                                        <span>4</span>\r\n                                        <div class=\"tracking-con\">\r\n                                            <p>Closed Date</p>\r\n                                            <p>\r\n                                                {{getData.closed_date != '0000-00-00' ? (getData.closed_date |\r\n                                                date :'dd MMM yyy ,h:mm a'):'---'}}\r\n                                            </p>\r\n                                        </div>\r\n                                    </li>\r\n                                    <li [ngClass]=\"getData.feedback_status == 'Done' ?'check' :'reject'\">\r\n                                        <span>5</span>\r\n                                        <div class=\"tracking-con\">\r\n                                            <p>Feedback Date</p>\r\n                                            <p>{{getData.feedback_date != '0000-00-00' ? (getData.feedback_date | date :\r\n                                                'dd MMM yyy ,h:mm a'):'---'}}</p>\r\n                                        </div>\r\n                                    </li>\r\n\r\n                                </ul>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n            </div>\r\n\r\n\r\n        </div> -->\r\n\r\n        <div class=\"row\">\r\n            <div class=\"col s12 m8 l8\">\r\n                <div class=\"col s12 mt16 m12 l12\">\r\n                    <!-- product data start -->\r\n                    <div class=\"card\" *ngIf=\"!skLoading\">\r\n                        <div class=\"card-head\">\r\n                            <h2>Customer Details</h2>\r\n                            <div class=\"left-auto\" *ngIf=\"getData.complaint_status=='Pending'\">\r\n                                <a class=\"sm-mat-icon-button\" mat-icon-button matTooltip=\"Edit Detail\"\r\n                                    [routerLink]=\"[ 'add-complaint/', 'complaint',this.id ]\">\r\n                                    <i class=\"material-icons\">edit</i>\r\n                                </a>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"card-body\">\r\n                            <div class=\"grid-box\">\r\n\r\n\r\n\r\n\r\n                                <!-- <div class=\"block-feilds\">\r\n                                    <span>Serial No.</span>\r\n                                    <p>{{getData.serial_no ? getData.serial_no :'---'}}</p>\r\n                                </div> -->\r\n\r\n                                <div class=\"block-feilds\">\r\n                                    <span>Customer Name</span>\r\n                                    <p>{{getData.customer_name ? (getData.customer_name | titlecase) :'---'}}</p>\r\n                                </div>\r\n                                <div class=\"block-feilds\">\r\n                                    <span>Customer Mobile No.</span>\r\n                                    <p>{{getData.customer_mobile ? getData.customer_mobile :'---'}}</p>\r\n                                </div>\r\n\r\n                                <div class=\"block-feilds\">\r\n                                    <span>Alternate Mobile No.</span>\r\n                                    <p>{{getData.alternate_mobile_no ? getData.alternate_mobile_no :'---'}}</p>\r\n                                </div>\r\n                                <div class=\"block-feilds\">\r\n                                    <span>Customer Address</span>\r\n                                    <p>{{getData.address ? (getData.address | titlecase):'---'}} ,{{getData.district ?\r\n                                        (getData.district | titlecase) :'---'}} ,{{getData.pincode ? getData.pincode\r\n                                        :'---'}},\r\n                                        {{getData.state ? (getData.state | titlecase):'---'}}</p>\r\n                                </div>\r\n\r\n\r\n\r\n                            </div>\r\n                        </div>\r\n\r\n                    </div>\r\n\r\n                </div>\r\n                <div class=\"card\" *ngIf=\"skLoading\">\r\n                    <div class=\"sk-head\">\r\n                        <h2>&nbsp;</h2>\r\n                    </div>\r\n                    <div class=\"card-body\">\r\n                        <div class=\"grid-box single mt10\" *ngFor=\"let row of [].constructor(5)\">\r\n                            <div class=\"sk-box\">&nbsp;</div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col s12 mt16 m12 l12\">\r\n                    <div class=\"card\" *ngIf=\"!skLoading\">\r\n                        <div class=\"card-head\">\r\n                            <h2>Complaint Details</h2>\r\n                        </div>\r\n                        <div class=\"card-body\">\r\n                            <div class=\"grid-box\">\r\n                                <div class=\"block-feilds\">\r\n                                    <span>Date Created</span>\r\n                                    <p>{{getData.date_created ? (getData.date_created | date : 'dd MMM yyy ,h:mm a')\r\n                                        :'---'}}</p>\r\n                                </div>\r\n\r\n                                <div class=\"block-feilds\">\r\n                                    <span>Created By</span>\r\n                                    <p>{{getData.created_name ? (getData.created_name | titlecase ):'---'}}</p>\r\n                                </div>\r\n                                <div class=\"block-feilds\">\r\n                                    <span>Complaint No.</span>\r\n                                    <p>{{getData.complain_no ? getData.complain_no :'---'}}</p>\r\n                                </div>\r\n\r\n                                <div class=\"block-feilds flex-heading\">\r\n                                    <div>\r\n\r\n                                        <span>Complaint Status</span>\r\n                                        <p>\r\n                                            <strong class=\"yellow-clr\" *ngIf=\"getData.complaint_status=='Pending'\">\r\n                                                {{getData.complaint_status ? (getData.complaint_status | titlecase) :\r\n                                                '--'}}</strong>\r\n                                            <strong class=\"green-clr\" *ngIf=\"getData.complaint_status=='Closed'\">\r\n                                                {{getData.complaint_status ? (getData.complaint_status | titlecase) :\r\n                                                '--'}}</strong>\r\n                                            <strong class=\"red-clr\" *ngIf=\"getData.complaint_status=='Cancel'\">\r\n                                                {{getData.complaint_status ? (getData.complaint_status | titlecase) :\r\n                                                '--'}}</strong>\r\n                                        </p>\r\n                                    </div>\r\n                                    <div class=\"left-auto\" *ngIf=\"getData.complaint_status=='Pending'\">\r\n                                        <a class=\"sm-mat-icon-button\" mat-icon-button matTooltip=\"Change Status\"\r\n                                            (click)=\"updateComplaintStataus(getData.id)\">\r\n                                            <i class=\"material-icons\">edit</i>\r\n                                        </a>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"block-feilds\" *ngIf=\"getData.complaint_status=='Cancel'\">\r\n                                    <span>Reason Of Cancellation</span>\r\n                                    <p>{{getData.status_reason ? (getData.status_reason| titlecase):'N/A'}}</p>\r\n                                </div>\r\n                                <div class=\"block-feilds\">\r\n                                    <span>Nature Of Problem</span>\r\n                                    <p>{{getData.nature_of_problem ? (getData.nature_of_problem| titlecase):'N/A'}}</p>\r\n                                </div>\r\n                                <div class=\"block-feilds\" *ngIf=\"getData.carpenter_assign_status=='Done'\">\r\n                                    <span>Technician Name</span>\r\n                                    <p>{{getData.carpenter_name ? (getData.carpenter_name | titlecase ):'---'}}</p>\r\n                                </div>\r\n\r\n                                <div class=\"block-feilds\" *ngIf=\"getData.carpenter_assign_status=='Done'\">\r\n                                    <span>Technician Mobile No.</span>\r\n                                    <p>{{getData.carpenter_mobile ? getData.carpenter_mobile :'---'}}</p>\r\n                                </div>\r\n                                <div class=\"block-feilds\">\r\n                                    <span>TAT</span>\r\n                                    <p>{{getData.pending_at ? (getData.pending_at | titlecase ):'---'}}</p>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"card-head mt15\" *ngIf=\"complaintImg.length\">\r\n                            <h2>Complaint Images</h2>\r\n                        </div>\r\n                        <div class=\"card-body\" *ngIf=\"complaintImg.length\">\r\n                            <div class=\"grid-box\">\r\n                                <div class=\"block-feilds\">\r\n                                    <div class=\"doc-img\">\r\n                                        <div class=\"image-block\" *ngFor=\"let row of complaintImg\">\r\n                                            <img [src]=\"url+row.image\" (click)=\"imageModel(url+row.image)\"\r\n                                                style=\"cursor: zoom-in;\">\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n\r\n                    </div>\r\n                    <div class=\"card\" *ngIf=\"skLoading\">\r\n                        <div class=\"sk-head\">\r\n                            <h2>&nbsp;</h2>\r\n                        </div>\r\n                        <div class=\"card-body\">\r\n                            <div class=\"grid-box single mt10\" *ngFor=\"let row of [].constructor(5)\">\r\n                                <div class=\"sk-box\">&nbsp;</div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"card\" *ngIf=\"skLoading\">\r\n                    <div class=\"sk-head\">\r\n                        <h2>&nbsp;</h2>\r\n                    </div>\r\n                    <div class=\"card-body\">\r\n                        <div class=\"grid-box single mt10\" *ngFor=\"let row of [].constructor(5)\">\r\n                            <div class=\"sk-box\">&nbsp;</div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"col s12 mt16 m12 l12\" *ngIf=\"getData.inspection_status!='Pending'\">\r\n                    <div class=\"card\" *ngIf=\"!skLoading\">\r\n                        <div class=\"card-head\">\r\n                            <h2>Inspection Details</h2>\r\n                        </div>\r\n                        <div class=\"card-body\">\r\n                            <div class=\"grid-box\">\r\n                                <div class=\"block-feilds\">\r\n                                    <span>Serial No.</span>\r\n                                    <p>{{getData.serial_no ? getData.serial_no :'---'}}</p>\r\n                                </div>\r\n                                <div class=\"block-feilds\">\r\n                                    <span>Product Name</span>\r\n                                    <p>{{getData.product_name ? (getData.product_name| titlecase) :'---'}}</p>\r\n                                </div>\r\n                                <div class=\"block-feilds\">\r\n                                    <span>Product Code</span>\r\n                                    <p>{{getData.product_code ? (getData.product_code| titlecase) :'---'}}</p>\r\n                                </div>\r\n                                <div class=\"block-feilds\">\r\n                                    <span>Warranty Status</span>\r\n                                    <p>{{getData.warranty_status ? (getData.warranty_status | titlecase):'---'}}</p>\r\n                                </div>\r\n                                <div class=\"block-feilds\">\r\n                                    <span>Closing Type</span>\r\n                                    <p>{{getData.closing_type ? getData.closing_type:'N/A'}}</p>\r\n                                </div>\r\n                                <div class=\"block-feilds\">\r\n                                    <span>Inspection Remark</span>\r\n                                    <p>{{getData.inspection_remark ? (getData.inspection_remark| titlecase):'N/A'}}</p>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"card-head mt15\" *ngIf=\"inspectionImg.length\">\r\n                                <h2>Inspection Images</h2>\r\n                            </div>\r\n                            <div class=\"card-body\" *ngIf=\"inspectionImg.length\">\r\n                                <div class=\"grid-box\">\r\n                                    <div class=\"block-feilds\">\r\n                                        <div class=\"doc-img\">\r\n                                            <div class=\"image-block\" *ngFor=\"let row of inspectionImg\">\r\n                                                <img [src]=\"url+row.image\" (click)=\"imageModel(url+row.image)\"\r\n                                                    style=\"cursor: zoom-in;\">\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"card\" *ngIf=\"skLoading\">\r\n                        <div class=\"sk-head\">\r\n                            <h2>&nbsp;</h2>\r\n                        </div>\r\n                        <div class=\"card-body\">\r\n                            <div class=\"grid-box single mt10\" *ngFor=\"let row of [].constructor(5)\">\r\n                                <div class=\"sk-box\">&nbsp;</div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"col s12 mt16 m12 l12\" *ngIf=\"spare_list.length > 0\">\r\n                    <div class=\"card\" *ngIf=\"!skLoading\">\r\n                        <div class=\"card-head\">\r\n                            <h2>Spare Part Details</h2>\r\n                        </div>\r\n                        <div class=\"card-body\">\r\n                            <div mat-dialog-content>\r\n                                <div class=\"cs-table left-right-10\">\r\n                                    <div class=\" border-top\">\r\n                                        <div class=\"table-head\">\r\n                                            <table>\r\n                                                <tr>\r\n                                                    <th class=\"w30 text-center \">Sr.No</th>\r\n                                                    <th class=\"w110\">Install Date</th>\r\n                                                    <th class=\"w150\">Technician Details</th>\r\n                                                    <th class=\"w80\">Part Name</th>\r\n                                                    <th class=\"w80\">Part No.</th>\r\n                                                    <th class=\"w30 text-center \">Qty</th>\r\n                                                </tr>\r\n                                            </table>\r\n                                        </div>\r\n                                    </div>\r\n\r\n                                    <div class=\"table-container pb0\">\r\n                                        <div class=\"table-content none-shadow\">\r\n                                            <table>\r\n                                                <ng-container>\r\n                                                    <tr *ngFor=\"let row of spare_list; let i = index\">\r\n                                                        <td class=\"w30 text-center \">{{i+1}}</td>\r\n                                                        <td class=\"w110\">{{row.installed_on ? (row.installed_on |\r\n                                                            date : 'dd MMM yyy ,h:mm a') : '--'}}</td>\r\n                                                        <td class=\"w150 \">{{row.installation_by_name?\r\n                                                            (row.installation_by_name |\r\n                                                            titlecase):'--'}}-{{row.installation_by_mobile}}</td>\r\n                                                        <td class=\"w80\">{{row.part_name? (row.part_name| titlecase)\r\n                                                            :'--'}}</td>\r\n                                                        <td class=\"w80\">{{row.part_no?( row.part_no| titlecase) :'--'}}\r\n                                                        </td>\r\n                                                        <td class=\"w30 text-center \">{{row.qty? row.qty :'--'}}</td>\r\n                                                    </tr>\r\n                                                </ng-container>\r\n                                            </table>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"col s12 mt16 m12 l12\" *ngIf=\"complaint_visit.length > 0\">\r\n                    <div class=\"card\" *ngIf=\"!skLoading\">\r\n                        <div class=\"card-head\">\r\n                            <h2>Complaint Visit</h2>\r\n                        </div>\r\n                        <div class=\"card-body\">\r\n                            <div mat-dialog-content>\r\n                                <div class=\"cs-table left-right-10\">\r\n                                    <div class=\" border-top\">\r\n                                        <div class=\"table-head\">\r\n                                            <table>\r\n                                                <tr>\r\n                                                    <th class=\"w40\">Sr.No</th>\r\n                                                    <th class=\"w130\">Visit Date</th>\r\n                                                    <th class=\"w180\">Technician Details</th>\r\n                                                    <th class=\"w50\">Start Time</th>\r\n                                                    <th class=\"w180\">Start Adddress</th>\r\n                                                    <th class=\"w50\">Stop Time</th>\r\n                                                    <th class=\"w200\">Stop Adddress</th>\r\n                                                </tr>\r\n                                            </table>\r\n                                        </div>\r\n                                    </div>\r\n\r\n                                    <div class=\"table-container pb0\">\r\n                                        <div class=\"table-content none-shadow\">\r\n                                            <table>\r\n                                                <ng-container>\r\n                                                    <tr *ngFor=\"let row of complaint_visit; let i = index\">\r\n                                                        <td class=\"w40 text-center\">{{i + 1}}</td>\r\n                                                        <td class=\"w130\">{{row.date_created ? (row.date_created | date :\r\n                                                            'dd MMM yyy ,h:mm a') : '--'}}</td>\r\n                                                        <td class=\"w180\">{{row.created_by_name? (row.created_by_name |\r\n                                                            titlecase):'--'}}-{{row.created_by_mobile}}</td>\r\n                                                        <td class=\"w50\">{{row.visit_start_time ? (row.visit_start_time |\r\n                                                            date : 'shortTime') : '--'}}</td>\r\n                                                        <td class=\"w180\">{{row.visit_start_address?\r\n                                                            (row.visit_start_address | titlecase):'--'}}</td>\r\n                                                        <td class=\"w50\">{{row.visit_stop_time ? (row.visit_stop_time |\r\n                                                            date : 'shortTime') : '--'}}</td>\r\n                                                        <td class=\"w200\">{{row.visit_stop_address?\r\n                                                            (row.visit_stop_address | titlecase):'--'}}</td>\r\n                                                    </tr>\r\n                                                </ng-container>\r\n                                            </table>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n\r\n\r\n                <div class=\"col s12 mt16 m12 l12\"\r\n                    *ngIf=\"getData.complaint_status=='Closed' || getData.complaint_status=='Cancel'\">\r\n                    <div class=\"card\" *ngIf=\"!skLoading\">\r\n                        <div class=\"card-head\">\r\n                            <h2>{{getData.complaint_status}} Details</h2>\r\n                        </div>\r\n                        <div class=\"card-body\">\r\n                            <div class=\"grid-box\">\r\n                                <div class=\"block-feilds\" *ngIf=\"getData.replaced_status=='Done'\">\r\n                                    <span>New Serial No.</span>\r\n                                    <p>{{getData.new_serial_no ? (getData.new_serial_no| titlecase):'N/A'}}</p>\r\n                                </div>\r\n                                <div class=\"block-feilds\" *ngIf=\"getData.replaced_status=='Done'\">\r\n                                    <span>Replaced By</span>\r\n                                    <p>{{getData.replaced_by_type ? (getData.replaced_by_type| titlecase):'N/A'}}</p>\r\n                                </div>\r\n                                <div class=\"block-feilds\" *ngIf=\"getData.replaced_by_type=='Dealer'\">\r\n                                    <span>Company Name</span>\r\n                                    <p>{{getData.replaced_by_company_name?(getData.replaced_by_company_name |\r\n                                        titlecase):'N/A'}}</p>\r\n                                </div>\r\n                                <div class=\"block-feilds\" *ngIf=\"getData.replaced_by_type=='Dealer'\">\r\n                                    <span>Dealer Name</span>\r\n                                    <p>{{getData.replaced_by_name ? (getData.replaced_by_name | titlecase):'N/A'}}</p>\r\n                                </div>\r\n                                <div class=\"block-feilds\" *ngIf=\"getData.replaced_by_type=='Dealer'\">\r\n                                    <span>Dealer Mobile</span>\r\n                                    <p>{{getData.replaced_by_mobile ? getData.replaced_by_mobile:'N/A'}}</p>\r\n                                </div>\r\n\r\n                                <div class=\"block-feilds\" *ngIf=\"getData.replaced_status=='Done'\">\r\n                                    <span>Product type</span>\r\n                                    <p>{{getData.product_type ? getData.product_type:'N/A'}}</p>\r\n                                </div>\r\n                                <div class=\"block-feilds\">\r\n                                    <span>{{getData.complaint_status}} Date</span>\r\n                                    <p>{{getData.closed_date != '0000-00-00 00:00:00' ? (getData.closed_date |\r\n                                        date : 'dd MMM yyy ,h:mm a'):'N/A'}}</p>\r\n                                </div>\r\n                                <div class=\"block-feilds\" *ngIf=\"getData.complaint_status=='Cancel'\">\r\n                                    <span>{{getData.complaint_status}} Reason</span>\r\n                                    <p>{{getData.status_reason ? (getData.status_reason| titlecase):'N/A'}}</p>\r\n                                </div>\r\n                                <div class=\"block-feilds\" *ngIf=\"getData.complaint_status=='Closed'\">\r\n                                    <span>{{getData.complaint_status}} Remark</span>\r\n                                    <p>{{getData.closing_remark ? (getData.closing_remark| titlecase):'N/A'}}</p>\r\n                                </div>\r\n                                <div class=\"block-feilds\">\r\n                                    <span>Status Update Date</span>\r\n                                    <p>{{getData.status_updated_date != '0000-00-00 00:00:00' ?\r\n                                        (getData.status_updated_date |\r\n                                        date : 'dd MMM yyy ,h:mm a'):'N/A'}}</p>\r\n                                </div>\r\n                                <div class=\"block-feilds\">\r\n                                    <span>Status Update By</span>\r\n                                    <p>\r\n                                        {{ getData.status_updated_by_name ? (getData.status_updated_by_name |\r\n                                        titlecase): \"N/A\" }}\r\n                                    </p>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"card-head mt15\" *ngIf=\"closeImg.length\">\r\n                                <h2>{{getData.complaint_status}} Images</h2>\r\n                            </div>\r\n                            <div class=\"card-body\" *ngIf=\"closeImg.length\">\r\n                                <div class=\"grid-box\">\r\n                                    <div class=\"block-feilds\">\r\n                                        <div class=\"doc-img\">\r\n                                            <div class=\"image-block\" *ngFor=\"let row of closeImg\">\r\n                                                <img [src]=\"url+row.image\" (click)=\"imageModel(url+row.image)\"\r\n                                                    style=\"cursor: zoom-in;\">\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col s12 mt16 m12 l12\" *ngIf=\"getData.feedback_status=='Done'\">\r\n                    <div class=\"card\" *ngIf=\"!skLoading\">\r\n                        <div class=\"card-head\">\r\n                            <h2>Feedback Details</h2>\r\n                        </div>\r\n                        <div class=\"card-body\">\r\n                            <div class=\"grid-box\">\r\n                                <div class=\"block-feilds\">\r\n                                    <span>Feedback Date</span>\r\n                                    <p>{{getData.feedback_date !='0000-00-00 00:00:00' ? getData.feedback_date:'N/A'}}\r\n                                    </p>\r\n                                </div>\r\n                                <div class=\"block-feilds\">\r\n                                    <span>Feedback Remark</span>\r\n                                    <p>{{getData.feedback_remark ? (getData.feedback_remark| titlecase):'N/A'}}</p>\r\n                                </div>\r\n\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"col s12 m10 l4\" *ngIf=\"getData.log.length>0\">\r\n\r\n                <div class=\"card mt16 \" *ngIf=\"!skLoading\">\r\n                    <div class=\"card-head\">\r\n                        <h2>Logs</h2>\r\n                    </div>\r\n\r\n                    <div class=\"logs-box\">\r\n                        <ng-container *ngFor=\"let row of getData.log\">\r\n                            <div class=\"logshead \">{{row.created_by_name}} :- {{row.date_created | date:'dd MMM yyyy\r\n                                ,h:mm a'}}\r\n                            </div>\r\n                            <div class=\"logscontent \">\r\n                                <span>Remark : </span> {{row.msg ? (row.msg| titlecase) : (row.remark| titlecase)}}\r\n                            </div>\r\n                        </ng-container>\r\n                    </div>\r\n\r\n                </div>\r\n\r\n                <div class=\"card\" *ngIf=\"skLoading\">\r\n                    <div class=\"sk-head\">\r\n                        <h2>&nbsp;</h2>\r\n                    </div>\r\n                    <div class=\"card-body\">\r\n                        <div class=\"grid-box single mt10\" *ngFor=\"let row of [].constructor(5)\">\r\n                            <div class=\"sk-box\">\r\n                                &nbsp;\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n            </div>\r\n\r\n            <!-- ######################  TRACKER ######################## -->\r\n\r\n\r\n            <div class=\"row\">\r\n                <div class=\"col s12 m4 l4 mt25\" *ngIf=\"!skLoading\">\r\n                    <div>\r\n                        <div class=\"travel\">\r\n                            <ul>\r\n                                <li class=\"check\">\r\n                                    <span class=\"vistit-count\">\r\n                                        <i class=\"material-icons\">location_on</i>\r\n                                    </span>\r\n                                    <div class=\"tracking-con\">\r\n                                        <strong>\r\n                                            <p>Complaint Tracker</p>\r\n                                        </strong>\r\n                                        <!-- <p>{{getData.date_created |date : 'dd MMM yyy ,h:mm a'}}</p> -->\r\n                                    </div>\r\n                                    <br>\r\n                                </li>\r\n\r\n                                <li class=\"check\">\r\n                                    <span class=\"vistit-count\"><i class=\"material-icons\">location_on</i></span>\r\n                                    <!-- <span class=\"km\"> {{getData.date_created_to_assign\r\n                                        ? getData.date_created_to_assign :''}}</span> -->\r\n\r\n                                    <div class=\"counter\">\r\n                                        <div>\r\n                                            <div class=\"visit-time\">\r\n\r\n                                                <div class=\"visit-hours mt10\">\r\n                                                    <span class=\"green-clr\">Date Created</span>\r\n                                                    <p>{{getData.date_created |date : 'dd MMM yyy ,h:mm a'}}</p>\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n\r\n                                    </div>\r\n                                    <br>\r\n                                </li>\r\n                                <li *ngIf=\"getData.carpenter_assign_date!=='0000-00-00 00:00:00'\">\r\n                                    <span class=\"vistit-count\"><i class=\"material-icons\">location_on</i></span>\r\n                                    <!-- <span class=\"km\">{{getData.date_created_to_assign\r\n                                        ? getData.date_created_to_assign :''}}</span> -->\r\n                                    <div class=\"counter\">\r\n                                        <div>\r\n                                            <!-- <p><strong>Assign Date :</strong>\r\n                                                {{getData.carpenter_assign_date != '0000-00-00' ?\r\n                                                (getData.carpenter_assign_date |date : 'dd MMM yyy ,h:mm a') :'---'}}\r\n                                            </p> -->\r\n                                            <!-- <p *ngIf=\"row.start_address\"><strong>End GPS Address :</strong> {{row.address}}</p> -->\r\n                                            <div class=\"visit-time\">\r\n                                                <div class=\"visit-hours mt10\">\r\n                                                    <span class=\"green-clr\">Assign Date</span>\r\n                                                    <p>\r\n                                                        {{getData.carpenter_assign_date != '0000-00-00 00:00:00' ?\r\n                                                        (getData.carpenter_assign_date |date : 'dd MMM yyy ,h:mm a')\r\n                                                        :'---'}}</p>\r\n                                                    <!-- <p *ngIf=\"carpenter_assign_date == '0000-00-00 00:00:00'\">--</p> -->\r\n                                                </div>\r\n                                                <div class=\"visit-hours mt10\">\r\n                                                    <span>Total Time Taken</span>\r\n                                                    <p>{{getData.date_created_to_assign\r\n                                                        ? getData.date_created_to_assign :'--'}}</p>\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                    <br>\r\n                                </li>\r\n                                <li *ngIf=\"getData.inspection_date!=='0000-00-00 00:00:00'\">\r\n                                    <span class=\"vistit-count\"><i class=\"material-icons\">location_on</i></span>\r\n                                    <!-- <span class=\"km\">{{getData.assign_to_inspection\r\n                                        ? getData.assign_to_inspection :''}}</span> -->\r\n                                    <div class=\"counter\">\r\n                                        <div>\r\n                                            <!-- <p><strong>Inspection Date :</strong>\r\n                                                {{getData.inspection_date != '0000-00-00' ? (getData.inspection_date |\r\n                                                date : 'dd MMM yyy ,h:mm a') :'---'}}</p> -->\r\n                                            <!-- <p *ngIf=\"row.start_address\"><strong>End GPS Address :</strong> {{row.address}}</p> -->\r\n                                            <div class=\"visit-time\">\r\n                                                <div class=\"visit-hours mt10\">\r\n                                                    <span class=\"green-clr\">Inspection Date</span>\r\n                                                    <p>{{getData.inspection_date != '0000-00-00 00:00:00' ?\r\n                                                        (getData.inspection_date |\r\n                                                        date : 'dd MMM yyy ,h:mm a') :'---'}}</p>\r\n                                                </div>\r\n                                                <div class=\"visit-hours mt10\">\r\n                                                    <span>Total Time Taken</span>\r\n                                                    <p>{{getData.assign_to_inspection\r\n                                                        ? getData.assign_to_inspection :'--'}}</p>\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                    <br>\r\n                                </li>\r\n                                <li *ngIf=\"getData.closed_date!=='0000-00-00 00:00:00'\">\r\n                                    <span class=\"vistit-count\"><i class=\"material-icons\">location_on</i></span>\r\n                                    <!-- <span class=\"km\"> {{getData.inspection_to_closed\r\n                                        ? getData.inspection_to_closed :''}}</span> -->\r\n                                    <div class=\"counter\">\r\n                                        <div>\r\n                                            <!-- <p><strong>Closed Date :</strong>\r\n                                                {{getData.closed_date != '0000-00-00' ? (getData.closed_date |\r\n                                                date :'dd MMM yyy ,h:mm a'):'---'}}</p> -->\r\n                                            <!-- <p *ngIf=\"row.start_address\"><strong>End GPS Address :</strong> {{row.address}}</p> -->\r\n                                            <div class=\"visit-time\">\r\n                                                <div class=\"visit-hours mt10\"\r\n                                                    *ngIf=\"getData.complaint_status=='Closed'\">\r\n                                                    <span class=\"green-clr\">Closed Date</span>\r\n                                                    <p>{{getData.closed_date != '0000-00-00 00:00:00' ?\r\n                                                        (getData.closed_date |\r\n                                                        date :'dd MMM yyy ,h:mm a'):'---'}}</p>\r\n                                                </div>\r\n                                                <div class=\"visit-hours mt10\"\r\n                                                    *ngIf=\"getData.complaint_status=='Cancel'\">\r\n                                                    <span class=\"green-clr\">Cancel Date</span>\r\n                                                    <p>{{getData.closed_date != '0000-00-00 00:00:00' ?\r\n                                                        (getData.closed_date |\r\n                                                        date :'dd MMM yyy ,h:mm a'):'---'}}</p>\r\n                                                </div>\r\n                                                <div class=\"visit-hours mt10\">\r\n                                                    <span>Total Time Taken</span>\r\n                                                    <p>{{getData.inspection_to_closed\r\n                                                        ? getData.inspection_to_closed :'--'}}</p>\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                    <br>\r\n                                </li>\r\n                                <li *ngIf=\"getData.feedback_date!=='0000-00-00 00:00:00'\">\r\n                                    <span class=\"vistit-count\"><i class=\"material-icons\">location_on</i></span>\r\n                                    <!-- <span class=\"km\">{{getData.inspection_to_closed\r\n                                        ? getData.inspection_to_closed :''}} </span> -->\r\n                                    <div class=\"counter\">\r\n                                        <div>\r\n                                            <!-- <p><strong>Feedback Date :</strong>\r\n                                                {{getData.feedback_date != '0000-00-00' ? (getData.feedback_date | date\r\n                                                :\r\n                                                'dd MMM yyy ,h:mm a'):'---'}}</p> -->\r\n                                            <!-- <p *ngIf=\"row.start_address\"><strong>End GPS Address :</strong> {{row.address}}</p> -->\r\n                                            <div class=\"visit-time\">\r\n                                                <div class=\"visit-hours mt10\">\r\n                                                    <span class=\"green-clr\">Feedback Date</span>\r\n                                                    <p>{{getData.feedback_date != '0000-00-00 00:00:00' ?\r\n                                                        (getData.feedback_date\r\n                                                        | date\r\n                                                        :\r\n                                                        'dd MMM yyy ,h:mm a'):'---'}}</p>\r\n                                                </div>\r\n                                                <div class=\"visit-hours mt10\">\r\n                                                    <span>Total Time Taken</span>\r\n                                                    <p>--</p>\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                </li>\r\n                            </ul>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <div class=\"fab-btns\" *ngIf=\"getData.complaint_status=='Pending'\">\r\n        <button class=\" pulse excel\" mat-fab color=\"primary\" [matMenuTriggerFor]=\"menu\">\r\n            <i class=\"material-icons\">apps</i>\r\n            Action\r\n        </button>\r\n        <mat-menu #menu=\"matMenu\">\r\n            <button mat-menu-item (click)=\"openDialog(getData.id,getData.state)\"\r\n                [ngClass]=\"{'pulse': fabBtnValue=='activity'}\">\r\n                <mat-icon>assignment</mat-icon>\r\n                <span>Assign Technician</span>\r\n            </button>\r\n\r\n            <button mat-menu-item (click)=\"openDialog2(getData.id)\" [ngClass]=\"{'pulse': fabBtnValue=='activity'}\">\r\n                <mat-icon>add</mat-icon>\r\n                <span>Add Remark</span>\r\n            </button>\r\n        </mat-menu>\r\n    </div>\r\n</div>"

/***/ }),

/***/ "./src/app/service/complaint-detail/complaint-detail.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/service/complaint-detail/complaint-detail.component.scss ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".travel ul {\n  margin-left: 25px;\n  position: relative;\n  margin-top: 6px;\n}\n\n.travel ul li .counter {\n  width: 350px;\n  border-radius: 10px;\n  box-shadow: 0px 3px 6px 0px rgba(0, 0, 0, 0.1);\n  overflow: hidden;\n}"

/***/ }),

/***/ "./src/app/service/complaint-detail/complaint-detail.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/service/complaint-detail/complaint-detail.component.ts ***!
  \************************************************************************/
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
/* harmony import */ var _complaint_update_model_complaint_update_model_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../complaint-update-model/complaint-update-model.component */ "./src/app/service/complaint-update-model/complaint-update-model.component.ts");















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
            if (result == true) {
                _this.getComplaintDetail();
            }
        });
    };
    ComplaintDetailComponent.prototype.openDialog2 = function (id) {
        var _this = this;
        var dialogRef = this.dialog.open(src_app_add_complaint_remark_add_complaint_remark_component__WEBPACK_IMPORTED_MODULE_13__["AddComplaintRemarkComponent"], {
            width: '500px',
            panelClass: 'cs-modal',
            data: {
                id: id,
            }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result == true) {
                _this.getComplaintDetail();
            }
        });
    };
    ComplaintDetailComponent.prototype.updateComplaintStataus = function (id) {
        var _this = this;
        var dialogRef = this.dialog.open(_complaint_update_model_complaint_update_model_component__WEBPACK_IMPORTED_MODULE_14__["ComplaintUpdateModelComponent"], {
            width: '400px',
            panelClass: 'cs-model',
            data: {
                id: id,
            }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result == true) {
                _this.getComplaintDetail();
            }
        });
    };
    ComplaintDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-complaint-detail',
            template: __webpack_require__(/*! ./complaint-detail.component.html */ "./src/app/service/complaint-detail/complaint-detail.component.html"),
            styles: [__webpack_require__(/*! ./complaint-detail.component.scss */ "./src/app/service/complaint-detail/complaint-detail.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_8__["Location"], src_app_localstorage_service__WEBPACK_IMPORTED_MODULE_6__["sessionStorage"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], src_app_dialog_component__WEBPACK_IMPORTED_MODULE_9__["DialogComponent"], src_services_DatabaseService__WEBPACK_IMPORTED_MODULE_5__["DatabaseService"], src_app_dialog_service__WEBPACK_IMPORTED_MODULE_10__["DialogService"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_7__["ToastrManager"], src_app_service_exportexcel_service__WEBPACK_IMPORTED_MODULE_11__["ExportexcelService"], src_app_dialog_component__WEBPACK_IMPORTED_MODULE_9__["DialogComponent"]])
    ], ComplaintDetailComponent);
    return ComplaintDetailComponent;
}());



/***/ }),

/***/ "./src/app/service/complaint-list/complaint-list.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/service/complaint-list/complaint-list.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-container\">\r\n  <app-loader *ngIf=\"excelLoader\"></app-loader>\r\n  <div class=\"tools-container\">\r\n    <h2>Complaint List</h2>\r\n\r\n\r\n    <div class=\"left-auto df ac flex-gap-10\">\r\n      <a mat-icon-button matTooltip=\"Refresh\" (click)=\"refresh()\">\r\n        <i class=\"material-icons\">refresh</i>\r\n      </a>\r\n\r\n      <div class=\"pagination\" *ngIf=\"complaintList.length > 0 \">\r\n        <div class=\"pagination-content\">\r\n          Pages\r\n          <span>{{pagenumber}}</span>\r\n          of\r\n          <span>{{total_page}}</span>\r\n        </div>\r\n        <div class=\"page-nav\">\r\n          <button mat-icon-button matTooltip=\"Older\" (click)=\"pervious()\" [disabled]=\"start == 0\">\r\n            <i class=\"material-icons\">navigate_before</i>\r\n          </button>\r\n          <button mat-icon-button matTooltip=\"Newer\" (click)=\"nextPage()\" [disabled]=\"pagenumber == total_page \">\r\n            <i class=\"material-icons\">navigate_next</i>\r\n          </button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n\r\n    <div class=\"mat-tabbar\">\r\n      <ng-container>\r\n        <button mat-button [ngClass]=\"active_tab == 'All' ? 'active' : ''\"\r\n          (click)=\"active_tab = 'All'; getComplantList('')\"><i\r\n            class=\"material-icons\">all_inbox</i>All({{tab_count.all_count}})</button>\r\n\r\n        <button mat-button [ngClass]=\"active_tab == 'Pending' ? 'active' : ''\"\r\n          (click)=\"active_tab = 'Pending';sub_active_tab = 'Not_Assigned';getComplantList('')\"><i\r\n            class=\"material-icons\">pending_actions</i>Pending({{tab_count.pending_count}})</button>\r\n\r\n        <button mat-button [ngClass]=\"active_tab == 'Closed' ? 'active' : ''\"\r\n          (click)=\"active_tab = 'Closed';sub_active_tab = 'Closed_By_Service'; getComplantList('')\"><i\r\n            class=\"material-icons\">thumb_up_alt</i>Close({{tab_count.closed_count}})</button>\r\n\r\n        <button mat-button [ngClass]=\"active_tab == 'Cancel' ? 'active' : ''\"\r\n          (click)=\"active_tab = 'Cancel'; getComplantList('')\"><i\r\n            class=\"material-icons\">thumb_down_alt</i>Cancel({{tab_count.reject_count}})</button>\r\n\r\n      </ng-container>\r\n    </div>\r\n  </div>\r\n  <div class=\"tools-container\" *ngIf=\"active_tab == 'Pending'\">\r\n    <div class=\"mat-tabbar\">\r\n      <ng-container>\r\n        <button mat-button [ngClass]=\"sub_active_tab == 'Not_Assigned' ? 'active' : ''\"\r\n          (click)=\"sub_active_tab = 'Not_Assigned';getComplantList('')\"><i class=\"material-icons\">thumb_down_alt</i>Not\r\n          Assigned({{sub_tab_count.Not_Assigned}})</button>\r\n\r\n        <button mat-button [ngClass]=\"sub_active_tab == 'Assigned' ? 'active' : ''\"\r\n          (click)=\"sub_active_tab = 'Assigned';getComplantList('')\"><i\r\n            class=\"material-icons\">thumb_up_alt</i>Assigned({{sub_tab_count.Assigned}})</button>\r\n\r\n        <button mat-button [ngClass]=\"sub_active_tab == 'Inspection_Complete' ? 'active' : ''\"\r\n          (click)=\"sub_active_tab = 'Inspection_Complete';getComplantList('')\"><i\r\n            class=\"material-icons\">ballot</i>Inspection Complete({{sub_tab_count.Inspection_Complete}})</button>\r\n\r\n        <button mat-button [ngClass]=\"sub_active_tab == 'Replacement_Pending' ? 'active' : ''\"\r\n          (click)=\"sub_active_tab = 'Replacement_Pending';getComplantList('')\"><i\r\n            class=\"material-icons\">thumb_down_alt</i>Replacement Pending({{sub_tab_count.Replacement_Pending}})</button>\r\n\r\n        <button mat-button [ngClass]=\"sub_active_tab == 'Sparepart_Pending' ? 'active' : ''\"\r\n          (click)=\"sub_active_tab = 'Sparepart_Pending';getComplantList('')\"><i\r\n            class=\"material-icons\">thumb_down_alt</i>Spare Part Pending({{sub_tab_count.Sparepart_Pending}})</button>\r\n      </ng-container>\r\n    </div>\r\n\r\n  </div>\r\n\r\n  <div class=\"tools-container\" *ngIf=\"active_tab == 'Closed'\">\r\n    <div class=\"mat-tabbar\">\r\n      <ng-container>\r\n        <button mat-button [ngClass]=\"sub_active_tab == 'Closed_By_Service' ? 'active' : ''\"\r\n          (click)=\"sub_active_tab = 'Closed_By_Service';getComplantList('')\"><i\r\n            class=\"material-icons\">thumb_up_alt</i>Closed By Service({{sub_tab_count.Closed_By_Service}})</button>\r\n\r\n        <button mat-button [ngClass]=\"sub_active_tab == 'Closed_By_Replacement' ? 'active' : ''\"\r\n          (click)=\"sub_active_tab = 'Closed_By_Replacement';getComplantList('')\"><i\r\n            class=\"material-icons\">cancel</i>Closed By Replacement({{sub_tab_count.Closed_By_Replacement}})</button>\r\n\r\n        <button mat-button [ngClass]=\"sub_active_tab == 'Return_Pending' ? 'active' : ''\"\r\n          (click)=\"sub_active_tab = 'Return_Pending';getComplantList('')\"><i\r\n            class=\"material-icons\">thumb_down_alt</i>Return Pending({{sub_tab_count.Return_Pending}})</button>\r\n\r\n        <button mat-button [ngClass]=\"sub_active_tab == 'Feedback_Complete' ? 'active' : ''\"\r\n          (click)=\"sub_active_tab = 'Feedback_Complete';getComplantList('')\"><i\r\n            class=\"material-icons\">comment</i>Feedback Complete({{sub_tab_count.Feedback_Complete}})</button>\r\n      </ng-container>\r\n    </div>\r\n\r\n  </div>\r\n\r\n  <div class=\"container container-scroll\">\r\n    <div class=\"cs-table horizontal-scroll\">\r\n      <div class=\"sticky-head\">\r\n        <div class=\"table-head\">\r\n          <table>\r\n            <tr>\r\n              <th class=\"w60\">Sr.No</th>\r\n              <th class=\"w160\">Date Created</th>\r\n              <th class=\"w100\">Created By</th>\r\n              <th class=\"w100\">Complaint No.</th>\r\n              <th class=\"w130\">Customer Name</th>\r\n              <th class=\"w130\">Customer Mobile No.</th>\r\n              <th class=\"w180\">District & State</th>\r\n              <th class=\"w180\" *ngIf=\"active_tab == 'All' || sub_active_tab != 'Not_Assigned'\">Technician Details</th>\r\n              <th class=\"w130\" *ngIf=\"active_tab == 'All' || sub_active_tab != 'Not_Assigned'\">Inspection Status</th>\r\n              <th class=\"w100\" *ngIf=\"active_tab == 'All'\">Status</th>\r\n\r\n              <th class=\"w130\"\r\n                *ngIf=\"active_tab == 'All' || sub_active_tab == 'Closed_By_Replacement' || sub_active_tab == 'Closed_By_Service'\">\r\n                Last Remark</th>\r\n              <!-- <th class=\"w160\" *ngIf=\"active_tab == 'All' || sub_active_tab == 'Return_Pending'\">Return Date</th>\r\n              <th class=\"w130\" *ngIf=\"active_tab == 'All' || sub_active_tab == 'Return_Pending'\">Return Status</th> -->\r\n\r\n              <th class=\"w70 text-center\">TAT</th>\r\n              <th class=\"w180\" *ngIf=\"active_tab == 'Cancel' || active_tab == 'All'\">Reason Of Cancellation</th>\r\n              <th class=\"w160\"\r\n                *ngIf=\"active_tab == 'All' || sub_active_tab == 'Closed_By_Replacement' || sub_active_tab == 'Closed_By_Service'\">\r\n                Status Update Date</th>\r\n              <th class=\"w120\"\r\n                *ngIf=\"active_tab == 'All' || sub_active_tab == 'Closed_By_Replacement' || sub_active_tab == 'Closed_By_Service'\">\r\n                Status Update By</th>\r\n            </tr>\r\n          </table>\r\n        </div>\r\n\r\n        <div class=\"table-head bdrt\">\r\n          <table>\r\n            <tr>\r\n              <th class=\"w60\"></th>\r\n              <th class=\"w160\">\r\n                <div class=\"th-search-acmt\">\r\n                  <mat-form-field class=\"cs-input date-column infix-bodr\">\r\n                    <input matInput [matDatepicker]=\"picker\" placeholder=\"Date\" name=\"date_created\"\r\n                      #date_created=\"ngModel\" [(ngModel)]=\"filter_data.date_created\" (ngModelChange)=\"date_format()\"\r\n                      [max]=\"today_date\" readonly>\r\n                    <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\r\n                    <mat-datepicker #picker></mat-datepicker>\r\n                  </mat-form-field>\r\n                </div>\r\n              </th>\r\n              <th class=\"w100\">\r\n                <div class=\"th-search-acmt\">\r\n                  <mat-form-field>\r\n                    <input type=\"text\" matInput placeholder=\"Search ...\" name=\"created_name\"\r\n                      (keyup.enter)=\"getComplantList('')\" #created_name=\"ngModel\"\r\n                      [(ngModel)]=\"filter_data.created_name\">\r\n                  </mat-form-field>\r\n                </div>\r\n              </th>\r\n              <th class=\"w100\">\r\n                <div class=\"th-search-acmt\">\r\n                  <mat-form-field>\r\n                    <input type=\"text\" matInput placeholder=\"Search ...\" name=\"complain_no\"\r\n                      (keyup.enter)=\"getComplantList('')\" #complain_no=\"ngModel\" [(ngModel)]=\"filter_data.complain_no\">\r\n                  </mat-form-field>\r\n                </div>\r\n              </th>\r\n              <th class=\"w130\">\r\n                <div class=\"th-search-acmt\">\r\n                  <mat-form-field>\r\n                    <input type=\"text\" matInput placeholder=\"Search ...\" name=\"customer_name\"\r\n                      (keyup.enter)=\"getComplantList('')\" #customer_name=\"ngModel\"\r\n                      [(ngModel)]=\"filter_data.customer_name\">\r\n                  </mat-form-field>\r\n                </div>\r\n              </th>\r\n              <th class=\"w130\">\r\n                <div class=\"th-search-acmt\">\r\n                  <mat-form-field>\r\n                    <input type=\"text\" matInput placeholder=\"Search ...\" name=\"customer_mobile\"\r\n                      (keyup.enter)=\"getComplantList('')\" #customer_mobile=\"ngModel\"\r\n                      [(ngModel)]=\"filter_data.customer_mobile\">\r\n                  </mat-form-field>\r\n                </div>\r\n              </th>\r\n              <th class=\"w180\">\r\n                <div class=\"th-search-acmt\">\r\n                  <mat-form-field>\r\n                    <input type=\"text\" matInput placeholder=\"Search ...\" name=\"address\"\r\n                      (keyup.enter)=\"getComplantList('')\" #address=\"ngModel\" [(ngModel)]=\"filter_data.address\" />\r\n                  </mat-form-field>\r\n                </div>\r\n              </th>\r\n              <th class=\"w180\" *ngIf=\"active_tab == 'All' || sub_active_tab != 'Not_Assigned'\">\r\n                <div class=\"th-search-acmt\">\r\n                  <mat-form-field>\r\n                    <input type=\"text\" matInput placeholder=\"Search ...\" name=\"carpenter_detail\"\r\n                      (keyup.enter)=\"getComplantList('')\" #carpenter_detail=\"ngModel\"\r\n                      [(ngModel)]=\"filter_data.carpenter_detail\">\r\n                  </mat-form-field>\r\n                </div>\r\n              </th>\r\n              <th class=\"w130\" *ngIf=\"active_tab == 'All' || sub_active_tab != 'Not_Assigned'\">\r\n                <div class=\"th-search-acmt\">\r\n                  <mat-form-field class=\"cs-input select-input\">\r\n                    <mat-select name=\"status\" #status=\"ngModel\" [(ngModel)]=\"filter_data.inspection_status\"\r\n                      (selectionChange)=\"getComplantList('')\">\r\n                      <mat-option value=\"All\">All</mat-option>\r\n                      <mat-option value=\"Pending\">Pending</mat-option>\r\n                      <mat-option value=\"Done\">Done </mat-option>\r\n\r\n                    </mat-select>\r\n                  </mat-form-field>\r\n                </div>\r\n              </th>\r\n              <th class=\"w100\" *ngIf=\"active_tab == 'All'\">\r\n                <div class=\"th-search-acmt\">\r\n                  <mat-form-field class=\"cs-input select-input\">\r\n                    <mat-select name=\"status\" #status=\"ngModel\" [(ngModel)]=\"filter_data.complaint_status\"\r\n                      (selectionChange)=\"getComplantList('')\">\r\n                      <mat-option value=\"\">All</mat-option>\r\n                      <mat-option value=\"Pending\">Pending</mat-option>\r\n                      <mat-option value=\"Closed\">Closed </mat-option>\r\n                      <mat-option value=\"Cancel\">Cancel </mat-option>\r\n                    </mat-select>\r\n                  </mat-form-field>\r\n                </div>\r\n              </th>\r\n\r\n\r\n              <th class=\"w130\"\r\n                *ngIf=\"active_tab == 'All' || sub_active_tab == 'Closed_By_Replacement' || sub_active_tab == 'Closed_By_Service'\">\r\n              </th>\r\n              <!-- <th class=\"w160\" *ngIf=\"active_tab == 'All' || sub_active_tab == 'Return_Pending'\">\r\n                <div class=\"th-search-acmt\">\r\n                  <mat-form-field class=\"cs-input date-column infix-bodr\">\r\n                    <input matInput [matDatepicker]=\"picker\" placeholder=\"Date\" name=\"return_on\" #return_on=\"ngModel\"\r\n                      [(ngModel)]=\"filter_data.return_on\" (ngModelChange)=\"date_format3()\" [max]=\"today_date\" readonly>\r\n                    <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\r\n                    <mat-datepicker #picker></mat-datepicker>\r\n                  </mat-form-field>\r\n                </div>\r\n              </th>\r\n              <th class=\"w130\" *ngIf=\"active_tab == 'All' || sub_active_tab == 'Return_Pending'\">\r\n                <div class=\"th-search-acmt\">\r\n                  <mat-form-field class=\"cs-input select-input\">\r\n                    <mat-select name=\"return_status\" #return_status=\"ngModel\" [(ngModel)]=\"filter_data.return_status\"\r\n                      (selectionChange)=\"getComplantList('')\">\r\n                      <mat-option value=\"\">All</mat-option>\r\n                      <mat-option value=\"Pending\">Pending</mat-option>\r\n                      <mat-option value=\"Done\">Done </mat-option>\r\n                    </mat-select>\r\n                  </mat-form-field>\r\n                </div>\r\n              </th> -->\r\n\r\n              <th class=\"w70 text-center\"></th>\r\n              <th class=\"w180\" *ngIf=\"active_tab == 'Cancel'|| active_tab == 'All'\"></th>\r\n              <th class=\"w160\"\r\n                *ngIf=\"active_tab == 'All' || sub_active_tab == 'Closed_By_Replacement' || sub_active_tab == 'Closed_By_Service'\">\r\n                <div class=\"th-search-acmt\">\r\n                  <mat-form-field class=\"cs-input date-column infix-bodr\">\r\n                    <input matInput [matDatepicker]=\"picker\" placeholder=\"Date\" name=\"closed_date\"\r\n                      #closed_date=\"ngModel\" [(ngModel)]=\"filter_data.closed_date\" (ngModelChange)=\"date_format2()\"\r\n                      [max]=\"today_date\" readonly>\r\n                    <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\r\n                    <mat-datepicker #picker></mat-datepicker>\r\n                  </mat-form-field>\r\n                </div>\r\n              </th>\r\n              <th class=\"w120\"\r\n                *ngIf=\"active_tab == 'All' || sub_active_tab == 'Closed_By_Replacement' || sub_active_tab == 'Closed_By_Service'\">\r\n                <div class=\"th-search-acmt\">\r\n                  <mat-form-field>\r\n                    <input type=\"text\" matInput placeholder=\"Search ...\" name=\"status_updated_by_name\"\r\n                      (keyup.enter)=\"getComplantList('')\" #status_updated_by_name=\"ngModel\"\r\n                      [(ngModel)]=\"filter_data.status_updated_by_name\" />\r\n                  </mat-form-field>\r\n                </div>\r\n              </th>\r\n            </tr>\r\n          </table>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"table-container\">\r\n        <div class=\"table-content\">\r\n          <table>\r\n            <ng-container *ngIf=\"!loader\">\r\n              <tr *ngFor=\"let row of complaintList; let i = index \"\r\n                [ngClass]=\"{'Current': service.currentUserID == row.id}\">\r\n                <td class=\"w60\">{{i + 1 + sr_no}}</td>\r\n                <td class=\"w160\">{{row.date_created ? (row.date_created | date : 'dd MMM yyy ,h:mm a') : '--'}}</td>\r\n                <td class=\"w100\">{{row.created_name ? (row.created_name | titlecase): '--'}}</td>\r\n                <td class=\"w100\"><a class=\"link-btn\" mat-button (click)=\"service.setData(filter_data)\"\r\n                    routerLink=\"complaint-detail/{{(row.id)}}\" routerLinkActive=\"active\">{{row.complain_no}}</a></td>\r\n                <td class=\"w130\">{{row.customer_name | titlecase}}</td>\r\n                <td class=\"w130\">{{row.customer_mobile}}</td>\r\n                <td class=\"w180\">{{row.address?(row.address|titlecase):'--'}}</td>\r\n                <td class=\"w180\" *ngIf=\"active_tab == 'All' || sub_active_tab != 'Not_Assigned'\">{{row.carpenter_name ?\r\n                  (row.carpenter_name | titlecase) : ''}}-{{row.carpenter_mobile ? row.carpenter_mobile : ''}}</td>\r\n                <td class=\"w130\" *ngIf=\"active_tab == 'All' || sub_active_tab != 'Not_Assigned'\">\r\n                  <strong class=\"yellow-clr\" *ngIf=\"row.inspection_status=='Pending'\">{{row.inspection_status\r\n                    ? row.inspection_status : '--'}}</strong>\r\n                  <strong class=\"green-clr\" *ngIf=\"row.inspection_status=='Done'\">{{row.inspection_status\r\n                    ? row.inspection_status : '--'}}</strong>\r\n                </td>\r\n                <td class=\"w100\" *ngIf=\"active_tab == 'All'\">\r\n                  <strong class=\"yellow-clr\" *ngIf=\"row.complaint_status=='Pending'\">{{row.complaint_status ?\r\n                    row.complaint_status : '--'}}</strong>\r\n                  <strong class=\"green-clr\" *ngIf=\"row.complaint_status=='Closed'\">{{row.complaint_status ?\r\n                    row.complaint_status : '--'}}</strong>\r\n                  <strong class=\"red-clr\" *ngIf=\"row.complaint_status=='Cancel'\">{{row.complaint_status ?\r\n                    row.complaint_status : '--'}}</strong>\r\n                </td>\r\n\r\n                <td class=\"w130\"\r\n                  *ngIf=\"active_tab == 'All' || sub_active_tab == 'Closed_By_Replacement' || sub_active_tab == 'Closed_By_Service'\">\r\n                  {{row.remark ? (row.remark | titlecase ): '--'}}</td>\r\n                <!-- <td class=\"w160\" *ngIf=\"active_tab == 'All' || sub_active_tab == 'Return_Pending'\">{{row.return_on\r\n                  !='0000-00-00 00:00:00' ? (row.return_on | date : 'dd MMM yyy ,h:mm a') : '--'}}</td>\r\n                <td class=\"w130\" *ngIf=\"active_tab == 'All' || sub_active_tab == 'Return_Pending'\">\r\n                  <strong class=\"yellow-clr\" *ngIf=\"row.return_status=='Pending'\">{{row.return_status ?\r\n                    row.return_status : '--'}}</strong>\r\n                  <strong class=\"green-clr\" *ngIf=\"row.return_status=='Done'\">{{row.return_status ? row.return_status :\r\n                    '--'}}</strong>\r\n                </td> -->\r\n\r\n                <td class=\"w70\">{{row.pending_at}}</td>\r\n                <td class=\"w180\" *ngIf=\"active_tab == 'Cancel' || active_tab == 'All'\">{{row.status_reason| titlecase}}\r\n                </td>\r\n                <td class=\"w160\"\r\n                  *ngIf=\"active_tab == 'All' || sub_active_tab == 'Closed_By_Replacement' || sub_active_tab == 'Closed_By_Service'\">\r\n                  {{row.closed_date !='0000-00-00 00:00:00' ? (row.closed_date | date : 'dd MMM yyy ,h:mm a') : '--'}}\r\n                </td>\r\n                <td class=\"w120\"\r\n                  *ngIf=\"active_tab == 'All' || sub_active_tab == 'Closed_By_Replacement' || sub_active_tab == 'Closed_By_Service'\">\r\n                  {{row.status_updated_by_name?(row.status_updated_by_name|titlecase):'--'}}\r\n                </td>\r\n              </tr>\r\n            </ng-container>\r\n            <ng-container *ngIf=\"loader\">\r\n              <tr class=\"sk-loading\" *ngFor=\"let row of [].constructor(10)\">\r\n                <td class=\"w60\">\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n                <td class=\"w160\">\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n                <td class=\"w100\">\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n                <td class=\"w100\">\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n                <td class=\"w130\">\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n                <td class=\"w130\">\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n                <td class=\"w180\">\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n                <td class=\"w180\" *ngIf=\"active_tab == 'All' || sub_active_tab != 'Not_Assigned'\">\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n                <td class=\"w130\" *ngIf=\"active_tab == 'All' || sub_active_tab != 'Not_Assigned'\">\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n                <td class=\"w100\" *ngIf=\"active_tab == 'All'\">\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n\r\n                <td class=\"w130 \"\r\n                  *ngIf=\"active_tab == 'All' || sub_active_tab == 'Closed_By_Replacement' || sub_active_tab == 'Closed_By_Service'\">\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n                <!-- <td class=\"w160 \" *ngIf=\"active_tab == 'All' || sub_active_tab == 'Return_Pending'\">\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n                <td class=\"w130 \" *ngIf=\"active_tab == 'All' || sub_active_tab == 'Return_Pending'\">\r\n                  <div>&nbsp;</div>\r\n                </td> -->\r\n\r\n                <td class=\"w70 text-center\">\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n                <td class=\"w180\" *ngIf=\"active_tab == 'Cancel' || active_tab == 'All'\">\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n                <td class=\"w160\"\r\n                  *ngIf=\"active_tab == 'All' || sub_active_tab == 'Closed_By_Replacement' || sub_active_tab == 'Closed_By_Service'\">\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n                <td class=\"w120\"\r\n                  *ngIf=\"active_tab == 'All' || sub_active_tab == 'Closed_By_Replacement' || sub_active_tab == 'Closed_By_Service'\">\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n              </tr>\r\n            </ng-container>\r\n          </table>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <ng-container *ngIf=\"datanotofound==true && complaintList.length == 0;\">\r\n      <app-not-result-found></app-not-result-found>\r\n    </ng-container>\r\n  </div>\r\n  <div>\r\n  </div>\r\n\r\n  <div class=\"fab-btns\">\r\n    <button class=\"pulse excel\" mat-fab color=\"primary\" [ngClass]=\"{'pulse': fabBtnValue=='add'}\"\r\n      [matMenuTriggerFor]=\"menu\">\r\n      <i class=\"material-icons\">apps</i>\r\n      Action\r\n    </button>\r\n  </div>\r\n  <mat-menu #menu=\"matMenu\">\r\n    <button mat-menu-item (click)=\"downloadExcel();\" *ngIf=\"complaintList.length > 0 \">\r\n      <mat-icon>download</mat-icon>\r\n      <span>Download excel</span>\r\n    </button>\r\n    <button mat-menu-item (click)=\"lastBtnValue('add')\" routerLink=\"add-complaint/complaint\"\r\n      routerLinkActive=\"router-link-active\">\r\n      <mat-icon>add</mat-icon>\r\n      <span>Add New</span>\r\n    </button>\r\n  </mat-menu>\r\n</div>"

/***/ }),

/***/ "./src/app/service/complaint-list/complaint-list.component.scss":
/*!**********************************************************************!*\
  !*** ./src/app/service/complaint-list/complaint-list.component.scss ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/service/complaint-list/complaint-list.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/service/complaint-list/complaint-list.component.ts ***!
  \********************************************************************/
/*! exports provided: ComplaintListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ComplaintListComponent", function() { return ComplaintListComponent; });
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









var ComplaintListComponent = /** @class */ (function () {
    function ComplaintListComponent(dialog, dialogs, alert, service, rout, toast, session) {
        this.dialog = dialog;
        this.dialogs = dialogs;
        this.alert = alert;
        this.service = service;
        this.rout = rout;
        this.toast = toast;
        this.session = session;
        this.fabBtnValue = 'add';
        this.segmentList = [];
        this.SubcategoryList = [];
        this.complaintList = [];
        this.filter = false;
        this.data = [];
        this.start = 0;
        this.total_page = 0;
        this.pagenumber = 0;
        this.loader = false;
        this.active_tab = 'Pending';
        this.sub_active_tab = 'Not_Assigned';
        this.filter_data = {};
        this.excelLoader = false;
        this.datanotofound = false;
        this.downurl = '';
        this.downurl = service.downloadUrl;
        this.page_limit = service.pageLimit;
    }
    ComplaintListComponent.prototype.ngOnInit = function () {
        this.filter_data = this.service.getData();
        if (this.filter_data.status) {
            this.active_tab = this.filter_data.status;
            if (this.active_tab == 'Pending') {
                this.sub_active_tab = 'Not_Assigned';
                this.sub_active_tab = this.filter_data.sub_status;
            }
            else {
                this.sub_active_tab = this.filter_data.sub_status;
            }
        }
        this.getComplantList('');
    };
    ComplaintListComponent.prototype.pervious = function () {
        this.start = this.start - this.page_limit;
        this.getComplantList('');
    };
    ComplaintListComponent.prototype.nextPage = function () {
        this.start = this.start + this.page_limit;
        this.getComplantList('');
    };
    ComplaintListComponent.prototype.refresh = function () {
        this.start = 0;
        this.filter_data = {};
        this.getComplantList('');
    };
    ComplaintListComponent.prototype.clear = function () {
        this.refresh();
    };
    ComplaintListComponent.prototype.goToDetailHandler = function (id) {
        window.open("/complaint-detail/" + id);
    };
    ComplaintListComponent.prototype.date_format = function () {
        this.filter_data.date_created = moment__WEBPACK_IMPORTED_MODULE_4__(this.filter_data.date_created).format('YYYY-MM-DD');
        this.getComplantList('');
    };
    ComplaintListComponent.prototype.date_format2 = function () {
        this.filter_data.closed_date = moment__WEBPACK_IMPORTED_MODULE_4__(this.filter_data.closed_date).format('YYYY-MM-DD');
        this.getComplantList('');
    };
    ComplaintListComponent.prototype.date_format3 = function () {
        this.filter_data.return_on = moment__WEBPACK_IMPORTED_MODULE_4__(this.filter_data.return_on).format('YYYY-MM-DD');
        this.getComplantList('');
    };
    ComplaintListComponent.prototype.getComplantList = function (data) {
        var _this = this;
        if (this.pagenumber > this.total_page) {
            this.pagenumber = this.total_page;
            this.start = this.pageCount - this.page_limit;
        }
        if (this.start < 0) {
            this.start = 0;
        }
        if (this.active_tab == 'All') {
            this.filter_data.status = this.active_tab;
            this.filter_data.sub_status = '';
        }
        if (this.active_tab == 'Pending') {
            this.filter_data.status = this.active_tab;
            this.filter_data.sub_status = 'Not_Assigned';
        }
        if (this.active_tab == 'Cancel') {
            this.filter_data.status = this.active_tab;
            this.filter_data.sub_status = '';
        }
        if (this.active_tab == 'Closed') {
            this.filter_data.status = this.active_tab;
            this.filter_data.sub_status = 'Closed_By_Service';
        }
        if (this.sub_active_tab == 'Not_Assigned') {
            this.filter_data.sub_status = this.sub_active_tab;
        }
        if (this.sub_active_tab == 'Assigned') {
            this.filter_data.sub_status = this.sub_active_tab;
        }
        if (this.sub_active_tab == 'Inspection_Complete') {
            this.filter_data.sub_status = this.sub_active_tab;
        }
        if (this.sub_active_tab == 'Replacement_Pending') {
            this.filter_data.sub_status = this.sub_active_tab;
        }
        if (this.sub_active_tab == 'Sparepart_Pending') {
            this.filter_data.sub_status = this.sub_active_tab;
        }
        if (this.sub_active_tab == 'Closed_By_Service') {
            this.filter_data.sub_status = this.sub_active_tab;
        }
        if (this.sub_active_tab == 'Closed_By_Replacement') {
            this.filter_data.sub_status = this.sub_active_tab;
        }
        if (this.sub_active_tab == 'Return_Pending') {
            this.filter_data.sub_status = this.sub_active_tab;
        }
        if (this.sub_active_tab == 'Feedback_Complete') {
            this.filter_data.sub_status = this.sub_active_tab;
        }
        var header = this.service.post_rqst({ 'filter': this.filter_data, 'start': this.start, 'pagelimit': this.page_limit }, "ServiceTask/serviceComplaintList");
        this.loader = true;
        header.subscribe(function (result) {
            if (result['statusCode'] == 200) {
                console.log('result', result);
                _this.complaintList = result['result'];
                console.log(_this.complaintList);
                _this.pageCount = result['count'];
                _this.tab_count = result['tab_count'];
                _this.sub_tab_count = result['sub_tab_count'];
                _this.scheme_active_count = result['scheme_active_count'];
                _this.loader = false;
                if (_this.complaintList.length == 0) {
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
                for (var i = 0; i < _this.complaintList.length; i++) {
                    if (_this.complaintList[i].status == '1') {
                        _this.complaintList[i].newStatus = true;
                    }
                    else if (_this.complaintList[i].status == '0') {
                        _this.complaintList[i].newStatus = false;
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
    ComplaintListComponent.prototype.lastBtnValue = function (value) {
        this.fabBtnValue = value;
    };
    ComplaintListComponent.prototype.downloadExcel = function () {
        var _this = this;
        this.excelLoader = true;
        this.service.post_rqst({ 'filter': this.filter_data }, "Excel/service_complaint_list").subscribe((function (result) {
            if (result['msg'] == true) {
                window.open(_this.downurl + result['filename']);
                _this.getComplantList('');
                _this.excelLoader = false;
            }
            else {
            }
        }));
    };
    ComplaintListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-complaint-list',
            template: __webpack_require__(/*! ./complaint-list.component.html */ "./src/app/service/complaint-list/complaint-list.component.html"),
            styles: [__webpack_require__(/*! ./complaint-list.component.scss */ "./src/app/service/complaint-list/complaint-list.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_dialog_component__WEBPACK_IMPORTED_MODULE_7__["DialogComponent"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"], src_app_dialog_component__WEBPACK_IMPORTED_MODULE_7__["DialogComponent"], src_services_DatabaseService__WEBPACK_IMPORTED_MODULE_6__["DatabaseService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_5__["ToastrManager"], src_app_localstorage_service__WEBPACK_IMPORTED_MODULE_8__["sessionStorage"]])
    ], ComplaintListComponent);
    return ComplaintListComponent;
}());



/***/ }),

/***/ "./src/app/service/service-module/service-module.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/service/service-module/service-module.module.ts ***!
  \*****************************************************************/
/*! exports provided: ServiceModuleModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServiceModuleModule", function() { return ServiceModuleModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _complaint_list_complaint_list_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../complaint-list/complaint-list.component */ "./src/app/service/complaint-list/complaint-list.component.ts");
/* harmony import */ var src_app_auth_component_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/auth-component.guard */ "./src/app/auth-component.guard.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng-multiselect-dropdown */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/ng-multiselect-dropdown/fesm5/ng-multiselect-dropdown.js");
/* harmony import */ var src_app_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/material */ "./src/app/material.ts");
/* harmony import */ var angular_ng_autocomplete__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! angular-ng-autocomplete */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/angular-ng-autocomplete/fesm5/angular-ng-autocomplete.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var ngx_mat_select_search__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ngx-mat-select-search */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/ngx-mat-select-search/fesm5/ngx-mat-select-search.js");
/* harmony import */ var src_app_app_utility_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/app-utility.module */ "./src/app/app-utility.module.ts");
/* harmony import */ var _complaint_detail_complaint_detail_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../complaint-detail/complaint-detail.component */ "./src/app/service/complaint-detail/complaint-detail.component.ts");
/* harmony import */ var src_app_installation_installation_add_installation_add_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/installation/installation-add/installation-add.component */ "./src/app/installation/installation-add/installation-add.component.ts");





// import { ComplaintAddComponent } from '../complaint-add/complaint-add.component';










var serviceRoutes = [
    { path: "", children: [
            { path: "", component: _complaint_list_complaint_list_component__WEBPACK_IMPORTED_MODULE_3__["ComplaintListComponent"], canActivate: [src_app_auth_component_guard__WEBPACK_IMPORTED_MODULE_4__["AuthComponentGuard"]], data: { expectedRole: ['1'] } },
            { path: 'add-complaint/:type', component: src_app_installation_installation_add_installation_add_component__WEBPACK_IMPORTED_MODULE_14__["InstallationAddComponent"], canActivate: [src_app_auth_component_guard__WEBPACK_IMPORTED_MODULE_4__["AuthComponentGuard"]], data: { expectedRole: ['1'] } },
            { path: "complaint-detail/:id", children: [
                    { path: "", component: _complaint_detail_complaint_detail_component__WEBPACK_IMPORTED_MODULE_13__["ComplaintDetailComponent"], canActivate: [src_app_auth_component_guard__WEBPACK_IMPORTED_MODULE_4__["AuthComponentGuard"]], data: { expectedRole: ['1'] } },
                    { path: 'add-complaint/:type/:id', component: src_app_installation_installation_add_installation_add_component__WEBPACK_IMPORTED_MODULE_14__["InstallationAddComponent"], canActivate: [src_app_auth_component_guard__WEBPACK_IMPORTED_MODULE_4__["AuthComponentGuard"]], data: { expectedRole: ['1'] } }
                ] }
        ] },
];
var ServiceModuleModule = /** @class */ (function () {
    function ServiceModuleModule() {
    }
    ServiceModuleModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_complaint_list_complaint_list_component__WEBPACK_IMPORTED_MODULE_3__["ComplaintListComponent"], _complaint_detail_complaint_detail_component__WEBPACK_IMPORTED_MODULE_13__["ComplaintDetailComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild(serviceRoutes),
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
                ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_7__["NgMultiSelectDropDownModule"],
                src_app_material__WEBPACK_IMPORTED_MODULE_8__["MaterialModule"],
                angular_ng_autocomplete__WEBPACK_IMPORTED_MODULE_9__["AutocompleteLibModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_10__["MatDialogModule"],
                ngx_mat_select_search__WEBPACK_IMPORTED_MODULE_11__["NgxMatSelectSearchModule"],
                src_app_app_utility_module__WEBPACK_IMPORTED_MODULE_12__["AppUtilityModule"]
            ]
        })
    ], ServiceModuleModule);
    return ServiceModuleModule;
}());



/***/ })

}]);