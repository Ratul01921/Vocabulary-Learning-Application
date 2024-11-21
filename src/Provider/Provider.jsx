import {  createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from "firebase/auth";

import React, { createContext, useEffect, useState } from 'react';
import { auth } from "../Firebase/firebase.int";

export const AuthContext = createContext();
const Provider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true)
    console.log(user);

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const loginUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
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