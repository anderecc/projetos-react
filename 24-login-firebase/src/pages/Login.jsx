import { useContext, useState } from 'react';
import { AppContext } from '../context';
import { Link, Navigate } from 'react-router-dom';

import inputCondition from '../functions/inputCondition';
import styles from '../styles/login/login.module.sass';

import Header from '../components/Header';
import Content from '../components/Content';
import Footer from '../components/Footer';
import Loading from '../components/Loading';

const Login = () => {
    let { handleSignIn, state, user, handleSetError } = useContext(AppContext);
    let [email, setEmail] = useState('');
    let [password, setPassword] = useState('');
    let [disabled, setDisabled] = useState(true);

    if (user) {
        return <Navigate to={'/user'} />;
    }

    let handleSetValues = (type, value) => {
        switch (type) {
            case 'email':
                setEmail(value);
                if (inputCondition(type, value)) {
                    handleSetError({ login: '' });
                    return setDisabled(false);
                } else {
                    handleSetError({ login: 'Digite um e-mail válido.' });
                    return setDisabled(true);
                }

            default:
                break;
        }
    };

    let handleSubmit = () => {
        return handleSignIn(email, password);
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
                        <label>
                            Digite sua senha:
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </label>
                        <p className="text_error">{state.errors.login}</p>
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
