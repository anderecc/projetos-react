import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import styles from '../styles/user/user.module.sass';
import inputCondition from '../functions/inputCondition';
import {
    deleteUserDB,
    setError,
    updateUserDB,
} from '../store/actions/userActions';

import Loading from '../components/Loading';
import Content from '../components/Content';
import Footer from '../components/Footer';
import Header from '../components/Header';

let User = () => {
    let user = useSelector((state) => state.user);
    let dispatch = useDispatch();

    let [newName, setNewName] = useState('');
    let [fileImage, setFileImage] = useState('');
    let [disabled, setDisabled] = useState(true);
    let [confirm, setConfirm] = useState(false);

    let renderUser = () => {
        return user.user ? (
            <>
                <div className={styles.infos_container}>
                    <p className={styles.name}>
                        Nome: <span>{user.user.name}</span>
                    </p>
                    <p className={styles.email}>
                        Email: <span>{user.user.email}</span>
                    </p>
                    <p className={styles.cep}>
                        Sobrenome: <span>{user.user.lastName}</span>
                    </p>
                </div>
                <div
                    className={styles.image}
                    style={{ backgroundImage: `url(${user.user.image})` }}
                ></div>
            </>
        ) : null;
    };

    let handleSetValues = (type, value) => {
        switch (type) {
            case 'name':
                if (inputCondition(type, value)) {
                    setNewName(value);
                    dispatch(setError({ updateUser: '' }));
                    return setDisabled(false);
                } else {
                    dispatch(
                        setError({ updateUser: 'Digite um nome válido.' })
                    );
                    setNewName('');
                    return setDisabled(false);
                }

            case 'image':
                if (value) {
                    if (
                        value.name.includes('.jpeg') ||
                        value.name.includes('.png') ||
                        value.name.includes('.jpg')
                    ) {
                        dispatch(setError({ updateUser: '' }));
                        setFileImage(value);

                        return setDisabled(false);
                    } else {
                        dispatch(
                            setError({
                                updateUser: 'Escolha apenas imagem.',
                            })
                        );
                        setFileImage('');
                        return setDisabled(true);
                    }
                } else {
                    setFileImage('');
                    dispatch(setError({ updateUser: '' }));
                    return setDisabled(false);
                }

            default:
                break;
        }
    };

    let handleSubmit = async (e) => {
        e.preventDefault();

        !disabled
            ? dispatch(
                  updateUserDB(user.user_uid, fileImage, {
                      name: newName !== '' ? newName : user.user.name,
                  })
              )
            : null;
    };

    let handleSetConfirm = (e) => {
        e.preventDefault();
        return setConfirm(true);
    };

    return (
        <>
            <Header />
            {user.loading ? (
                <Content>
                    <Loading />
                </Content>
            ) : (
                <Content user>
                    <p className={styles.title}>Perfil</p>

                    <section className={styles.container}>
                        <article className={styles.content}>
                            {renderUser()}
                        </article>
                        <article className={styles.form_container}>
                            <form className={styles.form}>
                                <label className={styles.label}>
                                    Alterar nome:
                                    <input
                                        onChange={(e) =>
                                            handleSetValues(
                                                'name',
                                                e.target.value
                                            )
                                        }
                                        type="text"
                                        className={styles.input_name}
                                    />
                                </label>
                                <label className={styles.label}>
                                    Alterar imagem:
                                    <input
                                        type="file"
                                        accept="image/png, image/png, image/jpeg"
                                        onChange={(e) =>
                                            handleSetValues(
                                                'image',
                                                e.target.files[0]
                                            )
                                        }
                                        className={styles.input_file}
                                    />
                                </label>
                                <p className="text_error">
                                    {user.errors.updateUser}
                                </p>
                                <div className={styles.buttons_content}>
                                    <button
                                        disabled={disabled || user.loading}
                                        onClick={(e) => handleSubmit(e)}
                                    >
                                        {user.loading
                                            ? 'Enviando...'
                                            : 'Enviar'}
                                    </button>
                                    {!confirm ? (
                                        <button
                                            className={styles.delet}
                                            onClick={(e) => handleSetConfirm(e)}
                                        >
                                            Excluir Usuário
                                        </button>
                                    ) : (
                                        <button
                                            className={styles.delet_confirm}
                                            disabled={user.loading}
                                            onClick={() =>
                                                dispatch(
                                                    deleteUserDB(user.user_uid)
                                                )
                                            }
                                        >
                                            Confirmar
                                        </button>
                                    )}
                                </div>
                            </form>
                        </article>
                    </section>
                </Content>
            )}
            <Footer />
        </>
    );
};

export default User;
