import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AddProductFormComponent } from './components/add-product-form/add-product-form.component';
import { ProductsListComponent } from './components/products-list/products-list.component';
import { OrderSuccessComponent } from './components/order-success/order-success.component';
import{AppMaterialModule} from './modules/app-material/app-material.module'


@NgModule({
  declarations: [
    AppComponent,
    AddProductFormComponent,
    ProductsListComponent,
    OrderSuccessComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    AppMaterialModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
