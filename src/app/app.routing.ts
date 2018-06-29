import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { EmployeeComponent } from './employee/employee.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ItemMasterComponent } from './item-master/item-master.component';
import { AuthguardService }  from './service/authguard.service';
import { ItemMasterSearchComponent } from './item-master-search/item-master-search.component';
import { PosComponent } from './pos/pos.component';
import { DistributerComponent } from './distributer/distributer.component';

const appRoutes: Routes = [
   
    { path: 'login', component: LoginComponent },
	{ path: 'employee', component: EmployeeComponent },
	{ path: 'dashboard', component: DashboardComponent },
	{ path: 'itemmaster', component: ItemMasterComponent },
	{ path: 'itemmastersearch', component: ItemMasterSearchComponent },
	{ path: 'distributer', component: DistributerComponent },
	{ path: 'pos', component: PosComponent },

    // otherwise redirect to home
    { path: '**', redirectTo: '/login' }
];

export const routing = RouterModule.forRoot(appRoutes);