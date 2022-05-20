
import React from "react";
import {getAllImages2} from "./downlaodPics";

const PictureGrid = () => {
    const [allUrls, setUrls] = React.useState([])
    const handleClick = () => getAllImages2().then(urls => setUrls(urls))

    return (
        <div className="img-grid">
            images
            <button onClick={handleClick} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded">
                List all songs
            </button>

            {allUrls.map(url => <img key={url} src={url} alt={url} />)}
        </div>
    )
}

export default PictureGrid;