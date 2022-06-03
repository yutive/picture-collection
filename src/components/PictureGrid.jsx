import {useState, useEffect} from "react";
import {getAllImages} from "./getData";
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'

const PictureGrid = ({album, modifiedAt}) => {
    console.count("PictureGrid")
    const [allUrls, setUrls] = useState([])

    useEffect(() => {
        getAllImages(album).then(urls => setUrls(urls))
    }, [album, modifiedAt])

    return (
        <div className="mt-3">
            <div className="grid sm:grid-cols-3 gap-4 grid-cols-1">
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