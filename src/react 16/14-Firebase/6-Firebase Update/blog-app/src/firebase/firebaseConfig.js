import firebase from 'firebase/app';
import 'firebase/database'; 

const firebaseConfig = {
   
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const database = firebase.database();

database.ref().set({
    title: "blog title 1",
    description: "blog description 2", 
    author: {
        name: "Sadık",
        surname: "Turan"
    } 
}).then(() => {
   console.log('kayıt eklendi');
})
.catch((e) => {
    console.log("hata", e);
}); 

database.ref().update({
    title: "blog title",
    description: "blog description",
    "author/name": "Çınar",
    imageUrl: "1.jpg"
})

database.ref("author").update({
    name: "Ahmet"
})
