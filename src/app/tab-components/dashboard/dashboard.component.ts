import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs';
@Component({
    selector: 'dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent {

    constructor(private http: Http,private router: Router) 
    {
        console.log("this is the constructor");
     //   helloWorld();
        this.callApi();
     
    }
    url:any;
    ip:any;

    callApi(){
        console.log("-------- inside callApi-----------------");
    let url = "http://localhost:8888/test/";
    
        this.http.get(url).map((res: Response) => res.json())
          .subscribe(
          data => {
              console.log("response aya hai....",data.msg)
            this.ip= data.msg;
           
        },
        error=>console.log("error........")
    );
    }

}