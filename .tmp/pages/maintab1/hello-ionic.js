import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { WebMethod } from '../../providers/webMethod';
import { GlobalFunction } from '../../providers/function';
import $ from "jquery";
import { HelloIonicPage } from '../hello-ionic/hello-ionic';
import { PhotoViewer } from 'ionic-native';
export var MainTab1 = (function () {
    function MainTab1(navCtrl, webMethod, globalFunction) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.webMethod = webMethod;
        this.globalFunction = globalFunction;
        //  navigator.language.split('-')[0]
        this.lang = navigator.language.split('-')[0];
        this.page = 1;
        this.type = "";
        this.type2 = 0;
        this.selectTypeItem = "";
        this.storageDirectory = '';
        this.initdownload = 0;
        webMethod.Getcosplay(this.page, this.type, this.type2, this.lang).subscribe(function (data) {
            console.log(data["result"]);
            $.each(data["result"], function (key, value) {
                webMethod.Checkfavorite(String(value.master_id), function () {
                    data["result"][key]["favoritecss"] = "danger";
                }, function () {
                    data["result"][key]["favoritecss"] = "default";
                });
            });
            _this.cosplays = data["result"];
            console.log(data["result"]);
            _this.page++;
        });
        webMethod.GetcosplayType(this.page, this.type, this.type2, "", this.lang).subscribe(function (data) {
            _this.cosplaytypes = data["result"];
        });
    }
    MainTab1.prototype.doInfinite = function (infiniteScroll) {
        var _this = this;
        var self = this;
        this.webMethod.Getcosplay(this.page, this.type, this.type2, this.lang).subscribe(function (data) {
            $.each(data["result"], function (key, value) {
                self.webMethod.Checkfavorite(String(value.master_id), function () {
                    data["result"][key]["favoritecss"] = "danger";
                }, function () {
                    data["result"][key]["favoritecss"] = "default";
                });
            });
            if ($(data["result"]).length > 0) {
                _this.cosplays = _this.cosplays.concat(data["result"]);
                _this.page++;
            }
            infiniteScroll.complete();
        });
        if (Math.floor(Math.random() * 10) + 1 == 1) {
            self.globalFunction.requestInterstitialAd();
        }
    };
    MainTab1.prototype.updatelist = function (returnData) {
        var self = this;
        self.type = returnData.type;
        self.page = 1;
        self.webMethod.Getcosplay(this.page, this.type, this.type2, this.lang).subscribe(function (data) {
            $.each(data["result"], function (key, value) {
                self.webMethod.Checkfavorite(String(value.master_id), function () {
                    data["result"][key]["favoritecss"] = "danger";
                }, function () {
                    data["result"][key]["favoritecss"] = "default";
                });
            });
            self.cosplays = data["result"];
            self.page++;
        });
    };
    MainTab1.prototype.addlike = function (event, cosplay) {
        //console.log(cosplay.master_id);
        this.webMethod.UpdatecosplayLike(cosplay.master_id).subscribe(function (data) {
            cosplay.likecount++;
        });
    };
    MainTab1.prototype.addfavorite = function (event, favorite) {
        this.webMethod.Addfavorite(String(favorite.master_id), function () {
            favorite.favoritecss = "danger";
            favorite.favoritecount++;
        }, function () {
            favorite.favoritecss = "default";
            favorite.favoritecount--;
        });
    };
    MainTab1.prototype.imageclick = function (event, msg) {
        PhotoViewer.show(encodeURI(msg.display_src));
    };
    MainTab1.prototype.shareFb = function (event, msg) {
        var success = function (msg) {
            alert("Saved to gallery");
        };
        var error = function (err) {
            alert("Fail to Save");
        };
        if (Math.floor(Math.random() * 5) + 1 == 1) {
            this.globalFunction.requestInterstitialAd();
        }
        this.globalFunction.saveImageToPhone(encodeURI(msg.display_src), success, error);
        //  PhotoViewer.show('http://www.desktopwallpaperhd.net/thumbs/8/7/xiaogoukuanping-animal-tupian-85399.jpg');
        /*
                var fileTransfer = new Transfer();
                var uri = encodeURI(image);
                var fileURL = cordova.file.dataDirectory+"img.jpg";
                alert(fileURL);
                fileTransfer.download(
                    uri,
                    fileURL
                  ).then((entry) => {
                    alert(1);
                  }, (error) => {
                      alert(2);
        
                  });
        */
        //  Clipboard.copy(msg.display_src);
    };
    MainTab1.prototype.refresh = function (event) {
        this.navCtrl.push(HelloIonicPage, {
            tabindex: 0
        });
    };
    MainTab1.decorators = [
        { type: Component, args: [{
                    selector: 'hello-ionic-page',
                    templateUrl: 'hello-ionic.html'
                },] },
    ];
    /** @nocollapse */
    MainTab1.ctorParameters = [
        { type: NavController, },
        { type: WebMethod, },
        { type: GlobalFunction, },
    ];
    return MainTab1;
}());
//# sourceMappingURL=hello-ionic.js.map