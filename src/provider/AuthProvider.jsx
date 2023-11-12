import React, { createContext, useEffect, useState } from "react";
import {
  GithubAuthProvider,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  updateProfile,
} from "firebase/auth";
import app from "../firebase/firebase.config";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const auth = getAuth(app);
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();
  const [user, setUser] = useState(null);

  // user registration by email and password
  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const signedInUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  const updateUser = (user, data) => {
    return updateProfile(user, data);
  };

  //   user registration by by google provider
  const createUserWithGoogle = () => {
    return signInWithPopup(auth, googleProvider);
  };

  // user registration by by github provider
  const createUserWithGithub = () => {
    return signInWithPopup(auth, githubProvider);
  };

  //   observing user while user is logged in
  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (createUser) => {
      setUser(createUser);
    });
    return () => {
      unSubscribe();
    };
  }, []);

  const authInfo = {
    user,
    createUser,
    signedInUser,
    updateUser,
    createUserWithGoogle,
    createUserWithGithub,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
