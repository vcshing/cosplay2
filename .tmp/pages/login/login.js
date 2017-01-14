import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { WebMethod } from '../../providers/webMethod';
import 'rxjs/Rx';
export var LoginPage = (function () {
    //  navigator.language.split('-')[0]
    function LoginPage(navCtrl, webMethod) {
        this.navCtrl = navCtrl;
        this.webMethod = webMethod;
    }
    LoginPage.decorators = [
        { type: Component, args: [{
                    selector: 'login-page',
                    templateUrl: 'login.html'
                },] },
    ];
    /** @nocollapse */
    LoginPage.ctorParameters = [
        { type: NavController, },
        { type: WebMethod, },
    ];
    return LoginPage;
}());
//# sourceMappingURL=login.js.map