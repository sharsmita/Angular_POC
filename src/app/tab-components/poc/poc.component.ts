import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs';
@Component({
    selector: 'poc',
    templateUrl: './poc.component.html',
    styleUrls: ['./poc.component.css']
})

export class PocComponent {

    constructor(private http: Http,private router: Router) 
    {
        console.log("this is the poc constructor");
        this.getPocDetails();
     
    }
    
    pocDetailsList : any;
    getPocDetails(){
       // let url = "http://localhost:8888/pocDetails/";
        let url ="../../assets/poc_data.json";
            this.http.get(url).map((res: Response) => res.json().data)
              .subscribe(
              data => {
                  this.pocDetailsList = data;
                  console.log("data is ====",data);
               
            },
            error=>console.log("error........getPocDetails",error)
        )
    }
}