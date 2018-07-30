import { Component, OnInit } from '@angular/core';
import { TranslateService } from '../../service/translate.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private translateService: TranslateService) { }

  ngOnInit() {
  }
  flag = "https://image.shutterstock.com/image-vector/india-flag-vector-icon-260nw-594384464.jpg";
selectLanguage(event: any){
      if(event.target.value === 'en')  
        this.flag = "https://image.shutterstock.com/image-vector/india-flag-vector-icon-260nw-594384464.jpg";
      else if(event.target.value === 'ch')  
        this.flag = "https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Flag_of_the_People%27s_Republic_of_China.svg/255px-Flag_of_the_People%27s_Republic_of_China.svg.png";
      else if(event.target.value === 'ne')  
        this.flag = "http://flagpedia.net/data/flags/big/np.png";
      else if(event.target.value === 'ar')  
        this.flag = "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Flag_of_the_United_Arab_Emirates.svg/255px-Flag_of_the_United_Arab_Emirates.svg.png";

        return this.translateService.selectLanguage(event.target.value);
  }

  isNotificationActive: boolean = false;
  OpenNotifications() {
    this.isNotificationActive = !this.isNotificationActive;
  }

  isLocActive: boolean = false;
  OpenLocation() {
    this.isLocActive = !this.isLocActive;
  }

  isUserActive: boolean = false;
  OpenUser() {
    this.isUserActive = !this.isUserActive;
  }
  
}
