import { doc, updateDoc } from 'firebase/firestore';
import { db } from '../services/firebaseConfig';

let updateUserDB = async (uid, data) => {
    try {
        await updateDoc(doc(db, 'users', uid), data);
    } catch (e) {
        console.error('Error adding document: ', e);
    }
};

export default updateUserDB;
