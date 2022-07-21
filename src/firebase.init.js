import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCUp9NpNY5evF_dzuQzAJDSSV8N1DJmPFc",
    authDomain: "gambling-jackpot.firebaseapp.com",
    projectId: "gambling-jackpot",
    storageBucket: "gambling-jackpot.appspot.com",
    messagingSenderId: "182417785643",
    appId: "1:182417785643:web:04eff34d733c5c1dbc3b6e"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;