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
import { Clipboard ,PhotoViewer} from 'ionic-native';

import { HelloIonicPage } from '../hello-ionic/hello-ionic';

@Component({
  selector: 'hello-ionic-page',
  templateUrl: 'hello-ionic.html'
})



export class MainTab2 {
//  navigator.language.split('-')[0]

  lang=navigator.language.split('-')[0];
  page=1;
  type="";
  type2=1;
  cosplays: cosplay[];
  cosplaytypes: cosplayType[];
  selectTypeItem="";


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

    if(Math.floor(Math.random() * 10) + 1 == 1 ){
      self.globalFunction.requestInterstitialAd();
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
        // Check if sharing via email is supported
        var success = function(msg){
    			alert("Saved to gallery");
    		};

    		var error = function(err){
    			alert("Fail to Save");
    		};

        if(Math.floor(Math.random() * 5) + 1 == 1 ){
          this.globalFunction.requestInterstitialAd();
        }

    		this.globalFunction.saveImageToPhone(encodeURI(msg.display_src), success, error);
    }

    refresh(event){
      this.navCtrl.push(HelloIonicPage, {
        tabindex: 1
      });
    }
}
