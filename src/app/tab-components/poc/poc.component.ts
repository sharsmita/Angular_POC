import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { DataTableResource } from 'angular-4-data-table-bootstrap-4';
import {FormsModule} from '@angular/forms';
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
        this.itemResource.count().then(count => this.itemCount = count);
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

    itemResource = new DataTableResource(this.pocDetailsList);
    items = [];
    itemCount = 0;
    
    reloadItems(params) {
        this.itemResource.query(params).then(items => this.items = items);
    }

    // special properties:
    rowClick(rowEvent) {
        console.log('Clicked: ' + rowEvent.row.item.name);
    }

    rowDoubleClick(rowEvent) {
        alert('Double clicked: ' + rowEvent.row.item.name);
    }

    rowTooltip(item) { return item.jobTitle; }
}