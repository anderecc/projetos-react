import { useContext, useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { validate } from 'email-validator';

import Footer from '../components/Footer';
import Header from '../components/Header';
import { AppContext } from '../context/index';
import styles from '../styles/register/register.module.sass';

let Register = () => {
    let { state, user, handleSetError, handleSetRegister } =
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
                            register: { email: '' },
                        });
                    } else {
                        setDisabled(true);
                        handleSetError({
                            ...state.errors,
                            register: { email: 'Enter a correct e-mail.' },
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
                        register: { password: '' },
                    });
                    return setPassword(value);
                } else {
                    handleSetError({
                        ...state.errors,
                        register: {
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
        return !disabled ? handleSetRegister({ email, password }) : null;
    };

    if (user) {
        return <Navigate to={'/'}></Navigate>;
    }

    return (
        <>
            <Header></Header>
            <main className={styles.container}>
                <h3>Register</h3>
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
                    {state.errors.register ? (
                        <p className="text_error">
                            {state.errors.register.email}
                        </p>
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
                    {state.errors.register ? (
                        <p className="text_error">
                            {state.errors.register.password}
                        </p>
                    ) : null}

                    {state.errors.register ? (
                        <p className="text_error">
                            {state.errors.register.firebase}
                        </p>
                    ) : null}

                    <button disabled={disabled} onClick={handleSubmit}>
                        {state.loading ? 'loading...' : 'Enter'}
                    </button>
                </form>
                <p>
                    Do you already have an account ? ?
                    <Link to={'/login'}>Sign in</Link>
                </p>
            </main>
            <Footer></Footer>
        </>
    );
};

export default Register;
