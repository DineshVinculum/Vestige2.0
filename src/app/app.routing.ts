import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { EmployeeComponent } from './employee/employee.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ItemMasterComponent } from './item-master/item-master.component';
import { AuthguardService }  from './service/authguard.service';
import { PosComponent } from './pos/pos.component';
import { DistributerComponent } from './distributer/distributer.component';
import { LocationComponent } from './location/location.component';
import { TaxComponent } from './tax/tax.component';
import { VendorMasterComponent } from './vendor-master/vendor-master.component';
import { PurchaseOrderComponent } from './purchase-order/purchase-order.component';
import { StockTransferComponent } from './stock-transfer/stock-transfer.component';
import { PromotionComponent } from './promotion/promotion.component';
import { AddDistributerComponent } from './add-distributer/add-distributer.component';
import { ItemComponent } from './item/item.component';
import { AddItemComponent } from './add-item/add-item.component';
import { DistributorInfoComponent } from './distributor-info/distributor-info.component';



const appRoutes: Routes = [
   
    { path: 'login', component: LoginComponent },
	{ path: 'employee', component: EmployeeComponent },
	{ path: 'dashboard', component: DashboardComponent },
	{ path: 'itemmaster', component: ItemMasterComponent },
	{ path: 'distributer', component: DistributerComponent },
	{ path: 'pos', component: PosComponent },
	{ path: 'location', component: LocationComponent },
	{ path: 'tax', component: TaxComponent },
	{ path: 'vendor-master', component: VendorMasterComponent },
	{ path: 'purchase-order', component: PurchaseOrderComponent },
	{ path: 'stock-transfer', component: StockTransferComponent },
	{ path: 'promotion', component: PromotionComponent },
	{ path: 'add-distributer', component: AddDistributerComponent },
	{ path: 'item', component: ItemComponent },
	{ path: 'add-item', component: AddItemComponent },
	{ path: 'distributor-info', component: DistributorInfoComponent },

    // otherwise redirect to home
    { path: '**', redirectTo: '/login' }
];

export const routing = RouterModule.forRoot(appRoutes);