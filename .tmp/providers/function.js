import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
export var GlobalFunction = (function () {
    function GlobalFunction(http) {
        this.http = http;
        this.initdownload = 0;
        this.self = this;
        if (/(android)/i.test(navigator.userAgent)) {
            this.admobId = {
                banner: 'ca-app-pub-3715336230214756/9504862623',
                interstitial: 'ca-app-pub-3715336230214756/1981595824'
            };
        }
        else if (/(ipod|iphone|ipad)/i.test(navigator.userAgent)) {
            this.admobId = {
                banner: 'ca-app-pub-3715336230214756/9504862623',
                interstitial: 'ca-app-pub-3715336230214756/1981595824'
            };
        }
    }
    GlobalFunction.prototype.showInterstitial = function () {
        if ((/(ipad|iphone|ipod|android|windows phone)/i.test(navigator.userAgent))) {
            if (AdMob) {
                AdMob.prepareInterstitial({
                    adId: this.admobId.interstitial,
                    autoShow: true
                });
            }
        }
    };
    GlobalFunction.prototype.hideBanner = function () {
        if ((/(ipad|iphone|ipod|android|windows phone)/i.test(navigator.userAgent))) {
            if (AdMob) {
                AdMob.hideBanner();
            }
        }
    };
    GlobalFunction.prototype.createBanner = function () {
        if ((/(ipad|iphone|ipod|android|windows phone)/i.test(navigator.userAgent))) {
            if (AdMob)
                AdMob.createBanner({
                    adId: this.admobId.banner,
                    position: AdMob.AD_POSITION.BOTTOM_CENTER,
                    autoShow: true });
        }
    };
    GlobalFunction.prototype.prepareInterstitial = function () {
        if ((/(ipad|iphone|ipod|android|windows phone)/i.test(navigator.userAgent))) {
            if (AdMob)
                AdMob.prepareInterstitial({ adId: this.admobId.interstitial, autoShow: false });
        }
    };
    GlobalFunction.prototype.saveImageToPhone = function (url, success, error) {
        var self = this;
        if (self.initdownload == 0) {
            self.initdownload = 1;
            var canvas, context, imageDataUrl, imageData;
            var img = new Image();
            img.onload = function () {
                canvas = document.createElement('canvas');
                canvas.width = img.width;
                canvas.height = img.height;
                context = canvas.getContext('2d');
                context.drawImage(img, 0, 0);
                try {
                    imageDataUrl = canvas.toDataURL('image/jpeg', 1.0);
                    imageData = imageDataUrl.replace(/data:image\/jpeg;base64,/, '');
                    cordova.exec(success, error, 'Canvas2ImagePlugin', 'saveImageDataToLibrary', [imageData]);
                    self.initdownload = 0;
                }
                catch (e) {
                    error(e.message);
                    self.initdownload = 0;
                }
            };
            try {
                img.src = url;
                self.initdownload = 0;
            }
            catch (e) {
                self.initdownload = 0;
                error(e.message);
            }
        }
    };
    GlobalFunction.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    GlobalFunction.ctorParameters = [
        { type: Http, },
    ];
    return GlobalFunction;
}());
//# sourceMappingURL=function.js.map