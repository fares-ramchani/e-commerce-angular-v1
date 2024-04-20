import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CartComponent } from './cart/cart.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductsComponent } from './products/products.component';
import { AccountComponent } from './account/account.component';
import { SideBarreComponent } from './composants/side-barre/side-barre.component';
import { ListesProduitsComponent } from './composants/listes-produits/listes-produits.component';
import { AdminHomeComponent } from './page/Admin/admin-home/admin-home.component';
import { EngComponent } from './eng/eng.component';
import { SlideBarComponent } from './composants/slide-bar/slide-bar.component';
import { ProductPromoComponent } from './composants/product-promo/product-promo.component';
import { DemandeDetailsComponent } from './demande-details/demande-details.component';
import { LoginComponent } from './composants/login/login.component';
import { RegistrationClientComponent } from './registration-client/registration-client.component';
import { ContactComponent } from './composants/contact/contact.component';
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'LoginComponent', component: LoginComponent },
  { path: 'RegistrationClientComponent', component: RegistrationClientComponent },
  { path: 'SlideBarComponent', component: SlideBarComponent },
  { path: 'cart', component: CartComponent },
  { path: 'ContactComponent', component: ContactComponent },
  { path: 'product-details/:id', component: ProductDetailsComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'account', component: AccountComponent },
  { path: 'SideBarreComponent', component: SideBarreComponent },
  { path: 'AdminHomeComponent', component: AdminHomeComponent ,children:[{ path: 'ListesProduitsComponent', component: ListesProduitsComponent },
  { path: 'EngComponent', component: EngComponent }, { path: 'ProductPromoComponent', component: ProductPromoComponent },{path: 'DemandeDetailsComponent', component: DemandeDetailsComponent },]}

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }