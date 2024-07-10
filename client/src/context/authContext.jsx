import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase.config";
export const AuthContext = createContext();
export const AuthContextProvider = ({ children }) => {
  const [user, setuser] = useState(null);
  const [loading, setloading] = useState(true);
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (userr) => {
      setuser(userr);
      setloading(false);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  const signUp = (email, pass) => {
    setloading(true);
    return createUserWithEmailAndPassword(auth, email, pass);
  };
  const signIn = (email, pass) => {
    setloading(true);
    return signInWithEmailAndPassword(auth, email, pass);
  };

  const logOut = () => {
    setloading(true);
    return signOut(auth);
  };

  // const login = () => {
  //   //TO DO
  //   setuser({
  //     id: 1,
  //     name: "John Doe",
  //     profilePic:
  //       "https://images.pexels.com/photos/3228727/pexels-photo-3228727.jpeg?auto=compress&cs=tinysrgb&w=1600",
  //   });
  // };

  return (
    <AuthContext.Provider value={{ user, signUp, signIn, loading, logOut }}>
      {children}
    </AuthContext.Provider>
  );
};
