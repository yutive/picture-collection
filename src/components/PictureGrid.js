
import React from "react";
import {getAllImages2} from "./downlaodPics";

const PictureGrid = () => {
    const [allUrls, setUrls] = React.useState([])
    const handleClick = () => getAllImages2().then(urls => setUrls(urls))

    return (
        <div className="img-grid">
            images
            <button onClick={handleClick} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded mb-3 mt-3">
                List all songs
            </button>
            <div className="grid grid-cols-4 gap-4">
                {allUrls.map(url => <img key={url} src={url} alt={url} className="rounded" />)}
            </div>
        </div>
    )
}

export default PictureGrid;