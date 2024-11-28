import { initializeApp, getApps, getApp } from "firebase/app";
import {getAuth} from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'


const firebaseConfig = {
  apiKey: "AIzaSyDqylKm5PbEsARuR9nkm9JDROsLIsiIy8M",
  authDomain: "study-app-c39c1.firebaseapp.com",
  projectId: "study-app-c39c1",
  storageBucket: "study-app-c39c1.firebasestorage.app",
  messagingSenderId: "258549213331",
  appId: "1:258549213331:web:455ed58e3ca5720780c566"
};

const app = !getApps.length ? initializeApp(firebaseConfig): getApp()

export const auth = getAuth(app)

export const db = getFirestore(app)