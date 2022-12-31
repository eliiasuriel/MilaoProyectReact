
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';


  const firebaseConfig = {
  apiKey: "AIzaSyCeypI_C-ZtroqOybndRm7f4ITFD5uPCT4",
  authDomain: "milao-ecommerce.firebaseapp.com",
  projectId: "milao-ecommerce",
  storageBucket: "milao-ecommerce.appspot.com",
  messagingSenderId: "291431891420",
  appId: "1:291431891420:web:7e199c8d4682f869694f19"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);



