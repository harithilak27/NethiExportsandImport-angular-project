import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import {NgImageSliderModule} from 'ng-image-slider';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { VegetablesComponent } from './products/vegetables/vegetables.component';
import { CoconutComponent } from './products/coconut/coconut.component';
import { RiceComponent } from './products/rice/rice.component';
import { LeavesComponent } from './products/leaves/leaves.component';
import { OrganicFertilizerComponent } from './organic/organic-fertilizer/organic-fertilizer.component';
import { OrganicProductsComponent } from './organic-products/organic-products.component';

import { TranslateLoader, TranslateModule } from '@ngx-translate/core';  
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { OrganicFoodsComponent } from './organic/organic-foods/organic-foods.component';
import { OrganicCosmeticsComponent } from './organic/organic-cosmetics/organic-cosmetics.component';
import { MilletsComponent } from './products/millets/millets.component';
import { EcoFriendlyComponent } from './products/eco-friendly/eco-friendly.component';  
// import { HttpClient, HttpClientModule } from '@angular/common/http';  


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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgImageSliderModule,
    ReactiveFormsModule,
    HttpClientModule,
    TranslateModule.forRoot({  
      loader: {  
         provide: TranslateLoader,  
         useFactory: httpTranslateLoader,  
         deps: [HttpClient]  
         }  
      })  
  ],
  bootstrap: [AppComponent],
  providers: [],
})
export class AppModule { }

export function httpTranslateLoader(http: HttpClient) {  
  return new TranslateHttpLoader(http);  
}  
