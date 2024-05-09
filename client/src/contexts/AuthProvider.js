"use client";
import {
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { app } from "../firebase/firebase.config";

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const googleProvider = new GoogleAuthProvider();

  const me = { name: "bipul", ages: "25 years" };

  const googleSignUp = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  useEffect(() => {
    return onAuthStateChanged(auth, (currentUser) => {
      // console.log('user observing');
      setUser(currentUser);
      setLoading(false);
    });
  }, []);

  const authInfo = {
    me,
    googleSignUp,
    logOut,
    // user,
    // loading,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};
export default AuthProvider;
