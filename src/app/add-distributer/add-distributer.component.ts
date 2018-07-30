import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { DistributorService } from '../service/distributor.service';

@Component({
  selector: 'app-add-distributer',
  templateUrl: './add-distributer.component.html',
  styleUrls: ['./add-distributer.component.css']
})
export class AddDistributerComponent implements OnInit {
  rForm: FormGroup;

  distributorIdAlert:string="Distributor Id cannot be blank";
  uplineIdAlert:string="Upline Id cannot be blank";
  mobileAlert:string="Mobile Number cannot be blank";
  addressAlert:string="Address cannot be blank";
  countryAlert:string="Country cannot be blank";
  cityAlert:string="City cannot be blank";
  stateAlert:string="State cannot be blank";

  isFirstOpen = true;
  
  rows = [
    { name: '<div>hi</div>', gender: 'Male', company: 'Swimlane' },
    { name: 'Dany', gender: 'Male', company: 'KFC' },
    { name: 'Molly', gender: 'Female', company: 'Burger King' },
  ];
  columns = [
    { prop: 'name' },
    { name: 'Gender' },
    { name: 'Company' },
    { prop: 'name' },
    { name: 'Gender' },
    { name: 'Company' }
  ];


  constructor(private _distributorSvc: DistributorService, private fb: FormBuilder){
		this.rForm =  fb.group ({

		  distributorId: [null, Validators.required],
		  uplineId: [null, Validators.required],
		  uplineName: [null],

		  distributorBasicInfo: fb.group({
			title: ['select'],
			firstName: [null],
			lastName: [null],
			dob: [null],
			phone: [null],
			mobile: [null, Validators.required],
			email: [null],
			pin: [null],
			address: [null, Validators.required],
			country: [null, Validators.required],
			city: [null, Validators.required],
			state: [null, Validators.required],
			zone : [null]
		  }),

		  distributorBankData: fb.group({
			nomneeTitle: ['select'],
			nomneeFirstName: [null],
			nomneeLastName: [null],
			nomneeDOB: [null],
			bankName: [null],
			accountNumber: [null],
			ifsCode: [null],
			PAN: [null]
		  })
		  
		});
	  }

	  ngOnInit() {
		this._distributorSvc.getNextDistributorId()
							.subscribe((maxIdArr) => this.rForm
														 .patchValue({distributorId : Math.max(...maxIdArr) + 1}));
	  }

	  validateDstrbtrId() {
		this._distributorSvc.validateDistributorId(this.rForm.value.distributorId);
	  }

	  getUplineName() : void {
		this._distributorSvc.getUplineName(this.rForm.value.uplineId)
							.subscribe((uplnName)=> {this.rForm.patchValue({uplineName : uplnName})});
	  }

	  saveDistributor() : void {
		//console.log(this.rForm.value);
		this._distributorSvc.postDistributor(this.rForm.value).subscribe((response) => console.log(response));
	  }
  }
