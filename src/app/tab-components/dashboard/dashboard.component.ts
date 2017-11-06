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
     //   this.callPortalApi();
    }
    url:any;
    pendingPoc:any;
    duetodayPoc:any;
    overduePoc : any;
    
    totalduePoc : any;
    loggedInUser:any;

    callApi(){
        
    let url = "http://localhost:8888/test/";
    
        this.http.get(url).map((res: Response) => res.json())
          .subscribe(
          data => {
              console.log("response ...........",data.PendingPOC)
            this.pendingPoc= data.PendingPOC;
            this.duetodayPoc= data.duetodayPoc;
            this.overduePoc= data.overduePoc;
            this.totalduePoc = this.pendingPoc + this.duetodayPoc + this.overduePoc;
        },
        error=>console.log("error........")
    );
    }
    callPortalApi(){
       
    let url = "http://localhost:8888/test/website";
    
        this.http.get(url).map((res: Response) => res.json())
          .subscribe(
          data => {
              console.log("---- portal call working....",JSON.stringify(data));
              console.log("---login id---bis==>>",JSON.stringify(data.data.loggedInUser["loginId"]));
              this.loggedInUser = data.data.loggedInUser["loginId"];
           // this.loggedInUser= JSON.stringify(data);
           
        },
        error=>console.log("error........")
    
    );
    }

    rediretPoc(){
              
        this.router.navigate(["/poc"]);
    }
}