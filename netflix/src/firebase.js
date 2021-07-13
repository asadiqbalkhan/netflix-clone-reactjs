import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBS9PQCR3nhXrRPFjM59Rjq5bOvSO13uRM",
  authDomain: "netflix-clone-reactjs-72b7c.firebaseapp.com",
  projectId: "netflix-clone-reactjs-72b7c",
  storageBucket: "netflix-clone-reactjs-72b7c.appspot.com",
  messagingSenderId: "45250811161",
  appId: "1:45250811161:web:258e456899d4e9ab2a6188",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;
