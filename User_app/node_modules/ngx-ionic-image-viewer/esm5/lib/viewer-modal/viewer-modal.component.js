/**
 * @fileoverview added by tsickle
 * Generated from: lib/viewer-modal/viewer-modal.component.ts
 * @suppress {checkTypes,constantProperty,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, Input, ViewChild } from '@angular/core';
import { ModalController, IonSlides } from '@ionic/angular';
var ViewerModalComponent = /** @class */ (function () {
    function ViewerModalComponent(modalController) {
        this.modalController = modalController;
        // tslint:disable: no-inferrable-types
        this.alt = '';
        this.scheme = 'auto';
        this.slideOptions = {};
        this.srcFallback = '';
        this.srcHighRes = '';
        this.swipeToClose = true;
        this.text = '';
        this.title = '';
        this.titleSize = '';
        // tslint:enable: no-inferrable-types
        this.defaultSlideOptions = {
            centeredSlides: true,
            passiveListeners: false,
            zoom: {
                enabled: true,
            },
        };
        this.options = {};
        this.swipeState = {
            phase: 'init',
            direction: 'none',
            swipeType: 'none',
            startX: 0,
            startY: 0,
            distance: 0,
            distanceX: 0,
            distanceY: 0,
            threshold: 150,
            // required min distance traveled to be considered swipe
            restraint: 100,
            // maximum distance allowed at the same time in perpendicular direction
            allowedTime: 500,
            // maximum time allowed to travel that distance
            elapsedTime: 0,
            startTime: 0,
        };
    }
    /**
     * @return {?}
     */
    ViewerModalComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var swiper;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.options = tslib_1.__assign({}, this.defaultSlideOptions, this.slideOptions);
                        this.src = this.srcHighRes || this.src;
                        this.setStyle();
                        this.setScheme(this.scheme);
                        this.initSwipeToClose(this.swipeToClose);
                        return [4 /*yield*/, this.slides.getSwiper()];
                    case 1:
                        swiper = _a.sent();
                        swiper.appendSlide("<ion-slide><img alt=\"" + this.alt + "\" src=\"" + this.src + "\" onerror=\"this.src='" + this.srcFallback + "'\"/></ion-slide>");
                        return [2 /*return*/];
                }
            });
        });
    };
    /**
     * @return {?}
     */
    ViewerModalComponent.prototype.setStyle = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var el = document.querySelector('.ion-img-viewer');
        el.style.setProperty('--height', '100%');
        el.style.setProperty('--width', '100%');
        el.style.setProperty('--border-radius', '0');
    };
    /**
     * @param {?} scheme
     * @return {?}
     */
    ViewerModalComponent.prototype.setScheme = /**
     * @param {?} scheme
     * @return {?}
     */
    function (scheme) {
        if (scheme === 'auto') {
            return;
        }
        /** @type {?} */
        var el = document.querySelector('.ion-img-viewer');
        if (this.scheme === 'light') {
            el.style.setProperty('--ion-background-color', '#ffffff');
            el.style.setProperty('--ion-background-color-rgb', '255, 255, 255');
            el.style.setProperty('--ion-text-color', '#000');
            el.style.setProperty('--ion-text-color-rgb', '0,0,0');
        }
        if (this.scheme === 'dark') {
            if (el.classList.contains('ios')) {
                el.style.setProperty('--ion-background-color', '#000000');
                el.style.setProperty('--ion-background-color-rgb', '0, 0, 0');
            }
            else {
                el.style.setProperty('--ion-background-color', '#121212');
                el.style.setProperty('--ion-background-color-rgb', '18,18,18');
            }
            el.style.setProperty('--ion-text-color', '#ffffff');
            el.style.setProperty('--ion-text-color-rgb', '255,255,255');
        }
    };
    /**
     * @see http://www.javascriptkit.com/javatutors/touchevents3.shtml
     */
    /**
     * @see http://www.javascriptkit.com/javatutors/touchevents3.shtml
     * @param {?=} isActive
     * @return {?}
     */
    ViewerModalComponent.prototype.initSwipeToClose = /**
     * @see http://www.javascriptkit.com/javatutors/touchevents3.shtml
     * @param {?=} isActive
     * @return {?}
     */
    function (isActive) {
        var _this = this;
        if (isActive === void 0) { isActive = true; }
        if (!isActive) {
            return;
        }
        /** @type {?} */
        var el = document.querySelector('ion-modal');
        el.addEventListener('mousedown', (/**
         * @param {?} event
         * @return {?}
         */
        function (event) { return _this.swipeStart(event); }), true);
        el.addEventListener('mousemove', (/**
         * @param {?} event
         * @return {?}
         */
        function (event) { return _this.swipeMove(event); }), true);
        el.addEventListener('mouseup', (/**
         * @param {?} event
         * @return {?}
         */
        function (event) { return _this.swipeEnd(event); }), true);
        el.addEventListener('touchstart', (/**
         * @param {?} event
         * @return {?}
         */
        function (event) { return _this.swipeStart(event); }), true);
        el.addEventListener('touchmove', (/**
         * @param {?} event
         * @return {?}
         */
        function (event) { return _this.swipeMove(event); }), true);
        el.addEventListener('touchend', (/**
         * @param {?} event
         * @return {?}
         */
        function (event) { return _this.swipeEnd(event); }), true);
        this.modalController.getTop().then((/**
         * @param {?} modal
         * @return {?}
         */
        function (modal) {
            modal.onWillDismiss().then((/**
             * @return {?}
             */
            function () {
                document.removeEventListener('mousedown', _this.swipeStart, true);
                document.removeEventListener('mousemove', _this.swipeMove, true);
                document.removeEventListener('mouseup', _this.swipeMove, true);
                document.removeEventListener('touchstart', _this.swipeStart, true);
                document.removeEventListener('touchmove', _this.swipeMove, true);
                document.removeEventListener('touchend', _this.swipeMove, true);
            }));
        }));
    };
    /**
     * @param {?} event
     * @return {?}
     */
    ViewerModalComponent.prototype.swipeStart = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        var _a = event.type === 'touchstart' ? event.changedTouches[0] : event, pageX = _a.pageX, pageY = _a.pageY;
        this.swipeState = tslib_1.__assign({}, this.swipeState, { phase: 'start', direction: 'none', distance: 0, startX: pageX, startY: pageY, startTime: new Date().getTime() });
    };
    /**
     * @param {?} event
     * @return {?}
     */
    ViewerModalComponent.prototype.swipeMove = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (this.swipeState.phase === 'none') {
            return;
        }
        var _a = event.type === 'touchmove' ? event.changedTouches[0] : event, pageX = _a.pageX, pageY = _a.pageY;
        // get horizontal dist traveled by finger while in contact with surface
        /** @type {?} */
        var distanceX = pageX - this.swipeState.startX;
        // get vertical dist traveled by finger while in contact with surface
        /** @type {?} */
        var distanceY = pageY - this.swipeState.startY;
        /** @type {?} */
        var direction;
        /** @type {?} */
        var distance;
        if (Math.abs(distanceX) > Math.abs(distanceY)) {
            // if distance traveled horizontally is greater than vertically, consider this a horizontal swipe
            direction = distanceX < 0 ? 'left' : 'right';
            distance = distanceX;
        }
        else {
            // else consider this a vertical swipe
            direction = distanceY < 0 ? 'up' : 'down';
            distance = distanceY;
        }
        this.swipeState = tslib_1.__assign({}, this.swipeState, { phase: 'move', direction: direction,
            distance: distance,
            distanceX: distanceX,
            distanceY: distanceY });
        event.preventDefault();
    };
    /**
     * @param {?} event
     * @return {?}
     */
    ViewerModalComponent.prototype.swipeEnd = /**
     * @param {?} event
     * @return {?}
     */
    function (event) {
        if (this.swipeState.phase === 'none') {
            return;
        }
        var _a = this.swipeState, allowedTime = _a.allowedTime, direction = _a.direction, restraint = _a.restraint, startTime = _a.startTime, threshold = _a.threshold, distanceX = _a.distanceX, distanceY = _a.distanceY;
        /** @type {?} */
        var swipeType;
        /** @type {?} */
        var elapsedTime = new Date().getTime() - startTime;
        if (elapsedTime <= allowedTime) {
            // first condition for a swipe met
            if (Math.abs(distanceX) >= threshold && Math.abs(distanceY) <= restraint) {
                // 2nd condition for horizontal swipe met
                swipeType = direction; // set swipeType to either "left" or "right"
            }
            else if (Math.abs(distanceY) >= threshold && Math.abs(distanceX) <= restraint) {
                // 2nd condition for vertical swipe met
                swipeType = direction; // set swipeType to either "top" or "down"
            }
        }
        this.swipeState = tslib_1.__assign({}, this.swipeState, { phase: 'end', swipeType: swipeType });
        if (swipeType === 'down') {
            return this.closeModal();
        }
    };
    /**
     * @return {?}
     */
    ViewerModalComponent.prototype.closeModal = /**
     * @return {?}
     */
    function () {
        this.modalController.dismiss();
    };
    ViewerModalComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ion-viewer-modal',
                    template: "<ion-header [ngClass]=\"{ 'no-title': title.length <= 0 }\">\n  <ion-toolbar>\n    <ion-buttons slot=\"primary\">\n      <ion-button (click)=\"closeModal()\">\n        <ion-icon slot=\"icon-only\" name=\"close\"></ion-icon>\n      </ion-button>\n    </ion-buttons>\n    <ion-title [size]=\"titleSize\">{{ title }}</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content [forceOverscroll]=\"false\">\n  <ion-slides [options]=\"options\" #sliderRef>\n    <!-- <ion-slide>\n      <div class=\"swiper-zoom-container\">\n        <img [alt]=\"this.alt\" [src]=\"this.src\" (error)=\"onError($event)\" />\n      </div>\n    </ion-slide> -->\n  </ion-slides>\n</ion-content>\n\n<ion-footer [ngClass]=\"{ 'no-text': text.length <= 0 }\">\n  <ion-toolbar class=\"ion-text-center\">\n    <ion-text>{{ text }}</ion-text>\n  </ion-toolbar>\n</ion-footer>\n",
                    styles: ["ion-slides{--height:100%;height:100%}ion-toolbar{--border-style:none;--background:rgba(var(--ion-background-color-rgb, (255, 255, 255)), 0.6);background:rgba(var(--ion-background-color-rgb,255,255,255),.6)}ion-header{opacity:1;position:absolute}ion-header.no-title:after{content:none}ion-header.no-title ion-toolbar{--background:rgba(0, 0, 0, 0);background:rgba(0,0,0,0)}ion-footer{position:absolute;bottom:0}ion-footer.no-text:before{content:none}ion-footer.no-text ion-toolbar{--background:rgba(0, 0, 0, 0);background:rgba(0,0,0,0)}"]
                }] }
    ];
    /** @nocollapse */
    ViewerModalComponent.ctorParameters = function () { return [
        { type: ModalController }
    ]; };
    ViewerModalComponent.propDecorators = {
        alt: [{ type: Input }],
        scheme: [{ type: Input }],
        slideOptions: [{ type: Input }],
        src: [{ type: Input }],
        srcFallback: [{ type: Input }],
        srcHighRes: [{ type: Input }],
        swipeToClose: [{ type: Input }],
        text: [{ type: Input }],
        title: [{ type: Input }],
        titleSize: [{ type: Input }],
        slides: [{ type: ViewChild, args: ['sliderRef', { static: true },] }]
    };
    return ViewerModalComponent;
}());
export { ViewerModalComponent };
if (false) {
    /** @type {?} */
    ViewerModalComponent.prototype.alt;
    /** @type {?} */
    ViewerModalComponent.prototype.scheme;
    /** @type {?} */
    ViewerModalComponent.prototype.slideOptions;
    /** @type {?} */
    ViewerModalComponent.prototype.src;
    /** @type {?} */
    ViewerModalComponent.prototype.srcFallback;
    /** @type {?} */
    ViewerModalComponent.prototype.srcHighRes;
    /** @type {?} */
    ViewerModalComponent.prototype.swipeToClose;
    /** @type {?} */
    ViewerModalComponent.prototype.text;
    /** @type {?} */
    ViewerModalComponent.prototype.title;
    /** @type {?} */
    ViewerModalComponent.prototype.titleSize;
    /** @type {?} */
    ViewerModalComponent.prototype.defaultSlideOptions;
    /** @type {?} */
    ViewerModalComponent.prototype.options;
    /** @type {?} */
    ViewerModalComponent.prototype.swipeState;
    /** @type {?} */
    ViewerModalComponent.prototype.slides;
    /**
     * @type {?}
     * @private
     */
    ViewerModalComponent.prototype.modalController;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidmlld2VyLW1vZGFsLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1pb25pYy1pbWFnZS12aWV3ZXIvIiwic291cmNlcyI6WyJsaWIvdmlld2VyLW1vZGFsL3ZpZXdlci1tb2RhbC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsT0FBTyxFQUFFLFNBQVMsRUFBVSxLQUFLLEVBQUUsU0FBUyxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3BFLE9BQU8sRUFBRSxlQUFlLEVBQUUsU0FBUyxFQUFFLE1BQU0sZ0JBQWdCLENBQUM7QUFFNUQ7SUErQ0UsOEJBQW9CLGVBQWdDO1FBQWhDLG9CQUFlLEdBQWYsZUFBZSxDQUFpQjs7UUF4QzNDLFFBQUcsR0FBWSxFQUFFLENBQUM7UUFDbEIsV0FBTSxHQUFZLE1BQU0sQ0FBQztRQUN6QixpQkFBWSxHQUFZLEVBQUUsQ0FBQztRQUUzQixnQkFBVyxHQUFZLEVBQUUsQ0FBQztRQUMxQixlQUFVLEdBQVksRUFBRSxDQUFDO1FBQ3pCLGlCQUFZLEdBQWEsSUFBSSxDQUFDO1FBQzlCLFNBQUksR0FBWSxFQUFFLENBQUM7UUFDbkIsVUFBSyxHQUFZLEVBQUUsQ0FBQztRQUNwQixjQUFTLEdBQVksRUFBRSxDQUFDOztRQUdqQyx3QkFBbUIsR0FBRztZQUNwQixjQUFjLEVBQUUsSUFBSTtZQUNwQixnQkFBZ0IsRUFBRSxLQUFLO1lBQ3ZCLElBQUksRUFBRTtnQkFDSixPQUFPLEVBQUUsSUFBSTthQUNkO1NBQ0YsQ0FBQztRQUVGLFlBQU8sR0FBRyxFQUFFLENBQUM7UUFFYixlQUFVLEdBQUc7WUFDWCxLQUFLLEVBQUUsTUFBTTtZQUNiLFNBQVMsRUFBRSxNQUFNO1lBQ2pCLFNBQVMsRUFBRSxNQUFNO1lBQ2pCLE1BQU0sRUFBRSxDQUFDO1lBQ1QsTUFBTSxFQUFFLENBQUM7WUFDVCxRQUFRLEVBQUUsQ0FBQztZQUNYLFNBQVMsRUFBRSxDQUFDO1lBQ1osU0FBUyxFQUFFLENBQUM7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OzZCQUNMLEtBQUs7K0JBQ0wsS0FBSzt1QkFDTCxLQUFLO3dCQUNMLEtBQUs7NEJBQ0wsS0FBSzt5QkE2QkwsU0FBUyxTQUFDLFdBQVcsRUFBRSxFQUFFLE1BQU0sRUFBRSxJQUFJLEVBQUU7O0lBaUsxQywyQkFBQztDQUFBLEFBOU1ELElBOE1DO1NBek1ZLG9CQUFvQjs7O0lBRS9CLG1DQUEyQjs7SUFDM0Isc0NBQWtDOztJQUNsQyw0Q0FBb0M7O0lBQ3BDLG1DQUFxQjs7SUFDckIsMkNBQW1DOztJQUNuQywwQ0FBa0M7O0lBQ2xDLDRDQUF1Qzs7SUFDdkMsb0NBQTRCOztJQUM1QixxQ0FBNkI7O0lBQzdCLHlDQUFpQzs7SUFHakMsbURBTUU7O0lBRUYsdUNBQWE7O0lBRWIsMENBY0U7O0lBRUYsc0NBQTREOzs7OztJQUVoRCwrQ0FBd0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgSW5wdXQsIFZpZXdDaGlsZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgTW9kYWxDb250cm9sbGVyLCBJb25TbGlkZXMgfSBmcm9tICdAaW9uaWMvYW5ndWxhcic7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2lvbi12aWV3ZXItbW9kYWwnLFxuICB0ZW1wbGF0ZVVybDogJy4vdmlld2VyLW1vZGFsLmNvbXBvbmVudC5odG1sJyxcbiAgc3R5bGVVcmxzOiBbJy4vdmlld2VyLW1vZGFsLmNvbXBvbmVudC5zY3NzJ10sXG59KVxuZXhwb3J0IGNsYXNzIFZpZXdlck1vZGFsQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgLy8gdHNsaW50OmRpc2FibGU6IG5vLWluZmVycmFibGUtdHlwZXNcbiAgQElucHV0KCkgYWx0Pzogc3RyaW5nID0gJyc7XG4gIEBJbnB1dCgpIHNjaGVtZT86IHN0cmluZyA9ICdhdXRvJztcbiAgQElucHV0KCkgc2xpZGVPcHRpb25zPzogb2JqZWN0ID0ge307XG4gIEBJbnB1dCgpIHNyYzogc3RyaW5nO1xuICBASW5wdXQoKSBzcmNGYWxsYmFjaz86IHN0cmluZyA9ICcnO1xuICBASW5wdXQoKSBzcmNIaWdoUmVzPzogc3RyaW5nID0gJyc7XG4gIEBJbnB1dCgpIHN3aXBlVG9DbG9zZT86IGJvb2xlYW4gPSB0cnVlO1xuICBASW5wdXQoKSB0ZXh0Pzogc3RyaW5nID0gJyc7XG4gIEBJbnB1dCgpIHRpdGxlPzogc3RyaW5nID0gJyc7XG4gIEBJbnB1dCgpIHRpdGxlU2l6ZT86IHN0cmluZyA9ICcnO1xuICAvLyB0c2xpbnQ6ZW5hYmxlOiBuby1pbmZlcnJhYmxlLXR5cGVzXG5cbiAgZGVmYXVsdFNsaWRlT3B0aW9ucyA9IHtcbiAgICBjZW50ZXJlZFNsaWRlczogdHJ1ZSxcbiAgICBwYXNzaXZlTGlzdGVuZXJzOiBmYWxzZSxcbiAgICB6b29tOiB7XG4gICAgICBlbmFibGVkOiB0cnVlLFxuICAgIH0sXG4gIH07XG5cbiAgb3B0aW9ucyA9IHt9O1xuXG4gIHN3aXBlU3RhdGUgPSB7XG4gICAgcGhhc2U6ICdpbml0JyxcbiAgICBkaXJlY3Rpb246ICdub25lJyxcbiAgICBzd2lwZVR5cGU6ICdub25lJyxcbiAgICBzdGFydFg6IDAsXG4gICAgc3RhcnRZOiAwLFxuICAgIGRpc3RhbmNlOiAwLFxuICAgIGRpc3RhbmNlWDogMCxcbiAgICBkaXN0YW5jZVk6IDAsXG4gICAgdGhyZXNob2xkOiAxNTAsIC8vIHJlcXVpcmVkIG1pbiBkaXN0YW5jZSB0cmF2ZWxlZCB0byBiZSBjb25zaWRlcmVkIHN3aXBlXG4gICAgcmVzdHJhaW50OiAxMDAsIC8vIG1heGltdW0gZGlzdGFuY2UgYWxsb3dlZCBhdCB0aGUgc2FtZSB0aW1lIGluIHBlcnBlbmRpY3VsYXIgZGlyZWN0aW9uXG4gICAgYWxsb3dlZFRpbWU6IDUwMCwgLy8gbWF4aW11bSB0aW1lIGFsbG93ZWQgdG8gdHJhdmVsIHRoYXQgZGlzdGFuY2VcbiAgICBlbGFwc2VkVGltZTogMCxcbiAgICBzdGFydFRpbWU6IDAsXG4gIH07XG5cbiAgQFZpZXdDaGlsZCgnc2xpZGVyUmVmJywgeyBzdGF0aWM6IHRydWUgfSkgc2xpZGVzOiBJb25TbGlkZXM7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBtb2RhbENvbnRyb2xsZXI6IE1vZGFsQ29udHJvbGxlcikge31cblxuICBhc3luYyBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLm9wdGlvbnMgPSB7IC4uLnRoaXMuZGVmYXVsdFNsaWRlT3B0aW9ucywgLi4udGhpcy5zbGlkZU9wdGlvbnMgfTtcbiAgICB0aGlzLnNyYyA9IHRoaXMuc3JjSGlnaFJlcyB8fCB0aGlzLnNyYztcbiAgICB0aGlzLnNldFN0eWxlKCk7XG4gICAgdGhpcy5zZXRTY2hlbWUodGhpcy5zY2hlbWUpO1xuICAgIHRoaXMuaW5pdFN3aXBlVG9DbG9zZSh0aGlzLnN3aXBlVG9DbG9zZSk7XG5cbiAgICAvKipcbiAgICAgKiBDdXJyZW50IFdvcmthcm91bmRcbiAgICAgKiBTZWUgcmVwb3J0ZWQgYnVnOiBodHRwczovL2dpdGh1Yi5jb20vaW9uaWMtdGVhbS9pb25pYy9pc3N1ZXMvMTk2MzgjaXNzdWVjb21tZW50LTU4NDgyODMxNVxuICAgICAqIEhpbnQ6IENvbW1lbnQgaW4gJzxpb24tc2xpZGU+JyBpbiBjb21wb25lbnRcbiAgICAgKi9cbiAgICBjb25zdCBzd2lwZXIgPSBhd2FpdCB0aGlzLnNsaWRlcy5nZXRTd2lwZXIoKTtcbiAgICBzd2lwZXIuYXBwZW5kU2xpZGUoYDxpb24tc2xpZGU+PGltZyBhbHQ9XCIke3RoaXMuYWx0fVwiIHNyYz1cIiR7dGhpcy5zcmN9XCIgb25lcnJvcj1cInRoaXMuc3JjPScke3RoaXMuc3JjRmFsbGJhY2t9J1wiLz48L2lvbi1zbGlkZT5gKTtcbiAgfVxuXG4gIHNldFN0eWxlKCkge1xuICAgIGNvbnN0IGVsOiBIVE1MRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pb24taW1nLXZpZXdlcicpO1xuICAgIGVsLnN0eWxlLnNldFByb3BlcnR5KCctLWhlaWdodCcsICcxMDAlJyk7XG4gICAgZWwuc3R5bGUuc2V0UHJvcGVydHkoJy0td2lkdGgnLCAnMTAwJScpO1xuICAgIGVsLnN0eWxlLnNldFByb3BlcnR5KCctLWJvcmRlci1yYWRpdXMnLCAnMCcpO1xuICB9XG5cbiAgc2V0U2NoZW1lKHNjaGVtZTogc3RyaW5nKSB7XG4gICAgaWYgKHNjaGVtZSA9PT0gJ2F1dG8nKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgY29uc3QgZWw6IEhUTUxFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmlvbi1pbWctdmlld2VyJyk7XG5cbiAgICBpZiAodGhpcy5zY2hlbWUgPT09ICdsaWdodCcpIHtcbiAgICAgIGVsLnN0eWxlLnNldFByb3BlcnR5KCctLWlvbi1iYWNrZ3JvdW5kLWNvbG9yJywgJyNmZmZmZmYnKTtcbiAgICAgIGVsLnN0eWxlLnNldFByb3BlcnR5KCctLWlvbi1iYWNrZ3JvdW5kLWNvbG9yLXJnYicsICcyNTUsIDI1NSwgMjU1Jyk7XG4gICAgICBlbC5zdHlsZS5zZXRQcm9wZXJ0eSgnLS1pb24tdGV4dC1jb2xvcicsICcjMDAwJyk7XG4gICAgICBlbC5zdHlsZS5zZXRQcm9wZXJ0eSgnLS1pb24tdGV4dC1jb2xvci1yZ2InLCAnMCwwLDAnKTtcbiAgICB9XG5cbiAgICBpZiAodGhpcy5zY2hlbWUgPT09ICdkYXJrJykge1xuICAgICAgaWYgKGVsLmNsYXNzTGlzdC5jb250YWlucygnaW9zJykpIHtcbiAgICAgICAgZWwuc3R5bGUuc2V0UHJvcGVydHkoJy0taW9uLWJhY2tncm91bmQtY29sb3InLCAnIzAwMDAwMCcpO1xuICAgICAgICBlbC5zdHlsZS5zZXRQcm9wZXJ0eSgnLS1pb24tYmFja2dyb3VuZC1jb2xvci1yZ2InLCAnMCwgMCwgMCcpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZWwuc3R5bGUuc2V0UHJvcGVydHkoJy0taW9uLWJhY2tncm91bmQtY29sb3InLCAnIzEyMTIxMicpO1xuICAgICAgICBlbC5zdHlsZS5zZXRQcm9wZXJ0eSgnLS1pb24tYmFja2dyb3VuZC1jb2xvci1yZ2InLCAnMTgsMTgsMTgnKTtcbiAgICAgIH1cbiAgICAgIGVsLnN0eWxlLnNldFByb3BlcnR5KCctLWlvbi10ZXh0LWNvbG9yJywgJyNmZmZmZmYnKTtcbiAgICAgIGVsLnN0eWxlLnNldFByb3BlcnR5KCctLWlvbi10ZXh0LWNvbG9yLXJnYicsICcyNTUsMjU1LDI1NScpO1xuICAgIH1cbiAgfVxuXG4gIC8qKlxuICAgKiBAc2VlIGh0dHA6Ly93d3cuamF2YXNjcmlwdGtpdC5jb20vamF2YXR1dG9ycy90b3VjaGV2ZW50czMuc2h0bWxcbiAgICovXG4gIGluaXRTd2lwZVRvQ2xvc2UoaXNBY3RpdmU6IGJvb2xlYW4gPSB0cnVlKSB7XG4gICAgaWYgKCFpc0FjdGl2ZSkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGNvbnN0IGVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaW9uLW1vZGFsJyk7XG4gICAgZWwuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgKGV2ZW50KSA9PiB0aGlzLnN3aXBlU3RhcnQoZXZlbnQpLCB0cnVlKTtcbiAgICBlbC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCAoZXZlbnQpID0+IHRoaXMuc3dpcGVNb3ZlKGV2ZW50KSwgdHJ1ZSk7XG4gICAgZWwuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIChldmVudCkgPT4gdGhpcy5zd2lwZUVuZChldmVudCksIHRydWUpO1xuICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNoc3RhcnQnLCAoZXZlbnQpID0+IHRoaXMuc3dpcGVTdGFydChldmVudCksIHRydWUpO1xuICAgIGVsLmFkZEV2ZW50TGlzdGVuZXIoJ3RvdWNobW92ZScsIChldmVudCkgPT4gdGhpcy5zd2lwZU1vdmUoZXZlbnQpLCB0cnVlKTtcbiAgICBlbC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaGVuZCcsIChldmVudCkgPT4gdGhpcy5zd2lwZUVuZChldmVudCksIHRydWUpO1xuXG4gICAgdGhpcy5tb2RhbENvbnRyb2xsZXIuZ2V0VG9wKCkudGhlbigobW9kYWwpID0+IHtcbiAgICAgIG1vZGFsLm9uV2lsbERpc21pc3MoKS50aGVuKCgpID0+IHtcbiAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgdGhpcy5zd2lwZVN0YXJ0LCB0cnVlKTtcbiAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgdGhpcy5zd2lwZU1vdmUsIHRydWUpO1xuICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgdGhpcy5zd2lwZU1vdmUsIHRydWUpO1xuICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaHN0YXJ0JywgdGhpcy5zd2lwZVN0YXJ0LCB0cnVlKTtcbiAgICAgICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigndG91Y2htb3ZlJywgdGhpcy5zd2lwZU1vdmUsIHRydWUpO1xuICAgICAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCd0b3VjaGVuZCcsIHRoaXMuc3dpcGVNb3ZlLCB0cnVlKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgc3dpcGVTdGFydChldmVudCkge1xuICAgIGNvbnN0IHsgcGFnZVgsIHBhZ2VZIH0gPSBldmVudC50eXBlID09PSAndG91Y2hzdGFydCcgPyBldmVudC5jaGFuZ2VkVG91Y2hlc1swXSA6IGV2ZW50O1xuXG4gICAgdGhpcy5zd2lwZVN0YXRlID0ge1xuICAgICAgLi4udGhpcy5zd2lwZVN0YXRlLFxuICAgICAgcGhhc2U6ICdzdGFydCcsXG4gICAgICBkaXJlY3Rpb246ICdub25lJyxcbiAgICAgIGRpc3RhbmNlOiAwLFxuICAgICAgc3RhcnRYOiBwYWdlWCxcbiAgICAgIHN0YXJ0WTogcGFnZVksXG4gICAgICBzdGFydFRpbWU6IG5ldyBEYXRlKCkuZ2V0VGltZSgpLFxuICAgIH07XG4gIH1cblxuICBzd2lwZU1vdmUoZXZlbnQpIHtcbiAgICBpZiAodGhpcy5zd2lwZVN0YXRlLnBoYXNlID09PSAnbm9uZScpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgeyBwYWdlWCwgcGFnZVkgfSA9IGV2ZW50LnR5cGUgPT09ICd0b3VjaG1vdmUnID8gZXZlbnQuY2hhbmdlZFRvdWNoZXNbMF0gOiBldmVudDtcbiAgICAvLyBnZXQgaG9yaXpvbnRhbCBkaXN0IHRyYXZlbGVkIGJ5IGZpbmdlciB3aGlsZSBpbiBjb250YWN0IHdpdGggc3VyZmFjZVxuICAgIGNvbnN0IGRpc3RhbmNlWCA9IHBhZ2VYIC0gdGhpcy5zd2lwZVN0YXRlLnN0YXJ0WDtcbiAgICAvLyBnZXQgdmVydGljYWwgZGlzdCB0cmF2ZWxlZCBieSBmaW5nZXIgd2hpbGUgaW4gY29udGFjdCB3aXRoIHN1cmZhY2VcbiAgICBjb25zdCBkaXN0YW5jZVkgPSBwYWdlWSAtIHRoaXMuc3dpcGVTdGF0ZS5zdGFydFk7XG4gICAgbGV0IGRpcmVjdGlvbjtcbiAgICBsZXQgZGlzdGFuY2U7XG5cbiAgICBpZiAoTWF0aC5hYnMoZGlzdGFuY2VYKSA+IE1hdGguYWJzKGRpc3RhbmNlWSkpIHtcbiAgICAgIC8vIGlmIGRpc3RhbmNlIHRyYXZlbGVkIGhvcml6b250YWxseSBpcyBncmVhdGVyIHRoYW4gdmVydGljYWxseSwgY29uc2lkZXIgdGhpcyBhIGhvcml6b250YWwgc3dpcGVcbiAgICAgIGRpcmVjdGlvbiA9IGRpc3RhbmNlWCA8IDAgPyAnbGVmdCcgOiAncmlnaHQnO1xuICAgICAgZGlzdGFuY2UgPSBkaXN0YW5jZVg7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIGVsc2UgY29uc2lkZXIgdGhpcyBhIHZlcnRpY2FsIHN3aXBlXG4gICAgICBkaXJlY3Rpb24gPSBkaXN0YW5jZVkgPCAwID8gJ3VwJyA6ICdkb3duJztcbiAgICAgIGRpc3RhbmNlID0gZGlzdGFuY2VZO1xuICAgIH1cbiAgICB0aGlzLnN3aXBlU3RhdGUgPSB7XG4gICAgICAuLi50aGlzLnN3aXBlU3RhdGUsXG4gICAgICBwaGFzZTogJ21vdmUnLFxuICAgICAgZGlyZWN0aW9uLFxuICAgICAgZGlzdGFuY2UsXG4gICAgICBkaXN0YW5jZVgsXG4gICAgICBkaXN0YW5jZVksXG4gICAgfTtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICB9XG5cbiAgc3dpcGVFbmQoZXZlbnQpIHtcbiAgICBpZiAodGhpcy5zd2lwZVN0YXRlLnBoYXNlID09PSAnbm9uZScpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgeyBhbGxvd2VkVGltZSwgZGlyZWN0aW9uLCByZXN0cmFpbnQsIHN0YXJ0VGltZSwgdGhyZXNob2xkLCBkaXN0YW5jZVgsIGRpc3RhbmNlWSB9ID0gdGhpcy5zd2lwZVN0YXRlO1xuICAgIGxldCBzd2lwZVR5cGU7XG5cbiAgICBjb25zdCBlbGFwc2VkVGltZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpIC0gc3RhcnRUaW1lOyAvLyBnZXQgdGltZSBlbGFwc2VkXG4gICAgaWYgKGVsYXBzZWRUaW1lIDw9IGFsbG93ZWRUaW1lKSB7XG4gICAgICAvLyBmaXJzdCBjb25kaXRpb24gZm9yIGEgc3dpcGUgbWV0XG4gICAgICBpZiAoTWF0aC5hYnMoZGlzdGFuY2VYKSA+PSB0aHJlc2hvbGQgJiYgTWF0aC5hYnMoZGlzdGFuY2VZKSA8PSByZXN0cmFpbnQpIHtcbiAgICAgICAgLy8gMm5kIGNvbmRpdGlvbiBmb3IgaG9yaXpvbnRhbCBzd2lwZSBtZXRcbiAgICAgICAgc3dpcGVUeXBlID0gZGlyZWN0aW9uOyAvLyBzZXQgc3dpcGVUeXBlIHRvIGVpdGhlciBcImxlZnRcIiBvciBcInJpZ2h0XCJcbiAgICAgIH0gZWxzZSBpZiAoTWF0aC5hYnMoZGlzdGFuY2VZKSA+PSB0aHJlc2hvbGQgJiYgTWF0aC5hYnMoZGlzdGFuY2VYKSA8PSByZXN0cmFpbnQpIHtcbiAgICAgICAgLy8gMm5kIGNvbmRpdGlvbiBmb3IgdmVydGljYWwgc3dpcGUgbWV0XG4gICAgICAgIHN3aXBlVHlwZSA9IGRpcmVjdGlvbjsgLy8gc2V0IHN3aXBlVHlwZSB0byBlaXRoZXIgXCJ0b3BcIiBvciBcImRvd25cIlxuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuc3dpcGVTdGF0ZSA9IHtcbiAgICAgIC4uLnRoaXMuc3dpcGVTdGF0ZSxcbiAgICAgIHBoYXNlOiAnZW5kJyxcbiAgICAgIHN3aXBlVHlwZSxcbiAgICB9O1xuXG4gICAgaWYgKHN3aXBlVHlwZSA9PT0gJ2Rvd24nKSB7XG4gICAgICByZXR1cm4gdGhpcy5jbG9zZU1vZGFsKCk7XG4gICAgfVxuICB9XG5cbiAgY2xvc2VNb2RhbCgpIHtcbiAgICB0aGlzLm1vZGFsQ29udHJvbGxlci5kaXNtaXNzKCk7XG4gIH1cbn1cbiJdfQ==