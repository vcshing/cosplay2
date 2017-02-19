import { Component, ViewChild } from '@angular/core';
import { Platform, MenuController, Nav } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';
import { HelloIonicPage } from '../pages/hello-ionic/hello-ionic';
import { HelloFavoritePage } from '../pages/favoritelist/hello-ionic';
import { LoginPage } from '../pages/login/login';
import { WebMethod } from '../providers/webMethod';
import { Facebook } from 'ionic-native';
import { GlobalFunction } from '../providers/function';
export var MyApp = (function () {
    function MyApp(platform, menu, webMethod, globalFunction) {
        this.platform = platform;
        this.menu = menu;
        this.webMethod = webMethod;
        this.globalFunction = globalFunction;
        // make HelloIonicPage the root (or first) page
        this.rootPage = HelloIonicPage;
        this.enablefb = false;
        var self = this;
        this.initializeApp();
        this.pages = [
            { title: 'cosplay List', component: HelloIonicPage },
            { title: 'Other Apps', component: null }
        ];
        if ((/(ipad|iphone|ipod|android|windows phone)/i.test(navigator.userAgent)) && this.enablefb == true) {
            Facebook.getLoginStatus().then(function (response) {
                if (response.status === 'connected') {
                    self.pages = [
                        { title: 'cosplay List', component: HelloIonicPage },
                        { title: 'Logout', component: LoginPage }
                    ];
                }
                else {
                    self.pages = [
                        { title: 'cosplay List', component: HelloIonicPage },
                        { title: 'Login', component: LoginPage }
                    ];
                }
            });
        }
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            StatusBar.styleDefault();
            _this.hideSplashScreen();
            if ((/(ipad|iphone|ipod|android|windows phone)/i.test(navigator.userAgent))) {
                _this.globalFunction.initAds();
                _this.globalFunction.createBannerView();
            }
        });
    };
    MyApp.prototype.openPage = function (page) {
        var self = this;
        // close the menu when clicking a link from the menu
        this.menu.close();
        // navigate to the new page if it is not the current page
        if (page.title == "Login") {
            if ((/(ipad|iphone|ipod|android|windows phone)/i.test(navigator.userAgent)) && this.enablefb == true) {
                Facebook.login(["public_profile"]).then(function (response) {
                    if (response.status === 'connected') {
                        self.webMethod.SaveLoginInfo(String(response["authResponse"]["userID"])).subscribe(function (data) {
                            self.pages = [
                                { title: 'cosplay List', component: HelloIonicPage },
                                { title: 'Favorite List', component: HelloFavoritePage },
                                { title: 'Logout', component: LoginPage }
                            ];
                        });
                    }
                    else {
                    }
                });
            }
        }
        else if (page.title == "Logout") {
            if ((/(ipad|iphone|ipod|android|windows phone)/i.test(navigator.userAgent)) && this.enablefb == true) {
                Facebook.logout();
                self.pages = [
                    { title: 'cosplay List', component: HelloIonicPage },
                    { title: 'Favorite List', component: HelloFavoritePage },
                    { title: 'Login', component: LoginPage }
                ];
            }
        }
        else if (page.title == "Other Apps") {
            var target = "_system";
            var options = "location=yes";
            var url = "https://play.google.com/store/apps/details?id=com.cosplay.cosplay";
            window.open(url, target, options);
        }
        else {
            this.nav.setRoot(page.component);
        }
    };
    MyApp.prototype.hideSplashScreen = function () {
        if (Splashscreen) {
            setTimeout(function () {
                Splashscreen.hide();
            }, 100);
        }
    };
    MyApp.decorators = [
        { type: Component, args: [{
                    templateUrl: 'app.html'
                },] },
    ];
    /** @nocollapse */
    MyApp.ctorParameters = [
        { type: Platform, },
        { type: MenuController, },
        { type: WebMethod, },
        { type: GlobalFunction, },
    ];
    MyApp.propDecorators = {
        'nav': [{ type: ViewChild, args: [Nav,] },],
    };
    return MyApp;
}());
//# sourceMappingURL=app.component.js.map