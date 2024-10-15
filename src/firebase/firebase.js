import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAkulGhe8Yb3EMQ983A6zQB31piIlMYkWk",
  authDomain: "golobe-9ae78.firebaseapp.com",
  projectId: "golobe-9ae78",
  storageBucket: "golobe-9ae78.appspot.com",
  messagingSenderId: "112268345421",
  appId: "1:112268345421:web:e7b33fa809e3e82c4e9c04",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { app, auth, db, storage };
