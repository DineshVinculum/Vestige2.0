import { Component, OnInit,ElementRef,ViewChild } from '@angular/core';
import { Router,  NavigationExtras,ActivatedRoute } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { DataService } from '../service/data.service';


@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css'],
   providers: [DataService]
})
export class EmployeeComponent implements OnInit { 

  role = sessionStorage.getItem('role');

  public IsHodSales:boolean = false;
  public IsHodPurchase:boolean = false;
  public IsBranch:boolean = false;
  public IsDistributor:boolean = false;
  public IsDLCP:boolean = false;
  public IsManagement:boolean = false;


  title = 'Vestige 2.0';
  statuslogin:any;
  focusin: boolean = true;
  rForm: FormGroup;
  post:any;  
  usernameAlert:string="Username cannot be blank";
  passwordAlert:string="Password cannot be blank";
  loginAlert:string;
  loginError:boolean=false;
  returnUrl: string;
  username: string;
  password: string;

  constructor(
      private route: ActivatedRoute,
      private fb: FormBuilder,
      private authenticationservice:DataService,    
      public router: Router
    ) {
    this.rForm = fb.group({
      'username' : [null, Validators.required],
      'password' : [null, Validators.required],
    });
   }
   
   ngOnInit() {
    this.authenticationservice.logout();
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/dashboard';
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

 /* addPost(post) {
  console.log ("calling addPost");
   this.authenticationservice.login(post).subscribe(
      res => {

        if(res.login.role[0] == "admin")
          {
             this.router.navigate([this.returnUrl]);
          }else{
            this.loginError = true
            this.loginAlert = res.message;
          }
      },
       err => {
       console.log ("Error");
        return err;
          
      }
    );

  }
  */

  addPost(post) {
  console.log ("calling addPost");
          if(this.username ==  "Dinesh" && this.password ==  "123" )
          {
            console.log ("calling addPost1 with Location");
             this.router.navigate([this.returnUrl]);
          }else{
            console.log ("calling addPost2");
            this.loginError = true
            this.loginAlert = "User does not exist";
          }
  }
  onSelect(location: Location): void {
   console.log ("calling Location");
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
    this.authenticationservice.logout();
    this.router.navigate(['login']);
  }
}

