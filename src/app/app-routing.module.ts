import { ProuctOperationsComponent } from './Components/prouct-operations/prouct-operations.component';
import { CartDetailsComponent } from './Components/cart-details/cart-details.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import { LoginComponent } from './Components/login/login.component';
import { RegisterComponent } from './Components/register/register.component';
import { ProductsComponent } from './Components/products/products.component';
import { ProductsDetailsComponent } from './Components/products-details/products-details.component';
import { NotFoundComponent } from './Components/not-found/not-found.component';

const routes: Routes = [
  {path: "",component:HomeComponent},
  {path: "login",component:LoginComponent},
  {path: "register",component:RegisterComponent},
  {path: "products",component:ProductsComponent},
  {path: "products/:id",component:ProductsDetailsComponent},
  {path: "products/:id/:operation",component:ProuctOperationsComponent},
  {path: "cart",component:CartDetailsComponent},
  {path:"**",component:NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
