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
export class NgxIonicImageViewerComponent {
    /**
     * @param {?} modalController
     */
    constructor(modalController) {
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
    viewImage(src, srcFallback = '', srcHighRes = '', title = '', titleSize = '', text = '', scheme = 'auto', slideOptions = {}, swipeToClose = true) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            /** @type {?} */
            const modal = yield this.modalController.create({
                component: ViewerModalComponent,
                componentProps: {
                    src,
                    srcFallback,
                    srcHighRes,
                    title,
                    titleSize,
                    text,
                    scheme,
                    slideOptions,
                    swipeToClose
                },
                cssClass: this.cssClass instanceof Array ? ['ion-img-viewer', ...this.cssClass] : ['ion-img-viewer', this.cssClass],
                keyboardClose: true,
                showBackdrop: true
            });
            return yield modal.present();
        });
    }
    /**
     * @return {?}
     */
    ngOnInit() { }
}
NgxIonicImageViewerComponent.decorators = [
    { type: Component, args: [{
                selector: 'ion-img-viewer',
                template: "<img\n  [alt]=\"alt\"\n  [src]=\"src\"\n  (click)=\"viewImage(src, srcFallback, srcHighRes, title, titleSize, text, scheme, slideOptions, swipeToClose)\"\n  (error)=\"src = srcFallback\"\n/>\n",
                encapsulation: ViewEncapsulation.Emulated,
                styles: [`
      :host {
        display: block;
      }
    `]
            }] }
];
/** @nocollapse */
NgxIonicImageViewerComponent.ctorParameters = () => [
    { type: ModalController }
];
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWlvbmljLWltYWdlLXZpZXdlci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtaW9uaWMtaW1hZ2Utdmlld2VyLyIsInNvdXJjZXMiOlsibGliL25neC1pb25pYy1pbWFnZS12aWV3ZXIuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFFQSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBVSxpQkFBaUIsRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUM1RSxPQUFPLEVBQUUsZUFBZSxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFDakQsT0FBTyxFQUFFLG9CQUFvQixFQUFFLE1BQU0sdUNBQXVDLENBQUM7QUFjN0UsTUFBTSxPQUFPLDRCQUE0Qjs7OztJQWF2QyxZQUFtQixlQUFnQztRQUFoQyxvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7SUFBRyxDQUFDOzs7Ozs7Ozs7Ozs7O0lBRWpELFNBQVMsQ0FDYixHQUFXLEVBQ1gsY0FBc0IsRUFBRSxFQUN4QixhQUFxQixFQUFFLEVBQ3ZCLFFBQWdCLEVBQUUsRUFDbEIsWUFBb0IsRUFBRSxFQUN0QixPQUFlLEVBQUUsRUFDakIsU0FBaUIsTUFBTSxFQUN2QixlQUF1QixFQUFFLEVBQ3pCLGVBQXdCLElBQUk7OztrQkFFdEIsS0FBSyxHQUFHLE1BQU0sSUFBSSxDQUFDLGVBQWUsQ0FBQyxNQUFNLENBQUM7Z0JBQzlDLFNBQVMsRUFBRSxvQkFBb0I7Z0JBQy9CLGNBQWMsRUFBRTtvQkFDZCxHQUFHO29CQUNILFdBQVc7b0JBQ1gsVUFBVTtvQkFDVixLQUFLO29CQUNMLFNBQVM7b0JBQ1QsSUFBSTtvQkFDSixNQUFNO29CQUNOLFlBQVk7b0JBQ1osWUFBWTtpQkFDYjtnQkFDRCxRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVEsWUFBWSxLQUFLLENBQUMsQ0FBQyxDQUFDLENBQUMsZ0JBQWdCLEVBQUUsR0FBRyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsZ0JBQWdCLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQztnQkFDbkgsYUFBYSxFQUFFLElBQUk7Z0JBQ25CLFlBQVksRUFBRSxJQUFJO2FBQ25CLENBQUM7WUFFRixPQUFPLE1BQU0sS0FBSyxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQy9CLENBQUM7S0FBQTs7OztJQUVELFFBQVEsS0FBSSxDQUFDOzs7WUEzRGQsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxnQkFBZ0I7Z0JBQzFCLDRNQUFzRDtnQkFRdEQsYUFBYSxFQUFFLGlCQUFpQixDQUFDLFFBQVE7eUJBTnZDOzs7O0tBSUM7YUFHSjs7OztZQWRRLGVBQWU7OztrQkFnQnJCLEtBQUs7dUJBQ0wsS0FBSztxQkFDTCxLQUFLOzJCQUNMLEtBQUs7a0JBQ0wsS0FBSzswQkFDTCxLQUFLO3lCQUNMLEtBQUs7MkJBQ0wsS0FBSzttQkFDTCxLQUFLO29CQUNMLEtBQUs7d0JBQ0wsS0FBSzs7OztJQVZOLDJDQUFzQjs7SUFDdEIsZ0RBQXNDOztJQUN0Qyw4Q0FBeUI7O0lBQ3pCLG9EQUErQjs7SUFDL0IsMkNBQXFCOztJQUNyQixtREFBOEI7O0lBQzlCLGtEQUE2Qjs7SUFDN0Isb0RBQWdDOztJQUNoQyw0Q0FBdUI7O0lBQ3ZCLDZDQUF3Qjs7SUFDeEIsaURBQTRCOztJQUVoQix1REFBdUMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmVcblxuaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT25Jbml0LCBWaWV3RW5jYXBzdWxhdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTW9kYWxDb250cm9sbGVyIH0gZnJvbSAnQGlvbmljL2FuZ3VsYXInO1xuaW1wb3J0IHsgVmlld2VyTW9kYWxDb21wb25lbnQgfSBmcm9tICcuL3ZpZXdlci1tb2RhbC92aWV3ZXItbW9kYWwuY29tcG9uZW50JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnaW9uLWltZy12aWV3ZXInLFxuICB0ZW1wbGF0ZVVybDogJy4vbmd4LWlvbmljLWltYWdlLXZpZXdlci5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlczogW1xuICAgIGBcbiAgICAgIDpob3N0IHtcbiAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICB9XG4gICAgYFxuICBdLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5FbXVsYXRlZFxufSlcbmV4cG9ydCBjbGFzcyBOZ3hJb25pY0ltYWdlVmlld2VyQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgQElucHV0KCkgYWx0Pzogc3RyaW5nO1xuICBASW5wdXQoKSBjc3NDbGFzcz86IHN0cmluZyB8IHN0cmluZ1tdO1xuICBASW5wdXQoKSBzY2hlbWU/OiBzdHJpbmc7XG4gIEBJbnB1dCgpIHNsaWRlT3B0aW9ucz86IG9iamVjdDtcbiAgQElucHV0KCkgc3JjOiBzdHJpbmc7XG4gIEBJbnB1dCgpIHNyY0ZhbGxiYWNrPzogc3RyaW5nO1xuICBASW5wdXQoKSBzcmNIaWdoUmVzPzogc3RyaW5nO1xuICBASW5wdXQoKSBzd2lwZVRvQ2xvc2U/OiBib29sZWFuO1xuICBASW5wdXQoKSB0ZXh0Pzogc3RyaW5nO1xuICBASW5wdXQoKSB0aXRsZT86IHN0cmluZztcbiAgQElucHV0KCkgdGl0bGVTaXplPzogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBtb2RhbENvbnRyb2xsZXI6IE1vZGFsQ29udHJvbGxlcikge31cblxuICBhc3luYyB2aWV3SW1hZ2UoXG4gICAgc3JjOiBzdHJpbmcsXG4gICAgc3JjRmFsbGJhY2s6IHN0cmluZyA9ICcnLFxuICAgIHNyY0hpZ2hSZXM6IHN0cmluZyA9ICcnLFxuICAgIHRpdGxlOiBzdHJpbmcgPSAnJyxcbiAgICB0aXRsZVNpemU6IHN0cmluZyA9ICcnLFxuICAgIHRleHQ6IHN0cmluZyA9ICcnLFxuICAgIHNjaGVtZTogc3RyaW5nID0gJ2F1dG8nLFxuICAgIHNsaWRlT3B0aW9uczogb2JqZWN0ID0ge30sXG4gICAgc3dpcGVUb0Nsb3NlOiBib29sZWFuID0gdHJ1ZVxuICApIHtcbiAgICBjb25zdCBtb2RhbCA9IGF3YWl0IHRoaXMubW9kYWxDb250cm9sbGVyLmNyZWF0ZSh7XG4gICAgICBjb21wb25lbnQ6IFZpZXdlck1vZGFsQ29tcG9uZW50LFxuICAgICAgY29tcG9uZW50UHJvcHM6IHtcbiAgICAgICAgc3JjLFxuICAgICAgICBzcmNGYWxsYmFjayxcbiAgICAgICAgc3JjSGlnaFJlcyxcbiAgICAgICAgdGl0bGUsXG4gICAgICAgIHRpdGxlU2l6ZSxcbiAgICAgICAgdGV4dCxcbiAgICAgICAgc2NoZW1lLFxuICAgICAgICBzbGlkZU9wdGlvbnMsXG4gICAgICAgIHN3aXBlVG9DbG9zZVxuICAgICAgfSxcbiAgICAgIGNzc0NsYXNzOiB0aGlzLmNzc0NsYXNzIGluc3RhbmNlb2YgQXJyYXkgPyBbJ2lvbi1pbWctdmlld2VyJywgLi4udGhpcy5jc3NDbGFzc10gOiBbJ2lvbi1pbWctdmlld2VyJywgdGhpcy5jc3NDbGFzc10sXG4gICAgICBrZXlib2FyZENsb3NlOiB0cnVlLFxuICAgICAgc2hvd0JhY2tkcm9wOiB0cnVlXG4gICAgfSk7XG5cbiAgICByZXR1cm4gYXdhaXQgbW9kYWwucHJlc2VudCgpO1xuICB9XG5cbiAgbmdPbkluaXQoKSB7fVxufVxuIl19