function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[4], {
  /***/
  "./node_modules/ng2-ckeditor/fesm2015/ng2-ckeditor.js":
  /*!************************************************************!*\
    !*** ./node_modules/ng2-ckeditor/fesm2015/ng2-ckeditor.js ***!
    \************************************************************/

  /*! exports provided: CKEditorModule, ɵa, ɵb, ɵc */

  /***/
  function node_modulesNg2CkeditorFesm2015Ng2CkeditorJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CKEditorModule", function () {
      return CKEditorModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵa", function () {
      return CKEditorComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵb", function () {
      return CKButtonDirective;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵc", function () {
      return CKGroupDirective;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /**
     * CKGroup component
     * Usage :
     *  <ckeditor [(ngModel)]="data" [config]="{...}" debounce="500">
     *      <ckbutton [name]="'SaveButton'" [command]="'saveCommand'" (click)="save($event)"
     *                [icon]="'/save.png'" [toolbar]="'customGroup,1'" [label]="'Save'">
     *      </ckbutton>
     *   </ckeditor>
     */


    var CKButtonDirective = /*#__PURE__*/function () {
      /**
       * CKGroup component
       * Usage :
       *  <ckeditor [(ngModel)]="data" [config]="{...}" debounce="500">
       *      <ckbutton [name]="'SaveButton'" [command]="'saveCommand'" (click)="save($event)"
       *                [icon]="'/save.png'" [toolbar]="'customGroup,1'" [label]="'Save'">
       *      </ckbutton>
       *   </ckeditor>
       */
      function CKButtonDirective() {
        _classCallCheck(this, CKButtonDirective);

        this.click = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      }

      _createClass(CKButtonDirective, [{
        key: "initialize",
        value: function initialize(editor) {
          var _this = this;

          editor.instance.addCommand(this.command, {
            exec: function exec(evt) {
              _this.click.emit(evt);
            }
          });
          editor.instance.ui.addButton(this.name, {
            label: this.label,
            command: this.command,
            toolbar: this.toolbar,
            icon: this.icon
          });
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          if (!this.name) throw new Error('Attribute "name" is required on <ckbutton>');
          if (!this.command) throw new Error('Attribute "command" is required on <ckbutton>');
        }
      }]);

      return CKButtonDirective;
    }();

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], CKButtonDirective.prototype, "click", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], CKButtonDirective.prototype, "label", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], CKButtonDirective.prototype, "command", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], CKButtonDirective.prototype, "toolbar", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], CKButtonDirective.prototype, "name", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], CKButtonDirective.prototype, "icon", void 0);
    CKButtonDirective = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
      selector: 'ckbutton'
    })], CKButtonDirective);
    /**
     * CKGroup component
     * Usage :
     *  <ckeditor [(ngModel)]="data" [config]="{...}" debounce="500">
     *      <ckgroup [name]="'exampleGroup2'" [previous]="'1'" [subgroupOf]="'exampleGroup1'">
     *          .
     *          .
     *      </ckgroup>
     *   </ckeditor>
     */

    var CKGroupDirective = /*#__PURE__*/function () {
      function CKGroupDirective() {
        _classCallCheck(this, CKGroupDirective);
      }

      _createClass(CKGroupDirective, [{
        key: "ngAfterContentInit",
        value: function ngAfterContentInit() {
          var _this2 = this;

          // Reconfigure each button's toolbar property within ckgroup to hold its parent's name
          this.toolbarButtons.forEach(function (button) {
            return button.toolbar = _this2.name;
          });
        }
      }, {
        key: "initialize",
        value: function initialize(editor) {
          editor.instance.ui.addToolbarGroup(this.name, this.previous, this.subgroupOf); // Initialize each button within ckgroup

          this.toolbarButtons.forEach(function (button) {
            button.initialize(editor);
          });
        }
      }]);

      return CKGroupDirective;
    }();

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], CKGroupDirective.prototype, "name", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], CKGroupDirective.prototype, "previous", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], CKGroupDirective.prototype, "subgroupOf", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChildren"])(CKButtonDirective), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["QueryList"])], CKGroupDirective.prototype, "toolbarButtons", void 0);
    CKGroupDirective = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
      selector: 'ckgroup'
    })], CKGroupDirective);
    var CKEditorComponent_1;
    /**
     * CKEditor component
     * Usage :
     *  <ckeditor [(ngModel)]="data" [config]="{...}" debounce="500"></ckeditor>
     */

    var CKEditorComponent = CKEditorComponent_1 = /*#__PURE__*/function () {
      /**
       * Constructor
       */
      function CKEditorComponent(zone) {
        _classCallCheck(this, CKEditorComponent);

        this.zone = zone;
        this.change = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.editorChange = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.ready = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.blur = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.focus = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.contentDom = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.fileUploadRequest = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.fileUploadResponse = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.paste = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.drop = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this._value = '';
      }

      _createClass(CKEditorComponent, [{
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {
          if (changes.readonly && this.instance) {
            this.instance.setReadOnly(changes.readonly.currentValue);
          }
        }
        /**
         * On component destroy
         */

      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          if (this.instance) {
            this.instance.removeAllListeners();
            CKEDITOR.instances[this.instance.name].destroy();
            this.instance.destroy();
            this.instance = null;
          }
        }
        /**
         * On component view init
         */

      }, {
        key: "ngAfterViewInit",
        value: function ngAfterViewInit() {
          this.ckeditorInit(this.config || {});
        }
        /**
         * On component view checked
         */

      }, {
        key: "ngAfterViewChecked",
        value: function ngAfterViewChecked() {
          this.ckeditorInit(this.config || {});
        }
        /**
         * Value update process
         */

      }, {
        key: "updateValue",
        value: function updateValue(value) {
          var _this3 = this;

          this.zone.run(function () {
            _this3.value = value;

            _this3.onChange(value);

            _this3.onTouched();

            _this3.change.emit(value);
          });
        }
        /**
         * CKEditor init
         */

      }, {
        key: "ckeditorInit",
        value: function ckeditorInit(config) {
          var _this4 = this;

          if (typeof CKEDITOR === 'undefined') {
            console.warn('CKEditor 4.x is missing (http://ckeditor.com/)');
          } else {
            // Check textarea exists
            if (this.instance || !this.documentContains(this.host.nativeElement)) {
              return;
            }

            if (this.readonly) {
              config.readOnly = this.readonly;
            } // CKEditor replace textarea


            this.instance = CKEDITOR.replace(this.host.nativeElement, config); // Set initial value

            this.instance.setData(this.value); // listen for instanceReady event

            this.instance.on('instanceReady', function (evt) {
              // if value has changed while instance loading
              // update instance with current component value
              if (_this4.instance.getData() !== _this4.value) {
                _this4.instance.setData(_this4.value);
              } // send the evt to the EventEmitter


              _this4.ready.emit(evt);
            }); // CKEditor change event

            this.instance.on('change', function (evt) {
              _this4.onTouched();

              var value = _this4.instance.getData();

              if (_this4.value !== value) {
                // Debounce update
                if (_this4.debounce) {
                  if (_this4.debounceTimeout) clearTimeout(_this4.debounceTimeout);
                  _this4.debounceTimeout = setTimeout(function () {
                    _this4.updateValue(value);

                    _this4.debounceTimeout = null;
                  }, parseInt(_this4.debounce)); // Live update
                } else {
                  _this4.updateValue(value);
                }
              } // Original ckeditor event dispatch


              _this4.editorChange.emit(evt);
            }); // CKEditor blur event

            this.instance.on('blur', function (evt) {
              _this4.blur.emit(evt);
            }); // CKEditor focus event

            this.instance.on('focus', function (evt) {
              _this4.focus.emit(evt);
            }); // CKEditor contentDom event

            this.instance.on('contentDom', function (evt) {
              _this4.contentDom.emit(evt);
            }); // CKEditor fileUploadRequest event

            this.instance.on('fileUploadRequest', function (evt) {
              _this4.fileUploadRequest.emit(evt);
            }); // CKEditor fileUploadResponse event

            this.instance.on('fileUploadResponse', function (evt) {
              _this4.fileUploadResponse.emit(evt);
            }); // CKEditor paste event

            this.instance.on('paste', function (evt) {
              _this4.paste.emit(evt);
            }); // CKEditor drop event

            this.instance.on('drop', function (evt) {
              _this4.drop.emit(evt);
            }); // Add Toolbar Groups to Editor. This will also add Buttons within groups.

            this.toolbarGroups.forEach(function (group) {
              group.initialize(_this4);
            }); // Add Toolbar Buttons to Editor.

            this.toolbarButtons.forEach(function (button) {
              button.initialize(_this4);
            });
          }
        }
        /**
         * Implements ControlValueAccessor
         */

      }, {
        key: "writeValue",
        value: function writeValue(value) {
          this._value = value;
          if (this.instance) this.instance.setData(value);
        }
      }, {
        key: "onChange",
        value: function onChange(_) {}
      }, {
        key: "onTouched",
        value: function onTouched() {}
      }, {
        key: "registerOnChange",
        value: function registerOnChange(fn) {
          this.onChange = fn;
        }
      }, {
        key: "registerOnTouched",
        value: function registerOnTouched(fn) {
          this.onTouched = fn;
        }
      }, {
        key: "documentContains",
        value: function documentContains(node) {
          return document.contains ? document.contains(node) : document.body.contains(node);
        }
      }, {
        key: "value",
        get: function get() {
          return this._value;
        },
        set: function set(v) {
          if (v !== this._value) {
            this._value = v;
            this.onChange(v);
          }
        }
      }]);

      return CKEditorComponent;
    }();

    CKEditorComponent.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]
      }];
    };

    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], CKEditorComponent.prototype, "config", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Boolean)], CKEditorComponent.prototype, "readonly", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", String)], CKEditorComponent.prototype, "debounce", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], CKEditorComponent.prototype, "change", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], CKEditorComponent.prototype, "editorChange", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], CKEditorComponent.prototype, "ready", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], CKEditorComponent.prototype, "blur", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], CKEditorComponent.prototype, "focus", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], CKEditorComponent.prototype, "contentDom", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], CKEditorComponent.prototype, "fileUploadRequest", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], CKEditorComponent.prototype, "fileUploadResponse", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], CKEditorComponent.prototype, "paste", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Output"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], CKEditorComponent.prototype, "drop", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ViewChild"])('host', {
      "static": false
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object)], CKEditorComponent.prototype, "host", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChildren"])(CKButtonDirective), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["QueryList"])], CKEditorComponent.prototype, "toolbarButtons", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ContentChildren"])(CKGroupDirective), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_1__["QueryList"])], CKEditorComponent.prototype, "toolbarGroups", void 0);
    Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])(), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:type", Object), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [Object])], CKEditorComponent.prototype, "value", null);
    CKEditorComponent = CKEditorComponent_1 = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'ckeditor',
      providers: [{
        provide: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALUE_ACCESSOR"],
        useExisting: Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["forwardRef"])(function () {
          return CKEditorComponent_1;
        }),
        multi: true
      }],
      template: "\n    <textarea #host></textarea>\n  "
    }), Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"])("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgZone"]])], CKEditorComponent);
    /**
     * CKEditorModule
     */

    var CKEditorModule = function CKEditorModule() {
      _classCallCheck(this, CKEditorModule);
    };

    CKEditorModule = Object(tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"])([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]],
      declarations: [CKEditorComponent, CKButtonDirective, CKGroupDirective],
      exports: [CKEditorComponent, CKButtonDirective, CKGroupDirective]
    })], CKEditorModule);
    /**
     * Generated bundle index. Do not edit.
     */
    //# sourceMappingURL=ng2-ckeditor.js.map

    /***/
  },

  /***/
  "./node_modules/ng2-ckeditor/ng2-ckeditor.ngfactory.js":
  /*!*************************************************************!*\
    !*** ./node_modules/ng2-ckeditor/ng2-ckeditor.ngfactory.js ***!
    \*************************************************************/

  /*! exports provided: CKEditorModuleNgFactory, RenderType_ɵa, View_ɵa_0, View_ɵa_Host_0, ɵaNgFactory */

  /***/
  function node_modulesNg2CkeditorNg2CkeditorNgfactoryJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CKEditorModuleNgFactory", function () {
      return CKEditorModuleNgFactory;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RenderType_ɵa", function () {
      return RenderType_ɵa;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_ɵa_0", function () {
      return View_ɵa_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_ɵa_Host_0", function () {
      return View_ɵa_Host_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ɵaNgFactory", function () {
      return ɵaNgFactory;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var ng2_ckeditor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ng2-ckeditor */
    "./node_modules/ng2-ckeditor/fesm2015/ng2-ckeditor.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /**
     * @fileoverview This file was generated by the Angular template compiler. Do not edit.
     *
     * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
     * tslint:disable
     */


    var CKEditorModuleNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcmf"](ng2_ckeditor__WEBPACK_IMPORTED_MODULE_1__["CKEditorModule"], [], function (_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmod"]([_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](512, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵCodegenComponentFactoryResolver"], [[8, []], [3, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ComponentFactoryResolver"]], _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModuleRef"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](4608, _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgLocalization"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["NgLocaleLocalization"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["LOCALE_ID"], [2, _angular_common__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_common_common_a"]]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], []), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵmpd"](1073742336, ng2_ckeditor__WEBPACK_IMPORTED_MODULE_1__["CKEditorModule"], ng2_ckeditor__WEBPACK_IMPORTED_MODULE_1__["CKEditorModule"], [])]);
    });

    var styles_ɵa = [];

    var RenderType_ɵa = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcrt"]({
      encapsulation: 2,
      styles: styles_ɵa,
      data: {}
    });

    function View_ɵa_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](671088640, 1, {
        host: 0
      }), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](1, 0, [[1, 0], ["host", 1]], null, 0, "textarea", [], null, null, null, null, null))], null, null);
    }

    function View_ɵa_Host_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 4, "ckeditor", [], null, null, null, View_ɵa_0, RenderType_ɵa)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](5120, null, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["NG_VALUE_ACCESSOR"], function (p0_0) {
        return [p0_0];
      }, [ng2_ckeditor__WEBPACK_IMPORTED_MODULE_1__["ɵa"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](2, 13287424, null, 2, ng2_ckeditor__WEBPACK_IMPORTED_MODULE_1__["ɵa"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgZone"]], null, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](603979776, 1, {
        toolbarButtons: 1
      }), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵqud"](603979776, 2, {
        toolbarGroups: 1
      })], null, null);
    }

    var ɵaNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵccf"]("ckeditor", ng2_ckeditor__WEBPACK_IMPORTED_MODULE_1__["ɵa"], View_ɵa_Host_0, {
      config: "config",
      readonly: "readonly",
      debounce: "debounce",
      value: "value"
    }, {
      change: "change",
      editorChange: "editorChange",
      ready: "ready",
      blur: "blur",
      focus: "focus",
      contentDom: "contentDom",
      fileUploadRequest: "fileUploadRequest",
      fileUploadResponse: "fileUploadResponse",
      paste: "paste",
      drop: "drop"
    }, []);
    /***/

  },

  /***/
  "./node_modules/ng2-toasty/src/toast.component.ngfactory.js":
  /*!******************************************************************!*\
    !*** ./node_modules/ng2-toasty/src/toast.component.ngfactory.js ***!
    \******************************************************************/

  /*! exports provided: RenderType_ToastComponent, View_ToastComponent_0, View_ToastComponent_Host_0, ToastComponentNgFactory */

  /***/
  function node_modulesNg2ToastySrcToastComponentNgfactoryJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RenderType_ToastComponent", function () {
      return RenderType_ToastComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_ToastComponent_0", function () {
      return View_ToastComponent_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_ToastComponent_Host_0", function () {
      return View_ToastComponent_Host_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ToastComponentNgFactory", function () {
      return ToastComponentNgFactory;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _shared__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./shared */
    "./node_modules/ng2-toasty/src/shared.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _toast_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./toast.component */
    "./node_modules/ng2-toasty/src/toast.component.js");
    /**
     * @fileoverview This file was generated by the Angular template compiler. Do not edit.
     *
     * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
     * tslint:disable
     */


    var styles_ToastComponent = [];

    var RenderType_ToastComponent = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcrt"]({
      encapsulation: 2,
      styles: styles_ToastComponent,
      data: {}
    });

    function View_ToastComponent_1(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 0, "div", [["class", "close-button"]], null, [[null, "click"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("click" === en) {
          var pd_0 = _co.close($event) !== false;
          ad = pd_0 && ad;
        }

        return ad;
      }, null, null))], null, null);
    }

    function View_ToastComponent_3(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "span", [["class", "toast-title"]], [[8, "innerHTML", 1]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵppd"](1, 1)], null, function (_ck, _v) {
        var _co = _v.component;

        var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵunv"](_v, 0, 0, _ck(_v, 1, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v.parent.parent, 0), _co.toast.title));

        _ck(_v, 0, 0, currVal_0);
      });
    }

    function View_ToastComponent_4(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 0, "br", [], null, null, null, null, null))], null, null);
    }

    function View_ToastComponent_5(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "span", [["class", "toast-msg"]], [[8, "innerHTML", 1]], null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵppd"](1, 1)], null, function (_ck, _v) {
        var _co = _v.component;

        var currVal_0 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵunv"](_v, 0, 0, _ck(_v, 1, 0, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵnov"](_v.parent.parent, 0), _co.toast.msg));

        _ck(_v, 0, 0, currVal_0);
      });
    }

    function View_ToastComponent_2(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 6, "div", [["class", "toast-text"]], null, null, null, null, null)), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_ToastComponent_3)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](2, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_ToastComponent_4)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](4, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_ToastComponent_5)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](6, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null)], function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = _co.toast.title;

        _ck(_v, 2, 0, currVal_0);

        var currVal_1 = _co.toast.title && _co.toast.msg;

        _ck(_v, 4, 0, currVal_1);

        var currVal_2 = _co.toast.msg;

        _ck(_v, 6, 0, currVal_2);
      }, null);
    }

    function View_ToastComponent_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵpid"](0, _shared__WEBPACK_IMPORTED_MODULE_2__["SafeHtmlPipe"], [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["DomSanitizer"]]), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](1, 0, null, null, 7, "div", [["class", "toast"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](512, null, _angular_common__WEBPACK_IMPORTED_MODULE_1__["ɵNgClassImpl"], _angular_common__WEBPACK_IMPORTED_MODULE_1__["ɵNgClassR2Impl"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](3, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgClass"], [_angular_common__WEBPACK_IMPORTED_MODULE_1__["ɵNgClassImpl"]], {
        klass: [0, "klass"],
        ngClass: [1, "ngClass"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵpad"](4, 2), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_ToastComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](6, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_ToastComponent_2)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](8, 16384, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_1__["NgIf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"]], {
        ngIf: [0, "ngIf"]
      }, null)], function (_ck, _v) {
        var _co = _v.component;
        var currVal_0 = "toast";

        var currVal_1 = _ck(_v, 4, 0, _co.toast.type, _co.toast.theme);

        _ck(_v, 3, 0, currVal_0, currVal_1);

        var currVal_2 = _co.toast.showClose;

        _ck(_v, 6, 0, currVal_2);

        var currVal_3 = _co.toast.title || _co.toast.msg;

        _ck(_v, 8, 0, currVal_3);
      }, null);
    }

    function View_ToastComponent_Host_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "ng2-toast", [], null, null, null, View_ToastComponent_0, RenderType_ToastComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 49152, null, 0, _toast_component__WEBPACK_IMPORTED_MODULE_4__["ToastComponent"], [], null, null)], null, null);
    }

    var ToastComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵccf"]("ng2-toast", _toast_component__WEBPACK_IMPORTED_MODULE_4__["ToastComponent"], View_ToastComponent_Host_0, {
      toast: "toast"
    }, {
      closeToastEvent: "closeToast"
    }, []);
    /***/

  },

  /***/
  "./node_modules/ng2-toasty/src/toasty.component.ngfactory.js":
  /*!*******************************************************************!*\
    !*** ./node_modules/ng2-toasty/src/toasty.component.ngfactory.js ***!
    \*******************************************************************/

  /*! exports provided: RenderType_ToastyComponent, View_ToastyComponent_0, View_ToastyComponent_Host_0, ToastyComponentNgFactory */

  /***/
  function node_modulesNg2ToastySrcToastyComponentNgfactoryJs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RenderType_ToastyComponent", function () {
      return RenderType_ToastyComponent;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_ToastyComponent_0", function () {
      return View_ToastyComponent_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "View_ToastyComponent_Host_0", function () {
      return View_ToastyComponent_Host_0;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ToastyComponentNgFactory", function () {
      return ToastyComponentNgFactory;
    });
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _toast_component_ngfactory__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./toast.component.ngfactory */
    "./node_modules/ng2-toasty/src/toast.component.ngfactory.js");
    /* harmony import */


    var _toast_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./toast.component */
    "./node_modules/ng2-toasty/src/toast.component.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _toasty_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./toasty.component */
    "./node_modules/ng2-toasty/src/toasty.component.js");
    /* harmony import */


    var _toasty_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./toasty.service */
    "./node_modules/ng2-toasty/src/toasty.service.js");
    /**
     * @fileoverview This file was generated by the Angular template compiler. Do not edit.
     *
     * @suppress {suspiciousCode,uselessCode,missingProperties,missingOverride,checkTypes}
     * tslint:disable
     */


    var styles_ToastyComponent = [];

    var RenderType_ToastyComponent = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵcrt"]({
      encapsulation: 2,
      styles: styles_ToastyComponent,
      data: {}
    });

    function View_ToastyComponent_1(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "ng2-toast", [], null, [[null, "closeToast"]], function (_v, en, $event) {
        var ad = true;
        var _co = _v.component;

        if ("closeToast" === en) {
          var pd_0 = _co.closeToast(_v.context.$implicit) !== false;
          ad = pd_0 && ad;
        }

        return ad;
      }, _toast_component_ngfactory__WEBPACK_IMPORTED_MODULE_1__["View_ToastComponent_0"], _toast_component_ngfactory__WEBPACK_IMPORTED_MODULE_1__["RenderType_ToastComponent"])), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 49152, null, 0, _toast_component__WEBPACK_IMPORTED_MODULE_2__["ToastComponent"], [], {
        toast: [0, "toast"]
      }, {
        closeToastEvent: "closeToast"
      })], function (_ck, _v) {
        var currVal_0 = _v.context.$implicit;

        _ck(_v, 1, 0, currVal_0);
      }, null);
    }

    function View_ToastyComponent_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 5, "div", [["id", "toasty"]], null, null, null, null, null)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵprd"](512, null, _angular_common__WEBPACK_IMPORTED_MODULE_3__["ɵNgClassImpl"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["ɵNgClassR2Impl"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["IterableDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["KeyValueDiffers"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"]]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](2, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgClass"], [_angular_common__WEBPACK_IMPORTED_MODULE_3__["ɵNgClassImpl"]], {
        ngClass: [0, "ngClass"]
      }, null), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵpad"](3, 1), (_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵand"](16777216, null, null, 1, null, View_ToastyComponent_1)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](5, 278528, null, 0, _angular_common__WEBPACK_IMPORTED_MODULE_3__["NgForOf"], [_angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewContainerRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["TemplateRef"], _angular_core__WEBPACK_IMPORTED_MODULE_0__["IterableDiffers"]], {
        ngForOf: [0, "ngForOf"]
      }, null)], function (_ck, _v) {
        var _co = _v.component;

        var currVal_0 = _ck(_v, 3, 0, _co.position);

        _ck(_v, 2, 0, currVal_0);

        var currVal_1 = _co.toasts;

        _ck(_v, 5, 0, currVal_1);
      }, null);
    }

    function View_ToastyComponent_Host_0(_l) {
      return _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵvid"](0, [(_l()(), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵeld"](0, 0, null, null, 1, "ng2-toasty", [], null, null, null, View_ToastyComponent_0, RenderType_ToastyComponent)), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵdid"](1, 114688, null, 0, _toasty_component__WEBPACK_IMPORTED_MODULE_4__["ToastyComponent"], [_toasty_service__WEBPACK_IMPORTED_MODULE_5__["ToastyConfig"], _toasty_service__WEBPACK_IMPORTED_MODULE_5__["ToastyService"]], null, null)], function (_ck, _v) {
        _ck(_v, 1, 0);
      }, null);
    }

    var ToastyComponentNgFactory = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵccf"]("ng2-toasty", _toasty_component__WEBPACK_IMPORTED_MODULE_4__["ToastyComponent"], View_ToastyComponent_Host_0, {
      position: "position"
    }, {}, []);
    /***/

  }
}]);