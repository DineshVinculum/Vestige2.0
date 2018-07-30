import { Component, OnInit, ElementRef } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { Items } from '../item';
import { Router, ActivatedRoute } from '@angular/router';
import { ItemMasterService } from '../service/item-master.service';

@Component({
  selector: 'app-add-item',
  templateUrl: './add-item.component.html',
  styleUrls: ['./add-item.component.css']
})
export class AddItemComponent implements OnInit {
  
  pdPurchase =true;
  pdGeneral =false;
  pdSales =true;
  pdInventory=true;
  pdPrice=true;
  pdMISC=true;
  pdItemimage=true;
  pdRules=true;
  public items : Items[];
  public header; 
  public bottom;
  public url;
  public view;
 
rForm: FormGroup;

constructor(private el: ElementRef, private fb: FormBuilder,
  private itemMasterService: ItemMasterService,private router: Router,private activatedRoute:ActivatedRoute) { 
  this.rForm = fb.group({
    item_name: [null] ,
    item_code: [null],
    item_short_name: [null],
    category: [null] ,
    sub_category: [null],
    brand_name: [null],
    gst_code: [null] ,
    item_prefix: [null],
    manufacture_dtl: [null],
    item_type: [null] ,
    batch: [null] ,
    activity: [null],
    ean_code: [null],
    shelf_months: [null] ,
    shelf_years: [null] ,
    uom: [null],
    uom_type:[null],
    serial: [null],
    point_val: [null] ,
    business_value: [null],
    width: [null],
    height: [null],
    length: [null],
    min_ord_qty: [null],
    vendor_dtl: [null],
    sell_type: [null],
    allow_sale: [null],
    inclusive_tax: [null],
    allow_credit_sale: [null] ,
    allow_promotions: [null],
    allow_sales_return: [null],
    minimum_stock: [null] ,
    maximum_stock: [null] ,
    lead_time: [null],
    recorder_type: [null],
    min_day_stock_req: [null],
    allow_kit: [null] ,
    item_cost: [null],
    mrp: [null],
    landing_cost: [null] ,
    distributor_price: [null],
    transfer_price: [null],
    cust_group: [null],
    cust_grp_prc: [null],
    default_label: [null],
    term_nd_con: [null] ,
    product_img_web: [null],
    product_img_mob:  [null]
  
  });
}

ngOnInit() {
  this.pdGeneral = false;
  this.activatedRoute.queryParams.subscribe(params=>
    {
      if(params['item_code'] != null && params['item_name'] == "efg" ){
        this.header ="Edit Item";
        this.bottom ="Update";
        this.view =  "View List";
      }else{
        this.header ="Add New Item";
        this.bottom ="save";
      }
      console.log(params);
      if(params.length != 0){
        this.rForm=new FormGroup({
          item_code:new FormControl(params['item_code'] || ''),
          item_name:new FormControl(params['item_name'] || ''),  
          item_short_name:new FormControl(params['item_short_name'] || '') , 
          category:new FormControl(params['category'] || '') , 
          sub_category:new FormControl(params['sub_category'] || '') , 
          brand_name:new FormControl(params['brand_name'] || '') , 
          gst_code:new FormControl(params['gst_code'] || '') ,
          item_prefix:new FormControl(params['item_prefix'] || ''),
          manufacture_dtl:new FormControl(params['manufacture_dtl'] || ''),  
          item_type:new FormControl(params['item_type'] || '') , 
          batch:new FormControl(params['batch'] || '') , 
          activity:new FormControl(params['activity'] || '') , 
          ean_code:new FormControl(params['ean_code'] || '') , 
          shelf_months:new FormControl(params['shelf_months'] || '') ,
          shelf_years:new FormControl(params['shelf_years'] || ''),
          uom:new FormControl(params['uom'] || ''),  
          uom_type:new FormControl(params['uom_type'] || '') , 
          serial:new FormControl(params['serial'] || '') , 
          point_val:new FormControl(params['point_val'] || '') , 
          business_value:new FormControl(params['business_value'] || '') , 
          width:new FormControl(params['width'] || '') ,
          height:new FormControl(params['height'] || ''),
          length:new FormControl(params['length'] || ''),  
          min_ord_qty:new FormControl(params['min_ord_qty'] || '') , 
          vendor_dtl:new FormControl(params['vendor_dtl'] || '') , 
          sell_type:new FormControl(params['sell_type'] || '') , 
          allow_sale:new FormControl(params['allow_sale'] || '') , 
          inclusive_tax:new FormControl(params['inclusive_tax'] || ''),
          allow_credit_sale:new FormControl(params['allow_credit_sale'] || '') , 
          allow_promotions:new FormControl(params['allow_promotions'] || '') , 
          allow_sales_return:new FormControl(params['allow_sales_return'] || '') ,
          minimum_stock:new FormControl(params['minimum_stock'] || ''),
          maximum_stock:new FormControl(params['maximum_stock'] || ''),  
          lead_time:new FormControl(params['lead_time'] || '') , 
          recorder_type:new FormControl(params['recorder_type'] || '') , 
          min_day_stock_req:new FormControl(params['min_day_stock_req'] || '') , 
          allow_kit:new FormControl(params['allow_kit'] || '') , 
          item_cost:new FormControl(params['item_cost'] || '') , 
          mrp:new FormControl(params['mrp'] || '') ,
          landing_cost:new FormControl(params['landing_cost'] || ''),
          distributor_price:new FormControl(params['distributor_price'] || ''),  
          transfer_price:new FormControl(params['transfer_price'] || '') , 
          cust_group:new FormControl(params['cust_group'] || '') , 
          cust_grp_prc:new FormControl(params['cust_grp_prc'] || '') , 
          default_label:new FormControl(params['default_label'] || '') , 
          term_nd_con:new FormControl(params['term_nd_con'] || ''),
          product_img_mob:new FormControl(params['product_img_mob'] || '') , 
          product_img_web:new FormControl(params['product_img_web'] || '') 
          
          })
      }
      
    }

   
  )
  
}
saveItem(post): void {
  console.log(post);
  console.log("Form Submitted!");
}
}
