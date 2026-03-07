import React, { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  User,
  UserCredential,
} from "firebase/auth";
import { auth } from "../Firebase/Firebase.init";

// Types
interface AuthContextType {
  handleGoogleLogin: () => Promise<UserCredential>;
  handleLogout: () => Promise<void>;
  handleSignUp: (Email: string, Password: string) => Promise<UserCredential>;
  handleSignIN: (Email: string, Password: string) => Promise<UserCredential>;
  user: User | null;
  setUser: React.Dispatch<React.SetStateAction<User | null>>;
  loading: boolean;
  ForgetPassword: (Email: string) => Promise<void>;
}

interface AuthProviderProps {
  routes: React.ReactNode;
}

// Context
export const authContext = createContext<AuthContextType | null>(null);

const AuthProvider = ({ routes }: AuthProviderProps) => {
  const provider = new GoogleAuthProvider();
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  const handleSignUp = (Email: string, Password: string): Promise<UserCredential> => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, Email, Password);
  };

  const handleLogout = (): Promise<void> => {
    return signOut(auth);
  };

  const handleSignIN = (Email: string, Password: string): Promise<UserCredential> => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, Email, Password);
  };

  const handleGoogleLogin = (): Promise<UserCredential> => {
    setLoading(true);
    return signInWithPopup(auth, provider);
  };

  const ForgetPassword = (Email: string): Promise<void> => {
    setLoading(true);
    return sendPasswordResetEmail(auth, Email);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser: User | null) => {
      if (currentUser) {
        setUser(currentUser);
      } else {
        setUser(null);
      }
      setLoading(false);
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const authInfo: AuthContextType = {
    handleGoogleLogin,
    handleLogout,
    handleSignUp,
    handleSignIN,
    user,
    setUser,
    loading,
    ForgetPassword,
  };

  return (
    <authContext.Provider value={authInfo}>
      {routes}
    </authContext.Provider>
  );
};

export default AuthProvider;