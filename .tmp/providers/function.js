import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
var initdownload = 0;
export var GlobalFunction = (function () {
    function GlobalFunction(http) {
        this.http = http;
        this.isAppForeground = true;
        this.self = this;
    }
    GlobalFunction.prototype.initAds = function () {
        if (admob) {
            var adPublisherIds = {
                ios: {
                    banner: 'ca-app-pub-3715336230214756/9504862623',
                    interstitial: 'ca-app-pub-3715336230214756/1981595824'
                },
                android: {
                    banner: 'ca-app-pub-3715336230214756/9504862623',
                    interstitial: 'ca-app-pub-3715336230214756/1981595824'
                }
            };
            var admobid = (/(android)/i.test(navigator.userAgent)) ? adPublisherIds.android : adPublisherIds.ios;
            admob.setOptions({
                publisherId: admobid.banner,
                interstitialAdId: admobid.interstitial,
                tappxIdiOS: "/120940746/Pub-14193-Android-9360",
                tappxIdAndroid: "/120940746/Pub-14193-Android-9360",
                tappxShare: 0.1,
            });
            this.registerAdEvents();
        }
        else {
        }
    };
    GlobalFunction.prototype.registerAdEvents = function () {
        document.addEventListener(admob.events.onAdLoaded, this.onAdLoaded);
        document.addEventListener(admob.events.onAdFailedToLoad, function (e) { });
        document.addEventListener(admob.events.onAdOpened, function (e) { });
        document.addEventListener(admob.events.onAdClosed, function (e) { });
        document.addEventListener(admob.events.onAdLeftApplication, function (e) { });
        document.addEventListener(admob.events.onInAppPurchaseRequested, function (e) { });
        document.addEventListener("pause", this.onPause, false);
        document.addEventListener("resume", this.onResume, false);
    };
    GlobalFunction.prototype.onAdLoaded = function (e) {
        if (this.isAppForeground) {
            if (e.adType === admob.AD_TYPE.INTERSTITIAL) {
                console.log("An interstitial has been loaded and autoshown. If you want to load the interstitial first and show it later, set 'autoShowInterstitial: false' in admob.setOptions() and call 'admob.showInterstitialAd();' here");
            }
            else if (e.adType === admob.AD_TYPE_BANNER) {
                console.log("New banner received");
            }
        }
    };
    GlobalFunction.prototype.onPause = function () {
        if (this.isAppForeground) {
            admob.destroyBannerView();
            this.isAppForeground = false;
        }
    };
    GlobalFunction.prototype.onResume = function () {
        if (!this.isAppForeground) {
            setTimeout(admob.createBannerView, 1);
            setTimeout(admob.requestInterstitialAd, 1);
            this.isAppForeground = true;
        }
    };
    GlobalFunction.prototype.requestInterstitialAd = function () {
        admob.requestInterstitialAd();
    };
    GlobalFunction.prototype.destroyBannerView = function () {
        admob.destroyBannerView();
    };
    GlobalFunction.prototype.createBannerView = function () {
        admob.createBannerView();
    };
    GlobalFunction.prototype.saveImageToPhone = function (url, success, error) {
        var self = this;
        if (initdownload == 0) {
            initdownload = 1;
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
                    initdownload = 0;
                }
                catch (e) {
                    error(e.message);
                    initdownload = 0;
                }
            };
            try {
                img.src = url;
                initdownload = 0;
            }
            catch (e) {
                initdownload = 0;
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