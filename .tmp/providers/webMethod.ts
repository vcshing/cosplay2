import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import {Headers} from '@angular/http';

import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import $ from "jquery";
import 'rxjs/Rx';


import { User } from '../models/dataModels';

import { cosplay } from '../models/dataModels';
import { cosplayType } from '../models/dataModels';
import { ReturnData } from '../models/dataModels';

import * as localforage from "localforage"
/*
  Generated class for the GithubUsers provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class WebMethod {

  self=this;

  constructor(public http: Http) {

  }

  // Load all github users
  loadUser(): Observable<User[]> {
      var githubApiUrl = 'https://api.github.com';
      return this.http.get(githubApiUrl +'/users')
      .map(res => <User[]>res.json());
  }
  // Load all github users
  Getcosplay(page,selectTypeItem,type2,lang): Observable<cosplay[]> {
      var url = 'http://gogogo.synology.me/api/cosplay/getdata.php?page='+page+'&type='+selectTypeItem +'&type2=' + type2 +'&lang=' + lang;
      return this.http.get(url)
      .map(res => <cosplay[]>res.json());
  }

  GetcosplayType(page,selectTypeItem,type2,favoriteList,lang): Observable<cosplayType[]> {
      var url = 'http://gogogo.synology.me/api/cosplay/gettype.php?page='+page+'&type='+selectTypeItem +'&id='+favoriteList + '&type2=' + type2 +'&lang=' + lang;
      return this.http.get(url)
      .map(res => <cosplayType[]>res.json());
  }

  UpdatecosplayLike(masterID)  {

    let headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8;');
    let config={
      headers: headers
    }
    var data =$.param({
                 masterid: masterID
               });

      var url = 'http://gogogo.synology.me/api/cosplay/updatelike.php';

      return this.http.post(url,data,config);

  }


    AddcosplayFavoriteCount(masterID)  {
        console.log("ADD"+masterID);
      let headers = new Headers();
      headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8;');
      let config={
        headers: headers
      }
      var data =$.param({
                   masterid: masterID
                 });

        var url = 'http://gogogo.synology.me/api/cosplay/addfavorite.php';

        return this.http.post(url,data,config);
    }

    ReducecosplayFavoriteCount(masterID)  {

      let headers = new Headers();
      headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8;');
      let config={
        headers: headers
      }
      var data =$.param({
                   masterid: masterID
                 });

        var url = 'http://gogogo.synology.me/api/cosplay/reducefavorite.php';

        return this.http.post(url,data,config);
    }

    test() {

        console.log("test");
        return Observable.empty(null);

    }



  Addfavorite(cosplay,Addfavoritecallback,Removefavoritecallback) {
    let favoriteArr=[];
    let self=this;
    localforage.getItem('favoriteArr', function (err, value) {

      if($(value).length==0){

          favoriteArr.push(cosplay);
          localforage.setItem("favoriteArr",favoriteArr);
          self.AddcosplayFavoriteCount(cosplay).subscribe(data => {
                Addfavoritecallback();
          })

      }else{
          favoriteArr=$(value).toArray();

          if($.inArray(cosplay, favoriteArr) <0){

              favoriteArr.push(cosplay);
              localforage.setItem("favoriteArr",favoriteArr);
              self.AddcosplayFavoriteCount(cosplay).subscribe(data => {
                    Addfavoritecallback();
              })

          }else{
              favoriteArr.splice( $.inArray(cosplay,favoriteArr) ,1 );
              localforage.setItem("favoriteArr",favoriteArr);

              self.ReducecosplayFavoriteCount(cosplay).subscribe(data => {
                    Removefavoritecallback();
              })

          }
      }
    });
  }

  Checkfavorite(cosplay,IsFavoriteCallback,NotFavoriteCallback) {
    let favoriteArr=[];

    localforage.getItem('favoriteArr', function (err, value) {
      if($(value).length==0){
          NotFavoriteCallback();
      }else{
          favoriteArr=$(value).toArray();

          if($.inArray(cosplay, favoriteArr) <0){
              NotFavoriteCallback();
          }else{
              IsFavoriteCallback();
          }
      }
    });
  }

  Getfavorite(page,selectTypeItem,favoriteList,lang):Observable<cosplay[]> {
    console.log(favoriteList);
    var url = 'http://gogogo.synology.me/api/cosplay/getdata.php?page='+page+'&type='+selectTypeItem+"&id="+favoriteList+"&lang="+lang;
    return this.http.get(url)
    .map(res => <cosplay[]>res.json());

  }

  SaveLoginInfo(userid){

    let headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8;');
    let config={
      headers: headers
    }
    var data =$.param({
                 id: userid
               });

      var url = 'http://gogogo.synology.me/api/cosplay/savelogininfo.php';
      alert(url);
      return this.http.post(url,data,config);

  }
}
