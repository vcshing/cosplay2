import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { WebMethod } from '../../providers/webMethod';
import { GlobalFunction } from '../../providers/function';
import $ from "jquery";
import * as localForage from "localforage";
import { PhotoViewer } from 'ionic-native';
import { HelloIonicPage } from '../hello-ionic/hello-ionic';
export var HelloFavoritePage = (function () {
    function HelloFavoritePage(navCtrl, webMethod, globalFunction) {
        this.navCtrl = navCtrl;
        this.webMethod = webMethod;
        this.globalFunction = globalFunction;
        //  navigator.language.split('-')[0]
        this.lang = navigator.language.split('-')[0];
        this.page = 1;
        this.type = "";
        this.selectTypeItem = "";
        var self = this;
        localForage.getItem('favoriteArr', function (err, value) {
            if ($(value).length == 0) {
            }
            else {
                webMethod.Getfavorite(self.page, self.type, value, self.lang).subscribe(function (data) {
                    $.each(data["result"], function (key, value) {
                        webMethod.Checkfavorite(String(value.master_id), function () {
                            data["result"][key]["favoritecss"] = "danger";
                        }, function () {
                            data["result"][key]["favoritecss"] = "default";
                        });
                    });
                    self.cosplays = data["result"];
                    self.page++;
                });
                webMethod.GetcosplayType(self.page, self.type, "", value, self.lang).subscribe(function (data) {
                    self.cosplaytypes = data["result"];
                });
            }
        });
    }
    HelloFavoritePage.prototype.doInfinite = function (infiniteScroll) {
        var self = this;
        localForage.getItem('favoriteArr', function (err, value) {
            var _this = this;
            if ($(value).length == 0) {
            }
            else {
                self.webMethod.Getfavorite(self.page, self.type, value, self.lang).subscribe(function (data) {
                    $.each(data["result"], function (key, value) {
                        self.webMethod.Checkfavorite(String(value.master_id), function () {
                            data["result"][key]["favoritecss"] = "danger";
                        }, function () {
                            data["result"][key]["favoritecss"] = "default";
                        });
                    });
                    //console.log(data["result"]);
                    if ($(data["result"]).length > 0) {
                        self.cosplays = _this.cosplays.concat(data["result"]);
                        self.page++;
                    }
                    infiniteScroll.complete();
                });
                if (Math.floor(Math.random() * 10) + 1 == 1) {
                    self.globalFunction.requestInterstitialAd();
                }
            }
        });
    };
    HelloFavoritePage.prototype.updatelist = function (returnData) {
        var self = this;
        self.type = returnData.type;
        self.page = 1;
        localForage.getItem('favoriteArr', function (err, value) {
            if ($(value).length == 0) {
            }
            else {
                self.webMethod.Getfavorite(self.page, self.type, value, self.lang).subscribe(function (data) {
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
            }
        });
    };
    HelloFavoritePage.prototype.addlike = function (event, cosplay) {
        //console.log(cosplay.master_id);
        this.webMethod.UpdatecosplayLike(cosplay.master_id).subscribe(function (data) {
            cosplay.likecount++;
        });
    };
    HelloFavoritePage.prototype.addfavorite = function (event, favorite) {
        this.webMethod.Addfavorite(String(favorite.master_id), function () {
            favorite.favoritecss = "danger";
            favorite.favoritecount++;
        }, function () {
            favorite.favoritecss = "default";
            favorite.favoritecount--;
        });
    };
    HelloFavoritePage.prototype.imageclick = function (event, msg) {
        PhotoViewer.show(encodeURI(msg.display_src));
    };
    HelloFavoritePage.prototype.shareFb = function (event, msg) {
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
    };
    HelloFavoritePage.prototype.refresh = function (event) {
        this.navCtrl.push(HelloIonicPage, {
            tabindex: 2
        });
    };
    HelloFavoritePage.decorators = [
        { type: Component, args: [{
                    selector: 'hello-ionic-page',
                    templateUrl: 'hello-ionic.html'
                },] },
    ];
    /** @nocollapse */
    HelloFavoritePage.ctorParameters = [
        { type: NavController, },
        { type: WebMethod, },
        { type: GlobalFunction, },
    ];
    return HelloFavoritePage;
}());
//# sourceMappingURL=hello-ionic.js.map