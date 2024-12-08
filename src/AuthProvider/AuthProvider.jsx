import React, { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, } from "firebase/auth";
import { auth } from "../Firebase/Firebase.init";
export const authContext = createContext();

const AuthProvider = ({ routes }) => {
    const provider = new GoogleAuthProvider();
    const [user,setUser] = useState(null);
    const [loading, setLoading] = useState(true);



    const handleSignUp = (Email, Password) => {
      setLoading(true);

        return createUserWithEmailAndPassword(auth, Email, Password)
          
      }

  const handleLogout = () => {
    // setLoading(true);

    return signOut(auth);
  };
  const handleSignIN = (Email, Password) => {
    setLoading(true);

    return signInWithEmailAndPassword(auth, Email, Password);
  };
  const handleGoogleLogin = () => {
    setLoading(true);

    return signInWithPopup(auth, provider);
  };


  const ForgetPassword = (Email) => {
    setLoading(true);

    return sendPasswordResetEmail(auth, Email);
  };

  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth,(currentUser)=>{
      // console.log(currentUser);
      if(currentUser){
        setLoading(false);
        setUser(currentUser)

      }
      else{
        setUser(null)
        setLoading(false);

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
    loading,
    ForgetPassword
  };

  return (
    <div>
      <authContext.Provider value={authInfo}>{routes}</authContext.Provider>
    </div>
  );
};

export default AuthProvider;
