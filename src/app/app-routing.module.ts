import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { AboutComponent } from './about/about.component';
import { VegetablesComponent } from './products/vegetables/vegetables.component';
import { CoconutComponent } from './products/coconut/coconut.component';
import { RiceComponent } from './products/rice/rice.component';
import { LeavesComponent } from './products/leaves/leaves.component';
import { OrganicFertilizerComponent } from './organic/organic-fertilizer/organic-fertilizer.component';
import { OrganicProductsComponent } from './organic-products/organic-products.component';
import { OrganicFoodsComponent } from './organic/organic-foods/organic-foods.component';
import { OrganicCosmeticsComponent } from './organic/organic-cosmetics/organic-cosmetics.component';
import { MilletsComponent } from './products/millets/millets.component';
import { EcoFriendlyComponent } from './products/eco-friendly/eco-friendly.component';  

const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'home',component:HomeComponent},
  {path:'contactus',component:ContactUsComponent},
  {path:'aboutus',component:AboutComponent},
  {path:'products/vegetables',component:VegetablesComponent},
  {path:'products/cocoProducts',component:CoconutComponent},
  {path:'products/rice',component:RiceComponent},
  {path:'products/leaves',component:LeavesComponent},
  {path:'products/organic/organicFertilizer',component:OrganicFertilizerComponent},
  {path:'products/organic/organicFoods',component:OrganicFoodsComponent},
  {path:'products/organic/organicCosmetics',component:OrganicCosmeticsComponent},
  {path:'products/millets',component:MilletsComponent},
  {path:'products/ecoFriendly',component:EcoFriendlyComponent},
  {path:'products/organicProducts',component:OrganicProductsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
