import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { AppRoutingModule } from './app-routing.module';
import { CartComponent } from './cart/cart.component';
import { HomeComponent } from './home/home.component';
import { NewArrivalsComponent } from './new-arrivals/new-arrivals.component';
import { ContactComponent } from './contact/contact.component';
import { UserComponent } from './user/user.component';
import { ShopComponent } from './shop/shop.component';
import { ShopSingleComponent } from './shop-single/shop-single.component';
import { PayComponent } from './pay/pay.component';
import { ThankyouComponent } from './thankyou/thankyou.component';
import { HttpClientModule } from '@angular/common/http';
import { ShopRateComponent } from './shop-rate/shop-rate.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    CartComponent,
    HomeComponent,
    NewArrivalsComponent,
    ContactComponent,
    UserComponent,
    ShopComponent,
    ShopSingleComponent,
    PayComponent,
    ThankyouComponent,
    ShopRateComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
