import React from 'react';
import Title from './components/Title';
import './index.css';
import AlbumSelection from "./components/AlbumSelection"
import "react-router-dom";
import Signup from "./components/Signup";
import Account from "./components/Account";
import {Routes, Route} from "react-router-dom";
import {AuthContextProvider} from "./context/AuthContext";
import Signin from "./components/Signin";


function App() {
    return (<div className="mr-6 ml-6">
            <Title/>
            <AuthContextProvider>
                <Routes>
                    <Route path='/' element={<AlbumSelection/>}/>
                    <Route path='/signup' element={<Signup/>}/>
                    <Route path='/signin' element={<Signin/>}/>
                    <Route path='/account' element={<Account/>}/>
                </Routes>
            </AuthContextProvider>
        </div>);
}

export default App;
