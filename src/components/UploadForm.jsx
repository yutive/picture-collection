import React, {useState,useEffect} from 'react';
import {ref, uploadBytes} from "firebase/storage";
import {storage} from "../firebase/config";



const UploadForm = ({album, onUpload}) => {
    const [file, setFile] = useState(null);
    const [error, setError] = useState(null);
    const [alert, setAlert] = useState(false);
    useEffect(() => {
        setTimeout(() => {
            setAlert(false);
        }, 10000);
    }, [alert]);

    const types = ['image/png', 'image/jpg', 'image/jpeg']

    function uploadPicture(file) {
        let uuid = crypto.randomUUID()
        let name = album + "/" + uuid
        const storageRef = ref(storage, name);
        uploadBytes(storageRef, file).then((snap) => onUpload());
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
            }
        }
        if (count === 1) {
            setAlert(true)
            setError(count + ' File has failed in cause of wrong format')
        } else if (count > 1) {
            setAlert(true)
            setError(count + ' Files have failed in cause of wrong format')
        }


    }

    return (

        <form>
            <input type='file' multiple onChange={changeHandler}
                   className="w-auto mb-6 block w-full text-sm text-slate-500 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-violet-50 file:text-violet-700 hover:file:bg-violet-100"/>
            <div className='output'>
                {alert &&
                    <div
                        className="p-4 mb-4 text-sm text-yellow-700 bg-yellow-100 rounded-lg dark:bg-yellow-200 dark:text-yellow-800"
                        role="alert">
                        <span className="font-medium">Warning! </span>{error}
                    </div>
                }
                {file && <div>{file.name}</div>}
            </div>
        </form>

    )

}

export default UploadForm;