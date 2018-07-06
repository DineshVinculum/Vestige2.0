import { Component, OnInit } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { PosService } from '../service/pos.service';
import { TranslateService } from '../service/translate.service';

import { ShoppingCartService } from "../service/shopping-cart.service";
import { Observable } from "rxjs/Observable";
import { Subscription } from "rxjs/Subscription";

import { Products } from '../product';
import { HealthCare } from "../models/healthcare";
import { CartItem } from "../models/cart-item.model";
import { ProductsDataService } from "../service/products.service";
import { ShoppingCart } from "../shopping-cart.model";
import { Observer } from "rxjs/Observer";
import { HealthFood } from '../models/healthfood';

//import { PRODUCTS } from '../mock-pos';

interface ICartItemWithProduct extends CartItem {
  product: Products;
  totalCost: number;
}

interface ICartItemListWithProduct extends CartItem {
  productlist: HealthCare;
  totalCost: number;
}

interface ICartItemHealthProduct extends CartItem {
  healthfoodlist: HealthFood;
  totalCost: number;
}

@Component({
  selector: 'app-pos',
  templateUrl: './pos.component.html',
  styleUrls: ['./pos.component.css']
})
export class PosComponent implements OnInit {

  public products: Observable<Products[]>;
  public productslist: Observable<HealthCare[]>;
  public healthfoodslist: Observable<HealthFood[]>;
  price: any = 300;
  public count : number = 0;
  public qty : number = 0;
  public price1 : number = 0;
  public quantity : number = 1;
  task: string;
  tasks = [];

  public sum : number = 0;
  public quickProduct : number = 10101;
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

  public cart: Observable<ShoppingCart>;
  public qtyCount: number;
  public itemCount: number;
  private cartSubscription: Subscription;

  public cartItems: ICartItemWithProduct[];
  public cartlistItems: ICartItemListWithProduct[];
  public carthealthItems: ICartItemHealthProduct[];
  private singleproduct: Products[];
  private singleproductlist: HealthCare[];
  private singlehealthproductlist: HealthFood[];
  showdefault: boolean;
  

  // Displaying Products From Mock Data
  // products = PRODUCTS;

  
  constructor(private translateService: TranslateService,private productsService: ProductsDataService,
     private shoppingCartService: ShoppingCartService) {
  this.distributorNo = ['55555551','55555552','11000008','11000009']
   }

  ngOnInit() {
  
    this.products = this.productsService.all();
    this.productslist = this.productsService.allHealthCare();
    this.healthfoodslist = this.productsService.allHealthFoods();
   // this.characters = this.atService.getCharacters();
  // pos.service.ts Data
  // console.log (this.atService.getCharacters());
   // this.getProducts();
   this.cart = this.shoppingCartService.get();
  //  this.cartSubscription = this.cart.subscribe((cart) => {
  //   this.itemCount = cart.items.map((x) => x.quantity).reduce((p, n) => p + n, 0);
  //   });

  this.cartSubscription = this.cart.subscribe((cart) => {
    this.qtyCount = cart.items.map((x) => x.quantity).reduce((p, n) => p + n, 0);
    this.itemCount = cart.items.length;

    this.productsService.all().subscribe((products) => {
      this.singleproduct = products;
      this.cartItems = cart.items
                         .map((item) => {
                            const product = this.singleproduct.find((p) => p.id === item.productId);
                            return {
                              ...item,
                              product,
                              totalCost: product.price * item.quantity };
                         });
    });

    this.productsService.allHealthCare().subscribe((productslist) => {
      this.singleproductlist = productslist;
      this.cartlistItems = cart.items
                         .map((item) => {
                            const productlist = this.singleproductlist.find((p) => p.id === item.productId);
                            return {
                              ...item,
                              productlist,
                              totalCost: productlist.price  * item.quantity };
                         });
    });

    this.productsService.allHealthFoods().subscribe((healthfoodslist) => {
      this.singlehealthproductlist = healthfoodslist;
      this.carthealthItems = cart.items
                         .map((item) => {
                            const healthfoodlist = this.singlehealthproductlist.find((p) => p.id === item.productId);
                            return {
                              ...item,
                              healthfoodlist,
                              totalCost: 10  * item.quantity };
                         });
    });

  });

  }


  selectedproducts: Products;
  onSelect(products: Products): void {
  this.selectedproducts = products;
  console.log("this.selectedproducts"+this.selectedproducts.id);
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

//   onClick(){
//      this.tasks.push({name: this.task});
//      this.task = '';
//    }

   onClick(){
      this.items.push({name: this.selectedproducts.P1, quantity: this.quantity});
      this.item = '';
      this.count += 1;
      console.log ("In Onclick");
    }


        // Add to cart
        public addProductToCart(product: Products): void {
          console.log("product:"+ product.id);
          this.shoppingCartService.addItem(product, 1);
        }

        // Add to cart
        public addProductQuantityToCart(product: Products, qty): void {
        console.log("addProductQuantityToCart ****************--:"+ product);
        console.log("***********QuantityToCart ****************--:"+ qty.value);
        this.shoppingCartService.addItem(product, parseInt(qty.value));
        }

        data = { "id": "10101", 
        "name": "TOP SELLING", 
        "P1": "ASSURE BB CREAM", 
        "P2": "ASSURE FACIAL MASSAGE CREAM" ,
         "P1src": "http://www.myvestige.com/images/product-detail/803.jpg" , 
         "P2src": "http://www.myvestige.com/images/product-detail/FaceMassage.png",
         "price": 300
        };
         // Add Promotion to cart
        public addPromotionToCart(product: Products): void {
        this.shoppingCartService.addItem(product, 1);
        this.count ++;
        }

        // Delete product from cart
        public removeProductFromCart(product: Products): void {
          console.log("this.qtyCount:" + this.qtyCount);
          this.shoppingCartService.addItem(product, - this.qtyCount );
        }

        public productInCart(product: Products): boolean {
          return Observable.create((obs: Observer<boolean>) => {
            const sub = this.shoppingCartService
                            .get()
                            .subscribe((cart) => {
                              obs.next(cart.items.some((i) => i.productId === product.id));
                              obs.complete();
                            });
            sub.unsubscribe();
          });
        }



    // onClickpull(id: string){

    //   this.items = this.items.filter(item => item !== id);
    //   this.item = '';
    //   this.count -= 1;
    // }

    // onClick1(){
    //   this.items.push({name: this.selectedproducts.P2, quantity: this.quantity});
    //   this.item = '';
    //   this.count += 1;
    //   console.log ("In Onclick");
    // }

  //  onSearch(SearchedItem){
  //      if (SearchedItem.value.split("-")[0] == '10101'){
  //      this.items.push({name: this.selectedproducts.P1 , quantity: SearchedItem.value.split("-")[1]});
  //      this.item = '';
  //      this.count += 1;
  //     }
  //  }


///// RND for unique quantity
    onSearch(SearchedItem){
      if (SearchedItem.value.split("-")[0] == this.quickProduct){
        // if (SearchedItem.value.split("-")[0] == '10101'){
  //console.log("test2" + this.quickProduct);
//         console.log (this.items);
 // console.log("No for deletion:" + SearchedItem.value.split("-")[1]);

//         this.items.push({name: this.selectedproducts.P1 , quantity: SearchedItem.value.split("-")[1]});
//         this.item = '';
//         this.count += 1;

// this.shoppingCartService.addItem(this.selectedproducts, parseInt(SearchedItem.value.split("-")[1]));

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
      // ,
      // {id: 2, location: 'DDDO MI-M0516'}
    ];
    current = 1;
    locationDropdown(id: number): void {
    //Logic will change for Dropdown action
      const NAME = this.list.find((item: any) => item.id === +id).location;
    //  this.log += `Value ${NAME} was selected\n`;
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
      // getRowSum(): number {
      //   let sum = 0;
      //   for (let i = 0; i < this.items.length; i++) {
      //     sum += parseInt(this.items[i].quantity);
      //   }
      //   return sum;
      // }

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
    
    public ngOnDestroy(): void {
      if (this.cartSubscription) {
        this.cartSubscription.unsubscribe();
      }
    }
  }