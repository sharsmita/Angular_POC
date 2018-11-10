import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Http, Headers, RequestOptions, Response } from '@angular/http';
import { DataTableResource } from 'angular-4-data-table-bootstrap-4';
import {FormsModule} from '@angular/forms';
import {DataTableService} from '../../data-table/data-table-service';
import 'rxjs/add/operator/map';
import 'rxjs';
@Component({
    selector: 'poc',
    providers : [DataTableService],
    templateUrl: './poc.component.html',
    styleUrls: ['./poc.component.css'],

})

export class PocComponent {
    pocDetailsList : any=[];
    dataLoaded =false;
    constructor(private http: Http,private router: Router) 
    {
        console.log("this is the poc constructor");
        this.getPocDetails();
      //  this.itemResource.count().then(count => this.itemCount = count);
    }
    
    
    getPocDetails(){
        console.log("---- getPocDetails called--- ");
        let url = "http://localhost:8888/sla/pocDetails";
       // let url ="../../assets/poc_data.json";
            this.http.get(url).map((res: Response) => res.json().data)
              .subscribe(
              data => {
                 
                  let resp = data.data;
                  if(resp){
                  this.dataLoaded = true;
                  this.pocDetailsList = resp;
                  console.log("data is === ====",resp);
                  }
                  else{
                    this.dataLoaded = false; 
                  }
               // this.tableData.setPocList(data);
            },
            error=>console.log("error........getPocDetails",error)
        )
    }
   // itemResource = new DataTableResource(this.pocDetailsList);
    /*
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

    */
}