import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
/* const firebaseConfig = {
  apiKey: process.env.REACT_APP_apiKey,
  authDomain: process.env.REACT_APP_authDomain,
  projectId: process.env.REACT_APP_projectId,
  storageBucket: process.env.REACT_APP_storageBucket,
  messagingSenderId: process.env.REACT_APP_messagingSenderId,
  appId: process.env.REACT_APP_appId,
}; */

const firebaseConfig = {
  apiKey: "AIzaSyAiC6KRXa3dh8BMnHlIWrZO7Q25AXFYGhk",
  authDomain: "dream-event-management.firebaseapp.com",
  projectId: "dream-event-management",
  storageBucket: "dream-event-management.appspot.com",
  messagingSenderId: "895142101658",
  appId: "1:895142101658:web:dec66bf2234c94ad9b9523"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default (auth);