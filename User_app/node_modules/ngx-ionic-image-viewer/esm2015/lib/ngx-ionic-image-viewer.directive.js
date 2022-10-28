/**
 * @fileoverview added by tsickle
 * Generated from: lib/ngx-ionic-image-viewer.directive.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ViewerModalComponent } from './viewer-modal/viewer-modal.component';
export class NgxIonicImageViewerDirective {
    /**
     * @param {?} el
     * @param {?} renderer
     * @param {?} modalController
     */
    constructor(el, renderer, modalController) {
        this.el = el;
        this.renderer = renderer;
        this.modalController = modalController;
    }
    /**
     * @return {?}
     */
    onClick() {
        this.viewImage(this.src, this.srcFallback, this.srcHighRes, this.title, this.titleSize, this.text, this.scheme, this.slideOptions, this.swipeToClose);
    }
    /**
     * @param {?} error
     * @return {?}
     */
    onError(error) {
        if (this.src !== this.el.nativeElement.src) {
            this.src = this.el.nativeElement.src;
        }
        if (this.srcFallback) {
            this.renderer.setAttribute(this.el.nativeElement, 'src', this.srcFallback);
        }
    }
    /**
     * @return {?}
     */
    ngOnInit() {
        if (!this.el.nativeElement.hasAttribute('src')) {
            this.renderer.setAttribute(this.el.nativeElement, 'src', this.src);
        }
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
}
NgxIonicImageViewerDirective.decorators = [
    { type: Directive, args: [{
                selector: '[ionImgViewer]'
            },] }
];
/** @nocollapse */
NgxIonicImageViewerDirective.ctorParameters = () => [
    { type: ElementRef },
    { type: Renderer2 },
    { type: ModalController }
];
NgxIonicImageViewerDirective.propDecorators = {
    cssClass: [{ type: Input }],
    scheme: [{ type: Input }],
    slideOptions: [{ type: Input }],
    src: [{ type: Input }],
    srcFallback: [{ type: Input }],
    srcHighRes: [{ type: Input }],
    swipeToClose: [{ type: Input }],
    text: [{ type: Input }],
    title: [{ type: Input }],
    titleSize: [{ type: Input }],
    onClick: [{ type: HostListener, args: ['click',] }],
    onError: [{ type: HostListener, args: ['error', ['$event'],] }]
};
if (false) {
    /** @type {?} */
    NgxIonicImageViewerDirective.prototype.cssClass;
    /** @type {?} */
    NgxIonicImageViewerDirective.prototype.scheme;
    /** @type {?} */
    NgxIonicImageViewerDirective.prototype.slideOptions;
    /** @type {?} */
    NgxIonicImageViewerDirective.prototype.src;
    /** @type {?} */
    NgxIonicImageViewerDirective.prototype.srcFallback;
    /** @type {?} */
    NgxIonicImageViewerDirective.prototype.srcHighRes;
    /** @type {?} */
    NgxIonicImageViewerDirective.prototype.swipeToClose;
    /** @type {?} */
    NgxIonicImageViewerDirective.prototype.text;
    /** @type {?} */
    NgxIonicImageViewerDirective.prototype.title;
    /** @type {?} */
    NgxIonicImageViewerDirective.prototype.titleSize;
    /**
     * @type {?}
     * @private
     */
    NgxIonicImageViewerDirective.prototype.el;
    /**
     * @type {?}
     * @private
     */
    NgxIonicImageViewerDirective.prototype.renderer;
    /** @type {?} */
    NgxIonicImageViewerDirective.prototype.modalController;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWlvbmljLWltYWdlLXZpZXdlci5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtaW9uaWMtaW1hZ2Utdmlld2VyLyIsInNvdXJjZXMiOlsibGliL25neC1pb25pYy1pbWFnZS12aWV3ZXIuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBQzlGLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNqRCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUs3RSxNQUFNLE9BQU8sNEJBQTRCOzs7Ozs7SUFDdkMsWUFBb0IsRUFBYyxFQUFVLFFBQW1CLEVBQVMsZUFBZ0M7UUFBcEYsT0FBRSxHQUFGLEVBQUUsQ0FBWTtRQUFVLGFBQVEsR0FBUixRQUFRLENBQVc7UUFBUyxvQkFBZSxHQUFmLGVBQWUsQ0FBaUI7SUFBRyxDQUFDOzs7O0lBYXJGLE9BQU87UUFDNUIsSUFBSSxDQUFDLFNBQVMsQ0FDWixJQUFJLENBQUMsR0FBRyxFQUNSLElBQUksQ0FBQyxXQUFXLEVBQ2hCLElBQUksQ0FBQyxVQUFVLEVBQ2YsSUFBSSxDQUFDLEtBQUssRUFDVixJQUFJLENBQUMsU0FBUyxFQUNkLElBQUksQ0FBQyxJQUFJLEVBQ1QsSUFBSSxDQUFDLE1BQU0sRUFDWCxJQUFJLENBQUMsWUFBWSxFQUNqQixJQUFJLENBQUMsWUFBWSxDQUNsQixDQUFDO0lBQ0osQ0FBQzs7Ozs7SUFFa0MsT0FBTyxDQUFDLEtBQUs7UUFDOUMsSUFBSSxJQUFJLENBQUMsR0FBRyxLQUFLLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLEdBQUcsRUFBRTtZQUMxQyxJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQztTQUN0QztRQUNELElBQUksSUFBSSxDQUFDLFdBQVcsRUFBRTtZQUNwQixJQUFJLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsRUFBRSxLQUFLLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1NBQzVFO0lBQ0gsQ0FBQzs7OztJQUVELFFBQVE7UUFDTixJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQzlDLElBQUksQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxFQUFFLEtBQUssRUFBRSxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7U0FDcEU7SUFDSCxDQUFDOzs7Ozs7Ozs7Ozs7O0lBRUssU0FBUyxDQUNiLEdBQVcsRUFDWCxjQUFzQixFQUFFLEVBQ3hCLGFBQXFCLEVBQUUsRUFDdkIsUUFBZ0IsRUFBRSxFQUNsQixZQUFvQixFQUFFLEVBQ3RCLE9BQWUsRUFBRSxFQUNqQixTQUFpQixNQUFNLEVBQ3ZCLGVBQXVCLEVBQUUsRUFDekIsZUFBd0IsSUFBSTs7O2tCQUV0QixLQUFLLEdBQUcsTUFBTSxJQUFJLENBQUMsZUFBZSxDQUFDLE1BQU0sQ0FBQztnQkFDOUMsU0FBUyxFQUFFLG9CQUFvQjtnQkFDL0IsY0FBYyxFQUFFO29CQUNkLEdBQUc7b0JBQ0gsV0FBVztvQkFDWCxVQUFVO29CQUNWLEtBQUs7b0JBQ0wsU0FBUztvQkFDVCxJQUFJO29CQUNKLE1BQU07b0JBQ04sWUFBWTtvQkFDWixZQUFZO2lCQUNiO2dCQUNELFFBQVEsRUFBRSxJQUFJLENBQUMsUUFBUSxZQUFZLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxnQkFBZ0IsRUFBRSxHQUFHLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxnQkFBZ0IsRUFBRSxJQUFJLENBQUMsUUFBUSxDQUFDO2dCQUNuSCxhQUFhLEVBQUUsSUFBSTtnQkFDbkIsWUFBWSxFQUFFLElBQUk7YUFDbkIsQ0FBQztZQUVGLE9BQU8sTUFBTSxLQUFLLENBQUMsT0FBTyxFQUFFLENBQUM7UUFDL0IsQ0FBQztLQUFBOzs7WUE1RUYsU0FBUyxTQUFDO2dCQUNULFFBQVEsRUFBRSxnQkFBZ0I7YUFDM0I7Ozs7WUFObUIsVUFBVTtZQUF1QixTQUFTO1lBQ3JELGVBQWU7Ozt1QkFTckIsS0FBSztxQkFDTCxLQUFLOzJCQUNMLEtBQUs7a0JBQ0wsS0FBSzswQkFDTCxLQUFLO3lCQUNMLEtBQUs7MkJBQ0wsS0FBSzttQkFDTCxLQUFLO29CQUNMLEtBQUs7d0JBQ0wsS0FBSztzQkFFTCxZQUFZLFNBQUMsT0FBTztzQkFjcEIsWUFBWSxTQUFDLE9BQU8sRUFBRSxDQUFDLFFBQVEsQ0FBQzs7OztJQXpCakMsZ0RBQXNDOztJQUN0Qyw4Q0FBeUI7O0lBQ3pCLG9EQUErQjs7SUFDL0IsMkNBQXFCOztJQUNyQixtREFBOEI7O0lBQzlCLGtEQUE2Qjs7SUFDN0Isb0RBQWdDOztJQUNoQyw0Q0FBdUI7O0lBQ3ZCLDZDQUF3Qjs7SUFDeEIsaURBQTRCOzs7OztJQVhoQiwwQ0FBc0I7Ozs7O0lBQUUsZ0RBQTJCOztJQUFFLHVEQUF1QyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IERpcmVjdGl2ZSwgRWxlbWVudFJlZiwgSG9zdExpc3RlbmVyLCBJbnB1dCwgUmVuZGVyZXIyLCBPbkluaXQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IE1vZGFsQ29udHJvbGxlciB9IGZyb20gJ0Bpb25pYy9hbmd1bGFyJztcbmltcG9ydCB7IFZpZXdlck1vZGFsQ29tcG9uZW50IH0gZnJvbSAnLi92aWV3ZXItbW9kYWwvdmlld2VyLW1vZGFsLmNvbXBvbmVudCc7XG5cbkBEaXJlY3RpdmUoe1xuICBzZWxlY3RvcjogJ1tpb25JbWdWaWV3ZXJdJ1xufSlcbmV4cG9ydCBjbGFzcyBOZ3hJb25pY0ltYWdlVmlld2VyRGlyZWN0aXZlIGltcGxlbWVudHMgT25Jbml0IHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBlbDogRWxlbWVudFJlZiwgcHJpdmF0ZSByZW5kZXJlcjogUmVuZGVyZXIyLCBwdWJsaWMgbW9kYWxDb250cm9sbGVyOiBNb2RhbENvbnRyb2xsZXIpIHt9XG5cbiAgQElucHV0KCkgY3NzQ2xhc3M/OiBzdHJpbmcgfCBzdHJpbmdbXTtcbiAgQElucHV0KCkgc2NoZW1lPzogc3RyaW5nO1xuICBASW5wdXQoKSBzbGlkZU9wdGlvbnM/OiBvYmplY3Q7XG4gIEBJbnB1dCgpIHNyYzogc3RyaW5nO1xuICBASW5wdXQoKSBzcmNGYWxsYmFjaz86IHN0cmluZztcbiAgQElucHV0KCkgc3JjSGlnaFJlcz86IHN0cmluZztcbiAgQElucHV0KCkgc3dpcGVUb0Nsb3NlPzogYm9vbGVhbjtcbiAgQElucHV0KCkgdGV4dD86IHN0cmluZztcbiAgQElucHV0KCkgdGl0bGU/OiBzdHJpbmc7XG4gIEBJbnB1dCgpIHRpdGxlU2l6ZT86IHN0cmluZztcblxuICBASG9zdExpc3RlbmVyKCdjbGljaycpIG9uQ2xpY2soKSB7XG4gICAgdGhpcy52aWV3SW1hZ2UoXG4gICAgICB0aGlzLnNyYyxcbiAgICAgIHRoaXMuc3JjRmFsbGJhY2ssXG4gICAgICB0aGlzLnNyY0hpZ2hSZXMsXG4gICAgICB0aGlzLnRpdGxlLFxuICAgICAgdGhpcy50aXRsZVNpemUsXG4gICAgICB0aGlzLnRleHQsXG4gICAgICB0aGlzLnNjaGVtZSxcbiAgICAgIHRoaXMuc2xpZGVPcHRpb25zLFxuICAgICAgdGhpcy5zd2lwZVRvQ2xvc2VcbiAgICApO1xuICB9XG5cbiAgQEhvc3RMaXN0ZW5lcignZXJyb3InLCBbJyRldmVudCddKSBvbkVycm9yKGVycm9yKSB7XG4gICAgaWYgKHRoaXMuc3JjICE9PSB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQuc3JjKSB7XG4gICAgICB0aGlzLnNyYyA9IHRoaXMuZWwubmF0aXZlRWxlbWVudC5zcmM7XG4gICAgfVxuICAgIGlmICh0aGlzLnNyY0ZhbGxiYWNrKSB7XG4gICAgICB0aGlzLnJlbmRlcmVyLnNldEF0dHJpYnV0ZSh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsICdzcmMnLCB0aGlzLnNyY0ZhbGxiYWNrKTtcbiAgICB9XG4gIH1cblxuICBuZ09uSW5pdCgpIHtcbiAgICBpZiAoIXRoaXMuZWwubmF0aXZlRWxlbWVudC5oYXNBdHRyaWJ1dGUoJ3NyYycpKSB7XG4gICAgICB0aGlzLnJlbmRlcmVyLnNldEF0dHJpYnV0ZSh0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsICdzcmMnLCB0aGlzLnNyYyk7XG4gICAgfVxuICB9XG5cbiAgYXN5bmMgdmlld0ltYWdlKFxuICAgIHNyYzogc3RyaW5nLFxuICAgIHNyY0ZhbGxiYWNrOiBzdHJpbmcgPSAnJyxcbiAgICBzcmNIaWdoUmVzOiBzdHJpbmcgPSAnJyxcbiAgICB0aXRsZTogc3RyaW5nID0gJycsXG4gICAgdGl0bGVTaXplOiBzdHJpbmcgPSAnJyxcbiAgICB0ZXh0OiBzdHJpbmcgPSAnJyxcbiAgICBzY2hlbWU6IHN0cmluZyA9ICdhdXRvJyxcbiAgICBzbGlkZU9wdGlvbnM6IG9iamVjdCA9IHt9LFxuICAgIHN3aXBlVG9DbG9zZTogYm9vbGVhbiA9IHRydWVcbiAgKSB7XG4gICAgY29uc3QgbW9kYWwgPSBhd2FpdCB0aGlzLm1vZGFsQ29udHJvbGxlci5jcmVhdGUoe1xuICAgICAgY29tcG9uZW50OiBWaWV3ZXJNb2RhbENvbXBvbmVudCxcbiAgICAgIGNvbXBvbmVudFByb3BzOiB7XG4gICAgICAgIHNyYyxcbiAgICAgICAgc3JjRmFsbGJhY2ssXG4gICAgICAgIHNyY0hpZ2hSZXMsXG4gICAgICAgIHRpdGxlLFxuICAgICAgICB0aXRsZVNpemUsXG4gICAgICAgIHRleHQsXG4gICAgICAgIHNjaGVtZSxcbiAgICAgICAgc2xpZGVPcHRpb25zLFxuICAgICAgICBzd2lwZVRvQ2xvc2VcbiAgICAgIH0sXG4gICAgICBjc3NDbGFzczogdGhpcy5jc3NDbGFzcyBpbnN0YW5jZW9mIEFycmF5ID8gWydpb24taW1nLXZpZXdlcicsIC4uLnRoaXMuY3NzQ2xhc3NdIDogWydpb24taW1nLXZpZXdlcicsIHRoaXMuY3NzQ2xhc3NdLFxuICAgICAga2V5Ym9hcmRDbG9zZTogdHJ1ZSxcbiAgICAgIHNob3dCYWNrZHJvcDogdHJ1ZVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIGF3YWl0IG1vZGFsLnByZXNlbnQoKTtcbiAgfVxufVxuIl19