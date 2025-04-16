import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter, Router } from '@angular/router';
import { routes } from './app/app.routes';
import { AppComponent } from './app/app.component';
import { provideFirebaseApp, initializeApp } from '@angular/fire/app';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { provideHttpClient } from '@angular/common/http';

import { initializeApp as initializeApp2 } from 'firebase/app'; // para la segunda app
import { getFirestore as getFirestore2 } from 'firebase/firestore';
import {VCORE_FIRESTORE} from 'src/vcore-token'
import { connectFirestoreEmulator } from 'firebase/firestore';

const vcoreFirebaseConfig = {
    apiKey: "AIzaSyCCGR9MYHsBUYPYbyvLIluTHBwxr_DqaFU",
    authDomain: "vcore-dev.firebaseapp.com",
    databaseURL: "https://vcore-dev-default-rtdb.firebaseio.com",
    projectId: "vcore-dev",
    storageBucket: "vcore-dev.firebasestorage.app",
    messagingSenderId: "352693461235",
    appId: "1:352693461235:web:0e721c39ad3bd3f0025786",
    measurementId: "G-E5J1Z09WV3"
  }


const vcoreApp = initializeApp2(vcoreFirebaseConfig, "vcoreApp");
export const vcoreFirestore = getFirestore2(vcoreApp);
connectFirestoreEmulator(vcoreFirestore, '127.0.0.1', 8080);



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
    provideHttpClient(),
    { provide: VCORE_FIRESTORE, useValue: vcoreFirestore } 



  ]
})

.catch(err => console.error(err));
  