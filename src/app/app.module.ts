import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {AppRoutingModule} from './app-routing.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';
import { PosComponent } from './pos/pos.component';

import { PosService } from './service/pos.service';
import { TranslateService } from './service/translate.service';
import { TranslatePipe } from './mock/translate.pipe';
import { DashboardComponent } from './dashboard/dashboard.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PosComponent,
    TranslatePipe,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [PosService, TranslateService],
  bootstrap: [AppComponent]
})
export class AppModule { }
