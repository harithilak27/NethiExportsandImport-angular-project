import { NgModule } from '@angular/core';
import { GalleryComponent } from './gallery/gallery.component';
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

// gallery
import { OnionComponent } from './gallery/onion/onion.component';
import { FertilizerComponent } from './gallery/fertilizer/fertilizer.component';
import { RiceGalleryComponent } from './gallery/rice-gallery/rice-gallery.component';
import { PotatoComponent } from './gallery/potato/potato.component';
import { LeavesGalleryComponent } from './gallery/leaves-gallery/leaves-gallery.component';

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
  {path:'products/organicProducts',component:OrganicProductsComponent},
  {path:'gallery',component:GalleryComponent},
  {path:'gallery/onion',component:OnionComponent},
  {path:'gallery/fertilizer',component:FertilizerComponent},
  {path:'gallery/rice-gallery',component:RiceGalleryComponent},
  {path:'gallery/potato',component:PotatoComponent},
  {path:'gallery/leaves',component:LeavesGalleryComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
