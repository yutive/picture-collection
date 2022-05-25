import React from "react";
import UploadForm from './UploadForm';
import PictureGrid from "./PictureGrid";
import {getAllAlbums} from "./getData";

const AlbumSelection = () => {
    const [allAlbums, setAlbums] = React.useState([])
    getAllAlbums().then(albums => setAlbums(albums))

    return (
        <div>
            <div className="album-selection">
                {allAlbums.map(name =>
                    <button key={name} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded mb-3 mt-3 mr-3">
                        {name}
                    </button>
                )}
            </div>
            <UploadForm/>
            <PictureGrid album={"album1"}/>
        </div>
    )
}
export default AlbumSelection;