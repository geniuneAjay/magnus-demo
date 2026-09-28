(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["magnus-attendance-magnus-attendance-module"],{

/***/ "./src/app/magnus-attendance/attendance-data.ts":
/*!******************************************************!*\
  !*** ./src/app/magnus-attendance/attendance-data.ts ***!
  \******************************************************/
/*! exports provided: buildAttendance, initials */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "buildAttendance", function() { return buildAttendance; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initials", function() { return initials; });
// ============================================================================
// MAGNUS PLYWOOD - Attendance demo data
//
// Shared by the list and the detail screen so a row and the page it opens
// always agree. Generated here; no HTTP calls anywhere in these screens.
// ============================================================================
var HH = function (mins) {
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
var DUR = function (mins) {
    return Math.floor(mins / 60) + 'h ' + (mins % 60) + 'm';
};
var SEED = [
    // name, code, manager, region, status, attType, transport, startMin, stopMin, km, addr pair
    ['Rakesh Menon', 'MG-0114', 'A. Kulkarni', 'Nagpur', 'present', 'Full Day', 'Two Wheeler', 9 * 60 + 10, 17 * 60 + 40, 16.2,
        'Plot 22, Wardha Road, Nagpur', 'Katol Road, Nagpur', '21.1458', '79.0882', '280 m'],
    ['Sunita Rawat', 'MG-0207', 'P. Chawla', 'Delhi NCR', 'present', 'Full Day', 'Car', 9 * 60 + 5, 18 * 60 + 10, 34.8,
        'Sector 12, Dwarka, New Delhi', 'Rohini Sector 9, New Delhi', '28.6139', '77.2090', '150 m'],
    ['Imran Qureshi', 'MG-0318', 'A. Kulkarni', 'Surat', 'present', 'Field', 'Two Wheeler', 9 * 60 + 25, 17 * 60 + 15, 21.4,
        'Adajan Gam, Surat', 'Varachha Road, Surat', '21.1702', '72.8311', '410 m'],
    ['Deepak Sahu', 'MG-0422', 'P. Chawla', 'Indore', 'present', 'Full Day', 'Two Wheeler', 9 * 60 + 40, 17 * 60 + 50, 18.9,
        'Vijay Nagar, Indore', 'Palasia Square, Indore', '22.7196', '75.8577', '620 m'],
    ['Vikram Shetty', 'MG-0533', 'R. Nair', 'Bengaluru', 'present', 'Full Day', 'Car', 8 * 60 + 55, 18 * 60 + 25, 35.4,
        'Rajajinagar, Bengaluru', 'Indiranagar, Bengaluru', '12.9716', '77.5946', '190 m'],
    ['Harpreet Gill', 'MG-0641', 'P. Chawla', 'Ludhiana', 'present', 'Full Day', 'Two Wheeler', 9 * 60 + 15, 17 * 60 + 35, 24.6,
        'Model Town, Ludhiana', 'Gill Road, Ludhiana', '30.9010', '75.8573', '340 m'],
    ['Mohan Iyer', 'MG-0752', 'R. Nair', 'Coimbatore', 'present', 'Half Day', 'Public Transport', 9 * 60 + 50, 14 * 60 + 20, 11.2,
        'RS Puram, Coimbatore', 'Gandhipuram, Coimbatore', '11.0168', '76.9558', '780 m'],
    ['Anita Bhattacharya', 'MG-0866', 'A. Kulkarni', 'Kolkata', 'present', 'Field', 'Car', 10 * 60 + 5, 16 * 60 + 45, 33.2,
        'Salt Lake Sector 3, Kolkata', 'Behala, Kolkata', '22.5726', '88.3639', '1.2 km'],
    ['Farhan Shaikh', 'MG-0918', 'A. Kulkarni', 'Pune', 'absent', '—', '—', 0, 0, 0, '—', '—', '18.5204', '73.8567', '—'],
    ['Neha Trivedi', 'MG-1024', 'P. Chawla', 'Jaipur', 'leave', 'Casual Leave', '—', 0, 0, 0, '—', '—', '26.9124', '75.7873', '—'],
    ['Sanjay Pillai', 'MG-1137', 'R. Nair', 'Kochi', 'present', 'Full Day', 'Two Wheeler', 9 * 60 + 30, 17 * 60 + 20, 19.7,
        'Kaloor, Kochi', 'Edappally, Kochi', '9.9312', '76.2673', '450 m'],
    ['Ritu Malhotra', 'MG-1248', 'P. Chawla', 'Chandigarh', 'leave', 'Sick Leave', '—', 0, 0, 0, '—', '—', '30.7333', '76.7794', '—']
];
var PLACES = [
    ['Shree Balaji Timber', 'Dealer'],
    ['Kohinoor Ply House', 'Dealer'],
    ['Gupta Hardware', 'Sub dealer'],
    ['Sai Laminates', 'Dealer'],
    ['Metro Wood Traders', 'Sub dealer'],
    ['Anand Plywood Centre', 'Dealer'],
    ['Verma Timber Mart', 'Dealer']
];
var REMARKS = [
    '', '', 'Started late, informed the manager on call.', '',
    'Covered an extra counter on the way back.', '', 'Half day approved by reporting manager.', '',
    'No intimation received.', 'Leave approved on 18 Sep.', '', 'Leave approved on 20 Sep.'
];
// Positional seed rows shift silently if a field is left out: a missing
// transport string turned startMin into the transport, km into an address and
// every derived figure into NaN. The shape is asserted once instead.
var SEED_COLS = 15;
function buildAttendance() {
    SEED.forEach(function (s, i) {
        if (s.length !== SEED_COLS) {
            throw new Error('attendance-data: row ' + i + ' (' + s[0] + ') has ' + s.length +
                ' fields, expected ' + SEED_COLS);
        }
    });
    return SEED.map(function (s, i) {
        var working = s[4] === 'present';
        var startMin = s[7], stopMin = s[8];
        var nStops = working ? 3 + (i % 4) : 0;
        var visits = [];
        for (var v = 0; v < nStops; v++) {
            var inM = startMin + 30 + v * 82 + (i * 5) % 17;
            var dur = 18 + ((i + v * 11) % 36);
            var pl = PLACES[(i + v) % PLACES.length];
            visits.push({
                company: pl[0],
                type: pl[1],
                planned: (v + i) % 3 !== 0,
                verified: (v + i) % 4 !== 0,
                km: v === 0 ? 0 : Math.round((1.6 + ((i + v * 7) % 9) * 0.8) * 10) / 10,
                inTime: HH(inM),
                outTime: HH(inM + dur),
                mins: dur
            });
        }
        var counterMins = visits.reduce(function (a, v) { return a + v.mins; }, 0);
        var totalMins = working ? stopMin - startMin : 0;
        var travelMins = working ? Math.max(30, totalMins - counterMins - 45) : 0;
        // Absences and leave carry different month tallies than a normal day
        var present = working ? 20 - (i % 3) : s[4] === 'leave' ? 17 : 18;
        var leave = s[4] === 'leave' ? 3 : (i % 2);
        var absent = s[4] === 'absent' ? 2 : (i % 2 === 0 ? 0 : 1);
        return {
            id: 'ATT-' + (55210 + i),
            emp: s[0], empCode: s[1], manager: s[2], region: s[3],
            status: s[4], attType: s[5], transport: s[6],
            startMin: startMin, stopMin: stopMin,
            start: working ? HH(startMin) : '—',
            stop: working ? HH(stopMin) : '—',
            workingHrs: working ? DUR(totalMins) : '—',
            travelTime: working ? DUR(travelMins) : '—',
            counterTime: working ? DUR(counterMins) : '—',
            firstCheckin: visits.length ? visits[0].inTime : '—',
            lunchStart: working ? HH(13 * 60 + 10 + (i % 4) * 5) : '—',
            lunchStop: working ? HH(13 * 60 + 45 + (i % 4) * 5) : '—',
            checkins: visits.length,
            km: s[9],
            startAddr: s[10], stopAddr: s[11],
            baseLat: s[12], baseLng: s[13],
            distanceFromBase: s[14],
            startPhoto: working,
            stopPhoto: working && stopMin > 0 && i % 7 !== 3,
            remark: REMARKS[i] || '',
            homeAway: {
                leaveRadius: 200,
                returnRadius: 200,
                leftHome: working ? HH(startMin - 8) : '—',
                returnedHome: working ? HH(stopMin + 22) : '—',
                leaveAddr: s[10],
                returnAddr: s[10],
                awayFor: working ? DUR(totalMins + 30) : '—'
            },
            baseDist: {
                dayStart: working ? s[14] : '—',
                firstCheckin: working ? (1.2 + (i % 5) * 0.7).toFixed(1) + ' km' : '—',
                dayStop: working ? (0.4 + (i % 4) * 0.9).toFixed(1) + ' km' : '—',
                nearer: i % 2 === 0 ? 'day_start' : 'first_checkin'
            },
            visits: visits,
            month: { workingDays: 24, present: present, absent: absent, leave: leave }
        };
    });
}
function initials(n) {
    var p = n.split(' ');
    return (p[0][0] + (p.length > 1 ? p[p.length - 1][0] : '')).toUpperCase();
}


/***/ }),

/***/ "./src/app/magnus-attendance/magnus-attendance-detail.component.html":
/*!***************************************************************************!*\
  !*** ./src/app/magnus-attendance/magnus-attendance-detail.component.html ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-container\" *ngIf=\"rec\">\n\n  <div class=\"tools-container\">\n    <button class=\"mad-back\" (click)=\"back()\" aria-label=\"Back to attendance\">\n      <i class=\"material-icons\">arrow_back</i>\n    </button>\n    <h2>Attendance Detail</h2>\n\n    <div class=\"left-auto df ac flex-gap-10\">\n      <div class=\"mad-nav\">\n        <button (click)=\"step(-1)\" [disabled]=\"idx === 0\" matTooltip=\"Previous employee\">\n          <i class=\"material-icons\">chevron_left</i>\n        </button>\n        <span>{{ idx + 1 }} of {{ all.length }}</span>\n        <button (click)=\"step(1)\" [disabled]=\"idx === all.length - 1\" matTooltip=\"Next employee\">\n          <i class=\"material-icons\">chevron_right</i>\n        </button>\n      </div>\n      <button mat-icon-button matTooltip=\"Open full route\"><i class=\"material-icons\">directions</i></button>\n      <button mat-icon-button matTooltip=\"Export\"><i class=\"material-icons\">file_download</i></button>\n    </div>\n  </div>\n\n  <div class=\"mad\">\n\n    <!-- ==================================================================\n         Left: identity, totals, the day\n         ================================================================== -->\n    <div class=\"mad-main\">\n\n      <!-- who -->\n      <section class=\"mad-card mad-emp\">\n        <span class=\"mad-av\" [class]=\"'mad-av ' + rec.status\">{{ initials(rec.emp) }}</span>\n\n        <div class=\"mad-emp-txt\">\n          <b>{{ rec.emp }}</b>\n          <em>{{ rec.empCode }} · {{ rec.region }} · reports to {{ rec.manager }}</em>\n        </div>\n\n        <span class=\"mad-status\" [class]=\"'mad-status ' + rec.status\">\n          <i class=\"mad-dot\"></i>{{ statusLabel(rec.status) }}\n        </span>\n        <span class=\"mad-type\">{{ rec.attType }}</span>\n\n        <!-- punch photos, which used to sit loose above the stat grid -->\n        <div class=\"mad-shots\">\n          <span class=\"mad-shot\" [class.empty]=\"!rec.startPhoto\">\n            <i class=\"material-icons\">{{ rec.startPhoto ? 'photo_camera' : 'no_photography' }}</i>\n            <u>In</u>\n          </span>\n          <span class=\"mad-shot\" [class.empty]=\"!rec.stopPhoto\">\n            <i class=\"material-icons\">{{ rec.stopPhoto ? 'photo_camera' : 'no_photography' }}</i>\n            <u>Out</u>\n          </span>\n        </div>\n      </section>\n\n      <!-- absent / leave -->\n      <section class=\"mad-card mad-noday\" *ngIf=\"rec.status !== 'present'\">\n        <i class=\"material-icons\">{{ rec.status === 'leave' ? 'event_busy' : 'error_outline' }}</i>\n        <div>\n          <b>{{ rec.status === 'leave' ? rec.attType : 'No attendance marked' }}</b>\n          <em>{{ rec.remark || 'Nothing was recorded for this day.' }}</em>\n        </div>\n      </section>\n\n      <ng-container *ngIf=\"rec.status === 'present'\">\n\n        <!-- totals -->\n        <section class=\"mad-stats\">\n          <article><u>Working hours</u><b>{{ rec.workingHrs }}</b><em>{{ rec.start }} – {{ rec.stop }}</em></article>\n          <article><u>Check-ins</u><b>{{ rec.checkins }}</b><em>{{ plannedCount }} planned · {{ verifiedCount }} verified</em></article>\n          <article><u>Distance</u><b>{{ rec.km }}<s> km</s></b><em>by {{ rec.transport }}</em></article>\n          <article><u>Counter time</u><b>{{ rec.counterTime }}</b><em>across {{ rec.checkins }} visits</em></article>\n          <article><u>Travel time</u><b>{{ rec.travelTime }}</b><em>on the road</em></article>\n          <article><u>First check-in</u><b>{{ rec.firstCheckin }}</b><em>after punch in</em></article>\n        </section>\n\n        <!-- where the day went -->\n        <section class=\"mad-card\">\n          <h4>Where the day went</h4>\n          <span class=\"mad-split\">\n            <i *ngFor=\"let s of split\" [class]=\"'seg ' + s.cls\" [style.width.%]=\"s.pct\"></i>\n          </span>\n          <ul class=\"mad-split-key\">\n            <li *ngFor=\"let s of split\">\n              <i class=\"k\" [class]=\"'k ' + s.cls\"></i>\n              <span>{{ s.label }}</span>\n              <b>{{ dur(s.mins) }}</b>\n              <em>{{ s.pct }}%</em>\n            </li>\n          </ul>\n        </section>\n\n        <!-- the day, in order -->\n        <section class=\"mad-card\">\n          <h4>The day</h4>\n\n          <ol class=\"mad-timeline\">\n            <li *ngFor=\"let s of steps\" [class]=\"'tl ' + s.kind\">\n\n              <!-- distance travelled to reach this stop, on the connector -->\n              <span class=\"mad-leg\" *ngIf=\"s.kind === 'visit' && s.km > 0\">{{ s.km }} km</span>\n\n              <i class=\"mad-node\" [class]=\"'mad-node ' + s.kind\">\n                <ng-container *ngIf=\"s.kind === 'visit'\">{{ s.n }}</ng-container>\n                <i class=\"material-icons\" *ngIf=\"s.kind === 'start'\">login</i>\n                <i class=\"material-icons\" *ngIf=\"s.kind === 'stop'\">logout</i>\n                <i class=\"material-icons\" *ngIf=\"s.kind === 'lunch'\">restaurant</i>\n              </i>\n\n              <span class=\"mad-tl-time\">\n                {{ s.time }}\n                <em *ngIf=\"s.endTime\">{{ s.endTime }}</em>\n              </span>\n\n              <span class=\"mad-tl-body\">\n                <b>{{ s.title }}</b>\n                <span class=\"mad-tl-meta\">\n                  <em *ngIf=\"s.sub\">{{ s.sub }}</em>\n                  <em *ngIf=\"s.mins\" class=\"mins\">{{ s.mins }} min</em>\n                  <u class=\"tag\" *ngIf=\"s.kind === 'visit'\" [class.planned]=\"s.planned\">\n                    {{ s.planned ? 'Planned' : 'Unplanned' }}\n                  </u>\n                  <u class=\"tag ok\" *ngIf=\"s.verified\">\n                    <i class=\"material-icons\">verified</i>Verified\n                  </u>\n                </span>\n              </span>\n            </li>\n          </ol>\n        </section>\n      </ng-container>\n    </div>\n\n    <!-- ==================================================================\n         Right: location readings\n         ================================================================== -->\n    <aside class=\"mad-side\">\n\n      <div class=\"mad-card\">\n        <h4>Punch locations</h4>\n        <ul class=\"mad-locs\">\n          <li>\n            <i class=\"material-icons in\">trip_origin</i>\n            <span><u>Start</u><p>{{ rec.startAddr }}</p></span>\n          </li>\n          <li>\n            <i class=\"material-icons out\">place</i>\n            <span><u>Stop</u><p>{{ rec.stopAddr }}</p></span>\n          </li>\n          <li>\n            <i class=\"material-icons\">straighten</i>\n            <span><u>Distance from base</u><p>{{ rec.distanceFromBase }}</p></span>\n          </li>\n          <li>\n            <i class=\"material-icons\">explore</i>\n            <span><u>Base coordinates</u><p class=\"mono\">{{ rec.baseLat }}, {{ rec.baseLng }}</p></span>\n          </li>\n        </ul>\n      </div>\n\n      <!-- was the \"Home Away Timeline\" card -->\n      <div class=\"mad-card\" *ngIf=\"rec.status === 'present'\">\n        <h4>Home away</h4>\n        <div class=\"mad-away\">\n          <span class=\"mad-away-end\">\n            <u>Left home</u><b>{{ rec.homeAway.leftHome }}</b>\n          </span>\n          <span class=\"mad-away-mid\">\n            <i></i>\n            <em>{{ rec.homeAway.awayFor }} away</em>\n          </span>\n          <span class=\"mad-away-end right\">\n            <u>Back home</u><b>{{ rec.homeAway.returnedHome }}</b>\n          </span>\n        </div>\n        <p class=\"mad-radius\">\n          Leave radius {{ rec.homeAway.leaveRadius }} m · return radius {{ rec.homeAway.returnRadius }} m\n        </p>\n      </div>\n\n      <!-- was the \"Distance from Base\" card -->\n      <div class=\"mad-card\" *ngIf=\"rec.status === 'present'\">\n        <h4>Distance from base</h4>\n        <ul class=\"mad-base\">\n          <li [class.near]=\"rec.baseDist.nearer === 'day_start'\">\n            <span>Day start</span>\n            <b>{{ rec.baseDist.dayStart }}</b>\n            <u *ngIf=\"rec.baseDist.nearer === 'day_start'\">Closest</u>\n          </li>\n          <li [class.near]=\"rec.baseDist.nearer === 'first_checkin'\">\n            <span>First check-in</span>\n            <b>{{ rec.baseDist.firstCheckin }}</b>\n            <u *ngIf=\"rec.baseDist.nearer === 'first_checkin'\">Closest</u>\n          </li>\n          <li>\n            <span>Day stop</span>\n            <b>{{ rec.baseDist.dayStop }}</b>\n          </li>\n        </ul>\n      </div>\n\n      <div class=\"mad-card\" *ngIf=\"rec.remark\">\n        <h4>Remark</h4>\n        <p class=\"mad-remark\">{{ rec.remark }}</p>\n      </div>\n\n      <div class=\"mad-card\">\n        <h4>This month</h4>\n        <span class=\"mad-mbar\">\n          <i class=\"p\" [style.width.%]=\"(rec.month.present / rec.month.workingDays) * 100\"></i>\n          <i class=\"l\" [style.width.%]=\"(rec.month.leave / rec.month.workingDays) * 100\"></i>\n          <i class=\"a\" [style.width.%]=\"(rec.month.absent / rec.month.workingDays) * 100\"></i>\n        </span>\n        <ul class=\"mad-mkeys\">\n          <li><i class=\"k p\"></i><span>Present</span><b>{{ rec.month.present }}</b></li>\n          <li><i class=\"k l\"></i><span>Leave</span><b>{{ rec.month.leave }}</b></li>\n          <li><i class=\"k a\"></i><span>Absent</span><b>{{ rec.month.absent }}</b></li>\n          <li class=\"tot\"><span>Working days</span><b>{{ rec.month.workingDays }}</b></li>\n        </ul>\n      </div>\n    </aside>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/magnus-attendance/magnus-attendance-detail.component.scss":
/*!***************************************************************************!*\
  !*** ./src/app/magnus-attendance/magnus-attendance-detail.component.scss ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  --d-surface: var(--surface-card);\n  --d-canvas: var(--grey);\n  --d-hairline: var(--border-light);\n  --d-rule: var(--bodrColor);\n  --d-ink: var(--text);\n  --d-ink-2: var(--text-secondary);\n  --d-ink-3: var(--text-muted);\n  --d-red: var(--primary);\n  --d-red-soft: var(--primary-light);\n  --d-green: var(--success);\n  --d-green-soft: var(--success-light);\n  --d-amber: var(--warning);\n  --d-amber-soft: var(--warning-light);\n  --d-blue: var(--info);\n  display: block;\n  height: 100%;\n}\n\n:host .main-container {\n  display: flex;\n  flex-direction: column;\n}\n\n:host .tools-container {\n  flex: 0 0 auto;\n  position: relative;\n}\n\n.mad-back {\n  border: 0;\n  background: transparent;\n  cursor: pointer;\n  width: 32px;\n  height: 32px;\n  border-radius: 8px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: var(--d-ink-2);\n  margin-right: 4px;\n  transition: background 0.13s cubic-bezier(0.4, 0, 0.2, 1);\n}\n\n.mad-back i {\n  font-size: 19px;\n}\n\n.mad-back:hover {\n  background: var(--d-canvas);\n  color: var(--d-ink);\n}\n\n.mad-nav {\n  display: inline-flex;\n  align-items: center;\n  background: var(--d-surface);\n  border: 1px solid var(--d-hairline);\n  border-radius: 8px;\n  overflow: hidden;\n}\n\n.mad-nav button {\n  border: 0;\n  background: transparent;\n  width: 30px;\n  height: 32px;\n  cursor: pointer;\n  color: var(--d-ink-2);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: background 0.13s cubic-bezier(0.4, 0, 0.2, 1);\n}\n\n.mad-nav button i {\n  font-size: 19px;\n}\n\n.mad-nav button:hover:not(:disabled) {\n  background: var(--d-canvas);\n  color: var(--d-ink);\n}\n\n.mad-nav button:disabled {\n  opacity: 0.3;\n  cursor: not-allowed;\n}\n\n.mad-nav > span {\n  font-size: 12px;\n  color: var(--d-ink-2);\n  padding: 0 9px;\n  font-variant-numeric: tabular-nums;\n  white-space: nowrap;\n}\n\n.mad {\n  flex: 1 1 auto;\n  min-height: 0;\n  display: grid;\n  grid-template-columns: minmax(0, 1fr) 320px;\n  gap: 12px;\n  padding: 0 16px 16px 16px;\n  background: var(--d-canvas);\n  overflow-y: auto;\n}\n\n.mad-main {\n  min-width: 0;\n}\n\n.mad-side {\n  min-width: 0;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  align-self: start;\n}\n\n.mad-card {\n  background: var(--d-surface);\n  border: 1px solid var(--d-hairline);\n  border-radius: 12px;\n  padding: 15px;\n  margin-bottom: 10px;\n}\n\n.mad-card h4 {\n  font-size: 11px;\n  font-weight: 600;\n  letter-spacing: 0.06em;\n  text-transform: uppercase;\n  color: var(--d-ink-3);\n  margin-bottom: 13px;\n}\n\n.mad-side .mad-card {\n  margin-bottom: 0;\n}\n\n.mad-emp {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  flex-wrap: wrap;\n}\n\n.mad-av {\n  width: 44px;\n  height: 44px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 14px;\n  font-weight: 600;\n  color: var(--d-ink-2);\n  background: var(--d-canvas);\n  box-shadow: 0 0 0 2px var(--d-rule);\n  flex-shrink: 0;\n}\n\n.mad-av.present {\n  box-shadow: 0 0 0 2px var(--d-green);\n}\n\n.mad-av.absent {\n  box-shadow: 0 0 0 2px var(--d-red);\n}\n\n.mad-av.leave {\n  box-shadow: 0 0 0 2px var(--d-amber);\n}\n\n.mad-emp-txt {\n  flex: 1;\n  min-width: 160px;\n}\n\n.mad-emp-txt b {\n  display: block;\n  font-size: 16px;\n  font-weight: 700;\n  letter-spacing: -0.02em;\n  color: var(--d-ink);\n}\n\n.mad-emp-txt em {\n  display: block;\n  font-style: normal;\n  font-size: 12.5px;\n  color: var(--d-ink-3);\n  margin-top: 2px;\n}\n\n.mad-status {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  font-size: 12px;\n  font-weight: 500;\n  border-radius: 7px;\n  padding: 4px 10px;\n  white-space: nowrap;\n  background: var(--d-canvas);\n  color: var(--d-ink-2);\n}\n\n.mad-status .mad-dot {\n  width: 6px;\n  height: 6px;\n  border-radius: 50%;\n  background: currentColor;\n}\n\n.mad-status.present {\n  background: var(--d-green-soft);\n  color: var(--d-green);\n}\n\n.mad-status.absent {\n  background: var(--d-red-soft);\n  color: var(--d-red);\n}\n\n.mad-status.leave {\n  background: var(--d-amber-soft);\n  color: var(--d-amber);\n}\n\n.mad-type {\n  font-size: 12px;\n  color: var(--d-ink-2);\n  background: var(--d-canvas);\n  border-radius: 7px;\n  padding: 4px 10px;\n  white-space: nowrap;\n}\n\n.mad-shots {\n  display: flex;\n  gap: 6px;\n}\n\n.mad-shot {\n  width: 44px;\n  height: 44px;\n  border-radius: 9px;\n  background: var(--d-canvas);\n  border: 1px solid var(--d-rule);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  gap: 1px;\n}\n\n.mad-shot i {\n  font-size: 16px;\n  color: var(--d-ink-2);\n}\n\n.mad-shot u {\n  text-decoration: none;\n  font-size: 9.5px;\n  color: var(--d-ink-3);\n}\n\n.mad-shot.empty {\n  border-style: dashed;\n}\n\n.mad-shot.empty i, .mad-shot.empty u {\n  color: var(--d-ink-3);\n}\n\n.mad-noday {\n  display: flex;\n  align-items: flex-start;\n  gap: 12px;\n}\n\n.mad-noday > i {\n  font-size: 22px;\n  color: var(--d-ink-3);\n}\n\n.mad-noday b {\n  display: block;\n  font-size: 14px;\n  font-weight: 600;\n  color: var(--d-ink);\n  margin-bottom: 3px;\n}\n\n.mad-noday em {\n  font-style: normal;\n  font-size: 13px;\n  color: var(--d-ink-2);\n  line-height: 1.5;\n}\n\n.mad-stats {\n  display: grid;\n  grid-template-columns: repeat(3, minmax(0, 1fr));\n  gap: 10px;\n  margin-bottom: 10px;\n}\n\n.mad-stats article {\n  background: var(--d-surface);\n  border: 1px solid var(--d-hairline);\n  border-radius: 11px;\n  padding: 12px 13px;\n  min-width: 0;\n}\n\n.mad-stats article u {\n  display: block;\n  text-decoration: none;\n  font-size: 11.5px;\n  color: var(--d-ink-2);\n  margin-bottom: 5px;\n}\n\n.mad-stats article b {\n  display: block;\n  font-size: 20px;\n  font-weight: 700;\n  letter-spacing: -0.03em;\n  color: var(--d-ink);\n  font-variant-numeric: tabular-nums;\n  line-height: 1.2;\n}\n\n.mad-stats article b s {\n  text-decoration: none;\n  font-size: 12.5px;\n  font-weight: 500;\n  color: var(--d-ink-3);\n}\n\n.mad-stats article em {\n  display: block;\n  font-style: normal;\n  font-size: 11px;\n  color: var(--d-ink-3);\n  margin-top: 4px;\n}\n\n.mad-split {\n  display: flex;\n  height: 12px;\n  border-radius: 7px;\n  overflow: hidden;\n  background: var(--d-hairline);\n  margin-bottom: 13px;\n}\n\n.mad-split .seg {\n  display: block;\n  height: 100%;\n}\n\n.mad-split .counter {\n  background: var(--d-ink);\n}\n\n.mad-split .travel {\n  background: var(--d-blue);\n}\n\n.mad-split .lunch {\n  background: var(--d-amber);\n}\n\n.mad-split-key {\n  list-style: none;\n}\n\n.mad-split-key li {\n  display: flex;\n  align-items: center;\n  gap: 9px;\n  padding: 6px 0;\n  font-size: 13px;\n  color: var(--d-ink-2);\n}\n\n.mad-split-key li + li {\n  border-top: 1px solid var(--d-hairline);\n}\n\n.mad-split-key li span {\n  flex: 1;\n}\n\n.mad-split-key li b {\n  font-weight: 600;\n  color: var(--d-ink);\n  font-variant-numeric: tabular-nums;\n}\n\n.mad-split-key li em {\n  font-style: normal;\n  font-size: 12px;\n  color: var(--d-ink-3);\n  width: 38px;\n  text-align: right;\n  font-variant-numeric: tabular-nums;\n}\n\n.k {\n  width: 9px;\n  height: 9px;\n  border-radius: 3px;\n  flex-shrink: 0;\n  display: inline-block;\n}\n\n.k.counter {\n  background: var(--d-ink);\n}\n\n.k.travel {\n  background: var(--d-blue);\n}\n\n.k.lunch {\n  background: var(--d-amber);\n}\n\n.k.p {\n  background: var(--d-green);\n}\n\n.k.l {\n  background: var(--d-amber);\n}\n\n.k.a {\n  background: var(--d-red);\n}\n\n.mad-timeline {\n  list-style: none;\n  position: relative;\n}\n\n.mad-timeline li {\n  position: relative;\n  display: grid;\n  grid-template-columns: 26px 70px minmax(0, 1fr);\n  gap: 11px;\n  align-items: flex-start;\n  padding: 9px 0;\n}\n\n.mad-timeline li:not(:last-child)::before {\n  content: \"\";\n  position: absolute;\n  left: 12px;\n  top: 33px;\n  bottom: -9px;\n  width: 1px;\n  background: var(--d-hairline);\n}\n\n.mad-leg {\n  position: absolute;\n  left: 30px;\n  top: -3px;\n  font-size: 10.5px;\n  font-weight: 500;\n  color: var(--d-ink-3);\n  background: var(--d-surface);\n  border: 1px solid var(--d-hairline);\n  border-radius: 9999px;\n  padding: 1px 7px;\n  font-variant-numeric: tabular-nums;\n}\n\n.mad-node {\n  width: 25px;\n  height: 25px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 11px;\n  font-weight: 600;\n  font-style: normal;\n  color: var(--d-ink-2);\n  background: var(--d-surface);\n  box-shadow: 0 0 0 1.5px var(--d-rule);\n  z-index: 1;\n}\n\n.mad-node i.material-icons {\n  font-size: 14px;\n}\n\n.mad-node.start {\n  background: var(--d-green);\n  color: #ffffff;\n  box-shadow: none;\n}\n\n.mad-node.stop {\n  background: var(--d-ink);\n  color: #ffffff;\n  box-shadow: none;\n}\n\n.mad-node.lunch {\n  background: var(--d-amber-soft);\n  color: var(--d-amber);\n  box-shadow: none;\n}\n\n.mad-tl-time {\n  font-size: 12px;\n  color: var(--d-ink-2);\n  font-variant-numeric: tabular-nums;\n  padding-top: 4px;\n  white-space: nowrap;\n}\n\n.mad-tl-time em {\n  display: block;\n  font-style: normal;\n  font-size: 11px;\n  color: var(--d-ink-3);\n}\n\n.mad-tl-body {\n  min-width: 0;\n  padding-top: 2px;\n}\n\n.mad-tl-body b {\n  display: block;\n  font-size: 13.5px;\n  font-weight: 600;\n  color: var(--d-ink);\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n.mad-tl-meta {\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 7px;\n  margin-top: 3px;\n}\n\n.mad-tl-meta em {\n  font-style: normal;\n  font-size: 12px;\n  color: var(--d-ink-3);\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n.mad-tl-meta em.mins {\n  font-variant-numeric: tabular-nums;\n}\n\n.mad-tl-meta .tag {\n  display: inline-flex;\n  align-items: center;\n  gap: 3px;\n  text-decoration: none;\n  font-size: 10.5px;\n  font-weight: 500;\n  border-radius: 5px;\n  padding: 2px 7px;\n  background: var(--d-canvas);\n  color: var(--d-ink-3);\n  white-space: nowrap;\n}\n\n.mad-tl-meta .tag i {\n  font-size: 12px;\n}\n\n.mad-tl-meta .tag.planned {\n  color: var(--d-ink-2);\n}\n\n.mad-tl-meta .tag.ok {\n  background: var(--d-green-soft);\n  color: var(--d-green);\n}\n\n.mad-locs {\n  list-style: none;\n}\n\n.mad-locs li {\n  display: flex;\n  align-items: flex-start;\n  gap: 9px;\n  padding: 8px 0;\n}\n\n.mad-locs li + li {\n  border-top: 1px solid var(--d-hairline);\n}\n\n.mad-locs li > i {\n  font-size: 16px;\n  color: var(--d-ink-3);\n  flex-shrink: 0;\n  margin-top: 1px;\n}\n\n.mad-locs li > i.in {\n  color: var(--d-green);\n}\n\n.mad-locs li > i.out {\n  color: var(--d-red);\n}\n\n.mad-locs li span {\n  min-width: 0;\n}\n\n.mad-locs li u {\n  display: block;\n  text-decoration: none;\n  font-size: 11px;\n  color: var(--d-ink-3);\n  margin-bottom: 2px;\n}\n\n.mad-locs li p {\n  font-size: 12.5px;\n  color: var(--d-ink);\n  line-height: 1.45;\n}\n\n.mad-locs li p.mono {\n  font-variant-numeric: tabular-nums;\n}\n\n.mad-away {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n\n.mad-away-end {\n  min-width: 0;\n}\n\n.mad-away-end u {\n  display: block;\n  text-decoration: none;\n  font-size: 11px;\n  color: var(--d-ink-3);\n  margin-bottom: 2px;\n}\n\n.mad-away-end b {\n  font-size: 13px;\n  font-weight: 600;\n  color: var(--d-ink);\n  font-variant-numeric: tabular-nums;\n  white-space: nowrap;\n}\n\n.mad-away-end.right {\n  text-align: right;\n}\n\n.mad-away-mid {\n  flex: 1;\n  min-width: 0;\n  text-align: center;\n}\n\n.mad-away-mid i {\n  display: block;\n  height: 1px;\n  background: var(--d-rule);\n  margin-bottom: 4px;\n}\n\n.mad-away-mid em {\n  font-style: normal;\n  font-size: 11px;\n  color: var(--d-ink-3);\n  white-space: nowrap;\n}\n\n.mad-radius {\n  font-size: 11px;\n  color: var(--d-ink-3);\n  margin-top: 11px;\n  padding-top: 9px;\n  border-top: 1px solid var(--d-hairline);\n}\n\n.mad-base {\n  list-style: none;\n}\n\n.mad-base li {\n  display: flex;\n  align-items: center;\n  gap: 9px;\n  padding: 8px 0;\n  font-size: 13px;\n  color: var(--d-ink-2);\n}\n\n.mad-base li + li {\n  border-top: 1px solid var(--d-hairline);\n}\n\n.mad-base li span {\n  flex: 1;\n}\n\n.mad-base li b {\n  font-weight: 600;\n  color: var(--d-ink);\n  font-variant-numeric: tabular-nums;\n}\n\n.mad-base li u {\n  text-decoration: none;\n  font-size: 10.5px;\n  font-weight: 500;\n  background: var(--d-green-soft);\n  color: var(--d-green);\n  border-radius: 5px;\n  padding: 2px 7px;\n  white-space: nowrap;\n}\n\n.mad-base li.near b {\n  color: var(--d-green);\n}\n\n.mad-remark {\n  font-size: 13px;\n  line-height: 1.55;\n  color: var(--d-ink-2);\n  border-left: 2px solid var(--d-rule);\n  padding-left: 11px;\n}\n\n.mad-mbar {\n  display: flex;\n  height: 10px;\n  border-radius: 6px;\n  overflow: hidden;\n  background: var(--d-hairline);\n  margin-bottom: 11px;\n}\n\n.mad-mbar i {\n  display: block;\n  height: 100%;\n}\n\n.mad-mbar .p {\n  background: var(--d-green);\n}\n\n.mad-mbar .l {\n  background: var(--d-amber);\n}\n\n.mad-mbar .a {\n  background: var(--d-red);\n}\n\n.mad-mkeys {\n  list-style: none;\n}\n\n.mad-mkeys li {\n  display: flex;\n  align-items: center;\n  gap: 9px;\n  padding: 6px 0;\n  font-size: 13px;\n  color: var(--d-ink-2);\n}\n\n.mad-mkeys li + li {\n  border-top: 1px solid var(--d-hairline);\n}\n\n.mad-mkeys li span {\n  flex: 1;\n}\n\n.mad-mkeys li b {\n  font-weight: 600;\n  color: var(--d-ink);\n  font-variant-numeric: tabular-nums;\n}\n\n.mad-mkeys li.tot {\n  color: var(--d-ink-3);\n}\n\n@media only screen and (max-width: 1180px) {\n  .mad {\n    grid-template-columns: minmax(0, 1fr);\n  }\n}\n\n@media only screen and (max-width: 760px) {\n  .mad {\n    padding: 0 12px 12px 12px;\n  }\n  .mad-stats {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n  .mad-emp {\n    gap: 10px;\n  }\n  .mad-shots {\n    width: 100%;\n  }\n  .mad-timeline li {\n    grid-template-columns: 26px 62px minmax(0, 1fr);\n    gap: 9px;\n  }\n}"

/***/ }),

/***/ "./src/app/magnus-attendance/magnus-attendance-detail.component.ts":
/*!*************************************************************************!*\
  !*** ./src/app/magnus-attendance/magnus-attendance-detail.component.ts ***!
  \*************************************************************************/
/*! exports provided: MagnusAttendanceDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MagnusAttendanceDetailComponent", function() { return MagnusAttendanceDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _attendance_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./attendance-data */ "./src/app/magnus-attendance/attendance-data.ts");




var MagnusAttendanceDetailComponent = /** @class */ (function () {
    function MagnusAttendanceDetailComponent(route, router) {
        this.route = route;
        this.router = router;
        this.rec = null;
        this.all = [];
        this.steps = [];
        this.notFound = false;
        // ==========================================================================
        // Template helpers
        // ==========================================================================
        this.initials = _attendance_data__WEBPACK_IMPORTED_MODULE_3__["initials"];
    }
    MagnusAttendanceDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.all = Object(_attendance_data__WEBPACK_IMPORTED_MODULE_3__["buildAttendance"])();
        this.route.paramMap.subscribe(function (p) {
            var id = p.get('id');
            var found = _this.all.filter(function (r) { return r.id === id; });
            _this.rec = found.length ? found[0] : _this.all[0];
            _this.notFound = !found.length && !!id;
            _this.buildSteps();
        });
    };
    // ==========================================================================
    // The day, in order
    // ==========================================================================
    MagnusAttendanceDetailComponent.prototype.buildSteps = function () {
        var _this = this;
        this.steps = [];
        if (!this.rec || this.rec.status !== 'present') {
            return;
        }
        this.steps.push({
            kind: 'start',
            time: this.rec.start,
            title: 'Day started',
            sub: this.rec.startAddr
        });
        this.rec.visits.forEach(function (v, i) {
            _this.steps.push({
                kind: 'visit',
                n: i + 1,
                time: v.inTime,
                endTime: v.outTime,
                title: v.company,
                sub: v.type,
                km: v.km,
                mins: v.mins,
                planned: v.planned,
                verified: v.verified
            });
        });
        // Lunch slots in where it actually falls in the day
        var lunch = {
            kind: 'lunch',
            time: this.rec.lunchStart,
            endTime: this.rec.lunchStop,
            title: 'Lunch break',
            sub: ''
        };
        var at = this.steps.length;
        for (var i = 1; i < this.steps.length; i++) {
            if (this.toMin(this.steps[i].time) > this.toMin(lunch.time)) {
                at = i;
                break;
            }
        }
        this.steps.splice(at, 0, lunch);
        this.steps.push({
            kind: 'stop',
            time: this.rec.stop,
            title: 'Day closed',
            sub: this.rec.stopAddr
        });
    };
    MagnusAttendanceDetailComponent.prototype.toMin = function (t) {
        if (!t || t === '—') {
            return 0;
        }
        var m = t.match(/(\d+):(\d+)\s*(AM|PM)/i);
        if (!m) {
            return 0;
        }
        var h = +m[1];
        var mm = +m[2];
        var ap = m[3].toUpperCase();
        if (ap === 'PM' && h !== 12) {
            h += 12;
        }
        if (ap === 'AM' && h === 12) {
            h = 0;
        }
        return h * 60 + mm;
    };
    Object.defineProperty(MagnusAttendanceDetailComponent.prototype, "idx", {
        // ==========================================================================
        // Navigation between people, so the page is browsable
        // ==========================================================================
        get: function () {
            for (var i = 0; i < this.all.length; i++) {
                if (this.all[i].id === this.rec.id) {
                    return i;
                }
            }
            return 0;
        },
        enumerable: true,
        configurable: true
    });
    MagnusAttendanceDetailComponent.prototype.step = function (d) {
        var n = this.idx + d;
        if (n < 0 || n > this.all.length - 1) {
            return;
        }
        this.router.navigate(['/attendance/detail', this.all[n].id]);
    };
    MagnusAttendanceDetailComponent.prototype.back = function () { this.router.navigate(['/attendance']); };
    MagnusAttendanceDetailComponent.prototype.statusLabel = function (s) {
        return s === 'present' ? 'Present' : s === 'absent' ? 'Absent'
            : s === 'leave' ? 'Leave' : 'Holiday';
    };
    MagnusAttendanceDetailComponent.prototype.nearerLabel = function (n) {
        return n === 'day_start' ? 'Day start' : 'First check-in';
    };
    Object.defineProperty(MagnusAttendanceDetailComponent.prototype, "totalVisitMins", {
        get: function () {
            return this.rec ? this.rec.visits.reduce(function (a, v) { return a + v.mins; }, 0) : 0;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MagnusAttendanceDetailComponent.prototype, "split", {
        // Where the working day actually went
        get: function () {
            if (!this.rec || this.rec.status !== 'present') {
                return [];
            }
            var total = this.rec.stopMin - this.rec.startMin;
            var counter = this.totalVisitMins;
            var lunch = 35;
            var travel = Math.max(0, total - counter - lunch);
            var mk = function (label, mins, cls) {
                return ({ label: label, mins: mins, pct: Math.round((mins / total) * 100), cls: cls });
            };
            return [
                mk('At counters', counter, 'counter'),
                mk('Travelling', travel, 'travel'),
                mk('Lunch', lunch, 'lunch')
            ];
        },
        enumerable: true,
        configurable: true
    });
    MagnusAttendanceDetailComponent.prototype.dur = function (m) {
        return m >= 60 ? Math.floor(m / 60) + 'h ' + (m % 60) + 'm' : m + 'm';
    };
    Object.defineProperty(MagnusAttendanceDetailComponent.prototype, "plannedCount", {
        get: function () {
            return this.rec ? this.rec.visits.filter(function (v) { return v.planned; }).length : 0;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MagnusAttendanceDetailComponent.prototype, "verifiedCount", {
        get: function () {
            return this.rec ? this.rec.visits.filter(function (v) { return v.verified; }).length : 0;
        },
        enumerable: true,
        configurable: true
    });
    MagnusAttendanceDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-magnus-attendance-detail',
            template: __webpack_require__(/*! ./magnus-attendance-detail.component.html */ "./src/app/magnus-attendance/magnus-attendance-detail.component.html"),
            styles: [__webpack_require__(/*! ./magnus-attendance-detail.component.scss */ "./src/app/magnus-attendance/magnus-attendance-detail.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], MagnusAttendanceDetailComponent);
    return MagnusAttendanceDetailComponent;
}());



/***/ }),

/***/ "./src/app/magnus-attendance/magnus-attendance.component.html":
/*!********************************************************************!*\
  !*** ./src/app/magnus-attendance/magnus-attendance.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-container\">\n\n  <div class=\"tools-container\">\n    <h2>Attendance</h2>\n\n    <div class=\"left-auto df ac flex-gap-10\">\n      <div class=\"mga-datenav\" *ngIf=\"period === 'today'\">\n        <button (click)=\"stepDay(-1)\" matTooltip=\"Previous day\" aria-label=\"Previous day\">\n          <i class=\"material-icons\">chevron_left</i>\n        </button>\n        <span class=\"mga-date\"><b>{{ dateLabel }}</b><em>{{ relLabel }}</em></span>\n        <button (click)=\"stepDay(1)\" [disabled]=\"isToday\" matTooltip=\"Next day\" aria-label=\"Next day\">\n          <i class=\"material-icons\">chevron_right</i>\n        </button>\n      </div>\n\n      <span class=\"mga-chip\" *ngIf=\"period === 'month'\">{{ dateLabel }}</span>\n\n      <div class=\"mga-seg\">\n        <button [class.on]=\"period === 'today'\" (click)=\"setPeriod('today')\">Today</button>\n        <button [class.on]=\"period === 'month'\" (click)=\"setPeriod('month')\">Month</button>\n      </div>\n\n      <button mat-icon-button matTooltip=\"Export\"><i class=\"material-icons\">file_download</i></button>\n      <button mat-icon-button matTooltip=\"Refresh\"><i class=\"material-icons\">refresh</i></button>\n    </div>\n  </div>\n\n  <div class=\"mga\">\n    <div class=\"mga-main\">\n\n      <!-- ================================================================\n           Day at a glance\n           ================================================================ -->\n      <section class=\"mga-kpis\">\n        <article>\n          <u>Present</u>\n          <b>{{ presentCount }}<s>/{{ total }}</s></b>\n          <span class=\"mga-meter\"><i [style.width.%]=\"presentPct\"></i></span>\n          <em>{{ presentPct }}% of the team</em>\n        </article>\n        <article [class.flag]=\"absentCount > 0\">\n          <u>Absent</u><b>{{ absentCount }}</b><em>no attendance marked</em>\n        </article>\n        <article>\n          <u>On leave</u><b>{{ leaveCount }}</b><em>approved leave</em>\n        </article>\n        <article [class.warn]=\"lateCount > 0\">\n          <u>Late starts</u><b>{{ lateCount }}</b><em>started after 9:30 AM</em>\n        </article>\n        <article>\n          <u>Avg hours</u><b>{{ avgHours }}</b><em>{{ totalCheckins }} check-ins · {{ totalKm }} km</em>\n        </article>\n      </section>\n\n      <!-- search + filters -->\n      <section class=\"mga-bar\">\n        <div class=\"mga-search\">\n          <i class=\"material-icons\">search</i>\n          <input type=\"text\" placeholder=\"Search name, code, region or manager\"\n                 [(ngModel)]=\"search\" name=\"mgaSearch\" autocomplete=\"off\">\n          <button class=\"mga-x\" *ngIf=\"search\" (click)=\"clearSearch()\" aria-label=\"Clear\">\n            <i class=\"material-icons\">close</i>\n          </button>\n        </div>\n\n        <div class=\"mga-filters\">\n          <button [class.on]=\"filter === 'all'\" (click)=\"filter = 'all'\">All <u>{{ countFor('all') }}</u></button>\n          <button [class.on]=\"filter === 'present'\" (click)=\"filter = 'present'\">Present <u>{{ countFor('present') }}</u></button>\n          <button [class.on]=\"filter === 'absent'\" (click)=\"filter = 'absent'\">Absent <u>{{ countFor('absent') }}</u></button>\n          <button [class.on]=\"filter === 'leave'\" (click)=\"filter = 'leave'\">Leave <u>{{ countFor('leave') }}</u></button>\n          <button class=\"warn\" [class.on]=\"filter === 'late'\" (click)=\"filter = 'late'\" *ngIf=\"countFor('late') > 0\">\n            <i class=\"material-icons\">schedule</i>Late <u>{{ countFor('late') }}</u>\n          </button>\n        </div>\n\n        <div class=\"mga-sort\">\n          <span>Sort</span>\n          <button [class.on]=\"sortBy === 'start'\" (click)=\"sortBy = 'start'\">Start</button>\n          <button [class.on]=\"sortBy === 'hours'\" (click)=\"sortBy = 'hours'\">Hours</button>\n          <button [class.on]=\"sortBy === 'checkins'\" (click)=\"sortBy = 'checkins'\">Check-ins</button>\n          <button [class.on]=\"sortBy === 'name'\" (click)=\"sortBy = 'name'\">Name</button>\n        </div>\n      </section>\n\n      <!-- ================================================================\n           TODAY - one row per person, drawn as their day\n           ================================================================ -->\n      <section class=\"mga-feed\" *ngIf=\"period === 'today'\">\n\n        <!-- shared time axis for every bar below -->\n        <div class=\"mga-axis\">\n          <span class=\"mga-axis-pad\"></span>\n          <span class=\"mga-axis-track\">\n            <i *ngFor=\"let t of axisTicks\" [style.left.%]=\"t.pct\">{{ t.label }}</i>\n          </span>\n        </div>\n\n        <article class=\"mga-row\" *ngFor=\"let r of list\"\n                 [class.off]=\"r.status !== 'present'\"\n                 (click)=\"open(r)\">\n\n          <!-- who -->\n          <div class=\"mga-who\">\n            <span class=\"mga-av\" [class]=\"'mga-av ' + r.status\">\n              {{ initials(r.emp) }}\n              <i class=\"material-icons mga-cam\" *ngIf=\"r.startPhoto\">photo_camera</i>\n            </span>\n            <span class=\"mga-who-txt\">\n              <b>{{ r.emp }}</b>\n              <em>{{ r.empCode }} · {{ r.region }}</em>\n            </span>\n          </div>\n\n          <!-- the day -->\n          <div class=\"mga-day\">\n            <div class=\"mga-track\">\n              <i class=\"mga-daybar\" *ngIf=\"r.status === 'present'\"\n                 [style.left.%]=\"barLeft(r)\" [style.width.%]=\"barWidth(r)\"></i>\n\n              <i class=\"mga-tick\" *ngFor=\"let t of visitTicks(r)\" [style.left.%]=\"t\"></i>\n\n              <span class=\"mga-none\" *ngIf=\"r.status !== 'present'\">\n                {{ r.status === 'leave' ? r.attType : 'No attendance marked' }}\n              </span>\n            </div>\n\n            <div class=\"mga-times\" *ngIf=\"r.status === 'present'\">\n              <span>{{ r.start }}</span>\n              <span class=\"mga-mid\">{{ r.workingHrs }} · {{ r.checkins }} check-ins · {{ r.km }} km</span>\n              <span>{{ r.stop }}</span>\n            </div>\n          </div>\n\n          <!-- vitals -->\n          <div class=\"mga-vitals\">\n            <span class=\"mga-status\" [class]=\"'mga-status ' + r.status\">\n              <i class=\"mga-dot\"></i>{{ statusLabel(r.status) }}\n            </span>\n            <span class=\"mga-late\" *ngIf=\"isLate(r)\">\n              <i class=\"material-icons\">schedule</i>Late\n            </span>\n            <span class=\"mga-type\">{{ r.attType }}</span>\n            <i class=\"material-icons mga-go\">chevron_right</i>\n          </div>\n        </article>\n\n        <div class=\"mga-empty\" *ngIf=\"list.length === 0\">\n          <img src=\"assets/img/no-data.svg\" alt=\"\">\n          <p>No records match this filter<span>Try a different filter or clear the search.</span></p>\n        </div>\n      </section>\n\n      <!-- ================================================================\n           MONTH - per person tally\n           ================================================================ -->\n      <section class=\"mga-feed\" *ngIf=\"period === 'month'\">\n        <article class=\"mga-mrow\" *ngFor=\"let r of list\" (click)=\"open(r)\">\n          <div class=\"mga-who\">\n            <span class=\"mga-av\" [class]=\"'mga-av ' + r.status\">{{ initials(r.emp) }}</span>\n            <span class=\"mga-who-txt\">\n              <b>{{ r.emp }}</b>\n              <em>{{ r.empCode }} · {{ r.region }}</em>\n            </span>\n          </div>\n\n          <div class=\"mga-mstack\">\n            <span class=\"mga-mbar\">\n              <i class=\"p\" [style.width.%]=\"monthPct(r, 'present')\"></i>\n              <i class=\"l\" [style.width.%]=\"monthPct(r, 'leave')\"></i>\n              <i class=\"a\" [style.width.%]=\"monthPct(r, 'absent')\"></i>\n            </span>\n            <span class=\"mga-mkey\">\n              <em><i class=\"k p\"></i>{{ r.month.present }} present</em>\n              <em><i class=\"k l\"></i>{{ r.month.leave }} leave</em>\n              <em><i class=\"k a\"></i>{{ r.month.absent }} absent</em>\n              <em class=\"days\">of {{ r.month.workingDays }} working days</em>\n            </span>\n          </div>\n\n          <i class=\"material-icons mga-go\">chevron_right</i>\n        </article>\n      </section>\n    </div>\n\n    <!-- ==================================================================\n         Right rail\n         ================================================================== -->\n    <aside class=\"mga-side\">\n      <div class=\"mga-panel\">\n        <h4>Attendance split</h4>\n        <span class=\"mga-split\">\n          <i class=\"p\" [style.width.%]=\"(presentCount / total) * 100\"></i>\n          <i class=\"l\" [style.width.%]=\"(leaveCount / total) * 100\"></i>\n          <i class=\"a\" [style.width.%]=\"(absentCount / total) * 100\"></i>\n        </span>\n        <ul class=\"mga-keys\">\n          <li><i class=\"k p\"></i><span>Present</span><b>{{ presentCount }}</b></li>\n          <li><i class=\"k l\"></i><span>On leave</span><b>{{ leaveCount }}</b></li>\n          <li><i class=\"k a\"></i><span>Absent</span><b>{{ absentCount }}</b></li>\n        </ul>\n      </div>\n\n      <div class=\"mga-panel\">\n        <h4>When the day started</h4>\n        <ul class=\"mga-spread\">\n          <li *ngFor=\"let s of startSpread\">\n            <span class=\"mga-spread-top\">\n              <u>{{ s.label }}</u><b>{{ s.n }}</b>\n            </span>\n            <span class=\"mga-spread-bar\"><i [class.late]=\"s.late\" [style.width.%]=\"s.pct\"></i></span>\n          </li>\n        </ul>\n        <p class=\"mga-note\">Late is counted after 9:30 AM</p>\n      </div>\n\n      <div class=\"mga-panel\">\n        <h4>Mode of transport</h4>\n        <ul class=\"mga-mix\">\n          <li *ngFor=\"let t of byTransport\">\n            <span>{{ t.name }}</span><b>{{ t.n }}</b><em>{{ t.pct }}%</em>\n          </li>\n        </ul>\n      </div>\n    </aside>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/magnus-attendance/magnus-attendance.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/magnus-attendance/magnus-attendance.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  --a-surface: var(--surface-card);\n  --a-canvas: var(--grey);\n  --a-hairline: var(--border-light);\n  --a-rule: var(--bodrColor);\n  --a-ink: var(--text);\n  --a-ink-2: var(--text-secondary);\n  --a-ink-3: var(--text-muted);\n  --a-red: var(--primary);\n  --a-red-soft: var(--primary-light);\n  --a-green: var(--success);\n  --a-green-soft: var(--success-light);\n  --a-amber: var(--warning);\n  --a-amber-soft: var(--warning-light);\n  display: block;\n  height: 100%;\n}\n\n:host .main-container {\n  display: flex;\n  flex-direction: column;\n}\n\n:host .tools-container {\n  flex: 0 0 auto;\n  position: relative;\n}\n\n.mga-chip {\n  display: inline-flex;\n  align-items: center;\n  font-size: 12.5px;\n  color: var(--a-ink-2);\n  background: var(--a-surface);\n  border: 1px solid var(--a-hairline);\n  border-radius: 8px;\n  padding: 7px 11px;\n  white-space: nowrap;\n}\n\n.mga-datenav {\n  display: inline-flex;\n  align-items: center;\n  background: var(--a-surface);\n  border: 1px solid var(--a-hairline);\n  border-radius: 8px;\n  overflow: hidden;\n}\n\n.mga-datenav button {\n  border: 0;\n  background: transparent;\n  width: 30px;\n  height: 34px;\n  cursor: pointer;\n  color: var(--a-ink-2);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: background 0.13s cubic-bezier(0.4, 0, 0.2, 1);\n}\n\n.mga-datenav button i {\n  font-size: 19px;\n}\n\n.mga-datenav button:hover:not(:disabled) {\n  background: var(--a-canvas);\n  color: var(--a-ink);\n}\n\n.mga-datenav button:disabled {\n  opacity: 0.3;\n  cursor: not-allowed;\n}\n\n.mga-date {\n  padding: 0 10px;\n  text-align: center;\n  line-height: 1.2;\n  min-width: 96px;\n}\n\n.mga-date b {\n  display: block;\n  font-size: 12.5px;\n  font-weight: 600;\n  color: var(--a-ink);\n  white-space: nowrap;\n}\n\n.mga-date em {\n  display: block;\n  font-style: normal;\n  font-size: 10.5px;\n  color: var(--a-ink-3);\n}\n\n.mga-seg {\n  display: inline-flex;\n  gap: 2px;\n  background: var(--a-canvas);\n  border: 1px solid var(--a-hairline);\n  border-radius: 9px;\n  padding: 2px;\n}\n\n.mga-seg button {\n  border: 0;\n  background: transparent;\n  border-radius: 7px;\n  padding: 6px 13px;\n  font-size: 12.5px;\n  font-weight: 500;\n  color: var(--a-ink-2);\n  cursor: pointer;\n  transition: background 0.13s cubic-bezier(0.4, 0, 0.2, 1), color 0.13s cubic-bezier(0.4, 0, 0.2, 1);\n}\n\n.mga-seg button:hover {\n  color: var(--a-ink);\n}\n\n.mga-seg button.on {\n  background: var(--a-surface);\n  color: var(--a-ink);\n  font-weight: 600;\n  box-shadow: 0 1px 2px rgba(42, 44, 51, 0.08);\n}\n\n.mga {\n  flex: 1 1 auto;\n  min-height: 0;\n  display: grid;\n  grid-template-columns: minmax(0, 1fr) 300px;\n  gap: 12px;\n  padding: 0 16px 16px 16px;\n  background: var(--a-canvas);\n}\n\n.mga-main {\n  min-width: 0;\n  display: flex;\n  flex-direction: column;\n  min-height: 0;\n}\n\n.mga-kpis {\n  display: grid;\n  grid-template-columns: repeat(5, minmax(0, 1fr));\n  gap: 10px;\n  margin-bottom: 10px;\n  flex: 0 0 auto;\n}\n\n.mga-kpis article {\n  background: var(--a-surface);\n  border: 1px solid var(--a-hairline);\n  border-radius: 11px;\n  padding: 12px 13px;\n  min-width: 0;\n}\n\n.mga-kpis article.flag {\n  border-color: rgba(221, 77, 97, 0.35);\n}\n\n.mga-kpis article.warn {\n  border-color: rgba(176, 136, 67, 0.4);\n}\n\n.mga-kpis article u {\n  display: block;\n  text-decoration: none;\n  font-size: 11.5px;\n  color: var(--a-ink-2);\n  margin-bottom: 5px;\n  white-space: nowrap;\n}\n\n.mga-kpis article b {\n  display: block;\n  font-size: 22px;\n  font-weight: 700;\n  letter-spacing: -0.03em;\n  color: var(--a-ink);\n  line-height: 1.15;\n  font-variant-numeric: tabular-nums;\n}\n\n.mga-kpis article b s {\n  text-decoration: none;\n  font-size: 12.5px;\n  font-weight: 500;\n  color: var(--a-ink-3);\n}\n\n.mga-kpis article em {\n  display: block;\n  font-style: normal;\n  font-size: 11px;\n  color: var(--a-ink-3);\n  margin-top: 5px;\n  line-height: 1.4;\n}\n\n.mga-meter {\n  display: block;\n  height: 4px;\n  margin-top: 7px;\n  border-radius: 9999px;\n  background: var(--a-hairline);\n  overflow: hidden;\n}\n\n.mga-meter i {\n  display: block;\n  height: 100%;\n  border-radius: 9999px;\n  background: var(--a-green);\n}\n\n.mga-bar {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  flex-wrap: wrap;\n  background: var(--a-surface);\n  border: 1px solid var(--a-hairline);\n  border-radius: 11px;\n  padding: 9px 11px;\n  margin-bottom: 10px;\n  flex: 0 0 auto;\n}\n\n.mga-search {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  flex: 1 1 240px;\n  min-width: 0;\n  background: var(--a-canvas);\n  border: 1px solid transparent;\n  border-radius: 8px;\n  padding: 0 10px;\n  height: 34px;\n  transition: border-color 0.15s cubic-bezier(0.4, 0, 0.2, 1), background 0.15s cubic-bezier(0.4, 0, 0.2, 1);\n}\n\n.mga-search:focus-within {\n  background: var(--a-surface);\n  border-color: var(--a-rule);\n}\n\n.mga-search > i {\n  font-size: 17px;\n  color: var(--a-ink-3);\n}\n\n.mga-search input {\n  flex: 1;\n  min-width: 0;\n  border: 0;\n  outline: 0;\n  background: transparent;\n  font-size: 13px;\n  color: var(--a-ink);\n}\n\n.mga-search input::-moz-placeholder {\n  color: var(--a-ink-3);\n}\n\n.mga-search input::placeholder {\n  color: var(--a-ink-3);\n}\n\n.mga-x {\n  border: 0;\n  background: transparent;\n  cursor: pointer;\n  padding: 0;\n  display: flex;\n  align-items: center;\n  color: var(--a-ink-3);\n}\n\n.mga-x i {\n  font-size: 16px;\n}\n\n.mga-x:hover {\n  color: var(--a-ink);\n}\n\n.mga-filters {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 4px;\n}\n\n.mga-filters button {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  border: 0;\n  background: var(--a-canvas);\n  border-radius: 7px;\n  padding: 6px 10px;\n  font-size: 12px;\n  font-weight: 500;\n  color: var(--a-ink-2);\n  cursor: pointer;\n  white-space: nowrap;\n  transition: background 0.13s cubic-bezier(0.4, 0, 0.2, 1), color 0.13s cubic-bezier(0.4, 0, 0.2, 1);\n}\n\n.mga-filters button i {\n  font-size: 14px;\n}\n\n.mga-filters button u {\n  text-decoration: none;\n  font-weight: 600;\n  color: var(--a-ink-3);\n  font-variant-numeric: tabular-nums;\n}\n\n.mga-filters button:hover {\n  color: var(--a-ink);\n}\n\n.mga-filters button.on {\n  background: var(--a-ink);\n  color: #ffffff;\n}\n\n.mga-filters button.on u {\n  color: rgba(255, 255, 255, 0.7);\n}\n\n.mga-filters button.warn {\n  color: var(--a-amber);\n  background: var(--a-amber-soft);\n}\n\n.mga-filters button.warn u {\n  color: var(--a-amber);\n}\n\n.mga-filters button.warn.on {\n  background: var(--a-amber);\n  color: #ffffff;\n}\n\n.mga-filters button.warn.on u {\n  color: rgba(255, 255, 255, 0.85);\n}\n\n.mga-sort {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n}\n\n.mga-sort > span {\n  font-size: 11px;\n  color: var(--a-ink-3);\n  margin-right: 2px;\n}\n\n.mga-sort button {\n  border: 0;\n  background: transparent;\n  border-radius: 6px;\n  padding: 5px 8px;\n  font-size: 12px;\n  color: var(--a-ink-3);\n  cursor: pointer;\n  transition: background 0.13s cubic-bezier(0.4, 0, 0.2, 1), color 0.13s cubic-bezier(0.4, 0, 0.2, 1);\n}\n\n.mga-sort button:hover {\n  background: var(--a-canvas);\n  color: var(--a-ink);\n}\n\n.mga-sort button.on {\n  background: var(--a-canvas);\n  color: var(--a-ink);\n  font-weight: 600;\n}\n\n.mga-feed {\n  flex: 1 1 auto;\n  min-height: 0;\n  overflow-y: auto;\n  padding-right: 2px;\n}\n\n.mga-axis {\n  display: grid;\n  grid-template-columns: 216px minmax(0, 1fr) 178px;\n  align-items: center;\n  padding: 0 14px 6px 14px;\n}\n\n.mga-axis .mga-axis-track {\n  position: relative;\n  height: 13px;\n}\n\n.mga-axis .mga-axis-track i {\n  position: absolute;\n  transform: translateX(-50%);\n  font-style: normal;\n  font-size: 10px;\n  color: var(--a-ink-3);\n  font-variant-numeric: tabular-nums;\n  white-space: nowrap;\n}\n\n.mga-row,\n.mga-mrow {\n  display: grid;\n  grid-template-columns: 216px minmax(0, 1fr) 178px;\n  align-items: center;\n  gap: 14px;\n  background: var(--a-surface);\n  border: 1px solid var(--a-hairline);\n  border-radius: 11px;\n  padding: 11px 14px;\n  margin-bottom: 7px;\n  cursor: pointer;\n  transition: border-color 0.14s cubic-bezier(0.4, 0, 0.2, 1), background 0.14s cubic-bezier(0.4, 0, 0.2, 1);\n}\n\n.mga-row:hover,\n.mga-mrow:hover {\n  border-color: var(--a-rule);\n}\n\n.mga-row:hover .mga-go,\n.mga-mrow:hover .mga-go {\n  opacity: 1;\n}\n\n.mga-row.off,\n.mga-mrow.off {\n  background: var(--a-canvas);\n}\n\n.mga-mrow {\n  grid-template-columns: 216px minmax(0, 1fr) 24px;\n}\n\n.mga-who {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  min-width: 0;\n}\n\n.mga-av {\n  position: relative;\n  width: 34px;\n  height: 34px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 12px;\n  font-weight: 600;\n  color: var(--a-ink-2);\n  background: var(--a-canvas);\n  box-shadow: 0 0 0 2px var(--a-rule);\n  flex-shrink: 0;\n}\n\n.mga-av.present {\n  box-shadow: 0 0 0 2px var(--a-green);\n}\n\n.mga-av.absent {\n  box-shadow: 0 0 0 2px var(--a-red);\n}\n\n.mga-av.leave {\n  box-shadow: 0 0 0 2px var(--a-amber);\n}\n\n.mga-cam {\n  position: absolute;\n  right: -3px;\n  bottom: -3px;\n  font-size: 11px !important;\n  width: 15px;\n  height: 15px;\n  border-radius: 50%;\n  background: var(--a-surface);\n  color: var(--a-ink-3);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  box-shadow: 0 0 0 1px var(--a-rule);\n}\n\n.mga-who-txt {\n  min-width: 0;\n}\n\n.mga-who-txt b {\n  display: block;\n  font-size: 13.5px;\n  font-weight: 600;\n  color: var(--a-ink);\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n.mga-who-txt em {\n  display: block;\n  font-style: normal;\n  font-size: 11.5px;\n  color: var(--a-ink-3);\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n.mga-day {\n  min-width: 0;\n}\n\n.mga-track {\n  position: relative;\n  height: 20px;\n  background: var(--a-canvas);\n  border-radius: 6px;\n  overflow: hidden;\n}\n\n.mga-daybar {\n  position: absolute;\n  top: 3px;\n  bottom: 3px;\n  border-radius: 5px;\n  background: var(--a-ink);\n  transition: left 0.4s cubic-bezier(0.4, 0, 0.2, 1), width 0.4s cubic-bezier(0.4, 0, 0.2, 1);\n}\n\n.mga-tick {\n  position: absolute;\n  top: 6px;\n  width: 2px;\n  height: 8px;\n  border-radius: 1px;\n  background: rgba(255, 255, 255, 0.85);\n  transform: translateX(-1px);\n}\n\n.mga-none {\n  position: absolute;\n  inset: 0;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 11.5px;\n  color: var(--a-ink-3);\n}\n\n.mga-times {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 10px;\n  margin-top: 5px;\n  font-size: 11.5px;\n  color: var(--a-ink-3);\n  font-variant-numeric: tabular-nums;\n}\n\n.mga-times .mga-mid {\n  color: var(--a-ink-2);\n}\n\n.mga-vitals {\n  display: flex;\n  align-items: center;\n  justify-content: flex-end;\n  gap: 7px;\n  min-width: 0;\n}\n\n.mga-status {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  font-size: 11.5px;\n  font-weight: 500;\n  border-radius: 6px;\n  padding: 3px 8px;\n  white-space: nowrap;\n  background: var(--a-canvas);\n  color: var(--a-ink-2);\n}\n\n.mga-status .mga-dot {\n  width: 6px;\n  height: 6px;\n  border-radius: 50%;\n  background: currentColor;\n}\n\n.mga-status.present {\n  background: var(--a-green-soft);\n  color: var(--a-green);\n}\n\n.mga-status.absent {\n  background: var(--a-red-soft);\n  color: var(--a-red);\n}\n\n.mga-status.leave {\n  background: var(--a-amber-soft);\n  color: var(--a-amber);\n}\n\n.mga-late {\n  display: inline-flex;\n  align-items: center;\n  gap: 3px;\n  font-size: 11px;\n  font-weight: 500;\n  color: var(--a-amber);\n  white-space: nowrap;\n}\n\n.mga-late i {\n  font-size: 13px;\n}\n\n.mga-type {\n  font-size: 11px;\n  color: var(--a-ink-3);\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.mga-go {\n  font-size: 19px !important;\n  color: var(--a-ink-3);\n  opacity: 0;\n  flex-shrink: 0;\n  transition: opacity 0.13s cubic-bezier(0.4, 0, 0.2, 1);\n}\n\n.mga-mstack {\n  min-width: 0;\n}\n\n.mga-mbar {\n  display: flex;\n  height: 10px;\n  border-radius: 6px;\n  overflow: hidden;\n  background: var(--a-hairline);\n}\n\n.mga-mbar i {\n  display: block;\n  height: 100%;\n}\n\n.mga-mbar .p {\n  background: var(--a-green);\n}\n\n.mga-mbar .l {\n  background: var(--a-amber);\n}\n\n.mga-mbar .a {\n  background: var(--a-red);\n}\n\n.mga-mkey {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 12px;\n  margin-top: 7px;\n}\n\n.mga-mkey em {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  font-style: normal;\n  font-size: 11.5px;\n  color: var(--a-ink-2);\n  font-variant-numeric: tabular-nums;\n}\n\n.mga-mkey em.days {\n  color: var(--a-ink-3);\n  margin-left: auto;\n}\n\n.k {\n  width: 8px;\n  height: 8px;\n  border-radius: 2px;\n  display: inline-block;\n  flex-shrink: 0;\n}\n\n.k.p {\n  background: var(--a-green);\n}\n\n.k.l {\n  background: var(--a-amber);\n}\n\n.k.a {\n  background: var(--a-red);\n}\n\n.mga-empty {\n  text-align: center;\n  padding: 44px 20px;\n}\n\n.mga-empty img {\n  height: 140px;\n  margin-bottom: 12px;\n}\n\n.mga-empty p {\n  font-size: 14px;\n  font-weight: 500;\n  color: var(--a-ink-2);\n}\n\n.mga-empty p span {\n  display: block;\n  margin-top: 4px;\n  font-size: 13px;\n  font-weight: 400;\n  color: var(--a-ink-3);\n}\n\n.mga-side {\n  min-width: 0;\n  overflow-y: auto;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n\n.mga-panel {\n  background: var(--a-surface);\n  border: 1px solid var(--a-hairline);\n  border-radius: 11px;\n  padding: 14px;\n}\n\n.mga-panel h4 {\n  font-size: 11px;\n  font-weight: 600;\n  letter-spacing: 0.06em;\n  text-transform: uppercase;\n  color: var(--a-ink-3);\n  margin-bottom: 12px;\n}\n\n.mga-note {\n  font-size: 11.5px;\n  color: var(--a-ink-3);\n  margin-top: 10px;\n}\n\n.mga-split {\n  display: flex;\n  height: 10px;\n  border-radius: 6px;\n  overflow: hidden;\n  background: var(--a-hairline);\n  margin-bottom: 12px;\n}\n\n.mga-split i {\n  display: block;\n  height: 100%;\n}\n\n.mga-split .p {\n  background: var(--a-green);\n}\n\n.mga-split .l {\n  background: var(--a-amber);\n}\n\n.mga-split .a {\n  background: var(--a-red);\n}\n\n.mga-keys {\n  list-style: none;\n}\n\n.mga-keys li {\n  display: flex;\n  align-items: center;\n  gap: 9px;\n  padding: 6px 0;\n  font-size: 13px;\n  color: var(--a-ink-2);\n}\n\n.mga-keys li + li {\n  border-top: 1px solid var(--a-hairline);\n}\n\n.mga-keys li span {\n  flex: 1;\n}\n\n.mga-keys li b {\n  font-weight: 600;\n  color: var(--a-ink);\n  font-variant-numeric: tabular-nums;\n}\n\n.mga-spread {\n  list-style: none;\n}\n\n.mga-spread li + li {\n  margin-top: 10px;\n}\n\n.mga-spread-top {\n  display: flex;\n  align-items: baseline;\n  justify-content: space-between;\n  margin-bottom: 5px;\n}\n\n.mga-spread-top u {\n  text-decoration: none;\n  font-size: 12px;\n  color: var(--a-ink-2);\n}\n\n.mga-spread-top b {\n  font-size: 12px;\n  font-weight: 600;\n  color: var(--a-ink);\n  font-variant-numeric: tabular-nums;\n}\n\n.mga-spread-bar {\n  display: block;\n  height: 5px;\n  border-radius: 9999px;\n  background: var(--a-hairline);\n  overflow: hidden;\n}\n\n.mga-spread-bar i {\n  display: block;\n  height: 100%;\n  border-radius: 9999px;\n  background: var(--a-ink-3);\n}\n\n.mga-spread-bar i.late {\n  background: var(--a-amber);\n}\n\n.mga-mix {\n  list-style: none;\n}\n\n.mga-mix li {\n  display: flex;\n  align-items: center;\n  gap: 9px;\n  padding: 7px 0;\n  font-size: 13px;\n  color: var(--a-ink-2);\n}\n\n.mga-mix li + li {\n  border-top: 1px solid var(--a-hairline);\n}\n\n.mga-mix li span {\n  flex: 1;\n  min-width: 0;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n.mga-mix li b {\n  font-weight: 600;\n  color: var(--a-ink);\n  font-variant-numeric: tabular-nums;\n}\n\n.mga-mix li em {\n  font-style: normal;\n  font-size: 12px;\n  color: var(--a-ink-3);\n  width: 38px;\n  text-align: right;\n  font-variant-numeric: tabular-nums;\n}\n\n@media only screen and (max-width: 1500px) {\n  .mga-kpis {\n    grid-template-columns: repeat(3, minmax(0, 1fr));\n  }\n}\n\n@media only screen and (max-width: 1280px) {\n  .mga-axis,\n  .mga-row {\n    grid-template-columns: 190px minmax(0, 1fr) 150px;\n  }\n  .mga-mrow {\n    grid-template-columns: 190px minmax(0, 1fr) 24px;\n  }\n}\n\n@media only screen and (max-width: 1180px) {\n  .mga {\n    grid-template-columns: minmax(0, 1fr);\n    overflow-y: auto;\n  }\n  .mga-feed, .mga-side {\n    overflow: visible;\n  }\n}\n\n@media only screen and (max-width: 860px) {\n  .mga {\n    padding: 0 12px 12px 12px;\n  }\n  .mga-kpis {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n  .mga-axis {\n    display: none;\n  }\n  .mga-row, .mga-mrow {\n    grid-template-columns: minmax(0, 1fr);\n    gap: 10px;\n  }\n  .mga-vitals {\n    justify-content: flex-start;\n  }\n  .mga-go {\n    display: none;\n  }\n}"

/***/ }),

/***/ "./src/app/magnus-attendance/magnus-attendance.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/magnus-attendance/magnus-attendance.component.ts ***!
  \******************************************************************/
/*! exports provided: MagnusAttendanceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MagnusAttendanceComponent", function() { return MagnusAttendanceComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _attendance_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./attendance-data */ "./src/app/magnus-attendance/attendance-data.ts");




// ============================================================================
// MAGNUS PLYWOOD - Attendance
//
// The original screen was a twenty-column sideways table (code, manager, start
// time, start location, stop time, stop location, transport, distance from
// base, first check-in, travelling time, counter time, type, remark, title,
// state, two action columns) sitting under two rows of tabs.
//
// An attendance record is a day: it has a shape - when it started, how long
// the person was out, where the time went, when it closed. So each row is
// drawn as that day, with a bar showing the working window against the team's
// hours, and the location and time fields folded into the row they describe.
//
// Demo mock: no HTTP calls.
// ============================================================================
var MagnusAttendanceComponent = /** @class */ (function () {
    function MagnusAttendanceComponent(router) {
        this.router = router;
        this.period = 'today';
        this.dayOffset = 0;
        this.dateLabel = '';
        this.relLabel = 'Today';
        this.search = '';
        this.filter = 'all';
        this.sortBy = 'start';
        this.records = [];
        // The day bar spans the working window the team is measured against
        this.dayFrom = 8 * 60; // 08:00
        this.dayTo = 19 * 60; // 19:00
        this.lateAfter = 9 * 60 + 30;
        // ==========================================================================
        // Template helpers
        // ==========================================================================
        this.initials = _attendance_data__WEBPACK_IMPORTED_MODULE_3__["initials"];
    }
    MagnusAttendanceComponent.prototype.ngOnInit = function () {
        this.records = Object(_attendance_data__WEBPACK_IMPORTED_MODULE_3__["buildAttendance"])();
        this.setDate();
    };
    // ==========================================================================
    // Period
    // ==========================================================================
    MagnusAttendanceComponent.prototype.setDate = function () {
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
    MagnusAttendanceComponent.prototype.setPeriod = function (p) {
        if (this.period === p) {
            return;
        }
        this.period = p;
        this.dayOffset = 0;
        this.setDate();
    };
    MagnusAttendanceComponent.prototype.stepDay = function (d) {
        if (this.period === 'month' || this.dayOffset + d > 0) {
            return;
        }
        this.dayOffset += d;
        this.setDate();
    };
    Object.defineProperty(MagnusAttendanceComponent.prototype, "isToday", {
        get: function () { return this.dayOffset === 0; },
        enumerable: true,
        configurable: true
    });
    // ==========================================================================
    // Filtering
    // ==========================================================================
    MagnusAttendanceComponent.prototype.isLate = function (r) {
        return r.status === 'present' && r.startMin > this.lateAfter;
    };
    Object.defineProperty(MagnusAttendanceComponent.prototype, "list", {
        get: function () {
            var _this = this;
            var q = (this.search || '').toLowerCase().trim();
            var out = this.records.filter(function (r) {
                if (q &&
                    r.emp.toLowerCase().indexOf(q) === -1 &&
                    r.empCode.toLowerCase().indexOf(q) === -1 &&
                    r.region.toLowerCase().indexOf(q) === -1 &&
                    r.manager.toLowerCase().indexOf(q) === -1) {
                    return false;
                }
                if (_this.filter === 'late') {
                    return _this.isLate(r);
                }
                if (_this.filter === 'all') {
                    return true;
                }
                return r.status === _this.filter;
            });
            out = out.slice();
            if (this.sortBy === 'name') {
                out.sort(function (a, b) { return a.emp.localeCompare(b.emp); });
            }
            if (this.sortBy === 'start') {
                // People who never started belong at the bottom, not at 00:00
                out.sort(function (a, b) { return (a.startMin || 9999) - (b.startMin || 9999); });
            }
            if (this.sortBy === 'hours') {
                out.sort(function (a, b) { return (b.stopMin - b.startMin) - (a.stopMin - a.startMin); });
            }
            if (this.sortBy === 'checkins') {
                out.sort(function (a, b) { return b.checkins - a.checkins; });
            }
            return out;
        },
        enumerable: true,
        configurable: true
    });
    MagnusAttendanceComponent.prototype.countFor = function (f) {
        var _this = this;
        if (f === 'all') {
            return this.records.length;
        }
        if (f === 'late') {
            return this.records.filter(function (r) { return _this.isLate(r); }).length;
        }
        return this.records.filter(function (r) { return r.status === f; }).length;
    };
    MagnusAttendanceComponent.prototype.clearSearch = function () { this.search = ''; };
    MagnusAttendanceComponent.prototype.open = function (r) {
        this.router.navigate(['/attendance/detail', r.id]);
    };
    Object.defineProperty(MagnusAttendanceComponent.prototype, "total", {
        // ==========================================================================
        // Day summary
        // ==========================================================================
        get: function () { return this.records.length; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MagnusAttendanceComponent.prototype, "presentCount", {
        get: function () { return this.records.filter(function (r) { return r.status === 'present'; }).length; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MagnusAttendanceComponent.prototype, "absentCount", {
        get: function () { return this.records.filter(function (r) { return r.status === 'absent'; }).length; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MagnusAttendanceComponent.prototype, "leaveCount", {
        get: function () { return this.records.filter(function (r) { return r.status === 'leave'; }).length; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MagnusAttendanceComponent.prototype, "lateCount", {
        get: function () {
            var _this = this;
            return this.records.filter(function (r) { return _this.isLate(r); }).length;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MagnusAttendanceComponent.prototype, "presentPct", {
        get: function () { return Math.round((this.presentCount / this.total) * 100); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MagnusAttendanceComponent.prototype, "avgHours", {
        get: function () {
            var on = this.records.filter(function (r) { return r.status === 'present'; });
            if (!on.length) {
                return '—';
            }
            var m = Math.round(on.reduce(function (a, r) { return a + (r.stopMin - r.startMin); }, 0) / on.length);
            return Math.floor(m / 60) + 'h ' + (m % 60) + 'm';
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MagnusAttendanceComponent.prototype, "totalCheckins", {
        get: function () { return this.records.reduce(function (a, r) { return a + r.checkins; }, 0); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MagnusAttendanceComponent.prototype, "totalKm", {
        get: function () { return Math.round(this.records.reduce(function (a, r) { return a + r.km; }, 0)); },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MagnusAttendanceComponent.prototype, "startSpread", {
        // Start-time spread, so "is the team starting on time" is visible
        get: function () {
            var buckets = [
                { label: 'Before 9', from: 0, to: 9 * 60 - 1, late: false },
                { label: '9 – 9:30', from: 9 * 60, to: 9 * 60 + 30, late: false },
                { label: '9:30 – 10', from: 9 * 60 + 31, to: 10 * 60, late: true },
                { label: 'After 10', from: 10 * 60 + 1, to: 24 * 60, late: true }
            ];
            var on = this.records.filter(function (r) { return r.status === 'present'; });
            var max = 1;
            var out = buckets.map(function (b) {
                var n = on.filter(function (r) { return r.startMin >= b.from && r.startMin <= b.to; }).length;
                if (n > max) {
                    max = n;
                }
                return { label: b.label, n: n, pct: 0, late: b.late };
            });
            out.forEach(function (o) { return o.pct = Math.round((o.n / max) * 100); });
            return out;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MagnusAttendanceComponent.prototype, "byTransport", {
        get: function () {
            var map = {};
            this.records.filter(function (r) { return r.status === 'present'; }).forEach(function (r) {
                map[r.transport] = (map[r.transport] || 0) + 1;
            });
            var tot = this.presentCount || 1;
            return Object.keys(map).map(function (k) { return ({
                name: k, n: map[k], pct: Math.round((map[k] / tot) * 100)
            }); }).sort(function (a, b) { return b.n - a.n; });
        },
        enumerable: true,
        configurable: true
    });
    // ==========================================================================
    // Day bar geometry
    // ==========================================================================
    MagnusAttendanceComponent.prototype.barLeft = function (r) {
        if (r.status !== 'present') {
            return 0;
        }
        return Math.max(0, ((r.startMin - this.dayFrom) / (this.dayTo - this.dayFrom)) * 100);
    };
    MagnusAttendanceComponent.prototype.barWidth = function (r) {
        if (r.status !== 'present') {
            return 0;
        }
        var w = ((r.stopMin - r.startMin) / (this.dayTo - this.dayFrom)) * 100;
        return Math.max(2, Math.min(100 - this.barLeft(r), w));
    };
    // Check-in ticks sit on the bar, showing when the counter time happened
    MagnusAttendanceComponent.prototype.visitTicks = function (r) {
        var _this = this;
        if (r.status !== 'present' || !r.visits.length) {
            return [];
        }
        var span = this.dayTo - this.dayFrom;
        return r.visits.map(function (v, i) {
            var at = r.startMin + 30 + i * 82;
            return Math.max(0, Math.min(100, ((at - _this.dayFrom) / span) * 100));
        });
    };
    Object.defineProperty(MagnusAttendanceComponent.prototype, "axisTicks", {
        get: function () {
            var out = [];
            for (var h = 8; h <= 19; h += 2) {
                out.push({
                    label: (h > 12 ? h - 12 : h) + (h >= 12 ? 'p' : 'a'),
                    pct: ((h * 60 - this.dayFrom) / (this.dayTo - this.dayFrom)) * 100
                });
            }
            return out;
        },
        enumerable: true,
        configurable: true
    });
    MagnusAttendanceComponent.prototype.statusLabel = function (s) {
        return s === 'present' ? 'Present' : s === 'absent' ? 'Absent'
            : s === 'leave' ? 'Leave' : 'Holiday';
    };
    MagnusAttendanceComponent.prototype.monthPct = function (r, key) {
        return Math.round((r.month[key] / r.month.workingDays) * 100);
    };
    MagnusAttendanceComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-magnus-attendance',
            template: __webpack_require__(/*! ./magnus-attendance.component.html */ "./src/app/magnus-attendance/magnus-attendance.component.html"),
            styles: [__webpack_require__(/*! ./magnus-attendance.component.scss */ "./src/app/magnus-attendance/magnus-attendance.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], MagnusAttendanceComponent);
    return MagnusAttendanceComponent;
}());



/***/ }),

/***/ "./src/app/magnus-attendance/magnus-attendance.module.ts":
/*!***************************************************************!*\
  !*** ./src/app/magnus-attendance/magnus-attendance.module.ts ***!
  \***************************************************************/
/*! exports provided: MagnusAttendanceModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MagnusAttendanceModule", function() { return MagnusAttendanceModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/material */ "./src/app/material.ts");
/* harmony import */ var src_app_auth_component_guard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/auth-component.guard */ "./src/app/auth-component.guard.ts");
/* harmony import */ var _magnus_attendance_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./magnus-attendance.component */ "./src/app/magnus-attendance/magnus-attendance.component.ts");
/* harmony import */ var _magnus_attendance_detail_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./magnus-attendance-detail.component */ "./src/app/magnus-attendance/magnus-attendance-detail.component.ts");









// The detail page is a child of this module, the same way the legacy
// attendance module carries its own detail route, so the whole screen -
// list and drill-down - loads as one chunk.
var routes = [
    { path: '', component: _magnus_attendance_component__WEBPACK_IMPORTED_MODULE_7__["MagnusAttendanceComponent"], canActivate: [src_app_auth_component_guard__WEBPACK_IMPORTED_MODULE_6__["AuthComponentGuard"]], data: { expectedRole: ['1'] } },
    { path: 'detail/:id', component: _magnus_attendance_detail_component__WEBPACK_IMPORTED_MODULE_8__["MagnusAttendanceDetailComponent"], canActivate: [src_app_auth_component_guard__WEBPACK_IMPORTED_MODULE_6__["AuthComponentGuard"]], data: { expectedRole: ['1'] } }
];
var MagnusAttendanceModule = /** @class */ (function () {
    function MagnusAttendanceModule() {
    }
    MagnusAttendanceModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _magnus_attendance_component__WEBPACK_IMPORTED_MODULE_7__["MagnusAttendanceComponent"],
                _magnus_attendance_detail_component__WEBPACK_IMPORTED_MODULE_8__["MagnusAttendanceDetailComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                src_app_material__WEBPACK_IMPORTED_MODULE_5__["MaterialModule"]
            ]
        })
    ], MagnusAttendanceModule);
    return MagnusAttendanceModule;
}());



/***/ })

}]);