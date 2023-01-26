import {firebase, googleAuthProvider} from '../firebase/firebaseConfig';

export const login = () => {
    return firebase.auth().signInWithPopup(googleAuthProvider);
}

export const logout = () => {
    return firebase.auth().signOut();
}