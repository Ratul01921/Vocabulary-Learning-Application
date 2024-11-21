import {  createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";

import React, { createContext, useEffect, useState } from 'react';
import { auth } from "../Firebase/firebase.int";

export const AuthContext = createContext();
const Provider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)
    console.log(user);
    const googleProvider = new GoogleAuthProvider();

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
 
    const loginUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const googleLoginUser = () => {
        
        return signInWithPopup(auth, googleProvider)
    }

    const logOut =() => {
        setLoading(true)
        return signOut(auth)
    }

    const updateUserProfile = (updateData) =>{
        return updateProfile(auth.currentUser, updateData)
    }

    const authInfo = {
        user,
        setUser,
        createUser,
        logOut,
        loginUser,
        loading,
        updateUserProfile,
        googleLoginUser
    }

    useEffect(()=>{
       const unsubscribe = onAuthStateChanged(auth, (currentUser)=> {
            setUser(currentUser);
            setLoading(false)
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