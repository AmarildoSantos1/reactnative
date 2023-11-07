// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCaDi_mBVpqgsjaHknmyTiUk2WtKSuc1Cw",
  authDomain: "grocery-4fd86.firebaseapp.com",
  projectId: "grocery-4fd86",
  storageBucket: "grocery-4fd86.appspot.com",
  messagingSenderId: "565707934728",
  appId: "1:565707934728:web:339735ca9e055e3c03d5bd",
};

const app = initializeApp(firebaseConfig);
const authentication = getAuth(app);
const database = getFirestore();

export { authentication, database };
