import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { NewArrivalsComponent } from './new-arrivals/new-arrivals.component';
import { ContactComponent } from './contact/contact.component';
import { ShopComponent } from './shop/shop.component';
import { ShopSingleComponent } from './shop-single/shop-single.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'cart',
    component: CartComponent
  },
  {
    path: 'user/:id',
    component: UserComponent
  },
  {
    path: 'new-arrivals',
    component: NewArrivalsComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'shop',
    component: ShopComponent
  },
  {
    path: 'shop/:cateories/:id',
    component: ShopSingleComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
