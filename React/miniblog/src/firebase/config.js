import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firebase"
 
const firebaseConfig = {
  apiKey: "AIzaSyDNYgycxjQHaMZq468kfR0Tl7GURpP4luA",
  authDomain: "miniblog-5ba7b.firebaseapp.com",
  projectId: "miniblog-5ba7b",
  storageBucket: "miniblog-5ba7b.appspot.com",
  messagingSenderId: "27041959879",
  appId: "1:27041959879:web:a2a5e6b96ef621e3c253e2"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };