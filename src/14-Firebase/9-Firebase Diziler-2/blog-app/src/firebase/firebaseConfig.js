import firebase from 'firebase/app';
import 'firebase/database'; 

const firebaseConfig = {
    
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const database = firebase.database();

// database.ref("products")
//     .once("value")
//     .then((snapshot) => {
//         const products=[];

//         snapshot.forEach((product) => {
//             products.push({
//                 id: product.key,
//                 ...product.val()
//             })
//         });

//         console.log(products);
//     });

// database.ref("products").on("value", (snapshot) => {
//     const products=[];

//         snapshot.forEach((product) => {
//             products.push({
//                 id: product.key,
//                 ...product.val()
//             })
//         });

//         console.log(products);
// })

database.ref("products").push({
    name: "Samsung S5",
    price: 3000,
    isApproved: false
});

database.ref("products").on("child_removed", (snaphot) => {
    console.log(snaphot.key, snaphot.val());
})

database.ref("products").on("child_changed", (snaphot) => {
    console.log(snaphot.key, snaphot.val());
})

database.ref("products").on("child_added", (snaphot) => {
    console.log(snaphot.key, snaphot.val());
})

// database.ref("products").push({
//     name: "Samsung S5",
//     price: 3000,
//     isApproved: false
// });

// database.ref("products").push({
//     name: "Samsung S6",
//     price: 4000,
//     isApproved: true
// });

// database.ref("products").push({
//     name: "Samsung S7",
//     price: 7000,
//     isApproved: true
// });
