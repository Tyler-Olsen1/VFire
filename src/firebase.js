import { initializeApp } from 'firebase';

const app = initializeApp({
    apiKey: "AIzaSyAsEQo2neUJj0H8Y6_qEWCG2uzAXY25iTo",
    authDomain: "vfire-ecbd6.firebaseapp.com",
    databaseURL: "https://vfire-ecbd6.firebaseio.com",
    projectId: "vfire-ecbd6",
    storageBucket: "vfire-ecbd6.appspot.com",
    messagingSenderId: "714170979506"
});

export const db = app.database();
export const namesRef = db.ref('names');

