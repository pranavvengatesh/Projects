// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {createUserWithEmailAndPassword, 
    getAuth, signInWithEmailAndPassword, signOut} from "firebase/auth"
import { addDoc, collection, getFirestore } from "firebase/firestore"
import { use } from "react";
import { toast, ToastContainer } from "react-toastify";



const firebaseConfig = {
  apiKey: "AIzaSyCM20aToARrPmUlSufsFJgNG0cCjC0pmgA",
  authDomain: "netflix-clone-948e2.firebaseapp.com",
  projectId: "netflix-clone-948e2",
  storageBucket: "netflix-clone-948e2.firebasestorage.app",
  messagingSenderId: "516768014126",
  appId: "1:516768014126:web:76c973ae40e19ceae7a4bf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const signup = async (name,email,password)=>{
 
      try{
        const res = await createUserWithEmailAndPassword(auth,email,password);
         const user = res.user;
         await addDoc(collection(db,"user"),{
            uid: user.uid,
              name,
              authProvider:"local",
              email,
         });
      }catch(error){
     console.log(error)
     toast.error(error.code.split('/')[1].split('-').join(" "));
      }
}

const login = async(email,password)=>{
  try{
   await signInWithEmailAndPassword(auth,email,password);
  }catch(error){
console.log(error);
     toast.error(error.code.split('/')[1].split('-').join(" "));
  }
}
const logout = ()=>{
    signOut(auth);
}
export {auth,db,login,signup,logout}