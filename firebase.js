// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyClJ38xm-UY8mvgt0DBVkUPs3UmP5WaZeI",
  authDomain: "whatsapp-clone-ffab8.firebaseapp.com",
  projectId: "whatsapp-clone-ffab8",
  storageBucket: "whatsapp-clone-ffab8.appspot.com",
  messagingSenderId: "167816836370",
  appId: "1:167816836370:web:7de4158d079b80fea02fcb",
  measurementId: "G-618BGBNPXX"
};

const app = initializeApp(firebaseConfig)
const auth = getAuth(app)
export {auth}