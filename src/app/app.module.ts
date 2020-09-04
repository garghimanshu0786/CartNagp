import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {Routes,RouterModule} from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductdescriptionComponent } from './productdescription/productdescription.component';
import { HomeComponent } from './home/home.component';
import { CartComponent } from './cart/cart.component';

const routes :Routes = [
  {path:'ProductdescriptionComponent/:id',component:ProductdescriptionComponent},
  {path:'cart/:id',component:CartComponent},
  {path:'home',component:HomeComponent},
  {path:'',component:HomeComponent},
]

@NgModule({
  declarations: [
    AppComponent,
    ProductdescriptionComponent,
    HomeComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes)

  ],
  exports:[RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule {

 }
