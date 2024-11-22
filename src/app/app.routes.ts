import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { VlueioComponent } from './pages/vlueio/vlueio.component';
import { ClientspartnersComponent } from './components/clientspartners/clientspartners.component'; 


export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'vlueio', component: VlueioComponent },
    { path: 'clientpartners', component: ClientspartnersComponent },



];


// @NgModule({
//     imports: [RouterModule.forRoot(routes)],
//     exports: [RouterModule]
//   })
//   export class AppRoutingModule { }