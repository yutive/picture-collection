import React from "react";
import {getAllImages} from "./getData";
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'

const PictureGrid = ({ album }) => {
    const [allUrls, setUrls] = React.useState([])
    getAllImages(album).then(urls => setUrls(urls))

    return (
        <div className="mt-3">
            <div className="grid grid-cols-3 gap-4">
                {allUrls.map(url =>
                    <Zoom key={url} zoomMargin={10}>
                        <img src={url} alt={url} className="rounded"/>
                    </Zoom>
                )}
            </div>
        </div>
    )
}

export default PictureGrid;