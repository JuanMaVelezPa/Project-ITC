import { NotfoundComponent } from './components/notfound/notfound.component';
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AboutComponent } from './components/about/about.component';
import { ClientsComponent } from './components/clients/clients.component';
import { HomeComponent } from './components/home/home.component';
import { ProductsComponent } from './components/products/products.component';
import { ContactusComponent } from './components/contactus/contactus.component';
import { ServicesComponent } from './components/services/services.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'clients', component: ClientsComponent },
  { path: 'products', component: ProductsComponent },
  { path: 'contact', component: ContactusComponent },
  { path: 'services', component: ServicesComponent },
  { path: '**', component: NotfoundComponent },
];
export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(routes);
