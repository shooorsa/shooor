const firebaseConfig = {
    apiKey: "AIzaSyAZSFCf7piwKykf_klgGlzc4RkCXumNRUg",
    authDomain: "shooor-app.firebaseapp.com",
    projectId: "shooor-app",
    storageBucket: "shooor-app.firebasestorage.app",
    messagingSenderId: "356426973132",
    appId: "1:356426973132:web:6353917bf13a64074d6769"
};
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}
const auth = firebase.auth();
const db = firebase.firestore();
