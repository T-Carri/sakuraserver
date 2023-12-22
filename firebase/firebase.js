// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"
import { doc, getDoc, getFirestore } from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyBAjyHJoK042ui2QB8pF9d1mIt5TKbUdLY",
    authDomain: "sakura-b9969.firebaseapp.com",
    databaseURL: "https://sakura-b9969-default-rtdb.firebaseio.com",
    projectId: "sakura-b9969",
    storageBucket: "sakura-b9969.appspot.com",
    messagingSenderId: "808797111816",
    appId: "1:808797111816:web:69f768f2eec728c4b0b3bd"

};

// Initialize Firebase
const app1 = initializeApp(firebaseConfig)
export const auth= getAuth(app)
export const provider = new GoogleAuthProvider();
export const db = getFirestore()




export default app1;