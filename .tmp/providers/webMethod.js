import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import $ from "jquery";
import 'rxjs/Rx';
import * as localforage from "localforage";
/*
  Generated class for the GithubUsers provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
export var WebMethod = (function () {
    function WebMethod(http) {
        this.http = http;
        this.self = this;
    }
    // Load all github users
    WebMethod.prototype.loadUser = function () {
        var githubApiUrl = 'https://api.github.com';
        return this.http.get(githubApiUrl + '/users')
            .map(function (res) { return res.json(); });
    };
    // Load all github users
    WebMethod.prototype.Getcosplay = function (page, selectTypeItem, type2, lang) {
        var url = 'http://gogogo.synology.me/api/cosplay/getdata.php?page=' + page + '&type=' + selectTypeItem + '&type2=' + type2 + '&lang=' + lang;
        return this.http.get(url)
            .map(function (res) { return res.json(); });
    };
    WebMethod.prototype.GetcosplayType = function (page, selectTypeItem, type2, favoriteList, lang) {
        var url = 'http://gogogo.synology.me/api/cosplay/gettype.php?page=' + page + '&type=' + selectTypeItem + '&id=' + favoriteList + '&type2=' + type2 + '&lang=' + lang;
        return this.http.get(url)
            .map(function (res) { return res.json(); });
    };
    WebMethod.prototype.UpdatecosplayLike = function (masterID) {
        var headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8;');
        var config = {
            headers: headers
        };
        var data = $.param({
            masterid: masterID
        });
        var url = 'http://gogogo.synology.me/api/cosplay/updatelike.php';
        return this.http.post(url, data, config);
    };
    WebMethod.prototype.AddcosplayFavoriteCount = function (masterID) {
        console.log("ADD" + masterID);
        var headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8;');
        var config = {
            headers: headers
        };
        var data = $.param({
            masterid: masterID
        });
        var url = 'http://gogogo.synology.me/api/cosplay/addfavorite.php';
        return this.http.post(url, data, config);
    };
    WebMethod.prototype.ReducecosplayFavoriteCount = function (masterID) {
        var headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8;');
        var config = {
            headers: headers
        };
        var data = $.param({
            masterid: masterID
        });
        var url = 'http://gogogo.synology.me/api/cosplay/reducefavorite.php';
        return this.http.post(url, data, config);
    };
    WebMethod.prototype.test = function () {
        console.log("test");
        return Observable.empty(null);
    };
    WebMethod.prototype.Addfavorite = function (cosplay, Addfavoritecallback, Removefavoritecallback) {
        var favoriteArr = [];
        var self = this;
        localforage.getItem('favoriteArr', function (err, value) {
            if ($(value).length == 0) {
                favoriteArr.push(cosplay);
                localforage.setItem("favoriteArr", favoriteArr);
                self.AddcosplayFavoriteCount(cosplay).subscribe(function (data) {
                    Addfavoritecallback();
                });
            }
            else {
                favoriteArr = $(value).toArray();
                if ($.inArray(cosplay, favoriteArr) < 0) {
                    favoriteArr.push(cosplay);
                    localforage.setItem("favoriteArr", favoriteArr);
                    self.AddcosplayFavoriteCount(cosplay).subscribe(function (data) {
                        Addfavoritecallback();
                    });
                }
                else {
                    favoriteArr.splice($.inArray(cosplay, favoriteArr), 1);
                    localforage.setItem("favoriteArr", favoriteArr);
                    self.ReducecosplayFavoriteCount(cosplay).subscribe(function (data) {
                        Removefavoritecallback();
                    });
                }
            }
        });
    };
    WebMethod.prototype.Checkfavorite = function (cosplay, IsFavoriteCallback, NotFavoriteCallback) {
        var favoriteArr = [];
        localforage.getItem('favoriteArr', function (err, value) {
            if ($(value).length == 0) {
                NotFavoriteCallback();
            }
            else {
                favoriteArr = $(value).toArray();
                if ($.inArray(cosplay, favoriteArr) < 0) {
                    NotFavoriteCallback();
                }
                else {
                    IsFavoriteCallback();
                }
            }
        });
    };
    WebMethod.prototype.Getfavorite = function (page, selectTypeItem, favoriteList, lang) {
        console.log(favoriteList);
        var url = 'http://gogogo.synology.me/api/cosplay/getdata.php?page=' + page + '&type=' + selectTypeItem + "&id=" + favoriteList + "&lang=" + lang;
        return this.http.get(url)
            .map(function (res) { return res.json(); });
    };
    WebMethod.prototype.SaveLoginInfo = function (userid) {
        var headers = new Headers();
        headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8;');
        var config = {
            headers: headers
        };
        var data = $.param({
            id: userid
        });
        var url = 'http://gogogo.synology.me/api/cosplay/savelogininfo.php';
        alert(url);
        return this.http.post(url, data, config);
    };
    WebMethod.decorators = [
        { type: Injectable },
    ];
    /** @nocollapse */
    WebMethod.ctorParameters = [
        { type: Http, },
    ];
    return WebMethod;
}());
//# sourceMappingURL=webMethod.js.map