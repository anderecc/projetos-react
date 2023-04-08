import {
    createUserWithEmailAndPassword,
    deleteUser,
    signInWithEmailAndPassword,
    signOut,
} from 'firebase/auth';
import { auth, db } from '../../services/firebaseConfig';
import {
    collection,
    deleteDoc,
    doc,
    getDoc,
    getDocs,
    setDoc,
    updateDoc,
} from 'firebase/firestore';
import {
    deleteObject,
    getDownloadURL,
    getStorage,
    ref,
    uploadBytes,
} from 'firebase/storage';

const storage = getStorage();

let setOrUpdateImageUserBD = async (uid, fileImage) => {
    const storageRef = ref(storage, `users/${uid}/${uid}-image.jpeg`);
    if (fileImage) {
        await uploadBytes(storageRef, fileImage);
    } else {
        await fetch('./images/profile.png').then((res) =>
            uploadBytes(storageRef, res.blob())
        );
    }
};

export let setUserAuth = (user) => {
    return async (dispatch) => {
        await dispatch({ type: 'SET_USER_UID', payload: user.uid });
        await dispatch(getUserDB(user.uid));
        await dispatch(getUsersDB());
        dispatch(setLoading(false));
    };
};

export let login = (email, password) => {
    return (dispatch, getState) => {
        dispatch(setLoading(true));
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;

                dispatch(setLoading(false));
                dispatch(getUserDB(user.uid));
                dispatch(getUsersDB());
                dispatch({ type: 'SET_USER_UID', payload: user.uid });
            })
            .catch(async () => {
                let user = await getState();
                dispatch(setLoading(false));
                dispatch(
                    setError({
                        login: {
                            ...user.user.errors.login,
                            db: 'E-mail ou senha está incorreto.',
                        },
                    })
                );
            });
    };
};

export let register = (data) => {
    return async (dispatch, getState) => {
        dispatch(setLoading(true));
        createUserWithEmailAndPassword(auth, data.email, data.password)
            .then(async (userCredential) => {
                const user = userCredential.user;
                await setOrUpdateImageUserBD(user.uid);
                await setDoc(doc(collection(db, 'users'), user.uid), data);

                // Signed in
                dispatch(setLoading(false));
                dispatch(getUserDB(user.uid));
                dispatch(getUsersDB());
                dispatch({ type: 'SET_USER_UID', payload: user.uid });
                // ...
            })
            .catch(async (error) => {
                let user = await getState();
                dispatch(setLoading(false));
                dispatch(
                    setError({
                        register: {
                            ...user.user.errors.register,
                            db: error.message,
                        },
                    })
                );
            });
    };
};

export let getUserDB = (uid) => {
    return async (dispatch) => {
        dispatch(setLoading(true));
        let userData = await getDoc(doc(db, 'users', uid));
        let user = userData ? userData.data() : {};

        await getDownloadURL(ref(storage, `users/${uid}/${uid}-image.jpeg`))
            .then((res) => {
                user = { ...user, image: res };
                dispatch(setLoading(false));
                dispatch({ type: 'SET_USER_INFOS', payload: user });
            })
            .catch((error) => {
                console.log(error);
            });
    };
};

export let getUsersDB = () => {
    return async (dispatch) => {
        let data = await getDocs(collection(db, 'users'));
        let users = [];
        data.forEach((user) => (users = [...users, user.data()]));
        users = users.sort((a, b) => a.id - b.id);

        dispatch({ type: 'SET_USERS', payload: users });
    };
};

export let logOut = () => {
    return (dispatch) => {
        signOut(auth)
            .then(async () => {
                await dispatch({ type: 'SET_USER_UID', payload: '' });
                return window.location.reload(false);
            })
            .catch((error) => {
                console.log(error);
            });
    };
};

export let updateUserDB = (uid, fileImage, data) => {
    return async (dispatch) => {
        dispatch(setLoading(true));
        if (fileImage) {
            await updateDoc(doc(db, 'users', uid), data);
            await setOrUpdateImageUserBD(uid, fileImage);
            dispatch(setLoading(false));
            dispatch(getUserDB(uid));
            dispatch(getUsersDB());
            // 'file' comes from the Blob or File API
        } else {
            await updateDoc(doc(db, 'users', uid), data);
            dispatch(setLoading(false));
            dispatch(getUserDB(uid));
            dispatch(getUsersDB());
        }
    };
};

export let deleteUserDB = (uid) => {
    return async (dispatch) => {
        dispatch(setLoading(true));
        await deleteDoc(doc(db, 'users', uid));

        await deleteObject(ref(storage, `users/${uid}/${uid}-image.jpeg`));

        const user = auth.currentUser;
        deleteUser(user)
            .then(() => {
                dispatch(setLoading(false));
                dispatch({ type: 'SET_USER_UID', payload: '' });
                return window.location.reload(false);
            })
            .catch((error) => {
                console.log(error);
            });
    };
};

export let setLoading = (value) => {
    return (dispatch) => {
        dispatch({ type: 'SET_LOADING', payload: value });
    };
};

export let setError = (value) => {
    return (dispatch) => {
        dispatch({ type: 'SET_ERROR', payload: value });
    };
};
