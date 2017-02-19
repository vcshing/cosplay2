import { Component, ViewChild } from '@angular/core';

import { Platform, MenuController, Nav } from 'ionic-angular';

import { StatusBar, Splashscreen } from 'ionic-native';

import { HelloIonicPage } from '../pages/hello-ionic/hello-ionic';
import { HelloFavoritePage } from '../pages/favoritelist/hello-ionic';
import { LoginPage } from '../pages/login/login';
import {  WebMethod } from '../providers/webMethod';

import { ListPage } from '../pages/list/list';
import { Facebook } from 'ionic-native';
import {  GlobalFunction } from '../providers/function';
import {File, Transfer} from 'ionic-native';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  // make HelloIonicPage the root (or first) page
  rootPage: any = HelloIonicPage;
  pages: Array<{title: string, component: any}>;

  public enablefb=false;
  constructor(
    public platform: Platform,
    public menu: MenuController,
    public webMethod: WebMethod,
    public globalFunction: GlobalFunction
  ) {
    let self = this;
    this.initializeApp();

    this.pages = [
      { title: 'cosplay List', component: HelloIonicPage },
      { title: 'Other Apps', component: null }
    ];

    if(( /(ipad|iphone|ipod|android|windows phone)/i.test(navigator.userAgent) ) && this.enablefb==true) {
      Facebook.getLoginStatus().then(function(response) {

        if (response.status === 'connected') {
          self.pages = [
            { title: 'cosplay List', component: HelloIonicPage },
            { title: 'Logout', component: LoginPage }
          ];
        } else {
          self.pages = [
            { title: 'cosplay List', component: HelloIonicPage },
            { title: 'Login', component: LoginPage }
          ];
        }
      });
    }

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      this.hideSplashScreen();

      if(( /(ipad|iphone|ipod|android|windows phone)/i.test(navigator.userAgent) )) {
            this.globalFunction.initAds();
            this.globalFunction.createBannerView();
      }
    });
  }

  openPage(page) {
    let self=this;
    // close the menu when clicking a link from the menu
    this.menu.close();
    // navigate to the new page if it is not the current page
    if(page.title=="Login"){
      if(( /(ipad|iphone|ipod|android|windows phone)/i.test(navigator.userAgent) ) && this.enablefb==true) {
        Facebook.login(["public_profile"]).then(function(response) {

          if (response.status === 'connected') {

            self.webMethod.SaveLoginInfo(String(response["authResponse"]["userID"])).subscribe(data => {
              self.pages = [
                { title: 'cosplay List', component: HelloIonicPage },
                { title: 'Favorite List', component: HelloFavoritePage },
                { title: 'Logout', component: LoginPage }
              ];
            });

          }else{

          }
        });
      }
    }else if(page.title=="Logout"){
      if(( /(ipad|iphone|ipod|android|windows phone)/i.test(navigator.userAgent) ) && this.enablefb==true) {
        Facebook.logout();
        self.pages = [
          { title: 'cosplay List', component: HelloIonicPage },
          { title: 'Favorite List', component: HelloFavoritePage },
          { title: 'Login', component: LoginPage }
        ];
      }
    }else if(page.title=="Other Apps"){
      var target = "_system";
      var options = "location=yes";
      var url = "https://play.google.com/store/apps/details?id=com.cosplay.cosplay";
      window.open(url, target, options);
    }else{
      this.nav.setRoot(page.component);
    }
  }

  hideSplashScreen() {
      if (Splashscreen) {
          setTimeout(() => {
              Splashscreen.hide();
          }, 100);
      }
  }
}
