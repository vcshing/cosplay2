import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';

import { HttpModule } from '@angular/http';

//import 'rxjs/add/operator/map';



import { cosplay } from '../../models/dataModels';
import { cosplayType } from '../../models/dataModels';
import {  WebMethod } from '../../providers/webMethod';
import {  GlobalFunction } from '../../providers/function';

import $ from "jquery";

import { SocialSharing } from 'ionic-native';
import { Clipboard } from 'ionic-native';

import { HelloIonicPage } from '../hello-ionic/hello-ionic';
import {File, Transfer, PhotoViewer} from 'ionic-native';


@Component({
  selector: 'hello-ionic-page',
  templateUrl: 'hello-ionic.html'
})



export class MainTab1 {
//  navigator.language.split('-')[0]

  lang=navigator.language.split('-')[0];
  page=1;
  type="";
  type2=0;
  cosplays: cosplay[];
  cosplaytypes: cosplayType[];
  selectTypeItem="";
  storageDirectory: string = '';
  initdownload=0;

  constructor(public navCtrl: NavController, private webMethod: WebMethod, private globalFunction: GlobalFunction) {

      webMethod.Getcosplay(this.page,this.type,this.type2,this.lang).subscribe(data => {
        console.log(data["result"]);

        $.each( data["result"], function( key, value ) {
          webMethod.Checkfavorite(String(value.master_id),function(){
              data["result"][key]["favoritecss"]=  "danger";
          },function(){
              data["result"][key]["favoritecss"]=  "default";
          })
        });

        this.cosplays = data["result"];
        console.log(data["result"]);
        this.page ++;
      })

      webMethod.GetcosplayType(this.page,this.type,this.type2,"",this.lang).subscribe(data => {
        this.cosplaytypes = data["result"];
      })


  }




  doInfinite(infiniteScroll) {
      let self=this;
      this.webMethod.Getcosplay(this.page,this.type,this.type2,this.lang).subscribe(data => {

      $.each( data["result"], function( key, value ) {
        self.webMethod.Checkfavorite(String(value.master_id),function(){
            data["result"][key]["favoritecss"]=  "danger";
        },function(){
            data["result"][key]["favoritecss"]=  "default";
        })
      });
      if($(data["result"]).length>0){
        this.cosplays = this.cosplays.concat( data["result"]);
        this.page ++;
      }

      infiniteScroll.complete();
    })

    if(Math.floor(Math.random() * 11) + 1 == 1 ){
      self.globalFunction.showInterstitial();
    }

  }

  updatelist(returnData) {
      let self=this;
       self.type = returnData.type;
       self.page =1;


       self.webMethod.Getcosplay(this.page,this.type,this.type2,this.lang).subscribe(data => {

         $.each( data["result"], function( key, value ) {
           self.webMethod.Checkfavorite(String(value.master_id),function(){
               data["result"][key]["favoritecss"]=  "danger";

           },function(){
               data["result"][key]["favoritecss"]=  "default";

           })
         });

         self.cosplays = data["result"];
         self.page ++;
       })
  }

  addlike(event,cosplay) {
      //console.log(cosplay.master_id);
        this.webMethod.UpdatecosplayLike(cosplay.master_id).subscribe(data => {
          cosplay.likecount++
        })
  }


    addfavorite(event,favorite) {
      this.webMethod.Addfavorite(String(favorite.master_id),function(){
          favorite.favoritecss=  "danger";
          favorite.favoritecount++;
      },function(){
          favorite.favoritecss=  "default";
          favorite.favoritecount--;
      })
    }
    imageclick(event,msg){
      PhotoViewer.show(encodeURI(msg.display_src));
    }
    shareFb(event,msg) {

        var success = function(msg){
    			alert("Saved to gallery");
    		};

    		var error = function(err){
    			alert("Fail to Save");
    		};

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
    }

    refresh(event){

      this.navCtrl.push(HelloIonicPage, {
        tabindex: 0
      });
    }





}