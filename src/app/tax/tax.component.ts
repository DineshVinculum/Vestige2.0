import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tax',
  templateUrl: './tax.component.html',
  styleUrls: ['./tax.component.css']
})
export class TaxComponent implements OnInit {

  selectedOption: number;
  gstOption: number;
  taxValue: any;

  options = [
    { name: "GST 0%", value: 0 },
    { name: "GST 5%", value: 5 },
    { name: "GST 12%", value: 12 },
    { name: "GST 18%", value: 18 },
    { name: "GST 24%", value: 24 }
  ]

  getvalue() {
    this.gstOption = this.selectedOption;
    if (this.selectedOption === undefined){
      this.taxValue = " ";
    }
    else{
    this.taxValue = (this.selectedOption) / 2;
    }
  }


  public vatview: boolean = false;
  public gstview: boolean = true;

  vat() {
    this.vatview = false;
    this.gstview = true;
  }
  gst() {
    this.vatview = true;
    this.gstview = false;
  }
  constructor() { }

  ngOnInit() {
  }

}
