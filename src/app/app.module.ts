import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './Components/navbar/navbar.component';
import { FooterComponent } from './Components/footer/footer.component';
import { LoginComponent } from './Components/login/login.component';
import { RegisterComponent } from './Components/register/register.component';
import { HomeComponent } from './Components/home/home.component';
import { ProductsComponent } from './Components/products/products.component';
import { ProductsDetailsComponent } from './Components/products-details/products-details.component';
import { NotFoundComponent } from './Components/not-found/not-found.component';
import { CartDetailsComponent } from './Components/cart-details/cart-details.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ProuctOperationsComponent } from './Components/prouct-operations/prouct-operations.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    ProductsComponent,
    ProductsDetailsComponent,
    NotFoundComponent,
    CartDetailsComponent,
    ProuctOperationsComponent
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
export class AppModule { }
