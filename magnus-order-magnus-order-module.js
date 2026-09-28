(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["magnus-order-magnus-order-module"],{

/***/ "./src/app/magnus-order/magnus-order-catalogue.component.html":
/*!********************************************************************!*\
  !*** ./src/app/magnus-order/magnus-order-catalogue.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-container\">\n  <div class=\"mgo\">\n\n    <!-- ====================================================================\n         Page head: what this is, and how to narrow it\n         ==================================================================== -->\n    <div class=\"mgo-head\">\n      <div class=\"mgo-title\">\n        <h2>Place primary order</h2>\n        <p>Pick a board, then the specification you are booking.</p>\n      </div>\n\n      <div class=\"mgo-tools\">\n        <div class=\"mgo-search\">\n          <i class=\"material-icons\">search</i>\n          <input type=\"text\" [(ngModel)]=\"search\" placeholder=\"Search board, grade or thickness\" />\n          <i class=\"material-icons mgo-clear\" *ngIf=\"search\" (click)=\"clearSearch()\">close</i>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"mgo-chips\">\n      <button type=\"button\" *ngFor=\"let c of chips\"\n              class=\"mgo-chip\" [class.on]=\"category === c\"\n              (click)=\"category = c\">{{ c }}</button>\n    </div>\n\n    <!-- ====================================================================\n         The grid\n         ==================================================================== -->\n    <div class=\"mgo-grid\" *ngIf=\"shown.length\">\n      <div class=\"mgo-card\" *ngFor=\"let p of shown; trackBy: trackProduct\"\n           [class.in-order]=\"inOrder(p) > 0\"\n           (click)=\"openSpecs(p)\">\n\n        <div class=\"mgo-shot\">\n          <img [src]=\"p.image\" [alt]=\"p.name\" />\n          <span class=\"mgo-sector\">{{ p.sector }}</span>\n          <span class=\"mgo-count\" *ngIf=\"inOrder(p) > 0\">{{ inOrder(p) }}</span>\n        </div>\n\n        <div class=\"mgo-body\">\n          <h3>{{ p.name }}</h3>\n          <p class=\"mgo-blurb\">{{ p.blurb }}</p>\n\n          <div class=\"mgo-grades\">\n            <span *ngFor=\"let g of grades(p)\">{{ g }}</span>\n          </div>\n\n          <div class=\"mgo-price\">\n            <div>\n              <span class=\"mgo-from\">FROM</span>\n              <strong>&#8377; {{ inr(fromRate(p)) }}</strong>\n            </div>\n            <button type=\"button\" class=\"mgo-add\" (click)=\"openSpecs(p); $event.stopPropagation()\">\n              <i class=\"material-icons\">add</i>\n            </button>\n          </div>\n\n          <span class=\"mgo-specs\">\n            {{ p.variants.length }} {{ p.variants.length === 1 ? 'specification' : 'specifications' }}\n          </span>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"mgo-empty\" *ngIf=\"!shown.length\">\n      <i class=\"material-icons\">search_off</i>\n      <h3>Nothing matches that</h3>\n      <p>Try a different grade, or clear the filters.</p>\n    </div>\n\n    <!-- ====================================================================\n         Specification panel - the same board in several builds\n         ==================================================================== -->\n    <div class=\"mgo-scrim\" *ngIf=\"open\" (click)=\"closeSpecs()\"></div>\n\n    <aside class=\"mgo-panel\" *ngIf=\"open\">\n      <header class=\"mgo-panel-head\">\n        <img [src]=\"open.image\" [alt]=\"open.name\" />\n        <div>\n          <h3>{{ open.name }}</h3>\n          <span>{{ open.category }} &middot; {{ open.sector }} &middot; {{ open.brand }}</span>\n        </div>\n        <button type=\"button\" class=\"mgo-close\" (click)=\"closeSpecs()\">\n          <i class=\"material-icons\">close</i>\n        </button>\n      </header>\n\n      <span class=\"mgo-label\">CHOOSE SPECIFICATION</span>\n\n      <div class=\"mgo-specs-list\">\n        <div class=\"mgo-spec\" *ngFor=\"let v of open.variants; trackBy: trackVariant\"\n             [class.on]=\"cart.qtyOf(v.id) > 0\"\n             [class.out]=\"!v.inStock\">\n\n          <div class=\"mgo-spec-body\">\n            <div class=\"mgo-spec-line\">\n              <strong>{{ v.thickness }}</strong>\n              <span class=\"mgo-tag\">{{ v.grade }}</span>\n              <span class=\"mgo-tag danger\" *ngIf=\"!v.inStock\">Out of stock</span>\n            </div>\n\n            <span class=\"mgo-spec-sub\">\n              {{ v.size }} &middot; {{ v.composition }} &middot; {{ v.face }} face<ng-container *ngIf=\"v.weight\"> &middot; {{ v.weight }}</ng-container>\n            </span>\n\n            <span class=\"mgo-spec-rate\">\n              &#8377; {{ inr(v.rate) }}<em> per sheet</em>\n            </span>\n          </div>\n\n          <ng-container *ngIf=\"v.inStock\">\n            <button type=\"button\" class=\"mgo-spec-add\" *ngIf=\"cart.qtyOf(v.id) === 0\"\n                    (click)=\"add(v)\">ADD</button>\n\n            <div class=\"mgo-stepper\" *ngIf=\"cart.qtyOf(v.id) > 0\">\n              <button type=\"button\" (click)=\"step(v, -1)\">&#8722;</button>\n              <span>{{ cart.qtyOf(v.id) }}</span>\n              <button type=\"button\" (click)=\"step(v, 1)\">+</button>\n            </div>\n          </ng-container>\n        </div>\n      </div>\n    </aside>\n\n    <!-- ====================================================================\n         The order so far - only once there is one\n         ==================================================================== -->\n    <div class=\"mgo-bar\" *ngIf=\"cart.count > 0\" (click)=\"review()\">\n      <div class=\"mgo-bar-left\">\n        <span>{{ cart.count }} {{ cart.count === 1 ? 'sheet' : 'sheets' }}</span>\n        <strong>&#8377; {{ inr(cart.total) }}</strong>\n      </div>\n      <div class=\"mgo-bar-right\">\n        Review order <i class=\"material-icons\">chevron_right</i>\n      </div>\n    </div>\n\n  </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/magnus-order/magnus-order-catalogue.component.scss":
/*!********************************************************************!*\
  !*** ./src/app/magnus-order/magnus-order-catalogue.component.scss ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: block;\n  height: 100%;\n}\n\n:host .main-container {\n  display: flex;\n  flex-direction: column;\n}\n\n.mgo {\n  flex: 1 1 auto;\n  min-height: 0;\n  overflow-y: auto;\n  padding: 20px 24px 120px;\n  background: var(--grey);\n}\n\n.mgo-head {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: 24px;\n  flex-wrap: wrap;\n  margin-bottom: 16px;\n}\n\n.mgo-title h2 {\n  margin: 0;\n  font-size: var(--text-2xl);\n  font-weight: 700;\n  letter-spacing: -0.3px;\n  color: var(--text);\n}\n\n.mgo-title p {\n  margin: 4px 0 0;\n  font-size: var(--text-base);\n  color: var(--text-muted);\n}\n\n.mgo-search {\n  position: relative;\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  width: 340px;\n  max-width: 100%;\n  height: 42px;\n  padding: 0 14px;\n  border-radius: 10px;\n  border: 1px solid var(--border-light);\n  background: var(--surface-card);\n}\n\n.mgo-search i {\n  font-size: 18px;\n  color: var(--text-muted);\n}\n\n.mgo-search input {\n  flex: 1;\n  min-width: 0;\n  border: 0;\n  outline: none;\n  background: transparent;\n  font-size: var(--text-md);\n  color: var(--text);\n}\n\n.mgo-search input::-moz-placeholder {\n  color: var(--text-muted);\n}\n\n.mgo-search input::placeholder {\n  color: var(--text-muted);\n}\n\n.mgo-search .mgo-clear {\n  cursor: pointer;\n}\n\n.mgo-chips {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px;\n  margin-bottom: 20px;\n}\n\n.mgo-chip {\n  padding: 7px 14px;\n  border-radius: 999px;\n  border: 1px solid var(--border-light);\n  background: var(--surface-card);\n  color: var(--text-secondary);\n  font-size: var(--text-sm);\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.15s ease;\n}\n\n.mgo-chip:hover {\n  border-color: var(--border-dark);\n}\n\n.mgo-chip.on {\n  background: var(--primary-light);\n  border-color: var(--primary);\n  color: var(--primary);\n}\n\n.mgo-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));\n  gap: 16px;\n}\n\n.mgo-card {\n  border-radius: 12px;\n  border: 1px solid var(--border-light);\n  background: var(--surface-card);\n  overflow: hidden;\n  cursor: pointer;\n  transition: box-shadow 0.18s ease, transform 0.18s ease, border-color 0.18s ease;\n}\n\n.mgo-card:hover {\n  transform: translateY(-2px);\n  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.08);\n}\n\n.mgo-card.in-order {\n  border-color: var(--primary);\n}\n\n.mgo-shot {\n  position: relative;\n  height: 150px;\n  background: var(--surface-hover);\n}\n\n.mgo-shot img {\n  width: 100%;\n  height: 100%;\n  -o-object-fit: cover;\n     object-fit: cover;\n  display: block;\n}\n\n.mgo-sector {\n  position: absolute;\n  top: 10px;\n  left: 10px;\n  padding: 3px 8px;\n  border-radius: 6px;\n  background: rgba(28, 30, 36, 0.55);\n  color: #fff;\n  font-size: 10px;\n  font-weight: 700;\n  letter-spacing: 0.8px;\n}\n\n.mgo-count {\n  position: absolute;\n  top: 10px;\n  right: 10px;\n  min-width: 22px;\n  height: 22px;\n  padding: 0 6px;\n  border-radius: 999px;\n  background: var(--primary);\n  color: var(--primary-contrast);\n  font-size: 11px;\n  font-weight: 700;\n  line-height: 22px;\n  text-align: center;\n}\n\n.mgo-body {\n  padding: 14px;\n}\n\n.mgo-body h3 {\n  margin: 0;\n  font-size: var(--text-md);\n  font-weight: 700;\n  letter-spacing: -0.2px;\n  color: var(--text);\n}\n\n.mgo-blurb {\n  margin: 4px 0 0;\n  font-size: var(--text-sm);\n  line-height: 1.4;\n  color: var(--text-muted);\n  min-height: 34px;\n}\n\n.mgo-grades {\n  display: flex;\n  gap: 5px;\n  margin-top: 8px;\n}\n\n.mgo-grades span {\n  padding: 2px 7px;\n  border-radius: 5px;\n  background: var(--grey);\n  color: var(--text-secondary);\n  font-size: 10px;\n  font-weight: 700;\n}\n\n.mgo-price {\n  display: flex;\n  align-items: flex-end;\n  justify-content: space-between;\n  margin-top: 12px;\n}\n\n.mgo-price strong {\n  display: block;\n  font-size: var(--text-lg);\n  font-weight: 700;\n  color: var(--text);\n}\n\n.mgo-from {\n  display: block;\n  font-size: 10px;\n  font-weight: 600;\n  letter-spacing: 0.6px;\n  color: var(--text-muted);\n}\n\n.mgo-add {\n  width: 34px;\n  height: 34px;\n  border: 0;\n  border-radius: 8px;\n  background: var(--primary);\n  color: var(--primary-contrast);\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  justify-content: center;\n}\n\n.mgo-add i {\n  font-size: 18px;\n}\n\n.mgo-add:hover {\n  background: var(--primary-shade);\n}\n\n.mgo-specs {\n  display: block;\n  margin-top: 8px;\n  font-size: 11px;\n  color: var(--text-muted);\n}\n\n.mgo-empty {\n  text-align: center;\n  padding: 72px 20px;\n  color: var(--text-muted);\n}\n\n.mgo-empty i {\n  font-size: 34px;\n}\n\n.mgo-empty h3 {\n  margin: 10px 0 2px;\n  font-size: var(--text-lg);\n  color: var(--text);\n}\n\n.mgo-empty p {\n  margin: 0;\n  font-size: var(--text-base);\n}\n\n.mgo-scrim {\n  position: fixed;\n  inset: 0;\n  background: rgba(28, 30, 36, 0.45);\n  z-index: 60;\n}\n\n.mgo-panel {\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  width: 420px;\n  max-width: 92vw;\n  z-index: 61;\n  display: flex;\n  flex-direction: column;\n  background: var(--surface-card);\n  border-left: 1px solid var(--border-light);\n  box-shadow: -8px 0 30px rgba(0, 0, 0, 0.14);\n}\n\n.mgo-panel-head {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 18px;\n  border-bottom: 1px solid var(--border-light);\n}\n\n.mgo-panel-head img {\n  width: 52px;\n  height: 52px;\n  border-radius: 8px;\n  -o-object-fit: cover;\n     object-fit: cover;\n}\n\n.mgo-panel-head h3 {\n  margin: 0;\n  font-size: var(--text-lg);\n  font-weight: 700;\n  color: var(--text);\n}\n\n.mgo-panel-head span {\n  font-size: var(--text-sm);\n  color: var(--text-muted);\n}\n\n.mgo-close {\n  margin-left: auto;\n  width: 32px;\n  height: 32px;\n  border: 0;\n  border-radius: 8px;\n  background: var(--grey);\n  color: var(--text-secondary);\n  cursor: pointer;\n}\n\n.mgo-close i {\n  font-size: 18px;\n}\n\n.mgo-label {\n  display: block;\n  padding: 16px 18px 8px;\n  font-size: 10px;\n  font-weight: 700;\n  letter-spacing: 1.1px;\n  color: var(--text-muted);\n}\n\n.mgo-specs-list {\n  flex: 1;\n  overflow-y: auto;\n  padding: 0 18px 24px;\n}\n\n.mgo-spec {\n  display: flex;\n  align-items: center;\n  gap: 12px;\n  padding: 14px;\n  border-radius: 10px;\n  border: 1px solid var(--border-light);\n  background: var(--grey);\n}\n\n.mgo-spec + .mgo-spec {\n  margin-top: 10px;\n}\n\n.mgo-spec.on {\n  background: var(--primary-light);\n  border-color: var(--primary);\n}\n\n.mgo-spec.out {\n  opacity: 0.55;\n}\n\n.mgo-spec-body {\n  flex: 1;\n  min-width: 0;\n}\n\n.mgo-spec-line {\n  display: flex;\n  align-items: center;\n  gap: 7px;\n}\n\n.mgo-spec-line strong {\n  font-size: var(--text-md);\n  font-weight: 700;\n  color: var(--text);\n}\n\n.mgo-tag {\n  padding: 2px 7px;\n  border-radius: 5px;\n  background: var(--surface-card);\n  color: var(--text-secondary);\n  font-size: 10px;\n  font-weight: 700;\n}\n\n.mgo-tag.danger {\n  background: var(--danger-light);\n  color: var(--danger);\n}\n\n.mgo-spec-sub {\n  display: block;\n  margin-top: 3px;\n  font-size: var(--text-sm);\n  color: var(--text-secondary);\n}\n\n.mgo-spec-rate {\n  display: block;\n  margin-top: 4px;\n  font-size: var(--text-md);\n  font-weight: 700;\n  color: var(--text);\n}\n\n.mgo-spec-rate em {\n  font-style: normal;\n  font-weight: 500;\n  font-size: var(--text-sm);\n  color: var(--text-muted);\n}\n\n.mgo-spec-add {\n  min-width: 68px;\n  height: 34px;\n  border: 0;\n  border-radius: 8px;\n  background: var(--primary);\n  color: var(--primary-contrast);\n  font-size: var(--text-sm);\n  font-weight: 700;\n  letter-spacing: 0.6px;\n  cursor: pointer;\n}\n\n.mgo-spec-add:hover {\n  background: var(--primary-shade);\n}\n\n.mgo-stepper {\n  display: flex;\n  align-items: center;\n  height: 34px;\n  border-radius: 8px;\n  border: 1.5px solid var(--primary);\n  background: var(--surface-card);\n}\n\n.mgo-stepper button {\n  width: 32px;\n  height: 100%;\n  border: 0;\n  background: transparent;\n  color: var(--primary);\n  font-size: 17px;\n  font-weight: 700;\n  cursor: pointer;\n}\n\n.mgo-stepper span {\n  min-width: 24px;\n  text-align: center;\n  font-size: var(--text-md);\n  font-weight: 700;\n  color: var(--text);\n}\n\n.mgo-bar {\n  position: fixed;\n  right: 28px;\n  bottom: 24px;\n  z-index: 40;\n  display: flex;\n  align-items: center;\n  gap: 28px;\n  padding: 12px 20px;\n  border-radius: 12px;\n  background: var(--primary);\n  color: var(--primary-contrast);\n  cursor: pointer;\n  box-shadow: 0 8px 26px rgba(var(--primary-rgb), 0.35);\n}\n\n.mgo-bar:hover {\n  background: var(--primary-shade);\n}\n\n.mgo-bar-left span {\n  display: block;\n  font-size: 10.5px;\n  font-weight: 600;\n  letter-spacing: 0.6px;\n  opacity: 0.85;\n}\n\n.mgo-bar-left strong {\n  font-size: var(--text-xl);\n  font-weight: 700;\n}\n\n.mgo-bar-right {\n  display: flex;\n  align-items: center;\n  font-size: var(--text-md);\n  font-weight: 700;\n}\n\n.mgo-bar-right i {\n  font-size: 19px;\n}\n\n@media (max-width: 900px) {\n  :host {\n    padding: 16px 16px 120px;\n  }\n  .mgo-search {\n    width: 100%;\n  }\n  .mgo-bar {\n    left: 16px;\n    right: 16px;\n    justify-content: space-between;\n  }\n}"

/***/ }),

/***/ "./src/app/magnus-order/magnus-order-catalogue.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/magnus-order/magnus-order-catalogue.component.ts ***!
  \******************************************************************/
/*! exports provided: MagnusOrderCatalogueComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MagnusOrderCatalogueComponent", function() { return MagnusOrderCatalogueComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _order_cart_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./order-cart.service */ "./src/app/magnus-order/order-cart.service.ts");
/* harmony import */ var _order_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./order-data */ "./src/app/magnus-order/order-data.ts");





// ============================================================================
// MAGNUS PLYWOOD - Primary order, catalogue
//
// The legacy way of adding a primary order was a form: pick a product from a
// dropdown, pick a specification from a second dropdown, type a quantity,
// press add, repeat. A rep placing a mixed lot did that six times and never
// saw what a board looked like.
//
// This is a catalogue instead - a grid of boards with a picture, the way any
// ordering screen now works. Tapping a card opens its specifications, because
// the same name comes in several compositions, faces and thicknesses and an
// order is placed against one of those, not against a name.
//
// Demo mock: no HTTP calls.
// ============================================================================
var MagnusOrderCatalogueComponent = /** @class */ (function () {
    function MagnusOrderCatalogueComponent(cart, router) {
        this.cart = cart;
        this.router = router;
        this.products = _order_data__WEBPACK_IMPORTED_MODULE_4__["PRODUCTS"];
        this.chips = Object(_order_data__WEBPACK_IMPORTED_MODULE_4__["categories"])();
        this.search = '';
        this.category = 'All';
        /** The product whose specifications are open, if any. */
        this.open = null;
        // Exposed to the template
        this.fromRate = _order_data__WEBPACK_IMPORTED_MODULE_4__["fromRate"];
        this.grades = _order_data__WEBPACK_IMPORTED_MODULE_4__["grades"];
        this.inr = _order_data__WEBPACK_IMPORTED_MODULE_4__["inr"];
    }
    MagnusOrderCatalogueComponent.prototype.ngOnInit = function () { };
    Object.defineProperty(MagnusOrderCatalogueComponent.prototype, "shown", {
        get: function () {
            var _this = this;
            var q = (this.search || '').trim().toLowerCase();
            return this.products.filter(function (p) {
                if (_this.category !== 'All' && p.category !== _this.category) {
                    return false;
                }
                if (!q) {
                    return true;
                }
                if (p.name.toLowerCase().indexOf(q) >= 0) {
                    return true;
                }
                if (p.blurb.toLowerCase().indexOf(q) >= 0) {
                    return true;
                }
                // a rep searches by what is written on the board: grade, thickness
                return p.variants.some(function (v) {
                    return (v.composition + ' ' + v.face + ' ' + v.grade + ' ' + v.thickness)
                        .toLowerCase().indexOf(q) >= 0;
                });
            });
        },
        enumerable: true,
        configurable: true
    });
    /** Sheets of this product already on the order, for the card's badge. */
    MagnusOrderCatalogueComponent.prototype.inOrder = function (p) {
        var _this = this;
        return p.variants.reduce(function (n, v) { return n + _this.cart.qtyOf(v.id); }, 0);
    };
    MagnusOrderCatalogueComponent.prototype.openSpecs = function (p) {
        this.open = p;
    };
    MagnusOrderCatalogueComponent.prototype.closeSpecs = function () {
        this.open = null;
    };
    MagnusOrderCatalogueComponent.prototype.add = function (v) {
        this.cart.add(v.id, 1);
    };
    MagnusOrderCatalogueComponent.prototype.step = function (v, by) {
        this.cart.setQty(v.id, this.cart.qtyOf(v.id) + by);
    };
    MagnusOrderCatalogueComponent.prototype.clearSearch = function () {
        this.search = '';
    };
    MagnusOrderCatalogueComponent.prototype.review = function () {
        this.router.navigate(['/primary-order/review']);
    };
    /** Used by the template's trackBy, so the grid is not rebuilt on a keypress. */
    MagnusOrderCatalogueComponent.prototype.trackProduct = function (_i, p) { return p.id; };
    MagnusOrderCatalogueComponent.prototype.trackVariant = function (_i, v) { return v.id; };
    MagnusOrderCatalogueComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-magnus-order-catalogue',
            template: __webpack_require__(/*! ./magnus-order-catalogue.component.html */ "./src/app/magnus-order/magnus-order-catalogue.component.html"),
            styles: [__webpack_require__(/*! ./magnus-order-catalogue.component.scss */ "./src/app/magnus-order/magnus-order-catalogue.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_order_cart_service__WEBPACK_IMPORTED_MODULE_3__["OrderCartService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], MagnusOrderCatalogueComponent);
    return MagnusOrderCatalogueComponent;
}());



/***/ }),

/***/ "./src/app/magnus-order/magnus-order-detail.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/magnus-order/magnus-order-detail.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-container\">\n  <div class=\"mgd-stage\">\n  <div class=\"mgd\" *ngIf=\"order\">\n\n    <!-- ====================================================================\n         Punched, and what it came to\n         ==================================================================== -->\n    <div class=\"mgd-head\">\n      <div>\n        <span class=\"mgd-ok\"><i class=\"material-icons\">check_circle</i> Order punched</span>\n        <h2>{{ order.number }}</h2>\n        <p>\n          {{ order.placedOn | date:'d MMM y, h:mm a' }} &middot; by {{ order.placedBy }}\n          &middot; <span class=\"mgd-status\">{{ order.status }}</span>\n        </p>\n      </div>\n\n      <div class=\"mgd-actions\">\n        <button type=\"button\" class=\"mgd-ghost\" (click)=\"backToList()\">\n          <i class=\"material-icons\">arrow_back</i> All orders\n        </button>\n        <button type=\"button\" class=\"mgd-ghost\" (click)=\"backToCatalogue()\">\n          <i class=\"material-icons\">add</i> New order\n        </button>\n        <button type=\"button\" class=\"mgd-pi\" (click)=\"openPi()\">\n          <i class=\"material-icons\">description</i> Generate PI\n        </button>\n      </div>\n    </div>\n\n    <div class=\"mgd-cols\">\n      <div class=\"mgd-main\">\n\n        <section class=\"mgd-card\">\n          <div class=\"mgd-card-head\"><span>BILLED TO</span></div>\n          <div class=\"mgd-party\">\n            <div>\n              <strong>{{ order.party.name }}</strong>\n              <span>{{ order.party.type }} &middot; {{ order.party.area }}</span>\n            </div>\n            <div class=\"mgd-terms\">\n              <span class=\"mgd-chip\" [class.on]=\"order.cashTerms\">\n                {{ order.cashTerms ? 'Cash / advance' : 'Credit terms' }}\n              </span>\n              <span class=\"mgd-chip\" [class.on]=\"order.selfPickup\">\n                {{ order.selfPickup ? 'Self pickup' : 'Delivered' }}\n              </span>\n            </div>\n          </div>\n        </section>\n\n        <section class=\"mgd-card\">\n          <div class=\"mgd-card-head\">\n            <span>ITEMS ({{ order.lines.length }})</span>\n            <span class=\"mgd-muted\">{{ sheets }} sheets</span>\n          </div>\n\n          <table class=\"mgd-table\">\n            <thead>\n              <tr>\n                <th>#</th>\n                <th>Product</th>\n                <th>Composition</th>\n                <th>Face</th>\n                <th>Grade</th>\n                <th>Thickness</th>\n                <th>Size</th>\n                <th class=\"num\">Rate</th>\n                <th class=\"num\">Qty</th>\n                <th class=\"num\">Amount</th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr *ngFor=\"let l of order.lines; let i = index; trackBy: trackLine\">\n                <td class=\"mgd-sn\">{{ i + 1 }}</td>\n                <td>\n                  <div class=\"mgd-prod\">\n                    <img [src]=\"l.product.image\" [alt]=\"l.product.name\" />\n                    <div>\n                      <strong>{{ l.product.name }}</strong>\n                      <span>{{ l.product.category }} &middot; {{ l.product.sector }}</span>\n                    </div>\n                  </div>\n                </td>\n                <td>{{ l.variant.composition }}</td>\n                <td>{{ l.variant.face }}</td>\n                <td><span class=\"mgd-tag\">{{ l.variant.grade }}</span></td>\n                <td>{{ l.variant.thickness }}</td>\n                <td>{{ l.variant.size }}</td>\n                <td class=\"num\">&#8377; {{ inr(l.rate) }}</td>\n                <td class=\"num\">{{ l.qty }}</td>\n                <td class=\"num\"><strong>&#8377; {{ inr(l.amount) }}</strong></td>\n              </tr>\n            </tbody>\n          </table>\n        </section>\n\n        <section class=\"mgd-card\">\n          <div class=\"mgd-card-head\">\n            <span>DISCOUNT LADDER</span>\n            <span class=\"mgd-muted\">\n              {{ order.totals.effectivePercent | number:'1.2-2' }}% effective\n            </span>\n          </div>\n\n          <table class=\"mgd-table ladder\">\n            <thead>\n              <tr>\n                <th>#</th>\n                <th>Discount</th>\n                <th>Basis</th>\n                <th class=\"num\">Rate</th>\n                <th class=\"num\">Applied on</th>\n                <th class=\"num\">Discount</th>\n                <th class=\"num\">Balance</th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr class=\"gross-row\">\n                <td></td>\n                <td colspan=\"4\"><strong>Gross value</strong></td>\n                <td class=\"num\"></td>\n                <td class=\"num\"><strong>&#8377; {{ inr(order.totals.gross) }}</strong></td>\n              </tr>\n              <tr *ngFor=\"let s of order.totals.steps; let i = index; trackBy: trackStep\"\n                  [class.off]=\"!s.applies\">\n                <td class=\"mgd-sn\">{{ i + 1 }}</td>\n                <td><strong>{{ s.label }}</strong><br /><span class=\"mgd-code\">{{ s.code }}</span></td>\n                <td class=\"mgd-basis\">{{ s.basis }}</td>\n                <td class=\"num\">{{ s.percent }}%</td>\n                <td class=\"num\">\n                  {{ s.applies ? ('₹ ' + inr(s.running + s.amount)) : '--' }}\n                </td>\n                <td class=\"num minus\">\n                  {{ s.applies ? ('- ₹ ' + inr(s.amount)) : 'not applied' }}\n                </td>\n                <td class=\"num\"><strong>&#8377; {{ inr(s.running) }}</strong></td>\n              </tr>\n            </tbody>\n          </table>\n        </section>\n      </div>\n\n      <!-- ==================================================================\n           What it comes to\n           ================================================================== -->\n      <aside class=\"mgd-side\">\n        <section class=\"mgd-card\">\n          <div class=\"mgd-card-head\"><span>SUMMARY</span></div>\n\n          <div class=\"mgd-row\"><span>Gross value</span><strong>&#8377; {{ inr(order.totals.gross) }}</strong></div>\n          <div class=\"mgd-row\">\n            <span>Ladder discount <em>({{ order.totals.effectivePercent | number:'1.2-2' }}%)</em></span>\n            <strong class=\"minus\">&minus; &#8377; {{ inr(order.totals.discountTotal) }}</strong>\n          </div>\n          <div class=\"mgd-row\"><span>Net value</span><strong>&#8377; {{ inr(order.totals.net) }}</strong></div>\n          <div class=\"mgd-row\"><span>GST @ {{ order.totals.gstPercent }}%</span><strong>&#8377; {{ inr(order.totals.gst) }}</strong></div>\n          <div class=\"mgd-row\" *ngIf=\"order.totals.roundOff\">\n            <span>Round off</span>\n            <strong>{{ order.totals.roundOff > 0 ? '+' : '' }} {{ order.totals.roundOff | number:'1.2-2' }}</strong>\n          </div>\n          <div class=\"mgd-row grand\"><span>Order total</span><strong>&#8377; {{ inr(order.totals.grand) }}</strong></div>\n\n          <button type=\"button\" class=\"mgd-pi wide\" (click)=\"openPi()\">\n            <i class=\"material-icons\">description</i> Generate PI\n          </button>\n        </section>\n      </aside>\n    </div>\n\n  </div>\n\n    <!-- ====================================================================\n         The proforma itself\n         ==================================================================== -->\n    <div class=\"mgd-scrim\" *ngIf=\"piOpen\" (click)=\"closePi()\"></div>\n\n    <div class=\"mgd-pi-wrap\" *ngIf=\"piOpen\">\n      <div class=\"mgd-pi-bar\">\n        <strong>Proforma invoice</strong>\n        <div>\n          <button type=\"button\" class=\"mgd-ghost\" (click)=\"printPi()\">\n            <i class=\"material-icons\">download</i> Download PDF\n          </button>\n          <button type=\"button\" class=\"mgd-close\" (click)=\"closePi()\">\n            <i class=\"material-icons\">close</i>\n          </button>\n        </div>\n      </div>\n\n      <div class=\"mgd-sheet\" id=\"pi-sheet\">\n\n        <header class=\"pi-head\">\n          <div class=\"pi-co\">\n            <img src=\"assets/img/magnus-logo.png\" alt=\"Magnus Plywoods\"\n                 onerror=\"this.style.display='none'\" />\n            <h1>{{ company.name }}</h1>\n            <p>{{ company.line1 }}<br />{{ company.line2 }}</p>\n            <p class=\"pi-ids\">\n              GSTIN {{ company.gstin }} &middot; PAN {{ company.pan }}<br />\n              {{ company.phone }} &middot; {{ company.email }}\n            </p>\n          </div>\n\n          <div class=\"pi-meta\">\n            <span class=\"pi-kind\">PROFORMA INVOICE</span>\n            <table>\n              <tr><td>PI No.</td><td><strong>PI/{{ order.number.split('/')[2] }}</strong></td></tr>\n              <tr><td>Order No.</td><td>{{ order.number }}</td></tr>\n              <tr><td>Date</td><td>{{ order.placedOn | date:'d MMM y' }}</td></tr>\n              <tr><td>Raised by</td><td>{{ order.placedBy }}</td></tr>\n              <tr><td>Status</td><td>{{ order.status }}</td></tr>\n            </table>\n          </div>\n        </header>\n\n        <section class=\"pi-to\">\n          <div>\n            <span>BILL TO</span>\n            <strong>{{ order.party.name }}</strong>\n            <p>{{ order.party.type }}<br />{{ order.party.area }}, Nagpur</p>\n          </div>\n          <div>\n            <span>TERMS</span>\n            <p>\n              Payment: {{ order.cashTerms ? 'Cash / advance against proforma' : 'Credit as per ledger' }}<br />\n              Freight: {{ order.selfPickup ? 'Self pickup from depot' : 'Delivered to counter' }}<br />\n              Validity: 7 days from date of issue\n            </p>\n          </div>\n        </section>\n\n        <!-- Items, with every column the master carries -->\n        <table class=\"pi-table\">\n          <thead>\n            <tr>\n              <th>#</th>\n              <th>Description</th>\n              <th>Composition</th>\n              <th>Face</th>\n              <th>Grade</th>\n              <th>Thickness</th>\n              <th>Size</th>\n              <th class=\"num\">Rate</th>\n              <th class=\"num\">Qty</th>\n              <th class=\"num\">Amount</th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr *ngFor=\"let l of order.lines; let i = index; trackBy: trackLine\">\n              <td>{{ i + 1 }}</td>\n              <td>\n                <strong>{{ l.product.name }}</strong><br />\n                <span class=\"pi-sub\">{{ l.product.brand }} &middot; {{ l.product.category }} &middot; {{ l.product.sector }}</span>\n              </td>\n              <td>{{ l.variant.composition }}</td>\n              <td>{{ l.variant.face }}</td>\n              <td>{{ l.variant.grade }}</td>\n              <td>{{ l.variant.thickness }}</td>\n              <td>{{ l.variant.size }}</td>\n              <td class=\"num\">{{ inr(l.rate) }}</td>\n              <td class=\"num\">{{ l.qty }}</td>\n              <td class=\"num\">{{ inr(l.amount) }}</td>\n            </tr>\n          </tbody>\n          <tfoot>\n            <tr>\n              <td colspan=\"8\"><strong>Gross value</strong></td>\n              <td class=\"num\"><strong>{{ sheets }}</strong></td>\n              <td class=\"num\"><strong>{{ inr(order.totals.gross) }}</strong></td>\n            </tr>\n          </tfoot>\n        </table>\n\n        <!-- The ladder, rung by rung, because that is what gets queried -->\n        <h3 class=\"pi-h3\">Discount working</h3>\n        <p class=\"pi-note\">\n          Discounts are cascading: each is calculated on the balance left after\n          the one above it, not on the gross value.\n        </p>\n\n        <table class=\"pi-table ladder\">\n          <thead>\n            <tr>\n              <th>#</th>\n              <th>Discount</th>\n              <th>Basis</th>\n              <th class=\"num\">Rate</th>\n              <th class=\"num\">Calculated on</th>\n              <th class=\"num\">Discount</th>\n              <th class=\"num\">Balance</th>\n            </tr>\n          </thead>\n          <tbody>\n            <tr class=\"pi-gross\">\n              <td></td>\n              <td colspan=\"5\"><strong>Gross value</strong></td>\n              <td class=\"num\"><strong>{{ inr(order.totals.gross) }}</strong></td>\n            </tr>\n            <tr *ngFor=\"let s of order.totals.steps; let i = index; trackBy: trackStep\"\n                [class.off]=\"!s.applies\">\n              <td>{{ i + 1 }}</td>\n              <td><strong>{{ s.label }}</strong> <span class=\"pi-code\">{{ s.code }}</span></td>\n              <td class=\"pi-sub\">{{ s.basis }}</td>\n              <td class=\"num\">{{ s.percent }}%</td>\n              <td class=\"num\">{{ s.applies ? inr(s.running + s.amount) : '--' }}</td>\n              <td class=\"num\">{{ s.applies ? ('- ' + inr(s.amount)) : 'not applied' }}</td>\n              <td class=\"num\"><strong>{{ inr(s.running) }}</strong></td>\n            </tr>\n          </tbody>\n          <tfoot>\n            <tr>\n              <td colspan=\"5\"><strong>Total discount ({{ order.totals.effectivePercent | number:'1.2-2' }}% effective)</strong></td>\n              <td class=\"num\"><strong>- {{ inr(order.totals.discountTotal) }}</strong></td>\n              <td class=\"num\"><strong>{{ inr(order.totals.net) }}</strong></td>\n            </tr>\n          </tfoot>\n        </table>\n\n        <div class=\"pi-totals\">\n          <table>\n            <tr><td>Gross value</td><td class=\"num\">{{ inr(order.totals.gross) }}</td></tr>\n            <tr><td>Less: cascading discount</td><td class=\"num\">- {{ inr(order.totals.discountTotal) }}</td></tr>\n            <tr class=\"rule\"><td>Net value</td><td class=\"num\">{{ inr(order.totals.net) }}</td></tr>\n            <tr><td>GST @ {{ order.totals.gstPercent }}%</td><td class=\"num\">{{ inr(order.totals.gst) }}</td></tr>\n            <tr *ngIf=\"order.totals.roundOff\">\n              <td>Round off</td>\n              <td class=\"num\">{{ order.totals.roundOff > 0 ? '+' : '' }}{{ order.totals.roundOff | number:'1.2-2' }}</td>\n            </tr>\n            <tr class=\"grand\"><td>Grand total</td><td class=\"num\">&#8377; {{ inr(order.totals.grand) }}</td></tr>\n          </table>\n        </div>\n\n        <footer class=\"pi-foot\">\n          <div>\n            <span>Declaration</span>\n            <p>\n              This is a proforma invoice and not a demand for payment. Goods\n              remain the property of {{ company.name }} until paid for in full.\n              Rates are inclusive of the discounts shown above and hold for the\n              validity period stated.\n            </p>\n          </div>\n          <div class=\"pi-sign\">\n            <span>For {{ company.name }}</span>\n            <div class=\"pi-line\"></div>\n            <span>Authorised signatory</span>\n          </div>\n        </footer>\n      </div>\n    </div>\n  </div>\n\n  <!-- The order number is only in memory, so a reload lands here -->\n  <div class=\"mgd-gone\" *ngIf=\"!order\">\n    <i class=\"material-icons\">receipt_long</i>\n    <h3>That order is not in this session</h3>\n    <p>Orders punched in the demo are held in memory and clear on reload.</p>\n    <button type=\"button\" class=\"mgd-ghost\" (click)=\"backToCatalogue()\">\n      Back to catalogue\n    </button>\n  </div>\n\n</div>\n"

/***/ }),

/***/ "./src/app/magnus-order/magnus-order-detail.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/magnus-order/magnus-order-detail.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: block;\n  height: 100%;\n}\n\n:host .main-container {\n  display: flex;\n  flex-direction: column;\n}\n\n.mgd-stage {\n  position: relative;\n  flex: 1 1 auto;\n  min-height: 0;\n  display: flex;\n  flex-direction: column;\n}\n\n.mgd {\n  flex: 1 1 auto;\n  min-height: 0;\n  overflow-y: auto;\n  padding: 20px 24px 40px;\n  background: var(--grey);\n}\n\n.mgd-head {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: 20px;\n  flex-wrap: wrap;\n  margin-bottom: 18px;\n}\n\n.mgd-head h2 {\n  margin: 4px 0 0;\n  font-size: var(--text-2xl);\n  font-weight: 700;\n  letter-spacing: -0.3px;\n  color: var(--text);\n}\n\n.mgd-head p {\n  margin: 3px 0 0;\n  font-size: var(--text-base);\n  color: var(--text-muted);\n}\n\n.mgd-ok {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  font-size: var(--text-sm);\n  font-weight: 700;\n  letter-spacing: 0.5px;\n  color: var(--success);\n}\n\n.mgd-ok i {\n  font-size: 16px;\n}\n\n.mgd-status {\n  color: var(--warning);\n  font-weight: 600;\n}\n\n.mgd-actions {\n  display: flex;\n  gap: 10px;\n}\n\n.mgd-ghost,\n.mgd-pi {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  padding: 10px 16px;\n  border-radius: 9px;\n  font-size: var(--text-md);\n  font-weight: 600;\n  cursor: pointer;\n}\n\n.mgd-ghost i,\n.mgd-pi i {\n  font-size: 17px;\n}\n\n.mgd-ghost {\n  border: 1px solid var(--border-dark);\n  background: var(--surface-card);\n  color: var(--text);\n}\n\n.mgd-ghost:hover {\n  border-color: var(--text-secondary);\n}\n\n.mgd-pi {\n  border: 0;\n  background: var(--primary);\n  color: var(--primary-contrast);\n}\n\n.mgd-pi:hover {\n  background: var(--primary-shade);\n}\n\n.mgd-pi.wide {\n  width: 100%;\n  margin-top: 14px;\n  justify-content: center;\n}\n\n.mgd-cols {\n  display: grid;\n  grid-template-columns: minmax(0, 1fr) 330px;\n  gap: 16px;\n  align-items: start;\n}\n\n.mgd-card {\n  padding: 18px;\n  border-radius: 12px;\n  border: 1px solid var(--border-light);\n  background: var(--surface-card);\n}\n\n.mgd-card + .mgd-card {\n  margin-top: 16px;\n}\n\n.mgd-card-head {\n  display: flex;\n  align-items: baseline;\n  justify-content: space-between;\n  margin-bottom: 14px;\n}\n\n.mgd-card-head span {\n  font-size: 10px;\n  font-weight: 700;\n  letter-spacing: 1.1px;\n  color: var(--text-muted);\n}\n\n.mgd-muted {\n  color: var(--text-muted);\n}\n\n.mgd-party {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 16px;\n  flex-wrap: wrap;\n}\n\n.mgd-party strong {\n  display: block;\n  font-size: var(--text-lg);\n  font-weight: 700;\n  color: var(--text);\n}\n\n.mgd-party span {\n  font-size: var(--text-base);\n  color: var(--text-muted);\n}\n\n.mgd-terms {\n  display: flex;\n  gap: 8px;\n}\n\n.mgd-chip {\n  padding: 5px 11px;\n  border-radius: 999px;\n  background: var(--grey);\n  color: var(--text-secondary);\n  font-size: var(--text-sm);\n  font-weight: 600;\n}\n\n.mgd-chip.on {\n  background: var(--success-light);\n  color: var(--success);\n}\n\n.mgd-table {\n  width: 100%;\n  border-collapse: collapse;\n  table-layout: auto !important;\n}\n\n.mgd-table th {\n  padding: 9px 10px;\n  text-align: left;\n  font-size: 10px;\n  font-weight: 700;\n  letter-spacing: 0.8px;\n  text-transform: uppercase;\n  color: var(--text-muted);\n  border-bottom: 1px solid var(--border-light);\n  white-space: nowrap;\n}\n\n.mgd-table td {\n  padding: 11px 10px;\n  font-size: var(--text-base);\n  color: var(--text);\n  border-bottom: 1px solid var(--border-light);\n  vertical-align: middle;\n}\n\n.mgd-table tbody tr:last-child td {\n  border-bottom: 0;\n}\n\n.mgd-table .num {\n  text-align: right;\n  white-space: nowrap;\n}\n\n.mgd-table .minus {\n  color: var(--danger);\n}\n\n.mgd-table tr.off td {\n  opacity: 0.5;\n}\n\n.mgd-table tr.gross-row td {\n  background: var(--grey);\n}\n\n.mgd-sn {\n  color: var(--text-muted);\n  width: 1%;\n}\n\n.mgd-prod {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n\n.mgd-prod img {\n  width: 38px;\n  height: 38px;\n  border-radius: 6px;\n  -o-object-fit: cover;\n     object-fit: cover;\n  flex: none;\n}\n\n.mgd-prod strong {\n  display: block;\n  font-size: var(--text-md);\n  font-weight: 600;\n}\n\n.mgd-prod span {\n  font-size: 11px;\n  color: var(--text-muted);\n}\n\n.mgd-tag {\n  padding: 2px 7px;\n  border-radius: 5px;\n  background: var(--grey);\n  font-size: 10px;\n  font-weight: 700;\n  color: var(--text-secondary);\n}\n\n.mgd-code {\n  font-size: 9.5px;\n  font-weight: 700;\n  letter-spacing: 0.5px;\n  color: var(--text-muted);\n}\n\n.mgd-basis {\n  font-size: var(--text-sm);\n  color: var(--text-muted);\n}\n\n.mgd-row {\n  display: flex;\n  align-items: baseline;\n  justify-content: space-between;\n  gap: 12px;\n  padding: 7px 0;\n}\n\n.mgd-row span {\n  font-size: var(--text-base);\n  color: var(--text-secondary);\n}\n\n.mgd-row span em {\n  font-style: normal;\n  font-size: 11px;\n  color: var(--text-muted);\n}\n\n.mgd-row strong {\n  font-size: var(--text-md);\n  font-weight: 700;\n  color: var(--text);\n}\n\n.mgd-row strong.minus {\n  color: var(--danger);\n}\n\n.mgd-row.grand {\n  margin-top: 8px;\n  padding-top: 12px;\n  border-top: 2px solid var(--text);\n}\n\n.mgd-row.grand span {\n  font-size: var(--text-md);\n  font-weight: 700;\n  color: var(--text);\n}\n\n.mgd-row.grand strong {\n  font-size: var(--text-xl);\n}\n\n.mgd-scrim {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  background: rgba(28, 30, 36, 0.55);\n  z-index: 70;\n}\n\n.mgd-pi-wrap {\n  position: absolute;\n  top: 20px;\n  right: 24px;\n  bottom: 20px;\n  left: 24px;\n  z-index: 71;\n  display: flex;\n  flex-direction: column;\n  border-radius: 12px;\n  overflow: hidden;\n  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.3);\n}\n\n.mgd-pi-bar {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  gap: 16px;\n  padding: 12px 16px;\n  background: var(--surface-card);\n  border-bottom: 1px solid var(--border-light);\n}\n\n.mgd-pi-bar strong {\n  font-size: var(--text-lg);\n  font-weight: 700;\n  color: var(--text);\n}\n\n.mgd-pi-bar div {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n\n.mgd-close {\n  width: 34px;\n  height: 34px;\n  border: 0;\n  border-radius: 8px;\n  background: var(--grey);\n  color: var(--text-secondary);\n  cursor: pointer;\n}\n\n.mgd-close i {\n  font-size: 18px;\n}\n\n.mgd-sheet {\n  flex: 1;\n  overflow-y: auto;\n  padding: 34px 38px 44px;\n  background: #ffffff;\n  color: #1c1e24;\n  font-size: 12px;\n  line-height: 1.5;\n}\n\n.pi-head {\n  display: flex;\n  justify-content: space-between;\n  gap: 32px;\n  padding-bottom: 18px;\n  border-bottom: 2px solid #1c1e24;\n}\n\n.pi-co img {\n  height: 34px;\n  margin-bottom: 8px;\n}\n\n.pi-co h1 {\n  margin: 0;\n  font-size: 19px;\n  font-weight: 700;\n  letter-spacing: -0.2px;\n}\n\n.pi-co p {\n  margin: 4px 0 0;\n  color: #4a4d57;\n}\n\n.pi-co .pi-ids {\n  font-size: 11px;\n  color: #6b6f7a;\n}\n\n.pi-meta {\n  text-align: right;\n  min-width: 250px;\n}\n\n.pi-meta table {\n  width: 100%;\n  border-collapse: collapse;\n}\n\n.pi-meta td {\n  padding: 2px 0;\n  font-size: 11.5px;\n}\n\n.pi-meta td:first-child {\n  color: #6b6f7a;\n  text-align: left;\n}\n\n.pi-meta td:last-child {\n  text-align: right;\n}\n\n.pi-kind {\n  display: inline-block;\n  margin-bottom: 8px;\n  padding: 4px 11px;\n  border-radius: 4px;\n  background: #1c1e24;\n  color: #ffffff;\n  font-size: 10.5px;\n  font-weight: 700;\n  letter-spacing: 1.2px;\n}\n\n.pi-to {\n  display: flex;\n  gap: 48px;\n  padding: 16px 0 20px;\n  border-bottom: 1px solid #dfe1e6;\n}\n\n.pi-to span {\n  display: block;\n  font-size: 9.5px;\n  font-weight: 700;\n  letter-spacing: 1px;\n  color: #6b6f7a;\n  margin-bottom: 4px;\n}\n\n.pi-to strong {\n  font-size: 14px;\n}\n\n.pi-to p {\n  margin: 2px 0 0;\n  color: #4a4d57;\n}\n\n.pi-h3 {\n  margin: 26px 0 2px;\n  font-size: 13px;\n  font-weight: 700;\n}\n\n.pi-note {\n  margin: 0 0 10px;\n  font-size: 11px;\n  color: #6b6f7a;\n}\n\n.pi-table {\n  width: 100%;\n  border-collapse: collapse;\n  margin-top: 14px;\n  table-layout: auto !important;\n}\n\n.pi-table th {\n  padding: 7px 8px;\n  text-align: left;\n  font-size: 9.5px;\n  font-weight: 700;\n  letter-spacing: 0.7px;\n  text-transform: uppercase;\n  color: #ffffff;\n  background: #2a2c33;\n  white-space: nowrap;\n}\n\n.pi-table td {\n  padding: 8px;\n  font-size: 11.5px;\n  border-bottom: 1px solid #e6e8ec;\n  vertical-align: top;\n}\n\n.pi-table tfoot td {\n  border-top: 2px solid #1c1e24;\n  border-bottom: 0;\n  background: #f5f6f8;\n  font-size: 12px;\n}\n\n.pi-table .num {\n  text-align: right;\n  white-space: nowrap;\n}\n\n.pi-table tr.off td {\n  color: #9a9ea8;\n}\n\n.pi-table tr.pi-gross td {\n  background: #f5f6f8;\n}\n\n.pi-sub {\n  font-size: 10.5px;\n  color: #6b6f7a;\n}\n\n.pi-code {\n  padding: 1px 5px;\n  border-radius: 3px;\n  background: #eef0f3;\n  font-size: 9px;\n  font-weight: 700;\n  color: #6b6f7a;\n}\n\n.pi-totals {\n  display: flex;\n  justify-content: flex-end;\n  margin-top: 20px;\n}\n\n.pi-totals table {\n  min-width: 320px;\n  border-collapse: collapse;\n}\n\n.pi-totals td {\n  padding: 5px 0;\n  font-size: 12px;\n}\n\n.pi-totals td.num {\n  text-align: right;\n  font-variant-numeric: tabular-nums;\n}\n\n.pi-totals tr.rule td {\n  border-top: 1px solid #dfe1e6;\n  padding-top: 8px;\n}\n\n.pi-totals tr.grand td {\n  border-top: 2px solid #1c1e24;\n  padding-top: 9px;\n  font-size: 15px;\n  font-weight: 700;\n}\n\n.pi-foot {\n  display: flex;\n  justify-content: space-between;\n  gap: 48px;\n  margin-top: 36px;\n  padding-top: 16px;\n  border-top: 1px solid #dfe1e6;\n}\n\n.pi-foot span {\n  display: block;\n  font-size: 9.5px;\n  font-weight: 700;\n  letter-spacing: 1px;\n  color: #6b6f7a;\n}\n\n.pi-foot p {\n  margin: 5px 0 0;\n  max-width: 520px;\n  font-size: 10.5px;\n  color: #4a4d57;\n}\n\n.pi-sign {\n  text-align: center;\n  min-width: 200px;\n}\n\n.pi-sign .pi-line {\n  height: 1px;\n  margin: 46px 0 6px;\n  background: #1c1e24;\n}\n\n.mgd-gone {\n  text-align: center;\n  padding: 90px 20px;\n  color: var(--text-muted);\n}\n\n.mgd-gone i {\n  font-size: 38px;\n}\n\n.mgd-gone h3 {\n  margin: 12px 0 2px;\n  font-size: var(--text-lg);\n  color: var(--text);\n}\n\n.mgd-gone p {\n  margin: 0 0 18px;\n  font-size: var(--text-base);\n}\n\n@media (max-width: 1100px) {\n  .mgd-cols {\n    grid-template-columns: minmax(0, 1fr);\n  }\n  .mgd-pi-wrap {\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    border-radius: 0;\n  }\n}\n\n@media print {\n  :host {\n    padding: 0;\n    background: #ffffff;\n  }\n  .mgd,\n  .mgd-scrim,\n  .mgd-pi-bar {\n    display: none !important;\n  }\n  .mgd-stage {\n    display: block;\n  }\n  .mgd-pi-wrap {\n    position: static;\n    top: auto;\n    right: auto;\n    bottom: auto;\n    left: auto;\n    box-shadow: none;\n    border-radius: 0;\n  }\n  .mgd-sheet {\n    overflow: visible;\n    padding: 0;\n  }\n}"

/***/ }),

/***/ "./src/app/magnus-order/magnus-order-detail.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/magnus-order/magnus-order-detail.component.ts ***!
  \***************************************************************/
/*! exports provided: MagnusOrderDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MagnusOrderDetailComponent", function() { return MagnusOrderDetailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _order_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./order-data */ "./src/app/magnus-order/order-data.ts");
/* harmony import */ var _placed_orders__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./placed-orders */ "./src/app/magnus-order/placed-orders.ts");





// ============================================================================
// MAGNUS PLYWOOD - Primary order, detail
//
// What was punched, and the proforma that goes out from it.
//
// The ladder is stored on the order rather than recomputed here on purpose:
// a PI is a commitment, and it has to keep saying what it said on the day it
// was raised even if the scheme masters move afterwards.
//
// Demo mock: reads the in-memory store.
// ============================================================================
var MagnusOrderDetailComponent = /** @class */ (function () {
    function MagnusOrderDetailComponent(route, router) {
        this.route = route;
        this.router = router;
        this.order = null;
        this.company = _placed_orders__WEBPACK_IMPORTED_MODULE_4__["COMPANY"];
        /** The proforma sheet is an overlay, so the page behind it keeps its state. */
        this.piOpen = false;
        this.inr = _order_data__WEBPACK_IMPORTED_MODULE_3__["inr"];
    }
    MagnusOrderDetailComponent.prototype.ngOnInit = function () {
        // The demo store is in memory, so make sure the seeded orders are there
        // when this page is the first one opened.
        Object(_placed_orders__WEBPACK_IMPORTED_MODULE_4__["seedDemoOrders"])();
        this.order = Object(_placed_orders__WEBPACK_IMPORTED_MODULE_4__["byId"])(this.route.snapshot.paramMap.get('id'));
    };
    Object.defineProperty(MagnusOrderDetailComponent.prototype, "sheets", {
        get: function () {
            return this.order ? this.order.lines.reduce(function (n, l) { return n + l.qty; }, 0) : 0;
        },
        enumerable: true,
        configurable: true
    });
    MagnusOrderDetailComponent.prototype.openPi = function () { this.piOpen = true; };
    MagnusOrderDetailComponent.prototype.closePi = function () { this.piOpen = false; };
    /** Browser print, which is also how it is saved as a PDF. */
    MagnusOrderDetailComponent.prototype.printPi = function () {
        window.print();
    };
    MagnusOrderDetailComponent.prototype.backToCatalogue = function () {
        this.router.navigate(['/primary-order']);
    };
    MagnusOrderDetailComponent.prototype.backToList = function () {
        this.router.navigate(['/primary-order/list']);
    };
    MagnusOrderDetailComponent.prototype.trackLine = function (i) { return i; };
    MagnusOrderDetailComponent.prototype.trackStep = function (_i, s) { return s.code; };
    MagnusOrderDetailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-magnus-order-detail',
            template: __webpack_require__(/*! ./magnus-order-detail.component.html */ "./src/app/magnus-order/magnus-order-detail.component.html"),
            styles: [__webpack_require__(/*! ./magnus-order-detail.component.scss */ "./src/app/magnus-order/magnus-order-detail.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], MagnusOrderDetailComponent);
    return MagnusOrderDetailComponent;
}());



/***/ }),

/***/ "./src/app/magnus-order/magnus-order-list.component.html":
/*!***************************************************************!*\
  !*** ./src/app/magnus-order/magnus-order-list.component.html ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-container\">\n  <div class=\"mgl\">\n\n    <div class=\"mgl-head\">\n      <div class=\"mgl-title\">\n        <h2>Primary Order</h2>\n        <p>\n          {{ shown.length }} order{{ shown.length === 1 ? '' : 's' }}\n          &middot; &#8377; {{ inr(totalValue) }} booked\n        </p>\n      </div>\n\n      <div class=\"mgl-tools\">\n        <div class=\"mgl-search\">\n          <i class=\"material-icons\">search</i>\n          <input type=\"text\" [(ngModel)]=\"search\"\n                 placeholder=\"Order number, party or rep\" />\n          <i class=\"material-icons mgl-clear\" *ngIf=\"search\" (click)=\"clearSearch()\">close</i>\n        </div>\n\n        <button type=\"button\" class=\"mgl-new\" (click)=\"newOrder()\">\n          <i class=\"material-icons\">add</i> New Order\n        </button>\n      </div>\n    </div>\n\n    <div class=\"mgl-chips\">\n      <button type=\"button\" class=\"mgl-chip\" [class.on]=\"status === 'all'\"\n              (click)=\"status = 'all'\">All</button>\n      <button type=\"button\" class=\"mgl-chip\" [class.on]=\"status === 'pending'\"\n              (click)=\"status = 'pending'\">Pending approval</button>\n      <button type=\"button\" class=\"mgl-chip\" [class.on]=\"status === 'approved'\"\n              (click)=\"status = 'approved'\">Approved</button>\n      <button type=\"button\" class=\"mgl-chip\" [class.on]=\"status === 'dispatched'\"\n              (click)=\"status = 'dispatched'\">Dispatched</button>\n    </div>\n\n    <div class=\"mgl-card\" *ngIf=\"shown.length\">\n      <table class=\"mgl-table\">\n        <thead>\n          <tr>\n            <th>Order</th>\n            <th>Party</th>\n            <th>Placed by</th>\n            <th class=\"num\">Items</th>\n            <th class=\"num\">Sheets</th>\n            <th class=\"num\">Gross</th>\n            <th class=\"num\">Discount</th>\n            <th class=\"num\">Order total</th>\n            <th>Status</th>\n            <th></th>\n          </tr>\n        </thead>\n        <tbody>\n          <tr *ngFor=\"let o of shown; trackBy: trackOrder\" (click)=\"open(o)\">\n            <td>\n              <strong class=\"mgl-no\">{{ o.number }}</strong>\n              <span class=\"mgl-sub\">{{ o.placedOn | date:'d MMM y, h:mm a' }}</span>\n            </td>\n            <td>\n              <strong>{{ o.party.name }}</strong>\n              <span class=\"mgl-sub\">{{ o.party.type }} &middot; {{ o.party.area }}</span>\n            </td>\n            <td>{{ o.placedBy }}</td>\n            <td class=\"num\">{{ o.lines.length }}</td>\n            <td class=\"num\">{{ sheets(o) }}</td>\n            <td class=\"num\">&#8377; {{ inr(o.totals.gross) }}</td>\n            <td class=\"num\">\n              <span class=\"mgl-disc\" [class.high]=\"isOverridden(o)\">\n                &minus; &#8377; {{ inr(o.totals.discountTotal) }}\n              </span>\n              <span class=\"mgl-sub\">{{ o.totals.effectivePercent | number:'1.2-2' }}% effective</span>\n            </td>\n            <td class=\"num\"><strong>&#8377; {{ inr(o.totals.grand) }}</strong></td>\n            <td>\n              <span class=\"mgl-status\" [ngClass]=\"statusClass(o)\">{{ o.status }}</span>\n            </td>\n            <td class=\"num\">\n              <i class=\"material-icons mgl-go\">chevron_right</i>\n            </td>\n          </tr>\n        </tbody>\n      </table>\n    </div>\n\n    <div class=\"mgl-empty\" *ngIf=\"!shown.length\">\n      <i class=\"material-icons\">receipt_long</i>\n      <h3>{{ orders.length ? 'Nothing matches that' : 'No orders punched yet' }}</h3>\n      <p>\n        {{ orders.length\n            ? 'Try a different status, or clear the search.'\n            : 'Orders punched from the catalogue land here.' }}\n      </p>\n      <button type=\"button\" class=\"mgl-new\" (click)=\"newOrder()\">\n        <i class=\"material-icons\">add</i> New Order\n      </button>\n    </div>\n\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/magnus-order/magnus-order-list.component.scss":
/*!***************************************************************!*\
  !*** ./src/app/magnus-order/magnus-order-list.component.scss ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: block;\n  height: 100%;\n}\n\n:host .main-container {\n  display: flex;\n  flex-direction: column;\n}\n\n.mgl {\n  flex: 1 1 auto;\n  min-height: 0;\n  overflow-y: auto;\n  padding: 20px 24px 40px;\n  background: var(--grey);\n}\n\n.mgl-head {\n  display: flex;\n  align-items: flex-start;\n  justify-content: space-between;\n  gap: 24px;\n  flex-wrap: wrap;\n  margin-bottom: 16px;\n}\n\n.mgl-title h2 {\n  margin: 0;\n  font-size: var(--text-2xl);\n  font-weight: 700;\n  letter-spacing: -0.3px;\n  color: var(--text);\n}\n\n.mgl-title p {\n  margin: 4px 0 0;\n  font-size: var(--text-base);\n  color: var(--text-muted);\n}\n\n.mgl-tools {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n  flex-wrap: wrap;\n}\n\n.mgl-search {\n  display: flex;\n  align-items: center;\n  gap: 8px;\n  width: 320px;\n  max-width: 100%;\n  height: 42px;\n  padding: 0 14px;\n  border-radius: 10px;\n  border: 1px solid var(--border-light);\n  background: var(--surface-card);\n}\n\n.mgl-search i {\n  font-size: 18px;\n  color: var(--text-muted);\n}\n\n.mgl-search input {\n  flex: 1;\n  min-width: 0;\n  border: 0;\n  outline: none;\n  background: transparent;\n  font-size: var(--text-md);\n  color: var(--text);\n}\n\n.mgl-search input::-moz-placeholder {\n  color: var(--text-muted);\n}\n\n.mgl-search input::placeholder {\n  color: var(--text-muted);\n}\n\n.mgl-search .mgl-clear {\n  cursor: pointer;\n}\n\n.mgl-new {\n  display: inline-flex;\n  align-items: center;\n  gap: 6px;\n  height: 42px;\n  padding: 0 18px;\n  border: 0;\n  border-radius: 10px;\n  background: var(--primary);\n  color: var(--primary-contrast);\n  font-size: var(--text-md);\n  font-weight: 700;\n  cursor: pointer;\n}\n\n.mgl-new i {\n  font-size: 18px;\n}\n\n.mgl-new:hover {\n  background: var(--primary-shade);\n}\n\n.mgl-chips {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 8px;\n  margin-bottom: 18px;\n}\n\n.mgl-chip {\n  padding: 7px 14px;\n  border-radius: 999px;\n  border: 1px solid var(--border-light);\n  background: var(--surface-card);\n  color: var(--text-secondary);\n  font-size: var(--text-sm);\n  font-weight: 600;\n  cursor: pointer;\n  transition: all 0.15s ease;\n}\n\n.mgl-chip:hover {\n  border-color: var(--border-dark);\n}\n\n.mgl-chip.on {\n  background: var(--primary-light);\n  border-color: var(--primary);\n  color: var(--primary);\n}\n\n.mgl-card {\n  border-radius: 12px;\n  border: 1px solid var(--border-light);\n  background: var(--surface-card);\n  overflow: hidden;\n}\n\n.mgl-table {\n  width: 100%;\n  border-collapse: collapse;\n  table-layout: auto !important;\n}\n\n.mgl-table th {\n  padding: 11px 12px;\n  text-align: left;\n  font-size: 10px;\n  font-weight: 700;\n  letter-spacing: 0.9px;\n  text-transform: uppercase;\n  color: var(--text-muted);\n  background: var(--grey);\n  border-bottom: 1px solid var(--border-light);\n  white-space: nowrap;\n}\n\n.mgl-table td {\n  padding: 13px 12px;\n  font-size: var(--text-md);\n  color: var(--text);\n  border-bottom: 1px solid var(--border-light);\n  vertical-align: middle;\n}\n\n.mgl-table tbody tr {\n  cursor: pointer;\n  transition: background 0.12s ease;\n}\n\n.mgl-table tbody tr:hover {\n  background: var(--surface-hover);\n}\n\n.mgl-table tbody tr:last-child td {\n  border-bottom: 0;\n}\n\n.mgl-table strong {\n  font-weight: 600;\n}\n\n.mgl-table .num {\n  text-align: right;\n  white-space: nowrap;\n}\n\n.mgl-no {\n  display: block;\n  font-weight: 700 !important;\n  color: var(--primary);\n}\n\n.mgl-sub {\n  display: block;\n  margin-top: 2px;\n  font-size: 11px;\n  color: var(--text-muted);\n}\n\n.mgl-disc {\n  display: block;\n  font-weight: 700;\n  color: var(--danger);\n}\n\n.mgl-disc.high {\n  -webkit-text-decoration: underline dotted;\n          text-decoration: underline dotted;\n}\n\n.mgl-status {\n  display: inline-block;\n  padding: 4px 10px;\n  border-radius: 999px;\n  font-size: 11px;\n  font-weight: 600;\n  white-space: nowrap;\n}\n\n.mgl-status.ok {\n  background: var(--success-light);\n  color: var(--success-dark);\n}\n\n.mgl-status.warn {\n  background: var(--warning-light);\n  color: var(--warning-dark);\n}\n\n.mgl-status.wait {\n  background: var(--info-light);\n  color: var(--info-dark);\n}\n\n.mgl-go {\n  font-size: 20px;\n  color: var(--text-muted);\n}\n\n.mgl-empty {\n  text-align: center;\n  padding: 72px 20px;\n  color: var(--text-muted);\n}\n\n.mgl-empty i {\n  font-size: 38px;\n}\n\n.mgl-empty h3 {\n  margin: 12px 0 2px;\n  font-size: var(--text-lg);\n  color: var(--text);\n}\n\n.mgl-empty p {\n  margin: 0 0 18px;\n  font-size: var(--text-base);\n}\n\n@media (max-width: 900px) {\n  .mgl {\n    padding: 16px;\n  }\n  .mgl-search {\n    width: 100%;\n  }\n}"

/***/ }),

/***/ "./src/app/magnus-order/magnus-order-list.component.ts":
/*!*************************************************************!*\
  !*** ./src/app/magnus-order/magnus-order-list.component.ts ***!
  \*************************************************************/
/*! exports provided: MagnusOrderListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MagnusOrderListComponent", function() { return MagnusOrderListComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _order_data__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./order-data */ "./src/app/magnus-order/order-data.ts");
/* harmony import */ var _placed_orders__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./placed-orders */ "./src/app/magnus-order/placed-orders.ts");





// ============================================================================
// MAGNUS PLYWOOD - Primary order listing
//
// What has been punched: newest first, with the figure that matters on each
// row - what it was worth gross, what the ladder took off, and what the
// dealer actually owes.
//
// The legacy listing carried twenty-odd columns and none of the discount
// working, which is the one thing a manager opens a primary order to check.
// So the ladder's effective percentage is on the row itself, and anything out
// of line is visible without opening anything.
//
// Demo mock: reads the in-memory store.
// ============================================================================
var MagnusOrderListComponent = /** @class */ (function () {
    function MagnusOrderListComponent(router) {
        this.router = router;
        this.orders = [];
        this.search = '';
        this.status = 'all';
        this.inr = _order_data__WEBPACK_IMPORTED_MODULE_3__["inr"];
    }
    MagnusOrderListComponent.prototype.ngOnInit = function () {
        Object(_placed_orders__WEBPACK_IMPORTED_MODULE_4__["seedDemoOrders"])();
        this.orders = Object(_placed_orders__WEBPACK_IMPORTED_MODULE_4__["all"])();
    };
    Object.defineProperty(MagnusOrderListComponent.prototype, "shown", {
        get: function () {
            var _this = this;
            var q = (this.search || '').trim().toLowerCase();
            return this.orders.filter(function (o) {
                if (_this.status !== 'all') {
                    var s = o.status.toLowerCase();
                    if (_this.status === 'pending' && s.indexOf('pending') < 0) {
                        return false;
                    }
                    if (_this.status === 'approved' && s.indexOf('approved') < 0) {
                        return false;
                    }
                    if (_this.status === 'dispatched' && s.indexOf('dispatch') < 0) {
                        return false;
                    }
                }
                if (!q) {
                    return true;
                }
                return (o.number.toLowerCase().indexOf(q) >= 0 ||
                    o.party.name.toLowerCase().indexOf(q) >= 0 ||
                    o.placedBy.toLowerCase().indexOf(q) >= 0);
            });
        },
        enumerable: true,
        configurable: true
    });
    MagnusOrderListComponent.prototype.sheets = function (o) {
        return o.lines.reduce(function (n, l) { return n + l.qty; }, 0);
    };
    /** An overridden ladder is the thing a manager is looking for. */
    MagnusOrderListComponent.prototype.isOverridden = function (o) {
        return o.status.toLowerCase().indexOf('overrid') >= 0;
    };
    MagnusOrderListComponent.prototype.statusClass = function (o) {
        var s = o.status.toLowerCase();
        if (s.indexOf('dispatch') >= 0) {
            return 'ok';
        }
        if (s.indexOf('approved') >= 0) {
            return 'ok';
        }
        if (s.indexOf('overrid') >= 0) {
            return 'warn';
        }
        return 'wait';
    };
    Object.defineProperty(MagnusOrderListComponent.prototype, "totalValue", {
        get: function () {
            return this.shown.reduce(function (t, o) { return t + o.totals.grand; }, 0);
        },
        enumerable: true,
        configurable: true
    });
    MagnusOrderListComponent.prototype.open = function (o) {
        this.router.navigate(['/primary-order/detail', o.id]);
    };
    MagnusOrderListComponent.prototype.newOrder = function () {
        this.router.navigate(['/primary-order']);
    };
    MagnusOrderListComponent.prototype.clearSearch = function () {
        this.search = '';
    };
    MagnusOrderListComponent.prototype.trackOrder = function (_i, o) { return o.number; };
    MagnusOrderListComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-magnus-order-list',
            template: __webpack_require__(/*! ./magnus-order-list.component.html */ "./src/app/magnus-order/magnus-order-list.component.html"),
            styles: [__webpack_require__(/*! ./magnus-order-list.component.scss */ "./src/app/magnus-order/magnus-order-list.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], MagnusOrderListComponent);
    return MagnusOrderListComponent;
}());



/***/ }),

/***/ "./src/app/magnus-order/magnus-order-review.component.html":
/*!*****************************************************************!*\
  !*** ./src/app/magnus-order/magnus-order-review.component.html ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"main-container\">\n  <div class=\"mgr\">\n\n    <div class=\"mgr-head\">\n      <button type=\"button\" class=\"mgr-back\" (click)=\"backToCatalogue()\">\n        <i class=\"material-icons\">arrow_back</i> Catalogue\n      </button>\n      <h2>Review order</h2>\n    </div>\n\n    <div class=\"mgr-cols\">\n\n      <!-- ==================================================================\n           Left: who it is for, and what is on it\n           ================================================================== -->\n      <div class=\"mgr-main\">\n\n        <section class=\"mgr-card\">\n          <span class=\"mgr-label\">BOOK AGAINST</span>\n\n          <mat-form-field appearance=\"outline\" class=\"mgr-select\">\n            <mat-select [(ngModel)]=\"cart.partyId\" (selectionChange)=\"onPartyChange()\"\n                        placeholder=\"Choose a party\">\n              <mat-option *ngFor=\"let p of parties\" [value]=\"p.id\">\n                {{ p.name }} &mdash; {{ p.type }}, {{ p.area }}\n              </mat-option>\n            </mat-select>\n          </mat-form-field>\n\n          <div class=\"mgr-terms\">\n            <label>\n              <input type=\"checkbox\" [(ngModel)]=\"cashTerms\" (change)=\"onTermsChange()\" />\n              <span>Cash / advance payment</span>\n              <em>Turns on the cash and settlement rungs</em>\n            </label>\n            <label>\n              <input type=\"checkbox\" [(ngModel)]=\"selfPickup\" (change)=\"onTermsChange()\" />\n              <span>Self pickup from depot</span>\n              <em>Transport rebate</em>\n            </label>\n          </div>\n        </section>\n\n        <section class=\"mgr-card\">\n          <span class=\"mgr-label\">ITEMS ({{ lines.length }})</span>\n\n          <div class=\"mgr-empty\" *ngIf=\"!lines.length\">\n            <p>Nothing on this order yet.</p>\n            <button type=\"button\" class=\"mgr-ghost\" (click)=\"backToCatalogue()\">\n              Back to catalogue\n            </button>\n          </div>\n\n          <table class=\"mgr-table\" *ngIf=\"lines.length\">\n            <thead>\n              <tr>\n                <th>Product</th>\n                <th>Specification</th>\n                <th class=\"num\">Rate</th>\n                <th class=\"qty-col\">Qty</th>\n                <th class=\"num\">Amount</th>\n                <th></th>\n              </tr>\n            </thead>\n            <tbody>\n              <tr *ngFor=\"let l of lines; trackBy: trackLine\">\n                <td>\n                  <div class=\"mgr-prod\">\n                    <img [src]=\"l.product.image\" [alt]=\"l.product.name\" />\n                    <div>\n                      <strong>{{ l.product.name }}</strong>\n                      <span>{{ l.product.category }}</span>\n                    </div>\n                  </div>\n                </td>\n                <td>\n                  <strong class=\"mgr-thick\">{{ l.variant.thickness }}</strong>\n                  <span class=\"mgr-sub\">{{ l.variant.grade }} &middot; {{ l.variant.size }}</span>\n                </td>\n                <td class=\"num\">&#8377; {{ inr(l.rate) }}</td>\n                <td class=\"qty-col\">\n                  <div class=\"mgr-stepper\">\n                    <button type=\"button\" (click)=\"step(l.variant.id, -1)\">&#8722;</button>\n                    <span>{{ l.qty }}</span>\n                    <button type=\"button\" (click)=\"step(l.variant.id, 1)\">+</button>\n                  </div>\n                </td>\n                <td class=\"num\"><strong>&#8377; {{ inr(l.amount) }}</strong></td>\n                <td class=\"num\">\n                  <button type=\"button\" class=\"mgr-remove\" (click)=\"remove(l.variant.id)\">\n                    <i class=\"material-icons\">delete_outline</i>\n                  </button>\n                </td>\n              </tr>\n            </tbody>\n          </table>\n        </section>\n      </div>\n\n      <!-- ==================================================================\n           Right: the ladder, rung by rung, each one the rep's to argue with\n           ================================================================== -->\n      <aside class=\"mgr-side\" *ngIf=\"lines.length\">\n\n        <section class=\"mgr-card\" *ngIf=\"!party\">\n          <span class=\"mgr-label\">DISCOUNT LADDER</span>\n          <p class=\"mgr-pick\">\n            Choose the party first. Every rate on the ladder is that party's own\n            entitlement, so there is nothing to work out until one is picked.\n          </p>\n        </section>\n\n        <section class=\"mgr-card\" *ngIf=\"party\">\n          <div class=\"mgr-ladder-head\">\n            <span class=\"mgr-label\">DISCOUNT LADDER</span>\n            <button type=\"button\" class=\"mgr-reset\" *ngIf=\"anyOverride\"\n                    (click)=\"resetLadder()\">\n              <i class=\"material-icons\">undo</i> Reset all\n            </button>\n          </div>\n\n          <p class=\"mgr-note\">\n            {{ party.name }} &middot; {{ party.terms.category.label }}<ng-container *ngIf=\"party.terms.scheme\"> &middot; {{ party.terms.scheme.label }}</ng-container>.\n            Untick a rung to drop it, or type over its rate. Each rung is taken\n            on what is left after the one above it, not on the gross.\n          </p>\n\n          <div class=\"mgr-row gross\">\n            <span>Gross value</span>\n            <strong>&#8377; {{ inr(totals.gross) }}</strong>\n          </div>\n\n          <div class=\"mgr-rung\" *ngFor=\"let s of totals.steps; let i = index; trackBy: trackRung\"\n               [class.off]=\"!s.applies\"\n               [class.edited]=\"isOverridden(rungs[i])\">\n\n            <label class=\"mgr-tick\">\n              <input type=\"checkbox\" [checked]=\"s.applies\" (change)=\"toggleRung(rungs[i])\" />\n            </label>\n\n            <div class=\"mgr-rung-text\">\n              <strong>{{ s.label }}</strong>\n              <span>{{ s.basis }}</span>\n              <span class=\"mgr-was\" *ngIf=\"isOverridden(rungs[i])\">\n                Party rate {{ rungs[i].defaultPercent }}%<ng-container *ngIf=\"rungs[i].eligible !== s.applies\">, normally {{ rungs[i].eligible ? 'applied' : 'not applied' }}</ng-container>\n                <button type=\"button\" (click)=\"resetRung(rungs[i])\">reset</button>\n              </span>\n            </div>\n\n            <div class=\"mgr-rate\">\n              <input type=\"number\" min=\"0\" max=\"100\" step=\"0.25\"\n                     [value]=\"s.percent\"\n                     [disabled]=\"!s.applies\"\n                     (change)=\"onPercentChange(rungs[i], $event.target.value)\" />\n              <em>%</em>\n            </div>\n\n            <div class=\"mgr-rung-amt\">\n              <strong *ngIf=\"s.applies\">&minus; &#8377; {{ inr(s.amount) }}</strong>\n              <strong *ngIf=\"!s.applies\" class=\"na\">dropped</strong>\n              <span>&#8377; {{ inr(s.running) }}</span>\n            </div>\n          </div>\n\n          <div class=\"mgr-row\">\n            <span>Total discount <em>({{ totals.effectivePercent | number:'1.2-2' }}% effective)</em></span>\n            <strong class=\"minus\">&minus; &#8377; {{ inr(totals.discountTotal) }}</strong>\n          </div>\n          <div class=\"mgr-row\">\n            <span>Net value</span>\n            <strong>&#8377; {{ inr(totals.net) }}</strong>\n          </div>\n          <div class=\"mgr-row\">\n            <span>GST @ {{ totals.gstPercent }}%</span>\n            <strong>&#8377; {{ inr(totals.gst) }}</strong>\n          </div>\n          <div class=\"mgr-row\" *ngIf=\"totals.roundOff\">\n            <span>Round off</span>\n            <strong>{{ totals.roundOff > 0 ? '+' : '' }} {{ totals.roundOff | number:'1.2-2' }}</strong>\n          </div>\n\n          <div class=\"mgr-row grand\">\n            <span>Order total</span>\n            <strong>&#8377; {{ inr(totals.grand) }}</strong>\n          </div>\n\n          <p class=\"mgr-flag\" *ngIf=\"anyOverride\">\n            <i class=\"material-icons\">info</i>\n            The ladder has been changed from this party's entitlement. The order\n            will go out marked for approval.\n          </p>\n\n          <p class=\"mgr-error\" *ngIf=\"error\">{{ error }}</p>\n\n          <button type=\"button\" class=\"mgr-place\" [disabled]=\"placing\" (click)=\"place()\">\n            {{ placing ? 'Punching order' : 'Punch order' }}\n          </button>\n\n          <p class=\"mgr-foot\">\n            {{ cart.count }} sheets &middot; {{ lines.length }} line{{ lines.length === 1 ? '' : 's' }}\n          </p>\n        </section>\n      </aside>\n\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/magnus-order/magnus-order-review.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/magnus-order/magnus-order-review.component.scss ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ":host {\n  display: block;\n  height: 100%;\n}\n\n:host .main-container {\n  display: flex;\n  flex-direction: column;\n}\n\n.mgr {\n  flex: 1 1 auto;\n  min-height: 0;\n  overflow-y: auto;\n  padding: 20px 24px 40px;\n  background: var(--grey);\n}\n\n.mgr-head {\n  display: flex;\n  align-items: center;\n  gap: 16px;\n  margin-bottom: 18px;\n}\n\n.mgr-head h2 {\n  margin: 0;\n  font-size: var(--text-2xl);\n  font-weight: 700;\n  letter-spacing: -0.3px;\n  color: var(--text);\n}\n\n.mgr-back {\n  display: inline-flex;\n  align-items: center;\n  gap: 5px;\n  padding: 7px 13px;\n  border-radius: 999px;\n  border: 1px solid var(--border-light);\n  background: var(--surface-card);\n  color: var(--text-secondary);\n  font-size: var(--text-sm);\n  font-weight: 600;\n  cursor: pointer;\n}\n\n.mgr-back i {\n  font-size: 16px;\n}\n\n.mgr-back:hover {\n  border-color: var(--border-dark);\n}\n\n.mgr-cols {\n  display: grid;\n  grid-template-columns: minmax(0, 1fr) 400px;\n  gap: 16px;\n  align-items: start;\n}\n\n.mgr-card {\n  padding: 18px;\n  border-radius: 12px;\n  border: 1px solid var(--border-light);\n  background: var(--surface-card);\n}\n\n.mgr-card + .mgr-card {\n  margin-top: 16px;\n}\n\n.mgr-label {\n  display: block;\n  margin-bottom: 12px;\n  font-size: 10px;\n  font-weight: 700;\n  letter-spacing: 1.1px;\n  color: var(--text-muted);\n}\n\n.mgr-select {\n  width: 100%;\n}\n\n.mgr-terms {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 10px;\n  margin-top: 4px;\n}\n\n.mgr-terms label {\n  flex: 1;\n  min-width: 190px;\n  display: grid;\n  grid-template-columns: auto 1fr;\n  grid-template-rows: auto auto;\n  -moz-column-gap: 9px;\n       column-gap: 9px;\n  align-items: center;\n  padding: 11px 13px;\n  border-radius: 10px;\n  border: 1px solid var(--border-light);\n  background: var(--grey);\n  cursor: pointer;\n}\n\n.mgr-terms input {\n  grid-row: span 2;\n  width: 16px;\n  height: 16px;\n  accent-color: var(--primary);\n}\n\n.mgr-terms span {\n  font-size: var(--text-md);\n  font-weight: 600;\n  color: var(--text);\n}\n\n.mgr-terms em {\n  font-style: normal;\n  font-size: var(--text-sm);\n  color: var(--text-muted);\n}\n\n.mgr-table {\n  width: 100%;\n  border-collapse: collapse;\n  table-layout: auto !important;\n}\n\n.mgr-table th {\n  padding: 9px 12px;\n  text-align: left;\n  font-size: 10px;\n  font-weight: 700;\n  letter-spacing: 0.9px;\n  text-transform: uppercase;\n  color: var(--text-muted);\n  border-bottom: 1px solid var(--border-light);\n  white-space: nowrap;\n}\n\n.mgr-table td {\n  padding: 12px;\n  font-size: var(--text-md);\n  color: var(--text);\n  border-bottom: 1px solid var(--border-light);\n  vertical-align: middle;\n}\n\n.mgr-table tr:last-child td {\n  border-bottom: 0;\n}\n\n.mgr-table .num {\n  text-align: right;\n  white-space: nowrap;\n}\n\n.mgr-table .qty-col {\n  width: 1%;\n}\n\n.mgr-prod {\n  display: flex;\n  align-items: center;\n  gap: 10px;\n}\n\n.mgr-prod img {\n  width: 42px;\n  height: 42px;\n  border-radius: 7px;\n  -o-object-fit: cover;\n     object-fit: cover;\n  flex: none;\n}\n\n.mgr-prod strong {\n  display: block;\n  font-size: var(--text-md);\n  font-weight: 600;\n}\n\n.mgr-prod span {\n  font-size: var(--text-sm);\n  color: var(--text-muted);\n}\n\n.mgr-thick {\n  display: block;\n  font-size: var(--text-md);\n  font-weight: 700;\n}\n\n.mgr-sub {\n  font-size: var(--text-sm);\n  color: var(--text-muted);\n}\n\n.mgr-stepper {\n  display: inline-flex;\n  align-items: center;\n  height: 32px;\n  border-radius: 8px;\n  border: 1px solid var(--border-light);\n}\n\n.mgr-stepper button {\n  width: 30px;\n  height: 100%;\n  border: 0;\n  background: transparent;\n  color: var(--text-secondary);\n  font-size: 16px;\n  font-weight: 700;\n  cursor: pointer;\n}\n\n.mgr-stepper button:hover {\n  color: var(--primary);\n}\n\n.mgr-stepper span {\n  min-width: 26px;\n  text-align: center;\n  font-size: var(--text-md);\n  font-weight: 700;\n}\n\n.mgr-remove {\n  border: 0;\n  background: transparent;\n  color: var(--text-muted);\n  cursor: pointer;\n}\n\n.mgr-remove i {\n  font-size: 18px;\n}\n\n.mgr-remove:hover {\n  color: var(--danger);\n}\n\n.mgr-empty {\n  text-align: center;\n  padding: 26px 0 8px;\n}\n\n.mgr-empty p {\n  margin: 0 0 14px;\n  font-size: var(--text-base);\n  color: var(--text-muted);\n}\n\n.mgr-ghost {\n  padding: 9px 18px;\n  border-radius: 8px;\n  border: 1px solid var(--border-dark);\n  background: transparent;\n  color: var(--text);\n  font-size: var(--text-md);\n  font-weight: 600;\n  cursor: pointer;\n}\n\n.mgr-note {\n  margin: -6px 0 14px;\n  font-size: var(--text-sm);\n  line-height: 1.45;\n  color: var(--text-muted);\n}\n\n.mgr-rung {\n  padding: 10px 0;\n  border-bottom: 1px dashed var(--border-light);\n}\n\n.mgr-rung.off {\n  opacity: 0.5;\n}\n\n.mgr-rung-head {\n  display: flex;\n  align-items: flex-start;\n  gap: 9px;\n}\n\n.mgr-code {\n  flex: none;\n  min-width: 42px;\n  padding: 3px 6px;\n  border-radius: 5px;\n  background: var(--grey);\n  color: var(--text-secondary);\n  font-size: 9.5px;\n  font-weight: 700;\n  letter-spacing: 0.5px;\n  text-align: center;\n}\n\n.mgr-rung-text {\n  flex: 1;\n  min-width: 0;\n}\n\n.mgr-rung-text strong {\n  display: block;\n  font-size: var(--text-base);\n  font-weight: 600;\n  color: var(--text);\n}\n\n.mgr-rung-text strong em {\n  font-style: normal;\n  font-weight: 700;\n  color: var(--primary);\n}\n\n.mgr-rung-text span {\n  display: block;\n  font-size: 11px;\n  line-height: 1.35;\n  color: var(--text-muted);\n}\n\n.mgr-rung-amt {\n  flex: none;\n  text-align: right;\n}\n\n.mgr-rung-amt strong {\n  display: block;\n  font-size: var(--text-base);\n  font-weight: 700;\n  color: var(--danger);\n}\n\n.mgr-rung-amt strong.na {\n  color: var(--text-muted);\n  font-weight: 600;\n  font-size: 11px;\n}\n\n.mgr-rung-amt span {\n  font-size: 11px;\n  color: var(--text-muted);\n}\n\n.mgr-row {\n  display: flex;\n  align-items: baseline;\n  justify-content: space-between;\n  gap: 12px;\n  padding: 7px 0;\n}\n\n.mgr-row span {\n  font-size: var(--text-base);\n  color: var(--text-secondary);\n}\n\n.mgr-row span em {\n  font-style: normal;\n  font-size: 11px;\n  color: var(--text-muted);\n}\n\n.mgr-row strong {\n  font-size: var(--text-md);\n  font-weight: 700;\n  color: var(--text);\n}\n\n.mgr-row strong.minus {\n  color: var(--danger);\n}\n\n.mgr-row.gross {\n  padding-bottom: 12px;\n  border-bottom: 1px solid var(--border-light);\n}\n\n.mgr-row.grand {\n  margin-top: 8px;\n  padding-top: 12px;\n  border-top: 2px solid var(--text);\n}\n\n.mgr-row.grand span {\n  font-size: var(--text-md);\n  font-weight: 700;\n  color: var(--text);\n}\n\n.mgr-row.grand strong {\n  font-size: var(--text-xl);\n}\n\n.mgr-error {\n  margin: 12px 0 0;\n  padding: 9px 12px;\n  border-radius: 8px;\n  background: var(--danger-light);\n  color: var(--danger);\n  font-size: var(--text-sm);\n}\n\n.mgr-place {\n  width: 100%;\n  margin-top: 14px;\n  padding: 13px;\n  border: 0;\n  border-radius: 10px;\n  background: var(--primary);\n  color: var(--primary-contrast);\n  font-size: var(--text-md);\n  font-weight: 700;\n  cursor: pointer;\n}\n\n.mgr-place:hover:not(:disabled) {\n  background: var(--primary-shade);\n}\n\n.mgr-place:disabled {\n  opacity: 0.6;\n  cursor: default;\n}\n\n.mgr-foot {\n  margin: 10px 0 0;\n  text-align: center;\n  font-size: var(--text-sm);\n  color: var(--text-muted);\n}\n\n@media (max-width: 1100px) {\n  .mgr-cols {\n    grid-template-columns: minmax(0, 1fr);\n  }\n}\n\n.mgr-pick {\n  margin: -4px 0 0;\n  padding: 14px;\n  border-radius: 10px;\n  border: 1px dashed var(--border-dark);\n  background: var(--grey);\n  font-size: var(--text-base);\n  line-height: 1.5;\n  color: var(--text-secondary);\n}\n\n.mgr-ladder-head {\n  display: flex;\n  align-items: baseline;\n  justify-content: space-between;\n}\n\n.mgr-reset {\n  display: inline-flex;\n  align-items: center;\n  gap: 4px;\n  margin-bottom: 12px;\n  padding: 0;\n  border: 0;\n  background: transparent;\n  color: var(--primary);\n  font-size: var(--text-sm);\n  font-weight: 600;\n  cursor: pointer;\n}\n\n.mgr-reset i {\n  font-size: 15px;\n}\n\n.mgr-rung {\n  display: flex;\n  align-items: flex-start;\n  gap: 9px;\n  padding: 11px 0;\n  border-bottom: 1px dashed var(--border-light);\n}\n\n.mgr-rung.off .mgr-rung-text strong,\n.mgr-rung.off .mgr-rung-text > span {\n  opacity: 0.55;\n}\n\n.mgr-rung.edited {\n  margin: 0 -10px;\n  padding: 11px 10px;\n  border-radius: 8px;\n  background: var(--warning-light);\n}\n\n.mgr-tick {\n  flex: none;\n  padding-top: 2px;\n  cursor: pointer;\n}\n\n.mgr-tick input {\n  width: 17px;\n  height: 17px;\n  accent-color: var(--primary);\n  cursor: pointer;\n}\n\n.mgr-rate {\n  flex: none;\n  display: flex;\n  align-items: center;\n  gap: 2px;\n}\n\n.mgr-rate input {\n  width: 54px;\n  padding: 5px 6px;\n  border-radius: 6px;\n  border: 1px solid var(--border-dark);\n  background: var(--surface-card);\n  color: var(--text);\n  font-size: var(--text-base);\n  font-weight: 700;\n  text-align: right;\n}\n\n.mgr-rate input:focus {\n  outline: none;\n  border-color: var(--primary);\n}\n\n.mgr-rate input:disabled {\n  opacity: 0.45;\n  background: var(--grey);\n}\n\n.mgr-rate em {\n  font-style: normal;\n  font-size: var(--text-sm);\n  font-weight: 700;\n  color: var(--text-muted);\n}\n\n.mgr-was {\n  display: block;\n  margin-top: 3px;\n  font-size: 10.5px;\n  color: var(--warning-dark);\n}\n\n.mgr-was button {\n  margin-left: 6px;\n  padding: 0;\n  border: 0;\n  background: transparent;\n  color: var(--primary);\n  font-size: 10.5px;\n  font-weight: 700;\n  text-decoration: underline;\n  cursor: pointer;\n}\n\n.mgr-flag {\n  display: flex;\n  align-items: flex-start;\n  gap: 6px;\n  margin: 12px 0 0;\n  padding: 10px 12px;\n  border-radius: 8px;\n  background: var(--warning-light);\n  color: var(--warning-dark);\n  font-size: var(--text-sm);\n  line-height: 1.45;\n}\n\n.mgr-flag i {\n  font-size: 16px;\n  flex: none;\n}"

/***/ }),

/***/ "./src/app/magnus-order/magnus-order-review.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/magnus-order/magnus-order-review.component.ts ***!
  \***************************************************************/
/*! exports provided: MagnusOrderReviewComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MagnusOrderReviewComponent", function() { return MagnusOrderReviewComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _order_cart_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./order-cart.service */ "./src/app/magnus-order/order-cart.service.ts");
/* harmony import */ var _order_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./order-data */ "./src/app/magnus-order/order-data.ts");
/* harmony import */ var _order_discounts__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./order-discounts */ "./src/app/magnus-order/order-discounts.ts");
/* harmony import */ var _placed_orders__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./placed-orders */ "./src/app/magnus-order/placed-orders.ts");







var MagnusOrderReviewComponent = /** @class */ (function () {
    function MagnusOrderReviewComponent(cart, router) {
        this.cart = cart;
        this.router = router;
        this.parties = _order_data__WEBPACK_IMPORTED_MODULE_4__["PARTIES"];
        // The two terms the rep negotiates. Both feed the default ladder.
        this.cashTerms = true;
        this.selfPickup = false;
        /** The working ladder. Empty until a party is chosen. */
        this.rungs = [];
        this.placing = false;
        this.error = '';
        this.inr = _order_data__WEBPACK_IMPORTED_MODULE_4__["inr"];
    }
    MagnusOrderReviewComponent.prototype.ngOnInit = function () {
        if (this.cart.partyId) {
            this.resetLadder();
        }
    };
    Object.defineProperty(MagnusOrderReviewComponent.prototype, "party", {
        get: function () {
            var _this = this;
            return this.parties.filter(function (p) { return p.id === _this.cart.partyId; })[0] || null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MagnusOrderReviewComponent.prototype, "lines", {
        get: function () {
            var out = [];
            this.cart.lines.forEach(function (l) {
                var hit = Object(_order_data__WEBPACK_IMPORTED_MODULE_4__["findVariant"])(l.variantId);
                if (hit) {
                    out.push({
                        product: hit.product,
                        variant: hit.variant,
                        qty: l.qty,
                        rate: hit.variant.rate,
                        amount: hit.variant.rate * l.qty
                    });
                }
            });
            return out;
        },
        enumerable: true,
        configurable: true
    });
    // --------------------------------------------------------------------------
    // The ladder
    // --------------------------------------------------------------------------
    /** Drops every override and goes back to what the party is entitled to. */
    MagnusOrderReviewComponent.prototype.resetLadder = function () {
        if (!this.party) {
            this.rungs = [];
            return;
        }
        this.rungs = Object(_order_discounts__WEBPACK_IMPORTED_MODULE_5__["ladderFor"])(this.party.terms, this.cart.count, this.cashTerms, this.selfPickup).map(function (r) { return (tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, r, { defaultPercent: r.percent, eligible: r.applies, touched: false })); });
    };
    /**
     * Re-reads the rules after something about the order changed - a quantity,
     * the payment terms. Rungs the rep has not touched follow the rules; the
     * ones they have are left alone, because an override is a decision and the
     * screen should not quietly undo it.
     */
    MagnusOrderReviewComponent.prototype.refreshLadder = function () {
        var _this = this;
        if (!this.party) {
            this.rungs = [];
            return;
        }
        var fresh = Object(_order_discounts__WEBPACK_IMPORTED_MODULE_5__["ladderFor"])(this.party.terms, this.cart.count, this.cashTerms, this.selfPickup);
        var kept = [];
        fresh.forEach(function (f) {
            var was = _this.rungs.filter(function (r) { return r.code === f.code; })[0];
            if (was && was.touched) {
                kept.push(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, was, { basis: f.basis, eligible: f.applies }));
            }
            else {
                kept.push(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, f, { defaultPercent: f.percent, eligible: f.applies, touched: false }));
            }
        });
        this.rungs = kept;
    };
    /** Called when the party changes - a new party means a new entitlement. */
    MagnusOrderReviewComponent.prototype.onPartyChange = function () {
        this.resetLadder();
    };
    MagnusOrderReviewComponent.prototype.onTermsChange = function () {
        this.refreshLadder();
    };
    MagnusOrderReviewComponent.prototype.toggleRung = function (r) {
        r.applies = !r.applies;
        r.touched = true;
    };
    MagnusOrderReviewComponent.prototype.onPercentChange = function (r, value) {
        var n = parseFloat(value);
        if (isNaN(n) || n < 0) {
            n = 0;
        }
        if (n > 100) {
            n = 100;
        }
        r.percent = n;
        r.touched = true;
    };
    /** Back to the party's own figure for one rung. */
    MagnusOrderReviewComponent.prototype.resetRung = function (r) {
        r.percent = r.defaultPercent;
        r.applies = r.eligible;
        r.touched = false;
    };
    MagnusOrderReviewComponent.prototype.isOverridden = function (r) {
        return r.touched && (r.percent !== r.defaultPercent || r.applies !== r.eligible);
    };
    Object.defineProperty(MagnusOrderReviewComponent.prototype, "anyOverride", {
        get: function () {
            var _this = this;
            return this.rungs.some(function (r) { return _this.isOverridden(r); });
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MagnusOrderReviewComponent.prototype, "totals", {
        get: function () {
            if (!this.party) {
                return null;
            }
            return Object(_order_discounts__WEBPACK_IMPORTED_MODULE_5__["applyLadder"])(this.cart.total, this.rungs);
        },
        enumerable: true,
        configurable: true
    });
    // --------------------------------------------------------------------------
    // Items
    // --------------------------------------------------------------------------
    MagnusOrderReviewComponent.prototype.step = function (variantId, by) {
        this.cart.setQty(variantId, this.cart.qtyOf(variantId) + by);
        // a quantity change can cross the slab, so the ladder has to be re-read
        this.refreshLadder();
    };
    MagnusOrderReviewComponent.prototype.remove = function (variantId) {
        this.cart.remove(variantId);
        this.refreshLadder();
    };
    MagnusOrderReviewComponent.prototype.backToCatalogue = function () {
        this.router.navigate(['/primary-order']);
    };
    MagnusOrderReviewComponent.prototype.place = function () {
        var _this = this;
        if (!this.party) {
            this.error = 'Choose the party this order is booked against.';
            return;
        }
        if (!this.lines.length) {
            this.error = 'There is nothing on this order.';
            return;
        }
        this.error = '';
        this.placing = true;
        // Stands in for the POST. Deliberately thin, so the real call drops in
        // behind a service without this screen changing.
        setTimeout(function () {
            var num = Object(_placed_orders__WEBPACK_IMPORTED_MODULE_6__["nextOrderNumber"])();
            var order = Object(_placed_orders__WEBPACK_IMPORTED_MODULE_6__["punch"])({
                id: Object(_placed_orders__WEBPACK_IMPORTED_MODULE_6__["idFor"])(num),
                number: num,
                placedOn: new Date(),
                party: _this.party,
                lines: _this.lines,
                totals: _this.totals,
                cashTerms: _this.cashTerms,
                selfPickup: _this.selfPickup,
                status: _this.anyOverride ? 'Pending approval - discount overridden' : 'Pending approval',
                placedBy: 'Rakesh Menon'
            });
            _this.placing = false;
            _this.cart.clear();
            _this.router.navigate(['/primary-order/detail', order.id]);
        }, 600);
    };
    MagnusOrderReviewComponent.prototype.trackLine = function (_i, l) { return l.variant.id; };
    MagnusOrderReviewComponent.prototype.trackRung = function (_i, r) { return r.code; };
    MagnusOrderReviewComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-magnus-order-review',
            template: __webpack_require__(/*! ./magnus-order-review.component.html */ "./src/app/magnus-order/magnus-order-review.component.html"),
            styles: [__webpack_require__(/*! ./magnus-order-review.component.scss */ "./src/app/magnus-order/magnus-order-review.component.scss")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_order_cart_service__WEBPACK_IMPORTED_MODULE_3__["OrderCartService"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]])
    ], MagnusOrderReviewComponent);
    return MagnusOrderReviewComponent;
}());



/***/ }),

/***/ "./src/app/magnus-order/magnus-order.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/magnus-order/magnus-order.module.ts ***!
  \*****************************************************/
/*! exports provided: MagnusOrderModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MagnusOrderModule", function() { return MagnusOrderModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/material */ "./src/app/material.ts");
/* harmony import */ var src_app_auth_component_guard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/auth-component.guard */ "./src/app/auth-component.guard.ts");
/* harmony import */ var _magnus_order_list_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./magnus-order-list.component */ "./src/app/magnus-order/magnus-order-list.component.ts");
/* harmony import */ var _magnus_order_catalogue_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./magnus-order-catalogue.component */ "./src/app/magnus-order/magnus-order-catalogue.component.ts");
/* harmony import */ var _magnus_order_review_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./magnus-order-review.component */ "./src/app/magnus-order/magnus-order-review.component.ts");
/* harmony import */ var _magnus_order_detail_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./magnus-order-detail.component */ "./src/app/magnus-order/magnus-order-detail.component.ts");
/* harmony import */ var _order_cart_service__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./order-cart.service */ "./src/app/magnus-order/order-cart.service.ts");












// Catalogue, review and the punched order are one flow, so they load as one
// chunk and share one cart.
//
// The detail route keys on the order's id rather than its number: an order
// number carries slashes (MPO/25-26/0001) and the router encodes those into a
// single percent-escaped segment, which no multi-segment route can match.
var routes = [
    { path: '', component: _magnus_order_catalogue_component__WEBPACK_IMPORTED_MODULE_8__["MagnusOrderCatalogueComponent"], canActivate: [src_app_auth_component_guard__WEBPACK_IMPORTED_MODULE_6__["AuthComponentGuard"]], data: { expectedRole: ['1'] } },
    { path: 'list', component: _magnus_order_list_component__WEBPACK_IMPORTED_MODULE_7__["MagnusOrderListComponent"], canActivate: [src_app_auth_component_guard__WEBPACK_IMPORTED_MODULE_6__["AuthComponentGuard"]], data: { expectedRole: ['1'] } },
    { path: 'review', component: _magnus_order_review_component__WEBPACK_IMPORTED_MODULE_9__["MagnusOrderReviewComponent"], canActivate: [src_app_auth_component_guard__WEBPACK_IMPORTED_MODULE_6__["AuthComponentGuard"]], data: { expectedRole: ['1'] } },
    { path: 'detail/:id', component: _magnus_order_detail_component__WEBPACK_IMPORTED_MODULE_10__["MagnusOrderDetailComponent"], canActivate: [src_app_auth_component_guard__WEBPACK_IMPORTED_MODULE_6__["AuthComponentGuard"]], data: { expectedRole: ['1'] } }
];
var MagnusOrderModule = /** @class */ (function () {
    function MagnusOrderModule() {
    }
    MagnusOrderModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _magnus_order_list_component__WEBPACK_IMPORTED_MODULE_7__["MagnusOrderListComponent"],
                _magnus_order_catalogue_component__WEBPACK_IMPORTED_MODULE_8__["MagnusOrderCatalogueComponent"],
                _magnus_order_review_component__WEBPACK_IMPORTED_MODULE_9__["MagnusOrderReviewComponent"],
                _magnus_order_detail_component__WEBPACK_IMPORTED_MODULE_10__["MagnusOrderDetailComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"].forChild(routes),
                src_app_material__WEBPACK_IMPORTED_MODULE_5__["MaterialModule"]
            ],
            // One cart per load of this module: the draft belongs to the visit, not to
            // the session.
            providers: [_order_cart_service__WEBPACK_IMPORTED_MODULE_11__["OrderCartService"]]
        })
    ], MagnusOrderModule);
    return MagnusOrderModule;
}());



/***/ }),

/***/ "./src/app/magnus-order/order-cart.service.ts":
/*!****************************************************!*\
  !*** ./src/app/magnus-order/order-cart.service.ts ***!
  \****************************************************/
/*! exports provided: OrderCartService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OrderCartService", function() { return OrderCartService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _order_data__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./order-data */ "./src/app/magnus-order/order-data.ts");
// ============================================================================
// MAGNUS PLYWOOD - Order being built
//
// Provided by the order module, so the catalogue and the review page share
// one cart and a rep can move between them without losing the order. It dies
// with the module, which is what we want: leaving the section abandons the
// draft rather than leaving a stale one behind.
//
// A line is only {variantId, qty}; everything else about it is looked up from
// the catalogue, so nothing can go stale.
// ============================================================================



var OrderCartService = /** @class */ (function () {
    function OrderCartService() {
        this.lines = [];
        this.partyId = null;
    }
    OrderCartService.prototype.qtyOf = function (variantId) {
        var l = this.lines.filter(function (x) { return x.variantId === variantId; })[0];
        return l ? l.qty : 0;
    };
    Object.defineProperty(OrderCartService.prototype, "count", {
        /** Sheets on the whole order. */
        get: function () {
            return this.lines.reduce(function (n, l) { return n + l.qty; }, 0);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(OrderCartService.prototype, "total", {
        get: function () {
            return this.lines.reduce(function (t, l) {
                var hit = Object(_order_data__WEBPACK_IMPORTED_MODULE_2__["findVariant"])(l.variantId);
                return hit ? t + hit.variant.rate * l.qty : t;
            }, 0);
        },
        enumerable: true,
        configurable: true
    });
    OrderCartService.prototype.add = function (variantId, qty) {
        if (qty === void 0) { qty = 1; }
        var l = this.lines.filter(function (x) { return x.variantId === variantId; })[0];
        if (l) {
            l.qty += qty;
        }
        else {
            this.lines.push({ variantId: variantId, qty: qty });
        }
    };
    OrderCartService.prototype.setQty = function (variantId, qty) {
        if (qty <= 0) {
            this.lines = this.lines.filter(function (x) { return x.variantId !== variantId; });
            return;
        }
        var l = this.lines.filter(function (x) { return x.variantId === variantId; })[0];
        if (l) {
            l.qty = qty;
        }
        else {
            this.lines.push({ variantId: variantId, qty: qty });
        }
    };
    OrderCartService.prototype.remove = function (variantId) {
        this.lines = this.lines.filter(function (x) { return x.variantId !== variantId; });
    };
    OrderCartService.prototype.clear = function () {
        this.lines = [];
        this.partyId = null;
    };
    OrderCartService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
    ], OrderCartService);
    return OrderCartService;
}());



/***/ }),

/***/ "./src/app/magnus-order/order-data.ts":
/*!********************************************!*\
  !*** ./src/app/magnus-order/order-data.ts ***!
  \********************************************/
/*! exports provided: PRODUCTS, PARTIES, categories, fromRate, grades, findVariant, inr */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PRODUCTS", function() { return PRODUCTS; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PARTIES", function() { return PARTIES; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "categories", function() { return categories; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fromRate", function() { return fromRate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "grades", function() { return grades; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "findVariant", function() { return findVariant; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "inr", function() { return inr; });
// ============================================================================
// MAGNUS PLYWOOD - Primary order catalogue
//
// Transcribed from the product master. The master lists one row per
// specification, so the same name repeats with a different composition, face
// or grade; here those rows are folded into variants under one product, which
// is what a rep is actually choosing between when placing an order.
//
// The shape matches the master's columns, so swapping this for the API is a
// mapping job and nothing else. Rates are placeholders - the live list will
// carry the party's own price band.
//
// Same data as the mobile app's catalogue, so a demo can move between the two
// without the figures disagreeing.
// ============================================================================
var PRODUCTS = [
    {
        id: 'p-block-board',
        name: 'Block Board',
        category: 'Door & Board',
        sector: 'Interior',
        brand: 'Magnus',
        image: 'assets/img/products/block-board.jpg',
        blurb: 'Gurjan face, pine and poplar core',
        variants: [
            { id: 'v-bb-1', composition: 'Pine + Gurjan', face: 'Gurjan', grade: 'BWP', thickness: '19 MM', size: '8 FT x 4 FT', rate: 2340, inStock: true },
            { id: 'v-bb-2', composition: 'Pine + Poplar', face: 'Gurjan', grade: 'BWR', thickness: '22 MM', size: '7 FT x 4 FT', rate: 2180, inStock: true },
            { id: 'v-bb-3', composition: 'Poplar + Poplar', face: 'Gurjan', grade: 'BWR', thickness: '25 MM', size: '6 FT x 3 FT', rate: 1960, inStock: false }
        ]
    },
    {
        id: 'p-calibrated',
        name: 'Calibrated',
        category: 'Plywood',
        sector: 'Industrial',
        brand: 'Magnus',
        image: 'assets/img/products/calibrated.jpg',
        blurb: 'Recon face, uniform thickness for lamination',
        variants: [
            { id: 'v-cal-1', composition: 'Alternate', face: 'Recon', grade: 'BWR', thickness: '19 MM', size: '8 FT x 4 FT', weight: '30 KG', rate: 1890, inStock: true },
            { id: 'v-cal-2', composition: 'Hardwood', face: 'Recon', grade: 'BWR', thickness: '19 MM', size: '7 FT x 4 FT', weight: '30 KG', rate: 1780, inStock: true },
            { id: 'v-cal-3', composition: 'Alternate', face: 'Okoume', grade: 'BWR', thickness: '12 MM', size: '6 FT x 2 FT', weight: '34 KG', rate: 1240, inStock: true },
            { id: 'v-cal-4', composition: 'Alternate + Hardwood', face: 'Recon', grade: 'BWP', thickness: '3 MM', size: '8 FT x 4 FT', rate: 690, inStock: true }
        ]
    },
    {
        id: 'p-calibrated-gold',
        name: 'Calibrated Gold',
        category: 'Door & Board',
        sector: 'Industrial',
        brand: 'Magnus',
        image: 'assets/img/products/calibrated-gold.jpg',
        blurb: 'Premium alternate core, 3 MM to 40 MM',
        variants: [
            { id: 'v-cg-1', composition: 'Alternate', face: 'Recon', grade: 'BWP', thickness: '19 MM', size: '8 FT x 4 FT', weight: '30 KG', rate: 2480, inStock: true },
            { id: 'v-cg-2', composition: 'Alternate', face: 'Recon', grade: 'BWR', thickness: '25 MM', size: '9 FT x 4 FT', weight: '30 KG', rate: 2890, inStock: true },
            { id: 'v-cg-3', composition: 'Alternate', face: 'Recon', grade: 'BWP', thickness: '40 MM', size: '10 FT x 4 FT', rate: 3640, inStock: false }
        ]
    },
    {
        id: 'p-chequered',
        name: 'Chequered',
        category: 'Plywood',
        sector: 'Transport',
        brand: 'Magnus',
        image: 'assets/img/products/chequered.jpg',
        blurb: 'Anti-skid surface for flooring and bodies',
        variants: [
            { id: 'v-chq-1', composition: 'Hardwood', face: 'Gurjan', grade: 'BWP', thickness: '18 MM', size: '8 FT x 4 FT', weight: '45 KG', rate: 3120, inStock: true },
            { id: 'v-chq-2', composition: 'Hardwood', face: 'Gurjan', grade: 'BWR', thickness: '19 MM', size: '7 FT x 4 FT', weight: '34 KG', rate: 2960, inStock: true },
            { id: 'v-chq-3', composition: 'Hardwood', face: '--', grade: 'BWP', thickness: '16 MM', size: '6 FT x 3 FT', rate: 2410, inStock: true }
        ]
    }
];
// Four parties, four different ladders - an A class dealer on the Russia
// scheme and a sub dealer with no scheme should not price the same order the
// same way, and the demo is not worth much if they do.
var PARTIES = [
    {
        id: 'pt1', name: 'Shree Balaji Timber', type: 'Dealer', area: 'Itwari Market',
        terms: {
            trade: 12,
            scheme: { label: 'Russia Scheme', basis: 'Enrolled, running to 31 Oct', percent: 5 },
            qtySlab: { minSheets: 50, percent: 3.5 },
            category: { label: 'A class counter', percent: 2.5 },
            cash: 2, freight: 1.5, approval: 1, settlement: 0.75
        }
    },
    {
        id: 'pt2', name: 'Kohinoor Ply House', type: 'Dealer', area: 'Katol Road',
        terms: {
            trade: 11.5,
            scheme: { label: 'Korea Scheme', basis: 'Enrolled, running to 15 Nov', percent: 4 },
            qtySlab: { minSheets: 40, percent: 3 },
            category: { label: 'A class counter', percent: 2.5 },
            cash: 2, freight: 1.5, approval: 0.5, settlement: 0.75
        }
    },
    {
        id: 'pt3', name: 'Gupta Hardware', type: 'Sub dealer', area: 'Pratap Nagar',
        terms: {
            trade: 9,
            scheme: null,
            qtySlab: { minSheets: 75, percent: 2 },
            category: { label: 'B class counter', percent: 1.5 },
            cash: 1.5, freight: 1, approval: 0, settlement: 0.5
        }
    },
    {
        id: 'pt4', name: 'Sai Laminates', type: 'Dealer', area: 'Kamptee Road',
        terms: {
            trade: 10,
            scheme: { label: 'Paris Scheme', basis: 'Enrolled, running to 30 Nov', percent: 4.5 },
            qtySlab: { minSheets: 60, percent: 2.5 },
            category: { label: 'B class counter', percent: 1.5 },
            cash: 2, freight: 1.25, approval: 0.75, settlement: 0.5
        }
    }
];
/** Category filter chips, built from the catalogue so they cannot drift. */
function categories() {
    var seen = ['All'];
    PRODUCTS.forEach(function (p) {
        if (seen.indexOf(p.category) < 0) {
            seen.push(p.category);
        }
    });
    return seen;
}
/** Lowest rate on a product - what the card shows. */
function fromRate(p) {
    return p.variants.reduce(function (lo, v) { return (v.rate < lo ? v.rate : lo); }, p.variants[0].rate);
}
/** Distinct grades on a product, for the card's chips. */
function grades(p) {
    var out = [];
    p.variants.forEach(function (v) {
        if (out.indexOf(v.grade) < 0) {
            out.push(v.grade);
        }
    });
    return out;
}
function findVariant(id) {
    for (var _i = 0, PRODUCTS_1 = PRODUCTS; _i < PRODUCTS_1.length; _i++) {
        var p = PRODUCTS_1[_i];
        var v = p.variants.filter(function (x) { return x.id === id; })[0];
        if (v) {
            return { product: p, variant: v };
        }
    }
    return null;
}
/** 1,23,456 - Indian grouping, matching the rest of the app. */
function inr(n) {
    var s = Math.round(n || 0).toString();
    if (s.length <= 3) {
        return s;
    }
    var last3 = s.slice(-3);
    var rest = s.slice(0, -3);
    return rest.replace(/\B(?=(\d{2})+(?!\d))/g, ',') + ',' + last3;
}


/***/ }),

/***/ "./src/app/magnus-order/order-discounts.ts":
/*!*************************************************!*\
  !*** ./src/app/magnus-order/order-discounts.ts ***!
  \*************************************************/
/*! exports provided: GST_PERCENT, ladderFor, applyLadder */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GST_PERCENT", function() { return GST_PERCENT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ladderFor", function() { return ladderFor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "applyLadder", function() { return applyLadder; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "../../MY PROJECT/WIGWAM SALES/Wigwam_new_web_sfa_loyalty/node_modules/tslib/tslib.es6.js");
// ============================================================================
// MAGNUS PLYWOOD - Cascading discount ladder
//
// Board trade does not apply discounts side by side, it applies them one on
// top of the other: each rung is taken on what is left after the rung above
// it, not on the gross. So 12% + 5% is not 17% - it is 16.4%, and the
// difference on a five lakh order is real money.
//
// That is why the PI prints the ladder rung by rung instead of a single
// "discount" line: the dealer wants to see which of their entitlements were
// applied, in what order, and what each one was worth.
//
// Which rungs a party gets, and at what rate, comes from the party itself -
// an A class dealer on a running scheme and a sub dealer with none do not get
// the same ladder. The rungs that depend on the order rather than the party -
// the quantity slab, the cash terms - switch themselves on from the order.
// ============================================================================

var GST_PERCENT = 18;
/**
 * Builds the ladder for one party. Two rungs are the rep's to switch - cash
 * terms and self pickup - and the quantity slab switches itself on from the
 * order, but every percentage comes from the party's own entitlement.
 *
 * A rung the party has no entitlement to is left out of the ladder entirely.
 * A rung they are entitled to but did not qualify for on this order is kept
 * and marked not applied, because a dealer reading the PI wants to see what
 * they missed and why - a rung that silently vanishes starts a phone call.
 *
 * Order matters: the same percentages in a different order give a different
 * total.
 */
function ladderFor(terms, sheets, cashTerms, selfPickup) {
    var rungs = [];
    rungs.push({
        code: 'TD',
        label: 'Trade discount',
        basis: 'Standard entitlement on this counter',
        percent: terms.trade,
        applies: true
    });
    if (terms.scheme) {
        rungs.push({
            code: 'SCH',
            label: terms.scheme.label,
            basis: terms.scheme.basis,
            percent: terms.scheme.percent,
            applies: true
        });
    }
    var qualified = sheets >= terms.qtySlab.minSheets;
    rungs.push({
        code: 'QTY',
        label: 'Quantity slab',
        basis: qualified
            ? terms.qtySlab.minSheets + ' sheets and above'
            : 'Needs ' + terms.qtySlab.minSheets + ' sheets - ' + sheets + ' on this order',
        percent: terms.qtySlab.percent,
        applies: qualified
    });
    rungs.push({
        code: 'CAT',
        label: 'Dealer category',
        basis: terms.category.label,
        percent: terms.category.percent,
        applies: true
    });
    rungs.push({
        code: 'CASH',
        label: 'Cash / advance payment',
        basis: cashTerms ? 'Paid against proforma' : 'Credit terms - not applicable',
        percent: terms.cash,
        applies: cashTerms
    });
    rungs.push({
        code: 'FRT',
        label: 'Transport rebate',
        basis: selfPickup ? 'Self pickup from depot' : 'Delivered - not applicable',
        percent: terms.freight,
        applies: selfPickup
    });
    if (terms.approval > 0) {
        rungs.push({
            code: 'APRV',
            label: 'Special approval',
            basis: 'Standing approval on this counter',
            percent: terms.approval,
            applies: true
        });
    }
    rungs.push({
        code: 'SETL',
        label: 'Early settlement',
        basis: cashTerms ? 'Settled within 7 days' : 'Credit terms - not applicable',
        percent: terms.settlement,
        applies: cashTerms
    });
    return rungs;
}
/**
 * Walks the ladder. Every rung is returned, including the ones that did not
 * apply, because a dealer reading the PI wants to see what they missed and
 * why - a rung that silently vanishes starts a phone call.
 */
function applyLadder(gross, rungs) {
    var running = gross;
    var steps = [];
    rungs.forEach(function (r) {
        var amount = r.applies ? (running * r.percent) / 100 : 0;
        running = running - amount;
        steps.push(tslib__WEBPACK_IMPORTED_MODULE_0__["__assign"]({}, r, { amount: amount, running: running }));
    });
    var net = running;
    var discountTotal = gross - net;
    var gst = (net * GST_PERCENT) / 100;
    var beforeRound = net + gst;
    var grand = Math.round(beforeRound);
    return {
        gross: gross,
        steps: steps,
        discountTotal: discountTotal,
        effectivePercent: gross > 0 ? (discountTotal / gross) * 100 : 0,
        net: net,
        gstPercent: GST_PERCENT,
        gst: gst,
        roundOff: grand - beforeRound,
        grand: grand
    };
}


/***/ }),

/***/ "./src/app/magnus-order/placed-orders.ts":
/*!***********************************************!*\
  !*** ./src/app/magnus-order/placed-orders.ts ***!
  \***********************************************/
/*! exports provided: nextOrderNumber, punch, idFor, byId, byNumber, all, seedDemoOrders, COMPANY */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "nextOrderNumber", function() { return nextOrderNumber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "punch", function() { return punch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "idFor", function() { return idFor; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "byId", function() { return byId; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "byNumber", function() { return byNumber; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "all", function() { return all; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "seedDemoOrders", function() { return seedDemoOrders; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "COMPANY", function() { return COMPANY; });
/* harmony import */ var _order_data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./order-data */ "./src/app/magnus-order/order-data.ts");
/* harmony import */ var _order_discounts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./order-discounts */ "./src/app/magnus-order/order-discounts.ts");
// ============================================================================
// MAGNUS PLYWOOD - Orders punched in this session
//
// A demo store. Orders live in a module-level array so the review page can
// punch one and the detail page can read it back by number, which is what the
// real flow does through the API.
//
// Nothing here persists past a reload, and that is deliberate: it should be
// obvious that this is a mock and not a second source of truth.
// ============================================================================


var ORDERS = [];
var seq = 0;
function nextOrderNumber() {
    seq += 1;
    var n = ('0000' + seq).slice(-4);
    return 'MPO/25-26/' + n;
}
function punch(order) {
    ORDERS.unshift(order);
    return order;
}
/** MPO/25-26/0001 -> mpo-25-26-0001 */
function idFor(number) {
    return number.toLowerCase().replace(/[^a-z0-9]+/g, '-');
}
function byId(id) {
    return ORDERS.filter(function (o) { return o.id === id; })[0] || null;
}
function byNumber(num) {
    return ORDERS.filter(function (o) { return o.number === num; })[0] || null;
}
function all() {
    return ORDERS;
}
// ---------------------------------------------------------------------------
// Two orders already on the books, so the listing has something in it the
// first time it is opened. A rep punching a third sees it land above these.
// ---------------------------------------------------------------------------
function line(productId, variantId, qty) {
    var product = _order_data__WEBPACK_IMPORTED_MODULE_0__["PRODUCTS"].filter(function (p) { return p.id === productId; })[0];
    var variant = product.variants.filter(function (v) { return v.id === variantId; })[0];
    return { product: product, variant: variant, qty: qty, rate: variant.rate, amount: variant.rate * qty };
}
function seedOne(partyId, lines, cashTerms, selfPickup, daysAgo, status, placedBy) {
    var party = _order_data__WEBPACK_IMPORTED_MODULE_0__["PARTIES"].filter(function (p) { return p.id === partyId; })[0];
    var gross = lines.reduce(function (t, l) { return t + l.amount; }, 0);
    var sheets = lines.reduce(function (n, l) { return n + l.qty; }, 0);
    var when = new Date();
    when.setDate(when.getDate() - daysAgo);
    var num = nextOrderNumber();
    punch({
        id: idFor(num),
        number: num,
        placedOn: when,
        party: party,
        lines: lines,
        totals: Object(_order_discounts__WEBPACK_IMPORTED_MODULE_1__["applyLadder"])(gross, Object(_order_discounts__WEBPACK_IMPORTED_MODULE_1__["ladderFor"])(party.terms, sheets, cashTerms, selfPickup)),
        cashTerms: cashTerms,
        selfPickup: selfPickup,
        status: status,
        placedBy: placedBy
    });
}
var seeded = false;
/** Called by the listing. Runs once, whichever screen opens first. */
function seedDemoOrders() {
    if (seeded) {
        return;
    }
    seeded = true;
    seedOne('pt3', [
        line('p-calibrated', 'v-cal-2', 24),
        line('p-chequered', 'v-chq-3', 10)
    ], false, false, 6, 'Dispatched', 'Imran Shaikh');
    seedOne('pt2', [
        line('p-calibrated-gold', 'v-cg-1', 40),
        line('p-block-board', 'v-bb-1', 18),
        line('p-calibrated', 'v-cal-4', 60)
    ], true, true, 2, 'Approved', 'Sunita Raut');
}
/** Printed at the top of the PI. */
var COMPANY = {
    name: 'Magnus Plywoods Pvt. Ltd.',
    line1: 'Plot 14, MIDC Industrial Area, Hingna',
    line2: 'Nagpur 440016, Maharashtra',
    gstin: '27AAGCM4412P1ZK',
    pan: 'AAGCM4412P',
    phone: '+91 712 668 2200',
    email: 'orders@magnusplywood.com'
};


/***/ })

}]);