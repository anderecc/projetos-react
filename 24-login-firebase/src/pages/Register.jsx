import { useContext, useState } from 'react';
import { AppContext } from '../context';
import { Link, Navigate } from 'react-router-dom';

import styles from '../styles/register/register.module.sass';
import inputCondition from '../functions/inputCondition';

import Header from '../components/Header';
import Content from '../components/Content';
import Footer from '../components/Footer';
import Loading from '../components/Loading';

const Register = () => {
    let { handleRegister, state, user, handleSetError } =
        useContext(AppContext);
    let [email, setEmail] = useState('');
    let [password, setPassword] = useState('');
    let [name, setName] = useState('');
    let [lastName, setLastName] = useState('');
    let [disabled, setDisabled] = useState(true);

    if (user) {
        return <Navigate to={'/user'} />;
    }

    let handleSetValues = (type, value) => {
        let condition =
            name !== '' &&
            lastName !== '' &&
            inputCondition('email', email) &&
            password.length >= 6;

        condition ? setDisabled(false) : setDisabled(true);
        switch (type) {
            case 'name':
                if (inputCondition(type, value)) {
                    handleSetError({
                        register: { ...state.errors.register, name: '' },
                    });
                    return setName(value);
                } else {
                    handleSetError({
                        register: {
                            ...state.errors.register,
                            name: 'Digite um nome válido',
                        },
                    });
                    return setName('');
                }
            case 'lastName':
                if (inputCondition('name', value)) {
                    handleSetError({
                        register: { ...state.errors.register, lastName: '' },
                    });
                    return setLastName(value);
                } else {
                    handleSetError({
                        register: {
                            ...state.errors.register,
                            lastName: 'Digite um sobrenome válido',
                        },
                    });
                    return setLastName('');
                }
            case 'email':
                setEmail(value);
                if (inputCondition(type, value)) {
                    return handleSetError({
                        register: {
                            ...state.errors.register,
                            email: '',
                        },
                    });
                } else {
                    return handleSetError({
                        register: {
                            ...state.errors.register,
                            email: 'Digite um email válido',
                        },
                    });
                }

            case 'password':
                setPassword(value);
                if (value.length < 6) {
                    return handleSetError({
                        register: {
                            ...state.errors.register,
                            password:
                                'Sua senha deve conter pelo menos 6 dígitos',
                        },
                    });
                } else {
                    return handleSetError({
                        register: { ...state.errors.register, password: '' },
                    });
                }

            default:
                break;
        }
    };

    let handleSubmit = async () => {
        return !disabled
            ? handleRegister(password, {
                  email,
                  name,
                  lastName,
                  id: Date.now(),
              })
            : null;
    };
    return (
        <>
            <Header />
            {state.loading ? (
                <Content>
                    <Loading />
                </Content>
            ) : (
                <Content login>
                    <h3 className={styles.logo}>Coooder Users</h3>
                    <p className={styles.text}>Registre sua conta</p>
                    <section className={styles.container_form}>
                        <label>
                            Digite seu nome:
                            <input
                                type="text"
                                value={name}
                                onChange={(e) =>
                                    handleSetValues('name', e.target.value)
                                }
                            />
                        </label>
                        <p className="text_error">
                            {state.errors.register
                                ? state.errors.register.name
                                : ''}
                        </p>
                        <label>
                            Digite seu sobrenome:
                            <input
                                type="text"
                                value={lastName}
                                onChange={(e) =>
                                    handleSetValues('lastName', e.target.value)
                                }
                            />
                        </label>
                        <p className="text_error">
                            {state.errors.register
                                ? state.errors.register.lastName
                                : ''}
                        </p>
                        <label>
                            Digite seu e-mail:
                            <input
                                type="email"
                                value={email}
                                onChange={(e) =>
                                    handleSetValues('email', e.target.value)
                                }
                            />
                        </label>
                        <p className="text_error">
                            {state.errors.register
                                ? state.errors.register.email
                                : ''}
                        </p>
                        <label>
                            Digite sua senha:
                            <input
                                type="password"
                                value={password}
                                onChange={(e) =>
                                    handleSetValues('password', e.target.value)
                                }
                            />
                        </label>
                        <p className="text_error">
                            {state.errors.register
                                ? state.errors.register.password
                                : ''}
                        </p>
                        <p className="text_error">
                            {state.errors.register
                                ? state.errors.register.db
                                : ''}
                        </p>
                        <button disabled={disabled} onClick={handleSubmit}>
                            Registrar
                        </button>
                    </section>
                    <p className={styles.link_to}>
                        Já tem uma conta ? Entre nela agora mesmo,
                        <Link to={'/login'}> entrar</Link>.
                    </p>
                </Content>
            )}

            <Footer />
        </>
    );
};

export default Register;
