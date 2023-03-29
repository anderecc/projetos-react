import { getStorage, ref, uploadBytes } from 'firebase/storage';

let updateImageUserDB = async (uid, fileImage) => {
    const storage = getStorage();
    let blob = await fetch('./images/profile.png').then(async (res) =>
        res.blob()
    );
    const storageRef = ref(storage, `users/${uid}/${uid}-image.jpeg`);

    // 'file' comes from the Blob or File API
    await uploadBytes(storageRef, fileImage ? fileImage : blob);
};
export default updateImageUserDB;
