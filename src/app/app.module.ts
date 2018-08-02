import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { Observable} from 'rxjs/Rx';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';

import { routing }        from './app.routing';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AuthguardService }  from './service/authguard.service';
import { EmployeeComponent } from './employee/employee.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ItemMasterComponent } from './item-master/item-master.component';

import {FilterPipe} from './FilterPipe';
import { PosComponent } from './pos/pos.component';
import { PosService } from './service/pos.service';
import { TranslateService } from './service/translate.service';
import { TranslatePipe } from './translate.pipe';
import { HttpClientModule } from '@angular/common/http'; 
import { ShoppingCartService } from './service/shopping-cart.service';

import { LocalStorageServie, StorageService } from "./service/storage.service";
import { ProductsDataService } from "./service/products.service";
import {DistributorService} from "./service/distributor.service";
import {ItemListDataService} from "./service/item-list.service";
import {ItemMasterService} from "./service/item-master.service";
import { DistributerComponent } from './distributer/distributer.component';
import { DataService } from './service/data.service';
import { HeaderComponent } from './shared/header/header.component';
import { SidenavComponent } from './shared/sidenav/sidenav.component';
import {  LocationComponent } from './location/location.component';
import { TaxComponent } from './tax/tax.component';
import { VendorMasterComponent } from './vendor-master/vendor-master.component';
import { PurchaseOrderComponent } from './purchase-order/purchase-order.component';
import { StockTransferComponent } from './stock-transfer/stock-transfer.component';
import { PromotionComponent } from './promotion/promotion.component';
import { AddDistributerComponent } from './add-distributer/add-distributer.component';


import { TabsModule } from 'ngx-bootstrap';
import { AccordionModule } from 'ngx-bootstrap';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { ItemComponent } from './item/item.component';
import { AddItemComponent } from './add-item/add-item.component';
import { DataTablesModule } from 'angular-datatables';
import { DistributorInfoComponent } from './distributor-info/distributor-info.component';
import { DistributerInfoService } from './service/distributer-info.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    EmployeeComponent,
    DashboardComponent,
    ItemMasterComponent,
    FilterPipe,
    PosComponent,
    DistributerComponent,
    HeaderComponent,
    SidenavComponent,
    LocationComponent,
    TaxComponent,
    VendorMasterComponent,
    PurchaseOrderComponent,
    StockTransferComponent,
    PromotionComponent,
    AddDistributerComponent,
    ItemComponent,
    AddItemComponent,
    TranslatePipe,
    DistributorInfoComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,                             
    ReactiveFormsModule ,
    routing,
    HttpClientModule,
    TabsModule.forRoot(),
    AccordionModule.forRoot(),
    BsDatepickerModule.forRoot(),
    NgxDatatableModule,
    DataTablesModule,
  ],
  providers: [AuthguardService, PosService, TranslateService,DataService,LocalStorageServie, ProductsDataService, DistributorService,
    ItemListDataService,ItemMasterService,DistributerInfoService,
    { provide: StorageService, useClass: LocalStorageServie},
    {
      deps: [StorageService, ProductsDataService],
      provide: ShoppingCartService,
      useClass: ShoppingCartService
    }
  
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
