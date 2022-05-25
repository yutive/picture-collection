import React from "react";
import {getAllImages} from "./getData";
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'

const PictureGrid = () => {
    const [allUrls, setUrls] = React.useState([])
    getAllImages().then(urls => setUrls(urls))

    return (
        <div className="mt-3">
            <div className="grid grid-cols-4 gap-4">
                {allUrls.map(url =>
                    <Zoom zoomMargin={10}>
                        <img key={url} src={url} alt={url} className="rounded"/>
                    </Zoom>
                )}
            </div>
        </div>
    )
}

export default PictureGrid;