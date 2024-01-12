import { Component } from '@angular/core';
import { defer } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'ang-app';
  // faMobile = faMobile;

  status: boolean = false;

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
