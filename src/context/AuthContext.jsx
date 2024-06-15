import { auth, db } from "@/config/firebase";
import { createContext, useEffect, useState } from "react";
import {
  onAuthStateChanged,
  signInWithPopup,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";

export const AuthContext = createContext(null);

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState({});

  const signInWithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
    } catch (error) {
      console.log(error.message);
    }
  };

  const signIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const addUserToFs = async (password) => {
    const docRef = doc(db, "users", user?.uid);

    const userObj = {
      uid: user.uid,
      userName: user.displayName,
      userEmail: user.email,
      imgURL: user.photoURL,
      password: password,
    };

    try {
      await setDoc(docRef, userObj);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    const unSubcribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => {
      unSubcribe();
    };
  }, []);

  return (
    <AuthContext.Provider
      value={{ signInWithGoogle, signIn, createUser, addUserToFs, user }}
    >
      {children}
    </AuthContext.Provider>
  );
};
