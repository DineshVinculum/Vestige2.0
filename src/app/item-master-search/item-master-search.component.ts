import { Component, OnInit } from '@angular/core';
import { Router,  NavigationExtras,ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-item-master-search',
  templateUrl: './item-master-search.component.html',
  styleUrls: ['./item-master-search.component.css']
})
export class ItemMasterSearchComponent implements OnInit {
  names:any;
  Master_names:any;
  queryString:String;
  
  constructor(public router: Router) { 
  this.names = ['1001','|||||||','Vestige Aloe Vera','Aloe Vera','V-Aloe Vera','Aloe Vera','Home-Item', 'Receipt-1', '200'];
  this.Master_names = ['1002','|||||||','Vestige Aloe Vera','Aloe Vera','V-Aloe Vera','Aloe Vera','Home-Item', 'Receipt-1', '200']
  }

  ngOnInit() {
  }


}
