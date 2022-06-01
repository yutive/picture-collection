import {getStorage, ref, listAll, getDownloadURL} from "firebase/storage";

const storage = getStorage();
const baseUrl = 'gs://pic-collection-f4772.appspot.com/';

async function getAllImages(albumPath = "") {

// Create a reference under which you want to list
    const listRef = ref(storage, baseUrl + albumPath);
    const res = await listAll(listRef)

    return await Promise.all(res.items.map(async (itemRef) => await getDownloadURL(itemRef)))
}

async function getAllAlbums() {
    const listRef = ref(storage, baseUrl);
    const res = await listAll(listRef)
    return res.prefixes.map(prefix => prefix._location.path_)
}

export {storage, getAllImages, getAllAlbums}

// Find all the prefixes and items.
/*
function getAllImages() {
    listAll(listRef).then((res) => {

        res.prefixes.forEach((folderRef) => {
            // All the prefixes under listRef.
            // You may call listAll() recursively on them.
        });
        console.log(res)
        res.items.map((itemRef) => {

            return getDownloadURL(itemRef).then(url => {
                console.log("url: ", url);
            })
            // All the items under listRef.
        });
    }).catch((error) => {
        console.log(error);
        // Uh-oh, an error occurred!
    });
} */