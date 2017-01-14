import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HelloIonicPage } from '../pages/hello-ionic/hello-ionic';
import { ItemDetailsPage } from '../pages/item-details/item-details';
import { HelloFavoritePage } from '../pages/favoritelist/hello-ionic';
import { MainTab1 } from '../pages/maintab1/hello-ionic';
import { MainTab2 } from '../pages/maintab2/hello-ionic';
import { LoginPage } from '../pages/login/login';

import { ListPage } from '../pages/list/list';
import { WebMethod } from '../providers/webMethod';
import { GlobalFunction } from '../providers/function';
import { EscapeHtmlPipe } from '../providers/pipe';

function htmlEntities(str) {
return String(str).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g,'&gt;').replace(/"/g, '&quot;');
}



@NgModule({
  declarations: [
    MyApp,
    HelloIonicPage,
    HelloFavoritePage,
    LoginPage,
    ItemDetailsPage,
    ListPage,
    EscapeHtmlPipe,
    MainTab1,
    MainTab2
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HelloIonicPage,
    HelloFavoritePage,
    LoginPage,
    ItemDetailsPage,
    ListPage,
    MainTab1,
    MainTab2
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler},WebMethod,GlobalFunction]
})
export class AppModule {}
