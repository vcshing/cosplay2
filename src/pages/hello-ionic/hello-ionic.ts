import { Component , ViewChild } from '@angular/core';

import { NavController , Tabs,NavParams} from 'ionic-angular';

import { HttpModule } from '@angular/http';

//import 'rxjs/add/operator/map';



import { cosplay } from '../../models/dataModels';
import { cosplayType } from '../../models/dataModels';
import {  WebMethod } from '../../providers/webMethod';
import {  GlobalFunction } from '../../providers/function';

import $ from "jquery";

import { SocialSharing } from 'ionic-native';
import { Clipboard } from 'ionic-native';

import { MainTab1 } from '../maintab1/hello-ionic';
import { MainTab2 } from '../maintab2/hello-ionic';
import { HelloFavoritePage } from '../favoritelist/hello-ionic';

@Component({
  selector: 'hello-ionic-page',
  templateUrl: 'hello-ionic.html'
})



export class HelloIonicPage {
  @ViewChild('tabs') tabRef: Tabs;
  ionViewDidEnter() {


   }

  MainTab1: any;
  MainTab2: any;
  HelloFavoritePage: any;
  TabIndex: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.MainTab1 = MainTab1;
    this.MainTab2 = MainTab2;
    this.HelloFavoritePage = HelloFavoritePage;
    this.TabIndex = navParams.get('tabindex');
  }



}
