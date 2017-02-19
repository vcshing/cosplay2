import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import {Headers} from '@angular/http';
declare var admob: any;
declare var cordova: any;

var initdownload=0;
@Injectable()
export class GlobalFunction {
  private admobId: any;
  public isAppForeground=true;
  self=this;


  constructor(public http: Http) {

  }

  initAds() {
        if (admob) {
          var adPublisherIds = {
            ios : {
              banner: 'ca-app-pub-3715336230214756/9504862623',
              interstitial: 'ca-app-pub-3715336230214756/1981595824'
            },
            android : {
              banner: 'ca-app-pub-3715336230214756/9504862623',
              interstitial: 'ca-app-pub-3715336230214756/1981595824'
            }
          };

          var admobid = (/(android)/i.test(navigator.userAgent)) ? adPublisherIds.android : adPublisherIds.ios;

          admob.setOptions({
            publisherId:      admobid.banner,
            interstitialAdId: admobid.interstitial,
            tappxIdiOS:       "/120940746/Pub-14193-Android-9360",
            tappxIdAndroid:   "/120940746/Pub-14193-Android-9360",
            tappxShare:       0.1,
          });

          this.registerAdEvents();

        } else {
          //alert('admobAds plugin not ready');
        }
      }


      registerAdEvents() {
            document.addEventListener(admob.events.onAdLoaded, this.onAdLoaded);
            document.addEventListener(admob.events.onAdFailedToLoad, function (e) {});
            document.addEventListener(admob.events.onAdOpened, function (e) {});
            document.addEventListener(admob.events.onAdClosed, function (e) {});
            document.addEventListener(admob.events.onAdLeftApplication, function (e) {});
            document.addEventListener(admob.events.onInAppPurchaseRequested, function (e) {});

            document.addEventListener("pause", this.onPause, false);
            document.addEventListener("resume", this.onResume, false);
          }



    onAdLoaded(e) {
          if (this.isAppForeground) {
            if (e.adType === admob.AD_TYPE.INTERSTITIAL) {
              console.log("An interstitial has been loaded and autoshown. If you want to load the interstitial first and show it later, set 'autoShowInterstitial: false' in admob.setOptions() and call 'admob.showInterstitialAd();' here");
            } else if (e.adType === admob.AD_TYPE_BANNER) {
              console.log("New banner received");
            }
          }
        }
    onPause() {
      if (this.isAppForeground) {
        admob.destroyBannerView();
        this.isAppForeground = false;
      }
    }

    onResume() {
      if (!this.isAppForeground) {
        setTimeout(admob.createBannerView, 1);
        setTimeout(admob.requestInterstitialAd, 1);
        this.isAppForeground = true;
      }
    }

    requestInterstitialAd() {
        admob.requestInterstitialAd();
    }


    destroyBannerView() {
        admob.destroyBannerView();
    }


    createBannerView() {
      admob.createBannerView();
    }



    saveImageToPhone(url, success, error) {
      var self=this

     if(initdownload==0){
        initdownload=1;

       var canvas, context, imageDataUrl, imageData;
       var img = new Image();
       img.onload = function() {
         canvas = document.createElement('canvas');
         canvas.width = img.width;
         canvas.height = img.height;
         context = canvas.getContext('2d');
         context.drawImage(img, 0, 0);
         try {
           imageDataUrl = canvas.toDataURL('image/jpeg', 1.0);
           imageData = imageDataUrl.replace(/data:image\/jpeg;base64,/, '');
           cordova.exec(
             success,
             error,
             'Canvas2ImagePlugin',
             'saveImageDataToLibrary',
             [imageData]
           );
           initdownload=0;
         }
         catch(e) {
           error(e.message);
           initdownload=0;
         }

       };
       try {
         img.src = url;
         initdownload=0;
       }
       catch(e) {
         initdownload=0;
         error(e.message);
       }
     }
    }

}
