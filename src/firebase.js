import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDiKVcjyAmrlqkUa2NKEpmHj3Pyyyle_RI",
  authDomain: "interior-design-a36b9.firebaseapp.com",
  databaseURL: "https://interior-design-a36b9-default-rtdb.firebaseio.com",
  projectId: "interior-design-a36b9",
  storageBucket: "interior-design-a36b9.appspot.com",
  messagingSenderId: "170101833390",
  appId: "1:170101833390:web:c030cfefe42f4a1502b73f",
  measurementId: "G-MZGXG0RPZM"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export{auth,googleProvider}
