function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[39], {
  /***/
  "./src/app/pages/manage-city/manage-city-routing.module.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/pages/manage-city/manage-city-routing.module.ts ***!
    \*****************************************************************/

  /*! exports provided: ManageCityRoutingModule */

  /***/
  function srcAppPagesManageCityManageCityRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ManageCityRoutingModule", function () {
      return ManageCityRoutingModule;
    });
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _manage_city_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./manage-city.component */
    "./src/app/pages/manage-city/manage-city.component.ts");

    var routes = [{
      path: '',
      component: _manage_city_component__WEBPACK_IMPORTED_MODULE_1__["ManageCityComponent"]
    }];

    var ManageCityRoutingModule = function ManageCityRoutingModule() {
      _classCallCheck(this, ManageCityRoutingModule);
    };
    /***/

  },

  /***/
  "./src/app/pages/manage-city/manage-city.component.ngfactory.js":
  /*!**********************************************************************!*\
    !*** ./src/app/pages/manage-city/manage-city.component.ngfactory.js ***!
    \**********************************************************************/

  /*! exports provided: RenderType_ManageCityComponent, View_ManageCityComponent_0, View_ManageCityComponent_Host_0, ManageCityComponentNgFactory */

  /***/
  function srcAppPagesManageCityManageCityComponentNgfactoryJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RenderType_ManageCityComponent", function () {
      return RenderType_ManageCityComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_ManageCityComponent_0", function () {
      return View_ManageCityComponent_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_ManageCityComponent_Host_0", function () {
      return View_ManageCityComponent_Host_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ManageCityComponentNgFactory", function () {
      return ManageCityComponentNgFactory;
    });
    /* harmony import */


    var _manage_city_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! ./manage-city.component.scss.shim.ngstyle */
    "./src/app/pages/manage-city/manage-city.component.scss.shim.ngstyle.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _node_modules_ngx_spinner_ngx_spinner_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../../node_modules/ngx-spinner/ngx-spinner.ngfactory */
    "./node_modules/ngx-spinner/ngx-spinner.ngfactory.js");
    /* harmony import */


    var ngx_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ngx-spinner */
    "./node_modules/ngx-spinner/fesm2015/ngx-spinner.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var ngx_google_places_autocomplete_ngx_google_places_autocomplete_directive__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ngx-google-places-autocomplete/ngx-google-places-autocomplete.directive */
    "./node_modules/ngx-google-places-autocomplete/ngx-google-places-autocomplete.directive.js");
    /* harmony import */


    var _node_modules_ng2_toasty_src_toasty_component_ngfactory__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../../../node_modules/ng2-toasty/src/toasty.component.ngfactory */
    "./node_modules/ng2-toasty/src/toasty.component.ngfactory.js");
    /* harmony import */


    var ng2_toasty_src_toasty_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ng2-toasty/src/toasty.component */
    "./node_modules/ng2-toasty/src/toasty.component.js");
    /* harmony import */


    var ng2_toasty_src_toasty_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ng2-toasty/src/toasty.service */
    "./node_modules/ng2-toasty/src/toasty.service.js");
    /* harmony import */


    var _manage_city_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./manage-city.component */
    "./src/app/pages/manage-city/manage-city.component.ts");
    /* harmony import */


    var _services_apis_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../../services/apis.service */
    "./src/app/services/apis.service.ts");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /**
     * @fileoverview This file was generated by the Angular template compiler. Do not edit.
     *
     * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
     * tslint:disable
     */


    var styles_ManageCityComponent = [_manage_city_component_scss_shim_ngstyle__WEBPACK_IMPORTED_MODULE_0__["styles"]];

    var RenderType_ManageCityComponent = _angular_core__WEBPACK_IMPORTED_MODULE_1__["??crt"]({
      encapsulation: 0,
      styles: styles_ManageCityComponent,
      data: {}
    });

    function View_ManageCityComponent_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["??vid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??eld"](0, 0, null, null, 3, "ngx-spinner", [["color", "#e74c3c"], ["type", "ball-pulse-sync"]], null, null, null, _node_modules_ngx_spinner_ngx_spinner_ngfactory__WEBPACK_IMPORTED_MODULE_2__["View_NgxSpinnerComponent_0"], _node_modules_ngx_spinner_ngx_spinner_ngfactory__WEBPACK_IMPORTED_MODULE_2__["RenderType_NgxSpinnerComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??did"](1, 770048, null, 0, ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerComponent"], [ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ChangeDetectorRef"]], {
        color: [0, "color"],
        type: [1, "type"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??eld"](2, 0, null, 0, 1, "p", [["style", "font-size: 20px; color: #e74c3c"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](3, null, ["", " "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??eld"](4, 0, null, null, 23, "div", [["class", "row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??eld"](5, 0, null, null, 22, "div", [["class", "col-md-12"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??eld"](6, 0, null, null, 21, "div", [["class", "card"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??eld"](7, 0, null, null, 2, "div", [["class", "card-body"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??eld"](8, 0, null, null, 1, "h5", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](-1, null, ["Add City "])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??eld"](10, 0, null, null, 17, "div", [["class", "card-body reset-table p-t-0"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??eld"](11, 0, null, null, 12, "div", [["class", "form-group row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??eld"](12, 0, null, null, 11, "div", [["class", "col-sm-12"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??eld"](13, 0, null, null, 1, "label", [], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](-1, null, ["Address"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??eld"](15, 0, null, null, 8, "input", [["class", "form-control"], ["ngx-google-places-autocomplete", ""], ["placeholder", "Address"], ["type", "text"]], [[2, "ng-untouched", null], [2, "ng-touched", null], [2, "ng-pristine", null], [2, "ng-dirty", null], [2, "ng-valid", null], [2, "ng-invalid", null], [2, "ng-pending", null]], [[null, "ngModelChange"], [null, "onAddressChange"], [null, "input"], [null, "blur"], [null, "compositionstart"], [null, "compositionend"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("input" === en) {
          var pd_0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["??nov"](_v, 16)._handleInput($event.target.value) !== false;
          ad = pd_0 && ad;
        }

        if ("blur" === en) {
          var pd_1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["??nov"](_v, 16).onTouched() !== false;
          ad = pd_1 && ad;
        }

        if ("compositionstart" === en) {
          var pd_2 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["??nov"](_v, 16)._compositionStart() !== false;
          ad = pd_2 && ad;
        }

        if ("compositionend" === en) {
          var pd_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["??nov"](_v, 16)._compositionEnd($event.target.value) !== false;
          ad = pd_3 && ad;
        }

        if ("ngModelChange" === en) {
          var pd_4 = (_co.address = $event) !== false;
          ad = pd_4 && ad;
        }

        if ("onAddressChange" === en) {
          var pd_5 = _co.handleAddressChange($event) !== false;
          ad = pd_5 && ad;
        }

        return ad;
      }, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??did"](16, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], [2, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["COMPOSITION_BUFFER_MODE"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??prd"](1024, null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NG_VALUE_ACCESSOR"], function (p0_0) {
        return [p0_0];
      }, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["DefaultValueAccessor"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??did"](18, 671744, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"], [[8, null], [8, null], [8, null], [6, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NG_VALUE_ACCESSOR"]]], {
        model: [0, "model"]
      }, {
        update: "ngModelChange"
      }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??prd"](2048, null, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControl"], null, [_angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgModel"]]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??did"](20, 16384, null, 0, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControlStatus"], [[4, _angular_forms__WEBPACK_IMPORTED_MODULE_4__["NgControl"]]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??did"](21, 4210688, [["placesRef", 4]], 0, ngx_google_places_autocomplete_ngx_google_places_autocomplete_directive__WEBPACK_IMPORTED_MODULE_5__["GooglePlaceDirective"], [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]], {
        options: [0, "options"]
      }, {
        onAddressChange: "onAddressChange"
      }), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??pad"](22, 1), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??pod"](23, {
        types: 0
      }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??eld"](24, 0, null, null, 3, "div", [["class", "form-group row"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??eld"](25, 0, null, null, 2, "div", [["class", "col-sm-12"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??eld"](26, 0, null, null, 1, "button", [["class", "btn btn-danger btn-round"]], null, [[null, "click"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("click" === en) {
          var pd_0 = _co.create() !== false;
          ad = pd_0 && ad;
        }

        return ad;
      }, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ted"](-1, null, ["Add City"])), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??eld"](28, 0, null, null, 1, "ng2-toasty", [], null, null, null, _node_modules_ng2_toasty_src_toasty_component_ngfactory__WEBPACK_IMPORTED_MODULE_6__["View_ToastyComponent_0"], _node_modules_ng2_toasty_src_toasty_component_ngfactory__WEBPACK_IMPORTED_MODULE_6__["RenderType_ToastyComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??did"](29, 114688, null, 0, ng2_toasty_src_toasty_component__WEBPACK_IMPORTED_MODULE_7__["ToastyComponent"], [ng2_toasty_src_toasty_service__WEBPACK_IMPORTED_MODULE_8__["ToastyConfig"], ng2_toasty_src_toasty_service__WEBPACK_IMPORTED_MODULE_8__["ToastyService"]], null, null)], function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = "#e74c3c";
        var currVal_1 = "ball-pulse-sync";

        _ck(_v, 1, 0, currVal_0, currVal_1);

        var currVal_10 = _co.address;

        _ck(_v, 18, 0, currVal_10);

        var currVal_11 = _ck(_v, 23, 0, _ck(_v, 22, 0, "(cities)"));

        _ck(_v, 21, 0, currVal_11);

        _ck(_v, 29, 0);
      }, function (_ck, _v) {
        var _co = _v.component;

        var currVal_2 = _co.api.translate("Please wait...");

        _ck(_v, 3, 0, currVal_2);

        var currVal_3 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["??nov"](_v, 20).ngClassUntouched;

        var currVal_4 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["??nov"](_v, 20).ngClassTouched;

        var currVal_5 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["??nov"](_v, 20).ngClassPristine;

        var currVal_6 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["??nov"](_v, 20).ngClassDirty;

        var currVal_7 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["??nov"](_v, 20).ngClassValid;

        var currVal_8 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["??nov"](_v, 20).ngClassInvalid;

        var currVal_9 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["??nov"](_v, 20).ngClassPending;

        _ck(_v, 15, 0, currVal_3, currVal_4, currVal_5, currVal_6, currVal_7, currVal_8, currVal_9);
      });
    }

    function View_ManageCityComponent_Host_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_1__["??vid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??eld"](0, 0, null, null, 1, "app-manage-city", [], null, null, null, View_ManageCityComponent_0, RenderType_ManageCityComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_1__["??did"](1, 114688, null, 0, _manage_city_component__WEBPACK_IMPORTED_MODULE_9__["ManageCityComponent"], [_services_apis_service__WEBPACK_IMPORTED_MODULE_10__["ApisService"], ng2_toasty_src_toasty_service__WEBPACK_IMPORTED_MODULE_8__["ToastyService"], ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"], _angular_common__WEBPACK_IMPORTED_MODULE_11__["Location"], _angular_router__WEBPACK_IMPORTED_MODULE_12__["Router"]], null, null)], function (_ck, _v) {
        _ck(_v, 1, 0);
      }, null);
    }

    var ManageCityComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_1__["??ccf"]("app-manage-city", _manage_city_component__WEBPACK_IMPORTED_MODULE_9__["ManageCityComponent"], View_ManageCityComponent_Host_0, {}, {}, []);
    /***/

  },

  /***/
  "./src/app/pages/manage-city/manage-city.component.scss.shim.ngstyle.js":
  /*!******************************************************************************!*\
    !*** ./src/app/pages/manage-city/manage-city.component.scss.shim.ngstyle.js ***!
    \******************************************************************************/

  /*! exports provided: styles */

  /***/
  function srcAppPagesManageCityManageCityComponentScssShimNgstyleJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "styles", function () {
      return styles;
    });
    /**
     * @fileoverview This file was generated by the Angular template compiler. Do not edit.
     *
     * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
     * tslint:disable
     */


    var styles = ["@charset \"UTF-8\";"];
    /***/
  },

  /***/
  "./src/app/pages/manage-city/manage-city.component.ts":
  /*!************************************************************!*\
    !*** ./src/app/pages/manage-city/manage-city.component.ts ***!
    \************************************************************/

  /*! exports provided: ManageCityComponent */

  /***/
  function srcAppPagesManageCityManageCityComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ManageCityComponent", function () {
      return ManageCityComponent;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /*
      Authors : initappz (Rahul Jograna)
      Website : https://initappz.com/
      App Name : ionic 5 groceryee app
      Created : 10-Sep-2020
      This App Template Source code is licensed as per the
      terms found in the Website https://initappz.com/license
      Copyright and Good Faith Purchasers ?? 2020-present initappz.
    */


    var ManageCityComponent = /*#__PURE__*/function () {
      function ManageCityComponent(api, toastyService, spinner, navCtrl, router) {
        var _this = this;

        _classCallCheck(this, ManageCityComponent);

        this.api = api;
        this.toastyService = toastyService;
        this.spinner = spinner;
        this.navCtrl = navCtrl;
        this.router = router;
        var param = {
          id: localStorage.getItem('uid')
        };
        this.api.auth(param).then(function (data) {
          if (data !== true) {
            localStorage.removeItem('uid');

            _this.router.navigate(['login']);
          }
        }, function (error) {
          console.log(error);
          localStorage.removeItem('uid');

          _this.router.navigate(['login']);
        })["catch"](function (error) {
          console.log(error);
          localStorage.removeItem('uid');

          _this.router.navigate(['login']);
        });
      }

      _createClass(ManageCityComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "handleAddressChange",
        value: function handleAddressChange(address) {
          console.log(address);
          this.city = address.name;
          this.lat = address.geometry.location.lat();
          this.lng = address.geometry.location.lng();
          console.log('=>', this.lng);
        }
      }, {
        key: "error",
        value: function error(message) {
          var toastOptions = {
            title: this.api.translate('Error'),
            msg: this.api.translate(message),
            showClose: true,
            timeout: 2000,
            theme: 'default',
            onAdd: function onAdd(toast) {
              console.log('Toast ' + toast.id + ' has been added!');
            },
            onRemove: function onRemove() {
              console.log('Toast  has been removed!');
            }
          }; // Add see all possible types in one shot

          this.toastyService.error(toastOptions);
        }
      }, {
        key: "success",
        value: function success(message) {
          var toastOptions = {
            title: this.api.translate('Success'),
            msg: this.api.translate(message),
            showClose: true,
            timeout: 2000,
            theme: 'default',
            onAdd: function onAdd(toast) {
              console.log('Toast ' + toast.id + ' has been added!');
            },
            onRemove: function onRemove() {
              console.log('Toast  has been removed!');
            }
          }; // Add see all possible types in one shot

          this.toastyService.success(toastOptions);
        }
      }, {
        key: "create",
        value: function create() {
          this.api.alerts(this.api.translate('Success'), this.api.translate('City Added'), 'success');
          this.navCtrl.back(); // if (!this.city || this.city === '' || !this.lat || !this.lng) {
          //   this.error(this.api.translate('Please select valid city name'));
          //   return false;
          // }
          // const param = {
          //   name: this.city,
          //   status: 1,
          //   lat: this.lat,
          //   lng: this.lng
          // };
          // console.log('ok', param);
          // this.spinner.show();
          // this.api.post('cities/save', param).then(data => {
          //   this.spinner.hide();
          //   console.log(data);
          //   this.api.alerts(this.api.translate('Success'), this.api.translate('City Added'), 'success');
          //   this.navCtrl.back();
          // }, error => {
          //   this.spinner.hide();
          //   console.log(error);
          //   this.error(this.api.translate('Something went wrong'));
          // }).catch(error => {
          //   this.spinner.hide();
          //   console.log(error);
          //   this.error(this.api.translate('Something went wrong'));
          // });
        }
      }]);

      return ManageCityComponent;
    }();
    /***/

  },

  /***/
  "./src/app/pages/manage-city/manage-city.module.ngfactory.js":
  /*!*******************************************************************!*\
    !*** ./src/app/pages/manage-city/manage-city.module.ngfactory.js ***!
    \*******************************************************************/

  /*! exports provided: ManageCityModuleNgFactory */

  /***/
  function srcAppPagesManageCityManageCityModuleNgfactoryJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ManageCityModuleNgFactory", function () {
      return ManageCityModuleNgFactory;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _manage_city_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./manage-city.module */
    "./src/app/pages/manage-city/manage-city.module.ts");
    /* harmony import */


    var _node_modules_angular_router_router_ngfactory__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../../../node_modules/@angular/router/router.ngfactory */
    "./node_modules/@angular/router/router.ngfactory.js");
    /* harmony import */


    var _manage_city_component_ngfactory__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./manage-city.component.ngfactory */
    "./src/app/pages/manage-city/manage-city.component.ngfactory.js");
    /* harmony import */


    var _node_modules_ng_bootstrap_ng_bootstrap_ng_bootstrap_ngfactory__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../../../node_modules/@ng-bootstrap/ng-bootstrap/ng-bootstrap.ngfactory */
    "./node_modules/@ng-bootstrap/ng-bootstrap/ng-bootstrap.ngfactory.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @ng-bootstrap/ng-bootstrap */
    "./node_modules/@ng-bootstrap/ng-bootstrap/fesm2015/ng-bootstrap.js");
    /* harmony import */


    var ng2_toasty_src_toasty_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ng2-toasty/src/toasty.service */
    "./node_modules/ng2-toasty/src/toasty.service.js");
    /* harmony import */


    var angular2_notifications_dist_src_simple_notifications_services_notifications_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! angular2-notifications/dist/src/simple-notifications/services/notifications.service */
    "./node_modules/angular2-notifications/dist/src/simple-notifications/services/notifications.service.js");
    /* harmony import */


    var angular2_notifications_dist_src_simple_notifications_services_notifications_service__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(angular2_notifications_dist_src_simple_notifications_services_notifications_service__WEBPACK_IMPORTED_MODULE_9__);
    /* harmony import */


    var css_animator_angular_animation_service__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! css-animator/angular/animation.service */
    "./node_modules/css-animator/angular/animation.service.js");
    /* harmony import */


    var css_animator_angular_animation_service__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(css_animator_angular_animation_service__WEBPACK_IMPORTED_MODULE_10__);
    /* harmony import */


    var ngx_pagination__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ngx-pagination */
    "./node_modules/ngx-pagination/dist/ngx-pagination.js");
    /* harmony import */


    var _nicky_lenaers_ngx_scroll_to__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @nicky-lenaers/ngx-scroll-to */
    "./node_modules/@nicky-lenaers/ngx-scroll-to/fesm2015/nicky-lenaers-ngx-scroll-to.js");
    /* harmony import */


    var _agm_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @agm/core */
    "./node_modules/@agm/core/fesm2015/agm-core.js");
    /* harmony import */


    var _shared_menu_items_menu_items__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ../../shared/menu-items/menu-items */
    "./src/app/shared/menu-items/menu-items.ts");
    /* harmony import */


    var _shared_todo_todo_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ../../shared/todo/todo.service */
    "./src/app/shared/todo/todo.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _manage_city_routing_module__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./manage-city-routing.module */
    "./src/app/pages/manage-city/manage-city-routing.module.ts");
    /* harmony import */


    var ng2_toasty__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ng2-toasty */
    "./node_modules/ng2-toasty/index.js");
    /* harmony import */


    var angular2_notifications_dist_src_simple_notifications_module__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! angular2-notifications/dist/src/simple-notifications.module */
    "./node_modules/angular2-notifications/dist/src/simple-notifications.module.js");
    /* harmony import */


    var angular2_notifications_dist_src_simple_notifications_module__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(angular2_notifications_dist_src_simple_notifications_module__WEBPACK_IMPORTED_MODULE_19__);
    /* harmony import */


    var css_animator_angular_animator_module__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! css-animator/angular/animator.module */
    "./node_modules/css-animator/angular/animator.module.js");
    /* harmony import */


    var css_animator_angular_animator_module__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(css_animator_angular_animator_module__WEBPACK_IMPORTED_MODULE_20__);
    /* harmony import */


    var ng_click_outside_lib_click_outside_module__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ng-click-outside/lib/click-outside.module */
    "./node_modules/ng-click-outside/lib/click-outside.module.js");
    /* harmony import */


    var ng_click_outside_lib_click_outside_module__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(ng_click_outside_lib_click_outside_module__WEBPACK_IMPORTED_MODULE_21__);
    /* harmony import */


    var ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! ngx-perfect-scrollbar */
    "./node_modules/ngx-perfect-scrollbar/dist/ngx-perfect-scrollbar.es5.js");
    /* harmony import */


    var ngx_skeleton_loader__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! ngx-skeleton-loader */
    "./node_modules/ngx-skeleton-loader/fesm2015/ngx-skeleton-loader.js");
    /* harmony import */


    var ngx_spinner__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! ngx-spinner */
    "./node_modules/ngx-spinner/fesm2015/ngx-spinner.js");
    /* harmony import */


    var _shared_shared_module__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! ../../shared/shared.module */
    "./src/app/shared/shared.module.ts");
    /* harmony import */


    var ngx_google_places_autocomplete_ngx_google_places_autocomplete_module__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! ngx-google-places-autocomplete/ngx-google-places-autocomplete.module */
    "./node_modules/ngx-google-places-autocomplete/ngx-google-places-autocomplete.module.js");
    /* harmony import */


    var _manage_city_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
    /*! ./manage-city.component */
    "./src/app/pages/manage-city/manage-city.component.ts");
    /**
     * @fileoverview This file was generated by the Angular template compiler. Do not edit.
     *
     * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
     * tslint:disable
     */


    var ManageCityModuleNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["??cmf"](_manage_city_module__WEBPACK_IMPORTED_MODULE_1__["ManageCityModule"], [], function (_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["??mod"]([_angular_core__WEBPACK_IMPORTED_MODULE_0__["??mpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["??CodegenComponentFactoryResolver"], [[8, [_node_modules_angular_router_router_ngfactory__WEBPACK_IMPORTED_MODULE_2__["??angular_packages_router_router_lNgFactory"], _manage_city_component_ngfactory__WEBPACK_IMPORTED_MODULE_3__["ManageCityComponentNgFactory"], _node_modules_ng_bootstrap_ng_bootstrap_ng_bootstrap_ngfactory__WEBPACK_IMPORTED_MODULE_4__["NgbAlertNgFactory"], _node_modules_ng_bootstrap_ng_bootstrap_ng_bootstrap_ngfactory__WEBPACK_IMPORTED_MODULE_4__["NgbDatepickerNgFactory"], _node_modules_ng_bootstrap_ng_bootstrap_ng_bootstrap_ngfactory__WEBPACK_IMPORTED_MODULE_4__["??uNgFactory"], _node_modules_ng_bootstrap_ng_bootstrap_ng_bootstrap_ngfactory__WEBPACK_IMPORTED_MODULE_4__["??vNgFactory"], _node_modules_ng_bootstrap_ng_bootstrap_ng_bootstrap_ngfactory__WEBPACK_IMPORTED_MODULE_4__["??mNgFactory"], _node_modules_ng_bootstrap_ng_bootstrap_ng_bootstrap_ngfactory__WEBPACK_IMPORTED_MODULE_4__["??rNgFactory"], _node_modules_ng_bootstrap_ng_bootstrap_ng_bootstrap_ngfactory__WEBPACK_IMPORTED_MODULE_4__["??sNgFactory"]]], [3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["??mpd"](4608, _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgLocalization"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgLocaleLocalization"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"], [2, _angular_common__WEBPACK_IMPORTED_MODULE_5__["??angular_packages_common_common_a"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["??mpd"](4608, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["??angular_packages_forms_forms_o"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["??angular_packages_forms_forms_o"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["??mpd"](4608, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormBuilder"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["??mpd"](4608, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModal"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModal"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injector"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["??w"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModalConfig"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["??mpd"](4608, ng2_toasty_src_toasty_service__WEBPACK_IMPORTED_MODULE_8__["ToastyConfig"], ng2_toasty_src_toasty_service__WEBPACK_IMPORTED_MODULE_8__["ToastyConfig"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["??mpd"](5120, ng2_toasty_src_toasty_service__WEBPACK_IMPORTED_MODULE_8__["ToastyService"], ng2_toasty_src_toasty_service__WEBPACK_IMPORTED_MODULE_8__["toastyServiceFactory"], [ng2_toasty_src_toasty_service__WEBPACK_IMPORTED_MODULE_8__["ToastyConfig"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["??mpd"](4608, angular2_notifications_dist_src_simple_notifications_services_notifications_service__WEBPACK_IMPORTED_MODULE_9__["NotificationsService"], angular2_notifications_dist_src_simple_notifications_services_notifications_service__WEBPACK_IMPORTED_MODULE_9__["NotificationsService"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["??mpd"](4608, css_animator_angular_animation_service__WEBPACK_IMPORTED_MODULE_10__["AnimationService"], css_animator_angular_animation_service__WEBPACK_IMPORTED_MODULE_10__["AnimationService"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["??mpd"](4608, ngx_pagination__WEBPACK_IMPORTED_MODULE_11__["PaginationService"], ngx_pagination__WEBPACK_IMPORTED_MODULE_11__["PaginationService"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["??mpd"](4608, _nicky_lenaers_ngx_scroll_to__WEBPACK_IMPORTED_MODULE_12__["ScrollToService"], _nicky_lenaers_ngx_scroll_to__WEBPACK_IMPORTED_MODULE_12__["ScrollToService"], [_angular_common__WEBPACK_IMPORTED_MODULE_5__["DOCUMENT"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["PLATFORM_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["??mpd"](4608, _agm_core__WEBPACK_IMPORTED_MODULE_13__["??c"], _agm_core__WEBPACK_IMPORTED_MODULE_13__["??c"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["??mpd"](4608, _agm_core__WEBPACK_IMPORTED_MODULE_13__["??d"], _agm_core__WEBPACK_IMPORTED_MODULE_13__["??d"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["??mpd"](4608, _agm_core__WEBPACK_IMPORTED_MODULE_13__["MapsAPILoader"], _agm_core__WEBPACK_IMPORTED_MODULE_13__["LazyMapsAPILoader"], [[2, _agm_core__WEBPACK_IMPORTED_MODULE_13__["LAZY_MAPS_API_CONFIG"]], _agm_core__WEBPACK_IMPORTED_MODULE_13__["??c"], _agm_core__WEBPACK_IMPORTED_MODULE_13__["??d"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["??mpd"](4608, _shared_menu_items_menu_items__WEBPACK_IMPORTED_MODULE_14__["MenuItems"], _shared_menu_items_menu_items__WEBPACK_IMPORTED_MODULE_14__["MenuItems"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["??mpd"](4608, _shared_todo_todo_service__WEBPACK_IMPORTED_MODULE_15__["TodoService"], _shared_todo_todo_service__WEBPACK_IMPORTED_MODULE_15__["TodoService"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["??mpd"](1073742336, _angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["CommonModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["??mpd"](1073742336, _angular_router__WEBPACK_IMPORTED_MODULE_16__["RouterModule"], _angular_router__WEBPACK_IMPORTED_MODULE_16__["RouterModule"], [[2, _angular_router__WEBPACK_IMPORTED_MODULE_16__["??angular_packages_router_router_a"]], [2, _angular_router__WEBPACK_IMPORTED_MODULE_16__["Router"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["??mpd"](1073742336, _manage_city_routing_module__WEBPACK_IMPORTED_MODULE_17__["ManageCityRoutingModule"], _manage_city_routing_module__WEBPACK_IMPORTED_MODULE_17__["ManageCityRoutingModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["??mpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["??angular_packages_forms_forms_d"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["??angular_packages_forms_forms_d"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["??mpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["??mpd"](1073742336, _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["??mpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbAccordionModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbAccordionModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["??mpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbAlertModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbAlertModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["??mpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbButtonsModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbButtonsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["??mpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbCarouselModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbCarouselModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["??mpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbCollapseModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbCollapseModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["??mpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbDatepickerModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbDatepickerModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["??mpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbDropdownModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbDropdownModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["??mpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModalModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModalModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["??mpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbNavModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbNavModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["??mpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbPaginationModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbPaginationModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["??mpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbPopoverModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbPopoverModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["??mpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbProgressbarModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbProgressbarModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["??mpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbRatingModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbRatingModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["??mpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbTabsetModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbTabsetModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["??mpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbTimepickerModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbTimepickerModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["??mpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbToastModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbToastModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["??mpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbTooltipModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbTooltipModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["??mpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbTypeaheadModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbTypeaheadModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["??mpd"](1073742336, _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModule"], _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_7__["NgbModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["??mpd"](1073742336, ng2_toasty__WEBPACK_IMPORTED_MODULE_18__["ToastyModule"], ng2_toasty__WEBPACK_IMPORTED_MODULE_18__["ToastyModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["??mpd"](1073742336, angular2_notifications_dist_src_simple_notifications_module__WEBPACK_IMPORTED_MODULE_19__["SimpleNotificationsModule"], angular2_notifications_dist_src_simple_notifications_module__WEBPACK_IMPORTED_MODULE_19__["SimpleNotificationsModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["??mpd"](1073742336, css_animator_angular_animator_module__WEBPACK_IMPORTED_MODULE_20__["AnimatorModule"], css_animator_angular_animator_module__WEBPACK_IMPORTED_MODULE_20__["AnimatorModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["??mpd"](1073742336, _nicky_lenaers_ngx_scroll_to__WEBPACK_IMPORTED_MODULE_12__["ScrollToModule"], _nicky_lenaers_ngx_scroll_to__WEBPACK_IMPORTED_MODULE_12__["ScrollToModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["??mpd"](1073742336, _agm_core__WEBPACK_IMPORTED_MODULE_13__["AgmCoreModule"], _agm_core__WEBPACK_IMPORTED_MODULE_13__["AgmCoreModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["??mpd"](1073742336, ng_click_outside_lib_click_outside_module__WEBPACK_IMPORTED_MODULE_21__["ClickOutsideModule"], ng_click_outside_lib_click_outside_module__WEBPACK_IMPORTED_MODULE_21__["ClickOutsideModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["??mpd"](1073742336, ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_22__["PerfectScrollbarModule"], ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_22__["PerfectScrollbarModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["??mpd"](1073742336, ngx_skeleton_loader__WEBPACK_IMPORTED_MODULE_23__["NgxSkeletonLoaderModule"], ngx_skeleton_loader__WEBPACK_IMPORTED_MODULE_23__["NgxSkeletonLoaderModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["??mpd"](1073742336, ngx_spinner__WEBPACK_IMPORTED_MODULE_24__["NgxSpinnerModule"], ngx_spinner__WEBPACK_IMPORTED_MODULE_24__["NgxSpinnerModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["??mpd"](1073742336, ngx_pagination__WEBPACK_IMPORTED_MODULE_11__["NgxPaginationModule"], ngx_pagination__WEBPACK_IMPORTED_MODULE_11__["NgxPaginationModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["??mpd"](1073742336, _shared_shared_module__WEBPACK_IMPORTED_MODULE_25__["SharedModule"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_25__["SharedModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["??mpd"](1073742336, ngx_google_places_autocomplete_ngx_google_places_autocomplete_module__WEBPACK_IMPORTED_MODULE_26__["GooglePlaceModule"], ngx_google_places_autocomplete_ngx_google_places_autocomplete_module__WEBPACK_IMPORTED_MODULE_26__["GooglePlaceModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["??mpd"](1073742336, _manage_city_module__WEBPACK_IMPORTED_MODULE_1__["ManageCityModule"], _manage_city_module__WEBPACK_IMPORTED_MODULE_1__["ManageCityModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["??mpd"](1024, _angular_router__WEBPACK_IMPORTED_MODULE_16__["ROUTES"], function () {
        return [[{
          path: "",
          component: _manage_city_component__WEBPACK_IMPORTED_MODULE_27__["ManageCityComponent"]
        }]];
      }, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["??mpd"](256, _agm_core__WEBPACK_IMPORTED_MODULE_13__["LAZY_MAPS_API_CONFIG"], {
        apiKey: "AIzaSyCE0nvTeHBsiQIrbpMVTe489_O5mwyqofk"
      }, []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["??mpd"](256, ngx_perfect_scrollbar__WEBPACK_IMPORTED_MODULE_22__["PERFECT_SCROLLBAR_CONFIG"], _shared_shared_module__WEBPACK_IMPORTED_MODULE_25__["??0"], [])]);
    });
    /***/

  },

  /***/
  "./src/app/pages/manage-city/manage-city.module.ts":
  /*!*********************************************************!*\
    !*** ./src/app/pages/manage-city/manage-city.module.ts ***!
    \*********************************************************/

  /*! exports provided: ManageCityModule */

  /***/
  function srcAppPagesManageCityManageCityModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ManageCityModule", function () {
      return ManageCityModule;
    });

    var ManageCityModule = function ManageCityModule() {
      _classCallCheck(this, ManageCityModule);
    };
    /***/

  }
}]);