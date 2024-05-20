import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import { getStorage } from 'firebase/storage';
import { setPersistence, browserSessionPersistence } from 'firebase/auth';

//Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAEaZBWc2au8U7PypK7txJgzVWoMCsdxH0",
  authDomain: "insta-13814.firebaseapp.com",
  projectId: "insta-13814",
  storageBucket: "insta-13814.appspot.com",
  messagingSenderId: "461854760834",
  appId: "1:461854760834:web:ae959c7bfc6b0c25c3399b",
  measurementId: "G-NBH3ENJPBT"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize the Firebase services
const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);

setPersistence(auth, browserSessionPersistence)
  .then(() => {
    console.log("Persistence is set to session-based");
  })
  .catch((error) => {
    console.error("Error setting persistence:", error);
  });

export { db, auth, storage };
