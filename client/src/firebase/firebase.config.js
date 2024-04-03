import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_apiKey,
//   authDomain: process.env.REACT_APP_authDomain,
//   projectId: process.env.REACT_APP_projectId,
//   storageBucket: process.env.REACT_APP_storageBucket,
//   messagingSenderId: process.env.REACT_APP_messagingSenderId,
//   appId: process.env.REACT_APP_appId,
// };
const firebaseConfig = {
  apiKey: "AIzaSyBuIrxoNSrTrieLIlg_qkmzqNJz_59D218",
  authDomain: "fir-practice-project-af6cc.firebaseapp.com",
  projectId: "fir-practice-project-af6cc",
  storageBucket: "fir-practice-project-af6cc.appspot.com",
  messagingSenderId: "424859241362",
  appId: "1:424859241362:web:26a0ec29d448e3936d4f4b",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
