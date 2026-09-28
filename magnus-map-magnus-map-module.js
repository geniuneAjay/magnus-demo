(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["magnus-map-magnus-map-module"],{

/***/ "./src/app/magnus-map/magnus-map.component.html":
/*!******************************************************!*\
  !*** ./src/app/magnus-map/magnus-map.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-container\">\n\n  <!-- ====================================================================\n       Page header: date, team totals, map mode\n       ==================================================================== -->\n  <div class=\"tools-container\">\n    <h2>Field Tracking</h2>\n\n    <div class=\"left-auto df ac flex-gap-10\">\n\n      <!-- date stepper -->\n      <div class=\"mgm-datenav\">\n        <button (click)=\"stepDay(-1)\" matTooltip=\"Previous day\" aria-label=\"Previous day\">\n          <i class=\"material-icons\">chevron_left</i>\n        </button>\n        <span class=\"mgm-date\">\n          <b>{{ dateLabel }}</b><em>{{ relLabel }}</em>\n        </span>\n        <button (click)=\"stepDay(1)\" [disabled]=\"isToday\" matTooltip=\"Next day\" aria-label=\"Next day\">\n          <i class=\"material-icons\">chevron_right</i>\n        </button>\n      </div>\n      <button class=\"mgm-today\" (click)=\"goToday()\" [disabled]=\"isToday\">Today</button>\n\n      <!-- team totals -->\n      <span class=\"mgm-chip\"><i class=\"mgm-dot live\"></i>{{ onlineCount }}/{{ staff.length }} online</span>\n      <span class=\"mgm-chip\">{{ teamDistance }} km today</span>\n      <span class=\"mgm-chip\">{{ teamVisits }}/{{ teamTarget }} visits · {{ teamVisitPct }}%</span>\n\n      <!-- map mode -->\n      <div class=\"mgm-seg\">\n        <button [class.on]=\"view === 'team'\" (click)=\"setView('team')\">\n          <i class=\"material-icons\">groups</i>Team\n        </button>\n        <button [class.on]=\"view === 'person'\" (click)=\"setView('person')\">\n          <i class=\"material-icons\">timeline</i>Route\n        </button>\n      </div>\n\n      <button mat-icon-button matTooltip=\"Refresh\"><i class=\"material-icons\">refresh</i></button>\n    </div>\n  </div>\n\n  <div class=\"mgm\">\n\n    <!-- ==================================================================\n         Roster\n         ================================================================== -->\n    <aside class=\"mgm-roster\">\n\n      <div class=\"mgm-search\">\n        <i class=\"material-icons\">search</i>\n        <input type=\"text\" placeholder=\"Search name or region\"\n               [(ngModel)]=\"search\" name=\"mgmSearch\" autocomplete=\"off\">\n        <button class=\"mgm-x\" *ngIf=\"search\" (click)=\"clearSearch()\" aria-label=\"Clear search\">\n          <i class=\"material-icons\">close</i>\n        </button>\n      </div>\n\n      <!-- status filters -->\n      <div class=\"mgm-filters\">\n        <button [class.on]=\"statusFilter === 'all'\" (click)=\"statusFilter = 'all'\">\n          All <u>{{ countFor('all') }}</u>\n        </button>\n        <button [class.on]=\"statusFilter === 'moving'\" (click)=\"statusFilter = 'moving'\">\n          <i class=\"mgm-dot moving\"></i>Moving <u>{{ countFor('moving') }}</u>\n        </button>\n        <button [class.on]=\"statusFilter === 'stopped'\" (click)=\"statusFilter = 'stopped'\">\n          <i class=\"mgm-dot stopped\"></i>Stopped <u>{{ countFor('stopped') }}</u>\n        </button>\n        <button [class.on]=\"statusFilter === 'offline'\" (click)=\"statusFilter = 'offline'\">\n          <i class=\"mgm-dot offline\"></i>Offline <u>{{ countFor('offline') }}</u>\n        </button>\n        <button class=\"alert\" [class.on]=\"statusFilter === 'issues'\" (click)=\"statusFilter = 'issues'\"\n                *ngIf=\"issueCount > 0\">\n          <i class=\"material-icons\">error_outline</i>Issues <u>{{ countFor('issues') }}</u>\n        </button>\n      </div>\n\n      <!-- alerts: was the \"permission issues\" tab -->\n      <div class=\"mgm-alerts\" *ngIf=\"alerts.length > 0\">\n        <button class=\"mgm-alerts-head\" (click)=\"showAlerts = !showAlerts\">\n          <i class=\"material-icons\">notifications_none</i>\n          <span>Needs attention</span>\n          <u>{{ alerts.length }}</u>\n          <i class=\"material-icons caret\">{{ showAlerts ? 'expand_less' : 'expand_more' }}</i>\n        </button>\n\n        <ul *ngIf=\"showAlerts\">\n          <li *ngFor=\"let a of alerts\" [class]=\"a.kind\" (click)=\"select(a.staff)\">\n            <i class=\"material-icons\">{{ a.icon }}</i>\n            <span><b>{{ a.staff.name }}</b><em>{{ a.text }}</em></span>\n          </li>\n        </ul>\n      </div>\n\n      <!-- sort -->\n      <div class=\"mgm-sort\">\n        <span>Sort</span>\n        <button [class.on]=\"sortBy === 'distance'\" (click)=\"sortBy = 'distance'\">Distance</button>\n        <button [class.on]=\"sortBy === 'visits'\" (click)=\"sortBy = 'visits'\">Visits</button>\n        <button [class.on]=\"sortBy === 'name'\" (click)=\"sortBy = 'name'\">Name</button>\n      </div>\n\n      <ul class=\"mgm-list\">\n        <li *ngFor=\"let s of filtered\"\n            [class.on]=\"selected?.id === s.id\"\n            (click)=\"select(s)\">\n\n          <span class=\"mgm-av\" [class]=\"'mgm-av ' + s.status\">{{ initials(s.name) }}</span>\n\n          <span class=\"mgm-who\">\n            <b>{{ s.name }}</b>\n            <em>{{ s.region }} · {{ s.lastPing }}</em>\n          </span>\n\n          <span class=\"mgm-meta\">\n            <i class=\"mgm-dot\" [class]=\"'mgm-dot ' + s.status\"></i>\n            <u>{{ statusLabel(s.status) }}</u>\n            <em *ngIf=\"s.speed > 0\">{{ s.speed }} km/h</em>\n            <s [class]=\"'bat ' + batteryClass(s.battery)\">{{ s.battery }}%</s>\n          </span>\n\n          <span class=\"mgm-mini\">\n            <span class=\"mgm-mini-bar\">\n              <i [style.width.%]=\"visitPct(s)\"></i>\n            </span>\n            <u>{{ s.visits }}/{{ s.target }} visits · {{ s.distance }} km</u>\n          </span>\n        </li>\n\n        <li class=\"mgm-empty\" *ngIf=\"filtered.length === 0\">\n          No staff match this filter.\n        </li>\n      </ul>\n    </aside>\n\n    <!-- ==================================================================\n         Map\n         ================================================================== -->\n    <section class=\"mgm-stage\">\n      <div id=\"mgMapCanvas\" class=\"mgm-canvas\"></div>\n\n      <div class=\"mgm-loading\" *ngIf=\"!mapReady && !mapError\">\n        <span class=\"mgm-spin\"></span> Loading map…\n      </div>\n      <div class=\"mgm-loading err\" *ngIf=\"mapError\">\n        <i class=\"material-icons\">wifi_off</i> {{ mapError }}\n      </div>\n\n      <!-- layer controls -->\n      <div class=\"mgm-tools\" *ngIf=\"mapReady\">\n        <button [class.on]=\"showRoute\" (click)=\"toggleRoute()\" [disabled]=\"view === 'team'\"\n                matTooltip=\"Show route\">\n          <i class=\"material-icons\">timeline</i>\n        </button>\n        <button [class.on]=\"showVisits\" (click)=\"toggleVisits()\" [disabled]=\"view === 'team'\"\n                matTooltip=\"Show visits\">\n          <i class=\"material-icons\">place</i>\n        </button>\n        <button (click)=\"fit()\" matTooltip=\"Fit to view\">\n          <i class=\"material-icons\">center_focus_strong</i>\n        </button>\n      </div>\n\n      <!-- legend -->\n      <div class=\"mgm-legend\" *ngIf=\"mapReady\">\n        <ng-container *ngIf=\"view === 'person'\">\n          <span><i class=\"lg route\"></i>Travelled route</span>\n          <span><i class=\"lg stop\"></i>Visit</span>\n          <span><i class=\"lg pos\"></i>Position</span>\n        </ng-container>\n        <ng-container *ngIf=\"view === 'team'\">\n          <span><i class=\"lg moving\"></i>Moving</span>\n          <span><i class=\"lg stopped\"></i>Stopped</span>\n          <span><i class=\"lg offline\"></i>Offline</span>\n        </ng-container>\n      </div>\n\n      <!-- playback rides on the map instead of living in its own tab -->\n      <div class=\"mgm-play\" *ngIf=\"mapReady && selected && view === 'person'\">\n        <button class=\"mgm-play-btn\" (click)=\"togglePlay()\"\n                [attr.aria-label]=\"playing ? 'Pause' : 'Play'\">\n          <i class=\"material-icons\">{{ playing ? 'pause' : 'play_arrow' }}</i>\n        </button>\n\n        <span class=\"mgm-clock\">{{ playbackTime }}</span>\n\n        <input class=\"mgm-scrub\" type=\"range\" min=\"0\" max=\"100\" step=\"0.1\"\n               [value]=\"progress\" (input)=\"onScrub($event)\" aria-label=\"Scrub route\">\n\n        <span class=\"mgm-km\">{{ playbackKm }} km</span>\n\n        <div class=\"mgm-speeds\">\n          <button *ngFor=\"let s of speeds\" [class.on]=\"speed === s\" (click)=\"setSpeed(s)\">{{ s }}×</button>\n        </div>\n      </div>\n\n      <div class=\"mgm-teamnote\" *ngIf=\"mapReady && view === 'team'\">\n        <i class=\"material-icons\">touch_app</i>\n        Click anyone on the map to open their day\n      </div>\n    </section>\n\n    <!-- ==================================================================\n         Selected person's day\n         ================================================================== -->\n    <aside class=\"mgm-side\" *ngIf=\"selected\">\n\n      <div class=\"mgm-head\">\n        <span class=\"mgm-av lg\" [class]=\"'mgm-av lg ' + selected.status\">{{ initials(selected.name) }}</span>\n        <span class=\"mgm-head-who\">\n          <b>{{ selected.name }}</b>\n          <em>{{ selected.region }}</em>\n        </span>\n        <span class=\"mgm-badge\" [class]=\"'mgm-badge ' + selected.status\">\n          <i class=\"mgm-dot\" [class]=\"'mgm-dot ' + selected.status\"></i>{{ statusLabel(selected.status) }}\n        </span>\n      </div>\n\n      <div class=\"mgm-stats\">\n        <div><u>Distance</u><b>{{ selected.distance }} km</b></div>\n        <div><u>Visits</u><b>{{ selected.visits }}<s>/{{ selected.target }}</s></b></div>\n        <div><u>Active</u><b>{{ selected.activeHrs }}</b></div>\n        <div><u>Idle</u><b>{{ selected.idleHrs }}</b></div>\n      </div>\n\n      <div class=\"mgm-goal\">\n        <span class=\"mgm-goal-top\">\n          <u>Visit target</u><b>{{ visitPct(selected) }}%</b>\n        </span>\n        <span class=\"mgm-goal-bar\"><i [style.width.%]=\"visitPct(selected)\"></i></span>\n      </div>\n\n      <div class=\"mgm-shift\">\n        <span><i class=\"material-icons\">login</i>{{ selected.start }}</span>\n        <i class=\"mgm-shift-rule\"></i>\n        <span><i class=\"material-icons\">logout</i>{{ selected.end }}</span>\n      </div>\n\n      <!-- device health: was three separate tabs -->\n      <div class=\"mgm-panel\">\n        <h4>Device health</h4>\n        <ul class=\"mgm-health\">\n          <li>\n            <i class=\"material-icons\">battery_std</i><span>Battery</span>\n            <b [class]=\"'bat ' + batteryClass(selected.battery)\">{{ selected.battery }}%</b>\n          </li>\n          <li>\n            <i class=\"material-icons\">gps_fixed</i><span>GPS signal</span>\n            <b [class.warn]=\"selected.gps === 'weak'\" [class.bad]=\"selected.gps === 'off'\">\n              {{ gpsLabel(selected.gps) }}\n            </b>\n          </li>\n          <li>\n            <i class=\"material-icons\">location_on</i><span>Location access</span>\n            <b [class.warn]=\"selected.permission === 'while-using'\"\n               [class.bad]=\"selected.permission === 'denied'\">{{ permLabel(selected.permission) }}</b>\n          </li>\n          <li>\n            <i class=\"material-icons\">sync</i><span>Last sync</span>\n            <b>{{ selected.lastPing }}</b>\n          </li>\n        </ul>\n\n        <p class=\"mgm-warn\" *ngIf=\"selected.permission === 'denied' || selected.gps === 'off'\">\n          <i class=\"material-icons\">error_outline</i>\n          Location is switched off on this device, so today's track is incomplete.\n        </p>\n      </div>\n\n      <!-- timeline: was its own tab -->\n      <div class=\"mgm-panel grow\">\n        <h4>Day timeline</h4>\n\n        <ol class=\"mgm-timeline\">\n          <li class=\"tl-edge\">\n            <i class=\"tl-node start\"></i>\n            <span class=\"tl-time\">{{ selected.start }}</span>\n            <span class=\"tl-body\"><b>Day started</b><em>Punch in</em></span>\n          </li>\n\n          <li *ngFor=\"let s of selected.stops; let i = index\" (click)=\"focusStop(s)\">\n            <i class=\"tl-node\">{{ i + 1 }}</i>\n            <span class=\"tl-time\">{{ s.time }}</span>\n            <span class=\"tl-body\">\n              <b>{{ s.name }}</b>\n              <em>{{ s.type }} · {{ s.mins }} min</em>\n            </span>\n            <i class=\"material-icons tl-go\">north_east</i>\n          </li>\n\n          <li class=\"tl-edge\" *ngIf=\"selected.status !== 'offline'\">\n            <i class=\"tl-node end\"></i>\n            <span class=\"tl-time\">{{ selected.end }}</span>\n            <span class=\"tl-body\"><b>Day closed</b><em>Punch out</em></span>\n          </li>\n        </ol>\n      </div>\n    </aside>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/magnus-map/magnus-map.component.scss":
/*!******************************************************!*\
  !*** ./src/app/magnus-map/magnus-map.component.scss ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  --m-surface: var(--surface-card);\n  --m-canvas: var(--grey);\n  --m-hairline: var(--border-light);\n  --m-rule: var(--bodrColor);\n  --m-ink: var(--text);\n  --m-ink-2: var(--text-secondary);\n  --m-ink-3: var(--text-muted);\n  --m-red: var(--primary);\n  --m-red-soft: var(--primary-light);\n  --m-green: var(--success);\n  --m-green-soft: var(--success-light);\n  --m-amber: var(--warning);\n  --m-amber-soft: var(--warning-light);\n  display: block;\n  height: 100%;\n}\n\n:host .main-container {\n  display: flex;\n  flex-direction: column;\n}\n\n:host .tools-container {\n  flex: 0 0 auto;\n  position: relative;\n}\n\n.mgm-chip {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  font-size: 12.5px;\n  color: var(--m-ink-2);\n  background: var(--m-surface);\n  border: 1px solid var(--m-hairline);\n  border-radius: 8px;\n  padding: 6px 11px;\n  white-space: nowrap;\n}\n\n.mgm-chip i.material-icons {\n  font-size: 15px;\n}\n\n.mgm-chip.alert {\n  color: var(--m-red);\n  background: var(--m-red-soft);\n  border-color: transparent;\n}\n\n.mgm-datenav {\n  display: inline-flex;\n  align-items: center;\n  background: var(--m-surface);\n  border: 1px solid var(--m-hairline);\n  border-radius: 8px;\n  overflow: hidden;\n}\n\n.mgm-datenav button {\n  border: 0;\n  background: transparent;\n  width: 30px;\n  height: 34px;\n  cursor: pointer;\n  color: var(--m-ink-2);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: background 0.13s cubic-bezier(0.4, 0, 0.2, 1);\n}\n\n.mgm-datenav button i {\n  font-size: 19px;\n}\n\n.mgm-datenav button:hover:not(:disabled) {\n  background: var(--m-canvas);\n  color: var(--m-ink);\n}\n\n.mgm-datenav button:disabled {\n  opacity: 0.3;\n  cursor: not-allowed;\n}\n\n.mgm-date {\n  padding: 0 10px;\n  text-align: center;\n  line-height: 1.2;\n  min-width: 96px;\n}\n\n.mgm-date b {\n  display: block;\n  font-size: 12.5px;\n  font-weight: 600;\n  color: var(--m-ink);\n  white-space: nowrap;\n}\n\n.mgm-date em {\n  display: block;\n  font-style: normal;\n  font-size: 10.5px;\n  color: var(--m-ink-3);\n}\n\n.mgm-today {\n  height: 34px;\n  padding: 0 12px;\n  border: 1px solid var(--m-hairline);\n  background: var(--m-surface);\n  border-radius: 8px;\n  font-size: 12.5px;\n  font-weight: 500;\n  color: var(--m-ink-2);\n  cursor: pointer;\n  transition: background 0.13s cubic-bezier(0.4, 0, 0.2, 1);\n}\n\n.mgm-today:hover:not(:disabled) {\n  background: var(--m-canvas);\n  color: var(--m-ink);\n}\n\n.mgm-today:disabled {\n  opacity: 0.35;\n  cursor: not-allowed;\n}\n\n.mgm-seg {\n  display: inline-flex;\n  gap: 2px;\n  background: var(--m-canvas);\n  border: 1px solid var(--m-hairline);\n  border-radius: 9px;\n  padding: 2px;\n}\n\n.mgm-seg button {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  border: 0;\n  background: transparent;\n  border-radius: 7px;\n  padding: 6px 11px;\n  font-size: 12.5px;\n  font-weight: 500;\n  color: var(--m-ink-2);\n  cursor: pointer;\n  white-space: nowrap;\n  transition: background 0.13s cubic-bezier(0.4, 0, 0.2, 1), color 0.13s cubic-bezier(0.4, 0, 0.2, 1);\n}\n\n.mgm-seg button i {\n  font-size: 16px;\n}\n\n.mgm-seg button:hover {\n  color: var(--m-ink);\n}\n\n.mgm-seg button.on {\n  background: var(--m-surface);\n  color: var(--m-ink);\n  font-weight: 600;\n  box-shadow: 0 1px 2px rgba(42, 44, 51, 0.08);\n}\n\n.mgm {\n  flex: 1 1 auto;\n  min-height: 0;\n  display: grid;\n  grid-template-columns: 276px minmax(0, 1fr) 330px;\n  gap: 12px;\n  padding: 0 16px 16px 16px;\n  background: var(--m-canvas);\n}\n\n.mgm-roster,\n.mgm-side {\n  background: var(--m-surface);\n  border: 1px solid var(--m-hairline);\n  border-radius: 12px;\n  display: flex;\n  flex-direction: column;\n  min-height: 0;\n  overflow: hidden;\n}\n\n.mgm-search {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  padding: 11px 13px;\n  border-bottom: 1px solid var(--m-hairline);\n  flex: 0 0 auto;\n}\n\n.mgm-search i {\n  font-size: 18px;\n  color: var(--m-ink-3);\n}\n\n.mgm-search input {\n  flex: 1;\n  border: 0;\n  outline: 0;\n  background: transparent;\n  font-size: 13px;\n  color: var(--m-ink);\n  min-width: 0;\n}\n\n.mgm-search input::-moz-placeholder {\n  color: var(--m-ink-3);\n}\n\n.mgm-search input::placeholder {\n  color: var(--m-ink-3);\n}\n\n.mgm-x {\n  border: 0;\n  background: transparent;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  color: var(--m-ink-3);\n  padding: 0;\n}\n\n.mgm-x i {\n  font-size: 16px;\n}\n\n.mgm-x:hover {\n  color: var(--m-ink);\n}\n\n.mgm-filters {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 4px;\n  padding: 9px 10px;\n  border-bottom: 1px solid var(--m-hairline);\n  flex: 0 0 auto;\n}\n\n.mgm-filters button {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  border: 0;\n  background: var(--m-canvas);\n  border-radius: 7px;\n  padding: 5px 8px;\n  font-size: 11.5px;\n  font-weight: 500;\n  color: var(--m-ink-2);\n  cursor: pointer;\n  transition: background 0.13s cubic-bezier(0.4, 0, 0.2, 1), color 0.13s cubic-bezier(0.4, 0, 0.2, 1);\n}\n\n.mgm-filters button i.material-icons {\n  font-size: 13px;\n}\n\n.mgm-filters button u {\n  text-decoration: none;\n  font-weight: 600;\n  color: var(--m-ink-3);\n  font-variant-numeric: tabular-nums;\n}\n\n.mgm-filters button:hover {\n  color: var(--m-ink);\n}\n\n.mgm-filters button.on {\n  background: var(--m-ink);\n  color: #ffffff;\n}\n\n.mgm-filters button.on u {\n  color: rgba(255, 255, 255, 0.7);\n}\n\n.mgm-filters button.on .mgm-dot {\n  box-shadow: 0 0 0 1.5px rgba(255, 255, 255, 0.35);\n}\n\n.mgm-filters button.alert {\n  color: var(--m-red);\n  background: var(--m-red-soft);\n}\n\n.mgm-filters button.alert u {\n  color: var(--m-red);\n}\n\n.mgm-filters button.alert.on {\n  background: var(--m-red);\n  color: #ffffff;\n}\n\n.mgm-filters button.alert.on u {\n  color: rgba(255, 255, 255, 0.8);\n}\n\n.mgm-alerts {\n  border-bottom: 1px solid var(--m-hairline);\n  flex: 0 0 auto;\n}\n\n.mgm-alerts-head {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  width: 100%;\n  border: 0;\n  background: transparent;\n  padding: 10px 12px;\n  cursor: pointer;\n  font-size: 12px;\n  font-weight: 600;\n  color: var(--m-ink-2);\n}\n\n.mgm-alerts-head > i.material-icons {\n  font-size: 16px;\n  color: var(--m-red);\n}\n\n.mgm-alerts-head span {\n  flex: 1;\n  text-align: left;\n}\n\n.mgm-alerts-head u {\n  text-decoration: none;\n  background: var(--m-red-soft);\n  color: var(--m-red);\n  border-radius: 9999px;\n  padding: 1px 7px;\n  font-size: 11px;\n}\n\n.mgm-alerts-head .caret {\n  font-size: 18px;\n  color: var(--m-ink-3);\n}\n\n.mgm-alerts-head:hover {\n  background: var(--m-canvas);\n}\n\n.mgm-alerts ul {\n  list-style: none;\n  padding: 0 6px 8px 6px;\n}\n\n.mgm-alerts ul li {\n  display: flex;\n  align-items: center;\n  gap: 9px;\n  padding: 7px 8px;\n  border-radius: 8px;\n  cursor: pointer;\n  transition: background 0.13s cubic-bezier(0.4, 0, 0.2, 1);\n}\n\n.mgm-alerts ul li:hover {\n  background: var(--m-canvas);\n}\n\n.mgm-alerts ul li > i.material-icons {\n  font-size: 17px;\n  flex-shrink: 0;\n}\n\n.mgm-alerts ul li.bad > i.material-icons {\n  color: var(--m-red);\n}\n\n.mgm-alerts ul li.warn > i.material-icons {\n  color: var(--m-amber);\n}\n\n.mgm-alerts ul li span {\n  min-width: 0;\n}\n\n.mgm-alerts ul li b {\n  display: block;\n  font-size: 12.5px;\n  font-weight: 500;\n  color: var(--m-ink);\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n.mgm-alerts ul li em {\n  display: block;\n  font-style: normal;\n  font-size: 11.5px;\n  color: var(--m-ink-3);\n}\n\n.mgm-sort {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n  padding: 8px 10px;\n  border-bottom: 1px solid var(--m-hairline);\n  flex: 0 0 auto;\n}\n\n.mgm-sort > span {\n  font-size: 11px;\n  color: var(--m-ink-3);\n  margin-right: 2px;\n}\n\n.mgm-sort button {\n  border: 0;\n  background: transparent;\n  border-radius: 6px;\n  padding: 4px 7px;\n  font-size: 11.5px;\n  color: var(--m-ink-3);\n  cursor: pointer;\n  transition: background 0.13s cubic-bezier(0.4, 0, 0.2, 1), color 0.13s cubic-bezier(0.4, 0, 0.2, 1);\n}\n\n.mgm-sort button:hover {\n  background: var(--m-canvas);\n  color: var(--m-ink);\n}\n\n.mgm-sort button.on {\n  background: var(--m-canvas);\n  color: var(--m-ink);\n  font-weight: 600;\n}\n\n.mgm-list {\n  list-style: none;\n  overflow-y: auto;\n  flex: 1 1 auto;\n  min-height: 0;\n  padding: 6px;\n}\n\n.mgm-list > li {\n  display: grid;\n  grid-template-columns: 32px minmax(0, 1fr);\n  grid-template-areas: \"av who\" \"av meta\" \"mini mini\";\n  -moz-column-gap: 10px;\n       column-gap: 10px;\n  align-items: center;\n  padding: 9px 10px;\n  border-radius: 9px;\n  cursor: pointer;\n  transition: background 0.13s cubic-bezier(0.4, 0, 0.2, 1);\n}\n\n.mgm-list > li:hover {\n  background: var(--m-canvas);\n}\n\n.mgm-list > li.on {\n  background: var(--m-red-soft);\n}\n\n.mgm-list > li.on .mgm-who b {\n  color: var(--m-ink);\n}\n\n.mgm-mini {\n  grid-area: mini;\n  margin-top: 8px;\n}\n\n.mgm-mini u {\n  display: block;\n  text-decoration: none;\n  font-size: 11px;\n  color: var(--m-ink-3);\n  margin-top: 4px;\n  font-variant-numeric: tabular-nums;\n}\n\n.mgm-mini-bar {\n  display: block;\n  height: 4px;\n  border-radius: 9999px;\n  background: var(--m-hairline);\n  overflow: hidden;\n}\n\n.mgm-mini-bar i {\n  display: block;\n  height: 100%;\n  border-radius: 9999px;\n  background: var(--m-ink-3);\n  transition: width 0.4s cubic-bezier(0.4, 0, 0.2, 1);\n}\n\nli.on .mgm-mini-bar i {\n  background: var(--m-red);\n}\n\n.mgm-empty {\n  display: block !important;\n  padding: 24px 12px !important;\n  text-align: center;\n  font-size: 13px;\n  color: var(--m-ink-3);\n  cursor: default !important;\n}\n\n.mgm-av {\n  grid-area: av;\n  width: 32px;\n  height: 32px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 11.5px;\n  font-weight: 600;\n  color: var(--m-ink-2);\n  background: var(--m-canvas);\n  box-shadow: 0 0 0 2px var(--m-rule);\n}\n\n.mgm-av.moving {\n  box-shadow: 0 0 0 2px var(--m-green);\n}\n\n.mgm-av.stopped {\n  box-shadow: 0 0 0 2px var(--m-amber);\n}\n\n.mgm-av.offline {\n  box-shadow: 0 0 0 2px var(--m-rule);\n  opacity: 0.6;\n}\n\n.mgm-av.lg {\n  width: 40px;\n  height: 40px;\n  font-size: 13px;\n}\n\n.mgm-who {\n  grid-area: who;\n  min-width: 0;\n}\n\n.mgm-who b {\n  display: block;\n  font-size: 13.5px;\n  font-weight: 500;\n  color: var(--m-ink);\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n.mgm-who em {\n  display: block;\n  font-style: normal;\n  font-size: 11.5px;\n  color: var(--m-ink-3);\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n.mgm-meta {\n  grid-area: meta;\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  margin-top: 3px;\n}\n\n.mgm-meta u {\n  text-decoration: none;\n  font-size: 11.5px;\n  color: var(--m-ink-2);\n}\n\n.mgm-meta em {\n  font-style: normal;\n  font-size: 11px;\n  color: var(--m-ink-3);\n  font-variant-numeric: tabular-nums;\n}\n\n.mgm-meta s {\n  text-decoration: none;\n  margin-left: auto;\n  font-size: 11.5px;\n  font-weight: 600;\n  font-variant-numeric: tabular-nums;\n}\n\n.mgm-dot {\n  width: 7px;\n  height: 7px;\n  border-radius: 50%;\n  background: var(--m-ink-3);\n  flex-shrink: 0;\n}\n\n.mgm-dot.moving, .mgm-dot.live {\n  background: var(--m-green);\n}\n\n.mgm-dot.stopped {\n  background: var(--m-amber);\n}\n\n.mgm-dot.offline {\n  background: var(--m-ink-3);\n}\n\n.bat.ok {\n  color: var(--m-green);\n}\n\n.bat.warn {\n  color: var(--m-amber);\n}\n\n.bat.bad {\n  color: var(--m-red);\n}\n\n.mgm-stage {\n  position: relative;\n  border: 1px solid var(--m-hairline);\n  border-radius: 12px;\n  overflow: hidden;\n  background: var(--m-canvas);\n  min-height: 0;\n}\n\n.mgm-canvas {\n  position: absolute;\n  inset: 0;\n}\n\n.mgm-loading {\n  position: absolute;\n  inset: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  gap: 10px;\n  font-size: 13.5px;\n  color: var(--m-ink-3);\n  background: var(--m-canvas);\n  z-index: 500;\n}\n\n.mgm-loading.err {\n  color: var(--m-red);\n}\n\n.mgm-loading i {\n  font-size: 18px;\n}\n\n.mgm-spin {\n  width: 15px;\n  height: 15px;\n  border: 2px solid var(--m-rule);\n  border-top-color: var(--m-ink-3);\n  border-radius: 50%;\n  animation: mgm-rot 700ms linear infinite;\n}\n\n@keyframes mgm-rot {\n  to {\n    transform: rotate(360deg);\n  }\n}\n\n.mgm-legend {\n  position: absolute;\n  top: 12px;\n  left: 58px;\n  z-index: 600;\n  display: flex;\n  flex-direction: column;\n  gap: 6px;\n  background: var(--m-surface);\n  border: 1px solid var(--m-hairline);\n  border-radius: 9px;\n  padding: 9px 11px;\n}\n\n.mgm-legend span {\n  display: flex;\n  align-items: center;\n  gap: 7px;\n  font-size: 12px;\n  color: var(--m-ink-2);\n  white-space: nowrap;\n}\n\n.mgm-legend .lg {\n  width: 12px;\n  height: 12px;\n  border-radius: 3px;\n  flex-shrink: 0;\n}\n\n.mgm-legend .lg.route {\n  height: 3px;\n  border-radius: 2px;\n  background: var(--m-red);\n}\n\n.mgm-legend .lg.stop {\n  border-radius: 50%;\n  background: var(--m-surface);\n  box-shadow: 0 0 0 2px var(--m-ink);\n}\n\n.mgm-legend .lg.pos {\n  border-radius: 50%;\n  background: var(--m-ink);\n  box-shadow: 0 0 0 2px var(--m-surface), 0 0 0 3px var(--m-rule);\n}\n\n.mgm-legend .lg.moving {\n  border-radius: 50%;\n  background: var(--m-surface);\n  box-shadow: 0 0 0 2px var(--m-green);\n}\n\n.mgm-legend .lg.stopped {\n  border-radius: 50%;\n  background: var(--m-surface);\n  box-shadow: 0 0 0 2px var(--m-amber);\n}\n\n.mgm-legend .lg.offline {\n  border-radius: 50%;\n  background: var(--m-surface);\n  box-shadow: 0 0 0 2px var(--m-ink-3);\n}\n\n.mgm-tools {\n  position: absolute;\n  top: 12px;\n  right: 12px;\n  z-index: 600;\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n  background: var(--m-surface);\n  border: 1px solid var(--m-hairline);\n  border-radius: 9px;\n  padding: 4px;\n}\n\n.mgm-tools button {\n  width: 32px;\n  height: 32px;\n  border: 0;\n  background: transparent;\n  border-radius: 7px;\n  cursor: pointer;\n  color: var(--m-ink-3);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: background 0.13s cubic-bezier(0.4, 0, 0.2, 1), color 0.13s cubic-bezier(0.4, 0, 0.2, 1);\n}\n\n.mgm-tools button i {\n  font-size: 18px;\n}\n\n.mgm-tools button:hover:not(:disabled) {\n  background: var(--m-canvas);\n  color: var(--m-ink);\n}\n\n.mgm-tools button.on {\n  background: var(--m-canvas);\n  color: var(--m-ink);\n}\n\n.mgm-tools button:disabled {\n  opacity: 0.3;\n  cursor: not-allowed;\n}\n\n.mgm-teamnote {\n  position: absolute;\n  left: 50%;\n  bottom: 14px;\n  transform: translateX(-50%);\n  z-index: 600;\n  display: flex;\n  align-items: center;\n  gap: 7px;\n  background: var(--m-surface);\n  border: 1px solid var(--m-hairline);\n  border-radius: 9999px;\n  padding: 7px 14px;\n  font-size: 12.5px;\n  color: var(--m-ink-2);\n  white-space: nowrap;\n  box-shadow: 0 8px 20px -10px rgba(42, 44, 51, 0.3);\n}\n\n.mgm-teamnote i {\n  font-size: 16px;\n  color: var(--m-ink-3);\n}\n\n.mgm-play {\n  position: absolute;\n  left: 12px;\n  right: 12px;\n  bottom: 12px;\n  z-index: 600;\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  background: var(--m-surface);\n  border: 1px solid var(--m-hairline);\n  border-radius: 11px;\n  padding: 9px 12px;\n  box-shadow: 0 10px 26px -12px rgba(42, 44, 51, 0.3);\n}\n\n.mgm-play-btn {\n  width: 34px;\n  height: 34px;\n  flex-shrink: 0;\n  border: 0;\n  border-radius: 9px;\n  background: var(--m-ink);\n  color: #ffffff;\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: background 0.14s cubic-bezier(0.4, 0, 0.2, 1);\n}\n\n.mgm-play-btn i {\n  font-size: 20px;\n  color: #ffffff;\n}\n\n.mgm-play-btn:hover {\n  background: var(--m-red);\n}\n\n.mgm-clock {\n  font-size: 12.5px;\n  font-weight: 600;\n  color: var(--m-ink);\n  font-variant-numeric: tabular-nums;\n  white-space: nowrap;\n  min-width: 68px;\n}\n\n.mgm-km {\n  font-size: 12px;\n  color: var(--m-ink-3);\n  font-variant-numeric: tabular-nums;\n  white-space: nowrap;\n  min-width: 52px;\n  text-align: right;\n}\n\n.mgm-scrub {\n  flex: 1;\n  min-width: 0;\n  -webkit-appearance: none;\n  -moz-appearance: none;\n       appearance: none;\n  height: 4px;\n  border-radius: 9999px;\n  background: var(--m-rule);\n  outline: 0;\n  cursor: pointer;\n}\n\n.mgm-scrub::-webkit-slider-thumb {\n  -webkit-appearance: none;\n  width: 14px;\n  height: 14px;\n  border-radius: 50%;\n  background: var(--m-ink);\n  border: 2px solid var(--m-surface);\n  box-shadow: 0 0 0 1px var(--m-rule);\n}\n\n.mgm-scrub::-moz-range-thumb {\n  width: 12px;\n  height: 12px;\n  border-radius: 50%;\n  background: var(--m-ink);\n  border: 2px solid var(--m-surface);\n}\n\n.mgm-speeds {\n  display: flex;\n  gap: 3px;\n  flex-shrink: 0;\n}\n\n.mgm-speeds button {\n  border: 0;\n  background: transparent;\n  border-radius: 7px;\n  padding: 5px 8px;\n  font-size: 11.5px;\n  font-weight: 600;\n  color: var(--m-ink-3);\n  cursor: pointer;\n  transition: background 0.13s cubic-bezier(0.4, 0, 0.2, 1), color 0.13s cubic-bezier(0.4, 0, 0.2, 1);\n}\n\n.mgm-speeds button:hover {\n  background: var(--m-canvas);\n  color: var(--m-ink);\n}\n\n.mgm-speeds button.on {\n  background: var(--m-ink);\n  color: #ffffff;\n}\n\n.mgm-side {\n  overflow-y: auto;\n}\n\n.mgm-head {\n  display: flex;\n  align-items: center;\n  gap: 11px;\n  padding: 14px;\n  border-bottom: 1px solid var(--m-hairline);\n  flex: 0 0 auto;\n}\n\n.mgm-head-who {\n  min-width: 0;\n  flex: 1;\n}\n\n.mgm-head-who b {\n  display: block;\n  font-size: 14px;\n  font-weight: 600;\n  color: var(--m-ink);\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n.mgm-head-who em {\n  display: block;\n  font-style: normal;\n  font-size: 12px;\n  color: var(--m-ink-3);\n}\n\n.mgm-badge {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  font-size: 11.5px;\n  font-weight: 500;\n  border-radius: 9999px;\n  padding: 3px 9px;\n  background: var(--m-canvas);\n  color: var(--m-ink-2);\n  white-space: nowrap;\n  flex-shrink: 0;\n}\n\n.mgm-goal {\n  padding: 11px 14px;\n  border-bottom: 1px solid var(--m-hairline);\n}\n\n.mgm-goal-top {\n  display: flex;\n  align-items: baseline;\n  justify-content: space-between;\n  margin-bottom: 7px;\n}\n\n.mgm-goal-top u {\n  text-decoration: none;\n  font-size: 11.5px;\n  color: var(--m-ink-3);\n}\n\n.mgm-goal-top b {\n  font-size: 12.5px;\n  font-weight: 600;\n  color: var(--m-ink);\n  font-variant-numeric: tabular-nums;\n}\n\n.mgm-goal-bar {\n  display: block;\n  height: 6px;\n  border-radius: 9999px;\n  background: var(--m-hairline);\n  overflow: hidden;\n}\n\n.mgm-goal-bar i {\n  display: block;\n  height: 100%;\n  border-radius: 9999px;\n  background: var(--m-red);\n  transition: width 0.45s cubic-bezier(0.4, 0, 0.2, 1);\n}\n\n.mgm-stats {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  border-bottom: 1px solid var(--m-hairline);\n}\n\n.mgm-stats div {\n  padding: 12px 14px;\n}\n\n.mgm-stats div:nth-child(odd) {\n  border-right: 1px solid var(--m-hairline);\n}\n\n.mgm-stats div:nth-child(-n+2) {\n  border-bottom: 1px solid var(--m-hairline);\n}\n\n.mgm-stats u {\n  display: block;\n  text-decoration: none;\n  font-size: 11.5px;\n  color: var(--m-ink-3);\n  margin-bottom: 3px;\n}\n\n.mgm-stats b {\n  font-size: 17px;\n  font-weight: 700;\n  letter-spacing: -0.02em;\n  color: var(--m-ink);\n  font-variant-numeric: tabular-nums;\n}\n\n.mgm-stats b s {\n  text-decoration: none;\n  font-size: 12px;\n  font-weight: 500;\n  color: var(--m-ink-3);\n}\n\n.mgm-shift {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  padding: 10px 14px;\n  border-bottom: 1px solid var(--m-hairline);\n}\n\n.mgm-shift span {\n  display: flex;\n  align-items: center;\n  gap: 6px;\n  font-size: 12.5px;\n  color: var(--m-ink-2);\n  font-variant-numeric: tabular-nums;\n}\n\n.mgm-shift span i {\n  font-size: 15px;\n  color: var(--m-ink-3);\n}\n\n.mgm-shift-rule {\n  flex: 1;\n  height: 1px;\n  background: var(--m-hairline);\n}\n\n.mgm-panel {\n  padding: 13px 14px;\n  border-bottom: 1px solid var(--m-hairline);\n}\n\n.mgm-panel.grow {\n  border-bottom: 0;\n}\n\n.mgm-panel h4 {\n  font-size: 11px;\n  font-weight: 600;\n  letter-spacing: 0.06em;\n  text-transform: uppercase;\n  color: var(--m-ink-3);\n  margin-bottom: 10px;\n}\n\n.mgm-health {\n  list-style: none;\n}\n\n.mgm-health li {\n  display: flex;\n  align-items: center;\n  gap: 9px;\n  padding: 6px 0;\n  font-size: 13px;\n  color: var(--m-ink-2);\n}\n\n.mgm-health li i {\n  font-size: 17px;\n  color: var(--m-ink-3);\n  flex-shrink: 0;\n}\n\n.mgm-health li span {\n  flex: 1;\n  min-width: 0;\n}\n\n.mgm-health li b {\n  font-weight: 600;\n  color: var(--m-ink);\n  font-variant-numeric: tabular-nums;\n}\n\n.mgm-health li b.warn {\n  color: var(--m-amber);\n}\n\n.mgm-health li b.bad {\n  color: var(--m-red);\n}\n\n.mgm-warn {\n  display: flex;\n  align-items: flex-start;\n  gap: 7px;\n  margin-top: 9px;\n  padding: 9px 10px;\n  border-radius: 8px;\n  background: var(--m-red-soft);\n  font-size: 12px;\n  line-height: 1.5;\n  color: var(--m-red);\n}\n\n.mgm-warn i {\n  font-size: 15px;\n  flex-shrink: 0;\n  margin-top: 1px;\n}\n\n.mgm-timeline {\n  list-style: none;\n  position: relative;\n  padding-left: 2px;\n}\n\n.mgm-timeline li {\n  position: relative;\n  display: grid;\n  grid-template-columns: 24px 62px minmax(0, 1fr) 16px;\n  align-items: flex-start;\n  gap: 9px;\n  padding: 7px 0;\n  cursor: pointer;\n  border-radius: 8px;\n  transition: background 0.13s cubic-bezier(0.4, 0, 0.2, 1);\n}\n\n.mgm-timeline li:hover {\n  background: var(--m-canvas);\n}\n\n.mgm-timeline li:hover .tl-go {\n  opacity: 1;\n}\n\n.mgm-timeline li.tl-edge {\n  cursor: default;\n}\n\n.mgm-timeline li.tl-edge:hover {\n  background: transparent;\n}\n\n.mgm-timeline li:not(:last-child)::before {\n  content: \"\";\n  position: absolute;\n  left: 11px;\n  top: 29px;\n  bottom: -7px;\n  width: 1px;\n  background: var(--m-hairline);\n}\n\n.tl-node {\n  width: 22px;\n  height: 22px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 10.5px;\n  font-style: normal;\n  font-weight: 600;\n  color: var(--m-ink-2);\n  background: var(--m-surface);\n  box-shadow: 0 0 0 1.5px var(--m-rule);\n  z-index: 1;\n}\n\n.tl-node.start {\n  background: var(--m-green);\n  box-shadow: none;\n}\n\n.tl-node.end {\n  background: var(--m-ink);\n  box-shadow: none;\n}\n\n.tl-time {\n  font-size: 11.5px;\n  color: var(--m-ink-3);\n  font-variant-numeric: tabular-nums;\n  padding-top: 3px;\n  white-space: nowrap;\n}\n\n.tl-body {\n  min-width: 0;\n  padding-top: 1px;\n}\n\n.tl-body b {\n  display: block;\n  font-size: 13px;\n  font-weight: 500;\n  color: var(--m-ink);\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n.tl-body em {\n  display: block;\n  font-style: normal;\n  font-size: 11.5px;\n  color: var(--m-ink-3);\n}\n\n.tl-go {\n  font-size: 14px !important;\n  color: var(--m-ink-3);\n  opacity: 0;\n  align-self: center;\n  transition: opacity 0.13s cubic-bezier(0.4, 0, 0.2, 1);\n}\n\n:host ::ng-deep .mg-pin {\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  border-radius: 50%;\n  background: #ffffff;\n  box-shadow: 0 0 0 2px #2a2c33, 0 2px 6px rgba(42, 44, 51, 0.3);\n}\n\n:host ::ng-deep .mg-pin span {\n  font-family: \"Inter\", sans-serif;\n  font-size: 11px;\n  font-weight: 700;\n  color: #2a2c33;\n  line-height: 1;\n}\n\n:host ::ng-deep .mg-pin.mg-pin-start {\n  background: #4a9772;\n  box-shadow: 0 0 0 2px #ffffff, 0 2px 6px rgba(42, 44, 51, 0.3);\n}\n\n:host ::ng-deep .mg-pin.mg-pin-start span {\n  color: #ffffff;\n}\n\n:host ::ng-deep .mg-pin.mg-pin-end {\n  background: #2a2c33;\n  box-shadow: 0 0 0 2px #ffffff, 0 2px 6px rgba(42, 44, 51, 0.3);\n}\n\n:host ::ng-deep .mg-pin.mg-pin-end span {\n  color: #ffffff;\n}\n\n:host ::ng-deep .mg-pin.mg-pin-live {\n  width: 30px !important;\n  height: 30px !important;\n  margin-left: -2px;\n  margin-top: -2px;\n  cursor: pointer;\n  background: #ffffff;\n}\n\n:host ::ng-deep .mg-pin.mg-pin-live span {\n  font-size: 10.5px;\n  color: #2a2c33;\n}\n\n:host ::ng-deep .mg-pin.mg-pin-live.mg-pin-moving {\n  box-shadow: 0 0 0 3px #4a9772, 0 2px 8px rgba(42, 44, 51, 0.3);\n}\n\n:host ::ng-deep .mg-pin.mg-pin-live.mg-pin-stopped {\n  box-shadow: 0 0 0 3px #b08843, 0 2px 8px rgba(42, 44, 51, 0.3);\n}\n\n:host ::ng-deep .mg-pin.mg-pin-live.mg-pin-offline {\n  box-shadow: 0 0 0 3px #a8abb6, 0 2px 8px rgba(42, 44, 51, 0.25);\n  opacity: 0.75;\n}\n\n:host ::ng-deep .mg-pop {\n  font-family: \"Inter\", sans-serif;\n}\n\n:host ::ng-deep .mg-pop b {\n  display: block;\n  font-size: 13px;\n  color: #2a2c33;\n  margin-bottom: 2px;\n}\n\n:host ::ng-deep .mg-pop span {\n  display: block;\n  font-size: 12px;\n  color: #7d818f;\n}\n\n:host ::ng-deep .leaflet-container {\n  background: var(--m-canvas);\n}\n\n@media only screen and (max-width: 1400px) {\n  .mgm {\n    grid-template-columns: 240px minmax(0, 1fr) 300px;\n  }\n}\n\n@media only screen and (max-width: 1180px) {\n  .mgm {\n    grid-template-columns: 260px minmax(0, 1fr);\n    grid-template-rows: minmax(360px, 1fr) auto;\n    overflow-y: auto;\n  }\n  .mgm-roster {\n    grid-row: 1;\n  }\n  .mgm-stage {\n    grid-row: 1;\n  }\n  .mgm-side {\n    grid-column: 1/-1;\n    grid-row: 2;\n    overflow: visible;\n  }\n}\n\n@media only screen and (max-width: 760px) {\n  .mgm {\n    grid-template-columns: minmax(0, 1fr);\n    grid-template-rows: auto minmax(320px, 60vh) auto;\n    padding: 0 12px 12px 12px;\n  }\n  .mgm-roster {\n    grid-row: 1;\n    max-height: 230px;\n  }\n  .mgm-stage {\n    grid-row: 2;\n  }\n  .mgm-side {\n    grid-row: 3;\n    grid-column: 1;\n  }\n  .mgm-play {\n    flex-wrap: wrap;\n    gap: 8px;\n  }\n  .mgm-scrub {\n    order: 3;\n    flex-basis: 100%;\n  }\n}"

/***/ }),

/***/ "./src/app/magnus-map/magnus-map.component.ts":
/*!****************************************************!*\
  !*** ./src/app/magnus-map/magnus-map.component.ts ***!
  \****************************************************/
/*! exports provided: MagnusMapComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MagnusMapComponent", function() { return MagnusMapComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/core/fesm5/core.js");


var MagnusMapComponent = /** @class */ (function () {
    function MagnusMapComponent(zone) {
        this.zone = zone;
        // --- date ---
        this.dayOffset = 0; // 0 = today, negative = past
        this.dateLabel = '';
        this.relLabel = 'Today';
        // --- roster controls ---
        this.search = '';
        this.statusFilter = 'all';
        this.sortBy = 'distance';
        this.showAlerts = true;
        // --- map mode ---
        this.view = 'person';
        this.showRoute = true;
        this.showVisits = true;
        this.staff = [];
        this.selected = null;
        // --- playback ---
        this.playing = false;
        this.progress = 0;
        this.speed = 1;
        this.speeds = [1, 2, 4];
        this.timer = null;
        // --- leaflet handles ---
        this.map = null;
        this.routeLayer = null;
        this.stopLayer = null;
        this.liveLayer = null;
        this.teamLayer = null;
        this.ghost = null;
        this.mapReady = false;
        this.mapError = '';
    }
    // ==========================================================================
    // Mock data
    // ==========================================================================
    MagnusMapComponent.prototype.ngOnInit = function () {
        this.staff = this.buildStaff();
        this.selected = this.staff[0];
        this.setDateLabels();
    };
    MagnusMapComponent.prototype.buildStaff = function () {
        var _this = this;
        var seeds = [
            { name: 'Rakesh Menon', region: 'Nagpur', home: [21.1458, 79.0882], status: 'moving', battery: 68, gps: 'ok', permission: 'always', lastPing: '14 sec ago', speed: 34 },
            { name: 'Sunita Rawat', region: 'Delhi NCR', home: [28.6139, 77.2090], status: 'stopped', battery: 41, gps: 'ok', permission: 'always', lastPing: '2 min ago', speed: 0 },
            { name: 'Imran Qureshi', region: 'Surat', home: [21.1702, 72.8311], status: 'moving', battery: 83, gps: 'weak', permission: 'while-using', lastPing: '38 sec ago', speed: 21 },
            { name: 'Deepak Sahu', region: 'Indore', home: [22.7196, 75.8577], status: 'stopped', battery: 18, gps: 'ok', permission: 'always', lastPing: '6 min ago', speed: 0 },
            { name: 'Anita Bhattacharya', region: 'Kolkata', home: [22.5726, 88.3639], status: 'offline', battery: 9, gps: 'off', permission: 'denied', lastPing: '1 hr 12 min ago', speed: 0 },
            { name: 'Vikram Shetty', region: 'Bengaluru', home: [12.9716, 77.5946], status: 'moving', battery: 57, gps: 'ok', permission: 'always', lastPing: '51 sec ago', speed: 46 },
            { name: 'Harpreet Gill', region: 'Ludhiana', home: [30.9010, 75.8573], status: 'moving', battery: 74, gps: 'ok', permission: 'always', lastPing: '1 min ago', speed: 28 },
            { name: 'Mohan Iyer', region: 'Coimbatore', home: [11.0168, 76.9558], status: 'stopped', battery: 36, gps: 'ok', permission: 'while-using', lastPing: '9 min ago', speed: 0 }
        ];
        var places = [
            ['Shree Balaji Timber', 'Dealer'],
            ['Kohinoor Ply House', 'Dealer'],
            ['Gupta Hardware', 'Sub dealer'],
            ['Sai Laminates', 'Dealer'],
            ['Metro Wood Traders', 'Sub dealer'],
            ['Anand Plywood Centre', 'Dealer'],
            ['Verma Timber Mart', 'Dealer']
        ];
        return seeds.map(function (s, idx) {
            var nStops = 4 + (idx % 3);
            var route = _this.makeRoute(s.home, nStops, idx);
            var stops = _this.makeStops(route, nStops, places, idx);
            // Distance is measured off the generated polyline, so the figure in the
            // panel always matches the line on the map.
            var km = 0;
            for (var i = 1; i < route.length; i++) {
                km += _this.haversine(route[i - 1], route[i]);
            }
            var visits = s.status === 'offline' ? Math.max(1, nStops - 3) : nStops;
            var live = s.status === 'offline'
                ? route[Math.floor(route.length * 0.35)]
                : route[Math.floor(route.length * (0.55 + (idx % 4) * 0.1))];
            return {
                id: idx + 1,
                name: s.name,
                region: s.region,
                status: s.status,
                lastPing: s.lastPing,
                battery: s.battery,
                gps: s.gps,
                permission: s.permission,
                distance: Math.round(km * 10) / 10,
                visits: visits,
                target: nStops + 1,
                activeHrs: (6 + (idx % 3)) + 'h ' + (10 + idx * 7) % 60 + 'm',
                idleHrs: (1 + (idx % 2)) + 'h ' + (5 + idx * 11) % 60 + 'm',
                start: '09:1' + (idx % 6) + ' AM',
                end: s.status === 'offline' ? '—' : '0' + (5 + (idx % 3)) + ':4' + (idx % 6) + ' PM',
                speed: s.speed,
                home: s.home,
                livePos: live,
                route: route,
                stops: stops.slice(0, visits)
            };
        });
    };
    // A wandering path: legs between stops, each broken into small steps so the
    // polyline bends like a road rather than running straight.
    MagnusMapComponent.prototype.makeRoute = function (home, stops, seed) {
        var pts = [];
        var lat = home[0] + 0.018;
        var lng = home[1] - 0.022;
        pts.push([lat, lng]);
        var r = seed * 97 + 13;
        var rnd = function () { r = (r * 1103515245 + 12345) % 2147483648; return r / 2147483648; };
        for (var s = 0; s < stops; s++) {
            var tLat = home[0] + (rnd() - 0.5) * 0.075;
            var tLng = home[1] + (rnd() - 0.5) * 0.085;
            var legs = 9 + Math.floor(rnd() * 5);
            for (var i = 1; i <= legs; i++) {
                var f = i / legs;
                var wob = (rnd() - 0.5) * 0.004;
                lat = lat + (tLat - lat) * f * 0.85 + wob;
                lng = lng + (tLng - lng) * f * 0.85 + wob;
                pts.push([+lat.toFixed(5), +lng.toFixed(5)]);
            }
            lat = tLat;
            lng = tLng;
            pts.push([+lat.toFixed(5), +lng.toFixed(5)]);
        }
        return pts;
    };
    MagnusMapComponent.prototype.makeStops = function (route, n, places, seed) {
        var out = [];
        var startMin = 9 * 60 + 20;
        var gap = Math.floor(route.length / (n + 1));
        for (var i = 0; i < n; i++) {
            var p = route[Math.min(route.length - 1, gap * (i + 1))];
            var t = startMin + i * 78 + (seed * 7) % 20;
            var dur = 18 + ((seed + i * 13) % 34);
            var pl = places[(seed + i) % places.length];
            out.push({
                time: this.hhmm(t), end: this.hhmm(t + dur),
                name: pl[0], type: pl[1], mins: dur, lat: p[0], lng: p[1]
            });
        }
        return out;
    };
    MagnusMapComponent.prototype.hhmm = function (mins) {
        var h = Math.floor(mins / 60);
        var m = mins % 60;
        var ap = h >= 12 ? 'PM' : 'AM';
        if (h > 12) {
            h -= 12;
        }
        return (h < 10 ? '0' : '') + h + ':' + (m < 10 ? '0' : '') + m + ' ' + ap;
    };
    MagnusMapComponent.prototype.haversine = function (a, b) {
        var R = 6371;
        var dLat = (b[0] - a[0]) * Math.PI / 180;
        var dLng = (b[1] - a[1]) * Math.PI / 180;
        var la1 = a[0] * Math.PI / 180, la2 = b[0] * Math.PI / 180;
        var h = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
            Math.cos(la1) * Math.cos(la2) * Math.sin(dLng / 2) * Math.sin(dLng / 2);
        return 2 * R * Math.asin(Math.sqrt(h));
    };
    // ==========================================================================
    // Date
    // ==========================================================================
    MagnusMapComponent.prototype.setDateLabels = function () {
        var d = new Date();
        d.setDate(d.getDate() + this.dayOffset);
        var m = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
        this.dateLabel = d.getDate() + ' ' + m[d.getMonth()] + ' ' + d.getFullYear();
        this.relLabel = this.dayOffset === 0 ? 'Today'
            : this.dayOffset === -1 ? 'Yesterday'
                : Math.abs(this.dayOffset) + ' days ago';
    };
    MagnusMapComponent.prototype.stepDay = function (delta) {
        if (this.dayOffset + delta > 0) {
            return;
        } // no future days
        this.dayOffset += delta;
        this.setDateLabels();
        this.stop();
        this.progress = 0;
        this.moveGhost(0);
    };
    MagnusMapComponent.prototype.goToday = function () {
        if (this.dayOffset === 0) {
            return;
        }
        this.dayOffset = 0;
        this.setDateLabels();
        this.stop();
        this.progress = 0;
        this.moveGhost(0);
    };
    Object.defineProperty(MagnusMapComponent.prototype, "isToday", {
        get: function () { return this.dayOffset === 0; },
        enumerable: true,
        configurable: true
    });
    // ==========================================================================
    // Derived lists
    // ==========================================================================
    MagnusMapComponent.prototype.hasIssue = function (s) {
        return s.gps !== 'ok' || s.permission !== 'always' || s.battery < 20 || s.status === 'offline';
    };
    Object.defineProperty(MagnusMapComponent.prototype, "filtered", {
        get: function () {
            var _this = this;
            var q = (this.search || '').toLowerCase().trim();
            var list = this.staff.filter(function (s) {
                if (q && s.name.toLowerCase().indexOf(q) === -1 && s.region.toLowerCase().indexOf(q) === -1) {
                    return false;
                }
                if (_this.statusFilter === 'all') {
                    return true;
                }
                if (_this.statusFilter === 'issues') {
                    return _this.hasIssue(s);
                }
                return s.status === _this.statusFilter;
            });
            list = list.slice();
            if (this.sortBy === 'name') {
                list.sort(function (a, b) { return a.name.localeCompare(b.name); });
            }
            if (this.sortBy === 'distance') {
                list.sort(function (a, b) { return b.distance - a.distance; });
            }
            if (this.sortBy === 'visits') {
                list.sort(function (a, b) { return b.visits - a.visits; });
            }
            return list;
        },
        enumerable: true,
        configurable: true
    });
    MagnusMapComponent.prototype.countFor = function (f) {
        var _this = this;
        if (f === 'all') {
            return this.staff.length;
        }
        if (f === 'issues') {
            return this.staff.filter(function (s) { return _this.hasIssue(s); }).length;
        }
        return this.staff.filter(function (s) { return s.status === f; }).length;
    };
    Object.defineProperty(MagnusMapComponent.prototype, "onlineCount", {
        get: function () { return this.staff.filter(function (s) { return s.status !== 'offline'; }).length; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MagnusMapComponent.prototype, "issueCount", {
        get: function () {
            var _this = this;
            return this.staff.filter(function (s) { return _this.hasIssue(s); }).length;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MagnusMapComponent.prototype, "teamDistance", {
        // Team totals, so the header answers "how did the day go" without a report
        get: function () {
            return Math.round(this.staff.reduce(function (a, s) { return a + s.distance; }, 0));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MagnusMapComponent.prototype, "teamVisits", {
        get: function () { return this.staff.reduce(function (a, s) { return a + s.visits; }, 0); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MagnusMapComponent.prototype, "teamTarget", {
        get: function () { return this.staff.reduce(function (a, s) { return a + s.target; }, 0); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MagnusMapComponent.prototype, "teamVisitPct", {
        get: function () { return Math.round((this.teamVisits / this.teamTarget) * 100); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MagnusMapComponent.prototype, "alerts", {
        // Alerts replace the old "permission issues" tab
        get: function () {
            var out = [];
            this.staff.forEach(function (s) {
                if (s.permission === 'denied') {
                    out.push({ staff: s, kind: 'bad', icon: 'location_off', text: 'Location access denied' });
                }
                else if (s.gps === 'off') {
                    out.push({ staff: s, kind: 'bad', icon: 'gps_off', text: 'GPS switched off' });
                }
                else if (s.battery < 20) {
                    out.push({ staff: s, kind: 'bad', icon: 'battery_alert', text: 'Battery at ' + s.battery + '%' });
                }
                else if (s.gps === 'weak') {
                    out.push({ staff: s, kind: 'warn', icon: 'gps_not_fixed', text: 'Weak GPS signal' });
                }
                else if (s.permission === 'while-using') {
                    out.push({ staff: s, kind: 'warn', icon: 'location_searching', text: 'Tracks only while app is open' });
                }
            });
            return out;
        },
        enumerable: true,
        configurable: true
    });
    // ==========================================================================
    // Map
    // ==========================================================================
    MagnusMapComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        // Leaflet is loaded with `defer` in index.html, so it may not be ready on
        // the first tick. Poll briefly rather than assuming.
        var tries = 0;
        var boot = function () {
            if (typeof L !== 'undefined' && L.map) {
                _this.initMap();
            }
            else if (tries++ < 40) {
                setTimeout(boot, 120);
            }
            else {
                _this.zone.run(function () { _this.mapError = 'Map library did not load. Check the network connection.'; });
            }
        };
        setTimeout(boot, 60);
    };
    MagnusMapComponent.prototype.initMap = function () {
        var _this = this;
        try {
            this.map = L.map('mgMapCanvas', {
                zoomControl: true, attributionControl: false, preferCanvas: true
            }).setView(this.selected.home, 12);
            L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
                maxZoom: 19, crossOrigin: true
            }).addTo(this.map);
            this.routeLayer = L.layerGroup().addTo(this.map);
            this.stopLayer = L.layerGroup().addTo(this.map);
            this.liveLayer = L.layerGroup().addTo(this.map);
            this.teamLayer = L.layerGroup().addTo(this.map);
            this.mapReady = true;
            this.draw();
            setTimeout(function () { return _this.map.invalidateSize(); }, 200);
        }
        catch (e) {
            this.zone.run(function () { _this.mapError = 'Map could not be initialised.'; });
        }
    };
    MagnusMapComponent.prototype.clearAll = function () {
        [this.routeLayer, this.stopLayer, this.liveLayer, this.teamLayer]
            .forEach(function (l) { if (l) {
            l.clearLayers();
        } });
    };
    MagnusMapComponent.prototype.draw = function () {
        if (!this.mapReady) {
            return;
        }
        this.clearAll();
        this.view === 'team' ? this.drawTeam() : this.drawPerson();
    };
    // Everyone's current position at once - the old "live users" tab
    MagnusMapComponent.prototype.drawTeam = function () {
        var _this = this;
        var bounds = [];
        this.staff.forEach(function (s) {
            var m = _this.marker(s.livePos, 'live ' + s.status, _this.initials(s.name));
            m.bindPopup('<div class="mg-pop"><b>' + s.name + '</b>' +
                '<span>' + s.region + ' · ' + _this.statusLabel(s.status) + '</span>' +
                '<span>' + s.distance + ' km · ' + s.visits + ' visits · ' + s.battery + '%</span></div>');
            m.on('click', function () { return _this.zone.run(function () { return _this.select(s, false); }); });
            m.addTo(_this.teamLayer);
            bounds.push(s.livePos);
        });
        if (bounds.length) {
            this.map.fitBounds(L.latLngBounds(bounds), { padding: [50, 50] });
        }
    };
    MagnusMapComponent.prototype.drawPerson = function () {
        var _this = this;
        if (!this.selected) {
            return;
        }
        var pts = this.selected.route;
        if (this.showRoute) {
            // Casing under the line keeps it legible over any basemap
            L.polyline(pts, { color: '#ffffff', weight: 7, opacity: 0.9, lineJoin: 'round' }).addTo(this.routeLayer);
            L.polyline(pts, { color: '#dd4d61', weight: 3.5, opacity: 1, lineJoin: 'round' }).addTo(this.routeLayer);
        }
        this.marker(pts[0], 'start', 'A').addTo(this.stopLayer);
        this.marker(pts[pts.length - 1], 'end', 'B').addTo(this.stopLayer);
        if (this.showVisits) {
            this.selected.stops.forEach(function (s, i) {
                var m = _this.marker([s.lat, s.lng], 'stop', String(i + 1));
                m.bindPopup('<div class="mg-pop"><b>' + s.name + '</b>' +
                    '<span>' + s.type + '</span>' +
                    '<span>' + s.time + ' – ' + s.end + ' · ' + s.mins + ' min</span></div>');
                m.addTo(_this.stopLayer);
            });
        }
        this.ghost = L.circleMarker(pts[0], {
            radius: 7, color: '#ffffff', weight: 3, fillColor: '#2a2c33', fillOpacity: 1
        }).addTo(this.liveLayer);
        this.fit();
        this.progress = 0;
    };
    MagnusMapComponent.prototype.marker = function (pos, kind, label) {
        var icon = L.divIcon({
            className: 'mg-pin mg-pin-' + kind.split(' ').join(' mg-pin-'),
            html: '<span>' + label + '</span>',
            iconSize: [26, 26], iconAnchor: [13, 13]
        });
        return L.marker(pos, { icon: icon });
    };
    MagnusMapComponent.prototype.fit = function () {
        if (!this.mapReady) {
            return;
        }
        if (this.view === 'team') {
            this.map.fitBounds(L.latLngBounds(this.staff.map(function (s) { return s.livePos; })), { padding: [50, 50] });
        }
        else if (this.selected) {
            this.map.fitBounds(L.latLngBounds(this.selected.route), { padding: [40, 40] });
        }
    };
    // ==========================================================================
    // Interaction
    // ==========================================================================
    MagnusMapComponent.prototype.setView = function (v) {
        if (this.view === v) {
            return;
        }
        this.stop();
        this.view = v;
        this.draw();
    };
    MagnusMapComponent.prototype.select = function (s, switchView) {
        if (switchView === void 0) { switchView = true; }
        this.stop();
        var same = this.selected && this.selected.id === s.id;
        this.selected = s;
        // Picking someone from the roster or an alert means "show me their day"
        if (switchView && this.view === 'team') {
            this.view = 'person';
        }
        if (!same || this.view === 'person') {
            this.draw();
        }
    };
    MagnusMapComponent.prototype.toggleRoute = function () { this.showRoute = !this.showRoute; if (this.view === 'person') {
        this.draw();
    } };
    MagnusMapComponent.prototype.toggleVisits = function () { this.showVisits = !this.showVisits; if (this.view === 'person') {
        this.draw();
    } };
    MagnusMapComponent.prototype.focusStop = function (s) {
        if (!this.mapReady) {
            return;
        }
        if (this.view === 'team') {
            this.setView('person');
        }
        this.map.setView([s.lat, s.lng], 15, { animate: true });
    };
    MagnusMapComponent.prototype.clearSearch = function () { this.search = ''; };
    // --- playback ---
    MagnusMapComponent.prototype.togglePlay = function () { this.playing ? this.stop() : this.play(); };
    MagnusMapComponent.prototype.play = function () {
        var _this = this;
        if (!this.mapReady || this.view === 'team') {
            return;
        }
        if (this.progress >= 100) {
            this.progress = 0;
        }
        this.playing = true;
        // Run the ticker outside Angular; only what the view needs re-enters.
        this.zone.runOutsideAngular(function () {
            _this.timer = setInterval(function () {
                var p = _this.progress + 0.4 * _this.speed;
                if (p >= 100) {
                    p = 100;
                }
                _this.moveGhost(p);
                _this.zone.run(function () {
                    _this.progress = p;
                    if (p >= 100) {
                        _this.stop();
                    }
                });
            }, 40);
        });
    };
    MagnusMapComponent.prototype.stop = function () {
        this.playing = false;
        if (this.timer) {
            clearInterval(this.timer);
            this.timer = null;
        }
    };
    MagnusMapComponent.prototype.onScrub = function (ev) {
        this.stop();
        this.progress = +ev.target.value;
        this.moveGhost(this.progress);
    };
    MagnusMapComponent.prototype.setSpeed = function (s) { this.speed = s; };
    MagnusMapComponent.prototype.moveGhost = function (p) {
        if (!this.ghost || !this.selected) {
            return;
        }
        var pts = this.selected.route;
        var f = (p / 100) * (pts.length - 1);
        var i = Math.floor(f);
        var t = f - i;
        var a = pts[Math.min(i, pts.length - 1)];
        var b = pts[Math.min(i + 1, pts.length - 1)];
        this.ghost.setLatLng([a[0] + (b[0] - a[0]) * t, a[1] + (b[1] - a[1]) * t]);
    };
    Object.defineProperty(MagnusMapComponent.prototype, "playbackTime", {
        get: function () {
            var startMin = 9 * 60 + 15;
            var endMin = 17 * 60 + 45;
            return this.hhmm(Math.round(startMin + (endMin - startMin) * (this.progress / 100)));
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MagnusMapComponent.prototype, "playbackKm", {
        // Distance covered up to the playback position
        get: function () {
            if (!this.selected) {
                return 0;
            }
            return Math.round(this.selected.distance * (this.progress / 100) * 10) / 10;
        },
        enumerable: true,
        configurable: true
    });
    // ==========================================================================
    // Template helpers
    // ==========================================================================
    MagnusMapComponent.prototype.batteryClass = function (v) { return v < 20 ? 'bad' : v < 45 ? 'warn' : 'ok'; };
    MagnusMapComponent.prototype.gpsLabel = function (g) { return g === 'ok' ? 'Strong' : g === 'weak' ? 'Weak' : 'Off'; };
    MagnusMapComponent.prototype.permLabel = function (p) { return p === 'always' ? 'Always' : p === 'while-using' ? 'While using' : 'Denied'; };
    MagnusMapComponent.prototype.statusLabel = function (s) { return s === 'moving' ? 'Moving' : s === 'stopped' ? 'Stopped' : 'Offline'; };
    MagnusMapComponent.prototype.visitPct = function (s) { return Math.min(100, Math.round((s.visits / s.target) * 100)); };
    MagnusMapComponent.prototype.initials = function (n) {
        var p = n.split(' ');
        return (p[0][0] + (p.length > 1 ? p[p.length - 1][0] : '')).toUpperCase();
    };
    MagnusMapComponent.prototype.ngOnDestroy = function () {
        this.stop();
        if (this.map) {
            this.map.remove();
            this.map = null;
        }
    };
    MagnusMapComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-magnus-map',
            template: __webpack_require__(/*! ./magnus-map.component.html */ "./src/app/magnus-map/magnus-map.component.html"),
            styles: [__webpack_require__(/*! ./magnus-map.component.scss */ "./src/app/magnus-map/magnus-map.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]])
    ], MagnusMapComponent);
    return MagnusMapComponent;
}());



/***/ }),

/***/ "./src/app/magnus-map/magnus-map.module.ts":
/*!*************************************************!*\
  !*** ./src/app/magnus-map/magnus-map.module.ts ***!
  \*************************************************/
/*! exports provided: MagnusMapModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MagnusMapModule", function() { return MagnusMapModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/material */ "./src/app/material.ts");
/* harmony import */ var src_app_auth_component_guard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/auth-component.guard */ "./src/app/auth-component.guard.ts");
/* harmony import */ var _magnus_map_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./magnus-map.component */ "./src/app/magnus-map/magnus-map.component.ts");








var routes = [
    { path: '', component: _magnus_map_component__WEBPACK_IMPORTED_MODULE_7__["MagnusMapComponent"], canActivate: [src_app_auth_component_guard__WEBPACK_IMPORTED_MODULE_6__["AuthComponentGuard"]], data: { expectedRole: ['1'] } }
];
var MagnusMapModule = /** @class */ (function () {
    function MagnusMapModule() {
    }
    MagnusMapModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _magnus_map_component__WEBPACK_IMPORTED_MODULE_7__["MagnusMapComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                src_app_material__WEBPACK_IMPORTED_MODULE_5__["MaterialModule"]
            ]
        })
    ], MagnusMapModule);
    return MagnusMapModule;
}());



/***/ })

}]);