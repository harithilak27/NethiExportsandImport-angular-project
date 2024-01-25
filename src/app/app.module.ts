import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignupComponent } from './components/signup/signup.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import {NgImageSliderModule} from 'ng-image-slider';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HttpClient, HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { VegetablesComponent } from './products/vegetables/vegetables.component';
import { CoconutComponent } from './products/coconut/coconut.component';
import { RiceComponent } from './products/rice/rice.component';
import { LeavesComponent } from './products/leaves/leaves.component';
import { OrganicFertilizerComponent } from './organic/organic-fertilizer/organic-fertilizer.component';
import { OrganicProductsComponent } from './organic-products/organic-products.component';
import { NgToastModule } from 'ng-angular-popup';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';  
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { OrganicFoodsComponent } from './organic/organic-foods/organic-foods.component';
import { OrganicCosmeticsComponent } from './organic/organic-cosmetics/organic-cosmetics.component';
import { MilletsComponent } from './products/millets/millets.component';
import { EcoFriendlyComponent } from './products/eco-friendly/eco-friendly.component';
import { TokenInterceptor } from './interceptors/token.interceptor';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ContactUsComponent,
    FooterComponent,
    AboutComponent,
    VegetablesComponent,
    CoconutComponent,
    RiceComponent,
    LeavesComponent,
    OrganicFertilizerComponent,
    OrganicProductsComponent,
    OrganicFoodsComponent,
    OrganicCosmeticsComponent,
    MilletsComponent,
    EcoFriendlyComponent,
    SignupComponent,
    DashboardComponent,
    LoginComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgImageSliderModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgToastModule,
    TranslateModule.forRoot({  
      loader: {  
         provide: TranslateLoader,  
         useFactory: httpTranslateLoader,  
         deps: [HttpClient]  
         }  
      })  
  ],
  bootstrap: [AppComponent],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass:TokenInterceptor,
    multi:true
  }],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule { }

export function httpTranslateLoader(http: HttpClient) {  
  return new TranslateHttpLoader(http);  
}  
