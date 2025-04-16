// src/tokens/vcore-firestore.token.ts
import { InjectionToken } from '@angular/core';
import { Firestore } from 'firebase/firestore';

export const VCORE_FIRESTORE = new InjectionToken<Firestore>('VCOR_FIRESTORE');