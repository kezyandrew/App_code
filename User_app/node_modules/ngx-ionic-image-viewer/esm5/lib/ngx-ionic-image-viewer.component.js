/**
 * @fileoverview added by tsickle
 * Generated from: lib/ngx-ionic-image-viewer.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
// tslint:disable-next-line
import { Component, Input, ViewEncapsulation } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ViewerModalComponent } from './viewer-modal/viewer-modal.component';
var NgxIonicImageViewerComponent = /** @class */ (function () {
    function NgxIonicImageViewerComponent(modalController) {
        this.modalController = modalController;
    }
    /**
     * @param {?} src
     * @param {?=} srcFallback
     * @param {?=} srcHighRes
     * @param {?=} title
     * @param {?=} titleSize
     * @param {?=} text
     * @param {?=} scheme
     * @param {?=} slideOptions
     * @param {?=} swipeToClose
     * @return {?}
     */
    NgxIonicImageViewerComponent.prototype.viewImage = /**
     * @param {?} src
     * @param {?=} srcFallback
     * @param {?=} srcHighRes
     * @param {?=} title
     * @param {?=} titleSize
     * @param {?=} text
     * @param {?=} scheme
     * @param {?=} slideOptions
     * @param {?=} swipeToClose
     * @return {?}
     */
    function (src, srcFallback, srcHighRes, title, titleSize, text, scheme, slideOptions, swipeToClose) {
        if (srcFallback === void 0) { srcFallback = ''; }
        if (srcHighRes === void 0) { srcHighRes = ''; }
        if (title === void 0) { title = ''; }
        if (titleSize === void 0) { titleSize = ''; }
        if (text === void 0) { text = ''; }
        if (scheme === void 0) { scheme = 'auto'; }
        if (slideOptions === void 0) { slideOptions = {}; }
        if (swipeToClose === void 0) { swipeToClose = true; }
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var modal;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, this.modalController.create({
                            component: ViewerModalComponent,
                            componentProps: {
                                src: src,
                                srcFallback: srcFallback,
                                srcHighRes: srcHighRes,
                                title: title,
                                titleSize: titleSize,
                                text: text,
                                scheme: scheme,
                                slideOptions: slideOptions,
                                swipeToClose: swipeToClose
                            },
                            cssClass: this.cssClass instanceof Array ? tslib_1.__spread(['ion-img-viewer'], this.cssClass) : ['ion-img-viewer', this.cssClass],
                            keyboardClose: true,
                            showBackdrop: true
                        })];
                    case 1:
                        modal = _a.sent();
                        return [4 /*yield*/, modal.present()];
                    case 2: return [2 /*return*/, _a.sent()];
                }
            });
        });
    };
    /**
     * @return {?}
     */
    NgxIonicImageViewerComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () { };
    NgxIonicImageViewerComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ion-img-viewer',
                    template: "<img\n  [alt]=\"alt\"\n  [src]=\"src\"\n  (click)=\"viewImage(src, srcFallback, srcHighRes, title, titleSize, text, scheme, slideOptions, swipeToClose)\"\n  (error)=\"src = srcFallback\"\n/>\n",
                    encapsulation: ViewEncapsulation.Emulated,
                    styles: ["\n      :host {\n        display: block;\n      }\n    "]
                }] }
    ];
    /** @nocollapse */
    NgxIonicImageViewerComponent.ctorParameters = function () { return [
        { type: ModalController }
    ]; };
    NgxIonicImageViewerComponent.propDecorators = {
        alt: [{ type: Input }],
        cssClass: [{ type: Input }],
        scheme: [{ type: Input }],
        slideOptions: [{ type: Input }],
        src: [{ type: Input }],
        srcFallback: [{ type: Input }],
        srcHighRes: [{ type: Input }],
        swipeToClose: [{ type: Input }],
        text: [{ type: Input }],
        title: [{ type: Input }],
        titleSize: [{ type: Input }]
    };
    return NgxIonicImageViewerComponent;
}());
export { NgxIonicImageViewerComponent };
if (false) {
    /** @type {?} */
    NgxIonicImageViewerComponent.prototype.alt;
    /** @type {?} */
    NgxIonicImageViewerComponent.prototype.cssClass;
    /** @type {?} */
    NgxIonicImageViewerComponent.prototype.scheme;
    /** @type {?} */
    NgxIonicImageViewerComponent.prototype.slideOptions;
    /** @type {?} */
    NgxIonicImageViewerComponent.prototype.src;
    /** @type {?} */
    NgxIonicImageViewerComponent.prototype.srcFallback;
    /** @type {?} */
    NgxIonicImageViewerComponent.prototype.srcHighRes;
    /** @type {?} */
    NgxIonicImageViewerComponent.prototype.swipeToClose;
    /** @type {?} */
    NgxIonicImageViewerComponent.prototype.text;
    /** @type {?} */
    NgxIonicImageViewerComponent.prototype.title;
    /** @type {?} */
    NgxIonicImageViewerComponent.prototype.titleSize;
    /** @type {?} */
    NgxIonicImageViewerComponent.prototype.modalController;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWlvbmljLWltYWdlLXZpZXdlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtaW9uaWMtaW1hZ2Utdmlld2VyLyIsInNvdXJjZXMiOlsibGliL25neC1pb25pYy1pbWFnZS12aWV3ZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFFQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBVSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM1RSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDakQsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFFN0U7SUF5QkUsc0NBQW1CLGVBQWdDO1FBQWhDLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtJQUFHLENBQUM7Ozs7Ozs7Ozs7Ozs7SUFFakQsZ0RBQVM7Ozs7Ozs7Ozs7OztJQUFmLFVBQ0UsR0FBVyxFQUNYLFdBQXdCLEVBQ3hCLFVBQXVCLEVBQ3ZCLEtBQWtCLEVBQ2xCLFNBQXNCLEVBQ3RCLElBQWlCLEVBQ2pCLE1BQXVCLEVBQ3ZCLFlBQXlCLEVBQ3pCLFlBQTRCO1FBUDVCLDRCQUFBLEVBQUEsZ0JBQXdCO1FBQ3hCLDJCQUFBLEVBQUEsZUFBdUI7UUFDdkIsc0JBQUEsRUFBQSxVQUFrQjtRQUNsQiwwQkFBQSxFQUFBLGNBQXNCO1FBQ3RCLHFCQUFBLEVBQUEsU0FBaUI7UUFDakIsdUJBQUEsRUFBQSxlQUF1QjtRQUN2Qiw2QkFBQSxFQUFBLGlCQUF5QjtRQUN6Qiw2QkFBQSxFQUFBLG1CQUE0Qjs7Ozs7NEJBRWQscUJBQU0sSUFBSSxDQUFDLGVBQWUsQ0FBQyxNQUFNLENBQUM7NEJBQzlDLFNBQVMsRUFBRSxvQkFBb0I7NEJBQy9CLGNBQWMsRUFBRTtnQ0FDZCxHQUFHLEtBQUE7Z0NBQ0gsV0FBVyxhQUFBO2dDQUNYLFVBQVUsWUFBQTtnQ0FDVixLQUFLLE9BQUE7Z0NBQ0wsU0FBUyxXQUFBO2dDQUNULElBQUksTUFBQTtnQ0FDSixNQUFNLFFBQUE7Z0NBQ04sWUFBWSxjQUFBO2dDQUNaLFlBQVksY0FBQTs2QkFDYjs0QkFDRCxRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVEsWUFBWSxLQUFLLENBQUMsQ0FBQyxtQkFBRSxnQkFBZ0IsR0FBSyxJQUFJLENBQUMsUUFBUSxFQUFFLENBQUMsQ0FBQyxDQUFDLGdCQUFnQixFQUFFLElBQUksQ0FBQyxRQUFRLENBQUM7NEJBQ25ILGFBQWEsRUFBRSxJQUFJOzRCQUNuQixZQUFZLEVBQUUsSUFBSTt5QkFDbkIsQ0FBQyxFQUFBOzt3QkFoQkksS0FBSyxHQUFHLFNBZ0JaO3dCQUVLLHFCQUFNLEtBQUssQ0FBQyxPQUFPLEVBQUUsRUFBQTs0QkFBNUIsc0JBQU8sU0FBcUIsRUFBQzs7OztLQUM5Qjs7OztJQUVELCtDQUFROzs7SUFBUixjQUFZLENBQUM7O2dCQTNEZCxTQUFTLFNBQUM7b0JBQ1QsUUFBUSxFQUFFLGdCQUFnQjtvQkFDMUIsNE1BQXNEO29CQVF0RCxhQUFhLEVBQUUsaUJBQWlCLENBQUMsUUFBUTs2QkFOdkMseURBSUM7aUJBR0o7Ozs7Z0JBZFEsZUFBZTs7O3NCQWdCckIsS0FBSzsyQkFDTCxLQUFLO3lCQUNMLEtBQUs7K0JBQ0wsS0FBSztzQkFDTCxLQUFLOzhCQUNMLEtBQUs7NkJBQ0wsS0FBSzsrQkFDTCxLQUFLO3VCQUNMLEtBQUs7d0JBQ0wsS0FBSzs0QkFDTCxLQUFLOztJQXFDUixtQ0FBQztDQUFBLEFBNURELElBNERDO1NBaERZLDRCQUE0Qjs7O0lBQ3ZDLDJDQUFzQjs7SUFDdEIsZ0RBQXNDOztJQUN0Qyw4Q0FBeUI7O0lBQ3pCLG9EQUErQjs7SUFDL0IsMkNBQXFCOztJQUNyQixtREFBOEI7O0lBQzlCLGtEQUE2Qjs7SUFDN0Isb0RBQWdDOztJQUNoQyw0Q0FBdUI7O0lBQ3ZCLDZDQUF3Qjs7SUFDeEIsaURBQTRCOztJQUVoQix1REFBdUMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmVcblxuaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25Jbml0LCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTW9kYWxDb250cm9sbGVyIH0gZnJvbSAnQGlvbmljL2FuZ3VsYXInO1xuaW1wb3J0IHsgVmlld2VyTW9kYWxDb21wb25lbnQgfSBmcm9tICcuL3ZpZXdlci1tb2RhbC92aWV3ZXItbW9kYWwuY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnaW9uLWltZy12aWV3ZXInLFxuICB0ZW1wbGF0ZVVybDogJy4vbmd4LWlvbmljLWltYWdlLXZpZXdlci5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlczogW1xuICAgIGBcbiAgICAgIDpob3N0IHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICB9XG4gICAgYFxuICBdLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5FbXVsYXRlZFxufSlcbmV4cG9ydCBjbGFzcyBOZ3hJb25pY0ltYWdlVmlld2VyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KCkgYWx0Pzogc3RyaW5nO1xuICBASW5wdXQoKSBjc3NDbGFzcz86IHN0cmluZyB8IHN0cmluZ1tdO1xuICBASW5wdXQoKSBzY2hlbWU/OiBzdHJpbmc7XG4gIEBJbnB1dCgpIHNsaWRlT3B0aW9ucz86IG9iamVjdDtcbiAgQElucHV0KCkgc3JjOiBzdHJpbmc7XG4gIEBJbnB1dCgpIHNyY0ZhbGxiYWNrPzogc3RyaW5nO1xuICBASW5wdXQoKSBzcmNIaWdoUmVzPzogc3RyaW5nO1xuICBASW5wdXQoKSBzd2lwZVRvQ2xvc2U/OiBib29sZWFuO1xuICBASW5wdXQoKSB0ZXh0Pzogc3RyaW5nO1xuICBASW5wdXQoKSB0aXRsZT86IHN0cmluZztcbiAgQElucHV0KCkgdGl0bGVTaXplPzogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBtb2RhbENvbnRyb2xsZXI6IE1vZGFsQ29udHJvbGxlcikge31cblxuICBhc3luYyB2aWV3SW1hZ2UoXG4gICAgc3JjOiBzdHJpbmcsXG4gICAgc3JjRmFsbGJhY2s6IHN0cmluZyA9ICcnLFxuICAgIHNyY0hpZ2hSZXM6IHN0cmluZyA9ICcnLFxuICAgIHRpdGxlOiBzdHJpbmcgPSAnJyxcbiAgICB0aXRsZVNpemU6IHN0cmluZyA9ICcnLFxuICAgIHRleHQ6IHN0cmluZyA9ICcnLFxuICAgIHNjaGVtZTogc3RyaW5nID0gJ2F1dG8nLFxuICAgIHNsaWRlT3B0aW9uczogb2JqZWN0ID0ge30sXG4gICAgc3dpcGVUb0Nsb3NlOiBib29sZWFuID0gdHJ1ZVxuICApIHtcbiAgICBjb25zdCBtb2RhbCA9IGF3YWl0IHRoaXMubW9kYWxDb250cm9sbGVyLmNyZWF0ZSh7XG4gICAgICBjb21wb25lbnQ6IFZpZXdlck1vZGFsQ29tcG9uZW50LFxuICAgICAgY29tcG9uZW50UHJvcHM6IHtcbiAgICAgICAgc3JjLFxuICAgICAgICBzcmNGYWxsYmFjayxcbiAgICAgICAgc3JjSGlnaFJlcyxcbiAgICAgICAgdGl0bGUsXG4gICAgICAgIHRpdGxlU2l6ZSxcbiAgICAgICAgdGV4dCxcbiAgICAgICAgc2NoZW1lLFxuICAgICAgICBzbGlkZU9wdGlvbnMsXG4gICAgICAgIHN3aXBlVG9DbG9zZVxuICAgICAgfSxcbiAgICAgIGNzc0NsYXNzOiB0aGlzLmNzc0NsYXNzIGluc3RhbmNlb2YgQXJyYXkgPyBbJ2lvbi1pbWctdmlld2VyJywgLi4udGhpcy5jc3NDbGFzc10gOiBbJ2lvbi1pbWctdmlld2VyJywgdGhpcy5jc3NDbGFzc10sXG4gICAgICBrZXlib2FyZENsb3NlOiB0cnVlLFxuICAgICAgc2hvd0JhY2tkcm9wOiB0cnVlXG4gICAgfSk7XG5cbiAgICByZXR1cm4gYXdhaXQgbW9kYWwucHJlc2VudCgpO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7fVxufVxuIl19