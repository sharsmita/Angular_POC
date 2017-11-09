import { Component } from '@angular/core';
import { DataTableResource } from 'angular-4-data-table-bootstrap-4';
//import persons from './data-table-demo1-data';


@Component({
    selector: 'data-table-1',
    providers: [],
    templateUrl: '/data-table.component.html',
    styleUrls: ['/data-table.component.css']
})
export class DataTableComponent {

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

    itemResource = new DataTableResource(this.pocList);
    items = [];
    itemCount = 0;

    constructor() {
        this.itemResource.count().then(count => this.itemCount = count);
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