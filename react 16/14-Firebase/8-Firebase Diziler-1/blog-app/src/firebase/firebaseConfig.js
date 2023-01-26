import firebase from 'firebase/app';
import 'firebase/database'; 

const firebaseConfig = {
   
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const database = firebase.database();

const blogs = {
    101: {
        id: "1",
        title: "blog title 1"
    },
    102: {
        id: "2",
        title: "blog title 2"
    }     
}

const users= {
    "sadikturan": {
        name: "Sadık",
        surname: "Turan" 
    },
    "cinarturan": {
        name: "Çınar",
        surname: "Turan" 
    },
}

// database.ref().set({
//     blogs,
//     users
// });


database.ref("blogs/102").once("value").then((snapshot) => {
    console.log(snapshot.val());
})


database.ref("users/sadikturan").once("value").then((snapshot) => {
    console.log(snapshot.val());
})

database.ref("blogs/-MGxAhJ1MBk8tMjIFMNe").set({
    id: "4",
    title: "blog title 4"
})

database.ref("products").push({
    name: "Samsung S5",
    price: 3000,
    isApproved: false
});

database.ref("products").push({
    name: "Samsung S6",
    price: 4000,
    isApproved: true
});

database.ref("products").push({
    name: "Samsung S7",
    price: 7000,
    isApproved: true
});

// database.ref("blogs").push({
//     id: "3",
//     title: "blog title 3"
// })

// database.ref("blogs").push({
//     id: "3",
//     title: "blog title 3"
// })
  