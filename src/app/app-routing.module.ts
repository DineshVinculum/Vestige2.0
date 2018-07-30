import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PosComponent } from './pos/pos.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { TaxComponent } from './tax/tax.component';
import { VendorMasterComponent } from './vendor-master/vendor-master.component';
import { PromotionComponent } from './promotion/promotion.component';
import { StockTransferComponent } from './stock-transfer/stock-transfer.component';
import { DistributerComponent } from './distributer/distributer.component';
import { LocationComponent } from './location/location.component';
import { ItemMasterComponent } from './item-master/item-master.component';
import { ItemComponent } from './item/item.component';
import { AddItemComponent } from './add-item/add-item.component';
import { AddDistributerComponent } from './add-distributer/add-distributer.component';


const routes: Routes =[
    { path: 'login', component: LoginComponent },
    { path: 'pos', component: PosComponent },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'tax', component: TaxComponent },
    { path: 'vendor_master', component: VendorMasterComponent },
    { path: 'promotion', component: PromotionComponent },
    { path: 'stock-transfer', component: StockTransferComponent },
    { path: 'distributer', component: DistributerComponent },
    { path: 'location', component: LocationComponent },
    { path: 'item-master', component: ItemMasterComponent },
    { path: 'item', component: ItemComponent },
    { path: 'add-item', component: AddItemComponent },
    { path: 'add-distributer', component: AddDistributerComponent },


    // otherwise redirect to home
    { path: '**', redirectTo: '/login' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}
