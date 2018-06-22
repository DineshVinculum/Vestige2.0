import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PosService } from '../service/pos.service';
import { TranslateService } from '../service/translate.service';

import { Location } from '../mock/location';
import { PRODUCTS } from '../mock/mock-pos';

@Component({
  selector: 'app-pos',
  templateUrl: './pos.component.html',
  styleUrls: ['./pos.component.css']
})
export class PosComponent implements OnInit {


  price: any = 300;
  public count : number = 0;
  public price1 : number = 0;
  public quantity : number = 1;
  task: string;
  tasks = [];

  public sum : number = 0;

  item: string;
  items = [];
  name = 'RAMESH PUNHANI';
  locationName = 'AALO MI-M0516';
  distributorNo:any;
  public show:boolean = false;
  public hideshow:boolean = true;
  public gridview:boolean = true;
  public listview:boolean = false;
  public search:boolean = false;
  public default:boolean = true;
  

  // Displaying Products From Mock Data
  products = PRODUCTS;

  
  constructor(private translateService: TranslateService) {
  this.distributorNo = ['55555551','55555552','11000008','11000009']
   }

  ngOnInit() {
    this.translateService.selectLanguage('en');
  }


  selectedproducts: Location;
  onSelect(products: Location): void {
  this.selectedproducts = products;
  this.default = false;
  }

  verifyDistributor(search){
        if (search.value == '11000008'){
          this.show = true;
          this.hideshow = false;
        } else {
          this.show = false;
          this.hideshow = true;
          alert('This Distributer does not exist, Please recheck Distributor No.');
        }      
    }

   onClick(){
      this.items.push({name: this.selectedproducts.P1, quantity: this.quantity});
      this.item = '';
      this.count += 1;
      console.log ("In Onclick");
    }

    onClickpull(id: string){
      this.items = this.items.filter(item => item !== id);
      this.item = '';
      this.count -= 1;
    }

    onClick1(){
      this.items.push({name: this.selectedproducts.P2, quantity: this.quantity});
      this.item = '';
      this.count += 1;
      console.log ("In Onclick");
    }

    onSearch(SearchedItem){
        if (SearchedItem.value.split("-")[0] == '10101'){
        this.items.push({name: this.selectedproducts.P1 , quantity: SearchedItem.value.split("-")[1]});
        this.item = '';
        this.count += 1;

        }
    }


  addItem(SearchItem){
        if (SearchItem.value == 'HEA'){
          this.search = true;
        } else {
          this.search = false;
          //alert('This Item does not exist, Please recheck Item No.');
        }      
    }

// Language
flag = "https://image.shutterstock.com/image-vector/india-flag-vector-icon-260nw-594384464.jpg";
selectLanguage(event: any){
      if(event.target.value === 'en')  
        this.flag = "https://image.shutterstock.com/image-vector/india-flag-vector-icon-260nw-594384464.jpg";
      else if(event.target.value === 'ch')  
        this.flag = "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Flag_of_the_People%27s_Republic_of_China.svg/255px-Flag_of_the_People%27s_Republic_of_China.svg.png";
      else if(event.target.value === 'ne')  
        this.flag = "http://flagpedia.net/data/flags/big/np.png";
      else if(event.target.value === 'ar')  
        this.flag = "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Flag_of_the_United_Arab_Emirates.svg/255px-Flag_of_the_United_Arab_Emirates.svg.png";

        return this.translateService.selectLanguage(event.target.value);
  }


  // Radio Selection and Address Binding
    address = 'Self';
    logAddress(element: HTMLInputElement): void {
      if(`${element.value}` !== 'Self')  
        this.address = "HOUSE NO. 23,,ROAD NO. 65,PUNJABI BAGH WEST,New Delhi,Delhi";
        //this.address = this.atService.getCharacters().value[1].address;
      else
        this.address = "Self";
    }

//Quantity

    logQuantity(element: HTMLInputElement): void {
        this.price = 300 * parseInt(`${element.value}`);
    }


//Cash

  Cash(){
    alert('Please Pay Cash Amount : Rs ' +  this.price * this.count);
  }

  // Locations
    list: any = [
      {id: 1, location: 'AALO MI-M0516'}
    ];
    current = 1;
    locationDropdown(id: number): void {
    //Logic will change for Dropdown action
      const NAME = this.list.find((item: any) => item.id === +id).location;
    }

  // Toggle Functionality
  public buttonName:any = 'Show';
    toggle() {
      this.show = !this.show;
      // CHANGE THE NAME OF THE BUTTON.
      if(this.show)  
        this.buttonName = "Hide";
      else
        this.buttonName = "Show";
    }


    // Total 
      getRowSum(): number {
        let sum = 0;
        for (let i = 0; i < this.items.length; i++) {
          sum += parseInt(this.items[i].quantity);
        }
        return sum;
      }

    ispayopen: false;
    
    viewGrid(){
        this.gridview = true;
        this.listview = false;
      }
      hideGrid(){
        this.gridview = false;
        this.listview = true;
      }      
      isNotificationActive:boolean = false;
  OpenNotifications(){
    this.isNotificationActive = !this.isNotificationActive;
  }

    isLocActive:boolean = false;
    OpenLocation(){
      this.isLocActive = !this.isLocActive;
    }
    
    isUserActive:boolean = false;
    OpenUser(){
      this.isUserActive = !this.isUserActive;
    } 
  }


