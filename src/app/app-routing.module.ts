import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';
import { HomeComponent } from './home/home.component';
import { UserComponent } from './user/user.component';
import { NewArrivalsComponent } from './new-arrivals/new-arrivals.component';
import { ContactComponent } from './contact/contact.component';
import { ShopComponent } from './shop/shop.component';
import { ShopSingleComponent } from './shop-single/shop-single.component';
import { PayComponent } from './pay/pay.component';
import { ThankyouComponent } from './thankyou/thankyou.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { ShopRateComponent } from './shop-rate/shop-rate.component';
import { HeaderComponent } from './header/header.component';
import { BuylistComponent } from './buylist/buylist.component';

const routes: Routes = [
  {
    path: 'buylist/:id',
    component: BuylistComponent
  },
  {
    path: 'shoprate/:kw',
    component: ShopRateComponent
  },
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'cart',
    component: CartComponent
  },
  {
    path: 'user',
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
    path: 'shopsingle/:id',
    component: ShopSingleComponent
  },
  {
    path: 'pay',
    component: PayComponent
  },
  {
    path: 'thankyou',
    component: ThankyouComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'header',
    component: HeaderComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
