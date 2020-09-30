import firebase from 'firebase/app';
import 'firebase/database'; 

const firebaseConfig = {
   
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const database = firebase.database();

// database.ref().set({
//     title: "blog title 1",
//     description: "blog description 2", 
//     author: {
//         name: "Sadık",
//         surname: "Turan"
//     }
// }).then(() => {
//     database.ref("tags").set(["angular","react"])
//         .then(() => {
//             console.log("etiketler eklendi.");
//         }).catch((e) => {
//             console.log("hata", e);
//         });
// })
// .catch((e) => {
//     console.log("hata", e);
// });

database.ref().set(null);

// database.ref("title")
//     .remove()
//     .then(() => {
//         console.log('title silindi.')
//     }).catch((e) => {
//         console.log(e);
//     });

// database.ref("author/name")
//     .remove()
//     .then(() => {
//         console.log('title silindi.')
//     }).catch((e) => {
//         console.log(e);
//     });

// database.ref()
//     .remove()
//     .then(() => {
//         console.log('bilgi silindi.')
//     }).catch((e) => {
//         console.log(e);
//     });


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