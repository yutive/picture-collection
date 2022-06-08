import React from 'react';
import {Routes, Route} from "react-router-dom";
import {AuthContextProvider} from "./context/AuthContext";
import './index.css';

import AlbumSelection from "./components/AlbumSelection"
import Signup from "./components/Signup";
import Account from "./components/Account";
import Signin from "./components/Signin";
import ProtectedRouteNotAuth from "./components/ProtectedRouteNotAuth";
import Navbar from "./components/Navbar";
import ProtectedRouteAuth from "./components/ProtectedRouteAuth";


function App() {
    return (<div>
        <AuthContextProvider>
            <Navbar/>
            <Routes>
                <Route
                    path='/'
                    element={
                        <ProtectedRouteNotAuth>
                            <AlbumSelection/>
                        </ProtectedRouteNotAuth>
                    }/>
                <Route
                    path='/signup'
                    element={
                        <ProtectedRouteAuth>
                            <Signup/>
                        </ProtectedRouteAuth>

                    }/>
                <Route
                    path='/signin'
                    element={
                        <ProtectedRouteAuth>
                            <Signin/>
                        </ProtectedRouteAuth>
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
