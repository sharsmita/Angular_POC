import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs';
@Component({
    selector: 'was',
    templateUrl: './was.component.html',
    styleUrls: ['./was.component.css']
})

export class WasComponent {

    constructor(private http: Http,private router: Router) 
    {
        console.log("this is the WAS constructor");
     //   helloWorld();
     
    }
    

}