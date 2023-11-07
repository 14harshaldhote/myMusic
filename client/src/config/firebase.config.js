import {getApp, getApps, initializeApp} from 'firebase/app';
import {} from "firebase/storage"




const firebaseConfig = {
    apiKey: "AIzaSyAwWX91yy1IUFM-VBWUCfNkT3oijYkCYTc",
    authDomain: "mymusic-f80d9.firebaseapp.com",
    projectId: "mymusic-f80d9",
    storageBucket: "mymusic-f80d9.appspot.com",
    messagingSenderId: "941890192312",
    appId: "1:941890192312:web:e8c001bc391f6d8a42054d",
    measurementId: "G-RFR0RZNWD9"
  };

  const app= getApps.length > 0 ? getApps() : initializeApp (firebaseConfig);
  const storage = getStorage(app);

  export { app,storage};