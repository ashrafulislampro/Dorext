import { initializeApp } from "firebase/app";
import firebaseConfig from "./FIrebase_config";

const initAuthentication = () => {
  return initializeApp(firebaseConfig);
};

export default initAuthentication;
