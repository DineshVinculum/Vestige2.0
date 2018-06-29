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
import { ItemMasterSearchComponent } from './item-master-search/item-master-search.component';
import { PosComponent } from './pos/pos.component';
import { PosService } from './service/pos.service';
import { TranslateService } from './service/translate.service';
import { TranslatePipe } from './translate.pipe';

import { HttpClientModule } from '@angular/common/http'; 
import { ShoppingCartService } from './service/shopping-cart.service';

import { LocalStorageServie, StorageService } from "./service/storage.service";
import { ProductsDataService } from "./service/products.service";
import { DistributerComponent } from './distributer/distributer.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    EmployeeComponent,
    DashboardComponent,
    ItemMasterComponent,
    FilterPipe,
    ItemMasterSearchComponent,
    PosComponent,
    TranslatePipe,
    DistributerComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,                             
    ReactiveFormsModule ,
    routing,
    HttpClientModule
  ],
  providers: [AuthguardService, PosService, TranslateService,     LocalStorageServie, ProductsDataService,
    { provide: StorageService, useClass: LocalStorageServie },
    {
      deps: [StorageService, ProductsDataService],
      provide: ShoppingCartService,
      useClass: ShoppingCartService
    }
  
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
