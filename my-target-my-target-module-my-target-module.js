(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["my-target-my-target-module-my-target-module"],{

/***/ "./src/app/my-target/my-target-module/my-target.module.ts":
/*!****************************************************************!*\
  !*** ./src/app/my-target/my-target-module/my-target.module.ts ***!
  \****************************************************************/
/*! exports provided: MyTargetModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyTargetModule", function() { return MyTargetModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/material */ "./src/app/material.ts");
/* harmony import */ var src_app_auth_component_guard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/auth-component.guard */ "./src/app/auth-component.guard.ts");
/* harmony import */ var _my_target_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../my-target.component */ "./src/app/my-target/my-target.component.ts");








var myTargetRoutes = [
    { path: "", component: _my_target_component__WEBPACK_IMPORTED_MODULE_7__["MyTargetComponent"], canActivate: [src_app_auth_component_guard__WEBPACK_IMPORTED_MODULE_6__["AuthComponentGuard"]], data: { expectedRole: ['1'] } },
];
var MyTargetModule = /** @class */ (function () {
    function MyTargetModule() {
    }
    MyTargetModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _my_target_component__WEBPACK_IMPORTED_MODULE_7__["MyTargetComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(myTargetRoutes),
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                src_app_material__WEBPACK_IMPORTED_MODULE_5__["MaterialModule"]
            ]
        })
    ], MyTargetModule);
    return MyTargetModule;
}());



/***/ }),

/***/ "./src/app/my-target/my-target.component.html":
/*!****************************************************!*\
  !*** ./src/app/my-target/my-target.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-container\">\n  <div *ngIf=\"loader\">\n    <mat-spinner class=\"loader\">\n      <div><p>Loading....</p></div>\n    </mat-spinner>\n  </div>\n\n  <div class=\"my-target-wrap\">\n    <div class=\"page-heading\">\n      <h2>User Target</h2>\n    </div>\n\n    <div class=\"filter-bar\">\n      <div class=\"filter-item\">\n        <label>User</label>\n        <select [(ngModel)]=\"selectedUserId\" (ngModelChange)=\"onUserChange()\">\n          <option *ngFor=\"let u of users\" [value]=\"u.id\">{{u.name}}</option>\n        </select>\n      </div>\n      <div class=\"filter-item\">\n        <label>Quarter</label>\n        <select [(ngModel)]=\"selectedQuarter\" (ngModelChange)=\"onQuarterChange()\">\n          <option value=\"all\">All Quarters</option>\n          <option *ngFor=\"let q of quarters\" [value]=\"q.value\">{{q.label}}</option>\n        </select>\n      </div>\n    </div>\n\n    <div class=\"chart-cards\">\n      <div class=\"chart-card\">\n        <div class=\"chart-card-head\">\n          <h3>Primary Target</h3>\n          <span class=\"pct\" *ngIf=\"total_primary_target > 0\">\n            {{ (total_primary_achv / total_primary_target * 100) | number:'1.0-0' }}% achieved\n          </span>\n        </div>\n        <div class=\"chart-card-body\">\n          <canvas id=\"primaryTargetChart\" width=\"190\" height=\"190\"></canvas>\n          <div class=\"chart-legend\">\n            <div class=\"legend-row\">\n              <span class=\"dot achieved\"></span> Achieved\n              <b>&#8377; {{total_primary_achv}}</b>\n            </div>\n            <div class=\"legend-row\">\n              <span class=\"dot target\"></span> Target\n              <b>&#8377; {{total_primary_target}}</b>\n            </div>\n          </div>\n        </div>\n      </div>\n\n      <div class=\"chart-card\">\n        <div class=\"chart-card-head\">\n          <h3>Secondary Target</h3>\n          <span class=\"pct\" *ngIf=\"total_secondary_target > 0\">\n            {{ (total_secondary_achv / total_secondary_target * 100) | number:'1.0-0' }}% achieved\n          </span>\n        </div>\n        <div class=\"chart-card-body\">\n          <canvas id=\"secondaryTargetChart\" width=\"190\" height=\"190\"></canvas>\n          <div class=\"chart-legend\">\n            <div class=\"legend-row\">\n              <span class=\"dot achieved\"></span> Achieved\n              <b>&#8377; {{total_secondary_achv}}</b>\n            </div>\n            <div class=\"legend-row\">\n              <span class=\"dot target\"></span> Target\n              <b>&#8377; {{total_secondary_target}}</b>\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"chart-card monthly-trend-card\">\n      <div class=\"chart-card-head\">\n        <h3>Month wise Target vs Achievement</h3>\n        <div class=\"toggle-group\">\n          <button type=\"button\" [class.active]=\"monthlyType == 'Primary'\" (click)=\"monthlyType = 'Primary'; onMonthlyTypeChange()\">Primary</button>\n          <button type=\"button\" [class.active]=\"monthlyType == 'Secondary'\" (click)=\"monthlyType = 'Secondary'; onMonthlyTypeChange()\">Secondary</button>\n        </div>\n      </div>\n      <div class=\"monthly-chart-wrap\">\n        <canvas id=\"monthlyTrendChart\"></canvas>\n      </div>\n    </div>\n\n    <div class=\"my-target-table-wrap\">\n      <table class=\"my-target-table\">\n        <thead>\n          <tr>\n            <th>Duration</th>\n            <th class=\"text-center\">Primary Target</th>\n            <th class=\"text-center\">Primary Achievement</th>\n            <th class=\"text-center\">Primary Balance</th>\n            <th class=\"text-center\">Secondary Target</th>\n            <th class=\"text-center\">Secondary Achievement</th>\n            <th class=\"text-center\">Secondary Balance</th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr *ngFor=\"let row of target_list\">\n            <td>{{row.date_from | date:'MMM y'}} - {{row.date_to | date:'MMM y'}}</td>\n            <td class=\"text-center\">&#8377; {{row.primary_target}}</td>\n            <td class=\"text-center\">&#8377; {{row.primary_achv}}</td>\n            <td class=\"text-center\" [ngClass]=\"{'negative': row.primary_balance < 0}\">&#8377; {{row.primary_balance}}</td>\n            <td class=\"text-center\">&#8377; {{row.secondary_target}}</td>\n            <td class=\"text-center\">&#8377; {{row.secondary_achv}}</td>\n            <td class=\"text-center\" [ngClass]=\"{'negative': row.secondary_balance < 0}\">&#8377; {{row.secondary_balance}}</td>\n          </tr>\n          <tr *ngIf=\"datanotfound && !loader\">\n            <td colspan=\"7\" class=\"text-center\">No target data found.</td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/my-target/my-target.component.scss":
/*!****************************************************!*\
  !*** ./src/app/my-target/my-target.component.scss ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".my-target-wrap {\n  height: 100%;\n  overflow-y: auto;\n  padding: 16px 20px;\n  box-sizing: border-box;\n}\n\n.page-heading {\n  margin-bottom: 16px;\n}\n\n.page-heading h2 {\n  margin: 0;\n  font-size: 20px;\n  font-weight: 600;\n}\n\n.filter-bar {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 16px;\n  margin-bottom: 20px;\n}\n\n.filter-item {\n  display: flex;\n  flex-direction: column;\n  gap: 4px;\n}\n\n.filter-item label {\n  font-size: 12px;\n  color: #777;\n}\n\n.filter-item select {\n  min-width: 220px;\n  padding: 8px 10px;\n  border: 1px solid #e0e0e0;\n  border-radius: 6px;\n  background: #fff;\n  color: #1e293b;\n  font-size: 13px;\n  outline: none;\n}\n\n.filter-item select:focus {\n  border-color: #6366f1;\n}\n\n.chart-cards {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 16px;\n  margin-bottom: 20px;\n}\n\n.chart-card {\n  flex: 1 1 320px;\n  background: #fff;\n  border: 1px solid #e0e0e0;\n  border-radius: 10px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04);\n  padding: 16px 18px;\n}\n\n.chart-card-head {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  margin-bottom: 12px;\n}\n\n.chart-card-head h3 {\n  margin: 0;\n  font-size: 15px;\n  font-weight: 600;\n  color: #334155;\n}\n\n.chart-card-head .pct {\n  font-size: 12px;\n  font-weight: 600;\n  color: #10b981;\n  background: rgba(16, 185, 129, 0.1);\n  padding: 3px 10px;\n  border-radius: 20px;\n}\n\n.chart-card-body {\n  display: flex;\n  align-items: center;\n  gap: 20px;\n}\n\n.chart-card-body canvas {\n  flex-shrink: 0;\n}\n\n.chart-legend {\n  display: flex;\n  flex-direction: column;\n  gap: 10px;\n  width: 100%;\n}\n\n.legend-row {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 13px;\n  color: #64748b;\n}\n\n.legend-row b {\n  margin-left: auto;\n  font-size: 14px;\n  color: #1e293b;\n}\n\n.legend-row .dot {\n  width: 10px;\n  height: 10px;\n  border-radius: 50%;\n  display: inline-block;\n}\n\n.legend-row .dot.achieved {\n  background: #10b981;\n}\n\n.legend-row .dot.target {\n  background: #e2e8f0;\n}\n\n.toggle-group {\n  display: flex;\n  gap: 4px;\n  background: #f1f5f9;\n  border-radius: 20px;\n  padding: 3px;\n}\n\n.toggle-group button {\n  border: none;\n  background: transparent;\n  padding: 5px 14px;\n  font-size: 12px;\n  font-weight: 600;\n  color: #64748b;\n  border-radius: 16px;\n  cursor: pointer;\n}\n\n.toggle-group button.active {\n  background: #ffffff;\n  color: #1e293b;\n  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.08);\n}\n\n.monthly-trend-card {\n  margin-bottom: 20px;\n}\n\n.monthly-chart-wrap {\n  position: relative;\n  height: 300px;\n  width: 100%;\n}\n\n.my-target-table-wrap {\n  overflow-x: auto;\n  background: #fff;\n  border: 1px solid #e0e0e0;\n  border-radius: 10px;\n  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.04);\n}\n\n.my-target-table {\n  width: 100%;\n  border-collapse: collapse;\n  min-width: 900px;\n}\n\n.my-target-table th, .my-target-table td {\n  padding: 10px 12px;\n  border-bottom: 1px solid #eee;\n  white-space: nowrap;\n}\n\n.my-target-table thead th {\n  position: sticky;\n  top: 0;\n  background: #fafafa;\n  font-size: 12px;\n  text-transform: uppercase;\n  color: #777;\n  text-align: left;\n}\n\n.my-target-table tbody tr:hover {\n  background: #f7f7f7;\n}\n\n.my-target-table .text-center {\n  text-align: center;\n}\n\n.my-target-table .negative {\n  color: #d32f2f;\n  font-weight: 600;\n}\n\n:host-context(body.dark-mode) .page-heading h2 {\n  color: #ffffff;\n}\n\n:host-context(body.dark-mode) .filter-item label {\n  color: var(--gray-500, #9a9a9a);\n}\n\n:host-context(body.dark-mode) .filter-item select {\n  background: #000000;\n  border-color: #2a2a2a;\n  color: #f5f5f5;\n}\n\n:host-context(body.dark-mode) .filter-item select option {\n  background: #000000;\n  color: #f5f5f5;\n}\n\n:host-context(body.dark-mode) .filter-item select:focus {\n  border-color: #ffffff;\n  box-shadow: 0 0 0 3px rgba(255, 255, 255, 0.06);\n}\n\n:host-context(body.dark-mode) .chart-card {\n  background: #000000;\n  border-color: #1a1a1a;\n  box-shadow: none;\n}\n\n:host-context(body.dark-mode) .chart-card-head h3 {\n  color: #f5f5f5;\n}\n\n:host-context(body.dark-mode) .pct {\n  color: #34d399;\n  background: rgba(52, 211, 153, 0.12);\n}\n\n:host-context(body.dark-mode) .legend-row {\n  color: #9a9a9a;\n}\n\n:host-context(body.dark-mode) .legend-row b {\n  color: #ffffff;\n}\n\n:host-context(body.dark-mode) .legend-row .dot.target {\n  background: #2a2a2a;\n}\n\n:host-context(body.dark-mode) .toggle-group {\n  background: #141414;\n}\n\n:host-context(body.dark-mode) .toggle-group button {\n  color: #9a9a9a;\n}\n\n:host-context(body.dark-mode) .toggle-group button.active {\n  background: #2a2a2a;\n  color: #ffffff;\n  box-shadow: none;\n}\n\n:host-context(body.dark-mode) .my-target-table-wrap {\n  background: #000000;\n  border-color: #1a1a1a;\n  box-shadow: none;\n}\n\n:host-context(body.dark-mode) .my-target-table th, :host-context(body.dark-mode) .my-target-table td {\n  border-bottom-color: #1a1a1a;\n  color: #f5f5f5;\n}\n\n:host-context(body.dark-mode) .my-target-table thead th {\n  background: #0a0a0a;\n  color: #9a9a9a;\n}\n\n:host-context(body.dark-mode) .my-target-table tbody tr:hover {\n  background: #141414;\n}\n\n:host-context(body.dark-mode) .my-target-table .negative {\n  color: #f87171;\n}"

/***/ }),

/***/ "./src/app/my-target/my-target.component.ts":
/*!**************************************************!*\
  !*** ./src/app/my-target/my-target.component.ts ***!
  \**************************************************/
/*! exports provided: MyTargetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MyTargetComponent", function() { return MyTargetComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_services_DatabaseService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/_services/DatabaseService */ "./src/_services/DatabaseService.ts");
/* harmony import */ var src_app_localstorage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/localstorage.service */ "./src/app/localstorage.service.ts");
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! chart.js */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/chart.js/dist/Chart.js");
/* harmony import */ var chart_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(chart_js__WEBPACK_IMPORTED_MODULE_4__);





var MyTargetComponent = /** @class */ (function () {
    function MyTargetComponent(serve, session) {
        this.serve = serve;
        this.session = session;
        this.loader = false;
        this.datanotfound = false;
        this.users = [];
        this.quarters = [];
        this.selectedQuarter = 'all';
        this.all_target_list = [];
        this.target_list = [];
        this.total_primary_target = 0;
        this.total_primary_achv = 0;
        this.total_secondary_target = 0;
        this.total_secondary_achv = 0;
        this.monthlyType = 'Primary';
        var login_data = this.session.getSession();
        this.user_id = login_data.value && login_data.value.data ? login_data.value.data.id : '';
    }
    MyTargetComponent.prototype.ngOnInit = function () {
        this.getMyTargetList();
    };
    // TEMP: backend "Target/targetList" is slow (N+1 achievement queries per row).
    // Using demo data for now so the page loads instantly and can show a user-wise +
    // quarter-wise view. Swap back to loadFromApi() once the backend query is optimized.
    MyTargetComponent.prototype.getMyTargetList = function () {
        var _this = this;
        this.loader = true;
        setTimeout(function () {
            _this.loader = false;
            _this.users = _this.getDemoUsers();
            _this.selectedUserId = _this.users[0].id;
            _this.onUserChange();
        }, 300);
    };
    MyTargetComponent.prototype.getDemoUsers = function () {
        return [
            { id: 'u1', name: 'Rahul Sharma' },
            { id: 'u2', name: 'Priya Verma' },
            { id: 'u3', name: 'Amit Singh' },
            { id: 'u4', name: 'Sneha Patil' },
            { id: 'u5', name: 'Vikram Rao' },
        ];
    };
    MyTargetComponent.prototype.getDemoTargetList = function (userId) {
        var dataByUser = {
            u1: [
                { date_from: '2026-04-01', date_to: '2026-06-30', primary_target: '450000', secondary_target: '380000', projection_achv: { primary_achv: 312000, secondary_achv: 298000 } },
                { date_from: '2026-01-01', date_to: '2026-03-31', primary_target: '400000', secondary_target: '350000', projection_achv: { primary_achv: 410000, secondary_achv: 300000 } },
                { date_from: '2025-10-01', date_to: '2025-12-31', primary_target: '380000', secondary_target: '320000', projection_achv: { primary_achv: 355000, secondary_achv: 340000 } },
                { date_from: '2025-07-01', date_to: '2025-09-30', primary_target: '350000', secondary_target: '300000', projection_achv: { primary_achv: 210000, secondary_achv: 275000 } },
            ],
            u2: [
                { date_from: '2026-04-01', date_to: '2026-06-30', primary_target: '500000', secondary_target: '420000', projection_achv: { primary_achv: 480000, secondary_achv: 390000 } },
                { date_from: '2026-01-01', date_to: '2026-03-31', primary_target: '470000', secondary_target: '400000', projection_achv: { primary_achv: 300000, secondary_achv: 250000 } },
                { date_from: '2025-10-01', date_to: '2025-12-31', primary_target: '420000', secondary_target: '360000', projection_achv: { primary_achv: 425000, secondary_achv: 370000 } },
                { date_from: '2025-07-01', date_to: '2025-09-30', primary_target: '400000', secondary_target: '340000', projection_achv: { primary_achv: 380000, secondary_achv: 300000 } },
            ],
            u3: [
                { date_from: '2026-04-01', date_to: '2026-06-30', primary_target: '300000', secondary_target: '260000', projection_achv: { primary_achv: 120000, secondary_achv: 150000 } },
                { date_from: '2026-01-01', date_to: '2026-03-31', primary_target: '280000', secondary_target: '240000', projection_achv: { primary_achv: 260000, secondary_achv: 235000 } },
                { date_from: '2025-10-01', date_to: '2025-12-31', primary_target: '260000', secondary_target: '220000', projection_achv: { primary_achv: 200000, secondary_achv: 210000 } },
                { date_from: '2025-07-01', date_to: '2025-09-30', primary_target: '250000', secondary_target: '210000', projection_achv: { primary_achv: 255000, secondary_achv: 215000 } },
            ],
            u4: [
                { date_from: '2026-04-01', date_to: '2026-06-30', primary_target: '600000', secondary_target: '500000', projection_achv: { primary_achv: 610000, secondary_achv: 520000 } },
                { date_from: '2026-01-01', date_to: '2026-03-31', primary_target: '560000', secondary_target: '470000', projection_achv: { primary_achv: 540000, secondary_achv: 455000 } },
                { date_from: '2025-10-01', date_to: '2025-12-31', primary_target: '540000', secondary_target: '450000', projection_achv: { primary_achv: 500000, secondary_achv: 430000 } },
                { date_from: '2025-07-01', date_to: '2025-09-30', primary_target: '500000', secondary_target: '420000', projection_achv: { primary_achv: 470000, secondary_achv: 400000 } },
            ],
            u5: [
                { date_from: '2026-04-01', date_to: '2026-06-30', primary_target: '380000', secondary_target: '320000', projection_achv: { primary_achv: 150000, secondary_achv: 120000 } },
                { date_from: '2026-01-01', date_to: '2026-03-31', primary_target: '350000', secondary_target: '300000', projection_achv: { primary_achv: 320000, secondary_achv: 280000 } },
                { date_from: '2025-10-01', date_to: '2025-12-31', primary_target: '340000', secondary_target: '290000', projection_achv: { primary_achv: 300000, secondary_achv: 260000 } },
                { date_from: '2025-07-01', date_to: '2025-09-30', primary_target: '320000', secondary_target: '270000', projection_achv: { primary_achv: 330000, secondary_achv: 275000 } },
            ],
        };
        return dataByUser[userId] || [];
    };
    MyTargetComponent.prototype.onUserChange = function () {
        this.all_target_list = this.getDemoTargetList(this.selectedUserId);
        for (var i = 0; i < this.all_target_list.length; i++) {
            this.all_target_list[i].label = this.quarterLabel(this.all_target_list[i].date_from, this.all_target_list[i].date_to);
        }
        this.quarters = this.all_target_list.map(function (row) { return ({ value: row.date_from + '_' + row.date_to, label: row.label }); });
        this.selectedQuarter = 'all';
        this.onQuarterChange();
    };
    MyTargetComponent.prototype.onQuarterChange = function () {
        var _this = this;
        if (this.selectedQuarter == 'all') {
            this.target_list = this.all_target_list.slice();
        }
        else {
            this.target_list = this.all_target_list.filter(function (row) { return (row.date_from + '_' + row.date_to) == _this.selectedQuarter; });
        }
        this.computeTotals();
        this.datanotfound = this.target_list.length == 0;
        setTimeout(function () { _this.initCharts(); _this.renderMonthlyChart(); }, 100);
    };
    MyTargetComponent.prototype.onMonthlyTypeChange = function () {
        this.renderMonthlyChart();
    };
    MyTargetComponent.prototype.quarterLabel = function (dateFrom, dateTo) {
        var fromDate = new Date(dateFrom);
        var toDate = new Date(dateTo);
        var opts = { month: 'short', year: 'numeric' };
        return fromDate.toLocaleDateString('en-IN', opts) + ' - ' + toDate.toLocaleDateString('en-IN', opts);
    };
    MyTargetComponent.prototype.computeTotals = function () {
        this.total_primary_target = 0;
        this.total_primary_achv = 0;
        this.total_secondary_target = 0;
        this.total_secondary_achv = 0;
        for (var i = 0; i < this.target_list.length; i++) {
            this.target_list[i].primary_target = parseInt(this.target_list[i].primary_target) || 0;
            this.target_list[i].secondary_target = parseInt(this.target_list[i].secondary_target) || 0;
            this.target_list[i].primary_achv = this.target_list[i].projection_achv ? Math.round(this.target_list[i].projection_achv.primary_achv) || 0 : 0;
            this.target_list[i].secondary_achv = this.target_list[i].projection_achv ? Math.round(this.target_list[i].projection_achv.secondary_achv) || 0 : 0;
            this.target_list[i].primary_balance = this.target_list[i].primary_target - this.target_list[i].primary_achv;
            this.target_list[i].secondary_balance = this.target_list[i].secondary_target - this.target_list[i].secondary_achv;
            this.total_primary_target += this.target_list[i].primary_target;
            this.total_primary_achv += this.target_list[i].primary_achv;
            this.total_secondary_target += this.target_list[i].secondary_target;
            this.total_secondary_achv += this.target_list[i].secondary_achv;
        }
    };
    // Real API version — re-enable (and add a user picker calling this per selected user)
    // once "Target/targetList" is fast enough.
    MyTargetComponent.prototype.loadFromApi = function () {
        var _this = this;
        this.loader = true;
        this.serve.post_rqst({ 'search': { 'user_id': this.selectedUserId || this.user_id }, 'start': 0, 'pagelimit': 0 }, "Target/targetList").subscribe((function (result) {
            _this.loader = false;
            if (result['statusCode'] == 200) {
                _this.target_list = result['target_list'] || [];
                _this.computeTotals();
                _this.datanotfound = _this.target_list.length == 0;
                setTimeout(function () { return _this.initCharts(); }, 100);
            }
            else {
                _this.target_list = [];
                _this.datanotfound = true;
            }
        }), function () {
            _this.loader = false;
            _this.datanotfound = true;
        });
    };
    MyTargetComponent.prototype.initCharts = function () {
        var _this = this;
        this.renderDoughnut('primaryTargetChart', this.total_primary_target, this.total_primary_achv, function (chart) { return _this.primaryChart = chart; }, this.primaryChart);
        this.renderDoughnut('secondaryTargetChart', this.total_secondary_target, this.total_secondary_achv, function (chart) { return _this.secondaryChart = chart; }, this.secondaryChart);
    };
    MyTargetComponent.prototype.renderDoughnut = function (canvasId, target, achieved, setRef, existing) {
        var canvas = document.getElementById(canvasId);
        if (!canvas) {
            return;
        }
        if (existing) {
            existing.destroy();
        }
        canvas.width = 190;
        canvas.height = 190;
        var achievedClamped = Math.max(Math.min(achieved, target), 0);
        var remaining = Math.max(target - achieved, 0);
        var overAchieved = Math.max(achieved - target, 0);
        var hasData = target > 0 || achieved > 0;
        var data = overAchieved > 0 ? [achievedClamped, overAchieved] : [achievedClamped, remaining || (hasData ? 0 : 1)];
        var labels = overAchieved > 0 ? ['Achieved', 'Over Achieved'] : ['Achieved', 'Remaining'];
        var colors = overAchieved > 0 ? ['#10b981', '#6366f1'] : ['#10b981', '#e2e8f0'];
        var chart = new chart_js__WEBPACK_IMPORTED_MODULE_4__["Chart"](canvas, {
            type: 'doughnut',
            data: {
                labels: hasData ? labels : ['No Data'],
                datasets: [{
                        data: hasData ? data : [1],
                        backgroundColor: hasData ? colors : ['#e2e8f0'],
                        borderWidth: 0,
                    }]
            },
            options: {
                responsive: false,
                maintainAspectRatio: false,
                cutoutPercentage: 70,
                legend: { display: false },
                tooltips: {
                    enabled: hasData,
                    backgroundColor: '#1e293b', titleFontColor: '#e2e8f0', bodyFontColor: '#94a3b8',
                    cornerRadius: 8, xPadding: 12, yPadding: 8,
                    callbacks: {
                        label: function (item, chartData) {
                            var label = chartData.labels[item.index];
                            var value = chartData.datasets[0].data[item.index];
                            return '  ' + label + ': ' + Number(value).toLocaleString('en-IN');
                        }
                    }
                }
            }
        });
        setRef(chart);
    };
    MyTargetComponent.prototype.buildMonthlyList = function () {
        var monthFactors = [0.85, 1, 1.15];
        var months = [];
        for (var i = 0; i < this.target_list.length; i++) {
            var row = this.target_list[i];
            var start = new Date(row.date_from);
            for (var m = 0; m < 3; m++) {
                var d = new Date(start.getFullYear(), start.getMonth() + m, 1);
                months.push({
                    label: d.toLocaleDateString('en-IN', { month: 'short', year: '2-digit' }),
                    primary_target: Math.round(row.primary_target / 3),
                    primary_achv: Math.round((row.primary_achv / 3) * monthFactors[m]),
                    secondary_target: Math.round(row.secondary_target / 3),
                    secondary_achv: Math.round((row.secondary_achv / 3) * monthFactors[m]),
                });
            }
        }
        return months;
    };
    MyTargetComponent.prototype.renderMonthlyChart = function () {
        var canvas = document.getElementById('monthlyTrendChart');
        if (!canvas) {
            return;
        }
        if (this.monthlyChart) {
            this.monthlyChart.destroy();
            this.monthlyChart = null;
        }
        var months = this.buildMonthlyList();
        var labels = months.map(function (m) { return m.label; });
        var isPrimary = this.monthlyType == 'Primary';
        var targetData = months.map(function (m) { return isPrimary ? m.primary_target : m.secondary_target; });
        var achvData = months.map(function (m) { return isPrimary ? m.primary_achv : m.secondary_achv; });
        var ctx = canvas.getContext('2d');
        var achieveGrad = ctx.createLinearGradient(0, 0, 0, 260);
        achieveGrad.addColorStop(0, 'rgba(16,185,129,0.22)');
        achieveGrad.addColorStop(1, 'rgba(16,185,129,0.01)');
        var targetGrad = ctx.createLinearGradient(0, 0, 0, 260);
        targetGrad.addColorStop(0, 'rgba(99,102,241,0.18)');
        targetGrad.addColorStop(1, 'rgba(99,102,241,0.01)');
        this.monthlyChart = new chart_js__WEBPACK_IMPORTED_MODULE_4__["Chart"](canvas, {
            type: 'line',
            data: {
                labels: labels,
                datasets: [
                    {
                        label: 'Target',
                        data: targetData,
                        borderColor: '#6366f1',
                        backgroundColor: targetGrad,
                        borderWidth: 2.5,
                        borderDash: [7, 4],
                        pointBackgroundColor: '#6366f1', pointBorderColor: '#fff',
                        pointBorderWidth: 2, pointRadius: 4, pointHoverRadius: 6,
                        fill: true, lineTension: 0.35
                    },
                    {
                        label: 'Achievement',
                        data: achvData,
                        borderColor: '#10b981',
                        backgroundColor: achieveGrad,
                        borderWidth: 2.5,
                        pointBackgroundColor: '#10b981', pointBorderColor: '#fff',
                        pointBorderWidth: 2, pointRadius: 5, pointHoverRadius: 7,
                        fill: true, lineTension: 0.35
                    }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                layout: { padding: { left: 8, right: 16, top: 16, bottom: 4 } },
                scales: {
                    xAxes: [{
                            gridLines: { display: false, drawBorder: false },
                            ticks: { fontColor: '#94a3b8', fontSize: 11 }
                        }],
                    yAxes: [{
                            ticks: { beginAtZero: true, fontColor: '#94a3b8', fontSize: 11, padding: 8 },
                            gridLines: { color: 'rgba(226,232,240,0.8)', drawBorder: false, borderDash: [4, 3] }
                        }]
                },
                legend: {
                    display: true, position: 'top', align: 'end',
                    labels: { boxWidth: 10, fontSize: 12, fontColor: '#64748b' }
                },
                tooltips: {
                    backgroundColor: '#1e293b', titleFontColor: '#e2e8f0', bodyFontColor: '#94a3b8',
                    titleFontSize: 13, bodyFontSize: 12, xPadding: 14, yPadding: 10,
                    cornerRadius: 8, intersect: false, mode: 'index',
                    callbacks: {
                        label: function (item, chartData) {
                            var ds = chartData.datasets[item.datasetIndex];
                            return '  ' + ds.label + ': ' + Number(item.yLabel).toLocaleString('en-IN');
                        }
                    }
                }
            }
        });
    };
    MyTargetComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-my-target',
            template: __webpack_require__(/*! ./my-target.component.html */ "./src/app/my-target/my-target.component.html"),
            styles: [__webpack_require__(/*! ./my-target.component.scss */ "./src/app/my-target/my-target.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_services_DatabaseService__WEBPACK_IMPORTED_MODULE_2__["DatabaseService"], src_app_localstorage_service__WEBPACK_IMPORTED_MODULE_3__["sessionStorage"]])
    ], MyTargetComponent);
    return MyTargetComponent;
}());



/***/ })

}]);