//---------------------------------------------------
// replace the lines below with your own "firebaseConfig"
// key value pairs
//--------------------------------------------------- 

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyCY2s9FGK5R08fBEBA8nbAOEzAK_Bv1tvA",
  authDomain: "march02demo-c9949.firebaseapp.com",
  projectId: "march02demo-c9949",
  storageBucket: "march02demo-c9949.appspot.com",
  messagingSenderId: "1089953361277",
  appId: "1:1089953361277:web:d1b3bf7f5a8361329f7014"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// Get a reference to database
const db = firebase.firestore();
// Get a reference to the storage service, which is used to create references in your storage bucket
// const storage = firebase.storage();
