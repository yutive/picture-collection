import React, {useState, useEffect} from 'react';
import {getAllAlbums, getAllImagePaths} from "./getData";
import {getStorage, ref, deleteObject} from "firebase/storage";



const Settings = () => {
    const [allAlbums, setAlbums] = useState([])
    const [modifiedAlbumAt, setModifiedAlbumAt] = useState(null);

    const storage = getStorage();
    useEffect(() => {
        getAllAlbums().then(albums => setAlbums(albums))
    }, [modifiedAlbumAt])


    const handleDelete = (event) => {
        let albumName = event.target.value;
        deleteAlbum(albumName).then(() => setModifiedAlbumAt(new Date()));
        console.log(modifiedAlbumAt)
    }

    async function deleteAlbum(albumName) {
        let images = await getAllImagePaths(albumName);
        console.log(images);
        return Promise.all(images.map(image => {
            const desertRef = ref(storage, image);
            console.log(image, "deleting")
            return deleteObject(desertRef)
        }))
    }

    return (
        <div className="max-w-[600px] mx-auto my-4  p-4">
            <h1 className="text-2xl font-bold py-2 ">
                Delete Albums
            </h1>
            <p className="mb-2 italic text-sm">Click on the Album to delete it</p>
            <div className="overflow-auto max-h-[300px] mb-4 ml-0">
                {allAlbums.map(name => <button
                    key={name}
                    value={name}
                    onClick={handleDelete}
                    className="hover:bg-red-500 hover:line-through bg-violet-700 opacity-60 text-white font-bold py-1 px-2 rounded mb-3 mt-3 mr-3 overflow-x-auto">
                    {name}
                </button>)}

            </div>
        </div>
    );
}

export default Settings;