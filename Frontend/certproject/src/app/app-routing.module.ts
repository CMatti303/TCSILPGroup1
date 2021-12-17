import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './components/homepage/homepage.component';
import { LoginComponent } from './components/login/login.component';
import { ProductCategoryComponent } from './components/product-category/product-category.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ProductPageComponent } from './components/product-page/product-page.component';
import { CartComponent } from './components/cart/cart.component';
import { CheckoutComponent } from './components/checkout/checkout.component';

const routes: Routes = [
{path:'checkout', component:CheckoutComponent},
{path:'register', component: RegistrationComponent},
{path:'login', component: LoginComponent},
{path:'cart', component: CartComponent},
{path:'categories/:category_id', component: ProductCategoryComponent},
{path:'products/:product_id', component: ProductPageComponent},
{path:'', component: HomepageComponent},
{path: 'profile', component: ProfileComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
