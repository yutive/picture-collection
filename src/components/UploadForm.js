import React, {useState} from 'react';
import {ref, uploadBytes} from "firebase/storage";
import {storage} from "../firebase/config";



const UploadForm = () => {
    const [file, setFile] = useState(null);
    const [error, setError] = useState(null);

    const types = ['image/png', 'image/jpg', 'image/jpeg']

    function uploadPic(file) {
        let uuid = crypto.randomUUID();
        const storageRef = ref(storage, uuid);
        uploadBytes(storageRef, file).then((snap) => {
        });
    }

    const changeHandler = (e) => {
        let selected = e.target.files[0];


        if (selected && types.includes(selected.type)) {
            let file = selected
            setError('')
            uploadPic(file)
        } else {
            setFile(null);
            setError('Please select an image file (png, jpg, jpeg)')
        }
    }

    return (

        <form>
            <input type='file' onChange={changeHandler}/>
            <div className='output'>
                {error && <div>{error}</div>}
                {file && <div>{file.name}</div>}
            </div>
        </form>

    )

}

export default UploadForm;