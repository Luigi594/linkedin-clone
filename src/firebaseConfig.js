import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// this is the config that firebase give us
const firebaseConfig = {

    apiKey: "AIzaSyDTEzNO1zcOPKozkaWff3zXgg2EoRAqUyQ",
    authDomain: "linkedin-clone-f9314.firebaseapp.com",
    projectId: "linkedin-clone-f9314",
    storageBucket: "linkedin-clone-f9314.appspot.com",  
    messagingSenderId: "431333171052",
    appId: "1:431333171052:web:7eb33112e15c121ba15d49"
};

// get the configuration 
const firebaseApp = initializeApp(firebaseConfig);

// get the db from firebase
const db = getFirestore(firebaseApp);

// get the auth, we're gonna be using the authentication in the loggin
const auth = getAuth();

export { db, auth };