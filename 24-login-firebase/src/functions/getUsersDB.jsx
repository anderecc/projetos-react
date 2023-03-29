import { collection, getDocs } from 'firebase/firestore';
import { db } from '../services/firebaseConfig';

let getUsersDB = async () => {
    let data = await getDocs(collection(db, 'users'));
    let users = [];
    data.forEach((user) => (users = [...users, user.data()]));
    users = users.sort((a, b) => a.id - b.id);

    return data ? users : [];
};

export default getUsersDB;
