import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { VlueioComponent } from './pages/vlueio/vlueio.component';
import { ProjectsComponent } from './components/projects/projects.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'vlueio', component: VlueioComponent },
    { path: 'test', component: ProjectsComponent },



];


// @NgModule({
//     imports: [RouterModule.forRoot(routes)],
//     exports: [RouterModule]
//   })
//   export class AppRoutingModule { }