(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["analytics-analytics-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/analytics/analytics.page.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/analytics/analytics.page.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- \n   Authors : initappz (Rahul Jograna)\n  Website : https://initappz.com/\n  App Name : ionic 5 groceryee app\n  Created : 10-Sep-2020\n  This App Template Source code is licensed as per the\n  terms found in the Website https://initappz.com/license\n  Copyright and Good Faith Purchasers © 2020-present initappz.\n -->\n<ion-header *ngIf=\"!util.appClosed\">\n  <ion-toolbar color=\"primary\">\n    <ion-title> {{util.getString('Analytics')}} </ion-title>\n  </ion-toolbar>\n</ion-header>\n<app-closed *ngIf=\"util.appClosed\"></app-closed>\n<ion-content class=\"ion-padding\" *ngIf=\"!util.appClosed\">\n  <ion-item>\n    <ion-label> {{util.getString('From Date')}} </ion-label>\n    <ion-datetime display-format=\"YYYY-MM-DD\" mode=\"md\" [(ngModel)]=\"from\"></ion-datetime>\n  </ion-item>\n  <ion-item>\n    <ion-label> {{util.getString('To Date')}} </ion-label>\n    <ion-datetime display-format=\"YYYY-MM-DD\" mode=\"md\" [(ngModel)]=\"to\"></ion-datetime>\n  </ion-item>\n  <ion-row>\n    <ion-col size=\"6\">\n      <ion-button (click)=\"getStats()\" expand=\"block\" fill=\"outline\" size=\"small\">\n        {{util.getString('Get Stats')}}\n      </ion-button>\n    </ion-col>\n    <ion-col size=\"6\" *ngIf=\"from && to && storeOrder?.length\">\n      <ion-button (click)=\"print()\" expand=\"block\" fill=\"clear\" size=\"small\">\n        {{util.getString('Print')}}\n      </ion-button>\n    </ion-col>\n  </ion-row>\n  <div *ngIf=\"from && to && storeOrder?.length && apiCalled\" #invoiceTicket>\n    <h4 style=\"text-align: center;color: #7ec6aa;font-size: 14px;font-weight: bold;\">Groceryee Full App </h4>\n    <p style=\"text-align: center;color: #ED7669;font-size: 12px;\">{{getDate(from)}} to {{getDate(to)}}</p>\n    <p style=\"text-align: right;font-weight: bold;margin: 0px !important;color: #7EC6AA;font-size: 12px;\">Groceryee Full\n      App</p>\n    <p style=\"text-align: right;font-weight: bold;margin: 0px !important;font-size: 12px;\">Havamahel Palace Road\n      Palitana, <br>\n      Bhavnagar\n      364270</p>\n    <p style=\"text-align: right;font-weight: bold;margin: 0px !important;font-size: 12px;\">info@groceryee.com</p>\n    <p style=\"text-align: right;font-weight: bold;margin: 0px !important;font-size: 12px;\">9426585554</p>\n    <p style=\"text-align: left; font-weight: bold;color: #7EC6AA;font-size: 12px;\">{{today()}}</p>\n    <ion-row>\n      <ion-col size=\"3\"></ion-col>\n      <ion-col size=\"5\">\n        <p\n          style=\"text-align: right;font-weight: bold;margin: 0px !important;color: #7EC6AA;font-size: 12px;font-weight: bold;;\">\n          Total</p>\n        <p\n          style=\"text-align: right;font-weight: bold;margin: 0px !important;color: #7EC6AA;;font-size: 12px;font-weight: bold;\">\n          {{util.getString('Commission')}}\n        </p>\n        <p\n          style=\"text-align: right;font-weight: bold;margin: 0px !important;color: #7EC6AA;font-size: 12px;font-weight: bold;;\">\n          {{util.getString('Amount Received')}}\n        </p>\n      </ion-col>\n      <ion-col size=\"4\">\n        <p style=\"color: black !important;margin: 0px !important;text-align: right;font-size: 12px;font-weight: bold;\">\n          {{util.currecny}}\n          {{totalAmount}}\n        </p>\n        <p style=\"color: black !important; margin: 0px !important;text-align: right;font-size: 12px;font-weight: bold;\">\n          {{util.currecny}}\n          {{commisionAmount}}\n        </p>\n        <p style=\"color: black !important;margin: 0px !important;text-align: right;font-size: 12px;font-weight: bold;\">\n          {{util.currecny}}\n          {{toPay}}</p>\n      </ion-col>\n    </ion-row>\n    <table class=\"table\" style=\"font-size: 10px;width: 100%;text-align: center;\">\n      <thead>\n        <tr class=\"text-uppercase\" style=\"color:#7ec6aa ;\">\n          <th> {{util.getString('Id')}} </th>\n          <th> {{util.getString('Ordered on')}} </th>\n          <th> {{util.getString('Items')}} </th>\n          <th> {{util.getString('Total')}} </th>\n          <th> {{util.getString('Commission')}} </th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr *ngFor=\"let item of storeOrder\" style=\"background-color: #F5F8FA;\">\n          <td>#{{item.id}}</td>\n          <td>{{item.date_time}}</td>\n          <td>\n            <div style=\"width: 120px !important; white-space: pre-wrap;\">\n              <span *ngFor=\"let orders of item.orders;let i =index;\">\n                {{orders.name}} <span *ngIf=\"item.orders.length -1 !== i\">,</span>\n              </span>\n            </div>\n          </td>\n\n          <td style=\"font-size: 8px;font-weight: bold;\"> {{util.currecny}} {{item.grand_total}}</td>\n          <td style=\"font-size: 8px;font-weight: bold;\">{{util.currecny}}{{getCommisions(item.grand_total)}}</td>\n        </tr>\n      </tbody>\n    </table>\n\n  </div>\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/analytics/analytics-routing.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/pages/analytics/analytics-routing.module.ts ***!
  \*************************************************************/
/*! exports provided: AnalyticsPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnalyticsPageRoutingModule", function() { return AnalyticsPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _analytics_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./analytics.page */ "./src/app/pages/analytics/analytics.page.ts");

/*
  Authors : initappz (Rahul Jograna)
  Website : https://initappz.com/
  App Name : ionic 5 groceryee app
  Created : 10-Sep-2020
  This App Template Source code is licensed as per the
  terms found in the Website https://initappz.com/license
  Copyright and Good Faith Purchasers © 2020-present initappz.
*/



const routes = [
    {
        path: '',
        component: _analytics_page__WEBPACK_IMPORTED_MODULE_3__["AnalyticsPage"]
    }
];
let AnalyticsPageRoutingModule = class AnalyticsPageRoutingModule {
};
AnalyticsPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], AnalyticsPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/analytics/analytics.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/pages/analytics/analytics.module.ts ***!
  \*****************************************************/
/*! exports provided: AnalyticsPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnalyticsPageModule", function() { return AnalyticsPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _analytics_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./analytics-routing.module */ "./src/app/pages/analytics/analytics-routing.module.ts");
/* harmony import */ var _analytics_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./analytics.page */ "./src/app/pages/analytics/analytics.page.ts");
/* harmony import */ var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/components/components.module */ "./src/app/components/components.module.ts");

/*
  Authors : initappz (Rahul Jograna)
  Website : https://initappz.com/
  App Name : ionic 5 groceryee app
  Created : 10-Sep-2020
  This App Template Source code is licensed as per the
  terms found in the Website https://initappz.com/license
  Copyright and Good Faith Purchasers © 2020-present initappz.
*/







let AnalyticsPageModule = class AnalyticsPageModule {
};
AnalyticsPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _analytics_routing_module__WEBPACK_IMPORTED_MODULE_5__["AnalyticsPageRoutingModule"],
            src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]
        ],
        declarations: [_analytics_page__WEBPACK_IMPORTED_MODULE_6__["AnalyticsPage"]]
    })
], AnalyticsPageModule);



/***/ }),

/***/ "./src/app/pages/analytics/analytics.page.scss":
/*!*****************************************************!*\
  !*** ./src/app/pages/analytics/analytics.page.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@charset \"UTF-8\";\n/*\n  Authors : initappz (Rahul Jograna)\n  Website : https://initappz.com/\n  App Name : ionic 5 groceryee app\n  Created : 10-Sep-2020\n  This App Template Source code is licensed as per the\n  terms found in the Website https://initappz.com/license\n  Copyright and Good Faith Purchasers © 2020-present initappz.\n*/\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYW5hbHl0aWNzL2FuYWx5dGljcy5wYWdlLnNjc3MiLCIvaG9tZS9hbmRyZXcvRG93bmxvYWRzL3R3b3plL2lvbmljNUdyb2NlcnllZUFwcEZ1bGxfVjcvQXBwX2NvZGUvU3RvcmVfYXBwL3NyYy9hcHAvcGFnZXMvYW5hbHl0aWNzL2FuYWx5dGljcy5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FDQWhCOzs7Ozs7OztDQUFBIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvYW5hbHl0aWNzL2FuYWx5dGljcy5wYWdlLnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAY2hhcnNldCBcIlVURi04XCI7XG4vKlxuICBBdXRob3JzIDogaW5pdGFwcHogKFJhaHVsIEpvZ3JhbmEpXG4gIFdlYnNpdGUgOiBodHRwczovL2luaXRhcHB6LmNvbS9cbiAgQXBwIE5hbWUgOiBpb25pYyA1IGdyb2NlcnllZSBhcHBcbiAgQ3JlYXRlZCA6IDEwLVNlcC0yMDIwXG4gIFRoaXMgQXBwIFRlbXBsYXRlIFNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIGFzIHBlciB0aGVcbiAgdGVybXMgZm91bmQgaW4gdGhlIFdlYnNpdGUgaHR0cHM6Ly9pbml0YXBwei5jb20vbGljZW5zZVxuICBDb3B5cmlnaHQgYW5kIEdvb2QgRmFpdGggUHVyY2hhc2VycyDCqSAyMDIwLXByZXNlbnQgaW5pdGFwcHouXG4qLyIsIi8qXG4gIEF1dGhvcnMgOiBpbml0YXBweiAoUmFodWwgSm9ncmFuYSlcbiAgV2Vic2l0ZSA6IGh0dHBzOi8vaW5pdGFwcHouY29tL1xuICBBcHAgTmFtZSA6IGlvbmljIDUgZ3JvY2VyeWVlIGFwcFxuICBDcmVhdGVkIDogMTAtU2VwLTIwMjBcbiAgVGhpcyBBcHAgVGVtcGxhdGUgU291cmNlIGNvZGUgaXMgbGljZW5zZWQgYXMgcGVyIHRoZVxuICB0ZXJtcyBmb3VuZCBpbiB0aGUgV2Vic2l0ZSBodHRwczovL2luaXRhcHB6LmNvbS9saWNlbnNlXG4gIENvcHlyaWdodCBhbmQgR29vZCBGYWl0aCBQdXJjaGFzZXJzIMKpIDIwMjAtcHJlc2VudCBpbml0YXBwei5cbiovIl19 */");

/***/ }),

/***/ "./src/app/pages/analytics/analytics.page.ts":
/*!***************************************************!*\
  !*** ./src/app/pages/analytics/analytics.page.ts ***!
  \***************************************************/
/*! exports provided: AnalyticsPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AnalyticsPage", function() { return AnalyticsPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_services_util_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/util.service */ "./src/app/services/util.service.ts");
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _ionic_native_printer_ngx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic-native/printer/ngx */ "./node_modules/@ionic-native/printer/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_5__);

/*
  Authors : initappz (Rahul Jograna)
  Website : https://initappz.com/
  App Name : ionic 5 groceryee app
  Created : 10-Sep-2020
  This App Template Source code is licensed as per the
  terms found in the Website https://initappz.com/license
  Copyright and Good Faith Purchasers © 2020-present initappz.
*/





let AnalyticsPage = class AnalyticsPage {
    constructor(util, api, printService) {
        this.util = util;
        this.api = api;
        this.printService = printService;
        this.allOrders = [];
        this.storeOrder = [];
        this.totalAmount = 0;
        this.commisionAmount = 0;
        this.toPay = 0;
        this.totalAmountsFromOrder = 0;
    }
    ngOnInit() {
    }
    getStats() {
        this.storename = this.util.store.name;
        this.storecommission = parseFloat(this.util.store.commission);
        if (this.from && this.to) {
            this.from = moment__WEBPACK_IMPORTED_MODULE_5__(this.from).format('YYYY-MM-DD');
            this.to = moment__WEBPACK_IMPORTED_MODULE_5__(this.to).format('YYYY-MM-DD');
            const param = {
                sid: localStorage.getItem('uid'),
                start: moment__WEBPACK_IMPORTED_MODULE_5__(this.from, 'YYYY-MM-DD HH:mm A').utc(false).format('YYYY-MM-DD HH:mm'),
                end: moment__WEBPACK_IMPORTED_MODULE_5__(this.to, 'YYYY-MM-DD HH:mm A').utc(false).format('YYYY-MM-DD HH:mm'),
            };
            console.log(param);
            this.util.show();
            this.apiCalled = false;
            this.storeOrder = [];
            this.api.post('orders/storeStats', param).subscribe((data) => {
                this.apiCalled = true;
                this.util.hide();
                console.log(data);
                // if (data && data.status === 200 && data.data.length) {
                //   data.data.forEach(element => {
                //     element.orders = JSON.parse(element.orders);
                //     element.date_time = moment(element.date_time).format('YYYY-MM-DD');
                //   });
                //   let total = 0;
                //   data.data.forEach(async (element) => {
                //     element.orders = await element.orders.filter(x => x.store_id === localStorage.getItem('uid'));
                //     const info = JSON.parse(element.status);
                //     await element.orders.forEach(calc => {
                //       if (calc.sell_price === '0.00') {
                //         total = total + parseFloat(calc.original_price);
                //       } else {
                //         total = total + parseFloat(calc.sell_price);
                //       }
                //     });
                //     const selected = await info.filter(x => x.id === localStorage.getItem('uid'));
                //     if (selected && selected.length) {
                //       if (selected[0].status === 'delivered') {
                //         this.storeOrder.push(element);
                //       }
                //     }
                //   });
                //   setTimeout(() => {
                //     function percentage(num, per) {
                //       return (num / 100) * per;
                //     }
                //     console.log(this.storeOrder);
                //     console.log(total, this.storecommission);
                //     const totalPrice = percentage(total, parseFloat(this.storecommission));
                //     console.log('commistion=====>>>>>', totalPrice.toFixed(2));
                //     this.commisionAmount = totalPrice.toFixed(2);
                //     this.totalAmount = total;
                //     this.toPay = this.commisionAmount;
                //   }, 1000);
                // }
                if (data && data.status === 200 && data.data.length) {
                    let total = 0;
                    data.data.forEach((element) => Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
                        if (((x) => { try {
                            JSON.parse(x);
                            return true;
                        }
                        catch (e) {
                            return false;
                        } })(element.orders)) {
                            element.orders = JSON.parse(element.orders);
                            element.date_time = moment__WEBPACK_IMPORTED_MODULE_5__(element.date_time).format('dddd, MMMM Do YYYY');
                            element.orders = yield element.orders.filter(x => x.store_id === localStorage.getItem('uid'));
                            if (((x) => { try {
                                JSON.parse(x);
                                return true;
                            }
                            catch (e) {
                                return false;
                            } })(element.status)) {
                                const info = JSON.parse(element.status);
                                yield element.orders.forEach(calc => {
                                    if (calc.variations && calc.variations !== '' && typeof calc.variations === 'string') {
                                        console.log('strings', calc.id);
                                        calc.variations = JSON.parse(calc.variations);
                                        console.log(calc['variant']);
                                        if (calc["variant"] === undefined) {
                                            calc['variant'] = 0;
                                        }
                                    }
                                    if (calc && calc.discount === '0') {
                                        if (calc.size === '1' || calc.size === 1) {
                                            if (calc.variations[0].calc[calc.variant].discount && calc.variations[0].items[calc.variant].discount !== 0) {
                                                total = total + (parseFloat(calc.variations[0].items[calc.variant].discount) * calc.quantiy);
                                            }
                                            else {
                                                total = total + (parseFloat(calc.variations[0].items[calc.variant].price) * calc.quantiy);
                                            }
                                        }
                                        else {
                                            total = total + (parseFloat(calc.original_price) * calc.quantiy);
                                        }
                                    }
                                    else {
                                        if (calc.size === '1' || calc.size === 1) {
                                            if (calc.variations[0].items[calc.variant].discount && calc.variations[0].items[calc.variant].discount !== 0) {
                                                total = total + (parseFloat(calc.variations[0].items[calc.variant].discount) * calc.quantiy);
                                            }
                                            else {
                                                total = total + (parseFloat(calc.variations[0].items[calc.variant].price) * calc.quantiy);
                                            }
                                        }
                                        else {
                                            total = total + (parseFloat(calc.sell_price) * calc.quantiy);
                                        }
                                    }
                                });
                                const selected = yield info.filter(x => x.id === localStorage.getItem('uid'));
                                if (selected && selected.length) {
                                    if (selected[0].status === 'delivered') {
                                        this.storeOrder.push(element);
                                    }
                                }
                            }
                        }
                    }));
                    setTimeout(() => {
                        function percentage(num, per) {
                            return (num / 100) * per;
                        }
                        console.log(this.storeOrder);
                        console.log(total, this.storecommission);
                        const totalPrice = percentage(total, parseFloat(this.storecommission));
                        console.log('commistion=====>>>>>', totalPrice.toFixed(2));
                        this.commisionAmount = totalPrice.toFixed(2);
                        this.totalAmount = total;
                        this.toPay = this.commisionAmount;
                    }, 1000);
                }
            }, error => {
                this.util.hide();
                console.log(error);
                this.apiCalled = true;
                this.util.errorToast(this.util.getString('Something went wrong'));
            });
        }
        else {
            this.util.errorToast(this.util.getString('All Fields are required'));
        }
    }
    print() {
        const content = this.invoiceTicket.nativeElement.innerHTML;
        console.log('content', content);
        const options = {
            name: 'Groceryee App Summary',
            duplex: false,
        };
        this.printService.print(content, options).then((data) => {
            console.log(data);
        }).catch(error => {
            console.log(error);
        });
    }
    today() {
        return moment__WEBPACK_IMPORTED_MODULE_5__().format('ll');
    }
    getDate(date) {
        return moment__WEBPACK_IMPORTED_MODULE_5__(date).format('ll');
    }
    getCommisions(total) {
        return ((parseFloat(total) * this.storecommission) / 100).toFixed(2);
    }
};
AnalyticsPage.ctorParameters = () => [
    { type: src_app_services_util_service__WEBPACK_IMPORTED_MODULE_2__["UtilService"] },
    { type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_3__["ApiService"] },
    { type: _ionic_native_printer_ngx__WEBPACK_IMPORTED_MODULE_4__["Printer"] }
];
Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('invoiceTicket', { read: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"] })
], AnalyticsPage.prototype, "invoiceTicket", void 0);
AnalyticsPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-analytics',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./analytics.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/analytics/analytics.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./analytics.page.scss */ "./src/app/pages/analytics/analytics.page.scss")).default]
    })
], AnalyticsPage);



/***/ })

}]);
//# sourceMappingURL=analytics-analytics-module-es2015.js.map