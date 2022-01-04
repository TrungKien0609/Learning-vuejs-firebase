import firebase from 'firebase/app';
import "firebase/firestore"
const firebaseConfig = {
    apiKey: "AIzaSyCVliBlFy2fhff3a2Q32Yks9Lbn5iQj7UY",
    authDomain: "fireblog-30b53.firebaseapp.com",
    projectId: "fireblog-30b53",
    storageBucket: "fireblog-30b53.appspot.com",
    messagingSenderId: "562713416142",
    appId: "1:562713416142:web:ce55136b4022bde4085b9f",
    measurementId: "G-T83F2KBNZQ"
  };
const firebaseApp = firebase.initializeApp(firebaseConfig)
const timestamp = firebase.firestore.FieldValue.serverTimestamp;
export { timestamp }; /// timestamp for update
export default firebase.firestore(firebaseApp);// database kết nối