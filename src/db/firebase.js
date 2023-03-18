import { initializeApp } from 'firebase/app';

import {
    getFirestore
} from 'firebase/firestore';

const firebaseConfig = {
    // Din config
    apiKey: "AIzaSyCwgNutRAs7k_u6juOX0O0OYmk5RTm-XTs",
    authDomain: "todo-list-react-aa1e4.firebaseapp.com",
    projectId: "todo-list-react-aa1e4",
    storageBucket: "todo-list-react-aa1e4.appspot.com",
    messagingSenderId: "610472845147",
    appId: "1:610472845147:web:9e248f13856cfea401c47e"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export default db