import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import {Headers} from '@angular/http';
import {  OnInit, Pipe, PipeTransform } from '@angular/core';


@Pipe({name: 'escapeHtml', pure: false})
export class EscapeHtmlPipe implements PipeTransform {
   transform(value: any, args: any[] = []) {
       // Escape 'value' and return it
       return value;
   }
}
