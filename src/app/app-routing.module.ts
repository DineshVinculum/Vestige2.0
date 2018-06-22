import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import { LoginComponent } from './login/login.component';
import { PosComponent } from './pos/pos.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes =[
    { path: 'login', component: LoginComponent },
    { path: 'pos', component: PosComponent },
    { path: 'dashboard', component: DashboardComponent },

    
    // otherwise redirect to home
    { path: '**', redirectTo: '/login' }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule {}

