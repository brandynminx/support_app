import firebase from "firebase/compat/app";
import 'firebase/compat/firestore'; 

const settings = {timestampsInSnapshots: true};

const config = {
    apiKey: "AIzaSyDZMzuWK7CDs5QCoB_z-bDlwpZpWVQmm20",
    authDomain: "supportapp-fc4b8.firebaseapp.com",
    projectId: "supportapp-fc4b8",
    storageBucket: "supportapp-fc4b8.appspot.com",
    messagingSenderId: "805548432631",
    appId: "1:805548432631:web:82ba369082b872b45c07f2",
    measurementId: "${config.measurementId}"
};
firebase.initializeApp(config);

firebase.firestore().settings(settings);

export default firebase;