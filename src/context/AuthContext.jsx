import { auth, db } from "@/config/firebase";
import { createContext, useContext, useEffect, useState } from "react";
import {
  onAuthStateChanged,
  signInWithPopup,
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { KYCContext } from "./KYC";

export const AuthContext = createContext(null);

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setData } = useContext(KYCContext);

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

  const addUserToFs = async (req) => {
    const docRef = doc(db, "users", user?.uid);

    const userAuthData = {
      email: user?.email,
      password: password,
      imgUrl: user?.photoURL,
      ...req,
    };
    console.log(userAuthData);
    setData((allObj) => ({
      ...allObj,
      userAuthData,
    }));

    try {
      await setDoc(docRef, userAuthData);
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
      value={{
        signInWithGoogle,
        signIn,
        createUser,
        addUserToFs,
        user,
        email,
        setEmail,
        password,
        setPassword,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
