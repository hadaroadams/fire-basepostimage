import { initializeApp } from "firebase/app";
import { getStorage } from 'firebase/storage'
const firebaseConfig = {
  apiKey: "AIzaSyA6DX8AP_POj2qApYi0wysp_BckZT2uJWk",
  authDomain: "file-upload-f7b46.firebaseapp.com",
  projectId: "file-upload-f7b46",
  storageBucket: "file-upload-f7b46.appspot.com",
  messagingSenderId: "316929373318",
  appId: "1:316929373318:web:c2e6c16e6c7f62e34d0d07"
};


const app = initializeApp(firebaseConfig);

export const storage = getStorage(app)