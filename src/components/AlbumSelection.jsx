import React, {useState, useEffect} from 'react';

import UploadForm from './UploadForm';
import PictureGrid from "./PictureGrid";
import {getAllAlbums} from "./getData";
import {ref, uploadBytes} from "firebase/storage";
import {storage} from "../firebase/config";
import {UserAuth} from "../context/AuthContext";

const AlbumSelection = () => {
    const {user} = UserAuth();
    const [showAlbum, setShowAlbum] = useState(null);
    const [modifiedGalleryAt, setModifiedGalleryAt] = useState(null);
    const [modifiedAlbumAt, setModifiedAlbumAt] = useState(null);
    const [allAlbums, setAlbums] = useState([]);
    const chosenButtonStyle = "bg-violet-500 hover:bg-violet-700 text-white font-bold py-1 px-2 rounded mb-3 mt-3 mr-3 overflow-x-auto";
    const buttonStyle = "bg-violet-500 opacity-60 text-white font-bold py-1 px-2 rounded mb-3 mt-3 mr-3 overflow-x-auto";
    console.count("AlbumSelection")

    useEffect(() => {
        getAllAlbums().then(albums => setAlbums(albums))
    }, [modifiedAlbumAt])


    function handleClick(event) {
        setShowAlbum(event.target.value)
    }

    const handleKeyPress = (event) => {
        if (event.key === 'Enter' && event.target.value !== "") {
            uploadAlbum(event.target.value);
            event.target.value = "";
        }
    }

    function uploadAlbum(albumName) {
        let name = albumName + "/.keep";
        const storageRef = ref(storage, name);
        uploadBytes(storageRef).then(() => setModifiedAlbumAt(new Date()));
    }

    console.log(user)

    return (<div className="mr-6 ml-6">
        <h2 className="text-center text-2xl mt-4 mb-4">
            -Your Pictures-
        </h2>
        <div className="overflow-auto max-h-[120px] mb-4 ml-0">
            {allAlbums.map(name => <button
                key={name}
                value={name}
                onClick={handleClick}
                className={name !== showAlbum ? buttonStyle : chosenButtonStyle}>
                {name}
            </button>)}
            {user && <input type="text" placeholder="New Album" onKeyDown={handleKeyPress}
                            className="w-[105px] placeholder:italic placeholder:text-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-600 focus:ring-1 bg-violet-500 opacity-60 text-white font-bold py-1 px-2 rounded mb-3 mt-3 mr-3 overflow-x-auto"
            />}
        </div>
        {showAlbum && <UploadForm onUpload={() => setModifiedGalleryAt(new Date())} album={showAlbum}/>}
        <PictureGrid album={showAlbum} modifiedAt={modifiedGalleryAt}/>
    </div>)
}
export default AlbumSelection;