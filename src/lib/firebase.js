import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

// here I want to import the seed file
// import { seedDatabase } from '../seed';

const config = {
  apiKey: 'AIzaSyCdP6dFa0d6PCQtUd73LEeP4xFArr2JSqw',
  authDomain: 'instagram-yt-48da8.firebaseapp.com',
  projectId: 'instagram-yt-48da8',
  storageBucket: 'instagram-yt-48da8.appspot.com',
  messagingSenderId: '434386876879',
  appId: '1:434386876879:web:e69ca0578b45f9bf13faba'
};

const firebase = Firebase.initializeApp(config);
const { FieldValue } = Firebase.firestore;

// here is where I want to call the seed file (only ONCE!)
// seedDatabase(firebase);
// console.log('firebase', firebase);
export { firebase, FieldValue };
