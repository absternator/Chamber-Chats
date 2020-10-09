import firebase from "firebase/app"
import "firebase/auth";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDJA3-_lSZTP8Iv5jnMGxHchiQfacOn_UU",
    authDomain: "whatsapp-clone-25e68.firebaseapp.com",
    databaseURL: "https://whatsapp-clone-25e68.firebaseio.com",
    projectId: "whatsapp-clone-25e68",
    storageBucket: "whatsapp-clone-25e68.appspot.com",
    messagingSenderId: "277063334087",
    appId: "1:277063334087:web:90583053c7ec6c7b8166e2",
    measurementId: "G-S5Y9JGB06J"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const auth = firebase.auth();
  const providerGoogle = new firebase.auth.GoogleAuthProvider();

  export {auth, providerGoogle};
