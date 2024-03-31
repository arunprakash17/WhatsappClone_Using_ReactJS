import firebase from "firebase";

const firebaseConfig = {

   
  
  };

  const app=firebase.initializeApp(firebaseConfig);

  const auth=firebase.auth();

  const db=app.firestore();

  const googleProvider = new firebase.auth.GoogleAuthProvider();

  export { auth , googleProvider};
  
  export default db;
