import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import {Headers} from '@angular/http';
declare var AdMob: any;
declare var cordova: any;
@Injectable()
export class GlobalFunction {
  private admobId: any;
    initdownload=0;
  self=this;

  constructor(public http: Http) {
    if(/(android)/i.test(navigator.userAgent)) {
      this.admobId = {
          banner: 'ca-app-pub-3715336230214756/9504862623',
          interstitial: 'ca-app-pub-3715336230214756/1981595824'
      };
    } else if(/(ipod|iphone|ipad)/i.test(navigator.userAgent)) {
        this.admobId = {
            banner: 'ca-app-pub-3715336230214756/9504862623',
            interstitial: 'ca-app-pub-3715336230214756/1981595824'
        };
    }
  }



    showInterstitial() {
      if(( /(ipad|iphone|ipod|android|windows phone)/i.test(navigator.userAgent) )) {
            if(AdMob) {
                AdMob.prepareInterstitial({
                    adId: this.admobId.interstitial,
                    autoShow: true
                });
            }
        }
    }


    hideBanner() {
      if(( /(ipad|iphone|ipod|android|windows phone)/i.test(navigator.userAgent) )) {
            if(AdMob) {
                AdMob.hideBanner();
            }
      }
    }


    createBanner() {
      if(( /(ipad|iphone|ipod|android|windows phone)/i.test(navigator.userAgent) )) {
        if(AdMob) AdMob.createBanner({
        adId: this.admobId.banner,
        position: AdMob.AD_POSITION.BOTTOM_CENTER,
        autoShow: true })
      }
    }

    prepareInterstitial() {
      if(( /(ipad|iphone|ipod|android|windows phone)/i.test(navigator.userAgent) )) {
        if(AdMob) AdMob.prepareInterstitial( {adId:this.admobId.interstitial, autoShow:false} );
      }
    }


    saveImageToPhone(url, success, error) {
      var self=this

     if(self.initdownload==0){
        self.initdownload=1;

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
           self.initdownload=0;
         }
         catch(e) {
           error(e.message);
           self.initdownload=0;
         }

       };
       try {
         img.src = url;
         self.initdownload=0;
       }
       catch(e) {
         self.initdownload=0;
         error(e.message);
       }
     }
    }

}
