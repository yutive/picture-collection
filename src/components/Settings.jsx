import React, {useState, useEffect} from 'react';
import {getAllAlbums} from "./getData";


const Settings = () => {
    const [allAlbums, setAlbums] = useState([]);

    useEffect(() => {
        getAllAlbums().then(albums => setAlbums(albums))
    }, [])
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
                    className="hover:bg-red-500 hover:line-through bg-violet-700 opacity-60 text-white font-bold py-1 px-2 rounded mb-3 mt-3 mr-3 overflow-x-auto">
                    {name}
                </button>)}

            </div>
        </div>
    );
}

export default Settings;