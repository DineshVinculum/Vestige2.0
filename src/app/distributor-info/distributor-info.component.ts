import { Component, OnInit } from '@angular/core';
import { Disinfo } from '../distributer-info';
import { Http } from '@angular/http';
import { Subject } from 'rxjs/Subject';
import { DistributerInfoService } from '../service/distributer-info.service';

@Component({
  selector: 'app-distributor-info',
  templateUrl: './distributor-info.component.html',
  styleUrls: ['./distributor-info.component.css']
})
export class DistributorInfoComponent implements OnInit {
  dtOptions: DataTables.Settings = {};

  dtTrigger: Subject<Disinfo[]> = new Subject<Disinfo[]>();
  disinfo: Disinfo[];

  detailValue: any;
  distributorId: any;
  firstName: string;
  DOB: any;
  DistributorLastName: any;
  DistributorFirstName: any;
  lastName: any;
  enrolledOn: any;
  uplineNo: any;
  uplineName: any;
  coDistributorName: any;
  coDistributorDOB: any;
  password: any;
  address: any;
  country: any;
  serialNo: any;
  state: any;
  zone: any;
  city: any;
  pin: any;
  phone: any;
  mobile: any;
  fax: any;
  email: any;
  isFormAvailable: any;
  pan: any;
  saveOn: any;
  remarks: any;
  cancelledCheque: any;
  star: any;
  directorGroup: any;
  recordSavedBy: any;
  entitled: any;
  directorName: any;
  recordSavedOn: any;
  prevCumPv: any;
  exclPv: any;
  selfPv: any;
  groupPv: any;
  totalPv: any;
  percent: any;
  totalCumPv: any;
  lprevCumPv: any;
  lexclPv: any;
  lselfPv: any;
  lgroupPv: any;
  ltotalPv: any;
  lpercent: any;
  ltotalCumPv: any;



  getDistributerId() {
    if (this.distributorId === "100008") {
      this.firstName = "Saurabh";
      this.lastName = "Paliwal";
      this.DistributorFirstName = "Saurabh";
      this.DistributorLastName = "Paliwal";
      this.DOB = "12-Jun-1993";
      this.enrolledOn = "15-Jul-17";
      this.uplineNo = "100005";
      this.uplineName = "Nishant Kumar";
      this.coDistributorName = "Rishi  Kumar";
      this.coDistributorDOB = "1-Nov-95";
      this.password = "*******";
      this.address = "2B , Sector-62";
      this.country = "India";
      this.serialNo = "1012";
      this.state = "Uttar Pradesh";
      this.zone = "Noida";
      this.city = "Noida";
      this.pin = "201309";
      this.phone = "2613898";
      this.mobile = "7657217652";
      this.fax = "";
      this.email = "rkumar@vinculum.com";
      this.isFormAvailable = "Yes";
      this.pan = "SHFDGAJ232B";
      this.saveOn = "18-Aug-17";
      this.remarks = "Very Good";
      this.cancelledCheque = "2";
      this.star = "DOUBLE UNIVERSAL CROWN";
      this.directorGroup = "11000008";
      this.recordSavedBy = "Ram1";
      this.entitled = "";
      this.directorName = "RAMESHPUNHANI";
      this.recordSavedOn = "";
      this.prevCumPv = "392202517.2";
      this.exclPv = "106.96";
      this.selfPv = "37.33";
      this.groupPv = "6962029.76";
      this.totalPv = "6962067.09";
      this.percent = "20";
      this.totalCumPv = "399164584.3";
      this.lprevCumPv = "385599089.7";
      this.lexclPv = "239.44";
      this.lselfPv = "117.68";
      this.lgroupPv = "6603309.78";
      this.ltotalPv = "6603427.46";
      this.lpercent = "20";
      this.ltotalCumPv = "";
    }
    else {
      alert('This Distributer does not exist, Please recheck Distributor No.');
    }
  }

  clearSearch() {
    this.distributorId = "";
    this.firstName = "";
    this.lastName = "";
    this.DistributorFirstName = "";
    this.DistributorLastName = "";
    this.DOB = "";
    this.enrolledOn = "";
    this.uplineNo = "";
    this.uplineName = "";
    this.coDistributorName = "";
    this.coDistributorDOB = "";
    this.password = "";
    this.address = "";
    this.country = "";
    this.serialNo = "";
    this.state = "";
    this.zone = "";
    this.city = "";
    this.pin = "";
    this.phone = "";
    this.mobile = "";
    this.fax = "";
    this.email = "";
    this.isFormAvailable = "";
    this.pan = "";
    this.saveOn = "";
    this.remarks = "";
    this.cancelledCheque = "";
    this.star = "";
    this.directorGroup = "";
    this.recordSavedBy = "";
    this.entitled = "";
    this.directorName = "";
    this.recordSavedOn = "";
    this.prevCumPv = "";
    this.exclPv = "";
    this.selfPv = "";
    this.groupPv = "";
    this.totalPv = "";
    this.percent = "";
    this.totalCumPv = "";
    this.lprevCumPv = "";
    this.lexclPv = "";
    this.lselfPv = "";
    this.lgroupPv = "";
    this.ltotalPv = "";
    this.lpercent = "";
    this.ltotalCumPv = "";
  }
  uplineSearch() {
    if (this.distributorId === null || this.distributorId === undefined )
     {
      alert('Please enter Distributor No.');
    }
    else{
    
      console.log(this.distributorId)
    this.distributorId = "100005";
    this.firstName = "Nishant";
    this.lastName = "Kumar";
    this.DistributorFirstName = "Nishant";
    this.DistributorLastName = "Kumar";
    this.DOB = "12-Jun-1991";
    this.enrolledOn = "12-Mar-17";
    this.uplineNo = "100002";
    this.uplineName = "Rahul Kumar";
    this.coDistributorName = "Pankaj  Kumar";
    this.coDistributorDOB = "1-Nov-89";
    this.password = "*******";
    this.address = "2B , Sector-62";
    this.country = "India";
    this.serialNo = "1015";
    this.state = "Uttar Pradesh";
    this.zone = "Noida";
    this.city = "Noida";
    this.pin = "201309";
    this.phone = "2613898";
    this.mobile = "7657217652";
    this.fax = "";
    this.email = "rkumar@vinculum.com";
    this.isFormAvailable = "Yes";
    this.pan = "SHFDGAJ232B";
    this.saveOn = "18-Aug-17";
    this.remarks = "Very Good";
    this.cancelledCheque = "2";
    this.star = "DOUBLE UNIVERSAL CROWN";
    this.directorGroup = "11000008";
    this.recordSavedBy = "Ram1";
    this.entitled = "";
    this.directorName = "RAMESHPUNHANI";
    this.recordSavedOn = "";
    this.prevCumPv = "392202517.2";
    this.exclPv = "106.96";
    this.selfPv = "37.33";
    this.groupPv = "6962029.76";
    this.totalPv = "6962067.09";
    this.percent = "20";
    this.totalCumPv = "399164584.3";
    this.lprevCumPv = "385599089.7";
    this.lexclPv = "239.44";
    this.lselfPv = "117.68";
    this.lgroupPv = "6603309.78";
    this.ltotalPv = "6603427.46";
    this.lpercent = "20";
    this.ltotalCumPv = "";
    }

  }


  constructor(private DistributerInfoService: DistributerInfoService) { }

  ngOnInit() {

    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10
    };

    this.DistributerInfoService.all().subscribe(
      res => {
        this.disinfo = res;
        this.dtTrigger.next();
      }
    );


  }

}
