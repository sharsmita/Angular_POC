import { Component,OnInit, Input, Output, EventEmitter} from '@angular/core';

import {Router, ActivatedRoute } from '@angular/router';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import {Location} from '@angular/common';
import {environment} from '../../environments/environment'


@Component({
  selector: 'header-panel',
  templateUrl: './header-panel.html',
  styleUrls: ['./header-panel.component.css']
})

export class HeaderPanelComponent {

  headers = new Headers({ 'Content-Type': 'application/json' });
  options = new RequestOptions({ headers: this.headers });

  
 
  constructor() {

       }
  }
