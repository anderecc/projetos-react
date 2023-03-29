import { deleteDoc, doc } from 'firebase/firestore';
import { db } from '../services/firebaseConfig';

let deleteUserDB = async (uid) => {
    await deleteDoc(doc(db, 'users', uid));
};

export default deleteUserDB;
