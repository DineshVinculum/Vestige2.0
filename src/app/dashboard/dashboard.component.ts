import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  role = sessionStorage.getItem('role');

  public IsHodSales:boolean = false;
  public IsHodPurchase:boolean = false;
  public IsBranch:boolean = false;
  public IsDistributor:boolean = false;
  public IsDLCP:boolean = false;
  public IsManagement:boolean = false;

  statuslogin:any;
  focusin: boolean = true;
  post:any;  
  usernameAlert:string="Username cannot be blank";
  passwordAlert:string="Password cannot be blank";
  loginAlert:string;
  loginError:boolean=false;
  returnUrl: string;
  username: string;
  password: string;

  constructor(public router: Router) { }

  ngOnInit() {
    if(this.role ==  "admin")
          {
            this.IsHodSales = true;
            this.IsHodPurchase = true;
          }

            else if(this.role ==  "branch")
          {
            this.IsBranch = true;
          }

            else if(this.role ==  "distributor")
          {
            this.IsDistributor = true;
          }
            else if(this.role ==  "dlcp")
          {
            this.IsDLCP = true;
          }

            else if(this.role ==  "mgmt")
          {
            this.IsManagement = true;
          }
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

  logout(event: Event): void {
    event.preventDefault();
    this.router.navigate(['login']);
  }

}