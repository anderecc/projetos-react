import { Link, Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';

import inputCondition from '../functions/inputCondition';
import { login, setError } from '../store/actions/userActions';
import styles from '../styles/login/login.module.sass';

import Header from '../components/Header';
import Content from '../components/Content';
import Footer from '../components/Footer';
import Loading from '../components/Loading';

const Login = () => {
    let user = useSelector((state) => state.user);
    let dispatch = useDispatch();

    let [email, setEmail] = useState('');
    let [password, setPassword] = useState('');
    let [disabled, setDisabled] = useState(true);

    let handleSetValues = (type, value) => {
        switch (type) {
            case 'email':
                setEmail(value);
                if (inputCondition(type, value)) {
                    dispatch(
                        setError({
                            login: { email: '' },
                        })
                    );
                    return setDisabled(false);
                } else {
                    dispatch(
                        setError({
                            login: { email: 'Digite um e-mail válido.' },
                        })
                    );
                    return setDisabled(true);
                }

            default:
                break;
        }
    };

    if (user.user_uid !== '') {
        return <Navigate to={'/user'} />;
    }

    let handleSubmit = () => {
        return dispatch(login(email, password));
    };
    return (
        <>
            <Header />
            {user.loading ? (
                <Content>
                    <Loading />
                </Content>
            ) : (
                <Content login>
                    <h3 className={styles.logo}>Coooder Users</h3>
                    <p className={styles.text}>Entre em sua conta</p>
                    <section className={styles.container_form}>
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
                            {user.errors.login ? user.errors.login.email : ''}
                        </p>
                        <label>
                            Digite sua senha:
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </label>
                        <p className="text_error">
                            {user.errors.login ? user.errors.login.db : ''}
                        </p>
                        <button disabled={disabled} onClick={handleSubmit}>
                            Entrar
                        </button>
                    </section>
                    <p className={styles.link_to}>
                        Não tem uma conta ? Registre agora mesmo,
                        <Link to={'/register'}> registrar-se</Link>.
                    </p>
                </Content>
            )}

            <Footer />
        </>
    );
};

export default Login;
