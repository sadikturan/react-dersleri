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
//    console.log('kayıt eklendi');
// })
// .catch((e) => {
//     console.log("hata", e);
// }); 


// database.ref()
//     .once("value") // on
//     .then((snapshot) => {
//         const blog = snapshot.val();
//         console.log(blog);
//     })
//     .catch((e) => {
//         console.log('okuma hatası: ', e);
//     })

database.ref().on("value", (snapshot) => {
    const blog = snapshot.val();
    console.log(blog);
});

setTimeout(() => {
    database.ref("title").set("updated blog title 1");
}, 3000);

setTimeout(() => {
    database.ref().off();
}, 6000);

setTimeout(() => {
    database.ref("title").set("updated blog title 3");
}, 9000);


