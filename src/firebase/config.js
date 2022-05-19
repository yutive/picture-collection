// Import the functions you need from the SDKs you need

import * as firebase from "firebase/app";
import 'firebase/storage'
import 'firebase/filestorage'


// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

const firebaseConfig = {

  apiKey: "AIzaSyAT47mi6_zcfbPeIEGIFgIJCSVnSLCyxeU",

  authDomain: "pic-collection-f4772.firebaseapp.com",

  projectId: "pic-collection-f4772",

  storageBucket: "pic-collection-f4772.appspot.com",

  messagingSenderId: "875808359747",

  appId: "1:875808359747:web:ce711cf15739a98dcb9bf6"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();

export { projectStorage, projectFirestore}