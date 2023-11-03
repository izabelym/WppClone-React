import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';


const firebaseConfig = {
  apiKey: "AIzaSyCW0pd9ZXLJWat__Wn0HMu6kZ6rAr_MQ5I",
  authDomain: "wppclone-react.firebaseapp.com",
  projectId: "wppclone-react",
  storageBucket: "wppclone-react.appspot.com",
  messagingSenderId: "516679326238",
  appId: "1:516679326238:web:69d1d245d90856f4dfec0f"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
