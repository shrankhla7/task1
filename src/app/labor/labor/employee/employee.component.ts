import { Component,  OnInit } from '@angular/core';
import { Employee } from './employee.model';
import { OrderrByPipe } from './orderby.pipe'

declare var $ : any;
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

employeeDetails = []
cardDetailsss = []
expanded = false;
public daterange: any = {};


  constructor() { }

  ngOnInit() {
    this.employeeDetails = employeeData;
  }

  
 showCheckboxes() {
  var checkboxes = document.getElementById("checkboxes");
  if (!this.expanded) {
    checkboxes.style.display = "block";
    this.expanded = true;
  } else {
    checkboxes.style.display = "none";
    this.expanded = false;
  }
}
  
  public selectedDate(value: any, datepicker?: any) {

    datepicker.start = value.start;
    datepicker.end = value.end;

    this.daterange.start = value.start;
    this.daterange.end = value.end;
    this.daterange.label = value.label;
}

}

const employeeData : Employee[]= [
  {
  "name" : "Lizbeth Cortez",
  "id" : "139109",
  "cardDetails" : [
    {
    "type" : "VISA",
    "qty" : "52",
    "amount" : "983.65",
    "tip" : "983.65"
    },
    {
      "type" : "MASTER",
      "qty" : "12",
      "amount" : "260.31",
      "tip" : "260.31"
    },
    {
        "type" : "AMEX",
        "qty" : "12",
        "amount" : "174.97",
        "tip" : "174.97"
     },
     {
      "type" : "DISCVR",
      "qty" : "12",
      "amount" : "52.74",
      "tip" : "52.74"
      },
      {
        "type" : "Bruincard",
        "qty" : "12",
        "amount" : "160.71",
        "tip" : "160.71"
      },
      {
          "type" : "QSA",
          "qty" : "12",
          "amount" : "0.00",
          "tip" : "0.00"
       },
       {
         "type" : "CASH",
         "qty" : "12",
         "amount" : "101.86",
         "tip" : "101.86"
       },
       {
           "type" : "TIPS",
           "qty" : "12",
           "amount" : "63.61",
           "tip" : "63.61"
        }
    ]
  },
  {
    "name" : "Baldomero Cortez",
    "id" : "139118",
    "cardDetails" : [
      {
      "type" : "VISA",
      "qty" : "52",
      "amount" : "983.65",
      "tip" : "983.65"
      },
      {
        "type" : "MASTER",
        "qty" : "12",
        "amount" : "260.31",
        "tip" : "260.31"
      },
      {
          "type" : "AMEX",
          "qty" : "12",
          "amount" : "174.97",
          "tip" : "174.97"
       },
       {
        "type" : "DISCVR",
        "qty" : "12",
        "amount" : "52.74",
        "tip" : "52.74"
        },
        {
          "type" : "Bruincard",
          "qty" : "12",
          "amount" : "160.71",
          "tip" : "160.71"
        },
        {
            "type" : "QSA",
            "qty" : "12",
            "amount" : "0.00",
            "tip" : "0.00"
         },
         {
           "type" : "CASH",
           "qty" : "12",
           "amount" : "101.86",
           "tip" : "101.86"
         },
         {
             "type" : "TIPS",
             "qty" : "12",
             "amount" : "63.61",
             "tip" : "63.61"
          }
      ]
    }
]
