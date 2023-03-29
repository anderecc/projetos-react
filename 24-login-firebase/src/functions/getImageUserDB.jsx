import { getDownloadURL, getStorage, ref } from 'firebase/storage';

let getImageUserDB = async (uid) => {
    let storage = await getStorage();
    let url = '';
    await getDownloadURL(ref(storage, `users/${uid}/${uid}-image.jpeg`))
        .then((res) => {
            url = res;
        })
        .catch((error) => {
            console.log(error);
        });

    return url;
};

export default getImageUserDB;
