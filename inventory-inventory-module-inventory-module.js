(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["inventory-inventory-module-inventory-module"],{

/***/ "./src/app/inventory/inventory-list/inventory-list.component.html":
/*!************************************************************************!*\
  !*** ./src/app/inventory/inventory-list/inventory-list.component.html ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-container\">\r\n  <div class=\"tools-container\">\r\n    <h2>Inventory List</h2>\r\n    <div class=\"left-auto left-auto df ac flex-gap-10\">\r\n      <button mat-icon-button matTooltip=\"Refresh\" (click)=\"refresh()\">\r\n        <i class=\"material-icons\">refresh</i>\r\n      </button>\r\n\r\n      <button mat-raised-button color=\"primary\" (click)=\"upload_inventory_csv()\">\r\n        <i class=\"material-icons\">cloud_upload</i> Bulk Upload\r\n      </button>\r\n\r\n      <div class=\"pagination\" *ngIf=\"Inventory_List.length > 0\">\r\n        <div class=\"pagination-content\">\r\n          Pages\r\n          <span>{{pagenumber}}</span>\r\n          of\r\n          <span>{{total_page}}</span>\r\n        </div>\r\n        <div class=\"page-nav\">\r\n\r\n          <button mat-icon-button matTooltip=\"Older\" (click)=\"pervious()\" [disabled]=\"start == 0\">\r\n            <i class=\"material-icons\">navigate_before</i>\r\n          </button>\r\n          <button mat-icon-button matTooltip=\"Newer\" (click)=\"nextPage()\" [disabled]=\"pagenumber == total_page \">\r\n            <i class=\"material-icons\">navigate_next</i>\r\n          </button>\r\n        </div>\r\n      </div>\r\n\r\n\r\n\r\n      <div class=\"mat-tabbar\">\r\n        <ng-container>\r\n          <button mat-button [ngClass]=\"inventory_type == 'Add Inventory' ? 'active' : ''\"\r\n            (click)=\"inventory_type = 'Add Inventory';InventoryList()\"><i class=\"material-icons\">shopping_cart</i>Add\r\n            Inventory</button>\r\n        </ng-container>\r\n        <button mat-button [ngClass]=\"inventory_type == 'Remove Inventory' ? 'active' : ''\"\r\n          (click)=\"inventory_type = 'Remove Inventory';InventoryList()\"><i\r\n            class=\"material-icons\">shopping_cart</i>Remove Inventory</button>\r\n\r\n      </div>\r\n\r\n\r\n\r\n    </div>\r\n  </div>\r\n  <div class=\"tools-container\" *ngIf=\"login_data5.edit_gift_inventory=='1'\">\r\n    <div class=\"left-auto left-auto df ac flex-gap-10\">\r\n      <div class=\"mat-tabbar\">\r\n        <button mat-button [ngClass]=\"active_tab == 'Pending' ? 'active' : ''\"\r\n          (click)=\"active_tab = 'Pending';InventoryList()\"><i class=\"material-icons\">pending_actions</i>Pending</button>\r\n        <button mat-button [ngClass]=\"active_tab == 'Approved' ? 'active' : ''\"\r\n          (click)=\"active_tab = 'Approved';InventoryList()\"><i class=\"material-icons\">task_alt</i>Approved</button>\r\n        <button mat-button [ngClass]=\"active_tab == 'Reject' ? 'active' : ''\"\r\n          (click)=\"active_tab = 'Reject';InventoryList()\"><i class=\"material-icons\">cancel</i>Rejected</button>\r\n      </div>\r\n    </div>\r\n\r\n  </div>\r\n\r\n  <div class=\"container container-scroll pb100\">\r\n    <div class=\"cs-table horizontal-scroll\">\r\n      <div class=\"sticky-head\">\r\n        <div class=\"table-head\">\r\n          <table>\r\n            <tr>\r\n              <th class=\"w60\">Sr.No</th>\r\n              <th class=\"w90\"> Date Created</th>\r\n\r\n              <th class=\"w90\"> Inventory Date</th>\r\n              <th class=\"w100\">Document No</th>\r\n\r\n              <!-- <th class=\"w100\">Inventory Type</th> -->\r\n              <th class=\"w100\">Warehouse</th>\r\n\r\n              <th class=\"w200\">Dealer Name</th>\r\n              <th class=\"w130\">Account Code</th>\r\n\r\n              <th class=\"w100\"> Mobile No.</th>\r\n              <!-- <th class=\"w100\">Country</th> -->\r\n              <th class=\"w130\">State</th>\r\n              <th class=\"w130\">District</th>\r\n              <!-- <th class=\"w180\">Brand/Size</th>\r\n              <th class=\"w110\">Category</th>\r\n              <th class=\"w280\">Product Name</th>\r\n              <th class=\"w130\">Product Code</th>\r\n              <th class=\"w100\">Thickness</th> -->\r\n              <th class=\"w100\">Status</th>\r\n              <th class=\"w80 text-center\">Qty</th>\r\n              <th class=\"w200\">Remark</th>\r\n              <th class=\"w100 text-center\" *ngIf=\"active_tab == 'Approved' || active_tab == 'Reject'\">Status Updated By\r\n              </th>\r\n              <th class=\"w100 text-center\" *ngIf=\"active_tab == 'Approved' || active_tab == 'Reject'\">Status Updated\r\n                Date</th>\r\n              <!-- <th class=\"w100 text-center\" *ngIf=\"active_tab == 'Approved'\">Action</th> -->\r\n\r\n\r\n\r\n            </tr>\r\n          </table>\r\n        </div>\r\n\r\n        <div class=\"table-head border-top\">\r\n          <table>\r\n            <tr>\r\n              <th class=\"w60\">&nbsp;</th>\r\n              <th class=\"w90\">\r\n                <div class=\"th-search-acmt\">\r\n                  <mat-form-field class=\"cs-input date-column infix-bodr\">\r\n                    <input matInput [matDatepicker]=\"picker2\" placeholder=\"Date\" name=\"date_created\"\r\n                      (dateChange)=\"onDate($event)\" [(ngModel)]=\"filter.date_created\" [max]=\"today_date\" disabled>\r\n                    <mat-datepicker-toggle matSuffix [for]=\"picker2\"></mat-datepicker-toggle>\r\n                    <mat-datepicker #picker2 disabled=\"false\"></mat-datepicker>\r\n                  </mat-form-field>\r\n                </div>\r\n              </th>\r\n              <th class=\"w90\">\r\n                <div class=\"th-search-acmt\">\r\n                  <mat-form-field class=\"cs-input date-column infix-bodr\">\r\n                    <input matInput [matDatepicker]=\"picker\" placeholder=\"Date\" name=\"inventory_date\"\r\n                      (dateChange)=\"onDate($event)\" [(ngModel)]=\"filter.inventory_date\" [max]=\"today_date\" disabled>\r\n                    <mat-datepicker-toggle matSuffix [for]=\"picker\"></mat-datepicker-toggle>\r\n                    <mat-datepicker #picker disabled=\"false\"></mat-datepicker>\r\n                  </mat-form-field>\r\n                </div>\r\n              </th>\r\n              <th class=\"w100\">\r\n                <div class=\"th-search-acmt\">\r\n                  <mat-form-field>\r\n                    <input type=\"text\" matInput placeholder=\"Search ...\" name=\"document_no\"\r\n                      (keyup.enter)=\"InventoryList()\" #document_no=\"ngModel\" [(ngModel)]=\"filter.document_no\">\r\n                  </mat-form-field>\r\n                </div>\r\n              </th>\r\n\r\n              <!-- <th class=\"w100\">\r\n                <div class=\"th-search-acmt\">\r\n                  <mat-form-field class=\"cs-input select-input\">\r\n                    <mat-select name=\"inventory_type\" #inventory_type=\"ngModel\"  [(ngModel)]=\"filter.inventory_type\" (selectionChange)=\"InventoryList()\">\r\n\r\n                      <mat-option  value=\"Add Inventory\">Add Inventory</mat-option>\r\n                      <mat-option  value=\"Remove Inventory\">Remove Inventory</mat-option>\r\n\r\n                    </mat-select>\r\n                  </mat-form-field>\r\n                </div>\r\n              </th> -->\r\n\r\n              <th class=\"w100\">\r\n                <div class=\"th-search-acmt\">\r\n                  <mat-form-field class=\"cs-input select-input\">\r\n                    <mat-select name=\"warehouse_type\" #warehouse_type=\"ngModel\" [(ngModel)]=\"filter.warehouse_type\"\r\n                      multiple (selectionChange)=\"InventoryList()\">\r\n\r\n                      <mat-option value=\"Ply Expert\">Ply Expert</mat-option>\r\n                      <mat-option value=\"Ambassador\"> Ambassador</mat-option>\r\n                      <mat-option value=\"Fabricator\">Fabricator</mat-option>\r\n                      <!-- <mat-option  value=\"Opening Inventory\">Opening Inventory</mat-option> -->\r\n\r\n                    </mat-select>\r\n                  </mat-form-field>\r\n                </div>\r\n              </th>\r\n              <th class=\"w200\">\r\n                <div class=\"th-search-acmt\">\r\n                  <mat-form-field class=\"example-full-width cs-input select-input\">\r\n                    <input matInput placeholder=\"Search...\" type=\"text\" name=\"created_by\"\r\n                      [(ngModel)]=\"filter.company_name\" (keyup.enter)=\"InventoryList()\">\r\n                  </mat-form-field>\r\n                </div>\r\n              </th>\r\n              <th class=\"w130\">\r\n                <div class=\"th-search-acmt\">\r\n                  <mat-form-field class=\"example-full-width cs-input select-input\">\r\n                    <input matInput placeholder=\"Search...\" type=\"text\" name=\"dr_code\" [(ngModel)]=\"filter.dr_code\"\r\n                      (keyup.enter)=\"InventoryList()\">\r\n                  </mat-form-field>\r\n                </div>\r\n              </th>\r\n              <th class=\"w100\">\r\n                <div class=\"th-search-acmt\">\r\n                  <mat-form-field class=\"example-full-width cs-input select-input\">\r\n                    <input matInput placeholder=\"Search...\" type=\"text\" name=\"dealer_mobile\"\r\n                      [(ngModel)]=\"filter.dealer_mobile\" (keyup.enter)=\"InventoryList()\">\r\n                  </mat-form-field>\r\n                </div>\r\n              </th>\r\n              <!-- <th class=\"w100\">\r\n                <div class=\"th-search-acmt\">\r\n                  <mat-form-field class=\"cs-input select-input\">\r\n                    <mat-select name=\"country\" [(ngModel)]=\"filter.country\" (selectionChange)=\"InventoryList()\">\r\n                      <mat-option value=\"india\">India</mat-option>\r\n                      <mat-option value=\"nepal\">Nepal</mat-option>\r\n                    </mat-select>\r\n                  </mat-form-field>\r\n                </div>\r\n              </th> -->\r\n              <th class=\"w130\">\r\n                <div class=\"th-search-acmt\">\r\n                  <mat-form-field class=\"cs-input select-input\">\r\n                    <mat-select name=\"state\" [(ngModel)]=\"filter.state\" (selectionChange)=\"InventoryList()\">\r\n                      <mat-option *ngFor=\"let state of states\"\r\n                        value=\"{{state.state_name}}\">{{state.state_name}}</mat-option>\r\n                    </mat-select>\r\n                  </mat-form-field>\r\n                </div>\r\n              </th>\r\n              <th class=\"w130\">\r\n                <div class=\"th-search-acmt\">\r\n                  <mat-form-field class=\"example-full-width cs-input select-input\">\r\n                    <input matInput placeholder=\"Search...\" type=\"text\" name=\"created_by\" [(ngModel)]=\"filter.district\"\r\n                      (keyup.enter)=\"InventoryList()\">\r\n                  </mat-form-field>\r\n                </div>\r\n              </th>\r\n              <th class=\"w100\">\r\n                <div class=\"th-search-acmt\">\r\n                  <mat-form-field class=\"cs-input select-input\">\r\n                    <mat-select name=\"status\" [(ngModel)]=\"filter.status\" (selectionChange)=\"InventoryList()\">\r\n                      <mat-option value=\"\">All</mat-option>\r\n                      <mat-option value=\"Pending\">Pending</mat-option>\r\n                      <mat-option value=\"Approved\">Approved</mat-option>\r\n                      <mat-option value=\"Reject\">Reject</mat-option>\r\n                    </mat-select>\r\n                  </mat-form-field>\r\n                </div>\r\n              </th>\r\n              <!-- <th class=\"w180\">\r\n                <div class=\"th-search-acmt\">\r\n                  <mat-form-field>\r\n                    <input type=\"text\" matInput placeholder=\"Search ...\" name=\"brand\" (keyup.enter)=\"InventoryList()\"\r\n                      #brand=\"ngModel\" [(ngModel)]=\"filter.brand\">\r\n                  </mat-form-field>\r\n                </div>\r\n              </th>\r\n\r\n              <th class=\"w110\">\r\n                <div class=\"th-search-acmt\">\r\n                  <mat-form-field class=\"cs-input select-input\">\r\n                    <mat-select (selectionChange)=\"InventoryList(); \" name=\"segment\"\r\n                      #segment=\"ngModel\" [(ngModel)]=\"filter.segment\">\r\n                      <mat-option value=\"\" disabled style=\"padding: 10px 20px;\">Select</mat-option>\r\n                      <mat-option *ngFor=\"let row of segmentList\" value=\"{{row.category}}\">{{row.category}}</mat-option>\r\n                    </mat-select>\r\n                  </mat-form-field>\r\n                </div>\r\n              </th>\r\n\r\n\r\n              <th class=\"w280\">\r\n                <div class=\"th-search-acmt\">\r\n                  <mat-form-field>\r\n                    <input type=\"text\" matInput placeholder=\"Search ...\" name=\"product_name\"\r\n                      (keyup.enter)=\"InventoryList()\" #product_name=\"ngModel\" [(ngModel)]=\"filter.product_name\">\r\n                  </mat-form-field>\r\n                </div>\r\n              </th>\r\n              <th class=\"w130\">\r\n                <div class=\"th-search-acmt\">\r\n                  <mat-form-field>\r\n                    <input type=\"text\" matInput placeholder=\"Search ...\" name=\"prod_code\"\r\n                      (keyup.enter)=\"InventoryList()\" #prod_code=\"ngModel\" [(ngModel)]=\"filter.prod_code\">\r\n                  </mat-form-field>\r\n                </div>\r\n              </th>\r\n\r\n              <th class=\"w100\">\r\n                <div class=\"th-search-acmt\">\r\n                  <mat-form-field>\r\n                    <input type=\"text\" matInput placeholder=\"Search ...\" name=\"thickness\"\r\n                      (keyup.enter)=\"InventoryList()\" #thickness=\"ngModel\" [(ngModel)]=\"filter.thickness\">\r\n                  </mat-form-field>\r\n                </div>\r\n              </th> -->\r\n\r\n              <th class=\"w80\">\r\n                <div class=\"th-search-acmt\">\r\n                  <mat-form-field>\r\n                    <input type=\"text\" matInput placeholder=\"Search ...\" name=\"qty\" (keyup.enter)=\"InventoryList()\"\r\n                      #qty=\"ngModel\" [(ngModel)]=\"filter.qty\">\r\n                  </mat-form-field>\r\n                </div>\r\n              </th>\r\n\r\n              <th class=\"w200\">&nbsp;</th>\r\n              <th class=\"w100\" *ngIf=\"active_tab == 'Approved' || active_tab == 'Reject'\">\r\n                <div class=\"th-search-acmt\">\r\n                  <mat-form-field>\r\n                    <input type=\"text\" matInput placeholder=\"Search ...\" name=\"status_updated_by\"\r\n                      (keyup.enter)=\"InventoryList()\" #status_updated_by=\"ngModel\"\r\n                      [(ngModel)]=\"filter.status_updated_by\">\r\n                  </mat-form-field>\r\n                </div>\r\n              </th>\r\n              <th class=\"w100\" *ngIf=\"active_tab == 'Approved' || active_tab == 'Reject'\">\r\n                <div class=\"th-search-acmt\">\r\n                  <mat-form-field class=\"cs-input date-column infix-bodr\">\r\n                    <input matInput [matDatepicker]=\"picker3\" placeholder=\"Date\" name=\"status_updated_date\"\r\n                      (dateChange)=\"onDate($event)\" [(ngModel)]=\"filter.status_updated_date\" [max]=\"today_date\"\r\n                      disabled>\r\n                    <mat-datepicker-toggle matSuffix [for]=\"picker3\"></mat-datepicker-toggle>\r\n                    <mat-datepicker #picker3 disabled=\"false\"></mat-datepicker>\r\n                  </mat-form-field>\r\n                </div>\r\n              </th>\r\n              <!-- <th class=\"w100 text-center\" *ngIf=\"active_tab == 'Approved'\">&nbsp;</th> -->\r\n\r\n            </tr>\r\n          </table>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"table-container\">\r\n        <div class=\"table-content\">\r\n          <table>\r\n            <ng-container *ngIf=\"!loader\">\r\n              <tr *ngFor=\"let row of Inventory_List; let i = index;\"\r\n                [ngClass]=\"{'Current': service.currentUserID == row.id}\">\r\n                <td class=\"w60\">{{i+1}}</td>\r\n                <td class=\"w90\">{{row.date_created | date :'dd MMM yyyy'}}</td>\r\n\r\n                <td class=\"w90\">{{row.inventory_date | date :'dd MMM yyyy'}}</td>\r\n                <td class=\"w100\">\r\n                  <a class=\"link-btn\" (click)=\"service.setData(filter)\" routerLink=\"inventory-detail/{{row.main_id }}\"\r\n                    [queryParams]=\"{'document_no':row.main_id, 'inventory_type':inventory_type}\"\r\n                    routerLinkActive=\"active\">{{row.document_no && row.document_no!=''? row.document_no:'--'}}</a>\r\n                </td>\r\n\r\n                <!-- <td class=\"w100\">{{row.inventory_type}}</td> -->\r\n                <td class=\"w100\">{{row.warehouse_type}}</td>\r\n\r\n                <td class=\"w200\">\r\n                  <a class=\"link-btn\" mat-button (click)=\"service.setData(filter)\"\r\n                    [routerLink]=\"[ 'distribution-detail/', row.dealer_id,'Profile' ]\"\r\n                    [queryParams]=\"{'state':row.state, 'id':row.dealer_id, 'type':row.type, 'user_type':type}\">{{row.company_name|\r\n                    titlecase}},{{row.dealer_name| titlecase}}</a>\r\n                </td>\r\n                <td class=\"w130\">{{row.dr_code && row.dr_code!=''? row.dr_code:'--'}}</td>\r\n\r\n                <td class=\"w100\">{{row.dealer_mobile}}</td>\r\n                <!-- <td class=\"w100\">{{row.country}}</td> -->\r\n                <td class=\"w130\">{{row.state}}</td>\r\n                <td class=\"w130\">{{row.district}}</td>\r\n                <!-- <td class=\"w180\">{{row.brand ? row.brand : '---'}} -{{row.size && row.size!=''? row.size:'--'}}</td>\r\n                <td class=\"w110\">{{row.segment_name && row.segment_name!=''? row.segment_name:'--'}}</td>\r\n                <td class=\"w280\">{{row.product_name}}</td>\r\n                <td class=\"w130\">{{row.product_code && row.product_code!=''? row.product_code:'--'}}</td>\r\n\r\n                <td class=\"w100\">{{row.thickness && row.thickness!=''? row.thickness:'--'}}</td> -->\r\n                <td class=\"w100\">\r\n                  <strong *ngIf=\"row.status != 'Pending' && row.status != 'Reject'\"\r\n                    class=\"{{row.status == 'Approved' ? 'Approved' : 'Reject'}}\">{{row.status ? row.status :\r\n                    '--'}}</strong>\r\n                  <a *ngIf=\"(row.status == 'Pending' || row.status == 'Reject') &&  login_data5.edit_Inventory_Authority==1\"\r\n                    class=\"link-btn cursor-pointer\" (click)=\"openStatusDialog(row)\">\r\n                    <strong class=\"{{row.status == 'Pending' ? 'Pending' : 'Reject'}}\">{{row.status}} <i\r\n                        class=\"material-icons\" style=\"font-size: 14px; vertical-align: middle;\">edit</i></strong>\r\n                  </a>\r\n                </td>\r\n                <td class=\"w80 text-center\"><strong>{{row.total_quantity && row.total_quantity!=''?\r\n                    row.total_quantity:'--'}}</strong></td>\r\n                <td class=\"w200\">{{row.inventory_remark && row.inventory_remark != '' ? row.inventory_remark : '--'}}</td>\r\n                <td class=\"w100 text-center\" *ngIf=\"active_tab == 'Approved' || active_tab == 'Reject'\">\r\n                  {{row.status_updated_by}}</td>\r\n                <td class=\"w100 text-center\" *ngIf=\"active_tab == 'Approved' || active_tab == 'Reject'\">\r\n                  {{row.status_updated_on | date :'dd MMM yyyy'}}</td>\r\n                <!-- <td class=\"w100 text-center\" *ngIf=\"active_tab == 'Approved'\">\r\n                  <a class=\"link-btn cursor-pointer Reject\" (click)=\"removeInventory(row)\" matTooltip=\"Remove Inventory\">\r\n                    <i class=\"material-icons\" style=\"font-size: 16px; vertical-align: middle;\">remove</i>\r\n                    <strong>Remove</strong>\r\n                  </a>\r\n                </td> -->\r\n\r\n\r\n              </tr>\r\n            </ng-container>\r\n            <ng-container *ngIf=\"loader\">\r\n              <tr class=\"sk-loading\" *ngFor=\"let row of [].constructor(10)\">\r\n                <td class=\"w60\">\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n                <td class=\"w90\">\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n                <td class=\"w90\">\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n                <td class=\"w100\">\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n                <!-- <td class=\"w100\">\r\n                  <div>&nbsp;</div>\r\n                </td> -->\r\n\r\n                <td class=\"w100\">\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n                <!-- <td class=\"w130\"><div>&nbsp;</div></td> -->\r\n                <td class=\"w200\">\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n                <td class=\"w130\">\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n                <td class=\"w100\">\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n                <!-- <td class=\"w100\">\r\n                  <div>&nbsp;</div>\r\n                </td> -->\r\n                <td class=\"w130\">\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n                <td class=\"w130\">\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n\r\n                <!-- <td class=\"w110\">\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n                <td class=\"w280\">\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n                <td class=\"w130\">\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n                <td class=\"w120\">\r\n                  <div>&nbsp;</div>\r\n                </td> -->\r\n                <!-- <td class=\"w100\">\r\n                  <div>&nbsp;</div>\r\n                </td> -->\r\n                <td class=\"w100\">\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n                <td class=\"w80\">\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n                <td class=\"w200\">\r\n                  <div>&nbsp;</div>\r\n                </td>\r\n                <!-- <td class=\"w100\" *ngIf=\"active_tab == 'Approved'\">\r\n                  <div>&nbsp;</div>\r\n                </td> -->\r\n\r\n\r\n              </tr>\r\n            </ng-container>\r\n          </table>\r\n        </div>\r\n        <ng-container *ngIf=\"Inventory_List.length == 0 && datanotfound == true\">\r\n          <app-not-result-found></app-not-result-found>\r\n        </ng-container>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n\r\n\r\n  <div class=\"fab-btns\" *ngIf=\"login_data5.export_gift_inventory=='1' || login_data5.add_gift_inventory=='1'\">\r\n    <button class=\"excel pulse\" mat-fab color=\"primary\" [matMenuTriggerFor]=\"menu\">\r\n      <i class=\"material-icons\">apps</i>\r\n      Action\r\n    </button>\r\n    <!-- </div> -->\r\n    <mat-menu #menu=\"matMenu\">\r\n      <button mat-menu-item (click)=\"downloadExcel();\"\r\n        *ngIf=\"Inventory_List.length > 0 && login_data5.export_gift_inventory=='1'\">\r\n        <mat-icon>download</mat-icon>\r\n        <span>Download in excel</span>\r\n      </button>\r\n      <button mat-menu-item [routerLink]=\"[ 'add-inventory/']\" [queryParams]=\"{'type':type, 'network':network}\"\r\n        *ngIf=\"login_data5.add_gift_inventory=='1'\">\r\n        <mat-icon>add</mat-icon>\r\n        <span>Adjust</span>\r\n      </button>\r\n    </mat-menu>\r\n  </div>\r\n</div>\r\n\r\n<ng-template #statusDialog>\r\n  <div class=\"edit-modal\">\r\n    <form validate #update_basic=\"ngForm\" name=\"update_basic\"\r\n      (ngSubmit)=\"(update_basic.valid && update_basic.submitted)?changeStatus():''\">\r\n      <p class=\"heading\">Update Status</p>\r\n      <div mat-dialog-content>\r\n        <div class=\"cs-form\">\r\n          <div class=\"row\">\r\n            <div class=\"col s12\">\r\n              <mat-form-field class=\"cs-input\" appearance=\"outline\">\r\n                <mat-label>Status</mat-label>\r\n                <mat-select name=\"status\" placeholder=\"Select Status\" #status=\"ngModel\" [(ngModel)]=\"statusModel.status\"\r\n                  required>\r\n                  <mat-option value=\"Approved\">Approved</mat-option>\r\n                  <mat-option value=\"Reject\">Reject</mat-option>\r\n                </mat-select>\r\n              </mat-form-field>\r\n              <div class=\"alert alert-danger\" *ngIf=\"status.touched || update_basic.submitted\">\r\n                <p *ngIf=\"status.errors?.required\">This field is required</p>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"row\" *ngIf=\"statusModel.status == 'Reject'\">\r\n            <div class=\"col s12\">\r\n              <mat-form-field class=\"cs-input\" appearance=\"outline\">\r\n                <mat-label>Reason</mat-label>\r\n                <textarea class=\"h100\" matInput name=\"reason\" placeholder=\"Reason\" #reason=\"ngModel\"\r\n                  [(ngModel)]=\"statusModel.reason\" [ngClass]=\"{'has-error' : reason.invalid }\" required></textarea>\r\n              </mat-form-field>\r\n              <div class=\"alert alert-danger\" *ngIf=\"!reason.valid && update_basic.submitted\">\r\n                Reason is required\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <div mat-dialog-actions>\r\n        <button mat-button color=\"warn\" mat-dialog-close type=\"button\">Cancel</button>\r\n        <button mat-button color=\"accent\" type=\"submit\" [disabled]=\"savingFlag\" [ngClass]=\"{'loading': savingFlag}\">\r\n          {{savingFlag ? 'Saving' : 'Save'}}\r\n        </button>\r\n      </div>\r\n    </form>\r\n  </div>\r\n</ng-template>"

/***/ }),

/***/ "./src/app/inventory/inventory-list/inventory-list.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/inventory/inventory-list/inventory-list.component.scss ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/inventory/inventory-list/inventory-list.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/inventory/inventory-list/inventory-list.component.ts ***!
  \**********************************************************************/
/*! exports provided: InventoryListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InventoryListComponent", function() { return InventoryListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! moment */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng6-toastr-notifications */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/ng6-toastr-notifications/fesm5/ng6-toastr-notifications.js");
/* harmony import */ var src_services_DatabaseService__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/_services/DatabaseService */ "./src/_services/DatabaseService.ts");
/* harmony import */ var src_app_bottom_sheet_bottom_sheet_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/bottom-sheet/bottom-sheet.component */ "./src/app/bottom-sheet/bottom-sheet.component.ts");
/* harmony import */ var src_app_dialog_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/dialog.component */ "./src/app/dialog.component.ts");
/* harmony import */ var src_app_localstorage_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/localstorage.service */ "./src/app/localstorage.service.ts");
/* harmony import */ var src_app_order_status_modal_status_modal_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/order/status-modal/status-modal.component */ "./src/app/order/status-modal/status-modal.component.ts");
/* harmony import */ var src_app_upload_file_modal_upload_file_modal_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/upload-file-modal/upload-file-modal.component */ "./src/app/upload-file-modal/upload-file-modal.component.ts");












var InventoryListComponent = /** @class */ (function () {
    function InventoryListComponent(alert, ActivatedRoute, toast, service, route, dialog, session, bottomSheet) {
        this.alert = alert;
        this.ActivatedRoute = ActivatedRoute;
        this.toast = toast;
        this.service = service;
        this.route = route;
        this.dialog = dialog;
        this.session = session;
        this.bottomSheet = bottomSheet;
        this.filter = {};
        this.type = '';
        this.active_tab = 'Pending';
        this.network = '';
        this.Inventory_List = [];
        this.loader = false;
        this.datanotfound = false;
        this.start = 0;
        this.pagenumber = 1;
        this.sr_no = 0;
        this.sorting_type = '';
        this.login_data = {};
        this.login_data5 = {};
        this.logined_user_data = {};
        this.assign_login_data = {};
        this.downurl = '';
        this.states = [];
        this.segmentList = [];
        this.SubcategoryList = [];
        this.inventory_type = 'Add Inventory';
        this.statusModel = {};
        this.savingFlag = false;
        this.checkRight = {};
        this.downurl = service.downloadUrl;
        this.page_limit = service.pageLimit;
        this.login_data = this.session.getSession();
        this.login_data = this.login_data.value;
        this.login_data5 = this.login_data.data;
        this.assign_login_data = this.session.getSession();
        this.logined_user_data = this.assign_login_data.value;
        this.today_date = new Date();
    }
    InventoryListComponent.prototype.ngOnInit = function () {
        this.filter = this.service.getData();
        this.InventoryList();
        this.getSegment();
        this.getStateList();
    };
    InventoryListComponent.prototype.getRights = function () {
        var _this = this;
        this.service.post_rqst({ 'type_id': this.type }, 'Inventory/scanningRightsCheck').subscribe(function (resp) {
            if (resp['statusCode'] == 200) {
                _this.checkRight = resp['result'];
            }
            else {
                _this.toast.errorToastr(resp['statusMsg']);
            }
            _this.InventoryList();
        });
    };
    InventoryListComponent.prototype.getStateList = function () {
        var _this = this;
        this.service.post_rqst(0, "Master/getAllState").subscribe((function (result) {
            if (result['statusCode'] == 200) {
                _this.states = result['all_state'];
            }
            else {
                _this.toast.errorToastr(result['statusMsg']);
            }
        }));
    };
    InventoryListComponent.prototype.date_format = function () {
        this.filter.date_created = moment__WEBPACK_IMPORTED_MODULE_4__(this.filter.date_created).format('YYYY-MM-DD');
        this.InventoryList();
    };
    InventoryListComponent.prototype.pervious = function () {
        this.start = this.start - this.page_limit;
        this.InventoryList();
    };
    InventoryListComponent.prototype.nextPage = function () {
        this.start = this.start + this.page_limit;
        this.InventoryList();
    };
    InventoryListComponent.prototype.InventoryList = function () {
        var _this = this;
        if (this.pagenumber > this.total_page) {
            this.pagenumber = this.total_page;
            this.start = this.pageCount - this.page_limit;
        }
        if (this.start < 0) {
            this.start = 0;
        }
        this.loader = true;
        this.filter.inventory_type = this.inventory_type;
        this.service.post_rqst({ 'filter': this.filter, 'start': this.start, 'pagelimit': this.page_limit, 'active_tab': this.active_tab }, 'Influencer/get_inventory_list').subscribe(function (resp) {
            if (resp['statusCode'] == 200) {
                _this.loader = false;
                _this.Inventory_List = resp['inventory_list'];
                _this.pageCount = resp['count'];
                _this.tab_count = resp['tab_count'];
                for (var i = 0; i < _this.Inventory_List.length; i++) {
                    if (_this.Inventory_List[i].login_status == 1) {
                        _this.Inventory_List[i].user_status = true;
                    }
                    else if (_this.Inventory_List[i].login_status == 0) {
                        _this.Inventory_List[i].user_status = false;
                    }
                }
                if (_this.Inventory_List.length == 0) {
                    _this.datanotfound = true;
                }
                else {
                    _this.datanotfound = false;
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
                setTimeout(function () {
                }, 700);
            }
            else {
                _this.loader = false;
                _this.toast.errorToastr(resp['statusMsg']);
            }
        });
    };
    InventoryListComponent.prototype.updateStatus = function (index, id, event) {
        var _this = this;
        if (event.checked == false) {
            this.alert.confirm("You Want To Change Status !").then(function (result) {
                if (result) {
                    if (event.checked == false) {
                        _this.Inventory_List[index].login_status = 0;
                    }
                    else {
                        _this.Inventory_List[index].login_status = 1;
                    }
                    var value = _this.Inventory_List[index].login_status;
                    _this.service.post_rqst({ 'id': id, 'login_status': value, 'status_changed_by_id': _this.logined_user_data.data.id, 'status_changed_by_name': _this.logined_user_data.data.name }, "Inventory/disableInventory")
                        .subscribe(function (resp) {
                        if (resp['statusCode'] == 200) {
                            _this.toast.successToastr(resp['statusMsg']);
                            _this.InventoryList();
                        }
                        else {
                            _this.toast.errorToastr(resp['statusMsg']);
                        }
                    });
                }
            });
        }
        else if (event.checked == true) {
            this.alert.confirm("You Want To Change Status !").then(function (result) {
                if (result) {
                    if (event.checked == false) {
                        _this.Inventory_List[index].login_status = 0;
                    }
                    else {
                        _this.Inventory_List[index].login_status = 1;
                    }
                    var value = _this.Inventory_List[index].login_status;
                    _this.service.post_rqst({ 'id': id, 'login_status': value, 'status_changed_by_id': _this.logined_user_data.data.id, 'status_changed_by_name': _this.logined_user_data.data.name }, "Inventory/disableInventory")
                        .subscribe(function (resp) {
                        if (resp['statusCode'] == 200) {
                            _this.toast.successToastr(resp['statusMsg']);
                            _this.InventoryList();
                        }
                        else {
                            _this.toast.errorToastr(resp['statusMsg']);
                        }
                    });
                }
            });
        }
    };
    InventoryListComponent.prototype.refresh = function () {
        this.filter = {};
        this.service.setData(this.filter);
        this.service.currentUserID = '';
        this.InventoryList();
    };
    InventoryListComponent.prototype.Addnew = function () {
        var network = this.network;
        var type = this.type;
        this.route.navigate(['/inventory-list/add-inventory'], { queryParams: { type: type, network: network } });
    };
    InventoryListComponent.prototype.downloadExcel = function () {
        var _this = this;
        this.loader = true;
        this.service.post_rqst({ 'filter': this.filter }, "Excel/get_inventory_list_for_excel").subscribe(function (result) {
            if (result['msg'] == true) {
                _this.loader = false;
                window.open(_this.downurl + result['filename']);
            }
            else {
                _this.loader = false;
            }
        }, function (err) {
            _this.loader = false;
        });
    };
    InventoryListComponent.prototype.onDate = function (event) {
        if (this.filter.inventory_date) {
            this.filter.inventory_date = moment__WEBPACK_IMPORTED_MODULE_4__(event.target.value).format('YYYY-MM-DD');
        }
        if (this.filter.date_created) {
            this.filter.date_created = moment__WEBPACK_IMPORTED_MODULE_4__(event.target.value).format('YYYY-MM-DD');
        }
        if (this.filter.status_updated_date) {
            this.filter.status_updated_date = moment__WEBPACK_IMPORTED_MODULE_4__(event.target.value).format('YYYY-MM-DD');
        }
        this.InventoryList();
    };
    InventoryListComponent.prototype.openBottomSheet = function () {
        var _this = this;
        this.bottomSheet.open(src_app_bottom_sheet_bottom_sheet_component__WEBPACK_IMPORTED_MODULE_7__["BottomSheetComponent"], {
            data: {
                'filterPage': 'distribution_list',
            }
        });
        this.bottomSheet._openedBottomSheetRef.afterDismissed().subscribe(function (data) {
            _this.filter.date_from = data.date_from;
            _this.filter.date_to = data.date_to;
            // this.search.userId = data.user_id;
            _this.InventoryList();
        });
    };
    InventoryListComponent.prototype.getSegment = function () {
        var _this = this;
        setTimeout(function () {
            _this.service.post_rqst({}, "Master/getProductCategoryList").subscribe((function (result) {
                if (result['category_list']['statusCode'] == 200) {
                    _this.segmentList = result['category_list']['segment_list'];
                }
            }));
        }, 2000);
    };
    InventoryListComponent.prototype.getSubCatgory = function () {
        var _this = this;
        setTimeout(function () {
            _this.service.post_rqst({ 'id': _this.filter.segment }, "Master/subCategoryList").subscribe((function (result) {
                if (result['statusCode'] == 200) {
                    _this.SubcategoryList = result['result'];
                }
            }));
        }, 2000);
    };
    InventoryListComponent.prototype.upload_inventory_csv = function () {
        var _this = this;
        var dialogRef = this.dialog.open(src_app_upload_file_modal_upload_file_modal_component__WEBPACK_IMPORTED_MODULE_11__["UploadFileModalComponent"], {
            width: '500px',
            data: {
                'from': 'influencer_inventory',
                'modal_type': 'insert'
            }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result) {
                _this.InventoryList();
            }
        });
    };
    InventoryListComponent.prototype.openStatusDialog = function (data) {
        var _this = this;
        var dialogRef = this.dialog.open(src_app_order_status_modal_status_modal_component__WEBPACK_IMPORTED_MODULE_10__["StatusModalComponent"], {
            width: '400px',
            panelClass: 'padding0',
            data: {
                'delivery_from': 'InventoryStatusChange',
                'data': data
            }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result != false) {
                _this.InventoryList();
            }
        });
    };
    InventoryListComponent.prototype.removeInventory = function (inventoryData) {
        var _this = this;
        this.alert.confirm("Delete Item From List?").then(function (result) {
            if (result) {
                _this.service.post_rqst({ 'inventoryData': inventoryData }, "Influencer/remove_inventory_single").subscribe((function (result) {
                    if (result['statusCode'] == 200) {
                        _this.toast.successToastr(result['statusMsg']);
                        _this.InventoryList();
                    }
                    else {
                        _this.toast.errorToastr(result['statusMsg']);
                    }
                }));
            }
        });
    };
    InventoryListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-inventory-list',
            template: __webpack_require__(/*! ./inventory-list.component.html */ "./src/app/inventory/inventory-list/inventory-list.component.html"),
            styles: [__webpack_require__(/*! ./inventory-list.component.scss */ "./src/app/inventory/inventory-list/inventory-list.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_dialog_component__WEBPACK_IMPORTED_MODULE_8__["DialogComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"], ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_5__["ToastrManager"], src_services_DatabaseService__WEBPACK_IMPORTED_MODULE_6__["DatabaseService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"], src_app_localstorage_service__WEBPACK_IMPORTED_MODULE_9__["sessionStorage"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatBottomSheet"]])
    ], InventoryListComponent);
    return InventoryListComponent;
}());



/***/ }),

/***/ "./src/app/inventory/inventory-module/inventory.module.ts":
/*!****************************************************************!*\
  !*** ./src/app/inventory/inventory-module/inventory.module.ts ***!
  \****************************************************************/
/*! exports provided: InventoryModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InventoryModule", function() { return InventoryModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-multiselect-dropdown */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/ng-multiselect-dropdown/fesm5/ng-multiselect-dropdown.js");
/* harmony import */ var angular_ng_autocomplete__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! angular-ng-autocomplete */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/angular-ng-autocomplete/fesm5/angular-ng-autocomplete.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var ngx_mat_select_search__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-mat-select-search */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/ngx-mat-select-search/fesm5/ngx-mat-select-search.js");
/* harmony import */ var src_app_auth_component_guard__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/auth-component.guard */ "./src/app/auth-component.guard.ts");
/* harmony import */ var src_app_material__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! src/app/material */ "./src/app/material.ts");
/* harmony import */ var src_app_app_utility_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/app-utility.module */ "./src/app/app-utility.module.ts");
/* harmony import */ var _inventory_list_inventory_list_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../inventory-list/inventory-list.component */ "./src/app/inventory/inventory-list/inventory-list.component.ts");
/* harmony import */ var src_app_addinventory_addinventory_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! src/app/addinventory/addinventory.component */ "./src/app/addinventory/addinventory.component.ts");
/* harmony import */ var src_app_distribution_distribution_detail_distribution_detail_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! src/app/distribution/distribution-detail/distribution-detail.component */ "./src/app/distribution/distribution-detail/distribution-detail.component.ts");
/* harmony import */ var _inventory_detail_inventory_detail_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../inventory-detail/inventory-detail.component */ "./src/app/inventory/inventory-detail/inventory-detail.component.ts");
















var inventoryRouters = [
    {
        path: "", children: [
            { path: "", component: _inventory_list_inventory_list_component__WEBPACK_IMPORTED_MODULE_12__["InventoryListComponent"], canActivate: [src_app_auth_component_guard__WEBPACK_IMPORTED_MODULE_9__["AuthComponentGuard"]], data: { expectedRole: ['1'] } },
            { path: "add-inventory", component: src_app_addinventory_addinventory_component__WEBPACK_IMPORTED_MODULE_13__["AddinventoryComponent"], canActivate: [src_app_auth_component_guard__WEBPACK_IMPORTED_MODULE_9__["AuthComponentGuard"]], data: { expectedRole: ['1'] } },
            {
                path: "inventory-detail/:document_no", children: [
                    { path: '', component: _inventory_detail_inventory_detail_component__WEBPACK_IMPORTED_MODULE_15__["InventoryDetailComponent"], canActivate: [src_app_auth_component_guard__WEBPACK_IMPORTED_MODULE_9__["AuthComponentGuard"]], data: { expectedRole: ['1', '2'] } },
                    { path: "add-inventory", component: src_app_addinventory_addinventory_component__WEBPACK_IMPORTED_MODULE_13__["AddinventoryComponent"], canActivate: [src_app_auth_component_guard__WEBPACK_IMPORTED_MODULE_9__["AuthComponentGuard"]], data: { expectedRole: ['1'] } },
                ]
            },
            {
                path: "distribution-detail/:id/:tabtype", children: [
                    { path: "", component: src_app_distribution_distribution_detail_distribution_detail_component__WEBPACK_IMPORTED_MODULE_14__["DistributionDetailComponent"], canActivate: [src_app_auth_component_guard__WEBPACK_IMPORTED_MODULE_9__["AuthComponentGuard"]], data: { expectedRole: ['1', '2'] } },
                ]
            },
        ]
    },
];
var InventoryModule = /** @class */ (function () {
    function InventoryModule() {
    }
    InventoryModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_inventory_list_inventory_list_component__WEBPACK_IMPORTED_MODULE_12__["InventoryListComponent"],
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(inventoryRouters),
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_5__["NgMultiSelectDropDownModule"],
                src_app_material__WEBPACK_IMPORTED_MODULE_10__["MaterialModule"],
                angular_ng_autocomplete__WEBPACK_IMPORTED_MODULE_6__["AutocompleteLibModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatDialogModule"],
                ngx_mat_select_search__WEBPACK_IMPORTED_MODULE_8__["NgxMatSelectSearchModule"],
                src_app_app_utility_module__WEBPACK_IMPORTED_MODULE_11__["AppUtilityModule"]
            ]
        })
    ], InventoryModule);
    return InventoryModule;
}());



/***/ })

}]);