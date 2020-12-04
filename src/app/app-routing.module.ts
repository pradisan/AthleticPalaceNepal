import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ClothingComponent } from './men-product/clothing/clothing.component';
import { ShoesComponent } from './men-product/shoes/shoes.component';

// import { TopsComponent } from './categories/tops/tops.component';
// import { BottomComponent } from './categories/bottom/bottom.component';
// import { AccessoriesComponent } from './categories/accessories/accessories.component';
// import { SalesComponent } from './categories/sales/sales.component';
import { ProductDetailsComponent } from './product-details/product-details.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'shoes', component: ShoesComponent },
  { path: 'clothings', component: ClothingComponent },
  // { path: 'bottom', component: BottomComponent },
  // { path: 'accessories', component: AccessoriesComponent },
  // { path: 'sales', component: SalesComponent },
  { path: 'item/:type/:id', component: ProductDetailsComponent },
  { path: 'shoes/:type', component: ShoesComponent },
  { path: 'clothings/:type', component: ClothingComponent },

]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}