(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["new-product-new-product-module"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/new-product/new-product.page.html":
/*!***********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/pages/new-product/new-product.page.html ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- \n   Authors : initappz (Rahul Jograna)\n  Website : https://initappz.com/\n  App Name : ionic 5 groceryee app\n  Created : 10-Sep-2020\n  This App Template Source code is licensed as per the\n  terms found in the Website https://initappz.com/license\n  Copyright and Good Faith Purchasers © 2020-present initappz.\n -->\n<ion-header>\n  <ion-toolbar color=\"primary\">\n    <ion-buttons slot=\"start\">\n      <ion-button (click)=\"back()\">\n        <ion-icon slot=\"icon-only\" name=\"arrow-back\" color=\"light\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title *ngIf=\"isNew\"> {{util.getString('Create Product')}} </ion-title>\n    <ion-title *ngIf=\"!isNew\"> {{util.getString('Update Product')}} </ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content class=\"ion-padding\">\n  <div class=\"mainContent\">\n    <ion-list lines=\"none\">\n\n      <ion-item (click)=\"openCate()\">\n        <ion-label class=\"title\">Category <br>\n          <span class=\"name\" *ngIf=\"!cateName\"> {{util.getString('Select Category')}} </span>\n          <span class=\"name\" *ngIf=\"cateName\">{{cateName}}</span>\n        </ion-label>\n      </ion-item>\n\n      <ion-item (click)=\"openSub()\">\n        <ion-label class=\"title\"> {{util.getString('Sub Category')}} <br>\n          <span class=\"name\" *ngIf=\"!subName\"> {{util.getString('Select Sub Category')}} </span>\n          <span class=\"name\" *ngIf=\"subName\">{{subName}}</span>\n        </ion-label>\n      </ion-item>\n\n      <ion-item>\n        <ion-label position=\"floating\"> {{util.getString('Product name')}} </ion-label>\n        <ion-input [(ngModel)]=\"name\" type=\"text\" [placeholder]=\"util.getString('Product name')\"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label position=\"floating\"> {{util.getString('Product price')}} </ion-label>\n        <ion-input [(ngModel)]=\"realPrice\" type=\"number\" (ionChange)=\"onRealPrice($event.target.value)\"\n          [placeholder]=\"util.getString('Product Price')\"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label position=\"floating\"> {{util.getString('Discount %')}} </ion-label>\n        <ion-input [(ngModel)]=\"discount\" (ionChange)=\"onDicount($event.target.value)\" type=\"number\"\n          [placeholder]=\"util.getString('Discount %')\"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label position=\"floating\"> {{util.getString('Sell Price')}} </ion-label>\n        <ion-input [(ngModel)]=\"sellPrice\" disabled=\"true\" type=\"number\" [placeholder]=\"util.getString('Sell Price')\">\n        </ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-textarea [placeholder]=\"util.getString('Description')\" [(ngModel)]=\"description\" rows=\"5\"></ion-textarea>\n      </ion-item>\n\n\n      <ion-item lines=\"none\">\n        <ion-label> {{util.getString('Status')}} </ion-label>\n        <ion-select [(ngModel)]=\"status\" interface=\"popover\" mode=\"ios\" lines=\"none\">\n          <ion-select-option value=\"1\"> {{util.getString('Available')}} </ion-select-option>\n          <ion-select-option value=\"0\"> {{util.getString('Hide')}} </ion-select-option>\n        </ion-select>\n      </ion-item>\n\n      <!-- New Update 2.0 -->\n      <ion-item lines=\"none\">\n        <ion-label> {{util.getString('In Stoke')}} </ion-label>\n        <ion-select [(ngModel)]=\"in_stoke\" interface=\"popover\" mode=\"ios\" lines=\"none\">\n          <ion-select-option value=\"1\"> {{util.getString('In Stoke')}} </ion-select-option>\n          <ion-select-option value=\"0\"> {{util.getString('Out of Stoke')}} </ion-select-option>\n        </ion-select>\n      </ion-item>\n      <!-- New Update 2.0 -->\n\n      <ion-item>\n        <ion-label> {{util.getString('Veg')}} </ion-label>\n        <ion-toggle slot=\"end\" [(ngModel)]=\"veg\"></ion-toggle>\n      </ion-item>\n\n      <ion-item>\n        <ion-label> {{util.getString('Is Single')}} </ion-label>\n        <ion-toggle slot=\"end\" [(ngModel)]=\"is_single\"></ion-toggle>\n      </ion-item>\n\n      <ion-item>\n        <ion-label> {{util.getString('In Offer')}} </ion-label>\n        <ion-toggle slot=\"end\" [(ngModel)]=\"in_offer\"></ion-toggle>\n      </ion-item>\n\n      <div class=\"coverPlaceholder\" (click)=\"cover()\" *ngIf=\"!coverImage || coverImage ==''\">\n        <ion-icon name=\"cloud-upload-outline\" color=\"primary\"></ion-icon>\n        <p> {{util.getString('Upload products cover image here')}} </p>\n      </div>\n\n      <div class=\"coverReal\" (click)=\"cover()\" [style.backgroundImage]=\"'url('+api.mediaURL+ coverImage+')'\"\n        *ngIf=\"coverImage && coverImage !=''\">\n      </div>\n\n      <p class=\"lbl\"> {{util.getString('Upload More Images')}} </p>\n      <ion-grid>\n        <ion-row>\n          <ion-col size=\"4\">\n            <div class=\"galleryPlaceholder\" (click)=\"others('1')\" *ngIf=\"!image1 || image1 ==''\">\n              <ion-icon name=\"cloud-upload-outline\" color=\"primary\"></ion-icon>\n              <p> {{util.getString('Image 1')}} </p>\n            </div>\n            <div class=\"galleryReal\" (click)=\"others('1')\" [style.backgroundImage]=\"'url('+api.mediaURL+image1+')'\"\n              *ngIf=\"image1 && image1 !=''\">\n            </div>\n          </ion-col>\n          <ion-col size=\"4\">\n            <div class=\"galleryPlaceholder\" (click)=\"others('2')\" *ngIf=\"!image2 || image2 ==''\">\n              <ion-icon name=\"cloud-upload-outline\" color=\"primary\"></ion-icon>\n              <p>{{util.getString('Image 2')}}</p>\n            </div>\n            <div class=\"galleryReal\" (click)=\"others('2')\" [style.backgroundImage]=\"'url('+api.mediaURL+image2+')'\"\n              *ngIf=\"image2 && image2 !=''\">\n            </div>\n          </ion-col>\n          <ion-col size=\"4\">\n            <div class=\"galleryPlaceholder\" (click)=\"others('3')\" *ngIf=\"!image3 || image3 ==''\">\n              <ion-icon name=\"cloud-upload-outline\" color=\"primary\"></ion-icon>\n              <p>{{util.getString('Image 3')}}</p>\n            </div>\n            <div class=\"galleryReal\" (click)=\"others('3')\" [style.backgroundImage]=\"'url('+api.mediaURL+image3+')'\"\n              *ngIf=\"image3 && image3 !=''\">\n            </div>\n          </ion-col>\n          <ion-col size=\"4\">\n            <div class=\"galleryPlaceholder\" (click)=\"others('4')\" *ngIf=\"!image4 || image4 ==''\">\n              <ion-icon name=\"cloud-upload-outline\" color=\"primary\"></ion-icon>\n              <p>{{util.getString('Image 4')}}</p>\n            </div>\n            <div class=\"galleryReal\" (click)=\"others('4')\" [style.backgroundImage]=\"'url('+api.mediaURL+image4+')'\"\n              *ngIf=\"image4 && image4 !=''\">\n            </div>\n          </ion-col>\n          <ion-col size=\"4\">\n            <div class=\"galleryPlaceholder\" (click)=\"others('5')\" *ngIf=\"!image5 || image5 ==''\">\n              <ion-icon name=\"cloud-upload-outline\" color=\"primary\"></ion-icon>\n              <p>{{util.getString('Image 5')}}</p>\n            </div>\n            <div class=\"galleryReal\" (click)=\"others('5')\" [style.backgroundImage]=\"'url('+api.mediaURL+image5+')'\"\n              *ngIf=\"image5 && image5 !=''\">\n            </div>\n          </ion-col>\n          <ion-col size=\"4\">\n            <div class=\"galleryPlaceholder\" (click)=\"others('6')\" *ngIf=\"!image6 || image6 ==''\">\n              <ion-icon name=\"cloud-upload-outline\" color=\"primary\"></ion-icon>\n              <p>{{util.getString('Image 6')}}</p>\n            </div>\n            <div class=\"galleryReal\" (click)=\"others('6')\" [style.backgroundImage]=\"'url('+api.mediaURL+image6+')'\"\n              *ngIf=\"image6 && image6 !=''\">\n            </div>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n\n      <ion-item>\n        <ion-label> {{util.getString('In Gram')}} </ion-label>\n        <ion-toggle slot=\"end\" [(ngModel)]=\"have_gram\"></ion-toggle>\n      </ion-item>\n\n      <ion-item *ngIf=\"have_gram\">\n        <ion-label position=\"floating\"> {{util.getString('Gram value')}} </ion-label>\n        <ion-input [(ngModel)]=\"gram\" type=\"number\" [placeholder]=\"util.getString('Gram value')\"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label> {{util.getString('In KG')}} </ion-label>\n        <ion-toggle slot=\"end\" [(ngModel)]=\"have_kg\"></ion-toggle>\n      </ion-item>\n\n      <ion-item *ngIf=\"have_kg\">\n        <ion-label position=\"floating\"> {{util.getString('KG value')}} </ion-label>\n        <ion-input [(ngModel)]=\"kg\" type=\"number\" [placeholder]=\"util.getString('KG value')\"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label> {{util.getString('In Liter')}} </ion-label>\n        <ion-toggle slot=\"end\" [(ngModel)]=\"have_liter\"></ion-toggle>\n      </ion-item>\n\n      <ion-item *ngIf=\"have_liter\">\n        <ion-label position=\"floating\"> {{util.getString('Liter value')}} </ion-label>\n        <ion-input [(ngModel)]=\"liter\" type=\"number\" [placeholder]=\"util.getString('Liter value')\"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label> {{util.getString('In PCs')}} </ion-label>\n        <ion-toggle slot=\"end\" [(ngModel)]=\"have_pcs\"></ion-toggle>\n      </ion-item>\n\n      <ion-item *ngIf=\"have_pcs\">\n        <ion-label position=\"floating\"> {{util.getString('PCs value')}} </ion-label>\n        <ion-input [(ngModel)]=\"pcs\" type=\"number\" [placeholder]=\"util.getString('PCs value')\"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label> {{util.getString('In ML')}} </ion-label>\n        <ion-toggle slot=\"end\" [(ngModel)]=\"have_ml\"></ion-toggle>\n      </ion-item>\n\n      <ion-item *ngIf=\"have_ml\">\n        <ion-label position=\"floating\"> {{util.getString('ML value')}} </ion-label>\n        <ion-input [(ngModel)]=\"ml\" type=\"number\" [placeholder]=\"util.getString('ML value')\"></ion-input>\n      </ion-item>\n\n      <ion-item>\n        <ion-label position=\"floating\"> {{util.getString('Expire Date')}} </ion-label>\n        <ion-datetime displayFormat=\"DD-MM-YYYY\" [(ngModel)]=\"exp_date\" [min]=\"minEndDate()\" [max]=\"getMaxDate()\">\n        </ion-datetime>\n      </ion-item>\n\n      <ion-item>\n        <ion-textarea [placeholder]=\"util.getString('Key Features')\" [(ngModel)]=\"key_features\" rows=\"5\"></ion-textarea>\n      </ion-item>\n\n      <ion-item>\n        <ion-textarea [placeholder]=\"util.getString('Disclaimer')\" [(ngModel)]=\"disclaimer\" rows=\"5\"></ion-textarea>\n      </ion-item>\n\n      <ion-item>\n        <ion-label>Size?</ion-label>\n        <ion-toggle slot=\"end\" (ionChange)=\"changeSize($event)\" [(ngModel)]=\"size\"></ion-toggle>\n      </ion-item>\n\n      <ion-list>\n        <ion-item-sliding *ngFor=\"let item of variations;let i = index;\">\n          <ion-item class=\"noLines\">\n            <ion-label>{{item.title}}</ion-label>\n            <ion-icon name=\"create-outline\" slot=\"end\" *ngIf=\"item.title !=='size'\" (click)=\"editTitle(i)\"></ion-icon>\n            <ion-icon name=\"add-circle\" slot=\"end\" (click)=\"addItem(i)\"></ion-icon>\n            <ion-icon name=\"trash\" slot=\"end\" (click)=\"delete(item)\"></ion-icon>\n          </ion-item>\n          <ion-item *ngFor=\"let sub of item.items;let j = index\" class=\"sub\" lines=\"nones\">\n            <ion-label>{{sub.title}}\n              <ion-label *ngIf=\"sub.discount === 0 || sub.discount ==='0'\">\n                <span *ngIf=\"util.cside ==='right'\"> {{sub.price}} {{util.currecny}}</span>\n                <span *ngIf=\"util.cside ==='left'\">{{util.currecny}} {{sub.price}} </span>\n              </ion-label>\n              <ion-label class=\"price_lbl\" *ngIf=\"sub.discount !== 0 && sub.discount !=='0'\">\n                <span class=\"original\" *ngIf=\"util.cside ==='left'\"> {{util.currecny}} {{sub.price}} </span>\n                <span class=\"sell\" *ngIf=\"util.cside ==='left'\">{{util.currecny}} {{sub.discount}} </span>\n                <span class=\"original\" *ngIf=\"util.cside ==='right'\"> {{sub.price}} {{util.currecny}}</span>\n                <span class=\"sell\" *ngIf=\"util.cside ==='right'\"> {{sub.discount}} {{util.currecny}}</span>\n              </ion-label>\n            </ion-label>\n            <ion-icon name=\"create-outline\" slot=\"end\" (click)=\"editSub(i,sub,j)\"></ion-icon>\n            <ion-icon name=\"trash-outline\" slot=\"end\" (click)=\"deleteSub(i,sub)\"></ion-icon>\n          </ion-item>\n        </ion-item-sliding>\n      </ion-list>\n\n    </ion-list>\n\n    <ion-button (click)=\"submit()\" expand=\"block\" shape=\"round\">\n      {{util.getString('Submit')}}\n    </ion-button>\n  </div>\n\n\n</ion-content>");

/***/ }),

/***/ "./src/app/pages/new-product/new-product-routing.module.ts":
/*!*****************************************************************!*\
  !*** ./src/app/pages/new-product/new-product-routing.module.ts ***!
  \*****************************************************************/
/*! exports provided: NewProductPageRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewProductPageRoutingModule", function() { return NewProductPageRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _new_product_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./new-product.page */ "./src/app/pages/new-product/new-product.page.ts");

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
        component: _new_product_page__WEBPACK_IMPORTED_MODULE_3__["NewProductPage"]
    }
];
let NewProductPageRoutingModule = class NewProductPageRoutingModule {
};
NewProductPageRoutingModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]],
    })
], NewProductPageRoutingModule);



/***/ }),

/***/ "./src/app/pages/new-product/new-product.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/pages/new-product/new-product.module.ts ***!
  \*********************************************************/
/*! exports provided: NewProductPageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewProductPageModule", function() { return NewProductPageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _new_product_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./new-product-routing.module */ "./src/app/pages/new-product/new-product-routing.module.ts");
/* harmony import */ var _new_product_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./new-product.page */ "./src/app/pages/new-product/new-product.page.ts");

/*
  Authors : initappz (Rahul Jograna)
  Website : https://initappz.com/
  App Name : ionic 5 groceryee app
  Created : 10-Sep-2020
  This App Template Source code is licensed as per the
  terms found in the Website https://initappz.com/license
  Copyright and Good Faith Purchasers © 2020-present initappz.
*/






let NewProductPageModule = class NewProductPageModule {
};
NewProductPageModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
            _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"],
            _new_product_routing_module__WEBPACK_IMPORTED_MODULE_5__["NewProductPageRoutingModule"]
        ],
        declarations: [_new_product_page__WEBPACK_IMPORTED_MODULE_6__["NewProductPage"]]
    })
], NewProductPageModule);



/***/ }),

/***/ "./src/app/pages/new-product/new-product.page.scss":
/*!*********************************************************!*\
  !*** ./src/app/pages/new-product/new-product.page.scss ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@charset \"UTF-8\";\n/*\n  Authors : initappz (Rahul Jograna)\n  Website : https://initappz.com/\n  App Name : ionic 5 groceryee app\n  Created : 10-Sep-2020\n  This App Template Source code is licensed as per the\n  terms found in the Website https://initappz.com/license\n  Copyright and Good Faith Purchasers © 2020-present initappz.\n*/\nion-item {\n  border: 1px solid lightgray;\n  border-radius: 5px;\n  margin-top: 10px;\n}\n.delete_icn {\n  color: white;\n  font-weight: 600;\n}\n.mainContent .coverPlaceholder {\n  text-align: center;\n  padding: 60px;\n  border: 1px solid lightgray;\n  border-radius: 10px;\n  margin-top: 10px;\n}\n.mainContent .galleryPlaceholder {\n  text-align: center;\n  padding: 10px;\n  border: 1px solid lightgray;\n  border-radius: 10px;\n}\n.mainContent .title {\n  font-size: 14px;\n  font-weight: bold;\n  color: black;\n}\n.mainContent .name {\n  font-size: 12px;\n  font-weight: bold;\n  color: grey;\n}\n.mainContent .coverReal {\n  margin-top: 10px;\n  width: 100%;\n  height: 150px;\n  border-radius: 5px;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n.mainContent .lbl {\n  color: var(--ion-color-dark);\n  margin: 10px 0px !important;\n  font-weight: bold;\n}\n.mainContent .galleryReal {\n  width: 100%;\n  height: 90px;\n  border-radius: 5px;\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n}\n.mainContent ion-button {\n  --border-radius: 5px;\n  font-weight: 600;\n  margin-top: 20px;\n}\n.mainContent .price_lbl {\n  font-weight: 400;\n  font-size: 11px;\n}\n.mainContent .price_lbl .original {\n  text-decoration: line-through;\n  font-size: 11px;\n}\n.mainContent .price_lbl .sell {\n  font-weight: bold;\n}\n.mainContent .price_lbl .dicount {\n  font-weight: bold;\n  font-size: 11px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvbmV3LXByb2R1Y3QvbmV3LXByb2R1Y3QucGFnZS5zY3NzIiwiL2hvbWUvYW5kcmV3L0Rvd25sb2Fkcy90d296ZS9pb25pYzVHcm9jZXJ5ZWVBcHBGdWxsX1Y3L0FwcF9jb2RlL1N0b3JlX2FwcC9zcmMvYXBwL3BhZ2VzL25ldy1wcm9kdWN0L25ldy1wcm9kdWN0LnBhZ2Uuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUNBaEI7Ozs7Ozs7O0NBQUE7QUFTQTtFQUNJLDJCQUFBO0VBQ0Esa0JBQUE7RUFDQSxnQkFBQTtBREVKO0FDQUE7RUFDSSxZQUFBO0VBQ0EsZ0JBQUE7QURHSjtBQ0NJO0VBQ0ksa0JBQUE7RUFDQSxhQUFBO0VBQ0EsMkJBQUE7RUFDQSxtQkFBQTtFQUNBLGdCQUFBO0FERVI7QUNBSTtFQUNJLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLDJCQUFBO0VBQ0EsbUJBQUE7QURFUjtBQ0FJO0VBQ0ksZUFBQTtFQUNBLGlCQUFBO0VBQ0EsWUFBQTtBREVSO0FDQUk7RUFDSSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxXQUFBO0FERVI7QUNBSTtFQUNJLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxrQkFBQTtFQUNBLDJCQUFBO0VBQ0EsNEJBQUE7RUFDQSxzQkFBQTtBREVSO0FDQUk7RUFDSSw0QkFBQTtFQUNBLDJCQUFBO0VBQ0EsaUJBQUE7QURFUjtBQ0FJO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLDJCQUFBO0VBQ0EsNEJBQUE7RUFDQSxzQkFBQTtBREVSO0FDQUk7RUFDSSxvQkFBQTtFQUNBLGdCQUFBO0VBQ0EsZ0JBQUE7QURFUjtBQ0FJO0VBQ0ksZ0JBQUE7RUFDQSxlQUFBO0FERVI7QUNEUTtFQUNJLDZCQUFBO0VBQ0EsZUFBQTtBREdaO0FDRFE7RUFDSSxpQkFBQTtBREdaO0FDRFE7RUFDSSxpQkFBQTtFQUNBLGVBQUE7QURHWiIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL25ldy1wcm9kdWN0L25ldy1wcm9kdWN0LnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBjaGFyc2V0IFwiVVRGLThcIjtcbi8qXG4gIEF1dGhvcnMgOiBpbml0YXBweiAoUmFodWwgSm9ncmFuYSlcbiAgV2Vic2l0ZSA6IGh0dHBzOi8vaW5pdGFwcHouY29tL1xuICBBcHAgTmFtZSA6IGlvbmljIDUgZ3JvY2VyeWVlIGFwcFxuICBDcmVhdGVkIDogMTAtU2VwLTIwMjBcbiAgVGhpcyBBcHAgVGVtcGxhdGUgU291cmNlIGNvZGUgaXMgbGljZW5zZWQgYXMgcGVyIHRoZVxuICB0ZXJtcyBmb3VuZCBpbiB0aGUgV2Vic2l0ZSBodHRwczovL2luaXRhcHB6LmNvbS9saWNlbnNlXG4gIENvcHlyaWdodCBhbmQgR29vZCBGYWl0aCBQdXJjaGFzZXJzIMKpIDIwMjAtcHJlc2VudCBpbml0YXBwei5cbiovXG5pb24taXRlbSB7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGxpZ2h0Z3JheTtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuXG4uZGVsZXRlX2ljbiB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbn1cblxuLm1haW5Db250ZW50IC5jb3ZlclBsYWNlaG9sZGVyIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBwYWRkaW5nOiA2MHB4O1xuICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyYXk7XG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG4ubWFpbkNvbnRlbnQgLmdhbGxlcnlQbGFjZWhvbGRlciB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgcGFkZGluZzogMTBweDtcbiAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRncmF5O1xuICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuLm1haW5Db250ZW50IC50aXRsZSB7XG4gIGZvbnQtc2l6ZTogMTRweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiBibGFjaztcbn1cbi5tYWluQ29udGVudCAubmFtZSB7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGNvbG9yOiBncmV5O1xufVxuLm1haW5Db250ZW50IC5jb3ZlclJlYWwge1xuICBtYXJnaW4tdG9wOiAxMHB4O1xuICB3aWR0aDogMTAwJTtcbiAgaGVpZ2h0OiAxNTBweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG59XG4ubWFpbkNvbnRlbnQgLmxibCB7XG4gIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyayk7XG4gIG1hcmdpbjogMTBweCAwcHggIWltcG9ydGFudDtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG4ubWFpbkNvbnRlbnQgLmdhbGxlcnlSZWFsIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogOTBweDtcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG59XG4ubWFpbkNvbnRlbnQgaW9uLWJ1dHRvbiB7XG4gIC0tYm9yZGVyLXJhZGl1czogNXB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBtYXJnaW4tdG9wOiAyMHB4O1xufVxuLm1haW5Db250ZW50IC5wcmljZV9sYmwge1xuICBmb250LXdlaWdodDogNDAwO1xuICBmb250LXNpemU6IDExcHg7XG59XG4ubWFpbkNvbnRlbnQgLnByaWNlX2xibCAub3JpZ2luYWwge1xuICB0ZXh0LWRlY29yYXRpb246IGxpbmUtdGhyb3VnaDtcbiAgZm9udC1zaXplOiAxMXB4O1xufVxuLm1haW5Db250ZW50IC5wcmljZV9sYmwgLnNlbGwge1xuICBmb250LXdlaWdodDogYm9sZDtcbn1cbi5tYWluQ29udGVudCAucHJpY2VfbGJsIC5kaWNvdW50IHtcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gIGZvbnQtc2l6ZTogMTFweDtcbn0iLCIvKlxuICBBdXRob3JzIDogaW5pdGFwcHogKFJhaHVsIEpvZ3JhbmEpXG4gIFdlYnNpdGUgOiBodHRwczovL2luaXRhcHB6LmNvbS9cbiAgQXBwIE5hbWUgOiBpb25pYyA1IGdyb2NlcnllZSBhcHBcbiAgQ3JlYXRlZCA6IDEwLVNlcC0yMDIwXG4gIFRoaXMgQXBwIFRlbXBsYXRlIFNvdXJjZSBjb2RlIGlzIGxpY2Vuc2VkIGFzIHBlciB0aGVcbiAgdGVybXMgZm91bmQgaW4gdGhlIFdlYnNpdGUgaHR0cHM6Ly9pbml0YXBwei5jb20vbGljZW5zZVxuICBDb3B5cmlnaHQgYW5kIEdvb2QgRmFpdGggUHVyY2hhc2VycyDCqSAyMDIwLXByZXNlbnQgaW5pdGFwcHouXG4qL1xuaW9uLWl0ZW17XG4gICAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRncmF5O1xuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xufVxuLmRlbGV0ZV9pY257XG4gICAgY29sb3I6IHdoaXRlO1xuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG59XG5cbi5tYWluQ29udGVudHtcbiAgICAuY292ZXJQbGFjZWhvbGRlcntcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICBwYWRkaW5nOiA2MHB4O1xuICAgICAgICBib3JkZXI6IDFweCBzb2xpZCBsaWdodGdyYXk7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XG4gICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgfVxuICAgIC5nYWxsZXJ5UGxhY2Vob2xkZXJ7XG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgcGFkZGluZzogMTBweDtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgbGlnaHRncmF5O1xuICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgIH1cbiAgICAudGl0bGV7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgIGNvbG9yOiBibGFjaztcbiAgICB9XG4gICAgLm5hbWV7XG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgIGNvbG9yOiBncmV5O1xuICAgIH1cbiAgICAuY292ZXJSZWFse1xuICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgaGVpZ2h0OiAxNTBweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgfVxuICAgIC5sYmx7XG4gICAgICAgIGNvbG9yOiB2YXIoLS1pb24tY29sb3ItZGFyayk7XG4gICAgICAgIG1hcmdpbjogMTBweCAwcHggIWltcG9ydGFudDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgfVxuICAgIC5nYWxsZXJ5UmVhbHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIGhlaWdodDogOTBweDtcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gICAgICAgIGJhY2tncm91bmQtcmVwZWF0OiBuby1yZXBlYXQ7XG4gICAgICAgIGJhY2tncm91bmQtc2l6ZTogY292ZXI7XG4gICAgfVxuICAgIGlvbi1idXR0b257XG4gICAgICAgIC0tYm9yZGVyLXJhZGl1czogNXB4O1xuICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgIH1cbiAgICAucHJpY2VfbGJse1xuICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICBmb250LXNpemU6IDExcHg7XG4gICAgICAgIC5vcmlnaW5hbHtcbiAgICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoO1xuICAgICAgICAgICAgZm9udC1zaXplOiAxMXB4O1xuICAgICAgICB9XG4gICAgICAgIC5zZWxse1xuICAgICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgIH1cbiAgICAgICAgLmRpY291bnR7XG4gICAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTFweDtcbiAgICAgICAgfVxuICAgIH1cbn1cbiJdfQ== */");

/***/ }),

/***/ "./src/app/pages/new-product/new-product.page.ts":
/*!*******************************************************!*\
  !*** ./src/app/pages/new-product/new-product.page.ts ***!
  \*******************************************************/
/*! exports provided: NewProductPage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NewProductPage", function() { return NewProductPage; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _ionic_angular__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ionic/angular */ "./node_modules/@ionic/angular/__ivy_ngcc__/fesm2015/ionic-angular.js");
/* harmony import */ var _category_category_page__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../category/category.page */ "./src/app/pages/category/category.page.ts");
/* harmony import */ var _sub_category_sub_category_page__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../sub-category/sub-category.page */ "./src/app/pages/sub-category/sub-category.page.ts");
/* harmony import */ var src_app_services_util_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/util.service */ "./src/app/services/util.service.ts");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var src_app_services_api_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/api.service */ "./src/app/services/api.service.ts");
/* harmony import */ var _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @ionic-native/camera/ngx */ "./node_modules/@ionic-native/camera/__ivy_ngcc__/ngx/index.js");
/* harmony import */ var _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @ionic-native/file-transfer/ngx */ "./node_modules/@ionic-native/file-transfer/__ivy_ngcc__/ngx/index.js");

/*
  Authors : initappz (Rahul Jograna)
  Website : https://initappz.com/
  App Name : ionic 5 groceryee app
  Created : 10-Sep-2020
  This App Template Source code is licensed as per the
  terms found in the Website https://initappz.com/license
  Copyright and Good Faith Purchasers © 2020-present initappz.
*/










let NewProductPage = class NewProductPage {
    constructor(route, navCtrl, modalCtrl, util, api, camera, fileTransfer, actionSheetCtrl, alertController) {
        this.route = route;
        this.navCtrl = navCtrl;
        this.modalCtrl = modalCtrl;
        this.util = util;
        this.api = api;
        this.camera = camera;
        this.fileTransfer = fileTransfer;
        this.actionSheetCtrl = actionSheetCtrl;
        this.alertController = alertController;
        this.cateId = '';
        this.cateName = '';
        this.subId = '';
        this.subName = '';
        this.name = '';
        this.realPrice = 0;
        this.sellPrice = 0;
        this.discount = 0;
        this.status = '1';
        this.coverImage = '';
        this.veg = true;
        this.have_gram = false;
        this.gram = '0';
        this.have_kg = false;
        this.kg = '0';
        this.have_pcs = false;
        this.pcs = '0';
        this.have_liter = false;
        this.liter = '0';
        this.have_ml = false;
        this.ml = '0';
        this.in_stoke = '1';
        this.in_offer = false;
        this.key_features = '';
        this.disclaimer = '';
        this.variations = [];
        this.size = false;
        this.route.queryParams.subscribe((data) => {
            console.log('=>', data);
            if (data && data.id) {
                this.isNew = false;
                this.id = data.id;
                this.getProduct();
            }
            else {
                this.isNew = true;
            }
            console.log(this.isNew);
        });
    }
    back() {
        this.navCtrl.back();
    }
    getProduct() {
        this.util.show();
        const param = {
            id: this.id
        };
        this.api.post('products/getById', param).subscribe((data) => {
            console.log(data);
            this.util.hide();
            if (data && data.status === 200 && data.data.length) {
                const info = data.data[0];
                console.log('product ->', info);
                this.cateId = info.cate_id;
                this.subId = info.sub_cate_id;
                this.name = info.name;
                this.description = info.descriptions;
                this.coverImage = info.cover;
                this.key_features = info.key_features;
                this.disclaimer = info.disclaimer;
                this.discount = info.discount;
                this.exp_date = info.exp_date;
                this.gram = info.gram;
                this.have_gram = info.have_gram === '1' ? true : false;
                this.kg = info.kg;
                this.have_kg = info.have_kg === '1' ? true : false;
                this.liter = info.liter;
                this.have_liter = info.have_liter === '1' ? true : false;
                this.ml = info.ml;
                this.have_ml = info.have_ml === '1' ? true : false;
                this.pcs = info.pcs;
                this.have_pcs = info.have_pcs === '1' ? true : false;
                this.in_offer = info.in_offer === '1' ? true : false;
                this.in_stoke = info.in_stoke;
                this.is_single = info.is_single === '1' ? true : false;
                this.veg = info.kind === '1' ? true : false;
                this.realPrice = parseFloat(info.original_price);
                this.sellPrice = parseFloat(info.sell_price);
                this.status = info.status;
                this.size = info && info.size && info.size === '1' ? true : false;
                if (info && info.variations && info.variations !== '') {
                    if (((x) => { try {
                        JSON.parse(x);
                        return true;
                    }
                    catch (e) {
                        return false;
                    } })(info.variations)) {
                        this.variations = JSON.parse(info.variations);
                    }
                }
                if (info.images) {
                    const images = JSON.parse(info.images);
                    console.log('images======>>>', images);
                    if (images[0]) {
                        this.image1 = images[0];
                    }
                    if (images[1]) {
                        this.image2 = images[1];
                    }
                    if (images[2]) {
                        this.image3 = images[2];
                    }
                    if (images[3]) {
                        this.image4 = images[3];
                    }
                    if (images[4]) {
                        this.image5 = images[4];
                    }
                    if (images[5]) {
                        this.image6 = images[5];
                    }
                }
                this.api.get('categories').subscribe((cates) => {
                    console.log(cates);
                    if (cates && cates.status === 200 && cates.data && cates.data.length) {
                        console.log(cates.data);
                        const name = cates.data.filter(x => x.id === this.cateId);
                        console.log('cate name=-=====>>>', name);
                        this.cateName = name[0].name;
                    }
                    else {
                        this.util.errorToast(this.util.getString('No category found'));
                    }
                }, error => {
                    this.util.errorToast(this.util.getString('Something went wrong'));
                    console.log(error);
                });
                const subCate = {
                    id: info.cate_id
                };
                this.api.post('subcate/getByCId', subCate).subscribe((sub) => {
                    console.log(sub);
                    if (sub && sub.status === 200 && sub.data && sub.data.length) {
                        // this.category = sub.data;
                        console.log(sub);
                        const name = sub.data.filter(x => x.id === this.subId);
                        console.log('cate name=-=====>>>', name);
                        this.subName = name[0].name;
                    }
                    else {
                        this.util.errorToast(this.util.getString('No category found'));
                    }
                }, error => {
                    this.util.errorToast(this.util.getString('Something went wrong'));
                });
            }
        }, error => {
            this.util.hide();
            this.util.errorToast(this.util.getString('Something went wrong'));
            console.log(error);
        });
    }
    ngOnInit() {
    }
    openCate() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const modal = yield this.modalCtrl.create({
                component: _category_category_page__WEBPACK_IMPORTED_MODULE_4__["CategoryPage"],
                componentProps: {
                    id: this.cateId
                }
            });
            modal.present();
            modal.onDidDismiss().then((data) => {
                console.log(data);
                if (data && data.data && data.role === 'selected') {
                    this.cateId = data.data.id;
                    this.cateName = data.data.name;
                }
            });
        });
    }
    openSub() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            if (this.cateId && this.cateName) {
                const modal = yield this.modalCtrl.create({
                    component: _sub_category_sub_category_page__WEBPACK_IMPORTED_MODULE_5__["SubCategoryPage"],
                    componentProps: {
                        cateId: this.cateId,
                        subId: this.subId
                    }
                });
                modal.present();
                modal.onDidDismiss().then((data) => {
                    console.log(data);
                    if (data && data.data && data.role === 'selected') {
                        this.subId = data.data.id;
                        this.subName = data.data.name;
                    }
                });
            }
            else {
                this.util.errorToast(this.util.getString('Please select category'));
            }
        });
    }
    onDicount(value) {
        console.log(value);
        if (this.realPrice && value <= 99) {
            this.percentage(this.discount, this.realPrice);
        }
    }
    onRealPrice(value) {
        console.log(value);
        if (this.sellPrice && value > 1) {
            this.percentage(this.discount, this.realPrice);
        }
    }
    percentage(percent, total) {
        this.sellPrice = 0;
        const price = ((percent / 100) * total);
        this.sellPrice = this.realPrice - price;
    }
    create() {
        const image = [
            this.image1 ? this.image1 : '',
            this.image2 ? this.image2 : '',
            this.image3 ? this.image3 : '',
            this.image4 ? this.image4 : '',
            this.image5 ? this.image5 : '',
            this.image6 ? this.image6 : ''
        ];
        const param = {
            store_id: localStorage.getItem('uid'),
            cover: this.coverImage,
            name: this.name,
            images: JSON.stringify(image),
            original_price: this.realPrice,
            sell_price: this.sellPrice ? this.sellPrice : 0,
            discount: this.discount ? this.discount : 0,
            kind: this.veg ? 1 : 0,
            cate_id: this.cateId,
            sub_cate_id: this.subId,
            have_gram: this.have_gram ? 1 : 0,
            gram: this.have_gram ? this.gram : 0,
            have_kg: this.have_kg ? 1 : 0,
            kg: this.have_kg ? this.kg : 0,
            have_pcs: this.have_pcs ? 1 : 0,
            pcs: this.have_pcs ? this.pcs : 0,
            have_liter: this.have_liter ? 1 : 0,
            liter: this.have_liter ? this.liter : 0,
            have_ml: this.have_ml ? 1 : 0,
            ml: this.have_ml ? this.ml : 0,
            descriptions: this.description,
            exp_date: moment__WEBPACK_IMPORTED_MODULE_7__(this.exp_date).format('YYYY-MM-DD'),
            type_of: 1,
            in_stoke: this.in_stoke,
            status: this.status,
            in_offer: this.in_offer ? 1 : 0,
            key_features: this.key_features,
            disclaimer: this.disclaimer,
            is_single: this.is_single,
            in_home: 0,
            rating: 0,
            total_rating: 0,
            size: this.size === true ? 1 : 0,
            variations: JSON.stringify(this.variations)
        };
        console.log('*****', param);
        this.util.show();
        this.api.post('products/save', param).subscribe((data) => {
            console.log(data);
            this.util.hide();
            if (data && data.status === 200) {
                this.util.showToast(this.util.getString('Product added successfully'), 'success', 'bottom');
                this.navCtrl.back();
            }
            else {
                this.util.errorToast(this.util.getString('Something went wrong'));
            }
        }, error => {
            this.util.hide();
            this.util.errorToast(this.util.getString('Something went wrong'));
            console.log('error', error);
        });
    }
    submit() {
        console.log('size-->>', this.size);
        console.log('submited', this.veg);
        if (!this.cateId || this.cateId === '') {
            this.util.errorToast(this.util.getString('Please select category'));
            return false;
        }
        if (!this.subId || this.subId === '') {
            this.util.errorToast(this.util.getString('Please select sub category'));
            return false;
        }
        if (!this.realPrice || this.realPrice === '') {
            this.util.errorToast(this.util.getString('Please enter product price'));
            return false;
        }
        if (!this.description || this.description === '') {
            this.util.errorToast(this.util.getString('Please enter product description'));
            return false;
        }
        if (!this.name || this.name === '') {
            this.util.errorToast(this.util.getString('Please enter product name'));
            return false;
        }
        if (!this.coverImage || this.coverImage === '') {
            this.util.errorToast(this.util.getString('Please add product image'));
            return false;
        }
        if (!this.exp_date || this.exp_date === '') {
            this.util.errorToast(this.util.getString('Please product expire date'));
            return false;
        }
        if (this.isNew) {
            console.log('new');
            this.create();
        }
        else {
            console.log('update');
            this.update();
        }
    }
    update() {
        const image = [
            this.image1 ? this.image1 : '',
            this.image2 ? this.image2 : '',
            this.image3 ? this.image3 : '',
            this.image4 ? this.image4 : '',
            this.image5 ? this.image5 : '',
            this.image6 ? this.image6 : ''
        ];
        const param = {
            id: this.id,
            store_id: localStorage.getItem('uid'),
            cover: this.coverImage,
            name: this.name,
            images: JSON.stringify(image),
            original_price: this.realPrice,
            sell_price: this.sellPrice ? this.sellPrice : 0,
            discount: this.discount ? this.discount : 0,
            kind: this.veg ? 1 : 0,
            cate_id: this.cateId,
            sub_cate_id: this.subId,
            have_gram: this.have_gram ? 1 : 0,
            gram: this.have_gram ? this.gram : 0,
            have_kg: this.have_kg ? 1 : 0,
            kg: this.have_kg ? this.kg : 0,
            have_pcs: this.have_pcs ? 1 : 0,
            pcs: this.have_pcs ? this.pcs : 0,
            have_liter: this.have_liter ? 1 : 0,
            liter: this.have_liter ? this.liter : 0,
            have_ml: this.have_ml ? 1 : 0,
            ml: this.have_ml ? this.ml : 0,
            descriptions: this.description,
            exp_date: moment__WEBPACK_IMPORTED_MODULE_7__(this.exp_date).format('YYYY-MM-DD'),
            type_of: 1,
            in_stoke: this.in_stoke,
            status: this.status,
            in_offer: this.in_offer ? 1 : 0,
            key_features: this.key_features,
            disclaimer: this.disclaimer,
            is_single: this.is_single,
            size: this.size === true ? 1 : 0,
            variations: JSON.stringify(this.variations)
        };
        console.log('*****', param);
        this.util.show();
        this.api.post('products/editList', param).subscribe((data) => {
            console.log(data);
            this.util.hide();
            if (data && data.status === 200) {
                this.util.showToast(this.util.getString('Product updated successfully'), 'success', 'bottom');
                this.navCtrl.back();
            }
            else {
                this.util.errorToast(this.util.getString('Something went wrong'));
            }
        }, error => {
            this.util.hide();
            this.util.errorToast(this.util.getString('Something went wrong'));
            console.log('error', error);
        });
    }
    minStartDate() {
        return moment__WEBPACK_IMPORTED_MODULE_7__().format('YYYY-MM-DD');
    }
    getMaxDate() {
        return moment__WEBPACK_IMPORTED_MODULE_7__().add('5', 'years').format('YYYY-MM-DD');
    }
    minEndDate() {
        return moment__WEBPACK_IMPORTED_MODULE_7__().add(1, 'day').format('YYYY-MM-DD');
    }
    cover() {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const actionSheet = yield this.actionSheetCtrl.create({
                mode: 'md',
                buttons: [{
                        text: this.util.getString('Camera'),
                        role: 'camera',
                        icon: 'camera',
                        handler: () => {
                            console.log('Camera clicked');
                            this.upload('camera');
                        }
                    },
                    {
                        text: this.util.getString('Gallery'),
                        role: 'gallery',
                        icon: 'image',
                        handler: () => {
                            console.log('Gallery clicked');
                            this.upload('gallery');
                        }
                    }, {
                        text: this.util.getString('Cancel'),
                        role: 'cancel',
                        icon: 'close',
                        handler: () => {
                            console.log('Cancel clicked');
                        }
                    }]
            });
            yield actionSheet.present();
        });
    }
    upload(type) {
        try {
            const options = {
                quality: 100,
                targetHeight: 800,
                targetWidth: 800,
                destinationType: this.camera.DestinationType.DATA_URL,
                encodingType: this.camera.EncodingType.JPEG,
                mediaType: this.camera.MediaType.PICTURE,
                correctOrientation: true,
                sourceType: type === 'camera' ? this.camera.PictureSourceType.CAMERA : this.camera.PictureSourceType.PHOTOLIBRARY
            };
            this.camera.getPicture(options).then((url) => {
                console.log('url->', url);
                this.util.show();
                const alpha = {
                    img: url,
                    type: 'jpg'
                };
                console.log('parma==>', alpha);
                this.api.nativePost('users/upload_file', alpha).then((data) => {
                    this.util.hide();
                    console.log('data', JSON.parse(data.data));
                    const info = JSON.parse(data.data);
                    this.coverImage = info.data;
                    console.log('cover image', this.coverImage);
                }, error => {
                    console.log(error);
                    this.util.hide();
                    this.util.errorToast(this.util.getString('Something went wrong'));
                }).catch(error => {
                    console.log(error);
                    this.util.hide();
                    this.util.errorToast(this.util.getString('Something went wrong'));
                });
            });
        }
        catch (error) {
            console.log('error', error);
        }
    }
    uploadExtra(type, num) {
        try {
            const options = {
                quality: 100,
                targetHeight: 800,
                targetWidth: 800,
                destinationType: this.camera.DestinationType.DATA_URL,
                encodingType: this.camera.EncodingType.JPEG,
                mediaType: this.camera.MediaType.PICTURE,
                correctOrientation: true,
                sourceType: type === 'camera' ? this.camera.PictureSourceType.CAMERA : this.camera.PictureSourceType.PHOTOLIBRARY
            };
            this.camera.getPicture(options).then((url) => {
                console.log('url->', url);
                this.util.show();
                const alpha = {
                    img: url,
                    type: 'jpg'
                };
                console.log('parma==>', alpha);
                this.api.nativePost('users/upload_file', alpha).then((data) => {
                    this.util.hide();
                    console.log('data', JSON.parse(data.data));
                    const info = JSON.parse(data.data);
                    // this.coverImage = info.data;
                    // console.log('cover image', this.coverImage);
                    if (num === 1 || num === '1') {
                        this.image1 = info.data;
                    }
                    if (num === 2 || num === '2') {
                        this.image2 = info.data;
                    }
                    if (num === 3 || num === '3') {
                        this.image3 = info.data;
                    }
                    if (num === 4 || num === '4') {
                        this.image4 = info.data;
                    }
                    if (num === 5 || num === '5') {
                        this.image5 = info.data;
                    }
                    if (num === 6 || num === '6') {
                        this.image6 = info.data;
                    }
                }, error => {
                    console.log(error);
                    this.util.hide();
                    this.util.errorToast(this.util.getString('Something went wrong'));
                }).catch(error => {
                    console.log(error);
                    this.util.hide();
                    this.util.errorToast(this.util.getString('Something went wrong'));
                });
            });
        }
        catch (error) {
            console.log('error', error);
        }
    }
    others(num) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            console.log('num', num);
            const actionSheet = yield this.actionSheetCtrl.create({
                mode: 'md',
                buttons: [{
                        text: this.util.getString('Camera'),
                        role: 'camera',
                        icon: 'camera',
                        handler: () => {
                            console.log('Camera clicked');
                            this.uploadExtra('camera', num);
                        }
                    },
                    {
                        text: this.util.getString('Gallery'),
                        role: 'gallery',
                        icon: 'image',
                        handler: () => {
                            console.log('Gallery clicked');
                            this.uploadExtra('gallery', num);
                        }
                    }, {
                        text: this.util.getString('Cancel'),
                        role: 'cancel',
                        icon: 'close',
                        handler: () => {
                            console.log('Cancel clicked');
                        }
                    }]
            });
            yield actionSheet.present();
        });
    }
    changeSize(event) {
        console.log(event);
        if (event && event.detail && event.detail.checked) {
            const items = this.variations.filter(x => x.title === 'size');
            console.log('length', items);
            if (!items.length) {
                const item = {
                    title: 'size',
                    type: 'radio',
                    items: []
                };
                this.variations.push(item);
                console.log(this.variations);
            }
        }
        else {
            this.variations = this.variations.filter(x => x.title !== 'size');
        }
    }
    editTitle(index) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            const alert = yield this.alertController.create({
                header: 'Edit title!',
                inputs: [
                    {
                        name: 'name',
                        type: 'text',
                        placeholder: 'Title',
                        value: this.variations[index].title
                    },
                ],
                buttons: [
                    {
                        text: 'Cancel',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: () => {
                            console.log('Confirm Cancel');
                        }
                    }, {
                        text: 'Ok',
                        handler: (data) => {
                            console.log('Confirm Ok');
                            if (data && data.name) {
                                this.variations[index].title = data.name;
                            }
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    addItem(index) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            console.log(this.variations[index]);
            const alert = yield this.alertController.create({
                header: 'Add item to ' + this.variations[index].title,
                inputs: [
                    {
                        name: 'title',
                        type: 'text',
                        placeholder: 'Add-ons name'
                    },
                    {
                        name: 'price',
                        type: 'number',
                        placeholder: 'Add-ons price'
                    },
                    {
                        name: 'discount',
                        type: 'number',
                        placeholder: 'Add-ons discount'
                    },
                ],
                buttons: [
                    {
                        text: 'Cancel',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: () => {
                            console.log('Confirm Cancel');
                        }
                    }, {
                        text: 'Ok',
                        handler: (data) => {
                            console.log('Confirm Ok');
                            if (data && data.title && data.price) {
                                const item = {
                                    title: data.title,
                                    price: parseFloat(data.price),
                                    discount: data && data.discount ? parseFloat(data.discount) : 0
                                };
                                this.variations[index].items.push(item);
                                console.log(this.variations);
                            }
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
    delete(item) {
        console.log(item);
        if (item.title === 'size') {
            this.size = false;
        }
        this.variations = this.variations.filter(x => x.title !== item.title);
    }
    deleteSub(index, item) {
        console.log(index);
        console.log(item);
        const selected = this.variations[index].items;
        console.log('selected', selected);
        const data = selected.filter(x => x.title !== item.title);
        console.log(data);
        this.variations[index].items = data;
        console.log('done', this.variations);
    }
    editSub(index, items, subIndex) {
        return Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"])(this, void 0, void 0, function* () {
            console.log(index, items, subIndex);
            console.log(this.variations);
            console.log('update ir', this.variations[index].items[subIndex].discount);
            const alert = yield this.alertController.create({
                header: 'Edit item ' + this.variations[index].title,
                inputs: [
                    {
                        name: 'title',
                        type: 'text',
                        placeholder: 'Variation name',
                        value: this.variations[index].items[subIndex].title
                    },
                    {
                        name: 'price',
                        type: 'number',
                        placeholder: 'Variation price',
                        value: this.variations[index].items[subIndex].price
                    },
                    {
                        name: 'discount',
                        type: 'number',
                        placeholder: 'Variation discount',
                        value: this.variations[index].items[subIndex].discount
                    },
                ],
                buttons: [
                    {
                        text: 'Cancel',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: () => {
                            console.log('Confirm Cancel');
                        }
                    }, {
                        text: 'Ok',
                        handler: (data) => {
                            console.log('data', data);
                            console.log('Confirm Ok', this.variations[index].items[subIndex].discount);
                            this.variations[index].items[subIndex].title = data.title;
                            this.variations[index].items[subIndex].price = parseFloat(data.price);
                            this.variations[index].items[subIndex].discount = data && data.discount ? parseFloat(data.discount) : 0;
                            console.log(this.variations);
                        }
                    }
                ]
            });
            yield alert.present();
        });
    }
};
NewProductPage.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["NavController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ModalController"] },
    { type: src_app_services_util_service__WEBPACK_IMPORTED_MODULE_6__["UtilService"] },
    { type: src_app_services_api_service__WEBPACK_IMPORTED_MODULE_8__["ApiService"] },
    { type: _ionic_native_camera_ngx__WEBPACK_IMPORTED_MODULE_9__["Camera"] },
    { type: _ionic_native_file_transfer_ngx__WEBPACK_IMPORTED_MODULE_10__["FileTransferObject"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["ActionSheetController"] },
    { type: _ionic_angular__WEBPACK_IMPORTED_MODULE_3__["AlertController"] }
];
NewProductPage = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-new-product',
        template: Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! raw-loader!./new-product.page.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/pages/new-product/new-product.page.html")).default,
        styles: [Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"])(__webpack_require__(/*! ./new-product.page.scss */ "./src/app/pages/new-product/new-product.page.scss")).default]
    })
], NewProductPage);



/***/ })

}]);
//# sourceMappingURL=new-product-new-product-module-es2015.js.map