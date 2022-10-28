function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["account-account-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/account/account.page.html":
  /*!***************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/account/account.page.html ***!
    \***************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesAccountAccountPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- \n   Authors : initappz (Rahul Jograna)\n  Website : https://initappz.com/\n  App Name : ionic 5 groceryee app\n  Created : 10-Sep-2020\n  This App Template Source code is licensed as per the\n  terms found in the Website https://initappz.com/license\n  Copyright and Good Faith Purchasers © 2020-present initappz.\n -->\n<ion-header class=\"ion-no-border\" *ngIf=\"!util.appClosed\">\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"end\">\n      <ion-button (click)=\"openMenu()\">\n        <img class=\"menuIcon\" src=\"assets/sidemenu/menu_light.png\" alt=\"\">\n      </ion-button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-header>\n<ion-content>\n  <app-closed *ngIf=\"util.appClosed\"></app-closed>\n  <div class=\"main_div\" *ngIf=\"!util.appClosed\">\n    <ion-row>\n      <ion-col size=\"4\">\n        <img [src]=\"getCover()\" alt=\"\" class=\"profilePic\" onError=\"this.src='assets/imgs/user.png'\">\n      </ion-col>\n      <ion-col size=\"8\">\n        <p class=\"username\">{{getName()}}</p>\n        <p class=\"email\">{{getEmail()}}</p>\n        <ion-button (click)=\"editProfile()\" shape=\"round\" size=\"small\" color=\"light\"> {{util.getString('Edit Profile')}}\n        </ion-button>\n      </ion-col>\n    </ion-row>\n  </div>\n\n  <div class=\"options\" *ngIf=\"!util.appClosed\">\n    <ion-item lines=\"none\" detail=\"\" class=\"ion-activatable ripple-parent\" (click)=\"getProducts()\">\n      <ion-icon name=\"file-tray-stacked-outline\" slot=\"start\"></ion-icon>\n      <ion-label>{{util.getString('Products')}} </ion-label>\n      <ion-ripple-effect type=\"unbounded\"></ion-ripple-effect>\n    </ion-item>\n\n    <ion-item lines=\"none\" detail=\"\" class=\"ion-activatable ripple-parent\" (click)=\"getReviews()\">\n      <ion-icon name=\"star-outline\" slot=\"start\"></ion-icon>\n      <ion-label> {{util.getString('Reviews')}} </ion-label>\n      <ion-ripple-effect type=\"unbounded\"></ion-ripple-effect>\n    </ion-item>\n\n    <ion-item lines=\"none\" detail=\"\" class=\"ion-activatable ripple-parent\" (click)=\"getLanguages()\">\n      <ion-icon name=\"language-outline\" slot=\"start\"></ion-icon>\n      <ion-label> {{util.getString('Language')}} </ion-label>\n      <ion-ripple-effect type=\"unbounded\"></ion-ripple-effect>\n    </ion-item>\n\n    <ion-item lines=\"none\" detail=\"\" class=\"ion-activatable ripple-parent\" (click)=\"changePassword()\">\n      <ion-icon name=\"key-outline\" slot=\"start\"></ion-icon>\n      <ion-label>{{util.getString('Change Password')}} </ion-label>\n      <ion-ripple-effect type=\"unbounded\"></ion-ripple-effect>\n    </ion-item>\n\n    <ion-item lines=\"none\" detail=\"\" class=\"ion-activatable ripple-parent\" (click)=\"goToAbout()\">\n      <ion-icon name=\"information-circle-outline\" slot=\"start\"></ion-icon>\n      <ion-label>{{util.getString('About Us')}} </ion-label>\n      <ion-ripple-effect type=\"unbounded\"></ion-ripple-effect>\n    </ion-item>\n\n    <ion-item lines=\"none\" detail=\"\" class=\"ion-activatable ripple-parent\" (click)=\"goToContact()\">\n      <ion-icon name=\"mail-outline\" slot=\"start\"></ion-icon>\n      <ion-label>{{util.getString('Contact Us')}} </ion-label>\n      <ion-ripple-effect type=\"unbounded\"></ion-ripple-effect>\n    </ion-item>\n\n    <ion-item lines=\"none\" detail=\"\" class=\"ion-activatable ripple-parent\" (click)=\"goToChats()\">\n      <ion-icon name=\"chatbubbles-outline\" slot=\"start\"></ion-icon>\n      <ion-label>{{util.getString('Chats')}} </ion-label>\n      <ion-ripple-effect type=\"unbounded\"></ion-ripple-effect>\n    </ion-item>\n\n\n    <ion-item lines=\"none\" detail=\"\" class=\"ion-activatable ripple-parent\" (click)=\"goFaqs()\">\n      <ion-icon name=\"flag-outline\" slot=\"start\"></ion-icon>\n      <ion-label> {{util.getString('FAQs')}} </ion-label>\n      <ion-ripple-effect type=\"unbounded\"></ion-ripple-effect>\n    </ion-item>\n\n    <ion-item lines=\"none\" detail=\"\" class=\"ion-activatable ripple-parent\" (click)=\"goHelp()\">\n      <ion-icon name=\"help-circle-outline\" slot=\"start\"></ion-icon>\n      <ion-label> {{util.getString('Help')}} </ion-label>\n      <ion-ripple-effect type=\"unbounded\"></ion-ripple-effect>\n    </ion-item>\n\n    <ion-item lines=\"none\" detail=\"\" class=\"ion-activatable ripple-parent\" (click)=\"logout()\">\n      <ion-icon name=\"power-outline\" slot=\"start\"></ion-icon>\n      <ion-label>{{util.getString('Log Out')}} </ion-label>\n      <ion-ripple-effect type=\"unbounded\"></ion-ripple-effect>\n    </ion-item>\n  </div>\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/pages/account/account-routing.module.ts":
  /*!*********************************************************!*\
    !*** ./src/app/pages/account/account-routing.module.ts ***!
    \*********************************************************/

  /*! exports provided: AccountPageRoutingModule */

  /***/
  function srcAppPagesAccountAccountRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AccountPageRoutingModule", function () {
      return AccountPageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var _account_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./account.page */
    "./src/app/pages/account/account.page.ts");
    /*
      Authors : initappz (Rahul Jograna)
      Website : https://initappz.com/
      App Name : ionic 5 groceryee app
      Created : 10-Sep-2020
      This App Template Source code is licensed as per the
      terms found in the Website https://initappz.com/license
      Copyright and Good Faith Purchasers © 2020-present initappz.
    */


    var routes = [{
      path: '',
      component: _account_page__WEBPACK_IMPORTED_MODULE_3__["AccountPage"]
    }];

    var AccountPageRoutingModule = function AccountPageRoutingModule() {
      _classCallCheck(this, AccountPageRoutingModule);
    };

    AccountPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AccountPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/account/account.module.ts":
  /*!*************************************************!*\
    !*** ./src/app/pages/account/account.module.ts ***!
    \*************************************************/

  /*! exports provided: AccountPageModule */

  /***/
  function srcAppPagesAccountAccountModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AccountPageModule", function () {
      return AccountPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _account_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./account-routing.module */
    "./src/app/pages/account/account-routing.module.ts");
    /* harmony import */


    var _account_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./account.page */
    "./src/app/pages/account/account.page.ts");
    /* harmony import */


    var src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/components/components.module */
    "./src/app/components/components.module.ts");
    /*
      Authors : initappz (Rahul Jograna)
      Website : https://initappz.com/
      App Name : ionic 5 groceryee app
      Created : 10-Sep-2020
      This App Template Source code is licensed as per the
      terms found in the Website https://initappz.com/license
      Copyright and Good Faith Purchasers © 2020-present initappz.
    */


    var AccountPageModule = function AccountPageModule() {
      _classCallCheck(this, AccountPageModule);
    };

    AccountPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _account_routing_module__WEBPACK_IMPORTED_MODULE_5__["AccountPageRoutingModule"], src_app_components_components_module__WEBPACK_IMPORTED_MODULE_7__["ComponentsModule"]],
      declarations: [_account_page__WEBPACK_IMPORTED_MODULE_6__["AccountPage"]]
    })], AccountPageModule);
    /***/
  },

  /***/
  "./src/app/pages/account/account.page.scss":
  /*!*************************************************!*\
    !*** ./src/app/pages/account/account.page.scss ***!
    \*************************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesAccountAccountPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "@charset \"UTF-8\";\n/*\n  Authors : initappz (Rahul Jograna)\n  Website : https://initappz.com/\n  App Name : ionic 5 groceryee app\n  Created : 10-Sep-2020\n  This App Template Source code is licensed as per the\n  terms found in the Website https://initappz.com/license\n  Copyright and Good Faith Purchasers © 2020-present initappz.\n*/\n.main_div {\n  padding: 20px 10px;\n  background: var(--ion-color-primary);\n}\n.main_div .profilePic {\n  height: 100px;\n  width: 100px;\n  border-radius: 50%;\n  border: 4px solid white;\n}\n.main_div .username {\n  margin: 0px;\n  margin-top: 10px;\n  font-size: 1.3rem;\n  font-weight: bold;\n  color: white;\n}\n.main_div .email {\n  margin: 0px;\n  margin-bottom: 10px;\n  font-size: 1rem;\n  color: white;\n}\n.options {\n  padding: 10px;\n}\n.options ion-item {\n  border-bottom: 1px solid lightgray;\n  height: 60px;\n  display: flex;\n}\n.options ion-item ion-icon {\n  color: var(--ion-color-primary);\n  font-size: 22px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYWNjb3VudC9hY2NvdW50LnBhZ2Uuc2NzcyIsIi9ob21lL2FuZHJldy9Eb3dubG9hZHMvdHdvemUvaW9uaWM1R3JvY2VyeWVlQXBwRnVsbF9WNy9BcHBfY29kZS9TdG9yZV9hcHAvc3JjL2FwcC9wYWdlcy9hY2NvdW50L2FjY291bnQucGFnZS5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQ0FoQjs7Ozs7Ozs7Q0FBQTtBQVNBO0VBQ0ksa0JBQUE7RUFDQSxvQ0FBQTtBREVKO0FDQUk7RUFDSSxhQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsdUJBQUE7QURFUjtBQ0NJO0VBQ0ksV0FBQTtFQUNBLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7QURDUjtBQ0VJO0VBQ0ksV0FBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLFlBQUE7QURBUjtBQ0lBO0VBQ0ksYUFBQTtBRERKO0FDRUk7RUFDSSxrQ0FBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0FEQVI7QUNFUTtFQUNFLCtCQUFBO0VBQ0EsZUFBQTtBREFWIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvYWNjb3VudC9hY2NvdW50LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBjaGFyc2V0IFwiVVRGLThcIjtcbi8qXG4gIEF1dGhvcnMgOiBpbml0YXBweiAoUmFodWwgSm9ncmFuYSlcbiAgV2Vic2l0ZSA6IGh0dHBzOi8vaW5pdGFwcHouY29tL1xuICBBcHAgTmFtZSA6IGlvbmljIDUgZ3JvY2VyeWVlIGFwcFxuICBDcmVhdGVkIDogMTAtU2VwLTIwMjBcbiAgVGhpcyBBcHAgVGVtcGxhdGUgU291cmNlIGNvZGUgaXMgbGljZW5zZWQgYXMgcGVyIHRoZVxuICB0ZXJtcyBmb3VuZCBpbiB0aGUgV2Vic2l0ZSBodHRwczovL2luaXRhcHB6LmNvbS9saWNlbnNlXG4gIENvcHlyaWdodCBhbmQgR29vZCBGYWl0aCBQdXJjaGFzZXJzIMKpIDIwMjAtcHJlc2VudCBpbml0YXBwei5cbiovXG4ubWFpbl9kaXYge1xuICBwYWRkaW5nOiAyMHB4IDEwcHg7XG4gIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbn1cbi5tYWluX2RpdiAucHJvZmlsZVBpYyB7XG4gIGhlaWdodDogMTAwcHg7XG4gIHdpZHRoOiAxMDBweDtcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xuICBib3JkZXI6IDRweCBzb2xpZCB3aGl0ZTtcbn1cbi5tYWluX2RpdiAudXNlcm5hbWUge1xuICBtYXJnaW46IDBweDtcbiAgbWFyZ2luLXRvcDogMTBweDtcbiAgZm9udC1zaXplOiAxLjNyZW07XG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xuICBjb2xvcjogd2hpdGU7XG59XG4ubWFpbl9kaXYgLmVtYWlsIHtcbiAgbWFyZ2luOiAwcHg7XG4gIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIGZvbnQtc2l6ZTogMXJlbTtcbiAgY29sb3I6IHdoaXRlO1xufVxuXG4ub3B0aW9ucyB7XG4gIHBhZGRpbmc6IDEwcHg7XG59XG4ub3B0aW9ucyBpb24taXRlbSB7XG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCBsaWdodGdyYXk7XG4gIGhlaWdodDogNjBweDtcbiAgZGlzcGxheTogZmxleDtcbn1cbi5vcHRpb25zIGlvbi1pdGVtIGlvbi1pY29uIHtcbiAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgZm9udC1zaXplOiAyMnB4O1xufSIsIi8qXG4gIEF1dGhvcnMgOiBpbml0YXBweiAoUmFodWwgSm9ncmFuYSlcbiAgV2Vic2l0ZSA6IGh0dHBzOi8vaW5pdGFwcHouY29tL1xuICBBcHAgTmFtZSA6IGlvbmljIDUgZ3JvY2VyeWVlIGFwcFxuICBDcmVhdGVkIDogMTAtU2VwLTIwMjBcbiAgVGhpcyBBcHAgVGVtcGxhdGUgU291cmNlIGNvZGUgaXMgbGljZW5zZWQgYXMgcGVyIHRoZVxuICB0ZXJtcyBmb3VuZCBpbiB0aGUgV2Vic2l0ZSBodHRwczovL2luaXRhcHB6LmNvbS9saWNlbnNlXG4gIENvcHlyaWdodCBhbmQgR29vZCBGYWl0aCBQdXJjaGFzZXJzIMKpIDIwMjAtcHJlc2VudCBpbml0YXBwei5cbiovXG4ubWFpbl9kaXZ7XG4gICAgcGFkZGluZzogMjBweCAxMHB4O1xuICAgIGJhY2tncm91bmQ6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcblxuICAgIC5wcm9maWxlUGlje1xuICAgICAgICBoZWlnaHQ6IDEwMHB4O1xuICAgICAgICB3aWR0aDogMTAwcHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgYm9yZGVyOiA0cHggc29saWQgd2hpdGU7XG4gICAgfVxuXG4gICAgLnVzZXJuYW1le1xuICAgICAgICBtYXJnaW46IDBweDtcbiAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAgICAgZm9udC1zaXplOiAxLjNyZW07XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgfVxuXG4gICAgLmVtYWlse1xuICAgICAgICBtYXJnaW46IDBweDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICAgICAgZm9udC1zaXplOiAxcmVtO1xuICAgICAgICBjb2xvcjogd2hpdGU7XG4gICAgfVxufVxuXG4ub3B0aW9uc3tcbiAgICBwYWRkaW5nOiAxMHB4O1xuICAgIGlvbi1pdGVte1xuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgbGlnaHRncmF5O1xuICAgICAgICBoZWlnaHQ6IDYwcHg7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG5cbiAgICAgICAgaW9uLWljb257XG4gICAgICAgICAgY29sb3I6IHZhcigtLWlvbi1jb2xvci1wcmltYXJ5KTtcbiAgICAgICAgICBmb250LXNpemU6IDIycHg7XG4gICAgICAgIH1cbiAgICB9XG59XG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/pages/account/account.page.ts":
  /*!***********************************************!*\
    !*** ./src/app/pages/account/account.page.ts ***!
    \***********************************************/

  /*! exports provided: AccountPage */

  /***/
  function srcAppPagesAccountAccountPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AccountPage", function () {
      return AccountPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
    /* harmony import */


    var src_app_services_util_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! src/app/services/util.service */
    "./src/app/services/util.service.ts");
    /* harmony import */


    var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/services/api.service */
    "./src/app/services/api.service.ts");
    /*
      Authors : initappz (Rahul Jograna)
      Website : https://initappz.com/
      App Name : ionic 5 groceryee app
      Created : 10-Sep-2020
      This App Template Source code is licensed as per the
      terms found in the Website https://initappz.com/license
      Copyright and Good Faith Purchasers © 2020-present initappz.
    */


    var AccountPage = /*#__PURE__*/function () {
      function AccountPage(navCtrl, router, util, api) {
        _classCallCheck(this, AccountPage);

        this.navCtrl = navCtrl;
        this.router = router;
        this.util = util;
        this.api = api;
      }

      _createClass(AccountPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "editProfile",
        value: function editProfile() {
          this.router.navigate(['/edit-profile']);
        }
      }, {
        key: "logout",
        value: function logout() {
          localStorage.clear();
          this.navCtrl.navigateRoot(['/login']);
        }
      }, {
        key: "getProducts",
        value: function getProducts() {
          this.router.navigate(['/tabs/tab3/products']);
        }
      }, {
        key: "getReviews",
        value: function getReviews() {
          this.router.navigate(['/reviews']);
        }
      }, {
        key: "getLanguages",
        value: function getLanguages() {
          this.router.navigate(['/languages']);
        }
      }, {
        key: "changePassword",
        value: function changePassword() {
          this.router.navigate(['forgot']);
        }
      }, {
        key: "goToContact",
        value: function goToContact() {
          this.router.navigate(['tabs/tab3/contacts']);
        }
      }, {
        key: "getName",
        value: function getName() {
          return localStorage.getItem('name') ? localStorage.getItem('name') : 'Groceryee';
        }
      }, {
        key: "getEmail",
        value: function getEmail() {
          return localStorage.getItem('email') ? localStorage.getItem('email') : 'info@app.com';
        }
      }, {
        key: "getCover",
        value: function getCover() {
          return this.util.store && this.util.store.cover ? this.api.mediaURL + this.util.store.cover : 'assets/imgs/user.png';
        }
      }, {
        key: "goToAbout",
        value: function goToAbout() {
          this.router.navigate(['tabs/tab3/about']);
        }
      }, {
        key: "goToChats",
        value: function goToChats() {
          this.router.navigate(['chats']);
        }
      }, {
        key: "openMenu",
        value: function openMenu() {
          this.util.openMenu();
        }
      }, {
        key: "goFaqs",
        value: function goFaqs() {
          this.router.navigate(['tabs/tab3/faqs']);
        }
      }, {
        key: "goHelp",
        value: function goHelp() {
          this.router.navigate(['tabs/tab3/help']);
        }
      }]);

      return AccountPage;
    }();

    AccountPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: src_app_services_util_service__WEBPACK_IMPORTED_MODULE_4__["UtilService"]
      }, {
        type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"]
      }];
    };

    AccountPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-account',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./account.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/account/account.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./account.page.scss */
      "./src/app/pages/account/account.page.scss"))["default"]]
    })], AccountPage);
    /***/
  }
}]);
//# sourceMappingURL=account-account-module-es5.js.map