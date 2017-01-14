import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { MainTab1 } from '../maintab1/hello-ionic';
import { MainTab2 } from '../maintab2/hello-ionic';
import { HelloFavoritePage } from '../favoritelist/hello-ionic';
export var HelloIonicPage = (function () {
    function HelloIonicPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.MainTab1 = MainTab1;
        this.MainTab2 = MainTab2;
        this.HelloFavoritePage = HelloFavoritePage;
        this.TabIndex = navParams.get('tabindex');
    }
    HelloIonicPage.prototype.ionViewDidEnter = function () {
    };
    HelloIonicPage.decorators = [
        { type: Component, args: [{
                    selector: 'hello-ionic-page',
                    templateUrl: 'hello-ionic.html'
                },] },
    ];
    /** @nocollapse */
    HelloIonicPage.ctorParameters = [
        { type: NavController, },
        { type: NavParams, },
    ];
    HelloIonicPage.propDecorators = {
        'tabRef': [{ type: ViewChild, args: ['tabs',] },],
    };
    return HelloIonicPage;
}());
//# sourceMappingURL=hello-ionic.js.map