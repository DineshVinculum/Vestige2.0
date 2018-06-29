import { Component, OnInit,ElementRef,ViewChild } from '@angular/core';
import { Router,  NavigationExtras,ActivatedRoute } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-item-master',
  templateUrl: './item-master.component.html',
  styleUrls: ['./item-master.component.css']
})
export class ItemMasterComponent implements OnInit {

  title:String;
  names:any;
  queryString:String;
  clickMessage = '';
  returnUrl: string;

  constructor(
      private route: ActivatedRoute,
      private fb: FormBuilder,   
      public router: Router
      ){
        this.title = "Item Master List";
        this.names = ['Item-1','Item-2','Item-3','Item-4','Item-5','Product-6','Product-7']
  }


  ngOnInit() {
  this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/itemmastersearch';
  }


  onClickMe() {
    this.clickMessage = 'Data Searched';

    console.log (this.names);
          if(true)
          {
            console.log ("Searching...");
             this.router.navigate([this.returnUrl]);
          }else{
            
          }

  }

}
