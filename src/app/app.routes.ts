import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { VlueioComponent } from './pages/vlueio/vlueio.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { VcoreLandpageComponent } from './pages/vcore-landpage/vcore-landpage.component';
import { TariusLandpageComponent } from './pages/tarius-landpage/tarius-landpage.component';

// export const routes: Routes = [

//     { path: '', component: HomeComponent },
//     { path: 'vlueio', component: VlueioComponent },
//     { path: 'test', component: ProjectsComponent },



// ];


export const routes: Routes = [
    // Ruta para el idioma predeterminado (en)


        
        { path: '', component: HomeComponent },
        { path: 'vlueio', component: VlueioComponent },
        { path: 'test', component: ProjectsComponent },
        { path: 'veep', component: VcoreLandpageComponent },
        { path: 'tarius', component: TariusLandpageComponent },


    


  ];