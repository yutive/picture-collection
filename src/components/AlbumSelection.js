import React, {useState, useEffect} from 'react';
import UploadForm from './UploadForm';
import PictureGrid from "./PictureGrid";
import {getAllAlbums} from "./getData";

const AlbumSelection = () => {
    const [showAlbum, setShowAlbum] = useState(null);
    const [allAlbums, setAlbums] = useState([])
    const buttonStyle = "bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded mb-3 mt-3 mr-3"
    const chosenButtonStyle = "bg-blue-500 opacity-60 text-white font-bold py-1 px-2 rounded mb-3 mt-3 mr-3"
    console.count("AlbumSelection")

    useEffect(() => {
        getAllAlbums().then(albums => setAlbums(albums))
    }, [])


    function handleClick(event) {
        setShowAlbum(event.target.value)
    }

    return (
        <div>
            <div className="album-selection">
                {allAlbums.map(name =>
                    <button key={name} value={name} onClick={handleClick}
                            className={name !== showAlbum ? chosenButtonStyle : buttonStyle}
                    >
                        {name}
                    </button>
                )}
            </div>
            <UploadForm album={showAlbum}/>
            <PictureGrid album={showAlbum}/>
        </div>
    )
}
export default AlbumSelection;