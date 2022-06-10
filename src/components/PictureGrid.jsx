import {useState, useEffect} from "react";
import {getAllImages} from "./getData";
import {UserAuth} from "../context/AuthContext";
import Zoom from 'react-medium-image-zoom'
import { getStorage, ref, deleteObject } from "firebase/storage"
import 'react-medium-image-zoom/dist/styles.css'


function splitToChunks(array, parts) {
    let result = [];
    for (let i = parts; i > 0; i--) {
        result.push(array.splice(0, Math.ceil(array.length / i)));
    }
    console.log(result);
    return result;
}

const PictureGrid = ({album, modifiedGalleryAt, modifiedAlbumAt,setModifiedGalleryAt}) => {
    const {user} = UserAuth();
    const [allUrls, setUrls] = useState([])
    useEffect(() => {
        getAllImages(album).then(urls => setUrls(urls, 3))
    }, [album, modifiedGalleryAt, modifiedAlbumAt])

    const pictureInColumns = splitToChunks(allUrls, 3)

    const handleDelete = (event) => {
        let pathName = event.target.value;
        deletePic(pathName)
    }

    function deletePic(pathName) {
        const storage = getStorage();
        const desertRef = ref(storage, pathName);
        deleteObject(desertRef).then(() => setModifiedGalleryAt(new Date()))
    }

    return (
        <div className="mt-1">
            <div className="container px-5 py-2 mx-auto lg:pt-6 lg:px-16">
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3">
                    <div className="flex flex-col flex-wrap justify-start items-stretch place-content-stretch">
                        {pictureInColumns[0].map(picture =>
                            <div key={picture.url} className="w-full p-1 md:p-2 relative">
                                <Zoom
                                    className=""
                                    zoomMargin={10}
                                >
                                    <img
                                        className="block object-cover object-center w-full h-full rounded-lg"
                                        src={picture.url}
                                        alt={picture.url}
                                    />
                                </Zoom>
                                {user &&
                                    <button
                                        className="absolute  hover:bg-red-200 lg:text-xl md:text-xl text-2xl z-50 bg-violet-200 top-0 left-0 rounded-full lg:w-8 lg:h-8 md:w-10 md:h-10 w-14 h-14"
                                        value={picture.path}
                                        onClick={handleDelete}
                                    >
                                        ❌
                                    </button>}
                            </div>)}
                    </div>
                    <div className="flex flex-col flex-wrap justify-start items-stretch place-content-stretch">
                        {pictureInColumns[1].map(picture =>
                            <div key={picture.url} className="w-full p-1 md:p-2 relative">
                                <Zoom
                                    zoomMargin={10}
                                >
                                    <img
                                        className="block object-cover object-center w-full h-full rounded-lg"
                                        src={picture.url}
                                        alt={picture.url}
                                    />
                                </Zoom>
                                {user &&
                                    <button
                                        className="absolute  hover:bg-red-200 lg:text-xl md:text-xl text-2xl z-50 bg-violet-200 top-0 left-0 rounded-full lg:w-8 lg:h-8 md:w-10 md:h-10 w-14 h-14"
                                        value={picture.path}
                                        onClick={handleDelete}
                                    >
                                        ❌
                                    </button>}
                            </div>)}
                    </div>
                    <div className="flex flex-col flex-wrap justify-start items-stretch place-content-stretch">
                        {pictureInColumns[2].map(picture =>
                            <div key={picture.url} className="w-full p-1 md:p-2 relative">
                                <Zoom
                                    zoomMargin={10}
                                >
                                    <img
                                        className="block object-cover object-center w-full h-full rounded-lg"
                                        src={picture.url}
                                        alt={picture.url}
                                    />
                                </Zoom>
                                {user &&
                                    <button
                                        className="absolute  hover:bg-red-200 lg:text-xl md:text-xl text-2xl z-50 bg-violet-200 top-0 left-0 rounded-full lg:w-8 lg:h-8 md:w-10 md:h-10 w-14 h-14"
                                        value={picture.path}
                                        onClick={handleDelete}
                                    >
                                        ❌
                                    </button>}
                            </div>)}
                    </div>
                </div>
            </div>
        </div>)
}

export default PictureGrid;