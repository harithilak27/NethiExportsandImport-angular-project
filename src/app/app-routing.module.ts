import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AboutComponent } from './about/about.component';
import { VegetablesComponent } from './vegetables/vegetables.component';
import { CoconutComponent } from './coconut/coconut.component';
import { RiceComponent } from './rice/rice.component';
import { LeavesComponent } from './leaves/leaves.component';
import { OrganicFertilizerComponent } from './organic-fertilizer/organic-fertilizer.component';
import { OrganicProductsComponent } from './organic-products/organic-products.component';

const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'contactus',component:ContactUsComponent},
  {path:'aboutus',component:AboutComponent},
  {path:'products/vegetables',component:VegetablesComponent},
  {path:'products/cocoProducts',component:CoconutComponent},
  {path:'products/rice',component:RiceComponent},
  {path:'products/leaves',component:LeavesComponent},
  {path:'products/organicFertilizer',component:OrganicFertilizerComponent},
  {path:'products/organicProducts',component:OrganicProductsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
