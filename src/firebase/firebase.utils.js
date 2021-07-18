import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyBGPNkiGY9dcHp8zzAPUeBlL4yOTn7jBqU',
  authDomain: 'ecom-store-2152b.firebaseapp.com',
  projectId: 'ecom-store-2152b',
  storageBucket: 'ecom-store-2152b.appspot.com',
  messagingSenderId: '975257475124',
  appId: '1:975257475124:web:9f163f079ec5d40c3fd261',
  measurementId: 'G-8YRH6XM07F',
};

export const createUserProfile = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapshot = await userRef.get();

  if (!snapshot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (err) {
      console.log(err);
    }
  }
  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
