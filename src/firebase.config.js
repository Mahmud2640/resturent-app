import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDYb4ya0nmSKSxvnWDb2f0V3QpORgG1omo",
  authDomain: "resturent-app-mahmud.firebaseapp.com",
  databaseURL: "https://resturent-app-mahmud-default-rtdb.firebaseio.com",
  projectId: "resturent-app-mahmud",
  storageBucket: "resturent-app-mahmud.appspot.com",
  messagingSenderId: "1059782280069",
  appId: "1:1059782280069:web:9e840e47f714c12e883aec",
};

const app = getApps.length > 0 ? getApp() : initializeApp(firebaseConfig);
const firestore = getFirestore(app);
const storage = getStorage(app);

export { app, firestore, storage };
