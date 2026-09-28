(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["magnus-checkin-magnus-checkin-module"],{

/***/ "./src/app/magnus-checkin/magnus-checkin.component.html":
/*!**************************************************************!*\
  !*** ./src/app/magnus-checkin/magnus-checkin.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-container\">\n\n  <!-- ====================================================================\n       Header\n       ==================================================================== -->\n  <div class=\"tools-container\">\n    <h2>Check In</h2>\n\n    <div class=\"left-auto df ac flex-gap-10\">\n\n      <div class=\"mgc-datenav\" *ngIf=\"period === 'today'\">\n        <button (click)=\"stepDay(-1)\" matTooltip=\"Previous day\" aria-label=\"Previous day\">\n          <i class=\"material-icons\">chevron_left</i>\n        </button>\n        <span class=\"mgc-date\"><b>{{ dateLabel }}</b><em>{{ relLabel }}</em></span>\n        <button (click)=\"stepDay(1)\" [disabled]=\"isToday\" matTooltip=\"Next day\" aria-label=\"Next day\">\n          <i class=\"material-icons\">chevron_right</i>\n        </button>\n      </div>\n\n      <span class=\"mgc-chip\" *ngIf=\"period === 'month'\">{{ dateLabel }}</span>\n\n      <div class=\"mgc-seg\">\n        <button [class.on]=\"period === 'today'\" (click)=\"setPeriod('today')\">Today</button>\n        <button [class.on]=\"period === 'month'\" (click)=\"setPeriod('month')\">Month</button>\n      </div>\n\n      <button mat-icon-button matTooltip=\"Export\"><i class=\"material-icons\">file_download</i></button>\n      <button mat-icon-button matTooltip=\"Refresh\"><i class=\"material-icons\">refresh</i></button>\n    </div>\n  </div>\n\n  <div class=\"mgc\">\n\n    <!-- ==================================================================\n         Left: summary + visit feed\n         ================================================================== -->\n    <div class=\"mgc-main\">\n\n      <!-- day at a glance -->\n      <section class=\"mgc-kpis\">\n        <article>\n          <u>Check-ins</u>\n          <b>{{ total }}</b>\n          <em>{{ staffCount }} staff · {{ totalHours }} on counter</em>\n        </article>\n        <article>\n          <u>Productive</u>\n          <b>{{ productiveCount }}<s>/{{ total }}</s></b>\n          <span class=\"mgc-meter\"><i [style.width.%]=\"productivePct\"></i></span>\n          <em>{{ productivePct }}% of visits</em>\n        </article>\n        <article>\n          <u>New counters</u>\n          <b>{{ newCount }}</b>\n          <em>opened this period</em>\n        </article>\n        <article>\n          <u>Avg duration</u>\n          <b>{{ avgMins }}<s> min</s></b>\n          <em>per visit</em>\n        </article>\n        <article [class.flag]=\"flaggedCount > 0\">\n          <u>Location issues</u>\n          <b>{{ flaggedCount }}</b>\n          <em>away from counter or not captured</em>\n        </article>\n      </section>\n\n      <!-- search + filters -->\n      <section class=\"mgc-bar\">\n        <div class=\"mgc-search\">\n          <i class=\"material-icons\">search</i>\n          <input type=\"text\" placeholder=\"Search staff, dealer, city or check-in ID\"\n                 [(ngModel)]=\"search\" name=\"mgcSearch\" autocomplete=\"off\">\n          <button class=\"mgc-x\" *ngIf=\"search\" (click)=\"clearSearch()\" aria-label=\"Clear\">\n            <i class=\"material-icons\">close</i>\n          </button>\n        </div>\n\n        <div class=\"mgc-filters\">\n          <button [class.on]=\"filter === 'all'\" (click)=\"filter = 'all'\">All <u>{{ countFor('all') }}</u></button>\n          <button [class.on]=\"filter === 'productive'\" (click)=\"filter = 'productive'\">Productive <u>{{ countFor('productive') }}</u></button>\n          <button [class.on]=\"filter === 'unproductive'\" (click)=\"filter = 'unproductive'\">Unproductive <u>{{ countFor('unproductive') }}</u></button>\n          <button [class.on]=\"filter === 'new'\" (click)=\"filter = 'new'\">New counter <u>{{ countFor('new') }}</u></button>\n          <button class=\"flag\" [class.on]=\"filter === 'flagged'\" (click)=\"filter = 'flagged'\"\n                  *ngIf=\"countFor('flagged') > 0\">\n            <i class=\"material-icons\">error_outline</i>Flagged <u>{{ countFor('flagged') }}</u>\n          </button>\n        </div>\n      </section>\n\n      <!-- the feed: one card per visit -->\n      <section class=\"mgc-feed\">\n\n        <article class=\"mgc-visit\" *ngFor=\"let v of list\"\n                 [class.open]=\"expanded === v.id\"\n                 [class.flagged]=\"isFlagged(v)\">\n\n          <!-- time rail -->\n          <div class=\"mgc-time\">\n            <b>{{ v.inTime }}</b>\n            <i class=\"mgc-time-rule\"></i>\n            <em>{{ v.outTime }}</em>\n          </div>\n\n          <!-- body -->\n          <div class=\"mgc-body\" (click)=\"toggle(v)\">\n            <div class=\"mgc-line1\">\n              <span class=\"mgc-dealer\">{{ v.dealer }}</span>\n              <span class=\"mgc-tag\">{{ v.custType }}</span>\n              <span class=\"mgc-tag soft\">{{ v.kind }}</span>\n              <span class=\"mgc-tag new\" *ngIf=\"v.newCounter\">New counter</span>\n\n              <span class=\"mgc-geo\" [class]=\"'mgc-geo ' + v.geo\">\n                <i class=\"material-icons\">{{ geoIcon(v.geo) }}</i>\n                {{ geoLabel(v.geo) }}<s *ngIf=\"v.geo !== 'missing'\"> · {{ v.distance }}</s>\n              </span>\n\n              <i class=\"material-icons mgc-caret\">{{ expanded === v.id ? 'expand_less' : 'expand_more' }}</i>\n            </div>\n\n            <div class=\"mgc-line2\">\n              <span class=\"mgc-who\">\n                <i class=\"mgc-av\">{{ initials(v.emp) }}</i>\n                {{ v.emp }}\n              </span>\n              <span class=\"mgc-sep\">·</span>\n              <span>{{ v.city }}</span>\n              <span class=\"mgc-sep\">·</span>\n              <span class=\"mgc-dur\">\n                <i class=\"material-icons\">schedule</i>{{ duration(v.mins) }}\n              </span>\n\n              <span class=\"mgc-durbar\"><i [style.width.%]=\"durPct(v.mins)\"></i></span>\n\n              <span class=\"mgc-photos\" *ngIf=\"v.photos > 0\">\n                <i class=\"material-icons\">photo_camera</i>{{ v.photos }}\n              </span>\n              <span class=\"mgc-photos none\" *ngIf=\"v.photos === 0\">\n                <i class=\"material-icons\">no_photography</i>No photo\n              </span>\n            </div>\n\n            <p class=\"mgc-topic\">{{ v.topic }}</p>\n\n            <!-- the id columns from the old table, attached to their visit -->\n            <div class=\"mgc-links\" *ngIf=\"v.links.length > 0\">\n              <span *ngFor=\"let l of v.links\" class=\"mgc-link\">\n                <u>{{ l.label }}</u>{{ l.id }}\n              </span>\n            </div>\n          </div>\n\n          <!-- expanded detail -->\n          <div class=\"mgc-detail\" *ngIf=\"expanded === v.id\">\n            <div class=\"mgc-detail-grid\">\n              <span><u>Check-in ID</u><b>{{ v.id }}</b></span>\n              <span><u>Employee code</u><b>{{ v.empCode }}</b></span>\n              <span><u>Reporting manager</u><b>{{ v.manager }}</b></span>\n              <span><u>Visit type</u><b>{{ v.kind }}</b></span>\n              <span><u>Outcome</u><b>{{ v.productive ? 'Productive' : 'No business' }}</b></span>\n              <span><u>Distance from counter</u><b>{{ v.distance }}</b></span>\n            </div>\n\n            <div class=\"mgc-remark\">\n              <u>Customer remark</u>\n              <p>{{ v.remark }}</p>\n            </div>\n\n            <div class=\"mgc-shots\" *ngIf=\"v.photos > 0\">\n              <u>Visit photos</u>\n              <div class=\"mgc-shot-row\">\n                <span class=\"mgc-shot\" *ngFor=\"let p of [].constructor(v.photos)\">\n                  <i class=\"material-icons\">image</i>\n                </span>\n              </div>\n            </div>\n          </div>\n        </article>\n\n        <div class=\"mgc-empty\" *ngIf=\"list.length === 0\">\n          <img src=\"assets/img/no-data.svg\" alt=\"\">\n          <p>No check-ins match this filter<span>Try a different filter or clear the search.</span></p>\n        </div>\n      </section>\n    </div>\n\n    <!-- ==================================================================\n         Right: the day's shape\n         ================================================================== -->\n    <aside class=\"mgc-side\">\n\n      <div class=\"mgc-panel\">\n        <h4>Check-ins by hour</h4>\n        <div class=\"mgc-hours\">\n          <span class=\"mgc-hour\" *ngFor=\"let h of hourly\" [attr.title]=\"h.n + ' check-ins'\">\n            <i class=\"mgc-hour-bar\"><u [style.height.%]=\"h.pct\" [class.zero]=\"h.n === 0\"></u></i>\n            <em>{{ h.label }}</em>\n          </span>\n        </div>\n        <p class=\"mgc-note\">Busiest between 9 AM and 11 AM</p>\n      </div>\n\n      <div class=\"mgc-panel\">\n        <h4>By staff</h4>\n        <ul class=\"mgc-rank\">\n          <li *ngFor=\"let s of byStaff\">\n            <span class=\"mgc-rank-top\">\n              <i class=\"mgc-av sm\">{{ initials(s.name) }}</i>\n              <b>{{ s.name }}</b>\n              <u>{{ s.n }}</u>\n            </span>\n            <span class=\"mgc-rank-bar\"><i [style.width.%]=\"s.pct\"></i></span>\n          </li>\n        </ul>\n      </div>\n\n      <div class=\"mgc-panel\">\n        <h4>Customer mix</h4>\n        <ul class=\"mgc-mix\">\n          <li *ngFor=\"let t of byType\">\n            <span>{{ t.name }}</span>\n            <b>{{ t.n }}</b>\n            <em>{{ t.pct }}%</em>\n          </li>\n        </ul>\n      </div>\n    </aside>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/magnus-checkin/magnus-checkin.component.scss":
/*!**************************************************************!*\
  !*** ./src/app/magnus-checkin/magnus-checkin.component.scss ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  --c-surface: var(--surface-card);\n  --c-canvas: var(--grey);\n  --c-hairline: var(--border-light);\n  --c-rule: var(--bodrColor);\n  --c-ink: var(--text);\n  --c-ink-2: var(--text-secondary);\n  --c-ink-3: var(--text-muted);\n  --c-red: var(--primary);\n  --c-red-soft: var(--primary-light);\n  --c-green: var(--success);\n  --c-green-soft: var(--success-light);\n  --c-amber: var(--warning);\n  --c-amber-soft: var(--warning-light);\n  display: block;\n  height: 100%;\n}\n\n:host .main-container {\n  display: flex;\n  flex-direction: column;\n}\n\n:host .tools-container {\n  flex: 0 0 auto;\n  position: relative;\n}\n\n.mgc-chip {\n  display: inline-flex;\n  align-items: center;\n  font-size: 12.5px;\n  color: var(--c-ink-2);\n  background: var(--c-surface);\n  border: 1px solid var(--c-hairline);\n  border-radius: 8px;\n  padding: 7px 11px;\n  white-space: nowrap;\n}\n\n.mgc-datenav {\n  display: inline-flex;\n  align-items: center;\n  background: var(--c-surface);\n  border: 1px solid var(--c-hairline);\n  border-radius: 8px;\n  overflow: hidden;\n}\n\n.mgc-datenav button {\n  border: 0;\n  background: transparent;\n  width: 30px;\n  height: 34px;\n  cursor: pointer;\n  color: var(--c-ink-2);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: background 0.13s cubic-bezier(0.4, 0, 0.2, 1);\n}\n\n.mgc-datenav button i {\n  font-size: 19px;\n}\n\n.mgc-datenav button:hover:not(:disabled) {\n  background: var(--c-canvas);\n  color: var(--c-ink);\n}\n\n.mgc-datenav button:disabled {\n  opacity: 0.3;\n  cursor: not-allowed;\n}\n\n.mgc-date {\n  padding: 0 10px;\n  text-align: center;\n  line-height: 1.2;\n  min-width: 96px;\n}\n\n.mgc-date b {\n  display: block;\n  font-size: 12.5px;\n  font-weight: 600;\n  color: var(--c-ink);\n  white-space: nowrap;\n}\n\n.mgc-date em {\n  display: block;\n  font-style: normal;\n  font-size: 10.5px;\n  color: var(--c-ink-3);\n}\n\n.mgc-seg {\n  display: inline-flex;\n  gap: 2px;\n  background: var(--c-canvas);\n  border: 1px solid var(--c-hairline);\n  border-radius: 9px;\n  padding: 2px;\n}\n\n.mgc-seg button {\n  border: 0;\n  background: transparent;\n  border-radius: 7px;\n  padding: 6px 13px;\n  font-size: 12.5px;\n  font-weight: 500;\n  color: var(--c-ink-2);\n  cursor: pointer;\n  transition: background 0.13s cubic-bezier(0.4, 0, 0.2, 1), color 0.13s cubic-bezier(0.4, 0, 0.2, 1);\n}\n\n.mgc-seg button:hover {\n  color: var(--c-ink);\n}\n\n.mgc-seg button.on {\n  background: var(--c-surface);\n  color: var(--c-ink);\n  font-weight: 600;\n  box-shadow: 0 1px 2px rgba(42, 44, 51, 0.08);\n}\n\n.mgc {\n  flex: 1 1 auto;\n  min-height: 0;\n  display: grid;\n  grid-template-columns: minmax(0, 1fr) 312px;\n  gap: 12px;\n  padding: 0 16px 16px 16px;\n  background: var(--c-canvas);\n}\n\n.mgc-main {\n  min-width: 0;\n  display: flex;\n  flex-direction: column;\n  min-height: 0;\n}\n\n.mgc-kpis {\n  display: grid;\n  grid-template-columns: repeat(5, minmax(0, 1fr));\n  gap: 10px;\n  margin-bottom: 10px;\n  flex: 0 0 auto;\n}\n\n.mgc-kpis article {\n  background: var(--c-surface);\n  border: 1px solid var(--c-hairline);\n  border-radius: 11px;\n  padding: 12px 13px;\n  min-width: 0;\n}\n\n.mgc-kpis article.flag {\n  border-color: rgba(221, 77, 97, 0.35);\n}\n\n.mgc-kpis article u {\n  display: block;\n  text-decoration: none;\n  font-size: 11.5px;\n  color: var(--c-ink-2);\n  margin-bottom: 5px;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.mgc-kpis article b {\n  display: block;\n  font-size: 22px;\n  font-weight: 700;\n  letter-spacing: -0.03em;\n  color: var(--c-ink);\n  line-height: 1.15;\n  font-variant-numeric: tabular-nums;\n}\n\n.mgc-kpis article b s {\n  text-decoration: none;\n  font-size: 12.5px;\n  font-weight: 500;\n  color: var(--c-ink-3);\n}\n\n.mgc-kpis article em {\n  display: block;\n  font-style: normal;\n  font-size: 11px;\n  color: var(--c-ink-3);\n  margin-top: 5px;\n  line-height: 1.4;\n}\n\n.mgc-meter {\n  display: block;\n  height: 4px;\n  margin-top: 7px;\n  border-radius: 9999px;\n  background: var(--c-hairline);\n  overflow: hidden;\n}\n\n.mgc-meter i {\n  display: block;\n  height: 100%;\n  border-radius: 9999px;\n  background: var(--c-green);\n}\n\n.mgc-bar {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  flex-wrap: wrap;\n  background: var(--c-surface);\n  border: 1px solid var(--c-hairline);\n  border-radius: 11px;\n  padding: 9px 11px;\n  margin-bottom: 10px;\n  flex: 0 0 auto;\n}\n\n.mgc-search {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  flex: 1 1 260px;\n  min-width: 0;\n  background: var(--c-canvas);\n  border: 1px solid transparent;\n  border-radius: 8px;\n  padding: 0 10px;\n  height: 34px;\n  transition: border-color 0.15s cubic-bezier(0.4, 0, 0.2, 1), background 0.15s cubic-bezier(0.4, 0, 0.2, 1);\n}\n\n.mgc-search:focus-within {\n  background: var(--c-surface);\n  border-color: var(--c-rule);\n}\n\n.mgc-search > i {\n  font-size: 17px;\n  color: var(--c-ink-3);\n}\n\n.mgc-search input {\n  flex: 1;\n  min-width: 0;\n  border: 0;\n  outline: 0;\n  background: transparent;\n  font-size: 13px;\n  color: var(--c-ink);\n}\n\n.mgc-search input::-moz-placeholder {\n  color: var(--c-ink-3);\n}\n\n.mgc-search input::placeholder {\n  color: var(--c-ink-3);\n}\n\n.mgc-x {\n  border: 0;\n  background: transparent;\n  cursor: pointer;\n  padding: 0;\n  display: flex;\n  align-items: center;\n  color: var(--c-ink-3);\n}\n\n.mgc-x i {\n  font-size: 16px;\n}\n\n.mgc-x:hover {\n  color: var(--c-ink);\n}\n\n.mgc-filters {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 4px;\n}\n\n.mgc-filters button {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  border: 0;\n  background: var(--c-canvas);\n  border-radius: 7px;\n  padding: 6px 10px;\n  font-size: 12px;\n  font-weight: 500;\n  color: var(--c-ink-2);\n  cursor: pointer;\n  white-space: nowrap;\n  transition: background 0.13s cubic-bezier(0.4, 0, 0.2, 1), color 0.13s cubic-bezier(0.4, 0, 0.2, 1);\n}\n\n.mgc-filters button i {\n  font-size: 14px;\n}\n\n.mgc-filters button u {\n  text-decoration: none;\n  font-weight: 600;\n  color: var(--c-ink-3);\n  font-variant-numeric: tabular-nums;\n}\n\n.mgc-filters button:hover {\n  color: var(--c-ink);\n}\n\n.mgc-filters button.on {\n  background: var(--c-ink);\n  color: #ffffff;\n}\n\n.mgc-filters button.on u {\n  color: rgba(255, 255, 255, 0.7);\n}\n\n.mgc-filters button.flag {\n  color: var(--c-red);\n  background: var(--c-red-soft);\n}\n\n.mgc-filters button.flag u {\n  color: var(--c-red);\n}\n\n.mgc-filters button.flag.on {\n  background: var(--c-red);\n  color: #ffffff;\n}\n\n.mgc-filters button.flag.on u {\n  color: rgba(255, 255, 255, 0.8);\n}\n\n.mgc-feed {\n  flex: 1 1 auto;\n  min-height: 0;\n  overflow-y: auto;\n  padding-right: 2px;\n}\n\n.mgc-visit {\n  display: grid;\n  grid-template-columns: 82px minmax(0, 1fr);\n  background: var(--c-surface);\n  border: 1px solid var(--c-hairline);\n  border-radius: 11px;\n  margin-bottom: 8px;\n  transition: border-color 0.14s cubic-bezier(0.4, 0, 0.2, 1);\n}\n\n.mgc-visit:hover {\n  border-color: var(--c-rule);\n}\n\n.mgc-visit.open {\n  border-color: var(--c-rule);\n}\n\n.mgc-visit.flagged {\n  border-left: 3px solid var(--c-red);\n}\n\n.mgc-time {\n  padding: 14px 10px 14px 13px;\n  border-right: 1px solid var(--c-hairline);\n  text-align: center;\n}\n\n.mgc-time b {\n  display: block;\n  font-size: 12.5px;\n  font-weight: 600;\n  color: var(--c-ink);\n  font-variant-numeric: tabular-nums;\n  white-space: nowrap;\n}\n\n.mgc-time em {\n  display: block;\n  font-style: normal;\n  font-size: 11.5px;\n  color: var(--c-ink-3);\n  font-variant-numeric: tabular-nums;\n  white-space: nowrap;\n}\n\n.mgc-time-rule {\n  display: block;\n  width: 1px;\n  height: 12px;\n  background: var(--c-rule);\n  margin: 3px auto;\n}\n\n.mgc-body {\n  padding: 12px 14px;\n  min-width: 0;\n  cursor: pointer;\n}\n\n.mgc-line1 {\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 7px;\n  margin-bottom: 7px;\n}\n\n.mgc-dealer {\n  font-size: 14px;\n  font-weight: 600;\n  color: var(--c-ink);\n  letter-spacing: -0.01em;\n}\n\n.mgc-tag {\n  font-size: 11px;\n  font-weight: 500;\n  color: var(--c-ink-2);\n  background: var(--c-canvas);\n  border-radius: 5px;\n  padding: 2px 7px;\n  white-space: nowrap;\n}\n\n.mgc-tag.soft {\n  color: var(--c-ink-3);\n}\n\n.mgc-tag.new {\n  background: var(--c-green-soft);\n  color: var(--c-green);\n  font-weight: 600;\n}\n\n.mgc-geo {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  margin-left: auto;\n  font-size: 11.5px;\n  font-weight: 500;\n  border-radius: 6px;\n  padding: 2px 8px;\n  white-space: nowrap;\n}\n\n.mgc-geo i {\n  font-size: 14px;\n}\n\n.mgc-geo s {\n  text-decoration: none;\n  opacity: 0.75;\n}\n\n.mgc-geo.verified {\n  color: var(--c-green);\n  background: var(--c-green-soft);\n}\n\n.mgc-geo.far {\n  color: var(--c-amber);\n  background: var(--c-amber-soft);\n}\n\n.mgc-geo.missing {\n  color: var(--c-red);\n  background: var(--c-red-soft);\n}\n\n.mgc-caret {\n  font-size: 19px !important;\n  color: var(--c-ink-3);\n  flex-shrink: 0;\n}\n\n.mgc-line2 {\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 7px;\n  font-size: 12.5px;\n  color: var(--c-ink-2);\n  margin-bottom: 8px;\n}\n\n.mgc-who {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  font-weight: 500;\n  color: var(--c-ink);\n}\n\n.mgc-av {\n  display: inline-flex;\n  align-items: center;\n  justify-content: center;\n  width: 22px;\n  height: 22px;\n  border-radius: 50%;\n  background: var(--c-canvas);\n  box-shadow: 0 0 0 1px var(--c-rule);\n  font-size: 9.5px;\n  font-weight: 600;\n  font-style: normal;\n  color: var(--c-ink-2);\n  flex-shrink: 0;\n}\n\n.mgc-av.sm {\n  width: 20px;\n  height: 20px;\n  font-size: 9px;\n}\n\n.mgc-sep {\n  color: var(--c-ink-3);\n}\n\n.mgc-dur {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  font-variant-numeric: tabular-nums;\n}\n\n.mgc-dur i {\n  font-size: 14px;\n  color: var(--c-ink-3);\n}\n\n.mgc-durbar {\n  display: block;\n  width: 56px;\n  height: 4px;\n  border-radius: 9999px;\n  background: var(--c-hairline);\n  overflow: hidden;\n}\n\n.mgc-durbar i {\n  display: block;\n  height: 100%;\n  border-radius: 9999px;\n  background: var(--c-ink-3);\n}\n\n.mgc-photos {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  margin-left: auto;\n  font-size: 11.5px;\n  color: var(--c-ink-2);\n}\n\n.mgc-photos i {\n  font-size: 15px;\n  color: var(--c-ink-3);\n}\n\n.mgc-photos.none {\n  color: var(--c-ink-3);\n}\n\n.mgc-topic {\n  font-size: 13px;\n  color: var(--c-ink);\n  line-height: 1.5;\n}\n\n.mgc-links {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 6px;\n  margin-top: 9px;\n}\n\n.mgc-link {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  font-size: 11.5px;\n  font-weight: 500;\n  color: var(--c-ink);\n  background: var(--c-canvas);\n  border: 1px solid var(--c-hairline);\n  border-radius: 6px;\n  padding: 3px 8px;\n  font-variant-numeric: tabular-nums;\n}\n\n.mgc-link u {\n  text-decoration: none;\n  font-size: 10px;\n  font-weight: 600;\n  letter-spacing: 0.04em;\n  text-transform: uppercase;\n  color: var(--c-ink-3);\n}\n\n.mgc-detail {\n  grid-column: 1/-1;\n  border-top: 1px solid var(--c-hairline);\n  padding: 13px 14px 14px 14px;\n  background: var(--c-canvas);\n  border-radius: 0 0 10px 10px;\n}\n\n.mgc-detail-grid {\n  display: grid;\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n  gap: 11px 16px;\n  margin-bottom: 13px;\n}\n\n.mgc-detail-grid span {\n  min-width: 0;\n}\n\n.mgc-detail-grid u {\n  display: block;\n  text-decoration: none;\n  font-size: 11px;\n  color: var(--c-ink-3);\n  margin-bottom: 2px;\n}\n\n.mgc-detail-grid b {\n  display: block;\n  font-size: 12.5px;\n  font-weight: 500;\n  color: var(--c-ink);\n  font-variant-numeric: tabular-nums;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n.mgc-remark u {\n  display: block;\n  text-decoration: none;\n  font-size: 11px;\n  color: var(--c-ink-3);\n  margin-bottom: 4px;\n}\n\n.mgc-remark p {\n  font-size: 13px;\n  line-height: 1.55;\n  color: var(--c-ink-2);\n  border-left: 2px solid var(--c-rule);\n  padding-left: 10px;\n}\n\n.mgc-shots {\n  margin-top: 13px;\n}\n\n.mgc-shots u {\n  display: block;\n  text-decoration: none;\n  font-size: 11px;\n  color: var(--c-ink-3);\n  margin-bottom: 6px;\n}\n\n.mgc-shot-row {\n  display: flex;\n  gap: 6px;\n  flex-wrap: wrap;\n}\n\n.mgc-shot {\n  width: 52px;\n  height: 52px;\n  border-radius: 8px;\n  background: var(--c-surface);\n  border: 1px solid var(--c-rule);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.mgc-shot i {\n  font-size: 20px;\n  color: var(--c-ink-3);\n}\n\n.mgc-empty {\n  text-align: center;\n  padding: 44px 20px;\n}\n\n.mgc-empty img {\n  height: 140px;\n  margin-bottom: 12px;\n}\n\n.mgc-empty p {\n  font-size: 14px;\n  font-weight: 500;\n  color: var(--c-ink-2);\n}\n\n.mgc-empty p span {\n  display: block;\n  margin-top: 4px;\n  font-size: 13px;\n  font-weight: 400;\n  color: var(--c-ink-3);\n}\n\n.mgc-side {\n  min-width: 0;\n  overflow-y: auto;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n\n.mgc-panel {\n  background: var(--c-surface);\n  border: 1px solid var(--c-hairline);\n  border-radius: 11px;\n  padding: 14px;\n}\n\n.mgc-panel h4 {\n  font-size: 11px;\n  font-weight: 600;\n  letter-spacing: 0.06em;\n  text-transform: uppercase;\n  color: var(--c-ink-3);\n  margin-bottom: 12px;\n}\n\n.mgc-note {\n  font-size: 11.5px;\n  color: var(--c-ink-3);\n  margin-top: 10px;\n}\n\n.mgc-hours {\n  display: flex;\n  align-items: flex-end;\n  gap: 5px;\n  height: 92px;\n}\n\n.mgc-hour {\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 5px;\n  min-width: 0;\n}\n\n.mgc-hour em {\n  font-style: normal;\n  font-size: 10px;\n  color: var(--c-ink-3);\n  font-variant-numeric: tabular-nums;\n}\n\n.mgc-hour-bar {\n  display: flex;\n  align-items: flex-end;\n  width: 100%;\n  height: 72px;\n  background: var(--c-canvas);\n  border-radius: 4px;\n  overflow: hidden;\n}\n\n.mgc-hour-bar u {\n  display: block;\n  width: 100%;\n  text-decoration: none;\n  background: var(--c-ink);\n  border-radius: 4px 4px 0 0;\n  transition: height 0.4s cubic-bezier(0.4, 0, 0.2, 1);\n}\n\n.mgc-hour-bar u.zero {\n  background: var(--c-hairline);\n  height: 2px !important;\n}\n\n.mgc-rank {\n  list-style: none;\n}\n\n.mgc-rank li + li {\n  margin-top: 11px;\n}\n\n.mgc-rank-top {\n  display: flex;\n  align-items: center;\n  gap: 7px;\n  margin-bottom: 6px;\n}\n\n.mgc-rank-top b {\n  flex: 1;\n  min-width: 0;\n  font-size: 12.5px;\n  font-weight: 500;\n  color: var(--c-ink);\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n.mgc-rank-top u {\n  text-decoration: none;\n  font-size: 12px;\n  font-weight: 600;\n  color: var(--c-ink);\n  font-variant-numeric: tabular-nums;\n}\n\n.mgc-rank-bar {\n  display: block;\n  height: 5px;\n  border-radius: 9999px;\n  background: var(--c-hairline);\n  overflow: hidden;\n}\n\n.mgc-rank-bar i {\n  display: block;\n  height: 100%;\n  border-radius: 9999px;\n  background: var(--c-ink-3);\n}\n\n.mgc-mix {\n  list-style: none;\n}\n\n.mgc-mix li {\n  display: flex;\n  align-items: center;\n  gap: 9px;\n  padding: 7px 0;\n  font-size: 13px;\n  color: var(--c-ink-2);\n}\n\n.mgc-mix li + li {\n  border-top: 1px solid var(--c-hairline);\n}\n\n.mgc-mix li span {\n  flex: 1;\n  min-width: 0;\n}\n\n.mgc-mix li b {\n  font-weight: 600;\n  color: var(--c-ink);\n  font-variant-numeric: tabular-nums;\n}\n\n.mgc-mix li em {\n  font-style: normal;\n  font-size: 12px;\n  color: var(--c-ink-3);\n  width: 38px;\n  text-align: right;\n  font-variant-numeric: tabular-nums;\n}\n\n@media only screen and (max-width: 1500px) {\n  .mgc-kpis {\n    grid-template-columns: repeat(3, minmax(0, 1fr));\n  }\n}\n\n@media only screen and (max-width: 1180px) {\n  .mgc {\n    grid-template-columns: minmax(0, 1fr);\n    overflow-y: auto;\n  }\n  .mgc-feed {\n    overflow: visible;\n  }\n  .mgc-side {\n    overflow: visible;\n  }\n}\n\n@media only screen and (max-width: 760px) {\n  .mgc {\n    padding: 0 12px 12px 12px;\n  }\n  .mgc-kpis {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n  .mgc-visit {\n    grid-template-columns: minmax(0, 1fr);\n  }\n  .mgc-time {\n    display: flex;\n    align-items: center;\n    gap: 8px;\n    border-right: 0;\n    border-bottom: 1px solid var(--c-hairline);\n    padding: 9px 14px;\n    text-align: left;\n  }\n  .mgc-time-rule {\n    width: 12px;\n    height: 1px;\n    margin: 0;\n  }\n  .mgc-geo {\n    margin-left: 0;\n  }\n  .mgc-detail-grid {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n}"

/***/ }),

/***/ "./src/app/magnus-checkin/magnus-checkin.component.ts":
/*!************************************************************!*\
  !*** ./src/app/magnus-checkin/magnus-checkin.component.ts ***!
  \************************************************************/
/*! exports provided: MagnusCheckinComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MagnusCheckinComponent", function() { return MagnusCheckinComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/core/fesm5/core.js");


var MagnusCheckinComponent = /** @class */ (function () {
    function MagnusCheckinComponent() {
        // --- period ---
        this.period = 'today';
        this.dayOffset = 0;
        this.dateLabel = '';
        this.relLabel = 'Today';
        // --- filters ---
        this.search = '';
        this.filter = 'all';
        this.expanded = null;
        this.visits = [];
    }
    MagnusCheckinComponent.prototype.ngOnInit = function () {
        this.visits = this.build();
        this.setDate();
    };
    // ==========================================================================
    // Mock data - the same people and dealers as the dashboard and map screens
    // ==========================================================================
    MagnusCheckinComponent.prototype.build = function () {
        var _this = this;
        var rows = [
            ['Rakesh Menon', 'MG-0114', 'Shree Balaji Timber', 'Nagpur', 'Dealer', 9, 20, 46, 'Scheduled', true, false, 'verified', '12 m', 3, 'New season pricing and Q3 scheme', 'Asked for a revised rate card on BWP 710. Wants 15-day credit.', [['Order', 'MG-24188']]],
            ['Rakesh Menon', 'MG-0114', 'Gupta Hardware', 'Nagpur', 'Sub dealer', 10, 38, 31, 'Unplanned', true, true, 'verified', '40 m', 2, 'First visit, counter opening', 'New counter opened last month. Interested in Strength BWR.', [['Lead', 'LD-8821']]],
            ['Sunita Rawat', 'MG-0207', 'Kohinoor Ply House', 'Delhi NCR', 'Dealer', 10, 5, 58, 'Scheduled', true, false, 'verified', '8 m', 4, 'Shuttering ply supply for Dwarka site', 'Committed 240 sheets for the month. Needs delivery by the 18th.', [['Order', 'MG-24187'], ['Ticket', 'TK-3319']]],
            ['Sunita Rawat', 'MG-0207', 'Verma Timber Mart', 'Delhi NCR', 'Dealer', 12, 15, 24, 'Follow-up', false, false, 'far', '1.4 km', 1, 'Payment follow-up', 'Owner not available. Asked to revisit on Thursday.', []],
            ['Imran Qureshi', 'MG-0318', 'Sai Laminates', 'Surat', 'Dealer', 9, 45, 52, 'Scheduled', true, false, 'verified', '22 m', 3, 'Fire retardant range walkthrough', 'Placed a trial order for automotive FR ply.', [['Order', 'MG-24186']]],
            ['Imran Qureshi', 'MG-0318', 'Metro Wood Traders', 'Surat', 'Sub dealer', 11, 30, 19, 'Unplanned', false, false, 'verified', '65 m', 0, 'Stock check', 'Slow movement on block board. No order this cycle.', []],
            ['Deepak Sahu', 'MG-0422', 'Anand Plywood Centre', 'Indore', 'Dealer', 10, 10, 41, 'Scheduled', true, false, 'verified', '30 m', 2, 'Scheme enrolment', 'Enrolled in the Q3 loyalty scheme. Wants POP material.', [['Lead', 'LD-8834']]],
            ['Deepak Sahu', 'MG-0422', 'Shree Ganesh Ply', 'Indore', 'Sub dealer', 13, 5, 27, 'Follow-up', true, true, 'verified', '18 m', 2, 'Counter activation', 'Agreed to stock the calibrated range. First order next week.', [['Lead', 'LD-8840']]],
            ['Vikram Shetty', 'MG-0533', 'Sri Lakshmi Traders', 'Bengaluru', 'Dealer', 9, 35, 63, 'Scheduled', true, false, 'verified', '9 m', 5, 'Annual contract discussion', 'Long meeting. Contract renewal at a 4% higher slab.', [['Order', 'MG-24185'], ['Audit', 'BA-1142']]],
            ['Vikram Shetty', 'MG-0533', 'Nandi Hardware', 'Bengaluru', 'Sub dealer', 11, 50, 22, 'Unplanned', false, false, 'far', '820 m', 1, 'Competitor display check', 'Competitor POP dominating the counter. Flagged for BTL team.', [['Ticket', 'TK-3322']]],
            ['Harpreet Gill', 'MG-0641', 'Gill Plywood House', 'Ludhiana', 'Dealer', 10, 25, 37, 'Scheduled', true, false, 'verified', '15 m', 3, 'Truck flooring requirement', 'Bulk requirement for a transport body builder.', [['Order', 'MG-24184']]],
            ['Harpreet Gill', 'MG-0641', 'Singh Timber Depot', 'Ludhiana', 'Dealer', 12, 40, 29, 'Follow-up', true, false, 'verified', '26 m', 2, 'Pending dispatch', 'Dispatch delay resolved on call during the visit.', [['Ticket', 'TK-3320']]],
            ['Mohan Iyer', 'MG-0752', 'Coimbatore Ply Mart', 'Coimbatore', 'Dealer', 9, 55, 44, 'Scheduled', true, false, 'verified', '11 m', 2, 'Pine door sampling', 'Left two door samples. Feedback expected in a week.', [['Lead', 'LD-8845']]],
            ['Mohan Iyer', 'MG-0752', 'KS Boards', 'Coimbatore', 'Sub dealer', 14, 20, 16, 'Unplanned', false, false, 'missing', '—', 0, 'Routine call', 'GPS was off during this visit; location not captured.', []],
            ['Anita Bhattacharya', 'MG-0866', 'Bengal Ply Centre', 'Kolkata', 'Dealer', 10, 45, 33, 'Scheduled', true, false, 'missing', '—', 1, 'Monsoon stock planning', 'Location permission denied on device. Visit logged manually.', []]
        ];
        var mgrs = {
            'Rakesh Menon': 'A. Kulkarni', 'Sunita Rawat': 'P. Chawla', 'Imran Qureshi': 'A. Kulkarni',
            'Deepak Sahu': 'P. Chawla', 'Vikram Shetty': 'R. Nair', 'Harpreet Gill': 'P. Chawla',
            'Mohan Iyer': 'R. Nair', 'Anita Bhattacharya': 'A. Kulkarni'
        };
        return rows.map(function (r, i) {
            var h = r[5], m = r[6], dur = r[7];
            var outM = h * 60 + m + dur;
            return {
                id: 'CI-' + (94120 + i),
                emp: r[0], empCode: r[1], manager: mgrs[r[0]],
                dealer: r[2], city: r[3], custType: r[4],
                inTime: _this.hhmm(h * 60 + m),
                outTime: _this.hhmm(outM),
                mins: dur,
                hour: h,
                kind: r[8], productive: r[9], newCounter: r[10],
                geo: r[11], distance: r[12], photos: r[13],
                topic: r[14], remark: r[15],
                links: (r[16] || []).map(function (l) { return ({ label: l[0], id: l[1] }); })
            };
        });
    };
    MagnusCheckinComponent.prototype.hhmm = function (mins) {
        var h = Math.floor(mins / 60);
        var m = mins % 60;
        var ap = h >= 12 ? 'PM' : 'AM';
        if (h > 12) {
            h -= 12;
        }
        if (h === 0) {
            h = 12;
        }
        return (h < 10 ? '0' : '') + h + ':' + (m < 10 ? '0' : '') + m + ' ' + ap;
    };
    // ==========================================================================
    // Period
    // ==========================================================================
    MagnusCheckinComponent.prototype.setDate = function () {
        var d = new Date();
        d.setDate(d.getDate() + this.dayOffset);
        var mo = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        this.dateLabel = this.period === 'month'
            ? mo[d.getMonth()] + ' ' + d.getFullYear()
            : d.getDate() + ' ' + mo[d.getMonth()] + ' ' + d.getFullYear();
        this.relLabel = this.period === 'month' ? 'This month'
            : this.dayOffset === 0 ? 'Today'
                : this.dayOffset === -1 ? 'Yesterday'
                    : Math.abs(this.dayOffset) + ' days ago';
    };
    MagnusCheckinComponent.prototype.setPeriod = function (p) {
        if (this.period === p) {
            return;
        }
        this.period = p;
        this.dayOffset = 0;
        this.setDate();
    };
    MagnusCheckinComponent.prototype.stepDay = function (d) {
        if (this.period === 'month' || this.dayOffset + d > 0) {
            return;
        }
        this.dayOffset += d;
        this.setDate();
    };
    Object.defineProperty(MagnusCheckinComponent.prototype, "isToday", {
        get: function () { return this.dayOffset === 0; },
        enumerable: true,
        configurable: true
    });
    // ==========================================================================
    // Filtering
    // ==========================================================================
    MagnusCheckinComponent.prototype.isFlagged = function (v) { return v.geo !== 'verified'; };
    Object.defineProperty(MagnusCheckinComponent.prototype, "list", {
        get: function () {
            var _this = this;
            var q = (this.search || '').toLowerCase().trim();
            return this.visits.filter(function (v) {
                if (q &&
                    v.emp.toLowerCase().indexOf(q) === -1 &&
                    v.dealer.toLowerCase().indexOf(q) === -1 &&
                    v.city.toLowerCase().indexOf(q) === -1 &&
                    v.id.toLowerCase().indexOf(q) === -1) {
                    return false;
                }
                if (_this.filter === 'productive') {
                    return v.productive;
                }
                if (_this.filter === 'unproductive') {
                    return !v.productive;
                }
                if (_this.filter === 'new') {
                    return v.newCounter;
                }
                if (_this.filter === 'flagged') {
                    return _this.isFlagged(v);
                }
                return true;
            });
        },
        enumerable: true,
        configurable: true
    });
    MagnusCheckinComponent.prototype.countFor = function (f) {
        var _this = this;
        if (f === 'all') {
            return this.visits.length;
        }
        if (f === 'productive') {
            return this.visits.filter(function (v) { return v.productive; }).length;
        }
        if (f === 'unproductive') {
            return this.visits.filter(function (v) { return !v.productive; }).length;
        }
        if (f === 'new') {
            return this.visits.filter(function (v) { return v.newCounter; }).length;
        }
        return this.visits.filter(function (v) { return _this.isFlagged(v); }).length;
    };
    MagnusCheckinComponent.prototype.clearSearch = function () { this.search = ''; };
    MagnusCheckinComponent.prototype.toggle = function (v) { this.expanded = this.expanded === v.id ? null : v.id; };
    Object.defineProperty(MagnusCheckinComponent.prototype, "total", {
        // ==========================================================================
        // Day summary
        // ==========================================================================
        get: function () { return this.visits.length; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MagnusCheckinComponent.prototype, "productiveCount", {
        get: function () { return this.visits.filter(function (v) { return v.productive; }).length; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MagnusCheckinComponent.prototype, "productivePct", {
        get: function () { return Math.round((this.productiveCount / this.total) * 100); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MagnusCheckinComponent.prototype, "newCount", {
        get: function () { return this.visits.filter(function (v) { return v.newCounter; }).length; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MagnusCheckinComponent.prototype, "flaggedCount", {
        get: function () {
            var _this = this;
            return this.visits.filter(function (v) { return _this.isFlagged(v); }).length;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MagnusCheckinComponent.prototype, "staffCount", {
        get: function () {
            var seen = {};
            this.visits.forEach(function (v) { return seen[v.emp] = 1; });
            return Object.keys(seen).length;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MagnusCheckinComponent.prototype, "avgMins", {
        get: function () {
            return Math.round(this.visits.reduce(function (a, v) { return a + v.mins; }, 0) / this.total);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MagnusCheckinComponent.prototype, "totalHours", {
        get: function () {
            var m = this.visits.reduce(function (a, v) { return a + v.mins; }, 0);
            return Math.floor(m / 60) + 'h ' + (m % 60) + 'm';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MagnusCheckinComponent.prototype, "hourly", {
        // Hourly distribution, 9 AM to 5 PM - single series, so no legend
        get: function () {
            var out = [];
            var max = 1;
            var _loop_1 = function (h) {
                var n = this_1.visits.filter(function (v) { return v.hour === h; }).length;
                if (n > max) {
                    max = n;
                }
                out.push({ h: h, label: (h > 12 ? h - 12 : h) + (h >= 12 ? 'p' : 'a'), n: n, pct: 0 });
            };
            var this_1 = this;
            for (var h = 9; h <= 17; h++) {
                _loop_1(h);
            }
            out.forEach(function (o) { return o.pct = Math.round((o.n / max) * 100); });
            return out;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MagnusCheckinComponent.prototype, "byStaff", {
        get: function () {
            var map = {};
            this.visits.forEach(function (v) {
                if (!map[v.emp]) {
                    map[v.emp] = { name: v.emp, n: 0, mins: 0, pct: 0 };
                }
                map[v.emp].n++;
                map[v.emp].mins += v.mins;
            });
            var arr = Object.keys(map).map(function (k) { return map[k]; });
            arr.sort(function (a, b) { return b.n - a.n; });
            var max = arr.length ? arr[0].n : 1;
            arr.forEach(function (a) { return a.pct = Math.round((a.n / max) * 100); });
            return arr;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MagnusCheckinComponent.prototype, "byType", {
        get: function () {
            var _this = this;
            var map = {};
            this.visits.forEach(function (v) { map[v.custType] = (map[v.custType] || 0) + 1; });
            return Object.keys(map).map(function (k) { return ({
                name: k, n: map[k], pct: Math.round((map[k] / _this.total) * 100)
            }); }).sort(function (a, b) { return b.n - a.n; });
        },
        enumerable: true,
        configurable: true
    });
    // ==========================================================================
    // Template helpers
    // ==========================================================================
    MagnusCheckinComponent.prototype.initials = function (n) {
        var p = n.split(' ');
        return (p[0][0] + (p.length > 1 ? p[p.length - 1][0] : '')).toUpperCase();
    };
    MagnusCheckinComponent.prototype.duration = function (m) {
        return m >= 60 ? Math.floor(m / 60) + 'h ' + (m % 60) + 'm' : m + ' min';
    };
    MagnusCheckinComponent.prototype.geoLabel = function (g) {
        return g === 'verified' ? 'At location' : g === 'far' ? 'Away from counter' : 'No location';
    };
    MagnusCheckinComponent.prototype.geoIcon = function (g) {
        return g === 'verified' ? 'check_circle' : g === 'far' ? 'error_outline' : 'location_off';
    };
    // Bar width for the duration meter; 90 min reads as a full bar
    MagnusCheckinComponent.prototype.durPct = function (m) { return Math.min(100, Math.round((m / 90) * 100)); };
    MagnusCheckinComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-magnus-checkin',
            template: __webpack_require__(/*! ./magnus-checkin.component.html */ "./src/app/magnus-checkin/magnus-checkin.component.html"),
            styles: [__webpack_require__(/*! ./magnus-checkin.component.scss */ "./src/app/magnus-checkin/magnus-checkin.component.scss")]
        })
    ], MagnusCheckinComponent);
    return MagnusCheckinComponent;
}());



/***/ }),

/***/ "./src/app/magnus-checkin/magnus-checkin.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/magnus-checkin/magnus-checkin.module.ts ***!
  \*********************************************************/
/*! exports provided: MagnusCheckinModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MagnusCheckinModule", function() { return MagnusCheckinModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/material */ "./src/app/material.ts");
/* harmony import */ var src_app_auth_component_guard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/auth-component.guard */ "./src/app/auth-component.guard.ts");
/* harmony import */ var _magnus_checkin_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./magnus-checkin.component */ "./src/app/magnus-checkin/magnus-checkin.component.ts");








var routes = [
    { path: '', component: _magnus_checkin_component__WEBPACK_IMPORTED_MODULE_7__["MagnusCheckinComponent"], canActivate: [src_app_auth_component_guard__WEBPACK_IMPORTED_MODULE_6__["AuthComponentGuard"]], data: { expectedRole: ['1'] } }
];
var MagnusCheckinModule = /** @class */ (function () {
    function MagnusCheckinModule() {
    }
    MagnusCheckinModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _magnus_checkin_component__WEBPACK_IMPORTED_MODULE_7__["MagnusCheckinComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                src_app_material__WEBPACK_IMPORTED_MODULE_5__["MaterialModule"]
            ]
        })
    ], MagnusCheckinModule);
    return MagnusCheckinModule;
}());



/***/ })

}]);