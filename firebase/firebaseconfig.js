import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDEP7VsQN7u6JVgPyevL4FghORXbT8MFz8",
  authDomain: "restraunt-app-62ed3.firebaseapp.com",
  projectId: "restraunt-app-62ed3",
  storageBucket: "restraunt-app-62ed3.firebasestorage.app",
  messagingSenderId: "787810775905",
  appId: "1:787810775905:web:f2496c49dac4d7d0a9cb20",
  measurementId: "G-W2GM6Y9GY7"
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
