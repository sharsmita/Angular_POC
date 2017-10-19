//import { Component } from '@angular/core';
import {Component, NgModule, ElementRef, Inject, ViewChild, OnInit} from '@angular/core'
import {BrowserModule} from '@angular/platform-browser'
import { ActivatedRoute, Router } from '@angular/router'
import {Location} from '@angular/common';
import 'rxjs/add/operator/pairwise';
import {Http, Response, Headers, RequestOptions} from '@angular/http';
import {environment} from '../environments/environment'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
/*
  openTab(evt, tabName) {
    var i, tabcontent, tablinks;



   tabcontent = document.getElementsByClassName("tabcontent");

    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
   // evt.currentTarget
   */

}

