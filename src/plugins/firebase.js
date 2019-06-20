import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyB8xhykboIiBUDERtruP9NPqZvTB9l-2EI",
    authDomain: "chat-9d2fe.firebaseapp.com",
    databaseURL: "https://chat-9d2fe.firebaseio.com",
    projectId: "chat-9d2fe",
    storageBucket: "",
    messagingSenderId: "781703815603",
    appId: "1:781703815603:web:41def5a76382e8aa"
}

// Initialize Firebase
firebase.initializeApp(firebaseConfig)

export default firebase
