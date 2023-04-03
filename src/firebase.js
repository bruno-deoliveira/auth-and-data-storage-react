import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD3uz5HBu633uNmCDirp0nZ494aIUpHO14",
  authDomain: "auth2-df1cf.firebaseapp.com",
  projectId: "auth2-df1cf",
  storageBucket: "auth2-df1cf.appspot.com",
  messagingSenderId: "315731635522",
  appId: "1:315731635522:web:a8c718a4b2096f0692ecdb"
};

export const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)

