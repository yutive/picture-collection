import React from 'react';
import Title from './components/Title';
import './index.css';
import AlbumSelection from "./components/AlbumSelection"
import "react-router-dom";
import Signup from "./components/Signup";
import Signing from "./components/Signing";
import Account from "./components/Account";
import {Routes,Route} from "react-router-dom";


function App() {
    return (
        <div className="mr-6 ml-6">
            <Title/>
            <Routes>
                <Route path='/' element={<AlbumSelection/>}/>
                <Route path='/signup' element={<Signup/>}/>
                <Route path='/signin' element={<Signing/>}/>
                <Route path='/account' element={<Account/>}/>
            </Routes>
        </div>
    );
}

export default App;
