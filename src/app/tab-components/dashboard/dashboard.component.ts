import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
    selector: 'dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent {

    constructor() 
    {
        console.log("this is the constructor");
    }

 
}