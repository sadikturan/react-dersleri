import firebase from 'firebase';

const firebaseConfig = {
    
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const database = firebase.database();

database.ref().set({
    title: "blog title 2",
    description: "blog description 1",
    author: {
        name: "Sadık",
        surname: "Turan"
    } 
});