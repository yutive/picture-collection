import React from 'react';
import {Routes, Route} from "react-router-dom";
import {AuthContextProvider} from "./context/AuthContext";
import './index.css';

import AlbumSelection from "./components/AlbumSelection"
import Signup from "./components/Signup";
import Account from "./components/Account";
import Signin from "./components/Signin";
import Settings from "./components/Settings";
import ProtectedRouteNotAuth from "./components/ProtectedRouteNotAuth";
import Navbar from "./components/Navbar";


function App() {
    return (<div>
        <AuthContextProvider>
            <Navbar/>
            <Routes>
                <Route
                    path='/'
                    element={
                        <AlbumSelection/>
                    }/>
                <Route
                    path='/signup'
                    element={
                        <ProtectedRouteNotAuth>
                                <Signup/>
                        </ProtectedRouteNotAuth>

                    }/>
                <Route
                    path='/signin'
                    element={
                        <Signin/>
                    }/>
                <Route
                    path='/settings'
                    element={
                        <ProtectedRouteNotAuth>
                            <Settings/>
                        </ProtectedRouteNotAuth>
                    }/>
                <Route
                    path='/account'
                    element={
                        <ProtectedRouteNotAuth>
                            <Account/>
                        </ProtectedRouteNotAuth>
                    }/>
            </Routes>
        </AuthContextProvider>
    </div>);
}

export default App;
