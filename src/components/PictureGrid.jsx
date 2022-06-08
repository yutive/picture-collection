import {useState, useEffect} from "react";
import {getAllImages} from "./getData";
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'


function splitToChunks(array, parts) {
    let result = [];
    for (let i = parts; i > 0; i--) {
        result.push(array.splice(0, Math.ceil(array.length / i)));
    }
    console.log(result);
    return result;
}

const PictureGrid = ({album, modifiedAt}) => {
    console.count("PictureGrid")
    const [allUrls, setUrls] = useState([])

    useEffect(() => {
        getAllImages(album).then(urls => setUrls(urls, 3))
    }, [album, modifiedAt])

    const pictureInColumns = splitToChunks(allUrls, 3)

    return (
        <div className="mt-3">
            <div className="container px-5 py-2 mx-auto lg:pt-12 lg:px-32">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    <div className="flex flex-col flex-wrap justify-start items-stretch place-content-stretch">
                        {pictureInColumns[0].map(url =>
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
                            </div>)}
                    </div>
                    <div className="flex flex-col flex-wrap justify-start items-stretch place-content-stretch">
                        {pictureInColumns[1].map(url =>
                            <div key={url} className="w-full p-1 md:p-2">
                                <Zoom
                                    zoomMargin={10}
                                >
                                    <img
                                        className="block object-cover object-center w-full h-full rounded-lg"
                                        src={url}
                                        alt={url}
                                    />
                                </Zoom>
                            </div>)}
                    </div>
                    <div className="flex flex-col flex-wrap justify-start items-stretch place-content-stretch">
                        {pictureInColumns[2].map(url =>
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
                            </div>)}
                    </div>
                </div>
            </div>
        </div>)
}

export default PictureGrid;