
import { getStorage, ref, listAll, getDownloadURL } from "firebase/storage";

const storage = getStorage();

// Create a reference under which you want to list
const listRef = ref(storage, 'gs://pic-collection-f4772.appspot.com/');


// Find all the prefixes and items.
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
}

async function getAllImages2() {
    const res = await listAll(listRef)

    return await Promise.all(res.items.map(async (itemRef) => await getDownloadURL(itemRef)))
}

export {storage,getAllImages2}