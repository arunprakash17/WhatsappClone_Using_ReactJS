import firebase from "firebase";

const firebaseConfig = {

    apiKey: "AIzaSyDeADFP_pNsqgoHFEVFcAchChdiMmiU_aQ",
  
    authDomain: "whatsappclone-31d38.firebaseapp.com",
  
    projectId: "whatsappclone-31d38",
  
    storageBucket: "whatsappclone-31d38.appspot.com",
  
    messagingSenderId: "737658350077",
  
    appId: "1:737658350077:web:dca5cffb393d9f5fc6d194",
  
    measurementId: "G-11FPSBFN38"
  
  };

  const app=firebase.initializeApp(firebaseConfig);

  const auth=firebase.auth();

  const db=app.firestore();

  const googleProvider = new firebase.auth.GoogleAuthProvider();

  export { auth , googleProvider};
  
  export default db;