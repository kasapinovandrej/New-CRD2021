import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAZkAVIyMtGROJMf8NIOuJF5-BH7lgaORc",
    authDomain: "crown-new2021.firebaseapp.com",
    projectId: "crown-new2021",
    storageBucket: "crown-new2021.appspot.com",
    messagingSenderId: "423254003320",
    appId: "1:423254003320:web:17250bdff82e47549fa78d"
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })
export const singInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase;