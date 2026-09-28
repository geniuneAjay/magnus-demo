(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["magnus-network-magnus-network-module"],{

/***/ "./src/app/magnus-network/magnus-network-detail.component.html":
/*!*********************************************************************!*\
  !*** ./src/app/magnus-network/magnus-network-detail.component.html ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-container\" *ngIf=\"p\">\n\n  <div class=\"tools-container\">\n    <button class=\"mnd-back\" (click)=\"back()\" aria-label=\"Back to list\">\n      <i class=\"material-icons\">arrow_back</i>\n    </button>\n    <h2>{{ typeName }} Detail</h2>\n\n    <div class=\"left-auto df ac flex-gap-10\">\n      <div class=\"mnd-nav\">\n        <button (click)=\"step(-1)\" [disabled]=\"idx === 0\" matTooltip=\"Previous account\">\n          <i class=\"material-icons\">chevron_left</i>\n        </button>\n        <span>{{ idx + 1 }} of {{ all.length }}</span>\n        <button (click)=\"step(1)\" [disabled]=\"idx === all.length - 1\" matTooltip=\"Next account\">\n          <i class=\"material-icons\">chevron_right</i>\n        </button>\n      </div>\n      <button mat-icon-button matTooltip=\"Call\"><i class=\"material-icons\">call</i></button>\n      <button mat-icon-button matTooltip=\"Edit\"><i class=\"material-icons\">edit</i></button>\n      <button mat-icon-button matTooltip=\"Export\"><i class=\"material-icons\">file_download</i></button>\n    </div>\n  </div>\n\n  <div class=\"mnd\">\n\n    <!-- ==================================================================\n         Main\n         ================================================================== -->\n    <div class=\"mnd-main\">\n\n      <!-- identity -->\n      <section class=\"mnd-card mnd-head\">\n        <span class=\"mnd-av\" [class]=\"'mnd-av cat-' + p.category\">{{ initials(p.company) }}</span>\n\n        <div class=\"mnd-head-txt\">\n          <b>{{ p.company }}</b>\n          <em>{{ p.code }} · {{ p.type }} · {{ p.city }}, {{ p.state }}</em>\n        </div>\n\n        <div class=\"mnd-head-tags\">\n          <span class=\"mnd-kyc\" [class]=\"'mnd-kyc ' + p.kyc\">\n            <i class=\"material-icons\">{{ kycIcon(p.kyc) }}</i>KYC {{ kycLabel(p.kyc) }}\n          </span>\n          <span class=\"mnd-tag\" [class.on]=\"p.otp\">\n            <i class=\"material-icons\">{{ p.otp ? 'check_circle' : 'radio_button_unchecked' }}</i>\n            OTP {{ p.otp ? 'verified' : 'pending' }}\n          </span>\n          <span class=\"mnd-tag\">Cat {{ p.category }}</span>\n          <span class=\"mnd-tag\">{{ p.segment }}</span>\n          <span class=\"mnd-tag\" [class.off]=\"!p.active\">{{ p.active ? 'Active' : 'Inactive' }}</span>\n        </div>\n      </section>\n\n      <!-- the money -->\n      <section class=\"mnd-stats\">\n        <article>\n          <u>Sales YTD</u>\n          <b>{{ p.ytdSales }}<s> L</s></b>\n          <em>\n            <span class=\"mnd-delta\" [class.down]=\"growth < 0\">\n              <i class=\"material-icons\">{{ growth < 0 ? 'arrow_downward' : 'arrow_upward' }}</i>\n              {{ growth < 0 ? -growth : growth }}%\n            </span>\n            vs {{ p.lastYearSales }} L last year\n          </em>\n        </article>\n        <article>\n          <u>Orders</u>\n          <b>{{ p.orders.length }}</b>\n          <em>₹ {{ inr(orderValue) }} booked</em>\n        </article>\n        <article>\n          <u>Last order</u>\n          <b class=\"sm\">{{ p.lastOrder }}</b>\n          <em>orders {{ p.orderFreq }}</em>\n        </article>\n        <article [class.flag]=\"p.overdueDays > 0\">\n          <u>Outstanding</u>\n          <b class=\"sm\">₹ {{ inr(p.outstanding) }}</b>\n          <em *ngIf=\"p.overdueDays > 0\" class=\"bad\">{{ p.overdueDays }} days overdue</em>\n          <em *ngIf=\"p.overdueDays === 0\">within terms</em>\n        </article>\n      </section>\n\n      <!-- target + credit, the two things a manager checks first -->\n      <section class=\"mnd-card\">\n        <div class=\"mnd-two\">\n          <div>\n            <h4>Target</h4>\n            <span class=\"mnd-goal-top\">\n              <u>{{ p.targetAchieved }} L of {{ p.targetValue }} L</u>\n              <b [class.ok]=\"targetPct >= 100\">{{ targetPct }}%</b>\n            </span>\n            <span class=\"mnd-goal-bar\">\n              <i [class.ok]=\"targetPct >= 100\" [style.width.%]=\"targetPct > 100 ? 100 : targetPct\"></i>\n            </span>\n          </div>\n\n          <div>\n            <h4>Credit used</h4>\n            <span class=\"mnd-goal-top\">\n              <u>₹ {{ inr(p.outstanding) }} of ₹ {{ inr(p.creditLimit) }}</u>\n              <b [class.bad]=\"creditUsedPct > 75\">{{ creditUsedPct }}%</b>\n            </span>\n            <span class=\"mnd-goal-bar\">\n              <i [class.bad]=\"creditUsedPct > 75\" [style.width.%]=\"creditUsedPct\"></i>\n            </span>\n          </div>\n        </div>\n      </section>\n\n      <!-- orders: the three order tabs were only ever a filter -->\n      <section class=\"mnd-card\">\n        <div class=\"mnd-card-head\">\n          <h4>Orders</h4>\n          <div class=\"mnd-seg\">\n            <button [class.on]=\"orderKind === 'all'\" (click)=\"orderKind = 'all'\">\n              All <u>{{ orderCount('all') }}</u>\n            </button>\n            <button [class.on]=\"orderKind === 'Primary'\" (click)=\"orderKind = 'Primary'\">\n              Primary <u>{{ orderCount('Primary') }}</u>\n            </button>\n            <button [class.on]=\"orderKind === 'Secondary'\" (click)=\"orderKind = 'Secondary'\">\n              Secondary <u>{{ orderCount('Secondary') }}</u>\n            </button>\n            <button [class.on]=\"orderKind === 'Stock'\" (click)=\"orderKind = 'Stock'\">\n              Stock <u>{{ orderCount('Stock') }}</u>\n            </button>\n          </div>\n        </div>\n\n        <div class=\"mnd-table-wrap\">\n          <table class=\"mnd-table\">\n            <thead>\n              <tr>\n                <th>Order</th><th>Date</th><th>Type</th>\n                <th class=\"ta-r\">Items</th><th class=\"ta-r\">Amount</th><th>Status</th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr *ngFor=\"let o of orders\">\n                <td class=\"mono\">{{ o.id }}</td>\n                <td>{{ o.date }}</td>\n                <td>{{ o.kind }}</td>\n                <td class=\"ta-r num\">{{ o.items }}</td>\n                <td class=\"ta-r num strong\">₹ {{ inr(o.amount) }}</td>\n                <td><span class=\"mnd-pill\" [class]=\"'mnd-pill ' + statusClass(o.status)\">{{ o.status }}</span></td>\n              </tr>\n            </tbody>\n          </table>\n\n          <p class=\"mnd-none\" *ngIf=\"orders.length === 0\">No {{ orderKind }} orders on this account.</p>\n        </div>\n      </section>\n\n      <!-- one activity trail instead of check-in, audit and ticket tabs -->\n      <section class=\"mnd-card\">\n        <h4>Activity</h4>\n        <ol class=\"mnd-timeline\">\n          <li *ngFor=\"let e of p.events\">\n            <i class=\"mnd-node\" [class]=\"'mnd-node ' + e.kind\">\n              <i class=\"material-icons\">{{ eventIcon(e.kind) }}</i>\n            </i>\n            <span class=\"mnd-tl-date\">{{ e.date }}</span>\n            <span class=\"mnd-tl-body\">\n              <b>{{ e.title }}</b>\n              <em>{{ e.sub }}</em>\n            </span>\n          </li>\n        </ol>\n      </section>\n    </div>\n\n    <!-- ==================================================================\n         Rail: the record itself\n         ================================================================== -->\n    <aside class=\"mnd-side\">\n\n      <div class=\"mnd-card\">\n        <h4>Contact</h4>\n        <ul class=\"mnd-facts\">\n          <li><i class=\"material-icons\">person</i><span><u>Contact person</u><p>{{ p.person }}</p></span></li>\n          <li><i class=\"material-icons\">call</i><span><u>Mobile</u><p class=\"mono\">{{ p.mobile }}</p></span></li>\n          <li *ngIf=\"p.altMobile !== '—'\">\n            <i class=\"material-icons\">phone_iphone</i><span><u>Alternate</u><p class=\"mono\">{{ p.altMobile }}</p></span>\n          </li>\n          <li><i class=\"material-icons\">place</i><span><u>Address</u><p>{{ p.address }}, {{ p.city }}, {{ p.district }}, {{ p.state }}</p></span></li>\n        </ul>\n      </div>\n\n      <div class=\"mnd-card\">\n        <h4>Paperwork</h4>\n        <ul class=\"mnd-facts\">\n          <li><i class=\"material-icons\">receipt_long</i><span><u>GST</u><p class=\"mono\">{{ p.gst }}</p></span></li>\n          <li><i class=\"material-icons\">badge</i><span><u>PAN</u><p class=\"mono\">{{ p.pan }}</p></span></li>\n          <li><i class=\"material-icons\">account_balance</i><span><u>Account</u><p class=\"mono\">{{ p.accountNo }}</p></span></li>\n          <li>\n            <i class=\"material-icons\">{{ kycIcon(p.kyc) }}</i>\n            <span><u>KYC</u><p [class]=\"'st ' + p.kyc\">{{ kycLabel(p.kyc) }}</p></span>\n          </li>\n        </ul>\n      </div>\n\n      <div class=\"mnd-card\">\n        <h4>Loyalty points</h4>\n        <div class=\"mnd-points\">\n          <b>{{ inr(pointsBalance) }}</b>\n          <em>balance</em>\n        </div>\n        <ul class=\"mnd-keys\">\n          <li><span>Earned</span><b>{{ inr(p.pointsEarned) }}</b></li>\n          <li><span>Redeemed</span><b>{{ inr(p.pointsRedeemed) }}</b></li>\n          <li><span>Scheme</span><b>{{ p.schemeActive ? 'Active' : 'Not enrolled' }}</b></li>\n        </ul>\n      </div>\n\n      <div class=\"mnd-card\">\n        <h4>Coverage</h4>\n        <ul class=\"mnd-keys\">\n          <li><span>Retailers mapped</span><b>{{ p.retailers }}</b></li>\n          <li><span>Inventory value</span><b>{{ p.inventoryValue }} L</b></li>\n          <li><span>Visits this year</span><b>{{ p.visits }}</b></li>\n          <li><span>Last visit</span><b>{{ p.lastVisit }}</b></li>\n        </ul>\n      </div>\n\n      <div class=\"mnd-card\">\n        <div class=\"mnd-card-head\">\n          <h4>Tickets</h4>\n          <span class=\"mnd-count\" *ngIf=\"openTickets > 0\">{{ openTickets }} open</span>\n        </div>\n\n        <ul class=\"mnd-tickets\" *ngIf=\"p.tickets.length > 0\">\n          <li *ngFor=\"let t of p.tickets\">\n            <span class=\"mnd-tk-top\">\n              <u class=\"mono\">{{ t.id }}</u>\n              <span class=\"mnd-pill\" [class]=\"'mnd-pill ' + ticketClass(t.status)\">{{ t.status }}</span>\n            </span>\n            <b>{{ t.subject }}</b>\n            <em>{{ t.date }}</em>\n          </li>\n        </ul>\n\n        <p class=\"mnd-none\" *ngIf=\"p.tickets.length === 0\">No tickets raised.</p>\n      </div>\n\n      <div class=\"mnd-card\">\n        <h4>Ownership</h4>\n        <ul class=\"mnd-keys\">\n          <li><span>Assigned to</span><b>{{ p.assignedTo }}</b></li>\n          <li *ngIf=\"p.assignedCp !== '—'\"><span>Under CP</span><b>{{ p.assignedCp }}</b></li>\n          <li><span>Source</span><b>{{ p.source }}</b></li>\n          <li><span>Created</span><b>{{ p.createdOn }}</b></li>\n          <li class=\"muted\"><span>Created by</span><b>{{ p.createdBy }}</b></li>\n        </ul>\n      </div>\n    </aside>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/magnus-network/magnus-network-detail.component.scss":
/*!*********************************************************************!*\
  !*** ./src/app/magnus-network/magnus-network-detail.component.scss ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  --n-surface: var(--surface-card);\n  --n-canvas: var(--grey);\n  --n-hairline: var(--border-light);\n  --n-rule: var(--bodrColor);\n  --n-ink: var(--text);\n  --n-ink-2: var(--text-secondary);\n  --n-ink-3: var(--text-muted);\n  --n-red: var(--primary);\n  --n-red-soft: var(--primary-light);\n  --n-green: var(--success);\n  --n-green-soft: var(--success-light);\n  --n-amber: var(--warning);\n  --n-amber-soft: var(--warning-light);\n  --n-blue: var(--info);\n  display: block;\n  height: 100%;\n}\n\n:host .main-container {\n  display: flex;\n  flex-direction: column;\n}\n\n:host .tools-container {\n  flex: 0 0 auto;\n  position: relative;\n}\n\n.mnd-back {\n  border: 0;\n  background: transparent;\n  cursor: pointer;\n  width: 32px;\n  height: 32px;\n  border-radius: 8px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: var(--n-ink-2);\n  margin-right: 4px;\n  transition: background 0.13s cubic-bezier(0.4, 0, 0.2, 1);\n}\n\n.mnd-back i {\n  font-size: 19px;\n}\n\n.mnd-back:hover {\n  background: var(--n-canvas);\n  color: var(--n-ink);\n}\n\n.mnd-nav {\n  display: inline-flex;\n  align-items: center;\n  background: var(--n-surface);\n  border: 1px solid var(--n-hairline);\n  border-radius: 8px;\n  overflow: hidden;\n}\n\n.mnd-nav button {\n  border: 0;\n  background: transparent;\n  width: 30px;\n  height: 32px;\n  cursor: pointer;\n  color: var(--n-ink-2);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: background 0.13s cubic-bezier(0.4, 0, 0.2, 1);\n}\n\n.mnd-nav button i {\n  font-size: 19px;\n}\n\n.mnd-nav button:hover:not(:disabled) {\n  background: var(--n-canvas);\n  color: var(--n-ink);\n}\n\n.mnd-nav button:disabled {\n  opacity: 0.3;\n  cursor: not-allowed;\n}\n\n.mnd-nav > span {\n  font-size: 12px;\n  color: var(--n-ink-2);\n  padding: 0 9px;\n  font-variant-numeric: tabular-nums;\n  white-space: nowrap;\n}\n\n.mnd {\n  flex: 1 1 auto;\n  min-height: 0;\n  display: grid;\n  grid-template-columns: minmax(0, 1fr) 320px;\n  gap: 12px;\n  padding: 0 16px 16px 16px;\n  background: var(--n-canvas);\n  overflow-y: auto;\n}\n\n.mnd-main {\n  min-width: 0;\n}\n\n.mnd-side {\n  min-width: 0;\n  align-self: start;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n\n.mnd-card {\n  background: var(--n-surface);\n  border: 1px solid var(--n-hairline);\n  border-radius: 12px;\n  padding: 15px;\n  margin-bottom: 10px;\n}\n\n.mnd-card h4 {\n  font-size: 11px;\n  font-weight: 600;\n  letter-spacing: 0.06em;\n  text-transform: uppercase;\n  color: var(--n-ink-3);\n  margin-bottom: 13px;\n}\n\n.mnd-side .mnd-card {\n  margin-bottom: 0;\n}\n\n.mnd-card-head {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 12px;\n  flex-wrap: wrap;\n  margin-bottom: 13px;\n}\n\n.mnd-card-head h4 {\n  margin-bottom: 0;\n}\n\n.mnd-count {\n  font-size: 11px;\n  font-weight: 500;\n  color: var(--n-red);\n  background: var(--n-red-soft);\n  border-radius: 9999px;\n  padding: 2px 8px;\n  white-space: nowrap;\n}\n\n.mnd-head {\n  display: flex;\n  align-items: center;\n  gap: 13px;\n  flex-wrap: wrap;\n}\n\n.mnd-av {\n  width: 46px;\n  height: 46px;\n  border-radius: 12px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 14px;\n  font-weight: 600;\n  color: var(--n-ink-2);\n  background: var(--n-canvas);\n  box-shadow: 0 0 0 1px var(--n-rule);\n  flex-shrink: 0;\n}\n\n.mnd-av.cat-A {\n  box-shadow: 0 0 0 2px var(--n-green);\n}\n\n.mnd-head-txt {\n  flex: 1;\n  min-width: 180px;\n}\n\n.mnd-head-txt b {\n  display: block;\n  font-size: 17px;\n  font-weight: 700;\n  letter-spacing: -0.02em;\n  color: var(--n-ink);\n}\n\n.mnd-head-txt em {\n  display: block;\n  font-style: normal;\n  font-size: 12.5px;\n  color: var(--n-ink-3);\n  margin-top: 2px;\n}\n\n.mnd-head-tags {\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 6px;\n}\n\n.mnd-kyc {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  font-size: 11.5px;\n  font-weight: 500;\n  border-radius: 7px;\n  padding: 4px 9px;\n  white-space: nowrap;\n}\n\n.mnd-kyc i {\n  font-size: 14px;\n}\n\n.mnd-kyc.verified {\n  color: var(--n-green);\n  background: var(--n-green-soft);\n}\n\n.mnd-kyc.pending {\n  color: var(--n-amber);\n  background: var(--n-amber-soft);\n}\n\n.mnd-kyc.rejected {\n  color: var(--n-red);\n  background: var(--n-red-soft);\n}\n\n.mnd-tag {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  font-size: 11.5px;\n  color: var(--n-ink-2);\n  background: var(--n-canvas);\n  border-radius: 7px;\n  padding: 4px 9px;\n  white-space: nowrap;\n}\n\n.mnd-tag i {\n  font-size: 13px;\n  color: var(--n-ink-3);\n}\n\n.mnd-tag.on i {\n  color: var(--n-green);\n}\n\n.mnd-tag.off {\n  color: var(--n-ink-3);\n}\n\n.mnd-stats {\n  display: grid;\n  grid-template-columns: repeat(4, minmax(0, 1fr));\n  gap: 10px;\n  margin-bottom: 10px;\n}\n\n.mnd-stats article {\n  background: var(--n-surface);\n  border: 1px solid var(--n-hairline);\n  border-radius: 11px;\n  padding: 12px 13px;\n  min-width: 0;\n}\n\n.mnd-stats article.flag {\n  border-color: rgba(221, 77, 97, 0.35);\n}\n\n.mnd-stats article u {\n  display: block;\n  text-decoration: none;\n  font-size: 11.5px;\n  color: var(--n-ink-2);\n  margin-bottom: 5px;\n  white-space: nowrap;\n}\n\n.mnd-stats article b {\n  display: block;\n  font-size: 21px;\n  font-weight: 700;\n  letter-spacing: -0.03em;\n  color: var(--n-ink);\n  line-height: 1.2;\n  font-variant-numeric: tabular-nums;\n}\n\n.mnd-stats article b.sm {\n  font-size: 15px;\n  letter-spacing: -0.02em;\n}\n\n.mnd-stats article b s {\n  text-decoration: none;\n  font-size: 12.5px;\n  font-weight: 500;\n  color: var(--n-ink-3);\n}\n\n.mnd-stats article em {\n  display: flex;\n  align-items: center;\n  gap: 5px;\n  flex-wrap: wrap;\n  font-style: normal;\n  font-size: 11px;\n  color: var(--n-ink-3);\n  margin-top: 5px;\n  line-height: 1.4;\n}\n\n.mnd-stats article em.bad {\n  color: var(--n-red);\n}\n\n.mnd-delta {\n  display: inline-flex;\n  align-items: center;\n  gap: 2px;\n  font-size: 11px;\n  font-weight: 600;\n  color: var(--n-green);\n}\n\n.mnd-delta i {\n  font-size: 12px;\n}\n\n.mnd-delta.down {\n  color: var(--n-red);\n}\n\n.mnd-two {\n  display: grid;\n  grid-template-columns: repeat(2, minmax(0, 1fr));\n  gap: 22px;\n}\n\n.mnd-two h4 {\n  margin-bottom: 10px;\n}\n\n.mnd-goal-top {\n  display: flex;\n  align-items: baseline;\n  justify-content: space-between;\n  gap: 10px;\n  margin-bottom: 7px;\n}\n\n.mnd-goal-top u {\n  text-decoration: none;\n  font-size: 12px;\n  color: var(--n-ink-2);\n  font-variant-numeric: tabular-nums;\n}\n\n.mnd-goal-top b {\n  font-size: 13px;\n  font-weight: 700;\n  color: var(--n-ink);\n  font-variant-numeric: tabular-nums;\n}\n\n.mnd-goal-top b.ok {\n  color: var(--n-green);\n}\n\n.mnd-goal-top b.bad {\n  color: var(--n-red);\n}\n\n.mnd-goal-bar {\n  display: block;\n  height: 7px;\n  border-radius: 9999px;\n  background: var(--n-hairline);\n  overflow: hidden;\n}\n\n.mnd-goal-bar i {\n  display: block;\n  height: 100%;\n  border-radius: 9999px;\n  background: var(--n-ink-3);\n  transition: width 0.45s cubic-bezier(0.4, 0, 0.2, 1);\n}\n\n.mnd-goal-bar i.ok {\n  background: var(--n-green);\n}\n\n.mnd-goal-bar i.bad {\n  background: var(--n-red);\n}\n\n.mnd-seg {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 4px;\n}\n\n.mnd-seg button {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  border: 0;\n  background: var(--n-canvas);\n  border-radius: 7px;\n  padding: 5px 10px;\n  font-size: 12px;\n  font-weight: 500;\n  color: var(--n-ink-2);\n  cursor: pointer;\n  white-space: nowrap;\n  transition: background 0.13s cubic-bezier(0.4, 0, 0.2, 1), color 0.13s cubic-bezier(0.4, 0, 0.2, 1);\n}\n\n.mnd-seg button u {\n  text-decoration: none;\n  font-weight: 600;\n  color: var(--n-ink-3);\n  font-variant-numeric: tabular-nums;\n}\n\n.mnd-seg button:hover {\n  color: var(--n-ink);\n}\n\n.mnd-seg button.on {\n  background: var(--n-ink);\n  color: #ffffff;\n}\n\n.mnd-seg button.on u {\n  color: rgba(255, 255, 255, 0.7);\n}\n\n.mnd-table-wrap {\n  overflow-x: auto;\n}\n\n.mnd-table {\n  width: 100%;\n  border-collapse: collapse;\n}\n\n.mnd-table th {\n  font-size: 11px;\n  font-weight: 600;\n  letter-spacing: 0.05em;\n  text-transform: uppercase;\n  color: var(--n-ink-3);\n  text-align: left;\n  padding: 0 12px 9px 12px;\n  border-bottom: 1px solid var(--n-hairline);\n  white-space: nowrap;\n}\n\n.mnd-table td {\n  font-size: 13px;\n  color: var(--n-ink-2);\n  padding: 11px 12px;\n  border-bottom: 1px solid var(--n-hairline);\n  white-space: nowrap;\n}\n\n.mnd-table tbody tr:last-child td {\n  border-bottom: 0;\n}\n\n.mnd-table tbody tr:hover td {\n  background: var(--n-canvas);\n}\n\n.mnd-table .mono {\n  font-variant-numeric: tabular-nums;\n  color: var(--n-ink-3);\n}\n\n.mnd-table .num {\n  font-variant-numeric: tabular-nums;\n}\n\n.mnd-table .strong {\n  color: var(--n-ink);\n  font-weight: 600;\n}\n\n.mnd-table .ta-r {\n  text-align: right;\n}\n\n.mnd-table th:first-child, .mnd-table td:first-child {\n  padding-left: 0;\n}\n\n.mnd-table th:last-child, .mnd-table td:last-child {\n  padding-right: 0;\n}\n\n.mnd-pill {\n  display: inline-block;\n  font-size: 11.5px;\n  font-weight: 500;\n  border-radius: 6px;\n  padding: 3px 9px;\n  background: var(--n-canvas);\n  color: var(--n-ink-2);\n  white-space: nowrap;\n}\n\n.mnd-pill.ok {\n  background: var(--n-green-soft);\n  color: var(--n-green);\n}\n\n.mnd-pill.info {\n  background: var(--n-canvas);\n  color: var(--n-blue);\n}\n\n.mnd-pill.warn {\n  background: var(--n-amber-soft);\n  color: var(--n-amber);\n}\n\n.mnd-pill.bad {\n  background: var(--n-red-soft);\n  color: var(--n-red);\n}\n\n.mnd-none {\n  font-size: 13px;\n  color: var(--n-ink-3);\n  padding: 16px 0 4px;\n}\n\n.mnd-timeline {\n  list-style: none;\n}\n\n.mnd-timeline li {\n  position: relative;\n  display: grid;\n  grid-template-columns: 28px 96px minmax(0, 1fr);\n  gap: 11px;\n  align-items: flex-start;\n  padding: 9px 0;\n}\n\n.mnd-timeline li:not(:last-child)::before {\n  content: \"\";\n  position: absolute;\n  left: 13px;\n  top: 35px;\n  bottom: -9px;\n  width: 1px;\n  background: var(--n-hairline);\n}\n\n.mnd-node {\n  width: 27px;\n  height: 27px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: var(--n-canvas);\n  box-shadow: 0 0 0 1px var(--n-rule);\n  z-index: 1;\n}\n\n.mnd-node i.material-icons {\n  font-size: 14px;\n  color: var(--n-ink-2);\n}\n\n.mnd-node.order i {\n  color: var(--n-ink);\n}\n\n.mnd-node.payment i {\n  color: var(--n-green);\n}\n\n.mnd-node.ticket i {\n  color: var(--n-amber);\n}\n\n.mnd-tl-date {\n  font-size: 12px;\n  color: var(--n-ink-3);\n  padding-top: 5px;\n  white-space: nowrap;\n  font-variant-numeric: tabular-nums;\n}\n\n.mnd-tl-body {\n  min-width: 0;\n  padding-top: 3px;\n}\n\n.mnd-tl-body b {\n  display: block;\n  font-size: 13.5px;\n  font-weight: 500;\n  color: var(--n-ink);\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n.mnd-tl-body em {\n  display: block;\n  font-style: normal;\n  font-size: 12px;\n  color: var(--n-ink-3);\n  margin-top: 2px;\n}\n\n.mnd-facts {\n  list-style: none;\n}\n\n.mnd-facts li {\n  display: flex;\n  align-items: flex-start;\n  gap: 9px;\n  padding: 8px 0;\n}\n\n.mnd-facts li + li {\n  border-top: 1px solid var(--n-hairline);\n}\n\n.mnd-facts li > i {\n  font-size: 16px;\n  color: var(--n-ink-3);\n  flex-shrink: 0;\n  margin-top: 1px;\n}\n\n.mnd-facts li span {\n  min-width: 0;\n}\n\n.mnd-facts li u {\n  display: block;\n  text-decoration: none;\n  font-size: 11px;\n  color: var(--n-ink-3);\n  margin-bottom: 2px;\n}\n\n.mnd-facts li p {\n  font-size: 12.5px;\n  color: var(--n-ink);\n  line-height: 1.45;\n  word-break: break-word;\n}\n\n.mnd-facts li p.mono {\n  font-variant-numeric: tabular-nums;\n}\n\n.mnd-facts li p.st.verified {\n  color: var(--n-green);\n  font-weight: 500;\n}\n\n.mnd-facts li p.st.pending {\n  color: var(--n-amber);\n  font-weight: 500;\n}\n\n.mnd-facts li p.st.rejected {\n  color: var(--n-red);\n  font-weight: 500;\n}\n\n.mnd-points {\n  display: flex;\n  align-items: baseline;\n  gap: 8px;\n  padding-bottom: 11px;\n  margin-bottom: 3px;\n  border-bottom: 1px solid var(--n-hairline);\n}\n\n.mnd-points b {\n  font-size: 26px;\n  font-weight: 700;\n  letter-spacing: -0.03em;\n  color: var(--n-ink);\n  font-variant-numeric: tabular-nums;\n}\n\n.mnd-points em {\n  font-style: normal;\n  font-size: 12px;\n  color: var(--n-ink-3);\n}\n\n.mnd-keys {\n  list-style: none;\n}\n\n.mnd-keys li {\n  display: flex;\n  align-items: center;\n  gap: 9px;\n  padding: 7px 0;\n  font-size: 13px;\n  color: var(--n-ink-2);\n}\n\n.mnd-keys li + li {\n  border-top: 1px solid var(--n-hairline);\n}\n\n.mnd-keys li span {\n  flex: 1;\n  min-width: 0;\n}\n\n.mnd-keys li b {\n  font-weight: 600;\n  color: var(--n-ink);\n  font-variant-numeric: tabular-nums;\n  text-align: right;\n  max-width: 60%;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n.mnd-keys li.muted b {\n  font-weight: 400;\n  color: var(--n-ink-3);\n}\n\n.mnd-tickets {\n  list-style: none;\n}\n\n.mnd-tickets li {\n  padding: 9px 0;\n}\n\n.mnd-tickets li + li {\n  border-top: 1px solid var(--n-hairline);\n}\n\n.mnd-tickets li b {\n  display: block;\n  font-size: 12.5px;\n  font-weight: 500;\n  color: var(--n-ink);\n  line-height: 1.4;\n  margin: 4px 0 2px;\n}\n\n.mnd-tickets li em {\n  font-style: normal;\n  font-size: 11px;\n  color: var(--n-ink-3);\n}\n\n.mnd-tk-top {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 8px;\n}\n\n.mnd-tk-top u {\n  text-decoration: none;\n  font-size: 11px;\n  color: var(--n-ink-3);\n}\n\n@media only screen and (max-width: 1400px) {\n  .mnd-stats {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n}\n\n@media only screen and (max-width: 1180px) {\n  .mnd {\n    grid-template-columns: minmax(0, 1fr);\n  }\n}\n\n@media only screen and (max-width: 760px) {\n  .mnd {\n    padding: 0 12px 12px 12px;\n  }\n  .mnd-two {\n    grid-template-columns: minmax(0, 1fr);\n    gap: 18px;\n  }\n  .mnd-timeline li {\n    grid-template-columns: 28px minmax(0, 1fr);\n  }\n  .mnd-tl-date {\n    grid-column: 2;\n    padding-top: 0;\n  }\n}"

/***/ }),

/***/ "./src/app/magnus-network/magnus-network-detail.component.ts":
/*!*******************************************************************!*\
  !*** ./src/app/magnus-network/magnus-network-detail.component.ts ***!
  \*******************************************************************/
/*! exports provided: MagnusNetworkDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MagnusNetworkDetailComponent", function() { return MagnusNetworkDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _network_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./network-data */ "./src/app/magnus-network/network-data.ts");




// ============================================================================
// MAGNUS PLYWOOD - Customer network detail
//
// The original page carried eighteen tabs: Profile, Check-in, Primary Order,
// Secondary Order, Stock Order, Inventory, Ledger, Point Ledger, Target,
// Retailer, Segment, Brand Audit, Ticket, Gallery, Purchase, Stock, Send
// Request and Transfer Requests. Answering "how is this account doing" meant
// opening six of them and holding the numbers in your head.
//
// Here the account is one page. The money (sales, target, outstanding, points)
// sits at the top, the trading history runs down the middle as orders and a
// single activity trail, and the record itself - identity, paperwork, who owns
// it - sits in the rail. The order tabs become a filter on one table, because
// that is what they always were.
//
// Demo mock: no HTTP calls.
// ============================================================================
var MagnusNetworkDetailComponent = /** @class */ (function () {
    function MagnusNetworkDetailComponent(route, router) {
        this.route = route;
        this.router = router;
        this.all = [];
        this.p = null;
        this.typeId = '';
        this.typeName = 'Channel Partner';
        this.orderKind = 'all';
        // ==========================================================================
        // Template helpers
        // ==========================================================================
        this.initials = _network_data__WEBPACK_IMPORTED_MODULE_3__["initials"];
        this.inr = _network_data__WEBPACK_IMPORTED_MODULE_3__["inr"];
    }
    MagnusNetworkDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.all = Object(_network_data__WEBPACK_IMPORTED_MODULE_3__["buildPartners"])();
        this.route.paramMap.subscribe(function (m) {
            _this.typeId = m.get('id') || '';
            var t = m.get('type');
            if (t) {
                _this.typeName = decodeURIComponent(t);
            }
            var pid = m.get('pid');
            var found = _this.all.filter(function (x) { return x.id === pid; });
            _this.p = found.length ? found[0] : _this.all[0];
        });
    };
    Object.defineProperty(MagnusNetworkDetailComponent.prototype, "idx", {
        // ==========================================================================
        // Navigation
        // ==========================================================================
        get: function () {
            for (var i = 0; i < this.all.length; i++) {
                if (this.all[i].id === this.p.id) {
                    return i;
                }
            }
            return 0;
        },
        enumerable: true,
        configurable: true
    });
    MagnusNetworkDetailComponent.prototype.step = function (d) {
        var n = this.idx + d;
        if (n < 0 || n > this.all.length - 1) {
            return;
        }
        this.router.navigate(['/distribution-list', this.typeId, this.typeName, 'detail', this.all[n].id]);
    };
    MagnusNetworkDetailComponent.prototype.back = function () {
        this.router.navigate(['/distribution-list', this.typeId, this.typeName]);
    };
    Object.defineProperty(MagnusNetworkDetailComponent.prototype, "orders", {
        // ==========================================================================
        // Derived figures
        // ==========================================================================
        get: function () {
            var _this = this;
            if (this.orderKind === 'all') {
                return this.p.orders;
            }
            return this.p.orders.filter(function (o) { return o.kind === _this.orderKind; });
        },
        enumerable: true,
        configurable: true
    });
    MagnusNetworkDetailComponent.prototype.orderCount = function (kind) {
        if (kind === 'all') {
            return this.p.orders.length;
        }
        return this.p.orders.filter(function (o) { return o.kind === kind; }).length;
    };
    Object.defineProperty(MagnusNetworkDetailComponent.prototype, "orderValue", {
        get: function () {
            return this.p.orders.reduce(function (a, o) { return a + o.amount; }, 0);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MagnusNetworkDetailComponent.prototype, "growth", {
        get: function () {
            return Math.round(((this.p.ytdSales - this.p.lastYearSales) / this.p.lastYearSales) * 100);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MagnusNetworkDetailComponent.prototype, "targetPct", {
        get: function () {
            return Math.min(150, Math.round((this.p.targetAchieved / this.p.targetValue) * 100));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MagnusNetworkDetailComponent.prototype, "pointsBalance", {
        get: function () {
            return this.p.pointsEarned - this.p.pointsRedeemed;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MagnusNetworkDetailComponent.prototype, "creditUsedPct", {
        get: function () {
            return Math.min(100, Math.round((this.p.outstanding / this.p.creditLimit) * 100));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MagnusNetworkDetailComponent.prototype, "openTickets", {
        get: function () {
            return this.p.tickets.filter(function (t) { return t.status !== 'Closed'; }).length;
        },
        enumerable: true,
        configurable: true
    });
    MagnusNetworkDetailComponent.prototype.kycLabel = function (k) {
        return k === 'verified' ? 'Verified' : k === 'pending' ? 'Pending' : 'Rejected';
    };
    MagnusNetworkDetailComponent.prototype.kycIcon = function (k) {
        return k === 'verified' ? 'verified_user' : k === 'pending' ? 'pending' : 'gpp_bad';
    };
    MagnusNetworkDetailComponent.prototype.eventIcon = function (k) {
        return k === 'visit' ? 'place'
            : k === 'order' ? 'shopping_cart'
                : k === 'ticket' ? 'confirmation_number'
                    : k === 'payment' ? 'payments'
                        : 'fact_check';
    };
    MagnusNetworkDetailComponent.prototype.statusClass = function (s) {
        return s === 'Dispatched' ? 'ok'
            : s === 'In transit' ? 'info'
                : s === 'Pending' ? 'warn' : 'bad';
    };
    MagnusNetworkDetailComponent.prototype.ticketClass = function (s) {
        return s === 'Closed' ? 'ok' : s === 'Open' ? 'bad' : 'warn';
    };
    MagnusNetworkDetailComponent.prototype.lakh = function (n) {
        return (Math.round(n / 1000) / 100).toFixed(2);
    };
    MagnusNetworkDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-magnus-network-detail',
            template: __webpack_require__(/*! ./magnus-network-detail.component.html */ "./src/app/magnus-network/magnus-network-detail.component.html"),
            styles: [__webpack_require__(/*! ./magnus-network-detail.component.scss */ "./src/app/magnus-network/magnus-network-detail.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], MagnusNetworkDetailComponent);
    return MagnusNetworkDetailComponent;
}());



/***/ }),

/***/ "./src/app/magnus-network/magnus-network-list.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/magnus-network/magnus-network-list.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-container\">\n\n  <div class=\"tools-container\">\n    <h2>{{ typeName }}</h2>\n\n    <div class=\"left-auto df ac flex-gap-10\">\n      <span class=\"mgn-chip\">{{ list.length }} of {{ total }}</span>\n      <span class=\"mgn-chip alert\" *ngIf=\"pendingKyc > 0\">\n        <i class=\"material-icons\">gpp_maybe</i>{{ pendingKyc }} KYC pending\n      </span>\n      <button mat-icon-button matTooltip=\"Add\"><i class=\"material-icons\">add</i></button>\n      <button mat-icon-button matTooltip=\"Export\"><i class=\"material-icons\">file_download</i></button>\n      <button mat-icon-button matTooltip=\"Refresh\"><i class=\"material-icons\">refresh</i></button>\n    </div>\n  </div>\n\n  <div class=\"mgn\">\n\n    <!-- ==================================================================\n         Network at a glance\n         ================================================================== -->\n    <section class=\"mgn-kpis\">\n      <article>\n        <u>Accounts</u><b>{{ total }}</b><em>{{ activeCount }} active</em>\n      </article>\n      <article>\n        <u>KYC verified</u>\n        <b>{{ verifiedCount }}<s>/{{ total }}</s></b>\n        <em>{{ verifiedPct }}% of the network</em>\n      </article>\n      <article>\n        <u>Sales YTD</u>\n        <b>{{ totalSales }}<s> L</s></b>\n        <em>\n          <span class=\"mgn-delta\" [class.down]=\"growthPct < 0\">\n            <i class=\"material-icons\">{{ growthPct < 0 ? 'arrow_downward' : 'arrow_upward' }}</i>\n            {{ growthPct < 0 ? -growthPct : growthPct }}%\n          </span>\n          vs last year\n        </em>\n      </article>\n      <article [class.flag]=\"overdueCount > 0\">\n        <u>Overdue payments</u><b>{{ overdueCount }}</b><em>accounts past due date</em>\n      </article>\n    </section>\n\n    <!-- search + filters -->\n    <section class=\"mgn-bar\">\n      <div class=\"mgn-search\">\n        <i class=\"material-icons\">search</i>\n        <input type=\"text\" placeholder=\"Search company, person, city, code or mobile\"\n               [(ngModel)]=\"search\" name=\"mgnSearch\" autocomplete=\"off\">\n        <button class=\"mgn-x\" *ngIf=\"search\" (click)=\"clearSearch()\" aria-label=\"Clear\">\n          <i class=\"material-icons\">close</i>\n        </button>\n      </div>\n\n      <div class=\"mgn-filters\">\n        <button [class.on]=\"filter === 'all'\" (click)=\"filter = 'all'\">All <u>{{ countFor('all') }}</u></button>\n        <button [class.on]=\"filter === 'active'\" (click)=\"filter = 'active'\">Active <u>{{ countFor('active') }}</u></button>\n        <button [class.on]=\"filter === 'inactive'\" (click)=\"filter = 'inactive'\">Inactive <u>{{ countFor('inactive') }}</u></button>\n        <button [class.on]=\"filter === 'scheme'\" (click)=\"filter = 'scheme'\">Scheme <u>{{ countFor('scheme') }}</u></button>\n        <button class=\"flag\" [class.on]=\"filter === 'kyc'\" (click)=\"filter = 'kyc'\" *ngIf=\"countFor('kyc') > 0\">\n          <i class=\"material-icons\">gpp_maybe</i>KYC <u>{{ countFor('kyc') }}</u>\n        </button>\n      </div>\n    </section>\n\n    <!-- ==================================================================\n         The table\n         ================================================================== -->\n    <section class=\"mgn-sheet\">\n      <div class=\"mgn-scroll\">\n        <table class=\"mgn-table\">\n          <thead>\n            <tr>\n              <th class=\"w-sn\">#</th>\n\n              <th class=\"sortable\" (click)=\"toggleSort('company')\" [class.on]=\"sortKey === 'company'\">\n                Company <i class=\"material-icons\">{{ sortIcon('company') }}</i>\n              </th>\n\n              <th class=\"sortable\" (click)=\"toggleSort('person')\" [class.on]=\"sortKey === 'person'\">\n                Contact <i class=\"material-icons\">{{ sortIcon('person') }}</i>\n              </th>\n\n              <th class=\"sortable\" (click)=\"toggleSort('city')\" [class.on]=\"sortKey === 'city'\">\n                City / State <i class=\"material-icons\">{{ sortIcon('city') }}</i>\n              </th>\n\n              <th class=\"sortable ta-c\" (click)=\"toggleSort('category')\" [class.on]=\"sortKey === 'category'\">\n                Cat <i class=\"material-icons\">{{ sortIcon('category') }}</i>\n              </th>\n\n              <th class=\"sortable\" (click)=\"toggleSort('kyc')\" [class.on]=\"sortKey === 'kyc'\">\n                KYC <i class=\"material-icons\">{{ sortIcon('kyc') }}</i>\n              </th>\n\n              <th class=\"sortable ta-r\" (click)=\"toggleSort('ytdSales')\" [class.on]=\"sortKey === 'ytdSales'\">\n                Sales YTD <i class=\"material-icons\">{{ sortIcon('ytdSales') }}</i>\n              </th>\n\n              <th class=\"ta-r\">Outstanding</th>\n\n              <th class=\"sortable\" (click)=\"toggleSort('lastOrder')\" [class.on]=\"sortKey === 'lastOrder'\">\n                Last order <i class=\"material-icons\">{{ sortIcon('lastOrder') }}</i>\n              </th>\n\n              <th class=\"sortable ta-r\" (click)=\"toggleSort('visits')\" [class.on]=\"sortKey === 'visits'\">\n                Visits <i class=\"material-icons\">{{ sortIcon('visits') }}</i>\n              </th>\n\n              <th>Assigned to</th>\n              <th class=\"w-act\"></th>\n            </tr>\n          </thead>\n\n          <tbody>\n            <tr *ngFor=\"let p of list; let i = index\" (click)=\"open(p)\" [class.off]=\"!p.active\">\n              <td class=\"w-sn num\">{{ i + 1 }}</td>\n\n              <td class=\"c-company\">\n                <div class=\"mgn-cowrap\">\n                  <span class=\"mgn-av\" [class]=\"'mgn-av cat-' + p.category\">{{ initials(p.company) }}</span>\n                  <span class=\"mgn-co\">\n                    <b>{{ p.company }}</b>\n                    <em>{{ p.code }} · {{ p.type }}</em>\n                  </span>\n                </div>\n              </td>\n\n              <td>\n                <span class=\"mgn-two\">\n                  <b>{{ p.person }}</b>\n                  <em class=\"mono\">{{ p.mobile }}</em>\n                </span>\n              </td>\n\n              <td>\n                <span class=\"mgn-two\">\n                  <b>{{ p.city }}</b>\n                  <em>{{ p.state }}</em>\n                </span>\n              </td>\n\n              <td class=\"ta-c\"><span class=\"mgn-cat\">{{ p.category }}</span></td>\n\n              <td>\n                <span class=\"mgn-kyc\" [class]=\"'mgn-kyc ' + p.kyc\">\n                  <i class=\"material-icons\">{{ kycIcon(p.kyc) }}</i>{{ kycLabel(p.kyc) }}\n                </span>\n              </td>\n\n              <td class=\"ta-r\">\n                <span class=\"mgn-sales\">\n                  <b>{{ p.ytdSales }} L</b>\n                  <span class=\"mgn-delta sm\" [class.down]=\"delta(p) < 0\">\n                    <i class=\"material-icons\">{{ delta(p) < 0 ? 'arrow_downward' : 'arrow_upward' }}</i>\n                    {{ delta(p) < 0 ? -delta(p) : delta(p) }}%\n                  </span>\n                </span>\n              </td>\n\n              <td class=\"ta-r num\">\n                <span [class.due]=\"p.overdueDays > 0\">₹ {{ inr(p.outstanding) }}</span>\n                <em class=\"mgn-due\" *ngIf=\"p.overdueDays > 0\">{{ p.overdueDays }}d overdue</em>\n              </td>\n\n              <td class=\"num\">{{ p.lastOrder }}</td>\n\n              <td class=\"ta-r num\">{{ p.visits }}</td>\n\n              <td class=\"c-assign\">{{ p.assignedTo }}</td>\n\n              <td class=\"w-act\">\n                <span class=\"mgn-off\" *ngIf=\"!p.active\">Inactive</span>\n                <i class=\"material-icons mgn-go\">chevron_right</i>\n              </td>\n            </tr>\n          </tbody>\n        </table>\n      </div>\n\n      <div class=\"mgn-empty\" *ngIf=\"list.length === 0\">\n        <img src=\"assets/img/no-data.svg\" alt=\"\">\n        <p>No accounts match this filter<span>Try a different filter or clear the search.</span></p>\n      </div>\n    </section>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/magnus-network/magnus-network-list.component.scss":
/*!*******************************************************************!*\
  !*** ./src/app/magnus-network/magnus-network-list.component.scss ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  --n-surface: var(--surface-card);\n  --n-canvas: var(--grey);\n  --n-hairline: var(--border-light);\n  --n-rule: var(--bodrColor);\n  --n-ink: var(--text);\n  --n-ink-2: var(--text-secondary);\n  --n-ink-3: var(--text-muted);\n  --n-red: var(--primary);\n  --n-red-soft: var(--primary-light);\n  --n-green: var(--success);\n  --n-green-soft: var(--success-light);\n  --n-amber: var(--warning);\n  --n-amber-soft: var(--warning-light);\n  display: block;\n  height: 100%;\n}\n\n:host .main-container {\n  display: flex;\n  flex-direction: column;\n}\n\n:host .tools-container {\n  flex: 0 0 auto;\n  position: relative;\n}\n\n.mgn-chip {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  font-size: 12.5px;\n  color: var(--n-ink-2);\n  background: var(--n-surface);\n  border: 1px solid var(--n-hairline);\n  border-radius: 8px;\n  padding: 7px 11px;\n  white-space: nowrap;\n}\n\n.mgn-chip i {\n  font-size: 15px;\n}\n\n.mgn-chip.alert {\n  color: var(--n-red);\n  background: var(--n-red-soft);\n  border-color: transparent;\n}\n\n.mgn {\n  flex: 1 1 auto;\n  min-height: 0;\n  display: flex;\n  flex-direction: column;\n  padding: 0 16px 16px 16px;\n  background: var(--n-canvas);\n}\n\n.mgn-kpis {\n  display: grid;\n  grid-template-columns: repeat(4, minmax(0, 1fr));\n  gap: 10px;\n  margin-bottom: 10px;\n  flex: 0 0 auto;\n}\n\n.mgn-kpis article {\n  background: var(--n-surface);\n  border: 1px solid var(--n-hairline);\n  border-radius: 11px;\n  padding: 12px 13px;\n  min-width: 0;\n}\n\n.mgn-kpis article.flag {\n  border-color: rgba(221, 77, 97, 0.35);\n}\n\n.mgn-kpis article u {\n  display: block;\n  text-decoration: none;\n  font-size: 11.5px;\n  color: var(--n-ink-2);\n  margin-bottom: 5px;\n  white-space: nowrap;\n}\n\n.mgn-kpis article b {\n  display: block;\n  font-size: 22px;\n  font-weight: 700;\n  letter-spacing: -0.03em;\n  color: var(--n-ink);\n  line-height: 1.15;\n  font-variant-numeric: tabular-nums;\n}\n\n.mgn-kpis article b s {\n  text-decoration: none;\n  font-size: 12.5px;\n  font-weight: 500;\n  color: var(--n-ink-3);\n}\n\n.mgn-kpis article em {\n  display: flex;\n  align-items: center;\n  gap: 5px;\n  flex-wrap: wrap;\n  font-style: normal;\n  font-size: 11px;\n  color: var(--n-ink-3);\n  margin-top: 5px;\n  line-height: 1.4;\n}\n\n.mgn-delta {\n  display: inline-flex;\n  align-items: center;\n  gap: 2px;\n  font-size: 11px;\n  font-weight: 600;\n  color: var(--n-green);\n}\n\n.mgn-delta i {\n  font-size: 12px;\n}\n\n.mgn-delta.down {\n  color: var(--n-red);\n}\n\n.mgn-bar {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  flex-wrap: wrap;\n  background: var(--n-surface);\n  border: 1px solid var(--n-hairline);\n  border-radius: 11px;\n  padding: 9px 11px;\n  margin-bottom: 10px;\n  flex: 0 0 auto;\n}\n\n.mgn-search {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  flex: 1 1 260px;\n  min-width: 0;\n  background: var(--n-canvas);\n  border: 1px solid transparent;\n  border-radius: 8px;\n  padding: 0 10px;\n  height: 34px;\n  transition: border-color 0.15s cubic-bezier(0.4, 0, 0.2, 1), background 0.15s cubic-bezier(0.4, 0, 0.2, 1);\n}\n\n.mgn-search:focus-within {\n  background: var(--n-surface);\n  border-color: var(--n-rule);\n}\n\n.mgn-search > i {\n  font-size: 17px;\n  color: var(--n-ink-3);\n}\n\n.mgn-search input {\n  flex: 1;\n  min-width: 0;\n  border: 0;\n  outline: 0;\n  background: transparent;\n  font-size: 13px;\n  color: var(--n-ink);\n}\n\n.mgn-search input::-moz-placeholder {\n  color: var(--n-ink-3);\n}\n\n.mgn-search input::placeholder {\n  color: var(--n-ink-3);\n}\n\n.mgn-x {\n  border: 0;\n  background: transparent;\n  cursor: pointer;\n  padding: 0;\n  display: flex;\n  align-items: center;\n  color: var(--n-ink-3);\n}\n\n.mgn-x i {\n  font-size: 16px;\n}\n\n.mgn-x:hover {\n  color: var(--n-ink);\n}\n\n.mgn-filters {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 4px;\n}\n\n.mgn-filters button {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  border: 0;\n  background: var(--n-canvas);\n  border-radius: 7px;\n  padding: 6px 10px;\n  font-size: 12px;\n  font-weight: 500;\n  color: var(--n-ink-2);\n  cursor: pointer;\n  white-space: nowrap;\n  transition: background 0.13s cubic-bezier(0.4, 0, 0.2, 1), color 0.13s cubic-bezier(0.4, 0, 0.2, 1);\n}\n\n.mgn-filters button i {\n  font-size: 14px;\n}\n\n.mgn-filters button u {\n  text-decoration: none;\n  font-weight: 600;\n  color: var(--n-ink-3);\n  font-variant-numeric: tabular-nums;\n}\n\n.mgn-filters button:hover {\n  color: var(--n-ink);\n}\n\n.mgn-filters button.on {\n  background: var(--n-ink);\n  color: #ffffff;\n}\n\n.mgn-filters button.on u {\n  color: rgba(255, 255, 255, 0.7);\n}\n\n.mgn-filters button.flag {\n  color: var(--n-amber);\n  background: var(--n-amber-soft);\n}\n\n.mgn-filters button.flag u {\n  color: var(--n-amber);\n}\n\n.mgn-filters button.flag.on {\n  background: var(--n-amber);\n  color: #ffffff;\n}\n\n.mgn-filters button.flag.on u {\n  color: rgba(255, 255, 255, 0.85);\n}\n\n.mgn-sheet {\n  flex: 1 1 auto;\n  min-height: 0;\n  background: var(--n-surface);\n  border: 1px solid var(--n-hairline);\n  border-radius: 12px;\n  overflow: hidden;\n  display: flex;\n  flex-direction: column;\n}\n\n.mgn-scroll {\n  flex: 1 1 auto;\n  min-height: 0;\n  overflow: auto;\n}\n\n.mgn-table {\n  width: 100%;\n  border-collapse: separate;\n  border-spacing: 0;\n  table-layout: auto !important;\n}\n\n.mgn-table thead th {\n  position: sticky;\n  top: 0;\n  z-index: 2;\n  background: var(--n-surface);\n  font-size: 11px;\n  font-weight: 600;\n  letter-spacing: 0.05em;\n  text-transform: uppercase;\n  color: var(--n-ink-3);\n  text-align: left;\n  padding: 12px 14px;\n  border-bottom: 1px solid var(--n-rule);\n  white-space: nowrap;\n}\n\n.mgn-table thead th i {\n  font-size: 13px;\n  vertical-align: -2px;\n  margin-left: 2px;\n  opacity: 0.45;\n}\n\n.mgn-table thead th.sortable {\n  cursor: pointer;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n          user-select: none;\n  transition: color 0.13s cubic-bezier(0.4, 0, 0.2, 1);\n}\n\n.mgn-table thead th.sortable:hover {\n  color: var(--n-ink);\n}\n\n.mgn-table thead th.sortable:hover i {\n  opacity: 0.8;\n}\n\n.mgn-table thead th.on {\n  color: var(--n-ink);\n}\n\n.mgn-table thead th.on i {\n  opacity: 1;\n}\n\n.mgn-table tbody td {\n  font-size: 13px;\n  color: var(--n-ink-2);\n  padding: 11px 14px;\n  border-bottom: 1px solid var(--n-hairline);\n  vertical-align: middle;\n}\n\n.mgn-table tbody tr {\n  cursor: pointer;\n  transition: background 0.12s cubic-bezier(0.4, 0, 0.2, 1);\n}\n\n.mgn-table tbody tr:hover td {\n  background: var(--n-canvas);\n}\n\n.mgn-table tbody tr:hover .mgn-go {\n  opacity: 1;\n}\n\n.mgn-table tbody tr:last-child td {\n  border-bottom: 0;\n}\n\n.mgn-table tbody tr.off td {\n  opacity: 0.72;\n}\n\n.mgn-table .ta-r {\n  text-align: right;\n}\n\n.mgn-table .ta-c {\n  text-align: center;\n}\n\n.mgn-table .num {\n  font-variant-numeric: tabular-nums;\n  white-space: nowrap;\n}\n\n.mgn-table .mono {\n  font-variant-numeric: tabular-nums;\n}\n\n.mgn-table .w-sn {\n  width: 44px;\n  color: var(--n-ink-3);\n}\n\n.mgn-table .w-act {\n  width: 80px;\n  text-align: right;\n  white-space: nowrap;\n}\n\n.c-company {\n  min-width: 230px;\n}\n\n.mgn-cowrap {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  min-width: 0;\n}\n\n.mgn-av {\n  width: 32px;\n  height: 32px;\n  border-radius: 9px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 11px;\n  font-weight: 600;\n  color: var(--n-ink-2);\n  background: var(--n-canvas);\n  box-shadow: 0 0 0 1px var(--n-rule);\n  flex-shrink: 0;\n}\n\n.mgn-av.cat-A {\n  box-shadow: 0 0 0 2px var(--n-green);\n}\n\n.mgn-co {\n  min-width: 0;\n  max-width: 210px;\n}\n\n.mgn-co b {\n  display: block;\n  font-size: 13px;\n  font-weight: 600;\n  color: var(--n-ink);\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n.mgn-co em {\n  display: block;\n  font-style: normal;\n  font-size: 11px;\n  color: var(--n-ink-3);\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n.mgn-two {\n  display: block;\n  min-width: 0;\n}\n\n.mgn-two b {\n  display: block;\n  font-size: 13px;\n  font-weight: 500;\n  color: var(--n-ink);\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n.mgn-two em {\n  display: block;\n  font-style: normal;\n  font-size: 11.5px;\n  color: var(--n-ink-3);\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n.c-assign {\n  max-width: 150px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n.mgn-cat {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 22px;\n  height: 22px;\n  border-radius: 6px;\n  font-size: 11px;\n  font-weight: 600;\n  color: var(--n-ink-2);\n  background: var(--n-canvas);\n}\n\n.mgn-kyc {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  font-size: 11.5px;\n  font-weight: 500;\n  border-radius: 6px;\n  padding: 3px 8px;\n  white-space: nowrap;\n}\n\n.mgn-kyc i {\n  font-size: 13px;\n}\n\n.mgn-kyc.verified {\n  color: var(--n-green);\n  background: var(--n-green-soft);\n}\n\n.mgn-kyc.pending {\n  color: var(--n-amber);\n  background: var(--n-amber-soft);\n}\n\n.mgn-kyc.rejected {\n  color: var(--n-red);\n  background: var(--n-red-soft);\n}\n\n.mgn-sales {\n  display: inline-flex;\n  align-items: baseline;\n  gap: 7px;\n  justify-content: flex-end;\n}\n\n.mgn-sales b {\n  font-size: 13px;\n  font-weight: 600;\n  color: var(--n-ink);\n  font-variant-numeric: tabular-nums;\n}\n\n.mgn-delta.sm {\n  font-size: 10.5px;\n}\n\n.mgn-delta.sm i {\n  font-size: 11px;\n}\n\n.due {\n  color: var(--n-red);\n  font-weight: 500;\n}\n\n.mgn-due {\n  display: block;\n  font-style: normal;\n  font-size: 10.5px;\n  color: var(--n-red);\n  margin-top: 1px;\n}\n\n.mgn-off {\n  font-size: 10.5px;\n  color: var(--n-ink-3);\n  background: var(--n-canvas);\n  border-radius: 5px;\n  padding: 2px 6px;\n  margin-right: 4px;\n}\n\n.mgn-go {\n  font-size: 18px !important;\n  color: var(--n-ink-3);\n  opacity: 0;\n  vertical-align: -4px;\n  transition: opacity 0.13s cubic-bezier(0.4, 0, 0.2, 1);\n}\n\n.mgn-empty {\n  text-align: center;\n  padding: 44px 20px;\n}\n\n.mgn-empty img {\n  height: 140px;\n  margin-bottom: 12px;\n}\n\n.mgn-empty p {\n  font-size: 14px;\n  font-weight: 500;\n  color: var(--n-ink-2);\n}\n\n.mgn-empty p span {\n  display: block;\n  margin-top: 4px;\n  font-size: 13px;\n  font-weight: 400;\n  color: var(--n-ink-3);\n}\n\n@media only screen and (max-width: 1400px) {\n  .mgn-kpis {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n}\n\n@media only screen and (max-width: 760px) {\n  .mgn {\n    padding: 0 12px 12px 12px;\n  }\n  .mgn-kpis {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n  .mgn-table tbody td, .mgn-table thead th {\n    padding: 10px 11px;\n  }\n}"

/***/ }),

/***/ "./src/app/magnus-network/magnus-network-list.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/magnus-network/magnus-network-list.component.ts ***!
  \*****************************************************************/
/*! exports provided: MagnusNetworkListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MagnusNetworkListComponent", function() { return MagnusNetworkListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _network_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./network-data */ "./src/app/magnus-network/network-data.ts");




// ============================================================================
// MAGNUS PLYWOOD - Customer network
//
// The original listing was a thirty-two column sideways table: created date,
// created by, company, contact person, four phone numbers, Aadhaar, account
// number, PAN, account code, source, state, district, city, assigned CP,
// assigned to, category, visits, last visit, last order, order frequency,
// current year sales, updated by, updated on, three point columns, KYC and OTP
// verification. Finding one partner meant scrolling sideways twice.
//
// A partner is an account, so each row is drawn as one: who they are, where
// they are, whether their paperwork is clean, and how they are trading. The
// identifiers that had their own columns move onto the detail page, where
// they are actually read.
//
// Demo mock: no HTTP calls.
// ============================================================================
var MagnusNetworkListComponent = /** @class */ (function () {
    function MagnusNetworkListComponent(route, router) {
        this.route = route;
        this.router = router;
        // The sidebar routes here as /distribution-list/:id/:type, where :type is
        // the network name being viewed (Channel Partner, Sub Dealer, ...).
        this.typeId = '';
        this.typeName = 'Channel Partner';
        this.partners = [];
        this.search = '';
        this.filter = 'all';
        // Sorting is driven from the column headers, the way a table should work
        this.sortKey = 'ytdSales';
        this.sortDir = 'desc';
        // ==========================================================================
        // Template helpers
        // ==========================================================================
        this.initials = _network_data__WEBPACK_IMPORTED_MODULE_3__["initials"];
        this.inr = _network_data__WEBPACK_IMPORTED_MODULE_3__["inr"];
    }
    MagnusNetworkListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.partners = Object(_network_data__WEBPACK_IMPORTED_MODULE_3__["buildPartners"])();
        this.route.paramMap.subscribe(function (p) {
            _this.typeId = p.get('id') || '';
            var t = p.get('type');
            if (t) {
                _this.typeName = decodeURIComponent(t);
            }
        });
    };
    Object.defineProperty(MagnusNetworkListComponent.prototype, "list", {
        // ==========================================================================
        // Filtering
        // ==========================================================================
        get: function () {
            var _this = this;
            var q = (this.search || '').toLowerCase().trim();
            var out = this.partners.filter(function (p) {
                if (q &&
                    p.company.toLowerCase().indexOf(q) === -1 &&
                    p.person.toLowerCase().indexOf(q) === -1 &&
                    p.city.toLowerCase().indexOf(q) === -1 &&
                    p.state.toLowerCase().indexOf(q) === -1 &&
                    p.mobile.indexOf(q) === -1 &&
                    p.code.toLowerCase().indexOf(q) === -1) {
                    return false;
                }
                if (_this.filter === 'active') {
                    return p.active;
                }
                if (_this.filter === 'inactive') {
                    return !p.active;
                }
                if (_this.filter === 'scheme') {
                    return p.schemeActive;
                }
                if (_this.filter === 'kyc') {
                    return p.kyc !== 'verified';
                }
                return true;
            });
            var k = this.sortKey;
            var dir = this.sortDir === 'asc' ? 1 : -1;
            out = out.slice();
            out.sort(function (a, b) {
                var x = a[k], y = b[k];
                var cmp = (typeof x === 'number' && typeof y === 'number')
                    ? x - y
                    : String(x).localeCompare(String(y));
                return cmp * dir;
            });
            return out;
        },
        enumerable: true,
        configurable: true
    });
    // Numbers open on the largest value, text on A-Z - what you expect on a
    // first click for that kind of column.
    MagnusNetworkListComponent.prototype.toggleSort = function (k) {
        if (this.sortKey === k) {
            this.sortDir = this.sortDir === 'asc' ? 'desc' : 'asc';
            return;
        }
        this.sortKey = k;
        this.sortDir = (k === 'ytdSales' || k === 'visits') ? 'desc' : 'asc';
    };
    MagnusNetworkListComponent.prototype.sortIcon = function (k) {
        if (this.sortKey !== k) {
            return 'unfold_more';
        }
        return this.sortDir === 'asc' ? 'arrow_upward' : 'arrow_downward';
    };
    MagnusNetworkListComponent.prototype.countFor = function (f) {
        if (f === 'all') {
            return this.partners.length;
        }
        if (f === 'active') {
            return this.partners.filter(function (p) { return p.active; }).length;
        }
        if (f === 'inactive') {
            return this.partners.filter(function (p) { return !p.active; }).length;
        }
        if (f === 'scheme') {
            return this.partners.filter(function (p) { return p.schemeActive; }).length;
        }
        return this.partners.filter(function (p) { return p.kyc !== 'verified'; }).length;
    };
    MagnusNetworkListComponent.prototype.clearSearch = function () { this.search = ''; };
    MagnusNetworkListComponent.prototype.open = function (p) {
        this.router.navigate(['/distribution-list', this.typeId, this.typeName, 'detail', p.id]);
    };
    Object.defineProperty(MagnusNetworkListComponent.prototype, "total", {
        // ==========================================================================
        // Summary
        // ==========================================================================
        get: function () { return this.partners.length; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MagnusNetworkListComponent.prototype, "activeCount", {
        get: function () { return this.partners.filter(function (p) { return p.active; }).length; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MagnusNetworkListComponent.prototype, "verifiedCount", {
        get: function () { return this.partners.filter(function (p) { return p.kyc === 'verified'; }).length; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MagnusNetworkListComponent.prototype, "verifiedPct", {
        get: function () { return Math.round((this.verifiedCount / this.total) * 100); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MagnusNetworkListComponent.prototype, "pendingKyc", {
        get: function () { return this.partners.filter(function (p) { return p.kyc !== 'verified'; }).length; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MagnusNetworkListComponent.prototype, "totalSales", {
        get: function () {
            return Math.round(this.partners.reduce(function (a, p) { return a + p.ytdSales; }, 0));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MagnusNetworkListComponent.prototype, "growthPct", {
        get: function () {
            var now = this.partners.reduce(function (a, p) { return a + p.ytdSales; }, 0);
            var prev = this.partners.reduce(function (a, p) { return a + p.lastYearSales; }, 0);
            return Math.round(((now - prev) / prev) * 100);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MagnusNetworkListComponent.prototype, "overdueCount", {
        get: function () { return this.partners.filter(function (p) { return p.overdueDays > 0; }).length; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MagnusNetworkListComponent.prototype, "kycSplit", {
        get: function () {
            var _this = this;
            var mk = function (label, k, cls) {
                var n = _this.partners.filter(function (p) { return p.kyc === k; }).length;
                return { label: label, n: n, pct: Math.round((n / _this.total) * 100), cls: cls };
            };
            return [mk('Verified', 'verified', 'ok'), mk('Pending', 'pending', 'warn'), mk('Rejected', 'rejected', 'bad')];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MagnusNetworkListComponent.prototype, "byCategory", {
        get: function () {
            var _this = this;
            var cats = ['A', 'B', 'C'];
            var max = Math.max.apply(null, cats.map(function (c) {
                return _this.partners.filter(function (p) { return p.category === c; }).length;
            })) || 1;
            return cats.map(function (c) {
                var rows = _this.partners.filter(function (p) { return p.category === c; });
                return {
                    name: 'Category ' + c,
                    n: rows.length,
                    sales: Math.round(rows.reduce(function (a, p) { return a + p.ytdSales; }, 0)),
                    pct: Math.round((rows.length / max) * 100)
                };
            });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MagnusNetworkListComponent.prototype, "byState", {
        get: function () {
            var map = {};
            this.partners.forEach(function (p) { map[p.state] = (map[p.state] || 0) + 1; });
            var arr = Object.keys(map).map(function (k) { return ({ name: k, n: map[k], pct: 0 }); });
            arr.sort(function (a, b) { return b.n - a.n; });
            var max = arr.length ? arr[0].n : 1;
            arr.forEach(function (a) { return a.pct = Math.round((a.n / max) * 100); });
            return arr.slice(0, 5);
        },
        enumerable: true,
        configurable: true
    });
    MagnusNetworkListComponent.prototype.kycLabel = function (k) {
        return k === 'verified' ? 'KYC verified' : k === 'pending' ? 'KYC pending' : 'KYC rejected';
    };
    MagnusNetworkListComponent.prototype.kycIcon = function (k) {
        return k === 'verified' ? 'verified_user' : k === 'pending' ? 'pending' : 'gpp_bad';
    };
    // Sales bar is read against the strongest account in the list
    MagnusNetworkListComponent.prototype.salesPct = function (p) {
        var max = Math.max.apply(null, this.partners.map(function (x) { return x.ytdSales; })) || 1;
        return Math.round((p.ytdSales / max) * 100);
    };
    MagnusNetworkListComponent.prototype.delta = function (p) {
        return Math.round(((p.ytdSales - p.lastYearSales) / p.lastYearSales) * 100);
    };
    MagnusNetworkListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-magnus-network-list',
            template: __webpack_require__(/*! ./magnus-network-list.component.html */ "./src/app/magnus-network/magnus-network-list.component.html"),
            styles: [__webpack_require__(/*! ./magnus-network-list.component.scss */ "./src/app/magnus-network/magnus-network-list.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], MagnusNetworkListComponent);
    return MagnusNetworkListComponent;
}());



/***/ }),

/***/ "./src/app/magnus-network/magnus-network.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/magnus-network/magnus-network.module.ts ***!
  \*********************************************************/
/*! exports provided: MagnusNetworkModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MagnusNetworkModule", function() { return MagnusNetworkModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/material */ "./src/app/material.ts");
/* harmony import */ var src_app_auth_component_guard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/auth-component.guard */ "./src/app/auth-component.guard.ts");
/* harmony import */ var _magnus_network_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./magnus-network-list.component */ "./src/app/magnus-network/magnus-network-list.component.ts");
/* harmony import */ var _magnus_network_detail_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./magnus-network-detail.component */ "./src/app/magnus-network/magnus-network-detail.component.ts");









// Mounted by the shell at /distribution-list/:id/:type, so the sidebar links
// keep working unchanged. The detail page is a child, the way the legacy
// distribution module carries its own detail route.
var routes = [
    { path: '', component: _magnus_network_list_component__WEBPACK_IMPORTED_MODULE_7__["MagnusNetworkListComponent"], canActivate: [src_app_auth_component_guard__WEBPACK_IMPORTED_MODULE_6__["AuthComponentGuard"]], data: { expectedRole: ['1'] } },
    { path: 'detail/:pid', component: _magnus_network_detail_component__WEBPACK_IMPORTED_MODULE_8__["MagnusNetworkDetailComponent"], canActivate: [src_app_auth_component_guard__WEBPACK_IMPORTED_MODULE_6__["AuthComponentGuard"]], data: { expectedRole: ['1', '2'] } }
];
var MagnusNetworkModule = /** @class */ (function () {
    function MagnusNetworkModule() {
    }
    MagnusNetworkModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _magnus_network_list_component__WEBPACK_IMPORTED_MODULE_7__["MagnusNetworkListComponent"],
                _magnus_network_detail_component__WEBPACK_IMPORTED_MODULE_8__["MagnusNetworkDetailComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                src_app_material__WEBPACK_IMPORTED_MODULE_5__["MaterialModule"]
            ]
        })
    ], MagnusNetworkModule);
    return MagnusNetworkModule;
}());



/***/ }),

/***/ "./src/app/magnus-network/network-data.ts":
/*!************************************************!*\
  !*** ./src/app/magnus-network/network-data.ts ***!
  \************************************************/
/*! exports provided: buildPartners, initials, inr */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "buildPartners", function() { return buildPartners; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initials", function() { return initials; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "inr", function() { return inr; });
// ============================================================================
// MAGNUS PLYWOOD - Customer network demo data
//
// Shared by the list and the detail screen so a row and the page it opens
// always agree. Generated here; no HTTP calls on either screen.
// ============================================================================
var SEED = [
    // company, person, city, district, state, category, kyc, otp, active, schemeActive, ytd, lastYear, source, assignedTo
    ['Shree Balaji Timber', 'Sulaiman Sharif', 'Nagpur', 'Nagpur', 'Maharashtra', 'A', 'verified', true, true, true, 142.4, 118.9, 'Field visit', 'Rakesh Menon'],
    ['Kohinoor Ply House', 'Abhijit Deshmukh', 'Surat', 'Surat', 'Gujarat', 'A', 'verified', true, true, true, 116.2, 104.3, 'Referral', 'Imran Qureshi'],
    ['Anand Plywood Centre', 'Ritesh Mandhanni', 'Indore', 'Indore', 'Madhya Pradesh', 'A', 'verified', true, true, false, 98.6, 92.4, 'Field visit', 'Deepak Sahu'],
    ['Gupta Hardware & Ply', 'M Chunnilal', 'Kanpur', 'Kanpur', 'Uttar Pradesh', 'B', 'pending', true, true, true, 87.1, 89.2, 'Exhibition', 'Sunita Rawat'],
    ['Sai Laminates', 'Jagdishbhai Patel', 'Hyderabad', 'Rangareddy', 'Telangana', 'B', 'verified', true, true, true, 74.3, 66.8, 'Digital lead', 'Vikram Shetty'],
    ['Metro Wood Traders', 'Rahul Patel', 'Pune', 'Pune', 'Maharashtra', 'B', 'verified', false, true, false, 61.7, 58.1, 'Field visit', 'Rakesh Menon'],
    ['Verma Timber Mart', 'Suresh Verma', 'Delhi', 'North Delhi', 'Delhi', 'B', 'pending', false, true, true, 54.9, 51.2, 'Referral', 'Sunita Rawat'],
    ['Gill Plywood House', 'Harjeet Gill', 'Ludhiana', 'Ludhiana', 'Punjab', 'B', 'verified', true, true, true, 49.2, 44.6, 'Field visit', 'Harpreet Gill'],
    ['Sri Lakshmi Traders', 'K Ramesh', 'Bengaluru', 'Bengaluru', 'Karnataka', 'A', 'verified', true, true, true, 108.5, 96.1, 'Field visit', 'Vikram Shetty'],
    ['Bengal Ply Centre', 'Subrata Ghosh', 'Kolkata', 'Kolkata', 'West Bengal', 'C', 'rejected', false, false, false, 18.4, 33.7, 'Digital lead', 'Anita Bhattacharya'],
    ['Coimbatore Ply Mart', 'M Karthikeyan', 'Coimbatore', 'Coimbatore', 'Tamil Nadu', 'B', 'verified', true, true, false, 57.8, 52.9, 'Exhibition', 'Mohan Iyer'],
    ['Nandi Hardware', 'Prakash Gowda', 'Bengaluru', 'Bengaluru', 'Karnataka', 'C', 'pending', false, true, false, 22.6, 19.8, 'Field visit', 'Vikram Shetty'],
    ['Singh Timber Depot', 'Balwinder Singh', 'Ludhiana', 'Ludhiana', 'Punjab', 'C', 'verified', true, false, false, 14.9, 28.4, 'Referral', 'Harpreet Gill'],
    ['Shree Ganesh Ply', 'Mahesh Joshi', 'Indore', 'Indore', 'Madhya Pradesh', 'C', 'pending', true, true, true, 26.3, 12.1, 'Field visit', 'Deepak Sahu'],
    ['KS Boards', 'S Kumaran', 'Coimbatore', 'Tiruppur', 'Tamil Nadu', 'C', 'verified', false, true, false, 31.7, 30.2, 'Digital lead', 'Mohan Iyer']
];
var SEED_COLS = 14;
var ORDER_STATUS = ['Dispatched', 'In transit', 'Pending', 'On hold'];
var ORDER_KIND = ['Primary', 'Secondary', 'Stock'];
var TICKET_SUBJECTS = [
    'Delivery delay on last dispatch',
    'Rate difference in invoice',
    'Damaged sheets in consignment',
    'Scheme points not credited',
    'POP material request'
];
var D = function (day, mon) { return day + ' ' + mon + ' 2026'; };
function buildPartners() {
    // Positional rows shift silently if a field is dropped, so the shape is
    // asserted once rather than discovered as NaN on screen.
    SEED.forEach(function (s, i) {
        if (s.length !== SEED_COLS) {
            throw new Error('network-data: row ' + i + ' (' + s[0] + ') has ' +
                s.length + ' fields, expected ' + SEED_COLS);
        }
    });
    var mon = ['Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'];
    return SEED.map(function (s, i) {
        var ytd = s[10];
        var lastYear = s[11];
        // Orders: more for the bigger accounts
        var nOrders = 3 + (i % 4);
        var orders = [];
        for (var o = 0; o < nOrders; o++) {
            orders.push({
                id: 'MG-' + (24190 - i * 3 - o),
                date: D(26 - o * 5 - (i % 4), mon[(5 - o + 6) % 6]),
                kind: ORDER_KIND[(i + o) % 3],
                items: 6 + ((i + o * 5) % 22),
                amount: Math.round((ytd * 100000 / nOrders) * (0.7 + ((i + o) % 5) * 0.12)),
                status: ORDER_STATUS[(i + o) % 4]
            });
        }
        var nTickets = i % 3;
        var tickets = [];
        for (var t = 0; t < nTickets; t++) {
            tickets.push({
                id: 'TK-' + (3330 - i * 2 - t),
                subject: TICKET_SUBJECTS[(i + t) % TICKET_SUBJECTS.length],
                date: D(18 - t * 4, mon[(4 - t + 6) % 6]),
                status: t === 0 ? (i % 2 ? 'Open' : 'In progress') : 'Closed'
            });
        }
        var events = [
            { kind: 'visit', date: D(22 - (i % 6), 'Sep'), title: 'Visit by ' + s[13], sub: 'Counter check and scheme discussion' },
            { kind: 'order', date: orders[0].date, title: orders[0].kind + ' order ' + orders[0].id, sub: orders[0].items + ' items · ' + orders[0].status },
            { kind: 'payment', date: D(12 - (i % 5), 'Sep'), title: 'Payment received', sub: '₹ ' + (40000 + i * 7350).toLocaleString('en-IN') },
            { kind: 'audit', date: D(6 + (i % 8), 'Aug'), title: 'Brand audit completed', sub: 'Shelf share recorded at ' + (38 + (i * 3) % 40) + '%' }
        ];
        if (tickets.length) {
            events.splice(2, 0, { kind: 'ticket', date: tickets[0].date, title: 'Ticket ' + tickets[0].id, sub: tickets[0].subject });
        }
        var earned = Math.round(ytd * 42 + i * 130);
        var redeemed = Math.round(earned * (0.2 + (i % 5) * 0.09));
        return {
            id: 'CP' + (100185 + i * 7),
            code: 'MG-N' + (4120 + i * 3),
            company: s[0],
            person: s[1],
            mobile: '9' + (700000000 + i * 3172841).toString().slice(0, 9),
            altMobile: i % 3 === 0 ? '9' + (810000000 + i * 2216533).toString().slice(0, 9) : '—',
            type: i % 4 === 2 ? 'Sub dealer' : 'Dealer',
            category: s[5],
            segment: ytd > 90 ? 'Platinum' : ytd > 50 ? 'Gold' : 'Silver',
            address: (12 + i * 3) + ', ' + s[2] + ' Main Road',
            city: s[2],
            district: s[3],
            state: s[4],
            gst: (22 + (i % 8)) + 'AAACM' + (1000 + i) + 'Q1Z' + (i % 10),
            pan: 'AAACM' + (1000 + i) + 'Q',
            accountNo: '5011' + (20000000 + i * 137).toString(),
            source: s[12],
            assignedTo: s[13],
            assignedCp: i % 4 === 2 ? 'Shree Balaji Timber' : '—',
            createdBy: 'Admin',
            createdOn: D(4 + (i % 20), mon[i % 6]),
            kyc: s[6],
            otp: s[7],
            active: s[8],
            schemeActive: s[9],
            visits: 4 + (i % 9),
            lastVisit: D(22 - (i % 6), 'Sep'),
            lastOrder: orders[0].date,
            orderFreq: 'every ' + (12 + (i % 5) * 6) + ' days',
            ytdSales: ytd,
            lastYearSales: lastYear,
            outstanding: Math.round(ytd * 1000 * (1 + (i % 6))),
            creditLimit: Math.round(ytd * 1000 * 9),
            overdueDays: i % 4 === 1 ? 12 + (i % 20) : 0,
            targetValue: Math.round(lastYear * 1.15),
            targetAchieved: ytd,
            pointsEarned: earned,
            pointsRedeemed: redeemed,
            retailers: i % 4 === 2 ? 0 : 3 + (i % 12),
            inventoryValue: Math.round(ytd * 0.14 * 10) / 10,
            orders: orders,
            tickets: tickets,
            events: events
        };
    });
}
function initials(n) {
    var p = n.replace(/[^A-Za-z ]/g, '').trim().split(/\s+/);
    return (p[0][0] + (p.length > 1 ? p[1][0] : '')).toUpperCase();
}
// Indian digit grouping, used for every rupee figure on these screens
function inr(n) {
    return n.toLocaleString('en-IN');
}


/***/ })

}]);