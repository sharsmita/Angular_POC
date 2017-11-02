import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs';
@Component({
    selector: 'tas',
    templateUrl: './tas.component.html',
    styleUrls: ['./tas.component.css']
})

export class TasComponent {

    constructor(private http: Http,private router: Router) 
    {
        console.log("this is the poc constructor");
    }
    

}