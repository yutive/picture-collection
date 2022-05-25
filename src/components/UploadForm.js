import React, {useState} from 'react';
import {ref, uploadBytes} from "firebase/storage";
import {storage} from "../firebase/config";


const UploadForm = () => {
    const [file, setFile] = useState(null);
    const [error, setError] = useState(null);

    const types = ['image/png', 'image/jpg', 'image/jpeg']

    function uploadPicture(file) {
        let uuid = crypto.randomUUID()
        const storageRef = ref(storage, uuid);
        uploadBytes(storageRef, file).then((snap) => {
        });
    }

    const changeHandler = (e) => {
        let count = 0;
        let selected = e.target.files;

        for (let i = 0; i < selected.length; i++) {
            let file = selected[i];

            if (file && types.includes(file.type)) {
                setError('')
                uploadPicture(file)
            } else {
                setFile(null);
                count++;
                if (i + 1 === selected.length){
                    setError(count+' have failed in cause of wrong format')
                }
            }
        }

    }

    return (

        <form>
            <input type='file' multiple onChange={changeHandler}/>
            <div className='output'>
                {error && <div>{error}</div>}
                {file && <div>{file.name}</div>}
            </div>
        </form>

    )

}

export default UploadForm;