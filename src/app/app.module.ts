import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CartComponent } from './cart/cart.component';
import { AccountComponent } from './account/account.component';
import { ProductsComponent } from './products/products.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { AdminHomeComponent } from './page/Admin/admin-home/admin-home.component';
import { SideBarreComponent } from './composants/side-barre/side-barre.component';
import { ListesProduitsComponent } from './composants/listes-produits/listes-produits.component';
import { AddProductComponent } from './Admistration/add-product/add-product.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { EngComponent } from './eng/eng.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SlideBarComponent } from './composants/slide-bar/slide-bar.component';
import { NgImageSliderModule } from 'ng-image-slider';
import { AlertModule } from '@coreui/angular';
import { ProductPromoComponent } from './composants/product-promo/product-promo.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { NavbarComponent } from './composants/navbar/navbar.component';
import { DemandeDetailsComponent } from './demande-details/demande-details.component';
import { LoginComponent } from './composants/login/login.component';
import { AppHttpInterceptor } from './interceptor/app-http.interceptor';
import { RegistrationClientComponent } from './registration-client/registration-client.component';
import { ContactComponent } from './composants/contact/contact.component';
import { FooterComponent } from './composants/footer/footer.component';
import { SearchPipe } from './pipes/search.pipe';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CartComponent,
    AccountComponent,
    ProductsComponent,
    ProductDetailsComponent,
    AdminHomeComponent,
    SideBarreComponent,
    ListesProduitsComponent,
    AddProductComponent,
    EngComponent,
    SlideBarComponent,
    ProductPromoComponent,
    NavbarComponent,
    DemandeDetailsComponent,
    LoginComponent,
    RegistrationClientComponent,
    ContactComponent,
    FooterComponent,
    SearchPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgImageSliderModule,
    AlertModule,
    NgxPaginationModule,
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    
  ],
  providers: [
    {provide:HTTP_INTERCEPTORS,useClass:AppHttpInterceptor,multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
