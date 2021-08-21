import firebase from "firebase/app"
import "firebase/auth"
// import 'firebase/firestore'
// import 'firebase/storage'
// const config = {
//   apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
//   authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
//   databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
//   projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_FIREBASE__STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_FIREBASE__MESSAGING_SENDER_ID,
//   appId: process.env.REACT_APP_FIREBASE_APP_ID
// }
// console.log(config);
firebase.initializeApp({
    apiKey: "AIzaSyAScotc5RZtqa7WZlUWBjKsXARd7Cqz6cI",
    authDomain: "fir-demo-4d3d5.firebaseapp.com",
    projectId: "fir-demo-4d3d5",
    storageBucket: "fir-demo-4d3d5.appspot.com",
    messagingSenderId: "929185101651",
    appId: "1:929185101651:web:f5288626cdcfedc80013a6"
})
export default firebase
