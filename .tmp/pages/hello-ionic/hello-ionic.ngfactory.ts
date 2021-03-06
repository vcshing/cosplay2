/**
 * This file is generated by the Angular 2 template compiler.
 * Do not edit.
 */
 /* tslint:disable */

import * as import0 from './hello-ionic';
import * as import1 from '@angular/core/src/linker/view';
import * as import2 from '@angular/core/src/render/api';
import * as import3 from '@angular/core/src/linker/element';
import * as import4 from '@angular/core/src/linker/view_utils';
import * as import5 from '@angular/core/src/di/injector';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/change_detection/change_detection';
import * as import8 from 'ionic-angular/navigation/nav-controller';
import * as import9 from 'ionic-angular/navigation/nav-params';
import * as import10 from '@angular/core/src/metadata/view';
import * as import11 from '@angular/core/src/linker/component_factory';
import * as import12 from '@angular/core/src/linker/query_list';
import * as import13 from '../../node_modules/ionic-angular/components/tabs/tabs.ngfactory';
import * as import14 from '../../node_modules/ionic-angular/components/tabs/tab.ngfactory';
import * as import15 from 'ionic-angular/navigation/view-controller';
import * as import16 from 'ionic-angular/components/app/app';
import * as import17 from 'ionic-angular/config/config';
import * as import18 from '@angular/core/src/linker/element_ref';
import * as import19 from 'ionic-angular/platform/platform';
import * as import20 from 'ionic-angular/navigation/deep-linker';
import * as import21 from 'ionic-angular/util/keyboard';
import * as import22 from '@angular/core/src/zone/ng_zone';
import * as import23 from '@angular/core/src/linker/component_factory_resolver';
import * as import24 from 'ionic-angular/gestures/gesture-controller';
import * as import25 from 'ionic-angular/transitions/transition-controller';
import * as import26 from 'ionic-angular/components/tabs/tab';
import * as import27 from 'ionic-angular/components/tabs/tabs';
export class Wrapper_HelloIonicPage {
  context:import0.HelloIonicPage;
  changed:boolean;
  constructor(p0:any,p1:any) {
    this.changed = false;
    this.context = new import0.HelloIonicPage(p0,p1);
  }
  detectChangesInternal(view:import1.AppView<any>,el:any,throwOnChange:boolean):boolean {
    var changed:any = this.changed;
    this.changed = false;
    return changed;
  }
}
var renderType_HelloIonicPage_Host:import2.RenderComponentType = (null as any);
class _View_HelloIonicPage_Host0 extends import1.AppView<any> {
  _el_0:any;
  /*private*/ _appEl_0:import3.AppElement;
  _HelloIonicPage_0_4:Wrapper_HelloIonicPage;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import3.AppElement) {
    super(_View_HelloIonicPage_Host0,renderType_HelloIonicPage_Host,import6.ViewType.HOST,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import3.AppElement {
    this._el_0 = this.selectOrCreateHostElement('hello-ionic-page',rootSelector,(null as any));
    this._appEl_0 = new import3.AppElement(0,(null as any),this,this._el_0);
    var compView_0:any = viewFactory_HelloIonicPage0(this.viewUtils,this.injector(0),this._appEl_0);
    this._HelloIonicPage_0_4 = new Wrapper_HelloIonicPage(this.parentInjector.get(import8.NavController),this.parentInjector.get(import9.NavParams));
    this._appEl_0.initComponent(this._HelloIonicPage_0_4.context,([] as any[]),compView_0);
    compView_0.create(this._HelloIonicPage_0_4.context,this.projectableNodes,(null as any));
    this.init(([] as any[]).concat([this._el_0]),[this._el_0],([] as any[]),([] as any[]));
    return this._appEl_0;
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import0.HelloIonicPage) && (0 === requestNodeIndex))) { return this._HelloIonicPage_0_4.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this._HelloIonicPage_0_4.detectChangesInternal(this,this._el_0,throwOnChange);
    this.detectContentChildrenChanges(throwOnChange);
    this.detectViewChildrenChanges(throwOnChange);
  }
}
function viewFactory_HelloIonicPage_Host0(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import3.AppElement):import1.AppView<any> {
  if ((renderType_HelloIonicPage_Host === (null as any))) { (renderType_HelloIonicPage_Host = viewUtils.createRenderComponentType('',0,import10.ViewEncapsulation.None,([] as any[]),{})); }
  return new _View_HelloIonicPage_Host0(viewUtils,parentInjector,declarationEl);
}
export const HelloIonicPageNgFactory:import11.ComponentFactory<import0.HelloIonicPage> = new import11.ComponentFactory<import0.HelloIonicPage>('hello-ionic-page',viewFactory_HelloIonicPage_Host0,import0.HelloIonicPage);
const styles_HelloIonicPage:any[] = ([] as any[]);
var renderType_HelloIonicPage:import2.RenderComponentType = (null as any);
class _View_HelloIonicPage0 extends import1.AppView<import0.HelloIonicPage> {
  _viewQuery_tabs_0:import12.QueryList<any>;
  _el_0:any;
  /*private*/ _appEl_0:import3.AppElement;
  _Tabs_0_4:import13.Wrapper_Tabs;
  _text_1:any;
  _el_2:any;
  /*private*/ _appEl_2:import3.AppElement;
  _Tab_2_4:import14.Wrapper_Tab;
  _text_3:any;
  _el_4:any;
  /*private*/ _appEl_4:import3.AppElement;
  _Tab_4_4:import14.Wrapper_Tab;
  _text_5:any;
  _el_6:any;
  /*private*/ _appEl_6:import3.AppElement;
  _Tab_6_4:import14.Wrapper_Tab;
  _text_7:any;
  _text_8:any;
  /*private*/ _expr_3:any;
  /*private*/ _expr_4:any;
  /*private*/ _expr_7:any;
  /*private*/ _expr_8:any;
  /*private*/ _expr_11:any;
  /*private*/ _expr_12:any;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import3.AppElement) {
    super(_View_HelloIonicPage0,renderType_HelloIonicPage,import6.ViewType.COMPONENT,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import3.AppElement {
    const parentRenderNode:any = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
    this._viewQuery_tabs_0 = new import12.QueryList<any>();
    this._el_0 = this.renderer.createElement(parentRenderNode,'ion-tabs',(null as any));
    this._appEl_0 = new import3.AppElement(0,(null as any),this,this._el_0);
    var compView_0:any = import13.viewFactory_Tabs0(this.viewUtils,this.injector(0),this._appEl_0);
    this._Tabs_0_4 = new import13.Wrapper_Tabs(this.parentInjector.get(import8.NavController,(null as any)),this.parentInjector.get(import15.ViewController,(null as any)),this.parentInjector.get(import16.App),this.parentInjector.get(import17.Config),new import18.ElementRef(this._el_0),this.parentInjector.get(import19.Platform),this.renderer,this.parentInjector.get(import20.DeepLinker));
    this._appEl_0.initComponent(this._Tabs_0_4.context,([] as any[]),compView_0);
    this._text_1 = this.renderer.createText((null as any),'\n      ',(null as any));
    this._el_2 = this.renderer.createElement((null as any),'ion-tab',(null as any));
    this.renderer.setElementAttribute(this._el_2,'role','tabpanel');
    this.renderer.setElementAttribute(this._el_2,'tabIcon','thumbs-up');
    this._appEl_2 = new import3.AppElement(2,0,this,this._el_2);
    var compView_2:any = import14.viewFactory_Tab0(this.viewUtils,this.injector(2),this._appEl_2);
    this._Tab_2_4 = new import14.Wrapper_Tab(this._Tabs_0_4.context,this.parentInjector.get(import16.App),this.parentInjector.get(import17.Config),this.parentInjector.get(import21.Keyboard),new import18.ElementRef(this._el_2),this.parentInjector.get(import22.NgZone),this.renderer,this.parentInjector.get(import23.ComponentFactoryResolver),compView_2.ref,this.parentInjector.get(import24.GestureController),this.parentInjector.get(import25.TransitionController),this.parentInjector.get(import20.DeepLinker,(null as any)));
    this._appEl_2.initComponent(this._Tab_2_4.context,([] as any[]),compView_2);
    compView_2.create(this._Tab_2_4.context,([] as any[]),(null as any));
    this._text_3 = this.renderer.createText((null as any),'\n      ',(null as any));
    this._el_4 = this.renderer.createElement((null as any),'ion-tab',(null as any));
    this.renderer.setElementAttribute(this._el_4,'role','tabpanel');
    this.renderer.setElementAttribute(this._el_4,'tabIcon','timer');
    this._appEl_4 = new import3.AppElement(4,0,this,this._el_4);
    var compView_4:any = import14.viewFactory_Tab0(this.viewUtils,this.injector(4),this._appEl_4);
    this._Tab_4_4 = new import14.Wrapper_Tab(this._Tabs_0_4.context,this.parentInjector.get(import16.App),this.parentInjector.get(import17.Config),this.parentInjector.get(import21.Keyboard),new import18.ElementRef(this._el_4),this.parentInjector.get(import22.NgZone),this.renderer,this.parentInjector.get(import23.ComponentFactoryResolver),compView_4.ref,this.parentInjector.get(import24.GestureController),this.parentInjector.get(import25.TransitionController),this.parentInjector.get(import20.DeepLinker,(null as any)));
    this._appEl_4.initComponent(this._Tab_4_4.context,([] as any[]),compView_4);
    compView_4.create(this._Tab_4_4.context,([] as any[]),(null as any));
    this._text_5 = this.renderer.createText((null as any),'\n      ',(null as any));
    this._el_6 = this.renderer.createElement((null as any),'ion-tab',(null as any));
    this.renderer.setElementAttribute(this._el_6,'role','tabpanel');
    this.renderer.setElementAttribute(this._el_6,'tabIcon','heart');
    this._appEl_6 = new import3.AppElement(6,0,this,this._el_6);
    var compView_6:any = import14.viewFactory_Tab0(this.viewUtils,this.injector(6),this._appEl_6);
    this._Tab_6_4 = new import14.Wrapper_Tab(this._Tabs_0_4.context,this.parentInjector.get(import16.App),this.parentInjector.get(import17.Config),this.parentInjector.get(import21.Keyboard),new import18.ElementRef(this._el_6),this.parentInjector.get(import22.NgZone),this.renderer,this.parentInjector.get(import23.ComponentFactoryResolver),compView_6.ref,this.parentInjector.get(import24.GestureController),this.parentInjector.get(import25.TransitionController),this.parentInjector.get(import20.DeepLinker,(null as any)));
    this._appEl_6.initComponent(this._Tab_6_4.context,([] as any[]),compView_6);
    compView_6.create(this._Tab_6_4.context,([] as any[]),(null as any));
    this._text_7 = this.renderer.createText((null as any),'\n',(null as any));
      compView_0.create(this._Tabs_0_4.context,[([] as any[]).concat([
        this._text_1,
        this._el_2,
        this._text_3,
        this._el_4,
        this._text_5,
        this._el_6,
        this._text_7
      ]
    )],(null as any));
    this._text_8 = this.renderer.createText(parentRenderNode,'\n',(null as any));
    this._expr_3 = import7.UNINITIALIZED;
    this._expr_4 = import7.UNINITIALIZED;
    this._expr_7 = import7.UNINITIALIZED;
    this._expr_8 = import7.UNINITIALIZED;
    this._expr_11 = import7.UNINITIALIZED;
    this._expr_12 = import7.UNINITIALIZED;
    this._viewQuery_tabs_0.reset([this._Tabs_0_4.context]);
    this.context.tabRef = this._viewQuery_tabs_0.first;
    this.init(([] as any[]),[
      this._el_0,
      this._text_1,
      this._el_2,
      this._text_3,
      this._el_4,
      this._text_5,
      this._el_6,
      this._text_7,
      this._text_8
    ]
    ,([] as any[]),([] as any[]));
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import26.Tab) && (2 === requestNodeIndex))) { return this._Tab_2_4.context; }
    if (((token === import26.Tab) && (4 === requestNodeIndex))) { return this._Tab_4_4.context; }
    if (((token === import26.Tab) && (6 === requestNodeIndex))) { return this._Tab_6_4.context; }
    if (((token === import27.Tabs) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 7)))) { return this._Tabs_0_4.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const currVal_0:any = import4.interpolate(1,'',this.context.TabIndex,'');
    this._Tabs_0_4.check_selectedIndex(currVal_0,throwOnChange,false);
    this._Tabs_0_4.detectChangesInternal(this,this._el_0,throwOnChange);
    const currVal_1:any = this.context.MainTab1;
    this._Tab_2_4.check_root(currVal_1,throwOnChange,false);
    const currVal_2:any = 'thumbs-up';
    this._Tab_2_4.check_tabIcon(currVal_2,throwOnChange,false);
    this._Tab_2_4.detectChangesInternal(this,this._el_2,throwOnChange);
    const currVal_5:any = this.context.MainTab2;
    this._Tab_4_4.check_root(currVal_5,throwOnChange,false);
    const currVal_6:any = 'timer';
    this._Tab_4_4.check_tabIcon(currVal_6,throwOnChange,false);
    this._Tab_4_4.detectChangesInternal(this,this._el_4,throwOnChange);
    const currVal_9:any = this.context.HelloFavoritePage;
    this._Tab_6_4.check_root(currVal_9,throwOnChange,false);
    const currVal_10:any = 'heart';
    this._Tab_6_4.check_tabIcon(currVal_10,throwOnChange,false);
    this._Tab_6_4.detectChangesInternal(this,this._el_6,throwOnChange);
    this.detectContentChildrenChanges(throwOnChange);
    const currVal_3:any = this._Tab_2_4.context._tabId;
    if (import4.checkBinding(throwOnChange,this._expr_3,currVal_3)) {
      this.renderer.setElementAttribute(this._el_2,'id',((currVal_3 == (null as any))? (null as any): currVal_3.toString()));
      this._expr_3 = currVal_3;
    }
    const currVal_4:any = this._Tab_2_4.context._btnId;
    if (import4.checkBinding(throwOnChange,this._expr_4,currVal_4)) {
      this.renderer.setElementAttribute(this._el_2,'aria-labelledby',((currVal_4 == (null as any))? (null as any): currVal_4.toString()));
      this._expr_4 = currVal_4;
    }
    const currVal_7:any = this._Tab_4_4.context._tabId;
    if (import4.checkBinding(throwOnChange,this._expr_7,currVal_7)) {
      this.renderer.setElementAttribute(this._el_4,'id',((currVal_7 == (null as any))? (null as any): currVal_7.toString()));
      this._expr_7 = currVal_7;
    }
    const currVal_8:any = this._Tab_4_4.context._btnId;
    if (import4.checkBinding(throwOnChange,this._expr_8,currVal_8)) {
      this.renderer.setElementAttribute(this._el_4,'aria-labelledby',((currVal_8 == (null as any))? (null as any): currVal_8.toString()));
      this._expr_8 = currVal_8;
    }
    const currVal_11:any = this._Tab_6_4.context._tabId;
    if (import4.checkBinding(throwOnChange,this._expr_11,currVal_11)) {
      this.renderer.setElementAttribute(this._el_6,'id',((currVal_11 == (null as any))? (null as any): currVal_11.toString()));
      this._expr_11 = currVal_11;
    }
    const currVal_12:any = this._Tab_6_4.context._btnId;
    if (import4.checkBinding(throwOnChange,this._expr_12,currVal_12)) {
      this.renderer.setElementAttribute(this._el_6,'aria-labelledby',((currVal_12 == (null as any))? (null as any): currVal_12.toString()));
      this._expr_12 = currVal_12;
    }
    this.detectViewChildrenChanges(throwOnChange);
    if (!throwOnChange) { if ((this.numberOfChecks === 0)) { this._Tabs_0_4.context.ngAfterViewInit(); } }
  }
  destroyInternal():void {
    this._Tabs_0_4.context.ngOnDestroy();
  }
}
export function viewFactory_HelloIonicPage0(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import3.AppElement):import1.AppView<import0.HelloIonicPage> {
  if ((renderType_HelloIonicPage === (null as any))) { (renderType_HelloIonicPage = viewUtils.createRenderComponentType('',0,import10.ViewEncapsulation.None,styles_HelloIonicPage,{})); }
  return new _View_HelloIonicPage0(viewUtils,parentInjector,declarationEl);
}