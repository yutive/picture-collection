import {getStorage, ref, listAll, getDownloadURL} from "firebase/storage";

const storage = getStorage();
const baseUrl = 'gs://pic-collection-f4772.appspot.com/';

async function getAllImages(albumPath = "") {
// Create a reference under which you want to list
    const listRef = ref(storage, baseUrl + albumPath);
    const res = await listAll(listRef)
    const items = res.items.filter(item => !item._location.path_.endsWith(".keep"))
    return await Promise.all(items.map(async (itemRef) => ({ url: await getDownloadURL(itemRef), path: itemRef.fullPath})))
}

export async function getAllImagePaths(albumPath    ) {
// Create a reference under which you want to list
    const listRef = ref(storage, baseUrl + albumPath);
    let res = await listAll(listRef)
    let count = 0;
    let pathList = [];
    res.items.forEach(item => {
        pathList[count] = item._location.path_;
        count++;
    })
    return pathList
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