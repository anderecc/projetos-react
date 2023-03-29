import { deleteObject, getStorage, ref } from 'firebase/storage';

let deleteImageUserDB = async (uid) => {
    let storage = await getStorage();
    await deleteObject(ref(storage, `users/${uid}/${uid}-image.jpeg`));
};

export default deleteImageUserDB;
