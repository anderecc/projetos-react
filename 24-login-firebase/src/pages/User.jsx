import { useContext, useEffect, useState } from 'react';
import { AppContext } from '../context';

import styles from '../styles/user/user.module.sass';
import inputCondition from '../functions/inputCondition';

import Loading from '../components/Loading';
import Content from '../components/Content';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { Navigate } from 'react-router-dom';

let User = () => {
    let { state, handleUpdateUser, handleSetError, handleDeleteUser } =
        useContext(AppContext);
    let [newName, setNewName] = useState('');
    let [fileImage, setFileImage] = useState('');
    let [disabled, setDisabled] = useState(true);
    let [confirm, setConfirm] = useState(false);

    useEffect(() => {
        setNewName(state.user.name);
    }, [state.user]);

    let renderUser = () => {
        return state.user ? (
            <>
                <div className={styles.infos_container}>
                    <p className={styles.name}>
                        Nome: <span>{state.user.name}</span>
                    </p>
                    <p className={styles.email}>
                        Email: <span>{state.user.email}</span>
                    </p>
                    <p className={styles.cep}>
                        Sobrenome: <span>{state.user.lastName}</span>
                    </p>
                </div>
                <div
                    className={styles.image}
                    style={{ backgroundImage: `url(${state.user.image})` }}
                ></div>
            </>
        ) : null;
    };

    let handleSetValues = (type, value) => {
        switch (type) {
            case 'name':
                if (inputCondition(type, value)) {
                    setNewName(value);
                    handleSetError({ updateUser: '' });
                    return setDisabled(false);
                } else {
                    handleSetError({ updateUser: 'Digite um nome válido.' });
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
                        handleSetError({ updateUser: '' });
                        setFileImage(value);

                        return setDisabled(false);
                    } else {
                        handleSetError({
                            updateUser: 'Escolha apenas imagem.',
                        });
                        setFileImage('');
                        return setDisabled(true);
                    }
                } else {
                    setFileImage('');
                    handleSetError({ updateUser: '' });
                    return setDisabled(false);
                }

            default:
                break;
        }
    };

    let handleSubmit = async (e) => {
        e.preventDefault();

        !disabled
            ? handleUpdateUser(fileImage, {
                  name: newName !== '' ? newName : state.user.name,
              })
            : null;
    };

    let handleSetConfirm = (e) => {
        e.preventDefault();
        return setConfirm(true);
    };

    let handleSubmitDelete = async (e) => {
        e.preventDefault();
        return handleDeleteUser();
    };

    if (state.redirect) {
        return <Navigate to={'/'} />;
    }

    return (
        <>
            <Header />
            {!state.user.name ? (
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
                                    {state.errors.updateUser}
                                </p>
                                <div className={styles.buttons_content}>
                                    <button
                                        disabled={disabled || state.loading}
                                        onClick={(e) => handleSubmit(e)}
                                    >
                                        {state.loading
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
                                            disabled={state.loading}
                                            onClick={(e) =>
                                                handleSubmitDelete(e)
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
