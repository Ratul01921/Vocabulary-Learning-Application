import {  createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";

import React, { createContext, useEffect, useState } from 'react';
import { auth } from "../Firebase/firebase.int";

export const AuthContext = createContext();
const Provider = ({children}) => {
    const [user, setUser] = useState(null);
    console.log(user);

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const loginUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut =() => {
        return signOut(auth)
    }
    const authInfo = {
        user,
        setUser,
        createUser,
        logOut,
        loginUser
    }

    useEffect(()=>{
       const unsubscribe = onAuthStateChanged(auth, (currentUser)=> {
            setUser(currentUser);
        })
        return()=> {
            unsubscribe();
        }
    },[])
    return (
        
        <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
        
    );
};

export default Provider;