import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDe_V4Ly3NfW69sPLfn18apAmFkgsCrVk8",
  authDomain: "eventbutterfly-9c9ec.firebaseapp.com",
  projectId: "eventbutterfly-9c9ec",
  storageBucket: "eventbutterfly-9c9ec.appspot.com",
  messagingSenderId: "475808790742",
  appId: "1:475808790742:web:940f62580b7bc91b0c3177",
  measurementId: "G-GZD9VS7CBR"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
