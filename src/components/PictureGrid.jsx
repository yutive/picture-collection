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

    return (<div className="mt-3">
        <div className="container px-5 py-2 mx-auto lg:pt-12 lg:px-32">
            <div className="flex flex-wrap -m-1 md:-m-2">
                {allUrls.map(url => <div className="flex flex-wrap sm:w-max md:w-1/2 lg:w-1/3">
                    <div className="w-full p-1 md:p-2">
                        <Zoom
                            key={url}
                            zoomMargin={10}
                        >
                            <img
                                className="block object-cover object-center w-full h-full rounded-lg"
                                src={url}
                                alt={url}
                            />
                        </Zoom>
                    </div>
                </div>)}
            </div>
        </div>
    </div>)
}

export default PictureGrid;