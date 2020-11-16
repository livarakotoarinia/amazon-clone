import firebase from "firebase"

const firebaseApp = firebase.initializeApp ({
    apiKey: "AIzaSyB-Be4FIhzBOL0YAuXnHVKFTV-eqQepDg8",
    authDomain: "clone-36d9e.firebaseapp.com",
    databaseURL: "https://clone-36d9e.firebaseio.com",
    projectId: "clone-36d9e",
    storageBucket: "clone-36d9e.appspot.com",
    messagingSenderId: "968029220519",
    appId: "1:968029220519:web:93adc556ae49932c9bb582",
    measurementId: "G-TYRGZTSSET"
});

// const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth }