import { Component, OnInit,ElementRef,ViewChild } from '@angular/core';
import { Router,  NavigationExtras,ActivatedRoute } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})

export class LoginComponent implements OnInit {
  
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
      public router: Router
    ) {
    this.rForm = fb.group({
      'username' : [null, Validators.required],
      'password' : [null, Validators.required],
    });
   }

   ngOnInit() {
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/pos';
    }

addPost(post) {
console.log ("Login Post : ");
console.log (post);

          if(this.username ==  "Sales@vestige.com" && this.password ==  "123")
          {
            console.log ("calling Hod-Sales");
            console.log (this.returnUrl);
            
            sessionStorage.setItem('role', 'admin');
            this.router.navigate([this.returnUrl]);
          } else if(this.username ==  "Purchase@vestige.com" && this.password ==  "123")
          {
            console.log ("calling Hod-Purchase");
            sessionStorage.setItem('role', 'admin');
            this.router.navigate([this.returnUrl]);
          } else if(this.username ==  "Branch@vestige.com" && this.password ==  "123")
          {
            console.log ("calling Branch");
            sessionStorage.setItem('role', 'branch');
            this.router.navigate([this.returnUrl]);
          }
          else if(this.username ==  "5555" && this.password ==  "123")
          {
            console.log ("calling Distributor");
            sessionStorage.setItem('role', 'distributor');
            this.router.navigate([this.returnUrl]);
          }
          else if(this.username ==  "DLCP@vestige.com" && this.password ==  "123")
          {
            console.log ("calling DLCP");
            sessionStorage.setItem('role', 'dlcp');
            this.router.navigate([this.returnUrl]);
          }
          else if(this.username ==  "Admin@vestige.com" && this.password ==  "123")
          {
            console.log ("calling Admin");
            sessionStorage.setItem('role', 'mgmt');
            this.router.navigate([this.returnUrl]);
          } else{
            console.log ("User does not exist");
            this.loginError = true
            this.loginAlert = "User does not exist";
          }
  }
  
}
