import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { Facebook } from 'ionic-native';
//import 'rxjs/add/operator/map';

import $ from "jquery";
import * as localForage from "localforage";

import { HelloIonicPage } from '../hello-ionic/hello-ionic';
import {  WebMethod } from '../../providers/webMethod';
import 'rxjs/Rx';

@Component({
  selector: 'login-page',
  templateUrl: 'login.html'
})
export class LoginPage {
//  navigator.language.split('-')[0]


  constructor(public navCtrl: NavController, private webMethod: WebMethod) {

  }


}
