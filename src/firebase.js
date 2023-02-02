import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBj9X_nFvDUKIleNjff6vSH7RRUBms7TqI",
  authDomain: "stormgames-5041c.firebaseapp.com",
  projectId: "stormgames-5041c",
  storageBucket: "stormgames-5041c.appspot.com",
  messagingSenderId: "695630888072",
  appId: "1:695630888072:web:276e209aca4b4cf436b33d",
  measurementId: "G-9N8YQF90HT",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
