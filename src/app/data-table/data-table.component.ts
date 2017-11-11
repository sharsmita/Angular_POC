import { Component,OnInit,Input } from '@angular/core';
import { DataTableResource } from 'angular-4-data-table-bootstrap-4';
import {PocComponent} from '../tab-components/poc/poc.component';
import {DataTableService} from '../data-table/data-table-service';
//import persons from './data-table-demo1-data';


@Component({
    selector: 'data-table-1',

    templateUrl: '/data-table.component.html',
    styleUrls: ['/data-table.component.css']
})
export class DataTableComponent implements OnInit {
  
  @Input() pocList :any =[];
/*
    pocList = [
        { "CustomerId": "Aaron 2Moore", "URL": "www.religare.com", "Vulnerability": "Cross Site Scripting", "Severity": "critical", "RequestDate": "2015-11-06", "EndDate": "2015-11-10" },
        { "CustomerId": "Aaron 2Moore", "URL": "www.religare.com", "Vulnerability": "Cross Site Scripting", "Severity": "critical", "RequestDate": "2015-11-06", "EndDate": "2015-11-10" },
        { "CustomerId": "Aaron 2Moore", "URL": "www.religare.com", "Vulnerability": "Cross Site Scripting", "Severity": "critical", "RequestDate":"2015-11-06","EndDate": "2015-11-10" },
        { "CustomerId": "Aaron 2Moore", "URL": "www.religare.com", "Vulnerability": "Cross Site Scripting", "Severity": "critical", "RequestDate": "2015-11-06", "EndDate": "2015-11-10" },
        { "CustomerId": "Aaron 2Moore", "URL": "www.religare.com", "Vulnerability": "Cross Site Scripting", "Severity": "critical", "RequestDate": "2015-11-06", "EndDate": "2015-11-10" },
        { "CustomerId": "Aaron 2Moore", "URL": "www.religare.com", "Vulnerability": "Cross Site Scripting", "Severity": "critical", "RequestDate": "2015-11-06", "EndDate": "2015-11-10" },
        { "CustomerId": "Aaron 2Moore", "URL": "www.religare.com", "Vulnerability": "Cross Site Scripting", "Severity": "critical", "RequestDate": "2015-11-06", "EndDate": "2015-11-10" },
        { "CustomerId": "Aaron 2Moore", "URL": "www.religare.com", "Vulnerability": "Cross Site Scripting", "Severity": "critical", "RequestDate": "2015-11-06", "EndDate": "2015-11-10" },
        { "CustomerId": "Aaron 2Moore", "URL": "www.religare.com", "Vulnerability": "Cross Site Scripting", "Severity": "critical", "RequestDate": "2015-11-06", "EndDate": "2015-11-10" },
        { "CustomerId": "Aaron 2Moore", "URL": "www.religare.com", "Vulnerability": "Cross Site Scripting", "Severity": "critical", "RequestDate": "2015-11-06", "EndDate": "2015-11-10" },
        { "CustomerId": "Aaron 2Moore", "URL": "www.religare.com", "Vulnerability": "Cross Site Scripting", "Severity": "critical", "RequestDate": "2015-11-06", "EndDate": "2015-11-10" },
        { "CustomerId": "Aaron 2Moore", "URL": "www.religare.com", "Vulnerability": "Cross Site Scripting", "Severity": "critical", "RequestDate": "2015-11-06", "EndDate": "2015-11-10" },
        { "CustomerId": "Aaron 2Moore", "URL": "www.religare.com", "Vulnerability": "Cross Site Scripting", "Severity": "critical", "RequestDate": "2015-11-06", "EndDate": "2015-11-10" },
        { "CustomerId": "Aaron 2Moore", "URL": "www.religare.com", "Vulnerability": "Cross Site Scripting", "Severity": "critical", "RequestDate": "2015-11-06", "EndDate": "2015-11-10" },
        { "CustomerId": "Aaron 2Moore", "URL": "www.religare.com", "Vulnerability": "Cross Site Scripting", "Severity": "critical", "RequestDate": "2015-11-06", "EndDate": "2015-11-10" },
        { "CustomerId": "Aaron 2Moore", "URL": "www.religare.com", "Vulnerability": "Cross Site Scripting", "Severity": "critical", "RequestDate": "2015-11-06", "EndDate": "2015-11-10" },
        { "CustomerId": "Aaron 2Moore", "URL": "www.religare.com", "Vulnerability": "Cross Site Scripting", "Severity": "critical", "RequestDate": "2015-11-06", "EndDate": "2015-11-10" },
        { "CustomerId": "Aaron 2Moore", "URL": "www.religare.com", "Vulnerability": "Cross Site Scripting", "Severity": "critical", "RequestDate": "2015-11-06", "EndDate": "2015-11-10" },
        { "CustomerId": "Aaron 2Moore", "URL": "www.religare.com", "Vulnerability": "Cross Site Scripting", "Severity": "critical", "RequestDate": "2015-11-06", "EndDate": "2015-11-10" },
        { "CustomerId": "Aaron 2Moore", "URL": "www.religare.com", "Vulnerability": "Cross Site Scripting", "Severity": "critical", "RequestDate": "2015-11-06", "EndDate": "2015-11-10" },
        { "CustomerId": "Aaron 2Moore", "URL": "www.religare.com", "Vulnerability": "Cross Site Scripting", "Severity": "critical", "RequestDate": "2015-11-06", "EndDate": "2015-11-10" },
        { "CustomerId": "Aaron 2Moore", "URL": "www.religare.com", "Vulnerability": "Cross Site Scripting", "Severity": "critical", "RequestDate": "2015-11-06", "EndDate": "2015-11-10" },
        { "CustomerId": "Aaron 2Moore", "URL": "www.religare.com", "Vulnerability": "Cross Site Scripting", "Severity": "critical", "RequestDate": "2015-11-06", "EndDate": "2015-11-10" },
        { "CustomerId": "Aaron 2Moore", "URL": "www.religare.com", "Vulnerability": "Cross Site Scripting", "Severity": "critical", "RequestDate": "2015-11-06", "EndDate": "2015-11-10" },
        { "CustomerId": "Aaron 2Moore", "URL": "www.religare.com", "Vulnerability": "Cross Site Scripting", "Severity": "critical", "RequestDate": "2015-11-06", "EndDate": "2015-11-10" },
        { "CustomerId": "Aaron 2Moore", "URL": "www.religare.com", "Vulnerability": "Cross Site Scripting", "Severity": "critical", "RequestDate": "2015-11-06", "EndDate": "2015-11-10" }
    ];
    */
    itemResource;
    items = [];
    itemCount = 0;

    constructor() {
     //   console.log(" data received by service is =======>>>>",this.tableData.getPocList());
    
     
    }
     
    ngOnInit(){
        console.log(" data received by CHILD is =======>>>>",this.pocList);
        this.itemResource = new DataTableResource(this.pocList);
        this.itemResource.count().then(count => this.itemCount = count);
        console.log(" count is =======>>>>",this.itemCount);
    }

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