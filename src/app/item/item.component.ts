import { Component, OnInit } from '@angular/core';
import { ItemListDataService } from '../service/item-list.service';
import { Items } from '../item';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  public items : Items[];
  constructor(private itemlistDataService: ItemListDataService) { }

  ngOnInit() {
     this.itemlistDataService.all().subscribe(
       res =>{
         console.log(res);
         this.items = res;
       },error=>{
         console.log(error);
       }
     );
  }

}
