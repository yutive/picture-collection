import React from 'react';
import Title from './components/Title';
import './index.css';
import AlbumSelection from  "./components/AlbumSelection"

function App() {
    return (
        <div className="App">
            <Title/>
            <AlbumSelection/>
        </div>
    );
}

export default App;
