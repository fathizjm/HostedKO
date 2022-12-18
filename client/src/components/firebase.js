// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage} from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA03RlyzpoOT9J5ZGbp_xjRLc1deELuO5w",
  authDomain: "image-resume.firebaseapp.com",
  databaseURL: "https://image-resume-default-rtdb.firebaseio.com",
  projectId: "image-resume",
  storageBucket: "image-resume.appspot.com",
  messagingSenderId: "440631025566",
  appId: "1:440631025566:web:78fd4858e82bbd0e80008f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);