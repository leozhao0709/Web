import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyBMjQ1f5IoejzUscKbD0YcGX8yR5GCvmfY',
  authDomain: 'd3-learn-3c0d3.firebaseapp.com',
  projectId: 'd3-learn-3c0d3',
  storageBucket: 'd3-learn-3c0d3.appspot.com',
  messagingSenderId: '454698864442',
  appId: '1:454698864442:web:ca96d20294ed253fd9ca03',
  measurementId: 'G-0KP4FC446Y',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
// db.settings({ timestampsInSnapshots: true });

export default db;
