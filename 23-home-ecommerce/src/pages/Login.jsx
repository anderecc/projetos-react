import { useContext, useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { validate } from 'email-validator';

import Footer from '../components/Footer';
import Header from '../components/Header';
import { AppContext } from '../context/index';
import styles from '../styles/login/login.module.sass';

let Login = () => {
    let { state, user, handleSetError, handleSetLogin } =
        useContext(AppContext);

    let [email, setEmail] = useState('');
    let [password, setPassword] = useState('');
    let [disabled, setDisabled] = useState(true);

    let handleSetValues = (type, value) => {
        switch (type) {
            case 'email':
                if (value.trim() && value.length >= 0) {
                    if (validate(value)) {
                        setDisabled(false);
                        handleSetError({
                            ...state.errors,
                            login: { email: '' },
                        });
                    } else {
                        setDisabled(true);
                        handleSetError({
                            ...state.errors,
                            login: { email: 'Enter a correct e-mail.' },
                        });
                    }
                    return setEmail(value);
                } else {
                    setDisabled(true);
                    return setEmail('');
                }
            case 'password':
                if (password.length >= 6) {
                    setDisabled(false);
                    handleSetError({
                        ...state.errors,
                        login: { password: '' },
                    });
                    return setPassword(value);
                } else {
                    handleSetError({
                        ...state.errors,
                        login: {
                            password:
                                'Your password must contain at least 6 characters.',
                        },
                    });
                    setDisabled(true);
                    return setPassword(value);
                }

            default:
                break;
        }
    };

    let handleSubmit = (e) => {
        e.preventDefault();
        return !disabled ? handleSetLogin({ email, password }) : null;
    };

    if (user) {
        return <Navigate to={'/'}></Navigate>;
    }

    return (
        <>
            <Header></Header>
            <main className={styles.container}>
                <h3>Sign in</h3>
                <form>
                    <label>
                        Your e-mail:
                        <input
                            type="email"
                            value={email}
                            onChange={(e) =>
                                handleSetValues('email', e.target.value)
                            }
                        />
                    </label>
                    {state.errors.login ? (
                        <p className="text_error">{state.errors.login.email}</p>
                    ) : null}
                    <label>
                        Your Password:
                        <input
                            type="password"
                            value={password}
                            onChange={(e) =>
                                handleSetValues('password', e.target.value)
                            }
                        />
                    </label>
                    {state.errors.login ? (
                        <p className="text_error">
                            {state.errors.login.password}
                        </p>
                    ) : null}

                    {state.errors.login ? (
                        <p className="text_error">
                            {state.errors.login.firebase}
                        </p>
                    ) : null}

                    <button disabled={disabled} onClick={handleSubmit}>
                        {state.loading ? 'loading...' : 'Enter'}
                    </button>
                </form>
                <p>
                    You not account ? Register one in,{' '}
                    <Link to={'/register'}>register</Link>
                </p>
            </main>
            <Footer></Footer>
        </>
    );
};

export default Login;
