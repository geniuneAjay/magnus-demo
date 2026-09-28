(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["company-dispatch-company-dispatch-company-dispatch-module"],{

/***/ "./src/app/company-dispatch/company-dispatch-detail/company-dispatch-detail.component.html":
/*!*************************************************************************************************!*\
  !*** ./src/app/company-dispatch/company-dispatch-detail/company-dispatch-detail.component.html ***!
  \*************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-container\">\r\n  <div class=\"tools-container\">\r\n    <a mat-icon-button matTooltip=\"Back\" routerLink=\"/company-dispatch\">\r\n      <i class=\"material-icons\">arrow_back</i>\r\n    </a>\r\n    <h2>Dispatch Details</h2>\r\n    <div class=\"left-auto\">\r\n\r\n      <!-- <ng-container *ngIf=\"invoice_detail.order_status == 'Dispatched' && logined_user_data.view_dispatch_billing== '1' && logined_user_data.add_dispatch_billing== '1'\">\r\n        <button class=\"mr16\" matTooltip=\"Generate Gate Pass\"  (click)=\"openDialog('add', '')\" mat-raised-button color=\"primary\">\r\n          <i class=\"material-icons mr5\">local_shipping</i>Generate Gate Pass\r\n        </button>\r\n      </ng-container> -->\r\n      <ng-container *ngIf=\"invoice_detail.order_status != 'Dispatched' && (dispatchQTY != dispatchInvoice)\">\r\n\r\n        <mat-form-field class=\"mr15 mt15\" appearance=\"outline\">\r\n          <mat-label>Select Master Box</mat-label>\r\n          <mat-select name=\"couponGrandMasterId\" [(ngModel)]=\"search.couponGrandMasterId\" #couponGrandMasterId=\"ngModel\"\r\n            (selectionChange)=\"updateGrandMasterCoupon()\" [disabled]=\"mainmasterboxDisable\">\r\n            <mat-option>\r\n              <ngx-mat-select-search noEntriesFoundLabel=\"'no data found'\" placeholderLabel=\"Search..\"\r\n                (keyup)=\"getmasterboxnew($event.target.value)\"></ngx-mat-select-search>\r\n            </mat-option>\r\n            <mat-option *ngFor=\"let row of masterBoxCoupon\" value=\"{{row.id}}\">{{row.coupon_code}}</mat-option>\r\n          </mat-select>\r\n        </mat-form-field>\r\n\r\n\r\n\r\n        <button class=\"mr16\" matTooltip=\"Add Master Boxes\"\r\n          (click)=\"addGrandmasterboxes(invoice_detail.order_no,invoice_detail.id,'add')\" mat-raised-button\r\n          color=\"primary\">\r\n          <i class=\"material-icons\">add</i>\r\n          Add Master Boxes\r\n        </button>\r\n      </ng-container>\r\n\r\n    </div>\r\n\r\n  </div>\r\n\r\n  <div class=\"container pt10 pl10 pr10 pb50\">\r\n\r\n    <div class=\"row\">\r\n      <div class=\"col s12 m6 l6\">\r\n        <div class=\"card\" *ngIf=\"!skLoading\">\r\n          <div class=\"card-head\">\r\n            <h2>Customer Details</h2>\r\n          </div>\r\n          <div class=\"card-body\">\r\n            <div class=\"grid-box\">\r\n              <div class=\"block-feilds\">\r\n                <span>Company Name</span>\r\n                <p>{{invoice_detail.company_name | titlecase}}</p>\r\n              </div>\r\n              <div class=\"block-feilds\">\r\n                <span>Account Code</span>\r\n                <p>{{invoice_detail.dr_code}}</p>\r\n              </div>\r\n\r\n              <div class=\"block-feilds\">\r\n                <span>Contact Person</span>\r\n                <p>{{invoice_detail.contact_person_name | titlecase}}</p>\r\n              </div>\r\n\r\n              <div class=\"block-feilds\">\r\n                <span>Contact Details</span>\r\n                <p>{{invoice_detail.mobile}}</p>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"grid-box single mt16\" *ngIf=\"invoice_detail.address\">\r\n              <div class=\"block-feilds\">\r\n                <span>Address</span>\r\n                <p>{{invoice_detail.address}}</p>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n\r\n\r\n\r\n        <div class=\"card\" *ngIf=\"skLoading\">\r\n          <div class=\"sk-head\">\r\n            <h2>&nbsp;</h2>\r\n          </div>\r\n          <div class=\"card-body\">\r\n            <div class=\"grid-box\">\r\n              <div class=\"sk-box\" *ngFor=\"let row of [].constructor(10)\">\r\n                &nbsp;\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n      </div>\r\n\r\n      <div class=\"col s12 m6 l6\">\r\n        <div class=\"card\" *ngIf=\"!skLoading\">\r\n          <div class=\"card-head\">\r\n            <h2>Order Details</h2>\r\n          </div>\r\n          <div class=\"card-body\">\r\n            <div class=\"grid-box\">\r\n              <div class=\"block-feilds\">\r\n                <span>Date</span>\r\n                <p>{{invoice_detail.date_created | date:'dd MMM yyyy'}}</p>\r\n              </div>\r\n\r\n              <div class=\"block-feilds\">\r\n                <span>Order Number</span>\r\n                <p>#{{invoice_detail.order_no}}</p>\r\n              </div>\r\n\r\n\r\n              <div class=\"block-feilds\">\r\n                <span>Total Item</span>\r\n                <p>{{invoice_detail.order_item}}</p>\r\n              </div>\r\n\r\n\r\n              <div class=\"block-feilds\">\r\n                <span>Total QTY.</span>\r\n                <p>{{invoice_detail.total_order_qty}}</p>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <ng-container *ngIf=\"!skLoading\">\r\n          <div class=\"card mt10\"\r\n            *ngIf=\"dispatch_detail.total_scanned_box > 0 || dispatch_detail.total_scanned_product > 0\">\r\n            <div class=\"card-head\">\r\n              <h2>Dispatch Item Details</h2>\r\n            </div>\r\n            <div class=\"card-body\">\r\n              <div class=\"grid-box three\">\r\n                <div class=\"block-feilds\">\r\n                  <span>Dispatch Date</span>\r\n                  <p>{{dispatch_detail.dispatch_date | date:'d MMM y'}}</p>\r\n                </div>\r\n                <div class=\"block-feilds\">\r\n                  <span>Box Coupon</span>\r\n                  <p>{{dispatch_detail.total_scanned_box}}</p>\r\n                </div>\r\n\r\n                <div class=\"block-feilds\">\r\n                  <span>Product Coupon</span>\r\n                  <p>{{dispatch_detail.total_scanned_product}}</p>\r\n                </div>\r\n              </div>\r\n\r\n\r\n              <div class=\"grid-box single mt10\" *ngIf=\"dispatch_detail.remark\">\r\n                <div class=\"block-feilds\">\r\n                  <span>Remark</span>\r\n                  <p>{{dispatch_detail.remark}}</p>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </ng-container>\r\n\r\n\r\n        <div class=\"card\" *ngIf=\"skLoading\">\r\n          <div class=\"sk-head\">\r\n            <h2>&nbsp;</h2>\r\n          </div>\r\n          <div class=\"card-body\">\r\n            <div class=\"grid-box\">\r\n              <div class=\"sk-box\" *ngFor=\"let row of [].constructor(10)\">\r\n                &nbsp;\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <ng-container>\r\n      <div class=\"row\">\r\n        <div class=\"col s6\">\r\n          <div class=\"card pb0\" *ngIf=\"invoice_detail.order_status != 'Dispatched'\">\r\n            <div class=\"card-body cs-form\">\r\n              <div class=\"value\" *ngIf=\"dispatchQTY > 0\">\r\n                {{dispatchQTY}}/{{dispatchInvoice}}\r\n              </div>\r\n              <div class=\"row\">\r\n                <h2 style=\"padding: 10px;text-align: center;font-size: 20px;\" *ngIf=\"!masterboxData.length\">Please Add\r\n                  Master Boxes First..</h2>\r\n                <div class=\"col s12 m6 l3\" *ngIf=\"masterboxData.length\">\r\n                  <mat-form-field appearance=\"outline\">\r\n                    <mat-label>Grand Master Box</mat-label>\r\n                    <!-- (ngModelChange)=\"setcouponnoFocused()\" -->\r\n                    <mat-select name=\"couponGrandMasterId\" [(ngModel)]=\"couponNumber.couponGrandMasterId\"\r\n                      #couponGrandMasterId=\"ngModel\">\r\n                      <mat-option>\r\n                        <ngx-mat-select-search noEntriesFoundLabel=\"'no data found'\" placeholderLabel=\"Search..\"\r\n                          (keyup)=\"getmasterbox($event.target.value,invoice_detail.order_no)\"></ngx-mat-select-search>\r\n                      </mat-option>\r\n                      <mat-option *ngFor=\"let row of masterboxData\" value=\"{{row.id}}\">{{row.coupon_code}}</mat-option>\r\n                    </mat-select>\r\n                  </mat-form-field>\r\n                </div>\r\n                <!--  -->\r\n                <div class=\"col s12 m6 l5\" *ngIf=\"couponNumber.couponGrandMasterId\">\r\n                  <mat-form-field appearance=\"outline\">\r\n                    <mat-label>Coupon Number</mat-label>\r\n                    <input matInput placeholder=\"Type Here ...\" name=\"coupon_number\" #coupon_number=\"ngModel\"\r\n                      [(ngModel)]=\"couponNumber.coupon_number\" minlength=\"16\" maxlength=\"16\" #focusInput min=\"0\"\r\n                      (ngModelChange)=\"checkCoupon(couponNumber.coupon_number,couponNumber.couponGrandMasterId)\">\r\n                  </mat-form-field>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n\r\n          <div class=\"card mt16 pb0\" *ngIf=\"temCoupon.length > 0\">\r\n            <div class=\"card-head\">\r\n              <h2>Scan Coupon</h2>\r\n            </div>\r\n            <div class=\"card-body\">\r\n              <div class=\"row mb0\">\r\n                <div class=\"cs-table font-lg border-top\">\r\n                  <div class=\"table-head border-bottom\">\r\n                    <table>\r\n                      <tr>\r\n                        <th class=\"w50\">S.no.</th>\r\n                        <th class=\"w150\">Coupon Code</th>\r\n                        <th>Product Detail</th>\r\n                        <th class=\"w100\">Status</th>\r\n                      </tr>\r\n                    </table>\r\n                  </div>\r\n                  <div class=\"table-container\">\r\n                    <div class=\"table-content\">\r\n                      <table>\r\n                        <tr *ngFor=\"let row of temCoupon; let i =index\"\r\n                          [ngClass]=\"row.status == 'Pending' ? 'dispatchPending' : row.status == 'Success' ? 'dispatchCom' : 'dispatchWait'\">\r\n                          <td class=\"w50\">{{i+1}}</td>\r\n                          <td class=\"w150\">{{row.coupon_no}}</td>\r\n                          <td>{{row.product_detail}}</td>\r\n                          <td class=\"w100\"><strong>{{row.status}}</strong></td>\r\n                        </tr>\r\n                      </table>\r\n                    </div>\r\n\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col s6\">\r\n          <div class=\"card pb0 mb10\" *ngIf=\"masterboxData.length || masterdispatchboxitemdetail.length > 0\">\r\n            <div class=\"card-head\">\r\n              <h2 style=\"margin-bottom: 0px;\">Master Box Detail</h2>\r\n\r\n              <div class=\"left-auto\">\r\n                <button class=\"sm-mat-icon-button\" color=\"accent\" mat-icon-button matTooltip=\"Master Box With Item\"\r\n                  (click)=\"printMasterItem()\">\r\n                  <i class=\"material-icons\">print</i>\r\n                </button>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"card-body cs-form\">\r\n              <div class=\"cs-table font-lg left-right-10\">\r\n                <div class=\"table-head border-bottom\">\r\n                  <table>\r\n                    <tr>\r\n                      <th class=\"w40\">S.no.</th>\r\n                      <th class=\"w180 text-center\">Master Box Serial No.</th>\r\n                      <th class=\"w100 text-center\">Total Small Boxes</th>\r\n                      <th class=\"w100 text-center\">Total Items</th>\r\n                      <th class=\"w80 text-center\">Action</th>\r\n\r\n                    </tr>\r\n                  </table>\r\n                </div>\r\n\r\n\r\n                <div class=\"table-container\">\r\n                  <div class=\"table-content\" *ngIf=\"masterdispatchboxitemdetail.length > 0\">\r\n                    <table>\r\n                      <ng-container *ngIf=\"!skLoading\">\r\n                        <tr *ngFor=\"let row of masterdispatchboxitemdetail; let i =index\">\r\n                          <td class=\"w40\">{{i+1}}</td>\r\n                          <td class=\"w180 text-center\">{{row.coupon_code}}</td>\r\n                          <td class=\"w100 text-center\"><a\r\n                              [ngClass]=\"row.master_grand_coupon_small_box_qty!='0'?'link-btn':''\"\r\n                              (click)=\"row.master_grand_coupon_small_box_qty!='0'?viewmasterboxdetail(row,'small_boxes'):''\">{{row.master_grand_coupon_small_box_qty}}\r\n                            </a></td>\r\n                          <td class=\"w100 text-center\"><a\r\n                              [ngClass]=\"row.master_grand_coupon_item_qty!='0'?'link-btn':''\"\r\n                              (click)=\"row.master_grand_coupon_item_qty!='0'?viewmasterboxdetail(row,'items'):''\">{{row.master_grand_coupon_item_qty}}\r\n                            </a></td>\r\n\r\n                          <td class=\"w80 text-center\">\r\n                            <div class=\"action-button\">\r\n                              <button\r\n                                *ngIf=\"row.master_grand_coupon_small_box_qty!='0' || row.master_grand_coupon_item_qty!='0'\"\r\n                                mat-icon-button matTooltip=\"Print Master Box\"\r\n                                (click)=\"printData(row,invoice_detail.order_no)\">\r\n                                <i class=\"material-icons edit\">print</i>\r\n                              </button>\r\n\r\n                              <button mat-icon-button matTooltip=\"Add Manually\"\r\n                                *ngIf=\"(invoice_detail.order_status == 'readyToDispatch') && (dispatchInvoice != dispatchQTY) \"\r\n                                (click)=\"manualAdd('manual_entry', row.id, row.coupon_code)\">\r\n                                <i class=\"material-icons edit\">add_circle</i>\r\n                              </button>\r\n\r\n                              <button mat-icon-button matTooltip=\"Edit\"\r\n                                *ngIf=\"row.master_grand_coupon_small_box_qty=='0' && row.master_grand_coupon_item_qty=='0'\"\r\n                                (click)=\"deletemasterboxes(row,invoice_detail.order_no)\">\r\n                                <i class=\"material-icons del\">delete</i>\r\n                              </button>\r\n                            </div>\r\n                          </td>\r\n                        </tr>\r\n                      </ng-container>\r\n                    </table>\r\n                  </div>\r\n\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"card pb0\">\r\n            <div class=\"card-head\">\r\n              <h2 style=\"margin-bottom: 0px;\">Item Detail</h2>\r\n\r\n              <div class=\"left-auto\">\r\n                <button class=\"sm-mat-icon-button\" color=\"accent\" *ngIf=\"dispatchItem && dispatchItem.length > 0\"\r\n                  mat-icon-button matTooltip=\"Print Item Detail\" (click)=\"printItemData()\">\r\n                  <i class=\"material-icons\">print</i>\r\n                </button>\r\n              </div>\r\n            </div>\r\n\r\n            <div class=\"card-body cs-form\">\r\n              <div class=\"cs-table font-lg left-right-10\">\r\n                <div class=\"table-head border-bottom\">\r\n                  <table>\r\n                    <tr>\r\n                      <th class=\"w50\">S.no.</th>\r\n                      <th>Item Details</th>\r\n                      <th class=\"w150 text-center\">QTY.</th>\r\n                      <th class=\"w100 text-center\">Dispatch Qty.</th>\r\n                    </tr>\r\n                  </table>\r\n                </div>\r\n\r\n\r\n                <div class=\"table-container\">\r\n                  <div class=\"table-content\" *ngIf=\"dispatchItem && dispatchItem.length > 0\">\r\n                    <table>\r\n                      <ng-container *ngIf=\"!skLoading\">\r\n                        <ng-container *ngFor=\"let row of dispatchItem; let i =index\">\r\n                          <tr\r\n                            [ngClass]=\"{'dispatchWait': row.sale_dispatch_qty == 0, 'dispatchPending': row.sale_dispatch_qty > 0 && row.sale_dispatch_qty < row.sale_qty, 'dispatchCom': row.sale_dispatch_qty == row.sale_qty}\">\r\n                            <td class=\"w50\">{{i+1}}</td>\r\n                            <td>{{row.item_name | titlecase}} <strong>({{row.item_code}})</strong></td>\r\n                            <td class=\"w150 text-center\">\r\n                              <ng-container\r\n                                *ngIf=\"row.sale_qty == row.sale_dispatch_qty\">{{row.sale_qty}}</ng-container>\r\n                              <ng-container *ngIf=\"row.sale_qty != row.sale_dispatch_qty\">\r\n                                <div class=\"df ac flex-gap-5\">\r\n                                  <div class=\"th-search-acmt\"\r\n                                    [ngClass]=\"{'error-block' :row.sale_dispatch_qty == 0 ?  row.remaining_qty > row.sale_qty : ''}\">\r\n                                    <mat-form-field>\r\n                                      <input type=\"text\" class=\"text-right\" matInput\r\n                                        onkeypress=\"return event.charCode>=48 && event.charCode<=57\"\r\n                                        placeholder=\"Dispatch QTY.\" [name]=\"'remaining_qty'+i\" #remaining_qty=\"ngModel\"\r\n                                        [(ngModel)]=\"row.remaining_qty\">\r\n                                    </mat-form-field>\r\n                                  </div>\r\n                                  <div class=\"action-button flat w30\">\r\n                                    <button mat-icon-button matTooltip=\"Update\" [disabled]=\"savingFlag == true\"\r\n                                      (click)=\"checkQty(row.sale_dispatch_qty, row.sale_qty, row.remaining_qty,  row.id, i+1)\">\r\n                                      <i class=\"material-icons edit\">save</i>\r\n                                    </button>\r\n                                  </div>\r\n                                </div>\r\n                              </ng-container>\r\n                            </td>\r\n                            <td class=\"w100 text-center\"><strong>{{row.sale_dispatch_qty}}</strong></td>\r\n                          </tr>\r\n                        </ng-container>\r\n                      </ng-container>\r\n                    </table>\r\n                  </div>\r\n\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n      <ng-container *ngIf=\"couponList.length > 0 && invoice_detail.order_status == 'Dispatched'\">\r\n        <div class=\"cs-table\">\r\n          <div>\r\n            <div class=\"table-head\">\r\n              <table>\r\n                <tr>\r\n                  <th class=\"w60\">Sr.No</th>\r\n                  <th class=\"w200\">Product Coupon Code</th>\r\n                  <th class=\"w200\">Box Coupon Code</th>\r\n                  <th class=\"w150\">Coupon Type</th>\r\n                  <th>Product Detail</th>\r\n                  <!-- <th class=\"w150\">Packing Size</th> -->\r\n                </tr>\r\n              </table>\r\n            </div>\r\n          </div>\r\n\r\n          <div class=\"table-container\">\r\n            <div class=\"table-content\">\r\n              <table>\r\n                <tr *ngFor=\"let row of couponList; let i = index;\">\r\n                  <td class=\"w60\">{{i+1}}</td>\r\n                  <td class=\"w200\">{{row.coupon_code}}</td>\r\n                  <td class=\"w200\">{{row.master_coupon ? row.master_coupon: '---'}}</td>\r\n                  <td class=\"w150\">{{row.coupon_type == 'Master Box' ? 'Box' :'Product'}}</td>\r\n                  <td>{{row.product_name}} <strong>{{row.product_code}}</strong></td>\r\n                  <!-- <td class=\"w150\">{{row.master_packing_size == 0 ? '---' : row.master_packing_size}}</td> -->\r\n                </tr>\r\n              </table>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </ng-container>\r\n    </ng-container>\r\n\r\n\r\n    <!-- ITEM DETAIL PRINT CODE START -->\r\n    <div style=\"width: 50%;margin-left: 250px;\" hidden>\r\n      <div style=\"width:377.95275591px; height:566.92913386px;\" class=\"paper-layout\" id=\"item_print_card\">\r\n        <h2 style=\"font-size:14px; margin:0px; text-align:center;\">\r\n          {{invoice_detail.organisation_name ? invoice_detail.organisation_name : ''}}\r\n        </h2>\r\n        <div style=\"padding: 0px 100px 5px 5px; position: relative;\">\r\n          <p style=\" font-size: 10px; line-height: 5px;\">\r\n            <strong style=\" font-size: 10px; line-height: 5px;\">Order Date</strong> : {{invoice_detail.date_created |\r\n            date:'dd MMM yyyy'}}\r\n          </p>\r\n          <p style=\" font-size: 10px; line-height: 5px;\">\r\n            <strong style=\" font-size: 10px; line-height: 5px;\">Order Number</strong> : #{{invoice_detail.order_no}}\r\n          </p>\r\n          <p style=\" font-size: 10px; line-height: 5px;\">\r\n            <strong style=\" font-size: 10px; line-height: 5px;\">Company Name</strong> : {{invoice_detail.company_name}}\r\n          </p>\r\n        </div>\r\n        <div style=\"width:100%; height:1.5px; background:#000; margin:5px 0px;\">&nbsp;</div>\r\n\r\n        <table style=\"border:1px solid #ccc; table-layout:fixed;border-collapse:collapse;\">\r\n          <tr>\r\n            <th\r\n              style=\"font-size: 10px; border:1px solid #ccc; line-height: 12px; padding: 2px; background: #fafbfc; text-align:left;\">\r\n              Sr.No\r\n            </th>\r\n            <th\r\n              style=\"font-size: 10px; border:1px solid #ccc; line-height: 12px; padding: 2px; background: #fafbfc; width:170px; text-align:left;\">\r\n              Product Detail\r\n            </th>\r\n            <th style=\"font-size: 10px; border:1px solid #ccc; line-height: 12px; padding: 2px; background: #fafbfc;\">\r\n              QTY.\r\n            </th>\r\n            <th style=\"font-size: 10px; border:1px solid #ccc; line-height: 12px; padding: 2px; background: #fafbfc;\">\r\n              Dispatch QTY.\r\n            </th>\r\n\r\n          </tr>\r\n          <tr *ngFor=\"let row of dispatchItem; let i =index\">\r\n            <td style=\"font-size: 10px; border:1px solid #ccc; line-height: 12px; padding: 2px;\">{{i+1}}</td>\r\n            <td style=\"font-size: 10px; border:1px solid #ccc; line-height: 12px; padding: 2px;\">{{row.item_name}}</td>\r\n            <td style=\"font-size: 10px; border:1px solid #ccc; line-height: 12px; padding: 2px; text-align:center;\">\r\n              <b>{{row.sale_qty}}</b>\r\n            </td>\r\n            <td style=\"font-size: 10px; border:1px solid #ccc; line-height: 12px; padding: 2px; text-align:center;\">\r\n              <b>{{row.sale_dispatch_qty}}</b>\r\n            </td>\r\n\r\n          </tr>\r\n\r\n        </table>\r\n      </div>\r\n    </div>\r\n    <!-- ITEM DETAIL PRINT CODE END -->\r\n\r\n    <!-- MASTER LABEL PRINT CODE START -->\r\n    <ng-container *ngIf=\"cartennumber != undefined \">\r\n      <div style=\"width: 50%;margin-left: 250px;\" hidden>\r\n        <div style=\"width:377.95275591px; height:566.92913386px;\" class=\"paper-layout\" id=\"print_card\">\r\n          <h2 style=\"font-size:14px; margin:0px; text-align:center;\">{{invoice_detail.organisation_name ?\r\n            invoice_detail.organisation_name : ''}}</h2>\r\n          <div style=\"padding: 0px 100px 5px 5px; position: relative;\">\r\n            <p style=\" font-size: 10px; line-height: 5px;\"><strong style=\" font-size: 10px; line-height: 5px;\">Company\r\n                Name</strong> : {{invoice_detail.company_name ? (invoice_detail.company_name | titlecase) :''}}</p>\r\n            <p style=\" font-size: 10px; line-height: 5px;\"><strong style=\" font-size: 10px; line-height: 5px;\">Contact\r\n                No.</strong> : {{invoice_detail.mobile}}</p>\r\n            <!-- <p style=\" font-size: 10px; line-height: 5px;\" *ngIf=\"invoice_detail.address\"><strong\r\n                style=\" font-size: 10px; line-height: 5px;\">Address</strong> : {{invoice_detail.address}}</p> -->\r\n            <p style=\" font-size: 10px; line-height: 5px;\"><strong style=\" font-size: 10px; line-height: 5px;\">Order\r\n                No.</strong> : #{{invoice_detail.order_no}}</p>\r\n            <p style=\" font-size: 10px; line-height: 5px;\"><strong style=\" font-size: 10px; line-height: 5px;\">Order\r\n                Date</strong> : {{invoice_detail.date_created | date:'dd MMM yyyy'}}</p>\r\n            <p style=\" font-size: 10px; line-height: 5px;\"><strong style=\" font-size: 10px; line-height: 5px;\">Master\r\n                Box Serial No.</strong> : {{cartennumber}}</p>\r\n            <p style=\" font-size: 10px; line-height: 5px;\"><strong style=\" font-size: 10px; line-height: 5px;\">Master\r\n                Box Total QTY.</strong> : {{totalQty}}</p>\r\n\r\n            <div style=\"position: absolute; top: -10px; right: 0px; width: 70px; height: 70px; background:#000;\">\r\n              <ngx-qrcode [elementType]=\"elementType\" value=\"{{cartennumber}}\" cssClass=\"aclass master_qr_img\"\r\n                errorCorrectionLevel=\"L\"> </ngx-qrcode>\r\n              <span\r\n                style=\"text-align: center; display: block; font-weight: 900; font-size: 10px; margin-top: -5px;\">{{cartennumber}}</span>\r\n            </div>\r\n          </div>\r\n          <div style=\"width:100%; height:1.5px; margin:3px 0px;\">&nbsp;</div>\r\n          <table style=\"border:1px solid #ccc;border-collapse:collapse;\">\r\n            <tr>\r\n              <th\r\n                style=\"font-size: 10px; border:1px solid #ccc; line-height: 12px; padding: 2px; background: #fafbfc; text-align:left; width:250px;\">\r\n                Product Detail</th>\r\n              <th style=\"font-size: 10px; border:1px solid #ccc; line-height: 12px; padding: 2px; background: #fafbfc;\">\r\n                Dispatch QTY.</th>\r\n            </tr>\r\n            <tr *ngFor=\"let item of printdata; let i=index\">\r\n              <td style=\"font-size: 10px; border:1px solid #ccc; line-height: 12px; padding: 2px;\">\r\n                {{item.product_detail}}</td>\r\n              <td style=\"font-size: 10px; border:1px solid #ccc; line-height: 12px; padding: 2px; text-align:center;\">\r\n                <b>{{item.totalItems}}</b>\r\n              </td>\r\n            </tr>\r\n            <tr *ngFor=\"let item of noScanListing; let i=index\">\r\n              <td style=\"font-size: 10px; border:1px solid #ccc; line-height: 12px; padding: 2px;\">\r\n                {{item.product_detail}}</td>\r\n              <td style=\"font-size: 10px; border:1px solid #ccc; line-height: 12px; padding: 2px; text-align:center;\">\r\n                <b>{{item.sale_dispatch_qty}}</b>\r\n              </td>\r\n            </tr>\r\n\r\n          </table>\r\n        </div>\r\n      </div>\r\n    </ng-container>\r\n\r\n\r\n\r\n    <ng-container *ngIf=\"scanProduct.length > 0\">\r\n      <div style=\"width: 50%;margin-left: 250px;\" hidden>\r\n        <div class=\"paper-layout\" id=\"item_print_card1\">\r\n          <h2 style=\"font-size:14px; margin:0px; text-align:center;\">{{invoice_detail.organisation_name ?\r\n            invoice_detail.organisation_name : ''}}</h2>\r\n          <div style=\"padding: 0px 100px 5px 5px; position: relative;\">\r\n            <p style=\" font-size: 10px; line-height: 5px;\"><strong style=\" font-size: 10px; line-height: 5px;\">Company\r\n                Name</strong> : {{invoice_detail.company_name ? (invoice_detail.company_name | titlecase) :''}}</p>\r\n\r\n            <p style=\" font-size: 10px; line-height: 5px;\"><strong style=\" font-size: 10px; line-height: 5px;\">Contact\r\n                No.</strong> : {{invoice_detail.mobile}}</p>\r\n            <p style=\" font-size: 10px; line-height: 5px;\"><strong style=\" font-size: 10px; line-height: 5px;\">\r\n                Marka </strong> : {{invoice_detail.marka ? invoice_detail.marka : 'N/A'}}</p>\r\n            <!-- <p style=\" font-size: 10px; line-height: 5px;\" *ngIf=\"invoice_detail.address\"><strong\r\n                style=\" font-size: 10px; line-height: 5px;\">Address</strong> : {{invoice_detail.address}}</p> -->\r\n            <p style=\" font-size: 10px; line-height: 5px;\"><strong style=\" font-size: 10px; line-height: 5px;\">Order\r\n                No.</strong> : #{{invoice_detail.order_no}}</p>\r\n            <p style=\" font-size: 10px; line-height: 5px;\"><strong style=\" font-size: 10px; line-height: 5px;\">Order\r\n                Date</strong> : {{invoice_detail.date_created | date:'dd MMM yyyy'}}</p>\r\n            <p style=\" font-size: 10px; line-height: 5px;\"><strong style=\" font-size: 10px; line-height: 5px;\">\r\n                Total Master Box</strong> : {{scanProduct.length}}</p>\r\n\r\n          </div>\r\n          <table style=\"border:1px solid #ccc;border-collapse:collapse; width: 100%;\">\r\n            <tr>\r\n              <th\r\n                style=\"font-size: 10px; border:1px solid #ccc; line-height: 12px; padding: 5px; background: #fafbfc; text-align:left; width:50px;\">\r\n                Master Box\r\n              </th>\r\n              <th\r\n                style=\"font-size: 10px; border:1px solid #ccc; line-height: 12px; padding: 5px; background: #fafbfc; text-align:left; width:277px;\">\r\n                Product Details\r\n              </th>\r\n              <th\r\n                style=\"font-size: 10px; text-align: center; border:1px solid #ccc; line-height: 12px; padding: 5px; background: #fafbfc; width:50px;\">\r\n                QTY.\r\n              </th>\r\n            </tr>\r\n            <ng-container *ngFor=\"let row of scanProduct\">\r\n              <tr *ngFor=\"let item of row.products\">\r\n                <td style=\"font-size: 10px; border:1px solid #ccc; line-height: 12px; padding: 5px; text-align:left;\">\r\n                  {{row.coupon_code}}\r\n                </td>\r\n                <td style=\"font-size: 10px; border:1px solid #ccc; line-height: 12px; padding: 5px; text-align:left;\">\r\n                  {{item.product_name}} - {{item.product_code}}\r\n                </td>\r\n                <td\r\n                  style=\"font-size: 10px; text-align: center; border:1px solid #ccc; line-height: 12px; padding: 5px;\">\r\n                  {{item.totalItems}}\r\n                </td>\r\n              </tr>\r\n            </ng-container>\r\n          </table>\r\n        </div>\r\n      </div>\r\n    </ng-container>\r\n    <!-- MASTER LABEL PRINT CODE END -->\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/company-dispatch/company-dispatch-detail/company-dispatch-detail.component.ts":
/*!***********************************************************************************************!*\
  !*** ./src/app/company-dispatch/company-dispatch-detail/company-dispatch-detail.component.ts ***!
  \***********************************************************************************************/
/*! exports provided: CompanyDispatchDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanyDispatchDetailComponent", function() { return CompanyDispatchDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_services_DatabaseService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/_services/DatabaseService */ "./src/_services/DatabaseService.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var src_app_localstorage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/localstorage.service */ "./src/app/localstorage.service.ts");
/* harmony import */ var src_app_dialog_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/dialog.component */ "./src/app/dialog.component.ts");
/* harmony import */ var ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng6-toastr-notifications */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/ng6-toastr-notifications/fesm5/ng6-toastr-notifications.js");
/* harmony import */ var _view_master_box_dispatch_detail_view_master_box_dispatch_detail_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../view-master-box-dispatch-detail/view-master-box-dispatch-detail.component */ "./src/app/company-dispatch/view-master-box-dispatch-detail/view-master-box-dispatch-detail.component.ts");
/* harmony import */ var _gatepass_add_gatepass_add_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../gatepass-add/gatepass-add.component */ "./src/app/company-dispatch/gatepass-add/gatepass-add.component.ts");










var CompanyDispatchDetailComponent = /** @class */ (function () {
    function CompanyDispatchDetailComponent(route, service, rout, dialog, session, dialogs, toast) {
        var _this = this;
        this.route = route;
        this.service = service;
        this.rout = rout;
        this.dialog = dialog;
        this.session = session;
        this.dialogs = dialogs;
        this.toast = toast;
        this.elementType = '';
        this.orderType = 'order';
        this.data = {};
        this.couponNumber = {};
        this.savingFlag = false;
        this.invoice_detail = {};
        this.dispatchItem = [];
        this.payment_list = [];
        this.masterboxData = [];
        this.masterdispatchboxitemdetail = [];
        this.dispatch_coupon = [];
        this.dispatch_detail = {};
        this.skLoading = false;
        this.filter = {};
        this.assign_login_data = {};
        this.logined_user_data = {};
        this.printdata = [];
        this.gatePassAssign = [];
        this.assign_login_data2 = {};
        this.couponList = [];
        this.temArray = [];
        this.dispatchQTY = 0;
        this.dispatchInvoice = 0;
        this.dispatch_status = 'Pending';
        this.temCoupon = [];
        this.noScanItem = [];
        this.dispatchedCoupon = {};
        this.masterBoxCoupon = [];
        this.masterQTY = 0;
        this.nomasterQTY = 0;
        this.totalQty = 0;
        this.noScanListing = [];
        this.scanProduct = [];
        this.mainmasterboxDisable = false;
        this.search = {};
        this.userData = JSON.parse(localStorage.getItem('st_user'));
        this.data.created_by_id = this.userData['data']['id'];
        this.data.created_by_name = this.userData['data']['name'];
        this.assign_login_data = this.session.getSession();
        this.logined_user_data = this.assign_login_data.value.data;
        this.assign_login_data2 = this.assign_login_data.data;
        this.route.params.subscribe(function (params) {
            _this.id = params.id;
        });
    }
    CompanyDispatchDetailComponent.prototype.ngOnInit = function () {
        this.billDatadetail();
        this.getmasterboxnew('');
    };
    CompanyDispatchDetailComponent.prototype.ngAfterViewInit = function () {
    };
    CompanyDispatchDetailComponent.prototype.setcouponnoFocused = function () {
        this.inputEl.nativeElement.focus();
    };
    CompanyDispatchDetailComponent.prototype.billDatadetail = function () {
        var _this = this;
        this.skLoading = true;
        this.invoice_detail = '';
        this.service.post_rqst({ 'bill_id': this.id }, "Dispatch/tallyInvoiceCreditBillingDetail")
            .subscribe((function (result) {
            if (result['statusCode'] == 200) {
                _this.invoice_detail = result['order'];
                _this.gatePassAssign.push(_this.invoice_detail);
                _this.dispatch_detail = result['dispatch_data'];
                _this.dispacthItemDetail();
                _this.getdispatchMasterboxdetail();
                _this.getmasterbox('', _this.invoice_detail.order_no);
                _this.payment_list = result['payment_list'];
                _this.dispatch_coupon = result['all_dispatch'];
                _this.getdispatchDetail();
                _this.skLoading = false;
                // this.service.count_list();
                _this.couponNumber.coupon_number = '';
            }
            else {
                _this.skLoading = false;
                // this.service.count_list();
                _this.toast.errorToastr(result['statusMsg']);
                _this.couponNumber.coupon_number = '';
            }
        }));
    };
    CompanyDispatchDetailComponent.prototype.openDialog = function (type, number) {
        var dialogRef = this.dialog.open(_gatepass_add_gatepass_add_component__WEBPACK_IMPORTED_MODULE_9__["GatepassAddComponent"], {
            width: '1024px',
            panelClass: 'cs-modal',
            disableClose: true,
            data: {
                'model_type': type,
                'gatePassAssign': this.gatePassAssign,
                'invoice_number': number,
            }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result != false) {
            }
        });
    };
    CompanyDispatchDetailComponent.prototype.manualAdd = function (type, id, coupon_code) {
        var _this = this;
        var dialogRef = this.dialog.open(_gatepass_add_gatepass_add_component__WEBPACK_IMPORTED_MODULE_9__["GatepassAddComponent"], {
            width: '1024px',
            panelClass: 'cs-modal',
            disableClose: true,
            data: {
                'model_type': type,
                'master_coupon_id': id,
                'master_coupon_code': coupon_code,
                'dispacth_detail_id': this.id,
                'noScanItem': this.noScanItem,
                'dr_data': this.invoice_detail
            }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result == true) {
                _this.billDatadetail();
            }
        });
    };
    CompanyDispatchDetailComponent.prototype.checkCoupon = function (number, couponGrandMasterId) {
        if (number.length == 16) {
            if (number == undefined) {
                this.toast.errorToastr("Enter coupon code number");
                return;
            }
            if (number == '') {
                this.toast.errorToastr("Enter coupon code number");
                return;
            }
            if (this.temCoupon != '') {
                var temData_1 = number;
                var index = this.temCoupon.findIndex(function (row) { return row.coupon_no == temData_1; });
                if (index != -1) {
                    if (this.temCoupon[index].coupon_no === temData_1) {
                        this.couponNumber.coupon_number = '';
                        this.toast.errorToastr('Coupon code already exists');
                        this.clearValue();
                        return;
                    }
                    else {
                        this.couponNumber.coupon_number = '';
                        this.clearValue();
                    }
                }
                else {
                    this.couponNumber.coupon_number = '';
                    this.clearValue();
                    this.temCoupon.push({ 'coupon_no': number, 'status': 'Pending', 'product_detail': '' });
                    this.dispatchItems(number, couponGrandMasterId);
                }
            }
            else {
                this.couponNumber.coupon_number = '';
                this.clearValue();
                this.temCoupon.push({ 'coupon_no': number, 'status': 'Pending' });
                this.dispatchItems(number, couponGrandMasterId);
            }
        }
    };
    CompanyDispatchDetailComponent.prototype.getdispatchDetail = function () {
        var _this = this;
        this.dispatchItem = [];
        this.noScanItem = [];
        this.service.post_rqst({ 'invoice_id': this.id, 'dr_id': this.invoice_detail.dr_id, 'invoice_no': this.invoice_detail.order_no }, 'Dispatch/checkCouponCodeCheck').subscribe(function (result) {
            if (result['statusCode'] == 200) {
                _this.dispatchQTY = result['sale_dispatch_qty'];
                _this.dispatchInvoice = result['invoice_qty'];
                if (_this.dispatchQTY == _this.dispatchInvoice) {
                    _this.dispatch_status = 'Dispatched';
                }
                ;
                for (var i = 0; i < result['dispatch']['dispatch_item'].length; i++) {
                    _this.dispatchItem.push({ 'product_scan': result['dispatch']['dispatch_item'][i]['product_scan'], 'item_code': result['dispatch']['dispatch_item'][i]['item_code'], 'sale_qty': result['dispatch']['dispatch_item'][i]['sale_qty'], 'remaining_qty': result['dispatch']['dispatch_item'][i]['sale_qty'], 'item_name': result['dispatch']['dispatch_item'][i]['item_name'], 'sale_dispatch_qty': result['dispatch']['dispatch_item'][i]['sale_dispatch_qty'], 'id': result['dispatch']['dispatch_item'][i]['id'], 'dispatch_qty': 0, });
                    if (result['dispatch']['dispatch_item'][i]['product_scan'].toLowerCase() == 'no' && (result['dispatch']['dispatch_item'][i]['sale_qty'] != result['dispatch']['dispatch_item'][i]['sale_dispatch_qty'])) {
                        // parseInt(result['dispatch']['dispatch_item'][i]['sale_qty']) - parseInt(result['dispatch']['dispatch_item'][i]['sale_dispatch_qty'])
                        _this.noScanItem.push({ 'item_id': result['dispatch']['dispatch_item'][i]['item_id'], 'product_scan': result['dispatch']['dispatch_item'][i]['product_scan'], 'item_code': result['dispatch']['dispatch_item'][i]['item_code'], 'item_name': result['dispatch']['dispatch_item'][i]['item_name'], 'id': result['dispatch']['dispatch_item'][i]['id'], 'sale_qty': result['dispatch']['dispatch_item'][i]['sale_qty'], 'sale_dispatch_qty': 0, 'order_remaining': result['dispatch']['dispatch_item'][i]['sale_dispatch_qty'] });
                    }
                }
                if (_this.dispatchItem.length == 0) {
                    _this.rout.navigate(['company-dispatch']);
                }
                _this.couponNumber.coupon_number = '';
            }
            else {
                _this.couponNumber.coupon_number = '';
                _this.toast.errorToastr(result['statusMsg']);
            }
        });
    };
    CompanyDispatchDetailComponent.prototype.dispatchItems = function (number, couponGrandMasterId) {
        var _this = this;
        this.dispatchItem = [];
        this.noScanItem = [];
        this.service.post_rqst({ 'coupon_code': number, 'dr_id': this.invoice_detail.dr_id, 'dispatch_status': this.dispatch_status, 'bill_dispatch_type': this.invoice_detail.bill_dispatch_type, 'dr_code': this.invoice_detail.dr_code, 'created_by_name': this.data.created_by_name, 'created_by_id': this.data.created_by_id, 'company_name': this.invoice_detail.company_name, 'invoice_id': this.id, 'invoice_no': this.invoice_detail.order_no, 'couponGrandMasterId': couponGrandMasterId }, 'Dispatch/checkCouponCodeCheck').subscribe(function (result) {
            if (result['statusCode'] == 200) {
                _this.dispatchedCoupon = result['coupon_code'];
                _this.dispatchQTY = result['sale_dispatch_qty'];
                _this.dispatchInvoice = result['invoice_qty'];
                _this.dispatchItem = result['dispatch'];
                if (_this.dispatchItem.length > 0) {
                    for (var i = 0; i < _this.dispatchItem.length; i++) {
                        if (_this.dispatchItem[i]['product_scan'].toLowerCase() == 'no') {
                            _this.noScanItem.push({ 'item_code': _this.dispatchItem[i]['item_code'], 'item_name': _this.dispatchItem[i]['item_name'], 'id': _this.dispatchItem[i]['id'], 'sale_qty': _this.dispatchItem[i]['sale_qty'], 'order_remaining': _this.dispatchItem[i]['sale_dispatch_qty'], 'sale_dispatch_qty': parseInt(_this.dispatchItem[i]['sale_qty']) - parseInt(_this.dispatchItem[i]['sale_dispatch_qty']) });
                        }
                    }
                }
                if (_this.dispatchedCoupon) {
                    for (var i = 0; i < _this.temCoupon.length; i++) {
                        if (_this.temCoupon[i]['coupon_no'] == _this.dispatchedCoupon) {
                            if (result['statusMsg'] != 'Success') {
                                _this.toast.errorToastr(result['statusMsg']);
                            }
                            _this.temCoupon[i]['status'] = result['statusMsg'];
                            _this.temCoupon[i]['product_detail'] = result['product_detail'];
                            _this.billDatadetail();
                        }
                    }
                }
            }
            else {
                if (result['coupon_code']) {
                    _this.dispatchedCoupon = result['coupon_code'];
                    for (var i = 0; i < _this.temCoupon.length; i++) {
                        if (_this.temCoupon[i]['coupon_no'] == _this.dispatchedCoupon) {
                            if (result['statusMsg'] != 'Success') {
                                _this.toast.errorToastr(result['statusMsg']);
                            }
                            _this.temCoupon[i]['status'] = result['statusMsg'];
                            _this.temCoupon[i]['product_detail'] = result['product_detail'];
                        }
                    }
                    _this.couponNumber.coupon_number = '';
                    _this.billDatadetail();
                }
                else {
                    if (result['statusMsg'] == 'Coupon not exist.') {
                        for (var i = 0; i < _this.temCoupon.length; i++) {
                            if (_this.temCoupon[i]['coupon_no'] == number) {
                                _this.temCoupon[i]['status'] = result['statusMsg'];
                                _this.temCoupon[i]['product_detail'] = result['product_detail'];
                            }
                        }
                        _this.couponNumber.coupon_number = '';
                    }
                    _this.toast.errorToastr(result['statusMsg']);
                }
            }
            _this.couponNumber.coupon_number = '';
        });
    };
    CompanyDispatchDetailComponent.prototype.clearValue = function () {
        this.couponNumber.coupon_number = '';
    };
    CompanyDispatchDetailComponent.prototype.getdispatchMasterboxdetail = function () {
        var _this = this;
        this.service.post_rqst({ 'data': { 'invoice_id': this.id, 'bill_number': this.invoice_detail.order_no } }, 'Dispatch/fetchMasterGrandCoupon').subscribe(function (result) {
            if (result['statusCode'] == 200) {
                _this.masterdispatchboxitemdetail = result['master_grand_coupon'];
            }
            else {
                _this.toast.errorToastr(result['statusMsg']);
                // this.couponNumber =  {};
            }
        });
    };
    CompanyDispatchDetailComponent.prototype.dispacthItemDetail = function () {
        var _this = this;
        this.service.post_rqst({ 'invoice_id': this.id, 'invoice_no': this.invoice_detail.order_no }, 'Dispatch/dispatchedCouponList').subscribe(function (result) {
            if (result['statusCode'] == 200) {
                _this.couponList = result['result'];
            }
            else {
                _this.toast.errorToastr(result['statusMsg']);
            }
        });
    };
    CompanyDispatchDetailComponent.prototype.addGrandmasterboxes = function (bill_number, id, type) {
        var _this = this;
        var data = { 'bill_number': bill_number, 'id': id, 'total_coupon': 1 };
        this.service.post_rqst({ 'data': data }, "Dispatch/genrateMasterGrandCoupon").subscribe(function (result) {
            if (result['statusCode'] == 200) {
                _this.toast.successToastr(result['statusMsg']);
                _this.billDatadetail();
            }
            else {
                _this.toast.errorToastr(result['statusMsg']);
            }
        });
    };
    CompanyDispatchDetailComponent.prototype.getmasterbox = function (searcValue, bill_number) {
        var _this = this;
        this.filter.coupon_code = searcValue;
        this.service.post_rqst({ 'data': { 'filter': this.filter, 'invoice_id': this.id, 'bill_number': bill_number } }, 'Dispatch/fetchMasterGrandCouponDropdown').subscribe(function (resp) {
            if (resp['statusCode'] == 200) {
                _this.masterboxData = resp['master_grand_coupon'];
            }
            else {
                _this.toast.errorToastr(resp['statusMsg']);
            }
        }, function (error) {
        });
    };
    CompanyDispatchDetailComponent.prototype.getmasterboxnew = function (searcValue) {
        var _this = this;
        this.service.post_rqst({ 'search': searcValue }, 'Dispatch/fetchCartonDropdown').subscribe(function (resp) {
            if (resp['statusCode'] == 200) {
                _this.masterBoxCoupon = resp['master_grand_coupon'];
            }
            else {
                _this.toast.errorToastr(resp['statusMsg']);
            }
        }, function (error) {
        });
    };
    CompanyDispatchDetailComponent.prototype.viewmasterboxdetail = function (maindata, type) {
        var _this = this;
        var data;
        if (type == 'items') {
            data = { 'main_data': maindata, 'type': type, 'action': 'true', 'status': this.invoice_detail.order_status };
        }
        else {
            data = { 'main_data': maindata, 'type': type };
        }
        var dialogRef = this.dialog.open(_view_master_box_dispatch_detail_view_master_box_dispatch_detail_component__WEBPACK_IMPORTED_MODULE_8__["ViewMasterBoxDispatchDetailComponent"], {
            width: '1000px',
            data: data
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result == true) {
                _this.getdispatchMasterboxdetail();
                _this.getdispatchDetail();
            }
        });
    };
    CompanyDispatchDetailComponent.prototype.printData = function (data, invoice) {
        var _this = this;
        this.service.post_rqst({ 'data': { 'id': data.id, 'bill_number': invoice, 'invoice_id': this.id, 'print': 'yes' } }, 'Dispatch/fetchMasterGrandCouponForPrint').subscribe(function (resp) {
            if (resp['statusCode'] == 200) {
                _this.printdata = resp['master_grand_coupon'];
                _this.noScanListing = resp['no_scan_master_grand_coupon'];
                if (_this.printdata.length > 0) {
                    _this.masterQTY = 0;
                    for (var i = 0; i < _this.printdata.length; i++) {
                        _this.masterQTY += _this.printdata[i]['totalItems'];
                    }
                }
                if (_this.noScanListing.length > 0) {
                    _this.nomasterQTY = 0;
                    for (var i = 0; i < _this.noScanListing.length; i++) {
                        _this.nomasterQTY += _this.noScanListing[i]['sale_dispatch_qty'];
                    }
                }
                _this.organisation_name = resp['organisation_name'];
                _this.cartennumber = resp['coupon_code'];
                _this.totalQty = _this.masterQTY + _this.nomasterQTY;
            }
            else {
                _this.toast.errorToastr(resp['statusMsg']);
                return;
            }
        }, function (error) {
        });
        setTimeout(function () {
            if (_this.printdata || _this.noScanListing) {
                var printContents = void 0, popupWin = void 0;
                printContents = document.getElementById('print_card').innerHTML;
                popupWin = window.open('', '_blank', 'top=0,left=0,height=100%,width=auto');
                popupWin.document.open();
                popupWin.document.write("\n          <html>\n          <head>\n          <title>Print tab</title>\n          <style>\n          @media print {\n            #qr_code_container  {\n              page-break-inside: always;\n              margin-bottom: 0px\n            }\n            @page { \n              margin: 0.00in 0.00in  0.00in 0.00in;\n            }\n            \n            .aclass {\n              width: 70px !important;\n              height: 70px !important;\n              text-align:right;\n            }\n            \n            .aclass img {\n              width: 100%;\n              height: 100%;\n            }\n            \n            body\n            {\n              font-family: 'arial';\n            }\n            </style>\n            </head>\n            <body onload=\"window.print();window.close()\">" + printContents + "</body>\n            </html>");
                popupWin.document.close();
            }
        }, 1000);
    };
    CompanyDispatchDetailComponent.prototype.printItemData = function () {
        var printContents, popupWin;
        printContents = document.getElementById('item_print_card').innerHTML;
        popupWin = window.open('', '_blank', 'top=0,left=0,height=100%,width=auto');
        popupWin.document.open();
        popupWin.document.write("\n        <html>\n        <head>\n        <title>Print tab</title>\n        <style>\n        @media print {\n          #qr_code_container  {\n            page-break-inside: always;\n            margin-bottom: 0px\n          }\n          @page { \n            margin: 0.00in 0.00in  0.00in 0.00in;\n          }\n          \n          body\n          {\n            font-family: 'arial';\n          }\n          </style>\n          </head>\n          <body onload=\"window.print();window.close()\">" + printContents + "</body>\n          </html>");
        popupWin.document.close();
    };
    CompanyDispatchDetailComponent.prototype.deletemasterboxes = function (data, number) {
        var _this = this;
        this.dialogs.confirm("Delete Master Box?").then(function (result) {
            if (result) {
                _this.service.post_rqst({ 'data': { 'id': data.id, 'bill_number': number } }, 'Dispatch/deleteGrandMasterBox').subscribe(function (resp) {
                    if (resp['statusCode'] == 200) {
                        _this.toast.successToastr('Deleted Successfully..');
                        _this.billDatadetail();
                    }
                    else {
                        _this.toast.errorToastr(resp['statusMsg']);
                        return;
                    }
                }, function (error) {
                });
            }
        });
    };
    CompanyDispatchDetailComponent.prototype.printMasterItem = function () {
        var _this = this;
        this.service.post_rqst({ 'id': this.invoice_detail.id }, 'Dispatch/fetchMasterGrandCouponCompleteForPrint').subscribe(function (result) {
            if (result['statusCode'] == 200) {
                _this.scanProduct = result['offer_coupon_grand_master'];
                setTimeout(function () {
                    var printContents, popupWin;
                    printContents = document.getElementById('item_print_card1').innerHTML;
                    popupWin = window.open('', '_blank', 'top=0,left=0,height=100%,width=auto');
                    popupWin.document.open();
                    popupWin.document.write("\n                <html>\n                <head>\n                <title>Print tab</title>\n                <style>\n                @media print {\n                  #qr_code_container  {\n                    page-break-inside: always;\n                    margin-bottom: 0px\n                  }\n                  @page { \n                    margin: 0.5in 0.5in  0.5in 0.5in;\n                  }\n                  \n                  body\n                  {\n                    font-family: 'arial';\n                  }\n                  </style>\n                  </head>\n                  <body onload=\"window.print();window.close()\">" + printContents + "</body>\n                  </html>");
                    popupWin.document.close();
                }, 200);
            }
            else {
                _this.toast.errorToastr(result['statusMsg']);
                return;
            }
        }, function (error) {
        });
    };
    CompanyDispatchDetailComponent.prototype.checkQty = function (sale_dispatch_qty, sale_qty, remaining_qty, id, i) {
        if (sale_dispatch_qty == 0) {
            if ((parseInt(remaining_qty)) > sale_qty) {
                this.toast.errorToastr('Row number ' + i + ' QTY. can not be greater than' + sale_qty);
                return;
            }
            else {
                this.updateQTY(id, remaining_qty);
            }
        }
        else {
            this.updateQTY(id, remaining_qty);
        }
    };
    CompanyDispatchDetailComponent.prototype.updateQTY = function (id, remaining_qty) {
        var _this = this;
        this.savingFlag = true;
        this.service.post_rqst({ 'id': id, 'cancel_qty': remaining_qty }, 'Dispatch/deleteDispatchItem').subscribe(function (resp) {
            if (resp['statusCode'] == 200) {
                _this.toast.successToastr(resp['statusMsg']);
                _this.dispatchItem = [];
                _this.billDatadetail();
                _this.savingFlag = false;
            }
            else {
                _this.toast.errorToastr(resp['statusMsg']);
                _this.savingFlag = false;
                return;
            }
        }, function (error) {
        });
    };
    CompanyDispatchDetailComponent.prototype.updateGrandMasterCoupon = function () {
        var _this = this;
        this.service.post_rqst({ 'data': { 'dr_id': this.invoice_detail.dr_id, 'dr_code': this.invoice_detail.dr_code, 'bill_dispatch_type': this.invoice_detail.bill_dispatch_type, 'filter': this.filter, 'id': this.search.couponGrandMasterId, 'created_by_name': this.data.created_by_name, 'created_by_id': this.data.created_by_id, 'company_name': this.invoice_detail.company_name, 'invoice_id': this.id, 'invoice_no': this.invoice_detail.order_no, } }, "Dispatch/updateCartonCoupon").subscribe((function (result) {
            if (result['statusCode'] == 200) {
                _this.mainmasterboxDisable = true;
                _this.masterboxData = result['master_grand_coupon'];
                _this.toast.successToastr('Success');
                _this.billDatadetail();
            }
            else {
                _this.toast.errorToastr(result['statusMsg']);
                _this.mainmasterboxDisable = false;
            }
        }));
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('focusInput'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], CompanyDispatchDetailComponent.prototype, "inputEl", void 0);
    CompanyDispatchDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-company-dispatch-detail',
            template: __webpack_require__(/*! ./company-dispatch-detail.component.html */ "./src/app/company-dispatch/company-dispatch-detail/company-dispatch-detail.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], src_services_DatabaseService__WEBPACK_IMPORTED_MODULE_3__["DatabaseService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialog"], src_app_localstorage_service__WEBPACK_IMPORTED_MODULE_5__["sessionStorage"], src_app_dialog_component__WEBPACK_IMPORTED_MODULE_6__["DialogComponent"], ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_7__["ToastrManager"]])
    ], CompanyDispatchDetailComponent);
    return CompanyDispatchDetailComponent;
}());



/***/ }),

/***/ "./src/app/company-dispatch/company-dispatch-list/company-dispatch-list.component.html":
/*!*********************************************************************************************!*\
  !*** ./src/app/company-dispatch/company-dispatch-list/company-dispatch-list.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-container\">\r\n    <div class=\"tools-container\">\r\n        <h2>Dispatch List</h2>\r\n        <div class=\"left-auto left-auto df ac flex-gap-10\">\r\n\r\n            <button mat-raised-button color=\"primary\" *ngIf=\"gatePassAssign.length > 0 && btnFlag == true\"\r\n                (click)=\"openDialog('add', '')\">Genrate Gate Pass</button>\r\n\r\n            <button mat-icon-button matTooltip=\"Refresh\" (click)=\"refresh('refresh',active_tab)\">\r\n                <i class=\"material-icons\">refresh</i>\r\n            </button>\r\n            <div class=\"pagination\"\r\n                *ngIf=\"((active_tab== 'Dispatched' || active_tab== 'Complete Dispatch' || active_tab== 'Pending Dispatch') && (distributor_list.length > 0)) || (gate_pass_list && gate_pass_list.length > 0) ||  returnData && returnData.length > 0\">\r\n                <div class=\"pagination-content\">\r\n                    Pages\r\n                    <span>{{pagenumber}}</span>\r\n                    of\r\n                    <span>{{total_page}}</span>\r\n                </div>\r\n                <div class=\"page-nav\">\r\n                    <button mat-icon-button matTooltip=\"Older\" (click)=\"pervious(active_tab)\" [disabled]=\"start == 0\">\r\n                        <i class=\"material-icons\">navigate_before</i>\r\n                    </button>\r\n                    <button mat-icon-button matTooltip=\"Newer\" (click)=\"nextPage(active_tab)\"\r\n                        [disabled]=\"pagenumber == total_page \">\r\n                        <i class=\"material-icons\">navigate_next</i>\r\n                    </button>\r\n\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"mat-tabbar\">\r\n                <ng-container\r\n                    *ngIf=\"assign_login_data2.id== '1' || assign_login_data2.warehouse_flag  =='1' || (assign_login_data2.view_dispatch_packing== '1' && assign_login_data2.add_dispatch_packing== '1')\">\r\n                    <button mat-button [ngClass]=\"{'active' :active_tab== 'Pending Dispatch'}\"\r\n                        (click)=\" active_tab= 'Pending Dispatch';  billData('');\">\r\n                        <i class=\"material-icons\">pending_actions</i>Pending {{pendingDispatchCount > 0 ? '(' +\r\n                        pendingDispatchCount + ')' : ''}}\r\n                    </button>\r\n                </ng-container>\r\n\r\n                <ng-container\r\n                    *ngIf=\"assign_login_data2.id != '1' && assign_login_data2.view_dispatch_packing== '1' && assign_login_data2.add_dispatch_packing== '1'\">\r\n                    <button mat-button [ngClass]=\"{'active' :active_tab== 'Complete Dispatch'}\"\r\n                        (click)=\"active_tab= 'Complete Dispatch'; billData('');\">\r\n                        <i class=\"material-icons\">fact_check</i>Complete Dispatch\r\n                    </button>\r\n                </ng-container>\r\n\r\n\r\n                <ng-container\r\n                    *ngIf=\"assign_login_data2.id== '1' || assign_login_data2.designation_id== '59' || assign_login_data2.warehouse_flag  =='1' || (assign_login_data2.view_dispatch_billing== '1' && assign_login_data2.add_dispatch_billing== '1' )\">\r\n                    <button mat-button [ngClass]=\"{'active' :active_tab== 'Dispatched'}\"\r\n                        (click)=\"active_tab= 'Dispatched'; billData('');\">\r\n                        <i class=\"material-icons\">newspaper</i>Pending Gatepass {{dispatchCount > 0 ? '(' +\r\n                        dispatchCount + ')' : ''}}\r\n                    </button>\r\n                </ng-container>\r\n\r\n\r\n\r\n                <ng-container\r\n                    *ngIf=\"assign_login_data2.id== '1' || assign_login_data2.warehouse_flag  =='1' || (assign_login_data2.view_dispatch_guard== '1' && assign_login_data2.add_dispatch_guard== '1')\">\r\n                    <button mat-button [ngClass]=\"{'active' :active_tab== 'Pending Gatepass'}\"\r\n                        (click)=\"active_tab= 'Pending Gatepass'; getGatePass(''); \">\r\n                        <i class=\"material-icons\">done_all</i> Gatepass Generated {{pendingGatepassCount > 0 ? '(' +\r\n                        pendingGatepassCount + ')' : ''}}\r\n                    </button>\r\n                </ng-container>\r\n                <ng-container\r\n                    *ngIf=\"assign_login_data2.id== '1' || assign_login_data2.warehouse_flag  =='1' || (assign_login_data2.view_dispatch_guard== '1' && assign_login_data2.add_dispatch_guard== '1')\">\r\n                    <button mat-button [ngClass]=\"{'active' :active_tab== 'Dispatch Gatepass'}\"\r\n                        (click)=\"active_tab= 'Dispatch Gatepass'; getGatePass(''); \">\r\n                        <i class=\"material-icons\">local_shipping</i>Dispatched {{dispatchGatepassCount > 0 ? '(' +\r\n                        dispatchGatepassCount + ')' : ''}}\r\n                    </button>\r\n                </ng-container>\r\n            </div>\r\n        </div>\r\n\r\n    </div>\r\n\r\n\r\n\r\n    <div class=\"container pb100\">\r\n\r\n        <ng-container\r\n            *ngIf=\"active_tab == 'Pending Dispatch' ||  active_tab == 'Dispatched' || active_tab == 'Complete Dispatch'\">\r\n\r\n            <div class=\"cs-table\">\r\n                <div class=\"sticky-head\">\r\n                    <div class=\"table-head\">\r\n                        <table>\r\n                            <tr>\r\n                                <th class=\"w40\">S.no.</th>\r\n                                <th class=\"w40\"\r\n                                    *ngIf=\"active_tab== 'Dispatched' && assign_login_data2.warehouse_flag !='1' && assign_login_data2.designation_id != '59'\">\r\n                                    &nbsp;\r\n                                </th>\r\n                                <th class=\"w60\">Date Created </th>\r\n                                <th class=\"w150\">Organization</th>\r\n                                <th class=\"w60\">Order Number</th>\r\n                                <th class=\"w200\">Customer Details</th>\r\n                                <th class=\"w80\">Account Code</th>\r\n                                <th class=\"w60 text-center\">Total Item</th>\r\n                                <th class=\"w60 text-center\">Total QTY.</th>\r\n                            </tr>\r\n                        </table>\r\n                    </div>\r\n\r\n                    <div class=\"table-head border-top\">\r\n                        <table>\r\n                            <tr>\r\n                                <th class=\"w40\">&nbsp;</th>\r\n                                <th class=\"w40\"\r\n                                    *ngIf=\"active_tab== 'Dispatched' && assign_login_data2.warehouse_flag !='1' && assign_login_data2.designation_id != '59'\">\r\n                                    &nbsp;\r\n                                </th>\r\n                                <th class=\"w60\">\r\n                                    <div class=\"th-search-acmt\">\r\n                                        <mat-form-field class=\"example-full-width cs-input\">\r\n                                            <input matInput [matDatepicker]=\"picker2\" placeholder=\"Date\"\r\n                                                name=\"date_created\" [(ngModel)]=\"filter.date_created\"\r\n                                                (ngModelChange)=\"billData('')\" readonly>\r\n                                            <mat-datepicker-toggle matSuffix [for]=\"picker2\"></mat-datepicker-toggle>\r\n                                            <mat-datepicker #picker2></mat-datepicker>\r\n                                        </mat-form-field>\r\n                                    </div>\r\n                                </th>\r\n                                <th class=\"w150\">\r\n                                    <ng-container *ngIf=\"assign_login_data2.id == '1'\">\r\n                                        <div class=\"th-search-acmt\"\r\n                                            [ngClass]=\"{'error-block' :organizationFlag== true}\">\r\n                                            <mat-form-field class=\"cs-input select-input\">\r\n                                                <mat-select (selectionChange)=\"billData('')\"\r\n                                                    placeholder=\"Organization Name\" name=\"organisation_name\"\r\n                                                    #organisation_name=\"ngModel\" [(ngModel)]=\"filter.organisation_name\">\r\n                                                    <mat-option value=\"\">All</mat-option>\r\n                                                    <mat-option *ngFor=\"let row of organisationData\"\r\n                                                        value=\"{{row.company_name}}\">{{row.company_name}}</mat-option>\r\n                                                </mat-select>\r\n                                            </mat-form-field>\r\n                                        </div>\r\n                                    </ng-container>\r\n                                </th>\r\n                                <th class=\"w60\">\r\n                                    <div class=\"th-search-acmt\">\r\n                                        <mat-form-field class=\"example-full-width cs-input\">\r\n                                            <input matInput placeholder=\"Search\" name=\"order_no\"\r\n                                                [(ngModel)]=\"filter.order_no\" (keyup.enter)=\"billData('')\">\r\n                                        </mat-form-field>\r\n                                    </div>\r\n                                </th>\r\n                                <th class=\"w200\">\r\n                                    <div class=\"th-search-acmt\">\r\n                                        <mat-form-field class=\"example-full-width cs-input\">\r\n                                            <input matInput placeholder=\"Search\" name=\"customer_name\"\r\n                                                [(ngModel)]=\"filter.customer_name\" (keyup.enter)=\"billData('')\">\r\n                                        </mat-form-field>\r\n                                    </div>\r\n                                </th>\r\n                                <th class=\"w80\">\r\n                                    <div class=\"th-search-acmt\">\r\n                                        <mat-form-field class=\"example-full-width cs-input\">\r\n                                            <input matInput placeholder=\"Search\" name=\"dr_code\"\r\n                                                [(ngModel)]=\"filter.dr_code\" (keyup.enter)=\"billData('')\">\r\n                                        </mat-form-field>\r\n                                    </div>\r\n                                </th>\r\n                                <th class=\"w60 text-center\">&nbsp;</th>\r\n                                <th class=\"w60 text-center\">&nbsp;</th>\r\n                            </tr>\r\n                        </table>\r\n                    </div>\r\n                </div>\r\n\r\n\r\n                <div class=\"table-container\">\r\n                    <div class=\"table-content\">\r\n                        <table>\r\n                            <ng-container *ngIf=\"!loader\">\r\n                                <tr *ngFor=\"let row of distributor_list;let i=index\"\r\n                                    [ngClass]=\"{'Current': serve.currentUserID == row.id}\">\r\n                                    <td class=\"w40\">{{ i + 1 + sr_no }}</td>\r\n                                    <td class=\"w40 text-center\"\r\n                                        *ngIf=\"active_tab== 'Dispatched' && assign_login_data2.warehouse_flag !='1' && assign_login_data2.designation_id != '59'\">\r\n                                        <ng-container *ngIf=\"row.gate_pass_number == 0\">\r\n                                            <mat-checkbox name=\"checked\" [(ngModel)]=\"row.checked\"\r\n                                                (change)=\"select_item($event,i,row.organisation_name)\"></mat-checkbox>\r\n                                        </ng-container>\r\n                                    </td>\r\n                                    <td class=\"w60\">{{row.date_created | date:'dd MMM yyyy , h:mm a'}}</td>\r\n                                    <td class=\"w150\">{{row.organisation_name ? row.organisation_name : '--'}}</td>\r\n                                    <td class=\"w60\">\r\n                                        <ng-container *ngIf=\"assign_login_data2.warehouse_flag !='1'\">\r\n                                            <a class=\"link-btn\" (click)=\"serve.setData(this.filter)\"\r\n                                                [routerLink]=\"[ 'dispacth-detail/', row.id ]\"\r\n                                                [queryParams]=\"{'id':row.id}\">{{row.order_no}}</a>\r\n                                        </ng-container>\r\n                                        <ng-container *ngIf=\"assign_login_data2.warehouse_flag =='1'\">\r\n                                            {{row.order_no}}\r\n                                        </ng-container>\r\n                                    </td>\r\n                                    <td class=\"w200\">{{row.customer_name | titlecase}}<ng-container\r\n                                            *ngIf=\"assign_login_data2.id== '1'\"> - {{row.contact_person_name |\r\n                                            titlecase}} <strong>({{row.mobile}})</strong> </ng-container></td>\r\n                                    <td class=\"w80\">{{row.dr_code}}</td>\r\n                                    <td class=\"w60 text-center\">{{row.order_item}}</td>\r\n                                    <td class=\"w60 text-center\">{{row.total_order_qty}}</td>\r\n                                </tr>\r\n                            </ng-container>\r\n                            <ng-container *ngIf=\"loader\">\r\n                                <tr class=\"sk-loading\" *ngFor=\"let row of [].constructor(10)\">\r\n                                    <td class=\"w40\">\r\n                                        <div>&nbsp;</div>\r\n                                    </td>\r\n                                    <td class=\"w40\"\r\n                                        *ngIf=\"active_tab== 'Dispatched' && assign_login_data2.warehouse_flag !='1' && assign_login_data2.designation_id != '59'\">\r\n                                        <div>&nbsp;</div>\r\n                                    </td>\r\n                                    <td class=\"w60\">\r\n                                        <div>&nbsp;</div>\r\n                                    </td>\r\n                                    <td class=\"w150\">\r\n                                        <div>&nbsp;</div>\r\n                                    </td>\r\n                                    <td class=\"w60\">\r\n                                        <div>&nbsp;</div>\r\n                                    </td>\r\n                                    <td class=\"w200\">\r\n                                        <div>&nbsp;</div>\r\n                                    </td>\r\n                                    <td class=\"w80\">\r\n                                        <div>&nbsp;</div>\r\n                                    </td>\r\n                                    <td class=\"w60 text-center\">\r\n                                        <div>&nbsp;</div>\r\n                                    </td>\r\n                                    <td class=\"w60 text-center\">\r\n                                        <div>&nbsp;</div>\r\n                                    </td>\r\n                                </tr>\r\n                            </ng-container>\r\n                        </table>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <ng-container *ngIf=\"distributor_list.length == 0\">\r\n                <app-not-result-found></app-not-result-found>\r\n            </ng-container>\r\n        </ng-container>\r\n\r\n\r\n        <ng-container *ngIf=\"active_tab == 'Dispatch Gatepass' || active_tab == 'Pending Gatepass'\">\r\n            <div class=\"cs-table horizontal-scroll\">\r\n                <div class=\"sticky-head\">\r\n                    <div class=\"table-head\">\r\n                        <table>\r\n                            <tr>\r\n                                <th class=\"w40\">S.no.</th>\r\n                                <th class=\"w100\">Date Created </th>\r\n                                <th class=\"w140\">Created By </th>\r\n                                <th class=\"w120\">Gatepass Number</th>\r\n                                <th class=\"w150\">Invoice Number</th>\r\n                                <th class=\"w200\">Customer Details</th>\r\n                                <th class=\"w150\">EV Bill Number</th>\r\n                                <th class=\"w160\">Driver Name</th>\r\n                                <th class=\"w100\">Mobile No.</th>\r\n                                <th class=\"w120\">Vehicle Number</th>\r\n                                <th class=\"w150\">Transportation Mode</th>\r\n                                <th class=\"w130\">Bilty Number</th>\r\n                                <th class=\"w100 text-center\" *ngIf=\"assign_login_data2.warehouse_flag !='1'\">Action</th>\r\n                            </tr>\r\n                        </table>\r\n                    </div>\r\n\r\n                    <div class=\"table-head border-top\">\r\n                        <table>\r\n                            <tr>\r\n                                <th class=\"w40\">&nbsp;</th>\r\n                                <th class=\"w100\">\r\n                                    <div class=\"th-search-acmt\">\r\n                                        <mat-form-field class=\"example-full-width cs-input\">\r\n                                            <input matInput [matDatepicker]=\"picker3\" placeholder=\"Date\"\r\n                                                name=\"date_created\" [(ngModel)]=\"filter.date_created\"\r\n                                                (ngModelChange)=\"getGatePass()\" readonly>\r\n                                            <mat-datepicker-toggle matSuffix [for]=\"picker3\"></mat-datepicker-toggle>\r\n                                            <mat-datepicker #picker3></mat-datepicker>\r\n                                        </mat-form-field>\r\n                                    </div>\r\n                                </th>\r\n                                <th class=\"w140\">\r\n                                    <div class=\"th-search-acmt\">\r\n                                        <mat-form-field class=\"example-full-width cs-input\">\r\n                                            <input matInput placeholder=\"Search\" name=\"created_by_name\"\r\n                                                [(ngModel)]=\"filter.created_by_name\" (keyup.enter)=\"getGatePass()\">\r\n                                        </mat-form-field>\r\n                                    </div>\r\n                                </th>\r\n                                <th class=\"w120\">\r\n                                    <div class=\"th-search-acmt\">\r\n                                        <mat-form-field class=\"example-full-width cs-input\">\r\n                                            <input matInput placeholder=\"Search\" name=\"gate_pass_no\"\r\n                                                [(ngModel)]=\"filter.gate_pass_no\" (keyup.enter)=\"getGatePass()\">\r\n                                        </mat-form-field>\r\n                                    </div>\r\n                                </th>\r\n                                <th class=\"w150\">\r\n                                    <div class=\"th-search-acmt\">\r\n                                        <mat-form-field class=\"example-full-width cs-input\">\r\n                                            <input matInput placeholder=\"Search\" name=\"bill_number\"\r\n                                                [(ngModel)]=\"filter.bill_number\" (keyup.enter)=\"getGatePass()\">\r\n                                        </mat-form-field>\r\n                                    </div>\r\n                                </th>\r\n                                <th class=\"w200\">&nbsp;</th>\r\n                                <th class=\"w150\">\r\n                                    <div class=\"th-search-acmt\">\r\n                                        <mat-form-field class=\"example-full-width cs-input\">\r\n                                            <input matInput placeholder=\"Search\" name=\"ev_bill_no\"\r\n                                                [(ngModel)]=\"filter.ev_bill_no\" (keyup.enter)=\"getGatePass()\">\r\n                                        </mat-form-field>\r\n                                    </div>\r\n                                </th>\r\n                                <th class=\"w160\">\r\n                                    <div class=\"th-search-acmt\">\r\n                                        <mat-form-field class=\"example-full-width cs-input\">\r\n                                            <input matInput placeholder=\"Search\" name=\"delivery_boy_name\"\r\n                                                [(ngModel)]=\"filter.delivery_boy_name\" (keyup.enter)=\"getGatePass()\">\r\n                                        </mat-form-field>\r\n                                    </div>\r\n                                </th>\r\n                                <th class=\"w100\">\r\n                                    <div class=\"th-search-acmt\">\r\n                                        <mat-form-field class=\"example-full-width cs-input\">\r\n                                            <input matInput placeholder=\"Search\" name=\"mobile_number\"\r\n                                                [(ngModel)]=\"filter.mobile_number\" (keyup.enter)=\"getGatePass()\">\r\n                                        </mat-form-field>\r\n                                    </div>\r\n                                </th>\r\n                                <th class=\"w120\">\r\n                                    <div class=\"th-search-acmt\">\r\n                                        <mat-form-field class=\"example-full-width cs-input\">\r\n                                            <input matInput placeholder=\"Search\" name=\"vehicle_number\"\r\n                                                [(ngModel)]=\"filter.vehicle_number\" (keyup.enter)=\"getGatePass()\">\r\n                                        </mat-form-field>\r\n                                    </div>\r\n                                </th>\r\n                                <th class=\"w150\">\r\n                                    <div class=\"th-search-acmt\">\r\n                                        <mat-form-field class=\"example-full-width cs-input\">\r\n                                            <input matInput placeholder=\"Search\" name=\"transportation_mode\"\r\n                                                [(ngModel)]=\"filter.transportation_mode\" (keyup.enter)=\"getGatePass()\">\r\n                                        </mat-form-field>\r\n                                    </div>\r\n                                </th>\r\n                                <th class=\"w130\">\r\n                                    <div class=\"th-search-acmt\">\r\n                                        <mat-form-field class=\"example-full-width cs-input\">\r\n                                            <input matInput placeholder=\"Search\" name=\"reference_number\"\r\n                                                [(ngModel)]=\"filter.reference_number\" (keyup.enter)=\"billData('')\">\r\n                                        </mat-form-field>\r\n                                    </div>\r\n                                </th>\r\n                                <th class=\"w100\" *ngIf=\"assign_login_data2.warehouse_flag !='1'\">&nbsp;</th>\r\n                            </tr>\r\n                        </table>\r\n                    </div>\r\n                </div>\r\n\r\n\r\n                <div class=\"table-container\">\r\n                    <div class=\"table-content\">\r\n                        <table>\r\n                            <ng-container *ngIf=\"!loader\">\r\n                                <tr *ngFor=\"let row of gate_pass_list;let i=index\">\r\n                                    <td class=\"w40\">{{ i + 1 + sr_no }}</td>\r\n                                    <td class=\"w100\">{{row.date_created | date:'dd MMM yyyy'}}</td>\r\n                                    <td class=\"w140\">{{row.created_by_name}}</td>\r\n                                    <td class=\"w120\">{{row.gate_pass_no}}</td>\r\n                                    <td class=\"w150\">{{row.invoice_number}}</td>\r\n                                    <td class=\"w200\">{{row.company_name ? (row.company_name | titlecase) : '---'}}</td>\r\n                                    <td class=\"w150\">{{row.ev_bill_no}}</td>\r\n                                    <td class=\"w160\">\r\n                                        {{row.delivery_boy_name}}\r\n                                    </td>\r\n                                    <td class=\"w100\">{{row.mobile_number}}</td>\r\n                                    <td class=\"w120\">{{row.vehicle_number}}</td>\r\n                                    <td class=\"w150\">{{row.transportation_mode}}</td>\r\n                                    <td class=\"w130\">{{row.reference_number}}</td>\r\n                                    <td class=\"w100 text-center\" *ngIf=\"assign_login_data2.warehouse_flag !='1'\">\r\n                                        <div class=\"action-button\">\r\n                                            <button (click)=\"serve.setData(this.filter)\"\r\n                                                *ngIf=\"active_tab == 'Pending Gatepass'\" mat-icon-button\r\n                                                matTooltip=\"View\" [routerLink]=\"[ 'gatepass-scanning/', row.id ]\"\r\n                                                [queryParams]=\"{'id':row.id}\">\r\n                                                <i class=\"material-icons edit\">visibility</i>\r\n                                            </button>\r\n                                            <button mat-icon-button matTooltip=\"View\"\r\n                                                *ngIf=\"active_tab == 'Dispatch Gatepass'\"\r\n                                                (click)=\"getDetails(row.id, 'detail')\">\r\n                                                <i class=\"material-icons edit\">visibility</i>\r\n                                            </button>\r\n                                            <button mat-icon-button matTooltip=\"Edit\"\r\n                                                (click)=\"getDetails(row.id, 'update')\">\r\n                                                <i class=\"material-icons edit\">edit</i>\r\n                                            </button>\r\n                                        </div>\r\n                                    </td>\r\n\r\n                                </tr>\r\n                            </ng-container>\r\n                            <ng-container *ngIf=\"loader\">\r\n                                <tr class=\"sk-loading\" *ngFor=\"let row of [].constructor(10)\">\r\n                                    <td class=\"w40\">\r\n                                        <div>&nbsp;</div>\r\n                                    </td>\r\n                                    <td class=\"w100\">\r\n                                        <div>&nbsp;</div>\r\n                                    </td>\r\n                                    <td class=\"w140\">\r\n                                        <div>&nbsp;</div>\r\n                                    </td>\r\n                                    <td class=\"w120\">\r\n                                        <div>&nbsp;</div>\r\n                                    </td>\r\n                                    <td class=\"w150\">\r\n                                        <div>&nbsp;</div>\r\n                                    </td>\r\n                                    <td class=\"w200\">\r\n                                        <div>&nbsp;</div>\r\n                                    </td>\r\n                                    <td class=\"w150\">\r\n                                        <div>&nbsp;</div>\r\n                                    </td>\r\n                                    <td class=\"w160\">\r\n                                        <div>&nbsp;</div>\r\n                                    </td>\r\n                                    <td class=\"w100\">\r\n                                        <div>&nbsp;</div>\r\n                                    </td>\r\n                                    <td class=\"w120\">\r\n                                        <div>&nbsp;</div>\r\n                                    </td>\r\n                                    <td class=\"w150\">\r\n                                        <div>&nbsp;</div>\r\n                                    </td>\r\n                                    <td class=\"w130\">\r\n                                        <div>&nbsp;</div>\r\n                                    </td>\r\n                                    <td class=\"w100 text-center\" *ngIf=\"assign_login_data2.warehouse_flag !='1'\">\r\n                                        <div>&nbsp;</div>\r\n                                    </td>\r\n                                </tr>\r\n                            </ng-container>\r\n                        </table>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <ng-container *ngIf=\"gate_pass_list && gate_pass_list.length == 0\">\r\n                <app-not-result-found></app-not-result-found>\r\n            </ng-container>\r\n        </ng-container>\r\n\r\n\r\n        <ng-container *ngIf=\"active_tab == 'Sales Retun'\">\r\n            <div class=\"cs-table\">\r\n                <div class=\"sticky-head\">\r\n                    <div class=\"table-head\">\r\n                        <table>\r\n                            <tr>\r\n                                <th class=\"w60\">Sr.No</th>\r\n                                <th class=\"w100\">Date Created</th>\r\n                                <th class=\"w160\">Created By</th>\r\n                                <th class=\"w130\">Invoice Number</th>\r\n                                <th>Distributor/Dealer Detail</th>\r\n                                <th class=\"w100 text-center\">Total Item</th>\r\n                            </tr>\r\n                        </table>\r\n                    </div>\r\n\r\n                    <div class=\"table-head border-top\">\r\n                        <table>\r\n                            <tr>\r\n                                <th class=\"w60\">&nbsp;</th>\r\n                                <th class=\"w100\">\r\n                                    <div class=\"th-search-acmt\">\r\n                                        <mat-form-field class=\"example-full-width cs-input\">\r\n                                            <input matInput [matDatepicker]=\"picker3\" placeholder=\"Date\"\r\n                                                name=\"date_created\" [(ngModel)]=\"filter.date_created\"\r\n                                                (ngModelChange)=\"getSalesReturn()\" readonly>\r\n                                            <mat-datepicker-toggle matSuffix [for]=\"picker3\"></mat-datepicker-toggle>\r\n                                            <mat-datepicker #picker3></mat-datepicker>\r\n                                        </mat-form-field>\r\n                                    </div>\r\n                                </th>\r\n                                <th class=\"w160\">\r\n                                    <div class=\"th-search-acmt\">\r\n                                        <mat-form-field class=\"example-full-width cs-input\">\r\n                                            <input matInput placeholder=\"Search\" name=\"created_by_name\"\r\n                                                [(ngModel)]=\"filter.created_by_name\" (keyup.enter)=\"getSalesReturn()\">\r\n                                        </mat-form-field>\r\n                                    </div>\r\n                                </th>\r\n                                <th class=\"w130\">\r\n                                    <div class=\"th-search-acmt\">\r\n                                        <mat-form-field class=\"example-full-width cs-input\">\r\n                                            <input matInput placeholder=\"Search\" name=\"invoice_number\"\r\n                                                [(ngModel)]=\"filter.invoice_number\" (keyup.enter)=\"getSalesReturn()\">\r\n                                        </mat-form-field>\r\n                                    </div>\r\n                                </th>\r\n                                <th>\r\n                                    <div class=\"th-search-acmt\">\r\n                                        <mat-form-field class=\"example-full-width cs-input\">\r\n                                            <input matInput placeholder=\"Search\" name=\"dr_detail\"\r\n                                                [(ngModel)]=\"filter.dr_detail\" (keyup.enter)=\"getSalesReturn()\">\r\n                                        </mat-form-field>\r\n                                    </div>\r\n                                </th>\r\n                                <th class=\"w100 text-center\">&nbsp;</th>\r\n                            </tr>\r\n                        </table>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"table-container\">\r\n                    <div class=\"table-content\">\r\n                        <table>\r\n                            <ng-container *ngIf=\"!loader\">\r\n                                <tr *ngFor=\"let row of returnData; let i = index;\"\r\n                                    [ngClass]=\"{'Current': serve.currentUserID == row.invoice_number}\">\r\n                                    <td class=\"w60\">{{ i + 1 + sr_no }}</td>\r\n                                    <td class=\"w100\">{{row.date_created | date:'dd MMM yyyy'}}</td>\r\n                                    <td class=\"w160\">{{row.created_by_name}}</td>\r\n                                    <td class=\"w130\">{{row.invoice_number}}</td>\r\n                                    <td>{{row.dr_detail ? row.dr_detail : '---'}}</td>\r\n                                    <td class=\"w100 text-center\">\r\n                                        <a class=\"link-btn\"\r\n                                            (click)=\"openDialog('sales_return', row.invoice_number);serve.setData(this.filter)\">View\r\n                                            Details</a>\r\n                                    </td>\r\n                                </tr>\r\n                            </ng-container>\r\n\r\n                            <ng-container *ngIf=\"loader\">\r\n                                <tr class=\"sk-loading\" *ngFor=\"let row of [].constructor(10)\">\r\n                                    <td class=\"w60\">\r\n                                        <div>&nbsp;</div>\r\n                                    </td>\r\n                                    <td class=\"w100\">\r\n                                        <div>&nbsp;</div>\r\n                                    </td>\r\n                                    <td class=\"w160\">\r\n                                        <div>&nbsp;</div>\r\n                                    </td>\r\n                                    <td class=\"w130\">\r\n                                        <div>&nbsp;</div>\r\n                                    </td>\r\n                                    <td>\r\n                                        <div>&nbsp;</div>\r\n                                    </td>\r\n                                    <td class=\"w100\">\r\n                                        <div>&nbsp;</div>\r\n                                    </td>\r\n                                </tr>\r\n                            </ng-container>\r\n                        </table>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <ng-container *ngIf=\"returnData.length == 0\">\r\n                <app-not-result-found></app-not-result-found>\r\n            </ng-container>\r\n        </ng-container>\r\n\r\n\r\n        <!-- <div class=\"fab-btns\">\r\n    <button class=\"pulse excel\" mat-fab color=\"primary\" [matMenuTriggerFor]=\"menu\">\r\n        <i class=\"material-icons\">apps</i>\r\n        Action\r\n    </button>\r\n    <mat-menu #menu=\"matMenu\">\r\n        <a mat-menu-item  color=\"primary\"  routerLink=\"coupon-add\" routerLinkActive=\"active\" *ngIf=\"assign_login_data2.add_coupon_code =='1'\">\r\n            <mat-icon>qr_code</mat-icon>\r\n            <span>Generate Coupon</span>\r\n        </a>\r\n        \r\n        <button mat-menu-item  routerLink=\"replacement\"  routerLinkActive=\"active\">\r\n            <mat-icon>update</mat-icon>\r\n            <span>MRP Replacement</span>\r\n        </button>\r\n        \r\n        \r\n        <button mat-menu-item  routerLink=\"company-return\"  routerLinkActive=\"active\">\r\n            <mat-icon>update</mat-icon>\r\n            <span>Sales Return</span>\r\n        </button>\r\n        \r\n        \r\n        <button mat-menu-item (click)=\"downloadExcel();\" *ngIf=\"returnData.length > 0 && active_tab== 'Sales Retun'\">\r\n            <mat-icon>download</mat-icon>\r\n            <span>Download excel</span>\r\n        </button>\r\n    </mat-menu>\r\n</div> -->\r\n    </div>\r\n\r\n</div>"

/***/ }),

/***/ "./src/app/company-dispatch/company-dispatch-list/company-dispatch-list.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/company-dispatch/company-dispatch-list/company-dispatch-list.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: CompanyDispatchListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanyDispatchListComponent", function() { return CompanyDispatchListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! moment */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var src_services_DatabaseService__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/_services/DatabaseService */ "./src/_services/DatabaseService.ts");
/* harmony import */ var _dialog_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../dialog.component */ "./src/app/dialog.component.ts");
/* harmony import */ var src_app_localstorage_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/localstorage.service */ "./src/app/localstorage.service.ts");
/* harmony import */ var ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ng6-toastr-notifications */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/ng6-toastr-notifications/fesm5/ng6-toastr-notifications.js");
/* harmony import */ var _gatepass_add_gatepass_add_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../gatepass-add/gatepass-add.component */ "./src/app/company-dispatch/gatepass-add/gatepass-add.component.ts");










var CompanyDispatchListComponent = /** @class */ (function () {
    function CompanyDispatchListComponent(serve, route, ActivatedRoute, dialog, session, alrt, toast) {
        this.serve = serve;
        this.route = route;
        this.ActivatedRoute = ActivatedRoute;
        this.dialog = dialog;
        this.session = session;
        this.alrt = alrt;
        this.toast = toast;
        this.active_tab = 'Pending Dispatch';
        this.excelLoader = false;
        this.value = {};
        this.distributor_list = [];
        this.sr_no = 0;
        this.pagenumber = 1;
        this.start = 0;
        this.loader = false;
        this.data = [];
        this.filter = {};
        this.login_data = [];
        this.skelton = {};
        this.add = {};
        this.assign_login_data2 = [];
        this.all_count = {};
        this.assign_login_data = [];
        this.downurl = '';
        this.gatePassAssign = [];
        this.gatePassUnassign = [];
        this.returnData = [];
        this.organisationData = [];
        this.organizationFlag = false;
        this.btnFlag = true;
        this.gate_pass_list = [];
        this.downurl = serve.downloadUrl;
        this.page_limit = serve.pageLimit;
        this.today_date = new Date();
        this.assign_login_data = this.session.getSession();
        this.loginData = this.session.getSession();
        this.loginData = this.loginData.value;
        this.loginData = this.loginData.data;
        this.assign_login_data = this.assign_login_data.value;
        this.assign_login_data2 = this.assign_login_data.data;
        this.date = new Date();
        this.assign_login_data = this.assign_login_data.assignModule;
    }
    CompanyDispatchListComponent.prototype.ngOnInit = function () {
        this.filter = this.serve.getData();
        this.login_data = this.session.getSession();
        this.login_data = this.login_data.value.data;
        this.skelton = new Array(10);
        if (this.login_data.access_level != '1') {
            this.login_dr_id = this.login_data.id;
        }
        // this.ActivatedRoute.params.subscribe(params => {
        //   this.type_id = params.id;
        //   this.type = params.type;
        // });
    };
    CompanyDispatchListComponent.prototype.ngAfterViewInit = function () {
        if (this.assign_login_data2.id != '1' && this.assign_login_data2.view_dispatch_packing == '1' && this.assign_login_data2.add_dispatch_packing == '1') {
            this.active_tab = 'Pending Dispatch';
        }
        if (this.assign_login_data2.id != '1' && this.assign_login_data2.view_dispatch_billing == '1' && this.assign_login_data2.add_dispatch_billing == '1') {
            this.active_tab = 'Dispatched';
        }
        if (this.assign_login_data2.id != '1' && this.assign_login_data2.view_dispatch_billing == '1' && this.assign_login_data2.designation_id == '59') {
            this.active_tab = 'Dispatched';
        }
        if (this.assign_login_data2.id != '1' && this.assign_login_data2.view_dispatch_guard == '1' && this.assign_login_data2.add_dispatch_guard == '1') {
            this.active_tab = 'Pending Gatepass';
        }
        if (this.filter.active_tab && (this.filter.active_tab == 'Pending Gatepass' || this.filter.active_tab == 'Dispatch Gatepass')) {
            this.active_tab = this.filter.active_tab;
            this.getGatePass('');
        }
        else if (this.filter.active_tab && (this.filter.active_tab == 'Pending Dispatch' || this.filter.active_tab == 'Dispatched')) {
            this.active_tab = this.filter.active_tab;
            this.billData('');
        }
        else if ((this.assign_login_data2.view_dispatch_packing == '1' && this.assign_login_data2.add_dispatch_packing == '1' || this.assign_login_data2.view_dispatch_billing == '1' && this.assign_login_data2.add_dispatch_billing == '1') && (this.active_tab == 'Pending Dispatch' || this.active_tab == 'Dispatched')) {
            this.billData('');
        }
        else if ((this.assign_login_data2.view_dispatch_guard == '1' && this.assign_login_data2.add_dispatch_guard == '1') && (this.active_tab == 'Pending Gatepass' || this.active_tab == 'Dispatched Gatepass')) {
            this.getGatePass('');
        }
        else {
            this.billData('');
        }
    };
    CompanyDispatchListComponent.prototype.pervious = function (active_tab) {
        this.start = this.start - this.page_limit;
        if (active_tab == 'Dispatch Gatepass' || active_tab == 'Pending Gatepass') {
            this.getGatePass('');
        }
        else if (active_tab == 'Sales Retun') {
            this.getSalesReturn('');
        }
        else {
            this.billData('');
        }
    };
    CompanyDispatchListComponent.prototype.nextPage = function (active_tab) {
        this.start = this.start + this.page_limit;
        if (active_tab == 'Dispatch Gatepass' || active_tab == 'Pending Gatepass') {
            this.getGatePass('');
        }
        else if (active_tab == 'Sales Retun') {
            this.getSalesReturn('');
        }
        else {
            this.billData('');
        }
    };
    CompanyDispatchListComponent.prototype.getCompanyData = function () {
        var _this = this;
        this.serve.post_rqst({}, "Order/organizationName").subscribe((function (response) {
            if (response['statusCode'] == 200) {
                if (_this.assign_login_data2.assign_company == '1') {
                    _this.filter.organisation_name = response['result']['0']['company_name'];
                }
                else if (_this.assign_login_data2.assign_company == '2') {
                    _this.filter.organisation_name = response['result']['1']['company_name'];
                }
                else {
                    _this.organisationData = response['result'];
                }
            }
            else {
                _this.toast.errorToastr(response['statusMsg']);
            }
        }));
    };
    CompanyDispatchListComponent.prototype.billData = function (action) {
        var _this = this;
        if (action === void 0) { action = ''; }
        this.loader = true;
        this.gatePassAssign = [];
        if (action == "refresh") {
            this.filter = {};
            this.distributor_list = [];
            this.start = 0;
        }
        if (this.pagenumber > this.total_page) {
            this.pagenumber = this.total_page;
            this.start = this.pageCount - this.page_limit;
        }
        if (this.start < 0) {
            this.start = 0;
        }
        if (this.filter.date_created) {
            this.filter.date_created = moment__WEBPACK_IMPORTED_MODULE_4__(this.filter.date_created).format('YYYY-MM-DD');
        }
        if (this.filter.billing_date) {
            this.filter.billing_date = moment__WEBPACK_IMPORTED_MODULE_4__(this.filter.billing_date).format('YYYY-MM-DD');
        }
        this.filter.active_tab = this.active_tab;
        this.organizationFlag = false;
        this.serve.post_rqst({ 'branch_code': this.loginData.branch_code, 'filter': this.filter, 'start': this.start, 'pagelimit': this.page_limit }, "Dispatch/tallyInvoiceCreditBillingListing")
            .subscribe((function (result) {
            if (result['statusCode'] == 200) {
                _this.distributor_list = (result['credit_billing_list']);
                _this.dispatchCount = result['dispatch'];
                _this.pendingDispatchCount = result['pendingDispatch'];
                _this.getCompanyData();
                _this.loader = false;
                if (_this.active_tab == 'Pending Dispatch') {
                    _this.pageCount = result['pendingDispatch'];
                }
                if (_this.active_tab == 'Dispatched' || _this.active_tab == 'Complete Dispatch') {
                    _this.pageCount = result['dispatch'];
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
                _this.serve.count_list();
            }
            else {
                _this.loader = false;
                _this.toast.errorToastr(result['statusMsg']);
            }
        }));
    };
    CompanyDispatchListComponent.prototype.getGatePass = function (action) {
        var _this = this;
        if (action === void 0) { action = ''; }
        if (action == "refresh") {
            this.filter = {};
            this.gate_pass_list = [];
            this.start = 0;
        }
        if (this.pagenumber > this.total_page) {
            this.pagenumber = this.total_page;
            this.start = this.pageCount - this.page_limit;
        }
        if (this.start < 0) {
            this.start = 0;
        }
        if (this.filter.date_created) {
            this.filter.date_created = moment__WEBPACK_IMPORTED_MODULE_4__(this.filter.date_created).format('YYYY-MM-DD');
        }
        this.loader = true;
        this.filter.active_tab = this.active_tab;
        this.serve.post_rqst({ 'branch_code': this.loginData.branch_code, 'filter': this.filter, 'start': this.start, 'pagelimit': this.page_limit }, "Dispatch/getGatePassList")
            .subscribe((function (result) {
            if (result['statusCode'] == 200) {
                _this.gate_pass_list = (result['result']);
                _this.pendingGatepassCount = result['pendingGatepass'];
                _this.dispatchGatepassCount = result['dispatchGatepass'];
                _this.loader = false;
                if (_this.active_tab == 'Pending Gatepass') {
                    _this.pageCount = result['pendingGatepass'];
                }
                if (_this.active_tab == 'Dispatch Gatepass') {
                    _this.pageCount = result['dispatchGatepass'];
                }
                // if(this.active_tab == 'Dispatch Gatepass'){
                //   this.pageCount = result['dispatchGatepass'];
                // }
                _this.total_list = (result['overall_total_sum']);
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
                _this.serve.count_list();
            }
            else {
                _this.loader = false;
                _this.toast.errorToastr(result['statusMsg']);
            }
        }));
    };
    CompanyDispatchListComponent.prototype.getSalesReturn = function (action) {
        var _this = this;
        if (action === void 0) { action = ''; }
        if (action == "refresh") {
            this.filter = {};
            this.gate_pass_list = [];
            this.start = 0;
        }
        if (this.pagenumber > this.total_page) {
            this.pagenumber = this.total_page;
            this.start = this.pageCount - this.page_limit;
        }
        if (this.start < 0) {
            this.start = 0;
        }
        if (this.filter.date_created) {
            this.filter.date_created = moment__WEBPACK_IMPORTED_MODULE_4__(this.filter.date_created).format('YYYY-MM-DD');
        }
        this.loader = true;
        this.filter.active_tab = this.active_tab;
        this.serve.post_rqst({ 'branch_code': this.loginData.branch_code, 'filter': this.filter, 'start': this.start, 'pagelimit': this.page_limit }, "Dispatch/getSalesReturnList")
            .subscribe((function (result) {
            if (result['statusCode'] == 200) {
                _this.returnData = result['result'];
                _this.loader = false;
                _this.pageCount = result['count'];
                _this.total_list = (result['overall_total_sum']);
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
                _this.serve.count_list();
            }
            else {
                _this.loader = false;
                _this.toast.errorToastr(result['statusMsg']);
            }
        }));
    };
    CompanyDispatchListComponent.prototype.select_item = function (event, indx, organisation_name) {
        var _this = this;
        if (!this.filter.organisation_name && event.checked) {
            this.toast.errorToastr('Please select organization filter');
            this.organizationFlag = true;
            return;
        }
        if (this.gatePassAssign.length) {
            var index = this.gatePassAssign.findIndex(function (row) { return row.dr_id != _this.distributor_list[indx].dr_id; });
            if (index != -1) {
                this.toast.errorToastr('Can not generate gatepass different Customer');
                this.btnFlag = false;
                return;
            }
        }
        if (event.checked) {
            if (this.filter.organisation_name != organisation_name) {
                this.toast.errorToastr('Organization filter not match');
                this.organizationFlag = true;
                return;
            }
            else {
                this.gatePassAssign.push(this.distributor_list[indx]);
                var index = this.gatePassUnassign.findIndex(function (row) { return row.id == _this.distributor_list[indx].id; });
                this.btnFlag = true;
                this.gatePassUnassign.splice(index, 1);
            }
        }
        else {
            var index = this.gatePassAssign.findIndex(function (row) { return row.id == _this.distributor_list[indx].id; });
            this.gatePassAssign.splice(index, 1);
            this.btnFlag = true;
            this.gatePassUnassign.push(this.distributor_list[indx]);
            this.organizationFlag = false;
        }
    };
    CompanyDispatchListComponent.prototype.openDialog = function (type, number) {
        var _this = this;
        var dialogRef = this.alrt.open(_gatepass_add_gatepass_add_component__WEBPACK_IMPORTED_MODULE_9__["GatepassAddComponent"], {
            width: '1024px',
            panelClass: 'cs-modal',
            disableClose: true,
            data: {
                'model_type': type,
                'gatePassAssign': this.gatePassAssign,
                'invoice_number': number,
            }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result != false) {
                _this.billData('');
                _this.gatePassAssign = [];
            }
        });
    };
    CompanyDispatchListComponent.prototype.getDetails = function (id, type) {
        var _this = this;
        var dialogRef = this.alrt.open(_gatepass_add_gatepass_add_component__WEBPACK_IMPORTED_MODULE_9__["GatepassAddComponent"], {
            width: '1024px',
            panelClass: 'cs-modal',
            disableClose: true,
            data: {
                'model_type': type,
                'gatepass_id': id,
            }
        });
        dialogRef.afterClosed().subscribe(function (result) {
            if (result != false) {
                _this.getGatePass('');
            }
        });
    };
    CompanyDispatchListComponent.prototype.refresh = function (blnk, active_tab) {
        this.start = 0;
        this.filter = {};
        this.organizationFlag = false;
        if (active_tab == 'Dispatch Gatepass' || active_tab == 'Pending Gatepass') {
            this.getGatePass('');
        }
        else if (active_tab == 'Sales Retun') {
            this.getSalesReturn('');
        }
        else {
            this.billData('');
        }
        this.gatePassAssign = [];
    };
    CompanyDispatchListComponent.prototype.downloadExcel = function () {
        var _this = this;
        this.serve.post_rqst({ 'branch_code': this.loginData.branch_code, 'filter': this.filter, }, "Excel/salesReturnCsv").subscribe((function (result) {
            if (result['msg'] == true) {
                window.open(_this.downurl + result['filename']);
            }
            else {
            }
        }));
    };
    CompanyDispatchListComponent.prototype.print_process_scanning = function (id) {
        this.route.navigate(['/gatepass-scanning/' + id]);
    };
    CompanyDispatchListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-company-dispatch-list',
            template: __webpack_require__(/*! ./company-dispatch-list.component.html */ "./src/app/company-dispatch/company-dispatch-list/company-dispatch-list.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_services_DatabaseService__WEBPACK_IMPORTED_MODULE_5__["DatabaseService"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"],
            _dialog_component__WEBPACK_IMPORTED_MODULE_6__["DialogComponent"], src_app_localstorage_service__WEBPACK_IMPORTED_MODULE_7__["sessionStorage"], _angular_material__WEBPACK_IMPORTED_MODULE_2__["MatDialog"], ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_8__["ToastrManager"]])
    ], CompanyDispatchListComponent);
    return CompanyDispatchListComponent;
}());



/***/ }),

/***/ "./src/app/company-dispatch/company-dispatch/company-dispatch.module.ts":
/*!******************************************************************************!*\
  !*** ./src/app/company-dispatch/company-dispatch/company-dispatch.module.ts ***!
  \******************************************************************************/
/*! exports provided: CompanyDispatchModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanyDispatchModule", function() { return CompanyDispatchModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_auth_component_guard__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/auth-component.guard */ "./src/app/auth-component.guard.ts");
/* harmony import */ var _gatepass_add_gatepass_add_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../gatepass-add/gatepass-add.component */ "./src/app/company-dispatch/gatepass-add/gatepass-add.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var angular_ng_autocomplete__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! angular-ng-autocomplete */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/angular-ng-autocomplete/fesm5/angular-ng-autocomplete.js");
/* harmony import */ var ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ng-multiselect-dropdown */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/ng-multiselect-dropdown/fesm5/ng-multiselect-dropdown.js");
/* harmony import */ var ngx_mat_select_search__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ngx-mat-select-search */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/ngx-mat-select-search/fesm5/ngx-mat-select-search.js");
/* harmony import */ var src_app_app_utility_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! src/app/app-utility.module */ "./src/app/app-utility.module.ts");
/* harmony import */ var src_app_material__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! src/app/material */ "./src/app/material.ts");
/* harmony import */ var _techiediaries_ngx_qrcode__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @techiediaries/ngx-qrcode */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@techiediaries/ngx-qrcode/fesm5/techiediaries-ngx-qrcode.js");
/* harmony import */ var ngx_barcode__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ngx-barcode */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/ngx-barcode/index.js");
/* harmony import */ var src_app_coupon_coupon_code_add_coupon_code_add_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! src/app/coupon/coupon-code-add/coupon-code-add.component */ "./src/app/coupon/coupon-code-add/coupon-code-add.component.ts");
/* harmony import */ var src_app_coupon_coupon_code_detail_coupon_code_detail_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! src/app/coupon/coupon-code-detail/coupon-code-detail.component */ "./src/app/coupon/coupon-code-detail/coupon-code-detail.component.ts");
/* harmony import */ var _company_dispatch_list_company_dispatch_list_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../company-dispatch-list/company-dispatch-list.component */ "./src/app/company-dispatch/company-dispatch-list/company-dispatch-list.component.ts");
/* harmony import */ var _company_dispatch_detail_company_dispatch_detail_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../company-dispatch-detail/company-dispatch-detail.component */ "./src/app/company-dispatch/company-dispatch-detail/company-dispatch-detail.component.ts");
/* harmony import */ var _company_sales_return_company_sales_return_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../company-sales-return/company-sales-return.component */ "./src/app/company-dispatch/company-sales-return/company-sales-return.component.ts");
/* harmony import */ var _add_grand_master_box_add_grand_master_box_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../add-grand-master-box/add-grand-master-box.component */ "./src/app/company-dispatch/add-grand-master-box/add-grand-master-box.component.ts");
/* harmony import */ var _view_master_box_dispatch_detail_view_master_box_dispatch_detail_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../view-master-box-dispatch-detail/view-master-box-dispatch-detail.component */ "./src/app/company-dispatch/view-master-box-dispatch-detail/view-master-box-dispatch-detail.component.ts");
/* harmony import */ var _gatepass_scanning_gatepass_scanning_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../gatepass-scanning/gatepass-scanning.component */ "./src/app/company-dispatch/gatepass-scanning/gatepass-scanning.component.ts");















// import { ManualDispatchListComponent } from 'src/app/manual-dispatch/manual-dispatch-list/manual-dispatch-list.component';
// import { SalesReturnListComponent } from 'src/app/sales-return/sales-return-list/sales-return-list.component';








var dispatchRoutes = [
    {
        path: "", children: [
            { path: "", component: _company_dispatch_list_company_dispatch_list_component__WEBPACK_IMPORTED_MODULE_17__["CompanyDispatchListComponent"], canActivate: [src_app_auth_component_guard__WEBPACK_IMPORTED_MODULE_4__["AuthComponentGuard"]], data: { expectedRole: ['1'] } },
            // { path: "manual-dispatch", component: ManualDispatchListComponent,canActivate:[AuthComponentGuard], data:{ expectedRole: ['1']}},
            { path: "company-return", component: _company_sales_return_company_sales_return_component__WEBPACK_IMPORTED_MODULE_19__["CompanySalesReturnComponent"], canActivate: [src_app_auth_component_guard__WEBPACK_IMPORTED_MODULE_4__["AuthComponentGuard"]], data: { expectedRole: ['1'] } },
            {
                path: "coupon-add", children: [
                    { path: '', component: src_app_coupon_coupon_code_add_coupon_code_add_component__WEBPACK_IMPORTED_MODULE_15__["CouponCodeAddComponent"], canActivate: [src_app_auth_component_guard__WEBPACK_IMPORTED_MODULE_4__["AuthComponentGuard"]], data: { expectedRole: ['1'] } },
                    { path: "coupon-code-detail/:id", component: src_app_coupon_coupon_code_detail_coupon_code_detail_component__WEBPACK_IMPORTED_MODULE_16__["CouponCodeDetailComponent"], canActivate: [src_app_auth_component_guard__WEBPACK_IMPORTED_MODULE_4__["AuthComponentGuard"]], data: { expectedRole: ['1'] } },
                ]
            },
            {
                path: "dispacth-detail/:id", children: [
                    { path: '', component: _company_dispatch_detail_company_dispatch_detail_component__WEBPACK_IMPORTED_MODULE_18__["CompanyDispatchDetailComponent"], canActivate: [src_app_auth_component_guard__WEBPACK_IMPORTED_MODULE_4__["AuthComponentGuard"]], data: { expectedRole: ['1'] } },
                ]
            },
            {
                path: "gatepass-scanning/:id", children: [
                    { path: '', component: _gatepass_scanning_gatepass_scanning_component__WEBPACK_IMPORTED_MODULE_22__["GatepassScanningComponent"], canActivate: [src_app_auth_component_guard__WEBPACK_IMPORTED_MODULE_4__["AuthComponentGuard"]], data: { expectedRole: ['1'] } },
                ]
            },
        ]
    },
];
var CompanyDispatchModule = /** @class */ (function () {
    function CompanyDispatchModule() {
    }
    CompanyDispatchModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_company_dispatch_list_company_dispatch_list_component__WEBPACK_IMPORTED_MODULE_17__["CompanyDispatchListComponent"], _company_sales_return_company_sales_return_component__WEBPACK_IMPORTED_MODULE_19__["CompanySalesReturnComponent"], _company_dispatch_detail_company_dispatch_detail_component__WEBPACK_IMPORTED_MODULE_18__["CompanyDispatchDetailComponent"], _gatepass_scanning_gatepass_scanning_component__WEBPACK_IMPORTED_MODULE_22__["GatepassScanningComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forChild(dispatchRoutes),
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"],
                ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_9__["NgMultiSelectDropDownModule"],
                src_app_material__WEBPACK_IMPORTED_MODULE_12__["MaterialModule"],
                angular_ng_autocomplete__WEBPACK_IMPORTED_MODULE_8__["AutocompleteLibModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatDialogModule"],
                ngx_mat_select_search__WEBPACK_IMPORTED_MODULE_10__["NgxMatSelectSearchModule"],
                src_app_app_utility_module__WEBPACK_IMPORTED_MODULE_11__["AppUtilityModule"],
                _techiediaries_ngx_qrcode__WEBPACK_IMPORTED_MODULE_13__["NgxQRCodeModule"],
                ngx_barcode__WEBPACK_IMPORTED_MODULE_14__["NgxBarcodeModule"],
            ],
            entryComponents: [_gatepass_add_gatepass_add_component__WEBPACK_IMPORTED_MODULE_5__["GatepassAddComponent"], _add_grand_master_box_add_grand_master_box_component__WEBPACK_IMPORTED_MODULE_20__["AddGrandMasterBoxComponent"], _view_master_box_dispatch_detail_view_master_box_dispatch_detail_component__WEBPACK_IMPORTED_MODULE_21__["ViewMasterBoxDispatchDetailComponent"]]
        })
    ], CompanyDispatchModule);
    return CompanyDispatchModule;
}());



/***/ }),

/***/ "./src/app/company-dispatch/company-sales-return/company-sales-return.component.html":
/*!*******************************************************************************************!*\
  !*** ./src/app/company-dispatch/company-sales-return/company-sales-return.component.html ***!
  \*******************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-container\" >\r\n  <div class=\"tools-container\">\r\n      \r\n      <a mat-icon-button matTooltip=\"Back\" (click)=\"back()\">\r\n          <i class=\"material-icons\">arrow_back</i>\r\n      </a>\r\n      <h2>Add Sales Return</h2>\r\n      \r\n  </div>\r\n  \r\n  <div class=\"container pl10 pr10 pb50 pt10\">\r\n      \r\n          <div class=\"row \">\r\n              <div class=\"col s12\">\r\n                  <div class=\"card pb0\">\r\n                      <div class=\"card-body cs-form\">\r\n                          <div class=\"row\">\r\n                              <div class=\"col s12 m6 l6\">\r\n                                  <mat-form-field  appearance=\"outline\">\r\n                                      <mat-label>Coupon Number</mat-label>\r\n                                      <input matInput placeholder=\"Type Here ...\"  name=\"coupon_number\" #coupon_number=\"ngModel\" [(ngModel)]=\"couponNumber.coupon_number\"  minlength=\"16\" maxlength=\"16\" min=\"0\"  appPrefixFocusAndSelect #focusInput   (ngModelChange)=\"checkCoupon(couponNumber.coupon_number)\">\r\n                                  </mat-form-field>\r\n                              </div>\r\n                          </div>\r\n                      </div>\r\n                  </div>\r\n              </div>\r\n          </div>\r\n          \r\n          <form #f=\"ngForm\" (ngSubmit)=\" f.valid && submitDetail()\">\r\n              <ng-container *ngIf=\"couponList.length > 0;\">\r\n                  \r\n                  \r\n                  <div class=\"cs-table\" >\r\n                      <div class=\"sticky-head\">\r\n                          <div class=\"table-head\">\r\n                              <table>\r\n                                  <tr>\r\n                                      <th class=\"w60\">Sr.No</th>\r\n                                      <th class=\"w140\">Coupon Code</th>\r\n                                      <th class=\"w100\">Coupon Type</th>\r\n                                      <th class=\"w100\">Packing Size</th>\r\n                                      <th class=\"w120\">Dispatch Date</th>\r\n                                      <th class=\"w130\">Dispatch Type</th>\r\n                                      <th class=\"w130\">Invoice Number</th>\r\n                                      <th>Distributor/Dealer Detail</th>\r\n                                      <th class=\"w120 text-center\">Scanning Status</th>\r\n                                      <th class=\"w70 text-center\">Action</th>\r\n                                  </tr>\r\n                              </table>\r\n                          </div>\r\n                      </div>\r\n                      \r\n                      <div class=\"table-container\">\r\n                          <div class=\"table-content\">\r\n                              <table>\r\n                                  <tr *ngFor=\"let row of couponList; let i = index;\">\r\n                                      <td class=\"w60\">{{i+1}}</td>\r\n                                      <td class=\"w140\">{{row.coupon_code}}</td>\r\n                                      <td class=\"w100\">{{row.coupon_type == 'Master Box' ? 'Box' :'Product'}}</td>\r\n                                      <td class=\"w100\">{{row.master_packing_size}}</td>\r\n                                      <td class=\"w120\">{{row.dispatch_date | date:'d MMM y'}}</td>\r\n                                      <td class=\"w130\">{{row.dispatch_type}}</td>\r\n                                      <td class=\"w130\">{{row.invoice_number}}</td>\r\n                                      <td>{{row.dr_detail}}</td>\r\n                                      <td class=\"w120 text-center\">{{row.scan_status}}</td>\r\n                                      <td class=\"w70 text-center\">\r\n                                          <div class=\"action-button\">\r\n                                              <ng-container *ngIf=\"row.coupon_type == 'Master Box'\"> \r\n                                                  <button  mat-icon-button  matTooltip=\"View\"  (click)=\"openDialog(row.id)\">\r\n                                                      <i class=\"material-icons edit\">visibility</i>\r\n                                                  </button>\r\n                                              </ng-container>\r\n                                              <button  mat-icon-button  matTooltip=\"Delete\"  (click)=\"deleteCoupon(i)\">\r\n                                                  <i class=\"material-icons del\">delete</i>\r\n                                              </button>\r\n                                          </div>\r\n                                      </td>\r\n                                  </tr>\r\n                              </table>\r\n                          </div>\r\n                      </div>\r\n                  </div>\r\n                  \r\n                  <div class=\"row\">\r\n                      <div class=\"col s12\">\r\n                          <div class=\"text-right\">\r\n                              <button [ngClass]=\"{'loading': savingFlag == true}\" mat-raised-button color=\"accent\" type=\"submit\" [disabled]=\"savingFlag == true\">\r\n                                  {{savingFlag == true ? 'Please Wait' : 'Save'}}\r\n                              </button>\r\n                          </div>\r\n                      </div>\r\n                  </div>\r\n              </ng-container>\r\n          </form>\r\n  </div>\r\n</div>\r\n\r\n"

/***/ }),

/***/ "./src/app/company-dispatch/company-sales-return/company-sales-return.component.ts":
/*!*****************************************************************************************!*\
  !*** ./src/app/company-dispatch/company-sales-return/company-sales-return.component.ts ***!
  \*****************************************************************************************/
/*! exports provided: CompanySalesReturnComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CompanySalesReturnComponent", function() { return CompanySalesReturnComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_services_DatabaseService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/_services/DatabaseService */ "./src/_services/DatabaseService.ts");
/* harmony import */ var ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng6-toastr-notifications */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/ng6-toastr-notifications/fesm5/ng6-toastr-notifications.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var src_app_localstorage_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/localstorage.service */ "./src/app/localstorage.service.ts");








var CompanySalesReturnComponent = /** @class */ (function () {
    function CompanySalesReturnComponent(location, session, service, dialog, route, rout, toast) {
        this.location = location;
        this.session = session;
        this.service = service;
        this.dialog = dialog;
        this.route = route;
        this.rout = rout;
        this.toast = toast;
        this.data = {};
        this.couponNumber = {};
        this.savingFlag = false;
        this.filter = {};
        this.distributorData = [];
        this.returnData = [];
        this.loader = false;
        this.sr_no = 0;
        this.pagenumber = 1;
        this.start = 0;
        this.active_tab = 'Sales Return';
        this.downurl = '';
        this.couponList = [];
        this.downurl = service.downloadUrl;
        this.loginData = this.session.getSession();
        this.loginData = this.loginData.value;
        this.loginData = this.loginData.data;
        this.userData = JSON.parse(localStorage.getItem('st_user'));
        this.data.created_by_id = this.userData['data']['id'];
        this.data.created_by_name = this.userData['data']['name'];
        this.page_limit = service.pageLimit;
        this.getDistributor('');
    }
    CompanySalesReturnComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        setTimeout(function () { return _this.inputEl.nativeElement.focus(); });
    };
    CompanySalesReturnComponent.prototype.ngOnInit = function () {
    };
    CompanySalesReturnComponent.prototype.getDistributor = function (searcValue) {
        var _this = this;
        this.filter.search = searcValue;
        this.service.post_rqst({ 'filter': this.filter }, 'CouponCode/allDr').subscribe(function (result) {
            if (result['statusCode'] == 200) {
                _this.distributorData = result['result'];
            }
            else {
                _this.toast.errorToastr(result['statusMsg']);
            }
        }, function (error) {
        });
    };
    CompanySalesReturnComponent.prototype.findDr = function (id) {
        var index = this.distributorData.findIndex(function (row) { return row.id == id; });
        if (index != -1) {
            this.data.company_name = this.distributorData[index].company_name;
            this.data.dr_code = this.distributorData[index].dr_code;
        }
    };
    CompanySalesReturnComponent.prototype.checkCoupon = function (number) {
        var _this = this;
        if (number.length == 16) {
            if (number == undefined) {
                this.toast.errorToastr("Enter coupon code number");
                return;
            }
            if (number == '') {
                this.toast.errorToastr("Enter coupon code number");
                return;
            }
            this.service.post_rqst({ 'coupon_code': number }, 'CouponCode/checkCouponCodeForSalesReturn').subscribe(function (result) {
                if (result['statusCode'] == 200) {
                    _this.couponNumber.coupon_number = '';
                    var temData_1 = result['data'];
                    if (_this.couponList != '') {
                        var index = _this.couponList.findIndex(function (row) { return row.coupon_code == temData_1.coupon_code; });
                        if (index != -1) {
                            if (_this.couponList[index].coupon_code === temData_1.coupon_code) {
                                _this.toast.errorToastr('Coupon code already exists');
                                return;
                            }
                        }
                    }
                    _this.couponList.push({ 'id': temData_1.id, 'coupon_code': temData_1.coupon_code, 'coupon_type': temData_1.coupon_type, 'dispatch_date': temData_1.dispatch_date, 'dispatch_type': temData_1.dispatch_type, 'invoice_number': temData_1.invoice_number, 'dr_detail': temData_1.dr_detail, 'scan_status': temData_1.scan_status, 'master_packing_size': temData_1.master_packing_size });
                }
                else {
                    _this.couponNumber.coupon_number = '';
                    _this.toast.errorToastr(result['statusMsg']);
                }
            }, function (error) {
            });
        }
    };
    CompanySalesReturnComponent.prototype.deleteCoupon = function (i) {
        this.couponList.splice(i, 1);
        this.toast.successToastr('Coupon code delete successfully');
    };
    CompanySalesReturnComponent.prototype.submitDetail = function () {
        var _this = this;
        this.data.couponData = this.couponList;
        this.savingFlag = true;
        this.service.post_rqst({ 'data': this.data }, 'CouponCode/salesReturn').subscribe(function (result) {
            if (result['statusCode'] == 200) {
                _this.toast.successToastr(result['statusMsg']);
                _this.rout.navigate(['/company-dispatch']);
                _this.savingFlag = false;
            }
            else {
                _this.toast.errorToastr(result['statusMsg']);
                _this.savingFlag = false;
            }
        });
    };
    CompanySalesReturnComponent.prototype.back = function () {
        this.location.back();
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('focusInput'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], CompanySalesReturnComponent.prototype, "inputEl", void 0);
    CompanySalesReturnComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-company-sales-return',
            template: __webpack_require__(/*! ./company-sales-return.component.html */ "./src/app/company-dispatch/company-sales-return/company-sales-return.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_6__["Location"], src_app_localstorage_service__WEBPACK_IMPORTED_MODULE_7__["sessionStorage"], src_services_DatabaseService__WEBPACK_IMPORTED_MODULE_2__["DatabaseService"], _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatDialog"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_3__["ToastrManager"]])
    ], CompanySalesReturnComponent);
    return CompanySalesReturnComponent;
}());



/***/ }),

/***/ "./src/app/company-dispatch/gatepass-scanning/gatepass-scanning.component.html":
/*!*************************************************************************************!*\
  !*** ./src/app/company-dispatch/gatepass-scanning/gatepass-scanning.component.html ***!
  \*************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-container\">\r\n  <div class=\"tools-container\">\r\n    <a mat-icon-button matTooltip=\"Back\" routerLink=\"/company-dispatch\">\r\n      <i class=\"material-icons\">arrow_back</i>\r\n    </a>\r\n    <h2>Gatepass Scannning</h2>\r\n    <div class=\"left-auto\" *ngIf=\"enable\">\r\n      <button class=\"mr16\" matTooltip=\"Print\" (click)=\"scanningSave(gatepassdetaildata.id)\" mat-raised-button\r\n        color=\"primary\" [ngClass]=\"{'loading': savingFlag == true}\" [disabled]=\"savingFlag == true\">\r\n        <i class=\"material-icons\">print</i>\r\n        Print Gate Pass</button>\r\n    </div>\r\n  </div>\r\n\r\n  <div class=\"container pt10 pl10 pr10 pb50\">\r\n    <div class=\"row\">\r\n      <div class=\"col s12 m6 l12\">\r\n        <div class=\"card\" *ngIf=\"!skLoading\">\r\n          <div class=\"card-head\">\r\n            <h2>Details</h2>\r\n          </div>\r\n          <div class=\"card-body\">\r\n            <div class=\"grid-box\">\r\n              <div class=\"block-feilds\">\r\n                <span>Date Created</span>\r\n                <p>{{gatepassdetaildata.date_created | date:'d MMM y'}}</p>\r\n              </div>\r\n              <div class=\"block-feilds\">\r\n                <span>Gatepass Number</span>\r\n                <p>{{gatepassdetaildata.gate_pass_no}}</p>\r\n              </div>\r\n\r\n              <div class=\"block-feilds\">\r\n                <span>Invoice Number</span>\r\n                <p>{{gatepassdetaildata.invoice_number }}</p>\r\n              </div>\r\n\r\n\r\n              <div class=\"block-feilds\">\r\n                <span>Driver Name</span>\r\n                <p>{{gatepassdetaildata.delivery_boy_name | titlecase }}</p>\r\n              </div>\r\n              <div class=\"block-feilds\">\r\n                <span>Mobile No.</span>\r\n                <p>{{gatepassdetaildata.mobile_number}}</p>\r\n              </div>\r\n              <div class=\"block-feilds\">\r\n                <span>Vehicle No.</span>\r\n                <p>{{gatepassdetaildata.vehicle_number}}</p>\r\n              </div>\r\n              <div class=\"block-feilds\">\r\n                <span>Transportation Mode</span>\r\n                <p>{{gatepassdetaildata.transportation_mode}}</p>\r\n              </div>\r\n\r\n            </div>\r\n\r\n\r\n          </div>\r\n        </div>\r\n\r\n\r\n\r\n\r\n        <div class=\"card\" *ngIf=\"skLoading\">\r\n          <div class=\"sk-head\">\r\n            <h2>&nbsp;</h2>\r\n          </div>\r\n          <div class=\"card-body\">\r\n            <div class=\"grid-box\">\r\n              <div class=\"sk-box\" *ngFor=\"let row of [].constructor(10)\">\r\n                &nbsp;\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n      </div>\r\n    </div>\r\n    <ng-container>\r\n      <div class=\"row\">\r\n        <div class=\"col s6\">\r\n          <div class=\"card pb0\">\r\n            <div class=\"card-body cs-form\">\r\n\r\n              <div class=\"row\" *ngIf=\"enable==false\">\r\n                <div class=\"col s12 m4 l4\">\r\n                  <mat-form-field appearance=\"outline\">\r\n                    <mat-label>Coupon Type</mat-label>\r\n                    <mat-select name=\"scanning_type\" [(ngModel)]=\"couponNumber.scanning_type\" #scanning_type=\"ngModel\">\r\n                      <mat-option value=\"Scanning\">Scanning</mat-option>\r\n                      <mat-option value=\"Manually\">Manually</mat-option>\r\n                    </mat-select>\r\n                  </mat-form-field>\r\n                </div>\r\n\r\n\r\n                <div class=\"col s12 m4 l4\" *ngIf=\"couponNumber.scanning_type == 'Scanning'\">\r\n                  <mat-form-field appearance=\"outline\">\r\n                    <mat-label>Coupon Number</mat-label>\r\n                    <input matInput placeholder=\"Type Here ...\" name=\"coupon_number\" #coupon_number=\"ngModel\"\r\n                      [(ngModel)]=\"couponNumber.coupon_number\" maxlength=\"9\" #focusInput min=\"9\"\r\n                      (ngModelChange)=\"couponNumber.coupon_number ? checkCoupon(couponNumber.coupon_number) : ''\">\r\n                  </mat-form-field>\r\n                </div>\r\n\r\n                <ng-container *ngIf=\"couponNumber.scanning_type == 'Manually'\">\r\n                  <div class=\"col s12 m4 l4\">\r\n                    <mat-form-field appearance=\"outline\">\r\n                      <mat-label>Coupon Number</mat-label>\r\n                      <input matInput placeholder=\"Type Here ...\" name=\"coupon_number\" #coupon_number=\"ngModel\"\r\n                        [(ngModel)]=\"couponNumber.coupon_number\" maxlength=\"16\" #focusInput min=\"0\">\r\n                    </mat-form-field>\r\n                  </div>\r\n                  <div class=\"col s12 m2 l2 \">\r\n                    <div class=\"mt8\">\r\n                      <button mat-raised-button color=\"accent\" (click)=\"checkCoupon(couponNumber.coupon_number)\">\r\n                        Go\r\n                      </button>\r\n                    </div>\r\n                  </div>\r\n                </ng-container>\r\n              </div>\r\n            </div>\r\n            <h1 style=\"text-align: center;font-size: 20px;padding-bottom: 5px;\" *ngIf=\"enable==false\">Scan All Master\r\n              Boxes To Print Gatepass</h1>\r\n            <h1 style=\"text-align: center;font-size: 20px;padding-bottom: 5px;\" *ngIf=\"enable==true\"> Scanning\r\n              Completed..</h1>\r\n\r\n          </div>\r\n        </div>\r\n        <div class=\"col s6\" *ngIf=\"mastercartendata.length>0\">\r\n          <div class=\"card  pb0\">\r\n            <div class=\"card-head\">\r\n              <h2 style=\"margin-bottom: 0px;\">Master Box Detail</h2>\r\n            </div>\r\n            <div class=\"card-body\">\r\n              <div class=\"row\">\r\n                <div class=\"cs-table font-lg border-top\">\r\n                  <div class=\"table-head border-bottom\">\r\n                    <table>\r\n                      <tr>\r\n                        <th class=\"w50\">S.no.</th>\r\n                        <th>Order No.</th>\r\n                        <th class=\"w100\">Master Box</th>\r\n                        <th class=\"w150 text-center\">Status</th>\r\n                      </tr>\r\n                    </table>\r\n                  </div>\r\n                  <div class=\"table-container\">\r\n                    <div class=\"table-content\">\r\n                      <table>\r\n                        <ng-container *ngIf=\"!loader\">\r\n                          <tr *ngFor=\"let row of mastercartendata; let i =index\"\r\n                            [ngClass]=\"row.scanned == 0 ? 'dispatchWait' : row.scanned == 1 ? 'dispatchCom' : 'dispatchPending'\">\r\n                            <td class=\"w50\">{{i+1}}</td>\r\n                            <td>{{row.bill_number}}</td>\r\n                            <td class=\"w100\">{{row.coupon_code}}</td>\r\n                            <td class=\"w150 text-center\">\r\n                              {{row.scanned == 1 ? 'Scanned' : 'Not scanned'}}\r\n                            </td>\r\n                          </tr>\r\n                        </ng-container>\r\n\r\n                        <ng-container *ngIf=\"loader\">\r\n                          <tr class=\"sk-loading\" *ngFor=\"let row of [].constructor(10)\">\r\n                            <td class=\"w50\">\r\n                              <div>&nbsp;</div>\r\n                            </td>\r\n                            <td>\r\n                              <div>&nbsp;</div>\r\n                            </td>\r\n                            <td class=\"w100\">\r\n                              <div>&nbsp;</div>\r\n                            </td>\r\n                            <td class=\"w150\">\r\n                              <div>&nbsp;</div>\r\n                            </td>\r\n                          </tr>\r\n                        </ng-container>\r\n                      </table>\r\n                    </div>\r\n\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n\r\n    </ng-container>\r\n\r\n  </div>\r\n</div>\r\n\r\n<div id=\"print_card\" hidden>\r\n  <h2 style=\"font-size: 20px;  text-align: center; margin: 16px 0px;\">{{company_name}}</h2>\r\n  <p style=\"font-size: 13px; margin: 7px 0px; padding-left:16px;\"><strong style=\"font-size: 13px;\">Invoice No.</strong>\r\n    : {{gatepassdetaildata.invoice_number ? gatepassdetaildata.invoice_number :'---'}}</p>\r\n  <p style=\"font-size: 12px; text-align: center; margin: 10px 0px;\" *ngIf=\"logined_user_data.address\">\r\n    {{logined_user_data.address}}</p>\r\n  <p style=\"font-size: 13px; margin: 7px 0px; padding-left:16px;\"><strong style=\"font-size: 13px;\">Generate\r\n      Date</strong> : {{gatepassdetaildata.date_created | date: 'd MMM y'}}</p>\r\n  <p style=\"font-size: 13px; margin: 7px 0px; padding-left:16px;\"><strong style=\"font-size: 13px;\">Gatepass\r\n      Number</strong> : {{gatepassdetaildata.gate_pass_no}}</p>\r\n  <p style=\"font-size: 13px; margin: 7px 0px; padding-left:16px;\"><strong style=\"font-size: 13px;\">Delivery\r\n      Person</strong> : {{gatepassdetaildata.delivery_boy_name}}</p>\r\n  <p style=\"font-size: 13px; margin: 7px 0px; padding-left:16px;\"><strong style=\"font-size: 13px;\">Mobile No.</strong> :\r\n    {{gatepassdetaildata.mobile_number}}</p>\r\n  <p style=\"font-size: 13px; margin: 7px 0px; padding-left:16px;\"><strong style=\"font-size: 13px;\">Vehicle\r\n      Number</strong> : {{gatepassdetaildata.vehicle_number}}</p>\r\n  <p style=\"font-size: 13px; margin: 7px 0px; padding-left:16px;\"><strong style=\"font-size: 13px;\">Transportation\r\n      Mode</strong> : {{gatepassdetaildata.transportation_mode}}</p>\r\n  <table style=\" width: 100%; table-layout: fixed; border-collapse: collapse;\">\r\n    <tr>\r\n      <td style=\"font-size: 13px; padding: 10px 16px; font-weight: 600; border-bottom: 1px solid #000; width: 120px;\">\r\n        Date Created</td>\r\n      <td style=\"font-size: 13px; padding: 10px 16px; font-weight: 600; border-bottom: 1px solid #000;\">Company Name\r\n      </td>\r\n      <td style=\"font-size: 13px; padding: 10px 16px; font-weight: 600; border-bottom: 1px solid #000; width: 120px;\">\r\n        Order Number</td>\r\n      <td\r\n        style=\"font-size: 13px; padding: 10px 16px; font-weight: 600; border-bottom: 1px solid #000; width: 120px; text-align:center\">\r\n        Total Qty.</td>\r\n    </tr>\r\n    <tr *ngFor=\"let row of printData;\">\r\n      <td style=\"font-size: 13px; padding: 10px 16px;\">{{row.date_created | date:'d MMM y'}}</td>\r\n      <td style=\"font-size: 13px; padding: 10px 16px;\">{{row.company_name}}</td>\r\n      <td style=\"font-size: 13px; padding: 10px 16px;\">{{row.order_no}}</td>\r\n      <td style=\"font-size: 13px; padding: 10px 16px; text-align:center\">{{row.total_order_qty}}</td>\r\n    </tr>\r\n  </table>\r\n</div>"

/***/ }),

/***/ "./src/app/company-dispatch/gatepass-scanning/gatepass-scanning.component.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/company-dispatch/gatepass-scanning/gatepass-scanning.component.ts ***!
  \***********************************************************************************/
/*! exports provided: GatepassScanningComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GatepassScanningComponent", function() { return GatepassScanningComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ng6-toastr-notifications */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/ng6-toastr-notifications/fesm5/ng6-toastr-notifications.js");
/* harmony import */ var src_services_DatabaseService__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/_services/DatabaseService */ "./src/_services/DatabaseService.ts");
/* harmony import */ var src_app_localstorage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/localstorage.service */ "./src/app/localstorage.service.ts");






var GatepassScanningComponent = /** @class */ (function () {
    function GatepassScanningComponent(service, toast, route, rout, session) {
        var _this = this;
        this.service = service;
        this.toast = toast;
        this.route = route;
        this.rout = rout;
        this.session = session;
        this.skLoading = false;
        this.loader = false;
        this.gatepassdetaildata = {};
        this.data = {};
        this.assign_login_data = {};
        this.logined_user_data = {};
        this.couponNumber = {};
        this.mastercartendata = [];
        this.enable = false;
        this.savingFlag = false;
        this.printData = [];
        this.userData = JSON.parse(localStorage.getItem('st_user'));
        this.data.created_by_id = this.userData['data']['id'];
        this.data.created_by_name = this.userData['data']['name'];
        this.assign_login_data = this.session.getSession();
        this.logined_user_data = this.assign_login_data.value.data;
        this.couponNumber.scanning_type = 'Scanning';
        this.route.params.subscribe(function (params) {
            _this.id = params.id;
        });
    }
    GatepassScanningComponent.prototype.ngOnInit = function () {
        this.gatepassdetail();
        this.gatePassPrint();
    };
    GatepassScanningComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        setTimeout(function () {
            _this.inputEl.nativeElement.focus();
        }, 100);
    };
    GatepassScanningComponent.prototype.gatepassdetail = function () {
        var _this = this;
        this.skLoading = true;
        this.service.post_rqst({ 'id': this.id }, "Dispatch/gateScanList").subscribe((function (result) {
            if (result['statusCode'] == 200) {
                _this.skLoading = false;
                _this.gatepassdetaildata = result['detail'];
                _this.mastercartendata = result['result'];
                _this.company_name = _this.mastercartendata[0]['company_name'];
                _this.couponNumber.coupon_number = '';
                for (var i = 0; i < _this.mastercartendata.length; i++) {
                    if (_this.mastercartendata[i]['scanned'] == 0) {
                        _this.enable = false;
                        return;
                    }
                    else {
                        _this.enable = true;
                    }
                }
                _this.service.count_list();
            }
            else {
                _this.skLoading = false;
                _this.service.count_list();
                _this.toast.errorToastr(result['statusMsg']);
            }
        }));
    };
    GatepassScanningComponent.prototype.gatePassPrint = function () {
        var _this = this;
        this.skLoading = true;
        this.service.post_rqst({ 'id': this.id }, "Dispatch/gateScanListForPrint")
            .subscribe((function (result) {
            if (result['statusCode'] == 200) {
                _this.printData = result['result'];
                _this.skLoading = false;
                _this.service.count_list();
            }
            else {
                _this.skLoading = false;
                _this.toast.errorToastr(result['statusMsg']);
            }
        }));
    };
    GatepassScanningComponent.prototype.checkCoupon = function (coupon) {
        if (coupon.length == 9 && this.couponNumber.scanning_type == 'Scanning') {
            this.scanApi(coupon);
        }
        if (this.couponNumber.scanning_type != 'Scanning') {
            this.scanApi(coupon);
        }
    };
    GatepassScanningComponent.prototype.scanApi = function (coupon) {
        var _this = this;
        this.service.post_rqst({ 'data': { 'id': this.id, 'coupon_code': coupon } }, "Dispatch/scanGrandMaster").subscribe((function (result) {
            if (result['statusCode'] == 200) {
                _this.loader = true;
                _this.mastercartendata = [];
                _this.service.post_rqst({ 'id': _this.id }, "Dispatch/gateScanList").subscribe((function (result) {
                    if (result['statusCode'] == 200) {
                        _this.loader = false;
                        _this.gatepassdetail();
                    }
                    else {
                        _this.loader = false;
                        _this.gatepassdetail();
                        _this.toast.errorToastr(result['statusMsg']);
                    }
                }));
            }
            else {
                _this.toast.errorToastr(result['statusMsg']);
                _this.couponNumber.coupon_number = '';
            }
        }));
    };
    GatepassScanningComponent.prototype.scanningSave = function (id) {
        var _this = this;
        this.savingFlag = true;
        this.service.post_rqst({ 'data': { 'id': id } }, "Dispatch/printGatepass")
            .subscribe((function (result) {
            if (result['statusCode'] == 200) {
                _this.enable = false;
                _this.savingFlag = false;
                _this.rout.navigate(['company-dispatch']);
                var printContents = void 0, popupWin = void 0;
                printContents = document.getElementById('print_card').innerHTML;
                popupWin = window.open('', '_blank', 'top=0,left=0,height=100%,width=auto');
                popupWin.document.open();
                popupWin.document.write("\n        <html>\n        <head>\n        <title>Print tab</title>\n        <style>\n        @media print {\n          #qr_code_container  {\n            page-break-inside: always;\n            margin-bottom: 0px\n          }\n          @page { \n            // margin: 0.07in 0.1in 0.00in;  \n          }\n          \n          \n          \n          body\n          {\n            font-family: 'arial';\n          }\n          </style>\n          </head>\n          <body onload=\"window.print();window.close()\">" + printContents + "</body>\n          </html>");
                popupWin.document.close();
            }
            else {
                _this.savingFlag = false;
                _this.toast.errorToastr(result['statusMsg']);
            }
        }));
    };
    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('focusInput'),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"])
    ], GatepassScanningComponent.prototype, "inputEl", void 0);
    GatepassScanningComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-gatepass-scanning',
            template: __webpack_require__(/*! ./gatepass-scanning.component.html */ "./src/app/company-dispatch/gatepass-scanning/gatepass-scanning.component.html")
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_services_DatabaseService__WEBPACK_IMPORTED_MODULE_4__["DatabaseService"], ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_3__["ToastrManager"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], src_app_localstorage_service__WEBPACK_IMPORTED_MODULE_5__["sessionStorage"]])
    ], GatepassScanningComponent);
    return GatepassScanningComponent;
}());



/***/ })

}]);