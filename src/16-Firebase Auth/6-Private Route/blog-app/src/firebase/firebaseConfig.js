import firebase from 'firebase/app';
import 'firebase/database'; 
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCYi0CIpaKKqF0PsBJUJlIZEw4-2LIpe4k",
    authDomain: "react-blog-app-ae1b5.firebaseapp.com",
    databaseURL: "https://react-blog-app-ae1b5.firebaseio.com",
    projectId: "react-blog-app-ae1b5",
    storageBucket: "react-blog-app-ae1b5.appspot.com",
    messagingSenderId: "997850333440",
    appId: "1:997850333440:web:d94d7efbaf5b815eefb3e5"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { database as default, googleAuthProvider, firebase };
