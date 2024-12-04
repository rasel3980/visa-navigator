import React, { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, } from "firebase/auth";
import { auth } from "../Firebase/Firebase.init";
export const authContext = createContext();

const AuthProvider = ({ routes }) => {
    const provider = new GoogleAuthProvider();
    const [user,setUser] = useState(null);

    const handleSignUp = (Email, Password) => {
        return createUserWithEmailAndPassword(auth, Email, Password)
          
      }

  const handleLogout = () => {
    return signOut(auth);
  };
  const handleSignIN = (Email, Password) => {
    return signInWithEmailAndPassword(auth, Email, Password);
  };
  const handleGoogleLogin = () => {
    return signInWithPopup(auth, provider);
  };


  const ForgetPassword = (Email) => {
    return sendPasswordResetEmail(auth, Email);
  };

  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth,(currentUser)=>{
      // console.log(currentUser);
      if(currentUser){
        setUser(currentUser)
      }
      else{
        setUser(null)
      }

        return ()=>{
            unsubscribe();
        }
    })
  },[])

  const authInfo = {
    handleGoogleLogin,
    handleLogout,
    handleSignUp,
    handleSignIN,
    user,
    setUser,
    ForgetPassword
  };

  return (
    <div>
      <authContext.Provider value={authInfo}>{routes}</authContext.Provider>
    </div>
  );
};

export default AuthProvider;
