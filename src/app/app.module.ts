import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import {NgImageSliderModule} from 'ng-image-slider';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HttpClientModule } from '@angular/common/http';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { VegetablesComponent } from './vegetables/vegetables.component';
import { CoconutComponent } from './coconut/coconut.component';
import { RiceComponent } from './rice/rice.component';
import { LeavesComponent } from './leaves/leaves.component';
import { OrganicFertilizerComponent } from './organic-fertilizer/organic-fertilizer.component';
import { OrganicProductsComponent } from './organic-products/organic-products.component';


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
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgImageSliderModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  bootstrap: [AppComponent],
  providers: [],
})
export class AppModule { }
