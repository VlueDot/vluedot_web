import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, Router } from '@angular/router';
import { routes } from './app/app.routes';
import { AppComponent } from './app/app.component';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { provideHttpClient } from '@angular/common/http';

const environment = {
  production: false,
  firebaseConfig: {
    apiKey: "AIzaSyDDx0K_gWkMDcNkQH-WPp5DQsEVjV0v3ho",
    authDomain: "vluedotweb.firebaseapp.com",
    projectId: "vluedotweb",
    storageBucket: "vluedotweb.firebasestorage.app",
    messagingSenderId: "946970199837",
    appId: "1:946970199837:web:030233e30912f43ee783f4",
    measurementId: "G-CBWESY7PDW"
  }
};

bootstrapApplication(AppComponent, {
  providers: [
    provideRouter(routes),
    provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),
    provideAuth(() => getAuth()),
    provideHttpClient()


  ]
})

.catch(err => console.error(err));
  