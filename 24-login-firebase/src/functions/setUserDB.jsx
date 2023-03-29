import { collection, doc, setDoc } from 'firebase/firestore';
import { db } from '../services/firebaseConfig';
import updateImageUserDB from './updateImageUserDB';

let setUserDB = async (data, uid) => {
    try {
        await updateImageUserDB(uid);

        await setDoc(doc(collection(db, 'users'), uid), data);
    } catch (e) {
        console.error('Error adding document: ', e);
    }
};

export default setUserDB;
