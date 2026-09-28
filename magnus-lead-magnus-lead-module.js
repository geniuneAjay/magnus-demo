(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["magnus-lead-magnus-lead-module"],{

/***/ "./src/app/magnus-lead/lead-data.ts":
/*!******************************************!*\
  !*** ./src/app/magnus-lead/lead-data.ts ***!
  \******************************************/
/*! exports provided: buildLeads, initials, inr, lakh */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "buildLeads", function() { return buildLeads; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "initials", function() { return initials; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "inr", function() { return inr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "lakh", function() { return lakh; });
// ============================================================================
// MAGNUS PLYWOOD - Lead demo data
//
// Shared by the list and the detail screen so a row and the page it opens
// always agree. Generated here; no HTTP calls on either screen.
// ============================================================================
var SEED = [
    // owner, type, purpose, city, district, sqft, priority, source, assignedTo, stage, ageDays
    ['Shanti Residency', 'Residential', 'Flush doors and block board for 42 flats', 'Nagpur', 'Nagpur', 42000, 'High', 'Site visit', 'Rakesh Menon', 'Open', 12],
    ['Aditya Corporate Park', 'Commercial', 'Shuttering ply for structure work', 'Pune', 'Pune', 86000, 'High', 'Architect', 'Rakesh Menon', 'Open', 26],
    ['Krishna Enclave', 'Residential', 'Calibrated boards for modular kitchens', 'Surat', 'Surat', 18500, 'Medium', 'Dealer lead', 'Imran Qureshi', 'Pending', 4],
    ['Silver Oak School', 'Institutional', 'Fire retardant ply for labs and library', 'Indore', 'Indore', 24000, 'High', 'Tender', 'Deepak Sahu', 'Win-F', 48],
    ['Lakeview Villas', 'Residential', 'Block board and pine doors, 16 villas', 'Bengaluru', 'Bengaluru', 31000, 'Medium', 'Site visit', 'Vikram Shetty', 'Open', 19],
    ['Metro Transit Depot', 'Commercial', 'Bus flooring ply for body building', 'Ludhiana', 'Ludhiana', 54000, 'High', 'Referral', 'Harpreet Gill', 'Win-C', 72],
    ['Sunrise Apartments', 'Residential', 'Flush doors for 28 units', 'Coimbatore', 'Coimbatore', 14800, 'Low', 'Digital lead', 'Mohan Iyer', 'Pending', 2],
    ['Greenfield Hospital', 'Institutional', 'BWP ply for OT and ward furniture', 'Kolkata', 'Kolkata', 38000, 'High', 'Architect', 'Anita Bhattacharya', 'Lost', 64],
    ['Harmony Heights', 'Residential', 'Marine ply for balcony woodwork', 'Pune', 'Pune', 21000, 'Medium', 'Dealer lead', 'Rakesh Menon', 'Open', 8],
    ['Orion Mall Fitout', 'Commercial', 'Compreg and laminates for retail fitout', 'Hyderabad', 'Rangareddy', 67000, 'High', 'Contractor', 'Vikram Shetty', 'Win-F', 35],
    ['Vidya Hostel Block', 'Institutional', 'MR ply for hostel furniture', 'Nagpur', 'Nagpur', 16200, 'Low', 'Tender', 'Rakesh Menon', 'Pending', 6],
    ['Palm Court', 'Residential', 'Block board for wardrobes', 'Delhi', 'North Delhi', 27500, 'Medium', 'Site visit', 'Sunita Rawat', 'Open', 15],
    ['Riverside Warehouse', 'Commercial', 'Industrial pallet ply', 'Surat', 'Surat', 45000, 'Medium', 'Referral', 'Imran Qureshi', 'Lost', 58],
    ['Nandan Township', 'Residential', 'Doors and frames, phase 2', 'Indore', 'Indore', 73000, 'High', 'Architect', 'Deepak Sahu', 'Open', 21]
];
var SEED_COLS = 11;
var NAMES = ['Ravi Deshpande', 'Farida Shaikh', 'Amit Bansal', 'K Srinivasan', 'Neeta Kulkarni',
    'Gurpreet Sethi', 'S Balaji', 'Debjit Sen', 'Manish Rao', 'P Venkatesh',
    'Alok Mishra', 'Rohit Khanna', 'Zoya Mirza', 'Suresh Nair'];
var MGRS = {
    'Rakesh Menon': 'A. Kulkarni', 'Sunita Rawat': 'P. Chawla', 'Imran Qureshi': 'A. Kulkarni',
    'Deepak Sahu': 'P. Chawla', 'Vikram Shetty': 'R. Nair', 'Harpreet Gill': 'P. Chawla',
    'Mohan Iyer': 'R. Nair', 'Anita Bhattacharya': 'A. Kulkarni'
};
var MON = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
// 22 Sep 2026 is "today" for this demo; dates are counted back from it
function dateMinus(days) {
    var d = new Date(2026, 8, 22);
    d.setDate(d.getDate() - days);
    return d.getDate() + ' ' + MON[d.getMonth()] + ' ' + d.getFullYear();
}
function datePlus(days) {
    var d = new Date(2026, 8, 22);
    d.setDate(d.getDate() + days);
    return d.getDate() + ' ' + MON[d.getMonth()] + ' ' + d.getFullYear();
}
function buildLeads() {
    // Positional rows shift silently if a field is dropped, so the shape is
    // asserted once rather than discovered as NaN on screen.
    SEED.forEach(function (s, i) {
        if (s.length !== SEED_COLS) {
            throw new Error('lead-data: row ' + i + ' (' + s[0] + ') has ' +
                s.length + ' fields, expected ' + SEED_COLS);
        }
    });
    return SEED.map(function (s, i) {
        var sqft = s[5];
        var stage = s[9];
        var age = s[10];
        var won = stage === 'Win-F' || stage === 'Win-C';
        // Roughly ₹85-130 per sq ft of covered area, by product mix
        var rate = 85 + ((i * 17) % 46);
        var estValue = sqft * rate;
        var nFollow = stage === 'Pending' ? 1 : 2 + (i % 3);
        var followups = [];
        for (var f = 0; f < nFollow; f++) {
            followups.push({
                date: dateMinus(Math.max(1, age - f * 7)),
                by: s[8],
                note: f === 0
                    ? 'Shared rate card and sample pack.'
                    : f === 1
                        ? 'Site measurement confirmed, awaiting architect sign-off.'
                        : 'Negotiating on delivery schedule.',
                next: f === nFollow - 1 ? datePlus(3 + (i % 9)) : dateMinus(Math.max(0, age - (f + 1) * 7))
            });
        }
        var checkins = stage === 'Pending' ? 0 : 1 + (i % 4);
        var events = [
            { kind: 'created', date: dateMinus(age), title: 'Lead created', sub: 'Source: ' + s[7] + ' · by ' + (i % 3 === 0 ? 'Admin' : s[8]) }
        ];
        if (checkins > 0) {
            events.push({ kind: 'visit', date: dateMinus(Math.max(1, age - 3)), title: 'Site visit by ' + s[8], sub: 'Measurement taken, ' + sqft.toLocaleString('en-IN') + ' sq ft covered area' });
        }
        events.push({ kind: 'quote', date: dateMinus(Math.max(1, age - 6)), title: 'Quotation shared', sub: '₹ ' + estValue.toLocaleString('en-IN') + ' estimated' });
        if (followups.length) {
            events.push({ kind: 'followup', date: followups[followups.length - 1].date, title: 'Follow-up by ' + s[8], sub: followups[followups.length - 1].note });
        }
        if (won) {
            events.push({ kind: 'order', date: dateMinus(Math.max(0, age - 12)), title: 'Order booked', sub: '₹ ' + Math.round(estValue * 0.92).toLocaleString('en-IN') });
        }
        if (stage === 'Lost') {
            events.push({ kind: 'stage', date: dateMinus(Math.max(0, age - 20)), title: 'Marked lost', sub: 'Client went with a competitor on price' });
        }
        return {
            id: 'LD' + (8800 + i * 3),
            leadId: 'LD-' + (88210 + i * 7),
            owner: s[0],
            mobile: '9' + (620000000 + i * 4173829).toString().slice(0, 9),
            type: s[1],
            purpose: s[2],
            source: s[7],
            referral: i % 4 === 1 ? NAMES[(i + 5) % NAMES.length] : '—',
            sizeSqft: sqft,
            estValue: estValue,
            priority: s[6],
            city: s[3],
            district: s[4],
            address: (18 + i * 4) + ', ' + s[3] + ' Ring Road',
            assignedTo: s[8],
            manager: MGRS[s[8]],
            createdBy: i % 3 === 0 ? 'Admin' : s[8],
            createdOn: dateMinus(age),
            estDelivery: datePlus(14 + (i % 40)),
            stage: stage,
            ageDays: age,
            lastCheckin: checkins > 0 ? dateMinus(Math.max(1, age - 3)) : '—',
            checkins: checkins,
            followups: followups,
            events: events,
            gallery: checkins * 2 + (i % 3),
            orderValue: won ? Math.round(estValue * 0.92) : 0
        };
    });
}
function initials(n) {
    var p = n.replace(/[^A-Za-z ]/g, '').trim().split(/\s+/);
    return (p[0][0] + (p.length > 1 ? p[1][0] : '')).toUpperCase();
}
function inr(n) {
    return n.toLocaleString('en-IN');
}
// Rupees as lakh, which is how these values get discussed
function lakh(n) {
    return (Math.round(n / 1000) / 100).toFixed(2);
}


/***/ }),

/***/ "./src/app/magnus-lead/magnus-lead-detail.component.html":
/*!***************************************************************!*\
  !*** ./src/app/magnus-lead/magnus-lead-detail.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-container\" *ngIf=\"l\">\n\n  <div class=\"tools-container\">\n    <button class=\"mld-back\" (click)=\"back()\" aria-label=\"Back to lead list\">\n      <i class=\"material-icons\">arrow_back</i>\n    </button>\n    <h2>Lead Detail</h2>\n\n    <div class=\"left-auto df ac flex-gap-10\">\n      <div class=\"mld-nav\">\n        <button (click)=\"step(-1)\" [disabled]=\"idx === 0\" matTooltip=\"Previous lead\">\n          <i class=\"material-icons\">chevron_left</i>\n        </button>\n        <span>{{ idx + 1 }} of {{ all.length }}</span>\n        <button (click)=\"step(1)\" [disabled]=\"idx === all.length - 1\" matTooltip=\"Next lead\">\n          <i class=\"material-icons\">chevron_right</i>\n        </button>\n      </div>\n      <button mat-icon-button matTooltip=\"Call\"><i class=\"material-icons\">call</i></button>\n      <button mat-icon-button matTooltip=\"Add follow-up\"><i class=\"material-icons\">add_comment</i></button>\n      <button mat-icon-button matTooltip=\"Edit\"><i class=\"material-icons\">edit</i></button>\n    </div>\n  </div>\n\n  <div class=\"mld\">\n\n    <!-- ==================================================================\n         Main\n         ================================================================== -->\n    <div class=\"mld-main\">\n\n      <!-- identity -->\n      <section class=\"mld-card mld-head\">\n        <span class=\"mld-av\">{{ initials(l.owner) }}</span>\n\n        <div class=\"mld-head-txt\">\n          <b>{{ l.owner }}</b>\n          <em>{{ l.leadId }} · {{ l.type }} · {{ l.city }}, {{ l.district }}</em>\n        </div>\n\n        <div class=\"mld-head-tags\">\n          <span class=\"mld-pri\" [class]=\"'mld-pri ' + priorityClass(l.priority)\">\n            <i class=\"mld-dot\"></i>{{ l.priority }} priority\n          </span>\n          <span class=\"mld-stage\" [class]=\"'mld-stage ' + stageClass(l.stage)\">{{ l.stage }}</span>\n          <span class=\"mld-warn\" *ngIf=\"isStale\">\n            <i class=\"material-icons\">schedule</i>{{ l.ageDays }} days, no visit\n          </span>\n        </div>\n      </section>\n\n      <!-- the stage, drawn as the pipeline it is -->\n      <section class=\"mld-card\">\n        <h4>Stage</h4>\n\n        <ol class=\"mld-pipe\" *ngIf=\"!isLost\">\n          <li *ngFor=\"let s of pipeline; let i = index\" [class]=\"'st ' + stageState(s)\">\n            <i class=\"mld-node\">\n              <i class=\"material-icons\" *ngIf=\"stageState(s) === 'done'\">check</i>\n              <ng-container *ngIf=\"stageState(s) !== 'done'\">{{ i + 1 }}</ng-container>\n            </i>\n            <span>{{ s }}</span>\n          </li>\n        </ol>\n\n        <div class=\"mld-lost\" *ngIf=\"isLost\">\n          <i class=\"material-icons\">cancel</i>\n          <div>\n            <b>Lead lost</b>\n            <em>Closed after {{ l.ageDays }} days · {{ l.checkins }} site visit(s) · {{ l.followups.length }} follow-up(s)</em>\n          </div>\n        </div>\n      </section>\n\n      <!-- the numbers -->\n      <section class=\"mld-stats\">\n        <article>\n          <u>Covered area</u>\n          <b>{{ inr(l.sizeSqft) }}<s> sq ft</s></b>\n          <em>₹ {{ ratePerSqft }} per sq ft</em>\n        </article>\n        <article>\n          <u>Estimated value</u>\n          <b>₹ {{ lakh(l.estValue) }}<s> L</s></b>\n          <em *ngIf=\"won\">₹ {{ lakh(l.orderValue) }} L booked</em>\n          <em *ngIf=\"!won\">quotation shared</em>\n        </article>\n        <article>\n          <u>Age</u>\n          <b [class.warn]=\"isStale\">{{ l.ageDays }}<s> days</s></b>\n          <em>created {{ l.createdOn }}</em>\n        </article>\n        <article>\n          <u>Next follow-up</u>\n          <b class=\"sm\">{{ nextFollowup }}</b>\n          <em>{{ l.followups.length }} done · {{ l.checkins }} visits</em>\n        </article>\n      </section>\n\n      <!-- what the lead actually wants -->\n      <section class=\"mld-card\">\n        <h4>Requirement</h4>\n        <p class=\"mld-purpose\">{{ l.purpose }}</p>\n\n        <ul class=\"mld-facts inline\">\n          <li><u>Estimated delivery</u><p>{{ l.estDelivery }}</p></li>\n          <li><u>Source</u><p>{{ l.source }}</p></li>\n          <li><u>Referral by</u><p>{{ l.referral }}</p></li>\n          <li><u>Last site visit</u><p>{{ l.lastCheckin }}</p></li>\n        </ul>\n      </section>\n\n      <!-- one trail instead of check-in, follow-up, order and gallery tabs -->\n      <section class=\"mld-card\">\n        <h4>Activity</h4>\n        <ol class=\"mld-timeline\">\n          <li *ngFor=\"let e of l.events\">\n            <i class=\"mld-tlnode\" [class]=\"'mld-tlnode ' + e.kind\">\n              <i class=\"material-icons\">{{ eventIcon(e.kind) }}</i>\n            </i>\n            <span class=\"mld-tl-date\">{{ e.date }}</span>\n            <span class=\"mld-tl-body\">\n              <b>{{ e.title }}</b>\n              <em>{{ e.sub }}</em>\n            </span>\n          </li>\n        </ol>\n      </section>\n\n      <!-- follow-up notes, which were their own tab -->\n      <section class=\"mld-card\">\n        <div class=\"mld-card-head\">\n          <h4>Follow-ups</h4>\n          <span class=\"mld-count\">{{ l.followups.length }}</span>\n        </div>\n\n        <ul class=\"mld-follow\" *ngIf=\"l.followups.length > 0\">\n          <li *ngFor=\"let f of l.followups\">\n            <span class=\"mld-f-top\">\n              <b>{{ f.by }}</b>\n              <em>{{ f.date }}</em>\n            </span>\n            <p>{{ f.note }}</p>\n            <span class=\"mld-f-next\"><i class=\"material-icons\">event</i>Next: {{ f.next }}</span>\n          </li>\n        </ul>\n\n        <p class=\"mld-none\" *ngIf=\"l.followups.length === 0\">No follow-ups recorded yet.</p>\n      </section>\n    </div>\n\n    <!-- ==================================================================\n         Rail\n         ================================================================== -->\n    <aside class=\"mld-side\">\n\n      <div class=\"mld-card\">\n        <h4>Contact</h4>\n        <ul class=\"mld-facts\">\n          <li><i class=\"material-icons\">business</i><span><u>Site</u><p>{{ l.owner }}</p></span></li>\n          <li><i class=\"material-icons\">call</i><span><u>Mobile</u><p class=\"mono\">{{ l.mobile }}</p></span></li>\n          <li><i class=\"material-icons\">place</i><span><u>Address</u><p>{{ l.address }}, {{ l.city }}, {{ l.district }}</p></span></li>\n        </ul>\n      </div>\n\n      <div class=\"mld-card\">\n        <h4>Ownership</h4>\n        <ul class=\"mld-keys\">\n          <li><span>Assigned to</span><b>{{ l.assignedTo }}</b></li>\n          <li><span>Reporting manager</span><b>{{ l.manager }}</b></li>\n          <li><span>Created by</span><b>{{ l.createdBy }}</b></li>\n          <li class=\"muted\"><span>Created on</span><b>{{ l.createdOn }}</b></li>\n        </ul>\n      </div>\n\n      <div class=\"mld-card\">\n        <h4>Engagement</h4>\n        <ul class=\"mld-keys\">\n          <li><span>Site visits</span><b>{{ l.checkins }}</b></li>\n          <li><span>Follow-ups</span><b>{{ l.followups.length }}</b></li>\n          <li><span>Photos</span><b>{{ l.gallery }}</b></li>\n          <li><span>Days open</span><b>{{ l.ageDays }}</b></li>\n        </ul>\n      </div>\n\n      <div class=\"mld-card\" *ngIf=\"l.gallery > 0\">\n        <h4>Site photos</h4>\n        <div class=\"mld-shots\">\n          <span class=\"mld-shot\" *ngFor=\"let g of [].constructor(l.gallery)\">\n            <i class=\"material-icons\">image</i>\n          </span>\n        </div>\n      </div>\n    </aside>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/magnus-lead/magnus-lead-detail.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/magnus-lead/magnus-lead-detail.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  --l-surface: var(--surface-card);\n  --l-canvas: var(--grey);\n  --l-hairline: var(--border-light);\n  --l-rule: var(--bodrColor);\n  --l-ink: var(--text);\n  --l-ink-2: var(--text-secondary);\n  --l-ink-3: var(--text-muted);\n  --l-red: var(--primary);\n  --l-red-soft: var(--primary-light);\n  --l-green: var(--success);\n  --l-green-soft: var(--success-light);\n  --l-amber: var(--warning);\n  --l-amber-soft: var(--warning-light);\n  display: block;\n  height: 100%;\n}\n\n:host .main-container {\n  display: flex;\n  flex-direction: column;\n}\n\n:host .tools-container {\n  flex: 0 0 auto;\n  position: relative;\n}\n\n.mld-back {\n  border: 0;\n  background: transparent;\n  cursor: pointer;\n  width: 32px;\n  height: 32px;\n  border-radius: 8px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: var(--l-ink-2);\n  margin-right: 4px;\n  transition: background 0.13s cubic-bezier(0.4, 0, 0.2, 1);\n}\n\n.mld-back i {\n  font-size: 19px;\n}\n\n.mld-back:hover {\n  background: var(--l-canvas);\n  color: var(--l-ink);\n}\n\n.mld-nav {\n  display: inline-flex;\n  align-items: center;\n  background: var(--l-surface);\n  border: 1px solid var(--l-hairline);\n  border-radius: 8px;\n  overflow: hidden;\n}\n\n.mld-nav button {\n  border: 0;\n  background: transparent;\n  width: 30px;\n  height: 32px;\n  cursor: pointer;\n  color: var(--l-ink-2);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  transition: background 0.13s cubic-bezier(0.4, 0, 0.2, 1);\n}\n\n.mld-nav button i {\n  font-size: 19px;\n}\n\n.mld-nav button:hover:not(:disabled) {\n  background: var(--l-canvas);\n  color: var(--l-ink);\n}\n\n.mld-nav button:disabled {\n  opacity: 0.3;\n  cursor: not-allowed;\n}\n\n.mld-nav > span {\n  font-size: 12px;\n  color: var(--l-ink-2);\n  padding: 0 9px;\n  font-variant-numeric: tabular-nums;\n  white-space: nowrap;\n}\n\n.mld {\n  flex: 1 1 auto;\n  min-height: 0;\n  display: grid;\n  grid-template-columns: minmax(0, 1fr) 310px;\n  gap: 12px;\n  padding: 0 16px 16px 16px;\n  background: var(--l-canvas);\n  overflow-y: auto;\n}\n\n.mld-main {\n  min-width: 0;\n}\n\n.mld-side {\n  min-width: 0;\n  align-self: start;\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n}\n\n.mld-card {\n  background: var(--l-surface);\n  border: 1px solid var(--l-hairline);\n  border-radius: 12px;\n  padding: 15px;\n  margin-bottom: 10px;\n}\n\n.mld-card h4 {\n  font-size: 11px;\n  font-weight: 600;\n  letter-spacing: 0.06em;\n  text-transform: uppercase;\n  color: var(--l-ink-3);\n  margin-bottom: 13px;\n}\n\n.mld-side .mld-card {\n  margin-bottom: 0;\n}\n\n.mld-card-head {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 12px;\n  margin-bottom: 13px;\n}\n\n.mld-card-head h4 {\n  margin-bottom: 0;\n}\n\n.mld-count {\n  font-size: 11px;\n  font-weight: 600;\n  color: var(--l-ink-2);\n  background: var(--l-canvas);\n  border-radius: 9999px;\n  padding: 2px 9px;\n  font-variant-numeric: tabular-nums;\n}\n\n.mld-head {\n  display: flex;\n  align-items: center;\n  gap: 13px;\n  flex-wrap: wrap;\n}\n\n.mld-av {\n  width: 46px;\n  height: 46px;\n  border-radius: 12px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 14px;\n  font-weight: 600;\n  color: var(--l-ink-2);\n  background: var(--l-canvas);\n  box-shadow: 0 0 0 1px var(--l-rule);\n  flex-shrink: 0;\n}\n\n.mld-head-txt {\n  flex: 1;\n  min-width: 180px;\n}\n\n.mld-head-txt b {\n  display: block;\n  font-size: 17px;\n  font-weight: 700;\n  letter-spacing: -0.02em;\n  color: var(--l-ink);\n}\n\n.mld-head-txt em {\n  display: block;\n  font-style: normal;\n  font-size: 12.5px;\n  color: var(--l-ink-3);\n  margin-top: 2px;\n}\n\n.mld-head-tags {\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 7px;\n}\n\n.mld-pri {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  font-size: 12px;\n  white-space: nowrap;\n}\n\n.mld-pri .mld-dot {\n  width: 6px;\n  height: 6px;\n  border-radius: 50%;\n  background: currentColor;\n}\n\n.mld-pri.high {\n  color: var(--l-red);\n}\n\n.mld-pri.med {\n  color: var(--l-amber);\n}\n\n.mld-pri.low {\n  color: var(--l-ink-3);\n}\n\n.mld-stage {\n  display: inline-block;\n  font-size: 11.5px;\n  font-weight: 500;\n  border-radius: 7px;\n  padding: 4px 10px;\n  white-space: nowrap;\n  background: var(--l-canvas);\n  color: var(--l-ink-2);\n}\n\n.mld-stage.open {\n  background: var(--l-canvas);\n  color: var(--l-ink);\n}\n\n.mld-stage.pending {\n  background: var(--l-amber-soft);\n  color: var(--l-amber);\n}\n\n.mld-stage.won {\n  background: var(--l-green-soft);\n  color: var(--l-green);\n}\n\n.mld-stage.lost {\n  background: var(--l-red-soft);\n  color: var(--l-red);\n}\n\n.mld-warn {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  font-size: 11.5px;\n  font-weight: 500;\n  color: var(--l-amber);\n  background: var(--l-amber-soft);\n  border-radius: 7px;\n  padding: 4px 10px;\n  white-space: nowrap;\n}\n\n.mld-warn i {\n  font-size: 13px;\n}\n\n.mld-pipe {\n  list-style: none;\n  display: flex;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 4px;\n}\n\n.mld-pipe li {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  flex: 1;\n  min-width: 120px;\n  position: relative;\n}\n\n.mld-pipe li:not(:last-child)::after {\n  content: \"\";\n  flex: 1;\n  height: 2px;\n  background: var(--l-hairline);\n  border-radius: 2px;\n}\n\n.mld-pipe li span {\n  font-size: 12.5px;\n  color: var(--l-ink-3);\n  white-space: nowrap;\n}\n\n.mld-pipe li.done::after {\n  background: var(--l-green);\n}\n\n.mld-pipe li.done span {\n  color: var(--l-ink-2);\n}\n\n.mld-pipe li.done .mld-node {\n  background: var(--l-green);\n  color: #ffffff;\n  box-shadow: none;\n}\n\n.mld-pipe li.now span {\n  color: var(--l-ink);\n  font-weight: 600;\n}\n\n.mld-pipe li.now .mld-node {\n  background: var(--l-ink);\n  color: #ffffff;\n  box-shadow: none;\n}\n\n.mld-node {\n  width: 26px;\n  height: 26px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 11px;\n  font-weight: 600;\n  font-style: normal;\n  color: var(--l-ink-3);\n  background: var(--l-surface);\n  box-shadow: 0 0 0 1.5px var(--l-rule);\n  flex-shrink: 0;\n}\n\n.mld-node i.material-icons {\n  font-size: 15px;\n}\n\n.mld-lost {\n  display: flex;\n  align-items: flex-start;\n  gap: 11px;\n  background: var(--l-red-soft);\n  border-radius: 10px;\n  padding: 12px 13px;\n}\n\n.mld-lost > i {\n  font-size: 20px;\n  color: var(--l-red);\n}\n\n.mld-lost b {\n  display: block;\n  font-size: 13.5px;\n  font-weight: 600;\n  color: var(--l-red);\n  margin-bottom: 2px;\n}\n\n.mld-lost em {\n  font-style: normal;\n  font-size: 12px;\n  color: var(--l-ink-2);\n  line-height: 1.5;\n}\n\n.mld-stats {\n  display: grid;\n  grid-template-columns: repeat(4, minmax(0, 1fr));\n  gap: 10px;\n  margin-bottom: 10px;\n}\n\n.mld-stats article {\n  background: var(--l-surface);\n  border: 1px solid var(--l-hairline);\n  border-radius: 11px;\n  padding: 12px 13px;\n  min-width: 0;\n}\n\n.mld-stats article u {\n  display: block;\n  text-decoration: none;\n  font-size: 11.5px;\n  color: var(--l-ink-2);\n  margin-bottom: 5px;\n  white-space: nowrap;\n}\n\n.mld-stats article b {\n  display: block;\n  font-size: 20px;\n  font-weight: 700;\n  letter-spacing: -0.03em;\n  color: var(--l-ink);\n  line-height: 1.2;\n  font-variant-numeric: tabular-nums;\n}\n\n.mld-stats article b.sm {\n  font-size: 15px;\n  letter-spacing: -0.02em;\n}\n\n.mld-stats article b.warn {\n  color: var(--l-amber);\n}\n\n.mld-stats article b s {\n  text-decoration: none;\n  font-size: 12.5px;\n  font-weight: 500;\n  color: var(--l-ink-3);\n}\n\n.mld-stats article em {\n  display: block;\n  font-style: normal;\n  font-size: 11px;\n  color: var(--l-ink-3);\n  margin-top: 5px;\n  line-height: 1.4;\n}\n\n.mld-purpose {\n  font-size: 14px;\n  line-height: 1.6;\n  color: var(--l-ink);\n  padding-bottom: 13px;\n  margin-bottom: 4px;\n  border-bottom: 1px solid var(--l-hairline);\n}\n\n.mld-facts {\n  list-style: none;\n}\n\n.mld-facts li {\n  display: flex;\n  align-items: flex-start;\n  gap: 9px;\n  padding: 8px 0;\n}\n\n.mld-facts li + li {\n  border-top: 1px solid var(--l-hairline);\n}\n\n.mld-facts li > i {\n  font-size: 16px;\n  color: var(--l-ink-3);\n  flex-shrink: 0;\n  margin-top: 1px;\n}\n\n.mld-facts li span {\n  min-width: 0;\n}\n\n.mld-facts li u {\n  display: block;\n  text-decoration: none;\n  font-size: 11px;\n  color: var(--l-ink-3);\n  margin-bottom: 2px;\n}\n\n.mld-facts li p {\n  font-size: 12.5px;\n  color: var(--l-ink);\n  line-height: 1.45;\n  word-break: break-word;\n}\n\n.mld-facts li p.mono {\n  font-variant-numeric: tabular-nums;\n}\n\n.mld-facts.inline {\n  display: grid;\n  grid-template-columns: repeat(4, minmax(0, 1fr));\n  gap: 0 16px;\n}\n\n.mld-facts.inline li {\n  display: block;\n  border-top: 0 !important;\n  padding: 9px 0 0;\n}\n\n.mld-keys {\n  list-style: none;\n}\n\n.mld-keys li {\n  display: flex;\n  align-items: center;\n  gap: 9px;\n  padding: 7px 0;\n  font-size: 13px;\n  color: var(--l-ink-2);\n}\n\n.mld-keys li + li {\n  border-top: 1px solid var(--l-hairline);\n}\n\n.mld-keys li span {\n  flex: 1;\n  min-width: 0;\n}\n\n.mld-keys li b {\n  font-weight: 600;\n  color: var(--l-ink);\n  font-variant-numeric: tabular-nums;\n  text-align: right;\n  max-width: 60%;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n.mld-keys li.muted b {\n  font-weight: 400;\n  color: var(--l-ink-3);\n}\n\n.mld-timeline {\n  list-style: none;\n}\n\n.mld-timeline li {\n  position: relative;\n  display: grid;\n  grid-template-columns: 28px 96px minmax(0, 1fr);\n  gap: 11px;\n  align-items: flex-start;\n  padding: 9px 0;\n}\n\n.mld-timeline li:not(:last-child)::before {\n  content: \"\";\n  position: absolute;\n  left: 13px;\n  top: 35px;\n  bottom: -9px;\n  width: 1px;\n  background: var(--l-hairline);\n}\n\n.mld-tlnode {\n  width: 27px;\n  height: 27px;\n  border-radius: 50%;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  background: var(--l-canvas);\n  box-shadow: 0 0 0 1px var(--l-rule);\n  z-index: 1;\n}\n\n.mld-tlnode i.material-icons {\n  font-size: 14px;\n  color: var(--l-ink-2);\n}\n\n.mld-tlnode.order i {\n  color: var(--l-green);\n}\n\n.mld-tlnode.visit i {\n  color: var(--l-ink);\n}\n\n.mld-tlnode.stage i {\n  color: var(--l-red);\n}\n\n.mld-tl-date {\n  font-size: 12px;\n  color: var(--l-ink-3);\n  padding-top: 5px;\n  white-space: nowrap;\n  font-variant-numeric: tabular-nums;\n}\n\n.mld-tl-body {\n  min-width: 0;\n  padding-top: 3px;\n}\n\n.mld-tl-body b {\n  display: block;\n  font-size: 13.5px;\n  font-weight: 500;\n  color: var(--l-ink);\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n.mld-tl-body em {\n  display: block;\n  font-style: normal;\n  font-size: 12px;\n  color: var(--l-ink-3);\n  margin-top: 2px;\n}\n\n.mld-follow {\n  list-style: none;\n}\n\n.mld-follow li {\n  padding: 11px 0;\n}\n\n.mld-follow li + li {\n  border-top: 1px solid var(--l-hairline);\n}\n\n.mld-follow li p {\n  font-size: 13px;\n  line-height: 1.55;\n  color: var(--l-ink-2);\n  border-left: 2px solid var(--l-rule);\n  padding-left: 10px;\n  margin: 6px 0;\n}\n\n.mld-f-top {\n  display: flex;\n  align-items: baseline;\n  justify-content: space-between;\n  gap: 10px;\n}\n\n.mld-f-top b {\n  font-size: 13px;\n  font-weight: 600;\n  color: var(--l-ink);\n}\n\n.mld-f-top em {\n  font-style: normal;\n  font-size: 11.5px;\n  color: var(--l-ink-3);\n}\n\n.mld-f-next {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  font-size: 11.5px;\n  color: var(--l-ink-3);\n}\n\n.mld-f-next i {\n  font-size: 13px;\n}\n\n.mld-none {\n  font-size: 13px;\n  color: var(--l-ink-3);\n}\n\n.mld-shots {\n  display: flex;\n  gap: 6px;\n  flex-wrap: wrap;\n}\n\n.mld-shot {\n  width: 52px;\n  height: 52px;\n  border-radius: 9px;\n  background: var(--l-canvas);\n  border: 1px solid var(--l-rule);\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.mld-shot i {\n  font-size: 19px;\n  color: var(--l-ink-3);\n}\n\n@media only screen and (max-width: 1400px) {\n  .mld-stats {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n  .mld-facts.inline {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n}\n\n@media only screen and (max-width: 1180px) {\n  .mld {\n    grid-template-columns: minmax(0, 1fr);\n  }\n}\n\n@media only screen and (max-width: 760px) {\n  .mld {\n    padding: 0 12px 12px 12px;\n  }\n  .mld-facts.inline {\n    grid-template-columns: minmax(0, 1fr);\n  }\n  .mld-pipe li {\n    min-width: 100%;\n  }\n  .mld-pipe li::after {\n    display: none;\n  }\n  .mld-timeline li {\n    grid-template-columns: 28px minmax(0, 1fr);\n  }\n  .mld-tl-date {\n    grid-column: 2;\n    padding-top: 0;\n  }\n}"

/***/ }),

/***/ "./src/app/magnus-lead/magnus-lead-detail.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/magnus-lead/magnus-lead-detail.component.ts ***!
  \*************************************************************/
/*! exports provided: MagnusLeadDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MagnusLeadDetailComponent", function() { return MagnusLeadDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _lead_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lead-data */ "./src/app/magnus-lead/lead-data.ts");




// ============================================================================
// MAGNUS PLYWOOD - Lead detail
//
// The original page split a single lead across six tabs: Profile, Check-in,
// Check-in map, Follow-up, Order and Gallery. A lead is a short story - it
// came in, someone visited, a quote went out, it was followed up, it closed -
// and that story was cut into six pieces.
//
// Here the stage runs across the top as a pipeline, the requirement and the
// numbers sit under it, and every check-in, follow-up, quote and order lands
// on one timeline in order. Contact and ownership move to the rail.
//
// Demo mock: no HTTP calls.
// ============================================================================
var MagnusLeadDetailComponent = /** @class */ (function () {
    function MagnusLeadDetailComponent(route, router) {
        this.route = route;
        this.router = router;
        this.all = [];
        this.l = null;
        // The pipeline a lead walks through; Lost is shown separately because it
        // is an exit, not a step.
        this.pipeline = ['Pending', 'Open', 'Win-F', 'Win-C'];
        // ==========================================================================
        // Template helpers
        // ==========================================================================
        this.initials = _lead_data__WEBPACK_IMPORTED_MODULE_3__["initials"];
        this.inr = _lead_data__WEBPACK_IMPORTED_MODULE_3__["inr"];
        this.lakh = _lead_data__WEBPACK_IMPORTED_MODULE_3__["lakh"];
    }
    MagnusLeadDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.all = Object(_lead_data__WEBPACK_IMPORTED_MODULE_3__["buildLeads"])();
        this.route.paramMap.subscribe(function (m) {
            var id = m.get('id');
            var found = _this.all.filter(function (x) { return x.id === id; });
            _this.l = found.length ? found[0] : _this.all[0];
        });
    };
    Object.defineProperty(MagnusLeadDetailComponent.prototype, "idx", {
        // ==========================================================================
        // Navigation
        // ==========================================================================
        get: function () {
            for (var i = 0; i < this.all.length; i++) {
                if (this.all[i].id === this.l.id) {
                    return i;
                }
            }
            return 0;
        },
        enumerable: true,
        configurable: true
    });
    MagnusLeadDetailComponent.prototype.step = function (d) {
        var n = this.idx + d;
        if (n < 0 || n > this.all.length - 1) {
            return;
        }
        this.router.navigate(['/lead-list', 'detail', this.all[n].id]);
    };
    MagnusLeadDetailComponent.prototype.back = function () { this.router.navigate(['/lead-list']); };
    Object.defineProperty(MagnusLeadDetailComponent.prototype, "isLost", {
        // ==========================================================================
        // Stage
        // ==========================================================================
        get: function () { return this.l.stage === 'Lost'; },
        enumerable: true,
        configurable: true
    });
    MagnusLeadDetailComponent.prototype.stageIndex = function (s) {
        for (var i = 0; i < this.pipeline.length; i++) {
            if (this.pipeline[i] === s) {
                return i;
            }
        }
        return -1;
    };
    Object.defineProperty(MagnusLeadDetailComponent.prototype, "currentIndex", {
        get: function () {
            return this.isLost ? -1 : this.stageIndex(this.l.stage);
        },
        enumerable: true,
        configurable: true
    });
    MagnusLeadDetailComponent.prototype.stageState = function (s) {
        if (this.isLost) {
            return 'idle';
        }
        var i = this.stageIndex(s);
        if (i < this.currentIndex) {
            return 'done';
        }
        if (i === this.currentIndex) {
            return 'now';
        }
        return 'idle';
    };
    Object.defineProperty(MagnusLeadDetailComponent.prototype, "won", {
        // ==========================================================================
        // Derived figures
        // ==========================================================================
        get: function () { return this.l.stage === 'Win-F' || this.l.stage === 'Win-C'; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MagnusLeadDetailComponent.prototype, "ratePerSqft", {
        get: function () {
            return Math.round(this.l.estValue / this.l.sizeSqft);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MagnusLeadDetailComponent.prototype, "nextFollowup", {
        get: function () {
            if (!this.l.followups.length) {
                return '—';
            }
            return this.l.followups[this.l.followups.length - 1].next;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MagnusLeadDetailComponent.prototype, "isStale", {
        get: function () {
            return (this.l.stage === 'Open' || this.l.stage === 'Pending') &&
                this.l.ageDays > 14 && this.l.checkins === 0;
        },
        enumerable: true,
        configurable: true
    });
    MagnusLeadDetailComponent.prototype.stageClass = function (s) {
        return s === 'Open' ? 'open'
            : s === 'Pending' ? 'pending'
                : s === 'Lost' ? 'lost' : 'won';
    };
    MagnusLeadDetailComponent.prototype.priorityClass = function (p) {
        return p === 'High' ? 'high' : p === 'Medium' ? 'med' : 'low';
    };
    MagnusLeadDetailComponent.prototype.eventIcon = function (k) {
        return k === 'created' ? 'flag'
            : k === 'visit' ? 'place'
                : k === 'followup' ? 'call'
                    : k === 'quote' ? 'description'
                        : k === 'order' ? 'shopping_cart'
                            : 'cancel';
    };
    MagnusLeadDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-magnus-lead-detail',
            template: __webpack_require__(/*! ./magnus-lead-detail.component.html */ "./src/app/magnus-lead/magnus-lead-detail.component.html"),
            styles: [__webpack_require__(/*! ./magnus-lead-detail.component.scss */ "./src/app/magnus-lead/magnus-lead-detail.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], MagnusLeadDetailComponent);
    return MagnusLeadDetailComponent;
}());



/***/ }),

/***/ "./src/app/magnus-lead/magnus-lead-list.component.html":
/*!*************************************************************!*\
  !*** ./src/app/magnus-lead/magnus-lead-list.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-container\">\n\n  <div class=\"tools-container\">\n    <h2>Lead List</h2>\n\n    <div class=\"left-auto df ac flex-gap-10\">\n      <span class=\"mgl-chip\">{{ list.length }} of {{ total }}</span>\n      <span class=\"mgl-chip alert\" *ngIf=\"staleCount > 0\">\n        <i class=\"material-icons\">schedule</i>{{ staleCount }} stalling\n      </span>\n      <button mat-icon-button matTooltip=\"Add lead\"><i class=\"material-icons\">add</i></button>\n      <button mat-icon-button matTooltip=\"Export\"><i class=\"material-icons\">file_download</i></button>\n      <button mat-icon-button matTooltip=\"Refresh\"><i class=\"material-icons\">refresh</i></button>\n    </div>\n  </div>\n\n  <div class=\"mgl\">\n\n    <!-- ==================================================================\n         Pipeline at a glance\n         ================================================================== -->\n    <section class=\"mgl-kpis\">\n      <article>\n        <u>Open pipeline</u>\n        <b>{{ openCount }}</b>\n        <em>₹ {{ lakh(pipelineValue) }} L estimated</em>\n      </article>\n      <article>\n        <u>Won</u>\n        <b>{{ wonCount }}</b>\n        <em>₹ {{ lakh(wonValue) }} L booked</em>\n      </article>\n      <article>\n        <u>Win rate</u>\n        <b>{{ winRate }}<s>%</s></b>\n        <span class=\"mgl-meter\"><i [style.width.%]=\"winRate\"></i></span>\n        <em>of {{ wonCount + lostCount }} closed leads</em>\n      </article>\n      <article [class.flag]=\"staleCount > 0\">\n        <u>Stalling</u>\n        <b>{{ staleCount }}</b>\n        <em>open 14+ days, no site visit</em>\n      </article>\n    </section>\n\n    <!-- search + stage filters -->\n    <section class=\"mgl-bar\">\n      <div class=\"mgl-search\">\n        <i class=\"material-icons\">search</i>\n        <input type=\"text\" placeholder=\"Search lead ID, site, city, mobile or owner\"\n               [(ngModel)]=\"search\" name=\"mglSearch\" autocomplete=\"off\">\n        <button class=\"mgl-x\" *ngIf=\"search\" (click)=\"clearSearch()\" aria-label=\"Clear\">\n          <i class=\"material-icons\">close</i>\n        </button>\n      </div>\n\n      <!-- the five status tabs, kept as filters so the counts stay visible -->\n      <div class=\"mgl-filters\">\n        <button [class.on]=\"stage === 'all'\" (click)=\"stage = 'all'\">All <u>{{ countFor('all') }}</u></button>\n        <button *ngFor=\"let s of stages\"\n                [class]=\"'st-' + stageClass(s)\"\n                [class.on]=\"stage === s\"\n                (click)=\"stage = s\">\n          {{ s }} <u>{{ countFor(s) }}</u>\n        </button>\n      </div>\n\n      <div class=\"mgl-sort\">\n        <span>Priority</span>\n        <button [class.on]=\"priority === 'all'\" (click)=\"priority = 'all'\">Any</button>\n        <button [class.on]=\"priority === 'High'\" (click)=\"priority = 'High'\">High</button>\n        <button [class.on]=\"priority === 'Medium'\" (click)=\"priority = 'Medium'\">Med</button>\n        <button [class.on]=\"priority === 'Low'\" (click)=\"priority = 'Low'\">Low</button>\n      </div>\n    </section>\n\n    <!-- ==================================================================\n         The table\n         ================================================================== -->\n    <section class=\"mgl-sheet\">\n      <div class=\"mgl-scroll\">\n        <table class=\"mgl-table\">\n          <thead>\n            <tr>\n              <th class=\"w-sn\">#</th>\n\n              <th class=\"sortable\" (click)=\"toggleSort('leadId')\" [class.on]=\"sortKey === 'leadId'\">\n                Lead ID <i class=\"material-icons\">{{ sortIcon('leadId') }}</i>\n              </th>\n\n              <th class=\"sortable\" (click)=\"toggleSort('owner')\" [class.on]=\"sortKey === 'owner'\">\n                Site / Owner <i class=\"material-icons\">{{ sortIcon('owner') }}</i>\n              </th>\n\n              <th class=\"sortable\" (click)=\"toggleSort('city')\" [class.on]=\"sortKey === 'city'\">\n                City / District <i class=\"material-icons\">{{ sortIcon('city') }}</i>\n              </th>\n\n              <th class=\"sortable ta-r\" (click)=\"toggleSort('sizeSqft')\" [class.on]=\"sortKey === 'sizeSqft'\">\n                Size <i class=\"material-icons\">{{ sortIcon('sizeSqft') }}</i>\n              </th>\n\n              <th class=\"sortable ta-r\" (click)=\"toggleSort('estValue')\" [class.on]=\"sortKey === 'estValue'\">\n                Est. value <i class=\"material-icons\">{{ sortIcon('estValue') }}</i>\n              </th>\n\n              <th class=\"sortable\" (click)=\"toggleSort('priority')\" [class.on]=\"sortKey === 'priority'\">\n                Priority <i class=\"material-icons\">{{ sortIcon('priority') }}</i>\n              </th>\n\n              <th>Source</th>\n\n              <th class=\"sortable\" (click)=\"toggleSort('assignedTo')\" [class.on]=\"sortKey === 'assignedTo'\">\n                Assigned to <i class=\"material-icons\">{{ sortIcon('assignedTo') }}</i>\n              </th>\n\n              <th class=\"sortable ta-r\" (click)=\"toggleSort('ageDays')\" [class.on]=\"sortKey === 'ageDays'\">\n                Age <i class=\"material-icons\">{{ sortIcon('ageDays') }}</i>\n              </th>\n\n              <th>Last visit</th>\n\n              <th class=\"sortable\" (click)=\"toggleSort('estDelivery')\" [class.on]=\"sortKey === 'estDelivery'\">\n                Est. delivery <i class=\"material-icons\">{{ sortIcon('estDelivery') }}</i>\n              </th>\n\n              <th>Status</th>\n              <th class=\"w-act\"></th>\n            </tr>\n          </thead>\n\n          <tbody>\n            <tr *ngFor=\"let l of list; let i = index\" (click)=\"open(l)\">\n              <td class=\"w-sn num\">{{ i + 1 }}</td>\n\n              <td class=\"num mono\">{{ l.leadId }}</td>\n\n              <td class=\"c-site\">\n                <div class=\"mgl-sitewrap\">\n                  <span class=\"mgl-av\">{{ initials(l.owner) }}</span>\n                  <span class=\"mgl-site\">\n                    <b>{{ l.owner }}</b>\n                    <em>{{ l.type }} · {{ l.mobile }}</em>\n                  </span>\n                </div>\n              </td>\n\n              <td>\n                <span class=\"mgl-two\">\n                  <b>{{ l.city }}</b>\n                  <em>{{ l.district }}</em>\n                </span>\n              </td>\n\n              <td class=\"ta-r num\">{{ inr(l.sizeSqft) }}<em class=\"mgl-unit\"> sq ft</em></td>\n\n              <td class=\"ta-r num strong\">₹ {{ lakh(l.estValue) }} L</td>\n\n              <td>\n                <span class=\"mgl-pri\" [class]=\"'mgl-pri ' + priorityClass(l.priority)\">\n                  <i class=\"mgl-dot\"></i>{{ l.priority }}\n                </span>\n              </td>\n\n              <td class=\"c-source\">{{ l.source }}</td>\n\n              <td class=\"c-assign\">{{ l.assignedTo }}</td>\n\n              <td class=\"ta-r num\">\n                <span [class.stale]=\"isStale(l)\">{{ l.ageDays }}d</span>\n              </td>\n\n              <td class=\"num\">\n                {{ l.lastCheckin }}\n                <em class=\"mgl-none\" *ngIf=\"l.checkins === 0\">no visit</em>\n              </td>\n\n              <td class=\"num\">{{ l.estDelivery }}</td>\n\n              <td>\n                <span class=\"mgl-stage\" [class]=\"'mgl-stage ' + stageClass(l.stage)\">{{ l.stage }}</span>\n              </td>\n\n              <td class=\"w-act\"><i class=\"material-icons mgl-go\">chevron_right</i></td>\n            </tr>\n          </tbody>\n        </table>\n      </div>\n\n      <div class=\"mgl-empty\" *ngIf=\"list.length === 0\">\n        <img src=\"assets/img/no-data.svg\" alt=\"\">\n        <p>No leads match this filter<span>Try a different stage or clear the search.</span></p>\n      </div>\n    </section>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/magnus-lead/magnus-lead-list.component.scss":
/*!*************************************************************!*\
  !*** ./src/app/magnus-lead/magnus-lead-list.component.scss ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  --l-surface: var(--surface-card);\n  --l-canvas: var(--grey);\n  --l-hairline: var(--border-light);\n  --l-rule: var(--bodrColor);\n  --l-ink: var(--text);\n  --l-ink-2: var(--text-secondary);\n  --l-ink-3: var(--text-muted);\n  --l-red: var(--primary);\n  --l-red-soft: var(--primary-light);\n  --l-green: var(--success);\n  --l-green-soft: var(--success-light);\n  --l-amber: var(--warning);\n  --l-amber-soft: var(--warning-light);\n  display: block;\n  height: 100%;\n}\n\n:host .main-container {\n  display: flex;\n  flex-direction: column;\n}\n\n:host .tools-container {\n  flex: 0 0 auto;\n  position: relative;\n}\n\n.mgl-chip {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  font-size: 12.5px;\n  color: var(--l-ink-2);\n  background: var(--l-surface);\n  border: 1px solid var(--l-hairline);\n  border-radius: 8px;\n  padding: 7px 11px;\n  white-space: nowrap;\n}\n\n.mgl-chip i {\n  font-size: 15px;\n}\n\n.mgl-chip.alert {\n  color: var(--l-amber);\n  background: var(--l-amber-soft);\n  border-color: transparent;\n}\n\n.mgl {\n  flex: 1 1 auto;\n  min-height: 0;\n  display: flex;\n  flex-direction: column;\n  padding: 0 16px 16px 16px;\n  background: var(--l-canvas);\n}\n\n.mgl-kpis {\n  display: grid;\n  grid-template-columns: repeat(4, minmax(0, 1fr));\n  gap: 10px;\n  margin-bottom: 10px;\n  flex: 0 0 auto;\n}\n\n.mgl-kpis article {\n  background: var(--l-surface);\n  border: 1px solid var(--l-hairline);\n  border-radius: 11px;\n  padding: 12px 13px;\n  min-width: 0;\n}\n\n.mgl-kpis article.flag {\n  border-color: rgba(176, 136, 67, 0.4);\n}\n\n.mgl-kpis article u {\n  display: block;\n  text-decoration: none;\n  font-size: 11.5px;\n  color: var(--l-ink-2);\n  margin-bottom: 5px;\n  white-space: nowrap;\n}\n\n.mgl-kpis article b {\n  display: block;\n  font-size: 22px;\n  font-weight: 700;\n  letter-spacing: -0.03em;\n  color: var(--l-ink);\n  line-height: 1.15;\n  font-variant-numeric: tabular-nums;\n}\n\n.mgl-kpis article b s {\n  text-decoration: none;\n  font-size: 13px;\n  font-weight: 500;\n  color: var(--l-ink-3);\n}\n\n.mgl-kpis article em {\n  display: block;\n  font-style: normal;\n  font-size: 11px;\n  color: var(--l-ink-3);\n  margin-top: 5px;\n  line-height: 1.4;\n}\n\n.mgl-meter {\n  display: block;\n  height: 4px;\n  margin-top: 7px;\n  border-radius: 9999px;\n  background: var(--l-hairline);\n  overflow: hidden;\n}\n\n.mgl-meter i {\n  display: block;\n  height: 100%;\n  border-radius: 9999px;\n  background: var(--l-green);\n}\n\n.mgl-bar {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  flex-wrap: wrap;\n  background: var(--l-surface);\n  border: 1px solid var(--l-hairline);\n  border-radius: 11px;\n  padding: 9px 11px;\n  margin-bottom: 10px;\n  flex: 0 0 auto;\n}\n\n.mgl-search {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  flex: 1 1 250px;\n  min-width: 0;\n  background: var(--l-canvas);\n  border: 1px solid transparent;\n  border-radius: 8px;\n  padding: 0 10px;\n  height: 34px;\n  transition: border-color 0.15s cubic-bezier(0.4, 0, 0.2, 1), background 0.15s cubic-bezier(0.4, 0, 0.2, 1);\n}\n\n.mgl-search:focus-within {\n  background: var(--l-surface);\n  border-color: var(--l-rule);\n}\n\n.mgl-search > i {\n  font-size: 17px;\n  color: var(--l-ink-3);\n}\n\n.mgl-search input {\n  flex: 1;\n  min-width: 0;\n  border: 0;\n  outline: 0;\n  background: transparent;\n  font-size: 13px;\n  color: var(--l-ink);\n}\n\n.mgl-search input::-moz-placeholder {\n  color: var(--l-ink-3);\n}\n\n.mgl-search input::placeholder {\n  color: var(--l-ink-3);\n}\n\n.mgl-x {\n  border: 0;\n  background: transparent;\n  cursor: pointer;\n  padding: 0;\n  display: flex;\n  align-items: center;\n  color: var(--l-ink-3);\n}\n\n.mgl-x i {\n  font-size: 16px;\n}\n\n.mgl-x:hover {\n  color: var(--l-ink);\n}\n\n.mgl-filters {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 4px;\n}\n\n.mgl-filters button {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  border: 0;\n  background: var(--l-canvas);\n  border-radius: 7px;\n  padding: 6px 10px;\n  font-size: 12px;\n  font-weight: 500;\n  color: var(--l-ink-2);\n  cursor: pointer;\n  white-space: nowrap;\n  transition: background 0.13s cubic-bezier(0.4, 0, 0.2, 1), color 0.13s cubic-bezier(0.4, 0, 0.2, 1);\n}\n\n.mgl-filters button u {\n  text-decoration: none;\n  font-weight: 600;\n  color: var(--l-ink-3);\n  font-variant-numeric: tabular-nums;\n}\n\n.mgl-filters button:hover {\n  color: var(--l-ink);\n}\n\n.mgl-filters button.on {\n  background: var(--l-ink);\n  color: #ffffff;\n}\n\n.mgl-filters button.on u {\n  color: rgba(255, 255, 255, 0.7);\n}\n\n.mgl-filters button.st-open.on {\n  background: var(--l-ink);\n}\n\n.mgl-filters button.st-pending.on {\n  background: var(--l-amber);\n}\n\n.mgl-filters button.st-pending.on u {\n  color: rgba(255, 255, 255, 0.85);\n}\n\n.mgl-filters button.st-won.on {\n  background: var(--l-green);\n}\n\n.mgl-filters button.st-won.on u {\n  color: rgba(255, 255, 255, 0.85);\n}\n\n.mgl-filters button.st-lost.on {\n  background: var(--l-red);\n}\n\n.mgl-filters button.st-lost.on u {\n  color: rgba(255, 255, 255, 0.85);\n}\n\n.mgl-sort {\n  display: flex;\n  align-items: center;\n  gap: 4px;\n}\n\n.mgl-sort > span {\n  font-size: 11px;\n  color: var(--l-ink-3);\n  margin-right: 2px;\n}\n\n.mgl-sort button {\n  border: 0;\n  background: transparent;\n  border-radius: 6px;\n  padding: 5px 8px;\n  font-size: 12px;\n  color: var(--l-ink-3);\n  cursor: pointer;\n  transition: background 0.13s cubic-bezier(0.4, 0, 0.2, 1), color 0.13s cubic-bezier(0.4, 0, 0.2, 1);\n}\n\n.mgl-sort button:hover {\n  background: var(--l-canvas);\n  color: var(--l-ink);\n}\n\n.mgl-sort button.on {\n  background: var(--l-canvas);\n  color: var(--l-ink);\n  font-weight: 600;\n}\n\n.mgl-sheet {\n  flex: 1 1 auto;\n  min-height: 0;\n  background: var(--l-surface);\n  border: 1px solid var(--l-hairline);\n  border-radius: 12px;\n  overflow: hidden;\n  display: flex;\n  flex-direction: column;\n}\n\n.mgl-scroll {\n  flex: 1 1 auto;\n  min-height: 0;\n  overflow: auto;\n}\n\n.mgl-table {\n  width: 100%;\n  border-collapse: separate;\n  border-spacing: 0;\n  table-layout: auto !important;\n}\n\n.mgl-table thead th {\n  position: sticky;\n  top: 0;\n  z-index: 2;\n  background: var(--l-surface);\n  font-size: 11px;\n  font-weight: 600;\n  letter-spacing: 0.05em;\n  text-transform: uppercase;\n  color: var(--l-ink-3);\n  text-align: left;\n  padding: 12px 13px;\n  border-bottom: 1px solid var(--l-rule);\n  white-space: nowrap;\n}\n\n.mgl-table thead th i {\n  font-size: 13px;\n  vertical-align: -2px;\n  margin-left: 2px;\n  opacity: 0.45;\n}\n\n.mgl-table thead th.sortable {\n  cursor: pointer;\n  -webkit-user-select: none;\n     -moz-user-select: none;\n          user-select: none;\n  transition: color 0.13s cubic-bezier(0.4, 0, 0.2, 1);\n}\n\n.mgl-table thead th.sortable:hover {\n  color: var(--l-ink);\n}\n\n.mgl-table thead th.sortable:hover i {\n  opacity: 0.8;\n}\n\n.mgl-table thead th.on {\n  color: var(--l-ink);\n}\n\n.mgl-table thead th.on i {\n  opacity: 1;\n}\n\n.mgl-table tbody td {\n  font-size: 13px;\n  color: var(--l-ink-2);\n  padding: 11px 13px;\n  border-bottom: 1px solid var(--l-hairline);\n  vertical-align: middle;\n}\n\n.mgl-table tbody tr {\n  cursor: pointer;\n  transition: background 0.12s cubic-bezier(0.4, 0, 0.2, 1);\n}\n\n.mgl-table tbody tr:hover td {\n  background: var(--l-canvas);\n}\n\n.mgl-table tbody tr:hover .mgl-go {\n  opacity: 1;\n}\n\n.mgl-table tbody tr:last-child td {\n  border-bottom: 0;\n}\n\n.mgl-table .ta-r {\n  text-align: right;\n}\n\n.mgl-table .num {\n  font-variant-numeric: tabular-nums;\n  white-space: nowrap;\n}\n\n.mgl-table .mono {\n  font-variant-numeric: tabular-nums;\n  color: var(--l-ink-3);\n}\n\n.mgl-table .strong {\n  color: var(--l-ink);\n  font-weight: 600;\n}\n\n.mgl-table .w-sn {\n  width: 44px;\n  color: var(--l-ink-3);\n}\n\n.mgl-table .w-act {\n  width: 34px;\n  text-align: right;\n}\n\n.c-site {\n  min-width: 230px;\n}\n\n.mgl-sitewrap {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  min-width: 0;\n}\n\n.mgl-av {\n  width: 32px;\n  height: 32px;\n  border-radius: 9px;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  font-size: 11px;\n  font-weight: 600;\n  color: var(--l-ink-2);\n  background: var(--l-canvas);\n  box-shadow: 0 0 0 1px var(--l-rule);\n  flex-shrink: 0;\n}\n\n.mgl-site {\n  min-width: 0;\n  max-width: 220px;\n}\n\n.mgl-site b {\n  display: block;\n  font-size: 13px;\n  font-weight: 600;\n  color: var(--l-ink);\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n.mgl-site em {\n  display: block;\n  font-style: normal;\n  font-size: 11px;\n  color: var(--l-ink-3);\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n.mgl-two {\n  display: block;\n  min-width: 0;\n}\n\n.mgl-two b {\n  display: block;\n  font-size: 13px;\n  font-weight: 500;\n  color: var(--l-ink);\n  white-space: nowrap;\n}\n\n.mgl-two em {\n  display: block;\n  font-style: normal;\n  font-size: 11.5px;\n  color: var(--l-ink-3);\n  white-space: nowrap;\n}\n\n.c-source, .c-assign {\n  max-width: 140px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n.mgl-unit {\n  font-style: normal;\n  font-size: 11px;\n  color: var(--l-ink-3);\n}\n\n.mgl-pri {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  font-size: 12px;\n  white-space: nowrap;\n}\n\n.mgl-pri .mgl-dot {\n  width: 6px;\n  height: 6px;\n  border-radius: 50%;\n  background: currentColor;\n}\n\n.mgl-pri.high {\n  color: var(--l-red);\n}\n\n.mgl-pri.med {\n  color: var(--l-amber);\n}\n\n.mgl-pri.low {\n  color: var(--l-ink-3);\n}\n\n.mgl-stage {\n  display: inline-block;\n  font-size: 11.5px;\n  font-weight: 500;\n  border-radius: 6px;\n  padding: 3px 9px;\n  white-space: nowrap;\n  background: var(--l-canvas);\n  color: var(--l-ink-2);\n}\n\n.mgl-stage.open {\n  background: var(--l-canvas);\n  color: var(--l-ink);\n}\n\n.mgl-stage.pending {\n  background: var(--l-amber-soft);\n  color: var(--l-amber);\n}\n\n.mgl-stage.won {\n  background: var(--l-green-soft);\n  color: var(--l-green);\n}\n\n.mgl-stage.lost {\n  background: var(--l-red-soft);\n  color: var(--l-red);\n}\n\n.stale {\n  color: var(--l-amber);\n  font-weight: 600;\n}\n\n.mgl-none {\n  display: block;\n  font-style: normal;\n  font-size: 10.5px;\n  color: var(--l-ink-3);\n  margin-top: 1px;\n}\n\n.mgl-go {\n  font-size: 18px !important;\n  color: var(--l-ink-3);\n  opacity: 0;\n  vertical-align: -4px;\n  transition: opacity 0.13s cubic-bezier(0.4, 0, 0.2, 1);\n}\n\n.mgl-empty {\n  text-align: center;\n  padding: 44px 20px;\n}\n\n.mgl-empty img {\n  height: 140px;\n  margin-bottom: 12px;\n}\n\n.mgl-empty p {\n  font-size: 14px;\n  font-weight: 500;\n  color: var(--l-ink-2);\n}\n\n.mgl-empty p span {\n  display: block;\n  margin-top: 4px;\n  font-size: 13px;\n  font-weight: 400;\n  color: var(--l-ink-3);\n}\n\n@media only screen and (max-width: 1400px) {\n  .mgl-kpis {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n}\n\n@media only screen and (max-width: 760px) {\n  .mgl {\n    padding: 0 12px 12px 12px;\n  }\n  .mgl-table tbody td, .mgl-table thead th {\n    padding: 10px 11px;\n  }\n}"

/***/ }),

/***/ "./src/app/magnus-lead/magnus-lead-list.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/magnus-lead/magnus-lead-list.component.ts ***!
  \***********************************************************/
/*! exports provided: MagnusLeadListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MagnusLeadListComponent", function() { return MagnusLeadListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _lead_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lead-data */ "./src/app/magnus-lead/lead-data.ts");




// ============================================================================
// MAGNUS PLYWOOD - Lead list
//
// The original screen was five status tabs over a twenty-one column sideways
// table: date, created by, lead id, type, source, size, priority, referral by,
// owner name, mobile, estimated delivery, assigned user, reporting manager,
// purpose, city, district, address, last check-in, status and two actions.
//
// It stays a table - that is the right shape for a queue you scan - but with
// the columns a sales manager actually sorts on, and the stage tabs turned
// into filters over one list so the counts stay visible while you work.
//
// Demo mock: no HTTP calls.
// ============================================================================
var MagnusLeadListComponent = /** @class */ (function () {
    function MagnusLeadListComponent(router) {
        this.router = router;
        this.leads = [];
        this.search = '';
        this.stage = 'all';
        this.priority = 'all';
        this.sortKey = 'ageDays';
        this.sortDir = 'desc';
        this.stages = ['Pending', 'Open', 'Win-F', 'Win-C', 'Lost'];
        // ==========================================================================
        // Template helpers
        // ==========================================================================
        this.initials = _lead_data__WEBPACK_IMPORTED_MODULE_3__["initials"];
        this.inr = _lead_data__WEBPACK_IMPORTED_MODULE_3__["inr"];
        this.lakh = _lead_data__WEBPACK_IMPORTED_MODULE_3__["lakh"];
    }
    MagnusLeadListComponent.prototype.ngOnInit = function () {
        this.leads = Object(_lead_data__WEBPACK_IMPORTED_MODULE_3__["buildLeads"])();
    };
    Object.defineProperty(MagnusLeadListComponent.prototype, "list", {
        // ==========================================================================
        // Filtering
        // ==========================================================================
        get: function () {
            var _this = this;
            var q = (this.search || '').toLowerCase().trim();
            var out = this.leads.filter(function (l) {
                if (q &&
                    l.owner.toLowerCase().indexOf(q) === -1 &&
                    l.leadId.toLowerCase().indexOf(q) === -1 &&
                    l.city.toLowerCase().indexOf(q) === -1 &&
                    l.assignedTo.toLowerCase().indexOf(q) === -1 &&
                    l.mobile.indexOf(q) === -1) {
                    return false;
                }
                if (_this.priority !== 'all' && l.priority !== _this.priority) {
                    return false;
                }
                if (_this.stage !== 'all' && l.stage !== _this.stage) {
                    return false;
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
    // Numbers open on the largest value, text on A-Z
    MagnusLeadListComponent.prototype.toggleSort = function (k) {
        if (this.sortKey === k) {
            this.sortDir = this.sortDir === 'asc' ? 'desc' : 'asc';
            return;
        }
        this.sortKey = k;
        this.sortDir = (k === 'sizeSqft' || k === 'estValue' || k === 'ageDays') ? 'desc' : 'asc';
    };
    MagnusLeadListComponent.prototype.sortIcon = function (k) {
        if (this.sortKey !== k) {
            return 'unfold_more';
        }
        return this.sortDir === 'asc' ? 'arrow_upward' : 'arrow_downward';
    };
    MagnusLeadListComponent.prototype.countFor = function (s) {
        if (s === 'all') {
            return this.leads.length;
        }
        return this.leads.filter(function (l) { return l.stage === s; }).length;
    };
    MagnusLeadListComponent.prototype.clearSearch = function () { this.search = ''; };
    MagnusLeadListComponent.prototype.open = function (l) { this.router.navigate(['/lead-list', 'detail', l.id]); };
    Object.defineProperty(MagnusLeadListComponent.prototype, "total", {
        // ==========================================================================
        // Summary
        // ==========================================================================
        get: function () { return this.leads.length; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MagnusLeadListComponent.prototype, "openCount", {
        get: function () { return this.leads.filter(function (l) { return l.stage === 'Open' || l.stage === 'Pending'; }).length; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MagnusLeadListComponent.prototype, "wonCount", {
        get: function () { return this.leads.filter(function (l) { return l.stage === 'Win-F' || l.stage === 'Win-C'; }).length; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MagnusLeadListComponent.prototype, "lostCount", {
        get: function () { return this.leads.filter(function (l) { return l.stage === 'Lost'; }).length; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MagnusLeadListComponent.prototype, "winRate", {
        // Win rate is measured against closed leads only - open ones have no outcome
        get: function () {
            var closed = this.wonCount + this.lostCount;
            return closed ? Math.round((this.wonCount / closed) * 100) : 0;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MagnusLeadListComponent.prototype, "pipelineValue", {
        get: function () {
            return this.leads
                .filter(function (l) { return l.stage === 'Open' || l.stage === 'Pending'; })
                .reduce(function (a, l) { return a + l.estValue; }, 0);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MagnusLeadListComponent.prototype, "wonValue", {
        get: function () {
            return this.leads.reduce(function (a, l) { return a + l.orderValue; }, 0);
        },
        enumerable: true,
        configurable: true
    });
    // A lead with no check-in and more than a fortnight on the clock is stalling
    MagnusLeadListComponent.prototype.isStale = function (l) {
        return (l.stage === 'Open' || l.stage === 'Pending') && l.ageDays > 14 && l.checkins === 0;
    };
    Object.defineProperty(MagnusLeadListComponent.prototype, "staleCount", {
        get: function () {
            var _this = this;
            return this.leads.filter(function (l) { return _this.isStale(l); }).length;
        },
        enumerable: true,
        configurable: true
    });
    MagnusLeadListComponent.prototype.stageClass = function (s) {
        return s === 'Open' ? 'open'
            : s === 'Pending' ? 'pending'
                : s === 'Lost' ? 'lost' : 'won';
    };
    MagnusLeadListComponent.prototype.priorityClass = function (p) {
        return p === 'High' ? 'high' : p === 'Medium' ? 'med' : 'low';
    };
    MagnusLeadListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-magnus-lead-list',
            template: __webpack_require__(/*! ./magnus-lead-list.component.html */ "./src/app/magnus-lead/magnus-lead-list.component.html"),
            styles: [__webpack_require__(/*! ./magnus-lead-list.component.scss */ "./src/app/magnus-lead/magnus-lead-list.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], MagnusLeadListComponent);
    return MagnusLeadListComponent;
}());



/***/ }),

/***/ "./src/app/magnus-lead/magnus-lead.module.ts":
/*!***************************************************!*\
  !*** ./src/app/magnus-lead/magnus-lead.module.ts ***!
  \***************************************************/
/*! exports provided: MagnusLeadModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MagnusLeadModule", function() { return MagnusLeadModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/material */ "./src/app/material.ts");
/* harmony import */ var src_app_auth_component_guard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/auth-component.guard */ "./src/app/auth-component.guard.ts");
/* harmony import */ var _magnus_lead_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./magnus-lead-list.component */ "./src/app/magnus-lead/magnus-lead-list.component.ts");
/* harmony import */ var _magnus_lead_detail_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./magnus-lead-detail.component */ "./src/app/magnus-lead/magnus-lead-detail.component.ts");









// Mounted by the shell at /lead-list, so the sidebar link keeps working.
// The detail page is a child, the way the legacy site module carries its own.
var routes = [
    { path: '', component: _magnus_lead_list_component__WEBPACK_IMPORTED_MODULE_7__["MagnusLeadListComponent"], canActivate: [src_app_auth_component_guard__WEBPACK_IMPORTED_MODULE_6__["AuthComponentGuard"]], data: { expectedRole: ['1'] } },
    { path: 'detail/:id', component: _magnus_lead_detail_component__WEBPACK_IMPORTED_MODULE_8__["MagnusLeadDetailComponent"], canActivate: [src_app_auth_component_guard__WEBPACK_IMPORTED_MODULE_6__["AuthComponentGuard"]], data: { expectedRole: ['1'] } }
];
var MagnusLeadModule = /** @class */ (function () {
    function MagnusLeadModule() {
    }
    MagnusLeadModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _magnus_lead_list_component__WEBPACK_IMPORTED_MODULE_7__["MagnusLeadListComponent"],
                _magnus_lead_detail_component__WEBPACK_IMPORTED_MODULE_8__["MagnusLeadDetailComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                src_app_material__WEBPACK_IMPORTED_MODULE_5__["MaterialModule"]
            ]
        })
    ], MagnusLeadModule);
    return MagnusLeadModule;
}());



/***/ })

}]);