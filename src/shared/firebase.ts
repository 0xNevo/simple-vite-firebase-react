// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBK4Hc83DArjOlHrx4TR41Z_KVZ8-LFZe4",
    authDomain: "my-app-7ef56.firebaseapp.com",
    databaseURL: "https://my-app-7ef56-default-rtdb.firebaseio.com",
    projectId: "my-app-7ef56",
    storageBucket: "my-app-7ef56.appspot.com",
    messagingSenderId: "23994851670",
    appId: "1:23994851670:web:30841151774f8fb690b6f7",
    measurementId: "G-0EQWLQRVC7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;