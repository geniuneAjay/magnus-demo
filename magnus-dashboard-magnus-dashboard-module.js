(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["magnus-dashboard-magnus-dashboard-module"],{

/***/ "./src/app/magnus-dashboard/magnus-dashboard.component.html":
/*!******************************************************************!*\
  !*** ./src/app/magnus-dashboard/magnus-dashboard.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-container\">\n\n  <div class=\"tools-container\">\n    <h2>Dashboard</h2>\n    <div class=\"left-auto df ac flex-gap-10\">\n      <span class=\"mgd-range\">{{ rangeLabel }}</span>\n      <button mat-icon-button matTooltip=\"Refresh\"><i class=\"material-icons\">refresh</i></button>\n    </div>\n  </div>\n\n  <div class=\"container mgd\">\n\n    <!-- ============================================================\n         Headline figures\n         ============================================================ -->\n    <section class=\"mgd-kpis\">\n      <article class=\"mgd-kpi\" *ngFor=\"let k of kpis\">\n        <div class=\"mgd-kpi-head\">\n          <span class=\"mgd-kpi-label\">{{ k.label }}</span>\n          <span class=\"mgd-delta\" [class.down]=\"k.delta < 0\">\n            <i class=\"material-icons\">{{ k.delta < 0 ? 'arrow_downward' : 'arrow_upward' }}</i>\n            {{ k.delta < 0 ? -k.delta : k.delta }}%\n          </span>\n        </div>\n\n        <div class=\"mgd-kpi-value\">\n          {{ k.value }}<span class=\"mgd-unit\" *ngIf=\"k.unit\">{{ k.unit }}</span>\n        </div>\n\n        <div class=\"mgd-kpi-foot\">\n          <span class=\"mgd-kpi-caption\">{{ k.caption }}</span>\n          <svg class=\"mgd-spark\" viewBox=\"0 0 72 24\" preserveAspectRatio=\"none\" aria-hidden=\"true\">\n            <path [attr.d]=\"sparkPath(k.spark)\" fill=\"none\" stroke-width=\"2\"\n                  stroke-linecap=\"round\" stroke-linejoin=\"round\"\n                  [attr.stroke]=\"k.delta < 0 ? 'var(--mgd-down)' : 'var(--mgd-up)'\"></path>\n          </svg>\n        </div>\n      </article>\n    </section>\n\n    <!-- ============================================================\n         Revenue vs target  +  product mix\n         ============================================================ -->\n    <section class=\"mgd-row mgd-row-2-1\">\n\n      <article class=\"mgd-card\">\n        <div class=\"mgd-card-head\">\n          <div>\n            <h3>Revenue against target</h3>\n            <p>Monthly net revenue in crore, last 12 months</p>\n          </div>\n          <!-- Two series, so identity is never colour-alone -->\n          <div class=\"mgd-legend\">\n            <span class=\"mgd-legend-item\"><i class=\"mgd-swatch s1\"></i>Actual</span>\n            <span class=\"mgd-legend-item\"><i class=\"mgd-swatch s2 dashed\"></i>Target</span>\n          </div>\n        </div>\n\n        <div class=\"mgd-plot\">\n          <svg [attr.viewBox]=\"'0 0 ' + cw + ' ' + ch\" preserveAspectRatio=\"none\"\n               class=\"mgd-trend\" (mousemove)=\"onTrendMove($event)\" (mouseleave)=\"onTrendLeave()\"\n               role=\"img\" aria-label=\"Monthly revenue against target\">\n\n            <defs>\n              <linearGradient id=\"mgdFill\" x1=\"0\" y1=\"0\" x2=\"0\" y2=\"1\">\n                <stop offset=\"0%\" stop-color=\"var(--mgd-s1)\" stop-opacity=\"0.16\"></stop>\n                <stop offset=\"100%\" stop-color=\"var(--mgd-s1)\" stop-opacity=\"0\"></stop>\n              </linearGradient>\n            </defs>\n\n            <!-- recessive gridlines -->\n            <g class=\"mgd-grid\">\n              <line *ngFor=\"let t of yTicks\" [attr.x1]=\"pad.l\" [attr.x2]=\"cw - pad.r\"\n                    [attr.y1]=\"t.y\" [attr.y2]=\"t.y\"></line>\n            </g>\n            <g class=\"mgd-ylab\">\n              <text *ngFor=\"let t of yTicks\" [attr.x]=\"pad.l - 10\" [attr.y]=\"t.y + 4\"\n                    text-anchor=\"end\">{{ t.v }}</text>\n            </g>\n\n            <path [attr.d]=\"actualArea\" fill=\"url(#mgdFill)\" stroke=\"none\"></path>\n\n            <path [attr.d]=\"targetPath\" fill=\"none\" stroke=\"var(--mgd-s2)\" stroke-width=\"2\"\n                  stroke-dasharray=\"5 4\" stroke-linecap=\"round\"></path>\n            <path [attr.d]=\"actualPath\" fill=\"none\" stroke=\"var(--mgd-s1)\" stroke-width=\"2\"\n                  stroke-linecap=\"round\" stroke-linejoin=\"round\"></path>\n\n            <!-- crosshair -->\n            <g *ngIf=\"hoverIdx !== null\" class=\"mgd-cross\">\n              <line [attr.x1]=\"actualPts[hoverIdx].x\" [attr.x2]=\"actualPts[hoverIdx].x\"\n                    [attr.y1]=\"pad.t\" [attr.y2]=\"ch - pad.b\"></line>\n              <circle [attr.cx]=\"targetPts[hoverIdx].x\" [attr.cy]=\"targetPts[hoverIdx].y\" r=\"4.5\"\n                      fill=\"var(--mgd-s2)\" stroke=\"var(--mgd-surface)\" stroke-width=\"2\"></circle>\n              <circle [attr.cx]=\"actualPts[hoverIdx].x\" [attr.cy]=\"actualPts[hoverIdx].y\" r=\"5\"\n                      fill=\"var(--mgd-s1)\" stroke=\"var(--mgd-surface)\" stroke-width=\"2\"></circle>\n            </g>\n\n            <g class=\"mgd-xlab\">\n              <text *ngFor=\"let m of months; let i = index\"\n                    [attr.x]=\"actualPts[i] ? actualPts[i].x : 0\" [attr.y]=\"ch - 10\"\n                    text-anchor=\"middle\" [class.on]=\"hoverIdx === i\">{{ m }}</text>\n            </g>\n          </svg>\n\n          <div class=\"mgd-tip\" *ngIf=\"hoverIdx !== null\"\n               [class.flip]=\"tipFlip()\" [style.left]=\"tipLeft()\">\n            <div class=\"mgd-tip-title\">{{ months[hoverIdx] }}</div>\n            <div class=\"mgd-tip-row\">\n              <i class=\"mgd-swatch s1\"></i><span>Actual</span><b>{{ actual[hoverIdx] }} Cr</b>\n            </div>\n            <div class=\"mgd-tip-row\">\n              <i class=\"mgd-swatch s2\"></i><span>Target</span><b>{{ target[hoverIdx] }} Cr</b>\n            </div>\n          </div>\n        </div>\n      </article>\n\n      <article class=\"mgd-card\">\n        <div class=\"mgd-card-head\">\n          <div>\n            <h3>Product mix</h3>\n            <p>Revenue by category, this month</p>\n          </div>\n        </div>\n\n        <ul class=\"mgd-bars\">\n          <li *ngFor=\"let m of mix\">\n            <div class=\"mgd-bar-top\">\n              <span class=\"mgd-bar-name\">{{ m.name }}</span>\n              <span class=\"mgd-bar-val\">{{ m.value }} Cr</span>\n            </div>\n            <div class=\"mgd-track\" [attr.title]=\"m.name + ' — ' + m.value + ' Cr'\">\n              <span class=\"mgd-fill\" [class]=\"'s' + m.slot\" [style.width.%]=\"mixPct(m.value)\"></span>\n            </div>\n          </li>\n        </ul>\n      </article>\n    </section>\n\n    <!-- ============================================================\n         Field force\n         ============================================================ -->\n    <section class=\"mgd-row mgd-row-2-1\">\n\n      <article class=\"mgd-card\">\n        <div class=\"mgd-card-head\">\n          <div>\n            <h3>Top performers</h3>\n            <p>Revenue booked this month, in lakh</p>\n          </div>\n        </div>\n\n        <ul class=\"mgd-bars ranked\">\n          <li *ngFor=\"let p of performers; let i = index\">\n            <div class=\"mgd-bar-top\">\n              <span class=\"mgd-bar-name\">\n                <b class=\"mgd-rank\">{{ i + 1 }}</b>{{ p.name }}\n                <em>{{ p.region }}</em>\n              </span>\n              <span class=\"mgd-bar-val\">{{ p.value }}L <i>· {{ p.visits }} visits</i></span>\n            </div>\n            <div class=\"mgd-track\">\n              <span class=\"mgd-fill s2\" [style.width.%]=\"performerPct(p.value)\"></span>\n            </div>\n          </li>\n        </ul>\n      </article>\n\n      <article class=\"mgd-card\">\n        <div class=\"mgd-card-head\">\n          <div>\n            <h3>Attendance today</h3>\n            <p>{{ attendanceTotal }} field staff</p>\n          </div>\n        </div>\n\n        <div class=\"mgd-donut-wrap\">\n          <svg viewBox=\"0 0 180 180\" class=\"mgd-donut\" role=\"img\" aria-label=\"Attendance split today\">\n            <path *ngFor=\"let a of donutArcs\" [attr.d]=\"a.d\" [class]=\"'arc s' + a.slot\">\n              <title>{{ a.label }}: {{ a.value }}</title>\n            </path>\n            <text x=\"90\" y=\"86\" text-anchor=\"middle\" class=\"mgd-donut-num\">92.4%</text>\n            <text x=\"90\" y=\"105\" text-anchor=\"middle\" class=\"mgd-donut-cap\">present</text>\n          </svg>\n\n          <ul class=\"mgd-donut-key\">\n            <li *ngFor=\"let a of attendance\">\n              <i class=\"mgd-swatch\" [class]=\"'mgd-swatch s' + a.slot\"></i>\n              <span>{{ a.label }}</span>\n              <b>{{ a.value }}</b>\n              <em>{{ attendancePct(a.value) }}%</em>\n            </li>\n          </ul>\n        </div>\n      </article>\n    </section>\n\n    <!-- ============================================================\n         Tables\n         ============================================================ -->\n    <section class=\"mgd-row mgd-row-3-2\">\n\n      <article class=\"mgd-card\">\n        <div class=\"mgd-card-head\">\n          <div>\n            <h3>Recent orders</h3>\n            <p>Latest bookings across all regions</p>\n          </div>\n          <a class=\"mgd-link\">View all</a>\n        </div>\n\n        <div class=\"mgd-table-wrap\">\n          <table class=\"mgd-table\">\n            <thead>\n              <tr>\n                <th>Order</th><th>Dealer</th><th>City</th>\n                <th class=\"ta-r\">Amount</th><th>Status</th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr *ngFor=\"let o of recentOrders\">\n                <td class=\"mono\">{{ o.id }}</td>\n                <td class=\"strong\">{{ o.dealer }}</td>\n                <td>{{ o.city }}</td>\n                <td class=\"ta-r num\">₹ {{ o.amount }}</td>\n                <td><span class=\"mgd-pill\" [class]=\"'mgd-pill ' + o.state\">{{ o.status }}</span></td>\n              </tr>\n            </tbody>\n          </table>\n        </div>\n      </article>\n\n      <article class=\"mgd-card\">\n        <div class=\"mgd-card-head\">\n          <div>\n            <h3>Top dealers</h3>\n            <p>Year to date</p>\n          </div>\n        </div>\n\n        <div class=\"mgd-table-wrap\">\n          <table class=\"mgd-table\">\n            <thead>\n              <tr><th>Dealer</th><th>City</th><th class=\"ta-r\">YTD</th><th class=\"ta-r\">Growth</th></tr>\n            </thead>\n            <tbody>\n              <tr *ngFor=\"let d of topDealers\">\n                <td class=\"strong\">{{ d.name }}</td>\n                <td>{{ d.city }}</td>\n                <td class=\"ta-r num\">{{ d.ytd }}</td>\n                <td class=\"ta-r num\">\n                  <span class=\"mgd-delta sm\" [class.down]=\"d.growth < 0\">\n                    <i class=\"material-icons\">{{ d.growth < 0 ? 'arrow_downward' : 'arrow_upward' }}</i>\n                    {{ d.growth < 0 ? -d.growth : d.growth }}%\n                  </span>\n                </td>\n              </tr>\n            </tbody>\n          </table>\n        </div>\n      </article>\n    </section>\n\n    <p class=\"mgd-note\">Demonstration data. Figures are illustrative and not drawn from a live system.</p>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/magnus-dashboard/magnus-dashboard.component.scss":
/*!******************************************************************!*\
  !*** ./src/app/magnus-dashboard/magnus-dashboard.component.scss ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  --mgd-s1: #d8455c;\n  --mgd-s2: #2c6fb1;\n  --mgd-s3: #c2801d;\n  --mgd-s4: #1f9d6b;\n  --mgd-s5: #7c4fbd;\n  --mgd-s6: #0a8f9c;\n  --mgd-surface: var(--surface-card);\n  --mgd-canvas: var(--grey);\n  --mgd-hairline: var(--border-light);\n  --mgd-rule: var(--bodrColor);\n  --mgd-ink: var(--text);\n  --mgd-ink-2: var(--text-secondary);\n  --mgd-ink-3: var(--text-muted);\n  --mgd-grid: var(--border-light);\n  --mgd-up: #1f9d6b;\n  --mgd-down: #d8455c;\n  display: block;\n  height: 100%;\n}\n\n:host .main-container {\n  display: flex;\n  flex-direction: column;\n}\n\n:host .tools-container {\n  flex: 0 0 auto;\n  position: relative;\n}\n\n:host .container.mgd {\n  flex: 1 1 auto;\n  min-height: 0;\n  height: auto;\n}\n\n:host-context(body.dark-mode) {\n  --mgd-s1: #e05a70;\n  --mgd-s2: #4a8fd0;\n  --mgd-s3: #bd8620;\n  --mgd-s4: #2fae79;\n  --mgd-s5: #9370d6;\n  --mgd-s6: #22a7b5;\n  --mgd-up: #2fae79;\n  --mgd-down: #e05a70;\n}\n\n.mgd {\n  padding: 4px 16px 24px 16px;\n  background: var(--mgd-canvas);\n  overflow-y: auto;\n}\n\n.mgd-range {\n  font-size: 12.5px;\n  color: var(--mgd-ink-2);\n  background: var(--mgd-surface);\n  border: 1px solid var(--mgd-hairline);\n  border-radius: 8px;\n  padding: 6px 11px;\n}\n\n.mgd-card {\n  background: var(--mgd-surface);\n  border: 1px solid var(--mgd-hairline);\n  border-radius: 12px;\n  padding: 18px;\n  min-width: 0;\n}\n\n.mgd-card-head {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: 16px;\n  margin-bottom: 18px;\n}\n\n.mgd-card-head h3 {\n  font-family: \"Plus Jakarta Sans\", \"Inter\", sans-serif;\n  font-size: 15px;\n  font-weight: 700;\n  letter-spacing: -0.02em;\n  color: var(--mgd-ink);\n  margin-bottom: 3px;\n}\n\n.mgd-card-head p {\n  font-size: 12.5px;\n  color: var(--mgd-ink-3);\n}\n\n.mgd-link {\n  font-size: 12.5px;\n  font-weight: 500;\n  color: var(--mgd-s2);\n  cursor: pointer;\n  white-space: nowrap;\n}\n\n.mgd-link:hover {\n  text-decoration: underline;\n}\n\n.mgd-kpis {\n  display: grid;\n  grid-template-columns: repeat(5, minmax(0, 1fr));\n  gap: 12px;\n  margin-bottom: 12px;\n}\n\n.mgd-kpi {\n  background: var(--mgd-surface);\n  border: 1px solid var(--mgd-hairline);\n  border-radius: 12px;\n  padding: 15px 16px;\n  min-width: 0;\n  transition: border-color 0.14s cubic-bezier(0.4, 0, 0.2, 1);\n}\n\n.mgd-kpi:hover {\n  border-color: var(--mgd-rule);\n}\n\n.mgd-kpi-head {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 8px;\n  margin-bottom: 9px;\n}\n\n.mgd-kpi-label {\n  font-size: 12.5px;\n  font-weight: 500;\n  color: var(--mgd-ink-2);\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n\n.mgd-delta {\n  display: inline-flex;\n  align-items: center;\n  gap: 2px;\n  font-size: 11.5px;\n  font-weight: 600;\n  color: var(--mgd-up);\n  background: rgba(31, 157, 107, 0.1);\n  border-radius: 6px;\n  padding: 2px 6px 2px 4px;\n  white-space: nowrap;\n}\n\n.mgd-delta i {\n  font-size: 13px;\n}\n\n.mgd-delta.down {\n  color: var(--mgd-down);\n  background: rgba(216, 69, 92, 0.1);\n}\n\n.mgd-delta.sm {\n  background: transparent;\n  padding: 0;\n  font-size: 12px;\n}\n\n.mgd-kpi-value {\n  font-family: \"Plus Jakarta Sans\", \"Inter\", sans-serif;\n  font-size: 28px;\n  font-weight: 700;\n  letter-spacing: -0.035em;\n  color: var(--mgd-ink);\n  line-height: 1.1;\n  font-variant-numeric: tabular-nums;\n  margin-bottom: 8px;\n}\n\n.mgd-unit {\n  font-size: 15px;\n  font-weight: 600;\n  color: var(--mgd-ink-3);\n  margin-left: 3px;\n  letter-spacing: 0;\n}\n\n.mgd-kpi-foot {\n  display: flex;\n  align-items: flex-end;\n  justify-content: space-between;\n  gap: 10px;\n}\n\n.mgd-kpi-caption {\n  font-size: 11.5px;\n  color: var(--mgd-ink-3);\n  line-height: 1.4;\n  min-width: 0;\n}\n\n.mgd-spark {\n  width: 72px;\n  height: 24px;\n  flex-shrink: 0;\n  overflow: visible;\n}\n\n.mgd-row {\n  display: grid;\n  gap: 12px;\n  margin-bottom: 12px;\n}\n\n.mgd-row-2-1 {\n  grid-template-columns: minmax(0, 2fr) minmax(0, 1fr);\n}\n\n.mgd-row-3-2 {\n  grid-template-columns: minmax(0, 3fr) minmax(0, 2fr);\n}\n\n.mgd-legend {\n  display: flex;\n  align-items: center;\n  gap: 14px;\n  flex-shrink: 0;\n}\n\n.mgd-legend-item {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  font-size: 12.5px;\n  color: var(--mgd-ink-2);\n  white-space: nowrap;\n}\n\n.mgd-swatch {\n  width: 10px;\n  height: 10px;\n  border-radius: 3px;\n  flex-shrink: 0;\n  display: inline-block;\n}\n\n.mgd-swatch.s1 {\n  background: var(--mgd-s1);\n}\n\n.mgd-swatch.s2 {\n  background: var(--mgd-s2);\n}\n\n.mgd-swatch.s3 {\n  background: var(--mgd-s3);\n}\n\n.mgd-swatch.s4 {\n  background: var(--mgd-s4);\n}\n\n.mgd-swatch.s5 {\n  background: var(--mgd-s5);\n}\n\n.mgd-swatch.s6 {\n  background: var(--mgd-s6);\n}\n\n.mgd-swatch.dashed {\n  height: 0;\n  border-radius: 0;\n  background: none;\n  border-top: 2px dashed var(--mgd-s2);\n  width: 14px;\n}\n\n.mgd-plot {\n  position: relative;\n}\n\n.mgd-trend {\n  width: 100%;\n  height: 260px;\n  display: block;\n  cursor: crosshair;\n}\n\n.mgd-grid line {\n  stroke: var(--mgd-grid);\n  stroke-width: 1;\n}\n\n.mgd-ylab text,\n.mgd-xlab text {\n  font-family: \"Inter\", sans-serif;\n  font-size: 11px;\n  fill: var(--mgd-ink-3);\n}\n\n.mgd-xlab text.on {\n  fill: var(--mgd-ink);\n  font-weight: 600;\n}\n\n.mgd-cross line {\n  stroke: var(--mgd-rule);\n  stroke-width: 1;\n  stroke-dasharray: 3 3;\n}\n\n.mgd-tip {\n  position: absolute;\n  top: 8px;\n  transform: translateX(10px);\n  background: var(--mgd-surface);\n  border: 1px solid var(--mgd-rule);\n  border-radius: 9px;\n  box-shadow: 0 12px 28px -10px rgba(42, 44, 51, 0.22);\n  padding: 9px 11px;\n  min-width: 152px;\n  pointer-events: none;\n  z-index: 3;\n}\n\n.mgd-tip.flip {\n  transform: translateX(-100%) translateX(-10px);\n}\n\n.mgd-tip-title {\n  font-size: 12px;\n  font-weight: 600;\n  color: var(--mgd-ink);\n  margin-bottom: 6px;\n}\n\n.mgd-tip-row {\n  display: flex;\n  align-items: center;\n  gap: 7px;\n  font-size: 12px;\n  color: var(--mgd-ink-2);\n  line-height: 1.9;\n}\n\n.mgd-tip-row b {\n  margin-left: auto;\n  color: var(--mgd-ink);\n  font-weight: 600;\n  font-variant-numeric: tabular-nums;\n}\n\n.mgd-bars {\n  list-style: none;\n}\n\n.mgd-bars li + li {\n  margin-top: 15px;\n}\n\n.mgd-bar-top {\n  display: flex;\n  align-items: baseline;\n  justify-content: space-between;\n  gap: 12px;\n  margin-bottom: 7px;\n}\n\n.mgd-bar-name {\n  font-size: 13px;\n  color: var(--mgd-ink);\n  min-width: 0;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n\n.mgd-bar-name em {\n  font-style: normal;\n  font-size: 12px;\n  color: var(--mgd-ink-3);\n  margin-left: 7px;\n}\n\n.mgd-rank {\n  display: inline-block;\n  width: 18px;\n  font-size: 11.5px;\n  font-weight: 600;\n  color: var(--mgd-ink-3);\n}\n\n.mgd-bar-val {\n  font-size: 12.5px;\n  font-weight: 600;\n  color: var(--mgd-ink);\n  font-variant-numeric: tabular-nums;\n  white-space: nowrap;\n  flex-shrink: 0;\n}\n\n.mgd-bar-val i {\n  font-style: normal;\n  font-weight: 400;\n  color: var(--mgd-ink-3);\n}\n\n.mgd-track {\n  height: 8px;\n  background: var(--mgd-canvas);\n  border-radius: 9999px;\n  overflow: hidden;\n}\n\n.mgd-fill {\n  display: block;\n  height: 100%;\n  border-radius: 9999px;\n  transition: width 0.5s cubic-bezier(0.4, 0, 0.2, 1);\n}\n\n.mgd-fill.s1 {\n  background: var(--mgd-s1);\n}\n\n.mgd-fill.s2 {\n  background: var(--mgd-s2);\n}\n\n.mgd-fill.s3 {\n  background: var(--mgd-s3);\n}\n\n.mgd-fill.s4 {\n  background: var(--mgd-s4);\n}\n\n.mgd-fill.s5 {\n  background: var(--mgd-s5);\n}\n\n.mgd-fill.s6 {\n  background: var(--mgd-s6);\n}\n\n.mgd-donut-wrap {\n  display: flex;\n  align-items: center;\n  gap: 18px;\n  flex-wrap: wrap;\n}\n\n.mgd-donut {\n  width: 158px;\n  height: 158px;\n  flex-shrink: 0;\n}\n\n.mgd-donut .arc {\n  stroke: var(--mgd-surface);\n  stroke-width: 2;\n}\n\n.mgd-donut .arc.s1 {\n  fill: var(--mgd-s1);\n}\n\n.mgd-donut .arc.s2 {\n  fill: var(--mgd-s2);\n}\n\n.mgd-donut .arc.s3 {\n  fill: var(--mgd-s3);\n}\n\n.mgd-donut .arc.s4 {\n  fill: var(--mgd-s4);\n}\n\n.mgd-donut .arc.s5 {\n  fill: var(--mgd-s5);\n}\n\n.mgd-donut .arc.s6 {\n  fill: var(--mgd-s6);\n}\n\n.mgd-donut-num {\n  font-family: \"Plus Jakarta Sans\", \"Inter\", sans-serif;\n  font-size: 25px;\n  font-weight: 700;\n  letter-spacing: -0.03em;\n  fill: var(--mgd-ink);\n}\n\n.mgd-donut-cap {\n  font-family: \"Inter\", sans-serif;\n  font-size: 11.5px;\n  fill: var(--mgd-ink-3);\n}\n\n.mgd-donut-key {\n  list-style: none;\n  flex: 1;\n  min-width: 128px;\n}\n\n.mgd-donut-key li {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  font-size: 13px;\n  color: var(--mgd-ink-2);\n  padding: 6px 0;\n}\n\n.mgd-donut-key li + li {\n  border-top: 1px solid var(--mgd-hairline);\n}\n\n.mgd-donut-key li b {\n  margin-left: auto;\n  color: var(--mgd-ink);\n  font-weight: 600;\n  font-variant-numeric: tabular-nums;\n}\n\n.mgd-donut-key li em {\n  font-style: normal;\n  font-size: 12px;\n  color: var(--mgd-ink-3);\n  width: 42px;\n  text-align: right;\n  font-variant-numeric: tabular-nums;\n}\n\n.mgd-table-wrap {\n  overflow-x: auto;\n}\n\n.mgd-table {\n  width: 100%;\n  border-collapse: collapse;\n}\n\n.mgd-table th {\n  font-size: 11px;\n  font-weight: 600;\n  letter-spacing: 0.05em;\n  text-transform: uppercase;\n  color: var(--mgd-ink-3);\n  text-align: left;\n  padding: 0 12px 9px 12px;\n  border-bottom: 1px solid var(--mgd-hairline);\n  white-space: nowrap;\n}\n\n.mgd-table td {\n  font-size: 13px;\n  color: var(--mgd-ink-2);\n  padding: 11px 12px;\n  border-bottom: 1px solid var(--mgd-hairline);\n  white-space: nowrap;\n}\n\n.mgd-table tbody tr:last-child td {\n  border-bottom: 0;\n}\n\n.mgd-table tbody tr:hover td {\n  background: var(--mgd-canvas);\n}\n\n.mgd-table .strong {\n  color: var(--mgd-ink);\n  font-weight: 500;\n}\n\n.mgd-table .mono {\n  font-variant-numeric: tabular-nums;\n  color: var(--mgd-ink-3);\n}\n\n.mgd-table .num {\n  font-variant-numeric: tabular-nums;\n}\n\n.mgd-table .ta-r {\n  text-align: right;\n}\n\n.mgd-table th:first-child, .mgd-table td:first-child {\n  padding-left: 0;\n}\n\n.mgd-table th:last-child, .mgd-table td:last-child {\n  padding-right: 0;\n}\n\n.mgd-pill {\n  display: inline-block;\n  font-size: 12px;\n  font-weight: 500;\n  border-radius: 6px;\n  padding: 3px 9px;\n  background: var(--mgd-canvas);\n  color: var(--mgd-ink-2);\n}\n\n.mgd-pill.ok {\n  background: rgba(31, 157, 107, 0.12);\n  color: #1a7f57;\n}\n\n.mgd-pill.info {\n  background: rgba(44, 111, 177, 0.12);\n  color: #275e95;\n}\n\n.mgd-pill.warn {\n  background: rgba(194, 128, 29, 0.14);\n  color: #96631a;\n}\n\n.mgd-pill.bad {\n  background: rgba(216, 69, 92, 0.12);\n  color: #b03a4d;\n}\n\n:host-context(body.dark-mode) .mgd-pill.ok {\n  color: #57c496;\n}\n\n:host-context(body.dark-mode) .mgd-pill.info {\n  color: #74aae0;\n}\n\n:host-context(body.dark-mode) .mgd-pill.warn {\n  color: #d3a24a;\n}\n\n:host-context(body.dark-mode) .mgd-pill.bad {\n  color: #ec8496;\n}\n\n.mgd-note {\n  font-size: 11.5px;\n  color: var(--mgd-ink-3);\n  padding: 4px 2px 0;\n}\n\n@media only screen and (max-width: 1500px) {\n  .mgd-kpis {\n    grid-template-columns: repeat(3, minmax(0, 1fr));\n  }\n}\n\n@media only screen and (max-width: 1200px) {\n  .mgd-row-2-1, .mgd-row-3-2 {\n    grid-template-columns: minmax(0, 1fr);\n  }\n}\n\n@media only screen and (max-width: 760px) {\n  .mgd {\n    padding: 4px 12px 20px 12px;\n  }\n  .mgd-kpis {\n    grid-template-columns: repeat(2, minmax(0, 1fr));\n  }\n  .mgd-kpi-value {\n    font-size: 24px;\n  }\n  .mgd-card-head {\n    flex-direction: column;\n    gap: 10px;\n  }\n  .mgd-trend {\n    height: 220px;\n  }\n}\n\n@media only screen and (max-width: 460px) {\n  .mgd-kpis {\n    grid-template-columns: minmax(0, 1fr);\n  }\n}"

/***/ }),

/***/ "./src/app/magnus-dashboard/magnus-dashboard.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/magnus-dashboard/magnus-dashboard.component.ts ***!
  \****************************************************************/
/*! exports provided: MagnusDashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MagnusDashboardComponent", function() { return MagnusDashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/core/fesm5/core.js");


var MagnusDashboardComponent = /** @class */ (function () {
    function MagnusDashboardComponent() {
        this.today = new Date();
        this.rangeLabel = 'Last 12 months';
        // --------------------------------------------------------------------
        // Headline figures
        // --------------------------------------------------------------------
        this.kpis = [
            {
                label: 'Net Revenue', value: '4.82', unit: 'Cr', delta: 12.4,
                caption: 'vs 4.29 Cr last month',
                spark: [38, 41, 39, 46, 44, 52, 49, 58, 55, 61, 59, 68]
            },
            {
                label: 'Orders Booked', value: '1,284', delta: 8.1,
                caption: 'vs 1,188 last month',
                spark: [22, 25, 24, 27, 26, 30, 29, 33, 31, 35, 34, 38]
            },
            {
                label: 'Active Dealers', value: '3,416', delta: 3.2,
                caption: '112 added this month',
                spark: [30, 31, 31, 32, 33, 33, 34, 34, 35, 35, 36, 37]
            },
            {
                label: 'Visits Today', value: '318', delta: -4.6,
                caption: 'against a target of 334',
                spark: [40, 44, 39, 47, 42, 45, 41, 44, 40, 43, 39, 37]
            },
            {
                label: 'Attendance', value: '92.4', unit: '%', delta: 1.8,
                caption: '197 of 213 marked present',
                spark: [86, 88, 87, 89, 90, 89, 91, 90, 92, 91, 92, 92]
            }
        ];
        // --------------------------------------------------------------------
        // Revenue vs target, 12 months (two series -> legend + direct labels)
        // --------------------------------------------------------------------
        this.months = ['Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'];
        this.actual = [3.42, 3.61, 3.28, 3.74, 3.55, 4.02, 3.88, 4.21, 4.06, 4.44, 4.29, 4.82];
        this.target = [3.50, 3.60, 3.70, 3.70, 3.80, 3.90, 4.00, 4.10, 4.20, 4.30, 4.40, 4.50];
        // Plot geometry (SVG user units; the element scales via viewBox)
        this.cw = 760;
        this.ch = 260;
        this.pad = { t: 18, r: 18, b: 30, l: 46 };
        this.yTicks = [];
        this.actualPts = [];
        this.targetPts = [];
        this.actualPath = '';
        this.actualArea = '';
        this.targetPath = '';
        this.hoverIdx = null;
        // --------------------------------------------------------------------
        // Product mix (single series -> no legend, direct labels)
        // --------------------------------------------------------------------
        this.mix = [
            { name: 'Shuttering Plywood', value: 1.62, slot: 1 },
            { name: 'Strength BWP 710', value: 1.24, slot: 2 },
            { name: 'Block Board', value: 0.86, slot: 3 },
            { name: 'Flush & Pine Doors', value: 0.61, slot: 4 },
            { name: 'Fire Retardant', value: 0.49, slot: 5 }
        ];
        this.mixMax = 1.62;
        // --------------------------------------------------------------------
        // Field force
        // --------------------------------------------------------------------
        this.performers = [
            { name: 'Rakesh Menon', region: 'Maharashtra', value: 62.4, visits: 41 },
            { name: 'Sunita Rawat', region: 'Delhi NCR', value: 58.1, visits: 38 },
            { name: 'Imran Qureshi', region: 'Gujarat', value: 51.7, visits: 36 },
            { name: 'Deepak Sahu', region: 'MP & CG', value: 47.3, visits: 33 },
            { name: 'Anita Bhattacharya', region: 'West Bengal', value: 43.9, visits: 31 },
            { name: 'Vikram Shetty', region: 'Karnataka', value: 39.2, visits: 28 }
        ];
        this.performerMax = 62.4;
        this.attendance = [
            { label: 'Present', value: 197, slot: 4 },
            { label: 'On leave', value: 9, slot: 3 },
            { label: 'Absent', value: 7, slot: 1 }
        ];
        this.attendanceTotal = 213;
        this.donutArcs = [];
        // --------------------------------------------------------------------
        // Tables
        // --------------------------------------------------------------------
        this.recentOrders = [
            { id: 'MG-24188', dealer: 'Shree Balaji Timber', city: 'Nagpur', amount: '8,42,500', status: 'Dispatched', state: 'ok' },
            { id: 'MG-24187', dealer: 'Kohinoor Ply House', city: 'Surat', amount: '6,18,000', status: 'In transit', state: 'info' },
            { id: 'MG-24186', dealer: 'Gupta Hardware & Ply', city: 'Kanpur', amount: '4,95,750', status: 'Pending', state: 'warn' },
            { id: 'MG-24185', dealer: 'Anand Plywood Centre', city: 'Indore', amount: '3,70,200', status: 'Dispatched', state: 'ok' },
            { id: 'MG-24184', dealer: 'Sai Laminates', city: 'Hyderabad', amount: '2,88,400', status: 'On hold', state: 'bad' },
            { id: 'MG-24183', dealer: 'Metro Wood Traders', city: 'Pune', amount: '2,41,900', status: 'Dispatched', state: 'ok' }
        ];
        this.topDealers = [
            { name: 'Shree Balaji Timber', city: 'Nagpur', ytd: '1.42 Cr', growth: 18.2 },
            { name: 'Kohinoor Ply House', city: 'Surat', ytd: '1.16 Cr', growth: 11.4 },
            { name: 'Anand Plywood Centre', city: 'Indore', ytd: '0.98 Cr', growth: 6.8 },
            { name: 'Gupta Hardware & Ply', city: 'Kanpur', ytd: '0.87 Cr', growth: -2.3 },
            { name: 'Sai Laminates', city: 'Hyderabad', ytd: '0.74 Cr', growth: 4.1 }
        ];
    }
    MagnusDashboardComponent.prototype.ngOnInit = function () {
        this.buildTrend();
        this.buildDonut();
    };
    // ====================================================================
    // Trend chart geometry
    // ====================================================================
    MagnusDashboardComponent.prototype.buildTrend = function () {
        var _this = this;
        var all = this.actual.concat(this.target);
        var min = Math.floor(Math.min.apply(null, all) * 2) / 2 - 0.5;
        var max = Math.ceil(Math.max.apply(null, all) * 2) / 2;
        var plotW = this.cw - this.pad.l - this.pad.r;
        var plotH = this.ch - this.pad.t - this.pad.b;
        var xAt = function (i) { return _this.pad.l + (plotW * i) / (_this.months.length - 1); };
        var yAt = function (v) { return _this.pad.t + plotH - ((v - min) / (max - min)) * plotH; };
        // Four gridlines is enough to read the scale without ruling the plot
        var steps = 4;
        this.yTicks = [];
        for (var s = 0; s <= steps; s++) {
            var v = min + ((max - min) * s) / steps;
            this.yTicks.push({ v: Math.round(v * 10) / 10, y: yAt(v) });
        }
        this.actualPts = this.actual.map(function (v, i) { return ({ x: xAt(i), y: yAt(v) }); });
        this.targetPts = this.target.map(function (v, i) { return ({ x: xAt(i), y: yAt(v) }); });
        this.actualPath = this.line(this.actualPts);
        this.targetPath = this.line(this.targetPts);
        var base = this.pad.t + plotH;
        this.actualArea =
            this.actualPath +
                ' L ' + this.actualPts[this.actualPts.length - 1].x + ' ' + base +
                ' L ' + this.actualPts[0].x + ' ' + base + ' Z';
    };
    MagnusDashboardComponent.prototype.line = function (pts) {
        var _this = this;
        return pts.map(function (p, i) { return (i === 0 ? 'M' : 'L') + ' ' + _this.r(p.x) + ' ' + _this.r(p.y); }).join(' ');
    };
    MagnusDashboardComponent.prototype.r = function (n) { return Math.round(n * 100) / 100; };
    // Map the pointer to the nearest month so the whole plot is a hit target
    MagnusDashboardComponent.prototype.onTrendMove = function (ev) {
        var el = ev.currentTarget;
        var box = el.getBoundingClientRect();
        var rel = (ev.clientX - box.left) / box.width; // 0..1 across the element
        var x = rel * this.cw;
        var plotW = this.cw - this.pad.l - this.pad.r;
        var i = Math.round(((x - this.pad.l) / plotW) * (this.months.length - 1));
        if (i < 0) {
            i = 0;
        }
        if (i > this.months.length - 1) {
            i = this.months.length - 1;
        }
        this.hoverIdx = i;
    };
    MagnusDashboardComponent.prototype.onTrendLeave = function () { this.hoverIdx = null; };
    // Tooltip is placed in percentages so it tracks the responsive SVG
    MagnusDashboardComponent.prototype.tipLeft = function () {
        if (this.hoverIdx === null) {
            return '0%';
        }
        return ((this.actualPts[this.hoverIdx].x / this.cw) * 100) + '%';
    };
    MagnusDashboardComponent.prototype.tipFlip = function () {
        return this.hoverIdx !== null && this.hoverIdx > this.months.length - 4;
    };
    // ====================================================================
    // Attendance donut
    // ====================================================================
    MagnusDashboardComponent.prototype.buildDonut = function () {
        var _this = this;
        var cx = 90, cy = 90, rOuter = 78, rInner = 54;
        var angle = -Math.PI / 2; // start at 12 o'clock
        var gap = 0.028; // 2px-equivalent surface gap
        this.donutArcs = this.attendance.map(function (seg) {
            var frac = seg.value / _this.attendanceTotal;
            var sweep = frac * Math.PI * 2;
            var a0 = angle + gap / 2;
            var a1 = angle + sweep - gap / 2;
            angle += sweep;
            var large = (a1 - a0) > Math.PI ? 1 : 0;
            var p = function (r, a) { return _this.r(cx + r * Math.cos(a)) + ' ' + _this.r(cy + r * Math.sin(a)); };
            var d = 'M ' + p(rOuter, a0) +
                ' A ' + rOuter + ' ' + rOuter + ' 0 ' + large + ' 1 ' + p(rOuter, a1) +
                ' L ' + p(rInner, a1) +
                ' A ' + rInner + ' ' + rInner + ' 0 ' + large + ' 0 ' + p(rInner, a0) +
                ' Z';
            return { d: d, slot: seg.slot, label: seg.label, value: seg.value };
        });
    };
    // ====================================================================
    // Small helpers used by the template
    // ====================================================================
    MagnusDashboardComponent.prototype.sparkPath = function (vals) {
        var _this = this;
        var w = 72, h = 24;
        var min = Math.min.apply(null, vals);
        var max = Math.max.apply(null, vals);
        var span = (max - min) || 1;
        return vals
            .map(function (v, i) {
            var x = (w * i) / (vals.length - 1);
            var y = h - ((v - min) / span) * h;
            return (i === 0 ? 'M' : 'L') + ' ' + _this.r(x) + ' ' + _this.r(y);
        })
            .join(' ');
    };
    MagnusDashboardComponent.prototype.mixPct = function (v) { return Math.round((v / this.mixMax) * 100); };
    MagnusDashboardComponent.prototype.performerPct = function (v) { return Math.round((v / this.performerMax) * 100); };
    MagnusDashboardComponent.prototype.attendancePct = function (v) { return ((v / this.attendanceTotal) * 100).toFixed(1); };
    MagnusDashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-magnus-dashboard',
            template: __webpack_require__(/*! ./magnus-dashboard.component.html */ "./src/app/magnus-dashboard/magnus-dashboard.component.html"),
            styles: [__webpack_require__(/*! ./magnus-dashboard.component.scss */ "./src/app/magnus-dashboard/magnus-dashboard.component.scss")]
        })
    ], MagnusDashboardComponent);
    return MagnusDashboardComponent;
}());



/***/ }),

/***/ "./src/app/magnus-dashboard/magnus-dashboard.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/magnus-dashboard/magnus-dashboard.module.ts ***!
  \*************************************************************/
/*! exports provided: MagnusDashboardModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MagnusDashboardModule", function() { return MagnusDashboardModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/material */ "./src/app/material.ts");
/* harmony import */ var src_app_auth_component_guard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/auth-component.guard */ "./src/app/auth-component.guard.ts");
/* harmony import */ var _magnus_dashboard_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./magnus-dashboard.component */ "./src/app/magnus-dashboard/magnus-dashboard.component.ts");








var routes = [
    { path: '', component: _magnus_dashboard_component__WEBPACK_IMPORTED_MODULE_7__["MagnusDashboardComponent"], canActivate: [src_app_auth_component_guard__WEBPACK_IMPORTED_MODULE_6__["AuthComponentGuard"]], data: { expectedRole: ['1'] } }
];
var MagnusDashboardModule = /** @class */ (function () {
    function MagnusDashboardModule() {
    }
    MagnusDashboardModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _magnus_dashboard_component__WEBPACK_IMPORTED_MODULE_7__["MagnusDashboardComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                src_app_material__WEBPACK_IMPORTED_MODULE_5__["MaterialModule"]
            ]
        })
    ], MagnusDashboardModule);
    return MagnusDashboardModule;
}());



/***/ })

}]);