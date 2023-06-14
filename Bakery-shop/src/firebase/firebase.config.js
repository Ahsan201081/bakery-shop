// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC15yfm3wfKJfS1Oplq3QaKIfS1r6j5K1A",
  authDomain: "bakery-shop-b1167.firebaseapp.com",
  projectId: "bakery-shop-b1167",
  storageBucket: "bakery-shop-b1167.appspot.com",
  messagingSenderId: "305454633456",
  appId: "1:305454633456:web:a4b3859d70c108d33e0d35"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;