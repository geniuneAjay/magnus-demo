(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["annoucement-announcement-module-announcement-module"],{

/***/ "./src/app/annoucement/add-annoucement/add-annoucement.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/annoucement/add-annoucement/add-annoucement.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-container\" >\r\n  \r\n  <div class=\"tools-container\">\r\n    <a mat-icon-button  matTooltip=\"Back\" routerLink=\"/announcement-list\">\r\n      <i class=\"material-icons\">arrow_back</i>\r\n    </a>\r\n    <h2>Add Announcement</h2>\r\n  </div>\r\n  \r\n  \r\n  \r\n  <div class=\"container pt10 pl10 pr10 pb50\" >\r\n    <div class=\"row\">\r\n      <div class=\"col s12 m12 l8\">\r\n        <form name=\"f\" #f=\"ngForm\" (ngSubmit)=\"f.valid && submitAnnouncement()\">\r\n          <div class=\"row\">\r\n            <div class=\"col s12\">\r\n              <div class=\"card pb0\">\r\n                <div class=\"card-head\">\r\n                  <h2>Basic Information</h2>\r\n                </div>\r\n                <div class=\"card-body cs-form\">\r\n                  <div class=\"row\">\r\n                    <div class=\"col s12 m6 l6\">\r\n\r\n                      <div class=\"row\">\r\n                        <div class=\"col s12 m12 l12\">\r\n                          <mat-form-field  appearance=\"outline\">\r\n                            <mat-label>Message</mat-label>\r\n                            <textarea matInput placeholder=\"Type Here ...\" name=\"message\" [(ngModel)]=\"announcementData.message\" #message=\"ngModel\" class=\"h85\" required></textarea>\r\n                          </mat-form-field>\r\n                          <div class=\"alert alert-danger\" *ngIf=\"message.touched || f.submitted\">\r\n                            <p *ngIf=\"message.errors?.required\">This field is required</p>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n\r\n                      <div class=\"row\">\r\n                        <div class=\"col s12 m12 l12\">\r\n                          <div class=\"cs-file cover-image-upload\">\r\n                            <p>COVER IMAGE <span class=\"optional-tag\">(shown at the top of the app preview)</span></p>\r\n                            <ul>\r\n                              <li *ngIf=\"!coverImagePreviewUrl\">\r\n                                <label>\r\n                                  <i class=\"material-icons add-file-icon\">add_photo_alternate</i>\r\n                                  <input type=\"file\" name=\"coverImage\" (change)=\"onCoverImageChange($event)\" placeholder=\"Upload cover image\" accept=\".png,.jpg,.jpeg\" style=\"display: none;\">\r\n                                </label>\r\n                              </li>\r\n                              <li class=\"multi-images\" *ngIf=\"coverImagePreviewUrl\">\r\n                                <label>\r\n                                  <img height=\"75\" width=\"75\" [src]=\"coverImagePreviewUrl\">\r\n                                  <a class=\"close\"><i class=\"material-icons dp48\" (click)=\"removeCoverImage()\">clear</i></a>\r\n                                </label>\r\n                              </li>\r\n                            </ul>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n\r\n                      <div class=\"row\">\r\n                        <div class=\"col s12 m12 l12\">\r\n                          <div class=\"cs-file\">\r\n                            <p>UPLOAD FILE</p>\r\n                            <ul>\r\n                              <li>\r\n                                <label>\r\n                                  <i class=\"material-icons add-file-icon\">add</i>\r\n                                  <input multiple type=\"file\" name =\"file\" required (change)=\"fileChange($event)\" placeholder=\"Upload file\"  accept=\".png,.jpg,.jpeg,.pdf,.docx\" style=\"display: none;\">\r\n                                </label>\r\n                              </li>\r\n\r\n                              <li class=\"multi-images\" >\r\n                                <label *ngFor=\"let imageType of selectedFile; let i = index\">\r\n                                  <img *ngIf =\"imageType.type == 'image/jpeg' || imageType.type ==  'image/png'  \"  height=\"75\" width=\"75\" [src]=\"imageType.path\" src=\"assets/imgs/jpg.svg\">\r\n                                  <img *ngIf =\"imageType.type == 'application/pdf'\" height=\"75\" width=\"75\" src=\"assets/img/pdf1.svg\">\r\n                                  <img *ngIf =\"imageType.type == 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'\" height=\"75\" width=\"75\" src=\"assets/img/doc.png\">\r\n                                  <img  *ngIf =\"imageType.type == 'application/docx'\" height=\"75\" width=\"75\" src=\"assets/img/doc.png\">\r\n                                  <a class=\"close\" ><i class=\"material-icons dp48\"  (click)=\"remove_image(i)\">clear</i></a>\r\n                                </label>\r\n                              </li>\r\n                            </ul>\r\n                          </div>\r\n                        </div>\r\n                      </div>\r\n\r\n                    </div>\r\n\r\n                    <div class=\"col s12 m6 l6\">\r\n                      <div class=\"row\">\r\n                        <div class=\"col s12 m6 l6\">\r\n                      <mat-form-field  appearance=\"outline\">\r\n                        <mat-label>State</mat-label>\r\n                        <mat-select name=\"state\" #state=\"ngModel\" [(ngModel)]=\"announcementData.state\" (selectionChange)=\"announcementData.announcement_user_type=''\" required>\r\n                          <mat-option disabled=\"\">Select State</mat-option>\r\n                          <mat-option *ngFor=\"let row of states\"value=\"{{row.state_name}}\">\r\n                            {{row.state_name}}\r\n                          </mat-option>\r\n                        </mat-select>\r\n                      </mat-form-field>\r\n                      \r\n                      <div class=\"alert alert-danger\" *ngIf=\"state.touched || f.submitted\">\r\n                        <p *ngIf=\"state.errors?.required\">This field is required</p>\r\n                      </div>\r\n                      \r\n                    </div>\r\n                    <!-- <div class=\"col s12 m6 l6\">\r\n                      <mat-form-field  appearance=\"outline\">\r\n                        <mat-label>District</mat-label>\r\n                        <mat-select name=\"district\" #district=\"ngModel\" [(ngModel)]=\"announcementData.district\" required>\r\n                          <mat-option disabled=\"\">Select District</mat-option>\r\n                          <mat-option *ngFor=\"let row of district_list\" value=\"{{row.district_name}}\">\r\n                            {{row.district_name}}\r\n                          </mat-option>\r\n                        </mat-select>\r\n                      </mat-form-field>\r\n                      <div class=\"alert alert-danger\" *ngIf=\"district.touched || f.submitted\">\r\n                        <p *ngIf=\"district.errors?.required\">This field is required</p>\r\n                      </div>\r\n                    </div> -->\r\n                    <div class=\"col s12 m6 l6\">\r\n                      <mat-form-field  appearance=\"outline\">\r\n                        <mat-label>User Type</mat-label>\r\n                        <mat-select name=\"announcement_user_type\" #announcement_user_type=\"ngModel\" [(ngModel)]=\"announcementData.announcement_user_type\"  (selectionChange)=\"blankValue(announcementData.announcement_user_type); announcementData.announcement_user_type !='Influencer' ? getUserDrList(announcementData.announcement_user_type, '') : ''\" required>\r\n                          <mat-option disabled=\"\">Select</mat-option>\r\n                          <mat-option value=\"Distributor\">Distributor</mat-option>\r\n                          <mat-option value=\"Direct Dealer\">Direct Dealer</mat-option>\r\n                          <mat-option value=\"Retailer\">Dealer</mat-option>\r\n                          <mat-option value=\"Sales Executive\">Sales Executive</mat-option>\r\n                          <!-- <mat-option value=\"Influencer\">Influencer</mat-option> -->\r\n                          \r\n                        </mat-select>\r\n                      </mat-form-field>\r\n                      \r\n                      <div class=\"alert alert-danger\" *ngIf=\"announcement_user_type.touched || f.submitted\">\r\n                        <p *ngIf=\"announcement_user_type.errors?.required\">This field is required</p>\r\n                      </div>\r\n                      \r\n                    </div>\r\n                  </div>\r\n                  <div class=\"row\">\r\n                    <div class=\"col s12 m6 l6\" *ngIf=\"announcementData.announcement_user_type == 'Distributor'\">\r\n                      <div class=\"selct-all\">\r\n                        <mat-checkbox [(ngModel)]=\"announcementData.all_distributors\" name=\"all_distributors\" (click)=\"selectAll('distributors')\" [checked]=\"announcementData.distributors.length == distributorList.length && distributorList.length !=0 && announcementData.distributors.length > 0\">Select All</mat-checkbox>\r\n                      </div>\r\n                      <mat-form-field  appearance=\"outline\" >\r\n                        <mat-label >Distributor</mat-label>\r\n                        <mat-select multiple name=\"distributors\" #distributors=\"ngModel\" [(ngModel)]=\"announcementData.distributors\" required>\r\n                          <mat-option >\r\n                            <ngx-mat-select-search noEntriesFoundLabel=\"'no data found'\" placeholderLabel=\"Search..\" (keyup)=\"getUserDrList(announcementData.announcement_user_type, $event.target.value)\"></ngx-mat-select-search>\r\n                          </mat-option>\r\n                          <mat-option *ngFor=\"let row of distributorList\" value=\"{{row.id}}\" color=\"accent\">{{row.company_name}}</mat-option>\r\n                        </mat-select>\r\n                      </mat-form-field>\r\n                      <div class=\"alert alert-danger\" *ngIf=\"distributors.touched || f.submitted\">\r\n                        <p *ngIf=\"distributors.errors?.required\">This field is required</p>\r\n                      </div>\r\n                    </div>\r\n                    \r\n                    <div class=\"col s12 m6 l6\" *ngIf=\"announcementData.announcement_user_type == 'Direct Dealer'\">\r\n                      <div class=\"selct-all\">\r\n                        <mat-checkbox [(ngModel)]=\"announcementData.all_direct_dealer\" name=\"all_direct_dealer\" (click)=\"selectAll('direct_dealer')\" [checked]=\"announcementData.direct_dealer.length == directDealerList.length && directDealerList.length !=0 && announcementData.direct_dealer.length > 0\">Select All</mat-checkbox>\r\n                      </div>\r\n                      <mat-form-field  appearance=\"outline\" >\r\n                        <mat-label>Direct Dealer</mat-label>\r\n                        <mat-select multiple color=\"accent\" name=\"direct_dealer\" #direct_dealer=\"ngModel\" [(ngModel)]=\"announcementData.direct_dealer\" required>\r\n                          <mat-option>\r\n                            <ngx-mat-select-search noEntriesFoundLabel=\"'no data found'\" placeholderLabel=\"Search..\" (keyup)=\"getUserDrList(announcementData.announcement_user_type, $event.target.value)\"></ngx-mat-select-search>\r\n                          </mat-option>\r\n                          <mat-option *ngFor=\"let row of directDealerList\" value=\"{{row.id}}\" color=\"accent\">{{row.company_name}}</mat-option>\r\n                        </mat-select>\r\n                      </mat-form-field>\r\n                      <div class=\"alert alert-danger\" *ngIf=\"direct_dealer.touched || f.submitted\">\r\n                        <p *ngIf=\"direct_dealer.errors?.required\">This field is required</p>\r\n                      </div>\r\n                    </div>\r\n                    \r\n                    <div class=\"col s12 m6 l6\" *ngIf=\"announcementData.announcement_user_type == 'Retailer'\">\r\n                      <div class=\"selct-all\">\r\n                        <mat-checkbox [(ngModel)]=\"announcementData.all_dealers\" name=\"all_dealers\" (click)=\"selectAll('dealers')\" [checked]=\"announcementData.dealers.length == dealertList.length && dealertList.length !=0 && announcementData.dealers.length > 0\">Select All</mat-checkbox>\r\n                      </div>\r\n                      <mat-form-field  appearance=\"outline\" >\r\n                        <mat-label>Dealer</mat-label>\r\n                        <mat-select multiple color=\"accent\" name=\"dealers\" #dealers=\"ngModel\" [(ngModel)]=\"announcementData.dealers\" required>\r\n                          <mat-option>\r\n                            <ngx-mat-select-search noEntriesFoundLabel=\"'no data found'\" placeholderLabel=\"Search..\" (keyup)=\"getUserDrList(announcementData.announcement_user_type,$event.target.value)\"></ngx-mat-select-search>\r\n                          </mat-option>\r\n                          <mat-option *ngFor=\"let row of dealertList\" value=\"{{row.id}}\" color=\"accent\">{{row.company_name}}</mat-option>\r\n                        </mat-select>\r\n                      </mat-form-field>\r\n                      <div class=\"alert alert-danger\" *ngIf=\"dealers.touched || f.submitted\">\r\n                        <p *ngIf=\"dealers.errors?.required\">This field is required</p>\r\n                      </div>\r\n                    </div>\r\n                    \r\n                    <div class=\"col s12 m6 l6\" *ngIf=\"announcementData.announcement_user_type == 'Sales Executive'\">\r\n                      <div class=\"selct-all\">\r\n                        <mat-checkbox [(ngModel)]=\"announcementData.all_users\" name=\"all_users\" (click)=\"selectAll('users')\" [checked]=\"announcementData.users.length == salesUserList.length && salesUserList.length !=0 && announcementData.users.length > 0\">Select All</mat-checkbox>\r\n                      </div>\r\n                      <mat-form-field  appearance=\"outline\" >\r\n                        <mat-label>Sales Executive</mat-label>\r\n                        <mat-select multiple name=\"users\" #users=\"ngModel\" [(ngModel)]=\"announcementData.users\" required>\r\n                          <mat-option>\r\n                            <ngx-mat-select-search noEntriesFoundLabel=\"'no data found'\" placeholderLabel=\"Search..\" (keyup)=\"getUserDrList(announcementData.announcement_user_type, $event.target.value)\"></ngx-mat-select-search>\r\n                          </mat-option>\r\n                          <mat-option *ngFor=\"let row of salesUserList\" value=\"{{row.id}}\" color=\"accent\">{{row.name}}</mat-option>\r\n                        </mat-select>\r\n                      </mat-form-field>\r\n                      <div class=\"alert alert-danger\" *ngIf=\"users.touched || f.submitted\">\r\n                        <p *ngIf=\"users.errors?.required\">This field is required</p>\r\n                      </div>\r\n                    </div>\r\n                    \r\n                    <ng-container  *ngIf=\"announcementData.announcement_user_type == 'Influencer'\">\r\n                      <div class=\"col s12 m6 l6\">\r\n                        <mat-form-field  appearance=\"outline\">\r\n                          <mat-label>Influencer Type</mat-label>\r\n                          <mat-select multiple name=\"influencer_type\" #influencer_type=\"ngModel\" [(ngModel)]=\"announcementData.influencer_type\" (selectionChange)=\"getInfluencer(announcementData.influencer_type, '')\" required>\r\n                            <mat-option disabled=\"\">Select Type</mat-option>\r\n                            <mat-option [value]=\"row.type\" *ngFor=\"let row of networkType\">{{row.module_name}}</mat-option>\r\n                          </mat-select>\r\n                        </mat-form-field>\r\n                        <div class=\"alert alert-danger\" *ngIf=\"influencer_type.touched || f.submitted\">\r\n                          <p *ngIf=\"influencer_type.errors?.required\">This field is required</p>\r\n                        </div>\r\n                      </div>\r\n                      \r\n                      <div class=\"col s12 m6 l6\" *ngIf=\"announcementData.influencer_type\">\r\n                        <div class=\"selct-all\">\r\n                          <mat-checkbox [(ngModel)]=\"announcementData.all_influencer\" name=\"all_influencer\" (click)=\"selectAll('influencer')\" [checked]=\"announcementData.influencer.length == influencerNetwork.length && influencerNetwork.length !=0 && announcementData.influencer.length > 0\">Select All</mat-checkbox>\r\n                        </div>\r\n                        \r\n                        <mat-form-field  appearance=\"outline\">\r\n                          <mat-label>Influencer Network</mat-label>\r\n                          <mat-select multiple name=\"influencer\" #influencer=\"ngModel\" [(ngModel)]=\"announcementData.influencer\" required>\r\n                            <mat-option>\r\n                              <ngx-mat-select-search noEntriesFoundLabel=\"'no data found'\" placeholderLabel=\"Search..\" (keyup)=\"getInfluencer(announcementData.influencer_type, $event.target.value)\"></ngx-mat-select-search>\r\n                            </mat-option>\r\n                            <mat-option disabled=\"\">Select Type</mat-option>\r\n                            <mat-option [value]=\"row.id\" *ngFor=\"let row of influencerNetwork\">{{row.company_name}}</mat-option>\r\n                          </mat-select>\r\n                        </mat-form-field>\r\n                        <div class=\"alert alert-danger\" *ngIf=\"influencer.touched || f.submitted\">\r\n                          <p *ngIf=\"influencer.errors?.required\">This field is required</p>\r\n                        </div>\r\n                      </div>\r\n                    </ng-container>\r\n                    \r\n                  </div>\r\n                </div>\r\n                \r\n              </div>\r\n              \r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      \r\n      <div class=\"row\">\r\n        <div class=\"col s12\">\r\n          <div class=\"text-right\">\r\n            <button [ngClass]=\"{'loading': savingFlag == true}\" mat-raised-button color=\"accent\"  [disabled]=\"savingFlag == true\">\r\n              {{savingFlag == true ? 'Saving' : 'Save'}}\r\n            </button>\r\n          </div>\r\n        </div>\r\n      </div>\r\n        </form>\r\n      </div>\r\n\r\n      <div class=\"col s12 m12 l4\">\r\n        <div class=\"phone-preview-sticky\">\r\n          <p class=\"preview-label\">\r\n            <i class=\"material-icons\">smartphone</i> Live App Preview\r\n          </p>\r\n          <div class=\"phone-frame\">\r\n            <div class=\"phone-notch\"></div>\r\n            <div class=\"phone-status-bar\">\r\n              <span>9:41</span>\r\n              <span class=\"status-icons\"><i class=\"material-icons\">signal_cellular_alt</i><i class=\"material-icons\">wifi</i><i class=\"material-icons\">battery_full</i></span>\r\n            </div>\r\n            <div class=\"phone-app-bar\">\r\n              <i class=\"material-icons\">arrow_back</i>\r\n              <span>Announcements</span>\r\n            </div>\r\n            <div class=\"phone-body\">\r\n              <div class=\"notice-card\">\r\n                <div class=\"notice-cover\" *ngIf=\"coverImagePreviewUrl\">\r\n                  <img [src]=\"coverImagePreviewUrl\">\r\n                </div>\r\n                <div class=\"notice-cover placeholder\" *ngIf=\"!coverImagePreviewUrl\">\r\n                  <img [src]=\"sampleCoverImage\">\r\n                  <span class=\"example-badge\">Example</span>\r\n                </div>\r\n\r\n                <div class=\"notice-content\">\r\n                  <div class=\"notice-sender\">\r\n                    <div class=\"avatar\">{{userName ? userName.charAt(0) : 'A'}}</div>\r\n                    <div class=\"sender-meta\">\r\n                      <b>{{userName || 'Admin'}}</b>\r\n                      <span>Just now</span>\r\n                    </div>\r\n                  </div>\r\n\r\n                  <p class=\"notice-message\" *ngIf=\"announcementData.message; else placeholderMsg\">{{announcementData.message}}</p>\r\n                  <ng-template #placeholderMsg>\r\n                    <p class=\"notice-message placeholder-text\">Your announcement message will appear here...</p>\r\n                  </ng-template>\r\n\r\n                  <div class=\"notice-attachments\" *ngIf=\"selectedFile.length > 0\">\r\n                    <div class=\"attachment-thumb\" *ngFor=\"let imageType of selectedFile\">\r\n                      <img *ngIf=\"imageType.type == 'image/jpeg' || imageType.type == 'image/png'\" [src]=\"imageType.path\">\r\n                      <img *ngIf=\"imageType.type == 'application/pdf'\" src=\"assets/img/pdf1.svg\">\r\n                      <img *ngIf=\"imageType.type == 'application/vnd.openxmlformats-officedocument.wordprocessingml.document' || imageType.type == 'application/docx'\" src=\"assets/img/doc.png\">\r\n                    </div>\r\n                  </div>\r\n                  <div class=\"notice-attachments\" *ngIf=\"selectedFile.length == 0\">\r\n                    <div class=\"attachment-thumb\" *ngFor=\"let sample of sampleAttachmentImages\">\r\n                      <img [src]=\"sample\">\r\n                    </div>\r\n                    <span class=\"example-badge\">Example</span>\r\n                  </div>\r\n\r\n                  <div class=\"notice-audience\" *ngIf=\"announcementData.announcement_user_type\">\r\n                    <i class=\"material-icons\">groups</i>\r\n                    Sent to {{announcementData.announcement_user_type}}\r\n                  </div>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/annoucement/add-annoucement/add-annoucement.component.scss":
/*!****************************************************************************!*\
  !*** ./src/app/annoucement/add-annoucement/add-annoucement.component.scss ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".tools-container {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 14px 4px 18px;\n}\n.tools-container h2 {\n  margin: 0;\n  font-size: 20px;\n  font-weight: 700;\n  color: #2a2c33;\n}\n.card {\n  background: #ffffff;\n  border-radius: 14px;\n  box-shadow: 0 1px 2px rgba(16, 17, 20, 0.04), 0 8px 24px rgba(16, 17, 20, 0.05);\n  overflow: hidden;\n}\n.card .card-head {\n  padding: 18px 22px;\n  border-bottom: 1px solid #eef0f3;\n}\n.card .card-head h2 {\n  margin: 0;\n  font-size: 15px;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.04em;\n  color: #2a2c33;\n}\n.card .card-body {\n  padding: 20px 22px 24px;\n}\n.cs-form mat-form-field {\n  width: 100%;\n}\n.cs-form textarea.h85 {\n  min-height: 85px;\n}\n.cs-form .alert-danger {\n  margin-top: -12px;\n  color: #dd4d61;\n  font-size: 12px;\n}\n.cs-form .alert-danger p {\n  margin: 0;\n}\n.cs-form .selct-all {\n  margin-bottom: 6px;\n}\n.cs-file {\n  margin-bottom: 20px;\n}\n.cs-file > p {\n  margin: 0 0 10px;\n  font-size: 12px;\n  font-weight: 700;\n  letter-spacing: 0.04em;\n  color: #6b7080;\n  text-transform: uppercase;\n}\n.cs-file > p .optional-tag {\n  font-weight: 400;\n  text-transform: none;\n  letter-spacing: normal;\n  color: #a8abb6;\n}\n.cs-file ul {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: flex-start;\n  gap: 10px;\n  margin: 0;\n  padding: 0;\n  list-style: none;\n}\n.cs-file li {\n  flex: 0 0 auto;\n}\n.cs-file li label {\n  position: relative;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 84px;\n  height: 84px;\n  border-radius: 10px;\n  cursor: pointer;\n  overflow: hidden;\n}\n.cs-file li:first-child label {\n  border: 1.5px dashed #d4d6dd;\n  background: #f7f7f9;\n  transition: border-color 0.15s ease, background 0.15s ease;\n}\n.cs-file li:first-child label:hover {\n  border-color: #dd4d61;\n  background: #fdeef0;\n}\n.cs-file li .add-file-icon {\n  color: #a8abb6;\n  font-size: 28px;\n}\n.cs-file li:first-child label:hover .add-file-icon {\n  color: #dd4d61;\n}\n.cs-file li.multi-images label {\n  border: 1px solid #eef0f3;\n  background: #ffffff;\n}\n.cs-file li.multi-images label img {\n  width: 100%;\n  height: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n.cs-file li.multi-images label .close {\n  position: absolute;\n  top: 2px;\n  right: 2px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 20px;\n  height: 20px;\n  border-radius: 50%;\n  background: rgba(20, 21, 26, 0.55);\n  cursor: pointer;\n}\n.cs-file li.multi-images label .close i {\n  font-size: 14px;\n  color: #fff;\n}\n.cs-file li.multi-images label .close:hover {\n  background: #dd4d61;\n}\n.cover-image-upload ul {\n  display: block;\n}\n.cover-image-upload li {\n  display: block;\n  width: 100%;\n}\n.cover-image-upload li:first-child label {\n  width: 100%;\n  height: 96px;\n  flex-direction: column;\n  gap: 6px;\n}\n.cover-image-upload li.multi-images label {\n  width: 100%;\n  height: 130px;\n}\n.phone-preview-sticky {\n  position: sticky;\n  top: 20px;\n}\n.preview-label {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  margin: 0 0 14px 4px;\n  font-size: 12px;\n  font-weight: 700;\n  letter-spacing: 0.04em;\n  text-transform: uppercase;\n  color: #6b7080;\n}\n.preview-label i {\n  font-size: 16px;\n}\n.phone-frame {\n  width: 100%;\n  max-width: 300px;\n  margin: 0 auto;\n  border-radius: 34px;\n  background: #14151a;\n  padding: 10px 10px 16px;\n  box-shadow: 0 20px 40px rgba(16, 17, 20, 0.18);\n  position: relative;\n}\n.phone-notch {\n  width: 90px;\n  height: 18px;\n  margin: 0 auto 6px;\n  background: #14151a;\n  border-radius: 0 0 14px 14px;\n}\n.phone-status-bar {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding: 6px 14px 2px;\n  color: #fff;\n  font-size: 11px;\n  font-weight: 600;\n}\n.phone-status-bar .status-icons {\n  display: flex;\n  gap: 4px;\n}\n.phone-status-bar .status-icons i {\n  font-size: 13px;\n}\n.phone-app-bar {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 10px 14px;\n  background: #dd4d61;\n  color: #fff;\n  font-weight: 700;\n  font-size: 14px;\n}\n.phone-app-bar i {\n  font-size: 18px;\n}\n.phone-body {\n  background: #f7f7f9;\n  padding: 14px;\n  min-height: 360px;\n  border-radius: 0 0 22px 22px;\n}\n.notice-card {\n  background: #ffffff;\n  border-radius: 12px;\n  overflow: hidden;\n  box-shadow: 0 1px 2px rgba(16, 17, 20, 0.06), 0 4px 12px rgba(16, 17, 20, 0.06);\n}\n.notice-cover {\n  position: relative;\n  height: 130px;\n  background: #fdeef0;\n}\n.notice-cover img {\n  width: 100%;\n  height: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n.notice-cover.placeholder img {\n  opacity: 0.85;\n}\n.example-badge {\n  position: absolute;\n  top: 8px;\n  right: 8px;\n  padding: 2px 8px;\n  border-radius: 999px;\n  background: rgba(20, 21, 26, 0.55);\n  color: #fff;\n  font-size: 10px;\n  font-weight: 700;\n  letter-spacing: 0.03em;\n  text-transform: uppercase;\n}\n.notice-content {\n  padding: 14px;\n}\n.notice-sender {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  margin-bottom: 10px;\n}\n.notice-sender .avatar {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  width: 30px;\n  height: 30px;\n  border-radius: 50%;\n  background: #dd4d61;\n  color: #fff;\n  font-weight: 700;\n  font-size: 13px;\n  flex-shrink: 0;\n}\n.notice-sender .sender-meta {\n  display: flex;\n  flex-direction: column;\n  line-height: 1.25;\n}\n.notice-sender .sender-meta b {\n  font-size: 13px;\n  color: #2a2c33;\n}\n.notice-sender .sender-meta span {\n  font-size: 11px;\n  color: #6b7080;\n}\n.notice-message {\n  margin: 0 0 10px;\n  font-size: 13px;\n  line-height: 1.5;\n  color: #2a2c33;\n  white-space: pre-wrap;\n  word-break: break-word;\n}\n.notice-message.placeholder-text {\n  color: #b8bac2;\n  font-style: italic;\n}\n.notice-attachments {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 6px;\n  margin-bottom: 10px;\n  position: relative;\n}\n.notice-attachments .attachment-thumb {\n  position: relative;\n  width: 48px;\n  height: 48px;\n  border-radius: 8px;\n  overflow: hidden;\n  background: #f7f7f9;\n  border: 1px solid #eef0f3;\n}\n.notice-attachments .attachment-thumb img {\n  width: 100%;\n  height: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n.notice-attachments .example-badge {\n  top: -10px;\n  right: -4px;\n}\n.notice-audience {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  padding-top: 8px;\n  border-top: 1px solid #eef0f3;\n  font-size: 11px;\n  color: #6b7080;\n}\n.notice-audience i {\n  font-size: 14px;\n}\n.text-right {\n  text-align: right;\n  margin-top: 18px;\n}\n.text-right button {\n  min-width: 140px;\n}\n.text-right button.loading {\n  opacity: 0.7;\n  pointer-events: none;\n}\n@media (max-width: 992px) {\n  .phone-preview-sticky {\n    position: static;\n    margin-top: 24px;\n  }\n}"

/***/ }),

/***/ "./src/app/annoucement/add-annoucement/add-annoucement.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/annoucement/add-annoucement/add-annoucement.component.ts ***!
  \**************************************************************************/
/*! exports provided: AddAnnoucementComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddAnnoucementComponent", function() { return AddAnnoucementComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _router_animation_router_animation_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../router-animation/router-animation.component */ "./src/app/router-animation/router-animation.component.ts");
/* harmony import */ var src_services_DatabaseService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/_services/DatabaseService */ "./src/_services/DatabaseService.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_dialog_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/dialog.component */ "./src/app/dialog.component.ts");
/* harmony import */ var src_app_localstorage_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/localstorage.service */ "./src/app/localstorage.service.ts");
/* harmony import */ var ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ng6-toastr-notifications */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/ng6-toastr-notifications/fesm5/ng6-toastr-notifications.js");








var AddAnnoucementComponent = /** @class */ (function () {
    function AddAnnoucementComponent(toast, serve, rout, session, dialog) {
        this.toast = toast;
        this.serve = serve;
        this.rout = rout;
        this.session = session;
        this.dialog = dialog;
        this.savingFlag = false;
        this.city_list = [];
        this.announcementData = {};
        this.states = [];
        this.district_list = [];
        this.distributorList = [];
        this.directDealerList = [];
        this.dealertList = [];
        this.salesUserList = [];
        this.urls = new Array();
        this.selectedFile = [];
        this.submit = false;
        this.formData = new FormData();
        this.search = {};
        this.assign_login_data = [];
        this.assign_login_data2 = [];
        this.networkType = [];
        this.influencerNetwork = [];
        this.coverImageFile = null;
        this.coverImagePreviewUrl = null;
        // Shown in the "Live App Preview" panel only, before anything real has
        // been picked - so the panel never opens on an empty/blank card while
        // writing the message. Marked "Example" in the UI and never touched by
        // submitAnnouncement(), so nothing fake is ever sent to the server.
        this.sampleCoverImage = 'assets/img/products/block-board.jpg';
        this.sampleAttachmentImages = [
            'assets/img/products/calibrated.jpg',
            'assets/img/products/chequered.jpg',
        ];
        this.assign_login_data = this.session.getSession();
        this.assign_login_data = this.assign_login_data.value;
        this.assign_login_data2 = this.assign_login_data.data;
        this.getStateList();
        this.announcementData.dealers = [];
        this.announcementData.direct_dealer = [];
        this.announcementData.distributors = [];
        this.announcementData.users = [];
        this.announcementData.influencer = [];
        this.userData = JSON.parse(localStorage.getItem('st_user'));
        this.userId = this.userData['data']['id'];
        this.userName = this.userData['data']['name'];
        this.getNetworkType();
    }
    AddAnnoucementComponent.prototype.ngOnInit = function () {
    };
    AddAnnoucementComponent.prototype.getStateList = function () {
        var _this = this;
        this.serve.post_rqst(0, "Announcement/getAllState").subscribe(function (response) {
            if (response['statusCode'] == 200) {
                _this.loader = false;
                _this.states = response['all_state'];
            }
            else {
                _this.loader = false;
                _this.toast.errorToastr(response['statusMsg']);
            }
        }, function (err) {
            _this.toast.errorToastr('Something went wrong');
        });
    };
    AddAnnoucementComponent.prototype.getNetworkType = function () {
        var _this = this;
        setTimeout(function () {
            _this.serve.post_rqst('', "Announcement/leadNetworkModule").subscribe((function (result) {
                _this.networkType = result['modules'];
            }));
        }, 3000);
    };
    AddAnnoucementComponent.prototype.getInfluencer = function (type, search) {
        var _this = this;
        this.serve.post_rqst({ 'type': type, 'search': search, 'state': this.announcementData.state }, "Announcement/getInfluencer").subscribe((function (result) {
            _this.influencerNetwork = result['influencer'];
        }));
    };
    AddAnnoucementComponent.prototype.getCityList = function () {
        var _this = this;
        var value = { "state": this.announcementData.state, "district": this.announcementData.district };
        this.serve.post_rqst(value, "User/city_user_list").subscribe((function (response) {
            _this.city_list = response['query']['city'];
        }));
    };
    AddAnnoucementComponent.prototype.getUserDrList = function (searcValue, filter) {
        var _this = this;
        this.serve.post_rqst({ 'state': this.announcementData.state, 'district': this.announcementData.district, 'city': this.announcementData.city, 'filter': filter, 'search': searcValue, 'user_id': this.assign_login_data2.id, 'user_type': this.assign_login_data2.type }, "Announcement/userDrList").subscribe((function (response) {
            if (response['statusCode'] == 200) {
                _this.loader = false;
                _this.distributorList = response['result'];
                _this.directDealerList = response['result'];
                _this.dealertList = response['result'];
                _this.salesUserList = response['result'];
                // this.toast.errorToastr(response['statusMsg']);
            }
            else {
                _this.loader = false;
                _this.toast.errorToastr(response['statusMsg']);
            }
        }));
    };
    AddAnnoucementComponent.prototype.selectAll = function (action) {
        var _this = this;
        if (action == 'dealers') {
            setTimeout(function () {
                if (_this.announcementData.all_dealers == true) {
                    var dealerData = [];
                    for (var i = 0; i < _this.dealertList.length; i++) {
                        dealerData.push(_this.dealertList[i].id);
                    }
                    _this.announcementData.dealers = dealerData;
                }
                else {
                    _this.announcementData.dealers = [];
                }
            }, 200);
        }
        if (action == 'direct_dealer') {
            setTimeout(function () {
                if (_this.announcementData.all_direct_dealer == true) {
                    var directDealerData = [];
                    for (var i = 0; i < _this.directDealerList.length; i++) {
                        directDealerData.push(_this.directDealerList[i].id);
                    }
                    _this.announcementData.direct_dealer = directDealerData;
                }
                else {
                    _this.announcementData.direct_dealer = [];
                }
            }, 200);
        }
        if (action == 'distributors') {
            setTimeout(function () {
                if (_this.announcementData.all_distributors == true) {
                    var distributorData = [];
                    for (var i = 0; i < _this.distributorList.length; i++) {
                        distributorData.push(_this.distributorList[i].id);
                    }
                    _this.announcementData.distributors = distributorData;
                }
                else {
                    _this.announcementData.distributors = [];
                }
            }, 200);
        }
        if (action == 'users') {
            setTimeout(function () {
                if (_this.announcementData.all_users == true) {
                    var userData = [];
                    for (var i = 0; i < _this.salesUserList.length; i++) {
                        userData.push(_this.salesUserList[i].id);
                    }
                    _this.announcementData.users = userData;
                }
                else {
                    _this.announcementData.users = [];
                }
            }, 200);
        }
        if (action == 'influencer') {
            setTimeout(function () {
                if (_this.announcementData.all_influencer == true) {
                    var userData = [];
                    for (var i = 0; i < _this.influencerNetwork.length; i++) {
                        userData.push(_this.influencerNetwork[i].id);
                    }
                    _this.announcementData.influencer = userData;
                }
                else {
                    _this.announcementData.influencer = [];
                }
            }, 200);
        }
        // 
    };
    AddAnnoucementComponent.prototype.insertImage = function (data) {
        var _this = this;
        var files = data.target.files;
        if (files) {
            for (var _i = 0, files_1 = files; _i < files_1.length; _i++) {
                var file = files_1[_i];
                var reader = new FileReader();
                reader.onload = function (e) {
                    _this.urls.push(e.target.result);
                };
                reader.readAsDataURL(file);
            }
        }
        for (var i = 0; i < data.target.files.length; i++) {
            this.selectedFile.push(data.target.files[i]);
        }
    };
    AddAnnoucementComponent.prototype.fileChange = function (event) {
        var _this = this;
        for (var i = 0; i < event.target.files.length; i++) {
            this.selectedFile.push(event.target.files[i]);
            var reader = new FileReader();
            reader.onload = function (e) {
                _this.urls.push(e.target.result);
                for (var index = 0; index < _this.selectedFile.length; index++) {
                    for (var urlIndex = 0; urlIndex < _this.urls.length; urlIndex++) {
                        if (index == urlIndex) {
                            _this.selectedFile[index]['path'] = _this.urls[urlIndex];
                        }
                    }
                }
            };
            reader.readAsDataURL(event.target.files[i]);
        }
    };
    AddAnnoucementComponent.prototype.onCoverImageChange = function (event) {
        var _this = this;
        var file = event.target.files && event.target.files[0];
        if (!file) {
            return;
        }
        this.coverImageFile = file;
        var reader = new FileReader();
        reader.onload = function (e) {
            _this.coverImagePreviewUrl = e.target.result;
        };
        reader.readAsDataURL(file);
    };
    AddAnnoucementComponent.prototype.removeCoverImage = function () {
        this.coverImageFile = null;
        this.coverImagePreviewUrl = null;
    };
    AddAnnoucementComponent.prototype.remove_image = function (i) {
        this.urls.splice(i, 1);
        this.selectedFile.splice(i, 1);
    };
    AddAnnoucementComponent.prototype.delete_img = function (index) {
        this.urls.splice(index, 1);
    };
    AddAnnoucementComponent.prototype.blankValue = function (type) {
        if (type == 'Distributor') {
            this.announcementData.all_direct_dealer = false;
            this.announcementData.direct_dealer = [];
            this.announcementData.all_dealers = false;
            this.announcementData.dealers = [];
            this.announcementData.all_users = false;
            this.announcementData.users = [];
            this.announcementData.influencer_type = '';
            this.announcementData.influencer = [];
        }
        else if (type == "Direct Dealer") {
            this.announcementData.all_distributors = false;
            this.announcementData.distributors = [];
            this.announcementData.all_dealers = false;
            this.announcementData.dealers = [];
            this.announcementData.all_users = false;
            this.announcementData.users = [];
            this.announcementData.influencer_type = '';
            this.announcementData.influencer = [];
        }
        else if (type == "Retailer") {
            this.announcementData.all_distributors = false;
            this.announcementData.distributors = [];
            this.announcementData.all_direct_dealer = false;
            this.announcementData.direct_dealer = [];
            this.announcementData.all_users = false;
            this.announcementData.users = [];
            this.announcementData.influencer_type = '';
            this.announcementData.influencer = [];
        }
        else if (type == "Sales Executive") {
            this.announcementData.all_distributors = false;
            this.announcementData.distributors = [];
            this.announcementData.all_direct_dealer = false;
            this.announcementData.direct_dealer = [];
            this.announcementData.all_dealers = false;
            this.announcementData.dealers = [];
            this.announcementData.influencer_type = '';
            this.announcementData.influencer = [];
        }
        else if (type == "Influencer") {
            this.announcementData.all_distributors = false;
            this.announcementData.distributors = [];
            this.announcementData.all_direct_dealer = false;
            this.announcementData.direct_dealer = [];
            this.announcementData.all_dealers = false;
            this.announcementData.dealers = [];
            this.announcementData.all_users = false;
            this.announcementData.users = [];
        }
    };
    AddAnnoucementComponent.prototype.submitAnnouncement = function () {
        var _this = this;
        this.announcementData.uid = this.userId;
        this.announcementData.userName = this.userName;
        this.savingFlag = true;
        this.serve.post_rqst(this.announcementData, "Announcement/addAnnouncement").subscribe(function (result) {
            if (result['statusCode'] == 200) {
                _this.savingFlag = false;
                var id = result['announcement_id'];
                var filesToUpload = _this.coverImageFile ? [_this.coverImageFile].concat(_this.selectedFile) : _this.selectedFile;
                for (var i = 0; i < filesToUpload.length; i++) {
                    _this.formData.append("image" + i, filesToUpload[i], filesToUpload[i].name);
                }
                _this.formData.append('id', id);
                if (filesToUpload && filesToUpload.length > 0) {
                    _this.savingFlag = true;
                    _this.serve.FileData(_this.formData, "Announcement/insertImage").subscribe(function (resp) {
                        if (resp['statusCode'] == 200) {
                            _this.savingFlag = false;
                            _this.dialog.success("Announcement", "Sent");
                            _this.rout.navigate(['/announcement-list']);
                        }
                        else {
                            _this.savingFlag = false;
                            _this.toast.errorToastr(result['statusMsg']);
                        }
                    });
                }
                else {
                    _this.savingFlag = false;
                    _this.dialog.success("Announcement", "Sent");
                    _this.rout.navigate(['/announcement-list']);
                }
                // this.serve.count_list();
            }
            else {
                _this.savingFlag = false;
                _this.toast.errorToastr(result['statusMsg']);
            }
        }, function (err) {
            _this.savingFlag = false;
            _this.toast.errorToastr('Something went wrong');
        });
    };
    AddAnnoucementComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-add-annoucement',
            template: __webpack_require__(/*! ./add-annoucement.component.html */ "./src/app/annoucement/add-annoucement/add-annoucement.component.html"),
            animations: [Object(_router_animation_router_animation_component__WEBPACK_IMPORTED_MODULE_2__["slideToTop"])()],
            styles: [__webpack_require__(/*! ./add-annoucement.component.scss */ "./src/app/annoucement/add-annoucement/add-annoucement.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_7__["ToastrManager"], src_services_DatabaseService__WEBPACK_IMPORTED_MODULE_3__["DatabaseService"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], src_app_localstorage_service__WEBPACK_IMPORTED_MODULE_6__["sessionStorage"], src_app_dialog_component__WEBPACK_IMPORTED_MODULE_5__["DialogComponent"]])
    ], AddAnnoucementComponent);
    return AddAnnoucementComponent;
}());



/***/ }),

/***/ "./src/app/annoucement/annoucement-detail/annoucement-detail.component.html":
/*!**********************************************************************************!*\
  !*** ./src/app/annoucement/annoucement-detail/annoucement-detail.component.html ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "  <div class=\"main-container\">\r\n    <div class=\"tools-container\">\r\n      <a mat-icon-button  matTooltip=\"Back\" routerLink=\"/announcement-list\">\r\n        <i class=\"material-icons\">arrow_back</i>\r\n      </a>\r\n      <h2>Announcement Detail</h2>\r\n    </div>\r\n    \r\n    <div class=\"container pt10 pl10 pr10 pb50\" >\r\n      <div class=\"row\">\r\n        <div class=\"col s12 m8 l8\">\r\n          <!-- product data start -->\r\n          <div class=\"card\" *ngIf=\"!skLoading\">\r\n            <div class=\"card-head\">\r\n              <h2>Basic Details</h2>\r\n            </div>\r\n            <div class=\"card-body\">\r\n              <div class=\"grid-box\">\r\n                <div class=\"block-feilds\">\r\n                  <span>Announcement Date</span>\r\n                  <p>{{noticeDetail.date_created |date : 'd MMM y'}}</p>\r\n                </div>\r\n                <div class=\"block-feilds\">\r\n                  <span>Created By</span>\r\n                  <p>{{noticeDetail.created_by_name}}</p>\r\n                </div>\r\n              </div>\r\n              <div class=\"grid-box single mt16\">\r\n                <div class=\"block-feilds\">\r\n                  <span>Message</span>\r\n                  <p>{{noticeDetail.msg}}</p>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <!-- product data end -->\r\n          \r\n          \r\n          <!-- Skeleton start -->\r\n          <div class=\"card\" *ngIf=\"skLoading\">\r\n            <div class=\"sk-head\">\r\n              <h2>&nbsp;</h2>\r\n            </div>\r\n            <div class=\"card-body\">\r\n              <div class=\"grid-box\">\r\n                <div class=\"sk-box\" *ngFor=\"let row of [].constructor(10)\">\r\n                  &nbsp;\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <!-- Skeleton end -->\r\n          \r\n        </div>\r\n        <div class=\"col s12 m12 l4\">\r\n          <div class=\"card\" *ngIf=\"!skLoading\">\r\n            <div class=\"card-head\">\r\n              <h2>Attachment File</h2>\r\n            </div>\r\n            <div class=\"card-body\">\r\n              <div class=\"img-container\">\r\n                <div class=\"image-block\" *ngFor=\"let val of noticeDetail.doc; let i = index\">\r\n                  <a target=\"blank\" href=\"{{url}}/notices/{{val.image}}\">\r\n                    <img *ngIf =\"val.tittle == 'jpg' || val.tittle == 'jpeg' || val.tittle == 'png'\" height=\"75\" width=\"75\" src=\"{{url}}/notices/{{val.image}}\" alt=\"\">\r\n                    <img *ngIf =\"val.tittle == 'pdf'\" height=\"75\" width=\"75\" src=\"assets/img/pdf1.svg\">\r\n                    <img *ngIf =\"val.tittle == 'docx'\" height=\"75\" width=\"75\" src=\"assets/img/doc.png\">\r\n                  </a>\r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <!-- Skeleton start -->\r\n          <div class=\"card\" *ngIf=\"skLoading\">\r\n            <div class=\"sk-head\">\r\n              <h2>&nbsp;</h2>\r\n            </div>\r\n            <div class=\"card-body\">\r\n              <div class=\"img-container\">\r\n                <div class=\"image-block sk-loading\" *ngFor=\"let row of [].constructor(3)\">\r\n                  &nbsp; \r\n                </div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <!-- Skeleton end -->\r\n          \r\n        </div>\r\n      </div>\r\n      \r\n      <div class=\"row\">\r\n        \r\n        <div class=\"col s12 m6 l6\" *ngIf=\"noticeDetail.distributors != ''\">\r\n          <div class=\"card\" >\r\n            <div class=\"card-head\">\r\n              <h2>To Distributor</h2>\r\n            </div>\r\n            <div class=\"card-body pt0\">\r\n              <mat-list class=\"cs-list-box\">\r\n                <mat-list-item *ngFor=\"let val of noticeDetail.distributors; let i = index\" >\r\n                  {{val.company_name | titlecase}}\r\n                  <div class=\"left-auto\">\r\n                    <i class=\"material-icons\" style=\"font-size: 18px;\" [ngClass]=\"val.read_status == 1 ? 'Approve' : ''\">{{val.read_status == 1 ? 'done_all' : 'done'}}</i>\r\n                  </div>\r\n                </mat-list-item>\r\n              </mat-list>\r\n              \r\n              <ng-container *ngIf=\"noticeDetail.distributors == 'N/A'\">\r\n                <div class=\"no-content\">\r\n                  <i class=\"material-icons\">find_in_page </i>\r\n                </div>\r\n              </ng-container>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col s12 m6 l6\" *ngIf=\"noticeDetail.direct_dealer != ''\">\r\n          <div class=\"card\" >\r\n            <div class=\"card-head\">\r\n              <h2>To Direct Dealer</h2>\r\n            </div>\r\n            <div class=\"card-body pt0\">\r\n              <mat-list class=\"cs-list-box\">\r\n                <mat-list-item *ngFor=\"let val of noticeDetail.direct_dealer; let i = index\" >{{val.company_name | titlecase}}\r\n\r\n                  <div class=\"left-auto\">\r\n                    <i class=\"material-icons\" style=\"font-size: 18px;\" [ngClass]=\"val.read_status == 1 ? 'Approve' : ''\">{{val.read_status == 1 ? 'done_all' : 'done'}}</i>\r\n                  </div>\r\n                </mat-list-item>\r\n              </mat-list>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col s12 m6 l6\" *ngIf=\"noticeDetail.dealers != ''\">\r\n          <div class=\"card\" >\r\n            <div class=\"card-head\">\r\n              <h2>To Retailer</h2>\r\n            </div>\r\n            <div class=\"card-body pt0\">\r\n              <mat-list class=\"cs-list-box\">\r\n                <mat-list-item *ngFor=\"let val of noticeDetail.dealers; let i = index\" >\r\n                  {{val.company_name | titlecase}}\r\n                  <div class=\"left-auto\">\r\n                    <i class=\"material-icons\" style=\"font-size: 18px;\" [ngClass]=\"val.read_status == 1 ? 'Approve' : ''\">{{val.read_status == 1 ? 'done_all' : 'done'}}</i>\r\n                  </div>\r\n                </mat-list-item>\r\n              </mat-list>\r\n              \r\n              <ng-container *ngIf=\"noticeDetail.dealers == 'N/A'\">\r\n                <div class=\"no-content\">\r\n                  <i class=\"material-icons\">find_in_page </i>\r\n                </div>\r\n              </ng-container>\r\n            </div>\r\n          </div>\r\n        </div>\r\n        <div class=\"col s12 m6 l6\" *ngIf=\"noticeDetail.users != ''\">\r\n          <div class=\"card\" >\r\n            <div class=\"card-head\">\r\n              <h2>To Sales Executives</h2>\r\n            </div>\r\n            <div class=\"card-body pt0\">\r\n              <mat-list class=\"cs-list-box\">\r\n                <mat-list-item *ngFor=\"let val of noticeDetail.users; let i = index\">\r\n                  {{val.name | titlecase}}\r\n                  <div class=\"left-auto\">\r\n                    <i class=\"material-icons\" style=\"font-size: 18px;\" [ngClass]=\"val.read_status == 1 ? 'Approve' : ''\">{{val.read_status == 1 ? 'done_all' : 'done'}}</i>\r\n                  </div>\r\n                </mat-list-item>\r\n              </mat-list>\r\n            </div>\r\n          </div>\r\n        </div>\r\n\r\n        <div class=\"col s12 m6 l6\" *ngIf=\"noticeDetail.influencer != ''\">\r\n          <div class=\"card\" >\r\n            <div class=\"card-head\">\r\n              <h2>To Influencer</h2>\r\n            </div>\r\n            <div class=\"card-body pt0\">\r\n              <mat-list class=\"cs-list-box\">\r\n                <mat-list-item *ngFor=\"let val of noticeDetail.influencer; let i = index\">\r\n                  {{val.name | titlecase}} <strong class=\"ml10\"> ({{val.influencer_type |titlecase}})</strong>\r\n                  <div class=\"left-auto\">\r\n                    <i class=\"material-icons\" style=\"font-size: 18px;\" [ngClass]=\"val.read_status == 1 ? 'Approve' : ''\">{{val.read_status == 1 ? 'done_all' : 'done'}}</i>\r\n                  </div>\r\n                </mat-list-item>\r\n              </mat-list>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  \r\n  \r\n  "

/***/ }),

/***/ "./src/app/annoucement/annoucement-detail/annoucement-detail.component.scss":
/*!**********************************************************************************!*\
  !*** ./src/app/annoucement/annoucement-detail/annoucement-detail.component.scss ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/annoucement/annoucement-detail/annoucement-detail.component.ts":
/*!********************************************************************************!*\
  !*** ./src/app/annoucement/annoucement-detail/annoucement-detail.component.ts ***!
  \********************************************************************************/
/*! exports provided: AnnoucementDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnnoucementDetailComponent", function() { return AnnoucementDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_services_DatabaseService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/_services/DatabaseService */ "./src/_services/DatabaseService.ts");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/material/esm5/material.es5.js");
/* harmony import */ var src_app_dialog_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/dialog.component */ "./src/app/dialog.component.ts");
/* harmony import */ var ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ng6-toastr-notifications */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/ng6-toastr-notifications/fesm5/ng6-toastr-notifications.js");







var AnnoucementDetailComponent = /** @class */ (function () {
    function AnnoucementDetailComponent(toast, route, serve, router, dialog, alert) {
        var _this = this;
        this.toast = toast;
        this.route = route;
        this.serve = serve;
        this.router = router;
        this.dialog = dialog;
        this.alert = alert;
        this.skLoading = false;
        this.noticeId = '';
        this.noticeDetail = {};
        this.url = '';
        this.route.params.subscribe(function (params) {
            _this.noticeId = params.id;
            _this.serve.currentUserID = params.id;
        });
        this.url = serve.uploadUrl;
        this.getAnnouncementDetail();
    }
    AnnoucementDetailComponent.prototype.ngOnInit = function () {
    };
    AnnoucementDetailComponent.prototype.getAnnouncementDetail = function () {
        var _this = this;
        this.skLoading = true;
        this.serve.post_rqst({ 'noticeId': this.noticeId }, "Announcement/announcementDetail").subscribe(function (result) {
            if (result['announcement_detail']['statusCode'] == 200) {
                _this.noticeDetail = result['announcement_detail']['announcemenDetail'];
                _this.skLoading = false;
            }
            else {
                _this.skLoading = false;
                _this.toast.errorToastr(result['announcement_detail']['statusMsg']);
            }
        }, function (err) {
            _this.toast.errorToastr('Something went wrong');
        });
    };
    AnnoucementDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-annoucement-detail',
            template: __webpack_require__(/*! ./annoucement-detail.component.html */ "./src/app/annoucement/annoucement-detail/annoucement-detail.component.html"),
            styles: [__webpack_require__(/*! ./annoucement-detail.component.scss */ "./src/app/annoucement/annoucement-detail/annoucement-detail.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_6__["ToastrManager"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            src_services_DatabaseService__WEBPACK_IMPORTED_MODULE_3__["DatabaseService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"],
            _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialog"],
            src_app_dialog_component__WEBPACK_IMPORTED_MODULE_5__["DialogComponent"]])
    ], AnnoucementDetailComponent);
    return AnnoucementDetailComponent;
}());



/***/ }),

/***/ "./src/app/annoucement/annoucement-list/annoucement-list.component.html":
/*!******************************************************************************!*\
  !*** ./src/app/annoucement/annoucement-list/annoucement-list.component.html ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-container\" >\r\n  \r\n  <div class=\"tools-container\">\r\n    <h2>Announcement</h2>\r\n    <!-- <ng-container *ngIf=\"(search.date_created || search.sales_user)  || (search.company_name || search.followup_date || search.assign_to)\">\r\n      <a  mat-raised-button color=\"primary\" (click)=\"clearFilter();\"> <i class=\"material-icons mr10\">filter_alt</i>Clear Filter</a>\r\n    </ng-container> -->\r\n    \r\n    <div class=\"left-auto left-auto df ac flex-gap-10\">\r\n      <button mat-icon-button  matTooltip=\"Refresh\" (click)=\"refresh()\">\r\n        <i class=\"material-icons\">refresh</i>\r\n      </button>\r\n      \r\n      <div class=\"pagination\" *ngIf=\"announcementList.length > 0\">\r\n        <div class=\"pagination-content\">\r\n          Pages\r\n          <span>{{pagenumber}}</span>\r\n          of\r\n          <span>{{total_page}}</span>\r\n        </div>\r\n        <div class=\"page-nav\">\r\n          <button mat-icon-button  matTooltip=\"Older\" (click)=\"pervious()\"  [disabled]=\"start == 0\">\r\n            <i class=\"material-icons\">navigate_before</i>\r\n          </button>\r\n          <button mat-icon-button  matTooltip=\"Newer\" (click)=\"nextPage()\" [disabled]=\"pagenumber == total_page \">\r\n            <i class=\"material-icons\">navigate_next</i>\r\n          </button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <div class=\"container mb100\" >\r\n    <div class=\"announcement-feed\" *ngIf=\"announcementList.length > 0\">\r\n      <a class=\"announcement-card\" *ngFor=\"let val of announcementList; let i = index\" [ngClass]=\"{'Current': service.currentUserID == val.id}\" routerLink=\"detail-announcement/{{val.id}}\" routerLinkActive=\"active\">\r\n        <div class=\"ann-card-head\">\r\n          <div class=\"ann-icon\" [ngClass]=\"typeClass(val.type)\">\r\n            <i class=\"material-icons\">{{typeIcon(val.type)}}</i>\r\n          </div>\r\n          <div class=\"ann-head-meta\">\r\n            <span class=\"ann-sender\">{{val.created_by_name}}</span>\r\n            <span class=\"ann-date\">{{val.date_created | date : 'd MMM y'}}</span>\r\n          </div>\r\n          <i class=\"material-icons ann-chevron\">chevron_right</i>\r\n        </div>\r\n        <p class=\"ann-message\">{{val.msg}}</p>\r\n        <div class=\"ann-bottom-row\">\r\n          <span class=\"ann-type-chip\" [ngClass]=\"typeClass(val.type)\" *ngIf=\"val.type\">{{typeLabel(val.type)}}</span>\r\n          <span class=\"ann-stat total\"><i class=\"material-icons\">groups</i>{{val.total_count}}</span>\r\n          <span class=\"ann-stat read\"><i class=\"material-icons\">done_all</i>{{val.read_count}}</span>\r\n          <span class=\"ann-stat unread\" *ngIf=\"val.unread_count > 0\"><i class=\"material-icons\">mark_email_unread</i>{{val.unread_count}} unread</span>\r\n        </div>\r\n      </a>\r\n\r\n      <ng-container *ngFor=\"let lead of skelton\">\r\n        <div class=\"announcement-card sk-loading\" *ngIf=\"loader\">\r\n          <div class=\"ann-card-head\">\r\n            <div class=\"ann-icon\">&nbsp;</div>\r\n            <div class=\"ann-head-meta\"><div>&nbsp;</div></div>\r\n          </div>\r\n          <p class=\"ann-message\">&nbsp;</p>\r\n        </div>\r\n      </ng-container>\r\n    </div>\r\n\r\n    <ng-container *ngIf=\"announcementList.length == 0 && datanotfound==true\">\r\n      <app-not-result-found></app-not-result-found>\r\n    </ng-container>\r\n  </div>\r\n  \r\n  <div class=\"fab-btns\" *ngIf=\"assign_login_data2.add_announcement=='1'\">\r\n    <button mat-fab  class=\"pulse\" color=\"primary\" routerLink=\"add-announcement\">\r\n      <i class=\"material-icons\">add</i>\r\n      Add New\r\n    </button>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/annoucement/annoucement-list/annoucement-list.component.scss":
/*!******************************************************************************!*\
  !*** ./src/app/annoucement/annoucement-list/annoucement-list.component.scss ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".announcement-feed {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));\n  gap: 14px;\n  padding: 12px 10px 100px;\n  align-items: start;\n}\n\n.announcement-card {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  background: #fff;\n  border: 1px solid #e5e7eb;\n  border-radius: 12px;\n  padding: 16px;\n  text-decoration: none;\n  cursor: pointer;\n  transition: box-shadow 0.15s, border-color 0.15s, transform 0.15s;\n}\n\n.announcement-card:hover {\n  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.08);\n  border-color: #d0d5dd;\n  transform: translateY(-1px);\n}\n\n.announcement-card.Current {\n  border-color: #6366f1;\n  background: rgba(99, 102, 241, 0.04);\n}\n\n.ann-card-head {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n\n.ann-icon {\n  width: 40px;\n  height: 40px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  flex-shrink: 0;\n  background: #eef2ff;\n  color: #6366f1;\n}\n\n.ann-icon i {\n  font-size: 20px;\n}\n\n.ann-icon.type-distributor {\n  background: rgba(99, 102, 241, 0.12);\n  color: #6366f1;\n}\n\n.ann-icon.type-direct-dealer {\n  background: rgba(16, 185, 129, 0.12);\n  color: #10b981;\n}\n\n.ann-icon.type-retailer {\n  background: rgba(245, 158, 11, 0.14);\n  color: #d97706;\n}\n\n.ann-icon.type-sales {\n  background: rgba(59, 130, 246, 0.12);\n  color: #3b82f6;\n}\n\n.ann-icon.type-influencer {\n  background: rgba(236, 72, 153, 0.12);\n  color: #ec4899;\n}\n\n.ann-icon.type-default {\n  background: #eef2ff;\n  color: #6366f1;\n}\n\n.ann-head-meta {\n  flex: 1;\n  min-width: 0;\n  display: flex;\n  flex-direction: column;\n  line-height: 1.3;\n}\n\n.ann-head-meta .ann-sender {\n  font-size: 13px;\n  font-weight: 600;\n  color: #1e293b;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n.ann-head-meta .ann-date {\n  font-size: 11px;\n  color: #94a3b8;\n}\n\n.ann-message {\n  margin: 0;\n  font-size: 13px;\n  color: #475569;\n  display: -webkit-box;\n  -webkit-line-clamp: 3;\n  overflow: hidden;\n  min-height: 3.6em;\n}\n\n.ann-bottom-row {\n  display: flex;\n  flex-wrap: wrap;\n  align-items: center;\n  gap: 8px;\n  padding-top: 10px;\n  border-top: 1px solid #f1f2f4;\n}\n\n.ann-type-chip {\n  font-size: 11px;\n  font-weight: 600;\n  padding: 2px 10px;\n  border-radius: 20px;\n  background: #eef2ff;\n  color: #6366f1;\n}\n\n.ann-type-chip.type-distributor {\n  background: rgba(99, 102, 241, 0.12);\n  color: #6366f1;\n}\n\n.ann-type-chip.type-direct-dealer {\n  background: rgba(16, 185, 129, 0.12);\n  color: #10b981;\n}\n\n.ann-type-chip.type-retailer {\n  background: rgba(245, 158, 11, 0.14);\n  color: #d97706;\n}\n\n.ann-type-chip.type-sales {\n  background: rgba(59, 130, 246, 0.12);\n  color: #3b82f6;\n}\n\n.ann-type-chip.type-influencer {\n  background: rgba(236, 72, 153, 0.12);\n  color: #ec4899;\n}\n\n.ann-stat {\n  display: flex;\n  align-items: center;\n  gap: 3px;\n  font-size: 11px;\n  color: #64748b;\n}\n\n.ann-stat i {\n  font-size: 13px;\n  width: 13px;\n  height: 13px;\n}\n\n.ann-stat.unread {\n  color: #ef4444;\n  font-weight: 600;\n}\n\n.ann-chevron {\n  color: #cbd5e1;\n  flex-shrink: 0;\n}\n\n.announcement-card.sk-loading .ann-icon, .announcement-card.sk-loading .ann-head-meta div, .announcement-card.sk-loading .ann-message {\n  background: #eee;\n  border-radius: 6px;\n  color: transparent;\n}\n\n:host-context(body.dark-mode) .announcement-card {\n  background: #000000;\n  border-color: #1a1a1a;\n}\n\n:host-context(body.dark-mode) .announcement-card:hover {\n  border-color: #333333;\n  box-shadow: none;\n}\n\n:host-context(body.dark-mode) .announcement-card.Current {\n  border-color: #6366f1;\n  background: rgba(99, 102, 241, 0.08);\n}\n\n:host-context(body.dark-mode) .ann-bottom-row {\n  border-top-color: #1a1a1a;\n}\n\n:host-context(body.dark-mode) .ann-head-meta .ann-sender {\n  color: #f5f5f5;\n}\n\n:host-context(body.dark-mode) .ann-message {\n  color: #9a9a9a;\n}\n\n:host-context(body.dark-mode) .ann-chevron {\n  color: #333333;\n}\n\n:host-context(body.dark-mode) .announcement-card.sk-loading .ann-icon, :host-context(body.dark-mode) .announcement-card.sk-loading .ann-head-meta div, :host-context(body.dark-mode) .announcement-card.sk-loading .ann-message {\n  background: #141414;\n}\n\n@media (max-width: 480px) {\n  .announcement-feed {\n    grid-template-columns: 1fr;\n  }\n}"

/***/ }),

/***/ "./src/app/annoucement/annoucement-list/annoucement-list.component.ts":
/*!****************************************************************************!*\
  !*** ./src/app/annoucement/annoucement-list/annoucement-list.component.ts ***!
  \****************************************************************************/
/*! exports provided: AnnoucementListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnnoucementListComponent", function() { return AnnoucementListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _router_animation_router_animation_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../router-animation/router-animation.component */ "./src/app/router-animation/router-animation.component.ts");
/* harmony import */ var src_services_DatabaseService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/_services/DatabaseService */ "./src/_services/DatabaseService.ts");
/* harmony import */ var src_app_localstorage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/localstorage.service */ "./src/app/localstorage.service.ts");
/* harmony import */ var ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng6-toastr-notifications */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/ng6-toastr-notifications/fesm5/ng6-toastr-notifications.js");






var AnnoucementListComponent = /** @class */ (function () {
    function AnnoucementListComponent(toast, service, session) {
        this.toast = toast;
        this.service = service;
        this.session = session;
        this.announcementList = [];
        this.datanotfound = false;
        this.skelton = {};
        this.assign_login_data = [];
        this.assign_login_data2 = [];
        this.sr_no = 0;
        this.page_limit = 20;
        this.pagenumber = 1;
        this.start = 0;
        this.skelton = new Array(10);
        this.assign_login_data = this.session.getSession();
        this.assign_login_data = this.assign_login_data.value;
        this.assign_login_data2 = this.assign_login_data.data;
        this.assign_login_data = this.assign_login_data.assignModule;
    }
    AnnoucementListComponent.prototype.ngOnInit = function () {
        this.annoucementList();
    };
    AnnoucementListComponent.prototype.inputValue = function (value) {
        if (value > this.total_page) {
            this.start = this.total_page;
        }
        else if (value == '' || value <= 0) {
            this.start = 0;
        }
        else {
            this.start = (this.pagenumber * this.page_limit) - this.page_limit;
        }
        this.annoucementList();
    };
    AnnoucementListComponent.prototype.pervious = function () {
        this.start = this.start - this.page_limit;
        this.annoucementList();
    };
    AnnoucementListComponent.prototype.nextPage = function () {
        this.start = this.start + this.page_limit;
        this.annoucementList();
    };
    AnnoucementListComponent.prototype.refresh = function () {
        this.service.currentUserID = '';
        this.annoucementList();
    };
    AnnoucementListComponent.prototype.annoucementList = function () {
        var _this = this;
        this.loader = 1;
        if (this.pagenumber > this.total_page) {
            this.pagenumber = this.total_page;
            this.start = this.pageCount - this.page_limit;
        }
        if (this.start < 0) {
            this.start = 0;
        }
        this.service.post_rqst({ 'user_id': this.assign_login_data2.id, 'start': this.start, 'pagelimit': this.page_limit, 'user_type': this.assign_login_data2.type }, 'Announcement/announcementList').subscribe(function (resp) {
            if (resp['statusCode'] == 200) {
                _this.announcementList = resp['announcementList'];
                _this.pageCount = resp['count'];
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
                if (_this.announcementList.length == 0) {
                    _this.datanotfound = true;
                }
                else {
                    _this.datanotfound = false;
                }
                _this.loader = '';
            }
            else {
                _this.toast.errorToastr(resp['statusMsg']);
            }
        }, function (err) {
            _this.toast.errorToastr('Something went wrong');
        });
    };
    AnnoucementListComponent.prototype.typeIcon = function (type) {
        switch (type) {
            case 'distributors': return 'local_shipping';
            case 'direct_dealer': return 'store';
            case 'dealers': return 'storefront';
            case 'users': return 'badge';
            case 'influencer': return 'star';
            default: return 'campaign';
        }
    };
    AnnoucementListComponent.prototype.typeClass = function (type) {
        switch (type) {
            case 'distributors': return 'type-distributor';
            case 'direct_dealer': return 'type-direct-dealer';
            case 'dealers': return 'type-retailer';
            case 'users': return 'type-sales';
            case 'influencer': return 'type-influencer';
            default: return 'type-default';
        }
    };
    AnnoucementListComponent.prototype.typeLabel = function (type) {
        if (type == 'direct_dealer') {
            return 'Direct Dealer';
        }
        if (type == 'dealers') {
            return 'Retailer';
        }
        if (type == 'users') {
            return 'Sales Executive';
        }
        if (type == 'distributors') {
            return 'Distributor';
        }
        if (type == 'influencer') {
            return 'Influencer';
        }
        return type;
    };
    AnnoucementListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-annoucement-list',
            template: __webpack_require__(/*! ./annoucement-list.component.html */ "./src/app/annoucement/annoucement-list/annoucement-list.component.html"),
            animations: [Object(_router_animation_router_animation_component__WEBPACK_IMPORTED_MODULE_2__["slideToTop"])()],
            styles: [__webpack_require__(/*! ./annoucement-list.component.scss */ "./src/app/annoucement/annoucement-list/annoucement-list.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ng6_toastr_notifications__WEBPACK_IMPORTED_MODULE_5__["ToastrManager"], src_services_DatabaseService__WEBPACK_IMPORTED_MODULE_3__["DatabaseService"], src_app_localstorage_service__WEBPACK_IMPORTED_MODULE_4__["sessionStorage"]])
    ], AnnoucementListComponent);
    return AnnoucementListComponent;
}());



/***/ }),

/***/ "./src/app/annoucement/announcement-module/announcement.module.ts":
/*!************************************************************************!*\
  !*** ./src/app/annoucement/announcement-module/announcement.module.ts ***!
  \************************************************************************/
/*! exports provided: AnnouncementModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnnouncementModule", function() { return AnnouncementModule; });
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
/* harmony import */ var _add_annoucement_add_annoucement_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../add-annoucement/add-annoucement.component */ "./src/app/annoucement/add-annoucement/add-annoucement.component.ts");
/* harmony import */ var _annoucement_detail_annoucement_detail_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../annoucement-detail/annoucement-detail.component */ "./src/app/annoucement/annoucement-detail/annoucement-detail.component.ts");
/* harmony import */ var _annoucement_list_annoucement_list_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../annoucement-list/annoucement-list.component */ "./src/app/annoucement/annoucement-list/annoucement-list.component.ts");















var announcementRoutes = [
    { path: "", children: [
            { path: "", component: _annoucement_list_annoucement_list_component__WEBPACK_IMPORTED_MODULE_14__["AnnoucementListComponent"], canActivate: [src_app_auth_component_guard__WEBPACK_IMPORTED_MODULE_11__["AuthComponentGuard"]], data: { expectedRole: ['1'] } },
            { path: "add-announcement", component: _add_annoucement_add_annoucement_component__WEBPACK_IMPORTED_MODULE_12__["AddAnnoucementComponent"], canActivate: [src_app_auth_component_guard__WEBPACK_IMPORTED_MODULE_11__["AuthComponentGuard"]], data: { expectedRole: ['1'] } },
            { path: "detail-announcement/:id", component: _annoucement_detail_annoucement_detail_component__WEBPACK_IMPORTED_MODULE_13__["AnnoucementDetailComponent"], canActivate: [src_app_auth_component_guard__WEBPACK_IMPORTED_MODULE_11__["AuthComponentGuard"]], data: { expectedRole: ['1'] } },
        ] },
];
var AnnouncementModule = /** @class */ (function () {
    function AnnouncementModule() {
    }
    AnnouncementModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _annoucement_list_annoucement_list_component__WEBPACK_IMPORTED_MODULE_14__["AnnoucementListComponent"],
                _add_annoucement_add_annoucement_component__WEBPACK_IMPORTED_MODULE_12__["AddAnnoucementComponent"],
                _annoucement_detail_annoucement_detail_component__WEBPACK_IMPORTED_MODULE_13__["AnnoucementDetailComponent"],
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_5__["RouterModule"].forChild(announcementRoutes),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"],
                ng_multiselect_dropdown__WEBPACK_IMPORTED_MODULE_7__["NgMultiSelectDropDownModule"],
                src_app_material__WEBPACK_IMPORTED_MODULE_10__["MaterialModule"],
                angular_ng_autocomplete__WEBPACK_IMPORTED_MODULE_6__["AutocompleteLibModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatIconModule"],
                _angular_material__WEBPACK_IMPORTED_MODULE_4__["MatDialogModule"],
                ngx_mat_select_search__WEBPACK_IMPORTED_MODULE_8__["NgxMatSelectSearchModule"],
                src_app_app_utility_module__WEBPACK_IMPORTED_MODULE_9__["AppUtilityModule"]
            ]
        })
    ], AnnouncementModule);
    return AnnouncementModule;
}());



/***/ })

}]);