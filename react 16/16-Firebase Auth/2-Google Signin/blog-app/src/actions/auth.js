import {firebase, googleAuthProvider} from '../firebase/firebaseConfig';

export const login = () => {
    return firebase.auth().signInWithPopup(googleAuthProvider);
}