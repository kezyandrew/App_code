/**
 * @fileoverview added by tsickle
 * Generated from: lib/ngx-ionic-image-viewer.directive.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ViewerModalComponent } from './viewer-modal/viewer-modal.component';
var NgxIonicImageViewerDirective = /** @class */ (function () {
    function NgxIonicImageViewerDirective(el, renderer, modalController) {
        this.el = el;
        this.renderer = renderer;
        this.modalController = modalController;
    }
    /**
     * @return {?}
     */
    NgxIonicImageViewerDirective.prototype.onClick = /**
     * @return {?}
     */
    function () {
        this.viewImage(this.src, this.srcFallback, this.srcHighRes, this.title, this.titleSize, this.text, this.scheme, this.slideOptions, this.swipeToClose);
    };
    /**
     * @param {?} error
     * @return {?}
     */
    NgxIonicImageViewerDirective.prototype.onError = /**
     * @param {?} error
     * @return {?}
     */
    function (error) {
        if (this.src !== this.el.nativeElement.src) {
            this.src = this.el.nativeElement.src;
        }
        if (this.srcFallback) {
            this.renderer.setAttribute(this.el.nativeElement, 'src', this.srcFallback);
        }
    };
    /**
     * @return {?}
     */
    NgxIonicImageViewerDirective.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        if (!this.el.nativeElement.hasAttribute('src')) {
            this.renderer.setAttribute(this.el.nativeElement, 'src', this.src);
        }
    };
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
    NgxIonicImageViewerDirective.prototype.viewImage = /**
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
    NgxIonicImageViewerDirective.decorators = [
        { type: Directive, args: [{
                    selector: '[ionImgViewer]'
                },] }
    ];
    /** @nocollapse */
    NgxIonicImageViewerDirective.ctorParameters = function () { return [
        { type: ElementRef },
        { type: Renderer2 },
        { type: ModalController }
    ]; };
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
    return NgxIonicImageViewerDirective;
}());
export { NgxIonicImageViewerDirective };
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmd4LWlvbmljLWltYWdlLXZpZXdlci5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZ3gtaW9uaWMtaW1hZ2Utdmlld2VyLyIsInNvdXJjZXMiOlsibGliL25neC1pb25pYy1pbWFnZS12aWV3ZXIuZGlyZWN0aXZlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLFlBQVksRUFBRSxLQUFLLEVBQUUsU0FBUyxFQUFVLE1BQU0sZUFBZSxDQUFDO0FBQzlGLE9BQU8sRUFBRSxlQUFlLEVBQUUsTUFBTSxnQkFBZ0IsQ0FBQztBQUNqRCxPQUFPLEVBQUUsb0JBQW9CLEVBQUUsTUFBTSx1Q0FBdUMsQ0FBQztBQUU3RTtJQUlFLHNDQUFvQixFQUFjLEVBQVUsUUFBbUIsRUFBUyxlQUFnQztRQUFwRixPQUFFLEdBQUYsRUFBRSxDQUFZO1FBQVUsYUFBUSxHQUFSLFFBQVEsQ0FBVztRQUFTLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjtJQUFHLENBQUM7Ozs7SUFhckYsOENBQU87OztJQUE5QjtRQUNFLElBQUksQ0FBQyxTQUFTLENBQ1osSUFBSSxDQUFDLEdBQUcsRUFDUixJQUFJLENBQUMsV0FBVyxFQUNoQixJQUFJLENBQUMsVUFBVSxFQUNmLElBQUksQ0FBQyxLQUFLLEVBQ1YsSUFBSSxDQUFDLFNBQVMsRUFDZCxJQUFJLENBQUMsSUFBSSxFQUNULElBQUksQ0FBQyxNQUFNLEVBQ1gsSUFBSSxDQUFDLFlBQVksRUFDakIsSUFBSSxDQUFDLFlBQVksQ0FDbEIsQ0FBQztJQUNKLENBQUM7Ozs7O0lBRWtDLDhDQUFPOzs7O0lBQTFDLFVBQTJDLEtBQUs7UUFDOUMsSUFBSSxJQUFJLENBQUMsR0FBRyxLQUFLLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLEdBQUcsRUFBRTtZQUMxQyxJQUFJLENBQUMsR0FBRyxHQUFHLElBQUksQ0FBQyxFQUFFLENBQUMsYUFBYSxDQUFDLEdBQUcsQ0FBQztTQUN0QztRQUNELElBQUksSUFBSSxDQUFDLFdBQVcsRUFBRTtZQUNwQixJQUFJLENBQUMsUUFBUSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsRUFBRSxLQUFLLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1NBQzVFO0lBQ0gsQ0FBQzs7OztJQUVELCtDQUFROzs7SUFBUjtRQUNFLElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRSxDQUFDLGFBQWEsQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLEVBQUU7WUFDOUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQyxhQUFhLEVBQUUsS0FBSyxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUNwRTtJQUNILENBQUM7Ozs7Ozs7Ozs7Ozs7SUFFSyxnREFBUzs7Ozs7Ozs7Ozs7O0lBQWYsVUFDRSxHQUFXLEVBQ1gsV0FBd0IsRUFDeEIsVUFBdUIsRUFDdkIsS0FBa0IsRUFDbEIsU0FBc0IsRUFDdEIsSUFBaUIsRUFDakIsTUFBdUIsRUFDdkIsWUFBeUIsRUFDekIsWUFBNEI7UUFQNUIsNEJBQUEsRUFBQSxnQkFBd0I7UUFDeEIsMkJBQUEsRUFBQSxlQUF1QjtRQUN2QixzQkFBQSxFQUFBLFVBQWtCO1FBQ2xCLDBCQUFBLEVBQUEsY0FBc0I7UUFDdEIscUJBQUEsRUFBQSxTQUFpQjtRQUNqQix1QkFBQSxFQUFBLGVBQXVCO1FBQ3ZCLDZCQUFBLEVBQUEsaUJBQXlCO1FBQ3pCLDZCQUFBLEVBQUEsbUJBQTRCOzs7Ozs0QkFFZCxxQkFBTSxJQUFJLENBQUMsZUFBZSxDQUFDLE1BQU0sQ0FBQzs0QkFDOUMsU0FBUyxFQUFFLG9CQUFvQjs0QkFDL0IsY0FBYyxFQUFFO2dDQUNkLEdBQUcsS0FBQTtnQ0FDSCxXQUFXLGFBQUE7Z0NBQ1gsVUFBVSxZQUFBO2dDQUNWLEtBQUssT0FBQTtnQ0FDTCxTQUFTLFdBQUE7Z0NBQ1QsSUFBSSxNQUFBO2dDQUNKLE1BQU0sUUFBQTtnQ0FDTixZQUFZLGNBQUE7Z0NBQ1osWUFBWSxjQUFBOzZCQUNiOzRCQUNELFFBQVEsRUFBRSxJQUFJLENBQUMsUUFBUSxZQUFZLEtBQUssQ0FBQyxDQUFDLG1CQUFFLGdCQUFnQixHQUFLLElBQUksQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDLENBQUMsZ0JBQWdCLEVBQUUsSUFBSSxDQUFDLFFBQVEsQ0FBQzs0QkFDbkgsYUFBYSxFQUFFLElBQUk7NEJBQ25CLFlBQVksRUFBRSxJQUFJO3lCQUNuQixDQUFDLEVBQUE7O3dCQWhCSSxLQUFLLEdBQUcsU0FnQlo7d0JBRUsscUJBQU0sS0FBSyxDQUFDLE9BQU8sRUFBRSxFQUFBOzRCQUE1QixzQkFBTyxTQUFxQixFQUFDOzs7O0tBQzlCOztnQkE1RUYsU0FBUyxTQUFDO29CQUNULFFBQVEsRUFBRSxnQkFBZ0I7aUJBQzNCOzs7O2dCQU5tQixVQUFVO2dCQUF1QixTQUFTO2dCQUNyRCxlQUFlOzs7MkJBU3JCLEtBQUs7eUJBQ0wsS0FBSzsrQkFDTCxLQUFLO3NCQUNMLEtBQUs7OEJBQ0wsS0FBSzs2QkFDTCxLQUFLOytCQUNMLEtBQUs7dUJBQ0wsS0FBSzt3QkFDTCxLQUFLOzRCQUNMLEtBQUs7MEJBRUwsWUFBWSxTQUFDLE9BQU87MEJBY3BCLFlBQVksU0FBQyxPQUFPLEVBQUUsQ0FBQyxRQUFRLENBQUM7O0lBOENuQyxtQ0FBQztDQUFBLEFBN0VELElBNkVDO1NBMUVZLDRCQUE0Qjs7O0lBR3ZDLGdEQUFzQzs7SUFDdEMsOENBQXlCOztJQUN6QixvREFBK0I7O0lBQy9CLDJDQUFxQjs7SUFDckIsbURBQThCOztJQUM5QixrREFBNkI7O0lBQzdCLG9EQUFnQzs7SUFDaEMsNENBQXVCOztJQUN2Qiw2Q0FBd0I7O0lBQ3hCLGlEQUE0Qjs7Ozs7SUFYaEIsMENBQXNCOzs7OztJQUFFLGdEQUEyQjs7SUFBRSx1REFBdUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEaXJlY3RpdmUsIEVsZW1lbnRSZWYsIEhvc3RMaXN0ZW5lciwgSW5wdXQsIFJlbmRlcmVyMiwgT25Jbml0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBNb2RhbENvbnRyb2xsZXIgfSBmcm9tICdAaW9uaWMvYW5ndWxhcic7XG5pbXBvcnQgeyBWaWV3ZXJNb2RhbENvbXBvbmVudCB9IGZyb20gJy4vdmlld2VyLW1vZGFsL3ZpZXdlci1tb2RhbC5jb21wb25lbnQnO1xuXG5ARGlyZWN0aXZlKHtcbiAgc2VsZWN0b3I6ICdbaW9uSW1nVmlld2VyXSdcbn0pXG5leHBvcnQgY2xhc3MgTmd4SW9uaWNJbWFnZVZpZXdlckRpcmVjdGl2ZSBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgZWw6IEVsZW1lbnRSZWYsIHByaXZhdGUgcmVuZGVyZXI6IFJlbmRlcmVyMiwgcHVibGljIG1vZGFsQ29udHJvbGxlcjogTW9kYWxDb250cm9sbGVyKSB7fVxuXG4gIEBJbnB1dCgpIGNzc0NsYXNzPzogc3RyaW5nIHwgc3RyaW5nW107XG4gIEBJbnB1dCgpIHNjaGVtZT86IHN0cmluZztcbiAgQElucHV0KCkgc2xpZGVPcHRpb25zPzogb2JqZWN0O1xuICBASW5wdXQoKSBzcmM6IHN0cmluZztcbiAgQElucHV0KCkgc3JjRmFsbGJhY2s/OiBzdHJpbmc7XG4gIEBJbnB1dCgpIHNyY0hpZ2hSZXM/OiBzdHJpbmc7XG4gIEBJbnB1dCgpIHN3aXBlVG9DbG9zZT86IGJvb2xlYW47XG4gIEBJbnB1dCgpIHRleHQ/OiBzdHJpbmc7XG4gIEBJbnB1dCgpIHRpdGxlPzogc3RyaW5nO1xuICBASW5wdXQoKSB0aXRsZVNpemU/OiBzdHJpbmc7XG5cbiAgQEhvc3RMaXN0ZW5lcignY2xpY2snKSBvbkNsaWNrKCkge1xuICAgIHRoaXMudmlld0ltYWdlKFxuICAgICAgdGhpcy5zcmMsXG4gICAgICB0aGlzLnNyY0ZhbGxiYWNrLFxuICAgICAgdGhpcy5zcmNIaWdoUmVzLFxuICAgICAgdGhpcy50aXRsZSxcbiAgICAgIHRoaXMudGl0bGVTaXplLFxuICAgICAgdGhpcy50ZXh0LFxuICAgICAgdGhpcy5zY2hlbWUsXG4gICAgICB0aGlzLnNsaWRlT3B0aW9ucyxcbiAgICAgIHRoaXMuc3dpcGVUb0Nsb3NlXG4gICAgKTtcbiAgfVxuXG4gIEBIb3N0TGlzdGVuZXIoJ2Vycm9yJywgWyckZXZlbnQnXSkgb25FcnJvcihlcnJvcikge1xuICAgIGlmICh0aGlzLnNyYyAhPT0gdGhpcy5lbC5uYXRpdmVFbGVtZW50LnNyYykge1xuICAgICAgdGhpcy5zcmMgPSB0aGlzLmVsLm5hdGl2ZUVsZW1lbnQuc3JjO1xuICAgIH1cbiAgICBpZiAodGhpcy5zcmNGYWxsYmFjaykge1xuICAgICAgdGhpcy5yZW5kZXJlci5zZXRBdHRyaWJ1dGUodGhpcy5lbC5uYXRpdmVFbGVtZW50LCAnc3JjJywgdGhpcy5zcmNGYWxsYmFjayk7XG4gICAgfVxuICB9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgaWYgKCF0aGlzLmVsLm5hdGl2ZUVsZW1lbnQuaGFzQXR0cmlidXRlKCdzcmMnKSkge1xuICAgICAgdGhpcy5yZW5kZXJlci5zZXRBdHRyaWJ1dGUodGhpcy5lbC5uYXRpdmVFbGVtZW50LCAnc3JjJywgdGhpcy5zcmMpO1xuICAgIH1cbiAgfVxuXG4gIGFzeW5jIHZpZXdJbWFnZShcbiAgICBzcmM6IHN0cmluZyxcbiAgICBzcmNGYWxsYmFjazogc3RyaW5nID0gJycsXG4gICAgc3JjSGlnaFJlczogc3RyaW5nID0gJycsXG4gICAgdGl0bGU6IHN0cmluZyA9ICcnLFxuICAgIHRpdGxlU2l6ZTogc3RyaW5nID0gJycsXG4gICAgdGV4dDogc3RyaW5nID0gJycsXG4gICAgc2NoZW1lOiBzdHJpbmcgPSAnYXV0bycsXG4gICAgc2xpZGVPcHRpb25zOiBvYmplY3QgPSB7fSxcbiAgICBzd2lwZVRvQ2xvc2U6IGJvb2xlYW4gPSB0cnVlXG4gICkge1xuICAgIGNvbnN0IG1vZGFsID0gYXdhaXQgdGhpcy5tb2RhbENvbnRyb2xsZXIuY3JlYXRlKHtcbiAgICAgIGNvbXBvbmVudDogVmlld2VyTW9kYWxDb21wb25lbnQsXG4gICAgICBjb21wb25lbnRQcm9wczoge1xuICAgICAgICBzcmMsXG4gICAgICAgIHNyY0ZhbGxiYWNrLFxuICAgICAgICBzcmNIaWdoUmVzLFxuICAgICAgICB0aXRsZSxcbiAgICAgICAgdGl0bGVTaXplLFxuICAgICAgICB0ZXh0LFxuICAgICAgICBzY2hlbWUsXG4gICAgICAgIHNsaWRlT3B0aW9ucyxcbiAgICAgICAgc3dpcGVUb0Nsb3NlXG4gICAgICB9LFxuICAgICAgY3NzQ2xhc3M6IHRoaXMuY3NzQ2xhc3MgaW5zdGFuY2VvZiBBcnJheSA/IFsnaW9uLWltZy12aWV3ZXInLCAuLi50aGlzLmNzc0NsYXNzXSA6IFsnaW9uLWltZy12aWV3ZXInLCB0aGlzLmNzc0NsYXNzXSxcbiAgICAgIGtleWJvYXJkQ2xvc2U6IHRydWUsXG4gICAgICBzaG93QmFja2Ryb3A6IHRydWVcbiAgICB9KTtcblxuICAgIHJldHVybiBhd2FpdCBtb2RhbC5wcmVzZW50KCk7XG4gIH1cbn1cbiJdfQ==