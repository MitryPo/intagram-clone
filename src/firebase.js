import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyA77ldbcdQETFA6mRenVDX3QH6xogrEBws",
    authDomain: "instagram-clone-fa826.firebaseapp.com",
    projectId: "instagram-clone-fa826",
    storageBucket: "instagram-clone-fa826.appspot.com",
    messagingSenderId: "796400940436",
    appId: "1:796400940436:web:e77724ad464f186d4bcb81"
})

const db = firebaseApp.firestore()
const auth = firebase.auth()
const storage = firebase.storage()

export {db, auth, storage}