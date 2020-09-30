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

// database.ref().set("yeni kayıt");
// database.ref().set({
//     title: "blog title 1"
// })
// database.ref("title").set("blog title");
// database.ref("description").set("blog description");
// database.ref("author").set({
//     name: "Çınar",
//     surname: "Turan"
// })
// database.ref("author/name").set("Çınar");
// database.ref("tags").set(["react","javascript","angular"]);
// database.ref("tags").set(["react","javascript","asp.net"]);