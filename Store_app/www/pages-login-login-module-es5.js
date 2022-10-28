function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["pages-login-login-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.page.html":
  /*!***********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.page.html ***!
    \***********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppPagesLoginLoginPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n<ion-content>\n    <div class=\"main_content_div\">\n\n        <div class=\"iconDiv\">\n            <img src=\"assets/imgs/icon.png\" alt=\"\" class=\"icon\">\n        </div>\n        <div class=\"form_div\" *ngIf=\"util.user_login ==='0'\">\n            <ion-label class=\"main_head\"> {{util.getString('Sign in')}} </ion-label>\n            <ion-input type=\"email\" [placeholder]=\"util.getString('Email')\" [(ngModel)]=\"email\">\n                <ion-icon name=\"mail\" slot=\"icon-only\"></ion-icon>\n            </ion-input>\n            <ion-input type=\"password\" [placeholder]=\"util.getString('Password')\" [(ngModel)]=\"password\">\n                <ion-icon name=\"key\" slot=\"icon-only\"></ion-icon>\n            </ion-input>\n            <ion-label class=\"forgot\" *ngIf=\"!loggedIn\" (click)=\"reset()\">{{util.getString('Forgot Password ?')}}\n            </ion-label>\n            <ion-button expand=\"block\" [disabled]=\"loggedIn\" (click)=\"login()\">\n                <span *ngIf=\"!loggedIn\"> {{util.getString('SIGN IN')}} </span>\n                <ion-spinner name=\"circular\" *ngIf=\"loggedIn\"></ion-spinner>\n            </ion-button>\n        </div>\n\n        <div class=\"form_div\" *ngIf=\"util.user_login ==='1'\">\n            <ion-label class=\"main_head\"> {{util.getString('Sign in')}} </ion-label>\n\n            <ion-row>\n                <ion-col size=\"3\" (click)=\"openCountry()\">\n                    <ion-label class=\"ccCode\">{{mobileCcode}} </ion-label>\n                </ion-col>\n                <ion-col size=\"9\">\n                    <ion-input [(ngModel)]=\"mobileNumber\" type=\"number\" [placeholder]=\"util.getString('Mobile Number')\">\n                    </ion-input>\n\n                </ion-col>\n            </ion-row>\n\n            <ion-input type=\"password\" [placeholder]=\"util.getString('Password')\" [(ngModel)]=\"mobilePassword\">\n                <ion-icon name=\"key\" slot=\"icon-only\"></ion-icon>\n            </ion-input>\n            <ion-label class=\"forgot\" *ngIf=\"!loggedIn\" (click)=\"reset()\">{{util.getString('Forgot Password ?')}}\n            </ion-label>\n            <ion-button expand=\"block\" [disabled]=\"loggedIn\" (click)=\"onPhoneLogin()\">\n                <span *ngIf=\"!loggedIn\"> {{util.getString('SIGN IN')}} </span>\n                <ion-spinner name=\"circular\" *ngIf=\"loggedIn\"></ion-spinner>\n            </ion-button>\n        </div>\n\n        <div class=\"form_div\" *ngIf=\"util.user_login ==='2'\">\n            <ion-label class=\"main_head\"> {{util.getString('Sign in')}} </ion-label>\n\n            <ion-row>\n                <ion-col size=\"3\" (click)=\"openCountry()\">\n                    <ion-label class=\"ccCode\">{{mobileCcode}} </ion-label>\n                </ion-col>\n                <ion-col size=\"9\">\n                    <ion-input [(ngModel)]=\"mobileNumber\" type=\"number\" [placeholder]=\"util.getString('Mobile Number')\">\n                    </ion-input>\n\n                </ion-col>\n            </ion-row>\n\n            <ion-label class=\"forgot\" *ngIf=\"!loggedIn\" (click)=\"reset()\">{{util.getString('Forgot Password ?')}}\n            </ion-label>\n            <ion-button expand=\"block\" [disabled]=\"loggedIn\" (click)=\"onOTPLogin()\">\n                <span *ngIf=\"!loggedIn\"> {{util.getString('SIGN IN')}} </span>\n                <ion-spinner name=\"circular\" *ngIf=\"loggedIn\"></ion-spinner>\n            </ion-button>\n        </div>\n    </div>\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/pages/login/login-routing.module.ts":
  /*!*****************************************************!*\
    !*** ./src/app/pages/login/login-routing.module.ts ***!
    \*****************************************************/

  /*! exports provided: LoginPageRoutingModule */

  /***/
  function srcAppPagesLoginLoginRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginPageRoutingModule", function () {
      return LoginPageRoutingModule;
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


    var _login_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./login.page */
    "./src/app/pages/login/login.page.ts");
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
      component: _login_page__WEBPACK_IMPORTED_MODULE_3__["LoginPage"]
    }];

    var LoginPageRoutingModule = function LoginPageRoutingModule() {
      _classCallCheck(this, LoginPageRoutingModule);
    };

    LoginPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], LoginPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/pages/login/login.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/pages/login/login.module.ts ***!
    \*********************************************/

  /*! exports provided: LoginPageModule */

  /***/
  function srcAppPagesLoginLoginModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginPageModule", function () {
      return LoginPageModule;
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


    var _login_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./login-routing.module */
    "./src/app/pages/login/login-routing.module.ts");
    /* harmony import */


    var _login_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./login.page */
    "./src/app/pages/login/login.page.ts");
    /* harmony import */


    var src_app_pipes_pipe_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/pipes/pipe.module */
    "./src/app/pipes/pipe.module.ts");
    /*
      Authors : initappz (Rahul Jograna)
      Website : https://initappz.com/
      App Name : ionic 5 groceryee app
      Created : 10-Sep-2020
      This App Template Source code is licensed as per the
      terms found in the Website https://initappz.com/license
      Copyright and Good Faith Purchasers © 2020-present initappz.
    */


    var LoginPageModule = function LoginPageModule() {
      _classCallCheck(this, LoginPageModule);
    };

    LoginPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _login_routing_module__WEBPACK_IMPORTED_MODULE_5__["LoginPageRoutingModule"], src_app_pipes_pipe_module__WEBPACK_IMPORTED_MODULE_7__["PipeModule"]],
      declarations: [_login_page__WEBPACK_IMPORTED_MODULE_6__["LoginPage"]]
    })], LoginPageModule);
    /***/
  },

  /***/
  "./src/app/pages/login/login.page.scss":
  /*!*********************************************!*\
    !*** ./src/app/pages/login/login.page.scss ***!
    \*********************************************/

  /*! exports provided: default */

  /***/
  function srcAppPagesLoginLoginPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "@charset \"UTF-8\";\n/*\n  Authors : initappz (Rahul Jograna)\n  Website : https://initappz.com/\n  App Name : ionic 5 groceryee app\n  Created : 10-Sep-2020\n  This App Template Source code is licensed as per the\n  terms found in the Website https://initappz.com/license\n  Copyright and Good Faith Purchasers © 2020-present initappz.\n*/\nion-content {\n  --background: var(--ion-color-primary);\n}\n.main_content_div {\n  width: 100%;\n  padding: 30px;\n  position: absolute;\n  top: 45%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n}\n.main_content_div ion-icon {\n  color: var(--ion-color-primary);\n  font-size: 20px;\n  padding: 10px;\n}\n.main_content_div .iconDiv {\n  text-align: center;\n}\n.main_content_div .iconDiv .icon {\n  width: 60px;\n}\n.main_content_div .form_div {\n  padding: 25px;\n  position: relative;\n}\n.main_content_div .form_div .main_head {\n  display: block;\n  color: white;\n  font-weight: 600;\n  font-size: 30px;\n  margin: 10px;\n}\n.main_content_div .form_div ion-label {\n  font-size: 12px;\n  color: white;\n}\n.main_content_div .form_div .forgot {\n  display: block;\n  text-align: right;\n  color: white;\n}\n.main_content_div .form_div ion-input {\n  background: white;\n  border-radius: 20px;\n  margin-bottom: 15px;\n  --padding-start: 8px;\n}\n.main_content_div .form_div .ccCode {\n  background: white;\n  border-radius: 20px;\n  margin-bottom: 15px;\n  --padding-start: 8px;\n  padding: 12px;\n  display: flex;\n  flex-direction: row;\n  justify-content: center;\n  align-items: center;\n  color: gray;\n}\n.main_content_div .form_div ion-button {\n  margin-top: 20px;\n  --border-radius: 20px;\n  --background: white;\n  --color: var(--ion-color-primary);\n  font-family: muli-bold;\n}\n.main_content_div .form_div .tri {\n  width: 0;\n  height: 0;\n  border-left: 8px solid transparent;\n  border-right: 8px solid transparent;\n  border-bottom: 15px solid white;\n  position: absolute;\n  top: -15px;\n}\n.main_content_div .form_div .lbl {\n  margin-top: 20px;\n  color: white;\n  display: block;\n  text-align: center;\n}\n.main_content_div .form_div .signup_span {\n  color: white;\n  font-weight: 600;\n  font-size: 14px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbG9naW4vbG9naW4ucGFnZS5zY3NzIiwiL2hvbWUvYW5kcmV3L0Rvd25sb2Fkcy90d296ZS9pb25pYzVHcm9jZXJ5ZWVBcHBGdWxsX1Y3L0FwcF9jb2RlL1N0b3JlX2FwcC9zcmMvYXBwL3BhZ2VzL2xvZ2luL2xvZ2luLnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUNBaEI7Ozs7Ozs7O0NBQUE7QUFTQTtFQUNFLHNDQUFBO0FERUY7QUNDQTtFQUNFLFdBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGdDQUFBO0FERUY7QUNBRTtFQUNFLCtCQUFBO0VBQ0EsZUFBQTtFQUNBLGFBQUE7QURFSjtBQ0NFO0VBRUUsa0JBQUE7QURBSjtBQ0VJO0VBRUUsV0FBQTtBREROO0FDS0U7RUFDRSxhQUFBO0VBRUEsa0JBQUE7QURKSjtBQ01JO0VBQ0UsY0FBQTtFQUVBLFlBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxZQUFBO0FETE47QUNRSTtFQUNFLGVBQUE7RUFDQSxZQUFBO0FETk47QUNTSTtFQUNFLGNBQUE7RUFDQSxpQkFBQTtFQUNBLFlBQUE7QURQTjtBQ1VJO0VBQ0UsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0Esb0JBQUE7QURSTjtBQ1VJO0VBQ0UsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLG1CQUFBO0VBQ0Esb0JBQUE7RUFDQSxhQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsdUJBQUE7RUFDQSxtQkFBQTtFQUNBLFdBQUE7QURSTjtBQ1VJO0VBQ0UsZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0EsaUNBQUE7RUFDQSxzQkFBQTtBRFJOO0FDV0k7RUFDRSxRQUFBO0VBQ0EsU0FBQTtFQUNBLGtDQUFBO0VBQ0EsbUNBQUE7RUFDQSwrQkFBQTtFQUNBLGtCQUFBO0VBQ0EsVUFBQTtBRFROO0FDWUk7RUFDRSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxjQUFBO0VBQ0Esa0JBQUE7QURWTjtBQ2FJO0VBQ0UsWUFBQTtFQUNBLGdCQUFBO0VBQ0EsZUFBQTtBRFhOIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvbG9naW4vbG9naW4ucGFnZS5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGNoYXJzZXQgXCJVVEYtOFwiO1xuLypcbiAgQXV0aG9ycyA6IGluaXRhcHB6IChSYWh1bCBKb2dyYW5hKVxuICBXZWJzaXRlIDogaHR0cHM6Ly9pbml0YXBwei5jb20vXG4gIEFwcCBOYW1lIDogaW9uaWMgNSBncm9jZXJ5ZWUgYXBwXG4gIENyZWF0ZWQgOiAxMC1TZXAtMjAyMFxuICBUaGlzIEFwcCBUZW1wbGF0ZSBTb3VyY2UgY29kZSBpcyBsaWNlbnNlZCBhcyBwZXIgdGhlXG4gIHRlcm1zIGZvdW5kIGluIHRoZSBXZWJzaXRlIGh0dHBzOi8vaW5pdGFwcHouY29tL2xpY2Vuc2VcbiAgQ29weXJpZ2h0IGFuZCBHb29kIEZhaXRoIFB1cmNoYXNlcnMgwqkgMjAyMC1wcmVzZW50IGluaXRhcHB6LlxuKi9cbmlvbi1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG59XG5cbi5tYWluX2NvbnRlbnRfZGl2IHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDMwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA0NSU7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG59XG4ubWFpbl9jb250ZW50X2RpdiBpb24taWNvbiB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgcGFkZGluZzogMTBweDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5pY29uRGl2IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLm1haW5fY29udGVudF9kaXYgLmljb25EaXYgLmljb24ge1xuICB3aWR0aDogNjBweDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5mb3JtX2RpdiB7XG4gIHBhZGRpbmc6IDI1cHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5mb3JtX2RpdiAubWFpbl9oZWFkIHtcbiAgZGlzcGxheTogYmxvY2s7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgZm9udC1zaXplOiAzMHB4O1xuICBtYXJnaW46IDEwcHg7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuZm9ybV9kaXYgaW9uLWxhYmVsIHtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBjb2xvcjogd2hpdGU7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuZm9ybV9kaXYgLmZvcmdvdCB7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB0ZXh0LWFsaWduOiByaWdodDtcbiAgY29sb3I6IHdoaXRlO1xufVxuLm1haW5fY29udGVudF9kaXYgLmZvcm1fZGl2IGlvbi1pbnB1dCB7XG4gIGJhY2tncm91bmQ6IHdoaXRlO1xuICBib3JkZXItcmFkaXVzOiAyMHB4O1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICAtLXBhZGRpbmctc3RhcnQ6IDhweDtcbn1cbi5tYWluX2NvbnRlbnRfZGl2IC5mb3JtX2RpdiAuY2NDb2RlIHtcbiAgYmFja2dyb3VuZDogd2hpdGU7XG4gIGJvcmRlci1yYWRpdXM6IDIwcHg7XG4gIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gIC0tcGFkZGluZy1zdGFydDogOHB4O1xuICBwYWRkaW5nOiAxMnB4O1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgY29sb3I6IGdyYXk7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuZm9ybV9kaXYgaW9uLWJ1dHRvbiB7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIC0tYm9yZGVyLXJhZGl1czogMjBweDtcbiAgLS1iYWNrZ3JvdW5kOiB3aGl0ZTtcbiAgLS1jb2xvcjogdmFyKC0taW9uLWNvbG9yLXByaW1hcnkpO1xuICBmb250LWZhbWlseTogbXVsaS1ib2xkO1xufVxuLm1haW5fY29udGVudF9kaXYgLmZvcm1fZGl2IC50cmkge1xuICB3aWR0aDogMDtcbiAgaGVpZ2h0OiAwO1xuICBib3JkZXItbGVmdDogOHB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICBib3JkZXItcmlnaHQ6IDhweCBzb2xpZCB0cmFuc3BhcmVudDtcbiAgYm9yZGVyLWJvdHRvbTogMTVweCBzb2xpZCB3aGl0ZTtcbiAgcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IC0xNXB4O1xufVxuLm1haW5fY29udGVudF9kaXYgLmZvcm1fZGl2IC5sYmwge1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICBjb2xvcjogd2hpdGU7XG4gIGRpc3BsYXk6IGJsb2NrO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4ubWFpbl9jb250ZW50X2RpdiAuZm9ybV9kaXYgLnNpZ251cF9zcGFuIHtcbiAgY29sb3I6IHdoaXRlO1xuICBmb250LXdlaWdodDogNjAwO1xuICBmb250LXNpemU6IDE0cHg7XG59IiwiLypcbiAgQXV0aG9ycyA6IGluaXRhcHB6IChSYWh1bCBKb2dyYW5hKVxuICBXZWJzaXRlIDogaHR0cHM6Ly9pbml0YXBwei5jb20vXG4gIEFwcCBOYW1lIDogaW9uaWMgNSBncm9jZXJ5ZWUgYXBwXG4gIENyZWF0ZWQgOiAxMC1TZXAtMjAyMFxuICBUaGlzIEFwcCBUZW1wbGF0ZSBTb3VyY2UgY29kZSBpcyBsaWNlbnNlZCBhcyBwZXIgdGhlXG4gIHRlcm1zIGZvdW5kIGluIHRoZSBXZWJzaXRlIGh0dHBzOi8vaW5pdGFwcHouY29tL2xpY2Vuc2VcbiAgQ29weXJpZ2h0IGFuZCBHb29kIEZhaXRoIFB1cmNoYXNlcnMgwqkgMjAyMC1wcmVzZW50IGluaXRhcHB6LlxuKi9cbmlvbi1jb250ZW50IHtcbiAgLS1iYWNrZ3JvdW5kOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG59XG5cbi5tYWluX2NvbnRlbnRfZGl2IHtcbiAgd2lkdGg6IDEwMCU7XG4gIHBhZGRpbmc6IDMwcHg7XG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgdG9wOiA0NSU7XG4gIGxlZnQ6IDUwJTtcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG5cbiAgaW9uLWljb24ge1xuICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gIH1cblxuICAuaWNvbkRpdiB7XG4gICAgLy8gbWFyZ2luLXRvcDogODBweDtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cbiAgICAuaWNvbiB7XG4gICAgICAvLyBoZWlnaHQ6IDUwcHg7XG4gICAgICB3aWR0aDogNjBweDtcbiAgICB9XG4gIH1cblxuICAuZm9ybV9kaXYge1xuICAgIHBhZGRpbmc6IDI1cHg7XG5cbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG5cbiAgICAubWFpbl9oZWFkIHtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgLy8gdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICBmb250LXNpemU6IDMwcHg7XG4gICAgICBtYXJnaW46IDEwcHg7XG4gICAgfVxuXG4gICAgaW9uLWxhYmVsIHtcbiAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgIGNvbG9yOiB3aGl0ZTtcbiAgICB9XG5cbiAgICAuZm9yZ290IHtcbiAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgdGV4dC1hbGlnbjogcmlnaHQ7XG4gICAgICBjb2xvcjogd2hpdGU7XG4gICAgfVxuXG4gICAgaW9uLWlucHV0IHtcbiAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gICAgICAtLXBhZGRpbmctc3RhcnQ6IDhweDtcbiAgICB9XG4gICAgLmNjQ29kZXtcbiAgICAgIGJhY2tncm91bmQ6IHdoaXRlO1xuICAgICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XG4gICAgICAtLXBhZGRpbmctc3RhcnQ6IDhweDtcbiAgICAgIHBhZGRpbmc6MTJweDtcbiAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xuICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgY29sb3I6IGdyYXk7XG4gICAgfVxuICAgIGlvbi1idXR0b24ge1xuICAgICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICAgIC0tYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICAgIC0tYmFja2dyb3VuZDogd2hpdGU7XG4gICAgICAtLWNvbG9yOiB2YXIoLS1pb24tY29sb3ItcHJpbWFyeSk7XG4gICAgICBmb250LWZhbWlseTogbXVsaS1ib2xkO1xuICAgIH1cblxuICAgIC50cmkge1xuICAgICAgd2lkdGg6IDA7XG4gICAgICBoZWlnaHQ6IDA7XG4gICAgICBib3JkZXItbGVmdDogOHB4IHNvbGlkIHRyYW5zcGFyZW50O1xuICAgICAgYm9yZGVyLXJpZ2h0OiA4cHggc29saWQgdHJhbnNwYXJlbnQ7XG4gICAgICBib3JkZXItYm90dG9tOiAxNXB4IHNvbGlkIHdoaXRlO1xuICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgdG9wOiAtMTVweDtcbiAgICB9XG5cbiAgICAubGJsIHtcbiAgICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgICBjb2xvcjogd2hpdGU7XG4gICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICB9XG5cbiAgICAuc2lnbnVwX3NwYW4ge1xuICAgICAgY29sb3I6IHdoaXRlO1xuICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICB9XG4gIH1cbn1cbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/pages/login/login.page.ts":
  /*!*******************************************!*\
    !*** ./src/app/pages/login/login.page.ts ***!
    \*******************************************/

  /*! exports provided: LoginPage */

  /***/
  function srcAppPagesLoginLoginPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginPage", function () {
      return LoginPage;
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
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! sweetalert2 */
    "./node_modules/sweetalert2/dist/sweetalert2.all.js");
    /* harmony import */


    var sweetalert2__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_6__);
    /* harmony import */


    var _select_country_select_country_page__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../select-country/select-country.page */
    "./src/app/pages/select-country/select-country.page.ts");
    /* harmony import */


    var _verify_verify_page__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../verify/verify.page */
    "./src/app/pages/verify/verify.page.ts");
    /*
      Authors : initappz (Rahul Jograna)
      Website : https://initappz.com/
      App Name : ionic 5 groceryee app
      Created : 10-Sep-2020
      This App Template Source code is licensed as per the
      terms found in the Website https://initappz.com/license
      Copyright and Good Faith Purchasers © 2020-present initappz.
    */


    var LoginPage = /*#__PURE__*/function () {
      function LoginPage(menuController, router, util, navCtrl, api, modalController) {
        _classCallCheck(this, LoginPage);

        this.menuController = menuController;
        this.router = router;
        this.util = util;
        this.navCtrl = navCtrl;
        this.api = api;
        this.modalController = modalController;
        this.email = '';
        this.password = '';
        this.loggedIn = false;
        this.mobileCcode = '+91';

        if (!this.util.user_login || this.util.user_login === '') {
          this.util.user_login = '0';
        }

        console.log('user login type', this.util.user_login);
      }

      _createClass(LoginPage, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "login",
        value: function login() {
          var _this = this;

          console.log('login');

          if (!this.email || !this.password) {
            this.util.showToast(this.util.getString('All Fields are required'), 'dark', 'bottom');
            return false;
          }

          var emailfilter = /^[\w._-]+[+]?[\w._-]+@[\w.-]+\.[a-zA-Z]{2,6}$/;

          if (!emailfilter.test(this.email)) {
            this.util.showToast(this.util.getString('Please enter valid email'), 'dark', 'bottom');
            return false;
          }

          this.loggedIn = true;
          var param = {
            email: this.email,
            password: this.password
          };
          this.api.post('users/login', param).subscribe(function (data) {
            console.log(data);

            if (data && data.status === 200) {
              if (data && data.data && data.data.type === 'store') {
                if (data.data.status === '1') {
                  localStorage.setItem('uid', data.data.id);
                  localStorage.setItem('name', data.data.first_name + ' ' + data.data.last_name);
                  localStorage.setItem('email', data.data.email);
                  localStorage.setItem('cover', data.data.cover);
                  var store = {
                    id: data.data.id
                  };

                  _this.api.post('stores/getByUid', store).subscribe(function (data) {
                    _this.loggedIn = false;
                    console.log('*******************', data);

                    if (data && data.status === 200 && data.data && data.data.length) {
                      _this.util.store = data.data[0];
                      localStorage.setItem('suid', data.data[0].id);

                      _this.menuController.enable(true);

                      _this.navCtrl.navigateRoot(['']);
                    }
                  }, function (error) {
                    _this.loggedIn = false;

                    _this.util.errorToast(_this.util.getString('Something went wrong'));

                    console.log(error);
                  });
                } else {
                  _this.loggedIn = false;
                  console.log('not valid');
                  sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire({
                    title: _this.util.getString('Error'),
                    text: _this.util.getString('Your are blocked please contact administrator'),
                    icon: 'error',
                    showConfirmButton: true,
                    showCancelButton: true,
                    confirmButtonText: _this.util.getString('Need Help?'),
                    backdrop: false,
                    background: 'white'
                  }).then(function (status) {
                    if (status && status.value) {
                      localStorage.setItem('helpId', data.data.id);

                      _this.router.navigate(['inbox']);
                    }
                  });
                }
              } else {
                _this.loggedIn = false;

                _this.util.errorToast(_this.util.getString('Not valid user'));

                _this.email = '';
                _this.password = '';
              }
            } else if (data && data.status === 500) {
              _this.loggedIn = false;

              _this.util.errorToast(data.data.message);
            } else {
              _this.loggedIn = false;

              _this.util.errorToast(_this.util.getString('Something went wrong'));
            }
          }, function (error) {
            console.log(error);
            _this.loggedIn = false;

            _this.util.errorToast(_this.util.getString('Something went wrong'));
          });
        }
      }, {
        key: "create",
        value: function create() {
          this.router.navigate(['register']);
        }
      }, {
        key: "reset",
        value: function reset() {
          this.router.navigate(['forgot']);
        }
      }, {
        key: "ionViewDidEnter",
        value: function ionViewDidEnter() {
          console.log('enter');
          this.menuController.enable(false);
        }
      }, {
        key: "openCountry",
        value: function openCountry() {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var _this2 = this;

            var modal;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    console.log('open ccode');
                    _context.next = 3;
                    return this.modalController.create({
                      component: _select_country_select_country_page__WEBPACK_IMPORTED_MODULE_7__["SelectCountryPage"],
                      backdropDismiss: false,
                      showBackdrop: true
                    });

                  case 3:
                    modal = _context.sent;
                    modal.onDidDismiss().then(function (data) {
                      console.log(data);

                      if (data && data.role === 'selected') {
                        console.log('ok');
                        _this2.mobileCcode = '+' + data.data;
                      }
                    });
                    _context.next = 7;
                    return modal.present();

                  case 7:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "onPhoneLogin",
        value: function onPhoneLogin() {
          var _this3 = this;

          var param = {
            cc: this.mobileCcode,
            mobile: this.mobileNumber,
            password: this.mobilePassword
          };
          this.loggedIn = true;
          this.api.post('users/loginWithPhoneAndPassword', param).subscribe(function (data) {
            _this3.loggedIn = false;
            console.log(data);

            if (data && data.status === 200) {
              if (data && data.data && data.data.type === 'store') {
                if (data.data.status === '1') {
                  localStorage.setItem('uid', data.data.id);
                  var fcm = localStorage.getItem('fcm');

                  if (fcm && fcm !== null && fcm !== 'null') {
                    var updateParam = {
                      id: data.data.id,
                      fcm_token: fcm
                    };

                    _this3.api.post('users/edit_profile', updateParam).subscribe(function (data) {
                      console.log('user info=>', data);
                    }, function (error) {
                      console.log(error);
                    });
                  }

                  var store = {
                    id: data.data.id
                  };

                  _this3.api.post('stores/getByUid', store).subscribe(function (data) {
                    _this3.loggedIn = false;
                    console.log('*******************', data);

                    if (data && data.status === 200 && data.data && data.data.length) {
                      _this3.util.store = data.data[0];
                      localStorage.setItem('suid', data.data[0].id);

                      _this3.navCtrl.navigateRoot(['']);
                    }
                  }, function (error) {
                    _this3.loggedIn = false;

                    _this3.util.errorToast(_this3.util.getString('Something went wrong'));

                    console.log(error);
                  });
                } else {
                  console.log('not valid');
                  sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire({
                    title: _this3.util.getString('Error'),
                    text: _this3.util.getString('Your are blocked please contact administrator'),
                    icon: 'error',
                    showConfirmButton: true,
                    showCancelButton: true,
                    confirmButtonText: _this3.util.getString('Need Help?'),
                    backdrop: false,
                    background: 'white'
                  }).then(function (status) {
                    if (status && status.value) {
                      localStorage.setItem('helpId', data.data.id);

                      _this3.router.navigate(['inbox']);
                    }
                  });
                }
              } else {
                _this3.util.errorToast(_this3.util.getString('Not valid user'));
              }
            } else if (data && data.status === 500) {
              _this3.util.errorToast(data.data.message);
            } else {
              _this3.util.errorToast(_this3.util.getString('Something went wrong'));
            }
          }, function (error) {
            console.log(error);
            _this3.loggedIn = false;

            _this3.util.errorToast(_this3.util.getString('Something went wrong'));
          });
        }
      }, {
        key: "onOTPLogin",
        value: function onOTPLogin() {
          var _this4 = this;

          var param = {
            mobile: this.mobileNumber,
            cc: this.mobileCcode
          };
          this.loggedIn = true;
          this.api.post('users/checkMobileNumber', param).subscribe(function (data) {
            _this4.loggedIn = false;
            console.log(data);

            if (data && data.status === 200) {
              console.log('open modal');

              _this4.openModal(data.data.id);
            } else if (data && data.status === 500) {
              _this4.util.errorToast(data.data.message);
            } else {
              _this4.util.errorToast(_this4.util.getString('Something went wrong'));
            }
          }, function (error) {
            console.log(error);
            _this4.loggedIn = false;

            _this4.util.errorToast(_this4.util.getString('Something went wrong'));
          });
        }
      }, {
        key: "openModal",
        value: function openModal(uid) {
          return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            var _this5 = this;

            var modal;
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    console.log('uid', uid);
                    _context2.next = 3;
                    return this.modalController.create({
                      component: _verify_verify_page__WEBPACK_IMPORTED_MODULE_8__["VerifyPage"],
                      componentProps: {
                        code: this.mobileCcode,
                        phone: this.mobileNumber
                      }
                    });

                  case 3:
                    modal = _context2.sent;
                    modal.onDidDismiss().then(function (data) {
                      console.log(data);

                      if (data && data.role === 'ok') {
                        var param = {
                          id: uid
                        };

                        _this5.api.post('users/getById', param).subscribe(function (data) {
                          console.log('user data', data);

                          if (data && data.status === 200 && data.data && data.data.length && data.data[0].type === 'store') {
                            if (data && data.data && data.data[0].type === 'store') {
                              if (data.data[0].status === '1') {
                                localStorage.setItem('uid', uid);
                                var fcm = localStorage.getItem('fcm');

                                if (fcm && fcm !== null && fcm !== 'null') {
                                  var updateParam = {
                                    id: uid,
                                    fcm_token: fcm
                                  };

                                  _this5.api.post('users/edit_profile', updateParam).subscribe(function (data) {
                                    console.log('user info=>', data);
                                  }, function (error) {
                                    console.log(error);
                                  });
                                }

                                var store = {
                                  id: uid
                                };

                                _this5.api.post('stores/getByUid', store).subscribe(function (data) {
                                  _this5.loggedIn = false;
                                  console.log('*******************', data);

                                  if (data && data.status === 200 && data.data && data.data.length) {
                                    _this5.util.store = data.data[0];
                                    localStorage.setItem('suid', data.data[0].id);

                                    _this5.navCtrl.navigateRoot(['']);
                                  }
                                }, function (error) {
                                  _this5.loggedIn = false;

                                  _this5.util.errorToast(_this5.util.getString('Something went wrong'));

                                  console.log(error);
                                });
                              } else {
                                console.log('not valid');
                                sweetalert2__WEBPACK_IMPORTED_MODULE_6___default.a.fire({
                                  title: _this5.util.getString('Error'),
                                  text: _this5.util.getString('Your are blocked please contact administrator'),
                                  icon: 'error',
                                  showConfirmButton: true,
                                  showCancelButton: true,
                                  confirmButtonText: _this5.util.getString('Need Help?'),
                                  backdrop: false,
                                  background: 'white'
                                }).then(function (status) {
                                  if (status && status.value) {
                                    localStorage.setItem('helpId', data.data.id);

                                    _this5.router.navigate(['inbox']);
                                  }
                                });
                              }
                            } else {
                              _this5.util.errorToast(_this5.util.getString('Not valid user'));
                            }
                          } else if (data && data.status === 500) {
                            _this5.util.errorToast(data.data.message);
                          } else {
                            _this5.util.errorToast(_this5.util.getString('Something went wrong'));
                          }
                        }, function (error) {
                          localStorage.removeItem('uid');
                          console.log(error);
                        });
                      }
                    });
                    modal.present();

                  case 6:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }]);

      return LoginPage;
    }();

    LoginPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["MenuController"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: src_app_services_util_service__WEBPACK_IMPORTED_MODULE_4__["UtilService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
      }, {
        type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_5__["ApiService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["ModalController"]
      }];
    };

    LoginPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-login',
      template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! raw-loader!./login.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/login/login.page.html"))["default"],
      styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(
      /*! ./login.page.scss */
      "./src/app/pages/login/login.page.scss"))["default"]]
    })], LoginPage);
    /***/
  }
}]);
//# sourceMappingURL=pages-login-login-module-es5.js.map