import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductListComponent } from './product-list/product-list.component';
import { CartComponent } from './cart/cart.component';
import { HttpClientModule } from '@angular/common/http';
import { ModalComponent } from './cart-modal/cart-modal.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CheckoutComponent } from './checkout/checkout.component';
import {MatDialogModule} from '@angular/material/dialog';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component'
import { APP_ROUTES } from './app.route';
import { LayoutComponent } from './dashboard/layout/layout.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { ReactiveFormsModule } from '@angular/forms';
import { EditCartModalComponent } from './edit-cart-modal/edit-cart-modal.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavBarComponent,
    ProductDetailsComponent,
    ProductListComponent,
    CartComponent,
    ModalComponent,
    CheckoutComponent,
    PageNotFoundComponent,
    LayoutComponent,
    EditCartModalComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule,
    DashboardModule,
    RouterModule.forRoot(APP_ROUTES),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents:[ModalComponent,EditCartModalComponent]
})
export class AppModule { }
