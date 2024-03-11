import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EnquireOrderComponent } from './enquire-order/enquire-order.component';
import { ProductsComponent } from './products/products.component';

//Do not add any more Imports here !!

export const routes: Routes = [
/* Refer to Instructions Document Requirement-1 and implement necessary Routing Paths
   */
{ path: '', redirectTo: '/home', pathMatch: 'full' }, // Default path redirection
{ path: 'home', component: HomeComponent },
{ path: 'products', component: ProductsComponent },
{ path: 'enquire-order/:id', component: EnquireOrderComponent },
{ path: '**', redirectTo: '/home' }, // Wildcard route for invalid paths
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
