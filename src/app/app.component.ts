import { AuthService } from './services/auth.service';
import { ApiService } from './services/api.service';
import { Component, OnInit } from '@angular/core';
import { UserStoreService } from 'src/app/services/user-store.service';
import { NgToastService } from 'ng-angular-popup';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'ang-app';

  status: boolean = false;

  public users:any = [];
  public role!:string;

  public fullName : string = "";
  constructor(private api : ApiService, private auth: AuthService, private userStore: UserStoreService) { }

  clickEvent(){
    this.status = !this.status;       
  }

  ngAfterViewInit() {
    const script = document.createElement('script');
    script.src = 'https://static.elfsight.com/platform/platform.js';
    script.setAttribute('data-use-service-core', '');
    script.setAttribute('defer', '');
    document.body.appendChild(script);
  
  script.onload = () => {
    // "https://static.elfsight.com/platform/platform.js" 
    "https://static.elfsight.com/platform/platform.js" 

  };
  }

}
