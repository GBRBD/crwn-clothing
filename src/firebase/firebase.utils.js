import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyBlZ1GnRaegA7cJ5TJ-1N_2nagMioBrCn4',
  authDomain: 'crwn-clothing-63033.firebaseapp.com',
  databaseURL: 'https://crwn-clothing-63033.firebaseio.com',
  projectId: 'crwn-clothing-63033',
  storageBucket: '',
  messagingSenderId: '59197006069',
  appId: '1:59197006069:web:7e81ebcbc671f22fee25bc'
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  const userRef = firestore.doc(`user/${userAuth.uid}`);

  const snapshot = await userRef.get();

  if (!snapshot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (e) {
      console.log('Error creating user :', e.message);
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
