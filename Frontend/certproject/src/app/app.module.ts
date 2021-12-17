import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './components/login/login.component';

import { HomepageComponent } from './components/homepage/homepage.component';
import { ProductCategoryComponent } from './components/product-category/product-category.component';
import { ProductService } from './services/product.service';

import { ProfileComponent } from './components/profile/profile.component';
import { ProductPageComponent } from './components/product-page/product-page.component';
import { CartComponent } from './components/cart/cart.component';
import { CartService } from './services/cart.service';
import { CheckoutComponent } from './components/checkout/checkout.component';

import { HttpClientModule } from '@angular/common/http';

import { OrdersComponent } from './components/orders/orders.component';




@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    HomepageComponent,
    ProductCategoryComponent,
    ProfileComponent,

    CartComponent,
    CheckoutComponent,

    ProductPageComponent,

    CartComponent,

    CheckoutComponent,
    CartComponent,
    OrdersComponent


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ProductService, CartService],
  bootstrap: [AppComponent]
})
export class AppModule { }
