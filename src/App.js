import React from 'react';
import Title from './components/Title';
import './index.css';
import UploadForm from './components/UploadForm';
import PictureGrid from "./components/PictureGrid";

function App() {return (
        <div className="App">
            <Title/>
            <UploadForm/>
            <PictureGrid/>
        </div>
    );
}

export default App;
