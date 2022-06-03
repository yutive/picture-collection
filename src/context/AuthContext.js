import {createContext, useContext, useEffect, useState} from "react";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut, onAuthStateChanged,
    sendPasswordResetEmail,
    updateEmail
} from 'firebase/auth'
import {auth} from "../firebase/config";

const UserContext = createContext(undefined);

export const AuthContextProvider = ({children}) => {
    const [user, setUser] = useState({})

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const resetPassword = (auth, email) => {
        return sendPasswordResetEmail(auth, email)
    }

    const logout = () => {
        return signOut(auth)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
        });
        return () => {
            unsubscribe();
        };
    }, [])

    return (<UserContext.Provider value={{createUser, user, logout, signIn, resetPassword,updateEmail}}>
        {children}
    </UserContext.Provider>)
}

export const UserAuth = () => {
    return useContext(UserContext)
}