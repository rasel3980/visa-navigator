import React, { createContext } from 'react';
export const authContext = createContext();


const AuthProvider = ({ routes }) => {
    const handleSignIN = (Email,Password)=>{
        return signInWithEmailAndPassword(auth,Email,Password)
        
      }
      const authInfo ={
        handleSignIN
      }
    return (
        <div>
           <authContext.Provider value={authInfo}>{routes}</authContext.Provider> 
        </div>
    );
};

export default AuthProvider;