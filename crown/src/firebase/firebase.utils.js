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

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;
    const userRef = firestore.doc(`/users/${userAuth.uid}`)
    const snapShot = await userRef.get()
    if (!snapShot.exists) {
        const { displayName, email } = userAuth
        const createdAt = new Date()

        try {
            await userRef.set({ displayName, email, createdAt, ...additionalData })
        } catch (err) {
            console.log('error creating user', err.message)
        }
    }
    return userRef;
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })
export const singInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase;