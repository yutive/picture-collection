import React from 'react';
import {Routes, Route} from "react-router-dom";
import {AuthContextProvider} from "./context/AuthContext";
import './index.css';

import AlbumSelection from "./components/AlbumSelection"
import Signup from "./components/Signup";
import Account from "./components/Account";
import Signin from "./components/Signin";
import ProtectedRoute from "./components/ProtectedRoute";
import Navbar from "./components/Navbar";




function App() {
    return (<div>
        <AuthContextProvider>
            <Navbar/>
            <Routes>
                <Route
                    path='/'
                    element={
                        <ProtectedRoute>
                            <AlbumSelection/>
                        </ProtectedRoute>
                    }/>
                <Route path='/signup' element={<Signup/>}/>
                <Route path='/signin' element={<Signin/>}/>
                <Route
                    path='/account'
                    element={
                        <ProtectedRoute>
                            <Account/>
                        </ProtectedRoute>
                    }/>
            </Routes>
        </AuthContextProvider>
    </div>);
}

export default App;
