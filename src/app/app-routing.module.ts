import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ClothingComponent } from './products/clothing/clothing.component';
import { ShoesComponent } from './products/shoes/shoes.component';

// import { TopsComponent } from './categories/tops/tops.component';
// import { BottomComponent } from './categories/bottom/bottom.component';
// import { AccessoriesComponent } from './categories/accessories/accessories.component';
// import { SalesComponent } from './categories/sales/sales.component';
import { ProductDetailsComponent } from './product-details/product-details.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  // { path: 'accessories', component: AccessoriesComponent },
  // { path: 'sales', component: SalesComponent },
  { path: 'item/:type/:id', component: ProductDetailsComponent },
  { path: 'shoes/:gender', component: ShoesComponent },
  { path: 'shoes/:gender/:category', component: ShoesComponent },
  { path: 'clothing/:gender', component: ClothingComponent },
  { path: 'clothing/:gender/:category', component: ClothingComponent },

]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}