import { doc, getDoc } from 'firebase/firestore';
import { db } from '../services/firebaseConfig';
import getImageUserDB from './getImageUserDB';

let getUserDB = async (uid) => {
    let userData = await getDoc(doc(db, 'users', uid));
    let user = userData ? userData.data() : {};

    let url = await getImageUserDB(uid);

    user = { ...user, image: url };

    return user ? user : [];
};

export default getUserDB;
